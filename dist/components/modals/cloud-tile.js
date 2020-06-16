"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _icons = require("../common/icons");

var _styledComponents2 = require("../common/styled-components");

var _loadingSpinner = _interopRequireDefault(require("../common/loading-spinner"));

function _templateObject5() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  font-size: 11px;\n  margin-top: 8px;\n  text-align: center;\n  color: ", ";\n  overflow: hidden;\n  width: 100px;\n  text-overflow: ellipsis;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  font-size: 12px;\n  margin-top: 12px;\n  margin-bottom: 4px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  margin-right: 12px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  background-color: ", ";\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  display: block;\n  width: 16px;\n  height: 16px;\n  border-top-left-radius: 2px;\n\n  :after {\n    position: absolute;\n    display: table;\n    border: 2px solid #fff;\n    border-top: 0;\n    border-left: 0;\n    transform: rotate(45deg) scale(1) translate(-50%, -50%);\n    opacity: 1;\n    content: ' ';\n    top: 50%;\n    left: 25%;\n    width: 5.7px;\n    height: 9.1px;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  border-radius: 2px;\n  border: 1px solid\n    ", ";\n  color: ", ";\n  cursor: pointer;\n  font-weight: 500;\n  width: 120px;\n  height: 168px;\n  background-color: #ffffff;\n  transition: ", ";\n  position: relative;\n  :hover {\n    border: 1px solid ", ";\n    color: ", ";\n  }\n\n  .button {\n    margin-top: 20px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var StyledTileWrapper = _styledComponents["default"].div.attrs({
  className: 'provider-tile__wrapper'
})(_templateObject(), function (props) {
  return props.selected ? props.theme.primaryBtnBgd : props.theme.selectBorderColorLT;
}, function (props) {
  return props.selected ? props.theme.primaryBtnBgd : props.theme.selectBorderColorLT;
}, function (props) {
  return props.theme.transition;
}, function (props) {
  return props.theme.primaryBtnBgd;
}, function (props) {
  return props.theme.primaryBtnBgd;
});

var CheckMark = _styledComponents["default"].span.attrs({
  className: 'checkbox-inner'
})(_templateObject2(), function (props) {
  return props.theme.primaryBtnBgd;
});

var StyledBox = (0, _styledComponents["default"])(_styledComponents2.CenterVerticalFlexbox)(_templateObject3());

var StyledCloudName = _styledComponents["default"].div(_templateObject4());

var StyledUserName = _styledComponents["default"].div(_templateObject5(), function (props) {
  return props.theme.primaryBtnActBgd;
});

var LoginButton = function LoginButton(_ref) {
  var onClick = _ref.onClick;
  return /*#__PURE__*/_react["default"].createElement(_styledComponents2.Button, {
    link: true,
    small: true,
    onClick: onClick
  }, /*#__PURE__*/_react["default"].createElement(_icons.Login, null), "Login");
};

var LogoutButton = function LogoutButton(_ref2) {
  var onClick = _ref2.onClick;
  return /*#__PURE__*/_react["default"].createElement(_styledComponents2.Button, {
    link: true,
    small: true,
    onClick: onClick
  }, /*#__PURE__*/_react["default"].createElement(_icons.Logout, null), "Logout");
};

var ActionButton = function ActionButton(_ref3) {
  var isConnected = _ref3.isConnected,
      actionName = _ref3.actionName,
      isReady = _ref3.isReady;
  return isConnected && actionName ? /*#__PURE__*/_react["default"].createElement(_styledComponents2.Button, {
    className: "cloud-tile__action",
    small: true,
    secondary: true,
    disabled: !isReady
  }, isReady ? actionName : /*#__PURE__*/_react["default"].createElement(_loadingSpinner["default"], {
    size: 12
  })) : null;
};

