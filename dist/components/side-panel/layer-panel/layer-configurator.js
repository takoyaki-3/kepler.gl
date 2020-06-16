"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = LayerConfiguratorFactory;
exports.AggregationTypeSelector = exports.AggrScaleSelector = exports.ChannelByValueSelector = exports.LayerColorRangeSelector = exports.ArcLayerColorSelector = exports.LayerColorSelector = exports.HowToButton = exports.getLayerChannelConfigProps = exports.getVisConfiguratorProps = exports.getLayerConfiguratorProps = exports.getLayerFields = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactIntl = require("react-intl");

var _styledComponents2 = require("../../common/styled-components");

var _itemSelector = _interopRequireDefault(require("../../common/item-selector/item-selector"));

var _visConfigByFieldSelector = _interopRequireDefault(require("./vis-config-by-field-selector"));

var _layerColumnConfig = _interopRequireDefault(require("./layer-column-config"));

var _layerTypeSelector = _interopRequireDefault(require("./layer-type-selector"));

var _dimensionScaleSelector = _interopRequireDefault(require("./dimension-scale-selector"));

var _colorSelector = _interopRequireDefault(require("./color-selector"));

var _sourceDataSelector = _interopRequireDefault(require("../common/source-data-selector"));

var _visConfigSwitch = _interopRequireDefault(require("./vis-config-switch"));

var _visConfigSlider = _interopRequireDefault(require("./vis-config-slider"));

var _layerConfigGroup = _interopRequireWildcard(require("./layer-config-group"));

var _textLabelPanel = _interopRequireDefault(require("./text-label-panel"));

var _utils = require("../../../utils/utils");

var _defaultSettings = require("../../../constants/default-settings");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  position: absolute;\n  right: 12px;\n  top: -4px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  margin-top: 12px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  position: relative;\n  margin-top: 12px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var StyledLayerConfigurator = _styledComponents["default"].div.attrs({
  className: 'layer-panel__config'
})(_templateObject());

var StyledLayerVisualConfigurator = _styledComponents["default"].div.attrs({
  className: 'layer-panel__config__visualC-config'
})(_templateObject2());

var getLayerFields = function getLayerFields(datasets, layer) {
  return datasets[layer.config.dataId] ? datasets[layer.config.dataId].fields : [];
};

exports.getLayerFields = getLayerFields;

var getLayerConfiguratorProps = function getLayerConfiguratorProps(props) {
  return {
    layer: props.layer,
    fields: getLayerFields(props.datasets, props.layer),
    onChange: props.updateLayerConfig,
    setColorUI: props.updateLayerColorUI
  };
};

exports.getLayerConfiguratorProps = getLayerConfiguratorProps;

var getVisConfiguratorProps = function getVisConfiguratorProps(props) {
  return {
    layer: props.layer,
    fields: getLayerFields(props.datasets, props.layer),
    onChange: props.updateLayerVisConfig,
    setColorUI: props.updateLayerColorUI
  };
};

exports.getVisConfiguratorProps = getVisConfiguratorProps;

var getLayerChannelConfigProps = function getLayerChannelConfigProps(props) {
  return {
    layer: props.layer,
    fields: getLayerFields(props.datasets, props.layer),
    onChange: props.updateLayerVisualChannelConfig
  };
};

exports.getLayerChannelConfigProps = getLayerChannelConfigProps;
LayerConfiguratorFactory.deps = [_sourceDataSelector["default"], _visConfigSlider["default"], _textLabelPanel["default"]];

function LayerConfiguratorFactory(SourceDataSelector, VisConfigSlider, TextLabelPanel) {
  var LayerConfigurator = /*#__PURE__*/function (_Component) {
    (0, _inherits2["default"])(LayerConfigurator, _Component);

    var _super = _createSuper(LayerConfigurator);

    function LayerConfigurator() {
      (0, _classCallCheck2["default"])(this, LayerConfigurator);
      return _super.apply(this, arguments);
    }

    (0, _createClass2["default"])(LayerConfigurator, [{
      key: "_renderPointLayerConfig",
      value: function _renderPointLayerConfig(props) {
        return this._renderScatterplotLayerConfig(props);
      }
    }, {
      key: "_renderIconLayerConfig",
      value: function _renderIconLayerConfig(props) {
        return this._renderScatterplotLayerConfig(props);
      }
    }, {
      key: "_renderScatterplotLayerConfig",
      value: function _renderScatterplotLayerConfig(_ref) {
        var layer = _ref.layer,
            visConfiguratorProps = _ref.visConfiguratorProps,
            layerChannelConfigProps = _ref.layerChannelConfigProps,
            layerConfiguratorProps = _ref.layerConfiguratorProps;
        return /*#__PURE__*/_react["default"].createElement(StyledLayerVisualConfigurator, null, /*#__PURE__*/_react["default"].createElement(_layerConfigGroup["default"], (0, _extends2["default"])({}, layer.visConfigSettings.filled || {
          label: 'layer.color'
        }, visConfiguratorProps, {
          collapsible: true
        }), layer.config.colorField ? /*#__PURE__*/_react["default"].createElement(LayerColorRangeSelector, visConfiguratorProps) : /*#__PURE__*/_react["default"].createElement(LayerColorSelector, layerConfiguratorProps), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, /*#__PURE__*/_react["default"].createElement(ChannelByValueSelector, (0, _extends2["default"])({
          channel: layer.visualChannels.color
        }, layerChannelConfigProps)), /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.opacity, visConfiguratorProps)))), layer.type === _defaultSettings.LAYER_TYPES.point ? /*#__PURE__*/_react["default"].createElement(_layerConfigGroup["default"], (0, _extends2["default"])({}, layer.visConfigSettings.outline, visConfiguratorProps, {
          collapsible: true
        }), layer.config.strokeColorField ? /*#__PURE__*/_react["default"].createElement(LayerColorRangeSelector, (0, _extends2["default"])({}, visConfiguratorProps, {
          property: "strokeColorRange"
        })) : /*#__PURE__*/_react["default"].createElement(LayerColorSelector, (0, _extends2["default"])({}, visConfiguratorProps, {
          selectedColor: layer.config.visConfig.strokeColor,
          property: "strokeColor"
        })), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, /*#__PURE__*/_react["default"].createElement(ChannelByValueSelector, (0, _extends2["default"])({
          channel: layer.visualChannels.strokeColor
        }, layerChannelConfigProps)), /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.thickness, visConfiguratorProps, {
          disabled: !layer.config.visConfig.outline
        })))) : null, /*#__PURE__*/_react["default"].createElement(_layerConfigGroup["default"], {
          label: 'layer.radius',
          collapsible: true
        }, !layer.config.sizeField ? /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.radius, visConfiguratorProps, {
          label: false,
          disabled: Boolean(layer.config.sizeField)
        })) : /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.radiusRange, visConfiguratorProps, {
          label: false,
          disabled: !layer.config.sizeField || layer.config.visConfig.fixedRadius
        })), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, /*#__PURE__*/_react["default"].createElement(ChannelByValueSelector, (0, _extends2["default"])({
          channel: layer.visualChannels.size
        }, layerChannelConfigProps)), layer.config.sizeField ? /*#__PURE__*/_react["default"].createElement(_visConfigSwitch["default"], (0, _extends2["default"])({}, layer.visConfigSettings.fixedRadius, visConfiguratorProps)) : null)), /*#__PURE__*/_react["default"].createElement(TextLabelPanel, {
          fields: visConfiguratorProps.fields,
          updateLayerTextLabel: this.props.updateLayerTextLabel,
          textLabel: layer.config.textLabel,
          colorPalette: visConfiguratorProps.colorPalette,
          setColorPaletteUI: visConfiguratorProps.setColorPaletteUI
        }));
      }
    }, {
      key: "_renderClusterLayerConfig",
      value: function _renderClusterLayerConfig(_ref2) {
        var layer = _ref2.layer,
            visConfiguratorProps = _ref2.visConfiguratorProps,
            layerConfiguratorProps = _ref2.layerConfiguratorProps,
            layerChannelConfigProps = _ref2.layerChannelConfigProps;
        return /*#__PURE__*/_react["default"].createElement(StyledLayerVisualConfigurator, null, /*#__PURE__*/_react["default"].createElement(_layerConfigGroup["default"], {
          label: 'layer.color',
          collapsible: true
        }, /*#__PURE__*/_react["default"].createElement(LayerColorRangeSelector, visConfiguratorProps), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, /*#__PURE__*/_react["default"].createElement(AggrScaleSelector, (0, _extends2["default"])({}, layerConfiguratorProps, {
          channel: layer.visualChannels.color
        })), /*#__PURE__*/_react["default"].createElement(ChannelByValueSelector, (0, _extends2["default"])({
          channel: layer.visualChannels.color
        }, layerChannelConfigProps)), layer.visConfigSettings.colorAggregation.condition(layer.config) ? /*#__PURE__*/_react["default"].createElement(AggregationTypeSelector, (0, _extends2["default"])({}, layer.visConfigSettings.colorAggregation, layerChannelConfigProps, {
          channel: layer.visualChannels.color
        })) : null, /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.opacity, visConfiguratorProps)))), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup["default"], {
          label: 'layer.radius',
          collapsible: true
        }, /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.clusterRadius, visConfiguratorProps)), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.radiusRange, visConfiguratorProps)))));
      }
    }, {
      key: "_renderHeatmapLayerConfig",
      value: function _renderHeatmapLayerConfig(_ref3) {
        var layer = _ref3.layer,
            visConfiguratorProps = _ref3.visConfiguratorProps,
            layerConfiguratorProps = _ref3.layerConfiguratorProps,
            layerChannelConfigProps = _ref3.layerChannelConfigProps;
        return /*#__PURE__*/_react["default"].createElement(StyledLayerVisualConfigurator, null, /*#__PURE__*/_react["default"].createElement(_layerConfigGroup["default"], {
          label: 'layer.color',
          collapsible: true
        }, /*#__PURE__*/_react["default"].createElement(LayerColorRangeSelector, visConfiguratorProps), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.opacity, visConfiguratorProps)))), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup["default"], {
          label: 'layer.radius'
        }, /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.radius, visConfiguratorProps, {
          label: false
        }))), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup["default"], {
          label: 'layer.weight'
        }, /*#__PURE__*/_react["default"].createElement(ChannelByValueSelector, (0, _extends2["default"])({
          channel: layer.visualChannels.weight
        }, layerChannelConfigProps))));
      }
    }, {
      key: "_renderGridLayerConfig",
      value: function _renderGridLayerConfig(props) {
        return this._renderAggregationLayerConfig(props);
      }
    }, {
      key: "_renderHexagonLayerConfig",
      value: function _renderHexagonLayerConfig(props) {
        return this._renderAggregationLayerConfig(props);
      }
    }, {
      key: "_renderAggregationLayerConfig",
      value: function _renderAggregationLayerConfig(_ref4) {
        var layer = _ref4.layer,
            visConfiguratorProps = _ref4.visConfiguratorProps,
            layerConfiguratorProps = _ref4.layerConfiguratorProps,
            layerChannelConfigProps = _ref4.layerChannelConfigProps;
        var config = layer.config;
        var enable3d = config.visConfig.enable3d;
        var elevationByDescription = 'layer.elevationByDescription';
        var colorByDescription = 'layer.colorByDescription';
        return /*#__PURE__*/_react["default"].createElement(StyledLayerVisualConfigurator, null, /*#__PURE__*/_react["default"].createElement(_layerConfigGroup["default"], {
          label: 'layer.color',
          collapsible: true
        }, /*#__PURE__*/_react["default"].createElement(LayerColorRangeSelector, visConfiguratorProps), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, /*#__PURE__*/_react["default"].createElement(AggrScaleSelector, (0, _extends2["default"])({}, layerConfiguratorProps, {
          channel: layer.visualChannels.color
        })), /*#__PURE__*/_react["default"].createElement(ChannelByValueSelector, (0, _extends2["default"])({
          channel: layer.visualChannels.color
        }, layerChannelConfigProps)), layer.visConfigSettings.colorAggregation.condition(layer.config) ? /*#__PURE__*/_react["default"].createElement(AggregationTypeSelector, (0, _extends2["default"])({}, layer.visConfigSettings.colorAggregation, layerChannelConfigProps, {
          description: colorByDescription,
          channel: layer.visualChannels.color
        })) : null, layer.visConfigSettings.percentile && layer.visConfigSettings.percentile.condition(layer.config) ? /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.percentile, visConfiguratorProps)) : null, /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.opacity, visConfiguratorProps)))), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup["default"], {
          label: 'layer.radius',
          collapsible: true
        }, /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.worldUnitSize, visConfiguratorProps)), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.coverage, visConfiguratorProps)))), layer.visConfigSettings.enable3d ? /*#__PURE__*/_react["default"].createElement(_layerConfigGroup["default"], (0, _extends2["default"])({}, layer.visConfigSettings.enable3d, visConfiguratorProps, {
          collapsible: true
        }), /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.elevationScale, visConfiguratorProps)), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, /*#__PURE__*/_react["default"].createElement(AggrScaleSelector, (0, _extends2["default"])({}, layerConfiguratorProps, {
          channel: layer.visualChannels.size
        })), /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.sizeRange, visConfiguratorProps)), /*#__PURE__*/_react["default"].createElement(ChannelByValueSelector, (0, _extends2["default"])({}, layerChannelConfigProps, {
          channel: layer.visualChannels.size,
          description: elevationByDescription,
          disabled: !enable3d
        })), layer.visConfigSettings.sizeAggregation.condition(layer.config) ? /*#__PURE__*/_react["default"].createElement(AggregationTypeSelector, (0, _extends2["default"])({}, layer.visConfigSettings.sizeAggregation, layerChannelConfigProps, {
          channel: layer.visualChannels.size
        })) : null, layer.visConfigSettings.elevationPercentile.condition(layer.config) ? /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.elevationPercentile, visConfiguratorProps)) : null)) : null);
      } // TODO: Shan move these into layer class

    }, {
      key: "_renderHexagonIdLayerConfig",
      value: function _renderHexagonIdLayerConfig(_ref5) {
        var layer = _ref5.layer,
            visConfiguratorProps = _ref5.visConfiguratorProps,
            layerConfiguratorProps = _ref5.layerConfiguratorProps,
            layerChannelConfigProps = _ref5.layerChannelConfigProps;
        return /*#__PURE__*/_react["default"].createElement(StyledLayerVisualConfigurator, null, /*#__PURE__*/_react["default"].createElement(_layerConfigGroup["default"], {
          label: 'layer.color',
          collapsible: true
        }, layer.config.colorField ? /*#__PURE__*/_react["default"].createElement(LayerColorRangeSelector, visConfiguratorProps) : /*#__PURE__*/_react["default"].createElement(LayerColorSelector, layerConfiguratorProps), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, /*#__PURE__*/_react["default"].createElement(ChannelByValueSelector, (0, _extends2["default"])({
          channel: layer.visualChannels.color
        }, layerChannelConfigProps)), /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.opacity, visConfiguratorProps)))), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup["default"], {
          label: 'layer.coverage',
          collapsible: true
        }, !layer.config.coverageField ? /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.coverage, visConfiguratorProps, {
          label: false
        })) : /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.coverageRange, visConfiguratorProps, {
          label: false
        })), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, /*#__PURE__*/_react["default"].createElement(ChannelByValueSelector, (0, _extends2["default"])({
          channel: layer.visualChannels.coverage
        }, layerChannelConfigProps)))), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup["default"], (0, _extends2["default"])({}, layer.visConfigSettings.enable3d, visConfiguratorProps, {
          collapsible: true
        }), /*#__PURE__*/_react["default"].createElement(ChannelByValueSelector, (0, _extends2["default"])({
          channel: layer.visualChannels.size
        }, layerChannelConfigProps)), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.elevationScale, visConfiguratorProps)), /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.sizeRange, visConfiguratorProps, {
          label: "layerVisConfigs.heightRange"
        })))));
      }
    }, {
      key: "_renderArcLayerConfig",
      value: function _renderArcLayerConfig(args) {
        return this._renderLineLayerConfig(args);
      }
    }, {
      key: "_renderLineLayerConfig",
      value: function _renderLineLayerConfig(_ref6) {
        var layer = _ref6.layer,
            visConfiguratorProps = _ref6.visConfiguratorProps,
            layerConfiguratorProps = _ref6.layerConfiguratorProps,
            layerChannelConfigProps = _ref6.layerChannelConfigProps;
        return /*#__PURE__*/_react["default"].createElement(StyledLayerVisualConfigurator, null, /*#__PURE__*/_react["default"].createElement(_layerConfigGroup["default"], {
          label: 'layer.color',
          collapsible: true
        }, layer.config.colorField ? /*#__PURE__*/_react["default"].createElement(LayerColorRangeSelector, visConfiguratorProps) : /*#__PURE__*/_react["default"].createElement(ArcLayerColorSelector, {
          layer: layer,
          setColorUI: layerConfiguratorProps.setColorUI,
          onChangeConfig: layerConfiguratorProps.onChange,
          onChangeVisConfig: visConfiguratorProps.onChange
        }), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, /*#__PURE__*/_react["default"].createElement(ChannelByValueSelector, (0, _extends2["default"])({
          channel: layer.visualChannels.color
        }, layerChannelConfigProps)), /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.opacity, visConfiguratorProps)))), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup["default"], {
          label: 'layer.stroke',
          collapsible: true
        }, layer.config.sizeField ? /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.sizeRange, visConfiguratorProps, {
          disabled: !layer.config.sizeField,
          label: false
        })) : /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.thickness, visConfiguratorProps, {
          label: false
        })), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, /*#__PURE__*/_react["default"].createElement(ChannelByValueSelector, (0, _extends2["default"])({
          channel: layer.visualChannels.size
        }, layerChannelConfigProps)))));
      }
    }, {
      key: "_renderTripLayerConfig",
      value: function _renderTripLayerConfig(_ref7) {
        var layer = _ref7.layer,
            visConfiguratorProps = _ref7.visConfiguratorProps,
            layerConfiguratorProps = _ref7.layerConfiguratorProps,
            layerChannelConfigProps = _ref7.layerChannelConfigProps;
        var _layer$meta$featureTy = layer.meta.featureTypes,
            featureTypes = _layer$meta$featureTy === void 0 ? {} : _layer$meta$featureTy;
        return /*#__PURE__*/_react["default"].createElement(StyledLayerVisualConfigurator, null, /*#__PURE__*/_react["default"].createElement(_layerConfigGroup["default"], {
          label: 'layer.color',
          collapsible: true
        }, layer.config.colorField ? /*#__PURE__*/_react["default"].createElement(LayerColorRangeSelector, visConfiguratorProps) : /*#__PURE__*/_react["default"].createElement(LayerColorSelector, layerConfiguratorProps), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, /*#__PURE__*/_react["default"].createElement(ChannelByValueSelector, (0, _extends2["default"])({
          channel: layer.visualChannels.color
        }, layerChannelConfigProps)), /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.opacity, visConfiguratorProps)))), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup["default"], (0, _extends2["default"])({}, visConfiguratorProps, {
          label: "layer.strokeWidth",
          collapsible: true
        }), layer.config.sizeField ? /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.sizeRange, visConfiguratorProps, {
          label: false
        })) : /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.thickness, visConfiguratorProps, {
          label: false
        })), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, /*#__PURE__*/_react["default"].createElement(ChannelByValueSelector, (0, _extends2["default"])({
          channel: layer.visualChannels.size
        }, layerChannelConfigProps)))), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup["default"], (0, _extends2["default"])({}, visConfiguratorProps, featureTypes.polygon ? layer.visConfigSettings.stroked : {}, {
          label: "layer.trailLength",
          description: "layer.trailLengthDescription"
        }), /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.trailLength, visConfiguratorProps, {
          label: false
        }))));
      }
    }, {
      key: "_renderGeojsonLayerConfig",
      value: function _renderGeojsonLayerConfig(_ref8) {
        var layer = _ref8.layer,
            visConfiguratorProps = _ref8.visConfiguratorProps,
            layerConfiguratorProps = _ref8.layerConfiguratorProps,
            layerChannelConfigProps = _ref8.layerChannelConfigProps;
        var _layer$meta$featureTy2 = layer.meta.featureTypes,
            featureTypes = _layer$meta$featureTy2 === void 0 ? {} : _layer$meta$featureTy2,
            visConfig = layer.config.visConfig;
        return /*#__PURE__*/_react["default"].createElement(StyledLayerVisualConfigurator, null, featureTypes.polygon || featureTypes.point ? /*#__PURE__*/_react["default"].createElement(_layerConfigGroup["default"], (0, _extends2["default"])({}, layer.visConfigSettings.filled, visConfiguratorProps, {
          label: "layer.fillColor",
          collapsible: true
        }), layer.config.colorField ? /*#__PURE__*/_react["default"].createElement(LayerColorRangeSelector, visConfiguratorProps) : /*#__PURE__*/_react["default"].createElement(LayerColorSelector, layerConfiguratorProps), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, /*#__PURE__*/_react["default"].createElement(ChannelByValueSelector, (0, _extends2["default"])({
          channel: layer.visualChannels.color
        }, layerChannelConfigProps)), /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.opacity, visConfiguratorProps)))) : null, /*#__PURE__*/_react["default"].createElement(_layerConfigGroup["default"], (0, _extends2["default"])({}, layer.visConfigSettings.stroked, visConfiguratorProps, {
          label: "layer.strokeColor",
          collapsible: true
        }), layer.config.strokeColorField ? /*#__PURE__*/_react["default"].createElement(LayerColorRangeSelector, (0, _extends2["default"])({}, visConfiguratorProps, {
          property: "strokeColorRange"
        })) : /*#__PURE__*/_react["default"].createElement(LayerColorSelector, (0, _extends2["default"])({}, visConfiguratorProps, {
          selectedColor: layer.config.visConfig.strokeColor,
          property: "strokeColor"
        })), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, /*#__PURE__*/_react["default"].createElement(ChannelByValueSelector, (0, _extends2["default"])({
          channel: layer.visualChannels.strokeColor
        }, layerChannelConfigProps)), /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.strokeOpacity, visConfiguratorProps)))), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup["default"], (0, _extends2["default"])({}, visConfiguratorProps, featureTypes.polygon ? layer.visConfigSettings.stroked : {}, {
          label: "layer.strokeWidth",
          collapsible: true
        }), layer.config.sizeField ? /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.sizeRange, visConfiguratorProps, {
          label: false
        })) : /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.thickness, visConfiguratorProps, {
          label: false
        })), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, /*#__PURE__*/_react["default"].createElement(ChannelByValueSelector, (0, _extends2["default"])({
          channel: layer.visualChannels.size
        }, layerChannelConfigProps)))), featureTypes.polygon ? /*#__PURE__*/_react["default"].createElement(_layerConfigGroup["default"], (0, _extends2["default"])({}, visConfiguratorProps, layer.visConfigSettings.enable3d, {
          disabled: !visConfig.filled,
          collapsible: true
        }), /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.elevationScale, visConfiguratorProps, {
          label: false
        })), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, /*#__PURE__*/_react["default"].createElement(ChannelByValueSelector, (0, _extends2["default"])({
          channel: layer.visualChannels.height
        }, layerChannelConfigProps)), /*#__PURE__*/_react["default"].createElement(_visConfigSwitch["default"], (0, _extends2["default"])({}, visConfiguratorProps, layer.visConfigSettings.wireframe)))) : null, featureTypes.point ? /*#__PURE__*/_react["default"].createElement(_layerConfigGroup["default"], {
          label: 'layer.radius',
          collapsible: true
        }, !layer.config.radiusField ? /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.radius, visConfiguratorProps, {
          label: false,
          disabled: Boolean(layer.config.radiusField)
        })) : /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.radiusRange, visConfiguratorProps, {
          label: false,
          disabled: !layer.config.radiusField
        })), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, /*#__PURE__*/_react["default"].createElement(ChannelByValueSelector, (0, _extends2["default"])({
          channel: layer.visualChannels.radius
        }, layerChannelConfigProps)))) : null);
      }
    }, {
      key: "_render3DLayerConfig",
      value: function _render3DLayerConfig(_ref9) {
        var layer = _ref9.layer,
            visConfiguratorProps = _ref9.visConfiguratorProps;
        return /*#__PURE__*/_react["default"].createElement(_react.Fragment, null, /*#__PURE__*/_react["default"].createElement(_layerConfigGroup["default"], {
          label: 'layer.3DModel',
          collapsible: true
        }, /*#__PURE__*/_react["default"].createElement(_styledComponents2.Input, {
          type: "file",
          accept: ".glb,.gltf",
          onChange: function onChange(e) {
            if (e.target.files && e.target.files[0]) {
              var url = URL.createObjectURL(e.target.files[0]);
              visConfiguratorProps.onChange({
                scenegraph: url
              });
            }
          }
        })), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup["default"], {
          label: 'layer.3DModelOptions',
          collapsible: true
        }, /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.sizeScale, visConfiguratorProps, {
          disabled: false
        })), /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.angleX, visConfiguratorProps, {
          disabled: false
        })), /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.angleY, visConfiguratorProps, {
          disabled: false
        })), /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.angleZ, visConfiguratorProps, {
          disabled: false
        }))));
      }
    }, {
      key: "_renderS2LayerConfig",
      value: function _renderS2LayerConfig(_ref10) {
        var layer = _ref10.layer,
            visConfiguratorProps = _ref10.visConfiguratorProps,
            layerConfiguratorProps = _ref10.layerConfiguratorProps,
            layerChannelConfigProps = _ref10.layerChannelConfigProps;
        var visConfig = layer.config.visConfig;
        return /*#__PURE__*/_react["default"].createElement(StyledLayerVisualConfigurator, null, /*#__PURE__*/_react["default"].createElement(_layerConfigGroup["default"], (0, _extends2["default"])({}, layer.visConfigSettings.filled, visConfiguratorProps, {
          label: "layer.fillColor",
          collapsible: true
        }), layer.config.colorField ? /*#__PURE__*/_react["default"].createElement(LayerColorRangeSelector, visConfiguratorProps) : /*#__PURE__*/_react["default"].createElement(LayerColorSelector, layerConfiguratorProps), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, /*#__PURE__*/_react["default"].createElement(ChannelByValueSelector, (0, _extends2["default"])({
          channel: layer.visualChannels.color
        }, layerChannelConfigProps)), /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.opacity, visConfiguratorProps)))), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup["default"], (0, _extends2["default"])({}, layer.visConfigSettings.stroked, visConfiguratorProps, {
          label: "layer.strokeColor",
          collapsible: true
        }), layer.config.strokeColorField ? /*#__PURE__*/_react["default"].createElement(LayerColorRangeSelector, (0, _extends2["default"])({}, visConfiguratorProps, {
          property: "strokeColorRange"
        })) : /*#__PURE__*/_react["default"].createElement(LayerColorSelector, (0, _extends2["default"])({}, visConfiguratorProps, {
          selectedColor: layer.config.visConfig.strokeColor,
          property: "strokeColor"
        })), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, /*#__PURE__*/_react["default"].createElement(ChannelByValueSelector, (0, _extends2["default"])({
          channel: layer.visualChannels.strokeColor
        }, layerChannelConfigProps)))), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup["default"], (0, _extends2["default"])({}, visConfiguratorProps, {
          label: "layer.strokeWidth",
          collapsible: true
        }), layer.config.sizeField ? /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.sizeRange, visConfiguratorProps, {
          label: false
        })) : /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.thickness, visConfiguratorProps, {
          label: false
        })), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, /*#__PURE__*/_react["default"].createElement(ChannelByValueSelector, (0, _extends2["default"])({
          channel: layer.visualChannels.size
        }, layerChannelConfigProps)))), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup["default"], (0, _extends2["default"])({}, visConfiguratorProps, layer.visConfigSettings.enable3d, {
          disabled: !visConfig.filled,
          collapsible: true
        }), /*#__PURE__*/_react["default"].createElement(ChannelByValueSelector, (0, _extends2["default"])({
          channel: layer.visualChannels.height
        }, layerChannelConfigProps)), /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.elevationScale, visConfiguratorProps, {
          label: "layerVisConfigs.elevationScale"
        })), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.heightRange, visConfiguratorProps, {
          label: "layerVisConfigs.heightRange"
        })), /*#__PURE__*/_react["default"].createElement(_visConfigSwitch["default"], (0, _extends2["default"])({}, visConfiguratorProps, layer.visConfigSettings.wireframe)))));
      }
    }, {
      key: "render",
      value: function render() {
        var _this = this;

        var _this$props = this.props,
            layer = _this$props.layer,
            datasets = _this$props.datasets,
            updateLayerConfig = _this$props.updateLayerConfig,
            layerTypeOptions = _this$props.layerTypeOptions,
            updateLayerType = _this$props.updateLayerType;

        var _ref11 = layer.config.dataId ? datasets[layer.config.dataId] : {},
            _ref11$fields = _ref11.fields,
            fields = _ref11$fields === void 0 ? [] : _ref11$fields,
            fieldPairs = _ref11.fieldPairs;

        var config = layer.config;
        var visConfiguratorProps = getVisConfiguratorProps(this.props);
        var layerConfiguratorProps = getLayerConfiguratorProps(this.props);
        var layerChannelConfigProps = getLayerChannelConfigProps(this.props);
        var renderTemplate = layer.type && "_render".concat((0, _utils.capitalizeFirstLetter)(layer.type), "LayerConfig");
        return /*#__PURE__*/_react["default"].createElement(StyledLayerConfigurator, null, layer.layerInfoModal ? /*#__PURE__*/_react["default"].createElement(HowToButton, {
          onClick: function onClick() {
            return _this.props.openModal(layer.layerInfoModal);
          }
        }) : null, /*#__PURE__*/_react["default"].createElement(_layerConfigGroup["default"], {
          label: 'layer.basic',
          collapsible: true,
          expanded: !layer.hasAllColumns()
        }, /*#__PURE__*/_react["default"].createElement(_layerTypeSelector["default"], {
          layer: layer,
          layerTypeOptions: layerTypeOptions,
          onSelect: updateLayerType
        }), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, Object.keys(datasets).length > 1 && /*#__PURE__*/_react["default"].createElement(SourceDataSelector, {
          datasets: datasets,
          id: layer.id,
          disabled: layer.type && config.columns,
          dataId: config.dataId,
          onSelect: function onSelect(value) {
            return updateLayerConfig({
              dataId: value
            });
          }
        }), /*#__PURE__*/_react["default"].createElement(_layerColumnConfig["default"], {
          columnPairs: layer.columnPairs,
          columns: layer.config.columns,
          assignColumnPairs: layer.assignColumnPairs.bind(layer),
          assignColumn: layer.assignColumn.bind(layer),
          columnLabels: layer.columnLabels,
          fields: fields,
          fieldPairs: fieldPairs,
          updateLayerConfig: updateLayerConfig,
          updateLayerType: this.props.updateLayerType
        }))), this[renderTemplate] && this[renderTemplate]({
          layer: layer,
          visConfiguratorProps: visConfiguratorProps,
          layerChannelConfigProps: layerChannelConfigProps,
          layerConfiguratorProps: layerConfiguratorProps
        }));
      }
    }]);
    return LayerConfigurator;
  }(_react.Component);

  (0, _defineProperty2["default"])(LayerConfigurator, "propTypes", {
    layer: _propTypes["default"].object.isRequired,
    datasets: _propTypes["default"].object.isRequired,
    layerTypeOptions: _propTypes["default"].arrayOf(_propTypes["default"].any).isRequired,
    openModal: _propTypes["default"].func.isRequired,
    updateLayerConfig: _propTypes["default"].func.isRequired,
    updateLayerType: _propTypes["default"].func.isRequired,
    updateLayerVisConfig: _propTypes["default"].func.isRequired,
    updateLayerVisualChannelConfig: _propTypes["default"].func.isRequired,
    updateLayerColorUI: _propTypes["default"].func.isRequired
  });
  return LayerConfigurator;
}
/*
 * Componentize config component into pure functional components
 */


