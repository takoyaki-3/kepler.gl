"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactIntl = require("react-intl");

var _styledComponents2 = require("../common/styled-components");

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  align-items: flex-end;\n  border-bottom-style: solid;\n  border-bottom-width: 2px;\n  border-bottom-color: ", ";\n  color: ", ";\n  display: flex;\n  justify-content: center;\n  margin-right: 12px;\n  padding-bottom: 6px;\n  width: 30px;\n\n  :hover {\n    cursor: pointer;\n    color: ", ";\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  background-color: ", ";\n  padding: 0 16px;\n  display: flex;\n  min-height: 30px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var propTypes = {
  panels: _propTypes["default"].arrayOf(_propTypes["default"].object),
  activePanel: _propTypes["default"].string,
  togglePanel: _propTypes["default"].func
};

var PanelHeaderBottom = _styledComponents["default"].div.attrs({
  className: 'side-side-panel__header__bottom'
})(_templateObject(), function (props) {
  return props.theme.sidePanelHeaderBg;
});

var PanelTab = _styledComponents["default"].div.attrs({
  className: 'side-panel__tab'
})(_templateObject2(), function (props) {
  return props.active ? props.theme.subtextColorActive : 'transparent';
}, function (props) {
  return props.active ? props.theme.subtextColorActive : props.theme.subtextColor;
}, function (props) {
  return props.theme.textColorHl;
});

var PanelToggleFactory = function PanelToggleFactory() {
  var PanelToggle = function PanelToggle(_ref) {
    var panels = _ref.panels,
        activePanel = _ref.activePanel,
        togglePanel = _ref.togglePanel;
    return /*#__PURE__*/_react["default"].createElement(PanelHeaderBottom, null, panels.map(function (panel) {
      return /*#__PURE__*/_react["default"].createElement(PanelTab, {
        key: panel.id,
        "data-tip": true,
        "data-for": "".concat(panel.id, "-nav"),
        active: activePanel === panel.id,
        onClick: function onClick() {
          return togglePanel(panel.id);
        }
      }, /*#__PURE__*/_react["default"].createElement(panel.iconComponent, {
        height: "20px"
      }), /*#__PURE__*/_react["default"].createElement(_styledComponents2.Tooltip, {
        id: "".concat(panel.id, "-nav"),
        effect: "solid",
        delayShow: 500,
        place: "bottom"
      }, /*#__PURE__*/_react["default"].createElement("span", null, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: panel.label || panel.id
      }))));
    }));
  };

  PanelToggle.propTypes = propTypes;
  return PanelToggle;
};

