"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactIntl = require("react-intl");

var _styledComponents2 = require("../../common/styled-components");

var _fieldSelector = _interopRequireDefault(require("../../common/field-selector"));

var _datasetTag = _interopRequireDefault(require("../common/dataset-tag"));

var _tooltipChicklet = _interopRequireDefault(require("./tooltip-config/tooltip-chicklet"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: inherit;\n  padding: 0;\n\n  .button.clear-all {\n    background: transparent;\n    color: ", ";\n    margin: 0 0 0 8px;\n    padding: 0;\n\n    &:hover {\n      color: ", ";\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  .item-selector > div > div {\n    overflow: visible;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

TooltipConfigFactory.deps = [_datasetTag["default"]];

var TooltipConfigWrapper = _styledComponents["default"].div(_templateObject());

var ButtonWrapper = _styledComponents["default"].div(_templateObject2(), function (props) {
  return props.theme.subtextColor;
}, function (props) {
  return props.theme.textColor;
});

function TooltipConfigFactory(DatasetTag) {
  var TooltipConfig = /*#__PURE__*/function (_Component) {
    (0, _inherits2["default"])(TooltipConfig, _Component);

    var _super = _createSuper(TooltipConfig);

    function TooltipConfig() {
      (0, _classCallCheck2["default"])(this, TooltipConfig);
      return _super.apply(this, arguments);
    }

    (0, _createClass2["default"])(TooltipConfig, [{
      key: "render",
      value: function render() {
        var _this$props = this.props,
            config = _this$props.config,
            datasets = _this$props.datasets,
            onChange = _this$props.onChange;
        return /*#__PURE__*/_react["default"].createElement(TooltipConfigWrapper, null, Object.keys(config.fieldsToShow).map(function (dataId) {
          return /*#__PURE__*/_react["default"].createElement(_styledComponents2.SidePanelSection, {
            key: dataId
          }, /*#__PURE__*/_react["default"].createElement(_styledComponents2.SBFlexboxNoMargin, null, /*#__PURE__*/_react["default"].createElement(DatasetTag, {
            dataset: datasets[dataId]
          }), Boolean(config.fieldsToShow[dataId].length) && /*#__PURE__*/_react["default"].createElement(ButtonWrapper, null, /*#__PURE__*/_react["default"].createElement(_styledComponents2.Button, {
            className: "clear-all",
            onClick: function onClick() {
              var newConfig = _objectSpread(_objectSpread({}, config), {}, {
                fieldsToShow: _objectSpread(_objectSpread({}, config.fieldsToShow), {}, (0, _defineProperty2["default"])({}, dataId, []))
              });

              onChange(newConfig);
            },
            width: "48px",
            secondary: true
          }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
            id: "fieldSelector.clearAll"
          })))), /*#__PURE__*/_react["default"].createElement(_fieldSelector["default"], {
            fields: datasets[dataId].fields,
            value: config.fieldsToShow[dataId],
            onSelect: function onSelect(fieldsToShow) {
              var newConfig = _objectSpread(_objectSpread({}, config), {}, {
                fieldsToShow: _objectSpread(_objectSpread({}, config.fieldsToShow), {}, (0, _defineProperty2["default"])({}, dataId, fieldsToShow))
              });

              onChange(newConfig);
            },
            closeOnSelect: false,
            multiSelect: true,
            inputTheme: "secondary",
            CustomChickletComponent: (0, _tooltipChicklet["default"])(dataId, config, onChange, datasets[dataId].fields)
          }));
        }));
      }
    }]);
    return TooltipConfig;
  }(_react.Component);

  return TooltipConfig;
}

var _default = TooltipConfigFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NpZGUtcGFuZWwvaW50ZXJhY3Rpb24tcGFuZWwvdG9vbHRpcC1jb25maWcuanMiXSwibmFtZXMiOlsiVG9vbHRpcENvbmZpZ0ZhY3RvcnkiLCJkZXBzIiwiRGF0YXNldFRhZ0ZhY3RvcnkiLCJUb29sdGlwQ29uZmlnV3JhcHBlciIsInN0eWxlZCIsImRpdiIsIkJ1dHRvbldyYXBwZXIiLCJwcm9wcyIsInRoZW1lIiwic3VidGV4dENvbG9yIiwidGV4dENvbG9yIiwiRGF0YXNldFRhZyIsIlRvb2x0aXBDb25maWciLCJjb25maWciLCJkYXRhc2V0cyIsIm9uQ2hhbmdlIiwiT2JqZWN0Iiwia2V5cyIsImZpZWxkc1RvU2hvdyIsIm1hcCIsImRhdGFJZCIsIkJvb2xlYW4iLCJsZW5ndGgiLCJuZXdDb25maWciLCJmaWVsZHMiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBQSxvQkFBb0IsQ0FBQ0MsSUFBckIsR0FBNEIsQ0FBQ0Msc0JBQUQsQ0FBNUI7O0FBRUEsSUFBTUMsb0JBQW9CLEdBQUdDLDZCQUFPQyxHQUFWLG1CQUExQjs7QUFNQSxJQUFNQyxhQUFhLEdBQUdGLDZCQUFPQyxHQUFWLHFCQU1OLFVBQUFFLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsWUFBaEI7QUFBQSxDQU5DLEVBV0osVUFBQUYsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZRSxTQUFoQjtBQUFBLENBWEQsQ0FBbkI7O0FBZ0JBLFNBQVNWLG9CQUFULENBQThCVyxVQUE5QixFQUEwQztBQUFBLE1BQ2xDQyxhQURrQztBQUFBOztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSwrQkFFN0I7QUFBQSwwQkFDOEIsS0FBS0wsS0FEbkM7QUFBQSxZQUNBTSxNQURBLGVBQ0FBLE1BREE7QUFBQSxZQUNRQyxRQURSLGVBQ1FBLFFBRFI7QUFBQSxZQUNrQkMsUUFEbEIsZUFDa0JBLFFBRGxCO0FBRVAsNEJBQ0UsZ0NBQUMsb0JBQUQsUUFDR0MsTUFBTSxDQUFDQyxJQUFQLENBQVlKLE1BQU0sQ0FBQ0ssWUFBbkIsRUFBaUNDLEdBQWpDLENBQXFDLFVBQUFDLE1BQU07QUFBQSw4QkFDMUMsZ0NBQUMsbUNBQUQ7QUFBa0IsWUFBQSxHQUFHLEVBQUVBO0FBQXZCLDBCQUNFLGdDQUFDLG9DQUFELHFCQUNFLGdDQUFDLFVBQUQ7QUFBWSxZQUFBLE9BQU8sRUFBRU4sUUFBUSxDQUFDTSxNQUFEO0FBQTdCLFlBREYsRUFFR0MsT0FBTyxDQUFDUixNQUFNLENBQUNLLFlBQVAsQ0FBb0JFLE1BQXBCLEVBQTRCRSxNQUE3QixDQUFQLGlCQUNDLGdDQUFDLGFBQUQscUJBQ0UsZ0NBQUMseUJBQUQ7QUFDRSxZQUFBLFNBQVMsRUFBQyxXQURaO0FBRUUsWUFBQSxPQUFPLEVBQUUsbUJBQU07QUFDYixrQkFBTUMsU0FBUyxtQ0FDVlYsTUFEVTtBQUViSyxnQkFBQUEsWUFBWSxrQ0FDUEwsTUFBTSxDQUFDSyxZQURBLDRDQUVURSxNQUZTLEVBRUEsRUFGQTtBQUZDLGdCQUFmOztBQU9BTCxjQUFBQSxRQUFRLENBQUNRLFNBQUQsQ0FBUjtBQUNELGFBWEg7QUFZRSxZQUFBLEtBQUssRUFBQyxNQVpSO0FBYUUsWUFBQSxTQUFTO0FBYlgsMEJBZUUsZ0NBQUMsMkJBQUQ7QUFBa0IsWUFBQSxFQUFFLEVBQUM7QUFBckIsWUFmRixDQURGLENBSEosQ0FERixlQXlCRSxnQ0FBQyx5QkFBRDtBQUNFLFlBQUEsTUFBTSxFQUFFVCxRQUFRLENBQUNNLE1BQUQsQ0FBUixDQUFpQkksTUFEM0I7QUFFRSxZQUFBLEtBQUssRUFBRVgsTUFBTSxDQUFDSyxZQUFQLENBQW9CRSxNQUFwQixDQUZUO0FBR0UsWUFBQSxRQUFRLEVBQUUsa0JBQUFGLFlBQVksRUFBSTtBQUN4QixrQkFBTUssU0FBUyxtQ0FDVlYsTUFEVTtBQUViSyxnQkFBQUEsWUFBWSxrQ0FDUEwsTUFBTSxDQUFDSyxZQURBLDRDQUVURSxNQUZTLEVBRUFGLFlBRkE7QUFGQyxnQkFBZjs7QUFPQUgsY0FBQUEsUUFBUSxDQUFDUSxTQUFELENBQVI7QUFDRCxhQVpIO0FBYUUsWUFBQSxhQUFhLEVBQUUsS0FiakI7QUFjRSxZQUFBLFdBQVcsTUFkYjtBQWVFLFlBQUEsVUFBVSxFQUFDLFdBZmI7QUFnQkUsWUFBQSx1QkFBdUIsRUFBRSxpQ0FDdkJILE1BRHVCLEVBRXZCUCxNQUZ1QixFQUd2QkUsUUFIdUIsRUFJdkJELFFBQVEsQ0FBQ00sTUFBRCxDQUFSLENBQWlCSSxNQUpNO0FBaEIzQixZQXpCRixDQUQwQztBQUFBLFNBQTNDLENBREgsQ0FERjtBQXVERDtBQTNEcUM7QUFBQTtBQUFBLElBQ1pDLGdCQURZOztBQThEeEMsU0FBT2IsYUFBUDtBQUNEOztlQUVjWixvQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMCBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHtGb3JtYXR0ZWRNZXNzYWdlfSBmcm9tICdyZWFjdC1pbnRsJztcclxuaW1wb3J0IHtTaWRlUGFuZWxTZWN0aW9uLCBTQkZsZXhib3hOb01hcmdpbiwgQnV0dG9ufSBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9zdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBGaWVsZFNlbGVjdG9yIGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL2ZpZWxkLXNlbGVjdG9yJztcclxuaW1wb3J0IERhdGFzZXRUYWdGYWN0b3J5IGZyb20gJ2NvbXBvbmVudHMvc2lkZS1wYW5lbC9jb21tb24vZGF0YXNldC10YWcnO1xyXG5pbXBvcnQgVG9vbHRpcENoaWNrbGV0RmFjdG9yeSBmcm9tICcuL3Rvb2x0aXAtY29uZmlnL3Rvb2x0aXAtY2hpY2tsZXQnO1xyXG5cclxuVG9vbHRpcENvbmZpZ0ZhY3RvcnkuZGVwcyA9IFtEYXRhc2V0VGFnRmFjdG9yeV07XHJcblxyXG5jb25zdCBUb29sdGlwQ29uZmlnV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgLml0ZW0tc2VsZWN0b3IgPiBkaXYgPiBkaXYge1xyXG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgQnV0dG9uV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogaW5oZXJpdDtcclxuICBwYWRkaW5nOiAwO1xyXG5cclxuICAuYnV0dG9uLmNsZWFyLWFsbCB7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnN1YnRleHRDb2xvcn07XHJcbiAgICBtYXJnaW46IDAgMCAwIDhweDtcclxuICAgIHBhZGRpbmc6IDA7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRleHRDb2xvcn07XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuZnVuY3Rpb24gVG9vbHRpcENvbmZpZ0ZhY3RvcnkoRGF0YXNldFRhZykge1xyXG4gIGNsYXNzIFRvb2x0aXBDb25maWcgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICBjb25zdCB7Y29uZmlnLCBkYXRhc2V0cywgb25DaGFuZ2V9ID0gdGhpcy5wcm9wcztcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8VG9vbHRpcENvbmZpZ1dyYXBwZXI+XHJcbiAgICAgICAgICB7T2JqZWN0LmtleXMoY29uZmlnLmZpZWxkc1RvU2hvdykubWFwKGRhdGFJZCA9PiAoXHJcbiAgICAgICAgICAgIDxTaWRlUGFuZWxTZWN0aW9uIGtleT17ZGF0YUlkfT5cclxuICAgICAgICAgICAgICA8U0JGbGV4Ym94Tm9NYXJnaW4+XHJcbiAgICAgICAgICAgICAgICA8RGF0YXNldFRhZyBkYXRhc2V0PXtkYXRhc2V0c1tkYXRhSWRdfSAvPlxyXG4gICAgICAgICAgICAgICAge0Jvb2xlYW4oY29uZmlnLmZpZWxkc1RvU2hvd1tkYXRhSWRdLmxlbmd0aCkgJiYgKFxyXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uV3JhcHBlcj5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjbGVhci1hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdDb25maWcgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uY29uZmlnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkc1RvU2hvdzoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uY29uZmlnLmZpZWxkc1RvU2hvdyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtkYXRhSWRdOiBbXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2UobmV3Q29uZmlnKTtcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjQ4cHhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc2Vjb25kYXJ5XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2UgaWQ9XCJmaWVsZFNlbGVjdG9yLmNsZWFyQWxsXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9CdXR0b25XcmFwcGVyPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8L1NCRmxleGJveE5vTWFyZ2luPlxyXG4gICAgICAgICAgICAgIDxGaWVsZFNlbGVjdG9yXHJcbiAgICAgICAgICAgICAgICBmaWVsZHM9e2RhdGFzZXRzW2RhdGFJZF0uZmllbGRzfVxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e2NvbmZpZy5maWVsZHNUb1Nob3dbZGF0YUlkXX1cclxuICAgICAgICAgICAgICAgIG9uU2VsZWN0PXtmaWVsZHNUb1Nob3cgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBjb25zdCBuZXdDb25maWcgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uY29uZmlnLFxyXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkc1RvU2hvdzoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgLi4uY29uZmlnLmZpZWxkc1RvU2hvdyxcclxuICAgICAgICAgICAgICAgICAgICAgIFtkYXRhSWRdOiBmaWVsZHNUb1Nob3dcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlKG5ld0NvbmZpZyk7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgY2xvc2VPblNlbGVjdD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICBtdWx0aVNlbGVjdFxyXG4gICAgICAgICAgICAgICAgaW5wdXRUaGVtZT1cInNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgICBDdXN0b21DaGlja2xldENvbXBvbmVudD17VG9vbHRpcENoaWNrbGV0RmFjdG9yeShcclxuICAgICAgICAgICAgICAgICAgZGF0YUlkLFxyXG4gICAgICAgICAgICAgICAgICBjb25maWcsXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlLFxyXG4gICAgICAgICAgICAgICAgICBkYXRhc2V0c1tkYXRhSWRdLmZpZWxkc1xyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L1NpZGVQYW5lbFNlY3Rpb24+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L1Rvb2x0aXBDb25maWdXcmFwcGVyPlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIFRvb2x0aXBDb25maWc7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRvb2x0aXBDb25maWdGYWN0b3J5O1xyXG4iXX0=