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

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _chickletedInput = require("../../../common/item-selector/chickleted-input");

var _icons = require("../../../common/icons");

var _dropdownList = _interopRequireDefault(require("../../../common/item-selector/dropdown-list"));

var _styledComponents2 = require("../../../common/styled-components");

var _reactIntl = require("react-intl");

var _reactOnclickoutside = _interopRequireDefault(require("react-onclickoutside"));

var _defaultSettings = require("../../../../constants/default-settings");

var _tooltip = require("../../../../constants/tooltip");

var _dataUtils = require("../../../../utils/data-utils");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  color: ", ";\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  margin-left: -64px;\n  position: absolute;\n  top: 20px;\n  width: 140px;\n  z-index: 101;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  margin-right: 4px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  position: relative;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var TIME_DISPLAY = '2020-05-11 14:00';

var getValue = function getValue(fmt) {
  return fmt[_tooltip.TOOLTIP_KEY];
};

var addDTimeLabel = function addDTimeLabel(formats) {
  return formats.map(function (f) {
    return _objectSpread(_objectSpread({}, f), {}, {
      label: f.type === _tooltip.TOOLTIP_FORMAT_TYPES.DATE_TIME || f.type === _tooltip.TOOLTIP_FORMAT_TYPES.DATE ? (0, _dataUtils.getFormatter)(getValue(f))(TIME_DISPLAY) : f.label
    });
  });
};

function getFormatLabels(fields, fieldName) {
  var fieldType = fields.find(function (f) {
    return f.name === fieldName;
  }).type;
  var tooltipTypes = fieldType && _defaultSettings.FIELD_OPTS[fieldType].format.tooltip || [];
  var formatLabels = Object.values(_tooltip.TOOLTIP_FORMATS).filter(function (t) {
    return tooltipTypes.includes(t.type);
  });
  return addDTimeLabel(formatLabels);
}

var ChickletAddonWrapper = _styledComponents["default"].div(_templateObject());

var ChickletAddon = _styledComponents["default"].div(_templateObject2());

var StyledPopover = _styledComponents["default"].div(_templateObject3());

var hashStyles = {
  SHOW: 'SHOW',
  ACTIVE: 'ACTIVE'
};

var IconDiv = _styledComponents["default"].div(_templateObject4(), function (props) {
  return props.status === hashStyles.SHOW ? props.theme.subtextColorActive : props.status === hashStyles.ACTIVE ? props.theme.activeColor : props.theme.textColor;
});

function TooltipChickletFactory(dataId, config, onChange, fields) {
  var TooltipChicklet = /*#__PURE__*/function (_Component) {
    (0, _inherits2["default"])(TooltipChicklet, _Component);

    var _super = _createSuper(TooltipChicklet);

    function TooltipChicklet() {
      var _this;

      (0, _classCallCheck2["default"])(this, TooltipChicklet);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
        show: false
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleClickOutside", function (e) {
        if (_this.node.contains(e.target)) {
          return;
        }

        _this.setState({
          show: false
        });
      });
      return _this;
    }

    (0, _createClass2["default"])(TooltipChicklet, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside, false);
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside, false);
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;

        var _this$props = this.props,
            disabled = _this$props.disabled,
            name = _this$props.name,
            remove = _this$props.remove;
        var show = this.state.show;
        var field = config.fieldsToShow[dataId].find(function (fieldToShow) {
          return fieldToShow.name === name;
        });
        var formatLabels = getFormatLabels(fields, field.name);
        var selectionIndex = formatLabels.findIndex(function (fl) {
          return getValue(fl) === field.format;
        });
        if (selectionIndex < 0) selectionIndex = 0;
        var hashStyle = show ? hashStyles.SHOW : selectionIndex ? hashStyles.ACTIVE : null;
        return /*#__PURE__*/_react["default"].createElement(_chickletedInput.ChickletButton, {
          ref: function ref(node) {
            return _this2.node = node;
          }
        }, /*#__PURE__*/_react["default"].createElement(_chickletedInput.ChickletTag, null, name), formatLabels.length > 1 && /*#__PURE__*/_react["default"].createElement(ChickletAddonWrapper, null, /*#__PURE__*/_react["default"].createElement(ChickletAddon, {
          "data-tip": true,
          "data-for": "addon-".concat(name)
        }, /*#__PURE__*/_react["default"].createElement(IconDiv, {
          status: hashStyle
        }, /*#__PURE__*/_react["default"].createElement(_icons.Hash, {
          height: "8px",
          onClick: function onClick(e) {
            e.stopPropagation();

            _this2.setState({
              show: Boolean(!show)
            });
          }
        })), /*#__PURE__*/_react["default"].createElement(_styledComponents2.Tooltip, {
          id: "addon-".concat(name),
          effect: "solid"
        }, /*#__PURE__*/_react["default"].createElement("span", null, (selectionIndex && formatLabels[selectionIndex]).label || /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
          id: 'fieldSelector.formatting'
        })))), show && /*#__PURE__*/_react["default"].createElement(StyledPopover, null, /*#__PURE__*/_react["default"].createElement(_dropdownList["default"], {
          options: formatLabels,
          selectionIndex: selectionIndex,
          displayOption: function displayOption(item) {
            return item.label;
          },
          onOptionSelected: function onOptionSelected(result, e) {
            e.stopPropagation();

            _this2.setState({
              show: false
            });

            var oldFieldsToShow = config.fieldsToShow[dataId];
            var fieldsToShow = oldFieldsToShow.map(function (fieldToShow) {
              return fieldToShow.name === name ? {
                name: name,
                format: getValue(result)
              } : fieldToShow;
            });

            var newConfig = _objectSpread(_objectSpread({}, config), {}, {
              fieldsToShow: _objectSpread(_objectSpread({}, config.fieldsToShow), {}, (0, _defineProperty2["default"])({}, dataId, fieldsToShow))
            });

            onChange(newConfig);
          }
        }))), /*#__PURE__*/_react["default"].createElement(_icons.Delete, {
          onClick: disabled ? null : remove
        }));
      }
    }]);
    return TooltipChicklet;
  }(_react.Component);

  return (0, _reactOnclickoutside["default"])(TooltipChicklet);
}

