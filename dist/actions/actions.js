"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.keplerGlInit = exports.receiveMapConfig = exports.resetMapConfig = exports.addDataToMap = void 0;

var _actionTypes = _interopRequireDefault(require("../constants/action-types"));

var _reduxActions = require("redux-actions");

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

/**
 * Add data to kepler.gl reducer, prepare map with preset configuration if config is passed.
 * Kepler.gl provides a handy set of utils to parse data from different formats to the `data` object required in dataset. You rarely need to manually format the data obejct.
 *
 * Use `KeplerGlSchema.getConfigToSave` to generate a json blob of the currents instance config.
 * The config object value will always have higher precedence than the options properties.
 *
 * Kepler.gl uses `dataId` in the config to match with loaded dataset. If you pass a config object, you need
 * to match the `info.id` of your dataset to the `dataId` in each `layer`, `filter` and `interactionConfig.tooltips.fieldsToShow`
 *
 * @memberof main
 * @param {Object} data
 * @param {Array<Object>|Object} data.datasets - ***required** datasets can be a dataset or an array of datasets
 * Each dataset object needs to have `info` and `data` property.
 * @param {Object} data.datasets.info -info of a dataset
 * @param {string} data.datasets.info.id - id of this dataset. If config is defined, `id` should matches the `dataId` in config.
 * @param {string} data.datasets.info.label - A display name of this dataset
 * @param {Object} data.datasets.data - ***required** The data object, in a tabular format with 2 properties `fields` and `rows`
 * @param {Array<Object>} data.datasets.data.fields - ***required** Array of fields,
 * @param {string} data.datasets.data.fields.name - ***required** Name of the field,
 * @param {Array<Array>} data.datasets.data.rows - ***required** Array of rows, in a tabular format with `fields` and `rows`
 *
 * @param {Object} data.options
 * @param {boolean} data.options.centerMap `default: true` if `centerMap` is set to `true` kepler.gl will
 * place the map view within the data points boundaries.  `options.centerMap` will override `config.mapState` if passed in.
 * @param {boolean} data.options.readOnly `default: false` if `readOnly` is set to `true`
 * the left setting panel will be hidden
 * @param {boolean} data.options.keepExistingConfig whether to keep exiting map data and associated layer filter  interaction config `default: false`.
 * @param {Object} data.config this object will contain the full kepler.gl instance configuration {mapState, mapStyle, visState}
 * @public
 * @example
 *
 * // app.js
 * import {addDataToMap} from 'kepler.gl/actions';
 *
 * const sampleTripData = {
 *  fields: [
 *    {name: 'tpep_pickup_datetime', format: 'YYYY-M-D H:m:s', type: 'timestamp'},
 *    {name: 'pickup_longitude', format: '', type: 'real'},
 *    {name: 'pickup_latitude', format: '', type: 'real'}
 *  ],
 *  rows: [
 *    ['2015-01-15 19:05:39 +00:00', -73.99389648, 40.75011063],
 *    ['2015-01-15 19:05:39 +00:00', -73.97642517, 40.73981094],
 *    ['2015-01-15 19:05:40 +00:00', -73.96870422, 40.75424576],
 *  ]
 * };
 *
 * const sampleConfig = {
 *   visState: {
 *     filters: [
 *       {
 *         id: 'me',
 *         dataId: 'test_trip_data',
 *         name: 'tpep_pickup_datetime',
 *         type: 'timeRange',
 *         enlarged: true
 *       }
 *     ]
 *   }
 * }
 *
 * this.props.dispatch(
 *   addDataToMap({
 *     datasets: {
 *       info: {
 *         label: 'Sample Taxi Trips in New York City',
 *         id: 'test_trip_data'
 *       },
 *       data: sampleTripData
 *     },
 *     option: {
 *       centerMap: true,
 *       readOnly: false,
 *       keepExistingConfig: false
 *     },
 *     info: {
 *       title: 'Taro and Blue',
 *       description: 'This is my map'
 *     }
 *     config: sampleConfig
 *   })
 * );
 */
var addDataToMap = (0, _reduxActions.createAction)(_actionTypes["default"].ADD_DATA_TO_MAP, function (data) {
  return data;
});
/**
 * Reset all sub-reducers to its initial state. This can be used to clear out all configuration in the reducer.
 * @memberof main
 * @public
 */

