"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = RangePlotFactory;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _d3Scale = require("d3-scale");

var _moment = _interopRequireDefault(require("moment"));

var _d3Array = require("d3-array");

var _reselect = require("reselect");

var _reactVis = require("react-vis");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _classnames = _interopRequireDefault(require("classnames"));

var _rangeBrush = _interopRequireDefault(require("./range-brush"));

var _filterUtils = require("../../utils/filter-utils");

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  background-color: #d3d8e0;\n  border-radius: 2px;\n  color: ", ";\n  font-size: 9px;\n  margin: 4px;\n  padding: 3px 6px;\n  pointer-events: none;\n  user-select: none;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  .histogram-bars {\n    rect {\n      fill: ", ";\n    }\n    rect.in-range {\n      fill: ", ";\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  .rv-xy-plot__inner path {\n    fill: none;\n    stroke-width: 1.5;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var chartMargin = {
  top: 8,
  bottom: 0,
  left: 0,
  right: 0
};
var chartH = 52;
var containerH = 68;
var histogramStyle = {
  highlightW: 0.7,
  unHighlightedW: 0.4
};

function RangePlotFactory() {
  var RangePlot = /*#__PURE__*/function (_Component) {
    (0, _inherits2["default"])(RangePlot, _Component);

    var _super = _createSuper(RangePlot);

    function RangePlot() {
      var _this;

      (0, _classCallCheck2["default"])(this, RangePlot);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
        hoveredDP: null
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "domainSelector", function (props) {
        return props.lineChart && props.lineChart.xDomain;
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "hintFormatter", (0, _reselect.createSelector)(_this.domainSelector, function (domain) {
        return (0, _filterUtils.getTimeWidgetHintFormatter)(domain);
      }));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onMouseMove", function (hoveredDP) {
        _this.setState({
          hoveredDP: hoveredDP
        });
      });
      return _this;
    }

    (0, _createClass2["default"])(RangePlot, [{
      key: "render",
      value: function render() {
        var _this$props = this.props,
            onBrush = _this$props.onBrush,
            range = _this$props.range,
            value = _this$props.value,
            width = _this$props.width,
            plotType = _this$props.plotType,
            lineChart = _this$props.lineChart,
            histogram = _this$props.histogram;
        var domain = [histogram[0].x0, histogram[histogram.length - 1].x1];

        var brushComponent = /*#__PURE__*/_react["default"].createElement(_rangeBrush["default"], {
          domain: domain,
          onBrush: onBrush,
          range: range,
          value: value,
          width: width
        });

        return /*#__PURE__*/_react["default"].createElement("div", {
          style: {
            height: "".concat(containerH, "px"),
            position: 'relative'
          }
        }, plotType === 'lineChart' ? /*#__PURE__*/_react["default"].createElement(LineChart, {
          hoveredDP: this.state.hoveredDP,
          width: width,
          height: containerH,
          margin: chartMargin,
          children: brushComponent,
          onMouseMove: this.onMouseMove,
          yDomain: lineChart.yDomain,
          hintFormat: this.hintFormatter(this.props),
          data: lineChart.series
        }) : /*#__PURE__*/_react["default"].createElement(Histogram, {
          width: width,
          height: chartH,
          value: value,
          margin: chartMargin,
          histogram: histogram,
          brushComponent: brushComponent
        }));
      }
    }]);
    return RangePlot;
  }(_react.Component);

  (0, _defineProperty2["default"])(RangePlot, "propTypes", {
    value: _propTypes["default"].arrayOf(_propTypes["default"].number).isRequired,
    histogram: _propTypes["default"].arrayOf(_propTypes["default"].shape({
      x0: _propTypes["default"].number,
      x1: _propTypes["default"].number
    })),
    lineChart: _propTypes["default"].object,
    plotType: _propTypes["default"].string,
    isEnlarged: _propTypes["default"].bool,
    onBlur: _propTypes["default"].func,
    width: _propTypes["default"].number.isRequired
  });
  return RangePlot;
}

