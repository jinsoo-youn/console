(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["metal3-baremetalhost~metal3-baremetalhosts"],{

/***/ "./packages/console-shared/src/k8s/index.ts":
/*!**************************************************!*\
  !*** ./packages/console-shared/src/k8s/index.ts ***!
  \**************************************************/
/*! exports provided: patchSafeValue, PatchOperation, PatchBuilder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _patch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./patch */ "./packages/console-shared/src/k8s/patch.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "patchSafeValue", function() { return _patch__WEBPACK_IMPORTED_MODULE_0__["patchSafeValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PatchOperation", function() { return _patch__WEBPACK_IMPORTED_MODULE_0__["PatchOperation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PatchBuilder", function() { return _patch__WEBPACK_IMPORTED_MODULE_0__["PatchBuilder"]; });




/***/ }),

/***/ "./packages/console-shared/src/k8s/patch.ts":
/*!**************************************************!*\
  !*** ./packages/console-shared/src/k8s/patch.ts ***!
  \**************************************************/
/*! exports provided: patchSafeValue, PatchOperation, PatchBuilder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "patchSafeValue", function() { return patchSafeValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatchOperation", function() { return PatchOperation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatchBuilder", function() { return PatchBuilder; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./packages/console-shared/src/utils/index.ts");


const patchSafeValue = (value) => value.replace('~', '~0').replace('/', '~1');
var PatchOperation;
(function (PatchOperation) {
    PatchOperation["ADD"] = "add";
    PatchOperation["REMOVE"] = "remove";
    PatchOperation["REPLACE"] = "replace";
})(PatchOperation || (PatchOperation = {}));
class PatchBuilder {
    constructor(path) {
        this.valueIndex = -1;
        this.valueKey = '';
        this.valid = true;
        this.setValue = (value) => {
            this.value = value;
            return this;
        };
        this.setOperation = (operation) => {
            this.operation = operation;
            return this;
        };
        this.setListIndex = (index) => {
            this.valueIndex = index;
            return this;
        };
        this.add = (value) => {
            this.value = value;
            return this.setOperation(PatchOperation.ADD);
        };
        this.replace = (value) => {
            this.value = value;
            return this.setOperation(PatchOperation.REPLACE);
        };
        this.remove = () => this.setOperation(PatchOperation.REMOVE);
        this.setListRemove = (items, removedItemEquals) => {
            this.value = undefined;
            this.operation = PatchOperation.REMOVE;
            if (items) {
                const foundIndex = items.findIndex(removedItemEquals);
                if (foundIndex < 0) {
                    this.valid = false; // do not do anything
                }
                else {
                    this.valueIndex = items.length === 1 ? -1 : foundIndex; // delete the whole list if last value there
                }
            }
            else {
                this.valueIndex = -1; // remove the empty list
            }
            return this;
        };
        this.setListUpdate = (item, items, updatedItemEquals = (other, updatedValue) => other === updatedValue) => {
            if (items) {
                const foundIndex = items.findIndex((other) => updatedItemEquals(other, item));
                if (foundIndex < 0) {
                    this.value = item;
                    this.valueIndex = items.length;
                    this.operation = PatchOperation.ADD;
                }
                else if (lodash__WEBPACK_IMPORTED_MODULE_0__["isEqual"](items[foundIndex], item)) {
                    this.valid = false; // no change
                }
                else {
                    this.value = item;
                    this.valueIndex = foundIndex;
                    this.operation = PatchOperation.REPLACE;
                }
            }
            else {
                // list is missing - add the whole list
                this.value = [item];
                this.valueIndex = -1;
                this.operation = PatchOperation.ADD;
            }
            return this;
        };
        this.setObjectRemove = (key, object) => {
            if (lodash__WEBPACK_IMPORTED_MODULE_0__["has"](object, [key])) {
                this.value = undefined;
                this.valueKey = key;
                this.operation = PatchOperation.REMOVE;
            }
            else {
                this.valid = false;
            }
            return this;
        };
        this.setObjectUpdate = (key, value, object) => {
            if (object == null) {
                this.value = { [key]: value };
            }
            else if (object[key] === value) {
                this.valid = false;
            }
            else {
                this.value = value;
                this.valueKey = key;
            }
            this.operation = lodash__WEBPACK_IMPORTED_MODULE_0__["has"](object, [key]) ? PatchOperation.REPLACE : PatchOperation.ADD;
            return this;
        };
        this.isPatchValid = () => this.valid && !!(this.path && this.operation);
        this.build = () => {
            if (!this.isPatchValid()) {
                return null;
            }
            let resultPath;
            if (this.valueIndex < 0) {
                resultPath = this.valueKey
                    ? Object(_utils__WEBPACK_IMPORTED_MODULE_1__["assureEndsWith"])(this.path, `/${patchSafeValue(this.valueKey)}`)
                    : this.path;
            }
            else {
                resultPath = `${Object(_utils__WEBPACK_IMPORTED_MODULE_1__["assureEndsWith"])(this.path, '/')}${this.valueIndex}`;
            }
            const result = {
                op: this.operation,
                path: resultPath,
            };
            if (this.operation !== PatchOperation.REMOVE) {
                result.value = this.value;
            }
            return result;
        };
        this.buildAddObjectKeysPatches = (newObject, oldObject) => {
            if (!newObject) {
                return [];
            }
            let builders;
            if (!oldObject) {
                builders = [new PatchBuilder(this.path).add(newObject)];
            }
            else {
                builders = Object.keys(newObject).map((key) => new PatchBuilder(this.path).setObjectUpdate(key, newObject[key], oldObject));
            }
            return lodash__WEBPACK_IMPORTED_MODULE_0__["compact"](builders.map((u) => u.build()));
        };
        this.path = path;
    }
}


/***/ }),

/***/ "./packages/metal3-plugin/src/components/baremetal-hosts/BareMetalHostRole.tsx":
/*!*************************************************************************************!*\
  !*** ./packages/metal3-plugin/src/components/baremetal-hosts/BareMetalHostRole.tsx ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");


const BareMetalHostRole = ({ machine, node }) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_console_shared__WEBPACK_IMPORTED_MODULE_1__["getNodeRoles"])(node)
    .sort()
    .join(', ') ||
    Object(_console_shared__WEBPACK_IMPORTED_MODULE_1__["getMachineRole"])(machine) ||
    _console_shared__WEBPACK_IMPORTED_MODULE_1__["DASH"]));
/* harmony default export */ __webpack_exports__["default"] = (BareMetalHostRole);


