"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.colorMaker = exports.layerColors = exports.OVERLAY_TYPE = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _window = require("global/window");

var _keymirror = _interopRequireDefault(require("keymirror"));

var _extensions = require("@deck.gl/extensions");

var _core = require("@deck.gl/core");

var _layers = require("@deck.gl/layers");

var _defaultLayerIcon = _interopRequireDefault(require("./default-layer-icon"));

var _layerUpdate = require("./layer-update");

var _defaultSettings = require("../constants/default-settings");

var _colorRanges = require("../constants/color-ranges");

var _customColorRanges = require("../constants/custom-color-ranges");

var _layerFactory = require("./layer-factory");

var _utils = require("../utils/utils");

var _dataUtils = require("../utils/data-utils");

var _dataScaleUtils = require("../utils/data-scale-utils");

var _colorUtils = require("../utils/color-utils");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var _marked = /*#__PURE__*/_regenerator["default"].mark(generateColor);

/**
 * Approx. number of points to sample in a large data set
 * @type {number}
 */
var MAX_SAMPLE_SIZE = 5000;
var dataFilterExtension = new _extensions.DataFilterExtension({
  filterSize: _defaultSettings.MAX_GPU_FILTERS
});

var identity = function identity(d) {
  return d;
};

var OVERLAY_TYPE = (0, _keymirror["default"])({
  deckgl: null,
  mapboxgl: null
});
exports.OVERLAY_TYPE = OVERLAY_TYPE;
var layerColors = Object.values(_customColorRanges.DataVizColors).map(_colorUtils.hexToRgb);
exports.layerColors = layerColors;

