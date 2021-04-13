(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["create-secret0"],{

/***/ "./public/components/hypercloud/form/create-form.tsx":
/*!***********************************************************!*\
  !*** ./public/components/hypercloud/form/create-form.tsx ***!
  \***********************************************************/
/*! exports provided: WithCommonForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WithCommonForm", function() { return WithCommonForm; });
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var _hookform_devtools__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @hookform/devtools */ "./node_modules/@hookform/devtools/dist/index.js");
/* harmony import */ var _hookform_devtools__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_hookform_devtools__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _module_k8s__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ */ "./public/components/hypercloud/form/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _utils_section__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/section */ "./public/components/hypercloud/utils/section.tsx");











const WithCommonForm = (SubForm, params, defaultValues, modal) => {
    const FormComponent = props => {
        var _a;
        const methods = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_4__["useForm"])({ defaultValues: defaultValues });
        const kind = (_a = ___WEBPACK_IMPORTED_MODULE_8__["pluralToKind"].get(params.plural)) === null || _a === void 0 ? void 0 : _a['kind'];
        const title = `${props.titleVerb} ${(params === null || params === void 0 ? void 0 : params.type) === 'form' ? '' : params.type || 'Sample'} ${kind || ''}`;
        const [inProgress] = react__WEBPACK_IMPORTED_MODULE_1__["useState"](false); // onSubmit이나 나중에 Error관련 메서드에서 inProgress를 false로 변경해줘야함.
        const model = kind && Object(_module_k8s__WEBPACK_IMPORTED_MODULE_7__["modelFor"])(kind);
        const namespaced = model === null || model === void 0 ? void 0 : model.namespaced;
        const plural = model === null || model === void 0 ? void 0 : model.plural;
        const onClick = methods.handleSubmit(data => {
            let inDo = lodash_es__WEBPACK_IMPORTED_MODULE_0__["defaultsDeep"](props.fixed, data);
            inDo = props.onSubmitCallback(inDo);
            Object(_module_k8s__WEBPACK_IMPORTED_MODULE_7__["k8sCreate"])(model, inDo)
                .then(() => {
                _utils__WEBPACK_IMPORTED_MODULE_9__["history"].push(Object(_utils__WEBPACK_IMPORTED_MODULE_9__["resourceObjPath"])(inDo, Object(_module_k8s__WEBPACK_IMPORTED_MODULE_7__["referenceFor"])(model)));
            })
                .catch(e => {
                console.error(e.message);
            });
        });
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_hook_form__WEBPACK_IMPORTED_MODULE_4__["FormProvider"], Object.assign({}, methods),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "co-m-pane__body" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_helmet__WEBPACK_IMPORTED_MODULE_2__["Helmet"], null,
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("title", null, title)),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("form", { className: "co-m-pane__body-group co-m-pane__form" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h1", { className: "co-m-pane__heading co-m-pane__heading--baseline" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "co-m-pane__name" }, title),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "co-m-pane__heading-link" },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], { to: namespaced ? `/k8s/ns/${params.ns}/${plural}/~new` : `/k8s/cluster/${plural}/~new`, id: "yaml-link", replace: true }, "Edit YAML"))),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", { className: "co-m-pane__explanation" }, props.explanation),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("fieldset", null,
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils_section__WEBPACK_IMPORTED_MODULE_10__["Section"], { label: "Name", id: "name", isRequired: true },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", { className: "pf-c-form-control", id: "name", name: "metadata.name", ref: methods.register }))),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](SubForm, { isCreate: props.isCreate }),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_9__["ButtonBar"], { inProgress: inProgress },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__["ActionGroup"], { className: "pf-c-form" },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__["Button"], { type: "button", variant: "primary", id: "save-changes", onClick: onClick }, props.saveButtonText || 'Create'),
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__["Button"], { type: "button", variant: "secondary", id: "cancel", onClick: _utils__WEBPACK_IMPORTED_MODULE_9__["history"].goBack }, "Cancel")))),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_hookform_devtools__WEBPACK_IMPORTED_MODULE_5__["DevTool"], { control: methods.control }))));
    };
    return FormComponent;
};


