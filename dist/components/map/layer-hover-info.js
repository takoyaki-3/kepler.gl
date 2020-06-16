"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.StyledLayerName = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledComponents2 = require("../common/styled-components");

var _icons = require("../common/icons");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _dataUtils = require("../../utils/data-utils");

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  color: ", ";\n  font-size: 12px;\n  letter-spacing: 0.43px;\n  text-transform: capitalize;\n  padding: 0 14px;\n  margin-top: 12px;\n\n  svg {\n    margin-right: 4px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var StyledLayerName = (0, _styledComponents["default"])(_styledComponents2.CenterFlexbox)(_templateObject(), function (props) {
  return props.theme.textColorHl;
});
exports.StyledLayerName = StyledLayerName;

var Row = function Row(_ref) {
  var name = _ref.name,
      value = _ref.value,
      url = _ref.url;

  // Set 'url' to 'value' if it looks like a url
  if (!url && value && typeof value === 'string' && value.match(/^http/)) {
    url = value;
  }

  var asImg = /<img>/.test(name);
  return /*#__PURE__*/_react["default"].createElement("tr", {
    className: "row",
    key: name
  }, /*#__PURE__*/_react["default"].createElement("td", {
    className: "row__name"
  }, name), /*#__PURE__*/_react["default"].createElement("td", {
    className: "row__value"
  }, asImg ? /*#__PURE__*/_react["default"].createElement("img", {
    src: value
  }) : url ? /*#__PURE__*/_react["default"].createElement("a", {
    target: "_blank",
    rel: "noopener noreferrer",
    href: url
  }, value) : value));
};

var EntryInfo = function EntryInfo(_ref2) {
  var fieldsToShow = _ref2.fieldsToShow,
      fields = _ref2.fields,
      data = _ref2.data;
  return /*#__PURE__*/_react["default"].createElement("tbody", null, fieldsToShow.map(function (item) {
    return /*#__PURE__*/_react["default"].createElement(EntryInfoRow, {
      key: item.name,
      item: item,
      fields: fields,
      data: data
    });
  }));
};

var EntryInfoRow = function EntryInfoRow(_ref3) {
  var item = _ref3.item,
      fields = _ref3.fields,
      data = _ref3.data;
  var field = fields.find(function (f) {
    return f.name === item.name;
  });

  if (!field) {
    return null;
  }

  var valueIdx = field.tableFieldIndex - 1;
  var displayValue = item.format ? (0, _dataUtils.getFormatter)(item.format, field)(data[valueIdx]) : (0, _dataUtils.parseFieldValue)(data[valueIdx], field.type);
  return /*#__PURE__*/_react["default"].createElement(Row, {
    name: item.name,
    value: displayValue
  });
};

var CellInfo = function CellInfo(_ref4) {
  var data = _ref4.data,
      layer = _ref4.layer;
  var _layer$config = layer.config,
      colorField = _layer$config.colorField,
      sizeField = _layer$config.sizeField;
  return /*#__PURE__*/_react["default"].createElement("tbody", null, /*#__PURE__*/_react["default"].createElement(Row, {
    name: 'total points',
    key: "count",
    value: data.points && data.points.length
  }), colorField && layer.visualChannels.color ? /*#__PURE__*/_react["default"].createElement(Row, {
    name: layer.getVisualChannelDescription('color').measure,
    key: "color",
    value: data.colorValue || 'N/A'
  }) : null, sizeField && layer.visualChannels.size ? /*#__PURE__*/_react["default"].createElement(Row, {
    name: layer.getVisualChannelDescription('size').measure,
    key: "size",
    value: data.elevationValue || 'N/A'
  }) : null);
};

var LayerHoverInfoFactory = function LayerHoverInfoFactory() {
  var LayerHoverInfo = function LayerHoverInfo(props) {
    var data = props.data,
        layer = props.layer;

    if (!data || !layer) {
      return null;
    }

    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "map-popover__layer-info"
    }, /*#__PURE__*/_react["default"].createElement(StyledLayerName, {
      className: "map-popover__layer-name"
    }, /*#__PURE__*/_react["default"].createElement(_icons.Layers, {
      height: "12px"
    }), props.layer.config.label), /*#__PURE__*/_react["default"].createElement("table", {
      className: "map-popover__table"
    }, props.layer.isAggregated ? /*#__PURE__*/_react["default"].createElement(CellInfo, props) : /*#__PURE__*/_react["default"].createElement(EntryInfo, props)));
  };

  LayerHoverInfo.propTypes = {
    fields: _propTypes["default"].arrayOf(_propTypes["default"].any),
    fieldsToShow: _propTypes["default"].arrayOf(_propTypes["default"].any),
    layer: _propTypes["default"].object,
    data: _propTypes["default"].oneOfType([_propTypes["default"].arrayOf(_propTypes["default"].any), _propTypes["default"].object])
  };
  return LayerHoverInfo;
};

