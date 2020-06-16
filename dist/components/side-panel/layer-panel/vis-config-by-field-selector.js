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

var _reactIntl = require("react-intl");

var _styledComponents = require("../../common/styled-components");

var _fieldSelector = _interopRequireDefault(require("../../common/field-selector"));

var _infoHelper = _interopRequireDefault(require("../../common/info-helper"));

var _dimensionScaleSelector = _interopRequireDefault(require("./dimension-scale-selector"));

var _utils = require("../../../utils/utils");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var VisConfigByFieldSelector = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(VisConfigByFieldSelector, _Component);

  var _super = _createSuper(VisConfigByFieldSelector);

  function VisConfigByFieldSelector() {
    var _this;

    (0, _classCallCheck2["default"])(this, VisConfigByFieldSelector);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_updateVisByField", function (val) {
      _this.props.updateField(val);
    });
    return _this;
  }

  (0, _createClass2["default"])(VisConfigByFieldSelector, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          property = _this$props.property,
          showScale = _this$props.showScale,
          selectedField = _this$props.selectedField,
          description = _this$props.description,
          label = _this$props.label,
          intl = _this$props.intl,
          _this$props$scaleOpti = _this$props.scaleOptions,
          scaleOptions = _this$props$scaleOpti === void 0 ? [] : _this$props$scaleOpti;
      return /*#__PURE__*/_react["default"].createElement(_styledComponents.SidePanelSection, null, /*#__PURE__*/_react["default"].createElement(_styledComponents.SidePanelSection, null, /*#__PURE__*/_react["default"].createElement(_styledComponents.PanelLabelWrapper, null, /*#__PURE__*/_react["default"].createElement(_styledComponents.PanelLabel, null, label && /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: label
      }) || /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "layer.propertyBasedOn",
        values: {
          property: intl.formatMessage({
            id: "property.".concat((0, _utils.camelize)(property)),
            defaultMessage: property
          })
        }
      })), description && /*#__PURE__*/_react["default"].createElement(_infoHelper["default"], {
        description: description,
        property: property,
        id: "".concat(this.props.id, "-").concat(property)
      })), /*#__PURE__*/_react["default"].createElement(_fieldSelector["default"], {
        fields: this.props.fields,
        value: selectedField && selectedField.name,
        placeholder: this.props.placeholder,
        onSelect: this._updateVisByField,
        erasable: true
      })), /*#__PURE__*/_react["default"].createElement("div", null, showScale ? /*#__PURE__*/_react["default"].createElement(_dimensionScaleSelector["default"], {
        scaleType: this.props.scaleType,
        options: scaleOptions,
        label: "".concat(property, " scale"),
        onSelect: this.props.updateScale,
        disabled: scaleOptions.length < 2
      }) : null));
    }
  }]);
  return VisConfigByFieldSelector;
}(_react.Component);

(0, _defineProperty2["default"])(VisConfigByFieldSelector, "propTypes", {
  channel: _propTypes["default"].string.isRequired,
  fields: _propTypes["default"].arrayOf(_propTypes["default"].any).isRequired,
  id: _propTypes["default"].string.isRequired,
  property: _propTypes["default"].string.isRequired,
  showScale: _propTypes["default"].bool.isRequired,
  updateField: _propTypes["default"].func.isRequired,
  updateScale: _propTypes["default"].func.isRequired,
  // optional
  scaleType: _propTypes["default"].string,
  selectedField: _propTypes["default"].object,
  description: _propTypes["default"].string,
  label: _propTypes["default"].string,
  placeholder: _propTypes["default"].string
});

