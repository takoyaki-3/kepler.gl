"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactJsonPretty = _interopRequireDefault(require("react-json-pretty"));

var _userGuides = require("../../../constants/user-guides");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledComponents2 = require("../../common/styled-components");

var _components = require("./components");

var _reactIntl = require("react-intl");

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  .note {\n    color: ", ";\n    font-size: 11px;\n  }\n\n  .viewer {\n    border: 1px solid ", ";\n    background-color: white;\n    border-radius: 2px;\n    display: inline-block;\n    font: inherit;\n    line-height: 1.5em;\n    padding: 0.5em 3.5em 0.5em 1em;\n    margin: 0;\n    box-sizing: border-box;\n    height: 180px;\n    width: 100%;\n    overflow-y: scroll;\n    overflow-x: auto;\n    white-space: pre-wrap;\n    word-wrap: break-word;\n    max-width: 600px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var StyledJsonExportSection = (0, _styledComponents["default"])(_styledComponents2.StyledExportSection)(_templateObject(), function (props) {
  return props.theme.errorColor;
}, function (props) {
  return props.theme.selectBorderColorLT;
});
var exportJsonPropTypes = {
  options: _propTypes["default"].object
};

var ExportJsonMap = /*#__PURE__*/_react["default"].memo(function (_ref) {
  var _ref$config = _ref.config,
      config = _ref$config === void 0 ? {} : _ref$config;
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_components.StyledExportMapSection, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "description"
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "selection"
  }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: 'modal.exportMap.json.selection'
  }))), /*#__PURE__*/_react["default"].createElement(StyledJsonExportSection, {
    className: "export-map-modal__json-options"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "description"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "title"
  }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: 'modal.exportMap.json.configTitle'
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "subtitle"
  }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: 'modal.exportMap.json.configDisclaimer'
  }), /*#__PURE__*/_react["default"].createElement(_components.ExportMapLink, {
    href: _userGuides.ADD_DATA_TO_MAP_DOC
  }, "addDataToMap"), ".")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "selection"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "viewer"
  }, /*#__PURE__*/_react["default"].createElement(_reactJsonPretty["default"], {
    id: "json-pretty",
    json: config
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "disclaimer"
  }, /*#__PURE__*/_react["default"].createElement(_components.StyledWarning, null, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: 'modal.exportMap.json.disclaimer'
  }))))));
});

ExportJsonMap.propTypes = exportJsonPropTypes;
ExportJsonMap.displayName = 'ExportJsonMap';

var ExportJsonMapFactory = function ExportJsonMapFactory() {
  return ExportJsonMap;
};