exports.addDataToMap = addDataToMap;
var resetMapConfig = (0, _reduxActions.createAction)(_actionTypes["default"].RESET_MAP_CONFIG);
/**
 * Pass config to kepler.gl instance, prepare the state with preset configs.
 * Calling `KeplerGlSchema.parseSavedConfig` to convert saved config before passing it in is required.
 *
 * You can call `receiveMapConfig` before passing in any data. The reducer will store layer and filter config, waiting for
 * data to come in. When data arrives, you can call `addDataToMap` without passing any config, and the reducer will try to match
 * preloaded configs. This behavior is designed to allow asynchronous data loading.
 *
 * It is also useful when you want to prepare the kepler.gl instance with some preset layer and filter settings.
 * **Note** Sequence is important, `receiveMapConfig` needs to be called __before__ data is loaded. Currently kepler.gl doesn't allow calling `receiveMapConfig` after data is loaded.
 * It will reset current configuration first then apply config to it.
 * @memberof main
 * @param {Object} config - ***required** The Config Object
 * @param {Object} options - ***optional** The Option object
 * @param {boolean} options.centerMap `default: true` if `centerMap` is set to `true` kepler.gl will
 * place the map view within the data points boundaries
 * @param {boolean} options.readOnly `default: false` if `readOnly` is set to `true`
 * the left setting panel will be hidden
 * @param {boolean} options.keepExistingConfig whether to keep exiting layer filter and interaction config `default: false`.
 * @public
 * @example
 * import {receiveMapConfig} from 'kepler.gl/actions';
 * import KeplerGlSchema from 'kepler.gl/schemas';
 *
 * const parsedConfig = KeplerGlSchema.parseSavedConfig(config);
 * this.props.dispatch(receiveMapConfig(parsedConfig));
 */

exports.resetMapConfig = resetMapConfig;
var receiveMapConfig = (0, _reduxActions.createAction)(_actionTypes["default"].RECEIVE_MAP_CONFIG, function (config, options) {
  return {
    config: config,
    options: options
  };
});
/**
 * Initialize kepler.gl reducer. It is used to pass in `mapboxApiAccessToken` to `mapStyle` reducer.
 * @memberof main
 * @param {object} payload
 * @param payload.mapboxApiAccessToken - mapboxApiAccessToken to be saved to mapStyle reducer
 * @param payload.mapboxApiUrl - mapboxApiUrl to be saved to mapStyle reducer.
 * @param payload.mapStylesReplaceDefault - mapStylesReplaceDefault to be saved to mapStyle reducer
 * @type {typeof import('./actions').keplerGlInit}
 * @public
 */

exports.receiveMapConfig = receiveMapConfig;
var keplerGlInit = (0, _reduxActions.createAction)(_actionTypes["default"].INIT, // @ts-ignore
function () {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      mapboxApiAccessToken = _ref.mapboxApiAccessToken,
      mapboxApiUrl = _ref.mapboxApiUrl,
      mapStylesReplaceDefault = _ref.mapStylesReplaceDefault;

  return {
    mapboxApiAccessToken: mapboxApiAccessToken,
    mapboxApiUrl: mapboxApiUrl,
    mapStylesReplaceDefault: mapStylesReplaceDefault
  };
});
/**
 * This declaration is needed to group actions in docs
 */

/**
 * Main kepler.gl actions, these actions handles loading data and config into kepler.gl reducer. These actions
 * is listened by all subreducers,
 * @public
 */

/* eslint-disable no-unused-vars */
// @ts-ignore

