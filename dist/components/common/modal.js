"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ModalFooter = exports.ModalTitle = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactIntl = require("react-intl");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactModal = _interopRequireDefault(require("react-modal"));

var _icons = require("./icons");

var _styledComponents2 = require("./styled-components");

var _mediaBreakpoints = require("../../styles/media-breakpoints");

function _templateObject13() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n    padding-left: 0;\n    padding-right: 0;\n  "]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n    padding-left: 24px;\n    padding-right: 24px;\n  "]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  top: 0;\n  left: 0;\n  transition: ", ";\n  padding-left: 40px;\n  padding-right: 40px;\n\n  ", ";\n\n  ", ";\n\n  :focus {\n    outline: 0;\n  }\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _templateObject10() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  justify-content: flex-end;\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  color: ", ";\n  display: flex;\n  justify-content: flex-end;\n  z-index: ", ";\n  position: absolute;\n  top: 24px;\n  right: 24px;\n\n  :hover {\n    cursor: pointer;\n  }\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n    padding-top: 16px;\n  "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n    padding-top: 24px;\n  "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  width: 100%;\n  left: 0;\n  bottom: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  padding-top: 24px;\n  ", ";\n\n  ", ";\n  z-index: ", ";\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  font-size: ", ";\n  color: ", ";\n  margin-bottom: 10px;\n  position: relative;\n  z-index: ", ";\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  position: relative;\n  z-index: ", ";\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n    max-width: 100vw;\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n    padding: 12px 36px 24px;\n    max-width: 80vw;\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  overflow-y: auto;\n  max-width: 70vw;\n  max-height: 85vh;\n  padding: 24px 72px 40px;\n  position: relative;\n  top: 92px;\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n  background-color: #ffffff;\n  border-radius: 4px;\n  transition: ", ";\n  box-sizing: border-box;\n  font-size: 12px;\n  color: ", ";\n\n  ", "\n\n  ", "\n\n  ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var ModalContentWrapper = _styledComponents["default"].div(_templateObject(), function (props) {
  return props.theme.transition;
}, function (props) {
  return props.theme.labelColorLT;
}, _mediaBreakpoints.media.portable(_templateObject2()), _mediaBreakpoints.media.palm(_templateObject3()), function (props) {
  return props.cssStyle || '';
});

var ModalContent = _styledComponents["default"].div(_templateObject4(), function (props) {
  return props.theme.modalContentZ;
});

var ModalTitle = _styledComponents["default"].div(_templateObject5(), function (props) {
  return props.theme.modalTitleFontSize;
}, function (props) {
  return props.theme.modalTitleColor;
}, function (props) {
  return props.theme.modalTitleZ;
});

exports.ModalTitle = ModalTitle;

var StyledModalFooter = _styledComponents["default"].div(_templateObject6(), _mediaBreakpoints.media.portable(_templateObject7()), _mediaBreakpoints.media.palm(_templateObject8()), function (props) {
  return props.theme.modalFooterZ;
});

var CloseButton = _styledComponents["default"].div(_templateObject9(), function (props) {
  return props.theme.titleColorLT;
}, function (props) {
  return props.theme.modalButtonZ;
});

var FooterActionWrapper = _styledComponents["default"].div(_templateObject10());

var defaultCancelButton = {
  link: true,
  large: true,
  children: 'modal.button.defaultCancel'
};
var defaultConfirmButton = {
  large: true,
  width: '160px',
  children: 'modal.button.defaultConfirm'
};

