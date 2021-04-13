(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[40],{

/***/ "./public/components/droppable-edit-yaml.tsx":
/*!***************************************************!*\
  !*** ./public/components/droppable-edit-yaml.tsx ***!
  \***************************************************/
/*! exports provided: DroppableEditYAML */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DroppableEditYAML", function() { return DroppableEditYAML; });
/* harmony import */ var _utils_drag_drop_context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/drag-drop-context */ "./public/components/utils/drag-drop-context.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _edit_yaml__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-yaml */ "./public/components/edit-yaml.jsx");
/* harmony import */ var react_dnd_html5_backend__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dnd-html5-backend */ "./node_modules/react-dnd-html5-backend/dist/esm/index.js");
/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dnd */ "./node_modules/react-dnd/dist/esm/index.js");





// Maximal file size, in bytes, that user can upload
const maxFileUploadSize = 4000000;
const fileSizeErrorMsg = 'Maximum file size exceeded. File limit is 4MB.';
const fileTypeErrorMsg = 'Binary file detected. Edit text based YAML files only.';
const boxTarget = {
    drop(props, monitor) {
        if (props.onDrop && monitor.isOver()) {
            props.onDrop(props, monitor);
        }
    },
};
const EditYAMLComponent = Object(react_dnd__WEBPACK_IMPORTED_MODULE_4__["DropTarget"])(react_dnd_html5_backend__WEBPACK_IMPORTED_MODULE_3__["NativeTypes"].FILE, boxTarget, (connectObj, monitor) => ({
    connectDropTarget: connectObj.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop(),
}))(_edit_yaml__WEBPACK_IMPORTED_MODULE_2__["EditYAML"]);
const DroppableEditYAML = Object(_utils_drag_drop_context__WEBPACK_IMPORTED_MODULE_0__["default"])(class DroppableEditYAML extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
    constructor(props) {
        super(props);
        this.state = {
            fileUpload: '',
            error: '',
        };
        this.handleFileDrop = this.handleFileDrop.bind(this);
    }
    containsNonPrintableCharacters(value) {
        if (!value) {
            return false;
        }
        // eslint-disable-next-line no-control-regex
        return /[\x00-\x09\x0E-\x1F]/.test(value);
    }
    handleFileDrop(item, monitor) {
        if (!monitor) {
            return;
        }
        const [file] = monitor.getItem().files;
        // If unsupported file type is dropped into drop zone, file will be undefined
        if (!file) {
            return;
        }
        // limit size size uploading to 1 mb
        if (file.size <= maxFileUploadSize) {
            const reader = new FileReader();
            reader.onload = () => {
                const input = reader.result;
                if (this.containsNonPrintableCharacters(input)) {
                    this.setState({
                        error: fileTypeErrorMsg,
                    });
                }
                else {
                    this.setState({
                        fileUpload: input,
                        error: '',
                    });
                }
            };
            reader.readAsText(file, 'UTF-8');
        }
        else {
            this.setState({
                error: fileSizeErrorMsg,
            });
        }
    }
    render() {
        const { obj } = this.props;
        const { fileUpload, error } = this.state;
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](EditYAMLComponent, Object.assign({}, this.props, { obj: obj, fileUpload: fileUpload, error: error, onDrop: this.handleFileDrop })));
    }
});


/***/ })

}]);
//# sourceMappingURL=40-8c081c9e9bedbf2001c0.js.map