var _default = PanelToggleFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NpZGUtcGFuZWwvcGFuZWwtdG9nZ2xlLmpzIl0sIm5hbWVzIjpbInByb3BUeXBlcyIsInBhbmVscyIsIlByb3BUeXBlcyIsImFycmF5T2YiLCJvYmplY3QiLCJhY3RpdmVQYW5lbCIsInN0cmluZyIsInRvZ2dsZVBhbmVsIiwiZnVuYyIsIlBhbmVsSGVhZGVyQm90dG9tIiwic3R5bGVkIiwiZGl2IiwiYXR0cnMiLCJjbGFzc05hbWUiLCJwcm9wcyIsInRoZW1lIiwic2lkZVBhbmVsSGVhZGVyQmciLCJQYW5lbFRhYiIsImFjdGl2ZSIsInN1YnRleHRDb2xvckFjdGl2ZSIsInN1YnRleHRDb2xvciIsInRleHRDb2xvckhsIiwiUGFuZWxUb2dnbGVGYWN0b3J5IiwiUGFuZWxUb2dnbGUiLCJtYXAiLCJwYW5lbCIsImlkIiwibGFiZWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsU0FBUyxHQUFHO0FBQ2hCQyxFQUFBQSxNQUFNLEVBQUVDLHNCQUFVQyxPQUFWLENBQWtCRCxzQkFBVUUsTUFBNUIsQ0FEUTtBQUVoQkMsRUFBQUEsV0FBVyxFQUFFSCxzQkFBVUksTUFGUDtBQUdoQkMsRUFBQUEsV0FBVyxFQUFFTCxzQkFBVU07QUFIUCxDQUFsQjs7QUFNQSxJQUFNQyxpQkFBaUIsR0FBR0MsNkJBQU9DLEdBQVAsQ0FBV0MsS0FBWCxDQUFpQjtBQUN6Q0MsRUFBQUEsU0FBUyxFQUFFO0FBRDhCLENBQWpCLENBQUgsb0JBR0QsVUFBQUMsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxpQkFBaEI7QUFBQSxDQUhKLENBQXZCOztBQVNBLElBQU1DLFFBQVEsR0FBR1AsNkJBQU9DLEdBQVAsQ0FBV0MsS0FBWCxDQUFpQjtBQUNoQ0MsRUFBQUEsU0FBUyxFQUFFO0FBRHFCLENBQWpCLENBQUgscUJBTVcsVUFBQUMsS0FBSztBQUFBLFNBQUtBLEtBQUssQ0FBQ0ksTUFBTixHQUFlSixLQUFLLENBQUNDLEtBQU4sQ0FBWUksa0JBQTNCLEdBQWdELGFBQXJEO0FBQUEsQ0FOaEIsRUFPSCxVQUFBTCxLQUFLO0FBQUEsU0FBS0EsS0FBSyxDQUFDSSxNQUFOLEdBQWVKLEtBQUssQ0FBQ0MsS0FBTixDQUFZSSxrQkFBM0IsR0FBZ0RMLEtBQUssQ0FBQ0MsS0FBTixDQUFZSyxZQUFqRTtBQUFBLENBUEYsRUFnQkQsVUFBQU4sS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZTSxXQUFoQjtBQUFBLENBaEJKLENBQWQ7O0FBb0JBLElBQU1DLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsR0FBTTtBQUMvQixNQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYztBQUFBLFFBQUV0QixNQUFGLFFBQUVBLE1BQUY7QUFBQSxRQUFVSSxXQUFWLFFBQVVBLFdBQVY7QUFBQSxRQUF1QkUsV0FBdkIsUUFBdUJBLFdBQXZCO0FBQUEsd0JBQ2xCLGdDQUFDLGlCQUFELFFBQ0dOLE1BQU0sQ0FBQ3VCLEdBQVAsQ0FBVyxVQUFBQyxLQUFLO0FBQUEsMEJBQ2YsZ0NBQUMsUUFBRDtBQUNFLFFBQUEsR0FBRyxFQUFFQSxLQUFLLENBQUNDLEVBRGI7QUFFRSx3QkFGRjtBQUdFLDhCQUFhRCxLQUFLLENBQUNDLEVBQW5CLFNBSEY7QUFJRSxRQUFBLE1BQU0sRUFBRXJCLFdBQVcsS0FBS29CLEtBQUssQ0FBQ0MsRUFKaEM7QUFLRSxRQUFBLE9BQU8sRUFBRTtBQUFBLGlCQUFNbkIsV0FBVyxDQUFDa0IsS0FBSyxDQUFDQyxFQUFQLENBQWpCO0FBQUE7QUFMWCxzQkFPRSxnQ0FBQyxLQUFELENBQU8sYUFBUDtBQUFxQixRQUFBLE1BQU0sRUFBQztBQUE1QixRQVBGLGVBUUUsZ0NBQUMsMEJBQUQ7QUFBUyxRQUFBLEVBQUUsWUFBS0QsS0FBSyxDQUFDQyxFQUFYLFNBQVg7QUFBZ0MsUUFBQSxNQUFNLEVBQUMsT0FBdkM7QUFBK0MsUUFBQSxTQUFTLEVBQUUsR0FBMUQ7QUFBK0QsUUFBQSxLQUFLLEVBQUM7QUFBckUsc0JBQ0UsMkRBQ0UsZ0NBQUMsMkJBQUQ7QUFBa0IsUUFBQSxFQUFFLEVBQUVELEtBQUssQ0FBQ0UsS0FBTixJQUFlRixLQUFLLENBQUNDO0FBQTNDLFFBREYsQ0FERixDQVJGLENBRGU7QUFBQSxLQUFoQixDQURILENBRGtCO0FBQUEsR0FBcEI7O0FBcUJBSCxFQUFBQSxXQUFXLENBQUN2QixTQUFaLEdBQXdCQSxTQUF4QjtBQUNBLFNBQU91QixXQUFQO0FBQ0QsQ0F4QkQ7O2VBMEJlRCxrQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMCBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQge0Zvcm1hdHRlZE1lc3NhZ2V9IGZyb20gJ3JlYWN0LWludGwnO1xyXG5pbXBvcnQge1Rvb2x0aXB9IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmNvbnN0IHByb3BUeXBlcyA9IHtcclxuICBwYW5lbHM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLFxyXG4gIGFjdGl2ZVBhbmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIHRvZ2dsZVBhbmVsOiBQcm9wVHlwZXMuZnVuY1xyXG59O1xyXG5cclxuY29uc3QgUGFuZWxIZWFkZXJCb3R0b20gPSBzdHlsZWQuZGl2LmF0dHJzKHtcclxuICBjbGFzc05hbWU6ICdzaWRlLXNpZGUtcGFuZWxfX2hlYWRlcl9fYm90dG9tJ1xyXG59KWBcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnNpZGVQYW5lbEhlYWRlckJnfTtcclxuICBwYWRkaW5nOiAwIDE2cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtaW4taGVpZ2h0OiAzMHB4O1xyXG5gO1xyXG5cclxuY29uc3QgUGFuZWxUYWIgPSBzdHlsZWQuZGl2LmF0dHJzKHtcclxuICBjbGFzc05hbWU6ICdzaWRlLXBhbmVsX190YWInXHJcbn0pYFxyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICBib3JkZXItYm90dG9tLXN0eWxlOiBzb2xpZDtcclxuICBib3JkZXItYm90dG9tLXdpZHRoOiAycHg7XHJcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogJHtwcm9wcyA9PiAocHJvcHMuYWN0aXZlID8gcHJvcHMudGhlbWUuc3VidGV4dENvbG9yQWN0aXZlIDogJ3RyYW5zcGFyZW50Jyl9O1xyXG4gIGNvbG9yOiAke3Byb3BzID0+IChwcm9wcy5hY3RpdmUgPyBwcm9wcy50aGVtZS5zdWJ0ZXh0Q29sb3JBY3RpdmUgOiBwcm9wcy50aGVtZS5zdWJ0ZXh0Q29sb3IpfTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG1hcmdpbi1yaWdodDogMTJweDtcclxuICBwYWRkaW5nLWJvdHRvbTogNnB4O1xyXG4gIHdpZHRoOiAzMHB4O1xyXG5cclxuICA6aG92ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudGV4dENvbG9ySGx9O1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IFBhbmVsVG9nZ2xlRmFjdG9yeSA9ICgpID0+IHtcclxuICBjb25zdCBQYW5lbFRvZ2dsZSA9ICh7cGFuZWxzLCBhY3RpdmVQYW5lbCwgdG9nZ2xlUGFuZWx9KSA9PiAoXHJcbiAgICA8UGFuZWxIZWFkZXJCb3R0b20+XHJcbiAgICAgIHtwYW5lbHMubWFwKHBhbmVsID0+IChcclxuICAgICAgICA8UGFuZWxUYWJcclxuICAgICAgICAgIGtleT17cGFuZWwuaWR9XHJcbiAgICAgICAgICBkYXRhLXRpcFxyXG4gICAgICAgICAgZGF0YS1mb3I9e2Ake3BhbmVsLmlkfS1uYXZgfVxyXG4gICAgICAgICAgYWN0aXZlPXthY3RpdmVQYW5lbCA9PT0gcGFuZWwuaWR9XHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0b2dnbGVQYW5lbChwYW5lbC5pZCl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPHBhbmVsLmljb25Db21wb25lbnQgaGVpZ2h0PVwiMjBweFwiIC8+XHJcbiAgICAgICAgICA8VG9vbHRpcCBpZD17YCR7cGFuZWwuaWR9LW5hdmB9IGVmZmVjdD1cInNvbGlkXCIgZGVsYXlTaG93PXs1MDB9IHBsYWNlPVwiYm90dG9tXCI+XHJcbiAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlIGlkPXtwYW5lbC5sYWJlbCB8fCBwYW5lbC5pZH0gLz5cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgIDwvUGFuZWxUYWI+XHJcbiAgICAgICkpfVxyXG4gICAgPC9QYW5lbEhlYWRlckJvdHRvbT5cclxuICApO1xyXG5cclxuICBQYW5lbFRvZ2dsZS5wcm9wVHlwZXMgPSBwcm9wVHlwZXM7XHJcbiAgcmV0dXJuIFBhbmVsVG9nZ2xlO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFuZWxUb2dnbGVGYWN0b3J5O1xyXG4iXX0=