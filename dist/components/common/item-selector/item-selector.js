"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

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

var _classnames = _interopRequireDefault(require("classnames"));

var _lodash = _interopRequireDefault(require("lodash.uniqby"));

var _reactOnclickoutside = _interopRequireDefault(require("react-onclickoutside"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _accessor = _interopRequireDefault(require("./accessor"));

var _chickletedInput = _interopRequireDefault(require("./chickleted-input"));

var _typeahead = _interopRequireDefault(require("./typeahead"));

var _icons = require("../icons");

var _dropdownList = _interopRequireWildcard(require("./dropdown-list"));

var _utils = require("../../../utils/utils");

var _reactIntl = require("react-intl");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  border: 0;\n  width: 100%;\n  left: 0;\n  z-index: ", ";\n  position: absolute;\n  bottom: ", ";\n  margin-top: ", ";\n  margin-bottom: ", ";\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  margin-left: 6px;\n  display: flex;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  color: ", ";\n  overflow: hidden;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  ", ";\n\n  .list__item__anchor {\n    ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var StyledDropdownSelect = _styledComponents["default"].div.attrs({
  className: 'item-selector__dropdown'
})(_templateObject(), function (props) {
  return props.inputTheme === 'secondary' ? props.theme.secondaryInput : props.theme.input;
}, function (props) {
  return props.theme.dropdownListAnchor;
});

var DropdownSelectValue = _styledComponents["default"].span(_templateObject2(), function (props) {
  return props.hasPlaceholder ? props.theme.selectColorPlaceHolder : props.theme.selectColor;
});

var DropdownSelectErase = _styledComponents["default"].div(_templateObject3());

var DropdownWrapper = _styledComponents["default"].div(_templateObject4(), function (props) {
  return props.theme.dropdownWrapperZ;
}, function (props) {
  return props.placement === 'top' ? props.theme.inputBoxHeight : 'auto';
}, function (props) {
  return props.placement === 'bottom' ? '4px' : 'auto';
}, function (props) {
  return props.placement === 'top' ? '4px' : 'auto';
});

var ItemSelector = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(ItemSelector, _Component);

  var _super = _createSuper(ItemSelector);

  function ItemSelector() {
    var _this;

    (0, _classCallCheck2["default"])(this, ItemSelector);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      showTypeahead: false
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleClickOutside", function () {
      _this._hideTypeahead();
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onBlur", function () {
      // note: chickleted input is not a real form element so we call onBlur()
      // when we feel the events are appropriate
      if (_this.props.onBlur) {
        _this.props.onBlur();
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_removeItem", function (item, e) {
      // only used when multiSelect = true
      e.preventDefault();
      e.stopPropagation();
      var selectedItems = _this.props.selectedItems;
      var index = selectedItems.findIndex(function (t) {
        return t === item;
      });

      if (index < 0) {
        return;
      }

      var items = [].concat((0, _toConsumableArray2["default"])(selectedItems.slice(0, index)), (0, _toConsumableArray2["default"])(selectedItems.slice(index + 1, selectedItems.length)));

      _this.props.onChange(items);

      if (_this.props.closeOnSelect) {
        _this.setState({
          showTypeahead: false
        });

        _this._onBlur();
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_selectItem", function (item) {
      var getValue = _accessor["default"].generateOptionToStringFor(_this.props.getOptionValue || _this.props.displayOption);

      var previousSelected = (0, _utils.toArray)(_this.props.selectedItems);

      if (_this.props.multiSelect) {
        var items = (0, _lodash["default"])(previousSelected.concat((0, _utils.toArray)(item)), getValue);

        _this.props.onChange(items);
      } else {
        _this.props.onChange(getValue(item));
      }

      if (_this.props.closeOnSelect) {
        _this.setState({
          showTypeahead: false
        });

        _this._onBlur();
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onErase", function (e) {
      e.stopPropagation();

      _this.props.onChange(null);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_showTypeahead", function (e) {
      e.stopPropagation();

      if (!_this.props.disabled) {
        _this.setState({
          showTypeahead: true
        });
      }
    });
    return _this;
  }

  (0, _createClass2["default"])(ItemSelector, [{
    key: "_hideTypeahead",
    value: function _hideTypeahead() {
      this.setState({
        showTypeahead: false
      });

      this._onBlur();
    }
  }, {
    key: "_renderDropdown",
    value: function _renderDropdown(intl) {
      return /*#__PURE__*/_react["default"].createElement(DropdownWrapper, {
        placement: this.props.placement
      }, /*#__PURE__*/_react["default"].createElement(_typeahead["default"], {
        customClasses: {
          results: 'list-selector',
          input: 'typeahead__input',
          listItem: 'list__item',
          listAnchor: 'list__item__anchor'
        },
        options: this.props.options,
        filterOption: this.props.filterOption,
        fixedOptions: this.props.fixedOptions,
        placeholder: intl.formatMessage({
          id: 'placeholder.search'
        }),
        onOptionSelected: this._selectItem,
        customListComponent: this.props.DropDownRenderComponent,
        customListHeaderComponent: this.props.DropdownHeaderComponent,
        customListItemComponent: this.props.DropDownLineItemRenderComponent,
        displayOption: _accessor["default"].generateOptionToStringFor(this.props.displayOption),
        searchable: this.props.searchable,
        showOptionsWhenEmpty: true,
        selectedItems: (0, _utils.toArray)(this.props.selectedItems)
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var selected = (0, _utils.toArray)(this.props.selectedItems);
      var hasValue = selected.length;

      var displayOption = _accessor["default"].generateOptionToStringFor(this.props.displayOption);

      var dropdownSelectProps = {
        className: (0, _classnames["default"])({
          active: this.state.showTypeahead
        }),
        disabled: this.props.disabled,
        onClick: this._showTypeahead,
        onFocus: this._showPopover,
        error: this.props.isError,
        inputTheme: this.props.inputTheme
      };
      var intl = this.props.intl;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "item-selector"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          position: 'relative'
        }
      }, this.props.multiSelect ? /*#__PURE__*/_react["default"].createElement(_chickletedInput["default"], (0, _extends2["default"])({}, dropdownSelectProps, {
        selectedItems: (0, _utils.toArray)(this.props.selectedItems),
        placeholder: this.props.placeholder,
        displayOption: displayOption,
        removeItem: this._removeItem,
        CustomChickletComponent: this.props.CustomChickletComponent
      })) : /*#__PURE__*/_react["default"].createElement(StyledDropdownSelect, dropdownSelectProps, /*#__PURE__*/_react["default"].createElement(DropdownSelectValue, {
        hasPlaceholder: !hasValue,
        className: "item-selector__dropdown__value"
      }, hasValue ? /*#__PURE__*/_react["default"].createElement(this.props.DropDownLineItemRenderComponent, {
        displayOption: displayOption,
        value: selected[0]
      }) : /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: this.props.placeholder
      })), this.props.erasable && hasValue ? /*#__PURE__*/_react["default"].createElement(DropdownSelectErase, null, /*#__PURE__*/_react["default"].createElement(_icons.Delete, {
        height: "12px",
        onClick: this._onErase
      })) : null), this.state.showTypeahead && this._renderDropdown(intl)));
    }
  }]);
  return ItemSelector;
}(_react.Component);

