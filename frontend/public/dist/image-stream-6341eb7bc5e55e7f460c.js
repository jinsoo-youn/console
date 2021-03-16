(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["image-stream"],{

/***/ "./public/components/image-stream-timeline.tsx":
/*!*****************************************************!*\
  !*** ./public/components/image-stream-timeline.tsx ***!
  \*****************************************************/
/*! exports provided: ImageStreamTimeline */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageStreamTimeline", function() { return ImageStreamTimeline; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-icons */ "./node_modules/@patternfly/react-icons/dist/esm/index.js");
/* harmony import */ var _utils_resource_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/resource-link */ "./public/components/utils/resource-link.tsx");
/* harmony import */ var _utils_timestamp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/timestamp */ "./public/components/utils/timestamp.tsx");
/* harmony import */ var _utils_status_box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/status-box */ "./public/components/utils/status-box.tsx");
/* harmony import */ var _image_stream__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./image-stream */ "./public/components/image-stream.tsx");







const ImageStreamTagsReference = 'ImageStreamTag';
const ImageStreamTimelineItem = ({ tag, imageStreamName, imageStreamNamespace, linkToTag, }) => {
    const referenceAndSHA = lodash_es__WEBPACK_IMPORTED_MODULE_1__["split"](tag.dockerImageReference, '@');
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-images-stream-tag-timeline__item-row" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "co-images-stream-tag-timeline__circle-icon" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_2__["CircleIcon"], null)),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-images-stream-tag-timeline__timestamp" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils_timestamp__WEBPACK_IMPORTED_MODULE_4__["Timestamp"], { timestamp: tag.created, simple: true }))),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-images-stream-tag-timeline__item-row" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "co-images-stream-tag-timeline__line" }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-images-stream-tag-timeline__info" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils_resource_link__WEBPACK_IMPORTED_MODULE_3__["ResourceLink"], { kind: ImageStreamTagsReference, name: Object(_image_stream__WEBPACK_IMPORTED_MODULE_6__["getImageStreamTagName"])(imageStreamName, tag.tag), namespace: imageStreamNamespace, title: tag.tag, linkTo: linkToTag }),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-break-all" },
                        "from ",
                        referenceAndSHA[0]),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-break-all" }, referenceAndSHA[1]))))));
};
// check is the compared tag version, is the latest version in a sorted array of all tag versions
const isTagVersionLatest = (comparedTag, comparedTagPosition, orderedTagArray) => {
    return (comparedTagPosition ===
        lodash_es__WEBPACK_IMPORTED_MODULE_1__["findIndex"](orderedTagArray, (orderedTag) => orderedTag.tag === comparedTag));
};
const ImageStreamTimeline = ({ imageStreamTags, imageStreamName, imageStreamNamespace, }) => {
    if (!lodash_es__WEBPACK_IMPORTED_MODULE_1__["some"](imageStreamTags, 'items')) {
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils_status_box__WEBPACK_IMPORTED_MODULE_5__["EmptyBox"], { label: "Images" });
    }
    const tagsArray = lodash_es__WEBPACK_IMPORTED_MODULE_1__["flatten"](lodash_es__WEBPACK_IMPORTED_MODULE_1__["map"](imageStreamTags, ({ tag, items }) => {
        return lodash_es__WEBPACK_IMPORTED_MODULE_1__["map"](items, ({ created, dockerImageReference }) => ({
            tag,
            created,
            dockerImageReference,
        }));
    }));
    const orderedTagArray = lodash_es__WEBPACK_IMPORTED_MODULE_1__["orderBy"](tagsArray, ['created'], ['desc']);
    const timeline = lodash_es__WEBPACK_IMPORTED_MODULE_1__["map"](orderedTagArray, (tag, i) => {
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](ImageStreamTimelineItem, { key: tag.dockerImageReference, tag: tag, imageStreamName: imageStreamName, imageStreamNamespace: imageStreamNamespace, linkToTag: isTagVersionLatest(tag.tag, i, orderedTagArray) }));
    });
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", { className: "co-images-stream-tag-timeline" },
            timeline,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "co-images-stream-tag-timeline__square-icon" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_2__["SquareIcon"], null))))));
};


/***/ }),