/***/ }),

/***/ "./packages/metal3-plugin/src/components/baremetal-hosts/BareMetalHostSecondaryStatus.tsx":
/*!************************************************************************************************!*\
  !*** ./packages/metal3-plugin/src/components/baremetal-hosts/BareMetalHostSecondaryStatus.tsx ***!
  \************************************************************************************************/
/*! exports provided: HOST_SCHEDULED_FOR_RESTART, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HOST_SCHEDULED_FOR_RESTART", function() { return HOST_SCHEDULED_FOR_RESTART; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../selectors */ "./packages/metal3-plugin/src/selectors/index.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants */ "./packages/metal3-plugin/src/constants/index.ts");




const HOST_SCHEDULED_FOR_RESTART = 'Restart pending';
const BareMetalHostSecondaryStatus = ({ host }) => {
    const powerStatus = Object(_selectors__WEBPACK_IMPORTED_MODULE_2__["getHostPowerStatus"])(host);
    const provisioningState = Object(_selectors__WEBPACK_IMPORTED_MODULE_2__["getHostProvisioningState"])(host);
    const status = [];
    // don't show power status when host registration/inspection hasn't finished
    if (!_constants__WEBPACK_IMPORTED_MODULE_3__["HOST_REGISTERING_STATES"].includes(provisioningState)) {
        if (Object(_selectors__WEBPACK_IMPORTED_MODULE_2__["isHostScheduledForRestart"])(host)) {
            status.push(HOST_SCHEDULED_FOR_RESTART);
        }
        // don't show power status when host is powered on
        if (powerStatus !== _constants__WEBPACK_IMPORTED_MODULE_3__["HOST_POWER_STATUS_POWERED_ON"]) {
            status.push(powerStatus);
        }
    }
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_1__["SecondaryStatus"], { status: status });
};
/* harmony default export */ __webpack_exports__["default"] = (BareMetalHostSecondaryStatus);


/***/ }),

/***/ "./packages/metal3-plugin/src/components/baremetal-hosts/BareMetalHostStatus.tsx":
/*!***************************************************************************************!*\
  !*** ./packages/metal3-plugin/src/components/baremetal-hosts/BareMetalHostStatus.tsx ***!
  \***************************************************************************************/
/*! exports provided: AddDiscoveredHostButton, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddDiscoveredHostButton", function() { return AddDiscoveredHostButton; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var patternfly_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! patternfly-react */ "./node_modules/patternfly-react/dist/esm/index.js");
/* harmony import */ var _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-icons */ "./node_modules/@patternfly/react-icons/dist/esm/index.js");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../constants */ "./packages/metal3-plugin/src/constants/index.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models */ "./packages/metal3-plugin/src/models.ts");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../selectors */ "./packages/metal3-plugin/src/selectors/index.ts");
/* harmony import */ var _maintenance_MaintenancePopover__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../maintenance/MaintenancePopover */ "./packages/metal3-plugin/src/components/maintenance/MaintenancePopover.tsx");









// TODO(jtomasek): Update this with onClick handler once add discovered host functionality
// is available
const AddDiscoveredHostButton = ({ host }) => {
    const namespace = Object(_console_shared__WEBPACK_IMPORTED_MODULE_3__["getNamespace"])(host);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_4__["RequireCreatePermission"], { model: _models__WEBPACK_IMPORTED_MODULE_6__["BareMetalHostModel"], namespace: namespace },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](patternfly_react__WEBPACK_IMPORTED_MODULE_1__["Button"], { bsStyle: "link" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_3__["StatusIconAndText"], { icon: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_2__["AddCircleOIcon"], null), title: "Add host" }))));
};
const BareMetalHostStatus = ({ status, title, description, host, nodeMaintenance, }) => {
    const statusTitle = title || status;
    switch (true) {
        case status === _constants__WEBPACK_IMPORTED_MODULE_5__["HOST_STATUS_DISCOVERED"]:
            return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](AddDiscoveredHostButton, { host: host });
        case [_constants__WEBPACK_IMPORTED_MODULE_5__["NODE_STATUS_STARTING_MAINTENANCE"], _constants__WEBPACK_IMPORTED_MODULE_5__["NODE_STATUS_UNDER_MAINTENANCE"]].includes(status):
            return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_maintenance_MaintenancePopover__WEBPACK_IMPORTED_MODULE_8__["default"], { title: statusTitle, nodeMaintenance: nodeMaintenance });
        case [_constants__WEBPACK_IMPORTED_MODULE_5__["NODE_STATUS_STOPPING_MAINTENANCE"], ..._constants__WEBPACK_IMPORTED_MODULE_5__["HOST_PROGRESS_STATES"]].includes(status):
            return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_3__["ProgressStatus"], { title: statusTitle }, description);
        case _constants__WEBPACK_IMPORTED_MODULE_5__["HOST_ERROR_STATES"].includes(status):
            return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_3__["ErrorStatus"], { title: statusTitle },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null, description),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null, Object(_selectors__WEBPACK_IMPORTED_MODULE_7__["getHostErrorMessage"])(host))));
        case _constants__WEBPACK_IMPORTED_MODULE_5__["HOST_SUCCESS_STATES"].includes(status):
            return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_3__["SuccessStatus"], { title: statusTitle }, description);
        default:
            return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_3__["Status"], { status: status, title: statusTitle });
    }
};
/* harmony default export */ __webpack_exports__["default"] = (BareMetalHostStatus);


/***/ }),

/***/ "./packages/metal3-plugin/src/components/baremetal-hosts/NodeLink.tsx":
/*!****************************************************************************!*\
  !*** ./packages/metal3-plugin/src/components/baremetal-hosts/NodeLink.tsx ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _console_internal_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/internal/models */ "./public/models/index.ts");





const NodeLink = ({ nodeName }) => {
    if (nodeName) {
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["ResourceLink"], { kind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_3__["referenceForModel"])(_console_internal_models__WEBPACK_IMPORTED_MODULE_4__["NodeModel"]), name: nodeName });
    }
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, _console_shared__WEBPACK_IMPORTED_MODULE_1__["DASH"]);
};
/* harmony default export */ __webpack_exports__["default"] = (NodeLink);


/***/ }),

/***/ "./packages/metal3-plugin/src/components/baremetal-hosts/host-menu-actions.tsx":
/*!*************************************************************************************!*\
  !*** ./packages/metal3-plugin/src/components/baremetal-hosts/host-menu-actions.tsx ***!
  \*************************************************************************************/
