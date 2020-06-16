"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.COLORS = exports.RENDER_TYPE = exports.RENDER_STATE = void 0;
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
// Copied from react-map-gl-draw until it gets exported
var RENDER_STATE = {
  INACTIVE: 'INACTIVE',
  UNCOMMITTED: 'UNCOMMITTED',
  SELECTED: 'SELECTED',
  HOVERED: 'HOVERED'
};
exports.RENDER_STATE = RENDER_STATE;
var RENDER_TYPE = {
  POINT: 'Point',
  LINE_STRING: 'LineString',
  POLYGON: 'Polygon',
  RECTANGLE: 'Rectangle'
};
exports.RENDER_TYPE = RENDER_TYPE;
var COLORS = {
  PRIMARY: '#26B5F2',
  SECONDARY: '#ffff00',
  TERTIARY: '#6c6c6c'
};
exports.COLORS = COLORS;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2VkaXRvci9jb25zdGFudHMuanMiXSwibmFtZXMiOlsiUkVOREVSX1NUQVRFIiwiSU5BQ1RJVkUiLCJVTkNPTU1JVFRFRCIsIlNFTEVDVEVEIiwiSE9WRVJFRCIsIlJFTkRFUl9UWVBFIiwiUE9JTlQiLCJMSU5FX1NUUklORyIsIlBPTFlHT04iLCJSRUNUQU5HTEUiLCJDT0xPUlMiLCJQUklNQVJZIiwiU0VDT05EQVJZIiwiVEVSVElBUlkiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDTyxJQUFNQSxZQUFZLEdBQUc7QUFDMUJDLEVBQUFBLFFBQVEsRUFBRSxVQURnQjtBQUUxQkMsRUFBQUEsV0FBVyxFQUFFLGFBRmE7QUFHMUJDLEVBQUFBLFFBQVEsRUFBRSxVQUhnQjtBQUkxQkMsRUFBQUEsT0FBTyxFQUFFO0FBSmlCLENBQXJCOztBQU1BLElBQU1DLFdBQVcsR0FBRztBQUN6QkMsRUFBQUEsS0FBSyxFQUFFLE9BRGtCO0FBRXpCQyxFQUFBQSxXQUFXLEVBQUUsWUFGWTtBQUd6QkMsRUFBQUEsT0FBTyxFQUFFLFNBSGdCO0FBSXpCQyxFQUFBQSxTQUFTLEVBQUU7QUFKYyxDQUFwQjs7QUFPQSxJQUFNQyxNQUFNLEdBQUc7QUFDcEJDLEVBQUFBLE9BQU8sRUFBRSxTQURXO0FBRXBCQyxFQUFBQSxTQUFTLEVBQUUsU0FGUztBQUdwQkMsRUFBQUEsUUFBUSxFQUFFO0FBSFUsQ0FBZiIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMCBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbi8vIENvcGllZCBmcm9tIHJlYWN0LW1hcC1nbC1kcmF3IHVudGlsIGl0IGdldHMgZXhwb3J0ZWRcclxuZXhwb3J0IGNvbnN0IFJFTkRFUl9TVEFURSA9IHtcclxuICBJTkFDVElWRTogJ0lOQUNUSVZFJyxcclxuICBVTkNPTU1JVFRFRDogJ1VOQ09NTUlUVEVEJyxcclxuICBTRUxFQ1RFRDogJ1NFTEVDVEVEJyxcclxuICBIT1ZFUkVEOiAnSE9WRVJFRCdcclxufTtcclxuZXhwb3J0IGNvbnN0IFJFTkRFUl9UWVBFID0ge1xyXG4gIFBPSU5UOiAnUG9pbnQnLFxyXG4gIExJTkVfU1RSSU5HOiAnTGluZVN0cmluZycsXHJcbiAgUE9MWUdPTjogJ1BvbHlnb24nLFxyXG4gIFJFQ1RBTkdMRTogJ1JlY3RhbmdsZSdcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBDT0xPUlMgPSB7XHJcbiAgUFJJTUFSWTogJyMyNkI1RjInLFxyXG4gIFNFQ09OREFSWTogJyNmZmZmMDAnLFxyXG4gIFRFUlRJQVJZOiAnIzZjNmM2YydcclxufTtcclxuIl19