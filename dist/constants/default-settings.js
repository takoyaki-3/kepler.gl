"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DATASET_FORMATS = exports.LOADING_METHODS = exports.MAP_INFO_CHARACTER = exports.MAP_THUMBNAIL_DIMENSION = exports.MAX_GPU_FILTERS = exports.EDITOR_AVAILABLE_LAYERS = exports.EDITOR_MODES = exports.SPEED_CONTROL_RANGE = exports.DEFAULT_TIME_FORMAT = exports.BASE_SPEED = exports.DEFAULT_NOTIFICATION_TOPICS = exports.DEFAULT_NOTIFICATION_TYPES = exports.DEFAULT_NOTIFICATION_MESSAGE = exports.DEFAULT_UUID_COUNT = exports.EXPORT_HTML_MAP_MODE_OPTIONS = exports.EXPORT_MAP_FORMAT_OPTIONS = exports.EXPORT_HTML_MAP_MODES = exports.EXPORT_MAP_FORMATS = exports.EXPORT_DATA_TYPE_OPTIONS = exports.EXPORT_DATA_TYPE = exports.EXPORT_IMG_RESOLUTION_OPTIONS = exports.EXPORT_IMG_RATIO_OPTIONS = exports.EXPORT_IMG_RATIOS = exports.RESOLUTIONS = exports.MAX_DEFAULT_TOOLTIPS = exports.LAYER_BLENDINGS = exports.NO_VALUE_COLOR = exports.DEFAULT_TOOLTIP_FIELDS = exports.DEFAULT_LAYER_COLOR = exports.LAYER_TYPES = exports.CHANNEL_SCALE_SUPPORTED_FIELDS = exports.FIELD_OPTS = exports.DEFAULT_AGGREGATION = exports.notSupportAggrOpts = exports.notSupportedScaleOpts = exports.ordinalFieldAggrScaleFunctions = exports.ordinalFieldScaleFunctions = exports.linearFieldAggrScaleFunctions = exports.linearFieldScaleFunctions = exports.AGGREGATION_TYPES = exports.CHANNEL_SCALES = exports.FILED_TYPE_DISPLAY = exports.FIELD_COLORS = exports.HIGHLIGH_COLOR_3D = exports.TABLE_OPTION_LIST = exports.TABLE_OPTION = exports.SORT_ORDER = exports.ALL_FIELD_TYPES = exports.SCALE_FUNC = exports.SCALE_TYPES = exports.FILTER_TYPES = exports.TRIP_ARC_FIELDS = exports.TRIP_POINT_FIELDS = exports.ICON_FIELDS = exports.GEOJSON_FIELDS = exports.DEFAULT_MAP_STYLES = exports.DEFAULT_LAYER_GROUPS = exports.PANELS = exports.SIDEBAR_PANELS = exports.THEME = exports.DIMENSIONS = exports.KEPLER_GL_WEBSITE = exports.KEPLER_GL_VERSION = exports.KEPLER_GL_NAME = exports.SHARE_MAP_ID = exports.OVERWRITE_MAP_ID = exports.SAVE_MAP_ID = exports.EXPORT_MAP_ID = exports.ADD_MAP_STYLE_ID = exports.EXPORT_DATA_ID = exports.EXPORT_IMAGE_ID = exports.ADD_DATA_ID = exports.DELETE_DATA_ID = exports.DATA_TABLE_ID = exports.DEFAULT_MAPBOX_API_URL = exports.ICON_PREFIX = exports.CLOUDFRONT = exports.ACTION_PREFIX = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _keymirror = _interopRequireDefault(require("keymirror"));

var _reactMapGlDraw = require("react-map-gl-draw");

var _d3Scale = require("d3-scale");

var _icons = require("../components/common/icons");

var _utils = require("../utils/utils");

var _tooltip = require("./tooltip");

var _SCALE_FUNC, _FILED_TYPE_DISPLAY, _linearFieldScaleFunc, _CHANNEL_SCALES$color, _CHANNEL_SCALES$sizeA, _linearFieldAggrScale, _ordinalFieldScaleFun, _CHANNEL_SCALES$color2, _ordinalFieldAggrScal, _notSupportedScaleOpt, _notSupportAggrOpts, _DEFAULT_AGGREGATION;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var ACTION_PREFIX = '@@kepler.gl/';
exports.ACTION_PREFIX = ACTION_PREFIX;
var CLOUDFRONT = 'https://d1a3f4spazzrp4.cloudfront.net/kepler.gl';
exports.CLOUDFRONT = CLOUDFRONT;
var ICON_PREFIX = "".concat(CLOUDFRONT, "/geodude");
exports.ICON_PREFIX = ICON_PREFIX;
var DEFAULT_MAPBOX_API_URL = 'https://api.mapbox.com'; // Modal Ids

/**
 * Modal id: data table
 * @constant
 * @type {string}
 * @public
 */

exports.DEFAULT_MAPBOX_API_URL = DEFAULT_MAPBOX_API_URL;
var DATA_TABLE_ID = 'dataTable';
/**
 * Modal id: delete dataset confirm dialog
 * @constant
 * @type {string}
 * @public
 */

exports.DATA_TABLE_ID = DATA_TABLE_ID;
var DELETE_DATA_ID = 'deleteData';
/**
 * Modal id: add data modal
 * @constant
 * @type {string}
 * @public
 */

exports.DELETE_DATA_ID = DELETE_DATA_ID;
var ADD_DATA_ID = 'addData';
/**
 * Modal id: export image modal
 * @constant
 * @type {string}
 * @public
 */

exports.ADD_DATA_ID = ADD_DATA_ID;
var EXPORT_IMAGE_ID = 'exportImage';
/**
 * Modal id: export data modal
 * @constant
 * @type {string}
 * @public
 */

exports.EXPORT_IMAGE_ID = EXPORT_IMAGE_ID;
var EXPORT_DATA_ID = 'exportData';
/**
 * Modal id: add custom map style modal
 * @constant
 * @type {string}
 * @public
 */

exports.EXPORT_DATA_ID = EXPORT_DATA_ID;
var ADD_MAP_STYLE_ID = 'addMapStyle';
/**
 * Modal id: export map modal
 * @constant
 * @type {string}
 * @public
 */

exports.ADD_MAP_STYLE_ID = ADD_MAP_STYLE_ID;
var EXPORT_MAP_ID = 'exportMap';
/**
 * Modal id: save map modal
 * @constant
 * @type {string}
 * @public
 */

exports.EXPORT_MAP_ID = EXPORT_MAP_ID;
var SAVE_MAP_ID = 'saveMap';
/**
 * Modal id: confirm to overwrite saved map
 * @constant
 * @type {string}
 * @public
 */

exports.SAVE_MAP_ID = SAVE_MAP_ID;
var OVERWRITE_MAP_ID = 'overwriteMap';
/**
 * Modal id: share map url modal
 * @constant
 * @type {string}
 * @public
 */

exports.OVERWRITE_MAP_ID = OVERWRITE_MAP_ID;
var SHARE_MAP_ID = 'shareMap';
exports.SHARE_MAP_ID = SHARE_MAP_ID;
var KEPLER_GL_NAME = 'kepler.gl'; // __PACKAGE_VERSION__ is automatically injected by Babel/Webpack during the building process
// Since we are injecting this during the build process with babel
// while developing VERSION is not defined, we capture the exception and return
// an empty string which will allow us to retrieve the latest umd version

exports.KEPLER_GL_NAME = KEPLER_GL_NAME;
var KEPLER_GL_VERSION = "2.2.0";
exports.KEPLER_GL_VERSION = KEPLER_GL_VERSION;
var KEPLER_GL_WEBSITE = 'http://kepler.gl/';
exports.KEPLER_GL_WEBSITE = KEPLER_GL_WEBSITE;
var DIMENSIONS = {
  sidePanel: {
    width: 300,
    margin: {
      top: 20,
      left: 20,
      bottom: 30,
      right: 20
    },
    headerHeight: 96
  },
  mapControl: {
    width: 204,
    padding: 12
  }
};
/**
 * Theme name that can be passed to `KeplerGl` `prop.theme`.
 * Available themes are `Theme.light` and `Theme.dark`. Default theme is `Theme.dark`
 * @constant
 * @type {string}
 * @public
 * @example
 * ```js
 * const Map = () => <KeplerGl theme={THEME.light} id="map"/>
 * ```
 */

exports.DIMENSIONS = DIMENSIONS;
var THEME = (0, _keymirror["default"])({
  light: null,
  dark: null,
  base: null
});
exports.THEME = THEME;
var SIDEBAR_PANELS = [{
  id: 'layer',
  label: 'sidebar.panels.layer',
  iconComponent: _icons.Layers
}, {
  id: 'filter',
  label: 'sidebar.panels.filter',
  iconComponent: _icons.FilterFunnel
}, {
  id: 'interaction',
  label: 'sidebar.panels.interaction',
  iconComponent: _icons.CursorClick
}, {
  id: 'map',
  label: 'sidebar.panels.basemap',
  iconComponent: _icons.Settings
}]; // backward compatibility

exports.SIDEBAR_PANELS = SIDEBAR_PANELS;
var PANELS = SIDEBAR_PANELS; // MAP STYLES

exports.PANELS = PANELS;
var DEFAULT_LAYER_GROUPS = [{
  slug: 'label',
  filter: function filter(_ref) {
    var id = _ref.id;
    return id.match(/(?=(label|place-|poi-))/);
  },
  defaultVisibility: true
}, {
  slug: 'road',
  filter: function filter(_ref2) {
    var id = _ref2.id;
    return id.match(/(?=(road|railway|tunnel|street|bridge))(?!.*label)/);
  },
  defaultVisibility: true
}, {
  slug: 'border',
  filter: function filter(_ref3) {
    var id = _ref3.id;
    return id.match(/border|boundaries/);
  },
  defaultVisibility: false
}, {
  slug: 'building',
  filter: function filter(_ref4) {
    var id = _ref4.id;
    return id.match(/building/);
  },
  defaultVisibility: true
}, {
  slug: 'water',
  filter: function filter(_ref5) {
    var id = _ref5.id;
    return id.match(/(?=(water|stream|ferry))/);
  },
  defaultVisibility: true
}, {
  slug: 'land',
  filter: function filter(_ref6) {
    var id = _ref6.id;
    return id.match(/(?=(parks|landcover|industrial|sand|hillshade))/);
  },
  defaultVisibility: true
}, {
  slug: '3d building',
  filter: function filter() {
    return false;
  },
  defaultVisibility: false
}];
exports.DEFAULT_LAYER_GROUPS = DEFAULT_LAYER_GROUPS;
var DEFAULT_MAP_STYLES = [{
  id: 'dark',
  label: 'Dark',
  url: 'mapbox://styles/uberdata/cjoqbbf6l9k302sl96tyvka09',
  icon: "".concat(ICON_PREFIX, "/UBER_DARK_V2.png"),
  layerGroups: DEFAULT_LAYER_GROUPS
}, {
  id: 'light',
  label: 'Light',
  url: 'mapbox://styles/uberdata/cjoqb9j339k1f2sl9t5ic5bn4',
  icon: "".concat(ICON_PREFIX, "/UBER_LIGHT_V2.png"),
  layerGroups: DEFAULT_LAYER_GROUPS
}, {
  id: 'muted',
  label: 'Muted Light',
  url: 'mapbox://styles/uberdata/cjfyl03kp1tul2smf5v2tbdd4',
  icon: "".concat(ICON_PREFIX, "/UBER_MUTED_LIGHT.png"),
  layerGroups: DEFAULT_LAYER_GROUPS
}, {
  id: 'muted_night',
  label: 'Muted Night',
  url: 'mapbox://styles/uberdata/cjfxhlikmaj1b2soyzevnywgs',
  icon: "".concat(ICON_PREFIX, "/UBER_MUTED_NIGHT.png"),
  layerGroups: DEFAULT_LAYER_GROUPS
}, {
  id: 'satellite',
  label: 'Satellite',
  url: "mapbox://styles/mapbox/satellite-v9",
  icon: "".concat(ICON_PREFIX, "/UBER_SATELLITE.png")
}];
exports.DEFAULT_MAP_STYLES = DEFAULT_MAP_STYLES;
var GEOJSON_FIELDS = {
  geojson: ['_geojson', 'all_points', 'geojson']
};
exports.GEOJSON_FIELDS = GEOJSON_FIELDS;
var ICON_FIELDS = {
  icon: ['icon']
};
exports.ICON_FIELDS = ICON_FIELDS;
var TRIP_POINT_FIELDS = [['lat', 'lng'], ['lat', 'lon'], ['latitude', 'longitude']];
exports.TRIP_POINT_FIELDS = TRIP_POINT_FIELDS;
var TRIP_ARC_FIELDS = {
  lat0: 'begintrip',
  lng0: 'begintrip',
  lat1: 'dropoff',
  lng1: 'dropoff'
};
exports.TRIP_ARC_FIELDS = TRIP_ARC_FIELDS;
var FILTER_TYPES = (0, _keymirror["default"])({
  range: null,
  select: null,
  timeRange: null,
  multiSelect: null,
  polygon: null
});
exports.FILTER_TYPES = FILTER_TYPES;
var SCALE_TYPES = (0, _keymirror["default"])({
  ordinal: null,
  quantile: null,
  quantize: null,
  linear: null,
  sqrt: null,
  log: null,
  // ordinal domain to linear range
  point: null
});
exports.SCALE_TYPES = SCALE_TYPES;
var SCALE_FUNC = (_SCALE_FUNC = {}, (0, _defineProperty2["default"])(_SCALE_FUNC, SCALE_TYPES.linear, _d3Scale.scaleLinear), (0, _defineProperty2["default"])(_SCALE_FUNC, SCALE_TYPES.quantize, _d3Scale.scaleQuantize), (0, _defineProperty2["default"])(_SCALE_FUNC, SCALE_TYPES.quantile, _d3Scale.scaleQuantile), (0, _defineProperty2["default"])(_SCALE_FUNC, SCALE_TYPES.ordinal, _d3Scale.scaleOrdinal), (0, _defineProperty2["default"])(_SCALE_FUNC, SCALE_TYPES.sqrt, _d3Scale.scaleSqrt), (0, _defineProperty2["default"])(_SCALE_FUNC, SCALE_TYPES.log, _d3Scale.scaleLog), (0, _defineProperty2["default"])(_SCALE_FUNC, SCALE_TYPES.point, _d3Scale.scalePoint), _SCALE_FUNC);
exports.SCALE_FUNC = SCALE_FUNC;
var ALL_FIELD_TYPES = (0, _keymirror["default"])({
  "boolean": null,
  date: null,
  geojson: null,
  integer: null,
  real: null,
  string: null,
  timestamp: null,
  point: null
}); // Data Table

