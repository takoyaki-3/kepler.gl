"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.StyledConfigGroupHeader = exports.StyledLayerConfigGroup = exports.ConfigGroupCollapsibleHeader = exports.ConfigGroupCollapsibleContent = exports.StyledLayerConfigGroupAction = exports.StyledLayerConfigGroupLabel = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _reactLifecyclesCompat = require("react-lifecycles-compat");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactIntl = require("react-intl");

var _switch = _interopRequireDefault(require("../../common/switch"));

var _infoHelper = _interopRequireDefault(require("../../common/info-helper"));

var _icons = require("../../common/icons");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _templateObject7() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  &.disabled {\n    opacity: 0.3;\n    pointer-events: none;\n    * {\n      pointer-events: none;\n    }\n  }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 12px;\n\n  :hover {\n    cursor: pointer;\n    .layer-config-group__label {\n      color: ", ";\n      border-left: 2px solid ", ";\n    }\n\n    .layer-config-group__action {\n      color: ", ";\n    }\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  padding-left: 18px;\n  margin-bottom: 12px;\n\n  &.disabled {\n    opacity: 0.3;\n    pointer-events: none;\n  }\n  &.collapsed {\n    .layer-config-group__header__collapsible {\n      overflow: visible;\n      max-height: 600px;\n    }\n    .layer-config-group__content {\n      .layer-config-group__content__collapsible {\n        overflow: hidden;\n        max-height: 0;\n      }\n    }\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  overflow: visible;\n  overflow: hidden;\n  max-height: 0;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  overflow: visible;\n  transition: max-height 0.3s ease-out;\n  height: max-content;\n  max-height: 600px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  align-items: center;\n  color: ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  border-left: 2px solid ", ";\n  line-height: 12px;\n  margin-left: -12px;\n  padding-left: 10px;\n  display: flex;\n  align-items: center;\n\n  span {\n    color: ", ";\n    font-size: 12px;\n    font-weight: 500;\n    letter-spacing: 0.2px;\n    text-transform: capitalize;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var StyledLayerConfigGroupLabel = _styledComponents["default"].div(_templateObject(), function (props) {
  return props.theme.labelColor;
}, function (props) {
  return props.theme.textColor;
});

exports.StyledLayerConfigGroupLabel = StyledLayerConfigGroupLabel;

var StyledLayerConfigGroupAction = _styledComponents["default"].div(_templateObject2(), function (props) {
  return props.theme.textColor;
});

exports.StyledLayerConfigGroupAction = StyledLayerConfigGroupAction;

var ConfigGroupCollapsibleContent = _styledComponents["default"].div.attrs({
  className: 'layer-config-group__content__collapsible'
})(_templateObject3());

exports.ConfigGroupCollapsibleContent = ConfigGroupCollapsibleContent;

var ConfigGroupCollapsibleHeader = _styledComponents["default"].div.attrs({
  className: 'layer-config-group__header__collapsible'
})(_templateObject4());

exports.ConfigGroupCollapsibleHeader = ConfigGroupCollapsibleHeader;

var StyledLayerConfigGroup = _styledComponents["default"].div(_templateObject5());

exports.StyledLayerConfigGroup = StyledLayerConfigGroup;

var StyledConfigGroupHeader = _styledComponents["default"].div(_templateObject6(), function (props) {
  return props.theme.textColorHl;
}, function (props) {
  return props.theme.textColorHl;
}, function (props) {
  return props.theme.textColorHl;
});

exports.StyledConfigGroupHeader = StyledConfigGroupHeader;

var ConfigGroupContent = _styledComponents["default"].div(_templateObject7());

var LayerConfigGroup = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(LayerConfigGroup, _Component);

  var _super = _createSuper(LayerConfigGroup);

  function LayerConfigGroup() {
    var _this;

    (0, _classCallCheck2["default"])(this, LayerConfigGroup);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      collapsed: true
    });
    return _this;
  }

  (0, _createClass2["default"])(LayerConfigGroup, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          label = _this$props.label,
          children = _this$props.children,
          property = _this$props.property,
          layer = _this$props.layer,
          _onChange2 = _this$props.onChange,
          collapsible = _this$props.collapsible,
          description = _this$props.description,
          disabled = _this$props.disabled;
      var collapsed = this.state.collapsed;
      return /*#__PURE__*/_react["default"].createElement(StyledLayerConfigGroup, {
        className: (0, _classnames["default"])('layer-config-group', {
          collapsed: collapsed,
          disabled: disabled
        })
      }, /*#__PURE__*/_react["default"].createElement(StyledConfigGroupHeader, {
        className: "layer-config-group__header",
        onClick: function onClick() {
          return _this2.setState({
            collapsed: !_this2.state.collapsed
          });
        }
      }, /*#__PURE__*/_react["default"].createElement(StyledLayerConfigGroupLabel, {
        className: "layer-config-group__label"
      }, /*#__PURE__*/_react["default"].createElement("span", null, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: label || 'misc.empty'
      })), description && /*#__PURE__*/_react["default"].createElement(_infoHelper["default"], {
        description: description,
        id: label
      })), /*#__PURE__*/_react["default"].createElement(StyledLayerConfigGroupAction, {
        className: "layer-config-group__action"
      }, property ? /*#__PURE__*/_react["default"].createElement(_switch["default"], {
        checked: layer.config.visConfig[property],
        id: "".concat(layer.id, "-").concat(property),
        onChange: function onChange() {
          return _onChange2((0, _defineProperty2["default"])({}, property, !layer.config.visConfig[property]));
        }
      }) : null, collapsible ? /*#__PURE__*/_react["default"].createElement(_icons.VertThreeDots, {
        height: "18px"
      }) : null)), /*#__PURE__*/_react["default"].createElement(ConfigGroupContent, {
        className: (0, _classnames["default"])('layer-config-group__content', {
          disabled: property && !layer.config.visConfig[property]
        })
      }, children));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      //  invoked after a component is instantiated as well as before it is re-rendered
      if (props.expanded && state.collapsed) {
        return {
          collapsed: false
        };
      }

      return null;
    }
  }]);
  return LayerConfigGroup;
}(_react.Component);

