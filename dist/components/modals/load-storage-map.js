"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ProviderSelect = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _moment = _interopRequireDefault(require("moment"));

var _loadingDialog = _interopRequireDefault(require("./loading-dialog"));

var _styledComponents2 = require("../common/styled-components");

var _cloudTile = _interopRequireDefault(require("./cloud-tile"));

var _icons = require("../common/icons");

var _providerModalContainer = _interopRequireDefault(require("./provider-modal-container"));

var _reactIntl = require("react-intl");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _templateObject9() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  flex: 0 0 auto;\n  width: 208px;\n  display: flex;\n  flex-direction: column;\n  padding: 16px 8px;\n  color: #3a414c;\n  cursor: pointer;\n  font-size: 12px;\n  line-height: 18px;\n\n  &:hover {\n    .vis_item-icon,\n    .vis_item-thumb,\n    .vis_item-description,\n    .vis_item-modification-date {\n      opacity: 1;\n    }\n  }\n\n  .vis_item-icon,\n  .vis_item-thumb,\n  .vis_item-description,\n  .vis_item-modification-date {\n    opacity: 0.9;\n    transition: opacity 0.4s ease;\n  }\n\n  .vis_item-icon {\n    position: relative;\n    flex: 0 0 108px;\n    background-color: #6a7484;\n    border-radius: 4px;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n  }\n\n  .vis_item-thumb {\n    position: relative;\n    flex: 0 0 108px;\n    background-size: cover;\n    background-position: center;\n    border-radius: 4px;\n  }\n\n  .vis_item-privacy {\n    position: absolute;\n    top: 0;\n    left: 0;\n    padding: 3px 6px;\n    border-radius: 4px 0;\n    background-color: rgba(58, 65, 76, 0.7);\n    color: #fff;\n    font-size: 11px;\n    line-height: 18px;\n  }\n\n  .vis_item-title {\n    margin-top: 16px;\n    font-weight: 500;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n\n  .vis_item-description {\n    flex: 1 1 auto;\n    margin-top: 8px;\n  }\n\n  .vis_item-modification-date {\n    margin-top: 16px;\n    flex: 1 0 auto;\n    color: #6a7484;\n    line-height: 15px;\n  }\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  flex-flow: row wrap;\n  align-items: stretch;\n  justify-content: space-between;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  border: solid #bfbfbf;\n  border-width: 0 0 1px 0;\n  margin-bottom: 16px;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  flex: 1 1 auto;\n  background-color: #f8f8f9;\n  padding: 20px 24px;\n  min-height: 280px;\n\n  .title {\n    font-size: 14px;\n    line-height: 16px;\n    font-weight: 500;\n    margin-bottom: 16px;\n\n    span {\n      text-transform: capitalize;\n    }\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  margin-bottom: 16px;\n  color: #3a414c;\n  cursor: pointer;\n\n  &:hover {\n    font-weight: 500;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 16px;\n  font-size: 12px;\n  line-height: 14px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  text-align: center;\n  span {\n    margin: 0 auto;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var StyledProviderSection = _styledComponents["default"].div.attrs({
  className: 'provider-selection'
})(_templateObject());

var StyledSpinner = _styledComponents["default"].div(_templateObject2());

var StyledVisualizationSection = _styledComponents["default"].div(_templateObject3());

var StyledStorageHeader = _styledComponents["default"].div(_templateObject4());

var StyledBackBtn = _styledComponents["default"].a(_templateObject5());

var StyledProviderVisSection = _styledComponents["default"].div(_templateObject6());

var StyledSeparator = _styledComponents["default"].hr(_templateObject7());

var StyledVisualizationList = _styledComponents["default"].div(_templateObject8());

var StyledVisualizationItem = _styledComponents["default"].div(_templateObject9());

var MapIcon = function MapIcon(props) {
  return /*#__PURE__*/_react["default"].createElement("div", props, props.children, /*#__PURE__*/_react["default"].createElement(_icons.Base, {
    height: "32px",
    viewBox: '0 0 16 16'
  }, /*#__PURE__*/_react["default"].createElement("path", {
    fill: "#d3d8d6",
    d: "m13.6 11.572-3.2 2.1336v-9.2776l3.2-2.1336zm-12-7.144 3.2-2.1336v9.2776l-3.2 2.1336zm13.244 8.2376c0.2224-0.148 0.356-0.3984 0.356-0.6656v-11.2c0-0.2952-0.1624-0.5664-0.4224-0.7048-0.26-0.14-0.576-0.1248-0.8216 0.0392l-4.3128 2.876-3.5432-2.8352c-0.1208-0.0936-0.2952-0.1624-0.472-0.1688-0.1648-0.0064-0.348 0.0464-0.472 0.128l-4.8 3.2c-0.2224 0.1488-0.356 0.3984-0.356 0.6656v11.2c0 0.2952 0.1624 0.5664 0.4224 0.7056 0.1184 0.0632 0.248 0.0944 0.3776 0.0944 0.1552 0 0.3096-0.0448 0.444-0.1344l4.3128-2.876 3.5432 2.8352c0.1448 0.116 0.3216 0.1752 0.5 0.1752 0.1184 0 0.236-0.0248 0.3464-0.0784z"
  })));
};