var Histogram = function Histogram(_ref) {
  var width = _ref.width,
      height = _ref.height,
      margin = _ref.margin,
      histogram = _ref.histogram,
      value = _ref.value,
      brushComponent = _ref.brushComponent;
  var domain = [histogram[0].x0, histogram[histogram.length - 1].x1];
  var barWidth = width / histogram.length;
  var x = (0, _d3Scale.scaleLinear)().domain(domain).range([0, width]);
  var y = (0, _d3Scale.scaleLinear)().domain([0, (0, _d3Array.max)(histogram, function (d) {
    return d.count;
  })]).range([0, height]);
  return /*#__PURE__*/_react["default"].createElement(HistogramWrapper, {
    width: width,
    height: height,
    style: {
      marginTop: "".concat(margin.top, "px")
    }
  }, /*#__PURE__*/_react["default"].createElement("g", {
    className: "histogram-bars"
  }, histogram.map(function (bar) {
    var inRange = bar.x0 >= value[0] && bar.x1 <= value[1];
    var wRatio = inRange ? histogramStyle.highlightW : histogramStyle.unHighlightedW;
    return /*#__PURE__*/_react["default"].createElement("rect", {
      className: (0, _classnames["default"])({
        'in-range': inRange
      }),
      key: bar.x0,
      height: y(bar.count),
      width: barWidth * wRatio,
      x: x(bar.x0) + barWidth * (1 - wRatio) / 2,
      rx: 1,
      ry: 1,
      y: height - y(bar.count)
    });
  })), brushComponent);
};

var LineChartWrapper = _styledComponents["default"].div(_templateObject());

var HistogramWrapper = _styledComponents["default"].svg(_templateObject2(), function (props) {
  return props.theme.histogramFillOutRange;
}, function (props) {
  return props.theme.histogramFillInRange;
});

var LineChart = function LineChart(_ref2) {
  var width = _ref2.width,
      height = _ref2.height,
      yDomain = _ref2.yDomain,
      hintFormat = _ref2.hintFormat,
      hoveredDP = _ref2.hoveredDP,
      margin = _ref2.margin,
      color = _ref2.color,
      data = _ref2.data,
      onMouseMove = _ref2.onMouseMove,
      children = _ref2.children;
  var brushData = [{
    x: data[0].x,
    y: yDomain[1],
    customComponent: function customComponent() {
      return children;
    }
  }];
  return /*#__PURE__*/_react["default"].createElement(LineChartWrapper, null, /*#__PURE__*/_react["default"].createElement(_reactVis.XYPlot, {
    width: width,
    height: height,
    margin: _objectSpread(_objectSpread({}, margin), {}, {
      bottom: 12
    })
  }, /*#__PURE__*/_react["default"].createElement(_reactVis.LineSeries, {
    strokeWidth: 2,
    color: color,
    data: data,
    onNearestX: onMouseMove
  }), /*#__PURE__*/_react["default"].createElement(_reactVis.MarkSeries, {
    data: hoveredDP ? [hoveredDP] : [],
    color: color,
    size: 3
  }), /*#__PURE__*/_react["default"].createElement(_reactVis.CustomSVGSeries, {
    data: brushData
  }), hoveredDP ? /*#__PURE__*/_react["default"].createElement(_reactVis.Hint, {
    value: hoveredDP
  }, /*#__PURE__*/_react["default"].createElement(HintContent, (0, _extends2["default"])({}, hoveredDP, {
    format: function format(val) {
      return _moment["default"].utc(val).format(hintFormat);
    }
  }))) : null));
};

var StyledHint = _styledComponents["default"].div(_templateObject3(), function (props) {
  return props.theme.textColorLT;
});

