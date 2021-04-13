(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["create-secret6"],{

/***/ "./public/components/hypercloud/form/tasks/create-task.tsx":
/*!*****************************************************************!*\
  !*** ./public/components/hypercloud/form/tasks/create-task.tsx ***!
  \*****************************************************************/
/*! exports provided: CreateTask, onSubmitCallback */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateTask", function() { return CreateTask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onSubmitCallback", function() { return onSubmitCallback; });
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var _create_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../create-form */ "./public/components/hypercloud/form/create-form.tsx");
/* harmony import */ var _utils_section__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/section */ "./public/components/hypercloud/utils/section.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils */ "./public/components/hypercloud/form/utils/index.tsx");
/* harmony import */ var _input_resource_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./input-resource-modal */ "./public/components/hypercloud/form/tasks/input-resource-modal.tsx");
/* harmony import */ var _output_resource_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./output-resource-modal */ "./public/components/hypercloud/form/tasks/output-resource-modal.tsx");
/* harmony import */ var _task_parameter_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./task-parameter-modal */ "./public/components/hypercloud/form/tasks/task-parameter-modal.tsx");
/* harmony import */ var _work_space_modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./work-space-modal */ "./public/components/hypercloud/form/tasks/work-space-modal.tsx");
/* harmony import */ var _volume_modal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./volume-modal */ "./public/components/hypercloud/form/tasks/volume-modal.tsx");
/* harmony import */ var _step_modal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./step-modal */ "./public/components/hypercloud/form/tasks/step-modal.tsx");





// import { TextInput } from '../../utils/text-input';








