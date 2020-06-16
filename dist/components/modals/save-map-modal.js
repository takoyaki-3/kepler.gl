"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.MapInfoPanel = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _cloudTile = _interopRequireDefault(require("./cloud-tile"));

var _imageModalContainer = _interopRequireDefault(require("./image-modal-container"));

var _providerModalContainer = _interopRequireDefault(require("./provider-modal-container"));

var _statusPanel = _interopRequireWildcard(require("./status-panel"));

var _defaultSettings = require("../../constants/default-settings");

var _styledComponents2 = require("../common/styled-components");

var _imagePreview = _interopRequireDefault(require("../common/image-preview"));

var _reactIntl = require("react-intl");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  .save-map-modal-content {\n    min-height: 400px;\n    flex-direction: column;\n  }\n\n  .description {\n    width: 300px;\n  }\n\n  .image-preview-panel {\n    width: 300px;\n\n    .image-preview {\n      padding: 0;\n    }\n  }\n\n  .map-info-panel {\n    flex-direction: column;\n  }\n\n  .save-map-modal-description {\n    .modal-section-subtitle {\n      margin-left: 6px;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var StyledSaveMapModal = _styledComponents["default"].div.attrs({
  className: 'save-map-modal'
})(_templateObject());

var nop = function nop() {};

var MapInfoPanel = function MapInfoPanel(_ref) {
  var _ref$mapInfo = _ref.mapInfo,
      mapInfo = _ref$mapInfo === void 0 ? {
    description: '',
    title: ''
  } : _ref$mapInfo,
      characterLimits = _ref.characterLimits,
      onChangeInput = _ref.onChangeInput;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "selection map-info-panel"
  }, /*#__PURE__*/_react["default"].createElement(_styledComponents2.StyledModalSection, {
    className: "save-map-modal-name"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "modal-section-title"
  }, "Name*"), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_styledComponents2.InputLight, {
    id: "map-title",
    type: "text",
    value: mapInfo.title,
    onChange: function onChange(e) {
      return onChangeInput('title', e);
    },
    placeholder: "Type map title"
  }))), /*#__PURE__*/_react["default"].createElement(_styledComponents2.StyledModalSection, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "save-map-modal-description",
    style: {
      display: 'flex'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "modal-section-title"
  }, "Description"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "modal-section-subtitle"
  }, "(optional)")), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_styledComponents2.TextAreaLight, {
    rows: "3",
    id: "map-description",
    style: {
      resize: 'none'
    },
    value: mapInfo.description,
    onChange: function onChange(e) {
      return onChangeInput('description', e);
    },
    placeholder: "Type map description"
  })), /*#__PURE__*/_react["default"].createElement(_styledComponents2.StyledModalInputFootnote, {
    className: "save-map-modal-description__footnote",
    error: characterLimits.description && mapInfo.description.length > characterLimits.description
  }, mapInfo.description.length, "/", characterLimits.description || _defaultSettings.MAP_INFO_CHARACTER.description, ' ', "characters")));
};

exports.MapInfoPanel = MapInfoPanel;