var HintContent = function HintContent(_ref3) {
  var x = _ref3.x,
      y = _ref3.y,
      format = _ref3.format;
  return /*#__PURE__*/_react["default"].createElement(StyledHint, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "hint--x"
  }, format(x)), /*#__PURE__*/_react["default"].createElement("div", {
    className: "row"
  }, y));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9yYW5nZS1wbG90LmpzIl0sIm5hbWVzIjpbImNoYXJ0TWFyZ2luIiwidG9wIiwiYm90dG9tIiwibGVmdCIsInJpZ2h0IiwiY2hhcnRIIiwiY29udGFpbmVySCIsImhpc3RvZ3JhbVN0eWxlIiwiaGlnaGxpZ2h0VyIsInVuSGlnaGxpZ2h0ZWRXIiwiUmFuZ2VQbG90RmFjdG9yeSIsIlJhbmdlUGxvdCIsImhvdmVyZWREUCIsInByb3BzIiwibGluZUNoYXJ0IiwieERvbWFpbiIsImRvbWFpblNlbGVjdG9yIiwiZG9tYWluIiwic2V0U3RhdGUiLCJvbkJydXNoIiwicmFuZ2UiLCJ2YWx1ZSIsIndpZHRoIiwicGxvdFR5cGUiLCJoaXN0b2dyYW0iLCJ4MCIsImxlbmd0aCIsIngxIiwiYnJ1c2hDb21wb25lbnQiLCJoZWlnaHQiLCJwb3NpdGlvbiIsInN0YXRlIiwib25Nb3VzZU1vdmUiLCJ5RG9tYWluIiwiaGludEZvcm1hdHRlciIsInNlcmllcyIsIkNvbXBvbmVudCIsIlByb3BUeXBlcyIsImFycmF5T2YiLCJudW1iZXIiLCJpc1JlcXVpcmVkIiwic2hhcGUiLCJvYmplY3QiLCJzdHJpbmciLCJpc0VubGFyZ2VkIiwiYm9vbCIsIm9uQmx1ciIsImZ1bmMiLCJIaXN0b2dyYW0iLCJtYXJnaW4iLCJiYXJXaWR0aCIsIngiLCJ5IiwiZCIsImNvdW50IiwibWFyZ2luVG9wIiwibWFwIiwiYmFyIiwiaW5SYW5nZSIsIndSYXRpbyIsIkxpbmVDaGFydFdyYXBwZXIiLCJzdHlsZWQiLCJkaXYiLCJIaXN0b2dyYW1XcmFwcGVyIiwic3ZnIiwidGhlbWUiLCJoaXN0b2dyYW1GaWxsT3V0UmFuZ2UiLCJoaXN0b2dyYW1GaWxsSW5SYW5nZSIsIkxpbmVDaGFydCIsImhpbnRGb3JtYXQiLCJjb2xvciIsImRhdGEiLCJjaGlsZHJlbiIsImJydXNoRGF0YSIsImN1c3RvbUNvbXBvbmVudCIsInZhbCIsIm1vbWVudCIsInV0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QUFJLEVBQUVHO0FBQXZCLElBSEYsRUFJRzdELFNBQVMsZ0JBQ1IsZ0NBQUMsY0FBRDtBQUFNLElBQUEsS0FBSyxFQUFFQTtBQUFiLGtCQUNFLGdDQUFDLFdBQUQsZ0NBQWlCQSxTQUFqQjtBQUE0QixJQUFBLE1BQU0sRUFBRSxnQkFBQStELEdBQUc7QUFBQSxhQUFJQyxtQkFBT0MsR0FBUCxDQUFXRixHQUFYLEVBQWdCRyxNQUFoQixDQUF1QlQsVUFBdkIsQ0FBSjtBQUFBO0FBQXZDLEtBREYsQ0FEUSxHQUlOLElBUk4sQ0FERixDQURGO0FBY0QsQ0E1QkQ7O0FBOEJBLElBQU1VLFVBQVUsR0FBR2xCLDZCQUFPQyxHQUFWLHFCQUdMLFVBQUFqRCxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDb0QsS0FBTixDQUFZZSxXQUFoQjtBQUFBLENBSEEsQ0FBaEI7O0FBVUEsSUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWM7QUFBQSxNQUFFOUIsQ0FBRixTQUFFQSxDQUFGO0FBQUEsTUFBS0MsQ0FBTCxTQUFLQSxDQUFMO0FBQUEsTUFBUTBCLE1BQVIsU0FBUUEsTUFBUjtBQUFBLHNCQUNsQixnQ0FBQyxVQUFELHFCQUNFO0FBQUssSUFBQSxTQUFTLEVBQUM7QUFBZixLQUEwQkEsTUFBTSxDQUFDM0IsQ0FBRCxDQUFoQyxDQURGLGVBRUU7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLEtBQXNCQyxDQUF0QixDQUZGLENBRGtCO0FBQUEsQ0FBcEIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHtzY2FsZUxpbmVhcn0gZnJvbSAnZDMtc2NhbGUnO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcbmltcG9ydCB7bWF4fSBmcm9tICdkMy1hcnJheSc7XHJcbmltcG9ydCB7Y3JlYXRlU2VsZWN0b3J9IGZyb20gJ3Jlc2VsZWN0JztcclxuaW1wb3J0IHtMaW5lU2VyaWVzLCBYWVBsb3QsIEN1c3RvbVNWR1NlcmllcywgSGludCwgTWFya1Nlcmllc30gZnJvbSAncmVhY3QtdmlzJztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5cclxuaW1wb3J0IFJhbmdlQnJ1c2ggZnJvbSAnLi9yYW5nZS1icnVzaCc7XHJcbmltcG9ydCB7Z2V0VGltZVdpZGdldEhpbnRGb3JtYXR0ZXJ9IGZyb20gJ3V0aWxzL2ZpbHRlci11dGlscyc7XHJcblxyXG5jb25zdCBjaGFydE1hcmdpbiA9IHt0b3A6IDgsIGJvdHRvbTogMCwgbGVmdDogMCwgcmlnaHQ6IDB9O1xyXG5jb25zdCBjaGFydEggPSA1MjtcclxuY29uc3QgY29udGFpbmVySCA9IDY4O1xyXG5jb25zdCBoaXN0b2dyYW1TdHlsZSA9IHtcclxuICBoaWdobGlnaHRXOiAwLjcsXHJcbiAgdW5IaWdobGlnaHRlZFc6IDAuNFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmFuZ2VQbG90RmFjdG9yeSgpIHtcclxuICBjbGFzcyBSYW5nZVBsb3QgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcclxuICAgICAgdmFsdWU6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5udW1iZXIpLmlzUmVxdWlyZWQsXHJcbiAgICAgIGhpc3RvZ3JhbTogUHJvcFR5cGVzLmFycmF5T2YoXHJcbiAgICAgICAgUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgICAgICAgIHgwOiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgICAgICAgeDE6IFByb3BUeXBlcy5udW1iZXJcclxuICAgICAgICB9KVxyXG4gICAgICApLFxyXG4gICAgICBsaW5lQ2hhcnQ6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgICAgIHBsb3RUeXBlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICBpc0VubGFyZ2VkOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgICAgb25CbHVyOiBQcm9wVHlwZXMuZnVuYyxcclxuICAgICAgd2lkdGg6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZFxyXG4gICAgfTtcclxuXHJcbiAgICBzdGF0ZSA9IHtcclxuICAgICAgaG92ZXJlZERQOiBudWxsXHJcbiAgICB9O1xyXG5cclxuICAgIGRvbWFpblNlbGVjdG9yID0gcHJvcHMgPT4gcHJvcHMubGluZUNoYXJ0ICYmIHByb3BzLmxpbmVDaGFydC54RG9tYWluO1xyXG4gICAgaGludEZvcm1hdHRlciA9IGNyZWF0ZVNlbGVjdG9yKHRoaXMuZG9tYWluU2VsZWN0b3IsIGRvbWFpbiA9PlxyXG4gICAgICBnZXRUaW1lV2lkZ2V0SGludEZvcm1hdHRlcihkb21haW4pXHJcbiAgICApO1xyXG5cclxuICAgIG9uTW91c2VNb3ZlID0gaG92ZXJlZERQID0+IHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7aG92ZXJlZERQfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgY29uc3Qge29uQnJ1c2gsIHJhbmdlLCB2YWx1ZSwgd2lkdGgsIHBsb3RUeXBlLCBsaW5lQ2hhcnQsIGhpc3RvZ3JhbX0gPSB0aGlzLnByb3BzO1xyXG4gICAgICBjb25zdCBkb21haW4gPSBbaGlzdG9ncmFtWzBdLngwLCBoaXN0b2dyYW1baGlzdG9ncmFtLmxlbmd0aCAtIDFdLngxXTtcclxuXHJcbiAgICAgIGNvbnN0IGJydXNoQ29tcG9uZW50ID0gKFxyXG4gICAgICAgIDxSYW5nZUJydXNoIGRvbWFpbj17ZG9tYWlufSBvbkJydXNoPXtvbkJydXNofSByYW5nZT17cmFuZ2V9IHZhbHVlPXt2YWx1ZX0gd2lkdGg9e3dpZHRofSAvPlxyXG4gICAgICApO1xyXG5cclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICBoZWlnaHQ6IGAke2NvbnRhaW5lckh9cHhgLFxyXG4gICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJ1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7cGxvdFR5cGUgPT09ICdsaW5lQ2hhcnQnID8gKFxyXG4gICAgICAgICAgICA8TGluZUNoYXJ0XHJcbiAgICAgICAgICAgICAgaG92ZXJlZERQPXt0aGlzLnN0YXRlLmhvdmVyZWREUH1cclxuICAgICAgICAgICAgICB3aWR0aD17d2lkdGh9XHJcbiAgICAgICAgICAgICAgaGVpZ2h0PXtjb250YWluZXJIfVxyXG4gICAgICAgICAgICAgIG1hcmdpbj17Y2hhcnRNYXJnaW59XHJcbiAgICAgICAgICAgICAgY2hpbGRyZW49e2JydXNoQ29tcG9uZW50fVxyXG4gICAgICAgICAgICAgIG9uTW91c2VNb3ZlPXt0aGlzLm9uTW91c2VNb3ZlfVxyXG4gICAgICAgICAgICAgIHlEb21haW49e2xpbmVDaGFydC55RG9tYWlufVxyXG4gICAgICAgICAgICAgIGhpbnRGb3JtYXQ9e3RoaXMuaGludEZvcm1hdHRlcih0aGlzLnByb3BzKX1cclxuICAgICAgICAgICAgICBkYXRhPXtsaW5lQ2hhcnQuc2VyaWVzfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPEhpc3RvZ3JhbVxyXG4gICAgICAgICAgICAgIHdpZHRoPXt3aWR0aH1cclxuICAgICAgICAgICAgICBoZWlnaHQ9e2NoYXJ0SH1cclxuICAgICAgICAgICAgICB2YWx1ZT17dmFsdWV9XHJcbiAgICAgICAgICAgICAgbWFyZ2luPXtjaGFydE1hcmdpbn1cclxuICAgICAgICAgICAgICBoaXN0b2dyYW09e2hpc3RvZ3JhbX1cclxuICAgICAgICAgICAgICBicnVzaENvbXBvbmVudD17YnJ1c2hDb21wb25lbnR9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gUmFuZ2VQbG90O1xyXG59XHJcblxyXG5jb25zdCBIaXN0b2dyYW0gPSAoe3dpZHRoLCBoZWlnaHQsIG1hcmdpbiwgaGlzdG9ncmFtLCB2YWx1ZSwgYnJ1c2hDb21wb25lbnR9KSA9PiB7XHJcbiAgY29uc3QgZG9tYWluID0gW2hpc3RvZ3JhbVswXS54MCwgaGlzdG9ncmFtW2hpc3RvZ3JhbS5sZW5ndGggLSAxXS54MV07XHJcbiAgY29uc3QgYmFyV2lkdGggPSB3aWR0aCAvIGhpc3RvZ3JhbS5sZW5ndGg7XHJcblxyXG4gIGNvbnN0IHggPSBzY2FsZUxpbmVhcigpXHJcbiAgICAuZG9tYWluKGRvbWFpbilcclxuICAgIC5yYW5nZShbMCwgd2lkdGhdKTtcclxuXHJcbiAgY29uc3QgeSA9IHNjYWxlTGluZWFyKClcclxuICAgIC5kb21haW4oWzAsIG1heChoaXN0b2dyYW0sIGQgPT4gZC5jb3VudCldKVxyXG4gICAgLnJhbmdlKFswLCBoZWlnaHRdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxIaXN0b2dyYW1XcmFwcGVyIHdpZHRoPXt3aWR0aH0gaGVpZ2h0PXtoZWlnaHR9IHN0eWxlPXt7bWFyZ2luVG9wOiBgJHttYXJnaW4udG9wfXB4YH19PlxyXG4gICAgICA8ZyBjbGFzc05hbWU9XCJoaXN0b2dyYW0tYmFyc1wiPlxyXG4gICAgICAgIHtoaXN0b2dyYW0ubWFwKGJhciA9PiB7XHJcbiAgICAgICAgICBjb25zdCBpblJhbmdlID0gYmFyLngwID49IHZhbHVlWzBdICYmIGJhci54MSA8PSB2YWx1ZVsxXTtcclxuICAgICAgICAgIGNvbnN0IHdSYXRpbyA9IGluUmFuZ2UgPyBoaXN0b2dyYW1TdHlsZS5oaWdobGlnaHRXIDogaGlzdG9ncmFtU3R5bGUudW5IaWdobGlnaHRlZFc7XHJcblxyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPHJlY3RcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoeydpbi1yYW5nZSc6IGluUmFuZ2V9KX1cclxuICAgICAgICAgICAgICBrZXk9e2Jhci54MH1cclxuICAgICAgICAgICAgICBoZWlnaHQ9e3koYmFyLmNvdW50KX1cclxuICAgICAgICAgICAgICB3aWR0aD17YmFyV2lkdGggKiB3UmF0aW99XHJcbiAgICAgICAgICAgICAgeD17eChiYXIueDApICsgKGJhcldpZHRoICogKDEgLSB3UmF0aW8pKSAvIDJ9XHJcbiAgICAgICAgICAgICAgcng9ezF9XHJcbiAgICAgICAgICAgICAgcnk9ezF9XHJcbiAgICAgICAgICAgICAgeT17aGVpZ2h0IC0geShiYXIuY291bnQpfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9KX1cclxuICAgICAgPC9nPlxyXG4gICAgICB7YnJ1c2hDb21wb25lbnR9XHJcbiAgICA8L0hpc3RvZ3JhbVdyYXBwZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IExpbmVDaGFydFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIC5ydi14eS1wbG90X19pbm5lciBwYXRoIHtcclxuICAgIGZpbGw6IG5vbmU7XHJcbiAgICBzdHJva2Utd2lkdGg6IDEuNTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBIaXN0b2dyYW1XcmFwcGVyID0gc3R5bGVkLnN2Z2BcclxuICAuaGlzdG9ncmFtLWJhcnMge1xyXG4gICAgcmVjdCB7XHJcbiAgICAgIGZpbGw6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuaGlzdG9ncmFtRmlsbE91dFJhbmdlfTtcclxuICAgIH1cclxuICAgIHJlY3QuaW4tcmFuZ2Uge1xyXG4gICAgICBmaWxsOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmhpc3RvZ3JhbUZpbGxJblJhbmdlfTtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcbmNvbnN0IExpbmVDaGFydCA9ICh7XHJcbiAgd2lkdGgsXHJcbiAgaGVpZ2h0LFxyXG4gIHlEb21haW4sXHJcbiAgaGludEZvcm1hdCxcclxuICBob3ZlcmVkRFAsXHJcbiAgbWFyZ2luLFxyXG4gIGNvbG9yLFxyXG4gIGRhdGEsXHJcbiAgb25Nb3VzZU1vdmUsXHJcbiAgY2hpbGRyZW5cclxufSkgPT4ge1xyXG4gIGNvbnN0IGJydXNoRGF0YSA9IFt7eDogZGF0YVswXS54LCB5OiB5RG9tYWluWzFdLCBjdXN0b21Db21wb25lbnQ6ICgpID0+IGNoaWxkcmVufV07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TGluZUNoYXJ0V3JhcHBlcj5cclxuICAgICAgPFhZUGxvdCB3aWR0aD17d2lkdGh9IGhlaWdodD17aGVpZ2h0fSBtYXJnaW49e3suLi5tYXJnaW4sIGJvdHRvbTogMTJ9fT5cclxuICAgICAgICA8TGluZVNlcmllcyBzdHJva2VXaWR0aD17Mn0gY29sb3I9e2NvbG9yfSBkYXRhPXtkYXRhfSBvbk5lYXJlc3RYPXtvbk1vdXNlTW92ZX0gLz5cclxuICAgICAgICA8TWFya1NlcmllcyBkYXRhPXtob3ZlcmVkRFAgPyBbaG92ZXJlZERQXSA6IFtdfSBjb2xvcj17Y29sb3J9IHNpemU9ezN9IC8+XHJcbiAgICAgICAgPEN1c3RvbVNWR1NlcmllcyBkYXRhPXticnVzaERhdGF9IC8+XHJcbiAgICAgICAge2hvdmVyZWREUCA/IChcclxuICAgICAgICAgIDxIaW50IHZhbHVlPXtob3ZlcmVkRFB9PlxyXG4gICAgICAgICAgICA8SGludENvbnRlbnQgey4uLmhvdmVyZWREUH0gZm9ybWF0PXt2YWwgPT4gbW9tZW50LnV0Yyh2YWwpLmZvcm1hdChoaW50Rm9ybWF0KX0gLz5cclxuICAgICAgICAgIDwvSGludD5cclxuICAgICAgICApIDogbnVsbH1cclxuICAgICAgPC9YWVBsb3Q+XHJcbiAgICA8L0xpbmVDaGFydFdyYXBwZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IFN0eWxlZEhpbnQgPSBzdHlsZWQuZGl2YFxyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkM2Q4ZTA7XHJcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRleHRDb2xvckxUfTtcclxuICBmb250LXNpemU6IDlweDtcclxuICBtYXJnaW46IDRweDtcclxuICBwYWRkaW5nOiAzcHggNnB4O1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG5gO1xyXG5jb25zdCBIaW50Q29udGVudCA9ICh7eCwgeSwgZm9ybWF0fSkgPT4gKFxyXG4gIDxTdHlsZWRIaW50PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJoaW50LS14XCI+e2Zvcm1hdCh4KX08L2Rpdj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+e3l9PC9kaXY+XHJcbiAgPC9TdHlsZWRIaW50PlxyXG4pO1xyXG4iXX0=