var StyledHowToButton = _styledComponents["default"].div(_templateObject3());

var HowToButton = function HowToButton(_ref12) {
  var onClick = _ref12.onClick;
  return /*#__PURE__*/_react["default"].createElement(StyledHowToButton, null, /*#__PURE__*/_react["default"].createElement(_styledComponents2.Button, {
    link: true,
    small: true,
    onClick: onClick
  }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: 'layerConfiguration.howTo'
  })));
};

exports.HowToButton = HowToButton;

var LayerColorSelector = function LayerColorSelector(_ref13) {
  var layer = _ref13.layer,
      onChange = _ref13.onChange,
      label = _ref13.label,
      selectedColor = _ref13.selectedColor,
      _ref13$property = _ref13.property,
      property = _ref13$property === void 0 ? 'color' : _ref13$property,
      _setColorUI = _ref13.setColorUI;
  return /*#__PURE__*/_react["default"].createElement(_styledComponents2.SidePanelSection, null, /*#__PURE__*/_react["default"].createElement(_colorSelector["default"], {
    colorSets: [{
      selectedColor: selectedColor || layer.config.color,
      setColor: function setColor(rgbValue) {
        return onChange((0, _defineProperty2["default"])({}, property, rgbValue));
      }
    }],
    colorUI: layer.config.colorUI[property],
    setColorUI: function setColorUI(newConfig) {
      return _setColorUI(property, newConfig);
    }
  }));
};

exports.LayerColorSelector = LayerColorSelector;

var ArcLayerColorSelector = function ArcLayerColorSelector(_ref14) {
  var layer = _ref14.layer,
      onChangeConfig = _ref14.onChangeConfig,
      onChangeVisConfig = _ref14.onChangeVisConfig,
      _ref14$property = _ref14.property,
      property = _ref14$property === void 0 ? 'color' : _ref14$property,
      _setColorUI2 = _ref14.setColorUI;
  return /*#__PURE__*/_react["default"].createElement(_styledComponents2.SidePanelSection, null, /*#__PURE__*/_react["default"].createElement(_colorSelector["default"], {
    colorSets: [{
      selectedColor: layer.config.color,
      setColor: function setColor(rgbValue) {
        return onChangeConfig({
          color: rgbValue
        });
      },
      label: 'Source'
    }, {
      selectedColor: layer.config.visConfig.targetColor || layer.config.color,
      setColor: function setColor(rgbValue) {
        return onChangeVisConfig({
          targetColor: rgbValue
        });
      },
      label: 'Target'
    }],
    colorUI: layer.config.colorUI[property],
    setColorUI: function setColorUI(newConfig) {
      return _setColorUI2(property, newConfig);
    }
  }));
};

exports.ArcLayerColorSelector = ArcLayerColorSelector;

var LayerColorRangeSelector = function LayerColorRangeSelector(_ref15) {
  var layer = _ref15.layer,
      onChange = _ref15.onChange,
      _ref15$property = _ref15.property,
      property = _ref15$property === void 0 ? 'colorRange' : _ref15$property,
      _setColorUI3 = _ref15.setColorUI;
  return /*#__PURE__*/_react["default"].createElement(_styledComponents2.SidePanelSection, null, /*#__PURE__*/_react["default"].createElement(_colorSelector["default"], {
    colorSets: [{
      selectedColor: layer.config.visConfig[property],
      isRange: true,
      setColor: function setColor(colorRange) {
        return onChange((0, _defineProperty2["default"])({}, property, colorRange));
      }
    }],
    colorUI: layer.config.colorUI[property],
    setColorUI: function setColorUI(newConfig) {
      return _setColorUI3(property, newConfig);
    }
  }));
};

exports.LayerColorRangeSelector = LayerColorRangeSelector;

