"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = TimeRangeSliderFactory;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

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

var _moment = _interopRequireDefault(require("moment"));

var _window = require("global/window");

var _lodash = _interopRequireDefault(require("lodash.throttle"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reselect = require("reselect");

var _icons = require("./icons");

var _styledComponents2 = require("./styled-components");

var _rangeSlider = _interopRequireDefault(require("./range-slider"));

var _timeSliderMarker = _interopRequireDefault(require("./time-slider-marker"));

var _playbackControls = _interopRequireDefault(require("./animation-control/playback-controls"));

var _defaultSettings = require("../../constants/default-settings");

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  align-items: center;\n  font-size: 11px;\n  justify-content: ", ";\n\n  .horizontal-bar {\n    padding: 0 12px;\n    color: ", ";\n  }\n\n  .time-value {\n    display: flex;\n    flex-direction: ", ";\n    align-items: flex-start;\n\n    span {\n      color: ", ";\n    }\n  }\n\n  .time-value:last-child {\n    align-items: flex-end;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  align-items: flex-end;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n\n  .time-range-slider__control {\n    margin-bottom: 12px;\n    margin-right: 30px;\n  }\n\n  .playback-control-button {\n    padding: 9px 12px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var animationControlWidth = 140;

var StyledSliderContainer = _styledComponents["default"].div(_templateObject());

TimeRangeSliderFactory.deps = [_playbackControls["default"], _rangeSlider["default"]];

function TimeRangeSliderFactory(PlaybackControls, RangeSlider) {
  var TimeRangeSlider = /*#__PURE__*/function (_Component) {
    (0, _inherits2["default"])(TimeRangeSlider, _Component);

    var _super = _createSuper(TimeRangeSlider);

    function TimeRangeSlider(_props) {
      var _this;

      (0, _classCallCheck2["default"])(this, TimeRangeSlider);
      _this = _super.call(this, _props);
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "timeSelector", function (props) {
        return props.currentTime;
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "formatSelector", function (props) {
        return props.format;
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "displayTimeSelector", (0, _reselect.createSelector)(_this.timeSelector, _this.formatSelector, function (currentTime, format) {
        var groupTime = Array.isArray(currentTime) ? currentTime : [currentTime];
        return groupTime.reduce(function (accu, curr) {
          var displayDateTime = _moment["default"].utc(curr).format(format);

          var _displayDateTime$spli = displayDateTime.split(' '),
              _displayDateTime$spli2 = (0, _slicedToArray2["default"])(_displayDateTime$spli, 2),
              displayDate = _displayDateTime$spli2[0],
              displayTime = _displayDateTime$spli2[1];

          if (!accu.displayDate.includes(displayDate)) {
            accu.displayDate.push(displayDate);
          }

          accu.displayTime.push(displayTime);
          return accu;
        }, {
          displayDate: [],
          displayTime: []
        });
      }));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_sliderUpdate", function (args) {
        _this._sliderThrottle.cancel();

        _this._sliderThrottle(args);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_resetAnimation", function () {
        var _this$props = _this.props,
            domain = _this$props.domain,
            value = _this$props.value;
        var value0 = domain[0];
        var value1 = value0 + value[1] - value[0];

        _this.props.onChange([value0, value1]);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_startAnimation", function () {
        _this._pauseAnimation();

        _this.props.toggleAnimation();

        _this.setState({
          isAnimating: true
        });
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_pauseAnimation", function () {
        if (_this._animation) {
          (0, _window.cancelAnimationFrame)(_this._animation);

          _this.props.toggleAnimation();

          _this._animation = null;
        }

        _this.setState({
          isAnimating: false
        });
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_nextFrame", function () {
        _this._animation = null;
        var _this$props2 = _this.props,
            domain = _this$props2.domain,
            value = _this$props2.value;
        var speed = (domain[1] - domain[0]) / _defaultSettings.BASE_SPEED * _this.props.speed; // loop when reaches the end

        var value0 = value[1] + speed > domain[1] ? domain[0] : value[0] + speed;
        var value1 = value0 + value[1] - value[0];

        _this.props.onChange([value0, value1]);
      });
      _this.state = {
        isAnimating: false,
        width: 288
      };
      _this._animation = null;
      _this._sliderThrottle = (0, _lodash["default"])(function () {
        var _this$props3;

        return (_this$props3 = _this.props).onChange.apply(_this$props3, arguments);
      }, 20);
      return _this;
    }

    (0, _createClass2["default"])(TimeRangeSlider, [{
      key: "componentDidUpdate",
      value: function componentDidUpdate() {
        if (!this._animation && this.state.isAnimating) {
          this._animation = (0, _window.requestAnimationFrame)(this._nextFrame);
        }
      }
    }, {
      key: "render",
      value: function render() {
        var _this$props4 = this.props,
            domain = _this$props4.domain,
            value = _this$props4.value,
            isEnlarged = _this$props4.isEnlarged,
            hideTimeTitle = _this$props4.hideTimeTitle;
        var isAnimating = this.state.isAnimating;
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: "time-range-slider"
        }, !hideTimeTitle ? /*#__PURE__*/_react["default"].createElement(TimeTitle, {
          timeFormat: this.props.timeFormat,
          value: value,
          isEnlarged: isEnlarged
        }) : null, /*#__PURE__*/_react["default"].createElement(StyledSliderContainer, {
          className: "time-range-slider__container",
          isEnlarged: isEnlarged
        }, isEnlarged ? /*#__PURE__*/_react["default"].createElement(PlaybackControls, {
          isAnimatable: this.props.isAnimatable,
          isEnlarged: isEnlarged,
          isAnimating: isAnimating,
          pauseAnimation: this._pauseAnimation,
          resetAnimation: this._resetAnimation,
          startAnimation: this._startAnimation,
          buttonHeight: "12px",
          buttonStyle: "secondary"
        }) : null, /*#__PURE__*/_react["default"].createElement("div", {
          style: {
            width: isEnlarged ? "calc(100% - ".concat(animationControlWidth, "px)") : '100%'
          }
        }, /*#__PURE__*/_react["default"].createElement(RangeSlider, {
          range: domain,
          value0: value[0],
          value1: value[1],
          histogram: this.props.histogram,
          lineChart: this.props.lineChart,
          plotType: this.props.plotType,
          isEnlarged: isEnlarged,
          showInput: false,
          step: this.props.step,
          onChange: this._sliderUpdate,
          xAxis: _timeSliderMarker["default"]
        }))));
      }
    }]);
    return TimeRangeSlider;
  }(_react.Component);

  (0, _defineProperty2["default"])(TimeRangeSlider, "propTypes", {
    onChange: _propTypes["default"].func.isRequired,
    domain: _propTypes["default"].arrayOf(_propTypes["default"].number).isRequired,
    value: _propTypes["default"].arrayOf(_propTypes["default"].number).isRequired,
    step: _propTypes["default"].number.isRequired,
    plotType: _propTypes["default"].string,
    histogram: _propTypes["default"].arrayOf(_propTypes["default"].any),
    lineChart: _propTypes["default"].object,
    toggleAnimation: _propTypes["default"].func.isRequired,
    isAnimatable: _propTypes["default"].bool,
    isEnlarged: _propTypes["default"].bool,
    speed: _propTypes["default"].number,
    timeFormat: _propTypes["default"].string,
    hideTimeTitle: _propTypes["default"].bool
  });
  TimeRangeSlider.defaultProps = {
    timeFormat: _defaultSettings.DEFAULT_TIME_FORMAT
  };
  return TimeRangeSlider;
}

var TimeValueWrapper = _styledComponents["default"].div(_templateObject2(), function (props) {
  return props.isEnlarged ? 'center' : 'space-between';
}, function (props) {
  return props.theme.titleTextColor;
}, function (props) {
  return props.isEnlarged ? 'row' : 'column';
}, function (props) {
  return props.theme.titleTextColor;
});

var TimeTitle = function TimeTitle(_ref) {
  var value = _ref.value,
      isEnlarged = _ref.isEnlarged,
      _ref$timeFormat = _ref.timeFormat,
      timeFormat = _ref$timeFormat === void 0 ? _defaultSettings.DEFAULT_TIME_FORMAT : _ref$timeFormat;
  return /*#__PURE__*/_react["default"].createElement(TimeValueWrapper, {
    isEnlarged: isEnlarged,
    className: "time-range-slider__time-title"
  }, /*#__PURE__*/_react["default"].createElement(TimeValue, {
    key: 0,
    value: _moment["default"].utc(value[0]).format(timeFormat),
    split: !isEnlarged
  }), isEnlarged ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "horizontal-bar"
  }, /*#__PURE__*/_react["default"].createElement(_icons.Minus, {
    height: "12px"
  })) : null, /*#__PURE__*/_react["default"].createElement(TimeValue, {
    key: 1,
    value: _moment["default"].utc(value[1]).format(timeFormat),
    split: !isEnlarged
  }));
};