const defaultValues = {
    metadata: {
        name: 'example-name',
    },
};
const taskFormFactory = params => {
    return Object(_create_form__WEBPACK_IMPORTED_MODULE_3__["WithCommonForm"])(CreateTaskComponent, params, defaultValues);
};
const CreateTaskComponent = props => {
    const methods = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_2__["useFormContext"])();
    const { control, register, setValue } = methods;
    const [inputResource, setInputResource] = react__WEBPACK_IMPORTED_MODULE_1__["useState"]([]);
    const [outputResource, setOutputResource] = react__WEBPACK_IMPORTED_MODULE_1__["useState"]([]);
    const [taskParameter, setTaskParameter] = react__WEBPACK_IMPORTED_MODULE_1__["useState"]([]);
    const [workSpace, setWorkSpace] = react__WEBPACK_IMPORTED_MODULE_1__["useState"]([]);
    const [volume, setVolume] = react__WEBPACK_IMPORTED_MODULE_1__["useState"]([]);
    const [step, setStep] = react__WEBPACK_IMPORTED_MODULE_1__["useState"]([]);
    react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](() => {
        register('input_resource');
        register('output_resource');
        register('task_parameter');
        register('work_space');
        register('volume');
        register('step');
    }, [register]);
    react__WEBPACK_IMPORTED_MODULE_1__["useMemo"](() => {
        setValue('input_resource', inputResource);
    }, [inputResource]);
    react__WEBPACK_IMPORTED_MODULE_1__["useMemo"](() => {
        setValue('output_resource', outputResource);
    }, [outputResource]);
    react__WEBPACK_IMPORTED_MODULE_1__["useMemo"](() => {
        setValue('task_parameter', taskParameter);
    }, [taskParameter]);
    react__WEBPACK_IMPORTED_MODULE_1__["useMemo"](() => {
        setValue('work_space', workSpace);
    }, [workSpace]);
    react__WEBPACK_IMPORTED_MODULE_1__["useMemo"](() => {
        setValue('volume', volume);
    }, [volume]);
    react__WEBPACK_IMPORTED_MODULE_1__["useMemo"](() => {
        setValue('step', step);
    }, [step]);
    // INPUT RESOURCE
    const onAddInputResource = (cancel, index, e) => {
        e.preventDefault();
        let data = methods.getValues(); // modal에서 입력받은 data
        let currInputResource = { name: data.name, path: data.path, type: data.type, option: data.option };
        setInputResource(() => {
            return [...inputResource, currInputResource];
        }); // state 최신화
        cancel();
        return false;
    };
    const onRemoveInputResource = e => {
        let currInputResource = inputResource.filter((cur, idx) => {
            let targetIndex = Number(e.target.id.split('item-remove')[1]);
            return targetIndex !== idx;
        });
        setInputResource([...currInputResource]);
    };
    const onModifyInputResource = (cancel, index, e) => {
        e.preventDefault();
        let list = document.getElementById('input-resource-list').childNodes;
        list.forEach(cur => {
            if (cur['dataset']['modify'] === 'true') {
                cur['dataset']['modify'] = false;
            }
        });
        let data = methods.getValues(); // modal에서 입력받은 data
        let currInputResource = inputResource.map((cur, idx) => {
            if (idx === index) {
                return { name: data.name, path: data.path, type: data.type, option: data.option };
            }
            return cur;
        });
        setInputResource([...currInputResource]);
        cancel();
    };
    // OUTPUT RESOURCE
    const onAddOutputResource = (cancel, index, e) => {
        e.preventDefault();
        let data = methods.getValues(); // modal에서 입력받은 data
        let currOutputResource = { name: data.name, path: data.path, type: data.type, option: data.option };
        setOutputResource(() => {
            return [...outputResource, currOutputResource];
        }); // state 최신화
        cancel();
        return false;
    };
    const onRemoveOutputResource = e => {
        let currOutputResource = outputResource.filter((cur, idx) => {
            let targetIndex = Number(e.target.id.split('item-remove')[1]);
            return targetIndex !== idx;
        });
        setOutputResource([...currOutputResource]);
    };
    const onModifyOutputResource = (cancel, index, e) => {
        e.preventDefault();
        let list = document.getElementById('output-resource-list').childNodes;
        list.forEach(cur => {
            if (cur['dataset']['modify'] === 'true') {
                cur['dataset']['modify'] = false;
            }
        });
        let data = methods.getValues(); // modal에서 입력받은 data
        let currOutputResource = outputResource.map((cur, idx) => {
            if (idx === index) {
                return { name: data.name, path: data.path, type: data.type, option: data.option };
            }
            return cur;
        });
        setOutputResource([...currOutputResource]);
        cancel();
    };
    // TASK PARAMETER
    const onAddTaskParameter = (cancel, index, e) => {
        e.preventDefault();
        let data = methods.getValues(); // modal에서 입력받은 data
        let currTaskParameter = { name: data.name, description: data.description, type: data.type, default: data.default };
        setTaskParameter(() => {
            return [...taskParameter, currTaskParameter];
        }); // state 최신화
        cancel();
        return false;
    };
    const onRemoveTaskParameter = e => {
        let currTaskParameter = taskParameter.filter((cur, idx) => {
            let targetIndex = Number(e.target.id.split('item-remove')[1]);
            return targetIndex !== idx;
        });
        setTaskParameter([...currTaskParameter]);
    };
    const onModifyTaskParameter = (cancel, index, e) => {
        e.preventDefault();
        let list = document.getElementById('task-parameter-list').childNodes;
        list.forEach(cur => {
            if (cur['dataset']['modify'] === 'true') {
                cur['dataset']['modify'] = false;
            }
        });
        let data = methods.getValues(); // modal에서 입력받은 data
        let currTaskParameter = taskParameter.map((cur, idx) => {
            if (idx === index) {
                return { name: data.name, description: data.description, type: data.type, default: data.default };
            }
            return cur;
        });
        setTaskParameter([...currTaskParameter]);
        cancel();
    };
    // WORKSPACE
    const onAddWorkSpace = (cancel, index, e) => {
        e.preventDefault();
        let data = methods.getValues(); // modal에서 입력받은 data
        let currWorkSpace = { name: data.name, description: data.description, path: data.path, accessMode: data.accessMode, option: data.option };
        setWorkSpace(() => {
            return [...workSpace, currWorkSpace];
        }); // state 최신화
        cancel();
        return false;
    };
    const onRemoveWorkSpace = e => {
        let currWorkSpace = workSpace.filter((cur, idx) => {
            let targetIndex = Number(e.target.id.split('item-remove')[1]);
            return targetIndex !== idx;
        });
        setWorkSpace([...currWorkSpace]);
    };
    const onModifyWorkSpace = (cancel, index, e) => {
        e.preventDefault();
        let list = document.getElementById('work-space-list').childNodes;
        list.forEach(cur => {
            if (cur['dataset']['modify'] === 'true') {
                cur['dataset']['modify'] = false;
            }
        });
        let data = methods.getValues(); // modal에서 입력받은 data
        let currWorkSpace = workSpace.map((cur, idx) => {
            if (idx === index) {
                return { name: data.name, path: data.path, type: data.type, option: data.option };
            }
            return cur;
        });
        setWorkSpace([...currWorkSpace]);
        cancel();
    };
    // VOLUME
    const onAddVolume = (cancel, index, e) => {
        e.preventDefault();
        let data = methods.getValues(); // modal에서 입력받은 data
        let currVolume = { name: data.name, type: data.type };
        if (currVolume.type === 'secret') {
            currVolume['secret'] = data['secret'];
            delete currVolume['configMap'];
        }
        else if (currVolume.type === 'configMap') {
            currVolume['configMap'] = data['config_map'];
            delete currVolume['secret'];
        }
        setVolume(() => {
            return [...volume, currVolume];
        }); // state 최신화
        cancel();
        return false;
    };
    const onRemoveVolume = e => {
        let currVolume = volume.filter((cur, idx) => {
            let targetIndex = Number(e.target.id.split('item-remove')[1]);
            return targetIndex !== idx;
        });
        setVolume([...currVolume]);
    };
    const onModifyVolume = (cancel, index, e) => {
        e.preventDefault();
        let list = document.getElementById('volume-list').childNodes;
        list.forEach(cur => {
            if (cur['dataset']['modify'] === 'true') {
                cur['dataset']['modify'] = false;
            }
        });
        let data = methods.getValues(); // modal에서 입력받은 data
        let currVolume = volume.map((cur, idx) => {
            if (idx === index) {
                let volume = { name: data.name, type: data.type };
                if (volume.type === 'secret') {
                    volume['secret'] = data.secret;
                    delete volume['configMap'];
                }
                else if (volume.type === 'configMap') {
                    volume['configMap'] = data['config_map'];
                    delete volume['secret'];
                }
                return volume;
            }
            return cur;
        });
        setVolume([...currVolume]);
        cancel();
    };
    // STEP
    const onAddStep = (cancel, index, e) => {
        e.preventDefault();
        let data = methods.getValues(); // modal에서 입력받은 data
        let currStep = { name: data.name, manualImage: data.manualImage, manualCommand: data.manualCommand };
        setStep(() => {
            return [...step, currStep];
        }); // state 최신화
        cancel();
        return false;
    };
    const onRemoveStep = e => {
        let currStep = step.filter((cur, idx) => {
            let targetIndex = Number(e.target.id.split('item-remove')[1]);
            return targetIndex !== idx;
        });
        setStep([...currStep]);
    };
    const onModifyStep = (cancel, index, e) => {
        e.preventDefault();
        let data = methods.getValues(); // modal에서 입력받은 data
        let currStep = step.map((cur, idx) => {
            if (idx === index) {
                return { name: data.name, path: data.path, type: data.type, option: data.option };
            }
            return cur;
        });
        setStep([...currStep]);
        cancel();
    };
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils_section__WEBPACK_IMPORTED_MODULE_4__["Section"], { label: "Labels", id: "label", description: "\uC774\uAC83\uC740 Label\uC785\uB2C8\uB2E4." },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_hook_form__WEBPACK_IMPORTED_MODULE_2__["Controller"], { name: "metadata.labels", id: "label", labelClassName: "co-text-sample", as: _utils__WEBPACK_IMPORTED_MODULE_5__["SelectorInput"], control: control, tags: [] })),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils_section__WEBPACK_IMPORTED_MODULE_4__["Section"], { label: "Input Resource", id: "inputResource" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_6__["ModalList"], { list: inputResource, id: "input-resource", title: "Input Resource", children: react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_input_resource_modal__WEBPACK_IMPORTED_MODULE_7__["InputResourceModal"], { methods: methods, inputResource: inputResource }), onRemove: onRemoveInputResource, onModify: onModifyInputResource, methods: methods, description: "\uC774 \uD0DC\uC2A4\uD06C\uC640 \uC5F0\uACB0\uB41C \uC778\uD48B \uB9AC\uC18C\uC2A4\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4." }),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { className: "open-modal_text", onClick: () => Object(_utils__WEBPACK_IMPORTED_MODULE_6__["ModalLauncher"])({ inProgress: false, title: 'Input Resource', id: 'input-resource', handleMethod: onAddInputResource, children: react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_input_resource_modal__WEBPACK_IMPORTED_MODULE_7__["InputResourceModal"], { methods: methods, inputResource: inputResource }), submitText: '추가' }) }, "+ \uC778\uD48B \uB9AC\uC18C\uC2A4 \uCD94\uAC00"))),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils_section__WEBPACK_IMPORTED_MODULE_4__["Section"], { label: "Output Resource", id: "outputResource" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_6__["ModalList"], { list: outputResource, id: "output-resource", title: "Output Resource", children: react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_output_resource_modal__WEBPACK_IMPORTED_MODULE_8__["OutputResourceModal"], { methods: methods, outputResource: outputResource }), onRemove: onRemoveOutputResource, onModify: onModifyOutputResource, methods: methods, description: "\uC774 \uD0DC\uC2A4\uD06C\uC640 \uC5F0\uACB0\uB41C \uC544\uC6C3\uD48B \uB9AC\uC18C\uC2A4\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4." }),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { className: "open-modal_text", onClick: () => Object(_utils__WEBPACK_IMPORTED_MODULE_6__["ModalLauncher"])({ inProgress: false, title: 'Out Resource', id: 'output-resource', handleMethod: onAddOutputResource, children: react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_output_resource_modal__WEBPACK_IMPORTED_MODULE_8__["OutputResourceModal"], { methods: methods, outputResource: outputResource }), submitText: '추가' }) }, "+ \uC544\uC6C3\uD48B \uB9AC\uC18C\uC2A4 \uCD94\uAC00"))),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils_section__WEBPACK_IMPORTED_MODULE_4__["Section"], { label: "\uD0DC\uC2A4\uD06C \uD30C\uB77C\uBBF8\uD130 \uAD6C\uC131", id: "taskParamter" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_6__["ModalList"], { list: taskParameter, id: "task-parameter", title: "\uD0DC\uC2A4\uD06C \uD30C\uB77C\uBBF8\uD130 \uAD6C\uC131", children: react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_task_parameter_modal__WEBPACK_IMPORTED_MODULE_9__["TaskParameterModal"], { methods: methods, taskParameter: taskParameter }), onRemove: onRemoveTaskParameter, onModify: onModifyTaskParameter, methods: methods, description: "\uC774 \uD0DC\uC2A4\uD06C\uC640 \uC5F0\uACB0\uB41C \uD0DC\uC2A4\uD06C \uD30C\uB77C\uBBF8\uD130 \uAD6C\uC131\uC774 \uC5C6\uC2B5\uB2C8\uB2E4." }),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { className: "open-modal_text", onClick: () => Object(_utils__WEBPACK_IMPORTED_MODULE_6__["ModalLauncher"])({ inProgress: false, title: '태스크 파라미터', id: 'task-parameter', handleMethod: onAddTaskParameter, children: react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_task_parameter_modal__WEBPACK_IMPORTED_MODULE_9__["TaskParameterModal"], { methods: methods, taskParameter: taskParameter }), submitText: '추가' }) }, "+ \uD0DC\uC2A4\uD06C \uD30C\uB77C\uBBF8\uD130 \uCD94\uAC00"))),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils_section__WEBPACK_IMPORTED_MODULE_4__["Section"], { label: "\uC6CC\uD06C\uC2A4\uD398\uC774\uC2A4 \uAD6C\uC131", id: "workSpace" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_6__["ModalList"], { list: workSpace, id: "work-space", title: "\uC6CC\uD06C\uC2A4\uD398\uC774\uC2A4 \uAD6C\uC131", children: react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_work_space_modal__WEBPACK_IMPORTED_MODULE_10__["WorkSpaceModal"], { methods: methods, workSpace: workSpace }), onRemove: onRemoveWorkSpace, onModify: onModifyWorkSpace, methods: methods, description: "\uC774 \uD0DC\uC2A4\uD06C\uC640 \uC5F0\uACB0\uB41C \uC6CC\uD06C\uC2A4\uD398\uC774\uC2A4 \uAD6C\uC131\uC774 \uC5C6\uC2B5\uB2C8\uB2E4." }),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { className: "open-modal_text", onClick: () => Object(_utils__WEBPACK_IMPORTED_MODULE_6__["ModalLauncher"])({ inProgress: false, title: '워크스페이스', id: 'work-space', handleMethod: onAddWorkSpace, children: react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_work_space_modal__WEBPACK_IMPORTED_MODULE_10__["WorkSpaceModal"], { methods: methods, workSpace: workSpace }), submitText: '추가' }) }, "+ \uC6CC\uD06C\uC2A4\uD398\uC774\uC2A4 \uCD94\uAC00"))),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils_section__WEBPACK_IMPORTED_MODULE_4__["Section"], { label: "\uBCFC\uB968", id: "volume" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_6__["ModalList"], { list: volume, id: "volume", title: "\uBCFC\uB968 \uAD6C\uC131", children: react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_volume_modal__WEBPACK_IMPORTED_MODULE_11__["VolumeModal"], { methods: methods, volume: volume }), onRemove: onRemoveVolume, onModify: onModifyVolume, methods: methods, description: "\uC774 \uD0DC\uC2A4\uD06C\uC640 \uC5F0\uACB0\uB41C \uBCFC\uB968\uC774 \uC5C6\uC2B5\uB2C8\uB2E4." }),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { className: "open-modal_text", onClick: () => Object(_utils__WEBPACK_IMPORTED_MODULE_6__["ModalLauncher"])({ inProgress: false, title: '볼륨', id: 'volume', handleMethod: onAddVolume, children: react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_volume_modal__WEBPACK_IMPORTED_MODULE_11__["VolumeModal"], { methods: methods, volume: volume }), submitText: '추가' }) }, "+ \uBCFC\uB968 \uCD94\uAC00"))),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils_section__WEBPACK_IMPORTED_MODULE_4__["Section"], { label: "\uC2A4\uD15D", id: "step" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_6__["ModalList"], { list: step, id: "step", title: "\uC2A4\uD15D \uAD6C\uC131", children: react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_step_modal__WEBPACK_IMPORTED_MODULE_12__["StepModal"], { methods: methods, step: step }), onRemove: onRemoveStep, onModify: onModifyStep, methods: methods, description: "\uC774 \uD0DC\uC2A4\uD06C\uC640 \uC5F0\uACB0\uB41C \uC2A4\uD15D\uC774 \uC5C6\uC2B5\uB2C8\uB2E4." }),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { className: "open-modal_text", onClick: () => Object(_utils__WEBPACK_IMPORTED_MODULE_6__["ModalLauncher"])({ inProgress: false, title: '스텝', id: 'step', handleMethod: onAddStep, children: react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_step_modal__WEBPACK_IMPORTED_MODULE_12__["StepModal"], { methods: methods, step: step }), submitText: '추가' }) }, "+ \uC2A4\uD15D \uCD94\uAC00")))));
};
const CreateTask = props => {
    const formComponent = taskFormFactory(props.match.params);
    const TaskFormComponent = formComponent;
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](TaskFormComponent, { fixed: {}, explanation: '', titleVerb: "Create", onSubmitCallback: onSubmitCallback, isCreate: true });
};
const onSubmitCallback = data => {
    let labels = _utils__WEBPACK_IMPORTED_MODULE_5__["SelectorInput"].objectify(data.metadata.labels);
    delete data.metadata.labels;
    data = lodash_es__WEBPACK_IMPORTED_MODULE_0__["defaultsDeep"](data, { metadata: { labels: labels } });
    return data;
};


