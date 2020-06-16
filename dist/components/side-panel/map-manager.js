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

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = require("../common/styled-components");

var _mapStyleSelector = _interopRequireDefault(require("./map-style-panel/map-style-selector"));

var _mapLayerSelector = _interopRequireDefault(require("./map-style-panel/map-layer-selector"));

var _icons = require("../common/icons");

var _defaultSettings = require("../../constants/default-settings");

var _colorSelector = _interopRequireDefault(require("./layer-panel/color-selector"));

var _reselect = require("reselect");

var _reactIntl = require("react-intl");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

MapManagerFactory.deps = [_mapStyleSelector["default"], _mapLayerSelector["default"]];

function MapManagerFactory(MapStyleSelector, LayerGroupSelector) {
  var MapManager = /*#__PURE__*/function (_Component) {
    (0, _inherits2["default"])(MapManager, _Component);

    var _super = _createSuper(MapManager);

    function MapManager() {
      var _this;

      (0, _classCallCheck2["default"])(this, MapManager);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
        isSelecting: false
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "buildingColorSelector", function (props) {
        return props.mapStyle.threeDBuildingColor;
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "setColorSelector", function (props) {
        return props.set3dBuildingColor;
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_toggleSelecting", function () {
        _this.setState({
          isSelecting: !_this.state.isSelecting
        });
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_selectStyle", function (val) {
        _this.props.onStyleChange(val);

        _this._toggleSelecting();
      });
      return _this;
    }

    (0, _createClass2["default"])(MapManager, [{
      key: "render",
      value: function render() {
        var _this$props = this.props,
            mapStyle = _this$props.mapStyle,
            intl = _this$props.intl;

        var editableLayers = _defaultSettings.DEFAULT_LAYER_GROUPS.map(function (lg) {
          return lg.slug;
        });

        var hasBuildingLayer = mapStyle.visibleLayerGroups['3d building'];
        var colorSetSelector = (0, _reselect.createSelector)(this.buildingColorSelector, this.setColorSelector, function (selectedColor, setColor) {
          return [{
            selectedColor: selectedColor,
            setColor: setColor,
            isRange: false,
            label: intl.formatMessage({
              id: 'mapManager.3dBuildingColor'
            })
          }];
        });
        var colorSets = colorSetSelector(this.props);
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: "map-style-panel"
        }, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(MapStyleSelector, {
          mapStyle: mapStyle,
          isSelecting: this.state.isSelecting,
          onChange: this._selectStyle,
          toggleActive: this._toggleSelecting
        }), editableLayers.length ? /*#__PURE__*/_react["default"].createElement(LayerGroupSelector, {
          layers: mapStyle.visibleLayerGroups,
          editableLayers: editableLayers,
          topLayers: mapStyle.topLayerGroups,
          onChange: this.props.onConfigChange
        }) : null, /*#__PURE__*/_react["default"].createElement(_styledComponents.SidePanelSection, null, /*#__PURE__*/_react["default"].createElement(_colorSelector["default"], {
          colorSets: colorSets,
          disabled: !hasBuildingLayer
        })), /*#__PURE__*/_react["default"].createElement(_styledComponents.Button, {
          className: "add-map-style-button",
          onClick: this.props.showAddMapStyleModal,
          secondary: true
        }, /*#__PURE__*/_react["default"].createElement(_icons.Add, {
          height: "12px"
        }), /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
          id: 'mapManager.addMapStyle'
        }))));
      }
    }]);
    return MapManager;
  }(_react.Component);

  (0, _defineProperty2["default"])(MapManager, "propTypes", {
    mapStyle: _propTypes["default"].object.isRequired,
    onConfigChange: _propTypes["default"].func.isRequired,
    onStyleChange: _propTypes["default"].func.isRequired,
    showAddMapStyleModal: _propTypes["default"].func.isRequired
  });
  return (0, _reactIntl.injectIntl)(MapManager);
}

