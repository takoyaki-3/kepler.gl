"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

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

var _reselect = require("reselect");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactIntl = require("react-intl");

var _classnames = _interopRequireDefault(require("classnames"));

var _styledComponents2 = require("../common/styled-components");

var _mapLayerSelector = _interopRequireDefault(require("../common/map-layer-selector"));

var _logo = _interopRequireDefault(require("../common/logo"));

var _mapLegend = _interopRequireDefault(require("./map-legend"));

var _icons = require("../common/icons");

var _verticalToolbar = _interopRequireDefault(require("../common/vertical-toolbar"));

var _toolbarItem = _interopRequireDefault(require("../common/toolbar-item"));

var _defaultSettings = require("../../constants/default-settings");

var _locales = require("../../localization/locales");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _templateObject6() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  position: absolute;\n  right: 32px;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  justify-content: space-between;\n  background-color: ", ";\n  height: 32px;\n  padding: 6px 12px;\n  font-size: 11px;\n  color: ", ";\n  position: relative;\n\n  button {\n    width: 18px;\n    height: 18px;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  ", ";\n  max-height: 500px;\n  min-height: 100px;\n  overflow: auto;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  background-color: ", ";\n  flex-grow: 1;\n  z-index: 1;\n  p {\n    margin-bottom: 0;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  padding: 4px 0;\n  display: flex;\n  justify-content: flex-end;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  right: 0;\n  width: ", "px;\n  padding: ", "px;\n  z-index: 10;\n  top: ", "px;\n  position: absolute;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var StyledMapControl = _styledComponents["default"].div(_templateObject(), function (props) {
  return props.theme.mapControl.width;
}, function (props) {
  return props.theme.mapControl.padding;
}, function (props) {
  return props.top;
});

var StyledMapControlAction = _styledComponents["default"].div(_templateObject2());

var StyledMapControlPanel = _styledComponents["default"].div(_templateObject3(), function (props) {
  return props.theme.mapPanelBackgroundColor;
});

var StyledMapControlPanelContent = _styledComponents["default"].div(_templateObject4(), function (props) {
  return props.theme.dropdownScrollBar;
});

var StyledMapControlPanelHeader = _styledComponents["default"].div(_templateObject5(), function (props) {
  return props.theme.mapPanelHeaderBackgroundColor;
}, function (props) {
  return props.theme.titleTextColor;
});

var ActionPanel = function ActionPanel(_ref) {
  var className = _ref.className,
      children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement(StyledMapControlAction, {
    className: className
  }, children);
};

ActionPanel.displayName = 'ActionPanel';

var MapControlTooltip = /*#__PURE__*/_react["default"].memo(function (_ref2) {
  var id = _ref2.id,
      message = _ref2.message;
  return /*#__PURE__*/_react["default"].createElement(_styledComponents2.Tooltip, {
    id: id,
    place: "left",
    effect: "solid"
  }, /*#__PURE__*/_react["default"].createElement("span", null, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: message
  })));
});

MapControlTooltip.displayName = 'MapControlTooltip';

var MapLegendTooltip = function MapLegendTooltip(_ref3) {
  var id = _ref3.id,
      message = _ref3.message;
  return /*#__PURE__*/_react["default"].createElement(_styledComponents2.Tooltip, {
    id: id,
    place: "left",
    effect: "solid"
  }, /*#__PURE__*/_react["default"].createElement("span", null, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: message
  })));
};

var LayerSelectorPanel = /*#__PURE__*/_react["default"].memo(function (_ref4) {
  var items = _ref4.items,
      onMapToggleLayer = _ref4.onMapToggleLayer,
      isActive = _ref4.isActive,
      toggleMenuPanel = _ref4.toggleMenuPanel;
  return !isActive ? /*#__PURE__*/_react["default"].createElement(_styledComponents2.MapControlButton, {
    key: 1,
    onClick: function onClick(e) {
      e.preventDefault();
      toggleMenuPanel();
    },
    className: "map-control-button toggle-layer",
    "data-tip": true,
    "data-for": "toggle-layer"
  }, /*#__PURE__*/_react["default"].createElement(_icons.Layers, {
    height: "22px"
  }), /*#__PURE__*/_react["default"].createElement(MapControlTooltip, {
    id: "toggle-layer",
    message: isActive ? 'tooltip.hideLayerPanel' : 'tooltip.showLayerPanel'
  })) : /*#__PURE__*/_react["default"].createElement(MapControlPanel, {
    header: "header.visibleLayers",
    onClick: toggleMenuPanel
  }, /*#__PURE__*/_react["default"].createElement(_mapLayerSelector["default"], {
    layers: items,
    onMapToggleLayer: onMapToggleLayer
  }));
});

LayerSelectorPanel.displayName = 'LayerSelectorPanel';

var MapControlPanel = /*#__PURE__*/_react["default"].memo(function (_ref5) {
  var children = _ref5.children,
      header = _ref5.header,
      onClick = _ref5.onClick,
      _ref5$scale = _ref5.scale,
      scale = _ref5$scale === void 0 ? 1 : _ref5$scale,
      isExport = _ref5.isExport;
  return /*#__PURE__*/_react["default"].createElement(StyledMapControlPanel, {
    style: {
      transform: "scale(".concat(scale, ") translate(calc(-").concat(25 * (scale - 1), "% - ").concat(10 * scale, "px), calc(").concat(25 * (scale - 1), "% + ").concat(10 * scale, "px))"),
      marginBottom: '8px'
    }
  }, /*#__PURE__*/_react["default"].createElement(StyledMapControlPanelHeader, null, isExport ? /*#__PURE__*/_react["default"].createElement(_logo["default"], {
    version: false,
    appName: "kepler.gl"
  }) : /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      verticalAlign: 'middle'
    }
  }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: header
  })), isExport ? null : /*#__PURE__*/_react["default"].createElement(_styledComponents2.IconRoundSmall, {
    className: "close-map-control-item",
    onClick: onClick
  }, /*#__PURE__*/_react["default"].createElement(_icons.Close, {
    height: "16px"
  }))), /*#__PURE__*/_react["default"].createElement(StyledMapControlPanelContent, null, children));
});

MapControlPanel.displayName = 'MapControlPanel';

var MapLegendPanel = function MapLegendPanel(_ref6) {
  var layers = _ref6.layers,
      isActive = _ref6.isActive,
      scale = _ref6.scale,
      onToggleMenuPanel = _ref6.onToggleMenuPanel,
      isExport = _ref6.isExport;
  return !isActive ? /*#__PURE__*/_react["default"].createElement(_styledComponents2.MapControlButton, {
    key: 2,
    "data-tip": true,
    "data-for": "show-legend",
    className: "map-control-button show-legend",
    onClick: function onClick(e) {
      e.preventDefault();
      onToggleMenuPanel();
    }
  }, /*#__PURE__*/_react["default"].createElement(_icons.Legend, {
    height: "22px"
  }), /*#__PURE__*/_react["default"].createElement(MapLegendTooltip, {
    id: "show-legend",
    message: 'tooltip.showLegend'
  })) : /*#__PURE__*/_react["default"].createElement(MapControlPanel, {
    scale: scale,
    header: 'header.layerLegend',
    onClick: onToggleMenuPanel,
    isExport: isExport
  }, /*#__PURE__*/_react["default"].createElement(_mapLegend["default"], {
    layers: layers
  }));
};

MapLegendPanel.displayName = 'MapControlPanel';

var SplitMapButton = /*#__PURE__*/_react["default"].memo(function (_ref7) {
  var isSplit = _ref7.isSplit,
      mapIndex = _ref7.mapIndex,
      onToggleSplitMap = _ref7.onToggleSplitMap;
  return /*#__PURE__*/_react["default"].createElement(_styledComponents2.MapControlButton, {
    active: isSplit,
    onClick: function onClick(e) {
      e.preventDefault();
      onToggleSplitMap(isSplit ? mapIndex : undefined);
    },
    key: "split-".concat(isSplit),
    className: (0, _classnames["default"])('map-control-button', 'split-map', {
      'close-map': isSplit
    }),
    "data-tip": true,
    "data-for": "action-toggle"
  }, isSplit ? /*#__PURE__*/_react["default"].createElement(_icons.Delete, {
    height: "18px"
  }) : /*#__PURE__*/_react["default"].createElement(_icons.Split, {
    height: "18px"
  }), /*#__PURE__*/_react["default"].createElement(MapControlTooltip, {
    id: "action-toggle",
    message: isSplit ? 'tooltip.closePanel' : 'tooltip.switchToDualView'
  }));
});

