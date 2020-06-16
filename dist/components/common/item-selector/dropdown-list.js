"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ListItem = exports.classList = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  background-color: ", ";\n  border-top: 1px solid\n    ", ";\n  ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var classList = {
  list: 'list-selector',
  listHeader: 'list__header',
  listSection: 'list__section',
  listItem: 'list__item',
  listItemAnchor: 'list__item__anchor'
};
exports.classList = classList;

var defaultDisplay = function defaultDisplay(d) {
  return d;
};

var ListItem = function ListItem(_ref) {
  var value = _ref.value,
      _ref$displayOption = _ref.displayOption,
      displayOption = _ref$displayOption === void 0 ? defaultDisplay : _ref$displayOption;
  return /*#__PURE__*/_react["default"].createElement("span", {
    className: classList.listItemAnchor
  }, displayOption(value));
};

exports.ListItem = ListItem;

var DropdownListWrapper = _styledComponents["default"].div(_templateObject(), function (props) {
  return props.light ? props.theme.dropdownListBgdLT : props.theme.dropdownListBgd;
}, function (props) {
  return props.light ? props.theme.dropdownListBorderTopLT : props.theme.dropdownListBorderTop;
}, function (props) {
  return props.light ? props.theme.dropdownListLT : props.theme.dropdownList;
});

var DropdownList = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(DropdownList, _Component);

  var _super = _createSuper(DropdownList);

  function DropdownList() {
    (0, _classCallCheck2["default"])(this, DropdownList);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(DropdownList, [{
    key: "_onClick",
    value: function _onClick(result, event) {
      event.preventDefault();
      this.props.onOptionSelected(result, event);
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          fixedOptions = _this$props.fixedOptions,
          light = _this$props.light;
      var display = this.props.displayOption; // Don't render if there are no options to display

      if (!this.props.options.length && this.props.allowCustomValues <= 0) {
        return false;
      }

      var valueOffset = Array.isArray(fixedOptions) ? fixedOptions.length : 0; // For some reason onClick is not fired when clicked on an option
      // onMouseDown is used here as a workaround of #205 and other

      return /*#__PURE__*/_react["default"].createElement(DropdownListWrapper, {
        className: classList.list,
        light: light
      }, this.props.customListHeaderComponent ? /*#__PURE__*/_react["default"].createElement("div", {
        className: classList.listHeader
      }, /*#__PURE__*/_react["default"].createElement(this.props.customListHeaderComponent, null)) : null, valueOffset > 0 ? /*#__PURE__*/_react["default"].createElement("div", {
        className: classList.listSection
      }, fixedOptions.map(function (value, i) {
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: (0, _classnames["default"])(classList.listItem, {
            hover: _this.props.selectionIndex === i,
            fixed: true
          }),
          key: "".concat(display(value), "_").concat(i),
          onMouseDown: function onMouseDown(e) {
            return _this._onClick(value, e);
          },
          onClick: function onClick(e) {
            return _this._onClick(value, e);
          }
        }, /*#__PURE__*/_react["default"].createElement(_this.props.customListItemComponent, {
          value: value,
          displayOption: display
        }));
      })) : null, this.props.options.map(function (value, i) {
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: (0, _classnames["default"])(classList.listItem, {
            hover: _this.props.selectionIndex === i + valueOffset
          }),
          key: "".concat(display(value), "_").concat(i),
          onMouseDown: function onMouseDown(e) {
            return _this._onClick(value, e);
          },
          onClick: function onClick(e) {
            return _this._onClick(value, e);
          }
        }, /*#__PURE__*/_react["default"].createElement(_this.props.customListItemComponent, {
          value: value,
          displayOption: display
        }));
      }));
    }
  }]);
  return DropdownList;
}(_react.Component);