var CloudTile = function CloudTile(_ref4) {
  var onSelect = _ref4.onSelect,
      onConnect = _ref4.onConnect,
      onLogout = _ref4.onLogout,
      actionName = _ref4.actionName,
      cloudProvider = _ref4.cloudProvider,
      onSetCloudProvider = _ref4.onSetCloudProvider,
      isSelected = _ref4.isSelected,
      isConnected = _ref4.isConnected,
      _ref4$isReady = _ref4.isReady,
      isReady = _ref4$isReady === void 0 ? true : _ref4$isReady;
  var userName = typeof cloudProvider.getUserName === 'function' ? cloudProvider.getUserName() : null;
  var onClickConnect = typeof onConnect === 'function' ? onConnect : function () {
    return cloudProvider.login(function () {
      return onSetCloudProvider(cloudProvider.name);
    });
  };
  var onClickLogout = typeof onLogout === 'function' ? onLogout : function () {
    return cloudProvider.logout(function () {
      return isSelected ? onSetCloudProvider(null) : null;
    });
  };
  return /*#__PURE__*/_react["default"].createElement(StyledBox, null, /*#__PURE__*/_react["default"].createElement(StyledTileWrapper, {
    onClick: isConnected ? onSelect : onClickConnect,
    selected: isSelected
  }, /*#__PURE__*/_react["default"].createElement(StyledCloudName, null, cloudProvider.displayName || cloudProvider.name), cloudProvider.icon ? /*#__PURE__*/_react["default"].createElement(cloudProvider.icon, {
    height: "64px"
  }) : null, /*#__PURE__*/_react["default"].createElement(ActionButton, {
    isConnected: isConnected,
    actionName: actionName,
    isReady: isReady
  }), userName && /*#__PURE__*/_react["default"].createElement(StyledUserName, null, userName), isSelected && /*#__PURE__*/_react["default"].createElement(CheckMark, null)), isConnected ? /*#__PURE__*/_react["default"].createElement(LogoutButton, {
    className: "logout-button",
    onClick: onClickLogout
  }) : /*#__PURE__*/_react["default"].createElement(LoginButton, {
    className: "login-button",
    onClick: onClickConnect
  }));
};