function generateColor() {
  var index;
  return _regenerator["default"].wrap(function generateColor$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          index = 0;

        case 1:
          if (!(index < layerColors.length + 1)) {
            _context.next = 7;
            break;
          }

          if (index === layerColors.length) {
            index = 0;
          }

          _context.next = 5;
          return layerColors[index++];

        case 5:
          _context.next = 1;
          break;

        case 7:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}

var colorMaker = generateColor();
exports.colorMaker = colorMaker;

var defaultGetFieldValue = function defaultGetFieldValue(field, d) {
  return d[field.tableFieldIndex - 1];
};

var Layer = /*#__PURE__*/function () {
  function Layer() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    (0, _classCallCheck2["default"])(this, Layer);
    this.id = props.id || (0, _utils.generateHashId)(6); // meta

    this.meta = {}; // visConfigSettings

    this.visConfigSettings = {};
    this.config = this.getDefaultLayerConfig(_objectSpread({
      columns: this.getLayerColumns()
    }, props));
  }

  (0, _createClass2["default"])(Layer, [{
    key: "getDefaultLayerConfig",
    value: function getDefaultLayerConfig() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return {
        dataId: props.dataId || null,
        label: props.label || 'new layer',
        color: props.color || colorMaker.next().value,
        columns: props.columns || null,
        isVisible: props.isVisible || false,
        isConfigActive: props.isConfigActive || false,
        highlightColor: props.highlightColor || [252, 242, 26, 255],
        hidden: props.hidden || false,
        // TODO: refactor this into separate visual Channel config
        // color by field, domain is set by filters, field, scale type
        colorField: null,
        colorDomain: [0, 1],
        colorScale: _defaultSettings.SCALE_TYPES.quantile,
        // color by size, domain is set by filters, field, scale type
        sizeDomain: [0, 1],
        sizeScale: _defaultSettings.SCALE_TYPES.linear,
        sizeField: null,
        visConfig: {},
        textLabel: [_layerFactory.DEFAULT_TEXT_LABEL],
        colorUI: {
          color: _layerFactory.DEFAULT_COLOR_UI,
          colorRange: _layerFactory.DEFAULT_COLOR_UI
        },
        animation: {
          enabled: false
        }
      };
    }
    /**
     * Get the description of a visualChannel config
     * @param key
     * @returns {{label: string, measure: (string|string)}}
     */

  }, {
    key: "getVisualChannelDescription",
    value: function getVisualChannelDescription(key) {
      // e.g. label: Color, measure: Vehicle Type
      return {
        label: this.visConfigSettings[this.visualChannels[key].range].label,
        measure: this.config[this.visualChannels[key].field] ? this.config[this.visualChannels[key].field].name : this.visualChannels[key].defaultMeasure
      };
    }
    /**
     * Assign a field to layer column, return column config
     * @param key - Column Key
     * @param field - Selected field
     * @returns {{}} - Column config
     */

  }, {
    key: "assignColumn",
    value: function assignColumn(key, field) {
      // field value could be null for optional columns
      var update = field ? {
        value: field.name,
        fieldIdx: field.tableFieldIndex - 1
      } : {
        value: null,
        fieldIdx: -1
      };
      return _objectSpread(_objectSpread({}, this.config.columns), {}, (0, _defineProperty2["default"])({}, key, _objectSpread(_objectSpread({}, this.config.columns[key]), update)));
    }
    /**
     * Assign a field pair to column config, return column config
     * @param key - Column Key
     * @param pair - field Pair
     * @returns {{}} - Column config
     */

  }, {
    key: "assignColumnPairs",
    value: function assignColumnPairs(key, pair) {
      var _objectSpread3;

      if (!this.columnPairs || !this.columnPairs[key]) {
        // should not end in this state
        return this.config.columns;
      }

      var _this$columnPairs$key = this.columnPairs[key],
          partnerKey = _this$columnPairs$key.pair,
          fieldPairKey = _this$columnPairs$key.fieldPairKey;
      var partnerFieldPairKey = this.columnPairs[partnerKey].fieldPairKey;
      return _objectSpread(_objectSpread({}, this.config.columns), {}, (_objectSpread3 = {}, (0, _defineProperty2["default"])(_objectSpread3, key, pair[fieldPairKey]), (0, _defineProperty2["default"])(_objectSpread3, partnerKey, pair[partnerFieldPairKey]), _objectSpread3));
    }
    /**
     * Calculate a radius zoom multiplier to render points, so they are visible in all zoom level
     * @param mapState
     * @param mapState.zoom - actual zoom
     * @param mapState.zoomOffset - zoomOffset when render in the plot container for export image
     * @returns {number}
     */

  }, {
    key: "getZoomFactor",
    value: function getZoomFactor(_ref) {
      var zoom = _ref.zoom,
          _ref$zoomOffset = _ref.zoomOffset,
          zoomOffset = _ref$zoomOffset === void 0 ? 0 : _ref$zoomOffset;
      return Math.pow(2, Math.max(14 - zoom + zoomOffset, 0));
    }
    /**
     * Calculate a elevation zoom multiplier to render points, so they are visible in all zoom level
     * @param mapState
     * @param mapState.zoom - actual zoom
     * @param mapState.zoomOffset - zoomOffset when render in the plot container for export image
     * @returns {number}
     */

  }, {
    key: "getElevationZoomFactor",
    value: function getElevationZoomFactor(_ref2) {
      var zoom = _ref2.zoom,
          _ref2$zoomOffset = _ref2.zoomOffset,
          zoomOffset = _ref2$zoomOffset === void 0 ? 0 : _ref2$zoomOffset;
      return Math.pow(2, Math.max(8 - zoom + zoomOffset, 0));
    }
  }, {
    key: "formatLayerData",
    value: function formatLayerData(datasets, filteredIndex) {
      return {};
    }
  }, {
    key: "renderLayer",
    value: function renderLayer() {
      return [];
    }
  }, {
    key: "getHoverData",
    value: function getHoverData(object) {
      if (!object) {
        return null;
      } // by default, each entry of layerData should have a data property points
      // to the original item in the allData array
      // each layer can implement its own getHoverData method


      return object.data;
    }
    /**
     * When change layer type, try to copy over layer configs as much as possible
     * @param configToCopy - config to copy over
     * @param visConfigSettings - visConfig settings of config to copy
     */

  }, {
    key: "assignConfigToLayer",
    value: function assignConfigToLayer(configToCopy, visConfigSettings) {
      var _this = this;

      // don't deep merge visualChannel field
      // don't deep merge color range, reversed: is not a key by default
      var shallowCopy = ['colorRange', 'strokeColorRange'].concat(Object.values(this.visualChannels).map(function (v) {
        return v.field;
      })); // don't copy over domain and animation

      var notToCopy = ['animation'].concat(Object.values(this.visualChannels).map(function (v) {
        return v.domain;
      })); // if range is for the same property group copy it, otherwise, not to copy

      Object.values(this.visualChannels).forEach(function (v) {
        if (configToCopy.visConfig[v.range] && visConfigSettings[v.range].group !== _this.visConfigSettings[v.range].group) {
          notToCopy.push(v.range);
        }
      }); // don't copy over visualChannel range

      var currentConfig = this.config;
      var copied = this.copyLayerConfig(currentConfig, configToCopy, {
        shallowCopy: shallowCopy,
        notToCopy: notToCopy
      });
      this.updateLayerConfig(copied); // validate visualChannel field type and scale types

      Object.keys(this.visualChannels).forEach(function (channel) {
        _this.validateVisualChannel(channel);
      });
    }
    /*
     * Recursively copy config over to an empty layer
     * when received saved config, or copy config over from a different layer type
     * make sure to only copy over value to existing keys
     * @param {object} currentConfig - existing config to be override
     * @param {object} configToCopy - new Config to copy over
     * @param {string[]} shallowCopy - array of properties to not to be deep copied
     * @param {string[]} notToCopy - array of properties not to copy
     * @returns {object} - copied config
     */

  }, {
    key: "copyLayerConfig",
    value: function copyLayerConfig(currentConfig, configToCopy) {
      var _this2 = this;

      var _ref3 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
          _ref3$shallowCopy = _ref3.shallowCopy,
          shallowCopy = _ref3$shallowCopy === void 0 ? [] : _ref3$shallowCopy,
          _ref3$notToCopy = _ref3.notToCopy,
          notToCopy = _ref3$notToCopy === void 0 ? [] : _ref3$notToCopy;

      var copied = {};
      Object.keys(currentConfig).forEach(function (key) {
        if ((0, _utils.isPlainObject)(currentConfig[key]) && (0, _utils.isPlainObject)(configToCopy[key]) && !shallowCopy.includes(key) && !notToCopy.includes(key)) {
          // recursively assign object value
          copied[key] = _this2.copyLayerConfig(currentConfig[key], configToCopy[key], {
            shallowCopy: shallowCopy,
            notToCopy: notToCopy
          });
        } else if ((0, _dataUtils.notNullorUndefined)(configToCopy[key]) && !notToCopy.includes(key)) {
          // copy
          copied[key] = configToCopy[key];
        } else {
          // keep existing
          copied[key] = currentConfig[key];
        }
      });
      return copied;
    }
  }, {
    key: "registerVisConfig",
    value: function registerVisConfig(layerVisConfigs) {
      var _this3 = this;

      Object.keys(layerVisConfigs).forEach(function (item) {
        if (typeof item === 'string' && _layerFactory.LAYER_VIS_CONFIGS[layerVisConfigs[item]]) {
          // if assigned one of default LAYER_CONFIGS
          _this3.config.visConfig[item] = _layerFactory.LAYER_VIS_CONFIGS[layerVisConfigs[item]].defaultValue;
          _this3.visConfigSettings[item] = _layerFactory.LAYER_VIS_CONFIGS[layerVisConfigs[item]];
        } else if (['type', 'defaultValue'].every(function (p) {
          return layerVisConfigs[item].hasOwnProperty(p);
        })) {
          // if provided customized visConfig, and has type && defaultValue
          // TODO: further check if customized visConfig is valid
          _this3.config.visConfig[item] = layerVisConfigs[item].defaultValue;
          _this3.visConfigSettings[item] = layerVisConfigs[item];
        }
      });
    }
  }, {
    key: "getLayerColumns",
    value: function getLayerColumns() {
      var required = this.requiredLayerColumns.reduce(function (accu, key) {
        return _objectSpread(_objectSpread({}, accu), {}, (0, _defineProperty2["default"])({}, key, {
          value: null,
          fieldIdx: -1
        }));
      }, {});
      var optional = this.optionalColumns.reduce(function (accu, key) {
        return _objectSpread(_objectSpread({}, accu), {}, (0, _defineProperty2["default"])({}, key, {
          value: null,
          fieldIdx: -1,
          optional: true
        }));
      }, {});
      return _objectSpread(_objectSpread({}, required), optional);
    }
  }, {
    key: "updateLayerConfig",
    value: function updateLayerConfig(newConfig) {
      this.config = _objectSpread(_objectSpread({}, this.config), newConfig);
      return this;
    }
  }, {
    key: "updateLayerVisConfig",
    value: function updateLayerVisConfig(newVisConfig) {
      this.config.visConfig = _objectSpread(_objectSpread({}, this.config.visConfig), newVisConfig);
      return this;
    }
  }, {
    key: "updateLayerColorUI",
    value: function updateLayerColorUI(prop, newConfig) {
      var _this$config = this.config,
          previous = _this$config.colorUI,
          visConfig = _this$config.visConfig;

      if (!(0, _utils.isPlainObject)(newConfig) || typeof prop !== 'string') {
        return this;
      }

      var colorUIProp = Object.entries(newConfig).reduce(function (accu, _ref4) {
        var _ref5 = (0, _slicedToArray2["default"])(_ref4, 2),
            key = _ref5[0],
            value = _ref5[1];

        return _objectSpread(_objectSpread({}, accu), {}, (0, _defineProperty2["default"])({}, key, (0, _utils.isPlainObject)(accu[key]) && (0, _utils.isPlainObject)(value) ? _objectSpread(_objectSpread({}, accu[key]), value) : value));
      }, previous[prop] || _layerFactory.DEFAULT_COLOR_UI);

      var colorUI = _objectSpread(_objectSpread({}, previous), {}, (0, _defineProperty2["default"])({}, prop, colorUIProp));

      this.updateLayerConfig({
        colorUI: colorUI
      }); // if colorUI[prop] is colorRange

      var isColorRange = visConfig[prop] && visConfig[prop].colors;

      if (isColorRange) {
        this.updateColorUIByColorRange(newConfig, prop);
        this.updateColorRangeByColorUI(newConfig, previous, prop);
        this.updateCustomPalette(newConfig, previous, prop);
      }

      return this;
    }
  }, {
    key: "updateCustomPalette",
    value: function updateCustomPalette(newConfig, previous, prop) {
      if (!newConfig.colorRangeConfig || !newConfig.colorRangeConfig.custom) {
        return;
      }

      var _this$config2 = this.config,
          colorUI = _this$config2.colorUI,
          visConfig = _this$config2.visConfig;
      if (!visConfig[prop]) return;
      var colors = visConfig[prop].colors;

      var customPalette = _objectSpread(_objectSpread({}, colorUI[prop].customPalette), {}, {
        name: 'Custom Palette',
        colors: (0, _toConsumableArray2["default"])(colors)
      });

      this.updateLayerConfig({
        colorUI: _objectSpread(_objectSpread({}, colorUI), {}, (0, _defineProperty2["default"])({}, prop, _objectSpread(_objectSpread({}, colorUI[prop]), {}, {
          customPalette: customPalette
        })))
      });
    }
    /**
     * if open dropdown and prop is color range
     * Automatically set colorRangeConfig's step and reversed
     * @param {*} newConfig
     * @param {*} prop
     */

  }, {
    key: "updateColorUIByColorRange",
    value: function updateColorUIByColorRange(newConfig, prop) {
      if (typeof newConfig.showDropdown !== 'number') return;
      var _this$config3 = this.config,
          colorUI = _this$config3.colorUI,
          visConfig = _this$config3.visConfig;
      this.updateLayerConfig({
        colorUI: _objectSpread(_objectSpread({}, colorUI), {}, (0, _defineProperty2["default"])({}, prop, _objectSpread(_objectSpread({}, colorUI[prop]), {}, {
          colorRangeConfig: _objectSpread(_objectSpread({}, colorUI[prop].colorRangeConfig), {}, {
            steps: visConfig[prop].colors.length,
            reversed: Boolean(visConfig[prop].reversed)
          })
        })))
      });
    }
  }, {
    key: "updateColorRangeByColorUI",
    value: function updateColorRangeByColorUI(newConfig, previous, prop) {
      // only update colorRange if changes in UI is made to 'reversed', 'steps' or steps
      var shouldUpdate = newConfig.colorRangeConfig && ['reversed', 'steps'].some(function (key) {
        return newConfig.colorRangeConfig.hasOwnProperty(key) && newConfig.colorRangeConfig[key] !== (previous[prop] || _layerFactory.DEFAULT_COLOR_UI).colorRangeConfig[key];
      });
      if (!shouldUpdate) return;
      var _this$config4 = this.config,
          colorUI = _this$config4.colorUI,
          visConfig = _this$config4.visConfig;
      var _colorUI$prop$colorRa = colorUI[prop].colorRangeConfig,
          steps = _colorUI$prop$colorRa.steps,
          reversed = _colorUI$prop$colorRa.reversed;
      var colorRange = visConfig[prop]; // find based on step or reversed

      var update;

      if (newConfig.colorRangeConfig.hasOwnProperty('steps')) {
        var group = (0, _colorUtils.getColorGroupByName)(colorRange);

        if (group) {
          var sameGroup = _colorRanges.COLOR_RANGES.filter(function (cr) {
            return (0, _colorUtils.getColorGroupByName)(cr) === group;
          });

          update = sameGroup.find(function (cr) {
            return cr.colors.length === steps;
          });

          if (update && colorRange.reversed) {
            update = (0, _colorUtils.reverseColorRange)(true, update);
          }
        }
      }

      if (newConfig.colorRangeConfig.hasOwnProperty('reversed')) {
        update = (0, _colorUtils.reverseColorRange)(reversed, update || colorRange);
      }

      if (update) {
        this.updateLayerVisConfig((0, _defineProperty2["default"])({}, prop, update));
      }
    }
    /**
     * Check whether layer has all columns
     *
     * @param {object} layer
     * @returns {boolean} yes or no
     */

  }, {
    key: "hasAllColumns",
    value: function hasAllColumns() {
      var columns = this.config.columns;
      return columns && Object.values(columns).every(function (v) {
        return Boolean(v.optional || v.value && v.fieldIdx > -1);
      });
    }
    /**
     * Check whether layer has data
     *
     * @param {object} layer
     * @param {Array | Object} layerData
     * @returns {boolean} yes or no
     */

  }, {
    key: "hasLayerData",
    value: function hasLayerData(layerData) {
      if (!layerData) {
        return false;
      }

      return Boolean(layerData.data && layerData.data.length);
    }
  }, {
    key: "isValidToSave",
    value: function isValidToSave() {
      return this.type && this.hasAllColumns();
    }
  }, {
    key: "shouldRenderLayer",
    value: function shouldRenderLayer(data) {
      return this.type && this.config.isVisible && this.hasAllColumns() && this.hasLayerData(data) && typeof this.renderLayer === 'function';
    }
  }, {
    key: "getVisChannelScale",
    value: function getVisChannelScale(scale, domain, range, fixed) {
      return _defaultSettings.SCALE_FUNC[fixed ? 'linear' : scale]().domain(domain).range(fixed ? domain : range);
    }
  }, {
    key: "getPointsBounds",
    value: function getPointsBounds(allData) {
      var getPosition = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : identity;
      // no need to loop through the entire dataset
      // get a sample of data to calculate bounds
      var sampleData = allData.length > MAX_SAMPLE_SIZE ? (0, _dataUtils.getSampleData)(allData, MAX_SAMPLE_SIZE) : allData;
      var points = sampleData.map(getPosition);
      var latBounds = (0, _dataUtils.getLatLngBounds)(points, 1, [-90, 90]);
      var lngBounds = (0, _dataUtils.getLatLngBounds)(points, 0, [-180, 180]);

      if (!latBounds || !lngBounds) {
        return null;
      }

      return [lngBounds[0], latBounds[0], lngBounds[1], latBounds[1]];
    }
  }, {
    key: "getChangedTriggers",
    value: function getChangedTriggers(dataUpdateTriggers) {
      var triggerChanged = (0, _layerUpdate.diffUpdateTriggers)(dataUpdateTriggers, this._oldDataUpdateTriggers);
      this._oldDataUpdateTriggers = dataUpdateTriggers;
      return triggerChanged;
    }
  }, {
    key: "getEncodedChannelValue",
    value: function getEncodedChannelValue(scale, data, field) {
      var nullValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : _defaultSettings.NO_VALUE_COLOR;
      var getValue = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : defaultGetFieldValue;
      var type = field.type;
      var value = getValue(field, data);

      if (!(0, _dataUtils.notNullorUndefined)(value)) {
        return nullValue;
      }

      var attributeValue;

      if (type === _defaultSettings.ALL_FIELD_TYPES.timestamp) {
        // shouldn't need to convert here
        // scale Function should take care of it
        attributeValue = scale(new Date(value));
      } else {
        attributeValue = scale(value);
      }

      if (!(0, _dataUtils.notNullorUndefined)(attributeValue)) {
        attributeValue = nullValue;
      }

      return attributeValue;
    }
  }, {
    key: "updateMeta",
    value: function updateMeta(meta) {
      this.meta = _objectSpread(_objectSpread({}, this.meta), meta);
    }
  }, {
    key: "getDataUpdateTriggers",
    value: function getDataUpdateTriggers(_ref6) {
      var filteredIndex = _ref6.filteredIndex,
          id = _ref6.id;
      var columns = this.config.columns;
      return _objectSpread({
        getData: {
          datasetId: id,
          columns: columns,
          filteredIndex: filteredIndex
        },
        getMeta: {
          datasetId: id,
          columns: columns
        }
      }, (this.config.textLabel || []).reduce(function (accu, tl, i) {
        return _objectSpread(_objectSpread({}, accu), {}, (0, _defineProperty2["default"])({}, "getLabelCharacterSet-".concat(i), tl.field ? tl.field.name : null));
      }, {}));
    }
  }, {
    key: "updateData",
    value: function updateData(datasets, oldLayerData) {
      var layerDataset = datasets[this.config.dataId];
      var allData = datasets[this.config.dataId].allData;
      var getPosition = this.getPositionAccessor();
      var dataUpdateTriggers = this.getDataUpdateTriggers(layerDataset);
      var triggerChanged = this.getChangedTriggers(dataUpdateTriggers);

      if (triggerChanged.getMeta) {
        this.updateLayerMeta(allData, getPosition);
      }

      var data = [];

      if (!triggerChanged.getData) {
        // same data
        data = oldLayerData.data;
      } else {
        data = this.calculateDataAttribute(layerDataset, getPosition);
      }

      return {
        data: data,
        triggerChanged: triggerChanged
      };
    }
    /**
     * helper function to update one layer domain when state.data changed
     * if state.data change is due ot update filter, newFiler will be passed
     * called by updateAllLayerDomainData
     * @param {Object} dataset
     * @param {Object} newFilter
     * @returns {object} layer
     */

  }, {
    key: "updateLayerDomain",
    value: function updateLayerDomain(datasets, newFilter) {
      var _this4 = this;

      var dataset = this.getDataset(datasets);

      if (!dataset) {
        return this;
      }

      Object.values(this.visualChannels).forEach(function (channel) {
        var scale = channel.scale;
        var scaleType = _this4.config[scale]; // ordinal domain is based on allData, if only filter changed
        // no need to update ordinal domain

        if (!newFilter || scaleType !== _defaultSettings.SCALE_TYPES.ordinal) {
          var domain = channel.domain;

          var updatedDomain = _this4.calculateLayerDomain(dataset, channel);

          _this4.updateLayerConfig((0, _defineProperty2["default"])({}, domain, updatedDomain));
        }
      });
      return this;
    }
  }, {
    key: "getDataset",
    value: function getDataset(datasets) {
      return datasets[this.config.dataId];
    }
    /**
     * Validate visual channel field and scales based on supported field & scale type
     * @param channel
     */

  }, {
    key: "validateVisualChannel",
    value: function validateVisualChannel(channel) {
      this.validateFieldType(channel);
      this.validateScale(channel);
    }
    /**
     * Validate field type based on channelScaleType
     */

  }, {
    key: "validateFieldType",
    value: function validateFieldType(channel) {
      var visualChannel = this.visualChannels[channel];
      var field = visualChannel.field,
          channelScaleType = visualChannel.channelScaleType,
          supportedFieldTypes = visualChannel.supportedFieldTypes;

      if (this.config[field]) {
        // if field is selected, check if field type is supported
        var channelSupportedFieldTypes = supportedFieldTypes || _defaultSettings.CHANNEL_SCALE_SUPPORTED_FIELDS[channelScaleType];

        if (!channelSupportedFieldTypes.includes(this.config[field].type)) {
          // field type is not supported, set it back to null
          // set scale back to default
          this.updateLayerConfig((0, _defineProperty2["default"])({}, field, null));
        }
      }
    }
    /**
     * Validate scale type based on aggregation
     */

  }, {
    key: "validateScale",
    value: function validateScale(channel) {
      var visualChannel = this.visualChannels[channel];
      var scale = visualChannel.scale;

      if (!scale) {
        // visualChannel doesn't have scale
        return;
      }

      var scaleOptions = this.getScaleOptions(channel); // check if current selected scale is
      // supported, if not, change to default

      if (!scaleOptions.includes(this.config[scale])) {
        this.updateLayerConfig((0, _defineProperty2["default"])({}, scale, scaleOptions[0]));
      }
    }
    /**
     * Get scale options based on current field
     * @param {string} channel
     * @returns {string[]}
     */

  }, {
    key: "getScaleOptions",
    value: function getScaleOptions(channel) {
      var visualChannel = this.visualChannels[channel];
      var field = visualChannel.field,
          scale = visualChannel.scale,
          channelScaleType = visualChannel.channelScaleType;
      return this.config[field] ? _defaultSettings.FIELD_OPTS[this.config[field].type].scale[channelScaleType] : [this.getDefaultLayerConfig()[scale]];
    }
  }, {
    key: "updateLayerVisualChannel",
    value: function updateLayerVisualChannel(dataset, channel) {
      var visualChannel = this.visualChannels[channel];
      this.validateVisualChannel(channel); // calculate layer channel domain

      var updatedDomain = this.calculateLayerDomain(dataset, visualChannel);
      this.updateLayerConfig((0, _defineProperty2["default"])({}, visualChannel.domain, updatedDomain));
    }
  }, {
    key: "calculateLayerDomain",
    value: function calculateLayerDomain(dataset, visualChannel) {
      var allData = dataset.allData,
          filteredIndexForDomain = dataset.filteredIndexForDomain;
      var defaultDomain = [0, 1];
      var scale = visualChannel.scale;
      var scaleType = this.config[scale];
      var field = this.config[visualChannel.field];

      if (!field) {
        // if colorField or sizeField were set back to null
        return defaultDomain;
      }

      if (!_defaultSettings.SCALE_TYPES[scaleType]) {
        _window.console.error("scale type ".concat(scaleType, " not supported"));

        return defaultDomain;
      } // TODO: refactor to add valueAccessor to field


      var fieldIdx = field.tableFieldIndex - 1;
      var isTime = field.type === _defaultSettings.ALL_FIELD_TYPES.timestamp;

      var valueAccessor = _dataUtils.maybeToDate.bind(null, isTime, fieldIdx, field.format);

      var indexValueAccessor = function indexValueAccessor(i) {
        return valueAccessor(allData[i]);
      };

      var sortFunction = (0, _dataUtils.getSortingFunction)(field.type);

      switch (scaleType) {
        case _defaultSettings.SCALE_TYPES.ordinal:
        case _defaultSettings.SCALE_TYPES.point:
          // do not recalculate ordinal domain based on filtered data
          // don't need to update ordinal domain every time
          return (0, _dataScaleUtils.getOrdinalDomain)(allData, valueAccessor);

        case _defaultSettings.SCALE_TYPES.quantile:
          return (0, _dataScaleUtils.getQuantileDomain)(filteredIndexForDomain, indexValueAccessor, sortFunction);

        case _defaultSettings.SCALE_TYPES.log:
          return (0, _dataScaleUtils.getLogDomain)(filteredIndexForDomain, indexValueAccessor);

        case _defaultSettings.SCALE_TYPES.quantize:
        case _defaultSettings.SCALE_TYPES.linear:
        case _defaultSettings.SCALE_TYPES.sqrt:
        default:
          return (0, _dataScaleUtils.getLinearDomain)(filteredIndexForDomain, indexValueAccessor);
      }
    }
  }, {
    key: "isLayerHovered",
    value: function isLayerHovered(objectInfo) {
      return objectInfo && objectInfo.layer && objectInfo.picked && objectInfo.layer.props.id === this.id;
    }
  }, {
    key: "getRadiusScaleByZoom",
    value: function getRadiusScaleByZoom(mapState, fixedRadius) {
      var radiusChannel = Object.values(this.visualChannels).find(function (vc) {
        return vc.property === 'radius';
      });

      if (!radiusChannel) {
        return 1;
      }

      var field = radiusChannel.field;
      var fixed = fixedRadius === undefined ? this.config.visConfig.fixedRadius : fixedRadius;
      var radius = this.config.visConfig.radius;
      return fixed ? 1 : (this.config[field] ? 1 : radius) * this.getZoomFactor(mapState);
    }
  }, {
    key: "shouldCalculateLayerData",
    value: function shouldCalculateLayerData(props) {
      var _this5 = this;

      return props.some(function (p) {
        return !_this5.noneLayerDataAffectingProps.includes(p);
      });
    }
  }, {
    key: "getBrushingExtensionProps",
    value: function getBrushingExtensionProps(interactionConfig, brushingTarget) {
      var brush = interactionConfig.brush;
      return {
        // brushing
        autoHighlight: !brush.enabled,
        brushingRadius: brush.config.size * 1000,
        brushingTarget: brushingTarget || 'source',
        brushingEnabled: brush.enabled
      };
    }
  }, {
    key: "getDefaultDeckLayerProps",
    value: function getDefaultDeckLayerProps(_ref7) {
      var idx = _ref7.idx,
          gpuFilter = _ref7.gpuFilter,
          mapState = _ref7.mapState;
      return {
        id: this.id,
        idx: idx,
        coordinateSystem: _core.COORDINATE_SYSTEM.LNGLAT,
        pickable: true,
        wrapLongitude: true,
        parameters: {
          depthTest: Boolean(mapState.dragRotate || this.config.visConfig.enable3d)
        },
        hidden: this.config.hidden,
        // visconfig
        opacity: this.config.visConfig.opacity,
        highlightColor: this.config.highlightColor,
        // data filtering
        extensions: [dataFilterExtension],
        filterRange: gpuFilter.filterRange
      };
    }
  }, {
    key: "getDefaultHoverLayerProps",
    value: function getDefaultHoverLayerProps() {
      return {
        id: "".concat(this.id, "-hovered"),
        pickable: false,
        wrapLongitude: true,
        coordinateSystem: _core.COORDINATE_SYSTEM.LNGLAT
      };
    }
  }, {
    key: "renderTextLabelLayer",
    value: function renderTextLabelLayer(_ref8, renderOpts) {
      var _this6 = this;

      var getPosition = _ref8.getPosition,
          getPixelOffset = _ref8.getPixelOffset,
          updateTriggers = _ref8.updateTriggers,
          sharedProps = _ref8.sharedProps;
      var data = renderOpts.data,
          mapState = renderOpts.mapState;
      var textLabel = this.config.textLabel;
      return data.textLabels.reduce(function (accu, d, i) {
        if (d.getText) {
          accu.push(new _layers.TextLayer(_objectSpread(_objectSpread({}, sharedProps), {}, {
            id: "".concat(_this6.id, "-label-").concat(textLabel[i].field.name),
            data: data.data,
            getText: d.getText,
            getPosition: getPosition,
            characterSet: d.characterSet,
            getPixelOffset: getPixelOffset(textLabel[i]),
            getSize: 1,
            sizeScale: textLabel[i].size,
            getTextAnchor: textLabel[i].anchor,
            getAlignmentBaseline: textLabel[i].alignment,
            getColor: textLabel[i].color,
            parameters: {
              // text will always show on top of all layers
              depthTest: false
            },
            getFilterValue: data.getFilterValue,
            updateTriggers: _objectSpread(_objectSpread({}, updateTriggers), {}, {
              getText: textLabel[i].field.name,
              getPixelOffset: _objectSpread(_objectSpread({}, updateTriggers.getRadius), {}, {
                mapState: mapState,
                anchor: textLabel[i].anchor,
                alignment: textLabel[i].alignment
              }),
              getTextAnchor: textLabel[i].anchor,
              getAlignmentBaseline: textLabel[i].alignment,
              getColor: textLabel[i].color
            })
          })));
        }

        return accu;
      }, []);
    }
  }, {
    key: "layerIcon",
    get: function get() {
      return _defaultLayerIcon["default"];
    }
  }, {
    key: "overlayType",
    get: function get() {
      return OVERLAY_TYPE.deckgl;
    }
  }, {
    key: "type",
    get: function get() {
      return null;
    }
  }, {
    key: "name",
    get: function get() {
      return this.type;
    }
  }, {
    key: "isAggregated",
    get: function get() {
      return false;
    }
  }, {
    key: "requiredLayerColumns",
    get: function get() {
      return [];
    }
  }, {
    key: "optionalColumns",
    get: function get() {
      return [];
    }
  }, {
    key: "noneLayerDataAffectingProps",
    get: function get() {
      return ['label', 'opacity', 'thickness', 'isVisible', 'hidden'];
    }
  }, {
    key: "visualChannels",
    get: function get() {
      return {
        color: {
          property: 'color',
          field: 'colorField',
          scale: 'colorScale',
          domain: 'colorDomain',
          range: 'colorRange',
          key: 'color',
          channelScaleType: _defaultSettings.CHANNEL_SCALES.color
        },
        size: {
          property: 'size',
          field: 'sizeField',
          scale: 'sizeScale',
          domain: 'sizeDomain',
          range: 'sizeRange',
          key: 'size',
          channelScaleType: _defaultSettings.CHANNEL_SCALES.size
        }
      };
    }
    /*
     * Column pairs maps layer column to a specific field pairs,
     * By default, it is set to null
     */

  }, {
    key: "columnPairs",
    get: function get() {
      return null;
    }
    /*
     * Default point column pairs, can be used for point based layers: point, icon etc.
     */

  }, {
    key: "defaultPointColumnPairs",
    get: function get() {
      return {
        lat: {
          pair: 'lng',
          fieldPairKey: 'lat'
        },
        lng: {
          pair: 'lat',
          fieldPairKey: 'lng'
        }
      };
    }
    /*
     * Default link column pairs, can be used for link based layers: arc, line etc
     */

  }, {
    key: "defaultLinkColumnPairs",
    get: function get() {
      return {
        lat0: {
          pair: 'lng0',
          fieldPairKey: 'lat'
        },
        lng0: {
          pair: 'lat0',
          fieldPairKey: 'lng'
        },
        lat1: {
          pair: 'lng1',
          fieldPairKey: 'lat'
        },
        lng1: {
          pair: 'lat1',
          fieldPairKey: 'lng'
        }
      };
    }
    /**
     * Return a React component for to render layer instructions in a modal
     * @returns {object} - an object
     * @example
     *  return {
     *    id: 'iconInfo',
     *    template: IconInfoModal,
     *    modalProps: {
     *      title: 'How to draw icons'
     *   };
     * }
     */

  }, {
    key: "layerInfoModal",
    get: function get() {
      return null;
    }
    /*
     * Given a dataset, automatically find props to create layer based on it
     * and return the props and previous found layers.
     * By default, no layers will be found
     */

  }], [{
    key: "findDefaultLayerProps",
    value: function findDefaultLayerProps(dataset, foundLayers) {
      return {
        props: [],
        foundLayers: foundLayers
      };
    }
    /**
     * Given a array of preset required column names
     * found field that has the same name to set as layer column
     *
     * @param {object} defaultFields
     * @param {object[]} allFields
     * @returns {object[] | null} all possible required layer column pairs
     */

  }, {
    key: "findDefaultColumnField",
    value: function findDefaultColumnField(defaultFields, allFields) {
      // find all matched fields for each required col
      var requiredColumns = Object.keys(defaultFields).reduce(function (prev, key) {
        var requiredFields = allFields.filter(function (f) {
          return f.name === defaultFields[key] || defaultFields[key].includes(f.name);
        });
        prev[key] = requiredFields.length ? requiredFields.map(function (f) {
          return {
            value: f.name,
            fieldIdx: f.tableFieldIndex - 1
          };
        }) : null;
        return prev;
      }, {});

      if (!Object.values(requiredColumns).every(Boolean)) {
        // if any field missing, return null
        return null;
      }

      return this.getAllPossibleColumnParis(requiredColumns);
    }
  }, {
    key: "getAllPossibleColumnParis",
    value: function getAllPossibleColumnParis(requiredColumns) {
      // for multiple matched field for one required column, return multiple
      // combinations, e. g. if column a has 2 matched, column b has 3 matched
      // 6 possible column pairs will be returned
      var allKeys = Object.keys(requiredColumns);
      var pointers = allKeys.map(function (k, i) {
        return i === allKeys.length - 1 ? -1 : 0;
      });
      var countPerKey = allKeys.map(function (k) {
        return requiredColumns[k].length;
      });
      var pairs = [];
      /* eslint-disable no-loop-func */

      while (incrementPointers(pointers, countPerKey, pointers.length - 1)) {
        var newPair = pointers.reduce(function (prev, cuur, i) {
          prev[allKeys[i]] = requiredColumns[allKeys[i]][cuur];
          return prev;
        }, {});
        pairs.push(newPair);
      }
      /* eslint-enable no-loop-func */
      // recursively increment pointers


      function incrementPointers(pts, counts, index) {
        if (index === 0 && pts[0] === counts[0] - 1) {
          // nothing to increment
          return false;
        }

        if (pts[index] + 1 < counts[index]) {
          pts[index] = pts[index] + 1;
          return true;
        }

        pts[index] = 0;
        return incrementPointers(pts, counts, index - 1);
      }

      return pairs;
    }
  }, {
    key: "hexToRgb",
    value: function hexToRgb(c) {
      return (0, _colorUtils.hexToRgb)(c);
    }
  }]);
  return Layer;
}();