/***/ "./public/components/image-stream.tsx":
/*!********************************************!*\
  !*** ./public/components/image-stream.tsx ***!
  \********************************************/
/*! exports provided: getImageStreamTagName, getAnnotationTags, getBuilderTags, getBuilderTagsSortedByVersion, getMostRecentBuilderTag, isBuilder, ExampleDockerCommandPopover, ImageStreamsDetails, ImageStreamsDetailsPage, ImageStreamsList, buildPhase, ImageStreamsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getImageStreamTagName", function() { return getImageStreamTagName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAnnotationTags", function() { return getAnnotationTags; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBuilderTags", function() { return getBuilderTags; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBuilderTagsSortedByVersion", function() { return getBuilderTagsSortedByVersion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMostRecentBuilderTag", function() { return getMostRecentBuilderTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBuilder", function() { return isBuilder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleDockerCommandPopover", function() { return ExampleDockerCommandPopover; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageStreamsDetails", function() { return ImageStreamsDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageStreamsDetailsPage", function() { return ImageStreamsDetailsPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageStreamsList", function() { return ImageStreamsList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildPhase", function() { return buildPhase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageStreamsPage", function() { return ImageStreamsPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var semver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semver */ "./node_modules/semver/semver.js");
/* harmony import */ var semver__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semver__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-table */ "./node_modules/@patternfly/react-table/dist/esm/index.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @patternfly/react-icons */ "./node_modules/@patternfly/react-icons/dist/esm/index.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models */ "./public/models/index.ts");
/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./factory */ "./public/components/factory/index.tsx");
/* harmony import */ var _utils_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/copy-to-clipboard */ "./public/components/utils/copy-to-clipboard.tsx");
/* harmony import */ var _utils_alerts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils/alerts */ "./public/components/utils/alerts.tsx");
/* harmony import */ var _utils_link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./utils/link */ "./public/components/utils/link.tsx");
/* harmony import */ var _utils_kebab__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./utils/kebab */ "./public/components/utils/kebab.tsx");
/* harmony import */ var _utils_headings__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./utils/headings */ "./public/components/utils/headings.tsx");
/* harmony import */ var _utils_label_list__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./utils/label-list */ "./public/components/utils/label-list.tsx");
/* harmony import */ var _utils_horizontal_nav__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./utils/horizontal-nav */ "./public/components/utils/horizontal-nav.tsx");
/* harmony import */ var _utils_resource_link__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./utils/resource-link */ "./public/components/utils/resource-link.tsx");
/* harmony import */ var _utils_details_page__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./utils/details-page */ "./public/components/utils/details-page.tsx");
/* harmony import */ var _utils_timestamp__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./utils/timestamp */ "./public/components/utils/timestamp.tsx");
/* harmony import */ var _image_stream_timeline__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./image-stream-timeline */ "./public/components/image-stream-timeline.tsx");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");





















