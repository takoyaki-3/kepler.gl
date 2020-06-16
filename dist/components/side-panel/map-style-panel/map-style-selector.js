"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _classnames = _interopRequireDefault(require("classnames"));

var _icons = require("../../common/icons");

var _panelHeaderAction = _interopRequireDefault(require("../panel-header-action"));

var _styledComponents2 = require("../../common/styled-components");

var _reactIntl = require("react-intl");

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  height: 48px;\n  margin-bottom: 5px;\n  opacity: 1;\n  position: relative;\n  transition: opacity 0.05s ease-in, height 0.25s ease-out;\n\n  &.collapsed {\n    height: 0;\n    margin-bottom: 0;\n    opacity: 0;\n  }\n\n  :hover {\n    cursor: pointer;\n    background-color: ", ";\n  }\n\n  .map-title-block img {\n    margin-right: 12px;\n  }\n\n  .map-preview {\n    border-radius: 3px;\n    height: 30px;\n    width: 40px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var StyledMapDropdown = (0, _styledComponents["default"])(_styledComponents2.StyledPanelHeader)(_templateObject(), function (props) {
  return props.theme.panelBackgroundHover;
});

function MapStyleSelectorFactory() {
  var MapStyleSelector = function MapStyleSelector(_ref) {
    var mapStyle = _ref.mapStyle,
        onChange = _ref.onChange,
        toggleActive = _ref.toggleActive,
        isSelecting = _ref.isSelecting;
    return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_styledComponents2.PanelLabel, null, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
      id: 'mapManager.mapStyle'
    })), Object.keys(mapStyle.mapStyles).map(function (op) {
      return /*#__PURE__*/_react["default"].createElement(StyledMapDropdown, {
        className: (0, _classnames["default"])('map-dropdown-option', {
          collapsed: !isSelecting && mapStyle.styleType !== op
        }),
        key: op,
        onClick: isSelecting ? function () {
          return onChange(op);
        } : toggleActive
      }, /*#__PURE__*/_react["default"].createElement(_styledComponents2.PanelHeaderContent, {
        className: "map-title-block"
      }, /*#__PURE__*/_react["default"].createElement("img", {
        className: "map-preview",
        src: mapStyle.mapStyles[op].icon
      }), /*#__PURE__*/_react["default"].createElement(_styledComponents2.PanelHeaderTitle, {
        className: "map-preview-name"
      }, mapStyle.mapStyles[op].label)), !isSelecting ? /*#__PURE__*/_react["default"].createElement(_panelHeaderAction["default"], {
        className: "map-dropdown-option__enable-config",
        id: "map-enable-config",
        IconComponent: _icons.ArrowDown,
        tooltip: 'tooltip.selectBaseMapStyle',
        onClick: toggleActive
      }) : null);
    }));
  };

  return MapStyleSelector;
}

