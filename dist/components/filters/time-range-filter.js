"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _timeRangeSlider = _interopRequireDefault(require("../common/time-range-slider"));

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

/*
 * TimeRangeFilter -> TimeRangeSlider -> RangeSlider
 */
TimeRangeFilterFactory.deps = [_timeRangeSlider["default"]];

function TimeRangeFilterFactory(TimeRangeSlider) {
  var TimeRangeFilter = function TimeRangeFilter(_ref) {
    var filter = _ref.filter,
        setFilter = _ref.setFilter,
        isAnimatable = _ref.isAnimatable,
        toggleAnimation = _ref.toggleAnimation,
        hideTimeTitle = _ref.hideTimeTitle;
    return /*#__PURE__*/_react["default"].createElement(TimeRangeSlider, {
      id: filter.id,
      domain: filter.domain,
      value: filter.value,
      plotType: filter.plotType,
      lineChart: filter.lineChart,
      step: filter.step,
      speed: filter.speed,
      histogram: filter.enlarged ? filter.enlargedHistogram : filter.histogram,
      onChange: setFilter,
      toggleAnimation: toggleAnimation,
      isAnimatable: isAnimatable,
      isEnlarged: filter.enlarged,
      hideTimeTitle: hideTimeTitle
    });
  };

  return TimeRangeFilter;
}

