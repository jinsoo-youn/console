(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["create-secret4"],{

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

/***/ "./public/components/hypercloud/form/taskruns/create-taskrun.tsx":
/*!***********************************************************************!*\
  !*** ./public/components/hypercloud/form/taskruns/create-taskrun.tsx ***!
  \***********************************************************************/
/*! exports provided: CreateTaskRun, onSubmitCallback */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateTaskRun", function() { return CreateTaskRun; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onSubmitCallback", function() { return onSubmitCallback; });
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _create_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../create-form */ "./public/components/hypercloud/form/create-form.tsx");
/* harmony import */ var _utils_section__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/section */ "./public/components/hypercloud/utils/section.tsx");
/* harmony import */ var _utils_list_view__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/list-view */ "./public/components/hypercloud/utils/list-view.tsx");
/* harmony import */ var _utils_resource_dropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/resource-dropdown */ "./public/components/hypercloud/utils/resource-dropdown.tsx");
/* harmony import */ var _module_k8s__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../models */ "./public/models/index.ts");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../redux */ "./public/redux.ts");
/* harmony import */ var _console_internal_reducers_ui__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @console/internal/reducers/ui */ "./public/reducers/ui.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};














const defaultValues = {
    metadata: {
        name: 'example-name',
    },
};
const taskRunFormFactory = params => {
    return Object(_create_form__WEBPACK_IMPORTED_MODULE_4__["WithCommonForm"])(CreateTaskRunComponent, params, defaultValues);
};
const paramItemRenderer = (register, name, item, index, ListActions, ListDefaultIcons) => {
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "row", key: item.id },
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-xs-4 pairs-list__value-field" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", { ref: register(), className: "pf-c-form-control", defaultValue: item.value, name: `${name}[${index}].value` })),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-xs-1 pairs-list__action" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__["Button"], { type: "button", "data-test-id": "pairs-list__delete-btn", className: "pairs-list__span-btns", onClick: () => {
                    ListActions.remove(index);
                }, variant: "plain" }, ListDefaultIcons.deleteIcon))));
};
const CreateTaskRunComponent = props => {
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_3__["useTranslation"])();
    const methods = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_2__["useFormContext"])();
    const [selectedTask, setSelectedTask] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
    const [inputList, setInputList] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
    const [outputList, setOutputList] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
    const [paramList, setParamList] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
    const [workspaceList, setWorkspaceList] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
    const namespace = Object(_console_internal_reducers_ui__WEBPACK_IMPORTED_MODULE_12__["getActiveNamespace"])(_redux__WEBPACK_IMPORTED_MODULE_11__["default"].getState());
    const getTaskDetails = (selectedTaskName) => __awaiter(void 0, void 0, void 0, function* () {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        const task = yield Object(_module_k8s__WEBPACK_IMPORTED_MODULE_8__["k8sGet"])(_models__WEBPACK_IMPORTED_MODULE_9__["TaskModel"], selectedTaskName, Object(_console_internal_reducers_ui__WEBPACK_IMPORTED_MODULE_12__["getActiveNamespace"])(_redux__WEBPACK_IMPORTED_MODULE_11__["default"].getState()));
        const inputsData = (_c = (_b = (_a = task.spec) === null || _a === void 0 ? void 0 : _a.resources) === null || _b === void 0 ? void 0 : _b.inputs) === null || _c === void 0 ? void 0 : _c.map(input => {
            return {
                name: input.name,
                required: !input.optional,
                type: input.type,
                description: input.description,
            };
        });
        const outputsData = (_f = (_e = (_d = task.spec) === null || _d === void 0 ? void 0 : _d.resources) === null || _e === void 0 ? void 0 : _e.outputs) === null || _f === void 0 ? void 0 : _f.map(output => {
            return {
                name: output.name,
                required: !output.optional,
                type: output.type,
                description: output.description,
            };
        });
        setInputList(inputsData || []);
        setOutputList(outputsData || []);
        const paramValueListData = (_h = (_g = task.spec) === null || _g === void 0 ? void 0 : _g.params) === null || _h === void 0 ? void 0 : _h.map(param => {
            if (param.type === 'array') {
                const valueList = param.default.map(value => {
                    return {
                        value: value,
                    };
                });
                return { value: valueList };
            }
            else {
                return { value: param.default };
            }
        });
        // MEMO : ListView의 value를 세팅해주는 방법이 reset이 최선일까..?
        // MEMO : reset할 때 params 부분 이외에 다른 value들은 그대로 있게 하기 위해 이렇게 함.
        const prevValues = methods.getValues();
        methods.reset(Object.assign(Object.assign({}, prevValues), { params: paramValueListData }));
        const paramsData = (_k = (_j = task.spec) === null || _j === void 0 ? void 0 : _j.params) === null || _k === void 0 ? void 0 : _k.map(param => {
            return {
                name: param.name,
                value: param.default,
                description: param.description,
                type: param.type,
                required: !!param.default,
            };
        });
        setParamList(paramsData || []);
        const workspacesData = (_m = (_l = task.spec) === null || _l === void 0 ? void 0 : _l.workspaces) === null || _m === void 0 ? void 0 : _m.map(workspace => {
            return {
                name: workspace.name,
                description: workspace.description,
            };
        });
        setWorkspaceList(workspacesData || []);
    });
    const inputs = inputList.map((item, index) => {
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils_section__WEBPACK_IMPORTED_MODULE_5__["Section"], { label: `${item.name} (${item.type})`, id: `input_${index}`, key: `input_${index}`, isRequired: item.required, description: item.description },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", { ref: methods.register, type: "hidden", id: `spec.resources.inputs[${index}].name`, name: `spec.resources.inputs[${index}].name`, value: item.name }),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils_resource_dropdown__WEBPACK_IMPORTED_MODULE_7__["ResourceDropdown"], { name: `spec.resources.inputs[${index}].resourceRef.name`, placeholder: t('SINGLE:MSG_TASKRUNS_CREATEFORM_DIV2_8'), resources: [{ kind: _models__WEBPACK_IMPORTED_MODULE_9__["PipelineResourceModel"].kind, namespace: namespace, prop: 'pipelineresource' }], type: "single", useHookForm: true }))));
    });
    const outputs = outputList.map((item, index) => {
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils_section__WEBPACK_IMPORTED_MODULE_5__["Section"], { label: `${item.name} (${item.type})`, id: `output_${index}`, key: `output_${index}`, isRequired: item.required, description: item.description },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", { ref: methods.register, type: "hidden", id: `spec.resources.outputs[${index}].name`, name: `spec.resources.outputs[${index}].name`, value: item.name }),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils_resource_dropdown__WEBPACK_IMPORTED_MODULE_7__["ResourceDropdown"], { name: `spec.resources.outputs[${index}].resourceRef.name`, placeholder: t('SINGLE:MSG_TASKRUNS_CREATEFORM_DIV2_8'), resources: [{ kind: _models__WEBPACK_IMPORTED_MODULE_9__["PipelineResourceModel"].kind, namespace: namespace, prop: 'pipelineresource' }], type: "single", useHookForm: true }))));
    });
    const params = paramList.map((item, index) => {
        if (item.type === 'array') {
            return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils_section__WEBPACK_IMPORTED_MODULE_5__["Section"], { label: item.name, id: `${selectedTask}_param_${index}`, key: `${selectedTask}_param_${index}` },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", { ref: methods.register, type: "hidden", id: `params[${index}].name`, name: `params[${index}].name`, value: item.name }),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils_list_view__WEBPACK_IMPORTED_MODULE_6__["ListView"], { name: `params[${index}].value`, methods: methods, addButtonText: "\uCD94\uAC00", headerFragment: react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null), itemRenderer: paramItemRenderer, defaultItem: { value: '' } }))));
        }
        else {
            return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils_section__WEBPACK_IMPORTED_MODULE_5__["Section"], { label: item.name, id: `${selectedTask}_param_${index}`, key: `${selectedTask}_param_${index}` },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", { ref: methods.register, type: "hidden", id: `params[${index}].name`, name: `params[${index}].name`, value: item.name }),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", { ref: methods.register, className: "pf-c-form-control", id: `params[${index}].value`, name: `params[${index}].value`, defaultValue: item.value }))));
        }
    });
    const workspaces = workspaceList.map((item, index) => {
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils_section__WEBPACK_IMPORTED_MODULE_5__["Section"], { label: item.name, description: item.description, key: index, id: `workspace_${index}_${item.name}` },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null)));
    });
    const onTaskSelect = selectedTaskName => {
        setSelectedTask(selectedTaskName);
        getTaskDetails(selectedTaskName);
    };
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils_section__WEBPACK_IMPORTED_MODULE_5__["Section"], { label: t('SINGLE:MSG_TASKRUNS_CREATEFORM_DIV2_5'), id: "task" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils_resource_dropdown__WEBPACK_IMPORTED_MODULE_7__["ResourceDropdown"], { name: "spec.taskRef.name", placeholder: t('SINGLE:MSG_TASKRUNS_CREATEFORM_DIV2_5'), resources: [{ kind: _models__WEBPACK_IMPORTED_MODULE_9__["TaskModel"].kind, namespace: namespace, prop: 'task' }], onChange: onTaskSelect, type: "single", useHookForm: true })),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils_section__WEBPACK_IMPORTED_MODULE_5__["Section"], { label: t('SINGLE:MSG_TASKRUNS_CREATEFORM_DIV2_7'), id: "inputresource" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null, inputs)),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils_section__WEBPACK_IMPORTED_MODULE_5__["Section"], { label: t('SINGLE:MSG_TASKRUNS_CREATEFORM_DIV2_9'), id: "outputresource" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null, outputs)),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils_section__WEBPACK_IMPORTED_MODULE_5__["Section"], { label: t('SINGLE:MSG_TASKRUNS_CREATEFORM_DIV2_6'), id: "taskparameter" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null, params)),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils_section__WEBPACK_IMPORTED_MODULE_5__["Section"], { label: "\uC6CC\uD06C\uC2A4\uD398\uC774\uC2A4", id: "workspace" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null, workspaces)),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils_section__WEBPACK_IMPORTED_MODULE_5__["Section"], { label: t('SINGLE:MSG_TASKRUNS_CREATEFORM_DIV2_11'), id: "timeout", description: t('SINGLE:MSG_TASKRUNS_CREATEFORM_DIV2_13') },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", { ref: methods.register, className: "pf-c-form-control", id: "time_input", name: "spec.timeout", type: "number", placeholder: "\uC608: 60, 120, 30" }),
                " \uBD84")),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils_section__WEBPACK_IMPORTED_MODULE_5__["Section"], { label: t('SINGLE:MSG_TASKRUNS_CREATEFORM_DIV2_14'), id: "serviceaccount", description: t('SINGLE:MSG_TASKRUNS_CREATEFORM_DIV2_16'), isRequired: true },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils_resource_dropdown__WEBPACK_IMPORTED_MODULE_7__["ResourceDropdown"], { name: "spec.serviceAccountName", placeholder: t('SINGLE:MSG_TASKRUNS_CREATEFORM_DIV2_15'), resources: [{ kind: _models__WEBPACK_IMPORTED_MODULE_9__["ServiceAccountModel"].kind, namespace: namespace, prop: 'serviceaccount' }], type: "single", useHookForm: true }))));
};
const CreateTaskRun = ({ match: { params }, kind }) => {
    const formComponent = taskRunFormFactory(params);
    const TaskRunFormComponent = formComponent;
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](TaskRunFormComponent, { fixed: { apiVersion: `${_models__WEBPACK_IMPORTED_MODULE_9__["TaskRunModel"].apiGroup}/${_models__WEBPACK_IMPORTED_MODULE_9__["TaskRunModel"].apiVersion}`, kind, metadata: { namespace: params.ns } }, explanation: '', titleVerb: "Create", onSubmitCallback: onSubmitCallback, isCreate: true });
};
const changeTimeoutFormat = timeout => {
    timeout = Number(timeout);
    if (timeout == 0) {
        return 0;
    }
    if (timeout >= 60) {
        return `${(timeout - (timeout % 60)) / 60}h${timeout % 60}m`;
    }
    else
        return `${timeout}m`;
};
const onSubmitCallback = data => {
    let params = lodash_es__WEBPACK_IMPORTED_MODULE_0__["cloneDeep"](data.params);
    const formattedTimeout = changeTimeoutFormat(data.spec.timeout);
    delete data.params;
    delete data.spec.timeout;
    const prettyParams = params === null || params === void 0 ? void 0 : params.map(param => {
        if (Array.isArray(param.value)) {
            const valueList = param.value.map(obj => {
                return obj.value;
            });
            return { name: param.name, value: valueList };
        }
        else {
            return { name: param.name, value: param.value };
        }
    });
    data = lodash_es__WEBPACK_IMPORTED_MODULE_0__["defaultsDeep"](data, { kind: _models__WEBPACK_IMPORTED_MODULE_9__["TaskRunModel"].kind, spec: { params: prettyParams, timeout: formattedTimeout } });
    // console.log('data? ', data);
    return data;
};