exports["default"] = DropdownList;
(0, _defineProperty2["default"])(DropdownList, "propTypes", {
  options: _propTypes["default"].arrayOf(_propTypes["default"].any),
  allowCustomValues: _propTypes["default"].number,
  customClasses: _propTypes["default"].object,
  customValues: _propTypes["default"].arrayOf(_propTypes["default"].any),
  customListItemComponent: _propTypes["default"].oneOfType([_propTypes["default"].element, _propTypes["default"].func]),
  customListHeaderComponent: _propTypes["default"].oneOfType([_propTypes["default"].element, _propTypes["default"].func]),
  selectionIndex: _propTypes["default"].number,
  onOptionSelected: _propTypes["default"].func,
  displayOption: _propTypes["default"].func.isRequired,
  defaultClassNames: _propTypes["default"].bool,
  areResultsTruncated: _propTypes["default"].bool,
  resultsTruncatedMessage: _propTypes["default"].string,
  listItemComponent: _propTypes["default"].func
});
(0, _defineProperty2["default"])(DropdownList, "defaultProps", {
  customClasses: {},
  customListItemComponent: ListItem,
  customListHeaderComponent: null,
  allowCustomValues: 0,
  customValues: [],
  displayOption: defaultDisplay,
  onOptionSelected: function onOptionSelected() {},
  defaultClassNames: true,
  selectionIndex: null
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9pdGVtLXNlbGVjdG9yL2Ryb3Bkb3duLWxpc3QuanMiXSwibmFtZXMiOlsiY2xhc3NMaXN0IiwibGlzdCIsImxpc3RIZWFkZXIiLCJsaXN0U2VjdGlvbiIsImxpc3RJdGVtIiwibGlzdEl0ZW1BbmNob3IiLCJkZWZhdWx0RGlzcGxheSIsImQiLCJMaXN0SXRlbSIsInZhbHVlIiwiZGlzcGxheU9wdGlvbiIsIkRyb3Bkb3duTGlzdFdyYXBwZXIiLCJzdHlsZWQiLCJkaXYiLCJwcm9wcyIsImxpZ2h0IiwidGhlbWUiLCJkcm9wZG93bkxpc3RCZ2RMVCIsImRyb3Bkb3duTGlzdEJnZCIsImRyb3Bkb3duTGlzdEJvcmRlclRvcExUIiwiZHJvcGRvd25MaXN0Qm9yZGVyVG9wIiwiZHJvcGRvd25MaXN0TFQiLCJkcm9wZG93bkxpc3QiLCJEcm9wZG93bkxpc3QiLCJyZXN1bHQiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwib25PcHRpb25TZWxlY3RlZCIsImZpeGVkT3B0aW9ucyIsImRpc3BsYXkiLCJvcHRpb25zIiwibGVuZ3RoIiwiYWxsb3dDdXN0b21WYWx1ZXMiLCJ2YWx1ZU9mZnNldCIsIkFycmF5IiwiaXNBcnJheSIsImN1c3RvbUxpc3RIZWFkZXJDb21wb25lbnQiLCJtYXAiLCJpIiwiaG92ZXIiLCJzZWxlY3Rpb25JbmRleCIsImZpeGVkIiwiZSIsIl9vbkNsaWNrIiwiQ29tcG9uZW50IiwiUHJvcFR5cGVzIiwiYXJyYXlPZiIsImFueSIsIm51bWJlciIsImN1c3RvbUNsYXNzZXMiLCJvYmplY3QiLCJjdXN0b21WYWx1ZXMiLCJjdXN0b21MaXN0SXRlbUNvbXBvbmVudCIsIm9uZU9mVHlwZSIsImVsZW1lbnQiLCJmdW5jIiwiaXNSZXF1aXJlZCIsImRlZmF1bHRDbGFzc05hbWVzIiwiYm9vbCIsImFyZVJlc3VsdHNUcnVuY2F0ZWQiLCJyZXN1bHRzVHJ1bmNhdGVkTWVzc2FnZSIsInN0cmlu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SUFYZDtBQVlqQkUsRUFBQUEsdUJBQXVCLEVBQUVmLHNCQUFVZ0IsTUFabEI7QUFhakJDLEVBQUFBLGlCQUFpQixFQUFFakIsc0JBQVVVO0FBYlosQztpQ0FEQWhDLFksa0JBaUJHO0FBQ3BCMEIsRUFBQUEsYUFBYSxFQUFFLEVBREs7QUFFcEJHLEVBQUFBLHVCQUF1QixFQUFFNUMsUUFGTDtBQUdwQjRCLEVBQUFBLHlCQUF5QixFQUFFLElBSFA7QUFJcEJKLEVBQUFBLGlCQUFpQixFQUFFLENBSkM7QUFLcEJtQixFQUFBQSxZQUFZLEVBQUUsRUFMTTtBQU1wQnpDLEVBQUFBLGFBQWEsRUFBRUosY0FOSztBQU9wQnFCLEVBQUFBLGdCQUFnQixFQUFFLDRCQUFNLENBQUUsQ0FQTjtBQVFwQjhCLEVBQUFBLGlCQUFpQixFQUFFLElBUkM7QUFTcEJqQixFQUFBQSxjQUFjLEVBQUU7QUFUSSxDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmV4cG9ydCBjb25zdCBjbGFzc0xpc3QgPSB7XHJcbiAgbGlzdDogJ2xpc3Qtc2VsZWN0b3InLFxyXG4gIGxpc3RIZWFkZXI6ICdsaXN0X19oZWFkZXInLFxyXG4gIGxpc3RTZWN0aW9uOiAnbGlzdF9fc2VjdGlvbicsXHJcbiAgbGlzdEl0ZW06ICdsaXN0X19pdGVtJyxcclxuICBsaXN0SXRlbUFuY2hvcjogJ2xpc3RfX2l0ZW1fX2FuY2hvcidcclxufTtcclxuXHJcbmNvbnN0IGRlZmF1bHREaXNwbGF5ID0gZCA9PiBkO1xyXG5leHBvcnQgY29uc3QgTGlzdEl0ZW0gPSAoe3ZhbHVlLCBkaXNwbGF5T3B0aW9uID0gZGVmYXVsdERpc3BsYXl9KSA9PiAoXHJcbiAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc0xpc3QubGlzdEl0ZW1BbmNob3J9PntkaXNwbGF5T3B0aW9uKHZhbHVlKX08L3NwYW4+XHJcbik7XHJcblxyXG5jb25zdCBEcm9wZG93bkxpc3RXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+XHJcbiAgICBwcm9wcy5saWdodCA/IHByb3BzLnRoZW1lLmRyb3Bkb3duTGlzdEJnZExUIDogcHJvcHMudGhlbWUuZHJvcGRvd25MaXN0QmdkfTtcclxuICBib3JkZXItdG9wOiAxcHggc29saWRcclxuICAgICR7cHJvcHMgPT5cclxuICAgICAgcHJvcHMubGlnaHQgPyBwcm9wcy50aGVtZS5kcm9wZG93bkxpc3RCb3JkZXJUb3BMVCA6IHByb3BzLnRoZW1lLmRyb3Bkb3duTGlzdEJvcmRlclRvcH07XHJcbiAgJHtwcm9wcyA9PiAocHJvcHMubGlnaHQgPyBwcm9wcy50aGVtZS5kcm9wZG93bkxpc3RMVCA6IHByb3BzLnRoZW1lLmRyb3Bkb3duTGlzdCl9O1xyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHJvcGRvd25MaXN0IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xyXG4gICAgb3B0aW9uczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLmFueSksXHJcbiAgICBhbGxvd0N1c3RvbVZhbHVlczogUHJvcFR5cGVzLm51bWJlcixcclxuICAgIGN1c3RvbUNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgICBjdXN0b21WYWx1ZXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5hbnkpLFxyXG4gICAgY3VzdG9tTGlzdEl0ZW1Db21wb25lbnQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5lbGVtZW50LCBQcm9wVHlwZXMuZnVuY10pLFxyXG4gICAgY3VzdG9tTGlzdEhlYWRlckNvbXBvbmVudDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmVsZW1lbnQsIFByb3BUeXBlcy5mdW5jXSksXHJcbiAgICBzZWxlY3Rpb25JbmRleDogUHJvcFR5cGVzLm51bWJlcixcclxuICAgIG9uT3B0aW9uU2VsZWN0ZWQ6IFByb3BUeXBlcy5mdW5jLFxyXG4gICAgZGlzcGxheU9wdGlvbjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICAgIGRlZmF1bHRDbGFzc05hbWVzOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgIGFyZVJlc3VsdHNUcnVuY2F0ZWQ6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgcmVzdWx0c1RydW5jYXRlZE1lc3NhZ2U6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBsaXN0SXRlbUNvbXBvbmVudDogUHJvcFR5cGVzLmZ1bmNcclxuICB9O1xyXG5cclxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xyXG4gICAgY3VzdG9tQ2xhc3Nlczoge30sXHJcbiAgICBjdXN0b21MaXN0SXRlbUNvbXBvbmVudDogTGlzdEl0ZW0sXHJcbiAgICBjdXN0b21MaXN0SGVhZGVyQ29tcG9uZW50OiBudWxsLFxyXG4gICAgYWxsb3dDdXN0b21WYWx1ZXM6IDAsXHJcbiAgICBjdXN0b21WYWx1ZXM6IFtdLFxyXG4gICAgZGlzcGxheU9wdGlvbjogZGVmYXVsdERpc3BsYXksXHJcbiAgICBvbk9wdGlvblNlbGVjdGVkOiAoKSA9PiB7fSxcclxuICAgIGRlZmF1bHRDbGFzc05hbWVzOiB0cnVlLFxyXG4gICAgc2VsZWN0aW9uSW5kZXg6IG51bGxcclxuICB9O1xyXG5cclxuICBfb25DbGljayhyZXN1bHQsIGV2ZW50KSB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdGhpcy5wcm9wcy5vbk9wdGlvblNlbGVjdGVkKHJlc3VsdCwgZXZlbnQpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3Qge2ZpeGVkT3B0aW9ucywgbGlnaHR9ID0gdGhpcy5wcm9wcztcclxuICAgIGNvbnN0IGRpc3BsYXkgPSB0aGlzLnByb3BzLmRpc3BsYXlPcHRpb247XHJcblxyXG4gICAgLy8gRG9uJ3QgcmVuZGVyIGlmIHRoZXJlIGFyZSBubyBvcHRpb25zIHRvIGRpc3BsYXlcclxuICAgIGlmICghdGhpcy5wcm9wcy5vcHRpb25zLmxlbmd0aCAmJiB0aGlzLnByb3BzLmFsbG93Q3VzdG9tVmFsdWVzIDw9IDApIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHZhbHVlT2Zmc2V0ID0gQXJyYXkuaXNBcnJheShmaXhlZE9wdGlvbnMpID8gZml4ZWRPcHRpb25zLmxlbmd0aCA6IDA7XHJcblxyXG4gICAgLy8gRm9yIHNvbWUgcmVhc29uIG9uQ2xpY2sgaXMgbm90IGZpcmVkIHdoZW4gY2xpY2tlZCBvbiBhbiBvcHRpb25cclxuICAgIC8vIG9uTW91c2VEb3duIGlzIHVzZWQgaGVyZSBhcyBhIHdvcmthcm91bmQgb2YgIzIwNSBhbmQgb3RoZXJcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxEcm9wZG93bkxpc3RXcmFwcGVyIGNsYXNzTmFtZT17Y2xhc3NMaXN0Lmxpc3R9IGxpZ2h0PXtsaWdodH0+XHJcbiAgICAgICAge3RoaXMucHJvcHMuY3VzdG9tTGlzdEhlYWRlckNvbXBvbmVudCA/IChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc0xpc3QubGlzdEhlYWRlcn0+XHJcbiAgICAgICAgICAgIDx0aGlzLnByb3BzLmN1c3RvbUxpc3RIZWFkZXJDb21wb25lbnQgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkgOiBudWxsfVxyXG5cclxuICAgICAgICB7dmFsdWVPZmZzZXQgPiAwID8gKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTGlzdC5saXN0U2VjdGlvbn0+XHJcbiAgICAgICAgICAgIHtmaXhlZE9wdGlvbnMubWFwKCh2YWx1ZSwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhjbGFzc0xpc3QubGlzdEl0ZW0sIHtcclxuICAgICAgICAgICAgICAgICAgaG92ZXI6IHRoaXMucHJvcHMuc2VsZWN0aW9uSW5kZXggPT09IGksXHJcbiAgICAgICAgICAgICAgICAgIGZpeGVkOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgIGtleT17YCR7ZGlzcGxheSh2YWx1ZSl9XyR7aX1gfVxyXG4gICAgICAgICAgICAgICAgb25Nb3VzZURvd249e2UgPT4gdGhpcy5fb25DbGljayh2YWx1ZSwgZSl9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtlID0+IHRoaXMuX29uQ2xpY2sodmFsdWUsIGUpfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDx0aGlzLnByb3BzLmN1c3RvbUxpc3RJdGVtQ29tcG9uZW50IHZhbHVlPXt2YWx1ZX0gZGlzcGxheU9wdGlvbj17ZGlzcGxheX0gLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApIDogbnVsbH1cclxuXHJcbiAgICAgICAge3RoaXMucHJvcHMub3B0aW9ucy5tYXAoKHZhbHVlLCBpKSA9PiAoXHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhjbGFzc0xpc3QubGlzdEl0ZW0sIHtcclxuICAgICAgICAgICAgICBob3ZlcjogdGhpcy5wcm9wcy5zZWxlY3Rpb25JbmRleCA9PT0gaSArIHZhbHVlT2Zmc2V0XHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICBrZXk9e2Ake2Rpc3BsYXkodmFsdWUpfV8ke2l9YH1cclxuICAgICAgICAgICAgb25Nb3VzZURvd249e2UgPT4gdGhpcy5fb25DbGljayh2YWx1ZSwgZSl9XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2UgPT4gdGhpcy5fb25DbGljayh2YWx1ZSwgZSl9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDx0aGlzLnByb3BzLmN1c3RvbUxpc3RJdGVtQ29tcG9uZW50IHZhbHVlPXt2YWx1ZX0gZGlzcGxheU9wdGlvbj17ZGlzcGxheX0gLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L0Ryb3Bkb3duTGlzdFdyYXBwZXI+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iXX0=