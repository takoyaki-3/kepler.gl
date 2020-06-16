"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DELAY_TASK = exports.ACTION_TASK = exports.GET_SAVED_MAPS_TASK = exports.LOAD_CLOUD_MAP_TASK = exports.EXPORT_FILE_TO_CLOUD_TASK = exports.LOAD_MAP_STYLE_TASK = exports.LOAD_FILE_TASK = void 0;

var _tasks = _interopRequireWildcard(require("react-palm/tasks"));

var _d3Request = require("d3-request");

var _fileHandler = require("../processors/file-handler");

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
var LOAD_FILE_TASK = _tasks["default"].fromPromise(function (_ref) {
  var file = _ref.file,
      fileCache = _ref.fileCache;
  return (0, _fileHandler.readFile)({
    file: file,
    fileCache: fileCache
  });
}, 'LOAD_FILE_TASK');

exports.LOAD_FILE_TASK = LOAD_FILE_TASK;
var LOAD_MAP_STYLE_TASK = (0, _tasks.taskCreator)(function (_ref2, success, error) {
  var url = _ref2.url,
      id = _ref2.id;
  return (0, _d3Request.json)(url, function (err, result) {
    if (err) {
      error(err);
    } else {
      if (!result) {
        error(new Error('Map style response is empty'));
      }

      success({
        id: id,
        style: result
      });
    }
  });
}, 'LOAD_MAP_STYLE_TASK');
/**
 * task to upload file to cloud provider
 */

exports.LOAD_MAP_STYLE_TASK = LOAD_MAP_STYLE_TASK;

var EXPORT_FILE_TO_CLOUD_TASK = _tasks["default"].fromPromise(function (_ref3) {
  var provider = _ref3.provider,
      payload = _ref3.payload;
  return provider.uploadMap(payload);
}, 'EXPORT_FILE_TO_CLOUD_TASK');

exports.EXPORT_FILE_TO_CLOUD_TASK = EXPORT_FILE_TO_CLOUD_TASK;

var LOAD_CLOUD_MAP_TASK = _tasks["default"].fromPromise(function (_ref4) {
  var provider = _ref4.provider,
      payload = _ref4.payload;
  return provider.downloadMap(payload);
}, 'LOAD_CLOUD_MAP_TASK');

exports.LOAD_CLOUD_MAP_TASK = LOAD_CLOUD_MAP_TASK;

var GET_SAVED_MAPS_TASK = _tasks["default"].fromPromise(function (provider) {
  return provider.listMaps();
}, 'GET_SAVED_MAPS_TASK');
/**
 *  task to dispatch a function as a task
 */


exports.GET_SAVED_MAPS_TASK = GET_SAVED_MAPS_TASK;

var ACTION_TASK = _tasks["default"].fromCallback(function (_, cb) {
  return cb();
}, 'ACTION_TASK');

exports.ACTION_TASK = ACTION_TASK;

var DELAY_TASK = _tasks["default"].fromCallback(function (delay, cb) {
  return window.setTimeout(function () {
    return cb();
  }, delay);
}, 'DELAY_TASK');

