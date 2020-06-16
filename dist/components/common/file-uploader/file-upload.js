"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FileUpload = exports["default"] = exports.WarningMsg = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _uploadButton = _interopRequireDefault(require("./upload-button"));

var _icons = require("../icons");

var _loadingSpinner = _interopRequireDefault(require("../loading-spinner"));

var _fileDrop = _interopRequireDefault(require("./file-drop"));

var _utils = require("../../../utils/utils");

var _userGuides = require("../../../constants/user-guides");

var _reactMarkdown = _interopRequireDefault(require("react-markdown"));

var _mediaBreakpoints = require("../../../styles/media-breakpoints");

var _reactIntl = require("react-intl");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _templateObject19() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  margin: 0 auto;\n"]);

  _templateObject19 = function _templateObject19() {
    return data;
  };

  return data;
}

function _templateObject18() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n    margin-bottom: 16px;\n  "]);

  _templateObject18 = function _templateObject18() {
    return data;
  };

  return data;
}

function _templateObject17() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n    margin-bottom: 24px;\n  "]);

  _templateObject17 = function _templateObject17() {
    return data;
  };

  return data;
}

function _templateObject16() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  margin-bottom: 32px;\n  ", ";\n  ", "\n"]);

  _templateObject16 = function _templateObject16() {
    return data;
  };

  return data;
}

function _templateObject15() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 32px;\n\n  .loading-action {\n    margin-right: 10px;\n  }\n  .loading-spinner {\n    margin-left: 10px;\n  }\n"]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  .file-drop {\n    position: relative;\n  }\n"]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n    margin-bottom: 8px;\n  "]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n    margin-bottom: 16px;\n  "]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  margin-bottom: 24px;\n  ", ";\n  ", ";\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n    margin-bottom: 8px;\n  "]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n    margin-bottom: 16px;\n  "]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  color: ", ";\n  margin-bottom: 48px;\n\n  ", ";\n  ", ";\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  color: ", ";\n  font-size: 20px;\n  height: 36px;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n    padding: 16px 4px 0;\n  "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  background-color: white;\n  border-radius: 4px;\n  border-style: dashed;\n  border-width: 1px;\n  border-color: ", ";\n  text-align: center;\n  width: 100%;\n  padding: 48px 8px 0;\n\n  .file-upload-or {\n    color: ", ";\n    padding-right: 4px;\n  }\n\n  ", ";\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: inline-block;\n  color: ", ";\n  font-weight: 500;\n  margin-right: 8px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  margin-top: 10px;\n  color: ", ";\n  font-weight: 500;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n    font-size: 12px;\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  color: ", ";\n  font-size: 14px;\n  margin-bottom: 12px;\n\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

// File.type is not reliable if the OS does not have a
// registered mapping for the extension.
// NOTE: Shapefiles must be in a compressed format since
// it requires multiple files to be present.
var defaultValidFileExt = ['csv', 'json', 'geojson'];
var fileIconColor = '#D3D8E0';

var LinkRenderer = function LinkRenderer(props) {
  return /*#__PURE__*/_react["default"].createElement("a", {
    href: props.href,
    target: "_blank",
    rel: "noopener noreferrer"
  }, props.children);
};

var StyledUploadMessage = _styledComponents["default"].div(_templateObject(), function (props) {
  return props.theme.textColorLT;
}, _mediaBreakpoints.media.portable(_templateObject2()));

var WarningMsg = _styledComponents["default"].span(_templateObject3(), function (props) {
  return props.theme.errorColor;
});

exports.WarningMsg = WarningMsg;

var PositiveMsg = _styledComponents["default"].span(_templateObject4(), function (props) {
  return props.theme.primaryBtnActBgd;
});

var StyledFileDrop = _styledComponents["default"].div(_templateObject5(), function (props) {
  return props.theme.subtextColorLT;
}, function (props) {
  return props.theme.linkBtnColor;
}, _mediaBreakpoints.media.portable(_templateObject6()));

var MsgWrapper = _styledComponents["default"].div(_templateObject7(), function (props) {
  return props.theme.modalTitleColor;
});

var StyledDragNDropIcon = _styledComponents["default"].div(_templateObject8(), fileIconColor, _mediaBreakpoints.media.portable(_templateObject9()), _mediaBreakpoints.media.palm(_templateObject10()));