/***/ }),

/***/ "./public/components/hypercloud/form/tasks/input-resource-modal.tsx":
/*!**************************************************************************!*\
  !*** ./public/components/hypercloud/form/tasks/input-resource-modal.tsx ***!
  \**************************************************************************/
/*! exports provided: InputResourceModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputResourceModal", function() { return InputResourceModal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_section__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/section */ "./public/components/hypercloud/utils/section.tsx");
/* harmony import */ var _utils_dropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/dropdown */ "./public/components/hypercloud/utils/dropdown.jsx");
/* harmony import */ var _utils_text_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/text-input */ "./public/components/hypercloud/utils/text-input.tsx");




const InputResourceModal = ({ methods, inputResource }) => {
    const typeItems = {
        Git: 'Git',
        Image: 'Image',
    };
    let target = document.getElementById('input-resource-list');
    let modalType = target && [...target.childNodes].some(cur => cur['dataset']['modify'] === 'true') ? 'modify' : 'add';
    let template;
    if (modalType === 'modify') {
        let list = target.childNodes;
        list.forEach((cur, idx) => {
            if (cur['dataset']['modify'] === 'true') {
                template = inputResource[idx];
            }
        });
    }
    const [option, setOption] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](template === null || template === void 0 ? void 0 : template.option);
    console.log(inputResource);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils_section__WEBPACK_IMPORTED_MODULE_1__["Section"], { label: "Name", id: "inputresource_name", isRequired: true },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils_text_input__WEBPACK_IMPORTED_MODULE_3__["TextInput"], { id: "name", inputClassName: "col-md-12", methods: methods, defaultValue: modalType === 'modify' ? template.name : '' })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils_section__WEBPACK_IMPORTED_MODULE_1__["Section"], { label: "Type", id: "inputresource-type", isRequired: true },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils_dropdown__WEBPACK_IMPORTED_MODULE_2__["Dropdown"], { name: "type", className: "btn-group", title: "\uD0C0\uC785 \uC120\uD0DD" // 드롭다운 title 지정
                , methods: methods, items: typeItems, style: { display: 'block' }, buttonClassName: "dropdown-btn col-md-12" // 선택된 아이템 보여주는 button (title) 부분 className
                , itemClassName: "dropdown-item" // 드롭다운 아이템 리스트 전체의 className - 각 row를 의미하는 것은 아님
             })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils_section__WEBPACK_IMPORTED_MODULE_1__["Section"], { label: "Resource Path", id: "inputresource_path" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils_text_input__WEBPACK_IMPORTED_MODULE_3__["TextInput"], { id: "path", inputClassName: "col-md-12", methods: methods, defaultValue: modalType === 'modify' ? template.path : '' })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { name: "option", type: "checkbox", ref: methods.register(), checked: option, onClick: () => {
                    setOption(!option);
                } }),
            "\uC774 \uB9AC\uC18C\uC2A4\uB97C \uC120\uD0DD \uD56D\uBAA9\uC73C\uB85C \uC81C\uACF5\uD569\uB2C8\uB2E4."),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null, "\uC120\uD0DD \uD56D\uBAA9\uC73C\uB85C \uC81C\uACF5\uD560 \uACBD\uC6B0, \uD0DC\uC2A4\uD06C \uB7F0 \uB610\uB294 \uD30C\uC774\uD504\uB77C\uC778 \uBA54\uB274\uC5D0\uC11C \uD30C\uC774\uD504\uB77C\uC778 \uB9AC\uC18C\uC2A4\uB97C \uD544\uC694\uC5D0 \uB530\uB77C \uD560\uB2F9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.")));
};


