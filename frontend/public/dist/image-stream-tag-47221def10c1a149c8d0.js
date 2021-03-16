(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["image-stream-tag"],{

/***/ "./public/components/image-stream-tag.tsx":
/*!************************************************!*\
  !*** ./public/components/image-stream-tag.tsx ***!
  \************************************************/
/*! exports provided: ImageStreamTagsDetails, ImageStreamTagsDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageStreamTagsDetails", function() { return ImageStreamTagsDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageStreamTagsDetailsPage", function() { return ImageStreamTagsDetailsPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models */ "./public/models/index.ts");
/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./factory */ "./public/components/factory/index.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _utils_units__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/units */ "./public/components/utils/units.js");
/* harmony import */ var _image_stream__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./image-stream */ "./public/components/image-stream.tsx");
/* harmony import */ var _image_stream_timeline__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./image-stream-timeline */ "./public/components/image-stream-timeline.tsx");








const ImageStreamTagsReference = 'ImageStreamTag';
const ImageStreamsReference = 'ImageStream';
const { common } = _utils__WEBPACK_IMPORTED_MODULE_4__["Kebab"].factory;
const menuActions = [..._utils__WEBPACK_IMPORTED_MODULE_4__["Kebab"].getExtensionsActionsForKind(_models__WEBPACK_IMPORTED_MODULE_2__["ImageStreamTagModel"]), ...common];
// Splits a name/value pair separated by an `=`
const splitEnv = (nameValue) => {
    // Use this method instead of `String.split()` so we only split on the first `=`.
    const i = nameValue.indexOf('=');
    if (i === -1) {
        return {
            name: nameValue,
            value: '',
        };
    }
    return {
        name: nameValue.substring(0, i),
        value: nameValue.substring(i + 1),
    };
};
const ImageStreamTagsDetails = ({ obj: imageStreamTag, imageStream, }) => {
    const config = lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](imageStreamTag, 'image.dockerImageMetadata.Config', {});
    const labels = config.Labels || {};
    // Convert to an array of objects with name and value properties, then sort the array for display.
    const labelsArray = lodash_es__WEBPACK_IMPORTED_MODULE_1__["map"](labels, (value, name) => ({ name, value }));
    const sortedLabels = lodash_es__WEBPACK_IMPORTED_MODULE_1__["sortBy"](labelsArray, 'name');
    const entrypoint = (config.Entrypoint || []).join(' ');
    const cmd = (config.Cmd || []).join(' ');
    const exposedPorts = lodash_es__WEBPACK_IMPORTED_MODULE_1__["keys"](config.ExposedPorts).join(', ');
    const size = lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](imageStreamTag, 'image.dockerImageMetadata.Size');
    const humanizedSize = lodash_es__WEBPACK_IMPORTED_MODULE_1__["isFinite"](size) && Object(_utils_units__WEBPACK_IMPORTED_MODULE_5__["humanizeBinaryBytes"])(size).string;
    const architecture = lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](imageStreamTag, 'image.dockerImageMetadata.Architecture');
    const tagName = lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](imageStreamTag, 'tag.name');
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body-group" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "row" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-md-6 col-sm-12" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_4__["SectionHeading"], { text: "Image Details" }),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_4__["ResourceSummary"], { resource: imageStreamTag },
                        labels.name && react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, "Image Name"),
                        labels.name && react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null, labels.name),
                        labels.summary && react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, "Summary"),
                        labels.summary && react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null, labels.summary),
                        humanizedSize && react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, "Size"),
                        humanizedSize && react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null, humanizedSize)),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_image_stream__WEBPACK_IMPORTED_MODULE_6__["ExampleDockerCommandPopover"], { imageStream: imageStream, tag: tagName })),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-md-6 col-sm-12" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_4__["SectionHeading"], { text: "Configuration" }),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dl", { className: "co-m-pane__details" },
                        entrypoint && react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, "Entrypoint"),
                        entrypoint && react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", { className: "co-break-word" }, entrypoint),
                        cmd && react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, "Command"),
                        cmd && react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", { className: "co-break-word" }, cmd),
                        config.WorkingDir && react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, "Working Dir"),
                        config.WorkingDir && react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", { className: "co-break-all" }, config.WorkingDir),
                        exposedPorts && react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, "Exposed Ports"),
                        exposedPorts && react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", { className: "co-break-word" }, exposedPorts),
                        config.User && react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, "User"),
                        config.User && react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null, config.User),
                        architecture && react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, "Architecture"),
                        architecture && react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null, architecture))))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body-group" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_4__["SectionHeading"], { text: "Image Labels" }),
            lodash_es__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](sortedLabels) ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "text-muted" }, "No labels")) : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-table-container" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("table", { className: "table" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("thead", null,
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("tr", null,
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("th", null, "Name"),
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("th", null, "Value"))),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("tbody", null, lodash_es__WEBPACK_IMPORTED_MODULE_1__["map"](sortedLabels, ({ name, value }) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("tr", { key: name },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("td", null, name),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("td", null, value))))))))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body-group" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_4__["SectionHeading"], { text: "Environment Variables" }),
            lodash_es__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](config.Env) ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "text-muted" }, "No environment variables")) : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-table-container" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("table", { className: "table" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("thead", null,
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("tr", null,
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("th", null, "Name"),
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("th", null, "Value"))),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("tbody", null, lodash_es__WEBPACK_IMPORTED_MODULE_1__["map"](config.Env, (nameValueStr, i) => {
                        const pair = splitEnv(nameValueStr);
                        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("tr", { key: i },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("td", null, pair.name),
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("td", null, pair.value)));
                    }))))))));
};
const parseName = (nameAndTag) => {
    return nameAndTag.split(':')[0];
};
const getImageStreamNameAndTag = (imageStreamTag) => {
    const imageStreamTagName = lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](imageStreamTag, 'metadata.name') || '';
    const [imageStreamName, tag] = imageStreamTagName.split(':');
    return { imageStreamName, tag };
};
const ImageStreamTagHistory = ({ obj: imageStreamTag, imageStream, }) => {
    const { tag } = getImageStreamNameAndTag(imageStreamTag);
    const imageStreamStatusTags = lodash_es__WEBPACK_IMPORTED_MODULE_1__["filter"](lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](imageStream, 'status.tags'), (i) => i.tag === tag);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_image_stream_timeline__WEBPACK_IMPORTED_MODULE_7__["ImageStreamTimeline"], { imageStreamTags: imageStreamStatusTags, imageStreamName: imageStream.metadata.name, imageStreamNamespace: imageStream.metadata.namespace }));
};
ImageStreamTagHistory.displayName = 'ImageStreamTagHistory';
const pages = [
    _utils__WEBPACK_IMPORTED_MODULE_4__["navFactory"].details(ImageStreamTagsDetails),
    _utils__WEBPACK_IMPORTED_MODULE_4__["navFactory"].editYaml(),
    _utils__WEBPACK_IMPORTED_MODULE_4__["navFactory"].history(ImageStreamTagHistory),
];
const ImageStreamTagsDetailsPage = (props) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_3__["DetailsPage"], Object.assign({}, props, { breadcrumbsFor: (obj) => {
        const { imageStreamName } = getImageStreamNameAndTag(obj);
        return [
            { name: 'Image Streams', path: `/k8s/ns/${props.match.params.ns}/imagestreams` },
            {
                name: imageStreamName,
                path: `/k8s/ns/${props.match.params.ns}/imagestreams/${imageStreamName}`,
            },
            {
                name: 'Image Stream Tag Details',
                path: props.match.url,
            },
        ];
    }, kind: ImageStreamTagsReference, menuActions: menuActions, resources: [
        {
            kind: ImageStreamsReference,
            name: parseName(props.name),
            namespace: props.namespace,
            isList: false,
            prop: 'imageStream',
        },
    ], pages: pages })));
ImageStreamTagsDetailsPage.displayName = 'ImageStreamTagsDetailsPage';


/***/ })

}]);
//# sourceMappingURL=image-stream-tag-47221def10c1a149c8d0.js.map