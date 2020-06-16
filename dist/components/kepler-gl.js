"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _window = require("global/window");

var _redux = require("redux");

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _reselect = require("reselect");

var _keplerglConnect = require("../connect/keplergl-connect");

var _reactIntl = require("react-intl");

var _localization = require("../localization");

var _context = require("./context");

var VisStateActions = _interopRequireWildcard(require("../actions/vis-state-actions"));

var MapStateActions = _interopRequireWildcard(require("../actions/map-state-actions"));

var MapStyleActions = _interopRequireWildcard(require("../actions/map-style-actions"));

var UIStateActions = _interopRequireWildcard(require("../actions/ui-state-actions"));

var ProviderActions = _interopRequireWildcard(require("../actions/provider-actions"));

var _defaultSettings = require("../constants/default-settings");

var _userFeedbacks = require("../constants/user-feedbacks");

var _sidePanel = _interopRequireDefault(require("./side-panel"));

var _mapContainer = _interopRequireDefault(require("./map-container"));

var _bottomWidget = _interopRequireDefault(require("./bottom-widget"));

var _modalContainer = _interopRequireDefault(require("./modal-container"));

var _plotContainer = _interopRequireDefault(require("./plot-container"));

var _notificationPanel = _interopRequireDefault(require("./notification-panel"));

var _geocoderPanel = _interopRequireDefault(require("./geocoder-panel"));

var _utils = require("../utils/utils");

var _mapboxUtils = require("../utils/mapbox-utils");

var _base = require("../styles/base");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  font-family: ", ";\n  font-weight: ", ";\n  font-size: ", ";\n  line-height: ", ";\n\n  *,\n  *:before,\n  *:after {\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n  }\n\n  ul {\n    margin: 0;\n    padding: 0;\n  }\n\n  li {\n    margin: 0;\n  }\n\n  a {\n    text-decoration: none;\n    color: ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

// Maybe we should think about exporting this or creating a variable
// as part of the base.js theme
var GlobalStyle = _styledComponents["default"].div(_templateObject(), function (props) {
  return props.theme.fontFamily;
}, function (props) {
  return props.theme.fontWeight;
}, function (props) {
  return props.theme.fontSize;
}, function (props) {
  return props.theme.lineHeight;
}, function (props) {
  return props.theme.labelColor;
});

KeplerGlFactory.deps = [_bottomWidget["default"], _geocoderPanel["default"], _mapContainer["default"], _modalContainer["default"], _sidePanel["default"], _plotContainer["default"], _notificationPanel["default"]];

function KeplerGlFactory(BottomWidget, GeoCoderPanel, MapContainer, ModalContainer, SidePanel, PlotContainer, NotificationPanel) {
  var KeplerGL = /*#__PURE__*/function (_Component) {
    (0, _inherits2["default"])(KeplerGL, _Component);

    var _super = _createSuper(KeplerGL);

    function KeplerGL() {
      var _this;

      (0, _classCallCheck2["default"])(this, KeplerGL);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "root", /*#__PURE__*/(0, _react.createRef)());
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "themeSelector", function (props) {
        return props.theme;
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "availableThemeSelector", (0, _reselect.createSelector)(_this.themeSelector, function (theme) {
        return (0, _typeof2["default"])(theme) === 'object' ? _objectSpread(_objectSpread({}, _base.theme), theme) : theme === _defaultSettings.THEME.light ? _base.themeLT : theme === _defaultSettings.THEME.base ? _base.themeBS : theme;
      }));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "availableProviders", (0, _reselect.createSelector)(function (props) {
        return props.cloudProviders;
      }, function (providers) {
        return Array.isArray(providers) && providers.length ? {
          hasStorage: providers.some(function (p) {
            return p.hasPrivateStorage();
          }),
          hasShare: providers.some(function (p) {
            return p.hasSharingUrl();
          })
        } : {};
      }));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_loadMapStyle", function () {
        var defaultStyles = Object.values(_this.props.mapStyle.mapStyles); // add id to custom map styles if not given

        var customStyles = (_this.props.mapStyles || []).map(function (ms) {
          return _objectSpread(_objectSpread({}, ms), {}, {
            id: ms.id || (0, _utils.generateHashId)()
          });
        });
        var allStyles = [].concat((0, _toConsumableArray2["default"])(customStyles), (0, _toConsumableArray2["default"])(defaultStyles)).reduce(function (accu, style) {
          var hasStyleObject = style.style && (0, _typeof2["default"])(style.style) === 'object';
          accu[hasStyleObject ? 'toLoad' : 'toRequest'][style.id] = style;
          return accu;
        }, {
          toLoad: {},
          toRequest: {}
        });

        _this.props.mapStyleActions.loadMapStyles(allStyles.toLoad);

        _this.props.mapStyleActions.requestMapStyles(allStyles.toRequest);
      });
      return _this;
    }

    (0, _createClass2["default"])(KeplerGL, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this._validateMapboxToken();

        this._loadMapStyle(this.props.mapStyles);

        this._handleResize(this.props);
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps) {
        if ( // if dimension props has changed
        this.props.height !== prevProps.height || this.props.width !== prevProps.width || // react-map-gl will dispatch updateViewport after this._handleResize is called
        // here we check if this.props.mapState.height is sync with props.height
        this.props.height !== this.props.mapState.height) {
          this._handleResize(this.props);
        }
      }
    }, {
      key: "_validateMapboxToken",

      /* private methods */
      value: function _validateMapboxToken() {
        var mapboxApiAccessToken = this.props.mapboxApiAccessToken;

        if (!(0, _mapboxUtils.validateToken)(mapboxApiAccessToken)) {
          _window.console.warn(_userFeedbacks.MISSING_MAPBOX_TOKEN);
        }
      }
    }, {
      key: "_handleResize",
      value: function _handleResize(_ref) {
        var width = _ref.width,
            height = _ref.height;

        if (!Number.isFinite(width) || !Number.isFinite(height)) {
          _window.console.warn('width and height is required');

          return;
        }

        this.props.mapStateActions.updateMap({
          width: width / (1 + Number(this.props.mapState.isSplit)),
          height: height
        });
      }
    }, {
      key: "render",
      value: function render() {
        var _this$props = this.props,
            id = _this$props.id,
            appName = _this$props.appName,
            version = _this$props.version,
            appWebsite = _this$props.appWebsite,
            onSaveMap = _this$props.onSaveMap,
            onViewStateChange = _this$props.onViewStateChange,
            width = _this$props.width,
            height = _this$props.height,
            mapboxApiAccessToken = _this$props.mapboxApiAccessToken,
            mapboxApiUrl = _this$props.mapboxApiUrl,
            getMapboxRef = _this$props.getMapboxRef,
            mapStyle = _this$props.mapStyle,
            mapState = _this$props.mapState,
            uiState = _this$props.uiState,
            visState = _this$props.visState,
            providerState = _this$props.providerState,
            visStateActions = _this$props.visStateActions,
            mapStateActions = _this$props.mapStateActions,
            mapStyleActions = _this$props.mapStyleActions,
            uiStateActions = _this$props.uiStateActions,
            providerActions = _this$props.providerActions,
            dispatch = _this$props.dispatch;
        var availableProviders = this.availableProviders(this.props);
        var filters = visState.filters,
            layers = visState.layers,
            splitMaps = visState.splitMaps,
            layerOrder = visState.layerOrder,
            layerBlending = visState.layerBlending,
            layerClasses = visState.layerClasses,
            interactionConfig = visState.interactionConfig,
            datasets = visState.datasets,
            layerData = visState.layerData,
            hoverInfo = visState.hoverInfo,
            clicked = visState.clicked,
            mousePos = visState.mousePos,
            animationConfig = visState.animationConfig,
            mapInfo = visState.mapInfo;
        var notificationPanelFields = {
          removeNotification: uiStateActions.removeNotification,
          notifications: uiState.notifications
        };
        var sideFields = {
          appName: appName,
          version: version,
          appWebsite: appWebsite,
          datasets: datasets,
          filters: filters,
          layers: layers,
          layerOrder: layerOrder,
          layerClasses: layerClasses,
          interactionConfig: interactionConfig,
          mapStyle: mapStyle,
          mapInfo: mapInfo,
          layerBlending: layerBlending,
          onSaveMap: onSaveMap,
          uiState: uiState,
          mapStyleActions: mapStyleActions,
          visStateActions: visStateActions,
          uiStateActions: uiStateActions,
          width: this.props.sidePanelWidth,
          availableProviders: availableProviders,
          mapSaved: providerState.mapSaved
        };
        var mapFields = {
          datasets: datasets,
          getMapboxRef: getMapboxRef,
          mapboxApiAccessToken: mapboxApiAccessToken,
          mapboxApiUrl: mapboxApiUrl,
          mapState: mapState,
          uiState: uiState,
          editor: visState.editor,
          mapStyle: mapStyle,
          mapControls: uiState.mapControls,
          layers: layers,
          layerOrder: layerOrder,
          layerData: layerData,
          layerBlending: layerBlending,
          filters: filters,
          interactionConfig: interactionConfig,
          hoverInfo: hoverInfo,
          clicked: clicked,
          mousePos: mousePos,
          readOnly: uiState.readOnly,
          onViewStateChange: onViewStateChange,
          uiStateActions: uiStateActions,
          visStateActions: visStateActions,
          mapStateActions: mapStateActions,
          animationConfig: animationConfig
        };
        var isSplit = splitMaps && splitMaps.length > 1;
        var containerW = mapState.width * (Number(isSplit) + 1);
        var mapContainers = !isSplit ? [/*#__PURE__*/_react["default"].createElement(MapContainer, (0, _extends2["default"])({
          key: 0,
          index: 0
        }, mapFields, {
          mapLayers: null
        }))] : splitMaps.map(function (settings, index) {
          return /*#__PURE__*/_react["default"].createElement(MapContainer, (0, _extends2["default"])({
            key: index,
            index: index
          }, mapFields, {
            mapLayers: splitMaps[index].layers
          }));
        });
        var isExporting = uiState.currentModal === _defaultSettings.EXPORT_IMAGE_ID || uiState.currentModal === _defaultSettings.SAVE_MAP_ID || uiState.currentModal === _defaultSettings.SHARE_MAP_ID || uiState.currentModal === _defaultSettings.OVERWRITE_MAP_ID;
        var theme = this.availableThemeSelector(this.props);
        return /*#__PURE__*/_react["default"].createElement(_context.RootContext.Provider, {
          value: this.root
        }, /*#__PURE__*/_react["default"].createElement(_reactIntl.IntlProvider, {
          locale: uiState.locale,
          messages: _localization.messages[uiState.locale]
        }, /*#__PURE__*/_react["default"].createElement(_styledComponents.ThemeProvider, {
          theme: theme
        }, /*#__PURE__*/_react["default"].createElement(GlobalStyle, {
          width: width,
          height: height,
          className: "kepler-gl",
          id: "kepler-gl__".concat(id),
          ref: this.root
        }, /*#__PURE__*/_react["default"].createElement(NotificationPanel, notificationPanelFields), !uiState.readOnly && /*#__PURE__*/_react["default"].createElement(SidePanel, sideFields), /*#__PURE__*/_react["default"].createElement("div", {
          className: "maps",
          style: {
            display: 'flex'
          }
        }, mapContainers), isExporting && /*#__PURE__*/_react["default"].createElement(PlotContainer, {
          width: width,
          height: height,
          exportImageSetting: uiState.exportImage,
          mapFields: mapFields,
          addNotification: uiStateActions.addNotification,
          startExportingImage: uiStateActions.startExportingImage,
          setExportImageDataUri: uiStateActions.setExportImageDataUri,
          setExportImageError: uiStateActions.setExportImageError
        }), !uiState.readOnly && interactionConfig.geocoder.enabled && /*#__PURE__*/_react["default"].createElement(GeoCoderPanel, {
          isGeocoderEnabled: interactionConfig.geocoder.enabled,
          mapboxApiAccessToken: mapboxApiAccessToken,
          dispatch: dispatch
        }), /*#__PURE__*/_react["default"].createElement(BottomWidget, {
          filters: filters,
          datasets: datasets,
          uiState: uiState,
          layers: layers,
          animationConfig: animationConfig,
          visStateActions: visStateActions,
          sidePanelWidth: uiState.readOnly ? 0 : this.props.sidePanelWidth + theme.sidePanel.margin.left,
          containerW: containerW
        }), /*#__PURE__*/_react["default"].createElement(ModalContainer, {
          mapStyle: mapStyle,
          visState: visState,
          mapState: mapState,
          uiState: uiState,
          mapboxApiAccessToken: mapboxApiAccessToken,
          mapboxApiUrl: mapboxApiUrl,
          visStateActions: visStateActions,
          uiStateActions: uiStateActions,
          mapStyleActions: mapStyleActions,
          providerActions: providerActions,
          rootNode: this.root.current,
          containerW: containerW,
          containerH: mapState.height,
          providerState: this.props.providerState // User defined cloud provider props
          ,
          cloudProviders: this.props.cloudProviders,
          onExportToCloudSuccess: this.props.onExportToCloudSuccess,
          onLoadCloudMapSuccess: this.props.onLoadCloudMapSuccess,
          onLoadCloudMapError: this.props.onLoadCloudMapError,
          onExportToCloudError: this.props.onExportToCloudError
        })))));
      }
    }]);
    return KeplerGL;
  }(_react.Component);

  (0, _defineProperty2["default"])(KeplerGL, "defaultProps", {
    mapStyles: [],
    mapStylesReplaceDefault: false,
    mapboxApiUrl: _defaultSettings.DEFAULT_MAPBOX_API_URL,
    width: 800,
    height: 800,
    appName: _defaultSettings.KEPLER_GL_NAME,
    version: _defaultSettings.KEPLER_GL_VERSION,
    sidePanelWidth: _defaultSettings.DIMENSIONS.sidePanel.width,
    theme: {},
    cloudProviders: []
  });
  (0, _defineProperty2["default"])(KeplerGL, "contextType", _context.RootContext);
  return (0, _keplerglConnect.connect)(mapStateToProps, makeMapDispatchToProps)((0, _styledComponents.withTheme)(KeplerGL));
}