/***/ }),

/***/ "./public/components/hypercloud/form/tasks/output-resource-modal.tsx":
/*!***************************************************************************!*\
  !*** ./public/components/hypercloud/form/tasks/output-resource-modal.tsx ***!
  \***************************************************************************/
/*! exports provided: OutputResourceModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutputResourceModal", function() { return OutputResourceModal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_section__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/section */ "./public/components/hypercloud/utils/section.tsx");
/* harmony import */ var _utils_dropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/dropdown */ "./public/components/hypercloud/utils/dropdown.jsx");
/* harmony import */ var _utils_text_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/text-input */ "./public/components/hypercloud/utils/text-input.tsx");




const OutputResourceModal = ({ methods, outputResource }) => {
    const typeItems = {
        Git: 'Git',
        Image: 'Image',
    };
    let target = document.getElementById('output-resource-list');
    let modalType = target && [...target.childNodes].some(cur => cur['dataset']['modify'] === 'true') ? 'modify' : 'add';
    let template;
    if (modalType === 'modify') {
        let list = target.childNodes;
        list.forEach((cur, idx) => {
            if (cur['dataset']['modify'] === 'true') {
                template = outputResource[idx];
            }
        });
    }
    const [option, setOption] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](template === null || template === void 0 ? void 0 : template.option);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils_section__WEBPACK_IMPORTED_MODULE_1__["Section"], { label: "Name", id: "outputresource_name", isRequired: true },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils_text_input__WEBPACK_IMPORTED_MODULE_3__["TextInput"], { id: "name", inputClassName: "col-md-12", methods: methods, defaultValue: modalType === 'modify' ? template.name : '' })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils_section__WEBPACK_IMPORTED_MODULE_1__["Section"], { label: "Type", id: "outputresource-type", isRequired: true },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils_dropdown__WEBPACK_IMPORTED_MODULE_2__["Dropdown"], { name: "type", className: "btn-group", title: "\uD0C0\uC785 \uC120\uD0DD" // 드롭다운 title 지정
                , methods: methods, items: typeItems, style: { display: 'block' }, buttonClassName: "dropdown-btn col-md-12" // 선택된 아이템 보여주는 button (title) 부분 className
                , itemClassName: "dropdown-item" // 드롭다운 아이템 리스트 전체의 className - 각 row를 의미하는 것은 아님
                , defaultValue: modalType === 'modify' ? template.type : '' })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils_section__WEBPACK_IMPORTED_MODULE_1__["Section"], { label: "Resource Path", id: "outputresource_path" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils_text_input__WEBPACK_IMPORTED_MODULE_3__["TextInput"], { id: "path", inputClassName: "col-md-12", methods: methods, defaultValue: modalType === 'modify' ? template.path : '' })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { name: "option", type: "checkbox", ref: methods.register(), checked: option, onClick: () => {
                    setOption(!option);
                } }),
            "\uC774 \uB9AC\uC18C\uC2A4\uB97C \uC120\uD0DD \uD56D\uBAA9\uC73C\uB85C \uC81C\uACF5\uD569\uB2C8\uB2E4."),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null, "\uC120\uD0DD \uD56D\uBAA9\uC73C\uB85C \uC81C\uACF5\uD560 \uACBD\uC6B0, \uD0DC\uC2A4\uD06C \uB7F0 \uB610\uB294 \uD30C\uC774\uD504\uB77C\uC778 \uBA54\uB274\uC5D0\uC11C \uD30C\uC774\uD504\uB77C\uC778 \uB9AC\uC18C\uC2A4\uB97C \uD544\uC694\uC5D0 \uB530\uB77C \uD560\uB2F9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.")));
};


