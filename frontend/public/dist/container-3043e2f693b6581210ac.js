(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["container"],{

/***/ "./public/components/container.tsx":
/*!*****************************************!*\
  !*** ./public/components/container.tsx ***!
  \*****************************************/
/*! exports provided: ContainersDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContainersDetailsPage", function() { return ContainersDetailsPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _module_k8s_probe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../module/k8s/probe */ "./public/module/k8s/probe.ts");
/* harmony import */ var _module_k8s_container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../module/k8s/container */ "./public/module/k8s/container.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _utils_resource_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/resource-link */ "./public/components/utils/resource-link.tsx");







const formatComputeResources = (resources) => lodash_es__WEBPACK_IMPORTED_MODULE_1__["map"](resources, (v, k) => `${k}: ${v}`).join(', ');
const getResourceRequestsValue = (container) => {
    const requests = lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](container, 'resources.requests');
    return formatComputeResources(requests);
};
const getResourceLimitsValue = (container) => {
    const limits = lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](container, 'resources.limits');
    return formatComputeResources(limits);
};
const Lifecycle = ({ lifecycle }) => {
    const fields = lifecycle && _module_k8s_probe__WEBPACK_IMPORTED_MODULE_3__["mapLifecycleConfigToFields"](lifecycle);
    const postStart = lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](fields, 'postStart.cmd');
    const preStop = lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](fields, 'preStop.cmd');
    const label = (stage) => lifecycle && _module_k8s_probe__WEBPACK_IMPORTED_MODULE_3__["getLifecycleHookLabel"](lifecycle, stage);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null,
        postStart && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", null,
                "PostStart: ",
                label('postStart')),
            " ",
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("code", null, postStart))),
        preStop && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", null,
                "PreStop: ",
                label('preStop')),
            " ",
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("code", null, preStop))),
        !postStart && !preStop && '-'));
};
Lifecycle.displayName = 'Lifecycle';
const Probe = ({ probe, podIP }) => {
    const label = probe && _module_k8s_probe__WEBPACK_IMPORTED_MODULE_3__["getActionLabelFromObject"](probe);
    const value = probe && lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](_module_k8s_probe__WEBPACK_IMPORTED_MODULE_3__["mapProbeToFields"](probe, podIP), 'cmd');
    if (!value) {
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, "-");
    }
    const isMultiline = value.indexOf('\n') !== -1;
    const formattedValue = isMultiline ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("pre", null, value) : react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("code", null, value);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        label,
        " ",
        formattedValue));
};
Probe.displayName = 'Probe';
const Ports = ({ ports }) => {
    if (!ports || !ports.length) {
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_5__["MsgBox"], { className: "co-sysevent-stream__status-box-empty", title: "No ports have been exposed", detail: "Ports allow for traffic to enter this container" }));
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("table", { className: "table" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("thead", null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("tr", null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("th", null, "Name"),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("th", null, "Container"))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("tbody", null, ports.map((p, i) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("tr", { key: i },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("td", null, p.name || '-'),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("td", null, p.containerPort)))))));
};
const VolumeMounts = ({ volumeMounts }) => {
    if (!volumeMounts || !volumeMounts.length) {
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_5__["MsgBox"], { className: "co-sysevent-stream__status-box-empty", title: "No volumes have been mounted", detail: "Volumes allow data to be shared as files with the pod" }));
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("table", { className: "table table--layout-fixed" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("thead", null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("tr", null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("th", null, "Access"),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("th", null, "Location"),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("th", null, "Mount Path"))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("tbody", null, volumeMounts.map((v) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("tr", { key: v.name },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("td", null, v.readOnly === true ? 'Read Only' : 'Read / Write'),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("td", { className: "co-break-all co-select-to-copy" }, v.name),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("td", null, v.mountPath ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-break-all co-select-to-copy" }, v.mountPath)) : ('-'))))))));
};
VolumeMounts.displayName = 'VolumeMounts';
const Env = ({ env }) => {
    if (!env || !env.length) {
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_5__["MsgBox"], { className: "co-sysevent-stream__status-box-empty", title: "No variables have been set", detail: "An easy way to pass configuration values" }));
    }
    const value = (e) => {
        const v = e.valueFrom;
        if (lodash_es__WEBPACK_IMPORTED_MODULE_1__["has"](v, 'fieldRef')) {
            return `field: ${v.fieldRef.fieldPath}`;
        }
        else if (lodash_es__WEBPACK_IMPORTED_MODULE_1__["has"](v, 'resourceFieldRef')) {
            return `resource: ${v.resourceFieldRef.resource}`;
        }
        else if (lodash_es__WEBPACK_IMPORTED_MODULE_1__["has"](v, 'configMapKeyRef')) {
            return `config-map: ${v.configMapKeyRef.name}/${v.configMapKeyRef.key}`;
        }
        else if (lodash_es__WEBPACK_IMPORTED_MODULE_1__["has"](v, 'secretKeyRef')) {
            return `secret: ${v.secretKeyRef.name}/${v.secretKeyRef.key}`;
        }
        return e.value;
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("table", { className: "table" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("thead", null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("tr", null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("th", null, "Name"),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("th", null, "Value"))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("tbody", null, env.map((e, i) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("tr", { key: i },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("td", null, e.name),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("td", null, value(e))))))));
};
Env.displayName = 'Env';
// Split image string into the image name and tag.
const getImageNameAndTag = (image) => {
    if (!image) {
        return { imageName: null, imageTag: null };
    }
    const index = image.lastIndexOf(':');
    if (index === -1 || lodash_es__WEBPACK_IMPORTED_MODULE_1__["includes"](image, '@sha256:')) {
        return { imageName: image, imageTag: null };
    }
    const imageName = image.substr(0, index);
    const imageTag = image.substr(index + 1);
    return { imageName, imageTag };
};
const ContainerDetails = (props) => {
    const pod = props.obj;
    const container = lodash_es__WEBPACK_IMPORTED_MODULE_1__["find"](pod.spec.containers, { name: props.match.params.name }) ||
        lodash_es__WEBPACK_IMPORTED_MODULE_1__["find"](pod.spec.initContainers, { name: props.match.params.name });
    if (!container) {
        return null;
    }
    const status = Object(_module_k8s_container__WEBPACK_IMPORTED_MODULE_4__["getContainerStatus"])(pod, container.name) || {};
    const state = Object(_module_k8s_container__WEBPACK_IMPORTED_MODULE_4__["getContainerState"])(status);
    const stateValue = state.value === 'terminated' && lodash_es__WEBPACK_IMPORTED_MODULE_1__["isFinite"](state.exitCode)
        ? `${state.label} with exit code ${state.exitCode}`
        : state.label;
    const { imageName, imageTag } = getImageNameAndTag(container.image);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_5__["ScrollToTopOnMount"], null),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "row" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-lg-4" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_5__["SectionHeading"], { text: "Container Details" }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dl", { className: "co-m-pane__details" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, "State"),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null,
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_2__["Status"], { status: stateValue })),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, "ID"),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null, status.containerID ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-break-all co-select-to-copy" }, status.containerID)) : ('-')),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, "Restarts"),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null, status.restartCount),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, "Resource Requests"),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null, getResourceRequestsValue(container) || '-'),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, "Resource Limits"),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null, getResourceLimitsValue(container) || '-'),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, "Lifecycle Hooks"),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null,
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Lifecycle, { lifecycle: container.lifecycle })),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, "Readiness Probe"),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null,
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Probe, { probe: container.readinessProbe, podIP: pod.status.podIP || '-' })),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, "Liveness Probe"),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null,
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Probe, { probe: container.livenessProbe, podIP: pod.status.podIP || '-' })),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, "Started"),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null,
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_5__["Timestamp"], { timestamp: state.startedAt })),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, "Finished"),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null,
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_5__["Timestamp"], { timestamp: state.finishedAt })),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, "Pod"),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null,
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_5__["ResourceLink"], { kind: "Pod", name: props.match.params.podName, namespace: props.match.params.ns })))),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-lg-4" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_5__["SectionHeading"], { text: "Image Details" }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dl", { className: "co-m-pane__details" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, "Image"),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null, imageName ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-break-all co-select-to-copy" }, imageName) : '-'),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, "Image Version/Tag"),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null, imageTag || '-'),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, "Command"),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null, container.command ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("pre", null,
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("code", null, container.command.join(' ')))) : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", null, "-"))),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, "Args"),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null, container.args ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("pre", null,
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("code", null, container.args.join(' ')))) : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", null, "-"))),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, "Pull Policy"),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null, Object(_module_k8s_container__WEBPACK_IMPORTED_MODULE_4__["getPullPolicyLabel"])(container)))),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-lg-4" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_5__["SectionHeading"], { text: "Network" }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dl", { className: "co-m-pane__details" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, "Node"),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null,
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_5__["NodeLink"], { name: pod.spec.nodeName })),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, "Pod IP"),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null, pod.status.podIP || '-')))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("hr", null),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "row" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-lg-4" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_5__["SectionHeading"], { text: "Ports" }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-table-container" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Ports, { ports: container.ports }))),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-lg-4" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_5__["SectionHeading"], { text: "Mounted Volumes" }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-table-container" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](VolumeMounts, { volumeMounts: container.volumeMounts }))),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-lg-4" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_5__["SectionHeading"], { text: "Environment Variables" }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-table-container" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Env, { env: container.env }))))));
};
ContainerDetails.displayName = 'ContainerDetails';
const ContainersDetailsPage = (props) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null,
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_5__["Firehose"], { resources: [
            {
                name: props.match.params.podName,
                namespace: props.match.params.ns,
                kind: 'Pod',
                isList: false,
                prop: 'obj',
            },
        ] },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_5__["PageHeading"], { detail: true, title: props.match.params.name, kind: "Container", breadcrumbsFor: () => [
                { name: 'Pods', path: `/k8s/ns/${props.match.params.ns}/pods` },
                {
                    name: props.match.params.podName,
                    path: Object(_utils_resource_link__WEBPACK_IMPORTED_MODULE_6__["resourcePath"])('Pod', props.match.params.podName, props.match.params.ns),
                },
                { name: 'Container Details', path: props.match.url },
            ] }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_5__["HorizontalNav"], { hideNav: true, pages: [{ name: 'container', href: '', component: ContainerDetails }], match: props.match }))));
