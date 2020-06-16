"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _actionTypes = _interopRequireDefault(require("../constants/action-types"));

var combinedUpdaters = _interopRequireWildcard(require("./combined-updaters"));

var _actionHandler;

/**
 * Important: Do not rename `actionHandler` or the assignment pattern of property value.
 * It is used to generate documentation
 */
var actionHandler = (_actionHandler = {}, (0, _defineProperty2["default"])(_actionHandler, _actionTypes["default"].ADD_DATA_TO_MAP, combinedUpdaters.addDataToMapUpdater), (0, _defineProperty2["default"])(_actionHandler, _actionTypes["default"].LOAD_FILES_SUCCESS, combinedUpdaters.loadFileSuccessUpdater), _actionHandler);
var _default = actionHandler;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWR1Y2Vycy9jb21wb3NlcnMuanMiXSwibmFtZXMiOlsiYWN0aW9uSGFuZGxlciIsIkFjdGlvblR5cGVzIiwiQUREX0RBVEFfVE9fTUFQIiwiY29tYmluZWRVcGRhdGVycyIsImFkZERhdGFUb01hcFVwZGF0ZXIiLCJMT0FEX0ZJTEVTX1NVQ0NFU1MiLCJsb2FkRmlsZVN1Y2Nlc3NVcGRhdGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOzs7O0FBRUE7Ozs7QUFJQSxJQUFNQSxhQUFhLDBFQUNoQkMsd0JBQVlDLGVBREksRUFDY0MsZ0JBQWdCLENBQUNDLG1CQUQvQixvREFFaEJILHdCQUFZSSxrQkFGSSxFQUVpQkYsZ0JBQWdCLENBQUNHLHNCQUZsQyxrQkFBbkI7ZUFLZU4sYSIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMCBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBBY3Rpb25UeXBlcyBmcm9tICdjb25zdGFudHMvYWN0aW9uLXR5cGVzJztcclxuaW1wb3J0ICogYXMgY29tYmluZWRVcGRhdGVycyBmcm9tICcuL2NvbWJpbmVkLXVwZGF0ZXJzJztcclxuXHJcbi8qKlxyXG4gKiBJbXBvcnRhbnQ6IERvIG5vdCByZW5hbWUgYGFjdGlvbkhhbmRsZXJgIG9yIHRoZSBhc3NpZ25tZW50IHBhdHRlcm4gb2YgcHJvcGVydHkgdmFsdWUuXHJcbiAqIEl0IGlzIHVzZWQgdG8gZ2VuZXJhdGUgZG9jdW1lbnRhdGlvblxyXG4gKi9cclxuY29uc3QgYWN0aW9uSGFuZGxlciA9IHtcclxuICBbQWN0aW9uVHlwZXMuQUREX0RBVEFfVE9fTUFQXTogY29tYmluZWRVcGRhdGVycy5hZGREYXRhVG9NYXBVcGRhdGVyLFxyXG4gIFtBY3Rpb25UeXBlcy5MT0FEX0ZJTEVTX1NVQ0NFU1NdOiBjb21iaW5lZFVwZGF0ZXJzLmxvYWRGaWxlU3VjY2Vzc1VwZGF0ZXJcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFjdGlvbkhhbmRsZXI7XHJcbiJdfQ==