var _default = MapStyleSelectorFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NpZGUtcGFuZWwvbWFwLXN0eWxlLXBhbmVsL21hcC1zdHlsZS1zZWxlY3Rvci5qcyJdLCJuYW1lcyI6WyJTdHlsZWRNYXBEcm9wZG93biIsIlN0eWxlZFBhbmVsSGVhZGVyIiwicHJvcHMiLCJ0aGVtZSIsInBhbmVsQmFja2dyb3VuZEhvdmVyIiwiTWFwU3R5bGVTZWxlY3RvckZhY3RvcnkiLCJNYXBTdHlsZVNlbGVjdG9yIiwibWFwU3R5bGUiLCJvbkNoYW5nZSIsInRvZ2dsZUFjdGl2ZSIsImlzU2VsZWN0aW5nIiwiT2JqZWN0Iiwia2V5cyIsIm1hcFN0eWxlcyIsIm1hcCIsIm9wIiwiY29sbGFwc2VkIiwic3R5bGVUeXBlIiwiaWNvbiIsImxhYmVsIiwiQXJyb3dEb3duIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFNQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsaUJBQWlCLEdBQUcsa0NBQU9DLG9DQUFQLENBQUgsb0JBZUMsVUFBQUMsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxvQkFBaEI7QUFBQSxDQWZOLENBQXZCOztBQTZCQSxTQUFTQyx1QkFBVCxHQUFtQztBQUNqQyxNQUFNQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CO0FBQUEsUUFBRUMsUUFBRixRQUFFQSxRQUFGO0FBQUEsUUFBWUMsUUFBWixRQUFZQSxRQUFaO0FBQUEsUUFBc0JDLFlBQXRCLFFBQXNCQSxZQUF0QjtBQUFBLFFBQW9DQyxXQUFwQyxRQUFvQ0EsV0FBcEM7QUFBQSx3QkFDdkIsMERBQ0UsZ0NBQUMsNkJBQUQscUJBQ0UsZ0NBQUMsMkJBQUQ7QUFBa0IsTUFBQSxFQUFFLEVBQUU7QUFBdEIsTUFERixDQURGLEVBSUdDLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZTCxRQUFRLENBQUNNLFNBQXJCLEVBQWdDQyxHQUFoQyxDQUFvQyxVQUFBQyxFQUFFO0FBQUEsMEJBQ3JDLGdDQUFDLGlCQUFEO0FBQ0UsUUFBQSxTQUFTLEVBQUUsNEJBQVcscUJBQVgsRUFBa0M7QUFDM0NDLFVBQUFBLFNBQVMsRUFBRSxDQUFDTixXQUFELElBQWdCSCxRQUFRLENBQUNVLFNBQVQsS0FBdUJGO0FBRFAsU0FBbEMsQ0FEYjtBQUlFLFFBQUEsR0FBRyxFQUFFQSxFQUpQO0FBS0UsUUFBQSxPQUFPLEVBQUVMLFdBQVcsR0FBRztBQUFBLGlCQUFNRixRQUFRLENBQUNPLEVBQUQsQ0FBZDtBQUFBLFNBQUgsR0FBd0JOO0FBTDlDLHNCQU9FLGdDQUFDLHFDQUFEO0FBQW9CLFFBQUEsU0FBUyxFQUFDO0FBQTlCLHNCQUNFO0FBQUssUUFBQSxTQUFTLEVBQUMsYUFBZjtBQUE2QixRQUFBLEdBQUcsRUFBRUYsUUFBUSxDQUFDTSxTQUFULENBQW1CRSxFQUFuQixFQUF1Qkc7QUFBekQsUUFERixlQUVFLGdDQUFDLG1DQUFEO0FBQWtCLFFBQUEsU0FBUyxFQUFDO0FBQTVCLFNBQ0dYLFFBQVEsQ0FBQ00sU0FBVCxDQUFtQkUsRUFBbkIsRUFBdUJJLEtBRDFCLENBRkYsQ0FQRixFQWFHLENBQUNULFdBQUQsZ0JBQ0MsZ0NBQUMsNkJBQUQ7QUFDRSxRQUFBLFNBQVMsRUFBQyxvQ0FEWjtBQUVFLFFBQUEsRUFBRSxFQUFDLG1CQUZMO0FBR0UsUUFBQSxhQUFhLEVBQUVVLGdCQUhqQjtBQUlFLFFBQUEsT0FBTyxFQUFFLDRCQUpYO0FBS0UsUUFBQSxPQUFPLEVBQUVYO0FBTFgsUUFERCxHQVFHLElBckJOLENBRHFDO0FBQUEsS0FBdEMsQ0FKSCxDQUR1QjtBQUFBLEdBQXpCOztBQWlDQSxTQUFPSCxnQkFBUDtBQUNEOztlQUVjRCx1QiIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMCBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcclxuaW1wb3J0IHtBcnJvd0Rvd259IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL2ljb25zJztcclxuaW1wb3J0IFBhbmVsSGVhZGVyQWN0aW9uIGZyb20gJ2NvbXBvbmVudHMvc2lkZS1wYW5lbC9wYW5lbC1oZWFkZXItYWN0aW9uJztcclxuXHJcbmltcG9ydCB7XHJcbiAgUGFuZWxIZWFkZXJDb250ZW50LFxyXG4gIFBhbmVsSGVhZGVyVGl0bGUsXHJcbiAgUGFuZWxMYWJlbCxcclxuICBTdHlsZWRQYW5lbEhlYWRlclxyXG59IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHtGb3JtYXR0ZWRNZXNzYWdlfSBmcm9tICdyZWFjdC1pbnRsJztcclxuXHJcbmNvbnN0IFN0eWxlZE1hcERyb3Bkb3duID0gc3R5bGVkKFN0eWxlZFBhbmVsSGVhZGVyKWBcclxuICBoZWlnaHQ6IDQ4cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4wNXMgZWFzZS1pbiwgaGVpZ2h0IDAuMjVzIGVhc2Utb3V0O1xyXG5cclxuICAmLmNvbGxhcHNlZCB7XHJcbiAgICBoZWlnaHQ6IDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcblxyXG4gIDpob3ZlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnBhbmVsQmFja2dyb3VuZEhvdmVyfTtcclxuICB9XHJcblxyXG4gIC5tYXAtdGl0bGUtYmxvY2sgaW1nIHtcclxuICAgIG1hcmdpbi1yaWdodDogMTJweDtcclxuICB9XHJcblxyXG4gIC5tYXAtcHJldmlldyB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICB9XHJcbmA7XHJcblxyXG5mdW5jdGlvbiBNYXBTdHlsZVNlbGVjdG9yRmFjdG9yeSgpIHtcclxuICBjb25zdCBNYXBTdHlsZVNlbGVjdG9yID0gKHttYXBTdHlsZSwgb25DaGFuZ2UsIHRvZ2dsZUFjdGl2ZSwgaXNTZWxlY3Rpbmd9KSA9PiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8UGFuZWxMYWJlbD5cclxuICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZSBpZD17J21hcE1hbmFnZXIubWFwU3R5bGUnfSAvPlxyXG4gICAgICA8L1BhbmVsTGFiZWw+XHJcbiAgICAgIHtPYmplY3Qua2V5cyhtYXBTdHlsZS5tYXBTdHlsZXMpLm1hcChvcCA9PiAoXHJcbiAgICAgICAgPFN0eWxlZE1hcERyb3Bkb3duXHJcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoJ21hcC1kcm9wZG93bi1vcHRpb24nLCB7XHJcbiAgICAgICAgICAgIGNvbGxhcHNlZDogIWlzU2VsZWN0aW5nICYmIG1hcFN0eWxlLnN0eWxlVHlwZSAhPT0gb3BcclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgICAga2V5PXtvcH1cclxuICAgICAgICAgIG9uQ2xpY2s9e2lzU2VsZWN0aW5nID8gKCkgPT4gb25DaGFuZ2Uob3ApIDogdG9nZ2xlQWN0aXZlfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxQYW5lbEhlYWRlckNvbnRlbnQgY2xhc3NOYW1lPVwibWFwLXRpdGxlLWJsb2NrXCI+XHJcbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwibWFwLXByZXZpZXdcIiBzcmM9e21hcFN0eWxlLm1hcFN0eWxlc1tvcF0uaWNvbn0gLz5cclxuICAgICAgICAgICAgPFBhbmVsSGVhZGVyVGl0bGUgY2xhc3NOYW1lPVwibWFwLXByZXZpZXctbmFtZVwiPlxyXG4gICAgICAgICAgICAgIHttYXBTdHlsZS5tYXBTdHlsZXNbb3BdLmxhYmVsfVxyXG4gICAgICAgICAgICA8L1BhbmVsSGVhZGVyVGl0bGU+XHJcbiAgICAgICAgICA8L1BhbmVsSGVhZGVyQ29udGVudD5cclxuICAgICAgICAgIHshaXNTZWxlY3RpbmcgPyAoXHJcbiAgICAgICAgICAgIDxQYW5lbEhlYWRlckFjdGlvblxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1hcC1kcm9wZG93bi1vcHRpb25fX2VuYWJsZS1jb25maWdcIlxyXG4gICAgICAgICAgICAgIGlkPVwibWFwLWVuYWJsZS1jb25maWdcIlxyXG4gICAgICAgICAgICAgIEljb25Db21wb25lbnQ9e0Fycm93RG93bn1cclxuICAgICAgICAgICAgICB0b29sdGlwPXsndG9vbHRpcC5zZWxlY3RCYXNlTWFwU3R5bGUnfVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZUFjdGl2ZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgIDwvU3R5bGVkTWFwRHJvcGRvd24+XHJcbiAgICAgICkpfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIE1hcFN0eWxlU2VsZWN0b3I7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1hcFN0eWxlU2VsZWN0b3JGYWN0b3J5O1xyXG4iXX0=