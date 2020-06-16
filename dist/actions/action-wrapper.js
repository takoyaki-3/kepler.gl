"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._updateProperty = exports.forwardTo = exports._actionFor = exports.unwrap = exports.isForwardAction = exports.wrapTo = exports.getActionForwardAddress = exports.ADDRESS_PREFIX = exports.FORWARD = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _lodash = _interopRequireDefault(require("lodash.curry"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// Copyright (c) 2020 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.
var FORWARD = '@redux-forward/FORWARD';
exports.FORWARD = FORWARD;
var ADDRESS_PREFIX = '@@KG_';
exports.ADDRESS_PREFIX = ADDRESS_PREFIX;

var getActionForwardAddress = function getActionForwardAddress(id) {
  return "".concat(ADDRESS_PREFIX).concat(id.toUpperCase());
};
/**
 * Wrap an action into a forward action that only modify the state of a specific
 * kepler.gl instance. kepler.gl reducer will look for signatures in the action to
 * determine whether it needs to be forwarded to a specific instance reducer.
 *
 * wrapTo can be curried. You can create a curried action wrapper by only supply the `id` argument
 *
 * A forward action looks like this
 * ```js
 *  {
 *    type: "@@kepler.gl/LAYER_CONFIG_CHANGE",
 *    payload: {
 *      type: '@@kepler.gl/LAYER_CONFIG_CHANGE',
 *      payload: {},
 *      meta: {
 *       // id of instance
 *        _id_: id
 *       // other meta
 *      }
 *    },
 *    meta: {
 *      _forward_: '@redux-forward/FORWARD',
 *      _addr_: '@@KG_id'
 *    }
 *  };
 * ```
 *
 * @memberof forwardActions
 * @param {string} id - The id to forward to
 * @param {Object} action - the action object {type: string, payload: *}
 * @returns {{type: string, payload: {type: string, payload: *, meta: {_id_: string}, meta: {_forward_: string, _addr_: string}}}}
 * @public
 * @example
 *
 * import {wrapTo, togglePerspective} from 'kepler.gl/actions';
 *
 * // This action will only dispatch to the KeplerGl instance with `id: map_1`
 * this.props.dispatch(wrapTo('map_1', togglePerspective()));
 *
 * // You can also create a curried action for each instance
 * const wrapToMap1 = wrapTo('map_1');
 * this.props.dispatch(wrapToMap1(togglePerspective()));
 */


exports.getActionForwardAddress = getActionForwardAddress;
var wrapTo = (0, _lodash["default"])(function (id, action) {
  return {
    // keep original action.type
    type: action.type,
    // actual action
    payload: _objectSpread(_objectSpread({}, action), {}, {
      meta: _objectSpread(_objectSpread({}, action.meta), {}, {
        _id_: id
      })
    }),
    // add forward signature to meta
    meta: _objectSpread(_objectSpread({}, action.meta || {}), {}, {
      _forward_: FORWARD,
      _addr_: getActionForwardAddress(id)
    })
  };
});
/**
 * Whether an action is a forward action
 * @memberof forwardActions
 * @param {Object} action - the action object
 * @returns {boolean} boolean - whether the action is a forward action
 * @public
 */

exports.wrapTo = wrapTo;

var isForwardAction = function isForwardAction(action) {
  return Boolean(action && action.meta && action.meta._forward_ === FORWARD);
};
/**
 * Unwrap an action
 * @memberof forwardActions
 * @param {Object} action - the action object
 * @returns {Object} - unwrapped action
 * @public
 */


exports.isForwardAction = isForwardAction;

var unwrap = function unwrap(action) {
  return isForwardAction(action) ? unwrap(action.payload) : action;
};
/**
 * Given an id, returns the action for that id.
 * If the action is not a forward action, return the action
 * @memberof forwardActions
 * @param {String} id
 * @param {Object} action
 * @private
 */


exports.unwrap = unwrap;

