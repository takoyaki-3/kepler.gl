"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.aggregateRequiredColumns = exports.getFilterDataFunc = exports.getValueAggrFunc = exports.pointPosResolver = exports.pointPosAccessor = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _get2 = _interopRequireDefault(require("@babel/runtime/helpers/get"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _lodash = _interopRequireDefault(require("lodash.memoize"));

var _baseLayer = _interopRequireDefault(require("./base-layer"));

var _colorUtils = require("../utils/color-utils");

var _aggregateUtils = require("../utils/aggregate-utils");

var _defaultSettings = require("../constants/default-settings");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var pointPosAccessor = function pointPosAccessor(_ref) {
  var lat = _ref.lat,
      lng = _ref.lng;
  return function (d) {
    return [d.data[lng.fieldIdx], d.data[lat.fieldIdx]];
  };
};

exports.pointPosAccessor = pointPosAccessor;

var pointPosResolver = function pointPosResolver(_ref2) {
  var lat = _ref2.lat,
      lng = _ref2.lng;
  return "".concat(lat.fieldIdx, "-").concat(lng.fieldIdx);
};

exports.pointPosResolver = pointPosResolver;

var getValueAggrFunc = function getValueAggrFunc(field, aggregation) {
  return function (points) {
    return field ? (0, _aggregateUtils.aggregate)(points.map(function (p) {
      return p.data[field.tableFieldIndex - 1];
    }), aggregation) : points.length;
  };
};

exports.getValueAggrFunc = getValueAggrFunc;

var getFilterDataFunc = function getFilterDataFunc(filterRange, getFilterValue) {
  return function (pt) {
    return getFilterValue(pt).every(function (val, i) {
      return val >= filterRange[i][0] && val <= filterRange[i][1];
    });
  };
};

exports.getFilterDataFunc = getFilterDataFunc;

var getLayerColorRange = function getLayerColorRange(colorRange) {
  return colorRange.colors.map(_colorUtils.hexToRgb);
};

var aggregateRequiredColumns = ['lat', 'lng'];
exports.aggregateRequiredColumns = aggregateRequiredColumns;