/*! exports provided: Edit, SetNodeMaintenance, RemoveNodeMaintenance, PowerOn, Deprovision, PowerOff, Restart, Delete, menuActions, menuActionsCreator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Edit", function() { return Edit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetNodeMaintenance", function() { return SetNodeMaintenance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveNodeMaintenance", function() { return RemoveNodeMaintenance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PowerOn", function() { return PowerOn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Deprovision", function() { return Deprovision; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PowerOff", function() { return PowerOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Restart", function() { return Restart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Delete", function() { return Delete; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menuActions", function() { return menuActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menuActionsCreator", function() { return menuActionsCreator; });
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _console_internal_components_modals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/components/modals */ "./public/components/modals/index.ts");
/* harmony import */ var _console_internal_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/internal/models */ "./public/models/index.ts");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../selectors */ "./packages/metal3-plugin/src/selectors/index.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models */ "./packages/metal3-plugin/src/models.ts");
/* harmony import */ var _status_host_status__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../status/host-status */ "./packages/metal3-plugin/src/status/host-status.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../constants */ "./packages/metal3-plugin/src/constants/index.ts");
/* harmony import */ var _modals_StartNodeMaintenanceModal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../modals/StartNodeMaintenanceModal */ "./packages/metal3-plugin/src/components/modals/StartNodeMaintenanceModal.tsx");
/* harmony import */ var _modals_PowerOffHostModal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../modals/PowerOffHostModal */ "./packages/metal3-plugin/src/components/modals/PowerOffHostModal.tsx");
/* harmony import */ var _modals_StopNodeMaintenanceModal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../modals/StopNodeMaintenanceModal */ "./packages/metal3-plugin/src/components/modals/StopNodeMaintenanceModal.tsx");
/* harmony import */ var _constants_machine__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../constants/machine */ "./packages/metal3-plugin/src/constants/machine.ts");
/* harmony import */ var _k8s_requests_bare_metal_host__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../k8s/requests/bare-metal-host */ "./packages/metal3-plugin/src/k8s/requests/bare-metal-host.ts");
/* harmony import */ var _selectors_machine__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../selectors/machine */ "./packages/metal3-plugin/src/selectors/machine.ts");
/* harmony import */ var _selectors_machine_set__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../selectors/machine-set */ "./packages/metal3-plugin/src/selectors/machine-set.ts");
/* harmony import */ var _modals_RestartHostModal__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../modals/RestartHostModal */ "./packages/metal3-plugin/src/components/modals/RestartHostModal.tsx");

















