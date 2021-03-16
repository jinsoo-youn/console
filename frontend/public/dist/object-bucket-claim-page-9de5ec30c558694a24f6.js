(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["object-bucket-claim-page"],{

/***/ "./packages/noobaa-storage-plugin/src/components/object-bucket-claim-page/menu-actions.ts":
/*!************************************************************************************************!*\
  !*** ./packages/noobaa-storage-plugin/src/components/object-bucket-claim-page/menu-actions.ts ***!
  \************************************************************************************************/
/*! exports provided: menuActions, menuActionCreator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menuActions", function() { return menuActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menuActionCreator", function() { return menuActionCreator; });
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _modals_attach_deployment_obc_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modals/attach-deployment-obc-modal */ "./packages/noobaa-storage-plugin/src/components/object-bucket-claim-page/modals/attach-deployment-obc-modal.tsx");


const attachDeployment = (kind, resource) => ({
    label: 'Attach to Deployment',
    callback: () => Object(_modals_attach_deployment_obc_modal__WEBPACK_IMPORTED_MODULE_1__["attachDeploymentToOBCModal"])({
        kind,
        resource,
    }),
    accessReview: Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_0__["asAccessReview"])(kind, resource, 'patch'),
});
const menuActions = [attachDeployment, ..._console_internal_components_utils__WEBPACK_IMPORTED_MODULE_0__["Kebab"].factory.common];
const menuActionCreator = (kindObj, resource) => menuActions.map((action) => action(kindObj, resource));


/***/ }),

/***/ "./packages/noobaa-storage-plugin/src/components/object-bucket-claim-page/modals/attach-deployment-obc-modal.tsx":
/*!***********************************************************************************************************************!*\
  !*** ./packages/noobaa-storage-plugin/src/components/object-bucket-claim-page/modals/attach-deployment-obc-modal.tsx ***!
  \***********************************************************************************************************************/
/*! exports provided: attachDeploymentToOBCModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attachDeploymentToOBCModal", function() { return attachDeploymentToOBCModal; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _console_internal_components_factory_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/components/factory/modal */ "./public/components/factory/modal.tsx");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_internal_models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/internal/models */ "./public/models/index.ts");
/* harmony import */ var _console_internal_module_k8s___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @console/internal/module/k8s/ */ "./public/module/k8s/index.ts");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");








