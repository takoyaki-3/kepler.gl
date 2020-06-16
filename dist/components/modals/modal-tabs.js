"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ModalTabItem = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("../../styles");

var _reactIntl = require("react-intl");

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n    margin-left: 16px;\n    font-size: 12px;\n  "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  border-bottom: 3px solid transparent;\n  cursor: pointer;\n  margin-left: 32px;\n  padding: 16px 0;\n  font-size: 14px;\n  font-weight: 400;\n  color: ", ";\n\n  ", ";\n\n  :first-child {\n    margin-left: 0;\n    padding-left: 0;\n  }\n\n  :hover {\n    color: ", ";\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n    font-size: 12px;\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  align-items: flex-end;\n  display: flex;\n  border-bottom: 1px solid #d8d8d8;\n  margin-bottom: 32px;\n  justify-content: space-between;\n\n  .load-data-modal__tab__inner {\n    display: flex;\n    width: 100%;\n  }\n\n  .load-data-modal__tab__item.active {\n    color: ", ";\n    border-bottom: 3px solid ", ";\n    font-weight: 500;\n  }\n\n  ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var ModalTab = _styledComponents["default"].div(_templateObject(), function (props) {
  return props.theme.textColorLT;
}, function (props) {
  return props.theme.textColorLT;
}, _styles.media.portable(_templateObject2()));

var StyledLoadDataModalTabItem = _styledComponents["default"].div(_templateObject3(), function (props) {
  return props.theme.subtextColorLT;
}, _styles.media.portable(_templateObject4()), function (props) {
  return props.theme.textColorLT;
});

var noop = function noop() {};

var ModalTabItem = function ModalTabItem(_ref) {
  var currentMethod = _ref.currentMethod,
      method = _ref.method,
      toggleMethod = _ref.toggleMethod;
  var onClick = (0, _react.useCallback)(function () {
    return toggleMethod(method);
  }, [method, toggleMethod]);
  var intl = (0, _reactIntl.useIntl)();
  return method.tabElementType ? /*#__PURE__*/_react["default"].createElement(method.tabElementType, {
    onClick: onClick,
    intl: intl
  }) : /*#__PURE__*/_react["default"].createElement(StyledLoadDataModalTabItem, {
    className: (0, _classnames["default"])('load-data-modal__tab__item', {
      active: currentMethod && method.id === currentMethod
    }),
    onClick: onClick
  }, /*#__PURE__*/_react["default"].createElement("div", null, method.label ? /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: method.label
  }) : method.id));
};

exports.ModalTabItem = ModalTabItem;

function ModalTabsFactory() {
  var ModalTabs = function ModalTabs(_ref2) {
    var currentMethod = _ref2.currentMethod,
        toggleMethod = _ref2.toggleMethod,
        loadingMethods = _ref2.loadingMethods;
    return /*#__PURE__*/_react["default"].createElement(ModalTab, {
      className: "load-data-modal__tab"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "load-data-modal__tab__inner"
    }, loadingMethods.map(function (method) {
      return /*#__PURE__*/_react["default"].createElement(ModalTabItem, {
        key: method.id,
        method: method,
        currentMethod: currentMethod,
        toggleMethod: toggleMethod
      });
    })));
  };

  ModalTabs.propTypes = {
    toggleMethod: _propTypes["default"].func.isRequired,
    currentMethod: _propTypes["default"].string,
    loadingMethods: _propTypes["default"].arrayOf(_propTypes["default"].object)
  };
  ModalTabs.defaultProps = {
    toggleMethod: noop,
    currentMethod: null,
    loadingMethods: []
  };
  return ModalTabs;
}