var _default = (0, _reactIntl.injectIntl)(VisConfigByFieldSelector);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NpZGUtcGFuZWwvbGF5ZXItcGFuZWwvdmlzLWNvbmZpZy1ieS1maWVsZC1zZWxlY3Rvci5qcyJdLCJuYW1lcyI6WyJWaXNDb25maWdCeUZpZWxkU2VsZWN0b3IiLCJ2YWwiLCJwcm9wcyIsInVwZGF0ZUZpZWxkIiwicHJvcGVydHkiLCJzaG93U2NhbGUiLCJzZWxlY3RlZEZpZWxkIiwiZGVzY3JpcHRpb24iLCJsYWJlbCIsImludGwiLCJzY2FsZU9wdGlvbnMiLCJmb3JtYXRNZXNzYWdlIiwiaWQiLCJkZWZhdWx0TWVzc2FnZSIsImZpZWxkcyIsIm5hbWUiLCJwbGFjZWhvbGRlciIsIl91cGRhdGVWaXNCeUZpZWxkIiwic2NhbGVUeXBlIiwidXBkYXRlU2NhbGUiLCJsZW5ndGgiLCJDb21wb25lbnQiLCJjaGFubmVsIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsImFycmF5T2YiLCJhbnkiLCJib29sIiwiZnVuYyIsIm9iamVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7O0lBRU1BLHdCOzs7Ozs7Ozs7Ozs7Ozs7MEdBa0JnQixVQUFBQyxHQUFHLEVBQUk7QUFDekIsWUFBS0MsS0FBTCxDQUFXQyxXQUFYLENBQXVCRixHQUF2QjtBQUNELEs7Ozs7Ozs2QkFFUTtBQUFBLHdCQVNILEtBQUtDLEtBVEY7QUFBQSxVQUVMRSxRQUZLLGVBRUxBLFFBRks7QUFBQSxVQUdMQyxTQUhLLGVBR0xBLFNBSEs7QUFBQSxVQUlMQyxhQUpLLGVBSUxBLGFBSks7QUFBQSxVQUtMQyxXQUxLLGVBS0xBLFdBTEs7QUFBQSxVQU1MQyxLQU5LLGVBTUxBLEtBTks7QUFBQSxVQU9MQyxJQVBLLGVBT0xBLElBUEs7QUFBQSw4Q0FRTEMsWUFSSztBQUFBLFVBUUxBLFlBUkssc0NBUVUsRUFSVjtBQVdQLDBCQUNFLGdDQUFDLGtDQUFELHFCQUNFLGdDQUFDLGtDQUFELHFCQUNFLGdDQUFDLG1DQUFELHFCQUNFLGdDQUFDLDRCQUFELFFBQ0lGLEtBQUssaUJBQUksZ0NBQUMsMkJBQUQ7QUFBa0IsUUFBQSxFQUFFLEVBQUVBO0FBQXRCLFFBQVYsaUJBQ0MsZ0NBQUMsMkJBQUQ7QUFDRSxRQUFBLEVBQUUsRUFBQyx1QkFETDtBQUVFLFFBQUEsTUFBTSxFQUFFO0FBQ05KLFVBQUFBLFFBQVEsRUFBRUssSUFBSSxDQUFDRSxhQUFMLENBQW1CO0FBQzNCQyxZQUFBQSxFQUFFLHFCQUFjLHFCQUFTUixRQUFULENBQWQsQ0FEeUI7QUFFM0JTLFlBQUFBLGNBQWMsRUFBRVQ7QUFGVyxXQUFuQjtBQURKO0FBRlYsUUFGSixDQURGLEVBY0dHLFdBQVcsaUJBQ1YsZ0NBQUMsc0JBQUQ7QUFDRSxRQUFBLFdBQVcsRUFBRUEsV0FEZjtBQUVFLFFBQUEsUUFBUSxFQUFFSCxRQUZaO0FBR0UsUUFBQSxFQUFFLFlBQUssS0FBS0YsS0FBTCxDQUFXVSxFQUFoQixjQUFzQlIsUUFBdEI7QUFISixRQWZKLENBREYsZUF1QkUsZ0NBQUMseUJBQUQ7QUFDRSxRQUFBLE1BQU0sRUFBRSxLQUFLRixLQUFMLENBQVdZLE1BRHJCO0FBRUUsUUFBQSxLQUFLLEVBQUVSLGFBQWEsSUFBSUEsYUFBYSxDQUFDUyxJQUZ4QztBQUdFLFFBQUEsV0FBVyxFQUFFLEtBQUtiLEtBQUwsQ0FBV2MsV0FIMUI7QUFJRSxRQUFBLFFBQVEsRUFBRSxLQUFLQyxpQkFKakI7QUFLRSxRQUFBLFFBQVE7QUFMVixRQXZCRixDQURGLGVBZ0NFLDZDQUNHWixTQUFTLGdCQUNSLGdDQUFDLGtDQUFEO0FBQ0UsUUFBQSxTQUFTLEVBQUUsS0FBS0gsS0FBTCxDQUFXZ0IsU0FEeEI7QUFFRSxRQUFBLE9BQU8sRUFBRVIsWUFGWDtBQUdFLFFBQUEsS0FBSyxZQUFLTixRQUFMLFdBSFA7QUFJRSxRQUFBLFFBQVEsRUFBRSxLQUFLRixLQUFMLENBQVdpQixXQUp2QjtBQUtFLFFBQUEsUUFBUSxFQUFFVCxZQUFZLENBQUNVLE1BQWIsR0FBc0I7QUFMbEMsUUFEUSxHQVFOLElBVE4sQ0FoQ0YsQ0FERjtBQThDRDs7O0VBL0VvQ0MsZ0I7O2lDQUFqQ3JCLHdCLGVBQ2U7QUFDakJzQixFQUFBQSxPQUFPLEVBQUVDLHNCQUFVQyxNQUFWLENBQWlCQyxVQURUO0FBRWpCWCxFQUFBQSxNQUFNLEVBQUVTLHNCQUFVRyxPQUFWLENBQWtCSCxzQkFBVUksR0FBNUIsRUFBaUNGLFVBRnhCO0FBR2pCYixFQUFBQSxFQUFFLEVBQUVXLHNCQUFVQyxNQUFWLENBQWlCQyxVQUhKO0FBSWpCckIsRUFBQUEsUUFBUSxFQUFFbUIsc0JBQVVDLE1BQVYsQ0FBaUJDLFVBSlY7QUFLakJwQixFQUFBQSxTQUFTLEVBQUVrQixzQkFBVUssSUFBVixDQUFlSCxVQUxUO0FBTWpCdEIsRUFBQUEsV0FBVyxFQUFFb0Isc0JBQVVNLElBQVYsQ0FBZUosVUFOWDtBQU9qQk4sRUFBQUEsV0FBVyxFQUFFSSxzQkFBVU0sSUFBVixDQUFlSixVQVBYO0FBU2pCO0FBQ0FQLEVBQUFBLFNBQVMsRUFBRUssc0JBQVVDLE1BVko7QUFXakJsQixFQUFBQSxhQUFhLEVBQUVpQixzQkFBVU8sTUFYUjtBQVlqQnZCLEVBQUFBLFdBQVcsRUFBRWdCLHNCQUFVQyxNQVpOO0FBYWpCaEIsRUFBQUEsS0FBSyxFQUFFZSxzQkFBVUMsTUFiQTtBQWNqQlIsRUFBQUEsV0FBVyxFQUFFTyxzQkFBVUM7QUFkTixDOztlQWlGTiwyQkFBV3hCLHdCQUFYLEMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHtGb3JtYXR0ZWRNZXNzYWdlLCBpbmplY3RJbnRsfSBmcm9tICdyZWFjdC1pbnRsJztcclxuXHJcbmltcG9ydCB7UGFuZWxMYWJlbCwgUGFuZWxMYWJlbFdyYXBwZXIsIFNpZGVQYW5lbFNlY3Rpb259IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IEZpZWxkU2VsZWN0b3IgZnJvbSAnY29tcG9uZW50cy9jb21tb24vZmllbGQtc2VsZWN0b3InO1xyXG5pbXBvcnQgSW5mb0hlbHBlciBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9pbmZvLWhlbHBlcic7XHJcbmltcG9ydCBEaW1lbnNpb25TY2FsZVNlbGVjdG9yIGZyb20gJy4vZGltZW5zaW9uLXNjYWxlLXNlbGVjdG9yJztcclxuaW1wb3J0IHtjYW1lbGl6ZX0gZnJvbSAndXRpbHMvdXRpbHMnO1xyXG5cclxuY2xhc3MgVmlzQ29uZmlnQnlGaWVsZFNlbGVjdG9yIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xyXG4gICAgY2hhbm5lbDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgZmllbGRzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuYW55KS5pc1JlcXVpcmVkLFxyXG4gICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgIHByb3BlcnR5OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgICBzaG93U2NhbGU6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXHJcbiAgICB1cGRhdGVGaWVsZDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICAgIHVwZGF0ZVNjYWxlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG5cclxuICAgIC8vIG9wdGlvbmFsXHJcbiAgICBzY2FsZVR5cGU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBzZWxlY3RlZEZpZWxkOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gICAgZGVzY3JpcHRpb246IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIHBsYWNlaG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nXHJcbiAgfTtcclxuXHJcbiAgX3VwZGF0ZVZpc0J5RmllbGQgPSB2YWwgPT4ge1xyXG4gICAgdGhpcy5wcm9wcy51cGRhdGVGaWVsZCh2YWwpO1xyXG4gIH07XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgcHJvcGVydHksXHJcbiAgICAgIHNob3dTY2FsZSxcclxuICAgICAgc2VsZWN0ZWRGaWVsZCxcclxuICAgICAgZGVzY3JpcHRpb24sXHJcbiAgICAgIGxhYmVsLFxyXG4gICAgICBpbnRsLFxyXG4gICAgICBzY2FsZU9wdGlvbnMgPSBbXVxyXG4gICAgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPFNpZGVQYW5lbFNlY3Rpb24+XHJcbiAgICAgICAgPFNpZGVQYW5lbFNlY3Rpb24+XHJcbiAgICAgICAgICA8UGFuZWxMYWJlbFdyYXBwZXI+XHJcbiAgICAgICAgICAgIDxQYW5lbExhYmVsPlxyXG4gICAgICAgICAgICAgIHsobGFiZWwgJiYgPEZvcm1hdHRlZE1lc3NhZ2UgaWQ9e2xhYmVsfSAvPikgfHwgKFxyXG4gICAgICAgICAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2VcclxuICAgICAgICAgICAgICAgICAgaWQ9XCJsYXllci5wcm9wZXJ0eUJhc2VkT25cIlxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZXM9e3tcclxuICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eTogaW50bC5mb3JtYXRNZXNzYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICAgIGlkOiBgcHJvcGVydHkuJHtjYW1lbGl6ZShwcm9wZXJ0eSl9YCxcclxuICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRNZXNzYWdlOiBwcm9wZXJ0eVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvUGFuZWxMYWJlbD5cclxuICAgICAgICAgICAge2Rlc2NyaXB0aW9uICYmIChcclxuICAgICAgICAgICAgICA8SW5mb0hlbHBlclxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e2Rlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgcHJvcGVydHk9e3Byb3BlcnR5fVxyXG4gICAgICAgICAgICAgICAgaWQ9e2Ake3RoaXMucHJvcHMuaWR9LSR7cHJvcGVydHl9YH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9QYW5lbExhYmVsV3JhcHBlcj5cclxuICAgICAgICAgIDxGaWVsZFNlbGVjdG9yXHJcbiAgICAgICAgICAgIGZpZWxkcz17dGhpcy5wcm9wcy5maWVsZHN9XHJcbiAgICAgICAgICAgIHZhbHVlPXtzZWxlY3RlZEZpZWxkICYmIHNlbGVjdGVkRmllbGQubmFtZX1cclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3RoaXMucHJvcHMucGxhY2Vob2xkZXJ9XHJcbiAgICAgICAgICAgIG9uU2VsZWN0PXt0aGlzLl91cGRhdGVWaXNCeUZpZWxkfVxyXG4gICAgICAgICAgICBlcmFzYWJsZVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L1NpZGVQYW5lbFNlY3Rpb24+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIHtzaG93U2NhbGUgPyAoXHJcbiAgICAgICAgICAgIDxEaW1lbnNpb25TY2FsZVNlbGVjdG9yXHJcbiAgICAgICAgICAgICAgc2NhbGVUeXBlPXt0aGlzLnByb3BzLnNjYWxlVHlwZX1cclxuICAgICAgICAgICAgICBvcHRpb25zPXtzY2FsZU9wdGlvbnN9XHJcbiAgICAgICAgICAgICAgbGFiZWw9e2Ake3Byb3BlcnR5fSBzY2FsZWB9XHJcbiAgICAgICAgICAgICAgb25TZWxlY3Q9e3RoaXMucHJvcHMudXBkYXRlU2NhbGV9XHJcbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e3NjYWxlT3B0aW9ucy5sZW5ndGggPCAyfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvU2lkZVBhbmVsU2VjdGlvbj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbmplY3RJbnRsKFZpc0NvbmZpZ0J5RmllbGRTZWxlY3Rvcik7XHJcbiJdfQ==