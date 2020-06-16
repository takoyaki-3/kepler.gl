"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = SidePanelFactory;
exports.PanelTitleFactory = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _reactIntl = require("react-intl");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _lodash = _interopRequireDefault(require("lodash.get"));

var _sideBar = _interopRequireDefault(require("./side-panel/side-bar"));

var _panelHeader = _interopRequireDefault(require("./side-panel/panel-header"));

var _layerManager = _interopRequireDefault(require("./side-panel/layer-manager"));

var _filterManager = _interopRequireDefault(require("./side-panel/filter-manager"));

var _interactionManager = _interopRequireDefault(require("./side-panel/interaction-manager"));

var _mapManager = _interopRequireDefault(require("./side-panel/map-manager"));

var _panelToggle = _interopRequireDefault(require("./side-panel/panel-toggle"));

var _customPanel = _interopRequireDefault(require("./side-panel/custom-panel"));

var _defaultSettings = require("../constants/default-settings");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  color: ", ";\n  font-size: 20px;\n  font-weight: 400;\n  letter-spacing: 1.25px;\n  margin-bottom: 14px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  ", ";\n  flex-grow: 1;\n  padding: ", "px;\n  overflow-y: scroll;\n  overflow-x: hidden;\n\n  .side-panel__content__inner {\n    display: flex;\n    height: 100%;\n    flex-direction: column;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var SidePanelContent = _styledComponents["default"].div(_templateObject(), function (props) {
  return props.theme.sidePanelScrollBar;
}, function (props) {
  return props.theme.sidePanelInnerPadding;
});

var PanelTitleFactory = function PanelTitleFactory() {
  return _styledComponents["default"].div(_templateObject2(), function (props) {
    return props.theme.titleTextColor;
  });
};

exports.PanelTitleFactory = PanelTitleFactory;
SidePanelFactory.deps = [_sideBar["default"], _panelHeader["default"], _panelToggle["default"], PanelTitleFactory, _layerManager["default"], _filterManager["default"], _interactionManager["default"], _mapManager["default"], _customPanel["default"]];
/**
 *
 * Vertical sidebar containing input components for the rendering layers
 */

function SidePanelFactory(Sidebar, PanelHeader, PanelToggle, PanelTitle, LayerManager, FilterManager, InteractionManager, MapManager, CustomPanels) {
  var customPanels = (0, _lodash["default"])(CustomPanels, ['defaultProps', 'panels']) || [];

  var getCustomPanelProps = (0, _lodash["default"])(CustomPanels, ['defaultProps', 'getProps']) || function () {
    return {};
  };

  var SidePanel = /*#__PURE__*/function (_PureComponent) {
    (0, _inherits2["default"])(SidePanel, _PureComponent);

    var _super = _createSuper(SidePanel);

    function SidePanel() {
      var _this;

      (0, _classCallCheck2["default"])(this, SidePanel);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onOpenOrClose", function () {
        _this.props.uiStateActions.toggleSidePanel(_this.props.uiState.activeSidePanel ? null : 'layer');
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_showDatasetTable", function (dataId) {
        // this will open data table modal
        _this.props.visStateActions.showDatasetTable(dataId);

        _this.props.uiStateActions.toggleModal(_defaultSettings.DATA_TABLE_ID);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_showAddDataModal", function () {
        _this.props.uiStateActions.toggleModal(_defaultSettings.ADD_DATA_ID);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_showAddMapStyleModal", function () {
        _this.props.uiStateActions.toggleModal(_defaultSettings.ADD_MAP_STYLE_ID);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_removeDataset", function (key) {
        // this will show the modal dialog to confirm deletion
        _this.props.uiStateActions.openDeleteModal(key);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onClickExportImage", function () {
        return _this.props.uiStateActions.toggleModal(_defaultSettings.EXPORT_IMAGE_ID);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onClickExportData", function () {
        return _this.props.uiStateActions.toggleModal(_defaultSettings.EXPORT_DATA_ID);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onClickExportMap", function () {
        return _this.props.uiStateActions.toggleModal(_defaultSettings.EXPORT_MAP_ID);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onClickSaveToStorage", function () {
        _this.props.uiStateActions.toggleModal(_this.props.mapSaved ? _defaultSettings.OVERWRITE_MAP_ID : _defaultSettings.SAVE_MAP_ID);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onClickSaveAsToStorage", function () {
        // add (copy) to file name
        _this.props.visStateActions.setMapInfo({
          title: "".concat(_this.props.mapInfo.title || 'Kepler.gl', " (Copy)")
        });

        _this.props.uiStateActions.toggleModal(_defaultSettings.SAVE_MAP_ID);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onClickShareMap", function () {
        return _this.props.uiStateActions.toggleModal(_defaultSettings.SHARE_MAP_ID);
      });
      return _this;
    }

    (0, _createClass2["default"])(SidePanel, [{
      key: "render",
      // eslint-disable-next-line complexity
      value: function render() {
        var _this$props = this.props,
            appName = _this$props.appName,
            appWebsite = _this$props.appWebsite,
            version = _this$props.version,
            datasets = _this$props.datasets,
            filters = _this$props.filters,
            layers = _this$props.layers,
            layerBlending = _this$props.layerBlending,
            layerClasses = _this$props.layerClasses,
            uiState = _this$props.uiState,
            layerOrder = _this$props.layerOrder,
            interactionConfig = _this$props.interactionConfig,
            visStateActions = _this$props.visStateActions,
            mapStyleActions = _this$props.mapStyleActions,
            uiStateActions = _this$props.uiStateActions,
            availableProviders = _this$props.availableProviders;
        var activeSidePanel = uiState.activeSidePanel;
        var isOpen = Boolean(activeSidePanel);
        var panels = [].concat((0, _toConsumableArray2["default"])(this.props.panels), (0, _toConsumableArray2["default"])(customPanels));
        var layerManagerActions = {
          addLayer: visStateActions.addLayer,
          layerConfigChange: visStateActions.layerConfigChange,
          layerColorUIChange: visStateActions.layerColorUIChange,
          layerTextLabelChange: visStateActions.layerTextLabelChange,
          layerVisualChannelConfigChange: visStateActions.layerVisualChannelConfigChange,
          layerTypeChange: visStateActions.layerTypeChange,
          layerVisConfigChange: visStateActions.layerVisConfigChange,
          updateLayerBlending: visStateActions.updateLayerBlending,
          updateLayerOrder: visStateActions.reorderLayer,
          showDatasetTable: this._showDatasetTable,
          showAddDataModal: this._showAddDataModal,
          removeLayer: visStateActions.removeLayer,
          removeDataset: this._removeDataset,
          openModal: uiStateActions.toggleModal
        };
        var filterManagerActions = {
          addFilter: visStateActions.addFilter,
          removeFilter: visStateActions.removeFilter,
          setFilter: visStateActions.setFilter,
          showDatasetTable: this._showDatasetTable,
          showAddDataModal: this._showAddDataModal,
          toggleAnimation: visStateActions.toggleFilterAnimation,
          enlargeFilter: visStateActions.enlargeFilter,
          toggleFilterFeature: visStateActions.toggleFilterFeature
        };
        var interactionManagerActions = {
          onConfigChange: visStateActions.interactionConfigChange
        };
        var mapManagerActions = {
          addMapStyleUrl: mapStyleActions.addMapStyleUrl,
          onConfigChange: mapStyleActions.mapConfigChange,
          onStyleChange: mapStyleActions.mapStyleChange,
          onBuildingChange: mapStyleActions.mapBuildingChange,
          set3dBuildingColor: mapStyleActions.set3dBuildingColor,
          showAddMapStyleModal: this._showAddMapStyleModal
        };
        return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(Sidebar, {
          width: this.props.width,
          isOpen: isOpen,
          minifiedWidth: 0,
          onOpenOrClose: this._onOpenOrClose
        }, /*#__PURE__*/_react["default"].createElement(PanelHeader, {
          appName: appName,
          version: version,
          appWebsite: appWebsite,
          visibleDropdown: uiState.visibleDropdown,
          showExportDropdown: uiStateActions.showExportDropdown,
          hideExportDropdown: uiStateActions.hideExportDropdown,
          onExportImage: this._onClickExportImage,
          onExportData: this._onClickExportData,
          onExportMap: this._onClickExportMap,
          onSaveMap: this.props.onSaveMap,
          onSaveToStorage: availableProviders.hasStorage ? this._onClickSaveToStorage : null,
          onSaveAsToStorage: availableProviders.hasStorage && this.props.mapSaved ? this._onClickSaveAsToStorage : null,
          onShareMap: availableProviders.hasShare ? this._onClickShareMap : null
        }), /*#__PURE__*/_react["default"].createElement(PanelToggle, {
          panels: panels,
          activePanel: activeSidePanel,
          togglePanel: uiStateActions.toggleSidePanel
        }), /*#__PURE__*/_react["default"].createElement(SidePanelContent, {
          className: "side-panel__content"
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: "side-panel__content__inner"
        }, /*#__PURE__*/_react["default"].createElement(PanelTitle, {
          className: "side-panel__content__title"
        }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
          id: (panels.find(function (_ref) {
            var id = _ref.id;
            return id === activeSidePanel;
          }) || {}).label
        })), activeSidePanel === 'layer' && /*#__PURE__*/_react["default"].createElement(LayerManager, (0, _extends2["default"])({}, layerManagerActions, {
          datasets: datasets,
          layers: layers,
          layerClasses: layerClasses,
          layerOrder: layerOrder,
          layerBlending: layerBlending,
          colorPalette: uiState.colorPalette
        })), activeSidePanel === 'filter' && /*#__PURE__*/_react["default"].createElement(FilterManager, (0, _extends2["default"])({}, filterManagerActions, {
          datasets: datasets,
          layers: layers,
          filters: filters
        })), activeSidePanel === 'interaction' && /*#__PURE__*/_react["default"].createElement(InteractionManager, (0, _extends2["default"])({}, interactionManagerActions, {
          datasets: datasets,
          interactionConfig: interactionConfig
        })), activeSidePanel === 'map' && /*#__PURE__*/_react["default"].createElement(MapManager, (0, _extends2["default"])({}, mapManagerActions, {
          mapStyle: this.props.mapStyle
        })), (customPanels || []).find(function (p) {
          return p.id === activeSidePanel;
        }) ? /*#__PURE__*/_react["default"].createElement(CustomPanels, (0, _extends2["default"])({}, getCustomPanelProps(this.props), {
          activeSidePanel: activeSidePanel
        })) : null))));
      }
    }]);
    return SidePanel;
  }(_react.PureComponent);

  (0, _defineProperty2["default"])(SidePanel, "propTypes", {
    filters: _propTypes["default"].arrayOf(_propTypes["default"].any).isRequired,
    interactionConfig: _propTypes["default"].object.isRequired,
    layerBlending: _propTypes["default"].string.isRequired,
    layers: _propTypes["default"].arrayOf(_propTypes["default"].any).isRequired,
    layerClasses: _propTypes["default"].object.isRequired,
    mapStyle: _propTypes["default"].object.isRequired,
    width: _propTypes["default"].number.isRequired,
    datasets: _propTypes["default"].object.isRequired,
    visStateActions: _propTypes["default"].object.isRequired,
    mapStyleActions: _propTypes["default"].object.isRequired,
    availableProviders: _propTypes["default"].object,
    mapSaved: _propTypes["default"].string,
    panels: _propTypes["default"].arrayOf(_propTypes["default"].object)
  });
  (0, _defineProperty2["default"])(SidePanel, "defaultProps", {
    panels: _defaultSettings.SIDEBAR_PANELS,
    uiState: {},
    visStateActions: {},
    mapStyleActions: {},
    uiStateActions: {},
    availableProviders: {}
  });
  return SidePanel;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL3NpZGUtcGFuZWwuanMiXSwibmFtZXMiOlsiU2lkZVBhbmVsQ29udGVudCIsInN0eWxlZCIsImRpdiIsInByb3BzIiwidGhlbWUiLCJzaWRlUGFuZWxTY3JvbGxCYXIiLCJzaWRlUGFuZWxJbm5lclBhZGRpbmciLCJQYW5lbFRpdGxlRmFjdG9yeSIsInRpdGxlVGV4dENvbG9yIiwiU2lkZVBhbmVsRmFjdG9yeSIsImRlcHMiLCJTaWRlYmFyRmFjdG9yeSIsIlBhbmVsSGVhZGVyRmFjdG9yeSIsIlBhbmVsVG9nZ2xlRmFjdG9yeSIsIkxheWVyTWFuYWdlckZhY3RvcnkiLCJGaWx0ZXJNYW5hZ2VyRmFjdG9yeSIsIkludGVyYWN0aW9uTWFuYWdlckZhY3RvcnkiLCJNYXBNYW5hZ2VyRmFjdG9yeSIsIkN1c3RvbVBhbmVsc0ZhY3RvcnkiLCJTaWRlYmFyIiwiUGFuZWxIZWFkZXIiLCJQYW5lbFRvZ2dsZSIsIlBhbmVsVGl0bGUiLCJMYXllck1hbmFnZXIiLCJGaWx0ZXJNYW5hZ2VyIiwiSW50ZXJhY3Rpb25NYW5hZ2VyIiwiTWFwTWFuYWdlciIsIkN1c3RvbVBhbmVscyIsImN1c3RvbVBhbmVscyIsImdldEN1c3RvbVBhbmVsUHJvcHMiLCJTaWRlUGFuZWwiLCJ1aVN0YXRlQWN0aW9ucyIsInRvZ2dsZVNpZGVQYW5lbCIsInVpU3RhdGUiLCJhY3RpdmVTaWRlUGFuZWwiLCJkYXRhSWQiLCJ2aXNTdGF0ZUFjdGlvbnMiLCJzaG93RGF0YXNldFRhYmxlIiwidG9nZ2xlTW9kYWwiLCJEQVRBX1RBQkxFX0lEIiwiQUREX0RBVEFfSUQiLCJBRERfTUFQX1NUWUxFX0lEIiwia2V5Iiwib3BlbkRlbGV0ZU1vZGFsIiwiRVhQT1JUX0lNQUdFX0lEIiwiRVhQT1JUX0RBVEFfSUQiLCJFWFBPUlRfTUFQX0lEIiwibWFwU2F2ZWQiLCJPVkVSV1JJVEVfTUFQX0lEIiwiU0FWRV9NQVBfSUQiLCJzZXRNYXBJbmZvIiwidGl0bGUiLCJtYXBJbmZvIiwiU0hBUkVfTUFQX0lEIiwiYXBwTmFtZSIsImFwcFdlYnNpdGUiLCJ2ZXJzaW9uIiwiZGF0YXNldHMiLCJmaWx0ZXJzIiwibGF5ZXJzIiwibGF5ZXJCbGVuZGluZyIsImxheWVyQ2xhc3NlcyIsImxheWVyT3JkZXIiLCJpbnRlcmFjdGlvbkNvbmZpZyIsIm1hcFN0eWxlQWN0aW9ucyIsImF2YWlsYWJsZVByb3ZpZGVycyIsImlzT3BlbiIsIkJvb2xlYW4iLCJwYW5lbHMiLCJsYXllck1hbmFnZXJBY3Rpb25zIiwiYWRkTGF5ZXIiLCJsYXllckNvbmZpZ0NoYW5nZSIsImxheWVyQ29sb3JVSUNoYW5nZSIsImxheWVyVGV4dExhYmVsQ2hhbmdlIiwibGF5ZXJWaXN1YWxDaGFubmVsQ29uZmlnQ2hhbmdlIiwibGF5ZXJUeXBlQ2hhbmdlIiwibGF5ZXJWaXNDb25maWdDaGFuZ2UiLCJ1cGRhdGVMYXllckJsZW5kaW5nIiwidXBkYXRlTGF5ZXJPcmRlciIsInJlb3JkZXJMYXllciIsIl9zaG93RGF0YXNldFRhYmxlIiwic2hvd0FkZERhdGFNb2RhbCIsIl9zaG93QWRkRGF0YU1vZGFsIiwicmVtb3ZlTGF5ZXIiLCJyZW1vdmVEYXRhc2V0IiwiX3JlbW92ZURhdGFzZXQiLCJvcGVuTW9kYWwiLCJmaWx0ZXJNYW5hZ2VyQWN0aW9ucyIsImFkZEZpbHRlciIsInJlbW92ZUZpbHRlciIsInNldEZpbHRlciIsInRvZ2dsZUFuaW1hdGlvbiIsInRvZ2dsZUZpbHRlckFuaW1hdGlvbiIsImVubGFyZ2VGaWx0ZXIiLCJ0b2dnbGVGaWx0ZXJGZWF0dXJlIiwiaW50ZXJhY3Rpb25NYW5hZ2VyQWN0aW9ucyIsIm9uQ29uZmlnQ2hhbmdlIiwiaW50ZXJhY3Rpb25Db25maWdDaGFuZ2UiLCJtYXBNYW5hZ2VyQWN0aW9ucyIsImFkZE1hcFN0eWxlVXJsIiwibWFwQ29uZmlnQ2hhbmdlIiwib25TdHlsZUNoYW5nZSIsIm1hcFN0eWxlQ2hhbmdlIiwib25CdWlsZGluZ0NoYW5nZSIsIm1hcEJ1aWxkaW5nQ2hhbmdlIiwic2V0M2RCdWlsZGluZ0NvbG9yIiwic2hvd0FkZE1hcFN0eWxlTW9kYWwiLCJfc2hvd0FkZE1hcFN0eWxlTW9kYWwiLCJ3aWR0aCIsIl9vbk9wZW5PckNsb3NlIiwidmlzaWJsZURyb3Bkb3duIiwic2hvd0V4cG9ydERyb3Bkb3duIiwiaGlkZUV4cG9ydERyb3Bkb3duIiwiX29uQ2xpY2tFeHBvcnRJbWFnZSIsIl9vbkNsaWNrRXhwb3J0RGF0YSIsIl9vbkNsaWNrRXhwb3J0TWFwIiwib25TYXZlTWFwIiwiaGFzU3RvcmFnZSIsIl9vbkNsaWNrU2F2ZVRvU3RvcmFnZSIsIl9vbkNsaWNrU2F2ZUFzVG9TdG9yYWdlIiwiaGFzU2hhcmUiLCJfb25DbGlja1NoYXJlTWFwIiwiZmluZCIsImlkIiwibGFiZWwiLCJjb2xvclBhbGV0dGUiLCJtYXBTdHlsZSIsInAiLCJQdXJlQ29tcG9uZW50IiwiUHJvcFR5cGVzIiwiYXJyYXlPZiIsImFueSIsImlzUmVxdWlyZWQiLCJvYmplY3QiLCJzdHJpbmciLCJudW1iZXIiLCJTSURFQkFSX1BBTkVMUyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBYUEsSUFBTUEsZ0JBQWdCLEdBQUdDLDZCQUFPQyxHQUFWLG9CQUNsQixVQUFBQyxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLGtCQUFoQjtBQUFBLENBRGEsRUFHVCxVQUFBRixLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlFLHFCQUFoQjtBQUFBLENBSEksQ0FBdEI7O0FBY08sSUFBTUMsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQjtBQUFBLFNBQU1OLDZCQUFPQyxHQUFiLHFCQUN0QixVQUFBQyxLQUFLO0FBQUEsV0FBSUEsS0FBSyxDQUFD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LHNCQUFVTSxNQUFWLENBQWlCSCxVQVBQO0FBUWpCM0UsSUFBQUEsUUFBUSxFQUFFd0Usc0JBQVVJLE1BQVYsQ0FBaUJELFVBUlY7QUFTakJoRyxJQUFBQSxlQUFlLEVBQUU2RixzQkFBVUksTUFBVixDQUFpQkQsVUFUakI7QUFVakJwRSxJQUFBQSxlQUFlLEVBQUVpRSxzQkFBVUksTUFBVixDQUFpQkQsVUFWakI7QUFXakJuRSxJQUFBQSxrQkFBa0IsRUFBRWdFLHNCQUFVSSxNQVhiO0FBWWpCdEYsSUFBQUEsUUFBUSxFQUFFa0Ysc0JBQVVLLE1BWkg7QUFhakJsRSxJQUFBQSxNQUFNLEVBQUU2RCxzQkFBVUMsT0FBVixDQUFrQkQsc0JBQVVJLE1BQTVCO0FBYlMsR0FMckI7QUFBQSxtQ0FJTXZHLFNBSk4sa0JBcUJ3QjtBQUNwQnNDLElBQUFBLE1BQU0sRUFBRW9FLCtCQURZO0FBRXBCdkcsSUFBQUEsT0FBTyxFQUFFLEVBRlc7QUFHcEJHLElBQUFBLGVBQWUsRUFBRSxFQUhHO0FBSXBCNEIsSUFBQUEsZUFBZSxFQUFFLEVBSkc7QUFLcEJqQyxJQUFBQSxjQUFjLEVBQUUsRUFMSTtBQU1wQmtDLElBQUFBLGtCQUFrQixFQUFFO0FBTkEsR0FyQnhCO0FBK05BLFNBQU9uQyxTQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QsIHtQdXJlQ29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7Rm9ybWF0dGVkTWVzc2FnZX0gZnJvbSAncmVhY3QtaW50bCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgZ2V0IGZyb20gJ2xvZGFzaC5nZXQnO1xyXG5cclxuaW1wb3J0IFNpZGViYXJGYWN0b3J5IGZyb20gJy4vc2lkZS1wYW5lbC9zaWRlLWJhcic7XHJcbmltcG9ydCBQYW5lbEhlYWRlckZhY3RvcnkgZnJvbSAnLi9zaWRlLXBhbmVsL3BhbmVsLWhlYWRlcic7XHJcbmltcG9ydCBMYXllck1hbmFnZXJGYWN0b3J5IGZyb20gJy4vc2lkZS1wYW5lbC9sYXllci1tYW5hZ2VyJztcclxuaW1wb3J0IEZpbHRlck1hbmFnZXJGYWN0b3J5IGZyb20gJy4vc2lkZS1wYW5lbC9maWx0ZXItbWFuYWdlcic7XHJcbmltcG9ydCBJbnRlcmFjdGlvbk1hbmFnZXJGYWN0b3J5IGZyb20gJy4vc2lkZS1wYW5lbC9pbnRlcmFjdGlvbi1tYW5hZ2VyJztcclxuaW1wb3J0IE1hcE1hbmFnZXJGYWN0b3J5IGZyb20gJy4vc2lkZS1wYW5lbC9tYXAtbWFuYWdlcic7XHJcbmltcG9ydCBQYW5lbFRvZ2dsZUZhY3RvcnkgZnJvbSAnLi9zaWRlLXBhbmVsL3BhbmVsLXRvZ2dsZSc7XHJcbmltcG9ydCBDdXN0b21QYW5lbHNGYWN0b3J5IGZyb20gJy4vc2lkZS1wYW5lbC9jdXN0b20tcGFuZWwnO1xyXG5cclxuaW1wb3J0IHtcclxuICBBRERfREFUQV9JRCxcclxuICBBRERfTUFQX1NUWUxFX0lELFxyXG4gIERBVEFfVEFCTEVfSUQsXHJcbiAgRVhQT1JUX0lNQUdFX0lELFxyXG4gIEVYUE9SVF9EQVRBX0lELFxyXG4gIEVYUE9SVF9NQVBfSUQsXHJcbiAgU0FWRV9NQVBfSUQsXHJcbiAgU0hBUkVfTUFQX0lELFxyXG4gIFNJREVCQVJfUEFORUxTLFxyXG4gIE9WRVJXUklURV9NQVBfSURcclxufSBmcm9tICdjb25zdGFudHMvZGVmYXVsdC1zZXR0aW5ncyc7XHJcblxyXG5jb25zdCBTaWRlUGFuZWxDb250ZW50ID0gc3R5bGVkLmRpdmBcclxuICAke3Byb3BzID0+IHByb3BzLnRoZW1lLnNpZGVQYW5lbFNjcm9sbEJhcn07XHJcbiAgZmxleC1ncm93OiAxO1xyXG4gIHBhZGRpbmc6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc2lkZVBhbmVsSW5uZXJQYWRkaW5nfXB4O1xyXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcblxyXG4gIC5zaWRlLXBhbmVsX19jb250ZW50X19pbm5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgUGFuZWxUaXRsZUZhY3RvcnkgPSAoKSA9PiBzdHlsZWQuZGl2YFxyXG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRpdGxlVGV4dENvbG9yfTtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBsZXR0ZXItc3BhY2luZzogMS4yNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDE0cHg7XHJcbmA7XHJcblxyXG5TaWRlUGFuZWxGYWN0b3J5LmRlcHMgPSBbXHJcbiAgU2lkZWJhckZhY3RvcnksXHJcbiAgUGFuZWxIZWFkZXJGYWN0b3J5LFxyXG4gIFBhbmVsVG9nZ2xlRmFjdG9yeSxcclxuICBQYW5lbFRpdGxlRmFjdG9yeSxcclxuICBMYXllck1hbmFnZXJGYWN0b3J5LFxyXG4gIEZpbHRlck1hbmFnZXJGYWN0b3J5LFxyXG4gIEludGVyYWN0aW9uTWFuYWdlckZhY3RvcnksXHJcbiAgTWFwTWFuYWdlckZhY3RvcnksXHJcbiAgQ3VzdG9tUGFuZWxzRmFjdG9yeVxyXG5dO1xyXG5cclxuLyoqXHJcbiAqXHJcbiAqIFZlcnRpY2FsIHNpZGViYXIgY29udGFpbmluZyBpbnB1dCBjb21wb25lbnRzIGZvciB0aGUgcmVuZGVyaW5nIGxheWVyc1xyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2lkZVBhbmVsRmFjdG9yeShcclxuICBTaWRlYmFyLFxyXG4gIFBhbmVsSGVhZGVyLFxyXG4gIFBhbmVsVG9nZ2xlLFxyXG4gIFBhbmVsVGl0bGUsXHJcbiAgTGF5ZXJNYW5hZ2VyLFxyXG4gIEZpbHRlck1hbmFnZXIsXHJcbiAgSW50ZXJhY3Rpb25NYW5hZ2VyLFxyXG4gIE1hcE1hbmFnZXIsXHJcbiAgQ3VzdG9tUGFuZWxzXHJcbikge1xyXG4gIGNvbnN0IGN1c3RvbVBhbmVscyA9IGdldChDdXN0b21QYW5lbHMsIFsnZGVmYXVsdFByb3BzJywgJ3BhbmVscyddKSB8fCBbXTtcclxuICBjb25zdCBnZXRDdXN0b21QYW5lbFByb3BzID0gZ2V0KEN1c3RvbVBhbmVscywgWydkZWZhdWx0UHJvcHMnLCAnZ2V0UHJvcHMnXSkgfHwgKCgpID0+ICh7fSkpO1xyXG5cclxuICBjbGFzcyBTaWRlUGFuZWwgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcclxuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XHJcbiAgICAgIGZpbHRlcnM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5hbnkpLmlzUmVxdWlyZWQsXHJcbiAgICAgIGludGVyYWN0aW9uQ29uZmlnOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXHJcbiAgICAgIGxheWVyQmxlbmRpbmc6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgICAgbGF5ZXJzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuYW55KS5pc1JlcXVpcmVkLFxyXG4gICAgICBsYXllckNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcclxuICAgICAgbWFwU3R5bGU6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcclxuICAgICAgd2lkdGg6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcclxuICAgICAgZGF0YXNldHM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcclxuICAgICAgdmlzU3RhdGVBY3Rpb25zOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXHJcbiAgICAgIG1hcFN0eWxlQWN0aW9uczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxyXG4gICAgICBhdmFpbGFibGVQcm92aWRlcnM6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgICAgIG1hcFNhdmVkOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICBwYW5lbHM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpXHJcbiAgICB9O1xyXG5cclxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XHJcbiAgICAgIHBhbmVsczogU0lERUJBUl9QQU5FTFMsXHJcbiAgICAgIHVpU3RhdGU6IHt9LFxyXG4gICAgICB2aXNTdGF0ZUFjdGlvbnM6IHt9LFxyXG4gICAgICBtYXBTdHlsZUFjdGlvbnM6IHt9LFxyXG4gICAgICB1aVN0YXRlQWN0aW9uczoge30sXHJcbiAgICAgIGF2YWlsYWJsZVByb3ZpZGVyczoge31cclxuICAgIH07XHJcblxyXG4gICAgLyogY29tcG9uZW50IHByaXZhdGUgZnVuY3Rpb25zICovXHJcbiAgICBfb25PcGVuT3JDbG9zZSA9ICgpID0+IHtcclxuICAgICAgdGhpcy5wcm9wcy51aVN0YXRlQWN0aW9ucy50b2dnbGVTaWRlUGFuZWwoXHJcbiAgICAgICAgdGhpcy5wcm9wcy51aVN0YXRlLmFjdGl2ZVNpZGVQYW5lbCA/IG51bGwgOiAnbGF5ZXInXHJcbiAgICAgICk7XHJcbiAgICB9O1xyXG5cclxuICAgIF9zaG93RGF0YXNldFRhYmxlID0gZGF0YUlkID0+IHtcclxuICAgICAgLy8gdGhpcyB3aWxsIG9wZW4gZGF0YSB0YWJsZSBtb2RhbFxyXG4gICAgICB0aGlzLnByb3BzLnZpc1N0YXRlQWN0aW9ucy5zaG93RGF0YXNldFRhYmxlKGRhdGFJZCk7XHJcbiAgICAgIHRoaXMucHJvcHMudWlTdGF0ZUFjdGlvbnMudG9nZ2xlTW9kYWwoREFUQV9UQUJMRV9JRCk7XHJcbiAgICB9O1xyXG5cclxuICAgIF9zaG93QWRkRGF0YU1vZGFsID0gKCkgPT4ge1xyXG4gICAgICB0aGlzLnByb3BzLnVpU3RhdGVBY3Rpb25zLnRvZ2dsZU1vZGFsKEFERF9EQVRBX0lEKTtcclxuICAgIH07XHJcblxyXG4gICAgX3Nob3dBZGRNYXBTdHlsZU1vZGFsID0gKCkgPT4ge1xyXG4gICAgICB0aGlzLnByb3BzLnVpU3RhdGVBY3Rpb25zLnRvZ2dsZU1vZGFsKEFERF9NQVBfU1RZTEVfSUQpO1xyXG4gICAgfTtcclxuXHJcbiAgICBfcmVtb3ZlRGF0YXNldCA9IGtleSA9PiB7XHJcbiAgICAgIC8vIHRoaXMgd2lsbCBzaG93IHRoZSBtb2RhbCBkaWFsb2cgdG8gY29uZmlybSBkZWxldGlvblxyXG4gICAgICB0aGlzLnByb3BzLnVpU3RhdGVBY3Rpb25zLm9wZW5EZWxldGVNb2RhbChrZXkpO1xyXG4gICAgfTtcclxuXHJcbiAgICBfb25DbGlja0V4cG9ydEltYWdlID0gKCkgPT4gdGhpcy5wcm9wcy51aVN0YXRlQWN0aW9ucy50b2dnbGVNb2RhbChFWFBPUlRfSU1BR0VfSUQpO1xyXG5cclxuICAgIF9vbkNsaWNrRXhwb3J0RGF0YSA9ICgpID0+IHRoaXMucHJvcHMudWlTdGF0ZUFjdGlvbnMudG9nZ2xlTW9kYWwoRVhQT1JUX0RBVEFfSUQpO1xyXG5cclxuICAgIF9vbkNsaWNrRXhwb3J0TWFwID0gKCkgPT4gdGhpcy5wcm9wcy51aVN0YXRlQWN0aW9ucy50b2dnbGVNb2RhbChFWFBPUlRfTUFQX0lEKTtcclxuXHJcbiAgICBfb25DbGlja1NhdmVUb1N0b3JhZ2UgPSAoKSA9PiB7XHJcbiAgICAgIHRoaXMucHJvcHMudWlTdGF0ZUFjdGlvbnMudG9nZ2xlTW9kYWwodGhpcy5wcm9wcy5tYXBTYXZlZCA/IE9WRVJXUklURV9NQVBfSUQgOiBTQVZFX01BUF9JRCk7XHJcbiAgICB9O1xyXG5cclxuICAgIF9vbkNsaWNrU2F2ZUFzVG9TdG9yYWdlID0gKCkgPT4ge1xyXG4gICAgICAvLyBhZGQgKGNvcHkpIHRvIGZpbGUgbmFtZVxyXG4gICAgICB0aGlzLnByb3BzLnZpc1N0YXRlQWN0aW9ucy5zZXRNYXBJbmZvKHtcclxuICAgICAgICB0aXRsZTogYCR7dGhpcy5wcm9wcy5tYXBJbmZvLnRpdGxlIHx8ICdLZXBsZXIuZ2wnfSAoQ29weSlgXHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLnByb3BzLnVpU3RhdGVBY3Rpb25zLnRvZ2dsZU1vZGFsKFNBVkVfTUFQX0lEKTtcclxuICAgIH07XHJcblxyXG4gICAgX29uQ2xpY2tTaGFyZU1hcCA9ICgpID0+IHRoaXMucHJvcHMudWlTdGF0ZUFjdGlvbnMudG9nZ2xlTW9kYWwoU0hBUkVfTUFQX0lEKTtcclxuXHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29tcGxleGl0eVxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICBjb25zdCB7XHJcbiAgICAgICAgYXBwTmFtZSxcclxuICAgICAgICBhcHBXZWJzaXRlLFxyXG4gICAgICAgIHZlcnNpb24sXHJcbiAgICAgICAgZGF0YXNldHMsXHJcbiAgICAgICAgZmlsdGVycyxcclxuICAgICAgICBsYXllcnMsXHJcbiAgICAgICAgbGF5ZXJCbGVuZGluZyxcclxuICAgICAgICBsYXllckNsYXNzZXMsXHJcbiAgICAgICAgdWlTdGF0ZSxcclxuICAgICAgICBsYXllck9yZGVyLFxyXG4gICAgICAgIGludGVyYWN0aW9uQ29uZmlnLFxyXG4gICAgICAgIHZpc1N0YXRlQWN0aW9ucyxcclxuICAgICAgICBtYXBTdHlsZUFjdGlvbnMsXHJcbiAgICAgICAgdWlTdGF0ZUFjdGlvbnMsXHJcbiAgICAgICAgYXZhaWxhYmxlUHJvdmlkZXJzXHJcbiAgICAgIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgY29uc3Qge2FjdGl2ZVNpZGVQYW5lbH0gPSB1aVN0YXRlO1xyXG4gICAgICBjb25zdCBpc09wZW4gPSBCb29sZWFuKGFjdGl2ZVNpZGVQYW5lbCk7XHJcbiAgICAgIGNvbnN0IHBhbmVscyA9IFsuLi50aGlzLnByb3BzLnBhbmVscywgLi4uY3VzdG9tUGFuZWxzXTtcclxuXHJcbiAgICAgIGNvbnN0IGxheWVyTWFuYWdlckFjdGlvbnMgPSB7XHJcbiAgICAgICAgYWRkTGF5ZXI6IHZpc1N0YXRlQWN0aW9ucy5hZGRMYXllcixcclxuICAgICAgICBsYXllckNvbmZpZ0NoYW5nZTogdmlzU3RhdGVBY3Rpb25zLmxheWVyQ29uZmlnQ2hhbmdlLFxyXG4gICAgICAgIGxheWVyQ29sb3JVSUNoYW5nZTogdmlzU3RhdGVBY3Rpb25zLmxheWVyQ29sb3JVSUNoYW5nZSxcclxuICAgICAgICBsYXllclRleHRMYWJlbENoYW5nZTogdmlzU3RhdGVBY3Rpb25zLmxheWVyVGV4dExhYmVsQ2hhbmdlLFxyXG4gICAgICAgIGxheWVyVmlzdWFsQ2hhbm5lbENvbmZpZ0NoYW5nZTogdmlzU3RhdGVBY3Rpb25zLmxheWVyVmlzdWFsQ2hhbm5lbENvbmZpZ0NoYW5nZSxcclxuICAgICAgICBsYXllclR5cGVDaGFuZ2U6IHZpc1N0YXRlQWN0aW9ucy5sYXllclR5cGVDaGFuZ2UsXHJcbiAgICAgICAgbGF5ZXJWaXNDb25maWdDaGFuZ2U6IHZpc1N0YXRlQWN0aW9ucy5sYXllclZpc0NvbmZpZ0NoYW5nZSxcclxuICAgICAgICB1cGRhdGVMYXllckJsZW5kaW5nOiB2aXNTdGF0ZUFjdGlvbnMudXBkYXRlTGF5ZXJCbGVuZGluZyxcclxuICAgICAgICB1cGRhdGVMYXllck9yZGVyOiB2aXNTdGF0ZUFjdGlvbnMucmVvcmRlckxheWVyLFxyXG4gICAgICAgIHNob3dEYXRhc2V0VGFibGU6IHRoaXMuX3Nob3dEYXRhc2V0VGFibGUsXHJcbiAgICAgICAgc2hvd0FkZERhdGFNb2RhbDogdGhpcy5fc2hvd0FkZERhdGFNb2RhbCxcclxuICAgICAgICByZW1vdmVMYXllcjogdmlzU3RhdGVBY3Rpb25zLnJlbW92ZUxheWVyLFxyXG4gICAgICAgIHJlbW92ZURhdGFzZXQ6IHRoaXMuX3JlbW92ZURhdGFzZXQsXHJcbiAgICAgICAgb3Blbk1vZGFsOiB1aVN0YXRlQWN0aW9ucy50b2dnbGVNb2RhbFxyXG4gICAgICB9O1xyXG5cclxuICAgICAgY29uc3QgZmlsdGVyTWFuYWdlckFjdGlvbnMgPSB7XHJcbiAgICAgICAgYWRkRmlsdGVyOiB2aXNTdGF0ZUFjdGlvbnMuYWRkRmlsdGVyLFxyXG4gICAgICAgIHJlbW92ZUZpbHRlcjogdmlzU3RhdGVBY3Rpb25zLnJlbW92ZUZpbHRlcixcclxuICAgICAgICBzZXRGaWx0ZXI6IHZpc1N0YXRlQWN0aW9ucy5zZXRGaWx0ZXIsXHJcbiAgICAgICAgc2hvd0RhdGFzZXRUYWJsZTogdGhpcy5fc2hvd0RhdGFzZXRUYWJsZSxcclxuICAgICAgICBzaG93QWRkRGF0YU1vZGFsOiB0aGlzLl9zaG93QWRkRGF0YU1vZGFsLFxyXG4gICAgICAgIHRvZ2dsZUFuaW1hdGlvbjogdmlzU3RhdGVBY3Rpb25zLnRvZ2dsZUZpbHRlckFuaW1hdGlvbixcclxuICAgICAgICBlbmxhcmdlRmlsdGVyOiB2aXNTdGF0ZUFjdGlvbnMuZW5sYXJnZUZpbHRlcixcclxuICAgICAgICB0b2dnbGVGaWx0ZXJGZWF0dXJlOiB2aXNTdGF0ZUFjdGlvbnMudG9nZ2xlRmlsdGVyRmVhdHVyZVxyXG4gICAgICB9O1xyXG5cclxuICAgICAgY29uc3QgaW50ZXJhY3Rpb25NYW5hZ2VyQWN0aW9ucyA9IHtcclxuICAgICAgICBvbkNvbmZpZ0NoYW5nZTogdmlzU3RhdGVBY3Rpb25zLmludGVyYWN0aW9uQ29uZmlnQ2hhbmdlXHJcbiAgICAgIH07XHJcblxyXG4gICAgICBjb25zdCBtYXBNYW5hZ2VyQWN0aW9ucyA9IHtcclxuICAgICAgICBhZGRNYXBTdHlsZVVybDogbWFwU3R5bGVBY3Rpb25zLmFkZE1hcFN0eWxlVXJsLFxyXG4gICAgICAgIG9uQ29uZmlnQ2hhbmdlOiBtYXBTdHlsZUFjdGlvbnMubWFwQ29uZmlnQ2hhbmdlLFxyXG4gICAgICAgIG9uU3R5bGVDaGFuZ2U6IG1hcFN0eWxlQWN0aW9ucy5tYXBTdHlsZUNoYW5nZSxcclxuICAgICAgICBvbkJ1aWxkaW5nQ2hhbmdlOiBtYXBTdHlsZUFjdGlvbnMubWFwQnVpbGRpbmdDaGFuZ2UsXHJcbiAgICAgICAgc2V0M2RCdWlsZGluZ0NvbG9yOiBtYXBTdHlsZUFjdGlvbnMuc2V0M2RCdWlsZGluZ0NvbG9yLFxyXG4gICAgICAgIHNob3dBZGRNYXBTdHlsZU1vZGFsOiB0aGlzLl9zaG93QWRkTWFwU3R5bGVNb2RhbFxyXG4gICAgICB9O1xyXG5cclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPFNpZGViYXJcclxuICAgICAgICAgICAgd2lkdGg9e3RoaXMucHJvcHMud2lkdGh9XHJcbiAgICAgICAgICAgIGlzT3Blbj17aXNPcGVufVxyXG4gICAgICAgICAgICBtaW5pZmllZFdpZHRoPXswfVxyXG4gICAgICAgICAgICBvbk9wZW5PckNsb3NlPXt0aGlzLl9vbk9wZW5PckNsb3NlfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8UGFuZWxIZWFkZXJcclxuICAgICAgICAgICAgICBhcHBOYW1lPXthcHBOYW1lfVxyXG4gICAgICAgICAgICAgIHZlcnNpb249e3ZlcnNpb259XHJcbiAgICAgICAgICAgICAgYXBwV2Vic2l0ZT17YXBwV2Vic2l0ZX1cclxuICAgICAgICAgICAgICB2aXNpYmxlRHJvcGRvd249e3VpU3RhdGUudmlzaWJsZURyb3Bkb3dufVxyXG4gICAgICAgICAgICAgIHNob3dFeHBvcnREcm9wZG93bj17dWlTdGF0ZUFjdGlvbnMuc2hvd0V4cG9ydERyb3Bkb3dufVxyXG4gICAgICAgICAgICAgIGhpZGVFeHBvcnREcm9wZG93bj17dWlTdGF0ZUFjdGlvbnMuaGlkZUV4cG9ydERyb3Bkb3dufVxyXG4gICAgICAgICAgICAgIG9uRXhwb3J0SW1hZ2U9e3RoaXMuX29uQ2xpY2tFeHBvcnRJbWFnZX1cclxuICAgICAgICAgICAgICBvbkV4cG9ydERhdGE9e3RoaXMuX29uQ2xpY2tFeHBvcnREYXRhfVxyXG4gICAgICAgICAgICAgIG9uRXhwb3J0TWFwPXt0aGlzLl9vbkNsaWNrRXhwb3J0TWFwfVxyXG4gICAgICAgICAgICAgIG9uU2F2ZU1hcD17dGhpcy5wcm9wcy5vblNhdmVNYXB9XHJcbiAgICAgICAgICAgICAgb25TYXZlVG9TdG9yYWdlPXthdmFpbGFibGVQcm92aWRlcnMuaGFzU3RvcmFnZSA/IHRoaXMuX29uQ2xpY2tTYXZlVG9TdG9yYWdlIDogbnVsbH1cclxuICAgICAgICAgICAgICBvblNhdmVBc1RvU3RvcmFnZT17XHJcbiAgICAgICAgICAgICAgICBhdmFpbGFibGVQcm92aWRlcnMuaGFzU3RvcmFnZSAmJiB0aGlzLnByb3BzLm1hcFNhdmVkXHJcbiAgICAgICAgICAgICAgICAgID8gdGhpcy5fb25DbGlja1NhdmVBc1RvU3RvcmFnZVxyXG4gICAgICAgICAgICAgICAgICA6IG51bGxcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgb25TaGFyZU1hcD17YXZhaWxhYmxlUHJvdmlkZXJzLmhhc1NoYXJlID8gdGhpcy5fb25DbGlja1NoYXJlTWFwIDogbnVsbH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPFBhbmVsVG9nZ2xlXHJcbiAgICAgICAgICAgICAgcGFuZWxzPXtwYW5lbHN9XHJcbiAgICAgICAgICAgICAgYWN0aXZlUGFuZWw9e2FjdGl2ZVNpZGVQYW5lbH1cclxuICAgICAgICAgICAgICB0b2dnbGVQYW5lbD17dWlTdGF0ZUFjdGlvbnMudG9nZ2xlU2lkZVBhbmVsfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8U2lkZVBhbmVsQ29udGVudCBjbGFzc05hbWU9XCJzaWRlLXBhbmVsX19jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWRlLXBhbmVsX19jb250ZW50X19pbm5lclwiPlxyXG4gICAgICAgICAgICAgICAgPFBhbmVsVGl0bGUgY2xhc3NOYW1lPVwic2lkZS1wYW5lbF9fY29udGVudF9fdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2VcclxuICAgICAgICAgICAgICAgICAgICBpZD17KHBhbmVscy5maW5kKCh7aWR9KSA9PiBpZCA9PT0gYWN0aXZlU2lkZVBhbmVsKSB8fCB7fSkubGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L1BhbmVsVGl0bGU+XHJcbiAgICAgICAgICAgICAgICB7YWN0aXZlU2lkZVBhbmVsID09PSAnbGF5ZXInICYmIChcclxuICAgICAgICAgICAgICAgICAgPExheWVyTWFuYWdlclxyXG4gICAgICAgICAgICAgICAgICAgIHsuLi5sYXllck1hbmFnZXJBY3Rpb25zfVxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGFzZXRzPXtkYXRhc2V0c31cclxuICAgICAgICAgICAgICAgICAgICBsYXllcnM9e2xheWVyc31cclxuICAgICAgICAgICAgICAgICAgICBsYXllckNsYXNzZXM9e2xheWVyQ2xhc3Nlc31cclxuICAgICAgICAgICAgICAgICAgICBsYXllck9yZGVyPXtsYXllck9yZGVyfVxyXG4gICAgICAgICAgICAgICAgICAgIGxheWVyQmxlbmRpbmc9e2xheWVyQmxlbmRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3JQYWxldHRlPXt1aVN0YXRlLmNvbG9yUGFsZXR0ZX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICB7YWN0aXZlU2lkZVBhbmVsID09PSAnZmlsdGVyJyAmJiAoXHJcbiAgICAgICAgICAgICAgICAgIDxGaWx0ZXJNYW5hZ2VyXHJcbiAgICAgICAgICAgICAgICAgICAgey4uLmZpbHRlck1hbmFnZXJBY3Rpb25zfVxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGFzZXRzPXtkYXRhc2V0c31cclxuICAgICAgICAgICAgICAgICAgICBsYXllcnM9e2xheWVyc31cclxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXJzPXtmaWx0ZXJzfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIHthY3RpdmVTaWRlUGFuZWwgPT09ICdpbnRlcmFjdGlvbicgJiYgKFxyXG4gICAgICAgICAgICAgICAgICA8SW50ZXJhY3Rpb25NYW5hZ2VyXHJcbiAgICAgICAgICAgICAgICAgICAgey4uLmludGVyYWN0aW9uTWFuYWdlckFjdGlvbnN9XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YXNldHM9e2RhdGFzZXRzfVxyXG4gICAgICAgICAgICAgICAgICAgIGludGVyYWN0aW9uQ29uZmlnPXtpbnRlcmFjdGlvbkNvbmZpZ31cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICB7YWN0aXZlU2lkZVBhbmVsID09PSAnbWFwJyAmJiAoXHJcbiAgICAgICAgICAgICAgICAgIDxNYXBNYW5hZ2VyIHsuLi5tYXBNYW5hZ2VyQWN0aW9uc30gbWFwU3R5bGU9e3RoaXMucHJvcHMubWFwU3R5bGV9IC8+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgeyhjdXN0b21QYW5lbHMgfHwgW10pLmZpbmQocCA9PiBwLmlkID09PSBhY3RpdmVTaWRlUGFuZWwpID8gKFxyXG4gICAgICAgICAgICAgICAgICA8Q3VzdG9tUGFuZWxzXHJcbiAgICAgICAgICAgICAgICAgICAgey4uLmdldEN1c3RvbVBhbmVsUHJvcHModGhpcy5wcm9wcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlU2lkZVBhbmVsPXthY3RpdmVTaWRlUGFuZWx9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9TaWRlUGFuZWxDb250ZW50PlxyXG4gICAgICAgICAgPC9TaWRlYmFyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIFNpZGVQYW5lbDtcclxufVxyXG4iXX0=