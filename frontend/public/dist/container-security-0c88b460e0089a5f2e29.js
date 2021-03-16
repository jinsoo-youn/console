(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["container-security"],{

/***/ "./packages/container-security/src/components/image-manifest-vuln.scss":
/*!*****************************************************************************!*\
  !*** ./packages/container-security/src/components/image-manifest-vuln.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/container-security/src/components/image-manifest-vuln.tsx":
/*!****************************************************************************!*\
  !*** ./packages/container-security/src/components/image-manifest-vuln.tsx ***!
  \****************************************************************************/
/*! exports provided: ImageVulnerabilityRow, ImageVulnerabilitiesTable, ImageManifestVulnDetails, AffectedPods, ImageManifestVulnDetailsPage, ImageManifestVulnTableRow, ImageManifestVulnTableHeader, ImageManifestVulnList, ImageManifestVulnPage, ContainerVulnerabilities, ImageManifestVulnPodTab */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageVulnerabilityRow", function() { return ImageVulnerabilityRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageVulnerabilitiesTable", function() { return ImageVulnerabilitiesTable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageManifestVulnDetails", function() { return ImageManifestVulnDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AffectedPods", function() { return AffectedPods; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageManifestVulnDetailsPage", function() { return ImageManifestVulnDetailsPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageManifestVulnTableRow", function() { return ImageManifestVulnTableRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageManifestVulnTableHeader", function() { return ImageManifestVulnTableHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageManifestVulnList", function() { return ImageManifestVulnList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageManifestVulnPage", function() { return ImageManifestVulnPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContainerVulnerabilities", function() { return ContainerVulnerabilities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageManifestVulnPodTab", function() { return ImageManifestVulnPodTab; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-table */ "./node_modules/@patternfly/react-table/dist/esm/index.js");
/* harmony import */ var _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @patternfly/react-icons */ "./node_modules/@patternfly/react-icons/dist/esm/index.js");
/* harmony import */ var _console_internal_components_factory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @console/internal/components/factory */ "./public/components/factory/index.tsx");
/* harmony import */ var _console_shared___WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @console/shared/ */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _patternfly_react_charts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @patternfly/react-charts */ "./node_modules/@patternfly/react-charts/dist/esm/index.js");
/* harmony import */ var _console_internal_components_default_resource__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @console/internal/components/default-resource */ "./public/components/default-resource.jsx");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../const */ "./packages/container-security/src/const.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../models */ "./packages/container-security/src/models.ts");
/* harmony import */ var _summary__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./summary */ "./packages/container-security/src/components/summary.tsx");
/* harmony import */ var _image_manifest_vuln_scss__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./image-manifest-vuln.scss */ "./packages/container-security/src/components/image-manifest-vuln.scss");
/* harmony import */ var _image_manifest_vuln_scss__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_image_manifest_vuln_scss__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _console_internal_components_pod__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @console/internal/components/pod */ "./public/components/pod.tsx");

















const shortenImage = (img) => img
    .replace('@sha256', '')
    .split('/')
    .slice(1, 3)
    .join('/');
