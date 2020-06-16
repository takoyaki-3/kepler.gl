"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = AnimationSpeedSliderFactory;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _rangeSlider = _interopRequireDefault(require("../range-slider"));

var _reactOnclickoutside = _interopRequireDefault(require("react-onclickoutside"));

var _defaultSettings = require("../../../constants/default-settings");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  position: absolute;\n  bottom: 50px;\n  right: calc(0% - 32px);\n  width: 180px;\n  padding: 2px 8px 2px 12px;\n  background-color: ", ";\n  box-shadow: -2px -2px 0 0 rgba(0, 0, 0, 0.1);\n  .kg-range-slider__input {\n    width: 36px;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  position: relative;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var SliderWrapper = _styledComponents["default"].div(_templateObject());

var SpeedSliderContainer = _styledComponents["default"].div(_templateObject2(), function (props) {
  return props.theme.panelBackground;
});

AnimationSpeedSliderFactory.deps = [_rangeSlider["default"]];

function AnimationSpeedSliderFactory(RangeSlider) {
  var AnimationSpeedSlider = /*#__PURE__*/function (_Component) {
    (0, _inherits2["default"])(AnimationSpeedSlider, _Component);

    var _super = _createSuper(AnimationSpeedSlider);

    function AnimationSpeedSlider() {
      var _this;

      (0, _classCallCheck2["default"])(this, AnimationSpeedSlider);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleClickOutside", function (e) {
        _this.props.onHide();
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onChange", function (v) {
        return _this.props.updateAnimationSpeed(v[1]);
      });
      return _this;
    }

    (0, _createClass2["default"])(AnimationSpeedSlider, [{
      key: "render",
      value: function render() {
        return /*#__PURE__*/_react["default"].createElement(SpeedSliderContainer, {
          className: "animation-control__speed-slider"
        }, /*#__PURE__*/_react["default"].createElement(SliderWrapper, null, /*#__PURE__*/_react["default"].createElement(RangeSlider, {
          range: _defaultSettings.SPEED_CONTROL_RANGE,
          step: 0.01,
          value0: 0,
          value1: this.props.speed,
          onChange: this._onChange,
          isRanged: false,
          showTooltip: true,
          showInput: true,
          inputTheme: "secondary",
          inputSize: "tiny"
        })));
      }
    }]);
    return AnimationSpeedSlider;
  }(_react.Component);

  return (0, _reactOnclickoutside["default"])(AnimationSpeedSlider);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9hbmltYXRpb24tY29udHJvbC9hbmltYXRpb24tc3BlZWQtc2xpZGVyLmpzIl0sIm5hbWVzIjpbIlNsaWRlcldyYXBwZXIiLCJzdHlsZWQiLCJkaXYiLCJTcGVlZFNsaWRlckNvbnRhaW5lciIsInByb3BzIiwidGhlbWUiLCJwYW5lbEJhY2tncm91bmQiLCJBbmltYXRpb25TcGVlZFNsaWRlckZhY3RvcnkiLCJkZXBzIiwiUmFuZ2VTbGlkZXJGYWN0b3J5IiwiUmFuZ2VTbGlkZXIiLCJBbmltYXRpb25TcGVlZFNsaWRlciIsImUiLCJvbkhpZGUiLCJ2IiwidXBkYXRlQW5pbWF0aW9uU3BlZWQiLCJTUEVFRF9DT05UUk9MX1JBTkdFIiwic3BlZWQiLCJfb25DaGFuZ2UiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxhQUFhLEdBQUdDLDZCQUFPQyxHQUFWLG1CQUFuQjs7QUFJQSxJQUFNQyxvQkFBb0IsR0FBR0YsNkJBQU9DLEdBQVYscUJBTUosVUFBQUUsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxlQUFoQjtBQUFBLENBTkQsQ0FBMUI7O0FBYUFDLDJCQUEyQixDQUFDQyxJQUE1QixHQUFtQyxDQUFDQyx1QkFBRCxDQUFuQzs7QUFFZSxTQUFTRiwyQkFBVCxDQUFxQ0csV0FBckMsRUFBa0Q7QUFBQSxNQUN6REMsb0JBRHlEO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTs7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSw2R0FFeEMsVUFBQUMsQ0FBQyxFQUFJO0FBQ3hCLGNBQUtSLEtBQUwsQ0FBV1MsTUFBWDtBQUNELE9BSjREO0FBQUEsb0dBTWpELFVBQUFDLENBQUM7QUFBQSxlQUFJLE1BQUtWLEtBQUwsQ0FBV1csb0JBQVgsQ0FBZ0NELENBQUMsQ0FBQyxDQUFELENBQWpDLENBQUo7QUFBQSxPQU5nRDtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLCtCQVFwRDtBQUNQLDRCQUNFLGdDQUFDLG9CQUFEO0FBQXNCLFVBQUEsU0FBUyxFQUFDO0FBQWhDLHdCQUNFLGdDQUFDLGFBQUQscUJBQ0UsZ0NBQUMsV0FBRDtBQUNFLFVBQUEsS0FBSyxFQUFFRSxvQ0FEVDtBQUVFLFVBQUEsSUFBSSxFQUFFLElBRlI7QUFHRSxVQUFBLE1BQU0sRUFBRSxDQUhWO0FBSUUsVUFBQSxNQUFNLEVBQUUsS0FBS1osS0FBTCxDQUFXYSxLQUpyQjtBQUtFLFVBQUEsUUFBUSxFQUFFLEtBQUtDLFNBTGpCO0FBTUUsVUFBQSxRQUFRLEVBQUUsS0FOWjtBQU9FLFVBQUEsV0FBVyxNQVBiO0FBUUUsVUFBQSxTQUFTLE1BUlg7QUFTRSxVQUFBLFVBQVUsRUFBQyxXQVRiO0FBVUUsVUFBQSxTQUFTLEVBQUM7QUFWWixVQURGLENBREYsQ0FERjtBQWtCRDtBQTNCNEQ7QUFBQTtBQUFBLElBQzVCQyxnQkFENEI7O0FBOEIvRCxTQUFPLHFDQUFlUixvQkFBZixDQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBSYW5nZVNsaWRlckZhY3RvcnkgZnJvbSAnY29tcG9uZW50cy9jb21tb24vcmFuZ2Utc2xpZGVyJztcclxuaW1wb3J0IG9uQ2xpY2tPdXRzaWRlIGZyb20gJ3JlYWN0LW9uY2xpY2tvdXRzaWRlJztcclxuaW1wb3J0IHtTUEVFRF9DT05UUk9MX1JBTkdFfSBmcm9tICdjb25zdGFudHMvZGVmYXVsdC1zZXR0aW5ncyc7XHJcblxyXG5jb25zdCBTbGlkZXJXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbmA7XHJcblxyXG5jb25zdCBTcGVlZFNsaWRlckNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogNTBweDtcclxuICByaWdodDogY2FsYygwJSAtIDMycHgpO1xyXG4gIHdpZHRoOiAxODBweDtcclxuICBwYWRkaW5nOiAycHggOHB4IDJweCAxMnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUucGFuZWxCYWNrZ3JvdW5kfTtcclxuICBib3gtc2hhZG93OiAtMnB4IC0ycHggMCAwIHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAua2ctcmFuZ2Utc2xpZGVyX19pbnB1dCB7XHJcbiAgICB3aWR0aDogMzZweDtcclxuICB9XHJcbmA7XHJcblxyXG5BbmltYXRpb25TcGVlZFNsaWRlckZhY3RvcnkuZGVwcyA9IFtSYW5nZVNsaWRlckZhY3RvcnldO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQW5pbWF0aW9uU3BlZWRTbGlkZXJGYWN0b3J5KFJhbmdlU2xpZGVyKSB7XHJcbiAgY2xhc3MgQW5pbWF0aW9uU3BlZWRTbGlkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgaGFuZGxlQ2xpY2tPdXRzaWRlID0gZSA9PiB7XHJcbiAgICAgIHRoaXMucHJvcHMub25IaWRlKCk7XHJcbiAgICB9O1xyXG5cclxuICAgIF9vbkNoYW5nZSA9IHYgPT4gdGhpcy5wcm9wcy51cGRhdGVBbmltYXRpb25TcGVlZCh2WzFdKTtcclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPFNwZWVkU2xpZGVyQ29udGFpbmVyIGNsYXNzTmFtZT1cImFuaW1hdGlvbi1jb250cm9sX19zcGVlZC1zbGlkZXJcIj5cclxuICAgICAgICAgIDxTbGlkZXJXcmFwcGVyPlxyXG4gICAgICAgICAgICA8UmFuZ2VTbGlkZXJcclxuICAgICAgICAgICAgICByYW5nZT17U1BFRURfQ09OVFJPTF9SQU5HRX1cclxuICAgICAgICAgICAgICBzdGVwPXswLjAxfVxyXG4gICAgICAgICAgICAgIHZhbHVlMD17MH1cclxuICAgICAgICAgICAgICB2YWx1ZTE9e3RoaXMucHJvcHMuc3BlZWR9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuX29uQ2hhbmdlfVxyXG4gICAgICAgICAgICAgIGlzUmFuZ2VkPXtmYWxzZX1cclxuICAgICAgICAgICAgICBzaG93VG9vbHRpcFxyXG4gICAgICAgICAgICAgIHNob3dJbnB1dFxyXG4gICAgICAgICAgICAgIGlucHV0VGhlbWU9XCJzZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgIGlucHV0U2l6ZT1cInRpbnlcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9TbGlkZXJXcmFwcGVyPlxyXG4gICAgICAgIDwvU3BlZWRTbGlkZXJDb250YWluZXI+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gb25DbGlja091dHNpZGUoQW5pbWF0aW9uU3BlZWRTbGlkZXIpO1xyXG59XHJcbiJdfQ==