/***/ }),

/***/ "./public/components/hypercloud/utils/list-view.tsx":
/*!**********************************************************!*\
  !*** ./public/components/hypercloud/utils/list-view.tsx ***!
  \**********************************************************/
/*! exports provided: ListView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListView", function() { return ListView; });
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-icons */ "./node_modules/@patternfly/react-icons/dist/esm/index.js");




const ListView = ({ name, methods, defaultItem = { key: '', value: '' }, itemRenderer, headerFragment, addButtonText }) => {
    const { control, register, getValues } = methods ? methods : Object(react_hook_form__WEBPACK_IMPORTED_MODULE_0__["useFormContext"])();
    const { fields, append, remove } = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_0__["useFieldArray"])({ control, name: name });
    const DefaultListHeaderFragment = (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "row pairs-list__heading" },
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-xs-4 text-secondary text-uppercase" }, "KEY"),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-xs-4 text-secondary text-uppercase" }, "VALUE"),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-xs-1 co-empty__header" })));
    const DefaultListItemRenderer = (register, name, item, index, ListActions, ListDefaultIcons) => {
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "row", key: item.id },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-xs-4 pairs-list__name-field" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", { ref: register(), className: "pf-c-form-control", name: `${name}[${index}].key`, defaultValue: item.key })),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-xs-4 pairs-list__value-field" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", { ref: register(), className: "pf-c-form-control", name: `${name}[${index}].value`, defaultValue: item.value })),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-xs-1 pairs-list__action" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Button"], { type: "button", "data-test-id": "pairs-list__delete-btn", className: "pairs-list__span-btns", onClick: () => {
                        ListActions.remove(index);
                    }, variant: "plain" }, ListDefaultIcons.deleteIcon))));
    };
    const deleteIcon = (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_3__["MinusCircleIcon"], { className: "pairs-list__side-btn pairs-list__delete-icon" }),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { className: "sr-only" }, "Delete")));
    const ListActions = {
        append: append,
        remove: remove,
        getValues: getValues,
    };
    const ListDefaultIcons = {
        deleteIcon: deleteIcon,
    };
    const itemList = itemRenderer ? fields.map((item, index) => itemRenderer(register, name, item, index, ListActions, ListDefaultIcons)) : fields.map((item, index) => DefaultListItemRenderer(register, name, item, index, ListActions, ListDefaultIcons));
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
        headerFragment ? headerFragment : DefaultListHeaderFragment,
        itemList,
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "row col-xs-12" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Button"], { className: "pf-m-link--align-left", "data-test-id": "pairs-list__add-btn", onClick: () => {
                    append(defaultItem);
                }, type: "button", variant: "link" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_3__["PlusCircleIcon"], { "data-test-id": "pairs-list__add-icon", className: "co-icon-space-r" }),
                !!addButtonText ? addButtonText : 'Add'))));
};