/***/ }),

/***/ "./public/components/hypercloud/form/namespaces/create-namespace.tsx":
/*!***************************************************************************!*\
  !*** ./public/components/hypercloud/form/namespaces/create-namespace.tsx ***!
  \***************************************************************************/
/*! exports provided: CreateNamespace, onSubmitCallback */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateNamespace", function() { return CreateNamespace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onSubmitCallback", function() { return onSubmitCallback; });
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var _create_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../create-form */ "./public/components/hypercloud/form/create-form.tsx");
/* harmony import */ var _utils_section__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/section */ "./public/components/hypercloud/utils/section.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../utils */ "./public/components/utils/index.tsx");






// const allow = 'allow';
// const deny = 'deny';
// const defaultDeny = {
//   apiVersion: 'networking.k8s.io/v1',
//   kind: 'NetworkPolicy',
//   spec: {
//     podSelector: null,
//   },
// };
const defaultValues = {
    metadata: {
        name: 'example-name',
    },
};
const namespaceFormFactory = params => {
    return Object(_create_form__WEBPACK_IMPORTED_MODULE_3__["WithCommonForm"])(CreateNamespaceComponent, params, defaultValues);
};
const CreateNamespaceComponent = props => {
    const { control } = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_2__["useFormContext"])();
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils_section__WEBPACK_IMPORTED_MODULE_4__["Section"], { label: "Labels", id: "label", description: "\uC774\uAC83\uC740 Label\uC785\uB2C8\uB2E4." },
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_hook_form__WEBPACK_IMPORTED_MODULE_2__["Controller"], { name: "metadata.labels", id: "label", labelClassName: "co-text-sample", as: _utils__WEBPACK_IMPORTED_MODULE_5__["SelectorInput"], control: control, tags: [] }))
    /* <div className="form-group">
      <label htmlFor="network-policy" className="control-label">
        Default Network Policy
              </label>
      <div className="modal-body__field ">
        <Dropdown
          selectedKey={this.state.np}
          items={defaultNetworkPolicies}
          dropDownClassName="dropdown--full-width"
          id="dropdown-selectbox"
          onChange={(np) => this.setState({ np })}
        />
      </div>
    </div> */
    );
};
const CreateNamespace = props => {
    const formComponent = namespaceFormFactory(props.match.params);
    const NamespaceFormComponent = formComponent;
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](NamespaceFormComponent, { fixed: {}, explanation: '', titleVerb: "Create", onSubmitCallback: onSubmitCallback, isCreate: true });
};
const onSubmitCallback = data => {
    let labels = _utils__WEBPACK_IMPORTED_MODULE_5__["SelectorInput"].objectify(data.metadata.labels);
    delete data.metadata.labels;
    data = lodash_es__WEBPACK_IMPORTED_MODULE_0__["defaultsDeep"](data, { metadata: { labels: labels } });
    return data;
};


/***/ }),

/***/ "./public/components/hypercloud/utils/section.tsx":
/*!********************************************************!*\
  !*** ./public/components/hypercloud/utils/section.tsx ***!
  \********************************************************/
/*! exports provided: Section */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Section", function() { return Section; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const Node = ({ className, children, description }) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: className },
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null, children),
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", { className: "help-block" }, description)));
const CombineNodes = (id, label, description, children, isRequired) => {
    // children node 개수에 따라 가로 분할 class 적용
    let isArray = Array.isArray(children);
    let className = isArray ? `col-md-${12 / children.length}` : 'col-md-12';
    return isArray ? children.map(cur => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Node, { className: className, children: cur, description: description })) : react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Node, { className: className, children: children, description: description });
};
const Section = ({ id, label, description, children, isRequired = false }) => {
    let result = CombineNodes(id, label, description, children, isRequired);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "form-group" },
        label && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", { className: 'control-label ' + (isRequired ? 'co-required' : ''), htmlFor: id }, label)),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "row" }, result)));
};


/***/ })

}]);
//# sourceMappingURL=create-secret0-a7d36fd07b865e254316.js.map