"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ShareMapUrlModalFactory;
exports.SharingUrl = exports.StyleSharingUrl = exports.StyledInputLabel = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _reactCopyToClipboard = require("react-copy-to-clipboard");

var _base = require("../../styles/base");

var _imageModalContainer = _interopRequireDefault(require("./image-modal-container"));

var _providerModalContainer = _interopRequireDefault(require("./provider-modal-container"));

var _styledComponents2 = require("../common/styled-components");

var _cloudTile = _interopRequireDefault(require("./cloud-tile"));

var _statusPanel = _interopRequireDefault(require("./status-panel"));

var _reactIntl = require("react-intl");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  min-height: 500px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  padding: 24px 72px 40px 72px;\n  margin: 0 -72px -40px -72px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  width: 100%;\n  display: flex;\n  margin-bottom: 14px;\n  flex-direction: column;\n\n  input {\n    border-right: 0;\n  }\n\n  .button {\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  font-size: 12px;\n  color: ", ";\n  letter-spacing: 0.2px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var StyledInputLabel = _styledComponents["default"].label(_templateObject(), function (props) {
  return props.theme.textColorLT;
});

exports.StyledInputLabel = StyledInputLabel;

var StyleSharingUrl = _styledComponents["default"].div.attrs({
  className: 'sharing-url'
})(_templateObject2());

exports.StyleSharingUrl = StyleSharingUrl;

var SharingUrl = function SharingUrl(_ref) {
  var url = _ref.url,
      message = _ref.message;

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      copied = _useState2[0],
      setCopy = _useState2[1];

  return /*#__PURE__*/_react["default"].createElement(StyleSharingUrl, null, /*#__PURE__*/_react["default"].createElement(StyledInputLabel, null, message), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'flex'
    }
  }, /*#__PURE__*/_react["default"].createElement(_styledComponents2.InputLight, {
    type: "text",
    value: url,
    readOnly: true,
    selected: true
  }), /*#__PURE__*/_react["default"].createElement(_reactCopyToClipboard.CopyToClipboard, {
    text: url,
    onCopy: function onCopy() {
      return setCopy(true);
    }
  }, /*#__PURE__*/_react["default"].createElement(_styledComponents2.Button, {
    width: "80px"
  }, copied ? 'Copied!' : 'Copy'))));
};

exports.SharingUrl = SharingUrl;

var nop = function nop() {};

var StyledShareMapModal = (0, _styledComponents["default"])(_styledComponents2.StyledModalContent)(_templateObject3());

var StyledInnerDiv = _styledComponents["default"].div(_templateObject4());

