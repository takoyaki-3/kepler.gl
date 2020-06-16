"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _icons = require("../../common/icons");

var _styledComponents = require("../../common/styled-components");

var _defaultSettings = require("../../../constants/default-settings");

var _components = require("./components");

var _exportHtmlMap = _interopRequireDefault(require("./export-html-map"));

var _exportJsonMap = _interopRequireDefault(require("./export-json-map"));

var _reactIntl = require("react-intl");

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
var propTypes = {
  options: _propTypes["default"].object,
  onEditUserMapboxAccessToken: _propTypes["default"].func.isRequired,
  onChangeExportData: _propTypes["default"].func,
  onChangeExportMapType: _propTypes["default"].func,
  mapFormat: _propTypes["default"].string
};
var style = {
  width: '100%'
};

var NO_OP = function NO_OP() {};

ExportMapModalFactory.deps = [_exportHtmlMap["default"], _exportJsonMap["default"]];

function ExportMapModalFactory(ExportHtmlMap, ExportJsonMap) {
  var ExportMapModal = /*#__PURE__*/_react["default"].memo(function (_ref) {
    var _EXPORT_MAP_FORMATS$H;

    var _ref$config = _ref.config,
        config = _ref$config === void 0 ? {} : _ref$config,
        _ref$onChangeExportDa = _ref.onChangeExportData,
        onChangeExportData = _ref$onChangeExportDa === void 0 ? NO_OP : _ref$onChangeExportDa,
        _ref$onChangeExportMa = _ref.onChangeExportMapFormat,
        onChangeExportMapFormat = _ref$onChangeExportMa === void 0 ? NO_OP : _ref$onChangeExportMa,
        _ref$onChangeExportMa2 = _ref.onChangeExportMapHTMLMode,
        onChangeExportMapHTMLMode = _ref$onChangeExportMa2 === void 0 ? NO_OP : _ref$onChangeExportMa2,
        _ref$onEditUserMapbox = _ref.onEditUserMapboxAccessToken,
        onEditUserMapboxAccessToken = _ref$onEditUserMapbox === void 0 ? NO_OP : _ref$onEditUserMapbox,
        _ref$options = _ref.options,
        options = _ref$options === void 0 ? {} : _ref$options;
    return /*#__PURE__*/_react["default"].createElement(_styledComponents.StyledModalContent, {
      className: "export-map-modal"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      style: style
    }, /*#__PURE__*/_react["default"].createElement(_components.StyledExportMapSection, null, /*#__PURE__*/_react["default"].createElement("div", {
      className: "description"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "title"
    }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
      id: 'modal.exportMap.formatTitle'
    })), /*#__PURE__*/_react["default"].createElement("div", {
      className: "subtitle"
    }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
      id: 'modal.exportMap.formatSubtitle'
    }))), /*#__PURE__*/_react["default"].createElement("div", {
      className: "selection"
    }, _defaultSettings.EXPORT_MAP_FORMAT_OPTIONS.map(function (op) {
      return /*#__PURE__*/_react["default"].createElement(_styledComponents.StyledType, {
        key: op.id,
        selected: options.format === op.id,
        available: op.available,
        onClick: function onClick() {
          return op.available && onChangeExportMapFormat(op.id);
        }
      }, /*#__PURE__*/_react["default"].createElement(_icons.FileType, {
        ext: op.label,
        height: "80px",
        fontSize: "11px"
      }));
    }))), (_EXPORT_MAP_FORMATS$H = {}, (0, _defineProperty2["default"])(_EXPORT_MAP_FORMATS$H, _defaultSettings.EXPORT_MAP_FORMATS.HTML, /*#__PURE__*/_react["default"].createElement(ExportHtmlMap, {
      onChangeExportMapHTMLMode: onChangeExportMapHTMLMode,
      onEditUserMapboxAccessToken: onEditUserMapboxAccessToken,
      options: options[options.format]
    })), (0, _defineProperty2["default"])(_EXPORT_MAP_FORMATS$H, _defaultSettings.EXPORT_MAP_FORMATS.JSON, /*#__PURE__*/_react["default"].createElement(ExportJsonMap, {
      config: config,
      onChangeExportData: onChangeExportData,
      options: options[options.format]
    })), _EXPORT_MAP_FORMATS$H)[options.format]));
  });

  ExportMapModal.propTypes = propTypes;
  ExportMapModal.displayName = 'ExportMapModal';
  return ExportMapModal;
}

