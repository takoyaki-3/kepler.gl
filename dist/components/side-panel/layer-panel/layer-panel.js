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

var _propTypes = _interopRequireDefault(require("prop-types"));

var _layerConfigurator = _interopRequireDefault(require("./layer-configurator"));

var _layerPanelHeader = _interopRequireDefault(require("./layer-panel-header"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  font-size: 12px;\n  border-radius: 1px;\n  margin-bottom: 8px;\n  z-index: 1000;\n\n  &.dragging {\n    cursor: move;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var PanelWrapper = _styledComponents["default"].div(_templateObject());

LayerPanelFactory.deps = [_layerConfigurator["default"], _layerPanelHeader["default"]];

function LayerPanelFactory(LayerConfigurator, LayerPanelHeader) {
  var LayerPanel = /*#__PURE__*/function (_Component) {
    (0, _inherits2["default"])(LayerPanel, _Component);

    var _super = _createSuper(LayerPanel);

    function LayerPanel() {
      var _this;

      (0, _classCallCheck2["default"])(this, LayerPanel);

      for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
        _args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(_args));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "updateLayerConfig", function (newProp) {
        _this.props.layerConfigChange(_this.props.layer, newProp);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "updateLayerType", function (newType) {
        _this.props.layerTypeChange(_this.props.layer, newType);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "updateLayerVisConfig", function (newVisConfig) {
        _this.props.layerVisConfigChange(_this.props.layer, newVisConfig);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "updateLayerColorUI", function () {
        var _this$props;

        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        (_this$props = _this.props).layerColorUIChange.apply(_this$props, [_this.props.layer].concat(args));
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "updateLayerTextLabel", function () {
        var _this$props2;

        for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
          args[_key3] = arguments[_key3];
        }

        (_this$props2 = _this.props).layerTextLabelChange.apply(_this$props2, [_this.props.layer].concat(args));
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "updateLayerVisualChannelConfig", function (newConfig, channel, scaleKey) {
        _this.props.layerVisualChannelConfigChange(_this.props.layer, newConfig, channel, scaleKey);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_updateLayerLabel", function (_ref) {
        var value = _ref.target.value;

        _this.updateLayerConfig({
          label: value
        });
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_toggleVisibility", function (e) {
        e.stopPropagation();
        var isVisible = !_this.props.layer.config.isVisible;

        _this.updateLayerConfig({
          isVisible: isVisible
        });
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_toggleEnableConfig", function (e) {
        e.stopPropagation();
        var isConfigActive = _this.props.layer.config.isConfigActive;

        _this.updateLayerConfig({
          isConfigActive: !isConfigActive
        });
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_removeLayer", function (e) {
        e.stopPropagation();

        _this.props.removeLayer(_this.props.idx);
      });
      return _this;
    }

    (0, _createClass2["default"])(LayerPanel, [{
      key: "render",
      value: function render() {
        var _this$props3 = this.props,
            layer = _this$props3.layer,
            datasets = _this$props3.datasets,
            layerTypeOptions = _this$props3.layerTypeOptions;
        var config = layer.config;
        var isConfigActive = config.isConfigActive;
        return /*#__PURE__*/_react["default"].createElement(PanelWrapper, {
          active: isConfigActive,
          className: "layer-panel ".concat(this.props.className),
          style: this.props.style,
          onMouseDown: this.props.onMouseDown,
          onTouchStart: this.props.onTouchStart
        }, /*#__PURE__*/_react["default"].createElement(LayerPanelHeader, {
          isConfigActive: isConfigActive,
          layerId: layer.id,
          isVisible: config.isVisible,
          label: config.label,
          labelRCGColorValues: datasets[config.dataId].color,
          layerType: layer.type,
          onToggleEnableConfig: this._toggleEnableConfig,
          onToggleVisibility: this._toggleVisibility,
          onUpdateLayerLabel: this._updateLayerLabel,
          onRemoveLayer: this._removeLayer
        }), isConfigActive && /*#__PURE__*/_react["default"].createElement(LayerConfigurator, {
          layer: layer,
          datasets: datasets,
          layerTypeOptions: layerTypeOptions,
          openModal: this.props.openModal,
          updateLayerColorUI: this.updateLayerColorUI,
          updateLayerConfig: this.updateLayerConfig,
          updateLayerVisualChannelConfig: this.updateLayerVisualChannelConfig,
          updateLayerType: this.updateLayerType,
          updateLayerTextLabel: this.updateLayerTextLabel,
          updateLayerVisConfig: this.updateLayerVisConfig
        }));
      }
    }]);
    return LayerPanel;
  }(_react.Component);

  (0, _defineProperty2["default"])(LayerPanel, "propTypes", {
    layer: _propTypes["default"].object.isRequired,
    datasets: _propTypes["default"].object.isRequired,
    idx: _propTypes["default"].number.isRequired,
    layerConfigChange: _propTypes["default"].func.isRequired,
    layerTypeChange: _propTypes["default"].func.isRequired,
    openModal: _propTypes["default"].func.isRequired,
    removeLayer: _propTypes["default"].func.isRequired,
    onCloseConfig: _propTypes["default"].func,
    layerTypeOptions: _propTypes["default"].arrayOf(_propTypes["default"].any),
    layerVisConfigChange: _propTypes["default"].func.isRequired,
    layerVisualChannelConfigChange: _propTypes["default"].func.isRequired,
    layerColorUIChange: _propTypes["default"].func.isRequired,
    updateAnimationTime: _propTypes["default"].func,
    updateLayerAnimationSpeed: _propTypes["default"].func
  });
  return LayerPanel;
}

var _default = LayerPanelFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NpZGUtcGFuZWwvbGF5ZXItcGFuZWwvbGF5ZXItcGFuZWwuanMiXSwibmFtZXMiOlsiUGFuZWxXcmFwcGVyIiwic3R5bGVkIiwiZGl2IiwiTGF5ZXJQYW5lbEZhY3RvcnkiLCJkZXBzIiwiTGF5ZXJDb25maWd1cmF0b3JGYWN0b3J5IiwiTGF5ZXJQYW5lbEhlYWRlckZhY3RvcnkiLCJMYXllckNvbmZpZ3VyYXRvciIsIkxheWVyUGFuZWxIZWFkZXIiLCJMYXllclBhbmVsIiwibmV3UHJvcCIsInByb3BzIiwibGF5ZXJDb25maWdDaGFuZ2UiLCJsYXllciIsIm5ld1R5cGUiLCJsYXllclR5cGVDaGFuZ2UiLCJuZXdWaXNDb25maWciLCJsYXllclZpc0NvbmZpZ0NoYW5nZSIsImFyZ3MiLCJsYXllckNvbG9yVUlDaGFuZ2UiLCJsYXllclRleHRMYWJlbENoYW5nZSIsIm5ld0NvbmZpZyIsImNoYW5uZWwiLCJzY2FsZUtleSIsImxheWVyVmlzdWFsQ2hhbm5lbENvbmZpZ0NoYW5nZSIsInZhbHVlIiwidGFyZ2V0IiwidXBkYXRlTGF5ZXJDb25maWciLCJsYWJlbCIsImUiLCJzdG9wUHJvcGFnYXRpb24iLCJpc1Zpc2libGUiLCJjb25maWciLCJpc0NvbmZpZ0FjdGl2ZSIsInJlbW92ZUxheWVyIiwiaWR4IiwiZGF0YXNldHMiLCJsYXllclR5cGVPcHRpb25zIiwiY2xhc3NOYW1lIiwic3R5bGUiLCJvbk1vdXNlRG93biIsIm9uVG91Y2hTdGFydCIsImlkIiwiZGF0YUlkIiwiY29sb3IiLCJ0eXBlIiwiX3RvZ2dsZUVuYWJsZUNvbmZpZyIsIl90b2dnbGVWaXNpYmlsaXR5IiwiX3VwZGF0ZUxheWVyTGFiZWwiLCJfcmVtb3ZlTGF5ZXIiLCJvcGVuTW9kYWwiLCJ1cGRhdGVMYXllckNvbG9yVUkiLCJ1cGRhdGVMYXllclZpc3VhbENoYW5uZWxDb25maWciLCJ1cGRhdGVMYXllclR5cGUiLCJ1cGRhdGVMYXllclRleHRMYWJlbCIsInVwZGF0ZUxheWVyVmlzQ29uZmlnIiwiQ29tcG9uZW50IiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsIm51bWJlciIsImZ1bmMiLCJvbkNsb3NlQ29uZmlnIiwiYXJyYXlPZiIsImFueSIsInVwZGF0ZUFuaW1hdGlvblRpbWUiLCJ1cGRhdGVMYXllckFuaW1hdGlvblNwZWVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxZQUFZLEdBQUdDLDZCQUFPQyxHQUFWLG1CQUFsQjs7QUFXQUMsaUJBQWlCLENBQUNDLElBQWxCLEdBQXlCLENBQUNDLDZCQUFELEVBQTJCQyw0QkFBM0IsQ0FBekI7O0FBRUEsU0FBU0gsaUJBQVQsQ0FBMkJJLGlCQUEzQixFQUE4Q0MsZ0JBQTlDLEVBQWdFO0FBQUEsTUFDeERDLFVBRHdEO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTs7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSw0R0FtQnhDLFVBQUFDLE9BQU8sRUFBSTtBQUM3QixjQUFLQyxLQUFMLENBQVdDLGlCQUFYLENBQTZCLE1BQUtELEtBQUwsQ0FBV0UsS0FBeEMsRUFBK0NILE9BQS9DO0FBQ0QsT0FyQjJEO0FBQUEsMEdBdUIxQyxVQUFBSSxPQUFPLEVBQUk7QUFDM0IsY0FBS0gsS0FBTCxDQUFXSSxlQUFYLENBQTJCLE1BQUtKLEtBQUwsQ0FBV0UsS0FBdEMsRUFBNkNDLE9BQTdDO0FBQ0QsT0F6QjJEO0FBQUEsK0dBMkJyQyxVQUFBRSxZQUFZLEVBQUk7QUFDckMsY0FBS0wsS0FBTCxDQUFXTSxvQkFBWCxDQUFnQyxNQUFLTixLQUFMLENBQVdFLEtBQTNDLEVBQWtERyxZQUFsRDtBQUNELE9BN0IyRDtBQUFBLDZHQStCdkMsWUFBYTtBQUFBOztBQUFBLDJDQUFURSxJQUFTO0FBQVRBLFVBQUFBLElBQVM7QUFBQTs7QUFDaEMsNkJBQUtQLEtB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QkFBVUksSUFBVixDQUFlRixVQVBYO0FBUWpCRyxJQUFBQSxhQUFhLEVBQUVMLHNCQUFVSSxJQVJSO0FBU2pCeEIsSUFBQUEsZ0JBQWdCLEVBQUVvQixzQkFBVU0sT0FBVixDQUFrQk4sc0JBQVVPLEdBQTVCLENBVEQ7QUFVakIvQyxJQUFBQSxvQkFBb0IsRUFBRXdDLHNCQUFVSSxJQUFWLENBQWVGLFVBVnBCO0FBV2pCbkMsSUFBQUEsOEJBQThCLEVBQUVpQyxzQkFBVUksSUFBVixDQUFlRixVQVg5QjtBQVlqQnhDLElBQUFBLGtCQUFrQixFQUFFc0Msc0JBQVVJLElBQVYsQ0FBZUYsVUFabEI7QUFhakJNLElBQUFBLG1CQUFtQixFQUFFUixzQkFBVUksSUFiZDtBQWNqQkssSUFBQUEseUJBQXlCLEVBQUVULHNCQUFVSTtBQWRwQixHQUZ5QztBQWdIOUQsU0FBT3BELFVBQVA7QUFDRDs7ZUFFY04saUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5pbXBvcnQgTGF5ZXJDb25maWd1cmF0b3JGYWN0b3J5IGZyb20gJy4vbGF5ZXItY29uZmlndXJhdG9yJztcclxuaW1wb3J0IExheWVyUGFuZWxIZWFkZXJGYWN0b3J5IGZyb20gJy4vbGF5ZXItcGFuZWwtaGVhZGVyJztcclxuXHJcbmNvbnN0IFBhbmVsV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDFweDtcclxuICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgei1pbmRleDogMTAwMDtcclxuXHJcbiAgJi5kcmFnZ2luZyB7XHJcbiAgICBjdXJzb3I6IG1vdmU7XHJcbiAgfVxyXG5gO1xyXG5cclxuTGF5ZXJQYW5lbEZhY3RvcnkuZGVwcyA9IFtMYXllckNvbmZpZ3VyYXRvckZhY3RvcnksIExheWVyUGFuZWxIZWFkZXJGYWN0b3J5XTtcclxuXHJcbmZ1bmN0aW9uIExheWVyUGFuZWxGYWN0b3J5KExheWVyQ29uZmlndXJhdG9yLCBMYXllclBhbmVsSGVhZGVyKSB7XHJcbiAgY2xhc3MgTGF5ZXJQYW5lbCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xyXG4gICAgICBsYXllcjogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxyXG4gICAgICBkYXRhc2V0czogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxyXG4gICAgICBpZHg6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcclxuICAgICAgbGF5ZXJDb25maWdDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgICAgIGxheWVyVHlwZUNoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICAgICAgb3Blbk1vZGFsOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gICAgICByZW1vdmVMYXllcjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICAgICAgb25DbG9zZUNvbmZpZzogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgICAgIGxheWVyVHlwZU9wdGlvbnM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5hbnkpLFxyXG4gICAgICBsYXllclZpc0NvbmZpZ0NoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICAgICAgbGF5ZXJWaXN1YWxDaGFubmVsQ29uZmlnQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gICAgICBsYXllckNvbG9yVUlDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgICAgIHVwZGF0ZUFuaW1hdGlvblRpbWU6IFByb3BUeXBlcy5mdW5jLFxyXG4gICAgICB1cGRhdGVMYXllckFuaW1hdGlvblNwZWVkOiBQcm9wVHlwZXMuZnVuY1xyXG4gICAgfTtcclxuXHJcbiAgICB1cGRhdGVMYXllckNvbmZpZyA9IG5ld1Byb3AgPT4ge1xyXG4gICAgICB0aGlzLnByb3BzLmxheWVyQ29uZmlnQ2hhbmdlKHRoaXMucHJvcHMubGF5ZXIsIG5ld1Byb3ApO1xyXG4gICAgfTtcclxuXHJcbiAgICB1cGRhdGVMYXllclR5cGUgPSBuZXdUeXBlID0+IHtcclxuICAgICAgdGhpcy5wcm9wcy5sYXllclR5cGVDaGFuZ2UodGhpcy5wcm9wcy5sYXllciwgbmV3VHlwZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHVwZGF0ZUxheWVyVmlzQ29uZmlnID0gbmV3VmlzQ29uZmlnID0+IHtcclxuICAgICAgdGhpcy5wcm9wcy5sYXllclZpc0NvbmZpZ0NoYW5nZSh0aGlzLnByb3BzLmxheWVyLCBuZXdWaXNDb25maWcpO1xyXG4gICAgfTtcclxuXHJcbiAgICB1cGRhdGVMYXllckNvbG9yVUkgPSAoLi4uYXJncykgPT4ge1xyXG4gICAgICB0aGlzLnByb3BzLmxheWVyQ29sb3JVSUNoYW5nZSh0aGlzLnByb3BzLmxheWVyLCAuLi5hcmdzKTtcclxuICAgIH07XHJcblxyXG4gICAgdXBkYXRlTGF5ZXJUZXh0TGFiZWwgPSAoLi4uYXJncykgPT4ge1xyXG4gICAgICB0aGlzLnByb3BzLmxheWVyVGV4dExhYmVsQ2hhbmdlKHRoaXMucHJvcHMubGF5ZXIsIC4uLmFyZ3MpO1xyXG4gICAgfTtcclxuXHJcbiAgICB1cGRhdGVMYXllclZpc3VhbENoYW5uZWxDb25maWcgPSAobmV3Q29uZmlnLCBjaGFubmVsLCBzY2FsZUtleSkgPT4ge1xyXG4gICAgICB0aGlzLnByb3BzLmxheWVyVmlzdWFsQ2hhbm5lbENvbmZpZ0NoYW5nZSh0aGlzLnByb3BzLmxheWVyLCBuZXdDb25maWcsIGNoYW5uZWwsIHNjYWxlS2V5KTtcclxuICAgIH07XHJcblxyXG4gICAgX3VwZGF0ZUxheWVyTGFiZWwgPSAoe3RhcmdldDoge3ZhbHVlfX0pID0+IHtcclxuICAgICAgdGhpcy51cGRhdGVMYXllckNvbmZpZyh7bGFiZWw6IHZhbHVlfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIF90b2dnbGVWaXNpYmlsaXR5ID0gZSA9PiB7XHJcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgIGNvbnN0IGlzVmlzaWJsZSA9ICF0aGlzLnByb3BzLmxheWVyLmNvbmZpZy5pc1Zpc2libGU7XHJcbiAgICAgIHRoaXMudXBkYXRlTGF5ZXJDb25maWcoe2lzVmlzaWJsZX0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBfdG9nZ2xlRW5hYmxlQ29uZmlnID0gZSA9PiB7XHJcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgIGNvbnN0IHtcclxuICAgICAgICBsYXllcjoge1xyXG4gICAgICAgICAgY29uZmlnOiB7aXNDb25maWdBY3RpdmV9XHJcbiAgICAgICAgfVxyXG4gICAgICB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgdGhpcy51cGRhdGVMYXllckNvbmZpZyh7aXNDb25maWdBY3RpdmU6ICFpc0NvbmZpZ0FjdGl2ZX0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBfcmVtb3ZlTGF5ZXIgPSBlID0+IHtcclxuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgdGhpcy5wcm9wcy5yZW1vdmVMYXllcih0aGlzLnByb3BzLmlkeCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgY29uc3Qge2xheWVyLCBkYXRhc2V0cywgbGF5ZXJUeXBlT3B0aW9uc30gPSB0aGlzLnByb3BzO1xyXG4gICAgICBjb25zdCB7Y29uZmlnfSA9IGxheWVyO1xyXG4gICAgICBjb25zdCB7aXNDb25maWdBY3RpdmV9ID0gY29uZmlnO1xyXG5cclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8UGFuZWxXcmFwcGVyXHJcbiAgICAgICAgICBhY3RpdmU9e2lzQ29uZmlnQWN0aXZlfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtgbGF5ZXItcGFuZWwgJHt0aGlzLnByb3BzLmNsYXNzTmFtZX1gfVxyXG4gICAgICAgICAgc3R5bGU9e3RoaXMucHJvcHMuc3R5bGV9XHJcbiAgICAgICAgICBvbk1vdXNlRG93bj17dGhpcy5wcm9wcy5vbk1vdXNlRG93bn1cclxuICAgICAgICAgIG9uVG91Y2hTdGFydD17dGhpcy5wcm9wcy5vblRvdWNoU3RhcnR9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPExheWVyUGFuZWxIZWFkZXJcclxuICAgICAgICAgICAgaXNDb25maWdBY3RpdmU9e2lzQ29uZmlnQWN0aXZlfVxyXG4gICAgICAgICAgICBsYXllcklkPXtsYXllci5pZH1cclxuICAgICAgICAgICAgaXNWaXNpYmxlPXtjb25maWcuaXNWaXNpYmxlfVxyXG4gICAgICAgICAgICBsYWJlbD17Y29uZmlnLmxhYmVsfVxyXG4gICAgICAgICAgICBsYWJlbFJDR0NvbG9yVmFsdWVzPXtkYXRhc2V0c1tjb25maWcuZGF0YUlkXS5jb2xvcn1cclxuICAgICAgICAgICAgbGF5ZXJUeXBlPXtsYXllci50eXBlfVxyXG4gICAgICAgICAgICBvblRvZ2dsZUVuYWJsZUNvbmZpZz17dGhpcy5fdG9nZ2xlRW5hYmxlQ29uZmlnfVxyXG4gICAgICAgICAgICBvblRvZ2dsZVZpc2liaWxpdHk9e3RoaXMuX3RvZ2dsZVZpc2liaWxpdHl9XHJcbiAgICAgICAgICAgIG9uVXBkYXRlTGF5ZXJMYWJlbD17dGhpcy5fdXBkYXRlTGF5ZXJMYWJlbH1cclxuICAgICAgICAgICAgb25SZW1vdmVMYXllcj17dGhpcy5fcmVtb3ZlTGF5ZXJ9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAge2lzQ29uZmlnQWN0aXZlICYmIChcclxuICAgICAgICAgICAgPExheWVyQ29uZmlndXJhdG9yXHJcbiAgICAgICAgICAgICAgbGF5ZXI9e2xheWVyfVxyXG4gICAgICAgICAgICAgIGRhdGFzZXRzPXtkYXRhc2V0c31cclxuICAgICAgICAgICAgICBsYXllclR5cGVPcHRpb25zPXtsYXllclR5cGVPcHRpb25zfVxyXG4gICAgICAgICAgICAgIG9wZW5Nb2RhbD17dGhpcy5wcm9wcy5vcGVuTW9kYWx9XHJcbiAgICAgICAgICAgICAgdXBkYXRlTGF5ZXJDb2xvclVJPXt0aGlzLnVwZGF0ZUxheWVyQ29sb3JVSX1cclxuICAgICAgICAgICAgICB1cGRhdGVMYXllckNvbmZpZz17dGhpcy51cGRhdGVMYXllckNvbmZpZ31cclxuICAgICAgICAgICAgICB1cGRhdGVMYXllclZpc3VhbENoYW5uZWxDb25maWc9e3RoaXMudXBkYXRlTGF5ZXJWaXN1YWxDaGFubmVsQ29uZmlnfVxyXG4gICAgICAgICAgICAgIHVwZGF0ZUxheWVyVHlwZT17dGhpcy51cGRhdGVMYXllclR5cGV9XHJcbiAgICAgICAgICAgICAgdXBkYXRlTGF5ZXJUZXh0TGFiZWw9e3RoaXMudXBkYXRlTGF5ZXJUZXh0TGFiZWx9XHJcbiAgICAgICAgICAgICAgdXBkYXRlTGF5ZXJWaXNDb25maWc9e3RoaXMudXBkYXRlTGF5ZXJWaXNDb25maWd9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvUGFuZWxXcmFwcGVyPlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIExheWVyUGFuZWw7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheWVyUGFuZWxGYWN0b3J5O1xyXG4iXX0=