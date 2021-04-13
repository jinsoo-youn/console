(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["create-secret2"],{

/***/ "./public/components/hypercloud/form/pipelineruns/create-pipelinerun.tsx":
/*!*******************************************************************************!*\
  !*** ./public/components/hypercloud/form/pipelineruns/create-pipelinerun.tsx ***!
  \*******************************************************************************/
/*! exports provided: CreatePipelineRun */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatePipelineRun", function() { return CreatePipelineRun; });
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _module_k8s__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _utils_section__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/section */ "./public/components/hypercloud/utils/section.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../utils */ "./public/components/utils/index.tsx");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _models_hypercloud_resource_plural__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../models/hypercloud/resource-plural */ "./public/models/hypercloud/resource-plural.ts");
/* harmony import */ var _console_shared_src_utils_namespace__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @console/shared/src/utils/namespace */ "./packages/console-shared/src/utils/namespace.ts");
/* harmony import */ var _redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../redux */ "./public/redux.ts");
/* harmony import */ var _console_internal_reducers_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @console/internal/reducers/ui */ "./public/reducers/ui.ts");
/* eslint-disable no-undef */












var CreateType;
(function (CreateType) {
    CreateType["generic"] = "generic";
    CreateType["form"] = "form";
})(CreateType || (CreateType = {}));
const pageExplanation = {
    [CreateType.form]: 'Create Pipeline Run using Form Editor',
};
const RefList = ({ list, type }) => {
    const resources = list
        .filter(cur => {
        return cur.type === type;
    })
        .map(cur => {
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("option", { value: cur.name }, cur.name);
    });
    return resources;
};
// const Requestform = () =>
class PipelineRunFormComponent extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
    constructor(props) {
        super(props);
        const existingPipelineRun = lodash_es__WEBPACK_IMPORTED_MODULE_0__["pick"](props.obj, ['metadata', 'type']);
        const pipelineRun = lodash_es__WEBPACK_IMPORTED_MODULE_0__["defaultsDeep"]({}, props.fixed, existingPipelineRun, {
            apiVersion: 'tekton.dev/v1beta1',
            kind: 'PipelineRun',
            metadata: {
                name: '',
                namespace: '',
                labels: {},
            },
            spec: {
                serviceAccountName: '',
                params: [],
                pipelineRef: {
                    name: '',
                },
                resources: [],
            },
        });
        this.state = {
            pipelineRunTypeAbstraction: this.props.pipelineRunTypeAbstraction,
            pipelineRun: pipelineRun,
            inProgress: false,
            stringData: lodash_es__WEBPACK_IMPORTED_MODULE_0__["mapValues"](lodash_es__WEBPACK_IMPORTED_MODULE_0__["get"](props.obj, 'data'), window.atob),
            type: 'form',
            pipelineList: [],
            paramList: [],
            selectedPipeLine: '',
            selectedPipeLineNs: '',
            selectedParam: '',
            resourceList: [],
            resourceRefList: [],
            selectedResourceRef: '',
            namespace: Object(_console_internal_reducers_ui__WEBPACK_IMPORTED_MODULE_11__["getActiveNamespace"])(_redux__WEBPACK_IMPORTED_MODULE_10__["default"].getState()),
        };
        this.getPipelineList = this.getPipelineList.bind(this);
        this.getPipelineDetails = this.getPipelineDetails.bind(this);
        this.onNameChanged = this.onNameChanged.bind(this);
        this.onParamChanged = this.onParamChanged.bind(this);
        this.onResourceChanged = this.onResourceChanged.bind(this);
        this.onPipelineChange = this.onPipelineChange.bind(this);
        this.getPipelineResourceList = this.getPipelineResourceList.bind(this);
        this.onLabelChanged = this.onLabelChanged.bind(this);
        this.onAccountChanged = this.onAccountChanged.bind(this);
        this.save = this.save.bind(this);
    }
    componentDidMount() {
        this.getPipelineList();
    }
    // refreshPipelineRun() {
    //     let pipelineRun = { ...this.state.pipelineRun };
    //     pipelineRun.spec.params = [];
    //     pipelineRun.spec.resources = [];
    //     this.setState({ pipelineRun });
    // }
    onNameChanged(event) {
        let pipelineRun = Object.assign({}, this.state.pipelineRun);
        pipelineRun.metadata.name = String(event.target.value);
        this.setState({ pipelineRun });
    }
    onPipelineChange(event) {
        // this.refreshPipelineRun();
        this.setState({
            selectedPipeLine: event.target.value,
        }, () => {
            this.getPipelineDetails();
        });
        let pipelineRun = Object.assign({}, this.state.pipelineRun);
        pipelineRun.spec.pipelineRef.name = event.target.value;
        this.setState({ pipelineRun });
    }
    onParamChanged(event) {
        let pipelineRun = Object.assign({}, this.state.pipelineRun);
        pipelineRun.spec.params.some((cur, idx) => {
            if (cur.name === event.target.id) {
                pipelineRun.spec.params.splice(idx, 1);
            }
            return cur.name === event.target.id;
        });
        pipelineRun.spec.params.push({
            name: event.target.id,
            value: String(event.target.value),
        });
        this.setState({ pipelineRun });
    }
    onResourceChanged(event) {
        let pipelineRun = Object.assign({}, this.state.pipelineRun);
        pipelineRun.spec.resources.some((cur, idx) => {
            if (cur.name === event.target.id) {
                pipelineRun.spec.resources.splice(idx, 1);
            }
            return cur.name === event.target.id;
        });
        pipelineRun.spec.resources.push({
            name: event.target.id,
            resourceRef: {
                name: event.target.value,
            },
        });
        this.setState({ pipelineRun });
        console.log(this.state.pipelineRun);
    }
    onLabelChanged(event) {
        let pipelineRun = Object.assign({}, this.state.pipelineRun);
        //console.log(event);
        pipelineRun.metadata.labels = {};
        if (event.length !== 0) {
            event.forEach(item => {
                if (item.split('=')[1] === undefined) {
                    document.getElementById('labelErrMsg').style.display = 'block';
                    event.pop(item);
                    return;
                }
                document.getElementById('labelErrMsg').style.display = 'none';
                pipelineRun.metadata.labels[item.split('=')[0]] = item.split('=')[1];
            });
        }
        this.setState({ pipelineRun });
    }
    onAccountChanged(event) {
        let pipelineRun = Object.assign({}, this.state.pipelineRun);
        pipelineRun.spec.serviceAccountName = String(event.target.value);
        this.setState({ pipelineRun });
    }
    getPipelineList() {
        const ko = Object(_utils__WEBPACK_IMPORTED_MODULE_6__["kindObj"])('Pipeline');
        Object(_module_k8s__WEBPACK_IMPORTED_MODULE_4__["k8sList"])(ko)
            .then(reponse => reponse)
            .then(data => {
            let pipelineList = data
                .filter(cur => {
                return document.location.href.indexOf('/all-namespaces/') === -1 && cur.metadata.namespace === document.location.href.split('ns/')[1].split('/')[0];
            })
                .map(cur => {
                return {
                    name: cur.metadata.name,
                    ns: cur.metadata.namespace,
                };
            });
            let pipelineRun = Object.assign({}, this.state.pipelineRun);
            if (pipelineList.length === 0) {
                return;
            }
            pipelineRun.spec.pipelineRef.name = pipelineList[0].name;
            this.setState({ pipelineRun });
            this.setState({
                pipelineList: pipelineList,
                selectedPipeLine: pipelineList[0].name,
                selectedPipeLineNs: pipelineList[0].ns,
            }, this.getPipelineDetails);
        }, err => {
            this.setState({ error: err.message, inProgress: false });
            this.setState({ pipelineList: [] });
        });
    }
    getPipelineDetails() {
        const ko = Object(_utils__WEBPACK_IMPORTED_MODULE_6__["kindObj"])('Pipeline');
        Object(_module_k8s__WEBPACK_IMPORTED_MODULE_4__["k8sGet"])(ko, this.state.selectedPipeLine, this.state.selectedPipeLineNs)
            .then(reponse => reponse)
            .then(details => {
            //params, resource가 없는경우
            let paramList = details.spec.params
                ? details.spec.params.map(cur => {
                    return {
                        name: cur.name,
                        type: cur.type,
                        value: '',
                    };
                })
                : [];
            let resourceList = details.spec.resources
                ? details.spec.resources.map(cur => {
                    return {
                        name: cur.name,
                        type: cur.type,
                    };
                })
                : [];
            let pipelineRun = Object.assign({}, this.state.pipelineRun);
            // let initParamList = details.spec.params.map(cur => {
            //     return {
            //         name: cur.name,
            //         value: ''
            //     }
            // });
            !pipelineRun.spec.params.length && pipelineRun.spec.params.push(...paramList);
            this.setState({
                pipelineRun: pipelineRun,
                resourceList: resourceList,
                paramList: paramList,
            }, resourceList.forEach(cur => {
                !pipelineRun.spec.resources.length && this.getPipelineResourceList(cur.name, cur.type);
            }));
            paramList.length ? this.setState({ selectedParam: paramList[0].name }) : null;
        }, err => {
            this.setState({ error: err.message, inProgress: false });
            this.setState({ paramList: [] });
        });
    }
    getPipelineResourceList(resourceName, resourceType) {
        const ko = Object(_utils__WEBPACK_IMPORTED_MODULE_6__["kindObj"])('PipelineResource');
        Object(_module_k8s__WEBPACK_IMPORTED_MODULE_4__["k8sList"])(ko)
            .then(reponse => reponse)
            .then(data => {
            if (data.length === 0) {
                return;
            }
            let resourceRefList = data
                .filter(cur => {
                return document.location.href.indexOf('/all-namespaces/') === -1 && cur.metadata.namespace === document.location.href.split('ns/')[1].split('/')[0];
            })
                .map(cur => {
                return {
                    name: cur.metadata.name,
                    type: cur.spec.type,
                };
            });
            let pipelineRun = Object.assign({}, this.state.pipelineRun);
            let initResourceList = {
                name: resourceName,
                resourceRef: {
                    name: resourceRefList.filter(cur => {
                        return cur.type === resourceType;
                    })[0].name,
                },
            };
            pipelineRun.spec.resources.length < resourceRefList.length && pipelineRun.spec.resources.push(initResourceList);
            this.setState({ pipelineRun });
            this.setState({
                resourceRefList: resourceRefList,
            });
        }, err => {
            this.setState({ error: err.message, inProgress: false });
            this.setState({ resourceRefList: [] });
        });
    }
    save(e) {
        e.preventDefault();
        const { kind, metadata } = this.state.pipelineRun;
        this.setState({ inProgress: true });
        const newPipelineRun = lodash_es__WEBPACK_IMPORTED_MODULE_0__["assign"]({}, this.state.pipelineRun);
        const ko = Object(_utils__WEBPACK_IMPORTED_MODULE_6__["kindObj"])(kind);
        (this.props.isCreate ? Object(_module_k8s__WEBPACK_IMPORTED_MODULE_4__["k8sCreate"])(ko, newPipelineRun) : Object(_module_k8s__WEBPACK_IMPORTED_MODULE_4__["k8sUpdate"])(ko, newPipelineRun, metadata.namespace, newPipelineRun.metadata.name)).then(() => {
            this.setState({ inProgress: false });
            console.log(this.state);
            _utils__WEBPACK_IMPORTED_MODULE_6__["history"].push(Object(_console_shared_src_utils_namespace__WEBPACK_IMPORTED_MODULE_9__["formatNamespacedRouteForResource"])('pipelineruns', this.state.namespace));
        }, err => this.setState({ error: err.message, inProgress: false }));
    }
    render() {
        const { pipelineList, paramList, resourceList, resourceRefList } = this.state;
        const { t } = this.props;
        let options = pipelineList.map(cur => {
            return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("option", { value: cur.name }, cur.name);
        });
        let paramDivs = paramList.length
            ? paramList.map(cur => {
                return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("ul", null,
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils_section__WEBPACK_IMPORTED_MODULE_5__["Section"], { label: cur.name, id: cur.name, description: cur.description },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", { className: "form-control", type: "text", placeholder: t('CONTENT:VALUE'), id: cur.name, onChange: this.onParamChanged, required: true }))));
            })
            : false;
        let resourceDivs = resourceList.length
            ? resourceList.map(cur => {
                return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("ul", null,
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils_section__WEBPACK_IMPORTED_MODULE_5__["Section"], { label: cur.name, id: cur.name },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("select", { className: "form-control", id: cur.name, onChange: this.onResourceChanged },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](RefList, { list: resourceRefList, type: cur.type })))));
            })
            : false;
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "co-m-pane__body" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_helmet__WEBPACK_IMPORTED_MODULE_2__["Helmet"], null,
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("title", null, "Create Pipeline Run")),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("form", { className: "co-m-pane__body-group co-create-secret-form", onSubmit: this.save },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h1", { className: "co-m-pane__heading" }, t('COMMON:MSG_MAIN_CREATEBUTTON_1', { 0: Object(_models_hypercloud_resource_plural__WEBPACK_IMPORTED_MODULE_8__["ResourceLabelPlural"])(this.state.pipelineRun, t) })),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", { className: "co-m-pane__explanation" }, t('Description')),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("fieldset", { disabled: !this.props.isCreate },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils_section__WEBPACK_IMPORTED_MODULE_5__["Section"], { label: t('이름'), id: "pipelinerun-name", isRequired: true },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", { className: "form-control", type: "text", onChange: this.onNameChanged, value: this.state.pipelineRun.metadata.name, "aria-describedby": "secret-name-help", id: "pipelinerun-name", required: true }))),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils_section__WEBPACK_IMPORTED_MODULE_5__["Section"], { label: t('레이블'), id: "label", description: "Enter\uB97C \uC785\uB825\uD558\uC5EC \uB808\uC774\uBE14\uC744 \uCD94\uAC00\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4." },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "form-group" },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_6__["SelectorInput"], { labelClassName: "co-text-namespace", onChange: this.onLabelChanged, tags: [] })))),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { id: "labelErrMsg", style: { display: 'none', color: 'red' } },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null, t("레이블은 '키=값' 형식이어야 합니다."))),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "co-form-section__separator" }),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils_section__WEBPACK_IMPORTED_MODULE_5__["Section"], { label: t('COMMON:MSG_LNB_MENU_146'), id: "pipeline", isRequired: true },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("select", { onChange: this.onPipelineChange, className: "form-control", id: "pipeline" }, options)),
                    paramDivs &&
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils_section__WEBPACK_IMPORTED_MODULE_5__["Section"], { label: t('파이프라인 파라미터'), id: "param" }, paramDivs),
                    resourceDivs &&
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils_section__WEBPACK_IMPORTED_MODULE_5__["Section"], { label: t('파이프라인 리소스'), id: "resource" }, resourceDivs),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "co-form-section__separator" }),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils_section__WEBPACK_IMPORTED_MODULE_5__["Section"], { label: t('서비스 어카운트 지정'), id: "account", isRequired: true },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "form-group" },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", { className: "form-control", type: "text", onChange: this.onAccountChanged, value: this.state.pipelineRun.spec.serviceAccountName, id: "pipelinerun-account", required: true })))),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_6__["ButtonBar"], { errorMessage: this.state.error, inProgress: this.state.inProgress },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["ActionGroup"], { className: "pf-c-form" },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Button"], { type: "submit", id: "save-changes", variant: "primary" }, t('COMMON:MSG_COMMON_BUTTON_COMMIT_1')),
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Button"], { onClick: _utils__WEBPACK_IMPORTED_MODULE_6__["history"].goBack, id: "cancel", variant: "secondary" }, t('COMMON:MSG_COMMON_BUTTON_COMMIT_2'))))))));
    }
}
const CreatePipelineRun = ({ match: { params } }) => {
    // const PipelineRunFormComponent = PipelineRunFormFactory(params.type);
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_7__["useTranslation"])();
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](PipelineRunFormComponent, { t: t, fixed: { metadata: { namespace: params.ns } }, pipelineRunTypeAbstraction: params.type, explanation: pageExplanation[params.type], titleVerb: "Create", isCreate: true });
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
//# sourceMappingURL=create-secret2-585f5aebbbfbcdc8152b.js.map