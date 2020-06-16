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

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _switch = _interopRequireDefault(require("../../common/switch"));

var _brushConfig = _interopRequireDefault(require("./brush-config"));

var _tooltipConfig = _interopRequireDefault(require("./tooltip-config"));

var _styledComponents2 = require("../../common/styled-components");

var _reactIntl = require("react-intl");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  padding-bottom: 6px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  border-top: 1px solid ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var StyledPanelContent = (0, _styledComponents["default"])(_styledComponents2.PanelContent)(_templateObject(), function (props) {
  return props.theme.panelBorderColor;
});

var StyledInteractionPanel = _styledComponents["default"].div(_templateObject2());

InteractionPanelFactory.deps = [_tooltipConfig["default"], _brushConfig["default"]];

function InteractionPanelFactory(TooltipConfig, BrushConfig) {
  var _class, _temp;

  return _temp = _class = /*#__PURE__*/function (_Component) {
    (0, _inherits2["default"])(InteractionPanel, _Component);

    var _super = _createSuper(InteractionPanel);

    function InteractionPanel() {
      var _this;

      (0, _classCallCheck2["default"])(this, InteractionPanel);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
        isConfigActive: false
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_updateConfig", function (newProp) {
        _this.props.onConfigChange(_objectSpread(_objectSpread({}, _this.props.config), newProp));
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_enableConfig", function () {
        _this.setState({
          isConfigActive: !_this.state.isConfigActive
        });
      });
      return _this;
    }

    (0, _createClass2["default"])(InteractionPanel, [{
      key: "render",
      value: function render() {
        var _this2 = this;

        var _this$props = this.props,
            config = _this$props.config,
            datasets = _this$props.datasets;

        var onChange = function onChange(newConfig) {
          return _this2._updateConfig({
            config: newConfig
          });
        };

        var template = null;

        switch (config.id) {
          case 'tooltip':
            template = /*#__PURE__*/_react["default"].createElement(TooltipConfig, {
              datasets: datasets,
              config: config.config,
              onChange: onChange
            });
            break;

          case 'brush':
            template = /*#__PURE__*/_react["default"].createElement(BrushConfig, {
              config: config.config,
              onChange: onChange
            });
            break;

          default:
            break;
        }

        return /*#__PURE__*/_react["default"].createElement(StyledInteractionPanel, {
          className: "interaction-panel"
        }, /*#__PURE__*/_react["default"].createElement(_styledComponents2.StyledPanelHeader, {
          className: "interaction-panel__header",
          onClick: this._enableConfig
        }, /*#__PURE__*/_react["default"].createElement(_styledComponents2.PanelHeaderContent, {
          className: "interaction-panel__header__content"
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: "interaction-panel__header__icon icon"
        }, /*#__PURE__*/_react["default"].createElement(config.iconComponent, {
          height: "12px"
        })), /*#__PURE__*/_react["default"].createElement("div", {
          className: "interaction-panel__header__title"
        }, /*#__PURE__*/_react["default"].createElement(_styledComponents2.PanelHeaderTitle, null, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
          id: config.label
        })))), /*#__PURE__*/_react["default"].createElement("div", {
          className: "interaction-panel__header__actions"
        }, /*#__PURE__*/_react["default"].createElement(_switch["default"], {
          checked: config.enabled,
          id: "".concat(config.id, "-toggle"),
          onChange: function onChange() {
            return _this2._updateConfig({
              enabled: !config.enabled
            });
          },
          secondary: true
        }))), config.enabled && template && /*#__PURE__*/_react["default"].createElement(StyledPanelContent, {
          className: "interaction-panel__content"
        }, template));
      }
    }]);
    return InteractionPanel;
  }(_react.Component), (0, _defineProperty2["default"])(_class, "propTypes", {
    datasets: _propTypes["default"].object.isRequired,
    config: _propTypes["default"].object.isRequired,
    onConfigChange: _propTypes["default"].func.isRequired
  }), _temp;
}