var _default = LayerHoverInfoFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL21hcC9sYXllci1ob3Zlci1pbmZvLmpzIl0sIm5hbWVzIjpbIlN0eWxlZExheWVyTmFtZSIsIkNlbnRlckZsZXhib3giLCJwcm9wcyIsInRoZW1lIiwidGV4dENvbG9ySGwiLCJSb3ciLCJuYW1lIiwidmFsdWUiLCJ1cmwiLCJtYXRjaCIsImFzSW1nIiwidGVzdCIsIkVudHJ5SW5mbyIsImZpZWxkc1RvU2hvdyIsImZpZWxkcyIsImRhdGEiLCJtYXAiLCJpdGVtIiwiRW50cnlJbmZvUm93IiwiZmllbGQiLCJmaW5kIiwiZiIsInZhbHVlSWR4IiwidGFibGVGaWVsZEluZGV4IiwiZGlzcGxheVZhbHVlIiwiZm9ybWF0IiwidHlwZSIsIkNlbGxJbmZvIiwibGF5ZXIiLCJjb25maWciLCJjb2xvckZpZWxkIiwic2l6ZUZpZWxkIiwicG9pbnRzIiwibGVuZ3RoIiwidmlzdWFsQ2hhbm5lbHMiLCJjb2xvciIsImdldFZpc3VhbENoYW5uZWxEZXNjcmlwdGlvbiIsIm1lYXN1cmUiLCJjb2xvclZhbHVlIiwic2l6ZSIsImVsZXZhdGlvblZhbHVlIiwiTGF5ZXJIb3ZlckluZm9GYWN0b3J5IiwiTGF5ZXJIb3ZlckluZm8iLCJsYWJlbCIsImlzQWdncmVnYXRlZCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImFycmF5T2YiLCJhbnkiLCJvYmplY3QiLCJvbmVPZlR5cGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7QUFFTyxJQUFNQSxlQUFlLEdBQUcsa0NBQU9DLGdDQUFQLENBQUgsb0JBQ2pCLFVBQUFDLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBaEI7QUFBQSxDQURZLENBQXJCOzs7QUFhUCxJQUFNQyxHQUFHLEdBQUcsU0FBTkEsR0FBTSxPQUF3QjtBQUFBLE1BQXRCQyxJQUFzQixRQUF0QkEsSUFBc0I7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QUM7QUFBM0Isb0JBQ0UsZ0NBQUMsYUFBRDtBQUFRLE1BQUEsTUFBTSxFQUFDO0FBQWYsTUFERixFQUVHMUIsS0FBSyxDQUFDMEIsS0FBTixDQUFZQyxNQUFaLENBQW1CYyxLQUZ0QixDQURGLGVBS0U7QUFBTyxNQUFBLFNBQVMsRUFBQztBQUFqQixPQUNHekMsS0FBSyxDQUFDMEIsS0FBTixDQUFZZ0IsWUFBWixnQkFBMkIsZ0NBQUMsUUFBRCxFQUFjMUMsS0FBZCxDQUEzQixnQkFBcUQsZ0NBQUMsU0FBRCxFQUFlQSxLQUFmLENBRHhELENBTEYsQ0FERjtBQVdELEdBbEJEOztBQW9CQXdDLEVBQUFBLGNBQWMsQ0FBQ0csU0FBZixHQUEyQjtBQUN6Qi9CLElBQUFBLE1BQU0sRUFBRWdDLHNCQUFVQyxPQUFWLENBQWtCRCxzQkFBVUUsR0FBNUIsQ0FEaUI7QUFFekJuQyxJQUFBQSxZQUFZLEVBQUVpQyxzQkFBVUMsT0FBVixDQUFrQkQsc0JBQVVFLEdBQTVCLENBRlc7QUFHekJwQixJQUFBQSxLQUFLLEVBQUVrQixzQkFBVUcsTUFIUTtBQUl6QmxDLElBQUFBLElBQUksRUFBRStCLHNCQUFVSSxTQUFWLENBQW9CLENBQUNKLHNCQUFVQyxPQUFWLENBQWtCRCxzQkFBVUUsR0FBNUIsQ0FBRCxFQUFtQ0Ysc0JBQVVHLE1BQTdDLENBQXBCO0FBSm1CLEdBQTNCO0FBTUEsU0FBT1AsY0FBUDtBQUNELENBNUJEOztlQThCZUQscUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHtDZW50ZXJGbGV4Ym94fSBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9zdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7TGF5ZXJzfSBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9pY29ucyc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7cGFyc2VGaWVsZFZhbHVlLCBnZXRGb3JtYXR0ZXJ9IGZyb20gJ3V0aWxzL2RhdGEtdXRpbHMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFN0eWxlZExheWVyTmFtZSA9IHN0eWxlZChDZW50ZXJGbGV4Ym94KWBcclxuICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50ZXh0Q29sb3JIbH07XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjQzcHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgcGFkZGluZzogMCAxNHB4O1xyXG4gIG1hcmdpbi10b3A6IDEycHg7XHJcblxyXG4gIHN2ZyB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDRweDtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBSb3cgPSAoe25hbWUsIHZhbHVlLCB1cmx9KSA9PiB7XHJcbiAgLy8gU2V0ICd1cmwnIHRvICd2YWx1ZScgaWYgaXQgbG9va3MgbGlrZSBhIHVybFxyXG4gIGlmICghdXJsICYmIHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgdmFsdWUubWF0Y2goL15odHRwLykpIHtcclxuICAgIHVybCA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgYXNJbWcgPSAvPGltZz4vLnRlc3QobmFtZSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDx0ciBjbGFzc05hbWU9XCJyb3dcIiBrZXk9e25hbWV9PlxyXG4gICAgICA8dGQgY2xhc3NOYW1lPVwicm93X19uYW1lXCI+e25hbWV9PC90ZD5cclxuICAgICAgPHRkIGNsYXNzTmFtZT1cInJvd19fdmFsdWVcIj5cclxuICAgICAgICB7YXNJbWcgPyAoXHJcbiAgICAgICAgICA8aW1nIHNyYz17dmFsdWV9IC8+XHJcbiAgICAgICAgKSA6IHVybCA/IChcclxuICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIiBocmVmPXt1cmx9PlxyXG4gICAgICAgICAgICB7dmFsdWV9XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIHZhbHVlXHJcbiAgICAgICAgKX1cclxuICAgICAgPC90ZD5cclxuICAgIDwvdHI+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IEVudHJ5SW5mbyA9ICh7ZmllbGRzVG9TaG93LCBmaWVsZHMsIGRhdGF9KSA9PiAoXHJcbiAgPHRib2R5PlxyXG4gICAge2ZpZWxkc1RvU2hvdy5tYXAoaXRlbSA9PiAoXHJcbiAgICAgIDxFbnRyeUluZm9Sb3cga2V5PXtpdGVtLm5hbWV9IGl0ZW09e2l0ZW19IGZpZWxkcz17ZmllbGRzfSBkYXRhPXtkYXRhfSAvPlxyXG4gICAgKSl9XHJcbiAgPC90Ym9keT5cclxuKTtcclxuXHJcbmNvbnN0IEVudHJ5SW5mb1JvdyA9ICh7aXRlbSwgZmllbGRzLCBkYXRhfSkgPT4ge1xyXG4gIGNvbnN0IGZpZWxkID0gZmllbGRzLmZpbmQoZiA9PiBmLm5hbWUgPT09IGl0ZW0ubmFtZSk7XHJcbiAgaWYgKCFmaWVsZCkge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICBjb25zdCB2YWx1ZUlkeCA9IGZpZWxkLnRhYmxlRmllbGRJbmRleCAtIDE7XHJcbiAgY29uc3QgZGlzcGxheVZhbHVlID0gaXRlbS5mb3JtYXRcclxuICAgID8gZ2V0Rm9ybWF0dGVyKGl0ZW0uZm9ybWF0LCBmaWVsZCkoZGF0YVt2YWx1ZUlkeF0pXHJcbiAgICA6IHBhcnNlRmllbGRWYWx1ZShkYXRhW3ZhbHVlSWR4XSwgZmllbGQudHlwZSk7XHJcbiAgcmV0dXJuIDxSb3cgbmFtZT17aXRlbS5uYW1lfSB2YWx1ZT17ZGlzcGxheVZhbHVlfSAvPjtcclxufTtcclxuXHJcbmNvbnN0IENlbGxJbmZvID0gKHtkYXRhLCBsYXllcn0pID0+IHtcclxuICBjb25zdCB7Y29sb3JGaWVsZCwgc2l6ZUZpZWxkfSA9IGxheWVyLmNvbmZpZztcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDx0Ym9keT5cclxuICAgICAgPFJvdyBuYW1lPXsndG90YWwgcG9pbnRzJ30ga2V5PVwiY291bnRcIiB2YWx1ZT17ZGF0YS5wb2ludHMgJiYgZGF0YS5wb2ludHMubGVuZ3RofSAvPlxyXG4gICAgICB7Y29sb3JGaWVsZCAmJiBsYXllci52aXN1YWxDaGFubmVscy5jb2xvciA/IChcclxuICAgICAgICA8Um93XHJcbiAgICAgICAgICBuYW1lPXtsYXllci5nZXRWaXN1YWxDaGFubmVsRGVzY3JpcHRpb24oJ2NvbG9yJykubWVhc3VyZX1cclxuICAgICAgICAgIGtleT1cImNvbG9yXCJcclxuICAgICAgICAgIHZhbHVlPXtkYXRhLmNvbG9yVmFsdWUgfHwgJ04vQSd9XHJcbiAgICAgICAgLz5cclxuICAgICAgKSA6IG51bGx9XHJcbiAgICAgIHtzaXplRmllbGQgJiYgbGF5ZXIudmlzdWFsQ2hhbm5lbHMuc2l6ZSA/IChcclxuICAgICAgICA8Um93XHJcbiAgICAgICAgICBuYW1lPXtsYXllci5nZXRWaXN1YWxDaGFubmVsRGVzY3JpcHRpb24oJ3NpemUnKS5tZWFzdXJlfVxyXG4gICAgICAgICAga2V5PVwic2l6ZVwiXHJcbiAgICAgICAgICB2YWx1ZT17ZGF0YS5lbGV2YXRpb25WYWx1ZSB8fCAnTi9BJ31cclxuICAgICAgICAvPlxyXG4gICAgICApIDogbnVsbH1cclxuICAgIDwvdGJvZHk+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IExheWVySG92ZXJJbmZvRmFjdG9yeSA9ICgpID0+IHtcclxuICBjb25zdCBMYXllckhvdmVySW5mbyA9IHByb3BzID0+IHtcclxuICAgIGNvbnN0IHtkYXRhLCBsYXllcn0gPSBwcm9wcztcclxuXHJcbiAgICBpZiAoIWRhdGEgfHwgIWxheWVyKSB7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFwLXBvcG92ZXJfX2xheWVyLWluZm9cIj5cclxuICAgICAgICA8U3R5bGVkTGF5ZXJOYW1lIGNsYXNzTmFtZT1cIm1hcC1wb3BvdmVyX19sYXllci1uYW1lXCI+XHJcbiAgICAgICAgICA8TGF5ZXJzIGhlaWdodD1cIjEycHhcIiAvPlxyXG4gICAgICAgICAge3Byb3BzLmxheWVyLmNvbmZpZy5sYWJlbH1cclxuICAgICAgICA8L1N0eWxlZExheWVyTmFtZT5cclxuICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwibWFwLXBvcG92ZXJfX3RhYmxlXCI+XHJcbiAgICAgICAgICB7cHJvcHMubGF5ZXIuaXNBZ2dyZWdhdGVkID8gPENlbGxJbmZvIHsuLi5wcm9wc30gLz4gOiA8RW50cnlJbmZvIHsuLi5wcm9wc30gLz59XHJcbiAgICAgICAgPC90YWJsZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIExheWVySG92ZXJJbmZvLnByb3BUeXBlcyA9IHtcclxuICAgIGZpZWxkczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLmFueSksXHJcbiAgICBmaWVsZHNUb1Nob3c6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5hbnkpLFxyXG4gICAgbGF5ZXI6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgICBkYXRhOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuYW55KSwgUHJvcFR5cGVzLm9iamVjdF0pXHJcbiAgfTtcclxuICByZXR1cm4gTGF5ZXJIb3ZlckluZm87XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXllckhvdmVySW5mb0ZhY3Rvcnk7XHJcbiJdfQ==