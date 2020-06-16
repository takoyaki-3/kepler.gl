"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSavedMapsErrorUpdater = exports.getSavedMapsSuccessUpdater = exports.getSavedMapsUpdater = exports.setCloudProviderUpdater = exports.resetProviderStatusUpdater = exports.loadCloudMapErrorUpdater = exports.loadCloudMapSuccessUpdater = exports.loadCloudMapUpdater = exports.exportFileErrorUpdater = exports.postSaveLoadSuccessUpdater = exports.exportFileSuccessUpdater = exports.exportFileToCloudUpdater = exports.INITIAL_PROVIDER_STATE = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _tasks = require("react-palm/tasks");

var _console = _interopRequireDefault(require("global/console"));

var _utils = require("../utils/utils");

var _tasks2 = require("../tasks/tasks");

var _providerActions = require("../actions/provider-actions");

var _uiStateActions = require("../actions/ui-state-actions");

var _actions = require("../actions/actions");

var _defaultSettings = require("../constants/default-settings");

var _schemas = _interopRequireDefault(require("../schemas"));

var _dataProcessor = require("../processors/data-processor");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var INITIAL_PROVIDER_STATE = {
  isProviderLoading: false,
  isCloudMapLoading: false,
  providerError: null,
  currentProvider: null,
  successInfo: {},
  mapSaved: null,
  visualizations: []
};
exports.INITIAL_PROVIDER_STATE = INITIAL_PROVIDER_STATE;

function createActionTask(action, payload) {
  if (typeof action === 'function') {
    return (0, _tasks2.ACTION_TASK)().map(function (_) {
      return action(payload);
    });
  }

  return null;
}

function _validateProvider(provider, method) {
  if (!provider) {
    _console["default"].error("provider is not defined");

    return false;
  }

  if (typeof provider[method] !== 'function') {
    _console["default"].error("".concat(method, " is not a function of Cloud provider: ").concat(provider.name));

    return false;
  }

  return true;
}
/**
 * @type {typeof import('./provider-state-updaters').createGlobalNotificationTasks}
 */


function createGlobalNotificationTasks(_ref) {
  var type = _ref.type,
      message = _ref.message,
      _ref$delayClose = _ref.delayClose,
      delayClose = _ref$delayClose === void 0 ? true : _ref$delayClose;
  var id = (0, _utils.generateHashId)();
  var successNote = {
    id: id,
    type: _defaultSettings.DEFAULT_NOTIFICATION_TYPES[type] || _defaultSettings.DEFAULT_NOTIFICATION_TYPES.success,
    topic: _defaultSettings.DEFAULT_NOTIFICATION_TOPICS.global,
    message: message
  };
  var task = (0, _tasks2.ACTION_TASK)().map(function (_) {
    return (0, _uiStateActions.addNotification)(successNote);
  });
  return delayClose ? [task, (0, _tasks2.DELAY_TASK)(3000).map(function (_) {
    return (0, _uiStateActions.removeNotification)(id);
  })] : [task];
}
/**
 * This method will export the current kepler config file to the chosen cloud proder
 * add returns a share URL
 *
 * @type {typeof import('./provider-state-updaters').exportFileToCloudUpdater}
 */


var exportFileToCloudUpdater = function exportFileToCloudUpdater(state, action) {
  var _action$payload = action.payload,
      mapData = _action$payload.mapData,
      provider = _action$payload.provider,
      _action$payload$optio = _action$payload.options,
      options = _action$payload$optio === void 0 ? {} : _action$payload$optio,
      onSuccess = _action$payload.onSuccess,
      onError = _action$payload.onError,
      closeModal = _action$payload.closeModal;

  if (!_validateProvider(provider, 'uploadMap')) {
    return state;
  }

  var newState = _objectSpread(_objectSpread({}, state), {}, {
    isProviderLoading: true,
    currentProvider: provider.name
  }); // payload called by provider.uploadMap


  var payload = {
    mapData: mapData,
    options: options
  };
  var uploadFileTask = (0, _tasks2.EXPORT_FILE_TO_CLOUD_TASK)({
    provider: provider,
    payload: payload
  }).bimap( // success
  function (response) {
    return (0, _providerActions.exportFileSuccess)({
      response: response,
      provider: provider,
      options: options,
      onSuccess: onSuccess,
      closeModal: closeModal
    });
  }, // error
  function (error) {
    return (0, _providerActions.exportFileError)({
      error: error,
      provider: provider,
      options: options,
      onError: onError
    });
  });
  return (0, _tasks.withTask)(newState, uploadFileTask);
};
/**
 *
 * @type {typeof import('./provider-state-updaters').exportFileSuccessUpdater}
 */


exports.exportFileToCloudUpdater = exportFileToCloudUpdater;

var exportFileSuccessUpdater = function exportFileSuccessUpdater(state, action) {
  var _action$payload2 = action.payload,
      response = _action$payload2.response,
      provider = _action$payload2.provider,
      _action$payload2$opti = _action$payload2.options,
      options = _action$payload2$opti === void 0 ? {} : _action$payload2$opti,
      onSuccess = _action$payload2.onSuccess,
      closeModal = _action$payload2.closeModal;

  var newState = _objectSpread(_objectSpread({}, state), {}, {
    isProviderLoading: false,
    // TODO: do we always have to store this?
    successInfo: response
  }, !options.isPublic ? {
    mapSaved: provider.name
  } : {});

  var tasks = [createActionTask(onSuccess, {
    response: response,
    provider: provider,
    options: options
  }), closeModal && (0, _tasks2.ACTION_TASK)().map(function (_) {
    return (0, _providerActions.postSaveLoadSuccess)("Map saved to ".concat(state.currentProvider, "!"));
  })].filter(function (d) {
    return d;
  });
  return tasks.length ? (0, _tasks.withTask)(newState, tasks) : newState;
};
/**
 * Close modal on success and display notification
 * @type {typeof import('./provider-state-updaters').postSaveLoadSuccessUpdater}
 */


exports.exportFileSuccessUpdater = exportFileSuccessUpdater;

var postSaveLoadSuccessUpdater = function postSaveLoadSuccessUpdater(state, action) {
  var message = action.payload || "Saved / Load to ".concat(state.currentProvider, " Success");
  var tasks = [(0, _tasks2.ACTION_TASK)().map(function (_) {
    return (0, _uiStateActions.toggleModal)(null);
  }), (0, _tasks2.ACTION_TASK)().map(function (_) {
    return (0, _providerActions.resetProviderStatus)();
  })].concat((0, _toConsumableArray2["default"])(createGlobalNotificationTasks({
    message: message
  })));
  return (0, _tasks.withTask)(state, tasks);
};
/**
 *
 * @type {typeof import('./provider-state-updaters').exportFileErrorUpdater}
 */


exports.postSaveLoadSuccessUpdater = postSaveLoadSuccessUpdater;