var AggregationLayer = /*#__PURE__*/function (_Layer) {
  (0, _inherits2["default"])(AggregationLayer, _Layer);

  var _super = _createSuper(AggregationLayer);

  function AggregationLayer(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, AggregationLayer);
    _this = _super.call(this, props);

    _this.getPositionAccessor = function () {
      return pointPosAccessor(_this.config.columns);
    };

    _this.getColorRange = (0, _lodash["default"])(getLayerColorRange);
    return _this;
  }

  (0, _createClass2["default"])(AggregationLayer, [{
    key: "getVisualChannelDescription",

    /**
     * Get the description of a visualChannel config
     * @param key
     * @returns {{label: string, measure: (string|string)}}
     */
    value: function getVisualChannelDescription(key) {
      // e.g. label: Color, measure: Average of ETA
      var _this$visualChannels$ = this.visualChannels[key],
          range = _this$visualChannels$.range,
          field = _this$visualChannels$.field,
          defaultMeasure = _this$visualChannels$.defaultMeasure,
          aggregation = _this$visualChannels$.aggregation;
      return {
        label: this.visConfigSettings[range].label,
        measure: this.config[field] ? "".concat(this.config.visConfig[aggregation], " of ").concat(this.config[field].name) : defaultMeasure
      };
    }
  }, {
    key: "getHoverData",
    value: function getHoverData(object) {
      // return aggregated object
      return object;
    }
    /**
     * Aggregation layer handles visual channel aggregation inside deck.gl layer
     */

  }, {
    key: "updateLayerVisualChannel",
    value: function updateLayerVisualChannel(_ref3, channel) {
      var data = _ref3.data,
          allData = _ref3.allData;
      this.validateVisualChannel(channel);
    }
    /**
     * Validate aggregation type on top of basic layer visual channel validation
     * @param channel
     */

  }, {
    key: "validateVisualChannel",
    value: function validateVisualChannel(channel) {
      // field type decides aggregation type decides scale type
      this.validateFieldType(channel);
      this.validateAggregationType(channel);
      this.validateScale(channel);
    }
    /**
     * Validate aggregation type based on selected field
     */

  }, {
    key: "validateAggregationType",
    value: function validateAggregationType(channel) {
      var visualChannel = this.visualChannels[channel];
      var field = visualChannel.field,
          aggregation = visualChannel.aggregation;
      var aggregationOptions = this.getAggregationOptions(channel);

      if (!aggregation) {
        return;
      }

      if (!aggregationOptions.length) {
        // if field cannot be aggregated, set field to null
        this.updateLayerConfig((0, _defineProperty2["default"])({}, field, null));
      } else if (!aggregationOptions.includes(this.config.visConfig[aggregation])) {
        // current aggregation type is not supported by this field
        // set aggregation to the first supported option
        this.updateLayerVisConfig((0, _defineProperty2["default"])({}, aggregation, aggregationOptions[0]));
      }
    }
  }, {
    key: "getAggregationOptions",
    value: function getAggregationOptions(channel) {
      var visualChannel = this.visualChannels[channel];
      var field = visualChannel.field,
          channelScaleType = visualChannel.channelScaleType;
      return Object.keys(this.config[field] ? _defaultSettings.FIELD_OPTS[this.config[field].type].scale[channelScaleType] : _defaultSettings.DEFAULT_AGGREGATION[channelScaleType]);
    }
    /**
     * Get scale options based on current field and aggregation type
     * @param {string} channel
     * @returns {string[]}
     */

  }, {
    key: "getScaleOptions",
    value: function getScaleOptions(channel) {
      var visualChannel = this.visualChannels[channel];
      var field = visualChannel.field,
          aggregation = visualChannel.aggregation,
          channelScaleType = visualChannel.channelScaleType;
      var aggregationType = this.config.visConfig[aggregation];
      return this.config[field] ? // scale options based on aggregation
      _defaultSettings.FIELD_OPTS[this.config[field].type].scale[channelScaleType][aggregationType] : // default scale options for point count
      _defaultSettings.DEFAULT_AGGREGATION[channelScaleType][aggregationType];
    }
    /**
     * Aggregation layer handles visual channel aggregation inside deck.gl layer
     */

  }, {
    key: "updateLayerDomain",
    value: function updateLayerDomain(datasets, newFilter) {
      return this;
    }
  }, {
    key: "updateLayerMeta",
    value: function updateLayerMeta(allData, getPosition) {
      // get bounds from points
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
    key: "calculateDataAttribute",
    value: function calculateDataAttribute(_ref4, getPosition) {
      var allData = _ref4.allData,
          filteredIndex = _ref4.filteredIndex;
      var data = [];

      for (var i = 0; i < filteredIndex.length; i++) {
        var index = filteredIndex[i];
        var pos = getPosition({
          data: allData[index]
        }); // if doesn't have point lat or lng, do not add the point
        // deck.gl can't handle position = null

        if (pos.every(Number.isFinite)) {
          data.push({
            index: index,
            data: allData[index]
          });
        }
      }

      return data;
    }
  }, {
    key: "formatLayerData",
    value: function formatLayerData(datasets, oldLayerData) {
      var getPosition = this.getPositionAccessor(); // if (

      var gpuFilter = datasets[this.config.dataId].gpuFilter;
      var getColorValue = getValueAggrFunc(this.config.colorField, this.config.visConfig.colorAggregation);
      var getElevationValue = getValueAggrFunc(this.config.sizeField, this.config.visConfig.sizeAggregation);
      var hasFilter = Object.values(gpuFilter.filterRange).some(function (arr) {
        return arr.some(function (v) {
          return v !== 0;
        });
      });
      var getFilterValue = gpuFilter.filterValueAccessor();
      var filterData = hasFilter ? getFilterDataFunc(gpuFilter.filterRange, getFilterValue) : undefined;

      var _this$updateData = this.updateData(datasets, oldLayerData),
          data = _this$updateData.data;

      return _objectSpread(_objectSpread({
        data: data,
        getPosition: getPosition,
        _filterData: filterData
      }, getColorValue ? {
        getColorValue: getColorValue
      } : {}), getElevationValue ? {
        getElevationValue: getElevationValue
      } : {});
    }
  }, {
    key: "getDefaultDeckLayerProps",
    value: function getDefaultDeckLayerProps(opts) {
      var baseProp = (0, _get2["default"])((0, _getPrototypeOf2["default"])(AggregationLayer.prototype), "getDefaultDeckLayerProps", this).call(this, opts);
      return _objectSpread(_objectSpread({}, baseProp), {}, {
        highlightColor: _defaultSettings.HIGHLIGH_COLOR_3D,
        // gpu data filtering is not supported in aggregation layer
        extensions: [],
        autoHighlight: this.config.visConfig.enable3d
      });
    }
  }, {
    key: "getDefaultAggregationLayerProp",
    value: function getDefaultAggregationLayerProp(opts) {
      var gpuFilter = opts.gpuFilter,
          mapState = opts.mapState,
          _opts$layerCallbacks = opts.layerCallbacks,
          layerCallbacks = _opts$layerCallbacks === void 0 ? {} : _opts$layerCallbacks;
      var visConfig = this.config.visConfig;
      var eleZoomFactor = this.getElevationZoomFactor(mapState);
      var updateTriggers = {
        getColorValue: {
          colorField: this.config.colorField,
          colorAggregation: this.config.visConfig.colorAggregation
        },
        getElevationValue: {
          sizeField: this.config.sizeField,
          sizeAggregation: this.config.visConfig.sizeAggregation
        },
        _filterData: _objectSpread({
          filterRange: gpuFilter.filterRange
        }, gpuFilter.filterValueUpdateTriggers)
      };
      return _objectSpread(_objectSpread({}, this.getDefaultDeckLayerProps(opts)), {}, {
        coverage: visConfig.coverage,
        // color
        colorRange: this.getColorRange(visConfig.colorRange),
        colorScaleType: this.config.colorScale,
        upperPercentile: visConfig.percentile[1],
        lowerPercentile: visConfig.percentile[0],
        colorAggregation: visConfig.colorAggregation,
        // elevation
        extruded: visConfig.enable3d,
        elevationScale: visConfig.elevationScale * eleZoomFactor,
        elevationScaleType: this.config.sizeScale,
        elevationRange: visConfig.sizeRange,
        elevationLowerPercentile: visConfig.elevationPercentile[0],
        elevationUpperPercentile: visConfig.elevationPercentile[1],
        // updateTriggers
        updateTriggers: updateTriggers,
        // callbacks
        onSetColorDomain: layerCallbacks.onSetLayerDomain
      });
    }
  }, {
    key: "isAggregated",
    get: function get() {
      return true;
    }
  }, {
    key: "requiredLayerColumns",
    get: function get() {
      return aggregateRequiredColumns;
    }
  }, {
    key: "columnPairs",
    get: function get() {
      return this.defaultPointColumnPairs;
    }
  }, {
    key: "noneLayerDataAffectingProps",
    get: function get() {
      return [].concat((0, _toConsumableArray2["default"])((0, _get2["default"])((0, _getPrototypeOf2["default"])(AggregationLayer.prototype), "noneLayerDataAffectingProps", this)), ['enable3d', 'colorRange', 'colorDomain', 'sizeRange', 'sizeScale', 'sizeDomain', 'percentile', 'coverage', 'elevationPercentile', 'elevationScale']);
    }
  }, {
    key: "visualChannels",
    get: function get() {
      return {
        color: {
          aggregation: 'colorAggregation',
          channelScaleType: _defaultSettings.CHANNEL_SCALES.colorAggr,
          defaultMeasure: 'property.pointCount',
          domain: 'colorDomain',
          field: 'colorField',
          key: 'color',
          property: 'color',
          range: 'colorRange',
          scale: 'colorScale'
        },
        size: {
          aggregation: 'sizeAggregation',
          channelScaleType: _defaultSettings.CHANNEL_SCALES.sizeAggr,
          condition: function condition(config) {
            return config.visConfig.enable3d;
          },
          defaultMeasure: 'property.pointCount',
          domain: 'sizeDomain',
          field: 'sizeField',
          key: 'size',
          property: 'height',
          range: 'sizeRange',
          scale: 'sizeScale'
        }
      };
    }
  }]);
  return AggregationLayer;
}(_baseLayer["default"]);