var _default = TooltipChickletFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NpZGUtcGFuZWwvaW50ZXJhY3Rpb24tcGFuZWwvdG9vbHRpcC1jb25maWcvdG9vbHRpcC1jaGlja2xldC5qcyJdLCJuYW1lcyI6WyJUSU1FX0RJU1BMQVkiLCJnZXRWYWx1ZSIsImZtdCIsIlRPT0xUSVBfS0VZIiwiYWRkRFRpbWVMYWJlbCIsImZvcm1hdHMiLCJtYXAiLCJmIiwibGFiZWwiLCJ0eXBlIiwiVE9PTFRJUF9GT1JNQVRfVFlQRVMiLCJEQVRFX1RJTUUiLCJEQVRFIiwiZ2V0Rm9ybWF0TGFiZWxzIiwiZmllbGRzIiwiZmllbGROYW1lIiwiZmllbGRUeXBlIiwiZmluZCIsIm5hbWUiLCJ0b29sdGlwVHlwZXMiLCJGSUVMRF9PUFRTIiwiZm9ybWF0IiwidG9vbHRpcCIsImZvcm1hdExhYmVscyIsIk9iamVjdCIsInZhbHVlcyIsIlRPT0xUSVBfRk9STUFUUyIsImZpbHRlciIsInQiLCJpbmNsdWRlcyIsIkNoaWNrbGV0QWRkb25XcmFwcGVyIiwic3R5bGVkIiwiZGl2IiwiQ2hpY2tsZXRBZGRvbiIsIlN0eWxlZFBvcG92ZXIiLCJoYXNoU3R5bGVzIiwiU0hPVyIsIkFDVElWRSIsIkljb25EaXYiLCJwcm9wcyIsInN0YXR1cyIsInRoZW1lIiwic3VidGV4dENvbG9yQWN0aXZlIiwiYWN0aXZlQ29sb3IiLCJ0ZXh0Q29sb3IiLCJUb29sdGlwQ2hpY2tsZXRGYWN0b3J5IiwiZGF0YUlkIiwiY29uZmlnIiwib25DaGFuZ2UiLCJUb29sdGlwQ2hpY2tsZXQiLCJzaG93IiwiZSIsIm5vZGUiLCJjb250YWlucyIsInRhcmdldCIsInNldFN0YXRlIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiaGFuZGxlQ2xpY2tPdXRzaWRlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImRpc2FibGVkIiwicmVtb3ZlIiwic3RhdGUiLCJmaWVsZCIsImZpZWxkc1RvU2hvdyIsImZpZWxkVG9TaG93Iiwic2VsZWN0aW9uSW5kZXgiLCJmaW5kSW5kZXgiLCJmbCIsImhhc2hTdHlsZSIsImxlbmd0aCIsInN0b3BQcm9wYWdhdGlvbiIsIkJvb2xlYW4iLCJpdGVtIiwicmVzdWx0Iiwib2xkRmllbGRzVG9TaG93IiwibmV3Q29uZmlnIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsWUFBWSxHQUFHLGtCQUFyQjs7QUFDQSxJQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFBQyxHQUFHO0FBQUEsU0FBSUEsR0FBRyxDQUFDQyxvQkFBRCxDQUFQO0FBQUEsQ0FBcEI7O0FBRUEsSUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFBQyxPQUFPO0FBQUEsU0FDM0JBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFVBQUFDLENBQUM7QUFBQSwyQ0FDUkEsQ0FEUTtBQUVYQyxNQUFBQSxLQUFLLEVBQ0hELENBQUMsQ0FBQ0UsSUFBRixLQUFXQyw4QkFBcUJDLFNBQWhDLElBQTZDSixDQUFDLENBQUNFLElBQUYsS0FBV0MsOEJBQXFCRSxJQUE3RSxHQUNJLDZCQUFhWCxRQUFRLENBQUNNLENBQUQsQ0FBckIsRUFBMEJQLFlBQTFCLENBREosR0FFSU8sQ0FBQyxDQUFDQztBQUxHO0FBQUEsR0FBYixDQUQyQjtBQUFBLENBQTdCOztBQVNBLFNBQVNLLGVBQVQsQ0FBeUJDLE1BQXpCLEVBQWlDQyxTQUFqQyxFQUE0QztBQUMxQyxNQUFNQyxTQUFTLEdBQUdGLE1BQU0sQ0FBQ0csSUFBUCxDQUFZLFVBQUFWLENBQUM7QUFBQSxXQUFJQSxDQUFDLENBQUNXLElBQUYsS0FBV0gsU0FBZjtBQUFBLEdBQWIsRUFBdUNOLElBQXpEO0FBQ0EsTUFBTVUsWUFBWSxH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Q2dCLGdCQURrQzs7QUE2RmhFLFNBQU8scUNBQWU1QixlQUFmLENBQVA7QUFDRDs7ZUFFY0osc0IiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7Q2hpY2tsZXRCdXR0b24sIENoaWNrbGV0VGFnfSBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9pdGVtLXNlbGVjdG9yL2NoaWNrbGV0ZWQtaW5wdXQnO1xyXG5pbXBvcnQge0hhc2gsIERlbGV0ZX0gZnJvbSAnY29tcG9uZW50cy9jb21tb24vaWNvbnMnO1xyXG5pbXBvcnQgRHJvcGRvd25MaXN0IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL2l0ZW0tc2VsZWN0b3IvZHJvcGRvd24tbGlzdCc7XHJcbmltcG9ydCB7VG9vbHRpcH0gZnJvbSAnY29tcG9uZW50cy9jb21tb24vc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQge0Zvcm1hdHRlZE1lc3NhZ2V9IGZyb20gJ3JlYWN0LWludGwnO1xyXG5pbXBvcnQgb25DbGlja091dHNpZGUgZnJvbSAncmVhY3Qtb25jbGlja291dHNpZGUnO1xyXG5pbXBvcnQge0ZJRUxEX09QVFN9IGZyb20gJ2NvbnN0YW50cy9kZWZhdWx0LXNldHRpbmdzJztcclxuaW1wb3J0IHtUT09MVElQX0ZPUk1BVFMsIFRPT0xUSVBfRk9STUFUX1RZUEVTLCBUT09MVElQX0tFWX0gZnJvbSAnY29uc3RhbnRzL3Rvb2x0aXAnO1xyXG5pbXBvcnQge2dldEZvcm1hdHRlcn0gZnJvbSAndXRpbHMvZGF0YS11dGlscyc7XHJcblxyXG5jb25zdCBUSU1FX0RJU1BMQVkgPSAnMjAyMC0wNS0xMSAxNDowMCc7XHJcbmNvbnN0IGdldFZhbHVlID0gZm10ID0+IGZtdFtUT09MVElQX0tFWV07XHJcblxyXG5jb25zdCBhZGREVGltZUxhYmVsID0gZm9ybWF0cyA9PlxyXG4gIGZvcm1hdHMubWFwKGYgPT4gKHtcclxuICAgIC4uLmYsXHJcbiAgICBsYWJlbDpcclxuICAgICAgZi50eXBlID09PSBUT09MVElQX0ZPUk1BVF9UWVBFUy5EQVRFX1RJTUUgfHwgZi50eXBlID09PSBUT09MVElQX0ZPUk1BVF9UWVBFUy5EQVRFXHJcbiAgICAgICAgPyBnZXRGb3JtYXR0ZXIoZ2V0VmFsdWUoZikpKFRJTUVfRElTUExBWSlcclxuICAgICAgICA6IGYubGFiZWxcclxuICB9KSk7XHJcblxyXG5mdW5jdGlvbiBnZXRGb3JtYXRMYWJlbHMoZmllbGRzLCBmaWVsZE5hbWUpIHtcclxuICBjb25zdCBmaWVsZFR5cGUgPSBmaWVsZHMuZmluZChmID0+IGYubmFtZSA9PT0gZmllbGROYW1lKS50eXBlO1xyXG4gIGNvbnN0IHRvb2x0aXBUeXBlcyA9IChmaWVsZFR5cGUgJiYgRklFTERfT1BUU1tmaWVsZFR5cGVdLmZvcm1hdC50b29sdGlwKSB8fCBbXTtcclxuICBjb25zdCBmb3JtYXRMYWJlbHMgPSBPYmplY3QudmFsdWVzKFRPT0xUSVBfRk9STUFUUykuZmlsdGVyKHQgPT4gdG9vbHRpcFR5cGVzLmluY2x1ZGVzKHQudHlwZSkpO1xyXG5cclxuICByZXR1cm4gYWRkRFRpbWVMYWJlbChmb3JtYXRMYWJlbHMpO1xyXG59XHJcblxyXG5jb25zdCBDaGlja2xldEFkZG9uV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5gO1xyXG5cclxuY29uc3QgQ2hpY2tsZXRBZGRvbiA9IHN0eWxlZC5kaXZgXHJcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XHJcbmA7XHJcblxyXG5jb25zdCBTdHlsZWRQb3BvdmVyID0gc3R5bGVkLmRpdmBcclxuICBtYXJnaW4tbGVmdDogLTY0cHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMjBweDtcclxuICB3aWR0aDogMTQwcHg7XHJcbiAgei1pbmRleDogMTAxO1xyXG5gO1xyXG5cclxuY29uc3QgaGFzaFN0eWxlcyA9IHtcclxuICBTSE9XOiAnU0hPVycsXHJcbiAgQUNUSVZFOiAnQUNUSVZFJ1xyXG59O1xyXG5cclxuY29uc3QgSWNvbkRpdiA9IHN0eWxlZC5kaXZgXHJcbiAgY29sb3I6ICR7cHJvcHMgPT5cclxuICAgIHByb3BzLnN0YXR1cyA9PT0gaGFzaFN0eWxlcy5TSE9XXHJcbiAgICAgID8gcHJvcHMudGhlbWUuc3VidGV4dENvbG9yQWN0aXZlXHJcbiAgICAgIDogcHJvcHMuc3RhdHVzID09PSBoYXNoU3R5bGVzLkFDVElWRVxyXG4gICAgICA/IHByb3BzLnRoZW1lLmFjdGl2ZUNvbG9yXHJcbiAgICAgIDogcHJvcHMudGhlbWUudGV4dENvbG9yfTtcclxuYDtcclxuZnVuY3Rpb24gVG9vbHRpcENoaWNrbGV0RmFjdG9yeShkYXRhSWQsIGNvbmZpZywgb25DaGFuZ2UsIGZpZWxkcykge1xyXG4gIGNsYXNzIFRvb2x0aXBDaGlja2xldCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBzdGF0ZSA9IHtcclxuICAgICAgc2hvdzogZmFsc2VcclxuICAgIH07XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMuaGFuZGxlQ2xpY2tPdXRzaWRlLCBmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMuaGFuZGxlQ2xpY2tPdXRzaWRlLCBmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlQ2xpY2tPdXRzaWRlID0gZSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLm5vZGUuY29udGFpbnMoZS50YXJnZXQpKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe3Nob3c6IGZhbHNlfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgY29uc3Qge2Rpc2FibGVkLCBuYW1lLCByZW1vdmV9ID0gdGhpcy5wcm9wcztcclxuICAgICAgY29uc3Qge3Nob3d9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgY29uc3QgZmllbGQgPSBjb25maWcuZmllbGRzVG9TaG93W2RhdGFJZF0uZmluZChmaWVsZFRvU2hvdyA9PiBmaWVsZFRvU2hvdy5uYW1lID09PSBuYW1lKTtcclxuICAgICAgY29uc3QgZm9ybWF0TGFiZWxzID0gZ2V0Rm9ybWF0TGFiZWxzKGZpZWxkcywgZmllbGQubmFtZSk7XHJcbiAgICAgIGxldCBzZWxlY3Rpb25JbmRleCA9IGZvcm1hdExhYmVscy5maW5kSW5kZXgoZmwgPT4gZ2V0VmFsdWUoZmwpID09PSBmaWVsZC5mb3JtYXQpO1xyXG4gICAgICBpZiAoc2VsZWN0aW9uSW5kZXggPCAwKSBzZWxlY3Rpb25JbmRleCA9IDA7XHJcbiAgICAgIGNvbnN0IGhhc2hTdHlsZSA9IHNob3cgPyBoYXNoU3R5bGVzLlNIT1cgOiBzZWxlY3Rpb25JbmRleCA/IGhhc2hTdHlsZXMuQUNUSVZFIDogbnVsbDtcclxuXHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPENoaWNrbGV0QnV0dG9uIHJlZj17bm9kZSA9PiAodGhpcy5ub2RlID0gbm9kZSl9PlxyXG4gICAgICAgICAgPENoaWNrbGV0VGFnPntuYW1lfTwvQ2hpY2tsZXRUYWc+XHJcbiAgICAgICAgICB7Zm9ybWF0TGFiZWxzLmxlbmd0aCA+IDEgJiYgKFxyXG4gICAgICAgICAgICA8Q2hpY2tsZXRBZGRvbldyYXBwZXI+XHJcbiAgICAgICAgICAgICAgPENoaWNrbGV0QWRkb24gZGF0YS10aXAgZGF0YS1mb3I9e2BhZGRvbi0ke25hbWV9YH0+XHJcbiAgICAgICAgICAgICAgICA8SWNvbkRpdiBzdGF0dXM9e2hhc2hTdHlsZX0+XHJcbiAgICAgICAgICAgICAgICAgIDxIYXNoXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiOHB4XCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtzaG93OiBCb29sZWFuKCFzaG93KX0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L0ljb25EaXY+XHJcbiAgICAgICAgICAgICAgICA8VG9vbHRpcCBpZD17YGFkZG9uLSR7bmFtZX1gfSBlZmZlY3Q9XCJzb2xpZFwiPlxyXG4gICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICB7KHNlbGVjdGlvbkluZGV4ICYmIGZvcm1hdExhYmVsc1tzZWxlY3Rpb25JbmRleF0pLmxhYmVsIHx8IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlIGlkPXsnZmllbGRTZWxlY3Rvci5mb3JtYXR0aW5nJ30gLz5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgPC9DaGlja2xldEFkZG9uPlxyXG4gICAgICAgICAgICAgIHtzaG93ICYmIChcclxuICAgICAgICAgICAgICAgIDxTdHlsZWRQb3BvdmVyPlxyXG4gICAgICAgICAgICAgICAgICA8RHJvcGRvd25MaXN0XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17Zm9ybWF0TGFiZWxzfVxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGlvbkluZGV4PXtzZWxlY3Rpb25JbmRleH1cclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5T3B0aW9uPXtpdGVtID0+IGl0ZW0ubGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgb25PcHRpb25TZWxlY3RlZD17KHJlc3VsdCwgZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93OiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgY29uc3Qgb2xkRmllbGRzVG9TaG93ID0gY29uZmlnLmZpZWxkc1RvU2hvd1tkYXRhSWRdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgZmllbGRzVG9TaG93ID0gb2xkRmllbGRzVG9TaG93Lm1hcChmaWVsZFRvU2hvdyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmaWVsZFRvU2hvdy5uYW1lID09PSBuYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdDogZ2V0VmFsdWUocmVzdWx0KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogZmllbGRUb1Nob3c7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld0NvbmZpZyA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLi4uY29uZmlnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZHNUb1Nob3c6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5jb25maWcuZmllbGRzVG9TaG93LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtkYXRhSWRdOiBmaWVsZHNUb1Nob3dcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlKG5ld0NvbmZpZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvU3R5bGVkUG9wb3Zlcj5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L0NoaWNrbGV0QWRkb25XcmFwcGVyPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAgIDxEZWxldGUgb25DbGljaz17ZGlzYWJsZWQgPyBudWxsIDogcmVtb3ZlfSAvPlxyXG4gICAgICAgIDwvQ2hpY2tsZXRCdXR0b24+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBvbkNsaWNrT3V0c2lkZShUb29sdGlwQ2hpY2tsZXQpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb29sdGlwQ2hpY2tsZXRGYWN0b3J5O1xyXG4iXX0=