exports["default"] = Layer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sYXllcnMvYmFzZS1sYXllci5qcyJdLCJuYW1lcyI6WyJnZW5lcmF0ZUNvbG9yIiwiTUFYX1NBTVBMRV9TSVpFIiwiZGF0YUZpbHRlckV4dGVuc2lvbiIsIkRhdGFGaWx0ZXJFeHRlbnNpb24iLCJmaWx0ZXJTaXplIiwiTUFYX0dQVV9GSUxURVJTIiwiaWRlbnRpdHkiLCJkIiwiT1ZFUkxBWV9UWVBFIiwiZGVja2dsIiwibWFwYm94Z2wiLCJsYXllckNvbG9ycyIsIk9iamVjdCIsInZhbHVlcyIsIkRhdGFWaXpDb2xvcnMiLCJtYXAiLCJoZXhUb1JnYiIsImluZGV4IiwibGVuZ3RoIiwiY29sb3JNYWtlciIsImRlZmF1bHRHZXRGaWVsZFZhbHVlIiwiZmllbGQiLCJ0YWJsZUZpZWxkSW5kZXgiLCJMYXllciIsInByb3BzIiwiaWQiLCJtZXRhIiwidmlzQ29uZmlnU2V0dGluZ3MiLCJjb25maWciLCJnZXREZWZhdWx0TGF5ZXJDb25maWciLCJjb2x1bW5zIiwiZ2V0TGF5ZXJDb2x1bW5zIiwiZGF0YUlkIiwibGFiZWwiLCJjb2xvciIsIm5leHQiLCJ2YWx1ZSIsImlzVmlzaWJsZSIsImlzQ29uZmlnQWN0aXZlIiwiaGlnaGxpZ2h0Q29sb3IiLCJoaWRkZW4iLCJjb2xvckZpZWxkIiwiY29sb3JEb21haW4iLCJjb2xvclNjYWxlIiwiU0NBTEVfVFlQRVMiLCJxdWFudGlsZSIsInNpemVEb21haW4iLCJzaXplU2NhbGUiLCJsaW5lYXIiLCJzaXplRmllbGQiLCJ2aXNDb25maWciLCJ0ZXh0TGFiZWwiLCJERUZBVUxUX1RFWFRfTEFCRUwiLCJjb2xvclVJIiwiREVGQVVMVF9DT0xPUl9VSSIsImNvbG9yUmFuZ2UiLCJhbmltYXRpb24iLCJlbmFibGVkIiwia2V5IiwidmlzdWFsQ2hhbm5lbHMiLCJyYW5nZSIsIm1lYXN1cmUiLCJuYW1lIiwiZGVmYXVsdE1lYXN1cmUiLCJ1cGRhdGUiLCJmaWVsZElkeCIsInBhaXIiLCJjb2x1bW5QYWlycyIsInBhcnRuZXJLZXkiLCJmaWVsZFBhaXJLZXkiLCJwYXJ0bmVyRmllbGRQYWlyS2V5Iiwiem9vbSIsInpvb21PZmZzZXQiLCJNYXRoIiwicG93IiwibWF4IiwiZGF0YXNldHMiLCJmaWx0ZXJlZEluZGV4Iiwib2JqZWN0IiwiZGF0YSIsImNvbmZpZ1RvQ29weSIsInNoYWxsb3dDb3B5IiwiY29uY2F0IiwidiIsIm5vdFRvQ29weSIsImRvbWFpbiIsImZvckVhY2giLCJncm91cCIsInB1c2giLCJjdXJyZW50Q29uZmlnIiwiY29waWVkIiwiY29weUxheWVyQ29uZmlnIiwidXBkYXRlTGF5ZXJDb25maWciLCJrZXlzIiwiY2hhbm5lbCIsInZhbGlkYXRlVmlzdWFsQ2hhbm5lbCIsImluY2x1ZGVzIiwibGF5ZXJWaXNDb25maWdzIiwiaXRlbSIsIkxBWUVSX1ZJU19DT05GSUdTIiwiZGVmYXVsdFZhbHVlIiwiZXZlcnkiLCJwIiwiaGFzT3duUHJvcGVydHkiLCJyZXF1aXJlZCIsInJlcXVpcmVkTGF5ZXJDb2x1bW5zIiwicmVkdWNlIiwiYWNjdSIsIm9wdGlvbmFsIiwib3B0aW9uYWxDb2x1bW5zIiwibmV3Q29uZmlnIiwibmV3VmlzQ29uZmlnIiwicHJvcCIsInByZXZpb3VzIiwiY29sb3JVSVByb3AiLCJlbnRyaWVzIiwiaXNDb2xvclJhbmdlIiwiY29sb3JzIiwidXBkYXRlQ29sb3JVSUJ5Q29sb3JSYW5nZSIsInVwZGF0ZUNvbG9yUmFuZ2VCeUNvbG9yVUkiLCJ1cGRhdGVDdXN0b21QYWxldHRlIiwiY29sb3JSYW5nZUNvbmZpZyIsImN1c3RvbSIsImN1c3RvbVBhbGV0dGUiLCJzaG93RHJvcGRvd24iLCJzdGVwcyIsInJldmVyc2VkIiwiQm9vbGVhbiIsInNob3VsZFVwZGF0ZSIsInNvbWUiLCJzYW1lR3JvdXAiLCJDT0xPUl9SQU5HRVMiLCJmaWx0ZXIiLCJjciIsImZpbmQiLCJ1cGRhdGVMYXllclZpc0NvbmZpZyIsImxheWVyRGF0YSIsInR5cGUiLCJoYXNBbGxDb2x1bW5zIiwiaGFzTGF5ZXJEYXRhIiwicmVuZGVyTGF5ZXIiLCJzY2FsZSIsImZpeGVkIiwiU0NBTEVfRlVOQyIsImFsbERhdGEiLCJnZXRQb3NpdGlvbiIsInNhbXBsZURhdGEiLCJwb2ludHMiLCJsYXRCb3VuZHMiLCJsbmdCb3VuZHMiLCJkYXRhVXBkYXRlVHJpZ2dlcnMiLCJ0cmlnZ2VyQ2hhbmdlZCIsIl9vbGREYXRhVXBkYXRlVHJpZ2dlcnMiLCJudWxsVmFsdWUiLCJOT19WQUxVRV9DT0xPUiIsImdldFZhbHVlIiwiYXR0cmlidXRlVmFsdWUiLCJBTExfRklFTERfVFlQRVMiLCJ0aW1lc3RhbXAiLCJEYXRlIiwiZ2V0RGF0YSIsImRhdGFzZXRJZCIsImdldE1ldGEiLCJ0bCIsImkiLCJvbGRMYXllckRhdGEiLCJsYXllckRhdGFzZXQiLCJnZXRQb3NpdGlvbkFjY2Vzc29yIiwiZ2V0RGF0YVVwZGF0ZVRyaWdnZXJzIiwiZ2V0Q2hhbmdlZFRyaWdnZXJzIiwidXBkYXRlTGF5ZXJNZXRhIiwiY2FsY3VsYXRlRGF0YUF0dHJpYnV0ZSIsIm5ld0ZpbHRlciIsImRhdGFzZXQiLCJnZXREYXRhc2V0Iiwic2NhbGVUeXBlIiwib3JkaW5hbCIsInVwZGF0ZWREb21haW4iLCJjYWxjdWxhdGVMYXllckRvbWFpbiIsInZhbGlkYXRlRmllbGRUeXBlIiwidmFsaWRhdGVTY2FsZSIsInZpc3VhbENoYW5uZWwiLCJjaGFubmVsU2NhbGVUeXBlIiwic3VwcG9ydGVkRmllbGRUeXBlcyIsImNoYW5uZWxTdXBwb3J0ZWRGaWVsZFR5cGVzIiwiQ0hBTk5FTF9TQ0FMRV9TVVBQT1JURURfRklFTERTIiwic2NhbGVPcHRpb25zIiwiZ2V0U2NhbGVPcHRpb25zIiwiRklFTERfT1BUUyIsImZpbHRlcmVkSW5kZXhGb3JEb21haW4iLCJkZWZhdWx0RG9tYWluIiwiQ29uc29sZSIsImVycm9yIiwiaXNUaW1lIiwidmFsdWVBY2Nlc3NvciIsIm1heWJlVG9EYXRlIiwiYmluZCIsImZvcm1hdCIsImluZGV4VmFsdWVBY2Nlc3NvciIsInNvcnRGdW5jdGlvbiIsInBvaW50IiwibG9nIiwicXVhbnRpemUiLCJzcXJ0Iiwib2JqZWN0SW5mbyIsImxheWVyIiwicGlja2VkIiwibWFwU3RhdGUiLCJmaXhlZFJhZGl1cyIsInJhZGl1c0NoYW5uZWwiLCJ2YyIsInByb3BlcnR5IiwidW5kZWZpbmVkIiwicmFkaXVzIiwiZ2V0Wm9vbUZhY3RvciIsIm5vbmVMYXllckRhdGFBZmZlY3RpbmdQcm9wcyIsImludGVyYWN0aW9uQ29uZmlnIiwiYnJ1c2hpbmdUYXJnZXQiLCJicnVzaCIsImF1dG9IaWdobGlnaHQiLCJicnVzaGluZ1JhZGl1cyIsInNpemUiLCJicnVzaGluZ0VuYWJsZWQiLCJpZHgiLCJncHVGaWx0ZXIiLCJjb29yZGluYXRlU3lzdGVtIiwiQ09PUkRJTkFURV9TWVNURU0iLCJMTkdMQVQiLCJwaWNrYWJsZSIsIndyYXBMb25naXR1ZGUiLCJwYXJhbWV0ZXJzIiwiZGVwdGhUZXN0IiwiZHJhZ1JvdGF0ZSIsImVuYWJsZTNkIiwib3BhY2l0eSIsImV4dGVuc2lvbnMiLCJmaWx0ZXJSYW5nZSIsInJlbmRlck9wdHMiLCJnZXRQaXhlbE9mZnNldCIsInVwZGF0ZVRyaWdnZXJzIiwic2hhcmVkUHJvcHMiLCJ0ZXh0TGFiZWxzIiwiZ2V0VGV4dCIsIlRleHRMYXllciIsImNoYXJhY3RlclNldCIsImdldFNpemUiLCJnZXRUZXh0QW5jaG9yIiwiYW5jaG9yIiwiZ2V0QWxpZ25tZW50QmFzZWxpbmUiLCJhbGlnbm1lbnQiLCJnZXRDb2xvciIsImdldEZpbHRlclZhbHVlIiwiZ2V0UmFkaXVzIiwiRGVmYXVsdExheWVySWNvbiIsIkNIQU5ORUxfU0NBTEVTIiwibGF0IiwibG5nIiwibGF0MCIsImxuZzAiLCJsYXQxIiwibG5nMSIsImZvdW5kTGF5ZXJzIiwiZGVmYXVsdEZpZWxkcyIsImFsbEZpZWxkcyIsInJlcXVpcmVkQ29sdW1ucyIsInByZXYiLCJyZXF1aXJlZEZpZWxkcyIsImYiLCJnZXRBbGxQb3NzaWJsZUNvbHVtblBhcmlzIiwiYWxsS2V5cyIsInBvaW50ZXJzIiwiayIsImNvdW50UGVyS2V5IiwicGFpcnMiLCJpbmNyZW1lbnRQb2ludGVycyIsIm5ld1BhaXIiLCJjdXVyIiwicHRzIiwiY291bnRzIiwiYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOztBQUVBOztBQVVBOztBQUNBOztBQUNBOztBQUVBOztBQUVBOztBQVFBOztBQU1BOzs7Ozs7d0RBZ0JVQSxhOztBQWRWOzs7O0FBSUEsSUFBTUMsZUFBZSxHQUFHLElBQXhCO0FBQ0EsSUFBTUMsbUJBQW1CLEdBQUcsSUFBSUMsK0JBQUosQ0FBd0I7QUFBQ0MsRUFBQUEsVUFBVSxFQUFFQztBQUFiLENBQXhCLENBQTVCOztBQUNBLElBQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUFDLENBQUM7QUFBQSxTQUFJQSxDQUFKO0FBQUEsQ0FBbEI7O0FBRU8sSUFBTUMsWUFBWSxHQUFHLDJCQUFVO0FBQ3BDQyxFQUFBQSxNQUFNLEVBQUUsSUFENEI7QUFFcENDLEVBQUFBLFFBQVEsRUFBRTtBQUYwQixDQUFWLENBQXJCOztBQUtBLElBQU1DLFdBQVcsR0FBR0MsTUFBTSxDQUFDQyxNQUFQLENBQWNDLGdDQUFkLEVBQTZCQyxHQUE3QixDQUFpQ0Msb0JBQWpDLENBQXBCOzs7QUFDUCxTQUFVaEIsYUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDTWlCLFVBQUFBLEtBRE4sR0FDYyxDQURkOztBQUFBO0FBQUEsZ0JBRVNBLEtBQUssR0FBR04sV0FBVyxDQUFDTyxNQUFaLEdBQXFCLENBRnRDO0FBQUE7QUFBQTtBQUFBOztBQUdJLGNBQUlELEtBQUssS0FBS04sV0FBVyxDQUFDTyxNQUExQixFQUFrQztBQUNoQ0QsWUFBQUEsS0FBSyxHQUFHLENBQVI7QUFDRDs7QUFMTDtBQU1JLGlCQUFNTixXQUFXLENBQUNNLEtBQUssRUFBTixDQUFqQjs7QUFOSjtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7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LEdBQUcsQ0FBQ3BRLEtBQUQsQ0FBSCxHQUFhLENBQWIsR0FBaUJxUSxNQUFNLENBQUNyUSxLQUFELENBQTNCLEVBQW9DO0FBQ2xDb1EsVUFBQUEsR0FBRyxDQUFDcFEsS0FBRCxDQUFILEdBQWFvUSxHQUFHLENBQUNwUSxLQUFELENBQUgsR0FBYSxDQUExQjtBQUNBLGlCQUFPLElBQVA7QUFDRDs7QUFFRG9RLFFBQUFBLEdBQUcsQ0FBQ3BRLEtBQUQsQ0FBSCxHQUFhLENBQWI7QUFDQSxlQUFPaVEsaUJBQWlCLENBQUNHLEdBQUQsRUFBTUMsTUFBTixFQUFjclEsS0FBSyxHQUFHLENBQXRCLENBQXhCO0FBQ0Q7O0FBRUQsYUFBT2dRLEtBQVA7QUFDRDs7OzZCQUVlTSxDLEVBQUc7QUFDakIsYUFBTywwQkFBU0EsQ0FBVCxDQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQge2NvbnNvbGUgYXMgQ29uc29sZX0gZnJvbSAnZ2xvYmFsL3dpbmRvdyc7XHJcbmltcG9ydCBrZXltaXJyb3IgZnJvbSAna2V5bWlycm9yJztcclxuaW1wb3J0IHtEYXRhRmlsdGVyRXh0ZW5zaW9ufSBmcm9tICdAZGVjay5nbC9leHRlbnNpb25zJztcclxuaW1wb3J0IHtDT09SRElOQVRFX1NZU1RFTX0gZnJvbSAnQGRlY2suZ2wvY29yZSc7XHJcbmltcG9ydCB7VGV4dExheWVyfSBmcm9tICdAZGVjay5nbC9sYXllcnMnO1xyXG5cclxuaW1wb3J0IERlZmF1bHRMYXllckljb24gZnJvbSAnLi9kZWZhdWx0LWxheWVyLWljb24nO1xyXG5pbXBvcnQge2RpZmZVcGRhdGVUcmlnZ2Vyc30gZnJvbSAnLi9sYXllci11cGRhdGUnO1xyXG5cclxuaW1wb3J0IHtcclxuICBBTExfRklFTERfVFlQRVMsXHJcbiAgTk9fVkFMVUVfQ09MT1IsXHJcbiAgU0NBTEVfVFlQRVMsXHJcbiAgQ0hBTk5FTF9TQ0FMRVMsXHJcbiAgRklFTERfT1BUUyxcclxuICBTQ0FMRV9GVU5DLFxyXG4gIENIQU5ORUxfU0NBTEVfU1VQUE9SVEVEX0ZJRUxEUyxcclxuICBNQVhfR1BVX0ZJTFRFUlNcclxufSBmcm9tICdjb25zdGFudHMvZGVmYXVsdC1zZXR0aW5ncyc7XHJcbmltcG9ydCB7Q09MT1JfUkFOR0VTfSBmcm9tICdjb25zdGFudHMvY29sb3ItcmFuZ2VzJztcclxuaW1wb3J0IHtEYXRhVml6Q29sb3JzfSBmcm9tICdjb25zdGFudHMvY3VzdG9tLWNvbG9yLXJhbmdlcyc7XHJcbmltcG9ydCB7TEFZRVJfVklTX0NPTkZJR1MsIERFRkFVTFRfVEVYVF9MQUJFTCwgREVGQVVMVF9DT0xPUl9VSX0gZnJvbSAnLi9sYXllci1mYWN0b3J5JztcclxuXHJcbmltcG9ydCB7Z2VuZXJhdGVIYXNoSWQsIGlzUGxhaW5PYmplY3R9IGZyb20gJ3V0aWxzL3V0aWxzJztcclxuXHJcbmltcG9ydCB7XHJcbiAgZ2V0U2FtcGxlRGF0YSxcclxuICBnZXRMYXRMbmdCb3VuZHMsXHJcbiAgbWF5YmVUb0RhdGUsXHJcbiAgZ2V0U29ydGluZ0Z1bmN0aW9uLFxyXG4gIG5vdE51bGxvclVuZGVmaW5lZFxyXG59IGZyb20gJ3V0aWxzL2RhdGEtdXRpbHMnO1xyXG5cclxuaW1wb3J0IHtcclxuICBnZXRRdWFudGlsZURvbWFpbixcclxuICBnZXRPcmRpbmFsRG9tYWluLFxyXG4gIGdldExvZ0RvbWFpbixcclxuICBnZXRMaW5lYXJEb21haW5cclxufSBmcm9tICd1dGlscy9kYXRhLXNjYWxlLXV0aWxzJztcclxuaW1wb3J0IHtoZXhUb1JnYiwgZ2V0Q29sb3JHcm91cEJ5TmFtZSwgcmV2ZXJzZUNvbG9yUmFuZ2V9IGZyb20gJ3V0aWxzL2NvbG9yLXV0aWxzJztcclxuXHJcbi8qKlxyXG4gKiBBcHByb3guIG51bWJlciBvZiBwb2ludHMgdG8gc2FtcGxlIGluIGEgbGFyZ2UgZGF0YSBzZXRcclxuICogQHR5cGUge251bWJlcn1cclxuICovXHJcbmNvbnN0IE1BWF9TQU1QTEVfU0laRSA9IDUwMDA7XHJcbmNvbnN0IGRhdGFGaWx0ZXJFeHRlbnNpb24gPSBuZXcgRGF0YUZpbHRlckV4dGVuc2lvbih7ZmlsdGVyU2l6ZTogTUFYX0dQVV9GSUxURVJTfSk7XHJcbmNvbnN0IGlkZW50aXR5ID0gZCA9PiBkO1xyXG5cclxuZXhwb3J0IGNvbnN0IE9WRVJMQVlfVFlQRSA9IGtleW1pcnJvcih7XHJcbiAgZGVja2dsOiBudWxsLFxyXG4gIG1hcGJveGdsOiBudWxsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxheWVyQ29sb3JzID0gT2JqZWN0LnZhbHVlcyhEYXRhVml6Q29sb3JzKS5tYXAoaGV4VG9SZ2IpO1xyXG5mdW5jdGlvbiogZ2VuZXJhdGVDb2xvcigpIHtcclxuICBsZXQgaW5kZXggPSAwO1xyXG4gIHdoaWxlIChpbmRleCA8IGxheWVyQ29sb3JzLmxlbmd0aCArIDEpIHtcclxuICAgIGlmIChpbmRleCA9PT0gbGF5ZXJDb2xvcnMubGVuZ3RoKSB7XHJcbiAgICAgIGluZGV4ID0gMDtcclxuICAgIH1cclxuICAgIHlpZWxkIGxheWVyQ29sb3JzW2luZGV4KytdO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGNvbG9yTWFrZXIgPSBnZW5lcmF0ZUNvbG9yKCk7XHJcbmNvbnN0IGRlZmF1bHRHZXRGaWVsZFZhbHVlID0gKGZpZWxkLCBkKSA9PiBkW2ZpZWxkLnRhYmxlRmllbGRJbmRleCAtIDFdO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGF5ZXIge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzID0ge30pIHtcclxuICAgIHRoaXMuaWQgPSBwcm9wcy5pZCB8fCBnZW5lcmF0ZUhhc2hJZCg2KTtcclxuXHJcbiAgICAvLyBtZXRhXHJcbiAgICB0aGlzLm1ldGEgPSB7fTtcclxuXHJcbiAgICAvLyB2aXNDb25maWdTZXR0aW5nc1xyXG4gICAgdGhpcy52aXNDb25maWdTZXR0aW5ncyA9IHt9O1xyXG5cclxuICAgIHRoaXMuY29uZmlnID0gdGhpcy5nZXREZWZhdWx0TGF5ZXJDb25maWcoe1xyXG4gICAgICBjb2x1bW5zOiB0aGlzLmdldExheWVyQ29sdW1ucygpLFxyXG4gICAgICAuLi5wcm9wc1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBnZXQgbGF5ZXJJY29uKCkge1xyXG4gICAgcmV0dXJuIERlZmF1bHRMYXllckljb247XHJcbiAgfVxyXG5cclxuICBnZXQgb3ZlcmxheVR5cGUoKSB7XHJcbiAgICByZXR1cm4gT1ZFUkxBWV9UWVBFLmRlY2tnbDtcclxuICB9XHJcblxyXG4gIGdldCB0eXBlKCkge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICBnZXQgbmFtZSgpIHtcclxuICAgIHJldHVybiB0aGlzLnR5cGU7XHJcbiAgfVxyXG5cclxuICBnZXQgaXNBZ2dyZWdhdGVkKCkge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHJlcXVpcmVkTGF5ZXJDb2x1bW5zKCkge1xyXG4gICAgcmV0dXJuIFtdO1xyXG4gIH1cclxuXHJcbiAgZ2V0IG9wdGlvbmFsQ29sdW1ucygpIHtcclxuICAgIHJldHVybiBbXTtcclxuICB9XHJcblxyXG4gIGdldCBub25lTGF5ZXJEYXRhQWZmZWN0aW5nUHJvcHMoKSB7XHJcbiAgICByZXR1cm4gWydsYWJlbCcsICdvcGFjaXR5JywgJ3RoaWNrbmVzcycsICdpc1Zpc2libGUnLCAnaGlkZGVuJ107XHJcbiAgfVxyXG5cclxuICBnZXQgdmlzdWFsQ2hhbm5lbHMoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBjb2xvcjoge1xyXG4gICAgICAgIHByb3BlcnR5OiAnY29sb3InLFxyXG4gICAgICAgIGZpZWxkOiAnY29sb3JGaWVsZCcsXHJcbiAgICAgICAgc2NhbGU6ICdjb2xvclNjYWxlJyxcclxuICAgICAgICBkb21haW46ICdjb2xvckRvbWFpbicsXHJcbiAgICAgICAgcmFuZ2U6ICdjb2xvclJhbmdlJyxcclxuICAgICAgICBrZXk6ICdjb2xvcicsXHJcbiAgICAgICAgY2hhbm5lbFNjYWxlVHlwZTogQ0hBTk5FTF9TQ0FMRVMuY29sb3JcclxuICAgICAgfSxcclxuICAgICAgc2l6ZToge1xyXG4gICAgICAgIHByb3BlcnR5OiAnc2l6ZScsXHJcbiAgICAgICAgZmllbGQ6ICdzaXplRmllbGQnLFxyXG4gICAgICAgIHNjYWxlOiAnc2l6ZVNjYWxlJyxcclxuICAgICAgICBkb21haW46ICdzaXplRG9tYWluJyxcclxuICAgICAgICByYW5nZTogJ3NpemVSYW5nZScsXHJcbiAgICAgICAga2V5OiAnc2l6ZScsXHJcbiAgICAgICAgY2hhbm5lbFNjYWxlVHlwZTogQ0hBTk5FTF9TQ0FMRVMuc2l6ZVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgLypcclxuICAgKiBDb2x1bW4gcGFpcnMgbWFwcyBsYXllciBjb2x1bW4gdG8gYSBzcGVjaWZpYyBmaWVsZCBwYWlycyxcclxuICAgKiBCeSBkZWZhdWx0LCBpdCBpcyBzZXQgdG8gbnVsbFxyXG4gICAqL1xyXG4gIGdldCBjb2x1bW5QYWlycygpIHtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgLypcclxuICAgKiBEZWZhdWx0IHBvaW50IGNvbHVtbiBwYWlycywgY2FuIGJlIHVzZWQgZm9yIHBvaW50IGJhc2VkIGxheWVyczogcG9pbnQsIGljb24gZXRjLlxyXG4gICAqL1xyXG4gIGdldCBkZWZhdWx0UG9pbnRDb2x1bW5QYWlycygpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGxhdDoge3BhaXI6ICdsbmcnLCBmaWVsZFBhaXJLZXk6ICdsYXQnfSxcclxuICAgICAgbG5nOiB7cGFpcjogJ2xhdCcsIGZpZWxkUGFpcktleTogJ2xuZyd9XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgLypcclxuICAgKiBEZWZhdWx0IGxpbmsgY29sdW1uIHBhaXJzLCBjYW4gYmUgdXNlZCBmb3IgbGluayBiYXNlZCBsYXllcnM6IGFyYywgbGluZSBldGNcclxuICAgKi9cclxuICBnZXQgZGVmYXVsdExpbmtDb2x1bW5QYWlycygpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGxhdDA6IHtwYWlyOiAnbG5nMCcsIGZpZWxkUGFpcktleTogJ2xhdCd9LFxyXG4gICAgICBsbmcwOiB7cGFpcjogJ2xhdDAnLCBmaWVsZFBhaXJLZXk6ICdsbmcnfSxcclxuICAgICAgbGF0MToge3BhaXI6ICdsbmcxJywgZmllbGRQYWlyS2V5OiAnbGF0J30sXHJcbiAgICAgIGxuZzE6IHtwYWlyOiAnbGF0MScsIGZpZWxkUGFpcktleTogJ2xuZyd9XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmV0dXJuIGEgUmVhY3QgY29tcG9uZW50IGZvciB0byByZW5kZXIgbGF5ZXIgaW5zdHJ1Y3Rpb25zIGluIGEgbW9kYWxcclxuICAgKiBAcmV0dXJucyB7b2JqZWN0fSAtIGFuIG9iamVjdFxyXG4gICAqIEBleGFtcGxlXHJcbiAgICogIHJldHVybiB7XHJcbiAgICogICAgaWQ6ICdpY29uSW5mbycsXHJcbiAgICogICAgdGVtcGxhdGU6IEljb25JbmZvTW9kYWwsXHJcbiAgICogICAgbW9kYWxQcm9wczoge1xyXG4gICAqICAgICAgdGl0bGU6ICdIb3cgdG8gZHJhdyBpY29ucydcclxuICAgKiAgIH07XHJcbiAgICogfVxyXG4gICAqL1xyXG4gIGdldCBsYXllckluZm9Nb2RhbCgpIHtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuICAvKlxyXG4gICAqIEdpdmVuIGEgZGF0YXNldCwgYXV0b21hdGljYWxseSBmaW5kIHByb3BzIHRvIGNyZWF0ZSBsYXllciBiYXNlZCBvbiBpdFxyXG4gICAqIGFuZCByZXR1cm4gdGhlIHByb3BzIGFuZCBwcmV2aW91cyBmb3VuZCBsYXllcnMuXHJcbiAgICogQnkgZGVmYXVsdCwgbm8gbGF5ZXJzIHdpbGwgYmUgZm91bmRcclxuICAgKi9cclxuICBzdGF0aWMgZmluZERlZmF1bHRMYXllclByb3BzKGRhdGFzZXQsIGZvdW5kTGF5ZXJzKSB7XHJcbiAgICByZXR1cm4ge3Byb3BzOiBbXSwgZm91bmRMYXllcnN9O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2l2ZW4gYSBhcnJheSBvZiBwcmVzZXQgcmVxdWlyZWQgY29sdW1uIG5hbWVzXHJcbiAgICogZm91bmQgZmllbGQgdGhhdCBoYXMgdGhlIHNhbWUgbmFtZSB0byBzZXQgYXMgbGF5ZXIgY29sdW1uXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge29iamVjdH0gZGVmYXVsdEZpZWxkc1xyXG4gICAqIEBwYXJhbSB7b2JqZWN0W119IGFsbEZpZWxkc1xyXG4gICAqIEByZXR1cm5zIHtvYmplY3RbXSB8IG51bGx9IGFsbCBwb3NzaWJsZSByZXF1aXJlZCBsYXllciBjb2x1bW4gcGFpcnNcclxuICAgKi9cclxuICBzdGF0aWMgZmluZERlZmF1bHRDb2x1bW5GaWVsZChkZWZhdWx0RmllbGRzLCBhbGxGaWVsZHMpIHtcclxuICAgIC8vIGZpbmQgYWxsIG1hdGNoZWQgZmllbGRzIGZvciBlYWNoIHJlcXVpcmVkIGNvbFxyXG4gICAgY29uc3QgcmVxdWlyZWRDb2x1bW5zID0gT2JqZWN0LmtleXMoZGVmYXVsdEZpZWxkcykucmVkdWNlKChwcmV2LCBrZXkpID0+IHtcclxuICAgICAgY29uc3QgcmVxdWlyZWRGaWVsZHMgPSBhbGxGaWVsZHMuZmlsdGVyKFxyXG4gICAgICAgIGYgPT4gZi5uYW1lID09PSBkZWZhdWx0RmllbGRzW2tleV0gfHwgZGVmYXVsdEZpZWxkc1trZXldLmluY2x1ZGVzKGYubmFtZSlcclxuICAgICAgKTtcclxuXHJcbiAgICAgIHByZXZba2V5XSA9IHJlcXVpcmVkRmllbGRzLmxlbmd0aFxyXG4gICAgICAgID8gcmVxdWlyZWRGaWVsZHMubWFwKGYgPT4gKHtcclxuICAgICAgICAgICAgdmFsdWU6IGYubmFtZSxcclxuICAgICAgICAgICAgZmllbGRJZHg6IGYudGFibGVGaWVsZEluZGV4IC0gMVxyXG4gICAgICAgICAgfSkpXHJcbiAgICAgICAgOiBudWxsO1xyXG4gICAgICByZXR1cm4gcHJldjtcclxuICAgIH0sIHt9KTtcclxuXHJcbiAgICBpZiAoIU9iamVjdC52YWx1ZXMocmVxdWlyZWRDb2x1bW5zKS5ldmVyeShCb29sZWFuKSkge1xyXG4gICAgICAvLyBpZiBhbnkgZmllbGQgbWlzc2luZywgcmV0dXJuIG51bGxcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuZ2V0QWxsUG9zc2libGVDb2x1bW5QYXJpcyhyZXF1aXJlZENvbHVtbnMpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldEFsbFBvc3NpYmxlQ29sdW1uUGFyaXMocmVxdWlyZWRDb2x1bW5zKSB7XHJcbiAgICAvLyBmb3IgbXVsdGlwbGUgbWF0Y2hlZCBmaWVsZCBmb3Igb25lIHJlcXVpcmVkIGNvbHVtbiwgcmV0dXJuIG11bHRpcGxlXHJcbiAgICAvLyBjb21iaW5hdGlvbnMsIGUuIGcuIGlmIGNvbHVtbiBhIGhhcyAyIG1hdGNoZWQsIGNvbHVtbiBiIGhhcyAzIG1hdGNoZWRcclxuICAgIC8vIDYgcG9zc2libGUgY29sdW1uIHBhaXJzIHdpbGwgYmUgcmV0dXJuZWRcclxuICAgIGNvbnN0IGFsbEtleXMgPSBPYmplY3Qua2V5cyhyZXF1aXJlZENvbHVtbnMpO1xyXG4gICAgY29uc3QgcG9pbnRlcnMgPSBhbGxLZXlzLm1hcCgoaywgaSkgPT4gKGkgPT09IGFsbEtleXMubGVuZ3RoIC0gMSA/IC0xIDogMCkpO1xyXG4gICAgY29uc3QgY291bnRQZXJLZXkgPSBhbGxLZXlzLm1hcChrID0+IHJlcXVpcmVkQ29sdW1uc1trXS5sZW5ndGgpO1xyXG4gICAgY29uc3QgcGFpcnMgPSBbXTtcclxuXHJcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1sb29wLWZ1bmMgKi9cclxuICAgIHdoaWxlIChpbmNyZW1lbnRQb2ludGVycyhwb2ludGVycywgY291bnRQZXJLZXksIHBvaW50ZXJzLmxlbmd0aCAtIDEpKSB7XHJcbiAgICAgIGNvbnN0IG5ld1BhaXIgPSBwb2ludGVycy5yZWR1Y2UoKHByZXYsIGN1dXIsIGkpID0+IHtcclxuICAgICAgICBwcmV2W2FsbEtleXNbaV1dID0gcmVxdWlyZWRDb2x1bW5zW2FsbEtleXNbaV1dW2N1dXJdO1xyXG4gICAgICAgIHJldHVybiBwcmV2O1xyXG4gICAgICB9LCB7fSk7XHJcblxyXG4gICAgICBwYWlycy5wdXNoKG5ld1BhaXIpO1xyXG4gICAgfVxyXG4gICAgLyogZXNsaW50LWVuYWJsZSBuby1sb29wLWZ1bmMgKi9cclxuXHJcbiAgICAvLyByZWN1cnNpdmVseSBpbmNyZW1lbnQgcG9pbnRlcnNcclxuICAgIGZ1bmN0aW9uIGluY3JlbWVudFBvaW50ZXJzKHB0cywgY291bnRzLCBpbmRleCkge1xyXG4gICAgICBpZiAoaW5kZXggPT09IDAgJiYgcHRzWzBdID09PSBjb3VudHNbMF0gLSAxKSB7XHJcbiAgICAgICAgLy8gbm90aGluZyB0byBpbmNyZW1lbnRcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChwdHNbaW5kZXhdICsgMSA8IGNvdW50c1tpbmRleF0pIHtcclxuICAgICAgICBwdHNbaW5kZXhdID0gcHRzW2luZGV4XSArIDE7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHB0c1tpbmRleF0gPSAwO1xyXG4gICAgICByZXR1cm4gaW5jcmVtZW50UG9pbnRlcnMocHRzLCBjb3VudHMsIGluZGV4IC0gMSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHBhaXJzO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGhleFRvUmdiKGMpIHtcclxuICAgIHJldHVybiBoZXhUb1JnYihjKTtcclxuICB9XHJcblxyXG4gIGdldERlZmF1bHRMYXllckNvbmZpZyhwcm9wcyA9IHt9KSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBkYXRhSWQ6IHByb3BzLmRhdGFJZCB8fCBudWxsLFxyXG4gICAgICBsYWJlbDogcHJvcHMubGFiZWwgfHwgJ25ldyBsYXllcicsXHJcbiAgICAgIGNvbG9yOiBwcm9wcy5jb2xvciB8fCBjb2xvck1ha2VyLm5leHQoKS52YWx1ZSxcclxuICAgICAgY29sdW1uczogcHJvcHMuY29sdW1ucyB8fCBudWxsLFxyXG4gICAgICBpc1Zpc2libGU6IHByb3BzLmlzVmlzaWJsZSB8fCBmYWxzZSxcclxuICAgICAgaXNDb25maWdBY3RpdmU6IHByb3BzLmlzQ29uZmlnQWN0aXZlIHx8IGZhbHNlLFxyXG4gICAgICBoaWdobGlnaHRDb2xvcjogcHJvcHMuaGlnaGxpZ2h0Q29sb3IgfHwgWzI1MiwgMjQyLCAyNiwgMjU1XSxcclxuICAgICAgaGlkZGVuOiBwcm9wcy5oaWRkZW4gfHwgZmFsc2UsXHJcblxyXG4gICAgICAvLyBUT0RPOiByZWZhY3RvciB0aGlzIGludG8gc2VwYXJhdGUgdmlzdWFsIENoYW5uZWwgY29uZmlnXHJcbiAgICAgIC8vIGNvbG9yIGJ5IGZpZWxkLCBkb21haW4gaXMgc2V0IGJ5IGZpbHRlcnMsIGZpZWxkLCBzY2FsZSB0eXBlXHJcbiAgICAgIGNvbG9yRmllbGQ6IG51bGwsXHJcbiAgICAgIGNvbG9yRG9tYWluOiBbMCwgMV0sXHJcbiAgICAgIGNvbG9yU2NhbGU6IFNDQUxFX1RZUEVTLnF1YW50aWxlLFxyXG5cclxuICAgICAgLy8gY29sb3IgYnkgc2l6ZSwgZG9tYWluIGlzIHNldCBieSBmaWx0ZXJzLCBmaWVsZCwgc2NhbGUgdHlwZVxyXG4gICAgICBzaXplRG9tYWluOiBbMCwgMV0sXHJcbiAgICAgIHNpemVTY2FsZTogU0NBTEVfVFlQRVMubGluZWFyLFxyXG4gICAgICBzaXplRmllbGQ6IG51bGwsXHJcblxyXG4gICAgICB2aXNDb25maWc6IHt9LFxyXG5cclxuICAgICAgdGV4dExhYmVsOiBbREVGQVVMVF9URVhUX0xBQkVMXSxcclxuXHJcbiAgICAgIGNvbG9yVUk6IHtcclxuICAgICAgICBjb2xvcjogREVGQVVMVF9DT0xPUl9VSSxcclxuICAgICAgICBjb2xvclJhbmdlOiBERUZBVUxUX0NPTE9SX1VJXHJcbiAgICAgIH0sXHJcbiAgICAgIGFuaW1hdGlvbjoge2VuYWJsZWQ6IGZhbHNlfVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldCB0aGUgZGVzY3JpcHRpb24gb2YgYSB2aXN1YWxDaGFubmVsIGNvbmZpZ1xyXG4gICAqIEBwYXJhbSBrZXlcclxuICAgKiBAcmV0dXJucyB7e2xhYmVsOiBzdHJpbmcsIG1lYXN1cmU6IChzdHJpbmd8c3RyaW5nKX19XHJcbiAgICovXHJcbiAgZ2V0VmlzdWFsQ2hhbm5lbERlc2NyaXB0aW9uKGtleSkge1xyXG4gICAgLy8gZS5nLiBsYWJlbDogQ29sb3IsIG1lYXN1cmU6IFZlaGljbGUgVHlwZVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbGFiZWw6IHRoaXMudmlzQ29uZmlnU2V0dGluZ3NbdGhpcy52aXN1YWxDaGFubmVsc1trZXldLnJhbmdlXS5sYWJlbCxcclxuICAgICAgbWVhc3VyZTogdGhpcy5jb25maWdbdGhpcy52aXN1YWxDaGFubmVsc1trZXldLmZpZWxkXVxyXG4gICAgICAgID8gdGhpcy5jb25maWdbdGhpcy52aXN1YWxDaGFubmVsc1trZXldLmZpZWxkXS5uYW1lXHJcbiAgICAgICAgOiB0aGlzLnZpc3VhbENoYW5uZWxzW2tleV0uZGVmYXVsdE1lYXN1cmVcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBc3NpZ24gYSBmaWVsZCB0byBsYXllciBjb2x1bW4sIHJldHVybiBjb2x1bW4gY29uZmlnXHJcbiAgICogQHBhcmFtIGtleSAtIENvbHVtbiBLZXlcclxuICAgKiBAcGFyYW0gZmllbGQgLSBTZWxlY3RlZCBmaWVsZFxyXG4gICAqIEByZXR1cm5zIHt7fX0gLSBDb2x1bW4gY29uZmlnXHJcbiAgICovXHJcbiAgYXNzaWduQ29sdW1uKGtleSwgZmllbGQpIHtcclxuICAgIC8vIGZpZWxkIHZhbHVlIGNvdWxkIGJlIG51bGwgZm9yIG9wdGlvbmFsIGNvbHVtbnNcclxuICAgIGNvbnN0IHVwZGF0ZSA9IGZpZWxkXHJcbiAgICAgID8ge1xyXG4gICAgICAgICAgdmFsdWU6IGZpZWxkLm5hbWUsXHJcbiAgICAgICAgICBmaWVsZElkeDogZmllbGQudGFibGVGaWVsZEluZGV4IC0gMVxyXG4gICAgICAgIH1cclxuICAgICAgOiB7dmFsdWU6IG51bGwsIGZpZWxkSWR4OiAtMX07XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgLi4udGhpcy5jb25maWcuY29sdW1ucyxcclxuICAgICAgW2tleV06IHtcclxuICAgICAgICAuLi50aGlzLmNvbmZpZy5jb2x1bW5zW2tleV0sXHJcbiAgICAgICAgLi4udXBkYXRlXHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBc3NpZ24gYSBmaWVsZCBwYWlyIHRvIGNvbHVtbiBjb25maWcsIHJldHVybiBjb2x1bW4gY29uZmlnXHJcbiAgICogQHBhcmFtIGtleSAtIENvbHVtbiBLZXlcclxuICAgKiBAcGFyYW0gcGFpciAtIGZpZWxkIFBhaXJcclxuICAgKiBAcmV0dXJucyB7e319IC0gQ29sdW1uIGNvbmZpZ1xyXG4gICAqL1xyXG4gIGFzc2lnbkNvbHVtblBhaXJzKGtleSwgcGFpcikge1xyXG4gICAgaWYgKCF0aGlzLmNvbHVtblBhaXJzIHx8ICF0aGlzLmNvbHVtblBhaXJzW2tleV0pIHtcclxuICAgICAgLy8gc2hvdWxkIG5vdCBlbmQgaW4gdGhpcyBzdGF0ZVxyXG4gICAgICByZXR1cm4gdGhpcy5jb25maWcuY29sdW1ucztcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB7cGFpcjogcGFydG5lcktleSwgZmllbGRQYWlyS2V5fSA9IHRoaXMuY29sdW1uUGFpcnNba2V5XTtcclxuICAgIGNvbnN0IHtmaWVsZFBhaXJLZXk6IHBhcnRuZXJGaWVsZFBhaXJLZXl9ID0gdGhpcy5jb2x1bW5QYWlyc1twYXJ0bmVyS2V5XTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAuLi50aGlzLmNvbmZpZy5jb2x1bW5zLFxyXG4gICAgICBba2V5XTogcGFpcltmaWVsZFBhaXJLZXldLFxyXG4gICAgICBbcGFydG5lcktleV06IHBhaXJbcGFydG5lckZpZWxkUGFpcktleV1cclxuICAgIH07XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDYWxjdWxhdGUgYSByYWRpdXMgem9vbSBtdWx0aXBsaWVyIHRvIHJlbmRlciBwb2ludHMsIHNvIHRoZXkgYXJlIHZpc2libGUgaW4gYWxsIHpvb20gbGV2ZWxcclxuICAgKiBAcGFyYW0gbWFwU3RhdGVcclxuICAgKiBAcGFyYW0gbWFwU3RhdGUuem9vbSAtIGFjdHVhbCB6b29tXHJcbiAgICogQHBhcmFtIG1hcFN0YXRlLnpvb21PZmZzZXQgLSB6b29tT2Zmc2V0IHdoZW4gcmVuZGVyIGluIHRoZSBwbG90IGNvbnRhaW5lciBmb3IgZXhwb3J0IGltYWdlXHJcbiAgICogQHJldHVybnMge251bWJlcn1cclxuICAgKi9cclxuICBnZXRab29tRmFjdG9yKHt6b29tLCB6b29tT2Zmc2V0ID0gMH0pIHtcclxuICAgIHJldHVybiBNYXRoLnBvdygyLCBNYXRoLm1heCgxNCAtIHpvb20gKyB6b29tT2Zmc2V0LCAwKSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDYWxjdWxhdGUgYSBlbGV2YXRpb24gem9vbSBtdWx0aXBsaWVyIHRvIHJlbmRlciBwb2ludHMsIHNvIHRoZXkgYXJlIHZpc2libGUgaW4gYWxsIHpvb20gbGV2ZWxcclxuICAgKiBAcGFyYW0gbWFwU3RhdGVcclxuICAgKiBAcGFyYW0gbWFwU3RhdGUuem9vbSAtIGFjdHVhbCB6b29tXHJcbiAgICogQHBhcmFtIG1hcFN0YXRlLnpvb21PZmZzZXQgLSB6b29tT2Zmc2V0IHdoZW4gcmVuZGVyIGluIHRoZSBwbG90IGNvbnRhaW5lciBmb3IgZXhwb3J0IGltYWdlXHJcbiAgICogQHJldHVybnMge251bWJlcn1cclxuICAgKi9cclxuICBnZXRFbGV2YXRpb25ab29tRmFjdG9yKHt6b29tLCB6b29tT2Zmc2V0ID0gMH0pIHtcclxuICAgIHJldHVybiBNYXRoLnBvdygyLCBNYXRoLm1heCg4IC0gem9vbSArIHpvb21PZmZzZXQsIDApKTtcclxuICB9XHJcblxyXG4gIGZvcm1hdExheWVyRGF0YShkYXRhc2V0cywgZmlsdGVyZWRJbmRleCkge1xyXG4gICAgcmV0dXJuIHt9O1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyTGF5ZXIoKSB7XHJcbiAgICByZXR1cm4gW107XHJcbiAgfVxyXG5cclxuICBnZXRIb3ZlckRhdGEob2JqZWN0KSB7XHJcbiAgICBpZiAoIW9iamVjdCkge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIC8vIGJ5IGRlZmF1bHQsIGVhY2ggZW50cnkgb2YgbGF5ZXJEYXRhIHNob3VsZCBoYXZlIGEgZGF0YSBwcm9wZXJ0eSBwb2ludHNcclxuICAgIC8vIHRvIHRoZSBvcmlnaW5hbCBpdGVtIGluIHRoZSBhbGxEYXRhIGFycmF5XHJcbiAgICAvLyBlYWNoIGxheWVyIGNhbiBpbXBsZW1lbnQgaXRzIG93biBnZXRIb3ZlckRhdGEgbWV0aG9kXHJcbiAgICByZXR1cm4gb2JqZWN0LmRhdGE7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBXaGVuIGNoYW5nZSBsYXllciB0eXBlLCB0cnkgdG8gY29weSBvdmVyIGxheWVyIGNvbmZpZ3MgYXMgbXVjaCBhcyBwb3NzaWJsZVxyXG4gICAqIEBwYXJhbSBjb25maWdUb0NvcHkgLSBjb25maWcgdG8gY29weSBvdmVyXHJcbiAgICogQHBhcmFtIHZpc0NvbmZpZ1NldHRpbmdzIC0gdmlzQ29uZmlnIHNldHRpbmdzIG9mIGNvbmZpZyB0byBjb3B5XHJcbiAgICovXHJcbiAgYXNzaWduQ29uZmlnVG9MYXllcihjb25maWdUb0NvcHksIHZpc0NvbmZpZ1NldHRpbmdzKSB7XHJcbiAgICAvLyBkb24ndCBkZWVwIG1lcmdlIHZpc3VhbENoYW5uZWwgZmllbGRcclxuICAgIC8vIGRvbid0IGRlZXAgbWVyZ2UgY29sb3IgcmFuZ2UsIHJldmVyc2VkOiBpcyBub3QgYSBrZXkgYnkgZGVmYXVsdFxyXG4gICAgY29uc3Qgc2hhbGxvd0NvcHkgPSBbJ2NvbG9yUmFuZ2UnLCAnc3Ryb2tlQ29sb3JSYW5nZSddLmNvbmNhdChcclxuICAgICAgT2JqZWN0LnZhbHVlcyh0aGlzLnZpc3VhbENoYW5uZWxzKS5tYXAodiA9PiB2LmZpZWxkKVxyXG4gICAgKTtcclxuXHJcbiAgICAvLyBkb24ndCBjb3B5IG92ZXIgZG9tYWluIGFuZCBhbmltYXRpb25cclxuICAgIGNvbnN0IG5vdFRvQ29weSA9IFsnYW5pbWF0aW9uJ10uY29uY2F0KE9iamVjdC52YWx1ZXModGhpcy52aXN1YWxDaGFubmVscykubWFwKHYgPT4gdi5kb21haW4pKTtcclxuICAgIC8vIGlmIHJhbmdlIGlzIGZvciB0aGUgc2FtZSBwcm9wZXJ0eSBncm91cCBjb3B5IGl0LCBvdGhlcndpc2UsIG5vdCB0byBjb3B5XHJcbiAgICBPYmplY3QudmFsdWVzKHRoaXMudmlzdWFsQ2hhbm5lbHMpLmZvckVhY2godiA9PiB7XHJcbiAgICAgIGlmIChcclxuICAgICAgICBjb25maWdUb0NvcHkudmlzQ29uZmlnW3YucmFuZ2VdICYmXHJcbiAgICAgICAgdmlzQ29uZmlnU2V0dGluZ3Nbdi5yYW5nZV0uZ3JvdXAgIT09IHRoaXMudmlzQ29uZmlnU2V0dGluZ3Nbdi5yYW5nZV0uZ3JvdXBcclxuICAgICAgKSB7XHJcbiAgICAgICAgbm90VG9Db3B5LnB1c2godi5yYW5nZSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIGRvbid0IGNvcHkgb3ZlciB2aXN1YWxDaGFubmVsIHJhbmdlXHJcbiAgICBjb25zdCBjdXJyZW50Q29uZmlnID0gdGhpcy5jb25maWc7XHJcbiAgICBjb25zdCBjb3BpZWQgPSB0aGlzLmNvcHlMYXllckNvbmZpZyhjdXJyZW50Q29uZmlnLCBjb25maWdUb0NvcHksIHtcclxuICAgICAgc2hhbGxvd0NvcHksXHJcbiAgICAgIG5vdFRvQ29weVxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy51cGRhdGVMYXllckNvbmZpZyhjb3BpZWQpO1xyXG4gICAgLy8gdmFsaWRhdGUgdmlzdWFsQ2hhbm5lbCBmaWVsZCB0eXBlIGFuZCBzY2FsZSB0eXBlc1xyXG4gICAgT2JqZWN0LmtleXModGhpcy52aXN1YWxDaGFubmVscykuZm9yRWFjaChjaGFubmVsID0+IHtcclxuICAgICAgdGhpcy52YWxpZGF0ZVZpc3VhbENoYW5uZWwoY2hhbm5lbCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qXHJcbiAgICogUmVjdXJzaXZlbHkgY29weSBjb25maWcgb3ZlciB0byBhbiBlbXB0eSBsYXllclxyXG4gICAqIHdoZW4gcmVjZWl2ZWQgc2F2ZWQgY29uZmlnLCBvciBjb3B5IGNvbmZpZyBvdmVyIGZyb20gYSBkaWZmZXJlbnQgbGF5ZXIgdHlwZVxyXG4gICAqIG1ha2Ugc3VyZSB0byBvbmx5IGNvcHkgb3ZlciB2YWx1ZSB0byBleGlzdGluZyBrZXlzXHJcbiAgICogQHBhcmFtIHtvYmplY3R9IGN1cnJlbnRDb25maWcgLSBleGlzdGluZyBjb25maWcgdG8gYmUgb3ZlcnJpZGVcclxuICAgKiBAcGFyYW0ge29iamVjdH0gY29uZmlnVG9Db3B5IC0gbmV3IENvbmZpZyB0byBjb3B5IG92ZXJcclxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBzaGFsbG93Q29weSAtIGFycmF5IG9mIHByb3BlcnRpZXMgdG8gbm90IHRvIGJlIGRlZXAgY29waWVkXHJcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gbm90VG9Db3B5IC0gYXJyYXkgb2YgcHJvcGVydGllcyBub3QgdG8gY29weVxyXG4gICAqIEByZXR1cm5zIHtvYmplY3R9IC0gY29waWVkIGNvbmZpZ1xyXG4gICAqL1xyXG4gIGNvcHlMYXllckNvbmZpZyhjdXJyZW50Q29uZmlnLCBjb25maWdUb0NvcHksIHtzaGFsbG93Q29weSA9IFtdLCBub3RUb0NvcHkgPSBbXX0gPSB7fSkge1xyXG4gICAgY29uc3QgY29waWVkID0ge307XHJcbiAgICBPYmplY3Qua2V5cyhjdXJyZW50Q29uZmlnKS5mb3JFYWNoKGtleSA9PiB7XHJcbiAgICAgIGlmIChcclxuICAgICAgICBpc1BsYWluT2JqZWN0KGN1cnJlbnRDb25maWdba2V5XSkgJiZcclxuICAgICAgICBpc1BsYWluT2JqZWN0KGNvbmZpZ1RvQ29weVtrZXldKSAmJlxyXG4gICAgICAgICFzaGFsbG93Q29weS5pbmNsdWRlcyhrZXkpICYmXHJcbiAgICAgICAgIW5vdFRvQ29weS5pbmNsdWRlcyhrZXkpXHJcbiAgICAgICkge1xyXG4gICAgICAgIC8vIHJlY3Vyc2l2ZWx5IGFzc2lnbiBvYmplY3QgdmFsdWVcclxuICAgICAgICBjb3BpZWRba2V5XSA9IHRoaXMuY29weUxheWVyQ29uZmlnKGN1cnJlbnRDb25maWdba2V5XSwgY29uZmlnVG9Db3B5W2tleV0sIHtcclxuICAgICAgICAgIHNoYWxsb3dDb3B5LFxyXG4gICAgICAgICAgbm90VG9Db3B5XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSBpZiAobm90TnVsbG9yVW5kZWZpbmVkKGNvbmZpZ1RvQ29weVtrZXldKSAmJiAhbm90VG9Db3B5LmluY2x1ZGVzKGtleSkpIHtcclxuICAgICAgICAvLyBjb3B5XHJcbiAgICAgICAgY29waWVkW2tleV0gPSBjb25maWdUb0NvcHlba2V5XTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBrZWVwIGV4aXN0aW5nXHJcbiAgICAgICAgY29waWVkW2tleV0gPSBjdXJyZW50Q29uZmlnW2tleV07XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBjb3BpZWQ7XHJcbiAgfVxyXG5cclxuICByZWdpc3RlclZpc0NvbmZpZyhsYXllclZpc0NvbmZpZ3MpIHtcclxuICAgIE9iamVjdC5rZXlzKGxheWVyVmlzQ29uZmlncykuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgaWYgKHR5cGVvZiBpdGVtID09PSAnc3RyaW5nJyAmJiBMQVlFUl9WSVNfQ09ORklHU1tsYXllclZpc0NvbmZpZ3NbaXRlbV1dKSB7XHJcbiAgICAgICAgLy8gaWYgYXNzaWduZWQgb25lIG9mIGRlZmF1bHQgTEFZRVJfQ09ORklHU1xyXG4gICAgICAgIHRoaXMuY29uZmlnLnZpc0NvbmZpZ1tpdGVtXSA9IExBWUVSX1ZJU19DT05GSUdTW2xheWVyVmlzQ29uZmlnc1tpdGVtXV0uZGVmYXVsdFZhbHVlO1xyXG4gICAgICAgIHRoaXMudmlzQ29uZmlnU2V0dGluZ3NbaXRlbV0gPSBMQVlFUl9WSVNfQ09ORklHU1tsYXllclZpc0NvbmZpZ3NbaXRlbV1dO1xyXG4gICAgICB9IGVsc2UgaWYgKFsndHlwZScsICdkZWZhdWx0VmFsdWUnXS5ldmVyeShwID0+IGxheWVyVmlzQ29uZmlnc1tpdGVtXS5oYXNPd25Qcm9wZXJ0eShwKSkpIHtcclxuICAgICAgICAvLyBpZiBwcm92aWRlZCBjdXN0b21pemVkIHZpc0NvbmZpZywgYW5kIGhhcyB0eXBlICYmIGRlZmF1bHRWYWx1ZVxyXG4gICAgICAgIC8vIFRPRE86IGZ1cnRoZXIgY2hlY2sgaWYgY3VzdG9taXplZCB2aXNDb25maWcgaXMgdmFsaWRcclxuICAgICAgICB0aGlzLmNvbmZpZy52aXNDb25maWdbaXRlbV0gPSBsYXllclZpc0NvbmZpZ3NbaXRlbV0uZGVmYXVsdFZhbHVlO1xyXG4gICAgICAgIHRoaXMudmlzQ29uZmlnU2V0dGluZ3NbaXRlbV0gPSBsYXllclZpc0NvbmZpZ3NbaXRlbV07XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0TGF5ZXJDb2x1bW5zKCkge1xyXG4gICAgY29uc3QgcmVxdWlyZWQgPSB0aGlzLnJlcXVpcmVkTGF5ZXJDb2x1bW5zLnJlZHVjZShcclxuICAgICAgKGFjY3UsIGtleSkgPT4gKHtcclxuICAgICAgICAuLi5hY2N1LFxyXG4gICAgICAgIFtrZXldOiB7dmFsdWU6IG51bGwsIGZpZWxkSWR4OiAtMX1cclxuICAgICAgfSksXHJcbiAgICAgIHt9XHJcbiAgICApO1xyXG4gICAgY29uc3Qgb3B0aW9uYWwgPSB0aGlzLm9wdGlvbmFsQ29sdW1ucy5yZWR1Y2UoXHJcbiAgICAgIChhY2N1LCBrZXkpID0+ICh7XHJcbiAgICAgICAgLi4uYWNjdSxcclxuICAgICAgICBba2V5XToge3ZhbHVlOiBudWxsLCBmaWVsZElkeDogLTEsIG9wdGlvbmFsOiB0cnVlfVxyXG4gICAgICB9KSxcclxuICAgICAge31cclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIHsuLi5yZXF1aXJlZCwgLi4ub3B0aW9uYWx9O1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlTGF5ZXJDb25maWcobmV3Q29uZmlnKSB7XHJcbiAgICB0aGlzLmNvbmZpZyA9IHsuLi50aGlzLmNvbmZpZywgLi4ubmV3Q29uZmlnfTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlTGF5ZXJWaXNDb25maWcobmV3VmlzQ29uZmlnKSB7XHJcbiAgICB0aGlzLmNvbmZpZy52aXNDb25maWcgPSB7Li4udGhpcy5jb25maWcudmlzQ29uZmlnLCAuLi5uZXdWaXNDb25maWd9O1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVMYXllckNvbG9yVUkocHJvcCwgbmV3Q29uZmlnKSB7XHJcbiAgICBjb25zdCB7Y29sb3JVSTogcHJldmlvdXMsIHZpc0NvbmZpZ30gPSB0aGlzLmNvbmZpZztcclxuXHJcbiAgICBpZiAoIWlzUGxhaW5PYmplY3QobmV3Q29uZmlnKSB8fCB0eXBlb2YgcHJvcCAhPT0gJ3N0cmluZycpIHtcclxuICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY29sb3JVSVByb3AgPSBPYmplY3QuZW50cmllcyhuZXdDb25maWcpLnJlZHVjZSgoYWNjdSwgW2tleSwgdmFsdWVdKSA9PiB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uYWNjdSxcclxuICAgICAgICBba2V5XTogaXNQbGFpbk9iamVjdChhY2N1W2tleV0pICYmIGlzUGxhaW5PYmplY3QodmFsdWUpID8gey4uLmFjY3Vba2V5XSwgLi4udmFsdWV9IDogdmFsdWVcclxuICAgICAgfTtcclxuICAgIH0sIHByZXZpb3VzW3Byb3BdIHx8IERFRkFVTFRfQ09MT1JfVUkpO1xyXG5cclxuICAgIGNvbnN0IGNvbG9yVUkgPSB7XHJcbiAgICAgIC4uLnByZXZpb3VzLFxyXG4gICAgICBbcHJvcF06IGNvbG9yVUlQcm9wXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMudXBkYXRlTGF5ZXJDb25maWcoe2NvbG9yVUl9KTtcclxuICAgIC8vIGlmIGNvbG9yVUlbcHJvcF0gaXMgY29sb3JSYW5nZVxyXG4gICAgY29uc3QgaXNDb2xvclJhbmdlID0gdmlzQ29uZmlnW3Byb3BdICYmIHZpc0NvbmZpZ1twcm9wXS5jb2xvcnM7XHJcblxyXG4gICAgaWYgKGlzQ29sb3JSYW5nZSkge1xyXG4gICAgICB0aGlzLnVwZGF0ZUNvbG9yVUlCeUNvbG9yUmFuZ2UobmV3Q29uZmlnLCBwcm9wKTtcclxuICAgICAgdGhpcy51cGRhdGVDb2xvclJhbmdlQnlDb2xvclVJKG5ld0NvbmZpZywgcHJldmlvdXMsIHByb3ApO1xyXG4gICAgICB0aGlzLnVwZGF0ZUN1c3RvbVBhbGV0dGUobmV3Q29uZmlnLCBwcmV2aW91cywgcHJvcCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVDdXN0b21QYWxldHRlKG5ld0NvbmZpZywgcHJldmlvdXMsIHByb3ApIHtcclxuICAgIGlmICghbmV3Q29uZmlnLmNvbG9yUmFuZ2VDb25maWcgfHwgIW5ld0NvbmZpZy5jb2xvclJhbmdlQ29uZmlnLmN1c3RvbSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qge2NvbG9yVUksIHZpc0NvbmZpZ30gPSB0aGlzLmNvbmZpZztcclxuXHJcbiAgICBpZiAoIXZpc0NvbmZpZ1twcm9wXSkgcmV0dXJuO1xyXG4gICAgY29uc3Qge2NvbG9yc30gPSB2aXNDb25maWdbcHJvcF07XHJcbiAgICBjb25zdCBjdXN0b21QYWxldHRlID0ge1xyXG4gICAgICAuLi5jb2xvclVJW3Byb3BdLmN1c3RvbVBhbGV0dGUsXHJcbiAgICAgIG5hbWU6ICdDdXN0b20gUGFsZXR0ZScsXHJcbiAgICAgIGNvbG9yczogWy4uLmNvbG9yc11cclxuICAgIH07XHJcbiAgICB0aGlzLnVwZGF0ZUxheWVyQ29uZmlnKHtcclxuICAgICAgY29sb3JVSToge1xyXG4gICAgICAgIC4uLmNvbG9yVUksXHJcbiAgICAgICAgW3Byb3BdOiB7XHJcbiAgICAgICAgICAuLi5jb2xvclVJW3Byb3BdLFxyXG4gICAgICAgICAgY3VzdG9tUGFsZXR0ZVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIGlmIG9wZW4gZHJvcGRvd24gYW5kIHByb3AgaXMgY29sb3IgcmFuZ2VcclxuICAgKiBBdXRvbWF0aWNhbGx5IHNldCBjb2xvclJhbmdlQ29uZmlnJ3Mgc3RlcCBhbmQgcmV2ZXJzZWRcclxuICAgKiBAcGFyYW0geyp9IG5ld0NvbmZpZ1xyXG4gICAqIEBwYXJhbSB7Kn0gcHJvcFxyXG4gICAqL1xyXG4gIHVwZGF0ZUNvbG9yVUlCeUNvbG9yUmFuZ2UobmV3Q29uZmlnLCBwcm9wKSB7XHJcbiAgICBpZiAodHlwZW9mIG5ld0NvbmZpZy5zaG93RHJvcGRvd24gIT09ICdudW1iZXInKSByZXR1cm47XHJcblxyXG4gICAgY29uc3Qge2NvbG9yVUksIHZpc0NvbmZpZ30gPSB0aGlzLmNvbmZpZztcclxuICAgIHRoaXMudXBkYXRlTGF5ZXJDb25maWcoe1xyXG4gICAgICBjb2xvclVJOiB7XHJcbiAgICAgICAgLi4uY29sb3JVSSxcclxuICAgICAgICBbcHJvcF06IHtcclxuICAgICAgICAgIC4uLmNvbG9yVUlbcHJvcF0sXHJcbiAgICAgICAgICBjb2xvclJhbmdlQ29uZmlnOiB7XHJcbiAgICAgICAgICAgIC4uLmNvbG9yVUlbcHJvcF0uY29sb3JSYW5nZUNvbmZpZyxcclxuICAgICAgICAgICAgc3RlcHM6IHZpc0NvbmZpZ1twcm9wXS5jb2xvcnMubGVuZ3RoLFxyXG4gICAgICAgICAgICByZXZlcnNlZDogQm9vbGVhbih2aXNDb25maWdbcHJvcF0ucmV2ZXJzZWQpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZUNvbG9yUmFuZ2VCeUNvbG9yVUkobmV3Q29uZmlnLCBwcmV2aW91cywgcHJvcCkge1xyXG4gICAgLy8gb25seSB1cGRhdGUgY29sb3JSYW5nZSBpZiBjaGFuZ2VzIGluIFVJIGlzIG1hZGUgdG8gJ3JldmVyc2VkJywgJ3N0ZXBzJyBvciBzdGVwc1xyXG4gICAgY29uc3Qgc2hvdWxkVXBkYXRlID1cclxuICAgICAgbmV3Q29uZmlnLmNvbG9yUmFuZ2VDb25maWcgJiZcclxuICAgICAgWydyZXZlcnNlZCcsICdzdGVwcyddLnNvbWUoXHJcbiAgICAgICAga2V5ID0+XHJcbiAgICAgICAgICBuZXdDb25maWcuY29sb3JSYW5nZUNvbmZpZy5oYXNPd25Qcm9wZXJ0eShrZXkpICYmXHJcbiAgICAgICAgICBuZXdDb25maWcuY29sb3JSYW5nZUNvbmZpZ1trZXldICE9PVxyXG4gICAgICAgICAgICAocHJldmlvdXNbcHJvcF0gfHwgREVGQVVMVF9DT0xPUl9VSSkuY29sb3JSYW5nZUNvbmZpZ1trZXldXHJcbiAgICAgICk7XHJcbiAgICBpZiAoIXNob3VsZFVwZGF0ZSkgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IHtjb2xvclVJLCB2aXNDb25maWd9ID0gdGhpcy5jb25maWc7XHJcbiAgICBjb25zdCB7c3RlcHMsIHJldmVyc2VkfSA9IGNvbG9yVUlbcHJvcF0uY29sb3JSYW5nZUNvbmZpZztcclxuICAgIGNvbnN0IGNvbG9yUmFuZ2UgPSB2aXNDb25maWdbcHJvcF07XHJcbiAgICAvLyBmaW5kIGJhc2VkIG9uIHN0ZXAgb3IgcmV2ZXJzZWRcclxuICAgIGxldCB1cGRhdGU7XHJcbiAgICBpZiAobmV3Q29uZmlnLmNvbG9yUmFuZ2VDb25maWcuaGFzT3duUHJvcGVydHkoJ3N0ZXBzJykpIHtcclxuICAgICAgY29uc3QgZ3JvdXAgPSBnZXRDb2xvckdyb3VwQnlOYW1lKGNvbG9yUmFuZ2UpO1xyXG5cclxuICAgICAgaWYgKGdyb3VwKSB7XHJcbiAgICAgICAgY29uc3Qgc2FtZUdyb3VwID0gQ09MT1JfUkFOR0VTLmZpbHRlcihjciA9PiBnZXRDb2xvckdyb3VwQnlOYW1lKGNyKSA9PT0gZ3JvdXApO1xyXG5cclxuICAgICAgICB1cGRhdGUgPSBzYW1lR3JvdXAuZmluZChjciA9PiBjci5jb2xvcnMubGVuZ3RoID09PSBzdGVwcyk7XHJcblxyXG4gICAgICAgIGlmICh1cGRhdGUgJiYgY29sb3JSYW5nZS5yZXZlcnNlZCkge1xyXG4gICAgICAgICAgdXBkYXRlID0gcmV2ZXJzZUNvbG9yUmFuZ2UodHJ1ZSwgdXBkYXRlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAobmV3Q29uZmlnLmNvbG9yUmFuZ2VDb25maWcuaGFzT3duUHJvcGVydHkoJ3JldmVyc2VkJykpIHtcclxuICAgICAgdXBkYXRlID0gcmV2ZXJzZUNvbG9yUmFuZ2UocmV2ZXJzZWQsIHVwZGF0ZSB8fCBjb2xvclJhbmdlKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodXBkYXRlKSB7XHJcbiAgICAgIHRoaXMudXBkYXRlTGF5ZXJWaXNDb25maWcoe1twcm9wXTogdXBkYXRlfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDaGVjayB3aGV0aGVyIGxheWVyIGhhcyBhbGwgY29sdW1uc1xyXG4gICAqXHJcbiAgICogQHBhcmFtIHtvYmplY3R9IGxheWVyXHJcbiAgICogQHJldHVybnMge2Jvb2xlYW59IHllcyBvciBub1xyXG4gICAqL1xyXG4gIGhhc0FsbENvbHVtbnMoKSB7XHJcbiAgICBjb25zdCB7Y29sdW1uc30gPSB0aGlzLmNvbmZpZztcclxuICAgIHJldHVybiAoXHJcbiAgICAgIGNvbHVtbnMgJiZcclxuICAgICAgT2JqZWN0LnZhbHVlcyhjb2x1bW5zKS5ldmVyeSh2ID0+IHtcclxuICAgICAgICByZXR1cm4gQm9vbGVhbih2Lm9wdGlvbmFsIHx8ICh2LnZhbHVlICYmIHYuZmllbGRJZHggPiAtMSkpO1xyXG4gICAgICB9KVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENoZWNrIHdoZXRoZXIgbGF5ZXIgaGFzIGRhdGFcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBsYXllclxyXG4gICAqIEBwYXJhbSB7QXJyYXkgfCBPYmplY3R9IGxheWVyRGF0YVxyXG4gICAqIEByZXR1cm5zIHtib29sZWFufSB5ZXMgb3Igbm9cclxuICAgKi9cclxuICBoYXNMYXllckRhdGEobGF5ZXJEYXRhKSB7XHJcbiAgICBpZiAoIWxheWVyRGF0YSkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIEJvb2xlYW4obGF5ZXJEYXRhLmRhdGEgJiYgbGF5ZXJEYXRhLmRhdGEubGVuZ3RoKTtcclxuICB9XHJcblxyXG4gIGlzVmFsaWRUb1NhdmUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy50eXBlICYmIHRoaXMuaGFzQWxsQ29sdW1ucygpO1xyXG4gIH1cclxuXHJcbiAgc2hvdWxkUmVuZGVyTGF5ZXIoZGF0YSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgdGhpcy50eXBlICYmXHJcbiAgICAgIHRoaXMuY29uZmlnLmlzVmlzaWJsZSAmJlxyXG4gICAgICB0aGlzLmhhc0FsbENvbHVtbnMoKSAmJlxyXG4gICAgICB0aGlzLmhhc0xheWVyRGF0YShkYXRhKSAmJlxyXG4gICAgICB0eXBlb2YgdGhpcy5yZW5kZXJMYXllciA9PT0gJ2Z1bmN0aW9uJ1xyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGdldFZpc0NoYW5uZWxTY2FsZShzY2FsZSwgZG9tYWluLCByYW5nZSwgZml4ZWQpIHtcclxuICAgIHJldHVybiBTQ0FMRV9GVU5DW2ZpeGVkID8gJ2xpbmVhcicgOiBzY2FsZV0oKVxyXG4gICAgICAuZG9tYWluKGRvbWFpbilcclxuICAgICAgLnJhbmdlKGZpeGVkID8gZG9tYWluIDogcmFuZ2UpO1xyXG4gIH1cclxuXHJcbiAgZ2V0UG9pbnRzQm91bmRzKGFsbERhdGEsIGdldFBvc2l0aW9uID0gaWRlbnRpdHkpIHtcclxuICAgIC8vIG5vIG5lZWQgdG8gbG9vcCB0aHJvdWdoIHRoZSBlbnRpcmUgZGF0YXNldFxyXG4gICAgLy8gZ2V0IGEgc2FtcGxlIG9mIGRhdGEgdG8gY2FsY3VsYXRlIGJvdW5kc1xyXG4gICAgY29uc3Qgc2FtcGxlRGF0YSA9XHJcbiAgICAgIGFsbERhdGEubGVuZ3RoID4gTUFYX1NBTVBMRV9TSVpFID8gZ2V0U2FtcGxlRGF0YShhbGxEYXRhLCBNQVhfU0FNUExFX1NJWkUpIDogYWxsRGF0YTtcclxuICAgIGNvbnN0IHBvaW50cyA9IHNhbXBsZURhdGEubWFwKGdldFBvc2l0aW9uKTtcclxuXHJcbiAgICBjb25zdCBsYXRCb3VuZHMgPSBnZXRMYXRMbmdCb3VuZHMocG9pbnRzLCAxLCBbLTkwLCA5MF0pO1xyXG4gICAgY29uc3QgbG5nQm91bmRzID0gZ2V0TGF0TG5nQm91bmRzKHBvaW50cywgMCwgWy0xODAsIDE4MF0pO1xyXG5cclxuICAgIGlmICghbGF0Qm91bmRzIHx8ICFsbmdCb3VuZHMpIHtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIFtsbmdCb3VuZHNbMF0sIGxhdEJvdW5kc1swXSwgbG5nQm91bmRzWzFdLCBsYXRCb3VuZHNbMV1dO1xyXG4gIH1cclxuXHJcbiAgZ2V0Q2hhbmdlZFRyaWdnZXJzKGRhdGFVcGRhdGVUcmlnZ2Vycykge1xyXG4gICAgY29uc3QgdHJpZ2dlckNoYW5nZWQgPSBkaWZmVXBkYXRlVHJpZ2dlcnMoZGF0YVVwZGF0ZVRyaWdnZXJzLCB0aGlzLl9vbGREYXRhVXBkYXRlVHJpZ2dlcnMpO1xyXG4gICAgdGhpcy5fb2xkRGF0YVVwZGF0ZVRyaWdnZXJzID0gZGF0YVVwZGF0ZVRyaWdnZXJzO1xyXG5cclxuICAgIHJldHVybiB0cmlnZ2VyQ2hhbmdlZDtcclxuICB9XHJcblxyXG4gIGdldEVuY29kZWRDaGFubmVsVmFsdWUoXHJcbiAgICBzY2FsZSxcclxuICAgIGRhdGEsXHJcbiAgICBmaWVsZCxcclxuICAgIG51bGxWYWx1ZSA9IE5PX1ZBTFVFX0NPTE9SLFxyXG4gICAgZ2V0VmFsdWUgPSBkZWZhdWx0R2V0RmllbGRWYWx1ZVxyXG4gICkge1xyXG4gICAgY29uc3Qge3R5cGV9ID0gZmllbGQ7XHJcbiAgICBjb25zdCB2YWx1ZSA9IGdldFZhbHVlKGZpZWxkLCBkYXRhKTtcclxuXHJcbiAgICBpZiAoIW5vdE51bGxvclVuZGVmaW5lZCh2YWx1ZSkpIHtcclxuICAgICAgcmV0dXJuIG51bGxWYWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgYXR0cmlidXRlVmFsdWU7XHJcbiAgICBpZiAodHlwZSA9PT0gQUxMX0ZJRUxEX1RZUEVTLnRpbWVzdGFtcCkge1xyXG4gICAgICAvLyBzaG91bGRuJ3QgbmVlZCB0byBjb252ZXJ0IGhlcmVcclxuICAgICAgLy8gc2NhbGUgRnVuY3Rpb24gc2hvdWxkIHRha2UgY2FyZSBvZiBpdFxyXG4gICAgICBhdHRyaWJ1dGVWYWx1ZSA9IHNjYWxlKG5ldyBEYXRlKHZhbHVlKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBhdHRyaWJ1dGVWYWx1ZSA9IHNjYWxlKHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIW5vdE51bGxvclVuZGVmaW5lZChhdHRyaWJ1dGVWYWx1ZSkpIHtcclxuICAgICAgYXR0cmlidXRlVmFsdWUgPSBudWxsVmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGF0dHJpYnV0ZVZhbHVlO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlTWV0YShtZXRhKSB7XHJcbiAgICB0aGlzLm1ldGEgPSB7Li4udGhpcy5tZXRhLCAuLi5tZXRhfTtcclxuICB9XHJcblxyXG4gIGdldERhdGFVcGRhdGVUcmlnZ2Vycyh7ZmlsdGVyZWRJbmRleCwgaWR9KSB7XHJcbiAgICBjb25zdCB7Y29sdW1uc30gPSB0aGlzLmNvbmZpZztcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBnZXREYXRhOiB7ZGF0YXNldElkOiBpZCwgY29sdW1ucywgZmlsdGVyZWRJbmRleH0sXHJcbiAgICAgIGdldE1ldGE6IHtkYXRhc2V0SWQ6IGlkLCBjb2x1bW5zfSxcclxuICAgICAgLi4uKHRoaXMuY29uZmlnLnRleHRMYWJlbCB8fCBbXSkucmVkdWNlKFxyXG4gICAgICAgIChhY2N1LCB0bCwgaSkgPT4gKHtcclxuICAgICAgICAgIC4uLmFjY3UsXHJcbiAgICAgICAgICBbYGdldExhYmVsQ2hhcmFjdGVyU2V0LSR7aX1gXTogdGwuZmllbGQgPyB0bC5maWVsZC5uYW1lIDogbnVsbFxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIHt9XHJcbiAgICAgIClcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICB1cGRhdGVEYXRhKGRhdGFzZXRzLCBvbGRMYXllckRhdGEpIHtcclxuICAgIGNvbnN0IGxheWVyRGF0YXNldCA9IGRhdGFzZXRzW3RoaXMuY29uZmlnLmRhdGFJZF07XHJcbiAgICBjb25zdCB7YWxsRGF0YX0gPSBkYXRhc2V0c1t0aGlzLmNvbmZpZy5kYXRhSWRdO1xyXG5cclxuICAgIGNvbnN0IGdldFBvc2l0aW9uID0gdGhpcy5nZXRQb3NpdGlvbkFjY2Vzc29yKCk7XHJcbiAgICBjb25zdCBkYXRhVXBkYXRlVHJpZ2dlcnMgPSB0aGlzLmdldERhdGFVcGRhdGVUcmlnZ2VycyhsYXllckRhdGFzZXQpO1xyXG4gICAgY29uc3QgdHJpZ2dlckNoYW5nZWQgPSB0aGlzLmdldENoYW5nZWRUcmlnZ2VycyhkYXRhVXBkYXRlVHJpZ2dlcnMpO1xyXG5cclxuICAgIGlmICh0cmlnZ2VyQ2hhbmdlZC5nZXRNZXRhKSB7XHJcbiAgICAgIHRoaXMudXBkYXRlTGF5ZXJNZXRhKGFsbERhdGEsIGdldFBvc2l0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgZGF0YSA9IFtdO1xyXG4gICAgaWYgKCF0cmlnZ2VyQ2hhbmdlZC5nZXREYXRhKSB7XHJcbiAgICAgIC8vIHNhbWUgZGF0YVxyXG4gICAgICBkYXRhID0gb2xkTGF5ZXJEYXRhLmRhdGE7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBkYXRhID0gdGhpcy5jYWxjdWxhdGVEYXRhQXR0cmlidXRlKGxheWVyRGF0YXNldCwgZ2V0UG9zaXRpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7ZGF0YSwgdHJpZ2dlckNoYW5nZWR9O1xyXG4gIH1cclxuICAvKipcclxuICAgKiBoZWxwZXIgZnVuY3Rpb24gdG8gdXBkYXRlIG9uZSBsYXllciBkb21haW4gd2hlbiBzdGF0ZS5kYXRhIGNoYW5nZWRcclxuICAgKiBpZiBzdGF0ZS5kYXRhIGNoYW5nZSBpcyBkdWUgb3QgdXBkYXRlIGZpbHRlciwgbmV3RmlsZXIgd2lsbCBiZSBwYXNzZWRcclxuICAgKiBjYWxsZWQgYnkgdXBkYXRlQWxsTGF5ZXJEb21haW5EYXRhXHJcbiAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFzZXRcclxuICAgKiBAcGFyYW0ge09iamVjdH0gbmV3RmlsdGVyXHJcbiAgICogQHJldHVybnMge29iamVjdH0gbGF5ZXJcclxuICAgKi9cclxuICB1cGRhdGVMYXllckRvbWFpbihkYXRhc2V0cywgbmV3RmlsdGVyKSB7XHJcbiAgICBjb25zdCBkYXRhc2V0ID0gdGhpcy5nZXREYXRhc2V0KGRhdGFzZXRzKTtcclxuICAgIGlmICghZGF0YXNldCkge1xyXG4gICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIE9iamVjdC52YWx1ZXModGhpcy52aXN1YWxDaGFubmVscykuZm9yRWFjaChjaGFubmVsID0+IHtcclxuICAgICAgY29uc3Qge3NjYWxlfSA9IGNoYW5uZWw7XHJcbiAgICAgIGNvbnN0IHNjYWxlVHlwZSA9IHRoaXMuY29uZmlnW3NjYWxlXTtcclxuICAgICAgLy8gb3JkaW5hbCBkb21haW4gaXMgYmFzZWQgb24gYWxsRGF0YSwgaWYgb25seSBmaWx0ZXIgY2hhbmdlZFxyXG4gICAgICAvLyBubyBuZWVkIHRvIHVwZGF0ZSBvcmRpbmFsIGRvbWFpblxyXG4gICAgICBpZiAoIW5ld0ZpbHRlciB8fCBzY2FsZVR5cGUgIT09IFNDQUxFX1RZUEVTLm9yZGluYWwpIHtcclxuICAgICAgICBjb25zdCB7ZG9tYWlufSA9IGNoYW5uZWw7XHJcbiAgICAgICAgY29uc3QgdXBkYXRlZERvbWFpbiA9IHRoaXMuY2FsY3VsYXRlTGF5ZXJEb21haW4oZGF0YXNldCwgY2hhbm5lbCk7XHJcblxyXG4gICAgICAgIHRoaXMudXBkYXRlTGF5ZXJDb25maWcoe1tkb21haW5dOiB1cGRhdGVkRG9tYWlufSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgZ2V0RGF0YXNldChkYXRhc2V0cykge1xyXG4gICAgcmV0dXJuIGRhdGFzZXRzW3RoaXMuY29uZmlnLmRhdGFJZF07XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBWYWxpZGF0ZSB2aXN1YWwgY2hhbm5lbCBmaWVsZCBhbmQgc2NhbGVzIGJhc2VkIG9uIHN1cHBvcnRlZCBmaWVsZCAmIHNjYWxlIHR5cGVcclxuICAgKiBAcGFyYW0gY2hhbm5lbFxyXG4gICAqL1xyXG4gIHZhbGlkYXRlVmlzdWFsQ2hhbm5lbChjaGFubmVsKSB7XHJcbiAgICB0aGlzLnZhbGlkYXRlRmllbGRUeXBlKGNoYW5uZWwpO1xyXG4gICAgdGhpcy52YWxpZGF0ZVNjYWxlKGNoYW5uZWwpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVmFsaWRhdGUgZmllbGQgdHlwZSBiYXNlZCBvbiBjaGFubmVsU2NhbGVUeXBlXHJcbiAgICovXHJcbiAgdmFsaWRhdGVGaWVsZFR5cGUoY2hhbm5lbCkge1xyXG4gICAgY29uc3QgdmlzdWFsQ2hhbm5lbCA9IHRoaXMudmlzdWFsQ2hhbm5lbHNbY2hhbm5lbF07XHJcbiAgICBjb25zdCB7ZmllbGQsIGNoYW5uZWxTY2FsZVR5cGUsIHN1cHBvcnRlZEZpZWxkVHlwZXN9ID0gdmlzdWFsQ2hhbm5lbDtcclxuXHJcbiAgICBpZiAodGhpcy5jb25maWdbZmllbGRdKSB7XHJcbiAgICAgIC8vIGlmIGZpZWxkIGlzIHNlbGVjdGVkLCBjaGVjayBpZiBmaWVsZCB0eXBlIGlzIHN1cHBvcnRlZFxyXG4gICAgICBjb25zdCBjaGFubmVsU3VwcG9ydGVkRmllbGRUeXBlcyA9XHJcbiAgICAgICAgc3VwcG9ydGVkRmllbGRUeXBlcyB8fCBDSEFOTkVMX1NDQUxFX1NVUFBPUlRFRF9GSUVMRFNbY2hhbm5lbFNjYWxlVHlwZV07XHJcblxyXG4gICAgICBpZiAoIWNoYW5uZWxTdXBwb3J0ZWRGaWVsZFR5cGVzLmluY2x1ZGVzKHRoaXMuY29uZmlnW2ZpZWxkXS50eXBlKSkge1xyXG4gICAgICAgIC8vIGZpZWxkIHR5cGUgaXMgbm90IHN1cHBvcnRlZCwgc2V0IGl0IGJhY2sgdG8gbnVsbFxyXG4gICAgICAgIC8vIHNldCBzY2FsZSBiYWNrIHRvIGRlZmF1bHRcclxuICAgICAgICB0aGlzLnVwZGF0ZUxheWVyQ29uZmlnKHtbZmllbGRdOiBudWxsfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFZhbGlkYXRlIHNjYWxlIHR5cGUgYmFzZWQgb24gYWdncmVnYXRpb25cclxuICAgKi9cclxuICB2YWxpZGF0ZVNjYWxlKGNoYW5uZWwpIHtcclxuICAgIGNvbnN0IHZpc3VhbENoYW5uZWwgPSB0aGlzLnZpc3VhbENoYW5uZWxzW2NoYW5uZWxdO1xyXG4gICAgY29uc3Qge3NjYWxlfSA9IHZpc3VhbENoYW5uZWw7XHJcbiAgICBpZiAoIXNjYWxlKSB7XHJcbiAgICAgIC8vIHZpc3VhbENoYW5uZWwgZG9lc24ndCBoYXZlIHNjYWxlXHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IHNjYWxlT3B0aW9ucyA9IHRoaXMuZ2V0U2NhbGVPcHRpb25zKGNoYW5uZWwpO1xyXG4gICAgLy8gY2hlY2sgaWYgY3VycmVudCBzZWxlY3RlZCBzY2FsZSBpc1xyXG4gICAgLy8gc3VwcG9ydGVkLCBpZiBub3QsIGNoYW5nZSB0byBkZWZhdWx0XHJcbiAgICBpZiAoIXNjYWxlT3B0aW9ucy5pbmNsdWRlcyh0aGlzLmNvbmZpZ1tzY2FsZV0pKSB7XHJcbiAgICAgIHRoaXMudXBkYXRlTGF5ZXJDb25maWcoe1tzY2FsZV06IHNjYWxlT3B0aW9uc1swXX0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2V0IHNjYWxlIG9wdGlvbnMgYmFzZWQgb24gY3VycmVudCBmaWVsZFxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjaGFubmVsXHJcbiAgICogQHJldHVybnMge3N0cmluZ1tdfVxyXG4gICAqL1xyXG4gIGdldFNjYWxlT3B0aW9ucyhjaGFubmVsKSB7XHJcbiAgICBjb25zdCB2aXN1YWxDaGFubmVsID0gdGhpcy52aXN1YWxDaGFubmVsc1tjaGFubmVsXTtcclxuICAgIGNvbnN0IHtmaWVsZCwgc2NhbGUsIGNoYW5uZWxTY2FsZVR5cGV9ID0gdmlzdWFsQ2hhbm5lbDtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5jb25maWdbZmllbGRdXHJcbiAgICAgID8gRklFTERfT1BUU1t0aGlzLmNvbmZpZ1tmaWVsZF0udHlwZV0uc2NhbGVbY2hhbm5lbFNjYWxlVHlwZV1cclxuICAgICAgOiBbdGhpcy5nZXREZWZhdWx0TGF5ZXJDb25maWcoKVtzY2FsZV1dO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlTGF5ZXJWaXN1YWxDaGFubmVsKGRhdGFzZXQsIGNoYW5uZWwpIHtcclxuICAgIGNvbnN0IHZpc3VhbENoYW5uZWwgPSB0aGlzLnZpc3VhbENoYW5uZWxzW2NoYW5uZWxdO1xyXG4gICAgdGhpcy52YWxpZGF0ZVZpc3VhbENoYW5uZWwoY2hhbm5lbCk7XHJcbiAgICAvLyBjYWxjdWxhdGUgbGF5ZXIgY2hhbm5lbCBkb21haW5cclxuICAgIGNvbnN0IHVwZGF0ZWREb21haW4gPSB0aGlzLmNhbGN1bGF0ZUxheWVyRG9tYWluKGRhdGFzZXQsIHZpc3VhbENoYW5uZWwpO1xyXG4gICAgdGhpcy51cGRhdGVMYXllckNvbmZpZyh7W3Zpc3VhbENoYW5uZWwuZG9tYWluXTogdXBkYXRlZERvbWFpbn0pO1xyXG4gIH1cclxuXHJcbiAgY2FsY3VsYXRlTGF5ZXJEb21haW4oZGF0YXNldCwgdmlzdWFsQ2hhbm5lbCkge1xyXG4gICAgY29uc3Qge2FsbERhdGEsIGZpbHRlcmVkSW5kZXhGb3JEb21haW59ID0gZGF0YXNldDtcclxuICAgIGNvbnN0IGRlZmF1bHREb21haW4gPSBbMCwgMV07XHJcbiAgICBjb25zdCB7c2NhbGV9ID0gdmlzdWFsQ2hhbm5lbDtcclxuICAgIGNvbnN0IHNjYWxlVHlwZSA9IHRoaXMuY29uZmlnW3NjYWxlXTtcclxuXHJcbiAgICBjb25zdCBmaWVsZCA9IHRoaXMuY29uZmlnW3Zpc3VhbENoYW5uZWwuZmllbGRdO1xyXG4gICAgaWYgKCFmaWVsZCkge1xyXG4gICAgICAvLyBpZiBjb2xvckZpZWxkIG9yIHNpemVGaWVsZCB3ZXJlIHNldCBiYWNrIHRvIG51bGxcclxuICAgICAgcmV0dXJuIGRlZmF1bHREb21haW47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFTQ0FMRV9UWVBFU1tzY2FsZVR5cGVdKSB7XHJcbiAgICAgIENvbnNvbGUuZXJyb3IoYHNjYWxlIHR5cGUgJHtzY2FsZVR5cGV9IG5vdCBzdXBwb3J0ZWRgKTtcclxuICAgICAgcmV0dXJuIGRlZmF1bHREb21haW47XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVE9ETzogcmVmYWN0b3IgdG8gYWRkIHZhbHVlQWNjZXNzb3IgdG8gZmllbGRcclxuICAgIGNvbnN0IGZpZWxkSWR4ID0gZmllbGQudGFibGVGaWVsZEluZGV4IC0gMTtcclxuICAgIGNvbnN0IGlzVGltZSA9IGZpZWxkLnR5cGUgPT09IEFMTF9GSUVMRF9UWVBFUy50aW1lc3RhbXA7XHJcbiAgICBjb25zdCB2YWx1ZUFjY2Vzc29yID0gbWF5YmVUb0RhdGUuYmluZChudWxsLCBpc1RpbWUsIGZpZWxkSWR4LCBmaWVsZC5mb3JtYXQpO1xyXG4gICAgY29uc3QgaW5kZXhWYWx1ZUFjY2Vzc29yID0gaSA9PiB2YWx1ZUFjY2Vzc29yKGFsbERhdGFbaV0pO1xyXG5cclxuICAgIGNvbnN0IHNvcnRGdW5jdGlvbiA9IGdldFNvcnRpbmdGdW5jdGlvbihmaWVsZC50eXBlKTtcclxuXHJcbiAgICBzd2l0Y2ggKHNjYWxlVHlwZSkge1xyXG4gICAgICBjYXNlIFNDQUxFX1RZUEVTLm9yZGluYWw6XHJcbiAgICAgIGNhc2UgU0NBTEVfVFlQRVMucG9pbnQ6XHJcbiAgICAgICAgLy8gZG8gbm90IHJlY2FsY3VsYXRlIG9yZGluYWwgZG9tYWluIGJhc2VkIG9uIGZpbHRlcmVkIGRhdGFcclxuICAgICAgICAvLyBkb24ndCBuZWVkIHRvIHVwZGF0ZSBvcmRpbmFsIGRvbWFpbiBldmVyeSB0aW1lXHJcbiAgICAgICAgcmV0dXJuIGdldE9yZGluYWxEb21haW4oYWxsRGF0YSwgdmFsdWVBY2Nlc3Nvcik7XHJcblxyXG4gICAgICBjYXNlIFNDQUxFX1RZUEVTLnF1YW50aWxlOlxyXG4gICAgICAgIHJldHVybiBnZXRRdWFudGlsZURvbWFpbihmaWx0ZXJlZEluZGV4Rm9yRG9tYWluLCBpbmRleFZhbHVlQWNjZXNzb3IsIHNvcnRGdW5jdGlvbik7XHJcblxyXG4gICAgICBjYXNlIFNDQUxFX1RZUEVTLmxvZzpcclxuICAgICAgICByZXR1cm4gZ2V0TG9nRG9tYWluKGZpbHRlcmVkSW5kZXhGb3JEb21haW4sIGluZGV4VmFsdWVBY2Nlc3Nvcik7XHJcblxyXG4gICAgICBjYXNlIFNDQUxFX1RZUEVTLnF1YW50aXplOlxyXG4gICAgICBjYXNlIFNDQUxFX1RZUEVTLmxpbmVhcjpcclxuICAgICAgY2FzZSBTQ0FMRV9UWVBFUy5zcXJ0OlxyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiBnZXRMaW5lYXJEb21haW4oZmlsdGVyZWRJbmRleEZvckRvbWFpbiwgaW5kZXhWYWx1ZUFjY2Vzc29yKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlzTGF5ZXJIb3ZlcmVkKG9iamVjdEluZm8pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIG9iamVjdEluZm8gJiYgb2JqZWN0SW5mby5sYXllciAmJiBvYmplY3RJbmZvLnBpY2tlZCAmJiBvYmplY3RJbmZvLmxheWVyLnByb3BzLmlkID09PSB0aGlzLmlkXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgZ2V0UmFkaXVzU2NhbGVCeVpvb20obWFwU3RhdGUsIGZpeGVkUmFkaXVzKSB7XHJcbiAgICBjb25zdCByYWRpdXNDaGFubmVsID0gT2JqZWN0LnZhbHVlcyh0aGlzLnZpc3VhbENoYW5uZWxzKS5maW5kKHZjID0+IHZjLnByb3BlcnR5ID09PSAncmFkaXVzJyk7XHJcblxyXG4gICAgaWYgKCFyYWRpdXNDaGFubmVsKSB7XHJcbiAgICAgIHJldHVybiAxO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGZpZWxkID0gcmFkaXVzQ2hhbm5lbC5maWVsZDtcclxuICAgIGNvbnN0IGZpeGVkID0gZml4ZWRSYWRpdXMgPT09IHVuZGVmaW5lZCA/IHRoaXMuY29uZmlnLnZpc0NvbmZpZy5maXhlZFJhZGl1cyA6IGZpeGVkUmFkaXVzO1xyXG4gICAgY29uc3Qge3JhZGl1c30gPSB0aGlzLmNvbmZpZy52aXNDb25maWc7XHJcblxyXG4gICAgcmV0dXJuIGZpeGVkID8gMSA6ICh0aGlzLmNvbmZpZ1tmaWVsZF0gPyAxIDogcmFkaXVzKSAqIHRoaXMuZ2V0Wm9vbUZhY3RvcihtYXBTdGF0ZSk7XHJcbiAgfVxyXG5cclxuICBzaG91bGRDYWxjdWxhdGVMYXllckRhdGEocHJvcHMpIHtcclxuICAgIHJldHVybiBwcm9wcy5zb21lKHAgPT4gIXRoaXMubm9uZUxheWVyRGF0YUFmZmVjdGluZ1Byb3BzLmluY2x1ZGVzKHApKTtcclxuICB9XHJcblxyXG4gIGdldEJydXNoaW5nRXh0ZW5zaW9uUHJvcHMoaW50ZXJhY3Rpb25Db25maWcsIGJydXNoaW5nVGFyZ2V0KSB7XHJcbiAgICBjb25zdCB7YnJ1c2h9ID0gaW50ZXJhY3Rpb25Db25maWc7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgLy8gYnJ1c2hpbmdcclxuICAgICAgYXV0b0hpZ2hsaWdodDogIWJydXNoLmVuYWJsZWQsXHJcbiAgICAgIGJydXNoaW5nUmFkaXVzOiBicnVzaC5jb25maWcuc2l6ZSAqIDEwMDAsXHJcbiAgICAgIGJydXNoaW5nVGFyZ2V0OiBicnVzaGluZ1RhcmdldCB8fCAnc291cmNlJyxcclxuICAgICAgYnJ1c2hpbmdFbmFibGVkOiBicnVzaC5lbmFibGVkXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgZ2V0RGVmYXVsdERlY2tMYXllclByb3BzKHtpZHgsIGdwdUZpbHRlciwgbWFwU3RhdGV9KSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBpZDogdGhpcy5pZCxcclxuICAgICAgaWR4LFxyXG4gICAgICBjb29yZGluYXRlU3lzdGVtOiBDT09SRElOQVRFX1NZU1RFTS5MTkdMQVQsXHJcbiAgICAgIHBpY2thYmxlOiB0cnVlLFxyXG4gICAgICB3cmFwTG9uZ2l0dWRlOiB0cnVlLFxyXG4gICAgICBwYXJhbWV0ZXJzOiB7ZGVwdGhUZXN0OiBCb29sZWFuKG1hcFN0YXRlLmRyYWdSb3RhdGUgfHwgdGhpcy5jb25maWcudmlzQ29uZmlnLmVuYWJsZTNkKX0sXHJcbiAgICAgIGhpZGRlbjogdGhpcy5jb25maWcuaGlkZGVuLFxyXG4gICAgICAvLyB2aXNjb25maWdcclxuICAgICAgb3BhY2l0eTogdGhpcy5jb25maWcudmlzQ29uZmlnLm9wYWNpdHksXHJcbiAgICAgIGhpZ2hsaWdodENvbG9yOiB0aGlzLmNvbmZpZy5oaWdobGlnaHRDb2xvcixcclxuICAgICAgLy8gZGF0YSBmaWx0ZXJpbmdcclxuICAgICAgZXh0ZW5zaW9uczogW2RhdGFGaWx0ZXJFeHRlbnNpb25dLFxyXG4gICAgICBmaWx0ZXJSYW5nZTogZ3B1RmlsdGVyLmZpbHRlclJhbmdlXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgZ2V0RGVmYXVsdEhvdmVyTGF5ZXJQcm9wcygpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGlkOiBgJHt0aGlzLmlkfS1ob3ZlcmVkYCxcclxuICAgICAgcGlja2FibGU6IGZhbHNlLFxyXG4gICAgICB3cmFwTG9uZ2l0dWRlOiB0cnVlLFxyXG4gICAgICBjb29yZGluYXRlU3lzdGVtOiBDT09SRElOQVRFX1NZU1RFTS5MTkdMQVRcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICByZW5kZXJUZXh0TGFiZWxMYXllcih7Z2V0UG9zaXRpb24sIGdldFBpeGVsT2Zmc2V0LCB1cGRhdGVUcmlnZ2Vycywgc2hhcmVkUHJvcHN9LCByZW5kZXJPcHRzKSB7XHJcbiAgICBjb25zdCB7ZGF0YSwgbWFwU3RhdGV9ID0gcmVuZGVyT3B0cztcclxuICAgIGNvbnN0IHt0ZXh0TGFiZWx9ID0gdGhpcy5jb25maWc7XHJcblxyXG4gICAgcmV0dXJuIGRhdGEudGV4dExhYmVscy5yZWR1Y2UoKGFjY3UsIGQsIGkpID0+IHtcclxuICAgICAgaWYgKGQuZ2V0VGV4dCkge1xyXG4gICAgICAgIGFjY3UucHVzaChcclxuICAgICAgICAgIG5ldyBUZXh0TGF5ZXIoe1xyXG4gICAgICAgICAgICAuLi5zaGFyZWRQcm9wcyxcclxuICAgICAgICAgICAgaWQ6IGAke3RoaXMuaWR9LWxhYmVsLSR7dGV4dExhYmVsW2ldLmZpZWxkLm5hbWV9YCxcclxuICAgICAgICAgICAgZGF0YTogZGF0YS5kYXRhLFxyXG4gICAgICAgICAgICBnZXRUZXh0OiBkLmdldFRleHQsXHJcbiAgICAgICAgICAgIGdldFBvc2l0aW9uLFxyXG4gICAgICAgICAgICBjaGFyYWN0ZXJTZXQ6IGQuY2hhcmFjdGVyU2V0LFxyXG4gICAgICAgICAgICBnZXRQaXhlbE9mZnNldDogZ2V0UGl4ZWxPZmZzZXQodGV4dExhYmVsW2ldKSxcclxuICAgICAgICAgICAgZ2V0U2l6ZTogMSxcclxuICAgICAgICAgICAgc2l6ZVNjYWxlOiB0ZXh0TGFiZWxbaV0uc2l6ZSxcclxuICAgICAgICAgICAgZ2V0VGV4dEFuY2hvcjogdGV4dExhYmVsW2ldLmFuY2hvcixcclxuICAgICAgICAgICAgZ2V0QWxpZ25tZW50QmFzZWxpbmU6IHRleHRMYWJlbFtpXS5hbGlnbm1lbnQsXHJcbiAgICAgICAgICAgIGdldENvbG9yOiB0ZXh0TGFiZWxbaV0uY29sb3IsXHJcbiAgICAgICAgICAgIHBhcmFtZXRlcnM6IHtcclxuICAgICAgICAgICAgICAvLyB0ZXh0IHdpbGwgYWx3YXlzIHNob3cgb24gdG9wIG9mIGFsbCBsYXllcnNcclxuICAgICAgICAgICAgICBkZXB0aFRlc3Q6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICBnZXRGaWx0ZXJWYWx1ZTogZGF0YS5nZXRGaWx0ZXJWYWx1ZSxcclxuICAgICAgICAgICAgdXBkYXRlVHJpZ2dlcnM6IHtcclxuICAgICAgICAgICAgICAuLi51cGRhdGVUcmlnZ2VycyxcclxuICAgICAgICAgICAgICBnZXRUZXh0OiB0ZXh0TGFiZWxbaV0uZmllbGQubmFtZSxcclxuICAgICAgICAgICAgICBnZXRQaXhlbE9mZnNldDoge1xyXG4gICAgICAgICAgICAgICAgLi4udXBkYXRlVHJpZ2dlcnMuZ2V0UmFkaXVzLFxyXG4gICAgICAgICAgICAgICAgbWFwU3RhdGUsXHJcbiAgICAgICAgICAgICAgICBhbmNob3I6IHRleHRMYWJlbFtpXS5hbmNob3IsXHJcbiAgICAgICAgICAgICAgICBhbGlnbm1lbnQ6IHRleHRMYWJlbFtpXS5hbGlnbm1lbnRcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIGdldFRleHRBbmNob3I6IHRleHRMYWJlbFtpXS5hbmNob3IsXHJcbiAgICAgICAgICAgICAgZ2V0QWxpZ25tZW50QmFzZWxpbmU6IHRleHRMYWJlbFtpXS5hbGlnbm1lbnQsXHJcbiAgICAgICAgICAgICAgZ2V0Q29sb3I6IHRleHRMYWJlbFtpXS5jb2xvclxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGFjY3U7XHJcbiAgICB9LCBbXSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==