var PrivacyBadge = function PrivacyBadge(_ref) {
  var privateMap = _ref.privateMap;
  return /*#__PURE__*/_react["default"].createElement("span", {
    className: "vis_item-privacy"
  }, privateMap ? 'Private' : 'Public');
};

var VisualizationItem = function VisualizationItem(_ref2) {
  var vis = _ref2.vis,
      onClick = _ref2.onClick;
  return /*#__PURE__*/_react["default"].createElement(StyledVisualizationItem, {
    onClick: onClick
  }, vis.thumbnail ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "vis_item-thumb",
    style: {
      backgroundImage: "url(".concat(vis.thumbnail, ")")
    }
  }, vis.hasOwnProperty('privateMap') ? /*#__PURE__*/_react["default"].createElement(PrivacyBadge, {
    privateMap: vis.privateMap
  }) : null) : /*#__PURE__*/_react["default"].createElement(MapIcon, {
    className: "vis_item-icon"
  }, vis.hasOwnProperty('privateMap') ? /*#__PURE__*/_react["default"].createElement(PrivacyBadge, {
    privateMap: vis.privateMap
  }) : null), /*#__PURE__*/_react["default"].createElement("span", {
    className: "vis_item-title"
  }, vis.title), vis.description && vis.description.length && /*#__PURE__*/_react["default"].createElement("span", {
    className: "vis_item-description"
  }, vis.description), /*#__PURE__*/_react["default"].createElement("span", {
    className: "vis_item-modification-date"
  }, "Last modified ", _moment["default"].utc(vis.lastModification).fromNow()));
};

var ProviderSelect = function ProviderSelect(_ref3) {
  var _ref3$cloudProviders = _ref3.cloudProviders,
      cloudProviders = _ref3$cloudProviders === void 0 ? [] : _ref3$cloudProviders,
      _onSelect = _ref3.onSelect,
      onSetCloudProvider = _ref3.onSetCloudProvider,
      currentProvider = _ref3.currentProvider;
  return cloudProviders.length ? /*#__PURE__*/_react["default"].createElement(StyledProviderSection, null, cloudProviders.map(function (provider) {
    return /*#__PURE__*/_react["default"].createElement(_cloudTile["default"], {
      key: provider.name,
      onSelect: function onSelect() {
        return _onSelect(provider.name);
      },
      onSetCloudProvider: onSetCloudProvider,
      cloudProvider: provider,
      isSelected: provider.name === currentProvider,
      isConnected: Boolean(provider.getAccessToken && provider.getAccessToken())
    });
  })) : /*#__PURE__*/_react["default"].createElement("p", null, "No storage provider available");
};

exports.ProviderSelect = ProviderSelect;