function mapStateToProps() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var props = arguments.length > 1 ? arguments[1] : undefined;
  return _objectSpread(_objectSpread({}, props), {}, {
    visState: state.visState,
    mapStyle: state.mapStyle,
    mapState: state.mapState,
    uiState: state.uiState,
    providerState: state.providerState
  });
}

var defaultUserActions = {};

var getDispatch = function getDispatch(dispatch) {
  return dispatch;
};

var getUserActions = function getUserActions(dispatch, props) {
  return props.actions || defaultUserActions;
};

function makeGetActionCreators() {
  return (0, _reselect.createSelector)([getDispatch, getUserActions], function (dispatch, userActions) {
    var _map = [VisStateActions, MapStateActions, MapStyleActions, UIStateActions, ProviderActions].map(function (actions) {
      return (0, _redux.bindActionCreators)(mergeActions(actions, userActions), dispatch);
    }),
        _map2 = (0, _slicedToArray2["default"])(_map, 5),
        visStateActions = _map2[0],
        mapStateActions = _map2[1],
        mapStyleActions = _map2[2],
        uiStateActions = _map2[3],
        providerActions = _map2[4];

    return {
      visStateActions: visStateActions,
      mapStateActions: mapStateActions,
      mapStyleActions: mapStyleActions,
      uiStateActions: uiStateActions,
      providerActions: providerActions,
      dispatch: dispatch
    };
  });
}

function makeMapDispatchToProps() {
  var getActionCreators = makeGetActionCreators();

  var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
    var groupedActionCreators = getActionCreators(dispatch, ownProps);
    return _objectSpread(_objectSpread({}, groupedActionCreators), {}, {
      dispatch: dispatch
    });
  };

  return mapDispatchToProps;
}
/**
 * Override default kepler.gl actions with user defined actions using the same key
 */


function mergeActions(actions, userActions) {
  var overrides = {};

  for (var key in userActions) {
    if (userActions.hasOwnProperty(key) && actions.hasOwnProperty(key)) {
      overrides[key] = userActions[key];
    }
  }

  return _objectSpread(_objectSpread({}, actions), overrides);
}