const AttachDeploymentToOBCModal = Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_4__["withHandlePromise"])((props) => {
    const [requestDeployment, setRequestedDeployment] = react__WEBPACK_IMPORTED_MODULE_1__["useState"]({});
    const [deploymentObjects, setDeployments] = react__WEBPACK_IMPORTED_MODULE_1__["useState"]({});
    const [deploymentNames, setDeploymentNames] = react__WEBPACK_IMPORTED_MODULE_1__["useState"]({});
    const { handlePromise, close, cancel, resource, deployments } = props;
    const obcName = Object(_console_shared__WEBPACK_IMPORTED_MODULE_7__["getName"])(resource);
    const deploymentData = lodash__WEBPACK_IMPORTED_MODULE_0__["get"](deployments, 'data');
    const inProgress = lodash__WEBPACK_IMPORTED_MODULE_0__["get"](props, 'loaded');
    const errorMessage = lodash__WEBPACK_IMPORTED_MODULE_0__["get"](props, 'loadError');
    react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](() => {
        const deploymentObjectList = {};
        const deploymentNameList = {};
        lodash__WEBPACK_IMPORTED_MODULE_0__["map"](deploymentData, (data) => {
            const name = Object(_console_shared__WEBPACK_IMPORTED_MODULE_7__["getName"])(data);
            deploymentObjectList[name] = data;
            deploymentNameList[name] = name;
        });
        setDeployments(deploymentObjectList);
        setDeploymentNames(deploymentNameList);
    }, [deploymentData, deployments]);
    const getPatches = () => {
        const configMapRef = {
            configMapRef: {
                name: obcName,
            },
        };
        const secretMapRef = {
            secretRef: {
                name: obcName,
            },
        };
        const containers = lodash__WEBPACK_IMPORTED_MODULE_0__["get"](requestDeployment, 'spec.template.spec.containers', []);
        const patches = containers.reduce((patch, container, i) => {
            if (lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](container.envFrom)) {
                patch.push({
                    op: 'add',
                    path: `/spec/template/spec/containers/${i}/envFrom`,
                    value: [configMapRef],
                });
                patch.push({
                    op: 'add',
                    path: `/spec/template/spec/containers/${i}/envFrom/-`,
                    value: secretMapRef,
                });
            }
            else {
                patch.push({
                    op: 'add',
                    path: `/spec/template/spec/containers/${i}/envFrom/-`,
                    value: configMapRef,
                });
                patch.push({
                    op: 'add',
                    path: `/spec/template/spec/containers/${i}/envFrom/-`,
                    value: secretMapRef,
                });
            }
            return patch;
        }, []);
        return patches;
    };
    const submit = (e) => {
        e.preventDefault();
        handlePromise(Object(_console_internal_module_k8s___WEBPACK_IMPORTED_MODULE_6__["k8sPatch"])(_console_internal_models__WEBPACK_IMPORTED_MODULE_5__["DeploymentModel"], requestDeployment, getPatches()))
            .then((res) => {
            _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_4__["history"].push(`${Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_4__["resourceObjPath"])(res, Object(_console_internal_module_k8s___WEBPACK_IMPORTED_MODULE_6__["referenceFor"])(res))}/environment`);
            close();
        })
            .catch(() => {
            close();
        });
    };
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("form", { onSubmit: submit, name: "form", className: "modal-content modal-content--no-inner-scroll" },
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_console_internal_components_factory_modal__WEBPACK_IMPORTED_MODULE_3__["ModalTitle"], null, "Attach OBC to a Deployment"),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_console_internal_components_factory_modal__WEBPACK_IMPORTED_MODULE_3__["ModalBody"], null,
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("label", { htmlFor: "dropdown-selectbox", className: "control-label co-required" }, "Deployment Name"),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_4__["Dropdown"], { items: deploymentNames, dropDownClassName: "dropdown--full-width", id: "dropdown-selectbox", onChange: (deploymentName) => setRequestedDeployment(deploymentObjects[deploymentName]) })),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_console_internal_components_factory_modal__WEBPACK_IMPORTED_MODULE_3__["ModalSubmitFooter"], { errorMessage: errorMessage, inProgress: !inProgress, submitText: "Attach", cancel: cancel })));
});
const AttachDeploymentToOBCFirehose = (props) => {
    const { namespace } = props;
    const resource = [{ kind: _console_internal_models__WEBPACK_IMPORTED_MODULE_5__["DeploymentModel"].kind, namespace, prop: 'deployments', isList: true }];
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_4__["Firehose"], { resources: resource },
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](AttachDeploymentToOBCModal, Object.assign({}, props))));
};
const attachDeploymentToOBCModalStateToProps = ({ UI }) => {
    const namespace = UI.getIn(['activeNamespace']);
    return {
        namespace,
    };
};
const AttachDeploymentToOBCModalConnected = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(attachDeploymentToOBCModalStateToProps)(AttachDeploymentToOBCFirehose);
const attachDeploymentToOBCModal = Object(_console_internal_components_factory_modal__WEBPACK_IMPORTED_MODULE_3__["createModalLauncher"])(AttachDeploymentToOBCModalConnected);


/***/ }),

/***/ "./packages/noobaa-storage-plugin/src/components/object-bucket-claim-page/object-bucket-claim.tsx":
/*!********************************************************************************************************!*\
  !*** ./packages/noobaa-storage-plugin/src/components/object-bucket-claim-page/object-bucket-claim.tsx ***!
  \********************************************************************************************************/