function LoadStorageMapFactory() {
  var LoadStorageMap = /*#__PURE__*/function (_Component) {
    (0, _inherits2["default"])(LoadStorageMap, _Component);

    var _super = _createSuper(LoadStorageMap);

    function LoadStorageMap() {
      var _this;

      (0, _classCallCheck2["default"])(this, LoadStorageMap);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
        showProviderSelect: true
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_getProvider", function () {
        var _this$props = _this.props,
            currentProvider = _this$props.currentProvider,
            cloudProviders = _this$props.cloudProviders;
        return (cloudProviders || []).find(function (p) {
          return p.name === currentProvider;
        });
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_clickBack", function () {
        _this.setState({
          showProviderSelect: true
        });
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_selectProvider", function (providerName) {
        _this.props.onSetCloudProvider(providerName);

        var provider = (_this.props.cloudProviders || []).find(function (p) {
          return p.name === providerName;
        });

        _this.props.getSavedMaps(provider);

        _this.setState({
          showProviderSelect: false
        });
      });
      return _this;
    }

    (0, _createClass2["default"])(LoadStorageMap, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this._getSavedMaps();
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps) {
        if (prevProps.currentProvider !== this.props.currentProvider) {
          this._getSavedMaps();
        }
      }
    }, {
      key: "_getSavedMaps",
      value: function _getSavedMaps() {
        var provider = this._getProvider();

        if (provider) {
          this.props.getSavedMaps(provider);
          this.setState({
            showProviderSelect: false
          });
        }
      }
    }, {
      key: "_onLoadCloudMap",
      value: function _onLoadCloudMap(provider, vis) {
        this.props.onLoadCloudMap({
          loadParams: vis.loadParams,
          provider: provider
        });
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;

        var _this$props2 = this.props,
            visualizations = _this$props2.visualizations,
            cloudProviders = _this$props2.cloudProviders,
            currentProvider = _this$props2.currentProvider,
            isProviderLoading = _this$props2.isProviderLoading,
            onSetCloudProvider = _this$props2.onSetCloudProvider;

        var provider = this._getProvider();

        return /*#__PURE__*/_react["default"].createElement(_providerModalContainer["default"], {
          onSetCloudProvider: onSetCloudProvider,
          cloudProviders: cloudProviders,
          currentProvider: currentProvider
        }, this.state.showProviderSelect ? /*#__PURE__*/_react["default"].createElement(ProviderSelect, {
          onSelect: this._selectProvider,
          cloudProviders: cloudProviders,
          onSetCloudProvider: onSetCloudProvider,
          currentProvider: currentProvider
        }) : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, isProviderLoading && /*#__PURE__*/_react["default"].createElement(StyledSpinner, null, /*#__PURE__*/_react["default"].createElement(_loadingDialog["default"], {
          size: 64
        })), !isProviderLoading && visualizations && /*#__PURE__*/_react["default"].createElement(StyledVisualizationSection, null, /*#__PURE__*/_react["default"].createElement(StyledStorageHeader, null, /*#__PURE__*/_react["default"].createElement(StyledBackBtn, null, /*#__PURE__*/_react["default"].createElement(_styledComponents2.Button, {
          link: true,
          onClick: this._clickBack
        }, /*#__PURE__*/_react["default"].createElement(_icons.ArrowLeft, {
          height: "14px"
        }), /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
          id: 'modal.loadStorageMap.back'
        }))), provider.getManagementUrl && /*#__PURE__*/_react["default"].createElement("a", {
          key: 1,
          href: provider.getManagementUrl(),
          target: "_blank",
          rel: "noopener noreferrer",
          style: {
            textDecoration: 'underline'
          }
        }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
          id: 'modal.loadStorageMap.back',
          values: {
            displayName: provider.displayName
          }
        }))), /*#__PURE__*/_react["default"].createElement(StyledProviderVisSection, null, /*#__PURE__*/_react["default"].createElement("span", {
          className: "title"
        }, /*#__PURE__*/_react["default"].createElement("span", null, currentProvider), /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
          id: 'modal.loadStorageMap.storageMaps'
        })), /*#__PURE__*/_react["default"].createElement(StyledSeparator, null), /*#__PURE__*/_react["default"].createElement(StyledVisualizationList, null, visualizations.length ? visualizations.map(function (vis) {
          return /*#__PURE__*/_react["default"].createElement(VisualizationItem, {
            key: vis.id,
            onClick: function onClick() {
              return _this2._onLoadCloudMap(provider, vis);
            },
            vis: vis
          });
        }) : /*#__PURE__*/_react["default"].createElement("div", {
          className: "visualization-list__message"
        }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
          id: 'modal.loadStorageMap.noSavedMaps'
        })))))));
      }
    }]);
    return LoadStorageMap;
  }(_react.Component);

  return LoadStorageMap;
}

