"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = require("../../common/styled-components");

var _filterPanelHeader = _interopRequireDefault(require("../../side-panel/filter-panel/filter-panel-header"));

var _fieldSelector = _interopRequireDefault(require("../../common/field-selector"));

var _panelHeaderAction = _interopRequireDefault(require("../../side-panel/panel-header-action"));

var _sourceDataSelector = _interopRequireDefault(require("../../side-panel/common/source-data-selector"));

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
FieldPanelWithFieldSelectFactory.deps = [_filterPanelHeader["default"], _sourceDataSelector["default"]];

function FieldPanelWithFieldSelectFactory(FilterPanelHeader, SourceDataSelector) {
  var FilterPanelWithFieldSelect = /*#__PURE__*/_react["default"].memo(function (_ref) {
    var allAvailableFields = _ref.allAvailableFields,
        children = _ref.children,
        datasets = _ref.datasets,
        filter = _ref.filter,
        idx = _ref.idx,
        removeFilter = _ref.removeFilter,
        setFilter = _ref.setFilter,
        _ref$panelActions = _ref.panelActions,
        panelActions = _ref$panelActions === void 0 ? [] : _ref$panelActions;
    var onFieldSelector = (0, _react.useCallback)(function (field) {
      return setFilter(idx, 'name', field.name);
    }, [idx, setFilter]);
    var onSourceDataSelector = (0, _react.useCallback)(function (value) {
      return setFilter(idx, 'dataId', [value]);
    }, [idx, setFilter]);
    var fieldValue = (0, _react.useMemo)(function () {
      return Array.isArray(filter.name) ? filter.name[0] : filter.name;
    }, [filter.name]);
    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(FilterPanelHeader, {
      datasets: [datasets[filter.dataId[0]]],
      allAvailableFields: allAvailableFields,
      idx: idx,
      filter: filter,
      removeFilter: removeFilter
    }, /*#__PURE__*/_react["default"].createElement(_fieldSelector["default"], {
      inputTheme: "secondary",
      fields: allAvailableFields,
      value: fieldValue,
      erasable: false,
      onSelect: onFieldSelector
    }), panelActions && panelActions.map(function (panelAction) {
      return /*#__PURE__*/_react["default"].createElement(_panelHeaderAction["default"], {
        id: panelAction.id,
        key: panelAction.id,
        onClick: panelAction.onClick,
        tooltip: panelAction.tooltip,
        IconComponent: panelAction.iconComponent,
        active: panelAction.active
      });
    })), /*#__PURE__*/_react["default"].createElement(_styledComponents.StyledFilterContent, {
      className: "filter-panel__content"
    }, Object.keys(datasets).length > 1 && /*#__PURE__*/_react["default"].createElement(SourceDataSelector, {
      inputTheme: "secondary",
      datasets: datasets,
      disabled: filter.freeze,
      dataId: filter.dataId,
      onSelect: onSourceDataSelector
    }), children));
  });

  FilterPanelWithFieldSelect.displayName = 'FilterPanelWithFieldSelect';
  return FilterPanelWithFieldSelect;
}

var _default = FieldPanelWithFieldSelectFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2ZpbHRlcnMvZmlsdGVyLXBhbmVscy9maWx0ZXItcGFuZWwtd2l0aC1maWVsZC1zZWxlY3QuanMiXSwibmFtZXMiOlsiRmllbGRQYW5lbFdpdGhGaWVsZFNlbGVjdEZhY3RvcnkiLCJkZXBzIiwiRmlsdGVyUGFuZWxIZWFkZXJGYWN0b3J5IiwiU291cmNlRGF0YVNlbGVjdG9yRmFjdG9yeSIsIkZpbHRlclBhbmVsSGVhZGVyIiwiU291cmNlRGF0YVNlbGVjdG9yIiwiRmlsdGVyUGFuZWxXaXRoRmllbGRTZWxlY3QiLCJSZWFjdCIsIm1lbW8iLCJhbGxBdmFpbGFibGVGaWVsZHMiLCJjaGlsZHJlbiIsImRhdGFzZXRzIiwiZmlsdGVyIiwiaWR4IiwicmVtb3ZlRmlsdGVyIiwic2V0RmlsdGVyIiwicGFuZWxBY3Rpb25zIiwib25GaWVsZFNlbGVjdG9yIiwiZmllbGQiLCJuYW1lIiwib25Tb3VyY2VEYXRhU2VsZWN0b3IiLCJ2YWx1ZSIsImZpZWxkVmFsdWUiLCJBcnJheSIsImlzQXJyYXkiLCJkYXRhSWQiLCJtYXAiLCJwYW5lbEFjdGlvbiIsImlkIiwib25DbGljayIsInRvb2x0aXAiLCJpY29uQ29tcG9uZW50IiwiYWN0aXZlIiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsImZyZWV6ZSIsImRpc3BsYXlOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUF6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFTQUEsZ0NBQWdDLENBQUNDLElBQWpDLEdBQXdDLENBQUNDLDZCQUFELEVBQTJCQyw4QkFBM0IsQ0FBeEM7O0FBRUEsU0FBU0gsZ0NBQVQsQ0FBMENJLGlCQUExQyxFQUE2REMsa0JBQTdELEVBQWlGO0FBQy9F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R0FwRWdDLENBQW5DOztBQXVFQUosRUFBQUEsMEJBQTBCLENBQUMrQixXQUEzQixHQUF5Qyw0QkFBekM7QUFFQSxTQUFPL0IsMEJBQVA7QUFDRDs7ZUFFY04sZ0MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QsIHt1c2VDYWxsYmFjaywgdXNlTWVtb30gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge1N0eWxlZEZpbHRlckNvbnRlbnR9IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IEZpbHRlclBhbmVsSGVhZGVyRmFjdG9yeSBmcm9tICdjb21wb25lbnRzL3NpZGUtcGFuZWwvZmlsdGVyLXBhbmVsL2ZpbHRlci1wYW5lbC1oZWFkZXInO1xyXG5pbXBvcnQgRmllbGRTZWxlY3RvciBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9maWVsZC1zZWxlY3Rvcic7XHJcbmltcG9ydCBQYW5lbEhlYWRlckFjdGlvbiBmcm9tICdjb21wb25lbnRzL3NpZGUtcGFuZWwvcGFuZWwtaGVhZGVyLWFjdGlvbic7XHJcbmltcG9ydCBTb3VyY2VEYXRhU2VsZWN0b3JGYWN0b3J5IGZyb20gJ2NvbXBvbmVudHMvc2lkZS1wYW5lbC9jb21tb24vc291cmNlLWRhdGEtc2VsZWN0b3InO1xyXG5cclxuRmllbGRQYW5lbFdpdGhGaWVsZFNlbGVjdEZhY3RvcnkuZGVwcyA9IFtGaWx0ZXJQYW5lbEhlYWRlckZhY3RvcnksIFNvdXJjZURhdGFTZWxlY3RvckZhY3RvcnldO1xyXG5cclxuZnVuY3Rpb24gRmllbGRQYW5lbFdpdGhGaWVsZFNlbGVjdEZhY3RvcnkoRmlsdGVyUGFuZWxIZWFkZXIsIFNvdXJjZURhdGFTZWxlY3Rvcikge1xyXG4gIGNvbnN0IEZpbHRlclBhbmVsV2l0aEZpZWxkU2VsZWN0ID0gUmVhY3QubWVtbyhcclxuICAgICh7XHJcbiAgICAgIGFsbEF2YWlsYWJsZUZpZWxkcyxcclxuICAgICAgY2hpbGRyZW4sXHJcbiAgICAgIGRhdGFzZXRzLFxyXG4gICAgICBmaWx0ZXIsXHJcbiAgICAgIGlkeCxcclxuICAgICAgcmVtb3ZlRmlsdGVyLFxyXG4gICAgICBzZXRGaWx0ZXIsXHJcbiAgICAgIHBhbmVsQWN0aW9ucyA9IFtdXHJcbiAgICB9KSA9PiB7XHJcbiAgICAgIGNvbnN0IG9uRmllbGRTZWxlY3RvciA9IHVzZUNhbGxiYWNrKGZpZWxkID0+IHNldEZpbHRlcihpZHgsICduYW1lJywgZmllbGQubmFtZSksIFtcclxuICAgICAgICBpZHgsXHJcbiAgICAgICAgc2V0RmlsdGVyXHJcbiAgICAgIF0pO1xyXG5cclxuICAgICAgY29uc3Qgb25Tb3VyY2VEYXRhU2VsZWN0b3IgPSB1c2VDYWxsYmFjayh2YWx1ZSA9PiBzZXRGaWx0ZXIoaWR4LCAnZGF0YUlkJywgW3ZhbHVlXSksIFtcclxuICAgICAgICBpZHgsXHJcbiAgICAgICAgc2V0RmlsdGVyXHJcbiAgICAgIF0pO1xyXG5cclxuICAgICAgY29uc3QgZmllbGRWYWx1ZSA9IHVzZU1lbW8oXHJcbiAgICAgICAgKCkgPT4gKEFycmF5LmlzQXJyYXkoZmlsdGVyLm5hbWUpID8gZmlsdGVyLm5hbWVbMF0gOiBmaWx0ZXIubmFtZSksXHJcbiAgICAgICAgW2ZpbHRlci5uYW1lXVxyXG4gICAgICApO1xyXG5cclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPEZpbHRlclBhbmVsSGVhZGVyXHJcbiAgICAgICAgICAgIGRhdGFzZXRzPXtbZGF0YXNldHNbZmlsdGVyLmRhdGFJZFswXV1dfVxyXG4gICAgICAgICAgICBhbGxBdmFpbGFibGVGaWVsZHM9e2FsbEF2YWlsYWJsZUZpZWxkc31cclxuICAgICAgICAgICAgaWR4PXtpZHh9XHJcbiAgICAgICAgICAgIGZpbHRlcj17ZmlsdGVyfVxyXG4gICAgICAgICAgICByZW1vdmVGaWx0ZXI9e3JlbW92ZUZpbHRlcn1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEZpZWxkU2VsZWN0b3JcclxuICAgICAgICAgICAgICBpbnB1dFRoZW1lPVwic2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICBmaWVsZHM9e2FsbEF2YWlsYWJsZUZpZWxkc31cclxuICAgICAgICAgICAgICB2YWx1ZT17ZmllbGRWYWx1ZX1cclxuICAgICAgICAgICAgICBlcmFzYWJsZT17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgb25TZWxlY3Q9e29uRmllbGRTZWxlY3Rvcn1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAge3BhbmVsQWN0aW9ucyAmJlxyXG4gICAgICAgICAgICAgIHBhbmVsQWN0aW9ucy5tYXAocGFuZWxBY3Rpb24gPT4gKFxyXG4gICAgICAgICAgICAgICAgPFBhbmVsSGVhZGVyQWN0aW9uXHJcbiAgICAgICAgICAgICAgICAgIGlkPXtwYW5lbEFjdGlvbi5pZH1cclxuICAgICAgICAgICAgICAgICAga2V5PXtwYW5lbEFjdGlvbi5pZH1cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17cGFuZWxBY3Rpb24ub25DbGlja31cclxuICAgICAgICAgICAgICAgICAgdG9vbHRpcD17cGFuZWxBY3Rpb24udG9vbHRpcH1cclxuICAgICAgICAgICAgICAgICAgSWNvbkNvbXBvbmVudD17cGFuZWxBY3Rpb24uaWNvbkNvbXBvbmVudH1cclxuICAgICAgICAgICAgICAgICAgYWN0aXZlPXtwYW5lbEFjdGlvbi5hY3RpdmV9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9GaWx0ZXJQYW5lbEhlYWRlcj5cclxuICAgICAgICAgIDxTdHlsZWRGaWx0ZXJDb250ZW50IGNsYXNzTmFtZT1cImZpbHRlci1wYW5lbF9fY29udGVudFwiPlxyXG4gICAgICAgICAgICB7T2JqZWN0LmtleXMoZGF0YXNldHMpLmxlbmd0aCA+IDEgJiYgKFxyXG4gICAgICAgICAgICAgIDxTb3VyY2VEYXRhU2VsZWN0b3JcclxuICAgICAgICAgICAgICAgIGlucHV0VGhlbWU9XCJzZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgICAgZGF0YXNldHM9e2RhdGFzZXRzfVxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2ZpbHRlci5mcmVlemV9XHJcbiAgICAgICAgICAgICAgICBkYXRhSWQ9e2ZpbHRlci5kYXRhSWR9XHJcbiAgICAgICAgICAgICAgICBvblNlbGVjdD17b25Tb3VyY2VEYXRhU2VsZWN0b3J9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgPC9TdHlsZWRGaWx0ZXJDb250ZW50PlxyXG4gICAgICAgIDwvPlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICk7XHJcblxyXG4gIEZpbHRlclBhbmVsV2l0aEZpZWxkU2VsZWN0LmRpc3BsYXlOYW1lID0gJ0ZpbHRlclBhbmVsV2l0aEZpZWxkU2VsZWN0JztcclxuXHJcbiAgcmV0dXJuIEZpbHRlclBhbmVsV2l0aEZpZWxkU2VsZWN0O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGaWVsZFBhbmVsV2l0aEZpZWxkU2VsZWN0RmFjdG9yeTtcclxuIl19