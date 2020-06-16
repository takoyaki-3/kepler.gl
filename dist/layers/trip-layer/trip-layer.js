"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.featureResolver = exports.featureAccessor = exports.geoJsonRequiredColumns = exports.tripVisConfigs = exports.defaultWidth = exports.defaultThickness = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _get2 = _interopRequireDefault(require("@babel/runtime/helpers/get"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _lodash = _interopRequireDefault(require("lodash.memoize"));

var _lodash2 = _interopRequireDefault(require("lodash.uniq"));

var _baseLayer = _interopRequireDefault(require("../base-layer"));

var _geoLayers = require("@deck.gl/geo-layers");

var _defaultSettings = require("../../constants/default-settings");

var _tripLayerIcon = _interopRequireDefault(require("./trip-layer-icon"));

var _geojsonUtils = require("../geojson-layer/geojson-utils");

var _tripUtils = require("./trip-utils");

var _colorUtils = require("../../utils/color-utils");

var _tripInfoModal = _interopRequireDefault(require("./trip-info-modal"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var zoomFactorValue = 8;
var defaultThickness = 0.5;
exports.defaultThickness = defaultThickness;
var defaultWidth = 1;
exports.defaultWidth = defaultWidth;
var tripVisConfigs = {
  opacity: 'opacity',
  thickness: {
    type: 'number',
    defaultValue: defaultThickness,
    label: 'Stroke Width',
    isRanged: false,
    range: [0, 100],
    step: 0.1,
    group: 'stroke',
    property: 'thickness'
  },
  colorRange: 'colorRange',
  trailLength: 'trailLength',
  sizeRange: 'strokeWidthRange'
};
exports.tripVisConfigs = tripVisConfigs;
var geoJsonRequiredColumns = ['geojson'];
exports.geoJsonRequiredColumns = geoJsonRequiredColumns;

var featureAccessor = function featureAccessor(_ref) {
  var geojson = _ref.geojson;
  return function (d) {
    return d[geojson.fieldIdx];
  };
};

exports.featureAccessor = featureAccessor;

var featureResolver = function featureResolver(_ref2) {
  var geojson = _ref2.geojson;
  return geojson.fieldIdx;
};

exports.featureResolver = featureResolver;

var TripLayer = /*#__PURE__*/function (_Layer) {
  (0, _inherits2["default"])(TripLayer, _Layer);

  var _super = _createSuper(TripLayer);

  function TripLayer(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, TripLayer);
    _this = _super.call(this, props);
    _this.dataToFeature = [];
    _this.dataToTimeStamp = [];

    _this.registerVisConfig(tripVisConfigs);

    _this.getFeature = (0, _lodash["default"])(featureAccessor, featureResolver);
    _this._layerInfoModal = (0, _tripInfoModal["default"])();
    return _this;
  }

  (0, _createClass2["default"])(TripLayer, [{
    key: "getPositionAccessor",
    value: function getPositionAccessor() {
      return this.getFeature(this.config.columns);
    }
  }, {
    key: "getDefaultLayerConfig",
    value: function getDefaultLayerConfig(props) {
      return _objectSpread(_objectSpread({}, (0, _get2["default"])((0, _getPrototypeOf2["default"])(TripLayer.prototype), "getDefaultLayerConfig", this).call(this, props)), {}, {
        animation: {
          enabled: true,
          domain: null
        }
      });
    }
  }, {
    key: "getHoverData",
    value: function getHoverData(object, allData) {
      // index of allData is saved to feature.properties
      return allData[object.properties.index];
    }
  }, {
    key: "calculateDataAttribute",
    value: function calculateDataAttribute(_ref3, getPosition) {
      var _this2 = this;

      var allData = _ref3.allData,
          filteredIndex = _ref3.filteredIndex;
      return filteredIndex.map(function (i) {
        return _this2.dataToFeature[i];
      }).filter(function (d) {
        return d && d.geometry.type === 'LineString';
      });
    }
  }, {
    key: "formatLayerData",
    value: function formatLayerData(datasets, oldLayerData) {
      var _this3 = this;

      // to-do: parse segment from allData
      var _this$config = this.config,
          colorScale = _this$config.colorScale,
          colorField = _this$config.colorField,
          colorDomain = _this$config.colorDomain,
          color = _this$config.color,
          sizeScale = _this$config.sizeScale,
          sizeDomain = _this$config.sizeDomain,
          sizeField = _this$config.sizeField,
          visConfig = _this$config.visConfig;
      var colorRange = visConfig.colorRange,
          sizeRange = visConfig.sizeRange;
      var _datasets$this$config = datasets[this.config.dataId],
          allData = _datasets$this$config.allData,
          gpuFilter = _datasets$this$config.gpuFilter;

      var _this$updateData = this.updateData(datasets, oldLayerData),
          data = _this$updateData.data; // color


      var cScale = colorField && this.getVisChannelScale(colorScale, colorDomain, colorRange.colors.map(_colorUtils.hexToRgb)); // calculate stroke scale - if stroked = true

      var sScale = sizeField && this.getVisChannelScale(sizeScale, sizeDomain, sizeRange); // access feature properties from geojson sub layer

      var getDataForGpuFilter = function getDataForGpuFilter(f) {
        return allData[f.properties.index];
      };

      var getIndexForGpuFilter = function getIndexForGpuFilter(f) {
        return f.properties.index;
      };

      return {
        data: data,
        getFilterValue: gpuFilter.filterValueAccessor(getIndexForGpuFilter, getDataForGpuFilter),
        getPath: function getPath(d) {
          return d.geometry.coordinates;
        },
        getTimestamps: function getTimestamps(d) {
          return _this3.dataToTimeStamp[d.properties.index];
        },
        getColor: function getColor(d) {
          return cScale ? _this3.getEncodedChannelValue(cScale, allData[d.properties.index], colorField) : d.properties.fillColor || color;
        },
        getWidth: function getWidth(d) {
          return sScale ? _this3.getEncodedChannelValue(sScale, allData[d.properties.index], sizeField, 0) : d.properties.lineWidth || defaultWidth;
        }
      };
    }
  }, {
    key: "updateAnimationDomain",
    value: function updateAnimationDomain(domain) {
      this.updateLayerConfig({
        animation: _objectSpread(_objectSpread({}, this.config.animation), {}, {
          domain: domain
        })
      });
    }
  }, {
    key: "updateLayerMeta",
    value: function updateLayerMeta(allData) {
      var getFeature = this.getPositionAccessor();

      if (getFeature === this.meta.getFeature) {
        // TODO: revisit this after gpu filtering
        return;
      }

      this.dataToFeature = (0, _geojsonUtils.getGeojsonDataMaps)(allData, getFeature);

      var _parseTripGeoJsonTime = (0, _tripUtils.parseTripGeoJsonTimestamp)(this.dataToFeature),
          dataToTimeStamp = _parseTripGeoJsonTime.dataToTimeStamp,
          animationDomain = _parseTripGeoJsonTime.animationDomain;

      this.dataToTimeStamp = dataToTimeStamp;
      this.updateAnimationDomain(animationDomain); // get bounds from features

      var bounds = (0, _geojsonUtils.getGeojsonBounds)(this.dataToFeature); // keep a record of what type of geometry the collection has

      var featureTypes = (0, _geojsonUtils.getGeojsonFeatureTypes)(this.dataToFeature);
      this.updateMeta({
        bounds: bounds,
        featureTypes: featureTypes,
        getFeature: getFeature
      });
    }
  }, {
    key: "setInitialLayerConfig",
    value: function setInitialLayerConfig(allData) {
      this.updateLayerMeta(allData);
      return this;
    }
  }, {
    key: "renderLayer",
    value: function renderLayer(opts) {
      var data = opts.data,
          gpuFilter = opts.gpuFilter,
          mapState = opts.mapState,
          animationConfig = opts.animationConfig;
      var visConfig = this.config.visConfig;
      var zoomFactor = this.getZoomFactor(mapState);
      var updateTriggers = {
        getColor: {
          color: this.config.color,
          colorField: this.config.colorField,
          colorRange: visConfig.colorRange,
          colorScale: this.config.colorScale
        },
        getWidth: {
          sizeField: this.config.sizeField,
          sizeRange: visConfig.sizeRange
        },
        getTimestamps: {
          columns: this.config.columns,
          domain0: animationConfig.domain[0]
        },
        getFilterValue: gpuFilter.filterValueUpdateTriggers
      };
      var defaultLayerProps = this.getDefaultDeckLayerProps(opts);
      return [new _geoLayers.TripsLayer(_objectSpread(_objectSpread(_objectSpread({}, defaultLayerProps), data), {}, {
        getTimestamps: function getTimestamps(d) {
          return data.getTimestamps(d).map(function (ts) {
            return ts - animationConfig.domain[0];
          });
        },
        widthScale: this.config.visConfig.thickness * zoomFactor * zoomFactorValue,
        rounded: true,
        wrapLongitude: false,
        parameters: {
          depthTest: mapState.dragRotate,
          depthMask: false
        },
        trailLength: visConfig.trailLength
        /* * 1000*/
        ,
        currentTime: animationConfig.currentTime - animationConfig.domain[0],
        updateTriggers: updateTriggers
      }))];
    }
  }, {
    key: "type",
    get: function get() {
      return 'trip';
    }
  }, {
    key: "name",
    get: function get() {
      return 'Trip';
    }
  }, {
    key: "layerIcon",
    get: function get() {
      return _tripLayerIcon["default"];
    }
  }, {
    key: "requiredLayerColumns",
    get: function get() {
      return geoJsonRequiredColumns;
    }
  }, {
    key: "visualChannels",
    get: function get() {
      return _objectSpread(_objectSpread({}, (0, _get2["default"])((0, _getPrototypeOf2["default"])(TripLayer.prototype), "visualChannels", this)), {}, {
        size: _objectSpread(_objectSpread({}, (0, _get2["default"])((0, _getPrototypeOf2["default"])(TripLayer.prototype), "visualChannels", this).size), {}, {
          property: 'stroke',
          condition: function condition(config) {
            return config.visConfig.stroked;
          }
        })
      });
    }
  }, {
    key: "animationDomain",
    get: function get() {
      return this.config.animation.domain;
    }
  }, {
    key: "layerInfoModal",
    get: function get() {
      return {
        id: 'iconInfo',
        template: this._layerInfoModal,
        modalProps: {
          title: 'modal.tripInfo.title'
        }
      };
    }
  }], [{
    key: "findDefaultLayerProps",
    value: function findDefaultLayerProps(_ref4, foundLayers) {
      var _this4 = this;

      var label = _ref4.label,
          _ref4$fields = _ref4.fields,
          fields = _ref4$fields === void 0 ? [] : _ref4$fields,
          _ref4$allData = _ref4.allData,
          allData = _ref4$allData === void 0 ? [] : _ref4$allData,
          id = _ref4.id;
      var geojsonColumns = fields.filter(function (f) {
        return f.type === 'geojson';
      }).map(function (f) {
        return f.name;
      });
      var defaultColumns = {
        geojson: (0, _lodash2["default"])([].concat((0, _toConsumableArray2["default"])(_defaultSettings.GEOJSON_FIELDS.geojson), (0, _toConsumableArray2["default"])(geojsonColumns)))
      };
      var geoJsonColumns = this.findDefaultColumnField(defaultColumns, fields);
      var tripColumns = (geoJsonColumns || []).filter(function (col) {
        return (0, _tripUtils.isTripGeoJsonField)(allData, fields[col.geojson.fieldIdx]);
      });

      if (!tripColumns.length) {
        return {
          props: []
        };
      }

      return {
        props: tripColumns.map(function (columns) {
          return {
            label: typeof label === 'string' && label.replace(/\.[^/.]+$/, '') || _this4.type,
            columns: columns,
            isVisible: true
          };
        }),
        // if a geojson layer is created from this column, delete it
        foundLayers: foundLayers.filter(function (prop) {
          return prop.type !== 'geojson' || prop.dataId !== id || !tripColumns.find(function (c) {
            return prop.columns.geojson.name === c.geojson.name;
          });
        })
      };
    }
  }]);
  return TripLayer;
}(_baseLayer["default"]);

exports["default"] = TripLayer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9sYXllcnMvdHJpcC1sYXllci90cmlwLWxheWVyLmpzIl0sIm5hbWVzIjpbInpvb21GYWN0b3JWYWx1ZSIsImRlZmF1bHRUaGlja25lc3MiLCJkZWZhdWx0V2lkdGgiLCJ0cmlwVmlzQ29uZmlncyIsIm9wYWNpdHkiLCJ0aGlja25lc3MiLCJ0eXBlIiwiZGVmYXVsdFZhbHVlIiwibGFiZWwiLCJpc1JhbmdlZCIsInJhbmdlIiwic3RlcCIsImdyb3VwIiwicHJvcGVydHkiLCJjb2xvclJhbmdlIiwidHJhaWxMZW5ndGgiLCJzaXplUmFuZ2UiLCJnZW9Kc29uUmVxdWlyZWRDb2x1bW5zIiwiZmVhdHVyZUFjY2Vzc29yIiwiZ2VvanNvbiIsImQiLCJmaWVsZElkeCIsImZlYXR1cmVSZXNvbHZlciIsIlRyaXBMYXllciIsInByb3BzIiwiZGF0YVRvRmVhdHVyZSIsImRhdGFUb1RpbWVTdGFtcCIsInJlZ2lzdGVyVmlzQ29uZmlnIiwiZ2V0RmVhdHVyZSIsIl9sYXllckluZm9Nb2RhbCIsImNvbmZpZyIsImNvbHVtbnMiLCJhbmltYXRpb24iLCJlbmFibGVkIiwiZG9tYWluIiwib2JqZWN0IiwiYWxsRGF0YSIsInByb3BlcnRpZXMiLCJpbmRleCIsImdldFBvc2l0aW9uIiwiZmlsdGVyZWRJbmRleCIsIm1hcCIsImkiLCJmaWx0ZXIiLCJnZW9tZXRyeSIsImRhdGFzZXRzIiwib2xkTGF5ZXJEYXRhIiwiY29sb3JTY2FsZSIsImNvbG9yRmllbGQiLCJjb2xvckRvbWFpbiIsImNvbG9yIiwic2l6ZVNjYWxlIiwic2l6ZURvbWFpbiIsInNpemVGaWVsZCIsInZpc0NvbmZpZyIsImRhdGFJZCIsImdwdUZpbHRlciIsInVwZGF0ZURhdGEiLCJkYXRhIiwiY1NjYWxlIiwiZ2V0VmlzQ2hhbm5lbFNjYWxlIiwiY29sb3JzIiwiaGV4VG9SZ2IiLCJzU2NhbGUiLCJnZXREYXRhRm9yR3B1RmlsdGVyIiwiZiIsImdldEluZGV4Rm9yR3B1RmlsdGVyIiwiZ2V0RmlsdGVyVmFsdWUiLCJmaWx0ZXJWYWx1ZUFjY2Vzc29yIiwiZ2V0UGF0aCIsImNvb3JkaW5hdGVzIiwiZ2V0VGltZXN0YW1wcyIsImdldENvbG9yIiwiZ2V0RW5jb2RlZENoYW5uZWxWYWx1ZSIsImZpbGxDb2xvciIsImdldFdpZHRoIiwibGluZVdpZHRoIiwidXBkYXRlTGF5ZXJDb25maWciLCJnZXRQb3NpdGlvbkFjY2Vzc29yIiwibWV0YSIsImFuaW1hdGlvbkRvbWFpbiIsInVwZGF0ZUFuaW1hdGlvbkRvbWFpbiIsImJvdW5kcyIsImZlYXR1cmVUeXBlcyIsInVwZGF0ZU1ldGEiLCJ1cGRhdGVMYXllck1ldGEiLCJvcHRzIiwibWFwU3RhdGUiLCJhbmltYXRpb25Db25maWciLCJ6b29tRmFjdG9yIiwiZ2V0Wm9vbUZhY3RvciIsInVwZGF0ZVRyaWdnZXJzIiwiZG9tYWluMCIsImZpbHRlclZhbHVlVXBkYXRlVHJpZ2dlcnMiLCJkZWZhdWx0TGF5ZXJQcm9wcyIsImdldERlZmF1bHREZWNrTGF5ZXJQcm9wcyIsIkRlY2tHTFRyaXBzTGF5ZXIiLCJ0cyIsIndpZHRoU2NhbGUiLCJyb3VuZGVkIiwid3JhcExvbmdpdHVkZSIsInBhcmFtZXRlcnMiLCJkZXB0aFRlc3QiLCJkcmFnUm90YXRlIiwiZGVwdGhNYXNrIiwiY3VycmVudFRpbWUiLCJUcmlwTGF5ZXJJY29uIiwic2l6ZSIsImNvbmRpdGlvbiIsInN0cm9rZWQiLCJpZCIsInRlbXBsYXRlIiwibW9kYWxQcm9wcyIsInRpdGxlIiwiZm91bmRMYXllcnMiLCJmaWVsZHMiLCJnZW9qc29uQ29sdW1ucyIsIm5hbWUiLCJkZWZhdWx0Q29sdW1ucyIsIkdFT0pTT05fRklFTERTIiwiZ2VvSnNvbkNvbHVtbnMiLCJmaW5kRGVmYXVsdENvbHVtbkZpZWxkIiwidHJpcENvbHVtbnMiLCJjb2wiLCJsZW5ndGgiLCJyZXBsYWNlIiwiaXNWaXNpYmxlIiwicHJvcCIsImZpbmQiLCJjIiwiTGF5ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7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QUFSLFNBQVA7QUFDRDs7QUFFRCxhQUFPO0FBQ0xBLFFBQUFBLEtBQUssRUFBRWtHLFdBQVcsQ0FBQ2pGLEdBQVosQ0FBZ0IsVUFBQVYsT0FBTztBQUFBLGlCQUFLO0FBQ2pDdkIsWUFBQUEsS0FBSyxFQUFHLE9BQU9BLEtBQVAsS0FBaUIsUUFBakIsSUFBNkJBLEtBQUssQ0FBQ3FILE9BQU4sQ0FBYyxXQUFkLEVBQTJCLEVBQTNCLENBQTlCLElBQWlFLE1BQUksQ0FBQ3ZILElBRDVDO0FBRWpDeUIsWUFBQUEsT0FBTyxFQUFQQSxPQUZpQztBQUdqQytGLFlBQUFBLFNBQVMsRUFBRTtBQUhzQixXQUFMO0FBQUEsU0FBdkIsQ0FERjtBQU9MO0FBQ0FaLFFBQUFBLFdBQVcsRUFBRUEsV0FBVyxDQUFDdkUsTUFBWixDQUNYLFVBQUFvRixJQUFJO0FBQUEsaUJBQ0ZBLElBQUksQ0FBQ3pILElBQUwsS0FBYyxTQUFkLElBQ0F5SCxJQUFJLENBQUN4RSxNQUFMLEtBQWdCdUQsRUFEaEIsSUFFQSxDQUFDWSxXQUFXLENBQUNNLElBQVosQ0FBaUIsVUFBQUMsQ0FBQztBQUFBLG1CQUFJRixJQUFJLENBQUNoRyxPQUFMLENBQWFaLE9BQWIsQ0FBcUJrRyxJQUFyQixLQUE4QlksQ0FBQyxDQUFDOUcsT0FBRixDQUFVa0csSUFBNUM7QUFBQSxXQUFsQixDQUhDO0FBQUEsU0FETztBQVJSLE9BQVA7QUFlRDs7O0VBekZvQ2EscUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cclxuLy9cclxuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxyXG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXHJcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcclxuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxyXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcclxuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcclxuLy9cclxuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cclxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcbi8vXHJcbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcclxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXHJcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxyXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXHJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXHJcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cclxuLy8gVEhFIFNPRlRXQVJFLlxyXG5cclxuaW1wb3J0IG1lbW9pemUgZnJvbSAnbG9kYXNoLm1lbW9pemUnO1xyXG5pbXBvcnQgdW5pcSBmcm9tICdsb2Rhc2gudW5pcSc7XHJcbmltcG9ydCBMYXllciBmcm9tICcuLi9iYXNlLWxheWVyJztcclxuaW1wb3J0IHtUcmlwc0xheWVyIGFzIERlY2tHTFRyaXBzTGF5ZXJ9IGZyb20gJ0BkZWNrLmdsL2dlby1sYXllcnMnO1xyXG5cclxuaW1wb3J0IHtHRU9KU09OX0ZJRUxEU30gZnJvbSAnY29uc3RhbnRzL2RlZmF1bHQtc2V0dGluZ3MnO1xyXG5pbXBvcnQgVHJpcExheWVySWNvbiBmcm9tICcuL3RyaXAtbGF5ZXItaWNvbic7XHJcblxyXG5pbXBvcnQge1xyXG4gIGdldEdlb2pzb25EYXRhTWFwcyxcclxuICBnZXRHZW9qc29uQm91bmRzLFxyXG4gIGdldEdlb2pzb25GZWF0dXJlVHlwZXNcclxufSBmcm9tICdsYXllcnMvZ2VvanNvbi1sYXllci9nZW9qc29uLXV0aWxzJztcclxuXHJcbmltcG9ydCB7aXNUcmlwR2VvSnNvbkZpZWxkLCBwYXJzZVRyaXBHZW9Kc29uVGltZXN0YW1wfSBmcm9tICcuL3RyaXAtdXRpbHMnO1xyXG5cclxuaW1wb3J0IHtoZXhUb1JnYn0gZnJvbSAndXRpbHMvY29sb3ItdXRpbHMnO1xyXG5pbXBvcnQgVHJpcEluZm9Nb2RhbEZhY3RvcnkgZnJvbSAnLi90cmlwLWluZm8tbW9kYWwnO1xyXG5cclxuY29uc3Qgem9vbUZhY3RvclZhbHVlID0gODtcclxuXHJcbmV4cG9ydCBjb25zdCBkZWZhdWx0VGhpY2tuZXNzID0gMC41O1xyXG5leHBvcnQgY29uc3QgZGVmYXVsdFdpZHRoID0gMTtcclxuXHJcbmV4cG9ydCBjb25zdCB0cmlwVmlzQ29uZmlncyA9IHtcclxuICBvcGFjaXR5OiAnb3BhY2l0eScsXHJcbiAgdGhpY2tuZXNzOiB7XHJcbiAgICB0eXBlOiAnbnVtYmVyJyxcclxuICAgIGRlZmF1bHRWYWx1ZTogZGVmYXVsdFRoaWNrbmVzcyxcclxuICAgIGxhYmVsOiAnU3Ryb2tlIFdpZHRoJyxcclxuICAgIGlzUmFuZ2VkOiBmYWxzZSxcclxuICAgIHJhbmdlOiBbMCwgMTAwXSxcclxuICAgIHN0ZXA6IDAuMSxcclxuICAgIGdyb3VwOiAnc3Ryb2tlJyxcclxuICAgIHByb3BlcnR5OiAndGhpY2tuZXNzJ1xyXG4gIH0sXHJcbiAgY29sb3JSYW5nZTogJ2NvbG9yUmFuZ2UnLFxyXG4gIHRyYWlsTGVuZ3RoOiAndHJhaWxMZW5ndGgnLFxyXG4gIHNpemVSYW5nZTogJ3N0cm9rZVdpZHRoUmFuZ2UnXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2VvSnNvblJlcXVpcmVkQ29sdW1ucyA9IFsnZ2VvanNvbiddO1xyXG5leHBvcnQgY29uc3QgZmVhdHVyZUFjY2Vzc29yID0gKHtnZW9qc29ufSkgPT4gZCA9PiBkW2dlb2pzb24uZmllbGRJZHhdO1xyXG5leHBvcnQgY29uc3QgZmVhdHVyZVJlc29sdmVyID0gKHtnZW9qc29ufSkgPT4gZ2VvanNvbi5maWVsZElkeDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRyaXBMYXllciBleHRlbmRzIExheWVyIHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgIHRoaXMuZGF0YVRvRmVhdHVyZSA9IFtdO1xyXG4gICAgdGhpcy5kYXRhVG9UaW1lU3RhbXAgPSBbXTtcclxuICAgIHRoaXMucmVnaXN0ZXJWaXNDb25maWcodHJpcFZpc0NvbmZpZ3MpO1xyXG4gICAgdGhpcy5nZXRGZWF0dXJlID0gbWVtb2l6ZShmZWF0dXJlQWNjZXNzb3IsIGZlYXR1cmVSZXNvbHZlcik7XHJcbiAgICB0aGlzLl9sYXllckluZm9Nb2RhbCA9IFRyaXBJbmZvTW9kYWxGYWN0b3J5KCk7XHJcbiAgfVxyXG5cclxuICBnZXQgdHlwZSgpIHtcclxuICAgIHJldHVybiAndHJpcCc7XHJcbiAgfVxyXG5cclxuICBnZXQgbmFtZSgpIHtcclxuICAgIHJldHVybiAnVHJpcCc7XHJcbiAgfVxyXG5cclxuICBnZXQgbGF5ZXJJY29uKCkge1xyXG4gICAgcmV0dXJuIFRyaXBMYXllckljb247XHJcbiAgfVxyXG5cclxuICBnZXQgcmVxdWlyZWRMYXllckNvbHVtbnMoKSB7XHJcbiAgICByZXR1cm4gZ2VvSnNvblJlcXVpcmVkQ29sdW1ucztcclxuICB9XHJcblxyXG4gIGdldCB2aXN1YWxDaGFubmVscygpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIC4uLnN1cGVyLnZpc3VhbENoYW5uZWxzLFxyXG5cclxuICAgICAgc2l6ZToge1xyXG4gICAgICAgIC4uLnN1cGVyLnZpc3VhbENoYW5uZWxzLnNpemUsXHJcbiAgICAgICAgcHJvcGVydHk6ICdzdHJva2UnLFxyXG4gICAgICAgIGNvbmRpdGlvbjogY29uZmlnID0+IGNvbmZpZy52aXNDb25maWcuc3Ryb2tlZFxyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgZ2V0IGFuaW1hdGlvbkRvbWFpbigpIHtcclxuICAgIHJldHVybiB0aGlzLmNvbmZpZy5hbmltYXRpb24uZG9tYWluO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGxheWVySW5mb01vZGFsKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgaWQ6ICdpY29uSW5mbycsXHJcbiAgICAgIHRlbXBsYXRlOiB0aGlzLl9sYXllckluZm9Nb2RhbCxcclxuICAgICAgbW9kYWxQcm9wczoge1xyXG4gICAgICAgIHRpdGxlOiAnbW9kYWwudHJpcEluZm8udGl0bGUnXHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBnZXRQb3NpdGlvbkFjY2Vzc29yKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZ2V0RmVhdHVyZSh0aGlzLmNvbmZpZy5jb2x1bW5zKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBmaW5kRGVmYXVsdExheWVyUHJvcHMoe2xhYmVsLCBmaWVsZHMgPSBbXSwgYWxsRGF0YSA9IFtdLCBpZH0sIGZvdW5kTGF5ZXJzKSB7XHJcbiAgICBjb25zdCBnZW9qc29uQ29sdW1ucyA9IGZpZWxkcy5maWx0ZXIoZiA9PiBmLnR5cGUgPT09ICdnZW9qc29uJykubWFwKGYgPT4gZi5uYW1lKTtcclxuXHJcbiAgICBjb25zdCBkZWZhdWx0Q29sdW1ucyA9IHtcclxuICAgICAgZ2VvanNvbjogdW5pcShbLi4uR0VPSlNPTl9GSUVMRFMuZ2VvanNvbiwgLi4uZ2VvanNvbkNvbHVtbnNdKVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBnZW9Kc29uQ29sdW1ucyA9IHRoaXMuZmluZERlZmF1bHRDb2x1bW5GaWVsZChkZWZhdWx0Q29sdW1ucywgZmllbGRzKTtcclxuXHJcbiAgICBjb25zdCB0cmlwQ29sdW1ucyA9IChnZW9Kc29uQ29sdW1ucyB8fCBbXSkuZmlsdGVyKGNvbCA9PlxyXG4gICAgICBpc1RyaXBHZW9Kc29uRmllbGQoYWxsRGF0YSwgZmllbGRzW2NvbC5nZW9qc29uLmZpZWxkSWR4XSlcclxuICAgICk7XHJcblxyXG4gICAgaWYgKCF0cmlwQ29sdW1ucy5sZW5ndGgpIHtcclxuICAgICAgcmV0dXJuIHtwcm9wczogW119O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHByb3BzOiB0cmlwQ29sdW1ucy5tYXAoY29sdW1ucyA9PiAoe1xyXG4gICAgICAgIGxhYmVsOiAodHlwZW9mIGxhYmVsID09PSAnc3RyaW5nJyAmJiBsYWJlbC5yZXBsYWNlKC9cXC5bXi8uXSskLywgJycpKSB8fCB0aGlzLnR5cGUsXHJcbiAgICAgICAgY29sdW1ucyxcclxuICAgICAgICBpc1Zpc2libGU6IHRydWVcclxuICAgICAgfSkpLFxyXG5cclxuICAgICAgLy8gaWYgYSBnZW9qc29uIGxheWVyIGlzIGNyZWF0ZWQgZnJvbSB0aGlzIGNvbHVtbiwgZGVsZXRlIGl0XHJcbiAgICAgIGZvdW5kTGF5ZXJzOiBmb3VuZExheWVycy5maWx0ZXIoXHJcbiAgICAgICAgcHJvcCA9PlxyXG4gICAgICAgICAgcHJvcC50eXBlICE9PSAnZ2VvanNvbicgfHxcclxuICAgICAgICAgIHByb3AuZGF0YUlkICE9PSBpZCB8fFxyXG4gICAgICAgICAgIXRyaXBDb2x1bW5zLmZpbmQoYyA9PiBwcm9wLmNvbHVtbnMuZ2VvanNvbi5uYW1lID09PSBjLmdlb2pzb24ubmFtZSlcclxuICAgICAgKVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGdldERlZmF1bHRMYXllckNvbmZpZyhwcm9wcykge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgLi4uc3VwZXIuZ2V0RGVmYXVsdExheWVyQ29uZmlnKHByb3BzKSxcclxuICAgICAgYW5pbWF0aW9uOiB7XHJcbiAgICAgICAgZW5hYmxlZDogdHJ1ZSxcclxuICAgICAgICBkb21haW46IG51bGxcclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGdldEhvdmVyRGF0YShvYmplY3QsIGFsbERhdGEpIHtcclxuICAgIC8vIGluZGV4IG9mIGFsbERhdGEgaXMgc2F2ZWQgdG8gZmVhdHVyZS5wcm9wZXJ0aWVzXHJcbiAgICByZXR1cm4gYWxsRGF0YVtvYmplY3QucHJvcGVydGllcy5pbmRleF07XHJcbiAgfVxyXG5cclxuICBjYWxjdWxhdGVEYXRhQXR0cmlidXRlKHthbGxEYXRhLCBmaWx0ZXJlZEluZGV4fSwgZ2V0UG9zaXRpb24pIHtcclxuICAgIHJldHVybiBmaWx0ZXJlZEluZGV4XHJcbiAgICAgIC5tYXAoaSA9PiB0aGlzLmRhdGFUb0ZlYXR1cmVbaV0pXHJcbiAgICAgIC5maWx0ZXIoZCA9PiBkICYmIGQuZ2VvbWV0cnkudHlwZSA9PT0gJ0xpbmVTdHJpbmcnKTtcclxuICB9XHJcblxyXG4gIGZvcm1hdExheWVyRGF0YShkYXRhc2V0cywgb2xkTGF5ZXJEYXRhKSB7XHJcbiAgICAvLyB0by1kbzogcGFyc2Ugc2VnbWVudCBmcm9tIGFsbERhdGFcclxuXHJcbiAgICBjb25zdCB7XHJcbiAgICAgIGNvbG9yU2NhbGUsXHJcbiAgICAgIGNvbG9yRmllbGQsXHJcbiAgICAgIGNvbG9yRG9tYWluLFxyXG4gICAgICBjb2xvcixcclxuICAgICAgc2l6ZVNjYWxlLFxyXG4gICAgICBzaXplRG9tYWluLFxyXG4gICAgICBzaXplRmllbGQsXHJcbiAgICAgIHZpc0NvbmZpZ1xyXG4gICAgfSA9IHRoaXMuY29uZmlnO1xyXG5cclxuICAgIGNvbnN0IHtjb2xvclJhbmdlLCBzaXplUmFuZ2V9ID0gdmlzQ29uZmlnO1xyXG4gICAgY29uc3Qge2FsbERhdGEsIGdwdUZpbHRlcn0gPSBkYXRhc2V0c1t0aGlzLmNvbmZpZy5kYXRhSWRdO1xyXG4gICAgY29uc3Qge2RhdGF9ID0gdGhpcy51cGRhdGVEYXRhKGRhdGFzZXRzLCBvbGRMYXllckRhdGEpO1xyXG5cclxuICAgIC8vIGNvbG9yXHJcbiAgICBjb25zdCBjU2NhbGUgPVxyXG4gICAgICBjb2xvckZpZWxkICYmXHJcbiAgICAgIHRoaXMuZ2V0VmlzQ2hhbm5lbFNjYWxlKGNvbG9yU2NhbGUsIGNvbG9yRG9tYWluLCBjb2xvclJhbmdlLmNvbG9ycy5tYXAoaGV4VG9SZ2IpKTtcclxuICAgIC8vIGNhbGN1bGF0ZSBzdHJva2Ugc2NhbGUgLSBpZiBzdHJva2VkID0gdHJ1ZVxyXG4gICAgY29uc3Qgc1NjYWxlID0gc2l6ZUZpZWxkICYmIHRoaXMuZ2V0VmlzQ2hhbm5lbFNjYWxlKHNpemVTY2FsZSwgc2l6ZURvbWFpbiwgc2l6ZVJhbmdlKTtcclxuICAgIC8vIGFjY2VzcyBmZWF0dXJlIHByb3BlcnRpZXMgZnJvbSBnZW9qc29uIHN1YiBsYXllclxyXG4gICAgY29uc3QgZ2V0RGF0YUZvckdwdUZpbHRlciA9IGYgPT4gYWxsRGF0YVtmLnByb3BlcnRpZXMuaW5kZXhdO1xyXG4gICAgY29uc3QgZ2V0SW5kZXhGb3JHcHVGaWx0ZXIgPSBmID0+IGYucHJvcGVydGllcy5pbmRleDtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBkYXRhLFxyXG4gICAgICBnZXRGaWx0ZXJWYWx1ZTogZ3B1RmlsdGVyLmZpbHRlclZhbHVlQWNjZXNzb3IoZ2V0SW5kZXhGb3JHcHVGaWx0ZXIsIGdldERhdGFGb3JHcHVGaWx0ZXIpLFxyXG4gICAgICBnZXRQYXRoOiBkID0+IGQuZ2VvbWV0cnkuY29vcmRpbmF0ZXMsXHJcbiAgICAgIGdldFRpbWVzdGFtcHM6IGQgPT4gdGhpcy5kYXRhVG9UaW1lU3RhbXBbZC5wcm9wZXJ0aWVzLmluZGV4XSxcclxuICAgICAgZ2V0Q29sb3I6IGQgPT5cclxuICAgICAgICBjU2NhbGVcclxuICAgICAgICAgID8gdGhpcy5nZXRFbmNvZGVkQ2hhbm5lbFZhbHVlKGNTY2FsZSwgYWxsRGF0YVtkLnByb3BlcnRpZXMuaW5kZXhdLCBjb2xvckZpZWxkKVxyXG4gICAgICAgICAgOiBkLnByb3BlcnRpZXMuZmlsbENvbG9yIHx8IGNvbG9yLFxyXG4gICAgICBnZXRXaWR0aDogZCA9PlxyXG4gICAgICAgIHNTY2FsZVxyXG4gICAgICAgICAgPyB0aGlzLmdldEVuY29kZWRDaGFubmVsVmFsdWUoc1NjYWxlLCBhbGxEYXRhW2QucHJvcGVydGllcy5pbmRleF0sIHNpemVGaWVsZCwgMClcclxuICAgICAgICAgIDogZC5wcm9wZXJ0aWVzLmxpbmVXaWR0aCB8fCBkZWZhdWx0V2lkdGhcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICB1cGRhdGVBbmltYXRpb25Eb21haW4oZG9tYWluKSB7XHJcbiAgICB0aGlzLnVwZGF0ZUxheWVyQ29uZmlnKHtcclxuICAgICAgYW5pbWF0aW9uOiB7XHJcbiAgICAgICAgLi4udGhpcy5jb25maWcuYW5pbWF0aW9uLFxyXG4gICAgICAgIGRvbWFpblxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZUxheWVyTWV0YShhbGxEYXRhKSB7XHJcbiAgICBjb25zdCBnZXRGZWF0dXJlID0gdGhpcy5nZXRQb3NpdGlvbkFjY2Vzc29yKCk7XHJcbiAgICBpZiAoZ2V0RmVhdHVyZSA9PT0gdGhpcy5tZXRhLmdldEZlYXR1cmUpIHtcclxuICAgICAgLy8gVE9ETzogcmV2aXNpdCB0aGlzIGFmdGVyIGdwdSBmaWx0ZXJpbmdcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZGF0YVRvRmVhdHVyZSA9IGdldEdlb2pzb25EYXRhTWFwcyhhbGxEYXRhLCBnZXRGZWF0dXJlKTtcclxuXHJcbiAgICBjb25zdCB7ZGF0YVRvVGltZVN0YW1wLCBhbmltYXRpb25Eb21haW59ID0gcGFyc2VUcmlwR2VvSnNvblRpbWVzdGFtcCh0aGlzLmRhdGFUb0ZlYXR1cmUpO1xyXG5cclxuICAgIHRoaXMuZGF0YVRvVGltZVN0YW1wID0gZGF0YVRvVGltZVN0YW1wO1xyXG4gICAgdGhpcy51cGRhdGVBbmltYXRpb25Eb21haW4oYW5pbWF0aW9uRG9tYWluKTtcclxuXHJcbiAgICAvLyBnZXQgYm91bmRzIGZyb20gZmVhdHVyZXNcclxuICAgIGNvbnN0IGJvdW5kcyA9IGdldEdlb2pzb25Cb3VuZHModGhpcy5kYXRhVG9GZWF0dXJlKTtcclxuXHJcbiAgICAvLyBrZWVwIGEgcmVjb3JkIG9mIHdoYXQgdHlwZSBvZiBnZW9tZXRyeSB0aGUgY29sbGVjdGlvbiBoYXNcclxuICAgIGNvbnN0IGZlYXR1cmVUeXBlcyA9IGdldEdlb2pzb25GZWF0dXJlVHlwZXModGhpcy5kYXRhVG9GZWF0dXJlKTtcclxuXHJcbiAgICB0aGlzLnVwZGF0ZU1ldGEoe2JvdW5kcywgZmVhdHVyZVR5cGVzLCBnZXRGZWF0dXJlfSk7XHJcbiAgfVxyXG5cclxuICBzZXRJbml0aWFsTGF5ZXJDb25maWcoYWxsRGF0YSkge1xyXG4gICAgdGhpcy51cGRhdGVMYXllck1ldGEoYWxsRGF0YSk7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIHJlbmRlckxheWVyKG9wdHMpIHtcclxuICAgIGNvbnN0IHtkYXRhLCBncHVGaWx0ZXIsIG1hcFN0YXRlLCBhbmltYXRpb25Db25maWd9ID0gb3B0cztcclxuICAgIGNvbnN0IHt2aXNDb25maWd9ID0gdGhpcy5jb25maWc7XHJcbiAgICBjb25zdCB6b29tRmFjdG9yID0gdGhpcy5nZXRab29tRmFjdG9yKG1hcFN0YXRlKTtcclxuXHJcbiAgICBjb25zdCB1cGRhdGVUcmlnZ2VycyA9IHtcclxuICAgICAgZ2V0Q29sb3I6IHtcclxuICAgICAgICBjb2xvcjogdGhpcy5jb25maWcuY29sb3IsXHJcbiAgICAgICAgY29sb3JGaWVsZDogdGhpcy5jb25maWcuY29sb3JGaWVsZCxcclxuICAgICAgICBjb2xvclJhbmdlOiB2aXNDb25maWcuY29sb3JSYW5nZSxcclxuICAgICAgICBjb2xvclNjYWxlOiB0aGlzLmNvbmZpZy5jb2xvclNjYWxlXHJcbiAgICAgIH0sXHJcbiAgICAgIGdldFdpZHRoOiB7XHJcbiAgICAgICAgc2l6ZUZpZWxkOiB0aGlzLmNvbmZpZy5zaXplRmllbGQsXHJcbiAgICAgICAgc2l6ZVJhbmdlOiB2aXNDb25maWcuc2l6ZVJhbmdlXHJcbiAgICAgIH0sXHJcbiAgICAgIGdldFRpbWVzdGFtcHM6IHtcclxuICAgICAgICBjb2x1bW5zOiB0aGlzLmNvbmZpZy5jb2x1bW5zLFxyXG4gICAgICAgIGRvbWFpbjA6IGFuaW1hdGlvbkNvbmZpZy5kb21haW5bMF1cclxuICAgICAgfSxcclxuICAgICAgZ2V0RmlsdGVyVmFsdWU6IGdwdUZpbHRlci5maWx0ZXJWYWx1ZVVwZGF0ZVRyaWdnZXJzXHJcbiAgICB9O1xyXG4gICAgY29uc3QgZGVmYXVsdExheWVyUHJvcHMgPSB0aGlzLmdldERlZmF1bHREZWNrTGF5ZXJQcm9wcyhvcHRzKTtcclxuXHJcbiAgICByZXR1cm4gW1xyXG4gICAgICBuZXcgRGVja0dMVHJpcHNMYXllcih7XHJcbiAgICAgICAgLi4uZGVmYXVsdExheWVyUHJvcHMsXHJcbiAgICAgICAgLi4uZGF0YSxcclxuICAgICAgICBnZXRUaW1lc3RhbXBzOiBkID0+IGRhdGEuZ2V0VGltZXN0YW1wcyhkKS5tYXAodHMgPT4gdHMgLSBhbmltYXRpb25Db25maWcuZG9tYWluWzBdKSxcclxuICAgICAgICB3aWR0aFNjYWxlOiB0aGlzLmNvbmZpZy52aXNDb25maWcudGhpY2tuZXNzICogem9vbUZhY3RvciAqIHpvb21GYWN0b3JWYWx1ZSxcclxuICAgICAgICByb3VuZGVkOiB0cnVlLFxyXG4gICAgICAgIHdyYXBMb25naXR1ZGU6IGZhbHNlLFxyXG4gICAgICAgIHBhcmFtZXRlcnM6IHtcclxuICAgICAgICAgIGRlcHRoVGVzdDogbWFwU3RhdGUuZHJhZ1JvdGF0ZSxcclxuICAgICAgICAgIGRlcHRoTWFzazogZmFsc2VcclxuICAgICAgICB9LFxyXG4gICAgICAgIHRyYWlsTGVuZ3RoOiB2aXNDb25maWcudHJhaWxMZW5ndGgvKiAqIDEwMDAqLyxcclxuICAgICAgICBjdXJyZW50VGltZTogYW5pbWF0aW9uQ29uZmlnLmN1cnJlbnRUaW1lIC0gYW5pbWF0aW9uQ29uZmlnLmRvbWFpblswXSxcclxuICAgICAgICB1cGRhdGVUcmlnZ2Vyc1xyXG4gICAgICB9KVxyXG4gICAgXTtcclxuICB9XHJcbn1cclxuIl19