var StyledFileTypeFow = _styledComponents["default"].div(_templateObject11(), _mediaBreakpoints.media.portable(_templateObject12()), _mediaBreakpoints.media.palm(_templateObject13()));

var StyledFileUpload = _styledComponents["default"].div(_templateObject14());

var StyledMessage = _styledComponents["default"].div(_templateObject15());

var StyledDragFileWrapper = _styledComponents["default"].div(_templateObject16(), _mediaBreakpoints.media.portable(_templateObject17()), _mediaBreakpoints.media.portable(_templateObject18()));

var StyledDisclaimer = (0, _styledComponents["default"])(StyledMessage)(_templateObject19());

function FileUploadFactory() {
  var FileUpload = /*#__PURE__*/function (_Component) {
    (0, _inherits2["default"])(FileUpload, _Component);

    var _super = _createSuper(FileUpload);

    function FileUpload() {
      var _this;

      (0, _classCallCheck2["default"])(this, FileUpload);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
        dragOver: false,
        fileLoading: false,
        files: [],
        errorFiles: []
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "frame", /*#__PURE__*/(0, _react.createRef)());
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_isValidFileType", function (filename) {
        var validFileExt = _this.props.validFileExt;
        var fileExt = validFileExt.find(function (ext) {
          return filename.endsWith(ext);
        });
        return Boolean(fileExt);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_handleFileInput", function (files, e) {
        if (e) {
          e.stopPropagation();
        }

        var nextState = {
          files: [],
          errorFiles: [],
          dragOver: false
        };

        for (var i = 0; i < files.length; i++) {
          var file = files[i];

          if (file && _this._isValidFileType(file.name)) {
            nextState.files.push(file);
          } else {
            nextState.errorFiles.push(file.name);
          }
        }

        _this.setState(nextState, function () {
          return nextState.files.length ? _this.props.onFileUpload(nextState.files) : null;
        });
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_toggleDragState", function (newState) {
        _this.setState({
          dragOver: newState
        });
      });
      return _this;
    }

    (0, _createClass2["default"])(FileUpload, [{
      key: "_renderMessage",
      value: function _renderMessage() {
        var _this$state = this.state,
            errorFiles = _this$state.errorFiles,
            files = _this$state.files;

        if (errorFiles.length) {
          return /*#__PURE__*/_react["default"].createElement(WarningMsg, null, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
            id: 'fileUploader.filenNotSupported',
            values: {
              errorFiles: errorFiles.join(', ')
            }
          }));
        } else if (this.props.fileLoading && files.length) {
          return /*#__PURE__*/_react["default"].createElement(StyledMessage, {
            className: "file-uploader__message"
          }, /*#__PURE__*/_react["default"].createElement("div", {
            className: "loading-action"
          }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
            id: 'fileUploader.uploading'
          })), /*#__PURE__*/_react["default"].createElement("div", null, files.map(function (f, i) {
            return /*#__PURE__*/_react["default"].createElement(PositiveMsg, {
              key: i
            }, f.name);
          }), "..."), /*#__PURE__*/_react["default"].createElement("div", {
            className: "loading-spinner"
          }, /*#__PURE__*/_react["default"].createElement(_loadingSpinner["default"], {
            size: 20
          })));
        }

        return null;
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;

        var _this$state2 = this.state,
            dragOver = _this$state2.dragOver,
            files = _this$state2.files;
        var _this$props = this.props,
            validFileExt = _this$props.validFileExt,
            intl = _this$props.intl;
        return /*#__PURE__*/_react["default"].createElement(StyledFileUpload, {
          className: "file-uploader",
          ref: this.frame
        }, _fileDrop["default"] ? /*#__PURE__*/_react["default"].createElement(_fileDrop["default"], {
          frame: this.frame.current || document,
          onDragOver: function onDragOver() {
            return _this2._toggleDragState(true);
          },
          onDragLeave: function onDragLeave() {
            return _this2._toggleDragState(false);
          },
          onDrop: this._handleFileInput,
          className: "file-uploader__file-drop"
        }, /*#__PURE__*/_react["default"].createElement(StyledUploadMessage, {
          className: "file-upload__message"
        }, /*#__PURE__*/_react["default"].createElement(_reactMarkdown["default"], {
          source: "".concat(intl.formatMessage({
            id: 'fileUploader.configUploadMessage'
          }), "(").concat(_userGuides.GUIDES_FILE_FORMAT_DOC, ")."),
          renderers: {
            link: LinkRenderer
          }
        })), /*#__PURE__*/_react["default"].createElement(StyledFileDrop, {
          dragOver: dragOver
        }, /*#__PURE__*/_react["default"].createElement("div", {
          style: {
            opacity: dragOver ? 0.5 : 1
          }
        }, /*#__PURE__*/_react["default"].createElement(StyledDragNDropIcon, null, /*#__PURE__*/_react["default"].createElement(StyledFileTypeFow, {
          className: "file-type-row"
        }, validFileExt.map(function (ext) {
          return /*#__PURE__*/_react["default"].createElement(_icons.FileType, {
            key: ext,
            ext: ext,
            height: "50px",
            fontSize: "9px"
          });
        })), /*#__PURE__*/_react["default"].createElement(_icons.DragNDrop, {
          height: "44px"
        })), /*#__PURE__*/_react["default"].createElement("div", null, this._renderMessage())), !files.length ? /*#__PURE__*/_react["default"].createElement(StyledDragFileWrapper, null, /*#__PURE__*/_react["default"].createElement(MsgWrapper, null, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
          id: 'fileUploader.message'
        })), /*#__PURE__*/_react["default"].createElement("span", {
          className: "file-upload-or"
        }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
          id: 'fileUploader.or'
        })), /*#__PURE__*/_react["default"].createElement(_uploadButton["default"], {
          onUpload: this._handleFileInput
        }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
          id: 'fileUploader.browseFiles'
        }))) : null, /*#__PURE__*/_react["default"].createElement(StyledDisclaimer, null, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
          id: 'fileUploader.disclaimer'
        })))) : null, /*#__PURE__*/_react["default"].createElement(WarningMsg, null, (0, _utils.isChrome)() ? /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
          id: 'fileUploader.chromeMessage'
        }) : ''));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function getDerivedStateFromProps(props, state) {
        if (state.fileLoading && props.fileLoading === false && state.files.length) {
          return {
            files: [],
            fileLoading: props.fileLoading
          };
        }

        return {
          fileLoading: props.fileLoading
        };
      }
    }]);
    return FileUpload;
  }(_react.Component);

  (0, _defineProperty2["default"])(FileUpload, "propTypes", {
    onFileUpload: _propTypes["default"].func.isRequired,
    validFileExt: _propTypes["default"].arrayOf(_propTypes["default"].string),
    fileLoading: _propTypes["default"].bool
  });
  (0, _defineProperty2["default"])(FileUpload, "defaultProps", {
    validFileExt: defaultValidFileExt
  });
  return (0, _reactIntl.injectIntl)(FileUpload);
}

