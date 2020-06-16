"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getS2Center = getS2Center;

var _long = _interopRequireDefault(require("long"));

var _s2Geometry = require("s2-geometry");

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
var MAXIMUM_TOKEN_LENGTH = 16;
/**
 * Retrieve S2 geometry center
 * @param s2Token string | number
 * @return {*[]}
 */

function getS2Center(s2Token) {
  var paddedToken = s2Token.toString().padEnd(MAXIMUM_TOKEN_LENGTH, '0');

  var s2Id = _long["default"].fromString(paddedToken, MAXIMUM_TOKEN_LENGTH);

  var _S2$idToLatLng = _s2Geometry.S2.idToLatLng(s2Id.toString()),
      lat = _S2$idToLatLng.lat,
      lng = _S2$idToLatLng.lng;

  return [lng, lat];
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9sYXllcnMvczItZ2VvbWV0cnktbGF5ZXIvczItdXRpbHMuanMiXSwibmFtZXMiOlsiTUFYSU1VTV9UT0tFTl9MRU5HVEgiLCJnZXRTMkNlbnRlciIsInMyVG9rZW4iLCJwYWRkZWRUb2tlbiIsInRvU3RyaW5nIiwicGFkRW5kIiwiczJJZCIsIkxvbmciLCJmcm9tU3RyaW5nIiwiUzIiLCJpZFRvTGF0TG5nIiwibGF0IiwibG5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0EsSUFBTUEsb0JBQW9CLEdBQUcsRUFBN0I7QUFFQTs7Ozs7O0FBS08sU0FBU0MsV0FBVCxDQUFxQkMsT0FBckIsRUFBOEI7QUFDbkMsTUFBTUMsV0FBVyxHQUFHRCxPQUFPLENBQUNFLFFBQVIsR0FBbUJDLE1BQW5CLENBQTBCTCxvQkFBMUIsRUFBZ0QsR0FBaEQsQ0FBcEI7O0FBQ0EsTUFBTU0sSUFBSSxHQUFHQyxpQkFBS0MsVUFBTCxDQUFnQkwsV0FBaEIsRUFBNkJILG9CQUE3QixDQUFiOztBQUZtQyx1QkFHaEJTLGVBQUdDLFVBQUgsQ0FBY0osSUFBSSxDQUFDRixRQUFMLEVBQWQsQ0FIZ0I7QUFBQSxNQUc1Qk8sR0FINEIsa0JBRzVCQSxHQUg0QjtBQUFBLE1BR3ZCQyxHQUh1QixrQkFHdkJBLEdBSHVCOztBQUluQyxTQUFPLENBQUNBLEdBQUQsRUFBTUQsR0FBTixDQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgTG9uZyBmcm9tICdsb25nJztcclxuaW1wb3J0IHtTMn0gZnJvbSAnczItZ2VvbWV0cnknO1xyXG5cclxuY29uc3QgTUFYSU1VTV9UT0tFTl9MRU5HVEggPSAxNjtcclxuXHJcbi8qKlxyXG4gKiBSZXRyaWV2ZSBTMiBnZW9tZXRyeSBjZW50ZXJcclxuICogQHBhcmFtIHMyVG9rZW4gc3RyaW5nIHwgbnVtYmVyXHJcbiAqIEByZXR1cm4geypbXX1cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRTMkNlbnRlcihzMlRva2VuKSB7XHJcbiAgY29uc3QgcGFkZGVkVG9rZW4gPSBzMlRva2VuLnRvU3RyaW5nKCkucGFkRW5kKE1BWElNVU1fVE9LRU5fTEVOR1RILCAnMCcpO1xyXG4gIGNvbnN0IHMySWQgPSBMb25nLmZyb21TdHJpbmcocGFkZGVkVG9rZW4sIE1BWElNVU1fVE9LRU5fTEVOR1RIKTtcclxuICBjb25zdCB7bGF0LCBsbmd9ID0gUzIuaWRUb0xhdExuZyhzMklkLnRvU3RyaW5nKCkpO1xyXG4gIHJldHVybiBbbG5nLCBsYXRdO1xyXG59XHJcbiJdfQ==