var _actionFor = function _actionFor(id, action) {
  return isForwardAction(action) ? action.meta._addr_ === getActionForwardAddress(id) ? action.payload : {} : action;
};
/**
 * Returns an action dispatcher that wraps and forwards the actions to a specific instance
 * @memberof forwardActions
 * @param {string} id - instance id
 * @param {Function} dispatch - action dispatcher
 * @public
 * @example
 *
 * // action and forward dispatcher
 * import {toggleSplitMap, forwardTo} from 'kepler.gl/actions';
 * import {connect} from 'react-redux';
 *
 * const MapContainer = props => (
 *  <div>
 *   <button onClick={() => props.keplerGlDispatch(toggleSplitMap())}/>
 *  </div>
 * )
 *
 * const mapDispatchToProps = (dispatch, props) => ({
 *  dispatch,
 *  keplerGlDispatch: forwardTo(‘foo’, dispatch)
 * });
 *
 * export default connect(
 *  state => state,
 *  mapDispatchToProps
 * )(MapContainer);
 */


exports._actionFor = _actionFor;

var forwardTo = function forwardTo(id, dispatch) {
  return function (action) {
    return dispatch(wrapTo(id, action));
  };
};
/**
 * Update the state of a kepler.gl instance
 * @memberof forwardActions
 * @param {Object} state
 * @param {string} id
 * @param {Object} nextState
 * @private
 */


exports.forwardTo = forwardTo;

var _updateProperty = function _updateProperty(state, id, nextState) {
  return state[id] === nextState ? state : _objectSpread(_objectSpread({}, state), {}, (0, _defineProperty2["default"])({}, id, nextState));
};
/**
 * This declaration is needed to group actions in docs
 */

/**
 * A set of helpers to forward dispatch actions to a specific instance reducer
 * @public
 */

/* eslint-disable no-unused-vars */
// @ts-ignore