exports.ALL_FIELD_TYPES = ALL_FIELD_TYPES;
var SORT_ORDER = (0, _keymirror["default"])({
  ASCENDING: null,
  DESCENDING: null,
  UNSORT: null
});
exports.SORT_ORDER = SORT_ORDER;
var TABLE_OPTION = (0, _keymirror["default"])({
  SORT_ASC: null,
  SORT_DES: null,
  UNSORT: null,
  PIN: null,
  UNPIN: null,
  COPY: null
});
exports.TABLE_OPTION = TABLE_OPTION;
var TABLE_OPTION_LIST = [{
  value: TABLE_OPTION.SORT_ASC,
  display: 'Sort Ascending',
  icon: _icons.ArrowUp,
  condition: function condition(props) {
    return props.sortMode !== SORT_ORDER.ASCENDING;
  }
}, {
  value: TABLE_OPTION.SORT_DES,
  display: 'Sort Descending',
  icon: _icons.ArrowDown,
  condition: function condition(props) {
    return props.sortMode !== SORT_ORDER.DESCENDING;
  }
}, {
  value: TABLE_OPTION.UNSORT,
  display: 'Unsort Column',
  icon: _icons.Cancel,
  condition: function condition(props) {
    return props.isSorted;
  }
}, {
  value: TABLE_OPTION.PIN,
  display: 'Pin Column',
  icon: _icons.Pin,
  condition: function condition(props) {
    return !props.isPinned;
  }
}, {
  value: TABLE_OPTION.UNPIN,
  display: 'Unpin Column',
  icon: _icons.Cancel,
  condition: function condition(props) {
    return props.isPinned;
  }
}, {
  value: TABLE_OPTION.COPY,
  display: 'Copy Column',
  icon: _icons.Clipboard
}];
exports.TABLE_OPTION_LIST = TABLE_OPTION_LIST;
var ORANGE = '248, 194, 28';
var PINK = '231, 189, 194';
var PURPLE = '160, 106, 206';
var BLUE = '140, 210, 205';
var BLUE2 = '106, 160, 206';
var BLUE3 = '0, 172, 237';
var GREEN = '106, 160, 56';
var RED = '237, 88, 106';
var HIGHLIGH_COLOR_3D = [255, 255, 255, 60];
exports.HIGHLIGH_COLOR_3D = HIGHLIGH_COLOR_3D;
var FIELD_COLORS = {
  "default": RED
};
exports.FIELD_COLORS = FIELD_COLORS;
var FILED_TYPE_DISPLAY = (_FILED_TYPE_DISPLAY = {}, (0, _defineProperty2["default"])(_FILED_TYPE_DISPLAY, ALL_FIELD_TYPES["boolean"], {
  label: 'bool',
  color: PINK
}), (0, _defineProperty2["default"])(_FILED_TYPE_DISPLAY, ALL_FIELD_TYPES.date, {
  label: 'date',
  color: PURPLE
}), (0, _defineProperty2["default"])(_FILED_TYPE_DISPLAY, ALL_FIELD_TYPES.geojson, {
  label: 'geo',
  color: BLUE2
}), (0, _defineProperty2["default"])(_FILED_TYPE_DISPLAY, ALL_FIELD_TYPES.integer, {
  label: 'int',
  color: ORANGE
}), (0, _defineProperty2["default"])(_FILED_TYPE_DISPLAY, ALL_FIELD_TYPES.real, {
  label: 'float',
  color: ORANGE
}), (0, _defineProperty2["default"])(_FILED_TYPE_DISPLAY, ALL_FIELD_TYPES.string, {
  label: 'string',
  color: BLUE
}), (0, _defineProperty2["default"])(_FILED_TYPE_DISPLAY, ALL_FIELD_TYPES.timestamp, {
  label: 'time',
  color: GREEN
}), (0, _defineProperty2["default"])(_FILED_TYPE_DISPLAY, ALL_FIELD_TYPES.point, {
  label: 'point',
  color: BLUE3
}), _FILED_TYPE_DISPLAY);
exports.FILED_TYPE_DISPLAY = FILED_TYPE_DISPLAY;
var CHANNEL_SCALES = (0, _keymirror["default"])({
  color: null,
  radius: null,
  size: null,
  colorAggr: null,
  sizeAggr: null
});
exports.CHANNEL_SCALES = CHANNEL_SCALES;
var AGGREGATION_TYPES = {
  // default
  count: 'count',
  // linear
  average: 'average',
  maximum: 'maximum',
  minimum: 'minimum',
  median: 'median',
  stdev: 'stdev',
  sum: 'sum',
  variance: 'variance',
  // ordinal
  mode: 'mode',
  countUnique: 'count unique'
};
exports.AGGREGATION_TYPES = AGGREGATION_TYPES;
var linearFieldScaleFunctions = (_linearFieldScaleFunc = {}, (0, _defineProperty2["default"])(_linearFieldScaleFunc, CHANNEL_SCALES.color, [SCALE_TYPES.quantize, SCALE_TYPES.quantile]), (0, _defineProperty2["default"])(_linearFieldScaleFunc, CHANNEL_SCALES.radius, [SCALE_TYPES.sqrt]), (0, _defineProperty2["default"])(_linearFieldScaleFunc, CHANNEL_SCALES.size, [SCALE_TYPES.linear, SCALE_TYPES.sqrt, SCALE_TYPES.log]), _linearFieldScaleFunc);
exports.linearFieldScaleFunctions = linearFieldScaleFunctions;
var linearFieldAggrScaleFunctions = (_linearFieldAggrScale = {}, (0, _defineProperty2["default"])(_linearFieldAggrScale, CHANNEL_SCALES.colorAggr, (_CHANNEL_SCALES$color = {}, (0, _defineProperty2["default"])(_CHANNEL_SCALES$color, AGGREGATION_TYPES.average, [SCALE_TYPES.quantize, SCALE_TYPES.quantile]), (0, _defineProperty2["default"])(_CHANNEL_SCALES$color, AGGREGATION_TYPES.maximum, [SCALE_TYPES.quantize, SCALE_TYPES.quantile]), (0, _defineProperty2["default"])(_CHANNEL_SCALES$color, AGGREGATION_TYPES.minimum, [SCALE_TYPES.quantize, SCALE_TYPES.quantile]), (0, _defineProperty2["default"])(_CHANNEL_SCALES$color, AGGREGATION_TYPES.median, [SCALE_TYPES.quantize, SCALE_TYPES.quantile]), (0, _defineProperty2["default"])(_CHANNEL_SCALES$color, AGGREGATION_TYPES.stdev, [SCALE_TYPES.quantize, SCALE_TYPES.quantile]), (0, _defineProperty2["default"])(_CHANNEL_SCALES$color, AGGREGATION_TYPES.sum, [SCALE_TYPES.quantize, SCALE_TYPES.quantile]), (0, _defineProperty2["default"])(_CHANNEL_SCALES$color, AGGREGATION_TYPES.variance, [SCALE_TYPES.quantize, SCALE_TYPES.quantile]), _CHANNEL_SCALES$color)), (0, _defineProperty2["default"])(_linearFieldAggrScale, CHANNEL_SCALES.sizeAggr, (_CHANNEL_SCALES$sizeA = {}, (0, _defineProperty2["default"])(_CHANNEL_SCALES$sizeA, AGGREGATION_TYPES.average, [SCALE_TYPES.linear, SCALE_TYPES.sqrt, SCALE_TYPES.log]), (0, _defineProperty2["default"])(_CHANNEL_SCALES$sizeA, AGGREGATION_TYPES.maximum, [SCALE_TYPES.linear, SCALE_TYPES.sqrt, SCALE_TYPES.log]), (0, _defineProperty2["default"])(_CHANNEL_SCALES$sizeA, AGGREGATION_TYPES.minimum, [SCALE_TYPES.linear, SCALE_TYPES.sqrt, SCALE_TYPES.log]), (0, _defineProperty2["default"])(_CHANNEL_SCALES$sizeA, AGGREGATION_TYPES.median, [SCALE_TYPES.linear, SCALE_TYPES.sqrt, SCALE_TYPES.log]), (0, _defineProperty2["default"])(_CHANNEL_SCALES$sizeA, AGGREGATION_TYPES.stdev, [SCALE_TYPES.linear, SCALE_TYPES.sqrt, SCALE_TYPES.log]), (0, _defineProperty2["default"])(_CHANNEL_SCALES$sizeA, AGGREGATION_TYPES.sum, [SCALE_TYPES.linear, SCALE_TYPES.sqrt, SCALE_TYPES.log]), (0, _defineProperty2["default"])(_CHANNEL_SCALES$sizeA, AGGREGATION_TYPES.variance, [SCALE_TYPES.linear, SCALE_TYPES.sqrt, SCALE_TYPES.log]), _CHANNEL_SCALES$sizeA)), _linearFieldAggrScale);
exports.linearFieldAggrScaleFunctions = linearFieldAggrScaleFunctions;
var ordinalFieldScaleFunctions = (_ordinalFieldScaleFun = {}, (0, _defineProperty2["default"])(_ordinalFieldScaleFun, CHANNEL_SCALES.color, [SCALE_TYPES.ordinal]), (0, _defineProperty2["default"])(_ordinalFieldScaleFun, CHANNEL_SCALES.radius, [SCALE_TYPES.point]), (0, _defineProperty2["default"])(_ordinalFieldScaleFun, CHANNEL_SCALES.size, [SCALE_TYPES.point]), _ordinalFieldScaleFun);
exports.ordinalFieldScaleFunctions = ordinalFieldScaleFunctions;
var ordinalFieldAggrScaleFunctions = (_ordinalFieldAggrScal = {}, (0, _defineProperty2["default"])(_ordinalFieldAggrScal, CHANNEL_SCALES.colorAggr, (_CHANNEL_SCALES$color2 = {}, (0, _defineProperty2["default"])(_CHANNEL_SCALES$color2, AGGREGATION_TYPES.mode, [SCALE_TYPES.ordinal]), (0, _defineProperty2["default"])(_CHANNEL_SCALES$color2, AGGREGATION_TYPES.countUnique, [SCALE_TYPES.quantize, SCALE_TYPES.quantile]), _CHANNEL_SCALES$color2)), (0, _defineProperty2["default"])(_ordinalFieldAggrScal, CHANNEL_SCALES.sizeAggr, {}), _ordinalFieldAggrScal);
exports.ordinalFieldAggrScaleFunctions = ordinalFieldAggrScaleFunctions;
var notSupportedScaleOpts = (_notSupportedScaleOpt = {}, (0, _defineProperty2["default"])(_notSupportedScaleOpt, CHANNEL_SCALES.color, []), (0, _defineProperty2["default"])(_notSupportedScaleOpt, CHANNEL_SCALES.radius, []), (0, _defineProperty2["default"])(_notSupportedScaleOpt, CHANNEL_SCALES.size, []), _notSupportedScaleOpt);
exports.notSupportedScaleOpts = notSupportedScaleOpts;
var notSupportAggrOpts = (_notSupportAggrOpts = {}, (0, _defineProperty2["default"])(_notSupportAggrOpts, CHANNEL_SCALES.colorAggr, {}), (0, _defineProperty2["default"])(_notSupportAggrOpts, CHANNEL_SCALES.sizeAggr, {}), _notSupportAggrOpts);
/**
 * Default aggregation are based on ocunt
 */

exports.notSupportAggrOpts = notSupportAggrOpts;
var DEFAULT_AGGREGATION = (_DEFAULT_AGGREGATION = {}, (0, _defineProperty2["default"])(_DEFAULT_AGGREGATION, CHANNEL_SCALES.colorAggr, (0, _defineProperty2["default"])({}, AGGREGATION_TYPES.count, [SCALE_TYPES.quantize, SCALE_TYPES.quantile])), (0, _defineProperty2["default"])(_DEFAULT_AGGREGATION, CHANNEL_SCALES.sizeAggr, (0, _defineProperty2["default"])({}, AGGREGATION_TYPES.count, [SCALE_TYPES.linear, SCALE_TYPES.sqrt, SCALE_TYPES.log])), _DEFAULT_AGGREGATION);
/**
 * Define what type of scale operation is allowed on each type of fields
 */