SplitMapButton.displayName = 'SplitMapButton';

var Toggle3dButton = /*#__PURE__*/_react["default"].memo(function (_ref8) {
  var dragRotate = _ref8.dragRotate,
      onTogglePerspective = _ref8.onTogglePerspective;
  return /*#__PURE__*/_react["default"].createElement(_styledComponents2.MapControlButton, {
    onClick: function onClick(e) {
      e.preventDefault();
      onTogglePerspective();
    },
    active: dragRotate,
    "data-tip": true,
    "data-for": "action-3d"
  }, /*#__PURE__*/_react["default"].createElement(_icons.Cube3d, {
    height: "22px"
  }), /*#__PURE__*/_react["default"].createElement(MapControlTooltip, {
    id: "action-3d",
    message: dragRotate ? 'tooltip.disable3DMap' : 'tooltip.3DMap'
  }));
});

Toggle3dButton.displayName = 'Toggle3dButton';
var StyledToolbar = (0, _styledComponents["default"])(_verticalToolbar["default"])(_templateObject6());

var MapDrawPanel = /*#__PURE__*/_react["default"].memo(function (_ref9) {
  var editor = _ref9.editor,
      isActive = _ref9.isActive,
      onToggleMenuPanel = _ref9.onToggleMenuPanel,
      onSetEditorMode = _ref9.onSetEditorMode,
      onToggleEditorVisibility = _ref9.onToggleEditorVisibility;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "map-draw-controls",
    style: {
      position: 'relative'
    }
  }, isActive ? /*#__PURE__*/_react["default"].createElement(StyledToolbar, {
    show: isActive
  }, /*#__PURE__*/_react["default"].createElement(_toolbarItem["default"], {
    className: "edit-feature",
    onClick: function onClick() {
      return onSetEditorMode(_defaultSettings.EDITOR_MODES.EDIT);
    },
    label: "toolbar.select",
    iconHeight: "22px",
    icon: _icons.CursorClick,
    active: editor.mode === _defaultSettings.EDITOR_MODES.EDIT
  }), /*#__PURE__*/_react["default"].createElement(_toolbarItem["default"], {
    className: "draw-feature",
    onClick: function onClick() {
      return onSetEditorMode(_defaultSettings.EDITOR_MODES.DRAW_POLYGON);
    },
    label: "toolbar.polygon",
    iconHeight: "22px",
    icon: _icons.Polygon,
    active: editor.mode === _defaultSettings.EDITOR_MODES.DRAW_POLYGON
  }), /*#__PURE__*/_react["default"].createElement(_toolbarItem["default"], {
    className: "draw-rectangle",
    onClick: function onClick() {
      return onSetEditorMode(_defaultSettings.EDITOR_MODES.DRAW_RECTANGLE);
    },
    label: "toolbar.rectangle",
    iconHeight: "22px",
    icon: _icons.Rectangle,
    active: editor.mode === _defaultSettings.EDITOR_MODES.DRAW_RECTANGLE
  }), /*#__PURE__*/_react["default"].createElement(_toolbarItem["default"], {
    className: "toggle-features",
    onClick: onToggleEditorVisibility,
    label: editor.visible ? 'toolbar.hide' : 'toolbar.show',
    iconHeight: "22px",
    icon: editor.visible ? _icons.EyeSeen : _icons.EyeUnseen
  })) : null, /*#__PURE__*/_react["default"].createElement(_styledComponents2.MapControlButton, {
    onClick: function onClick(e) {
      e.preventDefault();
      onToggleMenuPanel();
    },
    active: isActive,
    "data-tip": true,
    "data-for": "map-draw"
  }, /*#__PURE__*/_react["default"].createElement(_icons.DrawPolygon, {
    height: "22px"
  }), /*#__PURE__*/_react["default"].createElement(MapControlTooltip, {
    id: "map-draw",
    message: "tooltip.DrawOnMap"
  })));
});

MapDrawPanel.displayName = 'MapDrawPanel';

var LocalePanel = /*#__PURE__*/_react["default"].memo(function (_ref10) {
  var availableLocales = _ref10.availableLocales,
      isActive = _ref10.isActive,
      onToggleMenuPanel = _ref10.onToggleMenuPanel,
      onSetLocale = _ref10.onSetLocale,
      activeLocale = _ref10.activeLocale;
  var onClickItem = (0, _react.useCallback)(function (locale) {
    onSetLocale(locale);
  }, [onSetLocale]);
  var onClickButton = (0, _react.useCallback)(function (e) {
    e.preventDefault();
    onToggleMenuPanel();
  }, [onToggleMenuPanel]);
  var getLabel = (0, _react.useCallback)(function (locale) {
    return "toolbar.".concat(locale);
  }, []);
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      position: 'relative'
    }
  }, isActive ? /*#__PURE__*/_react["default"].createElement(StyledToolbar, {
    show: isActive
  }, availableLocales.map(function (locale) {
    return /*#__PURE__*/_react["default"].createElement(_toolbarItem["default"], {
      key: locale,
      onClick: function onClick() {
        return onClickItem(locale);
      },
      label: getLabel(locale),
      active: activeLocale === locale
    });
  })) : null, /*#__PURE__*/_react["default"].createElement(_styledComponents2.MapControlButton, {
    onClick: onClickButton,
    active: isActive,
    "data-tip": true,
    "data-for": "locale"
  }, activeLocale.toUpperCase(), /*#__PURE__*/_react["default"].createElement(MapControlTooltip, {
    id: "locale",
    message: "tooltip.selectLocale"
  })));
});

LocalePanel.displayName = 'LocalePanel';

