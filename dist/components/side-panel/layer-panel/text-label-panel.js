"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = TextLabelPanelFactory;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactIntl = require("react-intl");

var _styledComponents = require("../../common/styled-components");

var _icons = require("../../common/icons");

var _colorSelector = _interopRequireDefault(require("./color-selector"));

var _fieldSelector = _interopRequireDefault(require("../../common/field-selector"));

var _itemSelector = _interopRequireDefault(require("../../common/item-selector/item-selector"));

var _layerConfigGroup = _interopRequireWildcard(require("./layer-config-group"));

var _rangeSlider = _interopRequireDefault(require("../../common/range-slider"));

var _layerFactory = require("../../../layers/layer-factory");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

TextLabelPanelFactory.deps = [_rangeSlider["default"]];

function TextLabelPanelFactory(RangeSlider) {
  var TextLabelPanel = /*#__PURE__*/function (_Component) {
    (0, _inherits2["default"])(TextLabelPanel, _Component);

    var _super = _createSuper(TextLabelPanel);

    function TextLabelPanel() {
      (0, _classCallCheck2["default"])(this, TextLabelPanel);
      return _super.apply(this, arguments);
    }

    (0, _createClass2["default"])(TextLabelPanel, [{
      key: "render",
      value: function render() {
        var _this$props = this.props,
            updateLayerTextLabel = _this$props.updateLayerTextLabel,
            textLabel = _this$props.textLabel,
            fields = _this$props.fields;
        var currentFields = textLabel.map(function (tl) {
          return tl.field && tl.field.name;
        }).filter(function (d) {
          return d;
        });
        return /*#__PURE__*/_react["default"].createElement(_layerConfigGroup["default"], {
          label: 'panel.text.label',
          collapsible: true
        }, /*#__PURE__*/_react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleHeader, null, /*#__PURE__*/_react["default"].createElement(_fieldSelector["default"], {
          fields: fields,
          value: currentFields,
          onSelect: function onSelect(selected) {
            return updateLayerTextLabel('all', 'fields', selected);
          },
          multiSelect: true
        })), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, textLabel.map(function (tl, idx) {
          return /*#__PURE__*/_react["default"].createElement("div", {
            key: tl.field ? tl.field.name : "null-".concat(idx)
          }, /*#__PURE__*/_react["default"].createElement(_styledComponents.PanelLabel, null, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
            id: 'panel.text.labelWithId',
            values: {
              labelId: idx + 1
            }
          })), /*#__PURE__*/_react["default"].createElement(_styledComponents.SidePanelSection, null, /*#__PURE__*/_react["default"].createElement(_fieldSelector["default"], {
            fields: fields,
            value: tl.field && tl.field.name || 'placeholder.selectField',
            placeholder: 'placeholder.empty',
            onSelect: function onSelect(v) {
              return updateLayerTextLabel(idx, 'field', v);
            },
            erasable: true
          })), /*#__PURE__*/_react["default"].createElement(_styledComponents.SidePanelSection, null, /*#__PURE__*/_react["default"].createElement(_styledComponents.PanelLabel, null, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
            id: "panel.text.fontSize"
          })), /*#__PURE__*/_react["default"].createElement(RangeSlider, (0, _extends2["default"])({}, _layerFactory.LAYER_TEXT_CONFIGS.fontSize, {
            value1: tl.size,
            isRange: false,
            onChange: function onChange(v) {
              return updateLayerTextLabel(idx, 'size', v[1]);
            }
          }))), /*#__PURE__*/_react["default"].createElement(_styledComponents.SidePanelSection, null, /*#__PURE__*/_react["default"].createElement(_styledComponents.PanelLabel, null, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
            id: "panel.text.fontColor"
          })), /*#__PURE__*/_react["default"].createElement(_colorSelector["default"], {
            colorSets: [{
              selectedColor: tl.color,
              setColor: function setColor(v) {
                return updateLayerTextLabel(idx, 'color', v);
              }
            }]
          })), /*#__PURE__*/_react["default"].createElement(_styledComponents.SidePanelSection, null, /*#__PURE__*/_react["default"].createElement(_styledComponents.SpaceBetweenFlexbox, null, /*#__PURE__*/_react["default"].createElement(_styledComponents.SBFlexboxItem, null, /*#__PURE__*/_react["default"].createElement(_styledComponents.PanelLabel, null, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
            id: "panel.text.textAnchor"
          })), /*#__PURE__*/_react["default"].createElement(_itemSelector["default"], (0, _extends2["default"])({}, _layerFactory.LAYER_TEXT_CONFIGS.textAnchor, {
            selectedItems: tl.anchor,
            onChange: function onChange(val) {
              return updateLayerTextLabel(idx, 'anchor', val);
            }
          }))), /*#__PURE__*/_react["default"].createElement(_styledComponents.SBFlexboxItem, null, /*#__PURE__*/_react["default"].createElement(_styledComponents.PanelLabel, null, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
            id: "panel.text.alignment"
          })), /*#__PURE__*/_react["default"].createElement(_itemSelector["default"], (0, _extends2["default"])({}, _layerFactory.LAYER_TEXT_CONFIGS.textAlignment, {
            selectedItems: tl.alignment,
            onChange: function onChange(val) {
              return updateLayerTextLabel(idx, 'alignment', val);
            }
          }))))));
        }), /*#__PURE__*/_react["default"].createElement(_styledComponents.SidePanelSection, null, /*#__PURE__*/_react["default"].createElement(_styledComponents.Button, {
          link: true,
          onClick: function onClick(val) {
            return updateLayerTextLabel(textLabel.length);
          }
        }, /*#__PURE__*/_react["default"].createElement(_icons.Add, {
          height: "12px"
        }), /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
          id: "panel.text.addMoreLabel"
        })))));
      }
    }]);
    return TextLabelPanel;
  }(_react.Component);

  (0, _defineProperty2["default"])(TextLabelPanel, "propTypes", {
    fields: _propTypes["default"].arrayOf(_propTypes["default"].object),
    textLabel: _propTypes["default"].arrayOf(_propTypes["default"].object),
    updateLayerTextLabel: _propTypes["default"].func.isRequired
  });
  return TextLabelPanel;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NpZGUtcGFuZWwvbGF5ZXItcGFuZWwvdGV4dC1sYWJlbC1wYW5lbC5qcyJdLCJuYW1lcyI6WyJUZXh0TGFiZWxQYW5lbEZhY3RvcnkiLCJkZXBzIiwiUmFuZ2VTbGlkZXJGYWN0b3J5IiwiUmFuZ2VTbGlkZXIiLCJUZXh0TGFiZWxQYW5lbCIsInByb3BzIiwidXBkYXRlTGF5ZXJUZXh0TGFiZWwiLCJ0ZXh0TGFiZWwiLCJmaWVsZHMiLCJjdXJyZW50RmllbGRzIiwibWFwIiwidGwiLCJmaWVsZCIsIm5hbWUiLCJmaWx0ZXIiLCJkIiwic2VsZWN0ZWQiLCJpZHgiLCJsYWJlbElkIiwidiIsIkxBWUVSX1RFWFRfQ09ORklHUyIsImZvbnRTaXplIiwic2l6ZSIsInNlbGVjdGVkQ29sb3IiLCJjb2xvciIsInNldENvbG9yIiwidGV4dEFuY2hvciIsImFuY2hvciIsInZhbCIsInRleHRBbGlnbm1lbnQiLCJhbGlnbm1lbnQiLCJsZW5ndGgiLCJDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJhcnJheU9mIiwib2JqZWN0IiwiZnVuYyIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBT0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBSUE7O0FBRUE7Ozs7OztBQUVBQSxxQkFBcUIsQ0FBQ0MsSUFBdEIsR0FBNkIsQ0FBQ0MsdUJBQUQsQ0FBN0I7O0FBRWUsU0FBU0YscUJBQVQsQ0FBK0JHLFdBQS9CLEVBQTRDO0FBQUEsTUFDbkRDLGNBRG1EO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLCtCQVE5QztBQUFBLDBCQUMyQyxLQUFLQyxLQURoRDtBQUFBLFlBQ0FDLG9CQURBLGVBQ0FBLG9CQURBO0FBQUEsWUFDc0JDLFNBRHRCLGVBQ3NCQSxTQUR0QjtBQUFBLFlBQ2lDQyxNQURqQyxl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QVYsQ0FBa0JELHNCQUFVRSxNQUE1QixDQURTO0FBRWpCNUIsSUFBQUEsU0FBUyxFQUFFMEIsc0JBQVVDLE9BQVYsQ0FBa0JELHNCQUFVRSxNQUE1QixDQUZNO0FBR2pCN0IsSUFBQUEsb0JBQW9CLEVBQUUyQixzQkFBVUcsSUFBVixDQUFlQztBQUhwQixHQUZvQztBQWtHekQsU0FBT2pDLGNBQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMCBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQge0Zvcm1hdHRlZE1lc3NhZ2V9IGZyb20gJ3JlYWN0LWludGwnO1xyXG5cclxuaW1wb3J0IHtcclxuICBCdXR0b24sXHJcbiAgUGFuZWxMYWJlbCxcclxuICBTQkZsZXhib3hJdGVtLFxyXG4gIFNpZGVQYW5lbFNlY3Rpb24sXHJcbiAgU3BhY2VCZXR3ZWVuRmxleGJveFxyXG59IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHtBZGR9IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL2ljb25zJztcclxuaW1wb3J0IENvbG9yU2VsZWN0b3IgZnJvbSAnLi9jb2xvci1zZWxlY3Rvcic7XHJcbmltcG9ydCBGaWVsZFNlbGVjdG9yIGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL2ZpZWxkLXNlbGVjdG9yJztcclxuaW1wb3J0IEl0ZW1TZWxlY3RvciBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9pdGVtLXNlbGVjdG9yL2l0ZW0tc2VsZWN0b3InO1xyXG5pbXBvcnQgTGF5ZXJDb25maWdHcm91cCwge1xyXG4gIENvbmZpZ0dyb3VwQ29sbGFwc2libGVDb250ZW50LFxyXG4gIENvbmZpZ0dyb3VwQ29sbGFwc2libGVIZWFkZXJcclxufSBmcm9tICcuL2xheWVyLWNvbmZpZy1ncm91cCc7XHJcbmltcG9ydCBSYW5nZVNsaWRlckZhY3RvcnkgZnJvbSAnY29tcG9uZW50cy9jb21tb24vcmFuZ2Utc2xpZGVyJztcclxuXHJcbmltcG9ydCB7TEFZRVJfVEVYVF9DT05GSUdTfSBmcm9tICdsYXllcnMvbGF5ZXItZmFjdG9yeSc7XHJcblxyXG5UZXh0TGFiZWxQYW5lbEZhY3RvcnkuZGVwcyA9IFtSYW5nZVNsaWRlckZhY3RvcnldO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGV4dExhYmVsUGFuZWxGYWN0b3J5KFJhbmdlU2xpZGVyKSB7XHJcbiAgY2xhc3MgVGV4dExhYmVsUGFuZWwgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcclxuICAgICAgZmllbGRzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KSxcclxuICAgICAgdGV4dExhYmVsOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KSxcclxuICAgICAgdXBkYXRlTGF5ZXJUZXh0TGFiZWw6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcclxuICAgIH07XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICBjb25zdCB7dXBkYXRlTGF5ZXJUZXh0TGFiZWwsIHRleHRMYWJlbCwgZmllbGRzfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgIGNvbnN0IGN1cnJlbnRGaWVsZHMgPSB0ZXh0TGFiZWwubWFwKHRsID0+IHRsLmZpZWxkICYmIHRsLmZpZWxkLm5hbWUpLmZpbHRlcihkID0+IGQpO1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxMYXllckNvbmZpZ0dyb3VwIGxhYmVsPXsncGFuZWwudGV4dC5sYWJlbCd9IGNvbGxhcHNpYmxlPlxyXG4gICAgICAgICAgPENvbmZpZ0dyb3VwQ29sbGFwc2libGVIZWFkZXI+XHJcbiAgICAgICAgICAgIDxGaWVsZFNlbGVjdG9yXHJcbiAgICAgICAgICAgICAgZmllbGRzPXtmaWVsZHN9XHJcbiAgICAgICAgICAgICAgdmFsdWU9e2N1cnJlbnRGaWVsZHN9XHJcbiAgICAgICAgICAgICAgb25TZWxlY3Q9e3NlbGVjdGVkID0+IHVwZGF0ZUxheWVyVGV4dExhYmVsKCdhbGwnLCAnZmllbGRzJywgc2VsZWN0ZWQpfVxyXG4gICAgICAgICAgICAgIG11bHRpU2VsZWN0XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0NvbmZpZ0dyb3VwQ29sbGFwc2libGVIZWFkZXI+XHJcbiAgICAgICAgICA8Q29uZmlnR3JvdXBDb2xsYXBzaWJsZUNvbnRlbnQ+XHJcbiAgICAgICAgICAgIHt0ZXh0TGFiZWwubWFwKCh0bCwgaWR4KSA9PiAoXHJcbiAgICAgICAgICAgICAgPGRpdiBrZXk9e3RsLmZpZWxkID8gdGwuZmllbGQubmFtZSA6IGBudWxsLSR7aWR4fWB9PlxyXG4gICAgICAgICAgICAgICAgPFBhbmVsTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlIGlkPXsncGFuZWwudGV4dC5sYWJlbFdpdGhJZCd9IHZhbHVlcz17e2xhYmVsSWQ6IGlkeCArIDF9fSAvPlxyXG4gICAgICAgICAgICAgICAgPC9QYW5lbExhYmVsPlxyXG4gICAgICAgICAgICAgICAgPFNpZGVQYW5lbFNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgIDxGaWVsZFNlbGVjdG9yXHJcbiAgICAgICAgICAgICAgICAgICAgZmllbGRzPXtmaWVsZHN9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9eyh0bC5maWVsZCAmJiB0bC5maWVsZC5uYW1lKSB8fCAncGxhY2Vob2xkZXIuc2VsZWN0RmllbGQnfVxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXsncGxhY2Vob2xkZXIuZW1wdHknfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uU2VsZWN0PXt2ID0+IHVwZGF0ZUxheWVyVGV4dExhYmVsKGlkeCwgJ2ZpZWxkJywgdil9XHJcbiAgICAgICAgICAgICAgICAgICAgZXJhc2FibGVcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvU2lkZVBhbmVsU2VjdGlvbj5cclxuICAgICAgICAgICAgICAgIDxTaWRlUGFuZWxTZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICA8UGFuZWxMYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZSBpZD1cInBhbmVsLnRleHQuZm9udFNpemVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8L1BhbmVsTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxSYW5nZVNsaWRlclxyXG4gICAgICAgICAgICAgICAgICAgIHsuLi5MQVlFUl9URVhUX0NPTkZJR1MuZm9udFNpemV9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUxPXt0bC5zaXplfVxyXG4gICAgICAgICAgICAgICAgICAgIGlzUmFuZ2U9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt2ID0+IHVwZGF0ZUxheWVyVGV4dExhYmVsKGlkeCwgJ3NpemUnLCB2WzFdKX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvU2lkZVBhbmVsU2VjdGlvbj5cclxuICAgICAgICAgICAgICAgIDxTaWRlUGFuZWxTZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICA8UGFuZWxMYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZSBpZD1cInBhbmVsLnRleHQuZm9udENvbG9yXCIgLz5cclxuICAgICAgICAgICAgICAgICAgPC9QYW5lbExhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8Q29sb3JTZWxlY3RvclxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yU2V0cz17W1xyXG4gICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZENvbG9yOiB0bC5jb2xvcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q29sb3I6IHYgPT4gdXBkYXRlTGF5ZXJUZXh0TGFiZWwoaWR4LCAnY29sb3InLCB2KVxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L1NpZGVQYW5lbFNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICA8U2lkZVBhbmVsU2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgPFNwYWNlQmV0d2VlbkZsZXhib3g+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNCRmxleGJveEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8UGFuZWxMYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2UgaWQ9XCJwYW5lbC50ZXh0LnRleHRBbmNob3JcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9QYW5lbExhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEl0ZW1TZWxlY3RvclxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Li4uTEFZRVJfVEVYVF9DT05GSUdTLnRleHRBbmNob3J9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkSXRlbXM9e3RsLmFuY2hvcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3ZhbCA9PiB1cGRhdGVMYXllclRleHRMYWJlbChpZHgsICdhbmNob3InLCB2YWwpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L1NCRmxleGJveEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNCRmxleGJveEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8UGFuZWxMYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2UgaWQ9XCJwYW5lbC50ZXh0LmFsaWdubWVudFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L1BhbmVsTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8SXRlbVNlbGVjdG9yXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5MQVlFUl9URVhUX0NPTkZJR1MudGV4dEFsaWdubWVudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRJdGVtcz17dGwuYWxpZ25tZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dmFsID0+IHVwZGF0ZUxheWVyVGV4dExhYmVsKGlkeCwgJ2FsaWdubWVudCcsIHZhbCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvU0JGbGV4Ym94SXRlbT5cclxuICAgICAgICAgICAgICAgICAgPC9TcGFjZUJldHdlZW5GbGV4Ym94PlxyXG4gICAgICAgICAgICAgICAgPC9TaWRlUGFuZWxTZWN0aW9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPFNpZGVQYW5lbFNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvbiBsaW5rIG9uQ2xpY2s9e3ZhbCA9PiB1cGRhdGVMYXllclRleHRMYWJlbCh0ZXh0TGFiZWwubGVuZ3RoKX0+XHJcbiAgICAgICAgICAgICAgICA8QWRkIGhlaWdodD1cIjEycHhcIiAvPlxyXG4gICAgICAgICAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2UgaWQ9XCJwYW5lbC50ZXh0LmFkZE1vcmVMYWJlbFwiIC8+XHJcbiAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvU2lkZVBhbmVsU2VjdGlvbj5cclxuICAgICAgICAgIDwvQ29uZmlnR3JvdXBDb2xsYXBzaWJsZUNvbnRlbnQ+XHJcbiAgICAgICAgPC9MYXllckNvbmZpZ0dyb3VwPlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIFRleHRMYWJlbFBhbmVsO1xyXG59XHJcbiJdfQ==