function SaveMapModalFactory() {
  var SaveMapModal = /*#__PURE__*/function (_Component) {
    (0, _inherits2["default"])(SaveMapModal, _Component);

    var _super = _createSuper(SaveMapModal);

    function SaveMapModal() {
      var _this;

      (0, _classCallCheck2["default"])(this, SaveMapModal);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onChangeInput", function (key, e) {
        var value = e.target.value;

        _this.props.onSetMapInfo((0, _defineProperty2["default"])({}, key, value));
      });
      return _this;
    }

    (0, _createClass2["default"])(SaveMapModal, [{
      key: "render",
      value: function render() {
        var _this$props = this.props,
            mapInfo = _this$props.mapInfo,
            exportImage = _this$props.exportImage,
            _this$props$character = _this$props.characterLimits,
            characterLimits = _this$props$character === void 0 ? {} : _this$props$character,
            cloudProviders = _this$props.cloudProviders,
            isProviderLoading = _this$props.isProviderLoading,
            currentProvider = _this$props.currentProvider,
            providerError = _this$props.providerError,
            onSetCloudProvider = _this$props.onSetCloudProvider,
            onUpdateImageSetting = _this$props.onUpdateImageSetting;
        var provider = currentProvider ? cloudProviders.find(function (p) {
          return p.name === currentProvider;
        }) : null;
        return /*#__PURE__*/_react["default"].createElement(_providerModalContainer["default"], {
          onSetCloudProvider: onSetCloudProvider,
          cloudProviders: cloudProviders,
          currentProvider: currentProvider
        }, /*#__PURE__*/_react["default"].createElement(_imageModalContainer["default"], {
          currentProvider: currentProvider,
          cloudProviders: cloudProviders,
          onUpdateImageSetting: onUpdateImageSetting
        }, /*#__PURE__*/_react["default"].createElement(StyledSaveMapModal, null, /*#__PURE__*/_react["default"].createElement(_styledComponents2.StyledModalContent, {
          className: "save-map-modal-content"
        }, /*#__PURE__*/_react["default"].createElement(_styledComponents2.StyledExportSection, {
          disabled: isProviderLoading
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: "description"
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: "title"
        }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
          id: 'modal.saveMap.title'
        })), /*#__PURE__*/_react["default"].createElement("div", {
          className: "subtitle"
        }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
          id: 'modal.saveMap.subtitle'
        }))), /*#__PURE__*/_react["default"].createElement("div", {
          className: "selection"
        }, cloudProviders.map(function (cloudProvider) {
          return /*#__PURE__*/_react["default"].createElement(_cloudTile["default"], {
            key: cloudProvider.name,
            onSelect: function onSelect() {
              return onSetCloudProvider(cloudProvider.name);
            },
            onSetCloudProvider: onSetCloudProvider,
            cloudProvider: cloudProvider,
            isSelected: cloudProvider.name === currentProvider,
            isConnected: Boolean(cloudProvider.getAccessToken && cloudProvider.getAccessToken())
          });
        }))), provider && provider.getManagementUrl && /*#__PURE__*/_react["default"].createElement(_styledComponents2.StyledExportSection, {
          style: {
            margin: '2px 0'
          }
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: "description"
        }), /*#__PURE__*/_react["default"].createElement("div", {
          className: "selection"
        }, /*#__PURE__*/_react["default"].createElement("a", {
          key: 1,
          href: provider.getManagementUrl(),
          target: "_blank",
          rel: "noopener noreferrer",
          style: {
            textDecoration: 'underline'
          }
        }, "Go to your Kepler.gl ", provider.displayName, " page"))), /*#__PURE__*/_react["default"].createElement(_styledComponents2.StyledExportSection, null, /*#__PURE__*/_react["default"].createElement("div", {
          className: "description image-preview-panel"
        }, /*#__PURE__*/_react["default"].createElement(_imagePreview["default"], {
          exportImage: exportImage,
          width: _defaultSettings.MAP_THUMBNAIL_DIMENSION.width,
          showDimension: false
        })), isProviderLoading ? /*#__PURE__*/_react["default"].createElement("div", {
          className: "selection map-saving-animation"
        }, /*#__PURE__*/_react["default"].createElement(_statusPanel.UploadAnimation, {
          icon: provider && provider.icon
        })) : /*#__PURE__*/_react["default"].createElement(MapInfoPanel, {
          mapInfo: mapInfo,
          characterLimits: characterLimits,
          onChangeInput: this._onChangeInput
        })), providerError ? /*#__PURE__*/_react["default"].createElement(_statusPanel["default"], {
          isLoading: false,
          error: providerError,
          providerIcon: provider && provider.icon
        }) : null))));
      }
    }]);
    return SaveMapModal;
  }(_react.Component);

  (0, _defineProperty2["default"])(SaveMapModal, "propTypes", {
    exportImage: _propTypes["default"].object.isRequired,
    mapInfo: _propTypes["default"].object.isRequired,
    isProviderLoading: _propTypes["default"].bool.isRequired,
    thumbWidth: _propTypes["default"].number,
    thumbHeight: _propTypes["default"].number,
    characterLimits: _propTypes["default"].object,
    cloudProviders: _propTypes["default"].arrayOf(_propTypes["default"].object),
    currentProvider: _propTypes["default"].string,
    onSetMapInfo: _propTypes["default"].func.isRequired,
    onSetCloudProvider: _propTypes["default"].func.isRequired,
    onUpdateImageSetting: _propTypes["default"].func.isRequired
  });
  (0, _defineProperty2["default"])(SaveMapModal, "defaultProps", {
    characterLimits: _defaultSettings.MAP_INFO_CHARACTER,
    cloudProviders: [],
    currentProvider: null,
    providerError: null,
    isProviderLoading: false,
    onSetCloudProvider: nop,
    onUpdateImageSetting: nop
  });
  return SaveMapModal;
}

