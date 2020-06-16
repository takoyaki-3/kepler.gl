"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = require("../../common/styled-components");

var _polygonFilter = _interopRequireDefault(require("../polygon-filter"));

var _panelHeaderAction = _interopRequireDefault(require("../../side-panel/panel-header-action"));

var _icons = require("../../common/icons");

var _filterPanelHeader = _interopRequireDefault(require("../../side-panel/filter-panel/filter-panel-header"));

var _components = require("../components");

var _lodash = _interopRequireDefault(require("lodash.get"));

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
PolygonFilterPanelFactory.deps = [_filterPanelHeader["default"], _polygonFilter["default"]];

function PolygonFilterPanelFactory(FilterPanelHeader, PolygonFilter) {
  var PolygonFilterPanel = /*#__PURE__*/_react["default"].memo(function (_ref) {
    var idx = _ref.idx,
        datasets = _ref.datasets,
        layers = _ref.layers,
        layerData = _ref.layerData,
        allAvailableFields = _ref.allAvailableFields,
        filter = _ref.filter,
        isAnyFilterAnimating = _ref.isAnyFilterAnimating,
        enlargeFilter = _ref.enlargeFilter,
        removeFilter = _ref.removeFilter,
        setFilter = _ref.setFilter,
        toggleFilterFeature = _ref.toggleFilterFeature;
    var filterDatasets = (0, _react.useMemo)(function () {
      return filter.dataId.map(function (d) {
        return datasets[d];
      });
    }, [filter, datasets]);
    var onSetLayers = (0, _react.useCallback)(function (value) {
      return setFilter(idx, 'layerId', value);
    }, [setFilter]);
    var isVisible = (0, _lodash["default"])(filter, ['value', 'properties', 'isVisible'], true);
    var featureType = (0, _lodash["default"])(filter, ['value', 'properties', 'renderType'], true);
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "polygon-filter-panel"
    }, /*#__PURE__*/_react["default"].createElement(FilterPanelHeader, {
      datasets: filterDatasets,
      allAvailableFields: allAvailableFields,
      idx: idx,
      filter: filter,
      removeFilter: removeFilter
    }, /*#__PURE__*/_react["default"].createElement(_components.StyledFilterPanel, null, "Geo - ", featureType), /*#__PURE__*/_react["default"].createElement(_panelHeaderAction["default"], {
      id: filter.id,
      onClick: toggleFilterFeature,
      tooltip: isVisible ? 'tooltip.hideFeature' : 'tooltip.showFeature',
      IconComponent: isVisible ? _icons.EyeSeen : _icons.EyeUnseen,
      active: isVisible
    })), /*#__PURE__*/_react["default"].createElement(_styledComponents.StyledFilterContent, {
      className: "filter-panel__content"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "filter-panel__filter"
    }, /*#__PURE__*/_react["default"].createElement(PolygonFilter, {
      filter: filter,
      layers: layers,
      setLayers: onSetLayers,
      toggleFilterFeature: toggleFilterFeature
    }))));
  });

  PolygonFilterPanel.displayName = 'PolygonFilterPanel';
  return PolygonFilterPanel;
}

