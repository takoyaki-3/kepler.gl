"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _moment = _interopRequireDefault(require("moment"));

var _icons = require("../common/icons");

var _reactIntl = require("react-intl");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  color: red;\n  font-size: 14px;\n  margin-bottom: 16px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  font-size: 14px;\n  align-items: center;\n  color: ", ";\n  cursor: pointer;\n  margin-bottom: 40px;\n\n  :hover {\n    font-weight: 500;\n  }\n\n  span {\n    white-space: nowrap;\n  }\n  svg {\n    margin-right: 10px;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  width: 23%;\n  margin-right: 2%;\n  max-width: 500px;\n  margin-bottom: 40px;\n  height: 245px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n\n  :last {\n    margin-right: 0;\n  }\n\n  .asset__title {\n    font-size: 12px;\n    font-weight: 500;\n    color: ", ";\n    line-height: 18px;\n    height: 32px;\n  }\n\n  .asset__image {\n    border-radius: 4px;\n    overflow: hidden;\n    margin-bottom: 12px;\n    opacity: 0.9;\n    transition: opacity 0.4s ease;\n    position: relative;\n    line-height: 0;\n    height: ", "px;\n    flex-shrink: 0;\n\n    img {\n      max-width: 100%;\n    }\n    :hover {\n      cursor: pointer;\n      opacity: 1;\n    }\n  }\n\n  .asset__image__caption {\n    font-size: 11px;\n    font-weight: 400;\n    line-height: 16px;\n    margin-top: 10px;\n    height: 48px;\n    overflow: hidden;\n    display: -webkit-box;\n    text-overflow: ellipsis;\n    -webkit-line-clamp: 3;\n    -webkit-box-orient: vertical;\n  }\n\n  .asset__last-updated {\n    font-size: 11px;\n    color: ", ";\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  justify-content: flex-start;\n  flex-wrap: wrap;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var imageH = 108;
var propTypes = {
  onLoadAsset: _propTypes["default"].func.isRequired,
  back: _propTypes["default"].func.isRequired
};

var StyledAssetGallery = _styledComponents["default"].div.attrs({
  className: 'storage-asset-gallery'
})(_templateObject());

var StyledAssetItem = _styledComponents["default"].div.attrs({
  className: 'asset__item'
})(_templateObject2(), function (props) {
  return props.theme.textColorLT;
}, imageH, function (props) {
  return props.theme.textColorLT;
});

var BackLink = _styledComponents["default"].div(_templateObject3(), function (props) {
  return props.theme.titleColorLT;
});

var StyledError = _styledComponents["default"].div(_templateObject4());

var getDuration = function getDuration(last) {
  return _moment["default"].duration(new Date().valueOf() - last).humanize();
};

var AssetItem = function AssetItem(_ref) {
  var asset = _ref.asset,
      onClick = _ref.onClick;
  return /*#__PURE__*/_react["default"].createElement(StyledAssetItem, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "asset__image",
    onClick: onClick
  }, asset.imageUrl && /*#__PURE__*/_react["default"].createElement("img", {
    src: asset.imageUrl
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "asset__title"
  }, asset.label || asset.title), /*#__PURE__*/_react["default"].createElement("div", {
    className: "asset__image__caption"
  }, asset.description), asset.lastUpdated ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "asset__last-updated"
  }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: 'modal.storageMapViewer.lastModified',
    values: {
      lastUpdated: getDuration(asset.lastUpdated)
    }
  })) : null);
};

var StorageAssetsViewer = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(StorageAssetsViewer, _React$Component);

  var _super = _createSuper(StorageAssetsViewer);

  function StorageAssetsViewer() {
    (0, _classCallCheck2["default"])(this, StorageAssetsViewer);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(StorageAssetsViewer, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          assets = _this$props.assets,
          onLoadAsset = _this$props.onLoadAsset,
          back = _this$props.back,
          error = _this$props.error;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "storage-asset-viewer"
      }, /*#__PURE__*/_react["default"].createElement(BackLink, {
        onClick: back
      }, /*#__PURE__*/_react["default"].createElement(_icons.LeftArrow, {
        height: "12px"
      }), /*#__PURE__*/_react["default"].createElement("span", null, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: 'modal.storageMapViewer.back'
      }))), error && /*#__PURE__*/_react["default"].createElement(StyledError, null, error.message), /*#__PURE__*/_react["default"].createElement(StyledAssetGallery, null, assets.map(function (sp) {
        return /*#__PURE__*/_react["default"].createElement(AssetItem, {
          asset: sp,
          key: sp.id,
          onClick: function onClick() {
            return onLoadAsset(sp);
          }
        });
      })));
    }
  }]);
  return StorageAssetsViewer;
}(_react["default"].Component);