/*! exports provided: OBCStatus, ObjectBucketClaimsPage, ObjectBucketClaimsDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OBCStatus", function() { return OBCStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObjectBucketClaimsPage", function() { return ObjectBucketClaimsPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObjectBucketClaimsDetailsPage", function() { return ObjectBucketClaimsDetailsPage; });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _console_internal_components_events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/components/events */ "./public/components/events.jsx");
/* harmony import */ var _console_internal_components_factory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/internal/components/factory */ "./public/components/factory/index.tsx");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _console_noobaa_storage_plugin_src_models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @console/noobaa-storage-plugin/src/models */ "./packages/noobaa-storage-plugin/src/models.ts");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @patternfly/react-table */ "./node_modules/@patternfly/react-table/dist/esm/index.js");
/* harmony import */ var _table_filters__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../table-filters */ "./packages/noobaa-storage-plugin/src/table-filters.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../utils */ "./packages/noobaa-storage-plugin/src/utils.ts");
/* harmony import */ var _menu_actions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./menu-actions */ "./packages/noobaa-storage-plugin/src/components/object-bucket-claim-page/menu-actions.ts");
/* harmony import */ var _secret__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./secret */ "./packages/noobaa-storage-plugin/src/components/object-bucket-claim-page/secret.tsx");