exports.DELAY_TASK = DELAY_TASK;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90YXNrcy90YXNrcy5qcyJdLCJuYW1lcyI6WyJMT0FEX0ZJTEVfVEFTSyIsIlRhc2siLCJmcm9tUHJvbWlzZSIsImZpbGUiLCJmaWxlQ2FjaGUiLCJMT0FEX01BUF9TVFlMRV9UQVNLIiwic3VjY2VzcyIsImVycm9yIiwidXJsIiwiaWQiLCJlcnIiLCJyZXN1bHQiLCJFcnJvciIsInN0eWxlIiwiRVhQT1JUX0ZJTEVfVE9fQ0xPVURfVEFTSyIsInByb3ZpZGVyIiwicGF5bG9hZCIsInVwbG9hZE1hcCIsIkxPQURfQ0xPVURfTUFQX1RBU0siLCJkb3dubG9hZE1hcCIsIkdFVF9TQVZFRF9NQVBTX1RBU0siLCJsaXN0TWFwcyIsIkFDVElPTl9UQVNLIiwiZnJvbUNhbGxiYWNrIiwiXyIsImNiIiwiREVMQVlfVEFTSyIsImRlbGF5Iiwid2luZG93Iiwic2V0VGltZW91dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUNBOztBQXRCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1PLElBQU1BLGNBQWMsR0FBR0Msa0JBQUtDLFdBQUwsQ0FDNUI7QUFBQSxNQUFFQyxJQUFGLFFBQUVBLElBQUY7QUFBQSxNQUFRQyxTQUFSLFFBQVFBLFNBQVI7QUFBQSxTQUF1QiwyQkFBUztBQUFDRCxJQUFBQSxJQUFJLEVBQUpBLElBQUQ7QUFBT0MsSUFBQUEsU0FBUyxFQUFUQTtBQUFQLEdBQVQsQ0FBdkI7QUFBQSxDQUQ0QixFQUU1QixnQkFGNEIsQ0FBdkI7OztBQUtBLElBQU1DLG1CQUFtQixHQUFHLHdCQUNqQyxpQkFBWUMsT0FBWixFQUFxQkMsS0FBckI7QUFBQSxNQUFFQyxHQUFGLFNBQUVBLEdBQUY7QUFBQSxNQUFPQyxFQUFQLFNBQU9BLEVBQVA7QUFBQSxTQUNFLHFCQUFZRCxHQUFaLEVBQWlCLFVBQUNFLEdBQUQsRUFBTUMsTUFBTixFQUFpQjtBQUNoQyxRQUFJRCxHQUFKLEVBQVM7QUFDUEgsTUFBQUEsS0FBSyxDQUFDRyxHQUFELENBQUw7QUFDRCxLQUZELE1BRU87QUFDTCxVQUFJLENBQUNDLE1BQUwsRUFBYTtBQUNYSixRQUFBQSxLQUFLLENBQUMsSUFBSUssS0FBSixDQUFVLDZCQUFWLENBQUQsQ0FBTDtBQUNEOztBQUNETixNQUFBQSxPQUFPLENBQUM7QUFBQ0csUUFBQUEsRUFBRSxFQUFGQSxFQUFEO0FBQUtJLFFBQUFBLEtBQUssRUFBRUY7QUFBWixPQUFELENBQVA7QUFDRDtBQUNGLEdBVEQsQ0FERjtBQUFBLENBRGlDLEVBYWpDLHFCQWJpQyxDQUE1QjtBQWdCUDs7Ozs7O0FBR08sSUFBTUcseUJBQXlCLEdBQUdiLGtCQUFLQyxXQUFMLENBQ3ZDO0FBQUEsTUFBRWEsUUFBRixTQUFFQSxRQUFGO0FBQUEsTUFBWUMsT0FBWixTQUFZQSxPQUFaO0FBQUEsU0FBeUJELFFBQVEsQ0FBQ0UsU0FBVCxDQUFtQkQsT0FBbkIsQ0FBekI7QUFBQSxDQUR1QyxFQUd2QywyQkFIdUMsQ0FBbEM7Ozs7QUFNQSxJQUFNRSxtQkFBbUIsR0FBR2pCLGtCQUFLQyxXQUFMLENBQ2pDO0FBQUEsTUFBRWEsUUFBRixTQUFFQSxRQUFGO0FBQUEsTUFBWUMsT0FBWixTQUFZQSxPQUFaO0FBQUEsU0FBeUJELFFBQVEsQ0FBQ0ksV0FBVCxDQUFxQkgsT0FBckIsQ0FBekI7QUFBQSxDQURpQyxFQUdqQyxxQkFIaUMsQ0FBNUI7Ozs7QUFNQSxJQUFNSSxtQkFBbUIsR0FBR25CLGtCQUFLQyxXQUFMLENBQ2pDLFVBQUFhLFFBQVE7QUFBQSxTQUFJQSxRQUFRLENBQUNNLFFBQVQsRUFBSjtBQUFBLENBRHlCLEVBR2pDLHFCQUhpQyxDQUE1QjtBQUtQOzs7Ozs7O0FBR08sSUFBTUMsV0FBVyxHQUFHckIsa0JBQUtzQixZQUFMLENBQ3pCLFVBQUNDLENBQUQsRUFBSUMsRUFBSjtBQUFBLFNBQVdBLEVBQUUsRUFBYjtBQUFBLENBRHlCLEVBR3pCLGFBSHlCLENBQXBCOzs7O0FBTUEsSUFBTUMsVUFBVSxHQUFHekIsa0JBQUtzQixZQUFMLENBQ3hCLFVBQUNJLEtBQUQsRUFBUUYsRUFBUjtBQUFBLFNBQWVHLE1BQU0sQ0FBQ0MsVUFBUCxDQUFrQjtBQUFBLFdBQU1KLEVBQUUsRUFBUjtBQUFBLEdBQWxCLEVBQThCRSxLQUE5QixDQUFmO0FBQUEsQ0FEd0IsRUFHeEIsWUFId0IsQ0FBbkIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgVGFzaywge3Rhc2tDcmVhdG9yfSBmcm9tICdyZWFjdC1wYWxtL3Rhc2tzJztcclxuaW1wb3J0IHtqc29uIGFzIHJlcXVlc3RKc29ufSBmcm9tICdkMy1yZXF1ZXN0JztcclxuaW1wb3J0IHtyZWFkRmlsZX0gZnJvbSAnLi4vcHJvY2Vzc29ycy9maWxlLWhhbmRsZXInO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfRklMRV9UQVNLID0gVGFzay5mcm9tUHJvbWlzZShcclxuICAoe2ZpbGUsIGZpbGVDYWNoZX0pID0+IHJlYWRGaWxlKHtmaWxlLCBmaWxlQ2FjaGV9KSxcclxuICAnTE9BRF9GSUxFX1RBU0snXHJcbik7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9NQVBfU1RZTEVfVEFTSyA9IHRhc2tDcmVhdG9yKFxyXG4gICh7dXJsLCBpZH0sIHN1Y2Nlc3MsIGVycm9yKSA9PlxyXG4gICAgcmVxdWVzdEpzb24odXJsLCAoZXJyLCByZXN1bHQpID0+IHtcclxuICAgICAgaWYgKGVycikge1xyXG4gICAgICAgIGVycm9yKGVycik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKCFyZXN1bHQpIHtcclxuICAgICAgICAgIGVycm9yKG5ldyBFcnJvcignTWFwIHN0eWxlIHJlc3BvbnNlIGlzIGVtcHR5JykpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzdWNjZXNzKHtpZCwgc3R5bGU6IHJlc3VsdH0pO1xyXG4gICAgICB9XHJcbiAgICB9KSxcclxuXHJcbiAgJ0xPQURfTUFQX1NUWUxFX1RBU0snXHJcbik7XHJcblxyXG4vKipcclxuICogdGFzayB0byB1cGxvYWQgZmlsZSB0byBjbG91ZCBwcm92aWRlclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IEVYUE9SVF9GSUxFX1RPX0NMT1VEX1RBU0sgPSBUYXNrLmZyb21Qcm9taXNlKFxyXG4gICh7cHJvdmlkZXIsIHBheWxvYWR9KSA9PiBwcm92aWRlci51cGxvYWRNYXAocGF5bG9hZCksXHJcblxyXG4gICdFWFBPUlRfRklMRV9UT19DTE9VRF9UQVNLJ1xyXG4pO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfQ0xPVURfTUFQX1RBU0sgPSBUYXNrLmZyb21Qcm9taXNlKFxyXG4gICh7cHJvdmlkZXIsIHBheWxvYWR9KSA9PiBwcm92aWRlci5kb3dubG9hZE1hcChwYXlsb2FkKSxcclxuXHJcbiAgJ0xPQURfQ0xPVURfTUFQX1RBU0snXHJcbik7XHJcblxyXG5leHBvcnQgY29uc3QgR0VUX1NBVkVEX01BUFNfVEFTSyA9IFRhc2suZnJvbVByb21pc2UoXHJcbiAgcHJvdmlkZXIgPT4gcHJvdmlkZXIubGlzdE1hcHMoKSxcclxuXHJcbiAgJ0dFVF9TQVZFRF9NQVBTX1RBU0snXHJcbik7XHJcbi8qKlxyXG4gKiAgdGFzayB0byBkaXNwYXRjaCBhIGZ1bmN0aW9uIGFzIGEgdGFza1xyXG4gKi9cclxuZXhwb3J0IGNvbnN0IEFDVElPTl9UQVNLID0gVGFzay5mcm9tQ2FsbGJhY2soXHJcbiAgKF8sIGNiKSA9PiBjYigpLFxyXG5cclxuICAnQUNUSU9OX1RBU0snXHJcbik7XHJcblxyXG5leHBvcnQgY29uc3QgREVMQVlfVEFTSyA9IFRhc2suZnJvbUNhbGxiYWNrKFxyXG4gIChkZWxheSwgY2IpID0+IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IGNiKCksIGRlbGF5KSxcclxuXHJcbiAgJ0RFTEFZX1RBU0snXHJcbik7XHJcbiJdfQ==