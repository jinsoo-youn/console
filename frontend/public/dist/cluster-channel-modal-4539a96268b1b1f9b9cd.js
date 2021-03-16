(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cluster-channel-modal"],{

/***/ "./public/components/modals/cluster-channel-modal.tsx":
/*!************************************************************!*\
  !*** ./public/components/modals/cluster-channel-modal.tsx ***!
  \************************************************************/
/*! exports provided: clusterChannelModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clusterChannelModal", function() { return clusterChannelModal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models */ "./public/models/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _factory_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../factory/modal */ "./public/components/factory/modal.tsx");
/* harmony import */ var _module_k8s__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../module/k8s */ "./public/module/k8s/index.ts");






class ClusterChannelModal extends _utils__WEBPACK_IMPORTED_MODULE_3__["PromiseComponent"] {
    constructor(props) {
        super(props);
        this.props = props;
        this._submit = (e) => {
            e.preventDefault();
            const { cv } = this.props;
            const { selectedChannel } = this.state;
            const patch = [{ op: 'add', path: '/spec/channel', value: selectedChannel }];
            this.handlePromise(Object(_module_k8s__WEBPACK_IMPORTED_MODULE_5__["k8sPatch"])(_models__WEBPACK_IMPORTED_MODULE_2__["ClusterVersionModel"], cv, patch)).then(this.props.close);
        };
        this._cancel = () => {
            this.props.close();
        };
        this._change = (selectedChannel) => {
            this.setState({ selectedChannel });
        };
        this.state.selectedChannel = lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](props.cv, 'spec.channel');
    }
    render() {
        const { cv } = this.props;
        const availableChannels = Object(_module_k8s__WEBPACK_IMPORTED_MODULE_5__["getAvailableClusterChannels"])();
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("form", { onSubmit: this._submit, name: "form", className: "modal-content modal-content--no-inner-scroll" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory_modal__WEBPACK_IMPORTED_MODULE_4__["ModalTitle"], null, "Update Channel"),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory_modal__WEBPACK_IMPORTED_MODULE_4__["ModalBody"], null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null, "Select a channel that reflects your desired version. Critical security updates will be delivered to any vulnerable channels."),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "form-group" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", { htmlFor: "channel_dropdown" }, "Select Channel"),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_3__["Dropdown"], { className: "cluster-channel-modal__dropdown", id: "channel_dropdown", items: availableChannels, onChange: this._change, selectedKey: cv.spec.channel, title: "Select Channel" }))),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory_modal__WEBPACK_IMPORTED_MODULE_4__["ModalSubmitFooter"], { errorMessage: this.state.errorMessage, inProgress: this.state.inProgress, submitText: "Save", cancel: this._cancel })));
    }
}
const clusterChannelModal = Object(_factory_modal__WEBPACK_IMPORTED_MODULE_4__["createModalLauncher"])(ClusterChannelModal);


/***/ })

}]);
//# sourceMappingURL=cluster-channel-modal-4539a96268b1b1f9b9cd.js.map