const kind = Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_6__["referenceForModel"])(_console_noobaa_storage_plugin_src_models__WEBPACK_IMPORTED_MODULE_7__["NooBaaObjectBucketClaimModel"]);
const OBCStatus = ({ obc }) => react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_8__["Status"], { status: Object(_utils__WEBPACK_IMPORTED_MODULE_11__["getPhase"])(obc) });
const tableColumnClasses = [
    classnames__WEBPACK_IMPORTED_MODULE_0__('col-lg-3', 'col-md-2', 'col-sm-4', 'col-xs-6'),
    classnames__WEBPACK_IMPORTED_MODULE_0__('col-lg-2', 'col-md-2', 'col-sm-4', 'col-xs-6'),
    classnames__WEBPACK_IMPORTED_MODULE_0__('col-lg-2', 'col-md-2', 'col-sm-4', 'hidden-xs'),
    classnames__WEBPACK_IMPORTED_MODULE_0__('col-lg-2', 'col-md-3', 'hidden-sm', 'hidden-xs'),
    classnames__WEBPACK_IMPORTED_MODULE_0__('col-lg-3', 'col-md-3', 'hidden-sm', 'hidden-xs'),
    _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_5__["Kebab"].columnClass,
];
const OBCTableHeader = () => {
    return [
        {
            title: 'Name',
            sortField: 'metadata.name',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_9__["sortable"]],
            props: { className: tableColumnClasses[0] },
        },
        {
            title: 'Namespace',
            sortField: 'metadata.namespace',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_9__["sortable"]],
            props: { className: tableColumnClasses[1] },
        },
        {
            title: 'Status',
            sortField: 'status.phase',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_9__["sortable"]],
            props: { className: tableColumnClasses[2] },
        },
        {
            title: 'Secret',
            sortField: 'metadata.name',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_9__["sortable"]],
            props: { className: tableColumnClasses[3] },
        },
        {
            title: 'Storage Class',
            sortField: 'spec.storageClassName',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_9__["sortable"]],
            props: { className: tableColumnClasses[4] },
        },
        {
            title: '',
            props: { className: tableColumnClasses[5] },
        },
    ];
};
OBCTableHeader.displayName = 'OBCTableHeader';
const OBCTableRow = ({ obj, index, key, style }) => {
    const storageClassName = lodash__WEBPACK_IMPORTED_MODULE_1__["get"](obj, 'spec.storageClassName');
    return (react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_4__["TableRow"], { id: obj.metadata.uid, index: index, trKey: key, style: style },
        react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_4__["TableData"], { className: tableColumnClasses[0] },
            react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_5__["ResourceLink"], { kind: kind, name: obj.metadata.name, namespace: obj.metadata.namespace, title: obj.metadata.name })),
        react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_4__["TableData"], { className: classnames__WEBPACK_IMPORTED_MODULE_0__(tableColumnClasses[1], 'co-break-word') },
            react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_5__["ResourceLink"], { kind: "Namespace", name: obj.metadata.namespace, title: obj.metadata.namespace })),
        react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_4__["TableData"], { className: classnames__WEBPACK_IMPORTED_MODULE_0__(tableColumnClasses[2]) },
            react__WEBPACK_IMPORTED_MODULE_2__["createElement"](OBCStatus, { obc: obj })),
        react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_4__["TableData"], { className: classnames__WEBPACK_IMPORTED_MODULE_0__(tableColumnClasses[3]) }, Object(_utils__WEBPACK_IMPORTED_MODULE_11__["isBound"])(obj) ? (react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_5__["ResourceLink"], { kind: "Secret", name: obj.metadata.name, title: obj.metadata.name, namespace: obj.metadata.namespace })) : ('-')),
        react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_4__["TableData"], { className: tableColumnClasses[4] }, storageClassName ? react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_5__["ResourceLink"], { kind: "StorageClass", name: storageClassName }) : '-'),
        react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_4__["TableData"], { className: tableColumnClasses[5] },
            react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_5__["ResourceKebab"], { actions: _menu_actions__WEBPACK_IMPORTED_MODULE_12__["menuActions"], kind: kind, resource: obj }))));
};
const Details = ({ obj }) => {
    const storageClassName = lodash__WEBPACK_IMPORTED_MODULE_1__["get"](obj, 'spec.storageClassName');
    return (react__WEBPACK_IMPORTED_MODULE_2__["createElement"](react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", { className: "co-m-pane__body" },
            react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_5__["SectionHeading"], { text: "Object Bucket Claim Details" }),
            react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", { className: "row" },
                react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", { className: "col-sm-6" },
                    react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_5__["ResourceSummary"], { resource: obj }),
                    Object(_utils__WEBPACK_IMPORTED_MODULE_11__["isBound"])(obj) && (react__WEBPACK_IMPORTED_MODULE_2__["createElement"](react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null,
                        react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("dt", null, "Secret"),
                        react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("dd", null,
                            react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_5__["ResourceLink"], { kind: "Secret", name: obj.metadata.name, title: obj.metadata.name, namespace: obj.metadata.namespace }))))),
                react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", { className: "col-sm-6" },
                    react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("dt", null, "Status"),
                    react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("dd", null,
                        react__WEBPACK_IMPORTED_MODULE_2__["createElement"](OBCStatus, { obc: obj })),
                    react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("dt", null, "Storage Class"),
                    react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("dd", null, storageClassName ? (react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_5__["ResourceLink"], { kind: "StorageClass", name: storageClassName })) : ('-')),
                    Object(_utils__WEBPACK_IMPORTED_MODULE_11__["isBound"])(obj) && (react__WEBPACK_IMPORTED_MODULE_2__["createElement"](react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null,
                        react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("dt", null, "Object Bucket"),
                        react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("dd", null,
                            react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_5__["ResourceLink"], { kind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_6__["referenceForModel"])(_console_noobaa_storage_plugin_src_models__WEBPACK_IMPORTED_MODULE_7__["NooBaaObjectBucketModel"]), name: obj.spec.ObjectBucketName }))))))),
        react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_secret__WEBPACK_IMPORTED_MODULE_13__["GetSecret"], { obj: obj })));
};
const ObjectBucketClaimsList = (props) => (react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_4__["Table"], Object.assign({}, props, { "aria-label": "Object Bucket Claims", Header: OBCTableHeader, Row: OBCTableRow, virtualize: true })));
const ObjectBucketClaimsPage = (props) => {
    const createProps = {
        to: `${Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_5__["resourcePathFromModel"])(_console_noobaa_storage_plugin_src_models__WEBPACK_IMPORTED_MODULE_7__["NooBaaObjectBucketClaimModel"], null, lodash__WEBPACK_IMPORTED_MODULE_1__["get"](props, 'namespace', 'default'))}/~new/form`,
    };
    return (react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_4__["ListPage"], Object.assign({}, props, { ListComponent: ObjectBucketClaimsList, kind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_6__["referenceForModel"])(_console_noobaa_storage_plugin_src_models__WEBPACK_IMPORTED_MODULE_7__["NooBaaObjectBucketClaimModel"]), canCreate: true, createProps: createProps, rowFilters: [_table_filters__WEBPACK_IMPORTED_MODULE_10__["obcStatusFilter"]] })));
};
const ObjectBucketClaimsDetailsPage = (props) => (react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_4__["DetailsPage"], Object.assign({}, props, { menuActions: _menu_actions__WEBPACK_IMPORTED_MODULE_12__["menuActionCreator"], pages: [
        _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_5__["navFactory"].details(Details),
        _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_5__["navFactory"].editYaml(),
        _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_5__["navFactory"].events(_console_internal_components_events__WEBPACK_IMPORTED_MODULE_3__["ResourceEventStream"]),
    ] })));


