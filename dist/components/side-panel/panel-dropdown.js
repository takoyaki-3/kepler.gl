"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = require("../common/styled-components");

var _reactOnclickoutside = _interopRequireDefault(require("react-onclickoutside"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var ClickOutsideCloseDropdown = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(ClickOutsideCloseDropdown, _Component);

  var _super = _createSuper(ClickOutsideCloseDropdown);

  function ClickOutsideCloseDropdown() {
    var _this;

    (0, _classCallCheck2["default"])(this, ClickOutsideCloseDropdown);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleClickOutside", function (e) {
      if (typeof _this.props.onClose === 'function' && _this.props.show) {
        _this.props.onClose(e);
      }
    });
    return _this;
  }

  (0, _createClass2["default"])(ClickOutsideCloseDropdown, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement(_styledComponents.StyledPanelDropdown, {
        type: this.props.type,
        className: this.props.className
      }, this.props.children);
    }
  }]);
  return ClickOutsideCloseDropdown;
}(_react.Component);

(0, _defineProperty2["default"])(ClickOutsideCloseDropdown, "propTypes", {
  onClose: _propTypes["default"].func,
  show: _propTypes["default"].bool,
  type: _propTypes["default"].string
});
(0, _defineProperty2["default"])(ClickOutsideCloseDropdown, "defaultProps", {
  show: true,
  type: 'dark'
});

var _default = (0, _reactOnclickoutside["default"])(ClickOutsideCloseDropdown);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NpZGUtcGFuZWwvcGFuZWwtZHJvcGRvd24uanMiXSwibmFtZXMiOlsiQ2xpY2tPdXRzaWRlQ2xvc2VEcm9wZG93biIsImUiLCJwcm9wcyIsIm9uQ2xvc2UiLCJzaG93IiwidHlwZSIsImNsYXNzTmFtZSIsImNoaWxkcmVuIiwiQ29tcG9uZW50IiwiUHJvcFR5cGVzIiwiZnVuYyIsImJvb2wiLCJzdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7OztJQUVNQSx5Qjs7Ozs7Ozs7Ozs7Ozs7OzJHQVlpQixVQUFBQyxDQUFDLEVBQUk7QUFDeEIsVUFBSSxPQUFPLE1BQUtDLEtBQUwsQ0FBV0MsT0FBbEIsS0FBOEIsVUFBOUIsSUFBNEMsTUFBS0QsS0FBTCxDQUFXRSxJQUEzRCxFQUFpRTtBQUMvRCxjQUFLRixLQUFMLENBQVdDLE9BQVgsQ0FBbUJGLENBQW5CO0FBQ0Q7QUFDRixLOzs7Ozs7NkJBRVE7QUFDUCwwQkFDRSxnQ0FBQyxxQ0FBRDtBQUFxQixRQUFBLElBQUksRUFBRSxLQUFLQyxLQUFMLENBQVdHLElBQXRDO0FBQTRDLFFBQUEsU0FBUyxFQUFFLEtBQUtILEtBQUwsQ0FBV0k7QUFBbEUsU0FDRyxLQUFLSixLQUFMLENBQVdLLFFBRGQsQ0FERjtBQUtEOzs7RUF4QnFDQyxnQjs7aUNBQWxDUix5QixlQUNlO0FBQ2pCRyxFQUFBQSxPQUFPLEVBQUVNLHNCQUFVQyxJQURGO0FBRWpCTixFQUFBQSxJQUFJLEVBQUVLLHNCQUFVRSxJQUZDO0FBR2pCTixFQUFBQSxJQUFJLEVBQUVJLHNCQUFVRztBQUhDLEM7aUNBRGZaLHlCLGtCQU9rQjtBQUNwQkksRUFBQUEsSUFBSSxFQUFFLElBRGM7QUFFcEJDLEVBQUFBLElBQUksRUFBRTtBQUZjLEM7O2VBb0JULHFDQUFzQkwseUJBQXRCLEMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHtTdHlsZWRQYW5lbERyb3Bkb3dufSBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9zdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBsaXN0ZW5zVG9DbGlja091dHNpZGUgZnJvbSAncmVhY3Qtb25jbGlja291dHNpZGUnO1xyXG5cclxuY2xhc3MgQ2xpY2tPdXRzaWRlQ2xvc2VEcm9wZG93biBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcclxuICAgIG9uQ2xvc2U6IFByb3BUeXBlcy5mdW5jLFxyXG4gICAgc2hvdzogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICB0eXBlOiBQcm9wVHlwZXMuc3RyaW5nXHJcbiAgfTtcclxuXHJcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcclxuICAgIHNob3c6IHRydWUsXHJcbiAgICB0eXBlOiAnZGFyaydcclxuICB9O1xyXG5cclxuICBoYW5kbGVDbGlja091dHNpZGUgPSBlID0+IHtcclxuICAgIGlmICh0eXBlb2YgdGhpcy5wcm9wcy5vbkNsb3NlID09PSAnZnVuY3Rpb24nICYmIHRoaXMucHJvcHMuc2hvdykge1xyXG4gICAgICB0aGlzLnByb3BzLm9uQ2xvc2UoZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPFN0eWxlZFBhbmVsRHJvcGRvd24gdHlwZT17dGhpcy5wcm9wcy50eXBlfSBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2xhc3NOYW1lfT5cclxuICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cclxuICAgICAgPC9TdHlsZWRQYW5lbERyb3Bkb3duPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGxpc3RlbnNUb0NsaWNrT3V0c2lkZShDbGlja091dHNpZGVDbG9zZURyb3Bkb3duKTtcclxuIl19