(0, _defineProperty2["default"])(StorageAssetsViewer, "propTypes", propTypes);
var _default = StorageAssetsViewer;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL21vZGFscy9zdG9yYWdlLW1hcC12aWV3ZXIuanMiXSwibmFtZXMiOlsiaW1hZ2VIIiwicHJvcFR5cGVzIiwib25Mb2FkQXNzZXQiLCJQcm9wVHlwZXMiLCJmdW5jIiwiaXNSZXF1aXJlZCIsImJhY2siLCJTdHlsZWRBc3NldEdhbGxlcnkiLCJzdHlsZWQiLCJkaXYiLCJhdHRycyIsImNsYXNzTmFtZSIsIlN0eWxlZEFzc2V0SXRlbSIsInByb3BzIiwidGhlbWUiLCJ0ZXh0Q29sb3JMVCIsIkJhY2tMaW5rIiwidGl0bGVDb2xvckxUIiwiU3R5bGVkRXJyb3IiLCJnZXREdXJhdGlvbiIsImxhc3QiLCJtb21lbnQiLCJkdXJhdGlvbiIsIkRhdGUiLCJ2YWx1ZU9mIiwiaHVtYW5pemUiLCJBc3NldEl0ZW0iLCJhc3NldCIsIm9uQ2xpY2siLCJpbWFnZVVybCIsImxhYmVsIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImxhc3RVcGRhdGVkIiwiU3RvcmFnZUFzc2V0c1ZpZXdlciIsImFzc2V0cyIsImVycm9yIiwibWVzc2FnZSIsIm1hcCIsInNwIiwiaWQiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsR0FBZjtBQUVBLElBQU1DLFNBQVMsR0FBRztBQUNoQkMsRUFBQUEsV0FBVyxFQUFFQyxzQkFBVUMsSUFBVixDQUFlQyxVQURaO0FBRWhCQyxFQUFBQSxJQUFJLEVBQUVILHNCQUFVQyxJQUFWLENBQWVDO0FBRkwsQ0FBbEI7O0FBS0EsSUFBTUUsa0JBQWtCLEdBQUdDLDZCQUFPQyxHQUFQLENBQVdDLEtBQVgsQ0FBaUI7QUFDMUNDLEVBQUFBLFNBQVMsRUFBRTtBQUQrQixDQUFqQixD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LENBUkYsQ0FERjtBQWdCRDs7O0VBdEIrQkUsa0JBQU1DLFM7O2lDQUFsQ1IsbUIsZUFDZWpDLFM7ZUF3Qk5pQyxtQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMCBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcbmltcG9ydCB7TGVmdEFycm93fSBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9pY29ucyc7XHJcbmltcG9ydCB7Rm9ybWF0dGVkTWVzc2FnZX0gZnJvbSAncmVhY3QtaW50bCc7XHJcblxyXG5jb25zdCBpbWFnZUggPSAxMDg7XHJcblxyXG5jb25zdCBwcm9wVHlwZXMgPSB7XHJcbiAgb25Mb2FkQXNzZXQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgYmFjazogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxyXG59O1xyXG5cclxuY29uc3QgU3R5bGVkQXNzZXRHYWxsZXJ5ID0gc3R5bGVkLmRpdi5hdHRycyh7XHJcbiAgY2xhc3NOYW1lOiAnc3RvcmFnZS1hc3NldC1nYWxsZXJ5J1xyXG59KWBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbmA7XHJcblxyXG5jb25zdCBTdHlsZWRBc3NldEl0ZW0gPSBzdHlsZWQuZGl2LmF0dHJzKHtcclxuICBjbGFzc05hbWU6ICdhc3NldF9faXRlbSdcclxufSlgXHJcbiAgd2lkdGg6IDIzJTtcclxuICBtYXJnaW4tcmlnaHQ6IDIlO1xyXG4gIG1heC13aWR0aDogNTAwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICBoZWlnaHQ6IDI0NXB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG4gIDpsYXN0IHtcclxuICAgIG1hcmdpbi1yaWdodDogMDtcclxuICB9XHJcblxyXG4gIC5hc3NldF9fdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRleHRDb2xvckxUfTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gICAgaGVpZ2h0OiAzMnB4O1xyXG4gIH1cclxuXHJcbiAgLmFzc2V0X19pbWFnZSB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxuICAgIG9wYWNpdHk6IDAuOTtcclxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC40cyBlYXNlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGluZS1oZWlnaHQ6IDA7XHJcbiAgICBoZWlnaHQ6ICR7aW1hZ2VIfXB4O1xyXG4gICAgZmxleC1zaHJpbms6IDA7XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgOmhvdmVyIHtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmFzc2V0X19pbWFnZV9fY2FwdGlvbiB7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDM7XHJcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG4gIH1cclxuXHJcbiAgLmFzc2V0X19sYXN0LXVwZGF0ZWQge1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudGV4dENvbG9yTFR9O1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IEJhY2tMaW5rID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRpdGxlQ29sb3JMVH07XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcblxyXG4gIDpob3ZlciB7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gIH1cclxuXHJcbiAgc3BhbiB7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIH1cclxuICBzdmcge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IFN0eWxlZEVycm9yID0gc3R5bGVkLmRpdmBcclxuICBjb2xvcjogcmVkO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG5gO1xyXG5cclxuY29uc3QgZ2V0RHVyYXRpb24gPSBsYXN0ID0+IG1vbWVudC5kdXJhdGlvbihuZXcgRGF0ZSgpLnZhbHVlT2YoKSAtIGxhc3QpLmh1bWFuaXplKCk7XHJcblxyXG5jb25zdCBBc3NldEl0ZW0gPSAoe2Fzc2V0LCBvbkNsaWNrfSkgPT4gKFxyXG4gIDxTdHlsZWRBc3NldEl0ZW0+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImFzc2V0X19pbWFnZVwiIG9uQ2xpY2s9e29uQ2xpY2t9PlxyXG4gICAgICB7YXNzZXQuaW1hZ2VVcmwgJiYgPGltZyBzcmM9e2Fzc2V0LmltYWdlVXJsfSAvPn1cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJhc3NldF9fdGl0bGVcIj57YXNzZXQubGFiZWwgfHwgYXNzZXQudGl0bGV9PC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImFzc2V0X19pbWFnZV9fY2FwdGlvblwiPnthc3NldC5kZXNjcmlwdGlvbn08L2Rpdj5cclxuICAgIHthc3NldC5sYXN0VXBkYXRlZCA/IChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhc3NldF9fbGFzdC11cGRhdGVkXCI+XHJcbiAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2VcclxuICAgICAgICAgIGlkPXsnbW9kYWwuc3RvcmFnZU1hcFZpZXdlci5sYXN0TW9kaWZpZWQnfVxyXG4gICAgICAgICAgdmFsdWVzPXt7bGFzdFVwZGF0ZWQ6IGdldER1cmF0aW9uKGFzc2V0Lmxhc3RVcGRhdGVkKX19XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICApIDogbnVsbH1cclxuICA8L1N0eWxlZEFzc2V0SXRlbT5cclxuKTtcclxuXHJcbmNsYXNzIFN0b3JhZ2VBc3NldHNWaWV3ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSBwcm9wVHlwZXM7XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHthc3NldHMsIG9uTG9hZEFzc2V0LCBiYWNrLCBlcnJvcn0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RvcmFnZS1hc3NldC12aWV3ZXJcIj5cclxuICAgICAgICA8QmFja0xpbmsgb25DbGljaz17YmFja30+XHJcbiAgICAgICAgICA8TGVmdEFycm93IGhlaWdodD1cIjEycHhcIiAvPlxyXG4gICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlIGlkPXsnbW9kYWwuc3RvcmFnZU1hcFZpZXdlci5iYWNrJ30gLz5cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L0JhY2tMaW5rPlxyXG4gICAgICAgIHtlcnJvciAmJiA8U3R5bGVkRXJyb3I+e2Vycm9yLm1lc3NhZ2V9PC9TdHlsZWRFcnJvcj59XHJcbiAgICAgICAgPFN0eWxlZEFzc2V0R2FsbGVyeT5cclxuICAgICAgICAgIHthc3NldHMubWFwKHNwID0+IChcclxuICAgICAgICAgICAgPEFzc2V0SXRlbSBhc3NldD17c3B9IGtleT17c3AuaWR9IG9uQ2xpY2s9eygpID0+IG9uTG9hZEFzc2V0KHNwKX0gLz5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvU3R5bGVkQXNzZXRHYWxsZXJ5PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdG9yYWdlQXNzZXRzVmlld2VyO1xyXG4iXX0=