const Edit = (kindObj, host) => ({
    label: `Edit ${kindObj.label}`,
    href: `/k8s/ns/${Object(_console_shared__WEBPACK_IMPORTED_MODULE_2__["getNamespace"])(host)}/${Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_1__["referenceForModel"])(kindObj)}/${Object(_console_shared__WEBPACK_IMPORTED_MODULE_2__["getName"])(host)}/edit`,
});
const SetNodeMaintenance = (kindObj, host, { hasNodeMaintenanceCapability, nodeMaintenance, nodeName }) => ({
    hidden: !nodeName || !hasNodeMaintenanceCapability || !!nodeMaintenance,
    label: 'Start Maintenance',
    callback: () => Object(_modals_StartNodeMaintenanceModal__WEBPACK_IMPORTED_MODULE_9__["startNodeMaintenanceModal"])({ nodeName }),
});
const RemoveNodeMaintenance = (kindObj, host, { hasNodeMaintenanceCapability, nodeMaintenance, nodeName }) => ({
    hidden: !nodeName || !hasNodeMaintenanceCapability || !nodeMaintenance,
    label: 'Stop Maintenance',
    callback: () => Object(_modals_StopNodeMaintenanceModal__WEBPACK_IMPORTED_MODULE_11__["default"])(nodeMaintenance),
    accessReview: nodeMaintenance && Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_0__["asAccessReview"])(_models__WEBPACK_IMPORTED_MODULE_6__["NodeMaintenanceModel"], nodeMaintenance, 'delete'),
});
const PowerOn = (kindObj, host) => {
    const title = 'Power On';
    return {
        hidden: [_constants__WEBPACK_IMPORTED_MODULE_8__["HOST_POWER_STATUS_POWERED_ON"], _constants__WEBPACK_IMPORTED_MODULE_8__["HOST_POWER_STATUS_POWERING_ON"]].includes(Object(_selectors__WEBPACK_IMPORTED_MODULE_5__["getHostPowerStatus"])(host)),
        label: title,
        callback: () => {
            Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_1__["k8sPatch"])(_models__WEBPACK_IMPORTED_MODULE_6__["BareMetalHostModel"], host, [{ op: 'replace', path: '/spec/online', value: true }]);
        },
        accessReview: host && Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_0__["asAccessReview"])(_models__WEBPACK_IMPORTED_MODULE_6__["BareMetalHostModel"], host, 'update'),
    };
};
const Deprovision = (kindObj, host, { machine, machineSet }) => {
    const title = 'Deprovision';
    return {
        hidden: [_constants__WEBPACK_IMPORTED_MODULE_8__["HOST_POWER_STATUS_POWERED_OFF"], _constants__WEBPACK_IMPORTED_MODULE_8__["HOST_POWER_STATUS_POWERING_OFF"]].includes(Object(_selectors__WEBPACK_IMPORTED_MODULE_5__["getHostPowerStatus"])(host)) ||
            Object(_selectors__WEBPACK_IMPORTED_MODULE_5__["isHostScheduledForRestart"])(host) ||
            !machine ||
            !!Object(_console_shared__WEBPACK_IMPORTED_MODULE_2__["getAnnotations"])(machine, {})[_constants_machine__WEBPACK_IMPORTED_MODULE_12__["DELETE_MACHINE_ANNOTATION"]] ||
            (Object(_selectors_machine__WEBPACK_IMPORTED_MODULE_14__["getMachineMachineSetOwner"])(machine) && !machineSet),
        label: title,
        callback: () => Object(_console_internal_components_modals__WEBPACK_IMPORTED_MODULE_3__["confirmModal"])({
            title: `${title} ${Object(_console_shared__WEBPACK_IMPORTED_MODULE_2__["getName"])(host)}`,
            message: `Are you sure you want to delete ${Object(_console_shared__WEBPACK_IMPORTED_MODULE_2__["getName"])(machine)} machine${machineSet ? ' and scale down its machine set?' : '?'}`,
            btnText: title,
            executeFn: () => Object(_k8s_requests_bare_metal_host__WEBPACK_IMPORTED_MODULE_13__["deprovision"])(machine, machineSet),
        }),
        accessReview: machineSet
            ? Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_0__["asAccessReview"])(_console_internal_models__WEBPACK_IMPORTED_MODULE_4__["MachineSetModel"], machineSet, 'update')
            : Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_0__["asAccessReview"])(_console_internal_models__WEBPACK_IMPORTED_MODULE_4__["MachineModel"], machine, 'delete'),
    };
};
const PowerOff = (kindObj, host, { nodeName, status }) => ({
    hidden: [_constants__WEBPACK_IMPORTED_MODULE_8__["HOST_POWER_STATUS_POWERED_OFF"], _constants__WEBPACK_IMPORTED_MODULE_8__["HOST_POWER_STATUS_POWERING_OFF"]].includes(Object(_selectors__WEBPACK_IMPORTED_MODULE_5__["getHostPowerStatus"])(host)),
    label: 'Power Off',
    callback: () => Object(_modals_PowerOffHostModal__WEBPACK_IMPORTED_MODULE_10__["powerOffHostModal"])({ host, nodeName, status }),
    accessReview: host && Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_0__["asAccessReview"])(_models__WEBPACK_IMPORTED_MODULE_6__["BareMetalHostModel"], host, 'update'),
});
const Restart = (kindObj, host, { nodeName }) => ({
    hidden: [_constants__WEBPACK_IMPORTED_MODULE_8__["HOST_POWER_STATUS_POWERED_OFF"], _constants__WEBPACK_IMPORTED_MODULE_8__["HOST_POWER_STATUS_POWERING_OFF"]].includes(Object(_selectors__WEBPACK_IMPORTED_MODULE_5__["getHostPowerStatus"])(host)) || Object(_selectors__WEBPACK_IMPORTED_MODULE_5__["isHostScheduledForRestart"])(host),
    label: 'Restart',
    callback: () => Object(_modals_RestartHostModal__WEBPACK_IMPORTED_MODULE_16__["restartHostModal"])({ host, nodeName }),
    accessReview: host && Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_0__["asAccessReview"])(_models__WEBPACK_IMPORTED_MODULE_6__["BareMetalHostModel"], host, 'update'),
});
const Delete = (kindObj, host, { status }) => {
    const title = 'Delete Bare Metal Host';
    return {
        hidden: ![
            _constants__WEBPACK_IMPORTED_MODULE_8__["HOST_STATUS_UNKNOWN"],
            _constants__WEBPACK_IMPORTED_MODULE_8__["HOST_STATUS_READY"],
            _constants__WEBPACK_IMPORTED_MODULE_8__["HOST_STATUS_AVAILABLE"],
            _constants__WEBPACK_IMPORTED_MODULE_8__["HOST_STATUS_DISCOVERED"],
            ..._constants__WEBPACK_IMPORTED_MODULE_8__["HOST_ERROR_STATES"],
        ].includes(status.status),
        label: title,
        callback: () => Object(_console_internal_components_modals__WEBPACK_IMPORTED_MODULE_3__["deleteModal"])({
            kind: kindObj,
            resource: host,
        }),
        accessReview: Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_0__["asAccessReview"])(_models__WEBPACK_IMPORTED_MODULE_6__["BareMetalHostModel"], host, 'delete'),
    };
};
const menuActions = [
    SetNodeMaintenance,
    RemoveNodeMaintenance,
    PowerOn,
    Deprovision,
    PowerOff,
    Restart,
    _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_0__["Kebab"].factory.ModifyLabels,
    _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_0__["Kebab"].factory.ModifyAnnotations,
    Edit,
    Delete,
];
const menuActionsCreator = (kindObj, host, { machines, machineSets, nodes, nodeMaintenances }, { hasNodeMaintenanceCapability }) => {
    const machine = Object(_selectors__WEBPACK_IMPORTED_MODULE_5__["getHostMachine"])(host, machines);
    const node = Object(_console_shared__WEBPACK_IMPORTED_MODULE_2__["getMachineNode"])(machine, nodes);
    const nodeName = Object(_console_shared__WEBPACK_IMPORTED_MODULE_2__["getMachineNodeName"])(machine);
    const nodeMaintenance = Object(_selectors__WEBPACK_IMPORTED_MODULE_5__["findNodeMaintenance"])(nodeMaintenances, nodeName);
    const status = Object(_status_host_status__WEBPACK_IMPORTED_MODULE_7__["getHostStatus"])({ host, machine, node, nodeMaintenance });
    const machineOwner = Object(_selectors_machine__WEBPACK_IMPORTED_MODULE_14__["getMachineMachineSetOwner"])(machine);
    const machineSet = Object(_selectors_machine_set__WEBPACK_IMPORTED_MODULE_15__["findMachineSet"])(machineSets, machineOwner && machineOwner.uid);
    return menuActions.map((action) => {
        return action(kindObj, host, {
            hasNodeMaintenanceCapability,
            nodeMaintenance,
            nodeName,
            machine,
            machineSet,
            status,
        });
    });
};


/***/ }),

/***/ "./packages/metal3-plugin/src/components/modals/PowerOffHostModal.tsx":
/*!****************************************************************************!*\
  !*** ./packages/metal3-plugin/src/components/modals/PowerOffHostModal.tsx ***!
  \****************************************************************************/
/*! exports provided: powerOffHostModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "powerOffHostModal", function() { return powerOffHostModal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var patternfly_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! patternfly-react */ "./node_modules/patternfly-react/dist/esm/index.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_internal_components_factory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/internal/components/factory */ "./public/components/factory/index.tsx");
/* harmony import */ var _console_internal_models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/internal/models */ "./public/models/index.ts");
/* harmony import */ var _console_shared_src_hooks_flag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @console/shared/src/hooks/flag */ "./packages/console-shared/src/hooks/flag.ts");
/* harmony import */ var _k8s_requests_bare_metal_host__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../k8s/requests/bare-metal-host */ "./packages/metal3-plugin/src/k8s/requests/bare-metal-host.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../constants */ "./packages/metal3-plugin/src/constants/index.ts");
/* harmony import */ var _StartNodeMaintenanceModal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./StartNodeMaintenanceModal */ "./packages/metal3-plugin/src/components/modals/StartNodeMaintenanceModal.tsx");
/* harmony import */ var _PowerOffStatusValidations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./PowerOffStatusValidations */ "./packages/metal3-plugin/src/components/modals/PowerOffStatusValidations.tsx");
/* harmony import */ var _features__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../features */ "./packages/metal3-plugin/src/features.ts");












