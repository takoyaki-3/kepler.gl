"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  flex-grow: 1;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  flex-grow: 1;\n  border-width: 1px;\n  border-style: solid;\n  border-color: ", ";\n  padding: 4px;\n  border-radius: 4px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  border-radius: 2px;\n  display: flex;\n  flex-direction: row;\n  flex-grow: 1;\n  justify-content: space-between;\n  overflow: hidden;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var propTypes = {
  colors: _propTypes["default"].arrayOf(_propTypes["default"].string).isRequired,
  height: _propTypes["default"].number,
  className: _propTypes["default"].string,
  isSelected: _propTypes["default"].bool,
  isReversed: _propTypes["default"].bool
};
var defaultProps = {
  height: 10,
  colors: [],
  className: '',
  isSelected: false,
  isReversed: false
};

var PaletteWrapper = _styledComponents["default"].div.attrs({
  className: 'color-range-palette__inner'
})(_templateObject());

var PaletteContainer = _styledComponents["default"].div.attrs({
  className: 'color-range-palette'
})(_templateObject2(), function (props) {
  return props.isSelected ? '#FFFFFF' : 'transparent';
});

var StyledColorBlock = _styledComponents["default"].div.attrs({
  className: 'color-range-palette__block'
})(_templateObject3());

var ColorPalette = function ColorPalette(_ref) {
  var colors = _ref.colors,
      height = _ref.height,
      className = _ref.className,
      isSelected = _ref.isSelected,
      isReversed = _ref.isReversed;
  return /*#__PURE__*/_react["default"].createElement(PaletteContainer, {
    className: className,
    isSelected: isSelected
  }, /*#__PURE__*/_react["default"].createElement(PaletteWrapper, {
    style: {
      height: height,
      transform: "scale(".concat(isReversed ? -1 : 1, ", 1)")
    }
  }, colors.map(function (color, index) {
    return /*#__PURE__*/_react["default"].createElement(StyledColorBlock, {
      key: "".concat(color, "-").concat(index),
      style: {
        backgroundColor: color
      }
    });
  })));
};

ColorPalette.propTypes = propTypes;
ColorPalette.defaultProps = defaultProps;
var _default = ColorPalette;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NpZGUtcGFuZWwvbGF5ZXItcGFuZWwvY29sb3ItcGFsZXR0ZS5qcyJdLCJuYW1lcyI6WyJwcm9wVHlwZXMiLCJjb2xvcnMiLCJQcm9wVHlwZXMiLCJhcnJheU9mIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsImhlaWdodCIsIm51bWJlciIsImNsYXNzTmFtZSIsImlzU2VsZWN0ZWQiLCJib29sIiwiaXNSZXZlcnNlZCIsImRlZmF1bHRQcm9wcyIsIlBhbGV0dGVXcmFwcGVyIiwic3R5bGVkIiwiZGl2IiwiYXR0cnMiLCJQYWxldHRlQ29udGFpbmVyIiwicHJvcHMiLCJTdHlsZWRDb2xvckJsb2NrIiwiQ29sb3JQYWxldHRlIiwidHJhbnNmb3JtIiwibWFwIiwiY29sb3IiLCJpbmRleCIsImJhY2tncm91bmRDb2xvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsU0FBUyxHQUFHO0FBQ2hCQyxFQUFBQSxNQUFNLEVBQUVDLHNCQUFVQyxPQUFWLENBQWtCRCxzQkFBVUUsTUFBNUIsRUFBb0NDLFVBRDVCO0FBRWhCQyxFQUFBQSxNQUFNLEVBQUVKLHNCQUFVSyxNQUZGO0FBR2hCQyxFQUFBQSxTQUFTLEVBQUVOLHNCQUFVRSxNQUhMO0FBSWhCSyxFQUFBQSxVQUFVLEVBQUVQLHNCQUFVUSxJQUpOO0FBS2hCQyxFQUFBQSxVQUFVLEVBQUVULHNCQUFVUTtBQUxOLENBQWxCO0FBUUEsSUFBTUUsWUFBWSxHQUFHO0FBQ25CTixFQUFBQSxNQUFNLEVBQUUsRUFEVztBQUVuQkwsRUFBQUEsTUFBTSxFQUFFLEVBRlc7QUFHbkJPLEVBQUFBLFNBQVMsRUFBRSxFQUhRO0FBSW5CQyxFQUFBQSxVQUFVLEVBQUUsS0FKTztBQUtuQkUsRUFBQUEsVUFBVSxFQUFFO0FBTE8sQ0FBckI7O0FBUUEsSUFBTUUsY0FBYyxHQUFHQyw2QkFBT0MsR0FBUCxDQUFXQyxLQUFYLENBQWlCO0FBQ3RDUixFQUFBQSxTQUFTLEVBQUU7QUFEMkIsQ0FBakIsQ0FBSCxtQkFBcEI7O0FBV0EsSUFBTVMsZ0JBQWdCLEdBQUdILDZCQUFPQyxHQUFQLENBQVdDLEtBQVgsQ0FBaUI7QUFDeENSLEVBQUFBLFNBQVMsRUFBRTtBQUQ2QixDQUFqQixDQUFILHFCQU9KLFVBQUFVLEtBQUs7QUFBQSxTQUFLQSxLQUFLLENBQUNULFVBQU4sR0FBbUIsU0FBbkIsR0FBK0IsYUFBcEM7QUFBQSxDQVBELENBQXRCOztBQVlBLElBQU1VLGdCQUFnQixHQUFHTCw2QkFBT0MsR0FBUCxDQUFXQyxLQUFYLENBQWlCO0FBQ3hDUixFQUFBQSxTQUFTLEVBQUU7QUFENkIsQ0FBakIsQ0FBSCxvQkFBdEI7O0FBTUEsSUFBTVksWUFBWSxHQUFHLFNBQWZBLFlBQWU7QUFBQSxNQUFFbkIsTUFBRixRQUFFQSxNQUFGO0FBQUEsTUFBVUssTUFBVixRQUFVQSxNQUFWO0FBQUEsTUFBa0JFLFNBQWxCLFFBQWtCQSxTQUFsQjtBQUFBLE1BQTZCQyxVQUE3QixRQUE2QkEsVUFBN0I7QUFBQSxNQUF5Q0UsVUFBekMsUUFBeUNBLFVBQXpDO0FBQUEsc0JBQ25CLGdDQUFDLGdCQUFEO0FBQWtCLElBQUEsU0FBUyxFQUFFSCxTQUE3QjtBQUF3QyxJQUFBLFVBQVUsRUFBRUM7QUFBcEQsa0JBQ0UsZ0NBQUMsY0FBRDtBQUFnQixJQUFBLEtBQUssRUFBRTtBQUFDSCxNQUFBQSxNQUFNLEVBQU5BLE1BQUQ7QUFBU2UsTUFBQUEsU0FBUyxrQkFBV1YsVUFBVSxHQUFHLENBQUMsQ0FBSixHQUFRLENBQTdCO0FBQWxCO0FBQXZCLEtBQ0dWLE1BQU0sQ0FBQ3FCLEdBQVAsQ0FBVyxVQUFDQyxLQUFELEVBQVFDLEtBQVI7QUFBQSx3QkFDVixnQ0FBQyxnQkFBRDtBQUFrQixNQUFBLEdBQUcsWUFBS0QsS0FBTCxjQUFjQyxLQUFkLENBQXJCO0FBQTRDLE1BQUEsS0FBSyxFQUFFO0FBQUNDLFFBQUFBLGVBQWUsRUFBRUY7QUFBbEI7QUFBbkQsTUFEVTtBQUFBLEdBQVgsQ0FESCxDQURGLENBRG1CO0FBQUEsQ0FBckI7O0FBVUFILFlBQVksQ0FBQ3BCLFNBQWIsR0FBeUJBLFNBQXpCO0FBQ0FvQixZQUFZLENBQUNSLFlBQWIsR0FBNEJBLFlBQTVCO2VBRWVRLFkiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmNvbnN0IHByb3BUeXBlcyA9IHtcclxuICBjb2xvcnM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zdHJpbmcpLmlzUmVxdWlyZWQsXHJcbiAgaGVpZ2h0OiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICBpc1NlbGVjdGVkOiBQcm9wVHlwZXMuYm9vbCxcclxuICBpc1JldmVyc2VkOiBQcm9wVHlwZXMuYm9vbFxyXG59O1xyXG5cclxuY29uc3QgZGVmYXVsdFByb3BzID0ge1xyXG4gIGhlaWdodDogMTAsXHJcbiAgY29sb3JzOiBbXSxcclxuICBjbGFzc05hbWU6ICcnLFxyXG4gIGlzU2VsZWN0ZWQ6IGZhbHNlLFxyXG4gIGlzUmV2ZXJzZWQ6IGZhbHNlXHJcbn07XHJcblxyXG5jb25zdCBQYWxldHRlV3JhcHBlciA9IHN0eWxlZC5kaXYuYXR0cnMoe1xyXG4gIGNsYXNzTmFtZTogJ2NvbG9yLXJhbmdlLXBhbGV0dGVfX2lubmVyJ1xyXG59KWBcclxuICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGZsZXgtZ3JvdzogMTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuYDtcclxuXHJcbmNvbnN0IFBhbGV0dGVDb250YWluZXIgPSBzdHlsZWQuZGl2LmF0dHJzKHtcclxuICBjbGFzc05hbWU6ICdjb2xvci1yYW5nZS1wYWxldHRlJ1xyXG59KWBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZ3JvdzogMTtcclxuICBib3JkZXItd2lkdGg6IDFweDtcclxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIGJvcmRlci1jb2xvcjogJHtwcm9wcyA9PiAocHJvcHMuaXNTZWxlY3RlZCA/ICcjRkZGRkZGJyA6ICd0cmFuc3BhcmVudCcpfTtcclxuICBwYWRkaW5nOiA0cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG5gO1xyXG5cclxuY29uc3QgU3R5bGVkQ29sb3JCbG9jayA9IHN0eWxlZC5kaXYuYXR0cnMoe1xyXG4gIGNsYXNzTmFtZTogJ2NvbG9yLXJhbmdlLXBhbGV0dGVfX2Jsb2NrJ1xyXG59KWBcclxuICBmbGV4LWdyb3c6IDE7XHJcbmA7XHJcblxyXG5jb25zdCBDb2xvclBhbGV0dGUgPSAoe2NvbG9ycywgaGVpZ2h0LCBjbGFzc05hbWUsIGlzU2VsZWN0ZWQsIGlzUmV2ZXJzZWR9KSA9PiAoXHJcbiAgPFBhbGV0dGVDb250YWluZXIgY2xhc3NOYW1lPXtjbGFzc05hbWV9IGlzU2VsZWN0ZWQ9e2lzU2VsZWN0ZWR9PlxyXG4gICAgPFBhbGV0dGVXcmFwcGVyIHN0eWxlPXt7aGVpZ2h0LCB0cmFuc2Zvcm06IGBzY2FsZSgke2lzUmV2ZXJzZWQgPyAtMSA6IDF9LCAxKWB9fT5cclxuICAgICAge2NvbG9ycy5tYXAoKGNvbG9yLCBpbmRleCkgPT4gKFxyXG4gICAgICAgIDxTdHlsZWRDb2xvckJsb2NrIGtleT17YCR7Y29sb3J9LSR7aW5kZXh9YH0gc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6IGNvbG9yfX0gLz5cclxuICAgICAgKSl9XHJcbiAgICA8L1BhbGV0dGVXcmFwcGVyPlxyXG4gIDwvUGFsZXR0ZUNvbnRhaW5lcj5cclxuKTtcclxuXHJcbkNvbG9yUGFsZXR0ZS5wcm9wVHlwZXMgPSBwcm9wVHlwZXM7XHJcbkNvbG9yUGFsZXR0ZS5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb2xvclBhbGV0dGU7XHJcbiJdfQ==