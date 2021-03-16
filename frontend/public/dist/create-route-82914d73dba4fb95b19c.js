(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["create-route"],{

/***/ "./public/components/routes/create-route.tsx":
/*!***************************************************!*\
  !*** ./public/components/routes/create-route.tsx ***!
  \***************************************************/
/*! exports provided: CreateRoute, AlternateServicesGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateRoute", function() { return CreateRoute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlternateServicesGroup", function() { return AlternateServicesGroup; });
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-icons */ "./node_modules/@patternfly/react-icons/dist/esm/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _module_k8s__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _actions_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../actions/ui */ "./public/actions/ui.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../models */ "./public/models/index.ts");
/* harmony import */ var _utils_async__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/async */ "./public/components/utils/async.tsx");










const UNNAMED_PORT_KEY = '#unnamed';
const MAX_ALT_SERVICE_TARGET = 3;
const getPortOptions = (service) => {
    if (!service) {
        return {};
    }
    const ports = lodash_es__WEBPACK_IMPORTED_MODULE_0__["get"](service, 'spec.ports', []);
    const portOptions = ports.reduce((acc, { name = UNNAMED_PORT_KEY, port, targetPort, protocol }) => {
        acc[name] = (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
            port,
            " \u2192 ",
            targetPort,
            " (",
            protocol,
            ")"));
        return acc;
    }, {});
    return portOptions;
};
const DroppableFileInput = (props) => (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils_async__WEBPACK_IMPORTED_MODULE_9__["AsyncComponent"], Object.assign({ loader: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ../utils/file-input */ "./public/components/utils/file-input.tsx")).then((c) => c.DroppableFileInput) }, props)));
class CreateRoute extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
    constructor() {
        super(...arguments);
        this.state = {
            name: '',
            hostname: '',
            path: '',
            service: null,
            weight: 100,
            targetPort: '',
            termination: '',
            insecureEdgeTerminationPolicy: '',
            certificate: '',
            key: '',
            caCertificate: '',
            destinationCACertificate: '',
            secure: false,
            loaded: false,
            inProgress: false,
            error: '',
            namespace: Object(_actions_ui__WEBPACK_IMPORTED_MODULE_7__["getActiveNamespace"])(),
            services: [],
            labels: {},
            portOptions: {},
            alternateServices: [],
        };
        this.handleChange = (event) => {
            const { name, value } = event.currentTarget;
            this.setState({
                [name]: value,
            });
        };
        this.handleWeightChange = (event) => {
            const { value } = event.currentTarget;
            this.setState({
                weight: lodash_es__WEBPACK_IMPORTED_MODULE_0__["toInteger"](value),
            });
        };
        this.changeService = (serviceName) => {
            const service = lodash_es__WEBPACK_IMPORTED_MODULE_0__["find"](this.state.services, { metadata: { name: serviceName } });
            const portOptions = getPortOptions(service);
            this.setState({
                service,
                portOptions,
                // unset targetPort if previously set
                targetPort: '',
            });
        };
        this.changeTargetPort = (targetPort) => this.setState({
            targetPort,
        });
        this.toggleSection = (event) => {
            const { name, checked } = event.currentTarget;
            this.setState({
                [name]: checked,
            });
        };
        this.changeTermination = (termination) => {
            const newState = {
                termination,
                // unset insecureEdgeTerminationPolicy if it was set
                insecureEdgeTerminationPolicy: '',
            };
            switch (termination) {
                case 'edge':
                    // unset tls data if it was set
                    newState.destinationCACertificate = '';
                    break;
                case 'passthrough':
                    Object.assign(newState, {
                        // unset tls data if it was set
                        certificate: '',
                        key: '',
                        caCertificate: '',
                        destinationCACertificate: '',
                    });
                    break;
                default:
            }
            this.setState(newState);
        };
        this.changeInsecureTraffic = (insecureEdgeTerminationPolicy) => this.setState({ insecureEdgeTerminationPolicy });
        this.onCertificateChange = (certificate) => this.setState({ certificate });
        this.onPrivateKeyChange = (key) => this.setState({ key });
        this.onCaCertificateChange = (caCertificate) => this.setState({ caCertificate });
        this.onDestinationCACertificateChange = (destinationCACertificate) => this.setState({ destinationCACertificate });
        this.save = (event) => {
            event.preventDefault();
            const { name, hostname, path, service, weight, targetPort: selectedPort, termination, insecureEdgeTerminationPolicy, certificate, key, caCertificate, destinationCACertificate, secure, namespace, alternateServices, } = this.state;
            const tls = secure
                ? {
                    termination,
                    insecureEdgeTerminationPolicy,
                    certificate,
                    key,
                    caCertificate,
                    destinationCACertificate,
                }
                : null;
            const serviceName = lodash_es__WEBPACK_IMPORTED_MODULE_0__["get"](service, 'metadata.name');
            const labels = lodash_es__WEBPACK_IMPORTED_MODULE_0__["get"](service, 'metadata.labels');
            // If the port is unnamed, there is only one port. Use the port number.
            const targetPort = selectedPort === UNNAMED_PORT_KEY
                ? lodash_es__WEBPACK_IMPORTED_MODULE_0__["get"](service, 'spec.ports[0].targetPort') || lodash_es__WEBPACK_IMPORTED_MODULE_0__["get"](service, 'spec.ports[0].port')
                : selectedPort;
            const alternateBackends = lodash_es__WEBPACK_IMPORTED_MODULE_0__["filter"](alternateServices, 'name').map((serviceData) => {
                return {
                    weight: serviceData.weight,
                    kind: 'Service',
                    name: serviceData.name,
                };
            });
            const route = {
                kind: 'Route',
                apiVersion: 'route.openshift.io/v1',
                metadata: {
                    name,
                    namespace,
                    labels,
                },
                spec: {
                    to: {
                        kind: 'Service',
                        name: serviceName,
                        weight,
                    },
                    tls,
                    host: hostname,
                    path,
                    port: {
                        targetPort,
                    },
                },
            };
            if (!lodash_es__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](alternateBackends)) {
                route.spec.alternateBackends = alternateBackends;
            }
            this.setState({ inProgress: true });
            Object(_module_k8s__WEBPACK_IMPORTED_MODULE_6__["k8sCreate"])(_models__WEBPACK_IMPORTED_MODULE_8__["RouteModel"], route).then(() => {
                this.setState({ inProgress: false });
                _utils__WEBPACK_IMPORTED_MODULE_5__["history"].push(Object(_utils__WEBPACK_IMPORTED_MODULE_5__["resourcePathFromModel"])(_models__WEBPACK_IMPORTED_MODULE_8__["RouteModel"], name, namespace));
            }, (err) => this.setState({
                error: err.message,
                inProgress: false,
            }));
        };
        this.addAltServiceEntry = () => {
            this.setState(({ alternateServices }) => {
                return {
                    alternateServices: [
                        ...alternateServices,
                        { name: null, weight: 100, key: lodash_es__WEBPACK_IMPORTED_MODULE_0__["uniqueId"]('alternate-backend-') },
                    ],
                };
            });
        };
        this.onDataChanged = (updatedEntry, index) => {
            this.setState(({ alternateServices }) => {
                const updatedServiceEntriesArray = [...alternateServices];
                const updatedEntryData = {
                    key: updatedServiceEntriesArray[index].key,
                    weight: updatedEntry.weight,
                    name: updatedEntry.name,
                };
                updatedServiceEntriesArray[index] = updatedEntryData;
                return {
                    alternateServices: updatedServiceEntriesArray,
                };
            });
        };
    }
    componentDidMount() {
        Object(_module_k8s__WEBPACK_IMPORTED_MODULE_6__["k8sList"])(_models__WEBPACK_IMPORTED_MODULE_8__["ServiceModel"], { ns: this.state.namespace })
            .then((services) => this.setState({
            services,
            loaded: true,
        }))
            .catch((err) => this.setState({
            error: err.message,
        }));
    }
    removeAltServiceEntry(alternateServiceIndex) {
        this.setState(({ alternateServices }) => {
            const updatedServiceEntriesArray = [...alternateServices];
            updatedServiceEntriesArray.splice(alternateServiceIndex, 1);
            return {
                alternateServices: updatedServiceEntriesArray,
            };
        });
    }
    render() {
        const title = 'Create Route';
        const { loaded, services, service, portOptions, targetPort, termination, alternateServices, } = this.state;
        const serviceOptions = {};
        lodash_es__WEBPACK_IMPORTED_MODULE_0__["each"](lodash_es__WEBPACK_IMPORTED_MODULE_0__["sortBy"](services, 'metadata.name'), ({ metadata: { name } }) => (serviceOptions[name] = react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_5__["ResourceName"], { kind: "Service", name: name })));
        const configuredServices = new Set();
        if (service) {
            configuredServices.add(service.metadata.name);
        }
        lodash_es__WEBPACK_IMPORTED_MODULE_0__["each"](alternateServices, ({ name }) => configuredServices.add(name));
        const availableServiceOptions = lodash_es__WEBPACK_IMPORTED_MODULE_0__["pickBy"](serviceOptions, (item, key) => !configuredServices.has(key));
        const terminationTypes = {
            edge: 'Edge',
            passthrough: 'Passthrough',
            reencrypt: 'Re-encrypt',
        };
        const insecureTrafficTypes = {
            None: 'None',
            Allow: 'Allow',
            Redirect: 'Redirect',
        };
        const passthroughInsecureTrafficTypes = {
            None: 'None',
            Redirect: 'Redirect',
        };
        const alternateServicesList = lodash_es__WEBPACK_IMPORTED_MODULE_0__["map"](alternateServices, (entryData, index) => {
            return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "co-add-remove-form__entry", key: entryData.key },
                !lodash_es__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](alternateServices) && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "co-add-remove-form__link--remove-entry" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Button"], { type: "button", onClick: () => this.removeAltServiceEntry(index), variant: "link", isInline: true },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_4__["MinusCircleIcon"], { className: "co-icon-space-r" }),
                        "Remove Alternate Service"))),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](AlternateServicesGroup, { index: index, name: entryData.name, weight: entryData.weight, onChange: this.onDataChanged, serviceOptions: serviceOptions, availableServiceOptions: availableServiceOptions })));
        });
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "co-m-pane__body co-m-pane__form" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h1", { className: "co-m-pane__heading co-m-pane__heading--baseline" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "co-m-pane__name" }, title),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "co-m-pane__heading-link" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], { to: `/k8s/ns/${this.state.namespace}/routes/~new`, id: "yaml-link", replace: true }, "Edit YAML"))),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", { className: "co-m-pane__explanation" }, "Routing is a way to make your application publicly visible."),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("form", { onSubmit: this.save, className: "co-create-route" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "form-group co-create-route__name" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("label", { className: "co-required", htmlFor: "name" }, "Name"),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", { className: "pf-c-form-control", type: "text", onChange: this.handleChange, value: this.state.name, placeholder: "my-route", id: "name", name: "name", "aria-describedby": "name-help", required: true }),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "help-block", id: "name-help" },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null, "A unique name for the route within the project."))),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "form-group co-create-route__hostname" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("label", { htmlFor: "hostname" }, "Hostname"),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", { className: "pf-c-form-control", type: "text", onChange: this.handleChange, value: this.state.hostname, placeholder: "www.example.com", id: "hostname", name: "hostname", "aria-describedby": "hostname-help" }),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "help-block", id: "hostname-help" },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null, "Public hostname for the route. If not specified, a hostname is generated."))),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "form-group co-create-route__path" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("label", { htmlFor: "path" }, "Path"),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", { className: "pf-c-form-control", type: "text", onChange: this.handleChange, value: this.state.path, placeholder: "/", id: "path", name: "path", "aria-describedby": "path-help" }),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "help-block", id: "path-help" },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null, "Path that the router watches to route traffic to the service."))),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "form-group co-create-route__service" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("label", { className: "co-required", htmlFor: "service" }, "Service"),
                        loaded && lodash_es__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](serviceOptions) && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Alert"], { isInline: true, className: "co-alert co-create-route__alert", variant: "info", title: "No services" }, "There are no services in your project to expose with a route.")),
                        loaded && !lodash_es__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](serviceOptions) && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_5__["Dropdown"], { items: availableServiceOptions, title: service ? serviceOptions[service.metadata.name] : 'Select a service', dropDownClassName: "dropdown--full-width", id: "service", onChange: this.changeService, describedBy: "service-help" })),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "help-block", id: "service-help" },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null, "Service to route to."))),
                    alternateServicesList.length > 0 && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "form-group co-create-route__weight" },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("label", { htmlFor: "weight" }, "Weight"),
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", { className: "pf-c-form-control co-create-route__weight-label", type: "number", onChange: this.handleWeightChange, value: this.state.weight, id: "weight", "aria-describedby": "weight-help" }),
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "help-block", id: "weight-help" },
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null, "A number between 0 and 255 that depicts relative weight compared with other targets."))),
                        alternateServicesList)),
                    alternateServicesList.length < MAX_ALT_SERVICE_TARGET &&
                        alternateServicesList.length + 1 < lodash_es__WEBPACK_IMPORTED_MODULE_0__["keys"](serviceOptions).length &&
                        service && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Button"], { className: "pf-m-link--align-left co-create-route__add-service-btn", onClick: this.addAltServiceEntry, type: "button", variant: "link", isInline: true },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_4__["PlusCircleIcon"], { className: "co-icon-space-r" }),
                        "Add Alternate Service")),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "form-group co-create-route__target-port" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("label", { className: "co-required", htmlFor: "target-port" }, "Target Port"),
                        lodash_es__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](portOptions) && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null, "Select a service above"),
                        !lodash_es__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](portOptions) && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_5__["Dropdown"], { items: portOptions, title: portOptions[targetPort] || 'Select target port', dropDownClassName: "dropdown--full-width", id: "target-port", onChange: this.changeTargetPort, describedBy: "target-port-help" })),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "help-block", id: "target-port-help" },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null, "Target port for traffic."))),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "form-group co-create-route__security" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("label", { className: "control-label" }, "Security"),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "checkbox" },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("label", null,
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", { type: "checkbox", onChange: this.toggleSection, checked: this.state.secure, id: "secure", name: "secure", "aria-describedby": "secure-help" }),
                                "Secure route"),
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "help-block", id: "secure-help" },
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null, "Routes can be secured using several TLS termination types for serving certificates."))),
                        this.state.secure && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "co-create-route__security" },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "form-group co-create-route__tls-termination" },
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("label", { className: "co-required", htmlFor: "tls-termination" }, "TLS Termination"),
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_5__["Dropdown"], { items: terminationTypes, title: "Select termination type", dropDownClassName: "dropdown--full-width", id: "tls-termination", onChange: this.changeTermination })),
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "form-group co-create-route__insecure-traffic" },
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("label", { htmlFor: "insecure-traffic" }, "Insecure Traffic"),
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_5__["Dropdown"], { items: termination === 'passthrough'
                                        ? passthroughInsecureTrafficTypes
                                        : insecureTrafficTypes, title: "Select insecure traffic type", dropDownClassName: "dropdown--full-width", id: "insecure-traffic", onChange: this.changeInsecureTraffic, describedBy: "insecure-traffic-help" }),
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "help-block", id: "insecure-traffic-help" },
                                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null, "Policy for traffic on insecure schemes like HTTP."))),
                            termination && termination !== 'passthrough' && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h2", { className: "h3" }, "Certificates"),
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "help-block" },
                                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null, "TLS certificates for edge and re-encrypt termination. If not specified, the router's default certificate is used.")),
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "form-group co-create-route__certificate" },
                                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](DroppableFileInput, { onChange: this.onCertificateChange, inputFileData: this.state.certificate, id: "certificate", label: "Certificate", inputFieldHelpText: "The PEM format certificate. Upload file by dragging & dropping, selecting it, or pasting from the clipboard." })),
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "form-group co-create-route__private-key" },
                                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](DroppableFileInput, { onChange: this.onPrivateKeyChange, inputFileData: this.state.key, id: "private-key", label: "Private Key", inputFieldHelpText: "The PEM format key. Upload file by dragging & dropping, selecting it, or pasting from the clipboard." })),
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "form-group co-create-route__caCertificate" },
                                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](DroppableFileInput, { onChange: this.onCaCertificateChange, inputFileData: this.state.caCertificate, id: "ca-certificate", label: "CA Certificate", inputFieldHelpText: "The PEM format CA certificate chain. Upload file by dragging & dropping, selecting it, or pasting from the clipboard." })),
                                termination === 'reencrypt' && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "form-group co-create-route__destinationCaCertificate" },
                                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](DroppableFileInput, { onChange: this.onDestinationCACertificateChange, inputFileData: this.state.destinationCACertificate, id: "destination-ca-certificate", label: "Destination CA Certificate" }))))))),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_5__["ButtonBar"], { errorMessage: this.state.error, inProgress: this.state.inProgress },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["ActionGroup"], { className: "pf-c-form" },
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Button"], { type: "submit", isDisabled: !this.state.name ||
                                        !this.state.service ||
                                        !this.state.targetPort ||
                                        (this.state.secure && !this.state.termination), id: "save-changes", variant: "primary" }, "Create"),
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Button"], { onClick: _utils__WEBPACK_IMPORTED_MODULE_5__["history"].goBack, id: "cancel", variant: "secondary" }, "Cancel"))))))));
    }
}
const AlternateServicesGroup = (props) => {
    const [weight, setWeight] = react__WEBPACK_IMPORTED_MODULE_1__["useState"](props.weight);
    const [name, setName] = react__WEBPACK_IMPORTED_MODULE_1__["useState"](props.name);
    const onWeightChange = (event) => {
        setWeight(lodash_es__WEBPACK_IMPORTED_MODULE_0__["toInteger"](event.currentTarget.value));
    };
    const onServiceChange = (serviceName) => {
        setName(serviceName);
    };
    const { serviceOptions, availableServiceOptions, index, onChange } = props;
    react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](() => {
        onChange({ name, weight }, index);
    }, [name, weight, index, onChange]);
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "form-group" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("label", { htmlFor: `${index}-alt-service` }, "Alternate Service Target"),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_5__["Dropdown"], { items: availableServiceOptions, title: name ? serviceOptions[name] : 'Select a service', dropDownClassName: "dropdown--full-width", id: `${index}-alt-service`, onChange: onServiceChange, describedby: `${index}-alt-service-help` }),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "help-block", id: `${index}-alt-service-help` },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null, "Alternate service to route to."))),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "form-group" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("label", { htmlFor: `${index}-weight` }, "Alternate Service Weight"),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", { className: "pf-c-form-control co-create-route__weight-label", id: `${index}-weight`, type: "number", onChange: onWeightChange, value: weight, "aria-describedby": `${index}-alt-weight-help` }),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "help-block", id: `${index}-alt-weight-help` },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null, "A number between 0 and 255 that depicts relative weight compared with other targets.")))));
};


/***/ })

}]);
//# sourceMappingURL=create-route-82914d73dba4fb95b19c.js.map