const SafePowerOffDialog = ({ isUnderMaintenance }) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null,
    "Host is ready to be gracefully powered off.",
    ' ',
    isUnderMaintenance && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, "The host is currently under maintenance and all workloads have already been moved."))));
const ForcePowerOffDialog = ({ canStartMaintenance, forceOff, nodeName, setForceOff, status, nodePods, loadError, cancel, }) => {
    const mainText = nodeName ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null,
        "To power off gracefully,",
        ' ',
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Button"], { variant: "link", onClick: () => Object(_StartNodeMaintenanceModal__WEBPACK_IMPORTED_MODULE_9__["startNodeMaintenanceModal"])({ nodeName }), isDisabled: !canStartMaintenance, isInline: true }, "start maintenance"),
        ' ',
        "on this host to move all managed workloads to other nodes in the cluster.")) : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null, "The host will be powered off gracefully."));
    const helpText = nodeName
        ? 'Workloads will not be moved before the host powers off.'
        : 'The host will power off immediately as if it were unplugged.';
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        mainText,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_PowerOffStatusValidations__WEBPACK_IMPORTED_MODULE_10__["StatusValidations"], { status: status.status, nodePods: nodePods, loadError: loadError, onLinkClicked: cancel }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "form-group" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](patternfly_react__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], { controlId: "host-force-off" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](patternfly_react__WEBPACK_IMPORTED_MODULE_1__["Checkbox"], { onChange: () => setForceOff(!forceOff), checked: forceOff, inline: true }, "Power off immediately"),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](patternfly_react__WEBPACK_IMPORTED_MODULE_1__["HelpBlock"], { id: "host-force-off-help" }, helpText)),
            forceOff && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Alert"], { variant: "warning", title: "Applications may be temporarily disrupted.", isInline: true }, "Workloads currently running on this host will not be moved before powering off. This may cause service disruptions.")))));
};
const isPowerOffSafe = (status, nodePods) => {
    const safeStates = [_constants__WEBPACK_IMPORTED_MODULE_8__["NODE_STATUS_UNDER_MAINTENANCE"], _constants__WEBPACK_IMPORTED_MODULE_8__["HOST_STATUS_READY"], _constants__WEBPACK_IMPORTED_MODULE_8__["HOST_STATUS_AVAILABLE"]];
    return safeStates.includes(status) && !Object(_PowerOffStatusValidations__WEBPACK_IMPORTED_MODULE_10__["getStaticPods"])(nodePods).length;
};
const PowerOffHostModal = Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__["withHandlePromise"])(({ host, nodeName, status, inProgress, errorMessage, handlePromise, close = undefined, cancel = undefined, nodePods, loadError, }) => {
    const hasNodeMaintenanceCapability = Object(_console_shared_src_hooks_flag__WEBPACK_IMPORTED_MODULE_6__["useFlag"])(_features__WEBPACK_IMPORTED_MODULE_11__["NODE_MAINTENANCE_FLAG"]);
    const [canPowerOffSafely, setCanPowerOffSafely] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](false);
    const [forceOff, setForceOff] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](false);
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
        isPowerOffSafe(status.status, nodePods === null || nodePods === void 0 ? void 0 : nodePods.data) && setCanPowerOffSafely(true);
    }, [status, nodePods]);
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
        !canPowerOffSafely && setForceOff(false);
    }, [canPowerOffSafely]);
    const submit = (event) => {
        event.preventDefault();
        const promise = Object(_k8s_requests_bare_metal_host__WEBPACK_IMPORTED_MODULE_7__["powerOffHost"])(host);
        return handlePromise(promise).then(close);
    };
    const isUnderMaintenance = status.status === _constants__WEBPACK_IMPORTED_MODULE_8__["NODE_STATUS_UNDER_MAINTENANCE"];
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("form", { onSubmit: submit, name: "form", className: "modal-content" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_4__["ModalTitle"], null, "Power Off Host"),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_4__["ModalBody"], null, canPowerOffSafely ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](SafePowerOffDialog, { isUnderMaintenance: isUnderMaintenance })) : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](ForcePowerOffDialog, { forceOff: forceOff, setForceOff: setForceOff, canStartMaintenance: !isUnderMaintenance && nodeName && hasNodeMaintenanceCapability, nodeName: nodeName, status: status, nodePods: nodePods, loadError: loadError, cancel: cancel }))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_4__["ModalSubmitFooter"], { cancel: cancel, errorMessage: errorMessage, inProgress: inProgress, submitDisabled: !canPowerOffSafely && !forceOff, submitText: "Power Off" })));
});
const PowerOffHostModalFirehose = (props) => {
    const { nodeName } = props;
    const resources = [];
    resources.push({
        kind: _console_internal_models__WEBPACK_IMPORTED_MODULE_5__["PodModel"].kind,
        namespaced: false,
        isList: true,
        prop: 'nodePods',
        fieldSelector: `spec.nodeName=${nodeName}`,
    });
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__["Firehose"], { resources: resources },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](PowerOffHostModal, Object.assign({}, props))));
};
const powerOffHostModal = Object(_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_4__["createModalLauncher"])(PowerOffHostModalFirehose);


/***/ }),

/***/ "./packages/metal3-plugin/src/components/modals/PowerOffStatusValidations.scss":
/*!*************************************************************************************!*\
  !*** ./packages/metal3-plugin/src/components/modals/PowerOffStatusValidations.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/metal3-plugin/src/components/modals/PowerOffStatusValidations.tsx":
/*!************************************************************************************!*\
  !*** ./packages/metal3-plugin/src/components/modals/PowerOffStatusValidations.tsx ***!
  \************************************************************************************/
/*! exports provided: getStaticPods, getDaemonSetsOfPods, StatusValidations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticPods", function() { return getStaticPods; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDaemonSetsOfPods", function() { return getDaemonSetsOfPods; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusValidations", function() { return StatusValidations; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _console_internal_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/models */ "./public/models/index.ts");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../constants */ "./packages/metal3-plugin/src/constants/index.ts");
/* harmony import */ var _PowerOffStatusValidations_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./PowerOffStatusValidations.scss */ "./packages/metal3-plugin/src/components/modals/PowerOffStatusValidations.scss");
/* harmony import */ var _PowerOffStatusValidations_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_PowerOffStatusValidations_scss__WEBPACK_IMPORTED_MODULE_7__);