var exportFileErrorUpdater = function exportFileErrorUpdater(state, action) {
  var _action$payload3 = action.payload,
      error = _action$payload3.error,
      provider = _action$payload3.provider,
      onError = _action$payload3.onError;

  var newState = _objectSpread(_objectSpread({}, state), {}, {
    isProviderLoading: false,
    providerError: (0, _utils.getError)(error)
  });

  var task = createActionTask(onError, {
    error: error,
    provider: provider
  });
  return task ? (0, _tasks.withTask)(newState, task) : newState;
};

exports.exportFileErrorUpdater = exportFileErrorUpdater;

var loadCloudMapUpdater = function loadCloudMapUpdater(state, action) {
  var _action$payload4 = action.payload,
      loadParams = _action$payload4.loadParams,
      provider = _action$payload4.provider,
      onSuccess = _action$payload4.onSuccess,
      onError = _action$payload4.onError;

  if (!loadParams) {
    _console["default"].warn('load map error: loadParams is undefined');

    return state;
  }

  if (!_validateProvider(provider, 'downloadMap')) {
    return state;
  }

  var newState = _objectSpread(_objectSpread({}, state), {}, {
    isProviderLoading: true,
    isCloudMapLoading: true
  }); // payload called by provider.downloadMap


  var uploadFileTask = (0, _tasks2.LOAD_CLOUD_MAP_TASK)({
    provider: provider,
    payload: loadParams
  }).bimap( // success
  function (response) {
    return (0, _providerActions.loadCloudMapSuccess)({
      response: response,
      loadParams: loadParams,
      provider: provider,
      onSuccess: onSuccess,
      onError: onError
    });
  }, // error
  function (error) {
    return (0, _providerActions.loadCloudMapError)({
      error: error,
      provider: provider,
      onError: onError
    });
  });
  return (0, _tasks.withTask)(newState, uploadFileTask);
};

exports.loadCloudMapUpdater = loadCloudMapUpdater;

function checkLoadMapResponseError(response) {
  if (!response || !(0, _utils.isPlainObject)(response)) {
    return new Error('Load map response is empty');
  }

  if (!(0, _utils.isPlainObject)(response.map)) {
    return new Error("Load map response should be an object property \"map\"");
  }

  if (!response.map.datasets || !response.map.config) {
    return new Error("Load map response.map should be an object with property datasets or config");
  }

  return null;
}

function getDatasetHandler(format) {
  var defaultHandler = _dataProcessor.DATASET_HANDLERS[_defaultSettings.DATASET_FORMATS.csv];

  if (!format) {
    _console["default"].warn('format is not provided in load map response, will use csv by default');

    return defaultHandler;
  }

  if (!_dataProcessor.DATASET_HANDLERS[format]) {
    var supportedFormat = Object.keys(_defaultSettings.DATASET_FORMATS).map(function (k) {
      return "'".concat(k, "'");
    }).join(', ');

    _console["default"].warn("unknown format ".concat(format, ". Please use one of ").concat(supportedFormat, ", will use csv by default"));

    return defaultHandler;
  }

  return _dataProcessor.DATASET_HANDLERS[format];
}

function parseLoadMapResponse(response, loadParams, provider) {
  var map = response.map,
      format = response.format;
  var processorMethod = getDatasetHandler(format);
  var parsedDatasets = (0, _utils.toArray)(map.datasets).map(function (ds, i) {
    if (format === _defaultSettings.DATASET_FORMATS.keplergl) {
      // no need to obtain id, directly pass them in
      return processorMethod(ds);
    }

    var info = ds && ds.info || {
      id: (0, _utils.generateHashId)(6)
    };
    var data = processorMethod(ds.data || ds);
    return {
      info: info,
      data: data
    };
  });

  var parsedConfig = map.config && _schemas["default"].parseSavedConfig(map.config);

  var info = _objectSpread(_objectSpread({}, map.info), {}, {
    provider: provider.name,
    loadParams: loadParams
  });

  return _objectSpread({
    datasets: parsedDatasets,
    info: info
  }, parsedConfig ? {
    config: parsedConfig
  } : {});
}
/**
 *
 * @type {typeof import('./provider-state-updaters').loadCloudMapSuccessUpdater}
 */


var loadCloudMapSuccessUpdater = function loadCloudMapSuccessUpdater(state, action) {
  var _action$payload5 = action.payload,
      response = _action$payload5.response,
      loadParams = _action$payload5.loadParams,
      provider = _action$payload5.provider,
      onSuccess = _action$payload5.onSuccess,
      onError = _action$payload5.onError;
  var formatError = checkLoadMapResponseError(response);

  if (formatError) {
    // if response format is not correct
    return exportFileErrorUpdater(state, {
      payload: {
        error: formatError,
        provider: provider,
        onError: onError
      }
    });
  }

  var newState = _objectSpread(_objectSpread({}, state), {}, {
    mapSaved: provider.name,
    currentProvider: provider.name,
    isCloudMapLoading: false,
    isProviderLoading: false
  });

  var payload = parseLoadMapResponse(response, loadParams, provider);
  var tasks = [(0, _tasks2.ACTION_TASK)().map(function (_) {
    return (0, _actions.addDataToMap)(payload);
  }), createActionTask(onSuccess, {
    response: response,
    loadParams: loadParams,
    provider: provider
  }), (0, _tasks2.ACTION_TASK)().map(function (_) {
    return (0, _providerActions.postSaveLoadSuccess)("Map from ".concat(provider.name, " loaded"));
  })].filter(function (d) {
    return d;
  });
  return tasks.length ? (0, _tasks.withTask)(newState, tasks) : newState;
};
/**
 *
 * @type {typeof import('./provider-state-updaters').loadCloudMapErrorUpdater}
 */


exports.loadCloudMapSuccessUpdater = loadCloudMapSuccessUpdater;

var loadCloudMapErrorUpdater = function loadCloudMapErrorUpdater(state, action) {
  var message = (0, _utils.getError)(action.payload.error) || "Error loading saved map";

  _console["default"].warn(message);

  var newState = _objectSpread(_objectSpread({}, state), {}, {
    isProviderLoading: false,
    isCloudMapLoading: false,
    providerError: null
  });

  return (0, _tasks.withTask)(newState, createGlobalNotificationTasks({
    type: 'error',
    message: message,
    delayClose: false
  }));
};
/**
 *
 * @type {typeof import('./provider-state-updaters').resetProviderStatusUpdater}
 */


exports.loadCloudMapErrorUpdater = loadCloudMapErrorUpdater;

var resetProviderStatusUpdater = function resetProviderStatusUpdater(state, action) {
  return _objectSpread(_objectSpread({}, state), {}, {
    isProviderLoading: false,
    providerError: null,
    isCloudMapLoading: false,
    successInfo: {}
  });
};
/**
 * Set current cloudProvider
 * @type {typeof import('./provider-state-updaters').setCloudProviderUpdater}
 */


exports.resetProviderStatusUpdater = resetProviderStatusUpdater;

var setCloudProviderUpdater = function setCloudProviderUpdater(state, action) {
  return _objectSpread(_objectSpread({}, state), {}, {
    isProviderLoading: false,
    providerError: null,
    successInfo: {},
    currentProvider: action.payload
  });
};
/**
 *
 * @type {typeof import('./provider-state-updaters').getSavedMapsUpdater}
 */