var _default = InteractionPanelFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NpZGUtcGFuZWwvaW50ZXJhY3Rpb24tcGFuZWwvaW50ZXJhY3Rpb24tcGFuZWwuanMiXSwibmFtZXMiOlsiU3R5bGVkUGFuZWxDb250ZW50IiwiUGFuZWxDb250ZW50IiwicHJvcHMiLCJ0aGVtZSIsInBhbmVsQm9yZGVyQ29sb3IiLCJTdHlsZWRJbnRlcmFjdGlvblBhbmVsIiwic3R5bGVkIiwiZGl2IiwiSW50ZXJhY3Rpb25QYW5lbEZhY3RvcnkiLCJkZXBzIiwiVG9vbHRpcENvbmZpZ0ZhY3RvcnkiLCJCcnVzaENvbmZpZ0ZhY3RvcnkiLCJUb29sdGlwQ29uZmlnIiwiQnJ1c2hDb25maWciLCJpc0NvbmZpZ0FjdGl2ZSIsIm5ld1Byb3AiLCJvbkNvbmZpZ0NoYW5nZSIsImNvbmZpZyIsInNldFN0YXRlIiwic3RhdGUiLCJkYXRhc2V0cyIsIm9uQ2hhbmdlIiwibmV3Q29uZmlnIiwiX3VwZGF0ZUNvbmZpZyIsInRlbXBsYXRlIiwiaWQiLCJfZW5hYmxlQ29uZmlnIiwibGFiZWwiLCJlbmFibGVkIiwiQ29tcG9uZW50IiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsImZ1bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFFQTs7QUFNQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsa0JBQWtCLEdBQUcsa0NBQU9DLCtCQUFQLENBQUgsb0JBQ0UsVUFBQUMsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxnQkFBaEI7QUFBQSxDQURQLENBQXhCOztBQUlBLElBQU1DLHNCQUFzQixHQUFHQyw2QkFBT0MsR0FBVixvQkFBNUI7O0FBSUFDLHVCQUF1QixDQUFDQyxJQUF4QixHQUErQixDQUFDQyx5QkFBRCxFQUF1QkMsdUJBQXZCLENBQS9COztBQUVB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QUFFVSxzQkFBVUMsTUFBVixDQUFpQkMsVUFEVjtBQUVqQmYsSUFBQUEsTUFBTSxFQUFFYSxzQkFBVUMsTUFBVixDQUFpQkMsVUFGUjtBQUdqQmhCLElBQUFBLGNBQWMsRUFBRWMsc0JBQVVHLElBQVYsQ0FBZUQ7QUFIZCxHQURyQjtBQXVFRDs7ZUFFY3hCLHVCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgU3dpdGNoIGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL3N3aXRjaCc7XHJcblxyXG5pbXBvcnQgQnJ1c2hDb25maWdGYWN0b3J5IGZyb20gJy4vYnJ1c2gtY29uZmlnJztcclxuaW1wb3J0IFRvb2x0aXBDb25maWdGYWN0b3J5IGZyb20gJy4vdG9vbHRpcC1jb25maWcnO1xyXG5cclxuaW1wb3J0IHtcclxuICBTdHlsZWRQYW5lbEhlYWRlcixcclxuICBQYW5lbEhlYWRlclRpdGxlLFxyXG4gIFBhbmVsSGVhZGVyQ29udGVudCxcclxuICBQYW5lbENvbnRlbnRcclxufSBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9zdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7Rm9ybWF0dGVkTWVzc2FnZX0gZnJvbSAncmVhY3QtaW50bCc7XHJcblxyXG5jb25zdCBTdHlsZWRQYW5lbENvbnRlbnQgPSBzdHlsZWQoUGFuZWxDb250ZW50KWBcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5wYW5lbEJvcmRlckNvbG9yfTtcclxuYDtcclxuXHJcbmNvbnN0IFN0eWxlZEludGVyYWN0aW9uUGFuZWwgPSBzdHlsZWQuZGl2YFxyXG4gIHBhZGRpbmctYm90dG9tOiA2cHg7XHJcbmA7XHJcblxyXG5JbnRlcmFjdGlvblBhbmVsRmFjdG9yeS5kZXBzID0gW1Rvb2x0aXBDb25maWdGYWN0b3J5LCBCcnVzaENvbmZpZ0ZhY3RvcnldO1xyXG5cclxuZnVuY3Rpb24gSW50ZXJhY3Rpb25QYW5lbEZhY3RvcnkoVG9vbHRpcENvbmZpZywgQnJ1c2hDb25maWcpIHtcclxuICByZXR1cm4gY2xhc3MgSW50ZXJhY3Rpb25QYW5lbCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xyXG4gICAgICBkYXRhc2V0czogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxyXG4gICAgICBjb25maWc6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcclxuICAgICAgb25Db25maWdDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcclxuICAgIH07XHJcblxyXG4gICAgc3RhdGUgPSB7aXNDb25maWdBY3RpdmU6IGZhbHNlfTtcclxuXHJcbiAgICBfdXBkYXRlQ29uZmlnID0gbmV3UHJvcCA9PiB7XHJcbiAgICAgIHRoaXMucHJvcHMub25Db25maWdDaGFuZ2Uoe1xyXG4gICAgICAgIC4uLnRoaXMucHJvcHMuY29uZmlnLFxyXG4gICAgICAgIC4uLm5ld1Byb3BcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIF9lbmFibGVDb25maWcgPSAoKSA9PiB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2lzQ29uZmlnQWN0aXZlOiAhdGhpcy5zdGF0ZS5pc0NvbmZpZ0FjdGl2ZX0pO1xyXG4gICAgfTtcclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgIGNvbnN0IHtjb25maWcsIGRhdGFzZXRzfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgIGNvbnN0IG9uQ2hhbmdlID0gbmV3Q29uZmlnID0+IHRoaXMuX3VwZGF0ZUNvbmZpZyh7Y29uZmlnOiBuZXdDb25maWd9KTtcclxuICAgICAgbGV0IHRlbXBsYXRlID0gbnVsbDtcclxuXHJcbiAgICAgIHN3aXRjaCAoY29uZmlnLmlkKSB7XHJcbiAgICAgICAgY2FzZSAndG9vbHRpcCc6XHJcbiAgICAgICAgICB0ZW1wbGF0ZSA9IChcclxuICAgICAgICAgICAgPFRvb2x0aXBDb25maWcgZGF0YXNldHM9e2RhdGFzZXRzfSBjb25maWc9e2NvbmZpZy5jb25maWd9IG9uQ2hhbmdlPXtvbkNoYW5nZX0gLz5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgY2FzZSAnYnJ1c2gnOlxyXG4gICAgICAgICAgdGVtcGxhdGUgPSA8QnJ1c2hDb25maWcgY29uZmlnPXtjb25maWcuY29uZmlnfSBvbkNoYW5nZT17b25DaGFuZ2V9IC8+O1xyXG4gICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8U3R5bGVkSW50ZXJhY3Rpb25QYW5lbCBjbGFzc05hbWU9XCJpbnRlcmFjdGlvbi1wYW5lbFwiPlxyXG4gICAgICAgICAgPFN0eWxlZFBhbmVsSGVhZGVyIGNsYXNzTmFtZT1cImludGVyYWN0aW9uLXBhbmVsX19oZWFkZXJcIiBvbkNsaWNrPXt0aGlzLl9lbmFibGVDb25maWd9PlxyXG4gICAgICAgICAgICA8UGFuZWxIZWFkZXJDb250ZW50IGNsYXNzTmFtZT1cImludGVyYWN0aW9uLXBhbmVsX19oZWFkZXJfX2NvbnRlbnRcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImludGVyYWN0aW9uLXBhbmVsX19oZWFkZXJfX2ljb24gaWNvblwiPlxyXG4gICAgICAgICAgICAgICAgPGNvbmZpZy5pY29uQ29tcG9uZW50IGhlaWdodD1cIjEycHhcIiAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW50ZXJhY3Rpb24tcGFuZWxfX2hlYWRlcl9fdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgIDxQYW5lbEhlYWRlclRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZSBpZD17Y29uZmlnLmxhYmVsfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9QYW5lbEhlYWRlclRpdGxlPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L1BhbmVsSGVhZGVyQ29udGVudD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnRlcmFjdGlvbi1wYW5lbF9faGVhZGVyX19hY3Rpb25zXCI+XHJcbiAgICAgICAgICAgICAgPFN3aXRjaFxyXG4gICAgICAgICAgICAgICAgY2hlY2tlZD17Y29uZmlnLmVuYWJsZWR9XHJcbiAgICAgICAgICAgICAgICBpZD17YCR7Y29uZmlnLmlkfS10b2dnbGVgfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IHRoaXMuX3VwZGF0ZUNvbmZpZyh7ZW5hYmxlZDogIWNvbmZpZy5lbmFibGVkfSl9XHJcbiAgICAgICAgICAgICAgICBzZWNvbmRhcnlcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvU3R5bGVkUGFuZWxIZWFkZXI+XHJcbiAgICAgICAgICB7Y29uZmlnLmVuYWJsZWQgJiYgdGVtcGxhdGUgJiYgKFxyXG4gICAgICAgICAgICA8U3R5bGVkUGFuZWxDb250ZW50IGNsYXNzTmFtZT1cImludGVyYWN0aW9uLXBhbmVsX19jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAge3RlbXBsYXRlfVxyXG4gICAgICAgICAgICA8L1N0eWxlZFBhbmVsQ29udGVudD5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9TdHlsZWRJbnRlcmFjdGlvblBhbmVsPlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEludGVyYWN0aW9uUGFuZWxGYWN0b3J5O1xyXG4iXX0=