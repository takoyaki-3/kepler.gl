"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ColorPaletteGroup = exports.PaletteConfig = exports["default"] = exports.ALL_STEPS = exports.ALL_TYPES = void 0;

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

var _lodash = _interopRequireDefault(require("lodash.uniq"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reselect = require("reselect");

var _itemSelector = _interopRequireDefault(require("../../common/item-selector/item-selector"));

var _styledComponents2 = require("../../common/styled-components");

var _switch = _interopRequireDefault(require("../../common/switch"));

var _colorPalette = _interopRequireDefault(require("./color-palette"));

var _customPalette = _interopRequireDefault(require("./custom-palette"));

var _colorRanges = require("../../../constants/color-ranges");

var _dataUtils = require("../../../utils/data-utils");

var _colorUtils = require("../../../utils/color-utils");

var _reactIntl = require("react-intl");

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  padding: 0 8px;\n  :hover {\n    background-color: ", ";\n    cursor: pointer;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  margin-bottom: 8px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  .color-palette__config__label {\n    flex-grow: 1;\n  }\n  .color-palette__config__select {\n    flex-grow: 1;\n  }\n  .item-selector .item-selector__dropdown {\n    ", ";\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  padding-bottom: 12px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  padding: 12px 12px 0 12px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var ALL_TYPES = (0, _lodash["default"])(_colorRanges.COLOR_RANGES.map(function (c) {
  return c.type;
}).filter(function (ctype) {
  return ctype;
}).concat(['all', 'custom']));
exports.ALL_TYPES = ALL_TYPES;
var ALL_STEPS = (0, _lodash["default"])(_colorRanges.COLOR_RANGES.map(function (d) {
  return d.colors.length;
})).sort(_dataUtils.numberSort);
exports.ALL_STEPS = ALL_STEPS;

var StyledColorConfig = _styledComponents["default"].div(_templateObject());

var StyledColorRangeSelector = _styledComponents["default"].div.attrs({
  className: 'color-range-selector'
})(_templateObject2());

var StyledPaletteConfig = _styledComponents["default"].div(_templateObject3(), function (props) {
  return props.theme.secondaryInput;
});

var CONFIG_SETTINGS = {
  type: {
    type: 'select',
    options: ALL_TYPES
  },
  steps: {
    type: 'select',
    options: ALL_STEPS
  },
  reversed: {
    type: 'switch',
    options: [true, false]
  },
  custom: {
    label: 'customPalette',
    type: 'switch',
    options: [true, false]
  }
};

var ColorRangeSelect = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(ColorRangeSelect, _Component);

  var _super = _createSuper(ColorRangeSelect);

  function ColorRangeSelect() {
    var _this;

    (0, _classCallCheck2["default"])(this, ColorRangeSelect);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "colorRangesSelector", function (props) {
      return props.colorRanges;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "configTypeSelector", function (props) {
      return props.colorPaletteUI.colorRangeConfig.type;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "configStepSelector", function (props) {
      return props.colorPaletteUI.colorRangeConfig.steps;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "filteredColorRange", (0, _reselect.createSelector)(_this.colorRangesSelector, _this.configTypeSelector, _this.configStepSelector, function (colorRanges, type, steps) {
      return colorRanges.filter(function (colorRange) {
        var isType = type === 'all' || type === colorRange.type;
        var isStep = Number(steps) === colorRange.colors.length;
        return isType && isStep;
      });
    }));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_updateConfig", function (_ref) {
      var key = _ref.key,
          value = _ref.value;

      _this._setColorRangeConfig((0, _defineProperty2["default"])({}, key, value));
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onSetCustomPalette", function (config) {
      _this.props.setColorPaletteUI({
        customPalette: config
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_setColorRangeConfig", function (newConfig) {
      _this.props.setColorPaletteUI({
        colorRangeConfig: newConfig
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onCustomPaletteCancel", function (newConfig) {
      _this.props.setColorPaletteUI({
        showSketcher: false,
        colorRangeConfig: {
          custom: false
        }
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onToggleSketcher", function (val) {
      _this.props.setColorPaletteUI({
        showSketcher: val
      });
    });
    return _this;
  }

  (0, _createClass2["default"])(ColorRangeSelect, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props$colorPale = this.props.colorPaletteUI,
          customPalette = _this$props$colorPale.customPalette,
          showSketcher = _this$props$colorPale.showSketcher,
          colorRangeConfig = _this$props$colorPale.colorRangeConfig;
      var filteredColorRanges = this.filteredColorRange(this.props);
      return /*#__PURE__*/_react["default"].createElement(StyledColorRangeSelector, null, /*#__PURE__*/_react["default"].createElement(StyledColorConfig, null, (colorRangeConfig.custom ? ['custom'] : Object.keys(colorRangeConfig)).map(function (key) {
        return /*#__PURE__*/_react["default"].createElement(PaletteConfig, {
          key: key,
          label: CONFIG_SETTINGS[key].label || key,
          config: CONFIG_SETTINGS[key],
          value: colorRangeConfig[key],
          onChange: function onChange(value) {
            return _this2._updateConfig({
              key: key,
              value: value
            });
          }
        });
      })), colorRangeConfig.custom ? /*#__PURE__*/_react["default"].createElement(_customPalette["default"], {
        customPalette: customPalette,
        showSketcher: showSketcher,
        selected: this.props.selectedColorRange,
        onApply: this.props.onSelectColorRange,
        onToggleSketcher: this._onToggleSketcher,
        setCustomPalette: this._onSetCustomPalette,
        onCancel: this._onCustomPaletteCancel
      }) : /*#__PURE__*/_react["default"].createElement(ColorPaletteGroup, {
        colorRanges: filteredColorRanges,
        onSelect: this.props.onSelectColorRange,
        selected: this.props.selectedColorRange,
        reversed: colorRangeConfig.reversed
      }));
    }
  }]);
  return ColorRangeSelect;
}(_react.Component);

exports["default"] = ColorRangeSelect;
(0, _defineProperty2["default"])(ColorRangeSelect, "propTypes", {
  colorPaletteUI: _propTypes["default"].object.isRequired,
  selectedColorRange: _propTypes["default"].object.isRequired,
  onSelectColorRange: _propTypes["default"].func.isRequired,
  setColorPaletteUI: _propTypes["default"].func.isRequired,
  // optional
  colorRanges: _propTypes["default"].arrayOf(_propTypes["default"].any)
});
(0, _defineProperty2["default"])(ColorRangeSelect, "defaultProps", {
  colorRanges: _colorRanges.COLOR_RANGES,
  onSelectColorRange: function onSelectColorRange() {},
  setColorPaletteUI: function setColorPaletteUI() {}
});

var PaletteConfig = function PaletteConfig(_ref2) {
  var label = _ref2.label,
      value = _ref2.value,
      _ref2$config = _ref2.config,
      type = _ref2$config.type,
      options = _ref2$config.options,
      _onChange = _ref2.onChange;
  return /*#__PURE__*/_react["default"].createElement(StyledPaletteConfig, {
    className: "color-palette__config",
    onClick: function onClick(e) {
      return e.stopPropagation();
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "color-palette__config__label"
  }, /*#__PURE__*/_react["default"].createElement(_styledComponents2.PanelLabel, null, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: "color.".concat(label)
  }))), type === 'select' && /*#__PURE__*/_react["default"].createElement("div", {
    className: "color-palette__config__select"
  }, /*#__PURE__*/_react["default"].createElement(_itemSelector["default"], {
    selectedItems: value,
    options: options,
    multiSelect: false,
    searchable: false,
    onChange: _onChange
  })), type === 'switch' && /*#__PURE__*/_react["default"].createElement(_switch["default"], {
    checked: value,
    id: "".concat(label, "-toggle"),
    onChange: function onChange() {
      return _onChange(!value);
    },
    secondary: true
  }));
};

exports.PaletteConfig = PaletteConfig;

var StyledColorRange = _styledComponents["default"].div.attrs({
  className: 'color-palette-outer'
})(_templateObject4(), function (props) {
  return props.theme.panelBackgroundHover;
});

var ColorPaletteGroup = function ColorPaletteGroup(_ref3) {
  var reversed = _ref3.reversed,
      onSelect = _ref3.onSelect,
      selected = _ref3.selected,
      colorRanges = _ref3.colorRanges;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "color-palette__group"
  }, colorRanges.map(function (colorRange, i) {
    return /*#__PURE__*/_react["default"].createElement(StyledColorRange, {
      key: "".concat(colorRange.name, "-").concat(i),
      onClick: function onClick(e) {
        return onSelect(reversed ? (0, _colorUtils.reverseColorRange)(true, colorRange) : colorRange, e);
      }
    }, /*#__PURE__*/_react["default"].createElement(_colorPalette["default"], {
      colors: colorRange.colors,
      isReversed: reversed,
      isSelected: colorRange.name === selected.name && reversed === Boolean(selected.reversed)
    }));
  }));
};

exports.ColorPaletteGroup = ColorPaletteGroup;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NpZGUtcGFuZWwvbGF5ZXItcGFuZWwvY29sb3ItcmFuZ2Utc2VsZWN0b3IuanMiXSwibmFtZXMiOlsiQUxMX1RZUEVTIiwiQ09MT1JfUkFOR0VTIiwibWFwIiwiYyIsInR5cGUiLCJmaWx0ZXIiLCJjdHlwZSIsImNvbmNhdCIsIkFMTF9TVEVQUyIsImQiLCJjb2xvcnMiLCJsZW5ndGgiLCJzb3J0IiwibnVtYmVyU29ydCIsIlN0eWxlZENvbG9yQ29uZmlnIiwic3R5bGVkIiwiZGl2IiwiU3R5bGVkQ29sb3JSYW5nZVNlbGVjdG9yIiwiYXR0cnMiLCJjbGFzc05hbWUiLCJTdHlsZWRQYWxldHRlQ29uZmlnIiwicHJvcHMiLCJ0aGVtZSIsInNlY29uZGFyeUlucHV0IiwiQ09ORklHX1NFVFRJTkdTIiwib3B0aW9ucyIsInN0ZXBzIiwicmV2ZXJzZWQiLCJjdXN0b20iLCJsYWJlbCIsIkNvbG9yUmFuZ2VTZWxlY3QiLCJjb2xvclJhbmdlcyIsImNvbG9yUGFsZXR0ZVVJIiwiY29sb3JSYW5nZUNvbmZpZyIsImNvbG9yUmFuZ2VzU2VsZWN0b3IiLCJjb25maWdUeXBlU2VsZWN0b3IiLCJjb25maWdTdGVwU2VsZWN0b3IiLCJjb2xvclJhbmdlIiwiaXNUeXBlIiwiaXNTdGVwIiwiTnVtYmVyIiwia2V5IiwidmFsdWUiLCJfc2V0Q29sb3JSYW5nZUNvbmZpZyIsImNvbmZpZyIsInNldENvbG9yUGFsZXR0ZVVJIiwiY3VzdG9tUGFsZXR0ZSIsIm5ld0NvbmZpZyIsInNob3dTa2V0Y2hlciIsInZhbCIsImZpbHRlcmVkQ29sb3JSYW5nZXMiLCJmaWx0ZXJlZENvbG9yUmFuZ2UiLCJPYmplY3QiLCJrZXlzIiwiX3VwZGF0ZUNvbmZpZyIsInNlbGVjdGVkQ29sb3JSYW5nZSIsIm9uU2VsZWN0Q29sb3JSYW5nZSIsIl9vblRvZ2dsZVNrZXRjaGVyIiwiX29uU2V0Q3VzdG9tUGFsZXR0ZSIsIl9vbkN1c3RvbVBhbGV0dGVDYW5jZWwiLCJDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwiZnVuYyIsImFycmF5T2YiLCJhbnkiLCJQYWxldHRlQ29uZmlnIiwib25DaGFuZ2UiLCJlIiwic3RvcFByb3BhZ2F0aW9uIiwiU3R5bGVkQ29sb3JSYW5nZSIsInBhbmVsQmFja2dyb3VuZEhvdmVyIiwiQ29sb3JQYWxldHRlR3JvdXAiLCJvblNlbGVjdCIsInNlbGVjdGVkIiwiaSIsIm5hbWUiLCJCb29sZWFuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTyxJQUFNQSxTQUFTLEdBQUcsd0JBQ3ZCQywwQkFBYUMsR0FBYixDQUFpQixVQUFBQyxDQUFDO0FBQUEsU0FBSUEsQ0FBQyxDQUFDQyxJQUFOO0FBQUEsQ0FBbEIsRUFDR0MsTUFESCxDQUNVLFVBQUFDLEtBQUs7QUFBQSxTQUFJQSxLQUFKO0FBQUEsQ0FEZixFQUVHQyxNQUZILENBRVUsQ0FBQyxLQUFELEVBQVEsUUFBUixDQUZWLENBRHVCLENBQWxCOztBQU1BLElBQU1DLFNBQVMsR0FBRyx3QkFBS1AsMEJBQWFDLEdBQWIsQ0FBaUIsVUFBQU8sQ0FBQztBQUFBLFNBQUlBLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxNQUFiO0FBQUEsQ0FBbEIsQ0FBTCxFQUE2Q0MsSUFBN0MsQ0FBa0RDLHFCQUFsRCxDQUFsQjs7O0FBRVAsSUFBTUMsaUJBQWlCLEdBQUdDLDZCQUFPQyxHQUFWLG1CQUF2Qjs7QUFJQSxJQUFNQyx3QkFBd0IsR0FBR0YsNkJBQU9DLEdBQVAsQ0FBV0UsS0FBWCxDQUFpQjtBQUNoREMsRUFBQUEsU0FBUyxFQUFFO0FBRHFDLENBQWpCLENBQUgsb0JBQTlCOztBQU1BLElB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QWlCLEdBQUcsU0FBcEJBLGlCQUFvQjtBQUFBLE1BQUU5QyxRQUFGLFNBQUVBLFFBQUY7QUFBQSxNQUFZK0MsUUFBWixTQUFZQSxRQUFaO0FBQUEsTUFBc0JDLFFBQXRCLFNBQXNCQSxRQUF0QjtBQUFBLE1BQWdDNUMsV0FBaEMsU0FBZ0NBLFdBQWhDO0FBQUEsc0JBQy9CO0FBQUssSUFBQSxTQUFTLEVBQUM7QUFBZixLQUNHQSxXQUFXLENBQUM3QixHQUFaLENBQWdCLFVBQUNtQyxVQUFELEVBQWF1QyxDQUFiO0FBQUEsd0JBQ2YsZ0NBQUMsZ0JBQUQ7QUFDRSxNQUFBLEdBQUcsWUFBS3ZDLFVBQVUsQ0FBQ3dDLElBQWhCLGNBQXdCRCxDQUF4QixDQURMO0FBRUUsTUFBQSxPQUFPLEVBQUUsaUJBQUFQLENBQUM7QUFBQSxlQUFJSyxRQUFRLENBQUMvQyxRQUFRLEdBQUcsbUNBQWtCLElBQWxCLEVBQXdCVSxVQUF4QixDQUFILEdBQXlDQSxVQUFsRCxFQUE4RGdDLENBQTlELENBQVo7QUFBQTtBQUZaLG9CQUlFLGdDQUFDLHdCQUFEO0FBQ0UsTUFBQSxNQUFNLEVBQUVoQyxVQUFVLENBQUMzQixNQURyQjtBQUVFLE1BQUEsVUFBVSxFQUFFaUIsUUFGZDtBQUdFLE1BQUEsVUFBVSxFQUFFVSxVQUFVLENBQUN3QyxJQUFYLEtBQW9CRixRQUFRLENBQUNFLElBQTdCLElBQXFDbEQsUUFBUSxLQUFLbUQsT0FBTyxDQUFDSCxRQUFRLENBQUNoRCxRQUFWO0FBSHZFLE1BSkYsQ0FEZTtBQUFBLEdBQWhCLENBREgsQ0FEK0I7QUFBQSxDQUExQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMCBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgdW5pcSBmcm9tICdsb2Rhc2gudW5pcSc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQge2NyZWF0ZVNlbGVjdG9yfSBmcm9tICdyZXNlbGVjdCc7XHJcblxyXG5pbXBvcnQgSXRlbVNlbGVjdG9yIGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL2l0ZW0tc2VsZWN0b3IvaXRlbS1zZWxlY3Rvcic7XHJcbmltcG9ydCB7UGFuZWxMYWJlbH0gZnJvbSAnY29tcG9uZW50cy9jb21tb24vc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgU3dpdGNoIGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL3N3aXRjaCc7XHJcbmltcG9ydCBDb2xvclBhbGV0dGUgZnJvbSAnLi9jb2xvci1wYWxldHRlJztcclxuaW1wb3J0IEN1c3RvbVBhbGV0dGUgZnJvbSAnLi9jdXN0b20tcGFsZXR0ZSc7XHJcbmltcG9ydCB7Q09MT1JfUkFOR0VTfSBmcm9tICdjb25zdGFudHMvY29sb3ItcmFuZ2VzJztcclxuaW1wb3J0IHtudW1iZXJTb3J0fSBmcm9tICd1dGlscy9kYXRhLXV0aWxzJztcclxuaW1wb3J0IHtyZXZlcnNlQ29sb3JSYW5nZX0gZnJvbSAndXRpbHMvY29sb3ItdXRpbHMnO1xyXG5pbXBvcnQge0Zvcm1hdHRlZE1lc3NhZ2V9IGZyb20gJ3JlYWN0LWludGwnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFMTF9UWVBFUyA9IHVuaXEoXHJcbiAgQ09MT1JfUkFOR0VTLm1hcChjID0+IGMudHlwZSlcclxuICAgIC5maWx0ZXIoY3R5cGUgPT4gY3R5cGUpXHJcbiAgICAuY29uY2F0KFsnYWxsJywgJ2N1c3RvbSddKVxyXG4pO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFMTF9TVEVQUyA9IHVuaXEoQ09MT1JfUkFOR0VTLm1hcChkID0+IGQuY29sb3JzLmxlbmd0aCkpLnNvcnQobnVtYmVyU29ydCk7XHJcblxyXG5jb25zdCBTdHlsZWRDb2xvckNvbmZpZyA9IHN0eWxlZC5kaXZgXHJcbiAgcGFkZGluZzogMTJweCAxMnB4IDAgMTJweDtcclxuYDtcclxuXHJcbmNvbnN0IFN0eWxlZENvbG9yUmFuZ2VTZWxlY3RvciA9IHN0eWxlZC5kaXYuYXR0cnMoe1xyXG4gIGNsYXNzTmFtZTogJ2NvbG9yLXJhbmdlLXNlbGVjdG9yJ1xyXG59KWBcclxuICBwYWRkaW5nLWJvdHRvbTogMTJweDtcclxuYDtcclxuXHJcbmNvbnN0IFN0eWxlZFBhbGV0dGVDb25maWcgPSBzdHlsZWQuZGl2YFxyXG4gIG1hcmdpbi1ib3R0b206IDhweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIC5jb2xvci1wYWxldHRlX19jb25maWdfX2xhYmVsIHtcclxuICAgIGZsZXgtZ3JvdzogMTtcclxuICB9XHJcbiAgLmNvbG9yLXBhbGV0dGVfX2NvbmZpZ19fc2VsZWN0IHtcclxuICAgIGZsZXgtZ3JvdzogMTtcclxuICB9XHJcbiAgLml0ZW0tc2VsZWN0b3IgLml0ZW0tc2VsZWN0b3JfX2Ryb3Bkb3duIHtcclxuICAgICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc2Vjb25kYXJ5SW5wdXR9O1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IENPTkZJR19TRVRUSU5HUyA9IHtcclxuICB0eXBlOiB7XHJcbiAgICB0eXBlOiAnc2VsZWN0JyxcclxuICAgIG9wdGlvbnM6IEFMTF9UWVBFU1xyXG4gIH0sXHJcbiAgc3RlcHM6IHtcclxuICAgIHR5cGU6ICdzZWxlY3QnLFxyXG4gICAgb3B0aW9uczogQUxMX1NURVBTXHJcbiAgfSxcclxuICByZXZlcnNlZDoge1xyXG4gICAgdHlwZTogJ3N3aXRjaCcsXHJcbiAgICBvcHRpb25zOiBbdHJ1ZSwgZmFsc2VdXHJcbiAgfSxcclxuICBjdXN0b206IHtcclxuICAgIGxhYmVsOiAnY3VzdG9tUGFsZXR0ZScsXHJcbiAgICB0eXBlOiAnc3dpdGNoJyxcclxuICAgIG9wdGlvbnM6IFt0cnVlLCBmYWxzZV1cclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb2xvclJhbmdlU2VsZWN0IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xyXG4gICAgY29sb3JQYWxldHRlVUk6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcclxuICAgIHNlbGVjdGVkQ29sb3JSYW5nZTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxyXG4gICAgb25TZWxlY3RDb2xvclJhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gICAgc2V0Q29sb3JQYWxldHRlVUk6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgICAvLyBvcHRpb25hbFxyXG4gICAgY29sb3JSYW5nZXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5hbnkpXHJcbiAgfTtcclxuXHJcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcclxuICAgIGNvbG9yUmFuZ2VzOiBDT0xPUl9SQU5HRVMsXHJcbiAgICBvblNlbGVjdENvbG9yUmFuZ2U6ICgpID0+IHt9LFxyXG4gICAgc2V0Q29sb3JQYWxldHRlVUk6ICgpID0+IHt9XHJcbiAgfTtcclxuXHJcbiAgY29sb3JSYW5nZXNTZWxlY3RvciA9IHByb3BzID0+IHByb3BzLmNvbG9yUmFuZ2VzO1xyXG4gIGNvbmZpZ1R5cGVTZWxlY3RvciA9IHByb3BzID0+IHByb3BzLmNvbG9yUGFsZXR0ZVVJLmNvbG9yUmFuZ2VDb25maWcudHlwZTtcclxuICBjb25maWdTdGVwU2VsZWN0b3IgPSBwcm9wcyA9PiBwcm9wcy5jb2xvclBhbGV0dGVVSS5jb2xvclJhbmdlQ29uZmlnLnN0ZXBzO1xyXG4gIGZpbHRlcmVkQ29sb3JSYW5nZSA9IGNyZWF0ZVNlbGVjdG9yKFxyXG4gICAgdGhpcy5jb2xvclJhbmdlc1NlbGVjdG9yLFxyXG4gICAgdGhpcy5jb25maWdUeXBlU2VsZWN0b3IsXHJcbiAgICB0aGlzLmNvbmZpZ1N0ZXBTZWxlY3RvcixcclxuICAgIChjb2xvclJhbmdlcywgdHlwZSwgc3RlcHMpID0+IHtcclxuICAgICAgcmV0dXJuIGNvbG9yUmFuZ2VzLmZpbHRlcihjb2xvclJhbmdlID0+IHtcclxuICAgICAgICBjb25zdCBpc1R5cGUgPSB0eXBlID09PSAnYWxsJyB8fCB0eXBlID09PSBjb2xvclJhbmdlLnR5cGU7XHJcbiAgICAgICAgY29uc3QgaXNTdGVwID0gTnVtYmVyKHN0ZXBzKSA9PT0gY29sb3JSYW5nZS5jb2xvcnMubGVuZ3RoO1xyXG5cclxuICAgICAgICByZXR1cm4gaXNUeXBlICYmIGlzU3RlcDtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgKTtcclxuXHJcbiAgX3VwZGF0ZUNvbmZpZyA9ICh7a2V5LCB2YWx1ZX0pID0+IHtcclxuICAgIHRoaXMuX3NldENvbG9yUmFuZ2VDb25maWcoe1trZXldOiB2YWx1ZX0pO1xyXG4gIH07XHJcblxyXG4gIF9vblNldEN1c3RvbVBhbGV0dGUgPSBjb25maWcgPT4ge1xyXG4gICAgdGhpcy5wcm9wcy5zZXRDb2xvclBhbGV0dGVVSSh7XHJcbiAgICAgIGN1c3RvbVBhbGV0dGU6IGNvbmZpZ1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgX3NldENvbG9yUmFuZ2VDb25maWcgPSBuZXdDb25maWcgPT4ge1xyXG4gICAgdGhpcy5wcm9wcy5zZXRDb2xvclBhbGV0dGVVSSh7XHJcbiAgICAgIGNvbG9yUmFuZ2VDb25maWc6IG5ld0NvbmZpZ1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgX29uQ3VzdG9tUGFsZXR0ZUNhbmNlbCA9IG5ld0NvbmZpZyA9PiB7XHJcbiAgICB0aGlzLnByb3BzLnNldENvbG9yUGFsZXR0ZVVJKHtcclxuICAgICAgc2hvd1NrZXRjaGVyOiBmYWxzZSxcclxuICAgICAgY29sb3JSYW5nZUNvbmZpZzoge2N1c3RvbTogZmFsc2V9XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBfb25Ub2dnbGVTa2V0Y2hlciA9IHZhbCA9PiB7XHJcbiAgICB0aGlzLnByb3BzLnNldENvbG9yUGFsZXR0ZVVJKHtcclxuICAgICAgc2hvd1NrZXRjaGVyOiB2YWxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHtjdXN0b21QYWxldHRlLCBzaG93U2tldGNoZXIsIGNvbG9yUmFuZ2VDb25maWd9ID0gdGhpcy5wcm9wcy5jb2xvclBhbGV0dGVVSTtcclxuXHJcbiAgICBjb25zdCBmaWx0ZXJlZENvbG9yUmFuZ2VzID0gdGhpcy5maWx0ZXJlZENvbG9yUmFuZ2UodGhpcy5wcm9wcyk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPFN0eWxlZENvbG9yUmFuZ2VTZWxlY3Rvcj5cclxuICAgICAgICA8U3R5bGVkQ29sb3JDb25maWc+XHJcbiAgICAgICAgICB7KGNvbG9yUmFuZ2VDb25maWcuY3VzdG9tID8gWydjdXN0b20nXSA6IE9iamVjdC5rZXlzKGNvbG9yUmFuZ2VDb25maWcpKS5tYXAoa2V5ID0+IChcclxuICAgICAgICAgICAgPFBhbGV0dGVDb25maWdcclxuICAgICAgICAgICAgICBrZXk9e2tleX1cclxuICAgICAgICAgICAgICBsYWJlbD17Q09ORklHX1NFVFRJTkdTW2tleV0ubGFiZWwgfHwga2V5fVxyXG4gICAgICAgICAgICAgIGNvbmZpZz17Q09ORklHX1NFVFRJTkdTW2tleV19XHJcbiAgICAgICAgICAgICAgdmFsdWU9e2NvbG9yUmFuZ2VDb25maWdba2V5XX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17dmFsdWUgPT4gdGhpcy5fdXBkYXRlQ29uZmlnKHtrZXksIHZhbHVlfSl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L1N0eWxlZENvbG9yQ29uZmlnPlxyXG5cclxuICAgICAgICB7Y29sb3JSYW5nZUNvbmZpZy5jdXN0b20gPyAoXHJcbiAgICAgICAgICA8Q3VzdG9tUGFsZXR0ZVxyXG4gICAgICAgICAgICBjdXN0b21QYWxldHRlPXtjdXN0b21QYWxldHRlfVxyXG4gICAgICAgICAgICBzaG93U2tldGNoZXI9e3Nob3dTa2V0Y2hlcn1cclxuICAgICAgICAgICAgc2VsZWN0ZWQ9e3RoaXMucHJvcHMuc2VsZWN0ZWRDb2xvclJhbmdlfVxyXG4gICAgICAgICAgICBvbkFwcGx5PXt0aGlzLnByb3BzLm9uU2VsZWN0Q29sb3JSYW5nZX1cclxuICAgICAgICAgICAgb25Ub2dnbGVTa2V0Y2hlcj17dGhpcy5fb25Ub2dnbGVTa2V0Y2hlcn1cclxuICAgICAgICAgICAgc2V0Q3VzdG9tUGFsZXR0ZT17dGhpcy5fb25TZXRDdXN0b21QYWxldHRlfVxyXG4gICAgICAgICAgICBvbkNhbmNlbD17dGhpcy5fb25DdXN0b21QYWxldHRlQ2FuY2VsfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPENvbG9yUGFsZXR0ZUdyb3VwXHJcbiAgICAgICAgICAgIGNvbG9yUmFuZ2VzPXtmaWx0ZXJlZENvbG9yUmFuZ2VzfVxyXG4gICAgICAgICAgICBvblNlbGVjdD17dGhpcy5wcm9wcy5vblNlbGVjdENvbG9yUmFuZ2V9XHJcbiAgICAgICAgICAgIHNlbGVjdGVkPXt0aGlzLnByb3BzLnNlbGVjdGVkQ29sb3JSYW5nZX1cclxuICAgICAgICAgICAgcmV2ZXJzZWQ9e2NvbG9yUmFuZ2VDb25maWcucmV2ZXJzZWR9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvU3R5bGVkQ29sb3JSYW5nZVNlbGVjdG9yPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBQYWxldHRlQ29uZmlnID0gKHtsYWJlbCwgdmFsdWUsIGNvbmZpZzoge3R5cGUsIG9wdGlvbnN9LCBvbkNoYW5nZX0pID0+IChcclxuICA8U3R5bGVkUGFsZXR0ZUNvbmZpZyBjbGFzc05hbWU9XCJjb2xvci1wYWxldHRlX19jb25maWdcIiBvbkNsaWNrPXtlID0+IGUuc3RvcFByb3BhZ2F0aW9uKCl9PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb2xvci1wYWxldHRlX19jb25maWdfX2xhYmVsXCI+XHJcbiAgICAgIDxQYW5lbExhYmVsPlxyXG4gICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlIGlkPXtgY29sb3IuJHtsYWJlbH1gfSAvPlxyXG4gICAgICA8L1BhbmVsTGFiZWw+XHJcbiAgICA8L2Rpdj5cclxuICAgIHt0eXBlID09PSAnc2VsZWN0JyAmJiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sb3ItcGFsZXR0ZV9fY29uZmlnX19zZWxlY3RcIj5cclxuICAgICAgICA8SXRlbVNlbGVjdG9yXHJcbiAgICAgICAgICBzZWxlY3RlZEl0ZW1zPXt2YWx1ZX1cclxuICAgICAgICAgIG9wdGlvbnM9e29wdGlvbnN9XHJcbiAgICAgICAgICBtdWx0aVNlbGVjdD17ZmFsc2V9XHJcbiAgICAgICAgICBzZWFyY2hhYmxlPXtmYWxzZX1cclxuICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICl9XHJcbiAgICB7dHlwZSA9PT0gJ3N3aXRjaCcgJiYgKFxyXG4gICAgICA8U3dpdGNoIGNoZWNrZWQ9e3ZhbHVlfSBpZD17YCR7bGFiZWx9LXRvZ2dsZWB9IG9uQ2hhbmdlPXsoKSA9PiBvbkNoYW5nZSghdmFsdWUpfSBzZWNvbmRhcnkgLz5cclxuICAgICl9XHJcbiAgPC9TdHlsZWRQYWxldHRlQ29uZmlnPlxyXG4pO1xyXG5cclxuY29uc3QgU3R5bGVkQ29sb3JSYW5nZSA9IHN0eWxlZC5kaXYuYXR0cnMoe1xyXG4gIGNsYXNzTmFtZTogJ2NvbG9yLXBhbGV0dGUtb3V0ZXInXHJcbn0pYFxyXG4gIHBhZGRpbmc6IDAgOHB4O1xyXG4gIDpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnBhbmVsQmFja2dyb3VuZEhvdmVyfTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgQ29sb3JQYWxldHRlR3JvdXAgPSAoe3JldmVyc2VkLCBvblNlbGVjdCwgc2VsZWN0ZWQsIGNvbG9yUmFuZ2VzfSkgPT4gKFxyXG4gIDxkaXYgY2xhc3NOYW1lPVwiY29sb3ItcGFsZXR0ZV9fZ3JvdXBcIj5cclxuICAgIHtjb2xvclJhbmdlcy5tYXAoKGNvbG9yUmFuZ2UsIGkpID0+IChcclxuICAgICAgPFN0eWxlZENvbG9yUmFuZ2VcclxuICAgICAgICBrZXk9e2Ake2NvbG9yUmFuZ2UubmFtZX0tJHtpfWB9XHJcbiAgICAgICAgb25DbGljaz17ZSA9PiBvblNlbGVjdChyZXZlcnNlZCA/IHJldmVyc2VDb2xvclJhbmdlKHRydWUsIGNvbG9yUmFuZ2UpIDogY29sb3JSYW5nZSwgZSl9XHJcbiAgICAgID5cclxuICAgICAgICA8Q29sb3JQYWxldHRlXHJcbiAgICAgICAgICBjb2xvcnM9e2NvbG9yUmFuZ2UuY29sb3JzfVxyXG4gICAgICAgICAgaXNSZXZlcnNlZD17cmV2ZXJzZWR9XHJcbiAgICAgICAgICBpc1NlbGVjdGVkPXtjb2xvclJhbmdlLm5hbWUgPT09IHNlbGVjdGVkLm5hbWUgJiYgcmV2ZXJzZWQgPT09IEJvb2xlYW4oc2VsZWN0ZWQucmV2ZXJzZWQpfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvU3R5bGVkQ29sb3JSYW5nZT5cclxuICAgICkpfVxyXG4gIDwvZGl2PlxyXG4pO1xyXG4iXX0=