/***/ }),

/***/ "./public/components/hypercloud/form/tasks/step-modal.tsx":
/*!****************************************************************!*\
  !*** ./public/components/hypercloud/form/tasks/step-modal.tsx ***!
  \****************************************************************/
/*! exports provided: StepModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StepModal", function() { return StepModal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_section__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/section */ "./public/components/hypercloud/utils/section.tsx");
/* harmony import */ var _utils_radio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/radio */ "./public/components/hypercloud/utils/radio.tsx");
/* harmony import */ var _utils_dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/dropdown */ "./public/components/hypercloud/utils/dropdown.jsx");
/* harmony import */ var _utils_text_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/text-input */ "./public/components/hypercloud/utils/text-input.tsx");
/* harmony import */ var _utils_list_view__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/list-view */ "./public/components/hypercloud/utils/list-view.tsx");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");



// import { ResourceListDropdown } from './utils/resource-list-dropdown';





const StepModal = ({ methods, step }) => {
    const ImageRadioList = [
        // RadioGroup 컴포넌트에 넣어줄 items
        {
            title: 'Image Registry',
            value: 'registry',
        },
        {
            title: '직접 입력',
            value: 'manual',
        },
    ];
    let volumeItems = {};
    // volume 있는지 여부
    let isVolumeExist = () => {
        let volumeList = methods.getValues('volume');
        if ((volumeList === null || volumeList === void 0 ? void 0 : volumeList.length) > 0) {
            volumeList.forEach(cur => {
                volumeItems[cur.name] = cur.name;
            });
            return true;
        }
        return false;
    };
    const parameterListHeaderFragment = react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null);
    const parameterListItemRenderer = (register, name, item, index, ListActions, ListDefaultIcons) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "row", key: item.id },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-xs-11 pairs-list__value-field" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils_text_input__WEBPACK_IMPORTED_MODULE_4__["TextInput"], { id: `parameterList${index}.parameter`, inputClassName: "col-md-12", methods: methods, placeholder: '-c' })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-xs-1 pairs-list__action" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_7__["Button"], { type: "button", "data-test-id": "pairs-list__delete-btn", className: "pairs-list__span-btns", onClick: () => {
                    ListActions.remove(index);
                }, variant: "plain" }, ListDefaultIcons.deleteIcon))));
    const envListHeaderFragment = react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null);
    const envListItemRenderer = (register, name, item, index, ListActions, ListDefaultIcons) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "row", key: item.id },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-xs-11 pairs-list__value-field", style: { display: 'flex' } },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils_text_input__WEBPACK_IMPORTED_MODULE_4__["TextInput"], { id: `envList${index}.envKey`, inputClassName: "col-md-6", methods: methods, placeholder: '키' }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { style: { margin: '0 5px' } }, "="),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils_text_input__WEBPACK_IMPORTED_MODULE_4__["TextInput"], { id: `envList${index}.envValue`, inputClassName: "col-md-6", methods: methods, placeholder: '값' })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-xs-1 pairs-list__action" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_7__["Button"], { type: "button", "data-test-id": "pairs-list__delete-btn", className: "pairs-list__span-btns", onClick: () => {
                    ListActions.remove(index);
                }, variant: "plain" }, ListDefaultIcons.deleteIcon))));
    let template;
    // modify 기능 용
    let target = document.getElementById('step-list');
    let modalType = target && [...target.childNodes].some(cur => cur['dataset']['modify'] === 'true') ? 'modify' : 'add';
    if (modalType === 'modify') {
        let list = target.childNodes;
        list.forEach((cur, idx) => {
            if (cur['dataset']['modify'] === 'true') {
                template = step[idx];
            }
        });
    }
    // radio toggle용
    const imageToggle = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_6__["useWatch"])({
        control: methods.control,
        name: 'image-toggle',
        defaultValue: template ? template.type : 'registry',
    });
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils_section__WEBPACK_IMPORTED_MODULE_1__["Section"], { label: "Name", id: "step-name", isRequired: true },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils_text_input__WEBPACK_IMPORTED_MODULE_4__["TextInput"], { id: "name", inputClassName: "col-md-12", methods: methods, defaultValue: modalType === 'modify' ? template.name : '' })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils_section__WEBPACK_IMPORTED_MODULE_1__["Section"], { label: "\uC774\uBBF8\uC9C0", id: "step-image-toggle" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils_radio__WEBPACK_IMPORTED_MODULE_2__["RadioGroup"], { methods: methods, name: "image-toggle" // 서버에 보낼 데이터에서의 path (필수)
                , items: ImageRadioList, inline: true })),
        imageToggle === 'registry' && react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null, "\uB808\uC9C0\uC2A4\uD2B8\uB9AC"),
        imageToggle === 'manual' && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils_section__WEBPACK_IMPORTED_MODULE_1__["Section"], { label: "", id: "step-manual-image" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils_text_input__WEBPACK_IMPORTED_MODULE_4__["TextInput"], { id: "manualImage", inputClassName: "col-md-12", methods: methods, defaultValue: modalType === 'modify' ? template.manualImage : '' })),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils_section__WEBPACK_IMPORTED_MODULE_1__["Section"], { label: "\uCEE4\uB9E8\uB4DC", id: "step-manual-command" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils_text_input__WEBPACK_IMPORTED_MODULE_4__["TextInput"], { id: "manualCommand", inputClassName: "col-md-12", methods: methods, defaultValue: modalType === 'modify' ? template.manualCommand : '' })))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils_section__WEBPACK_IMPORTED_MODULE_1__["Section"], { label: "\uC778\uC218", id: "step-parameter" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils_list_view__WEBPACK_IMPORTED_MODULE_5__["ListView"], { name: "parameterList", methods: methods, addButtonText: "\uCD94\uAC00", headerFragment: parameterListHeaderFragment, itemRenderer: parameterListItemRenderer, defaultItem: { parameter: '' } })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils_section__WEBPACK_IMPORTED_MODULE_1__["Section"], { label: "\uD658\uACBD \uBCC0\uC218", id: "step-parameter" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils_list_view__WEBPACK_IMPORTED_MODULE_5__["ListView"], { name: "envList", methods: methods, addButtonText: "\uCD94\uAC00", headerFragment: envListHeaderFragment, itemRenderer: envListItemRenderer, defaultItem: { envKey: '', envValue: '' } })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils_section__WEBPACK_IMPORTED_MODULE_1__["Section"], { label: "\uB9C8\uC6B4\uD2B8 \uACBD\uB85C", id: "step-mountPath" }, !isVolumeExist() ? ('마운트할 볼륨을 먼저 추가해 주세요.') : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils_dropdown__WEBPACK_IMPORTED_MODULE_3__["Dropdown"], { name: "selectedVolume", className: "btn-group", title: "\uBCFC\uB968 \uC120\uD0DD" // 드롭다운 title 지정
                , methods: methods, items: volumeItems, style: { display: 'block' }, buttonClassName: "dropdown-btn col-md-12" // 선택된 아이템 보여주는 button (title) 부분 className
                , itemClassName: "dropdown-item" // 드롭다운 아이템 리스트 전체의 className - 각 row를 의미하는 것은 아님
             }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils_text_input__WEBPACK_IMPORTED_MODULE_4__["TextInput"], { id: "mountPath", inputClassName: "col-md-12", methods: methods, placeholder: "\uB9C8\uC6B4\uD2B8 \uACBD\uB85C\uB97C \uC785\uB825\uD574 \uC8FC\uC138\uC694.", defaultValue: modalType === 'modify' ? template.mountPath : '' }))))));
};