var _default = LoadStorageMapFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL21vZGFscy9sb2FkLXN0b3JhZ2UtbWFwLmpzIl0sIm5hbWVzIjpbIlN0eWxlZFByb3ZpZGVyU2VjdGlvbiIsInN0eWxlZCIsImRpdiIsImF0dHJzIiwiY2xhc3NOYW1lIiwiU3R5bGVkU3Bpbm5lciIsIlN0eWxlZFZpc3VhbGl6YXRpb25TZWN0aW9uIiwiU3R5bGVkU3RvcmFnZUhlYWRlciIsIlN0eWxlZEJhY2tCdG4iLCJhIiwiU3R5bGVkUHJvdmlkZXJWaXNTZWN0aW9uIiwiU3R5bGVkU2VwYXJhdG9yIiwiaHIiLCJTdHlsZWRWaXN1YWxpemF0aW9uTGlzdCIsIlN0eWxlZFZpc3VhbGl6YXRpb25JdGVtIiwiTWFwSWNvbiIsInByb3BzIiwiY2hpbGRyZW4iLCJQcml2YWN5QmFkZ2UiLCJwcml2YXRlTWFwIiwiVmlzdWFsaXphdGlvbkl0ZW0iLCJ2aXMiLCJvbkNsaWNrIiwidGh1bWJuYWlsIiwiYmFja2dyb3VuZEltYWdlIiwiaGFzT3duUHJvcGVydHkiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwibGVuZ3RoIiwibW9tZW50IiwidXRjIiwibGFzdE1vZGlmaWNhdGlvbiIsImZyb21Ob3ciLCJQcm92aWRlclNlbGVjdCIsImNsb3VkUHJvdmlkZXJzIiwib25TZWxlY3QiLCJvblNldENsb3VkUHJvdmlkZXIiLCJjdXJyZW50UHJvdmlkZXIiLCJtYXAiLCJwcm92aWRlciIsIm5hbWUiLCJCb29sZWFuIiwiZ2V0QWNjZXNzVG9rZW4iLCJMb2FkU3RvcmFnZU1hcEZhY3RvcnkiLCJMb2FkU3RvcmFnZU1hcCIsInNob3dQcm92aWRlclNlbGVjdCIsImZpbmQiLCJwIiwic2V0U3RhdGUiLCJwcm92aWRlck5hbWUiLCJnZXRTYXZlZE1hcHMiLCJfZ2V0U2F2ZWRNYXBzIiwicHJldlByb3BzIiwiX2dldFByb3ZpZGVyIiwib25Mb2FkQ2xvdWRNYXAiLCJsb2FkUGFyYW1zIiwidmlzdWFsaXphdGlvbnMiLCJpc1Byb3ZpZGVyTG9hZGluZyIsInN0YXRlIiwiX3NlbGVjdFByb3ZpZGVyIiwiX2NsaWNrQmFjayIsImdldE1hbmFnZW1lbnRVcmwiLCJ0ZXh0RGVjb3JhdGlvbiIsImRpc3BsYXlOYW1lIiwiaWQiLCJfb25Mb2FkQ2xvdWRNYXAiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEscUJBQXFCLEdBQUdDLDZCQUFPQyxHQUFQLENBQVdDLEtBQVgsQ0FBaUI7QUFDN0NDLEVBQUFBLFNBQVMsRUFBRTtBQURrQyxDQUFqQixDQUFILG1CQUEzQjs7QUFNQSxJQUFNQyxhQUFhLEdBQUdKLDZCQUFPQyxHQUFWLG9CQUFuQjs7QUFPQSxJQUFNSSwwQkFBMEIsR0FBR0wsNkJBQU9DLEdBQVYsb0JBQWhDOztBQU1BLElBQU1LLG1CQUFtQixHQUFHTiw2QkFBT0MsR0FBVixvQkFBekI7O0FBVUEsSUFBTU0sYUFBYSxHQUFHUCw2QkFBT1EsQ0FBVixvQkFBbkI7O0FBVUEsSUFBTUMsd0JBQXdCLEdBQUdULDZCQUFPQyxHQUFWLG9CQUE5Qjs7QUFrQkEsSUFBTVMsZUFBZSxHQUFHViw2QkFBT1csRUFBVixvQkFBckI7O0FBTUEsSUFBTUMsdUJBQXVCLEdBQUdaLDZCQUFPQyxHQUFWLG9CQUE3Qjs7QUFPQSxJQUFNWSx1QkFBdUIsR0FBR2IsNkJBQU9DLEdBQVYsb0JBQTdCOztBQWdGQSxJQUFNYSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFBQyxLQUFLLEVBQUk7QUFDdkIsc0JBQ0UsdUNBQVNBLEtBQVQsRUFDR0EsS0FBSyxDQUFDQyxRQURULGVBRUUsZ0NBQUMsV0FBRDtBQUFNLElBQUEsTUFBTSxFQUFD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QUFBakIsR0FBRztBQUFBLDhCQUNwQixnQ0FBQyxpQkFBRDtBQUNFLFlBQUEsR0FBRyxFQUFFQSxHQUFHLENBQUMyQyxFQURYO0FBRUUsWUFBQSxPQUFPLEVBQUU7QUFBQSxxQkFBTSxNQUFJLENBQUNDLGVBQUwsQ0FBcUIxQixRQUFyQixFQUErQmxCLEdBQS9CLENBQU47QUFBQSxhQUZYO0FBR0UsWUFBQSxHQUFHLEVBQUVBO0FBSFAsWUFEb0I7QUFBQSxTQUF0QixDQURELGdCQVNDO0FBQUssVUFBQSxTQUFTLEVBQUM7QUFBZix3QkFDRSxnQ0FBQywyQkFBRDtBQUFrQixVQUFBLEVBQUUsRUFBRTtBQUF0QixVQURGLENBVkosQ0FORixDQXZCRixDQVBKLENBYkosQ0FERjtBQXdFRDtBQWxJNEI7QUFBQTtBQUFBLElBQ0Y2QyxnQkFERTs7QUFvSS9CLFNBQU90QixjQUFQO0FBQ0Q7O2VBRWNELHFCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcblxyXG5pbXBvcnQgTG9hZGluZ0RpYWxvZyBmcm9tICcuL2xvYWRpbmctZGlhbG9nJztcclxuaW1wb3J0IHtCdXR0b259IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IENsb3VkVGlsZSBmcm9tICcuL2Nsb3VkLXRpbGUnO1xyXG5pbXBvcnQge0Jhc2UsIEFycm93TGVmdH0gZnJvbSAnY29tcG9uZW50cy9jb21tb24vaWNvbnMnO1xyXG5pbXBvcnQgUHJvdmlkZXJNb2RhbENvbnRhaW5lciBmcm9tICcuL3Byb3ZpZGVyLW1vZGFsLWNvbnRhaW5lcic7XHJcbmltcG9ydCB7Rm9ybWF0dGVkTWVzc2FnZX0gZnJvbSAncmVhY3QtaW50bCc7XHJcblxyXG5jb25zdCBTdHlsZWRQcm92aWRlclNlY3Rpb24gPSBzdHlsZWQuZGl2LmF0dHJzKHtcclxuICBjbGFzc05hbWU6ICdwcm92aWRlci1zZWxlY3Rpb24nXHJcbn0pYFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbmA7XHJcblxyXG5jb25zdCBTdHlsZWRTcGlubmVyID0gc3R5bGVkLmRpdmBcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgc3BhbiB7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBTdHlsZWRWaXN1YWxpemF0aW9uU2VjdGlvbiA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG5gO1xyXG5cclxuY29uc3QgU3R5bGVkU3RvcmFnZUhlYWRlciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxNHB4O1xyXG5gO1xyXG5cclxuY29uc3QgU3R5bGVkQmFja0J0biA9IHN0eWxlZC5hYFxyXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgY29sb3I6ICMzYTQxNGM7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgU3R5bGVkUHJvdmlkZXJWaXNTZWN0aW9uID0gc3R5bGVkLmRpdmBcclxuICBmbGV4OiAxIDEgYXV0bztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOGY5O1xyXG4gIHBhZGRpbmc6IDIwcHggMjRweDtcclxuICBtaW4taGVpZ2h0OiAyODBweDtcclxuXHJcbiAgLnRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcblxyXG4gICAgc3BhbiB7XHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IFN0eWxlZFNlcGFyYXRvciA9IHN0eWxlZC5ocmBcclxuICBib3JkZXI6IHNvbGlkICNiZmJmYmY7XHJcbiAgYm9yZGVyLXdpZHRoOiAwIDAgMXB4IDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuYDtcclxuXHJcbmNvbnN0IFN0eWxlZFZpc3VhbGl6YXRpb25MaXN0ID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XHJcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5gO1xyXG5cclxuY29uc3QgU3R5bGVkVmlzdWFsaXphdGlvbkl0ZW0gPSBzdHlsZWQuZGl2YFxyXG4gIGZsZXg6IDAgMCBhdXRvO1xyXG4gIHdpZHRoOiAyMDhweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgcGFkZGluZzogMTZweCA4cHg7XHJcbiAgY29sb3I6ICMzYTQxNGM7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBsaW5lLWhlaWdodDogMThweDtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICAudmlzX2l0ZW0taWNvbixcclxuICAgIC52aXNfaXRlbS10aHVtYixcclxuICAgIC52aXNfaXRlbS1kZXNjcmlwdGlvbixcclxuICAgIC52aXNfaXRlbS1tb2RpZmljYXRpb24tZGF0ZSB7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAudmlzX2l0ZW0taWNvbixcclxuICAudmlzX2l0ZW0tdGh1bWIsXHJcbiAgLnZpc19pdGVtLWRlc2NyaXB0aW9uLFxyXG4gIC52aXNfaXRlbS1tb2RpZmljYXRpb24tZGF0ZSB7XHJcbiAgICBvcGFjaXR5OiAwLjk7XHJcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNHMgZWFzZTtcclxuICB9XHJcblxyXG4gIC52aXNfaXRlbS1pY29uIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGZsZXg6IDAgMCAxMDhweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2YTc0ODQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC52aXNfaXRlbS10aHVtYiB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBmbGV4OiAwIDAgMTA4cHg7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIH1cclxuXHJcbiAgLnZpc19pdGVtLXByaXZhY3kge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHBhZGRpbmc6IDNweCA2cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHggMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTgsIDY1LCA3NiwgMC43KTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgfVxyXG5cclxuICAudmlzX2l0ZW0tdGl0bGUge1xyXG4gICAgbWFyZ2luLXRvcDogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gIH1cclxuXHJcbiAgLnZpc19pdGVtLWRlc2NyaXB0aW9uIHtcclxuICAgIGZsZXg6IDEgMSBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gIH1cclxuXHJcbiAgLnZpc19pdGVtLW1vZGlmaWNhdGlvbi1kYXRlIHtcclxuICAgIG1hcmdpbi10b3A6IDE2cHg7XHJcbiAgICBmbGV4OiAxIDAgYXV0bztcclxuICAgIGNvbG9yOiAjNmE3NDg0O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE1cHg7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgTWFwSWNvbiA9IHByb3BzID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiB7Li4ucHJvcHN9PlxyXG4gICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICAgIDxCYXNlIGhlaWdodD1cIjMycHhcIiB2aWV3Qm94PXsnMCAwIDE2IDE2J30+XHJcbiAgICAgICAgPHBhdGhcclxuICAgICAgICAgIGZpbGw9XCIjZDNkOGQ2XCJcclxuICAgICAgICAgIGQ9XCJtMTMuNiAxMS41NzItMy4yIDIuMTMzNnYtOS4yNzc2bDMuMi0yLjEzMzZ6bS0xMi03LjE0NCAzLjItMi4xMzM2djkuMjc3NmwtMy4yIDIuMTMzNnptMTMuMjQ0IDguMjM3NmMwLjIyMjQtMC4xNDggMC4zNTYtMC4zOTg0IDAuMzU2LTAuNjY1NnYtMTEuMmMwLTAuMjk1Mi0wLjE2MjQtMC41NjY0LTAuNDIyNC0wLjcwNDgtMC4yNi0wLjE0LTAuNTc2LTAuMTI0OC0wLjgyMTYgMC4wMzkybC00LjMxMjggMi44NzYtMy41NDMyLTIuODM1MmMtMC4xMjA4LTAuMDkzNi0wLjI5NTItMC4xNjI0LTAuNDcyLTAuMTY4OC0wLjE2NDgtMC4wMDY0LTAuMzQ4IDAuMDQ2NC0wLjQ3MiAwLjEyOGwtNC44IDMuMmMtMC4yMjI0IDAuMTQ4OC0wLjM1NiAwLjM5ODQtMC4zNTYgMC42NjU2djExLjJjMCAwLjI5NTIgMC4xNjI0IDAuNTY2NCAwLjQyMjQgMC43MDU2IDAuMTE4NCAwLjA2MzIgMC4yNDggMC4wOTQ0IDAuMzc3NiAwLjA5NDQgMC4xNTUyIDAgMC4zMDk2LTAuMDQ0OCAwLjQ0NC0wLjEzNDRsNC4zMTI4LTIuODc2IDMuNTQzMiAyLjgzNTJjMC4xNDQ4IDAuMTE2IDAuMzIxNiAwLjE3NTIgMC41IDAuMTc1MiAwLjExODQgMCAwLjIzNi0wLjAyNDggMC4zNDY0LTAuMDc4NHpcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvQmFzZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBQcml2YWN5QmFkZ2UgPSAoe3ByaXZhdGVNYXB9KSA9PiAoXHJcbiAgPHNwYW4gY2xhc3NOYW1lPVwidmlzX2l0ZW0tcHJpdmFjeVwiPntwcml2YXRlTWFwID8gJ1ByaXZhdGUnIDogJ1B1YmxpYyd9PC9zcGFuPlxyXG4pO1xyXG5cclxuY29uc3QgVmlzdWFsaXphdGlvbkl0ZW0gPSAoe3Zpcywgb25DbGlja30pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPFN0eWxlZFZpc3VhbGl6YXRpb25JdGVtIG9uQ2xpY2s9e29uQ2xpY2t9PlxyXG4gICAgICB7dmlzLnRodW1ibmFpbCA/IChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpc19pdGVtLXRodW1iXCIgc3R5bGU9e3tiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHt2aXMudGh1bWJuYWlsfSlgfX0+XHJcbiAgICAgICAgICB7dmlzLmhhc093blByb3BlcnR5KCdwcml2YXRlTWFwJykgPyA8UHJpdmFjeUJhZGdlIHByaXZhdGVNYXA9e3Zpcy5wcml2YXRlTWFwfSAvPiA6IG51bGx9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPE1hcEljb24gY2xhc3NOYW1lPVwidmlzX2l0ZW0taWNvblwiPlxyXG4gICAgICAgICAge3Zpcy5oYXNPd25Qcm9wZXJ0eSgncHJpdmF0ZU1hcCcpID8gPFByaXZhY3lCYWRnZSBwcml2YXRlTWFwPXt2aXMucHJpdmF0ZU1hcH0gLz4gOiBudWxsfVxyXG4gICAgICAgIDwvTWFwSWNvbj5cclxuICAgICAgKX1cclxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidmlzX2l0ZW0tdGl0bGVcIj57dmlzLnRpdGxlfTwvc3Bhbj5cclxuICAgICAge3Zpcy5kZXNjcmlwdGlvbiAmJiB2aXMuZGVzY3JpcHRpb24ubGVuZ3RoICYmIChcclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ2aXNfaXRlbS1kZXNjcmlwdGlvblwiPnt2aXMuZGVzY3JpcHRpb259PC9zcGFuPlxyXG4gICAgICApfVxyXG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJ2aXNfaXRlbS1tb2RpZmljYXRpb24tZGF0ZVwiPlxyXG4gICAgICAgIExhc3QgbW9kaWZpZWQge21vbWVudC51dGModmlzLmxhc3RNb2RpZmljYXRpb24pLmZyb21Ob3coKX1cclxuICAgICAgPC9zcGFuPlxyXG4gICAgPC9TdHlsZWRWaXN1YWxpemF0aW9uSXRlbT5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IFByb3ZpZGVyU2VsZWN0ID0gKHtcclxuICBjbG91ZFByb3ZpZGVycyA9IFtdLFxyXG4gIG9uU2VsZWN0LFxyXG4gIG9uU2V0Q2xvdWRQcm92aWRlcixcclxuICBjdXJyZW50UHJvdmlkZXJcclxufSkgPT5cclxuICBjbG91ZFByb3ZpZGVycy5sZW5ndGggPyAoXHJcbiAgICA8U3R5bGVkUHJvdmlkZXJTZWN0aW9uPlxyXG4gICAgICB7Y2xvdWRQcm92aWRlcnMubWFwKHByb3ZpZGVyID0+IChcclxuICAgICAgICA8Q2xvdWRUaWxlXHJcbiAgICAgICAgICBrZXk9e3Byb3ZpZGVyLm5hbWV9XHJcbiAgICAgICAgICBvblNlbGVjdD17KCkgPT4gb25TZWxlY3QocHJvdmlkZXIubmFtZSl9XHJcbiAgICAgICAgICBvblNldENsb3VkUHJvdmlkZXI9e29uU2V0Q2xvdWRQcm92aWRlcn1cclxuICAgICAgICAgIGNsb3VkUHJvdmlkZXI9e3Byb3ZpZGVyfVxyXG4gICAgICAgICAgaXNTZWxlY3RlZD17cHJvdmlkZXIubmFtZSA9PT0gY3VycmVudFByb3ZpZGVyfVxyXG4gICAgICAgICAgaXNDb25uZWN0ZWQ9e0Jvb2xlYW4ocHJvdmlkZXIuZ2V0QWNjZXNzVG9rZW4gJiYgcHJvdmlkZXIuZ2V0QWNjZXNzVG9rZW4oKSl9XHJcbiAgICAgICAgLz5cclxuICAgICAgKSl9XHJcbiAgICA8L1N0eWxlZFByb3ZpZGVyU2VjdGlvbj5cclxuICApIDogKFxyXG4gICAgPHA+Tm8gc3RvcmFnZSBwcm92aWRlciBhdmFpbGFibGU8L3A+XHJcbiAgKTtcclxuXHJcbmZ1bmN0aW9uIExvYWRTdG9yYWdlTWFwRmFjdG9yeSgpIHtcclxuICBjbGFzcyBMb2FkU3RvcmFnZU1hcCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBzdGF0ZSA9IHtcclxuICAgICAgc2hvd1Byb3ZpZGVyU2VsZWN0OiB0cnVlXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICB0aGlzLl9nZXRTYXZlZE1hcHMoKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XHJcbiAgICAgIGlmIChwcmV2UHJvcHMuY3VycmVudFByb3ZpZGVyICE9PSB0aGlzLnByb3BzLmN1cnJlbnRQcm92aWRlcikge1xyXG4gICAgICAgIHRoaXMuX2dldFNhdmVkTWFwcygpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgX2dldFByb3ZpZGVyID0gKCkgPT4ge1xyXG4gICAgICBjb25zdCB7Y3VycmVudFByb3ZpZGVyLCBjbG91ZFByb3ZpZGVyc30gPSB0aGlzLnByb3BzO1xyXG4gICAgICByZXR1cm4gKGNsb3VkUHJvdmlkZXJzIHx8IFtdKS5maW5kKHAgPT4gcC5uYW1lID09PSBjdXJyZW50UHJvdmlkZXIpO1xyXG4gICAgfTtcclxuXHJcbiAgICBfZ2V0U2F2ZWRNYXBzKCkge1xyXG4gICAgICBjb25zdCBwcm92aWRlciA9IHRoaXMuX2dldFByb3ZpZGVyKCk7XHJcbiAgICAgIGlmIChwcm92aWRlcikge1xyXG4gICAgICAgIHRoaXMucHJvcHMuZ2V0U2F2ZWRNYXBzKHByb3ZpZGVyKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtzaG93UHJvdmlkZXJTZWxlY3Q6IGZhbHNlfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBfb25Mb2FkQ2xvdWRNYXAocHJvdmlkZXIsIHZpcykge1xyXG4gICAgICB0aGlzLnByb3BzLm9uTG9hZENsb3VkTWFwKHtcclxuICAgICAgICBsb2FkUGFyYW1zOiB2aXMubG9hZFBhcmFtcyxcclxuICAgICAgICBwcm92aWRlclxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBfY2xpY2tCYWNrID0gKCkgPT4ge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtzaG93UHJvdmlkZXJTZWxlY3Q6IHRydWV9KTtcclxuICAgIH07XHJcblxyXG4gICAgX3NlbGVjdFByb3ZpZGVyID0gcHJvdmlkZXJOYW1lID0+IHtcclxuICAgICAgdGhpcy5wcm9wcy5vblNldENsb3VkUHJvdmlkZXIocHJvdmlkZXJOYW1lKTtcclxuICAgICAgY29uc3QgcHJvdmlkZXIgPSAodGhpcy5wcm9wcy5jbG91ZFByb3ZpZGVycyB8fCBbXSkuZmluZChwID0+IHAubmFtZSA9PT0gcHJvdmlkZXJOYW1lKTtcclxuICAgICAgdGhpcy5wcm9wcy5nZXRTYXZlZE1hcHMocHJvdmlkZXIpO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtzaG93UHJvdmlkZXJTZWxlY3Q6IGZhbHNlfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgY29uc3Qge1xyXG4gICAgICAgIHZpc3VhbGl6YXRpb25zLFxyXG4gICAgICAgIGNsb3VkUHJvdmlkZXJzLFxyXG4gICAgICAgIGN1cnJlbnRQcm92aWRlcixcclxuICAgICAgICBpc1Byb3ZpZGVyTG9hZGluZyxcclxuICAgICAgICBvblNldENsb3VkUHJvdmlkZXJcclxuICAgICAgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICBjb25zdCBwcm92aWRlciA9IHRoaXMuX2dldFByb3ZpZGVyKCk7XHJcblxyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxQcm92aWRlck1vZGFsQ29udGFpbmVyXHJcbiAgICAgICAgICBvblNldENsb3VkUHJvdmlkZXI9e29uU2V0Q2xvdWRQcm92aWRlcn1cclxuICAgICAgICAgIGNsb3VkUHJvdmlkZXJzPXtjbG91ZFByb3ZpZGVyc31cclxuICAgICAgICAgIGN1cnJlbnRQcm92aWRlcj17Y3VycmVudFByb3ZpZGVyfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHt0aGlzLnN0YXRlLnNob3dQcm92aWRlclNlbGVjdCA/IChcclxuICAgICAgICAgICAgPFByb3ZpZGVyU2VsZWN0XHJcbiAgICAgICAgICAgICAgb25TZWxlY3Q9e3RoaXMuX3NlbGVjdFByb3ZpZGVyfVxyXG4gICAgICAgICAgICAgIGNsb3VkUHJvdmlkZXJzPXtjbG91ZFByb3ZpZGVyc31cclxuICAgICAgICAgICAgICBvblNldENsb3VkUHJvdmlkZXI9e29uU2V0Q2xvdWRQcm92aWRlcn1cclxuICAgICAgICAgICAgICBjdXJyZW50UHJvdmlkZXI9e2N1cnJlbnRQcm92aWRlcn1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAge2lzUHJvdmlkZXJMb2FkaW5nICYmIChcclxuICAgICAgICAgICAgICAgIDxTdHlsZWRTcGlubmVyPlxyXG4gICAgICAgICAgICAgICAgICA8TG9hZGluZ0RpYWxvZyBzaXplPXs2NH0gLz5cclxuICAgICAgICAgICAgICAgIDwvU3R5bGVkU3Bpbm5lcj5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIHshaXNQcm92aWRlckxvYWRpbmcgJiYgdmlzdWFsaXphdGlvbnMgJiYgKFxyXG4gICAgICAgICAgICAgICAgPFN0eWxlZFZpc3VhbGl6YXRpb25TZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICA8U3R5bGVkU3RvcmFnZUhlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICA8U3R5bGVkQmFja0J0bj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gbGluayBvbkNsaWNrPXt0aGlzLl9jbGlja0JhY2t9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QXJyb3dMZWZ0IGhlaWdodD1cIjE0cHhcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZSBpZD17J21vZGFsLmxvYWRTdG9yYWdlTWFwLmJhY2snfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9TdHlsZWRCYWNrQnRuPlxyXG4gICAgICAgICAgICAgICAgICAgIHtwcm92aWRlci5nZXRNYW5hZ2VtZW50VXJsICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17MX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17cHJvdmlkZXIuZ2V0TWFuYWdlbWVudFVybCgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t0ZXh0RGVjb3JhdGlvbjogJ3VuZGVybGluZSd9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXsnbW9kYWwubG9hZFN0b3JhZ2VNYXAuYmFjayd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzPXt7ZGlzcGxheU5hbWU6IHByb3ZpZGVyLmRpc3BsYXlOYW1lfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICA8L1N0eWxlZFN0b3JhZ2VIZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgIDxTdHlsZWRQcm92aWRlclZpc1NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntjdXJyZW50UHJvdmlkZXJ9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2UgaWQ9eydtb2RhbC5sb2FkU3RvcmFnZU1hcC5zdG9yYWdlTWFwcyd9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTdHlsZWRTZXBhcmF0b3IgLz5cclxuICAgICAgICAgICAgICAgICAgICA8U3R5bGVkVmlzdWFsaXphdGlvbkxpc3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7dmlzdWFsaXphdGlvbnMubGVuZ3RoID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2aXN1YWxpemF0aW9ucy5tYXAodmlzID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8VmlzdWFsaXphdGlvbkl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17dmlzLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5fb25Mb2FkQ2xvdWRNYXAocHJvdmlkZXIsIHZpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aXM9e3Zpc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aXN1YWxpemF0aW9uLWxpc3RfX21lc3NhZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZSBpZD17J21vZGFsLmxvYWRTdG9yYWdlTWFwLm5vU2F2ZWRNYXBzJ30gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvU3R5bGVkVmlzdWFsaXphdGlvbkxpc3Q+XHJcbiAgICAgICAgICAgICAgICAgIDwvU3R5bGVkUHJvdmlkZXJWaXNTZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC9TdHlsZWRWaXN1YWxpemF0aW9uU2VjdGlvbj5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9Qcm92aWRlck1vZGFsQ29udGFpbmVyPlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gTG9hZFN0b3JhZ2VNYXA7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvYWRTdG9yYWdlTWFwRmFjdG9yeTtcclxuIl19