var TimeValue = function TimeValue(_ref2) {
  var value = _ref2.value,
      split = _ref2.split;
  return (
    /*#__PURE__*/
    // render two lines if not enlarged
    _react["default"].createElement("div", {
      className: "time-value"
    }, split ? value.split(' ').map(function (v, i) {
      return /*#__PURE__*/_react["default"].createElement("div", {
        key: i
      }, i === 0 ? /*#__PURE__*/_react["default"].createElement(_styledComponents2.SelectText, null, v) : /*#__PURE__*/_react["default"].createElement(_styledComponents2.SelectTextBold, null, v));
    }) : /*#__PURE__*/_react["default"].createElement(_styledComponents2.SelectTextBold, null, value))
  );
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi90aW1lLXJhbmdlLXNsaWRlci5qcyJdLCJuYW1lcyI6WyJhbmltYXRpb25Db250cm9sV2lkdGgiLCJTdHlsZWRTbGlkZXJDb250YWluZXIiLCJzdHlsZWQiLCJkaXYiLCJUaW1lUmFuZ2VTbGlkZXJGYWN0b3J5IiwiZGVwcyIsIlBsYXliYWNrQ29udHJvbHNGYWN0b3J5IiwiUmFuZ2VTbGlkZXJGYWN0b3J5IiwiUGxheWJhY2tDb250cm9scyIsIlJhbmdlU2xpZGVyIiwiVGltZVJhbmdlU2xpZGVyIiwicHJvcHMiLCJjdXJyZW50VGltZSIsImZvcm1hdCIsInRpbWVTZWxlY3RvciIsImZvcm1hdFNlbGVjdG9yIiwiZ3JvdXBUaW1lIiwiQXJyYXkiLCJpc0FycmF5IiwicmVkdWNlIiwiYWNjdSIsImN1cnIiLCJkaXNwbGF5RGF0ZVRpbWUiLCJtb21lbnQiLCJ1dGMiLCJzcGxpdCIsImRpc3BsYXlEYXRlIiwiZGlzcGxheVRpbWUiLCJpbmNsdWRlcyIsInB1c2giLCJhcmdzIiwiX3NsaWRlclRocm90dGxlIiwiY2FuY2VsIiwiZG9tYWluIiwidmFsdWUiLCJ2YWx1ZTAiLCJ2YWx1ZTEiLCJvbkNoYW5nZSIsIl9wYXVzZUFuaW1hdGlvbiIsInRvZ2dsZUFuaW1hdGlvbiIsInNldFN0YXRlIiwiaXNBbmltYXRpbmciLCJfYW5pbWF0aW9uIiwic3BlZWQiLCJCQVNFX1NQRUVEIiwic3RhdGUiLCJ3aWR0aCIsIl9uZXh0RnJhbWUiLCJpc0VubGFyZ2VkIiwiaGlkZVRpbWVUaXRsZSIsInRpbWVGb3JtYXQiLCJpc0FuaW1hdGFibGUiLCJfcmVzZXRBbmltYXRpb24iLCJfc3RhcnRBbmltYXRpb24iLCJoaXN0b2dyYW0iLCJsaW5lQ2hhcnQiLCJwbG90VHlwZSIsInN0ZXAiLCJfc2xpZGVyVXBkYXRlIiwiVGltZVNsaWRlck1hcmtlciIsIkNvbXBvbmVudCIsIlByb3BUeXBlcyIsImZ1bmMiLCJpc1JlcXVpcmVkIiwiYXJyYXlPZiIsIm51bWJlciIsInN0cmluZyIsImFueSIsIm9iamVjdCIsImJvb2wiLCJkZWZhdWx0UHJvcHMiLCJERUZBVUxUX1RJTUVfRk9STUFUIiwiVGltZVZhbHVlV3JhcHBlciIsInRoZW1lIiwidGl0bGVUZXh0Q29sb3IiLCJUaW1lVGl0bGUiLCJUaW1lVmFsdWUiLCJtYXAiLCJ2IiwiaSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEscUJBQXFCLEdBQUcsR0FBOUI7O0FBRUEsSUFBTUMscUJBQXFCLEdBQUdDLDZCQUFPQyxHQUFWLG1CQUEzQjs7QUFnQkFDLHNCQUFzQixDQUFDQyxJQUF2QixHQUE4QixDQUFDQyw0QkFBRCxFQUEwQkMsdUJBQTFCLENBQTlCOztBQUVlLFNBQVNILHNCQUFULENBQWdDSSxnQkFBaEMsRUFBa0RDLFdBQWxELEVBQStEO0FBQUEsTUFDdEVDLGVBRHNFO0FBQUE7O0FBQUE7O0FBa0IxRSw2QkFBWUMsTUFBWixFQUFtQjtBQUFBOztBQUFBO0FBQ2pCLGdDQUFNQSxNQUFOO0FBRGlCLHVHQWdCSixVQUFBQSxLQUFLO0FBQUEsZUFBSUEsS0FBSyxDQUFDQyxXQUFWO0FBQUEsT0FoQkQ7QUFBQSx5R0FpQkYsVUFBQUQsS0FBSztBQUFBLGVBQUlBLEtBQUssQ0FBQ0UsTUFBVjtBQUFBLE9BakJIO0FBQUEsOEdBa0JHLDhCQUNwQixNQUFLQyxZQURlLEVBRXBCLE1BQUtDLGNBRmUsRUFHcEIsVUFBQ0gsV0FBRCxFQUFjQyxNQUFkLEVBQXlCO0FBQ3ZCLFlBQU1HLFNBQVMsR0FBR0MsS0FBSyxDQUFDQyxPQUFOLENBQWNOLFdBQWQsSUFBNkJBLFdBQTdCLEdBQTJDLENBQUNBLFdBQUQsQ0FBN0Q7QUFDQSxlQUFPSSxTQUFTLENBQUNHLE1BQVYsQ0FDTCxVQUFDQyxJQUFELEVBQU9DLElBQVAsRUFBZ0I7QUFDZCxjQUFNQyxlQUFlLEdBQUdDLG1CQUFPQyxHQUFQLENBQVdILElBQVgsRUFBaUJSLE1BQWpCLENBQXdCQSxNQUF4QixDQUF4Qjs7QUFEYyxzQ0FFcUJTLGVBQWUsQ0FBQ0csS0FBaEIsQ0FBc0IsR0FBdEIsQ0FGckI7QUFBQTtBQUFBLGNBRVBDLFdBRk87QUFBQSxjQUVNQyxXQUZOOztBQUlkLGNBQUksQ0FBQ1AsSUFBSSxDQUFDTSxXQUFMLENBQWlCRSxRQUFqQixDQUEwQkYsV0FBMUIsQ0FBTCxFQUE2QztBQUMzQ04sWUFBQUEsSUFBSSxDQUFDTSxXQUFMLENBQWlCRyxJQUFqQixDQUFzQkgsV0FBdEI7QUFDRDs7QUFDRE4sVUFBQUEsSUFBSSxDQUFDTyxXQUFMLENBQWlCRSxJQUFqQixDQUFzQkYsV0FBdEI7QUFFQSxpQkFBT1AsSUFBUDtBQUNELFNBWEksRUFZTDtBQUFDTSxVQUFBQSxXQUFXLEVBQUUsRUFBZDtBQUFrQkMsVUFBQUEsV0FBVyxFQUFFO0FBQS9CLFNBWkssQ0FBUDtBQWNELE9BbkJtQixDQWxCSDtBQUFBLHdHQXdDSCxVQUFBRyxJQUFJLEVBQUk7QUFDdEIsY0FBS0MsZUFBTCxDQUFxQkMsTUFBckI7O0FBQ0EsY0FBS0QsZUFBTCxDQUFxQkQsSUFBckI7QUFDRCxPQTNDa0I7QUFBQSwwR0E2Q0QsWUFBTTtBQUFBLDBCQUNFLE1BQUtuQixLQURQO0FBQUEsWUFDZnNCLE1BRGUsZUFDZkEsTUFEZTtBQUFBLFlBQ1BDLEtBRE8sZUFDUEEsS0FETztBQUV0QixZQUFNQyxNQUFNLEdBQUdGLE1BQU0sQ0FBQyxDQUFELENBQXJCO0FBQ0EsWUFBTUcsTUFBTSxHQUFHRCxNQUFNLEdBQUdELEtBQUssQ0FBQyxDQUFELENBQWQsR0FBb0JBLEtBQUssQ0FBQyxDQUFELENBQXhDOztBQUNBLGNBQUt2QixLQUFMLENBQVcwQixRQUFYLENBQW9CLENBQUNGLE1BQUQsRUFBU0MsTUFBVCxDQUFwQjtBQUNELE9BbERrQjtBQUFBLDBHQW9ERCxZQUFNO0FBQ3RCLGNBQUtFLGVBQUw7O0FBQ0EsY0FBSzNCLEtBQUwsQ0FBVzRCLGVBQVg7O0FBQ0EsY0FBS0MsUUFBTCxDQUFjO0FBQUNDLFVBQUFBLFdBQVcsRUFBRTtBQUFkLFNBQWQ7QUFDRCxPQXhEa0I7QUFBQSwwR0EwREQsWUFBTTtBQUN0QixZQUFJLE1BQUtDLFVBQVQsRUFBcUI7QUFDbkIsNENBQXFCLE1BQUtBLFVBQTFCOztBQUNBLGdCQUFLL0IsS0FBTCxDQUFXNEIsZUFBWDs7QUFDQSxnQkFBS0csVUFBTCxHQUFrQixJQUFsQjtBQUNEOztBQUNELGNBQUtGLFFBQUwsQ0FBYztBQUFDQyxVQUFBQSxXQUFXLEVBQUU7QUFBZCxTQUFkO0FBQ0QsT0FqRWtCO0FBQUEscUdBbUVOLFlBQU07QUFDakIsY0FBS0MsVUFBTCxHQUFrQixJQUFsQjtBQURpQiwyQkFHTyxNQUFLL0IsS0FIWjtBQUFBLFlBR1ZzQixNQUhVLGdCQUdWQSxNQUhVO0FBQUEsWUFHRkMsS0FIRSxnQkFHRkEsS0FIRTtBQUlqQixZQUFNUyxLQUFLLEdBQUksQ0FBQ1YsTUFBTSxDQUFDLENBQUQsQ0FBTixHQUFZQSxNQUFNLENBQUMsQ0FBRCxDQUFuQixJQUEwQlcsMkJBQTNCLEdBQXlDLE1BQUtqQyxLQUFMLENBQVdnQyxLQUFsRSxDQUppQixDQU1qQjs7QUFDQSxZQUFNUixNQUFNLEdBQUdELEtBQUssQ0FBQyxDQUFELENBQUwsR0FBV1MsS0FBWCxHQUFtQlYsTUFBTSxDQUFDLENBQUQsQ0FBekIsR0FBK0JBLE1BQU0sQ0FBQyxDQUFELENBQXJDLEdBQTJDQyxLQUFLLENBQUMsQ0FBRCxDQUFMLEdBQVdTLEtBQXJFO0FBQ0EsWUFBTVAsTUFBTSxHQUFHRCxNQUFNLEdBQUdELEtBQUssQ0FBQyxDQUFELENBQWQsR0FBb0JBLEtBQUssQ0FBQyxDQUFELENBQXhDOztBQUNBLGNBQUt2QixLQUFMLENBQVcwQixRQUFYLENBQW9CLENBQUNGLE1BQUQsRUFBU0MsTUFBVCxDQUFwQjtBQUNELE9BN0VrQjtBQUVqQixZQUFLUyxLQUFMLEdBQWE7QUFDWEosUUFBQUEsV0FBVyxFQUFFLEtBREY7QUFFWEssUUFBQUEsS0FBSyxFQUFFO0FBRkksT0FBYjtBQUlBLFlBQUtKLFVBQUwsR0FBa0IsSUFBbEI7QUFDQSxZQUFLWCxlQUFMLEdBQXVCLHdCQUFTO0FBQUE7O0FBQUEsZUFBYyxzQkFBS3BCLEtBQUwsRUFBVzBCLFFBQVgsK0JBQWQ7QUFBQSxPQUFULEVBQXNELEVBQXRELENBQXZCO0FBUGlCO0FBUWxCOztBQTFCeUU7QUFBQTtBQUFBLDJDQTRCckQ7QUFDbkIsWUFBSSxDQUFDLEtBQUtLLFVBQU4sSUFBb0IsS0FBS0csS0FBTCxDQUFXSixXQUFuQyxFQUFnRDtBQUM5QyxlQUFLQyxVQUFMLEdBQWtCLG1DQUFzQixLQUFLSyxVQUEzQixDQUFsQjtBQUNEO0FBQ0Y7QUFoQ3lFO0FBQUE7QUFBQSwrQkFpR2pFO0FBQUEsMkJBQzRDLEtBQUtwQyxLQURqRDtBQUFBLFlBQ0FzQixNQURBLGdCQUNBQSxNQURBO0FBQUEsWUFDUUMsS0FEUixnQkFDUUEsS0FEUjtBQUFBLFlBQ2VjLFVBRGYsZ0JBQ2VBLFVBRGY7QUFBQSxZQUMyQkMsYUFEM0IsZ0JBQzJCQSxhQUQzQjtBQUFBLFlBRUFSLFdBRkEsR0FFZSxLQUFLSSxLQUZwQixDQUVBSixXQUZBO0FBSVAsNEJBQ0U7QUFBSyxVQUFBLFNBQVMsRUFBQztBQUFmLFdBQ0csQ0FBQ1EsYUFBRCxnQkFDQyxnQ0FBQyxTQUFEO0FBQVcsVUFBQSxVQUFVLEVBQUUsS0FBS3RDLEtBQUwsQ0FBV3VDLFVBQWxDO0FBQThDLFVBQUEsS0FBSyxFQUFFaEIsS0FBckQ7QUFBNEQsVUFBQSxVQUFVLEVBQUVjO0FBQXhFLFVBREQsR0FFRyxJQUhOLGVBSUUsZ0NBQUMscUJBQUQ7QUFBdUIsVUFBQSxTQUFTLEVBQUMsOEJBQWpDO0FBQWdFLFVBQUEsVUFBVSxFQUFFQTtBQUE1RSxXQUNHQSxVQUFVLGdCQUNULGdDQUFDLGdCQUFEO0FBQ0UsVUFBQSxZQUFZLEVBQUUsS0FBS3JDLEtBQUwsQ0FBV3dDLFlBRDNCO0FBRUUsVUFBQSxVQUFVLEVBQUVILFVBRmQ7QUFHRSxVQUFBLFdBQVcsRUFBRVAsV0FIZjtBQUlFLFVBQUEsY0FBYyxFQUFFLEtBQUtILGVBSnZCO0FBS0UsVUFBQSxjQUFjLEVBQUUsS0FBS2MsZUFMdkI7QUFNRSxVQUFBLGNBQWMsRUFBRSxLQUFLQyxlQU52QjtBQU9FLFVBQUEsWUFBWSxFQUFDLE1BUGY7QUFRRSxVQUFBLFdBQVcsRUFBQztBQVJkLFVBRFMsR0FXUCxJQVpOLGVBYUU7QUFDRSxVQUFBLEtBQUssRUFBRTtBQUNMUCxZQUFBQSxLQUFLLEVBQUVFLFVBQVUseUJBQWtCaEQscUJBQWxCLFdBQStDO0FBRDNEO0FBRFQsd0JBS0UsZ0NBQUMsV0FBRDtBQUNFLFVBQUEsS0FBSyxFQUFFaUMsTUFEVDtBQUVFLFVBQUEsTUFBTSxFQUFFQyxLQUFLLENBQUMsQ0FBRCxDQUZmO0FBR0UsVUFBQSxNQUFNLEVBQUVBLEtBQUssQ0FBQyxDQUFELENBSGY7QUFJRSxVQUFBLFNBQVMsRUFBRSxLQUFLdkIsS0FBTCxDQUFXMkMsU0FKeEI7QUFLRSxVQUFBLFNBQVMsRUFBRSxLQUFLM0MsS0FBTCxDQUFXNEMsU0FMeEI7QUFNRSxVQUFBLFFBQVEsRUFBRSxLQUFLNUMsS0FBTCxDQUFXNkMsUUFOdkI7QUFPRSxVQUFBLFVBQVUsRUFBRVIsVUFQZDtBQVFFLFVBQUEsU0FBUyxFQUFFLEtBUmI7QUFTRSxVQUFBLElBQUksRUFBRSxLQUFLckMsS0FBTCxDQUFXOEMsSUFUbkI7QUFVRSxVQUFBLFFBQVEsRUFBRSxLQUFLQyxhQVZqQjtBQVdFLFVBQUEsS0FBSyxFQUFFQztBQVhULFVBTEYsQ0FiRixDQUpGLENBREY7QUF3Q0Q7QUE3SXlFO0FBQUE7QUFBQSxJQUM5Q0MsZ0JBRDhDOztBQUFBLG1DQUN0RWxELGVBRHNFLGVBRXZEO0FBQ2pCMkIsSUFBQUEsUUFBUSxFQUFFd0Isc0JBQVVDLElBQVYsQ0FBZUMsVUFEUjtBQUVqQjlCLElBQUFBLE1BQU0sRUFBRTRCLHNCQUFVRyxPQUFWLENBQWtCSCxzQkFBVUksTUFBNUIsRUFBb0NGLFVBRjNCO0FBR2pCN0IsSUFBQUEsS0FBSyxFQUFFMkIsc0JBQVVHLE9BQVYsQ0FBa0JILHNCQUFVSSxNQUE1QixFQUFvQ0YsVUFIMUI7QUFJakJOLElBQUFBLElBQUksRUFBRUksc0JBQVVJLE1BQVYsQ0FBaUJGLFVBSk47QUFLakJQLElBQUFBLFFBQVEsRUFBRUssc0JBQVVLLE1BTEg7QUFNakJaLElBQUFBLFNBQVMsRUFBRU8sc0JBQVVHLE9BQVYsQ0FBa0JILHNCQUFVTSxHQUE1QixDQU5NO0FBT2pCWixJQUFBQSxTQUFTLEVBQUVNLHNCQUFVTyxNQVBKO0FBUWpCN0IsSUFBQUEsZUFBZSxFQUFFc0Isc0JBQVVDLElBQVYsQ0FBZUMsVUFSZjtBQVNqQlosSUFBQUEsWUFBWSxFQUFFVSxzQkFBVVEsSUFUUDtBQVVqQnJCLElBQUFBLFVBQVUsRUFBRWEsc0JBQVVRLElBVkw7QUFXakIxQixJQUFBQSxLQUFLLEVBQUVrQixzQkFBVUksTUFYQTtBQVlqQmYsSUFBQUEsVUFBVSxFQUFFVyxzQkFBVUssTUFaTDtBQWFqQmpCLElBQUFBLGFBQWEsRUFBRVksc0JBQVVRO0FBYlIsR0FGdUQ7QUFnSjVFM0QsRUFBQUEsZUFBZSxDQUFDNEQsWUFBaEIsR0FBK0I7QUFDN0JwQixJQUFBQSxVQUFVLEVBQUVxQjtBQURpQixHQUEvQjtBQUlBLFNBQU83RCxlQUFQO0FBQ0Q7O0FBRUQsSUFBTThELGdCQUFnQixHQUFHdEUsNkJBQU9DLEdBQVYscUJBSUQsVUFBQVEsS0FBSztBQUFBLFNBQUtBLEtBQUssQ0FBQ3FDLFVBQU4sR0FBbUIsUUFBbkIsR0FBOEIsZUFBbkM7QUFBQSxDQUpKLEVBUVQsVUFBQXJDLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUM4RCxLQUFOLENBQVlDLGNBQWhCO0FBQUEsQ0FSSSxFQWFBLFVBQUEvRCxLQUFLO0FBQUEsU0FBS0EsS0FBSyxDQUFDcUMsVUFBTixHQUFtQixLQUFuQixHQUEyQixRQUFoQztBQUFBLENBYkwsRUFpQlAsVUFBQXJDLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUM4RCxLQUFOLENBQVlDLGNBQWhCO0FBQUEsQ0FqQkUsQ0FBdEI7O0FBMEJBLElBQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZO0FBQUEsTUFBRXpDLEtBQUYsUUFBRUEsS0FBRjtBQUFBLE1BQVNjLFVBQVQsUUFBU0EsVUFBVDtBQUFBLDZCQUFxQkUsVUFBckI7QUFBQSxNQUFxQkEsVUFBckIsZ0NBQWtDcUIsb0NBQWxDO0FBQUEsc0JBQ2hCLGdDQUFDLGdCQUFEO0FBQWtCLElBQUEsVUFBVSxFQUFFdkIsVUFBOUI7QUFBMEMsSUFBQSxTQUFTLEVBQUM7QUFBcEQsa0JBQ0UsZ0NBQUMsU0FBRDtBQUFXLElBQUEsR0FBRyxFQUFFLENBQWhCO0FBQW1CLElBQUEsS0FBSyxFQUFFekIsbUJBQU9DLEdBQVAsQ0FBV1UsS0FBSyxDQUFDLENBQUQsQ0FBaEIsRUFBcUJyQixNQUFyQixDQUE0QnFDLFVBQTVCLENBQTFCO0FBQW1FLElBQUEsS0FBSyxFQUFFLENBQUNGO0FBQTNFLElBREYsRUFFR0EsVUFBVSxnQkFDVDtBQUFLLElBQUEsU0FBUyxFQUFDO0FBQWYsa0JBQ0UsZ0NBQUMsWUFBRDtBQUFPLElBQUEsTUFBTSxFQUFDO0FBQWQsSUFERixDQURTLEdBSVAsSUFOTixlQU9FLGdDQUFDLFNBQUQ7QUFBVyxJQUFBLEdBQUcsRUFBRSxDQUFoQjtBQUFtQixJQUFBLEtBQUssRUFBRXpCLG1CQUFPQyxHQUFQLENBQVdVLEtBQUssQ0FBQyxDQUFELENBQWhCLEVBQXFCckIsTUFBckIsQ0FBNEJxQyxVQUE1QixDQUExQjtBQUFtRSxJQUFBLEtBQUssRUFBRSxDQUFDRjtBQUEzRSxJQVBGLENBRGdCO0FBQUEsQ0FBbEI7O0FBWUEsSUFBTTRCLFNBQVMsR0FBRyxTQUFaQSxTQUFZO0FBQUEsTUFBRTFDLEtBQUYsU0FBRUEsS0FBRjtBQUFBLE1BQVNULEtBQVQsU0FBU0EsS0FBVDtBQUFBO0FBQUE7QUFDaEI7QUFDQTtBQUFLLE1BQUEsU0FBUyxFQUFDO0FBQWYsT0FDR0EsS0FBSyxHQUNKUyxLQUFLLENBQ0ZULEtBREgsQ0FDUyxHQURULEVBRUdvRCxHQUZILENBRU8sVUFBQ0MsQ0FBRCxFQUFJQyxDQUFKO0FBQUEsMEJBQ0g7QUFBSyxRQUFBLEdBQUcsRUFBRUE7QUFBVixTQUNHQSxDQUFDLEtBQUssQ0FBTixnQkFBVSxnQ0FBQyw2QkFBRCxRQUFhRCxDQUFiLENBQVYsZ0JBQXlDLGdDQUFDLGlDQUFELFFBQWlCQSxDQUFqQixDQUQ1QyxDQURHO0FBQUEsS0FGUCxDQURJLGdCQVNKLGdDQUFDLGlDQUFELFFBQWlCNUMsS0FBakIsQ0FWSjtBQUZnQjtBQUFBLENBQWxCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuaW1wb3J0IHtyZXF1ZXN0QW5pbWF0aW9uRnJhbWUsIGNhbmNlbEFuaW1hdGlvbkZyYW1lfSBmcm9tICdnbG9iYWwvd2luZG93JztcclxuaW1wb3J0IHRocm90dGxlIGZyb20gJ2xvZGFzaC50aHJvdHRsZSc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQge2NyZWF0ZVNlbGVjdG9yfSBmcm9tICdyZXNlbGVjdCc7XHJcblxyXG5pbXBvcnQge01pbnVzfSBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9pY29ucyc7XHJcbmltcG9ydCB7U2VsZWN0VGV4dEJvbGQsIFNlbGVjdFRleHR9IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IFJhbmdlU2xpZGVyRmFjdG9yeSBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9yYW5nZS1zbGlkZXInO1xyXG5pbXBvcnQgVGltZVNsaWRlck1hcmtlciBmcm9tICdjb21wb25lbnRzL2NvbW1vbi90aW1lLXNsaWRlci1tYXJrZXInO1xyXG5pbXBvcnQgUGxheWJhY2tDb250cm9sc0ZhY3RvcnkgZnJvbSAnY29tcG9uZW50cy9jb21tb24vYW5pbWF0aW9uLWNvbnRyb2wvcGxheWJhY2stY29udHJvbHMnO1xyXG5pbXBvcnQge0JBU0VfU1BFRUQsIERFRkFVTFRfVElNRV9GT1JNQVR9IGZyb20gJ2NvbnN0YW50cy9kZWZhdWx0LXNldHRpbmdzJztcclxuXHJcbmNvbnN0IGFuaW1hdGlvbkNvbnRyb2xXaWR0aCA9IDE0MDtcclxuXHJcbmNvbnN0IFN0eWxlZFNsaWRlckNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG4gIC50aW1lLXJhbmdlLXNsaWRlcl9fY29udHJvbCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG4gIH1cclxuXHJcbiAgLnBsYXliYWNrLWNvbnRyb2wtYnV0dG9uIHtcclxuICAgIHBhZGRpbmc6IDlweCAxMnB4O1xyXG4gIH1cclxuYDtcclxuXHJcblRpbWVSYW5nZVNsaWRlckZhY3RvcnkuZGVwcyA9IFtQbGF5YmFja0NvbnRyb2xzRmFjdG9yeSwgUmFuZ2VTbGlkZXJGYWN0b3J5XTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRpbWVSYW5nZVNsaWRlckZhY3RvcnkoUGxheWJhY2tDb250cm9scywgUmFuZ2VTbGlkZXIpIHtcclxuICBjbGFzcyBUaW1lUmFuZ2VTbGlkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcclxuICAgICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgICAgIGRvbWFpbjogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm51bWJlcikuaXNSZXF1aXJlZCxcclxuICAgICAgdmFsdWU6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5udW1iZXIpLmlzUmVxdWlyZWQsXHJcbiAgICAgIHN0ZXA6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcclxuICAgICAgcGxvdFR5cGU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgIGhpc3RvZ3JhbTogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLmFueSksXHJcbiAgICAgIGxpbmVDaGFydDogUHJvcFR5cGVzLm9iamVjdCxcclxuICAgICAgdG9nZ2xlQW5pbWF0aW9uOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gICAgICBpc0FuaW1hdGFibGU6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgICBpc0VubGFyZ2VkOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgICAgc3BlZWQ6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICAgIHRpbWVGb3JtYXQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgIGhpZGVUaW1lVGl0bGU6IFByb3BUeXBlcy5ib29sXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICBpc0FuaW1hdGluZzogZmFsc2UsXHJcbiAgICAgICAgd2lkdGg6IDI4OFxyXG4gICAgICB9O1xyXG4gICAgICB0aGlzLl9hbmltYXRpb24gPSBudWxsO1xyXG4gICAgICB0aGlzLl9zbGlkZXJUaHJvdHRsZSA9IHRocm90dGxlKCguLi52YWx1ZSkgPT4gdGhpcy5wcm9wcy5vbkNoYW5nZSguLi52YWx1ZSksIDIwKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRVcGRhdGUoKSB7XHJcbiAgICAgIGlmICghdGhpcy5fYW5pbWF0aW9uICYmIHRoaXMuc3RhdGUuaXNBbmltYXRpbmcpIHtcclxuICAgICAgICB0aGlzLl9hbmltYXRpb24gPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5fbmV4dEZyYW1lKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRpbWVTZWxlY3RvciA9IHByb3BzID0+IHByb3BzLmN1cnJlbnRUaW1lO1xyXG4gICAgZm9ybWF0U2VsZWN0b3IgPSBwcm9wcyA9PiBwcm9wcy5mb3JtYXQ7XHJcbiAgICBkaXNwbGF5VGltZVNlbGVjdG9yID0gY3JlYXRlU2VsZWN0b3IoXHJcbiAgICAgIHRoaXMudGltZVNlbGVjdG9yLFxyXG4gICAgICB0aGlzLmZvcm1hdFNlbGVjdG9yLFxyXG4gICAgICAoY3VycmVudFRpbWUsIGZvcm1hdCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGdyb3VwVGltZSA9IEFycmF5LmlzQXJyYXkoY3VycmVudFRpbWUpID8gY3VycmVudFRpbWUgOiBbY3VycmVudFRpbWVdO1xyXG4gICAgICAgIHJldHVybiBncm91cFRpbWUucmVkdWNlKFxyXG4gICAgICAgICAgKGFjY3UsIGN1cnIpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZGlzcGxheURhdGVUaW1lID0gbW9tZW50LnV0YyhjdXJyKS5mb3JtYXQoZm9ybWF0KTtcclxuICAgICAgICAgICAgY29uc3QgW2Rpc3BsYXlEYXRlLCBkaXNwbGF5VGltZV0gPSBkaXNwbGF5RGF0ZVRpbWUuc3BsaXQoJyAnKTtcclxuXHJcbiAgICAgICAgICAgIGlmICghYWNjdS5kaXNwbGF5RGF0ZS5pbmNsdWRlcyhkaXNwbGF5RGF0ZSkpIHtcclxuICAgICAgICAgICAgICBhY2N1LmRpc3BsYXlEYXRlLnB1c2goZGlzcGxheURhdGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGFjY3UuZGlzcGxheVRpbWUucHVzaChkaXNwbGF5VGltZSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gYWNjdTtcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7ZGlzcGxheURhdGU6IFtdLCBkaXNwbGF5VGltZTogW119XHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgKTtcclxuXHJcbiAgICBfc2xpZGVyVXBkYXRlID0gYXJncyA9PiB7XHJcbiAgICAgIHRoaXMuX3NsaWRlclRocm90dGxlLmNhbmNlbCgpO1xyXG4gICAgICB0aGlzLl9zbGlkZXJUaHJvdHRsZShhcmdzKTtcclxuICAgIH07XHJcblxyXG4gICAgX3Jlc2V0QW5pbWF0aW9uID0gKCkgPT4ge1xyXG4gICAgICBjb25zdCB7ZG9tYWluLCB2YWx1ZX0gPSB0aGlzLnByb3BzO1xyXG4gICAgICBjb25zdCB2YWx1ZTAgPSBkb21haW5bMF07XHJcbiAgICAgIGNvbnN0IHZhbHVlMSA9IHZhbHVlMCArIHZhbHVlWzFdIC0gdmFsdWVbMF07XHJcbiAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UoW3ZhbHVlMCwgdmFsdWUxXSk7XHJcbiAgICB9O1xyXG5cclxuICAgIF9zdGFydEFuaW1hdGlvbiA9ICgpID0+IHtcclxuICAgICAgdGhpcy5fcGF1c2VBbmltYXRpb24oKTtcclxuICAgICAgdGhpcy5wcm9wcy50b2dnbGVBbmltYXRpb24oKTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7aXNBbmltYXRpbmc6IHRydWV9KTtcclxuICAgIH07XHJcblxyXG4gICAgX3BhdXNlQW5pbWF0aW9uID0gKCkgPT4ge1xyXG4gICAgICBpZiAodGhpcy5fYW5pbWF0aW9uKSB7XHJcbiAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5fYW5pbWF0aW9uKTtcclxuICAgICAgICB0aGlzLnByb3BzLnRvZ2dsZUFuaW1hdGlvbigpO1xyXG4gICAgICAgIHRoaXMuX2FuaW1hdGlvbiA9IG51bGw7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7aXNBbmltYXRpbmc6IGZhbHNlfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIF9uZXh0RnJhbWUgPSAoKSA9PiB7XHJcbiAgICAgIHRoaXMuX2FuaW1hdGlvbiA9IG51bGw7XHJcblxyXG4gICAgICBjb25zdCB7ZG9tYWluLCB2YWx1ZX0gPSB0aGlzLnByb3BzO1xyXG4gICAgICBjb25zdCBzcGVlZCA9ICgoZG9tYWluWzFdIC0gZG9tYWluWzBdKSAvIEJBU0VfU1BFRUQpICogdGhpcy5wcm9wcy5zcGVlZDtcclxuXHJcbiAgICAgIC8vIGxvb3Agd2hlbiByZWFjaGVzIHRoZSBlbmRcclxuICAgICAgY29uc3QgdmFsdWUwID0gdmFsdWVbMV0gKyBzcGVlZCA+IGRvbWFpblsxXSA/IGRvbWFpblswXSA6IHZhbHVlWzBdICsgc3BlZWQ7XHJcbiAgICAgIGNvbnN0IHZhbHVlMSA9IHZhbHVlMCArIHZhbHVlWzFdIC0gdmFsdWVbMF07XHJcbiAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UoW3ZhbHVlMCwgdmFsdWUxXSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgY29uc3Qge2RvbWFpbiwgdmFsdWUsIGlzRW5sYXJnZWQsIGhpZGVUaW1lVGl0bGV9ID0gdGhpcy5wcm9wcztcclxuICAgICAgY29uc3Qge2lzQW5pbWF0aW5nfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGltZS1yYW5nZS1zbGlkZXJcIj5cclxuICAgICAgICAgIHshaGlkZVRpbWVUaXRsZSA/IChcclxuICAgICAgICAgICAgPFRpbWVUaXRsZSB0aW1lRm9ybWF0PXt0aGlzLnByb3BzLnRpbWVGb3JtYXR9IHZhbHVlPXt2YWx1ZX0gaXNFbmxhcmdlZD17aXNFbmxhcmdlZH0gLz5cclxuICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgPFN0eWxlZFNsaWRlckNvbnRhaW5lciBjbGFzc05hbWU9XCJ0aW1lLXJhbmdlLXNsaWRlcl9fY29udGFpbmVyXCIgaXNFbmxhcmdlZD17aXNFbmxhcmdlZH0+XHJcbiAgICAgICAgICAgIHtpc0VubGFyZ2VkID8gKFxyXG4gICAgICAgICAgICAgIDxQbGF5YmFja0NvbnRyb2xzXHJcbiAgICAgICAgICAgICAgICBpc0FuaW1hdGFibGU9e3RoaXMucHJvcHMuaXNBbmltYXRhYmxlfVxyXG4gICAgICAgICAgICAgICAgaXNFbmxhcmdlZD17aXNFbmxhcmdlZH1cclxuICAgICAgICAgICAgICAgIGlzQW5pbWF0aW5nPXtpc0FuaW1hdGluZ31cclxuICAgICAgICAgICAgICAgIHBhdXNlQW5pbWF0aW9uPXt0aGlzLl9wYXVzZUFuaW1hdGlvbn1cclxuICAgICAgICAgICAgICAgIHJlc2V0QW5pbWF0aW9uPXt0aGlzLl9yZXNldEFuaW1hdGlvbn1cclxuICAgICAgICAgICAgICAgIHN0YXJ0QW5pbWF0aW9uPXt0aGlzLl9zdGFydEFuaW1hdGlvbn1cclxuICAgICAgICAgICAgICAgIGJ1dHRvbkhlaWdodD1cIjEycHhcIlxyXG4gICAgICAgICAgICAgICAgYnV0dG9uU3R5bGU9XCJzZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBpc0VubGFyZ2VkID8gYGNhbGMoMTAwJSAtICR7YW5pbWF0aW9uQ29udHJvbFdpZHRofXB4KWAgOiAnMTAwJSdcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPFJhbmdlU2xpZGVyXHJcbiAgICAgICAgICAgICAgICByYW5nZT17ZG9tYWlufVxyXG4gICAgICAgICAgICAgICAgdmFsdWUwPXt2YWx1ZVswXX1cclxuICAgICAgICAgICAgICAgIHZhbHVlMT17dmFsdWVbMV19XHJcbiAgICAgICAgICAgICAgICBoaXN0b2dyYW09e3RoaXMucHJvcHMuaGlzdG9ncmFtfVxyXG4gICAgICAgICAgICAgICAgbGluZUNoYXJ0PXt0aGlzLnByb3BzLmxpbmVDaGFydH1cclxuICAgICAgICAgICAgICAgIHBsb3RUeXBlPXt0aGlzLnByb3BzLnBsb3RUeXBlfVxyXG4gICAgICAgICAgICAgICAgaXNFbmxhcmdlZD17aXNFbmxhcmdlZH1cclxuICAgICAgICAgICAgICAgIHNob3dJbnB1dD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICBzdGVwPXt0aGlzLnByb3BzLnN0ZXB9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5fc2xpZGVyVXBkYXRlfVxyXG4gICAgICAgICAgICAgICAgeEF4aXM9e1RpbWVTbGlkZXJNYXJrZXJ9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L1N0eWxlZFNsaWRlckNvbnRhaW5lcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIFRpbWVSYW5nZVNsaWRlci5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgICB0aW1lRm9ybWF0OiBERUZBVUxUX1RJTUVfRk9STUFUXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIFRpbWVSYW5nZVNsaWRlcjtcclxufVxyXG5cclxuY29uc3QgVGltZVZhbHVlV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMTFweDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6ICR7cHJvcHMgPT4gKHByb3BzLmlzRW5sYXJnZWQgPyAnY2VudGVyJyA6ICdzcGFjZS1iZXR3ZWVuJyl9O1xyXG5cclxuICAuaG9yaXpvbnRhbC1iYXIge1xyXG4gICAgcGFkZGluZzogMCAxMnB4O1xyXG4gICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudGl0bGVUZXh0Q29sb3J9O1xyXG4gIH1cclxuXHJcbiAgLnRpbWUtdmFsdWUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiAke3Byb3BzID0+IChwcm9wcy5pc0VubGFyZ2VkID8gJ3JvdycgOiAnY29sdW1uJyl9O1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcblxyXG4gICAgc3BhbiB7XHJcbiAgICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRpdGxlVGV4dENvbG9yfTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC50aW1lLXZhbHVlOmxhc3QtY2hpbGQge1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IFRpbWVUaXRsZSA9ICh7dmFsdWUsIGlzRW5sYXJnZWQsIHRpbWVGb3JtYXQgPSBERUZBVUxUX1RJTUVfRk9STUFUfSkgPT4gKFxyXG4gIDxUaW1lVmFsdWVXcmFwcGVyIGlzRW5sYXJnZWQ9e2lzRW5sYXJnZWR9IGNsYXNzTmFtZT1cInRpbWUtcmFuZ2Utc2xpZGVyX190aW1lLXRpdGxlXCI+XHJcbiAgICA8VGltZVZhbHVlIGtleT17MH0gdmFsdWU9e21vbWVudC51dGModmFsdWVbMF0pLmZvcm1hdCh0aW1lRm9ybWF0KX0gc3BsaXQ9eyFpc0VubGFyZ2VkfSAvPlxyXG4gICAge2lzRW5sYXJnZWQgPyAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG9yaXpvbnRhbC1iYXJcIj5cclxuICAgICAgICA8TWludXMgaGVpZ2h0PVwiMTJweFwiIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKSA6IG51bGx9XHJcbiAgICA8VGltZVZhbHVlIGtleT17MX0gdmFsdWU9e21vbWVudC51dGModmFsdWVbMV0pLmZvcm1hdCh0aW1lRm9ybWF0KX0gc3BsaXQ9eyFpc0VubGFyZ2VkfSAvPlxyXG4gIDwvVGltZVZhbHVlV3JhcHBlcj5cclxuKTtcclxuXHJcbmNvbnN0IFRpbWVWYWx1ZSA9ICh7dmFsdWUsIHNwbGl0fSkgPT4gKFxyXG4gIC8vIHJlbmRlciB0d28gbGluZXMgaWYgbm90IGVubGFyZ2VkXHJcbiAgPGRpdiBjbGFzc05hbWU9XCJ0aW1lLXZhbHVlXCI+XHJcbiAgICB7c3BsaXQgPyAoXHJcbiAgICAgIHZhbHVlXHJcbiAgICAgICAgLnNwbGl0KCcgJylcclxuICAgICAgICAubWFwKCh2LCBpKSA9PiAoXHJcbiAgICAgICAgICA8ZGl2IGtleT17aX0+XHJcbiAgICAgICAgICAgIHtpID09PSAwID8gPFNlbGVjdFRleHQ+e3Z9PC9TZWxlY3RUZXh0PiA6IDxTZWxlY3RUZXh0Qm9sZD57dn08L1NlbGVjdFRleHRCb2xkPn1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkpXHJcbiAgICApIDogKFxyXG4gICAgICA8U2VsZWN0VGV4dEJvbGQ+e3ZhbHVlfTwvU2VsZWN0VGV4dEJvbGQ+XHJcbiAgICApfVxyXG4gIDwvZGl2PlxyXG4pO1xyXG4iXX0=