const getStaticPods = (pods) => ((pods === null || pods === void 0 ? void 0 : pods.filter((pod) => {
    var _a;
    const annotations = ((_a = pod.metadata) === null || _a === void 0 ? void 0 : _a.annotations) || {};
    return !!annotations['kubernetes.io/config.mirror'];
})) || []).map((pod) => ({
    name: Object(_console_shared__WEBPACK_IMPORTED_MODULE_5__["getName"])(pod),
    namespace: Object(_console_shared__WEBPACK_IMPORTED_MODULE_5__["getNamespace"])(pod),
    kind: _console_internal_models__WEBPACK_IMPORTED_MODULE_3__["PodModel"].kind,
}));
const getDaemonSetsOfPods = (pods) => {
    if (!pods) {
        return [];
    }
    const namespaces = {};
    pods.forEach((pod) => {
        var _a, _b;
        const ownerReferences = ((_b = (_a = pod.metadata) === null || _a === void 0 ? void 0 : _a.ownerReferences) === null || _b === void 0 ? void 0 : _b.filter((or) => or.kind === _console_internal_models__WEBPACK_IMPORTED_MODULE_3__["DaemonSetModel"].kind)) || [];
        ownerReferences.forEach((or) => {
            namespaces[Object(_console_shared__WEBPACK_IMPORTED_MODULE_5__["getNamespace"])(pod)] = namespaces[Object(_console_shared__WEBPACK_IMPORTED_MODULE_5__["getNamespace"])(pod)] || [];
            namespaces[Object(_console_shared__WEBPACK_IMPORTED_MODULE_5__["getNamespace"])(pod)].push(or.name);
        });
    });
    const result = lodash__WEBPACK_IMPORTED_MODULE_1__["flatten"](Object.getOwnPropertyNames(namespaces).map((ns) => namespaces[ns].map((name) => ({
        name,
        namespace: ns,
        kind: _console_internal_models__WEBPACK_IMPORTED_MODULE_3__["DaemonSetModel"].kind,
    }))));
    return result;
};
const ExpandableResources = ({ resources, onLinkClicked, subject, }) => {
    const [isExpanded, setExpanded] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](false);
    const onToggle = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"](() => setExpanded(!isExpanded), [isExpanded, setExpanded]);
    const onLinkClick = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"]((event) => {
        onLinkClicked && (!event.key || event.key === 'Enter') && onLinkClicked();
    }, [onLinkClicked]);
    if (!resources || resources.length === 0) {
        return null;
    }
    const toggleText = `${isExpanded ? 'Hide' : 'Show'} ${subject} (${resources.length})`;
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Expandable"], { onToggle: onToggle, isExpanded: isExpanded, toggleText: toggleText }, resources
        .sort((a, b) => a.name.localeCompare(b.name))
        .map((resource) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { onClick: onLinkClick, onKeyPress: onLinkClick, key: `${resource.name}-${resource.namespace}`, role: "link", tabIndex: 0 },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_4__["ResourceLink"], { kind: resource.kind, name: resource.name, namespace: resource.namespace }))))));
};
const StatusValidations = ({ status, nodePods, loadError, onLinkClicked, }) => {
    const validations = [];
    const daemonSets = react__WEBPACK_IMPORTED_MODULE_0__["useMemo"](() => getDaemonSetsOfPods(nodePods === null || nodePods === void 0 ? void 0 : nodePods.data), [nodePods]);
    const staticPods = react__WEBPACK_IMPORTED_MODULE_0__["useMemo"](() => getStaticPods(nodePods === null || nodePods === void 0 ? void 0 : nodePods.data), [nodePods]);
    if (loadError) {
        validations.push({
            title: 'Failed to load data.',
            description: 'Failed to load subresources.',
            level: 'danger',
        });
    }
    if ([_constants__WEBPACK_IMPORTED_MODULE_6__["HOST_STATUS_UNKNOWN"], ..._constants__WEBPACK_IMPORTED_MODULE_6__["HOST_HEALTH_ERROR"]].includes(status)) {
        validations.push({
            title: 'The bare metal host is not healthy.',
            description: 'The host cannot be powered off gracefully untils its health is restored.',
            level: 'warning',
        });
    }
    if (status === _constants__WEBPACK_IMPORTED_MODULE_6__["NODE_STATUS_STARTING_MAINTENANCE"]) {
        validations.push({
            title: 'The node is starting maintenance.',
            description: 'The node cannot be powered off gracefully until it finishes entering maintenance.',
            level: 'info',
        });
    }
    if (status === _constants__WEBPACK_IMPORTED_MODULE_6__["NODE_STATUS_STOPPING_MAINTENANCE"]) {
        validations.push({
            title: 'The node is stopping maintenance.',
            description: 'The node cannot be powered off gracefully while it is exiting maintenance.',
            level: 'info',
        });
    }
    if (daemonSets.length > 0) {
        validations.push({
            title: 'This node contains DaemonSet pods.',
            description: 'These DaemonSets will prevent some pods from being moved. This should not prevent the host from powering off gracefully.',
            level: 'info',
            detail: (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](ExpandableResources, { subject: "daemon sets", resources: daemonSets, onLinkClicked: onLinkClicked })),
        });
    }
    if (staticPods.length > 0) {
        validations.push({
            title: 'This host contains unmanaged static pods.',
            description: 'These pods must be moved manually to continue running after the host powers off.',
            level: 'warning',
            detail: (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](ExpandableResources, { subject: "unmanaged pods", resources: staticPods, onLinkClicked: onLinkClicked })),
        });
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "metal3-poweroff-validations" }, validations.map((validation) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Alert"], { variant: validation.level, isInline: true, title: validation.title, key: validation.title },
        validation.description,
        validation.detail)))));
};


/***/ }),

/***/ "./packages/metal3-plugin/src/components/modals/RestartHostModal.tsx":
/*!***************************************************************************!*\
  !*** ./packages/metal3-plugin/src/components/modals/RestartHostModal.tsx ***!
  \***************************************************************************/
/*! exports provided: restartHostModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "restartHostModal", function() { return restartHostModal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_internal_components_factory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/components/factory */ "./public/components/factory/index.tsx");
/* harmony import */ var _k8s_requests_bare_metal_host__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../k8s/requests/bare-metal-host */ "./packages/metal3-plugin/src/k8s/requests/bare-metal-host.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





