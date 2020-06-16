"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = EditorFactory;

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

var _reactMapGlDraw = require("react-map-gl-draw");

var _window = _interopRequireDefault(require("global/window"));

var _classnames = _interopRequireDefault(require("classnames"));

var _lodash = _interopRequireDefault(require("lodash.get"));

var _defaultSettings = require("../../constants/default-settings");

var _featureActionPanel = _interopRequireDefault(require("./feature-action-panel"));

var _featureStyles = require("./feature-styles");

var _handleStyle = require("./handle-style");

var _constants = require("../../constants");

var _reselect = require("reselect");

var _keyevent = _interopRequireDefault(require("../../constants/keyevent"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  cursor: ", ";\n  position: relative;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var StyledWrapper = _styledComponents["default"].div(_templateObject(), function (props) {
  return props.editor.mode === _constants.EDITOR_MODES.EDIT ? 'pointer' : 'crosshair';
});

var editorLayerFilter = function editorLayerFilter(layer) {
  return _defaultSettings.EDITOR_AVAILABLE_LAYERS.includes(layer.type);
};

EditorFactory.deps = [_featureActionPanel["default"]];

function EditorFactory(FeatureActionPanel) {
  var Editor = /*#__PURE__*/function (_Component) {
    (0, _inherits2["default"])(Editor, _Component);

    var _super = _createSuper(Editor);

    function Editor() {
      var _this;

      (0, _classCallCheck2["default"])(this, Editor);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
        showActions: false,
        lastPosition: null
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "layerSelector", function (props) {
        return props.layers;
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "layersToRenderSelector", function (props) {
        return props.layersToRender;
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "filterSelector", function (props) {
        return props.filters;
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "selectedFeatureIdSelector", function (props) {
        return (0, _lodash["default"])(props, ['editor', 'selectedFeature', 'id']);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "editorFeatureSelector", function (props) {
        return (0, _lodash["default"])(props, ['editor', 'features']);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "currentFilterSelector", (0, _reselect.createSelector)(_this.filterSelector, _this.selectedFeatureIdSelector, function (filters, selectedFeatureId) {
        return filters.find(function (f) {
          return f.value && f.value.id === selectedFeatureId;
        });
      }));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "availableLayersSeletor", (0, _reselect.createSelector)(_this.layerSelector, _this.layersToRenderSelector, function (layers, layersToRender) {
        return layers.filter(editorLayerFilter).filter(function (layer) {
          return layersToRender[layer.id];
        });
      }));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "allFeaturesSelector", (0, _reselect.createSelector)(_this.filterSelector, _this.editorFeatureSelector, function (filters, editorFeatures) {
        return filters.filter(function (f) {
          return f.type === _defaultSettings.FILTER_TYPES.polygon;
        }).map(function (f) {
          return f.value;
        }).concat(editorFeatures);
      }));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onKeyPressed", function (event) {
        var isEnabled = _this.props.isEnabled;

        if (!isEnabled) {
          return;
        }

        switch (event.keyCode) {
          case _keyevent["default"].DOM_VK_DELETE:
          case _keyevent["default"].DOM_VK_BACK_SPACE:
            _this._onDeleteSelectedFeature();

            break;

          case _keyevent["default"].DOM_VK_ESCAPE:
            _this.props.onSelect(null);

            break;

          default:
            break;
        }
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onSelect", function (_ref) {
        var selectedFeatureId = _ref.selectedFeatureId,
            sourceEvent = _ref.sourceEvent;

        var allFeatures = _this.allFeaturesSelector(_this.props);

        _this.setState(_objectSpread({}, sourceEvent.rightButton ? {
          showActions: true,
          lastPosition: {
            x: sourceEvent.changedPointers[0].offsetX,
            y: sourceEvent.changedPointers[0].offsetY
          }
        } : null), function () {
          _this.props.onSelect(allFeatures.find(function (f) {
            return f.id === selectedFeatureId;
          }));
        });
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onDeleteSelectedFeature", function () {
        if (_this.state.showActions) {
          _this.setState({
            showActions: false
          });
        }

        var editor = _this.props.editor;
        var _editor$selectedFeatu = editor.selectedFeature,
            selectedFeature = _editor$selectedFeatu === void 0 ? {} : _editor$selectedFeatu;

        _this.props.onDeleteFeature(selectedFeature);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_closeFeatureAction", function () {
        _this.setState({
          showActions: false
        });
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onToggleLayer", function (layer) {
        var selectedFeature = _this.props.editor.selectedFeature;

        if (!selectedFeature) {
          return;
        }

        _this.props.onTogglePolygonFilter(layer, selectedFeature);
      });
      return _this;
    }

    (0, _createClass2["default"])(Editor, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        _window["default"].addEventListener('keydown', this._onKeyPressed);
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        _window["default"].removeEventListener('keydown', this._onKeyPressed);
      }
    }, {
      key: "render",
      value: function render() {
        var _this$props = this.props,
            className = _this$props.className,
            clickRadius = _this$props.clickRadius,
            datasets = _this$props.datasets,
            editor = _this$props.editor,
            onUpdate = _this$props.onUpdate,
            style = _this$props.style;
        var _this$state = this.state,
            lastPosition = _this$state.lastPosition,
            showActions = _this$state.showActions;
        var selectedFeatureId = (0, _lodash["default"])(editor, ['selectedFeature', 'id']);
        var currentFilter = this.currentFilterSelector(this.props);
        var availableLayers = this.availableLayersSeletor(this.props);
        var allFeatures = this.allFeaturesSelector(this.props);
        return /*#__PURE__*/_react["default"].createElement(StyledWrapper, {
          editor: editor,
          className: (0, _classnames["default"])('editor', className),
          style: style
        }, /*#__PURE__*/_react["default"].createElement(_reactMapGlDraw.Editor, {
          clickRadius: clickRadius,
          mode: editor.mode,
          features: allFeatures,
          selectedFeatureId: selectedFeatureId,
          onSelect: this._onSelect,
          onUpdate: onUpdate,
          getEditHandleShape: _handleStyle.getEditHandleShape,
          getFeatureStyle: _featureStyles.getStyle,
          getEditHandleStyle: _handleStyle.getStyle
        }), showActions && Boolean(selectedFeatureId) ? /*#__PURE__*/_react["default"].createElement(FeatureActionPanel, {
          datasets: datasets,
          layers: availableLayers,
          currentFilter: currentFilter,
          onClose: this._closeFeatureAction,
          onDeleteFeature: this._onDeleteSelectedFeature,
          onToggleLayer: this._onToggleLayer,
          position: lastPosition
        }) : null);
      }
    }]);
    return Editor;
  }(_react.Component);

  (0, _defineProperty2["default"])(Editor, "propTypes", {
    filters: _propTypes["default"].arrayOf(_propTypes["default"].object).isRequired,
    layers: _propTypes["default"].arrayOf(_propTypes["default"].object).isRequired,
    datasets: _propTypes["default"].object.isRequired,
    editor: _propTypes["default"].object.isRequired,
    layersToRender: _propTypes["default"].object.isRequired,
    onSelect: _propTypes["default"].func.isRequired,
    onUpdate: _propTypes["default"].func.isRequired,
    onDeleteFeature: _propTypes["default"].func.isRequired,
    onTogglePolygonFilter: _propTypes["default"].func.isRequired,
    index: _propTypes["default"].number,
    classnames: _propTypes["default"].string,
    clickRadius: _propTypes["default"].number,
    isEnabled: _propTypes["default"].bool
  });
  (0, _defineProperty2["default"])(Editor, "defaultProps", {
    clickRadius: _featureStyles.DEFAULT_RADIUS
  });
  Editor.displayName = 'Editor';
  return Editor;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2VkaXRvci9lZGl0b3IuanMiXSwibmFtZXMiOlsiU3R5bGVkV3JhcHBlciIsInN0eWxlZCIsImRpdiIsInByb3BzIiwiZWRpdG9yIiwibW9kZSIsIkVESVRPUl9NT0RFUyIsIkVESVQiLCJlZGl0b3JMYXllckZpbHRlciIsImxheWVyIiwiRURJVE9SX0FWQUlMQUJMRV9MQVlFUlMiLCJpbmNsdWRlcyIsInR5cGUiLCJFZGl0b3JGYWN0b3J5IiwiZGVwcyIsIkZlYXR1cmVBY3Rpb25QYW5lbEZhY3RvcnkiLCJGZWF0dXJlQWN0aW9uUGFuZWwiLCJFZGl0b3IiLCJzaG93QWN0aW9ucyIsImxhc3RQb3NpdGlvbiIsImxheWVycyIsImxheWVyc1RvUmVuZGVyIiwiZmlsdGVycyIsImZpbHRlclNlbGVjdG9yIiwic2VsZWN0ZWRGZWF0dXJlSWRTZWxlY3RvciIsInNlbGVjdGVkRmVhdHVyZUlkIiwiZmluZCIsImYiLCJ2YWx1ZSIsImlkIiwibGF5ZXJTZWxlY3RvciIsImxheWVyc1RvUmVuZGVyU2VsZWN0b3IiLCJmaWx0ZXIiLCJlZGl0b3JGZWF0dXJlU2VsZWN0b3IiLCJlZGl0b3JGZWF0dXJlcyIsIkZJTFRFUl9UWVBFUyIsInBvbHlnb24iLCJtYXAiLCJjb25jYXQiLCJldmVudCIsImlzRW5hYmxlZCIsImtleUNvZGUiLCJLZXlFdmVudCIsIkRPTV9WS19ERUxFVEUiLCJET01fVktfQkFDS19TUEFDRSIsIl9vbkRlbGV0ZVNlbGVjdGVkRmVhdHVyZSIsIkRPTV9WS19FU0NBUEUiLCJvblNlbGVjdCIsInNvdXJjZUV2ZW50IiwiYWxsRmVhdHVyZXMiLCJhbGxGZWF0dXJlc1NlbGVjdG9yIiwic2V0U3RhdGUiLCJyaWdodEJ1dHRvbiIsIngiLCJjaGFuZ2VkUG9pbnRlcnMiLCJvZmZzZXRYIiwieSIsIm9mZnNldFkiLCJzdGF0ZSIsInNlbGVjdGVkRmVhdHVyZSIsIm9uRGVsZXRlRmVhdHVyZSIsIm9uVG9nZ2xlUG9seWdvbkZpbHRlciIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJfb25LZXlQcmVzc2VkIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNsYXNzTmFtZSIsImNsaWNrUmFkaXVzIiwiZGF0YXNldHMiLCJvblVwZGF0ZSIsInN0eWxlIiwiY3VycmVudEZpbHRlciIsImN1cnJlbnRGaWx0ZXJTZWxlY3RvciIsImF2YWlsYWJsZUxheWVycyIsImF2YWlsYWJsZUxheWVyc1NlbGV0b3IiLCJfb25TZWxlY3QiLCJnZXRFZGl0SGFuZGxlU2hhcGUiLCJnZXRGZWF0dXJlU3R5bGUiLCJnZXRFZGl0SGFuZGxlU3R5bGUiLCJCb29sZWFuIiwiX2Nsb3NlRmVhdHVyZUFjdGlvbiIsIl9vblRvZ2dsZUxheWVyIiwiQ29tcG9uZW50IiwiUHJvcFR5cGVzIiwiYXJyYXlPZiIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJmdW5jIiwiaW5kZXgiLCJudW1iZXIiLCJjbGFzc25hbWVzIiwic3RyaW5nIiwiYm9vbCIsIkRFRkFVTFRfUkFESVVTIiwiZGlzcGxheU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFHQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxhQUFhLEdBQUdDLDZCQUFPQyxHQUFWLG9CQUNQLFVBQUFDLEtBQUs7QUFBQSxTQUFLQSxLQUFLLENBQUNDLE1BQU4sQ0FBYUMsSUFBYixLQUFzQkMsd0JBQWFDLElBQW5DLEdBQTBDLFNBQTFDLEdBQXNELFdBQTNEO0FBQUEsQ0FERSxDQUFuQjs7QUFLQSxJQUFNQyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUFDLEtBQUs7QUFBQSxTQUFJQyx5Q0FBd0JDLFFBQXhCLENBQWlDRixLQUFLLENBQUNHLElBQXZDLENBQUo7QUFBQSxDQUEvQjs7QUFFQUMsYUFBYSxDQUFD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QUlqQmxGLElBQUFBLE1BQU0sRUFBRStFLHNCQUFVRSxNQUFWLENBQWlCQyxVQUpSO0FBS2pCakUsSUFBQUEsY0FBYyxFQUFFOEQsc0JBQVVFLE1BQVYsQ0FBaUJDLFVBTGhCO0FBTWpCdkMsSUFBQUEsUUFBUSxFQUFFb0Msc0JBQVVJLElBQVYsQ0FBZUQsVUFOUjtBQU9qQmpCLElBQUFBLFFBQVEsRUFBRWMsc0JBQVVJLElBQVYsQ0FBZUQsVUFQUjtBQVFqQjFCLElBQUFBLGVBQWUsRUFBRXVCLHNCQUFVSSxJQUFWLENBQWVELFVBUmY7QUFTakJ6QixJQUFBQSxxQkFBcUIsRUFBRXNCLHNCQUFVSSxJQUFWLENBQWVELFVBVHJCO0FBV2pCRSxJQUFBQSxLQUFLLEVBQUVMLHNCQUFVTSxNQVhBO0FBWWpCQyxJQUFBQSxVQUFVLEVBQUVQLHNCQUFVUSxNQVpMO0FBYWpCeEIsSUFBQUEsV0FBVyxFQUFFZ0Isc0JBQVVNLE1BYk47QUFjakJqRCxJQUFBQSxTQUFTLEVBQUUyQyxzQkFBVVM7QUFkSixHQUZtQztBQUFBLG1DQUNsRDNFLE1BRGtELGtCQW1CaEM7QUFDcEJrRCxJQUFBQSxXQUFXLEVBQUUwQjtBQURPLEdBbkJnQztBQXdLeEQ1RSxFQUFBQSxNQUFNLENBQUM2RSxXQUFQLEdBQXFCLFFBQXJCO0FBRUEsU0FBTzdFLE1BQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMCBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHtFZGl0b3IgYXMgRHJhd30gZnJvbSAncmVhY3QtbWFwLWdsLWRyYXcnO1xyXG5pbXBvcnQgd2luZG93IGZyb20gJ2dsb2JhbC93aW5kb3cnO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcclxuaW1wb3J0IGdldCBmcm9tICdsb2Rhc2guZ2V0JztcclxuXHJcbmltcG9ydCB7RURJVE9SX0FWQUlMQUJMRV9MQVlFUlN9IGZyb20gJ2NvbnN0YW50cy9kZWZhdWx0LXNldHRpbmdzJztcclxuaW1wb3J0IEZlYXR1cmVBY3Rpb25QYW5lbEZhY3RvcnkgZnJvbSAnLi9mZWF0dXJlLWFjdGlvbi1wYW5lbCc7XHJcbmltcG9ydCB7RklMVEVSX1RZUEVTfSBmcm9tICdjb25zdGFudHMvZGVmYXVsdC1zZXR0aW5ncyc7XHJcblxyXG5pbXBvcnQge0RFRkFVTFRfUkFESVVTLCBnZXRTdHlsZSBhcyBnZXRGZWF0dXJlU3R5bGV9IGZyb20gJy4vZmVhdHVyZS1zdHlsZXMnO1xyXG5pbXBvcnQge2dldFN0eWxlIGFzIGdldEVkaXRIYW5kbGVTdHlsZSwgZ2V0RWRpdEhhbmRsZVNoYXBlfSBmcm9tICcuL2hhbmRsZS1zdHlsZSc7XHJcbmltcG9ydCB7RURJVE9SX01PREVTfSBmcm9tICdjb25zdGFudHMnO1xyXG5pbXBvcnQge2NyZWF0ZVNlbGVjdG9yfSBmcm9tICdyZXNlbGVjdCc7XHJcbmltcG9ydCBLZXlFdmVudCBmcm9tICdjb25zdGFudHMva2V5ZXZlbnQnO1xyXG5cclxuY29uc3QgU3R5bGVkV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgY3Vyc29yOiAke3Byb3BzID0+IChwcm9wcy5lZGl0b3IubW9kZSA9PT0gRURJVE9SX01PREVTLkVESVQgPyAncG9pbnRlcicgOiAnY3Jvc3NoYWlyJyl9O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuYDtcclxuXHJcbmNvbnN0IGVkaXRvckxheWVyRmlsdGVyID0gbGF5ZXIgPT4gRURJVE9SX0FWQUlMQUJMRV9MQVlFUlMuaW5jbHVkZXMobGF5ZXIudHlwZSk7XHJcblxyXG5FZGl0b3JGYWN0b3J5LmRlcHMgPSBbRmVhdHVyZUFjdGlvblBhbmVsRmFjdG9yeV07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFZGl0b3JGYWN0b3J5KEZlYXR1cmVBY3Rpb25QYW5lbCkge1xyXG4gIGNsYXNzIEVkaXRvciBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xyXG4gICAgICBmaWx0ZXJzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KS5pc1JlcXVpcmVkLFxyXG4gICAgICBsYXllcnM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLmlzUmVxdWlyZWQsXHJcbiAgICAgIGRhdGFzZXRzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXHJcbiAgICAgIGVkaXRvcjogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxyXG4gICAgICBsYXllcnNUb1JlbmRlcjogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxyXG4gICAgICBvblNlbGVjdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICAgICAgb25VcGRhdGU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgICAgIG9uRGVsZXRlRmVhdHVyZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICAgICAgb25Ub2dnbGVQb2x5Z29uRmlsdGVyOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG5cclxuICAgICAgaW5kZXg6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICAgIGNsYXNzbmFtZXM6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgIGNsaWNrUmFkaXVzOiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgICBpc0VuYWJsZWQ6IFByb3BUeXBlcy5ib29sXHJcbiAgICB9O1xyXG5cclxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XHJcbiAgICAgIGNsaWNrUmFkaXVzOiBERUZBVUxUX1JBRElVU1xyXG4gICAgfTtcclxuXHJcbiAgICBzdGF0ZSA9IHtcclxuICAgICAgc2hvd0FjdGlvbnM6IGZhbHNlLFxyXG4gICAgICBsYXN0UG9zaXRpb246IG51bGxcclxuICAgIH07XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5fb25LZXlQcmVzc2VkKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLl9vbktleVByZXNzZWQpO1xyXG4gICAgfVxyXG5cclxuICAgIGxheWVyU2VsZWN0b3IgPSBwcm9wcyA9PiBwcm9wcy5sYXllcnM7XHJcbiAgICBsYXllcnNUb1JlbmRlclNlbGVjdG9yID0gcHJvcHMgPT4gcHJvcHMubGF5ZXJzVG9SZW5kZXI7XHJcbiAgICBmaWx0ZXJTZWxlY3RvciA9IHByb3BzID0+IHByb3BzLmZpbHRlcnM7XHJcbiAgICBzZWxlY3RlZEZlYXR1cmVJZFNlbGVjdG9yID0gcHJvcHMgPT4gZ2V0KHByb3BzLCBbJ2VkaXRvcicsICdzZWxlY3RlZEZlYXR1cmUnLCAnaWQnXSk7XHJcbiAgICBlZGl0b3JGZWF0dXJlU2VsZWN0b3IgPSBwcm9wcyA9PiBnZXQocHJvcHMsIFsnZWRpdG9yJywgJ2ZlYXR1cmVzJ10pO1xyXG5cclxuICAgIGN1cnJlbnRGaWx0ZXJTZWxlY3RvciA9IGNyZWF0ZVNlbGVjdG9yKFxyXG4gICAgICB0aGlzLmZpbHRlclNlbGVjdG9yLFxyXG4gICAgICB0aGlzLnNlbGVjdGVkRmVhdHVyZUlkU2VsZWN0b3IsXHJcbiAgICAgIChmaWx0ZXJzLCBzZWxlY3RlZEZlYXR1cmVJZCkgPT4gZmlsdGVycy5maW5kKGYgPT4gZi52YWx1ZSAmJiBmLnZhbHVlLmlkID09PSBzZWxlY3RlZEZlYXR1cmVJZClcclxuICAgICk7XHJcblxyXG4gICAgYXZhaWxhYmxlTGF5ZXJzU2VsZXRvciA9IGNyZWF0ZVNlbGVjdG9yKFxyXG4gICAgICB0aGlzLmxheWVyU2VsZWN0b3IsXHJcbiAgICAgIHRoaXMubGF5ZXJzVG9SZW5kZXJTZWxlY3RvcixcclxuICAgICAgKGxheWVycywgbGF5ZXJzVG9SZW5kZXIpID0+XHJcbiAgICAgICAgbGF5ZXJzLmZpbHRlcihlZGl0b3JMYXllckZpbHRlcikuZmlsdGVyKGxheWVyID0+IHtcclxuICAgICAgICAgIHJldHVybiBsYXllcnNUb1JlbmRlcltsYXllci5pZF07XHJcbiAgICAgICAgfSlcclxuICAgICk7XHJcblxyXG4gICAgYWxsRmVhdHVyZXNTZWxlY3RvciA9IGNyZWF0ZVNlbGVjdG9yKFxyXG4gICAgICB0aGlzLmZpbHRlclNlbGVjdG9yLFxyXG4gICAgICB0aGlzLmVkaXRvckZlYXR1cmVTZWxlY3RvcixcclxuICAgICAgKGZpbHRlcnMsIGVkaXRvckZlYXR1cmVzKSA9PlxyXG4gICAgICAgIGZpbHRlcnNcclxuICAgICAgICAgIC5maWx0ZXIoZiA9PiBmLnR5cGUgPT09IEZJTFRFUl9UWVBFUy5wb2x5Z29uKVxyXG4gICAgICAgICAgLm1hcChmID0+IGYudmFsdWUpXHJcbiAgICAgICAgICAuY29uY2F0KGVkaXRvckZlYXR1cmVzKVxyXG4gICAgKTtcclxuXHJcbiAgICBfb25LZXlQcmVzc2VkID0gZXZlbnQgPT4ge1xyXG4gICAgICBjb25zdCB7aXNFbmFibGVkfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICBpZiAoIWlzRW5hYmxlZCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgc3dpdGNoIChldmVudC5rZXlDb2RlKSB7XHJcbiAgICAgICAgY2FzZSBLZXlFdmVudC5ET01fVktfREVMRVRFOlxyXG4gICAgICAgIGNhc2UgS2V5RXZlbnQuRE9NX1ZLX0JBQ0tfU1BBQ0U6XHJcbiAgICAgICAgICB0aGlzLl9vbkRlbGV0ZVNlbGVjdGVkRmVhdHVyZSgpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBLZXlFdmVudC5ET01fVktfRVNDQVBFOlxyXG4gICAgICAgICAgdGhpcy5wcm9wcy5vblNlbGVjdChudWxsKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBfb25TZWxlY3QgPSAoe3NlbGVjdGVkRmVhdHVyZUlkLCBzb3VyY2VFdmVudH0pID0+IHtcclxuICAgICAgY29uc3QgYWxsRmVhdHVyZXMgPSB0aGlzLmFsbEZlYXR1cmVzU2VsZWN0b3IodGhpcy5wcm9wcyk7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgLi4uKHNvdXJjZUV2ZW50LnJpZ2h0QnV0dG9uXHJcbiAgICAgICAgICAgID8ge1xyXG4gICAgICAgICAgICAgICAgc2hvd0FjdGlvbnM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBsYXN0UG9zaXRpb246IHtcclxuICAgICAgICAgICAgICAgICAgeDogc291cmNlRXZlbnQuY2hhbmdlZFBvaW50ZXJzWzBdLm9mZnNldFgsXHJcbiAgICAgICAgICAgICAgICAgIHk6IHNvdXJjZUV2ZW50LmNoYW5nZWRQb2ludGVyc1swXS5vZmZzZXRZXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA6IG51bGwpXHJcbiAgICAgICAgfSxcclxuICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnByb3BzLm9uU2VsZWN0KGFsbEZlYXR1cmVzLmZpbmQoZiA9PiBmLmlkID09PSBzZWxlY3RlZEZlYXR1cmVJZCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuICAgIH07XHJcblxyXG4gICAgX29uRGVsZXRlU2VsZWN0ZWRGZWF0dXJlID0gKCkgPT4ge1xyXG4gICAgICBpZiAodGhpcy5zdGF0ZS5zaG93QWN0aW9ucykge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3Nob3dBY3Rpb25zOiBmYWxzZX0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCB7ZWRpdG9yfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgIGNvbnN0IHtzZWxlY3RlZEZlYXR1cmUgPSB7fX0gPSBlZGl0b3I7XHJcbiAgICAgIHRoaXMucHJvcHMub25EZWxldGVGZWF0dXJlKHNlbGVjdGVkRmVhdHVyZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIF9jbG9zZUZlYXR1cmVBY3Rpb24gPSAoKSA9PiB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe3Nob3dBY3Rpb25zOiBmYWxzZX0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBfb25Ub2dnbGVMYXllciA9IGxheWVyID0+IHtcclxuICAgICAgY29uc3Qge3NlbGVjdGVkRmVhdHVyZX0gPSB0aGlzLnByb3BzLmVkaXRvcjtcclxuICAgICAgaWYgKCFzZWxlY3RlZEZlYXR1cmUpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMucHJvcHMub25Ub2dnbGVQb2x5Z29uRmlsdGVyKGxheWVyLCBzZWxlY3RlZEZlYXR1cmUpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgIGNvbnN0IHtjbGFzc05hbWUsIGNsaWNrUmFkaXVzLCBkYXRhc2V0cywgZWRpdG9yLCBvblVwZGF0ZSwgc3R5bGV9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgIGNvbnN0IHtsYXN0UG9zaXRpb24sIHNob3dBY3Rpb25zfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgIGNvbnN0IHNlbGVjdGVkRmVhdHVyZUlkID0gZ2V0KGVkaXRvciwgWydzZWxlY3RlZEZlYXR1cmUnLCAnaWQnXSk7XHJcbiAgICAgIGNvbnN0IGN1cnJlbnRGaWx0ZXIgPSB0aGlzLmN1cnJlbnRGaWx0ZXJTZWxlY3Rvcih0aGlzLnByb3BzKTtcclxuICAgICAgY29uc3QgYXZhaWxhYmxlTGF5ZXJzID0gdGhpcy5hdmFpbGFibGVMYXllcnNTZWxldG9yKHRoaXMucHJvcHMpO1xyXG4gICAgICBjb25zdCBhbGxGZWF0dXJlcyA9IHRoaXMuYWxsRmVhdHVyZXNTZWxlY3Rvcih0aGlzLnByb3BzKTtcclxuXHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPFN0eWxlZFdyYXBwZXIgZWRpdG9yPXtlZGl0b3J9IGNsYXNzTmFtZT17Y2xhc3NuYW1lcygnZWRpdG9yJywgY2xhc3NOYW1lKX0gc3R5bGU9e3N0eWxlfT5cclxuICAgICAgICAgIDxEcmF3XHJcbiAgICAgICAgICAgIGNsaWNrUmFkaXVzPXtjbGlja1JhZGl1c31cclxuICAgICAgICAgICAgbW9kZT17ZWRpdG9yLm1vZGV9XHJcbiAgICAgICAgICAgIGZlYXR1cmVzPXthbGxGZWF0dXJlc31cclxuICAgICAgICAgICAgc2VsZWN0ZWRGZWF0dXJlSWQ9e3NlbGVjdGVkRmVhdHVyZUlkfVxyXG4gICAgICAgICAgICBvblNlbGVjdD17dGhpcy5fb25TZWxlY3R9XHJcbiAgICAgICAgICAgIG9uVXBkYXRlPXtvblVwZGF0ZX1cclxuICAgICAgICAgICAgZ2V0RWRpdEhhbmRsZVNoYXBlPXtnZXRFZGl0SGFuZGxlU2hhcGV9XHJcbiAgICAgICAgICAgIGdldEZlYXR1cmVTdHlsZT17Z2V0RmVhdHVyZVN0eWxlfVxyXG4gICAgICAgICAgICBnZXRFZGl0SGFuZGxlU3R5bGU9e2dldEVkaXRIYW5kbGVTdHlsZX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICB7c2hvd0FjdGlvbnMgJiYgQm9vbGVhbihzZWxlY3RlZEZlYXR1cmVJZCkgPyAoXHJcbiAgICAgICAgICAgIDxGZWF0dXJlQWN0aW9uUGFuZWxcclxuICAgICAgICAgICAgICBkYXRhc2V0cz17ZGF0YXNldHN9XHJcbiAgICAgICAgICAgICAgbGF5ZXJzPXthdmFpbGFibGVMYXllcnN9XHJcbiAgICAgICAgICAgICAgY3VycmVudEZpbHRlcj17Y3VycmVudEZpbHRlcn1cclxuICAgICAgICAgICAgICBvbkNsb3NlPXt0aGlzLl9jbG9zZUZlYXR1cmVBY3Rpb259XHJcbiAgICAgICAgICAgICAgb25EZWxldGVGZWF0dXJlPXt0aGlzLl9vbkRlbGV0ZVNlbGVjdGVkRmVhdHVyZX1cclxuICAgICAgICAgICAgICBvblRvZ2dsZUxheWVyPXt0aGlzLl9vblRvZ2dsZUxheWVyfVxyXG4gICAgICAgICAgICAgIHBvc2l0aW9uPXtsYXN0UG9zaXRpb259XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICA8L1N0eWxlZFdyYXBwZXI+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBFZGl0b3IuZGlzcGxheU5hbWUgPSAnRWRpdG9yJztcclxuXHJcbiAgcmV0dXJuIEVkaXRvcjtcclxufVxyXG4iXX0=