var ChannelByValueSelector = function ChannelByValueSelector(_ref16) {
  var layer = _ref16.layer,
      channel = _ref16.channel,
      onChange = _ref16.onChange,
      fields = _ref16.fields,
      description = _ref16.description;
  var channelScaleType = channel.channelScaleType,
      domain = channel.domain,
      field = channel.field,
      key = channel.key,
      property = channel.property,
      range = channel.range,
      scale = channel.scale,
      defaultMeasure = channel.defaultMeasure,
      supportedFieldTypes = channel.supportedFieldTypes;
  var channelSupportedFieldTypes = supportedFieldTypes || _defaultSettings.CHANNEL_SCALE_SUPPORTED_FIELDS[channelScaleType];
  var supportedFields = fields.filter(function (_ref17) {
    var type = _ref17.type;
    return channelSupportedFieldTypes.includes(type);
  });
  var scaleOptions = layer.getScaleOptions(channel.key);
  var showScale = !layer.isAggregated && layer.config[scale] && scaleOptions.length > 1;
  var defaultDescription = 'layerConfiguration.defaultDescription';
  return /*#__PURE__*/_react["default"].createElement(_visConfigByFieldSelector["default"], {
    channel: channel.key,
    description: description || defaultDescription,
    domain: layer.config[domain],
    fields: supportedFields,
    id: layer.id,
    key: "".concat(key, "-channel-selector"),
    property: property,
    placeholder: defaultMeasure || 'placeholder.selectField',
    range: layer.config.visConfig[range],
    scaleOptions: scaleOptions,
    scaleType: scale ? layer.config[scale] : null,
    selectedField: layer.config[field],
    showScale: showScale,
    updateField: function updateField(val) {
      return onChange((0, _defineProperty2["default"])({}, field, val), key);
    },
    updateScale: function updateScale(val) {
      return onChange((0, _defineProperty2["default"])({}, scale, val), key);
    }
  });
};

exports.ChannelByValueSelector = ChannelByValueSelector;

var AggrScaleSelector = function AggrScaleSelector(_ref18) {
  var channel = _ref18.channel,
      layer = _ref18.layer,
      onChange = _ref18.onChange;
  var scale = channel.scale,
      key = channel.key;
  var scaleOptions = layer.getScaleOptions(key);
  return Array.isArray(scaleOptions) && scaleOptions.length > 1 ? /*#__PURE__*/_react["default"].createElement(_dimensionScaleSelector["default"], {
    label: "".concat(key, " Scale"),
    options: scaleOptions,
    scaleType: layer.config[scale],
    onSelect: function onSelect(val) {
      return onChange((0, _defineProperty2["default"])({}, scale, val), key);
    }
  }) : null;
};

exports.AggrScaleSelector = AggrScaleSelector;

var AggregationTypeSelector = function AggregationTypeSelector(_ref19) {
  var layer = _ref19.layer,
      channel = _ref19.channel,
      _onChange6 = _ref19.onChange;
  var field = channel.field,
      aggregation = channel.aggregation,
      key = channel.key;
  var selectedField = layer.config[field];
  var visConfig = layer.config.visConfig; // aggregation should only be selectable when field is selected

  var aggregationOptions = layer.getAggregationOptions(key);
  return /*#__PURE__*/_react["default"].createElement(_styledComponents2.SidePanelSection, null, /*#__PURE__*/_react["default"].createElement(_styledComponents2.PanelLabel, null, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: 'layer.aggregateBy',
    values: {
      field: selectedField.name
    }
  })), /*#__PURE__*/_react["default"].createElement(_itemSelector["default"], {
    selectedItems: visConfig[aggregation],
    options: aggregationOptions,
    multiSelect: false,
    searchable: false,
    onChange: function onChange(value) {
      return _onChange6({
        visConfig: _objectSpread(_objectSpread({}, layer.config.visConfig), {}, (0, _defineProperty2["default"])({}, aggregation, value))
      }, channel.key);
    }
  }));
};
/* eslint-enable max-params */


