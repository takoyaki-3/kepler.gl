"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.LayerColorLegend = exports.MultiColorLegend = exports.SingleColorLegend = exports.LayerSizeLegend = exports.VisualChannelMetric = exports.StyledMapControlLegend = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _d3Color = require("d3-color");

var _colorLegend = _interopRequireDefault(require("../common/color-legend"));

var _defaultSettings = require("../../constants/default-settings");

var _reactIntl = require("react-intl");

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  padding: 10px 0 10px ", "px;\n  font-size: 11px;\n  border-bottom-color: ", ";\n  border-bottom-style: solid;\n  border-bottom-width: ", ";\n\n  .legend--layer_name {\n    font-size: 12px;\n    padding-right: ", "px;\n    color: ", ";\n    font-weight: 500;\n  }\n  .legend--layer_type {\n    color: ", ";\n    font-weight: 500;\n    font-size: 11px;\n    padding-right: ", "px;\n  }\n\n  .legend--layer__title {\n    padding-right: ", "px;\n  }\n\n  .legend--layer_by {\n    color: ", ";\n  }\n\n  .legend--layer_color_field {\n    color: ", ";\n    font-weight: 500;\n  }\n\n  .legend--layer_color-legend {\n    margin-top: 6px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var StyledMapControlLegend = _styledComponents["default"].div(_templateObject(), function (props) {
  return props.theme.mapControl.padding;
}, function (props) {
  return props.theme.panelBorderColor;
}, function (props) {
  return props.last ? 0 : '1px';
}, function (props) {
  return props.theme.mapControl.padding;
}, function (props) {
  return props.theme.textColorHl;
}, function (props) {
  return props.theme.subtextColor;
}, function (props) {
  return props.theme.mapControl.padding;
}, function (props) {
  return props.theme.mapControl.padding;
}, function (props) {
  return props.theme.subtextColor;
}, function (props) {
  return props.theme.textColor;
});

exports.StyledMapControlLegend = StyledMapControlLegend;

var VisualChannelMetric = function VisualChannelMetric(_ref) {
  var name = _ref.name;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "legend--layer__title"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "legend--layer_by"
  }, "by "), /*#__PURE__*/_react["default"].createElement("span", {
    className: "legend--layer_color_field"
  }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: name
  })));
};

exports.VisualChannelMetric = VisualChannelMetric;

var LayerSizeLegend = function LayerSizeLegend(_ref2) {
  var label = _ref2.label,
      name = _ref2.name;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "legend--layer_size-schema"
  }, /*#__PURE__*/_react["default"].createElement("p", null, /*#__PURE__*/_react["default"].createElement("span", {
    className: "legend--layer_by"
  }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: label
  }))), /*#__PURE__*/_react["default"].createElement(VisualChannelMetric, {
    name: name
  }));
};

exports.LayerSizeLegend = LayerSizeLegend;
var propTypes = {
  layers: _propTypes["default"].arrayOf(_propTypes["default"].object)
};
var SingleColorDomain = [''];

var SingleColorLegend = /*#__PURE__*/_react["default"].memo(function (_ref3) {
  var width = _ref3.width,
      color = _ref3.color;
  return /*#__PURE__*/_react["default"].createElement(_colorLegend["default"], {
    scaleType: "ordinal",
    displayLabel: false,
    domain: SingleColorDomain,
    fieldType: null,
    range: [_d3Color.rgb.apply(void 0, (0, _toConsumableArray2["default"])(color)).toString()],
    width: width
  });
});

exports.SingleColorLegend = SingleColorLegend;
SingleColorLegend.displayName = 'SingleColorLegend';

var MultiColorLegend = /*#__PURE__*/_react["default"].memo(function (_ref4) {
  var colorRange = _ref4.colorRange,
      colorScale = _ref4.colorScale,
      colorDomain = _ref4.colorDomain,
      colorField = _ref4.colorField,
      width = _ref4.width;
  return /*#__PURE__*/_react["default"].createElement(_colorLegend["default"], {
    scaleType: colorScale,
    displayLabel: true,
    domain: colorDomain,
    fieldType: colorField && colorField.type || 'real',
    range: colorRange.colors,
    width: width
  });
});