(0, _defineProperty2["default"])(ItemSelector, "propTypes", {
  // required properties
  selectedItems: _propTypes["default"].oneOfType([_propTypes["default"].array, _propTypes["default"].string, _propTypes["default"].number, _propTypes["default"].bool, _propTypes["default"].object]),
  onChange: _propTypes["default"].func.isRequired,
  options: _propTypes["default"].arrayOf(_propTypes["default"].any).isRequired,
  // optional properties
  fixedOptions: _propTypes["default"].arrayOf(_propTypes["default"].any),
  erasable: _propTypes["default"].bool,
  displayOption: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].func]),
  getOptionValue: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].func]),
  filterOption: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].func]),
  placement: _propTypes["default"].string,
  disabled: _propTypes["default"].bool,
  isError: _propTypes["default"].bool,
  multiSelect: _propTypes["default"].bool,
  inputTheme: _propTypes["default"].string,
  onBlur: _propTypes["default"].func,
  placeholder: _propTypes["default"].string,
  closeOnSelect: _propTypes["default"].bool,
  DropdownHeaderComponent: _propTypes["default"].func,
  DropDownRenderComponent: _propTypes["default"].func,
  DropDownLineItemRenderComponent: _propTypes["default"].func,
  CustomChickletComponent: _propTypes["default"].func
});
(0, _defineProperty2["default"])(ItemSelector, "defaultProps", {
  erasable: false,
  placement: 'bottom',
  selectedItems: [],
  displayOption: null,
  getOptionValue: null,
  filterOption: null,
  fixedOptions: null,
  inputTheme: 'primary',
  multiSelect: true,
  placeholder: 'placeholder.enterValue',
  closeOnSelect: true,
  searchable: true,
  dropdownHeader: null,
  DropdownHeaderComponent: null,
  DropDownRenderComponent: _dropdownList["default"],
  DropDownLineItemRenderComponent: _dropdownList.ListItem
});