ContainersDetailsPage.displayName = 'ContainersDetailsPage';


/***/ }),

/***/ "./public/module/k8s/probe.ts":
/*!************************************!*\
  !*** ./public/module/k8s/probe.ts ***!
  \************************************/
/*! exports provided: flattenCmd, parseCmd, getActionLabelFromObject, getLifecycleHookLabel, mapLifecycleConfigToFields, mapProbeToFields */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flattenCmd", function() { return flattenCmd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseCmd", function() { return parseCmd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getActionLabelFromObject", function() { return getActionLabelFromObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLifecycleHookLabel", function() { return getLifecycleHookLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapLifecycleConfigToFields", function() { return mapLifecycleConfigToFields; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapProbeToFields", function() { return mapProbeToFields; });
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/lodash.js");

const HookAction = Object.freeze({
    exec: {
        id: 'exec',
        label: 'Exec Command',
    },
    httpGet: {
        id: 'httpGet',
        label: 'HTTP Get',
    },
    tcpSocket: {
        id: 'tcpSocket',
        label: 'TCP Socket (Port)',
    },
});
const parsers = {
    exec: function (str) {
        return {
            command: str.split(' '),
        };
    },
    httpGet: function (str) {
        if (!str) {
            return null;
        }
        // XXX: Kubernetes allows for named ports, but the URL spec says ports must be digits.
        let scheme, port, host, hostname, rest;
        [scheme, ...rest] = str.split('://');
        if (!scheme) {
            return null;
        }
        str = rest.join();
        [host, ...rest] = str.split('/');
        const path = `/${rest.join()}`;
        [hostname, port] = host.split(':');
        if (lodash_es__WEBPACK_IMPORTED_MODULE_0__["isUndefined"](port)) {
            if (scheme === 'http') {
                port = '80';
            }
            else if (scheme === 'https') {
                port = '443';
            }
        }
        if (lodash_es__WEBPACK_IMPORTED_MODULE_0__["isUndefined"](port)) {
            return null;
        }
        return {
            host: [scheme, '://', hostname].join(''),
            path,
            port: parseInt(port, 10) || port,
        };
    },
    tcpSocket: function (str) {
        if (str == null || str === '') {
            return null;
        }
        return {
            // as per http://kubernetes.io/docs/api-reference/v1/definitions/#_v1_tcpsocketaction
            // port can be either number or IANA name
            port: /^\d+$/.test(str) ? +str : str,
        };
    },
};
const flatteners = {
    exec: function (cmd) {
        if (lodash_es__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](cmd) || lodash_es__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](cmd.command)) {
            return '';
        }
        return cmd.command.join(' ');
    },
    httpGet: function (cmd, podIP) {
        let c = '';
        if (lodash_es__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](cmd)) {
            return c;
        }
        c += cmd.host || podIP;
        if (cmd.port) {
            c += `:${cmd.port}`;
        }
        if (cmd.path) {
            if (cmd.path.startsWith('/')) {
                c += cmd.path;
            }
            else {
                c += `/${cmd.path}`;
            }
        }
        return c;
    },
    tcpSocket: function (cmd) {
        if (!cmd || !cmd.port) {
            return '';
        }
        return `${cmd.port}`;
    },
};
function inferAction(obj) {
    if (lodash_es__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](obj)) {
        return;
    }
    const keys = lodash_es__WEBPACK_IMPORTED_MODULE_0__["keys"](obj);
    if (lodash_es__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](keys)) {
        return;
    }
    return HookAction[keys[0]];
}
function flattenCmd(type, cmd, podIP) {
    return flatteners[type](cmd, podIP);
}
function parseCmd(type, cmd) {
    return parsers[type](cmd);
}
function getActionLabel(action) {
    if (action) {
        return action.label;
    }
    return '';
}
function getActionLabelFromObject(obj) {
    const a = inferAction(obj);
    return getActionLabel(a);
}
const getLifecycleHookLabel = function (lifecycle, stage) {
    if (!lifecycle || !stage || !lifecycle[stage]) {
        return '';
    }
    return getActionLabelFromObject(lifecycle[stage]);
};
// Maps an api config object to a simple flattened type and command field.
const mapLifecycleConfigToFields = function (lifecycle) {
    const f = {
        postStart: {
            type: 'exec',
            cmd: '',
        },
        preStop: {
            type: 'exec',
            cmd: '',
        },
    };
    if (!lifecycle) {
        return f;
    }
    if (!lodash_es__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](lifecycle.postStart)) {
        const k = lodash_es__WEBPACK_IMPORTED_MODULE_0__["keys"](lifecycle.postStart);
        f.postStart.type = k[0];
        f.postStart.cmd = flattenCmd(k[0], lifecycle.postStart[k[0]]);
    }
    if (!lodash_es__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](lifecycle.preStop)) {
        const k = lodash_es__WEBPACK_IMPORTED_MODULE_0__["keys"](lifecycle.preStop);
        f.preStop.type = k[0];
        f.preStop.cmd = flattenCmd(k[0], lifecycle.preStop[k[0]]);
    }
    return f;
};
const mapProbeToFields = function (probe, podIP) {
    const f = {
        type: 'exec',
        cmd: '',
    };
    if (lodash_es__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](probe)) {
        return f;
    }
    const k = lodash_es__WEBPACK_IMPORTED_MODULE_0__["keys"](probe);
    if (!lodash_es__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](k)) {
        f.type = k[0];
        f.cmd = flattenCmd(k[0], probe[k[0]], podIP);
    }
    return f;
};


/***/ })

}]);
//# sourceMappingURL=container-3043e2f693b6581210ac.js.map