var _default = ExportMapModalFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL21vZGFscy9leHBvcnQtbWFwLW1vZGFsL2V4cG9ydC1tYXAtbW9kYWwuanMiXSwibmFtZXMiOlsicHJvcFR5cGVzIiwib3B0aW9ucyIsIlByb3BUeXBlcyIsIm9iamVjdCIsIm9uRWRpdFVzZXJNYXBib3hBY2Nlc3NUb2tlbiIsImZ1bmMiLCJpc1JlcXVpcmVkIiwib25DaGFuZ2VFeHBvcnREYXRhIiwib25DaGFuZ2VFeHBvcnRNYXBUeXBlIiwibWFwRm9ybWF0Iiwic3RyaW5nIiwic3R5bGUiLCJ3aWR0aCIsIk5PX09QIiwiRXhwb3J0TWFwTW9kYWxGYWN0b3J5IiwiZGVwcyIsIkV4cG9ydEh0bWxNYXBGYWN0b3J5IiwiRXhwb3J0SnNvbk1hcEZhY3RvcnkiLCJFeHBvcnRIdG1sTWFwIiwiRXhwb3J0SnNvbk1hcCIsIkV4cG9ydE1hcE1vZGFsIiwiUmVhY3QiLCJtZW1vIiwiY29uZmlnIiwib25DaGFuZ2VFeHBvcnRNYXBGb3JtYXQiLCJvbkNoYW5nZUV4cG9ydE1hcEhUTUxNb2RlIiwiRVhQT1JUX01BUF9GT1JNQVRfT1BUSU9OUyIsIm1hcCIsIm9wIiwiaWQiLCJmb3JtYXQiLCJhdmFpbGFibGUiLCJsYWJlbCIsIkVYUE9SVF9NQVBfRk9STUFUUyIsIkhUTUwiLCJKU09OIiwiZGlzcGxheU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQTdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWFBLElBQU1BLFNBQVMsR0FBRztBQUNoQkMsRUFBQUEsT0FBTyxFQUFFQyxzQkFBVUMsTUFESDtBQUVoQkMsRUFBQUEsMkJBQTJCLEVBQUVGLHNCQUFVRyxJQUFWLENBQWVDLFVBRjVCO0FB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RixDQVJGO0FBQUEsR0FEcUIsQ0FBdkI7O0FBd0RBVixFQUFBQSxjQUFjLENBQUNwQixTQUFmLEdBQTJCQSxTQUEzQjtBQUVBb0IsRUFBQUEsY0FBYyxDQUFDZ0IsV0FBZixHQUE2QixnQkFBN0I7QUFFQSxTQUFPaEIsY0FBUDtBQUNEOztlQUVjTixxQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMCBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5pbXBvcnQge0ZpbGVUeXBlfSBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9pY29ucyc7XHJcbmltcG9ydCB7U3R5bGVkTW9kYWxDb250ZW50LCBTdHlsZWRUeXBlfSBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9zdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7RVhQT1JUX01BUF9GT1JNQVRTLCBFWFBPUlRfTUFQX0ZPUk1BVF9PUFRJT05TfSBmcm9tICdjb25zdGFudHMvZGVmYXVsdC1zZXR0aW5ncyc7XHJcbmltcG9ydCB7U3R5bGVkRXhwb3J0TWFwU2VjdGlvbn0gZnJvbSAnLi9jb21wb25lbnRzJztcclxuaW1wb3J0IEV4cG9ydEh0bWxNYXBGYWN0b3J5IGZyb20gJy4vZXhwb3J0LWh0bWwtbWFwJztcclxuaW1wb3J0IEV4cG9ydEpzb25NYXBGYWN0b3J5IGZyb20gJy4vZXhwb3J0LWpzb24tbWFwJztcclxuaW1wb3J0IHtGb3JtYXR0ZWRNZXNzYWdlfSBmcm9tICdyZWFjdC1pbnRsJztcclxuXHJcbmNvbnN0IHByb3BUeXBlcyA9IHtcclxuICBvcHRpb25zOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gIG9uRWRpdFVzZXJNYXBib3hBY2Nlc3NUb2tlbjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICBvbkNoYW5nZUV4cG9ydERhdGE6IFByb3BUeXBlcy5mdW5jLFxyXG4gIG9uQ2hhbmdlRXhwb3J0TWFwVHlwZTogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgbWFwRm9ybWF0OiBQcm9wVHlwZXMuc3RyaW5nXHJcbn07XHJcblxyXG5jb25zdCBzdHlsZSA9IHt3aWR0aDogJzEwMCUnfTtcclxuXHJcbmNvbnN0IE5PX09QID0gKCkgPT4ge307XHJcblxyXG5FeHBvcnRNYXBNb2RhbEZhY3RvcnkuZGVwcyA9IFtFeHBvcnRIdG1sTWFwRmFjdG9yeSwgRXhwb3J0SnNvbk1hcEZhY3RvcnldO1xyXG5cclxuZnVuY3Rpb24gRXhwb3J0TWFwTW9kYWxGYWN0b3J5KEV4cG9ydEh0bWxNYXAsIEV4cG9ydEpzb25NYXApIHtcclxuICBjb25zdCBFeHBvcnRNYXBNb2RhbCA9IFJlYWN0Lm1lbW8oXHJcbiAgICAoe1xyXG4gICAgICBjb25maWcgPSB7fSxcclxuICAgICAgb25DaGFuZ2VFeHBvcnREYXRhID0gTk9fT1AsXHJcbiAgICAgIG9uQ2hhbmdlRXhwb3J0TWFwRm9ybWF0ID0gTk9fT1AsXHJcbiAgICAgIG9uQ2hhbmdlRXhwb3J0TWFwSFRNTE1vZGUgPSBOT19PUCxcclxuICAgICAgb25FZGl0VXNlck1hcGJveEFjY2Vzc1Rva2VuID0gTk9fT1AsXHJcbiAgICAgIG9wdGlvbnMgPSB7fVxyXG4gICAgfSkgPT4gKFxyXG4gICAgICA8U3R5bGVkTW9kYWxDb250ZW50IGNsYXNzTmFtZT1cImV4cG9ydC1tYXAtbW9kYWxcIj5cclxuICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZX0+XHJcbiAgICAgICAgICA8U3R5bGVkRXhwb3J0TWFwU2VjdGlvbj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5cclxuICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlIGlkPXsnbW9kYWwuZXhwb3J0TWFwLmZvcm1hdFRpdGxlJ30gLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1YnRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZSBpZD17J21vZGFsLmV4cG9ydE1hcC5mb3JtYXRTdWJ0aXRsZSd9IC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlbGVjdGlvblwiPlxyXG4gICAgICAgICAgICAgIHtFWFBPUlRfTUFQX0ZPUk1BVF9PUFRJT05TLm1hcChvcCA9PiAoXHJcbiAgICAgICAgICAgICAgICA8U3R5bGVkVHlwZVxyXG4gICAgICAgICAgICAgICAgICBrZXk9e29wLmlkfVxyXG4gICAgICAgICAgICAgICAgICBzZWxlY3RlZD17b3B0aW9ucy5mb3JtYXQgPT09IG9wLmlkfVxyXG4gICAgICAgICAgICAgICAgICBhdmFpbGFibGU9e29wLmF2YWlsYWJsZX1cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb3AuYXZhaWxhYmxlICYmIG9uQ2hhbmdlRXhwb3J0TWFwRm9ybWF0KG9wLmlkKX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPEZpbGVUeXBlIGV4dD17b3AubGFiZWx9IGhlaWdodD1cIjgwcHhcIiBmb250U2l6ZT1cIjExcHhcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9TdHlsZWRUeXBlPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvU3R5bGVkRXhwb3J0TWFwU2VjdGlvbj5cclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIFtFWFBPUlRfTUFQX0ZPUk1BVFMuSFRNTF06IChcclxuICAgICAgICAgICAgICAgIDxFeHBvcnRIdG1sTWFwXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlRXhwb3J0TWFwSFRNTE1vZGU9e29uQ2hhbmdlRXhwb3J0TWFwSFRNTE1vZGV9XHJcbiAgICAgICAgICAgICAgICAgIG9uRWRpdFVzZXJNYXBib3hBY2Nlc3NUb2tlbj17b25FZGl0VXNlck1hcGJveEFjY2Vzc1Rva2VufVxyXG4gICAgICAgICAgICAgICAgICBvcHRpb25zPXtvcHRpb25zW29wdGlvbnMuZm9ybWF0XX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICBbRVhQT1JUX01BUF9GT1JNQVRTLkpTT05dOiAoXHJcbiAgICAgICAgICAgICAgICA8RXhwb3J0SnNvbk1hcFxyXG4gICAgICAgICAgICAgICAgICBjb25maWc9e2NvbmZpZ31cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2VFeHBvcnREYXRhPXtvbkNoYW5nZUV4cG9ydERhdGF9XHJcbiAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e29wdGlvbnNbb3B0aW9ucy5mb3JtYXRdfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1bb3B0aW9ucy5mb3JtYXRdXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvU3R5bGVkTW9kYWxDb250ZW50PlxyXG4gICAgKVxyXG4gICk7XHJcblxyXG4gIEV4cG9ydE1hcE1vZGFsLnByb3BUeXBlcyA9IHByb3BUeXBlcztcclxuXHJcbiAgRXhwb3J0TWFwTW9kYWwuZGlzcGxheU5hbWUgPSAnRXhwb3J0TWFwTW9kYWwnO1xyXG5cclxuICByZXR1cm4gRXhwb3J0TWFwTW9kYWw7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEV4cG9ydE1hcE1vZGFsRmFjdG9yeTtcclxuIl19