"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.visStateSchema = exports.visStateSchemaV1 = exports.visStateSchemaV0 = exports.propertiesV1 = exports.propertiesV0 = exports.filterPropsV1 = exports.SplitMapsSchema = exports.DimensionFieldSchema = exports.filterPropsV0 = exports.layerPropsV1 = exports.layerPropsV0 = exports.dimensionPropsV0 = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _lodash = _interopRequireDefault(require("lodash.pick"));

var _versions = require("./versions");

var _filterUtils = require("../utils/filter-utils");

var _layerFactory = require("../layers/layer-factory");

var _schema = _interopRequireDefault(require("./schema"));

var _lodash2 = _interopRequireDefault(require("lodash.clonedeep"));

var _dataUtils = require("../utils/data-utils");

var _visStateSchema;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * V0 Schema
 */
var dimensionPropsV0 = ['name', 'type']; // in v0 geojson there is only sizeField
// in v1 geojson
// stroke base on -> sizeField
// height based on -> heightField
// radius based on -> radiusField
// here we make our wiredst guess on which channel sizeField belongs to

exports.dimensionPropsV0 = dimensionPropsV0;

function geojsonSizeFieldV0ToV1(config) {
  var defaultRaiuds = 10;
  var defaultRadiusRange = [0, 50]; // if extruded, sizeField is most likely used for height

  if (config.visConfig.extruded) {
    return 'heightField';
  } // if show stroke enabled, sizeField is most likely used for stroke


  if (config.visConfig.stroked) {
    return 'sizeField';
  } // if radius changed, or radius Range Changed, sizeField is most likely used for radius
  // this is the most unreliable guess, that's why we put it in the end


  if (config.visConfig.radius !== defaultRaiuds || config.visConfig.radiusRange.some(function (d, i) {
    return d !== defaultRadiusRange[i];
  })) {
    return 'radiusField';
  }

  return 'sizeField';
} // convert v0 to v1 layer config


var DimensionFieldSchemaV0 = /*#__PURE__*/function (_Schema) {
  (0, _inherits2["default"])(DimensionFieldSchemaV0, _Schema);

  var _super = _createSuper(DimensionFieldSchemaV0);

  function DimensionFieldSchemaV0() {
    var _this;

    (0, _classCallCheck2["default"])(this, DimensionFieldSchemaV0);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "version", _versions.VERSIONS.v0);
    return _this;
  }

  (0, _createClass2["default"])(DimensionFieldSchemaV0, [{
    key: "save",
    value: function save(field) {
      // should not be called anymore
      return (0, _defineProperty2["default"])({}, this.key, field !== null ? this.savePropertiesOrApplySchema(field)[this.key] : null);
    }
  }, {
    key: "load",
    value: function load(field, parents, accumulated) {
      var _parents$slice = parents.slice(-1),
          _parents$slice2 = (0, _slicedToArray2["default"])(_parents$slice, 1),
          config = _parents$slice2[0];

      var fieldName = this.key;

      if (config.type === 'geojson' && this.key === 'sizeField' && field) {
        fieldName = geojsonSizeFieldV0ToV1(config);
      } // fold into visualChannels to be load by VisualChannelSchemaV1


      return {
        visualChannels: _objectSpread(_objectSpread({}, accumulated.visualChannels || {}), {}, (0, _defineProperty2["default"])({}, fieldName, field))
      };
    }
  }]);
  return DimensionFieldSchemaV0;
}(_schema["default"]);

var DimensionScaleSchemaV0 = /*#__PURE__*/function (_Schema2) {
  (0, _inherits2["default"])(DimensionScaleSchemaV0, _Schema2);

  var _super2 = _createSuper(DimensionScaleSchemaV0);

  function DimensionScaleSchemaV0() {
    var _this2;

    (0, _classCallCheck2["default"])(this, DimensionScaleSchemaV0);

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    _this2 = _super2.call.apply(_super2, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this2), "version", _versions.VERSIONS.v0);
    return _this2;
  }

  (0, _createClass2["default"])(DimensionScaleSchemaV0, [{
    key: "save",
    value: function save(scale) {
      return (0, _defineProperty2["default"])({}, this.key, scale);
    }
  }, {
    key: "load",
    value: function load(scale, parents, accumulated) {
      var _parents$slice3 = parents.slice(-1),
          _parents$slice4 = (0, _slicedToArray2["default"])(_parents$slice3, 1),
          config = _parents$slice4[0]; // fold into visualChannels to be load by VisualChannelSchemaV1


      if (this.key === 'sizeScale' && config.type === 'geojson') {
        // sizeScale now split into radiusScale, heightScale
        // no user customization, just use default
        return {};
      }

      return {
        visualChannels: _objectSpread(_objectSpread({}, accumulated.visualChannels || {}), {}, (0, _defineProperty2["default"])({}, this.key, scale))
      };
    }
  }]);
  return DimensionScaleSchemaV0;
}(_schema["default"]); // used to convert v0 to v1 layer config


var LayerConfigSchemaV0 = /*#__PURE__*/function (_Schema3) {
  (0, _inherits2["default"])(LayerConfigSchemaV0, _Schema3);

  var _super3 = _createSuper(LayerConfigSchemaV0);

  function LayerConfigSchemaV0() {
    var _this3;

    (0, _classCallCheck2["default"])(this, LayerConfigSchemaV0);

    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    _this3 = _super3.call.apply(_super3, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this3), "version", _versions.VERSIONS.v0);
    return _this3;
  }

  (0, _createClass2["default"])(LayerConfigSchemaV0, [{
    key: "load",
    value: function load(saved, parents, accumulated) {
      // fold v0 layer property into config.key
      return {
        config: _objectSpread(_objectSpread({}, accumulated.config || {}), {}, (0, _defineProperty2["default"])({}, this.key, saved))
      };
    }
  }]);
  return LayerConfigSchemaV0;
}(_schema["default"]); // used to convert v0 to v1 layer columns
// only return column value for each column


var LayerColumnsSchemaV0 = /*#__PURE__*/function (_Schema4) {
  (0, _inherits2["default"])(LayerColumnsSchemaV0, _Schema4);

  var _super4 = _createSuper(LayerColumnsSchemaV0);

  function LayerColumnsSchemaV0() {
    var _this4;

    (0, _classCallCheck2["default"])(this, LayerColumnsSchemaV0);

    for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      args[_key4] = arguments[_key4];
    }

    _this4 = _super4.call.apply(_super4, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this4), "version", _versions.VERSIONS.v0);
    return _this4;
  }

  (0, _createClass2["default"])(LayerColumnsSchemaV0, [{
    key: "load",
    value: function load(saved, parents, accumulated) {
      // fold v0 layer property into config.key, flatten columns
      return {
        config: _objectSpread(_objectSpread({}, accumulated.config || {}), {}, {
          columns: Object.keys(saved).reduce(function (accu, key) {
            return _objectSpread(_objectSpread({}, accu), {}, (0, _defineProperty2["default"])({}, key, saved[key].value));
          }, {})
        })
      };
    }
  }]);
  return LayerColumnsSchemaV0;
}(_schema["default"]); // used to convert v0 to v1 layer config.visConfig


var LayerConfigToVisConfigSchemaV0 = /*#__PURE__*/function (_Schema5) {
  (0, _inherits2["default"])(LayerConfigToVisConfigSchemaV0, _Schema5);

  var _super5 = _createSuper(LayerConfigToVisConfigSchemaV0);

  function LayerConfigToVisConfigSchemaV0() {
    var _this5;

    (0, _classCallCheck2["default"])(this, LayerConfigToVisConfigSchemaV0);

    for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
      args[_key5] = arguments[_key5];
    }

    _this5 = _super5.call.apply(_super5, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this5), "version", _versions.VERSIONS.v0);
    return _this5;
  }

  (0, _createClass2["default"])(LayerConfigToVisConfigSchemaV0, [{
    key: "load",
    value: function load(saved, parents, accumulated) {
      // fold v0 layer property into config.visConfig
      var accumulatedConfig = accumulated.config || {};
      return {
        config: _objectSpread(_objectSpread({}, accumulatedConfig), {}, {
          visConfig: _objectSpread(_objectSpread({}, accumulatedConfig.visConfig || {}), {}, (0, _defineProperty2["default"])({}, this.key, saved))
        })
      };
    }
  }]);
  return LayerConfigToVisConfigSchemaV0;
}(_schema["default"]);

var LayerVisConfigSchemaV0 = /*#__PURE__*/function (_Schema6) {
  (0, _inherits2["default"])(LayerVisConfigSchemaV0, _Schema6);

  var _super6 = _createSuper(LayerVisConfigSchemaV0);

  function LayerVisConfigSchemaV0() {
    var _this6;

    (0, _classCallCheck2["default"])(this, LayerVisConfigSchemaV0);

    for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
      args[_key6] = arguments[_key6];
    }

    _this6 = _super6.call.apply(_super6, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this6), "version", _versions.VERSIONS.v0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this6), "key", 'visConfig');
    return _this6;
  }

  (0, _createClass2["default"])(LayerVisConfigSchemaV0, [{
    key: "load",
    value: function load(visConfig, parents, accumulator) {
      var _parents$slice5 = parents.slice(-1),
          _parents$slice6 = (0, _slicedToArray2["default"])(_parents$slice5, 1),
          config = _parents$slice6[0];

      var rename = {
        geojson: {
          extruded: 'enable3d',
          elevationRange: 'heightRange'
        }
      };

      if (config.type in rename) {
        var propToRename = rename[config.type];
        return {
          config: _objectSpread(_objectSpread({}, accumulator.config || {}), {}, {
            visConfig: Object.keys(visConfig).reduce(function (accu, key) {
              return _objectSpread(_objectSpread({}, accu), propToRename[key] ? (0, _defineProperty2["default"])({}, propToRename[key], visConfig[key]) : (0, _defineProperty2["default"])({}, key, visConfig[key]));
            }, {})
          })
        };
      }

      return {
        config: _objectSpread(_objectSpread({}, accumulator.config || {}), {}, {
          visConfig: visConfig
        })
      };
    }
  }]);
  return LayerVisConfigSchemaV0;
}(_schema["default"]);

var LayerConfigSchemaDeleteV0 = /*#__PURE__*/function (_Schema7) {
  (0, _inherits2["default"])(LayerConfigSchemaDeleteV0, _Schema7);

  var _super7 = _createSuper(LayerConfigSchemaDeleteV0);

  function LayerConfigSchemaDeleteV0() {
    var _this7;

    (0, _classCallCheck2["default"])(this, LayerConfigSchemaDeleteV0);

    for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
      args[_key7] = arguments[_key7];
    }

    _this7 = _super7.call.apply(_super7, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this7), "version", _versions.VERSIONS.v0);
    return _this7;
  }

  (0, _createClass2["default"])(LayerConfigSchemaDeleteV0, [{
    key: "load",
    value: function load(value) {
      return {};
    }
  }]);
  return LayerConfigSchemaDeleteV0;
}(_schema["default"]);
/**
 * V0 -> V1 Changes
 * - layer is now a class
 * - config saved in a config object
 * - id, type, isAggregated is outside layer.config
 * - visualChannels is outside config, it defines available visual channel and
 *   property names for field, scale, domain and range of each visual chanel.
 * - enable3d, colorAggregation and sizeAggregation are moved into visConfig
 * - GeojsonLayer - added height, radius specific properties
 */


var layerPropsV0 = {
  id: null,
  type: null,
  // move into layer.config
  dataId: new LayerConfigSchemaV0({
    key: 'dataId'
  }),
  label: new LayerConfigSchemaV0({
    key: 'label'
  }),
  color: new LayerConfigSchemaV0({
    key: 'color'
  }),
  isVisible: new LayerConfigSchemaV0({
    key: 'isVisible'
  }),
  hidden: new LayerConfigSchemaV0({
    key: 'hidden'
  }),
  // convert visConfig
  visConfig: new LayerVisConfigSchemaV0({
    key: 'visConfig'
  }),
  // move into layer.config
  // flatten
  columns: new LayerColumnsSchemaV0(),
  // save into visualChannels
  colorField: new DimensionFieldSchemaV0({
    properties: dimensionPropsV0,
    key: 'colorField'
  }),
  colorScale: new DimensionScaleSchemaV0({
    key: 'colorScale'
  }),
  sizeField: new DimensionFieldSchemaV0({
    properties: dimensionPropsV0,
    key: 'sizeField'
  }),
  sizeScale: new DimensionScaleSchemaV0({
    key: 'sizeScale'
  }),
  // move into config.visConfig
  enable3d: new LayerConfigToVisConfigSchemaV0({
    key: 'enable3d'
  }),
  colorAggregation: new LayerConfigToVisConfigSchemaV0({
    key: 'colorAggregation'
  }),
  sizeAggregation: new LayerConfigToVisConfigSchemaV0({
    key: 'sizeAggregation'
  }),
  // delete
  isAggregated: new LayerConfigSchemaDeleteV0()
};
/**
 * V1 Schema
 */