exports._updateProperty = _updateProperty;
var forwardActions = null;
/* eslint-enable no-unused-vars */
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb25zL2FjdGlvbi13cmFwcGVyLmpzIl0sIm5hbWVzIjpbIkZPUldBUkQiLCJBRERSRVNTX1BSRUZJWCIsImdldEFjdGlvbkZvcndhcmRBZGRyZXNzIiwiaWQiLCJ0b1VwcGVyQ2FzZSIsIndyYXBUbyIsImFjdGlvbiIsInR5cGUiLCJwYXlsb2FkIiwibWV0YSIsIl9pZF8iLCJfZm9yd2FyZF8iLCJfYWRkcl8iLCJpc0ZvcndhcmRBY3Rpb24iLCJCb29sZWFuIiwidW53cmFwIiwiX2FjdGlvbkZvciIsImZvcndhcmRUbyIsImRpc3BhdGNoIiwiX3VwZGF0ZVByb3BlcnR5Iiwic3RhdGUiLCJuZXh0U3RhdGUiLCJmb3J3YXJkQWN0aW9ucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUF1QkE7Ozs7OztBQXZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLElBQU1BLE9BQU8sR0FBRyx3QkFBaEI7O0FBQ0EsSUFBTUMsY0FBYyxHQUFHLE9BQXZCOzs7QUFJQSxJQUFNQyx1QkFBdUIsR0FBRyxTQUExQkEsdUJBQTBCLENBQUFDLEVBQUU7QUFBQSxtQkFBT0YsY0FBUCxTQUF3QkUsRUFBRSxDQUFDQyxXQUFILEVBQXhCO0FBQUEsQ0FBbEM7QUFFUDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTJDTyxJQUFNQyxNQUFNLEdBQUcsd0JBQU0sVUFBQ0YsRUFBRCxFQUFLRyxNQUFMO0FBQUEsU0FBaUI7QUFDM0M7QUFDQUMsSUFBQUEsSUFBSSxFQUFFRCxNQUFNLENBQUNDLElBRjhCO0FBSTNDO0FBQ0FDLElBQUFBLE9BQU8sa0NBQ0ZGLE1BREU7QUFFTEcsTUFBQUEsSUFBSSxrQ0FDQ0gsTUFBTSxDQUFDRyxJQURSO0FBRUZDLFFBQUFBLElBQUksRUFBRVA7QUFGSjtBQUZDLE1BTG9DO0FBYTNDO0FBQ0FNLElBQUFBLElBQUksa0NBQ0VILE1BQU0sQ0FBQ0csSUFBUCxJQUFlLEVBRGpCO0FBRUZFLE1BQUFBLFNBQVMsRUFBRVgsT0FGVDtBQUdGWSxNQUFBQSxNQUFNLEVBQUVWLHVCQUF1QixDQUFDQyxFQUFEO0FBSDdCO0FBZHVDLEdBQWpCO0FBQUEsQ0FBTixDQUFmO0FBcUJQOzs7Ozs7Ozs7O0FBT08sSUFBTVUsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFBUCxNQUFNLEVBQUk7QUFDdkMsU0FBT1EsT0FBTyxDQUFDUixNQUFNLElBQUlBLE1BQU0sQ0FBQ0csSUFBakIsSUFBeUJILE1BQU0sQ0FBQ0csSUFBUCxDQUFZRSxTQUFaLEtBQTBCWCxPQUFwRCxDQUFkO0FBQ0QsQ0FGTTtBQUlQOzs7Ozs7Ozs7OztBQU9PLElBQU1lLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUFULE1BQU07QUFBQSxTQUFLTyxlQUFlLENBQUNQLE1BQUQsQ0FBZixHQUEwQlMsTUFBTSxDQUFDVCxNQUFNLENBQUNFLE9BQVIsQ0FBaEMsR0FBbURGLE1BQXhEO0FBQUEsQ0FBckI7QUFFUDs7Ozs7Ozs7Ozs7O0FBUU8sSUFBTVUsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ2IsRUFBRCxFQUFLRyxNQUFMO0FBQUEsU0FDeEJPLGVBQWUsQ0FBQ1AsTUFBRCxDQUFmLEdBQ0lBLE1BQU0sQ0FBQ0csSUFBUCxDQUFZRyxNQUFaLEtBQXVCVix1QkFBdUIsQ0FBQ0MsRUFBRCxDQUE5QyxHQUNFRyxNQUFNLENBQUNFLE9BRFQsR0FFRSxFQUhOLEdBSUlGLE1BTG9CO0FBQUEsQ0FBbkI7QUFPUDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE0Qk8sSUFBTVcsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ2QsRUFBRCxFQUFLZSxRQUFMO0FBQUEsU0FBa0IsVUFBQVosTUFBTTtBQUFBLFdBQUlZLFFBQVEsQ0FBQ2IsTUFBTSxDQUFDRixFQUFELEVBQUtHLE1BQUwsQ0FBUCxDQUFaO0FBQUEsR0FBeEI7QUFBQSxDQUFsQjtBQUVQOzs7Ozs7Ozs7Ozs7QUFRTyxJQUFNYSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNDLEtBQUQsRUFBUWpCLEVBQVIsRUFBWWtCLFNBQVo7QUFBQSxTQUM3QkQsS0FBSyxDQUFDakIsRUFBRCxDQUFMLEtBQWNrQixTQUFkLEdBQ0lELEtBREosbUNBR1NBLEtBSFQsNENBSU9qQixFQUpQLEVBSVlrQixTQUpaLEVBRDZCO0FBQUEsQ0FBeEI7QUFRUDs7OztBQUdBOzs7OztBQUlBO0FBQ0E7Ozs7QUFDQSxJQUFNQyxjQUFjLEdBQUcsSUFBdkI7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMCBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmV4cG9ydCBjb25zdCBGT1JXQVJEID0gJ0ByZWR1eC1mb3J3YXJkL0ZPUldBUkQnO1xyXG5leHBvcnQgY29uc3QgQUREUkVTU19QUkVGSVggPSAnQEBLR18nO1xyXG5cclxuaW1wb3J0IGN1cnJ5IGZyb20gJ2xvZGFzaC5jdXJyeSc7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0QWN0aW9uRm9yd2FyZEFkZHJlc3MgPSBpZCA9PiBgJHtBRERSRVNTX1BSRUZJWH0ke2lkLnRvVXBwZXJDYXNlKCl9YDtcclxuXHJcbi8qKlxyXG4gKiBXcmFwIGFuIGFjdGlvbiBpbnRvIGEgZm9yd2FyZCBhY3Rpb24gdGhhdCBvbmx5IG1vZGlmeSB0aGUgc3RhdGUgb2YgYSBzcGVjaWZpY1xyXG4gKiBrZXBsZXIuZ2wgaW5zdGFuY2UuIGtlcGxlci5nbCByZWR1Y2VyIHdpbGwgbG9vayBmb3Igc2lnbmF0dXJlcyBpbiB0aGUgYWN0aW9uIHRvXHJcbiAqIGRldGVybWluZSB3aGV0aGVyIGl0IG5lZWRzIHRvIGJlIGZvcndhcmRlZCB0byBhIHNwZWNpZmljIGluc3RhbmNlIHJlZHVjZXIuXHJcbiAqXHJcbiAqIHdyYXBUbyBjYW4gYmUgY3VycmllZC4gWW91IGNhbiBjcmVhdGUgYSBjdXJyaWVkIGFjdGlvbiB3cmFwcGVyIGJ5IG9ubHkgc3VwcGx5IHRoZSBgaWRgIGFyZ3VtZW50XHJcbiAqXHJcbiAqIEEgZm9yd2FyZCBhY3Rpb24gbG9va3MgbGlrZSB0aGlzXHJcbiAqIGBgYGpzXHJcbiAqICB7XHJcbiAqICAgIHR5cGU6IFwiQEBrZXBsZXIuZ2wvTEFZRVJfQ09ORklHX0NIQU5HRVwiLFxyXG4gKiAgICBwYXlsb2FkOiB7XHJcbiAqICAgICAgdHlwZTogJ0BAa2VwbGVyLmdsL0xBWUVSX0NPTkZJR19DSEFOR0UnLFxyXG4gKiAgICAgIHBheWxvYWQ6IHt9LFxyXG4gKiAgICAgIG1ldGE6IHtcclxuICogICAgICAgLy8gaWQgb2YgaW5zdGFuY2VcclxuICogICAgICAgIF9pZF86IGlkXHJcbiAqICAgICAgIC8vIG90aGVyIG1ldGFcclxuICogICAgICB9XHJcbiAqICAgIH0sXHJcbiAqICAgIG1ldGE6IHtcclxuICogICAgICBfZm9yd2FyZF86ICdAcmVkdXgtZm9yd2FyZC9GT1JXQVJEJyxcclxuICogICAgICBfYWRkcl86ICdAQEtHX2lkJ1xyXG4gKiAgICB9XHJcbiAqICB9O1xyXG4gKiBgYGBcclxuICpcclxuICogQG1lbWJlcm9mIGZvcndhcmRBY3Rpb25zXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBpZCAtIFRoZSBpZCB0byBmb3J3YXJkIHRvXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBhY3Rpb24gLSB0aGUgYWN0aW9uIG9iamVjdCB7dHlwZTogc3RyaW5nLCBwYXlsb2FkOiAqfVxyXG4gKiBAcmV0dXJucyB7e3R5cGU6IHN0cmluZywgcGF5bG9hZDoge3R5cGU6IHN0cmluZywgcGF5bG9hZDogKiwgbWV0YToge19pZF86IHN0cmluZ30sIG1ldGE6IHtfZm9yd2FyZF86IHN0cmluZywgX2FkZHJfOiBzdHJpbmd9fX19XHJcbiAqIEBwdWJsaWNcclxuICogQGV4YW1wbGVcclxuICpcclxuICogaW1wb3J0IHt3cmFwVG8sIHRvZ2dsZVBlcnNwZWN0aXZlfSBmcm9tICdrZXBsZXIuZ2wvYWN0aW9ucyc7XHJcbiAqXHJcbiAqIC8vIFRoaXMgYWN0aW9uIHdpbGwgb25seSBkaXNwYXRjaCB0byB0aGUgS2VwbGVyR2wgaW5zdGFuY2Ugd2l0aCBgaWQ6IG1hcF8xYFxyXG4gKiB0aGlzLnByb3BzLmRpc3BhdGNoKHdyYXBUbygnbWFwXzEnLCB0b2dnbGVQZXJzcGVjdGl2ZSgpKSk7XHJcbiAqXHJcbiAqIC8vIFlvdSBjYW4gYWxzbyBjcmVhdGUgYSBjdXJyaWVkIGFjdGlvbiBmb3IgZWFjaCBpbnN0YW5jZVxyXG4gKiBjb25zdCB3cmFwVG9NYXAxID0gd3JhcFRvKCdtYXBfMScpO1xyXG4gKiB0aGlzLnByb3BzLmRpc3BhdGNoKHdyYXBUb01hcDEodG9nZ2xlUGVyc3BlY3RpdmUoKSkpO1xyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHdyYXBUbyA9IGN1cnJ5KChpZCwgYWN0aW9uKSA9PiAoe1xyXG4gIC8vIGtlZXAgb3JpZ2luYWwgYWN0aW9uLnR5cGVcclxuICB0eXBlOiBhY3Rpb24udHlwZSxcclxuXHJcbiAgLy8gYWN0dWFsIGFjdGlvblxyXG4gIHBheWxvYWQ6IHtcclxuICAgIC4uLmFjdGlvbixcclxuICAgIG1ldGE6IHtcclxuICAgICAgLi4uYWN0aW9uLm1ldGEsXHJcbiAgICAgIF9pZF86IGlkXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgLy8gYWRkIGZvcndhcmQgc2lnbmF0dXJlIHRvIG1ldGFcclxuICBtZXRhOiB7XHJcbiAgICAuLi4oYWN0aW9uLm1ldGEgfHwge30pLFxyXG4gICAgX2ZvcndhcmRfOiBGT1JXQVJELFxyXG4gICAgX2FkZHJfOiBnZXRBY3Rpb25Gb3J3YXJkQWRkcmVzcyhpZClcclxuICB9XHJcbn0pKTtcclxuXHJcbi8qKlxyXG4gKiBXaGV0aGVyIGFuIGFjdGlvbiBpcyBhIGZvcndhcmQgYWN0aW9uXHJcbiAqIEBtZW1iZXJvZiBmb3J3YXJkQWN0aW9uc1xyXG4gKiBAcGFyYW0ge09iamVjdH0gYWN0aW9uIC0gdGhlIGFjdGlvbiBvYmplY3RcclxuICogQHJldHVybnMge2Jvb2xlYW59IGJvb2xlYW4gLSB3aGV0aGVyIHRoZSBhY3Rpb24gaXMgYSBmb3J3YXJkIGFjdGlvblxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgaXNGb3J3YXJkQWN0aW9uID0gYWN0aW9uID0+IHtcclxuICByZXR1cm4gQm9vbGVhbihhY3Rpb24gJiYgYWN0aW9uLm1ldGEgJiYgYWN0aW9uLm1ldGEuX2ZvcndhcmRfID09PSBGT1JXQVJEKTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBVbndyYXAgYW4gYWN0aW9uXHJcbiAqIEBtZW1iZXJvZiBmb3J3YXJkQWN0aW9uc1xyXG4gKiBAcGFyYW0ge09iamVjdH0gYWN0aW9uIC0gdGhlIGFjdGlvbiBvYmplY3RcclxuICogQHJldHVybnMge09iamVjdH0gLSB1bndyYXBwZWQgYWN0aW9uXHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmV4cG9ydCBjb25zdCB1bndyYXAgPSBhY3Rpb24gPT4gKGlzRm9yd2FyZEFjdGlvbihhY3Rpb24pID8gdW53cmFwKGFjdGlvbi5wYXlsb2FkKSA6IGFjdGlvbik7XHJcblxyXG4vKipcclxuICogR2l2ZW4gYW4gaWQsIHJldHVybnMgdGhlIGFjdGlvbiBmb3IgdGhhdCBpZC5cclxuICogSWYgdGhlIGFjdGlvbiBpcyBub3QgYSBmb3J3YXJkIGFjdGlvbiwgcmV0dXJuIHRoZSBhY3Rpb25cclxuICogQG1lbWJlcm9mIGZvcndhcmRBY3Rpb25zXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZFxyXG4gKiBAcGFyYW0ge09iamVjdH0gYWN0aW9uXHJcbiAqIEBwcml2YXRlXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgX2FjdGlvbkZvciA9IChpZCwgYWN0aW9uKSA9PlxyXG4gIGlzRm9yd2FyZEFjdGlvbihhY3Rpb24pXHJcbiAgICA/IGFjdGlvbi5tZXRhLl9hZGRyXyA9PT0gZ2V0QWN0aW9uRm9yd2FyZEFkZHJlc3MoaWQpXHJcbiAgICAgID8gYWN0aW9uLnBheWxvYWRcclxuICAgICAgOiB7fVxyXG4gICAgOiBhY3Rpb247XHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBhY3Rpb24gZGlzcGF0Y2hlciB0aGF0IHdyYXBzIGFuZCBmb3J3YXJkcyB0aGUgYWN0aW9ucyB0byBhIHNwZWNpZmljIGluc3RhbmNlXHJcbiAqIEBtZW1iZXJvZiBmb3J3YXJkQWN0aW9uc1xyXG4gKiBAcGFyYW0ge3N0cmluZ30gaWQgLSBpbnN0YW5jZSBpZFxyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBkaXNwYXRjaCAtIGFjdGlvbiBkaXNwYXRjaGVyXHJcbiAqIEBwdWJsaWNcclxuICogQGV4YW1wbGVcclxuICpcclxuICogLy8gYWN0aW9uIGFuZCBmb3J3YXJkIGRpc3BhdGNoZXJcclxuICogaW1wb3J0IHt0b2dnbGVTcGxpdE1hcCwgZm9yd2FyZFRvfSBmcm9tICdrZXBsZXIuZ2wvYWN0aW9ucyc7XHJcbiAqIGltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG4gKlxyXG4gKiBjb25zdCBNYXBDb250YWluZXIgPSBwcm9wcyA9PiAoXHJcbiAqICA8ZGl2PlxyXG4gKiAgIDxidXR0b24gb25DbGljaz17KCkgPT4gcHJvcHMua2VwbGVyR2xEaXNwYXRjaCh0b2dnbGVTcGxpdE1hcCgpKX0vPlxyXG4gKiAgPC9kaXY+XHJcbiAqIClcclxuICpcclxuICogY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoLCBwcm9wcykgPT4gKHtcclxuICogIGRpc3BhdGNoLFxyXG4gKiAga2VwbGVyR2xEaXNwYXRjaDogZm9yd2FyZFRvKOKAmGZvb+KAmSwgZGlzcGF0Y2gpXHJcbiAqIH0pO1xyXG4gKlxyXG4gKiBleHBvcnQgZGVmYXVsdCBjb25uZWN0KFxyXG4gKiAgc3RhdGUgPT4gc3RhdGUsXHJcbiAqICBtYXBEaXNwYXRjaFRvUHJvcHNcclxuICogKShNYXBDb250YWluZXIpO1xyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGZvcndhcmRUbyA9IChpZCwgZGlzcGF0Y2gpID0+IGFjdGlvbiA9PiBkaXNwYXRjaCh3cmFwVG8oaWQsIGFjdGlvbikpO1xyXG5cclxuLyoqXHJcbiAqIFVwZGF0ZSB0aGUgc3RhdGUgb2YgYSBrZXBsZXIuZ2wgaW5zdGFuY2VcclxuICogQG1lbWJlcm9mIGZvcndhcmRBY3Rpb25zXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGF0ZVxyXG4gKiBAcGFyYW0ge3N0cmluZ30gaWRcclxuICogQHBhcmFtIHtPYmplY3R9IG5leHRTdGF0ZVxyXG4gKiBAcHJpdmF0ZVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IF91cGRhdGVQcm9wZXJ0eSA9IChzdGF0ZSwgaWQsIG5leHRTdGF0ZSkgPT5cclxuICBzdGF0ZVtpZF0gPT09IG5leHRTdGF0ZVxyXG4gICAgPyBzdGF0ZVxyXG4gICAgOiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgW2lkXTogbmV4dFN0YXRlXHJcbiAgICAgIH07XHJcblxyXG4vKipcclxuICogVGhpcyBkZWNsYXJhdGlvbiBpcyBuZWVkZWQgdG8gZ3JvdXAgYWN0aW9ucyBpbiBkb2NzXHJcbiAqL1xyXG4vKipcclxuICogQSBzZXQgb2YgaGVscGVycyB0byBmb3J3YXJkIGRpc3BhdGNoIGFjdGlvbnMgdG8gYSBzcGVjaWZpYyBpbnN0YW5jZSByZWR1Y2VyXHJcbiAqIEBwdWJsaWNcclxuICovXHJcbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXHJcbi8vIEB0cy1pZ25vcmVcclxuY29uc3QgZm9yd2FyZEFjdGlvbnMgPSBudWxsO1xyXG4vKiBlc2xpbnQtZW5hYmxlIG5vLXVudXNlZC12YXJzICovXHJcbiJdfQ==