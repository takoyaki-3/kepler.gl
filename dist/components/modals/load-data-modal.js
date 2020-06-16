"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _lodash = _interopRequireDefault(require("lodash.get"));

var _fileUpload = _interopRequireDefault(require("../common/file-uploader/file-upload"));

var _loadStorageMap = _interopRequireDefault(require("./load-storage-map"));

var _modalTabs = _interopRequireDefault(require("./modal-tabs"));

var _loadingDialog = _interopRequireDefault(require("./loading-dialog"));

var _defaultSettings = require("../../constants/default-settings");

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  padding: ", ";\n  min-height: 440px;\n  display: flex;\n  flex-direction: column;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var StyledLoadDataModal = _styledComponents["default"].div.attrs({
  className: 'load-data-modal'
})(_templateObject(), function (props) {
  return props.theme.modalPadding;
});

var noop = function noop() {};

var getDefaultMethod = function getDefaultMethod(methods) {
  return Array.isArray(methods) ? (0, _lodash["default"])(methods, [0]) : null;
};

LoadDataModalFactory.deps = [_modalTabs["default"], _fileUpload["default"], _loadStorageMap["default"]];

function LoadDataModalFactory(ModalTabs, FileUpload, LoadStorageMap) {
  var LoadDataModal = function LoadDataModal(props) {
    var fileLoading = props.fileLoading,
        loadingMethods = props.loadingMethods,
        isCloudMapLoading = props.isCloudMapLoading;

    var _useState = (0, _react.useState)(getDefaultMethod(loadingMethods)),
        _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
        currentMethod = _useState2[0],
        toggleMethod = _useState2[1];

    return /*#__PURE__*/_react["default"].createElement(StyledLoadDataModal, null, /*#__PURE__*/_react["default"].createElement(ModalTabs, {
      currentMethod: currentMethod.id,
      loadingMethods: loadingMethods,
      toggleMethod: toggleMethod
    }), fileLoading || isCloudMapLoading ? /*#__PURE__*/_react["default"].createElement(_loadingDialog["default"], {
      size: 64
    }) : currentMethod && /*#__PURE__*/_react["default"].createElement(currentMethod.elementType, (0, _extends2["default"])({
      key: currentMethod.id
    }, props)));
  };

  LoadDataModal.propTypes = {
    // call backs
    onFileUpload: _propTypes["default"].func.isRequired,
    onLoadCloudMap: _propTypes["default"].func.isRequired,
    fileLoading: _propTypes["default"].bool,
    loadingMethods: _propTypes["default"].arrayOf(_propTypes["default"].shape({
      id: _propTypes["default"].string,
      label: _propTypes["default"].string,
      elementType: _propTypes["default"].elementType,
      tabElementType: _propTypes["default"].elementType
    }))
  };
  LoadDataModal.defaultProps = {
    onFileUpload: noop,
    fileLoading: false,
    loadingMethods: [{
      id: _defaultSettings.LOADING_METHODS.upload,
      label: 'modal.loadData.upload',
      elementType: FileUpload
    }, {
      id: _defaultSettings.LOADING_METHODS.storage,
      label: 'modal.loadData.storage',
      elementType: LoadStorageMap
    }]
  };
  return LoadDataModal;
}

