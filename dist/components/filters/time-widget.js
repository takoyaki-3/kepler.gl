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

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reselect = require("reselect");

var _fieldSelector = _interopRequireDefault(require("../common/field-selector"));

var _styledComponents2 = require("../common/styled-components");

var _icons = require("../common/icons");

var _speedControl = _interopRequireDefault(require("../common/animation-control/speed-control"));

var _timeRangeFilter = _interopRequireDefault(require("./time-range-filter"));

var _floatingTimeDisplay = _interopRequireDefault(require("../common/animation-control/floating-time-display"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  flex-grow: 0;\n  color: ", ";\n  margin-right: 10px;\n\n  .bottom-widget__icon {\n    margin-right: 6px;\n  }\n  .bottom-widget__icon.speed {\n    margin-right: 0;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  color: ", ";\n  height: ", ";\n\n  .bottom-widget__y-axis {\n    flex-grow: 1;\n    margin-left: 20px;\n  }\n\n  .bottom-widget__field-select {\n    width: 160px;\n    display: inline-block;\n\n    .item-selector__dropdown {\n      background: transparent;\n      padding: 4px 10px 4px 4px;\n      border-color: transparent;\n\n      :active,\n      :focus,\n      &.focus,\n      &.active {\n        background: transparent;\n        border-color: transparent;\n      }\n    }\n\n    .item-selector__dropdown:hover {\n      background: transparent;\n      border-color: transparent;\n\n      .item-selector__dropdown__value {\n        color: ", ";\n      }\n    }\n  }\n\n  .animation-control__speed-control {\n    margin-right: -12px;\n\n    .animation-control__speed-slider {\n      right: calc(0% - 48px);\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var TOP_SECTION_HEIGHT = '36px';

var TopSectionWrapper = _styledComponents["default"].div(_templateObject(), function (props) {
  return props.theme.labelColor;
}, TOP_SECTION_HEIGHT, function (props) {
  return props.hoverColor ? props.theme[props.hoverColor] : props.theme.textColorHl;
});

var StyledTitle = (0, _styledComponents["default"])(_styledComponents2.CenterFlexbox)(_templateObject2(), function (props) {
  return props.theme.textColor;
});
TimeWidgetFactory.deps = [_speedControl["default"], _timeRangeFilter["default"], _floatingTimeDisplay["default"]];

function TimeWidgetFactory(SpeedControl, TimeRangeFilter, FloatingTimeDisplay) {
  var TimeWidget = /*#__PURE__*/function (_Component) {
    (0, _inherits2["default"])(TimeWidget, _Component);

    var _super = _createSuper(TimeWidget);

    function TimeWidget() {
      var _this;

      (0, _classCallCheck2["default"])(this, TimeWidget);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
        showSpeedControl: false
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "fieldSelector", function (props) {
        return props.fields;
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "yAxisFieldsSelector", (0, _reselect.createSelector)(_this.fieldSelector, function (fields) {
        return fields.filter(function (f) {
          return f.type === 'integer' || f.type === 'real';
        });
      }));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_updateAnimationSpeed", function (speed) {
        return _this.props.updateAnimationSpeed(_this.props.index, speed);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_toggleSpeedControl", function () {
        return _this.setState({
          showSpeedControl: !_this.state.showSpeedControl
        });
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_setFilterPlotYAxis", function (value) {
        return _this.props.setFilterPlot(_this.props.index, {
          yAxis: value
        });
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_updateAnimationSpeed", function (speed) {
        return _this.props.updateAnimationSpeed(_this.props.index, speed);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_toggleAnimation", function () {
        return _this.props.toggleAnimation(_this.props.index);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onClose", function () {
        return _this.props.enlargeFilter(_this.props.index);
      });
      return _this;
    }

    (0, _createClass2["default"])(TimeWidget, [{
      key: "render",
      value: function render() {
        var _this$props = this.props,
            datasets = _this$props.datasets,
            filter = _this$props.filter,
            index = _this$props.index,
            readOnly = _this$props.readOnly,
            _setFilter = _this$props.setFilter,
            showTimeDisplay = _this$props.showTimeDisplay;
        var showSpeedControl = this.state.showSpeedControl;
        return /*#__PURE__*/_react["default"].createElement(_styledComponents2.BottomWidgetInner, {
          className: "bottom-widget--inner"
        }, /*#__PURE__*/_react["default"].createElement(TopSectionWrapper, null, /*#__PURE__*/_react["default"].createElement(StyledTitle, {
          className: "bottom-widget__field"
        }, /*#__PURE__*/_react["default"].createElement(_styledComponents2.CenterFlexbox, {
          className: "bottom-widget__icon"
        }, /*#__PURE__*/_react["default"].createElement(_icons.Clock, {
          height: "15px"
        })), /*#__PURE__*/_react["default"].createElement(_styledComponents2.SelectTextBold, null, filter.name)), /*#__PURE__*/_react["default"].createElement(StyledTitle, {
          className: "bottom-widget__y-axis"
        }, /*#__PURE__*/_react["default"].createElement(_styledComponents2.CenterFlexbox, {
          className: "bottom-widget__icon"
        }, /*#__PURE__*/_react["default"].createElement(_icons.LineChart, {
          height: "15px"
        })), /*#__PURE__*/_react["default"].createElement("div", {
          className: "bottom-widget__field-select"
        }, /*#__PURE__*/_react["default"].createElement(_fieldSelector["default"], {
          fields: this.yAxisFieldsSelector(datasets[filter.dataId[0]]),
          placement: "top",
          id: "selected-time-widget-field",
          value: filter.yAxis ? filter.yAxis.name : null,
          onSelect: this._setFilterPlotYAxis,
          placeholder: "placeholder.yAxis",
          erasable: true,
          showToken: false
        }))), /*#__PURE__*/_react["default"].createElement(StyledTitle, {
          className: "bottom-widget__speed"
        }, /*#__PURE__*/_react["default"].createElement(SpeedControl, {
          onClick: this._toggleSpeedControl,
          showSpeedControl: showSpeedControl,
          updateAnimationSpeed: this._updateAnimationSpeed,
          speed: filter.speed
        })), !readOnly ? /*#__PURE__*/_react["default"].createElement(_styledComponents2.CenterFlexbox, null, /*#__PURE__*/_react["default"].createElement(_styledComponents2.IconRoundSmall, null, /*#__PURE__*/_react["default"].createElement(_icons.Close, {
          height: "12px",
          onClick: this._onClose
        }))) : null), /*#__PURE__*/_react["default"].createElement(TimeRangeFilter, {
          filter: filter,
          setFilter: function setFilter(value) {
            return _setFilter(index, 'value', value);
          },
          toggleAnimation: this._toggleAnimation,
          hideTimeTitle: showTimeDisplay,
          isAnimatable: true
        }), showTimeDisplay ? /*#__PURE__*/_react["default"].createElement(FloatingTimeDisplay, {
          currentTime: filter.value
        }) : null);
      }
    }]);
    return TimeWidget;
  }(_react.Component);

  return TimeWidget;
}

var _default = TimeWidgetFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2ZpbHRlcnMvdGltZS13aWRnZXQuanMiXSwibmFtZXMiOlsiVE9QX1NFQ1RJT05fSEVJR0hUIiwiVG9wU2VjdGlvbldyYXBwZXIiLCJzdHlsZWQiLCJkaXYiLCJwcm9wcyIsInRoZW1lIiwibGFiZWxDb2xvciIsImhvdmVyQ29sb3IiLCJ0ZXh0Q29sb3JIbCIsIlN0eWxlZFRpdGxlIiwiQ2VudGVyRmxleGJveCIsInRleHRDb2xvciIsIlRpbWVXaWRnZXRGYWN0b3J5IiwiZGVwcyIsIlNwZWVkQ29udHJvbEZhY3RvcnkiLCJUaW1lUmFuZ2VGaWx0ZXJGYWN0b3J5IiwiRmxvYXRpbmdUaW1lRGlzcGxheUZhY3RvcnkiLCJTcGVlZENvbnRyb2wiLCJUaW1lUmFuZ2VGaWx0ZXIiLCJGbG9hdGluZ1RpbWVEaXNwbGF5IiwiVGltZVdpZGdldCIsInNob3dTcGVlZENvbnRyb2wiLCJmaWVsZHMiLCJmaWVsZFNlbGVjdG9yIiwiZmlsdGVyIiwiZiIsInR5cGUiLCJzcGVlZCIsInVwZGF0ZUFuaW1hdGlvblNwZWVkIiwiaW5kZXgiLCJzZXRTdGF0ZSIsInN0YXRlIiwidmFsdWUiLCJzZXRGaWx0ZXJQbG90IiwieUF4aXMiLCJ0b2dnbGVBbmltYXRpb24iLCJlbmxhcmdlRmlsdGVyIiwiZGF0YXNldHMiLCJyZWFkT25seSIsInNldEZpbHRlciIsInNob3dUaW1lRGlzcGxheSIsIm5hbWUiLCJ5QXhpc0ZpZWxkc1NlbGVjdG9yIiwiZGF0YUlkIiwiX3NldEZpbHRlclBsb3RZQXhpcyIsIl90b2dnbGVTcGVlZENvbnRyb2wiLCJfdXBkYXRlQW5pbWF0aW9uU3BlZWQiLCJfb25DbG9zZSIsIl90b2dnbGVBbmltYXRpb24iLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFFQTs7QUFNQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7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d0JFLGdDQUFDLFdBQUQ7QUFBYSxVQUFBLFNBQVMsRUFBQztBQUF2Qix3QkFDRSxnQ0FBQyxZQUFEO0FBQ0UsVUFBQSxPQUFPLEVBQUUsS0FBS0MsbUJBRGhCO0FBRUUsVUFBQSxnQkFBZ0IsRUFBRXhCLGdCQUZwQjtBQUdFLFVBQUEsb0JBQW9CLEVBQUUsS0FBS3lCLHFCQUg3QjtBQUlFLFVBQUEsS0FBSyxFQUFFdEIsTUFBTSxDQUFDRztBQUpoQixVQURGLENBeEJGLEVBZ0NHLENBQUNXLFFBQUQsZ0JBQ0MsZ0NBQUMsZ0NBQUQscUJBQ0UsZ0NBQUMsaUNBQUQscUJBQ0UsZ0NBQUMsWUFBRDtBQUFPLFVBQUEsTUFBTSxFQUFDLE1BQWQ7QUFBcUIsVUFBQSxPQUFPLEVBQUUsS0FBS1M7QUFBbkMsVUFERixDQURGLENBREQsR0FNRyxJQXRDTixDQURGLGVBeUNFLGdDQUFDLGVBQUQ7QUFDRSxVQUFBLE1BQU0sRUFBRXZCLE1BRFY7QUFFRSxVQUFBLFNBQVMsRUFBRSxtQkFBQVEsS0FBSztBQUFBLG1CQUFJTyxVQUFTLENBQUNWLEtBQUQsRUFBUSxPQUFSLEVBQWlCRyxLQUFqQixDQUFiO0FBQUEsV0FGbEI7QUFHRSxVQUFBLGVBQWUsRUFBRSxLQUFLZ0IsZ0JBSHhCO0FBSUUsVUFBQSxhQUFhLEVBQUVSLGVBSmpCO0FBS0UsVUFBQSxZQUFZO0FBTGQsVUF6Q0YsRUFnREdBLGVBQWUsZ0JBQUcsZ0NBQUMsbUJBQUQ7QUFBcUIsVUFBQSxXQUFXLEVBQUVoQixNQUFNLENBQUNRO0FBQXpDLFVBQUgsR0FBd0QsSUFoRDFFLENBREY7QUFvREQ7QUEvRTBFO0FBQUE7QUFBQSxJQUNwRGlCLGdCQURvRDs7QUFpRjdFLFNBQU83QixVQUFQO0FBQ0Q7O2VBRWNSLGlCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQge2NyZWF0ZVNlbGVjdG9yfSBmcm9tICdyZXNlbGVjdCc7XHJcblxyXG5pbXBvcnQgRmllbGRTZWxlY3RvciBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9maWVsZC1zZWxlY3Rvcic7XHJcblxyXG5pbXBvcnQge1xyXG4gIFNlbGVjdFRleHRCb2xkLFxyXG4gIEljb25Sb3VuZFNtYWxsLFxyXG4gIENlbnRlckZsZXhib3gsXHJcbiAgQm90dG9tV2lkZ2V0SW5uZXJcclxufSBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9zdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7Q2xvc2UsIENsb2NrLCBMaW5lQ2hhcnR9IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL2ljb25zJztcclxuaW1wb3J0IFNwZWVkQ29udHJvbEZhY3RvcnkgZnJvbSAnY29tcG9uZW50cy9jb21tb24vYW5pbWF0aW9uLWNvbnRyb2wvc3BlZWQtY29udHJvbCc7XHJcbmltcG9ydCBUaW1lUmFuZ2VGaWx0ZXJGYWN0b3J5IGZyb20gJ2NvbXBvbmVudHMvZmlsdGVycy90aW1lLXJhbmdlLWZpbHRlcic7XHJcbmltcG9ydCBGbG9hdGluZ1RpbWVEaXNwbGF5RmFjdG9yeSBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9hbmltYXRpb24tY29udHJvbC9mbG9hdGluZy10aW1lLWRpc3BsYXknO1xyXG5cclxuY29uc3QgVE9QX1NFQ1RJT05fSEVJR0hUID0gJzM2cHgnO1xyXG5cclxuY29uc3QgVG9wU2VjdGlvbldyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmxhYmVsQ29sb3J9O1xyXG4gIGhlaWdodDogJHtUT1BfU0VDVElPTl9IRUlHSFR9O1xyXG5cclxuICAuYm90dG9tLXdpZGdldF9feS1heGlzIHtcclxuICAgIGZsZXgtZ3JvdzogMTtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgLmJvdHRvbS13aWRnZXRfX2ZpZWxkLXNlbGVjdCB7XHJcbiAgICB3aWR0aDogMTYwcHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblxyXG4gICAgLml0ZW0tc2VsZWN0b3JfX2Ryb3Bkb3duIHtcclxuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgIHBhZGRpbmc6IDRweCAxMHB4IDRweCA0cHg7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcblxyXG4gICAgICA6YWN0aXZlLFxyXG4gICAgICA6Zm9jdXMsXHJcbiAgICAgICYuZm9jdXMsXHJcbiAgICAgICYuYWN0aXZlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLml0ZW0tc2VsZWN0b3JfX2Ryb3Bkb3duOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcblxyXG4gICAgICAuaXRlbS1zZWxlY3Rvcl9fZHJvcGRvd25fX3ZhbHVlIHtcclxuICAgICAgICBjb2xvcjogJHtwcm9wcyA9PlxyXG4gICAgICAgICAgcHJvcHMuaG92ZXJDb2xvciA/IHByb3BzLnRoZW1lW3Byb3BzLmhvdmVyQ29sb3JdIDogcHJvcHMudGhlbWUudGV4dENvbG9ySGx9O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuYW5pbWF0aW9uLWNvbnRyb2xfX3NwZWVkLWNvbnRyb2wge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAtMTJweDtcclxuXHJcbiAgICAuYW5pbWF0aW9uLWNvbnRyb2xfX3NwZWVkLXNsaWRlciB7XHJcbiAgICAgIHJpZ2h0OiBjYWxjKDAlIC0gNDhweCk7XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgU3R5bGVkVGl0bGUgPSBzdHlsZWQoQ2VudGVyRmxleGJveClgXHJcbiAgZmxleC1ncm93OiAwO1xyXG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRleHRDb2xvcn07XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG5cclxuICAuYm90dG9tLXdpZGdldF9faWNvbiB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDZweDtcclxuICB9XHJcbiAgLmJvdHRvbS13aWRnZXRfX2ljb24uc3BlZWQge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gIH1cclxuYDtcclxuXHJcblRpbWVXaWRnZXRGYWN0b3J5LmRlcHMgPSBbU3BlZWRDb250cm9sRmFjdG9yeSwgVGltZVJhbmdlRmlsdGVyRmFjdG9yeSwgRmxvYXRpbmdUaW1lRGlzcGxheUZhY3RvcnldO1xyXG5cclxuZnVuY3Rpb24gVGltZVdpZGdldEZhY3RvcnkoU3BlZWRDb250cm9sLCBUaW1lUmFuZ2VGaWx0ZXIsIEZsb2F0aW5nVGltZURpc3BsYXkpIHtcclxuICBjbGFzcyBUaW1lV2lkZ2V0IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHN0YXRlID0ge1xyXG4gICAgICBzaG93U3BlZWRDb250cm9sOiBmYWxzZVxyXG4gICAgfTtcclxuXHJcbiAgICBmaWVsZFNlbGVjdG9yID0gcHJvcHMgPT4gcHJvcHMuZmllbGRzO1xyXG4gICAgeUF4aXNGaWVsZHNTZWxlY3RvciA9IGNyZWF0ZVNlbGVjdG9yKHRoaXMuZmllbGRTZWxlY3RvciwgZmllbGRzID0+XHJcbiAgICAgIGZpZWxkcy5maWx0ZXIoZiA9PiBmLnR5cGUgPT09ICdpbnRlZ2VyJyB8fCBmLnR5cGUgPT09ICdyZWFsJylcclxuICAgICk7XHJcblxyXG4gICAgX3VwZGF0ZUFuaW1hdGlvblNwZWVkID0gc3BlZWQgPT4gdGhpcy5wcm9wcy51cGRhdGVBbmltYXRpb25TcGVlZCh0aGlzLnByb3BzLmluZGV4LCBzcGVlZCk7XHJcblxyXG4gICAgX3RvZ2dsZVNwZWVkQ29udHJvbCA9ICgpID0+IHRoaXMuc2V0U3RhdGUoe3Nob3dTcGVlZENvbnRyb2w6ICF0aGlzLnN0YXRlLnNob3dTcGVlZENvbnRyb2x9KTtcclxuXHJcbiAgICBfc2V0RmlsdGVyUGxvdFlBeGlzID0gdmFsdWUgPT4gdGhpcy5wcm9wcy5zZXRGaWx0ZXJQbG90KHRoaXMucHJvcHMuaW5kZXgsIHt5QXhpczogdmFsdWV9KTtcclxuXHJcbiAgICBfdXBkYXRlQW5pbWF0aW9uU3BlZWQgPSBzcGVlZCA9PiB0aGlzLnByb3BzLnVwZGF0ZUFuaW1hdGlvblNwZWVkKHRoaXMucHJvcHMuaW5kZXgsIHNwZWVkKTtcclxuXHJcbiAgICBfdG9nZ2xlQW5pbWF0aW9uID0gKCkgPT4gdGhpcy5wcm9wcy50b2dnbGVBbmltYXRpb24odGhpcy5wcm9wcy5pbmRleCk7XHJcblxyXG4gICAgX29uQ2xvc2UgPSAoKSA9PiB0aGlzLnByb3BzLmVubGFyZ2VGaWx0ZXIodGhpcy5wcm9wcy5pbmRleCk7XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICBjb25zdCB7ZGF0YXNldHMsIGZpbHRlciwgaW5kZXgsIHJlYWRPbmx5LCBzZXRGaWx0ZXIsIHNob3dUaW1lRGlzcGxheX0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgY29uc3Qge3Nob3dTcGVlZENvbnRyb2x9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8Qm90dG9tV2lkZ2V0SW5uZXIgY2xhc3NOYW1lPVwiYm90dG9tLXdpZGdldC0taW5uZXJcIj5cclxuICAgICAgICAgIDxUb3BTZWN0aW9uV3JhcHBlcj5cclxuICAgICAgICAgICAgPFN0eWxlZFRpdGxlIGNsYXNzTmFtZT1cImJvdHRvbS13aWRnZXRfX2ZpZWxkXCI+XHJcbiAgICAgICAgICAgICAgPENlbnRlckZsZXhib3ggY2xhc3NOYW1lPVwiYm90dG9tLXdpZGdldF9faWNvblwiPlxyXG4gICAgICAgICAgICAgICAgPENsb2NrIGhlaWdodD1cIjE1cHhcIiAvPlxyXG4gICAgICAgICAgICAgIDwvQ2VudGVyRmxleGJveD5cclxuICAgICAgICAgICAgICA8U2VsZWN0VGV4dEJvbGQ+e2ZpbHRlci5uYW1lfTwvU2VsZWN0VGV4dEJvbGQ+XHJcbiAgICAgICAgICAgIDwvU3R5bGVkVGl0bGU+XHJcbiAgICAgICAgICAgIDxTdHlsZWRUaXRsZSBjbGFzc05hbWU9XCJib3R0b20td2lkZ2V0X195LWF4aXNcIj5cclxuICAgICAgICAgICAgICA8Q2VudGVyRmxleGJveCBjbGFzc05hbWU9XCJib3R0b20td2lkZ2V0X19pY29uXCI+XHJcbiAgICAgICAgICAgICAgICA8TGluZUNoYXJ0IGhlaWdodD1cIjE1cHhcIiAvPlxyXG4gICAgICAgICAgICAgIDwvQ2VudGVyRmxleGJveD5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvdHRvbS13aWRnZXRfX2ZpZWxkLXNlbGVjdFwiPlxyXG4gICAgICAgICAgICAgICAgPEZpZWxkU2VsZWN0b3JcclxuICAgICAgICAgICAgICAgICAgZmllbGRzPXt0aGlzLnlBeGlzRmllbGRzU2VsZWN0b3IoZGF0YXNldHNbZmlsdGVyLmRhdGFJZFswXV0pfVxyXG4gICAgICAgICAgICAgICAgICBwbGFjZW1lbnQ9XCJ0b3BcIlxyXG4gICAgICAgICAgICAgICAgICBpZD1cInNlbGVjdGVkLXRpbWUtd2lkZ2V0LWZpZWxkXCJcclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2ZpbHRlci55QXhpcyA/IGZpbHRlci55QXhpcy5uYW1lIDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgb25TZWxlY3Q9e3RoaXMuX3NldEZpbHRlclBsb3RZQXhpc31cclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJwbGFjZWhvbGRlci55QXhpc1wiXHJcbiAgICAgICAgICAgICAgICAgIGVyYXNhYmxlXHJcbiAgICAgICAgICAgICAgICAgIHNob3dUb2tlbj17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L1N0eWxlZFRpdGxlPlxyXG4gICAgICAgICAgICA8U3R5bGVkVGl0bGUgY2xhc3NOYW1lPVwiYm90dG9tLXdpZGdldF9fc3BlZWRcIj5cclxuICAgICAgICAgICAgICA8U3BlZWRDb250cm9sXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLl90b2dnbGVTcGVlZENvbnRyb2x9XHJcbiAgICAgICAgICAgICAgICBzaG93U3BlZWRDb250cm9sPXtzaG93U3BlZWRDb250cm9sfVxyXG4gICAgICAgICAgICAgICAgdXBkYXRlQW5pbWF0aW9uU3BlZWQ9e3RoaXMuX3VwZGF0ZUFuaW1hdGlvblNwZWVkfVxyXG4gICAgICAgICAgICAgICAgc3BlZWQ9e2ZpbHRlci5zcGVlZH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L1N0eWxlZFRpdGxlPlxyXG4gICAgICAgICAgICB7IXJlYWRPbmx5ID8gKFxyXG4gICAgICAgICAgICAgIDxDZW50ZXJGbGV4Ym94PlxyXG4gICAgICAgICAgICAgICAgPEljb25Sb3VuZFNtYWxsPlxyXG4gICAgICAgICAgICAgICAgICA8Q2xvc2UgaGVpZ2h0PVwiMTJweFwiIG9uQ2xpY2s9e3RoaXMuX29uQ2xvc2V9IC8+XHJcbiAgICAgICAgICAgICAgICA8L0ljb25Sb3VuZFNtYWxsPlxyXG4gICAgICAgICAgICAgIDwvQ2VudGVyRmxleGJveD5cclxuICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICA8L1RvcFNlY3Rpb25XcmFwcGVyPlxyXG4gICAgICAgICAgPFRpbWVSYW5nZUZpbHRlclxyXG4gICAgICAgICAgICBmaWx0ZXI9e2ZpbHRlcn1cclxuICAgICAgICAgICAgc2V0RmlsdGVyPXt2YWx1ZSA9PiBzZXRGaWx0ZXIoaW5kZXgsICd2YWx1ZScsIHZhbHVlKX1cclxuICAgICAgICAgICAgdG9nZ2xlQW5pbWF0aW9uPXt0aGlzLl90b2dnbGVBbmltYXRpb259XHJcbiAgICAgICAgICAgIGhpZGVUaW1lVGl0bGU9e3Nob3dUaW1lRGlzcGxheX1cclxuICAgICAgICAgICAgaXNBbmltYXRhYmxlXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAge3Nob3dUaW1lRGlzcGxheSA/IDxGbG9hdGluZ1RpbWVEaXNwbGF5IGN1cnJlbnRUaW1lPXtmaWx0ZXIudmFsdWV9IC8+IDogbnVsbH1cclxuICAgICAgICA8L0JvdHRvbVdpZGdldElubmVyPlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gVGltZVdpZGdldDtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGltZVdpZGdldEZhY3Rvcnk7XHJcbiJdfQ==