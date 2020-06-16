"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setLocaleUpdater = exports.toggleSplitMapUpdater = exports.loadFilesErrUpdater = exports.loadFilesSuccessUpdater = exports.loadFilesUpdater = exports.removeNotificationUpdater = exports.addNotificationUpdater = exports.setExportMapHTMLModeUpdater = exports.setExportMapFormatUpdater = exports.setUserMapboxAccessTokenUpdater = exports.setExportDataUpdater = exports.setExportFilteredUpdater = exports.setExportDataTypeUpdater = exports.setExportSelectedDatasetUpdater = exports.cleanupExportImageUpdater = exports.setExportImageErrorUpdater = exports.setExportImageDataUriUpdater = exports.startExportingImageUpdater = exports.setExportImageSettingUpdater = exports.openDeleteModalUpdater = exports.toggleMapControlUpdater = exports.hideExportDropdownUpdater = exports.showExportDropdownUpdater = exports.toggleModalUpdater = exports.toggleSidePanelUpdater = exports.INITIAL_UI_STATE = exports.DEFAULT_EXPORT_MAP = exports.DEFAULT_EXPORT_JSON = exports.DEFAULT_EXPORT_HTML = exports.DEFAULT_NOTIFICATIONS = exports.DEFAULT_EXPORT_DATA = exports.DEFAULT_LOAD_FILES = exports.DEFAULT_EXPORT_IMAGE = exports.DEFAULT_MAP_CONTROLS = exports.DEFAULT_MODAL = exports.DEFAULT_ACTIVE_SIDE_PANEL = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _defaultSettings = require("../constants/default-settings");

var _locales = require("../localization/locales");

var _notificationsUtils = require("../utils/notifications-utils");

var _exportUtils = require("../utils/export-utils");

var _DEFAULT_EXPORT_MAP;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var DEFAULT_ACTIVE_SIDE_PANEL = 'layer';
exports.DEFAULT_ACTIVE_SIDE_PANEL = DEFAULT_ACTIVE_SIDE_PANEL;
var DEFAULT_MODAL = _defaultSettings.ADD_DATA_ID;
/**
 * Updaters for `uiState` reducer. Can be used in your root reducer to directly modify kepler.gl's state.
 * Read more about [Using updaters](../advanced-usage/using-updaters.md)
 *
 * @public
 * @example
 *
 * import keplerGlReducer, {uiStateUpdaters} from 'kepler.gl/reducers';
 * // Root Reducer
 * const reducers = combineReducers({
 *  keplerGl: keplerGlReducer,
 *  app: appReducer
 * });
 *
 * const composedReducer = (state, action) => {
 *  switch (action.type) {
 *    // click button to close side panel
 *    case 'CLICK_BUTTON':
 *      return {
 *        ...state,
 *        keplerGl: {
 *          ...state.keplerGl,
 *          foo: {
 *             ...state.keplerGl.foo,
 *             uiState: uiStateUpdaters.toggleSidePanelUpdater(
 *               uiState, {payload: null}
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

exports.DEFAULT_MODAL = DEFAULT_MODAL;
var uiStateUpdaters = null;
/* eslint-enable no-unused-vars */

var DEFAULT_MAP_CONTROLS_FEATURES = {
  show: true,
  active: false,
  // defines which map index users are interacting with (through map controls)
  activeMapIndex: 0
};
/**
 * A list of map control visibility and whether is it active.
 * @memberof uiStateUpdaters
 * @constant
 * @property visibleLayers Default: `{show: true, active: false}`
 * @property mapLegend Default: `{show: true, active: false}`
 * @property toggle3d Default: `{show: true}`
 * @property splitMap Default: `{show: true}`
 * @property mapDraw Default: `{show: true, active: false}`
 * @property mapLocale Default: `{show: false, active: false}`
 * @type {import('./ui-state-updaters').MapControls}
 * @public
 */

var DEFAULT_MAP_CONTROLS = ['visibleLayers', 'mapLegend', 'toggle3d', 'splitMap', 'mapDraw', 'mapLocale'].reduce(function (_final, current) {
  return _objectSpread(_objectSpread({}, _final), {}, (0, _defineProperty2["default"])({}, current, DEFAULT_MAP_CONTROLS_FEATURES));
}, {});
/**
 * Default image export config
 * @memberof uiStateUpdaters
 * @constant
 * @property ratio Default: `'SCREEN'`,
 * @property resolution Default: `'ONE_X'`,
 * @property legend Default: `false`,
 * @property mapH Default: 0,
 * @property mapW Default: 0,
 * @property imageSize Default: {zoomOffset: 0, scale: 1, imageW: 0, imageH: 0},
 * @property imageDataUri Default: `''`,
 * @property exporting Default: `false`
 * @property error Default: `false`
 * @type {import('./ui-state-updaters').ExportImage}
 * @public
 */

exports.DEFAULT_MAP_CONTROLS = DEFAULT_MAP_CONTROLS;
var DEFAULT_EXPORT_IMAGE = {
  // user options
  ratio: _defaultSettings.EXPORT_IMG_RATIOS.SCREEN,
  resolution: _defaultSettings.RESOLUTIONS.ONE_X,
  legend: false,
  mapH: 0,
  mapW: 0,
  imageSize: {
    zoomOffset: 0,
    scale: 1,
    imageW: 0,
    imageH: 0
  },
  // exporting state
  imageDataUri: '',
  exporting: false,
  error: false
};
exports.DEFAULT_EXPORT_IMAGE = DEFAULT_EXPORT_IMAGE;
var DEFAULT_LOAD_FILES = {
  fileLoading: false
};
/**
 * Default initial `exportData` settings
 * @memberof uiStateUpdaters
 * @constant
 * @property selectedDataset Default: `''`,
 * @property dataType Default: `'csv'`,
 * @property filtered Default: `true`,
 * @type {import('./ui-state-updaters').ExportData}
 * @public
 */

exports.DEFAULT_LOAD_FILES = DEFAULT_LOAD_FILES;
var DEFAULT_EXPORT_DATA = {
  selectedDataset: '',
  dataType: _defaultSettings.EXPORT_DATA_TYPE.CSV,
  filtered: true
};
/**
 * @constant
 */

exports.DEFAULT_EXPORT_DATA = DEFAULT_EXPORT_DATA;
var DEFAULT_NOTIFICATIONS = [];
/**
 * @constant
 * @property exportMapboxAccessToken - Default: null, this is used when we provide a default mapbox token for users to take advantage of
 * @property userMapboxToken - Default: '', mapbox token provided by user through input field
 * @property mode - Default: 'READ', read only or editable
 * @type {import('./ui-state-updaters').ExportHtml}
 * @public
 */

exports.DEFAULT_NOTIFICATIONS = DEFAULT_NOTIFICATIONS;
var DEFAULT_EXPORT_HTML = {
  exportMapboxAccessToken: null,
  userMapboxToken: '',
  mode: _defaultSettings.EXPORT_HTML_MAP_MODES.READ
};
/**
 * @constant
 * @property hasData - Default: 'true',
 * @type {import('./ui-state-updaters').ExportJson}
 * @public
 */

exports.DEFAULT_EXPORT_HTML = DEFAULT_EXPORT_HTML;
var DEFAULT_EXPORT_JSON = {
  hasData: true
};
/**
 * Export Map Config
 * @constant
 * @property HTML - Default: 'DEFAULT_EXPORT_HTML',
 * @property JSON - Default: 'DEFAULT_EXPORT_JSON',
 * @property format - Default: 'HTML',
 * @type {import('./ui-state-updaters').ExportMap}
 * @public
 */

exports.DEFAULT_EXPORT_JSON = DEFAULT_EXPORT_JSON;
var DEFAULT_EXPORT_MAP = (_DEFAULT_EXPORT_MAP = {}, (0, _defineProperty2["default"])(_DEFAULT_EXPORT_MAP, _defaultSettings.EXPORT_MAP_FORMATS.HTML, DEFAULT_EXPORT_HTML), (0, _defineProperty2["default"])(_DEFAULT_EXPORT_MAP, _defaultSettings.EXPORT_MAP_FORMATS.JSON, DEFAULT_EXPORT_JSON), (0, _defineProperty2["default"])(_DEFAULT_EXPORT_MAP, "format", _defaultSettings.EXPORT_MAP_FORMATS.HTML), _DEFAULT_EXPORT_MAP);
/**
 * Default initial `uiState`
 * @memberof uiStateUpdaters
 * @constant
 * @property readOnly Default: `false`
 * @property activeSidePanel Default: `'layer'`
 * @property currentModal Default: `'addData'`
 * @property datasetKeyToRemove Default: `null`
 * @property visibleDropdown Default: `null`
 * @property exportImage Default: [`DEFAULT_EXPORT_IMAGE`](#default_export_image)
 * @property exportData Default: [`DEFAULT_EXPORT_DATA`](#default_export_data)
 * @property exportMap Default: [`DEFAULT_EXPORT_MAP`](#default_export_map)
 * @property mapControls Default: [`DEFAULT_MAP_CONTROLS`](#default_map_controls)
 * @property notifications Default: `[]`
 * @property notifications Default: `[]`
 * @property loadFiles
 * @type {import('./ui-state-updaters').UiState}
 * @public
 */

exports.DEFAULT_EXPORT_MAP = DEFAULT_EXPORT_MAP;
var INITIAL_UI_STATE = {
  readOnly: false,
  activeSidePanel: DEFAULT_ACTIVE_SIDE_PANEL,
  currentModal: DEFAULT_MODAL,
  datasetKeyToRemove: null,
  visibleDropdown: null,
  // export image modal ui
  exportImage: DEFAULT_EXPORT_IMAGE,
  // export data modal ui
  exportData: DEFAULT_EXPORT_DATA,
  // html export
  exportMap: DEFAULT_EXPORT_MAP,
  // map control panels
  mapControls: DEFAULT_MAP_CONTROLS,
  // ui notifications
  notifications: DEFAULT_NOTIFICATIONS,
  // load files
  loadFiles: DEFAULT_LOAD_FILES,
  // Locale of the UI
  locale: _locales.LOCALE_CODES.en
};
/* Updaters */

/**
 * Toggle active side panel
 * @memberof uiStateUpdaters
 * @param state `uiState`
 * @param action
 * @param action.payload id of side panel to be shown, one of `layer`, `filter`, `interaction`, `map`. close side panel if `null`
 * @returns nextState
 * @type {typeof import('./ui-state-updaters').toggleSidePanelUpdater}
 * @public
 */

exports.INITIAL_UI_STATE = INITIAL_UI_STATE;

var toggleSidePanelUpdater = function toggleSidePanelUpdater(state, _ref) {
  var id = _ref.payload;
  return id === state.activeSidePanel ? state : _objectSpread(_objectSpread({}, state), {}, {
    activeSidePanel: id
  });
};
/**
 * Show and hide modal dialog
 * @memberof uiStateUpdaters
 * @param state `uiState`
 * @param action
 * @paramaction.payload id of modal to be shown, null to hide modals. One of:
 *  - [`DATA_TABLE_ID`](../constants/default-settings.md#data_table_id)
 *  - [`DELETE_DATA_ID`](../constants/default-settings.md#delete_data_id)
 *  - [`ADD_DATA_ID`](../constants/default-settings.md#add_data_id)
 *  - [`EXPORT_IMAGE_ID`](../constants/default-settings.md#export_image_id)
 *  - [`EXPORT_DATA_ID`](../constants/default-settings.md#export_data_id)
 *  - [`ADD_MAP_STYLE_ID`](../constants/default-settings.md#add_map_style_id)
 * @returns nextState
 * @type {typeof import('./ui-state-updaters').toggleModalUpdater}
 * @public
 */


exports.toggleSidePanelUpdater = toggleSidePanelUpdater;

var toggleModalUpdater = function toggleModalUpdater(state, _ref2) {
  var id = _ref2.payload;
  return _objectSpread(_objectSpread({}, state), {}, {
    currentModal: id
  });
};
/**
 * Hide and show side panel header dropdown, activated by clicking the share link on top of the side panel
 * @memberof uiStateUpdaters
 * @type {typeof import('./ui-state-updaters').showExportDropdownUpdater}
 * @public
 */


