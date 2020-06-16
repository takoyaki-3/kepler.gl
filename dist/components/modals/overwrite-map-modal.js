"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.OverwriteMapModal = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledComponents2 = require("../common/styled-components");

var _statusPanel = require("./status-panel");

var _imageModalContainer = _interopRequireDefault(require("./image-modal-container"));

var _reactIntl = require("react-intl");

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  padding: 24px 12px;\n  min-height: 220px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  margin-top: 24px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  font-weight: 600;\n  color: black;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  margin-top: 24px;\n  font-size: 14px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var StyledMsg = _styledComponents["default"].div(_templateObject());

var StyledTitle = _styledComponents["default"].span(_templateObject2());

var StyledIcon = _styledComponents["default"].div(_templateObject3());

var StyledOverwriteMapModal = (0, _styledComponents["default"])(_styledComponents2.CenterVerticalFlexbox)(_templateObject4());

var OverwriteMapModalFactory = function OverwriteMapModalFactory() {
  var OverwriteMapModal = function OverwriteMapModal(_ref) {
    var mapSaved = _ref.mapSaved,
        title = _ref.title,
        currentProvider = _ref.currentProvider,
        cloudProviders = _ref.cloudProviders,
        isProviderLoading = _ref.isProviderLoading,
        onUpdateImageSetting = _ref.onUpdateImageSetting,
        onSetCloudProvider = _ref.onSetCloudProvider;
    var provider = cloudProviders.find(function (cp) {
      return cp.name === currentProvider;
    });
    return /*#__PURE__*/_react["default"].createElement(_imageModalContainer["default"], {
      currentProvider: currentProvider,
      cloudProviders: cloudProviders,
      onUpdateImageSetting: onUpdateImageSetting,
      onSetCloudProvider: onSetCloudProvider
    }, /*#__PURE__*/_react["default"].createElement(StyledOverwriteMapModal, {
      className: "overwrite-map-modal"
    }, isProviderLoading ? /*#__PURE__*/_react["default"].createElement(StyledMsg, null, /*#__PURE__*/_react["default"].createElement(StyledTitle, null, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
      id: 'modal.overwriteMap.title'
    })), /*#__PURE__*/_react["default"].createElement(_statusPanel.UploadAnimation, {
      icon: provider && provider.icon
    })) : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(StyledIcon, null, provider && provider.icon ? /*#__PURE__*/_react["default"].createElement(provider.icon, {
      height: "64px"
    }) : null), /*#__PURE__*/_react["default"].createElement(StyledMsg, {
      className: "overwrite-map-msg"
    }, /*#__PURE__*/_react["default"].createElement(StyledTitle, null, title), /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
      id: 'modal.overwriteMap.alreadyExists',
      values: {
        mapSaved: mapSaved
      }
    })))));
  };

  return OverwriteMapModal;
};