var _default = (0, _reactIntl.injectIntl)((0, _reactOnclickoutside["default"])(ItemSelector));

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9pdGVtLXNlbGVjdG9yL2l0ZW0tc2VsZWN0b3IuanMiXSwibmFtZXMiOlsiU3R5bGVkRHJvcGRvd25TZWxlY3QiLCJzdHlsZWQiLCJkaXYiLCJhdHRycyIsImNsYXNzTmFtZSIsInByb3BzIiwiaW5wdXRUaGVtZSIsInRoZW1lIiwic2Vjb25kYXJ5SW5wdXQiLCJpbnB1dCIsImRyb3Bkb3duTGlzdEFuY2hvciIsIkRyb3Bkb3duU2VsZWN0VmFsdWUiLCJzcGFuIiwiaGFzUGxhY2Vob2xkZXIiLCJzZWxlY3RDb2xvclBsYWNlSG9sZGVyIiwic2VsZWN0Q29sb3IiLCJEcm9wZG93blNlbGVjdEVyYXNlIiwiRHJvcGRvd25XcmFwcGVyIiwiZHJvcGRvd25XcmFwcGVyWiIsInBsYWNlbWVudCIsImlucHV0Qm94SGVpZ2h0IiwiSXRlbVNlbGVjdG9yIiwic2hvd1R5cGVhaGVhZCIsIl9oaWRlVHlwZWFoZWFkIiwib25CbHVyIiwiaXRlbSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsInNlbGVjdGVkSXRlbXMiLCJpbmRleCIsImZpbmRJbmRleCIsInQiLCJpdGVtcyIsInNsaWNlIiwibGVuZ3RoIiwib25DaGFuZ2UiLCJjbG9zZU9uU2VsZWN0Iiwic2V0U3RhdGUiLCJfb25CbHVyIiwiZ2V0VmFsdWUiLCJBY2Nlc3NvciIsImdlbmVyYXRlT3B0aW9uVG9TdHJpbmdGb3IiLCJnZXRPcHRpb25WYWx1ZSIsImRpc3BsYXlPcHRpb24iLCJwcmV2aW91c1NlbGVjdGVkIiwibXVsdGlTZWxlY3QiLCJjb25jYXQiLCJkaXNhYmxlZCIsImludGwiLCJyZXN1bHRzIiwibGlzdEl0ZW0iLCJsaXN0QW5jaG9yIiwib3B0aW9ucyIsImZpbHRlck9wdGlvbiIsImZpeGVkT3B0aW9ucyIsImZvcm1hdE1lc3NhZ2UiLCJpZCIsIl9zZWxlY3RJdGVtIiwiRHJvcERvd25SZW5kZXJDb21wb25lbnQiLCJEcm9wZG93bkhlYWRlckNvbXBvbmVudCIsIkRyb3BEb3duTGluZUl0ZW1SZW5kZXJDb21wb25lbnQiLCJzZWFyY2hhYmxlIiwic2VsZWN0ZWQiLCJoYXNWYWx1ZSIsImRyb3Bkb3duU2VsZWN0UHJvcHMiLCJhY3RpdmUiLCJzdGF0ZSIsIm9uQ2xpY2siLCJfc2hvd1R5cGVhaGVhZCIsIm9uRm9jdXMiLCJfc2hvd1BvcG92ZXIiLCJlcnJvciIsImlzRXJyb3IiLCJwb3NpdGlvbiIsInBsYWNlaG9sZGVyIiwiX3JlbW92ZUl0ZW0iLCJDdXN0b21DaGlja2xldENvbXBvbmVudCIsImVyYXNhYmxlIiwiX29uRXJhc2UiLCJfcmVuZGVyRHJvcGRvd24iLCJDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJvbmVPZlR5cGUiLCJhcnJheSIsInN0cmluZyIsIm51bWJlciIsImJvb2wiLCJvYmplY3QiLCJmdW5jIiwiaXNSZXF1aXJlZCIsImFycmF5T2YiLCJhbnkiLCJkcm9wZG93bkhlYWRlciIsIkRyb3Bkb3duTGlzdCIsIkxpc3RJdGVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsb0JBQW9CLEdBQUdDLDZCQUFPQyxHQUFQLENBQVdDLEtBQVgsQ0FBaUI7QUFDNUNDLEVBQUFBLFNBQVMsRUFBRTtBQURpQyxDQUFqQixDQUFILG9CQUd0QixVQUFBQyxLQUFLO0FBQUEsU0FBS0EsS0FBSyxDQUFDQyxVQUFOLEtBQXFCLFdBQXJCLEdBQW1DRCxLQUFLLENBQUNFLEtBQU4sQ0FBWUMsY0FBL0MsR0FBZ0VILEtBQUssQ0FBQ0UsS0FBTixDQUFZRSxLQUFqRjtBQUFBLENBSGlCLEVBTXBCLFVBQUFKLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNFLEtBQU4sQ0FBWUcsa0JBQWhCO0FBQUEsQ0FOZSxDQUExQjs7QUFVQSxJQUFNQyxtQkFBbUIsR0FBR1YsNkJBQU9XLElBQVYscUJBQ2QsVUFBQVAsS0FBSztBQUFBLFNBQ1pBLEtBQUssQ0FBQ1EsY0FBTixHQUF1QlIsS0FBSyxDQUFDRSxLQUFOLENBQVlPLHNCQUFuQyxHQUE0RFQsS0FBSyxDQUFDRSxLQUFOLENBQVlRLFdBRDVEO0FBQUEsQ0FEUyxDQUF6Qjs7QUFNQSxJQUFNQyxtQkFBbUIsR0FBR2YsNkJBQU9DLEdBQVYsb0JBQXpCOztBQUtBLElBQU1lLGVBQWUsR0FBR2hCLDZCQUFPQyxHQUFWLHFCQUlSLFVBQUFHLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNFLEtBQU4sQ0FBWVcsZ0JBQWhCO0FBQUEsQ0FKRyxFQU1ULFVBQUFiLEtBQUs7QUFBQSxTQUFLQSxLQUFLLENBQUNjLFNBQU4sS0FBb0IsS0FBcEIsR0FBNEJkLEtBQUssQ0FBQ0UsS0FBTixDQUFZYSxjQUF4QyxHQUF5RCxNQUE5RDtBQUFBLENBTkksRUFPTCxVQUFBZixLQUFLO0FBQUEsU0FBS0EsS0FBSyxDQUFDYyxTQUFOLEtBQW9CLFFBQXBCLEdBQStCLEtBQS9CLEdBQXVDLE1BQTVDO0FBQUEsQ0FQQSxFQVFGLFVBQUFkLEtBQUs7QUFBQSxTQUFLQSxLQUFLLENBQUNjLFNBQU4sS0FBb0IsS0FBcEIsR0FBNEIsS0FBNUIsR0FBb0MsTUFBekM7QUFBQSxDQVJILENBQXJCOztJQVdNRSxZOzs7Ozs7Ozs7Ozs7Ozs7OEZBb0RJO0FBQ05DLE1BQUFBLGFBQWEsRUFBRTtBQURULEs7MkdBSWEsWUFBTTtBQUN6QixZQUFLQyxjQUFMO0FBQ0QsSztnR0FPUyxZQUFNO0FBQ2Q7QUFDQTtBQUNBLFVBQUksTUFBS2xCLEtBQUwsQ0FBV21CLE1BQWYsRUFBdUI7QUFDckIsY0FBS25CLEtBQUwsQ0FBV21CLE1BQVg7QUFDRDtBQUNGLEs7b0dBRWEsVUFBQ0MsSUFBRCxFQUFPQyxDQUFQLEVBQWE7QUFDekI7QUFDQUEsTUFBQUEsQ0FBQyxDQUFDQyxjQUFGO0FBQ0FELE1BQUFBLENBQUMsQ0FBQ0UsZUFBRjtBQUh5QixVQUlsQkMsYUFKa0IsR0FJRCxNQUFLeEIsS0FKSixDQUlsQndCLGFBSmtCO0FBS3pCLFVBQU1DLEtBQUssR0FBR0QsYUFBYSxDQUFDRSxTQUFkLENBQXdCLFVBQUFDLENBQUM7QUFBQSxlQUFJQSxDQUFDLEtBQUtQLElBQVY7QUFBQSxPQUF6QixDQUFkOztBQUVBLFVBQUlLLEtBQUssR0FBRyxDQUFaLEVBQWU7QUFDYjtBQUNEOztBQUVELFVBQU1HLEtBQUssaURBQ05KLGFBQWEsQ0FBQ0ssS0FBZCxDQUFvQixDQUFwQixFQUF1QkosS0FBdkIsQ0FETSx1Q0FFTkQsYUFBYSxDQUFDSyxLQUFkLENBQW9CSixLQUFLLEdBQUcsQ0FBNUIsRUFBK0JELGFBQWEsQ0FBQ00sTUFBN0MsQ0FGTSxFQUFYOztBQUtBLFlBQUs5QixLQUFMLENBQVcrQixRQUFYLENBQW9CSCxLQUFwQjs7QUFFQSxVQUFJLE1BQUs1QixLQUFMLENBQVdnQyxhQUFmLEVBQThCO0FBQzVCLGNBQUtDLFFBQUwsQ0FBYztBQUFDaEIsVUFBQUEsYUFBYSxFQUFFO0FBQWhCLFNBQWQ7O0FBQ0EsY0FBS2lCLE9BQUw7QUFDRDtBQUNGLEs7b0dBRWEsVUFBQWQsSUFBSSxFQUFJO0FBQ3BCLFVBQU1lLFFBQVEsR0FBR0MscUJBQVNDLHlCQUFULENBQ2YsTUFBS3JDLEtBQUwsQ0FBV3NDLGNBQVgsSUFBNkIsTUFBS3RDLEtBQUwsQ0FBV3VDLGFBRHpCLENBQWpCOztBQUlBLFVBQU1DLGdCQUFnQixHQUFHLG9CQUFRLE1BQUt4QyxLQUFMLENBQVd3QixhQUFuQixDQUF6Qjs7QUFFQSxVQUFJLE1BQUt4QixLQUFMLENBQVd5QyxXQUFmLEVBQTRCO0FBQzFCLFlBQU1iLEtBQUssR0FBRyx3QkFBT1ksZ0JBQWdCLENBQUNFLE1BQWpCLENBQXdCLG9CQUFRdEIsSUFBUixDQUF4QixDQUFQLEVBQStDZSxRQUEvQyxDQUFkOztBQUVBLGNBQUtuQyxLQUFMLENBQVcrQixRQUFYLENBQW9CSCxLQUFwQjtBQUNELE9BSkQsTUFJTztBQUNMLGNBQUs1QixLQUFMLENBQVcrQixRQUFYLENBQW9CSSxRQUFRLENBQUNmLElBQUQsQ0FBNUI7QUFDRDs7QUFFRCxVQUFJLE1BQUtwQixLQUFMLENBQVdnQyxhQUFmLEVBQThCO0FBQzVCLGNBQUtDLFFBQUwsQ0FBYztBQUFDaEIsVUFBQUEsYUFBYSxFQUFFO0FBQWhCLFNBQWQ7O0FBQ0EsY0FBS2lCLE9BQUw7QUFDRDtBQUNGLEs7aUdBRVUsVUFBQWIsQ0FBQyxFQUFJO0FBQ2RBLE1BQUFBLENBQUMsQ0FBQ0UsZUFBRjs7QUFDQSxZQUFLdkIsS0FBTCxDQUFXK0IsUUFBWCxDQUFvQixJQUFwQjtBQUNELEs7dUdBRWdCLFVBQUFWLENBQUMsRUFBSTtBQUNwQkEsTUFBQUEsQ0FBQyxDQUFDRSxlQUFGOztBQUNBLFVBQUksQ0FBQyxNQUFLdkIsS0FBTCxDQUFXMkMsUUFBaEIsRUFBMEI7QUFDeEIsY0FBS1YsUUFBTCxDQUFjO0FBQ1poQixVQUFBQSxhQUFhLEVBQUU7QUFESCxTQUFkO0FBR0Q7QUFDRixLOzs7Ozs7cUNBdEVnQjtBQUNmLFdBQUtnQixRQUFMLENBQWM7QUFBQ2hCLFFBQUFBLGFBQWEsRUFBRTtBQUFoQixPQUFkOztBQUNBLFdBQUtpQixPQUFMO0FBQ0Q7OztvQ0FxRWVVLEksRUFBTTtBQUNwQiwwQkFDRSxnQ0FBQyxlQUFEO0FBQWlCLFFBQUEsU0FBUyxFQUFFLEtBQUs1QyxLQUFMLENBQVdjO0FBQXZDLHNCQUNFLGdDQUFDLHFCQUFEO0FBQ0UsUUFBQSxhQUFhLEVBQUU7QUFDYitCLFVBQUFBLE9BQU8sRUFBRSxlQURJO0FBRWJ6QyxVQUFBQSxLQUFLLEVBQUUsa0JBRk07QUFHYjBDLFVBQUFBLFFBQVEsRUFBRSxZQUhHO0FBSWJDLFVBQUFBLFVBQVUsRUFBRTtBQUpDLFNBRGpCO0FBT0UsUUFBQSxPQUFPLEVBQUUsS0FBSy9DLEtBQUwsQ0FBV2dELE9BUHRCO0FBUUUsUUFBQSxZQUFZLEVBQUUsS0FBS2hELEtBQUwsQ0FBV2lELFlBUjNCO0FBU0UsUUFBQSxZQUFZLEVBQUUsS0FBS2pELEtBQUwsQ0FBV2tELFlBVDNCO0FBVUUsUUFBQSxXQUFXLEVBQUVOLElBQUksQ0FBQ08sYUFBTCxDQUFtQjtBQUFDQyxVQUFBQSxFQUFFLEVBQUU7QUFBTCxTQUFuQixDQVZmO0FBV0UsUUFBQSxnQkFBZ0IsRUFBRSxLQUFLQyxXQVh6QjtBQVlFLFFBQUEsbUJBQW1CLEVBQUUsS0FBS3JELEtBQUwsQ0FBV3NELHVCQVpsQztBQWFFLFFBQUEseUJBQXlCLEVBQUUsS0FBS3RELEtBQUwsQ0FBV3VELHVCQWJ4QztBQWNFLFFBQUEsdUJBQXVCLEVBQUUsS0FBS3ZELEtBQUwsQ0FBV3dELCtCQWR0QztBQWVFLFFBQUEsYUFBYSxFQUFFcEIscUJBQVNDLHlCQUFULENBQW1DLEtBQUtyQyxLQUFMLENBQVd1QyxhQUE5QyxDQWZqQjtBQWdCRSxRQUFBLFVBQVUsRUFBRSxLQUFLdkMsS0FBTCxDQUFXeUQsVUFoQnpCO0FBaUJFLFFBQUEsb0JBQW9CLE1BakJ0QjtBQWtCRSxRQUFBLGFBQWEsRUFBRSxvQkFBUSxLQUFLekQsS0FBTCxDQUFXd0IsYUFBbkI7QUFsQmpCLFFBREYsQ0FERjtBQXdCRDs7OzZCQUVRO0FBQ1AsVUFBTWtDLFFBQVEsR0FBRyxvQkFBUSxLQUFLMUQsS0FBTCxDQUFXd0IsYUFBbkIsQ0FBakI7QUFDQSxVQUFNbUMsUUFBUSxHQUFHRCxRQUFRLENBQUM1QixNQUExQjs7QUFDQSxVQUFNUyxhQUFhLEdBQUdILHFCQUFTQyx5QkFBVCxDQUFtQyxLQUFLckMsS0FBTCxDQUFXdUMsYUFBOUMsQ0FBdEI7O0FBRUEsVUFBTXFCLG1CQUFtQixHQUFHO0FBQzFCN0QsUUFBQUEsU0FBUyxFQUFFLDRCQUFXO0FBQ3BCOEQsVUFBQUEsTUFBTSxFQUFFLEtBQUtDLEtBQUwsQ0FBVzdDO0FBREMsU0FBWCxDQURlO0FBSTFCMEIsUUFBQUEsUUFBUSxFQUFFLEtBQUszQyxLQUFMLENBQVcyQyxRQUpLO0FBSzFCb0IsUUFBQUEsT0FBTyxFQUFFLEtBQUtDLGNBTFk7QUFNMUJDLFFBQUFBLE9BQU8sRUFBRSxLQUFLQyxZQU5ZO0FBTzFCQyxRQUFBQSxLQUFLLEVBQUUsS0FBS25FLEtBQUwsQ0FBV29FLE9BUFE7QUFRMUJuRSxRQUFBQSxVQUFVLEVBQUUsS0FBS0QsS0FBTCxDQUFXQztBQVJHLE9BQTVCO0FBVUEsVUFBTTJDLElBQUksR0FBRyxLQUFLNUMsS0FBTCxDQUFXNEMsSUFBeEI7QUFFQSwwQkFDRTtBQUFLLFFBQUEsU0FBUyxFQUFDO0FBQWYsc0JBQ0U7QUFBSyxRQUFBLEtBQUssRUFBRTtBQUFDeUIsVUFBQUEsUUFBUSxFQUFFO0FBQVg7QUFBWixTQUVHLEtBQUtyRSxLQUFMLENBQVd5QyxXQUFYLGdCQUNDLGdDQUFDLDJCQUFELGdDQUNNbUIsbUJBRE47QUFFRSxRQUFBLGFBQWEsRUFBRSxvQkFBUSxLQUFLNUQsS0FBTCxDQUFXd0IsYUFBbkIsQ0FGakI7QUFHRSxRQUFBLFdBQVcsRUFBRSxLQUFLeEIsS0FBTCxDQUFXc0UsV0FIMUI7QUFJRSxRQUFBLGFBQWEsRUFBRS9CLGFBSmpCO0FBS0UsUUFBQSxVQUFVLEVBQUUsS0FBS2dDLFdBTG5CO0FBTUUsUUFBQSx1QkFBdUIsRUFBRSxLQUFLdkUsS0FBTCxDQUFXd0U7QUFOdEMsU0FERCxnQkFVQyxnQ0FBQyxvQkFBRCxFQUEwQlosbUJBQTFCLGVBQ0UsZ0NBQUMsbUJBQUQ7QUFDRSxRQUFBLGNBQWMsRUFBRSxDQUFDRCxRQURuQjtBQUVFLFFBQUEsU0FBUyxFQUFDO0FBRlosU0FJR0EsUUFBUSxnQkFDUCxxQ0FBTSxLQUFOLENBQVksK0JBQVo7QUFDRSxRQUFBLGFBQWEsRUFBRXBCLGFBRGpCO0FBRUUsUUFBQSxLQUFLLEVBQUVtQixRQUFRLENBQUMsQ0FBRDtBQUZqQixRQURPLGdCQU1QLGdDQUFDLDJCQUFEO0FBQWtCLFFBQUEsRUFBRSxFQUFFLEtBQUsxRCxLQUFMLENBQVdzRTtBQUFqQyxRQVZKLENBREYsRUFjRyxLQUFLdEUsS0FBTCxDQUFXeUUsUUFBWCxJQUF1QmQsUUFBdkIsZ0JBQ0MsZ0NBQUMsbUJBQUQscUJBQ0UsZ0NBQUMsYUFBRDtBQUFRLFFBQUEsTUFBTSxFQUFDLE1BQWY7QUFBc0IsUUFBQSxPQUFPLEVBQUUsS0FBS2U7QUFBcEMsUUFERixDQURELEdBSUcsSUFsQk4sQ0FaSixFQWtDRyxLQUFLWixLQUFMLENBQVc3QyxhQUFYLElBQTRCLEtBQUswRCxlQUFMLENBQXFCL0IsSUFBckIsQ0FsQy9CLENBREYsQ0FERjtBQXdDRDs7O0VBeE53QmdDLGdCOztpQ0FBckI1RCxZLGVBQ2U7QUFDakI7QUFDQVEsRUFBQUEsYUFBYSxFQUFFcUQsc0JBQVVDLFNBQVYsQ0FBb0IsQ0FDakNELHNCQUFVRSxLQUR1QixFQUVqQ0Ysc0JBQVVHLE1BRnVCLEVBR2pDSCxzQkFBVUksTUFIdUIsRUFJakNKLHNCQUFVSyxJQUp1QixFQUtqQ0wsc0JBQVVNLE1BTHVCLENBQXBCLENBRkU7QUFTakJwRCxFQUFBQSxRQUFRLEVBQUU4QyxzQkFBVU8sSUFBVixDQUFlQyxVQVRSO0FBVWpCckMsRUFBQUEsT0FBTyxFQUFFNkIsc0JBQVVTLE9BQVYsQ0FBa0JULHNCQUFVVSxHQUE1QixFQUFpQ0YsVUFWekI7QUFZakI7QUFDQW5DLEVBQUFBLFlBQVksRUFBRTJCLHNCQUFVUyxPQUFWLENBQWtCVCxzQkFBVVUsR0FBNUIsQ0FiRztBQWNqQmQsRUFBQUEsUUFBUSxFQUFFSSxzQkFBVUssSUFkSDtBQWVqQjNDLEVBQUFBLGFBQWEsRUFBRXNDLHNCQUFVQyxTQUFWLENBQW9CLENBQUNELHNCQUFVRyxNQUFYLEVBQW1CSCxzQkFBVU8sSUFBN0IsQ0FBcEIsQ0FmRTtBQWdCakI5QyxFQUFBQSxjQUFjLEVBQUV1QyxzQkFBVUMsU0FBVixDQUFvQixDQUFDRCxzQkFBVUcsTUFBWCxFQUFtQkgsc0JBQVVPLElBQTdCLENBQXBCLENBaEJDO0FBaUJqQm5DLEVBQUFBLFlBQVksRUFBRTRCLHNCQUFVQyxTQUFWLENBQW9CLENBQUNELHNCQUFVRyxNQUFYLEVBQW1CSCxzQkFBVU8sSUFBN0IsQ0FBcEIsQ0FqQkc7QUFrQmpCdEUsRUFBQUEsU0FBUyxFQUFFK0Qsc0JBQVVHLE1BbEJKO0FBbUJqQnJDLEVBQUFBLFFBQVEsRUFBRWtDLHNCQUFVSyxJQW5CSDtBQW9CakJkLEVBQUFBLE9BQU8sRUFBRVMsc0JBQVVLLElBcEJGO0FBcUJqQnpDLEVBQUFBLFdBQVcsRUFBRW9DLHNCQUFVSyxJQXJCTjtBQXNCakJqRixFQUFBQSxVQUFVLEVBQUU0RSxzQkFBVUcsTUF0Qkw7QUF1QmpCN0QsRUFBQUEsTUFBTSxFQUFFMEQsc0JBQVVPLElBdkJEO0FBd0JqQmQsRUFBQUEsV0FBVyxFQUFFTyxzQkFBVUcsTUF4Qk47QUF5QmpCaEQsRUFBQUEsYUFBYSxFQUFFNkMsc0JBQVVLLElBekJSO0FBMEJqQjNCLEVBQUFBLHVCQUF1QixFQUFFc0Isc0JBQVVPLElBMUJsQjtBQTJCakI5QixFQUFBQSx1QkFBdUIsRUFBRXVCLHNCQUFVTyxJQTNCbEI7QUE0QmpCNUIsRUFBQUEsK0JBQStCLEVBQUVxQixzQkFBVU8sSUE1QjFCO0FBNkJqQlosRUFBQUEsdUJBQXVCLEVBQUVLLHNCQUFVTztBQTdCbEIsQztpQ0FEZnBFLFksa0JBaUNrQjtBQUNwQnlELEVBQUFBLFFBQVEsRUFBRSxLQURVO0FBRXBCM0QsRUFBQUEsU0FBUyxFQUFFLFFBRlM7QUFHcEJVLEVBQUFBLGFBQWEsRUFBRSxFQUhLO0FBSXBCZSxFQUFBQSxhQUFhLEVBQUUsSUFKSztBQUtwQkQsRUFBQUEsY0FBYyxFQUFFLElBTEk7QUFNcEJXLEVBQUFBLFlBQVksRUFBRSxJQU5NO0FBT3BCQyxFQUFBQSxZQUFZLEVBQUUsSUFQTTtBQVFwQmpELEVBQUFBLFVBQVUsRUFBRSxTQVJRO0FBU3BCd0MsRUFBQUEsV0FBVyxFQUFFLElBVE87QUFVcEI2QixFQUFBQSxXQUFXLEVBQUUsd0JBVk87QUFXcEJ0QyxFQUFBQSxhQUFhLEVBQUUsSUFYSztBQVlwQnlCLEVBQUFBLFVBQVUsRUFBRSxJQVpRO0FBYXBCK0IsRUFBQUEsY0FBYyxFQUFFLElBYkk7QUFjcEJqQyxFQUFBQSx1QkFBdUIsRUFBRSxJQWRMO0FBZXBCRCxFQUFBQSx1QkFBdUIsRUFBRW1DLHdCQWZMO0FBZ0JwQmpDLEVBQUFBLCtCQUErQixFQUFFa0M7QUFoQmIsQzs7ZUEwTFQsMkJBQVcscUNBQXNCMUUsWUFBdEIsQ0FBWCxDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5pbXBvcnQgdW5pcUJ5IGZyb20gJ2xvZGFzaC51bmlxYnknO1xyXG5pbXBvcnQgbGlzdGVuc1RvQ2xpY2tPdXRzaWRlIGZyb20gJ3JlYWN0LW9uY2xpY2tvdXRzaWRlJztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5pbXBvcnQgQWNjZXNzb3IgZnJvbSAnLi9hY2Nlc3Nvcic7XHJcbmltcG9ydCBDaGlja2xldGVkSW5wdXQgZnJvbSAnLi9jaGlja2xldGVkLWlucHV0JztcclxuaW1wb3J0IFR5cGVhaGVhZCBmcm9tICcuL3R5cGVhaGVhZCc7XHJcbmltcG9ydCB7RGVsZXRlfSBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9pY29ucyc7XHJcbmltcG9ydCBEcm9wZG93bkxpc3QsIHtMaXN0SXRlbX0gZnJvbSAnLi9kcm9wZG93bi1saXN0JztcclxuXHJcbmltcG9ydCB7dG9BcnJheX0gZnJvbSAndXRpbHMvdXRpbHMnO1xyXG5pbXBvcnQge0Zvcm1hdHRlZE1lc3NhZ2UsIGluamVjdEludGx9IGZyb20gJ3JlYWN0LWludGwnO1xyXG5cclxuY29uc3QgU3R5bGVkRHJvcGRvd25TZWxlY3QgPSBzdHlsZWQuZGl2LmF0dHJzKHtcclxuICBjbGFzc05hbWU6ICdpdGVtLXNlbGVjdG9yX19kcm9wZG93bidcclxufSlgXHJcbiAgJHtwcm9wcyA9PiAocHJvcHMuaW5wdXRUaGVtZSA9PT0gJ3NlY29uZGFyeScgPyBwcm9wcy50aGVtZS5zZWNvbmRhcnlJbnB1dCA6IHByb3BzLnRoZW1lLmlucHV0KX07XHJcblxyXG4gIC5saXN0X19pdGVtX19hbmNob3Ige1xyXG4gICAgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5kcm9wZG93bkxpc3RBbmNob3J9O1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IERyb3Bkb3duU2VsZWN0VmFsdWUgPSBzdHlsZWQuc3BhbmBcclxuICBjb2xvcjogJHtwcm9wcyA9PlxyXG4gICAgcHJvcHMuaGFzUGxhY2Vob2xkZXIgPyBwcm9wcy50aGVtZS5zZWxlY3RDb2xvclBsYWNlSG9sZGVyIDogcHJvcHMudGhlbWUuc2VsZWN0Q29sb3J9O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbmA7XHJcblxyXG5jb25zdCBEcm9wZG93blNlbGVjdEVyYXNlID0gc3R5bGVkLmRpdmBcclxuICBtYXJnaW4tbGVmdDogNnB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbmA7XHJcblxyXG5jb25zdCBEcm9wZG93bldyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGJvcmRlcjogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBsZWZ0OiAwO1xyXG4gIHotaW5kZXg6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuZHJvcGRvd25XcmFwcGVyWn07XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogJHtwcm9wcyA9PiAocHJvcHMucGxhY2VtZW50ID09PSAndG9wJyA/IHByb3BzLnRoZW1lLmlucHV0Qm94SGVpZ2h0IDogJ2F1dG8nKX07XHJcbiAgbWFyZ2luLXRvcDogJHtwcm9wcyA9PiAocHJvcHMucGxhY2VtZW50ID09PSAnYm90dG9tJyA/ICc0cHgnIDogJ2F1dG8nKX07XHJcbiAgbWFyZ2luLWJvdHRvbTogJHtwcm9wcyA9PiAocHJvcHMucGxhY2VtZW50ID09PSAndG9wJyA/ICc0cHgnIDogJ2F1dG8nKX07XHJcbmA7XHJcblxyXG5jbGFzcyBJdGVtU2VsZWN0b3IgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XHJcbiAgICAvLyByZXF1aXJlZCBwcm9wZXJ0aWVzXHJcbiAgICBzZWxlY3RlZEl0ZW1zOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcclxuICAgICAgUHJvcFR5cGVzLmFycmF5LFxyXG4gICAgICBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgICBQcm9wVHlwZXMuYm9vbCxcclxuICAgICAgUHJvcFR5cGVzLm9iamVjdFxyXG4gICAgXSksXHJcbiAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICAgIG9wdGlvbnM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5hbnkpLmlzUmVxdWlyZWQsXHJcblxyXG4gICAgLy8gb3B0aW9uYWwgcHJvcGVydGllc1xyXG4gICAgZml4ZWRPcHRpb25zOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuYW55KSxcclxuICAgIGVyYXNhYmxlOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgIGRpc3BsYXlPcHRpb246IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5mdW5jXSksXHJcbiAgICBnZXRPcHRpb25WYWx1ZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmZ1bmNdKSxcclxuICAgIGZpbHRlck9wdGlvbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmZ1bmNdKSxcclxuICAgIHBsYWNlbWVudDogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgIGlzRXJyb3I6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgbXVsdGlTZWxlY3Q6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgaW5wdXRUaGVtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIG9uQmx1cjogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgICBwbGFjZWhvbGRlcjogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGNsb3NlT25TZWxlY3Q6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgRHJvcGRvd25IZWFkZXJDb21wb25lbnQ6IFByb3BUeXBlcy5mdW5jLFxyXG4gICAgRHJvcERvd25SZW5kZXJDb21wb25lbnQ6IFByb3BUeXBlcy5mdW5jLFxyXG4gICAgRHJvcERvd25MaW5lSXRlbVJlbmRlckNvbXBvbmVudDogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgICBDdXN0b21DaGlja2xldENvbXBvbmVudDogUHJvcFR5cGVzLmZ1bmNcclxuICB9O1xyXG5cclxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xyXG4gICAgZXJhc2FibGU6IGZhbHNlLFxyXG4gICAgcGxhY2VtZW50OiAnYm90dG9tJyxcclxuICAgIHNlbGVjdGVkSXRlbXM6IFtdLFxyXG4gICAgZGlzcGxheU9wdGlvbjogbnVsbCxcclxuICAgIGdldE9wdGlvblZhbHVlOiBudWxsLFxyXG4gICAgZmlsdGVyT3B0aW9uOiBudWxsLFxyXG4gICAgZml4ZWRPcHRpb25zOiBudWxsLFxyXG4gICAgaW5wdXRUaGVtZTogJ3ByaW1hcnknLFxyXG4gICAgbXVsdGlTZWxlY3Q6IHRydWUsXHJcbiAgICBwbGFjZWhvbGRlcjogJ3BsYWNlaG9sZGVyLmVudGVyVmFsdWUnLFxyXG4gICAgY2xvc2VPblNlbGVjdDogdHJ1ZSxcclxuICAgIHNlYXJjaGFibGU6IHRydWUsXHJcbiAgICBkcm9wZG93bkhlYWRlcjogbnVsbCxcclxuICAgIERyb3Bkb3duSGVhZGVyQ29tcG9uZW50OiBudWxsLFxyXG4gICAgRHJvcERvd25SZW5kZXJDb21wb25lbnQ6IERyb3Bkb3duTGlzdCxcclxuICAgIERyb3BEb3duTGluZUl0ZW1SZW5kZXJDb21wb25lbnQ6IExpc3RJdGVtXHJcbiAgfTtcclxuXHJcbiAgc3RhdGUgPSB7XHJcbiAgICBzaG93VHlwZWFoZWFkOiBmYWxzZVxyXG4gIH07XHJcblxyXG4gIGhhbmRsZUNsaWNrT3V0c2lkZSA9ICgpID0+IHtcclxuICAgIHRoaXMuX2hpZGVUeXBlYWhlYWQoKTtcclxuICB9O1xyXG5cclxuICBfaGlkZVR5cGVhaGVhZCgpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe3Nob3dUeXBlYWhlYWQ6IGZhbHNlfSk7XHJcbiAgICB0aGlzLl9vbkJsdXIoKTtcclxuICB9XHJcblxyXG4gIF9vbkJsdXIgPSAoKSA9PiB7XHJcbiAgICAvLyBub3RlOiBjaGlja2xldGVkIGlucHV0IGlzIG5vdCBhIHJlYWwgZm9ybSBlbGVtZW50IHNvIHdlIGNhbGwgb25CbHVyKClcclxuICAgIC8vIHdoZW4gd2UgZmVlbCB0aGUgZXZlbnRzIGFyZSBhcHByb3ByaWF0ZVxyXG4gICAgaWYgKHRoaXMucHJvcHMub25CbHVyKSB7XHJcbiAgICAgIHRoaXMucHJvcHMub25CbHVyKCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgX3JlbW92ZUl0ZW0gPSAoaXRlbSwgZSkgPT4ge1xyXG4gICAgLy8gb25seSB1c2VkIHdoZW4gbXVsdGlTZWxlY3QgPSB0cnVlXHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgY29uc3Qge3NlbGVjdGVkSXRlbXN9ID0gdGhpcy5wcm9wcztcclxuICAgIGNvbnN0IGluZGV4ID0gc2VsZWN0ZWRJdGVtcy5maW5kSW5kZXgodCA9PiB0ID09PSBpdGVtKTtcclxuXHJcbiAgICBpZiAoaW5kZXggPCAwKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBpdGVtcyA9IFtcclxuICAgICAgLi4uc2VsZWN0ZWRJdGVtcy5zbGljZSgwLCBpbmRleCksXHJcbiAgICAgIC4uLnNlbGVjdGVkSXRlbXMuc2xpY2UoaW5kZXggKyAxLCBzZWxlY3RlZEl0ZW1zLmxlbmd0aClcclxuICAgIF07XHJcblxyXG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZShpdGVtcyk7XHJcblxyXG4gICAgaWYgKHRoaXMucHJvcHMuY2xvc2VPblNlbGVjdCkge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtzaG93VHlwZWFoZWFkOiBmYWxzZX0pO1xyXG4gICAgICB0aGlzLl9vbkJsdXIoKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBfc2VsZWN0SXRlbSA9IGl0ZW0gPT4ge1xyXG4gICAgY29uc3QgZ2V0VmFsdWUgPSBBY2Nlc3Nvci5nZW5lcmF0ZU9wdGlvblRvU3RyaW5nRm9yKFxyXG4gICAgICB0aGlzLnByb3BzLmdldE9wdGlvblZhbHVlIHx8IHRoaXMucHJvcHMuZGlzcGxheU9wdGlvblxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCBwcmV2aW91c1NlbGVjdGVkID0gdG9BcnJheSh0aGlzLnByb3BzLnNlbGVjdGVkSXRlbXMpO1xyXG5cclxuICAgIGlmICh0aGlzLnByb3BzLm11bHRpU2VsZWN0KSB7XHJcbiAgICAgIGNvbnN0IGl0ZW1zID0gdW5pcUJ5KHByZXZpb3VzU2VsZWN0ZWQuY29uY2F0KHRvQXJyYXkoaXRlbSkpLCBnZXRWYWx1ZSk7XHJcblxyXG4gICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKGl0ZW1zKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UoZ2V0VmFsdWUoaXRlbSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLnByb3BzLmNsb3NlT25TZWxlY3QpIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7c2hvd1R5cGVhaGVhZDogZmFsc2V9KTtcclxuICAgICAgdGhpcy5fb25CbHVyKCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgX29uRXJhc2UgPSBlID0+IHtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKG51bGwpO1xyXG4gIH07XHJcblxyXG4gIF9zaG93VHlwZWFoZWFkID0gZSA9PiB7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgaWYgKCF0aGlzLnByb3BzLmRpc2FibGVkKSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIHNob3dUeXBlYWhlYWQ6IHRydWVcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgX3JlbmRlckRyb3Bkb3duKGludGwpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxEcm9wZG93bldyYXBwZXIgcGxhY2VtZW50PXt0aGlzLnByb3BzLnBsYWNlbWVudH0+XHJcbiAgICAgICAgPFR5cGVhaGVhZFxyXG4gICAgICAgICAgY3VzdG9tQ2xhc3Nlcz17e1xyXG4gICAgICAgICAgICByZXN1bHRzOiAnbGlzdC1zZWxlY3RvcicsXHJcbiAgICAgICAgICAgIGlucHV0OiAndHlwZWFoZWFkX19pbnB1dCcsXHJcbiAgICAgICAgICAgIGxpc3RJdGVtOiAnbGlzdF9faXRlbScsXHJcbiAgICAgICAgICAgIGxpc3RBbmNob3I6ICdsaXN0X19pdGVtX19hbmNob3InXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgb3B0aW9ucz17dGhpcy5wcm9wcy5vcHRpb25zfVxyXG4gICAgICAgICAgZmlsdGVyT3B0aW9uPXt0aGlzLnByb3BzLmZpbHRlck9wdGlvbn1cclxuICAgICAgICAgIGZpeGVkT3B0aW9ucz17dGhpcy5wcm9wcy5maXhlZE9wdGlvbnN9XHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj17aW50bC5mb3JtYXRNZXNzYWdlKHtpZDogJ3BsYWNlaG9sZGVyLnNlYXJjaCd9KX1cclxuICAgICAgICAgIG9uT3B0aW9uU2VsZWN0ZWQ9e3RoaXMuX3NlbGVjdEl0ZW19XHJcbiAgICAgICAgICBjdXN0b21MaXN0Q29tcG9uZW50PXt0aGlzLnByb3BzLkRyb3BEb3duUmVuZGVyQ29tcG9uZW50fVxyXG4gICAgICAgICAgY3VzdG9tTGlzdEhlYWRlckNvbXBvbmVudD17dGhpcy5wcm9wcy5Ecm9wZG93bkhlYWRlckNvbXBvbmVudH1cclxuICAgICAgICAgIGN1c3RvbUxpc3RJdGVtQ29tcG9uZW50PXt0aGlzLnByb3BzLkRyb3BEb3duTGluZUl0ZW1SZW5kZXJDb21wb25lbnR9XHJcbiAgICAgICAgICBkaXNwbGF5T3B0aW9uPXtBY2Nlc3Nvci5nZW5lcmF0ZU9wdGlvblRvU3RyaW5nRm9yKHRoaXMucHJvcHMuZGlzcGxheU9wdGlvbil9XHJcbiAgICAgICAgICBzZWFyY2hhYmxlPXt0aGlzLnByb3BzLnNlYXJjaGFibGV9XHJcbiAgICAgICAgICBzaG93T3B0aW9uc1doZW5FbXB0eVxyXG4gICAgICAgICAgc2VsZWN0ZWRJdGVtcz17dG9BcnJheSh0aGlzLnByb3BzLnNlbGVjdGVkSXRlbXMpfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvRHJvcGRvd25XcmFwcGVyPlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHNlbGVjdGVkID0gdG9BcnJheSh0aGlzLnByb3BzLnNlbGVjdGVkSXRlbXMpO1xyXG4gICAgY29uc3QgaGFzVmFsdWUgPSBzZWxlY3RlZC5sZW5ndGg7XHJcbiAgICBjb25zdCBkaXNwbGF5T3B0aW9uID0gQWNjZXNzb3IuZ2VuZXJhdGVPcHRpb25Ub1N0cmluZ0Zvcih0aGlzLnByb3BzLmRpc3BsYXlPcHRpb24pO1xyXG5cclxuICAgIGNvbnN0IGRyb3Bkb3duU2VsZWN0UHJvcHMgPSB7XHJcbiAgICAgIGNsYXNzTmFtZTogY2xhc3NuYW1lcyh7XHJcbiAgICAgICAgYWN0aXZlOiB0aGlzLnN0YXRlLnNob3dUeXBlYWhlYWRcclxuICAgICAgfSksXHJcbiAgICAgIGRpc2FibGVkOiB0aGlzLnByb3BzLmRpc2FibGVkLFxyXG4gICAgICBvbkNsaWNrOiB0aGlzLl9zaG93VHlwZWFoZWFkLFxyXG4gICAgICBvbkZvY3VzOiB0aGlzLl9zaG93UG9wb3ZlcixcclxuICAgICAgZXJyb3I6IHRoaXMucHJvcHMuaXNFcnJvcixcclxuICAgICAgaW5wdXRUaGVtZTogdGhpcy5wcm9wcy5pbnB1dFRoZW1lXHJcbiAgICB9O1xyXG4gICAgY29uc3QgaW50bCA9IHRoaXMucHJvcHMuaW50bDtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW0tc2VsZWN0b3JcIj5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7cG9zaXRpb246ICdyZWxhdGl2ZSd9fT5cclxuICAgICAgICAgIHsvKiB0aGlzIHBhcnQgaXMgdXNlZCB0byBkaXNwbGF5IHRoZSBsYWJlbCAqL31cclxuICAgICAgICAgIHt0aGlzLnByb3BzLm11bHRpU2VsZWN0ID8gKFxyXG4gICAgICAgICAgICA8Q2hpY2tsZXRlZElucHV0XHJcbiAgICAgICAgICAgICAgey4uLmRyb3Bkb3duU2VsZWN0UHJvcHN9XHJcbiAgICAgICAgICAgICAgc2VsZWN0ZWRJdGVtcz17dG9BcnJheSh0aGlzLnByb3BzLnNlbGVjdGVkSXRlbXMpfVxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXt0aGlzLnByb3BzLnBsYWNlaG9sZGVyfVxyXG4gICAgICAgICAgICAgIGRpc3BsYXlPcHRpb249e2Rpc3BsYXlPcHRpb259XHJcbiAgICAgICAgICAgICAgcmVtb3ZlSXRlbT17dGhpcy5fcmVtb3ZlSXRlbX1cclxuICAgICAgICAgICAgICBDdXN0b21DaGlja2xldENvbXBvbmVudD17dGhpcy5wcm9wcy5DdXN0b21DaGlja2xldENvbXBvbmVudH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxTdHlsZWREcm9wZG93blNlbGVjdCB7Li4uZHJvcGRvd25TZWxlY3RQcm9wc30+XHJcbiAgICAgICAgICAgICAgPERyb3Bkb3duU2VsZWN0VmFsdWVcclxuICAgICAgICAgICAgICAgIGhhc1BsYWNlaG9sZGVyPXshaGFzVmFsdWV9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpdGVtLXNlbGVjdG9yX19kcm9wZG93bl9fdmFsdWVcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtoYXNWYWx1ZSA/IChcclxuICAgICAgICAgICAgICAgICAgPHRoaXMucHJvcHMuRHJvcERvd25MaW5lSXRlbVJlbmRlckNvbXBvbmVudFxyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXlPcHRpb249e2Rpc3BsYXlPcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NlbGVjdGVkWzBdfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2UgaWQ9e3RoaXMucHJvcHMucGxhY2Vob2xkZXJ9IC8+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvRHJvcGRvd25TZWxlY3RWYWx1ZT5cclxuICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5lcmFzYWJsZSAmJiBoYXNWYWx1ZSA/IChcclxuICAgICAgICAgICAgICAgIDxEcm9wZG93blNlbGVjdEVyYXNlPlxyXG4gICAgICAgICAgICAgICAgICA8RGVsZXRlIGhlaWdodD1cIjEycHhcIiBvbkNsaWNrPXt0aGlzLl9vbkVyYXNlfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9Ecm9wZG93blNlbGVjdEVyYXNlPlxyXG4gICAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICA8L1N0eWxlZERyb3Bkb3duU2VsZWN0PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAgIHsvKiB0aGlzIHBhcnQgaXMgdXNlZCB0byBidWlsdCB0aGUgbGlzdCAqL31cclxuICAgICAgICAgIHt0aGlzLnN0YXRlLnNob3dUeXBlYWhlYWQgJiYgdGhpcy5fcmVuZGVyRHJvcGRvd24oaW50bCl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluamVjdEludGwobGlzdGVuc1RvQ2xpY2tPdXRzaWRlKEl0ZW1TZWxlY3RvcikpO1xyXG4iXX0=