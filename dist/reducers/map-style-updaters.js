"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMapStyles = getMapStyles;
exports.getInitialInputStyle = getInitialInputStyle;
exports.set3dBuildingColorUpdater = exports.addCustomMapStyleUpdater = exports.inputMapStyleUpdater = exports.loadCustomMapStyleUpdater = exports.resetMapConfigMapStyleUpdater = exports.receiveMapConfigUpdater = exports.requestMapStylesUpdater = exports.loadMapStyleErrUpdater = exports.loadMapStylesUpdater = exports.mapStyleChangeUpdater = exports.mapConfigChangeUpdater = exports.initMapStyleUpdater = exports.INITIAL_MAP_STYLE = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _tasks = _interopRequireWildcard(require("react-palm/tasks"));

var _lodash = _interopRequireDefault(require("lodash.clonedeep"));

var _mapboxGlStyleEditor = require("../utils/map-style-utils/mapbox-gl-style-editor");

var _defaultSettings = require("../constants/default-settings");

var _utils = require("../utils/utils");

var _tasks2 = require("../tasks/tasks");

var _mapStyleActions = require("../actions/map-style-actions");

var _d3Color = require("d3-color");

var _colorUtils = require("../utils/color-utils");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var DEFAULT_BLDG_COLOR = '#D1CEC7';
/**
 * @return {import('./map-style-updaters').MapStyle}
 */

var getDefaultState = function getDefaultState() {
  var visibleLayerGroups = {};
  var styleType = 'dark';
  var topLayerGroups = {};
  return {
    styleType: styleType,
    visibleLayerGroups: visibleLayerGroups,
    topLayerGroups: topLayerGroups,
    mapStyles: _defaultSettings.DEFAULT_MAP_STYLES.reduce(function (accu, curr) {
      return _objectSpread(_objectSpread({}, accu), {}, (0, _defineProperty2["default"])({}, curr.id, curr));
    }, {}),
    // save mapbox access token
    mapboxApiAccessToken: null,
    mapboxApiUrl: _defaultSettings.DEFAULT_MAPBOX_API_URL,
    mapStylesReplaceDefault: false,
    inputStyle: getInitialInputStyle(),
    threeDBuildingColor: (0, _colorUtils.hexToRgb)(DEFAULT_BLDG_COLOR),
    custom3DBuildingColor: false
  };
};
/**
 * Updaters for `mapStyle`. Can be used in your root reducer to directly modify kepler.gl's state.
 * Read more about [Using updaters](../advanced-usage/using-updaters.md)
 * @public
 * @example
 *
 * import keplerGlReducer, {mapStyleUpdaters} from 'kepler.gl/reducers';
 * // Root Reducer
 * const reducers = combineReducers({
 *  keplerGl: keplerGlReducer,
 *  app: appReducer
 * });
 *
 * const composedReducer = (state, action) => {
 *  switch (action.type) {
 *    // click button to hide label from background map
 *    case 'CLICK_BUTTON':
 *      return {
 *        ...state,
 *        keplerGl: {
 *          ...state.keplerGl,
 *          foo: {
 *             ...state.keplerGl.foo,
 *             mapStyle: mapStyleUpdaters.mapConfigChangeUpdater(
 *               mapStyle,
 *               {payload: {visibleLayerGroups: {label: false, road: true, background: true}}}
 *             )
 *          }
 *        }
 *      };
 *  }
 *  return reducers(state, action);
 * };
 *
 * export default composedReducer;
 */

/* eslint-disable no-unused-vars */


var mapStyleUpdaters = null;
/* eslint-enable no-unused-vars */

/**
 * Default initial `mapStyle`
 * @memberof mapStyleUpdaters
 * @constant
 * @property styleType - Default: `'dark'`
 * @property visibleLayerGroups - Default: `{}`
 * @property topLayerGroups - Default: `{}`
 * @property mapStyles - mapping from style key to style object
 * @property mapboxApiAccessToken - Default: `null`
 * @Property mapboxApiUrl - Default null
 * @Property mapStylesReplaceDefault - Default: `false`
 * @property inputStyle - Default: `{}`
 * @property threeDBuildingColor - Default: `[r, g, b]`
 * @type {import('./map-style-updaters').MapStyle}
 * @public
 */

var INITIAL_MAP_STYLE = getDefaultState();
/**
 * Create two map styles from preset map style, one for top map one for bottom
 *
 * @param {string} styleType - current map style
 * @param {Object} visibleLayerGroups - visible layers of bottom map
 * @param {Object} topLayerGroups - visible layers of top map
 * @param {Object} mapStyles - a dictionary of all map styles
 * @returns {Object} bottomMapStyle | topMapStyle | isRaster
 */

exports.INITIAL_MAP_STYLE = INITIAL_MAP_STYLE;

function getMapStyles(_ref) {
  var styleType = _ref.styleType,
      visibleLayerGroups = _ref.visibleLayerGroups,
      topLayerGroups = _ref.topLayerGroups,
      mapStyles = _ref.mapStyles;
  var mapStyle = mapStyles[styleType]; // style might not be loaded yet

  if (!mapStyle || !mapStyle.style) {
    return {};
  }

  var editable = Object.keys(visibleLayerGroups).length;
  var bottomMapStyle = !editable ? mapStyle.style : (0, _mapboxGlStyleEditor.editBottomMapStyle)({
    id: styleType,
    mapStyle: mapStyle,
    visibleLayerGroups: visibleLayerGroups
  });
  var hasTopLayer = editable && Object.values(topLayerGroups).some(function (v) {
    return v;
  }); // mute top layer if not visible in bottom layer

  var topLayers = hasTopLayer && Object.keys(topLayerGroups).reduce(function (accu, key) {
    return _objectSpread(_objectSpread({}, accu), {}, (0, _defineProperty2["default"])({}, key, topLayerGroups[key] && visibleLayerGroups[key]));
  }, {});
  var topMapStyle = hasTopLayer ? (0, _mapboxGlStyleEditor.editTopMapStyle)({
    id: styleType,
    mapStyle: mapStyle,
    visibleLayerGroups: topLayers
  }) : null;
  return {
    bottomMapStyle: bottomMapStyle,
    topMapStyle: topMapStyle,
    editable: editable
  };
}

function findLayerFillColor(layer) {
  return layer && layer.paint && layer.paint['background-color'];
}

function get3DBuildingColor(style) {
  // set building color to be the same as the background color.
  if (!style.style) {
    return (0, _colorUtils.hexToRgb)(DEFAULT_BLDG_COLOR);
  }

  var backgroundLayer = (style.style.layers || []).find(function (_ref2) {
    var id = _ref2.id;
    return id === 'background';
  });
  var buildingLayer = (style.style.layers || []).find(function (_ref3) {
    var id = _ref3.id;
    return id.match(/building/);
  });
  var buildingColor = findLayerFillColor(buildingLayer) || findLayerFillColor(backgroundLayer) || DEFAULT_BLDG_COLOR; // brighten or darken building based on style

  var operation = style.id.match(/(?=(dark|night))/) ? 'brighter' : 'darker';
  var alpha = 0.2;
  var rgbObj = (0, _d3Color.rgb)(buildingColor)[operation]([alpha]);
  return [rgbObj.r, rgbObj.g, rgbObj.b];
}

function getLayerGroupsFromStyle(style) {
  return Array.isArray(style.layers) ? _defaultSettings.DEFAULT_LAYER_GROUPS.filter(function (lg) {
    return style.layers.filter(lg.filter).length;
  }) : [];
} // Updaters

/**
 * Propagate `mapStyle` reducer with `mapboxApiAccessToken` and `mapStylesReplaceDefault`.
 * if mapStylesReplaceDefault is true mapStyles is emptied; loadMapStylesUpdater() will
 * populate mapStyles.
 *
 * @memberof mapStyleUpdaters
 * @type {typeof import('./map-style-updaters').initMapStyleUpdater}
 * @public
 */


var initMapStyleUpdater = function initMapStyleUpdater(state, action) {
  return _objectSpread(_objectSpread({}, state), {}, {
    // save mapbox access token to map style state
    mapboxApiAccessToken: (action.payload || {}).mapboxApiAccessToken,
    mapboxApiUrl: (action.payload || {}).mapboxApiUrl || state.mapboxApiUrl,
    mapStyles: action.payload && !action.payload.mapStylesReplaceDefault ? state.mapStyles : {},
    mapStylesReplaceDefault: action.payload.mapStylesReplaceDefault || false
  });
}; // });

/**
 * Update `visibleLayerGroups`to change layer group visibility
 * @memberof mapStyleUpdaters
 * @type {typeof import('./map-style-updaters').mapConfigChangeUpdater}
 * @public
 */


exports.initMapStyleUpdater = initMapStyleUpdater;

var mapConfigChangeUpdater = function mapConfigChangeUpdater(state, action) {
  return _objectSpread(_objectSpread(_objectSpread({}, state), action.payload), getMapStyles(_objectSpread(_objectSpread({}, state), action.payload)));
};
/**
 * Change to another map style. The selected style should already been loaded into `mapStyle.mapStyles`
 * @memberof mapStyleUpdaters
 * @type {typeof import('./map-style-updaters').mapStyleChangeUpdater}
 * @public
 */


exports.mapConfigChangeUpdater = mapConfigChangeUpdater;

var mapStyleChangeUpdater = function mapStyleChangeUpdater(state, _ref4) {
  var styleType = _ref4.payload;

  if (!state.mapStyles[styleType]) {
    // we might not have received the style yet
    return state;
  }

  var defaultLGVisibility = (0, _mapboxGlStyleEditor.getDefaultLayerGroupVisibility)(state.mapStyles[styleType]);
  var visibleLayerGroups = (0, _mapboxGlStyleEditor.mergeLayerGroupVisibility)(defaultLGVisibility, state.visibleLayerGroups);
  var threeDBuildingColor = state.custom3DBuildingColor ? state.threeDBuildingColor : get3DBuildingColor(state.mapStyles[styleType]);
  return _objectSpread(_objectSpread({}, state), {}, {
    styleType: styleType,
    visibleLayerGroups: visibleLayerGroups,
    threeDBuildingColor: threeDBuildingColor
  }, getMapStyles(_objectSpread(_objectSpread({}, state), {}, {
    visibleLayerGroups: visibleLayerGroups,
    styleType: styleType
  })));
};
/**
 * Callback when load map style success
 * @memberof mapStyleUpdaters
 * @type {typeof import('./map-style-updaters').loadMapStylesUpdater}
 * @public
 */


exports.mapStyleChangeUpdater = mapStyleChangeUpdater;

var loadMapStylesUpdater = function loadMapStylesUpdater(state, action) {
  var newStyles = action.payload || {};
  var addLayerGroups = Object.keys(newStyles).reduce(function (accu, id) {
    return _objectSpread(_objectSpread({}, accu), {}, (0, _defineProperty2["default"])({}, id, _objectSpread(_objectSpread({}, newStyles[id]), {}, {
      layerGroups: newStyles[id].layerGroups || getLayerGroupsFromStyle(newStyles[id].style)
    })));
  }, {}); // add new styles to state

  var newState = _objectSpread(_objectSpread({}, state), {}, {
    mapStyles: _objectSpread(_objectSpread({}, state.mapStyles), addLayerGroups)
  });

  return newStyles[state.styleType] ? mapStyleChangeUpdater(newState, {
    payload: state.styleType
  }) : newState;
};
/**
 * Callback when load map style error
 * @memberof mapStyleUpdaters
 * @type {typeof import('./map-style-updaters').loadMapStyleErrUpdater}
 * @public
 */
// do nothing for now, if didn't load, skip it


exports.loadMapStylesUpdater = loadMapStylesUpdater;

var loadMapStyleErrUpdater = function loadMapStyleErrUpdater(state) {
  return state;
};
/**
 * @memberof mapStyleUpdaters
 * @type {typeof import('./map-style-updaters').requestMapStylesUpdater}
 * @public
 */


exports.loadMapStyleErrUpdater = loadMapStyleErrUpdater;

var requestMapStylesUpdater = function requestMapStylesUpdater(state, _ref5) {
  var mapStyles = _ref5.payload;
  var loadMapStyleTasks = getLoadMapStyleTasks(mapStyles, state.mapboxApiAccessToken, state.mapboxApiUrl);
  return (0, _tasks.withTask)(state, loadMapStyleTasks);
};
/**
 * Load map style object when pass in saved map config
 * @memberof mapStyleUpdaters
 * @param state `mapStyle`
 * @param action
 * @param action.payload saved map config `{mapStyle, visState, mapState}`
 * @returns nextState or `react-pam` tasks to load map style object
 * @type {typeof import('./map-style-updaters').receiveMapConfigUpdater}
 */