/***/ }),

/***/ "./public/components/hypercloud/form/tasks/task-parameter-modal.tsx":
/*!**************************************************************************!*\
  !*** ./public/components/hypercloud/form/tasks/task-parameter-modal.tsx ***!
  \**************************************************************************/
/*! exports provided: TaskParameterModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskParameterModal", function() { return TaskParameterModal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_section__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/section */ "./public/components/hypercloud/utils/section.tsx");
/* harmony import */ var _utils_dropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/dropdown */ "./public/components/hypercloud/utils/dropdown.jsx");
/* harmony import */ var _utils_text_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/text-input */ "./public/components/hypercloud/utils/text-input.tsx");




const TaskParameterModal = ({ methods, taskParameter }) => {
    const typeItems = {
        String: 'String',
        Array: 'Array',
    };
    let target = document.getElementById('task-parameter-list');
    let modalType = target && [...target.childNodes].some(cur => cur['dataset']['modify'] === 'true') ? 'modify' : 'add';
    let template;
    if (modalType === 'modify') {
        let list = target.childNodes;
        list.forEach((cur, idx) => {
            if (cur['dataset']['modify'] === 'true') {
                template = taskParameter[idx];
            }
        });
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils_section__WEBPACK_IMPORTED_MODULE_1__["Section"], { label: "Name", id: "taskparameter_name", isRequired: true },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils_text_input__WEBPACK_IMPORTED_MODULE_3__["TextInput"], { id: "name", inputClassName: "col-md-12", methods: methods, defaultValue: modalType === 'modify' ? template.name : '' })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils_section__WEBPACK_IMPORTED_MODULE_1__["Section"], { label: "Description", id: "taskparameter_desc" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils_text_input__WEBPACK_IMPORTED_MODULE_3__["TextInput"], { id: "description", inputClassName: "col-md-12", methods: methods, defaultValue: modalType === 'modify' ? template.description : '' })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils_section__WEBPACK_IMPORTED_MODULE_1__["Section"], { label: "Type", id: "taskparameter-type", isRequired: true },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils_dropdown__WEBPACK_IMPORTED_MODULE_2__["Dropdown"], { name: "type", className: "btn-group", title: "\uD0C0\uC785 \uC120\uD0DD" // 드롭다운 title 지정
                , methods: methods, items: typeItems, style: { display: 'block' }, buttonClassName: "dropdown-btn col-md-12" // 선택된 아이템 보여주는 button (title) 부분 className
                , itemClassName: "dropdown-item" // 드롭다운 아이템 리스트 전체의 className - 각 row를 의미하는 것은 아님
             })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils_section__WEBPACK_IMPORTED_MODULE_1__["Section"], { label: "\uAE30\uBCF8 \uAC12", id: "taskparameter_default", description: "\uD0DC\uC2A4\uD06C \uB7F0 \uB610\uB294 \uD30C\uC774\uD504\uB77C\uC778 \uC0DD\uC131 \uC2DC \uD30C\uB77C\uBBF8\uD130\uB97C \uC785\uB825\uD558\uC9C0 \uC54A\uC744 \uACBD\uC6B0 \uAE30\uBCF8 \uAC12\uC73C\uB85C \uC124\uC815\uB429\uB2C8\uB2E4." },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils_text_input__WEBPACK_IMPORTED_MODULE_3__["TextInput"], { id: "default", inputClassName: "col-md-12", methods: methods, defaultValue: modalType === 'modify' ? template.default : '' }))));
};


