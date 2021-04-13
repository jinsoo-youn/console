(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["create-yaml"],{

/***/ "./packages/console-shared/src/utils/yaml.ts":
/*!***************************************************!*\
  !*** ./packages/console-shared/src/utils/yaml.ts ***!
  \***************************************************/
/*! exports provided: safeJSToYAML, safeYAMLToJS, asyncJSToYAML, asyncYAMLToJS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "safeJSToYAML", function() { return safeJSToYAML; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "safeYAMLToJS", function() { return safeYAMLToJS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asyncJSToYAML", function() { return asyncJSToYAML; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asyncYAMLToJS", function() { return asyncYAMLToJS; });
/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! js-yaml */ "./node_modules/js-yaml/index.js");
/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(js_yaml__WEBPACK_IMPORTED_MODULE_0__);

// Safely parse js obj to yaml. Returns fallback (emtpy string by default) on exception.
const safeJSToYAML = (js, fallback = '', options = {}) => {
    try {
        return Object(js_yaml__WEBPACK_IMPORTED_MODULE_0__["safeDump"])(js, options);
    }
    catch (_a) {
        return fallback;
    }
};
// Safely parse yaml to js object. Returns fallback (empty object by default) on exception.
const safeYAMLToJS = (yaml, fallback = {}, options = {}) => {
    try {
        return Object(js_yaml__WEBPACK_IMPORTED_MODULE_0__["safeLoad"])(yaml, options);
    }
    catch (_a) {
        return fallback;
    }
};
const asyncJSToYAML = (js, options = {}) => {
    return new Promise((resolve, reject) => {
        try {
            const yaml = Object(js_yaml__WEBPACK_IMPORTED_MODULE_0__["safeDump"])(js, options);
            resolve(yaml);
        }
        catch (e) {
            reject(e);
        }
    });
};
const asyncYAMLToJS = (yaml, options = {}) => {
    return new Promise((resolve, reject) => {
        try {
            const js = Object(js_yaml__WEBPACK_IMPORTED_MODULE_0__["safeLoad"])(yaml, options);
            resolve(js);
        }
        catch (e) {
            reject(e);
        }
    });
};


/***/ }),

/***/ "./public/components/create-yaml.tsx":
/*!*******************************************!*\
  !*** ./public/components/create-yaml.tsx ***!
  \*******************************************/
/*! exports provided: CreateYAML, EditYAMLPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateYAML", function() { return CreateYAML; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditYAMLPage", function() { return EditYAMLPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _models_yaml_templates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/yaml-templates */ "./public/models/yaml-templates.ts");
/* harmony import */ var _kinds__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../kinds */ "./public/kinds.ts");
/* harmony import */ var _utils_async__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/async */ "./public/components/utils/async.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _module_k8s__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./error */ "./public/components/error.tsx");
/* harmony import */ var _console_shared_src_utils_yaml__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @console/shared/src/utils/yaml */ "./packages/console-shared/src/utils/yaml.ts");








const CreateYAML = Object(_kinds__WEBPACK_IMPORTED_MODULE_2__["connectToPlural"])((props) => {
    const { match, kindsInFlight, kindObj, hideHeader = false, onChange = () => null, resourceObjPath, } = props;
    const { params } = match;
    if (!kindObj) {
        if (kindsInFlight) {
            return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_4__["LoadingBox"], null);
        }
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_error__WEBPACK_IMPORTED_MODULE_6__["ErrorPage404"], null);
    }
    const namespace = params.ns || 'default';
    const template = props.template ||
        _models_yaml_templates__WEBPACK_IMPORTED_MODULE_1__["yamlTemplates"].getIn([Object(_module_k8s__WEBPACK_IMPORTED_MODULE_5__["referenceForModel"])(kindObj), 'default']) ||
        _models_yaml_templates__WEBPACK_IMPORTED_MODULE_1__["yamlTemplates"].getIn(['DEFAULT', 'default']);
    const obj = Object(_console_shared_src_utils_yaml__WEBPACK_IMPORTED_MODULE_7__["safeYAMLToJS"])(template);
    obj.kind = kindObj.kind;
    obj.metadata = obj.metadata || {};
    if (kindObj.namespaced) {
        obj.metadata.namespace = namespace;
    }
    if (kindObj.crd && template === _models_yaml_templates__WEBPACK_IMPORTED_MODULE_1__["yamlTemplates"].getIn(['DEFAULT', 'default'])) {
        obj.apiVersion = Object(_module_k8s__WEBPACK_IMPORTED_MODULE_5__["apiVersionForModel"])(kindObj);
        obj.spec = obj.spec || {};
    }
    const header = `Create ${kindObj.label}`;
    // TODO: if someone edits namespace, we'll redirect to old namespace
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils_async__WEBPACK_IMPORTED_MODULE_3__["AsyncComponent"], { loader: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(6), __webpack_require__.e(5), __webpack_require__.e(7), __webpack_require__.e(8), __webpack_require__.e(40)]).then(__webpack_require__.bind(null, /*! ./droppable-edit-yaml */ "./public/components/droppable-edit-yaml.tsx")).then((c) => c.DroppableEditYAML), obj: obj, create: true, kind: kindObj.kind, header: header, hideHeader: hideHeader, resourceObjPath: resourceObjPath, onChange: onChange }));
});
const EditYAMLPage = (props) => {
    const Wrapper = (wrapperProps) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils_async__WEBPACK_IMPORTED_MODULE_3__["AsyncComponent"], Object.assign({}, wrapperProps, { obj: wrapperProps.obj.data, loader: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(6), __webpack_require__.e(5), __webpack_require__.e(7), __webpack_require__.e(8)]).then(__webpack_require__.bind(null, /*! ./edit-yaml */ "./public/components/edit-yaml.jsx")).then((c) => c.EditYAML), create: false })));
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_4__["Firehose"], { resources: [
            {
                kind: props.kind,
                name: props.match.params.name,
                namespace: props.match.params.ns,
                isList: false,
                prop: 'obj',
            },
        ] },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Wrapper, null)));
};
EditYAMLPage.displayName = 'EditYAMLPage';


/***/ })

}]);
//# sourceMappingURL=create-yaml-40823b5d6785764f61df.js.map