var _default = KeplerGlFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL2tlcGxlci1nbC5qcyJdLCJuYW1lcyI6WyJHbG9iYWxTdHlsZSIsInN0eWxlZCIsImRpdiIsInByb3BzIiwidGhlbWUiLCJmb250RmFtaWx5IiwiZm9udFdlaWdodCIsImZvbnRTaXplIiwibGluZUhlaWdodCIsImxhYmVsQ29sb3IiLCJLZXBsZXJHbEZhY3RvcnkiLCJkZXBzIiwiQm90dG9tV2lkZ2V0RmFjdG9yeSIsIkdlb0NvZGVyUGFuZWxGYWN0b3J5IiwiTWFwQ29udGFpbmVyRmFjdG9yeSIsIk1vZGFsQ29udGFpbmVyRmFjdG9yeSIsIlNpZGVQYW5lbEZhY3RvcnkiLCJQbG90Q29udGFpbmVyRmFjdG9yeSIsIk5vdGlmaWNhdGlvblBhbmVsRmFjdG9yeSIsIkJvdHRvbVdpZGdldCIsIkdlb0NvZGVyUGFuZWwiLCJNYXBDb250YWluZXIiLCJNb2RhbENvbnRhaW5lciIsIlNpZGVQYW5lbCIsIlBsb3RDb250YWluZXIiLCJOb3RpZmljYXRpb25QYW5lbCIsIktlcGxlckdMIiwidGhlbWVTZWxlY3RvciIsImJhc2ljVGhlbWUiLCJUSEVNRSIsImxpZ2h0IiwidGhlbWVMVCIsImJhc2UiLCJ0aGVtZUJTIiwiY2xvdWRQcm92aWRlcnMiLCJwcm92aWRlcnMiLCJBcnJheSIsImlzQXJyYXkiLCJsZW5ndGgiLCJoYXNTdG9yYWdlIiwic29tZSIsInAiLCJoYXNQcml2YXRlU3RvcmFnZSIsImhhc1NoYXJlIiwiaGFzU2hhcmluZ1VybCIsImRlZmF1bHRTdHlsZXMiLCJPYmplY3QiLCJ2YWx1ZXMiLCJtYXBTdHlsZSIsIm1hcFN0eWxlcyIsImN1c3RvbVN0eWxlcyIsIm1hcCIsIm1zIiwiaWQiLCJhbGxTdHlsZXMiLCJyZWR1Y2UiLCJhY2N1Iiwic3R5bGUiLCJoYXNTdHlsZU9iamVjdCIsInRvTG9hZCIsInRvUmVxdWVzdCIsIm1hcFN0eWxlQWN0aW9ucyIsImxvYWRNYXBTdHlsZXMiLCJyZXF1ZXN0TWFwU3R5bGVzIiwiX3ZhbGlkYXRlTWFwYm94VG9rZW4iLCJfbG9hZE1hcFN0eWxlIiwiX2hhbmRsZVJlc2l6ZSIsInByZXZQcm9wcyIsImhlaWdodCIsIndpZHRoIiwibWFwU3RhdGUiLCJtYXBib3hBcGlBY2Nlc3NUb2tlbiIsIkNvbnNvbGUiLCJ3YXJuIiwiTUlTU0lOR19NQVBCT1hfVE9LRU4iLCJOdW1iZXIiLCJpc0Zpbml0ZSIsIm1hcFN0YXRlQWN0aW9ucyIsInVwZGF0ZU1hcCIsImlzU3BsaXQiLCJhcHBOYW1lIiwidmVyc2lvbiIsImFwcFdlYnNpdGUiLCJvblNhdmVNYXAiLCJvblZpZXdTdGF0ZUNoYW5nZSIsIm1hcGJveEFwaVVybCIsImdldE1hcGJveFJlZiIsInVpU3RhdGUiLCJ2aXNTdGF0ZSIsInByb3ZpZGVyU3RhdGUiLCJ2aXNTdGF0ZUFjdGlvbnMiLCJ1aVN0YXRlQWN0aW9ucyIsInByb3ZpZGVyQWN0aW9ucyIsImRpc3BhdGNoIiwiYXZhaWxhYmxlUHJvdmlkZXJzIiwiZmlsdGVycyIsImxheWVycyIsInNwbGl0TWFwcyIsImxheWVyT3JkZXIiLCJsYXllckJsZW5kaW5nIiwibGF5ZXJDbGFzc2VzIiwiaW50ZXJhY3Rpb25Db25maWciLCJkYXRhc2V0cyIsImxheWVyRGF0YSIsImhvdmVySW5mbyIsImNsaWNrZWQiLCJtb3VzZVBvcyIsImFuaW1hdGlvbkNvbmZpZyIsIm1hcEluZm8iLCJub3RpZmljYXRpb25QYW5lbEZpZWxkcyIsInJlbW92ZU5vdGlmaWNhdGlvbiIsIm5vdGlmaWNhdGlvbnMiLCJzaWRlRmllbGRzIiwic2lkZVBhbmVsV2lkdGgiLCJtYXBTYXZlZCIsIm1hcEZpZWxkcyIsImVkaXRvciIsIm1hcENvbnRyb2xzIiwicmVhZE9ubHkiLCJjb250YWluZXJXIiwibWFwQ29udGFpbmVycyIsInNldHRpbmdzIiwiaW5kZXgiLCJpc0V4cG9ydGluZyIsImN1cnJlbnRNb2RhbCIsIkVYUE9SVF9JTUFHRV9JRCIsIlNBVkVfTUFQX0lEIiwiU0hBUkVfTUFQX0lEIiwiT1ZFUldSSVRFX01BUF9JRCIsImF2YWlsYWJsZVRoZW1lU2VsZWN0b3IiLCJyb290IiwibG9jYWxlIiwibWVzc2FnZXMiLCJkaXNwbGF5IiwiZXhwb3J0SW1hZ2UiLCJhZGROb3RpZmljYXRpb24iLCJzdGFydEV4cG9ydGluZ0ltYWdlIiwic2V0RXhwb3J0SW1hZ2VEYXRhVXJpIiwic2V0RXhwb3J0SW1hZ2VFcnJvciIsImdlb2NvZGVyIiwiZW5hYmxlZCIsInNpZGVQYW5lbCIsIm1hcmdpbiIsImxlZnQiLCJjdXJyZW50Iiwib25FeHBvcnRUb0Nsb3VkU3VjY2VzcyIsIm9uTG9hZENsb3VkTWFwU3VjY2VzcyIsIm9uTG9hZENsb3VkTWFwRXJyb3IiLCJvbkV4cG9ydFRvQ2xvdWRFcnJvciIsIkNvbXBvbmVudCIsIm1hcFN0eWxlc1JlcGxhY2VEZWZhdWx0IiwiREVGQVVMVF9NQVBCT1hfQVBJX1VSTCIsIktFUExFUl9HTF9OQU1FIiwiS0VQTEVSX0dMX1ZFUlNJT04iLCJESU1FTlNJT05TIiwiUm9vdENvbnRleHQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJtYWtlTWFwRGlzcGF0Y2hUb1Byb3BzIiwic3RhdGUiLCJkZWZhdWx0VXNlckFjdGlvbnMiLCJnZXREaXNwYXRjaCIsImdldFVzZXJBY3Rpb25zIiwiYWN0aW9ucyIsIm1ha2VHZXRBY3Rpb25DcmVhdG9ycyIsInVzZXJBY3Rpb25zIiwiVmlzU3RhdGVBY3Rpb25zIiwiTWFwU3RhdGVBY3Rpb25zIiwiTWFwU3R5bGVBY3Rpb25zIiwiVUlTdGF0ZUFjdGlvbnMiLCJQcm92aWRlckFjdGlvbnMiLCJtZXJnZUFjdGlvbnMiLCJnZXRBY3Rpb25DcmVhdG9ycyIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsIm93blByb3BzIiwiZ3JvdXBlZEFjdGlvbkNyZWF0b3JzIiwib3ZlcnJpZGVzIiwia2V5IiwiaGFzT3duUHJvcGVydHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztB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SEs7QUFJTDhCLE1BQUFBLGNBQWMsRUFBZEEsY0FKSztBQUtMQyxNQUFBQSxlQUFlLEVBQWZBLGVBTEs7QUFNTEMsTUFBQUEsUUFBUSxFQUFSQTtBQU5LLEtBQVA7QUFRRCxHQWpCTSxDQUFQO0FBa0JEOztBQUVELFNBQVNnRSxzQkFBVCxHQUFrQztBQUNoQyxNQUFNYyxpQkFBaUIsR0FBR1IscUJBQXFCLEVBQS9DOztBQUNBLE1BQU1TLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsQ0FBQy9FLFFBQUQsRUFBV2dGLFFBQVgsRUFBd0I7QUFDakQsUUFBTUMscUJBQXFCLEdBQUdILGlCQUFpQixDQUFDOUUsUUFBRCxFQUFXZ0YsUUFBWCxDQUEvQztBQUVBLDJDQUNLQyxxQkFETDtBQUVFakYsTUFBQUEsUUFBUSxFQUFSQTtBQUZGO0FBSUQsR0FQRDs7QUFTQSxTQUFPK0Usa0JBQVA7QUFDRDtBQUVEOzs7OztBQUdBLFNBQVNGLFlBQVQsQ0FBc0JSLE9BQXRCLEVBQStCRSxXQUEvQixFQUE0QztBQUMxQyxNQUFNVyxTQUFTLEdBQUcsRUFBbEI7O0FBQ0EsT0FBSyxJQUFNQyxHQUFYLElBQWtCWixXQUFsQixFQUErQjtBQUM3QixRQUFJQSxXQUFXLENBQUNhLGNBQVosQ0FBMkJELEdBQTNCLEtBQW1DZCxPQUFPLENBQUNlLGNBQVIsQ0FBdUJELEdBQXZCLENBQXZDLEVBQW9FO0FBQ2xFRCxNQUFBQSxTQUFTLENBQUNDLEdBQUQsQ0FBVCxHQUFpQlosV0FBVyxDQUFDWSxHQUFELENBQTVCO0FBQ0Q7QUFDRjs7QUFFRCx5Q0FBV2QsT0FBWCxHQUF1QmEsU0FBdkI7QUFDRDs7ZUFFY3JLLGUiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnQsIGNyZWF0ZVJlZn0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge2NvbnNvbGUgYXMgQ29uc29sZX0gZnJvbSAnZ2xvYmFsL3dpbmRvdyc7XHJcbmltcG9ydCB7YmluZEFjdGlvbkNyZWF0b3JzfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCBzdHlsZWQsIHtUaGVtZVByb3ZpZGVyLCB3aXRoVGhlbWV9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHtjcmVhdGVTZWxlY3Rvcn0gZnJvbSAncmVzZWxlY3QnO1xyXG5pbXBvcnQge2Nvbm5lY3QgYXMga2VwbGVyR2xDb25uZWN0fSBmcm9tICdjb25uZWN0L2tlcGxlcmdsLWNvbm5lY3QnO1xyXG5pbXBvcnQge0ludGxQcm92aWRlcn0gZnJvbSAncmVhY3QtaW50bCc7XHJcbmltcG9ydCB7bWVzc2FnZXN9IGZyb20gJy4uL2xvY2FsaXphdGlvbic7XHJcbmltcG9ydCB7Um9vdENvbnRleHR9IGZyb20gJ2NvbXBvbmVudHMvY29udGV4dCc7XHJcblxyXG5pbXBvcnQgKiBhcyBWaXNTdGF0ZUFjdGlvbnMgZnJvbSAnYWN0aW9ucy92aXMtc3RhdGUtYWN0aW9ucyc7XHJcbmltcG9ydCAqIGFzIE1hcFN0YXRlQWN0aW9ucyBmcm9tICdhY3Rpb25zL21hcC1zdGF0ZS1hY3Rpb25zJztcclxuaW1wb3J0ICogYXMgTWFwU3R5bGVBY3Rpb25zIGZyb20gJ2FjdGlvbnMvbWFwLXN0eWxlLWFjdGlvbnMnO1xyXG5pbXBvcnQgKiBhcyBVSVN0YXRlQWN0aW9ucyBmcm9tICdhY3Rpb25zL3VpLXN0YXRlLWFjdGlvbnMnO1xyXG5pbXBvcnQgKiBhcyBQcm92aWRlckFjdGlvbnMgZnJvbSAnYWN0aW9ucy9wcm92aWRlci1hY3Rpb25zJztcclxuXHJcbmltcG9ydCB7XHJcbiAgRVhQT1JUX0lNQUdFX0lELFxyXG4gIERJTUVOU0lPTlMsXHJcbiAgS0VQTEVSX0dMX05BTUUsXHJcbiAgS0VQTEVSX0dMX1ZFUlNJT04sXHJcbiAgVEhFTUUsXHJcbiAgREVGQVVMVF9NQVBCT1hfQVBJX1VSTCxcclxuICBTQVZFX01BUF9JRCxcclxuICBTSEFSRV9NQVBfSUQsXHJcbiAgT1ZFUldSSVRFX01BUF9JRFxyXG59IGZyb20gJ2NvbnN0YW50cy9kZWZhdWx0LXNldHRpbmdzJztcclxuaW1wb3J0IHtNSVNTSU5HX01BUEJPWF9UT0tFTn0gZnJvbSAnY29uc3RhbnRzL3VzZXItZmVlZGJhY2tzJztcclxuXHJcbmltcG9ydCBTaWRlUGFuZWxGYWN0b3J5IGZyb20gJy4vc2lkZS1wYW5lbCc7XHJcbmltcG9ydCBNYXBDb250YWluZXJGYWN0b3J5IGZyb20gJy4vbWFwLWNvbnRhaW5lcic7XHJcbmltcG9ydCBCb3R0b21XaWRnZXRGYWN0b3J5IGZyb20gJy4vYm90dG9tLXdpZGdldCc7XHJcbmltcG9ydCBNb2RhbENvbnRhaW5lckZhY3RvcnkgZnJvbSAnLi9tb2RhbC1jb250YWluZXInO1xyXG5pbXBvcnQgUGxvdENvbnRhaW5lckZhY3RvcnkgZnJvbSAnLi9wbG90LWNvbnRhaW5lcic7XHJcbmltcG9ydCBOb3RpZmljYXRpb25QYW5lbEZhY3RvcnkgZnJvbSAnLi9ub3RpZmljYXRpb24tcGFuZWwnO1xyXG5pbXBvcnQgR2VvQ29kZXJQYW5lbEZhY3RvcnkgZnJvbSAnLi9nZW9jb2Rlci1wYW5lbCc7XHJcblxyXG5pbXBvcnQge2dlbmVyYXRlSGFzaElkfSBmcm9tICd1dGlscy91dGlscyc7XHJcbmltcG9ydCB7dmFsaWRhdGVUb2tlbn0gZnJvbSAndXRpbHMvbWFwYm94LXV0aWxzJztcclxuXHJcbmltcG9ydCB7dGhlbWUgYXMgYmFzaWNUaGVtZSwgdGhlbWVMVCwgdGhlbWVCU30gZnJvbSAnc3R5bGVzL2Jhc2UnO1xyXG5cclxuLy8gTWF5YmUgd2Ugc2hvdWxkIHRoaW5rIGFib3V0IGV4cG9ydGluZyB0aGlzIG9yIGNyZWF0aW5nIGEgdmFyaWFibGVcclxuLy8gYXMgcGFydCBvZiB0aGUgYmFzZS5qcyB0aGVtZVxyXG5jb25zdCBHbG9iYWxTdHlsZSA9IHN0eWxlZC5kaXZgXHJcbiAgZm9udC1mYW1pbHk6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuZm9udEZhbWlseX07XHJcbiAgZm9udC13ZWlnaHQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuZm9udFdlaWdodH07XHJcbiAgZm9udC1zaXplOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmZvbnRTaXplfTtcclxuICBsaW5lLWhlaWdodDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5saW5lSGVpZ2h0fTtcclxuXHJcbiAgKixcclxuICAqOmJlZm9yZSxcclxuICAqOmFmdGVyIHtcclxuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgfVxyXG5cclxuICB1bCB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxuXHJcbiAgbGkge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuXHJcbiAgYSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5sYWJlbENvbG9yfTtcclxuICB9XHJcbmA7XHJcblxyXG5LZXBsZXJHbEZhY3RvcnkuZGVwcyA9IFtcclxuICBCb3R0b21XaWRnZXRGYWN0b3J5LFxyXG4gIEdlb0NvZGVyUGFuZWxGYWN0b3J5LFxyXG4gIE1hcENvbnRhaW5lckZhY3RvcnksXHJcbiAgTW9kYWxDb250YWluZXJGYWN0b3J5LFxyXG4gIFNpZGVQYW5lbEZhY3RvcnksXHJcbiAgUGxvdENvbnRhaW5lckZhY3RvcnksXHJcbiAgTm90aWZpY2F0aW9uUGFuZWxGYWN0b3J5XHJcbl07XHJcblxyXG5mdW5jdGlvbiBLZXBsZXJHbEZhY3RvcnkoXHJcbiAgQm90dG9tV2lkZ2V0LFxyXG4gIEdlb0NvZGVyUGFuZWwsXHJcbiAgTWFwQ29udGFpbmVyLFxyXG4gIE1vZGFsQ29udGFpbmVyLFxyXG4gIFNpZGVQYW5lbCxcclxuICBQbG90Q29udGFpbmVyLFxyXG4gIE5vdGlmaWNhdGlvblBhbmVsXHJcbikge1xyXG4gIGNsYXNzIEtlcGxlckdMIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XHJcbiAgICAgIG1hcFN0eWxlczogW10sXHJcbiAgICAgIG1hcFN0eWxlc1JlcGxhY2VEZWZhdWx0OiBmYWxzZSxcclxuICAgICAgbWFwYm94QXBpVXJsOiBERUZBVUxUX01BUEJPWF9BUElfVVJMLFxyXG4gICAgICB3aWR0aDogODAwLFxyXG4gICAgICBoZWlnaHQ6IDgwMCxcclxuICAgICAgYXBwTmFtZTogS0VQTEVSX0dMX05BTUUsXHJcbiAgICAgIHZlcnNpb246IEtFUExFUl9HTF9WRVJTSU9OLFxyXG4gICAgICBzaWRlUGFuZWxXaWR0aDogRElNRU5TSU9OUy5zaWRlUGFuZWwud2lkdGgsXHJcbiAgICAgIHRoZW1lOiB7fSxcclxuICAgICAgY2xvdWRQcm92aWRlcnM6IFtdXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICB0aGlzLl92YWxpZGF0ZU1hcGJveFRva2VuKCk7XHJcbiAgICAgIHRoaXMuX2xvYWRNYXBTdHlsZSh0aGlzLnByb3BzLm1hcFN0eWxlcyk7XHJcbiAgICAgIHRoaXMuX2hhbmRsZVJlc2l6ZSh0aGlzLnByb3BzKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XHJcbiAgICAgIGlmIChcclxuICAgICAgICAvLyBpZiBkaW1lbnNpb24gcHJvcHMgaGFzIGNoYW5nZWRcclxuICAgICAgICB0aGlzLnByb3BzLmhlaWdodCAhPT0gcHJldlByb3BzLmhlaWdodCB8fFxyXG4gICAgICAgIHRoaXMucHJvcHMud2lkdGggIT09IHByZXZQcm9wcy53aWR0aCB8fFxyXG4gICAgICAgIC8vIHJlYWN0LW1hcC1nbCB3aWxsIGRpc3BhdGNoIHVwZGF0ZVZpZXdwb3J0IGFmdGVyIHRoaXMuX2hhbmRsZVJlc2l6ZSBpcyBjYWxsZWRcclxuICAgICAgICAvLyBoZXJlIHdlIGNoZWNrIGlmIHRoaXMucHJvcHMubWFwU3RhdGUuaGVpZ2h0IGlzIHN5bmMgd2l0aCBwcm9wcy5oZWlnaHRcclxuICAgICAgICB0aGlzLnByb3BzLmhlaWdodCAhPT0gdGhpcy5wcm9wcy5tYXBTdGF0ZS5oZWlnaHRcclxuICAgICAgKSB7XHJcbiAgICAgICAgdGhpcy5faGFuZGxlUmVzaXplKHRoaXMucHJvcHMpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcm9vdCA9IGNyZWF0ZVJlZigpO1xyXG4gICAgc3RhdGljIGNvbnRleHRUeXBlID0gUm9vdENvbnRleHQ7XHJcblxyXG4gICAgLyogc2VsZWN0b3JzICovXHJcbiAgICB0aGVtZVNlbGVjdG9yID0gcHJvcHMgPT4gcHJvcHMudGhlbWU7XHJcbiAgICBhdmFpbGFibGVUaGVtZVNlbGVjdG9yID0gY3JlYXRlU2VsZWN0b3IodGhpcy50aGVtZVNlbGVjdG9yLCB0aGVtZSA9PlxyXG4gICAgICB0eXBlb2YgdGhlbWUgPT09ICdvYmplY3QnXHJcbiAgICAgICAgPyB7XHJcbiAgICAgICAgICAgIC4uLmJhc2ljVGhlbWUsXHJcbiAgICAgICAgICAgIC4uLnRoZW1lXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgOiB0aGVtZSA9PT0gVEhFTUUubGlnaHRcclxuICAgICAgICA/IHRoZW1lTFRcclxuICAgICAgICA6IHRoZW1lID09PSBUSEVNRS5iYXNlXHJcbiAgICAgICAgPyB0aGVtZUJTXHJcbiAgICAgICAgOiB0aGVtZVxyXG4gICAgKTtcclxuXHJcbiAgICBhdmFpbGFibGVQcm92aWRlcnMgPSBjcmVhdGVTZWxlY3RvcihcclxuICAgICAgcHJvcHMgPT4gcHJvcHMuY2xvdWRQcm92aWRlcnMsXHJcbiAgICAgIHByb3ZpZGVycyA9PlxyXG4gICAgICAgIEFycmF5LmlzQXJyYXkocHJvdmlkZXJzKSAmJiBwcm92aWRlcnMubGVuZ3RoXHJcbiAgICAgICAgICA/IHtcclxuICAgICAgICAgICAgICBoYXNTdG9yYWdlOiBwcm92aWRlcnMuc29tZShwID0+IHAuaGFzUHJpdmF0ZVN0b3JhZ2UoKSksXHJcbiAgICAgICAgICAgICAgaGFzU2hhcmU6IHByb3ZpZGVycy5zb21lKHAgPT4gcC5oYXNTaGFyaW5nVXJsKCkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIDoge31cclxuICAgICk7XHJcblxyXG4gICAgLyogcHJpdmF0ZSBtZXRob2RzICovXHJcbiAgICBfdmFsaWRhdGVNYXBib3hUb2tlbigpIHtcclxuICAgICAgY29uc3Qge21hcGJveEFwaUFjY2Vzc1Rva2VufSA9IHRoaXMucHJvcHM7XHJcbiAgICAgIGlmICghdmFsaWRhdGVUb2tlbihtYXBib3hBcGlBY2Nlc3NUb2tlbikpIHtcclxuICAgICAgICBDb25zb2xlLndhcm4oTUlTU0lOR19NQVBCT1hfVE9LRU4pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgX2hhbmRsZVJlc2l6ZSh7d2lkdGgsIGhlaWdodH0pIHtcclxuICAgICAgaWYgKCFOdW1iZXIuaXNGaW5pdGUod2lkdGgpIHx8ICFOdW1iZXIuaXNGaW5pdGUoaGVpZ2h0KSkge1xyXG4gICAgICAgIENvbnNvbGUud2Fybignd2lkdGggYW5kIGhlaWdodCBpcyByZXF1aXJlZCcpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnByb3BzLm1hcFN0YXRlQWN0aW9ucy51cGRhdGVNYXAoe1xyXG4gICAgICAgIHdpZHRoOiB3aWR0aCAvICgxICsgTnVtYmVyKHRoaXMucHJvcHMubWFwU3RhdGUuaXNTcGxpdCkpLFxyXG4gICAgICAgIGhlaWdodFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBfbG9hZE1hcFN0eWxlID0gKCkgPT4ge1xyXG4gICAgICBjb25zdCBkZWZhdWx0U3R5bGVzID0gT2JqZWN0LnZhbHVlcyh0aGlzLnByb3BzLm1hcFN0eWxlLm1hcFN0eWxlcyk7XHJcbiAgICAgIC8vIGFkZCBpZCB0byBjdXN0b20gbWFwIHN0eWxlcyBpZiBub3QgZ2l2ZW5cclxuICAgICAgY29uc3QgY3VzdG9tU3R5bGVzID0gKHRoaXMucHJvcHMubWFwU3R5bGVzIHx8IFtdKS5tYXAobXMgPT4gKHtcclxuICAgICAgICAuLi5tcyxcclxuICAgICAgICBpZDogbXMuaWQgfHwgZ2VuZXJhdGVIYXNoSWQoKVxyXG4gICAgICB9KSk7XHJcblxyXG4gICAgICBjb25zdCBhbGxTdHlsZXMgPSBbLi4uY3VzdG9tU3R5bGVzLCAuLi5kZWZhdWx0U3R5bGVzXS5yZWR1Y2UoXHJcbiAgICAgICAgKGFjY3UsIHN0eWxlKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBoYXNTdHlsZU9iamVjdCA9IHN0eWxlLnN0eWxlICYmIHR5cGVvZiBzdHlsZS5zdHlsZSA9PT0gJ29iamVjdCc7XHJcbiAgICAgICAgICBhY2N1W2hhc1N0eWxlT2JqZWN0ID8gJ3RvTG9hZCcgOiAndG9SZXF1ZXN0J11bc3R5bGUuaWRdID0gc3R5bGU7XHJcblxyXG4gICAgICAgICAgcmV0dXJuIGFjY3U7XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7dG9Mb2FkOiB7fSwgdG9SZXF1ZXN0OiB7fX1cclxuICAgICAgKTtcclxuXHJcbiAgICAgIHRoaXMucHJvcHMubWFwU3R5bGVBY3Rpb25zLmxvYWRNYXBTdHlsZXMoYWxsU3R5bGVzLnRvTG9hZCk7XHJcbiAgICAgIHRoaXMucHJvcHMubWFwU3R5bGVBY3Rpb25zLnJlcXVlc3RNYXBTdHlsZXMoYWxsU3R5bGVzLnRvUmVxdWVzdCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgY29uc3Qge1xyXG4gICAgICAgIC8vIHByb3BzXHJcbiAgICAgICAgaWQsXHJcbiAgICAgICAgYXBwTmFtZSxcclxuICAgICAgICB2ZXJzaW9uLFxyXG4gICAgICAgIGFwcFdlYnNpdGUsXHJcbiAgICAgICAgb25TYXZlTWFwLFxyXG4gICAgICAgIG9uVmlld1N0YXRlQ2hhbmdlLFxyXG4gICAgICAgIHdpZHRoLFxyXG4gICAgICAgIGhlaWdodCxcclxuICAgICAgICBtYXBib3hBcGlBY2Nlc3NUb2tlbixcclxuICAgICAgICBtYXBib3hBcGlVcmwsXHJcbiAgICAgICAgZ2V0TWFwYm94UmVmLFxyXG5cclxuICAgICAgICAvLyByZWR1eCBzdGF0ZVxyXG4gICAgICAgIG1hcFN0eWxlLFxyXG4gICAgICAgIG1hcFN0YXRlLFxyXG4gICAgICAgIHVpU3RhdGUsXHJcbiAgICAgICAgdmlzU3RhdGUsXHJcbiAgICAgICAgcHJvdmlkZXJTdGF0ZSxcclxuXHJcbiAgICAgICAgLy8gYWN0aW9ucyxcclxuICAgICAgICB2aXNTdGF0ZUFjdGlvbnMsXHJcbiAgICAgICAgbWFwU3RhdGVBY3Rpb25zLFxyXG4gICAgICAgIG1hcFN0eWxlQWN0aW9ucyxcclxuICAgICAgICB1aVN0YXRlQWN0aW9ucyxcclxuICAgICAgICBwcm92aWRlckFjdGlvbnMsXHJcbiAgICAgICAgZGlzcGF0Y2hcclxuICAgICAgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICBjb25zdCBhdmFpbGFibGVQcm92aWRlcnMgPSB0aGlzLmF2YWlsYWJsZVByb3ZpZGVycyh0aGlzLnByb3BzKTtcclxuXHJcbiAgICAgIGNvbnN0IHtcclxuICAgICAgICBmaWx0ZXJzLFxyXG4gICAgICAgIGxheWVycyxcclxuICAgICAgICBzcGxpdE1hcHMsIC8vIHRoaXMgd2lsbCBzdG9yZSBzdXBwb3J0IGZvciBzcGxpdCBtYXAgdmlldyBpcyBuZWNlc3NhcnlcclxuICAgICAgICBsYXllck9yZGVyLFxyXG4gICAgICAgIGxheWVyQmxlbmRpbmcsXHJcbiAgICAgICAgbGF5ZXJDbGFzc2VzLFxyXG4gICAgICAgIGludGVyYWN0aW9uQ29uZmlnLFxyXG4gICAgICAgIGRhdGFzZXRzLFxyXG4gICAgICAgIGxheWVyRGF0YSxcclxuICAgICAgICBob3ZlckluZm8sXHJcbiAgICAgICAgY2xpY2tlZCxcclxuICAgICAgICBtb3VzZVBvcyxcclxuICAgICAgICBhbmltYXRpb25Db25maWcsXHJcbiAgICAgICAgbWFwSW5mb1xyXG4gICAgICB9ID0gdmlzU3RhdGU7XHJcblxyXG4gICAgICBjb25zdCBub3RpZmljYXRpb25QYW5lbEZpZWxkcyA9IHtcclxuICAgICAgICByZW1vdmVOb3RpZmljYXRpb246IHVpU3RhdGVBY3Rpb25zLnJlbW92ZU5vdGlmaWNhdGlvbixcclxuICAgICAgICBub3RpZmljYXRpb25zOiB1aVN0YXRlLm5vdGlmaWNhdGlvbnNcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGNvbnN0IHNpZGVGaWVsZHMgPSB7XHJcbiAgICAgICAgYXBwTmFtZSxcclxuICAgICAgICB2ZXJzaW9uLFxyXG4gICAgICAgIGFwcFdlYnNpdGUsXHJcbiAgICAgICAgZGF0YXNldHMsXHJcbiAgICAgICAgZmlsdGVycyxcclxuICAgICAgICBsYXllcnMsXHJcbiAgICAgICAgbGF5ZXJPcmRlcixcclxuICAgICAgICBsYXllckNsYXNzZXMsXHJcbiAgICAgICAgaW50ZXJhY3Rpb25Db25maWcsXHJcbiAgICAgICAgbWFwU3R5bGUsXHJcbiAgICAgICAgbWFwSW5mbyxcclxuICAgICAgICBsYXllckJsZW5kaW5nLFxyXG4gICAgICAgIG9uU2F2ZU1hcCxcclxuICAgICAgICB1aVN0YXRlLFxyXG4gICAgICAgIG1hcFN0eWxlQWN0aW9ucyxcclxuICAgICAgICB2aXNTdGF0ZUFjdGlvbnMsXHJcbiAgICAgICAgdWlTdGF0ZUFjdGlvbnMsXHJcbiAgICAgICAgd2lkdGg6IHRoaXMucHJvcHMuc2lkZVBhbmVsV2lkdGgsXHJcbiAgICAgICAgYXZhaWxhYmxlUHJvdmlkZXJzLFxyXG4gICAgICAgIG1hcFNhdmVkOiBwcm92aWRlclN0YXRlLm1hcFNhdmVkXHJcbiAgICAgIH07XHJcblxyXG4gICAgICBjb25zdCBtYXBGaWVsZHMgPSB7XHJcbiAgICAgICAgZGF0YXNldHMsXHJcbiAgICAgICAgZ2V0TWFwYm94UmVmLFxyXG4gICAgICAgIG1hcGJveEFwaUFjY2Vzc1Rva2VuLFxyXG4gICAgICAgIG1hcGJveEFwaVVybCxcclxuICAgICAgICBtYXBTdGF0ZSxcclxuICAgICAgICB1aVN0YXRlLFxyXG4gICAgICAgIGVkaXRvcjogdmlzU3RhdGUuZWRpdG9yLFxyXG4gICAgICAgIG1hcFN0eWxlLFxyXG4gICAgICAgIG1hcENvbnRyb2xzOiB1aVN0YXRlLm1hcENvbnRyb2xzLFxyXG4gICAgICAgIGxheWVycyxcclxuICAgICAgICBsYXllck9yZGVyLFxyXG4gICAgICAgIGxheWVyRGF0YSxcclxuICAgICAgICBsYXllckJsZW5kaW5nLFxyXG4gICAgICAgIGZpbHRlcnMsXHJcbiAgICAgICAgaW50ZXJhY3Rpb25Db25maWcsXHJcbiAgICAgICAgaG92ZXJJbmZvLFxyXG4gICAgICAgIGNsaWNrZWQsXHJcbiAgICAgICAgbW91c2VQb3MsXHJcbiAgICAgICAgcmVhZE9ubHk6IHVpU3RhdGUucmVhZE9ubHksXHJcbiAgICAgICAgb25WaWV3U3RhdGVDaGFuZ2UsXHJcbiAgICAgICAgdWlTdGF0ZUFjdGlvbnMsXHJcbiAgICAgICAgdmlzU3RhdGVBY3Rpb25zLFxyXG4gICAgICAgIG1hcFN0YXRlQWN0aW9ucyxcclxuICAgICAgICBhbmltYXRpb25Db25maWdcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGNvbnN0IGlzU3BsaXQgPSBzcGxpdE1hcHMgJiYgc3BsaXRNYXBzLmxlbmd0aCA+IDE7XHJcbiAgICAgIGNvbnN0IGNvbnRhaW5lclcgPSBtYXBTdGF0ZS53aWR0aCAqIChOdW1iZXIoaXNTcGxpdCkgKyAxKTtcclxuXHJcbiAgICAgIGNvbnN0IG1hcENvbnRhaW5lcnMgPSAhaXNTcGxpdFxyXG4gICAgICAgID8gWzxNYXBDb250YWluZXIga2V5PXswfSBpbmRleD17MH0gey4uLm1hcEZpZWxkc30gbWFwTGF5ZXJzPXtudWxsfSAvPl1cclxuICAgICAgICA6IHNwbGl0TWFwcy5tYXAoKHNldHRpbmdzLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICA8TWFwQ29udGFpbmVyXHJcbiAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICBpbmRleD17aW5kZXh9XHJcbiAgICAgICAgICAgICAgey4uLm1hcEZpZWxkc31cclxuICAgICAgICAgICAgICBtYXBMYXllcnM9e3NwbGl0TWFwc1tpbmRleF0ubGF5ZXJzfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgKSk7XHJcblxyXG4gICAgICBjb25zdCBpc0V4cG9ydGluZyA9XHJcbiAgICAgICAgdWlTdGF0ZS5jdXJyZW50TW9kYWwgPT09IEVYUE9SVF9JTUFHRV9JRCB8fFxyXG4gICAgICAgIHVpU3RhdGUuY3VycmVudE1vZGFsID09PSBTQVZFX01BUF9JRCB8fFxyXG4gICAgICAgIHVpU3RhdGUuY3VycmVudE1vZGFsID09PSBTSEFSRV9NQVBfSUQgfHxcclxuICAgICAgICB1aVN0YXRlLmN1cnJlbnRNb2RhbCA9PT0gT1ZFUldSSVRFX01BUF9JRDtcclxuXHJcbiAgICAgIGNvbnN0IHRoZW1lID0gdGhpcy5hdmFpbGFibGVUaGVtZVNlbGVjdG9yKHRoaXMucHJvcHMpO1xyXG5cclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8Um9vdENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3RoaXMucm9vdH0+XHJcbiAgICAgICAgICA8SW50bFByb3ZpZGVyIGxvY2FsZT17dWlTdGF0ZS5sb2NhbGV9IG1lc3NhZ2VzPXttZXNzYWdlc1t1aVN0YXRlLmxvY2FsZV19PlxyXG4gICAgICAgICAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxyXG4gICAgICAgICAgICAgIDxHbG9iYWxTdHlsZVxyXG4gICAgICAgICAgICAgICAgd2lkdGg9e3dpZHRofVxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0PXtoZWlnaHR9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJrZXBsZXItZ2xcIlxyXG4gICAgICAgICAgICAgICAgaWQ9e2BrZXBsZXItZ2xfXyR7aWR9YH1cclxuICAgICAgICAgICAgICAgIHJlZj17dGhpcy5yb290fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxOb3RpZmljYXRpb25QYW5lbCB7Li4ubm90aWZpY2F0aW9uUGFuZWxGaWVsZHN9IC8+XHJcbiAgICAgICAgICAgICAgICB7IXVpU3RhdGUucmVhZE9ubHkgJiYgPFNpZGVQYW5lbCB7Li4uc2lkZUZpZWxkc30gLz59XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1hcHNcIiBzdHlsZT17e2Rpc3BsYXk6ICdmbGV4J319PlxyXG4gICAgICAgICAgICAgICAgICB7bWFwQ29udGFpbmVyc31cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAge2lzRXhwb3J0aW5nICYmIChcclxuICAgICAgICAgICAgICAgICAgPFBsb3RDb250YWluZXJcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aD17d2lkdGh9XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXtoZWlnaHR9XHJcbiAgICAgICAgICAgICAgICAgICAgZXhwb3J0SW1hZ2VTZXR0aW5nPXt1aVN0YXRlLmV4cG9ydEltYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgIG1hcEZpZWxkcz17bWFwRmllbGRzfVxyXG4gICAgICAgICAgICAgICAgICAgIGFkZE5vdGlmaWNhdGlvbj17dWlTdGF0ZUFjdGlvbnMuYWRkTm90aWZpY2F0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0RXhwb3J0aW5nSW1hZ2U9e3VpU3RhdGVBY3Rpb25zLnN0YXJ0RXhwb3J0aW5nSW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0RXhwb3J0SW1hZ2VEYXRhVXJpPXt1aVN0YXRlQWN0aW9ucy5zZXRFeHBvcnRJbWFnZURhdGFVcml9XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0RXhwb3J0SW1hZ2VFcnJvcj17dWlTdGF0ZUFjdGlvbnMuc2V0RXhwb3J0SW1hZ2VFcnJvcn1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICB7IXVpU3RhdGUucmVhZE9ubHkgJiYgaW50ZXJhY3Rpb25Db25maWcuZ2VvY29kZXIuZW5hYmxlZCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgIDxHZW9Db2RlclBhbmVsXHJcbiAgICAgICAgICAgICAgICAgICAgaXNHZW9jb2RlckVuYWJsZWQ9e2ludGVyYWN0aW9uQ29uZmlnLmdlb2NvZGVyLmVuYWJsZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgbWFwYm94QXBpQWNjZXNzVG9rZW49e21hcGJveEFwaUFjY2Vzc1Rva2VufVxyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoPXtkaXNwYXRjaH1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8Qm90dG9tV2lkZ2V0XHJcbiAgICAgICAgICAgICAgICAgIGZpbHRlcnM9e2ZpbHRlcnN9XHJcbiAgICAgICAgICAgICAgICAgIGRhdGFzZXRzPXtkYXRhc2V0c31cclxuICAgICAgICAgICAgICAgICAgdWlTdGF0ZT17dWlTdGF0ZX1cclxuICAgICAgICAgICAgICAgICAgbGF5ZXJzPXtsYXllcnN9XHJcbiAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbkNvbmZpZz17YW5pbWF0aW9uQ29uZmlnfVxyXG4gICAgICAgICAgICAgICAgICB2aXNTdGF0ZUFjdGlvbnM9e3Zpc1N0YXRlQWN0aW9uc31cclxuICAgICAgICAgICAgICAgICAgc2lkZVBhbmVsV2lkdGg9e1xyXG4gICAgICAgICAgICAgICAgICAgIHVpU3RhdGUucmVhZE9ubHkgPyAwIDogdGhpcy5wcm9wcy5zaWRlUGFuZWxXaWR0aCArIHRoZW1lLnNpZGVQYW5lbC5tYXJnaW4ubGVmdFxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIGNvbnRhaW5lclc9e2NvbnRhaW5lcld9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPE1vZGFsQ29udGFpbmVyXHJcbiAgICAgICAgICAgICAgICAgIG1hcFN0eWxlPXttYXBTdHlsZX1cclxuICAgICAgICAgICAgICAgICAgdmlzU3RhdGU9e3Zpc1N0YXRlfVxyXG4gICAgICAgICAgICAgICAgICBtYXBTdGF0ZT17bWFwU3RhdGV9XHJcbiAgICAgICAgICAgICAgICAgIHVpU3RhdGU9e3VpU3RhdGV9XHJcbiAgICAgICAgICAgICAgICAgIG1hcGJveEFwaUFjY2Vzc1Rva2VuPXttYXBib3hBcGlBY2Nlc3NUb2tlbn1cclxuICAgICAgICAgICAgICAgICAgbWFwYm94QXBpVXJsPXttYXBib3hBcGlVcmx9XHJcbiAgICAgICAgICAgICAgICAgIHZpc1N0YXRlQWN0aW9ucz17dmlzU3RhdGVBY3Rpb25zfVxyXG4gICAgICAgICAgICAgICAgICB1aVN0YXRlQWN0aW9ucz17dWlTdGF0ZUFjdGlvbnN9XHJcbiAgICAgICAgICAgICAgICAgIG1hcFN0eWxlQWN0aW9ucz17bWFwU3R5bGVBY3Rpb25zfVxyXG4gICAgICAgICAgICAgICAgICBwcm92aWRlckFjdGlvbnM9e3Byb3ZpZGVyQWN0aW9uc31cclxuICAgICAgICAgICAgICAgICAgcm9vdE5vZGU9e3RoaXMucm9vdC5jdXJyZW50fVxyXG4gICAgICAgICAgICAgICAgICBjb250YWluZXJXPXtjb250YWluZXJXfVxyXG4gICAgICAgICAgICAgICAgICBjb250YWluZXJIPXttYXBTdGF0ZS5oZWlnaHR9XHJcbiAgICAgICAgICAgICAgICAgIHByb3ZpZGVyU3RhdGU9e3RoaXMucHJvcHMucHJvdmlkZXJTdGF0ZX1cclxuICAgICAgICAgICAgICAgICAgLy8gVXNlciBkZWZpbmVkIGNsb3VkIHByb3ZpZGVyIHByb3BzXHJcbiAgICAgICAgICAgICAgICAgIGNsb3VkUHJvdmlkZXJzPXt0aGlzLnByb3BzLmNsb3VkUHJvdmlkZXJzfVxyXG4gICAgICAgICAgICAgICAgICBvbkV4cG9ydFRvQ2xvdWRTdWNjZXNzPXt0aGlzLnByb3BzLm9uRXhwb3J0VG9DbG91ZFN1Y2Nlc3N9XHJcbiAgICAgICAgICAgICAgICAgIG9uTG9hZENsb3VkTWFwU3VjY2Vzcz17dGhpcy5wcm9wcy5vbkxvYWRDbG91ZE1hcFN1Y2Nlc3N9XHJcbiAgICAgICAgICAgICAgICAgIG9uTG9hZENsb3VkTWFwRXJyb3I9e3RoaXMucHJvcHMub25Mb2FkQ2xvdWRNYXBFcnJvcn1cclxuICAgICAgICAgICAgICAgICAgb25FeHBvcnRUb0Nsb3VkRXJyb3I9e3RoaXMucHJvcHMub25FeHBvcnRUb0Nsb3VkRXJyb3J9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvR2xvYmFsU3R5bGU+XHJcbiAgICAgICAgICAgIDwvVGhlbWVQcm92aWRlcj5cclxuICAgICAgICAgIDwvSW50bFByb3ZpZGVyPlxyXG4gICAgICAgIDwvUm9vdENvbnRleHQuUHJvdmlkZXI+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4ga2VwbGVyR2xDb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFrZU1hcERpc3BhdGNoVG9Qcm9wcykod2l0aFRoZW1lKEtlcGxlckdMKSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSA9IHt9LCBwcm9wcykge1xyXG4gIHJldHVybiB7XHJcbiAgICAuLi5wcm9wcyxcclxuICAgIHZpc1N0YXRlOiBzdGF0ZS52aXNTdGF0ZSxcclxuICAgIG1hcFN0eWxlOiBzdGF0ZS5tYXBTdHlsZSxcclxuICAgIG1hcFN0YXRlOiBzdGF0ZS5tYXBTdGF0ZSxcclxuICAgIHVpU3RhdGU6IHN0YXRlLnVpU3RhdGUsXHJcbiAgICBwcm92aWRlclN0YXRlOiBzdGF0ZS5wcm92aWRlclN0YXRlXHJcbiAgfTtcclxufVxyXG5cclxuY29uc3QgZGVmYXVsdFVzZXJBY3Rpb25zID0ge307XHJcbmNvbnN0IGdldERpc3BhdGNoID0gZGlzcGF0Y2ggPT4gZGlzcGF0Y2g7XHJcbmNvbnN0IGdldFVzZXJBY3Rpb25zID0gKGRpc3BhdGNoLCBwcm9wcykgPT4gcHJvcHMuYWN0aW9ucyB8fCBkZWZhdWx0VXNlckFjdGlvbnM7XHJcblxyXG5mdW5jdGlvbiBtYWtlR2V0QWN0aW9uQ3JlYXRvcnMoKSB7XHJcbiAgcmV0dXJuIGNyZWF0ZVNlbGVjdG9yKFtnZXREaXNwYXRjaCwgZ2V0VXNlckFjdGlvbnNdLCAoZGlzcGF0Y2gsIHVzZXJBY3Rpb25zKSA9PiB7XHJcbiAgICBjb25zdCBbdmlzU3RhdGVBY3Rpb25zLCBtYXBTdGF0ZUFjdGlvbnMsIG1hcFN0eWxlQWN0aW9ucywgdWlTdGF0ZUFjdGlvbnMsIHByb3ZpZGVyQWN0aW9uc10gPSBbXHJcbiAgICAgIFZpc1N0YXRlQWN0aW9ucyxcclxuICAgICAgTWFwU3RhdGVBY3Rpb25zLFxyXG4gICAgICBNYXBTdHlsZUFjdGlvbnMsXHJcbiAgICAgIFVJU3RhdGVBY3Rpb25zLFxyXG4gICAgICBQcm92aWRlckFjdGlvbnNcclxuICAgIF0ubWFwKGFjdGlvbnMgPT4gYmluZEFjdGlvbkNyZWF0b3JzKG1lcmdlQWN0aW9ucyhhY3Rpb25zLCB1c2VyQWN0aW9ucyksIGRpc3BhdGNoKSk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdmlzU3RhdGVBY3Rpb25zLFxyXG4gICAgICBtYXBTdGF0ZUFjdGlvbnMsXHJcbiAgICAgIG1hcFN0eWxlQWN0aW9ucyxcclxuICAgICAgdWlTdGF0ZUFjdGlvbnMsXHJcbiAgICAgIHByb3ZpZGVyQWN0aW9ucyxcclxuICAgICAgZGlzcGF0Y2hcclxuICAgIH07XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1ha2VNYXBEaXNwYXRjaFRvUHJvcHMoKSB7XHJcbiAgY29uc3QgZ2V0QWN0aW9uQ3JlYXRvcnMgPSBtYWtlR2V0QWN0aW9uQ3JlYXRvcnMoKTtcclxuICBjb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gsIG93blByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBncm91cGVkQWN0aW9uQ3JlYXRvcnMgPSBnZXRBY3Rpb25DcmVhdG9ycyhkaXNwYXRjaCwgb3duUHJvcHMpO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIC4uLmdyb3VwZWRBY3Rpb25DcmVhdG9ycyxcclxuICAgICAgZGlzcGF0Y2hcclxuICAgIH07XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIG1hcERpc3BhdGNoVG9Qcm9wcztcclxufVxyXG5cclxuLyoqXHJcbiAqIE92ZXJyaWRlIGRlZmF1bHQga2VwbGVyLmdsIGFjdGlvbnMgd2l0aCB1c2VyIGRlZmluZWQgYWN0aW9ucyB1c2luZyB0aGUgc2FtZSBrZXlcclxuICovXHJcbmZ1bmN0aW9uIG1lcmdlQWN0aW9ucyhhY3Rpb25zLCB1c2VyQWN0aW9ucykge1xyXG4gIGNvbnN0IG92ZXJyaWRlcyA9IHt9O1xyXG4gIGZvciAoY29uc3Qga2V5IGluIHVzZXJBY3Rpb25zKSB7XHJcbiAgICBpZiAodXNlckFjdGlvbnMuaGFzT3duUHJvcGVydHkoa2V5KSAmJiBhY3Rpb25zLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuICAgICAgb3ZlcnJpZGVzW2tleV0gPSB1c2VyQWN0aW9uc1trZXldO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHsuLi5hY3Rpb25zLCAuLi5vdmVycmlkZXN9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBLZXBsZXJHbEZhY3Rvcnk7XHJcbiJdfQ==