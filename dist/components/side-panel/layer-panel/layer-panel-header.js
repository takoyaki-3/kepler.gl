"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.DragHandle = exports.defaultProps = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactSortableHoc = require("react-sortable-hoc");

var _panelHeaderAction = _interopRequireDefault(require("../panel-header-action"));

var _icons = require("../../common/icons");

var _styledComponents2 = require("../../common/styled-components");

var _reactIntl = require("react-intl");

function _templateObject5() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  align-items: center;\n  opacity: 0;\n  z-index: 1000;\n\n  :hover {\n    cursor: move;\n    opacity: 1;\n    color: ", ";\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  margin-left: 4px;\n\n  .layer__title__type {\n    color: ", ";\n    font-size: 10px;\n    line-height: 12px;\n    letter-spacing: 0.37px;\n    text-transform: capitalize;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  color: ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  .layer__remove-layer {\n    opacity: 0;\n  }\n  :hover {\n    cursor: pointer;\n    background-color: ", ";\n\n    .layer__drag-handle {\n      opacity: 1;\n    }\n\n    .layer__remove-layer {\n      opacity: 1;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var propTypes = {
  // required
  layerId: _propTypes["default"].string.isRequired,
  isVisible: _propTypes["default"].bool.isRequired,
  onToggleVisibility: _propTypes["default"].func.isRequired,
  onUpdateLayerLabel: _propTypes["default"].func.isRequired,
  onToggleEnableConfig: _propTypes["default"].func.isRequired,
  onRemoveLayer: _propTypes["default"].func.isRequired,
  isConfigActive: _propTypes["default"].bool.isRequired,
  // optional
  showRemoveLayer: _propTypes["default"].bool,
  label: _propTypes["default"].string,
  layerType: _propTypes["default"].string,
  isDragNDropEnabled: _propTypes["default"].bool,
  labelRCGColorValues: _propTypes["default"].arrayOf(_propTypes["default"].number)
};
var defaultProps = {
  isDragNDropEnabled: true,
  showRemoveLayer: true
};
exports.defaultProps = defaultProps;
var StyledLayerPanelHeader = (0, _styledComponents["default"])(_styledComponents2.StyledPanelHeader)(_templateObject(), function (props) {
  return props.theme.panelBackgroundHover;
});

var HeaderLabelSection = _styledComponents["default"].div(_templateObject2(), function (props) {
  return props.theme.textColor;
});

var HeaderActionSection = _styledComponents["default"].div(_templateObject3());

var LayerTitleSection = _styledComponents["default"].div(_templateObject4(), function (props) {
  return props.theme.subtextColor;
});

var StyledDragHandle = _styledComponents["default"].div(_templateObject5(), function (props) {
  return props.theme.textColorHl;
});

var DragHandle = (0, _reactSortableHoc.sortableHandle)(function (_ref) {
  var className = _ref.className,
      children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement(StyledDragHandle, {
    className: className
  }, children);
});
exports.DragHandle = DragHandle;

var LayerLabelEditor = function LayerLabelEditor(_ref2) {
  var layerId = _ref2.layerId,
      label = _ref2.label,
      onEdit = _ref2.onEdit;
  return /*#__PURE__*/_react["default"].createElement(_styledComponents2.InlineInput, {
    type: "text",
    className: "layer__title__editor",
    value: label,
    onClick: function onClick(e) {
      e.stopPropagation();
    },
    onChange: onEdit,
    id: "".concat(layerId, ":input-layer-label")
  });
};

function LayerPanelHeaderFactory() {
  var LayerPanelHeader = function LayerPanelHeader(_ref3) {
    var isConfigActive = _ref3.isConfigActive,
        isDragNDropEnabled = _ref3.isDragNDropEnabled,
        isVisible = _ref3.isVisible,
        label = _ref3.label,
        layerId = _ref3.layerId,
        layerType = _ref3.layerType,
        labelRCGColorValues = _ref3.labelRCGColorValues,
        onToggleVisibility = _ref3.onToggleVisibility,
        onUpdateLayerLabel = _ref3.onUpdateLayerLabel,
        onToggleEnableConfig = _ref3.onToggleEnableConfig,
        onRemoveLayer = _ref3.onRemoveLayer,
        showRemoveLayer = _ref3.showRemoveLayer;
    return /*#__PURE__*/_react["default"].createElement(StyledLayerPanelHeader, {
      className: (0, _classnames["default"])('layer-panel__header', {
        'sort--handle': !isConfigActive
      }),
      active: isConfigActive,
      labelRCGColorValues: labelRCGColorValues,
      onClick: onToggleEnableConfig
    }, /*#__PURE__*/_react["default"].createElement(HeaderLabelSection, {
      className: "layer-panel__header__content"
    }, isDragNDropEnabled && /*#__PURE__*/_react["default"].createElement(DragHandle, {
      className: "layer__drag-handle"
    }, /*#__PURE__*/_react["default"].createElement(_icons.VertDots, {
      height: "20px"
    })), /*#__PURE__*/_react["default"].createElement(LayerTitleSection, {
      className: "layer__title"
    }, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(LayerLabelEditor, {
      layerId: layerId,
      label: label,
      onEdit: onUpdateLayerLabel
    }), /*#__PURE__*/_react["default"].createElement("div", {
      className: "layer__title__type"
    }, layerType && /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
      id: "layer.type.".concat(layerType.toLowerCase())
    }))))), /*#__PURE__*/_react["default"].createElement(HeaderActionSection, {
      className: "layer-panel__header__actions"
    }, showRemoveLayer ? /*#__PURE__*/_react["default"].createElement(_panelHeaderAction["default"], {
      className: "layer__remove-layer",
      id: layerId,
      tooltip: 'tooltip.removeLayer',
      onClick: onRemoveLayer,
      tooltipType: "error",
      IconComponent: _icons.Trash
    }) : null, /*#__PURE__*/_react["default"].createElement(_panelHeaderAction["default"], {
      className: "layer__visibility-toggle",
      id: layerId,
      tooltip: isVisible ? 'tooltip.hideLayer' : 'tooltip.showLayer',
      onClick: onToggleVisibility,
      IconComponent: isVisible ? _icons.EyeSeen : _icons.EyeUnseen
    }), /*#__PURE__*/_react["default"].createElement(_panelHeaderAction["default"], {
      className: "layer__enable-config",
      id: layerId,
      tooltip: 'tooltip.layerSettings',
      onClick: onToggleEnableConfig,
      IconComponent: _icons.ArrowDown
    })));
  };

  LayerPanelHeader.propTypes = propTypes;
  LayerPanelHeader.defaultProps = defaultProps;
  return LayerPanelHeader;
}

var _default = LayerPanelHeaderFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NpZGUtcGFuZWwvbGF5ZXItcGFuZWwvbGF5ZXItcGFuZWwtaGVhZGVyLmpzIl0sIm5hbWVzIjpbInByb3BUeXBlcyIsImxheWVySWQiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwiaXNWaXNpYmxlIiwiYm9vbCIsIm9uVG9nZ2xlVmlzaWJpbGl0eSIsImZ1bmMiLCJvblVwZGF0ZUxheWVyTGFiZWwiLCJvblRvZ2dsZUVuYWJsZUNvbmZpZyIsIm9uUmVtb3ZlTGF5ZXIiLCJpc0NvbmZpZ0FjdGl2ZSIsInNob3dSZW1vdmVMYXllciIsImxhYmVsIiwibGF5ZXJUeXBlIiwiaXNEcmFnTkRyb3BFbmFibGVkIiwibGFiZWxSQ0dDb2xvclZhbHVlcyIsImFycmF5T2YiLCJudW1iZXIiLCJkZWZhdWx0UHJvcHMiLCJTdHlsZWRMYXllclBhbmVsSGVhZGVyIiwiU3R5bGVkUGFuZWxIZWFkZXIiLCJwcm9wcyIsInRoZW1lIiwicGFuZWxCYWNrZ3JvdW5kSG92ZXIiLCJIZWFkZXJMYWJlbFNlY3Rpb24iLCJzdHlsZWQiLCJkaXYiLCJ0ZXh0Q29sb3IiLCJIZWFkZXJBY3Rpb25TZWN0aW9uIiwiTGF5ZXJUaXRsZVNlY3Rpb24iLCJzdWJ0ZXh0Q29sb3IiLCJTdHlsZWREcmFnSGFuZGxlIiwidGV4dENvbG9ySGwiLCJEcmFnSGFuZGxlIiwiY2xhc3NOYW1lIiwiY2hpbGRyZW4iLCJMYXllckxhYmVsRWRpdG9yIiwib25FZGl0IiwiZSIsInN0b3BQcm9wYWdhdGlvbiIsIkxheWVyUGFuZWxIZWFkZXJGYWN0b3J5IiwiTGF5ZXJQYW5lbEhlYWRlciIsInRvTG93ZXJDYXNlIiwiVHJhc2giLCJFeWVTZWVuIiwiRXllVW5zZWVuIiwiQXJyb3dEb3duIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7Ozs7Ozs7Ozs7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WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7c29ydGFibGVIYW5kbGV9IGZyb20gJ3JlYWN0LXNvcnRhYmxlLWhvYyc7XHJcbmltcG9ydCBQYW5lbEhlYWRlckFjdGlvbiBmcm9tICdjb21wb25lbnRzL3NpZGUtcGFuZWwvcGFuZWwtaGVhZGVyLWFjdGlvbic7XHJcbmltcG9ydCB7QXJyb3dEb3duLCBFeWVTZWVuLCBFeWVVbnNlZW4sIFRyYXNoLCBWZXJ0RG90c30gZnJvbSAnY29tcG9uZW50cy9jb21tb24vaWNvbnMnO1xyXG5cclxuaW1wb3J0IHtJbmxpbmVJbnB1dCwgU3R5bGVkUGFuZWxIZWFkZXJ9IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHtGb3JtYXR0ZWRNZXNzYWdlfSBmcm9tICdyZWFjdC1pbnRsJztcclxuXHJcbmNvbnN0IHByb3BUeXBlcyA9IHtcclxuICAvLyByZXF1aXJlZFxyXG4gIGxheWVySWQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICBpc1Zpc2libGU6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXHJcbiAgb25Ub2dnbGVWaXNpYmlsaXR5OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gIG9uVXBkYXRlTGF5ZXJMYWJlbDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICBvblRvZ2dsZUVuYWJsZUNvbmZpZzogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICBvblJlbW92ZUxheWVyOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gIGlzQ29uZmlnQWN0aXZlOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxyXG5cclxuICAvLyBvcHRpb25hbFxyXG4gIHNob3dSZW1vdmVMYXllcjogUHJvcFR5cGVzLmJvb2wsXHJcbiAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgbGF5ZXJUeXBlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIGlzRHJhZ05Ecm9wRW5hYmxlZDogUHJvcFR5cGVzLmJvb2wsXHJcbiAgbGFiZWxSQ0dDb2xvclZhbHVlczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm51bWJlcilcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBkZWZhdWx0UHJvcHMgPSB7XHJcbiAgaXNEcmFnTkRyb3BFbmFibGVkOiB0cnVlLFxyXG4gIHNob3dSZW1vdmVMYXllcjogdHJ1ZVxyXG59O1xyXG5cclxuY29uc3QgU3R5bGVkTGF5ZXJQYW5lbEhlYWRlciA9IHN0eWxlZChTdHlsZWRQYW5lbEhlYWRlcilgXHJcbiAgLmxheWVyX19yZW1vdmUtbGF5ZXIge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbiAgOmhvdmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUucGFuZWxCYWNrZ3JvdW5kSG92ZXJ9O1xyXG5cclxuICAgIC5sYXllcl9fZHJhZy1oYW5kbGUge1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG5cclxuICAgIC5sYXllcl9fcmVtb3ZlLWxheWVyIHtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBIZWFkZXJMYWJlbFNlY3Rpb24gPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudGV4dENvbG9yfTtcclxuYDtcclxuXHJcbmNvbnN0IEhlYWRlckFjdGlvblNlY3Rpb24gPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbmA7XHJcblxyXG5jb25zdCBMYXllclRpdGxlU2VjdGlvbiA9IHN0eWxlZC5kaXZgXHJcbiAgbWFyZ2luLWxlZnQ6IDRweDtcclxuXHJcbiAgLmxheWVyX190aXRsZV9fdHlwZSB7XHJcbiAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5zdWJ0ZXh0Q29sb3J9O1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEycHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4zN3B4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgU3R5bGVkRHJhZ0hhbmRsZSA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgei1pbmRleDogMTAwMDtcclxuXHJcbiAgOmhvdmVyIHtcclxuICAgIGN1cnNvcjogbW92ZTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50ZXh0Q29sb3JIbH07XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IERyYWdIYW5kbGUgPSBzb3J0YWJsZUhhbmRsZSgoe2NsYXNzTmFtZSwgY2hpbGRyZW59KSA9PiAoXHJcbiAgPFN0eWxlZERyYWdIYW5kbGUgY2xhc3NOYW1lPXtjbGFzc05hbWV9PntjaGlsZHJlbn08L1N0eWxlZERyYWdIYW5kbGU+XHJcbikpO1xyXG5cclxuY29uc3QgTGF5ZXJMYWJlbEVkaXRvciA9ICh7bGF5ZXJJZCwgbGFiZWwsIG9uRWRpdH0pID0+IChcclxuICA8SW5saW5lSW5wdXRcclxuICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgIGNsYXNzTmFtZT1cImxheWVyX190aXRsZV9fZWRpdG9yXCJcclxuICAgIHZhbHVlPXtsYWJlbH1cclxuICAgIG9uQ2xpY2s9e2UgPT4ge1xyXG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgfX1cclxuICAgIG9uQ2hhbmdlPXtvbkVkaXR9XHJcbiAgICBpZD17YCR7bGF5ZXJJZH06aW5wdXQtbGF5ZXItbGFiZWxgfVxyXG4gIC8+XHJcbik7XHJcblxyXG5mdW5jdGlvbiBMYXllclBhbmVsSGVhZGVyRmFjdG9yeSgpIHtcclxuICBjb25zdCBMYXllclBhbmVsSGVhZGVyID0gKHtcclxuICAgIGlzQ29uZmlnQWN0aXZlLFxyXG4gICAgaXNEcmFnTkRyb3BFbmFibGVkLFxyXG4gICAgaXNWaXNpYmxlLFxyXG4gICAgbGFiZWwsXHJcbiAgICBsYXllcklkLFxyXG4gICAgbGF5ZXJUeXBlLFxyXG4gICAgbGFiZWxSQ0dDb2xvclZhbHVlcyxcclxuICAgIG9uVG9nZ2xlVmlzaWJpbGl0eSxcclxuICAgIG9uVXBkYXRlTGF5ZXJMYWJlbCxcclxuICAgIG9uVG9nZ2xlRW5hYmxlQ29uZmlnLFxyXG4gICAgb25SZW1vdmVMYXllcixcclxuICAgIHNob3dSZW1vdmVMYXllclxyXG4gIH0pID0+IChcclxuICAgIDxTdHlsZWRMYXllclBhbmVsSGVhZGVyXHJcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcygnbGF5ZXItcGFuZWxfX2hlYWRlcicsIHtcclxuICAgICAgICAnc29ydC0taGFuZGxlJzogIWlzQ29uZmlnQWN0aXZlXHJcbiAgICAgIH0pfVxyXG4gICAgICBhY3RpdmU9e2lzQ29uZmlnQWN0aXZlfVxyXG4gICAgICBsYWJlbFJDR0NvbG9yVmFsdWVzPXtsYWJlbFJDR0NvbG9yVmFsdWVzfVxyXG4gICAgICBvbkNsaWNrPXtvblRvZ2dsZUVuYWJsZUNvbmZpZ31cclxuICAgID5cclxuICAgICAgPEhlYWRlckxhYmVsU2VjdGlvbiBjbGFzc05hbWU9XCJsYXllci1wYW5lbF9faGVhZGVyX19jb250ZW50XCI+XHJcbiAgICAgICAge2lzRHJhZ05Ecm9wRW5hYmxlZCAmJiAoXHJcbiAgICAgICAgICA8RHJhZ0hhbmRsZSBjbGFzc05hbWU9XCJsYXllcl9fZHJhZy1oYW5kbGVcIj5cclxuICAgICAgICAgICAgPFZlcnREb3RzIGhlaWdodD1cIjIwcHhcIiAvPlxyXG4gICAgICAgICAgPC9EcmFnSGFuZGxlPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgPExheWVyVGl0bGVTZWN0aW9uIGNsYXNzTmFtZT1cImxheWVyX190aXRsZVwiPlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPExheWVyTGFiZWxFZGl0b3IgbGF5ZXJJZD17bGF5ZXJJZH0gbGFiZWw9e2xhYmVsfSBvbkVkaXQ9e29uVXBkYXRlTGF5ZXJMYWJlbH0gLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYXllcl9fdGl0bGVfX3R5cGVcIj5cclxuICAgICAgICAgICAgICB7bGF5ZXJUeXBlICYmIDxGb3JtYXR0ZWRNZXNzYWdlIGlkPXtgbGF5ZXIudHlwZS4ke2xheWVyVHlwZS50b0xvd2VyQ2FzZSgpfWB9IC8+fVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvTGF5ZXJUaXRsZVNlY3Rpb24+XHJcbiAgICAgIDwvSGVhZGVyTGFiZWxTZWN0aW9uPlxyXG4gICAgICA8SGVhZGVyQWN0aW9uU2VjdGlvbiBjbGFzc05hbWU9XCJsYXllci1wYW5lbF9faGVhZGVyX19hY3Rpb25zXCI+XHJcbiAgICAgICAge3Nob3dSZW1vdmVMYXllciA/IChcclxuICAgICAgICAgIDxQYW5lbEhlYWRlckFjdGlvblxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJsYXllcl9fcmVtb3ZlLWxheWVyXCJcclxuICAgICAgICAgICAgaWQ9e2xheWVySWR9XHJcbiAgICAgICAgICAgIHRvb2x0aXA9eyd0b29sdGlwLnJlbW92ZUxheWVyJ31cclxuICAgICAgICAgICAgb25DbGljaz17b25SZW1vdmVMYXllcn1cclxuICAgICAgICAgICAgdG9vbHRpcFR5cGU9XCJlcnJvclwiXHJcbiAgICAgICAgICAgIEljb25Db21wb25lbnQ9e1RyYXNofVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApIDogbnVsbH1cclxuICAgICAgICA8UGFuZWxIZWFkZXJBY3Rpb25cclxuICAgICAgICAgIGNsYXNzTmFtZT1cImxheWVyX192aXNpYmlsaXR5LXRvZ2dsZVwiXHJcbiAgICAgICAgICBpZD17bGF5ZXJJZH1cclxuICAgICAgICAgIHRvb2x0aXA9e2lzVmlzaWJsZSA/ICd0b29sdGlwLmhpZGVMYXllcicgOiAndG9vbHRpcC5zaG93TGF5ZXInfVxyXG4gICAgICAgICAgb25DbGljaz17b25Ub2dnbGVWaXNpYmlsaXR5fVxyXG4gICAgICAgICAgSWNvbkNvbXBvbmVudD17aXNWaXNpYmxlID8gRXllU2VlbiA6IEV5ZVVuc2Vlbn1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxQYW5lbEhlYWRlckFjdGlvblxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwibGF5ZXJfX2VuYWJsZS1jb25maWdcIlxyXG4gICAgICAgICAgaWQ9e2xheWVySWR9XHJcbiAgICAgICAgICB0b29sdGlwPXsndG9vbHRpcC5sYXllclNldHRpbmdzJ31cclxuICAgICAgICAgIG9uQ2xpY2s9e29uVG9nZ2xlRW5hYmxlQ29uZmlnfVxyXG4gICAgICAgICAgSWNvbkNvbXBvbmVudD17QXJyb3dEb3dufVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvSGVhZGVyQWN0aW9uU2VjdGlvbj5cclxuICAgIDwvU3R5bGVkTGF5ZXJQYW5lbEhlYWRlcj5cclxuICApO1xyXG5cclxuICBMYXllclBhbmVsSGVhZGVyLnByb3BUeXBlcyA9IHByb3BUeXBlcztcclxuICBMYXllclBhbmVsSGVhZGVyLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcclxuXHJcbiAgcmV0dXJuIExheWVyUGFuZWxIZWFkZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheWVyUGFuZWxIZWFkZXJGYWN0b3J5O1xyXG4iXX0=