exports.DEFAULT_AGGREGATION = DEFAULT_AGGREGATION;
var FIELD_OPTS = {
  string: {
    type: 'categorical',
    scale: _objectSpread(_objectSpread({}, ordinalFieldScaleFunctions), ordinalFieldAggrScaleFunctions),
    format: {
      legend: function legend(d) {
        return d;
      },
      tooltip: []
    }
  },
  real: {
    type: 'numerical',
    scale: _objectSpread(_objectSpread({}, linearFieldScaleFunctions), linearFieldAggrScaleFunctions),
    format: {
      legend: function legend(d) {
        return d;
      },
      tooltip: [_tooltip.TOOLTIP_FORMAT_TYPES.DECIMAL, _tooltip.TOOLTIP_FORMAT_TYPES.PERCENTAGE]
    }
  },
  timestamp: {
    type: 'time',
    scale: _objectSpread(_objectSpread({}, linearFieldScaleFunctions), notSupportAggrOpts),
    format: {
      legend: function legend(d) {
        return d;
      },
      tooltip: [_tooltip.TOOLTIP_FORMAT_TYPES.DATE, _tooltip.TOOLTIP_FORMAT_TYPES.DATE_TIME]
    }
  },
  integer: {
    type: 'numerical',
    scale: _objectSpread(_objectSpread({}, linearFieldScaleFunctions), linearFieldAggrScaleFunctions),
    format: {
      legend: function legend(d) {
        return d;
      },
      tooltip: [_tooltip.TOOLTIP_FORMAT_TYPES.DECIMAL, _tooltip.TOOLTIP_FORMAT_TYPES.PERCENTAGE]
    }
  },
  "boolean": {
    type: 'boolean',
    scale: _objectSpread(_objectSpread({}, ordinalFieldScaleFunctions), ordinalFieldAggrScaleFunctions),
    format: {
      legend: function legend(d) {
        return d;
      },
      tooltip: []
    }
  },
  date: {
    scale: _objectSpread(_objectSpread({}, ordinalFieldScaleFunctions), ordinalFieldAggrScaleFunctions),
    format: {
      legend: function legend(d) {
        return d;
      },
      tooltip: [_tooltip.TOOLTIP_FORMAT_TYPES.DATE]
    }
  },
  geojson: {
    type: 'geometry',
    scale: _objectSpread(_objectSpread({}, notSupportedScaleOpts), notSupportAggrOpts),
    format: {
      legend: function legend(d) {
        return '...';
      },
      tooltip: []
    }
  }
};
exports.FIELD_OPTS = FIELD_OPTS;
var CHANNEL_SCALE_SUPPORTED_FIELDS = Object.keys(CHANNEL_SCALES).reduce(function (accu, key) {
  return _objectSpread(_objectSpread({}, accu), {}, (0, _defineProperty2["default"])({}, key, Object.keys(FIELD_OPTS).filter(function (ft) {
    return Object.keys(FIELD_OPTS[ft].scale[key]).length;
  })));
}, {}); // TODO: shan delete use of LAYER_TYPES

exports.CHANNEL_SCALE_SUPPORTED_FIELDS = CHANNEL_SCALE_SUPPORTED_FIELDS;
var LAYER_TYPES = (0, _keymirror["default"])({
  point: null,
  arc: null,
  cluster: null,
  line: null,
  grid: null,
  geojson: null,
  icon: null,
  heatmap: null,
  hexagon: null
});
exports.LAYER_TYPES = LAYER_TYPES;
var DEFAULT_LAYER_COLOR = {
  tripArc: '#9226C6',
  begintrip_lat: '#1E96BE',
  dropoff_lat: '#FF991F',
  request_lat: '#52A353'
}; // let user pass in default tooltip fields

exports.DEFAULT_LAYER_COLOR = DEFAULT_LAYER_COLOR;
var DEFAULT_TOOLTIP_FIELDS = [];
exports.DEFAULT_TOOLTIP_FIELDS = DEFAULT_TOOLTIP_FIELDS;
var NO_VALUE_COLOR = [0, 0, 0, 0];
exports.NO_VALUE_COLOR = NO_VALUE_COLOR;
var LAYER_BLENDINGS = {
  additive: {
    label: 'layerBlending.additive',
    blendFunc: ['SRC_ALPHA', 'DST_ALPHA'],
    blendEquation: 'FUNC_ADD'
  },
  normal: {
    // reference to
    // https://limnu.com/webgl-blending-youre-probably-wrong/
    label: 'layerBlending.normal',
    blendFunc: ['SRC_ALPHA', 'ONE_MINUS_SRC_ALPHA', 'ONE', 'ONE_MINUS_SRC_ALPHA'],
    blendEquation: ['FUNC_ADD', 'FUNC_ADD']
  },
  subtractive: {
    label: 'layerBlending.subtractive',
    blendFunc: ['ONE', 'ONE_MINUS_DST_COLOR', 'SRC_ALPHA', 'DST_ALPHA'],
    blendEquation: ['FUNC_SUBTRACT', 'FUNC_ADD']
  }
};
exports.LAYER_BLENDINGS = LAYER_BLENDINGS;
var MAX_DEFAULT_TOOLTIPS = 5;
exports.MAX_DEFAULT_TOOLTIPS = MAX_DEFAULT_TOOLTIPS;
var RESOLUTIONS = (0, _keymirror["default"])({
  ONE_X: null,
  TWO_X: null
});
exports.RESOLUTIONS = RESOLUTIONS;
var EXPORT_IMG_RATIOS = (0, _keymirror["default"])({
  SCREEN: null,
  FOUR_BY_THREE: null,
  SIXTEEN_BY_NINE: null,
  CUSTOM: null
});
exports.EXPORT_IMG_RATIOS = EXPORT_IMG_RATIOS;
var EXPORT_IMG_RATIO_OPTIONS = [{
  id: EXPORT_IMG_RATIOS.SCREEN,
  label: 'modal.exportImage.ratioOriginalScreen',
  getSize: function getSize(screenW, screenH) {
    return {
      width: screenW,
      height: screenH
    };
  }
}, {
  id: EXPORT_IMG_RATIOS.CUSTOM,
  hidden: true,
  label: 'modal.exportImage.ratioCustom',
  getSize: function getSize(mapW, mapH) {
    return {
      width: mapW,
      height: mapH
    };
  }
}, {
  id: EXPORT_IMG_RATIOS.FOUR_BY_THREE,
  label: 'modal.exportImage.ratio4_3',
  getSize: function getSize(screenW, screenH) {
    return {
      width: screenW,
      height: Math.round(screenW * 0.75)
    };
  }
}, {
  id: EXPORT_IMG_RATIOS.SIXTEEN_BY_NINE,
  label: 'modal.exportImage.ratio16_9',
  getSize: function getSize(screenW, screenH) {
    return {
      width: screenW,
      height: Math.round(screenW * 0.5625)
    };
  }
}];
exports.EXPORT_IMG_RATIO_OPTIONS = EXPORT_IMG_RATIO_OPTIONS;
var EXPORT_IMG_RESOLUTION_OPTIONS = [{
  id: RESOLUTIONS.ONE_X,
  label: '1x',
  available: true,
  scale: 1,
  getSize: function getSize(screenW, screenH) {
    return {
      width: screenW,
      height: screenH
    };
  }
}, {
  id: RESOLUTIONS.TWO_X,
  label: '2x',
  available: true,
  scale: 2,
  getSize: function getSize(screenW, screenH) {
    return {
      width: screenW * 2,
      height: screenH * 2
    };
  }
}];
exports.EXPORT_IMG_RESOLUTION_OPTIONS = EXPORT_IMG_RESOLUTION_OPTIONS;
var EXPORT_DATA_TYPE = (0, _keymirror["default"])({
  CSV: null // SHAPEFILE: null,
  // JSON: null,
  // GEOJSON: null,
  // TOPOJSON: null

});
exports.EXPORT_DATA_TYPE = EXPORT_DATA_TYPE;
var EXPORT_DATA_TYPE_OPTIONS = [{
  id: EXPORT_DATA_TYPE.CSV,
  label: EXPORT_DATA_TYPE.CSV.toLowerCase(),
  available: true
} // {
//   id: EXPORT_DATA_TYPE.SHAPEFILE,
//   label: 'shapefile',
//   available: false
// },
// {
//   id: EXPORT_DATA_TYPE.JSON,
//   label: 'json',
//   available: false
// },
// {
//   id: EXPORT_DATA_TYPE.GEOJSON,
//   label: 'geojson',
//   available: false
// },
// {
//   id: EXPORT_DATA_TYPE.TOPOJSON,
//   label: 'topojson',
//   available: false
// }
]; // Export map types

exports.EXPORT_DATA_TYPE_OPTIONS = EXPORT_DATA_TYPE_OPTIONS;
var EXPORT_MAP_FORMATS = (0, _keymirror["default"])({
  HTML: null,
  JSON: null
});
exports.EXPORT_MAP_FORMATS = EXPORT_MAP_FORMATS;
var EXPORT_HTML_MAP_MODES = (0, _keymirror["default"])({
  READ: null,
  EDIT: null
}); // Export map options

exports.EXPORT_HTML_MAP_MODES = EXPORT_HTML_MAP_MODES;
var EXPORT_MAP_FORMAT_OPTIONS = Object.entries(EXPORT_MAP_FORMATS).map(function (entry) {
  return {
    id: entry[0],
    label: entry[1].toLowerCase(),
    available: true
  };
});
exports.EXPORT_MAP_FORMAT_OPTIONS = EXPORT_MAP_FORMAT_OPTIONS;
var EXPORT_HTML_MAP_MODE_OPTIONS = Object.entries(EXPORT_HTML_MAP_MODES).map(function (entry) {
  return {
    id: entry[0],
    label: "modal.exportMap.html.".concat(entry[1].toLowerCase()),
    available: true,
    url: (0, _utils.getHTMLMapModeTileUrl)(entry[1])
  };
});
exports.EXPORT_HTML_MAP_MODE_OPTIONS = EXPORT_HTML_MAP_MODE_OPTIONS;
var DEFAULT_UUID_COUNT = 6;
exports.DEFAULT_UUID_COUNT = DEFAULT_UUID_COUNT;
var DEFAULT_NOTIFICATION_MESSAGE = 'MESSAGE_NOT_PROVIDED';
exports.DEFAULT_NOTIFICATION_MESSAGE = DEFAULT_NOTIFICATION_MESSAGE;
var DEFAULT_NOTIFICATION_TYPES = (0, _keymirror["default"])({
  info: null,
  error: null,
  warning: null,
  success: null
});
exports.DEFAULT_NOTIFICATION_TYPES = DEFAULT_NOTIFICATION_TYPES;
var DEFAULT_NOTIFICATION_TOPICS = (0, _keymirror["default"])({
  global: null,
  file: null
}); // Animation

exports.DEFAULT_NOTIFICATION_TOPICS = DEFAULT_NOTIFICATION_TOPICS;
var BASE_SPEED = 600;
exports.BASE_SPEED = BASE_SPEED;
var DEFAULT_TIME_FORMAT = 'MM/DD/YY HH:mm:ssa';
exports.DEFAULT_TIME_FORMAT = DEFAULT_TIME_FORMAT;
var SPEED_CONTROL_RANGE = [0, 10]; // We could use directly react-map-gl-draw EditorMode but this would
// create a direct dependency with react-map-gl-draw
// Created this map to be independent from react-map-gl-draw

exports.SPEED_CONTROL_RANGE = SPEED_CONTROL_RANGE;
var EDITOR_MODES = {
  READ_ONLY: _reactMapGlDraw.EditorModes.READ_ONLY,
  DRAW_POLYGON: _reactMapGlDraw.EditorModes.DRAW_POLYGON,
  DRAW_RECTANGLE: _reactMapGlDraw.EditorModes.DRAW_RECTANGLE,
  EDIT: _reactMapGlDraw.EditorModes.EDIT_VERTEX
};
exports.EDITOR_MODES = EDITOR_MODES;
var EDITOR_AVAILABLE_LAYERS = [LAYER_TYPES.point, LAYER_TYPES.hexagon, LAYER_TYPES.arc, LAYER_TYPES.line]; // GPU Filtering

/**
 * Max number of filter value buffers that deck.gl provides
 */

exports.EDITOR_AVAILABLE_LAYERS = EDITOR_AVAILABLE_LAYERS;
var MAX_GPU_FILTERS = 4;
exports.MAX_GPU_FILTERS = MAX_GPU_FILTERS;
var MAP_THUMBNAIL_DIMENSION = {
  width: 300,
  height: 200
};
exports.MAP_THUMBNAIL_DIMENSION = MAP_THUMBNAIL_DIMENSION;
var MAP_INFO_CHARACTER = {
  title: 100,
  description: 100
}; // Load data

