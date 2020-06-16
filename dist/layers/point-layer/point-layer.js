"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.pointVisConfigs = exports.pointOptionalColumns = exports.pointRequiredColumns = exports.pointPosAccessor = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _get2 = _interopRequireDefault(require("@babel/runtime/helpers/get"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _extensions = require("@deck.gl/extensions");

var _layers = require("@deck.gl/layers");

var _baseLayer = _interopRequireDefault(require("../base-layer"));

var _colorUtils = require("../../utils/color-utils");

var _pointLayerIcon = _interopRequireDefault(require("./point-layer-icon"));

var _defaultSettings = require("../../constants/default-settings");

var _layerTextLabel = require("../layer-text-label");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var pointPosAccessor = function pointPosAccessor(_ref) {
  var lat = _ref.lat,
      lng = _ref.lng,
      altitude = _ref.altitude;
  return function (d) {
    return [// lng
    d.data[lng.fieldIdx], // lat
    d.data[lat.fieldIdx], altitude && altitude.fieldIdx > -1 ? d.data[altitude.fieldIdx] : 0];
  };
};

exports.pointPosAccessor = pointPosAccessor;
var pointRequiredColumns = ['lat', 'lng'];
exports.pointRequiredColumns = pointRequiredColumns;
var pointOptionalColumns = ['altitude'];
exports.pointOptionalColumns = pointOptionalColumns;
var brushingExtension = new _extensions.BrushingExtension();
var pointVisConfigs = {
  radius: 'radius',
  fixedRadius: 'fixedRadius',
  opacity: 'opacity',
  outline: 'outline',
  thickness: 'thickness',
  strokeColor: 'strokeColor',
  colorRange: 'colorRange',
  strokeColorRange: 'strokeColorRange',
  radiusRange: 'radiusRange',
  filled: {
    type: 'boolean',
    label: 'layer.fillColor',
    defaultValue: true,
    property: 'filled'
  }
};
exports.pointVisConfigs = pointVisConfigs;