/***/ }),

/***/ "./packages/noobaa-storage-plugin/src/components/object-bucket-claim-page/secret.tsx":
/*!*******************************************************************************************!*\
  !*** ./packages/noobaa-storage-plugin/src/components/object-bucket-claim-page/secret.tsx ***!
  \*******************************************************************************************/
/*! exports provided: GetSecret */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetSecret", function() { return GetSecret; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var js_base64__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-base64 */ "./node_modules/js-base64/base64.js");
/* harmony import */ var js_base64__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_base64__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _console_internal_components_configmap_and_secret_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/components/configmap-and-secret-data */ "./public/components/configmap-and-secret-data.tsx");
/* harmony import */ var _console_internal_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/internal/models */ "./public/models/index.ts");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @patternfly/react-icons */ "./node_modules/@patternfly/react-icons/dist/esm/index.js");










const GetSecret = ({ obj }) => {
    const [reveal, setReveal] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](false);
    const [secretData, setSecretData] = react__WEBPACK_IMPORTED_MODULE_0__["useState"]([]);
    const name = Object(_console_shared__WEBPACK_IMPORTED_MODULE_6__["getName"])(obj);
    const namespace = Object(_console_shared__WEBPACK_IMPORTED_MODULE_6__["getNamespace"])(obj);
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
        const secret = Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_5__["k8sGet"])(_console_internal_models__WEBPACK_IMPORTED_MODULE_4__["SecretModel"], name, namespace);
        const configMap = Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_5__["k8sGet"])(_console_internal_models__WEBPACK_IMPORTED_MODULE_4__["ConfigMapModel"], name, namespace);
        Promise.all([secret, configMap])
            .then((data) => {
            const bucketName = lodash__WEBPACK_IMPORTED_MODULE_1__["get"](data[1], 'data.BUCKET_NAME');
            const endpoint = `${lodash__WEBPACK_IMPORTED_MODULE_1__["get"](data[1], 'data.BUCKET_HOST')}:${lodash__WEBPACK_IMPORTED_MODULE_1__["get"](data[1], 'data.BUCKET_PORT')}`;
            const accessKey = js_base64__WEBPACK_IMPORTED_MODULE_2__["Base64"].decode(lodash__WEBPACK_IMPORTED_MODULE_1__["get"](data[0], 'data.AWS_ACCESS_KEY_ID'));
            const secretKey = js_base64__WEBPACK_IMPORTED_MODULE_2__["Base64"].decode(lodash__WEBPACK_IMPORTED_MODULE_1__["get"](data[0], 'data.AWS_SECRET_ACCESS_KEY'));
            const secretValues = [
                { field: 'Endpoint', value: endpoint },
                { field: 'Bucket Name', value: bucketName },
                { field: 'Access Key', value: accessKey },
                { field: 'Secret Key', value: secretKey },
            ];
            setSecretData(secretValues);
        })
            .catch(() => undefined);
    }, [name, namespace]);
    const dl = secretData.length
        ? secretData.reduce((acc, datum) => {
            const { field, value } = datum;
            acc.push(react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", { key: `${field}-k` }, field));
            acc.push(react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", { key: `${field}-v` },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_configmap_and_secret_data__WEBPACK_IMPORTED_MODULE_3__["SecretValue"], { value: value, reveal: reveal, encoded: false })));
            return acc;
        }, [])
        : [];
    return dl.length ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_7__["SectionHeading"], { text: "Object Bucket Claim Data" }, secretData.length ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_8__["Button"], { type: "button", onClick: () => setReveal(!reveal), variant: "link", className: "pf-m-link--align-right" }, reveal ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_9__["EyeSlashIcon"], { className: "co-icon-space-r" }),
            "Hide Values")) : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_9__["EyeIcon"], { className: "co-icon-space-r" }),
            "Reveal Values")))) : null),
        dl.length ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dl", { className: "secret-data" }, dl) : react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_7__["EmptyBox"], { label: "Data" }))) : null;
};


