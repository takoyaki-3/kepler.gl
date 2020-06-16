"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _dropdownList = require("../../common/item-selector/dropdown-list");

var _itemSelector = _interopRequireDefault(require("../../common/item-selector/item-selector"));

var _defaultSettings = require("../../../constants/default-settings");

var _styledComponents2 = require("../../common/styled-components");

var _reactIntl = require("react-intl");

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  // override item-selector dropdown padding\n  .item-selector .item-selector__dropdown {\n    padding: 4px 10px 4px 2px;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  ", ";\n  background-color: ", ";\n  border-top: 1px solid ", ";\n  display: flex;\n  flex-wrap: wrap;\n  align-items: flex-start;\n  padding: 12px 0 0 12px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  &.list {\n    display: flex;\n    align-items: center;\n\n    .layer-type-selector__item__icon {\n      color: ", ";\n      background-size: ", "px ", "px;\n      margin-right: 12px;\n    }\n  }\n\n  .layer-type-selector__item__icon {\n    color: ", ";\n    display: flex;\n    background-image: url(", ");\n    background-size: ", "px ", "px;\n  }\n\n  .layer-type-selector__item__label {\n    text-transform: capitalize;\n    font-size: 12px;\n    text-align: center;\n    color: ", ";\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  padding-bottom: 12px;\n  padding-right: 12px;\n\n  &.selected {\n    .layer-type-selector__item__icon {\n      border: 1px solid #caf2f4;\n    }\n  }\n\n  :hover,\n  &.selected {\n    cursor: pointer;\n    .layer-type-selector__item__icon {\n      color: ", ";\n    }\n\n    .layer-type-selector__item__label {\n      color: ", ";\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var ITEM_SIZE = {
  large: 60,
  small: 28
};

var StyledDropdownListItem = _styledComponents["default"].div(_templateObject(), function (props) {
  return props.theme.activeColor;
}, function (props) {
  return props.theme.textColor;
});

var StyledListItem = _styledComponents["default"].div(_templateObject2(), function (props) {
  return props.theme.activeColor;
}, ITEM_SIZE.small, ITEM_SIZE.small, function (props) {
  return props.theme.labelColor;
}, "".concat(_defaultSettings.CLOUDFRONT, "/kepler.gl-layer-icon-bg.png"), ITEM_SIZE.large, ITEM_SIZE.large, function (props) {
  return props.theme.labelColor;
});

var DropdownListWrapper = _styledComponents["default"].div(_templateObject3(), function (props) {
  return props.theme.dropdownList;
}, function (props) {
  return props.theme.dropdownListBgd;
}, function (props) {
  return props.theme.dropdownListBorderTop;
});

var LayerTypeListItem = function LayerTypeListItem(_ref) {
  var value = _ref.value,
      isTile = _ref.isTile;
  return /*#__PURE__*/_react["default"].createElement(StyledListItem, {
    className: (0, _classnames["default"])('layer-type-selector__item__inner', {
      list: !isTile
    })
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "layer-type-selector__item__icon"
  }, /*#__PURE__*/_react["default"].createElement(value.icon, {
    height: "".concat(isTile ? ITEM_SIZE.large : ITEM_SIZE.small, "px")
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "layer-type-selector__item__label"
  }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: "layer.type.".concat(value.label.toLowerCase()),
    defaultMessage: value.label
  })));
};

var LayerTypeDropdownList = function LayerTypeDropdownList(props) {
  return /*#__PURE__*/_react["default"].createElement(DropdownListWrapper, {
    className: _dropdownList.classList.list
  }, props.options.map(function (value, i) {
    return /*#__PURE__*/_react["default"].createElement(StyledDropdownListItem, {
      className: (0, _classnames["default"])('layer-type-selector__item', {
        selected: props.selectedItems.find(function (it) {
          return it.id === value.id;
        }),
        hover: props.selectionIndex === i
      }),
      key: "".concat(value.id, "_").concat(i),
      onMouseDown: function onMouseDown(e) {
        e.preventDefault();
        props.onOptionSelected(value, e);
      },
      onClick: function onClick(e) {
        e.preventDefault();
        props.onOptionSelected(value, e);
      }
    }, /*#__PURE__*/_react["default"].createElement(props.customListItemComponent, {
      value: value,
      isTile: true
    }));
  }));
};