var OverwriteMapModal = OverwriteMapModalFactory();
exports.OverwriteMapModal = OverwriteMapModal;
var _default = OverwriteMapModalFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL21vZGFscy9vdmVyd3JpdGUtbWFwLW1vZGFsLmpzIl0sIm5hbWVzIjpbIlN0eWxlZE1zZyIsInN0eWxlZCIsImRpdiIsIlN0eWxlZFRpdGxlIiwic3BhbiIsIlN0eWxlZEljb24iLCJTdHlsZWRPdmVyd3JpdGVNYXBNb2RhbCIsIkNlbnRlclZlcnRpY2FsRmxleGJveCIsIk92ZXJ3cml0ZU1hcE1vZGFsRmFjdG9yeSIsIk92ZXJ3cml0ZU1hcE1vZGFsIiwibWFwU2F2ZWQiLCJ0aXRsZSIsImN1cnJlbnRQcm92aWRlciIsImNsb3VkUHJvdmlkZXJzIiwiaXNQcm92aWRlckxvYWRpbmciLCJvblVwZGF0ZUltYWdlU2V0dGluZyIsIm9uU2V0Q2xvdWRQcm92aWRlciIsInByb3ZpZGVyIiwiZmluZCIsImNwIiwibmFtZSIsImljb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLDZCQUFPQyxHQUFWLG1CQUFmOztBQUtBLElBQU1DLFdBQVcsR0FBR0YsNkJBQU9HLElBQVYsb0JBQWpCOztBQUtBLElBQU1DLFVBQVUsR0FBR0osNkJBQU9DLEdBQVYsb0JBQWhCOztBQUlBLElBQU1JLHVCQUF1QixHQUFHLGtDQUFPQyx3Q0FBUCxDQUFILG9CQUE3Qjs7QUFLQSxJQUFNQyx3QkFBd0IsR0FBRyxTQUEzQkEsd0JBQTJCLEdBQU07QUFDckMsTUFBTUMsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixPQVFwQjtBQUFBLFFBUEpDLFFBT0ksUUFQSkEsUUFPSTtBQUFBLFFBTkpDLEtBTUksUUFOSkEsS0FNSTtBQUFBLFFBTEpDLGVBS0ksUUFMSkEsZUFLSTtBQUFBLFFBSkpDLGNBSUksUUFKSkEsY0FJSTtBQUFBLFFBSEpDLGlCQUdJLFFBSEpBLGlCQUdJO0FBQUEsUUFGSkMsb0JBRUksUUFGSkEsb0JBRUk7QUFBQSxRQURKQyxrQkFDSSxRQURKQSxrQkFDSTtBQUNKLFFBQU1DLFFBQVEsR0FBR0osY0FBYyxDQUFDSyxJQUFmLENBQW9CLFVBQUFDLEVBQUU7QUFBQSxhQUFJQSxFQUFFLENBQUNDLElBQUgsS0FBWVIsZUFBaEI7QUFBQSxLQUF0QixDQUFqQjtBQUNBLHdCQUNFLGdDQUFDLCtCQUFEO0FBQ0UsTUFBQSxlQUFlLEVBQUVBLGVBRG5CO0FBRUUsTUFBQSxjQUFjLEVBQUVDLGNBRmxCO0FBR0UsTUFBQSxvQkFBb0IsRUFBRUUsb0JBSHhCO0FBSUUsTUFBQSxrQkFBa0IsRUFBRUM7QUFKdEIsb0JBTUUsZ0NBQUMsdUJBQUQ7QUFBeUIsTUFBQSxTQUFTLEVBQUM7QUFBbkMsT0FDR0YsaUJBQWlCLGdCQUNoQixnQ0FBQyxTQUFELHFCQUNFLGdDQUFDLFdBQUQscUJBQ0UsZ0NBQUMsMkJBQUQ7QUFBa0IsTUFBQSxFQUFFLEVBQUU7QUFBdEIsTUFERixDQURGLGVBSUUsZ0NBQUMsNEJBQUQ7QUFBaUIsTUFBQSxJQUFJLEVBQUVHLFFBQVEsSUFBSUEsUUFBUSxDQUFDSTtBQUE1QyxNQUpGLENBRGdCLGdCQVFoQiwrRUFDRSxnQ0FBQyxVQUFELFFBQ0dKLFFBQVEsSUFBSUEsUUFBUSxDQUFDSSxJQUFyQixnQkFBNEIsZ0NBQUMsUUFBRCxDQUFVLElBQVY7QUFBZSxNQUFBLE1BQU0sRUFBQztBQUF0QixNQUE1QixHQUE4RCxJQURqRSxDQURGLGVBSUUsZ0NBQUMsU0FBRDtBQUFXLE1BQUEsU0FBUyxFQUFDO0FBQXJCLG9CQUNFLGdDQUFDLFdBQUQsUUFBY1YsS0FBZCxDQURGLGVBRUUsZ0NBQUMsMkJBQUQ7QUFBa0IsTUFBQSxFQUFFLEVBQUUsa0NBQXRCO0FBQTBELE1BQUEsTUFBTSxFQUFFO0FBQUNELFFBQUFBLFFBQVEsRUFBUkE7QUFBRDtBQUFsRSxNQUZGLENBSkYsQ0FUSixDQU5GLENBREY7QUE2QkQsR0F2Q0Q7O0FBd0NBLFNBQU9ELGlCQUFQO0FBQ0QsQ0ExQ0Q7O0FBNENPLElBQU1BLGlCQUFpQixHQUFHRCx3QkFBd0IsRUFBbEQ7O2VBRVFBLHdCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7Q2VudGVyVmVydGljYWxGbGV4Ym94fSBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9zdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7VXBsb2FkQW5pbWF0aW9ufSBmcm9tICcuL3N0YXR1cy1wYW5lbCc7XHJcbmltcG9ydCBJbWFnZU1vZGFsQ29udGFpbmVyIGZyb20gJy4vaW1hZ2UtbW9kYWwtY29udGFpbmVyJztcclxuaW1wb3J0IHtGb3JtYXR0ZWRNZXNzYWdlfSBmcm9tICdyZWFjdC1pbnRsJztcclxuXHJcbmNvbnN0IFN0eWxlZE1zZyA9IHN0eWxlZC5kaXZgXHJcbiAgbWFyZ2luLXRvcDogMjRweDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbmA7XHJcblxyXG5jb25zdCBTdHlsZWRUaXRsZSA9IHN0eWxlZC5zcGFuYFxyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG5gO1xyXG5cclxuY29uc3QgU3R5bGVkSWNvbiA9IHN0eWxlZC5kaXZgXHJcbiAgbWFyZ2luLXRvcDogMjRweDtcclxuYDtcclxuXHJcbmNvbnN0IFN0eWxlZE92ZXJ3cml0ZU1hcE1vZGFsID0gc3R5bGVkKENlbnRlclZlcnRpY2FsRmxleGJveClgXHJcbiAgcGFkZGluZzogMjRweCAxMnB4O1xyXG4gIG1pbi1oZWlnaHQ6IDIyMHB4O1xyXG5gO1xyXG5cclxuY29uc3QgT3ZlcndyaXRlTWFwTW9kYWxGYWN0b3J5ID0gKCkgPT4ge1xyXG4gIGNvbnN0IE92ZXJ3cml0ZU1hcE1vZGFsID0gKHtcclxuICAgIG1hcFNhdmVkLFxyXG4gICAgdGl0bGUsXHJcbiAgICBjdXJyZW50UHJvdmlkZXIsXHJcbiAgICBjbG91ZFByb3ZpZGVycyxcclxuICAgIGlzUHJvdmlkZXJMb2FkaW5nLFxyXG4gICAgb25VcGRhdGVJbWFnZVNldHRpbmcsXHJcbiAgICBvblNldENsb3VkUHJvdmlkZXJcclxuICB9KSA9PiB7XHJcbiAgICBjb25zdCBwcm92aWRlciA9IGNsb3VkUHJvdmlkZXJzLmZpbmQoY3AgPT4gY3AubmFtZSA9PT0gY3VycmVudFByb3ZpZGVyKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxJbWFnZU1vZGFsQ29udGFpbmVyXHJcbiAgICAgICAgY3VycmVudFByb3ZpZGVyPXtjdXJyZW50UHJvdmlkZXJ9XHJcbiAgICAgICAgY2xvdWRQcm92aWRlcnM9e2Nsb3VkUHJvdmlkZXJzfVxyXG4gICAgICAgIG9uVXBkYXRlSW1hZ2VTZXR0aW5nPXtvblVwZGF0ZUltYWdlU2V0dGluZ31cclxuICAgICAgICBvblNldENsb3VkUHJvdmlkZXI9e29uU2V0Q2xvdWRQcm92aWRlcn1cclxuICAgICAgPlxyXG4gICAgICAgIDxTdHlsZWRPdmVyd3JpdGVNYXBNb2RhbCBjbGFzc05hbWU9XCJvdmVyd3JpdGUtbWFwLW1vZGFsXCI+XHJcbiAgICAgICAgICB7aXNQcm92aWRlckxvYWRpbmcgPyAoXHJcbiAgICAgICAgICAgIDxTdHlsZWRNc2c+XHJcbiAgICAgICAgICAgICAgPFN0eWxlZFRpdGxlPlxyXG4gICAgICAgICAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2UgaWQ9eydtb2RhbC5vdmVyd3JpdGVNYXAudGl0bGUnfSAvPlxyXG4gICAgICAgICAgICAgIDwvU3R5bGVkVGl0bGU+XHJcbiAgICAgICAgICAgICAgPFVwbG9hZEFuaW1hdGlvbiBpY29uPXtwcm92aWRlciAmJiBwcm92aWRlci5pY29ufSAvPlxyXG4gICAgICAgICAgICA8L1N0eWxlZE1zZz5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgPFN0eWxlZEljb24+XHJcbiAgICAgICAgICAgICAgICB7cHJvdmlkZXIgJiYgcHJvdmlkZXIuaWNvbiA/IDxwcm92aWRlci5pY29uIGhlaWdodD1cIjY0cHhcIiAvPiA6IG51bGx9XHJcbiAgICAgICAgICAgICAgPC9TdHlsZWRJY29uPlxyXG4gICAgICAgICAgICAgIDxTdHlsZWRNc2cgY2xhc3NOYW1lPVwib3ZlcndyaXRlLW1hcC1tc2dcIj5cclxuICAgICAgICAgICAgICAgIDxTdHlsZWRUaXRsZT57dGl0bGV9PC9TdHlsZWRUaXRsZT5cclxuICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlIGlkPXsnbW9kYWwub3ZlcndyaXRlTWFwLmFscmVhZHlFeGlzdHMnfSB2YWx1ZXM9e3ttYXBTYXZlZH19IC8+XHJcbiAgICAgICAgICAgICAgPC9TdHlsZWRNc2c+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L1N0eWxlZE92ZXJ3cml0ZU1hcE1vZGFsPlxyXG4gICAgICA8L0ltYWdlTW9kYWxDb250YWluZXI+XHJcbiAgICApO1xyXG4gIH07XHJcbiAgcmV0dXJuIE92ZXJ3cml0ZU1hcE1vZGFsO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IE92ZXJ3cml0ZU1hcE1vZGFsID0gT3ZlcndyaXRlTWFwTW9kYWxGYWN0b3J5KCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBPdmVyd3JpdGVNYXBNb2RhbEZhY3Rvcnk7XHJcbiJdfQ==