exports.keplerGlInit = keplerGlInit;
var main = null;
/* eslint-enable no-unused-vars */
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb25zL2FjdGlvbnMuanMiXSwibmFtZXMiOlsiYWRkRGF0YVRvTWFwIiwiQWN0aW9uVHlwZXMiLCJBRERfREFUQV9UT19NQVAiLCJkYXRhIiwicmVzZXRNYXBDb25maWciLCJSRVNFVF9NQVBfQ09ORklHIiwicmVjZWl2ZU1hcENvbmZpZyIsIlJFQ0VJVkVfTUFQX0NPTkZJRyIsImNvbmZpZyIsIm9wdGlvbnMiLCJrZXBsZXJHbEluaXQiLCJJTklUIiwibWFwYm94QXBpQWNjZXNzVG9rZW4iLCJtYXBib3hBcGlVcmwiLCJtYXBTdHlsZXNSZXBsYWNlRGVmYXVsdCIsIm1haW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBS0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9GTyxJQUFNQSxZQUFZLEdBQUcsZ0NBQWFDLHdCQUFZQyxlQUF6QixFQUEwQyxVQUFBQyxJQUFJO0FBQUEsU0FBSUEsSUFBSjtBQUFBLENBQTlDLENBQXJCO0FBRVA7Ozs7Ozs7QUFLTyxJQUFNQyxjQUFjLEdBQUcsZ0NBQWFILHdCQUFZSSxnQkFBekIsQ0FBdkI7QUFFUDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEyQk8sSUFBTUMsZ0JBQWdCLEdBQUcsZ0NBQWFMLHdCQUFZTSxrQkFBekIsRUFBNkMsVUFBQ0MsTUFBRCxFQUFTQyxPQUFUO0FBQUEsU0FBc0I7QUFDakdELElBQUFBLE1BQU0sRUFBTkEsTUFEaUc7QUFFakdDLElBQUFBLE9BQU8sRUFBUEE7QUFGaUcsR0FBdEI7QUFBQSxDQUE3QyxDQUF6QjtBQUtQOzs7Ozs7Ozs7Ozs7QUFVTyxJQUFNQyxZQUFZLEdBQUcsZ0NBQzFCVCx3QkFBWVUsSUFEYyxFQUUxQjtBQUNBO0FBQUEsaUZBQWlFLEVBQWpFO0FBQUEsTUFBRUMsb0JBQUYsUUFBRUEsb0JBQUY7QUFBQSxNQUF3QkMsWUFBeEIsUUFBd0JBLFlBQXhCO0FBQUEsTUFBc0NDLHVCQUF0QyxRQUFzQ0EsdUJBQXRDOztBQUFBLFNBQXlFO0FBQ3ZFRixJQUFBQSxvQkFBb0IsRUFBcEJBLG9CQUR1RTtBQUV2RUMsSUFBQUEsWUFBWSxFQUFaQSxZQUZ1RTtBQUd2RUMsSUFBQUEsdUJBQXVCLEVBQXZCQTtBQUh1RSxHQUF6RTtBQUFBLENBSDBCLENBQXJCO0FBVVA7Ozs7QUFHQTs7Ozs7O0FBS0E7QUFDQTs7O0FBQ0EsSUFBTUMsSUFBSSxHQUFHLElBQWI7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMCBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBBY3Rpb25UeXBlcyBmcm9tICdjb25zdGFudHMvYWN0aW9uLXR5cGVzJztcclxuaW1wb3J0IHtjcmVhdGVBY3Rpb259IGZyb20gJ3JlZHV4LWFjdGlvbnMnO1xyXG5cclxuLyoqXHJcbiAqIEFkZCBkYXRhIHRvIGtlcGxlci5nbCByZWR1Y2VyLCBwcmVwYXJlIG1hcCB3aXRoIHByZXNldCBjb25maWd1cmF0aW9uIGlmIGNvbmZpZyBpcyBwYXNzZWQuXHJcbiAqIEtlcGxlci5nbCBwcm92aWRlcyBhIGhhbmR5IHNldCBvZiB1dGlscyB0byBwYXJzZSBkYXRhIGZyb20gZGlmZmVyZW50IGZvcm1hdHMgdG8gdGhlIGBkYXRhYCBvYmplY3QgcmVxdWlyZWQgaW4gZGF0YXNldC4gWW91IHJhcmVseSBuZWVkIHRvIG1hbnVhbGx5IGZvcm1hdCB0aGUgZGF0YSBvYmVqY3QuXHJcbiAqXHJcbiAqIFVzZSBgS2VwbGVyR2xTY2hlbWEuZ2V0Q29uZmlnVG9TYXZlYCB0byBnZW5lcmF0ZSBhIGpzb24gYmxvYiBvZiB0aGUgY3VycmVudHMgaW5zdGFuY2UgY29uZmlnLlxyXG4gKiBUaGUgY29uZmlnIG9iamVjdCB2YWx1ZSB3aWxsIGFsd2F5cyBoYXZlIGhpZ2hlciBwcmVjZWRlbmNlIHRoYW4gdGhlIG9wdGlvbnMgcHJvcGVydGllcy5cclxuICpcclxuICogS2VwbGVyLmdsIHVzZXMgYGRhdGFJZGAgaW4gdGhlIGNvbmZpZyB0byBtYXRjaCB3aXRoIGxvYWRlZCBkYXRhc2V0LiBJZiB5b3UgcGFzcyBhIGNvbmZpZyBvYmplY3QsIHlvdSBuZWVkXHJcbiAqIHRvIG1hdGNoIHRoZSBgaW5mby5pZGAgb2YgeW91ciBkYXRhc2V0IHRvIHRoZSBgZGF0YUlkYCBpbiBlYWNoIGBsYXllcmAsIGBmaWx0ZXJgIGFuZCBgaW50ZXJhY3Rpb25Db25maWcudG9vbHRpcHMuZmllbGRzVG9TaG93YFxyXG4gKlxyXG4gKiBAbWVtYmVyb2YgbWFpblxyXG4gKiBAcGFyYW0ge09iamVjdH0gZGF0YVxyXG4gKiBAcGFyYW0ge0FycmF5PE9iamVjdD58T2JqZWN0fSBkYXRhLmRhdGFzZXRzIC0gKioqcmVxdWlyZWQqKiBkYXRhc2V0cyBjYW4gYmUgYSBkYXRhc2V0IG9yIGFuIGFycmF5IG9mIGRhdGFzZXRzXHJcbiAqIEVhY2ggZGF0YXNldCBvYmplY3QgbmVlZHMgdG8gaGF2ZSBgaW5mb2AgYW5kIGBkYXRhYCBwcm9wZXJ0eS5cclxuICogQHBhcmFtIHtPYmplY3R9IGRhdGEuZGF0YXNldHMuaW5mbyAtaW5mbyBvZiBhIGRhdGFzZXRcclxuICogQHBhcmFtIHtzdHJpbmd9IGRhdGEuZGF0YXNldHMuaW5mby5pZCAtIGlkIG9mIHRoaXMgZGF0YXNldC4gSWYgY29uZmlnIGlzIGRlZmluZWQsIGBpZGAgc2hvdWxkIG1hdGNoZXMgdGhlIGBkYXRhSWRgIGluIGNvbmZpZy5cclxuICogQHBhcmFtIHtzdHJpbmd9IGRhdGEuZGF0YXNldHMuaW5mby5sYWJlbCAtIEEgZGlzcGxheSBuYW1lIG9mIHRoaXMgZGF0YXNldFxyXG4gKiBAcGFyYW0ge09iamVjdH0gZGF0YS5kYXRhc2V0cy5kYXRhIC0gKioqcmVxdWlyZWQqKiBUaGUgZGF0YSBvYmplY3QsIGluIGEgdGFidWxhciBmb3JtYXQgd2l0aCAyIHByb3BlcnRpZXMgYGZpZWxkc2AgYW5kIGByb3dzYFxyXG4gKiBAcGFyYW0ge0FycmF5PE9iamVjdD59IGRhdGEuZGF0YXNldHMuZGF0YS5maWVsZHMgLSAqKipyZXF1aXJlZCoqIEFycmF5IG9mIGZpZWxkcyxcclxuICogQHBhcmFtIHtzdHJpbmd9IGRhdGEuZGF0YXNldHMuZGF0YS5maWVsZHMubmFtZSAtICoqKnJlcXVpcmVkKiogTmFtZSBvZiB0aGUgZmllbGQsXHJcbiAqIEBwYXJhbSB7QXJyYXk8QXJyYXk+fSBkYXRhLmRhdGFzZXRzLmRhdGEucm93cyAtICoqKnJlcXVpcmVkKiogQXJyYXkgb2Ygcm93cywgaW4gYSB0YWJ1bGFyIGZvcm1hdCB3aXRoIGBmaWVsZHNgIGFuZCBgcm93c2BcclxuICpcclxuICogQHBhcmFtIHtPYmplY3R9IGRhdGEub3B0aW9uc1xyXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGRhdGEub3B0aW9ucy5jZW50ZXJNYXAgYGRlZmF1bHQ6IHRydWVgIGlmIGBjZW50ZXJNYXBgIGlzIHNldCB0byBgdHJ1ZWAga2VwbGVyLmdsIHdpbGxcclxuICogcGxhY2UgdGhlIG1hcCB2aWV3IHdpdGhpbiB0aGUgZGF0YSBwb2ludHMgYm91bmRhcmllcy4gIGBvcHRpb25zLmNlbnRlck1hcGAgd2lsbCBvdmVycmlkZSBgY29uZmlnLm1hcFN0YXRlYCBpZiBwYXNzZWQgaW4uXHJcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gZGF0YS5vcHRpb25zLnJlYWRPbmx5IGBkZWZhdWx0OiBmYWxzZWAgaWYgYHJlYWRPbmx5YCBpcyBzZXQgdG8gYHRydWVgXHJcbiAqIHRoZSBsZWZ0IHNldHRpbmcgcGFuZWwgd2lsbCBiZSBoaWRkZW5cclxuICogQHBhcmFtIHtib29sZWFufSBkYXRhLm9wdGlvbnMua2VlcEV4aXN0aW5nQ29uZmlnIHdoZXRoZXIgdG8ga2VlcCBleGl0aW5nIG1hcCBkYXRhIGFuZCBhc3NvY2lhdGVkIGxheWVyIGZpbHRlciAgaW50ZXJhY3Rpb24gY29uZmlnIGBkZWZhdWx0OiBmYWxzZWAuXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhLmNvbmZpZyB0aGlzIG9iamVjdCB3aWxsIGNvbnRhaW4gdGhlIGZ1bGwga2VwbGVyLmdsIGluc3RhbmNlIGNvbmZpZ3VyYXRpb24ge21hcFN0YXRlLCBtYXBTdHlsZSwgdmlzU3RhdGV9XHJcbiAqIEBwdWJsaWNcclxuICogQGV4YW1wbGVcclxuICpcclxuICogLy8gYXBwLmpzXHJcbiAqIGltcG9ydCB7YWRkRGF0YVRvTWFwfSBmcm9tICdrZXBsZXIuZ2wvYWN0aW9ucyc7XHJcbiAqXHJcbiAqIGNvbnN0IHNhbXBsZVRyaXBEYXRhID0ge1xyXG4gKiAgZmllbGRzOiBbXHJcbiAqICAgIHtuYW1lOiAndHBlcF9waWNrdXBfZGF0ZXRpbWUnLCBmb3JtYXQ6ICdZWVlZLU0tRCBIOm06cycsIHR5cGU6ICd0aW1lc3RhbXAnfSxcclxuICogICAge25hbWU6ICdwaWNrdXBfbG9uZ2l0dWRlJywgZm9ybWF0OiAnJywgdHlwZTogJ3JlYWwnfSxcclxuICogICAge25hbWU6ICdwaWNrdXBfbGF0aXR1ZGUnLCBmb3JtYXQ6ICcnLCB0eXBlOiAncmVhbCd9XHJcbiAqICBdLFxyXG4gKiAgcm93czogW1xyXG4gKiAgICBbJzIwMTUtMDEtMTUgMTk6MDU6MzkgKzAwOjAwJywgLTczLjk5Mzg5NjQ4LCA0MC43NTAxMTA2M10sXHJcbiAqICAgIFsnMjAxNS0wMS0xNSAxOTowNTozOSArMDA6MDAnLCAtNzMuOTc2NDI1MTcsIDQwLjczOTgxMDk0XSxcclxuICogICAgWycyMDE1LTAxLTE1IDE5OjA1OjQwICswMDowMCcsIC03My45Njg3MDQyMiwgNDAuNzU0MjQ1NzZdLFxyXG4gKiAgXVxyXG4gKiB9O1xyXG4gKlxyXG4gKiBjb25zdCBzYW1wbGVDb25maWcgPSB7XHJcbiAqICAgdmlzU3RhdGU6IHtcclxuICogICAgIGZpbHRlcnM6IFtcclxuICogICAgICAge1xyXG4gKiAgICAgICAgIGlkOiAnbWUnLFxyXG4gKiAgICAgICAgIGRhdGFJZDogJ3Rlc3RfdHJpcF9kYXRhJyxcclxuICogICAgICAgICBuYW1lOiAndHBlcF9waWNrdXBfZGF0ZXRpbWUnLFxyXG4gKiAgICAgICAgIHR5cGU6ICd0aW1lUmFuZ2UnLFxyXG4gKiAgICAgICAgIGVubGFyZ2VkOiB0cnVlXHJcbiAqICAgICAgIH1cclxuICogICAgIF1cclxuICogICB9XHJcbiAqIH1cclxuICpcclxuICogdGhpcy5wcm9wcy5kaXNwYXRjaChcclxuICogICBhZGREYXRhVG9NYXAoe1xyXG4gKiAgICAgZGF0YXNldHM6IHtcclxuICogICAgICAgaW5mbzoge1xyXG4gKiAgICAgICAgIGxhYmVsOiAnU2FtcGxlIFRheGkgVHJpcHMgaW4gTmV3IFlvcmsgQ2l0eScsXHJcbiAqICAgICAgICAgaWQ6ICd0ZXN0X3RyaXBfZGF0YSdcclxuICogICAgICAgfSxcclxuICogICAgICAgZGF0YTogc2FtcGxlVHJpcERhdGFcclxuICogICAgIH0sXHJcbiAqICAgICBvcHRpb246IHtcclxuICogICAgICAgY2VudGVyTWFwOiB0cnVlLFxyXG4gKiAgICAgICByZWFkT25seTogZmFsc2UsXHJcbiAqICAgICAgIGtlZXBFeGlzdGluZ0NvbmZpZzogZmFsc2VcclxuICogICAgIH0sXHJcbiAqICAgICBpbmZvOiB7XHJcbiAqICAgICAgIHRpdGxlOiAnVGFybyBhbmQgQmx1ZScsXHJcbiAqICAgICAgIGRlc2NyaXB0aW9uOiAnVGhpcyBpcyBteSBtYXAnXHJcbiAqICAgICB9XHJcbiAqICAgICBjb25maWc6IHNhbXBsZUNvbmZpZ1xyXG4gKiAgIH0pXHJcbiAqICk7XHJcbiAqL1xyXG5leHBvcnQgY29uc3QgYWRkRGF0YVRvTWFwID0gY3JlYXRlQWN0aW9uKEFjdGlvblR5cGVzLkFERF9EQVRBX1RPX01BUCwgZGF0YSA9PiBkYXRhKTtcclxuXHJcbi8qKlxyXG4gKiBSZXNldCBhbGwgc3ViLXJlZHVjZXJzIHRvIGl0cyBpbml0aWFsIHN0YXRlLiBUaGlzIGNhbiBiZSB1c2VkIHRvIGNsZWFyIG91dCBhbGwgY29uZmlndXJhdGlvbiBpbiB0aGUgcmVkdWNlci5cclxuICogQG1lbWJlcm9mIG1haW5cclxuICogQHB1YmxpY1xyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHJlc2V0TWFwQ29uZmlnID0gY3JlYXRlQWN0aW9uKEFjdGlvblR5cGVzLlJFU0VUX01BUF9DT05GSUcpO1xyXG5cclxuLyoqXHJcbiAqIFBhc3MgY29uZmlnIHRvIGtlcGxlci5nbCBpbnN0YW5jZSwgcHJlcGFyZSB0aGUgc3RhdGUgd2l0aCBwcmVzZXQgY29uZmlncy5cclxuICogQ2FsbGluZyBgS2VwbGVyR2xTY2hlbWEucGFyc2VTYXZlZENvbmZpZ2AgdG8gY29udmVydCBzYXZlZCBjb25maWcgYmVmb3JlIHBhc3NpbmcgaXQgaW4gaXMgcmVxdWlyZWQuXHJcbiAqXHJcbiAqIFlvdSBjYW4gY2FsbCBgcmVjZWl2ZU1hcENvbmZpZ2AgYmVmb3JlIHBhc3NpbmcgaW4gYW55IGRhdGEuIFRoZSByZWR1Y2VyIHdpbGwgc3RvcmUgbGF5ZXIgYW5kIGZpbHRlciBjb25maWcsIHdhaXRpbmcgZm9yXHJcbiAqIGRhdGEgdG8gY29tZSBpbi4gV2hlbiBkYXRhIGFycml2ZXMsIHlvdSBjYW4gY2FsbCBgYWRkRGF0YVRvTWFwYCB3aXRob3V0IHBhc3NpbmcgYW55IGNvbmZpZywgYW5kIHRoZSByZWR1Y2VyIHdpbGwgdHJ5IHRvIG1hdGNoXHJcbiAqIHByZWxvYWRlZCBjb25maWdzLiBUaGlzIGJlaGF2aW9yIGlzIGRlc2lnbmVkIHRvIGFsbG93IGFzeW5jaHJvbm91cyBkYXRhIGxvYWRpbmcuXHJcbiAqXHJcbiAqIEl0IGlzIGFsc28gdXNlZnVsIHdoZW4geW91IHdhbnQgdG8gcHJlcGFyZSB0aGUga2VwbGVyLmdsIGluc3RhbmNlIHdpdGggc29tZSBwcmVzZXQgbGF5ZXIgYW5kIGZpbHRlciBzZXR0aW5ncy5cclxuICogKipOb3RlKiogU2VxdWVuY2UgaXMgaW1wb3J0YW50LCBgcmVjZWl2ZU1hcENvbmZpZ2AgbmVlZHMgdG8gYmUgY2FsbGVkIF9fYmVmb3JlX18gZGF0YSBpcyBsb2FkZWQuIEN1cnJlbnRseSBrZXBsZXIuZ2wgZG9lc24ndCBhbGxvdyBjYWxsaW5nIGByZWNlaXZlTWFwQ29uZmlnYCBhZnRlciBkYXRhIGlzIGxvYWRlZC5cclxuICogSXQgd2lsbCByZXNldCBjdXJyZW50IGNvbmZpZ3VyYXRpb24gZmlyc3QgdGhlbiBhcHBseSBjb25maWcgdG8gaXQuXHJcbiAqIEBtZW1iZXJvZiBtYWluXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgLSAqKipyZXF1aXJlZCoqIFRoZSBDb25maWcgT2JqZWN0XHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gKioqb3B0aW9uYWwqKiBUaGUgT3B0aW9uIG9iamVjdFxyXG4gKiBAcGFyYW0ge2Jvb2xlYW59IG9wdGlvbnMuY2VudGVyTWFwIGBkZWZhdWx0OiB0cnVlYCBpZiBgY2VudGVyTWFwYCBpcyBzZXQgdG8gYHRydWVgIGtlcGxlci5nbCB3aWxsXHJcbiAqIHBsYWNlIHRoZSBtYXAgdmlldyB3aXRoaW4gdGhlIGRhdGEgcG9pbnRzIGJvdW5kYXJpZXNcclxuICogQHBhcmFtIHtib29sZWFufSBvcHRpb25zLnJlYWRPbmx5IGBkZWZhdWx0OiBmYWxzZWAgaWYgYHJlYWRPbmx5YCBpcyBzZXQgdG8gYHRydWVgXHJcbiAqIHRoZSBsZWZ0IHNldHRpbmcgcGFuZWwgd2lsbCBiZSBoaWRkZW5cclxuICogQHBhcmFtIHtib29sZWFufSBvcHRpb25zLmtlZXBFeGlzdGluZ0NvbmZpZyB3aGV0aGVyIHRvIGtlZXAgZXhpdGluZyBsYXllciBmaWx0ZXIgYW5kIGludGVyYWN0aW9uIGNvbmZpZyBgZGVmYXVsdDogZmFsc2VgLlxyXG4gKiBAcHVibGljXHJcbiAqIEBleGFtcGxlXHJcbiAqIGltcG9ydCB7cmVjZWl2ZU1hcENvbmZpZ30gZnJvbSAna2VwbGVyLmdsL2FjdGlvbnMnO1xyXG4gKiBpbXBvcnQgS2VwbGVyR2xTY2hlbWEgZnJvbSAna2VwbGVyLmdsL3NjaGVtYXMnO1xyXG4gKlxyXG4gKiBjb25zdCBwYXJzZWRDb25maWcgPSBLZXBsZXJHbFNjaGVtYS5wYXJzZVNhdmVkQ29uZmlnKGNvbmZpZyk7XHJcbiAqIHRoaXMucHJvcHMuZGlzcGF0Y2gocmVjZWl2ZU1hcENvbmZpZyhwYXJzZWRDb25maWcpKTtcclxuICovXHJcbmV4cG9ydCBjb25zdCByZWNlaXZlTWFwQ29uZmlnID0gY3JlYXRlQWN0aW9uKEFjdGlvblR5cGVzLlJFQ0VJVkVfTUFQX0NPTkZJRywgKGNvbmZpZywgb3B0aW9ucykgPT4gKHtcclxuICBjb25maWcsXHJcbiAgb3B0aW9uc1xyXG59KSk7XHJcblxyXG4vKipcclxuICogSW5pdGlhbGl6ZSBrZXBsZXIuZ2wgcmVkdWNlci4gSXQgaXMgdXNlZCB0byBwYXNzIGluIGBtYXBib3hBcGlBY2Nlc3NUb2tlbmAgdG8gYG1hcFN0eWxlYCByZWR1Y2VyLlxyXG4gKiBAbWVtYmVyb2YgbWFpblxyXG4gKiBAcGFyYW0ge29iamVjdH0gcGF5bG9hZFxyXG4gKiBAcGFyYW0gcGF5bG9hZC5tYXBib3hBcGlBY2Nlc3NUb2tlbiAtIG1hcGJveEFwaUFjY2Vzc1Rva2VuIHRvIGJlIHNhdmVkIHRvIG1hcFN0eWxlIHJlZHVjZXJcclxuICogQHBhcmFtIHBheWxvYWQubWFwYm94QXBpVXJsIC0gbWFwYm94QXBpVXJsIHRvIGJlIHNhdmVkIHRvIG1hcFN0eWxlIHJlZHVjZXIuXHJcbiAqIEBwYXJhbSBwYXlsb2FkLm1hcFN0eWxlc1JlcGxhY2VEZWZhdWx0IC0gbWFwU3R5bGVzUmVwbGFjZURlZmF1bHQgdG8gYmUgc2F2ZWQgdG8gbWFwU3R5bGUgcmVkdWNlclxyXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi9hY3Rpb25zJykua2VwbGVyR2xJbml0fVxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5leHBvcnQgY29uc3Qga2VwbGVyR2xJbml0ID0gY3JlYXRlQWN0aW9uKFxyXG4gIEFjdGlvblR5cGVzLklOSVQsXHJcbiAgLy8gQHRzLWlnbm9yZVxyXG4gICh7bWFwYm94QXBpQWNjZXNzVG9rZW4sIG1hcGJveEFwaVVybCwgbWFwU3R5bGVzUmVwbGFjZURlZmF1bHR9ID0ge30pID0+ICh7XHJcbiAgICBtYXBib3hBcGlBY2Nlc3NUb2tlbixcclxuICAgIG1hcGJveEFwaVVybCxcclxuICAgIG1hcFN0eWxlc1JlcGxhY2VEZWZhdWx0XHJcbiAgfSlcclxuKTtcclxuXHJcbi8qKlxyXG4gKiBUaGlzIGRlY2xhcmF0aW9uIGlzIG5lZWRlZCB0byBncm91cCBhY3Rpb25zIGluIGRvY3NcclxuICovXHJcbi8qKlxyXG4gKiBNYWluIGtlcGxlci5nbCBhY3Rpb25zLCB0aGVzZSBhY3Rpb25zIGhhbmRsZXMgbG9hZGluZyBkYXRhIGFuZCBjb25maWcgaW50byBrZXBsZXIuZ2wgcmVkdWNlci4gVGhlc2UgYWN0aW9uc1xyXG4gKiBpcyBsaXN0ZW5lZCBieSBhbGwgc3VicmVkdWNlcnMsXHJcbiAqIEBwdWJsaWNcclxuICovXHJcbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXHJcbi8vIEB0cy1pZ25vcmVcclxuY29uc3QgbWFpbiA9IG51bGw7XHJcbi8qIGVzbGludC1lbmFibGUgbm8tdW51c2VkLXZhcnMgKi9cclxuIl19