exports.MultiColorLegend = MultiColorLegend;
MultiColorLegend.displayName = 'MultiColorLegend';

var LayerColorLegend = /*#__PURE__*/_react["default"].memo(function (_ref5) {
  var description = _ref5.description,
      config = _ref5.config,
      width = _ref5.width,
      colorChannel = _ref5.colorChannel;
  var enableColorBy = description.measure;
  var scale = colorChannel.scale,
      field = colorChannel.field,
      domain = colorChannel.domain,
      range = colorChannel.range,
      property = colorChannel.property,
      key = colorChannel.key;

  var _map = [scale, field, domain].map(function (k) {
    return config[k];
  }),
      _map2 = (0, _slicedToArray2["default"])(_map, 3),
      colorScale = _map2[0],
      colorField = _map2[1],
      colorDomain = _map2[2];

  var colorRange = config.visConfig[range];
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "legend--layer_type"
  }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: "layer.".concat(key)
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "legend--layer_color-schema"
  }, /*#__PURE__*/_react["default"].createElement("div", null, enableColorBy ? /*#__PURE__*/_react["default"].createElement(VisualChannelMetric, {
    name: enableColorBy
  }) : null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "legend--layer_color-legend"
  }, enableColorBy ? /*#__PURE__*/_react["default"].createElement(MultiColorLegend, {
    colorScale: colorScale,
    colorField: colorField,
    colorDomain: colorDomain,
    colorRange: colorRange,
    width: width
  }) : /*#__PURE__*/_react["default"].createElement(SingleColorLegend, {
    color: config.visConfig[property] || config[property] || config.color,
    width: width
  })))));
});

exports.LayerColorLegend = LayerColorLegend;
LayerColorLegend.displayName = 'LayerColorLegend';

var isColorChannel = function isColorChannel(visualChannel) {
  return [_defaultSettings.CHANNEL_SCALES.color, _defaultSettings.CHANNEL_SCALES.colorAggr].includes(visualChannel.channelScaleType);
};

var MAP_LEGEND_WIDTH = _defaultSettings.DIMENSIONS.mapControl.width - 2 * _defaultSettings.DIMENSIONS.mapControl.padding;

var MapLegend = function MapLegend(_ref6) {
  var _ref6$layers = _ref6.layers,
      layers = _ref6$layers === void 0 ? [] : _ref6$layers;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "map-legend"
  }, layers.map(function (layer, index) {
    if (!layer.isValidToSave()) {
      return null;
    }

    var colorChannels = Object.values(layer.visualChannels).filter(isColorChannel);
    var nonColorChannels = Object.values(layer.visualChannels).filter(function (vc) {
      return !isColorChannel(vc);
    });
    return /*#__PURE__*/_react["default"].createElement(StyledMapControlLegend, {
      className: "legend--layer",
      last: index === layers.length - 1,
      key: index
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "legend--layer_name"
    }, layer.config.label), colorChannels.map(function (colorChannel) {
      return !colorChannel.condition || colorChannel.condition(layer.config) ? /*#__PURE__*/_react["default"].createElement(LayerColorLegend, {
        key: colorChannel.key,
        description: layer.getVisualChannelDescription(colorChannel.key),
        config: layer.config,
        width: MAP_LEGEND_WIDTH,
        colorChannel: colorChannel
      }) : null;
    }), nonColorChannels.map(function (visualChannel) {
      var matchCondition = !visualChannel.condition || visualChannel.condition(layer.config);
      var enabled = layer.config[visualChannel.field] || visualChannel.defaultMeasure;
      var description = layer.getVisualChannelDescription(visualChannel.key);
      return matchCondition && enabled ? /*#__PURE__*/_react["default"].createElement(LayerSizeLegend, {
        key: visualChannel.key,
        label: description.label,
        name: description.measure
      }) : null;
    }));
  }));
};