var _default = ModalTabsFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL21vZGFscy9tb2RhbC10YWJzLmpzIl0sIm5hbWVzIjpbIk1vZGFsVGFiIiwic3R5bGVkIiwiZGl2IiwicHJvcHMiLCJ0aGVtZSIsInRleHRDb2xvckxUIiwibWVkaWEiLCJwb3J0YWJsZSIsIlN0eWxlZExvYWREYXRhTW9kYWxUYWJJdGVtIiwic3VidGV4dENvbG9yTFQiLCJub29wIiwiTW9kYWxUYWJJdGVtIiwiY3VycmVudE1ldGhvZCIsIm1ldGhvZCIsInRvZ2dsZU1ldGhvZCIsIm9uQ2xpY2siLCJpbnRsIiwidGFiRWxlbWVudFR5cGUiLCJhY3RpdmUiLCJpZCIsImxhYmVsIiwiTW9kYWxUYWJzRmFjdG9yeSIsIk1vZGFsVGFicyIsImxvYWRpbmdNZXRob2RzIiwibWFwIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiZnVuYyIsImlzUmVxdWlyZWQiLCJzdHJpbmciLCJhcnJheU9mIiwib2JqZWN0IiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxRQUFRLEdBQUdDLDZCQUFPQyxHQUFWLG9CQWFELFVBQUFDLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBaEI7QUFBQSxDQWJKLEVBY2lCLFVBQUFGLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBaEI7QUFBQSxDQWR0QixFQWtCVkMsY0FBTUMsUUFsQkkscUJBQWQ7O0FBdUJBLElBQU1DLDBCQUEwQixHQUFHUCw2QkFBT0MsR0FBVixxQkFPckIsVUFBQUMsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZSyxjQUFoQjtBQUFBLENBUGdCLEVBUzVCSCxjQUFNQyxRQVRzQixzQkFvQm5CLFVBQUFKLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBaEI7QUFBQSxDQXBCYyxDQUFoQzs7QUF3QkEsSUFBTUssSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTSxDQUFFLENBQXJCOztBQUVPLElBQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLE9BQTJDO0FBQUEsTUFBekNDLGFBQXlDLFFBQXpDQSxhQUF5QztBQUFBLE1BQTFCQyxNQUEwQixRQUExQkEsTUFBMEI7QUFBQSxNQUFsQkMsWUFBa0IsUUFBbEJBLFlBQWtCO0FBQ3JFLE1BQU1DLE9BQU8sR0FBRyx3QkFBWTtBQUFBLFdBQU1ELFlBQVksQ0FBQ0QsTUFBRCxDQUFsQjtBQUFBLEdBQVosRUFBd0MsQ0FBQ0EsTUFBRCxFQUFTQyxZQUFULENBQXhDLENBQWhCO0FBQ0EsTUFBTUUsSUFBSSxHQUFHLHlCQUFiO0FBRUEsU0FBT0gsTUFBTSxDQUFDSSxjQUFQLGdCQUNMLGdDQUFDLE1BQUQsQ0FBUSxjQUFSO0FBQXVCLElBQUEsT0FBTyxFQUFFRixPQUFoQztBQUF5QyxJQUFBLElBQUksRUFBRUM7QUFBL0MsSUFESyxnQkFHTCxnQ0FBQywwQkFBRDtBQUNFLElBQUEsU0FBUyxFQUFFLDRCQUFXLDRCQUFYLEVBQXlDO0FBQ2xERSxNQUFBQSxNQUFNLEVBQUVOLGFBQWEsSUFBSUMsTUFBTSxDQUFDTSxFQUFQLEtBQWNQO0FBRFcsS0FBekMsQ0FEYjtBQUlFLElBQUEsT0FBTyxFQUFFRztBQUpYLGtCQU1FLDZDQUFNRixNQUFNLENBQUNPLEtBQVAsZ0JBQWUsZ0NBQUMsMkJBQUQ7QUFBa0IsSUFBQSxFQUFFLEVBQUVQLE1BQU0sQ0FBQ087QUFBN0IsSUFBZixHQUF3RFAsTUFBTSxDQUFDTSxFQUFyRSxDQU5GLENBSEY7QUFZRCxDQWhCTTs7OztBQWtCUCxTQUFTRSxnQkFBVCxHQUE0QjtBQUMxQixNQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWTtBQUFBLFFBQUVWLGFBQUYsU0FBRUEsYUFBRjtBQUFBLFFBQWlCRSxZQUFqQixTQUFpQkEsWUFBakI7QUFBQSxRQUErQlMsY0FBL0IsU0FBK0JBLGNBQS9CO0FBQUEsd0JBQ2hCLGdDQUFDLFFBQUQ7QUFBVSxNQUFBLFNBQVMsRUFBQztBQUFwQixvQkFDRTtBQUFLLE1BQUEsU0FBUyxFQUFDO0FBQWYsT0FDR0EsY0FBYyxDQUFDQyxHQUFmLENBQW1CLFVBQUFYLE1BQU07QUFBQSwwQkFDeEIsZ0NBQUMsWUFBRDtBQUNFLFFBQUEsR0FBRyxFQUFFQSxNQUFNLENBQUNNLEVBRGQ7QUFFRSxRQUFBLE1BQU0sRUFBRU4sTUFGVjtBQUdFLFFBQUEsYUFBYSxFQUFFRCxhQUhqQjtBQUlFLFFBQUEsWUFBWSxFQUFFRTtBQUpoQixRQUR3QjtBQUFBLEtBQXpCLENBREgsQ0FERixDQURnQjtBQUFBLEdBQWxCOztBQWVBUSxFQUFBQSxTQUFTLENBQUNHLFNBQVYsR0FBc0I7QUFDcEJYLElBQUFBLFlBQVksRUFBRVksc0JBQVVDLElBQVYsQ0FBZUMsVUFEVDtBQUVwQmhCLElBQUFBLGFBQWEsRUFBRWMsc0JBQVVHLE1BRkw7QUFHcEJOLElBQUFBLGNBQWMsRUFBRUcsc0JBQVVJLE9BQVYsQ0FBa0JKLHNCQUFVSyxNQUE1QjtBQUhJLEdBQXRCO0FBTUFULEVBQUFBLFNBQVMsQ0FBQ1UsWUFBVixHQUF5QjtBQUN2QmxCLElBQUFBLFlBQVksRUFBRUosSUFEUztBQUV2QkUsSUFBQUEsYUFBYSxFQUFFLElBRlE7QUFHdkJXLElBQUFBLGNBQWMsRUFBRTtBQUhPLEdBQXpCO0FBTUEsU0FBT0QsU0FBUDtBQUNEOztlQUVjRCxnQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMCBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCwge3VzZUNhbGxiYWNrfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHttZWRpYX0gZnJvbSAnc3R5bGVzJztcclxuaW1wb3J0IHtGb3JtYXR0ZWRNZXNzYWdlLCB1c2VJbnRsfSBmcm9tICdyZWFjdC1pbnRsJztcclxuXHJcbmNvbnN0IE1vZGFsVGFiID0gc3R5bGVkLmRpdmBcclxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Q4ZDhkODtcclxuICBtYXJnaW4tYm90dG9tOiAzMnB4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcbiAgLmxvYWQtZGF0YS1tb2RhbF9fdGFiX19pbm5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAubG9hZC1kYXRhLW1vZGFsX190YWJfX2l0ZW0uYWN0aXZlIHtcclxuICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRleHRDb2xvckxUfTtcclxuICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRleHRDb2xvckxUfTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgfVxyXG5cclxuICAke21lZGlhLnBvcnRhYmxlYFxyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGB9O1xyXG5gO1xyXG5cclxuY29uc3QgU3R5bGVkTG9hZERhdGFNb2RhbFRhYkl0ZW0gPSBzdHlsZWQuZGl2YFxyXG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgbWFyZ2luLWxlZnQ6IDMycHg7XHJcbiAgcGFkZGluZzogMTZweCAwO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnN1YnRleHRDb2xvckxUfTtcclxuXHJcbiAgJHttZWRpYS5wb3J0YWJsZWBcclxuICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGB9O1xyXG5cclxuICA6Zmlyc3QtY2hpbGQge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgfVxyXG5cclxuICA6aG92ZXIge1xyXG4gICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudGV4dENvbG9yTFR9O1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IG5vb3AgPSAoKSA9PiB7fTtcclxuXHJcbmV4cG9ydCBjb25zdCBNb2RhbFRhYkl0ZW0gPSAoe2N1cnJlbnRNZXRob2QsIG1ldGhvZCwgdG9nZ2xlTWV0aG9kfSkgPT4ge1xyXG4gIGNvbnN0IG9uQ2xpY2sgPSB1c2VDYWxsYmFjaygoKSA9PiB0b2dnbGVNZXRob2QobWV0aG9kKSwgW21ldGhvZCwgdG9nZ2xlTWV0aG9kXSk7XHJcbiAgY29uc3QgaW50bCA9IHVzZUludGwoKTtcclxuXHJcbiAgcmV0dXJuIG1ldGhvZC50YWJFbGVtZW50VHlwZSA/IChcclxuICAgIDxtZXRob2QudGFiRWxlbWVudFR5cGUgb25DbGljaz17b25DbGlja30gaW50bD17aW50bH0gLz5cclxuICApIDogKFxyXG4gICAgPFN0eWxlZExvYWREYXRhTW9kYWxUYWJJdGVtXHJcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcygnbG9hZC1kYXRhLW1vZGFsX190YWJfX2l0ZW0nLCB7XHJcbiAgICAgICAgYWN0aXZlOiBjdXJyZW50TWV0aG9kICYmIG1ldGhvZC5pZCA9PT0gY3VycmVudE1ldGhvZFxyXG4gICAgICB9KX1cclxuICAgICAgb25DbGljaz17b25DbGlja31cclxuICAgID5cclxuICAgICAgPGRpdj57bWV0aG9kLmxhYmVsID8gPEZvcm1hdHRlZE1lc3NhZ2UgaWQ9e21ldGhvZC5sYWJlbH0gLz4gOiBtZXRob2QuaWR9PC9kaXY+XHJcbiAgICA8L1N0eWxlZExvYWREYXRhTW9kYWxUYWJJdGVtPlxyXG4gICk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBNb2RhbFRhYnNGYWN0b3J5KCkge1xyXG4gIGNvbnN0IE1vZGFsVGFicyA9ICh7Y3VycmVudE1ldGhvZCwgdG9nZ2xlTWV0aG9kLCBsb2FkaW5nTWV0aG9kc30pID0+IChcclxuICAgIDxNb2RhbFRhYiBjbGFzc05hbWU9XCJsb2FkLWRhdGEtbW9kYWxfX3RhYlwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWQtZGF0YS1tb2RhbF9fdGFiX19pbm5lclwiPlxyXG4gICAgICAgIHtsb2FkaW5nTWV0aG9kcy5tYXAobWV0aG9kID0+IChcclxuICAgICAgICAgIDxNb2RhbFRhYkl0ZW1cclxuICAgICAgICAgICAga2V5PXttZXRob2QuaWR9XHJcbiAgICAgICAgICAgIG1ldGhvZD17bWV0aG9kfVxyXG4gICAgICAgICAgICBjdXJyZW50TWV0aG9kPXtjdXJyZW50TWV0aG9kfVxyXG4gICAgICAgICAgICB0b2dnbGVNZXRob2Q9e3RvZ2dsZU1ldGhvZH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9Nb2RhbFRhYj5cclxuICApO1xyXG5cclxuICBNb2RhbFRhYnMucHJvcFR5cGVzID0ge1xyXG4gICAgdG9nZ2xlTWV0aG9kOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gICAgY3VycmVudE1ldGhvZDogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGxvYWRpbmdNZXRob2RzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KVxyXG4gIH07XHJcblxyXG4gIE1vZGFsVGFicy5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgICB0b2dnbGVNZXRob2Q6IG5vb3AsXHJcbiAgICBjdXJyZW50TWV0aG9kOiBudWxsLFxyXG4gICAgbG9hZGluZ01ldGhvZHM6IFtdXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIE1vZGFsVGFicztcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW9kYWxUYWJzRmFjdG9yeTtcclxuIl19