"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PureFeatureActionPanelFactory = PureFeatureActionPanelFactory;
exports["default"] = FeatureActionPanelFactory;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _actionPanel = _interopRequireWildcard(require("../common/action-panel"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactOnclickoutside = _interopRequireDefault(require("react-onclickoutside"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _icons = require("../common/icons");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  position: absolute;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var LAYOVER_OFFSET = 4;

var StyledActionsLayer = _styledComponents["default"].div(_templateObject());

PureFeatureActionPanelFactory.deps = [];

function PureFeatureActionPanelFactory() {
  var FeatureActionPanel = /*#__PURE__*/function (_PureComponent) {
    (0, _inherits2["default"])(FeatureActionPanel, _PureComponent);

    var _super = _createSuper(FeatureActionPanel);

    function FeatureActionPanel() {
      var _this;

      (0, _classCallCheck2["default"])(this, FeatureActionPanel);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleClickOutside", function (e) {
        e.preventDefault();
        e.stopPropagation();

        _this.props.onClose();
      });
      return _this;
    }

    (0, _createClass2["default"])(FeatureActionPanel, [{
      key: "render",
      value: function render() {
        var _this$props = this.props,
            className = _this$props.className,
            datasets = _this$props.datasets,
            position = _this$props.position,
            layers = _this$props.layers,
            currentFilter = _this$props.currentFilter,
            onToggleLayer = _this$props.onToggleLayer,
            onDeleteFeature = _this$props.onDeleteFeature;

        var _ref = currentFilter || {},
            _ref$layerId = _ref.layerId,
            layerId = _ref$layerId === void 0 ? [] : _ref$layerId;

        return /*#__PURE__*/_react["default"].createElement(StyledActionsLayer, {
          className: (0, _classnames["default"])('feature-action-panel', className),
          style: {
            top: "".concat(position.y + LAYOVER_OFFSET, "px"),
            left: "".concat(position.x + LAYOVER_OFFSET, "px")
          }
        }, /*#__PURE__*/_react["default"].createElement(_actionPanel["default"], null, /*#__PURE__*/_react["default"].createElement(_actionPanel.ActionPanelItem, {
          className: "editor-layers-list",
          label: "layers",
          Icon: _icons.Layers
        }, layers.map(function (layer, index) {
          return /*#__PURE__*/_react["default"].createElement(_actionPanel.ActionPanelItem, {
            key: index,
            label: layer.config.label,
            color: datasets[layer.config.dataId].color,
            isSelection: true,
            isActive: layerId.includes(layer.id),
            onClick: function onClick() {
              return onToggleLayer(layer);
            },
            className: "layer-panel-item"
          });
        })), /*#__PURE__*/_react["default"].createElement(_actionPanel.ActionPanelItem, {
          label: "delete",
          className: "delete-panel-item",
          Icon: _icons.Trash,
          onClick: onDeleteFeature
        })));
      }
    }]);
    return FeatureActionPanel;
  }(_react.PureComponent);

  (0, _defineProperty2["default"])(FeatureActionPanel, "propTypes", {
    className: _propTypes["default"].string,
    datasets: _propTypes["default"].object.isRequired,
    position: _propTypes["default"].object.isRequired,
    layers: _propTypes["default"].arrayOf(_propTypes["default"].object).isRequired,
    currentFilter: _propTypes["default"].object,
    onClose: _propTypes["default"].func.isRequired,
    onDeleteFeature: _propTypes["default"].func.isRequired
  });
  (0, _defineProperty2["default"])(FeatureActionPanel, "defaultProps", {
    position: {}
  });
  FeatureActionPanel.displayName = 'FeatureActionPanel';
  return FeatureActionPanel;
}

FeatureActionPanelFactory.deps = PureFeatureActionPanelFactory.deps;

function FeatureActionPanelFactory() {
  return (0, _reactOnclickoutside["default"])(PureFeatureActionPanelFactory());
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2VkaXRvci9mZWF0dXJlLWFjdGlvbi1wYW5lbC5qcyJdLCJuYW1lcyI6WyJMQVlPVkVSX09GRlNFVCIsIlN0eWxlZEFjdGlvbnNMYXllciIsInN0eWxlZCIsImRpdiIsIlB1cmVGZWF0dXJlQWN0aW9uUGFuZWxGYWN0b3J5IiwiZGVwcyIsIkZlYXR1cmVBY3Rpb25QYW5lbCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsInByb3BzIiwib25DbG9zZSIsImNsYXNzTmFtZSIsImRhdGFzZXRzIiwicG9zaXRpb24iLCJsYXllcnMiLCJjdXJyZW50RmlsdGVyIiwib25Ub2dnbGVMYXllciIsIm9uRGVsZXRlRmVhdHVyZSIsImxheWVySWQiLCJ0b3AiLCJ5IiwibGVmdCIsIngiLCJMYXllcnMiLCJtYXAiLCJsYXllciIsImluZGV4IiwiY29uZmlnIiwibGFiZWwiLCJkYXRhSWQiLCJjb2xvciIsImluY2x1ZGVzIiwiaWQiLCJUcmFzaCIsIlB1cmVDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwiYXJyYXlPZiIsImZ1bmMiLCJkaXNwbGF5TmFtZSIsIkZlYXR1cmVBY3Rpb25QYW5lbEZhY3RvcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxjQUFjLEdBQUcsQ0FBdkI7O0FBRUEsSUFBTUMsa0JBQWtCLEdBQUdDLDZCQUFPQyxHQUFWLG1CQUF4Qjs7QUFJQUMsNkJBQTZCLENBQUNDLElBQTlCLEdBQXFDLEVBQXJDOztBQUVPLFNBQVNELDZCQUFULEdBQXlDO0FBQUEsTUFDeENFLGtCQUR3QztBQUFBOztBQUFBOztBQUFBO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsNkdB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QUU7QUFEVSxHQVpzQjtBQXNFOUNSLEVBQUFBLGtCQUFrQixDQUFDb0MsV0FBbkIsR0FBaUMsb0JBQWpDO0FBRUEsU0FBT3BDLGtCQUFQO0FBQ0Q7O0FBRURxQyx5QkFBeUIsQ0FBQ3RDLElBQTFCLEdBQWlDRCw2QkFBNkIsQ0FBQ0MsSUFBL0Q7O0FBRWUsU0FBU3NDLHlCQUFULEdBQXFDO0FBQ2xELFNBQU8scUNBQWV2Qyw2QkFBNkIsRUFBNUMsQ0FBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0LCB7UHVyZUNvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQWN0aW9uUGFuZWwsIHtBY3Rpb25QYW5lbEl0ZW19IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL2FjdGlvbi1wYW5lbCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgb25DbGlja091dHNpZGUgZnJvbSAncmVhY3Qtb25jbGlja291dHNpZGUnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcclxuaW1wb3J0IHtUcmFzaCwgTGF5ZXJzfSBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9pY29ucyc7XHJcblxyXG5jb25zdCBMQVlPVkVSX09GRlNFVCA9IDQ7XHJcblxyXG5jb25zdCBTdHlsZWRBY3Rpb25zTGF5ZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuYDtcclxuXHJcblB1cmVGZWF0dXJlQWN0aW9uUGFuZWxGYWN0b3J5LmRlcHMgPSBbXTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBQdXJlRmVhdHVyZUFjdGlvblBhbmVsRmFjdG9yeSgpIHtcclxuICBjbGFzcyBGZWF0dXJlQWN0aW9uUGFuZWwgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcclxuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XHJcbiAgICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgZGF0YXNldHM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcclxuICAgICAgcG9zaXRpb246IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcclxuICAgICAgbGF5ZXJzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KS5pc1JlcXVpcmVkLFxyXG4gICAgICBjdXJyZW50RmlsdGVyOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gICAgICBvbkNsb3NlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gICAgICBvbkRlbGV0ZUZlYXR1cmU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcclxuICAgIH07XHJcblxyXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcclxuICAgICAgcG9zaXRpb246IHt9XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIFVzZWQgYnkgb25DbGlja091dHNpZGVcclxuICAgIGhhbmRsZUNsaWNrT3V0c2lkZSA9IGUgPT4ge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgIHRoaXMucHJvcHMub25DbG9zZSgpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgIGNvbnN0IHtcclxuICAgICAgICBjbGFzc05hbWUsXHJcbiAgICAgICAgZGF0YXNldHMsXHJcbiAgICAgICAgcG9zaXRpb24sXHJcbiAgICAgICAgbGF5ZXJzLFxyXG4gICAgICAgIGN1cnJlbnRGaWx0ZXIsXHJcbiAgICAgICAgb25Ub2dnbGVMYXllcixcclxuICAgICAgICBvbkRlbGV0ZUZlYXR1cmVcclxuICAgICAgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICBjb25zdCB7bGF5ZXJJZCA9IFtdfSA9IGN1cnJlbnRGaWx0ZXIgfHwge307XHJcblxyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxTdHlsZWRBY3Rpb25zTGF5ZXJcclxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcygnZmVhdHVyZS1hY3Rpb24tcGFuZWwnLCBjbGFzc05hbWUpfVxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgdG9wOiBgJHtwb3NpdGlvbi55ICsgTEFZT1ZFUl9PRkZTRVR9cHhgLFxyXG4gICAgICAgICAgICBsZWZ0OiBgJHtwb3NpdGlvbi54ICsgTEFZT1ZFUl9PRkZTRVR9cHhgXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxBY3Rpb25QYW5lbD5cclxuICAgICAgICAgICAgPEFjdGlvblBhbmVsSXRlbSBjbGFzc05hbWU9XCJlZGl0b3ItbGF5ZXJzLWxpc3RcIiBsYWJlbD1cImxheWVyc1wiIEljb249e0xheWVyc30+XHJcbiAgICAgICAgICAgICAge2xheWVycy5tYXAoKGxheWVyLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPEFjdGlvblBhbmVsSXRlbVxyXG4gICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICBsYWJlbD17bGF5ZXIuY29uZmlnLmxhYmVsfVxyXG4gICAgICAgICAgICAgICAgICBjb2xvcj17ZGF0YXNldHNbbGF5ZXIuY29uZmlnLmRhdGFJZF0uY29sb3J9XHJcbiAgICAgICAgICAgICAgICAgIGlzU2VsZWN0aW9uPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICBpc0FjdGl2ZT17bGF5ZXJJZC5pbmNsdWRlcyhsYXllci5pZCl9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uVG9nZ2xlTGF5ZXIobGF5ZXIpfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsYXllci1wYW5lbC1pdGVtXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvQWN0aW9uUGFuZWxJdGVtPlxyXG4gICAgICAgICAgICA8QWN0aW9uUGFuZWxJdGVtXHJcbiAgICAgICAgICAgICAgbGFiZWw9XCJkZWxldGVcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRlbGV0ZS1wYW5lbC1pdGVtXCJcclxuICAgICAgICAgICAgICBJY29uPXtUcmFzaH1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXtvbkRlbGV0ZUZlYXR1cmV9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0FjdGlvblBhbmVsPlxyXG4gICAgICAgIDwvU3R5bGVkQWN0aW9uc0xheWVyPlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgRmVhdHVyZUFjdGlvblBhbmVsLmRpc3BsYXlOYW1lID0gJ0ZlYXR1cmVBY3Rpb25QYW5lbCc7XHJcblxyXG4gIHJldHVybiBGZWF0dXJlQWN0aW9uUGFuZWw7XHJcbn1cclxuXHJcbkZlYXR1cmVBY3Rpb25QYW5lbEZhY3RvcnkuZGVwcyA9IFB1cmVGZWF0dXJlQWN0aW9uUGFuZWxGYWN0b3J5LmRlcHM7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGZWF0dXJlQWN0aW9uUGFuZWxGYWN0b3J5KCkge1xyXG4gIHJldHVybiBvbkNsaWNrT3V0c2lkZShQdXJlRmVhdHVyZUFjdGlvblBhbmVsRmFjdG9yeSgpKTtcclxufVxyXG4iXX0=