exports.toggleModalUpdater = toggleModalUpdater;

var showExportDropdownUpdater = function showExportDropdownUpdater(state, _ref3) {
  var id = _ref3.payload;
  return _objectSpread(_objectSpread({}, state), {}, {
    visibleDropdown: id
  });
};
/**
 * Hide side panel header dropdown, activated by clicking the share link on top of the side panel
 * @memberof uiStateUpdaters
 * @type {typeof import('./ui-state-updaters').hideExportDropdownUpdater}
 * @public
 */


exports.showExportDropdownUpdater = showExportDropdownUpdater;

var hideExportDropdownUpdater = function hideExportDropdownUpdater(state) {
  return _objectSpread(_objectSpread({}, state), {}, {
    visibleDropdown: null
  });
};
/**
 * Toggle active map control panel
 * @memberof uiStateUpdaters
 * @param state `uiState`
 * @param action action
 * @param action.payload map control panel id, one of the keys of: [`DEFAULT_MAP_CONTROLS`](#default_map_controls)
 * @returns nextState
 * @type {typeof import('./ui-state-updaters').toggleMapControlUpdater}
 * @public
 */


exports.hideExportDropdownUpdater = hideExportDropdownUpdater;

var toggleMapControlUpdater = function toggleMapControlUpdater(state, _ref4) {
  var _ref4$payload = _ref4.payload,
      panelId = _ref4$payload.panelId,
      _ref4$payload$index = _ref4$payload.index,
      index = _ref4$payload$index === void 0 ? 0 : _ref4$payload$index;
  return _objectSpread(_objectSpread({}, state), {}, {
    mapControls: _objectSpread(_objectSpread({}, state.mapControls), {}, (0, _defineProperty2["default"])({}, panelId, _objectSpread(_objectSpread({}, state.mapControls[panelId]), {}, {
      // this handles split map interaction
      // Toggling from within the same map will simply toggle the active property
      // Toggling from within different maps we set the active property to true
      active: index === state.mapControls[panelId].activeMapIndex ? !state.mapControls[panelId].active : true,
      activeMapIndex: index
    })))
  });
};
/**
 * Toggle active map control panel
 * @memberof uiStateUpdaters
 * @param state `uiState`
 * @param action
 * @param action.payload dataset id
 * @returns nextState
 * @type {typeof import('./ui-state-updaters').openDeleteModalUpdater}
 * @public
 */


exports.toggleMapControlUpdater = toggleMapControlUpdater;

var openDeleteModalUpdater = function openDeleteModalUpdater(state, _ref5) {
  var datasetKeyToRemove = _ref5.payload;
  return _objectSpread(_objectSpread({}, state), {}, {
    currentModal: _defaultSettings.DELETE_DATA_ID,
    datasetKeyToRemove: datasetKeyToRemove
  });
};
/**
 * Set `exportImage.legend` to `true` or `false`
 * @memberof uiStateUpdaters
 * @param state `uiState`
 * @returns nextState
 * @type {typeof import('./ui-state-updaters').setExportImageSettingUpdater}
 * @public
 */


exports.openDeleteModalUpdater = openDeleteModalUpdater;

var setExportImageSettingUpdater = function setExportImageSettingUpdater(state, _ref6) {
  var newSetting = _ref6.payload;

  var updated = _objectSpread(_objectSpread({}, state.exportImage), newSetting);

  var imageSize = (0, _exportUtils.calculateExportImageSize)(updated) || state.exportImage.imageSize;
  return _objectSpread(_objectSpread({}, state), {}, {
    exportImage: _objectSpread(_objectSpread({}, updated), {}, {
      imageSize: imageSize
    })
  });
};
/**
 * Set `exportImage.exporting` to `true`
 * @memberof uiStateUpdaters
 * @param state `uiState`
 * @returns nextState
 * @type {typeof import('./ui-state-updaters').startExportingImageUpdater}
 * @public
 */


exports.setExportImageSettingUpdater = setExportImageSettingUpdater;

var startExportingImageUpdater = function startExportingImageUpdater(state) {
  return _objectSpread(_objectSpread({}, state), {}, {
    exportImage: _objectSpread(_objectSpread({}, state.exportImage), {}, {
      exporting: true,
      imageDataUri: ''
    })
  });
};
/**
 * Set `exportImage.setExportImageDataUri` to a image dataUri
 * @memberof uiStateUpdaters
 * @param state `uiState`
 * @param action
 * @param action.payload export image data uri
 * @returns nextState
 * @type {typeof import('./ui-state-updaters').setExportImageDataUriUpdater}
 * @public
 */


exports.startExportingImageUpdater = startExportingImageUpdater;

var setExportImageDataUriUpdater = function setExportImageDataUriUpdater(state, _ref7) {
  var dataUri = _ref7.payload;
  return _objectSpread(_objectSpread({}, state), {}, {
    exportImage: _objectSpread(_objectSpread({}, state.exportImage), {}, {
      exporting: false,
      imageDataUri: dataUri
    })
  });
};
/**
 * @memberof uiStateUpdaters
 * @type {typeof import('./ui-state-updaters').setExportImageErrorUpdater}
 * @public
 */


exports.setExportImageDataUriUpdater = setExportImageDataUriUpdater;

var setExportImageErrorUpdater = function setExportImageErrorUpdater(state, _ref8) {
  var error = _ref8.payload;
  return _objectSpread(_objectSpread({}, state), {}, {
    exportImage: _objectSpread(_objectSpread({}, state.exportImage), {}, {
      exporting: false,
      error: error
    })
  });
};
/**
 * Delete cached export image
 * @memberof uiStateUpdaters
 * @type {typeof import('./ui-state-updaters').cleanupExportImageUpdater}
 * @public
 */


exports.setExportImageErrorUpdater = setExportImageErrorUpdater;

var cleanupExportImageUpdater = function cleanupExportImageUpdater(state) {
  return _objectSpread(_objectSpread({}, state), {}, {
    exportImage: _objectSpread(_objectSpread({}, state.exportImage), {}, {
      exporting: false,
      imageDataUri: '',
      error: false
    })
  });
};
/**
 * Set selected dataset for export
 * @memberof uiStateUpdaters
 * @param state `uiState`
 * @param action
 * @param action.payload dataset id
 * @returns nextState
 * @type {typeof import('./ui-state-updaters').setExportSelectedDatasetUpdater}
 * @public
 */


exports.cleanupExportImageUpdater = cleanupExportImageUpdater;

var setExportSelectedDatasetUpdater = function setExportSelectedDatasetUpdater(state, _ref9) {
  var dataset = _ref9.payload;
  return _objectSpread(_objectSpread({}, state), {}, {
    exportData: _objectSpread(_objectSpread({}, state.exportData), {}, {
      selectedDataset: dataset
    })
  });
};
/**
 * Set data format for exporting data
 * @memberof uiStateUpdaters
 * @param state `uiState`
 * @param action
 * @param action.payload one of `'text/csv'`
 * @returns nextState
 * @type {typeof import('./ui-state-updaters').setExportDataTypeUpdater}
 * @public
 */


exports.setExportSelectedDatasetUpdater = setExportSelectedDatasetUpdater;

var setExportDataTypeUpdater = function setExportDataTypeUpdater(state, _ref10) {
  var dataType = _ref10.payload;
  return _objectSpread(_objectSpread({}, state), {}, {
    exportData: _objectSpread(_objectSpread({}, state.exportData), {}, {
      dataType: dataType
    })
  });
};
/**
 * Whether to export filtered data, `true` or `false`
 * @memberof uiStateUpdaters
 * @param state `uiState`
 * @param action
 * @param action.payload
 * @returns nextState
 * @type {typeof import('./ui-state-updaters').setExportFilteredUpdater}
 * @public
 */


exports.setExportDataTypeUpdater = setExportDataTypeUpdater;

var setExportFilteredUpdater = function setExportFilteredUpdater(state, _ref11) {
  var filtered = _ref11.payload;
  return _objectSpread(_objectSpread({}, state), {}, {
    exportData: _objectSpread(_objectSpread({}, state.exportData), {}, {
      filtered: filtered
    })
  });
};
/**
 * Whether to including data in map config, toggle between `true` or `false`
 * @memberof uiStateUpdaters
 * @param state `uiState`
 * @returns nextState
 * @type {typeof import('./ui-state-updaters').setExportDataUpdater}
 * @public
 */


exports.setExportFilteredUpdater = setExportFilteredUpdater;

var setExportDataUpdater = function setExportDataUpdater(state) {
  return _objectSpread(_objectSpread({}, state), {}, {
    exportMap: _objectSpread(_objectSpread({}, state.exportMap), {}, (0, _defineProperty2["default"])({}, _defaultSettings.EXPORT_MAP_FORMATS.JSON, _objectSpread(_objectSpread({}, state.exportMap[_defaultSettings.EXPORT_MAP_FORMATS.JSON]), {}, {
      hasData: !state.exportMap[_defaultSettings.EXPORT_MAP_FORMATS.JSON].hasData
    })))
  });
};
/**
 * whether to export a mapbox access to HTML single page
 * @param state - `uiState`
 * @param action
 * @param action.payload
 * @returns nextState
 * @type {typeof import('./ui-state-updaters').setUserMapboxAccessTokenUpdater}
 * @public
 */


exports.setExportDataUpdater = setExportDataUpdater;

var setUserMapboxAccessTokenUpdater = function setUserMapboxAccessTokenUpdater(state, _ref12) {
  var userMapboxToken = _ref12.payload;
  return _objectSpread(_objectSpread({}, state), {}, {
    exportMap: _objectSpread(_objectSpread({}, state.exportMap), {}, (0, _defineProperty2["default"])({}, _defaultSettings.EXPORT_MAP_FORMATS.HTML, _objectSpread(_objectSpread({}, state.exportMap[_defaultSettings.EXPORT_MAP_FORMATS.HTML]), {}, {
      userMapboxToken: userMapboxToken
    })))
  });
};
/**
 * Sets the export map format
 * @param state - `uiState`
 * @param action
 * @param action.payload format to use to export the map into
 * @return nextState
 * @type {typeof import('./ui-state-updaters').setExportMapFormatUpdater}
 */


exports.setUserMapboxAccessTokenUpdater = setUserMapboxAccessTokenUpdater;

var setExportMapFormatUpdater = function setExportMapFormatUpdater(state, _ref13) {
  var format = _ref13.payload;
  return _objectSpread(_objectSpread({}, state), {}, {
    exportMap: _objectSpread(_objectSpread({}, state.exportMap), {}, {
      format: format
    })
  });
};
/**
 * Set the export html map mode
 * @param state - `uiState`
 * @param action
 * @param action.payload to be set (available modes: EXPORT_HTML_MAP_MODES)
 * @return nextState
 * @type {typeof import('./ui-state-updaters').setExportMapHTMLModeUpdater}
 */


exports.setExportMapFormatUpdater = setExportMapFormatUpdater;

var setExportMapHTMLModeUpdater = function setExportMapHTMLModeUpdater(state, _ref14) {
  var mode = _ref14.payload;
  return _objectSpread(_objectSpread({}, state), {}, {
    exportMap: _objectSpread(_objectSpread({}, state.exportMap), {}, (0, _defineProperty2["default"])({}, _defaultSettings.EXPORT_MAP_FORMATS.HTML, _objectSpread(_objectSpread({}, state.exportMap[_defaultSettings.EXPORT_MAP_FORMATS.HTML]), {}, {
      mode: mode
    })))
  });
};
/**
 * Add a notification to be displayed
 * @memberof uiStateUpdaters
 * @param state `uiState`
 * @param action
 * @param action.payload
 * @returns nextState
 * @type {typeof import('./ui-state-updaters').addNotificationUpdater}
 * @public
 */


exports.setExportMapHTMLModeUpdater = setExportMapHTMLModeUpdater;