exports.layerPropsV0 = layerPropsV0;

var ColumnSchemaV1 = /*#__PURE__*/function (_Schema8) {
  (0, _inherits2["default"])(ColumnSchemaV1, _Schema8);

  var _super8 = _createSuper(ColumnSchemaV1);

  function ColumnSchemaV1() {
    (0, _classCallCheck2["default"])(this, ColumnSchemaV1);
    return _super8.apply(this, arguments);
  }

  (0, _createClass2["default"])(ColumnSchemaV1, [{
    key: "save",
    value: function save(columns, state) {
      // starting from v1, only save column value
      // fieldIdx will be calculated during merge
      return (0, _defineProperty2["default"])({}, this.key, Object.keys(columns).reduce(function (accu, ckey) {
        return _objectSpread(_objectSpread({}, accu), {}, (0, _defineProperty2["default"])({}, ckey, columns[ckey].value));
      }, {}));
    }
  }, {
    key: "load",
    value: function load(columns) {
      return {
        columns: columns
      };
    }
  }]);
  return ColumnSchemaV1;
}(_schema["default"]);

var TextLabelSchemaV1 = /*#__PURE__*/function (_Schema9) {
  (0, _inherits2["default"])(TextLabelSchemaV1, _Schema9);

  var _super9 = _createSuper(TextLabelSchemaV1);

  function TextLabelSchemaV1() {
    (0, _classCallCheck2["default"])(this, TextLabelSchemaV1);
    return _super9.apply(this, arguments);
  }

  (0, _createClass2["default"])(TextLabelSchemaV1, [{
    key: "save",
    value: function save(textLabel) {
      return (0, _defineProperty2["default"])({}, this.key, textLabel.map(function (tl) {
        return _objectSpread(_objectSpread({}, tl), {}, {
          field: tl.field ? (0, _lodash["default"])(tl.field, ['name', 'type']) : null
        });
      }));
    }
  }, {
    key: "load",
    value: function load(textLabel) {
      return {
        textLabel: Array.isArray(textLabel) ? textLabel : [textLabel]
      };
    }
  }]);
  return TextLabelSchemaV1;
}(_schema["default"]);

var visualChannelModificationV1 = {
  point: function point(vc, parents, accumulator) {
    var _parents$slice7 = parents.slice(-1),
        _parents$slice8 = (0, _slicedToArray2["default"])(_parents$slice7, 1),
        layer = _parents$slice8[0];

    if (layer.config.visConfig.outline && vc.colorField && !vc.hasOwnProperty('strokeColorField')) {
      // point layer now supports both outline and fill
      // for older schema where filled has not been added to point layer
      // copy colorField, colorScale to strokeColorField, and strokeColorScale
      return {
        strokeColorField: vc.colorField,
        strokeColorScale: vc.colorScale,
        colorField: null,
        colorScale: 'quantile'
      };
    }

    return {};
  },
  geojson: function geojson(vc, parents, accumulator) {
    var _parents$slice9 = parents.slice(-1),
        _parents$slice10 = (0, _slicedToArray2["default"])(_parents$slice9, 1),
        layer = _parents$slice10[0];

    var isOld = !vc.hasOwnProperty('strokeColorField'); // make our best guess if this geojson layer contains point

    var isPoint = vc.radiusField || layer.config.visConfig.radius !== _layerFactory.LAYER_VIS_CONFIGS.radius.defaultValue;

    if (isOld && !isPoint && layer.config.visConfig.stroked) {
      // if stroked is true, copy color config to stroke color config
      return {
        strokeColorField: vc.colorField,
        strokeColorScale: vc.colorScale
      };
    }

    return {};
  }
};
/**
 * V1: save [field]: {name, type}, [scale]: '' for each channel
 */

var VisualChannelSchemaV1 = /*#__PURE__*/function (_Schema10) {
  (0, _inherits2["default"])(VisualChannelSchemaV1, _Schema10);

  var _super10 = _createSuper(VisualChannelSchemaV1);

  function VisualChannelSchemaV1() {
    (0, _classCallCheck2["default"])(this, VisualChannelSchemaV1);
    return _super10.apply(this, arguments);
  }

  (0, _createClass2["default"])(VisualChannelSchemaV1, [{
    key: "save",
    value: function save(visualChannels, parents) {
      // only save field and scale of each channel
      var _parents$slice11 = parents.slice(-1),
          _parents$slice12 = (0, _slicedToArray2["default"])(_parents$slice11, 1),
          layer = _parents$slice12[0];

      return (0, _defineProperty2["default"])({}, this.key, Object.keys(visualChannels).reduce( //  save channel to null if didn't select any field
      function (accu, key) {
        var _objectSpread8;

        return _objectSpread(_objectSpread({}, accu), {}, (_objectSpread8 = {}, (0, _defineProperty2["default"])(_objectSpread8, visualChannels[key].field, layer.config[visualChannels[key].field] ? (0, _lodash["default"])(layer.config[visualChannels[key].field], ['name', 'type']) : null), (0, _defineProperty2["default"])(_objectSpread8, visualChannels[key].scale, layer.config[visualChannels[key].scale]), _objectSpread8));
      }, {}));
    }
  }, {
    key: "load",
    value: function load(vc, parents, accumulator) {
      // fold channels into config
      var _parents$slice13 = parents.slice(-1),
          _parents$slice14 = (0, _slicedToArray2["default"])(_parents$slice13, 1),
          layer = _parents$slice14[0];

      var modified = visualChannelModificationV1[layer.type] ? visualChannelModificationV1[layer.type](vc, parents, accumulator) : {};
      return _objectSpread(_objectSpread({}, accumulator), {}, {
        config: _objectSpread(_objectSpread(_objectSpread({}, accumulator.config || {}), vc), modified)
      });
    }
  }]);
  return VisualChannelSchemaV1;
}(_schema["default"]);

var visConfigModificationV1 = {
  point: function point(visConfig, parents, accumulated) {
    var modified = {};

    var _parents$slice15 = parents.slice(-2, -1),
        _parents$slice16 = (0, _slicedToArray2["default"])(_parents$slice15, 1),
        layer = _parents$slice16[0];

    var isOld = !visConfig.hasOwnProperty('filled') && !visConfig.strokeColor && !visConfig.strokeColorRange;

    if (isOld) {
      // color color & color range to stroke color
      modified.strokeColor = layer.config.color;
      modified.strokeColorRange = (0, _lodash2["default"])(visConfig.colorRange);

      if (visConfig.outline) {
        // point layer now supports both outline and fill
        // for older schema where filled has not been added to point layer
        // set it to false
        modified.filled = false;
      }
    }

    return modified;
  },
  geojson: function geojson(visConfig, parents, accumulated) {
    // is points?
    var modified = {};

    var _parents$slice17 = parents.slice(-2, -1),
        _parents$slice18 = (0, _slicedToArray2["default"])(_parents$slice17, 1),
        layer = _parents$slice18[0];

    var isOld = layer.visualChannels && !layer.visualChannels.hasOwnProperty('strokeColorField') && !visConfig.strokeColor && !visConfig.strokeColorRange; // make our best guess if this geojson layer contains point

    var isPoint = layer.visualChannels && layer.visualChannels.radiusField || visConfig && visConfig.radius !== _layerFactory.LAYER_VIS_CONFIGS.radius.defaultValue;

    if (isOld) {
      // color color & color range to stroke color
      modified.strokeColor = layer.config.color;
      modified.strokeColorRange = (0, _lodash2["default"])(visConfig.colorRange);

      if (isPoint) {
        // if is point, set stroke to false
        modified.filled = true;
        modified.stroked = false;
      }
    }

    return modified;
  }
};

var VisConfigSchemaV1 = /*#__PURE__*/function (_Schema11) {
  (0, _inherits2["default"])(VisConfigSchemaV1, _Schema11);

  var _super11 = _createSuper(VisConfigSchemaV1);

  function VisConfigSchemaV1() {
    var _this8;

    (0, _classCallCheck2["default"])(this, VisConfigSchemaV1);

    for (var _len8 = arguments.length, args = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
      args[_key8] = arguments[_key8];
    }

    _this8 = _super11.call.apply(_super11, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this8), "key", 'visConfig');
    return _this8;
  }

  (0, _createClass2["default"])(VisConfigSchemaV1, [{
    key: "load",
    value: function load(visConfig, parents, accumulated) {
      var _parents$slice19 = parents.slice(-2, -1),
          _parents$slice20 = (0, _slicedToArray2["default"])(_parents$slice19, 1),
          layer = _parents$slice20[0];

      var modified = visConfigModificationV1[layer.type] ? visConfigModificationV1[layer.type](visConfig, parents, accumulated) : {};
      return {
        visConfig: _objectSpread(_objectSpread({}, visConfig), modified)
      };
    }
  }]);
  return VisConfigSchemaV1;
}(_schema["default"]);

var layerPropsV1 = {
  id: null,
  type: null,
  config: new _schema["default"]({
    version: _versions.VERSIONS.v1,
    key: 'config',
    properties: {
      dataId: null,
      label: null,
      color: null,
      columns: new ColumnSchemaV1({
        version: _versions.VERSIONS.v1,
        key: 'columns'
      }),
      isVisible: null,
      visConfig: new VisConfigSchemaV1({
        version: _versions.VERSIONS.v1
      }),
      hidden: null,
      textLabel: new TextLabelSchemaV1({
        version: _versions.VERSIONS.v1,
        key: 'textLabel'
      })
    }
  }),
  visualChannels: new VisualChannelSchemaV1({
    version: _versions.VERSIONS.v1,
    key: 'visualChannels'
  })
};
exports.layerPropsV1 = layerPropsV1;

var LayerSchemaV0 = /*#__PURE__*/function (_Schema12) {
  (0, _inherits2["default"])(LayerSchemaV0, _Schema12);

  var _super12 = _createSuper(LayerSchemaV0);

  function LayerSchemaV0() {
    var _this9;

    (0, _classCallCheck2["default"])(this, LayerSchemaV0);

    for (var _len9 = arguments.length, args = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
      args[_key9] = arguments[_key9];
    }

    _this9 = _super12.call.apply(_super12, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this9), "key", 'layers');
    return _this9;
  }

  (0, _createClass2["default"])(LayerSchemaV0, [{
    key: "save",
    value: function save(layers, parents) {
      var _this10 = this;

      var _parents$slice21 = parents.slice(-1),
          _parents$slice22 = (0, _slicedToArray2["default"])(_parents$slice21, 1),
          visState = _parents$slice22[0];

      return (0, _defineProperty2["default"])({}, this.key, visState.layerOrder.reduce(function (saved, index) {
        // save layers according to their rendering order
        var layer = layers[index];

        if (layer.isValidToSave()) {
          saved.push(_this10.savePropertiesOrApplySchema(layer).layers);
        }

        return saved;
      }, []));
    }
  }, {
    key: "load",
    value: function load(layers) {
      var _this11 = this;

      return (0, _defineProperty2["default"])({}, this.key, layers.map(function (layer) {
        return _this11.loadPropertiesOrApplySchema(layer, layers).layers;
      }));
    }
  }]);
  return LayerSchemaV0;
}(_schema["default"]);

var FilterSchemaV0 = /*#__PURE__*/function (_Schema13) {
  (0, _inherits2["default"])(FilterSchemaV0, _Schema13);

  var _super13 = _createSuper(FilterSchemaV0);

  function FilterSchemaV0() {
    var _this12;

    (0, _classCallCheck2["default"])(this, FilterSchemaV0);

    for (var _len10 = arguments.length, args = new Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
      args[_key10] = arguments[_key10];
    }

    _this12 = _super13.call.apply(_super13, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this12), "key", 'filters');
    return _this12;
  }

  (0, _createClass2["default"])(FilterSchemaV0, [{
    key: "save",
    value: function save(filters) {
      var _this13 = this;

      return {
        filters: filters.filter(_filterUtils.isValidFilterValue).map(function (filter) {
          return _this13.savePropertiesOrApplySchema(filter).filters;
        })
      };
    }
  }, {
    key: "load",
    value: function load(filters) {
      return {
        filters: filters
      };
    }
  }]);
  return FilterSchemaV0;
}(_schema["default"]);