var _default = SaveMapModalFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL21vZGFscy9zYXZlLW1hcC1tb2RhbC5qcyJdLCJuYW1lcyI6WyJTdHlsZWRTYXZlTWFwTW9kYWwiLCJzdHlsZWQiLCJkaXYiLCJhdHRycyIsImNsYXNzTmFtZSIsIm5vcCIsIk1hcEluZm9QYW5lbCIsIm1hcEluZm8iLCJkZXNjcmlwdGlvbiIsInRpdGxlIiwiY2hhcmFjdGVyTGltaXRzIiwib25DaGFuZ2VJbnB1dCIsImUiLCJkaXNwbGF5IiwicmVzaXplIiwibGVuZ3RoIiwiTUFQX0lORk9fQ0hBUkFDVEVSIiwiU2F2ZU1hcE1vZGFsRmFjdG9yeSIsIlNhdmVNYXBNb2RhbCIsImtleSIsInZhbHVlIiwidGFyZ2V0IiwicHJvcHMiLCJvblNldE1hcEluZm8iLCJleHBvcnRJbWFnZSIsImNsb3VkUHJvdmlkZXJzIiwiaXNQcm92aWRlckxvYWRpbmciLCJjdXJyZW50UHJvdmlkZXIiLCJwcm92aWRlckVycm9yIiwib25TZXRDbG91ZFByb3ZpZGVyIiwib25VcGRhdGVJbWFnZVNldHRpbmciLCJwcm92aWRlciIsImZpbmQiLCJwIiwibmFtZSIsIm1hcCIsImNsb3VkUHJvdmlkZXIiLCJCb29sZWFuIiwiZ2V0QWNjZXNzVG9rZW4iLCJnZXRNYW5hZ2VtZW50VXJsIiwibWFyZ2luIiwidGV4dERlY29yYXRpb24iLCJkaXNwbGF5TmFtZSIsIk1BUF9USFVNQk5BSUxfRElNRU5TSU9OIiwid2lkdGgiLCJpY29uIiwiX29uQ2hhbmdlSW5wdXQiLCJDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwiYm9vbCIsInRodW1iV2lkdGgiLCJudW1iZXIiLCJ0aHVtYkhlaWdodCIsImFycmF5T2YiLCJzdHJpbmciLCJmdW5jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FB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RXFCLHNCQUFVUSxNQVJWO0FBU2pCakMsSUFBQUEsWUFBWSxFQUFFeUIsc0JBQVVTLElBQVYsQ0FBZVAsVUFUWjtBQVVqQnJCLElBQUFBLGtCQUFrQixFQUFFbUIsc0JBQVVTLElBQVYsQ0FBZVAsVUFWbEI7QUFXakJwQixJQUFBQSxvQkFBb0IsRUFBRWtCLHNCQUFVUyxJQUFWLENBQWVQO0FBWHBCLEdBRlE7QUFBQSxtQ0FDdkJoQyxZQUR1QixrQkFnQkw7QUFDcEJSLElBQUFBLGVBQWUsRUFBRU0sbUNBREc7QUFFcEJTLElBQUFBLGNBQWMsRUFBRSxFQUZJO0FBR3BCRSxJQUFBQSxlQUFlLEVBQUUsSUFIRztBQUlwQkMsSUFBQUEsYUFBYSxFQUFFLElBSks7QUFLcEJGLElBQUFBLGlCQUFpQixFQUFFLEtBTEM7QUFNcEJHLElBQUFBLGtCQUFrQixFQUFFeEIsR0FOQTtBQU9wQnlCLElBQUFBLG9CQUFvQixFQUFFekI7QUFQRixHQWhCSztBQXdJN0IsU0FBT2EsWUFBUDtBQUNEOztlQUVjRCxtQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMCBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IENsb3VkVGlsZSBmcm9tICcuL2Nsb3VkLXRpbGUnO1xyXG5pbXBvcnQgSW1hZ2VNb2RhbENvbnRhaW5lciBmcm9tICcuL2ltYWdlLW1vZGFsLWNvbnRhaW5lcic7XHJcbmltcG9ydCBQcm92aWRlck1vZGFsQ29udGFpbmVyIGZyb20gJy4vcHJvdmlkZXItbW9kYWwtY29udGFpbmVyJztcclxuXHJcbmltcG9ydCBTdGF0dXNQYW5lbCwge1VwbG9hZEFuaW1hdGlvbn0gZnJvbSAnLi9zdGF0dXMtcGFuZWwnO1xyXG5cclxuaW1wb3J0IHtNQVBfVEhVTUJOQUlMX0RJTUVOU0lPTiwgTUFQX0lORk9fQ0hBUkFDVEVSfSBmcm9tICdjb25zdGFudHMvZGVmYXVsdC1zZXR0aW5ncyc7XHJcblxyXG5pbXBvcnQge1xyXG4gIFN0eWxlZE1vZGFsQ29udGVudCxcclxuICBJbnB1dExpZ2h0LFxyXG4gIFRleHRBcmVhTGlnaHQsXHJcbiAgU3R5bGVkRXhwb3J0U2VjdGlvbixcclxuICBTdHlsZWRNb2RhbFNlY3Rpb24sXHJcbiAgU3R5bGVkTW9kYWxJbnB1dEZvb3Rub3RlXHJcbn0gZnJvbSAnY29tcG9uZW50cy9jb21tb24vc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgSW1hZ2VQcmV2aWV3IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL2ltYWdlLXByZXZpZXcnO1xyXG5pbXBvcnQge0Zvcm1hdHRlZE1lc3NhZ2V9IGZyb20gJ3JlYWN0LWludGwnO1xyXG5cclxuY29uc3QgU3R5bGVkU2F2ZU1hcE1vZGFsID0gc3R5bGVkLmRpdi5hdHRycyh7XHJcbiAgY2xhc3NOYW1lOiAnc2F2ZS1tYXAtbW9kYWwnXHJcbn0pYFxyXG4gIC5zYXZlLW1hcC1tb2RhbC1jb250ZW50IHtcclxuICAgIG1pbi1oZWlnaHQ6IDQwMHB4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcblxyXG4gIC5kZXNjcmlwdGlvbiB7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgfVxyXG5cclxuICAuaW1hZ2UtcHJldmlldy1wYW5lbCB7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcblxyXG4gICAgLmltYWdlLXByZXZpZXcge1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLm1hcC1pbmZvLXBhbmVsIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgfVxyXG5cclxuICAuc2F2ZS1tYXAtbW9kYWwtZGVzY3JpcHRpb24ge1xyXG4gICAgLm1vZGFsLXNlY3Rpb24tc3VidGl0bGUge1xyXG4gICAgICBtYXJnaW4tbGVmdDogNnB4O1xyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IG5vcCA9ICgpID0+IHt9O1xyXG5cclxuZXhwb3J0IGNvbnN0IE1hcEluZm9QYW5lbCA9ICh7XHJcbiAgbWFwSW5mbyA9IHtkZXNjcmlwdGlvbjogJycsIHRpdGxlOiAnJ30sXHJcbiAgY2hhcmFjdGVyTGltaXRzLFxyXG4gIG9uQ2hhbmdlSW5wdXRcclxufSkgPT4gKFxyXG4gIDxkaXYgY2xhc3NOYW1lPVwic2VsZWN0aW9uIG1hcC1pbmZvLXBhbmVsXCI+XHJcbiAgICA8U3R5bGVkTW9kYWxTZWN0aW9uIGNsYXNzTmFtZT1cInNhdmUtbWFwLW1vZGFsLW5hbWVcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1zZWN0aW9uLXRpdGxlXCI+TmFtZSo8L2Rpdj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8SW5wdXRMaWdodFxyXG4gICAgICAgICAgaWQ9XCJtYXAtdGl0bGVcIlxyXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgdmFsdWU9e21hcEluZm8udGl0bGV9XHJcbiAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBvbkNoYW5nZUlucHV0KCd0aXRsZScsIGUpfVxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJUeXBlIG1hcCB0aXRsZVwiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L1N0eWxlZE1vZGFsU2VjdGlvbj5cclxuICAgIDxTdHlsZWRNb2RhbFNlY3Rpb24+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2F2ZS1tYXAtbW9kYWwtZGVzY3JpcHRpb25cIiBzdHlsZT17e2Rpc3BsYXk6ICdmbGV4J319PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtc2VjdGlvbi10aXRsZVwiPkRlc2NyaXB0aW9uPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1zZWN0aW9uLXN1YnRpdGxlXCI+KG9wdGlvbmFsKTwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8VGV4dEFyZWFMaWdodFxyXG4gICAgICAgICAgcm93cz1cIjNcIlxyXG4gICAgICAgICAgaWQ9XCJtYXAtZGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgc3R5bGU9e3tyZXNpemU6ICdub25lJ319XHJcbiAgICAgICAgICB2YWx1ZT17bWFwSW5mby5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IG9uQ2hhbmdlSW5wdXQoJ2Rlc2NyaXB0aW9uJywgZSl9XHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlR5cGUgbWFwIGRlc2NyaXB0aW9uXCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPFN0eWxlZE1vZGFsSW5wdXRGb290bm90ZVxyXG4gICAgICAgIGNsYXNzTmFtZT1cInNhdmUtbWFwLW1vZGFsLWRlc2NyaXB0aW9uX19mb290bm90ZVwiXHJcbiAgICAgICAgZXJyb3I9e1xyXG4gICAgICAgICAgY2hhcmFjdGVyTGltaXRzLmRlc2NyaXB0aW9uICYmIG1hcEluZm8uZGVzY3JpcHRpb24ubGVuZ3RoID4gY2hhcmFjdGVyTGltaXRzLmRlc2NyaXB0aW9uXHJcbiAgICAgICAgfVxyXG4gICAgICA+XHJcbiAgICAgICAge21hcEluZm8uZGVzY3JpcHRpb24ubGVuZ3RofS97Y2hhcmFjdGVyTGltaXRzLmRlc2NyaXB0aW9uIHx8IE1BUF9JTkZPX0NIQVJBQ1RFUi5kZXNjcmlwdGlvbn17JyAnfVxyXG4gICAgICAgIGNoYXJhY3RlcnNcclxuICAgICAgPC9TdHlsZWRNb2RhbElucHV0Rm9vdG5vdGU+XHJcbiAgICA8L1N0eWxlZE1vZGFsU2VjdGlvbj5cclxuICA8L2Rpdj5cclxuKTtcclxuXHJcbmZ1bmN0aW9uIFNhdmVNYXBNb2RhbEZhY3RvcnkoKSB7XHJcbiAgY2xhc3MgU2F2ZU1hcE1vZGFsIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XHJcbiAgICAgIGV4cG9ydEltYWdlOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXHJcbiAgICAgIG1hcEluZm86IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcclxuICAgICAgaXNQcm92aWRlckxvYWRpbmc6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXHJcbiAgICAgIHRodW1iV2lkdGg6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICAgIHRodW1iSGVpZ2h0OiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgICBjaGFyYWN0ZXJMaW1pdHM6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgICAgIGNsb3VkUHJvdmlkZXJzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KSxcclxuICAgICAgY3VycmVudFByb3ZpZGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICBvblNldE1hcEluZm86IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgICAgIG9uU2V0Q2xvdWRQcm92aWRlcjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICAgICAgb25VcGRhdGVJbWFnZVNldHRpbmc6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcclxuICAgIH07XHJcblxyXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcclxuICAgICAgY2hhcmFjdGVyTGltaXRzOiBNQVBfSU5GT19DSEFSQUNURVIsXHJcbiAgICAgIGNsb3VkUHJvdmlkZXJzOiBbXSxcclxuICAgICAgY3VycmVudFByb3ZpZGVyOiBudWxsLFxyXG4gICAgICBwcm92aWRlckVycm9yOiBudWxsLFxyXG4gICAgICBpc1Byb3ZpZGVyTG9hZGluZzogZmFsc2UsXHJcbiAgICAgIG9uU2V0Q2xvdWRQcm92aWRlcjogbm9wLFxyXG4gICAgICBvblVwZGF0ZUltYWdlU2V0dGluZzogbm9wXHJcbiAgICB9O1xyXG5cclxuICAgIF9vbkNoYW5nZUlucHV0ID0gKGtleSwgZSkgPT4ge1xyXG4gICAgICBjb25zdCB7XHJcbiAgICAgICAgdGFyZ2V0OiB7dmFsdWV9XHJcbiAgICAgIH0gPSBlO1xyXG4gICAgICB0aGlzLnByb3BzLm9uU2V0TWFwSW5mbyh7W2tleV06IHZhbHVlfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgY29uc3Qge1xyXG4gICAgICAgIG1hcEluZm8sXHJcbiAgICAgICAgZXhwb3J0SW1hZ2UsXHJcbiAgICAgICAgY2hhcmFjdGVyTGltaXRzID0ge30sXHJcbiAgICAgICAgY2xvdWRQcm92aWRlcnMsXHJcbiAgICAgICAgaXNQcm92aWRlckxvYWRpbmcsXHJcbiAgICAgICAgY3VycmVudFByb3ZpZGVyLFxyXG4gICAgICAgIHByb3ZpZGVyRXJyb3IsXHJcbiAgICAgICAgb25TZXRDbG91ZFByb3ZpZGVyLFxyXG4gICAgICAgIG9uVXBkYXRlSW1hZ2VTZXR0aW5nXHJcbiAgICAgIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICBjb25zdCBwcm92aWRlciA9IGN1cnJlbnRQcm92aWRlclxyXG4gICAgICAgID8gY2xvdWRQcm92aWRlcnMuZmluZChwID0+IHAubmFtZSA9PT0gY3VycmVudFByb3ZpZGVyKVxyXG4gICAgICAgIDogbnVsbDtcclxuXHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPFByb3ZpZGVyTW9kYWxDb250YWluZXJcclxuICAgICAgICAgIG9uU2V0Q2xvdWRQcm92aWRlcj17b25TZXRDbG91ZFByb3ZpZGVyfVxyXG4gICAgICAgICAgY2xvdWRQcm92aWRlcnM9e2Nsb3VkUHJvdmlkZXJzfVxyXG4gICAgICAgICAgY3VycmVudFByb3ZpZGVyPXtjdXJyZW50UHJvdmlkZXJ9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPEltYWdlTW9kYWxDb250YWluZXJcclxuICAgICAgICAgICAgY3VycmVudFByb3ZpZGVyPXtjdXJyZW50UHJvdmlkZXJ9XHJcbiAgICAgICAgICAgIGNsb3VkUHJvdmlkZXJzPXtjbG91ZFByb3ZpZGVyc31cclxuICAgICAgICAgICAgb25VcGRhdGVJbWFnZVNldHRpbmc9e29uVXBkYXRlSW1hZ2VTZXR0aW5nfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8U3R5bGVkU2F2ZU1hcE1vZGFsPlxyXG4gICAgICAgICAgICAgIDxTdHlsZWRNb2RhbENvbnRlbnQgY2xhc3NOYW1lPVwic2F2ZS1tYXAtbW9kYWwtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgPFN0eWxlZEV4cG9ydFNlY3Rpb24gZGlzYWJsZWQ9e2lzUHJvdmlkZXJMb2FkaW5nfT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlIGlkPXsnbW9kYWwuc2F2ZU1hcC50aXRsZSd9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWJ0aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2UgaWQ9eydtb2RhbC5zYXZlTWFwLnN1YnRpdGxlJ30gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VsZWN0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2Nsb3VkUHJvdmlkZXJzLm1hcChjbG91ZFByb3ZpZGVyID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxDbG91ZFRpbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtjbG91ZFByb3ZpZGVyLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uU2VsZWN0PXsoKSA9PiBvblNldENsb3VkUHJvdmlkZXIoY2xvdWRQcm92aWRlci5uYW1lKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25TZXRDbG91ZFByb3ZpZGVyPXtvblNldENsb3VkUHJvdmlkZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsb3VkUHJvdmlkZXI9e2Nsb3VkUHJvdmlkZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzU2VsZWN0ZWQ9e2Nsb3VkUHJvdmlkZXIubmFtZSA9PT0gY3VycmVudFByb3ZpZGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0Nvbm5lY3RlZD17Qm9vbGVhbihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbG91ZFByb3ZpZGVyLmdldEFjY2Vzc1Rva2VuICYmIGNsb3VkUHJvdmlkZXIuZ2V0QWNjZXNzVG9rZW4oKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L1N0eWxlZEV4cG9ydFNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICB7cHJvdmlkZXIgJiYgcHJvdmlkZXIuZ2V0TWFuYWdlbWVudFVybCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgIDxTdHlsZWRFeHBvcnRTZWN0aW9uIHN0eWxlPXt7bWFyZ2luOiAnMnB4IDAnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWxlY3Rpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17MX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17cHJvdmlkZXIuZ2V0TWFuYWdlbWVudFVybCgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t0ZXh0RGVjb3JhdGlvbjogJ3VuZGVybGluZSd9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBHbyB0byB5b3VyIEtlcGxlci5nbCB7cHJvdmlkZXIuZGlzcGxheU5hbWV9IHBhZ2VcclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9TdHlsZWRFeHBvcnRTZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDxTdHlsZWRFeHBvcnRTZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uIGltYWdlLXByZXZpZXctcGFuZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2VQcmV2aWV3XHJcbiAgICAgICAgICAgICAgICAgICAgICBleHBvcnRJbWFnZT17ZXhwb3J0SW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17TUFQX1RIVU1CTkFJTF9ESU1FTlNJT04ud2lkdGh9XHJcbiAgICAgICAgICAgICAgICAgICAgICBzaG93RGltZW5zaW9uPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAge2lzUHJvdmlkZXJMb2FkaW5nID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VsZWN0aW9uIG1hcC1zYXZpbmctYW5pbWF0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8VXBsb2FkQW5pbWF0aW9uIGljb249e3Byb3ZpZGVyICYmIHByb3ZpZGVyLmljb259IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPE1hcEluZm9QYW5lbFxyXG4gICAgICAgICAgICAgICAgICAgICAgbWFwSW5mbz17bWFwSW5mb31cclxuICAgICAgICAgICAgICAgICAgICAgIGNoYXJhY3RlckxpbWl0cz17Y2hhcmFjdGVyTGltaXRzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2VJbnB1dD17dGhpcy5fb25DaGFuZ2VJbnB1dH1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9TdHlsZWRFeHBvcnRTZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAge3Byb3ZpZGVyRXJyb3IgPyAoXHJcbiAgICAgICAgICAgICAgICAgIDxTdGF0dXNQYW5lbFxyXG4gICAgICAgICAgICAgICAgICAgIGlzTG9hZGluZz17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I9e3Byb3ZpZGVyRXJyb3J9XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvdmlkZXJJY29uPXtwcm92aWRlciAmJiBwcm92aWRlci5pY29ufVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgPC9TdHlsZWRNb2RhbENvbnRlbnQ+XHJcbiAgICAgICAgICAgIDwvU3R5bGVkU2F2ZU1hcE1vZGFsPlxyXG4gICAgICAgICAgPC9JbWFnZU1vZGFsQ29udGFpbmVyPlxyXG4gICAgICAgIDwvUHJvdmlkZXJNb2RhbENvbnRhaW5lcj5cclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIFNhdmVNYXBNb2RhbDtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2F2ZU1hcE1vZGFsRmFjdG9yeTtcclxuIl19