const shortenHash = (hash) => hash.slice(7, 18);
const ImageVulnerabilityRow = (props) => {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "row" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-lg-3 col-md-3 col-sm-4 col-xs-6" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_9__["ExternalLink"], { text: props.vulnerability.name, href: props.vulnerability.link })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-lg-2 col-md-2 col-sm-5 col-xs-6" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_5__["SecurityIcon"], { color: Object(_const__WEBPACK_IMPORTED_MODULE_12__["priorityFor"])(props.vulnerability.severity).color.value }),
            "\u00A0",
            props.vulnerability.severity),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-lg-2 col-md-2 col-sm-3 hidden-xs" }, props.packageName),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-lg-2 col-md-2 hidden-sm hidden-xs" }, props.currentVersion),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-lg-3 col-md-3 hidden-sm hidden-xs" }, props.vulnerability.fixedby || '-')));
};
const ImageVulnerabilitiesTable = (props) => {
    const vulnerabilites = lodash__WEBPACK_IMPORTED_MODULE_1__["sortBy"](lodash__WEBPACK_IMPORTED_MODULE_1__["flatten"](props.features.map((feature) => feature.vulnerabilities.map((vulnerability) => ({ feature, vulnerability })))), (v) => Object(_const__WEBPACK_IMPORTED_MODULE_12__["priorityFor"])(v.vulnerability.severity).index);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_9__["SectionHeading"], { text: "Vulnerabilities" }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-table-grid co-m-table-grid--bordered" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "row co-m-table-grid__head" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-lg-3 col-md-3 col-sm-4 col-xs-6" }, "Vulnerability"),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-lg-2 col-md-2 col-sm-5 col-xs-6" }, "Severity"),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-lg-2 col-md-2 col-sm-3 hidden-xs" }, "Package"),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-lg-2 col-md-2 hidden-sm hidden-xs" }, "Current Version"),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-lg-3 col-md-3 hidden-sm hidden-xs" }, "Fixed in Version")),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-table-grid__body" }, vulnerabilites.map(({ feature, vulnerability }) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](ImageVulnerabilityRow, { key: `${feature.name}-${vulnerability.name}`, vulnerability: vulnerability, packageName: feature.name, currentVersion: feature.version })))))));
};
const ImageManifestVulnDetails = (props) => {
    const total = props.obj.spec.features.reduce((sum, f) => sum + f.vulnerabilities.length, 0);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_9__["SectionHeading"], { text: "Image Manifest Vuln Details" }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { style: { display: 'flex' } },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "imagemanifestvuln-details__donut" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_charts__WEBPACK_IMPORTED_MODULE_10__["ChartDonut"], { colorScale: _const__WEBPACK_IMPORTED_MODULE_12__["vulnPriority"].map((priority) => priority.color.value).toArray(), data: _const__WEBPACK_IMPORTED_MODULE_12__["vulnPriority"]
                            .map((priority, key) => ({
                            label: priority.title,
                            x: priority.value,
                            y: Object(_const__WEBPACK_IMPORTED_MODULE_12__["totalFor"])(key)(props.obj),
                        }))
                            .toArray(), title: `${total} total` })),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "imagemanifestvuln-details__summary" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h3", null,
                        "Quay Security Scanner has detected ",
                        total,
                        " vulnerabilities."),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h4", null,
                        "Patches are available for ",
                        props.obj.status.fixableCount,
                        " vulnerabilities."),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "imagemanifestvuln-details__summary-list" }, _const__WEBPACK_IMPORTED_MODULE_12__["vulnPriority"]
                        .map((v, k) => Object(_const__WEBPACK_IMPORTED_MODULE_12__["totalFor"])(k)(props.obj) > 0 ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { style: { margin: '5px' }, key: v.index },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_5__["SecurityIcon"], { color: v.color.value }),
                        "\u00A0",
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("strong", null, Object(_const__WEBPACK_IMPORTED_MODULE_12__["totalFor"])(k)(props.obj)),
                        " ",
                        v.title,
                        " vulnerabilities.")) : null)
                        .toArray())))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "row" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-sm-6" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_9__["ResourceSummary"], { resource: props.obj })),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-sm-6" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dl", { className: "co-m-pane__details" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_9__["DetailsItem"], { label: "Registry", obj: props.obj, path: "spec.image" }))))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](ImageVulnerabilitiesTable, { features: props.obj.spec.features }))));
};
const AffectedPods = (props) => {
    const affectedPodsFor = (pods) => pods.filter((p) => lodash__WEBPACK_IMPORTED_MODULE_1__["keys"](props.obj.status.affectedPods).includes([p.metadata.namespace, p.metadata.name].join('/')));
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_6__["ListPage"], { kind: "Pod", namespace: props.obj.metadata.namespace, canCreate: false, showTitle: false, ListComponent: (listProps) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_default_resource__WEBPACK_IMPORTED_MODULE_11__["DefaultList"], Object.assign({}, listProps, { data: affectedPodsFor(listProps.data) }))) }));
};
const ImageManifestVulnDetailsPage = (props) => {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_6__["DetailsPage"], { match: props.match, kindObj: _models__WEBPACK_IMPORTED_MODULE_13__["ImageManifestVulnModel"], titleFunc: (obj) => !lodash__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](obj) ? `${shortenImage(obj.spec.image)}@${shortenHash(obj.spec.manifest)}` : null, name: props.match.params.name, namespace: props.match.params.ns, kind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_8__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_13__["ImageManifestVulnModel"]), menuActions: [], pages: [
            _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_9__["navFactory"].details(ImageManifestVulnDetails),
            _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_9__["navFactory"].editYaml(),
            {
                href: 'pods',
                name: 'Affected Pods',
                component: AffectedPods,
            },
        ] }));
};
// TODO(alecmerdler): Fix classes here to ensure responsiveness
const tableColumnClasses = ['', '', '', '', '', ''];
const ImageManifestVulnTableRow = ({ obj, index, key, style, }) => {
    const { name, namespace } = obj.metadata;
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_6__["TableRow"], { id: obj.metadata.uid, index: index, trKey: key, style: style },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_6__["TableData"], { className: tableColumnClasses[0] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_9__["ResourceLink"], { kind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_8__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_13__["ImageManifestVulnModel"]), name: name, namespace: namespace, displayName: shortenImage(obj.spec.image) })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_6__["TableData"], { className: classnames__WEBPACK_IMPORTED_MODULE_2__(tableColumnClasses[1], 'co-break-word') },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_9__["ResourceLink"], { kind: "Namespace", name: namespace })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_6__["TableData"], { className: tableColumnClasses[2] }, lodash__WEBPACK_IMPORTED_MODULE_1__["get"](obj.status, 'highestSeverity') ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_5__["SecurityIcon"], { color: Object(_const__WEBPACK_IMPORTED_MODULE_12__["priorityFor"])(obj.status.highestSeverity).color.value }),
            "\u00A0",
            obj.status.highestSeverity)) : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_9__["Loading"], null))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_6__["TableData"], { className: tableColumnClasses[3] }, Object.keys(obj.status.affectedPods).length),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_6__["TableData"], { className: tableColumnClasses[4] }, obj.status.fixableCount || 0),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_6__["TableData"], { className: tableColumnClasses[4] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_9__["ExternalLink"], { text: shortenHash(obj.spec.manifest), href: Object(_summary__WEBPACK_IMPORTED_MODULE_14__["quayURLFor"])(obj) }))));
};
const ImageManifestVulnTableHeader = () => [
    {
        title: 'Image Name',
        sortField: 'spec.image',
        transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_4__["sortable"]],
        props: { className: tableColumnClasses[0] },
    },
    {
        title: 'Namespace',
        sortField: 'metadata.namespace',
        transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_4__["sortable"]],
        props: { className: tableColumnClasses[1] },
    },
    {
        title: 'Highest Severity',
        sortField: 'status.highestSeverity',
        transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_4__["sortable"]],
        props: { className: tableColumnClasses[2] },
    },
    {
        title: 'Affected Pods',
        props: { className: tableColumnClasses[3] },
    },
    {
        title: 'Fixable',
        sortField: 'status.fixableCount',
        transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_4__["sortable"]],
        props: { className: tableColumnClasses[4] },
    },
    {
        title: 'Manifest',
        props: { className: tableColumnClasses[5] },
    },
];
const ImageManifestVulnList = (props) => {
    const EmptyMsg = () => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_9__["MsgBox"], { title: "No Image Vulnerabilities Found", detail: "" });
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_6__["Table"], Object.assign({}, props, { "aria-label": "Image Manifest Vulnerabilities", Header: ImageManifestVulnTableHeader, Row: ImageManifestVulnTableRow, EmptyMsg: EmptyMsg, virtualize: true })));
};
const ImageManifestVulnPage = (props) => {
    var _a;
    const namespace = (_a = props.match.params) === null || _a === void 0 ? void 0 : _a.ns;
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_6__["MultiListPage"], Object.assign({}, props, { namespace: namespace, resources: [
            {
                kind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_8__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_13__["ImageManifestVulnModel"]),
                namespace,
                namespaced: true,
                prop: 'imageManifestVuln',
            },
        ], flatten: (resources) => lodash__WEBPACK_IMPORTED_MODULE_1__["get"](resources.imageManifestVuln, 'data', []), title: "Image Manifest Vulnerabilities", canCreate: false, showTitle: true, hideToolbar: true, ListComponent: ImageManifestVulnList })));
};
const podKey = (pod) => [pod.metadata.namespace, pod.metadata.name].join('/');
const ContainerVulnerabilities = (props) => {
    const vulnFor = (containerStatus) => lodash__WEBPACK_IMPORTED_MODULE_1__["get"](props.imageManifestVuln, 'data', []).find((imv) => imv.status.affectedPods[podKey(props.pod)].some((id) => containerStatus.containerID === id) || containerStatus.imageID.includes(imv.spec.manifest));
    const withVuln = (vuln, exists, absent) => (vuln !== undefined ? exists(vuln) : absent());
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-table-grid co-m-table-grid--bordered" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "row co-m-table-grid__head" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-md-3" }, "Container"),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-md-4" }, "Image"),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-md-2" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Tooltip"], { content: "Results provided by Quay security scanner" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", null, "Security Scan")))),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-table-grid__body" }, props.pod.status.containerStatuses.map((status) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "row", key: status.containerID },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-md-3" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_pod__WEBPACK_IMPORTED_MODULE_16__["ContainerLink"], { pod: props.pod, name: status.name })),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-md-4 co-truncate co-nowrap co-select-to-copy" }, props.pod.spec.containers.find((c) => c.name === status.name).image),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-md-3" }, props.loaded ? (withVuln(vulnFor(status), (vuln) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { style: { display: 'flex', alignItems: 'center' } },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_5__["SecurityIcon"], { color: Object(_const__WEBPACK_IMPORTED_MODULE_12__["priorityFor"])(lodash__WEBPACK_IMPORTED_MODULE_1__["get"](vuln.status, 'highestSeverity')).color.value }),
                    "\u00A0",
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_9__["ResourceLink"], { kind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_8__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_13__["ImageManifestVulnModel"]), name: vuln.metadata.name, namespace: props.pod.metadata.namespace, title: vuln.metadata.uid, displayName: `${Object(_const__WEBPACK_IMPORTED_MODULE_12__["totalFor"])(_const__WEBPACK_IMPORTED_MODULE_12__["vulnPriority"].findKey(({ title }) => lodash__WEBPACK_IMPORTED_MODULE_1__["get"](vuln.status, 'highestSeverity') === title))(vuln)} ${vuln.status.highestSeverity}`, hideIcon: true }))), () => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", null,
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared___WEBPACK_IMPORTED_MODULE_7__["GreenCheckCircleIcon"], null),
                    "\u00A0No vulnerabilities found")))) : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null,
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_9__["Loading"], null)))))))))));
};
const ImageManifestVulnPodTab = (props) => {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_9__["Firehose"], { resources: [
            {
                isList: true,
                kind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_8__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_13__["ImageManifestVulnModel"]),
                namespace: props.match.params.ns,
                selector: {
                    matchLabels: { [podKey(props.obj)]: 'true' },
                },
                prop: 'imageManifestVuln',
            },
        ] },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](ContainerVulnerabilities, Object.assign({ pod: props.obj }, props))));
};
ImageManifestVulnPage.displayName = 'ImageManifestVulnPage';
ImageManifestVulnList.displayName = 'ImageManifestVulnList';
AffectedPods.displayName = 'AffectedPods';
ImageVulnerabilitiesTable.displayName = 'ImageVulnerabilitiesTable';
ImageVulnerabilityRow.displayName = 'ImageVulnerabilityRow';
ImageManifestVulnPodTab.displayName = 'ImageManifestVulnPodTab';
ContainerVulnerabilities.displayName = 'ContainerVulnerabilities';


/***/ })

}]);
//# sourceMappingURL=container-security-0c88b460e0089a5f2e29.js.map