var _default = LoadDataModalFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL21vZGFscy9sb2FkLWRhdGEtbW9kYWwuanMiXSwibmFtZXMiOlsiU3R5bGVkTG9hZERhdGFNb2RhbCIsInN0eWxlZCIsImRpdiIsImF0dHJzIiwiY2xhc3NOYW1lIiwicHJvcHMiLCJ0aGVtZSIsIm1vZGFsUGFkZGluZyIsIm5vb3AiLCJnZXREZWZhdWx0TWV0aG9kIiwibWV0aG9kcyIsIkFycmF5IiwiaXNBcnJheSIsIkxvYWREYXRhTW9kYWxGYWN0b3J5IiwiZGVwcyIsIk1vZGFsVGFic0ZhY3RvcnkiLCJGaWxlVXBsb2FkRmFjdG9yeSIsIkxvYWRTdG9yYWdlTWFwRmFjdG9yeSIsIk1vZGFsVGFicyIsIkZpbGVVcGxvYWQiLCJMb2FkU3RvcmFnZU1hcCIsIkxvYWREYXRhTW9kYWwiLCJmaWxlTG9hZGluZyIsImxvYWRpbmdNZXRob2RzIiwiaXNDbG91ZE1hcExvYWRpbmciLCJjdXJyZW50TWV0aG9kIiwidG9nZ2xlTWV0aG9kIiwiaWQiLCJwcm9wVHlwZXMiLCJvbkZpbGVVcGxvYWQiLCJQcm9wVHlwZXMiLCJmdW5jIiwiaXNSZXF1aXJlZCIsIm9uTG9hZENsb3VkTWFwIiwiYm9vbCIsImFycmF5T2YiLCJzaGFwZSIsInN0cmluZyIsImxhYmVsIiwiZWxlbWVudFR5cGUiLCJ0YWJFbGVtZW50VHlwZSIsImRlZmF1bHRQcm9wcyIsIkxPQURJTkdfTUVUSE9EUyIsInVwbG9hZCIsInN0b3JhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxtQkFBbUIsR0FBR0MsNkJBQU9DLEdBQVAsQ0FBV0MsS0FBWCxDQUFpQjtBQUMzQ0MsRUFBQUEsU0FBUyxFQUFFO0FBRGdDLENBQWpCLENBQUgsb0JBR1osVUFBQUMsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixD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Ly8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBnZXQgZnJvbSAnbG9kYXNoLmdldCc7XHJcblxyXG5pbXBvcnQgRmlsZVVwbG9hZEZhY3RvcnkgZnJvbSAnY29tcG9uZW50cy9jb21tb24vZmlsZS11cGxvYWRlci9maWxlLXVwbG9hZCc7XHJcbmltcG9ydCBMb2FkU3RvcmFnZU1hcEZhY3RvcnkgZnJvbSAnLi9sb2FkLXN0b3JhZ2UtbWFwJztcclxuaW1wb3J0IE1vZGFsVGFic0ZhY3RvcnkgZnJvbSAnLi9tb2RhbC10YWJzJztcclxuXHJcbmltcG9ydCBMb2FkaW5nRGlhbG9nIGZyb20gJy4vbG9hZGluZy1kaWFsb2cnO1xyXG5pbXBvcnQge0xPQURJTkdfTUVUSE9EU30gZnJvbSAnY29uc3RhbnRzL2RlZmF1bHQtc2V0dGluZ3MnO1xyXG5cclxuY29uc3QgU3R5bGVkTG9hZERhdGFNb2RhbCA9IHN0eWxlZC5kaXYuYXR0cnMoe1xyXG4gIGNsYXNzTmFtZTogJ2xvYWQtZGF0YS1tb2RhbCdcclxufSlgXHJcbiAgcGFkZGluZzogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5tb2RhbFBhZGRpbmd9O1xyXG4gIG1pbi1oZWlnaHQ6IDQ0MHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuYDtcclxuXHJcbmNvbnN0IG5vb3AgPSAoKSA9PiB7fTtcclxuY29uc3QgZ2V0RGVmYXVsdE1ldGhvZCA9IG1ldGhvZHMgPT4gKEFycmF5LmlzQXJyYXkobWV0aG9kcykgPyBnZXQobWV0aG9kcywgWzBdKSA6IG51bGwpO1xyXG5cclxuTG9hZERhdGFNb2RhbEZhY3RvcnkuZGVwcyA9IFtNb2RhbFRhYnNGYWN0b3J5LCBGaWxlVXBsb2FkRmFjdG9yeSwgTG9hZFN0b3JhZ2VNYXBGYWN0b3J5XTtcclxuXHJcbmZ1bmN0aW9uIExvYWREYXRhTW9kYWxGYWN0b3J5KE1vZGFsVGFicywgRmlsZVVwbG9hZCwgTG9hZFN0b3JhZ2VNYXApIHtcclxuICBjb25zdCBMb2FkRGF0YU1vZGFsID0gcHJvcHMgPT4ge1xyXG4gICAgY29uc3Qge2ZpbGVMb2FkaW5nLCBsb2FkaW5nTWV0aG9kcywgaXNDbG91ZE1hcExvYWRpbmd9ID0gcHJvcHM7XHJcbiAgICBjb25zdCBbY3VycmVudE1ldGhvZCwgdG9nZ2xlTWV0aG9kXSA9IHVzZVN0YXRlKGdldERlZmF1bHRNZXRob2QobG9hZGluZ01ldGhvZHMpKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8U3R5bGVkTG9hZERhdGFNb2RhbD5cclxuICAgICAgICA8TW9kYWxUYWJzXHJcbiAgICAgICAgICBjdXJyZW50TWV0aG9kPXtjdXJyZW50TWV0aG9kLmlkfVxyXG4gICAgICAgICAgbG9hZGluZ01ldGhvZHM9e2xvYWRpbmdNZXRob2RzfVxyXG4gICAgICAgICAgdG9nZ2xlTWV0aG9kPXt0b2dnbGVNZXRob2R9XHJcbiAgICAgICAgLz5cclxuICAgICAgICB7ZmlsZUxvYWRpbmcgfHwgaXNDbG91ZE1hcExvYWRpbmcgPyAoXHJcbiAgICAgICAgICA8TG9hZGluZ0RpYWxvZyBzaXplPXs2NH0gLz5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgY3VycmVudE1ldGhvZCAmJiA8Y3VycmVudE1ldGhvZC5lbGVtZW50VHlwZSBrZXk9e2N1cnJlbnRNZXRob2QuaWR9IHsuLi5wcm9wc30gLz5cclxuICAgICAgICApfVxyXG4gICAgICA8L1N0eWxlZExvYWREYXRhTW9kYWw+XHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIExvYWREYXRhTW9kYWwucHJvcFR5cGVzID0ge1xyXG4gICAgLy8gY2FsbCBiYWNrc1xyXG4gICAgb25GaWxlVXBsb2FkOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gICAgb25Mb2FkQ2xvdWRNYXA6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgICBmaWxlTG9hZGluZzogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICBsb2FkaW5nTWV0aG9kczogUHJvcFR5cGVzLmFycmF5T2YoXHJcbiAgICAgIFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICAgICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgICAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgICAgZWxlbWVudFR5cGU6IFByb3BUeXBlcy5lbGVtZW50VHlwZSxcclxuICAgICAgICB0YWJFbGVtZW50VHlwZTogUHJvcFR5cGVzLmVsZW1lbnRUeXBlXHJcbiAgICAgIH0pXHJcbiAgICApXHJcbiAgfTtcclxuXHJcbiAgTG9hZERhdGFNb2RhbC5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgICBvbkZpbGVVcGxvYWQ6IG5vb3AsXHJcbiAgICBmaWxlTG9hZGluZzogZmFsc2UsXHJcbiAgICBsb2FkaW5nTWV0aG9kczogW1xyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IExPQURJTkdfTUVUSE9EUy51cGxvYWQsXHJcbiAgICAgICAgbGFiZWw6ICdtb2RhbC5sb2FkRGF0YS51cGxvYWQnLFxyXG4gICAgICAgIGVsZW1lbnRUeXBlOiBGaWxlVXBsb2FkXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogTE9BRElOR19NRVRIT0RTLnN0b3JhZ2UsXHJcbiAgICAgICAgbGFiZWw6ICdtb2RhbC5sb2FkRGF0YS5zdG9yYWdlJyxcclxuICAgICAgICBlbGVtZW50VHlwZTogTG9hZFN0b3JhZ2VNYXBcclxuICAgICAgfVxyXG4gICAgXVxyXG4gIH07XHJcbiAgcmV0dXJuIExvYWREYXRhTW9kYWw7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvYWREYXRhTW9kYWxGYWN0b3J5O1xyXG4iXX0=