var _default = TimeRangeFilterFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2ZpbHRlcnMvdGltZS1yYW5nZS1maWx0ZXIuanMiXSwibmFtZXMiOlsiVGltZVJhbmdlRmlsdGVyRmFjdG9yeSIsImRlcHMiLCJUaW1lUmFuZ2VTbGlkZXJGYWN0b3J5IiwiVGltZVJhbmdlU2xpZGVyIiwiVGltZVJhbmdlRmlsdGVyIiwiZmlsdGVyIiwic2V0RmlsdGVyIiwiaXNBbmltYXRhYmxlIiwidG9nZ2xlQW5pbWF0aW9uIiwiaGlkZVRpbWVUaXRsZSIsImlkIiwiZG9tYWluIiwidmFsdWUiLCJwbG90VHlwZSIsImxpbmVDaGFydCIsInN0ZXAiLCJzcGVlZCIsImVubGFyZ2VkIiwiZW5sYXJnZWRIaXN0b2dyYW0iLCJoaXN0b2dyYW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBS0E7OztBQUlBQSxzQkFBc0IsQ0FBQ0MsSUFBdkIsR0FBOEIsQ0FBQ0MsMkJBQUQsQ0FBOUI7O0FBRUEsU0FBU0Ysc0JBQVQsQ0FBZ0NHLGVBQWhDLEVBQWlEO0FBQy9DLE1BQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0I7QUFBQSxRQUFFQyxNQUFGLFFBQUVBLE1BQUY7QUFBQSxRQUFVQyxTQUFWLFFBQVVBLFNBQVY7QUFBQSxRQUFxQkMsWUFBckIsUUFBcUJBLFlBQXJCO0FBQUEsUUFBbUNDLGVBQW5DLFFBQW1DQSxlQUFuQztBQUFBLFFBQW9EQyxhQUFwRCxRQUFvREEsYUFBcEQ7QUFBQSx3QkFDdEIsZ0NBQUMsZUFBRDtBQUNFLE1BQUEsRUFBRSxFQUFFSixNQUFNLENBQUNLLEVBRGI7QUFFRSxNQUFBLE1BQU0sRUFBRUwsTUFBTSxDQUFDTSxNQUZqQjtBQUdFLE1BQUEsS0FBSyxFQUFFTixNQUFNLENBQUNPLEtBSGhCO0FBSUUsTUFBQSxRQUFRLEVBQUVQLE1BQU0sQ0FBQ1EsUUFKbkI7QUFLRSxNQUFBLFNBQVMsRUFBRVIsTUFBTSxDQUFDUyxTQUxwQjtBQU1FLE1BQUEsSUFBSSxFQUFFVCxNQUFNLENBQUNVLElBTmY7QUFPRSxNQUFBLEtBQUssRUFBRVYsTUFBTSxDQUFDVyxLQVBoQjtBQVFFLE1BQUEsU0FBUyxFQUFFWCxNQUFNLENBQUNZLFFBQVAsR0FBa0JaLE1BQU0sQ0FBQ2EsaUJBQXpCLEdBQTZDYixNQUFNLENBQUNjLFNBUmpFO0FBU0UsTUFBQSxRQUFRLEVBQUViLFNBVFo7QUFVRSxNQUFBLGVBQWUsRUFBRUUsZUFWbkI7QUFXRSxNQUFBLFlBQVksRUFBRUQsWUFYaEI7QUFZRSxNQUFBLFVBQVUsRUFBRUYsTUFBTSxDQUFDWSxRQVpyQjtBQWFFLE1BQUEsYUFBYSxFQUFFUjtBQWJqQixNQURzQjtBQUFBLEdBQXhCOztBQWtCQSxTQUFPTCxlQUFQO0FBQ0Q7O2VBRWNKLHNCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFRpbWVSYW5nZVNsaWRlckZhY3RvcnkgZnJvbSAnY29tcG9uZW50cy9jb21tb24vdGltZS1yYW5nZS1zbGlkZXInO1xyXG5cclxuLypcclxuICogVGltZVJhbmdlRmlsdGVyIC0+IFRpbWVSYW5nZVNsaWRlciAtPiBSYW5nZVNsaWRlclxyXG4gKi9cclxuXHJcblRpbWVSYW5nZUZpbHRlckZhY3RvcnkuZGVwcyA9IFtUaW1lUmFuZ2VTbGlkZXJGYWN0b3J5XTtcclxuXHJcbmZ1bmN0aW9uIFRpbWVSYW5nZUZpbHRlckZhY3RvcnkoVGltZVJhbmdlU2xpZGVyKSB7XHJcbiAgY29uc3QgVGltZVJhbmdlRmlsdGVyID0gKHtmaWx0ZXIsIHNldEZpbHRlciwgaXNBbmltYXRhYmxlLCB0b2dnbGVBbmltYXRpb24sIGhpZGVUaW1lVGl0bGV9KSA9PiAoXHJcbiAgICA8VGltZVJhbmdlU2xpZGVyXHJcbiAgICAgIGlkPXtmaWx0ZXIuaWR9XHJcbiAgICAgIGRvbWFpbj17ZmlsdGVyLmRvbWFpbn1cclxuICAgICAgdmFsdWU9e2ZpbHRlci52YWx1ZX1cclxuICAgICAgcGxvdFR5cGU9e2ZpbHRlci5wbG90VHlwZX1cclxuICAgICAgbGluZUNoYXJ0PXtmaWx0ZXIubGluZUNoYXJ0fVxyXG4gICAgICBzdGVwPXtmaWx0ZXIuc3RlcH1cclxuICAgICAgc3BlZWQ9e2ZpbHRlci5zcGVlZH1cclxuICAgICAgaGlzdG9ncmFtPXtmaWx0ZXIuZW5sYXJnZWQgPyBmaWx0ZXIuZW5sYXJnZWRIaXN0b2dyYW0gOiBmaWx0ZXIuaGlzdG9ncmFtfVxyXG4gICAgICBvbkNoYW5nZT17c2V0RmlsdGVyfVxyXG4gICAgICB0b2dnbGVBbmltYXRpb249e3RvZ2dsZUFuaW1hdGlvbn1cclxuICAgICAgaXNBbmltYXRhYmxlPXtpc0FuaW1hdGFibGV9XHJcbiAgICAgIGlzRW5sYXJnZWQ9e2ZpbHRlci5lbmxhcmdlZH1cclxuICAgICAgaGlkZVRpbWVUaXRsZT17aGlkZVRpbWVUaXRsZX1cclxuICAgIC8+XHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIFRpbWVSYW5nZUZpbHRlcjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGltZVJhbmdlRmlsdGVyRmFjdG9yeTtcclxuIl19