(0, _defineProperty2["default"])(LayerConfigGroup, "defaultProps", {
  collapsible: false,
  expanded: false,
  onChange: function onChange() {},
  description: null,
  disabled: false
});
(0, _reactLifecyclesCompat.polyfill)(LayerConfigGroup);
var _default = LayerConfigGroup;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NpZGUtcGFuZWwvbGF5ZXItcGFuZWwvbGF5ZXItY29uZmlnLWdyb3VwLmpzIl0sIm5hbWVzIjpbIlN0eWxlZExheWVyQ29uZmlnR3JvdXBMYWJlbCIsInN0eWxlZCIsImRpdiIsInByb3BzIiwidGhlbWUiLCJsYWJlbENvbG9yIiwidGV4dENvbG9yIiwiU3R5bGVkTGF5ZXJDb25maWdHcm91cEFjdGlvbiIsIkNvbmZpZ0dyb3VwQ29sbGFwc2libGVDb250ZW50IiwiYXR0cnMiLCJjbGFzc05hbWUiLCJDb25maWdHcm91cENvbGxhcHNpYmxlSGVhZGVyIiwiU3R5bGVkTGF5ZXJDb25maWdHcm91cCIsIlN0eWxlZENvbmZpZ0dyb3VwSGVhZGVyIiwidGV4dENvbG9ySGwiLCJDb25maWdHcm91cENvbnRlbnQiLCJMYXllckNvbmZpZ0dyb3VwIiwiY29sbGFwc2VkIiwibGFiZWwiLCJjaGlsZHJlbiIsInByb3BlcnR5IiwibGF5ZXIiLCJvbkNoYW5nZSIsImNvbGxhcHNpYmxlIiwiZGVzY3JpcHRpb24iLCJkaXNhYmxlZCIsInN0YXRlIiwic2V0U3RhdGUiLCJjb25maWciLCJ2aXNDb25maWciLCJpZCIsImV4cGFuZGVkIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTyxJQUFNQSwyQkFBMkIsR0FBR0MsNkJBQU9DLEdBQVYsb0JBQ2IsVUFBQUMsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxVQUFoQjtBQUFBLENBRFEsRUFTM0IsVUFBQUYsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZRSxTQUFoQjtBQUFBLENBVHNCLENBQWpDOzs7O0FBaUJBLElBQU1DLDRCQUE0QixHQUFHTiw2QkFBT0MsR0FBVixxQkFHOUIsVUFBQUMsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZRSxTQUFoQjtBQUFBLENBSHlCLENBQWxDOzs7O0FBTUEsSUFBTUUsNkJBQTZCLEdBQUdQLDZCQUFPQyxHQUFQLENBQVdPLEtBQVgsQ0FBaUI7QUFDNURDLEVBQUFBLFNBQVMsRUFBRTtBQURpRCxDQUFqQixDQUFILG9CQUFuQzs7OztBQVNBLElBQU1DLDRCQUE0QixHQUFHViw2QkFBT0MsR0FBUCxDQUFXTyxLQUFYLENBQWlCO0FBQzNEQyxFQUFBQSxTQUFTLEVBQUU7QUFEZ0QsQ0FBakIsQ0FBSCxvQkFBbEM7Ozs7QUFRQSxJQUFNRSxzQkFBc0IsR0FBR1gsNkJBQU9DLEdBQVYsb0JBQTVCOzs7O0FBc0JBLElBQU1XLHVCQUF1QixHQUFHWiw2QkFBT0MsR0FBVixxQkFTckIsVUFBQUMsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZVSxXQUFoQjtBQUFBLENBVGdCLEVBVUwsVUFBQVgsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZVSxXQUFoQjtBQUFBLENBVkEsRUFjckIsVUFBQVgsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZVSxXQUFoQjtBQUFBLENBZGdCLENBQTdCOzs7O0FBbUJQLElBQU1DLGtCQUFrQixHQUFHZCw2QkFBT0MsR0FBVixvQkFBeEI7O0lBVU1jLGdCOzs7Ozs7Ozs7Ozs7Ozs7OEZBa0JJO0FBQ05DLE1BQUFBLFNBQVMsRUFBRTtBQURMLEs7Ozs7Ozs2QkFJQztBQUFBOztBQUFBLHdCQVVILEtBQUtkLEtBVkY7QUFBQSxVQUVMZSxLQUZLLGVBRUxBLEtBRks7QUFBQSxVQUdMQyxRQUhLLGVBR0xBLFFBSEs7QUFBQSxVQUlMQyxRQUpLLGVBSUxBLFFBSks7QUFBQSxVQUtMQyxLQUxLLGVBS0xBLEtBTEs7QUFBQSxVQU1MQyxVQU5LLGVBTUxBLFFBTks7QUFBQSxVQU9MQyxXQVBLLGVBT0xBLFdBUEs7QUFBQSxVQVFMQyxXQVJLLGVBUUxBLFdBUks7QUFBQSxVQVNMQyxRQVRLLGVBU0xBLFFBVEs7QUFBQSxVQVlBUixTQVpBLEdBWWEsS0FBS1MsS0FabEIsQ0FZQVQsU0FaQTtBQWNQLDBCQUNFLGdDQUFDLHNCQUFEO0FBQXdCLFFBQUEsU0FBUyxFQUFFLDRCQUFXLG9CQUFYLEVBQWlDO0FBQUNBLFVBQUFBLFNBQVMsRUFBVEEsU0FBRDtBQUFZUSxVQUFBQSxRQUFRLEVBQVJBO0FBQVosU0FBakM7QUFBbkMsc0JBQ0UsZ0NBQUMsdUJBQUQ7QUFDRSxRQUFBLFNBQVMsRUFBQyw0QkFEWjtBQUVFLFFBQUEsT0FBTyxFQUFFO0FBQUEsaUJBQU0sTUFBSSxDQUFDRSxRQUFMLENBQWM7QUFBQ1YsWUFBQUEsU0FBUyxFQUFFLENBQUMsTUFBSSxDQUFDUyxLQUFMLENBQVdUO0FBQXhCLFdBQWQsQ0FBTjtBQUFBO0FBRlgsc0JBSUUsZ0NBQUMsMkJBQUQ7QUFBNkIsUUFBQSxTQUFTLEVBQUM7QUFBdkMsc0JBQ0UsMkRBQ0UsZ0NBQUMsMkJBQUQ7QUFBa0IsUUFBQSxFQUFFLEVBQUVDLEtBQUssSUFBSTtBQUEvQixRQURGLENBREYsRUFJR00sV0FBVyxpQkFBSSxnQ0FBQyxzQkFBRDtBQUFZLFFBQUEsV0FBVyxFQUFFQSxXQUF6QjtBQUFzQyxRQUFBLEVBQUUsRUFBRU47QUFBMUMsUUFKbEIsQ0FKRixlQVVFLGdDQUFDLDRCQUFEO0FBQThCLFFBQUEsU0FBUyxFQUFDO0FBQXhDLFNBQ0dFLFFBQVEsZ0JBQ1AsZ0NBQUMsa0JBQUQ7QUFDRSxRQUFBLE9BQU8sRUFBRUMsS0FBSyxDQUFDTyxNQUFOLENBQWFDLFNBQWIsQ0FBdUJULFFBQXZCLENBRFg7QUFFRSxRQUFBLEVBQUUsWUFBS0MsS0FBSyxDQUFDUyxFQUFYLGNBQWlCVixRQUFqQixDQUZKO0FBR0UsUUFBQSxRQUFRLEVBQUU7QUFBQSxpQkFBTUUsVUFBUSxzQ0FBR0YsUUFBSCxFQUFjLENBQUNDLEtBQUssQ0FBQ08sTUFBTixDQUFhQyxTQUFiLENBQXVCVCxRQUF2QixDQUFmLEVBQWQ7QUFBQTtBQUhaLFFBRE8sR0FNTCxJQVBOLEVBUUdHLFdBQVcsZ0JBQUcsZ0NBQUMsb0JBQUQ7QUFBZSxRQUFBLE1BQU0sRUFBQztBQUF0QixRQUFILEdBQXFDLElBUm5ELENBVkYsQ0FERixlQXNCRSxnQ0FBQyxrQkFBRDtBQUNFLFFBQUEsU0FBUyxFQUFFLDRCQUFXLDZCQUFYLEVBQTBDO0FBQ25ERSxVQUFBQSxRQUFRLEVBQUVMLFFBQVEsSUFBSSxDQUFDQyxLQUFLLENBQUNPLE1BQU4sQ0FBYUMsU0FBYixDQUF1QlQsUUFBdkI7QUFENEIsU0FBMUM7QUFEYixTQUtHRCxRQUxILENBdEJGLENBREY7QUFnQ0Q7Ozs2Q0EzRCtCaEIsSyxFQUFPdUIsSyxFQUFPO0FBQzVDO0FBQ0EsVUFBSXZCLEtBQUssQ0FBQzRCLFFBQU4sSUFBa0JMLEtBQUssQ0FBQ1QsU0FBNUIsRUFBdUM7QUFDckMsZUFBTztBQUFDQSxVQUFBQSxTQUFTLEVBQUU7QUFBWixTQUFQO0FBQ0Q7O0FBRUQsYUFBTyxJQUFQO0FBQ0Q7OztFQWhCNEJlLGdCOztpQ0FBekJoQixnQixrQkFDa0I7QUFDcEJPLEVBQUFBLFdBQVcsRUFBRSxLQURPO0FBRXBCUSxFQUFBQSxRQUFRLEVBQUUsS0FGVTtBQUdwQlQsRUFBQUEsUUFBUSxFQUFFLG9CQUFNLENBQUUsQ0FIRTtBQUlwQkUsRUFBQUEsV0FBVyxFQUFFLElBSk87QUFLcEJDLEVBQUFBLFFBQVEsRUFBRTtBQUxVLEM7QUFzRXhCLHFDQUFTVCxnQkFBVDtlQUVlQSxnQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMCBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge3BvbHlmaWxsfSBmcm9tICdyZWFjdC1saWZlY3ljbGVzLWNvbXBhdCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcclxuaW1wb3J0IHtGb3JtYXR0ZWRNZXNzYWdlfSBmcm9tICdyZWFjdC1pbnRsJztcclxuaW1wb3J0IFN3aXRjaCBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9zd2l0Y2gnO1xyXG5pbXBvcnQgSW5mb0hlbHBlciBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9pbmZvLWhlbHBlcic7XHJcbmltcG9ydCB7VmVydFRocmVlRG90c30gZnJvbSAnY29tcG9uZW50cy9jb21tb24vaWNvbnMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFN0eWxlZExheWVyQ29uZmlnR3JvdXBMYWJlbCA9IHN0eWxlZC5kaXZgXHJcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAke3Byb3BzID0+IHByb3BzLnRoZW1lLmxhYmVsQ29sb3J9O1xyXG4gIGxpbmUtaGVpZ2h0OiAxMnB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAtMTJweDtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICBzcGFuIHtcclxuICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRleHRDb2xvcn07XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFN0eWxlZExheWVyQ29uZmlnR3JvdXBBY3Rpb24gPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50ZXh0Q29sb3J9O1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IENvbmZpZ0dyb3VwQ29sbGFwc2libGVDb250ZW50ID0gc3R5bGVkLmRpdi5hdHRycyh7XHJcbiAgY2xhc3NOYW1lOiAnbGF5ZXItY29uZmlnLWdyb3VwX19jb250ZW50X19jb2xsYXBzaWJsZSdcclxufSlgXHJcbiAgb3ZlcmZsb3c6IHZpc2libGU7XHJcbiAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjNzIGVhc2Utb3V0O1xyXG4gIGhlaWdodDogbWF4LWNvbnRlbnQ7XHJcbiAgbWF4LWhlaWdodDogNjAwcHg7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgQ29uZmlnR3JvdXBDb2xsYXBzaWJsZUhlYWRlciA9IHN0eWxlZC5kaXYuYXR0cnMoe1xyXG4gIGNsYXNzTmFtZTogJ2xheWVyLWNvbmZpZy1ncm91cF9faGVhZGVyX19jb2xsYXBzaWJsZSdcclxufSlgXHJcbiAgb3ZlcmZsb3c6IHZpc2libGU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBtYXgtaGVpZ2h0OiAwO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFN0eWxlZExheWVyQ29uZmlnR3JvdXAgPSBzdHlsZWQuZGl2YFxyXG4gIHBhZGRpbmctbGVmdDogMThweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG5cclxuICAmLmRpc2FibGVkIHtcclxuICAgIG9wYWNpdHk6IDAuMztcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIH1cclxuICAmLmNvbGxhcHNlZCB7XHJcbiAgICAubGF5ZXItY29uZmlnLWdyb3VwX19oZWFkZXJfX2NvbGxhcHNpYmxlIHtcclxuICAgICAgb3ZlcmZsb3c6IHZpc2libGU7XHJcbiAgICAgIG1heC1oZWlnaHQ6IDYwMHB4O1xyXG4gICAgfVxyXG4gICAgLmxheWVyLWNvbmZpZy1ncm91cF9fY29udGVudCB7XHJcbiAgICAgIC5sYXllci1jb25maWctZ3JvdXBfX2NvbnRlbnRfX2NvbGxhcHNpYmxlIHtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgU3R5bGVkQ29uZmlnR3JvdXBIZWFkZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxuXHJcbiAgOmhvdmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIC5sYXllci1jb25maWctZ3JvdXBfX2xhYmVsIHtcclxuICAgICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudGV4dENvbG9ySGx9O1xyXG4gICAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudGV4dENvbG9ySGx9O1xyXG4gICAgfVxyXG5cclxuICAgIC5sYXllci1jb25maWctZ3JvdXBfX2FjdGlvbiB7XHJcbiAgICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRleHRDb2xvckhsfTtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBDb25maWdHcm91cENvbnRlbnQgPSBzdHlsZWQuZGl2YFxyXG4gICYuZGlzYWJsZWQge1xyXG4gICAgb3BhY2l0eTogMC4zO1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICAqIHtcclxuICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY2xhc3MgTGF5ZXJDb25maWdHcm91cCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcclxuICAgIGNvbGxhcHNpYmxlOiBmYWxzZSxcclxuICAgIGV4cGFuZGVkOiBmYWxzZSxcclxuICAgIG9uQ2hhbmdlOiAoKSA9PiB7fSxcclxuICAgIGRlc2NyaXB0aW9uOiBudWxsLFxyXG4gICAgZGlzYWJsZWQ6IGZhbHNlXHJcbiAgfTtcclxuXHJcbiAgc3RhdGljIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyhwcm9wcywgc3RhdGUpIHtcclxuICAgIC8vICBpbnZva2VkIGFmdGVyIGEgY29tcG9uZW50IGlzIGluc3RhbnRpYXRlZCBhcyB3ZWxsIGFzIGJlZm9yZSBpdCBpcyByZS1yZW5kZXJlZFxyXG4gICAgaWYgKHByb3BzLmV4cGFuZGVkICYmIHN0YXRlLmNvbGxhcHNlZCkge1xyXG4gICAgICByZXR1cm4ge2NvbGxhcHNlZDogZmFsc2V9O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgc3RhdGUgPSB7XHJcbiAgICBjb2xsYXBzZWQ6IHRydWVcclxuICB9O1xyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIGxhYmVsLFxyXG4gICAgICBjaGlsZHJlbixcclxuICAgICAgcHJvcGVydHksXHJcbiAgICAgIGxheWVyLFxyXG4gICAgICBvbkNoYW5nZSxcclxuICAgICAgY29sbGFwc2libGUsXHJcbiAgICAgIGRlc2NyaXB0aW9uLFxyXG4gICAgICBkaXNhYmxlZFxyXG4gICAgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgY29uc3Qge2NvbGxhcHNlZH0gPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxTdHlsZWRMYXllckNvbmZpZ0dyb3VwIGNsYXNzTmFtZT17Y2xhc3NuYW1lcygnbGF5ZXItY29uZmlnLWdyb3VwJywge2NvbGxhcHNlZCwgZGlzYWJsZWR9KX0+XHJcbiAgICAgICAgPFN0eWxlZENvbmZpZ0dyb3VwSGVhZGVyXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJsYXllci1jb25maWctZ3JvdXBfX2hlYWRlclwiXHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHtjb2xsYXBzZWQ6ICF0aGlzLnN0YXRlLmNvbGxhcHNlZH0pfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxTdHlsZWRMYXllckNvbmZpZ0dyb3VwTGFiZWwgY2xhc3NOYW1lPVwibGF5ZXItY29uZmlnLWdyb3VwX19sYWJlbFwiPlxyXG4gICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZSBpZD17bGFiZWwgfHwgJ21pc2MuZW1wdHknfSAvPlxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIHtkZXNjcmlwdGlvbiAmJiA8SW5mb0hlbHBlciBkZXNjcmlwdGlvbj17ZGVzY3JpcHRpb259IGlkPXtsYWJlbH0gLz59XHJcbiAgICAgICAgICA8L1N0eWxlZExheWVyQ29uZmlnR3JvdXBMYWJlbD5cclxuICAgICAgICAgIDxTdHlsZWRMYXllckNvbmZpZ0dyb3VwQWN0aW9uIGNsYXNzTmFtZT1cImxheWVyLWNvbmZpZy1ncm91cF9fYWN0aW9uXCI+XHJcbiAgICAgICAgICAgIHtwcm9wZXJ0eSA/IChcclxuICAgICAgICAgICAgICA8U3dpdGNoXHJcbiAgICAgICAgICAgICAgICBjaGVja2VkPXtsYXllci5jb25maWcudmlzQ29uZmlnW3Byb3BlcnR5XX1cclxuICAgICAgICAgICAgICAgIGlkPXtgJHtsYXllci5pZH0tJHtwcm9wZXJ0eX1gfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IG9uQ2hhbmdlKHtbcHJvcGVydHldOiAhbGF5ZXIuY29uZmlnLnZpc0NvbmZpZ1twcm9wZXJ0eV19KX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAge2NvbGxhcHNpYmxlID8gPFZlcnRUaHJlZURvdHMgaGVpZ2h0PVwiMThweFwiIC8+IDogbnVsbH1cclxuICAgICAgICAgIDwvU3R5bGVkTGF5ZXJDb25maWdHcm91cEFjdGlvbj5cclxuICAgICAgICA8L1N0eWxlZENvbmZpZ0dyb3VwSGVhZGVyPlxyXG4gICAgICAgIDxDb25maWdHcm91cENvbnRlbnRcclxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcygnbGF5ZXItY29uZmlnLWdyb3VwX19jb250ZW50Jywge1xyXG4gICAgICAgICAgICBkaXNhYmxlZDogcHJvcGVydHkgJiYgIWxheWVyLmNvbmZpZy52aXNDb25maWdbcHJvcGVydHldXHJcbiAgICAgICAgICB9KX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9Db25maWdHcm91cENvbnRlbnQ+XHJcbiAgICAgIDwvU3R5bGVkTGF5ZXJDb25maWdHcm91cD5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5wb2x5ZmlsbChMYXllckNvbmZpZ0dyb3VwKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheWVyQ29uZmlnR3JvdXA7XHJcbiJdfQ==