const RestartHostModal = ({ host, nodeName, inProgress, errorMessage, handlePromise, close = undefined, cancel = undefined, }) => {
    const onSubmit = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"]((event) => __awaiter(void 0, void 0, void 0, function* () {
        event.preventDefault();
        const promise = Object(_k8s_requests_bare_metal_host__WEBPACK_IMPORTED_MODULE_4__["restartHost"])(host);
        yield handlePromise(promise);
        return close();
    }), [host, close, handlePromise]);
    const text = nodeName
        ? `The bare metal host ${Object(_console_shared__WEBPACK_IMPORTED_MODULE_1__["getName"])(host)} will be restarted gracefully after all managed workloads are moved.`
        : `The bare metal host ${Object(_console_shared__WEBPACK_IMPORTED_MODULE_1__["getName"])(host)} will be restarted gracefully.`;
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("form", { onSubmit: onSubmit, name: "form", className: "modal-content" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_3__["ModalTitle"], null, "Restart Bare Metal Host"),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_3__["ModalBody"], null, text),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_3__["ModalSubmitFooter"], { cancel: cancel, errorMessage: errorMessage, inProgress: inProgress, submitDisabled: false, submitText: "Restart" })));
};
const restartHostModal = Object(_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_3__["createModalLauncher"])(Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["withHandlePromise"])(RestartHostModal));


/***/ }),

/***/ "./packages/metal3-plugin/src/constants/machine.ts":
/*!*********************************************************!*\
  !*** ./packages/metal3-plugin/src/constants/machine.ts ***!
  \*********************************************************/
/*! exports provided: DELETE_MACHINE_ANNOTATION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_MACHINE_ANNOTATION", function() { return DELETE_MACHINE_ANNOTATION; });
const DELETE_MACHINE_ANNOTATION = 'machine.openshift.io/cluster-api-delete-machine';


/***/ }),

/***/ "./packages/metal3-plugin/src/k8s/objects/bare-metal-host.ts":
/*!*******************************************************************!*\
  !*** ./packages/metal3-plugin/src/k8s/objects/bare-metal-host.ts ***!
  \*******************************************************************/
/*! exports provided: getSecretName, buildBareMetalHostSecret, buildBareMetalHostObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSecretName", function() { return getSecretName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildBareMetalHostSecret", function() { return buildBareMetalHostSecret; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildBareMetalHostObject", function() { return buildBareMetalHostObject; });
/* harmony import */ var _console_internal_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @console/internal/models */ "./public/models/index.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models */ "./packages/metal3-plugin/src/models.ts");


const getSecretName = (name) => `${name}-bmc-secret`;
const buildBareMetalHostSecret = (name, namespace, username, password) => ({
    apiVersion: _console_internal_models__WEBPACK_IMPORTED_MODULE_0__["SecretModel"].apiVersion,
    kind: _console_internal_models__WEBPACK_IMPORTED_MODULE_0__["SecretModel"].kind,
    metadata: {
        namespace,
        name: getSecretName(name),
    },
    data: {
        username: btoa(username),
        password: btoa(password),
    },
    type: 'Opaque',
});
const buildBareMetalHostObject = (name, namespace, BMCAddress, bootMACAddress, disableCertificateVerification = false, online = true, description = '') => ({
    apiVersion: `${_models__WEBPACK_IMPORTED_MODULE_1__["BareMetalHostModel"].apiGroup}/${_models__WEBPACK_IMPORTED_MODULE_1__["BareMetalHostModel"].apiVersion}`,
    kind: _models__WEBPACK_IMPORTED_MODULE_1__["BareMetalHostModel"].kind,
    metadata: {
        name,
        namespace,
    },
    spec: {
        bmc: {
            address: BMCAddress,
            credentialsName: getSecretName(name),
            disableCertificateVerification,
        },
        bootMACAddress,
        description,
        online,
    },
});


/***/ }),

/***/ "./packages/metal3-plugin/src/k8s/requests/bare-metal-host.ts":
/*!********************************************************************!*\
  !*** ./packages/metal3-plugin/src/k8s/requests/bare-metal-host.ts ***!
  \********************************************************************/
/*! exports provided: powerOffHost, powerOnHost, restartHost, deprovision, createBareMetalHost, updateBareMetalHost */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "powerOffHost", function() { return powerOffHost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "powerOnHost", function() { return powerOnHost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "restartHost", function() { return restartHost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deprovision", function() { return deprovision; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createBareMetalHost", function() { return createBareMetalHost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateBareMetalHost", function() { return updateBareMetalHost; });
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _console_internal_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/internal/models */ "./public/models/index.ts");
/* harmony import */ var _console_shared_src_k8s__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/shared/src/k8s */ "./packages/console-shared/src/k8s/index.ts");
/* harmony import */ var _console_shared_src__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/shared/src */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models */ "./packages/metal3-plugin/src/models.ts");
/* harmony import */ var _constants_machine__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../constants/machine */ "./packages/metal3-plugin/src/constants/machine.ts");
/* harmony import */ var _selectors_machine_set__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../selectors/machine-set */ "./packages/metal3-plugin/src/selectors/machine-set.ts");
/* harmony import */ var _objects_bare_metal_host__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../objects/bare-metal-host */ "./packages/metal3-plugin/src/k8s/objects/bare-metal-host.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};