exports.setCloudProviderUpdater = setCloudProviderUpdater;

var getSavedMapsUpdater = function getSavedMapsUpdater(state, action) {
  var provider = action.payload;

  if (!_validateProvider(provider, 'listMaps')) {
    return state;
  }

  var getSavedMapsTask = (0, _tasks2.GET_SAVED_MAPS_TASK)(provider).bimap( // success
  function (visualizations) {
    return (0, _providerActions.getSavedMapsSuccess)({
      visualizations: visualizations,
      provider: provider
    });
  }, // error
  function (error) {
    return (0, _providerActions.getSavedMapsError)({
      error: error,
      provider: provider
    });
  });
  return (0, _tasks.withTask)(_objectSpread(_objectSpread({}, state), {}, {
    isProviderLoading: true
  }), getSavedMapsTask);
};
/**
 *
 * @type {typeof import('./provider-state-updaters').getSavedMapsSuccessUpdater}
 */


exports.getSavedMapsUpdater = getSavedMapsUpdater;

var getSavedMapsSuccessUpdater = function getSavedMapsSuccessUpdater(state, action) {
  return _objectSpread(_objectSpread({}, state), {}, {
    isProviderLoading: false,
    visualizations: action.payload.visualizations
  });
};
/**
 *
 * @type {typeof import('./provider-state-updaters').getSavedMapsErrorUpdater}
 */


exports.getSavedMapsSuccessUpdater = getSavedMapsSuccessUpdater;

var getSavedMapsErrorUpdater = function getSavedMapsErrorUpdater(state, action) {
  var message = (0, _utils.getError)(action.payload.error) || "Error getting saved maps from ".concat(state.currentProvider);

  _console["default"].warn(action.payload.error);

  var newState = _objectSpread(_objectSpread({}, state), {}, {
    currentProvider: null,
    isProviderLoading: false
  });

  return (0, _tasks.withTask)(newState, createGlobalNotificationTasks({
    type: 'error',
    message: message,
    delayClose: false
  }));
};