var MapControlFactory = function MapControlFactory() {
  var MapControl = /*#__PURE__*/function (_Component) {
    (0, _inherits2["default"])(MapControl, _Component);

    var _super = _createSuper(MapControl);

    function MapControl() {
      var _this;

      (0, _classCallCheck2["default"])(this, MapControl);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "layerSelector", function (props) {
        return props.layers;
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "layersToRenderSelector", function (props) {
        return props.layersToRender;
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "layerPanelItemsSelector", (0, _reselect.createSelector)(_this.layerSelector, _this.layersToRenderSelector, function (layers, layersToRender) {
        return layers.filter(function (l) {
          return l.config.isVisible;
        }).map(function (layer) {
          return {
            id: layer.id,
            name: layer.config.label,
            // layer
            isVisible: layersToRender[layer.id]
          };
        });
      }));
      return _this;
    }

    (0, _createClass2["default"])(MapControl, [{
      key: "render",
      value: function render() {
        var _this$props = this.props,
            dragRotate = _this$props.dragRotate,
            layers = _this$props.layers,
            layersToRender = _this$props.layersToRender,
            isSplit = _this$props.isSplit,
            isExport = _this$props.isExport,
            mapIndex = _this$props.mapIndex,
            mapControls = _this$props.mapControls,
            onTogglePerspective = _this$props.onTogglePerspective,
            onToggleSplitMap = _this$props.onToggleSplitMap,
            onMapToggleLayer = _this$props.onMapToggleLayer,
            onToggleMapControl = _this$props.onToggleMapControl,
            editor = _this$props.editor,
            scale = _this$props.scale,
            readOnly = _this$props.readOnly,
            locale = _this$props.locale;
        var _mapControls$visibleL = mapControls.visibleLayers,
            visibleLayers = _mapControls$visibleL === void 0 ? {} : _mapControls$visibleL,
            _mapControls$mapLegen = mapControls.mapLegend,
            mapLegend = _mapControls$mapLegen === void 0 ? {} : _mapControls$mapLegen,
            _mapControls$toggle3d = mapControls.toggle3d,
            toggle3d = _mapControls$toggle3d === void 0 ? {} : _mapControls$toggle3d,
            _mapControls$splitMap = mapControls.splitMap,
            splitMap = _mapControls$splitMap === void 0 ? {} : _mapControls$splitMap,
            _mapControls$mapDraw = mapControls.mapDraw,
            mapDraw = _mapControls$mapDraw === void 0 ? {} : _mapControls$mapDraw,
            _mapControls$mapLocal = mapControls.mapLocale,
            mapLocale = _mapControls$mapLocal === void 0 ? {} : _mapControls$mapLocal;
        return /*#__PURE__*/_react["default"].createElement(StyledMapControl, {
          className: "map-control"
        }, splitMap.show && readOnly !== true ? /*#__PURE__*/_react["default"].createElement(ActionPanel, {
          className: "split-map",
          key: 0
        }, /*#__PURE__*/_react["default"].createElement(SplitMapButton, {
          isSplit: isSplit,
          mapIndex: mapIndex,
          onToggleSplitMap: onToggleSplitMap
        })) : null, isSplit && visibleLayers.show && readOnly !== true ? /*#__PURE__*/_react["default"].createElement(ActionPanel, {
          className: "map-layers",
          key: 1
        }, /*#__PURE__*/_react["default"].createElement(LayerSelectorPanel, {
          items: this.layerPanelItemsSelector(this.props),
          onMapToggleLayer: onMapToggleLayer,
          isActive: visibleLayers.active,
          toggleMenuPanel: function toggleMenuPanel() {
            return onToggleMapControl('visibleLayers');
          }
        })) : null, toggle3d.show ? /*#__PURE__*/_react["default"].createElement(ActionPanel, {
          className: "toggle-3d",
          key: 2
        }, /*#__PURE__*/_react["default"].createElement(Toggle3dButton, {
          dragRotate: dragRotate,
          onTogglePerspective: onTogglePerspective
        })) : null, mapLegend.show ? /*#__PURE__*/_react["default"].createElement(ActionPanel, {
          className: "show-legend",
          key: 3
        }, /*#__PURE__*/_react["default"].createElement(MapLegendPanel, {
          layers: layers.filter(function (l) {
            return layersToRender[l.id];
          }),
          scale: scale,
          isExport: isExport,
          onMapToggleLayer: onMapToggleLayer,
          isActive: mapLegend.active,
          onToggleMenuPanel: function onToggleMenuPanel() {
            return onToggleMapControl('mapLegend');
          }
        })) : null, mapDraw.show ? /*#__PURE__*/_react["default"].createElement(ActionPanel, {
          key: 4
        }, /*#__PURE__*/_react["default"].createElement(MapDrawPanel, {
          isActive: mapDraw.active && mapDraw.activeMapIndex === mapIndex,
          editor: editor,
          onToggleMenuPanel: function onToggleMenuPanel() {
            return onToggleMapControl('mapDraw');
          },
          onSetEditorMode: this.props.onSetEditorMode,
          onToggleEditorVisibility: this.props.onToggleEditorVisibility
        })) : null, mapLocale.show ? /*#__PURE__*/_react["default"].createElement(ActionPanel, {
          key: 5
        }, /*#__PURE__*/_react["default"].createElement(LocalePanel, {
          isActive: mapLocale.active,
          activeLocale: locale,
          availableLocales: Object.keys(_locales.LOCALE_CODES),
          onSetLocale: this.props.onSetLocale,
          onToggleMenuPanel: function onToggleMenuPanel() {
            return onToggleMapControl('mapLocale');
          }
        })) : null);
      }
    }]);
    return MapControl;
  }(_react.Component);

  (0, _defineProperty2["default"])(MapControl, "propTypes", {
    datasets: _propTypes["default"].object.isRequired,
    dragRotate: _propTypes["default"].bool.isRequired,
    isSplit: _propTypes["default"].bool.isRequired,
    layers: _propTypes["default"].arrayOf(_propTypes["default"].object),
    layersToRender: _propTypes["default"].object.isRequired,
    mapIndex: _propTypes["default"].number.isRequired,
    mapControls: _propTypes["default"].object.isRequired,
    onTogglePerspective: _propTypes["default"].func.isRequired,
    onToggleSplitMap: _propTypes["default"].func.isRequired,
    onToggleMapControl: _propTypes["default"].func.isRequired,
    onSetEditorMode: _propTypes["default"].func.isRequired,
    onToggleEditorVisibility: _propTypes["default"].func.isRequired,
    top: _propTypes["default"].number.isRequired,
    onSetLocale: _propTypes["default"].func.isRequired,
    locale: _propTypes["default"].string.isRequired,
    // optional
    readOnly: _propTypes["default"].bool,
    scale: _propTypes["default"].number,
    mapLayers: _propTypes["default"].object,
    editor: _propTypes["default"].object
  });
  (0, _defineProperty2["default"])(MapControl, "defaultProps", {
    isSplit: false,
    top: 0,
    mapIndex: 0
  });
  MapControl.displayName = 'MapControl';
  return MapControl;
};

var _default = MapControlFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL21hcC9tYXAtY29udHJvbC5qcyJdLCJuYW1lcyI6WyJTdHlsZWRNYXBDb250cm9sIiwic3R5bGVkIiwiZGl2IiwicHJvcHMiLCJ0aGVtZSIsIm1hcENvbnRyb2wiLCJ3aWR0aCIsInBhZGRpbmciLCJ0b3AiLCJTdHlsZWRNYXBDb250cm9sQWN0aW9uIiwiU3R5bGVkTWFwQ29udHJvbFBhbmVsIiwibWFwUGFuZWxCYWNrZ3JvdW5kQ29sb3IiLCJTdHlsZWRNYXBDb250cm9sUGFuZWxDb250ZW50IiwiZHJvcGRvd25TY3JvbGxCYXIiLCJTdHlsZWRNYXBDb250cm9sUGFuZWxIZWFkZXIiLCJtYXBQYW5lbEhlYWRlckJhY2tncm91bmRDb2xvciIsInRpdGxlVGV4dENvbG9yIiwiQWN0aW9uUGFuZWwiLCJjbGFzc05hbWUiLCJjaGlsZHJlbiIsImRpc3BsYXlOYW1lIiwiTWFwQ29udHJvbFRvb2x0aXAiLCJSZWFjdCIsIm1lbW8iLCJpZCIsIm1lc3NhZ2UiLCJNYXBMZWdlbmRUb29sdGlwIiwiTGF5ZXJTZWxlY3RvclBhbmVsIiwiaXRlbXMiLCJvbk1hcFRvZ2dsZUxheWVyIiwiaXNBY3RpdmUiLCJ0b2dnbGVNZW51UGFuZWwiLCJlIiwicHJldmVudERlZmF1bHQiLCJNYXBDb250cm9sUGFuZWwiLCJoZWFkZXIiLCJvbkNsaWNrIiwic2NhbGUiLCJpc0V4cG9ydCIsInRyYW5zZm9ybSIsIm1hcmdpbkJvdHRvbSIsInZlcnRpY2FsQWxpZ24iLCJNYXBMZWdlbmRQYW5lbCIsImxheWVycyIsIm9uVG9nZ2xlTWVudVBhbmVsIiwiU3BsaXRNYXBCdXR0b24iLCJpc1NwbGl0IiwibWFwSW5kZXgiLCJvblRvZ2dsZVNwbGl0TWFwIiwidW5kZWZpbmVkIiwiVG9nZ2xlM2RCdXR0b24iLCJkcmFnUm90YXRlIiwib25Ub2dnbGVQZXJzcGVjdGl2ZSIsIlN0eWxlZFRvb2xiYXIiLCJWZXJ0aWNhbFRvb2xiYXIiLCJNYXBEcmF3UGFuZWwiLCJlZGl0b3IiLCJvblNldEVkaXRvck1vZGUiLCJvblRvZ2dsZUVkaXRvclZpc2liaWxpdHkiLCJwb3NpdGlvbiIsIkVESVRPUl9NT0RFUyIsIkVESVQiLCJDdXJzb3JDbGljayIsIm1vZGUiLCJEUkFXX1BPTFlHT04iLCJQb2x5Z29uIiwiRFJBV19SRUNUQU5HTEUiLCJSZWN0YW5nbGUiLCJ2aXNpYmxlIiwiRXllU2VlbiIsIkV5ZVVuc2VlbiIsIkxvY2FsZVBhbmVsIiwiYXZhaWxhYmxlTG9jYWxlcyIsIm9uU2V0TG9jYWxlIiwiYWN0aXZlTG9jYWxlIiwib25DbGlja0l0ZW0iLCJsb2NhbGUiLCJvbkNsaWNrQnV0dG9uIiwiZ2V0TGFiZWwiLCJtYXAiLCJ0b1VwcGVyQ2FzZSIsIk1hcENvbnRyb2xGYWN0b3J5IiwiTWFwQ29udHJvbCIsImxheWVyc1RvUmVuZGVyIiwibGF5ZXJTZWxlY3RvciIsImxheWVyc1RvUmVuZGVyU2VsZWN0b3IiLCJmaWx0ZXIiLCJsIiwiY29uZmlnIiwiaXNWaXNpYmxlIiwibGF5ZXIiLCJuYW1lIiwibGFiZWwiLCJtYXBDb250cm9scyIsIm9uVG9nZ2xlTWFwQ29udHJvbCIsInJlYWRPbmx5IiwidmlzaWJsZUxheWVycyIsIm1hcExlZ2VuZCIsInRvZ2dsZTNkIiwic3BsaXRNYXAiLCJtYXBEcmF3IiwibWFwTG9jYWxlIiwic2hvdyIsImxheWVyUGFuZWxJdGVtc1NlbGVjdG9yIiwiYWN0aXZlIiwiYWN0aXZlTWFwSW5kZXgiLCJPYmplY3QiLCJrZXlzIiwiTE9DQUxFX0NPREVTIiwiQ29tcG9uZW50IiwiZGF0YXNldHMiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwiYm9vbCIsImFycmF5T2YiLCJudW1iZXIiLCJmdW5jIiwic3RyaW5nIiwibWFwTGF5ZXJzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FB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QnhELElBQUFBLE1BQU0sRUFBRXVELHNCQUFVQztBQXJCRCxHQUZTO0FBQUEsbUNBQ3hCOUIsVUFEd0Isa0JBMEJOO0FBQ3BCcEMsSUFBQUEsT0FBTyxFQUFFLEtBRFc7QUFFcEJ0QyxJQUFBQSxHQUFHLEVBQUUsQ0FGZTtBQUdwQnVDLElBQUFBLFFBQVEsRUFBRTtBQUhVLEdBMUJNO0FBc0o5Qm1DLEVBQUFBLFVBQVUsQ0FBQzlELFdBQVgsR0FBeUIsWUFBekI7QUFFQSxTQUFPOEQsVUFBUDtBQUNELENBekpEOztlQTJKZUQsaUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnQsIHVzZUNhbGxiYWNrfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7Y3JlYXRlU2VsZWN0b3J9IGZyb20gJ3Jlc2VsZWN0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7Rm9ybWF0dGVkTWVzc2FnZX0gZnJvbSAncmVhY3QtaW50bCc7XHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5cclxuaW1wb3J0IHtJY29uUm91bmRTbWFsbCwgTWFwQ29udHJvbEJ1dHRvbiwgVG9vbHRpcH0gZnJvbSAnY29tcG9uZW50cy9jb21tb24vc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgTWFwTGF5ZXJTZWxlY3RvciBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9tYXAtbGF5ZXItc2VsZWN0b3InO1xyXG5pbXBvcnQgS2VwbGVyR2xMb2dvIGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL2xvZ28nO1xyXG5pbXBvcnQgTWFwTGVnZW5kIGZyb20gJy4vbWFwLWxlZ2VuZCc7XHJcbmltcG9ydCB7XHJcbiAgQ2xvc2UsXHJcbiAgQ3ViZTNkLFxyXG4gIEN1cnNvckNsaWNrLFxyXG4gIERlbGV0ZSxcclxuICBEcmF3UG9seWdvbixcclxuICBFeWVTZWVuLFxyXG4gIEV5ZVVuc2VlbixcclxuICBMYXllcnMsXHJcbiAgTGVnZW5kLFxyXG4gIFBvbHlnb24sXHJcbiAgUmVjdGFuZ2xlLFxyXG4gIFNwbGl0XHJcbn0gZnJvbSAnY29tcG9uZW50cy9jb21tb24vaWNvbnMnO1xyXG5pbXBvcnQgVmVydGljYWxUb29sYmFyIGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL3ZlcnRpY2FsLXRvb2xiYXInO1xyXG5pbXBvcnQgVG9vbGJhckl0ZW0gZnJvbSAnY29tcG9uZW50cy9jb21tb24vdG9vbGJhci1pdGVtJztcclxuaW1wb3J0IHtFRElUT1JfTU9ERVN9IGZyb20gJ2NvbnN0YW50cy9kZWZhdWx0LXNldHRpbmdzJztcclxuaW1wb3J0IHtMT0NBTEVfQ09ERVN9IGZyb20gJ2xvY2FsaXphdGlvbi9sb2NhbGVzJztcclxuXHJcbmNvbnN0IFN0eWxlZE1hcENvbnRyb2wgPSBzdHlsZWQuZGl2YFxyXG4gIHJpZ2h0OiAwO1xyXG4gIHdpZHRoOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLm1hcENvbnRyb2wud2lkdGh9cHg7XHJcbiAgcGFkZGluZzogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5tYXBDb250cm9sLnBhZGRpbmd9cHg7XHJcbiAgei1pbmRleDogMTA7XHJcbiAgdG9wOiAke3Byb3BzID0+IHByb3BzLnRvcH1weDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbmA7XHJcblxyXG5jb25zdCBTdHlsZWRNYXBDb250cm9sQWN0aW9uID0gc3R5bGVkLmRpdmBcclxuICBwYWRkaW5nOiA0cHggMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbmA7XHJcblxyXG5jb25zdCBTdHlsZWRNYXBDb250cm9sUGFuZWwgPSBzdHlsZWQuZGl2YFxyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUubWFwUGFuZWxCYWNrZ3JvdW5kQ29sb3J9O1xyXG4gIGZsZXgtZ3JvdzogMTtcclxuICB6LWluZGV4OiAxO1xyXG4gIHAge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBTdHlsZWRNYXBDb250cm9sUGFuZWxDb250ZW50ID0gc3R5bGVkLmRpdmBcclxuICAke3Byb3BzID0+IHByb3BzLnRoZW1lLmRyb3Bkb3duU2Nyb2xsQmFyfTtcclxuICBtYXgtaGVpZ2h0OiA1MDBweDtcclxuICBtaW4taGVpZ2h0OiAxMDBweDtcclxuICBvdmVyZmxvdzogYXV0bztcclxuYDtcclxuXHJcbmNvbnN0IFN0eWxlZE1hcENvbnRyb2xQYW5lbEhlYWRlciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5tYXBQYW5lbEhlYWRlckJhY2tncm91bmRDb2xvcn07XHJcbiAgaGVpZ2h0OiAzMnB4O1xyXG4gIHBhZGRpbmc6IDZweCAxMnB4O1xyXG4gIGZvbnQtc2l6ZTogMTFweDtcclxuICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50aXRsZVRleHRDb2xvcn07XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICBidXR0b24ge1xyXG4gICAgd2lkdGg6IDE4cHg7XHJcbiAgICBoZWlnaHQ6IDE4cHg7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgQWN0aW9uUGFuZWwgPSAoe2NsYXNzTmFtZSwgY2hpbGRyZW59KSA9PiAoXHJcbiAgPFN0eWxlZE1hcENvbnRyb2xBY3Rpb24gY2xhc3NOYW1lPXtjbGFzc05hbWV9PntjaGlsZHJlbn08L1N0eWxlZE1hcENvbnRyb2xBY3Rpb24+XHJcbik7XHJcblxyXG5BY3Rpb25QYW5lbC5kaXNwbGF5TmFtZSA9ICdBY3Rpb25QYW5lbCc7XHJcblxyXG5jb25zdCBNYXBDb250cm9sVG9vbHRpcCA9IFJlYWN0Lm1lbW8oKHtpZCwgbWVzc2FnZX0pID0+IChcclxuICA8VG9vbHRpcCBpZD17aWR9IHBsYWNlPVwibGVmdFwiIGVmZmVjdD1cInNvbGlkXCI+XHJcbiAgICA8c3Bhbj5cclxuICAgICAgPEZvcm1hdHRlZE1lc3NhZ2UgaWQ9e21lc3NhZ2V9IC8+XHJcbiAgICA8L3NwYW4+XHJcbiAgPC9Ub29sdGlwPlxyXG4pKTtcclxuXHJcbk1hcENvbnRyb2xUb29sdGlwLmRpc3BsYXlOYW1lID0gJ01hcENvbnRyb2xUb29sdGlwJztcclxuXHJcbmNvbnN0IE1hcExlZ2VuZFRvb2x0aXAgPSAoe2lkLCBtZXNzYWdlfSkgPT4gKFxyXG4gIDxUb29sdGlwIGlkPXtpZH0gcGxhY2U9XCJsZWZ0XCIgZWZmZWN0PVwic29saWRcIj5cclxuICAgIDxzcGFuPlxyXG4gICAgICA8Rm9ybWF0dGVkTWVzc2FnZSBpZD17bWVzc2FnZX0gLz5cclxuICAgIDwvc3Bhbj5cclxuICA8L1Rvb2x0aXA+XHJcbik7XHJcblxyXG5jb25zdCBMYXllclNlbGVjdG9yUGFuZWwgPSBSZWFjdC5tZW1vKCh7aXRlbXMsIG9uTWFwVG9nZ2xlTGF5ZXIsIGlzQWN0aXZlLCB0b2dnbGVNZW51UGFuZWx9KSA9PlxyXG4gICFpc0FjdGl2ZSA/IChcclxuICAgIDxNYXBDb250cm9sQnV0dG9uXHJcbiAgICAgIGtleT17MX1cclxuICAgICAgb25DbGljaz17ZSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHRvZ2dsZU1lbnVQYW5lbCgpO1xyXG4gICAgICB9fVxyXG4gICAgICBjbGFzc05hbWU9XCJtYXAtY29udHJvbC1idXR0b24gdG9nZ2xlLWxheWVyXCJcclxuICAgICAgZGF0YS10aXBcclxuICAgICAgZGF0YS1mb3I9XCJ0b2dnbGUtbGF5ZXJcIlxyXG4gICAgPlxyXG4gICAgICA8TGF5ZXJzIGhlaWdodD1cIjIycHhcIiAvPlxyXG4gICAgICA8TWFwQ29udHJvbFRvb2x0aXBcclxuICAgICAgICBpZD1cInRvZ2dsZS1sYXllclwiXHJcbiAgICAgICAgbWVzc2FnZT17aXNBY3RpdmUgPyAndG9vbHRpcC5oaWRlTGF5ZXJQYW5lbCcgOiAndG9vbHRpcC5zaG93TGF5ZXJQYW5lbCd9XHJcbiAgICAgIC8+XHJcbiAgICA8L01hcENvbnRyb2xCdXR0b24+XHJcbiAgKSA6IChcclxuICAgIDxNYXBDb250cm9sUGFuZWwgaGVhZGVyPVwiaGVhZGVyLnZpc2libGVMYXllcnNcIiBvbkNsaWNrPXt0b2dnbGVNZW51UGFuZWx9PlxyXG4gICAgICA8TWFwTGF5ZXJTZWxlY3RvciBsYXllcnM9e2l0ZW1zfSBvbk1hcFRvZ2dsZUxheWVyPXtvbk1hcFRvZ2dsZUxheWVyfSAvPlxyXG4gICAgPC9NYXBDb250cm9sUGFuZWw+XHJcbiAgKVxyXG4pO1xyXG5cclxuTGF5ZXJTZWxlY3RvclBhbmVsLmRpc3BsYXlOYW1lID0gJ0xheWVyU2VsZWN0b3JQYW5lbCc7XHJcblxyXG5jb25zdCBNYXBDb250cm9sUGFuZWwgPSBSZWFjdC5tZW1vKCh7Y2hpbGRyZW4sIGhlYWRlciwgb25DbGljaywgc2NhbGUgPSAxLCBpc0V4cG9ydH0pID0+IChcclxuICA8U3R5bGVkTWFwQ29udHJvbFBhbmVsXHJcbiAgICBzdHlsZT17e1xyXG4gICAgICB0cmFuc2Zvcm06IGBzY2FsZSgke3NjYWxlfSkgdHJhbnNsYXRlKGNhbGMoLSR7MjUgKiAoc2NhbGUgLSAxKX0lIC0gJHsxMCAqXHJcbiAgICAgICAgc2NhbGV9cHgpLCBjYWxjKCR7MjUgKiAoc2NhbGUgLSAxKX0lICsgJHsxMCAqIHNjYWxlfXB4KSlgLFxyXG4gICAgICBtYXJnaW5Cb3R0b206ICc4cHgnXHJcbiAgICB9fVxyXG4gID5cclxuICAgIDxTdHlsZWRNYXBDb250cm9sUGFuZWxIZWFkZXI+XHJcbiAgICAgIHtpc0V4cG9ydCA/IChcclxuICAgICAgICA8S2VwbGVyR2xMb2dvIHZlcnNpb249e2ZhbHNlfSBhcHBOYW1lPVwia2VwbGVyLmdsXCIgLz5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8c3BhbiBzdHlsZT17e3ZlcnRpY2FsQWxpZ246ICdtaWRkbGUnfX0+XHJcbiAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZSBpZD17aGVhZGVyfSAvPlxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgKX1cclxuICAgICAge2lzRXhwb3J0ID8gbnVsbCA6IChcclxuICAgICAgICA8SWNvblJvdW5kU21hbGwgY2xhc3NOYW1lPVwiY2xvc2UtbWFwLWNvbnRyb2wtaXRlbVwiIG9uQ2xpY2s9e29uQ2xpY2t9PlxyXG4gICAgICAgICAgPENsb3NlIGhlaWdodD1cIjE2cHhcIiAvPlxyXG4gICAgICAgIDwvSWNvblJvdW5kU21hbGw+XHJcbiAgICAgICl9XHJcbiAgICA8L1N0eWxlZE1hcENvbnRyb2xQYW5lbEhlYWRlcj5cclxuICAgIDxTdHlsZWRNYXBDb250cm9sUGFuZWxDb250ZW50PntjaGlsZHJlbn08L1N0eWxlZE1hcENvbnRyb2xQYW5lbENvbnRlbnQ+XHJcbiAgPC9TdHlsZWRNYXBDb250cm9sUGFuZWw+XHJcbikpO1xyXG5cclxuTWFwQ29udHJvbFBhbmVsLmRpc3BsYXlOYW1lID0gJ01hcENvbnRyb2xQYW5lbCc7XHJcblxyXG5jb25zdCBNYXBMZWdlbmRQYW5lbCA9ICh7bGF5ZXJzLCBpc0FjdGl2ZSwgc2NhbGUsIG9uVG9nZ2xlTWVudVBhbmVsLCBpc0V4cG9ydH0pID0+XHJcbiAgIWlzQWN0aXZlID8gKFxyXG4gICAgPE1hcENvbnRyb2xCdXR0b25cclxuICAgICAga2V5PXsyfVxyXG4gICAgICBkYXRhLXRpcFxyXG4gICAgICBkYXRhLWZvcj1cInNob3ctbGVnZW5kXCJcclxuICAgICAgY2xhc3NOYW1lPVwibWFwLWNvbnRyb2wtYnV0dG9uIHNob3ctbGVnZW5kXCJcclxuICAgICAgb25DbGljaz17ZSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIG9uVG9nZ2xlTWVudVBhbmVsKCk7XHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIDxMZWdlbmQgaGVpZ2h0PVwiMjJweFwiIC8+XHJcbiAgICAgIDxNYXBMZWdlbmRUb29sdGlwIGlkPVwic2hvdy1sZWdlbmRcIiBtZXNzYWdlPXsndG9vbHRpcC5zaG93TGVnZW5kJ30gLz5cclxuICAgIDwvTWFwQ29udHJvbEJ1dHRvbj5cclxuICApIDogKFxyXG4gICAgPE1hcENvbnRyb2xQYW5lbFxyXG4gICAgICBzY2FsZT17c2NhbGV9XHJcbiAgICAgIGhlYWRlcj17J2hlYWRlci5sYXllckxlZ2VuZCd9XHJcbiAgICAgIG9uQ2xpY2s9e29uVG9nZ2xlTWVudVBhbmVsfVxyXG4gICAgICBpc0V4cG9ydD17aXNFeHBvcnR9XHJcbiAgICA+XHJcbiAgICAgIDxNYXBMZWdlbmQgbGF5ZXJzPXtsYXllcnN9IC8+XHJcbiAgICA8L01hcENvbnRyb2xQYW5lbD5cclxuICApO1xyXG5cclxuTWFwTGVnZW5kUGFuZWwuZGlzcGxheU5hbWUgPSAnTWFwQ29udHJvbFBhbmVsJztcclxuXHJcbmNvbnN0IFNwbGl0TWFwQnV0dG9uID0gUmVhY3QubWVtbygoe2lzU3BsaXQsIG1hcEluZGV4LCBvblRvZ2dsZVNwbGl0TWFwfSkgPT4gKFxyXG4gIDxNYXBDb250cm9sQnV0dG9uXHJcbiAgICBhY3RpdmU9e2lzU3BsaXR9XHJcbiAgICBvbkNsaWNrPXtlID0+IHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBvblRvZ2dsZVNwbGl0TWFwKGlzU3BsaXQgPyBtYXBJbmRleCA6IHVuZGVmaW5lZCk7XHJcbiAgICB9fVxyXG4gICAga2V5PXtgc3BsaXQtJHtpc1NwbGl0fWB9XHJcbiAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoJ21hcC1jb250cm9sLWJ1dHRvbicsICdzcGxpdC1tYXAnLCB7J2Nsb3NlLW1hcCc6IGlzU3BsaXR9KX1cclxuICAgIGRhdGEtdGlwXHJcbiAgICBkYXRhLWZvcj1cImFjdGlvbi10b2dnbGVcIlxyXG4gID5cclxuICAgIHtpc1NwbGl0ID8gPERlbGV0ZSBoZWlnaHQ9XCIxOHB4XCIgLz4gOiA8U3BsaXQgaGVpZ2h0PVwiMThweFwiIC8+fVxyXG4gICAgPE1hcENvbnRyb2xUb29sdGlwXHJcbiAgICAgIGlkPVwiYWN0aW9uLXRvZ2dsZVwiXHJcbiAgICAgIG1lc3NhZ2U9e2lzU3BsaXQgPyAndG9vbHRpcC5jbG9zZVBhbmVsJyA6ICd0b29sdGlwLnN3aXRjaFRvRHVhbFZpZXcnfVxyXG4gICAgLz5cclxuICA8L01hcENvbnRyb2xCdXR0b24+XHJcbikpO1xyXG5cclxuU3BsaXRNYXBCdXR0b24uZGlzcGxheU5hbWUgPSAnU3BsaXRNYXBCdXR0b24nO1xyXG5cclxuY29uc3QgVG9nZ2xlM2RCdXR0b24gPSBSZWFjdC5tZW1vKCh7ZHJhZ1JvdGF0ZSwgb25Ub2dnbGVQZXJzcGVjdGl2ZX0pID0+IChcclxuICA8TWFwQ29udHJvbEJ1dHRvblxyXG4gICAgb25DbGljaz17ZSA9PiB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgb25Ub2dnbGVQZXJzcGVjdGl2ZSgpO1xyXG4gICAgfX1cclxuICAgIGFjdGl2ZT17ZHJhZ1JvdGF0ZX1cclxuICAgIGRhdGEtdGlwXHJcbiAgICBkYXRhLWZvcj1cImFjdGlvbi0zZFwiXHJcbiAgPlxyXG4gICAgPEN1YmUzZCBoZWlnaHQ9XCIyMnB4XCIgLz5cclxuICAgIDxNYXBDb250cm9sVG9vbHRpcFxyXG4gICAgICBpZD1cImFjdGlvbi0zZFwiXHJcbiAgICAgIG1lc3NhZ2U9e2RyYWdSb3RhdGUgPyAndG9vbHRpcC5kaXNhYmxlM0RNYXAnIDogJ3Rvb2x0aXAuM0RNYXAnfVxyXG4gICAgLz5cclxuICA8L01hcENvbnRyb2xCdXR0b24+XHJcbikpO1xyXG5cclxuVG9nZ2xlM2RCdXR0b24uZGlzcGxheU5hbWUgPSAnVG9nZ2xlM2RCdXR0b24nO1xyXG5cclxuY29uc3QgU3R5bGVkVG9vbGJhciA9IHN0eWxlZChWZXJ0aWNhbFRvb2xiYXIpYFxyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMzJweDtcclxuYDtcclxuXHJcbmNvbnN0IE1hcERyYXdQYW5lbCA9IFJlYWN0Lm1lbW8oXHJcbiAgKHtlZGl0b3IsIGlzQWN0aXZlLCBvblRvZ2dsZU1lbnVQYW5lbCwgb25TZXRFZGl0b3JNb2RlLCBvblRvZ2dsZUVkaXRvclZpc2liaWxpdHl9KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1hcC1kcmF3LWNvbnRyb2xzXCIgc3R5bGU9e3twb3NpdGlvbjogJ3JlbGF0aXZlJ319PlxyXG4gICAgICAgIHtpc0FjdGl2ZSA/IChcclxuICAgICAgICAgIDxTdHlsZWRUb29sYmFyIHNob3c9e2lzQWN0aXZlfT5cclxuICAgICAgICAgICAgPFRvb2xiYXJJdGVtXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZWRpdC1mZWF0dXJlXCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvblNldEVkaXRvck1vZGUoRURJVE9SX01PREVTLkVESVQpfVxyXG4gICAgICAgICAgICAgIGxhYmVsPVwidG9vbGJhci5zZWxlY3RcIlxyXG4gICAgICAgICAgICAgIGljb25IZWlnaHQ9XCIyMnB4XCJcclxuICAgICAgICAgICAgICBpY29uPXtDdXJzb3JDbGlja31cclxuICAgICAgICAgICAgICBhY3RpdmU9e2VkaXRvci5tb2RlID09PSBFRElUT1JfTU9ERVMuRURJVH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPFRvb2xiYXJJdGVtXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZHJhdy1mZWF0dXJlXCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvblNldEVkaXRvck1vZGUoRURJVE9SX01PREVTLkRSQVdfUE9MWUdPTil9XHJcbiAgICAgICAgICAgICAgbGFiZWw9XCJ0b29sYmFyLnBvbHlnb25cIlxyXG4gICAgICAgICAgICAgIGljb25IZWlnaHQ9XCIyMnB4XCJcclxuICAgICAgICAgICAgICBpY29uPXtQb2x5Z29ufVxyXG4gICAgICAgICAgICAgIGFjdGl2ZT17ZWRpdG9yLm1vZGUgPT09IEVESVRPUl9NT0RFUy5EUkFXX1BPTFlHT059XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxUb29sYmFySXRlbVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRyYXctcmVjdGFuZ2xlXCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvblNldEVkaXRvck1vZGUoRURJVE9SX01PREVTLkRSQVdfUkVDVEFOR0xFKX1cclxuICAgICAgICAgICAgICBsYWJlbD1cInRvb2xiYXIucmVjdGFuZ2xlXCJcclxuICAgICAgICAgICAgICBpY29uSGVpZ2h0PVwiMjJweFwiXHJcbiAgICAgICAgICAgICAgaWNvbj17UmVjdGFuZ2xlfVxyXG4gICAgICAgICAgICAgIGFjdGl2ZT17ZWRpdG9yLm1vZGUgPT09IEVESVRPUl9NT0RFUy5EUkFXX1JFQ1RBTkdMRX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPFRvb2xiYXJJdGVtXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidG9nZ2xlLWZlYXR1cmVzXCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXtvblRvZ2dsZUVkaXRvclZpc2liaWxpdHl9XHJcbiAgICAgICAgICAgICAgbGFiZWw9e2VkaXRvci52aXNpYmxlID8gJ3Rvb2xiYXIuaGlkZScgOiAndG9vbGJhci5zaG93J31cclxuICAgICAgICAgICAgICBpY29uSGVpZ2h0PVwiMjJweFwiXHJcbiAgICAgICAgICAgICAgaWNvbj17ZWRpdG9yLnZpc2libGUgPyBFeWVTZWVuIDogRXllVW5zZWVufVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9TdHlsZWRUb29sYmFyPlxyXG4gICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgIDxNYXBDb250cm9sQnV0dG9uXHJcbiAgICAgICAgICBvbkNsaWNrPXtlID0+IHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBvblRvZ2dsZU1lbnVQYW5lbCgpO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIGFjdGl2ZT17aXNBY3RpdmV9XHJcbiAgICAgICAgICBkYXRhLXRpcFxyXG4gICAgICAgICAgZGF0YS1mb3I9XCJtYXAtZHJhd1wiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPERyYXdQb2x5Z29uIGhlaWdodD1cIjIycHhcIiAvPlxyXG4gICAgICAgICAgPE1hcENvbnRyb2xUb29sdGlwIGlkPVwibWFwLWRyYXdcIiBtZXNzYWdlPVwidG9vbHRpcC5EcmF3T25NYXBcIiAvPlxyXG4gICAgICAgIDwvTWFwQ29udHJvbEJ1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxuKTtcclxuXHJcbk1hcERyYXdQYW5lbC5kaXNwbGF5TmFtZSA9ICdNYXBEcmF3UGFuZWwnO1xyXG5cclxuY29uc3QgTG9jYWxlUGFuZWwgPSBSZWFjdC5tZW1vKFxyXG4gICh7YXZhaWxhYmxlTG9jYWxlcywgaXNBY3RpdmUsIG9uVG9nZ2xlTWVudVBhbmVsLCBvblNldExvY2FsZSwgYWN0aXZlTG9jYWxlfSkgPT4ge1xyXG4gICAgY29uc3Qgb25DbGlja0l0ZW0gPSB1c2VDYWxsYmFjayhcclxuICAgICAgbG9jYWxlID0+IHtcclxuICAgICAgICBvblNldExvY2FsZShsb2NhbGUpO1xyXG4gICAgICB9LFxyXG4gICAgICBbb25TZXRMb2NhbGVdXHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IG9uQ2xpY2tCdXR0b24gPSB1c2VDYWxsYmFjayhcclxuICAgICAgZSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIG9uVG9nZ2xlTWVudVBhbmVsKCk7XHJcbiAgICAgIH0sXHJcbiAgICAgIFtvblRvZ2dsZU1lbnVQYW5lbF1cclxuICAgICk7XHJcbiAgICBjb25zdCBnZXRMYWJlbCA9IHVzZUNhbGxiYWNrKGxvY2FsZSA9PiBgdG9vbGJhci4ke2xvY2FsZX1gLCBbXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBzdHlsZT17e3Bvc2l0aW9uOiAncmVsYXRpdmUnfX0+XHJcbiAgICAgICAge2lzQWN0aXZlID8gKFxyXG4gICAgICAgICAgPFN0eWxlZFRvb2xiYXIgc2hvdz17aXNBY3RpdmV9PlxyXG4gICAgICAgICAgICB7YXZhaWxhYmxlTG9jYWxlcy5tYXAobG9jYWxlID0+IChcclxuICAgICAgICAgICAgICA8VG9vbGJhckl0ZW1cclxuICAgICAgICAgICAgICAgIGtleT17bG9jYWxlfVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25DbGlja0l0ZW0obG9jYWxlKX1cclxuICAgICAgICAgICAgICAgIGxhYmVsPXtnZXRMYWJlbChsb2NhbGUpfVxyXG4gICAgICAgICAgICAgICAgYWN0aXZlPXthY3RpdmVMb2NhbGUgPT09IGxvY2FsZX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvU3R5bGVkVG9vbGJhcj5cclxuICAgICAgICApIDogbnVsbH1cclxuICAgICAgICA8TWFwQ29udHJvbEJ1dHRvbiBvbkNsaWNrPXtvbkNsaWNrQnV0dG9ufSBhY3RpdmU9e2lzQWN0aXZlfSBkYXRhLXRpcCBkYXRhLWZvcj1cImxvY2FsZVwiPlxyXG4gICAgICAgICAge2FjdGl2ZUxvY2FsZS50b1VwcGVyQ2FzZSgpfVxyXG4gICAgICAgICAgPE1hcENvbnRyb2xUb29sdGlwIGlkPVwibG9jYWxlXCIgbWVzc2FnZT1cInRvb2x0aXAuc2VsZWN0TG9jYWxlXCIgLz5cclxuICAgICAgICA8L01hcENvbnRyb2xCdXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbik7XHJcblxyXG5Mb2NhbGVQYW5lbC5kaXNwbGF5TmFtZSA9ICdMb2NhbGVQYW5lbCc7XHJcblxyXG5jb25zdCBNYXBDb250cm9sRmFjdG9yeSA9ICgpID0+IHtcclxuICBjbGFzcyBNYXBDb250cm9sIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XHJcbiAgICAgIGRhdGFzZXRzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXHJcbiAgICAgIGRyYWdSb3RhdGU6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXHJcbiAgICAgIGlzU3BsaXQ6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXHJcbiAgICAgIGxheWVyczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdCksXHJcbiAgICAgIGxheWVyc1RvUmVuZGVyOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXHJcbiAgICAgIG1hcEluZGV4OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXHJcbiAgICAgIG1hcENvbnRyb2xzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXHJcbiAgICAgIG9uVG9nZ2xlUGVyc3BlY3RpdmU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgICAgIG9uVG9nZ2xlU3BsaXRNYXA6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgICAgIG9uVG9nZ2xlTWFwQ29udHJvbDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICAgICAgb25TZXRFZGl0b3JNb2RlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gICAgICBvblRvZ2dsZUVkaXRvclZpc2liaWxpdHk6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgICAgIHRvcDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxyXG4gICAgICBvblNldExvY2FsZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICAgICAgbG9jYWxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcblxyXG4gICAgICAvLyBvcHRpb25hbFxyXG4gICAgICByZWFkT25seTogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICAgIHNjYWxlOiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgICBtYXBMYXllcnM6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgICAgIGVkaXRvcjogUHJvcFR5cGVzLm9iamVjdFxyXG4gICAgfTtcclxuXHJcbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xyXG4gICAgICBpc1NwbGl0OiBmYWxzZSxcclxuICAgICAgdG9wOiAwLFxyXG4gICAgICBtYXBJbmRleDogMFxyXG4gICAgfTtcclxuXHJcbiAgICBsYXllclNlbGVjdG9yID0gcHJvcHMgPT4gcHJvcHMubGF5ZXJzO1xyXG4gICAgbGF5ZXJzVG9SZW5kZXJTZWxlY3RvciA9IHByb3BzID0+IHByb3BzLmxheWVyc1RvUmVuZGVyO1xyXG4gICAgbGF5ZXJQYW5lbEl0ZW1zU2VsZWN0b3IgPSBjcmVhdGVTZWxlY3RvcihcclxuICAgICAgdGhpcy5sYXllclNlbGVjdG9yLFxyXG4gICAgICB0aGlzLmxheWVyc1RvUmVuZGVyU2VsZWN0b3IsXHJcbiAgICAgIChsYXllcnMsIGxheWVyc1RvUmVuZGVyKSA9PlxyXG4gICAgICAgIGxheWVyc1xyXG4gICAgICAgICAgLmZpbHRlcihsID0+IGwuY29uZmlnLmlzVmlzaWJsZSlcclxuICAgICAgICAgIC5tYXAobGF5ZXIgPT4gKHtcclxuICAgICAgICAgICAgaWQ6IGxheWVyLmlkLFxyXG4gICAgICAgICAgICBuYW1lOiBsYXllci5jb25maWcubGFiZWwsXHJcbiAgICAgICAgICAgIC8vIGxheWVyXHJcbiAgICAgICAgICAgIGlzVmlzaWJsZTogbGF5ZXJzVG9SZW5kZXJbbGF5ZXIuaWRdXHJcbiAgICAgICAgICB9KSlcclxuICAgICk7XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICBjb25zdCB7XHJcbiAgICAgICAgZHJhZ1JvdGF0ZSxcclxuICAgICAgICBsYXllcnMsXHJcbiAgICAgICAgbGF5ZXJzVG9SZW5kZXIsXHJcbiAgICAgICAgaXNTcGxpdCxcclxuICAgICAgICBpc0V4cG9ydCxcclxuICAgICAgICBtYXBJbmRleCxcclxuICAgICAgICBtYXBDb250cm9scyxcclxuICAgICAgICBvblRvZ2dsZVBlcnNwZWN0aXZlLFxyXG4gICAgICAgIG9uVG9nZ2xlU3BsaXRNYXAsXHJcbiAgICAgICAgb25NYXBUb2dnbGVMYXllcixcclxuICAgICAgICBvblRvZ2dsZU1hcENvbnRyb2wsXHJcbiAgICAgICAgZWRpdG9yLFxyXG4gICAgICAgIHNjYWxlLFxyXG4gICAgICAgIHJlYWRPbmx5LFxyXG4gICAgICAgIGxvY2FsZVxyXG4gICAgICB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgIGNvbnN0IHtcclxuICAgICAgICB2aXNpYmxlTGF5ZXJzID0ge30sXHJcbiAgICAgICAgbWFwTGVnZW5kID0ge30sXHJcbiAgICAgICAgdG9nZ2xlM2QgPSB7fSxcclxuICAgICAgICBzcGxpdE1hcCA9IHt9LFxyXG4gICAgICAgIG1hcERyYXcgPSB7fSxcclxuICAgICAgICBtYXBMb2NhbGUgPSB7fVxyXG4gICAgICB9ID0gbWFwQ29udHJvbHM7XHJcblxyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxTdHlsZWRNYXBDb250cm9sIGNsYXNzTmFtZT1cIm1hcC1jb250cm9sXCI+XHJcbiAgICAgICAgICB7LyogU3BsaXQgTWFwICovfVxyXG4gICAgICAgICAge3NwbGl0TWFwLnNob3cgJiYgcmVhZE9ubHkgIT09IHRydWUgPyAoXHJcbiAgICAgICAgICAgIDxBY3Rpb25QYW5lbCBjbGFzc05hbWU9XCJzcGxpdC1tYXBcIiBrZXk9ezB9PlxyXG4gICAgICAgICAgICAgIDxTcGxpdE1hcEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgaXNTcGxpdD17aXNTcGxpdH1cclxuICAgICAgICAgICAgICAgIG1hcEluZGV4PXttYXBJbmRleH1cclxuICAgICAgICAgICAgICAgIG9uVG9nZ2xlU3BsaXRNYXA9e29uVG9nZ2xlU3BsaXRNYXB9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9BY3Rpb25QYW5lbD5cclxuICAgICAgICAgICkgOiBudWxsfVxyXG5cclxuICAgICAgICAgIHsvKiBNYXAgTGF5ZXJzICovfVxyXG4gICAgICAgICAge2lzU3BsaXQgJiYgdmlzaWJsZUxheWVycy5zaG93ICYmIHJlYWRPbmx5ICE9PSB0cnVlID8gKFxyXG4gICAgICAgICAgICA8QWN0aW9uUGFuZWwgY2xhc3NOYW1lPVwibWFwLWxheWVyc1wiIGtleT17MX0+XHJcbiAgICAgICAgICAgICAgPExheWVyU2VsZWN0b3JQYW5lbFxyXG4gICAgICAgICAgICAgICAgaXRlbXM9e3RoaXMubGF5ZXJQYW5lbEl0ZW1zU2VsZWN0b3IodGhpcy5wcm9wcyl9XHJcbiAgICAgICAgICAgICAgICBvbk1hcFRvZ2dsZUxheWVyPXtvbk1hcFRvZ2dsZUxheWVyfVxyXG4gICAgICAgICAgICAgICAgaXNBY3RpdmU9e3Zpc2libGVMYXllcnMuYWN0aXZlfVxyXG4gICAgICAgICAgICAgICAgdG9nZ2xlTWVudVBhbmVsPXsoKSA9PiBvblRvZ2dsZU1hcENvbnRyb2woJ3Zpc2libGVMYXllcnMnKX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0FjdGlvblBhbmVsPlxyXG4gICAgICAgICAgKSA6IG51bGx9XHJcblxyXG4gICAgICAgICAgey8qIDNEIE1hcCAqL31cclxuICAgICAgICAgIHt0b2dnbGUzZC5zaG93ID8gKFxyXG4gICAgICAgICAgICA8QWN0aW9uUGFuZWwgY2xhc3NOYW1lPVwidG9nZ2xlLTNkXCIga2V5PXsyfT5cclxuICAgICAgICAgICAgICA8VG9nZ2xlM2RCdXR0b24gZHJhZ1JvdGF0ZT17ZHJhZ1JvdGF0ZX0gb25Ub2dnbGVQZXJzcGVjdGl2ZT17b25Ub2dnbGVQZXJzcGVjdGl2ZX0gLz5cclxuICAgICAgICAgICAgPC9BY3Rpb25QYW5lbD5cclxuICAgICAgICAgICkgOiBudWxsfVxyXG5cclxuICAgICAgICAgIHsvKiBNYXAgTGVnZW5kICovfVxyXG4gICAgICAgICAge21hcExlZ2VuZC5zaG93ID8gKFxyXG4gICAgICAgICAgICA8QWN0aW9uUGFuZWwgY2xhc3NOYW1lPVwic2hvdy1sZWdlbmRcIiBrZXk9ezN9PlxyXG4gICAgICAgICAgICAgIDxNYXBMZWdlbmRQYW5lbFxyXG4gICAgICAgICAgICAgICAgbGF5ZXJzPXtsYXllcnMuZmlsdGVyKGwgPT4gbGF5ZXJzVG9SZW5kZXJbbC5pZF0pfVxyXG4gICAgICAgICAgICAgICAgc2NhbGU9e3NjYWxlfVxyXG4gICAgICAgICAgICAgICAgaXNFeHBvcnQ9e2lzRXhwb3J0fVxyXG4gICAgICAgICAgICAgICAgb25NYXBUb2dnbGVMYXllcj17b25NYXBUb2dnbGVMYXllcn1cclxuICAgICAgICAgICAgICAgIGlzQWN0aXZlPXttYXBMZWdlbmQuYWN0aXZlfVxyXG4gICAgICAgICAgICAgICAgb25Ub2dnbGVNZW51UGFuZWw9eygpID0+IG9uVG9nZ2xlTWFwQ29udHJvbCgnbWFwTGVnZW5kJyl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9BY3Rpb25QYW5lbD5cclxuICAgICAgICAgICkgOiBudWxsfVxyXG5cclxuICAgICAgICAgIHttYXBEcmF3LnNob3cgPyAoXHJcbiAgICAgICAgICAgIDxBY3Rpb25QYW5lbCBrZXk9ezR9PlxyXG4gICAgICAgICAgICAgIDxNYXBEcmF3UGFuZWxcclxuICAgICAgICAgICAgICAgIGlzQWN0aXZlPXttYXBEcmF3LmFjdGl2ZSAmJiBtYXBEcmF3LmFjdGl2ZU1hcEluZGV4ID09PSBtYXBJbmRleH1cclxuICAgICAgICAgICAgICAgIGVkaXRvcj17ZWRpdG9yfVxyXG4gICAgICAgICAgICAgICAgb25Ub2dnbGVNZW51UGFuZWw9eygpID0+IG9uVG9nZ2xlTWFwQ29udHJvbCgnbWFwRHJhdycpfVxyXG4gICAgICAgICAgICAgICAgb25TZXRFZGl0b3JNb2RlPXt0aGlzLnByb3BzLm9uU2V0RWRpdG9yTW9kZX1cclxuICAgICAgICAgICAgICAgIG9uVG9nZ2xlRWRpdG9yVmlzaWJpbGl0eT17dGhpcy5wcm9wcy5vblRvZ2dsZUVkaXRvclZpc2liaWxpdHl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9BY3Rpb25QYW5lbD5cclxuICAgICAgICAgICkgOiBudWxsfVxyXG5cclxuICAgICAgICAgIHttYXBMb2NhbGUuc2hvdyA/IChcclxuICAgICAgICAgICAgPEFjdGlvblBhbmVsIGtleT17NX0+XHJcbiAgICAgICAgICAgICAgPExvY2FsZVBhbmVsXHJcbiAgICAgICAgICAgICAgICBpc0FjdGl2ZT17bWFwTG9jYWxlLmFjdGl2ZX1cclxuICAgICAgICAgICAgICAgIGFjdGl2ZUxvY2FsZT17bG9jYWxlfVxyXG4gICAgICAgICAgICAgICAgYXZhaWxhYmxlTG9jYWxlcz17T2JqZWN0LmtleXMoTE9DQUxFX0NPREVTKX1cclxuICAgICAgICAgICAgICAgIG9uU2V0TG9jYWxlPXt0aGlzLnByb3BzLm9uU2V0TG9jYWxlfVxyXG4gICAgICAgICAgICAgICAgb25Ub2dnbGVNZW51UGFuZWw9eygpID0+IG9uVG9nZ2xlTWFwQ29udHJvbCgnbWFwTG9jYWxlJyl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9BY3Rpb25QYW5lbD5cclxuICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgIDwvU3R5bGVkTWFwQ29udHJvbD5cclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIE1hcENvbnRyb2wuZGlzcGxheU5hbWUgPSAnTWFwQ29udHJvbCc7XHJcblxyXG4gIHJldHVybiBNYXBDb250cm9sO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFwQ29udHJvbEZhY3Rvcnk7XHJcbiJdfQ==