const powerOffHost = (host) => Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_0__["k8sPatch"])(_models__WEBPACK_IMPORTED_MODULE_4__["BareMetalHostModel"], host, [{ op: 'replace', path: '/spec/online', value: false }]);
const powerOnHost = (host) => Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_0__["k8sPatch"])(_models__WEBPACK_IMPORTED_MODULE_4__["BareMetalHostModel"], host, [{ op: 'replace', path: '/spec/online', value: true }]);
const restartHost = (host) => Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_0__["k8sPatch"])(_models__WEBPACK_IMPORTED_MODULE_4__["BareMetalHostModel"], host, [
    {
        op: 'replace',
        path: '/metadata/annotations',
        value: Object.assign(Object.assign({}, host.metadata.annotations), { 'reboot.metal3.io': 'UI' }),
    },
]);
const deprovision = (machine, machineSet) => __awaiter(void 0, void 0, void 0, function* () {
    yield Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_0__["k8sPatch"])(_console_internal_models__WEBPACK_IMPORTED_MODULE_1__["MachineModel"], machine, [
        new _console_shared_src_k8s__WEBPACK_IMPORTED_MODULE_2__["PatchBuilder"]('/metadata/annotations')
            .setObjectUpdate(_constants_machine__WEBPACK_IMPORTED_MODULE_5__["DELETE_MACHINE_ANNOTATION"], 'true', Object(_console_shared_src__WEBPACK_IMPORTED_MODULE_3__["getAnnotations"])(machine))
            .build(),
    ]);
    if (machineSet) {
        const replicas = Object(_selectors_machine_set__WEBPACK_IMPORTED_MODULE_6__["getReplicas"])(machineSet);
        if (replicas > 0) {
            try {
                yield Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_0__["k8sPatch"])(_console_internal_models__WEBPACK_IMPORTED_MODULE_1__["MachineSetModel"], machineSet, [
                    new _console_shared_src_k8s__WEBPACK_IMPORTED_MODULE_2__["PatchBuilder"]('/spec/replicas').replace(replicas - 1).build(),
                ]);
            }
            catch (ignored) {
                yield Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_0__["k8sPatch"])(_console_internal_models__WEBPACK_IMPORTED_MODULE_1__["MachineModel"], machine, [
                    new _console_shared_src_k8s__WEBPACK_IMPORTED_MODULE_2__["PatchBuilder"]('/metadata/annotations')
                        .setObjectUpdate(_constants_machine__WEBPACK_IMPORTED_MODULE_5__["DELETE_MACHINE_ANNOTATION"], 'false', Object(_console_shared_src__WEBPACK_IMPORTED_MODULE_3__["getAnnotations"])(machine))
                        .build(),
                ]);
            }
        }
    }
    else {
        yield Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_0__["k8sKill"])(_console_internal_models__WEBPACK_IMPORTED_MODULE_1__["MachineModel"], machine);
    }
});
const createBareMetalHost = ({ name, BMCAddress, bootMACAddress, disableCertificateVerification, description, namespace, password, username, online, }) => __awaiter(void 0, void 0, void 0, function* () {
    const secret = Object(_objects_bare_metal_host__WEBPACK_IMPORTED_MODULE_7__["buildBareMetalHostSecret"])(name, namespace, username, password);
    const bareMetalHost = Object(_objects_bare_metal_host__WEBPACK_IMPORTED_MODULE_7__["buildBareMetalHostObject"])(name, namespace, BMCAddress, bootMACAddress, disableCertificateVerification, online, description);
    yield Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_0__["k8sCreate"])(_console_internal_models__WEBPACK_IMPORTED_MODULE_1__["SecretModel"], secret);
    yield Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_0__["k8sCreate"])(_models__WEBPACK_IMPORTED_MODULE_4__["BareMetalHostModel"], bareMetalHost);
});
const updateBareMetalHost = (host, secret, { name, BMCAddress, bootMACAddress, disableCertificateVerification, description, namespace, password, username, }) => __awaiter(void 0, void 0, void 0, function* () {
    if (secret) {
        const patches = new _console_shared_src_k8s__WEBPACK_IMPORTED_MODULE_2__["PatchBuilder"]('/data').buildAddObjectKeysPatches({ username: btoa(username), password: btoa(password) }, secret.data);
        if (patches.length > 0) {
            yield Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_0__["k8sPatch"])(_console_internal_models__WEBPACK_IMPORTED_MODULE_1__["SecretModel"], secret, patches);
        }
    }
    else {
        yield Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_0__["k8sCreate"])(_console_internal_models__WEBPACK_IMPORTED_MODULE_1__["SecretModel"], Object(_objects_bare_metal_host__WEBPACK_IMPORTED_MODULE_7__["buildBareMetalHostSecret"])(name, namespace, username, password));
    }
    const patches = [
        ...new _console_shared_src_k8s__WEBPACK_IMPORTED_MODULE_2__["PatchBuilder"]('/spec').buildAddObjectKeysPatches({ description, bootMACAddress }, host.spec),
        ...new _console_shared_src_k8s__WEBPACK_IMPORTED_MODULE_2__["PatchBuilder"]('/spec/bmc').buildAddObjectKeysPatches({ address: BMCAddress, credentialsName: Object(_objects_bare_metal_host__WEBPACK_IMPORTED_MODULE_7__["getSecretName"])(name), disableCertificateVerification }, host.spec.bmc),
    ];
    if (patches.length > 0) {
        yield Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_0__["k8sPatch"])(_models__WEBPACK_IMPORTED_MODULE_4__["BareMetalHostModel"], host, patches);
    }
});


/***/ }),

/***/ "./packages/metal3-plugin/src/selectors/machine-set.ts":
/*!*************************************************************!*\
  !*** ./packages/metal3-plugin/src/selectors/machine-set.ts ***!
  \*************************************************************/
/*! exports provided: findMachineSet, getReplicas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findMachineSet", function() { return findMachineSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getReplicas", function() { return getReplicas; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _console_shared_src__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/shared/src */ "./packages/console-shared/src/index.ts");


const findMachineSet = (machineSets, uid) => uid && machineSets ? machineSets.find((machineSet) => Object(_console_shared_src__WEBPACK_IMPORTED_MODULE_1__["getUID"])(machineSet) === uid) : null;
const getReplicas = (machineSet, defaultValue = 0) => lodash__WEBPACK_IMPORTED_MODULE_0__["has"](machineSet, 'spec') ? machineSet.spec.replicas : defaultValue;


/***/ }),

/***/ "./packages/metal3-plugin/src/selectors/machine.ts":
/*!*********************************************************!*\
  !*** ./packages/metal3-plugin/src/selectors/machine.ts ***!
  \*********************************************************/
/*! exports provided: getMachineMachineSetOwner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMachineMachineSetOwner", function() { return getMachineMachineSetOwner; });
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _console_internal_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/internal/models */ "./public/models/index.ts");
/* harmony import */ var _console_shared_src__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/shared/src */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _console_shared_src_utils_owner_references__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/shared/src/utils/owner-references */ "./packages/console-shared/src/utils/owner-references.ts");




const getMachineMachineSetOwner = (machine) => {
    const desiredReference = {
        apiVersion: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_0__["apiVersionForModel"])(_console_internal_models__WEBPACK_IMPORTED_MODULE_1__["MachineSetModel"]),
        kind: _console_internal_models__WEBPACK_IMPORTED_MODULE_1__["MachineSetModel"].kind,
    };
    return (Object(_console_shared_src__WEBPACK_IMPORTED_MODULE_2__["getOwnerReferences"])(machine) || []).find((reference) => Object(_console_shared_src_utils_owner_references__WEBPACK_IMPORTED_MODULE_3__["compareOwnerReference"])(desiredReference, reference, true));
};


/***/ })

}]);
//# sourceMappingURL=metal3-baremetalhost~metal3-baremetalhosts-655136581ed88161eb04.js.map