var _default = CloudTile;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL21vZGFscy9jbG91ZC10aWxlLmpzIl0sIm5hbWVzIjpbIlN0eWxlZFRpbGVXcmFwcGVyIiwic3R5bGVkIiwiZGl2IiwiYXR0cnMiLCJjbGFzc05hbWUiLCJwcm9wcyIsInNlbGVjdGVkIiwidGhlbWUiLCJwcmltYXJ5QnRuQmdkIiwic2VsZWN0Qm9yZGVyQ29sb3JMVCIsInRyYW5zaXRpb24iLCJDaGVja01hcmsiLCJzcGFuIiwiU3R5bGVkQm94IiwiQ2VudGVyVmVydGljYWxGbGV4Ym94IiwiU3R5bGVkQ2xvdWROYW1lIiwiU3R5bGVkVXNlck5hbWUiLCJwcmltYXJ5QnRuQWN0QmdkIiwiTG9naW5CdXR0b24iLCJvbkNsaWNrIiwiTG9nb3V0QnV0dG9uIiwiQWN0aW9uQnV0dG9uIiwiaXNDb25uZWN0ZWQiLCJhY3Rpb25OYW1lIiwiaXNSZWFkeSIsIkNsb3VkVGlsZSIsIm9uU2VsZWN0Iiwib25Db25uZWN0Iiwib25Mb2dvdXQiLCJjbG91ZFByb3ZpZGVyIiwib25TZXRDbG91ZFByb3ZpZGVyIiwiaXNTZWxlY3RlZCIsInVzZXJOYW1lIiwiZ2V0VXNlck5hbWUiLCJvbkNsaWNrQ29ubmVjdCIsImxvZ2luIiwibmFtZSIsIm9uQ2xpY2tMb2dvdXQiLCJsb2dvdXQiLCJkaXNwbGF5TmFtZSIsImljb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsaUJBQWlCLEdBQUdDLDZCQUFPQyxHQUFQLENBQVdDLEtBQVgsQ0FBaUI7QUFDekNDLEVBQUFBLFNBQVMsRUFBRTtBQUQ4QixDQUFqQixDQUFILG9CQVNqQixVQUFBQyxLQUFLO0FBQUEsU0FBS0EsS0FBSyxDQUFDQyxRQUFOLEdBQWlCRCxLQUFLLENBQUNFLEtBQU4sQ0FBWUMsYUFBN0IsR0FBNkNILEtB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UUdULFdBQVcsZ0JBQ1YsZ0NBQUMsWUFBRDtBQUFjLElBQUEsU0FBUyxFQUFDLGVBQXhCO0FBQXdDLElBQUEsT0FBTyxFQUFFZTtBQUFqRCxJQURVLGdCQUdWLGdDQUFDLFdBQUQ7QUFBYSxJQUFBLFNBQVMsRUFBQyxjQUF2QjtBQUFzQyxJQUFBLE9BQU8sRUFBRUg7QUFBL0MsSUFYSixDQURGO0FBZ0JELENBakREOztlQW1EZVQsUyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMCBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQge0xvZ291dCwgTG9naW59IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL2ljb25zJztcclxuaW1wb3J0IHtDZW50ZXJWZXJ0aWNhbEZsZXhib3gsIEJ1dHRvbn0gZnJvbSAnY29tcG9uZW50cy9jb21tb24vc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgTG9hZGluZ1NwaW5uZXIgZnJvbSAnY29tcG9uZW50cy9jb21tb24vbG9hZGluZy1zcGlubmVyJztcclxuXHJcbmNvbnN0IFN0eWxlZFRpbGVXcmFwcGVyID0gc3R5bGVkLmRpdi5hdHRycyh7XHJcbiAgY2xhc3NOYW1lOiAncHJvdmlkZXItdGlsZV9fd3JhcHBlcidcclxufSlgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICBib3JkZXI6IDFweCBzb2xpZFxyXG4gICAgJHtwcm9wcyA9PiAocHJvcHMuc2VsZWN0ZWQgPyBwcm9wcy50aGVtZS5wcmltYXJ5QnRuQmdkIDogcHJvcHMudGhlbWUuc2VsZWN0Qm9yZGVyQ29sb3JMVCl9O1xyXG4gIGNvbG9yOiAke3Byb3BzID0+IChwcm9wcy5zZWxlY3RlZCA/IHByb3BzLnRoZW1lLnByaW1hcnlCdG5CZ2QgOiBwcm9wcy50aGVtZS5zZWxlY3RCb3JkZXJDb2xvckxUKX07XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgd2lkdGg6IDEyMHB4O1xyXG4gIGhlaWdodDogMTY4cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICB0cmFuc2l0aW9uOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRyYW5zaXRpb259O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICA6aG92ZXIge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5wcmltYXJ5QnRuQmdkfTtcclxuICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnByaW1hcnlCdG5CZ2R9O1xyXG4gIH1cclxuXHJcbiAgLmJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IENoZWNrTWFyayA9IHN0eWxlZC5zcGFuLmF0dHJzKHtcclxuICBjbGFzc05hbWU6ICdjaGVja2JveC1pbm5lcidcclxufSlgXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5wcmltYXJ5QnRuQmdkfTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAxNnB4O1xyXG4gIGhlaWdodDogMTZweDtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAycHg7XHJcblxyXG4gIDphZnRlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XHJcbiAgICBib3JkZXItdG9wOiAwO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDA7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZykgc2NhbGUoMSkgdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIGNvbnRlbnQ6ICcgJztcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogMjUlO1xyXG4gICAgd2lkdGg6IDUuN3B4O1xyXG4gICAgaGVpZ2h0OiA5LjFweDtcclxuICB9XHJcbmA7XHJcbmNvbnN0IFN0eWxlZEJveCA9IHN0eWxlZChDZW50ZXJWZXJ0aWNhbEZsZXhib3gpYFxyXG4gIG1hcmdpbi1yaWdodDogMTJweDtcclxuYDtcclxuXHJcbmNvbnN0IFN0eWxlZENsb3VkTmFtZSA9IHN0eWxlZC5kaXZgXHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIG1hcmdpbi10b3A6IDEycHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xyXG5gO1xyXG5cclxuY29uc3QgU3R5bGVkVXNlck5hbWUgPSBzdHlsZWQuZGl2YFxyXG4gIGZvbnQtc2l6ZTogMTFweDtcclxuICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnByaW1hcnlCdG5BY3RCZ2R9O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG5gO1xyXG5cclxuY29uc3QgTG9naW5CdXR0b24gPSAoe29uQ2xpY2t9KSA9PiAoXHJcbiAgPEJ1dHRvbiBsaW5rIHNtYWxsIG9uQ2xpY2s9e29uQ2xpY2t9PlxyXG4gICAgPExvZ2luIC8+XHJcbiAgICBMb2dpblxyXG4gIDwvQnV0dG9uPlxyXG4pO1xyXG5cclxuY29uc3QgTG9nb3V0QnV0dG9uID0gKHtvbkNsaWNrfSkgPT4gKFxyXG4gIDxCdXR0b24gbGluayBzbWFsbCBvbkNsaWNrPXtvbkNsaWNrfT5cclxuICAgIDxMb2dvdXQgLz5cclxuICAgIExvZ291dFxyXG4gIDwvQnV0dG9uPlxyXG4pO1xyXG5cclxuY29uc3QgQWN0aW9uQnV0dG9uID0gKHtpc0Nvbm5lY3RlZCwgYWN0aW9uTmFtZSwgaXNSZWFkeX0pID0+XHJcbiAgaXNDb25uZWN0ZWQgJiYgYWN0aW9uTmFtZSA/IChcclxuICAgIDxCdXR0b24gY2xhc3NOYW1lPVwiY2xvdWQtdGlsZV9fYWN0aW9uXCIgc21hbGwgc2Vjb25kYXJ5IGRpc2FibGVkPXshaXNSZWFkeX0+XHJcbiAgICAgIHtpc1JlYWR5ID8gYWN0aW9uTmFtZSA6IDxMb2FkaW5nU3Bpbm5lciBzaXplPXsxMn0gLz59XHJcbiAgICA8L0J1dHRvbj5cclxuICApIDogbnVsbDtcclxuXHJcbmNvbnN0IENsb3VkVGlsZSA9ICh7XHJcbiAgLy8gYWN0aW9uIHdoZW4gY2xpY2sgb24gdGhlIHRpbGVcclxuICBvblNlbGVjdCxcclxuICAvLyBkZWZhdWx0IHRvIGxvZ2luXHJcbiAgb25Db25uZWN0LFxyXG4gIC8vIGRlZmF1bHQgdG8gbG9nb3V0XHJcbiAgb25Mb2dvdXQsXHJcbiAgLy8gYWN0aW9uIG5hbWVcclxuICBhY3Rpb25OYW1lLFxyXG4gIC8vIGNsb3VkIHByb3ZpZGVyIGNsYXNzXHJcbiAgY2xvdWRQcm92aWRlcixcclxuICAvLyBmdW5jdGlvbiB0byB0YWtlIGFmdGVyIGxvZ2luIG9yIGxvZ291dFxyXG4gIG9uU2V0Q2xvdWRQcm92aWRlcixcclxuICAvLyB3aGV0aGVyIHByb3ZpZGVyIGlzIHNlbGVjdGVkIGFzIGN1cnJlbnRQcm92aWRlclxyXG4gIGlzU2VsZWN0ZWQsXHJcbiAgLy8gd2hldGhlciB1c2VyIGhhcyBsb2dnZWQgaW5cclxuICBpc0Nvbm5lY3RlZCxcclxuXHJcbiAgaXNSZWFkeSA9IHRydWVcclxufSkgPT4ge1xyXG4gIGNvbnN0IHVzZXJOYW1lID1cclxuICAgIHR5cGVvZiBjbG91ZFByb3ZpZGVyLmdldFVzZXJOYW1lID09PSAnZnVuY3Rpb24nID8gY2xvdWRQcm92aWRlci5nZXRVc2VyTmFtZSgpIDogbnVsbDtcclxuXHJcbiAgY29uc3Qgb25DbGlja0Nvbm5lY3QgPVxyXG4gICAgdHlwZW9mIG9uQ29ubmVjdCA9PT0gJ2Z1bmN0aW9uJ1xyXG4gICAgICA/IG9uQ29ubmVjdFxyXG4gICAgICA6ICgpID0+IGNsb3VkUHJvdmlkZXIubG9naW4oKCkgPT4gb25TZXRDbG91ZFByb3ZpZGVyKGNsb3VkUHJvdmlkZXIubmFtZSkpO1xyXG5cclxuICBjb25zdCBvbkNsaWNrTG9nb3V0ID1cclxuICAgIHR5cGVvZiBvbkxvZ291dCA9PT0gJ2Z1bmN0aW9uJ1xyXG4gICAgICA/IG9uTG9nb3V0XHJcbiAgICAgIDogKCkgPT4gY2xvdWRQcm92aWRlci5sb2dvdXQoKCkgPT4gKGlzU2VsZWN0ZWQgPyBvblNldENsb3VkUHJvdmlkZXIobnVsbCkgOiBudWxsKSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8U3R5bGVkQm94PlxyXG4gICAgICA8U3R5bGVkVGlsZVdyYXBwZXIgb25DbGljaz17aXNDb25uZWN0ZWQgPyBvblNlbGVjdCA6IG9uQ2xpY2tDb25uZWN0fSBzZWxlY3RlZD17aXNTZWxlY3RlZH0+XHJcbiAgICAgICAgPFN0eWxlZENsb3VkTmFtZT57Y2xvdWRQcm92aWRlci5kaXNwbGF5TmFtZSB8fCBjbG91ZFByb3ZpZGVyLm5hbWV9PC9TdHlsZWRDbG91ZE5hbWU+XHJcbiAgICAgICAge2Nsb3VkUHJvdmlkZXIuaWNvbiA/IDxjbG91ZFByb3ZpZGVyLmljb24gaGVpZ2h0PVwiNjRweFwiIC8+IDogbnVsbH1cclxuICAgICAgICA8QWN0aW9uQnV0dG9uIGlzQ29ubmVjdGVkPXtpc0Nvbm5lY3RlZH0gYWN0aW9uTmFtZT17YWN0aW9uTmFtZX0gaXNSZWFkeT17aXNSZWFkeX0gLz5cclxuICAgICAgICB7dXNlck5hbWUgJiYgPFN0eWxlZFVzZXJOYW1lPnt1c2VyTmFtZX08L1N0eWxlZFVzZXJOYW1lPn1cclxuICAgICAgICB7aXNTZWxlY3RlZCAmJiA8Q2hlY2tNYXJrIC8+fVxyXG4gICAgICA8L1N0eWxlZFRpbGVXcmFwcGVyPlxyXG4gICAgICB7aXNDb25uZWN0ZWQgPyAoXHJcbiAgICAgICAgPExvZ291dEJ1dHRvbiBjbGFzc05hbWU9XCJsb2dvdXQtYnV0dG9uXCIgb25DbGljaz17b25DbGlja0xvZ291dH0gLz5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8TG9naW5CdXR0b24gY2xhc3NOYW1lPVwibG9naW4tYnV0dG9uXCIgb25DbGljaz17b25DbGlja0Nvbm5lY3R9IC8+XHJcbiAgICAgICl9XHJcbiAgICA8L1N0eWxlZEJveD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2xvdWRUaWxlO1xyXG4iXX0=