/***/ }),

/***/ "./packages/noobaa-storage-plugin/src/table-filters.ts":
/*!*************************************************************!*\
  !*** ./packages/noobaa-storage-plugin/src/table-filters.ts ***!
  \*************************************************************/
/*! exports provided: obcStatusFilter, obStatusFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "obcStatusFilter", function() { return obcStatusFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "obStatusFilter", function() { return obStatusFilter; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./packages/noobaa-storage-plugin/src/utils.ts");


const allPhases = ['Pending', 'Bound', 'Lost'];
const obcStatusFilter = {
    type: 'obc-status',
    filterGroupName: 'Status',
    reducer: _utils__WEBPACK_IMPORTED_MODULE_1__["getPhase"],
    items: lodash__WEBPACK_IMPORTED_MODULE_0__["map"](allPhases, (phase) => ({
        id: phase,
        title: phase,
    })),
    filter: (phases, obc) => {
        if (!phases || !phases.selected) {
            return true;
        }
        const phase = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getPhase"])(obc);
        return (phases.selected.has(phase) || !lodash__WEBPACK_IMPORTED_MODULE_0__["includes"](phases.all, phase) || lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](phases.selected));
    },
};
const obStatusFilter = {
    type: 'ob-status',
    filterGroupName: 'Status',
    reducer: _utils__WEBPACK_IMPORTED_MODULE_1__["getPhase"],
    items: lodash__WEBPACK_IMPORTED_MODULE_0__["map"](allPhases, (phase) => ({
        id: phase,
        title: phase,
    })),
    filter: (phases, ob) => {
        if (!phases || !phases.selected) {
            return true;
        }
        const phase = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getPhase"])(ob);
        return (phases.selected.has(phase) || !lodash__WEBPACK_IMPORTED_MODULE_0__["includes"](phases.all, phase) || lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](phases.selected));
    },
};


/***/ }),

/***/ "./packages/noobaa-storage-plugin/src/utils.ts":
/*!*****************************************************!*\
  !*** ./packages/noobaa-storage-plugin/src/utils.ts ***!
  \*****************************************************/
/*! exports provided: filterNooBaaAlerts, getGaugeValue, getMetric, getPhase, isBound, getSCProvisioner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterNooBaaAlerts", function() { return filterNooBaaAlerts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGaugeValue", function() { return getGaugeValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMetric", function() { return getMetric; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPhase", function() { return getPhase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBound", function() { return isBound; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSCProvisioner", function() { return getSCProvisioner; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");

const filterNooBaaAlerts = (alerts) => alerts.filter((alert) => lodash__WEBPACK_IMPORTED_MODULE_0__["get"](alert, 'annotations.storage_type') === 'NooBaa');
const getGaugeValue = (data) => lodash__WEBPACK_IMPORTED_MODULE_0__["get"](data, 'data.result[0].value[1]');
const getMetric = (result, metric) => lodash__WEBPACK_IMPORTED_MODULE_0__["get"](result, ['data', 'result', '0', 'metric', metric], null);
const getPhase = (obj) => {
    return lodash__WEBPACK_IMPORTED_MODULE_0__["get"](obj, 'status.phase', 'Lost');
};
const isBound = (obj) => getPhase(obj) === 'Bound';
const getSCProvisioner = (obj) => obj.provisioner;


/***/ })

}]);
//# sourceMappingURL=object-bucket-claim-page-9de5ec30c558694a24f6.js.map