var _default = ExportJsonMapFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL21vZGFscy9leHBvcnQtbWFwLW1vZGFsL2V4cG9ydC1qc29uLW1hcC5qcyJdLCJuYW1lcyI6WyJTdHlsZWRKc29uRXhwb3J0U2VjdGlvbiIsIlN0eWxlZEV4cG9ydFNlY3Rpb24iLCJwcm9wcyIsInRoZW1lIiwiZXJyb3JDb2xvciIsInNlbGVjdEJvcmRlckNvbG9yTFQiLCJleHBvcnRKc29uUHJvcFR5cGVzIiwib3B0aW9ucyIsIlByb3BUeXBlcyIsIm9iamVjdCIsIkV4cG9ydEpzb25NYXAiLCJSZWFjdCIsIm1lbW8iLCJjb25maWciLCJBRERfREFUQV9UT19NQVBfRE9DIiwicHJvcFR5cGVzIiwiZGlzcGxheU5hbWUiLCJFeHBvcnRKc29uTWFwRmFjdG9yeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLHVCQUF1QixHQUFHLGtDQUFPQyxzQ0FBUCxDQUFILG9CQUVoQixVQUFBQyxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFVBQWhCO0FBQUEsQ0FGVyxFQU9MLFVBQUFGLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUUsbUJBQWhCO0FBQUEsQ0FQQSxDQUE3QjtBQTBCQSxJQUFNQyxtQkFBbUIsR0FBRztBQUMxQkMsRUFBQUEsT0FBTyxFQUFFQyxzQkFBVUM7QUFETyxDQUE1Qjs7QUFJQSxJQUFNQyxhQUFhLGdCQUFHQyxrQkFBTUMsSUFBTixDQUFXO0FBQUEseUJBQUVDLE1BQUY7QUFBQSxNQUFFQSxNQUFGLDRCQUFXLEVBQVg7QUFBQSxzQkFDL0IsMERBQ0UsZ0NBQUMsa0NBQUQscUJBQ0U7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLElBREYsZUFFRTtBQUFLLElBQUEsU0FBUyxFQUFDO0FBQWYsa0JBQ0UsZ0NBQUMsMkJBQUQ7QUFBa0IsSUFBQSxFQUFFLEVBQUU7QUFBdEIsSUFERixDQUZGLENBREYsZUFPRSxnQ0FBQyx1QkFBRDtBQUF5QixJQUFBLFNBQVMsRUFBQztBQUFuQyxrQkFDRTtBQUFLLElBQUEsU0FBUyxFQUFDO0FBQWYsa0JBQ0U7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLGtCQUNFLGdDQUFDLDJCQUFEO0FBQWtCLElBQUEsRUFBRSxFQUFFO0FBQXRCLElBREYsQ0FERixlQUlFO0FBQUssSUFBQSxTQUFTLEVBQUM7QUFBZixrQkFDRSxnQ0FBQywyQkFBRDtBQUFrQixJQUFBLEVBQUUsRUFBRTtBQUF0QixJQURGLGVBRUUsZ0NBQUMseUJBQUQ7QUFBZSxJQUFBLElBQUksRUFBRUM7QUFBckIsb0JBRkYsTUFKRixDQURGLGVBVUU7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLGtCQUNFO0FBQUssSUFBQSxTQUFTLEVBQUM7QUFBZixrQkFDRSxnQ0FBQywyQkFBRDtBQUFZLElBQUEsRUFBRSxFQUFDLGFBQWY7QUFBNkIsSUFBQSxJQUFJLEVBQUVEO0FBQW5DLElBREYsQ0FERixlQUlFO0FBQUssSUFBQSxTQUFTLEVBQUM7QUFBZixrQkFDRSxnQ0FBQyx5QkFBRCxxQkFDRSxnQ0FBQywyQkFBRDtBQUFrQixJQUFBLEVBQUUsRUFBRTtBQUF0QixJQURGLENBREYsQ0FKRixDQVZGLENBUEYsQ0FEK0I7QUFBQSxDQUFYLENBQXRCOztBQWdDQUgsYUFBYSxDQUFDSyxTQUFkLEdBQTBCVCxtQkFBMUI7QUFFQUksYUFBYSxDQUFDTSxXQUFkLEdBQTRCLGVBQTVCOztBQUVBLElBQU1DLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBdUI7QUFBQSxTQUFNUCxhQUFOO0FBQUEsQ0FBN0I7O2VBRWVPLG9CIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IEpTT05QcmV0dHkgZnJvbSAncmVhY3QtanNvbi1wcmV0dHknO1xyXG5pbXBvcnQge0FERF9EQVRBX1RPX01BUF9ET0N9IGZyb20gJ2NvbnN0YW50cy91c2VyLWd1aWRlcyc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQge1N0eWxlZEV4cG9ydFNlY3Rpb259IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHtTdHlsZWRFeHBvcnRNYXBTZWN0aW9uLCBTdHlsZWRXYXJuaW5nLCBFeHBvcnRNYXBMaW5rfSBmcm9tICcuL2NvbXBvbmVudHMnO1xyXG5pbXBvcnQge0Zvcm1hdHRlZE1lc3NhZ2V9IGZyb20gJ3JlYWN0LWludGwnO1xyXG5cclxuY29uc3QgU3R5bGVkSnNvbkV4cG9ydFNlY3Rpb24gPSBzdHlsZWQoU3R5bGVkRXhwb3J0U2VjdGlvbilgXHJcbiAgLm5vdGUge1xyXG4gICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuZXJyb3JDb2xvcn07XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgfVxyXG5cclxuICAudmlld2VyIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc2VsZWN0Qm9yZGVyQ29sb3JMVH07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZvbnQ6IGluaGVyaXQ7XHJcbiAgICBsaW5lLWhlaWdodDogMS41ZW07XHJcbiAgICBwYWRkaW5nOiAwLjVlbSAzLjVlbSAwLjVlbSAxZW07XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgaGVpZ2h0OiAxODBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gICAgb3ZlcmZsb3cteDogYXV0bztcclxuICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcclxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICAgIG1heC13aWR0aDogNjAwcHg7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgZXhwb3J0SnNvblByb3BUeXBlcyA9IHtcclxuICBvcHRpb25zOiBQcm9wVHlwZXMub2JqZWN0XHJcbn07XHJcblxyXG5jb25zdCBFeHBvcnRKc29uTWFwID0gUmVhY3QubWVtbygoe2NvbmZpZyA9IHt9fSkgPT4gKFxyXG4gIDxkaXY+XHJcbiAgICA8U3R5bGVkRXhwb3J0TWFwU2VjdGlvbj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiIC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VsZWN0aW9uXCI+XHJcbiAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2UgaWQ9eydtb2RhbC5leHBvcnRNYXAuanNvbi5zZWxlY3Rpb24nfSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvU3R5bGVkRXhwb3J0TWFwU2VjdGlvbj5cclxuICAgIDxTdHlsZWRKc29uRXhwb3J0U2VjdGlvbiBjbGFzc05hbWU9XCJleHBvcnQtbWFwLW1vZGFsX19qc29uLW9wdGlvbnNcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5cclxuICAgICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlIGlkPXsnbW9kYWwuZXhwb3J0TWFwLmpzb24uY29uZmlnVGl0bGUnfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VidGl0bGVcIj5cclxuICAgICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlIGlkPXsnbW9kYWwuZXhwb3J0TWFwLmpzb24uY29uZmlnRGlzY2xhaW1lcid9IC8+XHJcbiAgICAgICAgICA8RXhwb3J0TWFwTGluayBocmVmPXtBRERfREFUQV9UT19NQVBfRE9DfT5hZGREYXRhVG9NYXA8L0V4cG9ydE1hcExpbms+LlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWxlY3Rpb25cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpZXdlclwiPlxyXG4gICAgICAgICAgPEpTT05QcmV0dHkgaWQ9XCJqc29uLXByZXR0eVwiIGpzb249e2NvbmZpZ30gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpc2NsYWltZXJcIj5cclxuICAgICAgICAgIDxTdHlsZWRXYXJuaW5nPlxyXG4gICAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZSBpZD17J21vZGFsLmV4cG9ydE1hcC5qc29uLmRpc2NsYWltZXInfSAvPlxyXG4gICAgICAgICAgPC9TdHlsZWRXYXJuaW5nPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvU3R5bGVkSnNvbkV4cG9ydFNlY3Rpb24+XHJcbiAgPC9kaXY+XHJcbikpO1xyXG5cclxuRXhwb3J0SnNvbk1hcC5wcm9wVHlwZXMgPSBleHBvcnRKc29uUHJvcFR5cGVzO1xyXG5cclxuRXhwb3J0SnNvbk1hcC5kaXNwbGF5TmFtZSA9ICdFeHBvcnRKc29uTWFwJztcclxuXHJcbmNvbnN0IEV4cG9ydEpzb25NYXBGYWN0b3J5ID0gKCkgPT4gRXhwb3J0SnNvbk1hcDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEV4cG9ydEpzb25NYXBGYWN0b3J5O1xyXG4iXX0=