var _default = MapManagerFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NpZGUtcGFuZWwvbWFwLW1hbmFnZXIuanMiXSwibmFtZXMiOlsiTWFwTWFuYWdlckZhY3RvcnkiLCJkZXBzIiwiTWFwU3R5bGVTZWxlY3RvckZhY3RvcnkiLCJMYXllckdyb3VwU2VsZWN0b3JGYWN0b3J5IiwiTWFwU3R5bGVTZWxlY3RvciIsIkxheWVyR3JvdXBTZWxlY3RvciIsIk1hcE1hbmFnZXIiLCJpc1NlbGVjdGluZyIsInByb3BzIiwibWFwU3R5bGUiLCJ0aHJlZURCdWlsZGluZ0NvbG9yIiwic2V0M2RCdWlsZGluZ0NvbG9yIiwic2V0U3RhdGUiLCJzdGF0ZSIsInZhbCIsIm9uU3R5bGVDaGFuZ2UiLCJfdG9nZ2xlU2VsZWN0aW5nIiwiaW50bCIsImVkaXRhYmxlTGF5ZXJzIiwiREVGQVVMVF9MQVlFUl9HUk9VUFMiLCJtYXAiLCJsZyIsInNsdWciLCJoYXNCdWlsZGluZ0xheWVyIiwidmlzaWJsZUxheWVyR3JvdXBzIiwiY29sb3JTZXRTZWxlY3RvciIsImJ1aWxkaW5nQ29sb3JTZWxlY3RvciIsInNldENvbG9yU2VsZWN0b3IiLCJzZWxlY3RlZENvbG9yIiwic2V0Q29sb3IiLCJpc1JhbmdlIiwibGFiZWwiLCJmb3JtYXRNZXNzYWdlIiwiaWQiLCJjb2xvclNldHMiLCJfc2VsZWN0U3R5bGUiLCJsZW5ndGgiLCJ0b3BMYXllckdyb3VwcyIsIm9uQ29uZmlnQ2hhbmdlIiwic2hvd0FkZE1hcFN0eWxlTW9kYWwiLCJDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7O0FBRUFBLGlCQUFpQixDQUFDQyxJQUFsQixHQUF5QixDQUFDQyw0QkFBRCxFQUEwQkMsNEJBQTFCLENBQXpC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VUFMRixlQU1FLGdDQUFDLDJCQUFEO0FBQWtCLFVBQUEsRUFBRSxFQUFFO0FBQXRCLFVBTkYsQ0FsQkYsQ0FERixDQURGO0FBK0JEO0FBM0U0RDtBQUFBO0FBQUEsSUFDdENDLGdCQURzQzs7QUFBQSxtQ0FDekRsQyxVQUR5RCxlQUUxQztBQUNqQkcsSUFBQUEsUUFBUSxFQUFFZ0Msc0JBQVVDLE1BQVYsQ0FBaUJDLFVBRFY7QUFFakJMLElBQUFBLGNBQWMsRUFBRUcsc0JBQVVHLElBQVYsQ0FBZUQsVUFGZDtBQUdqQjVCLElBQUFBLGFBQWEsRUFBRTBCLHNCQUFVRyxJQUFWLENBQWVELFVBSGI7QUFJakJKLElBQUFBLG9CQUFvQixFQUFFRSxzQkFBVUcsSUFBVixDQUFlRDtBQUpwQixHQUYwQztBQTZFL0QsU0FBTywyQkFBV3JDLFVBQVgsQ0FBUDtBQUNEOztlQUVjTixpQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMCBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuaW1wb3J0IHtCdXR0b24sIFNpZGVQYW5lbFNlY3Rpb259IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IE1hcFN0eWxlU2VsZWN0b3JGYWN0b3J5IGZyb20gJ2NvbXBvbmVudHMvc2lkZS1wYW5lbC9tYXAtc3R5bGUtcGFuZWwvbWFwLXN0eWxlLXNlbGVjdG9yJztcclxuaW1wb3J0IExheWVyR3JvdXBTZWxlY3RvckZhY3RvcnkgZnJvbSAnY29tcG9uZW50cy9zaWRlLXBhbmVsL21hcC1zdHlsZS1wYW5lbC9tYXAtbGF5ZXItc2VsZWN0b3InO1xyXG5cclxuaW1wb3J0IHtBZGR9IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL2ljb25zJztcclxuaW1wb3J0IHtERUZBVUxUX0xBWUVSX0dST1VQU30gZnJvbSAnY29uc3RhbnRzL2RlZmF1bHQtc2V0dGluZ3MnO1xyXG5pbXBvcnQgQ29sb3JTZWxlY3RvciBmcm9tICcuL2xheWVyLXBhbmVsL2NvbG9yLXNlbGVjdG9yJztcclxuaW1wb3J0IHtjcmVhdGVTZWxlY3Rvcn0gZnJvbSAncmVzZWxlY3QnO1xyXG5pbXBvcnQge0Zvcm1hdHRlZE1lc3NhZ2UsIGluamVjdEludGx9IGZyb20gJ3JlYWN0LWludGwnO1xyXG5cclxuTWFwTWFuYWdlckZhY3RvcnkuZGVwcyA9IFtNYXBTdHlsZVNlbGVjdG9yRmFjdG9yeSwgTGF5ZXJHcm91cFNlbGVjdG9yRmFjdG9yeV07XHJcblxyXG5mdW5jdGlvbiBNYXBNYW5hZ2VyRmFjdG9yeShNYXBTdHlsZVNlbGVjdG9yLCBMYXllckdyb3VwU2VsZWN0b3IpIHtcclxuICBjbGFzcyBNYXBNYW5hZ2VyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XHJcbiAgICAgIG1hcFN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXHJcbiAgICAgIG9uQ29uZmlnQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gICAgICBvblN0eWxlQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gICAgICBzaG93QWRkTWFwU3R5bGVNb2RhbDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxyXG4gICAgfTtcclxuXHJcbiAgICBzdGF0ZSA9IHtcclxuICAgICAgaXNTZWxlY3Rpbmc6IGZhbHNlXHJcbiAgICB9O1xyXG5cclxuICAgIGJ1aWxkaW5nQ29sb3JTZWxlY3RvciA9IHByb3BzID0+IHByb3BzLm1hcFN0eWxlLnRocmVlREJ1aWxkaW5nQ29sb3I7XHJcbiAgICBzZXRDb2xvclNlbGVjdG9yID0gcHJvcHMgPT4gcHJvcHMuc2V0M2RCdWlsZGluZ0NvbG9yO1xyXG5cclxuICAgIF90b2dnbGVTZWxlY3RpbmcgPSAoKSA9PiB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2lzU2VsZWN0aW5nOiAhdGhpcy5zdGF0ZS5pc1NlbGVjdGluZ30pO1xyXG4gICAgfTtcclxuXHJcbiAgICBfc2VsZWN0U3R5bGUgPSB2YWwgPT4ge1xyXG4gICAgICB0aGlzLnByb3BzLm9uU3R5bGVDaGFuZ2UodmFsKTtcclxuICAgICAgdGhpcy5fdG9nZ2xlU2VsZWN0aW5nKCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgY29uc3Qge21hcFN0eWxlLCBpbnRsfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgIGNvbnN0IGVkaXRhYmxlTGF5ZXJzID0gREVGQVVMVF9MQVlFUl9HUk9VUFMubWFwKGxnID0+IGxnLnNsdWcpO1xyXG4gICAgICBjb25zdCBoYXNCdWlsZGluZ0xheWVyID0gbWFwU3R5bGUudmlzaWJsZUxheWVyR3JvdXBzWyczZCBidWlsZGluZyddO1xyXG4gICAgICBjb25zdCBjb2xvclNldFNlbGVjdG9yID0gY3JlYXRlU2VsZWN0b3IoXHJcbiAgICAgICAgdGhpcy5idWlsZGluZ0NvbG9yU2VsZWN0b3IsXHJcbiAgICAgICAgdGhpcy5zZXRDb2xvclNlbGVjdG9yLFxyXG4gICAgICAgIChzZWxlY3RlZENvbG9yLCBzZXRDb2xvcikgPT4gW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBzZWxlY3RlZENvbG9yLFxyXG4gICAgICAgICAgICBzZXRDb2xvcixcclxuICAgICAgICAgICAgaXNSYW5nZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGxhYmVsOiBpbnRsLmZvcm1hdE1lc3NhZ2Uoe2lkOiAnbWFwTWFuYWdlci4zZEJ1aWxkaW5nQ29sb3InfSlcclxuICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICAgICk7XHJcblxyXG4gICAgICBjb25zdCBjb2xvclNldHMgPSBjb2xvclNldFNlbGVjdG9yKHRoaXMucHJvcHMpO1xyXG5cclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1hcC1zdHlsZS1wYW5lbFwiPlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPE1hcFN0eWxlU2VsZWN0b3JcclxuICAgICAgICAgICAgICBtYXBTdHlsZT17bWFwU3R5bGV9XHJcbiAgICAgICAgICAgICAgaXNTZWxlY3Rpbmc9e3RoaXMuc3RhdGUuaXNTZWxlY3Rpbmd9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuX3NlbGVjdFN0eWxlfVxyXG4gICAgICAgICAgICAgIHRvZ2dsZUFjdGl2ZT17dGhpcy5fdG9nZ2xlU2VsZWN0aW5nfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICB7ZWRpdGFibGVMYXllcnMubGVuZ3RoID8gKFxyXG4gICAgICAgICAgICAgIDxMYXllckdyb3VwU2VsZWN0b3JcclxuICAgICAgICAgICAgICAgIGxheWVycz17bWFwU3R5bGUudmlzaWJsZUxheWVyR3JvdXBzfVxyXG4gICAgICAgICAgICAgICAgZWRpdGFibGVMYXllcnM9e2VkaXRhYmxlTGF5ZXJzfVxyXG4gICAgICAgICAgICAgICAgdG9wTGF5ZXJzPXttYXBTdHlsZS50b3BMYXllckdyb3Vwc31cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnByb3BzLm9uQ29uZmlnQ2hhbmdlfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICA8U2lkZVBhbmVsU2VjdGlvbj5cclxuICAgICAgICAgICAgICA8Q29sb3JTZWxlY3RvciBjb2xvclNldHM9e2NvbG9yU2V0c30gZGlzYWJsZWQ9eyFoYXNCdWlsZGluZ0xheWVyfSAvPlxyXG4gICAgICAgICAgICA8L1NpZGVQYW5lbFNlY3Rpb24+XHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhZGQtbWFwLXN0eWxlLWJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5wcm9wcy5zaG93QWRkTWFwU3R5bGVNb2RhbH1cclxuICAgICAgICAgICAgICBzZWNvbmRhcnlcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxBZGQgaGVpZ2h0PVwiMTJweFwiIC8+XHJcbiAgICAgICAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2UgaWQ9eydtYXBNYW5hZ2VyLmFkZE1hcFN0eWxlJ30gLz5cclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIGluamVjdEludGwoTWFwTWFuYWdlcik7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1hcE1hbmFnZXJGYWN0b3J5O1xyXG4iXX0=