exports.getSavedMapsErrorUpdater = getSavedMapsErrorUpdater;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWR1Y2Vycy9wcm92aWRlci1zdGF0ZS11cGRhdGVycy5qcyJdLCJuYW1lcyI6WyJJTklUSUFMX1BST1ZJREVSX1NUQVRFIiwiaXNQcm92aWRlckxvYWRpbmciLCJpc0Nsb3VkTWFwTG9hZGluZyIsInByb3ZpZGVyRXJyb3IiLCJjdXJyZW50UHJvdmlkZXIiLCJzdWNjZXNzSW5mbyIsIm1hcFNhdmVkIiwidmlzdWFsaXphdGlvbnMiLCJjcmVhdGVBY3Rpb25UYXNrIiwiYWN0aW9uIiwicGF5bG9hZCIsIm1hcCIsIl8iLCJfdmFsaWRhdGVQcm92aWRlciIsInByb3ZpZGVyIiwibWV0aG9kIiwiQ29uc29sZSIsImVycm9yIiwibmFtZSIsImNyZWF0ZUdsb2JhbE5vdGlmaWNhdGlvblRhc2tzIiwidHlwZSIsIm1lc3NhZ2UiLCJkZWxheUNsb3NlIiwiaWQiLCJzdWNjZXNzTm90ZSIsIkRFRkFVTFRfTk9USUZJQ0FUSU9OX1RZUEVTIiwic3VjY2VzcyIsInRvcGljIiwiREVGQVVMVF9OT1RJRklDQVRJT05fVE9QSUNTIiwiZ2xvYmFsIiwidGFzayIsImV4cG9ydEZpbGVUb0Nsb3VkVXBkYXRlciIsInN0YXRlIiwibWFwRGF0YSIsIm9wdGlvbnMiLCJvblN1Y2Nlc3MiLCJvbkVycm9yIiwiY2xvc2VNb2RhbCIsIm5ld1N0YXRlIiwidXBsb2FkRmlsZVRhc2siLCJiaW1hcCIsInJlc3BvbnNlIiwiZXhwb3J0RmlsZVN1Y2Nlc3NVcGRhdGVyIiwiaXNQdWJsaWMiLCJ0YXNrcyIsImZpbHRlciIsImQiLCJsZW5ndGgiLCJwb3N0U2F2ZUxvYWRTdWNjZXNzVXBkYXRlciIsImV4cG9ydEZpbGVFcnJvclVwZGF0ZXIiLCJsb2FkQ2xvdWRNYXBVcGRhdGVyIiwibG9hZFBhcmFtcyIsIndhcm4iLCJjaGVja0xvYWRNYXBSZXNwb25zZUVycm9yIiwiRXJyb3IiLCJkYXRhc2V0cyIsImNvbmZpZyIsImdldERhdGFzZXRIYW5kbGVyIiwiZm9ybWF0IiwiZGVmYXVsdEhhbmRsZXIiLCJEQVRBU0VUX0hBTkRMRVJTIiwiREFUQVNFVF9GT1JNQVRTIiwiY3N2Iiwic3VwcG9ydGVkRm9ybWF0IiwiT2JqZWN0Iiwia2V5cyIsImsiLCJqb2luIiwicGFyc2VMb2FkTWFwUmVzcG9uc2UiLCJwcm9jZXNzb3JNZXRob2QiLCJwYXJzZWREYXRhc2V0cyIsImRzIiwiaSIsImtlcGxlcmdsIiwiaW5mbyIsImRhdGEiLCJwYXJzZWRDb25maWciLCJLZXBsZXJHbFNjaGVtYSIsInBhcnNlU2F2ZWRDb25maWciLCJsb2FkQ2xvdWRNYXBTdWNjZXNzVXBkYXRlciIsImZvcm1hdEVycm9yIiwibG9hZENsb3VkTWFwRXJyb3JVcGRhdGVyIiwicmVzZXRQcm92aWRlclN0YXR1c1VwZGF0ZXIiLCJzZXRDbG91ZFByb3ZpZGVyVXBkYXRlciIsImdldFNhdmVkTWFwc1VwZGF0ZXIiLCJnZXRTYXZlZE1hcHNUYXNrIiwiZ2V0U2F2ZWRNYXBzU3VjY2Vzc1VwZGF0ZXIiLCJnZXRTYXZlZE1hcHNFcnJvclVwZGF0ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBT0E7O0FBVUE7O0FBQ0E7O0FBQ0E7O0FBTUE7O0FBV0E7Ozs7OztBQVRPLElBQU1BLHNCQUFzQixHQUFHO0FBQ3BDQyxFQUFBQSxpQkFBaUIsRUFBRSxLQURpQjtBQUVwQ0MsRUFBQUEsaUJBQWlCLEVBQUUsS0FGaUI7QUFHcENDLEVBQUFBLGFBQWEsRUFBRSxJQUhxQjtBQUlwQ0MsRUFBQUEsZUFBZSxFQUFFLElBSm1CO0FBS3BDQyxFQUFBQSxXQUFXLEVBQUUsRUFMdUI7QUFNcENDLEVBQUFBLFFBQVEsRUFBRSxJQU4wQjtBQU9wQ0MsRUFBQUEsY0FBYyxFQUFFO0FBUG9CLENBQS9COzs7QUFXUCxTQUFTQyxnQkFBVCxDQUEwQkMsTUFBMUIsRUFBa0NDLE9BQWxDLEVBQTJDO0FBQ3pDLE1BQUksT0FBT0QsTUFBUCxLQUFrQixVQUF0QixFQUFrQztBQUNoQyxXQUFPLDJCQUFj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QUNUTixLQURTO0FBRVo1QixJQUFBQSxlQUFlLEVBQUUsSUFGTDtBQUdaSCxJQUFBQSxpQkFBaUIsRUFBRTtBQUhQLElBQWQ7O0FBTUEsU0FBTyxxQkFDTHFDLFFBREssRUFFTG5CLDZCQUE2QixDQUFDO0FBQUNDLElBQUFBLElBQUksRUFBRSxPQUFQO0FBQWdCQyxJQUFBQSxPQUFPLEVBQVBBLE9BQWhCO0FBQXlCQyxJQUFBQSxVQUFVLEVBQUU7QUFBckMsR0FBRCxDQUZ4QixDQUFQO0FBSUQsQ0FoQk0iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQge3dpdGhUYXNrfSBmcm9tICdyZWFjdC1wYWxtL3Rhc2tzJztcclxuaW1wb3J0IHtkZWZhdWx0IGFzIENvbnNvbGV9IGZyb20gJ2dsb2JhbC9jb25zb2xlJztcclxuaW1wb3J0IHtnZW5lcmF0ZUhhc2hJZCwgZ2V0RXJyb3IsIGlzUGxhaW5PYmplY3R9IGZyb20gJ3V0aWxzL3V0aWxzJztcclxuaW1wb3J0IHtcclxuICBFWFBPUlRfRklMRV9UT19DTE9VRF9UQVNLLFxyXG4gIEFDVElPTl9UQVNLLFxyXG4gIERFTEFZX1RBU0ssXHJcbiAgTE9BRF9DTE9VRF9NQVBfVEFTSyxcclxuICBHRVRfU0FWRURfTUFQU19UQVNLXHJcbn0gZnJvbSAndGFza3MvdGFza3MnO1xyXG5pbXBvcnQge1xyXG4gIGV4cG9ydEZpbGVTdWNjZXNzLFxyXG4gIGV4cG9ydEZpbGVFcnJvcixcclxuICBwb3N0U2F2ZUxvYWRTdWNjZXNzLFxyXG4gIGxvYWRDbG91ZE1hcFN1Y2Nlc3MsXHJcbiAgZ2V0U2F2ZWRNYXBzU3VjY2VzcyxcclxuICBnZXRTYXZlZE1hcHNFcnJvcixcclxuICBsb2FkQ2xvdWRNYXBFcnJvcixcclxuICByZXNldFByb3ZpZGVyU3RhdHVzXHJcbn0gZnJvbSAnYWN0aW9ucy9wcm92aWRlci1hY3Rpb25zJztcclxuaW1wb3J0IHtyZW1vdmVOb3RpZmljYXRpb24sIHRvZ2dsZU1vZGFsLCBhZGROb3RpZmljYXRpb259IGZyb20gJ2FjdGlvbnMvdWktc3RhdGUtYWN0aW9ucyc7XHJcbmltcG9ydCB7YWRkRGF0YVRvTWFwfSBmcm9tICdhY3Rpb25zL2FjdGlvbnMnO1xyXG5pbXBvcnQge1xyXG4gIERFRkFVTFRfTk9USUZJQ0FUSU9OX1RZUEVTLFxyXG4gIERFRkFVTFRfTk9USUZJQ0FUSU9OX1RPUElDUyxcclxuICBEQVRBU0VUX0ZPUk1BVFNcclxufSBmcm9tICdjb25zdGFudHMvZGVmYXVsdC1zZXR0aW5ncyc7XHJcbmltcG9ydCB7dG9BcnJheX0gZnJvbSAndXRpbHMvdXRpbHMnO1xyXG5pbXBvcnQgS2VwbGVyR2xTY2hlbWEgZnJvbSAnc2NoZW1hcyc7XHJcblxyXG5leHBvcnQgY29uc3QgSU5JVElBTF9QUk9WSURFUl9TVEFURSA9IHtcclxuICBpc1Byb3ZpZGVyTG9hZGluZzogZmFsc2UsXHJcbiAgaXNDbG91ZE1hcExvYWRpbmc6IGZhbHNlLFxyXG4gIHByb3ZpZGVyRXJyb3I6IG51bGwsXHJcbiAgY3VycmVudFByb3ZpZGVyOiBudWxsLFxyXG4gIHN1Y2Nlc3NJbmZvOiB7fSxcclxuICBtYXBTYXZlZDogbnVsbCxcclxuICB2aXN1YWxpemF0aW9uczogW11cclxufTtcclxuaW1wb3J0IHtEQVRBU0VUX0hBTkRMRVJTfSBmcm9tICdwcm9jZXNzb3JzL2RhdGEtcHJvY2Vzc29yJztcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUFjdGlvblRhc2soYWN0aW9uLCBwYXlsb2FkKSB7XHJcbiAgaWYgKHR5cGVvZiBhY3Rpb24gPT09ICdmdW5jdGlvbicpIHtcclxuICAgIHJldHVybiBBQ1RJT05fVEFTSygpLm1hcChfID0+IGFjdGlvbihwYXlsb2FkKSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gbnVsbDtcclxufVxyXG5cclxuZnVuY3Rpb24gX3ZhbGlkYXRlUHJvdmlkZXIocHJvdmlkZXIsIG1ldGhvZCkge1xyXG4gIGlmICghcHJvdmlkZXIpIHtcclxuICAgIENvbnNvbGUuZXJyb3IoYHByb3ZpZGVyIGlzIG5vdCBkZWZpbmVkYCk7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBpZiAodHlwZW9mIHByb3ZpZGVyW21ldGhvZF0gIT09ICdmdW5jdGlvbicpIHtcclxuICAgIENvbnNvbGUuZXJyb3IoYCR7bWV0aG9kfSBpcyBub3QgYSBmdW5jdGlvbiBvZiBDbG91ZCBwcm92aWRlcjogJHtwcm92aWRlci5uYW1lfWApO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHRydWU7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi9wcm92aWRlci1zdGF0ZS11cGRhdGVycycpLmNyZWF0ZUdsb2JhbE5vdGlmaWNhdGlvblRhc2tzfVxyXG4gKi9cclxuZnVuY3Rpb24gY3JlYXRlR2xvYmFsTm90aWZpY2F0aW9uVGFza3Moe3R5cGUsIG1lc3NhZ2UsIGRlbGF5Q2xvc2UgPSB0cnVlfSkge1xyXG4gIGNvbnN0IGlkID0gZ2VuZXJhdGVIYXNoSWQoKTtcclxuICBjb25zdCBzdWNjZXNzTm90ZSA9IHtcclxuICAgIGlkLFxyXG4gICAgdHlwZTogREVGQVVMVF9OT1RJRklDQVRJT05fVFlQRVNbdHlwZV0gfHwgREVGQVVMVF9OT1RJRklDQVRJT05fVFlQRVMuc3VjY2VzcyxcclxuICAgIHRvcGljOiBERUZBVUxUX05PVElGSUNBVElPTl9UT1BJQ1MuZ2xvYmFsLFxyXG4gICAgbWVzc2FnZVxyXG4gIH07XHJcbiAgY29uc3QgdGFzayA9IEFDVElPTl9UQVNLKCkubWFwKF8gPT4gYWRkTm90aWZpY2F0aW9uKHN1Y2Nlc3NOb3RlKSk7XHJcbiAgcmV0dXJuIGRlbGF5Q2xvc2UgPyBbdGFzaywgREVMQVlfVEFTSygzMDAwKS5tYXAoXyA9PiByZW1vdmVOb3RpZmljYXRpb24oaWQpKV0gOiBbdGFza107XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUaGlzIG1ldGhvZCB3aWxsIGV4cG9ydCB0aGUgY3VycmVudCBrZXBsZXIgY29uZmlnIGZpbGUgdG8gdGhlIGNob3NlbiBjbG91ZCBwcm9kZXJcclxuICogYWRkIHJldHVybnMgYSBzaGFyZSBVUkxcclxuICpcclxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vcHJvdmlkZXItc3RhdGUtdXBkYXRlcnMnKS5leHBvcnRGaWxlVG9DbG91ZFVwZGF0ZXJ9XHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZXhwb3J0RmlsZVRvQ2xvdWRVcGRhdGVyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBjb25zdCB7bWFwRGF0YSwgcHJvdmlkZXIsIG9wdGlvbnMgPSB7fSwgb25TdWNjZXNzLCBvbkVycm9yLCBjbG9zZU1vZGFsfSA9IGFjdGlvbi5wYXlsb2FkO1xyXG5cclxuICBpZiAoIV92YWxpZGF0ZVByb3ZpZGVyKHByb3ZpZGVyLCAndXBsb2FkTWFwJykpIHtcclxuICAgIHJldHVybiBzdGF0ZTtcclxuICB9XHJcblxyXG4gIGNvbnN0IG5ld1N0YXRlID0ge1xyXG4gICAgLi4uc3RhdGUsXHJcbiAgICBpc1Byb3ZpZGVyTG9hZGluZzogdHJ1ZSxcclxuICAgIGN1cnJlbnRQcm92aWRlcjogcHJvdmlkZXIubmFtZVxyXG4gIH07XHJcblxyXG4gIC8vIHBheWxvYWQgY2FsbGVkIGJ5IHByb3ZpZGVyLnVwbG9hZE1hcFxyXG4gIGNvbnN0IHBheWxvYWQgPSB7XHJcbiAgICBtYXBEYXRhLFxyXG4gICAgb3B0aW9uc1xyXG4gIH07XHJcbiAgY29uc3QgdXBsb2FkRmlsZVRhc2sgPSBFWFBPUlRfRklMRV9UT19DTE9VRF9UQVNLKHtwcm92aWRlciwgcGF5bG9hZH0pLmJpbWFwKFxyXG4gICAgLy8gc3VjY2Vzc1xyXG4gICAgcmVzcG9uc2UgPT4gZXhwb3J0RmlsZVN1Y2Nlc3Moe3Jlc3BvbnNlLCBwcm92aWRlciwgb3B0aW9ucywgb25TdWNjZXNzLCBjbG9zZU1vZGFsfSksXHJcbiAgICAvLyBlcnJvclxyXG4gICAgZXJyb3IgPT4gZXhwb3J0RmlsZUVycm9yKHtlcnJvciwgcHJvdmlkZXIsIG9wdGlvbnMsIG9uRXJyb3J9KVxyXG4gICk7XHJcblxyXG4gIHJldHVybiB3aXRoVGFzayhuZXdTdGF0ZSwgdXBsb2FkRmlsZVRhc2spO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqXHJcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL3Byb3ZpZGVyLXN0YXRlLXVwZGF0ZXJzJykuZXhwb3J0RmlsZVN1Y2Nlc3NVcGRhdGVyfVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGV4cG9ydEZpbGVTdWNjZXNzVXBkYXRlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgY29uc3Qge3Jlc3BvbnNlLCBwcm92aWRlciwgb3B0aW9ucyA9IHt9LCBvblN1Y2Nlc3MsIGNsb3NlTW9kYWx9ID0gYWN0aW9uLnBheWxvYWQ7XHJcblxyXG4gIGNvbnN0IG5ld1N0YXRlID0ge1xyXG4gICAgLi4uc3RhdGUsXHJcbiAgICBpc1Byb3ZpZGVyTG9hZGluZzogZmFsc2UsXHJcbiAgICAvLyBUT0RPOiBkbyB3ZSBhbHdheXMgaGF2ZSB0byBzdG9yZSB0aGlzP1xyXG4gICAgc3VjY2Vzc0luZm86IHJlc3BvbnNlLFxyXG4gICAgLi4uKCFvcHRpb25zLmlzUHVibGljXHJcbiAgICAgID8ge1xyXG4gICAgICAgICAgbWFwU2F2ZWQ6IHByb3ZpZGVyLm5hbWVcclxuICAgICAgICB9XHJcbiAgICAgIDoge30pXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgdGFza3MgPSBbXHJcbiAgICBjcmVhdGVBY3Rpb25UYXNrKG9uU3VjY2Vzcywge3Jlc3BvbnNlLCBwcm92aWRlciwgb3B0aW9uc30pLFxyXG4gICAgY2xvc2VNb2RhbCAmJlxyXG4gICAgICBBQ1RJT05fVEFTSygpLm1hcChfID0+IHBvc3RTYXZlTG9hZFN1Y2Nlc3MoYE1hcCBzYXZlZCB0byAke3N0YXRlLmN1cnJlbnRQcm92aWRlcn0hYCkpXHJcbiAgXS5maWx0ZXIoZCA9PiBkKTtcclxuXHJcbiAgcmV0dXJuIHRhc2tzLmxlbmd0aCA/IHdpdGhUYXNrKG5ld1N0YXRlLCB0YXNrcykgOiBuZXdTdGF0ZTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBDbG9zZSBtb2RhbCBvbiBzdWNjZXNzIGFuZCBkaXNwbGF5IG5vdGlmaWNhdGlvblxyXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi9wcm92aWRlci1zdGF0ZS11cGRhdGVycycpLnBvc3RTYXZlTG9hZFN1Y2Nlc3NVcGRhdGVyfVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHBvc3RTYXZlTG9hZFN1Y2Nlc3NVcGRhdGVyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBjb25zdCBtZXNzYWdlID0gYWN0aW9uLnBheWxvYWQgfHwgYFNhdmVkIC8gTG9hZCB0byAke3N0YXRlLmN1cnJlbnRQcm92aWRlcn0gU3VjY2Vzc2A7XHJcblxyXG4gIGNvbnN0IHRhc2tzID0gW1xyXG4gICAgQUNUSU9OX1RBU0soKS5tYXAoXyA9PiB0b2dnbGVNb2RhbChudWxsKSksXHJcbiAgICBBQ1RJT05fVEFTSygpLm1hcChfID0+IHJlc2V0UHJvdmlkZXJTdGF0dXMoKSksXHJcbiAgICAuLi5jcmVhdGVHbG9iYWxOb3RpZmljYXRpb25UYXNrcyh7bWVzc2FnZX0pXHJcbiAgXTtcclxuXHJcbiAgcmV0dXJuIHdpdGhUYXNrKHN0YXRlLCB0YXNrcyk7XHJcbn07XHJcblxyXG4vKipcclxuICpcclxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vcHJvdmlkZXItc3RhdGUtdXBkYXRlcnMnKS5leHBvcnRGaWxlRXJyb3JVcGRhdGVyfVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGV4cG9ydEZpbGVFcnJvclVwZGF0ZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIGNvbnN0IHtlcnJvciwgcHJvdmlkZXIsIG9uRXJyb3J9ID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgY29uc3QgbmV3U3RhdGUgPSB7XHJcbiAgICAuLi5zdGF0ZSxcclxuICAgIGlzUHJvdmlkZXJMb2FkaW5nOiBmYWxzZSxcclxuICAgIHByb3ZpZGVyRXJyb3I6IGdldEVycm9yKGVycm9yKVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHRhc2sgPSBjcmVhdGVBY3Rpb25UYXNrKG9uRXJyb3IsIHtlcnJvciwgcHJvdmlkZXJ9KTtcclxuXHJcbiAgcmV0dXJuIHRhc2sgPyB3aXRoVGFzayhuZXdTdGF0ZSwgdGFzaykgOiBuZXdTdGF0ZTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBsb2FkQ2xvdWRNYXBVcGRhdGVyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBjb25zdCB7bG9hZFBhcmFtcywgcHJvdmlkZXIsIG9uU3VjY2Vzcywgb25FcnJvcn0gPSBhY3Rpb24ucGF5bG9hZDtcclxuICBpZiAoIWxvYWRQYXJhbXMpIHtcclxuICAgIENvbnNvbGUud2FybignbG9hZCBtYXAgZXJyb3I6IGxvYWRQYXJhbXMgaXMgdW5kZWZpbmVkJyk7XHJcbiAgICByZXR1cm4gc3RhdGU7XHJcbiAgfVxyXG4gIGlmICghX3ZhbGlkYXRlUHJvdmlkZXIocHJvdmlkZXIsICdkb3dubG9hZE1hcCcpKSB7XHJcbiAgICByZXR1cm4gc3RhdGU7XHJcbiAgfVxyXG5cclxuICBjb25zdCBuZXdTdGF0ZSA9IHtcclxuICAgIC4uLnN0YXRlLFxyXG4gICAgaXNQcm92aWRlckxvYWRpbmc6IHRydWUsXHJcbiAgICBpc0Nsb3VkTWFwTG9hZGluZzogdHJ1ZVxyXG4gIH07XHJcblxyXG4gIC8vIHBheWxvYWQgY2FsbGVkIGJ5IHByb3ZpZGVyLmRvd25sb2FkTWFwXHJcbiAgY29uc3QgdXBsb2FkRmlsZVRhc2sgPSBMT0FEX0NMT1VEX01BUF9UQVNLKHtwcm92aWRlciwgcGF5bG9hZDogbG9hZFBhcmFtc30pLmJpbWFwKFxyXG4gICAgLy8gc3VjY2Vzc1xyXG4gICAgcmVzcG9uc2UgPT4gbG9hZENsb3VkTWFwU3VjY2Vzcyh7cmVzcG9uc2UsIGxvYWRQYXJhbXMsIHByb3ZpZGVyLCBvblN1Y2Nlc3MsIG9uRXJyb3J9KSxcclxuICAgIC8vIGVycm9yXHJcbiAgICBlcnJvciA9PiBsb2FkQ2xvdWRNYXBFcnJvcih7ZXJyb3IsIHByb3ZpZGVyLCBvbkVycm9yfSlcclxuICApO1xyXG5cclxuICByZXR1cm4gd2l0aFRhc2sobmV3U3RhdGUsIHVwbG9hZEZpbGVUYXNrKTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIGNoZWNrTG9hZE1hcFJlc3BvbnNlRXJyb3IocmVzcG9uc2UpIHtcclxuICBpZiAoIXJlc3BvbnNlIHx8ICFpc1BsYWluT2JqZWN0KHJlc3BvbnNlKSkge1xyXG4gICAgcmV0dXJuIG5ldyBFcnJvcignTG9hZCBtYXAgcmVzcG9uc2UgaXMgZW1wdHknKTtcclxuICB9XHJcbiAgaWYgKCFpc1BsYWluT2JqZWN0KHJlc3BvbnNlLm1hcCkpIHtcclxuICAgIHJldHVybiBuZXcgRXJyb3IoYExvYWQgbWFwIHJlc3BvbnNlIHNob3VsZCBiZSBhbiBvYmplY3QgcHJvcGVydHkgXCJtYXBcImApO1xyXG4gIH1cclxuICBpZiAoIXJlc3BvbnNlLm1hcC5kYXRhc2V0cyB8fCAhcmVzcG9uc2UubWFwLmNvbmZpZykge1xyXG4gICAgcmV0dXJuIG5ldyBFcnJvcihgTG9hZCBtYXAgcmVzcG9uc2UubWFwIHNob3VsZCBiZSBhbiBvYmplY3Qgd2l0aCBwcm9wZXJ0eSBkYXRhc2V0cyBvciBjb25maWdgKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBudWxsO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXREYXRhc2V0SGFuZGxlcihmb3JtYXQpIHtcclxuICBjb25zdCBkZWZhdWx0SGFuZGxlciA9IERBVEFTRVRfSEFORExFUlNbREFUQVNFVF9GT1JNQVRTLmNzdl07XHJcbiAgaWYgKCFmb3JtYXQpIHtcclxuICAgIENvbnNvbGUud2FybignZm9ybWF0IGlzIG5vdCBwcm92aWRlZCBpbiBsb2FkIG1hcCByZXNwb25zZSwgd2lsbCB1c2UgY3N2IGJ5IGRlZmF1bHQnKTtcclxuICAgIHJldHVybiBkZWZhdWx0SGFuZGxlcjtcclxuICB9XHJcblxyXG4gIGlmICghREFUQVNFVF9IQU5ETEVSU1tmb3JtYXRdKSB7XHJcbiAgICBjb25zdCBzdXBwb3J0ZWRGb3JtYXQgPSBPYmplY3Qua2V5cyhEQVRBU0VUX0ZPUk1BVFMpXHJcbiAgICAgIC5tYXAoayA9PiBgJyR7a30nYClcclxuICAgICAgLmpvaW4oJywgJyk7XHJcbiAgICBDb25zb2xlLndhcm4oXHJcbiAgICAgIGB1bmtub3duIGZvcm1hdCAke2Zvcm1hdH0uIFBsZWFzZSB1c2Ugb25lIG9mICR7c3VwcG9ydGVkRm9ybWF0fSwgd2lsbCB1c2UgY3N2IGJ5IGRlZmF1bHRgXHJcbiAgICApO1xyXG4gICAgcmV0dXJuIGRlZmF1bHRIYW5kbGVyO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIERBVEFTRVRfSEFORExFUlNbZm9ybWF0XTtcclxufVxyXG5cclxuZnVuY3Rpb24gcGFyc2VMb2FkTWFwUmVzcG9uc2UocmVzcG9uc2UsIGxvYWRQYXJhbXMsIHByb3ZpZGVyKSB7XHJcbiAgY29uc3Qge21hcCwgZm9ybWF0fSA9IHJlc3BvbnNlO1xyXG4gIGNvbnN0IHByb2Nlc3Nvck1ldGhvZCA9IGdldERhdGFzZXRIYW5kbGVyKGZvcm1hdCk7XHJcblxyXG4gIGNvbnN0IHBhcnNlZERhdGFzZXRzID0gdG9BcnJheShtYXAuZGF0YXNldHMpLm1hcCgoZHMsIGkpID0+IHtcclxuICAgIGlmIChmb3JtYXQgPT09IERBVEFTRVRfRk9STUFUUy5rZXBsZXJnbCkge1xyXG4gICAgICAvLyBubyBuZWVkIHRvIG9idGFpbiBpZCwgZGlyZWN0bHkgcGFzcyB0aGVtIGluXHJcbiAgICAgIHJldHVybiBwcm9jZXNzb3JNZXRob2QoZHMpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgaW5mbyA9IChkcyAmJiBkcy5pbmZvKSB8fCB7aWQ6IGdlbmVyYXRlSGFzaElkKDYpfTtcclxuICAgIGNvbnN0IGRhdGEgPSBwcm9jZXNzb3JNZXRob2QoZHMuZGF0YSB8fCBkcyk7XHJcbiAgICByZXR1cm4ge2luZm8sIGRhdGF9O1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCBwYXJzZWRDb25maWcgPSBtYXAuY29uZmlnICYmIEtlcGxlckdsU2NoZW1hLnBhcnNlU2F2ZWRDb25maWcobWFwLmNvbmZpZyk7XHJcblxyXG4gIGNvbnN0IGluZm8gPSB7XHJcbiAgICAuLi5tYXAuaW5mbyxcclxuICAgIHByb3ZpZGVyOiBwcm92aWRlci5uYW1lLFxyXG4gICAgbG9hZFBhcmFtc1xyXG4gIH07XHJcbiAgcmV0dXJuIHtcclxuICAgIGRhdGFzZXRzOiBwYXJzZWREYXRhc2V0cyxcclxuICAgIGluZm8sXHJcbiAgICAuLi4ocGFyc2VkQ29uZmlnID8ge2NvbmZpZzogcGFyc2VkQ29uZmlnfSA6IHt9KVxyXG4gIH07XHJcbn1cclxuXHJcbi8qKlxyXG4gKlxyXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi9wcm92aWRlci1zdGF0ZS11cGRhdGVycycpLmxvYWRDbG91ZE1hcFN1Y2Nlc3NVcGRhdGVyfVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGxvYWRDbG91ZE1hcFN1Y2Nlc3NVcGRhdGVyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBjb25zdCB7cmVzcG9uc2UsIGxvYWRQYXJhbXMsIHByb3ZpZGVyLCBvblN1Y2Nlc3MsIG9uRXJyb3J9ID0gYWN0aW9uLnBheWxvYWQ7XHJcblxyXG4gIGNvbnN0IGZvcm1hdEVycm9yID0gY2hlY2tMb2FkTWFwUmVzcG9uc2VFcnJvcihyZXNwb25zZSk7XHJcbiAgaWYgKGZvcm1hdEVycm9yKSB7XHJcbiAgICAvLyBpZiByZXNwb25zZSBmb3JtYXQgaXMgbm90IGNvcnJlY3RcclxuICAgIHJldHVybiBleHBvcnRGaWxlRXJyb3JVcGRhdGVyKHN0YXRlLCB7XHJcbiAgICAgIHBheWxvYWQ6IHtlcnJvcjogZm9ybWF0RXJyb3IsIHByb3ZpZGVyLCBvbkVycm9yfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBuZXdTdGF0ZSA9IHtcclxuICAgIC4uLnN0YXRlLFxyXG4gICAgbWFwU2F2ZWQ6IHByb3ZpZGVyLm5hbWUsXHJcbiAgICBjdXJyZW50UHJvdmlkZXI6IHByb3ZpZGVyLm5hbWUsXHJcbiAgICBpc0Nsb3VkTWFwTG9hZGluZzogZmFsc2UsXHJcbiAgICBpc1Byb3ZpZGVyTG9hZGluZzogZmFsc2VcclxuICB9O1xyXG5cclxuICBjb25zdCBwYXlsb2FkID0gcGFyc2VMb2FkTWFwUmVzcG9uc2UocmVzcG9uc2UsIGxvYWRQYXJhbXMsIHByb3ZpZGVyKTtcclxuXHJcbiAgY29uc3QgdGFza3MgPSBbXHJcbiAgICBBQ1RJT05fVEFTSygpLm1hcChfID0+IGFkZERhdGFUb01hcChwYXlsb2FkKSksXHJcbiAgICBjcmVhdGVBY3Rpb25UYXNrKG9uU3VjY2Vzcywge3Jlc3BvbnNlLCBsb2FkUGFyYW1zLCBwcm92aWRlcn0pLFxyXG4gICAgQUNUSU9OX1RBU0soKS5tYXAoXyA9PiBwb3N0U2F2ZUxvYWRTdWNjZXNzKGBNYXAgZnJvbSAke3Byb3ZpZGVyLm5hbWV9IGxvYWRlZGApKVxyXG4gIF0uZmlsdGVyKGQgPT4gZCk7XHJcblxyXG4gIHJldHVybiB0YXNrcy5sZW5ndGggPyB3aXRoVGFzayhuZXdTdGF0ZSwgdGFza3MpIDogbmV3U3RhdGU7XHJcbn07XHJcblxyXG4vKipcclxuICpcclxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vcHJvdmlkZXItc3RhdGUtdXBkYXRlcnMnKS5sb2FkQ2xvdWRNYXBFcnJvclVwZGF0ZXJ9XHJcbiAqL1xyXG5leHBvcnQgY29uc3QgbG9hZENsb3VkTWFwRXJyb3JVcGRhdGVyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBjb25zdCBtZXNzYWdlID0gZ2V0RXJyb3IoYWN0aW9uLnBheWxvYWQuZXJyb3IpIHx8IGBFcnJvciBsb2FkaW5nIHNhdmVkIG1hcGA7XHJcblxyXG4gIENvbnNvbGUud2FybihtZXNzYWdlKTtcclxuXHJcbiAgY29uc3QgbmV3U3RhdGUgPSB7XHJcbiAgICAuLi5zdGF0ZSxcclxuICAgIGlzUHJvdmlkZXJMb2FkaW5nOiBmYWxzZSxcclxuICAgIGlzQ2xvdWRNYXBMb2FkaW5nOiBmYWxzZSxcclxuICAgIHByb3ZpZGVyRXJyb3I6IG51bGxcclxuICB9O1xyXG5cclxuICByZXR1cm4gd2l0aFRhc2soXHJcbiAgICBuZXdTdGF0ZSxcclxuICAgIGNyZWF0ZUdsb2JhbE5vdGlmaWNhdGlvblRhc2tzKHt0eXBlOiAnZXJyb3InLCBtZXNzYWdlLCBkZWxheUNsb3NlOiBmYWxzZX0pXHJcbiAgKTtcclxufTtcclxuXHJcbi8qKlxyXG4gKlxyXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi9wcm92aWRlci1zdGF0ZS11cGRhdGVycycpLnJlc2V0UHJvdmlkZXJTdGF0dXNVcGRhdGVyfVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHJlc2V0UHJvdmlkZXJTdGF0dXNVcGRhdGVyID0gKHN0YXRlLCBhY3Rpb24pID0+ICh7XHJcbiAgLi4uc3RhdGUsXHJcbiAgaXNQcm92aWRlckxvYWRpbmc6IGZhbHNlLFxyXG4gIHByb3ZpZGVyRXJyb3I6IG51bGwsXHJcbiAgaXNDbG91ZE1hcExvYWRpbmc6IGZhbHNlLFxyXG4gIHN1Y2Nlc3NJbmZvOiB7fVxyXG59KTtcclxuXHJcbi8qKlxyXG4gKiBTZXQgY3VycmVudCBjbG91ZFByb3ZpZGVyXHJcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL3Byb3ZpZGVyLXN0YXRlLXVwZGF0ZXJzJykuc2V0Q2xvdWRQcm92aWRlclVwZGF0ZXJ9XHJcbiAqL1xyXG5leHBvcnQgY29uc3Qgc2V0Q2xvdWRQcm92aWRlclVwZGF0ZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4gKHtcclxuICAuLi5zdGF0ZSxcclxuICBpc1Byb3ZpZGVyTG9hZGluZzogZmFsc2UsXHJcbiAgcHJvdmlkZXJFcnJvcjogbnVsbCxcclxuICBzdWNjZXNzSW5mbzoge30sXHJcbiAgY3VycmVudFByb3ZpZGVyOiBhY3Rpb24ucGF5bG9hZFxyXG59KTtcclxuXHJcbi8qKlxyXG4gKlxyXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi9wcm92aWRlci1zdGF0ZS11cGRhdGVycycpLmdldFNhdmVkTWFwc1VwZGF0ZXJ9XHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZ2V0U2F2ZWRNYXBzVXBkYXRlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgY29uc3QgcHJvdmlkZXIgPSBhY3Rpb24ucGF5bG9hZDtcclxuICBpZiAoIV92YWxpZGF0ZVByb3ZpZGVyKHByb3ZpZGVyLCAnbGlzdE1hcHMnKSkge1xyXG4gICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgZ2V0U2F2ZWRNYXBzVGFzayA9IEdFVF9TQVZFRF9NQVBTX1RBU0socHJvdmlkZXIpLmJpbWFwKFxyXG4gICAgLy8gc3VjY2Vzc1xyXG4gICAgdmlzdWFsaXphdGlvbnMgPT4gZ2V0U2F2ZWRNYXBzU3VjY2Vzcyh7dmlzdWFsaXphdGlvbnMsIHByb3ZpZGVyfSksXHJcbiAgICAvLyBlcnJvclxyXG4gICAgZXJyb3IgPT4gZ2V0U2F2ZWRNYXBzRXJyb3Ioe2Vycm9yLCBwcm92aWRlcn0pXHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIHdpdGhUYXNrKFxyXG4gICAge1xyXG4gICAgICAuLi5zdGF0ZSxcclxuICAgICAgaXNQcm92aWRlckxvYWRpbmc6IHRydWVcclxuICAgIH0sXHJcbiAgICBnZXRTYXZlZE1hcHNUYXNrXHJcbiAgKTtcclxufTtcclxuXHJcbi8qKlxyXG4gKlxyXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi9wcm92aWRlci1zdGF0ZS11cGRhdGVycycpLmdldFNhdmVkTWFwc1N1Y2Nlc3NVcGRhdGVyfVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGdldFNhdmVkTWFwc1N1Y2Nlc3NVcGRhdGVyID0gKHN0YXRlLCBhY3Rpb24pID0+ICh7XHJcbiAgLi4uc3RhdGUsXHJcbiAgaXNQcm92aWRlckxvYWRpbmc6IGZhbHNlLFxyXG4gIHZpc3VhbGl6YXRpb25zOiBhY3Rpb24ucGF5bG9hZC52aXN1YWxpemF0aW9uc1xyXG59KTtcclxuXHJcbi8qKlxyXG4gKlxyXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi9wcm92aWRlci1zdGF0ZS11cGRhdGVycycpLmdldFNhdmVkTWFwc0Vycm9yVXBkYXRlcn1cclxuICovXHJcbmV4cG9ydCBjb25zdCBnZXRTYXZlZE1hcHNFcnJvclVwZGF0ZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIGNvbnN0IG1lc3NhZ2UgPVxyXG4gICAgZ2V0RXJyb3IoYWN0aW9uLnBheWxvYWQuZXJyb3IpIHx8IGBFcnJvciBnZXR0aW5nIHNhdmVkIG1hcHMgZnJvbSAke3N0YXRlLmN1cnJlbnRQcm92aWRlcn1gO1xyXG5cclxuICBDb25zb2xlLndhcm4oYWN0aW9uLnBheWxvYWQuZXJyb3IpO1xyXG5cclxuICBjb25zdCBuZXdTdGF0ZSA9IHtcclxuICAgIC4uLnN0YXRlLFxyXG4gICAgY3VycmVudFByb3ZpZGVyOiBudWxsLFxyXG4gICAgaXNQcm92aWRlckxvYWRpbmc6IGZhbHNlXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIHdpdGhUYXNrKFxyXG4gICAgbmV3U3RhdGUsXHJcbiAgICBjcmVhdGVHbG9iYWxOb3RpZmljYXRpb25UYXNrcyh7dHlwZTogJ2Vycm9yJywgbWVzc2FnZSwgZGVsYXlDbG9zZTogZmFsc2V9KVxyXG4gICk7XHJcbn07XHJcbiJdfQ==