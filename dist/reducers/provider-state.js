"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.providerStateReducerFactory = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _reduxActions = require("redux-actions");

var providerStateUpdaters = _interopRequireWildcard(require("./provider-state-updaters"));

var _providerActions = require("../actions/provider-actions");

var _actionHandler;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * Important: Do not rename `actionHandler` or the assignment pattern of property value.
 * It is used to generate documentation
 */
var actionHandler = (_actionHandler = {}, (0, _defineProperty2["default"])(_actionHandler, _providerActions.ActionTypes.EXPORT_FILE_TO_CLOUD, providerStateUpdaters.exportFileToCloudUpdater), (0, _defineProperty2["default"])(_actionHandler, _providerActions.ActionTypes.EXPORT_FILE_SUCCESS, providerStateUpdaters.exportFileSuccessUpdater), (0, _defineProperty2["default"])(_actionHandler, _providerActions.ActionTypes.EXPORT_FILE_ERROR, providerStateUpdaters.exportFileErrorUpdater), (0, _defineProperty2["default"])(_actionHandler, _providerActions.ActionTypes.RESET_PROVIDER_STATUS, providerStateUpdaters.resetProviderStatusUpdater), (0, _defineProperty2["default"])(_actionHandler, _providerActions.ActionTypes.SET_CLOUD_PROVIDER, providerStateUpdaters.setCloudProviderUpdater), (0, _defineProperty2["default"])(_actionHandler, _providerActions.ActionTypes.POST_SAVE_LOAD_SUCCESS, providerStateUpdaters.postSaveLoadSuccessUpdater), (0, _defineProperty2["default"])(_actionHandler, _providerActions.ActionTypes.LOAD_CLOUD_MAP, providerStateUpdaters.loadCloudMapUpdater), (0, _defineProperty2["default"])(_actionHandler, _providerActions.ActionTypes.LOAD_CLOUD_MAP_SUCCESS, providerStateUpdaters.loadCloudMapSuccessUpdater), (0, _defineProperty2["default"])(_actionHandler, _providerActions.ActionTypes.LOAD_CLOUD_MAP_ERROR, providerStateUpdaters.loadCloudMapErrorUpdater), (0, _defineProperty2["default"])(_actionHandler, _providerActions.ActionTypes.GET_SAVED_MAPS, providerStateUpdaters.getSavedMapsUpdater), (0, _defineProperty2["default"])(_actionHandler, _providerActions.ActionTypes.GET_SAVED_MAPS_SUCCESS, providerStateUpdaters.getSavedMapsSuccessUpdater), (0, _defineProperty2["default"])(_actionHandler, _providerActions.ActionTypes.GET_SAVED_MAPS_ERROR, providerStateUpdaters.getSavedMapsErrorUpdater), _actionHandler); // construct provider-state reducer

var providerStateReducerFactory = function providerStateReducerFactory() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _reduxActions.handleActions)(actionHandler, _objectSpread(_objectSpread(_objectSpread({}, providerStateUpdaters.INITIAL_PROVIDER_STATE), initialState), {}, {
    initialState: initialState
  }));
};

exports.providerStateReducerFactory = providerStateReducerFactory;