/***/ }),

/***/ "./public/components/hypercloud/utils/resource-dropdown.tsx":
/*!******************************************************************!*\
  !*** ./public/components/hypercloud/utils/resource-dropdown.tsx ***!
  \******************************************************************/
/*! exports provided: ResourceDropdown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceDropdown", function() { return ResourceDropdown; });
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _resource_list_dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resource-list-dropdown */ "./public/components/hypercloud/utils/resource-list-dropdown.tsx");
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




const ResourceDropdownWrapper_ = (props) => {
    const getItems = (resources) => {
        const items = [];
        lodash_es__WEBPACK_IMPORTED_MODULE_0__["each"](resources, (resource, k) => {
            if (resource.loaded) {
                const kind = resource.kind;
                lodash_es__WEBPACK_IMPORTED_MODULE_0__["each"](resource.data, (item) => {
                    item.kind = kind;
                    items.push(item);
                });
            }
        });
        return items;
    };
    //const [title, setTitle] = React.useState(props.loaded ? props.placeholder : <LoadingInline />);
    const [rows, setRows] = react__WEBPACK_IMPORTED_MODULE_1__["useState"](props.loaded ? getItems(props.resources) : []);
    react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](() => {
        if (props.loaded) {
            //setTitle(props.placeholder);
            setRows(getItems(props.resources));
        }
    }, [props.loaded]);
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_resource_list_dropdown__WEBPACK_IMPORTED_MODULE_3__["ResourceListDropdown"], Object.assign({}, props, { title: !props.loaded ? react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["LoadingInline"], null) : props.title, resourceList: rows, autocompletePlaceholder: "search by name" })));
};
const ResourceDropdown = (_a) => {
    var { resources } = _a, props = __rest(_a, ["resources"]);
    resources.map((resource) => Object.assign(resource, { isList: true }));
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["Firehose"], { resources: resources },
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](ResourceDropdownWrapper_, Object.assign({}, props))));
};


/***/ })

}]);
//# sourceMappingURL=create-secret4-aec93e3a50d269a6827d.js.map