var _default = PolygonFilterPanelFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2ZpbHRlcnMvZmlsdGVyLXBhbmVscy9wb2x5Z29uLWZpbHRlci1wYW5lbC5qcyJdLCJuYW1lcyI6WyJQb2x5Z29uRmlsdGVyUGFuZWxGYWN0b3J5IiwiZGVwcyIsIkZpbHRlclBhbmVsSGVhZGVyRmFjdG9yeSIsIlBvbHlnb25GaWx0ZXJGYWN0b3J5IiwiRmlsdGVyUGFuZWxIZWFkZXIiLCJQb2x5Z29uRmlsdGVyIiwiUG9seWdvbkZpbHRlclBhbmVsIiwiUmVhY3QiLCJtZW1vIiwiaWR4IiwiZGF0YXNldHMiLCJsYXllcnMiLCJsYXllckRhdGEiLCJhbGxBdmFpbGFibGVGaWVsZHMiLCJmaWx0ZXIiLCJpc0FueUZpbHRlckFuaW1hdGluZyIsImVubGFyZ2VGaWx0ZXIiLCJyZW1vdmVGaWx0ZXIiLCJzZXRGaWx0ZXIiLCJ0b2dnbGVGaWx0ZXJGZWF0dXJlIiwiZmlsdGVyRGF0YXNldHMiLCJkYXRhSWQiLCJtYXAiLCJkIiwib25TZXRMYXllcnMiLCJ2YWx1ZSIsImlzVmlzaWJsZSIsImZlYXR1cmVUeXBlIiwiaWQiLCJFeWVTZWVuIiwiRXllVW5zZWVuIiwiZGlzcGxheU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOztBQUVBOztBQTdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWFBQSx5QkFBeUIsQ0FBQ0MsSUFBMUIsR0FBaUMsQ0FBQ0MsNkJBQUQsRUFBMkJDLHlCQUEzQixDQUFqQzs7QUFFQSxTQUFTSCx5QkFBVCxDQUFtQ0ksaUJBQW5DLEVBQXNEQyxhQUF0RCxFQUFxRTtBQUNuRSxNQUFNQyxrQkFBa0IsZ0JBQUdDLGtCQUFNQyxJQUFOLENBQ3pCLGdCQVlNO0FBQUEsUUFYSkMsR0FXSSxRQVhKQSxHQVdJO0FBQUEsUUFWSkMsUUFVSSxRQVZKQSxRQVVJO0FBQUEsUUFUSkMsTUFTSSxRQVRKQSxNQVNJO0FBQUEsUUFSSkMsU0FRSSxRQVJKQSxTQVFJO0FBQUEsUUFQSkMsa0JBT0ksUUFQSkEsa0JBT0k7QUFBQSxRQU5KQyxNQU1JLFFBTkpBLE1BTUk7QUFBQSxRQUxKQyxvQkFLSSxRQUxKQSxvQkFLSTtBQUFBLFFBSkpDLGFBSUksUUFKSkEsYUFJSTtBQUFBLFFBSEpDLFlBR0ksUUFISkEsWUFHSTtBQUFBLFFBRkpDLFNBRUksUUFGSkEsU0FFSTtBQUFBLFFBREpDLG1CQUNJLFFBREpBLG1CQUNJO0FBQ0osUUFBTUMsY0FBYyxHQUFHLG9CQUFRO0FBQUEsYUFBTU4sTUFBTSxDQUFDTyxNQUFQLENBQWNDLEdBQWQsQ0FBa0IsVUFBQUMsQ0FBQztBQUFBLGVBQUliLFFBQVEsQ0FBQ2EsQ0FBRCxDQUFaO0FBQUEsT0FBbkIsQ0FBTjtBQUFBLEtBQVIsRUFBbUQsQ0FBQ1QsTUFBRCxFQUFTSixRQUFULENBQW5ELENBQXZCO0FBRUEsUUFBTWMsV0FBVyxHQUFHLHdCQUFZLFVBQUFDLEtBQUs7QUFBQSxhQUFJUCxTQUFTLENBQUNULEdBQUQsRUFBTSxTQUFOLEVBQWlCZ0IsS0FBakIsQ0FBYjtBQUFBLEtBQWpCLEVBQXVELENBQUNQLFNBQUQsQ0FBdkQsQ0FBcEI7QUFFQSxRQUFNUSxTQUFTLEdBQUcsd0JBQUlaLE1BQUosRUFBWSxDQUFDLE9BQUQsRUFBVSxZQUFWLEVBQXdCLFdBQXhCLENBQVosRUFBa0QsSUFBbEQsQ0FBbEI7QUFDQSxRQUFNYSxXQUFXLEdBQUcsd0JBQUliLE1BQUosRUFBWSxDQUFDLE9BQUQsRUFBVSxZQUFWLEVBQXdCLFlBQXhCLENBQVosRUFBbUQsSUFBbkQsQ0FBcEI7QUFFQSx3QkFDRTtBQUFLLE1BQUEsU0FBUyxFQUFDO0FBQWYsb0JBQ0UsZ0NBQUMsaUJBQUQ7QUFDRSxNQUFBLFFBQVEsRUFBRU0sY0FEWjtBQUVFLE1BQUEsa0JBQWtCLEVBQUVQLGtCQUZ0QjtBQUdFLE1BQUEsR0FBRyxFQUFFSixHQUhQO0FBSUUsTUFBQSxNQUFNLEVBQUVLLE1BSlY7QUFLRSxNQUFBLFlBQVksRUFBRUc7QUFMaEIsb0JBT0UsZ0NBQUMsNkJBQUQsa0JBQTBCVSxXQUExQixDQVBGLGVBUUUsZ0NBQUMsNkJBQUQ7QUFDRSxNQUFBLEVBQUUsRUFBRWIsTUFBTSxDQUFDYyxFQURiO0FBRUUsTUFBQSxPQUFPLEVBQUVULG1CQUZYO0FBR0UsTUFBQSxPQUFPLEVBQUVPLFNBQVMsR0FBRyxxQkFBSCxHQUEyQixxQkFIL0M7QUFJRSxNQUFBLGFBQWEsRUFBRUEsU0FBUyxHQUFHRyxjQUFILEdBQWFDLGdCQUp2QztBQUtFLE1BQUEsTUFBTSxFQUFFSjtBQUxWLE1BUkYsQ0FERixlQWlCRSxnQ0FBQyxxQ0FBRDtBQUFxQixNQUFBLFNBQVMsRUFBQztBQUEvQixvQkFDRTtBQUFLLE1BQUEsU0FBUyxFQUFDO0FBQWYsb0JBQ0UsZ0NBQUMsYUFBRDtBQUNFLE1BQUEsTUFBTSxFQUFFWixNQURWO0FBRUUsTUFBQSxNQUFNLEVBQUVILE1BRlY7QUFHRSxNQUFBLFNBQVMsRUFBRWEsV0FIYjtBQUlFLE1BQUEsbUJBQW1CLEVBQUVMO0FBSnZCLE1BREYsQ0FERixDQWpCRixDQURGO0FBOEJELEdBbkR3QixDQUEzQjs7QUFzREFiLEVBQUFBLGtCQUFrQixDQUFDeUIsV0FBbkIsR0FBaUMsb0JBQWpDO0FBRUEsU0FBT3pCLGtCQUFQO0FBQ0Q7O2VBRWNOLHlCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0LCB7dXNlTWVtbywgdXNlQ2FsbGJhY2t9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtTdHlsZWRGaWx0ZXJDb250ZW50fSBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9zdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBQb2x5Z29uRmlsdGVyRmFjdG9yeSBmcm9tICdjb21wb25lbnRzL2ZpbHRlcnMvcG9seWdvbi1maWx0ZXInO1xyXG5pbXBvcnQgUGFuZWxIZWFkZXJBY3Rpb24gZnJvbSAnY29tcG9uZW50cy9zaWRlLXBhbmVsL3BhbmVsLWhlYWRlci1hY3Rpb24nO1xyXG5pbXBvcnQge0V5ZVNlZW59IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL2ljb25zJztcclxuaW1wb3J0IHtFeWVVbnNlZW59IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL2ljb25zJztcclxuaW1wb3J0IEZpbHRlclBhbmVsSGVhZGVyRmFjdG9yeSBmcm9tICdjb21wb25lbnRzL3NpZGUtcGFuZWwvZmlsdGVyLXBhbmVsL2ZpbHRlci1wYW5lbC1oZWFkZXInO1xyXG5pbXBvcnQge1N0eWxlZEZpbHRlclBhbmVsfSBmcm9tICcuLi9jb21wb25lbnRzJztcclxuXHJcbmltcG9ydCBnZXQgZnJvbSAnbG9kYXNoLmdldCc7XHJcblxyXG5Qb2x5Z29uRmlsdGVyUGFuZWxGYWN0b3J5LmRlcHMgPSBbRmlsdGVyUGFuZWxIZWFkZXJGYWN0b3J5LCBQb2x5Z29uRmlsdGVyRmFjdG9yeV07XHJcblxyXG5mdW5jdGlvbiBQb2x5Z29uRmlsdGVyUGFuZWxGYWN0b3J5KEZpbHRlclBhbmVsSGVhZGVyLCBQb2x5Z29uRmlsdGVyKSB7XHJcbiAgY29uc3QgUG9seWdvbkZpbHRlclBhbmVsID0gUmVhY3QubWVtbyhcclxuICAgICh7XHJcbiAgICAgIGlkeCxcclxuICAgICAgZGF0YXNldHMsXHJcbiAgICAgIGxheWVycyxcclxuICAgICAgbGF5ZXJEYXRhLFxyXG4gICAgICBhbGxBdmFpbGFibGVGaWVsZHMsXHJcbiAgICAgIGZpbHRlcixcclxuICAgICAgaXNBbnlGaWx0ZXJBbmltYXRpbmcsXHJcbiAgICAgIGVubGFyZ2VGaWx0ZXIsXHJcbiAgICAgIHJlbW92ZUZpbHRlcixcclxuICAgICAgc2V0RmlsdGVyLFxyXG4gICAgICB0b2dnbGVGaWx0ZXJGZWF0dXJlXHJcbiAgICB9KSA9PiB7XHJcbiAgICAgIGNvbnN0IGZpbHRlckRhdGFzZXRzID0gdXNlTWVtbygoKSA9PiBmaWx0ZXIuZGF0YUlkLm1hcChkID0+IGRhdGFzZXRzW2RdKSwgW2ZpbHRlciwgZGF0YXNldHNdKTtcclxuXHJcbiAgICAgIGNvbnN0IG9uU2V0TGF5ZXJzID0gdXNlQ2FsbGJhY2sodmFsdWUgPT4gc2V0RmlsdGVyKGlkeCwgJ2xheWVySWQnLCB2YWx1ZSksIFtzZXRGaWx0ZXJdKTtcclxuXHJcbiAgICAgIGNvbnN0IGlzVmlzaWJsZSA9IGdldChmaWx0ZXIsIFsndmFsdWUnLCAncHJvcGVydGllcycsICdpc1Zpc2libGUnXSwgdHJ1ZSk7XHJcbiAgICAgIGNvbnN0IGZlYXR1cmVUeXBlID0gZ2V0KGZpbHRlciwgWyd2YWx1ZScsICdwcm9wZXJ0aWVzJywgJ3JlbmRlclR5cGUnXSwgdHJ1ZSk7XHJcblxyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9seWdvbi1maWx0ZXItcGFuZWxcIj5cclxuICAgICAgICAgIDxGaWx0ZXJQYW5lbEhlYWRlclxyXG4gICAgICAgICAgICBkYXRhc2V0cz17ZmlsdGVyRGF0YXNldHN9XHJcbiAgICAgICAgICAgIGFsbEF2YWlsYWJsZUZpZWxkcz17YWxsQXZhaWxhYmxlRmllbGRzfVxyXG4gICAgICAgICAgICBpZHg9e2lkeH1cclxuICAgICAgICAgICAgZmlsdGVyPXtmaWx0ZXJ9XHJcbiAgICAgICAgICAgIHJlbW92ZUZpbHRlcj17cmVtb3ZlRmlsdGVyfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8U3R5bGVkRmlsdGVyUGFuZWw+R2VvIC0ge2ZlYXR1cmVUeXBlfTwvU3R5bGVkRmlsdGVyUGFuZWw+XHJcbiAgICAgICAgICAgIDxQYW5lbEhlYWRlckFjdGlvblxyXG4gICAgICAgICAgICAgIGlkPXtmaWx0ZXIuaWR9XHJcbiAgICAgICAgICAgICAgb25DbGljaz17dG9nZ2xlRmlsdGVyRmVhdHVyZX1cclxuICAgICAgICAgICAgICB0b29sdGlwPXtpc1Zpc2libGUgPyAndG9vbHRpcC5oaWRlRmVhdHVyZScgOiAndG9vbHRpcC5zaG93RmVhdHVyZSd9XHJcbiAgICAgICAgICAgICAgSWNvbkNvbXBvbmVudD17aXNWaXNpYmxlID8gRXllU2VlbiA6IEV5ZVVuc2Vlbn1cclxuICAgICAgICAgICAgICBhY3RpdmU9e2lzVmlzaWJsZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvRmlsdGVyUGFuZWxIZWFkZXI+XHJcbiAgICAgICAgICA8U3R5bGVkRmlsdGVyQ29udGVudCBjbGFzc05hbWU9XCJmaWx0ZXItcGFuZWxfX2NvbnRlbnRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWx0ZXItcGFuZWxfX2ZpbHRlclwiPlxyXG4gICAgICAgICAgICAgIDxQb2x5Z29uRmlsdGVyXHJcbiAgICAgICAgICAgICAgICBmaWx0ZXI9e2ZpbHRlcn1cclxuICAgICAgICAgICAgICAgIGxheWVycz17bGF5ZXJzfVxyXG4gICAgICAgICAgICAgICAgc2V0TGF5ZXJzPXtvblNldExheWVyc31cclxuICAgICAgICAgICAgICAgIHRvZ2dsZUZpbHRlckZlYXR1cmU9e3RvZ2dsZUZpbHRlckZlYXR1cmV9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L1N0eWxlZEZpbHRlckNvbnRlbnQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgKTtcclxuXHJcbiAgUG9seWdvbkZpbHRlclBhbmVsLmRpc3BsYXlOYW1lID0gJ1BvbHlnb25GaWx0ZXJQYW5lbCc7XHJcblxyXG4gIHJldHVybiBQb2x5Z29uRmlsdGVyUGFuZWw7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvbHlnb25GaWx0ZXJQYW5lbEZhY3Rvcnk7XHJcbiJdfQ==