exports.requestMapStylesUpdater = requestMapStylesUpdater;

var receiveMapConfigUpdater = function receiveMapConfigUpdater(state, _ref6) {
  var _ref6$payload$config = _ref6.payload.config,
      config = _ref6$payload$config === void 0 ? {} : _ref6$payload$config;

  var _ref7 = config || {},
      mapStyle = _ref7.mapStyle;

  if (!mapStyle) {
    return state;
  } // if saved custom mapStyles load the style object


  var loadMapStyleTasks = mapStyle.mapStyles ? getLoadMapStyleTasks(mapStyle.mapStyles, state.mapboxApiAccessToken, state.mapboxApiUrl) : null; // merge default mapStyles

  var merged = mapStyle.mapStyles ? _objectSpread(_objectSpread({}, mapStyle), {}, {
    mapStyles: _objectSpread(_objectSpread({}, mapStyle.mapStyles), state.mapStyles)
  }) : mapStyle; // set custom3DBuildingColor: true if mapStyle contains threeDBuildingColor

  merged.custom3DBuildingColor = Boolean(mapStyle.threeDBuildingColor) || merged.custom3DBuildingColor;
  var newState = mapConfigChangeUpdater(state, {
    payload: merged
  });
  return loadMapStyleTasks ? (0, _tasks.withTask)(newState, loadMapStyleTasks) : newState;
};

exports.receiveMapConfigUpdater = receiveMapConfigUpdater;

function getLoadMapStyleTasks(mapStyles, mapboxApiAccessToken, mapboxApiUrl) {
  return [_tasks["default"].all(Object.values(mapStyles).map(function (_ref8) {
    var id = _ref8.id,
        url = _ref8.url,
        accessToken = _ref8.accessToken;
    return {
      id: id,
      url: (0, _mapboxGlStyleEditor.isValidStyleUrl)(url) ? (0, _mapboxGlStyleEditor.getStyleDownloadUrl)(url, accessToken || mapboxApiAccessToken, mapboxApiUrl) : url
    };
  }).map(_tasks2.LOAD_MAP_STYLE_TASK)).bimap( // success
  function (results) {
    return (0, _mapStyleActions.loadMapStyles)(results.reduce(function (accu, _ref9) {
      var id = _ref9.id,
          style = _ref9.style;
      return _objectSpread(_objectSpread({}, accu), {}, (0, _defineProperty2["default"])({}, id, _objectSpread(_objectSpread({}, mapStyles[id]), {}, {
        style: style
      })));
    }, {}));
  }, // error
  _mapStyleActions.loadMapStyleErr)];
}
/**
 * Reset map style config to initial state
 * @memberof mapStyleUpdaters
 * @param state `mapStyle`
 * @returns nextState
 * @type {typeof import('./map-style-updaters').resetMapConfigMapStyleUpdater}
 * @public
 */


var resetMapConfigMapStyleUpdater = function resetMapConfigMapStyleUpdater(state) {
  var emptyConfig = _objectSpread(_objectSpread(_objectSpread({}, INITIAL_MAP_STYLE), {}, {
    mapboxApiAccessToken: state.mapboxApiAccessToken,
    mapboxApiUrl: state.mapboxApiUrl,
    mapStylesReplaceDefault: state.mapStylesReplaceDefault
  }, state.initialState), {}, {
    mapStyles: state.mapStyles,
    initialState: state.initialState
  });

  return mapStyleChangeUpdater(emptyConfig, {
    payload: emptyConfig.styleType
  });
};
/**
 * Callback when a custom map style object is received
 * @memberof mapStyleUpdaters
 * @type {typeof import('./map-style-updaters').loadCustomMapStyleUpdater}
 * @public
 */


exports.resetMapConfigMapStyleUpdater = resetMapConfigMapStyleUpdater;

var loadCustomMapStyleUpdater = function loadCustomMapStyleUpdater(state, _ref10) {
  var _ref10$payload = _ref10.payload,
      icon = _ref10$payload.icon,
      style = _ref10$payload.style,
      error = _ref10$payload.error;
  return _objectSpread(_objectSpread({}, state), {}, {
    inputStyle: _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, state.inputStyle), style ? {
      id: style.id || (0, _utils.generateHashId)(),
      // make a copy of the style object
      style: (0, _lodash["default"])(style),
      label: style.name,
      // gathering layer group info from style json
      layerGroups: getLayerGroupsFromStyle(style)
    } : {}), icon ? {
      icon: icon
    } : {}), error !== undefined ? {
      error: error
    } : {})
  });
};
/**
 * Input a custom map style object
 * @memberof mapStyleUpdaters
 * @type {typeof import('./map-style-updaters').inputMapStyleUpdater}
 * @public
 */


exports.loadCustomMapStyleUpdater = loadCustomMapStyleUpdater;

var inputMapStyleUpdater = function inputMapStyleUpdater(state, _ref11) {
  var _ref11$payload = _ref11.payload,
      inputStyle = _ref11$payload.inputStyle,
      mapState = _ref11$payload.mapState;

  var updated = _objectSpread(_objectSpread({}, state.inputStyle), inputStyle);

  var isValid = (0, _mapboxGlStyleEditor.isValidStyleUrl)(updated.url);
  var icon = isValid ? (0, _mapboxGlStyleEditor.getStyleImageIcon)({
    mapState: mapState,
    styleUrl: updated.url,
    mapboxApiAccessToken: updated.accessToken || state.mapboxApiAccessToken,
    mapboxApiUrl: state.mapboxApiUrl || _defaultSettings.DEFAULT_MAPBOX_API_URL
  }) : state.inputStyle.icon;
  return _objectSpread(_objectSpread({}, state), {}, {
    inputStyle: _objectSpread(_objectSpread({}, updated), {}, {
      isValid: isValid,
      icon: icon
    })
  });
};
/**
 * Add map style from user input to reducer and set it to current style
 * This action is called when user click confirm after putting in a valid style url in the custom map style dialog.
 * It should not be called from outside kepler.gl without a valid `inputStyle` in the `mapStyle` reducer.
 * @memberof mapStyleUpdaters
 * @type {typeof import('./map-style-updaters').addCustomMapStyleUpdater}
 */


exports.inputMapStyleUpdater = inputMapStyleUpdater;

var addCustomMapStyleUpdater = function addCustomMapStyleUpdater(state) {
  var styleId = state.inputStyle.id;

  var newState = _objectSpread(_objectSpread({}, state), {}, {
    mapStyles: _objectSpread(_objectSpread({}, state.mapStyles), {}, (0, _defineProperty2["default"])({}, styleId, state.inputStyle)),
    // set to default
    inputStyle: getInitialInputStyle()
  }); // set new style


  return mapStyleChangeUpdater(newState, {
    payload: styleId
  });
};
/**
 * Updates 3d building color
 * @memberof mapStyleUpdaters
 * @type {typeof import('./map-style-updaters').set3dBuildingColorUpdater}
 */


exports.addCustomMapStyleUpdater = addCustomMapStyleUpdater;

var set3dBuildingColorUpdater = function set3dBuildingColorUpdater(state, _ref12) {
  var color = _ref12.payload;
  return _objectSpread(_objectSpread({}, state), {}, {
    threeDBuildingColor: color,
    custom3DBuildingColor: true
  });
};
/**
 * Return the initial input style
 * @return Object
 */


exports.set3dBuildingColorUpdater = set3dBuildingColorUpdater;

