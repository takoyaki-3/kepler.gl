"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _itemSelector = _interopRequireDefault(require("../common/item-selector/item-selector"));

var _components = require("./components");

var _constants = require("../../constants");

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
var layerFilter = function layerFilter(layer) {
  return layer.type === _constants.LAYER_TYPES.point;
};

var isAlreadySelected = function isAlreadySelected(selectedLayers, layerId) {
  return selectedLayers.findIndex(function (l) {
    return l.id === layerId;
  }) === -1;
};

function PolygonFilterFactory() {
  var PolygonFilter = /*#__PURE__*/_react["default"].memo(function (_ref) {
    var filter = _ref.filter,
        layers = _ref.layers,
        setLayers = _ref.setLayers;
    var setNewLayers = (0, _react.useCallback)(function (newLayers) {
      return setLayers(newLayers.map(function (l) {
        return l.id;
      }));
    }, [layers, setLayers]);
    var selectedLayers = (0, _react.useMemo)(function () {
      return layers.filter(function (l) {
        return filter.layerId.includes(l.id);
      });
    }, [filter, layers]);
    var availableLayers = (0, _react.useMemo)(function () {
      // remove already added layers and filter out non point layers
      return layers.filter(function (layer) {
        return layerFilter(layer) && isAlreadySelected(selectedLayers, layer.id);
      });
    }, [layers, selectedLayers]);
    return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_components.StyledFilterPanel, {
      htmlFor: "filter-".concat(filter.id)
    }, "Layers:"), /*#__PURE__*/_react["default"].createElement(_itemSelector["default"], {
      options: availableLayers,
      selectedItems: selectedLayers,
      onChange: setNewLayers,
      searchable: false,
      multiSelect: true,
      getOptionValue: function getOptionValue(l) {
        return l.id;
      },
      displayOption: function displayOption(l) {
        return l.config.label;
      }
    }));
  });

  PolygonFilter.displayName = 'PolygonFilter';
  return PolygonFilter;
}