const ImageStreamsReference = 'ImageStream';
const ImageStreamTagsReference = 'ImageStreamTag';
const getImageStreamTagName = (imageStreamName, tag) => `${imageStreamName}:${tag}`;
const getAnnotationTags = (specTag) => lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](specTag, 'annotations.tags', '').split(/\s*,\s*/);
const isBuilderTag = (specTag) => {
    // A spec tag has annotations tags, which is a comma-delimited string (e.g., 'builder,httpd').
    const annotationTags = getAnnotationTags(specTag);
    return lodash_es__WEBPACK_IMPORTED_MODULE_1__["includes"](annotationTags, 'builder') && !lodash_es__WEBPACK_IMPORTED_MODULE_1__["includes"](annotationTags, 'hidden');
};
const getStatusTags = (imageStream) => {
    const statusTags = lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](imageStream, 'status.tags');
    return lodash_es__WEBPACK_IMPORTED_MODULE_1__["keyBy"](statusTags, 'tag');
};
const getBuilderTags = (imageStream) => {
    const statusTags = getStatusTags(imageStream);
    return lodash_es__WEBPACK_IMPORTED_MODULE_1__["filter"](imageStream.spec.tags, (tag) => isBuilderTag(tag) && statusTags[tag.name]);
};
// Sort tags in reverse order by semver, falling back to a string comparison if not a valid version.
const getBuilderTagsSortedByVersion = (imageStream) => {
    return getBuilderTags(imageStream).sort(({ name: a }, { name: b }) => {
        const v1 = semver__WEBPACK_IMPORTED_MODULE_2__["coerce"](a);
        const v2 = semver__WEBPACK_IMPORTED_MODULE_2__["coerce"](b);
        if (!v1 && !v2) {
            return a.localeCompare(b);
        }
        if (!v1) {
            return 1;
        }
        if (!v2) {
            return -1;
        }
        return semver__WEBPACK_IMPORTED_MODULE_2__["rcompare"](v1, v2);
    });
};
const getMostRecentBuilderTag = (imageStream) => {
    const tags = getBuilderTagsSortedByVersion(imageStream);
    return lodash_es__WEBPACK_IMPORTED_MODULE_1__["head"](tags);
};
// An image stream is a builder image if
// - It has a spec tag annotated with `builder` and not `hidden`
// - It has a corresponding status tag
const isBuilder = (imageStream) => !lodash_es__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](getBuilderTags(imageStream));
const { common } = _utils_kebab__WEBPACK_IMPORTED_MODULE_12__["Kebab"].factory;
const menuActions = [..._utils_kebab__WEBPACK_IMPORTED_MODULE_12__["Kebab"].getExtensionsActionsForKind(_models__WEBPACK_IMPORTED_MODULE_7__["ImageStreamModel"]), ...common];
const ImageStreamTagsRow = ({ imageStream, specTag, statusTag, }) => {
    const imageStreamStatus = lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](imageStream, 'status');
    const latest = lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](statusTag, ['items', 0]);
    const from = lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](specTag, 'from');
    const referencesTag = lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](specTag, 'from.kind') === 'ImageStreamTag';
    const image = lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](latest, 'image');
    const created = lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](latest, 'created');
    const dockerRepositoryCheck = lodash_es__WEBPACK_IMPORTED_MODULE_1__["has"](imageStream, [
        'metadata',
        'annotations',
        'openshift.io/image.dockerRepositoryCheck',
    ]);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "row" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-md-2 col-sm-4 col-xs-4 co-break-word" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils_resource_link__WEBPACK_IMPORTED_MODULE_16__["ResourceLink"], { kind: ImageStreamTagsReference, name: getImageStreamTagName(imageStream.metadata.name, statusTag.tag), namespace: imageStream.metadata.namespace, title: statusTag.tag, linkTo: !!image })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "col-md-3 col-sm-4 col-xs-8 co-break-all" },
            from && referencesTag && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils_resource_link__WEBPACK_IMPORTED_MODULE_16__["ResourceLink"], { kind: ImageStreamTagsReference, name: getImageStreamTagName(imageStream.metadata.name, from.name), namespace: imageStream.metadata.namespace, title: from.name })),
            from && !referencesTag && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, from.name),
            !from && react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "text-muted" }, "pushed image")),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "col-md-4 col-sm-4 hidden-xs co-break-all" },
            !imageStreamStatus && dockerRepositoryCheck && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_20__["YellowExclamationTriangleIcon"], null),
                "\u00A0Unable to resolve")),
            !imageStreamStatus && !dockerRepositoryCheck && !from && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, "Not synced yet"),
            !imageStreamStatus && !dockerRepositoryCheck && from && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, "Unresolved"),
            imageStreamStatus && image && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, image),
            imageStreamStatus && !image && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_20__["YellowExclamationTriangleIcon"], null),
                "\u00A0There is no image associated with this tag"))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-md-3 hidden-sm hidden-xs" },
            created && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils_timestamp__WEBPACK_IMPORTED_MODULE_18__["Timestamp"], { timestamp: created }),
            !created && '-')));
};
const ExampleDockerCommandPopover = ({ imageStream, tag, }) => {
    const publicImageRepository = lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](imageStream, 'status.publicDockerImageRepository');
    if (!publicImageRepository) {
        return null;
    }
    const loginCommand = 'oc registry login';
    const pushCommand = `docker push ${publicImageRepository}:${tag || '<tag>'}`;
    const pullCommand = `docker pull ${publicImageRepository}:${tag || '<tag>'}`;
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["Popover"], { headerContent: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, "Image registry commands"), className: "co-example-docker-command__popover", minWidth: "600px", bodyContent: react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null, "Create a new Image Stream Tag by pushing an image to this Image Stream with the desired tag."),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null, "Authenticate to the internal registry"),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_9__["CopyToClipboard"], { value: loginCommand }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null, "Push an image to this Image Stream"),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_9__["CopyToClipboard"], { value: pushCommand }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null, "Pull an image from this Image Stream"),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_9__["CopyToClipboard"], { value: pullCommand }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null,
                "Red Hat Enterprise Linux users may use the equivalent ",
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("strong", null, "podman"),
                " commands.",
                ' ',
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils_link__WEBPACK_IMPORTED_MODULE_11__["ExternalLink"], { href: "https://podman.io/", text: "Learn more." }))) },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["Button"], { className: "hidden-sm hidden-xs", type: "button", variant: "link" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_6__["QuestionCircleIcon"], { className: "co-icon-space-r" }),
            "Do you need to work with this Image Stream outside of the web console?")));
};
const getImportErrors = (imageStream) => {
    return lodash_es__WEBPACK_IMPORTED_MODULE_1__["transform"](imageStream.status.tags, (acc, tag) => {
        const importErrorCondition = lodash_es__WEBPACK_IMPORTED_MODULE_1__["find"](tag.conditions, (condition) => condition.type === 'ImportSuccess' && condition.status === 'False');
        importErrorCondition &&
            acc.push(`Unable to sync image for tag ${imageStream.metadata.name}:${tag.tag}. ${importErrorCondition.message}`);
    });
};
const ImageStreamsDetails = ({ obj: imageStream }) => {
    const imageRepository = lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](imageStream, 'status.dockerImageRepository');
    const publicImageRepository = lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](imageStream, 'status.publicDockerImageRepository');
    const imageCount = lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](imageStream, 'status.tags.length');
    const specTagByName = lodash_es__WEBPACK_IMPORTED_MODULE_1__["keyBy"](imageStream.spec.tags, 'name');
    const importErrors = getImportErrors(imageStream);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body" },
            !lodash_es__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](importErrors) && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils_alerts__WEBPACK_IMPORTED_MODULE_10__["ExpandableAlert"], { variant: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["AlertVariant"].warning, alerts: lodash_es__WEBPACK_IMPORTED_MODULE_1__["map"](importErrors, (error, i) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], { key: i }, error))) })),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils_headings__WEBPACK_IMPORTED_MODULE_13__["SectionHeading"], { text: "Image Stream Details" }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils_details_page__WEBPACK_IMPORTED_MODULE_17__["ResourceSummary"], { resource: imageStream },
                imageRepository && react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, "Image Repository"),
                imageRepository && react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null, imageRepository),
                publicImageRepository && react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, "Public Image Repository"),
                publicImageRepository && react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null, publicImageRepository),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, "Image Count"),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null, imageCount ? imageCount : 0)),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](ExampleDockerCommandPopover, { imageStream: imageStream })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils_headings__WEBPACK_IMPORTED_MODULE_13__["SectionHeading"], { text: "Tags" }),
            lodash_es__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](imageStream.status.tags) ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "text-muted" }, "No tags")) : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "row" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-table-grid co-m-table-grid--bordered" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "row co-m-table-grid__head" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-md-2 col-sm-4 col-xs-4" }, "Name"),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-md-3 col-sm-4 col-xs-8" }, "From"),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-md-4 col-sm-4 hidden-xs" }, "Identifier"),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-md-3 hidden-sm hidden-xs" }, "Last Updated")),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-table-grid__body" }, lodash_es__WEBPACK_IMPORTED_MODULE_1__["map"](imageStream.status.tags, (statusTag) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](ImageStreamTagsRow, { key: statusTag.tag, imageStream: imageStream, specTag: specTagByName[statusTag.tag], statusTag: statusTag }))))))))));
};
const ImageStreamHistory = ({ obj: imageStream }) => {
    const imageStreamStatusTags = lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](imageStream, 'status.tags');
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_image_stream_timeline__WEBPACK_IMPORTED_MODULE_19__["ImageStreamTimeline"], { imageStreamTags: imageStreamStatusTags, imageStreamName: imageStream.metadata.name, imageStreamNamespace: imageStream.metadata.namespace }));
};
ImageStreamHistory.displayName = 'ImageStreamHistory';
const pages = [
    _utils_horizontal_nav__WEBPACK_IMPORTED_MODULE_15__["navFactory"].details(ImageStreamsDetails),
    _utils_horizontal_nav__WEBPACK_IMPORTED_MODULE_15__["navFactory"].editYaml(),
    _utils_horizontal_nav__WEBPACK_IMPORTED_MODULE_15__["navFactory"].history(ImageStreamHistory),
];
const ImageStreamsDetailsPage = (props) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_8__["DetailsPage"], Object.assign({}, props, { kind: ImageStreamsReference, menuActions: menuActions, pages: pages })));
ImageStreamsDetailsPage.displayName = 'ImageStreamsDetailsPage';
const tableColumnClasses = [
    classnames__WEBPACK_IMPORTED_MODULE_3__('col-sm-3', 'col-xs-6'),
    classnames__WEBPACK_IMPORTED_MODULE_3__('col-sm-3', 'col-xs-6'),
    classnames__WEBPACK_IMPORTED_MODULE_3__('col-sm-3', 'hidden-xs'),
    classnames__WEBPACK_IMPORTED_MODULE_3__('col-sm-3', 'hidden-xs'),
    _utils_kebab__WEBPACK_IMPORTED_MODULE_12__["Kebab"].columnClass,
];
const ImageStreamsTableHeader = () => {
    return [
        {
            title: 'Name',
            sortField: 'metadata.name',
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
            title: 'Labels',
            sortField: 'metadata.labels',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_4__["sortable"]],
            props: { className: tableColumnClasses[2] },
        },
        {
            title: 'Created',
            sortField: 'metadata.creationTimestamp',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_4__["sortable"]],
            props: { className: tableColumnClasses[3] },
        },
        {
            title: '',
            props: { className: tableColumnClasses[4] },
        },
    ];
};
ImageStreamsTableHeader.displayName = 'ImageStreamsTableHeader';
const ImageStreamsTableRow = ({ obj, index, key, style }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_8__["TableRow"], { id: obj.metadata.uid, index: index, trKey: key, style: style },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_8__["TableData"], { className: tableColumnClasses[0] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils_resource_link__WEBPACK_IMPORTED_MODULE_16__["ResourceLink"], { kind: ImageStreamsReference, name: obj.metadata.name, namespace: obj.metadata.namespace, title: obj.metadata.name })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_8__["TableData"], { className: classnames__WEBPACK_IMPORTED_MODULE_3__(tableColumnClasses[1], 'co-break-word') },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils_resource_link__WEBPACK_IMPORTED_MODULE_16__["ResourceLink"], { kind: "Namespace", name: obj.metadata.namespace })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_8__["TableData"], { className: tableColumnClasses[2] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils_label_list__WEBPACK_IMPORTED_MODULE_14__["LabelList"], { kind: ImageStreamsReference, labels: obj.metadata.labels })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_8__["TableData"], { className: tableColumnClasses[3] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils_timestamp__WEBPACK_IMPORTED_MODULE_18__["Timestamp"], { timestamp: obj.metadata.creationTimestamp })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_8__["TableData"], { className: tableColumnClasses[4] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils_kebab__WEBPACK_IMPORTED_MODULE_12__["ResourceKebab"], { actions: menuActions, kind: ImageStreamsReference, resource: obj }))));
};
const ImageStreamsList = (props) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_8__["Table"], Object.assign({}, props, { "aria-label": "Image Streams", Header: ImageStreamsTableHeader, Row: ImageStreamsTableRow, virtualize: true })));
ImageStreamsList.displayName = 'ImageStreamsList';
const buildPhase = (build) => build.status.phase;
const ImageStreamsPage = (props) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_8__["ListPage"], Object.assign({}, props, { title: "Image Streams", kind: ImageStreamsReference, ListComponent: ImageStreamsList, canCreate: true })));
ImageStreamsPage.displayName = 'ImageStreamsListPage';


/***/ })

}]);
//# sourceMappingURL=image-stream-6341eb7bc5e55e7f460c.js.map