var _default = FileUploadFactory;
exports["default"] = _default;
var FileUpload = FileUploadFactory();
exports.FileUpload = FileUpload;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9maWxlLXVwbG9hZGVyL2ZpbGUtdXBsb2FkLmpzIl0sIm5hbWVzIjpbImRlZmF1bHRWYWxpZEZpbGVFeHQiLCJmaWxlSWNvbkNvbG9yIiwiTGlua1JlbmRlcmVyIiwicHJvcHMiLCJocmVmIiwiY2hpbGRyZW4iLCJTdHlsZWRVcGxvYWRNZXNzYWdlIiwic3R5bGVkIiwiZGl2IiwidGhlbWUiLCJ0ZXh0Q29sb3JMVCIsIm1lZGlhIiwicG9ydGFibGUiLCJXYXJuaW5nTXNnIiwic3BhbiIsImVycm9yQ29sb3IiLCJQb3NpdGl2ZU1zZyIsInByaW1hcnlCdG5BY3RCZ2QiLCJTdHlsZWRGaWxlRHJvcCIsInN1YnRleHRDb2xvckxUIiwibGlua0J0bkNvbG9yIiwiTXNnV3JhcHBlciIsIm1vZGFsVGl0bGVDb2xvciIsIlN0eWxlZERyYWdORHJvcEljb24iLCJwYWxtIiwiU3R5bGVkRmlsZVR5cGVGb3ciLCJTdHlsZWRGaWxlVXBsb2FkIiwiU3R5bGVkTWVzc2FnZSIsIlN0eWxlZERyYWdGaWxlV3JhcHBlciIsIlN0eWxlZERpc2NsYWltZXIiLCJGaWxlVXBsb2FkRmFjdG9yeSIsIkZpbGVVcGxvYWQiLCJkcmFnT3ZlciIsImZpbGVMb2FkaW5nIiwiZmlsZXMiLCJlcnJvckZpbGVzIiwiZmlsZW5hbWUiLCJ2YWxpZEZpbGVFeHQiLCJmaWxlRXh0IiwiZmluZCIsImV4dCIsImVuZHNXaXRoIiwiQm9vbGVhbiIsImUiLCJzdG9wUHJvcGFnYXRpb24iLCJuZXh0U3RhdGUiLCJpIiwibGVuZ3RoIiwiZmlsZSIsIl9pc1ZhbGlkRmlsZVR5cGUiLCJuYW1lIiwicHVzaCIsInNldFN0YXRlIiwib25GaWxlVXBsb2FkIiwibmV3U3RhdGUiLCJzdGF0ZSIsImpvaW4iLCJtYXAiLCJmIiwiaW50bCIsImZyYW1lIiwiRmlsZURyb3AiLCJjdXJyZW50IiwiZG9jdW1lbnQiLCJfdG9nZ2xlRHJhZ1N0YXRlIiwiX2hhbmRsZUZpbGVJbnB1dCIsImZvcm1hdE1lc3NhZ2UiLCJpZCIsIkdVSURFU19GSUxFX0ZPUk1BVF9ET0MiLCJsaW5rIiwib3BhY2l0eSIsIl9yZW5kZXJNZXNzYWdlIiwiQ29tcG9uZW50IiwiUHJvcFR5cGVzIiwiZnVuYyIsImlzUmVxdWlyZWQiLCJhcnJheU9mIiwic3RyaW5nIiwiYm9vbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFNQSxtQkFBbUIsR0FBRyxDQUFDLEtBQUQsRUFBUSxNQUFSLEVBQWdCLFNBQWhCLENBQTVCO0FBRUEsSUFBTUMsYUFBYSxHQUFHLFNBQXRCOztBQUVBLElBQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUFDLEtBQUssRUFBSTtBQUM1QixzQkFDRTtBQUFHLElBQUEsSUFBSSxFQUFFQSxLQUFLLENBQUNDLElBQWY7QUFBcUIsSUFBQSxNQUFNLEVBQUMsUUFBNUI7QUFBcUMsSUFBQSxHQUFHLEVBQUM7QUFBekMsS0FDR0QsS0FBSyxDQUFDRSxRQURULENBREY7QUFLRCxDQU5EOztBQU9BLElBQU1DLG1CQUFtQixHQUFHQyw2QkFBT0MsR0FBVixvQkFDZCxVQUFBTCxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDTSxLQUFOLENBQVlDLFdBQWhCO0FBQUEsQ0FEUyxFQUtyQkMsd0JBQU1DLFFBTGUscUJBQXpCOztBQVVP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QkFBVytCLFVBQVgsQ0FBUDtBQUNEOztlQUVjRCxpQjs7QUFDUixJQUFNQyxVQUFVLEdBQUdELGlCQUFpQixFQUFwQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMCBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudCwgY3JlYXRlUmVmfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuaW1wb3J0IFVwbG9hZEJ1dHRvbiBmcm9tICcuL3VwbG9hZC1idXR0b24nO1xyXG5pbXBvcnQge0RyYWdORHJvcCwgRmlsZVR5cGV9IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL2ljb25zJztcclxuaW1wb3J0IExvYWRpbmdTcGlubmVyIGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL2xvYWRpbmctc3Bpbm5lcic7XHJcbmltcG9ydCBGaWxlRHJvcCBmcm9tICcuL2ZpbGUtZHJvcCc7XHJcblxyXG5pbXBvcnQge2lzQ2hyb21lfSBmcm9tICd1dGlscy91dGlscyc7XHJcbmltcG9ydCB7R1VJREVTX0ZJTEVfRk9STUFUX0RPQ30gZnJvbSAnY29uc3RhbnRzL3VzZXItZ3VpZGVzJztcclxuaW1wb3J0IFJlYWN0TWFya2Rvd24gZnJvbSAncmVhY3QtbWFya2Rvd24nO1xyXG4vLyBCcmVha3BvaW50c1xyXG5pbXBvcnQge21lZGlhfSBmcm9tICdzdHlsZXMvbWVkaWEtYnJlYWtwb2ludHMnO1xyXG5pbXBvcnQge0Zvcm1hdHRlZE1lc3NhZ2UsIGluamVjdEludGx9IGZyb20gJ3JlYWN0LWludGwnO1xyXG5cclxuLy8gRmlsZS50eXBlIGlzIG5vdCByZWxpYWJsZSBpZiB0aGUgT1MgZG9lcyBub3QgaGF2ZSBhXHJcbi8vIHJlZ2lzdGVyZWQgbWFwcGluZyBmb3IgdGhlIGV4dGVuc2lvbi5cclxuLy8gTk9URTogU2hhcGVmaWxlcyBtdXN0IGJlIGluIGEgY29tcHJlc3NlZCBmb3JtYXQgc2luY2VcclxuLy8gaXQgcmVxdWlyZXMgbXVsdGlwbGUgZmlsZXMgdG8gYmUgcHJlc2VudC5cclxuY29uc3QgZGVmYXVsdFZhbGlkRmlsZUV4dCA9IFsnY3N2JywgJ2pzb24nLCAnZ2VvanNvbiddO1xyXG5cclxuY29uc3QgZmlsZUljb25Db2xvciA9ICcjRDNEOEUwJztcclxuXHJcbmNvbnN0IExpbmtSZW5kZXJlciA9IHByb3BzID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGEgaHJlZj17cHJvcHMuaHJlZn0gdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPlxyXG4gICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICA8L2E+XHJcbiAgKTtcclxufTtcclxuY29uc3QgU3R5bGVkVXBsb2FkTWVzc2FnZSA9IHN0eWxlZC5kaXZgXHJcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudGV4dENvbG9yTFR9O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG5cclxuICAke21lZGlhLnBvcnRhYmxlYFxyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgV2FybmluZ01zZyA9IHN0eWxlZC5zcGFuYFxyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuZXJyb3JDb2xvcn07XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuYDtcclxuXHJcbmNvbnN0IFBvc2l0aXZlTXNnID0gc3R5bGVkLnNwYW5gXHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnByaW1hcnlCdG5BY3RCZ2R9O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbmA7XHJcblxyXG5jb25zdCBTdHlsZWRGaWxlRHJvcCA9IHN0eWxlZC5kaXZgXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGJvcmRlci1zdHlsZTogZGFzaGVkO1xyXG4gIGJvcmRlci13aWR0aDogMXB4O1xyXG4gIGJvcmRlci1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5zdWJ0ZXh0Q29sb3JMVH07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDQ4cHggOHB4IDA7XHJcblxyXG4gIC5maWxlLXVwbG9hZC1vciB7XHJcbiAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5saW5rQnRuQ29sb3J9O1xyXG4gICAgcGFkZGluZy1yaWdodDogNHB4O1xyXG4gIH1cclxuXHJcbiAgJHttZWRpYS5wb3J0YWJsZWBcclxuICAgIHBhZGRpbmc6IDE2cHggNHB4IDA7XHJcbiAgYH07XHJcbmA7XHJcblxyXG5jb25zdCBNc2dXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5tb2RhbFRpdGxlQ29sb3J9O1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBoZWlnaHQ6IDM2cHg7XHJcbmA7XHJcblxyXG5jb25zdCBTdHlsZWREcmFnTkRyb3BJY29uID0gc3R5bGVkLmRpdmBcclxuICBjb2xvcjogJHtmaWxlSWNvbkNvbG9yfTtcclxuICBtYXJnaW4tYm90dG9tOiA0OHB4O1xyXG5cclxuICAke21lZGlhLnBvcnRhYmxlYFxyXG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuICBgfTtcclxuICAke21lZGlhLnBhbG1gXHJcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgYH07XHJcbmA7XHJcblxyXG5jb25zdCBTdHlsZWRGaWxlVHlwZUZvdyA9IHN0eWxlZC5kaXZgXHJcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcclxuICAke21lZGlhLnBvcnRhYmxlYFxyXG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuICBgfTtcclxuICAke21lZGlhLnBhbG1gXHJcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgYH07XHJcbmA7XHJcblxyXG5jb25zdCBTdHlsZWRGaWxlVXBsb2FkID0gc3R5bGVkLmRpdmBcclxuICAuZmlsZS1kcm9wIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBTdHlsZWRNZXNzYWdlID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzJweDtcclxuXHJcbiAgLmxvYWRpbmctYWN0aW9uIHtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICB9XHJcbiAgLmxvYWRpbmctc3Bpbm5lciB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBTdHlsZWREcmFnRmlsZVdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIG1hcmdpbi1ib3R0b206IDMycHg7XHJcbiAgJHttZWRpYS5wb3J0YWJsZWBcclxuICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XHJcbiAgYH07XHJcbiAgJHttZWRpYS5wb3J0YWJsZWBcclxuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgYH1cclxuYDtcclxuXHJcbmNvbnN0IFN0eWxlZERpc2NsYWltZXIgPSBzdHlsZWQoU3R5bGVkTWVzc2FnZSlgXHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbmA7XHJcblxyXG5mdW5jdGlvbiBGaWxlVXBsb2FkRmFjdG9yeSgpIHtcclxuICBjbGFzcyBGaWxlVXBsb2FkIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XHJcbiAgICAgIG9uRmlsZVVwbG9hZDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICAgICAgdmFsaWRGaWxlRXh0OiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc3RyaW5nKSxcclxuICAgICAgZmlsZUxvYWRpbmc6IFByb3BUeXBlcy5ib29sXHJcbiAgICB9O1xyXG5cclxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XHJcbiAgICAgIHZhbGlkRmlsZUV4dDogZGVmYXVsdFZhbGlkRmlsZUV4dFxyXG4gICAgfTtcclxuXHJcbiAgICBzdGF0ZSA9IHtcclxuICAgICAgZHJhZ092ZXI6IGZhbHNlLFxyXG4gICAgICBmaWxlTG9hZGluZzogZmFsc2UsXHJcbiAgICAgIGZpbGVzOiBbXSxcclxuICAgICAgZXJyb3JGaWxlczogW11cclxuICAgIH07XHJcblxyXG4gICAgc3RhdGljIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyhwcm9wcywgc3RhdGUpIHtcclxuICAgICAgaWYgKHN0YXRlLmZpbGVMb2FkaW5nICYmIHByb3BzLmZpbGVMb2FkaW5nID09PSBmYWxzZSAmJiBzdGF0ZS5maWxlcy5sZW5ndGgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgZmlsZXM6IFtdLFxyXG4gICAgICAgICAgZmlsZUxvYWRpbmc6IHByb3BzLmZpbGVMb2FkaW5nXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGZpbGVMb2FkaW5nOiBwcm9wcy5maWxlTG9hZGluZ1xyXG4gICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGZyYW1lID0gY3JlYXRlUmVmKCk7XHJcblxyXG4gICAgX2lzVmFsaWRGaWxlVHlwZSA9IGZpbGVuYW1lID0+IHtcclxuICAgICAgY29uc3Qge3ZhbGlkRmlsZUV4dH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICBjb25zdCBmaWxlRXh0ID0gdmFsaWRGaWxlRXh0LmZpbmQoZXh0ID0+IGZpbGVuYW1lLmVuZHNXaXRoKGV4dCkpO1xyXG5cclxuICAgICAgcmV0dXJuIEJvb2xlYW4oZmlsZUV4dCk7XHJcbiAgICB9O1xyXG5cclxuICAgIF9oYW5kbGVGaWxlSW5wdXQgPSAoZmlsZXMsIGUpID0+IHtcclxuICAgICAgaWYgKGUpIHtcclxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBuZXh0U3RhdGUgPSB7ZmlsZXM6IFtdLCBlcnJvckZpbGVzOiBbXSwgZHJhZ092ZXI6IGZhbHNlfTtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWxlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IGZpbGUgPSBmaWxlc1tpXTtcclxuXHJcbiAgICAgICAgaWYgKGZpbGUgJiYgdGhpcy5faXNWYWxpZEZpbGVUeXBlKGZpbGUubmFtZSkpIHtcclxuICAgICAgICAgIG5leHRTdGF0ZS5maWxlcy5wdXNoKGZpbGUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBuZXh0U3RhdGUuZXJyb3JGaWxlcy5wdXNoKGZpbGUubmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLnNldFN0YXRlKG5leHRTdGF0ZSwgKCkgPT5cclxuICAgICAgICBuZXh0U3RhdGUuZmlsZXMubGVuZ3RoID8gdGhpcy5wcm9wcy5vbkZpbGVVcGxvYWQobmV4dFN0YXRlLmZpbGVzKSA6IG51bGxcclxuICAgICAgKTtcclxuICAgIH07XHJcblxyXG4gICAgX3RvZ2dsZURyYWdTdGF0ZSA9IG5ld1N0YXRlID0+IHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7ZHJhZ092ZXI6IG5ld1N0YXRlfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIF9yZW5kZXJNZXNzYWdlKCkge1xyXG4gICAgICBjb25zdCB7ZXJyb3JGaWxlcywgZmlsZXN9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgaWYgKGVycm9yRmlsZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxXYXJuaW5nTXNnPlxyXG4gICAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZVxyXG4gICAgICAgICAgICAgIGlkPXsnZmlsZVVwbG9hZGVyLmZpbGVuTm90U3VwcG9ydGVkJ31cclxuICAgICAgICAgICAgICB2YWx1ZXM9e3tlcnJvckZpbGVzOiBlcnJvckZpbGVzLmpvaW4oJywgJyl9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9XYXJuaW5nTXNnPlxyXG4gICAgICAgICk7XHJcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5wcm9wcy5maWxlTG9hZGluZyAmJiBmaWxlcy5sZW5ndGgpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPFN0eWxlZE1lc3NhZ2UgY2xhc3NOYW1lPVwiZmlsZS11cGxvYWRlcl9fbWVzc2FnZVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRpbmctYWN0aW9uXCI+XHJcbiAgICAgICAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2UgaWQ9eydmaWxlVXBsb2FkZXIudXBsb2FkaW5nJ30gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAge2ZpbGVzLm1hcCgoZiwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPFBvc2l0aXZlTXNnIGtleT17aX0+e2YubmFtZX08L1Bvc2l0aXZlTXNnPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgIC4uLlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkaW5nLXNwaW5uZXJcIj5cclxuICAgICAgICAgICAgICA8TG9hZGluZ1NwaW5uZXIgc2l6ZT17MjB9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9TdHlsZWRNZXNzYWdlPlxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgY29uc3Qge2RyYWdPdmVyLCBmaWxlc30gPSB0aGlzLnN0YXRlO1xyXG4gICAgICBjb25zdCB7dmFsaWRGaWxlRXh0LCBpbnRsfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxTdHlsZWRGaWxlVXBsb2FkIGNsYXNzTmFtZT1cImZpbGUtdXBsb2FkZXJcIiByZWY9e3RoaXMuZnJhbWV9PlxyXG4gICAgICAgICAge0ZpbGVEcm9wID8gKFxyXG4gICAgICAgICAgICA8RmlsZURyb3BcclxuICAgICAgICAgICAgICBmcmFtZT17dGhpcy5mcmFtZS5jdXJyZW50IHx8IGRvY3VtZW50fVxyXG4gICAgICAgICAgICAgIG9uRHJhZ092ZXI9eygpID0+IHRoaXMuX3RvZ2dsZURyYWdTdGF0ZSh0cnVlKX1cclxuICAgICAgICAgICAgICBvbkRyYWdMZWF2ZT17KCkgPT4gdGhpcy5fdG9nZ2xlRHJhZ1N0YXRlKGZhbHNlKX1cclxuICAgICAgICAgICAgICBvbkRyb3A9e3RoaXMuX2hhbmRsZUZpbGVJbnB1dH1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmaWxlLXVwbG9hZGVyX19maWxlLWRyb3BcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPFN0eWxlZFVwbG9hZE1lc3NhZ2UgY2xhc3NOYW1lPVwiZmlsZS11cGxvYWRfX21lc3NhZ2VcIj5cclxuICAgICAgICAgICAgICAgIDxSZWFjdE1hcmtkb3duXHJcbiAgICAgICAgICAgICAgICAgIHNvdXJjZT17YCR7aW50bC5mb3JtYXRNZXNzYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogJ2ZpbGVVcGxvYWRlci5jb25maWdVcGxvYWRNZXNzYWdlJ1xyXG4gICAgICAgICAgICAgICAgICB9KX0oJHtHVUlERVNfRklMRV9GT1JNQVRfRE9DfSkuYH1cclxuICAgICAgICAgICAgICAgICAgcmVuZGVyZXJzPXt7bGluazogTGlua1JlbmRlcmVyfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9TdHlsZWRVcGxvYWRNZXNzYWdlPlxyXG4gICAgICAgICAgICAgIDxTdHlsZWRGaWxlRHJvcCBkcmFnT3Zlcj17ZHJhZ092ZXJ9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e29wYWNpdHk6IGRyYWdPdmVyID8gMC41IDogMX19PlxyXG4gICAgICAgICAgICAgICAgICA8U3R5bGVkRHJhZ05Ecm9wSWNvbj5cclxuICAgICAgICAgICAgICAgICAgICA8U3R5bGVkRmlsZVR5cGVGb3cgY2xhc3NOYW1lPVwiZmlsZS10eXBlLXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAge3ZhbGlkRmlsZUV4dC5tYXAoZXh0ID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZpbGVUeXBlIGtleT17ZXh0fSBleHQ9e2V4dH0gaGVpZ2h0PVwiNTBweFwiIGZvbnRTaXplPVwiOXB4XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvU3R5bGVkRmlsZVR5cGVGb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgPERyYWdORHJvcCBoZWlnaHQ9XCI0NHB4XCIgLz5cclxuICAgICAgICAgICAgICAgICAgPC9TdHlsZWREcmFnTkRyb3BJY29uPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2Pnt0aGlzLl9yZW5kZXJNZXNzYWdlKCl9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHshZmlsZXMubGVuZ3RoID8gKFxyXG4gICAgICAgICAgICAgICAgICA8U3R5bGVkRHJhZ0ZpbGVXcmFwcGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNc2dXcmFwcGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2UgaWQ9eydmaWxlVXBsb2FkZXIubWVzc2FnZSd9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Nc2dXcmFwcGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZpbGUtdXBsb2FkLW9yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZSBpZD17J2ZpbGVVcGxvYWRlci5vcid9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxVcGxvYWRCdXR0b24gb25VcGxvYWQ9e3RoaXMuX2hhbmRsZUZpbGVJbnB1dH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZSBpZD17J2ZpbGVVcGxvYWRlci5icm93c2VGaWxlcyd9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9VcGxvYWRCdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvU3R5bGVkRHJhZ0ZpbGVXcmFwcGVyPlxyXG4gICAgICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICA8U3R5bGVkRGlzY2xhaW1lcj5cclxuICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2UgaWQ9eydmaWxlVXBsb2FkZXIuZGlzY2xhaW1lcid9IC8+XHJcbiAgICAgICAgICAgICAgICA8L1N0eWxlZERpc2NsYWltZXI+XHJcbiAgICAgICAgICAgICAgPC9TdHlsZWRGaWxlRHJvcD5cclxuICAgICAgICAgICAgPC9GaWxlRHJvcD5cclxuICAgICAgICAgICkgOiBudWxsfVxyXG5cclxuICAgICAgICAgIDxXYXJuaW5nTXNnPlxyXG4gICAgICAgICAgICB7aXNDaHJvbWUoKSA/IDxGb3JtYXR0ZWRNZXNzYWdlIGlkPXsnZmlsZVVwbG9hZGVyLmNocm9tZU1lc3NhZ2UnfSAvPiA6ICcnfVxyXG4gICAgICAgICAgPC9XYXJuaW5nTXNnPlxyXG4gICAgICAgIDwvU3R5bGVkRmlsZVVwbG9hZD5cclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBpbmplY3RJbnRsKEZpbGVVcGxvYWQpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGaWxlVXBsb2FkRmFjdG9yeTtcclxuZXhwb3J0IGNvbnN0IEZpbGVVcGxvYWQgPSBGaWxlVXBsb2FkRmFjdG9yeSgpO1xyXG4iXX0=