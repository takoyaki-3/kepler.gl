"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMapDimForSplitMap = getMapDimForSplitMap;
exports.toggleSplitMapUpdater = exports.receiveMapConfigUpdater = exports.resetMapConfigUpdater = exports.togglePerspectiveUpdater = exports.fitBoundsUpdater = exports.updateMapUpdater = exports.INITIAL_MAP_STATE = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _geoViewport = _interopRequireDefault(require("@mapbox/geo-viewport"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/** @typedef {import('./map-state-updaters').MapState} MapState */

/**
 * Updaters for `mapState` reducer. Can be used in your root reducer to directly modify kepler.gl's state.
 * Read more about [Using updaters](../advanced-usage/using-updaters.md)
 * @public
 * @example
 *
 * import keplerGlReducer, {mapStateUpdaters} from 'kepler.gl/reducers';
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
 *             mapState: mapStateUpdaters.fitBoundsUpdater(
 *               mapState, {payload: [127.34, 31.09, 127.56, 31.59]]}
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
// @ts-ignore
var mapStateUpdaters = null;
/* eslint-enable no-unused-vars */

/**
 * Default initial `mapState`
 * @memberof mapStateUpdaters
 * @constant
 * @property pitch Default: `0`
 * @property bearing Default: `0`
 * @property latitude Default: `37.75043`
 * @property longitude Default: `-122.34679`
 * @property zoom Default: `9`
 * @property dragRotate Default: `false`
 * @property width Default: `800`
 * @property height Default: `800`
 * @property isSplit Default: `false`
 * @type {MapState}
 * @public
 */

var INITIAL_MAP_STATE = {
  pitch: 0,
  bearing: 0,
  latitude: 37.75043,
  longitude: -122.34679,
  zoom: 9,
  dragRotate: false,
  width: 800,
  height: 800,
  isSplit: false
};
/* Updaters */

/**
 * Update map viewport
 * @memberof mapStateUpdaters
 * @type {typeof import('./map-state-updaters').updateMapUpdater}
 * @public
 */

exports.INITIAL_MAP_STATE = INITIAL_MAP_STATE;

var updateMapUpdater = function updateMapUpdater(state, action) {
  return _objectSpread(_objectSpread({}, state), action.payload || {});
};
/**
 * Fit map viewport to bounds
 * @memberof mapStateUpdaters
 * @type {typeof import('./map-state-updaters').fitBoundsUpdater}
 * @public
 */


exports.updateMapUpdater = updateMapUpdater;

var fitBoundsUpdater = function fitBoundsUpdater(state, action) {
  var bounds = action.payload;

  var _geoViewport$viewport = _geoViewport["default"].viewport(bounds, [state.width, state.height]),
      center = _geoViewport$viewport.center,
      zoom = _geoViewport$viewport.zoom;

  return _objectSpread(_objectSpread({}, state), {}, {
    latitude: center[1],
    longitude: center[0],
    zoom: zoom
  });
};
/**
 * Toggle between 3d and 2d map.
 * @memberof mapStateUpdaters
 * @type {typeof import('./map-state-updaters').togglePerspectiveUpdater}
 * @public
 */


exports.fitBoundsUpdater = fitBoundsUpdater;

var togglePerspectiveUpdater = function togglePerspectiveUpdater(state) {
  return _objectSpread(_objectSpread(_objectSpread({}, state), {
    pitch: state.dragRotate ? 0 : 50,
    bearing: state.dragRotate ? 0 : 24
  }), {}, {
    dragRotate: !state.dragRotate
  });
};
/**
 * reset mapState to initial State
 * @memberof mapStateUpdaters
 * @type {typeof import('./map-state-updaters').resetMapConfigUpdater}
 * @public
 */


exports.togglePerspectiveUpdater = togglePerspectiveUpdater;

var resetMapConfigUpdater = function resetMapConfigUpdater(state) {
  return _objectSpread(_objectSpread(_objectSpread({}, INITIAL_MAP_STATE), state.initialState), {}, {
    initialState: state.initialState
  });
}; // consider case where you have a split map and user wants to reset

/**
 * Update `mapState` to propagate a new config
 * @memberof mapStateUpdaters
 * @type {typeof import('./map-state-updaters').receiveMapConfigUpdater}
 * @public
 */


exports.resetMapConfigUpdater = resetMapConfigUpdater;

var receiveMapConfigUpdater = function receiveMapConfigUpdater(state, _ref) {
  var _ref$payload = _ref.payload,
      _ref$payload$config = _ref$payload.config,
      config = _ref$payload$config === void 0 ? {} : _ref$payload$config,
      _ref$payload$options = _ref$payload.options,
      options = _ref$payload$options === void 0 ? {} : _ref$payload$options,
      _ref$payload$bounds = _ref$payload.bounds,
      bounds = _ref$payload$bounds === void 0 ? null : _ref$payload$bounds;

  var _ref2 = config || {},
      mapState = _ref2.mapState; // merged received mapstate with previous state


  var mergedState = _objectSpread(_objectSpread({}, state), mapState); // if center map
  // center map will override mapState config


  if (options.centerMap && bounds) {
    mergedState = fitBoundsUpdater(mergedState, {
      payload: bounds
    });
  }

  return _objectSpread(_objectSpread({}, mergedState), getMapDimForSplitMap(mergedState.isSplit, state));
};
/**
 * Toggle between one or split maps
 * @memberof mapStateUpdaters
 * @type {typeof import('./map-state-updaters').toggleSplitMapUpdater}
 * @public
 */


exports.receiveMapConfigUpdater = receiveMapConfigUpdater;

var toggleSplitMapUpdater = function toggleSplitMapUpdater(state) {
  return _objectSpread(_objectSpread({}, state), {}, {
    isSplit: !state.isSplit
  }, getMapDimForSplitMap(!state.isSplit, state));
}; // Helpers


exports.toggleSplitMapUpdater = toggleSplitMapUpdater;

function getMapDimForSplitMap(isSplit, state) {
  // cases:
  // 1. state split: true - isSplit: true
  // do nothing
  // 2. state split: false - isSplit: false
  // do nothing
  if (state.isSplit === isSplit) {
    return {};
  }

  var width = state.isSplit && !isSplit ? // 3. state split: true - isSplit: false
  // double width
  state.width * 2 : // 4. state split: false - isSplit: true
  // split width
  state.width / 2;
  return {
    width: width
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWR1Y2Vycy9tYXAtc3RhdGUtdXBkYXRlcnMuanMiXSwibmFtZXMiOlsibWFwU3RhdGVVcGRhdGVycyIsIklOSVRJQUxfTUFQX1NUQVRFIiwicGl0Y2giLCJiZWFyaW5nIiwibGF0aXR1ZGUiLCJsb25naXR1ZGUiLCJ6b29tIiwiZHJhZ1JvdGF0ZSIsIndpZHRoIiwiaGVpZ2h0IiwiaXNTcGxpdCIsInVwZGF0ZU1hcFVwZGF0ZXIiLCJzdGF0ZSIsImFjdGlvbiIsInBheWxvYWQiLCJmaXRCb3VuZHNVcGRhdGVyIiwiYm91bmRzIiwiZ2VvVmlld3BvcnQiLCJ2aWV3cG9ydCIsImNlbnRlciIsInRvZ2dsZVBlcnNwZWN0aXZlVXBkYXRlciIsInJlc2V0TWFwQ29uZmlnVXBkYXRlciIsImluaXRpYWxTdGF0ZSIsInJlY2VpdmVNYXBDb25maWdVcGRhdGVyIiwiY29uZmlnIiwib3B0aW9ucyIsIm1hcFN0YXRlIiwibWVyZ2VkU3RhdGUiLCJjZW50ZXJNYXAiLCJnZXRNYXBEaW1Gb3JTcGxpdE1hcCIsInRvZ2dsZVNwbGl0TWFwVXBkYXRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBb0JBOzs7Ozs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbUNBO0FBQ0E7QUFDQSxJQUFNQSxnQkFBZ0IsR0FBRyxJQUF6QjtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7OztBQWdCTyxJQUFNQyxpQkFBaUIsR0FBRztBQUMvQkMsRUFBQUEsS0FBSyxFQUFFLENBRHdCO0FBRS9CQyxFQUFBQSxPQUFPLEVBQUUsQ0FGc0I7QUFHL0JDLEVBQUFBLFFBQVEsRUFBRSxRQUhxQjtBQUkvQkMsRUFBQUEsU0FBUyxFQUFFLENBQUMsU0FKbUI7QUFLL0JDLEVBQUFBLElBQUksRUFBRSxDQUx5QjtBQU0vQkMsRUFBQUEsVUFBVSxFQUFFLEtBTm1CO0FBTy9CQyxFQUFBQSxLQUFLLEVBQUUsR0FQd0I7QUFRL0JDLEVBQUFB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QUFDakIsS0FBSyxDQUFDRixPQUFSLEVBQWlCRSxLQUFqQixDQUhpQjtBQUFBLENBQW5DLEMsQ0FNUDs7Ozs7QUFDTyxTQUFTaUIsb0JBQVQsQ0FBOEJuQixPQUE5QixFQUF1Q0UsS0FBdkMsRUFBOEM7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUlBLEtBQUssQ0FBQ0YsT0FBTixLQUFrQkEsT0FBdEIsRUFBK0I7QUFDN0IsV0FBTyxFQUFQO0FBQ0Q7O0FBRUQsTUFBTUYsS0FBSyxHQUNUSSxLQUFLLENBQUNGLE9BQU4sSUFBaUIsQ0FBQ0EsT0FBbEIsR0FDSTtBQUNBO0FBQ0FFLEVBQUFBLEtBQUssQ0FBQ0osS0FBTixHQUFjLENBSGxCLEdBSUk7QUFDQTtBQUNBSSxFQUFBQSxLQUFLLENBQUNKLEtBQU4sR0FBYyxDQVBwQjtBQVNBLFNBQU87QUFDTEEsSUFBQUEsS0FBSyxFQUFMQTtBQURLLEdBQVA7QUFHRCIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMCBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBnZW9WaWV3cG9ydCBmcm9tICdAbWFwYm94L2dlby12aWV3cG9ydCc7XHJcblxyXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi9tYXAtc3RhdGUtdXBkYXRlcnMnKS5NYXBTdGF0ZX0gTWFwU3RhdGUgKi9cclxuXHJcbi8qKlxyXG4gKiBVcGRhdGVycyBmb3IgYG1hcFN0YXRlYCByZWR1Y2VyLiBDYW4gYmUgdXNlZCBpbiB5b3VyIHJvb3QgcmVkdWNlciB0byBkaXJlY3RseSBtb2RpZnkga2VwbGVyLmdsJ3Mgc3RhdGUuXHJcbiAqIFJlYWQgbW9yZSBhYm91dCBbVXNpbmcgdXBkYXRlcnNdKC4uL2FkdmFuY2VkLXVzYWdlL3VzaW5nLXVwZGF0ZXJzLm1kKVxyXG4gKiBAcHVibGljXHJcbiAqIEBleGFtcGxlXHJcbiAqXHJcbiAqIGltcG9ydCBrZXBsZXJHbFJlZHVjZXIsIHttYXBTdGF0ZVVwZGF0ZXJzfSBmcm9tICdrZXBsZXIuZ2wvcmVkdWNlcnMnO1xyXG4gKiAvLyBSb290IFJlZHVjZXJcclxuICogY29uc3QgcmVkdWNlcnMgPSBjb21iaW5lUmVkdWNlcnMoe1xyXG4gKiAga2VwbGVyR2w6IGtlcGxlckdsUmVkdWNlcixcclxuICogIGFwcDogYXBwUmVkdWNlclxyXG4gKiB9KTtcclxuICpcclxuICogY29uc3QgY29tcG9zZWRSZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICogIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICogICAgLy8gY2xpY2sgYnV0dG9uIHRvIGNsb3NlIHNpZGUgcGFuZWxcclxuICogICAgY2FzZSAnQ0xJQ0tfQlVUVE9OJzpcclxuICogICAgICByZXR1cm4ge1xyXG4gKiAgICAgICAgLi4uc3RhdGUsXHJcbiAqICAgICAgICBrZXBsZXJHbDoge1xyXG4gKiAgICAgICAgICAuLi5zdGF0ZS5rZXBsZXJHbCxcclxuICogICAgICAgICAgZm9vOiB7XHJcbiAqICAgICAgICAgICAgIC4uLnN0YXRlLmtlcGxlckdsLmZvbyxcclxuICogICAgICAgICAgICAgbWFwU3RhdGU6IG1hcFN0YXRlVXBkYXRlcnMuZml0Qm91bmRzVXBkYXRlcihcclxuICogICAgICAgICAgICAgICBtYXBTdGF0ZSwge3BheWxvYWQ6IFsxMjcuMzQsIDMxLjA5LCAxMjcuNTYsIDMxLjU5XV19XHJcbiAqICAgICAgICAgICAgIClcclxuICogICAgICAgICAgfVxyXG4gKiAgICAgICAgfVxyXG4gKiAgICAgIH07XHJcbiAqICB9XHJcbiAqICByZXR1cm4gcmVkdWNlcnMoc3RhdGUsIGFjdGlvbik7XHJcbiAqIH07XHJcbiAqXHJcbiAqIGV4cG9ydCBkZWZhdWx0IGNvbXBvc2VkUmVkdWNlcjtcclxuICovXHJcbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXHJcbi8vIEB0cy1pZ25vcmVcclxuY29uc3QgbWFwU3RhdGVVcGRhdGVycyA9IG51bGw7XHJcbi8qIGVzbGludC1lbmFibGUgbm8tdW51c2VkLXZhcnMgKi9cclxuXHJcbi8qKlxyXG4gKiBEZWZhdWx0IGluaXRpYWwgYG1hcFN0YXRlYFxyXG4gKiBAbWVtYmVyb2YgbWFwU3RhdGVVcGRhdGVyc1xyXG4gKiBAY29uc3RhbnRcclxuICogQHByb3BlcnR5IHBpdGNoIERlZmF1bHQ6IGAwYFxyXG4gKiBAcHJvcGVydHkgYmVhcmluZyBEZWZhdWx0OiBgMGBcclxuICogQHByb3BlcnR5IGxhdGl0dWRlIERlZmF1bHQ6IGAzNy43NTA0M2BcclxuICogQHByb3BlcnR5IGxvbmdpdHVkZSBEZWZhdWx0OiBgLTEyMi4zNDY3OWBcclxuICogQHByb3BlcnR5IHpvb20gRGVmYXVsdDogYDlgXHJcbiAqIEBwcm9wZXJ0eSBkcmFnUm90YXRlIERlZmF1bHQ6IGBmYWxzZWBcclxuICogQHByb3BlcnR5IHdpZHRoIERlZmF1bHQ6IGA4MDBgXHJcbiAqIEBwcm9wZXJ0eSBoZWlnaHQgRGVmYXVsdDogYDgwMGBcclxuICogQHByb3BlcnR5IGlzU3BsaXQgRGVmYXVsdDogYGZhbHNlYFxyXG4gKiBAdHlwZSB7TWFwU3RhdGV9XHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmV4cG9ydCBjb25zdCBJTklUSUFMX01BUF9TVEFURSA9IHtcclxuICBwaXRjaDogMCxcclxuICBiZWFyaW5nOiAwLFxyXG4gIGxhdGl0dWRlOiAzNy43NTA0MyxcclxuICBsb25naXR1ZGU6IC0xMjIuMzQ2NzksXHJcbiAgem9vbTogOSxcclxuICBkcmFnUm90YXRlOiBmYWxzZSxcclxuICB3aWR0aDogODAwLFxyXG4gIGhlaWdodDogODAwLFxyXG4gIGlzU3BsaXQ6IGZhbHNlXHJcbn07XHJcblxyXG4vKiBVcGRhdGVycyAqL1xyXG4vKipcclxuICogVXBkYXRlIG1hcCB2aWV3cG9ydFxyXG4gKiBAbWVtYmVyb2YgbWFwU3RhdGVVcGRhdGVyc1xyXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi9tYXAtc3RhdGUtdXBkYXRlcnMnKS51cGRhdGVNYXBVcGRhdGVyfVxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgdXBkYXRlTWFwVXBkYXRlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiAoe1xyXG4gIC4uLnN0YXRlLFxyXG4gIC4uLihhY3Rpb24ucGF5bG9hZCB8fCB7fSlcclxufSk7XHJcblxyXG4vKipcclxuICogRml0IG1hcCB2aWV3cG9ydCB0byBib3VuZHNcclxuICogQG1lbWJlcm9mIG1hcFN0YXRlVXBkYXRlcnNcclxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vbWFwLXN0YXRlLXVwZGF0ZXJzJykuZml0Qm91bmRzVXBkYXRlcn1cclxuICogQHB1YmxpY1xyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGZpdEJvdW5kc1VwZGF0ZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIGNvbnN0IGJvdW5kcyA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gIGNvbnN0IHtjZW50ZXIsIHpvb219ID0gZ2VvVmlld3BvcnQudmlld3BvcnQoYm91bmRzLCBbc3RhdGUud2lkdGgsIHN0YXRlLmhlaWdodF0pO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgLi4uc3RhdGUsXHJcbiAgICBsYXRpdHVkZTogY2VudGVyWzFdLFxyXG4gICAgbG9uZ2l0dWRlOiBjZW50ZXJbMF0sXHJcbiAgICB6b29tXHJcbiAgfTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBUb2dnbGUgYmV0d2VlbiAzZCBhbmQgMmQgbWFwLlxyXG4gKiBAbWVtYmVyb2YgbWFwU3RhdGVVcGRhdGVyc1xyXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi9tYXAtc3RhdGUtdXBkYXRlcnMnKS50b2dnbGVQZXJzcGVjdGl2ZVVwZGF0ZXJ9XHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmV4cG9ydCBjb25zdCB0b2dnbGVQZXJzcGVjdGl2ZVVwZGF0ZXIgPSBzdGF0ZSA9PiAoe1xyXG4gIC4uLnN0YXRlLFxyXG4gIC4uLntcclxuICAgIHBpdGNoOiBzdGF0ZS5kcmFnUm90YXRlID8gMCA6IDUwLFxyXG4gICAgYmVhcmluZzogc3RhdGUuZHJhZ1JvdGF0ZSA/IDAgOiAyNFxyXG4gIH0sXHJcbiAgZHJhZ1JvdGF0ZTogIXN0YXRlLmRyYWdSb3RhdGVcclxufSk7XHJcblxyXG4vKipcclxuICogcmVzZXQgbWFwU3RhdGUgdG8gaW5pdGlhbCBTdGF0ZVxyXG4gKiBAbWVtYmVyb2YgbWFwU3RhdGVVcGRhdGVyc1xyXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi9tYXAtc3RhdGUtdXBkYXRlcnMnKS5yZXNldE1hcENvbmZpZ1VwZGF0ZXJ9XHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmV4cG9ydCBjb25zdCByZXNldE1hcENvbmZpZ1VwZGF0ZXIgPSBzdGF0ZSA9PiAoe1xyXG4gIC4uLklOSVRJQUxfTUFQX1NUQVRFLFxyXG4gIC4uLnN0YXRlLmluaXRpYWxTdGF0ZSxcclxuICBpbml0aWFsU3RhdGU6IHN0YXRlLmluaXRpYWxTdGF0ZVxyXG59KTtcclxuXHJcbi8vIGNvbnNpZGVyIGNhc2Ugd2hlcmUgeW91IGhhdmUgYSBzcGxpdCBtYXAgYW5kIHVzZXIgd2FudHMgdG8gcmVzZXRcclxuLyoqXHJcbiAqIFVwZGF0ZSBgbWFwU3RhdGVgIHRvIHByb3BhZ2F0ZSBhIG5ldyBjb25maWdcclxuICogQG1lbWJlcm9mIG1hcFN0YXRlVXBkYXRlcnNcclxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vbWFwLXN0YXRlLXVwZGF0ZXJzJykucmVjZWl2ZU1hcENvbmZpZ1VwZGF0ZXJ9XHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmV4cG9ydCBjb25zdCByZWNlaXZlTWFwQ29uZmlnVXBkYXRlciA9IChcclxuICBzdGF0ZSxcclxuICB7cGF5bG9hZDoge2NvbmZpZyA9IHt9LCBvcHRpb25zID0ge30sIGJvdW5kcyA9IG51bGx9fVxyXG4pID0+IHtcclxuICBjb25zdCB7bWFwU3RhdGV9ID0gY29uZmlnIHx8IHt9O1xyXG5cclxuICAvLyBtZXJnZWQgcmVjZWl2ZWQgbWFwc3RhdGUgd2l0aCBwcmV2aW91cyBzdGF0ZVxyXG4gIGxldCBtZXJnZWRTdGF0ZSA9IHsuLi5zdGF0ZSwgLi4ubWFwU3RhdGV9O1xyXG5cclxuICAvLyBpZiBjZW50ZXIgbWFwXHJcbiAgLy8gY2VudGVyIG1hcCB3aWxsIG92ZXJyaWRlIG1hcFN0YXRlIGNvbmZpZ1xyXG4gIGlmIChvcHRpb25zLmNlbnRlck1hcCAmJiBib3VuZHMpIHtcclxuICAgIG1lcmdlZFN0YXRlID0gZml0Qm91bmRzVXBkYXRlcihtZXJnZWRTdGF0ZSwge1xyXG4gICAgICBwYXlsb2FkOiBib3VuZHNcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIC4uLm1lcmdlZFN0YXRlLFxyXG4gICAgLy8gdXBkYXRlIHdpZHRoIGlmIGBpc1NwbGl0YCBoYXMgY2hhbmdlZFxyXG4gICAgLi4uZ2V0TWFwRGltRm9yU3BsaXRNYXAobWVyZ2VkU3RhdGUuaXNTcGxpdCwgc3RhdGUpXHJcbiAgfTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBUb2dnbGUgYmV0d2VlbiBvbmUgb3Igc3BsaXQgbWFwc1xyXG4gKiBAbWVtYmVyb2YgbWFwU3RhdGVVcGRhdGVyc1xyXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi9tYXAtc3RhdGUtdXBkYXRlcnMnKS50b2dnbGVTcGxpdE1hcFVwZGF0ZXJ9XHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmV4cG9ydCBjb25zdCB0b2dnbGVTcGxpdE1hcFVwZGF0ZXIgPSBzdGF0ZSA9PiAoe1xyXG4gIC4uLnN0YXRlLFxyXG4gIGlzU3BsaXQ6ICFzdGF0ZS5pc1NwbGl0LFxyXG4gIC4uLmdldE1hcERpbUZvclNwbGl0TWFwKCFzdGF0ZS5pc1NwbGl0LCBzdGF0ZSlcclxufSk7XHJcblxyXG4vLyBIZWxwZXJzXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRNYXBEaW1Gb3JTcGxpdE1hcChpc1NwbGl0LCBzdGF0ZSkge1xyXG4gIC8vIGNhc2VzOlxyXG4gIC8vIDEuIHN0YXRlIHNwbGl0OiB0cnVlIC0gaXNTcGxpdDogdHJ1ZVxyXG4gIC8vIGRvIG5vdGhpbmdcclxuICAvLyAyLiBzdGF0ZSBzcGxpdDogZmFsc2UgLSBpc1NwbGl0OiBmYWxzZVxyXG4gIC8vIGRvIG5vdGhpbmdcclxuICBpZiAoc3RhdGUuaXNTcGxpdCA9PT0gaXNTcGxpdCkge1xyXG4gICAgcmV0dXJuIHt9O1xyXG4gIH1cclxuXHJcbiAgY29uc3Qgd2lkdGggPVxyXG4gICAgc3RhdGUuaXNTcGxpdCAmJiAhaXNTcGxpdFxyXG4gICAgICA/IC8vIDMuIHN0YXRlIHNwbGl0OiB0cnVlIC0gaXNTcGxpdDogZmFsc2VcclxuICAgICAgICAvLyBkb3VibGUgd2lkdGhcclxuICAgICAgICBzdGF0ZS53aWR0aCAqIDJcclxuICAgICAgOiAvLyA0LiBzdGF0ZSBzcGxpdDogZmFsc2UgLSBpc1NwbGl0OiB0cnVlXHJcbiAgICAgICAgLy8gc3BsaXQgd2lkdGhcclxuICAgICAgICBzdGF0ZS53aWR0aCAvIDI7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICB3aWR0aFxyXG4gIH07XHJcbn1cclxuIl19