var addNotificationUpdater = function addNotificationUpdater(state, _ref15) {
  var payload = _ref15.payload;
  return _objectSpread(_objectSpread({}, state), {}, {
    notifications: [].concat((0, _toConsumableArray2["default"])(state.notifications || []), [(0, _notificationsUtils.createNotification)(payload)])
  });
};
/**
 * Remove a notification
 * @memberof uiStateUpdaters
 * @param state `uiState`
 * @param action
 * @param action.payload id of the notification to be removed
 * @returns nextState
 * @type {typeof import('./ui-state-updaters').removeNotificationUpdater}
 * @public
 */


exports.addNotificationUpdater = addNotificationUpdater;

var removeNotificationUpdater = function removeNotificationUpdater(state, _ref16) {
  var id = _ref16.payload;
  return _objectSpread(_objectSpread({}, state), {}, {
    notifications: state.notifications.filter(function (n) {
      return n.id !== id;
    })
  });
};
/**
 * Fired when file loading begin
 * @memberof uiStateUpdaters
 * @param state `uiState`
 * @returns nextState
 * @type {typeof import('./ui-state-updaters').loadFilesUpdater}
 * @public
 */


exports.removeNotificationUpdater = removeNotificationUpdater;

var loadFilesUpdater = function loadFilesUpdater(state) {
  return _objectSpread(_objectSpread({}, state), {}, {
    loadFiles: _objectSpread(_objectSpread({}, state.loadFiles), {}, {
      fileLoading: true
    })
  });
};
/**
 * Handles loading file success and set fileLoading property to false
 * @memberof uiStateUpdaters
 * @param state `uiState`
 * @returns nextState
 * @type {typeof import('./ui-state-updaters').loadFilesSuccessUpdater}
 */


exports.loadFilesUpdater = loadFilesUpdater;

var loadFilesSuccessUpdater = function loadFilesSuccessUpdater(state) {
  return _objectSpread(_objectSpread({}, state), {}, {
    loadFiles: _objectSpread(_objectSpread({}, state.loadFiles), {}, {
      fileLoading: false
    })
  });
};
/**
 * Handles load file error and set fileLoading property to false
 * @memberof uiStateUpdaters
 * @param state
 * @param action
 * @param action.error
 * @returns nextState
 * @type {typeof import('./ui-state-updaters').loadFilesErrUpdater}
 * @public
 */


exports.loadFilesSuccessUpdater = loadFilesSuccessUpdater;

var loadFilesErrUpdater = function loadFilesErrUpdater(state, _ref17) {
  var error = _ref17.error;
  return addNotificationUpdater(_objectSpread(_objectSpread({}, state), {}, {
    loadFiles: _objectSpread(_objectSpread({}, state.loadFiles), {}, {
      fileLoading: false
    })
  }), {
    payload: (0, _notificationsUtils.errorNotification)({
      message: (error || {}).message || 'Failed to upload files',
      topic: _defaultSettings.DEFAULT_NOTIFICATION_TOPICS.global
    })
  });
};
/**
 * Handles toggle map split and reset all map control index to 0
 * @memberof uiStateUpdaters
 * @param state
 * @returns nextState
 * @type {typeof import('./ui-state-updaters').toggleSplitMapUpdater}
 * @public
 */


exports.loadFilesErrUpdater = loadFilesErrUpdater;

var toggleSplitMapUpdater = function toggleSplitMapUpdater(state) {
  return _objectSpread(_objectSpread({}, state), {}, {
    mapControls: Object.entries(state.mapControls).reduce(function (acc, entry) {
      return _objectSpread(_objectSpread({}, acc), {}, (0, _defineProperty2["default"])({}, entry[0], _objectSpread(_objectSpread({}, entry[1]), {}, {
        activeMapIndex: 0
      })));
    }, {})
  });
};
/**
 * Set the locale of the UI
 * @memberof uiStateUpdaters
 * @param state `uiState`
 * @param action
 * @param action.payload
 * @param action.payload.locale locale
 * @returns nextState
 * @type {typeof import('./ui-state-updaters').setLocaleUpdater}
 * @public
 */


exports.toggleSplitMapUpdater = toggleSplitMapUpdater;

var setLocaleUpdater = function setLocaleUpdater(state, _ref18) {
  var locale = _ref18.payload.locale;
  return _objectSpread(_objectSpread({}, state), {}, {
    locale: locale
  });
};