var ModalFooter = function ModalFooter(_ref) {
  var cancel = _ref.cancel,
      confirm = _ref.confirm,
      cancelButton = _ref.cancelButton,
      confirmButton = _ref.confirmButton;

  var cancelButtonProps = _objectSpread(_objectSpread({}, defaultCancelButton), cancelButton);

  var confirmButtonProps = _objectSpread(_objectSpread({}, defaultConfirmButton), confirmButton);

  return /*#__PURE__*/_react["default"].createElement(StyledModalFooter, {
    className: "modal--footer"
  }, /*#__PURE__*/_react["default"].createElement(FooterActionWrapper, null, /*#__PURE__*/_react["default"].createElement(_styledComponents2.Button, (0, _extends2["default"])({
    className: "modal--footer--cancel-button"
  }, cancelButtonProps, {
    onClick: cancel
  }), /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: cancelButtonProps.children
  })), /*#__PURE__*/_react["default"].createElement(_styledComponents2.Button, (0, _extends2["default"])({
    className: "modal--footer--confirm-button"
  }, confirmButtonProps, {
    onClick: confirm
  }), /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: confirmButtonProps.children
  }))));
};

exports.ModalFooter = ModalFooter;

var ModalDialog = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(ModalDialog, _Component);

  var _super = _createSuper(ModalDialog);

  function ModalDialog() {
    (0, _classCallCheck2["default"])(this, ModalDialog);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(ModalDialog, [{
    key: "render",
    value: function render() {
      var props = this.props;
      return /*#__PURE__*/_react["default"].createElement(_reactModal["default"], (0, _extends2["default"])({
        className: this.props.className
      }, props, {
        ariaHideApp: false,
        style: {
          overlay: _objectSpread({
            backgroundColor: props.theme && props.theme.modalOverlayBgd || 'rgba(0, 0, 0, 0.5)',
            zIndex: props.theme && props.theme.modalOverLayZ || 1000
          }, props.style)
        }
      }), /*#__PURE__*/_react["default"].createElement(ModalContentWrapper, {
        className: "modal--wrapper",
        cssStyle: props.cssStyle,
        footer: props.footer
      }, props.close && /*#__PURE__*/_react["default"].createElement(CloseButton, {
        className: "modal--close",
        onClick: props.onCancel
      }, /*#__PURE__*/_react["default"].createElement(_icons.Delete, {
        height: "14px"
      })), /*#__PURE__*/_react["default"].createElement("div", null, props.title && /*#__PURE__*/_react["default"].createElement(ModalTitle, {
        className: "modal--title"
      }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: props.title
      })), /*#__PURE__*/_react["default"].createElement(ModalContent, {
        className: "modal--body"
      }, props.children), props.footer && /*#__PURE__*/_react["default"].createElement(ModalFooter, {
        cancel: props.onCancel,
        confirm: props.onConfirm,
        cancelButton: props.cancelButton,
        confirmButton: props.confirmButton
      }))));
    }
  }]);
  return ModalDialog;
}(_react.Component);