exports["default"] = AggregationLayer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sYXllcnMvYWdncmVnYXRpb24tbGF5ZXIuanMiXSwibmFtZXMiOlsicG9pbnRQb3NBY2Nlc3NvciIsImxhdCIsImxuZyIsImQiLCJkYXRhIiwiZmllbGRJZHgiLCJwb2ludFBvc1Jlc29sdmVyIiwiZ2V0VmFsdWVBZ2dyRnVuYyIsImZpZWxkIiwiYWdncmVnYXRpb24iLCJwb2ludHMiLCJtYXAiLCJwIiwidGFibGVGaWVsZEluZGV4IiwibGVuZ3RoIiwiZ2V0RmlsdGVyRGF0YUZ1bmMiLCJmaWx0ZXJSYW5nZSIsImdldEZpbHRlclZhbHVlIiwicHQiLCJldmVyeSIsInZhbCIsImkiLCJnZXRMYXllckNvbG9yUmFuZ2UiLCJjb2xvclJhbmdlIiwiY29sb3JzIiwiaGV4VG9SZ2IiLCJhZ2dyZWdhdGVSZXF1aXJlZENvbHVtbnMiLCJBZ2dyZWdhdGlvbkxheWVyIiwicHJvcHMiLCJnZXRQb3NpdGlvbkFjY2Vzc29yIiwiY29uZmlnIiwiY29sdW1ucyIsImdldENvbG9yUmFuZ2UiLCJrZXkiLCJ2aXN1YWxDaGFubmVscyIsInJhbmdlIiwiZGVmYXVsdE1lYXN1cmUiLCJsYWJlbCIsInZpc0NvbmZpZ1NldHRpbmdzIiwibWVhc3VyZSIsInZpc0NvbmZpZyIsIm5hbWUiLCJvYmplY3QiLCJjaGFubmVsIiwiYWxsRGF0YSIsInZhbGlkYXRlVmlzdWFsQ2hhbm5lbCIsInZhbGlkYXRlRmllbGRUeXBlIiwidmFsaWRhdGVBZ2dyZWdhdGlvblR5cGUiLCJ2YWxpZGF0ZVNjYWxlIiwidmlzdWFsQ2hhbm5lbCIsImFnZ3JlZ2F0aW9uT3B0aW9ucyIsImdldEFnZ3JlZ2F0aW9uT3B0aW9ucyIsInVwZGF0ZUxheWVyQ29uZmlnIiwiaW5jbHVkZXMiLCJ1cGRhdGVMYXllclZpc0NvbmZpZyIsImNoYW5uZWxTY2FsZVR5cGUiLCJPYmplY3QiLCJrZXlzIiwiRklFTERfT1BUUyIsInR5cGUiLCJzY2FsZSIsIkRFRkFVTFRfQUdHUkVHQVRJT04iLCJhZ2dyZWdhdGlvblR5cGUiLCJkYXRhc2V0cyIsIm5ld0ZpbHRlciIsImdldFBvc2l0aW9uIiwiYm91bmRzIiwiZ2V0UG9pbnRzQm91bmRzIiwidXBkYXRlTWV0YSIsImZpbHRlcmVkSW5kZXgiLCJpbmRleCIsInBvcyIsIk51bWJlciIsImlzRmluaXRlIiwicHVzaCIsIm9sZExheWVyRGF0YSIsImdwdUZpbHRlciIsImRhdGFJZCIsImdldENvbG9yVmFsdWUiLCJjb2xvckZpZWxkIiwiY29sb3JBZ2dyZWdhdGlvbiIsImdldEVsZXZhdGlvblZhbHVlIiwic2l6ZUZpZWxkIiwic2l6ZUFnZ3JlZ2F0aW9uIiwiaGFzRmlsdGVyIiwidmFsdWVzIiwic29tZSIsImFyciIsInYiLCJmaWx0ZXJWYWx1ZUFjY2Vzc29yIiwiZmlsdGVyRGF0YSIsInVuZGVmaW5lZCIsInVwZGF0ZURhdGEiLCJfZmlsdGVyRGF0YSIsIm9wdHMiLCJiYXNlUHJvcCIsImhpZ2hsaWdodENvbG9yIiwiSElHSExJR0hfQ09MT1JfM0QiLCJleHRlbnNpb25zIiwiYXV0b0hpZ2hsaWdodCIsImVuYWJsZTNkIiwibWFwU3RhdGUiLCJsYXllckNhbGxiYWNrcyIsImVsZVpvb21GYWN0b3IiLCJnZXRFbGV2YXRpb25ab29tRmFjdG9yIiwidXBkYXRlVHJpZ2dlcnMiLCJmaWx0ZXJWYWx1ZVVwZGF0ZVRyaWdnZXJzIiwiZ2V0RGVmYXVsdERlY2tMYXllclByb3BzIiwiY292ZXJhZ2UiLCJjb2xvclNjYWxlVHlwZSIsImNvbG9yU2NhbGUiLCJ1cHBlclBlcmNlbnRpbGUiLCJwZXJjZW50aWxlIiwibG93ZXJQZXJjZW50aWxlIiwiZXh0cnVkZWQiLCJlbGV2YXRpb25TY2FsZSIsImVsZXZhdGlvblNjYWxlVHlwZSIsInNpemVTY2FsZSIsImVsZXZhdGlvblJhbmdlIiwic2l6ZVJhbmdlIiwiZWxldmF0aW9uTG93ZXJQZXJjZW50aWxlIiwiZWxldmF0aW9uUGVyY2VudGlsZSIsImVsZXZhdGlvblVwcGVyUGVyY2VudGlsZSIsIm9uU2V0Q29sb3JEb21haW4iLCJvblNldExheWVyRG9tYWluIiwiZGVmYXVsdFBvaW50Q29sdW1uUGFpcnMiLCJjb2xvciIsIkNIQU5ORUxfU0NBTEVTIiwiY29sb3JBZ2dyIiwiZG9tYWluIiwicHJvcGVydHkiLCJzaXplIiwic2l6ZUFnZ3IiLCJjb25kaXRpb24iLCJMYXllciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7OztBQUlPLElBQU1BLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUI7QUFBQSxNQUFFQyxHQUFGLFFBQUVBLEdBQUY7QUFBQSxNQUFPQyxHQUFQLFFBQU9BLEdBQVA7QUFBQSxTQUFnQixVQUFBQyxDQUFDO0FBQUEsV0FBSSxDQUFDQSxDQUFDLENBQUNDLElBQUYsQ0FBT0YsR0FBRyxDQUFDRyxRQUFYLENBQUQsRUFBdUJGLENBQUMsQ0FBQ0MsSUFBRixDQUFPSCxHQUFHLENBQUNJLFFBQVgsQ0FBdkIsQ0FBSjtBQUFBLEdBQWpCO0FBQUEsQ0FBekI7Ozs7QUFFQSxJQUFNQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CO0FBQUEsTUFBRUwsR0FBRixTQUFFQSxHQUFGO0FBQUEsTUFBT0MsR0FBUCxTQUFPQSxHQUFQO0FBQUEsbUJBQW1CRCxHQUFHLENBQUNJLFFBQXZCLGNBQW1DSCxHQUFHLENBQUNHLFFBQXZDO0FBQUEsQ0FBekI7Ozs7QUFFQSxJQUFNRSxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUNDLEtBQUQsRUFBUUMsV0FBUixFQUF3QjtBQUN0RCxTQUFPLFVBQUFDLE1BQU0sRUFBSTtBQUNmLFdBQU9GLEtBQUssR0FDUiwrQkFDRUUsTUFBTSxDQUFDQyxHQUFQLENBQVcsVUFBQUMsQ0FBQztBQUFBLGFBQUlBLENBQUMsQ0FBQ1IsSUFBRixDQUFPSSxLQUFLLENBQUNLLGVBQU4sR0FBd0IsQ0FBL0IsQ0FBSjtBQUFBLEtBQVosQ0FERixFQUVFSixXQUZGLENBRFEsR0FLUkMsTUFBTSxDQUFDSSxNQUxY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O0FBVUp5QixVQUFBQSxLQUFLLEVBQUU7QUFWSDtBQVpELE9BQVA7QUF5QkQ7OztFQTlEMkMwRSxxQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMCBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBtZW1vaXplIGZyb20gJ2xvZGFzaC5tZW1vaXplJztcclxuaW1wb3J0IExheWVyIGZyb20gJy4vYmFzZS1sYXllcic7XHJcbmltcG9ydCB7aGV4VG9SZ2J9IGZyb20gJ3V0aWxzL2NvbG9yLXV0aWxzJztcclxuaW1wb3J0IHthZ2dyZWdhdGV9IGZyb20gJ3V0aWxzL2FnZ3JlZ2F0ZS11dGlscyc7XHJcbmltcG9ydCB7SElHSExJR0hfQ09MT1JfM0R9IGZyb20gJ2NvbnN0YW50cy9kZWZhdWx0LXNldHRpbmdzJztcclxuXHJcbmltcG9ydCB7Q0hBTk5FTF9TQ0FMRVMsIEZJRUxEX09QVFMsIERFRkFVTFRfQUdHUkVHQVRJT059IGZyb20gJ2NvbnN0YW50cy9kZWZhdWx0LXNldHRpbmdzJztcclxuXHJcbmV4cG9ydCBjb25zdCBwb2ludFBvc0FjY2Vzc29yID0gKHtsYXQsIGxuZ30pID0+IGQgPT4gW2QuZGF0YVtsbmcuZmllbGRJZHhdLCBkLmRhdGFbbGF0LmZpZWxkSWR4XV07XHJcblxyXG5leHBvcnQgY29uc3QgcG9pbnRQb3NSZXNvbHZlciA9ICh7bGF0LCBsbmd9KSA9PiBgJHtsYXQuZmllbGRJZHh9LSR7bG5nLmZpZWxkSWR4fWA7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0VmFsdWVBZ2dyRnVuYyA9IChmaWVsZCwgYWdncmVnYXRpb24pID0+IHtcclxuICByZXR1cm4gcG9pbnRzID0+IHtcclxuICAgIHJldHVybiBmaWVsZFxyXG4gICAgICA/IGFnZ3JlZ2F0ZShcclxuICAgICAgICAgIHBvaW50cy5tYXAocCA9PiBwLmRhdGFbZmllbGQudGFibGVGaWVsZEluZGV4IC0gMV0pLFxyXG4gICAgICAgICAgYWdncmVnYXRpb25cclxuICAgICAgICApXHJcbiAgICAgIDogcG9pbnRzLmxlbmd0aDtcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldEZpbHRlckRhdGFGdW5jID0gKGZpbHRlclJhbmdlLCBnZXRGaWx0ZXJWYWx1ZSkgPT4gcHQgPT5cclxuICBnZXRGaWx0ZXJWYWx1ZShwdCkuZXZlcnkoKHZhbCwgaSkgPT4gdmFsID49IGZpbHRlclJhbmdlW2ldWzBdICYmIHZhbCA8PSBmaWx0ZXJSYW5nZVtpXVsxXSk7XHJcblxyXG5jb25zdCBnZXRMYXllckNvbG9yUmFuZ2UgPSBjb2xvclJhbmdlID0+IGNvbG9yUmFuZ2UuY29sb3JzLm1hcChoZXhUb1JnYik7XHJcblxyXG5leHBvcnQgY29uc3QgYWdncmVnYXRlUmVxdWlyZWRDb2x1bW5zID0gWydsYXQnLCAnbG5nJ107XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBZ2dyZWdhdGlvbkxheWVyIGV4dGVuZHMgTGF5ZXIge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgdGhpcy5nZXRQb3NpdGlvbkFjY2Vzc29yID0gKCkgPT4gcG9pbnRQb3NBY2Nlc3Nvcih0aGlzLmNvbmZpZy5jb2x1bW5zKTtcclxuICAgIHRoaXMuZ2V0Q29sb3JSYW5nZSA9IG1lbW9pemUoZ2V0TGF5ZXJDb2xvclJhbmdlKTtcclxuICB9XHJcblxyXG4gIGdldCBpc0FnZ3JlZ2F0ZWQoKSB7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcblxyXG4gIGdldCByZXF1aXJlZExheWVyQ29sdW1ucygpIHtcclxuICAgIHJldHVybiBhZ2dyZWdhdGVSZXF1aXJlZENvbHVtbnM7XHJcbiAgfVxyXG5cclxuICBnZXQgY29sdW1uUGFpcnMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5kZWZhdWx0UG9pbnRDb2x1bW5QYWlycztcclxuICB9XHJcblxyXG4gIGdldCBub25lTGF5ZXJEYXRhQWZmZWN0aW5nUHJvcHMoKSB7XHJcbiAgICByZXR1cm4gW1xyXG4gICAgICAuLi5zdXBlci5ub25lTGF5ZXJEYXRhQWZmZWN0aW5nUHJvcHMsXHJcbiAgICAgICdlbmFibGUzZCcsXHJcbiAgICAgICdjb2xvclJhbmdlJyxcclxuICAgICAgJ2NvbG9yRG9tYWluJyxcclxuICAgICAgJ3NpemVSYW5nZScsXHJcbiAgICAgICdzaXplU2NhbGUnLFxyXG4gICAgICAnc2l6ZURvbWFpbicsXHJcbiAgICAgICdwZXJjZW50aWxlJyxcclxuICAgICAgJ2NvdmVyYWdlJyxcclxuICAgICAgJ2VsZXZhdGlvblBlcmNlbnRpbGUnLFxyXG4gICAgICAnZWxldmF0aW9uU2NhbGUnXHJcbiAgICBdO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHZpc3VhbENoYW5uZWxzKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgY29sb3I6IHtcclxuICAgICAgICBhZ2dyZWdhdGlvbjogJ2NvbG9yQWdncmVnYXRpb24nLFxyXG4gICAgICAgIGNoYW5uZWxTY2FsZVR5cGU6IENIQU5ORUxfU0NBTEVTLmNvbG9yQWdncixcclxuICAgICAgICBkZWZhdWx0TWVhc3VyZTogJ3Byb3BlcnR5LnBvaW50Q291bnQnLFxyXG4gICAgICAgIGRvbWFpbjogJ2NvbG9yRG9tYWluJyxcclxuICAgICAgICBmaWVsZDogJ2NvbG9yRmllbGQnLFxyXG4gICAgICAgIGtleTogJ2NvbG9yJyxcclxuICAgICAgICBwcm9wZXJ0eTogJ2NvbG9yJyxcclxuICAgICAgICByYW5nZTogJ2NvbG9yUmFuZ2UnLFxyXG4gICAgICAgIHNjYWxlOiAnY29sb3JTY2FsZSdcclxuICAgICAgfSxcclxuICAgICAgc2l6ZToge1xyXG4gICAgICAgIGFnZ3JlZ2F0aW9uOiAnc2l6ZUFnZ3JlZ2F0aW9uJyxcclxuICAgICAgICBjaGFubmVsU2NhbGVUeXBlOiBDSEFOTkVMX1NDQUxFUy5zaXplQWdncixcclxuICAgICAgICBjb25kaXRpb246IGNvbmZpZyA9PiBjb25maWcudmlzQ29uZmlnLmVuYWJsZTNkLFxyXG4gICAgICAgIGRlZmF1bHRNZWFzdXJlOiAncHJvcGVydHkucG9pbnRDb3VudCcsXHJcbiAgICAgICAgZG9tYWluOiAnc2l6ZURvbWFpbicsXHJcbiAgICAgICAgZmllbGQ6ICdzaXplRmllbGQnLFxyXG4gICAgICAgIGtleTogJ3NpemUnLFxyXG4gICAgICAgIHByb3BlcnR5OiAnaGVpZ2h0JyxcclxuICAgICAgICByYW5nZTogJ3NpemVSYW5nZScsXHJcbiAgICAgICAgc2NhbGU6ICdzaXplU2NhbGUnXHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZXQgdGhlIGRlc2NyaXB0aW9uIG9mIGEgdmlzdWFsQ2hhbm5lbCBjb25maWdcclxuICAgKiBAcGFyYW0ga2V5XHJcbiAgICogQHJldHVybnMge3tsYWJlbDogc3RyaW5nLCBtZWFzdXJlOiAoc3RyaW5nfHN0cmluZyl9fVxyXG4gICAqL1xyXG4gIGdldFZpc3VhbENoYW5uZWxEZXNjcmlwdGlvbihrZXkpIHtcclxuICAgIC8vIGUuZy4gbGFiZWw6IENvbG9yLCBtZWFzdXJlOiBBdmVyYWdlIG9mIEVUQVxyXG4gICAgY29uc3Qge3JhbmdlLCBmaWVsZCwgZGVmYXVsdE1lYXN1cmUsIGFnZ3JlZ2F0aW9ufSA9IHRoaXMudmlzdWFsQ2hhbm5lbHNba2V5XTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGxhYmVsOiB0aGlzLnZpc0NvbmZpZ1NldHRpbmdzW3JhbmdlXS5sYWJlbCxcclxuICAgICAgbWVhc3VyZTogdGhpcy5jb25maWdbZmllbGRdXHJcbiAgICAgICAgPyBgJHt0aGlzLmNvbmZpZy52aXNDb25maWdbYWdncmVnYXRpb25dfSBvZiAke3RoaXMuY29uZmlnW2ZpZWxkXS5uYW1lfWBcclxuICAgICAgICA6IGRlZmF1bHRNZWFzdXJlXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgZ2V0SG92ZXJEYXRhKG9iamVjdCkge1xyXG4gICAgLy8gcmV0dXJuIGFnZ3JlZ2F0ZWQgb2JqZWN0XHJcbiAgICByZXR1cm4gb2JqZWN0O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQWdncmVnYXRpb24gbGF5ZXIgaGFuZGxlcyB2aXN1YWwgY2hhbm5lbCBhZ2dyZWdhdGlvbiBpbnNpZGUgZGVjay5nbCBsYXllclxyXG4gICAqL1xyXG4gIHVwZGF0ZUxheWVyVmlzdWFsQ2hhbm5lbCh7ZGF0YSwgYWxsRGF0YX0sIGNoYW5uZWwpIHtcclxuICAgIHRoaXMudmFsaWRhdGVWaXN1YWxDaGFubmVsKGNoYW5uZWwpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVmFsaWRhdGUgYWdncmVnYXRpb24gdHlwZSBvbiB0b3Agb2YgYmFzaWMgbGF5ZXIgdmlzdWFsIGNoYW5uZWwgdmFsaWRhdGlvblxyXG4gICAqIEBwYXJhbSBjaGFubmVsXHJcbiAgICovXHJcbiAgdmFsaWRhdGVWaXN1YWxDaGFubmVsKGNoYW5uZWwpIHtcclxuICAgIC8vIGZpZWxkIHR5cGUgZGVjaWRlcyBhZ2dyZWdhdGlvbiB0eXBlIGRlY2lkZXMgc2NhbGUgdHlwZVxyXG4gICAgdGhpcy52YWxpZGF0ZUZpZWxkVHlwZShjaGFubmVsKTtcclxuICAgIHRoaXMudmFsaWRhdGVBZ2dyZWdhdGlvblR5cGUoY2hhbm5lbCk7XHJcbiAgICB0aGlzLnZhbGlkYXRlU2NhbGUoY2hhbm5lbCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBWYWxpZGF0ZSBhZ2dyZWdhdGlvbiB0eXBlIGJhc2VkIG9uIHNlbGVjdGVkIGZpZWxkXHJcbiAgICovXHJcbiAgdmFsaWRhdGVBZ2dyZWdhdGlvblR5cGUoY2hhbm5lbCkge1xyXG4gICAgY29uc3QgdmlzdWFsQ2hhbm5lbCA9IHRoaXMudmlzdWFsQ2hhbm5lbHNbY2hhbm5lbF07XHJcbiAgICBjb25zdCB7ZmllbGQsIGFnZ3JlZ2F0aW9ufSA9IHZpc3VhbENoYW5uZWw7XHJcbiAgICBjb25zdCBhZ2dyZWdhdGlvbk9wdGlvbnMgPSB0aGlzLmdldEFnZ3JlZ2F0aW9uT3B0aW9ucyhjaGFubmVsKTtcclxuXHJcbiAgICBpZiAoIWFnZ3JlZ2F0aW9uKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIWFnZ3JlZ2F0aW9uT3B0aW9ucy5sZW5ndGgpIHtcclxuICAgICAgLy8gaWYgZmllbGQgY2Fubm90IGJlIGFnZ3JlZ2F0ZWQsIHNldCBmaWVsZCB0byBudWxsXHJcbiAgICAgIHRoaXMudXBkYXRlTGF5ZXJDb25maWcoe1tmaWVsZF06IG51bGx9KTtcclxuICAgIH0gZWxzZSBpZiAoIWFnZ3JlZ2F0aW9uT3B0aW9ucy5pbmNsdWRlcyh0aGlzLmNvbmZpZy52aXNDb25maWdbYWdncmVnYXRpb25dKSkge1xyXG4gICAgICAvLyBjdXJyZW50IGFnZ3JlZ2F0aW9uIHR5cGUgaXMgbm90IHN1cHBvcnRlZCBieSB0aGlzIGZpZWxkXHJcbiAgICAgIC8vIHNldCBhZ2dyZWdhdGlvbiB0byB0aGUgZmlyc3Qgc3VwcG9ydGVkIG9wdGlvblxyXG4gICAgICB0aGlzLnVwZGF0ZUxheWVyVmlzQ29uZmlnKHtbYWdncmVnYXRpb25dOiBhZ2dyZWdhdGlvbk9wdGlvbnNbMF19KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldEFnZ3JlZ2F0aW9uT3B0aW9ucyhjaGFubmVsKSB7XHJcbiAgICBjb25zdCB2aXN1YWxDaGFubmVsID0gdGhpcy52aXN1YWxDaGFubmVsc1tjaGFubmVsXTtcclxuICAgIGNvbnN0IHtmaWVsZCwgY2hhbm5lbFNjYWxlVHlwZX0gPSB2aXN1YWxDaGFubmVsO1xyXG5cclxuICAgIHJldHVybiBPYmplY3Qua2V5cyhcclxuICAgICAgdGhpcy5jb25maWdbZmllbGRdXHJcbiAgICAgICAgPyBGSUVMRF9PUFRTW3RoaXMuY29uZmlnW2ZpZWxkXS50eXBlXS5zY2FsZVtjaGFubmVsU2NhbGVUeXBlXVxyXG4gICAgICAgIDogREVGQVVMVF9BR0dSRUdBVElPTltjaGFubmVsU2NhbGVUeXBlXVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldCBzY2FsZSBvcHRpb25zIGJhc2VkIG9uIGN1cnJlbnQgZmllbGQgYW5kIGFnZ3JlZ2F0aW9uIHR5cGVcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gY2hhbm5lbFxyXG4gICAqIEByZXR1cm5zIHtzdHJpbmdbXX1cclxuICAgKi9cclxuICBnZXRTY2FsZU9wdGlvbnMoY2hhbm5lbCkge1xyXG4gICAgY29uc3QgdmlzdWFsQ2hhbm5lbCA9IHRoaXMudmlzdWFsQ2hhbm5lbHNbY2hhbm5lbF07XHJcbiAgICBjb25zdCB7ZmllbGQsIGFnZ3JlZ2F0aW9uLCBjaGFubmVsU2NhbGVUeXBlfSA9IHZpc3VhbENoYW5uZWw7XHJcbiAgICBjb25zdCBhZ2dyZWdhdGlvblR5cGUgPSB0aGlzLmNvbmZpZy52aXNDb25maWdbYWdncmVnYXRpb25dO1xyXG4gICAgcmV0dXJuIHRoaXMuY29uZmlnW2ZpZWxkXVxyXG4gICAgICA/IC8vIHNjYWxlIG9wdGlvbnMgYmFzZWQgb24gYWdncmVnYXRpb25cclxuICAgICAgICBGSUVMRF9PUFRTW3RoaXMuY29uZmlnW2ZpZWxkXS50eXBlXS5zY2FsZVtjaGFubmVsU2NhbGVUeXBlXVthZ2dyZWdhdGlvblR5cGVdXHJcbiAgICAgIDogLy8gZGVmYXVsdCBzY2FsZSBvcHRpb25zIGZvciBwb2ludCBjb3VudFxyXG4gICAgICAgIERFRkFVTFRfQUdHUkVHQVRJT05bY2hhbm5lbFNjYWxlVHlwZV1bYWdncmVnYXRpb25UeXBlXTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEFnZ3JlZ2F0aW9uIGxheWVyIGhhbmRsZXMgdmlzdWFsIGNoYW5uZWwgYWdncmVnYXRpb24gaW5zaWRlIGRlY2suZ2wgbGF5ZXJcclxuICAgKi9cclxuICB1cGRhdGVMYXllckRvbWFpbihkYXRhc2V0cywgbmV3RmlsdGVyKSB7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIHVwZGF0ZUxheWVyTWV0YShhbGxEYXRhLCBnZXRQb3NpdGlvbikge1xyXG4gICAgLy8gZ2V0IGJvdW5kcyBmcm9tIHBvaW50c1xyXG4gICAgY29uc3QgYm91bmRzID0gdGhpcy5nZXRQb2ludHNCb3VuZHMoYWxsRGF0YSwgZCA9PiBnZXRQb3NpdGlvbih7ZGF0YTogZH0pKTtcclxuXHJcbiAgICB0aGlzLnVwZGF0ZU1ldGEoe2JvdW5kc30pO1xyXG4gIH1cclxuXHJcbiAgY2FsY3VsYXRlRGF0YUF0dHJpYnV0ZSh7YWxsRGF0YSwgZmlsdGVyZWRJbmRleH0sIGdldFBvc2l0aW9uKSB7XHJcbiAgICBjb25zdCBkYXRhID0gW107XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWx0ZXJlZEluZGV4Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IGluZGV4ID0gZmlsdGVyZWRJbmRleFtpXTtcclxuICAgICAgY29uc3QgcG9zID0gZ2V0UG9zaXRpb24oe2RhdGE6IGFsbERhdGFbaW5kZXhdfSk7XHJcblxyXG4gICAgICAvLyBpZiBkb2Vzbid0IGhhdmUgcG9pbnQgbGF0IG9yIGxuZywgZG8gbm90IGFkZCB0aGUgcG9pbnRcclxuICAgICAgLy8gZGVjay5nbCBjYW4ndCBoYW5kbGUgcG9zaXRpb24gPSBudWxsXHJcbiAgICAgIGlmIChwb3MuZXZlcnkoTnVtYmVyLmlzRmluaXRlKSkge1xyXG4gICAgICAgIGRhdGEucHVzaCh7XHJcbiAgICAgICAgICBpbmRleCxcclxuICAgICAgICAgIGRhdGE6IGFsbERhdGFbaW5kZXhdXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZGF0YTtcclxuICB9XHJcblxyXG4gIGZvcm1hdExheWVyRGF0YShkYXRhc2V0cywgb2xkTGF5ZXJEYXRhKSB7XHJcbiAgICBjb25zdCBnZXRQb3NpdGlvbiA9IHRoaXMuZ2V0UG9zaXRpb25BY2Nlc3NvcigpOyAvLyBpZiAoXHJcbiAgICBjb25zdCB7Z3B1RmlsdGVyfSA9IGRhdGFzZXRzW3RoaXMuY29uZmlnLmRhdGFJZF07XHJcblxyXG4gICAgY29uc3QgZ2V0Q29sb3JWYWx1ZSA9IGdldFZhbHVlQWdnckZ1bmMoXHJcbiAgICAgIHRoaXMuY29uZmlnLmNvbG9yRmllbGQsXHJcbiAgICAgIHRoaXMuY29uZmlnLnZpc0NvbmZpZy5jb2xvckFnZ3JlZ2F0aW9uXHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IGdldEVsZXZhdGlvblZhbHVlID0gZ2V0VmFsdWVBZ2dyRnVuYyhcclxuICAgICAgdGhpcy5jb25maWcuc2l6ZUZpZWxkLFxyXG4gICAgICB0aGlzLmNvbmZpZy52aXNDb25maWcuc2l6ZUFnZ3JlZ2F0aW9uXHJcbiAgICApO1xyXG4gICAgY29uc3QgaGFzRmlsdGVyID0gT2JqZWN0LnZhbHVlcyhncHVGaWx0ZXIuZmlsdGVyUmFuZ2UpLnNvbWUoYXJyID0+IGFyci5zb21lKHYgPT4gdiAhPT0gMCkpO1xyXG4gICAgY29uc3QgZ2V0RmlsdGVyVmFsdWUgPSBncHVGaWx0ZXIuZmlsdGVyVmFsdWVBY2Nlc3NvcigpO1xyXG4gICAgY29uc3QgZmlsdGVyRGF0YSA9IGhhc0ZpbHRlclxyXG4gICAgICA/IGdldEZpbHRlckRhdGFGdW5jKGdwdUZpbHRlci5maWx0ZXJSYW5nZSwgZ2V0RmlsdGVyVmFsdWUpXHJcbiAgICAgIDogdW5kZWZpbmVkO1xyXG5cclxuICAgIGNvbnN0IHtkYXRhfSA9IHRoaXMudXBkYXRlRGF0YShkYXRhc2V0cywgb2xkTGF5ZXJEYXRhKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBkYXRhLFxyXG4gICAgICBnZXRQb3NpdGlvbixcclxuICAgICAgX2ZpbHRlckRhdGE6IGZpbHRlckRhdGEsXHJcbiAgICAgIC4uLihnZXRDb2xvclZhbHVlID8ge2dldENvbG9yVmFsdWV9IDoge30pLFxyXG4gICAgICAuLi4oZ2V0RWxldmF0aW9uVmFsdWUgPyB7Z2V0RWxldmF0aW9uVmFsdWV9IDoge30pXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgZ2V0RGVmYXVsdERlY2tMYXllclByb3BzKG9wdHMpIHtcclxuICAgIGNvbnN0IGJhc2VQcm9wID0gc3VwZXIuZ2V0RGVmYXVsdERlY2tMYXllclByb3BzKG9wdHMpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgLi4uYmFzZVByb3AsXHJcbiAgICAgIGhpZ2hsaWdodENvbG9yOiBISUdITElHSF9DT0xPUl8zRCxcclxuICAgICAgLy8gZ3B1IGRhdGEgZmlsdGVyaW5nIGlzIG5vdCBzdXBwb3J0ZWQgaW4gYWdncmVnYXRpb24gbGF5ZXJcclxuICAgICAgZXh0ZW5zaW9uczogW10sXHJcbiAgICAgIGF1dG9IaWdobGlnaHQ6IHRoaXMuY29uZmlnLnZpc0NvbmZpZy5lbmFibGUzZFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGdldERlZmF1bHRBZ2dyZWdhdGlvbkxheWVyUHJvcChvcHRzKSB7XHJcbiAgICBjb25zdCB7Z3B1RmlsdGVyLCBtYXBTdGF0ZSwgbGF5ZXJDYWxsYmFja3MgPSB7fX0gPSBvcHRzO1xyXG4gICAgY29uc3Qge3Zpc0NvbmZpZ30gPSB0aGlzLmNvbmZpZztcclxuICAgIGNvbnN0IGVsZVpvb21GYWN0b3IgPSB0aGlzLmdldEVsZXZhdGlvblpvb21GYWN0b3IobWFwU3RhdGUpO1xyXG5cclxuICAgIGNvbnN0IHVwZGF0ZVRyaWdnZXJzID0ge1xyXG4gICAgICBnZXRDb2xvclZhbHVlOiB7XHJcbiAgICAgICAgY29sb3JGaWVsZDogdGhpcy5jb25maWcuY29sb3JGaWVsZCxcclxuICAgICAgICBjb2xvckFnZ3JlZ2F0aW9uOiB0aGlzLmNvbmZpZy52aXNDb25maWcuY29sb3JBZ2dyZWdhdGlvblxyXG4gICAgICB9LFxyXG4gICAgICBnZXRFbGV2YXRpb25WYWx1ZToge1xyXG4gICAgICAgIHNpemVGaWVsZDogdGhpcy5jb25maWcuc2l6ZUZpZWxkLFxyXG4gICAgICAgIHNpemVBZ2dyZWdhdGlvbjogdGhpcy5jb25maWcudmlzQ29uZmlnLnNpemVBZ2dyZWdhdGlvblxyXG4gICAgICB9LFxyXG4gICAgICBfZmlsdGVyRGF0YToge1xyXG4gICAgICAgIGZpbHRlclJhbmdlOiBncHVGaWx0ZXIuZmlsdGVyUmFuZ2UsXHJcbiAgICAgICAgLi4uZ3B1RmlsdGVyLmZpbHRlclZhbHVlVXBkYXRlVHJpZ2dlcnNcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAuLi50aGlzLmdldERlZmF1bHREZWNrTGF5ZXJQcm9wcyhvcHRzKSxcclxuICAgICAgY292ZXJhZ2U6IHZpc0NvbmZpZy5jb3ZlcmFnZSxcclxuXHJcbiAgICAgIC8vIGNvbG9yXHJcbiAgICAgIGNvbG9yUmFuZ2U6IHRoaXMuZ2V0Q29sb3JSYW5nZSh2aXNDb25maWcuY29sb3JSYW5nZSksXHJcbiAgICAgIGNvbG9yU2NhbGVUeXBlOiB0aGlzLmNvbmZpZy5jb2xvclNjYWxlLFxyXG4gICAgICB1cHBlclBlcmNlbnRpbGU6IHZpc0NvbmZpZy5wZXJjZW50aWxlWzFdLFxyXG4gICAgICBsb3dlclBlcmNlbnRpbGU6IHZpc0NvbmZpZy5wZXJjZW50aWxlWzBdLFxyXG4gICAgICBjb2xvckFnZ3JlZ2F0aW9uOiB2aXNDb25maWcuY29sb3JBZ2dyZWdhdGlvbixcclxuXHJcbiAgICAgIC8vIGVsZXZhdGlvblxyXG4gICAgICBleHRydWRlZDogdmlzQ29uZmlnLmVuYWJsZTNkLFxyXG4gICAgICBlbGV2YXRpb25TY2FsZTogdmlzQ29uZmlnLmVsZXZhdGlvblNjYWxlICogZWxlWm9vbUZhY3RvcixcclxuICAgICAgZWxldmF0aW9uU2NhbGVUeXBlOiB0aGlzLmNvbmZpZy5zaXplU2NhbGUsXHJcbiAgICAgIGVsZXZhdGlvblJhbmdlOiB2aXNDb25maWcuc2l6ZVJhbmdlLFxyXG4gICAgICBlbGV2YXRpb25Mb3dlclBlcmNlbnRpbGU6IHZpc0NvbmZpZy5lbGV2YXRpb25QZXJjZW50aWxlWzBdLFxyXG4gICAgICBlbGV2YXRpb25VcHBlclBlcmNlbnRpbGU6IHZpc0NvbmZpZy5lbGV2YXRpb25QZXJjZW50aWxlWzFdLFxyXG5cclxuICAgICAgLy8gdXBkYXRlVHJpZ2dlcnNcclxuICAgICAgdXBkYXRlVHJpZ2dlcnMsXHJcblxyXG4gICAgICAvLyBjYWxsYmFja3NcclxuICAgICAgb25TZXRDb2xvckRvbWFpbjogbGF5ZXJDYWxsYmFja3Mub25TZXRMYXllckRvbWFpblxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIl19