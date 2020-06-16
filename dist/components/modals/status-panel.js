"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.UploadAnimation = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _icons = require("../common/icons");

var _styledComponents2 = require("../common/styled-components");

var _errorDisplay = _interopRequireDefault(require("./error-display"));

var _reactIntl = require("react-intl");

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  margin-right: 16px;\n\n  line {\n    stroke: ", ";\n    stroke-width: 4;\n    stroke-linecap: square;\n    stroke-dasharray: 5 12;\n    animation: dash-animation 25s infinite linear;\n  }\n  circle {\n    fill: ", ";\n  }\n\n  @keyframes dash-animation {\n    to {\n      stroke-dashoffset: -1000;\n    }\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  color: ", ";\n  margin-right: 16px;\n  margin-top: 4px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var StyledUploader = _styledComponents["default"].div(_templateObject());

var StyledMapIcon = _styledComponents["default"].div(_templateObject2(), function (props) {
  return props.theme.textColorLT;
});

var StyledSvg = _styledComponents["default"].svg(_templateObject3(), function (props) {
  return props.theme.selectBorderColorLT;
}, function (props) {
  return props.theme.selectBorderColorLT;
});

var Line = function Line() {
  return /*#__PURE__*/_react["default"].createElement(StyledSvg, {
    height: "5px",
    width: "150px"
  }, /*#__PURE__*/_react["default"].createElement("line", {
    x1: "0",
    y1: "4",
    x2: "150",
    y2: "4"
  }));
};

var UploadAnimation = function UploadAnimation(props) {
  return /*#__PURE__*/_react["default"].createElement(StyledUploader, null, /*#__PURE__*/_react["default"].createElement(StyledMapIcon, null, /*#__PURE__*/_react["default"].createElement(_icons.MapIcon, {
    height: "48px"
  })), /*#__PURE__*/_react["default"].createElement(Line, null), props.icon && /*#__PURE__*/_react["default"].createElement(props.icon, {
    height: "64px"
  }));
};

exports.UploadAnimation = UploadAnimation;

var StatusPanel = function StatusPanel(_ref) {
  var error = _ref.error,
      isLoading = _ref.isLoading,
      providerIcon = _ref.providerIcon;
  return /*#__PURE__*/_react["default"].createElement(_styledComponents2.StyledExportSection, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "description"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "title"
  }, isLoading ? /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: 'modal.statusPanel.mapUploading'
  }) : error ? /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: 'modal.statusPanel.error'
  }) : null)), /*#__PURE__*/_react["default"].createElement("div", {
    className: "selection"
  }, isLoading && /*#__PURE__*/_react["default"].createElement(UploadAnimation, {
    icon: providerIcon
  }), error && /*#__PURE__*/_react["default"].createElement(_errorDisplay["default"], {
    error: error
  })));
};

var _default = StatusPanel;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL21vZGFscy9zdGF0dXMtcGFuZWwuanMiXSwibmFtZXMiOlsiU3R5bGVkVXBsb2FkZXIiLCJzdHlsZWQiLCJkaXYiLCJTdHlsZWRNYXBJY29uIiwicHJvcHMiLCJ0aGVtZSIsInRleHRDb2xvckxUIiwiU3R5bGVkU3ZnIiwic3ZnIiwic2VsZWN0Qm9yZGVyQ29sb3JMVCIsIkxpbmUiLCJVcGxvYWRBbmltYXRpb24iLCJpY29uIiwiU3RhdHVzUGFuZWwiLCJlcnJvciIsImlzTG9hZGluZyIsInByb3ZpZGVySWNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsY0FBYyxHQUFHQyw2QkFBT0MsR0FBVixtQkFBcEI7O0FBTUEsSUFBTUMsYUFBYSxHQUFHRiw2QkFBT0MsR0FBVixxQkFDUixVQUFBRSxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQWhCO0FBQUEsQ0FERyxDQUFuQjs7QUFNQSxJQUFNQyxTQUFTLEdBQUdOLDZCQUFPTyxHQUFWLHFCQUlELFVBQUFKLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUksbUJBQWhCO0FBQUEsQ0FKSixFQVdILFVBQUFMLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUksbUJBQWhCO0FBQUEsQ0FYRixDQUFmOztBQXFCQSxJQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBTztBQUFBLHNCQUNYLGdDQUFDLFNBQUQ7QUFBVyxJQUFBLE1BQU0sRUFBQyxLQUFsQjtBQUF3QixJQUFBLEtBQUssRUFBQztBQUE5QixrQkFDRTtBQUFNLElBQUEsRUFBRSxFQUFDLEdBQVQ7QUFBYSxJQUFBLEVBQUUsRUFBQyxHQUFoQjtBQUFvQixJQUFBLEVBQUUsRUFBQyxLQUF2QjtBQUE2QixJQUFBLEVBQUUsRUFBQztBQUFoQyxJQURGLENBRFc7QUFBQSxDQUFiOztBQU1PLElBQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQVAsS0FBSztBQUFBLHNCQUNsQyxnQ0FBQyxjQUFELHFCQUNFLGdDQUFDLGFBQUQscUJBQ0UsZ0NBQUMsY0FBRDtBQUFTLElBQUEsTUFBTSxFQUFDO0FBQWhCLElBREYsQ0FERixlQUlFLGdDQUFDLElBQUQsT0FKRixFQUtHQSxLQUFLLENBQUNRLElBQU4saUJBQWMsZ0NBQUMsS0FBRCxDQUFPLElBQVA7QUFBWSxJQUFBLE1BQU0sRUFBQztBQUFuQixJQUxqQixDQURrQztBQUFBLENBQTdCOzs7O0FBVVAsSUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWM7QUFBQSxNQUFFQyxLQUFGLFFBQUVBLEtBQUY7QUFBQSxNQUFTQyxTQUFULFFBQVNBLFNBQVQ7QUFBQSxNQUFvQkMsWUFBcEIsUUFBb0JBLFlBQXBCO0FBQUEsc0JBQ2xCLGdDQUFDLHNDQUFELHFCQUNFO0FBQUssSUFBQSxTQUFTLEVBQUM7QUFBZixrQkFDRTtBQUFLLElBQUEsU0FBUyxFQUFDO0FBQWYsS0FDR0QsU0FBUyxnQkFDUixnQ0FBQywyQkFBRDtBQUFrQixJQUFBLEVBQUUsRUFBRTtBQUF0QixJQURRLEdBRU5ELEtBQUssZ0JBQ1AsZ0NBQUMsMkJBQUQ7QUFBa0IsSUFBQSxFQUFFLEVBQUU7QUFBdEIsSUFETyxHQUVMLElBTE4sQ0FERixDQURGLGVBVUU7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLEtBQ0dDLFNBQVMsaUJBQUksZ0NBQUMsZUFBRDtBQUFpQixJQUFBLElBQUksRUFBRUM7QUFBdkIsSUFEaEIsRUFFR0YsS0FBSyxpQkFBSSxnQ0FBQyx3QkFBRDtBQUFjLElBQUEsS0FBSyxFQUFFQTtBQUFyQixJQUZaLENBVkYsQ0FEa0I7QUFBQSxDQUFwQjs7ZUFrQmVELFciLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHtNYXBJY29ufSBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9pY29ucyc7XHJcbmltcG9ydCB7U3R5bGVkRXhwb3J0U2VjdGlvbn0gZnJvbSAnY29tcG9uZW50cy9jb21tb24vc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgRXJyb3JEaXNwbGF5IGZyb20gJy4vZXJyb3ItZGlzcGxheSc7XHJcbmltcG9ydCB7Rm9ybWF0dGVkTWVzc2FnZX0gZnJvbSAncmVhY3QtaW50bCc7XHJcblxyXG5jb25zdCBTdHlsZWRVcGxvYWRlciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuYDtcclxuXHJcbmNvbnN0IFN0eWxlZE1hcEljb24gPSBzdHlsZWQuZGl2YFxyXG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRleHRDb2xvckxUfTtcclxuICBtYXJnaW4tcmlnaHQ6IDE2cHg7XHJcbiAgbWFyZ2luLXRvcDogNHB4O1xyXG5gO1xyXG5cclxuY29uc3QgU3R5bGVkU3ZnID0gc3R5bGVkLnN2Z2BcclxuICBtYXJnaW4tcmlnaHQ6IDE2cHg7XHJcblxyXG4gIGxpbmUge1xyXG4gICAgc3Ryb2tlOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnNlbGVjdEJvcmRlckNvbG9yTFR9O1xyXG4gICAgc3Ryb2tlLXdpZHRoOiA0O1xyXG4gICAgc3Ryb2tlLWxpbmVjYXA6IHNxdWFyZTtcclxuICAgIHN0cm9rZS1kYXNoYXJyYXk6IDUgMTI7XHJcbiAgICBhbmltYXRpb246IGRhc2gtYW5pbWF0aW9uIDI1cyBpbmZpbml0ZSBsaW5lYXI7XHJcbiAgfVxyXG4gIGNpcmNsZSB7XHJcbiAgICBmaWxsOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnNlbGVjdEJvcmRlckNvbG9yTFR9O1xyXG4gIH1cclxuXHJcbiAgQGtleWZyYW1lcyBkYXNoLWFuaW1hdGlvbiB7XHJcbiAgICB0byB7XHJcbiAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAtMTAwMDtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBMaW5lID0gKCkgPT4gKFxyXG4gIDxTdHlsZWRTdmcgaGVpZ2h0PVwiNXB4XCIgd2lkdGg9XCIxNTBweFwiPlxyXG4gICAgPGxpbmUgeDE9XCIwXCIgeTE9XCI0XCIgeDI9XCIxNTBcIiB5Mj1cIjRcIiAvPlxyXG4gIDwvU3R5bGVkU3ZnPlxyXG4pO1xyXG5cclxuZXhwb3J0IGNvbnN0IFVwbG9hZEFuaW1hdGlvbiA9IHByb3BzID0+IChcclxuICA8U3R5bGVkVXBsb2FkZXI+XHJcbiAgICA8U3R5bGVkTWFwSWNvbj5cclxuICAgICAgPE1hcEljb24gaGVpZ2h0PVwiNDhweFwiIC8+XHJcbiAgICA8L1N0eWxlZE1hcEljb24+XHJcbiAgICA8TGluZSAvPlxyXG4gICAge3Byb3BzLmljb24gJiYgPHByb3BzLmljb24gaGVpZ2h0PVwiNjRweFwiIC8+fVxyXG4gIDwvU3R5bGVkVXBsb2FkZXI+XHJcbik7XHJcblxyXG5jb25zdCBTdGF0dXNQYW5lbCA9ICh7ZXJyb3IsIGlzTG9hZGluZywgcHJvdmlkZXJJY29ufSkgPT4gKFxyXG4gIDxTdHlsZWRFeHBvcnRTZWN0aW9uPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+XHJcbiAgICAgICAge2lzTG9hZGluZyA/IChcclxuICAgICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlIGlkPXsnbW9kYWwuc3RhdHVzUGFuZWwubWFwVXBsb2FkaW5nJ30gLz5cclxuICAgICAgICApIDogZXJyb3IgPyAoXHJcbiAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZSBpZD17J21vZGFsLnN0YXR1c1BhbmVsLmVycm9yJ30gLz5cclxuICAgICAgICApIDogbnVsbH1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwic2VsZWN0aW9uXCI+XHJcbiAgICAgIHtpc0xvYWRpbmcgJiYgPFVwbG9hZEFuaW1hdGlvbiBpY29uPXtwcm92aWRlckljb259IC8+fVxyXG4gICAgICB7ZXJyb3IgJiYgPEVycm9yRGlzcGxheSBlcnJvcj17ZXJyb3J9IC8+fVxyXG4gICAgPC9kaXY+XHJcbiAgPC9TdHlsZWRFeHBvcnRTZWN0aW9uPlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3RhdHVzUGFuZWw7XHJcbiJdfQ==