exports.AggregationTypeSelector = AggregationTypeSelector;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NpZGUtcGFuZWwvbGF5ZXItcGFuZWwvbGF5ZXItY29uZmlndXJhdG9yLmpzIl0sIm5hbWVzIjpbIlN0eWxlZExheWVyQ29uZmlndXJhdG9yIiwic3R5bGVkIiwiZGl2IiwiYXR0cnMiLCJjbGFzc05hbWUiLCJTdHlsZWRMYXllclZpc3VhbENvbmZpZ3VyYXRvciIsImdldExheWVyRmllbGRzIiwiZGF0YXNldHMiLCJsYXllciIsImNvbmZpZyIsImRhdGFJZCIsImZpZWxkcyIsImdldExheWVyQ29uZmlndXJhdG9yUHJvcHMiLCJwcm9wcyIsIm9uQ2hhbmdlIiwidXBkYXRlTGF5ZXJDb25maWciLCJzZXRDb2xvclVJIiwidXBkYXRlTGF5ZXJDb2xvclVJIiwiZ2V0VmlzQ29uZmlndXJhdG9yUHJvcHMiLCJ1cGRhdGVMYXllclZpc0NvbmZpZyIsImdldExheWVyQ2hhbm5lbENvbmZpZ1Byb3BzIiwidXBkYXRlTGF5ZXJWaXN1YWxDaGFubmVsQ29uZmlnIiwiTGF5ZXJDb25maWd1cmF0b3JGYWN0b3J5IiwiZGVwcyIsIlNvdXJjZURhdGFTZWxlY3RvckZhY3RvcnkiLCJWaXNDb25maWdTbGlkZXJGYWN0b3J5IiwiVGV4dExhYmVsUGFuZWxGYWN0b3J5IiwiU291cmNlRGF0YVNlbGVjdG9yIiwiVmlzQ29uZmlnU2xpZGVyIiwiVGV4dExhYmVsUGFuZWwiLCJMYXllckNvbmZpZ3VyYXRvciIsIl9yZW5kZXJTY2F0dGVycGxvdExheWVyQ29uZmlnIiwidmlzQ29uZmlndXJhdG9yUHJvcHMiLCJsYXllckNoYW5uZWxDb25maWdQcm9wcyIsImxheWVyQ29uZmlndXJhdG9yUHJvcHMiLCJ2aXNDb25maWdTZXR0aW5ncyIsImZpbGxlZCIsImxhYmVsIiwiY29sb3JGaWVsZCIsInZpc3VhbENoYW5uZWxzIiwiY29sb3IiLCJvcGFjaXR5IiwidHlwZSIsIkxBWUVSX1RZUEVTIiwicG9pbnQiLCJvdXRsaW5lIiwic3Ryb2tlQ29sb3JGaWVsZCIsInZpc0NvbmZpZyIsInN0cm9rZUNvbG9yIiwidGhpY2tuZXNzIiwic2l6ZUZpZWxkIiwicmFkaXVzIiwiQm9vbGVhbiIsInJhZGl1c1JhbmdlIiwiZml4ZWRSYWRpdXMiLCJzaXplIiwidXBkYXRlTGF5ZXJUZXh0TGFiZWwiLCJ0ZXh0TGFiZWwiLCJjb2xvclBhbGV0dGUiLCJzZXRDb2xvclBhbGV0dGVVSSIsImNvbG9yQWdncmVnYXRpb24iLCJjb25kaXRpb24iLCJjbHVzdGVyUmFkaXVzIiwid2VpZ2h0IiwiX3JlbmRlckFnZ3JlZ2F0aW9uTGF5ZXJDb25maWciLCJlbmFibGUzZCIsImVsZXZhdGlvbkJ5RGVzY3JpcHRpb24iLCJjb2xvckJ5RGVzY3JpcHRpb24iLCJwZXJjZW50aWxlIiwid29ybGRVbml0U2l6ZSIsImNvdmVyYWdlIiwiZWxldmF0aW9uU2NhbGUiLCJzaXplUmFuZ2UiLCJzaXplQWdncmVnYXRpb24iLCJlbGV2YXRpb25QZXJjZW50aWxlIiwiY292ZXJhZ2VGaWVsZCIsImNvdmVyYWdlUmFuZ2UiLCJhcmdzIiwiX3JlbmRlckxpbmVMYXllckNvbmZpZyIsIm1ldGEiLCJmZWF0dXJlVHlwZXMiLCJwb2x5Z29uIiwic3Ryb2tlZCIsInRyYWlsTGVuZ3RoIiwic3Ryb2tlT3BhY2l0eSIsImhlaWdodCIsIndpcmVmcmFtZSIsInJhZGl1c0ZpZWxkIiwiZSIsInRhcmdldCIsImZpbGVzIiwidXJsIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwic2NlbmVncmFwaCIsInNpemVTY2FsZSIsImFuZ2xlWCIsImFuZ2xlWSIsImFuZ2xlWiIsImhlaWdodFJhbmdlIiwibGF5ZXJUeXBlT3B0aW9ucyIsInVwZGF0ZUxheWVyVHlwZSIsImZpZWxkUGFpcnMiLCJyZW5kZXJUZW1wbGF0ZSIsImxheWVySW5mb01vZGFsIiwib3Blbk1vZGFsIiwiaGFzQWxsQ29sdW1ucyIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJpZCIsImNvbHVtbnMiLCJ2YWx1ZSIsImNvbHVtblBhaXJzIiwiYXNzaWduQ29sdW1uUGFpcnMiLCJiaW5kIiwiYXNzaWduQ29sdW1uIiwiY29sdW1uTGFiZWxzIiwiQ29tcG9uZW50IiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsImFycmF5T2YiLCJhbnkiLCJmdW5jIiwiU3R5bGVkSG93VG9CdXR0b24iLCJIb3dUb0J1dHRvbiIsIm9uQ2xpY2siLCJMYXllckNvbG9yU2VsZWN0b3IiLCJzZWxlY3RlZENvbG9yIiwicHJvcGVydHkiLCJzZXRDb2xvciIsInJnYlZhbHVlIiwiY29sb3JVSSIsIm5ld0NvbmZpZyIsIkFyY0xheWVyQ29sb3JTZWxlY3RvciIsIm9uQ2hhbmdlQ29uZmlnIiwib25DaGFuZ2VWaXNDb25maWciLCJ0YXJnZXRDb2xvciIsIkxheWVyQ29sb3JSYW5nZVNlbGVjdG9yIiwiaXNSYW5nZSIsImNvbG9yUmFuZ2UiLCJDaGFubmVsQnlWYWx1ZVNlbGVjdG9yIiwiY2hhbm5lbCIsImRlc2NyaXB0aW9uIiwiY2hhbm5lbFNjYWxlVHlwZSIsImRvbWFpbiIsImZpZWxkIiwia2V5IiwicmFuZ2UiLCJzY2FsZSIsImRlZmF1bHRNZWFzdXJlIiwic3VwcG9ydGVkRmllbGRUeXBlcyIsImNoYW5uZWxTdXBwb3J0ZWRGaWVsZFR5cGVzIiwiQ0hBTk5FTF9TQ0FMRV9TVVBQT1JURURfRklFTERTIiwic3VwcG9ydGVkRmllbGRzIiwiZmlsdGVyIiwiaW5jbHVkZXMiLCJzY2FsZU9wdGlvbnMiLCJnZXRTY2FsZU9wdGlvbnMiLCJzaG93U2NhbGUiLCJpc0FnZ3JlZ2F0ZWQiLCJkZWZhdWx0RGVzY3JpcHRpb24iLCJ2YWwiLCJBZ2dyU2NhbGVTZWxlY3RvciIsIkFycmF5IiwiaXNBcnJheSIsIkFnZ3JlZ2F0aW9uVHlwZVNlbGVjdG9yIiwiYWdncmVnYXRpb24iLCJzZWxlY3RlZEZpZWxkIiwiYWdncmVnYXRpb25PcHRpb25zIiwiZ2V0QWdncmVnYXRpb25PcHRpb25zIiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUMsNkJBQUQscUJBQ0UsZ0NBQUMsMkJBQUQ7QUFBa0IsSUFBQSxFQUFFLEVBQUUsbUJBQXRCO0FBQTJDLElBQUEsTUFBTSxFQUFFO0FBQUNELE1BQUFBLEtBQUssRUFBRXNCLGFBQWEsQ0FBQ0c7QUFBdEI7QUFBbkQsSUFERixDQURGLGVBSUUsZ0NBQUMsd0JBQUQ7QUFDRSxJQUFBLGFBQWEsRUFBRTdILFNBQVMsQ0FBQ3lILFdBQUQsQ0FEMUI7QUFFRSxJQUFBLE9BQU8sRUFBRUUsa0JBRlg7QUFHRSxJQUFBLFdBQVcsRUFBRSxLQUhmO0FBSUUsSUFBQSxVQUFVLEVBQUUsS0FKZDtBQUtFLElBQUEsUUFBUSxFQUFFLGtCQUFBMUQsS0FBSztBQUFBLGFBQ2JsRyxVQUFRLENBQ047QUFDRWlDLFFBQUFBLFNBQVMsa0NBQ0p2QyxLQUFLLENBQUNDLE1BQU4sQ0FBYXNDLFNBRFQsNENBRU55SCxXQUZNLEVBRVF4RCxLQUZSO0FBRFgsT0FETSxFQU9OK0IsT0FBTyxDQUFDSyxHQVBGLENBREs7QUFBQTtBQUxqQixJQUpGLENBREY7QUF3QkQsQ0FoQ007QUFpQ1AiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG4vKiBlc2xpbnQtZGlzYWJsZSBjb21wbGV4aXR5ICovXHJcbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudCwgRnJhZ21lbnR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7Rm9ybWF0dGVkTWVzc2FnZX0gZnJvbSAncmVhY3QtaW50bCc7XHJcblxyXG5pbXBvcnQge0J1dHRvbiwgSW5wdXQsIFBhbmVsTGFiZWwsIFNpZGVQYW5lbFNlY3Rpb259IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IEl0ZW1TZWxlY3RvciBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9pdGVtLXNlbGVjdG9yL2l0ZW0tc2VsZWN0b3InO1xyXG5cclxuaW1wb3J0IFZpc0NvbmZpZ0J5RmllbGRTZWxlY3RvciBmcm9tICcuL3Zpcy1jb25maWctYnktZmllbGQtc2VsZWN0b3InO1xyXG5pbXBvcnQgTGF5ZXJDb2x1bW5Db25maWcgZnJvbSAnLi9sYXllci1jb2x1bW4tY29uZmlnJztcclxuaW1wb3J0IExheWVyVHlwZVNlbGVjdG9yIGZyb20gJy4vbGF5ZXItdHlwZS1zZWxlY3Rvcic7XHJcbmltcG9ydCBEaW1lbnNpb25TY2FsZVNlbGVjdG9yIGZyb20gJy4vZGltZW5zaW9uLXNjYWxlLXNlbGVjdG9yJztcclxuaW1wb3J0IENvbG9yU2VsZWN0b3IgZnJvbSAnLi9jb2xvci1zZWxlY3Rvcic7XHJcbmltcG9ydCBTb3VyY2VEYXRhU2VsZWN0b3JGYWN0b3J5IGZyb20gJ2NvbXBvbmVudHMvc2lkZS1wYW5lbC9jb21tb24vc291cmNlLWRhdGEtc2VsZWN0b3InO1xyXG5pbXBvcnQgVmlzQ29uZmlnU3dpdGNoIGZyb20gJy4vdmlzLWNvbmZpZy1zd2l0Y2gnO1xyXG5pbXBvcnQgVmlzQ29uZmlnU2xpZGVyRmFjdG9yeSBmcm9tICcuL3Zpcy1jb25maWctc2xpZGVyJztcclxuaW1wb3J0IExheWVyQ29uZmlnR3JvdXAsIHtDb25maWdHcm91cENvbGxhcHNpYmxlQ29udGVudH0gZnJvbSAnLi9sYXllci1jb25maWctZ3JvdXAnO1xyXG5pbXBvcnQgVGV4dExhYmVsUGFuZWxGYWN0b3J5IGZyb20gJy4vdGV4dC1sYWJlbC1wYW5lbCc7XHJcblxyXG5pbXBvcnQge2NhcGl0YWxpemVGaXJzdExldHRlcn0gZnJvbSAndXRpbHMvdXRpbHMnO1xyXG5cclxuaW1wb3J0IHtDSEFOTkVMX1NDQUxFX1NVUFBPUlRFRF9GSUVMRFMsIExBWUVSX1RZUEVTfSBmcm9tICdjb25zdGFudHMvZGVmYXVsdC1zZXR0aW5ncyc7XHJcblxyXG5jb25zdCBTdHlsZWRMYXllckNvbmZpZ3VyYXRvciA9IHN0eWxlZC5kaXYuYXR0cnMoe1xyXG4gIGNsYXNzTmFtZTogJ2xheWVyLXBhbmVsX19jb25maWcnXHJcbn0pYFxyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW4tdG9wOiAxMnB4O1xyXG5gO1xyXG5cclxuY29uc3QgU3R5bGVkTGF5ZXJWaXN1YWxDb25maWd1cmF0b3IgPSBzdHlsZWQuZGl2LmF0dHJzKHtcclxuICBjbGFzc05hbWU6ICdsYXllci1wYW5lbF9fY29uZmlnX192aXN1YWxDLWNvbmZpZydcclxufSlgXHJcbiAgbWFyZ2luLXRvcDogMTJweDtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRMYXllckZpZWxkcyA9IChkYXRhc2V0cywgbGF5ZXIpID0+XHJcbiAgZGF0YXNldHNbbGF5ZXIuY29uZmlnLmRhdGFJZF0gPyBkYXRhc2V0c1tsYXllci5jb25maWcuZGF0YUlkXS5maWVsZHMgOiBbXTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRMYXllckNvbmZpZ3VyYXRvclByb3BzID0gcHJvcHMgPT4gKHtcclxuICBsYXllcjogcHJvcHMubGF5ZXIsXHJcbiAgZmllbGRzOiBnZXRMYXllckZpZWxkcyhwcm9wcy5kYXRhc2V0cywgcHJvcHMubGF5ZXIpLFxyXG4gIG9uQ2hhbmdlOiBwcm9wcy51cGRhdGVMYXllckNvbmZpZyxcclxuICBzZXRDb2xvclVJOiBwcm9wcy51cGRhdGVMYXllckNvbG9yVUlcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0VmlzQ29uZmlndXJhdG9yUHJvcHMgPSBwcm9wcyA9PiAoe1xyXG4gIGxheWVyOiBwcm9wcy5sYXllcixcclxuICBmaWVsZHM6IGdldExheWVyRmllbGRzKHByb3BzLmRhdGFzZXRzLCBwcm9wcy5sYXllciksXHJcbiAgb25DaGFuZ2U6IHByb3BzLnVwZGF0ZUxheWVyVmlzQ29uZmlnLFxyXG4gIHNldENvbG9yVUk6IHByb3BzLnVwZGF0ZUxheWVyQ29sb3JVSVxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRMYXllckNoYW5uZWxDb25maWdQcm9wcyA9IHByb3BzID0+ICh7XHJcbiAgbGF5ZXI6IHByb3BzLmxheWVyLFxyXG4gIGZpZWxkczogZ2V0TGF5ZXJGaWVsZHMocHJvcHMuZGF0YXNldHMsIHByb3BzLmxheWVyKSxcclxuICBvbkNoYW5nZTogcHJvcHMudXBkYXRlTGF5ZXJWaXN1YWxDaGFubmVsQ29uZmlnXHJcbn0pO1xyXG5cclxuTGF5ZXJDb25maWd1cmF0b3JGYWN0b3J5LmRlcHMgPSBbXHJcbiAgU291cmNlRGF0YVNlbGVjdG9yRmFjdG9yeSxcclxuICBWaXNDb25maWdTbGlkZXJGYWN0b3J5LFxyXG4gIFRleHRMYWJlbFBhbmVsRmFjdG9yeVxyXG5dO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGF5ZXJDb25maWd1cmF0b3JGYWN0b3J5KFxyXG4gIFNvdXJjZURhdGFTZWxlY3RvcixcclxuICBWaXNDb25maWdTbGlkZXIsXHJcbiAgVGV4dExhYmVsUGFuZWxcclxuKSB7XHJcbiAgY2xhc3MgTGF5ZXJDb25maWd1cmF0b3IgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcclxuICAgICAgbGF5ZXI6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcclxuICAgICAgZGF0YXNldHM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcclxuICAgICAgbGF5ZXJUeXBlT3B0aW9uczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLmFueSkuaXNSZXF1aXJlZCxcclxuICAgICAgb3Blbk1vZGFsOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gICAgICB1cGRhdGVMYXllckNvbmZpZzogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICAgICAgdXBkYXRlTGF5ZXJUeXBlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gICAgICB1cGRhdGVMYXllclZpc0NvbmZpZzogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICAgICAgdXBkYXRlTGF5ZXJWaXN1YWxDaGFubmVsQ29uZmlnOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gICAgICB1cGRhdGVMYXllckNvbG9yVUk6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcclxuICAgIH07XHJcblxyXG4gICAgX3JlbmRlclBvaW50TGF5ZXJDb25maWcocHJvcHMpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuX3JlbmRlclNjYXR0ZXJwbG90TGF5ZXJDb25maWcocHJvcHMpO1xyXG4gICAgfVxyXG5cclxuICAgIF9yZW5kZXJJY29uTGF5ZXJDb25maWcocHJvcHMpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuX3JlbmRlclNjYXR0ZXJwbG90TGF5ZXJDb25maWcocHJvcHMpO1xyXG4gICAgfVxyXG5cclxuICAgIF9yZW5kZXJTY2F0dGVycGxvdExheWVyQ29uZmlnKHtcclxuICAgICAgbGF5ZXIsXHJcbiAgICAgIHZpc0NvbmZpZ3VyYXRvclByb3BzLFxyXG4gICAgICBsYXllckNoYW5uZWxDb25maWdQcm9wcyxcclxuICAgICAgbGF5ZXJDb25maWd1cmF0b3JQcm9wc1xyXG4gICAgfSkge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxTdHlsZWRMYXllclZpc3VhbENvbmZpZ3VyYXRvcj5cclxuICAgICAgICAgIHsvKiBGaWxsIENvbG9yICovfVxyXG4gICAgICAgICAgPExheWVyQ29uZmlnR3JvdXBcclxuICAgICAgICAgICAgey4uLihsYXllci52aXNDb25maWdTZXR0aW5ncy5maWxsZWQgfHwge2xhYmVsOiAnbGF5ZXIuY29sb3InfSl9XHJcbiAgICAgICAgICAgIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc31cclxuICAgICAgICAgICAgY29sbGFwc2libGVcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge2xheWVyLmNvbmZpZy5jb2xvckZpZWxkID8gKFxyXG4gICAgICAgICAgICAgIDxMYXllckNvbG9yUmFuZ2VTZWxlY3RvciB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9IC8+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgPExheWVyQ29sb3JTZWxlY3RvciB7Li4ubGF5ZXJDb25maWd1cmF0b3JQcm9wc30gLz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPENvbmZpZ0dyb3VwQ29sbGFwc2libGVDb250ZW50PlxyXG4gICAgICAgICAgICAgIDxDaGFubmVsQnlWYWx1ZVNlbGVjdG9yXHJcbiAgICAgICAgICAgICAgICBjaGFubmVsPXtsYXllci52aXN1YWxDaGFubmVscy5jb2xvcn1cclxuICAgICAgICAgICAgICAgIHsuLi5sYXllckNoYW5uZWxDb25maWdQcm9wc31cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxWaXNDb25maWdTbGlkZXIgey4uLmxheWVyLnZpc0NvbmZpZ1NldHRpbmdzLm9wYWNpdHl9IHsuLi52aXNDb25maWd1cmF0b3JQcm9wc30gLz5cclxuICAgICAgICAgICAgPC9Db25maWdHcm91cENvbGxhcHNpYmxlQ29udGVudD5cclxuICAgICAgICAgIDwvTGF5ZXJDb25maWdHcm91cD5cclxuXHJcbiAgICAgICAgICB7Lyogb3V0bGluZSBjb2xvciAqL31cclxuICAgICAgICAgIHtsYXllci50eXBlID09PSBMQVlFUl9UWVBFUy5wb2ludCA/IChcclxuICAgICAgICAgICAgPExheWVyQ29uZmlnR3JvdXBcclxuICAgICAgICAgICAgICB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3Mub3V0bGluZX1cclxuICAgICAgICAgICAgICB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9XHJcbiAgICAgICAgICAgICAgY29sbGFwc2libGVcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtsYXllci5jb25maWcuc3Ryb2tlQ29sb3JGaWVsZCA/IChcclxuICAgICAgICAgICAgICAgIDxMYXllckNvbG9yUmFuZ2VTZWxlY3RvciB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9IHByb3BlcnR5PVwic3Ryb2tlQ29sb3JSYW5nZVwiIC8+XHJcbiAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgIDxMYXllckNvbG9yU2VsZWN0b3JcclxuICAgICAgICAgICAgICAgICAgey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfVxyXG4gICAgICAgICAgICAgICAgICBzZWxlY3RlZENvbG9yPXtsYXllci5jb25maWcudmlzQ29uZmlnLnN0cm9rZUNvbG9yfVxyXG4gICAgICAgICAgICAgICAgICBwcm9wZXJ0eT1cInN0cm9rZUNvbG9yXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8Q29uZmlnR3JvdXBDb2xsYXBzaWJsZUNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICA8Q2hhbm5lbEJ5VmFsdWVTZWxlY3RvclxyXG4gICAgICAgICAgICAgICAgICBjaGFubmVsPXtsYXllci52aXN1YWxDaGFubmVscy5zdHJva2VDb2xvcn1cclxuICAgICAgICAgICAgICAgICAgey4uLmxheWVyQ2hhbm5lbENvbmZpZ1Byb3BzfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxWaXNDb25maWdTbGlkZXJcclxuICAgICAgICAgICAgICAgICAgey4uLmxheWVyLnZpc0NvbmZpZ1NldHRpbmdzLnRoaWNrbmVzc31cclxuICAgICAgICAgICAgICAgICAgey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfVxyXG4gICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IWxheWVyLmNvbmZpZy52aXNDb25maWcub3V0bGluZX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9Db25maWdHcm91cENvbGxhcHNpYmxlQ29udGVudD5cclxuICAgICAgICAgICAgPC9MYXllckNvbmZpZ0dyb3VwPlxyXG4gICAgICAgICAgKSA6IG51bGx9XHJcblxyXG4gICAgICAgICAgey8qIFJhZGl1cyAqL31cclxuICAgICAgICAgIDxMYXllckNvbmZpZ0dyb3VwIGxhYmVsPXsnbGF5ZXIucmFkaXVzJ30gY29sbGFwc2libGU+XHJcbiAgICAgICAgICAgIHshbGF5ZXIuY29uZmlnLnNpemVGaWVsZCA/IChcclxuICAgICAgICAgICAgICA8VmlzQ29uZmlnU2xpZGVyXHJcbiAgICAgICAgICAgICAgICB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3MucmFkaXVzfVxyXG4gICAgICAgICAgICAgICAgey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfVxyXG4gICAgICAgICAgICAgICAgbGFiZWw9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e0Jvb2xlYW4obGF5ZXIuY29uZmlnLnNpemVGaWVsZCl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICA8VmlzQ29uZmlnU2xpZGVyXHJcbiAgICAgICAgICAgICAgICB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3MucmFkaXVzUmFuZ2V9XHJcbiAgICAgICAgICAgICAgICB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9XHJcbiAgICAgICAgICAgICAgICBsYWJlbD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17IWxheWVyLmNvbmZpZy5zaXplRmllbGQgfHwgbGF5ZXIuY29uZmlnLnZpc0NvbmZpZy5maXhlZFJhZGl1c31cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8Q29uZmlnR3JvdXBDb2xsYXBzaWJsZUNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgPENoYW5uZWxCeVZhbHVlU2VsZWN0b3JcclxuICAgICAgICAgICAgICAgIGNoYW5uZWw9e2xheWVyLnZpc3VhbENoYW5uZWxzLnNpemV9XHJcbiAgICAgICAgICAgICAgICB7Li4ubGF5ZXJDaGFubmVsQ29uZmlnUHJvcHN9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICB7bGF5ZXIuY29uZmlnLnNpemVGaWVsZCA/IChcclxuICAgICAgICAgICAgICAgIDxWaXNDb25maWdTd2l0Y2hcclxuICAgICAgICAgICAgICAgICAgey4uLmxheWVyLnZpc0NvbmZpZ1NldHRpbmdzLmZpeGVkUmFkaXVzfVxyXG4gICAgICAgICAgICAgICAgICB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICA8L0NvbmZpZ0dyb3VwQ29sbGFwc2libGVDb250ZW50PlxyXG4gICAgICAgICAgPC9MYXllckNvbmZpZ0dyb3VwPlxyXG5cclxuICAgICAgICAgIHsvKiB0ZXh0IGxhYmVsICovfVxyXG4gICAgICAgICAgPFRleHRMYWJlbFBhbmVsXHJcbiAgICAgICAgICAgIGZpZWxkcz17dmlzQ29uZmlndXJhdG9yUHJvcHMuZmllbGRzfVxyXG4gICAgICAgICAgICB1cGRhdGVMYXllclRleHRMYWJlbD17dGhpcy5wcm9wcy51cGRhdGVMYXllclRleHRMYWJlbH1cclxuICAgICAgICAgICAgdGV4dExhYmVsPXtsYXllci5jb25maWcudGV4dExhYmVsfVxyXG4gICAgICAgICAgICBjb2xvclBhbGV0dGU9e3Zpc0NvbmZpZ3VyYXRvclByb3BzLmNvbG9yUGFsZXR0ZX1cclxuICAgICAgICAgICAgc2V0Q29sb3JQYWxldHRlVUk9e3Zpc0NvbmZpZ3VyYXRvclByb3BzLnNldENvbG9yUGFsZXR0ZVVJfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L1N0eWxlZExheWVyVmlzdWFsQ29uZmlndXJhdG9yPlxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIF9yZW5kZXJDbHVzdGVyTGF5ZXJDb25maWcoe1xyXG4gICAgICBsYXllcixcclxuICAgICAgdmlzQ29uZmlndXJhdG9yUHJvcHMsXHJcbiAgICAgIGxheWVyQ29uZmlndXJhdG9yUHJvcHMsXHJcbiAgICAgIGxheWVyQ2hhbm5lbENvbmZpZ1Byb3BzXHJcbiAgICB9KSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPFN0eWxlZExheWVyVmlzdWFsQ29uZmlndXJhdG9yPlxyXG4gICAgICAgICAgey8qIENvbG9yICovfVxyXG4gICAgICAgICAgPExheWVyQ29uZmlnR3JvdXAgbGFiZWw9eydsYXllci5jb2xvcid9IGNvbGxhcHNpYmxlPlxyXG4gICAgICAgICAgICA8TGF5ZXJDb2xvclJhbmdlU2VsZWN0b3Igey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfSAvPlxyXG4gICAgICAgICAgICA8Q29uZmlnR3JvdXBDb2xsYXBzaWJsZUNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgPEFnZ3JTY2FsZVNlbGVjdG9yIHsuLi5sYXllckNvbmZpZ3VyYXRvclByb3BzfSBjaGFubmVsPXtsYXllci52aXN1YWxDaGFubmVscy5jb2xvcn0gLz5cclxuICAgICAgICAgICAgICA8Q2hhbm5lbEJ5VmFsdWVTZWxlY3RvclxyXG4gICAgICAgICAgICAgICAgY2hhbm5lbD17bGF5ZXIudmlzdWFsQ2hhbm5lbHMuY29sb3J9XHJcbiAgICAgICAgICAgICAgICB7Li4ubGF5ZXJDaGFubmVsQ29uZmlnUHJvcHN9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICB7bGF5ZXIudmlzQ29uZmlnU2V0dGluZ3MuY29sb3JBZ2dyZWdhdGlvbi5jb25kaXRpb24obGF5ZXIuY29uZmlnKSA/IChcclxuICAgICAgICAgICAgICAgIDxBZ2dyZWdhdGlvblR5cGVTZWxlY3RvclxyXG4gICAgICAgICAgICAgICAgICB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3MuY29sb3JBZ2dyZWdhdGlvbn1cclxuICAgICAgICAgICAgICAgICAgey4uLmxheWVyQ2hhbm5lbENvbmZpZ1Byb3BzfVxyXG4gICAgICAgICAgICAgICAgICBjaGFubmVsPXtsYXllci52aXN1YWxDaGFubmVscy5jb2xvcn1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgPFZpc0NvbmZpZ1NsaWRlciB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3Mub3BhY2l0eX0gey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfSAvPlxyXG4gICAgICAgICAgICA8L0NvbmZpZ0dyb3VwQ29sbGFwc2libGVDb250ZW50PlxyXG4gICAgICAgICAgPC9MYXllckNvbmZpZ0dyb3VwPlxyXG5cclxuICAgICAgICAgIHsvKiBDbHVzdGVyIFJhZGl1cyAqL31cclxuICAgICAgICAgIDxMYXllckNvbmZpZ0dyb3VwIGxhYmVsPXsnbGF5ZXIucmFkaXVzJ30gY29sbGFwc2libGU+XHJcbiAgICAgICAgICAgIDxWaXNDb25maWdTbGlkZXIgey4uLmxheWVyLnZpc0NvbmZpZ1NldHRpbmdzLmNsdXN0ZXJSYWRpdXN9IHsuLi52aXNDb25maWd1cmF0b3JQcm9wc30gLz5cclxuICAgICAgICAgICAgPENvbmZpZ0dyb3VwQ29sbGFwc2libGVDb250ZW50PlxyXG4gICAgICAgICAgICAgIDxWaXNDb25maWdTbGlkZXIgey4uLmxheWVyLnZpc0NvbmZpZ1NldHRpbmdzLnJhZGl1c1JhbmdlfSB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9IC8+XHJcbiAgICAgICAgICAgIDwvQ29uZmlnR3JvdXBDb2xsYXBzaWJsZUNvbnRlbnQ+XHJcbiAgICAgICAgICA8L0xheWVyQ29uZmlnR3JvdXA+XHJcbiAgICAgICAgPC9TdHlsZWRMYXllclZpc3VhbENvbmZpZ3VyYXRvcj5cclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBfcmVuZGVySGVhdG1hcExheWVyQ29uZmlnKHtcclxuICAgICAgbGF5ZXIsXHJcbiAgICAgIHZpc0NvbmZpZ3VyYXRvclByb3BzLFxyXG4gICAgICBsYXllckNvbmZpZ3VyYXRvclByb3BzLFxyXG4gICAgICBsYXllckNoYW5uZWxDb25maWdQcm9wc1xyXG4gICAgfSkge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxTdHlsZWRMYXllclZpc3VhbENvbmZpZ3VyYXRvcj5cclxuICAgICAgICAgIHsvKiBDb2xvciAqL31cclxuICAgICAgICAgIDxMYXllckNvbmZpZ0dyb3VwIGxhYmVsPXsnbGF5ZXIuY29sb3InfSBjb2xsYXBzaWJsZT5cclxuICAgICAgICAgICAgPExheWVyQ29sb3JSYW5nZVNlbGVjdG9yIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc30gLz5cclxuICAgICAgICAgICAgPENvbmZpZ0dyb3VwQ29sbGFwc2libGVDb250ZW50PlxyXG4gICAgICAgICAgICAgIDxWaXNDb25maWdTbGlkZXIgey4uLmxheWVyLnZpc0NvbmZpZ1NldHRpbmdzLm9wYWNpdHl9IHsuLi52aXNDb25maWd1cmF0b3JQcm9wc30gLz5cclxuICAgICAgICAgICAgPC9Db25maWdHcm91cENvbGxhcHNpYmxlQ29udGVudD5cclxuICAgICAgICAgIDwvTGF5ZXJDb25maWdHcm91cD5cclxuICAgICAgICAgIHsvKiBSYWRpdXMgKi99XHJcbiAgICAgICAgICA8TGF5ZXJDb25maWdHcm91cCBsYWJlbD17J2xheWVyLnJhZGl1cyd9PlxyXG4gICAgICAgICAgICA8VmlzQ29uZmlnU2xpZGVyXHJcbiAgICAgICAgICAgICAgey4uLmxheWVyLnZpc0NvbmZpZ1NldHRpbmdzLnJhZGl1c31cclxuICAgICAgICAgICAgICB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9XHJcbiAgICAgICAgICAgICAgbGFiZWw9e2ZhbHNlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9MYXllckNvbmZpZ0dyb3VwPlxyXG4gICAgICAgICAgey8qIFdlaWdodCAqL31cclxuICAgICAgICAgIDxMYXllckNvbmZpZ0dyb3VwIGxhYmVsPXsnbGF5ZXIud2VpZ2h0J30+XHJcbiAgICAgICAgICAgIDxDaGFubmVsQnlWYWx1ZVNlbGVjdG9yXHJcbiAgICAgICAgICAgICAgY2hhbm5lbD17bGF5ZXIudmlzdWFsQ2hhbm5lbHMud2VpZ2h0fVxyXG4gICAgICAgICAgICAgIHsuLi5sYXllckNoYW5uZWxDb25maWdQcm9wc31cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvTGF5ZXJDb25maWdHcm91cD5cclxuICAgICAgICA8L1N0eWxlZExheWVyVmlzdWFsQ29uZmlndXJhdG9yPlxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIF9yZW5kZXJHcmlkTGF5ZXJDb25maWcocHJvcHMpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuX3JlbmRlckFnZ3JlZ2F0aW9uTGF5ZXJDb25maWcocHJvcHMpO1xyXG4gICAgfVxyXG5cclxuICAgIF9yZW5kZXJIZXhhZ29uTGF5ZXJDb25maWcocHJvcHMpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuX3JlbmRlckFnZ3JlZ2F0aW9uTGF5ZXJDb25maWcocHJvcHMpO1xyXG4gICAgfVxyXG5cclxuICAgIF9yZW5kZXJBZ2dyZWdhdGlvbkxheWVyQ29uZmlnKHtcclxuICAgICAgbGF5ZXIsXHJcbiAgICAgIHZpc0NvbmZpZ3VyYXRvclByb3BzLFxyXG4gICAgICBsYXllckNvbmZpZ3VyYXRvclByb3BzLFxyXG4gICAgICBsYXllckNoYW5uZWxDb25maWdQcm9wc1xyXG4gICAgfSkge1xyXG4gICAgICBjb25zdCB7Y29uZmlnfSA9IGxheWVyO1xyXG4gICAgICBjb25zdCB7XHJcbiAgICAgICAgdmlzQ29uZmlnOiB7ZW5hYmxlM2R9XHJcbiAgICAgIH0gPSBjb25maWc7XHJcbiAgICAgIGNvbnN0IGVsZXZhdGlvbkJ5RGVzY3JpcHRpb24gPSAnbGF5ZXIuZWxldmF0aW9uQnlEZXNjcmlwdGlvbic7XHJcbiAgICAgIGNvbnN0IGNvbG9yQnlEZXNjcmlwdGlvbiA9ICdsYXllci5jb2xvckJ5RGVzY3JpcHRpb24nO1xyXG5cclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8U3R5bGVkTGF5ZXJWaXN1YWxDb25maWd1cmF0b3I+XHJcbiAgICAgICAgICB7LyogQ29sb3IgKi99XHJcbiAgICAgICAgICA8TGF5ZXJDb25maWdHcm91cCBsYWJlbD17J2xheWVyLmNvbG9yJ30gY29sbGFwc2libGU+XHJcbiAgICAgICAgICAgIDxMYXllckNvbG9yUmFuZ2VTZWxlY3RvciB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9IC8+XHJcbiAgICAgICAgICAgIDxDb25maWdHcm91cENvbGxhcHNpYmxlQ29udGVudD5cclxuICAgICAgICAgICAgICA8QWdnclNjYWxlU2VsZWN0b3Igey4uLmxheWVyQ29uZmlndXJhdG9yUHJvcHN9IGNoYW5uZWw9e2xheWVyLnZpc3VhbENoYW5uZWxzLmNvbG9yfSAvPlxyXG4gICAgICAgICAgICAgIDxDaGFubmVsQnlWYWx1ZVNlbGVjdG9yXHJcbiAgICAgICAgICAgICAgICBjaGFubmVsPXtsYXllci52aXN1YWxDaGFubmVscy5jb2xvcn1cclxuICAgICAgICAgICAgICAgIHsuLi5sYXllckNoYW5uZWxDb25maWdQcm9wc31cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIHtsYXllci52aXNDb25maWdTZXR0aW5ncy5jb2xvckFnZ3JlZ2F0aW9uLmNvbmRpdGlvbihsYXllci5jb25maWcpID8gKFxyXG4gICAgICAgICAgICAgICAgPEFnZ3JlZ2F0aW9uVHlwZVNlbGVjdG9yXHJcbiAgICAgICAgICAgICAgICAgIHsuLi5sYXllci52aXNDb25maWdTZXR0aW5ncy5jb2xvckFnZ3JlZ2F0aW9ufVxyXG4gICAgICAgICAgICAgICAgICB7Li4ubGF5ZXJDaGFubmVsQ29uZmlnUHJvcHN9XHJcbiAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtjb2xvckJ5RGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgIGNoYW5uZWw9e2xheWVyLnZpc3VhbENoYW5uZWxzLmNvbG9yfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAgICB7bGF5ZXIudmlzQ29uZmlnU2V0dGluZ3MucGVyY2VudGlsZSAmJlxyXG4gICAgICAgICAgICAgIGxheWVyLnZpc0NvbmZpZ1NldHRpbmdzLnBlcmNlbnRpbGUuY29uZGl0aW9uKGxheWVyLmNvbmZpZykgPyAoXHJcbiAgICAgICAgICAgICAgICA8VmlzQ29uZmlnU2xpZGVyXHJcbiAgICAgICAgICAgICAgICAgIHsuLi5sYXllci52aXNDb25maWdTZXR0aW5ncy5wZXJjZW50aWxlfVxyXG4gICAgICAgICAgICAgICAgICB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICAgIDxWaXNDb25maWdTbGlkZXIgey4uLmxheWVyLnZpc0NvbmZpZ1NldHRpbmdzLm9wYWNpdHl9IHsuLi52aXNDb25maWd1cmF0b3JQcm9wc30gLz5cclxuICAgICAgICAgICAgPC9Db25maWdHcm91cENvbGxhcHNpYmxlQ29udGVudD5cclxuICAgICAgICAgIDwvTGF5ZXJDb25maWdHcm91cD5cclxuXHJcbiAgICAgICAgICB7LyogQ2VsbCBzaXplICovfVxyXG4gICAgICAgICAgPExheWVyQ29uZmlnR3JvdXAgbGFiZWw9eydsYXllci5yYWRpdXMnfSBjb2xsYXBzaWJsZT5cclxuICAgICAgICAgICAgPFZpc0NvbmZpZ1NsaWRlciB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3Mud29ybGRVbml0U2l6ZX0gey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfSAvPlxyXG4gICAgICAgICAgICA8Q29uZmlnR3JvdXBDb2xsYXBzaWJsZUNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgPFZpc0NvbmZpZ1NsaWRlciB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3MuY292ZXJhZ2V9IHsuLi52aXNDb25maWd1cmF0b3JQcm9wc30gLz5cclxuICAgICAgICAgICAgPC9Db25maWdHcm91cENvbGxhcHNpYmxlQ29udGVudD5cclxuICAgICAgICAgIDwvTGF5ZXJDb25maWdHcm91cD5cclxuXHJcbiAgICAgICAgICB7LyogRWxldmF0aW9uICovfVxyXG4gICAgICAgICAge2xheWVyLnZpc0NvbmZpZ1NldHRpbmdzLmVuYWJsZTNkID8gKFxyXG4gICAgICAgICAgICA8TGF5ZXJDb25maWdHcm91cFxyXG4gICAgICAgICAgICAgIHsuLi5sYXllci52aXNDb25maWdTZXR0aW5ncy5lbmFibGUzZH1cclxuICAgICAgICAgICAgICB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9XHJcbiAgICAgICAgICAgICAgY29sbGFwc2libGVcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxWaXNDb25maWdTbGlkZXJcclxuICAgICAgICAgICAgICAgIHsuLi5sYXllci52aXNDb25maWdTZXR0aW5ncy5lbGV2YXRpb25TY2FsZX1cclxuICAgICAgICAgICAgICAgIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc31cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxDb25maWdHcm91cENvbGxhcHNpYmxlQ29udGVudD5cclxuICAgICAgICAgICAgICAgIDxBZ2dyU2NhbGVTZWxlY3RvclxyXG4gICAgICAgICAgICAgICAgICB7Li4ubGF5ZXJDb25maWd1cmF0b3JQcm9wc31cclxuICAgICAgICAgICAgICAgICAgY2hhbm5lbD17bGF5ZXIudmlzdWFsQ2hhbm5lbHMuc2l6ZX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8VmlzQ29uZmlnU2xpZGVyIHsuLi5sYXllci52aXNDb25maWdTZXR0aW5ncy5zaXplUmFuZ2V9IHsuLi52aXNDb25maWd1cmF0b3JQcm9wc30gLz5cclxuICAgICAgICAgICAgICAgIDxDaGFubmVsQnlWYWx1ZVNlbGVjdG9yXHJcbiAgICAgICAgICAgICAgICAgIHsuLi5sYXllckNoYW5uZWxDb25maWdQcm9wc31cclxuICAgICAgICAgICAgICAgICAgY2hhbm5lbD17bGF5ZXIudmlzdWFsQ2hhbm5lbHMuc2l6ZX1cclxuICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e2VsZXZhdGlvbkJ5RGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshZW5hYmxlM2R9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAge2xheWVyLnZpc0NvbmZpZ1NldHRpbmdzLnNpemVBZ2dyZWdhdGlvbi5jb25kaXRpb24obGF5ZXIuY29uZmlnKSA/IChcclxuICAgICAgICAgICAgICAgICAgPEFnZ3JlZ2F0aW9uVHlwZVNlbGVjdG9yXHJcbiAgICAgICAgICAgICAgICAgICAgey4uLmxheWVyLnZpc0NvbmZpZ1NldHRpbmdzLnNpemVBZ2dyZWdhdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICB7Li4ubGF5ZXJDaGFubmVsQ29uZmlnUHJvcHN9XHJcbiAgICAgICAgICAgICAgICAgICAgY2hhbm5lbD17bGF5ZXIudmlzdWFsQ2hhbm5lbHMuc2l6ZX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAge2xheWVyLnZpc0NvbmZpZ1NldHRpbmdzLmVsZXZhdGlvblBlcmNlbnRpbGUuY29uZGl0aW9uKGxheWVyLmNvbmZpZykgPyAoXHJcbiAgICAgICAgICAgICAgICAgIDxWaXNDb25maWdTbGlkZXJcclxuICAgICAgICAgICAgICAgICAgICB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3MuZWxldmF0aW9uUGVyY2VudGlsZX1cclxuICAgICAgICAgICAgICAgICAgICB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAgICA8L0NvbmZpZ0dyb3VwQ29sbGFwc2libGVDb250ZW50PlxyXG4gICAgICAgICAgICA8L0xheWVyQ29uZmlnR3JvdXA+XHJcbiAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICA8L1N0eWxlZExheWVyVmlzdWFsQ29uZmlndXJhdG9yPlxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFRPRE86IFNoYW4gbW92ZSB0aGVzZSBpbnRvIGxheWVyIGNsYXNzXHJcbiAgICBfcmVuZGVySGV4YWdvbklkTGF5ZXJDb25maWcoe1xyXG4gICAgICBsYXllcixcclxuICAgICAgdmlzQ29uZmlndXJhdG9yUHJvcHMsXHJcbiAgICAgIGxheWVyQ29uZmlndXJhdG9yUHJvcHMsXHJcbiAgICAgIGxheWVyQ2hhbm5lbENvbmZpZ1Byb3BzXHJcbiAgICB9KSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPFN0eWxlZExheWVyVmlzdWFsQ29uZmlndXJhdG9yPlxyXG4gICAgICAgICAgey8qIENvbG9yICovfVxyXG4gICAgICAgICAgPExheWVyQ29uZmlnR3JvdXAgbGFiZWw9eydsYXllci5jb2xvcid9IGNvbGxhcHNpYmxlPlxyXG4gICAgICAgICAgICB7bGF5ZXIuY29uZmlnLmNvbG9yRmllbGQgPyAoXHJcbiAgICAgICAgICAgICAgPExheWVyQ29sb3JSYW5nZVNlbGVjdG9yIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc30gLz5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICA8TGF5ZXJDb2xvclNlbGVjdG9yIHsuLi5sYXllckNvbmZpZ3VyYXRvclByb3BzfSAvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8Q29uZmlnR3JvdXBDb2xsYXBzaWJsZUNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgPENoYW5uZWxCeVZhbHVlU2VsZWN0b3JcclxuICAgICAgICAgICAgICAgIGNoYW5uZWw9e2xheWVyLnZpc3VhbENoYW5uZWxzLmNvbG9yfVxyXG4gICAgICAgICAgICAgICAgey4uLmxheWVyQ2hhbm5lbENvbmZpZ1Byb3BzfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPFZpc0NvbmZpZ1NsaWRlciB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3Mub3BhY2l0eX0gey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfSAvPlxyXG4gICAgICAgICAgICA8L0NvbmZpZ0dyb3VwQ29sbGFwc2libGVDb250ZW50PlxyXG4gICAgICAgICAgPC9MYXllckNvbmZpZ0dyb3VwPlxyXG5cclxuICAgICAgICAgIHsvKiBDb3ZlcmFnZSAqL31cclxuICAgICAgICAgIDxMYXllckNvbmZpZ0dyb3VwIGxhYmVsPXsnbGF5ZXIuY292ZXJhZ2UnfSBjb2xsYXBzaWJsZT5cclxuICAgICAgICAgICAgeyFsYXllci5jb25maWcuY292ZXJhZ2VGaWVsZCA/IChcclxuICAgICAgICAgICAgICA8VmlzQ29uZmlnU2xpZGVyXHJcbiAgICAgICAgICAgICAgICB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3MuY292ZXJhZ2V9XHJcbiAgICAgICAgICAgICAgICB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9XHJcbiAgICAgICAgICAgICAgICBsYWJlbD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICA8VmlzQ29uZmlnU2xpZGVyXHJcbiAgICAgICAgICAgICAgICB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3MuY292ZXJhZ2VSYW5nZX1cclxuICAgICAgICAgICAgICAgIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc31cclxuICAgICAgICAgICAgICAgIGxhYmVsPXtmYWxzZX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8Q29uZmlnR3JvdXBDb2xsYXBzaWJsZUNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgPENoYW5uZWxCeVZhbHVlU2VsZWN0b3JcclxuICAgICAgICAgICAgICAgIGNoYW5uZWw9e2xheWVyLnZpc3VhbENoYW5uZWxzLmNvdmVyYWdlfVxyXG4gICAgICAgICAgICAgICAgey4uLmxheWVyQ2hhbm5lbENvbmZpZ1Byb3BzfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvQ29uZmlnR3JvdXBDb2xsYXBzaWJsZUNvbnRlbnQ+XHJcbiAgICAgICAgICA8L0xheWVyQ29uZmlnR3JvdXA+XHJcblxyXG4gICAgICAgICAgey8qIGhlaWdodCAqL31cclxuICAgICAgICAgIDxMYXllckNvbmZpZ0dyb3VwXHJcbiAgICAgICAgICAgIHsuLi5sYXllci52aXNDb25maWdTZXR0aW5ncy5lbmFibGUzZH1cclxuICAgICAgICAgICAgey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfVxyXG4gICAgICAgICAgICBjb2xsYXBzaWJsZVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8Q2hhbm5lbEJ5VmFsdWVTZWxlY3RvclxyXG4gICAgICAgICAgICAgIGNoYW5uZWw9e2xheWVyLnZpc3VhbENoYW5uZWxzLnNpemV9XHJcbiAgICAgICAgICAgICAgey4uLmxheWVyQ2hhbm5lbENvbmZpZ1Byb3BzfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8Q29uZmlnR3JvdXBDb2xsYXBzaWJsZUNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgPFZpc0NvbmZpZ1NsaWRlclxyXG4gICAgICAgICAgICAgICAgey4uLmxheWVyLnZpc0NvbmZpZ1NldHRpbmdzLmVsZXZhdGlvblNjYWxlfVxyXG4gICAgICAgICAgICAgICAgey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPFZpc0NvbmZpZ1NsaWRlclxyXG4gICAgICAgICAgICAgICAgey4uLmxheWVyLnZpc0NvbmZpZ1NldHRpbmdzLnNpemVSYW5nZX1cclxuICAgICAgICAgICAgICAgIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc31cclxuICAgICAgICAgICAgICAgIGxhYmVsPVwibGF5ZXJWaXNDb25maWdzLmhlaWdodFJhbmdlXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0NvbmZpZ0dyb3VwQ29sbGFwc2libGVDb250ZW50PlxyXG4gICAgICAgICAgPC9MYXllckNvbmZpZ0dyb3VwPlxyXG4gICAgICAgIDwvU3R5bGVkTGF5ZXJWaXN1YWxDb25maWd1cmF0b3I+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgX3JlbmRlckFyY0xheWVyQ29uZmlnKGFyZ3MpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuX3JlbmRlckxpbmVMYXllckNvbmZpZyhhcmdzKTtcclxuICAgIH1cclxuXHJcbiAgICBfcmVuZGVyTGluZUxheWVyQ29uZmlnKHtcclxuICAgICAgbGF5ZXIsXHJcbiAgICAgIHZpc0NvbmZpZ3VyYXRvclByb3BzLFxyXG4gICAgICBsYXllckNvbmZpZ3VyYXRvclByb3BzLFxyXG4gICAgICBsYXllckNoYW5uZWxDb25maWdQcm9wc1xyXG4gICAgfSkge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxTdHlsZWRMYXllclZpc3VhbENvbmZpZ3VyYXRvcj5cclxuICAgICAgICAgIHsvKiBDb2xvciAqL31cclxuICAgICAgICAgIDxMYXllckNvbmZpZ0dyb3VwIGxhYmVsPXsnbGF5ZXIuY29sb3InfSBjb2xsYXBzaWJsZT5cclxuICAgICAgICAgICAge2xheWVyLmNvbmZpZy5jb2xvckZpZWxkID8gKFxyXG4gICAgICAgICAgICAgIDxMYXllckNvbG9yUmFuZ2VTZWxlY3RvciB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9IC8+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgPEFyY0xheWVyQ29sb3JTZWxlY3RvclxyXG4gICAgICAgICAgICAgICAgbGF5ZXI9e2xheWVyfVxyXG4gICAgICAgICAgICAgICAgc2V0Q29sb3JVST17bGF5ZXJDb25maWd1cmF0b3JQcm9wcy5zZXRDb2xvclVJfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2VDb25maWc9e2xheWVyQ29uZmlndXJhdG9yUHJvcHMub25DaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZVZpc0NvbmZpZz17dmlzQ29uZmlndXJhdG9yUHJvcHMub25DaGFuZ2V9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPENvbmZpZ0dyb3VwQ29sbGFwc2libGVDb250ZW50PlxyXG4gICAgICAgICAgICAgIDxDaGFubmVsQnlWYWx1ZVNlbGVjdG9yXHJcbiAgICAgICAgICAgICAgICBjaGFubmVsPXtsYXllci52aXN1YWxDaGFubmVscy5jb2xvcn1cclxuICAgICAgICAgICAgICAgIHsuLi5sYXllckNoYW5uZWxDb25maWdQcm9wc31cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxWaXNDb25maWdTbGlkZXIgey4uLmxheWVyLnZpc0NvbmZpZ1NldHRpbmdzLm9wYWNpdHl9IHsuLi52aXNDb25maWd1cmF0b3JQcm9wc30gLz5cclxuICAgICAgICAgICAgPC9Db25maWdHcm91cENvbGxhcHNpYmxlQ29udGVudD5cclxuICAgICAgICAgIDwvTGF5ZXJDb25maWdHcm91cD5cclxuXHJcbiAgICAgICAgICB7LyogdGhpY2tuZXNzICovfVxyXG4gICAgICAgICAgPExheWVyQ29uZmlnR3JvdXAgbGFiZWw9eydsYXllci5zdHJva2UnfSBjb2xsYXBzaWJsZT5cclxuICAgICAgICAgICAge2xheWVyLmNvbmZpZy5zaXplRmllbGQgPyAoXHJcbiAgICAgICAgICAgICAgPFZpc0NvbmZpZ1NsaWRlclxyXG4gICAgICAgICAgICAgICAgey4uLmxheWVyLnZpc0NvbmZpZ1NldHRpbmdzLnNpemVSYW5nZX1cclxuICAgICAgICAgICAgICAgIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc31cclxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXshbGF5ZXIuY29uZmlnLnNpemVGaWVsZH1cclxuICAgICAgICAgICAgICAgIGxhYmVsPXtmYWxzZX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgIDxWaXNDb25maWdTbGlkZXJcclxuICAgICAgICAgICAgICAgIHsuLi5sYXllci52aXNDb25maWdTZXR0aW5ncy50aGlja25lc3N9XHJcbiAgICAgICAgICAgICAgICB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9XHJcbiAgICAgICAgICAgICAgICBsYWJlbD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPENvbmZpZ0dyb3VwQ29sbGFwc2libGVDb250ZW50PlxyXG4gICAgICAgICAgICAgIDxDaGFubmVsQnlWYWx1ZVNlbGVjdG9yXHJcbiAgICAgICAgICAgICAgICBjaGFubmVsPXtsYXllci52aXN1YWxDaGFubmVscy5zaXplfVxyXG4gICAgICAgICAgICAgICAgey4uLmxheWVyQ2hhbm5lbENvbmZpZ1Byb3BzfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvQ29uZmlnR3JvdXBDb2xsYXBzaWJsZUNvbnRlbnQ+XHJcbiAgICAgICAgICA8L0xheWVyQ29uZmlnR3JvdXA+XHJcbiAgICAgICAgPC9TdHlsZWRMYXllclZpc3VhbENvbmZpZ3VyYXRvcj5cclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBfcmVuZGVyVHJpcExheWVyQ29uZmlnKHtcclxuICAgICAgbGF5ZXIsXHJcbiAgICAgIHZpc0NvbmZpZ3VyYXRvclByb3BzLFxyXG4gICAgICBsYXllckNvbmZpZ3VyYXRvclByb3BzLFxyXG4gICAgICBsYXllckNoYW5uZWxDb25maWdQcm9wc1xyXG4gICAgfSkge1xyXG4gICAgICBjb25zdCB7XHJcbiAgICAgICAgbWV0YToge2ZlYXR1cmVUeXBlcyA9IHt9fVxyXG4gICAgICB9ID0gbGF5ZXI7XHJcblxyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxTdHlsZWRMYXllclZpc3VhbENvbmZpZ3VyYXRvcj5cclxuICAgICAgICAgIHsvKiBDb2xvciAqL31cclxuICAgICAgICAgIDxMYXllckNvbmZpZ0dyb3VwIGxhYmVsPXsnbGF5ZXIuY29sb3InfSBjb2xsYXBzaWJsZT5cclxuICAgICAgICAgICAge2xheWVyLmNvbmZpZy5jb2xvckZpZWxkID8gKFxyXG4gICAgICAgICAgICAgIDxMYXllckNvbG9yUmFuZ2VTZWxlY3RvciB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9IC8+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgPExheWVyQ29sb3JTZWxlY3RvciB7Li4ubGF5ZXJDb25maWd1cmF0b3JQcm9wc30gLz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPENvbmZpZ0dyb3VwQ29sbGFwc2libGVDb250ZW50PlxyXG4gICAgICAgICAgICAgIDxDaGFubmVsQnlWYWx1ZVNlbGVjdG9yXHJcbiAgICAgICAgICAgICAgICBjaGFubmVsPXtsYXllci52aXN1YWxDaGFubmVscy5jb2xvcn1cclxuICAgICAgICAgICAgICAgIHsuLi5sYXllckNoYW5uZWxDb25maWdQcm9wc31cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxWaXNDb25maWdTbGlkZXIgey4uLmxheWVyLnZpc0NvbmZpZ1NldHRpbmdzLm9wYWNpdHl9IHsuLi52aXNDb25maWd1cmF0b3JQcm9wc30gLz5cclxuICAgICAgICAgICAgPC9Db25maWdHcm91cENvbGxhcHNpYmxlQ29udGVudD5cclxuICAgICAgICAgIDwvTGF5ZXJDb25maWdHcm91cD5cclxuXHJcbiAgICAgICAgICB7LyogU3Ryb2tlIFdpZHRoICovfVxyXG4gICAgICAgICAgPExheWVyQ29uZmlnR3JvdXAgey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfSBsYWJlbD1cImxheWVyLnN0cm9rZVdpZHRoXCIgY29sbGFwc2libGU+XHJcbiAgICAgICAgICAgIHtsYXllci5jb25maWcuc2l6ZUZpZWxkID8gKFxyXG4gICAgICAgICAgICAgIDxWaXNDb25maWdTbGlkZXJcclxuICAgICAgICAgICAgICAgIHsuLi5sYXllci52aXNDb25maWdTZXR0aW5ncy5zaXplUmFuZ2V9XHJcbiAgICAgICAgICAgICAgICB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9XHJcbiAgICAgICAgICAgICAgICBsYWJlbD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICA8VmlzQ29uZmlnU2xpZGVyXHJcbiAgICAgICAgICAgICAgICB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3MudGhpY2tuZXNzfVxyXG4gICAgICAgICAgICAgICAgey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfVxyXG4gICAgICAgICAgICAgICAgbGFiZWw9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICA8Q29uZmlnR3JvdXBDb2xsYXBzaWJsZUNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgPENoYW5uZWxCeVZhbHVlU2VsZWN0b3JcclxuICAgICAgICAgICAgICAgIGNoYW5uZWw9e2xheWVyLnZpc3VhbENoYW5uZWxzLnNpemV9XHJcbiAgICAgICAgICAgICAgICB7Li4ubGF5ZXJDaGFubmVsQ29uZmlnUHJvcHN9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9Db25maWdHcm91cENvbGxhcHNpYmxlQ29udGVudD5cclxuICAgICAgICAgIDwvTGF5ZXJDb25maWdHcm91cD5cclxuXHJcbiAgICAgICAgICB7LyogVHJhaWwgTGVuZ3RoKi99XHJcbiAgICAgICAgICA8TGF5ZXJDb25maWdHcm91cFxyXG4gICAgICAgICAgICB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9XHJcbiAgICAgICAgICAgIHsuLi4oZmVhdHVyZVR5cGVzLnBvbHlnb24gPyBsYXllci52aXNDb25maWdTZXR0aW5ncy5zdHJva2VkIDoge30pfVxyXG4gICAgICAgICAgICBsYWJlbD1cImxheWVyLnRyYWlsTGVuZ3RoXCJcclxuICAgICAgICAgICAgZGVzY3JpcHRpb249XCJsYXllci50cmFpbExlbmd0aERlc2NyaXB0aW9uXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPFZpc0NvbmZpZ1NsaWRlclxyXG4gICAgICAgICAgICAgIHsuLi5sYXllci52aXNDb25maWdTZXR0aW5ncy50cmFpbExlbmd0aH1cclxuICAgICAgICAgICAgICB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9XHJcbiAgICAgICAgICAgICAgbGFiZWw9e2ZhbHNlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9MYXllckNvbmZpZ0dyb3VwPlxyXG4gICAgICAgIDwvU3R5bGVkTGF5ZXJWaXN1YWxDb25maWd1cmF0b3I+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgX3JlbmRlckdlb2pzb25MYXllckNvbmZpZyh7XHJcbiAgICAgIGxheWVyLFxyXG4gICAgICB2aXNDb25maWd1cmF0b3JQcm9wcyxcclxuICAgICAgbGF5ZXJDb25maWd1cmF0b3JQcm9wcyxcclxuICAgICAgbGF5ZXJDaGFubmVsQ29uZmlnUHJvcHNcclxuICAgIH0pIHtcclxuICAgICAgY29uc3Qge1xyXG4gICAgICAgIG1ldGE6IHtmZWF0dXJlVHlwZXMgPSB7fX0sXHJcbiAgICAgICAgY29uZmlnOiB7dmlzQ29uZmlnfVxyXG4gICAgICB9ID0gbGF5ZXI7XHJcblxyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxTdHlsZWRMYXllclZpc3VhbENvbmZpZ3VyYXRvcj5cclxuICAgICAgICAgIHsvKiBGaWxsIENvbG9yICovfVxyXG4gICAgICAgICAge2ZlYXR1cmVUeXBlcy5wb2x5Z29uIHx8IGZlYXR1cmVUeXBlcy5wb2ludCA/IChcclxuICAgICAgICAgICAgPExheWVyQ29uZmlnR3JvdXBcclxuICAgICAgICAgICAgICB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3MuZmlsbGVkfVxyXG4gICAgICAgICAgICAgIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc31cclxuICAgICAgICAgICAgICBsYWJlbD1cImxheWVyLmZpbGxDb2xvclwiXHJcbiAgICAgICAgICAgICAgY29sbGFwc2libGVcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtsYXllci5jb25maWcuY29sb3JGaWVsZCA/IChcclxuICAgICAgICAgICAgICAgIDxMYXllckNvbG9yUmFuZ2VTZWxlY3RvciB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9IC8+XHJcbiAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgIDxMYXllckNvbG9yU2VsZWN0b3Igey4uLmxheWVyQ29uZmlndXJhdG9yUHJvcHN9IC8+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8Q29uZmlnR3JvdXBDb2xsYXBzaWJsZUNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICA8Q2hhbm5lbEJ5VmFsdWVTZWxlY3RvclxyXG4gICAgICAgICAgICAgICAgICBjaGFubmVsPXtsYXllci52aXN1YWxDaGFubmVscy5jb2xvcn1cclxuICAgICAgICAgICAgICAgICAgey4uLmxheWVyQ2hhbm5lbENvbmZpZ1Byb3BzfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxWaXNDb25maWdTbGlkZXIgey4uLmxheWVyLnZpc0NvbmZpZ1NldHRpbmdzLm9wYWNpdHl9IHsuLi52aXNDb25maWd1cmF0b3JQcm9wc30gLz5cclxuICAgICAgICAgICAgICA8L0NvbmZpZ0dyb3VwQ29sbGFwc2libGVDb250ZW50PlxyXG4gICAgICAgICAgICA8L0xheWVyQ29uZmlnR3JvdXA+XHJcbiAgICAgICAgICApIDogbnVsbH1cclxuXHJcbiAgICAgICAgICB7Lyogc3Ryb2tlIGNvbG9yICovfVxyXG4gICAgICAgICAgPExheWVyQ29uZmlnR3JvdXBcclxuICAgICAgICAgICAgey4uLmxheWVyLnZpc0NvbmZpZ1NldHRpbmdzLnN0cm9rZWR9XHJcbiAgICAgICAgICAgIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc31cclxuICAgICAgICAgICAgbGFiZWw9XCJsYXllci5zdHJva2VDb2xvclwiXHJcbiAgICAgICAgICAgIGNvbGxhcHNpYmxlXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtsYXllci5jb25maWcuc3Ryb2tlQ29sb3JGaWVsZCA/IChcclxuICAgICAgICAgICAgICA8TGF5ZXJDb2xvclJhbmdlU2VsZWN0b3Igey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfSBwcm9wZXJ0eT1cInN0cm9rZUNvbG9yUmFuZ2VcIiAvPlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgIDxMYXllckNvbG9yU2VsZWN0b3JcclxuICAgICAgICAgICAgICAgIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc31cclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkQ29sb3I9e2xheWVyLmNvbmZpZy52aXNDb25maWcuc3Ryb2tlQ29sb3J9XHJcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eT1cInN0cm9rZUNvbG9yXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8Q29uZmlnR3JvdXBDb2xsYXBzaWJsZUNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgPENoYW5uZWxCeVZhbHVlU2VsZWN0b3JcclxuICAgICAgICAgICAgICAgIGNoYW5uZWw9e2xheWVyLnZpc3VhbENoYW5uZWxzLnN0cm9rZUNvbG9yfVxyXG4gICAgICAgICAgICAgICAgey4uLmxheWVyQ2hhbm5lbENvbmZpZ1Byb3BzfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPFZpc0NvbmZpZ1NsaWRlclxyXG4gICAgICAgICAgICAgICAgey4uLmxheWVyLnZpc0NvbmZpZ1NldHRpbmdzLnN0cm9rZU9wYWNpdHl9XHJcbiAgICAgICAgICAgICAgICB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9Db25maWdHcm91cENvbGxhcHNpYmxlQ29udGVudD5cclxuICAgICAgICAgIDwvTGF5ZXJDb25maWdHcm91cD5cclxuXHJcbiAgICAgICAgICB7LyogU3Ryb2tlIFdpZHRoICovfVxyXG4gICAgICAgICAgPExheWVyQ29uZmlnR3JvdXBcclxuICAgICAgICAgICAgey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfVxyXG4gICAgICAgICAgICB7Li4uKGZlYXR1cmVUeXBlcy5wb2x5Z29uID8gbGF5ZXIudmlzQ29uZmlnU2V0dGluZ3Muc3Ryb2tlZCA6IHt9KX1cclxuICAgICAgICAgICAgbGFiZWw9XCJsYXllci5zdHJva2VXaWR0aFwiXHJcbiAgICAgICAgICAgIGNvbGxhcHNpYmxlXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtsYXllci5jb25maWcuc2l6ZUZpZWxkID8gKFxyXG4gICAgICAgICAgICAgIDxWaXNDb25maWdTbGlkZXJcclxuICAgICAgICAgICAgICAgIHsuLi5sYXllci52aXNDb25maWdTZXR0aW5ncy5zaXplUmFuZ2V9XHJcbiAgICAgICAgICAgICAgICB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9XHJcbiAgICAgICAgICAgICAgICBsYWJlbD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICA8VmlzQ29uZmlnU2xpZGVyXHJcbiAgICAgICAgICAgICAgICB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3MudGhpY2tuZXNzfVxyXG4gICAgICAgICAgICAgICAgey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfVxyXG4gICAgICAgICAgICAgICAgbGFiZWw9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDxDb25maWdHcm91cENvbGxhcHNpYmxlQ29udGVudD5cclxuICAgICAgICAgICAgICA8Q2hhbm5lbEJ5VmFsdWVTZWxlY3RvclxyXG4gICAgICAgICAgICAgICAgY2hhbm5lbD17bGF5ZXIudmlzdWFsQ2hhbm5lbHMuc2l6ZX1cclxuICAgICAgICAgICAgICAgIHsuLi5sYXllckNoYW5uZWxDb25maWdQcm9wc31cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0NvbmZpZ0dyb3VwQ29sbGFwc2libGVDb250ZW50PlxyXG4gICAgICAgICAgPC9MYXllckNvbmZpZ0dyb3VwPlxyXG5cclxuICAgICAgICAgIHsvKiBFbGV2YXRpb24gKi99XHJcbiAgICAgICAgICB7ZmVhdHVyZVR5cGVzLnBvbHlnb24gPyAoXHJcbiAgICAgICAgICAgIDxMYXllckNvbmZpZ0dyb3VwXHJcbiAgICAgICAgICAgICAgey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfVxyXG4gICAgICAgICAgICAgIHsuLi5sYXllci52aXNDb25maWdTZXR0aW5ncy5lbmFibGUzZH1cclxuICAgICAgICAgICAgICBkaXNhYmxlZD17IXZpc0NvbmZpZy5maWxsZWR9XHJcbiAgICAgICAgICAgICAgY29sbGFwc2libGVcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxWaXNDb25maWdTbGlkZXJcclxuICAgICAgICAgICAgICAgIHsuLi5sYXllci52aXNDb25maWdTZXR0aW5ncy5lbGV2YXRpb25TY2FsZX1cclxuICAgICAgICAgICAgICAgIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc31cclxuICAgICAgICAgICAgICAgIGxhYmVsPXtmYWxzZX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxDb25maWdHcm91cENvbGxhcHNpYmxlQ29udGVudD5cclxuICAgICAgICAgICAgICAgIDxDaGFubmVsQnlWYWx1ZVNlbGVjdG9yXHJcbiAgICAgICAgICAgICAgICAgIGNoYW5uZWw9e2xheWVyLnZpc3VhbENoYW5uZWxzLmhlaWdodH1cclxuICAgICAgICAgICAgICAgICAgey4uLmxheWVyQ2hhbm5lbENvbmZpZ1Byb3BzfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxWaXNDb25maWdTd2l0Y2ggey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfSB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3Mud2lyZWZyYW1lfSAvPlxyXG4gICAgICAgICAgICAgIDwvQ29uZmlnR3JvdXBDb2xsYXBzaWJsZUNvbnRlbnQ+XHJcbiAgICAgICAgICAgIDwvTGF5ZXJDb25maWdHcm91cD5cclxuICAgICAgICAgICkgOiBudWxsfVxyXG5cclxuICAgICAgICAgIHsvKiBSYWRpdXMgKi99XHJcbiAgICAgICAgICB7ZmVhdHVyZVR5cGVzLnBvaW50ID8gKFxyXG4gICAgICAgICAgICA8TGF5ZXJDb25maWdHcm91cCBsYWJlbD17J2xheWVyLnJhZGl1cyd9IGNvbGxhcHNpYmxlPlxyXG4gICAgICAgICAgICAgIHshbGF5ZXIuY29uZmlnLnJhZGl1c0ZpZWxkID8gKFxyXG4gICAgICAgICAgICAgICAgPFZpc0NvbmZpZ1NsaWRlclxyXG4gICAgICAgICAgICAgICAgICB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3MucmFkaXVzfVxyXG4gICAgICAgICAgICAgICAgICB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9XHJcbiAgICAgICAgICAgICAgICAgIGxhYmVsPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e0Jvb2xlYW4obGF5ZXIuY29uZmlnLnJhZGl1c0ZpZWxkKX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgIDxWaXNDb25maWdTbGlkZXJcclxuICAgICAgICAgICAgICAgICAgey4uLmxheWVyLnZpc0NvbmZpZ1NldHRpbmdzLnJhZGl1c1JhbmdlfVxyXG4gICAgICAgICAgICAgICAgICB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9XHJcbiAgICAgICAgICAgICAgICAgIGxhYmVsPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFsYXllci5jb25maWcucmFkaXVzRmllbGR9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPENvbmZpZ0dyb3VwQ29sbGFwc2libGVDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgPENoYW5uZWxCeVZhbHVlU2VsZWN0b3JcclxuICAgICAgICAgICAgICAgICAgY2hhbm5lbD17bGF5ZXIudmlzdWFsQ2hhbm5lbHMucmFkaXVzfVxyXG4gICAgICAgICAgICAgICAgICB7Li4ubGF5ZXJDaGFubmVsQ29uZmlnUHJvcHN9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvQ29uZmlnR3JvdXBDb2xsYXBzaWJsZUNvbnRlbnQ+XHJcbiAgICAgICAgICAgIDwvTGF5ZXJDb25maWdHcm91cD5cclxuICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgIDwvU3R5bGVkTGF5ZXJWaXN1YWxDb25maWd1cmF0b3I+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgX3JlbmRlcjNETGF5ZXJDb25maWcoe2xheWVyLCB2aXNDb25maWd1cmF0b3JQcm9wc30pIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8RnJhZ21lbnQ+XHJcbiAgICAgICAgICA8TGF5ZXJDb25maWdHcm91cCBsYWJlbD17J2xheWVyLjNETW9kZWwnfSBjb2xsYXBzaWJsZT5cclxuICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgICAgICAgIGFjY2VwdD1cIi5nbGIsLmdsdGZcIlxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlLnRhcmdldC5maWxlcyAmJiBlLnRhcmdldC5maWxlc1swXSkge1xyXG4gICAgICAgICAgICAgICAgICBjb25zdCB1cmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGUudGFyZ2V0LmZpbGVzWzBdKTtcclxuICAgICAgICAgICAgICAgICAgdmlzQ29uZmlndXJhdG9yUHJvcHMub25DaGFuZ2Uoe3NjZW5lZ3JhcGg6IHVybH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0xheWVyQ29uZmlnR3JvdXA+XHJcbiAgICAgICAgICA8TGF5ZXJDb25maWdHcm91cCBsYWJlbD17J2xheWVyLjNETW9kZWxPcHRpb25zJ30gY29sbGFwc2libGU+XHJcbiAgICAgICAgICAgIDxWaXNDb25maWdTbGlkZXJcclxuICAgICAgICAgICAgICB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3Muc2l6ZVNjYWxlfVxyXG4gICAgICAgICAgICAgIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc31cclxuICAgICAgICAgICAgICBkaXNhYmxlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxWaXNDb25maWdTbGlkZXJcclxuICAgICAgICAgICAgICB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3MuYW5nbGVYfVxyXG4gICAgICAgICAgICAgIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc31cclxuICAgICAgICAgICAgICBkaXNhYmxlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxWaXNDb25maWdTbGlkZXJcclxuICAgICAgICAgICAgICB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3MuYW5nbGVZfVxyXG4gICAgICAgICAgICAgIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc31cclxuICAgICAgICAgICAgICBkaXNhYmxlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxWaXNDb25maWdTbGlkZXJcclxuICAgICAgICAgICAgICB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3MuYW5nbGVafVxyXG4gICAgICAgICAgICAgIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc31cclxuICAgICAgICAgICAgICBkaXNhYmxlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0xheWVyQ29uZmlnR3JvdXA+XHJcbiAgICAgICAgPC9GcmFnbWVudD5cclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBfcmVuZGVyUzJMYXllckNvbmZpZyh7XHJcbiAgICAgIGxheWVyLFxyXG4gICAgICB2aXNDb25maWd1cmF0b3JQcm9wcyxcclxuICAgICAgbGF5ZXJDb25maWd1cmF0b3JQcm9wcyxcclxuICAgICAgbGF5ZXJDaGFubmVsQ29uZmlnUHJvcHNcclxuICAgIH0pIHtcclxuICAgICAgY29uc3Qge1xyXG4gICAgICAgIGNvbmZpZzoge3Zpc0NvbmZpZ31cclxuICAgICAgfSA9IGxheWVyO1xyXG5cclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8U3R5bGVkTGF5ZXJWaXN1YWxDb25maWd1cmF0b3I+XHJcbiAgICAgICAgICB7LyogQ29sb3IgKi99XHJcbiAgICAgICAgICA8TGF5ZXJDb25maWdHcm91cFxyXG4gICAgICAgICAgICB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3MuZmlsbGVkfVxyXG4gICAgICAgICAgICB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9XHJcbiAgICAgICAgICAgIGxhYmVsPVwibGF5ZXIuZmlsbENvbG9yXCJcclxuICAgICAgICAgICAgY29sbGFwc2libGVcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge2xheWVyLmNvbmZpZy5jb2xvckZpZWxkID8gKFxyXG4gICAgICAgICAgICAgIDxMYXllckNvbG9yUmFuZ2VTZWxlY3RvciB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9IC8+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgPExheWVyQ29sb3JTZWxlY3RvciB7Li4ubGF5ZXJDb25maWd1cmF0b3JQcm9wc30gLz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPENvbmZpZ0dyb3VwQ29sbGFwc2libGVDb250ZW50PlxyXG4gICAgICAgICAgICAgIDxDaGFubmVsQnlWYWx1ZVNlbGVjdG9yXHJcbiAgICAgICAgICAgICAgICBjaGFubmVsPXtsYXllci52aXN1YWxDaGFubmVscy5jb2xvcn1cclxuICAgICAgICAgICAgICAgIHsuLi5sYXllckNoYW5uZWxDb25maWdQcm9wc31cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxWaXNDb25maWdTbGlkZXIgey4uLmxheWVyLnZpc0NvbmZpZ1NldHRpbmdzLm9wYWNpdHl9IHsuLi52aXNDb25maWd1cmF0b3JQcm9wc30gLz5cclxuICAgICAgICAgICAgPC9Db25maWdHcm91cENvbGxhcHNpYmxlQ29udGVudD5cclxuICAgICAgICAgIDwvTGF5ZXJDb25maWdHcm91cD5cclxuXHJcbiAgICAgICAgICB7LyogU3Ryb2tlICovfVxyXG4gICAgICAgICAgPExheWVyQ29uZmlnR3JvdXBcclxuICAgICAgICAgICAgey4uLmxheWVyLnZpc0NvbmZpZ1NldHRpbmdzLnN0cm9rZWR9XHJcbiAgICAgICAgICAgIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc31cclxuICAgICAgICAgICAgbGFiZWw9XCJsYXllci5zdHJva2VDb2xvclwiXHJcbiAgICAgICAgICAgIGNvbGxhcHNpYmxlXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtsYXllci5jb25maWcuc3Ryb2tlQ29sb3JGaWVsZCA/IChcclxuICAgICAgICAgICAgICA8TGF5ZXJDb2xvclJhbmdlU2VsZWN0b3Igey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfSBwcm9wZXJ0eT1cInN0cm9rZUNvbG9yUmFuZ2VcIiAvPlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgIDxMYXllckNvbG9yU2VsZWN0b3JcclxuICAgICAgICAgICAgICAgIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc31cclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkQ29sb3I9e2xheWVyLmNvbmZpZy52aXNDb25maWcuc3Ryb2tlQ29sb3J9XHJcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eT1cInN0cm9rZUNvbG9yXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8Q29uZmlnR3JvdXBDb2xsYXBzaWJsZUNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgPENoYW5uZWxCeVZhbHVlU2VsZWN0b3JcclxuICAgICAgICAgICAgICAgIGNoYW5uZWw9e2xheWVyLnZpc3VhbENoYW5uZWxzLnN0cm9rZUNvbG9yfVxyXG4gICAgICAgICAgICAgICAgey4uLmxheWVyQ2hhbm5lbENvbmZpZ1Byb3BzfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvQ29uZmlnR3JvdXBDb2xsYXBzaWJsZUNvbnRlbnQ+XHJcbiAgICAgICAgICA8L0xheWVyQ29uZmlnR3JvdXA+XHJcblxyXG4gICAgICAgICAgey8qIFN0cm9rZSBXaWR0aCAqL31cclxuICAgICAgICAgIDxMYXllckNvbmZpZ0dyb3VwIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc30gbGFiZWw9XCJsYXllci5zdHJva2VXaWR0aFwiIGNvbGxhcHNpYmxlPlxyXG4gICAgICAgICAgICB7bGF5ZXIuY29uZmlnLnNpemVGaWVsZCA/IChcclxuICAgICAgICAgICAgICA8VmlzQ29uZmlnU2xpZGVyXHJcbiAgICAgICAgICAgICAgICB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3Muc2l6ZVJhbmdlfVxyXG4gICAgICAgICAgICAgICAgey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfVxyXG4gICAgICAgICAgICAgICAgbGFiZWw9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgPFZpc0NvbmZpZ1NsaWRlclxyXG4gICAgICAgICAgICAgICAgey4uLmxheWVyLnZpc0NvbmZpZ1NldHRpbmdzLnRoaWNrbmVzc31cclxuICAgICAgICAgICAgICAgIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc31cclxuICAgICAgICAgICAgICAgIGxhYmVsPXtmYWxzZX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8Q29uZmlnR3JvdXBDb2xsYXBzaWJsZUNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgPENoYW5uZWxCeVZhbHVlU2VsZWN0b3JcclxuICAgICAgICAgICAgICAgIGNoYW5uZWw9e2xheWVyLnZpc3VhbENoYW5uZWxzLnNpemV9XHJcbiAgICAgICAgICAgICAgICB7Li4ubGF5ZXJDaGFubmVsQ29uZmlnUHJvcHN9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9Db25maWdHcm91cENvbGxhcHNpYmxlQ29udGVudD5cclxuICAgICAgICAgIDwvTGF5ZXJDb25maWdHcm91cD5cclxuXHJcbiAgICAgICAgICB7LyogRWxldmF0aW9uICovfVxyXG4gICAgICAgICAgPExheWVyQ29uZmlnR3JvdXBcclxuICAgICAgICAgICAgey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfVxyXG4gICAgICAgICAgICB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3MuZW5hYmxlM2R9XHJcbiAgICAgICAgICAgIGRpc2FibGVkPXshdmlzQ29uZmlnLmZpbGxlZH1cclxuICAgICAgICAgICAgY29sbGFwc2libGVcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPENoYW5uZWxCeVZhbHVlU2VsZWN0b3JcclxuICAgICAgICAgICAgICBjaGFubmVsPXtsYXllci52aXN1YWxDaGFubmVscy5oZWlnaHR9XHJcbiAgICAgICAgICAgICAgey4uLmxheWVyQ2hhbm5lbENvbmZpZ1Byb3BzfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8VmlzQ29uZmlnU2xpZGVyXHJcbiAgICAgICAgICAgICAgey4uLmxheWVyLnZpc0NvbmZpZ1NldHRpbmdzLmVsZXZhdGlvblNjYWxlfVxyXG4gICAgICAgICAgICAgIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc31cclxuICAgICAgICAgICAgICBsYWJlbD1cImxheWVyVmlzQ29uZmlncy5lbGV2YXRpb25TY2FsZVwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxDb25maWdHcm91cENvbGxhcHNpYmxlQ29udGVudD5cclxuICAgICAgICAgICAgICA8VmlzQ29uZmlnU2xpZGVyXHJcbiAgICAgICAgICAgICAgICB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3MuaGVpZ2h0UmFuZ2V9XHJcbiAgICAgICAgICAgICAgICB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9XHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cImxheWVyVmlzQ29uZmlncy5oZWlnaHRSYW5nZVwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8VmlzQ29uZmlnU3dpdGNoIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc30gey4uLmxheWVyLnZpc0NvbmZpZ1NldHRpbmdzLndpcmVmcmFtZX0gLz5cclxuICAgICAgICAgICAgPC9Db25maWdHcm91cENvbGxhcHNpYmxlQ29udGVudD5cclxuICAgICAgICAgIDwvTGF5ZXJDb25maWdHcm91cD5cclxuICAgICAgICA8L1N0eWxlZExheWVyVmlzdWFsQ29uZmlndXJhdG9yPlxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgY29uc3Qge2xheWVyLCBkYXRhc2V0cywgdXBkYXRlTGF5ZXJDb25maWcsIGxheWVyVHlwZU9wdGlvbnMsIHVwZGF0ZUxheWVyVHlwZX0gPSB0aGlzLnByb3BzO1xyXG4gICAgICBjb25zdCB7ZmllbGRzID0gW10sIGZpZWxkUGFpcnN9ID0gbGF5ZXIuY29uZmlnLmRhdGFJZCA/IGRhdGFzZXRzW2xheWVyLmNvbmZpZy5kYXRhSWRdIDoge307XHJcbiAgICAgIGNvbnN0IHtjb25maWd9ID0gbGF5ZXI7XHJcblxyXG4gICAgICBjb25zdCB2aXNDb25maWd1cmF0b3JQcm9wcyA9IGdldFZpc0NvbmZpZ3VyYXRvclByb3BzKHRoaXMucHJvcHMpO1xyXG4gICAgICBjb25zdCBsYXllckNvbmZpZ3VyYXRvclByb3BzID0gZ2V0TGF5ZXJDb25maWd1cmF0b3JQcm9wcyh0aGlzLnByb3BzKTtcclxuICAgICAgY29uc3QgbGF5ZXJDaGFubmVsQ29uZmlnUHJvcHMgPSBnZXRMYXllckNoYW5uZWxDb25maWdQcm9wcyh0aGlzLnByb3BzKTtcclxuXHJcbiAgICAgIGNvbnN0IHJlbmRlclRlbXBsYXRlID0gbGF5ZXIudHlwZSAmJiBgX3JlbmRlciR7Y2FwaXRhbGl6ZUZpcnN0TGV0dGVyKGxheWVyLnR5cGUpfUxheWVyQ29uZmlnYDtcclxuXHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPFN0eWxlZExheWVyQ29uZmlndXJhdG9yPlxyXG4gICAgICAgICAge2xheWVyLmxheWVySW5mb01vZGFsID8gKFxyXG4gICAgICAgICAgICA8SG93VG9CdXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5vcGVuTW9kYWwobGF5ZXIubGF5ZXJJbmZvTW9kYWwpfSAvPlxyXG4gICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICA8TGF5ZXJDb25maWdHcm91cCBsYWJlbD17J2xheWVyLmJhc2ljJ30gY29sbGFwc2libGUgZXhwYW5kZWQ9eyFsYXllci5oYXNBbGxDb2x1bW5zKCl9PlxyXG4gICAgICAgICAgICA8TGF5ZXJUeXBlU2VsZWN0b3JcclxuICAgICAgICAgICAgICBsYXllcj17bGF5ZXJ9XHJcbiAgICAgICAgICAgICAgbGF5ZXJUeXBlT3B0aW9ucz17bGF5ZXJUeXBlT3B0aW9uc31cclxuICAgICAgICAgICAgICBvblNlbGVjdD17dXBkYXRlTGF5ZXJUeXBlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8Q29uZmlnR3JvdXBDb2xsYXBzaWJsZUNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAge09iamVjdC5rZXlzKGRhdGFzZXRzKS5sZW5ndGggPiAxICYmIChcclxuICAgICAgICAgICAgICAgIDxTb3VyY2VEYXRhU2VsZWN0b3JcclxuICAgICAgICAgICAgICAgICAgZGF0YXNldHM9e2RhdGFzZXRzfVxyXG4gICAgICAgICAgICAgICAgICBpZD17bGF5ZXIuaWR9XHJcbiAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtsYXllci50eXBlICYmIGNvbmZpZy5jb2x1bW5zfVxyXG4gICAgICAgICAgICAgICAgICBkYXRhSWQ9e2NvbmZpZy5kYXRhSWR9XHJcbiAgICAgICAgICAgICAgICAgIG9uU2VsZWN0PXt2YWx1ZSA9PiB1cGRhdGVMYXllckNvbmZpZyh7ZGF0YUlkOiB2YWx1ZX0pfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDxMYXllckNvbHVtbkNvbmZpZ1xyXG4gICAgICAgICAgICAgICAgY29sdW1uUGFpcnM9e2xheWVyLmNvbHVtblBhaXJzfVxyXG4gICAgICAgICAgICAgICAgY29sdW1ucz17bGF5ZXIuY29uZmlnLmNvbHVtbnN9XHJcbiAgICAgICAgICAgICAgICBhc3NpZ25Db2x1bW5QYWlycz17bGF5ZXIuYXNzaWduQ29sdW1uUGFpcnMuYmluZChsYXllcil9XHJcbiAgICAgICAgICAgICAgICBhc3NpZ25Db2x1bW49e2xheWVyLmFzc2lnbkNvbHVtbi5iaW5kKGxheWVyKX1cclxuICAgICAgICAgICAgICAgIGNvbHVtbkxhYmVscz17bGF5ZXIuY29sdW1uTGFiZWxzfVxyXG4gICAgICAgICAgICAgICAgZmllbGRzPXtmaWVsZHN9XHJcbiAgICAgICAgICAgICAgICBmaWVsZFBhaXJzPXtmaWVsZFBhaXJzfVxyXG4gICAgICAgICAgICAgICAgdXBkYXRlTGF5ZXJDb25maWc9e3VwZGF0ZUxheWVyQ29uZmlnfVxyXG4gICAgICAgICAgICAgICAgdXBkYXRlTGF5ZXJUeXBlPXt0aGlzLnByb3BzLnVwZGF0ZUxheWVyVHlwZX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0NvbmZpZ0dyb3VwQ29sbGFwc2libGVDb250ZW50PlxyXG4gICAgICAgICAgPC9MYXllckNvbmZpZ0dyb3VwPlxyXG4gICAgICAgICAge3RoaXNbcmVuZGVyVGVtcGxhdGVdICYmXHJcbiAgICAgICAgICAgIHRoaXNbcmVuZGVyVGVtcGxhdGVdKHtcclxuICAgICAgICAgICAgICBsYXllcixcclxuICAgICAgICAgICAgICB2aXNDb25maWd1cmF0b3JQcm9wcyxcclxuICAgICAgICAgICAgICBsYXllckNoYW5uZWxDb25maWdQcm9wcyxcclxuICAgICAgICAgICAgICBsYXllckNvbmZpZ3VyYXRvclByb3BzXHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvU3R5bGVkTGF5ZXJDb25maWd1cmF0b3I+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gTGF5ZXJDb25maWd1cmF0b3I7XHJcbn1cclxuLypcclxuICogQ29tcG9uZW50aXplIGNvbmZpZyBjb21wb25lbnQgaW50byBwdXJlIGZ1bmN0aW9uYWwgY29tcG9uZW50c1xyXG4gKi9cclxuXHJcbmNvbnN0IFN0eWxlZEhvd1RvQnV0dG9uID0gc3R5bGVkLmRpdmBcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDEycHg7XHJcbiAgdG9wOiAtNHB4O1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEhvd1RvQnV0dG9uID0gKHtvbkNsaWNrfSkgPT4gKFxyXG4gIDxTdHlsZWRIb3dUb0J1dHRvbj5cclxuICAgIDxCdXR0b24gbGluayBzbWFsbCBvbkNsaWNrPXtvbkNsaWNrfT5cclxuICAgICAgPEZvcm1hdHRlZE1lc3NhZ2UgaWQ9eydsYXllckNvbmZpZ3VyYXRpb24uaG93VG8nfSAvPlxyXG4gICAgPC9CdXR0b24+XHJcbiAgPC9TdHlsZWRIb3dUb0J1dHRvbj5cclxuKTtcclxuXHJcbmV4cG9ydCBjb25zdCBMYXllckNvbG9yU2VsZWN0b3IgPSAoe1xyXG4gIGxheWVyLFxyXG4gIG9uQ2hhbmdlLFxyXG4gIGxhYmVsLFxyXG4gIHNlbGVjdGVkQ29sb3IsXHJcbiAgcHJvcGVydHkgPSAnY29sb3InLFxyXG4gIHNldENvbG9yVUlcclxufSkgPT4gKFxyXG4gIDxTaWRlUGFuZWxTZWN0aW9uPlxyXG4gICAgPENvbG9yU2VsZWN0b3JcclxuICAgICAgY29sb3JTZXRzPXtbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgc2VsZWN0ZWRDb2xvcjogc2VsZWN0ZWRDb2xvciB8fCBsYXllci5jb25maWcuY29sb3IsXHJcbiAgICAgICAgICBzZXRDb2xvcjogcmdiVmFsdWUgPT4gb25DaGFuZ2Uoe1twcm9wZXJ0eV06IHJnYlZhbHVlfSlcclxuICAgICAgICB9XHJcbiAgICAgIF19XHJcbiAgICAgIGNvbG9yVUk9e2xheWVyLmNvbmZpZy5jb2xvclVJW3Byb3BlcnR5XX1cclxuICAgICAgc2V0Q29sb3JVST17bmV3Q29uZmlnID0+IHNldENvbG9yVUkocHJvcGVydHksIG5ld0NvbmZpZyl9XHJcbiAgICAvPlxyXG4gIDwvU2lkZVBhbmVsU2VjdGlvbj5cclxuKTtcclxuXHJcbmV4cG9ydCBjb25zdCBBcmNMYXllckNvbG9yU2VsZWN0b3IgPSAoe1xyXG4gIGxheWVyLFxyXG4gIG9uQ2hhbmdlQ29uZmlnLFxyXG4gIG9uQ2hhbmdlVmlzQ29uZmlnLFxyXG4gIHByb3BlcnR5ID0gJ2NvbG9yJyxcclxuICBzZXRDb2xvclVJXHJcbn0pID0+IChcclxuICA8U2lkZVBhbmVsU2VjdGlvbj5cclxuICAgIDxDb2xvclNlbGVjdG9yXHJcbiAgICAgIGNvbG9yU2V0cz17W1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIHNlbGVjdGVkQ29sb3I6IGxheWVyLmNvbmZpZy5jb2xvcixcclxuICAgICAgICAgIHNldENvbG9yOiByZ2JWYWx1ZSA9PiBvbkNoYW5nZUNvbmZpZyh7Y29sb3I6IHJnYlZhbHVlfSksXHJcbiAgICAgICAgICBsYWJlbDogJ1NvdXJjZSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHNlbGVjdGVkQ29sb3I6IGxheWVyLmNvbmZpZy52aXNDb25maWcudGFyZ2V0Q29sb3IgfHwgbGF5ZXIuY29uZmlnLmNvbG9yLFxyXG4gICAgICAgICAgc2V0Q29sb3I6IHJnYlZhbHVlID0+IG9uQ2hhbmdlVmlzQ29uZmlnKHt0YXJnZXRDb2xvcjogcmdiVmFsdWV9KSxcclxuICAgICAgICAgIGxhYmVsOiAnVGFyZ2V0J1xyXG4gICAgICAgIH1cclxuICAgICAgXX1cclxuICAgICAgY29sb3JVST17bGF5ZXIuY29uZmlnLmNvbG9yVUlbcHJvcGVydHldfVxyXG4gICAgICBzZXRDb2xvclVJPXtuZXdDb25maWcgPT4gc2V0Q29sb3JVSShwcm9wZXJ0eSwgbmV3Q29uZmlnKX1cclxuICAgIC8+XHJcbiAgPC9TaWRlUGFuZWxTZWN0aW9uPlxyXG4pO1xyXG5cclxuZXhwb3J0IGNvbnN0IExheWVyQ29sb3JSYW5nZVNlbGVjdG9yID0gKHtsYXllciwgb25DaGFuZ2UsIHByb3BlcnR5ID0gJ2NvbG9yUmFuZ2UnLCBzZXRDb2xvclVJfSkgPT4gKFxyXG4gIDxTaWRlUGFuZWxTZWN0aW9uPlxyXG4gICAgPENvbG9yU2VsZWN0b3JcclxuICAgICAgY29sb3JTZXRzPXtbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgc2VsZWN0ZWRDb2xvcjogbGF5ZXIuY29uZmlnLnZpc0NvbmZpZ1twcm9wZXJ0eV0sXHJcbiAgICAgICAgICBpc1JhbmdlOiB0cnVlLFxyXG4gICAgICAgICAgc2V0Q29sb3I6IGNvbG9yUmFuZ2UgPT4gb25DaGFuZ2Uoe1twcm9wZXJ0eV06IGNvbG9yUmFuZ2V9KVxyXG4gICAgICAgIH1cclxuICAgICAgXX1cclxuICAgICAgY29sb3JVST17bGF5ZXIuY29uZmlnLmNvbG9yVUlbcHJvcGVydHldfVxyXG4gICAgICBzZXRDb2xvclVJPXtuZXdDb25maWcgPT4gc2V0Q29sb3JVSShwcm9wZXJ0eSwgbmV3Q29uZmlnKX1cclxuICAgIC8+XHJcbiAgPC9TaWRlUGFuZWxTZWN0aW9uPlxyXG4pO1xyXG5cclxuZXhwb3J0IGNvbnN0IENoYW5uZWxCeVZhbHVlU2VsZWN0b3IgPSAoe2xheWVyLCBjaGFubmVsLCBvbkNoYW5nZSwgZmllbGRzLCBkZXNjcmlwdGlvbn0pID0+IHtcclxuICBjb25zdCB7XHJcbiAgICBjaGFubmVsU2NhbGVUeXBlLFxyXG4gICAgZG9tYWluLFxyXG4gICAgZmllbGQsXHJcbiAgICBrZXksXHJcbiAgICBwcm9wZXJ0eSxcclxuICAgIHJhbmdlLFxyXG4gICAgc2NhbGUsXHJcbiAgICBkZWZhdWx0TWVhc3VyZSxcclxuICAgIHN1cHBvcnRlZEZpZWxkVHlwZXNcclxuICB9ID0gY2hhbm5lbDtcclxuICBjb25zdCBjaGFubmVsU3VwcG9ydGVkRmllbGRUeXBlcyA9XHJcbiAgICBzdXBwb3J0ZWRGaWVsZFR5cGVzIHx8IENIQU5ORUxfU0NBTEVfU1VQUE9SVEVEX0ZJRUxEU1tjaGFubmVsU2NhbGVUeXBlXTtcclxuICBjb25zdCBzdXBwb3J0ZWRGaWVsZHMgPSBmaWVsZHMuZmlsdGVyKCh7dHlwZX0pID0+IGNoYW5uZWxTdXBwb3J0ZWRGaWVsZFR5cGVzLmluY2x1ZGVzKHR5cGUpKTtcclxuICBjb25zdCBzY2FsZU9wdGlvbnMgPSBsYXllci5nZXRTY2FsZU9wdGlvbnMoY2hhbm5lbC5rZXkpO1xyXG4gIGNvbnN0IHNob3dTY2FsZSA9ICFsYXllci5pc0FnZ3JlZ2F0ZWQgJiYgbGF5ZXIuY29uZmlnW3NjYWxlXSAmJiBzY2FsZU9wdGlvbnMubGVuZ3RoID4gMTtcclxuICBjb25zdCBkZWZhdWx0RGVzY3JpcHRpb24gPSAnbGF5ZXJDb25maWd1cmF0aW9uLmRlZmF1bHREZXNjcmlwdGlvbic7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8VmlzQ29uZmlnQnlGaWVsZFNlbGVjdG9yXHJcbiAgICAgIGNoYW5uZWw9e2NoYW5uZWwua2V5fVxyXG4gICAgICBkZXNjcmlwdGlvbj17ZGVzY3JpcHRpb24gfHwgZGVmYXVsdERlc2NyaXB0aW9ufVxyXG4gICAgICBkb21haW49e2xheWVyLmNvbmZpZ1tkb21haW5dfVxyXG4gICAgICBmaWVsZHM9e3N1cHBvcnRlZEZpZWxkc31cclxuICAgICAgaWQ9e2xheWVyLmlkfVxyXG4gICAgICBrZXk9e2Ake2tleX0tY2hhbm5lbC1zZWxlY3RvcmB9XHJcbiAgICAgIHByb3BlcnR5PXtwcm9wZXJ0eX1cclxuICAgICAgcGxhY2Vob2xkZXI9e2RlZmF1bHRNZWFzdXJlIHx8ICdwbGFjZWhvbGRlci5zZWxlY3RGaWVsZCd9XHJcbiAgICAgIHJhbmdlPXtsYXllci5jb25maWcudmlzQ29uZmlnW3JhbmdlXX1cclxuICAgICAgc2NhbGVPcHRpb25zPXtzY2FsZU9wdGlvbnN9XHJcbiAgICAgIHNjYWxlVHlwZT17c2NhbGUgPyBsYXllci5jb25maWdbc2NhbGVdIDogbnVsbH1cclxuICAgICAgc2VsZWN0ZWRGaWVsZD17bGF5ZXIuY29uZmlnW2ZpZWxkXX1cclxuICAgICAgc2hvd1NjYWxlPXtzaG93U2NhbGV9XHJcbiAgICAgIHVwZGF0ZUZpZWxkPXt2YWwgPT4gb25DaGFuZ2Uoe1tmaWVsZF06IHZhbH0sIGtleSl9XHJcbiAgICAgIHVwZGF0ZVNjYWxlPXt2YWwgPT4gb25DaGFuZ2Uoe1tzY2FsZV06IHZhbH0sIGtleSl9XHJcbiAgICAvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgQWdnclNjYWxlU2VsZWN0b3IgPSAoe2NoYW5uZWwsIGxheWVyLCBvbkNoYW5nZX0pID0+IHtcclxuICBjb25zdCB7c2NhbGUsIGtleX0gPSBjaGFubmVsO1xyXG4gIGNvbnN0IHNjYWxlT3B0aW9ucyA9IGxheWVyLmdldFNjYWxlT3B0aW9ucyhrZXkpO1xyXG5cclxuICByZXR1cm4gQXJyYXkuaXNBcnJheShzY2FsZU9wdGlvbnMpICYmIHNjYWxlT3B0aW9ucy5sZW5ndGggPiAxID8gKFxyXG4gICAgPERpbWVuc2lvblNjYWxlU2VsZWN0b3JcclxuICAgICAgbGFiZWw9e2Ake2tleX0gU2NhbGVgfVxyXG4gICAgICBvcHRpb25zPXtzY2FsZU9wdGlvbnN9XHJcbiAgICAgIHNjYWxlVHlwZT17bGF5ZXIuY29uZmlnW3NjYWxlXX1cclxuICAgICAgb25TZWxlY3Q9e3ZhbCA9PiBvbkNoYW5nZSh7W3NjYWxlXTogdmFsfSwga2V5KX1cclxuICAgIC8+XHJcbiAgKSA6IG51bGw7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgQWdncmVnYXRpb25UeXBlU2VsZWN0b3IgPSAoe2xheWVyLCBjaGFubmVsLCBvbkNoYW5nZX0pID0+IHtcclxuICBjb25zdCB7ZmllbGQsIGFnZ3JlZ2F0aW9uLCBrZXl9ID0gY2hhbm5lbDtcclxuICBjb25zdCBzZWxlY3RlZEZpZWxkID0gbGF5ZXIuY29uZmlnW2ZpZWxkXTtcclxuICBjb25zdCB7dmlzQ29uZmlnfSA9IGxheWVyLmNvbmZpZztcclxuXHJcbiAgLy8gYWdncmVnYXRpb24gc2hvdWxkIG9ubHkgYmUgc2VsZWN0YWJsZSB3aGVuIGZpZWxkIGlzIHNlbGVjdGVkXHJcbiAgY29uc3QgYWdncmVnYXRpb25PcHRpb25zID0gbGF5ZXIuZ2V0QWdncmVnYXRpb25PcHRpb25zKGtleSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8U2lkZVBhbmVsU2VjdGlvbj5cclxuICAgICAgPFBhbmVsTGFiZWw+XHJcbiAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2UgaWQ9eydsYXllci5hZ2dyZWdhdGVCeSd9IHZhbHVlcz17e2ZpZWxkOiBzZWxlY3RlZEZpZWxkLm5hbWV9fSAvPlxyXG4gICAgICA8L1BhbmVsTGFiZWw+XHJcbiAgICAgIDxJdGVtU2VsZWN0b3JcclxuICAgICAgICBzZWxlY3RlZEl0ZW1zPXt2aXNDb25maWdbYWdncmVnYXRpb25dfVxyXG4gICAgICAgIG9wdGlvbnM9e2FnZ3JlZ2F0aW9uT3B0aW9uc31cclxuICAgICAgICBtdWx0aVNlbGVjdD17ZmFsc2V9XHJcbiAgICAgICAgc2VhcmNoYWJsZT17ZmFsc2V9XHJcbiAgICAgICAgb25DaGFuZ2U9e3ZhbHVlID0+XHJcbiAgICAgICAgICBvbkNoYW5nZShcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHZpc0NvbmZpZzoge1xyXG4gICAgICAgICAgICAgICAgLi4ubGF5ZXIuY29uZmlnLnZpc0NvbmZpZyxcclxuICAgICAgICAgICAgICAgIFthZ2dyZWdhdGlvbl06IHZhbHVlXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjaGFubmVsLmtleVxyXG4gICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuICAgICAgLz5cclxuICAgIDwvU2lkZVBhbmVsU2VjdGlvbj5cclxuICApO1xyXG59O1xyXG4vKiBlc2xpbnQtZW5hYmxlIG1heC1wYXJhbXMgKi9cclxuIl19