var interactionPropsV0 = ['tooltip', 'brush'];

var InteractionSchemaV0 = /*#__PURE__*/function (_Schema14) {
  (0, _inherits2["default"])(InteractionSchemaV0, _Schema14);

  var _super14 = _createSuper(InteractionSchemaV0);

  function InteractionSchemaV0() {
    var _this14;

    (0, _classCallCheck2["default"])(this, InteractionSchemaV0);

    for (var _len11 = arguments.length, args = new Array(_len11), _key11 = 0; _key11 < _len11; _key11++) {
      args[_key11] = arguments[_key11];
    }

    _this14 = _super14.call.apply(_super14, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this14), "key", 'interactionConfig');
    return _this14;
  }

  (0, _createClass2["default"])(InteractionSchemaV0, [{
    key: "save",
    value: function save(interactionConfig) {
      return Array.isArray(this.properties) ? (0, _defineProperty2["default"])({}, this.key, this.properties.reduce(function (accu, key) {
        return _objectSpread(_objectSpread({}, accu), interactionConfig[key].enabled ? (0, _defineProperty2["default"])({}, key, interactionConfig[key].config) : {});
      }, {})) : {};
    }
  }, {
    key: "load",
    value: function load(interactionConfig) {
      // convert v0 -> v1
      // return enabled: false if disabled,
      return Array.isArray(this.properties) ? (0, _defineProperty2["default"])({}, this.key, this.properties.reduce(function (accu, key) {
        return _objectSpread(_objectSpread({}, accu), (0, _defineProperty2["default"])({}, key, _objectSpread(_objectSpread({}, interactionConfig[key] || {}), {}, {
          enabled: Boolean(interactionConfig[key])
        })));
      }, {})) : {};
    }
  }]);
  return InteractionSchemaV0;
}(_schema["default"]);

var interactionPropsV1 = [].concat(interactionPropsV0, ['geocoder', 'coordinate']);

var InteractionSchemaV1 = /*#__PURE__*/function (_Schema15) {
  (0, _inherits2["default"])(InteractionSchemaV1, _Schema15);

  var _super15 = _createSuper(InteractionSchemaV1);

  function InteractionSchemaV1() {
    var _this15;

    (0, _classCallCheck2["default"])(this, InteractionSchemaV1);

    for (var _len12 = arguments.length, args = new Array(_len12), _key12 = 0; _key12 < _len12; _key12++) {
      args[_key12] = arguments[_key12];
    }

    _this15 = _super15.call.apply(_super15, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this15), "key", 'interactionConfig');
    return _this15;
  }

  (0, _createClass2["default"])(InteractionSchemaV1, [{
    key: "save",
    value: function save(interactionConfig) {
      // save config even if disabled,
      return Array.isArray(this.properties) ? (0, _defineProperty2["default"])({}, this.key, this.properties.reduce(function (accu, key) {
        return _objectSpread(_objectSpread({}, accu), {}, (0, _defineProperty2["default"])({}, key, _objectSpread(_objectSpread({}, interactionConfig[key].config), {}, {
          enabled: interactionConfig[key].enabled
        })));
      }, {})) : {};
    }
  }, {
    key: "load",
    value: function load(interactionConfig) {
      var _this16 = this;

      var modifiedConfig = interactionConfig;
      Object.keys(interactionConfig).forEach(function (configType) {
        if (configType === 'tooltip') {
          var fieldsToShow = modifiedConfig[configType].fieldsToShow;

          if (!(0, _dataUtils.notNullorUndefined)(fieldsToShow)) {
            return (0, _defineProperty2["default"])({}, _this16.key, modifiedConfig);
          }

          Object.keys(fieldsToShow).forEach(function (key) {
            fieldsToShow[key] = fieldsToShow[key].map(function (fieldData) {
              if (!fieldData.name) {
                return {
                  name: fieldData,
                  format: null
                };
              }

              return fieldData;
            });
          });
        }

        return;
      });
      return (0, _defineProperty2["default"])({}, this.key, modifiedConfig);
    }
  }]);
  return InteractionSchemaV1;
}(_schema["default"]);

var filterPropsV0 = {
  dataId: null,
  id: null,
  name: null,
  type: null,
  value: null,
  enlarged: null
};
exports.filterPropsV0 = filterPropsV0;

var DimensionFieldSchema = /*#__PURE__*/function (_Schema16) {
  (0, _inherits2["default"])(DimensionFieldSchema, _Schema16);

  var _super16 = _createSuper(DimensionFieldSchema);

  function DimensionFieldSchema() {
    (0, _classCallCheck2["default"])(this, DimensionFieldSchema);
    return _super16.apply(this, arguments);
  }

  (0, _createClass2["default"])(DimensionFieldSchema, [{
    key: "save",
    value: function save(field) {
      return (0, _defineProperty2["default"])({}, this.key, field ? this.savePropertiesOrApplySchema(field)[this.key] : null);
    }
  }, {
    key: "load",
    value: function load(field) {
      return (0, _defineProperty2["default"])({}, this.key, field);
    }
  }]);
  return DimensionFieldSchema;
}(_schema["default"]);

exports.DimensionFieldSchema = DimensionFieldSchema;

var SplitMapsSchema = /*#__PURE__*/function (_Schema17) {
  (0, _inherits2["default"])(SplitMapsSchema, _Schema17);

  var _super17 = _createSuper(SplitMapsSchema);

  function SplitMapsSchema() {
    (0, _classCallCheck2["default"])(this, SplitMapsSchema);
    return _super17.apply(this, arguments);
  }

  (0, _createClass2["default"])(SplitMapsSchema, [{
    key: "convertLayerSettings",
    value: function convertLayerSettings(accu, _ref18) {
      var _ref19 = (0, _slicedToArray2["default"])(_ref18, 2),
          key = _ref19[0],
          value = _ref19[1];

      if (typeof value === 'boolean') {
        return _objectSpread(_objectSpread({}, accu), {}, (0, _defineProperty2["default"])({}, key, value));
      } else if (value && (0, _typeof2["default"])(value) === 'object' && value.isAvailable) {
        return _objectSpread(_objectSpread({}, accu), {}, (0, _defineProperty2["default"])({}, key, Boolean(value.isVisible)));
      }

      return accu;
    }
  }, {
    key: "load",
    value: function load(splitMaps) {
      var _this17 = this;

      // previous splitMaps Schema {layers: {layerId: {isVisible, isAvailable}}}
      if (!Array.isArray(splitMaps) || !splitMaps.length) {
        return {
          splitMaps: []
        };
      }

      return {
        splitMaps: splitMaps.map(function (settings) {
          return _objectSpread(_objectSpread({}, settings), {}, {
            layers: Object.entries(settings.layers || {}).reduce(_this17.convertLayerSettings, {})
          });
        })
      };
    }
  }]);
  return SplitMapsSchema;
}(_schema["default"]);

exports.SplitMapsSchema = SplitMapsSchema;

var filterPropsV1 = _objectSpread(_objectSpread({}, filterPropsV0), {}, {
  plotType: null,
  yAxis: new DimensionFieldSchema({
    version: _versions.VERSIONS.v1,
    key: 'yAxis',
    properties: {
      name: null,
      type: null
    }
  }),
  // polygon filter properties
  layerId: null
});

exports.filterPropsV1 = filterPropsV1;
var propertiesV0 = {
  filters: new FilterSchemaV0({
    version: _versions.VERSIONS.v0,
    properties: filterPropsV0
  }),
  layers: new LayerSchemaV0({
    version: _versions.VERSIONS.v0,
    properties: layerPropsV0
  }),
  interactionConfig: new InteractionSchemaV0({
    version: _versions.VERSIONS.v0,
    properties: interactionPropsV0
  }),
  layerBlending: null
};
exports.propertiesV0 = propertiesV0;
var propertiesV1 = {
  filters: new FilterSchemaV0({
    version: _versions.VERSIONS.v1,
    properties: filterPropsV1
  }),
  layers: new LayerSchemaV0({
    version: _versions.VERSIONS.v1,
    properties: layerPropsV1
  }),
  interactionConfig: new InteractionSchemaV1({
    version: _versions.VERSIONS.v1,
    properties: interactionPropsV1
  }),
  layerBlending: null,
  splitMaps: new SplitMapsSchema({
    key: 'splitMaps',
    version: _versions.VERSIONS.v1
  }),
  animationConfig: new _schema["default"]({
    version: _versions.VERSIONS.v1,
    properties: {
      currentTime: null,
      speed: null
    },
    key: 'animationConfig'
  })
};
exports.propertiesV1 = propertiesV1;
var visStateSchemaV0 = new _schema["default"]({
  version: _versions.VERSIONS.v0,
  properties: propertiesV0,
  key: 'visState'
});
exports.visStateSchemaV0 = visStateSchemaV0;
var visStateSchemaV1 = new _schema["default"]({
  version: _versions.VERSIONS.v1,
  properties: propertiesV1,
  key: 'visState'
});
exports.visStateSchemaV1 = visStateSchemaV1;
var visStateSchema = (_visStateSchema = {}, (0, _defineProperty2["default"])(_visStateSchema, _versions.VERSIONS.v0, {
  save: function save(toSave) {
    return visStateSchemaV0.save(toSave);
  },
  load: function load(toLoad) {
    return visStateSchemaV1.load(visStateSchemaV0.load(toLoad).visState);
  }
}), (0, _defineProperty2["default"])(_visStateSchema, _versions.VERSIONS.v1, visStateSchemaV1), _visStateSchema); // test load v0

