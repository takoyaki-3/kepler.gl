"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = DatasetTagFactory;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledComponents2 = require("../../common/styled-components");

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  color: ", ";\n  font-size: 11px;\n  letter-spacing: 0.2px;\n  overflow: auto;\n\n  .dataset-color {\n    flex-shrink: 0;\n    margin-top: 5px;\n  }\n\n  .dataset-name {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var DatasetTagWrapper = _styledComponents["default"].div(_templateObject(), function (props) {
  return props.theme.textColor;
});

function DatasetTagFactory() {
  var DatasetTag = function DatasetTag(_ref) {
    var onClick = _ref.onClick,
        dataset = _ref.dataset;
    return /*#__PURE__*/_react["default"].createElement(DatasetTagWrapper, {
      className: "source-data-tag",
      onClick: onClick
    }, /*#__PURE__*/_react["default"].createElement(_styledComponents2.DatasetSquare, {
      className: "dataset-color",
      color: dataset.color
    }), /*#__PURE__*/_react["default"].createElement("div", {
      className: "dataset-name",
      title: dataset.label
    }, dataset.label));
  };

  return DatasetTag;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NpZGUtcGFuZWwvY29tbW9uL2RhdGFzZXQtdGFnLmpzIl0sIm5hbWVzIjpbIkRhdGFzZXRUYWdXcmFwcGVyIiwic3R5bGVkIiwiZGl2IiwicHJvcHMiLCJ0aGVtZSIsInRleHRDb2xvciIsIkRhdGFzZXRUYWdGYWN0b3J5IiwiRGF0YXNldFRhZyIsIm9uQ2xpY2siLCJkYXRhc2V0IiwiY29sb3IiLCJsYWJlbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLGlCQUFpQixHQUFHQyw2QkFBT0MsR0FBVixvQkFFWixVQUFBQyxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFNBQWhCO0FBQUEsQ0FGTyxDQUF2Qjs7QUFtQmUsU0FBU0MsaUJBQVQsR0FBNkI7QUFDMUMsTUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWE7QUFBQSxRQUFFQyxPQUFGLFFBQUVBLE9BQUY7QUFBQSxRQUFXQyxPQUFYLFFBQVdBLE9BQVg7QUFBQSx3QkFDakIsZ0NBQUMsaUJBQUQ7QUFBbUIsTUFBQSxTQUFTLEVBQUMsaUJBQTdCO0FBQStDLE1BQUEsT0FBTyxFQUFFRDtBQUF4RCxvQkFDRSxnQ0FBQyxnQ0FBRDtBQUFlLE1BQUEsU0FBUyxFQUFDLGVBQXpCO0FBQXlDLE1BQUEsS0FBSyxFQUFFQyxPQUFPLENBQUNDO0FBQXhELE1BREYsZUFFRTtBQUFLLE1BQUEsU0FBUyxFQUFDLGNBQWY7QUFBOEIsTUFBQSxLQUFLLEVBQUVELE9BQU8sQ0FBQ0U7QUFBN0MsT0FDR0YsT0FBTyxDQUFDRSxLQURYLENBRkYsQ0FEaUI7QUFBQSxHQUFuQjs7QUFTQSxTQUFPSixVQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHtEYXRhc2V0U3F1YXJlfSBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9zdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5jb25zdCBEYXRhc2V0VGFnV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50ZXh0Q29sb3J9O1xyXG4gIGZvbnQtc2l6ZTogMTFweDtcclxuICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcblxyXG4gIC5kYXRhc2V0LWNvbG9yIHtcclxuICAgIGZsZXgtc2hyaW5rOiAwO1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIH1cclxuXHJcbiAgLmRhdGFzZXQtbmFtZSB7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERhdGFzZXRUYWdGYWN0b3J5KCkge1xyXG4gIGNvbnN0IERhdGFzZXRUYWcgPSAoe29uQ2xpY2ssIGRhdGFzZXR9KSA9PiAoXHJcbiAgICA8RGF0YXNldFRhZ1dyYXBwZXIgY2xhc3NOYW1lPVwic291cmNlLWRhdGEtdGFnXCIgb25DbGljaz17b25DbGlja30+XHJcbiAgICAgIDxEYXRhc2V0U3F1YXJlIGNsYXNzTmFtZT1cImRhdGFzZXQtY29sb3JcIiBjb2xvcj17ZGF0YXNldC5jb2xvcn0gLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXRhc2V0LW5hbWVcIiB0aXRsZT17ZGF0YXNldC5sYWJlbH0+XHJcbiAgICAgICAge2RhdGFzZXQubGFiZWx9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9EYXRhc2V0VGFnV3JhcHBlcj5cclxuICApO1xyXG5cclxuICByZXR1cm4gRGF0YXNldFRhZztcclxufVxyXG4iXX0=