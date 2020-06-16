"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addDataToMapComposed = exports.loadFileSuccessUpdater = exports.addDataToMapUpdater = exports.defaultAddDataToMapOptions = exports.isValidConfig = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _uiStateUpdaters = require("./ui-state-updaters");

var _visStateUpdaters = require("./vis-state-updaters");

var _mapStateUpdaters = require("./map-state-updaters");

var _mapStyleUpdaters = require("./map-style-updaters");

var _dataUtils = require("../utils/data-utils");

var _schemas = _interopRequireDefault(require("../schemas"));

var _utils = require("../utils/utils");

var _fileHandler = require("../processors/file-handler");

var _console = _interopRequireDefault(require("global/console"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// compose action to apply result multiple reducers, with the output of one

/**
 * Some actions will affect the entire kepler.lg instance state.
 * The updaters for these actions is exported as `combinedUpdaters`. These updater take the entire instance state
 * as the first argument. Read more about [Using updaters](../advanced-usage/using-updaters.md)
 * @public
 * @example
 *
 * import keplerGlReducer, {combinedUpdaters} from 'kepler.gl/reducers';
 * // Root Reducer
 * const reducers = combineReducers({
 *  keplerGl: keplerGlReducer,
 *  app: appReducer
 * });
 *
 * const composedReducer = (state, action) => {
 *  switch (action.type) {
 *    // add data to map after receiving data from remote sources
 *    case 'LOAD_REMOTE_RESOURCE_SUCCESS':
 *      return {
 *        ...state,
 *        keplerGl: {
 *          ...state.keplerGl,
 *          // pass in kepler.gl instance state to combinedUpdaters
 *          map:  combinedUpdaters.addDataToMapUpdater(
 *           state.keplerGl.map,
 *           {
 *             payload: {
 *               datasets: action.datasets,
 *               options: {readOnly: true},
 *               config: action.config
 *              }
 *            }
 *          )
 *        }
 *      };
 *  }
 *  return reducers(state, action);
 * };
 *
 * export default composedReducer;
 */

/* eslint-disable no-unused-vars */
// @ts-ignore
var combinedUpdaters = null;
/* eslint-enable no-unused-vars */

var isValidConfig = function isValidConfig(config) {
  return (0, _utils.isPlainObject)(config) && (0, _utils.isPlainObject)(config.config) && config.version;
};

exports.isValidConfig = isValidConfig;
var defaultAddDataToMapOptions = {
  centerMap: true,
  keepExistingConfig: false
};
exports.defaultAddDataToMapOptions = defaultAddDataToMapOptions;

var identity = function identity(state) {
  return state;
};
/* eslint-disable no-unused-vars */
// @ts-ignore


function log(text) {
  return function (value) {
    return _console["default"].log(text, value);
  };
}
/* eslint-enable no-unused-vars */


function payload_(p) {
  return {
    payload: p
  };
}

function apply_(updater, payload) {
  return function (state) {
    return updater(state, payload);
  };
}

function with_(fn) {
  return function (state) {
    return fn(state)(state);
  };
}

function if_(pred, fn) {
  return pred ? fn : identity;
}

function compose_(fns) {
  return function (state) {
    return fns.reduce(function (state2, fn) {
      return fn(state2);
    }, state);
  };
}

function merge_(obj) {
  return function (state) {
    return _objectSpread(_objectSpread({}, state), obj);
  };
}

function pick_(prop) {
  return function (fn) {
    return function (state) {
      return _objectSpread(_objectSpread({}, state), {}, (0, _defineProperty2["default"])({}, prop, fn(state[prop])));
    };
  };
}
/**
 * Combine data and full configuration update in a single action
 *
 * @memberof combinedUpdaters
 * @param {Object} state kepler.gl instance state, containing all subreducer state
 * @param {Object} action
 * @param {Object} action.payload `{datasets, options, config}`
 * @param action.payload.datasets - ***required** datasets can be a dataset or an array of datasets
 * Each dataset object needs to have `info` and `data` property.
 * @param [action.payload.options] option object `{centerMap: true}`
 * @param [action.payload.config] map config
 * @param [action.payload.info] map info contains title and description
 * @returns nextState
 *
 * @typedef {Object} Dataset
 * @property info -info of a dataset
 * @property info.id - id of this dataset. If config is defined, `id` should matches the `dataId` in config.
 * @property info.label - A display name of this dataset
 * @property data - ***required** The data object, in a tabular format with 2 properties `fields` and `rows`
 * @property data.fields - ***required** Array of fields,
 * @property data.fields.name - ***required** Name of the field,
 * @property data.rows - ***required** Array of rows, in a tabular format with `fields` and `rows`
 *
 * @type {typeof import('./combined-updaters').addDataToMapUpdater}
 * @public
 */


var addDataToMapUpdater = function addDataToMapUpdater(state, _ref) {
  var payload = _ref.payload;
  var datasets = payload.datasets,
      config = payload.config,
      info = payload.info;

  var options = _objectSpread(_objectSpread({}, defaultAddDataToMapOptions), payload.options);

  var parsedConfig = config;

  if (isValidConfig(config)) {
    // if passed in saved config
    parsedConfig = _schemas["default"].parseSavedConfig(config);
  }

  var oldLayers = state.visState.layers;

  var filterNewlyAddedLayers = function filterNewlyAddedLayers(layers) {
    return layers.filter(function (nl) {
      return !oldLayers.find(function (ol) {
        return ol === nl;
      });
    });
  };

  return compose_([pick_('visState')(apply_(_visStateUpdaters.updateVisDataUpdater, {
    datasets: datasets,
    options: options,
    config: parsedConfig
  })), if_(info, pick_('visState')(apply_(_visStateUpdaters.setMapInfoUpdater, {
    info: info
  }))), with_(function (_ref2) {
    var visState = _ref2.visState;
    return pick_('mapState')(apply_(_mapStateUpdaters.receiveMapConfigUpdater, payload_({
      config: parsedConfig,
      options: options,
      bounds: options.centerMap ? (0, _dataUtils.findMapBounds)(filterNewlyAddedLayers(visState.layers)) : null
    })));
  }), pick_('mapStyle')(apply_(_mapStyleUpdaters.receiveMapConfigUpdater, payload_({
    config: parsedConfig,
    options: options
  }))), pick_('uiState')(apply_(_uiStateUpdaters.loadFilesSuccessUpdater)), pick_('uiState')(apply_(_uiStateUpdaters.toggleModalUpdater, payload_(null))), pick_('uiState')(merge_(options.hasOwnProperty('readOnly') ? {
    readOnly: options.readOnly
  } : {}))])(state);
};
/**
 * @type {typeof import('./combined-updaters').loadFileSuccessUpdater}
 */


exports.addDataToMapUpdater = addDataToMapUpdater;

var loadFileSuccessUpdater = function loadFileSuccessUpdater(state, action) {
  // still more to load
  var payloads = (0, _fileHandler.filesToDataPayload)(action.result);
  var nextState = compose_([pick_('visState')(merge_({
    fileLoading: false,
    fileLoadingProgress: 100
  }))])(state); // make multiple add data to map calls

  return compose_(payloads.map(function (p) {
    return apply_(addDataToMapUpdater, payload_(p));
  }))(nextState);
};

exports.loadFileSuccessUpdater = loadFileSuccessUpdater;
var addDataToMapComposed = addDataToMapUpdater;
exports.addDataToMapComposed = addDataToMapComposed;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWR1Y2Vycy9jb21iaW5lZC11cGRhdGVycy5qcyJdLCJuYW1lcyI6WyJjb21iaW5lZFVwZGF0ZXJzIiwiaXNWYWxpZENvbmZpZyIsImNvbmZpZyIsInZlcnNpb24iLCJkZWZhdWx0QWRkRGF0YVRvTWFwT3B0aW9ucyIsImNlbnRlck1hcCIsImtlZXBFeGlzdGluZ0NvbmZpZyIsImlkZW50aXR5Iiwic3RhdGUiLCJsb2ciLCJ0ZXh0IiwidmFsdWUiLCJDb25zb2xlIiwicGF5bG9hZF8iLCJwIiwicGF5bG9hZCIsImFwcGx5XyIsInVwZGF0ZXIiLCJ3aXRoXyIsImZuIiwiaWZfIiwicHJlZCIsImNvbXBvc2VfIiwiZm5zIiwicmVkdWNlIiwic3RhdGUyIiwibWVyZ2VfIiwib2JqIiwicGlja18iLCJwcm9wIiwiYWRkRGF0YVRvTWFwVXBkYXRlciIsImRhdGFzZXRzIiwiaW5mbyIsIm9wdGlvbnMiLCJwYXJzZWRDb25maWciLCJLZXBsZXJHbFNjaGVtYSIsInBhcnNlU2F2ZWRDb25maWciLCJvbGRMYXllcnMiLCJ2aXNTdGF0ZSIsImxheWVycyIsImZpbHRlck5ld2x5QWRkZWRMYXllcnMiLCJmaWx0ZXIiLCJubCIsImZpbmQiLCJvbCIsInZpc1N0YXRlVXBkYXRlVmlzRGF0YVVwZGF0ZXIiLCJzZXRNYXBJbmZvVXBkYXRlciIsInN0YXRlTWFwQ29uZmlnVXBkYXRlciIsImJvdW5kcyIsInN0eWxlTWFwQ29uZmlnVXBkYXRlciIsImxvYWRGaWxlc1N1Y2Nlc3NVcGRhdGVyIiwidG9nZ2xlTW9kYWxVcGRhdGVyIiwiaGFzT3duUHJvcGVydHkiLCJyZWFkT25seSIsImxvYWRGaWxlU3VjY2Vzc1VwZGF0ZXIiLCJhY3Rpb24iLCJwYXlsb2FkcyIsInJlc3VsdCIsIm5leHRTdGF0ZSIsImZpbGVMb2FkaW5nIiwiZmlsZUxvYWRpbmdQcm9ncmVzcyIsIm1hcCIsImFkZERhdGFUb01hcENvbXBvc2VkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztB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QUFtQixFQUFFO0FBRmhCLEdBQUQsQ0FEUixDQUR5QixDQUFELENBQVIsQ0FPZnBELEtBUGUsQ0FBbEIsQ0FIdUQsQ0FZdkQ7O0FBQ0EsU0FBT2MsUUFBUSxDQUFDa0MsUUFBUSxDQUFDSyxHQUFULENBQWEsVUFBQS9DLENBQUM7QUFBQSxXQUFJRSxNQUFNLENBQUNjLG1CQUFELEVBQXNCakIsUUFBUSxDQUFDQyxDQUFELENBQTlCLENBQVY7QUFBQSxHQUFkLENBQUQsQ0FBUixDQUFzRTRDLFNBQXRFLENBQVA7QUFDRCxDQWRNOzs7QUFnQkEsSUFBTUksb0JBQW9CLEdBQUdoQyxtQkFBN0IiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQge3RvZ2dsZU1vZGFsVXBkYXRlciwgbG9hZEZpbGVzU3VjY2Vzc1VwZGF0ZXJ9IGZyb20gJy4vdWktc3RhdGUtdXBkYXRlcnMnO1xyXG5pbXBvcnQge1xyXG4gIHVwZGF0ZVZpc0RhdGFVcGRhdGVyIGFzIHZpc1N0YXRlVXBkYXRlVmlzRGF0YVVwZGF0ZXIsXHJcbiAgc2V0TWFwSW5mb1VwZGF0ZXJcclxufSBmcm9tICcuL3Zpcy1zdGF0ZS11cGRhdGVycyc7XHJcbmltcG9ydCB7cmVjZWl2ZU1hcENvbmZpZ1VwZGF0ZXIgYXMgc3RhdGVNYXBDb25maWdVcGRhdGVyfSBmcm9tICcuL21hcC1zdGF0ZS11cGRhdGVycyc7XHJcbmltcG9ydCB7cmVjZWl2ZU1hcENvbmZpZ1VwZGF0ZXIgYXMgc3R5bGVNYXBDb25maWdVcGRhdGVyfSBmcm9tICcuL21hcC1zdHlsZS11cGRhdGVycyc7XHJcbmltcG9ydCB7ZmluZE1hcEJvdW5kc30gZnJvbSAndXRpbHMvZGF0YS11dGlscyc7XHJcbmltcG9ydCBLZXBsZXJHbFNjaGVtYSBmcm9tICdzY2hlbWFzJztcclxuaW1wb3J0IHtpc1BsYWluT2JqZWN0fSBmcm9tICd1dGlscy91dGlscyc7XHJcbmltcG9ydCB7ZmlsZXNUb0RhdGFQYXlsb2FkfSBmcm9tICdwcm9jZXNzb3JzL2ZpbGUtaGFuZGxlcic7XHJcbmltcG9ydCBDb25zb2xlIGZyb20gJ2dsb2JhbC9jb25zb2xlJztcclxuXHJcbi8vIGNvbXBvc2UgYWN0aW9uIHRvIGFwcGx5IHJlc3VsdCBtdWx0aXBsZSByZWR1Y2Vycywgd2l0aCB0aGUgb3V0cHV0IG9mIG9uZVxyXG5cclxuLyoqXHJcbiAqIFNvbWUgYWN0aW9ucyB3aWxsIGFmZmVjdCB0aGUgZW50aXJlIGtlcGxlci5sZyBpbnN0YW5jZSBzdGF0ZS5cclxuICogVGhlIHVwZGF0ZXJzIGZvciB0aGVzZSBhY3Rpb25zIGlzIGV4cG9ydGVkIGFzIGBjb21iaW5lZFVwZGF0ZXJzYC4gVGhlc2UgdXBkYXRlciB0YWtlIHRoZSBlbnRpcmUgaW5zdGFuY2Ugc3RhdGVcclxuICogYXMgdGhlIGZpcnN0IGFyZ3VtZW50LiBSZWFkIG1vcmUgYWJvdXQgW1VzaW5nIHVwZGF0ZXJzXSguLi9hZHZhbmNlZC11c2FnZS91c2luZy11cGRhdGVycy5tZClcclxuICogQHB1YmxpY1xyXG4gKiBAZXhhbXBsZVxyXG4gKlxyXG4gKiBpbXBvcnQga2VwbGVyR2xSZWR1Y2VyLCB7Y29tYmluZWRVcGRhdGVyc30gZnJvbSAna2VwbGVyLmdsL3JlZHVjZXJzJztcclxuICogLy8gUm9vdCBSZWR1Y2VyXHJcbiAqIGNvbnN0IHJlZHVjZXJzID0gY29tYmluZVJlZHVjZXJzKHtcclxuICogIGtlcGxlckdsOiBrZXBsZXJHbFJlZHVjZXIsXHJcbiAqICBhcHA6IGFwcFJlZHVjZXJcclxuICogfSk7XHJcbiAqXHJcbiAqIGNvbnN0IGNvbXBvc2VkUmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAqICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAqICAgIC8vIGFkZCBkYXRhIHRvIG1hcCBhZnRlciByZWNlaXZpbmcgZGF0YSBmcm9tIHJlbW90ZSBzb3VyY2VzXHJcbiAqICAgIGNhc2UgJ0xPQURfUkVNT1RFX1JFU09VUkNFX1NVQ0NFU1MnOlxyXG4gKiAgICAgIHJldHVybiB7XHJcbiAqICAgICAgICAuLi5zdGF0ZSxcclxuICogICAgICAgIGtlcGxlckdsOiB7XHJcbiAqICAgICAgICAgIC4uLnN0YXRlLmtlcGxlckdsLFxyXG4gKiAgICAgICAgICAvLyBwYXNzIGluIGtlcGxlci5nbCBpbnN0YW5jZSBzdGF0ZSB0byBjb21iaW5lZFVwZGF0ZXJzXHJcbiAqICAgICAgICAgIG1hcDogIGNvbWJpbmVkVXBkYXRlcnMuYWRkRGF0YVRvTWFwVXBkYXRlcihcclxuICogICAgICAgICAgIHN0YXRlLmtlcGxlckdsLm1hcCxcclxuICogICAgICAgICAgIHtcclxuICogICAgICAgICAgICAgcGF5bG9hZDoge1xyXG4gKiAgICAgICAgICAgICAgIGRhdGFzZXRzOiBhY3Rpb24uZGF0YXNldHMsXHJcbiAqICAgICAgICAgICAgICAgb3B0aW9uczoge3JlYWRPbmx5OiB0cnVlfSxcclxuICogICAgICAgICAgICAgICBjb25maWc6IGFjdGlvbi5jb25maWdcclxuICogICAgICAgICAgICAgIH1cclxuICogICAgICAgICAgICB9XHJcbiAqICAgICAgICAgIClcclxuICogICAgICAgIH1cclxuICogICAgICB9O1xyXG4gKiAgfVxyXG4gKiAgcmV0dXJuIHJlZHVjZXJzKHN0YXRlLCBhY3Rpb24pO1xyXG4gKiB9O1xyXG4gKlxyXG4gKiBleHBvcnQgZGVmYXVsdCBjb21wb3NlZFJlZHVjZXI7XHJcbiAqL1xyXG5cclxuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cclxuLy8gQHRzLWlnbm9yZVxyXG5jb25zdCBjb21iaW5lZFVwZGF0ZXJzID0gbnVsbDtcclxuLyogZXNsaW50LWVuYWJsZSBuby11bnVzZWQtdmFycyAqL1xyXG5cclxuZXhwb3J0IGNvbnN0IGlzVmFsaWRDb25maWcgPSBjb25maWcgPT5cclxuICBpc1BsYWluT2JqZWN0KGNvbmZpZykgJiYgaXNQbGFpbk9iamVjdChjb25maWcuY29uZmlnKSAmJiBjb25maWcudmVyc2lvbjtcclxuXHJcbmV4cG9ydCBjb25zdCBkZWZhdWx0QWRkRGF0YVRvTWFwT3B0aW9ucyA9IHtcclxuICBjZW50ZXJNYXA6IHRydWUsXHJcbiAga2VlcEV4aXN0aW5nQ29uZmlnOiBmYWxzZVxyXG59O1xyXG5cclxuY29uc3QgaWRlbnRpdHkgPSBzdGF0ZSA9PiBzdGF0ZTtcclxuXHJcbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXHJcbi8vIEB0cy1pZ25vcmVcclxuZnVuY3Rpb24gbG9nKHRleHQpIHtcclxuICByZXR1cm4gdmFsdWUgPT4gQ29uc29sZS5sb2codGV4dCwgdmFsdWUpO1xyXG59XHJcbi8qIGVzbGludC1lbmFibGUgbm8tdW51c2VkLXZhcnMgKi9cclxuXHJcbmZ1bmN0aW9uIHBheWxvYWRfKHApIHtcclxuICByZXR1cm4ge3BheWxvYWQ6IHB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBhcHBseV8odXBkYXRlciwgcGF5bG9hZCkge1xyXG4gIHJldHVybiBzdGF0ZSA9PiB1cGRhdGVyKHN0YXRlLCBwYXlsb2FkKTtcclxufVxyXG5cclxuZnVuY3Rpb24gd2l0aF8oZm4pIHtcclxuICByZXR1cm4gc3RhdGUgPT4gZm4oc3RhdGUpKHN0YXRlKTtcclxufVxyXG5cclxuZnVuY3Rpb24gaWZfKHByZWQsIGZuKSB7XHJcbiAgcmV0dXJuIHByZWQgPyBmbiA6IGlkZW50aXR5O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjb21wb3NlXyhmbnMpIHtcclxuICByZXR1cm4gc3RhdGUgPT4gZm5zLnJlZHVjZSgoc3RhdGUyLCBmbikgPT4gZm4oc3RhdGUyKSwgc3RhdGUpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBtZXJnZV8ob2JqKSB7XHJcbiAgcmV0dXJuIHN0YXRlID0+ICh7Li4uc3RhdGUsIC4uLm9ian0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwaWNrXyhwcm9wKSB7XHJcbiAgcmV0dXJuIGZuID0+IHN0YXRlID0+ICh7Li4uc3RhdGUsIFtwcm9wXTogZm4oc3RhdGVbcHJvcF0pfSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDb21iaW5lIGRhdGEgYW5kIGZ1bGwgY29uZmlndXJhdGlvbiB1cGRhdGUgaW4gYSBzaW5nbGUgYWN0aW9uXHJcbiAqXHJcbiAqIEBtZW1iZXJvZiBjb21iaW5lZFVwZGF0ZXJzXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGF0ZSBrZXBsZXIuZ2wgaW5zdGFuY2Ugc3RhdGUsIGNvbnRhaW5pbmcgYWxsIHN1YnJlZHVjZXIgc3RhdGVcclxuICogQHBhcmFtIHtPYmplY3R9IGFjdGlvblxyXG4gKiBAcGFyYW0ge09iamVjdH0gYWN0aW9uLnBheWxvYWQgYHtkYXRhc2V0cywgb3B0aW9ucywgY29uZmlnfWBcclxuICogQHBhcmFtIGFjdGlvbi5wYXlsb2FkLmRhdGFzZXRzIC0gKioqcmVxdWlyZWQqKiBkYXRhc2V0cyBjYW4gYmUgYSBkYXRhc2V0IG9yIGFuIGFycmF5IG9mIGRhdGFzZXRzXHJcbiAqIEVhY2ggZGF0YXNldCBvYmplY3QgbmVlZHMgdG8gaGF2ZSBgaW5mb2AgYW5kIGBkYXRhYCBwcm9wZXJ0eS5cclxuICogQHBhcmFtIFthY3Rpb24ucGF5bG9hZC5vcHRpb25zXSBvcHRpb24gb2JqZWN0IGB7Y2VudGVyTWFwOiB0cnVlfWBcclxuICogQHBhcmFtIFthY3Rpb24ucGF5bG9hZC5jb25maWddIG1hcCBjb25maWdcclxuICogQHBhcmFtIFthY3Rpb24ucGF5bG9hZC5pbmZvXSBtYXAgaW5mbyBjb250YWlucyB0aXRsZSBhbmQgZGVzY3JpcHRpb25cclxuICogQHJldHVybnMgbmV4dFN0YXRlXHJcbiAqXHJcbiAqIEB0eXBlZGVmIHtPYmplY3R9IERhdGFzZXRcclxuICogQHByb3BlcnR5IGluZm8gLWluZm8gb2YgYSBkYXRhc2V0XHJcbiAqIEBwcm9wZXJ0eSBpbmZvLmlkIC0gaWQgb2YgdGhpcyBkYXRhc2V0LiBJZiBjb25maWcgaXMgZGVmaW5lZCwgYGlkYCBzaG91bGQgbWF0Y2hlcyB0aGUgYGRhdGFJZGAgaW4gY29uZmlnLlxyXG4gKiBAcHJvcGVydHkgaW5mby5sYWJlbCAtIEEgZGlzcGxheSBuYW1lIG9mIHRoaXMgZGF0YXNldFxyXG4gKiBAcHJvcGVydHkgZGF0YSAtICoqKnJlcXVpcmVkKiogVGhlIGRhdGEgb2JqZWN0LCBpbiBhIHRhYnVsYXIgZm9ybWF0IHdpdGggMiBwcm9wZXJ0aWVzIGBmaWVsZHNgIGFuZCBgcm93c2BcclxuICogQHByb3BlcnR5IGRhdGEuZmllbGRzIC0gKioqcmVxdWlyZWQqKiBBcnJheSBvZiBmaWVsZHMsXHJcbiAqIEBwcm9wZXJ0eSBkYXRhLmZpZWxkcy5uYW1lIC0gKioqcmVxdWlyZWQqKiBOYW1lIG9mIHRoZSBmaWVsZCxcclxuICogQHByb3BlcnR5IGRhdGEucm93cyAtICoqKnJlcXVpcmVkKiogQXJyYXkgb2Ygcm93cywgaW4gYSB0YWJ1bGFyIGZvcm1hdCB3aXRoIGBmaWVsZHNgIGFuZCBgcm93c2BcclxuICpcclxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vY29tYmluZWQtdXBkYXRlcnMnKS5hZGREYXRhVG9NYXBVcGRhdGVyfVxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgYWRkRGF0YVRvTWFwVXBkYXRlciA9IChzdGF0ZSwge3BheWxvYWR9KSA9PiB7XHJcbiAgY29uc3Qge2RhdGFzZXRzLCBjb25maWcsIGluZm99ID0gcGF5bG9hZDtcclxuXHJcbiAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgIC4uLmRlZmF1bHRBZGREYXRhVG9NYXBPcHRpb25zLFxyXG4gICAgLi4ucGF5bG9hZC5vcHRpb25zXHJcbiAgfTtcclxuXHJcbiAgbGV0IHBhcnNlZENvbmZpZyA9IGNvbmZpZztcclxuXHJcbiAgaWYgKGlzVmFsaWRDb25maWcoY29uZmlnKSkge1xyXG4gICAgLy8gaWYgcGFzc2VkIGluIHNhdmVkIGNvbmZpZ1xyXG4gICAgcGFyc2VkQ29uZmlnID0gS2VwbGVyR2xTY2hlbWEucGFyc2VTYXZlZENvbmZpZyhjb25maWcpO1xyXG4gIH1cclxuICBjb25zdCBvbGRMYXllcnMgPSBzdGF0ZS52aXNTdGF0ZS5sYXllcnM7XHJcbiAgY29uc3QgZmlsdGVyTmV3bHlBZGRlZExheWVycyA9IGxheWVycyA9PiBsYXllcnMuZmlsdGVyKG5sID0+ICFvbGRMYXllcnMuZmluZChvbCA9PiBvbCA9PT0gbmwpKTtcclxuXHJcbiAgcmV0dXJuIGNvbXBvc2VfKFtcclxuICAgIHBpY2tfKCd2aXNTdGF0ZScpKFxyXG4gICAgICBhcHBseV8odmlzU3RhdGVVcGRhdGVWaXNEYXRhVXBkYXRlciwge1xyXG4gICAgICAgIGRhdGFzZXRzLFxyXG4gICAgICAgIG9wdGlvbnMsXHJcbiAgICAgICAgY29uZmlnOiBwYXJzZWRDb25maWdcclxuICAgICAgfSlcclxuICAgICksXHJcblxyXG4gICAgaWZfKGluZm8sIHBpY2tfKCd2aXNTdGF0ZScpKGFwcGx5XyhzZXRNYXBJbmZvVXBkYXRlciwge2luZm99KSkpLFxyXG5cclxuICAgIHdpdGhfKCh7dmlzU3RhdGV9KSA9PlxyXG4gICAgICBwaWNrXygnbWFwU3RhdGUnKShcclxuICAgICAgICBhcHBseV8oXHJcbiAgICAgICAgICBzdGF0ZU1hcENvbmZpZ1VwZGF0ZXIsXHJcbiAgICAgICAgICBwYXlsb2FkXyh7XHJcbiAgICAgICAgICAgIGNvbmZpZzogcGFyc2VkQ29uZmlnLFxyXG4gICAgICAgICAgICBvcHRpb25zLFxyXG4gICAgICAgICAgICBib3VuZHM6IG9wdGlvbnMuY2VudGVyTWFwXHJcbiAgICAgICAgICAgICAgPyBmaW5kTWFwQm91bmRzKGZpbHRlck5ld2x5QWRkZWRMYXllcnModmlzU3RhdGUubGF5ZXJzKSlcclxuICAgICAgICAgICAgICA6IG51bGxcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgKVxyXG4gICAgICApXHJcbiAgICApLFxyXG5cclxuICAgIHBpY2tfKCdtYXBTdHlsZScpKGFwcGx5XyhzdHlsZU1hcENvbmZpZ1VwZGF0ZXIsIHBheWxvYWRfKHtjb25maWc6IHBhcnNlZENvbmZpZywgb3B0aW9uc30pKSksXHJcblxyXG4gICAgcGlja18oJ3VpU3RhdGUnKShhcHBseV8obG9hZEZpbGVzU3VjY2Vzc1VwZGF0ZXIpKSxcclxuXHJcbiAgICBwaWNrXygndWlTdGF0ZScpKGFwcGx5Xyh0b2dnbGVNb2RhbFVwZGF0ZXIsIHBheWxvYWRfKG51bGwpKSksXHJcblxyXG4gICAgcGlja18oJ3VpU3RhdGUnKShtZXJnZV8ob3B0aW9ucy5oYXNPd25Qcm9wZXJ0eSgncmVhZE9ubHknKSA/IHtyZWFkT25seTogb3B0aW9ucy5yZWFkT25seX0gOiB7fSkpXHJcbiAgXSkoc3RhdGUpO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL2NvbWJpbmVkLXVwZGF0ZXJzJykubG9hZEZpbGVTdWNjZXNzVXBkYXRlcn1cclxuICovXHJcbmV4cG9ydCBjb25zdCBsb2FkRmlsZVN1Y2Nlc3NVcGRhdGVyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAvLyBzdGlsbCBtb3JlIHRvIGxvYWRcclxuICBjb25zdCBwYXlsb2FkcyA9IGZpbGVzVG9EYXRhUGF5bG9hZChhY3Rpb24ucmVzdWx0KTtcclxuICBjb25zdCBuZXh0U3RhdGUgPSBjb21wb3NlXyhbXHJcbiAgICBwaWNrXygndmlzU3RhdGUnKShcclxuICAgICAgbWVyZ2VfKHtcclxuICAgICAgICBmaWxlTG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgZmlsZUxvYWRpbmdQcm9ncmVzczogMTAwXHJcbiAgICAgIH0pXHJcbiAgICApXHJcbiAgXSkoc3RhdGUpO1xyXG5cclxuICAvLyBtYWtlIG11bHRpcGxlIGFkZCBkYXRhIHRvIG1hcCBjYWxsc1xyXG4gIHJldHVybiBjb21wb3NlXyhwYXlsb2Fkcy5tYXAocCA9PiBhcHBseV8oYWRkRGF0YVRvTWFwVXBkYXRlciwgcGF5bG9hZF8ocCkpKSkobmV4dFN0YXRlKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBhZGREYXRhVG9NYXBDb21wb3NlZCA9IGFkZERhdGFUb01hcFVwZGF0ZXI7XHJcbiJdfQ==