exports.MAP_INFO_CHARACTER = MAP_INFO_CHARACTER;
var LOADING_METHODS = (0, _keymirror["default"])({
  upload: null,
  storage: null
});
exports.LOADING_METHODS = LOADING_METHODS;
var DATASET_FORMATS = (0, _keymirror["default"])({
  row: null,
  geojson: null,
  csv: null,
  keplergl: null
});
exports.DATASET_FORMATS = DATASET_FORMATS;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb25zdGFudHMvZGVmYXVsdC1zZXR0aW5ncy5qcyJdLCJuYW1lcyI6WyJBQ1RJT05fUFJFRklYIiwiQ0xPVURGUk9OVCIsIklDT05fUFJFRklYIiwiREVGQVVMVF9NQVBCT1hfQVBJX1VSTCIsIkRBVEFfVEFCTEVfSUQiLCJERUxFVEVfREFUQV9JRCIsIkFERF9EQVRBX0lEIiwiRVhQT1JUX0lNQUdFX0lEIiwiRVhQT1JUX0RBVEFfSUQiLCJBRERfTUFQX1NUWUxFX0lEIiwiRVhQT1JUX01BUF9JRCIsIlNBVkVfTUFQX0lEIiwiT1ZFUldSSVRFX01BUF9JRCIsIlNIQVJFX01BUF9JRCIsIktFUExFUl9HTF9OQU1FIiwiS0VQTEVSX0dMX1ZFUlNJT04iLCJLRVBMRVJfR0xfV0VCU0lURSIsIkRJTUVOU0lPTlMiLCJzaWRlUGFuZWwiLCJ3aWR0aCIsIm1hcmdpbiIsInRvcCIsImxlZnQiLCJib3R0b20iLCJyaWdodCIsImhlYWRlckhlaWdodCIsIm1hcENvbnRyb2wiLCJwYWRkaW5nIiwiVEhFTUUiLCJsaWdodCIsImRhcmsiLCJiYXNlIiwiU0lERUJBUl9QQU5FTFMiLCJpZCIsImxhYmVsIiwiaWNvbkNvbXBvbmVudCIsIkxheWVycyIsIkZpbHRlckZ1bm5lbCIsIkN1cnNvckNsaWNrIiwiU2V0dGluZ3MiLCJQQU5FTFMiLCJERUZBVUxUX0xBWUVSX0dST1VQUyIsInNsdWciLCJmaWx0ZXIiLCJtYXRjaCIsImRlZmF1bHRWaXNpYmlsaXR5IiwiREVGQVVMVF9NQVBfU1RZTEVTIiwidXJsIiwiaWNvbiIsImxheWVyR3JvdXBzIiwiR0VPSlNPTl9GSUVMRFMiLCJnZW9qc29uIiwiSUNPTl9GSUVMRFMiLCJUUklQX1BPSU5UX0ZJRUxEUyIsIlRSSVBfQVJDX0ZJRUxEUyIsImxhdDAiLCJsbmcwIiwibGF0MSIsImxuZzEiLCJGSUxURVJfVFlQRVMiLCJyYW5nZSIsInNlbGVjdCIsInRpbWVSYW5nZSIsIm11bHRpU2VsZWN0IiwicG9seWdvbiIsIlNDQUxFX1RZUEVTIiwib3JkaW5hbCIsInF1YW50aWxlIiwicXVhbnRpemUiLCJsaW5lYXIiLCJzcXJ0IiwibG9nIiwicG9pbnQiLCJTQ0FMRV9GVU5DIiwic2NhbGVMaW5lYXIiLCJzY2FsZVF1YW50aXplIiwic2NhbGVRdWFudGlsZSIsInNjYWxlT3JkaW5hbCIsInNjYWxlU3FydCIsInNjYWxlTG9nIiwic2NhbGVQb2ludCIsIkFMTF9GSUVMRF9UWVBFUyIsImRhdGUiLCJpbnRlZ2VyIiwicmVhbCIsInN0cmluZyIsInRpbWVzdGFtcCIsIlNPUlRfT1JERVIiLCJBU0NFTkRJTkciLCJERVNDRU5ESU5HIiwiVU5TT1JUIiwiVEFCTEVfT1BUSU9OIiwiU09SVF9BU0MiLCJTT1JUX0RFUyIsIlBJTiIsIlVOUElOIiwiQ09QWSIsIlRBQkxFX09QVElPTl9MSVNUIiwidmFsdWUiLCJkaXNwbGF5IiwiQXJyb3dVcCIsImNvbmRpdGlvbiIsInByb3BzIiwic29ydE1vZGUiLCJBcnJvd0Rvd24iLCJDYW5jZWwiLCJpc1NvcnRlZCIsIlBpbiIsImlzUGlubmVkIiwiQ2xpcGJvYXJkIiwiT1JBTkdFIiwiUElOSyIsIlBVUlBMRSIsIkJMVUUiLCJCTFVFMiIsIkJMVUUzIiwiR1JFRU4iLCJSRUQiLCJISUdITElHSF9DT0xPUl8zRCIsIkZJRUxEX0NPTE9SUyIsIkZJTEVEX1RZUEVfRElTUExBWSIsImNvbG9yIiwiQ0hBTk5FTF9TQ0FMRVMiLCJyYWRpdXMiLCJzaXplIiwiY29sb3JBZ2dyIiwic2l6ZUFnZ3IiLCJBR0dSRUdBVElPTl9UWVBFUyIsImNvdW50IiwiYXZlcmFnZSIsIm1heGltdW0iLCJtaW5pbXVtIiwibWVkaWFuIiwic3RkZXYiLCJzdW0iLCJ2YXJpYW5jZSIsIm1vZGUiLCJjb3VudFVuaXF1ZSIsImxpbmVhckZpZWxkU2NhbGVGdW5jdGlvbnMiLCJsaW5lYXJGaWVsZEFnZ3JTY2FsZUZ1bmN0aW9ucyIsIm9yZGluYWxGaWVsZFNjYWxlRnVuY3Rpb25zIiwib3JkaW5hbEZpZWxkQWdnclNjYWxlRnVuY3Rpb25zIiwibm90U3VwcG9ydGVkU2NhbGVPcHRzIiwibm90U3VwcG9ydEFnZ3JPcHRzIiwiREVGQVVMVF9BR0dSRUdBVElPTiIsIkZJRUxEX09QVFMiLCJ0eXBlIiwic2NhbGUiLCJmb3JtYXQiLCJsZWdlbmQiLCJkIiwidG9vbHRpcCIsIlRPT0xUSVBfRk9STUFUX1RZUEVTIiwiREVDSU1BTCIsIlBFUkNFTlRBR0UiLCJEQVRFIiwiREFURV9USU1FIiwiQ0hBTk5FTF9TQ0FMRV9TVVBQT1JURURfRklFTERTIiwiT2JqZWN0Iiwia2V5cyIsInJlZHVjZSIsImFjY3UiLCJrZXkiLCJmdCIsImxlbmd0aCIsIkxBWUVSX1RZUEVTIiwiYXJjIiwiY2x1c3RlciIsImxpbmUiLCJncmlkIiwiaGVhdG1hcCIsImhleGFnb24iLCJERUZBVUxUX0xBWUVSX0NPTE9SIiwidHJpcEFyYyIsImJlZ2ludHJpcF9sYXQiLCJkcm9wb2ZmX2xhdCIsInJlcXVlc3RfbGF0IiwiREVGQVVMVF9UT09MVElQX0ZJRUxEUyIsIk5PX1ZBTFVFX0NPTE9SIiwiTEFZRVJfQkxFTkRJTkdTIiwiYWRkaXRpdmUiLCJibGVuZEZ1bmMiLCJibGVuZEVxdWF0aW9uIiwibm9ybWFsIiwic3VidHJhY3RpdmUiLCJNQVhfREVGQVVMVF9UT09MVElQUyIsIlJFU09MVVRJT05TIiwiT05FX1giLCJUV09fWCIsIkVYUE9SVF9JTUdfUkFUSU9TIiwiU0NSRUVOIiwiRk9VUl9CWV9USFJFRSIsIlNJWFRFRU5fQllfTklORSIsIkNVU1RPTSIsIkVYUE9SVF9JTUdfUkFUSU9fT1BUSU9OUyIsImdldFNpemUiLCJzY3JlZW5XIiwic2NyZWVuSCIsImhlaWdodCIsImhpZGRlbiIsIm1hcFciLCJtYXBIIiwiTWF0aCIsInJvdW5kIiwiRVhQT1JUX0lNR19SRVNPTFVUSU9OX09QVElPTlMiLCJhdmFpbGFibGUiLCJFWFBPUlRfREFUQV9UWVBFIiwiQ1NWIiwiRVhQT1JUX0RBVEFfVFlQRV9PUFRJT05TIiwidG9Mb3dlckNhc2UiLCJFWFBPUlRfTUFQX0ZPUk1BVFMiLCJIVE1MIiwiSlNPTiIsIkVYUE9SVF9IVE1MX01BUF9NT0RFUyIsIlJFQUQiLCJFRElUIiwiRVhQT1JUX01BUF9GT1JNQVRfT1BUSU9OUyIsImVudHJpZXMiLCJtYXAiLCJlbnRyeSIsIkVYUE9SVF9IVE1MX01BUF9NT0RFX09QVElPTlMiLCJERUZBVUxUX1VVSURfQ09VTlQiLCJERUZBVUxUX05PVElGSUNBVElPTl9NRVNTQUdFIiwiREVGQVVMVF9OT1RJRklDQVRJT05fVFlQRVMiLCJpbmZvIiwiZXJyb3IiLCJ3YXJuaW5nIiwic3VjY2VzcyIsIkRFRkFVTFRfTk9USUZJQ0FUSU9OX1RPUElDUyIsImdsb2JhbCIsImZpbGUiLCJCQVNFX1NQRUVEIiwiREVGQVVMVF9USU1FX0ZPUk1BVCIsIlNQRUVEX0NPTlRST0xfUkFOR0UiLCJFRElUT1JfTU9ERVMiLCJSRUFEX09OTFkiLCJFZGl0b3JNb2RlcyIsIkRSQVdfUE9MWUdPTiIsIkRSQVdfUkVDVEFOR0xFIiwiRURJVF9WRVJURVgiLCJFRElUT1JfQVZBSUxBQkxFX0xBWUVSUyIsIk1BWF9HUFVfRklMVEVSUyIsIk1BUF9USFVNQk5BSUxfRElNRU5TSU9OIiwiTUFQX0lORk9fQ0hBUkFDVEVSIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsIkxPQURJTkdfTUVUSE9EUyIsInVwbG9hZCIsInN0b3JhZ2UiLCJEQVRBU0VUX0ZPUk1BVFMiLCJyb3ciLCJjc3YiLCJrZXBsZXJnbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBRUE7O0FBU0E7O0FBV0E7O0FBQ0E7Ozs7Ozs7O0FBRU8sSUFBTUEsYUFBYSxHQUFHLGNBQXRCOztBQUNBLElBQU1DLFVBQVUsR0FBRyxpREFBbkI7O0FBQ0EsSUFBTUMsV0FBVyxhQUFNRCxVQUFOLGFBQWpCOztBQUNBLElBQU1FLHNCQUFzQixHQUFHLHdCQUEvQixDLENBRVA7O0FBQ0E7Ozs7Ozs7O0FBTU8sSUFBTUMsYUFBYSxHQUFHLFdBQXRCO0FBQ1A7Ozs7Ozs7O0FBTU8sSUFBTUMs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bi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBrZXlNaXJyb3IgZnJvbSAna2V5bWlycm9yJztcclxuaW1wb3J0IHtFZGl0b3JNb2Rlc30gZnJvbSAncmVhY3QtbWFwLWdsLWRyYXcnO1xyXG5cclxuaW1wb3J0IHtcclxuICBzY2FsZUxpbmVhcixcclxuICBzY2FsZVF1YW50aXplLFxyXG4gIHNjYWxlUXVhbnRpbGUsXHJcbiAgc2NhbGVPcmRpbmFsLFxyXG4gIHNjYWxlU3FydCxcclxuICBzY2FsZUxvZyxcclxuICBzY2FsZVBvaW50XHJcbn0gZnJvbSAnZDMtc2NhbGUnO1xyXG5pbXBvcnQge1xyXG4gIExheWVycyxcclxuICBGaWx0ZXJGdW5uZWwsXHJcbiAgU2V0dGluZ3MsXHJcbiAgQ3Vyc29yQ2xpY2ssXHJcbiAgUGluLFxyXG4gIEFycm93RG93bixcclxuICBBcnJvd1VwLFxyXG4gIENsaXBib2FyZCxcclxuICBDYW5jZWxcclxufSBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9pY29ucyc7XHJcbmltcG9ydCB7Z2V0SFRNTE1hcE1vZGVUaWxlVXJsfSBmcm9tICd1dGlscy91dGlscyc7XHJcbmltcG9ydCB7VE9PTFRJUF9GT1JNQVRfVFlQRVN9IGZyb20gJy4vdG9vbHRpcCc7XHJcblxyXG5leHBvcnQgY29uc3QgQUNUSU9OX1BSRUZJWCA9ICdAQGtlcGxlci5nbC8nO1xyXG5leHBvcnQgY29uc3QgQ0xPVURGUk9OVCA9ICdodHRwczovL2QxYTNmNHNwYXp6cnA0LmNsb3VkZnJvbnQubmV0L2tlcGxlci5nbCc7XHJcbmV4cG9ydCBjb25zdCBJQ09OX1BSRUZJWCA9IGAke0NMT1VERlJPTlR9L2dlb2R1ZGVgO1xyXG5leHBvcnQgY29uc3QgREVGQVVMVF9NQVBCT1hfQVBJX1VSTCA9ICdodHRwczovL2FwaS5tYXBib3guY29tJztcclxuXHJcbi8vIE1vZGFsIElkc1xyXG4vKipcclxuICogTW9kYWwgaWQ6IGRhdGEgdGFibGVcclxuICogQGNvbnN0YW50XHJcbiAqIEB0eXBlIHtzdHJpbmd9XHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmV4cG9ydCBjb25zdCBEQVRBX1RBQkxFX0lEID0gJ2RhdGFUYWJsZSc7XHJcbi8qKlxyXG4gKiBNb2RhbCBpZDogZGVsZXRlIGRhdGFzZXQgY29uZmlybSBkaWFsb2dcclxuICogQGNvbnN0YW50XHJcbiAqIEB0eXBlIHtzdHJpbmd9XHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmV4cG9ydCBjb25zdCBERUxFVEVfREFUQV9JRCA9ICdkZWxldGVEYXRhJztcclxuLyoqXHJcbiAqIE1vZGFsIGlkOiBhZGQgZGF0YSBtb2RhbFxyXG4gKiBAY29uc3RhbnRcclxuICogQHR5cGUge3N0cmluZ31cclxuICogQHB1YmxpY1xyXG4gKi9cclxuZXhwb3J0IGNvbnN0IEFERF9EQVRBX0lEID0gJ2FkZERhdGEnO1xyXG4vKipcclxuICogTW9kYWwgaWQ6IGV4cG9ydCBpbWFnZSBtb2RhbFxyXG4gKiBAY29uc3RhbnRcclxuICogQHR5cGUge3N0cmluZ31cclxuICogQHB1YmxpY1xyXG4gKi9cclxuZXhwb3J0IGNvbnN0IEVYUE9SVF9JTUFHRV9JRCA9ICdleHBvcnRJbWFnZSc7XHJcbi8qKlxyXG4gKiBNb2RhbCBpZDogZXhwb3J0IGRhdGEgbW9kYWxcclxuICogQGNvbnN0YW50XHJcbiAqIEB0eXBlIHtzdHJpbmd9XHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmV4cG9ydCBjb25zdCBFWFBPUlRfREFUQV9JRCA9ICdleHBvcnREYXRhJztcclxuLyoqXHJcbiAqIE1vZGFsIGlkOiBhZGQgY3VzdG9tIG1hcCBzdHlsZSBtb2RhbFxyXG4gKiBAY29uc3RhbnRcclxuICogQHR5cGUge3N0cmluZ31cclxuICogQHB1YmxpY1xyXG4gKi9cclxuZXhwb3J0IGNvbnN0IEFERF9NQVBfU1RZTEVfSUQgPSAnYWRkTWFwU3R5bGUnO1xyXG4vKipcclxuICogTW9kYWwgaWQ6IGV4cG9ydCBtYXAgbW9kYWxcclxuICogQGNvbnN0YW50XHJcbiAqIEB0eXBlIHtzdHJpbmd9XHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmV4cG9ydCBjb25zdCBFWFBPUlRfTUFQX0lEID0gJ2V4cG9ydE1hcCc7XHJcbi8qKlxyXG4gKiBNb2RhbCBpZDogc2F2ZSBtYXAgbW9kYWxcclxuICogQGNvbnN0YW50XHJcbiAqIEB0eXBlIHtzdHJpbmd9XHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmV4cG9ydCBjb25zdCBTQVZFX01BUF9JRCA9ICdzYXZlTWFwJztcclxuLyoqXHJcbiAqIE1vZGFsIGlkOiBjb25maXJtIHRvIG92ZXJ3cml0ZSBzYXZlZCBtYXBcclxuICogQGNvbnN0YW50XHJcbiAqIEB0eXBlIHtzdHJpbmd9XHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmV4cG9ydCBjb25zdCBPVkVSV1JJVEVfTUFQX0lEID0gJ292ZXJ3cml0ZU1hcCc7XHJcbi8qKlxyXG4gKiBNb2RhbCBpZDogc2hhcmUgbWFwIHVybCBtb2RhbFxyXG4gKiBAY29uc3RhbnRcclxuICogQHR5cGUge3N0cmluZ31cclxuICogQHB1YmxpY1xyXG4gKi9cclxuZXhwb3J0IGNvbnN0IFNIQVJFX01BUF9JRCA9ICdzaGFyZU1hcCc7XHJcblxyXG5leHBvcnQgY29uc3QgS0VQTEVSX0dMX05BTUUgPSAna2VwbGVyLmdsJztcclxuXHJcbi8vIF9fUEFDS0FHRV9WRVJTSU9OX18gaXMgYXV0b21hdGljYWxseSBpbmplY3RlZCBieSBCYWJlbC9XZWJwYWNrIGR1cmluZyB0aGUgYnVpbGRpbmcgcHJvY2Vzc1xyXG4vLyBTaW5jZSB3ZSBhcmUgaW5qZWN0aW5nIHRoaXMgZHVyaW5nIHRoZSBidWlsZCBwcm9jZXNzIHdpdGggYmFiZWxcclxuLy8gd2hpbGUgZGV2ZWxvcGluZyBWRVJTSU9OIGlzIG5vdCBkZWZpbmVkLCB3ZSBjYXB0dXJlIHRoZSBleGNlcHRpb24gYW5kIHJldHVyblxyXG4vLyBhbiBlbXB0eSBzdHJpbmcgd2hpY2ggd2lsbCBhbGxvdyB1cyB0byByZXRyaWV2ZSB0aGUgbGF0ZXN0IHVtZCB2ZXJzaW9uXHJcbmV4cG9ydCBjb25zdCBLRVBMRVJfR0xfVkVSU0lPTiA9ICdfX1BBQ0tBR0VfVkVSU0lPTl9fJztcclxuZXhwb3J0IGNvbnN0IEtFUExFUl9HTF9XRUJTSVRFID0gJ2h0dHA6Ly9rZXBsZXIuZ2wvJztcclxuXHJcbmV4cG9ydCBjb25zdCBESU1FTlNJT05TID0ge1xyXG4gIHNpZGVQYW5lbDoge1xyXG4gICAgd2lkdGg6IDMwMCxcclxuICAgIG1hcmdpbjoge3RvcDogMjAsIGxlZnQ6IDIwLCBib3R0b206IDMwLCByaWdodDogMjB9LFxyXG4gICAgaGVhZGVySGVpZ2h0OiA5NlxyXG4gIH0sXHJcbiAgbWFwQ29udHJvbDoge1xyXG4gICAgd2lkdGg6IDIwNCxcclxuICAgIHBhZGRpbmc6IDEyXHJcbiAgfVxyXG59O1xyXG5cclxuLyoqXHJcbiAqIFRoZW1lIG5hbWUgdGhhdCBjYW4gYmUgcGFzc2VkIHRvIGBLZXBsZXJHbGAgYHByb3AudGhlbWVgLlxyXG4gKiBBdmFpbGFibGUgdGhlbWVzIGFyZSBgVGhlbWUubGlnaHRgIGFuZCBgVGhlbWUuZGFya2AuIERlZmF1bHQgdGhlbWUgaXMgYFRoZW1lLmRhcmtgXHJcbiAqIEBjb25zdGFudFxyXG4gKiBAdHlwZSB7c3RyaW5nfVxyXG4gKiBAcHVibGljXHJcbiAqIEBleGFtcGxlXHJcbiAqIGBgYGpzXHJcbiAqIGNvbnN0IE1hcCA9ICgpID0+IDxLZXBsZXJHbCB0aGVtZT17VEhFTUUubGlnaHR9IGlkPVwibWFwXCIvPlxyXG4gKiBgYGBcclxuICovXHJcbmV4cG9ydCBjb25zdCBUSEVNRSA9IGtleU1pcnJvcih7XHJcbiAgbGlnaHQ6IG51bGwsXHJcbiAgZGFyazogbnVsbCxcclxuICBiYXNlOiBudWxsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNJREVCQVJfUEFORUxTID0gW1xyXG4gIHtcclxuICAgIGlkOiAnbGF5ZXInLFxyXG4gICAgbGFiZWw6ICdzaWRlYmFyLnBhbmVscy5sYXllcicsXHJcbiAgICBpY29uQ29tcG9uZW50OiBMYXllcnNcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAnZmlsdGVyJyxcclxuICAgIGxhYmVsOiAnc2lkZWJhci5wYW5lbHMuZmlsdGVyJyxcclxuICAgIGljb25Db21wb25lbnQ6IEZpbHRlckZ1bm5lbFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICdpbnRlcmFjdGlvbicsXHJcbiAgICBsYWJlbDogJ3NpZGViYXIucGFuZWxzLmludGVyYWN0aW9uJyxcclxuICAgIGljb25Db21wb25lbnQ6IEN1cnNvckNsaWNrXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJ21hcCcsXHJcbiAgICBsYWJlbDogJ3NpZGViYXIucGFuZWxzLmJhc2VtYXAnLFxyXG4gICAgaWNvbkNvbXBvbmVudDogU2V0dGluZ3NcclxuICB9XHJcbl07XHJcblxyXG4vLyBiYWNrd2FyZCBjb21wYXRpYmlsaXR5XHJcbmV4cG9ydCBjb25zdCBQQU5FTFMgPSBTSURFQkFSX1BBTkVMUztcclxuXHJcbi8vIE1BUCBTVFlMRVNcclxuXHJcbmV4cG9ydCBjb25zdCBERUZBVUxUX0xBWUVSX0dST1VQUyA9IFtcclxuICB7XHJcbiAgICBzbHVnOiAnbGFiZWwnLFxyXG4gICAgZmlsdGVyOiAoe2lkfSkgPT4gaWQubWF0Y2goLyg/PShsYWJlbHxwbGFjZS18cG9pLSkpLyksXHJcbiAgICBkZWZhdWx0VmlzaWJpbGl0eTogdHJ1ZVxyXG4gIH0sXHJcbiAge1xyXG4gICAgc2x1ZzogJ3JvYWQnLFxyXG4gICAgZmlsdGVyOiAoe2lkfSkgPT4gaWQubWF0Y2goLyg/PShyb2FkfHJhaWx3YXl8dHVubmVsfHN0cmVldHxicmlkZ2UpKSg/IS4qbGFiZWwpLyksXHJcbiAgICBkZWZhdWx0VmlzaWJpbGl0eTogdHJ1ZVxyXG4gIH0sXHJcbiAge1xyXG4gICAgc2x1ZzogJ2JvcmRlcicsXHJcbiAgICBmaWx0ZXI6ICh7aWR9KSA9PiBpZC5tYXRjaCgvYm9yZGVyfGJvdW5kYXJpZXMvKSxcclxuICAgIGRlZmF1bHRWaXNpYmlsaXR5OiBmYWxzZVxyXG4gIH0sXHJcbiAge1xyXG4gICAgc2x1ZzogJ2J1aWxkaW5nJyxcclxuICAgIGZpbHRlcjogKHtpZH0pID0+IGlkLm1hdGNoKC9idWlsZGluZy8pLFxyXG4gICAgZGVmYXVsdFZpc2liaWxpdHk6IHRydWVcclxuICB9LFxyXG4gIHtcclxuICAgIHNsdWc6ICd3YXRlcicsXHJcbiAgICBmaWx0ZXI6ICh7aWR9KSA9PiBpZC5tYXRjaCgvKD89KHdhdGVyfHN0cmVhbXxmZXJyeSkpLyksXHJcbiAgICBkZWZhdWx0VmlzaWJpbGl0eTogdHJ1ZVxyXG4gIH0sXHJcbiAge1xyXG4gICAgc2x1ZzogJ2xhbmQnLFxyXG4gICAgZmlsdGVyOiAoe2lkfSkgPT4gaWQubWF0Y2goLyg/PShwYXJrc3xsYW5kY292ZXJ8aW5kdXN0cmlhbHxzYW5kfGhpbGxzaGFkZSkpLyksXHJcbiAgICBkZWZhdWx0VmlzaWJpbGl0eTogdHJ1ZVxyXG4gIH0sXHJcbiAge1xyXG4gICAgc2x1ZzogJzNkIGJ1aWxkaW5nJyxcclxuICAgIGZpbHRlcjogKCkgPT4gZmFsc2UsXHJcbiAgICBkZWZhdWx0VmlzaWJpbGl0eTogZmFsc2VcclxuICB9XHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgREVGQVVMVF9NQVBfU1RZTEVTID0gW1xyXG4gIHtcclxuICAgIGlkOiAnZGFyaycsXHJcbiAgICBsYWJlbDogJ0RhcmsnLFxyXG4gICAgdXJsOiAnbWFwYm94Oi8vc3R5bGVzL3ViZXJkYXRhL2Nqb3FiYmY2bDlrMzAyc2w5NnR5dmthMDknLFxyXG4gICAgaWNvbjogYCR7SUNPTl9QUkVGSVh9L1VCRVJfREFSS19WMi5wbmdgLFxyXG4gICAgbGF5ZXJHcm91cHM6IERFRkFVTFRfTEFZRVJfR1JPVVBTXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJ2xpZ2h0JyxcclxuICAgIGxhYmVsOiAnTGlnaHQnLFxyXG4gICAgdXJsOiAnbWFwYm94Oi8vc3R5bGVzL3ViZXJkYXRhL2Nqb3FiOWozMzlrMWYyc2w5dDVpYzVibjQnLFxyXG4gICAgaWNvbjogYCR7SUNPTl9QUkVGSVh9L1VCRVJfTElHSFRfVjIucG5nYCxcclxuICAgIGxheWVyR3JvdXBzOiBERUZBVUxUX0xBWUVSX0dST1VQU1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICdtdXRlZCcsXHJcbiAgICBsYWJlbDogJ011dGVkIExpZ2h0JyxcclxuICAgIHVybDogJ21hcGJveDovL3N0eWxlcy91YmVyZGF0YS9jamZ5bDAza3AxdHVsMnNtZjV2MnRiZGQ0JyxcclxuICAgIGljb246IGAke0lDT05fUFJFRklYfS9VQkVSX01VVEVEX0xJR0hULnBuZ2AsXHJcbiAgICBsYXllckdyb3VwczogREVGQVVMVF9MQVlFUl9HUk9VUFNcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAnbXV0ZWRfbmlnaHQnLFxyXG4gICAgbGFiZWw6ICdNdXRlZCBOaWdodCcsXHJcbiAgICB1cmw6ICdtYXBib3g6Ly9zdHlsZXMvdWJlcmRhdGEvY2pmeGhsaWttYWoxYjJzb3l6ZXZueXdncycsXHJcbiAgICBpY29uOiBgJHtJQ09OX1BSRUZJWH0vVUJFUl9NVVRFRF9OSUdIVC5wbmdgLFxyXG4gICAgbGF5ZXJHcm91cHM6IERFRkFVTFRfTEFZRVJfR1JPVVBTXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJ3NhdGVsbGl0ZScsXHJcbiAgICBsYWJlbDogJ1NhdGVsbGl0ZScsXHJcbiAgICB1cmw6IGBtYXBib3g6Ly9zdHlsZXMvbWFwYm94L3NhdGVsbGl0ZS12OWAsXHJcbiAgICBpY29uOiBgJHtJQ09OX1BSRUZJWH0vVUJFUl9TQVRFTExJVEUucG5nYFxyXG4gIH1cclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBHRU9KU09OX0ZJRUxEUyA9IHtcclxuICBnZW9qc29uOiBbJ19nZW9qc29uJywgJ2FsbF9wb2ludHMnLCAnZ2VvanNvbiddXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgSUNPTl9GSUVMRFMgPSB7XHJcbiAgaWNvbjogWydpY29uJ11cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBUUklQX1BPSU5UX0ZJRUxEUyA9IFtcclxuICBbJ2xhdCcsICdsbmcnXSxcclxuICBbJ2xhdCcsICdsb24nXSxcclxuICBbJ2xhdGl0dWRlJywgJ2xvbmdpdHVkZSddXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgVFJJUF9BUkNfRklFTERTID0ge1xyXG4gIGxhdDA6ICdiZWdpbnRyaXAnLFxyXG4gIGxuZzA6ICdiZWdpbnRyaXAnLFxyXG4gIGxhdDE6ICdkcm9wb2ZmJyxcclxuICBsbmcxOiAnZHJvcG9mZidcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBGSUxURVJfVFlQRVMgPSBrZXlNaXJyb3Ioe1xyXG4gIHJhbmdlOiBudWxsLFxyXG4gIHNlbGVjdDogbnVsbCxcclxuICB0aW1lUmFuZ2U6IG51bGwsXHJcbiAgbXVsdGlTZWxlY3Q6IG51bGwsXHJcbiAgcG9seWdvbjogbnVsbFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBTQ0FMRV9UWVBFUyA9IGtleU1pcnJvcih7XHJcbiAgb3JkaW5hbDogbnVsbCxcclxuICBxdWFudGlsZTogbnVsbCxcclxuICBxdWFudGl6ZTogbnVsbCxcclxuICBsaW5lYXI6IG51bGwsXHJcbiAgc3FydDogbnVsbCxcclxuICBsb2c6IG51bGwsXHJcblxyXG4gIC8vIG9yZGluYWwgZG9tYWluIHRvIGxpbmVhciByYW5nZVxyXG4gIHBvaW50OiBudWxsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNDQUxFX0ZVTkMgPSB7XHJcbiAgW1NDQUxFX1RZUEVTLmxpbmVhcl06IHNjYWxlTGluZWFyLFxyXG4gIFtTQ0FMRV9UWVBFUy5xdWFudGl6ZV06IHNjYWxlUXVhbnRpemUsXHJcbiAgW1NDQUxFX1RZUEVTLnF1YW50aWxlXTogc2NhbGVRdWFudGlsZSxcclxuICBbU0NBTEVfVFlQRVMub3JkaW5hbF06IHNjYWxlT3JkaW5hbCxcclxuICBbU0NBTEVfVFlQRVMuc3FydF06IHNjYWxlU3FydCxcclxuICBbU0NBTEVfVFlQRVMubG9nXTogc2NhbGVMb2csXHJcbiAgW1NDQUxFX1RZUEVTLnBvaW50XTogc2NhbGVQb2ludFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IEFMTF9GSUVMRF9UWVBFUyA9IGtleU1pcnJvcih7XHJcbiAgYm9vbGVhbjogbnVsbCxcclxuICBkYXRlOiBudWxsLFxyXG4gIGdlb2pzb246IG51bGwsXHJcbiAgaW50ZWdlcjogbnVsbCxcclxuICByZWFsOiBudWxsLFxyXG4gIHN0cmluZzogbnVsbCxcclxuICB0aW1lc3RhbXA6IG51bGwsXHJcbiAgcG9pbnQ6IG51bGxcclxufSk7XHJcblxyXG4vLyBEYXRhIFRhYmxlXHJcbmV4cG9ydCBjb25zdCBTT1JUX09SREVSID0ga2V5TWlycm9yKHtcclxuICBBU0NFTkRJTkc6IG51bGwsXHJcbiAgREVTQ0VORElORzogbnVsbCxcclxuICBVTlNPUlQ6IG51bGxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgVEFCTEVfT1BUSU9OID0ga2V5TWlycm9yKHtcclxuICBTT1JUX0FTQzogbnVsbCxcclxuICBTT1JUX0RFUzogbnVsbCxcclxuICBVTlNPUlQ6IG51bGwsXHJcbiAgUElOOiBudWxsLFxyXG4gIFVOUElOOiBudWxsLFxyXG4gIENPUFk6IG51bGxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgVEFCTEVfT1BUSU9OX0xJU1QgPSBbXHJcbiAge1xyXG4gICAgdmFsdWU6IFRBQkxFX09QVElPTi5TT1JUX0FTQyxcclxuICAgIGRpc3BsYXk6ICdTb3J0IEFzY2VuZGluZycsXHJcbiAgICBpY29uOiBBcnJvd1VwLFxyXG4gICAgY29uZGl0aW9uOiBwcm9wcyA9PiBwcm9wcy5zb3J0TW9kZSAhPT0gU09SVF9PUkRFUi5BU0NFTkRJTkdcclxuICB9LFxyXG4gIHtcclxuICAgIHZhbHVlOiBUQUJMRV9PUFRJT04uU09SVF9ERVMsXHJcbiAgICBkaXNwbGF5OiAnU29ydCBEZXNjZW5kaW5nJyxcclxuICAgIGljb246IEFycm93RG93bixcclxuICAgIGNvbmRpdGlvbjogcHJvcHMgPT4gcHJvcHMuc29ydE1vZGUgIT09IFNPUlRfT1JERVIuREVTQ0VORElOR1xyXG4gIH0sXHJcbiAge1xyXG4gICAgdmFsdWU6IFRBQkxFX09QVElPTi5VTlNPUlQsXHJcbiAgICBkaXNwbGF5OiAnVW5zb3J0IENvbHVtbicsXHJcbiAgICBpY29uOiBDYW5jZWwsXHJcbiAgICBjb25kaXRpb246IHByb3BzID0+IHByb3BzLmlzU29ydGVkXHJcbiAgfSxcclxuICB7dmFsdWU6IFRBQkxFX09QVElPTi5QSU4sIGRpc3BsYXk6ICdQaW4gQ29sdW1uJywgaWNvbjogUGluLCBjb25kaXRpb246IHByb3BzID0+ICFwcm9wcy5pc1Bpbm5lZH0sXHJcbiAge1xyXG4gICAgdmFsdWU6IFRBQkxFX09QVElPTi5VTlBJTixcclxuICAgIGRpc3BsYXk6ICdVbnBpbiBDb2x1bW4nLFxyXG4gICAgaWNvbjogQ2FuY2VsLFxyXG4gICAgY29uZGl0aW9uOiBwcm9wcyA9PiBwcm9wcy5pc1Bpbm5lZFxyXG4gIH0sXHJcbiAge3ZhbHVlOiBUQUJMRV9PUFRJT04uQ09QWSwgZGlzcGxheTogJ0NvcHkgQ29sdW1uJywgaWNvbjogQ2xpcGJvYXJkfVxyXG5dO1xyXG5cclxuY29uc3QgT1JBTkdFID0gJzI0OCwgMTk0LCAyOCc7XHJcbmNvbnN0IFBJTksgPSAnMjMxLCAxODksIDE5NCc7XHJcbmNvbnN0IFBVUlBMRSA9ICcxNjAsIDEwNiwgMjA2JztcclxuY29uc3QgQkxVRSA9ICcxNDAsIDIxMCwgMjA1JztcclxuY29uc3QgQkxVRTIgPSAnMTA2LCAxNjAsIDIwNic7XHJcbmNvbnN0IEJMVUUzID0gJzAsIDE3MiwgMjM3JztcclxuY29uc3QgR1JFRU4gPSAnMTA2LCAxNjAsIDU2JztcclxuY29uc3QgUkVEID0gJzIzNywgODgsIDEwNic7XHJcblxyXG5leHBvcnQgY29uc3QgSElHSExJR0hfQ09MT1JfM0QgPSBbMjU1LCAyNTUsIDI1NSwgNjBdO1xyXG5cclxuZXhwb3J0IGNvbnN0IEZJRUxEX0NPTE9SUyA9IHtcclxuICBkZWZhdWx0OiBSRURcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBGSUxFRF9UWVBFX0RJU1BMQVkgPSB7XHJcbiAgW0FMTF9GSUVMRF9UWVBFUy5ib29sZWFuXToge1xyXG4gICAgbGFiZWw6ICdib29sJyxcclxuICAgIGNvbG9yOiBQSU5LXHJcbiAgfSxcclxuICBbQUxMX0ZJRUxEX1RZUEVTLmRhdGVdOiB7XHJcbiAgICBsYWJlbDogJ2RhdGUnLFxyXG4gICAgY29sb3I6IFBVUlBMRVxyXG4gIH0sXHJcbiAgW0FMTF9GSUVMRF9UWVBFUy5nZW9qc29uXToge1xyXG4gICAgbGFiZWw6ICdnZW8nLFxyXG4gICAgY29sb3I6IEJMVUUyXHJcbiAgfSxcclxuICBbQUxMX0ZJRUxEX1RZUEVTLmludGVnZXJdOiB7XHJcbiAgICBsYWJlbDogJ2ludCcsXHJcbiAgICBjb2xvcjogT1JBTkdFXHJcbiAgfSxcclxuICBbQUxMX0ZJRUxEX1RZUEVTLnJlYWxdOiB7XHJcbiAgICBsYWJlbDogJ2Zsb2F0JyxcclxuICAgIGNvbG9yOiBPUkFOR0VcclxuICB9LFxyXG4gIFtBTExfRklFTERfVFlQRVMuc3RyaW5nXToge1xyXG4gICAgbGFiZWw6ICdzdHJpbmcnLFxyXG4gICAgY29sb3I6IEJMVUVcclxuICB9LFxyXG4gIFtBTExfRklFTERfVFlQRVMudGltZXN0YW1wXToge1xyXG4gICAgbGFiZWw6ICd0aW1lJyxcclxuICAgIGNvbG9yOiBHUkVFTlxyXG4gIH0sXHJcbiAgLy8gZmllbGQgcGFpcnNcclxuICBbQUxMX0ZJRUxEX1RZUEVTLnBvaW50XToge1xyXG4gICAgbGFiZWw6ICdwb2ludCcsXHJcbiAgICBjb2xvcjogQkxVRTNcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgQ0hBTk5FTF9TQ0FMRVMgPSBrZXlNaXJyb3Ioe1xyXG4gIGNvbG9yOiBudWxsLFxyXG4gIHJhZGl1czogbnVsbCxcclxuICBzaXplOiBudWxsLFxyXG4gIGNvbG9yQWdncjogbnVsbCxcclxuICBzaXplQWdncjogbnVsbFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBBR0dSRUdBVElPTl9UWVBFUyA9IHtcclxuICAvLyBkZWZhdWx0XHJcbiAgY291bnQ6ICdjb3VudCcsXHJcbiAgLy8gbGluZWFyXHJcbiAgYXZlcmFnZTogJ2F2ZXJhZ2UnLFxyXG4gIG1heGltdW06ICdtYXhpbXVtJyxcclxuICBtaW5pbXVtOiAnbWluaW11bScsXHJcbiAgbWVkaWFuOiAnbWVkaWFuJyxcclxuICBzdGRldjogJ3N0ZGV2JyxcclxuICBzdW06ICdzdW0nLFxyXG4gIHZhcmlhbmNlOiAndmFyaWFuY2UnLFxyXG4gIC8vIG9yZGluYWxcclxuICBtb2RlOiAnbW9kZScsXHJcbiAgY291bnRVbmlxdWU6ICdjb3VudCB1bmlxdWUnXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgbGluZWFyRmllbGRTY2FsZUZ1bmN0aW9ucyA9IHtcclxuICBbQ0hBTk5FTF9TQ0FMRVMuY29sb3JdOiBbU0NBTEVfVFlQRVMucXVhbnRpemUsIFNDQUxFX1RZUEVTLnF1YW50aWxlXSxcclxuICBbQ0hBTk5FTF9TQ0FMRVMucmFkaXVzXTogW1NDQUxFX1RZUEVTLnNxcnRdLFxyXG4gIFtDSEFOTkVMX1NDQUxFUy5zaXplXTogW1NDQUxFX1RZUEVTLmxpbmVhciwgU0NBTEVfVFlQRVMuc3FydCwgU0NBTEVfVFlQRVMubG9nXVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGxpbmVhckZpZWxkQWdnclNjYWxlRnVuY3Rpb25zID0ge1xyXG4gIFtDSEFOTkVMX1NDQUxFUy5jb2xvckFnZ3JdOiB7XHJcbiAgICBbQUdHUkVHQVRJT05fVFlQRVMuYXZlcmFnZV06IFtTQ0FMRV9UWVBFUy5xdWFudGl6ZSwgU0NBTEVfVFlQRVMucXVhbnRpbGVdLFxyXG4gICAgW0FHR1JFR0FUSU9OX1RZUEVTLm1heGltdW1dOiBbU0NBTEVfVFlQRVMucXVhbnRpemUsIFNDQUxFX1RZUEVTLnF1YW50aWxlXSxcclxuICAgIFtBR0dSRUdBVElPTl9UWVBFUy5taW5pbXVtXTogW1NDQUxFX1RZUEVTLnF1YW50aXplLCBTQ0FMRV9UWVBFUy5xdWFudGlsZV0sXHJcbiAgICBbQUdHUkVHQVRJT05fVFlQRVMubWVkaWFuXTogW1NDQUxFX1RZUEVTLnF1YW50aXplLCBTQ0FMRV9UWVBFUy5xdWFudGlsZV0sXHJcbiAgICBbQUdHUkVHQVRJT05fVFlQRVMuc3RkZXZdOiBbU0NBTEVfVFlQRVMucXVhbnRpemUsIFNDQUxFX1RZUEVTLnF1YW50aWxlXSxcclxuICAgIFtBR0dSRUdBVElPTl9UWVBFUy5zdW1dOiBbU0NBTEVfVFlQRVMucXVhbnRpemUsIFNDQUxFX1RZUEVTLnF1YW50aWxlXSxcclxuICAgIFtBR0dSRUdBVElPTl9UWVBFUy52YXJpYW5jZV06IFtTQ0FMRV9UWVBFUy5xdWFudGl6ZSwgU0NBTEVfVFlQRVMucXVhbnRpbGVdXHJcbiAgfSxcclxuXHJcbiAgW0NIQU5ORUxfU0NBTEVTLnNpemVBZ2dyXToge1xyXG4gICAgW0FHR1JFR0FUSU9OX1RZUEVTLmF2ZXJhZ2VdOiBbU0NBTEVfVFlQRVMubGluZWFyLCBTQ0FMRV9UWVBFUy5zcXJ0LCBTQ0FMRV9UWVBFUy5sb2ddLFxyXG4gICAgW0FHR1JFR0FUSU9OX1RZUEVTLm1heGltdW1dOiBbU0NBTEVfVFlQRVMubGluZWFyLCBTQ0FMRV9UWVBFUy5zcXJ0LCBTQ0FMRV9UWVBFUy5sb2ddLFxyXG4gICAgW0FHR1JFR0FUSU9OX1RZUEVTLm1pbmltdW1dOiBbU0NBTEVfVFlQRVMubGluZWFyLCBTQ0FMRV9UWVBFUy5zcXJ0LCBTQ0FMRV9UWVBFUy5sb2ddLFxyXG4gICAgW0FHR1JFR0FUSU9OX1RZUEVTLm1lZGlhbl06IFtTQ0FMRV9UWVBFUy5saW5lYXIsIFNDQUxFX1RZUEVTLnNxcnQsIFNDQUxFX1RZUEVTLmxvZ10sXHJcbiAgICBbQUdHUkVHQVRJT05fVFlQRVMuc3RkZXZdOiBbU0NBTEVfVFlQRVMubGluZWFyLCBTQ0FMRV9UWVBFUy5zcXJ0LCBTQ0FMRV9UWVBFUy5sb2ddLFxyXG4gICAgW0FHR1JFR0FUSU9OX1RZUEVTLnN1bV06IFtTQ0FMRV9UWVBFUy5saW5lYXIsIFNDQUxFX1RZUEVTLnNxcnQsIFNDQUxFX1RZUEVTLmxvZ10sXHJcbiAgICBbQUdHUkVHQVRJT05fVFlQRVMudmFyaWFuY2VdOiBbU0NBTEVfVFlQRVMubGluZWFyLCBTQ0FMRV9UWVBFUy5zcXJ0LCBTQ0FMRV9UWVBFUy5sb2ddXHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IG9yZGluYWxGaWVsZFNjYWxlRnVuY3Rpb25zID0ge1xyXG4gIFtDSEFOTkVMX1NDQUxFUy5jb2xvcl06IFtTQ0FMRV9UWVBFUy5vcmRpbmFsXSxcclxuICBbQ0hBTk5FTF9TQ0FMRVMucmFkaXVzXTogW1NDQUxFX1RZUEVTLnBvaW50XSxcclxuICBbQ0hBTk5FTF9TQ0FMRVMuc2l6ZV06IFtTQ0FMRV9UWVBFUy5wb2ludF1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBvcmRpbmFsRmllbGRBZ2dyU2NhbGVGdW5jdGlvbnMgPSB7XHJcbiAgLy8gW0NIQU5ORUxfU0NBTEVTLmNvbG9yQWdncl06IFtTQ0FMRV9UWVBFUy5vcmRpbmFsLCBTQ0FMRV9UWVBFUy5saW5lYXJdLFxyXG4gIFtDSEFOTkVMX1NDQUxFUy5jb2xvckFnZ3JdOiB7XHJcbiAgICBbQUdHUkVHQVRJT05fVFlQRVMubW9kZV06IFtTQ0FMRV9UWVBFUy5vcmRpbmFsXSxcclxuICAgIFtBR0dSRUdBVElPTl9UWVBFUy5jb3VudFVuaXF1ZV06IFtTQ0FMRV9UWVBFUy5xdWFudGl6ZSwgU0NBTEVfVFlQRVMucXVhbnRpbGVdXHJcbiAgfSxcclxuXHJcbiAgLy8gQ3VycmVudGx5IGRvZXNuJ3Qgc3VwcG9ydCB5ZXRcclxuICBbQ0hBTk5FTF9TQ0FMRVMuc2l6ZUFnZ3JdOiB7fVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IG5vdFN1cHBvcnRlZFNjYWxlT3B0cyA9IHtcclxuICBbQ0hBTk5FTF9TQ0FMRVMuY29sb3JdOiBbXSxcclxuICBbQ0hBTk5FTF9TQ0FMRVMucmFkaXVzXTogW10sXHJcbiAgW0NIQU5ORUxfU0NBTEVTLnNpemVdOiBbXVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IG5vdFN1cHBvcnRBZ2dyT3B0cyA9IHtcclxuICBbQ0hBTk5FTF9TQ0FMRVMuY29sb3JBZ2dyXToge30sXHJcbiAgW0NIQU5ORUxfU0NBTEVTLnNpemVBZ2dyXToge31cclxufTtcclxuXHJcbi8qKlxyXG4gKiBEZWZhdWx0IGFnZ3JlZ2F0aW9uIGFyZSBiYXNlZCBvbiBvY3VudFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IERFRkFVTFRfQUdHUkVHQVRJT04gPSB7XHJcbiAgW0NIQU5ORUxfU0NBTEVTLmNvbG9yQWdncl06IHtcclxuICAgIFtBR0dSRUdBVElPTl9UWVBFUy5jb3VudF06IFtTQ0FMRV9UWVBFUy5xdWFudGl6ZSwgU0NBTEVfVFlQRVMucXVhbnRpbGVdXHJcbiAgfSxcclxuICBbQ0hBTk5FTF9TQ0FMRVMuc2l6ZUFnZ3JdOiB7XHJcbiAgICBbQUdHUkVHQVRJT05fVFlQRVMuY291bnRdOiBbU0NBTEVfVFlQRVMubGluZWFyLCBTQ0FMRV9UWVBFUy5zcXJ0LCBTQ0FMRV9UWVBFUy5sb2ddXHJcbiAgfVxyXG59O1xyXG5cclxuLyoqXHJcbiAqIERlZmluZSB3aGF0IHR5cGUgb2Ygc2NhbGUgb3BlcmF0aW9uIGlzIGFsbG93ZWQgb24gZWFjaCB0eXBlIG9mIGZpZWxkc1xyXG4gKi9cclxuZXhwb3J0IGNvbnN0IEZJRUxEX09QVFMgPSB7XHJcbiAgc3RyaW5nOiB7XHJcbiAgICB0eXBlOiAnY2F0ZWdvcmljYWwnLFxyXG4gICAgc2NhbGU6IHtcclxuICAgICAgLi4ub3JkaW5hbEZpZWxkU2NhbGVGdW5jdGlvbnMsXHJcbiAgICAgIC4uLm9yZGluYWxGaWVsZEFnZ3JTY2FsZUZ1bmN0aW9uc1xyXG4gICAgfSxcclxuICAgIGZvcm1hdDoge1xyXG4gICAgICBsZWdlbmQ6IGQgPT4gZCxcclxuICAgICAgdG9vbHRpcDogW11cclxuICAgIH1cclxuICB9LFxyXG4gIHJlYWw6IHtcclxuICAgIHR5cGU6ICdudW1lcmljYWwnLFxyXG4gICAgc2NhbGU6IHtcclxuICAgICAgLi4ubGluZWFyRmllbGRTY2FsZUZ1bmN0aW9ucyxcclxuICAgICAgLi4ubGluZWFyRmllbGRBZ2dyU2NhbGVGdW5jdGlvbnNcclxuICAgIH0sXHJcbiAgICBmb3JtYXQ6IHtcclxuICAgICAgbGVnZW5kOiBkID0+IGQsXHJcbiAgICAgIHRvb2x0aXA6IFtUT09MVElQX0ZPUk1BVF9UWVBFUy5ERUNJTUFMLCBUT09MVElQX0ZPUk1BVF9UWVBFUy5QRVJDRU5UQUdFXVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgdGltZXN0YW1wOiB7XHJcbiAgICB0eXBlOiAndGltZScsXHJcbiAgICBzY2FsZToge1xyXG4gICAgICAuLi5saW5lYXJGaWVsZFNjYWxlRnVuY3Rpb25zLFxyXG4gICAgICAuLi5ub3RTdXBwb3J0QWdnck9wdHNcclxuICAgIH0sXHJcbiAgICBmb3JtYXQ6IHtcclxuICAgICAgbGVnZW5kOiBkID0+IGQsXHJcbiAgICAgIHRvb2x0aXA6IFtUT09MVElQX0ZPUk1BVF9UWVBFUy5EQVRFLCBUT09MVElQX0ZPUk1BVF9UWVBFUy5EQVRFX1RJTUVdXHJcbiAgICB9XHJcbiAgfSxcclxuICBpbnRlZ2VyOiB7XHJcbiAgICB0eXBlOiAnbnVtZXJpY2FsJyxcclxuICAgIHNjYWxlOiB7XHJcbiAgICAgIC4uLmxpbmVhckZpZWxkU2NhbGVGdW5jdGlvbnMsXHJcbiAgICAgIC4uLmxpbmVhckZpZWxkQWdnclNjYWxlRnVuY3Rpb25zXHJcbiAgICB9LFxyXG4gICAgZm9ybWF0OiB7XHJcbiAgICAgIGxlZ2VuZDogZCA9PiBkLFxyXG4gICAgICB0b29sdGlwOiBbVE9PTFRJUF9GT1JNQVRfVFlQRVMuREVDSU1BTCwgVE9PTFRJUF9GT1JNQVRfVFlQRVMuUEVSQ0VOVEFHRV1cclxuICAgIH1cclxuICB9LFxyXG4gIGJvb2xlYW46IHtcclxuICAgIHR5cGU6ICdib29sZWFuJyxcclxuICAgIHNjYWxlOiB7XHJcbiAgICAgIC4uLm9yZGluYWxGaWVsZFNjYWxlRnVuY3Rpb25zLFxyXG4gICAgICAuLi5vcmRpbmFsRmllbGRBZ2dyU2NhbGVGdW5jdGlvbnNcclxuICAgIH0sXHJcbiAgICBmb3JtYXQ6IHtcclxuICAgICAgbGVnZW5kOiBkID0+IGQsXHJcbiAgICAgIHRvb2x0aXA6IFtdXHJcbiAgICB9XHJcbiAgfSxcclxuICBkYXRlOiB7XHJcbiAgICBzY2FsZToge1xyXG4gICAgICAuLi5vcmRpbmFsRmllbGRTY2FsZUZ1bmN0aW9ucyxcclxuICAgICAgLi4ub3JkaW5hbEZpZWxkQWdnclNjYWxlRnVuY3Rpb25zXHJcbiAgICB9LFxyXG4gICAgZm9ybWF0OiB7XHJcbiAgICAgIGxlZ2VuZDogZCA9PiBkLFxyXG4gICAgICB0b29sdGlwOiBbVE9PTFRJUF9GT1JNQVRfVFlQRVMuREFURV1cclxuICAgIH1cclxuICB9LFxyXG4gIGdlb2pzb246IHtcclxuICAgIHR5cGU6ICdnZW9tZXRyeScsXHJcbiAgICBzY2FsZToge1xyXG4gICAgICAuLi5ub3RTdXBwb3J0ZWRTY2FsZU9wdHMsXHJcbiAgICAgIC4uLm5vdFN1cHBvcnRBZ2dyT3B0c1xyXG4gICAgfSxcclxuICAgIGZvcm1hdDoge1xyXG4gICAgICBsZWdlbmQ6IGQgPT4gJy4uLicsXHJcbiAgICAgIHRvb2x0aXA6IFtdXHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IENIQU5ORUxfU0NBTEVfU1VQUE9SVEVEX0ZJRUxEUyA9IE9iamVjdC5rZXlzKENIQU5ORUxfU0NBTEVTKS5yZWR1Y2UoXHJcbiAgKGFjY3UsIGtleSkgPT4gKHtcclxuICAgIC4uLmFjY3UsXHJcbiAgICBba2V5XTogT2JqZWN0LmtleXMoRklFTERfT1BUUykuZmlsdGVyKGZ0ID0+IE9iamVjdC5rZXlzKEZJRUxEX09QVFNbZnRdLnNjYWxlW2tleV0pLmxlbmd0aClcclxuICB9KSxcclxuICB7fVxyXG4pO1xyXG5cclxuLy8gVE9ETzogc2hhbiBkZWxldGUgdXNlIG9mIExBWUVSX1RZUEVTXHJcbmV4cG9ydCBjb25zdCBMQVlFUl9UWVBFUyA9IGtleU1pcnJvcih7XHJcbiAgcG9pbnQ6IG51bGwsXHJcbiAgYXJjOiBudWxsLFxyXG4gIGNsdXN0ZXI6IG51bGwsXHJcbiAgbGluZTogbnVsbCxcclxuICBncmlkOiBudWxsLFxyXG4gIGdlb2pzb246IG51bGwsXHJcbiAgaWNvbjogbnVsbCxcclxuICBoZWF0bWFwOiBudWxsLFxyXG4gIGhleGFnb246IG51bGxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgREVGQVVMVF9MQVlFUl9DT0xPUiA9IHtcclxuICB0cmlwQXJjOiAnIzkyMjZDNicsXHJcbiAgYmVnaW50cmlwX2xhdDogJyMxRTk2QkUnLFxyXG4gIGRyb3BvZmZfbGF0OiAnI0ZGOTkxRicsXHJcbiAgcmVxdWVzdF9sYXQ6ICcjNTJBMzUzJ1xyXG59O1xyXG5cclxuLy8gbGV0IHVzZXIgcGFzcyBpbiBkZWZhdWx0IHRvb2x0aXAgZmllbGRzXHJcbmV4cG9ydCBjb25zdCBERUZBVUxUX1RPT0xUSVBfRklFTERTID0gW107XHJcblxyXG5leHBvcnQgY29uc3QgTk9fVkFMVUVfQ09MT1IgPSBbMCwgMCwgMCwgMF07XHJcblxyXG5leHBvcnQgY29uc3QgTEFZRVJfQkxFTkRJTkdTID0ge1xyXG4gIGFkZGl0aXZlOiB7XHJcbiAgICBsYWJlbDogJ2xheWVyQmxlbmRpbmcuYWRkaXRpdmUnLFxyXG4gICAgYmxlbmRGdW5jOiBbJ1NSQ19BTFBIQScsICdEU1RfQUxQSEEnXSxcclxuICAgIGJsZW5kRXF1YXRpb246ICdGVU5DX0FERCdcclxuICB9LFxyXG4gIG5vcm1hbDoge1xyXG4gICAgLy8gcmVmZXJlbmNlIHRvXHJcbiAgICAvLyBodHRwczovL2xpbW51LmNvbS93ZWJnbC1ibGVuZGluZy15b3VyZS1wcm9iYWJseS13cm9uZy9cclxuICAgIGxhYmVsOiAnbGF5ZXJCbGVuZGluZy5ub3JtYWwnLFxyXG4gICAgYmxlbmRGdW5jOiBbJ1NSQ19BTFBIQScsICdPTkVfTUlOVVNfU1JDX0FMUEhBJywgJ09ORScsICdPTkVfTUlOVVNfU1JDX0FMUEhBJ10sXHJcbiAgICBibGVuZEVxdWF0aW9uOiBbJ0ZVTkNfQUREJywgJ0ZVTkNfQUREJ11cclxuICB9LFxyXG4gIHN1YnRyYWN0aXZlOiB7XHJcbiAgICBsYWJlbDogJ2xheWVyQmxlbmRpbmcuc3VidHJhY3RpdmUnLFxyXG4gICAgYmxlbmRGdW5jOiBbJ09ORScsICdPTkVfTUlOVVNfRFNUX0NPTE9SJywgJ1NSQ19BTFBIQScsICdEU1RfQUxQSEEnXSxcclxuICAgIGJsZW5kRXF1YXRpb246IFsnRlVOQ19TVUJUUkFDVCcsICdGVU5DX0FERCddXHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IE1BWF9ERUZBVUxUX1RPT0xUSVBTID0gNTtcclxuXHJcbmV4cG9ydCBjb25zdCBSRVNPTFVUSU9OUyA9IGtleU1pcnJvcih7XHJcbiAgT05FX1g6IG51bGwsXHJcbiAgVFdPX1g6IG51bGxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgRVhQT1JUX0lNR19SQVRJT1MgPSBrZXlNaXJyb3Ioe1xyXG4gIFNDUkVFTjogbnVsbCxcclxuICBGT1VSX0JZX1RIUkVFOiBudWxsLFxyXG4gIFNJWFRFRU5fQllfTklORTogbnVsbCxcclxuICBDVVNUT006IG51bGxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgRVhQT1JUX0lNR19SQVRJT19PUFRJT05TID0gW1xyXG4gIHtcclxuICAgIGlkOiBFWFBPUlRfSU1HX1JBVElPUy5TQ1JFRU4sXHJcbiAgICBsYWJlbDogJ21vZGFsLmV4cG9ydEltYWdlLnJhdGlvT3JpZ2luYWxTY3JlZW4nLFxyXG4gICAgZ2V0U2l6ZTogKHNjcmVlblcsIHNjcmVlbkgpID0+ICh7d2lkdGg6IHNjcmVlblcsIGhlaWdodDogc2NyZWVuSH0pXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogRVhQT1JUX0lNR19SQVRJT1MuQ1VTVE9NLFxyXG4gICAgaGlkZGVuOiB0cnVlLFxyXG4gICAgbGFiZWw6ICdtb2RhbC5leHBvcnRJbWFnZS5yYXRpb0N1c3RvbScsXHJcbiAgICBnZXRTaXplOiAobWFwVywgbWFwSCkgPT4gKHt3aWR0aDogbWFwVywgaGVpZ2h0OiBtYXBIfSlcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiBFWFBPUlRfSU1HX1JBVElPUy5GT1VSX0JZX1RIUkVFLFxyXG4gICAgbGFiZWw6ICdtb2RhbC5leHBvcnRJbWFnZS5yYXRpbzRfMycsXHJcbiAgICBnZXRTaXplOiAoc2NyZWVuVywgc2NyZWVuSCkgPT4gKHtcclxuICAgICAgd2lkdGg6IHNjcmVlblcsXHJcbiAgICAgIGhlaWdodDogTWF0aC5yb3VuZChzY3JlZW5XICogMC43NSlcclxuICAgIH0pXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogRVhQT1JUX0lNR19SQVRJT1MuU0lYVEVFTl9CWV9OSU5FLFxyXG4gICAgbGFiZWw6ICdtb2RhbC5leHBvcnRJbWFnZS5yYXRpbzE2XzknLFxyXG4gICAgZ2V0U2l6ZTogKHNjcmVlblcsIHNjcmVlbkgpID0+ICh7XHJcbiAgICAgIHdpZHRoOiBzY3JlZW5XLFxyXG4gICAgICBoZWlnaHQ6IE1hdGgucm91bmQoc2NyZWVuVyAqIDAuNTYyNSlcclxuICAgIH0pXHJcbiAgfVxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IEVYUE9SVF9JTUdfUkVTT0xVVElPTl9PUFRJT05TID0gW1xyXG4gIHtcclxuICAgIGlkOiBSRVNPTFVUSU9OUy5PTkVfWCxcclxuICAgIGxhYmVsOiAnMXgnLFxyXG4gICAgYXZhaWxhYmxlOiB0cnVlLFxyXG4gICAgc2NhbGU6IDEsXHJcbiAgICBnZXRTaXplOiAoc2NyZWVuVywgc2NyZWVuSCkgPT4gKHtcclxuICAgICAgd2lkdGg6IHNjcmVlblcsXHJcbiAgICAgIGhlaWdodDogc2NyZWVuSFxyXG4gICAgfSlcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiBSRVNPTFVUSU9OUy5UV09fWCxcclxuICAgIGxhYmVsOiAnMngnLFxyXG4gICAgYXZhaWxhYmxlOiB0cnVlLFxyXG4gICAgc2NhbGU6IDIsXHJcbiAgICBnZXRTaXplOiAoc2NyZWVuVywgc2NyZWVuSCkgPT4gKHtcclxuICAgICAgd2lkdGg6IHNjcmVlblcgKiAyLFxyXG4gICAgICBoZWlnaHQ6IHNjcmVlbkggKiAyXHJcbiAgICB9KVxyXG4gIH1cclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBFWFBPUlRfREFUQV9UWVBFID0ga2V5TWlycm9yKHtcclxuICBDU1Y6IG51bGxcclxuICAvLyBTSEFQRUZJTEU6IG51bGwsXHJcbiAgLy8gSlNPTjogbnVsbCxcclxuICAvLyBHRU9KU09OOiBudWxsLFxyXG4gIC8vIFRPUE9KU09OOiBudWxsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IEVYUE9SVF9EQVRBX1RZUEVfT1BUSU9OUyA9IFtcclxuICB7XHJcbiAgICBpZDogRVhQT1JUX0RBVEFfVFlQRS5DU1YsXHJcbiAgICBsYWJlbDogRVhQT1JUX0RBVEFfVFlQRS5DU1YudG9Mb3dlckNhc2UoKSxcclxuICAgIGF2YWlsYWJsZTogdHJ1ZVxyXG4gIH1cclxuICAvLyB7XHJcbiAgLy8gICBpZDogRVhQT1JUX0RBVEFfVFlQRS5TSEFQRUZJTEUsXHJcbiAgLy8gICBsYWJlbDogJ3NoYXBlZmlsZScsXHJcbiAgLy8gICBhdmFpbGFibGU6IGZhbHNlXHJcbiAgLy8gfSxcclxuICAvLyB7XHJcbiAgLy8gICBpZDogRVhQT1JUX0RBVEFfVFlQRS5KU09OLFxyXG4gIC8vICAgbGFiZWw6ICdqc29uJyxcclxuICAvLyAgIGF2YWlsYWJsZTogZmFsc2VcclxuICAvLyB9LFxyXG4gIC8vIHtcclxuICAvLyAgIGlkOiBFWFBPUlRfREFUQV9UWVBFLkdFT0pTT04sXHJcbiAgLy8gICBsYWJlbDogJ2dlb2pzb24nLFxyXG4gIC8vICAgYXZhaWxhYmxlOiBmYWxzZVxyXG4gIC8vIH0sXHJcbiAgLy8ge1xyXG4gIC8vICAgaWQ6IEVYUE9SVF9EQVRBX1RZUEUuVE9QT0pTT04sXHJcbiAgLy8gICBsYWJlbDogJ3RvcG9qc29uJyxcclxuICAvLyAgIGF2YWlsYWJsZTogZmFsc2VcclxuICAvLyB9XHJcbl07XHJcblxyXG4vLyBFeHBvcnQgbWFwIHR5cGVzXHJcbmV4cG9ydCBjb25zdCBFWFBPUlRfTUFQX0ZPUk1BVFMgPSBrZXlNaXJyb3Ioe1xyXG4gIEhUTUw6IG51bGwsXHJcbiAgSlNPTjogbnVsbFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBFWFBPUlRfSFRNTF9NQVBfTU9ERVMgPSBrZXlNaXJyb3Ioe1xyXG4gIFJFQUQ6IG51bGwsXHJcbiAgRURJVDogbnVsbFxyXG59KTtcclxuXHJcbi8vIEV4cG9ydCBtYXAgb3B0aW9uc1xyXG5leHBvcnQgY29uc3QgRVhQT1JUX01BUF9GT1JNQVRfT1BUSU9OUyA9IE9iamVjdC5lbnRyaWVzKEVYUE9SVF9NQVBfRk9STUFUUykubWFwKGVudHJ5ID0+ICh7XHJcbiAgaWQ6IGVudHJ5WzBdLFxyXG4gIGxhYmVsOiBlbnRyeVsxXS50b0xvd2VyQ2FzZSgpLFxyXG4gIGF2YWlsYWJsZTogdHJ1ZVxyXG59KSk7XHJcblxyXG5leHBvcnQgY29uc3QgRVhQT1JUX0hUTUxfTUFQX01PREVfT1BUSU9OUyA9IE9iamVjdC5lbnRyaWVzKEVYUE9SVF9IVE1MX01BUF9NT0RFUykubWFwKGVudHJ5ID0+ICh7XHJcbiAgaWQ6IGVudHJ5WzBdLFxyXG4gIGxhYmVsOiBgbW9kYWwuZXhwb3J0TWFwLmh0bWwuJHtlbnRyeVsxXS50b0xvd2VyQ2FzZSgpfWAsXHJcbiAgYXZhaWxhYmxlOiB0cnVlLFxyXG4gIHVybDogZ2V0SFRNTE1hcE1vZGVUaWxlVXJsKGVudHJ5WzFdKVxyXG59KSk7XHJcblxyXG5leHBvcnQgY29uc3QgREVGQVVMVF9VVUlEX0NPVU5UID0gNjtcclxuXHJcbmV4cG9ydCBjb25zdCBERUZBVUxUX05PVElGSUNBVElPTl9NRVNTQUdFID0gJ01FU1NBR0VfTk9UX1BST1ZJREVEJztcclxuXHJcbmV4cG9ydCBjb25zdCBERUZBVUxUX05PVElGSUNBVElPTl9UWVBFUyA9IGtleU1pcnJvcih7XHJcbiAgaW5mbzogbnVsbCxcclxuICBlcnJvcjogbnVsbCxcclxuICB3YXJuaW5nOiBudWxsLFxyXG4gIHN1Y2Nlc3M6IG51bGxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgREVGQVVMVF9OT1RJRklDQVRJT05fVE9QSUNTID0ga2V5TWlycm9yKHtcclxuICBnbG9iYWw6IG51bGwsXHJcbiAgZmlsZTogbnVsbFxyXG59KTtcclxuXHJcbi8vIEFuaW1hdGlvblxyXG5leHBvcnQgY29uc3QgQkFTRV9TUEVFRCA9IDYwMDtcclxuZXhwb3J0IGNvbnN0IERFRkFVTFRfVElNRV9GT1JNQVQgPSAnTU0vREQvWVkgSEg6bW06c3NhJztcclxuZXhwb3J0IGNvbnN0IFNQRUVEX0NPTlRST0xfUkFOR0UgPSBbMCwgMTBdO1xyXG5cclxuLy8gV2UgY291bGQgdXNlIGRpcmVjdGx5IHJlYWN0LW1hcC1nbC1kcmF3IEVkaXRvck1vZGUgYnV0IHRoaXMgd291bGRcclxuLy8gY3JlYXRlIGEgZGlyZWN0IGRlcGVuZGVuY3kgd2l0aCByZWFjdC1tYXAtZ2wtZHJhd1xyXG4vLyBDcmVhdGVkIHRoaXMgbWFwIHRvIGJlIGluZGVwZW5kZW50IGZyb20gcmVhY3QtbWFwLWdsLWRyYXdcclxuZXhwb3J0IGNvbnN0IEVESVRPUl9NT0RFUyA9IHtcclxuICBSRUFEX09OTFk6IEVkaXRvck1vZGVzLlJFQURfT05MWSxcclxuICBEUkFXX1BPTFlHT046IEVkaXRvck1vZGVzLkRSQVdfUE9MWUdPTixcclxuICBEUkFXX1JFQ1RBTkdMRTogRWRpdG9yTW9kZXMuRFJBV19SRUNUQU5HTEUsXHJcbiAgRURJVDogRWRpdG9yTW9kZXMuRURJVF9WRVJURVhcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBFRElUT1JfQVZBSUxBQkxFX0xBWUVSUyA9IFtcclxuICBMQVlFUl9UWVBFUy5wb2ludCxcclxuICBMQVlFUl9UWVBFUy5oZXhhZ29uLFxyXG4gIExBWUVSX1RZUEVTLmFyYyxcclxuICBMQVlFUl9UWVBFUy5saW5lXHJcbl07XHJcbi8vIEdQVSBGaWx0ZXJpbmdcclxuLyoqXHJcbiAqIE1heCBudW1iZXIgb2YgZmlsdGVyIHZhbHVlIGJ1ZmZlcnMgdGhhdCBkZWNrLmdsIHByb3ZpZGVzXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgTUFYX0dQVV9GSUxURVJTID0gNDtcclxuZXhwb3J0IGNvbnN0IE1BUF9USFVNQk5BSUxfRElNRU5TSU9OID0ge1xyXG4gIHdpZHRoOiAzMDAsXHJcbiAgaGVpZ2h0OiAyMDBcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBNQVBfSU5GT19DSEFSQUNURVIgPSB7XHJcbiAgdGl0bGU6IDEwMCxcclxuICBkZXNjcmlwdGlvbjogMTAwXHJcbn07XHJcblxyXG4vLyBMb2FkIGRhdGFcclxuZXhwb3J0IGNvbnN0IExPQURJTkdfTUVUSE9EUyA9IGtleU1pcnJvcih7XHJcbiAgdXBsb2FkOiBudWxsLFxyXG4gIHN0b3JhZ2U6IG51bGxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgREFUQVNFVF9GT1JNQVRTID0ga2V5TWlycm9yKHtcclxuICByb3c6IG51bGwsXHJcbiAgZ2VvanNvbjogbnVsbCxcclxuICBjc3Y6IG51bGwsXHJcbiAga2VwbGVyZ2w6IG51bGxcclxufSk7XHJcbiJdfQ==