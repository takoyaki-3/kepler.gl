"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = require("../../common/styled-components");

var _components = require("./components");

var _defaultSettings = require("../../../constants/default-settings");

var _userGuides = require("../../../constants/user-guides");

var _styledComponents2 = _interopRequireDefault(require("styled-components"));

var _reactIntl = require("react-intl");

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  height: unset;\n  width: unset;\n  img {\n    width: 180px;\n    height: 120px;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  width: 100%;\n  padding: ", ";\n  color: ", ";\n  height: ", ";\n  outline: 0;\n  font-size: ", ";\n\n  :active,\n  :focus,\n  &.focus,\n  &.active {\n    outline: 0;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  .disclaimer {\n    font-size: ", ";\n    color: ", ";\n    margin-top: 12px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var NO_OP = function NO_OP() {};

var ExportMapStyledExportSection = (0, _styledComponents2["default"])(_styledComponents.StyledExportSection)(_templateObject(), function (props) {
  return props.theme.inputFontSize;
}, function (props) {
  return props.theme.inputColor;
});

var StyledInput = _styledComponents2["default"].input(_templateObject2(), function (props) {
  return props.theme.inputPadding;
}, function (props) {
  return props.error ? 'red' : props.theme.titleColorLT;
}, function (props) {
  return props.theme.inputBoxHeight;
}, function (props) {
  return props.theme.inputFontSize;
});

var BigStyledTile = (0, _styledComponents2["default"])(_styledComponents.StyledType)(_templateObject3());
var exportHtmlPropTypes = {
  options: _propTypes["default"].object,
  onEditUserMapboxAccessToken: _propTypes["default"].func.isRequired
};

var ExportHtmlMap = /*#__PURE__*/_react["default"].memo(function (_ref) {
  var _ref$onChangeExportMa = _ref.onChangeExportMapHTMLMode,
      onChangeExportMapHTMLMode = _ref$onChangeExportMa === void 0 ? NO_OP : _ref$onChangeExportMa,
      _ref$onEditUserMapbox = _ref.onEditUserMapboxAccessToken,
      onEditUserMapboxAccessToken = _ref$onEditUserMapbox === void 0 ? NO_OP : _ref$onEditUserMapbox,
      _ref$options = _ref.options,
      options = _ref$options === void 0 ? {} : _ref$options,
      intl = _ref.intl;
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_components.StyledExportMapSection, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "description"
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "selection"
  }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: 'modal.exportMap.html.selection'
  }))), /*#__PURE__*/_react["default"].createElement(ExportMapStyledExportSection, {
    className: "export-map-modal__html-options"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "description"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "title"
  }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: 'modal.exportMap.html.tokenTitle'
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "subtitle"
  }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: 'modal.exportMap.html.tokenSubtitle'
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "selection"
  }, /*#__PURE__*/_react["default"].createElement(StyledInput, {
    onChange: function onChange(e) {
      return onEditUserMapboxAccessToken(e.target.value);
    },
    type: "text",
    placeholder: intl.formatMessage({
      id: 'modal.exportMap.html.tokenPlaceholder'
    }),
    value: options ? options.userMapboxToken : ''
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "disclaimer"
  }, /*#__PURE__*/_react["default"].createElement(_components.StyledWarning, null, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: 'modal.exportMap.html.tokenMisuseWarning'
  })), /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: 'modal.exportMap.html.tokenDisclaimer'
  }), /*#__PURE__*/_react["default"].createElement(_components.ExportMapLink, {
    href: _userGuides.EXPORT_HTML_MAP_DOC
  }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: 'modal.exportMap.html.tokenUpdate'
  }))))), /*#__PURE__*/_react["default"].createElement(ExportMapStyledExportSection, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "description"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "title"
  }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: 'modal.exportMap.html.modeTitle'
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "subtitle"
  }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: 'modal.exportMap.html.modeSubtitle1'
  }), /*#__PURE__*/_react["default"].createElement("a", {
    href: _userGuides.EXPORT_HTML_MAP_MODES_DOC
  }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: 'modal.exportMap.html.modeSubtitle2'
  })))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "selection"
  }, _defaultSettings.EXPORT_HTML_MAP_MODE_OPTIONS.map(function (mode) {
    return /*#__PURE__*/_react["default"].createElement(BigStyledTile, {
      key: mode.id,
      selected: options.mode === mode.id,
      available: mode.available,
      onClick: function onClick() {
        return mode.available && onChangeExportMapHTMLMode(mode.id);
      }
    }, /*#__PURE__*/_react["default"].createElement("img", {
      src: mode.url,
      alt: ""
    }), /*#__PURE__*/_react["default"].createElement("p", null, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
      id: 'modal.exportMap.html.modeDescription',
      values: {
        mode: intl.formatMessage({
          id: mode.label
        })
      }
    })));
  }))));
});