var propTypes = {
  layer: _propTypes["default"].object.isRequired,
  onSelect: _propTypes["default"].func.isRequired
};

var StyledLayerTypeSelector = _styledComponents["default"].div(_templateObject4());

var LayerTypeSelector = function LayerTypeSelector(_ref2) {
  var layer = _ref2.layer,
      layerTypeOptions = _ref2.layerTypeOptions,
      onSelect = _ref2.onSelect;
  return /*#__PURE__*/_react["default"].createElement(_styledComponents2.SidePanelSection, null, /*#__PURE__*/_react["default"].createElement(StyledLayerTypeSelector, {
    className: "layer-config__type"
  }, /*#__PURE__*/_react["default"].createElement(_itemSelector["default"], {
    selectedItems: layerTypeOptions.find(function (op) {
      return op.id === layer.type;
    }),
    options: layerTypeOptions,
    multiSelect: false,
    placeholder: "placeholder.selectType",
    onChange: onSelect,
    getOptionValue: function getOptionValue(op) {
      return op.id;
    },
    filterOption: "label",
    displayOption: function displayOption(op) {
      return op.label;
    },
    DropDownLineItemRenderComponent: LayerTypeListItem,
    DropDownRenderComponent: LayerTypeDropdownList
  })));
};

LayerTypeSelector.propTypes = propTypes;
var _default = LayerTypeSelector;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NpZGUtcGFuZWwvbGF5ZXItcGFuZWwvbGF5ZXItdHlwZS1zZWxlY3Rvci5qcyJdLCJuYW1lcyI6WyJJVEVNX1NJWkUiLCJsYXJnZSIsInNtYWxsIiwiU3R5bGVkRHJvcGRvd25MaXN0SXRlbSIsInN0eWxlZCIsImRpdiIsInByb3BzIiwidGhlbWUiLCJhY3RpdmVDb2xvciIsInRleHRDb2xvciIsIlN0eWxlZExpc3RJdGVtIiwibGFiZWxDb2xvciIsIkNMT1VERlJPTlQiLCJEcm9wZG93bkxpc3RXcmFwcGVyIiwiZHJvcGRvd25MaXN0IiwiZHJvcGRvd25MaXN0QmdkIiwiZHJvcGRvd25MaXN0Qm9yZGVyVG9wIiwiTGF5ZXJUeXBlTGlzdEl0ZW0iLCJ2YWx1ZSIsImlzVGlsZSIsImxpc3QiLCJsYWJlbCIsInRvTG93ZXJDYXNlIiwiTGF5ZXJUeXBlRHJvcGRvd25MaXN0IiwiY2xhc3NMaXN0Iiwib3B0aW9ucyIsIm1hcCIsImkiLCJzZWxlY3RlZCIsInNlbGVjdGVkSXRlbXMiLCJmaW5kIiwiaXQiLCJpZCIsImhvdmVyIiwic2VsZWN0aW9uSW5kZXgiLCJlIiwicHJldmVudERlZmF1bHQiLCJvbk9wdGlvblNlbGVjdGVkIiwicHJvcFR5cGVzIiwibGF5ZXIiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwib25TZWxlY3QiLCJmdW5jIiwiU3R5bGVkTGF5ZXJUeXBlU2VsZWN0b3IiLCJMYXllclR5cGVTZWxlY3RvciIsImxheWVyVHlwZU9wdGlvbnMiLCJvcCIsInR5cGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxTQUFTLEdBQUc7QUFDaEJDLEVBQUFBLEtBQUssRUFBRSxFQURTO0FBRWhCQyxFQUFB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eEIsQ0FEakI7QUFFRSxJQUFBLE9BQU8sRUFBRUYsZ0JBRlg7QUFHRSxJQUFBLFdBQVcsRUFBRSxLQUhmO0FBSUUsSUFBQSxXQUFXLEVBQUMsd0JBSmQ7QUFLRSxJQUFBLFFBQVEsRUFBRUosUUFMWjtBQU1FLElBQUEsY0FBYyxFQUFFLHdCQUFBSyxFQUFFO0FBQUEsYUFBSUEsRUFBRSxDQUFDaEIsRUFBUDtBQUFBLEtBTnBCO0FBT0UsSUFBQSxZQUFZLEVBQUMsT0FQZjtBQVFFLElBQUEsYUFBYSxFQUFFLHVCQUFBZ0IsRUFBRTtBQUFBLGFBQUlBLEVBQUUsQ0FBQzNCLEtBQVA7QUFBQSxLQVJuQjtBQVNFLElBQUEsK0JBQStCLEVBQUVKLGlCQVRuQztBQVVFLElBQUEsdUJBQXVCLEVBQUVNO0FBVjNCLElBREYsQ0FERixDQUR3QjtBQUFBLENBQTFCOztBQW1CQXVCLGlCQUFpQixDQUFDUixTQUFsQixHQUE4QkEsU0FBOUI7ZUFFZVEsaUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5pbXBvcnQge2NsYXNzTGlzdH0gZnJvbSAnY29tcG9uZW50cy9jb21tb24vaXRlbS1zZWxlY3Rvci9kcm9wZG93bi1saXN0JztcclxuaW1wb3J0IEl0ZW1TZWxlY3RvciBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9pdGVtLXNlbGVjdG9yL2l0ZW0tc2VsZWN0b3InO1xyXG5pbXBvcnQge0NMT1VERlJPTlR9IGZyb20gJ2NvbnN0YW50cy9kZWZhdWx0LXNldHRpbmdzJztcclxuXHJcbmltcG9ydCB7U2lkZVBhbmVsU2VjdGlvbn0gZnJvbSAnY29tcG9uZW50cy9jb21tb24vc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQge0Zvcm1hdHRlZE1lc3NhZ2V9IGZyb20gJ3JlYWN0LWludGwnO1xyXG5cclxuY29uc3QgSVRFTV9TSVpFID0ge1xyXG4gIGxhcmdlOiA2MCxcclxuICBzbWFsbDogMjhcclxufTtcclxuXHJcbmNvbnN0IFN0eWxlZERyb3Bkb3duTGlzdEl0ZW0gPSBzdHlsZWQuZGl2YFxyXG4gIHBhZGRpbmctYm90dG9tOiAxMnB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEycHg7XHJcblxyXG4gICYuc2VsZWN0ZWQge1xyXG4gICAgLmxheWVyLXR5cGUtc2VsZWN0b3JfX2l0ZW1fX2ljb24ge1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2FmMmY0O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgOmhvdmVyLFxyXG4gICYuc2VsZWN0ZWQge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgLmxheWVyLXR5cGUtc2VsZWN0b3JfX2l0ZW1fX2ljb24ge1xyXG4gICAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5hY3RpdmVDb2xvcn07XHJcbiAgICB9XHJcblxyXG4gICAgLmxheWVyLXR5cGUtc2VsZWN0b3JfX2l0ZW1fX2xhYmVsIHtcclxuICAgICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudGV4dENvbG9yfTtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBTdHlsZWRMaXN0SXRlbSA9IHN0eWxlZC5kaXZgXHJcbiAgJi5saXN0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgIC5sYXllci10eXBlLXNlbGVjdG9yX19pdGVtX19pY29uIHtcclxuICAgICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYWN0aXZlQ29sb3J9O1xyXG4gICAgICBiYWNrZ3JvdW5kLXNpemU6ICR7SVRFTV9TSVpFLnNtYWxsfXB4ICR7SVRFTV9TSVpFLnNtYWxsfXB4O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAubGF5ZXItdHlwZS1zZWxlY3Rvcl9faXRlbV9faWNvbiB7XHJcbiAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5sYWJlbENvbG9yfTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtgJHtDTE9VREZST05UfS9rZXBsZXIuZ2wtbGF5ZXItaWNvbi1iZy5wbmdgfSk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6ICR7SVRFTV9TSVpFLmxhcmdlfXB4ICR7SVRFTV9TSVpFLmxhcmdlfXB4O1xyXG4gIH1cclxuXHJcbiAgLmxheWVyLXR5cGUtc2VsZWN0b3JfX2l0ZW1fX2xhYmVsIHtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUubGFiZWxDb2xvcn07XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgRHJvcGRvd25MaXN0V3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5kcm9wZG93bkxpc3R9O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuZHJvcGRvd25MaXN0QmdkfTtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5kcm9wZG93bkxpc3RCb3JkZXJUb3B9O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gIHBhZGRpbmc6IDEycHggMCAwIDEycHg7XHJcbmA7XHJcblxyXG5jb25zdCBMYXllclR5cGVMaXN0SXRlbSA9ICh7dmFsdWUsIGlzVGlsZX0pID0+IChcclxuICA8U3R5bGVkTGlzdEl0ZW0gY2xhc3NOYW1lPXtjbGFzc05hbWVzKCdsYXllci10eXBlLXNlbGVjdG9yX19pdGVtX19pbm5lcicsIHtsaXN0OiAhaXNUaWxlfSl9PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJsYXllci10eXBlLXNlbGVjdG9yX19pdGVtX19pY29uXCI+XHJcbiAgICAgIDx2YWx1ZS5pY29uIGhlaWdodD17YCR7aXNUaWxlID8gSVRFTV9TSVpFLmxhcmdlIDogSVRFTV9TSVpFLnNtYWxsfXB4YH0gLz5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJsYXllci10eXBlLXNlbGVjdG9yX19pdGVtX19sYWJlbFwiPlxyXG4gICAgICA8Rm9ybWF0dGVkTWVzc2FnZVxyXG4gICAgICAgIGlkPXtgbGF5ZXIudHlwZS4ke3ZhbHVlLmxhYmVsLnRvTG93ZXJDYXNlKCl9YH1cclxuICAgICAgICBkZWZhdWx0TWVzc2FnZT17dmFsdWUubGFiZWx9XHJcbiAgICAgIC8+XHJcbiAgICA8L2Rpdj5cclxuICA8L1N0eWxlZExpc3RJdGVtPlxyXG4pO1xyXG5cclxuY29uc3QgTGF5ZXJUeXBlRHJvcGRvd25MaXN0ID0gcHJvcHMgPT4gKFxyXG4gIDxEcm9wZG93bkxpc3RXcmFwcGVyIGNsYXNzTmFtZT17Y2xhc3NMaXN0Lmxpc3R9PlxyXG4gICAge3Byb3BzLm9wdGlvbnMubWFwKCh2YWx1ZSwgaSkgPT4gKFxyXG4gICAgICA8U3R5bGVkRHJvcGRvd25MaXN0SXRlbVxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcygnbGF5ZXItdHlwZS1zZWxlY3Rvcl9faXRlbScsIHtcclxuICAgICAgICAgIHNlbGVjdGVkOiBwcm9wcy5zZWxlY3RlZEl0ZW1zLmZpbmQoaXQgPT4gaXQuaWQgPT09IHZhbHVlLmlkKSxcclxuICAgICAgICAgIGhvdmVyOiBwcm9wcy5zZWxlY3Rpb25JbmRleCA9PT0gaVxyXG4gICAgICAgIH0pfVxyXG4gICAgICAgIGtleT17YCR7dmFsdWUuaWR9XyR7aX1gfVxyXG4gICAgICAgIG9uTW91c2VEb3duPXtlID0+IHtcclxuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgIHByb3BzLm9uT3B0aW9uU2VsZWN0ZWQodmFsdWUsIGUpO1xyXG4gICAgICAgIH19XHJcbiAgICAgICAgb25DbGljaz17ZSA9PiB7XHJcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICBwcm9wcy5vbk9wdGlvblNlbGVjdGVkKHZhbHVlLCBlKTtcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPHByb3BzLmN1c3RvbUxpc3RJdGVtQ29tcG9uZW50IHZhbHVlPXt2YWx1ZX0gaXNUaWxlIC8+XHJcbiAgICAgIDwvU3R5bGVkRHJvcGRvd25MaXN0SXRlbT5cclxuICAgICkpfVxyXG4gIDwvRHJvcGRvd25MaXN0V3JhcHBlcj5cclxuKTtcclxuXHJcbmNvbnN0IHByb3BUeXBlcyA9IHtcclxuICBsYXllcjogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxyXG4gIG9uU2VsZWN0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXHJcbn07XHJcblxyXG5jb25zdCBTdHlsZWRMYXllclR5cGVTZWxlY3RvciA9IHN0eWxlZC5kaXZgXHJcbiAgLy8gb3ZlcnJpZGUgaXRlbS1zZWxlY3RvciBkcm9wZG93biBwYWRkaW5nXHJcbiAgLml0ZW0tc2VsZWN0b3IgLml0ZW0tc2VsZWN0b3JfX2Ryb3Bkb3duIHtcclxuICAgIHBhZGRpbmc6IDRweCAxMHB4IDRweCAycHg7XHJcbiAgfVxyXG5gO1xyXG5jb25zdCBMYXllclR5cGVTZWxlY3RvciA9ICh7bGF5ZXIsIGxheWVyVHlwZU9wdGlvbnMsIG9uU2VsZWN0fSkgPT4gKFxyXG4gIDxTaWRlUGFuZWxTZWN0aW9uPlxyXG4gICAgPFN0eWxlZExheWVyVHlwZVNlbGVjdG9yIGNsYXNzTmFtZT1cImxheWVyLWNvbmZpZ19fdHlwZVwiPlxyXG4gICAgICA8SXRlbVNlbGVjdG9yXHJcbiAgICAgICAgc2VsZWN0ZWRJdGVtcz17bGF5ZXJUeXBlT3B0aW9ucy5maW5kKG9wID0+IG9wLmlkID09PSBsYXllci50eXBlKX1cclxuICAgICAgICBvcHRpb25zPXtsYXllclR5cGVPcHRpb25zfVxyXG4gICAgICAgIG11bHRpU2VsZWN0PXtmYWxzZX1cclxuICAgICAgICBwbGFjZWhvbGRlcj1cInBsYWNlaG9sZGVyLnNlbGVjdFR5cGVcIlxyXG4gICAgICAgIG9uQ2hhbmdlPXtvblNlbGVjdH1cclxuICAgICAgICBnZXRPcHRpb25WYWx1ZT17b3AgPT4gb3AuaWR9XHJcbiAgICAgICAgZmlsdGVyT3B0aW9uPVwibGFiZWxcIlxyXG4gICAgICAgIGRpc3BsYXlPcHRpb249e29wID0+IG9wLmxhYmVsfVxyXG4gICAgICAgIERyb3BEb3duTGluZUl0ZW1SZW5kZXJDb21wb25lbnQ9e0xheWVyVHlwZUxpc3RJdGVtfVxyXG4gICAgICAgIERyb3BEb3duUmVuZGVyQ29tcG9uZW50PXtMYXllclR5cGVEcm9wZG93bkxpc3R9XHJcbiAgICAgIC8+XHJcbiAgICA8L1N0eWxlZExheWVyVHlwZVNlbGVjdG9yPlxyXG4gIDwvU2lkZVBhbmVsU2VjdGlvbj5cclxuKTtcclxuXHJcbkxheWVyVHlwZVNlbGVjdG9yLnByb3BUeXBlcyA9IHByb3BUeXBlcztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheWVyVHlwZVNlbGVjdG9yO1xyXG4iXX0=