/***/ }),

/***/ "./public/components/hypercloud/form/tasks/volume-modal.tsx":
/*!******************************************************************!*\
  !*** ./public/components/hypercloud/form/tasks/volume-modal.tsx ***!
  \******************************************************************/
/*! exports provided: VolumeModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VolumeModal", function() { return VolumeModal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_section__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/section */ "./public/components/hypercloud/utils/section.tsx");
/* harmony import */ var _utils_dropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/dropdown */ "./public/components/hypercloud/utils/dropdown.jsx");
/* harmony import */ var _utils_text_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/text-input */ "./public/components/hypercloud/utils/text-input.tsx");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");





const VolumeModal = ({ methods, volume }) => {
    const typeItems = {
        emptyDir: '빈 디렉토리',
        configMap: '컨피그 맵',
        secret: '시크릿',
    };
    let target = document.getElementById('volume-list');
    let modalType = target && [...target.childNodes].some(cur => cur['dataset']['modify'] === 'true') ? 'modify' : 'add';
    let template;
    if (modalType === 'modify') {
        let list = target.childNodes;
        list.forEach((cur, idx) => {
            if (cur['dataset']['modify'] === 'true') {
                template = volume[idx];
            }
        });
    }
    const type = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_4__["useWatch"])({
        control: methods.control,
        name: 'type',
        defaultValue: template ? template.type : 'emptyDir',
    });
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils_section__WEBPACK_IMPORTED_MODULE_1__["Section"], { label: "Name", id: "volume-name", isRequired: true },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils_text_input__WEBPACK_IMPORTED_MODULE_3__["TextInput"], { id: "name", inputClassName: "col-md-12", methods: methods, defaultValue: modalType === 'modify' ? template.name : '' })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils_section__WEBPACK_IMPORTED_MODULE_1__["Section"], { label: "Type", id: "volume-type", isRequired: true },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils_dropdown__WEBPACK_IMPORTED_MODULE_2__["Dropdown"], { name: "type", className: "btn-group", title: "\uBE48 \uB514\uB809\uD1A0\uB9AC" // 드롭다운 title 지정
                , methods: methods, items: typeItems, style: { display: 'block' }, buttonClassName: "dropdown-btn col-md-12" // 선택된 아이템 보여주는 button (title) 부분 className
                , itemClassName: "dropdown-item" // 드롭다운 아이템 리스트 전체의 className - 각 row를 의미하는 것은 아님
             })),
        type === 'configMap' && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils_section__WEBPACK_IMPORTED_MODULE_1__["Section"], { label: "\uCEE8\uD53C\uADF8 \uB9F5", id: "volume-config-map", isRequired: true },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils_text_input__WEBPACK_IMPORTED_MODULE_3__["TextInput"], { id: "config_map", inputClassName: "col-md-12", methods: methods, defaultValue: modalType === 'modify' ? template.configMap : '' }))),
        type === 'secret' && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils_section__WEBPACK_IMPORTED_MODULE_1__["Section"], { label: "\uC2DC\uD06C\uB9BF", id: "volume-secret", isRequired: true },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils_text_input__WEBPACK_IMPORTED_MODULE_3__["TextInput"], { id: "secret", inputClassName: "col-md-12", methods: methods, defaultValue: modalType === 'modify' ? template.secret : '' })))));
};


/***/ }),

/***/ "./public/components/hypercloud/form/tasks/work-space-modal.tsx":
/*!**********************************************************************!*\
  !*** ./public/components/hypercloud/form/tasks/work-space-modal.tsx ***!
  \**********************************************************************/
/*! exports provided: WorkSpaceModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkSpaceModal", function() { return WorkSpaceModal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_section__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/section */ "./public/components/hypercloud/utils/section.tsx");
/* harmony import */ var _utils_radio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/radio */ "./public/components/hypercloud/utils/radio.tsx");
/* harmony import */ var _utils_text_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/text-input */ "./public/components/hypercloud/utils/text-input.tsx");