MapLegend.propTypes = propTypes;
var _default = MapLegend;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL21hcC9tYXAtbGVnZW5kLmpzIl0sIm5hbWVzIjpbIlN0eWxlZE1hcENvbnRyb2xMZWdlbmQiLCJzdHlsZWQiLCJkaXYiLCJwcm9wcyIsInRoZW1lIiwibWFwQ29udHJvbCIsInBhZGRpbmciLCJwYW5lbEJvcmRlckNvbG9yIiwibGFzdCIsInRleHRDb2xvckhsIiwic3VidGV4dENvbG9yIiwidGV4dENvbG9yIiwiVmlzdWFsQ2hhbm5lbE1ldHJpYyIsIm5hbWUiLCJMYXllclNpemVMZWdlbmQiLCJsYWJlbCIsInByb3BUeXBlcyIsImxheWVycyIsIlByb3BUeXBlcyIsImFycmF5T2YiLCJvYmplY3QiLCJTaW5nbGVDb2xvckRvbWFpbiIsIlNpbmdsZUNvbG9yTGVnZW5kIiwiUmVhY3QiLCJtZW1vIiwid2lkdGgiLCJjb2xvciIsInJnYiIsInRvU3RyaW5nIiwiZGlzcGxheU5hbWUiLCJNdWx0aUNvbG9yTGVnZW5kIiwiY29sb3JSYW5nZSIsImNvbG9yU2NhbGUiLCJjb2xvckRvbWFpbiIsImNvbG9yRmllbGQiLCJ0eXBlIiwiY29sb3JzIiwiTGF5ZXJDb2xvckxlZ2VuZCIsImRlc2NyaXB0aW9uIiwiY29uZmlnIiwiY29sb3JDaGFubmVsIiwiZW5hYmxlQ29sb3JCeSIsIm1lYXN1cmUiLCJzY2FsZSIsImZpZWxkIiwiZG9tYWluIiwicmFuZ2UiLCJwcm9wZXJ0eSIsImtleSIsIm1hcCIsImsiLCJ2aXNDb25maWciLCJpc0NvbG9yQ2hhbm5lbCIsInZpc3VhbENoYW5uZWwiLCJDSEFOTkVMX1NDQUxFUyIsImNvbG9yQWdnciIsImluY2x1ZGVzIiwiY2hhbm5lbFNjYWxlVHlwZSIsIk1BUF9MRUdFTkRfV0lEVEgiLCJESU1FTlNJT05TIiwiTWFwTGVnZW5kIiwibGF5ZXIiLCJpbmRleCIsImlzVmFsaWRUb1NhdmUiLCJjb2xvckNoYW5uZWxzIiwiT2JqZWN0IiwidmFsdWVzIiwidmlzdWFsQ2hhbm5lbHMiLCJmaWx0ZXIiLCJub25Db2xvckNoYW5uZWxzIiwidmMiLCJsZW5ndGgiLCJjb25kaXRpb24iLCJnZXRWaXN1YWxDaGFubmVsRGVzY3JpcHRpb24iLCJtYXRjaENvbmRpdGlvbiIsImVuYWJsZWQiLCJkZWZhdWx0TWVhc3VyZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7QUFFTyxJQUFNQSxzQkFBc0IsR0FBR0MsNkJBQU9DLEdBQVYsb0JBQ1YsVUFBQUMsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxVQUFaLENBQXVCQyxPQUEzQjtBQUFBLENBREssRUFHVixVQUFBSCxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlHLGdCQUFoQjtBQUFBLENBSEssRUFLVixVQUFBSixLQUFLO0FBQUEsU0FBS0EsS0FBSyxDQUFDSyxJQUFOLEdBQWEsQ0FBYixHQUFpQixLQUF0QjtBQUFBLENBTEssRUFTZCxVQUFBTCxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFVBQVosQ0FBdUJDLE9BQTNCO0FBQUEsQ0FUUyxFQVV0QixVQUFBSCxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlLLFdBQWhCO0FBQUEsQ0FWaUIsRUFjdEIsVUFBQU4sS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZTSxZQUFoQjtBQUFBLENBZGlCLEVBaUJkLFVBQUFQLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsVUFBWixDQUF1QkMsT0FBM0I7QUFBQSxDQWpCUyxFQXFCZCxVQUFBSCxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFVBQVosQ0FBdUJDLE9BQTNCO0FBQUEsQ0FyQlMsRUF5QnRCLFVBQUFILEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWU0sWUFBaEI7QUFBQSxDQXpCaUIsRUE2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QUN1QixjQUFuRTtBQUVBLFVBQU10QyxXQUFXLEdBQUd1QixLQUFLLENBQUNZLDJCQUFOLENBQWtDcEIsYUFBYSxDQUFDTCxHQUFoRCxDQUFwQjtBQUVBLGFBQU8wQixjQUFjLElBQUlDLE9BQWxCLGdCQUNMLGdDQUFDLGVBQUQ7QUFDRSxRQUFBLEdBQUcsRUFBRXRCLGFBQWEsQ0FBQ0wsR0FEckI7QUFFRSxRQUFBLEtBQUssRUFBRVYsV0FBVyxDQUFDdkIsS0FGckI7QUFHRSxRQUFBLElBQUksRUFBRXVCLFdBQVcsQ0FBQ0k7QUFIcEIsUUFESyxHQU1ILElBTko7QUFPRCxLQWRBLENBakJILENBREY7QUFtQ0QsR0E3Q0EsQ0FESCxDQURnQjtBQUFBLENBQWxCOztBQW1EQWtCLFNBQVMsQ0FBQzVDLFNBQVYsR0FBc0JBLFNBQXRCO2VBRWU0QyxTIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7cmdifSBmcm9tICdkMy1jb2xvcic7XHJcbmltcG9ydCBDb2xvckxlZ2VuZCBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9jb2xvci1sZWdlbmQnO1xyXG5pbXBvcnQge0NIQU5ORUxfU0NBTEVTLCBESU1FTlNJT05TfSBmcm9tICdjb25zdGFudHMvZGVmYXVsdC1zZXR0aW5ncyc7XHJcbmltcG9ydCB7Rm9ybWF0dGVkTWVzc2FnZX0gZnJvbSAncmVhY3QtaW50bCc7XHJcblxyXG5leHBvcnQgY29uc3QgU3R5bGVkTWFwQ29udHJvbExlZ2VuZCA9IHN0eWxlZC5kaXZgXHJcbiAgcGFkZGluZzogMTBweCAwIDEwcHggJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5tYXBDb250cm9sLnBhZGRpbmd9cHg7XHJcbiAgZm9udC1zaXplOiAxMXB4O1xyXG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUucGFuZWxCb3JkZXJDb2xvcn07XHJcbiAgYm9yZGVyLWJvdHRvbS1zdHlsZTogc29saWQ7XHJcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogJHtwcm9wcyA9PiAocHJvcHMubGFzdCA/IDAgOiAnMXB4Jyl9O1xyXG5cclxuICAubGVnZW5kLS1sYXllcl9uYW1lIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUubWFwQ29udHJvbC5wYWRkaW5nfXB4O1xyXG4gICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudGV4dENvbG9ySGx9O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB9XHJcbiAgLmxlZ2VuZC0tbGF5ZXJfdHlwZSB7XHJcbiAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5zdWJ0ZXh0Q29sb3J9O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUubWFwQ29udHJvbC5wYWRkaW5nfXB4O1xyXG4gIH1cclxuXHJcbiAgLmxlZ2VuZC0tbGF5ZXJfX3RpdGxlIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUubWFwQ29udHJvbC5wYWRkaW5nfXB4O1xyXG4gIH1cclxuXHJcbiAgLmxlZ2VuZC0tbGF5ZXJfYnkge1xyXG4gICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc3VidGV4dENvbG9yfTtcclxuICB9XHJcblxyXG4gIC5sZWdlbmQtLWxheWVyX2NvbG9yX2ZpZWxkIHtcclxuICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRleHRDb2xvcn07XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gIH1cclxuXHJcbiAgLmxlZ2VuZC0tbGF5ZXJfY29sb3ItbGVnZW5kIHtcclxuICAgIG1hcmdpbi10b3A6IDZweDtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgVmlzdWFsQ2hhbm5lbE1ldHJpYyA9ICh7bmFtZX0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJsZWdlbmQtLWxheWVyX190aXRsZVwiPlxyXG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJsZWdlbmQtLWxheWVyX2J5XCI+YnkgPC9zcGFuPlxyXG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJsZWdlbmQtLWxheWVyX2NvbG9yX2ZpZWxkXCI+XHJcbiAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2UgaWQ9e25hbWV9IC8+XHJcbiAgICAgIDwvc3Bhbj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgTGF5ZXJTaXplTGVnZW5kID0gKHtsYWJlbCwgbmFtZX0pID0+IChcclxuICA8ZGl2IGNsYXNzTmFtZT1cImxlZ2VuZC0tbGF5ZXJfc2l6ZS1zY2hlbWFcIj5cclxuICAgIDxwPlxyXG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJsZWdlbmQtLWxheWVyX2J5XCI+XHJcbiAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2UgaWQ9e2xhYmVsfSAvPlxyXG4gICAgICA8L3NwYW4+XHJcbiAgICA8L3A+XHJcbiAgICA8VmlzdWFsQ2hhbm5lbE1ldHJpYyBuYW1lPXtuYW1lfSAvPlxyXG4gIDwvZGl2PlxyXG4pO1xyXG5cclxuY29uc3QgcHJvcFR5cGVzID0ge1xyXG4gIGxheWVyczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdClcclxufTtcclxuXHJcbmNvbnN0IFNpbmdsZUNvbG9yRG9tYWluID0gWycnXTtcclxuZXhwb3J0IGNvbnN0IFNpbmdsZUNvbG9yTGVnZW5kID0gUmVhY3QubWVtbygoe3dpZHRoLCBjb2xvcn0pID0+IChcclxuICA8Q29sb3JMZWdlbmRcclxuICAgIHNjYWxlVHlwZT1cIm9yZGluYWxcIlxyXG4gICAgZGlzcGxheUxhYmVsPXtmYWxzZX1cclxuICAgIGRvbWFpbj17U2luZ2xlQ29sb3JEb21haW59XHJcbiAgICBmaWVsZFR5cGU9e251bGx9XHJcbiAgICByYW5nZT17W3JnYiguLi5jb2xvcikudG9TdHJpbmcoKV19XHJcbiAgICB3aWR0aD17d2lkdGh9XHJcbiAgLz5cclxuKSk7XHJcblxyXG5TaW5nbGVDb2xvckxlZ2VuZC5kaXNwbGF5TmFtZSA9ICdTaW5nbGVDb2xvckxlZ2VuZCc7XHJcblxyXG5leHBvcnQgY29uc3QgTXVsdGlDb2xvckxlZ2VuZCA9IFJlYWN0Lm1lbW8oXHJcbiAgKHtjb2xvclJhbmdlLCBjb2xvclNjYWxlLCBjb2xvckRvbWFpbiwgY29sb3JGaWVsZCwgd2lkdGh9KSA9PiAoXHJcbiAgICA8Q29sb3JMZWdlbmRcclxuICAgICAgc2NhbGVUeXBlPXtjb2xvclNjYWxlfVxyXG4gICAgICBkaXNwbGF5TGFiZWxcclxuICAgICAgZG9tYWluPXtjb2xvckRvbWFpbn1cclxuICAgICAgZmllbGRUeXBlPXsoY29sb3JGaWVsZCAmJiBjb2xvckZpZWxkLnR5cGUpIHx8ICdyZWFsJ31cclxuICAgICAgcmFuZ2U9e2NvbG9yUmFuZ2UuY29sb3JzfVxyXG4gICAgICB3aWR0aD17d2lkdGh9XHJcbiAgICAvPlxyXG4gIClcclxuKTtcclxuXHJcbk11bHRpQ29sb3JMZWdlbmQuZGlzcGxheU5hbWUgPSAnTXVsdGlDb2xvckxlZ2VuZCc7XHJcblxyXG5leHBvcnQgY29uc3QgTGF5ZXJDb2xvckxlZ2VuZCA9IFJlYWN0Lm1lbW8oKHtkZXNjcmlwdGlvbiwgY29uZmlnLCB3aWR0aCwgY29sb3JDaGFubmVsfSkgPT4ge1xyXG4gIGNvbnN0IGVuYWJsZUNvbG9yQnkgPSBkZXNjcmlwdGlvbi5tZWFzdXJlO1xyXG4gIGNvbnN0IHtzY2FsZSwgZmllbGQsIGRvbWFpbiwgcmFuZ2UsIHByb3BlcnR5LCBrZXl9ID0gY29sb3JDaGFubmVsO1xyXG4gIGNvbnN0IFtjb2xvclNjYWxlLCBjb2xvckZpZWxkLCBjb2xvckRvbWFpbl0gPSBbc2NhbGUsIGZpZWxkLCBkb21haW5dLm1hcChrID0+IGNvbmZpZ1trXSk7XHJcbiAgY29uc3QgY29sb3JSYW5nZSA9IGNvbmZpZy52aXNDb25maWdbcmFuZ2VdO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWdlbmQtLWxheWVyX3R5cGVcIj5cclxuICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZSBpZD17YGxheWVyLiR7a2V5fWB9IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlZ2VuZC0tbGF5ZXJfY29sb3Itc2NoZW1hXCI+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIHtlbmFibGVDb2xvckJ5ID8gPFZpc3VhbENoYW5uZWxNZXRyaWMgbmFtZT17ZW5hYmxlQ29sb3JCeX0gLz4gOiBudWxsfVxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWdlbmQtLWxheWVyX2NvbG9yLWxlZ2VuZFwiPlxyXG4gICAgICAgICAgICB7ZW5hYmxlQ29sb3JCeSA/IChcclxuICAgICAgICAgICAgICA8TXVsdGlDb2xvckxlZ2VuZFxyXG4gICAgICAgICAgICAgICAgY29sb3JTY2FsZT17Y29sb3JTY2FsZX1cclxuICAgICAgICAgICAgICAgIGNvbG9yRmllbGQ9e2NvbG9yRmllbGR9XHJcbiAgICAgICAgICAgICAgICBjb2xvckRvbWFpbj17Y29sb3JEb21haW59XHJcbiAgICAgICAgICAgICAgICBjb2xvclJhbmdlPXtjb2xvclJhbmdlfVxyXG4gICAgICAgICAgICAgICAgd2lkdGg9e3dpZHRofVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgPFNpbmdsZUNvbG9yTGVnZW5kXHJcbiAgICAgICAgICAgICAgICBjb2xvcj17Y29uZmlnLnZpc0NvbmZpZ1twcm9wZXJ0eV0gfHwgY29uZmlnW3Byb3BlcnR5XSB8fCBjb25maWcuY29sb3J9XHJcbiAgICAgICAgICAgICAgICB3aWR0aD17d2lkdGh9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn0pO1xyXG5cclxuTGF5ZXJDb2xvckxlZ2VuZC5kaXNwbGF5TmFtZSA9ICdMYXllckNvbG9yTGVnZW5kJztcclxuXHJcbmNvbnN0IGlzQ29sb3JDaGFubmVsID0gdmlzdWFsQ2hhbm5lbCA9PlxyXG4gIFtDSEFOTkVMX1NDQUxFUy5jb2xvciwgQ0hBTk5FTF9TQ0FMRVMuY29sb3JBZ2dyXS5pbmNsdWRlcyh2aXN1YWxDaGFubmVsLmNoYW5uZWxTY2FsZVR5cGUpO1xyXG5cclxuY29uc3QgTUFQX0xFR0VORF9XSURUSCA9IERJTUVOU0lPTlMubWFwQ29udHJvbC53aWR0aCAtIDIgKiBESU1FTlNJT05TLm1hcENvbnRyb2wucGFkZGluZztcclxuXHJcbmNvbnN0IE1hcExlZ2VuZCA9ICh7bGF5ZXJzID0gW119KSA9PiAoXHJcbiAgPGRpdiBjbGFzc05hbWU9XCJtYXAtbGVnZW5kXCI+XHJcbiAgICB7bGF5ZXJzLm1hcCgobGF5ZXIsIGluZGV4KSA9PiB7XHJcbiAgICAgIGlmICghbGF5ZXIuaXNWYWxpZFRvU2F2ZSgpKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IGNvbG9yQ2hhbm5lbHMgPSBPYmplY3QudmFsdWVzKGxheWVyLnZpc3VhbENoYW5uZWxzKS5maWx0ZXIoaXNDb2xvckNoYW5uZWwpO1xyXG4gICAgICBjb25zdCBub25Db2xvckNoYW5uZWxzID0gT2JqZWN0LnZhbHVlcyhsYXllci52aXN1YWxDaGFubmVscykuZmlsdGVyKFxyXG4gICAgICAgIHZjID0+ICFpc0NvbG9yQ2hhbm5lbCh2YylcclxuICAgICAgKTtcclxuXHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPFN0eWxlZE1hcENvbnRyb2xMZWdlbmRcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImxlZ2VuZC0tbGF5ZXJcIlxyXG4gICAgICAgICAgbGFzdD17aW5kZXggPT09IGxheWVycy5sZW5ndGggLSAxfVxyXG4gICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlZ2VuZC0tbGF5ZXJfbmFtZVwiPntsYXllci5jb25maWcubGFiZWx9PC9kaXY+XHJcbiAgICAgICAgICB7Y29sb3JDaGFubmVscy5tYXAoY29sb3JDaGFubmVsID0+XHJcbiAgICAgICAgICAgICFjb2xvckNoYW5uZWwuY29uZGl0aW9uIHx8IGNvbG9yQ2hhbm5lbC5jb25kaXRpb24obGF5ZXIuY29uZmlnKSA/IChcclxuICAgICAgICAgICAgICA8TGF5ZXJDb2xvckxlZ2VuZFxyXG4gICAgICAgICAgICAgICAga2V5PXtjb2xvckNoYW5uZWwua2V5fVxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e2xheWVyLmdldFZpc3VhbENoYW5uZWxEZXNjcmlwdGlvbihjb2xvckNoYW5uZWwua2V5KX1cclxuICAgICAgICAgICAgICAgIGNvbmZpZz17bGF5ZXIuY29uZmlnfVxyXG4gICAgICAgICAgICAgICAgd2lkdGg9e01BUF9MRUdFTkRfV0lEVEh9XHJcbiAgICAgICAgICAgICAgICBjb2xvckNoYW5uZWw9e2NvbG9yQ2hhbm5lbH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApIDogbnVsbFxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAgIHtub25Db2xvckNoYW5uZWxzLm1hcCh2aXN1YWxDaGFubmVsID0+IHtcclxuICAgICAgICAgICAgY29uc3QgbWF0Y2hDb25kaXRpb24gPVxyXG4gICAgICAgICAgICAgICF2aXN1YWxDaGFubmVsLmNvbmRpdGlvbiB8fCB2aXN1YWxDaGFubmVsLmNvbmRpdGlvbihsYXllci5jb25maWcpO1xyXG4gICAgICAgICAgICBjb25zdCBlbmFibGVkID0gbGF5ZXIuY29uZmlnW3Zpc3VhbENoYW5uZWwuZmllbGRdIHx8IHZpc3VhbENoYW5uZWwuZGVmYXVsdE1lYXN1cmU7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGxheWVyLmdldFZpc3VhbENoYW5uZWxEZXNjcmlwdGlvbih2aXN1YWxDaGFubmVsLmtleSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gbWF0Y2hDb25kaXRpb24gJiYgZW5hYmxlZCA/IChcclxuICAgICAgICAgICAgICA8TGF5ZXJTaXplTGVnZW5kXHJcbiAgICAgICAgICAgICAgICBrZXk9e3Zpc3VhbENoYW5uZWwua2V5fVxyXG4gICAgICAgICAgICAgICAgbGFiZWw9e2Rlc2NyaXB0aW9uLmxhYmVsfVxyXG4gICAgICAgICAgICAgICAgbmFtZT17ZGVzY3JpcHRpb24ubWVhc3VyZX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApIDogbnVsbDtcclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvU3R5bGVkTWFwQ29udHJvbExlZ2VuZD5cclxuICAgICAgKTtcclxuICAgIH0pfVxyXG4gIDwvZGl2PlxyXG4pO1xyXG5cclxuTWFwTGVnZW5kLnByb3BUeXBlcyA9IHByb3BUeXBlcztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1hcExlZ2VuZDtcclxuIl19