exports.setLocaleUpdater = setLocaleUpdater;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWR1Y2Vycy91aS1zdGF0ZS11cGRhdGVycy5qcyJdLCJuYW1lcyI6WyJERUZBVUxUX0FDVElWRV9TSURFX1BBTkVMIiwiREVGQVVMVF9NT0RBTCIsIkFERF9EQVRBX0lEIiwidWlTdGF0ZVVwZGF0ZXJzIiwiREVGQVVMVF9NQVBfQ09OVFJPTFNfRkVBVFVSRVMiLCJzaG93IiwiYWN0aXZlIiwiYWN0aXZlTWFwSW5kZXgiLCJERUZBVUxUX01BUF9DT05UUk9MUyIsInJlZHVjZSIsImZpbmFsIiwiY3VycmVudCIsIkRFRkFVTFRfRVhQT1JUX0lNQUdFIiwicmF0aW8iLCJFWFBPUlRfSU1HX1JBVElPUyIsIlNDUkVFTiIsInJlc29sdXRpb24iLCJSRVNPTFVUSU9OUyIsIk9ORV9YIiwibGVnZW5kIiwibWFwSCIsIm1hcFciLCJpbWFnZVNpemUiLCJ6b29tT2Zmc2V0Iiwic2NhbGUiLCJpbWFnZVciLCJpbWFnZUgiLCJpbWFnZURhdGFVcmkiLCJleHBvcnRpbmciLCJlcnJvciIsIkRFRkFVTFRfTE9BRF9GSUxFUyIsImZpbGVMb2FkaW5nIiwiREVGQVVMVF9FWFBPUlRfREFUQSIsInNlbGVjdGVkRGF0YXNldCIsImRhdGFUeXBlIiwiRVhQT1JUX0RBVEFfVFlQRSIsIkNTViIsImZpbHRlcmVkIiwiREVGQVVMVF9OT1RJRklDQVRJT05TIiwiREVGQVVMVF9FWFBPUlRfSFRNTCIsImV4cG9ydE1hcGJveEFjY2Vzc1Rva2VuIiwidXNlck1hcGJveFRva2VuIiwibW9kZSIsIkVYUE9SVF9IVE1MX01BUF9NT0RFUyIsIlJFQUQiLCJERUZBVUxUX0VYUE9SVF9KU09OIiwiaGFzRGF0YSIsIkRFRkFVTFRfRVhQT1JUX01BUCIsIkVYUE9SVF9NQVBfRk9STUFUUyIsIkhUTUwiLCJKU09OIiwiSU5JVElBTF9VSV9TVEFURSIsInJlYWRPbmx5IiwiYWN0aXZlU2lkZVBhbmVsIiwiY3VycmVudE1vZGFsIiwiZGF0YXNldEtleVRvUmVtb3ZlIiwidmlzaWJsZURyb3Bkb3duIiwiZXhwb3J0SW1hZ2UiLCJleHBvcnREYXRhIiwiZXhwb3J0TWFwIiwibWFwQ29udHJvbHMiLCJub3RpZmljYXRpb25zIiwibG9hZEZpbGVzIiwibG9jYWxlIiwiTE9DQUxFX0NPREVTIiwiZW4iLCJ0b2dnbGVTaWRlUGFuZWxVcGRhdGVyIiwic3RhdGUiLCJpZCIsInBheWxvYWQiLCJ0b2dnbGVNb2RhbFVwZGF0ZXIiLCJzaG93RXhwb3J0RHJvcGRvd25VcGRhdGVyIiwiaGlkZUV4cG9ydERyb3Bkb3duVXBkYXRlciIsInRvZ2dsZU1hcENvbnRyb2xVcGRhdGVyIiwicGFuZWxJZCIsImluZGV4Iiwib3BlbkRlbGV0ZU1vZGFsVXBkYXRlciIsIkRFTEVURV9EQVRBX0lEIiwic2V0RXhwb3J0SW1hZ2VTZXR0aW5nVXBkYXRlciIsIm5ld1NldHRpbmciLCJ1cGRhdGVkIiwic3RhcnRFeHBvcnRpbmdJbWFnZVVwZGF0ZXIiLCJzZXRFeHBvcnRJbWFnZURhdGFVcmlVcGRhdGVyIiwiZGF0YVVyaSIsInNldEV4cG9ydEltYWdlRXJyb3JVcGRhdGVyIiwiY2xlYW51cEV4cG9ydEltYWdlVXBkYXRlciIsInNldEV4cG9ydFNlbGVjdGVkRGF0YXNldFVwZGF0ZXIiLCJkYXRhc2V0Iiwic2V0RXhwb3J0RGF0YVR5cGVVcGRhdGVyIiwic2V0RXhwb3J0RmlsdGVyZWRVcGRhdGVyIiwic2V0RXhwb3J0RGF0YVVwZGF0ZXIiLCJzZXRVc2VyTWFwYm94QWNjZXNzVG9rZW5VcGRhdGVyIiwic2V0RXhwb3J0TWFwRm9ybWF0VXBkYXRlciIsImZvcm1hdCIsInNldEV4cG9ydE1hcEhUTUxNb2RlVXBkYXRlciIsImFkZE5vdGlmaWNhdGlvblVwZGF0ZXIiLCJyZW1vdmVOb3RpZmljYXRpb25VcGRhdGVyIiwiZmlsdGVyIiwibiIsImxvYWRGaWxlc1VwZGF0ZXIiLCJsb2FkRmlsZXNTdWNjZXNzVXBkYXRlciIsImxvYWRGaWxlc0VyclVwZGF0ZXIiLCJtZXNzYWdlIiwidG9waWMiLCJERUZBVUxUX05PVElGSUNBVElPTl9UT1BJQ1MiLCJnbG9iYWwiLCJ0b2dnbGVTcGxpdE1hcFVwZGF0ZXIiLCJPYmplY3QiLCJlbnRyaWVzIiwiYWNjIiwiZW50cnkiLCJzZXRMb2NhbGVVcGRhdGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBcUJBOztBQVVBOztBQUNBOztBQUNBOzs7Ozs7OztBQUVPLElBQU1BLHlCQUF5QixHQUFHLE9BQWxDOztBQUNBLElBQU1DLGFBQWEsR0FBR0MsNEJBQXRCO0FBRVA7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQ0E7OztBQUNBLElBQU1DLGVBQWUsR0FBRyxJQUF4QjtBQUNBOztBQUVBLElBQU1DLDZCQUE2QixHQUFHO0FBQ3BDQyxFQUFBQSxJQUFJLEVBQUUsSUFEOEI7QUFFcENDLEVBQUFBLE1BQU0sRUFBRSxLQUY0QjtBQUdwQztBQUNBQyxFQUFBQSxjQUFjLEVBQUU7QUFKb0IsQ0FBdEM7QUFPQTs7Ozs7Ozs7Ozs7Ozs7QUFhTyxJQUFNQyxvQkFBb0IsR0FBRyxDQUNsQyxlQURrQyxFQUVsQyxXQUZrQyxFQUdsQyxVQUhrQyxFQUlsQyxVQUprQyxFQUtsQyxTQUxrQyxFQU1sQyxXQU5rQyxFQU9sQ0MsTUFQa0MsQ0FRbEMsVUFBQ0MsTUFBRCxFQUFRQyxPQUFSO0FBQUEseUNBQ0tELE1BREwsNENBRUdDLE9BRkgsRUFFYVAsNkJBRmI7QUFBQSxDQVJrQyxFQVlsQyxFQVprQyxDQUE3QjtBQWVQOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQk8sSUFBTVEsb0JBQW9CLEdBQUc7QUFDbEM7QUFDQUMsRUFBQUEsS0FBSyxFQUFFQyxtQ0FBa0JDLE1BRlM7QUFHbENDLEVBQUFBLFVBQVUsRUFBRUMsNkJBQVlDLEtBSFU7QUFJbENDLEVBQUFBLE1BQU0sRUFBRSxLQUowQjtBQUtsQ0MsRUFBQUEsSUFBSSxFQUFFLENBTDRCO0FBTWxDQyxFQUFBQSxJQUFJLEVBQUUsQ0FONEI7QUFPbENDLEVBQUFBLFNBQVMsRUFBRTtBQUNUQyxJQUFBQSxVQUFVLEVBQUUs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QUFBLE1BQVN0QyxLQUFULFVBQVNBLEtBQVQ7QUFBQSxTQUNqQ2tFLHNCQUFzQixpQ0FFZjVCLEtBRmU7QUFHbEJMLElBQUFBLFNBQVMsa0NBQ0pLLEtBQUssQ0FBQ0wsU0FERjtBQUVQL0IsTUFBQUEsV0FBVyxFQUFFO0FBRk47QUFIUyxNQVFwQjtBQUNFc0MsSUFBQUEsT0FBTyxFQUFFLDJDQUFrQjtBQUN6QmlDLE1BQUFBLE9BQU8sRUFBRSxDQUFDekUsS0FBSyxJQUFJLEVBQVYsRUFBY3lFLE9BQWQsSUFBeUIsd0JBRFQ7QUFFekJDLE1BQUFBLEtBQUssRUFBRUMsNkNBQTRCQztBQUZWLEtBQWxCO0FBRFgsR0FSb0IsQ0FEVztBQUFBLENBQTVCO0FBaUJQOzs7Ozs7Ozs7Ozs7QUFRTyxJQUFNQyxxQkFBcUIsR0FBRyxTQUF4QkEscUJBQXdCLENBQUF2QyxLQUFLO0FBQUEseUNBQ3JDQSxLQURxQztBQUV4Q1AsSUFBQUEsV0FBVyxFQUFFK0MsTUFBTSxDQUFDQyxPQUFQLENBQWV6QyxLQUFLLENBQUNQLFdBQXJCLEVBQWtDbkQsTUFBbEMsQ0FDWCxVQUFDb0csR0FBRCxFQUFNQyxLQUFOO0FBQUEsNkNBQ0tELEdBREwsNENBRUdDLEtBQUssQ0FBQyxDQUFELENBRlIsa0NBR09BLEtBQUssQ0FBQyxDQUFELENBSFo7QUFJSXZHLFFBQUFBLGNBQWMsRUFBRTtBQUpwQjtBQUFBLEtBRFcsRUFRWCxFQVJXO0FBRjJCO0FBQUEsQ0FBbkM7QUFjUDs7Ozs7Ozs7Ozs7Ozs7O0FBV08sSUFBTXdHLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQzVDLEtBQUQ7QUFBQSxNQUFtQkosTUFBbkIsVUFBU00sT0FBVCxDQUFtQk4sTUFBbkI7QUFBQSx5Q0FDM0JJLEtBRDJCO0FBRTlCSixJQUFBQSxNQUFNLEVBQU5BO0FBRjhCO0FBQUEsQ0FBekIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG4vLyBAdHMtbm9jaGVja1xyXG5pbXBvcnQge1xyXG4gIEFERF9EQVRBX0lELFxyXG4gIERFRkFVTFRfTk9USUZJQ0FUSU9OX1RPUElDUyxcclxuICBERUxFVEVfREFUQV9JRCxcclxuICBFWFBPUlRfREFUQV9UWVBFLFxyXG4gIEVYUE9SVF9IVE1MX01BUF9NT0RFUyxcclxuICBFWFBPUlRfSU1HX1JBVElPUyxcclxuICBFWFBPUlRfTUFQX0ZPUk1BVFMsXHJcbiAgUkVTT0xVVElPTlNcclxufSBmcm9tICdjb25zdGFudHMvZGVmYXVsdC1zZXR0aW5ncyc7XHJcbmltcG9ydCB7TE9DQUxFX0NPREVTfSBmcm9tICdsb2NhbGl6YXRpb24vbG9jYWxlcyc7XHJcbmltcG9ydCB7Y3JlYXRlTm90aWZpY2F0aW9uLCBlcnJvck5vdGlmaWNhdGlvbn0gZnJvbSAndXRpbHMvbm90aWZpY2F0aW9ucy11dGlscyc7XHJcbmltcG9ydCB7Y2FsY3VsYXRlRXhwb3J0SW1hZ2VTaXplfSBmcm9tICd1dGlscy9leHBvcnQtdXRpbHMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IERFRkFVTFRfQUNUSVZFX1NJREVfUEFORUwgPSAnbGF5ZXInO1xyXG5leHBvcnQgY29uc3QgREVGQVVMVF9NT0RBTCA9IEFERF9EQVRBX0lEO1xyXG5cclxuLyoqXHJcbiAqIFVwZGF0ZXJzIGZvciBgdWlTdGF0ZWAgcmVkdWNlci4gQ2FuIGJlIHVzZWQgaW4geW91ciByb290IHJlZHVjZXIgdG8gZGlyZWN0bHkgbW9kaWZ5IGtlcGxlci5nbCdzIHN0YXRlLlxyXG4gKiBSZWFkIG1vcmUgYWJvdXQgW1VzaW5nIHVwZGF0ZXJzXSguLi9hZHZhbmNlZC11c2FnZS91c2luZy11cGRhdGVycy5tZClcclxuICpcclxuICogQHB1YmxpY1xyXG4gKiBAZXhhbXBsZVxyXG4gKlxyXG4gKiBpbXBvcnQga2VwbGVyR2xSZWR1Y2VyLCB7dWlTdGF0ZVVwZGF0ZXJzfSBmcm9tICdrZXBsZXIuZ2wvcmVkdWNlcnMnO1xyXG4gKiAvLyBSb290IFJlZHVjZXJcclxuICogY29uc3QgcmVkdWNlcnMgPSBjb21iaW5lUmVkdWNlcnMoe1xyXG4gKiAga2VwbGVyR2w6IGtlcGxlckdsUmVkdWNlcixcclxuICogIGFwcDogYXBwUmVkdWNlclxyXG4gKiB9KTtcclxuICpcclxuICogY29uc3QgY29tcG9zZWRSZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICogIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICogICAgLy8gY2xpY2sgYnV0dG9uIHRvIGNsb3NlIHNpZGUgcGFuZWxcclxuICogICAgY2FzZSAnQ0xJQ0tfQlVUVE9OJzpcclxuICogICAgICByZXR1cm4ge1xyXG4gKiAgICAgICAgLi4uc3RhdGUsXHJcbiAqICAgICAgICBrZXBsZXJHbDoge1xyXG4gKiAgICAgICAgICAuLi5zdGF0ZS5rZXBsZXJHbCxcclxuICogICAgICAgICAgZm9vOiB7XHJcbiAqICAgICAgICAgICAgIC4uLnN0YXRlLmtlcGxlckdsLmZvbyxcclxuICogICAgICAgICAgICAgdWlTdGF0ZTogdWlTdGF0ZVVwZGF0ZXJzLnRvZ2dsZVNpZGVQYW5lbFVwZGF0ZXIoXHJcbiAqICAgICAgICAgICAgICAgdWlTdGF0ZSwge3BheWxvYWQ6IG51bGx9XHJcbiAqICAgICAgICAgICAgIClcclxuICogICAgICAgICAgfVxyXG4gKiAgICAgICAgfVxyXG4gKiAgICAgIH07XHJcbiAqICB9XHJcbiAqICByZXR1cm4gcmVkdWNlcnMoc3RhdGUsIGFjdGlvbik7XHJcbiAqIH07XHJcbiAqXHJcbiAqIGV4cG9ydCBkZWZhdWx0IGNvbXBvc2VkUmVkdWNlcjtcclxuICovXHJcbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXHJcbmNvbnN0IHVpU3RhdGVVcGRhdGVycyA9IG51bGw7XHJcbi8qIGVzbGludC1lbmFibGUgbm8tdW51c2VkLXZhcnMgKi9cclxuXHJcbmNvbnN0IERFRkFVTFRfTUFQX0NPTlRST0xTX0ZFQVRVUkVTID0ge1xyXG4gIHNob3c6IHRydWUsXHJcbiAgYWN0aXZlOiBmYWxzZSxcclxuICAvLyBkZWZpbmVzIHdoaWNoIG1hcCBpbmRleCB1c2VycyBhcmUgaW50ZXJhY3Rpbmcgd2l0aCAodGhyb3VnaCBtYXAgY29udHJvbHMpXHJcbiAgYWN0aXZlTWFwSW5kZXg6IDBcclxufTtcclxuXHJcbi8qKlxyXG4gKiBBIGxpc3Qgb2YgbWFwIGNvbnRyb2wgdmlzaWJpbGl0eSBhbmQgd2hldGhlciBpcyBpdCBhY3RpdmUuXHJcbiAqIEBtZW1iZXJvZiB1aVN0YXRlVXBkYXRlcnNcclxuICogQGNvbnN0YW50XHJcbiAqIEBwcm9wZXJ0eSB2aXNpYmxlTGF5ZXJzIERlZmF1bHQ6IGB7c2hvdzogdHJ1ZSwgYWN0aXZlOiBmYWxzZX1gXHJcbiAqIEBwcm9wZXJ0eSBtYXBMZWdlbmQgRGVmYXVsdDogYHtzaG93OiB0cnVlLCBhY3RpdmU6IGZhbHNlfWBcclxuICogQHByb3BlcnR5IHRvZ2dsZTNkIERlZmF1bHQ6IGB7c2hvdzogdHJ1ZX1gXHJcbiAqIEBwcm9wZXJ0eSBzcGxpdE1hcCBEZWZhdWx0OiBge3Nob3c6IHRydWV9YFxyXG4gKiBAcHJvcGVydHkgbWFwRHJhdyBEZWZhdWx0OiBge3Nob3c6IHRydWUsIGFjdGl2ZTogZmFsc2V9YFxyXG4gKiBAcHJvcGVydHkgbWFwTG9jYWxlIERlZmF1bHQ6IGB7c2hvdzogZmFsc2UsIGFjdGl2ZTogZmFsc2V9YFxyXG4gKiBAdHlwZSB7aW1wb3J0KCcuL3VpLXN0YXRlLXVwZGF0ZXJzJykuTWFwQ29udHJvbHN9XHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmV4cG9ydCBjb25zdCBERUZBVUxUX01BUF9DT05UUk9MUyA9IFtcclxuICAndmlzaWJsZUxheWVycycsXHJcbiAgJ21hcExlZ2VuZCcsXHJcbiAgJ3RvZ2dsZTNkJyxcclxuICAnc3BsaXRNYXAnLFxyXG4gICdtYXBEcmF3JyxcclxuICAnbWFwTG9jYWxlJ1xyXG5dLnJlZHVjZShcclxuICAoZmluYWwsIGN1cnJlbnQpID0+ICh7XHJcbiAgICAuLi5maW5hbCxcclxuICAgIFtjdXJyZW50XTogREVGQVVMVF9NQVBfQ09OVFJPTFNfRkVBVFVSRVNcclxuICB9KSxcclxuICB7fVxyXG4pO1xyXG5cclxuLyoqXHJcbiAqIERlZmF1bHQgaW1hZ2UgZXhwb3J0IGNvbmZpZ1xyXG4gKiBAbWVtYmVyb2YgdWlTdGF0ZVVwZGF0ZXJzXHJcbiAqIEBjb25zdGFudFxyXG4gKiBAcHJvcGVydHkgcmF0aW8gRGVmYXVsdDogYCdTQ1JFRU4nYCxcclxuICogQHByb3BlcnR5IHJlc29sdXRpb24gRGVmYXVsdDogYCdPTkVfWCdgLFxyXG4gKiBAcHJvcGVydHkgbGVnZW5kIERlZmF1bHQ6IGBmYWxzZWAsXHJcbiAqIEBwcm9wZXJ0eSBtYXBIIERlZmF1bHQ6IDAsXHJcbiAqIEBwcm9wZXJ0eSBtYXBXIERlZmF1bHQ6IDAsXHJcbiAqIEBwcm9wZXJ0eSBpbWFnZVNpemUgRGVmYXVsdDoge3pvb21PZmZzZXQ6IDAsIHNjYWxlOiAxLCBpbWFnZVc6IDAsIGltYWdlSDogMH0sXHJcbiAqIEBwcm9wZXJ0eSBpbWFnZURhdGFVcmkgRGVmYXVsdDogYCcnYCxcclxuICogQHByb3BlcnR5IGV4cG9ydGluZyBEZWZhdWx0OiBgZmFsc2VgXHJcbiAqIEBwcm9wZXJ0eSBlcnJvciBEZWZhdWx0OiBgZmFsc2VgXHJcbiAqIEB0eXBlIHtpbXBvcnQoJy4vdWktc3RhdGUtdXBkYXRlcnMnKS5FeHBvcnRJbWFnZX1cclxuICogQHB1YmxpY1xyXG4gKi9cclxuZXhwb3J0IGNvbnN0IERFRkFVTFRfRVhQT1JUX0lNQUdFID0ge1xyXG4gIC8vIHVzZXIgb3B0aW9uc1xyXG4gIHJhdGlvOiBFWFBPUlRfSU1HX1JBVElPUy5TQ1JFRU4sXHJcbiAgcmVzb2x1dGlvbjogUkVTT0xVVElPTlMuT05FX1gsXHJcbiAgbGVnZW5kOiBmYWxzZSxcclxuICBtYXBIOiAwLFxyXG4gIG1hcFc6IDAsXHJcbiAgaW1hZ2VTaXplOiB7XHJcbiAgICB6b29tT2Zmc2V0OiAwLFxyXG4gICAgc2NhbGU6IDEsXHJcbiAgICBpbWFnZVc6IDAsXHJcbiAgICBpbWFnZUg6IDBcclxuICB9LFxyXG4gIC8vIGV4cG9ydGluZyBzdGF0ZVxyXG4gIGltYWdlRGF0YVVyaTogJycsXHJcbiAgZXhwb3J0aW5nOiBmYWxzZSxcclxuICBlcnJvcjogZmFsc2VcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBERUZBVUxUX0xPQURfRklMRVMgPSB7XHJcbiAgZmlsZUxvYWRpbmc6IGZhbHNlXHJcbn07XHJcblxyXG4vKipcclxuICogRGVmYXVsdCBpbml0aWFsIGBleHBvcnREYXRhYCBzZXR0aW5nc1xyXG4gKiBAbWVtYmVyb2YgdWlTdGF0ZVVwZGF0ZXJzXHJcbiAqIEBjb25zdGFudFxyXG4gKiBAcHJvcGVydHkgc2VsZWN0ZWREYXRhc2V0IERlZmF1bHQ6IGAnJ2AsXHJcbiAqIEBwcm9wZXJ0eSBkYXRhVHlwZSBEZWZhdWx0OiBgJ2NzdidgLFxyXG4gKiBAcHJvcGVydHkgZmlsdGVyZWQgRGVmYXVsdDogYHRydWVgLFxyXG4gKiBAdHlwZSB7aW1wb3J0KCcuL3VpLXN0YXRlLXVwZGF0ZXJzJykuRXhwb3J0RGF0YX1cclxuICogQHB1YmxpY1xyXG4gKi9cclxuZXhwb3J0IGNvbnN0IERFRkFVTFRfRVhQT1JUX0RBVEEgPSB7XHJcbiAgc2VsZWN0ZWREYXRhc2V0OiAnJyxcclxuICBkYXRhVHlwZTogRVhQT1JUX0RBVEFfVFlQRS5DU1YsXHJcbiAgZmlsdGVyZWQ6IHRydWVcclxufTtcclxuXHJcbi8qKlxyXG4gKiBAY29uc3RhbnRcclxuICovXHJcbmV4cG9ydCBjb25zdCBERUZBVUxUX05PVElGSUNBVElPTlMgPSBbXTtcclxuXHJcbi8qKlxyXG4gKiBAY29uc3RhbnRcclxuICogQHByb3BlcnR5IGV4cG9ydE1hcGJveEFjY2Vzc1Rva2VuIC0gRGVmYXVsdDogbnVsbCwgdGhpcyBpcyB1c2VkIHdoZW4gd2UgcHJvdmlkZSBhIGRlZmF1bHQgbWFwYm94IHRva2VuIGZvciB1c2VycyB0byB0YWtlIGFkdmFudGFnZSBvZlxyXG4gKiBAcHJvcGVydHkgdXNlck1hcGJveFRva2VuIC0gRGVmYXVsdDogJycsIG1hcGJveCB0b2tlbiBwcm92aWRlZCBieSB1c2VyIHRocm91Z2ggaW5wdXQgZmllbGRcclxuICogQHByb3BlcnR5IG1vZGUgLSBEZWZhdWx0OiAnUkVBRCcsIHJlYWQgb25seSBvciBlZGl0YWJsZVxyXG4gKiBAdHlwZSB7aW1wb3J0KCcuL3VpLXN0YXRlLXVwZGF0ZXJzJykuRXhwb3J0SHRtbH1cclxuICogQHB1YmxpY1xyXG4gKi9cclxuZXhwb3J0IGNvbnN0IERFRkFVTFRfRVhQT1JUX0hUTUwgPSB7XHJcbiAgZXhwb3J0TWFwYm94QWNjZXNzVG9rZW46IG51bGwsXHJcbiAgdXNlck1hcGJveFRva2VuOiAnJyxcclxuICBtb2RlOiBFWFBPUlRfSFRNTF9NQVBfTU9ERVMuUkVBRFxyXG59O1xyXG5cclxuLyoqXHJcbiAqIEBjb25zdGFudFxyXG4gKiBAcHJvcGVydHkgaGFzRGF0YSAtIERlZmF1bHQ6ICd0cnVlJyxcclxuICogQHR5cGUge2ltcG9ydCgnLi91aS1zdGF0ZS11cGRhdGVycycpLkV4cG9ydEpzb259XHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmV4cG9ydCBjb25zdCBERUZBVUxUX0VYUE9SVF9KU09OID0ge1xyXG4gIGhhc0RhdGE6IHRydWVcclxufTtcclxuXHJcbi8qKlxyXG4gKiBFeHBvcnQgTWFwIENvbmZpZ1xyXG4gKiBAY29uc3RhbnRcclxuICogQHByb3BlcnR5IEhUTUwgLSBEZWZhdWx0OiAnREVGQVVMVF9FWFBPUlRfSFRNTCcsXHJcbiAqIEBwcm9wZXJ0eSBKU09OIC0gRGVmYXVsdDogJ0RFRkFVTFRfRVhQT1JUX0pTT04nLFxyXG4gKiBAcHJvcGVydHkgZm9ybWF0IC0gRGVmYXVsdDogJ0hUTUwnLFxyXG4gKiBAdHlwZSB7aW1wb3J0KCcuL3VpLXN0YXRlLXVwZGF0ZXJzJykuRXhwb3J0TWFwfVxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgREVGQVVMVF9FWFBPUlRfTUFQID0ge1xyXG4gIFtFWFBPUlRfTUFQX0ZPUk1BVFMuSFRNTF06IERFRkFVTFRfRVhQT1JUX0hUTUwsXHJcbiAgW0VYUE9SVF9NQVBfRk9STUFUUy5KU09OXTogREVGQVVMVF9FWFBPUlRfSlNPTixcclxuICBmb3JtYXQ6IEVYUE9SVF9NQVBfRk9STUFUUy5IVE1MXHJcbn07XHJcblxyXG4vKipcclxuICogRGVmYXVsdCBpbml0aWFsIGB1aVN0YXRlYFxyXG4gKiBAbWVtYmVyb2YgdWlTdGF0ZVVwZGF0ZXJzXHJcbiAqIEBjb25zdGFudFxyXG4gKiBAcHJvcGVydHkgcmVhZE9ubHkgRGVmYXVsdDogYGZhbHNlYFxyXG4gKiBAcHJvcGVydHkgYWN0aXZlU2lkZVBhbmVsIERlZmF1bHQ6IGAnbGF5ZXInYFxyXG4gKiBAcHJvcGVydHkgY3VycmVudE1vZGFsIERlZmF1bHQ6IGAnYWRkRGF0YSdgXHJcbiAqIEBwcm9wZXJ0eSBkYXRhc2V0S2V5VG9SZW1vdmUgRGVmYXVsdDogYG51bGxgXHJcbiAqIEBwcm9wZXJ0eSB2aXNpYmxlRHJvcGRvd24gRGVmYXVsdDogYG51bGxgXHJcbiAqIEBwcm9wZXJ0eSBleHBvcnRJbWFnZSBEZWZhdWx0OiBbYERFRkFVTFRfRVhQT1JUX0lNQUdFYF0oI2RlZmF1bHRfZXhwb3J0X2ltYWdlKVxyXG4gKiBAcHJvcGVydHkgZXhwb3J0RGF0YSBEZWZhdWx0OiBbYERFRkFVTFRfRVhQT1JUX0RBVEFgXSgjZGVmYXVsdF9leHBvcnRfZGF0YSlcclxuICogQHByb3BlcnR5IGV4cG9ydE1hcCBEZWZhdWx0OiBbYERFRkFVTFRfRVhQT1JUX01BUGBdKCNkZWZhdWx0X2V4cG9ydF9tYXApXHJcbiAqIEBwcm9wZXJ0eSBtYXBDb250cm9scyBEZWZhdWx0OiBbYERFRkFVTFRfTUFQX0NPTlRST0xTYF0oI2RlZmF1bHRfbWFwX2NvbnRyb2xzKVxyXG4gKiBAcHJvcGVydHkgbm90aWZpY2F0aW9ucyBEZWZhdWx0OiBgW11gXHJcbiAqIEBwcm9wZXJ0eSBub3RpZmljYXRpb25zIERlZmF1bHQ6IGBbXWBcclxuICogQHByb3BlcnR5IGxvYWRGaWxlc1xyXG4gKiBAdHlwZSB7aW1wb3J0KCcuL3VpLXN0YXRlLXVwZGF0ZXJzJykuVWlTdGF0ZX1cclxuICogQHB1YmxpY1xyXG4gKi9cclxuZXhwb3J0IGNvbnN0IElOSVRJQUxfVUlfU1RBVEUgPSB7XHJcbiAgcmVhZE9ubHk6IGZhbHNlLFxyXG4gIGFjdGl2ZVNpZGVQYW5lbDogREVGQVVMVF9BQ1RJVkVfU0lERV9QQU5FTCxcclxuICBjdXJyZW50TW9kYWw6IERFRkFVTFRfTU9EQUwsXHJcbiAgZGF0YXNldEtleVRvUmVtb3ZlOiBudWxsLFxyXG4gIHZpc2libGVEcm9wZG93bjogbnVsbCxcclxuICAvLyBleHBvcnQgaW1hZ2UgbW9kYWwgdWlcclxuICBleHBvcnRJbWFnZTogREVGQVVMVF9FWFBPUlRfSU1BR0UsXHJcbiAgLy8gZXhwb3J0IGRhdGEgbW9kYWwgdWlcclxuICBleHBvcnREYXRhOiBERUZBVUxUX0VYUE9SVF9EQVRBLFxyXG4gIC8vIGh0bWwgZXhwb3J0XHJcbiAgZXhwb3J0TWFwOiBERUZBVUxUX0VYUE9SVF9NQVAsXHJcbiAgLy8gbWFwIGNvbnRyb2wgcGFuZWxzXHJcbiAgbWFwQ29udHJvbHM6IERFRkFVTFRfTUFQX0NPTlRST0xTLFxyXG4gIC8vIHVpIG5vdGlmaWNhdGlvbnNcclxuICBub3RpZmljYXRpb25zOiBERUZBVUxUX05PVElGSUNBVElPTlMsXHJcbiAgLy8gbG9hZCBmaWxlc1xyXG4gIGxvYWRGaWxlczogREVGQVVMVF9MT0FEX0ZJTEVTLFxyXG4gIC8vIExvY2FsZSBvZiB0aGUgVUlcclxuICBsb2NhbGU6IExPQ0FMRV9DT0RFUy5lblxyXG59O1xyXG5cclxuLyogVXBkYXRlcnMgKi9cclxuLyoqXHJcbiAqIFRvZ2dsZSBhY3RpdmUgc2lkZSBwYW5lbFxyXG4gKiBAbWVtYmVyb2YgdWlTdGF0ZVVwZGF0ZXJzXHJcbiAqIEBwYXJhbSBzdGF0ZSBgdWlTdGF0ZWBcclxuICogQHBhcmFtIGFjdGlvblxyXG4gKiBAcGFyYW0gYWN0aW9uLnBheWxvYWQgaWQgb2Ygc2lkZSBwYW5lbCB0byBiZSBzaG93biwgb25lIG9mIGBsYXllcmAsIGBmaWx0ZXJgLCBgaW50ZXJhY3Rpb25gLCBgbWFwYC4gY2xvc2Ugc2lkZSBwYW5lbCBpZiBgbnVsbGBcclxuICogQHJldHVybnMgbmV4dFN0YXRlXHJcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL3VpLXN0YXRlLXVwZGF0ZXJzJykudG9nZ2xlU2lkZVBhbmVsVXBkYXRlcn1cclxuICogQHB1YmxpY1xyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHRvZ2dsZVNpZGVQYW5lbFVwZGF0ZXIgPSAoc3RhdGUsIHtwYXlsb2FkOiBpZH0pID0+IHtcclxuICByZXR1cm4gaWQgPT09IHN0YXRlLmFjdGl2ZVNpZGVQYW5lbFxyXG4gICAgPyBzdGF0ZVxyXG4gICAgOiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgYWN0aXZlU2lkZVBhbmVsOiBpZFxyXG4gICAgICB9O1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIFNob3cgYW5kIGhpZGUgbW9kYWwgZGlhbG9nXHJcbiAqIEBtZW1iZXJvZiB1aVN0YXRlVXBkYXRlcnNcclxuICogQHBhcmFtIHN0YXRlIGB1aVN0YXRlYFxyXG4gKiBAcGFyYW0gYWN0aW9uXHJcbiAqIEBwYXJhbWFjdGlvbi5wYXlsb2FkIGlkIG9mIG1vZGFsIHRvIGJlIHNob3duLCBudWxsIHRvIGhpZGUgbW9kYWxzLiBPbmUgb2Y6XHJcbiAqICAtIFtgREFUQV9UQUJMRV9JRGBdKC4uL2NvbnN0YW50cy9kZWZhdWx0LXNldHRpbmdzLm1kI2RhdGFfdGFibGVfaWQpXHJcbiAqICAtIFtgREVMRVRFX0RBVEFfSURgXSguLi9jb25zdGFudHMvZGVmYXVsdC1zZXR0aW5ncy5tZCNkZWxldGVfZGF0YV9pZClcclxuICogIC0gW2BBRERfREFUQV9JRGBdKC4uL2NvbnN0YW50cy9kZWZhdWx0LXNldHRpbmdzLm1kI2FkZF9kYXRhX2lkKVxyXG4gKiAgLSBbYEVYUE9SVF9JTUFHRV9JRGBdKC4uL2NvbnN0YW50cy9kZWZhdWx0LXNldHRpbmdzLm1kI2V4cG9ydF9pbWFnZV9pZClcclxuICogIC0gW2BFWFBPUlRfREFUQV9JRGBdKC4uL2NvbnN0YW50cy9kZWZhdWx0LXNldHRpbmdzLm1kI2V4cG9ydF9kYXRhX2lkKVxyXG4gKiAgLSBbYEFERF9NQVBfU1RZTEVfSURgXSguLi9jb25zdGFudHMvZGVmYXVsdC1zZXR0aW5ncy5tZCNhZGRfbWFwX3N0eWxlX2lkKVxyXG4gKiBAcmV0dXJucyBuZXh0U3RhdGVcclxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdWktc3RhdGUtdXBkYXRlcnMnKS50b2dnbGVNb2RhbFVwZGF0ZXJ9XHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmV4cG9ydCBjb25zdCB0b2dnbGVNb2RhbFVwZGF0ZXIgPSAoc3RhdGUsIHtwYXlsb2FkOiBpZH0pID0+ICh7XHJcbiAgLi4uc3RhdGUsXHJcbiAgY3VycmVudE1vZGFsOiBpZFxyXG59KTtcclxuXHJcbi8qKlxyXG4gKiBIaWRlIGFuZCBzaG93IHNpZGUgcGFuZWwgaGVhZGVyIGRyb3Bkb3duLCBhY3RpdmF0ZWQgYnkgY2xpY2tpbmcgdGhlIHNoYXJlIGxpbmsgb24gdG9wIG9mIHRoZSBzaWRlIHBhbmVsXHJcbiAqIEBtZW1iZXJvZiB1aVN0YXRlVXBkYXRlcnNcclxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdWktc3RhdGUtdXBkYXRlcnMnKS5zaG93RXhwb3J0RHJvcGRvd25VcGRhdGVyfVxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5leHBvcnQgY29uc3Qgc2hvd0V4cG9ydERyb3Bkb3duVXBkYXRlciA9IChzdGF0ZSwge3BheWxvYWQ6IGlkfSkgPT4gKHtcclxuICAuLi5zdGF0ZSxcclxuICB2aXNpYmxlRHJvcGRvd246IGlkXHJcbn0pO1xyXG5cclxuLyoqXHJcbiAqIEhpZGUgc2lkZSBwYW5lbCBoZWFkZXIgZHJvcGRvd24sIGFjdGl2YXRlZCBieSBjbGlja2luZyB0aGUgc2hhcmUgbGluayBvbiB0b3Agb2YgdGhlIHNpZGUgcGFuZWxcclxuICogQG1lbWJlcm9mIHVpU3RhdGVVcGRhdGVyc1xyXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi91aS1zdGF0ZS11cGRhdGVycycpLmhpZGVFeHBvcnREcm9wZG93blVwZGF0ZXJ9XHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmV4cG9ydCBjb25zdCBoaWRlRXhwb3J0RHJvcGRvd25VcGRhdGVyID0gc3RhdGUgPT4gKHtcclxuICAuLi5zdGF0ZSxcclxuICB2aXNpYmxlRHJvcGRvd246IG51bGxcclxufSk7XHJcblxyXG4vKipcclxuICogVG9nZ2xlIGFjdGl2ZSBtYXAgY29udHJvbCBwYW5lbFxyXG4gKiBAbWVtYmVyb2YgdWlTdGF0ZVVwZGF0ZXJzXHJcbiAqIEBwYXJhbSBzdGF0ZSBgdWlTdGF0ZWBcclxuICogQHBhcmFtIGFjdGlvbiBhY3Rpb25cclxuICogQHBhcmFtIGFjdGlvbi5wYXlsb2FkIG1hcCBjb250cm9sIHBhbmVsIGlkLCBvbmUgb2YgdGhlIGtleXMgb2Y6IFtgREVGQVVMVF9NQVBfQ09OVFJPTFNgXSgjZGVmYXVsdF9tYXBfY29udHJvbHMpXHJcbiAqIEByZXR1cm5zIG5leHRTdGF0ZVxyXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi91aS1zdGF0ZS11cGRhdGVycycpLnRvZ2dsZU1hcENvbnRyb2xVcGRhdGVyfVxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgdG9nZ2xlTWFwQ29udHJvbFVwZGF0ZXIgPSAoc3RhdGUsIHtwYXlsb2FkOiB7cGFuZWxJZCwgaW5kZXggPSAwfX0pID0+ICh7XHJcbiAgLi4uc3RhdGUsXHJcbiAgbWFwQ29udHJvbHM6IHtcclxuICAgIC4uLnN0YXRlLm1hcENvbnRyb2xzLFxyXG4gICAgW3BhbmVsSWRdOiB7XHJcbiAgICAgIC4uLnN0YXRlLm1hcENvbnRyb2xzW3BhbmVsSWRdLFxyXG4gICAgICAvLyB0aGlzIGhhbmRsZXMgc3BsaXQgbWFwIGludGVyYWN0aW9uXHJcbiAgICAgIC8vIFRvZ2dsaW5nIGZyb20gd2l0aGluIHRoZSBzYW1lIG1hcCB3aWxsIHNpbXBseSB0b2dnbGUgdGhlIGFjdGl2ZSBwcm9wZXJ0eVxyXG4gICAgICAvLyBUb2dnbGluZyBmcm9tIHdpdGhpbiBkaWZmZXJlbnQgbWFwcyB3ZSBzZXQgdGhlIGFjdGl2ZSBwcm9wZXJ0eSB0byB0cnVlXHJcbiAgICAgIGFjdGl2ZTpcclxuICAgICAgICBpbmRleCA9PT0gc3RhdGUubWFwQ29udHJvbHNbcGFuZWxJZF0uYWN0aXZlTWFwSW5kZXhcclxuICAgICAgICAgID8gIXN0YXRlLm1hcENvbnRyb2xzW3BhbmVsSWRdLmFjdGl2ZVxyXG4gICAgICAgICAgOiB0cnVlLFxyXG4gICAgICBhY3RpdmVNYXBJbmRleDogaW5kZXhcclxuICAgIH1cclxuICB9XHJcbn0pO1xyXG5cclxuLyoqXHJcbiAqIFRvZ2dsZSBhY3RpdmUgbWFwIGNvbnRyb2wgcGFuZWxcclxuICogQG1lbWJlcm9mIHVpU3RhdGVVcGRhdGVyc1xyXG4gKiBAcGFyYW0gc3RhdGUgYHVpU3RhdGVgXHJcbiAqIEBwYXJhbSBhY3Rpb25cclxuICogQHBhcmFtIGFjdGlvbi5wYXlsb2FkIGRhdGFzZXQgaWRcclxuICogQHJldHVybnMgbmV4dFN0YXRlXHJcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL3VpLXN0YXRlLXVwZGF0ZXJzJykub3BlbkRlbGV0ZU1vZGFsVXBkYXRlcn1cclxuICogQHB1YmxpY1xyXG4gKi9cclxuZXhwb3J0IGNvbnN0IG9wZW5EZWxldGVNb2RhbFVwZGF0ZXIgPSAoc3RhdGUsIHtwYXlsb2FkOiBkYXRhc2V0S2V5VG9SZW1vdmV9KSA9PiAoe1xyXG4gIC4uLnN0YXRlLFxyXG4gIGN1cnJlbnRNb2RhbDogREVMRVRFX0RBVEFfSUQsXHJcbiAgZGF0YXNldEtleVRvUmVtb3ZlXHJcbn0pO1xyXG5cclxuLyoqXHJcbiAqIFNldCBgZXhwb3J0SW1hZ2UubGVnZW5kYCB0byBgdHJ1ZWAgb3IgYGZhbHNlYFxyXG4gKiBAbWVtYmVyb2YgdWlTdGF0ZVVwZGF0ZXJzXHJcbiAqIEBwYXJhbSBzdGF0ZSBgdWlTdGF0ZWBcclxuICogQHJldHVybnMgbmV4dFN0YXRlXHJcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL3VpLXN0YXRlLXVwZGF0ZXJzJykuc2V0RXhwb3J0SW1hZ2VTZXR0aW5nVXBkYXRlcn1cclxuICogQHB1YmxpY1xyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHNldEV4cG9ydEltYWdlU2V0dGluZ1VwZGF0ZXIgPSAoc3RhdGUsIHtwYXlsb2FkOiBuZXdTZXR0aW5nfSkgPT4ge1xyXG4gIGNvbnN0IHVwZGF0ZWQgPSB7Li4uc3RhdGUuZXhwb3J0SW1hZ2UsIC4uLm5ld1NldHRpbmd9O1xyXG4gIGNvbnN0IGltYWdlU2l6ZSA9IGNhbGN1bGF0ZUV4cG9ydEltYWdlU2l6ZSh1cGRhdGVkKSB8fCBzdGF0ZS5leHBvcnRJbWFnZS5pbWFnZVNpemU7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICAuLi5zdGF0ZSxcclxuICAgIGV4cG9ydEltYWdlOiB7XHJcbiAgICAgIC4uLnVwZGF0ZWQsXHJcbiAgICAgIGltYWdlU2l6ZVxyXG4gICAgfVxyXG4gIH07XHJcbn07XHJcblxyXG4vKipcclxuICogU2V0IGBleHBvcnRJbWFnZS5leHBvcnRpbmdgIHRvIGB0cnVlYFxyXG4gKiBAbWVtYmVyb2YgdWlTdGF0ZVVwZGF0ZXJzXHJcbiAqIEBwYXJhbSBzdGF0ZSBgdWlTdGF0ZWBcclxuICogQHJldHVybnMgbmV4dFN0YXRlXHJcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL3VpLXN0YXRlLXVwZGF0ZXJzJykuc3RhcnRFeHBvcnRpbmdJbWFnZVVwZGF0ZXJ9XHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmV4cG9ydCBjb25zdCBzdGFydEV4cG9ydGluZ0ltYWdlVXBkYXRlciA9IHN0YXRlID0+ICh7XHJcbiAgLi4uc3RhdGUsXHJcbiAgZXhwb3J0SW1hZ2U6IHtcclxuICAgIC4uLnN0YXRlLmV4cG9ydEltYWdlLFxyXG4gICAgZXhwb3J0aW5nOiB0cnVlLFxyXG4gICAgaW1hZ2VEYXRhVXJpOiAnJ1xyXG4gIH1cclxufSk7XHJcblxyXG4vKipcclxuICogU2V0IGBleHBvcnRJbWFnZS5zZXRFeHBvcnRJbWFnZURhdGFVcmlgIHRvIGEgaW1hZ2UgZGF0YVVyaVxyXG4gKiBAbWVtYmVyb2YgdWlTdGF0ZVVwZGF0ZXJzXHJcbiAqIEBwYXJhbSBzdGF0ZSBgdWlTdGF0ZWBcclxuICogQHBhcmFtIGFjdGlvblxyXG4gKiBAcGFyYW0gYWN0aW9uLnBheWxvYWQgZXhwb3J0IGltYWdlIGRhdGEgdXJpXHJcbiAqIEByZXR1cm5zIG5leHRTdGF0ZVxyXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi91aS1zdGF0ZS11cGRhdGVycycpLnNldEV4cG9ydEltYWdlRGF0YVVyaVVwZGF0ZXJ9XHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmV4cG9ydCBjb25zdCBzZXRFeHBvcnRJbWFnZURhdGFVcmlVcGRhdGVyID0gKHN0YXRlLCB7cGF5bG9hZDogZGF0YVVyaX0pID0+ICh7XHJcbiAgLi4uc3RhdGUsXHJcbiAgZXhwb3J0SW1hZ2U6IHtcclxuICAgIC4uLnN0YXRlLmV4cG9ydEltYWdlLFxyXG4gICAgZXhwb3J0aW5nOiBmYWxzZSxcclxuICAgIGltYWdlRGF0YVVyaTogZGF0YVVyaVxyXG4gIH1cclxufSk7XHJcblxyXG4vKipcclxuICogQG1lbWJlcm9mIHVpU3RhdGVVcGRhdGVyc1xyXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi91aS1zdGF0ZS11cGRhdGVycycpLnNldEV4cG9ydEltYWdlRXJyb3JVcGRhdGVyfVxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5leHBvcnQgY29uc3Qgc2V0RXhwb3J0SW1hZ2VFcnJvclVwZGF0ZXIgPSAoc3RhdGUsIHtwYXlsb2FkOiBlcnJvcn0pID0+ICh7XHJcbiAgLi4uc3RhdGUsXHJcbiAgZXhwb3J0SW1hZ2U6IHtcclxuICAgIC4uLnN0YXRlLmV4cG9ydEltYWdlLFxyXG4gICAgZXhwb3J0aW5nOiBmYWxzZSxcclxuICAgIGVycm9yXHJcbiAgfVxyXG59KTtcclxuXHJcbi8qKlxyXG4gKiBEZWxldGUgY2FjaGVkIGV4cG9ydCBpbWFnZVxyXG4gKiBAbWVtYmVyb2YgdWlTdGF0ZVVwZGF0ZXJzXHJcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL3VpLXN0YXRlLXVwZGF0ZXJzJykuY2xlYW51cEV4cG9ydEltYWdlVXBkYXRlcn1cclxuICogQHB1YmxpY1xyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGNsZWFudXBFeHBvcnRJbWFnZVVwZGF0ZXIgPSBzdGF0ZSA9PiAoe1xyXG4gIC4uLnN0YXRlLFxyXG4gIGV4cG9ydEltYWdlOiB7XHJcbiAgICAuLi5zdGF0ZS5leHBvcnRJbWFnZSxcclxuICAgIGV4cG9ydGluZzogZmFsc2UsXHJcbiAgICBpbWFnZURhdGFVcmk6ICcnLFxyXG4gICAgZXJyb3I6IGZhbHNlXHJcbiAgfVxyXG59KTtcclxuXHJcbi8qKlxyXG4gKiBTZXQgc2VsZWN0ZWQgZGF0YXNldCBmb3IgZXhwb3J0XHJcbiAqIEBtZW1iZXJvZiB1aVN0YXRlVXBkYXRlcnNcclxuICogQHBhcmFtIHN0YXRlIGB1aVN0YXRlYFxyXG4gKiBAcGFyYW0gYWN0aW9uXHJcbiAqIEBwYXJhbSBhY3Rpb24ucGF5bG9hZCBkYXRhc2V0IGlkXHJcbiAqIEByZXR1cm5zIG5leHRTdGF0ZVxyXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi91aS1zdGF0ZS11cGRhdGVycycpLnNldEV4cG9ydFNlbGVjdGVkRGF0YXNldFVwZGF0ZXJ9XHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmV4cG9ydCBjb25zdCBzZXRFeHBvcnRTZWxlY3RlZERhdGFzZXRVcGRhdGVyID0gKHN0YXRlLCB7cGF5bG9hZDogZGF0YXNldH0pID0+ICh7XHJcbiAgLi4uc3RhdGUsXHJcbiAgZXhwb3J0RGF0YToge1xyXG4gICAgLi4uc3RhdGUuZXhwb3J0RGF0YSxcclxuICAgIHNlbGVjdGVkRGF0YXNldDogZGF0YXNldFxyXG4gIH1cclxufSk7XHJcblxyXG4vKipcclxuICogU2V0IGRhdGEgZm9ybWF0IGZvciBleHBvcnRpbmcgZGF0YVxyXG4gKiBAbWVtYmVyb2YgdWlTdGF0ZVVwZGF0ZXJzXHJcbiAqIEBwYXJhbSBzdGF0ZSBgdWlTdGF0ZWBcclxuICogQHBhcmFtIGFjdGlvblxyXG4gKiBAcGFyYW0gYWN0aW9uLnBheWxvYWQgb25lIG9mIGAndGV4dC9jc3YnYFxyXG4gKiBAcmV0dXJucyBuZXh0U3RhdGVcclxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdWktc3RhdGUtdXBkYXRlcnMnKS5zZXRFeHBvcnREYXRhVHlwZVVwZGF0ZXJ9XHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmV4cG9ydCBjb25zdCBzZXRFeHBvcnREYXRhVHlwZVVwZGF0ZXIgPSAoc3RhdGUsIHtwYXlsb2FkOiBkYXRhVHlwZX0pID0+ICh7XHJcbiAgLi4uc3RhdGUsXHJcbiAgZXhwb3J0RGF0YToge1xyXG4gICAgLi4uc3RhdGUuZXhwb3J0RGF0YSxcclxuICAgIGRhdGFUeXBlXHJcbiAgfVxyXG59KTtcclxuXHJcbi8qKlxyXG4gKiBXaGV0aGVyIHRvIGV4cG9ydCBmaWx0ZXJlZCBkYXRhLCBgdHJ1ZWAgb3IgYGZhbHNlYFxyXG4gKiBAbWVtYmVyb2YgdWlTdGF0ZVVwZGF0ZXJzXHJcbiAqIEBwYXJhbSBzdGF0ZSBgdWlTdGF0ZWBcclxuICogQHBhcmFtIGFjdGlvblxyXG4gKiBAcGFyYW0gYWN0aW9uLnBheWxvYWRcclxuICogQHJldHVybnMgbmV4dFN0YXRlXHJcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL3VpLXN0YXRlLXVwZGF0ZXJzJykuc2V0RXhwb3J0RmlsdGVyZWRVcGRhdGVyfVxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5leHBvcnQgY29uc3Qgc2V0RXhwb3J0RmlsdGVyZWRVcGRhdGVyID0gKHN0YXRlLCB7cGF5bG9hZDogZmlsdGVyZWR9KSA9PiAoe1xyXG4gIC4uLnN0YXRlLFxyXG4gIGV4cG9ydERhdGE6IHtcclxuICAgIC4uLnN0YXRlLmV4cG9ydERhdGEsXHJcbiAgICBmaWx0ZXJlZFxyXG4gIH1cclxufSk7XHJcblxyXG4vKipcclxuICogV2hldGhlciB0byBpbmNsdWRpbmcgZGF0YSBpbiBtYXAgY29uZmlnLCB0b2dnbGUgYmV0d2VlbiBgdHJ1ZWAgb3IgYGZhbHNlYFxyXG4gKiBAbWVtYmVyb2YgdWlTdGF0ZVVwZGF0ZXJzXHJcbiAqIEBwYXJhbSBzdGF0ZSBgdWlTdGF0ZWBcclxuICogQHJldHVybnMgbmV4dFN0YXRlXHJcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL3VpLXN0YXRlLXVwZGF0ZXJzJykuc2V0RXhwb3J0RGF0YVVwZGF0ZXJ9XHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmV4cG9ydCBjb25zdCBzZXRFeHBvcnREYXRhVXBkYXRlciA9IHN0YXRlID0+ICh7XHJcbiAgLi4uc3RhdGUsXHJcbiAgZXhwb3J0TWFwOiB7XHJcbiAgICAuLi5zdGF0ZS5leHBvcnRNYXAsXHJcbiAgICBbRVhQT1JUX01BUF9GT1JNQVRTLkpTT05dOiB7XHJcbiAgICAgIC4uLnN0YXRlLmV4cG9ydE1hcFtFWFBPUlRfTUFQX0ZPUk1BVFMuSlNPTl0sXHJcbiAgICAgIGhhc0RhdGE6ICFzdGF0ZS5leHBvcnRNYXBbRVhQT1JUX01BUF9GT1JNQVRTLkpTT05dLmhhc0RhdGFcclxuICAgIH1cclxuICB9XHJcbn0pO1xyXG5cclxuLyoqXHJcbiAqIHdoZXRoZXIgdG8gZXhwb3J0IGEgbWFwYm94IGFjY2VzcyB0byBIVE1MIHNpbmdsZSBwYWdlXHJcbiAqIEBwYXJhbSBzdGF0ZSAtIGB1aVN0YXRlYFxyXG4gKiBAcGFyYW0gYWN0aW9uXHJcbiAqIEBwYXJhbSBhY3Rpb24ucGF5bG9hZFxyXG4gKiBAcmV0dXJucyBuZXh0U3RhdGVcclxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdWktc3RhdGUtdXBkYXRlcnMnKS5zZXRVc2VyTWFwYm94QWNjZXNzVG9rZW5VcGRhdGVyfVxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5leHBvcnQgY29uc3Qgc2V0VXNlck1hcGJveEFjY2Vzc1Rva2VuVXBkYXRlciA9IChzdGF0ZSwge3BheWxvYWQ6IHVzZXJNYXBib3hUb2tlbn0pID0+ICh7XHJcbiAgLi4uc3RhdGUsXHJcbiAgZXhwb3J0TWFwOiB7XHJcbiAgICAuLi5zdGF0ZS5leHBvcnRNYXAsXHJcbiAgICBbRVhQT1JUX01BUF9GT1JNQVRTLkhUTUxdOiB7XHJcbiAgICAgIC4uLnN0YXRlLmV4cG9ydE1hcFtFWFBPUlRfTUFQX0ZPUk1BVFMuSFRNTF0sXHJcbiAgICAgIHVzZXJNYXBib3hUb2tlblxyXG4gICAgfVxyXG4gIH1cclxufSk7XHJcblxyXG4vKipcclxuICogU2V0cyB0aGUgZXhwb3J0IG1hcCBmb3JtYXRcclxuICogQHBhcmFtIHN0YXRlIC0gYHVpU3RhdGVgXHJcbiAqIEBwYXJhbSBhY3Rpb25cclxuICogQHBhcmFtIGFjdGlvbi5wYXlsb2FkIGZvcm1hdCB0byB1c2UgdG8gZXhwb3J0IHRoZSBtYXAgaW50b1xyXG4gKiBAcmV0dXJuIG5leHRTdGF0ZVxyXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi91aS1zdGF0ZS11cGRhdGVycycpLnNldEV4cG9ydE1hcEZvcm1hdFVwZGF0ZXJ9XHJcbiAqL1xyXG5leHBvcnQgY29uc3Qgc2V0RXhwb3J0TWFwRm9ybWF0VXBkYXRlciA9IChzdGF0ZSwge3BheWxvYWQ6IGZvcm1hdH0pID0+ICh7XHJcbiAgLi4uc3RhdGUsXHJcbiAgZXhwb3J0TWFwOiB7XHJcbiAgICAuLi5zdGF0ZS5leHBvcnRNYXAsXHJcbiAgICBmb3JtYXRcclxuICB9XHJcbn0pO1xyXG5cclxuLyoqXHJcbiAqIFNldCB0aGUgZXhwb3J0IGh0bWwgbWFwIG1vZGVcclxuICogQHBhcmFtIHN0YXRlIC0gYHVpU3RhdGVgXHJcbiAqIEBwYXJhbSBhY3Rpb25cclxuICogQHBhcmFtIGFjdGlvbi5wYXlsb2FkIHRvIGJlIHNldCAoYXZhaWxhYmxlIG1vZGVzOiBFWFBPUlRfSFRNTF9NQVBfTU9ERVMpXHJcbiAqIEByZXR1cm4gbmV4dFN0YXRlXHJcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL3VpLXN0YXRlLXVwZGF0ZXJzJykuc2V0RXhwb3J0TWFwSFRNTE1vZGVVcGRhdGVyfVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHNldEV4cG9ydE1hcEhUTUxNb2RlVXBkYXRlciA9IChzdGF0ZSwge3BheWxvYWQ6IG1vZGV9KSA9PiAoe1xyXG4gIC4uLnN0YXRlLFxyXG4gIGV4cG9ydE1hcDoge1xyXG4gICAgLi4uc3RhdGUuZXhwb3J0TWFwLFxyXG4gICAgW0VYUE9SVF9NQVBfRk9STUFUUy5IVE1MXToge1xyXG4gICAgICAuLi5zdGF0ZS5leHBvcnRNYXBbRVhQT1JUX01BUF9GT1JNQVRTLkhUTUxdLFxyXG4gICAgICBtb2RlXHJcbiAgICB9XHJcbiAgfVxyXG59KTtcclxuXHJcbi8qKlxyXG4gKiBBZGQgYSBub3RpZmljYXRpb24gdG8gYmUgZGlzcGxheWVkXHJcbiAqIEBtZW1iZXJvZiB1aVN0YXRlVXBkYXRlcnNcclxuICogQHBhcmFtIHN0YXRlIGB1aVN0YXRlYFxyXG4gKiBAcGFyYW0gYWN0aW9uXHJcbiAqIEBwYXJhbSBhY3Rpb24ucGF5bG9hZFxyXG4gKiBAcmV0dXJucyBuZXh0U3RhdGVcclxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdWktc3RhdGUtdXBkYXRlcnMnKS5hZGROb3RpZmljYXRpb25VcGRhdGVyfVxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgYWRkTm90aWZpY2F0aW9uVXBkYXRlciA9IChzdGF0ZSwge3BheWxvYWR9KSA9PiAoe1xyXG4gIC4uLnN0YXRlLFxyXG4gIG5vdGlmaWNhdGlvbnM6IFsuLi4oc3RhdGUubm90aWZpY2F0aW9ucyB8fCBbXSksIGNyZWF0ZU5vdGlmaWNhdGlvbihwYXlsb2FkKV1cclxufSk7XHJcblxyXG4vKipcclxuICogUmVtb3ZlIGEgbm90aWZpY2F0aW9uXHJcbiAqIEBtZW1iZXJvZiB1aVN0YXRlVXBkYXRlcnNcclxuICogQHBhcmFtIHN0YXRlIGB1aVN0YXRlYFxyXG4gKiBAcGFyYW0gYWN0aW9uXHJcbiAqIEBwYXJhbSBhY3Rpb24ucGF5bG9hZCBpZCBvZiB0aGUgbm90aWZpY2F0aW9uIHRvIGJlIHJlbW92ZWRcclxuICogQHJldHVybnMgbmV4dFN0YXRlXHJcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL3VpLXN0YXRlLXVwZGF0ZXJzJykucmVtb3ZlTm90aWZpY2F0aW9uVXBkYXRlcn1cclxuICogQHB1YmxpY1xyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHJlbW92ZU5vdGlmaWNhdGlvblVwZGF0ZXIgPSAoc3RhdGUsIHtwYXlsb2FkOiBpZH0pID0+ICh7XHJcbiAgLi4uc3RhdGUsXHJcbiAgbm90aWZpY2F0aW9uczogc3RhdGUubm90aWZpY2F0aW9ucy5maWx0ZXIobiA9PiBuLmlkICE9PSBpZClcclxufSk7XHJcblxyXG4vKipcclxuICogRmlyZWQgd2hlbiBmaWxlIGxvYWRpbmcgYmVnaW5cclxuICogQG1lbWJlcm9mIHVpU3RhdGVVcGRhdGVyc1xyXG4gKiBAcGFyYW0gc3RhdGUgYHVpU3RhdGVgXHJcbiAqIEByZXR1cm5zIG5leHRTdGF0ZVxyXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi91aS1zdGF0ZS11cGRhdGVycycpLmxvYWRGaWxlc1VwZGF0ZXJ9XHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmV4cG9ydCBjb25zdCBsb2FkRmlsZXNVcGRhdGVyID0gc3RhdGUgPT4gKHtcclxuICAuLi5zdGF0ZSxcclxuICBsb2FkRmlsZXM6IHtcclxuICAgIC4uLnN0YXRlLmxvYWRGaWxlcyxcclxuICAgIGZpbGVMb2FkaW5nOiB0cnVlXHJcbiAgfVxyXG59KTtcclxuXHJcbi8qKlxyXG4gKiBIYW5kbGVzIGxvYWRpbmcgZmlsZSBzdWNjZXNzIGFuZCBzZXQgZmlsZUxvYWRpbmcgcHJvcGVydHkgdG8gZmFsc2VcclxuICogQG1lbWJlcm9mIHVpU3RhdGVVcGRhdGVyc1xyXG4gKiBAcGFyYW0gc3RhdGUgYHVpU3RhdGVgXHJcbiAqIEByZXR1cm5zIG5leHRTdGF0ZVxyXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi91aS1zdGF0ZS11cGRhdGVycycpLmxvYWRGaWxlc1N1Y2Nlc3NVcGRhdGVyfVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGxvYWRGaWxlc1N1Y2Nlc3NVcGRhdGVyID0gc3RhdGUgPT4gKHtcclxuICAuLi5zdGF0ZSxcclxuICBsb2FkRmlsZXM6IHtcclxuICAgIC4uLnN0YXRlLmxvYWRGaWxlcyxcclxuICAgIGZpbGVMb2FkaW5nOiBmYWxzZVxyXG4gIH1cclxufSk7XHJcblxyXG4vKipcclxuICogSGFuZGxlcyBsb2FkIGZpbGUgZXJyb3IgYW5kIHNldCBmaWxlTG9hZGluZyBwcm9wZXJ0eSB0byBmYWxzZVxyXG4gKiBAbWVtYmVyb2YgdWlTdGF0ZVVwZGF0ZXJzXHJcbiAqIEBwYXJhbSBzdGF0ZVxyXG4gKiBAcGFyYW0gYWN0aW9uXHJcbiAqIEBwYXJhbSBhY3Rpb24uZXJyb3JcclxuICogQHJldHVybnMgbmV4dFN0YXRlXHJcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL3VpLXN0YXRlLXVwZGF0ZXJzJykubG9hZEZpbGVzRXJyVXBkYXRlcn1cclxuICogQHB1YmxpY1xyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGxvYWRGaWxlc0VyclVwZGF0ZXIgPSAoc3RhdGUsIHtlcnJvcn0pID0+XHJcbiAgYWRkTm90aWZpY2F0aW9uVXBkYXRlcihcclxuICAgIHtcclxuICAgICAgLi4uc3RhdGUsXHJcbiAgICAgIGxvYWRGaWxlczoge1xyXG4gICAgICAgIC4uLnN0YXRlLmxvYWRGaWxlcyxcclxuICAgICAgICBmaWxlTG9hZGluZzogZmFsc2VcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgcGF5bG9hZDogZXJyb3JOb3RpZmljYXRpb24oe1xyXG4gICAgICAgIG1lc3NhZ2U6IChlcnJvciB8fCB7fSkubWVzc2FnZSB8fCAnRmFpbGVkIHRvIHVwbG9hZCBmaWxlcycsXHJcbiAgICAgICAgdG9waWM6IERFRkFVTFRfTk9USUZJQ0FUSU9OX1RPUElDUy5nbG9iYWxcclxuICAgICAgfSlcclxuICAgIH1cclxuICApO1xyXG5cclxuLyoqXHJcbiAqIEhhbmRsZXMgdG9nZ2xlIG1hcCBzcGxpdCBhbmQgcmVzZXQgYWxsIG1hcCBjb250cm9sIGluZGV4IHRvIDBcclxuICogQG1lbWJlcm9mIHVpU3RhdGVVcGRhdGVyc1xyXG4gKiBAcGFyYW0gc3RhdGVcclxuICogQHJldHVybnMgbmV4dFN0YXRlXHJcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL3VpLXN0YXRlLXVwZGF0ZXJzJykudG9nZ2xlU3BsaXRNYXBVcGRhdGVyfVxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgdG9nZ2xlU3BsaXRNYXBVcGRhdGVyID0gc3RhdGUgPT4gKHtcclxuICAuLi5zdGF0ZSxcclxuICBtYXBDb250cm9sczogT2JqZWN0LmVudHJpZXMoc3RhdGUubWFwQ29udHJvbHMpLnJlZHVjZShcclxuICAgIChhY2MsIGVudHJ5KSA9PiAoe1xyXG4gICAgICAuLi5hY2MsXHJcbiAgICAgIFtlbnRyeVswXV06IHtcclxuICAgICAgICAuLi5lbnRyeVsxXSxcclxuICAgICAgICBhY3RpdmVNYXBJbmRleDogMFxyXG4gICAgICB9XHJcbiAgICB9KSxcclxuICAgIHt9XHJcbiAgKVxyXG59KTtcclxuXHJcbi8qKlxyXG4gKiBTZXQgdGhlIGxvY2FsZSBvZiB0aGUgVUlcclxuICogQG1lbWJlcm9mIHVpU3RhdGVVcGRhdGVyc1xyXG4gKiBAcGFyYW0gc3RhdGUgYHVpU3RhdGVgXHJcbiAqIEBwYXJhbSBhY3Rpb25cclxuICogQHBhcmFtIGFjdGlvbi5wYXlsb2FkXHJcbiAqIEBwYXJhbSBhY3Rpb24ucGF5bG9hZC5sb2NhbGUgbG9jYWxlXHJcbiAqIEByZXR1cm5zIG5leHRTdGF0ZVxyXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi91aS1zdGF0ZS11cGRhdGVycycpLnNldExvY2FsZVVwZGF0ZXJ9XHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmV4cG9ydCBjb25zdCBzZXRMb2NhbGVVcGRhdGVyID0gKHN0YXRlLCB7cGF5bG9hZDoge2xvY2FsZX19KSA9PiAoe1xyXG4gIC4uLnN0YXRlLFxyXG4gIGxvY2FsZVxyXG59KTtcclxuIl19