function getInitialInputStyle() {
  return {
    accessToken: null,
    error: false,
    isValid: false,
    label: null,
    style: null,
    url: null,
    icon: null,
    custom: true
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWR1Y2Vycy9tYXAtc3R5bGUtdXBkYXRlcnMuanMiXSwibmFtZXMiOlsiREVGQVVMVF9CTERHX0NPTE9SIiwiZ2V0RGVmYXVsdFN0YXRlIiwidmlzaWJsZUxheWVyR3JvdXBzIiwic3R5bGVUeXBlIiwidG9wTGF5ZXJHcm91cHMiLCJtYXBTdHlsZXMiLCJERUZBVUxUX01BUF9TVFlMRVMiLCJyZWR1Y2UiLCJhY2N1IiwiY3VyciIsImlkIiwibWFwYm94QXBpQWNjZXNzVG9rZW4iLCJtYXBib3hBcGlVcmwiLCJERUZBVUxUX01BUEJPWF9BUElfVVJMIiwibWFwU3R5bGVzUmVwbGFjZURlZmF1bHQiLCJpbnB1dFN0eWxlIiwiZ2V0SW5pdGlhbElucHV0U3R5bGUiLCJ0aHJlZURCdWlsZGluZ0NvbG9yIiwiY3VzdG9tM0RCdWlsZGluZ0NvbG9yIiwibWFwU3R5bGVVcGRhdGVycyIsIklOSVRJQUxfTUFQX1NUWUxFIiwiZ2V0TWFwU3R5bGVzIiwibWFwU3R5bGUiLCJzdHlsZSIsImVkaXRhYmxlIiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsImJvdHRvbU1hcFN0eWxlIiwiaGFzVG9wTGF5ZXIiLCJ2YWx1ZXMiLCJzb21lIiwidiIsInRvcExheWVycyIsImtleSIsInRvcE1hcFN0eWxlIiwiZmluZExheWVyRmlsbENvbG9yIiwibGF5ZXIiLCJwYWludCIsImdldDNEQnVpbGRpbmdDb2xvciIsImJhY2tncm91bmRMYXllciIsImxheWVycyIsImZpbmQiLCJidWlsZGluZ0xheWVyIiwibWF0Y2giLCJidWlsZGluZ0NvbG9yIiwib3BlcmF0aW9uIiwiYWxwaGEiLCJyZ2JPYmoiLCJyIiwiZyIsImIiLCJnZXRMYXllckdyb3Vwc0Zyb21TdHlsZSIsIkFycmF5IiwiaXNBcnJheSIsIkRFRkFVTFRfTEFZRVJfR1JPVVBTIiwiZmlsdGVyIiwibGciLCJpbml0TWFwU3R5bGVVcGRhdGVyIiwic3RhdGUiLCJhY3Rpb24iLCJwYXlsb2FkIiwibWFwQ29uZmlnQ2hhbmdlVXBkYXRlciIsIm1hcFN0eWxlQ2hhbmdlVXBkYXRlciIsImRlZmF1bHRMR1Zpc2liaWxpdHkiLCJsb2FkTWFwU3R5bGVzVXBkYXRlciIsIm5ld1N0eWxlcyIsImFkZExheWVyR3JvdXBzIiwibGF5ZXJHcm91cHMiLCJuZXdTdGF0ZSIsImxvYWRNYXBTdHlsZUVyclVwZGF0ZXIiLCJyZXF1ZXN0TWFwU3R5bGVzVXBkYXRlciIsImxvYWRNYXBTdHlsZVRhc2tzIiwiZ2V0TG9hZE1hcFN0eWxlVGFza3MiLCJyZWNlaXZlTWFwQ29uZmlnVXBkYXRlciIsImNvbmZpZyIsIm1lcmdlZCIsIkJvb2xlYW4iLCJUYXNrIiwiYWxsIiwibWFwIiwidXJsIiwiYWNjZXNzVG9rZW4iLCJMT0FEX01BUF9TVFlMRV9UQVNLIiwiYmltYXAiLCJyZXN1bHRzIiwibG9hZE1hcFN0eWxlRXJyIiwicmVzZXRNYXBDb25maWdNYXBTdHlsZVVwZGF0ZXIiLCJlbXB0eUNvbmZpZyIsImluaXRpYWxTdGF0ZSIsImxvYWRDdXN0b21NYXBTdHlsZVVwZGF0ZXIiLCJpY29uIiwiZXJyb3IiLCJsYWJlbCIsIm5hbWUiLCJ1bmRlZmluZWQiLCJpbnB1dE1hcFN0eWxlVXBkYXRlciIsIm1hcFN0YXRlIiwidXBkYXRlZCIsImlzVmFsaWQiLCJzdHlsZVVybCIsImFkZEN1c3RvbU1hcFN0eWxlVXBkYXRlciIsInN0eWxlSWQiLCJzZXQzZEJ1aWxkaW5nQ29sb3JVcGRhdGVyIiwiY29sb3IiLCJjdXN0b20iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQXFCQTs7QUFDQTs7QUFHQTs7QUFTQTs7QUFLQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsa0JBQWtCLEdBQUcsU0FBM0I7QUFFQTs7OztBQUdBLElBQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsR0FBTTtBQUM1QixNQUFNQyxrQkFBa0IsR0FBRyxFQUEzQjtBQUNBLE1BQU1DLFNBQVMsR0FBRyxNQUFsQjtBQUNBLE1BQU1DLGNBQWMsR0FBRyxFQUF2QjtBQUVBLFNBQU87QUFDTEQsSUFBQUEsU0FBUyxFQUFUQSxTQURLO0FBRUxELElBQUFBLGtCQUFrQixFQUFsQkEsa0JBRks7QUFHTEUsSUFBQUEsY0FBYyxFQUFkQSxjQUhLO0FBSUxDLElBQUFBLFNBQVMsRUFBRUMsb0NBQW1CQyxNQUFuQixDQUNULFVBQUNDLElBQUQsRUFBT0MsSUFBUDtBQUFBLDZDQUNLRCxJQURMLDRDQUVHQyxJQUFJLENBQUNDLEVBRlIsRUFFYUQsSUFGYjtBQUFBLEtBRFMsRUFLVCxFQUxTLENBSk47QUFXTDtBQUNBRSxJQUFBQSxvQkFBb0IsRUFBRSxJQVpqQjtBQWFMQyxJQUFBQSxZQUFZLEVBQUVDLHVDQWJUO0FBY0xDLElBQUFBLHVCQUF1QixFQUFFLEtBZHBCO0FBZUxDLElBQUFBLFVBQVUsRUFBRUMsb0JBQW9CLEVBZjNCO0FBZ0JMQyxJQUFBQSxtQkFBbUIsRUFBRSwwQkFBU2pCLGtCQUFULENBaEJoQjtBQWlCTGtCLElBQUFBLHFCQUFxQixFQUFFO0FBakJsQixHQUFQO0FBbUJELENBeEJEO0FBMEJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0NBOzs7QUFDQSxJQUFNQyxnQkFBZ0IsR0FBRyxJQUF6QjtBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQWdCTyxJQUFNQyxpQkFBaUIsR0FBR25CLGVBQWUsRUFBekM7QUFFUDs7Ozs7Ozs7Ozs7O0FBU08sU0FBU29CLFlBQVQsT0FBa0Y7QUFBQSxNQUEzRGxCLFNBQTJELFFBQTNEQSxTQUEyRDtBQUFBLE1BQWhERCxrQkFBZ0QsUUFBaERBLGtCQUFnRDtBQUFBLE1BQTVCRSxjQUE0QixRQUE1QkEsY0FBNEI7QUFBQSxNQUFaQyxTQUFZLFFBQVpBLFNBQVk7QUFDdkYsTUFBTWlCLFFBQVEsR0FBR2pCLFNBQVMsQ0FBQ0YsU0FBRCxDQUExQixDQUR1RixDQUd2Rjs7QUFDQSxNQUFJLENBQUNtQixRQUFELElBQWEsQ0FBQ0EsUUFBUSxDQUFDQyxLQUEzQixFQUFrQztBQUNoQyxXQUFPLEVBQVA7QUFDRDs7QUFFRCxNQUFNQyxRQUFRLEdBQUdDLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZeEIsa0JBQVosRUFBZ0N5QixNQUFqRDtBQUVBLE1BQU1DLGNBQWMsR0FBRyxDQUFDSixRQUFELEdBQ25CRixRQUFRLENBQUNDLEtBRFUsR0FFbkIsNkNBQW1CO0FBQ2pCYixJQUFBQSxFQUFFLEVBQUVQLFNBRGE7QUFFakJtQixJQUFBQSxRQUFRLEVBQVJBLFFBRmlCO0FBR2pCcEIsSUFBQUEsa0JBQWtCLEVBQWxCQTtBQUhpQixHQUFuQixDQUZKO0FBUUEsTUFBTTJCLFdBQVcsR0FBR0wsUUFBUSxJQUFJQyxNQUFNLENBQUNLLE1BQVAsQ0FBYzFCLGNBQWQsRUFBOEIyQixJQUE5QixDQUFtQyxVQUFBQyxDQUFDO0FBQUEsV0FBSUEsQ0FBSjtBQUFBLEdBQXBDLENBQWhDLENBbEJ1RixDQW9CdkY7O0FBQ0EsTUFBTUMsU0FBUyxHQUNiSixXQUFXLElBQ1hKLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZdEIsY0FBWixFQUE0QkcsTUFBNUIsQ0FDRSxVQUFDQyxJQUFELEVBQU8wQixHQUFQO0FBQUEsMkNBQ0sxQixJQURMLDRDQUVHMEIsR0FGSCxFQUVTOUIsY0FBYyxDQUFDOEIsR0FBRCxDQUFkLElBQXVCaEMsa0JBQWtCLENBQUNnQyxHQUFELENBRmxEO0FBQUEsR0FERixFQUtFLEVBTEYsQ0FGRjtBQVVBLE1BQU1DLFdBQVcsR0FBR04sV0FBVyxHQUMzQiwwQ0FBZ0I7QUFDZG5CLElBQUFBLEVBQUUsRUFBRVAsU0FEVTtBQUVkbUIsSUFBQUEsUUFBUSxFQUFSQSxRQUZjO0FBR2RwQixJQUFBQSxrQkFBa0IsRUFBRStCO0FBSE4sR0FBaEIsQ0FEMkIsR0FNM0IsSUFOSjtBQVFBLFNBQU87QUFBQ0wsSUFBQUEsY0FBYyxFQUFkQSxjQUFEO0FBQWlCTyxJQUFBQSxXQUFXLEVBQVhBLFdBQWpCO0FBQThCWCxJQUFBQSxRQUFRLEVBQVJBO0FBQTlCLEdBQVA7QUFDRDs7QUFFRCxTQUFTWSxrQkFBVCxDQUE0QkMsS0FBNUIsRUFBbUM7QUFDakMsU0FBT0EsS0FBSyxJQUFJQSxLQUFLLENBQUNDLEtBQWYsSUFBd0JELEtBQUssQ0FBQ0MsS0FBTixDQUFZLGtCQUFaLENBQS9CO0FBQ0Q7O0FBRUQsU0FBU0Msa0JBQVQsQ0FBNEJoQixLQUE1QixFQUFtQztBQUNqQztBQUNBLE1BQUksQ0FBQ0EsS0FBSyxDQUFDQSxLQUFYLEVBQWtCO0FBQ2hCLFdBQU8sMEJBQVN2QixrQkFBVCxDQUFQO0FBQ0Q7O0FBRUQsTUFBTXdDLGVBQWUsR0FBRyxDQUFDakIsS0FBSyxDQUFDQSxLQUFOLENBQVlrQixNQUFaLElBQXNCLEVBQXZCLEVBQTJCQyxJQUEzQixDQUFnQztBQUFBLFFBQUVoQyxFQUFGLFNBQUVBLEVBQUY7QUFBQSxXQUFVQSxFQUFFLEtBQUssWUFBakI7QUFBQSxHQUFoQyxDQUF4QjtBQUVBLE1BQU1pQyxhQUFhLEdBQUcsQ0FBQ3BCLEtBQUssQ0FBQ0EsS0FBTixDQUFZa0IsTUFBWixJQUFzQixFQUF2QixFQUEyQkMsSUFBM0IsQ0FBZ0M7QUFBQSxRQUFFaEMsRUFBRixTQUFFQSxFQUFGO0FBQUEsV0FBVUEsRUFBRSxDQUFDa0MsS0FBSCxDQUFTLFVBQVQsQ0FBVjtBQUFBLEdBQWhDLENBQXRCO0FBRUEsTUFBTUMsYUFBYSxHQUNqQlQsa0JBQWtCLENBQUNPLGFBQUQsQ0FBbEIsSUFBcUNQLGtCQUFrQixDQUFDSSxlQUFELENBQXZELElBQTRFeEMsa0JBRDlFLENBVmlDLENBYWpDOztBQUNBLE1BQU04QyxTQUFTLEdBQUd2QixLQUFLLENBQUNiLEVBQU4sQ0FBU2tDLEtBQVQsQ0FBZSxrQkFBZixJQUFxQyxVQUFyQyxHQUFrRCxRQUFwRTtBQUVBLE1BQU1HLEtBQUssR0FBRyxHQUFkO0FBQ0EsTUFBTUMsTUFBTSxHQUFHLGtCQUFJSCxhQUFKLEVBQW1CQyxTQUFuQixFQUE4QixDQUFDQyxLQUFELENBQTlCLENBQWY7QUFDQSxTQUFPLENBQUNDLE1BQU0sQ0FBQ0MsQ0FBUixFQUFXRCxNQUFNLENBQUNFLENBQWxCLEVBQXFCRixNQUFNLENBQUNHLENBQTVCLENBQVA7QUFDRDs7QUFFRCxTQUFTQyx1QkFBVCxDQUFpQzdCLEtBQWpDLEVBQXdDO0FBQ3RDLFNBQU84QixLQUFLLENBQUNDLE9BQU4sQ0FBYy9CLEtBQUssQ0FBQ2tCLE1BQXBCLElBQ0hjLHNDQUFxQkMsTUFBckIsQ0FBNEIsVUFBQUMsRUFBRTtBQUFBLFdBQUlsQyxLQUFLLENBQUNrQixNQUFOLENBQWFlLE1BQWIsQ0FBb0JDLEVBQUUsQ0FBQ0QsTUFBdkIsRUFBK0I3QixNQUFuQztBQUFBLEdBQTlCLENBREcsR0FFSCxFQUZKO0FBR0QsQyxDQUVEOztBQUNBOzs7Ozs7Ozs7OztBQVNPLElBQU0rQixtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLENBQUNDLEtBQUQsRUFBUUMsTUFBUjtBQUFBLHlDQUM5QkQsS0FEOEI7QUFFakM7QUFDQWhELElBQUFBLG9CQUFvQixFQUFFLENBQUNpRCxNQUFNLENBQUNDLE9BQVAsSUFBa0IsRUFBbkIsRUFBdUJsRCxvQkFIWjtBQUlqQ0MsSUFBQUEsWUFBWSxFQUFFLENBQUNnRCxNQUFNLENBQUNDLE9BQVAsSUFBa0IsRUFBbkIsRUFBdUJqRCxZQUF2QixJQUF1QytDLEtBQUssQ0FBQy9DLFlBSjFCO0FBS2pDUCxJQUFBQSxTQUFTLEVBQUV1RCxNQUFNLENBQUNDLE9BQVAsSUFBa0IsQ0FBQ0QsTUFBTSxDQUFDQyxPQUFQLENBQWUvQyx1QkFBbEMsR0FBNEQ2QyxLQUFLLENBQUN0RCxTQUFsRSxHQUE4RSxFQUx4RDtBQU1qQ1MsSUFBQUEsdUJBQXVCLEVBQUU4QyxNQUFNLENBQUNDLE9BQVAsQ0FBZS9DLHVCQUFmLElBQTBDO0FBTmxDO0FBQUEsQ0FBNUIsQyxDQVFQOztBQUVBOzs7Ozs7Ozs7O0FBTU8sSUFBTWdELHNCQUFzQixHQUFHLFNBQXpCQSxzQkFBeUIsQ0FBQ0gsS0FBRCxFQUFRQyxNQUFSO0FBQUEsdURBQ2pDRCxLQURpQyxHQUVqQ0MsTUFBTSxDQUFDQyxPQUYwQixHQUdqQ3hDLFlBQVksaUNBQ1ZzQyxLQURVLEdBRVZDLE1BQU0sQ0FBQ0MsT0FGRyxFQUhxQjtBQUFBLENBQS9CO0FBU1A7Ozs7Ozs7Ozs7QUFNTyxJQUFNRSxxQkFBcUIsR0FBRyxTQUF4QkEscUJBQXdCLENBQUNKLEtBQUQsU0FBaUM7QUFBQSxNQUFmeEQsU0FBZSxTQUF4QjBELE9BQXdCOztBQUNwRSxNQUFJLENBQUNGLEtBQUssQ0FBQ3RELFNBQU4sQ0FBZ0JGLFNBQWhCLENBQUwsRUFBaUM7QUFDL0I7QUFDQSxXQUFPd0QsS0FBUDtBQUNEOztBQUNELE1BQU1LLG1CQUFtQixHQUFHLHlEQUErQkwsS0FBSyxDQUFDdEQsU0FBTixDQUFnQkYsU0FBaEIsQ0FBL0IsQ0FBNUI7QUFFQSxNQUFNRCxrQkFBa0IsR0FBRyxvREFDekI4RCxtQkFEeUIsRUFFekJMLEtBQUssQ0FBQ3pELGtCQUZtQixDQUEzQjtBQUtBLE1BQU1lLG1CQUFtQixHQUFHMEMsS0FBSyxDQUFDekMscUJBQU4sR0FDeEJ5QyxLQUFLLENBQUMxQyxtQkFEa0IsR0FFeEJzQixrQkFBa0IsQ0FBQ29CLEtBQUssQ0FBQ3RELFNBQU4sQ0FBZ0JGLFNBQWhCLENBQUQsQ0FGdEI7QUFJQSx5Q0FDS3dELEtBREw7QUFFRXhELElBQUFBLFNBQVMsRUFBVEEsU0FGRjtBQUdFRCxJQUFBQSxrQkFBa0IsRUFBbEJBLGtCQUhGO0FBSUVlLElBQUFBLG1CQUFtQixFQUFuQkE7QUFKRixLQUtLSSxZQUFZLGlDQUNWc0MsS0FEVTtBQUViekQsSUFBQUEsa0JBQWtCLEVBQWxCQSxrQkFGYTtBQUdiQyxJQUFBQSxTQUFTLEVBQVRBO0FBSGEsS0FMakI7QUFXRCxDQTNCTTtBQTZCUDs7Ozs7Ozs7OztBQU1PLElBQU04RCxvQkFBb0IsR0FBRyxTQUF2QkEsb0JBQXVCLENBQUNOLEtBQUQsRUFBUUMsTUFBUixFQUFtQjtBQUNyRCxNQUFNTSxTQUFTLEdBQUdOLE1BQU0sQ0FBQ0MsT0FBUCxJQUFrQixFQUFwQztBQUNBLE1BQU1NLGNBQWMsR0FBRzFDLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZd0MsU0FBWixFQUF1QjNELE1BQXZCLENBQ3JCLFVBQUNDLElBQUQsRUFBT0UsRUFBUDtBQUFBLDJDQUNLRixJQURMLDRDQUVHRSxFQUZILGtDQUdPd0QsU0FBUyxDQUFDeEQsRUFBRCxDQUhoQjtBQUlJMEQsTUFBQUEsV0FBVyxFQUFFRixTQUFTLENBQUN4RCxFQUFELENBQVQsQ0FBYzBELFdBQWQsSUFBNkJoQix1QkFBdUIsQ0FBQ2MsU0FBUyxDQUFDeEQsRUFBRCxDQUFULENBQWNhLEtBQWY7QUFKckU7QUFBQSxHQURxQixFQVFyQixFQVJxQixDQUF2QixDQUZxRCxDQWFyRDs7QUFDQSxNQUFNOEMsUUFBUSxtQ0FDVFYsS0FEUztBQUVadEQsSUFBQUEsU0FBUyxrQ0FDSnNELEtBQUssQ0FBQ3RELFNBREYsR0FFSjhELGNBRkk7QUFGRyxJQUFkOztBQVFBLFNBQU9ELFNBQVMsQ0FBQ1AsS0FBSyxDQUFDeEQsU0FBUCxDQUFULEdBQ0g0RCxxQkFBcUIsQ0FBQ00sUUFBRCxFQUFXO0FBQUNSLElBQUFBLE9BQU8sRUFBRUYsS0FBSyxDQUFDeEQ7QUFBaEIsR0FBWCxDQURsQixHQUVIa0UsUUFGSjtBQUdELENBekJNO0FBMkJQOzs7Ozs7QUFNQTs7Ozs7QUFDTyxJQUFNQyxzQkFBc0IsR0FBRyxTQUF6QkEsc0JBQXlCLENBQUFYLEtBQUs7QUFBQSxTQUFJQSxLQUFKO0FBQUEsQ0FBcEM7QUFFUDs7Ozs7Ozs7O0FBS08sSUFBTVksdUJBQXVCLEdBQUcsU0FBMUJBLHVCQUEwQixDQUFDWixLQUFELFNBQWlDO0FBQUEsTUFBZnRELFNBQWUsU0FBeEJ3RCxPQUF3QjtBQUN0RSxNQUFNVyxpQkFBaUIsR0FBR0Msb0JBQW9CLENBQzVDcEUsU0FENEMsRUFFNUNzRCxLQUFLLENBQUNoRCxvQkFGc0MsRUFHNUNnRCxLQUFLLENBQUMvQyxZQUhzQyxDQUE5QztBQUtBLFNBQU8scUJBQVMrQyxLQUFULEVBQWdCYSxpQkFBaEIsQ0FBUDtBQUNELENBUE07QUFTUDs7Ozs7Ozs7Ozs7OztBQVNPLElBQU1FLHVCQUF1QixHQUFHLFNBQTFCQSx1QkFBMEIsQ0FBQ2YsS0FBRCxTQUFxQztBQUFBLG1DQUE1QkUsT0FBNEIsQ0FBbEJjLE1BQWtCO0FBQUEsTUFBbEJBLE1BQWtCLHFDQUFULEVBQVM7O0FBQUEsY0FDdkRBLE1BQU0sSUFBSSxFQUQ2QztBQUFBLE1BQ25FckQsUUFEbUUsU0FDbkVBLFFBRG1FOztBQUcxRSxNQUFJLENBQUNBLFFBQUwsRUFBZTtBQUNiLFdBQU9xQyxLQUFQO0FBQ0QsR0FMeUUsQ0FPMUU7OztBQUNBLE1BQU1hLGlCQUFpQixHQUFHbEQsUUFBUSxDQUFDakIsU0FBVCxHQUN0Qm9FLG9CQUFvQixDQUFDbkQsUUFBUSxDQUFDakIsU0FBVixFQUFxQnNELEtBQUssQ0FBQ2hELG9CQUEzQixFQUFpRGdELEtBQUssQ0FBQy9DLFlBQXZELENBREUsR0FFdEIsSUFGSixDQVIwRSxDQVkxRTs7QUFDQSxNQUFNZ0UsTUFBTSxHQUFHdEQsUUFBUSxDQUFDakIsU0FBVCxtQ0FFTmlCLFFBRk07QUFHVGpCLElBQUFBLFNBQVMsa0NBQ0ppQixRQUFRLENBQUNqQixTQURMLEdBRUpzRCxLQUFLLENBQUN0RCxTQUZGO0FBSEEsT0FRWGlCLFFBUkosQ0FiMEUsQ0F1QjFFOztBQUNBc0QsRUFBQUEsTUFBTSxDQUFDMUQscUJBQVAsR0FDRTJELE9BQU8sQ0FBQ3ZELFFBQVEsQ0FBQ0wsbUJBQVYsQ0FBUCxJQUF5QzJELE1BQU0sQ0FBQzFELHFCQURsRDtBQUVBLE1BQU1tRCxRQUFRLEdBQUdQLHNCQUFzQixDQUFDSCxLQUFELEVBQVE7QUFBQ0UsSUFBQUEsT0FBTyxFQUFFZTtBQUFWLEdBQVIsQ0FBdkM7QUFFQSxTQUFPSixpQkFBaUIsR0FBRyxxQkFBU0gsUUFBVCxFQUFtQkcsaUJBQW5CLENBQUgsR0FBMkNILFFBQW5FO0FBQ0QsQ0E3Qk07Ozs7QUErQlAsU0FBU0ksb0JBQVQsQ0FBOEJwRSxTQUE5QixFQUF5Q00sb0JBQXpDLEVBQStEQyxZQUEvRCxFQUE2RTtBQUMzRSxTQUFPLENBQ0xrRSxrQkFBS0MsR0FBTCxDQUNFdEQsTUFBTSxDQUFDSyxNQUFQLENBQWN6QixTQUFkLEVBQ0cyRSxHQURILENBQ087QUFBQSxRQUFFdEUsRUFBRixTQUFFQSxFQUFGO0FBQUEsUUFBTXVFLEdBQU4sU0FBTUEsR0FBTjtBQUFBLFFBQVdDLFdBQVgsU0FBV0EsV0FBWDtBQUFBLFdBQTZCO0FBQ2hDeEUsTUFBQUEsRUFBRSxFQUFGQSxFQURnQztBQUVoQ3VFLE1BQUFBLEdBQUcsRUFBRSwwQ0FBZ0JBLEdBQWhCLElBQ0QsOENBQW9CQSxHQUFwQixFQUF5QkMsV0FBVyxJQUFJdkUsb0JBQXhDLEVBQThEQyxZQUE5RCxDQURDLEdBRURxRTtBQUo0QixLQUE3QjtBQUFBLEdBRFAsRUFPR0QsR0FQSCxDQU9PRywyQkFQUCxDQURGLEVBU0VDLEtBVEYsRUFVRTtBQUNBLFlBQUFDLE9BQU87QUFBQSxXQUNMLG9DQUNFQSxPQUFPLENBQUM5RSxNQUFSLENBQ0UsVUFBQ0MsSUFBRDtBQUFBLFVBQVFFLEVBQVIsU0FBUUEsRUFBUjtBQUFBLFVBQVlhLEtBQVosU0FBWUEsS0FBWjtBQUFBLDZDQUNLZixJQURMLDRDQUVHRSxFQUZILGtDQUdPTCxTQUFTLENBQUNLLEVBQUQsQ0FIaEI7QUFJSWEsUUFBQUEsS0FBSyxFQUFMQTtBQUpKO0FBQUEsS0FERixFQVFFLEVBUkYsQ0FERixDQURLO0FBQUEsR0FYVCxFQXdCRTtBQUNBK0Qsa0NBekJGLENBREssQ0FBUDtBQTZCRDtBQUNEOzs7Ozs7Ozs7O0FBUU8sSUFBTUMsNkJBQTZCLEdBQUcsU0FBaENBLDZCQUFnQyxDQUFBNUIsS0FBSyxFQUFJO0FBQ3BELE1BQU02QixXQUFXLGlEQUNacEUsaUJBRFk7QUFFZlQsSUFBQUEsb0JBQW9CLEVBQUVnRCxLQUFLLENBQUNoRCxvQkFGYjtBQUdmQyxJQUFBQSxZQUFZLEVBQUUrQyxLQUFLLENBQUMvQyxZQUhMO0FBSWZFLElBQUFBLHVCQUF1QixFQUFFNkMsS0FBSyxDQUFDN0M7QUFKaEIsS0FLWjZDLEtBQUssQ0FBQzhCLFlBTE07QUFNZnBGLElBQUFBLFNBQVMsRUFBRXNELEtBQUssQ0FBQ3RELFNBTkY7QUFPZm9GLElBQUFBLFlBQVksRUFBRTlCLEtBQUssQ0FBQzhCO0FBUEwsSUFBakI7O0FBVUEsU0FBTzFCLHFCQUFxQixDQUFDeUIsV0FBRCxFQUFjO0FBQUMzQixJQUFBQSxPQUFPLEVBQUUyQixXQUFXLENBQUNyRjtBQUF0QixHQUFkLENBQTVCO0FBQ0QsQ0FaTTtBQWNQOzs7Ozs7Ozs7O0FBTU8sSUFBTXVGLHlCQUF5QixHQUFHLFNBQTVCQSx5QkFBNEIsQ0FBQy9CLEtBQUQ7QUFBQSw4QkFBU0UsT0FBVDtBQUFBLE1BQW1COEIsSUFBbkIsa0JBQW1CQSxJQUFuQjtBQUFBLE1BQXlCcEUsS0FBekIsa0JBQXlCQSxLQUF6QjtBQUFBLE1BQWdDcUUsS0FBaEMsa0JBQWdDQSxLQUFoQztBQUFBLHlDQUNwQ2pDLEtBRG9DO0FBRXZDNUMsSUFBQUEsVUFBVSw4REFDTDRDLEtBQUssQ0FBQzVDLFVBREQsR0FHSlEsS0FBSyxHQUNMO0FBQ0ViLE1BQUFBLEVBQUUsRUFBRWEsS0FBSyxDQUFDYixFQUFOLElBQVksNEJBRGxCO0FBRUU7QUFDQWEsTUFBQUEsS0FBSyxFQUFFLHdCQUFVQSxLQUFWLENBSFQ7QUFJRXNFLE1BQUFBLEtBQUssRUFBRXRFLEtBQUssQ0FBQ3VFLElBSmY7QUFLRTtBQUNBMUIsTUFBQUEsV0FBVyxFQUFFaEIsdUJBQXVCLENBQUM3QixLQUFEO0FBTnRDLEtBREssR0FTTCxFQVpJLEdBYUpvRSxJQUFJLEdBQUc7QUFBQ0EsTUFBQUEsSUFBSSxFQUFKQTtBQUFELEtBQUgsR0FBWSxFQWJaLEdBY0pDLEtBQUssS0FBS0csU0FBVixHQUFzQjtBQUFDSCxNQUFBQSxLQUFLLEVBQUxBO0FBQUQsS0FBdEIsR0FBZ0MsRUFkNUI7QUFGNkI7QUFBQSxDQUFsQztBQW9CUDs7Ozs7Ozs7OztBQU1PLElBQU1JLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBdUIsQ0FBQ3JDLEtBQUQsVUFBOEM7QUFBQSw4QkFBckNFLE9BQXFDO0FBQUEsTUFBM0I5QyxVQUEyQixrQkFBM0JBLFVBQTJCO0FBQUEsTUFBZmtGLFFBQWUsa0JBQWZBLFFBQWU7O0FBQ2hGLE1BQU1DLE9BQU8sbUNBQ1J2QyxLQUFLLENBQUM1QyxVQURFLEdBRVJBLFVBRlEsQ0FBYjs7QUFLQSxNQUFNb0YsT0FBTyxHQUFHLDBDQUFnQkQsT0FBTyxDQUFDakIsR0FBeEIsQ0FBaEI7QUFDQSxNQUFNVSxJQUFJLEdBQUdRLE9BQU8sR0FDaEIsNENBQWtCO0FBQ2hCRixJQUFBQSxRQUFRLEVBQVJBLFFBRGdCO0FBRWhCRyxJQUFBQSxRQUFRLEVBQUVGLE9BQU8sQ0FBQ2pCLEdBRkY7QUFHaEJ0RSxJQUFBQSxvQkFBb0IsRUFBRXVGLE9BQU8sQ0FBQ2hCLFdBQVIsSUFBdUJ2QixLQUFLLENBQUNoRCxvQkFIbkM7QUFJaEJDLElBQUFBLFlBQVksRUFBRStDLEtBQUssQ0FBQy9DLFlBQU4sSUFBc0JDO0FBSnBCLEdBQWxCLENBRGdCLEdBT2hCOEMsS0FBSyxDQUFDNUMsVUFBTixDQUFpQjRFLElBUHJCO0FBU0EseUNBQ0toQyxLQURMO0FBRUU1QyxJQUFBQSxVQUFVLGtDQUNMbUYsT0FESztBQUVSQyxNQUFBQSxPQUFPLEVBQVBBLE9BRlE7QUFHUlIsTUFBQUEsSUFBSSxFQUFKQTtBQUhRO0FBRlo7QUFRRCxDQXhCTTtBQTBCUDs7Ozs7Ozs7Ozs7QUFPTyxJQUFNVSx3QkFBd0IsR0FBRyxTQUEzQkEsd0JBQTJCLENBQUExQyxLQUFLLEVBQUk7QUFDL0MsTUFBTTJDLE9BQU8sR0FBRzNDLEtBQUssQ0FBQzVDLFVBQU4sQ0FBaUJMLEVBQWpDOztBQUNBLE1BQU0yRCxRQUFRLG1DQUNUVixLQURTO0FBRVp0RCxJQUFBQSxTQUFTLGtDQUNKc0QsS0FBSyxDQUFDdEQsU0FERiw0Q0FFTmlHLE9BRk0sRUFFSTNDLEtBQUssQ0FBQzVDLFVBRlYsRUFGRztBQU1aO0FBQ0FBLElBQUFBLFVBQVUsRUFBRUMsb0JBQW9CO0FBUHBCLElBQWQsQ0FGK0MsQ0FXL0M7OztBQUNBLFNBQU8rQyxxQkFBcUIsQ0FBQ00sUUFBRCxFQUFXO0FBQUNSLElBQUFBLE9BQU8sRUFBRXlDO0FBQVYsR0FBWCxDQUE1QjtBQUNELENBYk07QUFlUDs7Ozs7Ozs7O0FBS08sSUFBTUMseUJBQXlCLEdBQUcsU0FBNUJBLHlCQUE0QixDQUFDNUMsS0FBRDtBQUFBLE1BQWtCNkMsS0FBbEIsVUFBUzNDLE9BQVQ7QUFBQSx5Q0FDcENGLEtBRG9DO0FBRXZDMUMsSUFBQUEsbUJBQW1CLEVBQUV1RixLQUZrQjtBQUd2Q3RGLElBQUFBLHFCQUFxQixFQUFFO0FBSGdCO0FBQUEsQ0FBbEM7QUFNUDs7Ozs7Ozs7QUFJTyxTQUFTRixvQkFBVCxHQUFnQztBQUNyQyxTQUFPO0FBQ0xrRSxJQUFBQSxXQUFXLEVBQUUsSUFEUjtBQUVMVSxJQUFBQSxLQUFLLEVBQUUsS0FGRjtBQUdMTyxJQUFBQSxPQUFPLEVBQUUsS0FISjtBQUlMTixJQUFBQSxLQUFLLEVBQUUsSUFKRjtBQUtMdEUsSUFBQUEsS0FBSyxFQUFFLElBTEY7QUFNTDBELElBQUFBLEdBQUcsRUFBRSxJQU5BO0FBT0xVLElBQUFBLElBQUksRUFBRSxJQVBEO0FBUUxjLElBQUFBLE1BQU0sRUFBRTtBQVJILEdBQVA7QUFVRCIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMCBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbi8vIEB0cy1ub2NoZWNrXHJcbmltcG9ydCBUYXNrLCB7d2l0aFRhc2t9IGZyb20gJ3JlYWN0LXBhbG0vdGFza3MnO1xyXG5pbXBvcnQgY2xvbmVEZWVwIGZyb20gJ2xvZGFzaC5jbG9uZWRlZXAnO1xyXG5cclxuLy8gVXRpbHNcclxuaW1wb3J0IHtcclxuICBnZXREZWZhdWx0TGF5ZXJHcm91cFZpc2liaWxpdHksXHJcbiAgaXNWYWxpZFN0eWxlVXJsLFxyXG4gIGdldFN0eWxlRG93bmxvYWRVcmwsXHJcbiAgbWVyZ2VMYXllckdyb3VwVmlzaWJpbGl0eSxcclxuICBlZGl0VG9wTWFwU3R5bGUsXHJcbiAgZWRpdEJvdHRvbU1hcFN0eWxlLFxyXG4gIGdldFN0eWxlSW1hZ2VJY29uXHJcbn0gZnJvbSAndXRpbHMvbWFwLXN0eWxlLXV0aWxzL21hcGJveC1nbC1zdHlsZS1lZGl0b3InO1xyXG5pbXBvcnQge1xyXG4gIERFRkFVTFRfTUFQX1NUWUxFUyxcclxuICBERUZBVUxUX0xBWUVSX0dST1VQUyxcclxuICBERUZBVUxUX01BUEJPWF9BUElfVVJMXHJcbn0gZnJvbSAnY29uc3RhbnRzL2RlZmF1bHQtc2V0dGluZ3MnO1xyXG5pbXBvcnQge2dlbmVyYXRlSGFzaElkfSBmcm9tICd1dGlscy91dGlscyc7XHJcbmltcG9ydCB7TE9BRF9NQVBfU1RZTEVfVEFTS30gZnJvbSAndGFza3MvdGFza3MnO1xyXG5pbXBvcnQge2xvYWRNYXBTdHlsZXMsIGxvYWRNYXBTdHlsZUVycn0gZnJvbSAnYWN0aW9ucy9tYXAtc3R5bGUtYWN0aW9ucyc7XHJcbmltcG9ydCB7cmdifSBmcm9tICdkMy1jb2xvcic7XHJcbmltcG9ydCB7aGV4VG9SZ2J9IGZyb20gJ3V0aWxzL2NvbG9yLXV0aWxzJztcclxuXHJcbmNvbnN0IERFRkFVTFRfQkxER19DT0xPUiA9ICcjRDFDRUM3JztcclxuXHJcbi8qKlxyXG4gKiBAcmV0dXJuIHtpbXBvcnQoJy4vbWFwLXN0eWxlLXVwZGF0ZXJzJykuTWFwU3R5bGV9XHJcbiAqL1xyXG5jb25zdCBnZXREZWZhdWx0U3RhdGUgPSAoKSA9PiB7XHJcbiAgY29uc3QgdmlzaWJsZUxheWVyR3JvdXBzID0ge307XHJcbiAgY29uc3Qgc3R5bGVUeXBlID0gJ2RhcmsnO1xyXG4gIGNvbnN0IHRvcExheWVyR3JvdXBzID0ge307XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBzdHlsZVR5cGUsXHJcbiAgICB2aXNpYmxlTGF5ZXJHcm91cHMsXHJcbiAgICB0b3BMYXllckdyb3VwcyxcclxuICAgIG1hcFN0eWxlczogREVGQVVMVF9NQVBfU1RZTEVTLnJlZHVjZShcclxuICAgICAgKGFjY3UsIGN1cnIpID0+ICh7XHJcbiAgICAgICAgLi4uYWNjdSxcclxuICAgICAgICBbY3Vyci5pZF06IGN1cnJcclxuICAgICAgfSksXHJcbiAgICAgIHt9XHJcbiAgICApLFxyXG4gICAgLy8gc2F2ZSBtYXBib3ggYWNjZXNzIHRva2VuXHJcbiAgICBtYXBib3hBcGlBY2Nlc3NUb2tlbjogbnVsbCxcclxuICAgIG1hcGJveEFwaVVybDogREVGQVVMVF9NQVBCT1hfQVBJX1VSTCxcclxuICAgIG1hcFN0eWxlc1JlcGxhY2VEZWZhdWx0OiBmYWxzZSxcclxuICAgIGlucHV0U3R5bGU6IGdldEluaXRpYWxJbnB1dFN0eWxlKCksXHJcbiAgICB0aHJlZURCdWlsZGluZ0NvbG9yOiBoZXhUb1JnYihERUZBVUxUX0JMREdfQ09MT1IpLFxyXG4gICAgY3VzdG9tM0RCdWlsZGluZ0NvbG9yOiBmYWxzZVxyXG4gIH07XHJcbn07XHJcblxyXG4vKipcclxuICogVXBkYXRlcnMgZm9yIGBtYXBTdHlsZWAuIENhbiBiZSB1c2VkIGluIHlvdXIgcm9vdCByZWR1Y2VyIHRvIGRpcmVjdGx5IG1vZGlmeSBrZXBsZXIuZ2wncyBzdGF0ZS5cclxuICogUmVhZCBtb3JlIGFib3V0IFtVc2luZyB1cGRhdGVyc10oLi4vYWR2YW5jZWQtdXNhZ2UvdXNpbmctdXBkYXRlcnMubWQpXHJcbiAqIEBwdWJsaWNcclxuICogQGV4YW1wbGVcclxuICpcclxuICogaW1wb3J0IGtlcGxlckdsUmVkdWNlciwge21hcFN0eWxlVXBkYXRlcnN9IGZyb20gJ2tlcGxlci5nbC9yZWR1Y2Vycyc7XHJcbiAqIC8vIFJvb3QgUmVkdWNlclxyXG4gKiBjb25zdCByZWR1Y2VycyA9IGNvbWJpbmVSZWR1Y2Vycyh7XHJcbiAqICBrZXBsZXJHbDoga2VwbGVyR2xSZWR1Y2VyLFxyXG4gKiAgYXBwOiBhcHBSZWR1Y2VyXHJcbiAqIH0pO1xyXG4gKlxyXG4gKiBjb25zdCBjb21wb3NlZFJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gKiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gKiAgICAvLyBjbGljayBidXR0b24gdG8gaGlkZSBsYWJlbCBmcm9tIGJhY2tncm91bmQgbWFwXHJcbiAqICAgIGNhc2UgJ0NMSUNLX0JVVFRPTic6XHJcbiAqICAgICAgcmV0dXJuIHtcclxuICogICAgICAgIC4uLnN0YXRlLFxyXG4gKiAgICAgICAga2VwbGVyR2w6IHtcclxuICogICAgICAgICAgLi4uc3RhdGUua2VwbGVyR2wsXHJcbiAqICAgICAgICAgIGZvbzoge1xyXG4gKiAgICAgICAgICAgICAuLi5zdGF0ZS5rZXBsZXJHbC5mb28sXHJcbiAqICAgICAgICAgICAgIG1hcFN0eWxlOiBtYXBTdHlsZVVwZGF0ZXJzLm1hcENvbmZpZ0NoYW5nZVVwZGF0ZXIoXHJcbiAqICAgICAgICAgICAgICAgbWFwU3R5bGUsXHJcbiAqICAgICAgICAgICAgICAge3BheWxvYWQ6IHt2aXNpYmxlTGF5ZXJHcm91cHM6IHtsYWJlbDogZmFsc2UsIHJvYWQ6IHRydWUsIGJhY2tncm91bmQ6IHRydWV9fX1cclxuICogICAgICAgICAgICAgKVxyXG4gKiAgICAgICAgICB9XHJcbiAqICAgICAgICB9XHJcbiAqICAgICAgfTtcclxuICogIH1cclxuICogIHJldHVybiByZWR1Y2VycyhzdGF0ZSwgYWN0aW9uKTtcclxuICogfTtcclxuICpcclxuICogZXhwb3J0IGRlZmF1bHQgY29tcG9zZWRSZWR1Y2VyO1xyXG4gKi9cclxuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cclxuY29uc3QgbWFwU3R5bGVVcGRhdGVycyA9IG51bGw7XHJcbi8qIGVzbGludC1lbmFibGUgbm8tdW51c2VkLXZhcnMgKi9cclxuLyoqXHJcbiAqIERlZmF1bHQgaW5pdGlhbCBgbWFwU3R5bGVgXHJcbiAqIEBtZW1iZXJvZiBtYXBTdHlsZVVwZGF0ZXJzXHJcbiAqIEBjb25zdGFudFxyXG4gKiBAcHJvcGVydHkgc3R5bGVUeXBlIC0gRGVmYXVsdDogYCdkYXJrJ2BcclxuICogQHByb3BlcnR5IHZpc2libGVMYXllckdyb3VwcyAtIERlZmF1bHQ6IGB7fWBcclxuICogQHByb3BlcnR5IHRvcExheWVyR3JvdXBzIC0gRGVmYXVsdDogYHt9YFxyXG4gKiBAcHJvcGVydHkgbWFwU3R5bGVzIC0gbWFwcGluZyBmcm9tIHN0eWxlIGtleSB0byBzdHlsZSBvYmplY3RcclxuICogQHByb3BlcnR5IG1hcGJveEFwaUFjY2Vzc1Rva2VuIC0gRGVmYXVsdDogYG51bGxgXHJcbiAqIEBQcm9wZXJ0eSBtYXBib3hBcGlVcmwgLSBEZWZhdWx0IG51bGxcclxuICogQFByb3BlcnR5IG1hcFN0eWxlc1JlcGxhY2VEZWZhdWx0IC0gRGVmYXVsdDogYGZhbHNlYFxyXG4gKiBAcHJvcGVydHkgaW5wdXRTdHlsZSAtIERlZmF1bHQ6IGB7fWBcclxuICogQHByb3BlcnR5IHRocmVlREJ1aWxkaW5nQ29sb3IgLSBEZWZhdWx0OiBgW3IsIGcsIGJdYFxyXG4gKiBAdHlwZSB7aW1wb3J0KCcuL21hcC1zdHlsZS11cGRhdGVycycpLk1hcFN0eWxlfVxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgSU5JVElBTF9NQVBfU1RZTEUgPSBnZXREZWZhdWx0U3RhdGUoKTtcclxuXHJcbi8qKlxyXG4gKiBDcmVhdGUgdHdvIG1hcCBzdHlsZXMgZnJvbSBwcmVzZXQgbWFwIHN0eWxlLCBvbmUgZm9yIHRvcCBtYXAgb25lIGZvciBib3R0b21cclxuICpcclxuICogQHBhcmFtIHtzdHJpbmd9IHN0eWxlVHlwZSAtIGN1cnJlbnQgbWFwIHN0eWxlXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSB2aXNpYmxlTGF5ZXJHcm91cHMgLSB2aXNpYmxlIGxheWVycyBvZiBib3R0b20gbWFwXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSB0b3BMYXllckdyb3VwcyAtIHZpc2libGUgbGF5ZXJzIG9mIHRvcCBtYXBcclxuICogQHBhcmFtIHtPYmplY3R9IG1hcFN0eWxlcyAtIGEgZGljdGlvbmFyeSBvZiBhbGwgbWFwIHN0eWxlc1xyXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBib3R0b21NYXBTdHlsZSB8IHRvcE1hcFN0eWxlIHwgaXNSYXN0ZXJcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRNYXBTdHlsZXMoe3N0eWxlVHlwZSwgdmlzaWJsZUxheWVyR3JvdXBzLCB0b3BMYXllckdyb3VwcywgbWFwU3R5bGVzfSkge1xyXG4gIGNvbnN0IG1hcFN0eWxlID0gbWFwU3R5bGVzW3N0eWxlVHlwZV07XHJcblxyXG4gIC8vIHN0eWxlIG1pZ2h0IG5vdCBiZSBsb2FkZWQgeWV0XHJcbiAgaWYgKCFtYXBTdHlsZSB8fCAhbWFwU3R5bGUuc3R5bGUpIHtcclxuICAgIHJldHVybiB7fTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGVkaXRhYmxlID0gT2JqZWN0LmtleXModmlzaWJsZUxheWVyR3JvdXBzKS5sZW5ndGg7XHJcblxyXG4gIGNvbnN0IGJvdHRvbU1hcFN0eWxlID0gIWVkaXRhYmxlXHJcbiAgICA/IG1hcFN0eWxlLnN0eWxlXHJcbiAgICA6IGVkaXRCb3R0b21NYXBTdHlsZSh7XHJcbiAgICAgICAgaWQ6IHN0eWxlVHlwZSxcclxuICAgICAgICBtYXBTdHlsZSxcclxuICAgICAgICB2aXNpYmxlTGF5ZXJHcm91cHNcclxuICAgICAgfSk7XHJcblxyXG4gIGNvbnN0IGhhc1RvcExheWVyID0gZWRpdGFibGUgJiYgT2JqZWN0LnZhbHVlcyh0b3BMYXllckdyb3Vwcykuc29tZSh2ID0+IHYpO1xyXG5cclxuICAvLyBtdXRlIHRvcCBsYXllciBpZiBub3QgdmlzaWJsZSBpbiBib3R0b20gbGF5ZXJcclxuICBjb25zdCB0b3BMYXllcnMgPVxyXG4gICAgaGFzVG9wTGF5ZXIgJiZcclxuICAgIE9iamVjdC5rZXlzKHRvcExheWVyR3JvdXBzKS5yZWR1Y2UoXHJcbiAgICAgIChhY2N1LCBrZXkpID0+ICh7XHJcbiAgICAgICAgLi4uYWNjdSxcclxuICAgICAgICBba2V5XTogdG9wTGF5ZXJHcm91cHNba2V5XSAmJiB2aXNpYmxlTGF5ZXJHcm91cHNba2V5XVxyXG4gICAgICB9KSxcclxuICAgICAge31cclxuICAgICk7XHJcblxyXG4gIGNvbnN0IHRvcE1hcFN0eWxlID0gaGFzVG9wTGF5ZXJcclxuICAgID8gZWRpdFRvcE1hcFN0eWxlKHtcclxuICAgICAgICBpZDogc3R5bGVUeXBlLFxyXG4gICAgICAgIG1hcFN0eWxlLFxyXG4gICAgICAgIHZpc2libGVMYXllckdyb3VwczogdG9wTGF5ZXJzXHJcbiAgICAgIH0pXHJcbiAgICA6IG51bGw7XHJcblxyXG4gIHJldHVybiB7Ym90dG9tTWFwU3R5bGUsIHRvcE1hcFN0eWxlLCBlZGl0YWJsZX07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZpbmRMYXllckZpbGxDb2xvcihsYXllcikge1xyXG4gIHJldHVybiBsYXllciAmJiBsYXllci5wYWludCAmJiBsYXllci5wYWludFsnYmFja2dyb3VuZC1jb2xvciddO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXQzREJ1aWxkaW5nQ29sb3Ioc3R5bGUpIHtcclxuICAvLyBzZXQgYnVpbGRpbmcgY29sb3IgdG8gYmUgdGhlIHNhbWUgYXMgdGhlIGJhY2tncm91bmQgY29sb3IuXHJcbiAgaWYgKCFzdHlsZS5zdHlsZSkge1xyXG4gICAgcmV0dXJuIGhleFRvUmdiKERFRkFVTFRfQkxER19DT0xPUik7XHJcbiAgfVxyXG5cclxuICBjb25zdCBiYWNrZ3JvdW5kTGF5ZXIgPSAoc3R5bGUuc3R5bGUubGF5ZXJzIHx8IFtdKS5maW5kKCh7aWR9KSA9PiBpZCA9PT0gJ2JhY2tncm91bmQnKTtcclxuXHJcbiAgY29uc3QgYnVpbGRpbmdMYXllciA9IChzdHlsZS5zdHlsZS5sYXllcnMgfHwgW10pLmZpbmQoKHtpZH0pID0+IGlkLm1hdGNoKC9idWlsZGluZy8pKTtcclxuXHJcbiAgY29uc3QgYnVpbGRpbmdDb2xvciA9XHJcbiAgICBmaW5kTGF5ZXJGaWxsQ29sb3IoYnVpbGRpbmdMYXllcikgfHwgZmluZExheWVyRmlsbENvbG9yKGJhY2tncm91bmRMYXllcikgfHwgREVGQVVMVF9CTERHX0NPTE9SO1xyXG5cclxuICAvLyBicmlnaHRlbiBvciBkYXJrZW4gYnVpbGRpbmcgYmFzZWQgb24gc3R5bGVcclxuICBjb25zdCBvcGVyYXRpb24gPSBzdHlsZS5pZC5tYXRjaCgvKD89KGRhcmt8bmlnaHQpKS8pID8gJ2JyaWdodGVyJyA6ICdkYXJrZXInO1xyXG5cclxuICBjb25zdCBhbHBoYSA9IDAuMjtcclxuICBjb25zdCByZ2JPYmogPSByZ2IoYnVpbGRpbmdDb2xvcilbb3BlcmF0aW9uXShbYWxwaGFdKTtcclxuICByZXR1cm4gW3JnYk9iai5yLCByZ2JPYmouZywgcmdiT2JqLmJdO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRMYXllckdyb3Vwc0Zyb21TdHlsZShzdHlsZSkge1xyXG4gIHJldHVybiBBcnJheS5pc0FycmF5KHN0eWxlLmxheWVycylcclxuICAgID8gREVGQVVMVF9MQVlFUl9HUk9VUFMuZmlsdGVyKGxnID0+IHN0eWxlLmxheWVycy5maWx0ZXIobGcuZmlsdGVyKS5sZW5ndGgpXHJcbiAgICA6IFtdO1xyXG59XHJcblxyXG4vLyBVcGRhdGVyc1xyXG4vKipcclxuICogUHJvcGFnYXRlIGBtYXBTdHlsZWAgcmVkdWNlciB3aXRoIGBtYXBib3hBcGlBY2Nlc3NUb2tlbmAgYW5kIGBtYXBTdHlsZXNSZXBsYWNlRGVmYXVsdGAuXHJcbiAqIGlmIG1hcFN0eWxlc1JlcGxhY2VEZWZhdWx0IGlzIHRydWUgbWFwU3R5bGVzIGlzIGVtcHRpZWQ7IGxvYWRNYXBTdHlsZXNVcGRhdGVyKCkgd2lsbFxyXG4gKiBwb3B1bGF0ZSBtYXBTdHlsZXMuXHJcbiAqXHJcbiAqIEBtZW1iZXJvZiBtYXBTdHlsZVVwZGF0ZXJzXHJcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL21hcC1zdHlsZS11cGRhdGVycycpLmluaXRNYXBTdHlsZVVwZGF0ZXJ9XHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmV4cG9ydCBjb25zdCBpbml0TWFwU3R5bGVVcGRhdGVyID0gKHN0YXRlLCBhY3Rpb24pID0+ICh7XHJcbiAgLi4uc3RhdGUsXHJcbiAgLy8gc2F2ZSBtYXBib3ggYWNjZXNzIHRva2VuIHRvIG1hcCBzdHlsZSBzdGF0ZVxyXG4gIG1hcGJveEFwaUFjY2Vzc1Rva2VuOiAoYWN0aW9uLnBheWxvYWQgfHwge30pLm1hcGJveEFwaUFjY2Vzc1Rva2VuLFxyXG4gIG1hcGJveEFwaVVybDogKGFjdGlvbi5wYXlsb2FkIHx8IHt9KS5tYXBib3hBcGlVcmwgfHwgc3RhdGUubWFwYm94QXBpVXJsLFxyXG4gIG1hcFN0eWxlczogYWN0aW9uLnBheWxvYWQgJiYgIWFjdGlvbi5wYXlsb2FkLm1hcFN0eWxlc1JlcGxhY2VEZWZhdWx0ID8gc3RhdGUubWFwU3R5bGVzIDoge30sXHJcbiAgbWFwU3R5bGVzUmVwbGFjZURlZmF1bHQ6IGFjdGlvbi5wYXlsb2FkLm1hcFN0eWxlc1JlcGxhY2VEZWZhdWx0IHx8IGZhbHNlXHJcbn0pO1xyXG4vLyB9KTtcclxuXHJcbi8qKlxyXG4gKiBVcGRhdGUgYHZpc2libGVMYXllckdyb3Vwc2B0byBjaGFuZ2UgbGF5ZXIgZ3JvdXAgdmlzaWJpbGl0eVxyXG4gKiBAbWVtYmVyb2YgbWFwU3R5bGVVcGRhdGVyc1xyXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi9tYXAtc3R5bGUtdXBkYXRlcnMnKS5tYXBDb25maWdDaGFuZ2VVcGRhdGVyfVxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgbWFwQ29uZmlnQ2hhbmdlVXBkYXRlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiAoe1xyXG4gIC4uLnN0YXRlLFxyXG4gIC4uLmFjdGlvbi5wYXlsb2FkLFxyXG4gIC4uLmdldE1hcFN0eWxlcyh7XHJcbiAgICAuLi5zdGF0ZSxcclxuICAgIC4uLmFjdGlvbi5wYXlsb2FkXHJcbiAgfSlcclxufSk7XHJcblxyXG4vKipcclxuICogQ2hhbmdlIHRvIGFub3RoZXIgbWFwIHN0eWxlLiBUaGUgc2VsZWN0ZWQgc3R5bGUgc2hvdWxkIGFscmVhZHkgYmVlbiBsb2FkZWQgaW50byBgbWFwU3R5bGUubWFwU3R5bGVzYFxyXG4gKiBAbWVtYmVyb2YgbWFwU3R5bGVVcGRhdGVyc1xyXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi9tYXAtc3R5bGUtdXBkYXRlcnMnKS5tYXBTdHlsZUNoYW5nZVVwZGF0ZXJ9XHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmV4cG9ydCBjb25zdCBtYXBTdHlsZUNoYW5nZVVwZGF0ZXIgPSAoc3RhdGUsIHtwYXlsb2FkOiBzdHlsZVR5cGV9KSA9PiB7XHJcbiAgaWYgKCFzdGF0ZS5tYXBTdHlsZXNbc3R5bGVUeXBlXSkge1xyXG4gICAgLy8gd2UgbWlnaHQgbm90IGhhdmUgcmVjZWl2ZWQgdGhlIHN0eWxlIHlldFxyXG4gICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxuICBjb25zdCBkZWZhdWx0TEdWaXNpYmlsaXR5ID0gZ2V0RGVmYXVsdExheWVyR3JvdXBWaXNpYmlsaXR5KHN0YXRlLm1hcFN0eWxlc1tzdHlsZVR5cGVdKTtcclxuXHJcbiAgY29uc3QgdmlzaWJsZUxheWVyR3JvdXBzID0gbWVyZ2VMYXllckdyb3VwVmlzaWJpbGl0eShcclxuICAgIGRlZmF1bHRMR1Zpc2liaWxpdHksXHJcbiAgICBzdGF0ZS52aXNpYmxlTGF5ZXJHcm91cHNcclxuICApO1xyXG5cclxuICBjb25zdCB0aHJlZURCdWlsZGluZ0NvbG9yID0gc3RhdGUuY3VzdG9tM0RCdWlsZGluZ0NvbG9yXHJcbiAgICA/IHN0YXRlLnRocmVlREJ1aWxkaW5nQ29sb3JcclxuICAgIDogZ2V0M0RCdWlsZGluZ0NvbG9yKHN0YXRlLm1hcFN0eWxlc1tzdHlsZVR5cGVdKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIC4uLnN0YXRlLFxyXG4gICAgc3R5bGVUeXBlLFxyXG4gICAgdmlzaWJsZUxheWVyR3JvdXBzLFxyXG4gICAgdGhyZWVEQnVpbGRpbmdDb2xvcixcclxuICAgIC4uLmdldE1hcFN0eWxlcyh7XHJcbiAgICAgIC4uLnN0YXRlLFxyXG4gICAgICB2aXNpYmxlTGF5ZXJHcm91cHMsXHJcbiAgICAgIHN0eWxlVHlwZVxyXG4gICAgfSlcclxuICB9O1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIENhbGxiYWNrIHdoZW4gbG9hZCBtYXAgc3R5bGUgc3VjY2Vzc1xyXG4gKiBAbWVtYmVyb2YgbWFwU3R5bGVVcGRhdGVyc1xyXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi9tYXAtc3R5bGUtdXBkYXRlcnMnKS5sb2FkTWFwU3R5bGVzVXBkYXRlcn1cclxuICogQHB1YmxpY1xyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGxvYWRNYXBTdHlsZXNVcGRhdGVyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBjb25zdCBuZXdTdHlsZXMgPSBhY3Rpb24ucGF5bG9hZCB8fCB7fTtcclxuICBjb25zdCBhZGRMYXllckdyb3VwcyA9IE9iamVjdC5rZXlzKG5ld1N0eWxlcykucmVkdWNlKFxyXG4gICAgKGFjY3UsIGlkKSA9PiAoe1xyXG4gICAgICAuLi5hY2N1LFxyXG4gICAgICBbaWRdOiB7XHJcbiAgICAgICAgLi4ubmV3U3R5bGVzW2lkXSxcclxuICAgICAgICBsYXllckdyb3VwczogbmV3U3R5bGVzW2lkXS5sYXllckdyb3VwcyB8fCBnZXRMYXllckdyb3Vwc0Zyb21TdHlsZShuZXdTdHlsZXNbaWRdLnN0eWxlKVxyXG4gICAgICB9XHJcbiAgICB9KSxcclxuICAgIHt9XHJcbiAgKTtcclxuXHJcbiAgLy8gYWRkIG5ldyBzdHlsZXMgdG8gc3RhdGVcclxuICBjb25zdCBuZXdTdGF0ZSA9IHtcclxuICAgIC4uLnN0YXRlLFxyXG4gICAgbWFwU3R5bGVzOiB7XHJcbiAgICAgIC4uLnN0YXRlLm1hcFN0eWxlcyxcclxuICAgICAgLi4uYWRkTGF5ZXJHcm91cHNcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gbmV3U3R5bGVzW3N0YXRlLnN0eWxlVHlwZV1cclxuICAgID8gbWFwU3R5bGVDaGFuZ2VVcGRhdGVyKG5ld1N0YXRlLCB7cGF5bG9hZDogc3RhdGUuc3R5bGVUeXBlfSlcclxuICAgIDogbmV3U3RhdGU7XHJcbn07XHJcblxyXG4vKipcclxuICogQ2FsbGJhY2sgd2hlbiBsb2FkIG1hcCBzdHlsZSBlcnJvclxyXG4gKiBAbWVtYmVyb2YgbWFwU3R5bGVVcGRhdGVyc1xyXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi9tYXAtc3R5bGUtdXBkYXRlcnMnKS5sb2FkTWFwU3R5bGVFcnJVcGRhdGVyfVxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG4vLyBkbyBub3RoaW5nIGZvciBub3csIGlmIGRpZG4ndCBsb2FkLCBza2lwIGl0XHJcbmV4cG9ydCBjb25zdCBsb2FkTWFwU3R5bGVFcnJVcGRhdGVyID0gc3RhdGUgPT4gc3RhdGU7XHJcblxyXG4vKipcclxuICogQG1lbWJlcm9mIG1hcFN0eWxlVXBkYXRlcnNcclxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vbWFwLXN0eWxlLXVwZGF0ZXJzJykucmVxdWVzdE1hcFN0eWxlc1VwZGF0ZXJ9XHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmV4cG9ydCBjb25zdCByZXF1ZXN0TWFwU3R5bGVzVXBkYXRlciA9IChzdGF0ZSwge3BheWxvYWQ6IG1hcFN0eWxlc30pID0+IHtcclxuICBjb25zdCBsb2FkTWFwU3R5bGVUYXNrcyA9IGdldExvYWRNYXBTdHlsZVRhc2tzKFxyXG4gICAgbWFwU3R5bGVzLFxyXG4gICAgc3RhdGUubWFwYm94QXBpQWNjZXNzVG9rZW4sXHJcbiAgICBzdGF0ZS5tYXBib3hBcGlVcmxcclxuICApO1xyXG4gIHJldHVybiB3aXRoVGFzayhzdGF0ZSwgbG9hZE1hcFN0eWxlVGFza3MpO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIExvYWQgbWFwIHN0eWxlIG9iamVjdCB3aGVuIHBhc3MgaW4gc2F2ZWQgbWFwIGNvbmZpZ1xyXG4gKiBAbWVtYmVyb2YgbWFwU3R5bGVVcGRhdGVyc1xyXG4gKiBAcGFyYW0gc3RhdGUgYG1hcFN0eWxlYFxyXG4gKiBAcGFyYW0gYWN0aW9uXHJcbiAqIEBwYXJhbSBhY3Rpb24ucGF5bG9hZCBzYXZlZCBtYXAgY29uZmlnIGB7bWFwU3R5bGUsIHZpc1N0YXRlLCBtYXBTdGF0ZX1gXHJcbiAqIEByZXR1cm5zIG5leHRTdGF0ZSBvciBgcmVhY3QtcGFtYCB0YXNrcyB0byBsb2FkIG1hcCBzdHlsZSBvYmplY3RcclxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vbWFwLXN0eWxlLXVwZGF0ZXJzJykucmVjZWl2ZU1hcENvbmZpZ1VwZGF0ZXJ9XHJcbiAqL1xyXG5leHBvcnQgY29uc3QgcmVjZWl2ZU1hcENvbmZpZ1VwZGF0ZXIgPSAoc3RhdGUsIHtwYXlsb2FkOiB7Y29uZmlnID0ge319fSkgPT4ge1xyXG4gIGNvbnN0IHttYXBTdHlsZX0gPSBjb25maWcgfHwge307XHJcblxyXG4gIGlmICghbWFwU3R5bGUpIHtcclxuICAgIHJldHVybiBzdGF0ZTtcclxuICB9XHJcblxyXG4gIC8vIGlmIHNhdmVkIGN1c3RvbSBtYXBTdHlsZXMgbG9hZCB0aGUgc3R5bGUgb2JqZWN0XHJcbiAgY29uc3QgbG9hZE1hcFN0eWxlVGFza3MgPSBtYXBTdHlsZS5tYXBTdHlsZXNcclxuICAgID8gZ2V0TG9hZE1hcFN0eWxlVGFza3MobWFwU3R5bGUubWFwU3R5bGVzLCBzdGF0ZS5tYXBib3hBcGlBY2Nlc3NUb2tlbiwgc3RhdGUubWFwYm94QXBpVXJsKVxyXG4gICAgOiBudWxsO1xyXG5cclxuICAvLyBtZXJnZSBkZWZhdWx0IG1hcFN0eWxlc1xyXG4gIGNvbnN0IG1lcmdlZCA9IG1hcFN0eWxlLm1hcFN0eWxlc1xyXG4gICAgPyB7XHJcbiAgICAgICAgLi4ubWFwU3R5bGUsXHJcbiAgICAgICAgbWFwU3R5bGVzOiB7XHJcbiAgICAgICAgICAuLi5tYXBTdHlsZS5tYXBTdHlsZXMsXHJcbiAgICAgICAgICAuLi5zdGF0ZS5tYXBTdHlsZXNcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIDogbWFwU3R5bGU7XHJcblxyXG4gIC8vIHNldCBjdXN0b20zREJ1aWxkaW5nQ29sb3I6IHRydWUgaWYgbWFwU3R5bGUgY29udGFpbnMgdGhyZWVEQnVpbGRpbmdDb2xvclxyXG4gIG1lcmdlZC5jdXN0b20zREJ1aWxkaW5nQ29sb3IgPVxyXG4gICAgQm9vbGVhbihtYXBTdHlsZS50aHJlZURCdWlsZGluZ0NvbG9yKSB8fCBtZXJnZWQuY3VzdG9tM0RCdWlsZGluZ0NvbG9yO1xyXG4gIGNvbnN0IG5ld1N0YXRlID0gbWFwQ29uZmlnQ2hhbmdlVXBkYXRlcihzdGF0ZSwge3BheWxvYWQ6IG1lcmdlZH0pO1xyXG5cclxuICByZXR1cm4gbG9hZE1hcFN0eWxlVGFza3MgPyB3aXRoVGFzayhuZXdTdGF0ZSwgbG9hZE1hcFN0eWxlVGFza3MpIDogbmV3U3RhdGU7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBnZXRMb2FkTWFwU3R5bGVUYXNrcyhtYXBTdHlsZXMsIG1hcGJveEFwaUFjY2Vzc1Rva2VuLCBtYXBib3hBcGlVcmwpIHtcclxuICByZXR1cm4gW1xyXG4gICAgVGFzay5hbGwoXHJcbiAgICAgIE9iamVjdC52YWx1ZXMobWFwU3R5bGVzKVxyXG4gICAgICAgIC5tYXAoKHtpZCwgdXJsLCBhY2Nlc3NUb2tlbn0pID0+ICh7XHJcbiAgICAgICAgICBpZCxcclxuICAgICAgICAgIHVybDogaXNWYWxpZFN0eWxlVXJsKHVybClcclxuICAgICAgICAgICAgPyBnZXRTdHlsZURvd25sb2FkVXJsKHVybCwgYWNjZXNzVG9rZW4gfHwgbWFwYm94QXBpQWNjZXNzVG9rZW4sIG1hcGJveEFwaVVybClcclxuICAgICAgICAgICAgOiB1cmxcclxuICAgICAgICB9KSlcclxuICAgICAgICAubWFwKExPQURfTUFQX1NUWUxFX1RBU0spXHJcbiAgICApLmJpbWFwKFxyXG4gICAgICAvLyBzdWNjZXNzXHJcbiAgICAgIHJlc3VsdHMgPT5cclxuICAgICAgICBsb2FkTWFwU3R5bGVzKFxyXG4gICAgICAgICAgcmVzdWx0cy5yZWR1Y2UoXHJcbiAgICAgICAgICAgIChhY2N1LCB7aWQsIHN0eWxlfSkgPT4gKHtcclxuICAgICAgICAgICAgICAuLi5hY2N1LFxyXG4gICAgICAgICAgICAgIFtpZF06IHtcclxuICAgICAgICAgICAgICAgIC4uLm1hcFN0eWxlc1tpZF0sXHJcbiAgICAgICAgICAgICAgICBzdHlsZVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIHt9XHJcbiAgICAgICAgICApXHJcbiAgICAgICAgKSxcclxuICAgICAgLy8gZXJyb3JcclxuICAgICAgbG9hZE1hcFN0eWxlRXJyXHJcbiAgICApXHJcbiAgXTtcclxufVxyXG4vKipcclxuICogUmVzZXQgbWFwIHN0eWxlIGNvbmZpZyB0byBpbml0aWFsIHN0YXRlXHJcbiAqIEBtZW1iZXJvZiBtYXBTdHlsZVVwZGF0ZXJzXHJcbiAqIEBwYXJhbSBzdGF0ZSBgbWFwU3R5bGVgXHJcbiAqIEByZXR1cm5zIG5leHRTdGF0ZVxyXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi9tYXAtc3R5bGUtdXBkYXRlcnMnKS5yZXNldE1hcENvbmZpZ01hcFN0eWxlVXBkYXRlcn1cclxuICogQHB1YmxpY1xyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHJlc2V0TWFwQ29uZmlnTWFwU3R5bGVVcGRhdGVyID0gc3RhdGUgPT4ge1xyXG4gIGNvbnN0IGVtcHR5Q29uZmlnID0ge1xyXG4gICAgLi4uSU5JVElBTF9NQVBfU1RZTEUsXHJcbiAgICBtYXBib3hBcGlBY2Nlc3NUb2tlbjogc3RhdGUubWFwYm94QXBpQWNjZXNzVG9rZW4sXHJcbiAgICBtYXBib3hBcGlVcmw6IHN0YXRlLm1hcGJveEFwaVVybCxcclxuICAgIG1hcFN0eWxlc1JlcGxhY2VEZWZhdWx0OiBzdGF0ZS5tYXBTdHlsZXNSZXBsYWNlRGVmYXVsdCxcclxuICAgIC4uLnN0YXRlLmluaXRpYWxTdGF0ZSxcclxuICAgIG1hcFN0eWxlczogc3RhdGUubWFwU3R5bGVzLFxyXG4gICAgaW5pdGlhbFN0YXRlOiBzdGF0ZS5pbml0aWFsU3RhdGVcclxuICB9O1xyXG5cclxuICByZXR1cm4gbWFwU3R5bGVDaGFuZ2VVcGRhdGVyKGVtcHR5Q29uZmlnLCB7cGF5bG9hZDogZW1wdHlDb25maWcuc3R5bGVUeXBlfSk7XHJcbn07XHJcblxyXG4vKipcclxuICogQ2FsbGJhY2sgd2hlbiBhIGN1c3RvbSBtYXAgc3R5bGUgb2JqZWN0IGlzIHJlY2VpdmVkXHJcbiAqIEBtZW1iZXJvZiBtYXBTdHlsZVVwZGF0ZXJzXHJcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL21hcC1zdHlsZS11cGRhdGVycycpLmxvYWRDdXN0b21NYXBTdHlsZVVwZGF0ZXJ9XHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmV4cG9ydCBjb25zdCBsb2FkQ3VzdG9tTWFwU3R5bGVVcGRhdGVyID0gKHN0YXRlLCB7cGF5bG9hZDoge2ljb24sIHN0eWxlLCBlcnJvcn19KSA9PiAoe1xyXG4gIC4uLnN0YXRlLFxyXG4gIGlucHV0U3R5bGU6IHtcclxuICAgIC4uLnN0YXRlLmlucHV0U3R5bGUsXHJcbiAgICAvLyBzdHlsZSBqc29uIGFuZCBpY29uIHdpbGwgbG9hZCBhc3luY2hyb25vdXNseVxyXG4gICAgLi4uKHN0eWxlXHJcbiAgICAgID8ge1xyXG4gICAgICAgICAgaWQ6IHN0eWxlLmlkIHx8IGdlbmVyYXRlSGFzaElkKCksXHJcbiAgICAgICAgICAvLyBtYWtlIGEgY29weSBvZiB0aGUgc3R5bGUgb2JqZWN0XHJcbiAgICAgICAgICBzdHlsZTogY2xvbmVEZWVwKHN0eWxlKSxcclxuICAgICAgICAgIGxhYmVsOiBzdHlsZS5uYW1lLFxyXG4gICAgICAgICAgLy8gZ2F0aGVyaW5nIGxheWVyIGdyb3VwIGluZm8gZnJvbSBzdHlsZSBqc29uXHJcbiAgICAgICAgICBsYXllckdyb3VwczogZ2V0TGF5ZXJHcm91cHNGcm9tU3R5bGUoc3R5bGUpXHJcbiAgICAgICAgfVxyXG4gICAgICA6IHt9KSxcclxuICAgIC4uLihpY29uID8ge2ljb259IDoge30pLFxyXG4gICAgLi4uKGVycm9yICE9PSB1bmRlZmluZWQgPyB7ZXJyb3J9IDoge30pXHJcbiAgfVxyXG59KTtcclxuXHJcbi8qKlxyXG4gKiBJbnB1dCBhIGN1c3RvbSBtYXAgc3R5bGUgb2JqZWN0XHJcbiAqIEBtZW1iZXJvZiBtYXBTdHlsZVVwZGF0ZXJzXHJcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL21hcC1zdHlsZS11cGRhdGVycycpLmlucHV0TWFwU3R5bGVVcGRhdGVyfVxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgaW5wdXRNYXBTdHlsZVVwZGF0ZXIgPSAoc3RhdGUsIHtwYXlsb2FkOiB7aW5wdXRTdHlsZSwgbWFwU3RhdGV9fSkgPT4ge1xyXG4gIGNvbnN0IHVwZGF0ZWQgPSB7XHJcbiAgICAuLi5zdGF0ZS5pbnB1dFN0eWxlLFxyXG4gICAgLi4uaW5wdXRTdHlsZVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGlzVmFsaWQgPSBpc1ZhbGlkU3R5bGVVcmwodXBkYXRlZC51cmwpO1xyXG4gIGNvbnN0IGljb24gPSBpc1ZhbGlkXHJcbiAgICA/IGdldFN0eWxlSW1hZ2VJY29uKHtcclxuICAgICAgICBtYXBTdGF0ZSxcclxuICAgICAgICBzdHlsZVVybDogdXBkYXRlZC51cmwsXHJcbiAgICAgICAgbWFwYm94QXBpQWNjZXNzVG9rZW46IHVwZGF0ZWQuYWNjZXNzVG9rZW4gfHwgc3RhdGUubWFwYm94QXBpQWNjZXNzVG9rZW4sXHJcbiAgICAgICAgbWFwYm94QXBpVXJsOiBzdGF0ZS5tYXBib3hBcGlVcmwgfHwgREVGQVVMVF9NQVBCT1hfQVBJX1VSTFxyXG4gICAgICB9KVxyXG4gICAgOiBzdGF0ZS5pbnB1dFN0eWxlLmljb247XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICAuLi5zdGF0ZSxcclxuICAgIGlucHV0U3R5bGU6IHtcclxuICAgICAgLi4udXBkYXRlZCxcclxuICAgICAgaXNWYWxpZCxcclxuICAgICAgaWNvblxyXG4gICAgfVxyXG4gIH07XHJcbn07XHJcblxyXG4vKipcclxuICogQWRkIG1hcCBzdHlsZSBmcm9tIHVzZXIgaW5wdXQgdG8gcmVkdWNlciBhbmQgc2V0IGl0IHRvIGN1cnJlbnQgc3R5bGVcclxuICogVGhpcyBhY3Rpb24gaXMgY2FsbGVkIHdoZW4gdXNlciBjbGljayBjb25maXJtIGFmdGVyIHB1dHRpbmcgaW4gYSB2YWxpZCBzdHlsZSB1cmwgaW4gdGhlIGN1c3RvbSBtYXAgc3R5bGUgZGlhbG9nLlxyXG4gKiBJdCBzaG91bGQgbm90IGJlIGNhbGxlZCBmcm9tIG91dHNpZGUga2VwbGVyLmdsIHdpdGhvdXQgYSB2YWxpZCBgaW5wdXRTdHlsZWAgaW4gdGhlIGBtYXBTdHlsZWAgcmVkdWNlci5cclxuICogQG1lbWJlcm9mIG1hcFN0eWxlVXBkYXRlcnNcclxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vbWFwLXN0eWxlLXVwZGF0ZXJzJykuYWRkQ3VzdG9tTWFwU3R5bGVVcGRhdGVyfVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGFkZEN1c3RvbU1hcFN0eWxlVXBkYXRlciA9IHN0YXRlID0+IHtcclxuICBjb25zdCBzdHlsZUlkID0gc3RhdGUuaW5wdXRTdHlsZS5pZDtcclxuICBjb25zdCBuZXdTdGF0ZSA9IHtcclxuICAgIC4uLnN0YXRlLFxyXG4gICAgbWFwU3R5bGVzOiB7XHJcbiAgICAgIC4uLnN0YXRlLm1hcFN0eWxlcyxcclxuICAgICAgW3N0eWxlSWRdOiBzdGF0ZS5pbnB1dFN0eWxlXHJcbiAgICB9LFxyXG4gICAgLy8gc2V0IHRvIGRlZmF1bHRcclxuICAgIGlucHV0U3R5bGU6IGdldEluaXRpYWxJbnB1dFN0eWxlKClcclxuICB9O1xyXG4gIC8vIHNldCBuZXcgc3R5bGVcclxuICByZXR1cm4gbWFwU3R5bGVDaGFuZ2VVcGRhdGVyKG5ld1N0YXRlLCB7cGF5bG9hZDogc3R5bGVJZH0pO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIFVwZGF0ZXMgM2QgYnVpbGRpbmcgY29sb3JcclxuICogQG1lbWJlcm9mIG1hcFN0eWxlVXBkYXRlcnNcclxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vbWFwLXN0eWxlLXVwZGF0ZXJzJykuc2V0M2RCdWlsZGluZ0NvbG9yVXBkYXRlcn1cclxuICovXHJcbmV4cG9ydCBjb25zdCBzZXQzZEJ1aWxkaW5nQ29sb3JVcGRhdGVyID0gKHN0YXRlLCB7cGF5bG9hZDogY29sb3J9KSA9PiAoe1xyXG4gIC4uLnN0YXRlLFxyXG4gIHRocmVlREJ1aWxkaW5nQ29sb3I6IGNvbG9yLFxyXG4gIGN1c3RvbTNEQnVpbGRpbmdDb2xvcjogdHJ1ZVxyXG59KTtcclxuXHJcbi8qKlxyXG4gKiBSZXR1cm4gdGhlIGluaXRpYWwgaW5wdXQgc3R5bGVcclxuICogQHJldHVybiBPYmplY3RcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRJbml0aWFsSW5wdXRTdHlsZSgpIHtcclxuICByZXR1cm4ge1xyXG4gICAgYWNjZXNzVG9rZW46IG51bGwsXHJcbiAgICBlcnJvcjogZmFsc2UsXHJcbiAgICBpc1ZhbGlkOiBmYWxzZSxcclxuICAgIGxhYmVsOiBudWxsLFxyXG4gICAgc3R5bGU6IG51bGwsXHJcbiAgICB1cmw6IG51bGwsXHJcbiAgICBpY29uOiBudWxsLFxyXG4gICAgY3VzdG9tOiB0cnVlXHJcbiAgfTtcclxufVxyXG4iXX0=