var PointLayer = /*#__PURE__*/function (_Layer) {
  (0, _inherits2["default"])(PointLayer, _Layer);

  var _super = _createSuper(PointLayer);

  function PointLayer(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, PointLayer);
    _this = _super.call(this, props);

    _this.registerVisConfig(pointVisConfigs);

    _this.getPositionAccessor = function () {
      return pointPosAccessor(_this.config.columns);
    };

    return _this;
  }

  (0, _createClass2["default"])(PointLayer, [{
    key: "getDefaultLayerConfig",
    value: function getDefaultLayerConfig() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return _objectSpread(_objectSpread({}, (0, _get2["default"])((0, _getPrototypeOf2["default"])(PointLayer.prototype), "getDefaultLayerConfig", this).call(this, props)), {}, {
        // add stroke color visual channel
        strokeColorField: null,
        strokeColorDomain: [0, 1],
        strokeColorScale: 'quantile'
      });
    }
  }, {
    key: "calculateDataAttribute",
    value: function calculateDataAttribute(_ref2, getPosition) {
      var allData = _ref2.allData,
          filteredIndex = _ref2.filteredIndex;
      var data = [];

      for (var i = 0; i < filteredIndex.length; i++) {
        var index = filteredIndex[i];
        var pos = getPosition({
          data: allData[index]
        }); // if doesn't have point lat or lng, do not add the point
        // deck.gl can't handle position = null

        if (pos.every(Number.isFinite)) {
          data.push({
            data: allData[index],
            position: pos,
            // index is important for filter
            index: index
          });
        }
      }

      return data;
    }
  }, {
    key: "formatLayerData",
    value: function formatLayerData(datasets, oldLayerData) {
      var _this2 = this;

      var _this$config = this.config,
          colorScale = _this$config.colorScale,
          colorDomain = _this$config.colorDomain,
          colorField = _this$config.colorField,
          strokeColorField = _this$config.strokeColorField,
          strokeColorScale = _this$config.strokeColorScale,
          strokeColorDomain = _this$config.strokeColorDomain,
          color = _this$config.color,
          sizeField = _this$config.sizeField,
          sizeScale = _this$config.sizeScale,
          sizeDomain = _this$config.sizeDomain,
          textLabel = _this$config.textLabel,
          _this$config$visConfi = _this$config.visConfig,
          radiusRange = _this$config$visConfi.radiusRange,
          fixedRadius = _this$config$visConfi.fixedRadius,
          colorRange = _this$config$visConfi.colorRange,
          strokeColorRange = _this$config$visConfi.strokeColorRange,
          strokeColor = _this$config$visConfi.strokeColor;
      var gpuFilter = datasets[this.config.dataId].gpuFilter;

      var _this$updateData = this.updateData(datasets, oldLayerData),
          data = _this$updateData.data,
          triggerChanged = _this$updateData.triggerChanged;

      var getPosition = this.getPositionAccessor(); // point color

      var cScale = colorField && this.getVisChannelScale(colorScale, colorDomain, colorRange.colors.map(_colorUtils.hexToRgb)); // stroke color

      var scScale = strokeColorField && this.getVisChannelScale(strokeColorScale, strokeColorDomain, strokeColorRange.colors.map(_colorUtils.hexToRgb)); // point radius

      var rScale = sizeField && this.getVisChannelScale(sizeScale, sizeDomain, radiusRange, fixedRadius);
      var getRadius = rScale ? function (d) {
        return _this2.getEncodedChannelValue(rScale, d.data, sizeField, 0);
      } : 1;
      var getFillColor = cScale ? function (d) {
        return _this2.getEncodedChannelValue(cScale, d.data, colorField);
      } : color;
      var getLineColor = scScale ? function (d) {
        return _this2.getEncodedChannelValue(scScale, d.data, strokeColorField);
      } : strokeColor || color; // get all distinct characters in the text labels

      var textLabels = (0, _layerTextLabel.formatTextLabelData)({
        textLabel: textLabel,
        triggerChanged: triggerChanged,
        oldLayerData: oldLayerData,
        data: data
      });
      return {
        data: data,
        getPosition: getPosition,
        getFillColor: getFillColor,
        getLineColor: getLineColor,
        getFilterValue: gpuFilter.filterValueAccessor(),
        getRadius: getRadius,
        textLabels: textLabels
      };
    }
    /* eslint-enable complexity */

  }, {
    key: "updateLayerMeta",
    value: function updateLayerMeta(allData) {
      var getPosition = this.getPositionAccessor();
      var bounds = this.getPointsBounds(allData, function (d) {
        return getPosition({
          data: d
        });
      });
      this.updateMeta({
        bounds: bounds
      });
    }
  }, {
    key: "renderLayer",
    value: function renderLayer(opts) {
      var data = opts.data,
          gpuFilter = opts.gpuFilter,
          objectHovered = opts.objectHovered,
          mapState = opts.mapState,
          interactionConfig = opts.interactionConfig;
      var radiusScale = this.getRadiusScaleByZoom(mapState);

      var layerProps = _objectSpread({
        stroked: this.config.visConfig.outline,
        filled: this.config.visConfig.filled,
        lineWidthScale: this.config.visConfig.thickness,
        radiusScale: radiusScale
      }, this.config.visConfig.fixedRadius ? {} : {
        radiusMaxPixels: 500
      });

      var updateTriggers = {
        getPosition: this.config.columns,
        getRadius: {
          sizeField: this.config.sizeField,
          radiusRange: this.config.visConfig.radiusRange,
          fixedRadius: this.config.visConfig.fixedRadius,
          sizeScale: this.config.sizeScale
        },
        getFillColor: {
          color: this.config.color,
          colorField: this.config.colorField,
          colorRange: this.config.visConfig.colorRange,
          colorScale: this.config.colorScale
        },
        getLineColor: {
          color: this.config.visConfig.strokeColor,
          colorField: this.config.strokeColorField,
          colorRange: this.config.visConfig.strokeColorRange,
          colorScale: this.config.strokeColorScale
        },
        getFilterValue: gpuFilter.filterValueUpdateTriggers
      };
      var defaultLayerProps = this.getDefaultDeckLayerProps(opts);
      var brushingProps = this.getBrushingExtensionProps(interactionConfig);
      var getPixelOffset = (0, _layerTextLabel.getTextOffsetByRadius)(radiusScale, data.getRadius, mapState);
      var extensions = [].concat((0, _toConsumableArray2["default"])(defaultLayerProps.extensions), [brushingExtension]);

      var sharedProps = _objectSpread({
        getFilterValue: data.getFilterValue,
        extensions: extensions,
        filterRange: defaultLayerProps.filterRange
      }, brushingProps);

      return [new _layers.ScatterplotLayer(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, defaultLayerProps), brushingProps), layerProps), data), {}, {
        parameters: {
          // circles will be flat on the map when the altitude column is not used
          depthTest: this.config.columns.altitude.fieldIdx > -1
        },
        lineWidthUnits: 'pixels',
        updateTriggers: updateTriggers,
        extensions: extensions
      }))].concat((0, _toConsumableArray2["default"])(this.isLayerHovered(objectHovered) ? [new _layers.ScatterplotLayer(_objectSpread(_objectSpread(_objectSpread({}, this.getDefaultHoverLayerProps()), layerProps), {}, {
        data: [objectHovered.object],
        getLineColor: this.config.highlightColor,
        getFillColor: this.config.highlightColor,
        getRadius: data.getRadius,
        getPosition: data.getPosition
      }))] : []), (0, _toConsumableArray2["default"])(this.renderTextLabelLayer({
        getPosition: data.getPosition,
        sharedProps: sharedProps,
        getPixelOffset: getPixelOffset,
        updateTriggers: updateTriggers
      }, opts)));
    }
  }, {
    key: "type",
    get: function get() {
      return 'point';
    }
  }, {
    key: "isAggregated",
    get: function get() {
      return false;
    }
  }, {
    key: "layerIcon",
    get: function get() {
      return _pointLayerIcon["default"];
    }
  }, {
    key: "requiredLayerColumns",
    get: function get() {
      return pointRequiredColumns;
    }
  }, {
    key: "optionalColumns",
    get: function get() {
      return pointOptionalColumns;
    }
  }, {
    key: "columnPairs",
    get: function get() {
      return this.defaultPointColumnPairs;
    }
  }, {
    key: "noneLayerDataAffectingProps",
    get: function get() {
      return [].concat((0, _toConsumableArray2["default"])((0, _get2["default"])((0, _getPrototypeOf2["default"])(PointLayer.prototype), "noneLayerDataAffectingProps", this)), ['radius']);
    }
  }, {
    key: "visualChannels",
    get: function get() {
      return {
        color: _objectSpread(_objectSpread({}, (0, _get2["default"])((0, _getPrototypeOf2["default"])(PointLayer.prototype), "visualChannels", this).color), {}, {
          condition: function condition(config) {
            return config.visConfig.filled;
          }
        }),
        strokeColor: {
          property: 'strokeColor',
          field: 'strokeColorField',
          scale: 'strokeColorScale',
          domain: 'strokeColorDomain',
          range: 'strokeColorRange',
          key: 'strokeColor',
          channelScaleType: _defaultSettings.CHANNEL_SCALES.color,
          condition: function condition(config) {
            return config.visConfig.outline;
          }
        },
        size: _objectSpread(_objectSpread({}, (0, _get2["default"])((0, _getPrototypeOf2["default"])(PointLayer.prototype), "visualChannels", this).size), {}, {
          range: 'radiusRange',
          property: 'radius',
          channelScaleType: 'radius'
        })
      };
    }
  }], [{
    key: "findDefaultLayerProps",
    value: function findDefaultLayerProps(_ref3) {
      var _ref3$fieldPairs = _ref3.fieldPairs,
          fieldPairs = _ref3$fieldPairs === void 0 ? [] : _ref3$fieldPairs;
      var props = []; // Make layer for each pair

      fieldPairs.forEach(function (pair) {
        // find fields for tableFieldIndex
        var latField = pair.pair.lat;
        var lngField = pair.pair.lng;
        var layerName = pair.defaultName;
        var prop = {
          label: layerName.length ? layerName : 'Point'
        }; // default layer color for begintrip and dropoff point

        if (latField.value in _defaultSettings.DEFAULT_LAYER_COLOR) {
          prop.color = (0, _colorUtils.hexToRgb)(_defaultSettings.DEFAULT_LAYER_COLOR[latField.value]);
        } // set the first layer to be visible


        if (props.length === 0) {
          prop.isVisible = true;
        }

        prop.columns = {
          lat: latField,
          lng: lngField,
          altitude: {
            value: null,
            fieldIdx: -1,
            optional: true
          }
        };
        props.push(prop);
      });
      return {
        props: props
      };
    }
  }]);
  return PointLayer;
}(_baseLayer["default"]);