function ShareMapUrlModalFactory() {
  var ShareMapUrlModal = /*#__PURE__*/function (_Component) {
    (0, _inherits2["default"])(ShareMapUrlModal, _Component);

    var _super = _createSuper(ShareMapUrlModal);

    function ShareMapUrlModal() {
      (0, _classCallCheck2["default"])(this, ShareMapUrlModal);
      return _super.apply(this, arguments);
    }

    (0, _createClass2["default"])(ShareMapUrlModal, [{
      key: "render",
      value: function render() {
        var _this$props = this.props,
            isProviderLoading = _this$props.isProviderLoading,
            isReady = _this$props.isReady,
            onExport = _this$props.onExport,
            cloudProviders = _this$props.cloudProviders,
            currentProvider = _this$props.currentProvider,
            providerError = _this$props.providerError,
            successInfo = _this$props.successInfo,
            onSetCloudProvider = _this$props.onSetCloudProvider,
            onUpdateImageSetting = _this$props.onUpdateImageSetting;
        var shareUrl = successInfo.shareUrl,
            folderLink = successInfo.folderLink;
        var provider = currentProvider ? cloudProviders.find(function (p) {
          return p.name === currentProvider;
        }) : null;
        return /*#__PURE__*/_react["default"].createElement(_styledComponents.ThemeProvider, {
          theme: _base.themeLT
        }, /*#__PURE__*/_react["default"].createElement(_providerModalContainer["default"], {
          onSetCloudProvider: onSetCloudProvider,
          cloudProviders: cloudProviders,
          currentProvider: currentProvider
        }, /*#__PURE__*/_react["default"].createElement(_imageModalContainer["default"], {
          currentProvider: currentProvider,
          cloudProviders: cloudProviders,
          onUpdateImageSetting: onUpdateImageSetting
        }, /*#__PURE__*/_react["default"].createElement(StyledShareMapModal, {
          className: "export-cloud-modal"
        }, /*#__PURE__*/_react["default"].createElement(StyledInnerDiv, null, /*#__PURE__*/_react["default"].createElement(_styledComponents2.StyledExportSection, null, /*#__PURE__*/_react["default"].createElement("div", {
          className: "description"
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: "title"
        }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
          id: 'modal.shareMap.shareUriTitle'
        })), /*#__PURE__*/_react["default"].createElement("div", {
          className: "subtitle"
        }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
          id: 'modal.shareMap.shareUriSubtitle'
        }))), /*#__PURE__*/_react["default"].createElement("div", {
          className: "selection"
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: "title warning"
        }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
          id: 'modal.shareMap.shareDisclaimer'
        })))), /*#__PURE__*/_react["default"].createElement(_styledComponents2.StyledExportSection, {
          disabled: isProviderLoading
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: "description"
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: "title"
        }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
          id: 'modal.shareMap.cloudTitle'
        })), /*#__PURE__*/_react["default"].createElement("div", {
          className: "subtitle"
        }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
          id: 'modal.shareMap.cloudSubtitle'
        }))), /*#__PURE__*/_react["default"].createElement("div", {
          className: "selection"
        }, cloudProviders.map(function (cloudProvider) {
          return /*#__PURE__*/_react["default"].createElement(_cloudTile["default"], {
            key: cloudProvider.name,
            onSelect: function onSelect() {
              return onExport(cloudProvider);
            },
            onSetCloudProvider: onSetCloudProvider,
            cloudProvider: cloudProvider,
            actionName: "Upload",
            isSelected: cloudProvider.name === currentProvider,
            isConnected: Boolean(cloudProvider.getAccessToken()),
            isReady: isReady
          });
        }))), isProviderLoading || providerError ? /*#__PURE__*/_react["default"].createElement(_statusPanel["default"], {
          isLoading: isProviderLoading,
          error: providerError,
          providerIcon: provider && provider.icon
        }) : null, shareUrl && /*#__PURE__*/_react["default"].createElement(_styledComponents2.StyledExportSection, null, /*#__PURE__*/_react["default"].createElement("div", {
          className: "description"
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: "title"
        }, "Share Url")), /*#__PURE__*/_react["default"].createElement("div", {
          className: "selection"
        }, /*#__PURE__*/_react["default"].createElement(SharingUrl, {
          key: 0,
          url: shareUrl
        }), provider && folderLink && /*#__PURE__*/_react["default"].createElement("a", {
          key: 1,
          href: folderLink,
          target: "_blank",
          rel: "noopener noreferrer",
          style: {
            textDecoration: 'underline'
          }
        }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
          id: 'modal.shareMap.gotoPage',
          values: {
            currentProvider: currentProvider
          }
        })))))))));
      }
    }]);
    return ShareMapUrlModal;
  }(_react.Component);

  (0, _defineProperty2["default"])(ShareMapUrlModal, "defaultProps", {
    isProviderLoading: false,
    onExport: nop,
    cloudProviders: [],
    currentProvider: null,
    providerError: null,
    successInfo: {},
    onSetCloudProvider: nop,
    onUpdateImageSetting: nop
  });
  return ShareMapUrlModal;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL21vZGFscy9zaGFyZS1tYXAtbW9kYWwuanMiXSwibmFtZXMiOlsiU3R5bGVkSW5wdXRMYWJlbCIsInN0eWxlZCIsImxhYmVsIiwicHJvcHMiLCJ0aGVtZSIsInRleHRDb2xvckxUIiwiU3R5bGVTaGFyaW5nVXJsIiwiZGl2IiwiYXR0cnMiLCJjbGFzc05hbWUiLCJTaGFyaW5nVXJsIiwidXJsIiwibWVzc2FnZSIsImNvcGllZCIsInNldENvcHkiLCJkaXNwbGF5Iiwibm9wIiwiU3R5bGVkU2hhcmVNYXBNb2RhbCIsIlN0eWxlZE1vZGFsQ29udGVudCIsIlN0eWxlZElubmVyRGl2IiwiU2hhcmVNYXBVcmxNb2RhbEZhY3RvcnkiLCJTaGFyZU1hcFVybE1vZGFsIiwiaXNQcm92aWRlckxvYWRpbmciLCJpc1JlYWR5Iiwib25FeHBvcnQiLCJjbG91ZFByb3ZpZGVycyIsImN1cnJlbnRQcm92aWRlciIsInByb3ZpZGVyRXJyb3IiLCJzdWNjZXNzSW5mbyIsIm9uU2V0Q2xvdWRQcm92aWRlciIsIm9uVXBkYXRlSW1hZ2VTZXR0aW5nIiwic2hhcmVVcmwiLCJmb2xkZXJMaW5rIiwicHJvdmlkZXIiLCJmaW5kIiwicCIsIm5hbWUiLCJ0aGVtZUxUIiwibWFwIiwiY2xvdWRQcm92aWRlciIsIkJvb2xlYW4iLCJnZXRBY2Nlc3NUb2tlbiIsImljb24iLCJ0ZXh0RGVjb3JhdGlvbiIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFNQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVPLElBQU1BLGdCQUFnQixHQUFHQyw2QkFBT0MsS0FBVixvQkFFbEIsVUFBQUMsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFo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QUNwQkMsSUFBQUEsaUJBQWlCLEVBQUUsS0FEQztBQUVwQkUsSUFBQUEsUUFBUSxFQUFFUixHQUZVO0FBR3BCUyxJQUFBQSxjQUFjLEVBQUUsRUFISTtBQUlwQkMsSUFBQUEsZUFBZSxFQUFFLElBSkc7QUFLcEJDLElBQUFBLGFBQWEsRUFBRSxJQUxLO0FBTXBCQyxJQUFBQSxXQUFXLEVBQUUsRUFOTztBQU9wQkMsSUFBQUEsa0JBQWtCLEVBQUViLEdBUEE7QUFRcEJjLElBQUFBLG9CQUFvQixFQUFFZDtBQVJGLEdBRndCO0FBMkhoRCxTQUFPSyxnQkFBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIENvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVkLCB7VGhlbWVQcm92aWRlcn0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQge0NvcHlUb0NsaXBib2FyZH0gZnJvbSAncmVhY3QtY29weS10by1jbGlwYm9hcmQnO1xyXG5pbXBvcnQge3RoZW1lTFR9IGZyb20gJ3N0eWxlcy9iYXNlJztcclxuaW1wb3J0IEltYWdlTW9kYWxDb250YWluZXIgZnJvbSAnLi9pbWFnZS1tb2RhbC1jb250YWluZXInO1xyXG5pbXBvcnQgUHJvdmlkZXJNb2RhbENvbnRhaW5lciBmcm9tICcuL3Byb3ZpZGVyLW1vZGFsLWNvbnRhaW5lcic7XHJcblxyXG5pbXBvcnQge1xyXG4gIFN0eWxlZE1vZGFsQ29udGVudCxcclxuICBTdHlsZWRFeHBvcnRTZWN0aW9uLFxyXG4gIElucHV0TGlnaHQsXHJcbiAgQnV0dG9uXHJcbn0gZnJvbSAnY29tcG9uZW50cy9jb21tb24vc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgQ2xvdWRUaWxlIGZyb20gJy4vY2xvdWQtdGlsZSc7XHJcbmltcG9ydCBTdGF0dXNQYW5lbCBmcm9tICcuL3N0YXR1cy1wYW5lbCc7XHJcbmltcG9ydCB7Rm9ybWF0dGVkTWVzc2FnZX0gZnJvbSAncmVhY3QtaW50bCc7XHJcblxyXG5leHBvcnQgY29uc3QgU3R5bGVkSW5wdXRMYWJlbCA9IHN0eWxlZC5sYWJlbGBcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudGV4dENvbG9yTFR9O1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjJweDtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBTdHlsZVNoYXJpbmdVcmwgPSBzdHlsZWQuZGl2LmF0dHJzKHtcclxuICBjbGFzc05hbWU6ICdzaGFyaW5nLXVybCdcclxufSlgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtYXJnaW4tYm90dG9tOiAxNHB4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gIGlucHV0IHtcclxuICAgIGJvcmRlci1yaWdodDogMDtcclxuICB9XHJcblxyXG4gIC5idXR0b24ge1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNoYXJpbmdVcmwgPSAoe3VybCwgbWVzc2FnZX0pID0+IHtcclxuICBjb25zdCBbY29waWVkLCBzZXRDb3B5XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICByZXR1cm4gKFxyXG4gICAgPFN0eWxlU2hhcmluZ1VybD5cclxuICAgICAgPFN0eWxlZElucHV0TGFiZWw+e21lc3NhZ2V9PC9TdHlsZWRJbnB1dExhYmVsPlxyXG4gICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTogJ2ZsZXgnfX0+XHJcbiAgICAgICAgPElucHV0TGlnaHQgdHlwZT1cInRleHRcIiB2YWx1ZT17dXJsfSByZWFkT25seSBzZWxlY3RlZCAvPlxyXG4gICAgICAgIDxDb3B5VG9DbGlwYm9hcmQgdGV4dD17dXJsfSBvbkNvcHk9eygpID0+IHNldENvcHkodHJ1ZSl9PlxyXG4gICAgICAgICAgPEJ1dHRvbiB3aWR0aD1cIjgwcHhcIj57Y29waWVkID8gJ0NvcGllZCEnIDogJ0NvcHknfTwvQnV0dG9uPlxyXG4gICAgICAgIDwvQ29weVRvQ2xpcGJvYXJkPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvU3R5bGVTaGFyaW5nVXJsPlxyXG4gICk7XHJcbn07XHJcbmNvbnN0IG5vcCA9ICgpID0+IHt9O1xyXG5cclxuY29uc3QgU3R5bGVkU2hhcmVNYXBNb2RhbCA9IHN0eWxlZChTdHlsZWRNb2RhbENvbnRlbnQpYFxyXG4gIHBhZGRpbmc6IDI0cHggNzJweCA0MHB4IDcycHg7XHJcbiAgbWFyZ2luOiAwIC03MnB4IC00MHB4IC03MnB4O1xyXG5gO1xyXG5cclxuY29uc3QgU3R5bGVkSW5uZXJEaXYgPSBzdHlsZWQuZGl2YFxyXG4gIG1pbi1oZWlnaHQ6IDUwMHB4O1xyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2hhcmVNYXBVcmxNb2RhbEZhY3RvcnkoKSB7XHJcbiAgY2xhc3MgU2hhcmVNYXBVcmxNb2RhbCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xyXG4gICAgICBpc1Byb3ZpZGVyTG9hZGluZzogZmFsc2UsXHJcbiAgICAgIG9uRXhwb3J0OiBub3AsXHJcbiAgICAgIGNsb3VkUHJvdmlkZXJzOiBbXSxcclxuICAgICAgY3VycmVudFByb3ZpZGVyOiBudWxsLFxyXG4gICAgICBwcm92aWRlckVycm9yOiBudWxsLFxyXG4gICAgICBzdWNjZXNzSW5mbzoge30sXHJcbiAgICAgIG9uU2V0Q2xvdWRQcm92aWRlcjogbm9wLFxyXG4gICAgICBvblVwZGF0ZUltYWdlU2V0dGluZzogbm9wXHJcbiAgICB9O1xyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgY29uc3Qge1xyXG4gICAgICAgIGlzUHJvdmlkZXJMb2FkaW5nLFxyXG4gICAgICAgIGlzUmVhZHksXHJcbiAgICAgICAgb25FeHBvcnQsXHJcbiAgICAgICAgY2xvdWRQcm92aWRlcnMsXHJcbiAgICAgICAgY3VycmVudFByb3ZpZGVyLFxyXG4gICAgICAgIHByb3ZpZGVyRXJyb3IsXHJcbiAgICAgICAgc3VjY2Vzc0luZm8sXHJcbiAgICAgICAgb25TZXRDbG91ZFByb3ZpZGVyLFxyXG4gICAgICAgIG9uVXBkYXRlSW1hZ2VTZXR0aW5nXHJcbiAgICAgIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICBjb25zdCB7c2hhcmVVcmwsIGZvbGRlckxpbmt9ID0gc3VjY2Vzc0luZm87XHJcbiAgICAgIGNvbnN0IHByb3ZpZGVyID0gY3VycmVudFByb3ZpZGVyXHJcbiAgICAgICAgPyBjbG91ZFByb3ZpZGVycy5maW5kKHAgPT4gcC5uYW1lID09PSBjdXJyZW50UHJvdmlkZXIpXHJcbiAgICAgICAgOiBudWxsO1xyXG5cclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWVMVH0+XHJcbiAgICAgICAgICA8UHJvdmlkZXJNb2RhbENvbnRhaW5lclxyXG4gICAgICAgICAgICBvblNldENsb3VkUHJvdmlkZXI9e29uU2V0Q2xvdWRQcm92aWRlcn1cclxuICAgICAgICAgICAgY2xvdWRQcm92aWRlcnM9e2Nsb3VkUHJvdmlkZXJzfVxyXG4gICAgICAgICAgICBjdXJyZW50UHJvdmlkZXI9e2N1cnJlbnRQcm92aWRlcn1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEltYWdlTW9kYWxDb250YWluZXJcclxuICAgICAgICAgICAgICBjdXJyZW50UHJvdmlkZXI9e2N1cnJlbnRQcm92aWRlcn1cclxuICAgICAgICAgICAgICBjbG91ZFByb3ZpZGVycz17Y2xvdWRQcm92aWRlcnN9XHJcbiAgICAgICAgICAgICAgb25VcGRhdGVJbWFnZVNldHRpbmc9e29uVXBkYXRlSW1hZ2VTZXR0aW5nfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPFN0eWxlZFNoYXJlTWFwTW9kYWwgY2xhc3NOYW1lPVwiZXhwb3J0LWNsb3VkLW1vZGFsXCI+XHJcbiAgICAgICAgICAgICAgICA8U3R5bGVkSW5uZXJEaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxTdHlsZWRFeHBvcnRTZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2UgaWQ9eydtb2RhbC5zaGFyZU1hcC5zaGFyZVVyaVRpdGxlJ30gLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWJ0aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZSBpZD17J21vZGFsLnNoYXJlTWFwLnNoYXJlVXJpU3VidGl0bGUnfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWxlY3Rpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUgd2FybmluZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZSBpZD17J21vZGFsLnNoYXJlTWFwLnNoYXJlRGlzY2xhaW1lcid9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9TdHlsZWRFeHBvcnRTZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICA8U3R5bGVkRXhwb3J0U2VjdGlvbiBkaXNhYmxlZD17aXNQcm92aWRlckxvYWRpbmd9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2UgaWQ9eydtb2RhbC5zaGFyZU1hcC5jbG91ZFRpdGxlJ30gLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWJ0aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZSBpZD17J21vZGFsLnNoYXJlTWFwLmNsb3VkU3VidGl0bGUnfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWxlY3Rpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgIHtjbG91ZFByb3ZpZGVycy5tYXAoY2xvdWRQcm92aWRlciA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDbG91ZFRpbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2Nsb3VkUHJvdmlkZXIubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvblNlbGVjdD17KCkgPT4gb25FeHBvcnQoY2xvdWRQcm92aWRlcil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25TZXRDbG91ZFByb3ZpZGVyPXtvblNldENsb3VkUHJvdmlkZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xvdWRQcm92aWRlcj17Y2xvdWRQcm92aWRlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb25OYW1lPVwiVXBsb2FkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpc1NlbGVjdGVkPXtjbG91ZFByb3ZpZGVyLm5hbWUgPT09IGN1cnJlbnRQcm92aWRlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpc0Nvbm5lY3RlZD17Qm9vbGVhbihjbG91ZFByb3ZpZGVyLmdldEFjY2Vzc1Rva2VuKCkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlzUmVhZHk9e2lzUmVhZHl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9TdHlsZWRFeHBvcnRTZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICB7aXNQcm92aWRlckxvYWRpbmcgfHwgcHJvdmlkZXJFcnJvciA/IChcclxuICAgICAgICAgICAgICAgICAgICA8U3RhdHVzUGFuZWxcclxuICAgICAgICAgICAgICAgICAgICAgIGlzTG9hZGluZz17aXNQcm92aWRlckxvYWRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgICBlcnJvcj17cHJvdmlkZXJFcnJvcn1cclxuICAgICAgICAgICAgICAgICAgICAgIHByb3ZpZGVySWNvbj17cHJvdmlkZXIgJiYgcHJvdmlkZXIuaWNvbn1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAge3NoYXJlVXJsICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8U3R5bGVkRXhwb3J0U2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPlNoYXJlIFVybDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlbGVjdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U2hhcmluZ1VybCBrZXk9ezB9IHVybD17c2hhcmVVcmx9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtwcm92aWRlciAmJiBmb2xkZXJMaW5rICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXsxfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17Zm9sZGVyTGlua31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7dGV4dERlY29yYXRpb246ICd1bmRlcmxpbmUnfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17J21vZGFsLnNoYXJlTWFwLmdvdG9QYWdlJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzPXt7Y3VycmVudFByb3ZpZGVyfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9TdHlsZWRFeHBvcnRTZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9TdHlsZWRJbm5lckRpdj5cclxuICAgICAgICAgICAgICA8L1N0eWxlZFNoYXJlTWFwTW9kYWw+XHJcbiAgICAgICAgICAgIDwvSW1hZ2VNb2RhbENvbnRhaW5lcj5cclxuICAgICAgICAgIDwvUHJvdmlkZXJNb2RhbENvbnRhaW5lcj5cclxuICAgICAgICA8L1RoZW1lUHJvdmlkZXI+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gU2hhcmVNYXBVcmxNb2RhbDtcclxufVxyXG4iXX0=