"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = RangeSliderFactory;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _reactLifecyclesCompat = require("react-lifecycles-compat");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _rangePlot = _interopRequireDefault(require("./range-plot"));

var _slider = _interopRequireDefault(require("./slider/slider"));

var _styledComponents2 = require("./styled-components");

var _dataUtils = require("../../utils/data-utils");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  margin-top: 6px;\n  display: flex;\n  justify-content: space-between;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  position: relative;\n  align-items: center;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  width: ", "px;\n  margin-left: ", "px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var SliderInput = (0, _styledComponents["default"])(_styledComponents2.Input)(_templateObject(), function (props) {
  return props.theme.sliderInputWidth;
}, function (props) {
  return props.flush ? 0 : props.size === 'tiny' ? 12 : 18;
});

var SliderWrapper = _styledComponents["default"].div(_templateObject2());

var RangeInputWrapper = _styledComponents["default"].div(_templateObject3());

RangeSliderFactory.deps = [_rangePlot["default"]];

function RangeSliderFactory(RangePlot) {
  var RangeSlider = /*#__PURE__*/function (_Component) {
    (0, _inherits2["default"])(RangeSlider, _Component);

    var _super = _createSuper(RangeSlider);

    function RangeSlider() {
      var _this;

      (0, _classCallCheck2["default"])(this, RangeSlider);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
        value0: 0,
        value1: 1,
        prevValue0: 0,
        prevValue1: 1,
        width: 288
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "sliderContainer", /*#__PURE__*/(0, _react.createRef)());
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "inputValue0", /*#__PURE__*/(0, _react.createRef)());
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "inputValue1", /*#__PURE__*/(0, _react.createRef)());
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_isVal0InRange", function (val) {
        var _this$props = _this.props,
            value1 = _this$props.value1,
            range = _this$props.range;
        return Boolean(val >= range[0] && val <= value1);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_isVal1InRange", function (val) {
        var _this$props2 = _this.props,
            range = _this$props2.range,
            value0 = _this$props2.value0;
        return Boolean(val <= range[1] && val >= value0);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_roundValToStep", function (val) {
        var _this$props3 = _this.props,
            range = _this$props3.range,
            step = _this$props3.step;
        return (0, _dataUtils.roundValToStep)(range[0], step, val);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_setRangeVal1", function (val) {
        var _this$props4 = _this.props,
            value0 = _this$props4.value0,
            onChange = _this$props4.onChange;
        val = Number(val);

        if (_this._isVal1InRange(val)) {
          onChange([value0, _this._roundValToStep(val)]);
          return true;
        }

        return false;
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_setRangeVal0", function (val) {
        var _this$props5 = _this.props,
            value1 = _this$props5.value1,
            onChange = _this$props5.onChange;
        var val0 = Number(val);

        if (_this._isVal0InRange(val0)) {
          onChange([_this._roundValToStep(val0), value1]);
          return true;
        }

        return false;
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onChangeInput", function (key, e) {
        _this.setState((0, _defineProperty2["default"])({}, key, e.target.value));
      });
      return _this;
    }

    (0, _createClass2["default"])(RangeSlider, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this._resize();
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps, prevState) {
        this._resize();
      }
    }, {
      key: "_resize",
      value: function _resize() {
        var width = this.sliderContainer.current.offsetWidth;

        if (width !== this.state.width) {
          this.setState({
            width: width
          });
        }
      }
    }, {
      key: "_renderInput",
      value: function _renderInput(key) {
        var _this2 = this;

        var setRange = key === 'value0' ? this._setRangeVal0 : this._setRangeVal1;
        var ref = key === 'value0' ? this.inputValue0 : this.inputValue1;

        var update = function update(e) {
          if (!setRange(e.target.value)) {
            _this2.setState((0, _defineProperty2["default"])({}, key, _this2.state[key]));
          }
        };

        var onChange = this._onChangeInput.bind(this, key);

        return /*#__PURE__*/_react["default"].createElement(SliderInput, {
          className: "kg-range-slider__input",
          type: "number",
          ref: ref,
          id: "slider-input-".concat(key),
          key: key,
          value: this.state[key],
          onChange: onChange,
          onKeyPress: function onKeyPress(e) {
            if (e.key === 'Enter') {
              update(e);
              ref.current.blur();
            }
          },
          onBlur: update,
          flush: key === 'value0',
          size: this.props.inputSize,
          secondary: this.props.inputTheme === 'secondary'
        });
      }
    }, {
      key: "render",
      value: function render() {
        var _this3 = this;

        var _this$props6 = this.props,
            isRanged = _this$props6.isRanged,
            showInput = _this$props6.showInput,
            histogram = _this$props6.histogram,
            lineChart = _this$props6.lineChart,
            plotType = _this$props6.plotType,
            isEnlarged = _this$props6.isEnlarged,
            range = _this$props6.range,
            onChange = _this$props6.onChange,
            value0 = _this$props6.value0,
            value1 = _this$props6.value1,
            sliderHandleWidth = _this$props6.sliderHandleWidth,
            step = _this$props6.step;
        var height = isRanged && showInput ? '16px' : '24px';
        var width = this.state.width;
        var plotWidth = Math.max(width - sliderHandleWidth, 0);
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: "kg-range-slider",
          style: {
            width: '100%',
            padding: "0 ".concat(sliderHandleWidth / 2, "px")
          },
          ref: this.sliderContainer
        }, histogram && histogram.length ? /*#__PURE__*/_react["default"].createElement(RangePlot, {
          histogram: histogram,
          lineChart: lineChart,
          plotType: plotType,
          isEnlarged: isEnlarged,
          onBrush: function onBrush(val0, val1) {
            onChange([_this3._roundValToStep(val0), _this3._roundValToStep(val1)]);
          },
          range: range,
          value: [value0, value1],
          width: plotWidth
        }) : null, /*#__PURE__*/_react["default"].createElement(SliderWrapper, {
          style: {
            height: height
          },
          className: "kg-range-slider__slider"
        }, this.props.xAxis ? /*#__PURE__*/_react["default"].createElement(this.props.xAxis, {
          width: plotWidth,
          domain: range
        }) : null, /*#__PURE__*/_react["default"].createElement(_slider["default"], {
          showValues: false,
          isRanged: isRanged,
          minValue: range[0],
          maxValue: range[1],
          value0: value0,
          value1: value1,
          step: step,
          handleWidth: sliderHandleWidth,
          onSlider0Change: this._setRangeVal0,
          onSlider1Change: this._setRangeVal1,
          onSliderBarChange: function onSliderBarChange(val0, val1) {
            onChange([val0, val1]);
          },
          enableBarDrag: true
        }), !isRanged && showInput ? this._renderInput('value1') : null), isRanged && showInput ? /*#__PURE__*/_react["default"].createElement(RangeInputWrapper, {
          className: "range-slider__input-group"
        }, this._renderInput('value0'), this._renderInput('value1')) : null);
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function getDerivedStateFromProps(props, state) {
        var update = null;
        var value0 = props.value0,
            value1 = props.value1;

        if (props.value0 !== state.prevValue0 && !isNaN(value0)) {
          update = _objectSpread(_objectSpread({}, update || {}), {}, {
            value0: value0,
            prevValue0: value0
          });
        }

        if (props.value1 !== state.prevValue1 && !isNaN(value1)) {
          update = _objectSpread(_objectSpread({}, update || {}), {}, {
            value1: value1,
            prevValue1: value1
          });
        }

        return update;
      }
    }]);
    return RangeSlider;
  }(_react.Component);

  (0, _defineProperty2["default"])(RangeSlider, "propTypes", {
    range: _propTypes["default"].arrayOf(_propTypes["default"].number).isRequired,
    value0: _propTypes["default"].number.isRequired,
    value1: _propTypes["default"].number.isRequired,
    onChange: _propTypes["default"].func.isRequired,
    histogram: _propTypes["default"].arrayOf(_propTypes["default"].any),
    isRanged: _propTypes["default"].bool,
    isEnlarged: _propTypes["default"].bool,
    showInput: _propTypes["default"].bool,
    inputTheme: _propTypes["default"].string,
    inputSize: _propTypes["default"].string,
    step: _propTypes["default"].number,
    sliderHandleWidth: _propTypes["default"].number,
    xAxis: _propTypes["default"].func
  });
  (0, _defineProperty2["default"])(RangeSlider, "defaultProps", {
    isEnlarged: false,
    isRanged: true,
    showInput: true,
    sliderHandleWidth: 12,
    inputTheme: '',
    inputSize: 'small',
    onChange: function onChange() {}
  });
  (0, _reactLifecyclesCompat.polyfill)(RangeSlider);
  return RangeSlider;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9yYW5nZS1zbGlkZXIuanMiXSwibmFtZXMiOlsiU2xpZGVySW5wdXQiLCJJbnB1dCIsInByb3BzIiwidGhlbWUiLCJzbGlkZXJJbnB1dFdpZHRoIiwiZmx1c2giLCJzaXplIiwiU2xpZGVyV3JhcHBlciIsInN0eWxlZCIsImRpdiIsIlJhbmdlSW5wdXRXcmFwcGVyIiwiUmFuZ2VTbGlkZXJGYWN0b3J5IiwiZGVwcyIsIlJhbmdlUGxvdEZhY3RvcnkiLCJSYW5nZVBsb3QiLCJSYW5nZVNsaWRlciIsInZhbHVlMCIsInZhbHVlMSIsInByZXZWYWx1ZTAiLCJwcmV2VmFsdWUxIiwid2lkdGgiLCJ2YWwiLCJyYW5nZSIsIkJvb2xlYW4iLCJzdGVwIiwib25DaGFuZ2UiLCJOdW1iZXIiLCJfaXNWYWwxSW5SYW5nZSIsIl9yb3VuZFZhbFRvU3RlcCIsInZhbDAiLCJfaXNWYWwwSW5SYW5nZSIsImtleSIsImUiLCJzZXRTdGF0ZSIsInRhcmdldCIsInZhbHVlIiwiX3Jlc2l6ZSIsInByZXZQcm9wcyIsInByZXZTdGF0ZSIsInNsaWRlckNvbnRhaW5lciIsImN1cnJlbnQiLCJvZmZzZXRXaWR0aCIsInN0YXRlIiwic2V0UmFuZ2UiLCJfc2V0UmFuZ2VWYWwwIiwiX3NldFJhbmdlVmFsMSIsInJlZiIsImlucHV0VmFsdWUwIiwiaW5wdXRWYWx1ZTEiLCJ1cGRhdGUiLCJfb25DaGFuZ2VJbnB1dCIsImJpbmQiLCJibHVyIiwiaW5wdXRTaXplIiwiaW5wdXRUaGVtZSIsImlzUmFuZ2VkIiwic2hvd0lucHV0IiwiaGlzdG9ncmFtIiwibGluZUNoYXJ0IiwicGxvdFR5cGUiLCJpc0VubGFyZ2VkIiwic2xpZGVySGFuZGxlV2lkdGgiLCJoZWlnaHQiLCJwbG90V2lkdGgiLCJNYXRoIiwibWF4IiwicGFkZGluZyIsImxlbmd0aCIsInZhbDEiLCJ4QXhpcyIsIl9yZW5kZXJJbnB1dCIsImlzTmFOIiwiQ29tcG9uZW50IiwiUHJvcFR5cGVzIiwiYXJyYXlPZiIsIm51bWJlciIsImlzUmVxdWlyZWQiLCJmdW5jIiwiYW55IiwiYm9vbCIsInN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsV0FBVyxHQUFHLGtDQUFPQyx3QkFBUCxDQUFILG9CQUNOLFVBQUFDLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsZ0JBQWhCO0FBQUEsQ0FEQyxFQUVBLFVBQUFGLEtBQUs7QUFBQSxTQUFLQSxLQUFLLENBQUNHLEtBQU4sR0FBYyxDQUFkLEdBQWtCSCxLQUFLLENBQUNJLElBQU4sS0FBZSxNQUFmLEdBQXdCLEVBQXhCLEdBQTZCLEVBQXBEO0FBQUEsQ0FGTCxDQUFqQjs7QUFLQSxJQUFNQyxhQUFhLEdBQUdDLDZCQUFPQyxHQUFWLG9CQUFuQjs7QUFNQSxJQUFNQyxpQkFBaUIsR0FBR0YsNkJBQU9DLEdBQVYsb0JBQXZCOztBQU1BRSxrQkFBa0IsQ0FBQ0MsSUFBbkIsR0FBMEIsQ0FBQ0MscUJBQUQsQ0FBMUI7O0FBRWUsU0FBU0Ysa0JBQVQsQ0FBNEJHLFNBQTVCLEVBQXVDO0FBQUEsTUFDOUNDLFdBRDhDO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTs7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxnR0F3QzFDO0FBQ05DLFFBQUFBLE1BQU0sRUFBRSxDQURGO0FBRU5DLFFBQUFBLE1BQU0sRUFBRSxDQUZGO0FBR05DLFFBQUFBLFVBQVUsRUFBRSxDQUhOO0FBSU5DLFFBQUFBLFVBQVUsRUFBRSxDQUpOO0FBS05DLFFBQUFBLEtBQUssRUFBRTtBQUxELE9BeEMwQztBQUFBLHVIQXdEaEMsdUJBeERnQztBQUFBLG1IQXlEcEMsdUJBekRvQztBQUFBLG1IQTBEcEMsdUJBMURvQztBQUFBLHlHQTRE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QUFJcEJLLElBQUFBLGlCQUFpQixFQUFFLEVBSkM7QUFLcEJQLElBQUFBLFVBQVUsRUFBRSxFQUxRO0FBTXBCRCxJQUFBQSxTQUFTLEVBQUUsT0FOUztBQU9wQjVCLElBQUFBLFFBQVEsRUFBRSxvQkFBTSxDQUFFO0FBUEUsR0FsQjRCO0FBc05wRCx1Q0FBU1YsV0FBVDtBQUVBLFNBQU9BLFdBQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMCBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudCwgY3JlYXRlUmVmfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7cG9seWZpbGx9IGZyb20gJ3JlYWN0LWxpZmVjeWNsZXMtY29tcGF0JztcclxuXHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgUmFuZ2VQbG90RmFjdG9yeSBmcm9tICcuL3JhbmdlLXBsb3QnO1xyXG5pbXBvcnQgU2xpZGVyIGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL3NsaWRlci9zbGlkZXInO1xyXG5pbXBvcnQge0lucHV0fSBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9zdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5pbXBvcnQge3JvdW5kVmFsVG9TdGVwfSBmcm9tICd1dGlscy9kYXRhLXV0aWxzJztcclxuXHJcbmNvbnN0IFNsaWRlcklucHV0ID0gc3R5bGVkKElucHV0KWBcclxuICB3aWR0aDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5zbGlkZXJJbnB1dFdpZHRofXB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAke3Byb3BzID0+IChwcm9wcy5mbHVzaCA/IDAgOiBwcm9wcy5zaXplID09PSAndGlueScgPyAxMiA6IDE4KX1weDtcclxuYDtcclxuXHJcbmNvbnN0IFNsaWRlcldyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbmA7XHJcblxyXG5jb25zdCBSYW5nZUlucHV0V3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgbWFyZ2luLXRvcDogNnB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5gO1xyXG5cclxuUmFuZ2VTbGlkZXJGYWN0b3J5LmRlcHMgPSBbUmFuZ2VQbG90RmFjdG9yeV07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSYW5nZVNsaWRlckZhY3RvcnkoUmFuZ2VQbG90KSB7XHJcbiAgY2xhc3MgUmFuZ2VTbGlkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcclxuICAgICAgcmFuZ2U6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5udW1iZXIpLmlzUmVxdWlyZWQsXHJcbiAgICAgIHZhbHVlMDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxyXG4gICAgICB2YWx1ZTE6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcclxuICAgICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgICAgIGhpc3RvZ3JhbTogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLmFueSksXHJcbiAgICAgIGlzUmFuZ2VkOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgICAgaXNFbmxhcmdlZDogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICAgIHNob3dJbnB1dDogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICAgIGlucHV0VGhlbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgIGlucHV0U2l6ZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgc3RlcDogUHJvcFR5cGVzLm51bWJlcixcclxuICAgICAgc2xpZGVySGFuZGxlV2lkdGg6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICAgIHhBeGlzOiBQcm9wVHlwZXMuZnVuY1xyXG4gICAgfTtcclxuXHJcbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xyXG4gICAgICBpc0VubGFyZ2VkOiBmYWxzZSxcclxuICAgICAgaXNSYW5nZWQ6IHRydWUsXHJcbiAgICAgIHNob3dJbnB1dDogdHJ1ZSxcclxuICAgICAgc2xpZGVySGFuZGxlV2lkdGg6IDEyLFxyXG4gICAgICBpbnB1dFRoZW1lOiAnJyxcclxuICAgICAgaW5wdXRTaXplOiAnc21hbGwnLFxyXG4gICAgICBvbkNoYW5nZTogKCkgPT4ge31cclxuICAgIH07XHJcblxyXG4gICAgc3RhdGljIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyhwcm9wcywgc3RhdGUpIHtcclxuICAgICAgbGV0IHVwZGF0ZSA9IG51bGw7XHJcbiAgICAgIGNvbnN0IHt2YWx1ZTAsIHZhbHVlMX0gPSBwcm9wcztcclxuICAgICAgaWYgKHByb3BzLnZhbHVlMCAhPT0gc3RhdGUucHJldlZhbHVlMCAmJiAhaXNOYU4odmFsdWUwKSkge1xyXG4gICAgICAgIHVwZGF0ZSA9IHsuLi4odXBkYXRlIHx8IHt9KSwgdmFsdWUwLCBwcmV2VmFsdWUwOiB2YWx1ZTB9O1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChwcm9wcy52YWx1ZTEgIT09IHN0YXRlLnByZXZWYWx1ZTEgJiYgIWlzTmFOKHZhbHVlMSkpIHtcclxuICAgICAgICB1cGRhdGUgPSB7Li4uKHVwZGF0ZSB8fCB7fSksIHZhbHVlMSwgcHJldlZhbHVlMTogdmFsdWUxfTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gdXBkYXRlO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRlID0ge1xyXG4gICAgICB2YWx1ZTA6IDAsXHJcbiAgICAgIHZhbHVlMTogMSxcclxuICAgICAgcHJldlZhbHVlMDogMCxcclxuICAgICAgcHJldlZhbHVlMTogMSxcclxuICAgICAgd2lkdGg6IDI4OFxyXG4gICAgfTtcclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgdGhpcy5fcmVzaXplKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlKSB7XHJcbiAgICAgIHRoaXMuX3Jlc2l6ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHNsaWRlckNvbnRhaW5lciA9IGNyZWF0ZVJlZigpO1xyXG4gICAgaW5wdXRWYWx1ZTAgPSBjcmVhdGVSZWYoKTtcclxuICAgIGlucHV0VmFsdWUxID0gY3JlYXRlUmVmKCk7XHJcblxyXG4gICAgX2lzVmFsMEluUmFuZ2UgPSB2YWwgPT4ge1xyXG4gICAgICBjb25zdCB7dmFsdWUxLCByYW5nZX0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgcmV0dXJuIEJvb2xlYW4odmFsID49IHJhbmdlWzBdICYmIHZhbCA8PSB2YWx1ZTEpO1xyXG4gICAgfTtcclxuXHJcbiAgICBfaXNWYWwxSW5SYW5nZSA9IHZhbCA9PiB7XHJcbiAgICAgIGNvbnN0IHtyYW5nZSwgdmFsdWUwfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICByZXR1cm4gQm9vbGVhbih2YWwgPD0gcmFuZ2VbMV0gJiYgdmFsID49IHZhbHVlMCk7XHJcbiAgICB9O1xyXG5cclxuICAgIF9yb3VuZFZhbFRvU3RlcCA9IHZhbCA9PiB7XHJcbiAgICAgIGNvbnN0IHtyYW5nZSwgc3RlcH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgcmV0dXJuIHJvdW5kVmFsVG9TdGVwKHJhbmdlWzBdLCBzdGVwLCB2YWwpO1xyXG4gICAgfTtcclxuXHJcbiAgICBfc2V0UmFuZ2VWYWwxID0gdmFsID0+IHtcclxuICAgICAgY29uc3Qge3ZhbHVlMCwgb25DaGFuZ2V9ID0gdGhpcy5wcm9wcztcclxuICAgICAgdmFsID0gTnVtYmVyKHZhbCk7XHJcbiAgICAgIGlmICh0aGlzLl9pc1ZhbDFJblJhbmdlKHZhbCkpIHtcclxuICAgICAgICBvbkNoYW5nZShbdmFsdWUwLCB0aGlzLl9yb3VuZFZhbFRvU3RlcCh2YWwpXSk7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfTtcclxuXHJcbiAgICBfc2V0UmFuZ2VWYWwwID0gdmFsID0+IHtcclxuICAgICAgY29uc3Qge3ZhbHVlMSwgb25DaGFuZ2V9ID0gdGhpcy5wcm9wcztcclxuICAgICAgY29uc3QgdmFsMCA9IE51bWJlcih2YWwpO1xyXG5cclxuICAgICAgaWYgKHRoaXMuX2lzVmFsMEluUmFuZ2UodmFsMCkpIHtcclxuICAgICAgICBvbkNoYW5nZShbdGhpcy5fcm91bmRWYWxUb1N0ZXAodmFsMCksIHZhbHVlMV0pO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH07XHJcblxyXG4gICAgX3Jlc2l6ZSgpIHtcclxuICAgICAgY29uc3Qgd2lkdGggPSB0aGlzLnNsaWRlckNvbnRhaW5lci5jdXJyZW50Lm9mZnNldFdpZHRoO1xyXG4gICAgICBpZiAod2lkdGggIT09IHRoaXMuc3RhdGUud2lkdGgpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHt3aWR0aH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBfb25DaGFuZ2VJbnB1dCA9IChrZXksIGUpID0+IHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7W2tleV06IGUudGFyZ2V0LnZhbHVlfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIF9yZW5kZXJJbnB1dChrZXkpIHtcclxuICAgICAgY29uc3Qgc2V0UmFuZ2UgPSBrZXkgPT09ICd2YWx1ZTAnID8gdGhpcy5fc2V0UmFuZ2VWYWwwIDogdGhpcy5fc2V0UmFuZ2VWYWwxO1xyXG4gICAgICBjb25zdCByZWYgPSBrZXkgPT09ICd2YWx1ZTAnID8gdGhpcy5pbnB1dFZhbHVlMCA6IHRoaXMuaW5wdXRWYWx1ZTE7XHJcbiAgICAgIGNvbnN0IHVwZGF0ZSA9IGUgPT4ge1xyXG4gICAgICAgIGlmICghc2V0UmFuZ2UoZS50YXJnZXQudmFsdWUpKSB7XHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtba2V5XTogdGhpcy5zdGF0ZVtrZXldfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG5cclxuICAgICAgY29uc3Qgb25DaGFuZ2UgPSB0aGlzLl9vbkNoYW5nZUlucHV0LmJpbmQodGhpcywga2V5KTtcclxuXHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPFNsaWRlcklucHV0XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJrZy1yYW5nZS1zbGlkZXJfX2lucHV0XCJcclxuICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgcmVmPXtyZWZ9XHJcbiAgICAgICAgICBpZD17YHNsaWRlci1pbnB1dC0ke2tleX1gfVxyXG4gICAgICAgICAga2V5PXtrZXl9XHJcbiAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZVtrZXldfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxyXG4gICAgICAgICAgb25LZXlQcmVzcz17ZSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xyXG4gICAgICAgICAgICAgIHVwZGF0ZShlKTtcclxuICAgICAgICAgICAgICByZWYuY3VycmVudC5ibHVyKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICBvbkJsdXI9e3VwZGF0ZX1cclxuICAgICAgICAgIGZsdXNoPXtrZXkgPT09ICd2YWx1ZTAnfVxyXG4gICAgICAgICAgc2l6ZT17dGhpcy5wcm9wcy5pbnB1dFNpemV9XHJcbiAgICAgICAgICBzZWNvbmRhcnk9e3RoaXMucHJvcHMuaW5wdXRUaGVtZSA9PT0gJ3NlY29uZGFyeSd9XHJcbiAgICAgICAgLz5cclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgIGNvbnN0IHtcclxuICAgICAgICBpc1JhbmdlZCxcclxuICAgICAgICBzaG93SW5wdXQsXHJcbiAgICAgICAgaGlzdG9ncmFtLFxyXG4gICAgICAgIGxpbmVDaGFydCxcclxuICAgICAgICBwbG90VHlwZSxcclxuICAgICAgICBpc0VubGFyZ2VkLFxyXG4gICAgICAgIHJhbmdlLFxyXG4gICAgICAgIG9uQ2hhbmdlLFxyXG4gICAgICAgIHZhbHVlMCxcclxuICAgICAgICB2YWx1ZTEsXHJcbiAgICAgICAgc2xpZGVySGFuZGxlV2lkdGgsXHJcbiAgICAgICAgc3RlcFxyXG4gICAgICB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgIGNvbnN0IGhlaWdodCA9IGlzUmFuZ2VkICYmIHNob3dJbnB1dCA/ICcxNnB4JyA6ICcyNHB4JztcclxuICAgICAgY29uc3Qge3dpZHRofSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgIGNvbnN0IHBsb3RXaWR0aCA9IE1hdGgubWF4KHdpZHRoIC0gc2xpZGVySGFuZGxlV2lkdGgsIDApO1xyXG5cclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJrZy1yYW5nZS1zbGlkZXJcIlxyXG4gICAgICAgICAgc3R5bGU9e3t3aWR0aDogJzEwMCUnLCBwYWRkaW5nOiBgMCAke3NsaWRlckhhbmRsZVdpZHRoIC8gMn1weGB9fVxyXG4gICAgICAgICAgcmVmPXt0aGlzLnNsaWRlckNvbnRhaW5lcn1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7aGlzdG9ncmFtICYmIGhpc3RvZ3JhbS5sZW5ndGggPyAoXHJcbiAgICAgICAgICAgIDxSYW5nZVBsb3RcclxuICAgICAgICAgICAgICBoaXN0b2dyYW09e2hpc3RvZ3JhbX1cclxuICAgICAgICAgICAgICBsaW5lQ2hhcnQ9e2xpbmVDaGFydH1cclxuICAgICAgICAgICAgICBwbG90VHlwZT17cGxvdFR5cGV9XHJcbiAgICAgICAgICAgICAgaXNFbmxhcmdlZD17aXNFbmxhcmdlZH1cclxuICAgICAgICAgICAgICBvbkJydXNoPXsodmFsMCwgdmFsMSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2UoW3RoaXMuX3JvdW5kVmFsVG9TdGVwKHZhbDApLCB0aGlzLl9yb3VuZFZhbFRvU3RlcCh2YWwxKV0pO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgcmFuZ2U9e3JhbmdlfVxyXG4gICAgICAgICAgICAgIHZhbHVlPXtbdmFsdWUwLCB2YWx1ZTFdfVxyXG4gICAgICAgICAgICAgIHdpZHRoPXtwbG90V2lkdGh9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgIDxTbGlkZXJXcmFwcGVyIHN0eWxlPXt7aGVpZ2h0fX0gY2xhc3NOYW1lPVwia2ctcmFuZ2Utc2xpZGVyX19zbGlkZXJcIj5cclxuICAgICAgICAgICAge3RoaXMucHJvcHMueEF4aXMgPyA8dGhpcy5wcm9wcy54QXhpcyB3aWR0aD17cGxvdFdpZHRofSBkb21haW49e3JhbmdlfSAvPiA6IG51bGx9XHJcbiAgICAgICAgICAgIDxTbGlkZXJcclxuICAgICAgICAgICAgICBzaG93VmFsdWVzPXtmYWxzZX1cclxuICAgICAgICAgICAgICBpc1JhbmdlZD17aXNSYW5nZWR9XHJcbiAgICAgICAgICAgICAgbWluVmFsdWU9e3JhbmdlWzBdfVxyXG4gICAgICAgICAgICAgIG1heFZhbHVlPXtyYW5nZVsxXX1cclxuICAgICAgICAgICAgICB2YWx1ZTA9e3ZhbHVlMH1cclxuICAgICAgICAgICAgICB2YWx1ZTE9e3ZhbHVlMX1cclxuICAgICAgICAgICAgICBzdGVwPXtzdGVwfVxyXG4gICAgICAgICAgICAgIGhhbmRsZVdpZHRoPXtzbGlkZXJIYW5kbGVXaWR0aH1cclxuICAgICAgICAgICAgICBvblNsaWRlcjBDaGFuZ2U9e3RoaXMuX3NldFJhbmdlVmFsMH1cclxuICAgICAgICAgICAgICBvblNsaWRlcjFDaGFuZ2U9e3RoaXMuX3NldFJhbmdlVmFsMX1cclxuICAgICAgICAgICAgICBvblNsaWRlckJhckNoYW5nZT17KHZhbDAsIHZhbDEpID0+IHtcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlKFt2YWwwLCB2YWwxXSk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICBlbmFibGVCYXJEcmFnXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIHshaXNSYW5nZWQgJiYgc2hvd0lucHV0ID8gdGhpcy5fcmVuZGVySW5wdXQoJ3ZhbHVlMScpIDogbnVsbH1cclxuICAgICAgICAgIDwvU2xpZGVyV3JhcHBlcj5cclxuICAgICAgICAgIHtpc1JhbmdlZCAmJiBzaG93SW5wdXQgPyAoXHJcbiAgICAgICAgICAgIDxSYW5nZUlucHV0V3JhcHBlciBjbGFzc05hbWU9XCJyYW5nZS1zbGlkZXJfX2lucHV0LWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAge3RoaXMuX3JlbmRlcklucHV0KCd2YWx1ZTAnKX1cclxuICAgICAgICAgICAgICB7dGhpcy5fcmVuZGVySW5wdXQoJ3ZhbHVlMScpfVxyXG4gICAgICAgICAgICA8L1JhbmdlSW5wdXRXcmFwcGVyPlxyXG4gICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwb2x5ZmlsbChSYW5nZVNsaWRlcik7XHJcblxyXG4gIHJldHVybiBSYW5nZVNsaWRlcjtcclxufVxyXG4iXX0=