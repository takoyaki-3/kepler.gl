"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = require("../../common/styled-components");

var _itemSelector = _interopRequireDefault(require("../../common/item-selector/item-selector"));

var _reactIntl = require("react-intl");

var _utils = require("../../../utils/utils");

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
var DimensionScaleSelector = function DimensionScaleSelector(_ref) {
  var label = _ref.label,
      onSelect = _ref.onSelect,
      options = _ref.options,
      scaleType = _ref.scaleType,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled;
  return /*#__PURE__*/_react["default"].createElement(_styledComponents.SidePanelSection, null, /*#__PURE__*/_react["default"].createElement(_styledComponents.PanelLabel, null, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: label ? "scale.".concat((0, _utils.camelize)(label)) : 'misc.scale',
    defaultMessage: label
  })), /*#__PURE__*/_react["default"].createElement(_itemSelector["default"], {
    disabled: disabled,
    selectedItems: scaleType,
    options: options,
    multiSelect: false,
    searchable: false,
    onChange: onSelect
  }));
};

var _default = DimensionScaleSelector;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NpZGUtcGFuZWwvbGF5ZXItcGFuZWwvZGltZW5zaW9uLXNjYWxlLXNlbGVjdG9yLmpzIl0sIm5hbWVzIjpbIkRpbWVuc2lvblNjYWxlU2VsZWN0b3IiLCJsYWJlbCIsIm9uU2VsZWN0Iiwib3B0aW9ucyIsInNjYWxlVHlwZSIsImRpc2FibGVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUUEsSUFBTUEsc0JBQXNCLEdBQUcsU0FBekJBLHNCQUF5QixPQUE2RDtBQUFBLE1BQTNEQyxLQUEyRCxRQUEzREEsS0FBMkQ7QUFBQSxNQUFwREMsUUFBb0QsUUFBcERBLFFBQW9EO0FBQUEsTUFBMUNDLE9BQTBDLFFBQTFDQSxPQUEwQztBQUFBLE1BQWpDQyxTQUFpQyxRQUFqQ0EsU0FBaUM7QUFBQSwyQkFBdEJDLFFBQXNCO0FBQUEsTUFBdEJBLFFBQXNCLDhCQUFYLEtBQVc7QUFDMUYsc0JBQ0UsZ0NBQUMsa0NBQUQscUJBQ0UsZ0NBQUMsNEJBQUQscUJBQ0UsZ0NBQUMsMkJBQUQ7QUFDRSxJQUFBLEVBQUUsRUFBRUosS0FBSyxtQkFBWSxxQkFBU0EsS0FBVCxDQUFaLElBQWdDLFlBRDNDO0FBRUUsSUFBQSxjQUFjLEVBQUVBO0FBRmxCLElBREYsQ0FERixlQU9FLGdDQUFDLHdCQUFEO0FBQ0UsSUFBQSxRQUFRLEVBQUVJLFFBRFo7QUFFRSxJQUFBLGFBQWEsRUFBRUQsU0FGakI7QUFHRSxJQUFBLE9BQU8sRUFBRUQsT0FIWDtBQUlFLElBQUEsV0FBVyxFQUFFLEtBSmY7QUFLRSxJQUFBLFVBQVUsRUFBRSxLQUxkO0FBTUUsSUFBQSxRQUFRLEVBQUVEO0FBTlosSUFQRixDQURGO0FBa0JELENBbkJEOztlQXFCZUYsc0IiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge1BhbmVsTGFiZWwsIFNpZGVQYW5lbFNlY3Rpb259IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IEl0ZW1TZWxlY3RvciBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9pdGVtLXNlbGVjdG9yL2l0ZW0tc2VsZWN0b3InO1xyXG5pbXBvcnQge0Zvcm1hdHRlZE1lc3NhZ2V9IGZyb20gJ3JlYWN0LWludGwnO1xyXG5pbXBvcnQge2NhbWVsaXplfSBmcm9tICd1dGlscy91dGlscyc7XHJcblxyXG5jb25zdCBEaW1lbnNpb25TY2FsZVNlbGVjdG9yID0gKHtsYWJlbCwgb25TZWxlY3QsIG9wdGlvbnMsIHNjYWxlVHlwZSwgZGlzYWJsZWQgPSBmYWxzZX0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPFNpZGVQYW5lbFNlY3Rpb24+XHJcbiAgICAgIDxQYW5lbExhYmVsPlxyXG4gICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlXHJcbiAgICAgICAgICBpZD17bGFiZWwgPyBgc2NhbGUuJHtjYW1lbGl6ZShsYWJlbCl9YCA6ICdtaXNjLnNjYWxlJ31cclxuICAgICAgICAgIGRlZmF1bHRNZXNzYWdlPXtsYWJlbH1cclxuICAgICAgICAvPlxyXG4gICAgICA8L1BhbmVsTGFiZWw+XHJcbiAgICAgIDxJdGVtU2VsZWN0b3JcclxuICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XHJcbiAgICAgICAgc2VsZWN0ZWRJdGVtcz17c2NhbGVUeXBlfVxyXG4gICAgICAgIG9wdGlvbnM9e29wdGlvbnN9XHJcbiAgICAgICAgbXVsdGlTZWxlY3Q9e2ZhbHNlfVxyXG4gICAgICAgIHNlYXJjaGFibGU9e2ZhbHNlfVxyXG4gICAgICAgIG9uQ2hhbmdlPXtvblNlbGVjdH1cclxuICAgICAgLz5cclxuICAgIDwvU2lkZVBhbmVsU2VjdGlvbj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGltZW5zaW9uU2NhbGVTZWxlY3RvcjtcclxuIl19