var _default = providerStateReducerFactory();

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWR1Y2Vycy9wcm92aWRlci1zdGF0ZS5qcyJdLCJuYW1lcyI6WyJhY3Rpb25IYW5kbGVyIiwiQWN0aW9uVHlwZXMiLCJFWFBPUlRfRklMRV9UT19DTE9VRCIsInByb3ZpZGVyU3RhdGVVcGRhdGVycyIsImV4cG9ydEZpbGVUb0Nsb3VkVXBkYXRlciIsIkVYUE9SVF9GSUxFX1NVQ0NFU1MiLCJleHBvcnRGaWxlU3VjY2Vzc1VwZGF0ZXIiLCJFWFBPUlRfRklMRV9FUlJPUiIsImV4cG9ydEZpbGVFcnJvclVwZGF0ZXIiLCJSRVNFVF9QUk9WSURFUl9TVEFUVVMiLCJyZXNldFByb3ZpZGVyU3RhdHVzVXBkYXRlciIsIlNFVF9DTE9VRF9QUk9WSURFUiIsInNldENsb3VkUHJvdmlkZXJVcGRhdGVyIiwiUE9TVF9TQVZFX0xPQURfU1VDQ0VTUyIsInBvc3RTYXZlTG9hZFN1Y2Nlc3NVcGRhdGVyIiwiTE9BRF9DTE9VRF9NQVAiLCJsb2FkQ2xvdWRNYXBVcGRhdGVyIiwiTE9BRF9DTE9VRF9NQVBfU1VDQ0VTUyIsImxvYWRDbG91ZE1hcFN1Y2Nlc3NVcGRhdGVyIiwiTE9BRF9DTE9VRF9NQVBfRVJST1IiLCJsb2FkQ2xvdWRNYXBFcnJvclVwZGF0ZXIiLCJHRVRfU0FWRURfTUFQUyIsImdldFNhdmVkTWFwc1VwZGF0ZXIiLCJHRVRfU0FWRURfTUFQU19TVUNDRVNTIiwiZ2V0U2F2ZWRNYXBzU3VjY2Vzc1VwZGF0ZXIiLCJHRVRfU0FWRURfTUFQU19FUlJPUiIsImdldFNhdmVkTWFwc0Vycm9yVXBkYXRlciIsInByb3ZpZGVyU3RhdGVSZWR1Y2VyRmFjdG9yeSIsImluaXRpYWxTdGF0ZSIsIklOSVRJQUxfUFJPVklERVJfU1RBVEUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7O0FBRUE7Ozs7QUFJQSxJQUFNQSxhQUFhLDBFQUNoQkMsNkJBQVlDLG9CQURJLEVBQ21CQyxxQkFBcUIsQ0FBQ0Msd0JBRHpDLG9EQUVoQkgsNkJBQVlJLG1CQUZJLEVBRWtCRixxQkFBcUIsQ0FBQ0csd0JBRnhDLG9EQUdoQkwsNkJBQVlNLGlCQUhJLEVBR2dCSixxQkFBcUIsQ0FBQ0ssc0JBSHRDLG9EQUloQlAsNkJBQVlRLHFCQUpJLEVBSW9CTixxQkFBcUIsQ0FBQ08sMEJBSjFDLG9EQUtoQlQsNkJBQVlVLGtCQUxJLEVBS2lCUixxQkFBcUIsQ0FBQ1MsdUJBTHZDLG9EQU1oQlgsNkJBQVlZLHNCQU5JLEVBTXFCVixxQkFBcUIsQ0FBQ1csMEJBTjNDLG9EQU9oQmIsNkJBQVljLGNBUEksRUFPYVoscUJBQXFCLENBQUNhLG1CQVBuQyxvREFRaEJmLDZCQUFZZ0Isc0JBUkksRUFRcUJkLHFCQUFxQixDQUFDZSwwQkFSM0Msb0RBU2hCakIsNkJBQVlrQixvQkFUSSxFQVNtQmhCLHFCQUFxQixDQUFDaUIsd0JBVHpDLG9EQVVoQm5CLDZCQUFZb0IsY0FWSSxFQVVhbEIscUJBQXFCLENBQUNtQixtQkFWbkMsb0RBV2hCckIsNkJBQVlzQixzQkFYSSxFQVdxQnBCLHFCQUFxQixDQUFDcUIsMEJBWDNDLG9EQVloQnZCLDZCQUFZd0Isb0JBWkksRUFZbUJ0QixxQkFBcUIsQ0FBQ3VCLHdCQVp6QyxrQkFBbkIsQyxDQWVBOztBQUNPLElBQU1DLDJCQUEyQixHQUFHLFNBQTlCQSwyQkFBOEI7QUFBQSxNQUFDQyxZQUFELHVFQUFnQixFQUFoQjtBQUFBLFNBQ3pDLGlDQUFjNUIsYUFBZCxnREFDS0cscUJBQXFCLENBQUMwQixzQkFEM0IsR0FFS0QsWUFGTDtBQUdFQSxJQUFBQSxZQUFZLEVBQVpBO0FBSEYsS0FEeUM7QUFBQSxDQUFwQzs7OztlQU9RRCwyQkFBMkIsRSIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMCBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCB7aGFuZGxlQWN0aW9uc30gZnJvbSAncmVkdXgtYWN0aW9ucyc7XHJcbmltcG9ydCAqIGFzIHByb3ZpZGVyU3RhdGVVcGRhdGVycyBmcm9tICcuL3Byb3ZpZGVyLXN0YXRlLXVwZGF0ZXJzJztcclxuaW1wb3J0IHtBY3Rpb25UeXBlc30gZnJvbSAnYWN0aW9ucy9wcm92aWRlci1hY3Rpb25zJztcclxuXHJcbi8qKlxyXG4gKiBJbXBvcnRhbnQ6IERvIG5vdCByZW5hbWUgYGFjdGlvbkhhbmRsZXJgIG9yIHRoZSBhc3NpZ25tZW50IHBhdHRlcm4gb2YgcHJvcGVydHkgdmFsdWUuXHJcbiAqIEl0IGlzIHVzZWQgdG8gZ2VuZXJhdGUgZG9jdW1lbnRhdGlvblxyXG4gKi9cclxuY29uc3QgYWN0aW9uSGFuZGxlciA9IHtcclxuICBbQWN0aW9uVHlwZXMuRVhQT1JUX0ZJTEVfVE9fQ0xPVURdOiBwcm92aWRlclN0YXRlVXBkYXRlcnMuZXhwb3J0RmlsZVRvQ2xvdWRVcGRhdGVyLFxyXG4gIFtBY3Rpb25UeXBlcy5FWFBPUlRfRklMRV9TVUNDRVNTXTogcHJvdmlkZXJTdGF0ZVVwZGF0ZXJzLmV4cG9ydEZpbGVTdWNjZXNzVXBkYXRlcixcclxuICBbQWN0aW9uVHlwZXMuRVhQT1JUX0ZJTEVfRVJST1JdOiBwcm92aWRlclN0YXRlVXBkYXRlcnMuZXhwb3J0RmlsZUVycm9yVXBkYXRlcixcclxuICBbQWN0aW9uVHlwZXMuUkVTRVRfUFJPVklERVJfU1RBVFVTXTogcHJvdmlkZXJTdGF0ZVVwZGF0ZXJzLnJlc2V0UHJvdmlkZXJTdGF0dXNVcGRhdGVyLFxyXG4gIFtBY3Rpb25UeXBlcy5TRVRfQ0xPVURfUFJPVklERVJdOiBwcm92aWRlclN0YXRlVXBkYXRlcnMuc2V0Q2xvdWRQcm92aWRlclVwZGF0ZXIsXHJcbiAgW0FjdGlvblR5cGVzLlBPU1RfU0FWRV9MT0FEX1NVQ0NFU1NdOiBwcm92aWRlclN0YXRlVXBkYXRlcnMucG9zdFNhdmVMb2FkU3VjY2Vzc1VwZGF0ZXIsXHJcbiAgW0FjdGlvblR5cGVzLkxPQURfQ0xPVURfTUFQXTogcHJvdmlkZXJTdGF0ZVVwZGF0ZXJzLmxvYWRDbG91ZE1hcFVwZGF0ZXIsXHJcbiAgW0FjdGlvblR5cGVzLkxPQURfQ0xPVURfTUFQX1NVQ0NFU1NdOiBwcm92aWRlclN0YXRlVXBkYXRlcnMubG9hZENsb3VkTWFwU3VjY2Vzc1VwZGF0ZXIsXHJcbiAgW0FjdGlvblR5cGVzLkxPQURfQ0xPVURfTUFQX0VSUk9SXTogcHJvdmlkZXJTdGF0ZVVwZGF0ZXJzLmxvYWRDbG91ZE1hcEVycm9yVXBkYXRlcixcclxuICBbQWN0aW9uVHlwZXMuR0VUX1NBVkVEX01BUFNdOiBwcm92aWRlclN0YXRlVXBkYXRlcnMuZ2V0U2F2ZWRNYXBzVXBkYXRlcixcclxuICBbQWN0aW9uVHlwZXMuR0VUX1NBVkVEX01BUFNfU1VDQ0VTU106IHByb3ZpZGVyU3RhdGVVcGRhdGVycy5nZXRTYXZlZE1hcHNTdWNjZXNzVXBkYXRlcixcclxuICBbQWN0aW9uVHlwZXMuR0VUX1NBVkVEX01BUFNfRVJST1JdOiBwcm92aWRlclN0YXRlVXBkYXRlcnMuZ2V0U2F2ZWRNYXBzRXJyb3JVcGRhdGVyXHJcbn07XHJcblxyXG4vLyBjb25zdHJ1Y3QgcHJvdmlkZXItc3RhdGUgcmVkdWNlclxyXG5leHBvcnQgY29uc3QgcHJvdmlkZXJTdGF0ZVJlZHVjZXJGYWN0b3J5ID0gKGluaXRpYWxTdGF0ZSA9IHt9KSA9PlxyXG4gIGhhbmRsZUFjdGlvbnMoYWN0aW9uSGFuZGxlciwge1xyXG4gICAgLi4ucHJvdmlkZXJTdGF0ZVVwZGF0ZXJzLklOSVRJQUxfUFJPVklERVJfU1RBVEUsXHJcbiAgICAuLi5pbml0aWFsU3RhdGUsXHJcbiAgICBpbml0aWFsU3RhdGVcclxuICB9KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHByb3ZpZGVyU3RhdGVSZWR1Y2VyRmFjdG9yeSgpO1xyXG4iXX0=