ExportHtmlMap.propTypes = exportHtmlPropTypes;
ExportHtmlMap.displayName = 'ExportHtmlMap';

var ExportHtmlMapFactory = function ExportHtmlMapFactory() {
  return (0, _reactIntl.injectIntl)(ExportHtmlMap);
};

var _default = ExportHtmlMapFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL21vZGFscy9leHBvcnQtbWFwLW1vZGFsL2V4cG9ydC1odG1sLW1hcC5qcyJdLCJuYW1lcyI6WyJOT19PUCIsIkV4cG9ydE1hcFN0eWxlZEV4cG9ydFNlY3Rpb24iLCJTdHlsZWRFeHBvcnRTZWN0aW9uIiwicHJvcHMiLCJ0aGVtZSIsImlucHV0Rm9udFNpemUiLCJpbnB1dENvbG9yIiwiU3R5bGVkSW5wdXQiLCJzdHlsZWQiLCJpbnB1dCIsImlucHV0UGFkZGluZyIsImVycm9yIiwidGl0bGVDb2xvckxUIiwiaW5wdXRCb3hIZWlnaHQiLCJCaWdTdHlsZWRUaWxlIiwiU3R5bGVkVHlwZSIsImV4cG9ydEh0bWxQcm9wVHlwZXMiLCJvcHRpb25zIiwiUHJvcFR5cGVzIiwib2JqZWN0Iiwib25FZGl0VXNlck1hcGJveEFjY2Vzc1Rva2VuIiwiZnVuYyIsImlzUmVxdWlyZWQiLCJFeHBvcnRIdG1sTWFwIiwiUmVhY3QiLCJtZW1vIiwib25DaGFuZ2VFeHBvcnRNYXBIVE1MTW9kZSIsImludGwiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJmb3JtYXRNZXNzYWdlIiwiaWQiLCJ1c2VyTWFwYm94VG9rZW4iLCJFWFBPUlRfSFRNTF9NQVBfRE9DIiwiRVhQT1JUX0hUTUxfTUFQX01PREVTX0RPQyIsIkVYUE9SVF9IVE1MX01BUF9NT0RFX09QVElPTlMiLCJtYXAiLCJtb2RlIiwiYXZhaWxhYmxlIiwidXJsIiwibGFiZWwiLCJwcm9wVHlwZXMiLCJkaXNwbGF5TmFtZSIsIkV4cG9ydEh0bWxNYXBGYWN0b3J5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFNLENBQUUsQ0FBdEI7O0FBRUEsSUFBTUMsNEJBQTRCLEdBQUcs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QUFFLEVBQUVNLElBQUksQ0FBQ0c7QUFBVixTQUFuQjtBQUFQO0FBRlYsTUFERixDQVBGLENBRG9DO0FBQUEsR0FBckMsQ0FESCxDQVpGLENBbENGLENBTkY7QUFBQSxDQURvQixDQUF0Qjs7QUE0RUFsQixhQUFhLENBQUNtQixTQUFkLEdBQTBCMUIsbUJBQTFCO0FBRUFPLGFBQWEsQ0FBQ29CLFdBQWQsR0FBNEIsZUFBNUI7O0FBRUEsSUFBTUMsb0JBQW9CLEdBQUcsU0FBdkJBLG9CQUF1QjtBQUFBLFNBQU0sMkJBQVdyQixhQUFYLENBQU47QUFBQSxDQUE3Qjs7ZUFFZXFCLG9CIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHtTdHlsZWRFeHBvcnRTZWN0aW9uLCBTdHlsZWRUeXBlfSBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9zdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7U3R5bGVkRXhwb3J0TWFwU2VjdGlvbiwgU3R5bGVkV2FybmluZywgRXhwb3J0TWFwTGlua30gZnJvbSAnLi9jb21wb25lbnRzJztcclxuaW1wb3J0IHtFWFBPUlRfSFRNTF9NQVBfTU9ERV9PUFRJT05TfSBmcm9tICdjb25zdGFudHMvZGVmYXVsdC1zZXR0aW5ncyc7XHJcbmltcG9ydCB7RVhQT1JUX0hUTUxfTUFQX0RPQywgRVhQT1JUX0hUTUxfTUFQX01PREVTX0RPQ30gZnJvbSAnY29uc3RhbnRzL3VzZXItZ3VpZGVzJztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7Rm9ybWF0dGVkTWVzc2FnZSwgaW5qZWN0SW50bH0gZnJvbSAncmVhY3QtaW50bCc7XHJcblxyXG5jb25zdCBOT19PUCA9ICgpID0+IHt9O1xyXG5cclxuY29uc3QgRXhwb3J0TWFwU3R5bGVkRXhwb3J0U2VjdGlvbiA9IHN0eWxlZChTdHlsZWRFeHBvcnRTZWN0aW9uKWBcclxuICAuZGlzY2xhaW1lciB7XHJcbiAgICBmb250LXNpemU6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuaW5wdXRGb250U2l6ZX07XHJcbiAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5pbnB1dENvbG9yfTtcclxuICAgIG1hcmdpbi10b3A6IDEycHg7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgU3R5bGVkSW5wdXQgPSBzdHlsZWQuaW5wdXRgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5pbnB1dFBhZGRpbmd9O1xyXG4gIGNvbG9yOiAke3Byb3BzID0+IChwcm9wcy5lcnJvciA/ICdyZWQnIDogcHJvcHMudGhlbWUudGl0bGVDb2xvckxUKX07XHJcbiAgaGVpZ2h0OiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmlucHV0Qm94SGVpZ2h0fTtcclxuICBvdXRsaW5lOiAwO1xyXG4gIGZvbnQtc2l6ZTogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5pbnB1dEZvbnRTaXplfTtcclxuXHJcbiAgOmFjdGl2ZSxcclxuICA6Zm9jdXMsXHJcbiAgJi5mb2N1cyxcclxuICAmLmFjdGl2ZSB7XHJcbiAgICBvdXRsaW5lOiAwO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IEJpZ1N0eWxlZFRpbGUgPSBzdHlsZWQoU3R5bGVkVHlwZSlgXHJcbiAgaGVpZ2h0OiB1bnNldDtcclxuICB3aWR0aDogdW5zZXQ7XHJcbiAgaW1nIHtcclxuICAgIHdpZHRoOiAxODBweDtcclxuICAgIGhlaWdodDogMTIwcHg7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgZXhwb3J0SHRtbFByb3BUeXBlcyA9IHtcclxuICBvcHRpb25zOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gIG9uRWRpdFVzZXJNYXBib3hBY2Nlc3NUb2tlbjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxyXG59O1xyXG5cclxuY29uc3QgRXhwb3J0SHRtbE1hcCA9IFJlYWN0Lm1lbW8oXHJcbiAgKHtcclxuICAgIG9uQ2hhbmdlRXhwb3J0TWFwSFRNTE1vZGUgPSBOT19PUCxcclxuICAgIG9uRWRpdFVzZXJNYXBib3hBY2Nlc3NUb2tlbiA9IE5PX09QLFxyXG4gICAgb3B0aW9ucyA9IHt9LFxyXG4gICAgaW50bFxyXG4gIH0pID0+IChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxTdHlsZWRFeHBvcnRNYXBTZWN0aW9uPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIiAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VsZWN0aW9uXCI+XHJcbiAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZSBpZD17J21vZGFsLmV4cG9ydE1hcC5odG1sLnNlbGVjdGlvbid9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvU3R5bGVkRXhwb3J0TWFwU2VjdGlvbj5cclxuICAgICAgPEV4cG9ydE1hcFN0eWxlZEV4cG9ydFNlY3Rpb24gY2xhc3NOYW1lPVwiZXhwb3J0LW1hcC1tb2RhbF9faHRtbC1vcHRpb25zXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPlxyXG4gICAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZSBpZD17J21vZGFsLmV4cG9ydE1hcC5odG1sLnRva2VuVGl0bGUnfSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1YnRpdGxlXCI+XHJcbiAgICAgICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlIGlkPXsnbW9kYWwuZXhwb3J0TWFwLmh0bWwudG9rZW5TdWJ0aXRsZSd9IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlbGVjdGlvblwiPlxyXG4gICAgICAgICAgPFN0eWxlZElucHV0XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IG9uRWRpdFVzZXJNYXBib3hBY2Nlc3NUb2tlbihlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2ludGwuZm9ybWF0TWVzc2FnZSh7aWQ6ICdtb2RhbC5leHBvcnRNYXAuaHRtbC50b2tlblBsYWNlaG9sZGVyJ30pfVxyXG4gICAgICAgICAgICB2YWx1ZT17b3B0aW9ucyA/IG9wdGlvbnMudXNlck1hcGJveFRva2VuIDogJyd9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXNjbGFpbWVyXCI+XHJcbiAgICAgICAgICAgIDxTdHlsZWRXYXJuaW5nPlxyXG4gICAgICAgICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlIGlkPXsnbW9kYWwuZXhwb3J0TWFwLmh0bWwudG9rZW5NaXN1c2VXYXJuaW5nJ30gLz5cclxuICAgICAgICAgICAgPC9TdHlsZWRXYXJuaW5nPlxyXG4gICAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZSBpZD17J21vZGFsLmV4cG9ydE1hcC5odG1sLnRva2VuRGlzY2xhaW1lcid9IC8+XHJcbiAgICAgICAgICAgIDxFeHBvcnRNYXBMaW5rIGhyZWY9e0VYUE9SVF9IVE1MX01BUF9ET0N9PlxyXG4gICAgICAgICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlIGlkPXsnbW9kYWwuZXhwb3J0TWFwLmh0bWwudG9rZW5VcGRhdGUnfSAvPlxyXG4gICAgICAgICAgICA8L0V4cG9ydE1hcExpbms+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9FeHBvcnRNYXBTdHlsZWRFeHBvcnRTZWN0aW9uPlxyXG4gICAgICA8RXhwb3J0TWFwU3R5bGVkRXhwb3J0U2VjdGlvbj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+XHJcbiAgICAgICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlIGlkPXsnbW9kYWwuZXhwb3J0TWFwLmh0bWwubW9kZVRpdGxlJ30gLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWJ0aXRsZVwiPlxyXG4gICAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZSBpZD17J21vZGFsLmV4cG9ydE1hcC5odG1sLm1vZGVTdWJ0aXRsZTEnfSAvPlxyXG4gICAgICAgICAgICA8YSBocmVmPXtFWFBPUlRfSFRNTF9NQVBfTU9ERVNfRE9DfT5cclxuICAgICAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZSBpZD17J21vZGFsLmV4cG9ydE1hcC5odG1sLm1vZGVTdWJ0aXRsZTInfSAvPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlbGVjdGlvblwiPlxyXG4gICAgICAgICAge0VYUE9SVF9IVE1MX01BUF9NT0RFX09QVElPTlMubWFwKG1vZGUgPT4gKFxyXG4gICAgICAgICAgICA8QmlnU3R5bGVkVGlsZVxyXG4gICAgICAgICAgICAgIGtleT17bW9kZS5pZH1cclxuICAgICAgICAgICAgICBzZWxlY3RlZD17b3B0aW9ucy5tb2RlID09PSBtb2RlLmlkfVxyXG4gICAgICAgICAgICAgIGF2YWlsYWJsZT17bW9kZS5hdmFpbGFibGV9XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gbW9kZS5hdmFpbGFibGUgJiYgb25DaGFuZ2VFeHBvcnRNYXBIVE1MTW9kZShtb2RlLmlkKX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPXttb2RlLnVybH0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlXHJcbiAgICAgICAgICAgICAgICAgIGlkPXsnbW9kYWwuZXhwb3J0TWFwLmh0bWwubW9kZURlc2NyaXB0aW9uJ31cclxuICAgICAgICAgICAgICAgICAgdmFsdWVzPXt7bW9kZTogaW50bC5mb3JtYXRNZXNzYWdlKHtpZDogbW9kZS5sYWJlbH0pfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8L0JpZ1N0eWxlZFRpbGU+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9FeHBvcnRNYXBTdHlsZWRFeHBvcnRTZWN0aW9uPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG4pO1xyXG5cclxuRXhwb3J0SHRtbE1hcC5wcm9wVHlwZXMgPSBleHBvcnRIdG1sUHJvcFR5cGVzO1xyXG5cclxuRXhwb3J0SHRtbE1hcC5kaXNwbGF5TmFtZSA9ICdFeHBvcnRIdG1sTWFwJztcclxuXHJcbmNvbnN0IEV4cG9ydEh0bWxNYXBGYWN0b3J5ID0gKCkgPT4gaW5qZWN0SW50bChFeHBvcnRIdG1sTWFwKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEV4cG9ydEh0bWxNYXBGYWN0b3J5O1xyXG4iXX0=