(0, _defineProperty2["default"])(ModalDialog, "propTypes", {
  footer: _propTypes["default"].bool,
  close: _propTypes["default"].bool,
  onConfirm: _propTypes["default"].func,
  onCancel: _propTypes["default"].func,
  confirmButton: _propTypes["default"].object,
  confirmButtonLabel: _propTypes["default"].string,
  cancelButton: _propTypes["default"].object,
  cancelButtonLabel: _propTypes["default"].string,
  cssStyle: _propTypes["default"].arrayOf(_propTypes["default"].any)
});
(0, _defineProperty2["default"])(ModalDialog, "defaultProps", {
  footer: false,
  close: true,
  onConfirm: function onConfirm() {},
  onCancel: function onCancel() {},
  cancelButton: defaultCancelButton,
  confirmButton: defaultConfirmButton,
  cssStyle: []
});
var StyledModal = (0, _styledComponents["default"])(ModalDialog)(_templateObject11(), function (props) {
  return props.theme.transition;
}, _mediaBreakpoints.media.portable(_templateObject12()), _mediaBreakpoints.media.palm(_templateObject13()));
var _default = StyledModal;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9tb2RhbC5qcyJdLCJuYW1lcyI6WyJNb2RhbENvbnRlbnRXcmFwcGVyIiwic3R5bGVkIiwiZGl2IiwicHJvcHMiLCJ0aGVtZSIsInRyYW5zaXRpb24iLCJsYWJlbENvbG9yTFQiLCJtZWRpYSIsInBvcnRhYmxlIiwicGFsbSIsImNzc1N0eWxlIiwiTW9kYWxDb250ZW50IiwibW9kYWxDb250ZW50WiIsIk1vZGFsVGl0bGUiLCJtb2RhbFRpdGxlRm9udFNpemUiLCJtb2RhbFRpdGxlQ29sb3IiLCJtb2RhbFRpdGxlWiIsIlN0eWxlZE1vZGFsRm9vdGVyIiwibW9kYWxGb290ZXJaIiwiQ2xvc2VCdXR0b24iLCJ0aXRsZUNvbG9yTFQiLCJtb2RhbEJ1dHRvbloiLCJGb290ZXJBY3Rpb25XcmFwcGVyIiwiZGVmYXVsdENhbmNlbEJ1dHRvbiIsImxpbmsiLCJsYXJnZSIsImNoaWxkcmVuIiwiZGVmYXVsdENvbmZpcm1CdXR0b24iLCJ3aWR0aCIsIk1vZGFsRm9vdGVyIiwiY2FuY2VsIiwiY29uZmlybSIsImNhbmNlbEJ1dHRvbiIsImNvbmZpcm1CdXR0b24iLCJjYW5jZWxCdXR0b25Qcm9wcyIsImNvbmZpcm1CdXR0b25Qcm9wcyIsIk1vZGFsRGlhbG9nIiwiY2xhc3NOYW1lIiwib3ZlcmxheSIsImJhY2tncm91bmRDb2xvciIsIm1vZGFsT3ZlcmxheUJnZCIsInpJbmRleCIsIm1vZGFsT3ZlckxheVoiLCJzdHlsZSIsImZvb3RlciIsImNsb3NlIiwib25DYW5jZWwiLCJ0aXRsZSIsIm9uQ29uZmlybSIsIkNvbXBvbmVudCIsIlByb3BUeXBlcyIsImJvb2wiLCJmdW5jIiwib2JqZWN0IiwiY29uZmlybUJ1dHRvbkxhYmVsIiwic3RyaW5nIiwiY2FuY2VsQnV0dG9uTGFiZWwiLCJhcnJheU9mIiwiYW55IiwiU3R5bGVkTW9kYWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9C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LHNCQUFVUSxHQUE1QjtBQVRPLEM7aUNBRGZ0QixXLGtCQWFrQjtBQUNwQlEsRUFBQUEsTUFBTSxFQUFFLEtBRFk7QUFFcEJDLEVBQUFBLEtBQUssRUFBRSxJQUZhO0FBR3BCRyxFQUFBQSxTQUFTLEVBQUUscUJBQU0sQ0FBRSxDQUhDO0FBSXBCRixFQUFBQSxRQUFRLEVBQUUsb0JBQU0sQ0FBRSxDQUpFO0FBS3BCZCxFQUFBQSxZQUFZLEVBQUVULG1CQUxNO0FBTXBCVSxFQUFBQSxhQUFhLEVBQUVOLG9CQU5LO0FBT3BCakIsRUFBQUEsUUFBUSxFQUFFO0FBUFUsQztBQTBEeEIsSUFBTWlELFdBQVcsR0FBRyxrQ0FBT3ZCLFdBQVAsQ0FBSCxzQkFHRCxVQUFBakMsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxVQUFoQjtBQUFBLENBSEosRUFPYkUsd0JBQU1DLFFBUE8sdUJBWWJELHdCQUFNRSxJQVpPLHNCQUFqQjtlQXNCZWtELFciLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHtGb3JtYXR0ZWRNZXNzYWdlfSBmcm9tICdyZWFjdC1pbnRsJztcclxuXHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgTW9kYWwgZnJvbSAncmVhY3QtbW9kYWwnO1xyXG5pbXBvcnQge0RlbGV0ZX0gZnJvbSAnY29tcG9uZW50cy9jb21tb24vaWNvbnMnO1xyXG5pbXBvcnQge0J1dHRvbn0gZnJvbSAnY29tcG9uZW50cy9jb21tb24vc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQge21lZGlhfSBmcm9tICdzdHlsZXMvbWVkaWEtYnJlYWtwb2ludHMnO1xyXG5cclxuY29uc3QgTW9kYWxDb250ZW50V3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICBtYXgtd2lkdGg6IDcwdnc7XHJcbiAgbWF4LWhlaWdodDogODV2aDtcclxuICBwYWRkaW5nOiAyNHB4IDcycHggNDBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiA5MnB4O1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgdHJhbnNpdGlvbjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50cmFuc2l0aW9ufTtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5sYWJlbENvbG9yTFR9O1xyXG5cclxuICAke21lZGlhLnBvcnRhYmxlYFxyXG4gICAgcGFkZGluZzogMTJweCAzNnB4IDI0cHg7XHJcbiAgICBtYXgtd2lkdGg6IDgwdnc7XHJcbiAgYH1cclxuXHJcbiAgJHttZWRpYS5wYWxtYFxyXG4gICAgbWF4LXdpZHRoOiAxMDB2dztcclxuICBgfVxyXG5cclxuICAke3Byb3BzID0+IHByb3BzLmNzc1N0eWxlIHx8ICcnfTtcclxuYDtcclxuXHJcbmNvbnN0IE1vZGFsQ29udGVudCA9IHN0eWxlZC5kaXZgXHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUubW9kYWxDb250ZW50Wn07XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgTW9kYWxUaXRsZSA9IHN0eWxlZC5kaXZgXHJcbiAgZm9udC1zaXplOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLm1vZGFsVGl0bGVGb250U2l6ZX07XHJcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUubW9kYWxUaXRsZUNvbG9yfTtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAke3Byb3BzID0+IHByb3BzLnRoZW1lLm1vZGFsVGl0bGVafTtcclxuYDtcclxuXHJcbmNvbnN0IFN0eWxlZE1vZGFsRm9vdGVyID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMTAwJTtcclxuICBsZWZ0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICBwYWRkaW5nLXRvcDogMjRweDtcclxuICAke21lZGlhLnBvcnRhYmxlYFxyXG4gICAgcGFkZGluZy10b3A6IDI0cHg7XHJcbiAgYH07XHJcblxyXG4gICR7bWVkaWEucGFsbWBcclxuICAgIHBhZGRpbmctdG9wOiAxNnB4O1xyXG4gIGB9O1xyXG4gIHotaW5kZXg6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUubW9kYWxGb290ZXJafTtcclxuYDtcclxuXHJcbmNvbnN0IENsb3NlQnV0dG9uID0gc3R5bGVkLmRpdmBcclxuICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50aXRsZUNvbG9yTFR9O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICB6LWluZGV4OiAke3Byb3BzID0+IHByb3BzLnRoZW1lLm1vZGFsQnV0dG9uWn07XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMjRweDtcclxuICByaWdodDogMjRweDtcclxuXHJcbiAgOmhvdmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBGb290ZXJBY3Rpb25XcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbmA7XHJcblxyXG5jb25zdCBkZWZhdWx0Q2FuY2VsQnV0dG9uID0ge1xyXG4gIGxpbms6IHRydWUsXHJcbiAgbGFyZ2U6IHRydWUsXHJcbiAgY2hpbGRyZW46ICdtb2RhbC5idXR0b24uZGVmYXVsdENhbmNlbCdcclxufTtcclxuXHJcbmNvbnN0IGRlZmF1bHRDb25maXJtQnV0dG9uID0ge1xyXG4gIGxhcmdlOiB0cnVlLFxyXG4gIHdpZHRoOiAnMTYwcHgnLFxyXG4gIGNoaWxkcmVuOiAnbW9kYWwuYnV0dG9uLmRlZmF1bHRDb25maXJtJ1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IE1vZGFsRm9vdGVyID0gKHtjYW5jZWwsIGNvbmZpcm0sIGNhbmNlbEJ1dHRvbiwgY29uZmlybUJ1dHRvbn0pID0+IHtcclxuICBjb25zdCBjYW5jZWxCdXR0b25Qcm9wcyA9IHsuLi5kZWZhdWx0Q2FuY2VsQnV0dG9uLCAuLi5jYW5jZWxCdXR0b259O1xyXG4gIGNvbnN0IGNvbmZpcm1CdXR0b25Qcm9wcyA9IHsuLi5kZWZhdWx0Q29uZmlybUJ1dHRvbiwgLi4uY29uZmlybUJ1dHRvbn07XHJcbiAgcmV0dXJuIChcclxuICAgIDxTdHlsZWRNb2RhbEZvb3RlciBjbGFzc05hbWU9XCJtb2RhbC0tZm9vdGVyXCI+XHJcbiAgICAgIDxGb290ZXJBY3Rpb25XcmFwcGVyPlxyXG4gICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwibW9kYWwtLWZvb3Rlci0tY2FuY2VsLWJ1dHRvblwiIHsuLi5jYW5jZWxCdXR0b25Qcm9wc30gb25DbGljaz17Y2FuY2VsfT5cclxuICAgICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlIGlkPXtjYW5jZWxCdXR0b25Qcm9wcy5jaGlsZHJlbn0gLz5cclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cIm1vZGFsLS1mb290ZXItLWNvbmZpcm0tYnV0dG9uXCIgey4uLmNvbmZpcm1CdXR0b25Qcm9wc30gb25DbGljaz17Y29uZmlybX0+XHJcbiAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZSBpZD17Y29uZmlybUJ1dHRvblByb3BzLmNoaWxkcmVufSAvPlxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L0Zvb3RlckFjdGlvbldyYXBwZXI+XHJcbiAgICA8L1N0eWxlZE1vZGFsRm9vdGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5jbGFzcyBNb2RhbERpYWxvZyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcclxuICAgIGZvb3RlcjogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICBjbG9zZTogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICBvbkNvbmZpcm06IFByb3BUeXBlcy5mdW5jLFxyXG4gICAgb25DYW5jZWw6IFByb3BUeXBlcy5mdW5jLFxyXG4gICAgY29uZmlybUJ1dHRvbjogUHJvcFR5cGVzLm9iamVjdCxcclxuICAgIGNvbmZpcm1CdXR0b25MYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGNhbmNlbEJ1dHRvbjogUHJvcFR5cGVzLm9iamVjdCxcclxuICAgIGNhbmNlbEJ1dHRvbkxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgY3NzU3R5bGU6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5hbnkpXHJcbiAgfTtcclxuXHJcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcclxuICAgIGZvb3RlcjogZmFsc2UsXHJcbiAgICBjbG9zZTogdHJ1ZSxcclxuICAgIG9uQ29uZmlybTogKCkgPT4ge30sXHJcbiAgICBvbkNhbmNlbDogKCkgPT4ge30sXHJcbiAgICBjYW5jZWxCdXR0b246IGRlZmF1bHRDYW5jZWxCdXR0b24sXHJcbiAgICBjb25maXJtQnV0dG9uOiBkZWZhdWx0Q29uZmlybUJ1dHRvbixcclxuICAgIGNzc1N0eWxlOiBbXVxyXG4gIH07XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHtwcm9wc30gPSB0aGlzO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNsYXNzTmFtZX1cclxuICAgICAgICB7Li4ucHJvcHN9XHJcbiAgICAgICAgYXJpYUhpZGVBcHA9e2ZhbHNlfVxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICBvdmVybGF5OiB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogKHByb3BzLnRoZW1lICYmIHByb3BzLnRoZW1lLm1vZGFsT3ZlcmxheUJnZCkgfHwgJ3JnYmEoMCwgMCwgMCwgMC41KScsXHJcbiAgICAgICAgICAgIHpJbmRleDogKHByb3BzLnRoZW1lICYmIHByb3BzLnRoZW1lLm1vZGFsT3ZlckxheVopIHx8IDEwMDAsXHJcbiAgICAgICAgICAgIC8vIGluIGNhc2Ugd2Ugd2FudCB0byBvdmVycmlkZSB0aGUgbW9kYWwgZGlhbG9nIHN0eWxlXHJcbiAgICAgICAgICAgIC4uLnByb3BzLnN0eWxlXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxNb2RhbENvbnRlbnRXcmFwcGVyXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJtb2RhbC0td3JhcHBlclwiXHJcbiAgICAgICAgICBjc3NTdHlsZT17cHJvcHMuY3NzU3R5bGV9XHJcbiAgICAgICAgICBmb290ZXI9e3Byb3BzLmZvb3Rlcn1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7cHJvcHMuY2xvc2UgJiYgKFxyXG4gICAgICAgICAgICA8Q2xvc2VCdXR0b24gY2xhc3NOYW1lPVwibW9kYWwtLWNsb3NlXCIgb25DbGljaz17cHJvcHMub25DYW5jZWx9PlxyXG4gICAgICAgICAgICAgIDxEZWxldGUgaGVpZ2h0PVwiMTRweFwiIC8+XHJcbiAgICAgICAgICAgIDwvQ2xvc2VCdXR0b24+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAge3Byb3BzLnRpdGxlICYmIChcclxuICAgICAgICAgICAgICA8TW9kYWxUaXRsZSBjbGFzc05hbWU9XCJtb2RhbC0tdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlIGlkPXtwcm9wcy50aXRsZX0gLz5cclxuICAgICAgICAgICAgICA8L01vZGFsVGl0bGU+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDxNb2RhbENvbnRlbnQgY2xhc3NOYW1lPVwibW9kYWwtLWJvZHlcIj57cHJvcHMuY2hpbGRyZW59PC9Nb2RhbENvbnRlbnQ+XHJcbiAgICAgICAgICAgIHtwcm9wcy5mb290ZXIgJiYgKFxyXG4gICAgICAgICAgICAgIDxNb2RhbEZvb3RlclxyXG4gICAgICAgICAgICAgICAgY2FuY2VsPXtwcm9wcy5vbkNhbmNlbH1cclxuICAgICAgICAgICAgICAgIGNvbmZpcm09e3Byb3BzLm9uQ29uZmlybX1cclxuICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvbj17cHJvcHMuY2FuY2VsQnV0dG9ufVxyXG4gICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvbj17cHJvcHMuY29uZmlybUJ1dHRvbn1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Nb2RhbENvbnRlbnRXcmFwcGVyPlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IFN0eWxlZE1vZGFsID0gc3R5bGVkKE1vZGFsRGlhbG9nKWBcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB0cmFuc2l0aW9uOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRyYW5zaXRpb259O1xyXG4gIHBhZGRpbmctbGVmdDogNDBweDtcclxuICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xyXG5cclxuICAke21lZGlhLnBvcnRhYmxlYFxyXG4gICAgcGFkZGluZy1sZWZ0OiAyNHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMjRweDtcclxuICBgfTtcclxuXHJcbiAgJHttZWRpYS5wYWxtYFxyXG4gICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgcGFkZGluZy1yaWdodDogMDtcclxuICBgfTtcclxuXHJcbiAgOmZvY3VzIHtcclxuICAgIG91dGxpbmU6IDA7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3R5bGVkTW9kYWw7XHJcbiJdfQ==