exports.visStateSchema = visStateSchema;
var _default = visStateSchema;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY2hlbWFzL3Zpcy1zdGF0ZS1zY2hlbWEuanMiXSwibmFtZXMiOlsiZGltZW5zaW9uUHJvcHNWMCIsImdlb2pzb25TaXplRmllbGRWMFRvVjEiLCJjb25maWciLCJkZWZhdWx0UmFpdWRzIiwiZGVmYXVsdFJhZGl1c1JhbmdlIiwidmlzQ29uZmlnIiwiZXh0cnVkZWQiLCJzdHJva2VkIiwicmFkaXVzIiwicmFkaXVzUmFuZ2UiLCJzb21lIiwiZCIsImkiLCJEaW1lbnNpb25GaWVsZFNjaGVtYVYwIiwiVkVSU0lPTlMiLCJ2MCIsImZpZWxkIiwia2V5Iiwic2F2ZVByb3BlcnRpZXNPckFwcGx5U2NoZW1hIiwicGFyZW50cyIsImFjY3VtdWxhdGVkIiwic2xpY2UiLCJmaWVsZE5hbWUiLCJ0eXBlIiwidmlzdWFsQ2hhbm5lbHMiLCJTY2hlbWEiLCJEaW1lbnNpb25TY2FsZVNjaGVtYVYwIiwic2NhbGUiLCJMYXllckNvbmZpZ1NjaGVtYVYwIiwic2F2ZWQiLCJMYXllckNvbHVtbnNTY2hlbWFWMCIsImNvbHVtbnMiLCJPYmplY3QiLCJrZXlzIiwicmVkdWNlIiwiYWNjdSIsInZhbHVlIiwiTGF5ZXJDb25maWdUb1Zpc0NvbmZpZ1NjaGVtYVYwIiwiYWNjdW11bGF0ZWRDb25maWciLCJMYXllclZpc0NvbmZpZ1NjaGVtYVYwIiwiYWNjdW11bGF0b3IiLCJyZW5hbWUiLCJnZW9qc29uIiwiZWxldmF0aW9uUmFuZ2UiLCJwcm9wVG9SZW5hbWUiLCJMYXllckNvbmZpZ1NjaGVtYURlbGV0ZVYwIiwibGF5ZXJQcm9wc1YwIiwiaWQiLCJkYXRhSWQiLCJsYWJlbCIsImNvbG9yIiwiaXNWaXNpYmxlIiwiaGlkZGVuIiwiY29sb3JGaWVsZCIsInByb3BlcnRpZXMiLCJjb2xvclNjYWxlIiwic2l6ZUZpZWxkIiwic2l6ZVNjYWxlIiwiZW5hYmxlM2QiLCJjb2xvckFnZ3JlZ2F0aW9uIiwic2l6ZUFnZ3JlZ2F0aW9uIiwiaXNBZ2dyZWdhdGVkIiwiQ29sdW1uU2NoZW1hVjEiLCJzdGF0ZSIsImNrZXkiLCJUZXh0TGFiZWxTY2hlbWFWMSIsInRleHRMYWJlbCIsIm1hcCIsInRsIiwiQXJyYXkiLCJpc0FycmF5IiwidmlzdWFsQ2hhbm5lbE1vZGlmaWNhdGlvblYxIiwicG9pbnQiLCJ2YyIsImxheWVyIiwib3V0bGluZSIsImhhc093blByb3BlcnR5Iiwic3Ryb2tlQ29sb3JGaWVsZCIsInN0cm9rZUNvbG9yU2NhbGUiLCJpc09sZCIsImlzUG9pbnQiLCJyYWRpdXNGaWVsZCIsIkxBWUVSX1ZJU19DT05GSUdTIiwiZGVmYXVsdFZhbHVlIiwiVmlzdWFsQ2hhbm5lbFNjaGVtYVYxIiwibW9kaWZpZWQiLCJ2aXNDb25maWdNb2RpZmljYXRpb25WMSIsInN0cm9rZUNvbG9yIiwic3Ryb2tlQ29sb3JSYW5nZSIsImNvbG9yUmFuZ2UiLCJmaWxsZWQiLCJWaXNDb25maWdTY2hlbWFWMSIsImxheWVyUHJvcHNWMSIsInZlcnNpb24iLCJ2MSIsIkxheWVyU2NoZW1hVjAiLCJsYXllcnMiLCJ2aXNTdGF0ZSIsImxheWVyT3JkZXIiLCJpbmRleCIsImlzVmFsaWRUb1NhdmUiLCJwdXNoIiwibG9hZFByb3BlcnRpZXNPckFwcGx5U2NoZW1hIiwiRmlsdGVyU2NoZW1hVjAiLCJmaWx0ZXJzIiwiZmlsdGVyIiwiaXNWYWxpZEZpbHRlclZhbHVlIiwiaW50ZXJhY3Rpb25Qcm9wc1YwIiwiSW50ZXJhY3Rpb25TY2hlbWFWMCIsImludGVyYWN0aW9uQ29uZmlnIiwiZW5hYmxlZCIsIkJvb2xlYW4iLCJpbnRlcmFjdGlvblByb3BzVjEiLCJJbnRlcmFjdGlvblNjaGVtYVYxIiwibW9kaWZpZWRDb25maWciLCJmb3JFYWNoIiwiY29uZmlnVHlwZSIsImZpZWxkc1RvU2hvdyIsImZpZWxkRGF0YSIsIm5hbWUiLCJmb3JtYXQiLCJmaWx0ZXJQcm9wc1YwIiwiZW5sYXJnZWQiLCJEaW1lbnNpb25GaWVsZFNjaGVtYSIsIlNwbGl0TWFwc1NjaGVtYSIsImlzQXZhaWxhYmxlIiwic3BsaXRNYXBzIiwibGVuZ3RoIiwic2V0dGluZ3MiLCJlbnRyaWVzIiwiY29udmVydExheWVyU2V0dGluZ3MiLCJmaWx0ZXJQcm9wc1YxIiwicGxvdFR5cGUiLCJ5QXhpcyIsImxheWVySWQiLCJwcm9wZXJ0aWVzVjAiLCJsYXllckJsZW5kaW5nIiwicHJvcGVydGllc1YxIiwiYW5pbWF0aW9uQ29uZmlnIiwiY3VycmVudFRpbWUiLCJzcGVlZCIsInZpc1N0YXRlU2NoZW1hVjAiLCJ2aXNTdGF0ZVNjaGVtYVYxIiwidmlzU3RhdGVTY2hlbWEiLCJzYXZlIiwidG9TYXZlIiwibG9hZCIsInRvTG9hZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQTs7O0FBSU8sSUFBTUEsZ0JBQWdCLEdBQUcsQ0FBQyxNQUFELEVBQVMsTUFBVCxDQUF6QixDLENBRVA7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBQ0EsU0FBU0Msc0JBQVQsQ0FBZ0NDLE1BQWhDLEVBQXdDO0FBQ3RDLE1BQU1DLGFBQWEsR0FBRyxFQUF0QjtBQUNBLE1BQU1DLGtCQUFrQixHQUFHLENBQUMsQ0FBRCxFQUFJLEVBQUosQ0FBM0IsQ0FGc0MsQ0FJdEM7O0FBQ0EsTUFBSUYsTUFBTSxDQUFDRyxTQUFQLENBQWlCQyxRQUFyQixFQUErQjtBQUM3QixXQUFPLGFBQVA7QUFDRCxHQVBxQyxDQVN0Qzs7O0FBQ0EsTUFBSUosTUFBTSxDQUFDRyxTQUFQLENBQWlCRSxPQUFyQixFQUE4QjtBQUM1QixXQUFPLFdBQVA7QUFDRCxHQVpxQyxDQWN0QztBQUNBOzs7QUFDQSxNQUNFTCxNQUFNLENBQUNHLFNBQVAsQ0FBaUJHLE1BQWpCLEtBQTRCTCxhQUE1QixJQUNBRCxNQUFNLENBQUNHLFNBQVAsQ0FBaUJJLFdBQWpCLENBQTZCQyxJQUE3QixDQUFrQyxVQUFDQyxDQUFELEVBQUlDLENBQUo7QUFBQSxXQUFVRCxDQUFD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TyxFQUFFL0UsbUJBQVNnRixFQURRO0FBRTFCeEMsSUFBQUEsVUFBVSxFQUFFO0FBQ1ZxRixNQUFBQSxXQUFXLEVBQUUsSUFESDtBQUVWQyxNQUFBQSxLQUFLLEVBQUU7QUFGRyxLQUZjO0FBTTFCM0gsSUFBQUEsR0FBRyxFQUFFO0FBTnFCLEdBQVg7QUFsQlMsQ0FBckI7O0FBNEJBLElBQU00SCxnQkFBZ0IsR0FBRyxJQUFJcEgsa0JBQUosQ0FBVztBQUN6Q29FLEVBQUFBLE9BQU8sRUFBRS9FLG1CQUFTQyxFQUR1QjtBQUV6Q3VDLEVBQUFBLFVBQVUsRUFBRWlGLFlBRjZCO0FBR3pDdEgsRUFBQUEsR0FBRyxFQUFFO0FBSG9DLENBQVgsQ0FBekI7O0FBTUEsSUFBTTZILGdCQUFnQixHQUFHLElBQUlySCxrQkFBSixDQUFXO0FBQ3pDb0UsRUFBQUEsT0FBTyxFQUFFL0UsbUJBQVNnRixFQUR1QjtBQUV6Q3hDLEVBQUFBLFVBQVUsRUFBRW1GLFlBRjZCO0FBR3pDeEgsRUFBQUEsR0FBRyxFQUFFO0FBSG9DLENBQVgsQ0FBekI7O0FBTUEsSUFBTThILGNBQWMsNEVBQ3hCakksbUJBQVNDLEVBRGUsRUFDVjtBQUNiaUksRUFBQUEsSUFBSSxFQUFFLGNBQUFDLE1BQU07QUFBQSxXQUFJSixnQkFBZ0IsQ0FBQ0csSUFBakIsQ0FBc0JDLE1BQXRCLENBQUo7QUFBQSxHQURDO0FBRWJDLEVBQUFBLElBQUksRUFBRSxjQUFBQyxNQUFNO0FBQUEsV0FBSUwsZ0JBQWdCLENBQUNJLElBQWpCLENBQXNCTCxnQkFBZ0IsQ0FBQ0ssSUFBakIsQ0FBc0JDLE1BQXRCLEVBQThCbEQsUUFBcEQsQ0FBSjtBQUFBO0FBRkMsQ0FEVSxxREFLeEJuRixtQkFBU2dGLEVBTGUsRUFLVmdELGdCQUxVLG1CQUFwQixDLENBUVA7OztlQUNlQyxjIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IHBpY2sgZnJvbSAnbG9kYXNoLnBpY2snO1xyXG5pbXBvcnQge1ZFUlNJT05TfSBmcm9tICcuL3ZlcnNpb25zJztcclxuaW1wb3J0IHtpc1ZhbGlkRmlsdGVyVmFsdWV9IGZyb20gJ3V0aWxzL2ZpbHRlci11dGlscyc7XHJcbmltcG9ydCB7TEFZRVJfVklTX0NPTkZJR1N9IGZyb20gJ2xheWVycy9sYXllci1mYWN0b3J5JztcclxuaW1wb3J0IFNjaGVtYSBmcm9tICcuL3NjaGVtYSc7XHJcbmltcG9ydCBjbG9uZURlZXAgZnJvbSAnbG9kYXNoLmNsb25lZGVlcCc7XHJcbmltcG9ydCB7bm90TnVsbG9yVW5kZWZpbmVkfSBmcm9tICd1dGlscy9kYXRhLXV0aWxzJztcclxuXHJcbi8qKlxyXG4gKiBWMCBTY2hlbWFcclxuICovXHJcblxyXG5leHBvcnQgY29uc3QgZGltZW5zaW9uUHJvcHNWMCA9IFsnbmFtZScsICd0eXBlJ107XHJcblxyXG4vLyBpbiB2MCBnZW9qc29uIHRoZXJlIGlzIG9ubHkgc2l6ZUZpZWxkXHJcblxyXG4vLyBpbiB2MSBnZW9qc29uXHJcbi8vIHN0cm9rZSBiYXNlIG9uIC0+IHNpemVGaWVsZFxyXG4vLyBoZWlnaHQgYmFzZWQgb24gLT4gaGVpZ2h0RmllbGRcclxuLy8gcmFkaXVzIGJhc2VkIG9uIC0+IHJhZGl1c0ZpZWxkXHJcbi8vIGhlcmUgd2UgbWFrZSBvdXIgd2lyZWRzdCBndWVzcyBvbiB3aGljaCBjaGFubmVsIHNpemVGaWVsZCBiZWxvbmdzIHRvXHJcbmZ1bmN0aW9uIGdlb2pzb25TaXplRmllbGRWMFRvVjEoY29uZmlnKSB7XHJcbiAgY29uc3QgZGVmYXVsdFJhaXVkcyA9IDEwO1xyXG4gIGNvbnN0IGRlZmF1bHRSYWRpdXNSYW5nZSA9IFswLCA1MF07XHJcblxyXG4gIC8vIGlmIGV4dHJ1ZGVkLCBzaXplRmllbGQgaXMgbW9zdCBsaWtlbHkgdXNlZCBmb3IgaGVpZ2h0XHJcbiAgaWYgKGNvbmZpZy52aXNDb25maWcuZXh0cnVkZWQpIHtcclxuICAgIHJldHVybiAnaGVpZ2h0RmllbGQnO1xyXG4gIH1cclxuXHJcbiAgLy8gaWYgc2hvdyBzdHJva2UgZW5hYmxlZCwgc2l6ZUZpZWxkIGlzIG1vc3QgbGlrZWx5IHVzZWQgZm9yIHN0cm9rZVxyXG4gIGlmIChjb25maWcudmlzQ29uZmlnLnN0cm9rZWQpIHtcclxuICAgIHJldHVybiAnc2l6ZUZpZWxkJztcclxuICB9XHJcblxyXG4gIC8vIGlmIHJhZGl1cyBjaGFuZ2VkLCBvciByYWRpdXMgUmFuZ2UgQ2hhbmdlZCwgc2l6ZUZpZWxkIGlzIG1vc3QgbGlrZWx5IHVzZWQgZm9yIHJhZGl1c1xyXG4gIC8vIHRoaXMgaXMgdGhlIG1vc3QgdW5yZWxpYWJsZSBndWVzcywgdGhhdCdzIHdoeSB3ZSBwdXQgaXQgaW4gdGhlIGVuZFxyXG4gIGlmIChcclxuICAgIGNvbmZpZy52aXNDb25maWcucmFkaXVzICE9PSBkZWZhdWx0UmFpdWRzIHx8XHJcbiAgICBjb25maWcudmlzQ29uZmlnLnJhZGl1c1JhbmdlLnNvbWUoKGQsIGkpID0+IGQgIT09IGRlZmF1bHRSYWRpdXNSYW5nZVtpXSlcclxuICApIHtcclxuICAgIHJldHVybiAncmFkaXVzRmllbGQnO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuICdzaXplRmllbGQnO1xyXG59XHJcblxyXG4vLyBjb252ZXJ0IHYwIHRvIHYxIGxheWVyIGNvbmZpZ1xyXG5jbGFzcyBEaW1lbnNpb25GaWVsZFNjaGVtYVYwIGV4dGVuZHMgU2NoZW1hIHtcclxuICB2ZXJzaW9uID0gVkVSU0lPTlMudjA7XHJcbiAgc2F2ZShmaWVsZCkge1xyXG4gICAgLy8gc2hvdWxkIG5vdCBiZSBjYWxsZWQgYW55bW9yZVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgW3RoaXMua2V5XTogZmllbGQgIT09IG51bGwgPyB0aGlzLnNhdmVQcm9wZXJ0aWVzT3JBcHBseVNjaGVtYShmaWVsZClbdGhpcy5rZXldIDogbnVsbFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGxvYWQoZmllbGQsIHBhcmVudHMsIGFjY3VtdWxhdGVkKSB7XHJcbiAgICBjb25zdCBbY29uZmlnXSA9IHBhcmVudHMuc2xpY2UoLTEpO1xyXG4gICAgbGV0IGZpZWxkTmFtZSA9IHRoaXMua2V5O1xyXG4gICAgaWYgKGNvbmZpZy50eXBlID09PSAnZ2VvanNvbicgJiYgdGhpcy5rZXkgPT09ICdzaXplRmllbGQnICYmIGZpZWxkKSB7XHJcbiAgICAgIGZpZWxkTmFtZSA9IGdlb2pzb25TaXplRmllbGRWMFRvVjEoY29uZmlnKTtcclxuICAgIH1cclxuICAgIC8vIGZvbGQgaW50byB2aXN1YWxDaGFubmVscyB0byBiZSBsb2FkIGJ5IFZpc3VhbENoYW5uZWxTY2hlbWFWMVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdmlzdWFsQ2hhbm5lbHM6IHtcclxuICAgICAgICAuLi4oYWNjdW11bGF0ZWQudmlzdWFsQ2hhbm5lbHMgfHwge30pLFxyXG4gICAgICAgIFtmaWVsZE5hbWVdOiBmaWVsZFxyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuY2xhc3MgRGltZW5zaW9uU2NhbGVTY2hlbWFWMCBleHRlbmRzIFNjaGVtYSB7XHJcbiAgdmVyc2lvbiA9IFZFUlNJT05TLnYwO1xyXG4gIHNhdmUoc2NhbGUpIHtcclxuICAgIHJldHVybiB7W3RoaXMua2V5XTogc2NhbGV9O1xyXG4gIH1cclxuICBsb2FkKHNjYWxlLCBwYXJlbnRzLCBhY2N1bXVsYXRlZCkge1xyXG4gICAgY29uc3QgW2NvbmZpZ10gPSBwYXJlbnRzLnNsaWNlKC0xKTtcclxuICAgIC8vIGZvbGQgaW50byB2aXN1YWxDaGFubmVscyB0byBiZSBsb2FkIGJ5IFZpc3VhbENoYW5uZWxTY2hlbWFWMVxyXG4gICAgaWYgKHRoaXMua2V5ID09PSAnc2l6ZVNjYWxlJyAmJiBjb25maWcudHlwZSA9PT0gJ2dlb2pzb24nKSB7XHJcbiAgICAgIC8vIHNpemVTY2FsZSBub3cgc3BsaXQgaW50byByYWRpdXNTY2FsZSwgaGVpZ2h0U2NhbGVcclxuICAgICAgLy8gbm8gdXNlciBjdXN0b21pemF0aW9uLCBqdXN0IHVzZSBkZWZhdWx0XHJcbiAgICAgIHJldHVybiB7fTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB2aXN1YWxDaGFubmVsczoge1xyXG4gICAgICAgIC4uLihhY2N1bXVsYXRlZC52aXN1YWxDaGFubmVscyB8fCB7fSksXHJcbiAgICAgICAgW3RoaXMua2V5XTogc2NhbGVcclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbi8vIHVzZWQgdG8gY29udmVydCB2MCB0byB2MSBsYXllciBjb25maWdcclxuY2xhc3MgTGF5ZXJDb25maWdTY2hlbWFWMCBleHRlbmRzIFNjaGVtYSB7XHJcbiAgdmVyc2lvbiA9IFZFUlNJT05TLnYwO1xyXG4gIGxvYWQoc2F2ZWQsIHBhcmVudHMsIGFjY3VtdWxhdGVkKSB7XHJcbiAgICAvLyBmb2xkIHYwIGxheWVyIHByb3BlcnR5IGludG8gY29uZmlnLmtleVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgY29uZmlnOiB7XHJcbiAgICAgICAgLi4uKGFjY3VtdWxhdGVkLmNvbmZpZyB8fCB7fSksXHJcbiAgICAgICAgW3RoaXMua2V5XTogc2F2ZWRcclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbi8vIHVzZWQgdG8gY29udmVydCB2MCB0byB2MSBsYXllciBjb2x1bW5zXHJcbi8vIG9ubHkgcmV0dXJuIGNvbHVtbiB2YWx1ZSBmb3IgZWFjaCBjb2x1bW5cclxuY2xhc3MgTGF5ZXJDb2x1bW5zU2NoZW1hVjAgZXh0ZW5kcyBTY2hlbWEge1xyXG4gIHZlcnNpb24gPSBWRVJTSU9OUy52MDtcclxuICBsb2FkKHNhdmVkLCBwYXJlbnRzLCBhY2N1bXVsYXRlZCkge1xyXG4gICAgLy8gZm9sZCB2MCBsYXllciBwcm9wZXJ0eSBpbnRvIGNvbmZpZy5rZXksIGZsYXR0ZW4gY29sdW1uc1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgY29uZmlnOiB7XHJcbiAgICAgICAgLi4uKGFjY3VtdWxhdGVkLmNvbmZpZyB8fCB7fSksXHJcbiAgICAgICAgY29sdW1uczogT2JqZWN0LmtleXMoc2F2ZWQpLnJlZHVjZShcclxuICAgICAgICAgIChhY2N1LCBrZXkpID0+ICh7XHJcbiAgICAgICAgICAgIC4uLmFjY3UsXHJcbiAgICAgICAgICAgIFtrZXldOiBzYXZlZFtrZXldLnZhbHVlXHJcbiAgICAgICAgICB9KSxcclxuICAgICAgICAgIHt9XHJcbiAgICAgICAgKVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuLy8gdXNlZCB0byBjb252ZXJ0IHYwIHRvIHYxIGxheWVyIGNvbmZpZy52aXNDb25maWdcclxuY2xhc3MgTGF5ZXJDb25maWdUb1Zpc0NvbmZpZ1NjaGVtYVYwIGV4dGVuZHMgU2NoZW1hIHtcclxuICB2ZXJzaW9uID0gVkVSU0lPTlMudjA7XHJcbiAgbG9hZChzYXZlZCwgcGFyZW50cywgYWNjdW11bGF0ZWQpIHtcclxuICAgIC8vIGZvbGQgdjAgbGF5ZXIgcHJvcGVydHkgaW50byBjb25maWcudmlzQ29uZmlnXHJcbiAgICBjb25zdCBhY2N1bXVsYXRlZENvbmZpZyA9IGFjY3VtdWxhdGVkLmNvbmZpZyB8fCB7fTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGNvbmZpZzoge1xyXG4gICAgICAgIC4uLmFjY3VtdWxhdGVkQ29uZmlnLFxyXG4gICAgICAgIHZpc0NvbmZpZzoge1xyXG4gICAgICAgICAgLi4uKGFjY3VtdWxhdGVkQ29uZmlnLnZpc0NvbmZpZyB8fCB7fSksXHJcbiAgICAgICAgICBbdGhpcy5rZXldOiBzYXZlZFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbmNsYXNzIExheWVyVmlzQ29uZmlnU2NoZW1hVjAgZXh0ZW5kcyBTY2hlbWEge1xyXG4gIHZlcnNpb24gPSBWRVJTSU9OUy52MDtcclxuICBrZXkgPSAndmlzQ29uZmlnJztcclxuXHJcbiAgbG9hZCh2aXNDb25maWcsIHBhcmVudHMsIGFjY3VtdWxhdG9yKSB7XHJcbiAgICBjb25zdCBbY29uZmlnXSA9IHBhcmVudHMuc2xpY2UoLTEpO1xyXG4gICAgY29uc3QgcmVuYW1lID0ge1xyXG4gICAgICBnZW9qc29uOiB7XHJcbiAgICAgICAgZXh0cnVkZWQ6ICdlbmFibGUzZCcsXHJcbiAgICAgICAgZWxldmF0aW9uUmFuZ2U6ICdoZWlnaHRSYW5nZSdcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBpZiAoY29uZmlnLnR5cGUgaW4gcmVuYW1lKSB7XHJcbiAgICAgIGNvbnN0IHByb3BUb1JlbmFtZSA9IHJlbmFtZVtjb25maWcudHlwZV07XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgY29uZmlnOiB7XHJcbiAgICAgICAgICAuLi4oYWNjdW11bGF0b3IuY29uZmlnIHx8IHt9KSxcclxuICAgICAgICAgIHZpc0NvbmZpZzogT2JqZWN0LmtleXModmlzQ29uZmlnKS5yZWR1Y2UoXHJcbiAgICAgICAgICAgIChhY2N1LCBrZXkpID0+ICh7XHJcbiAgICAgICAgICAgICAgLi4uYWNjdSxcclxuICAgICAgICAgICAgICAuLi4ocHJvcFRvUmVuYW1lW2tleV1cclxuICAgICAgICAgICAgICAgID8ge1twcm9wVG9SZW5hbWVba2V5XV06IHZpc0NvbmZpZ1trZXldfVxyXG4gICAgICAgICAgICAgICAgOiB7W2tleV06IHZpc0NvbmZpZ1trZXldfSlcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIHt9XHJcbiAgICAgICAgICApXHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIGNvbmZpZzoge1xyXG4gICAgICAgIC4uLihhY2N1bXVsYXRvci5jb25maWcgfHwge30pLFxyXG4gICAgICAgIHZpc0NvbmZpZ1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuY2xhc3MgTGF5ZXJDb25maWdTY2hlbWFEZWxldGVWMCBleHRlbmRzIFNjaGVtYSB7XHJcbiAgdmVyc2lvbiA9IFZFUlNJT05TLnYwO1xyXG4gIGxvYWQodmFsdWUpIHtcclxuICAgIHJldHVybiB7fTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBWMCAtPiBWMSBDaGFuZ2VzXHJcbiAqIC0gbGF5ZXIgaXMgbm93IGEgY2xhc3NcclxuICogLSBjb25maWcgc2F2ZWQgaW4gYSBjb25maWcgb2JqZWN0XHJcbiAqIC0gaWQsIHR5cGUsIGlzQWdncmVnYXRlZCBpcyBvdXRzaWRlIGxheWVyLmNvbmZpZ1xyXG4gKiAtIHZpc3VhbENoYW5uZWxzIGlzIG91dHNpZGUgY29uZmlnLCBpdCBkZWZpbmVzIGF2YWlsYWJsZSB2aXN1YWwgY2hhbm5lbCBhbmRcclxuICogICBwcm9wZXJ0eSBuYW1lcyBmb3IgZmllbGQsIHNjYWxlLCBkb21haW4gYW5kIHJhbmdlIG9mIGVhY2ggdmlzdWFsIGNoYW5lbC5cclxuICogLSBlbmFibGUzZCwgY29sb3JBZ2dyZWdhdGlvbiBhbmQgc2l6ZUFnZ3JlZ2F0aW9uIGFyZSBtb3ZlZCBpbnRvIHZpc0NvbmZpZ1xyXG4gKiAtIEdlb2pzb25MYXllciAtIGFkZGVkIGhlaWdodCwgcmFkaXVzIHNwZWNpZmljIHByb3BlcnRpZXNcclxuICovXHJcblxyXG5leHBvcnQgY29uc3QgbGF5ZXJQcm9wc1YwID0ge1xyXG4gIGlkOiBudWxsLFxyXG4gIHR5cGU6IG51bGwsXHJcblxyXG4gIC8vIG1vdmUgaW50byBsYXllci5jb25maWdcclxuICBkYXRhSWQ6IG5ldyBMYXllckNvbmZpZ1NjaGVtYVYwKHtrZXk6ICdkYXRhSWQnfSksXHJcbiAgbGFiZWw6IG5ldyBMYXllckNvbmZpZ1NjaGVtYVYwKHtrZXk6ICdsYWJlbCd9KSxcclxuICBjb2xvcjogbmV3IExheWVyQ29uZmlnU2NoZW1hVjAoe2tleTogJ2NvbG9yJ30pLFxyXG4gIGlzVmlzaWJsZTogbmV3IExheWVyQ29uZmlnU2NoZW1hVjAoe2tleTogJ2lzVmlzaWJsZSd9KSxcclxuICBoaWRkZW46IG5ldyBMYXllckNvbmZpZ1NjaGVtYVYwKHtrZXk6ICdoaWRkZW4nfSksXHJcblxyXG4gIC8vIGNvbnZlcnQgdmlzQ29uZmlnXHJcbiAgdmlzQ29uZmlnOiBuZXcgTGF5ZXJWaXNDb25maWdTY2hlbWFWMCh7a2V5OiAndmlzQ29uZmlnJ30pLFxyXG5cclxuICAvLyBtb3ZlIGludG8gbGF5ZXIuY29uZmlnXHJcbiAgLy8gZmxhdHRlblxyXG4gIGNvbHVtbnM6IG5ldyBMYXllckNvbHVtbnNTY2hlbWFWMCgpLFxyXG5cclxuICAvLyBzYXZlIGludG8gdmlzdWFsQ2hhbm5lbHNcclxuICBjb2xvckZpZWxkOiBuZXcgRGltZW5zaW9uRmllbGRTY2hlbWFWMCh7XHJcbiAgICBwcm9wZXJ0aWVzOiBkaW1lbnNpb25Qcm9wc1YwLFxyXG4gICAga2V5OiAnY29sb3JGaWVsZCdcclxuICB9KSxcclxuICBjb2xvclNjYWxlOiBuZXcgRGltZW5zaW9uU2NhbGVTY2hlbWFWMCh7XHJcbiAgICBrZXk6ICdjb2xvclNjYWxlJ1xyXG4gIH0pLFxyXG4gIHNpemVGaWVsZDogbmV3IERpbWVuc2lvbkZpZWxkU2NoZW1hVjAoe1xyXG4gICAgcHJvcGVydGllczogZGltZW5zaW9uUHJvcHNWMCxcclxuICAgIGtleTogJ3NpemVGaWVsZCdcclxuICB9KSxcclxuICBzaXplU2NhbGU6IG5ldyBEaW1lbnNpb25TY2FsZVNjaGVtYVYwKHtcclxuICAgIGtleTogJ3NpemVTY2FsZSdcclxuICB9KSxcclxuXHJcbiAgLy8gbW92ZSBpbnRvIGNvbmZpZy52aXNDb25maWdcclxuICBlbmFibGUzZDogbmV3IExheWVyQ29uZmlnVG9WaXNDb25maWdTY2hlbWFWMCh7a2V5OiAnZW5hYmxlM2QnfSksXHJcbiAgY29sb3JBZ2dyZWdhdGlvbjogbmV3IExheWVyQ29uZmlnVG9WaXNDb25maWdTY2hlbWFWMCh7XHJcbiAgICBrZXk6ICdjb2xvckFnZ3JlZ2F0aW9uJ1xyXG4gIH0pLFxyXG4gIHNpemVBZ2dyZWdhdGlvbjogbmV3IExheWVyQ29uZmlnVG9WaXNDb25maWdTY2hlbWFWMCh7a2V5OiAnc2l6ZUFnZ3JlZ2F0aW9uJ30pLFxyXG5cclxuICAvLyBkZWxldGVcclxuICBpc0FnZ3JlZ2F0ZWQ6IG5ldyBMYXllckNvbmZpZ1NjaGVtYURlbGV0ZVYwKClcclxufTtcclxuXHJcbi8qKlxyXG4gKiBWMSBTY2hlbWFcclxuICovXHJcbmNsYXNzIENvbHVtblNjaGVtYVYxIGV4dGVuZHMgU2NoZW1hIHtcclxuICBzYXZlKGNvbHVtbnMsIHN0YXRlKSB7XHJcbiAgICAvLyBzdGFydGluZyBmcm9tIHYxLCBvbmx5IHNhdmUgY29sdW1uIHZhbHVlXHJcbiAgICAvLyBmaWVsZElkeCB3aWxsIGJlIGNhbGN1bGF0ZWQgZHVyaW5nIG1lcmdlXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBbdGhpcy5rZXldOiBPYmplY3Qua2V5cyhjb2x1bW5zKS5yZWR1Y2UoXHJcbiAgICAgICAgKGFjY3UsIGNrZXkpID0+ICh7XHJcbiAgICAgICAgICAuLi5hY2N1LFxyXG4gICAgICAgICAgW2NrZXldOiBjb2x1bW5zW2NrZXldLnZhbHVlXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAge31cclxuICAgICAgKVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGxvYWQoY29sdW1ucykge1xyXG4gICAgcmV0dXJuIHtjb2x1bW5zfTtcclxuICB9XHJcbn1cclxuXHJcbmNsYXNzIFRleHRMYWJlbFNjaGVtYVYxIGV4dGVuZHMgU2NoZW1hIHtcclxuICBzYXZlKHRleHRMYWJlbCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgW3RoaXMua2V5XTogdGV4dExhYmVsLm1hcCh0bCA9PiAoe1xyXG4gICAgICAgIC4uLnRsLFxyXG4gICAgICAgIGZpZWxkOiB0bC5maWVsZCA/IHBpY2sodGwuZmllbGQsIFsnbmFtZScsICd0eXBlJ10pIDogbnVsbFxyXG4gICAgICB9KSlcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBsb2FkKHRleHRMYWJlbCkge1xyXG4gICAgcmV0dXJuIHt0ZXh0TGFiZWw6IEFycmF5LmlzQXJyYXkodGV4dExhYmVsKSA/IHRleHRMYWJlbCA6IFt0ZXh0TGFiZWxdfTtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IHZpc3VhbENoYW5uZWxNb2RpZmljYXRpb25WMSA9IHtcclxuICBwb2ludDogKHZjLCBwYXJlbnRzLCBhY2N1bXVsYXRvcikgPT4ge1xyXG4gICAgY29uc3QgW2xheWVyXSA9IHBhcmVudHMuc2xpY2UoLTEpO1xyXG5cclxuICAgIGlmIChsYXllci5jb25maWcudmlzQ29uZmlnLm91dGxpbmUgJiYgdmMuY29sb3JGaWVsZCAmJiAhdmMuaGFzT3duUHJvcGVydHkoJ3N0cm9rZUNvbG9yRmllbGQnKSkge1xyXG4gICAgICAvLyBwb2ludCBsYXllciBub3cgc3VwcG9ydHMgYm90aCBvdXRsaW5lIGFuZCBmaWxsXHJcbiAgICAgIC8vIGZvciBvbGRlciBzY2hlbWEgd2hlcmUgZmlsbGVkIGhhcyBub3QgYmVlbiBhZGRlZCB0byBwb2ludCBsYXllclxyXG4gICAgICAvLyBjb3B5IGNvbG9yRmllbGQsIGNvbG9yU2NhbGUgdG8gc3Ryb2tlQ29sb3JGaWVsZCwgYW5kIHN0cm9rZUNvbG9yU2NhbGVcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBzdHJva2VDb2xvckZpZWxkOiB2Yy5jb2xvckZpZWxkLFxyXG4gICAgICAgIHN0cm9rZUNvbG9yU2NhbGU6IHZjLmNvbG9yU2NhbGUsXHJcbiAgICAgICAgY29sb3JGaWVsZDogbnVsbCxcclxuICAgICAgICBjb2xvclNjYWxlOiAncXVhbnRpbGUnXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgICByZXR1cm4ge307XHJcbiAgfSxcclxuICBnZW9qc29uOiAodmMsIHBhcmVudHMsIGFjY3VtdWxhdG9yKSA9PiB7XHJcbiAgICBjb25zdCBbbGF5ZXJdID0gcGFyZW50cy5zbGljZSgtMSk7XHJcbiAgICBjb25zdCBpc09sZCA9ICF2Yy5oYXNPd25Qcm9wZXJ0eSgnc3Ryb2tlQ29sb3JGaWVsZCcpO1xyXG4gICAgLy8gbWFrZSBvdXIgYmVzdCBndWVzcyBpZiB0aGlzIGdlb2pzb24gbGF5ZXIgY29udGFpbnMgcG9pbnRcclxuICAgIGNvbnN0IGlzUG9pbnQgPVxyXG4gICAgICB2Yy5yYWRpdXNGaWVsZCB8fCBsYXllci5jb25maWcudmlzQ29uZmlnLnJhZGl1cyAhPT0gTEFZRVJfVklTX0NPTkZJR1MucmFkaXVzLmRlZmF1bHRWYWx1ZTtcclxuXHJcbiAgICBpZiAoaXNPbGQgJiYgIWlzUG9pbnQgJiYgbGF5ZXIuY29uZmlnLnZpc0NvbmZpZy5zdHJva2VkKSB7XHJcbiAgICAgIC8vIGlmIHN0cm9rZWQgaXMgdHJ1ZSwgY29weSBjb2xvciBjb25maWcgdG8gc3Ryb2tlIGNvbG9yIGNvbmZpZ1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHN0cm9rZUNvbG9yRmllbGQ6IHZjLmNvbG9yRmllbGQsXHJcbiAgICAgICAgc3Ryb2tlQ29sb3JTY2FsZTogdmMuY29sb3JTY2FsZVxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHt9O1xyXG4gIH1cclxufTtcclxuLyoqXHJcbiAqIFYxOiBzYXZlIFtmaWVsZF06IHtuYW1lLCB0eXBlfSwgW3NjYWxlXTogJycgZm9yIGVhY2ggY2hhbm5lbFxyXG4gKi9cclxuY2xhc3MgVmlzdWFsQ2hhbm5lbFNjaGVtYVYxIGV4dGVuZHMgU2NoZW1hIHtcclxuICBzYXZlKHZpc3VhbENoYW5uZWxzLCBwYXJlbnRzKSB7XHJcbiAgICAvLyBvbmx5IHNhdmUgZmllbGQgYW5kIHNjYWxlIG9mIGVhY2ggY2hhbm5lbFxyXG4gICAgY29uc3QgW2xheWVyXSA9IHBhcmVudHMuc2xpY2UoLTEpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgW3RoaXMua2V5XTogT2JqZWN0LmtleXModmlzdWFsQ2hhbm5lbHMpLnJlZHVjZShcclxuICAgICAgICAvLyAgc2F2ZSBjaGFubmVsIHRvIG51bGwgaWYgZGlkbid0IHNlbGVjdCBhbnkgZmllbGRcclxuICAgICAgICAoYWNjdSwga2V5KSA9PiAoe1xyXG4gICAgICAgICAgLi4uYWNjdSxcclxuICAgICAgICAgIFt2aXN1YWxDaGFubmVsc1trZXldLmZpZWxkXTogbGF5ZXIuY29uZmlnW3Zpc3VhbENoYW5uZWxzW2tleV0uZmllbGRdXHJcbiAgICAgICAgICAgID8gcGljayhsYXllci5jb25maWdbdmlzdWFsQ2hhbm5lbHNba2V5XS5maWVsZF0sIFsnbmFtZScsICd0eXBlJ10pXHJcbiAgICAgICAgICAgIDogbnVsbCxcclxuICAgICAgICAgIFt2aXN1YWxDaGFubmVsc1trZXldLnNjYWxlXTogbGF5ZXIuY29uZmlnW3Zpc3VhbENoYW5uZWxzW2tleV0uc2NhbGVdXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAge31cclxuICAgICAgKVxyXG4gICAgfTtcclxuICB9XHJcbiAgbG9hZCh2YywgcGFyZW50cywgYWNjdW11bGF0b3IpIHtcclxuICAgIC8vIGZvbGQgY2hhbm5lbHMgaW50byBjb25maWdcclxuICAgIGNvbnN0IFtsYXllcl0gPSBwYXJlbnRzLnNsaWNlKC0xKTtcclxuICAgIGNvbnN0IG1vZGlmaWVkID0gdmlzdWFsQ2hhbm5lbE1vZGlmaWNhdGlvblYxW2xheWVyLnR5cGVdXHJcbiAgICAgID8gdmlzdWFsQ2hhbm5lbE1vZGlmaWNhdGlvblYxW2xheWVyLnR5cGVdKHZjLCBwYXJlbnRzLCBhY2N1bXVsYXRvcilcclxuICAgICAgOiB7fTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAuLi5hY2N1bXVsYXRvcixcclxuICAgICAgY29uZmlnOiB7XHJcbiAgICAgICAgLi4uKGFjY3VtdWxhdG9yLmNvbmZpZyB8fCB7fSksXHJcbiAgICAgICAgLi4udmMsXHJcbiAgICAgICAgLi4ubW9kaWZpZWRcclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuY29uc3QgdmlzQ29uZmlnTW9kaWZpY2F0aW9uVjEgPSB7XHJcbiAgcG9pbnQ6ICh2aXNDb25maWcsIHBhcmVudHMsIGFjY3VtdWxhdGVkKSA9PiB7XHJcbiAgICBjb25zdCBtb2RpZmllZCA9IHt9O1xyXG4gICAgY29uc3QgW2xheWVyXSA9IHBhcmVudHMuc2xpY2UoLTIsIC0xKTtcclxuICAgIGNvbnN0IGlzT2xkID1cclxuICAgICAgIXZpc0NvbmZpZy5oYXNPd25Qcm9wZXJ0eSgnZmlsbGVkJykgJiYgIXZpc0NvbmZpZy5zdHJva2VDb2xvciAmJiAhdmlzQ29uZmlnLnN0cm9rZUNvbG9yUmFuZ2U7XHJcbiAgICBpZiAoaXNPbGQpIHtcclxuICAgICAgLy8gY29sb3IgY29sb3IgJiBjb2xvciByYW5nZSB0byBzdHJva2UgY29sb3JcclxuICAgICAgbW9kaWZpZWQuc3Ryb2tlQ29sb3IgPSBsYXllci5jb25maWcuY29sb3I7XHJcbiAgICAgIG1vZGlmaWVkLnN0cm9rZUNvbG9yUmFuZ2UgPSBjbG9uZURlZXAodmlzQ29uZmlnLmNvbG9yUmFuZ2UpO1xyXG4gICAgICBpZiAodmlzQ29uZmlnLm91dGxpbmUpIHtcclxuICAgICAgICAvLyBwb2ludCBsYXllciBub3cgc3VwcG9ydHMgYm90aCBvdXRsaW5lIGFuZCBmaWxsXHJcbiAgICAgICAgLy8gZm9yIG9sZGVyIHNjaGVtYSB3aGVyZSBmaWxsZWQgaGFzIG5vdCBiZWVuIGFkZGVkIHRvIHBvaW50IGxheWVyXHJcbiAgICAgICAgLy8gc2V0IGl0IHRvIGZhbHNlXHJcbiAgICAgICAgbW9kaWZpZWQuZmlsbGVkID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbW9kaWZpZWQ7XHJcbiAgfSxcclxuICBnZW9qc29uOiAodmlzQ29uZmlnLCBwYXJlbnRzLCBhY2N1bXVsYXRlZCkgPT4ge1xyXG4gICAgLy8gaXMgcG9pbnRzP1xyXG4gICAgY29uc3QgbW9kaWZpZWQgPSB7fTtcclxuICAgIGNvbnN0IFtsYXllcl0gPSBwYXJlbnRzLnNsaWNlKC0yLCAtMSk7XHJcbiAgICBjb25zdCBpc09sZCA9XHJcbiAgICAgIGxheWVyLnZpc3VhbENoYW5uZWxzICYmXHJcbiAgICAgICFsYXllci52aXN1YWxDaGFubmVscy5oYXNPd25Qcm9wZXJ0eSgnc3Ryb2tlQ29sb3JGaWVsZCcpICYmXHJcbiAgICAgICF2aXNDb25maWcuc3Ryb2tlQ29sb3IgJiZcclxuICAgICAgIXZpc0NvbmZpZy5zdHJva2VDb2xvclJhbmdlO1xyXG4gICAgLy8gbWFrZSBvdXIgYmVzdCBndWVzcyBpZiB0aGlzIGdlb2pzb24gbGF5ZXIgY29udGFpbnMgcG9pbnRcclxuICAgIGNvbnN0IGlzUG9pbnQgPVxyXG4gICAgICAobGF5ZXIudmlzdWFsQ2hhbm5lbHMgJiYgbGF5ZXIudmlzdWFsQ2hhbm5lbHMucmFkaXVzRmllbGQpIHx8XHJcbiAgICAgICh2aXNDb25maWcgJiYgdmlzQ29uZmlnLnJhZGl1cyAhPT0gTEFZRVJfVklTX0NPTkZJR1MucmFkaXVzLmRlZmF1bHRWYWx1ZSk7XHJcblxyXG4gICAgaWYgKGlzT2xkKSB7XHJcbiAgICAgIC8vIGNvbG9yIGNvbG9yICYgY29sb3IgcmFuZ2UgdG8gc3Ryb2tlIGNvbG9yXHJcbiAgICAgIG1vZGlmaWVkLnN0cm9rZUNvbG9yID0gbGF5ZXIuY29uZmlnLmNvbG9yO1xyXG4gICAgICBtb2RpZmllZC5zdHJva2VDb2xvclJhbmdlID0gY2xvbmVEZWVwKHZpc0NvbmZpZy5jb2xvclJhbmdlKTtcclxuICAgICAgaWYgKGlzUG9pbnQpIHtcclxuICAgICAgICAvLyBpZiBpcyBwb2ludCwgc2V0IHN0cm9rZSB0byBmYWxzZVxyXG4gICAgICAgIG1vZGlmaWVkLmZpbGxlZCA9IHRydWU7XHJcbiAgICAgICAgbW9kaWZpZWQuc3Ryb2tlZCA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG1vZGlmaWVkO1xyXG4gIH1cclxufTtcclxuXHJcbmNsYXNzIFZpc0NvbmZpZ1NjaGVtYVYxIGV4dGVuZHMgU2NoZW1hIHtcclxuICBrZXkgPSAndmlzQ29uZmlnJztcclxuXHJcbiAgbG9hZCh2aXNDb25maWcsIHBhcmVudHMsIGFjY3VtdWxhdGVkKSB7XHJcbiAgICBjb25zdCBbbGF5ZXJdID0gcGFyZW50cy5zbGljZSgtMiwgLTEpO1xyXG4gICAgY29uc3QgbW9kaWZpZWQgPSB2aXNDb25maWdNb2RpZmljYXRpb25WMVtsYXllci50eXBlXVxyXG4gICAgICA/IHZpc0NvbmZpZ01vZGlmaWNhdGlvblYxW2xheWVyLnR5cGVdKHZpc0NvbmZpZywgcGFyZW50cywgYWNjdW11bGF0ZWQpXHJcbiAgICAgIDoge307XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdmlzQ29uZmlnOiB7XHJcbiAgICAgICAgLi4udmlzQ29uZmlnLFxyXG4gICAgICAgIC4uLm1vZGlmaWVkXHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbGF5ZXJQcm9wc1YxID0ge1xyXG4gIGlkOiBudWxsLFxyXG4gIHR5cGU6IG51bGwsXHJcbiAgY29uZmlnOiBuZXcgU2NoZW1hKHtcclxuICAgIHZlcnNpb246IFZFUlNJT05TLnYxLFxyXG4gICAga2V5OiAnY29uZmlnJyxcclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgZGF0YUlkOiBudWxsLFxyXG4gICAgICBsYWJlbDogbnVsbCxcclxuICAgICAgY29sb3I6IG51bGwsXHJcbiAgICAgIGNvbHVtbnM6IG5ldyBDb2x1bW5TY2hlbWFWMSh7XHJcbiAgICAgICAgdmVyc2lvbjogVkVSU0lPTlMudjEsXHJcbiAgICAgICAga2V5OiAnY29sdW1ucydcclxuICAgICAgfSksXHJcbiAgICAgIGlzVmlzaWJsZTogbnVsbCxcclxuICAgICAgdmlzQ29uZmlnOiBuZXcgVmlzQ29uZmlnU2NoZW1hVjEoe1xyXG4gICAgICAgIHZlcnNpb246IFZFUlNJT05TLnYxXHJcbiAgICAgIH0pLFxyXG4gICAgICBoaWRkZW46IG51bGwsXHJcbiAgICAgIHRleHRMYWJlbDogbmV3IFRleHRMYWJlbFNjaGVtYVYxKHtcclxuICAgICAgICB2ZXJzaW9uOiBWRVJTSU9OUy52MSxcclxuICAgICAgICBrZXk6ICd0ZXh0TGFiZWwnXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfSksXHJcbiAgdmlzdWFsQ2hhbm5lbHM6IG5ldyBWaXN1YWxDaGFubmVsU2NoZW1hVjEoe1xyXG4gICAgdmVyc2lvbjogVkVSU0lPTlMudjEsXHJcbiAgICBrZXk6ICd2aXN1YWxDaGFubmVscydcclxuICB9KVxyXG59O1xyXG5cclxuY2xhc3MgTGF5ZXJTY2hlbWFWMCBleHRlbmRzIFNjaGVtYSB7XHJcbiAga2V5ID0gJ2xheWVycyc7XHJcblxyXG4gIHNhdmUobGF5ZXJzLCBwYXJlbnRzKSB7XHJcbiAgICBjb25zdCBbdmlzU3RhdGVdID0gcGFyZW50cy5zbGljZSgtMSk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgW3RoaXMua2V5XTogdmlzU3RhdGUubGF5ZXJPcmRlci5yZWR1Y2UoKHNhdmVkLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIC8vIHNhdmUgbGF5ZXJzIGFjY29yZGluZyB0byB0aGVpciByZW5kZXJpbmcgb3JkZXJcclxuICAgICAgICBjb25zdCBsYXllciA9IGxheWVyc1tpbmRleF07XHJcbiAgICAgICAgaWYgKGxheWVyLmlzVmFsaWRUb1NhdmUoKSkge1xyXG4gICAgICAgICAgc2F2ZWQucHVzaCh0aGlzLnNhdmVQcm9wZXJ0aWVzT3JBcHBseVNjaGVtYShsYXllcikubGF5ZXJzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHNhdmVkO1xyXG4gICAgICB9LCBbXSlcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBsb2FkKGxheWVycykge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgW3RoaXMua2V5XTogbGF5ZXJzLm1hcChsYXllciA9PiB0aGlzLmxvYWRQcm9wZXJ0aWVzT3JBcHBseVNjaGVtYShsYXllciwgbGF5ZXJzKS5sYXllcnMpXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuY2xhc3MgRmlsdGVyU2NoZW1hVjAgZXh0ZW5kcyBTY2hlbWEge1xyXG4gIGtleSA9ICdmaWx0ZXJzJztcclxuICBzYXZlKGZpbHRlcnMpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGZpbHRlcnM6IGZpbHRlcnNcclxuICAgICAgICAuZmlsdGVyKGlzVmFsaWRGaWx0ZXJWYWx1ZSlcclxuICAgICAgICAubWFwKGZpbHRlciA9PiB0aGlzLnNhdmVQcm9wZXJ0aWVzT3JBcHBseVNjaGVtYShmaWx0ZXIpLmZpbHRlcnMpXHJcbiAgICB9O1xyXG4gIH1cclxuICBsb2FkKGZpbHRlcnMpIHtcclxuICAgIHJldHVybiB7ZmlsdGVyc307XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBpbnRlcmFjdGlvblByb3BzVjAgPSBbJ3Rvb2x0aXAnLCAnYnJ1c2gnXTtcclxuXHJcbmNsYXNzIEludGVyYWN0aW9uU2NoZW1hVjAgZXh0ZW5kcyBTY2hlbWEge1xyXG4gIGtleSA9ICdpbnRlcmFjdGlvbkNvbmZpZyc7XHJcblxyXG4gIHNhdmUoaW50ZXJhY3Rpb25Db25maWcpIHtcclxuICAgIHJldHVybiBBcnJheS5pc0FycmF5KHRoaXMucHJvcGVydGllcylcclxuICAgICAgPyB7XHJcbiAgICAgICAgICBbdGhpcy5rZXldOiB0aGlzLnByb3BlcnRpZXMucmVkdWNlKFxyXG4gICAgICAgICAgICAoYWNjdSwga2V5KSA9PiAoe1xyXG4gICAgICAgICAgICAgIC4uLmFjY3UsXHJcbiAgICAgICAgICAgICAgLi4uKGludGVyYWN0aW9uQ29uZmlnW2tleV0uZW5hYmxlZCA/IHtba2V5XTogaW50ZXJhY3Rpb25Db25maWdba2V5XS5jb25maWd9IDoge30pXHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICB7fVxyXG4gICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuICAgICAgOiB7fTtcclxuICB9XHJcbiAgbG9hZChpbnRlcmFjdGlvbkNvbmZpZykge1xyXG4gICAgLy8gY29udmVydCB2MCAtPiB2MVxyXG4gICAgLy8gcmV0dXJuIGVuYWJsZWQ6IGZhbHNlIGlmIGRpc2FibGVkLFxyXG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkodGhpcy5wcm9wZXJ0aWVzKVxyXG4gICAgICA/IHtcclxuICAgICAgICAgIFt0aGlzLmtleV06IHRoaXMucHJvcGVydGllcy5yZWR1Y2UoXHJcbiAgICAgICAgICAgIChhY2N1LCBrZXkpID0+ICh7XHJcbiAgICAgICAgICAgICAgLi4uYWNjdSxcclxuICAgICAgICAgICAgICAuLi57XHJcbiAgICAgICAgICAgICAgICBba2V5XToge1xyXG4gICAgICAgICAgICAgICAgICAuLi4oaW50ZXJhY3Rpb25Db25maWdba2V5XSB8fCB7fSksXHJcbiAgICAgICAgICAgICAgICAgIGVuYWJsZWQ6IEJvb2xlYW4oaW50ZXJhY3Rpb25Db25maWdba2V5XSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICB7fVxyXG4gICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuICAgICAgOiB7fTtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IGludGVyYWN0aW9uUHJvcHNWMSA9IFsuLi5pbnRlcmFjdGlvblByb3BzVjAsICdnZW9jb2RlcicsICdjb29yZGluYXRlJ107XHJcblxyXG5jbGFzcyBJbnRlcmFjdGlvblNjaGVtYVYxIGV4dGVuZHMgU2NoZW1hIHtcclxuICBrZXkgPSAnaW50ZXJhY3Rpb25Db25maWcnO1xyXG5cclxuICBzYXZlKGludGVyYWN0aW9uQ29uZmlnKSB7XHJcbiAgICAvLyBzYXZlIGNvbmZpZyBldmVuIGlmIGRpc2FibGVkLFxyXG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkodGhpcy5wcm9wZXJ0aWVzKVxyXG4gICAgICA/IHtcclxuICAgICAgICAgIFt0aGlzLmtleV06IHRoaXMucHJvcGVydGllcy5yZWR1Y2UoXHJcbiAgICAgICAgICAgIChhY2N1LCBrZXkpID0+ICh7XHJcbiAgICAgICAgICAgICAgLi4uYWNjdSxcclxuICAgICAgICAgICAgICBba2V5XToge1xyXG4gICAgICAgICAgICAgICAgLi4uaW50ZXJhY3Rpb25Db25maWdba2V5XS5jb25maWcsXHJcbiAgICAgICAgICAgICAgICBlbmFibGVkOiBpbnRlcmFjdGlvbkNvbmZpZ1trZXldLmVuYWJsZWRcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICB7fVxyXG4gICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuICAgICAgOiB7fTtcclxuICB9XHJcbiAgbG9hZChpbnRlcmFjdGlvbkNvbmZpZykge1xyXG4gICAgY29uc3QgbW9kaWZpZWRDb25maWcgPSBpbnRlcmFjdGlvbkNvbmZpZztcclxuICAgIE9iamVjdC5rZXlzKGludGVyYWN0aW9uQ29uZmlnKS5mb3JFYWNoKGNvbmZpZ1R5cGUgPT4ge1xyXG4gICAgICBpZiAoY29uZmlnVHlwZSA9PT0gJ3Rvb2x0aXAnKSB7XHJcbiAgICAgICAgY29uc3QgZmllbGRzVG9TaG93ID0gbW9kaWZpZWRDb25maWdbY29uZmlnVHlwZV0uZmllbGRzVG9TaG93O1xyXG4gICAgICAgIGlmICghbm90TnVsbG9yVW5kZWZpbmVkKGZpZWxkc1RvU2hvdykpIHtcclxuICAgICAgICAgIHJldHVybiB7W3RoaXMua2V5XTogbW9kaWZpZWRDb25maWd9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBPYmplY3Qua2V5cyhmaWVsZHNUb1Nob3cpLmZvckVhY2goa2V5ID0+IHtcclxuICAgICAgICAgIGZpZWxkc1RvU2hvd1trZXldID0gZmllbGRzVG9TaG93W2tleV0ubWFwKGZpZWxkRGF0YSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghZmllbGREYXRhLm5hbWUpIHtcclxuICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogZmllbGREYXRhLFxyXG4gICAgICAgICAgICAgICAgZm9ybWF0OiBudWxsXHJcbiAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZmllbGREYXRhO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4ge1t0aGlzLmtleV06IG1vZGlmaWVkQ29uZmlnfTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBmaWx0ZXJQcm9wc1YwID0ge1xyXG4gIGRhdGFJZDogbnVsbCxcclxuICBpZDogbnVsbCxcclxuICBuYW1lOiBudWxsLFxyXG4gIHR5cGU6IG51bGwsXHJcbiAgdmFsdWU6IG51bGwsXHJcbiAgZW5sYXJnZWQ6IG51bGxcclxufTtcclxuXHJcbmV4cG9ydCBjbGFzcyBEaW1lbnNpb25GaWVsZFNjaGVtYSBleHRlbmRzIFNjaGVtYSB7XHJcbiAgc2F2ZShmaWVsZCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgW3RoaXMua2V5XTogZmllbGQgPyB0aGlzLnNhdmVQcm9wZXJ0aWVzT3JBcHBseVNjaGVtYShmaWVsZClbdGhpcy5rZXldIDogbnVsbFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGxvYWQoZmllbGQpIHtcclxuICAgIHJldHVybiB7W3RoaXMua2V5XTogZmllbGR9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNwbGl0TWFwc1NjaGVtYSBleHRlbmRzIFNjaGVtYSB7XHJcbiAgY29udmVydExheWVyU2V0dGluZ3MoYWNjdSwgW2tleSwgdmFsdWVdKSB7XHJcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbicpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5hY2N1LFxyXG4gICAgICAgIFtrZXldOiB2YWx1ZVxyXG4gICAgICB9O1xyXG4gICAgfSBlbHNlIGlmICh2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlLmlzQXZhaWxhYmxlKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uYWNjdSxcclxuICAgICAgICBba2V5XTogQm9vbGVhbih2YWx1ZS5pc1Zpc2libGUpXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYWNjdTtcclxuICB9XHJcblxyXG4gIGxvYWQoc3BsaXRNYXBzKSB7XHJcbiAgICAvLyBwcmV2aW91cyBzcGxpdE1hcHMgU2NoZW1hIHtsYXllcnM6IHtsYXllcklkOiB7aXNWaXNpYmxlLCBpc0F2YWlsYWJsZX19fVxyXG5cclxuICAgIGlmICghQXJyYXkuaXNBcnJheShzcGxpdE1hcHMpIHx8ICFzcGxpdE1hcHMubGVuZ3RoKSB7XHJcbiAgICAgIHJldHVybiB7c3BsaXRNYXBzOiBbXX07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3BsaXRNYXBzOiBzcGxpdE1hcHMubWFwKHNldHRpbmdzID0+ICh7XHJcbiAgICAgICAgLi4uc2V0dGluZ3MsXHJcbiAgICAgICAgbGF5ZXJzOiBPYmplY3QuZW50cmllcyhzZXR0aW5ncy5sYXllcnMgfHwge30pLnJlZHVjZSh0aGlzLmNvbnZlcnRMYXllclNldHRpbmdzLCB7fSlcclxuICAgICAgfSkpXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGZpbHRlclByb3BzVjEgPSB7XHJcbiAgLi4uZmlsdGVyUHJvcHNWMCxcclxuICBwbG90VHlwZTogbnVsbCxcclxuICB5QXhpczogbmV3IERpbWVuc2lvbkZpZWxkU2NoZW1hKHtcclxuICAgIHZlcnNpb246IFZFUlNJT05TLnYxLFxyXG4gICAga2V5OiAneUF4aXMnLFxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICBuYW1lOiBudWxsLFxyXG4gICAgICB0eXBlOiBudWxsXHJcbiAgICB9XHJcbiAgfSksXHJcblxyXG4gIC8vIHBvbHlnb24gZmlsdGVyIHByb3BlcnRpZXNcclxuICBsYXllcklkOiBudWxsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcHJvcGVydGllc1YwID0ge1xyXG4gIGZpbHRlcnM6IG5ldyBGaWx0ZXJTY2hlbWFWMCh7XHJcbiAgICB2ZXJzaW9uOiBWRVJTSU9OUy52MCxcclxuICAgIHByb3BlcnRpZXM6IGZpbHRlclByb3BzVjBcclxuICB9KSxcclxuICBsYXllcnM6IG5ldyBMYXllclNjaGVtYVYwKHtcclxuICAgIHZlcnNpb246IFZFUlNJT05TLnYwLFxyXG4gICAgcHJvcGVydGllczogbGF5ZXJQcm9wc1YwXHJcbiAgfSksXHJcbiAgaW50ZXJhY3Rpb25Db25maWc6IG5ldyBJbnRlcmFjdGlvblNjaGVtYVYwKHtcclxuICAgIHZlcnNpb246IFZFUlNJT05TLnYwLFxyXG4gICAgcHJvcGVydGllczogaW50ZXJhY3Rpb25Qcm9wc1YwXHJcbiAgfSksXHJcbiAgbGF5ZXJCbGVuZGluZzogbnVsbFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHByb3BlcnRpZXNWMSA9IHtcclxuICBmaWx0ZXJzOiBuZXcgRmlsdGVyU2NoZW1hVjAoe1xyXG4gICAgdmVyc2lvbjogVkVSU0lPTlMudjEsXHJcbiAgICBwcm9wZXJ0aWVzOiBmaWx0ZXJQcm9wc1YxXHJcbiAgfSksXHJcbiAgbGF5ZXJzOiBuZXcgTGF5ZXJTY2hlbWFWMCh7XHJcbiAgICB2ZXJzaW9uOiBWRVJTSU9OUy52MSxcclxuICAgIHByb3BlcnRpZXM6IGxheWVyUHJvcHNWMVxyXG4gIH0pLFxyXG4gIGludGVyYWN0aW9uQ29uZmlnOiBuZXcgSW50ZXJhY3Rpb25TY2hlbWFWMSh7XHJcbiAgICB2ZXJzaW9uOiBWRVJTSU9OUy52MSxcclxuICAgIHByb3BlcnRpZXM6IGludGVyYWN0aW9uUHJvcHNWMVxyXG4gIH0pLFxyXG4gIGxheWVyQmxlbmRpbmc6IG51bGwsXHJcbiAgc3BsaXRNYXBzOiBuZXcgU3BsaXRNYXBzU2NoZW1hKHtcclxuICAgIGtleTogJ3NwbGl0TWFwcycsXHJcbiAgICB2ZXJzaW9uOiBWRVJTSU9OUy52MVxyXG4gIH0pLFxyXG4gIGFuaW1hdGlvbkNvbmZpZzogbmV3IFNjaGVtYSh7XHJcbiAgICB2ZXJzaW9uOiBWRVJTSU9OUy52MSxcclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgY3VycmVudFRpbWU6IG51bGwsXHJcbiAgICAgIHNwZWVkOiBudWxsXHJcbiAgICB9LFxyXG4gICAga2V5OiAnYW5pbWF0aW9uQ29uZmlnJ1xyXG4gIH0pXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgdmlzU3RhdGVTY2hlbWFWMCA9IG5ldyBTY2hlbWEoe1xyXG4gIHZlcnNpb246IFZFUlNJT05TLnYwLFxyXG4gIHByb3BlcnRpZXM6IHByb3BlcnRpZXNWMCxcclxuICBrZXk6ICd2aXNTdGF0ZSdcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgdmlzU3RhdGVTY2hlbWFWMSA9IG5ldyBTY2hlbWEoe1xyXG4gIHZlcnNpb246IFZFUlNJT05TLnYxLFxyXG4gIHByb3BlcnRpZXM6IHByb3BlcnRpZXNWMSxcclxuICBrZXk6ICd2aXNTdGF0ZSdcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgdmlzU3RhdGVTY2hlbWEgPSB7XHJcbiAgW1ZFUlNJT05TLnYwXToge1xyXG4gICAgc2F2ZTogdG9TYXZlID0+IHZpc1N0YXRlU2NoZW1hVjAuc2F2ZSh0b1NhdmUpLFxyXG4gICAgbG9hZDogdG9Mb2FkID0+IHZpc1N0YXRlU2NoZW1hVjEubG9hZCh2aXNTdGF0ZVNjaGVtYVYwLmxvYWQodG9Mb2FkKS52aXNTdGF0ZSlcclxuICB9LFxyXG4gIFtWRVJTSU9OUy52MV06IHZpc1N0YXRlU2NoZW1hVjFcclxufTtcclxuXHJcbi8vIHRlc3QgbG9hZCB2MFxyXG5leHBvcnQgZGVmYXVsdCB2aXNTdGF0ZVNjaGVtYTtcclxuIl19