exports["default"] = PointLayer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9sYXllcnMvcG9pbnQtbGF5ZXIvcG9pbnQtbGF5ZXIuanMiXSwibmFtZXMiOlsicG9pbnRQb3NBY2Nlc3NvciIsImxhdCIsImxuZyIsImFsdGl0dWRlIiwiZCIsImRhdGEiLCJmaWVsZElkeCIsInBvaW50UmVxdWlyZWRDb2x1bW5zIiwicG9pbnRPcHRpb25hbENvbHVtbnMiLCJicnVzaGluZ0V4dGVuc2lvbiIsIkJydXNoaW5nRXh0ZW5zaW9uIiwicG9pbnRWaXNDb25maWdzIiwicmFkaXVzIiwiZml4ZWRSYWRpdXMiLCJvcGFjaXR5Iiwib3V0bGluZSIsInRoaWNrbmVzcyIsInN0cm9rZUNvbG9yIiwiY29sb3JSYW5nZSIsInN0cm9rZUNvbG9yUmFuZ2UiLCJyYWRpdXNSYW5nZSIsImZpbGxlZCIsInR5cGUiLCJsYWJlbCIsImRlZmF1bHRWYWx1ZSIsInByb3BlcnR5IiwiUG9pbnRMYXllciIsInByb3BzIiwicmVnaXN0ZXJWaXNDb25maWciLCJnZXRQb3NpdGlvbkFjY2Vzc29yIiwiY29uZmlnIiwiY29sdW1ucyIsInN0cm9rZUNvbG9yRmllbGQiLCJzdHJva2VDb2xvckRvbWFpbiIsInN0cm9rZUNvbG9yU2NhbGUiLCJnZXRQb3NpdGlvbiIsImFsbERhdGEiLCJmaWx0ZXJlZEluZGV4IiwiaSIsImxlbmd0aCIsImluZGV4IiwicG9zIiwiZXZlcnkiLCJOdW1iZXIiLCJpc0Zpbml0ZSIsInB1c2giLCJwb3NpdGlvbiIsImRhdGFzZXRzIiwib2xkTGF5ZXJEYXRhIiwiY29sb3JTY2FsZSIsImNvbG9yRG9tYWluIiwiY29sb3JGaWVsZCIsImNvbG9yIiwic2l6ZUZpZWxkIiwic2l6ZVNjYWxlIiwic2l6ZURvbWFpbiIsInRleHRMYWJlbCIsInZpc0NvbmZpZyIsImdwdUZpbHRlciIsImRhdGFJZCIsInVwZGF0ZURhdGEiLCJ0cmlnZ2VyQ2hhbmdlZCIsImNTY2FsZSIsImdldFZpc0NoYW5uZWxTY2FsZSIsImNvbG9ycyIsIm1hcCIsImhleFRvUmdiIiwic2NTY2FsZSIsInJTY2FsZSIsImdldFJhZGl1cyIsImdldEVuY29kZWRDaGFubmVsVmFsdWUiLCJnZXRGaWxsQ29sb3IiLCJnZXRMaW5lQ29sb3IiLCJ0ZXh0TGFiZWxzIiwiZ2V0RmlsdGVyVmFsdWUiLCJmaWx0ZXJWYWx1ZUFjY2Vzc29yIiwiYm91bmRzIiwiZ2V0UG9pbnRzQm91bmRzIiwidXBkYXRlTWV0YSIsIm9wdHMiLCJvYmplY3RIb3ZlcmVkIiwibWFwU3RhdGUiLCJpbnRlcmFjdGlvbkNvbmZpZyIsInJhZGl1c1NjYWxlIiwiZ2V0UmFkaXVzU2NhbGVCeVpvb20iLCJsYXllclByb3BzIiwic3Ryb2tlZCIsImxpbmVXaWR0aFNjYWxlIiwicmFkaXVzTWF4UGl4ZWxzIiwidXBkYXRlVHJpZ2dlcnMiLCJmaWx0ZXJWYWx1ZVVwZGF0ZVRyaWdnZXJzIiwiZGVmYXVsdExheWVyUHJvcHMiLCJnZXREZWZhdWx0RGVja0xheWVyUHJvcHMiLCJicnVzaGluZ1Byb3BzIiwiZ2V0QnJ1c2hpbmdFeHRlbnNpb25Qcm9wcyIsImdldFBpeGVsT2Zmc2V0IiwiZXh0ZW5zaW9ucyIsInNoYXJlZFByb3BzIiwiZmlsdGVyUmFuZ2UiLCJTY2F0dGVycGxvdExheWVyIiwicGFyYW1ldGVycyIsImRlcHRoVGVzdCIsImxpbmVXaWR0aFVuaXRzIiwiaXNMYXllckhvdmVyZWQiLCJnZXREZWZhdWx0SG92ZXJMYXllclByb3BzIiwib2JqZWN0IiwiaGlnaGxpZ2h0Q29sb3IiLCJyZW5kZXJUZXh0TGFiZWxMYXllciIsIlBvaW50TGF5ZXJJY29uIiwiZGVmYXVsdFBvaW50Q29sdW1uUGFpcnMiLCJjb25kaXRpb24iLCJmaWVsZCIsInNjYWxlIiwiZG9tYWluIiwicmFuZ2UiLCJrZXkiLCJjaGFubmVsU2NhbGVUeXBlIiwiQ0hBTk5FTF9TQ0FMRVMiLCJzaXplIiwiZmllbGRQYWlycyIsImZvckVhY2giLCJwYWlyIiwibGF0RmllbGQiLCJsbmdGaWVsZCIsImxheWVyTmFtZSIsImRlZmF1bHROYW1lIiwicHJvcCIsInZhbHVlIiwiREVGQVVMVF9MQVlFUl9DT0xPUiIsImlzVmlzaWJsZSIsIm9wdGlvbmFsIiwiTGF5ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUFFTyxJQUFNQSxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CO0FBQUEsTUFBRUMsR0FBRixRQUFFQSxHQUFGO0FBQUEsTUFBT0MsR0FBUCxRQUFPQSxHQUFQO0FBQUEsTUFBWUMsUUFBWixRQUFZQSxRQUFaO0FBQUEsU0FBMEIsVUFBQUMsQ0FBQztBQUFBLFdBQUksQ0FDN0Q7QUFDQUEsSUFBQUEsQ0FBQyxDQUFDQyxJQUFGLENBQU9ILEdBQUcsQ0FBQ0ksUUFBWCxDQUY2RCxFQUc3RDtBQUNBRixJQUFBQSxDQUFDLENBQUNDLElBQUYsQ0FBT0osR0FBRyxDQUFDSyxRQUFYLENBSjZELEVBSzdESCxRQUFRLElBQUlBLFFBQVEsQ0FBQ0csUUFBVCxHQUFvQixDQUFDLENBQWpDLEdBQXFDRixDQUFDLENBQUNDLElBQUYsQ0FBT0YsUUFBUSxDQUFDRyxRQUFoQixDQUFyQyxHQUFpRSxDQUxKLENBQUo7QUFBQSxHQUEzQjtBQUFBLENBQXpCOzs7QUFRQSxJQUFNQyxvQkFBb0IsR0FBRyxDQUFDLEtBQUQsRUFBUSxLQUFSLENBQTdCOztBQUNBLElBQU1DLG9CQUFvQixHQUFHLENBQUMsVUFBRCxDQUE3Qjs7QUFFUCxJQUFNQyxpQkFBaUIsR0FBRyxJQUFJQyw2QkFBSixFQUExQjtBQUVPLElBQU1DLGVBQWUsR0FBRztBQUM3QkMsRUFBQUEsTUFBTSxFQUFFLFFBRHFCO0FBRTdCQyxFQUFBQSxXQUFXLEVBQUUsYUFGZ0I7QUFHN0JDLEVBQUFBLE9BQU8sRUFBRSxTQUhvQjtBQUk3QkMsRUFBQUEsT0FBTyxFQUFFLFNBSm9CO0FBSzdCQyxFQUFBQSxTQUFTLEVBQUUsV0FMa0I7QUFNN0JDLEVBQUFBLFdBQVcsRUFBRSxhQU5n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RUE5RnFDd0cscUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQge0JydXNoaW5nRXh0ZW5zaW9ufSBmcm9tICdAZGVjay5nbC9leHRlbnNpb25zJztcclxuaW1wb3J0IHtTY2F0dGVycGxvdExheWVyfSBmcm9tICdAZGVjay5nbC9sYXllcnMnO1xyXG5cclxuaW1wb3J0IExheWVyIGZyb20gJy4uL2Jhc2UtbGF5ZXInO1xyXG5pbXBvcnQge2hleFRvUmdifSBmcm9tICd1dGlscy9jb2xvci11dGlscyc7XHJcbmltcG9ydCBQb2ludExheWVySWNvbiBmcm9tICcuL3BvaW50LWxheWVyLWljb24nO1xyXG5pbXBvcnQge0RFRkFVTFRfTEFZRVJfQ09MT1IsIENIQU5ORUxfU0NBTEVTfSBmcm9tICdjb25zdGFudHMvZGVmYXVsdC1zZXR0aW5ncyc7XHJcblxyXG5pbXBvcnQge2dldFRleHRPZmZzZXRCeVJhZGl1cywgZm9ybWF0VGV4dExhYmVsRGF0YX0gZnJvbSAnLi4vbGF5ZXItdGV4dC1sYWJlbCc7XHJcblxyXG5leHBvcnQgY29uc3QgcG9pbnRQb3NBY2Nlc3NvciA9ICh7bGF0LCBsbmcsIGFsdGl0dWRlfSkgPT4gZCA9PiBbXHJcbiAgLy8gbG5nXHJcbiAgZC5kYXRhW2xuZy5maWVsZElkeF0sXHJcbiAgLy8gbGF0XHJcbiAgZC5kYXRhW2xhdC5maWVsZElkeF0sXHJcbiAgYWx0aXR1ZGUgJiYgYWx0aXR1ZGUuZmllbGRJZHggPiAtMSA/IGQuZGF0YVthbHRpdHVkZS5maWVsZElkeF0gOiAwXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgcG9pbnRSZXF1aXJlZENvbHVtbnMgPSBbJ2xhdCcsICdsbmcnXTtcclxuZXhwb3J0IGNvbnN0IHBvaW50T3B0aW9uYWxDb2x1bW5zID0gWydhbHRpdHVkZSddO1xyXG5cclxuY29uc3QgYnJ1c2hpbmdFeHRlbnNpb24gPSBuZXcgQnJ1c2hpbmdFeHRlbnNpb24oKTtcclxuXHJcbmV4cG9ydCBjb25zdCBwb2ludFZpc0NvbmZpZ3MgPSB7XHJcbiAgcmFkaXVzOiAncmFkaXVzJyxcclxuICBmaXhlZFJhZGl1czogJ2ZpeGVkUmFkaXVzJyxcclxuICBvcGFjaXR5OiAnb3BhY2l0eScsXHJcbiAgb3V0bGluZTogJ291dGxpbmUnLFxyXG4gIHRoaWNrbmVzczogJ3RoaWNrbmVzcycsXHJcbiAgc3Ryb2tlQ29sb3I6ICdzdHJva2VDb2xvcicsXHJcbiAgY29sb3JSYW5nZTogJ2NvbG9yUmFuZ2UnLFxyXG4gIHN0cm9rZUNvbG9yUmFuZ2U6ICdzdHJva2VDb2xvclJhbmdlJyxcclxuICByYWRpdXNSYW5nZTogJ3JhZGl1c1JhbmdlJyxcclxuICBmaWxsZWQ6IHtcclxuICAgIHR5cGU6ICdib29sZWFuJyxcclxuICAgIGxhYmVsOiAnbGF5ZXIuZmlsbENvbG9yJyxcclxuICAgIGRlZmF1bHRWYWx1ZTogdHJ1ZSxcclxuICAgIHByb3BlcnR5OiAnZmlsbGVkJ1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvaW50TGF5ZXIgZXh0ZW5kcyBMYXllciB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICB0aGlzLnJlZ2lzdGVyVmlzQ29uZmlnKHBvaW50VmlzQ29uZmlncyk7XHJcbiAgICB0aGlzLmdldFBvc2l0aW9uQWNjZXNzb3IgPSAoKSA9PiBwb2ludFBvc0FjY2Vzc29yKHRoaXMuY29uZmlnLmNvbHVtbnMpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHR5cGUoKSB7XHJcbiAgICByZXR1cm4gJ3BvaW50JztcclxuICB9XHJcblxyXG4gIGdldCBpc0FnZ3JlZ2F0ZWQoKSB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBnZXQgbGF5ZXJJY29uKCkge1xyXG4gICAgcmV0dXJuIFBvaW50TGF5ZXJJY29uO1xyXG4gIH1cclxuICBnZXQgcmVxdWlyZWRMYXllckNvbHVtbnMoKSB7XHJcbiAgICByZXR1cm4gcG9pbnRSZXF1aXJlZENvbHVtbnM7XHJcbiAgfVxyXG5cclxuICBnZXQgb3B0aW9uYWxDb2x1bW5zKCkge1xyXG4gICAgcmV0dXJuIHBvaW50T3B0aW9uYWxDb2x1bW5zO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGNvbHVtblBhaXJzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZGVmYXVsdFBvaW50Q29sdW1uUGFpcnM7XHJcbiAgfVxyXG5cclxuICBnZXQgbm9uZUxheWVyRGF0YUFmZmVjdGluZ1Byb3BzKCkge1xyXG4gICAgcmV0dXJuIFsuLi5zdXBlci5ub25lTGF5ZXJEYXRhQWZmZWN0aW5nUHJvcHMsICdyYWRpdXMnXTtcclxuICB9XHJcblxyXG4gIGdldCB2aXN1YWxDaGFubmVscygpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGNvbG9yOiB7XHJcbiAgICAgICAgLi4uc3VwZXIudmlzdWFsQ2hhbm5lbHMuY29sb3IsXHJcbiAgICAgICAgY29uZGl0aW9uOiBjb25maWcgPT4gY29uZmlnLnZpc0NvbmZpZy5maWxsZWRcclxuICAgICAgfSxcclxuICAgICAgc3Ryb2tlQ29sb3I6IHtcclxuICAgICAgICBwcm9wZXJ0eTogJ3N0cm9rZUNvbG9yJyxcclxuICAgICAgICBmaWVsZDogJ3N0cm9rZUNvbG9yRmllbGQnLFxyXG4gICAgICAgIHNjYWxlOiAnc3Ryb2tlQ29sb3JTY2FsZScsXHJcbiAgICAgICAgZG9tYWluOiAnc3Ryb2tlQ29sb3JEb21haW4nLFxyXG4gICAgICAgIHJhbmdlOiAnc3Ryb2tlQ29sb3JSYW5nZScsXHJcbiAgICAgICAga2V5OiAnc3Ryb2tlQ29sb3InLFxyXG4gICAgICAgIGNoYW5uZWxTY2FsZVR5cGU6IENIQU5ORUxfU0NBTEVTLmNvbG9yLFxyXG4gICAgICAgIGNvbmRpdGlvbjogY29uZmlnID0+IGNvbmZpZy52aXNDb25maWcub3V0bGluZVxyXG4gICAgICB9LFxyXG4gICAgICBzaXplOiB7XHJcbiAgICAgICAgLi4uc3VwZXIudmlzdWFsQ2hhbm5lbHMuc2l6ZSxcclxuICAgICAgICByYW5nZTogJ3JhZGl1c1JhbmdlJyxcclxuICAgICAgICBwcm9wZXJ0eTogJ3JhZGl1cycsXHJcbiAgICAgICAgY2hhbm5lbFNjYWxlVHlwZTogJ3JhZGl1cydcclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBmaW5kRGVmYXVsdExheWVyUHJvcHMoe2ZpZWxkUGFpcnMgPSBbXX0pIHtcclxuICAgIGNvbnN0IHByb3BzID0gW107XHJcblxyXG4gICAgLy8gTWFrZSBsYXllciBmb3IgZWFjaCBwYWlyXHJcbiAgICBmaWVsZFBhaXJzLmZvckVhY2gocGFpciA9PiB7XHJcbiAgICAgIC8vIGZpbmQgZmllbGRzIGZvciB0YWJsZUZpZWxkSW5kZXhcclxuICAgICAgY29uc3QgbGF0RmllbGQgPSBwYWlyLnBhaXIubGF0O1xyXG4gICAgICBjb25zdCBsbmdGaWVsZCA9IHBhaXIucGFpci5sbmc7XHJcbiAgICAgIGNvbnN0IGxheWVyTmFtZSA9IHBhaXIuZGVmYXVsdE5hbWU7XHJcblxyXG4gICAgICBjb25zdCBwcm9wID0ge1xyXG4gICAgICAgIGxhYmVsOiBsYXllck5hbWUubGVuZ3RoID8gbGF5ZXJOYW1lIDogJ1BvaW50J1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgLy8gZGVmYXVsdCBsYXllciBjb2xvciBmb3IgYmVnaW50cmlwIGFuZCBkcm9wb2ZmIHBvaW50XHJcbiAgICAgIGlmIChsYXRGaWVsZC52YWx1ZSBpbiBERUZBVUxUX0xBWUVSX0NPTE9SKSB7XHJcbiAgICAgICAgcHJvcC5jb2xvciA9IGhleFRvUmdiKERFRkFVTFRfTEFZRVJfQ09MT1JbbGF0RmllbGQudmFsdWVdKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gc2V0IHRoZSBmaXJzdCBsYXllciB0byBiZSB2aXNpYmxlXHJcbiAgICAgIGlmIChwcm9wcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICBwcm9wLmlzVmlzaWJsZSA9IHRydWU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHByb3AuY29sdW1ucyA9IHtcclxuICAgICAgICBsYXQ6IGxhdEZpZWxkLFxyXG4gICAgICAgIGxuZzogbG5nRmllbGQsXHJcbiAgICAgICAgYWx0aXR1ZGU6IHt2YWx1ZTogbnVsbCwgZmllbGRJZHg6IC0xLCBvcHRpb25hbDogdHJ1ZX1cclxuICAgICAgfTtcclxuXHJcbiAgICAgIHByb3BzLnB1c2gocHJvcCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4ge3Byb3BzfTtcclxuICB9XHJcblxyXG4gIGdldERlZmF1bHRMYXllckNvbmZpZyhwcm9wcyA9IHt9KSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAuLi5zdXBlci5nZXREZWZhdWx0TGF5ZXJDb25maWcocHJvcHMpLFxyXG5cclxuICAgICAgLy8gYWRkIHN0cm9rZSBjb2xvciB2aXN1YWwgY2hhbm5lbFxyXG4gICAgICBzdHJva2VDb2xvckZpZWxkOiBudWxsLFxyXG4gICAgICBzdHJva2VDb2xvckRvbWFpbjogWzAsIDFdLFxyXG4gICAgICBzdHJva2VDb2xvclNjYWxlOiAncXVhbnRpbGUnXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgY2FsY3VsYXRlRGF0YUF0dHJpYnV0ZSh7YWxsRGF0YSwgZmlsdGVyZWRJbmRleH0sIGdldFBvc2l0aW9uKSB7XHJcbiAgICBjb25zdCBkYXRhID0gW107XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWx0ZXJlZEluZGV4Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IGluZGV4ID0gZmlsdGVyZWRJbmRleFtpXTtcclxuICAgICAgY29uc3QgcG9zID0gZ2V0UG9zaXRpb24oe2RhdGE6IGFsbERhdGFbaW5kZXhdfSk7XHJcblxyXG4gICAgICAvLyBpZiBkb2Vzbid0IGhhdmUgcG9pbnQgbGF0IG9yIGxuZywgZG8gbm90IGFkZCB0aGUgcG9pbnRcclxuICAgICAgLy8gZGVjay5nbCBjYW4ndCBoYW5kbGUgcG9zaXRpb24gPSBudWxsXHJcbiAgICAgIGlmIChwb3MuZXZlcnkoTnVtYmVyLmlzRmluaXRlKSkge1xyXG4gICAgICAgIGRhdGEucHVzaCh7XHJcbiAgICAgICAgICBkYXRhOiBhbGxEYXRhW2luZGV4XSxcclxuICAgICAgICAgIHBvc2l0aW9uOiBwb3MsXHJcbiAgICAgICAgICAvLyBpbmRleCBpcyBpbXBvcnRhbnQgZm9yIGZpbHRlclxyXG4gICAgICAgICAgaW5kZXhcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGRhdGE7XHJcbiAgfVxyXG5cclxuICBmb3JtYXRMYXllckRhdGEoZGF0YXNldHMsIG9sZExheWVyRGF0YSkge1xyXG4gICAgY29uc3Qge1xyXG4gICAgICBjb2xvclNjYWxlLFxyXG4gICAgICBjb2xvckRvbWFpbixcclxuICAgICAgY29sb3JGaWVsZCxcclxuICAgICAgc3Ryb2tlQ29sb3JGaWVsZCxcclxuICAgICAgc3Ryb2tlQ29sb3JTY2FsZSxcclxuICAgICAgc3Ryb2tlQ29sb3JEb21haW4sXHJcbiAgICAgIGNvbG9yLFxyXG4gICAgICBzaXplRmllbGQsXHJcbiAgICAgIHNpemVTY2FsZSxcclxuICAgICAgc2l6ZURvbWFpbixcclxuICAgICAgdGV4dExhYmVsLFxyXG4gICAgICB2aXNDb25maWc6IHtyYWRpdXNSYW5nZSwgZml4ZWRSYWRpdXMsIGNvbG9yUmFuZ2UsIHN0cm9rZUNvbG9yUmFuZ2UsIHN0cm9rZUNvbG9yfVxyXG4gICAgfSA9IHRoaXMuY29uZmlnO1xyXG5cclxuICAgIGNvbnN0IHtncHVGaWx0ZXJ9ID0gZGF0YXNldHNbdGhpcy5jb25maWcuZGF0YUlkXTtcclxuICAgIGNvbnN0IHtkYXRhLCB0cmlnZ2VyQ2hhbmdlZH0gPSB0aGlzLnVwZGF0ZURhdGEoZGF0YXNldHMsIG9sZExheWVyRGF0YSk7XHJcbiAgICBjb25zdCBnZXRQb3NpdGlvbiA9IHRoaXMuZ2V0UG9zaXRpb25BY2Nlc3NvcigpO1xyXG4gICAgLy8gcG9pbnQgY29sb3JcclxuXHJcbiAgICBjb25zdCBjU2NhbGUgPVxyXG4gICAgICBjb2xvckZpZWxkICYmXHJcbiAgICAgIHRoaXMuZ2V0VmlzQ2hhbm5lbFNjYWxlKGNvbG9yU2NhbGUsIGNvbG9yRG9tYWluLCBjb2xvclJhbmdlLmNvbG9ycy5tYXAoaGV4VG9SZ2IpKTtcclxuXHJcbiAgICAvLyBzdHJva2UgY29sb3JcclxuICAgIGNvbnN0IHNjU2NhbGUgPVxyXG4gICAgICBzdHJva2VDb2xvckZpZWxkICYmXHJcbiAgICAgIHRoaXMuZ2V0VmlzQ2hhbm5lbFNjYWxlKFxyXG4gICAgICAgIHN0cm9rZUNvbG9yU2NhbGUsXHJcbiAgICAgICAgc3Ryb2tlQ29sb3JEb21haW4sXHJcbiAgICAgICAgc3Ryb2tlQ29sb3JSYW5nZS5jb2xvcnMubWFwKGhleFRvUmdiKVxyXG4gICAgICApO1xyXG5cclxuICAgIC8vIHBvaW50IHJhZGl1c1xyXG4gICAgY29uc3QgclNjYWxlID1cclxuICAgICAgc2l6ZUZpZWxkICYmIHRoaXMuZ2V0VmlzQ2hhbm5lbFNjYWxlKHNpemVTY2FsZSwgc2l6ZURvbWFpbiwgcmFkaXVzUmFuZ2UsIGZpeGVkUmFkaXVzKTtcclxuXHJcbiAgICBjb25zdCBnZXRSYWRpdXMgPSByU2NhbGUgPyBkID0+IHRoaXMuZ2V0RW5jb2RlZENoYW5uZWxWYWx1ZShyU2NhbGUsIGQuZGF0YSwgc2l6ZUZpZWxkLCAwKSA6IDE7XHJcblxyXG4gICAgY29uc3QgZ2V0RmlsbENvbG9yID0gY1NjYWxlXHJcbiAgICAgID8gZCA9PiB0aGlzLmdldEVuY29kZWRDaGFubmVsVmFsdWUoY1NjYWxlLCBkLmRhdGEsIGNvbG9yRmllbGQpXHJcbiAgICAgIDogY29sb3I7XHJcblxyXG4gICAgY29uc3QgZ2V0TGluZUNvbG9yID0gc2NTY2FsZVxyXG4gICAgICA/IGQgPT4gdGhpcy5nZXRFbmNvZGVkQ2hhbm5lbFZhbHVlKHNjU2NhbGUsIGQuZGF0YSwgc3Ryb2tlQ29sb3JGaWVsZClcclxuICAgICAgOiBzdHJva2VDb2xvciB8fCBjb2xvcjtcclxuXHJcbiAgICAvLyBnZXQgYWxsIGRpc3RpbmN0IGNoYXJhY3RlcnMgaW4gdGhlIHRleHQgbGFiZWxzXHJcbiAgICBjb25zdCB0ZXh0TGFiZWxzID0gZm9ybWF0VGV4dExhYmVsRGF0YSh7XHJcbiAgICAgIHRleHRMYWJlbCxcclxuICAgICAgdHJpZ2dlckNoYW5nZWQsXHJcbiAgICAgIG9sZExheWVyRGF0YSxcclxuICAgICAgZGF0YVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgZGF0YSxcclxuICAgICAgZ2V0UG9zaXRpb24sXHJcbiAgICAgIGdldEZpbGxDb2xvcixcclxuICAgICAgZ2V0TGluZUNvbG9yLFxyXG4gICAgICBnZXRGaWx0ZXJWYWx1ZTogZ3B1RmlsdGVyLmZpbHRlclZhbHVlQWNjZXNzb3IoKSxcclxuICAgICAgZ2V0UmFkaXVzLFxyXG4gICAgICB0ZXh0TGFiZWxzXHJcbiAgICB9O1xyXG4gIH1cclxuICAvKiBlc2xpbnQtZW5hYmxlIGNvbXBsZXhpdHkgKi9cclxuXHJcbiAgdXBkYXRlTGF5ZXJNZXRhKGFsbERhdGEpIHtcclxuICAgIGNvbnN0IGdldFBvc2l0aW9uID0gdGhpcy5nZXRQb3NpdGlvbkFjY2Vzc29yKCk7XHJcbiAgICBjb25zdCBib3VuZHMgPSB0aGlzLmdldFBvaW50c0JvdW5kcyhhbGxEYXRhLCBkID0+IGdldFBvc2l0aW9uKHtkYXRhOiBkfSkpO1xyXG4gICAgdGhpcy51cGRhdGVNZXRhKHtib3VuZHN9KTtcclxuICB9XHJcblxyXG4gIHJlbmRlckxheWVyKG9wdHMpIHtcclxuICAgIGNvbnN0IHtkYXRhLCBncHVGaWx0ZXIsIG9iamVjdEhvdmVyZWQsIG1hcFN0YXRlLCBpbnRlcmFjdGlvbkNvbmZpZ30gPSBvcHRzO1xyXG5cclxuICAgIGNvbnN0IHJhZGl1c1NjYWxlID0gdGhpcy5nZXRSYWRpdXNTY2FsZUJ5Wm9vbShtYXBTdGF0ZSk7XHJcblxyXG4gICAgY29uc3QgbGF5ZXJQcm9wcyA9IHtcclxuICAgICAgc3Ryb2tlZDogdGhpcy5jb25maWcudmlzQ29uZmlnLm91dGxpbmUsXHJcbiAgICAgIGZpbGxlZDogdGhpcy5jb25maWcudmlzQ29uZmlnLmZpbGxlZCxcclxuICAgICAgbGluZVdpZHRoU2NhbGU6IHRoaXMuY29uZmlnLnZpc0NvbmZpZy50aGlja25lc3MsXHJcbiAgICAgIHJhZGl1c1NjYWxlLFxyXG4gICAgICAuLi4odGhpcy5jb25maWcudmlzQ29uZmlnLmZpeGVkUmFkaXVzID8ge30gOiB7cmFkaXVzTWF4UGl4ZWxzOiA1MDB9KVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCB1cGRhdGVUcmlnZ2VycyA9IHtcclxuICAgICAgZ2V0UG9zaXRpb246IHRoaXMuY29uZmlnLmNvbHVtbnMsXHJcbiAgICAgIGdldFJhZGl1czoge1xyXG4gICAgICAgIHNpemVGaWVsZDogdGhpcy5jb25maWcuc2l6ZUZpZWxkLFxyXG4gICAgICAgIHJhZGl1c1JhbmdlOiB0aGlzLmNvbmZpZy52aXNDb25maWcucmFkaXVzUmFuZ2UsXHJcbiAgICAgICAgZml4ZWRSYWRpdXM6IHRoaXMuY29uZmlnLnZpc0NvbmZpZy5maXhlZFJhZGl1cyxcclxuICAgICAgICBzaXplU2NhbGU6IHRoaXMuY29uZmlnLnNpemVTY2FsZVxyXG4gICAgICB9LFxyXG4gICAgICBnZXRGaWxsQ29sb3I6IHtcclxuICAgICAgICBjb2xvcjogdGhpcy5jb25maWcuY29sb3IsXHJcbiAgICAgICAgY29sb3JGaWVsZDogdGhpcy5jb25maWcuY29sb3JGaWVsZCxcclxuICAgICAgICBjb2xvclJhbmdlOiB0aGlzLmNvbmZpZy52aXNDb25maWcuY29sb3JSYW5nZSxcclxuICAgICAgICBjb2xvclNjYWxlOiB0aGlzLmNvbmZpZy5jb2xvclNjYWxlXHJcbiAgICAgIH0sXHJcbiAgICAgIGdldExpbmVDb2xvcjoge1xyXG4gICAgICAgIGNvbG9yOiB0aGlzLmNvbmZpZy52aXNDb25maWcuc3Ryb2tlQ29sb3IsXHJcbiAgICAgICAgY29sb3JGaWVsZDogdGhpcy5jb25maWcuc3Ryb2tlQ29sb3JGaWVsZCxcclxuICAgICAgICBjb2xvclJhbmdlOiB0aGlzLmNvbmZpZy52aXNDb25maWcuc3Ryb2tlQ29sb3JSYW5nZSxcclxuICAgICAgICBjb2xvclNjYWxlOiB0aGlzLmNvbmZpZy5zdHJva2VDb2xvclNjYWxlXHJcbiAgICAgIH0sXHJcbiAgICAgIGdldEZpbHRlclZhbHVlOiBncHVGaWx0ZXIuZmlsdGVyVmFsdWVVcGRhdGVUcmlnZ2Vyc1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBkZWZhdWx0TGF5ZXJQcm9wcyA9IHRoaXMuZ2V0RGVmYXVsdERlY2tMYXllclByb3BzKG9wdHMpO1xyXG4gICAgY29uc3QgYnJ1c2hpbmdQcm9wcyA9IHRoaXMuZ2V0QnJ1c2hpbmdFeHRlbnNpb25Qcm9wcyhpbnRlcmFjdGlvbkNvbmZpZyk7XHJcbiAgICBjb25zdCBnZXRQaXhlbE9mZnNldCA9IGdldFRleHRPZmZzZXRCeVJhZGl1cyhyYWRpdXNTY2FsZSwgZGF0YS5nZXRSYWRpdXMsIG1hcFN0YXRlKTtcclxuICAgIGNvbnN0IGV4dGVuc2lvbnMgPSBbLi4uZGVmYXVsdExheWVyUHJvcHMuZXh0ZW5zaW9ucywgYnJ1c2hpbmdFeHRlbnNpb25dO1xyXG5cclxuICAgIGNvbnN0IHNoYXJlZFByb3BzID0ge1xyXG4gICAgICBnZXRGaWx0ZXJWYWx1ZTogZGF0YS5nZXRGaWx0ZXJWYWx1ZSxcclxuICAgICAgZXh0ZW5zaW9ucyxcclxuICAgICAgZmlsdGVyUmFuZ2U6IGRlZmF1bHRMYXllclByb3BzLmZpbHRlclJhbmdlLFxyXG4gICAgICAuLi5icnVzaGluZ1Byb3BzXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiBbXHJcbiAgICAgIG5ldyBTY2F0dGVycGxvdExheWVyKHtcclxuICAgICAgICAuLi5kZWZhdWx0TGF5ZXJQcm9wcyxcclxuICAgICAgICAuLi5icnVzaGluZ1Byb3BzLFxyXG4gICAgICAgIC4uLmxheWVyUHJvcHMsXHJcbiAgICAgICAgLi4uZGF0YSxcclxuICAgICAgICBwYXJhbWV0ZXJzOiB7XHJcbiAgICAgICAgICAvLyBjaXJjbGVzIHdpbGwgYmUgZmxhdCBvbiB0aGUgbWFwIHdoZW4gdGhlIGFsdGl0dWRlIGNvbHVtbiBpcyBub3QgdXNlZFxyXG4gICAgICAgICAgZGVwdGhUZXN0OiB0aGlzLmNvbmZpZy5jb2x1bW5zLmFsdGl0dWRlLmZpZWxkSWR4ID4gLTFcclxuICAgICAgICB9LFxyXG4gICAgICAgIGxpbmVXaWR0aFVuaXRzOiAncGl4ZWxzJyxcclxuICAgICAgICB1cGRhdGVUcmlnZ2VycyxcclxuICAgICAgICBleHRlbnNpb25zXHJcbiAgICAgIH0pLFxyXG4gICAgICAvLyBob3ZlciBsYXllclxyXG4gICAgICAuLi4odGhpcy5pc0xheWVySG92ZXJlZChvYmplY3RIb3ZlcmVkKVxyXG4gICAgICAgID8gW1xyXG4gICAgICAgICAgICBuZXcgU2NhdHRlcnBsb3RMYXllcih7XHJcbiAgICAgICAgICAgICAgLi4udGhpcy5nZXREZWZhdWx0SG92ZXJMYXllclByb3BzKCksXHJcbiAgICAgICAgICAgICAgLi4ubGF5ZXJQcm9wcyxcclxuICAgICAgICAgICAgICBkYXRhOiBbb2JqZWN0SG92ZXJlZC5vYmplY3RdLFxyXG4gICAgICAgICAgICAgIGdldExpbmVDb2xvcjogdGhpcy5jb25maWcuaGlnaGxpZ2h0Q29sb3IsXHJcbiAgICAgICAgICAgICAgZ2V0RmlsbENvbG9yOiB0aGlzLmNvbmZpZy5oaWdobGlnaHRDb2xvcixcclxuICAgICAgICAgICAgICBnZXRSYWRpdXM6IGRhdGEuZ2V0UmFkaXVzLFxyXG4gICAgICAgICAgICAgIGdldFBvc2l0aW9uOiBkYXRhLmdldFBvc2l0aW9uXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICBdXHJcbiAgICAgICAgOiBbXSksXHJcbiAgICAgIC8vIHRleHQgbGFiZWwgbGF5ZXJcclxuICAgICAgLi4udGhpcy5yZW5kZXJUZXh0TGFiZWxMYXllcihcclxuICAgICAgICB7XHJcbiAgICAgICAgICBnZXRQb3NpdGlvbjogZGF0YS5nZXRQb3NpdGlvbixcclxuICAgICAgICAgIHNoYXJlZFByb3BzLFxyXG4gICAgICAgICAgZ2V0UGl4ZWxPZmZzZXQsXHJcbiAgICAgICAgICB1cGRhdGVUcmlnZ2Vyc1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb3B0c1xyXG4gICAgICApXHJcbiAgICBdO1xyXG4gIH1cclxufVxyXG4iXX0=