var _default = PolygonFilterFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2ZpbHRlcnMvcG9seWdvbi1maWx0ZXIuanMiXSwibmFtZXMiOlsibGF5ZXJGaWx0ZXIiLCJsYXllciIsInR5cGUiLCJMQVlFUl9UWVBFUyIsInBvaW50IiwiaXNBbHJlYWR5U2VsZWN0ZWQiLCJzZWxlY3RlZExheWVycyIsImxheWVySWQiLCJmaW5kSW5kZXgiLCJsIiwiaWQiLCJQb2x5Z29uRmlsdGVyRmFjdG9yeSIsIlBvbHlnb25GaWx0ZXIiLCJSZWFjdCIsIm1lbW8iLCJmaWx0ZXIiLCJsYXllcnMiLCJzZXRMYXllcnMiLCJzZXROZXdMYXllcnMiLCJuZXdMYXllcnMiLCJtYXAiLCJpbmNsdWRlcyIsImF2YWlsYWJsZUxheWVycyIsImNvbmZpZyIsImxhYmVsIiwiZGlzcGxheU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUNBOztBQUNBOztBQXZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU9BLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUFDLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLElBQU4sS0FBZUMsdUJBQVlDLEtBQS9CO0FBQUEsQ0FBekI7O0FBQ0EsSUFBTUMsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixDQUFDQyxjQUFELEVBQWlCQyxPQUFqQjtBQUFBLFNBQ3hCRCxjQUFjLENBQUNFLFNBQWYsQ0FBeUIsVUFBQUMsQ0FBQztBQUFBLFdBQUlBLENBQUMsQ0FBQ0MsRUFBRixLQUFTSCxPQUFiO0FBQUEsR0FBMUIsTUFBb0QsQ0FBQyxDQUQ3QjtBQUFBLENBQTFCOztBQUdBLFNBQVNJLG9CQUFULEdBQWdDO0FBQzlCLE1BQU1DLGFBQWEsZ0JBQUdDLGtCQUFNQyxJQUFOLENBQVcsZ0JBQWlDO0FBQUEsUUFBL0JDLE1BQStCLFFBQS9CQSxNQUErQjtBQUFBLFFBQXZCQyxNQUF1QixRQUF2QkEsTUFBdUI7QUFBQSxRQUFmQyxTQUFlLFFBQWZBLFNBQWU7QUFDaEUsUUFBTUMsWUFBWSxHQUFHLHdCQUNuQixVQUFBQyxTQUFTLEVBQUk7QUFDWCxhQUFPRixTQUFTLENBQUNFLFNBQVMsQ0FBQ0MsR0FBVixDQUFjLFVBQUFYLENBQUM7QUFBQSxlQUFJQSxDQUFDLENBQUNDLEVBQU47QUFBQSxPQUFmLENBQUQsQ0FBaEI7QUFDRCxLQUhrQixFQUluQixDQUFDTSxNQUFELEVBQVNDLFNBQVQsQ0FKbUIsQ0FBckI7QUFPQSxRQUFNWCxjQUFjLEdBQUcsb0JBQVE7QUFBQSxhQUFNVSxNQUFNLENBQUNELE1BQVAsQ0FBYyxVQUFBTixDQUFDO0FBQUEsZUFBSU0sTUFBTSxDQUFDUixPQUFQLENBQWVjLFFBQWYsQ0FBd0JaLENBQUMsQ0FBQ0MsRUFBMUIsQ0FBSjtBQUFBLE9BQWYsQ0FBTjtBQUFBLEtBQVIsRUFBaUUsQ0FDdEZLLE1BRHNGLEVBRXRGQyxNQUZzRixDQUFqRSxDQUF2QjtBQUtBLFFBQU1NLGVBQWUsR0FBRyxvQkFBUSxZQUFNO0FBQ3BDO0FBQ0EsYUFBT04sTUFBTSxDQUFDRCxNQUFQLENBQ0wsVUFBQWQsS0FBSztBQUFBLGVBQUlELFdBQVcsQ0FBQ0MsS0FBRCxDQUFYLElBQXNCSSxpQkFBaUIsQ0FBQ0MsY0FBRCxFQUFpQkwsS0FBSyxDQUFDUyxFQUF2QixDQUEzQztBQUFBLE9BREEsQ0FBUDtBQUdELEtBTHVCLEVBS3JCLENBQUNNLE1BQUQsRUFBU1YsY0FBVCxDQUxxQixDQUF4QjtBQU9BLHdCQUNFLDBEQUNFLGdDQUFDLDZCQUFEO0FBQW1CLE1BQUEsT0FBTyxtQkFBWVMsTUFBTSxDQUFDTCxFQUFuQjtBQUExQixpQkFERixlQUVFLGdDQUFDLHdCQUFEO0FBQ0UsTUFBQSxPQUFPLEVBQUVZLGVBRFg7QUFFRSxNQUFBLGFBQWEsRUFBRWhCLGNBRmpCO0FBR0UsTUFBQSxRQUFRLEVBQUVZLFlBSFo7QUFJRSxNQUFBLFVBQVUsRUFBRSxLQUpkO0FBS0UsTUFBQSxXQUFXLEVBQUUsSUFMZjtBQU1FLE1BQUEsY0FBYyxFQUFFLHdCQUFBVCxDQUFDO0FBQUEsZUFBSUEsQ0FBQyxDQUFDQyxFQUFOO0FBQUEsT0FObkI7QUFPRSxNQUFBLGFBQWEsRUFBRSx1QkFBQUQsQ0FBQztBQUFBLGVBQUlBLENBQUMsQ0FBQ2MsTUFBRixDQUFTQyxLQUFiO0FBQUE7QUFQbEIsTUFGRixDQURGO0FBY0QsR0FsQ3FCLENBQXRCOztBQW9DQVosRUFBQUEsYUFBYSxDQUFDYSxXQUFkLEdBQTRCLGVBQTVCO0FBRUEsU0FBT2IsYUFBUDtBQUNEOztlQUVjRCxvQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMCBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCwge3VzZU1lbW8sIHVzZUNhbGxiYWNrfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBJdGVtU2VsZWN0b3IgZnJvbSAnY29tcG9uZW50cy9jb21tb24vaXRlbS1zZWxlY3Rvci9pdGVtLXNlbGVjdG9yJztcclxuaW1wb3J0IHtTdHlsZWRGaWx0ZXJQYW5lbH0gZnJvbSAnLi9jb21wb25lbnRzJztcclxuaW1wb3J0IHtMQVlFUl9UWVBFU30gZnJvbSAnY29uc3RhbnRzJztcclxuXHJcbmNvbnN0IGxheWVyRmlsdGVyID0gbGF5ZXIgPT4gbGF5ZXIudHlwZSA9PT0gTEFZRVJfVFlQRVMucG9pbnQ7XHJcbmNvbnN0IGlzQWxyZWFkeVNlbGVjdGVkID0gKHNlbGVjdGVkTGF5ZXJzLCBsYXllcklkKSA9PlxyXG4gIHNlbGVjdGVkTGF5ZXJzLmZpbmRJbmRleChsID0+IGwuaWQgPT09IGxheWVySWQpID09PSAtMTtcclxuXHJcbmZ1bmN0aW9uIFBvbHlnb25GaWx0ZXJGYWN0b3J5KCkge1xyXG4gIGNvbnN0IFBvbHlnb25GaWx0ZXIgPSBSZWFjdC5tZW1vKCh7ZmlsdGVyLCBsYXllcnMsIHNldExheWVyc30pID0+IHtcclxuICAgIGNvbnN0IHNldE5ld0xheWVycyA9IHVzZUNhbGxiYWNrKFxyXG4gICAgICBuZXdMYXllcnMgPT4ge1xyXG4gICAgICAgIHJldHVybiBzZXRMYXllcnMobmV3TGF5ZXJzLm1hcChsID0+IGwuaWQpKTtcclxuICAgICAgfSxcclxuICAgICAgW2xheWVycywgc2V0TGF5ZXJzXVxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCBzZWxlY3RlZExheWVycyA9IHVzZU1lbW8oKCkgPT4gbGF5ZXJzLmZpbHRlcihsID0+IGZpbHRlci5sYXllcklkLmluY2x1ZGVzKGwuaWQpKSwgW1xyXG4gICAgICBmaWx0ZXIsXHJcbiAgICAgIGxheWVyc1xyXG4gICAgXSk7XHJcblxyXG4gICAgY29uc3QgYXZhaWxhYmxlTGF5ZXJzID0gdXNlTWVtbygoKSA9PiB7XHJcbiAgICAgIC8vIHJlbW92ZSBhbHJlYWR5IGFkZGVkIGxheWVycyBhbmQgZmlsdGVyIG91dCBub24gcG9pbnQgbGF5ZXJzXHJcbiAgICAgIHJldHVybiBsYXllcnMuZmlsdGVyKFxyXG4gICAgICAgIGxheWVyID0+IGxheWVyRmlsdGVyKGxheWVyKSAmJiBpc0FscmVhZHlTZWxlY3RlZChzZWxlY3RlZExheWVycywgbGF5ZXIuaWQpXHJcbiAgICAgICk7XHJcbiAgICB9LCBbbGF5ZXJzLCBzZWxlY3RlZExheWVyc10pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPFN0eWxlZEZpbHRlclBhbmVsIGh0bWxGb3I9e2BmaWx0ZXItJHtmaWx0ZXIuaWR9YH0+TGF5ZXJzOjwvU3R5bGVkRmlsdGVyUGFuZWw+XHJcbiAgICAgICAgPEl0ZW1TZWxlY3RvclxyXG4gICAgICAgICAgb3B0aW9ucz17YXZhaWxhYmxlTGF5ZXJzfVxyXG4gICAgICAgICAgc2VsZWN0ZWRJdGVtcz17c2VsZWN0ZWRMYXllcnN9XHJcbiAgICAgICAgICBvbkNoYW5nZT17c2V0TmV3TGF5ZXJzfVxyXG4gICAgICAgICAgc2VhcmNoYWJsZT17ZmFsc2V9XHJcbiAgICAgICAgICBtdWx0aVNlbGVjdD17dHJ1ZX1cclxuICAgICAgICAgIGdldE9wdGlvblZhbHVlPXtsID0+IGwuaWR9XHJcbiAgICAgICAgICBkaXNwbGF5T3B0aW9uPXtsID0+IGwuY29uZmlnLmxhYmVsfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9KTtcclxuXHJcbiAgUG9seWdvbkZpbHRlci5kaXNwbGF5TmFtZSA9ICdQb2x5Z29uRmlsdGVyJztcclxuXHJcbiAgcmV0dXJuIFBvbHlnb25GaWx0ZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvbHlnb25GaWx0ZXJGYWN0b3J5O1xyXG4iXX0=