const WorkSpaceModal = ({ methods, workSpace }) => {
    const accessModeItem = [
        // RadioGroup 컴포넌트에 넣어줄 items
        {
            title: 'ReadWrite',
            value: 'readWrite',
        },
        {
            title: 'ReadOnly',
            value: 'readOnly',
        },
    ];
    let template;
    //modify 기능 용
    let target = document.getElementById('work-space-list');
    let modalType = target && [...target.childNodes].some(cur => cur['dataset']['modify'] === 'true') ? 'modify' : 'add';
    if (modalType === 'modify') {
        let list = target.childNodes;
        list.forEach((cur, idx) => {
            if (cur['dataset']['modify'] === 'true') {
                template = workSpace[idx];
                // index = idx;
            }
        });
    }
    const [option, setOption] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](template === null || template === void 0 ? void 0 : template.option);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils_section__WEBPACK_IMPORTED_MODULE_1__["Section"], { label: "Name", id: "workspace_name", isRequired: true },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils_text_input__WEBPACK_IMPORTED_MODULE_3__["TextInput"], { id: "name", inputClassName: "col-md-12", methods: methods, defaultValue: modalType === 'modify' ? template.name : '' })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils_section__WEBPACK_IMPORTED_MODULE_1__["Section"], { label: "Description", id: "workspace_desc" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils_text_input__WEBPACK_IMPORTED_MODULE_3__["TextInput"], { id: "description", inputClassName: "col-md-12", methods: methods, defaultValue: modalType === 'modify' ? template.description : '' })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils_section__WEBPACK_IMPORTED_MODULE_1__["Section"], { label: "\uB9C8\uC6B4\uD2B8 \uACBD\uB85C", id: "workspace_path" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils_text_input__WEBPACK_IMPORTED_MODULE_3__["TextInput"], { id: "path", inputClassName: "col-md-12", methods: methods, defaultValue: modalType === 'modify' ? template.path : '' })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils_section__WEBPACK_IMPORTED_MODULE_1__["Section"], { label: "\uC811\uADFC \uBAA8\uB4DC", id: "workspace_access" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils_radio__WEBPACK_IMPORTED_MODULE_2__["RadioGroup"], { methods: methods, name: "accessMode" // 서버에 보낼 데이터에서의 path (필수)
                , items: accessModeItem, inline: true })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { name: "option", type: "checkbox", ref: methods.register(), checked: option, onClick: () => {
                    setOption(!option);
                } }),
            "\uC774 \uC6CC\uD06C\uC2A4\uD398\uC774\uC2A4\uB97C \uC120\uD0DD \uD56D\uBAA9\uC73C\uB85C \uC81C\uACF5\uD569\uB2C8\uB2E4."),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null, "\uC120\uD0DD \uD56D\uBAA9\uC73C\uB85C \uC81C\uACF5\uD560 \uACBD\uC6B0, \uD0DC\uC2A4\uD06C \uB7F0 \uB610\uB294 \uD30C\uC774\uD504\uB77C\uC778 \uBA54\uB274\uC5D0\uC11C \uD30C\uC774\uD504\uB77C\uC778 \uC6CC\uD06C\uC2A4\uD398\uC774\uC2A4\uB97C \uD544\uC694\uC5D0 \uB530\uB77C \uD560\uB2F9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.")));
};


/***/ }),

/***/ "./public/components/hypercloud/form/utils/index.tsx":
/*!***********************************************************!*\
  !*** ./public/components/hypercloud/form/utils/index.tsx ***!
  \***********************************************************/
/*! exports provided: _ModalLauncher, ModalLauncher, ModalList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modal_launcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal-launcher */ "./public/components/hypercloud/form/utils/modal-launcher.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_ModalLauncher", function() { return _modal_launcher__WEBPACK_IMPORTED_MODULE_0__["_ModalLauncher"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModalLauncher", function() { return _modal_launcher__WEBPACK_IMPORTED_MODULE_0__["ModalLauncher"]; });

/* harmony import */ var _modal_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal-list */ "./public/components/hypercloud/form/utils/modal-list.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModalList", function() { return _modal_list__WEBPACK_IMPORTED_MODULE_1__["ModalList"]; });





/***/ }),

/***/ "./public/components/hypercloud/form/utils/modal-launcher.tsx":
/*!********************************************************************!*\
  !*** ./public/components/hypercloud/form/utils/modal-launcher.tsx ***!
  \********************************************************************/
/*! exports provided: _ModalLauncher, ModalLauncher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_ModalLauncher", function() { return _ModalLauncher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalLauncher", function() { return ModalLauncher; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_internal_components_factory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/internal/components/factory */ "./public/components/factory/index.tsx");


// import { useFormContext } from 'react-hook-form';
const _ModalLauncher = props => {
    const { inProgress, errorMessage, title, children, cancel, handleMethod, index, submitText, id } = props;
    const onCancel = () => {
        // 수정일 경우에만 타는 로직
        let isModify = document.getElementById(`${id}-list`) ? true : false;
        if (isModify) {
            let list = document.getElementById(`${id}-list`).childNodes;
            list.forEach(cur => {
                if (cur['dataset']['modify'] === 'true') {
                    cur['dataset']['modify'] = false;
                }
            });
        }
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("form", { onSubmit: handleMethod.bind(null, cancel, index) },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_1__["ModalTitle"], null, title),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_1__["ModalBody"], null, children),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_1__["ModalSubmitFooter"], { errorMessage: errorMessage, id: "uId", inProgress: inProgress, onCancel: onCancel, submitText: submitText, cancel: cancel })));
};
const ModalLauncher = Object(_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_1__["createModalLauncher"])(_ModalLauncher);


/***/ }),

/***/ "./public/components/hypercloud/form/utils/modal-list.tsx":
/*!****************************************************************!*\
  !*** ./public/components/hypercloud/form/utils/modal-list.tsx ***!
  \****************************************************************/
/*! exports provided: ModalList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalList", function() { return ModalList; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ */ "./public/components/hypercloud/form/utils/index.tsx");


const ModalList = props => {
    const { onModify, onRemove, list, description, title, children, id } = props;
    let uId = id + '-list';
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, list.length ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", { id: uId }, list.map((item, index) => {
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", { style: { listStyle: 'none' }, key: index, "data-modify": false },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { className: "col-xs-4 text-secondary", value: `${item.name}`, disabled: true }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { type: "button", id: `item-modify-${index}`, onClick: e => {
                    e.target['parentNode']['dataset'].modify = true;
                    return Object(___WEBPACK_IMPORTED_MODULE_1__["ModalLauncher"])({ inProgress: false, index: index, title: title, id: id, handleMethod: onModify, children: children, submitText: '수정' });
                } }, "Modify"),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { type: "button", id: `item-remove-${index}`, onClick: onRemove }, "Delete")));
    }))) : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", { className: "help-block" }, description))));
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


/***/ }),

/***/ "./public/components/hypercloud/utils/text-input.tsx":
/*!***********************************************************!*\
  !*** ./public/components/hypercloud/utils/text-input.tsx ***!
  \***********************************************************/
/*! exports provided: TextInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextInput", function() { return TextInput; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");


const TextInput = ({ id, methods, inputClassName, defaultValue, placeholder }) => {
    const { register } = methods ? methods : Object(react_hook_form__WEBPACK_IMPORTED_MODULE_1__["useFormContext"])();
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { className: inputClassName, placeholder: placeholder, defaultValue: defaultValue, name: id, ref: register });
};


/***/ })

}]);
//# sourceMappingURL=create-secret6-ffac639d2942d29582e3.js.map