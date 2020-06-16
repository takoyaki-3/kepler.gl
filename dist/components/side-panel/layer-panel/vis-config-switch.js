"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _infoHelper = _interopRequireDefault(require("../../common/info-helper"));

var _switch = _interopRequireDefault(require("../../common/switch"));

var _styledComponents2 = require("../../common/styled-components");

var _utils = require("../../../utils/utils");

var _reactIntl = require("react-intl");

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  justify-content: space-between;\n\n  .vis-config-switch__title {\n    display: flex;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var propTypes = {
  layer: _propTypes["default"].object.isRequired,
  property: _propTypes["default"].string.isRequired,
  onChange: _propTypes["default"].func.isRequired,
  label: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].bool, _propTypes["default"].func]),
  description: _propTypes["default"].string,
  disabled: _propTypes["default"].bool
};

var StyledVisConfigSwitch = _styledComponents["default"].div(_templateObject());

var VisConfigSwitch = function VisConfigSwitch(_ref) {
  var _ref$layer = _ref.layer,
      id = _ref$layer.id,
      config = _ref$layer.config,
      property = _ref.property,
      _onChange2 = _ref.onChange,
      label = _ref.label,
      description = _ref.description,
      disabled = _ref.disabled;
  return /*#__PURE__*/_react["default"].createElement(_styledComponents2.SidePanelSection, {
    disabled: Boolean(disabled)
  }, /*#__PURE__*/_react["default"].createElement(StyledVisConfigSwitch, {
    className: "vis-config-switch"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "vis-config-switch__title"
  }, label ? /*#__PURE__*/_react["default"].createElement(_styledComponents2.PanelLabel, null, label && /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: label
  }) || (0, _utils.capitalizeFirstLetter)(property)) : null, description ? /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_infoHelper["default"], {
    description: description,
    id: "".concat(id, "-").concat(property, "-description")
  })) : null), /*#__PURE__*/_react["default"].createElement("div", {
    className: "vis-config-switch__switch"
  }, /*#__PURE__*/_react["default"].createElement(_switch["default"], {
    checked: config.visConfig[property],
    id: "".concat(id, "-").concat(property, "-switch"),
    onChange: function onChange() {
      return _onChange2((0, _defineProperty2["default"])({}, property, !config.visConfig[property]));
    }
  }))));
};

VisConfigSwitch.propTypes = propTypes;
var _default = VisConfigSwitch;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NpZGUtcGFuZWwvbGF5ZXItcGFuZWwvdmlzLWNvbmZpZy1zd2l0Y2guanMiXSwibmFtZXMiOlsicHJvcFR5cGVzIiwibGF5ZXIiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwicHJvcGVydHkiLCJzdHJpbmciLCJvbkNoYW5nZSIsImZ1bmMiLCJsYWJlbCIsIm9uZU9mVHlwZSIsImJvb2wiLCJkZXNjcmlwdGlvbiIsImRpc2FibGVkIiwiU3R5bGVkVmlzQ29uZmlnU3dpdGNoIiwic3R5bGVkIiwiZGl2IiwiVmlzQ29uZmlnU3dpdGNoIiwiaWQiLCJjb25maWciLCJCb29sZWFuIiwidmlzQ29uZmlnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxTQUFTLEdBQUc7QUFDaEJDLEVBQUFBLEtBQUssRUFBRUMsc0JBQVVDLE1BQVYsQ0FBaUJDLFVBRFI7QUFFaEJDLEVBQUFBLFFBQVEsRUFBRUgsc0JBQVVJLE1BQVYsQ0FBaUJGLFVBRlg7QUFHaEJHLEVBQUFBLFFBQVEsRUFBRUwsc0JBQVVNLElBQVYsQ0FBZUosVUFIVDtBQUloQkssRUFBQUEsS0FBSyxFQUFFUCxzQkFBVVEsU0FBVixDQUFvQixDQUFDUixzQkFBVUksTUFBWCxFQUFtQkosc0JBQVVTLElBQTdCLEVBQW1DVCxzQkFBVU0sSUFBN0MsQ0FBcEIsQ0FKUztBQUtoQkksRUFBQUEsV0FBVyxFQUFFVixzQkFBVUksTUFMUDtBQU1oQk8sRUFBQUEsUUFBUSxFQUFFWCxzQkFBVVM7QUFOSixDQUFsQjs7QUFTQSxJQUFNRyxxQkFBcUIsR0FBR0MsNkJBQU9DLEdBQVYsbUJBQTNCOztBQVNBLElBQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0I7QUFBQSx3QkFDdEJoQixLQURzQjtBQUFBLE1BQ2RpQixFQURjLGNBQ2RBLEVBRGM7QUFBQSxNQUNWQyxNQURVLGNBQ1ZBLE1BRFU7QUFBQSxNQUV0QmQsUUFGc0IsUUFFdEJBLFFBRnNCO0FBQUEsTUFHdEJFLFVBSHNCLFFBR3RCQSxRQUhzQjtBQUFBLE1BSXRCRSxLQUpzQixRQUl0QkEsS0FKc0I7QUFBQSxNQUt0QkcsV0FMc0IsUUFLdEJBLFdBTHNCO0FBQUEsTUFNdEJDLFFBTnNCLFFBTXRCQSxRQU5zQjtBQUFBLHNCQVF0QixnQ0FBQyxtQ0FBRDtBQUFrQixJQUFBLFFBQVEsRUFBRU8sT0FBTyxDQUFDUCxRQUFEO0FBQW5DLGtCQUNFLGdDQUFDLHFCQUFEO0FBQXVCLElBQUEsU0FBUyxFQUFDO0FBQWpDLGtCQUNFO0FBQUssSUFBQSxTQUFTLEVBQUM7QUFBZixLQUNHSixLQUFLLGdCQUNKLGdDQUFDLDZCQUFELFFBQ0lBLEtBQUssaUJBQUksZ0NBQUMsMkJBQUQ7QUFBa0IsSUFBQSxFQUFFLEVBQUVBO0FBQXRCLElBQVYsSUFBOEMsa0NBQXNCSixRQUF0QixDQURqRCxDQURJLEdBSUYsSUFMTixFQU1HTyxXQUFXLGdCQUNWLDBEQUNFLGdDQUFDLHNCQUFEO0FBQVksSUFBQSxXQUFXLEVBQUVBLFdBQXpCO0FBQXNDLElBQUEsRUFBRSxZQUFLTSxFQUFMLGNBQVdiLFFBQVg7QUFBeEMsSUFERixDQURVLEdBSVIsSUFWTixDQURGLGVBYUU7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLGtCQUNFLGdDQUFDLGtCQUFEO0FBQ0UsSUFBQSxPQUFPLEVBQUVjLE1BQU0sQ0FBQ0UsU0FBUCxDQUFpQmhCLFFBQWpCLENBRFg7QUFFRSxJQUFBLEVBQUUsWUFBS2EsRUFBTCxjQUFXYixRQUFYLFlBRko7QUFHRSxJQUFBLFFBQVEsRUFBRTtBQUFBLGFBQU1FLFVBQVEsc0NBQUdGLFFBQUgsRUFBYyxDQUFDYyxNQUFNLENBQUNFLFNBQVAsQ0FBaUJoQixRQUFqQixDQUFmLEVBQWQ7QUFBQTtBQUhaLElBREYsQ0FiRixDQURGLENBUnNCO0FBQUEsQ0FBeEI7O0FBaUNBWSxlQUFlLENBQUNqQixTQUFoQixHQUE0QkEsU0FBNUI7ZUFFZWlCLGUiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IEluZm9IZWxwZXIgZnJvbSAnY29tcG9uZW50cy9jb21tb24vaW5mby1oZWxwZXInO1xyXG5pbXBvcnQgU3dpdGNoIGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL3N3aXRjaCc7XHJcbmltcG9ydCB7U2lkZVBhbmVsU2VjdGlvbiwgUGFuZWxMYWJlbH0gZnJvbSAnY29tcG9uZW50cy9jb21tb24vc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQge2NhcGl0YWxpemVGaXJzdExldHRlcn0gZnJvbSAndXRpbHMvdXRpbHMnO1xyXG5pbXBvcnQge0Zvcm1hdHRlZE1lc3NhZ2V9IGZyb20gJ3JlYWN0LWludGwnO1xyXG5cclxuY29uc3QgcHJvcFR5cGVzID0ge1xyXG4gIGxheWVyOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXHJcbiAgcHJvcGVydHk6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICBsYWJlbDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmJvb2wsIFByb3BUeXBlcy5mdW5jXSksXHJcbiAgZGVzY3JpcHRpb246IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sXHJcbn07XHJcblxyXG5jb25zdCBTdHlsZWRWaXNDb25maWdTd2l0Y2ggPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICAudmlzLWNvbmZpZy1zd2l0Y2hfX3RpdGxlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgVmlzQ29uZmlnU3dpdGNoID0gKHtcclxuICBsYXllcjoge2lkLCBjb25maWd9LFxyXG4gIHByb3BlcnR5LFxyXG4gIG9uQ2hhbmdlLFxyXG4gIGxhYmVsLFxyXG4gIGRlc2NyaXB0aW9uLFxyXG4gIGRpc2FibGVkXHJcbn0pID0+IChcclxuICA8U2lkZVBhbmVsU2VjdGlvbiBkaXNhYmxlZD17Qm9vbGVhbihkaXNhYmxlZCl9PlxyXG4gICAgPFN0eWxlZFZpc0NvbmZpZ1N3aXRjaCBjbGFzc05hbWU9XCJ2aXMtY29uZmlnLXN3aXRjaFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpcy1jb25maWctc3dpdGNoX190aXRsZVwiPlxyXG4gICAgICAgIHtsYWJlbCA/IChcclxuICAgICAgICAgIDxQYW5lbExhYmVsPlxyXG4gICAgICAgICAgICB7KGxhYmVsICYmIDxGb3JtYXR0ZWRNZXNzYWdlIGlkPXtsYWJlbH0gLz4pIHx8IGNhcGl0YWxpemVGaXJzdExldHRlcihwcm9wZXJ0eSl9XHJcbiAgICAgICAgICA8L1BhbmVsTGFiZWw+XHJcbiAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAge2Rlc2NyaXB0aW9uID8gKFxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPEluZm9IZWxwZXIgZGVzY3JpcHRpb249e2Rlc2NyaXB0aW9ufSBpZD17YCR7aWR9LSR7cHJvcGVydHl9LWRlc2NyaXB0aW9uYH0gLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkgOiBudWxsfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aXMtY29uZmlnLXN3aXRjaF9fc3dpdGNoXCI+XHJcbiAgICAgICAgPFN3aXRjaFxyXG4gICAgICAgICAgY2hlY2tlZD17Y29uZmlnLnZpc0NvbmZpZ1twcm9wZXJ0eV19XHJcbiAgICAgICAgICBpZD17YCR7aWR9LSR7cHJvcGVydHl9LXN3aXRjaGB9XHJcbiAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gb25DaGFuZ2Uoe1twcm9wZXJ0eV06ICFjb25maWcudmlzQ29uZmlnW3Byb3BlcnR5XX0pfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9TdHlsZWRWaXNDb25maWdTd2l0Y2g+XHJcbiAgPC9TaWRlUGFuZWxTZWN0aW9uPlxyXG4pO1xyXG5cclxuVmlzQ29uZmlnU3dpdGNoLnByb3BUeXBlcyA9IHByb3BUeXBlcztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFZpc0NvbmZpZ1N3aXRjaDtcclxuIl19