"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.FieldListItemFactory = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reselect = require("reselect");

var _itemSelector = _interopRequireDefault(require("./item-selector/item-selector"));

var _fieldToken = _interopRequireDefault(require("../common/field-token"));

var _dropdownList = require("./item-selector/dropdown-list");

var _utils = require("../../utils/utils");

var _dataUtils = require("../../utils/data-utils");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: inline-block;\n  margin: 0 4px 0 0;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var defaultDisplayOption = function defaultDisplayOption(d) {
  return d.name;
};

var StyledToken = _styledComponents["default"].div(_templateObject()); // custom list Item


var FieldListItemFactory = function FieldListItemFactory() {
  var showToken = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

  var FieldListItem = function FieldListItem(_ref) {
    var value = _ref.value,
        _ref$displayOption = _ref.displayOption,
        displayOption = _ref$displayOption === void 0 ? defaultDisplayOption : _ref$displayOption;
    return /*#__PURE__*/_react["default"].createElement("div", null, showToken ? /*#__PURE__*/_react["default"].createElement(StyledToken, null, /*#__PURE__*/_react["default"].createElement(_fieldToken["default"], {
      type: value.type
    })) : null, /*#__PURE__*/_react["default"].createElement("span", {
      className: _dropdownList.classList.listItemAnchor
    }, displayOption(value)));
  };

  return FieldListItem;
};

exports.FieldListItemFactory = FieldListItemFactory;

var SuggestedFieldHeader = function SuggestedFieldHeader() {
  return /*#__PURE__*/_react["default"].createElement("div", null, "Suggested Field");
};

var FieldType = _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].arrayOf(_propTypes["default"].string), _propTypes["default"].arrayOf(_propTypes["default"].shape({
  name: _propTypes["default"].string,
  format: _propTypes["default"].string
})), _propTypes["default"].shape({
  format: _propTypes["default"].string,
  id: _propTypes["default"].string,
  name: _propTypes["default"].string,
  tableFieldIndex: _propTypes["default"].number,
  type: _propTypes["default"].number
})]);

var FieldSelector = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(FieldSelector, _Component);

  var _super = _createSuper(FieldSelector);

  function FieldSelector() {
    var _this;

    (0, _classCallCheck2["default"])(this, FieldSelector);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "fieldsSelector", function (props) {
      return props.fields;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "filteredFieldsSelector", function (props) {
      return props.fields.filter(function (field) {
        return !(0, _utils.toArray)(props.value).find(function (d) {
          return d.name ? d.name === field.name : d === field.name;
        });
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "valueSelector", function (props) {
      return props.value;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "filterFieldTypesSelector", function (props) {
      return props.filterFieldTypes;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "showTokenSelector", function (props) {
      return props.showToken;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "selectedItemsSelector", (0, _reselect.createSelector)(_this.fieldsSelector, _this.valueSelector, function (fields, value) {
      return fields.filter(function (f) {
        return Boolean((0, _utils.toArray)(value).find(function (d) {
          if (!(0, _dataUtils.notNullorUndefined)(d)) {
            return false;
          }

          return d.name ? d.name === defaultDisplayOption(f) : d === defaultDisplayOption(f);
        }));
      });
    }));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "fieldOptionsSelector", (0, _reselect.createSelector)(_this.filteredFieldsSelector, _this.filterFieldTypesSelector, function (fields, filterFieldTypes) {
      if (!filterFieldTypes) {
        return fields;
      }

      var filters = Array.isArray(filterFieldTypes) ? filterFieldTypes : [filterFieldTypes];
      return fields.filter(function (f) {
        return filters.includes(f.type);
      });
    }));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "fieldListItemSelector", (0, _reselect.createSelector)(_this.showTokenSelector, FieldListItemFactory));
    return _this;
  }

  (0, _createClass2["default"])(FieldSelector, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "field-selector"
      }, /*#__PURE__*/_react["default"].createElement(_itemSelector["default"], {
        getOptionValue: function getOptionValue(d) {
          return d;
        },
        closeOnSelect: this.props.closeOnSelect,
        displayOption: defaultDisplayOption,
        filterOption: 'id',
        fixedOptions: this.props.suggested,
        inputTheme: this.props.inputTheme,
        isError: this.props.error,
        selectedItems: this.selectedItemsSelector(this.props),
        erasable: this.props.erasable,
        options: this.fieldOptionsSelector(this.props),
        multiSelect: this.props.multiSelect,
        placeholder: this.props.placeholder,
        placement: this.props.placement,
        onChange: this.props.onSelect,
        DropDownLineItemRenderComponent: this.fieldListItemSelector(this.props),
        DropdownHeaderComponent: this.props.suggested ? SuggestedFieldHeader : null,
        CustomChickletComponent: this.props.CustomChickletComponent
      }));
    }
  }]);
  return FieldSelector;
}(_react.Component);

(0, _defineProperty2["default"])(FieldSelector, "propTypes", {
  fields: _propTypes["default"].oneOfType([_propTypes["default"].array, _propTypes["default"].arrayOf(FieldType)]),
  onSelect: _propTypes["default"].func.isRequired,
  placement: _propTypes["default"].string,
  value: FieldType,
  filterFieldTypes: _propTypes["default"].oneOfType([FieldType, _propTypes["default"].arrayOf(FieldType)]),
  inputTheme: _propTypes["default"].string,
  placeholder: _propTypes["default"].string,
  erasable: _propTypes["default"].bool,
  error: _propTypes["default"].bool,
  multiSelect: _propTypes["default"].bool,
  closeOnSelect: _propTypes["default"].bool,
  showToken: _propTypes["default"].bool,
  suggested: _propTypes["default"].arrayOf(_propTypes["default"].any),
  CustomChickletComponent: _propTypes["default"].func
});
(0, _defineProperty2["default"])(FieldSelector, "defaultProps", {
  erasable: true,
  error: false,
  fields: [],
  onSelect: function onSelect() {},
  placement: 'bottom',
  value: null,
  multiSelect: false,
  closeOnSelect: true,
  showToken: true,
  placeholder: 'placeholder.selectField'
});
var _default = FieldSelector;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9maWVsZC1zZWxlY3Rvci5qcyJdLCJuYW1lcyI6WyJkZWZhdWx0RGlzcGxheU9wdGlvbiIsImQiLCJuYW1lIiwiU3R5bGVkVG9rZW4iLCJzdHlsZWQiLCJkaXYiLCJGaWVsZExpc3RJdGVtRmFjdG9yeSIsInNob3dUb2tlbiIsIkZpZWxkTGlzdEl0ZW0iLCJ2YWx1ZSIsImRpc3BsYXlPcHRpb24iLCJ0eXBlIiwiY2xhc3NMaXN0IiwibGlzdEl0ZW1BbmNob3IiLCJTdWdnZXN0ZWRGaWVsZEhlYWRlciIsIkZpZWxkVHlwZSIsIlByb3BUeXBlcyIsIm9uZU9mVHlwZSIsInN0cmluZyIsImFycmF5T2YiLCJzaGFwZSIsImZvcm1hdCIsImlkIiwidGFibGVGaWVsZEluZGV4IiwibnVtYmVyIiwiRmllbGRTZWxlY3RvciIsInByb3BzIiwiZmllbGRzIiwiZmlsdGVyIiwiZmllbGQiLCJmaW5kIiwiZmlsdGVyRmllbGRUeXBlcyIsImZpZWxkc1NlbGVjdG9yIiwidmFsdWVTZWxlY3RvciIsImYiLCJCb29sZWFuIiwiZmlsdGVyZWRGaWVsZHNTZWxlY3RvciIsImZpbHRlckZpZWxkVHlwZXNTZWxlY3RvciIsImZpbHRlcnMiLCJBcnJheSIsImlzQXJyYXkiLCJpbmNsdWRlcyIsInNob3dUb2tlblNlbGVjdG9yIiwiY2xvc2VPblNlbGVjdCIsInN1Z2dlc3RlZCIsImlucHV0VGhlbWUiLCJlcnJvciIsInNlbGVjdGVkSXRlbXNTZWxlY3RvciIsImVyYXNhYmxlIiwiZmllbGRPcHRpb25zU2VsZWN0b3IiLCJtdWx0aVNlbGVjdCIsInBsYWNlaG9sZGVyIiwicGxhY2VtZW50Iiwib25TZWxlY3QiLCJmaWVsZExpc3RJdGVtU2VsZWN0b3IiLCJDdXN0b21DaGlja2xldENvbXBvbmVudCIsIkNvbXBvbmVudCIsImFycmF5IiwiZnVuYyIsImlzUmVxdWlyZWQiLCJib29sIiwiYW55Il0sIm1hcHBpbmdzIjoiOzs7Ozs7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cmlnaHQgKGMpIDIwMjAgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7Y3JlYXRlU2VsZWN0b3J9IGZyb20gJ3Jlc2VsZWN0JztcclxuXHJcbmltcG9ydCBJdGVtU2VsZWN0b3IgZnJvbSAnLi9pdGVtLXNlbGVjdG9yL2l0ZW0tc2VsZWN0b3InO1xyXG5pbXBvcnQgRmllbGRUb2tlbiBmcm9tICcuLi9jb21tb24vZmllbGQtdG9rZW4nO1xyXG5pbXBvcnQge2NsYXNzTGlzdH0gZnJvbSAnLi9pdGVtLXNlbGVjdG9yL2Ryb3Bkb3duLWxpc3QnO1xyXG5pbXBvcnQge3RvQXJyYXl9IGZyb20gJ3V0aWxzL3V0aWxzJztcclxuaW1wb3J0IHtub3ROdWxsb3JVbmRlZmluZWR9IGZyb20gJ3V0aWxzL2RhdGEtdXRpbHMnO1xyXG5cclxuY29uc3QgZGVmYXVsdERpc3BsYXlPcHRpb24gPSBkID0+IGQubmFtZTtcclxuXHJcbmNvbnN0IFN0eWxlZFRva2VuID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luOiAwIDRweCAwIDA7XHJcbmA7XHJcblxyXG4vLyBjdXN0b20gbGlzdCBJdGVtXHJcbmV4cG9ydCBjb25zdCBGaWVsZExpc3RJdGVtRmFjdG9yeSA9IChzaG93VG9rZW4gPSB0cnVlKSA9PiB7XHJcbiAgY29uc3QgRmllbGRMaXN0SXRlbSA9ICh7dmFsdWUsIGRpc3BsYXlPcHRpb24gPSBkZWZhdWx0RGlzcGxheU9wdGlvbn0pID0+IChcclxuICAgIDxkaXY+XHJcbiAgICAgIHtzaG93VG9rZW4gPyAoXHJcbiAgICAgICAgPFN0eWxlZFRva2VuPlxyXG4gICAgICAgICAgPEZpZWxkVG9rZW4gdHlwZT17dmFsdWUudHlwZX0gLz5cclxuICAgICAgICA8L1N0eWxlZFRva2VuPlxyXG4gICAgICApIDogbnVsbH1cclxuICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc0xpc3QubGlzdEl0ZW1BbmNob3J9PntkaXNwbGF5T3B0aW9uKHZhbHVlKX08L3NwYW4+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG5cclxuICByZXR1cm4gRmllbGRMaXN0SXRlbTtcclxufTtcclxuXHJcbmNvbnN0IFN1Z2dlc3RlZEZpZWxkSGVhZGVyID0gKCkgPT4gPGRpdj5TdWdnZXN0ZWQgRmllbGQ8L2Rpdj47XHJcblxyXG5jb25zdCBGaWVsZFR5cGUgPSBQcm9wVHlwZXMub25lT2ZUeXBlKFtcclxuICBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zdHJpbmcpLFxyXG4gIFByb3BUeXBlcy5hcnJheU9mKFxyXG4gICAgUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgICAgbmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgZm9ybWF0OiBQcm9wVHlwZXMuc3RyaW5nXHJcbiAgICB9KVxyXG4gICksXHJcbiAgUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgIGZvcm1hdDogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgbmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIHRhYmxlRmllbGRJbmRleDogUHJvcFR5cGVzLm51bWJlcixcclxuICAgIHR5cGU6IFByb3BUeXBlcy5udW1iZXJcclxuICB9KVxyXG5dKTtcclxuXHJcbmNsYXNzIEZpZWxkU2VsZWN0b3IgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XHJcbiAgICBmaWVsZHM6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5hcnJheSwgUHJvcFR5cGVzLmFycmF5T2YoRmllbGRUeXBlKV0pLFxyXG4gICAgb25TZWxlY3Q6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgICBwbGFjZW1lbnQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICB2YWx1ZTogRmllbGRUeXBlLFxyXG4gICAgZmlsdGVyRmllbGRUeXBlczogUHJvcFR5cGVzLm9uZU9mVHlwZShbRmllbGRUeXBlLCBQcm9wVHlwZXMuYXJyYXlPZihGaWVsZFR5cGUpXSksXHJcbiAgICBpbnB1dFRoZW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgcGxhY2Vob2xkZXI6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBlcmFzYWJsZTogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICBlcnJvcjogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICBtdWx0aVNlbGVjdDogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICBjbG9zZU9uU2VsZWN0OiBQcm9wVHlwZXMuYm9vbCxcclxuICAgIHNob3dUb2tlbjogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICBzdWdnZXN0ZWQ6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5hbnkpLFxyXG4gICAgQ3VzdG9tQ2hpY2tsZXRDb21wb25lbnQ6IFByb3BUeXBlcy5mdW5jXHJcbiAgfTtcclxuXHJcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcclxuICAgIGVyYXNhYmxlOiB0cnVlLFxyXG4gICAgZXJyb3I6IGZhbHNlLFxyXG4gICAgZmllbGRzOiBbXSxcclxuICAgIG9uU2VsZWN0OiAoKSA9PiB7fSxcclxuICAgIHBsYWNlbWVudDogJ2JvdHRvbScsXHJcbiAgICB2YWx1ZTogbnVsbCxcclxuICAgIG11bHRpU2VsZWN0OiBmYWxzZSxcclxuICAgIGNsb3NlT25TZWxlY3Q6IHRydWUsXHJcbiAgICBzaG93VG9rZW46IHRydWUsXHJcbiAgICBwbGFjZWhvbGRlcjogJ3BsYWNlaG9sZGVyLnNlbGVjdEZpZWxkJ1xyXG4gIH07XHJcblxyXG4gIGZpZWxkc1NlbGVjdG9yID0gcHJvcHMgPT4gcHJvcHMuZmllbGRzO1xyXG4gIGZpbHRlcmVkRmllbGRzU2VsZWN0b3IgPSBwcm9wcyA9PlxyXG4gICAgcHJvcHMuZmllbGRzLmZpbHRlcihcclxuICAgICAgZmllbGQgPT4gIXRvQXJyYXkocHJvcHMudmFsdWUpLmZpbmQoZCA9PiAoZC5uYW1lID8gZC5uYW1lID09PSBmaWVsZC5uYW1lIDogZCA9PT0gZmllbGQubmFtZSkpXHJcbiAgICApO1xyXG4gIHZhbHVlU2VsZWN0b3IgPSBwcm9wcyA9PiBwcm9wcy52YWx1ZTtcclxuICBmaWx0ZXJGaWVsZFR5cGVzU2VsZWN0b3IgPSBwcm9wcyA9PiBwcm9wcy5maWx0ZXJGaWVsZFR5cGVzO1xyXG4gIHNob3dUb2tlblNlbGVjdG9yID0gcHJvcHMgPT4gcHJvcHMuc2hvd1Rva2VuO1xyXG5cclxuICBzZWxlY3RlZEl0ZW1zU2VsZWN0b3IgPSBjcmVhdGVTZWxlY3Rvcih0aGlzLmZpZWxkc1NlbGVjdG9yLCB0aGlzLnZhbHVlU2VsZWN0b3IsIChmaWVsZHMsIHZhbHVlKSA9PlxyXG4gICAgZmllbGRzLmZpbHRlcihmID0+XHJcbiAgICAgIEJvb2xlYW4oXHJcbiAgICAgICAgdG9BcnJheSh2YWx1ZSkuZmluZChkID0+IHtcclxuICAgICAgICAgIGlmICghbm90TnVsbG9yVW5kZWZpbmVkKGQpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldHVybiBkLm5hbWUgPyBkLm5hbWUgPT09IGRlZmF1bHREaXNwbGF5T3B0aW9uKGYpIDogZCA9PT0gZGVmYXVsdERpc3BsYXlPcHRpb24oZik7XHJcbiAgICAgICAgfSlcclxuICAgICAgKVxyXG4gICAgKVxyXG4gICk7XHJcblxyXG4gIGZpZWxkT3B0aW9uc1NlbGVjdG9yID0gY3JlYXRlU2VsZWN0b3IoXHJcbiAgICB0aGlzLmZpbHRlcmVkRmllbGRzU2VsZWN0b3IsXHJcbiAgICB0aGlzLmZpbHRlckZpZWxkVHlwZXNTZWxlY3RvcixcclxuICAgIChmaWVsZHMsIGZpbHRlckZpZWxkVHlwZXMpID0+IHtcclxuICAgICAgaWYgKCFmaWx0ZXJGaWVsZFR5cGVzKSB7XHJcbiAgICAgICAgcmV0dXJuIGZpZWxkcztcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBmaWx0ZXJzID0gQXJyYXkuaXNBcnJheShmaWx0ZXJGaWVsZFR5cGVzKSA/IGZpbHRlckZpZWxkVHlwZXMgOiBbZmlsdGVyRmllbGRUeXBlc107XHJcbiAgICAgIHJldHVybiBmaWVsZHMuZmlsdGVyKGYgPT4gZmlsdGVycy5pbmNsdWRlcyhmLnR5cGUpKTtcclxuICAgIH1cclxuICApO1xyXG5cclxuICBmaWVsZExpc3RJdGVtU2VsZWN0b3IgPSBjcmVhdGVTZWxlY3Rvcih0aGlzLnNob3dUb2tlblNlbGVjdG9yLCBGaWVsZExpc3RJdGVtRmFjdG9yeSk7XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGQtc2VsZWN0b3JcIj5cclxuICAgICAgICA8SXRlbVNlbGVjdG9yXHJcbiAgICAgICAgICBnZXRPcHRpb25WYWx1ZT17ZCA9PiBkfVxyXG4gICAgICAgICAgY2xvc2VPblNlbGVjdD17dGhpcy5wcm9wcy5jbG9zZU9uU2VsZWN0fVxyXG4gICAgICAgICAgZGlzcGxheU9wdGlvbj17ZGVmYXVsdERpc3BsYXlPcHRpb259XHJcbiAgICAgICAgICBmaWx0ZXJPcHRpb249eydpZCd9XHJcbiAgICAgICAgICBmaXhlZE9wdGlvbnM9e3RoaXMucHJvcHMuc3VnZ2VzdGVkfVxyXG4gICAgICAgICAgaW5wdXRUaGVtZT17dGhpcy5wcm9wcy5pbnB1dFRoZW1lfVxyXG4gICAgICAgICAgaXNFcnJvcj17dGhpcy5wcm9wcy5lcnJvcn1cclxuICAgICAgICAgIHNlbGVjdGVkSXRlbXM9e3RoaXMuc2VsZWN0ZWRJdGVtc1NlbGVjdG9yKHRoaXMucHJvcHMpfVxyXG4gICAgICAgICAgZXJhc2FibGU9e3RoaXMucHJvcHMuZXJhc2FibGV9XHJcbiAgICAgICAgICBvcHRpb25zPXt0aGlzLmZpZWxkT3B0aW9uc1NlbGVjdG9yKHRoaXMucHJvcHMpfVxyXG4gICAgICAgICAgbXVsdGlTZWxlY3Q9e3RoaXMucHJvcHMubXVsdGlTZWxlY3R9XHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj17dGhpcy5wcm9wcy5wbGFjZWhvbGRlcn1cclxuICAgICAgICAgIHBsYWNlbWVudD17dGhpcy5wcm9wcy5wbGFjZW1lbnR9XHJcbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy5wcm9wcy5vblNlbGVjdH1cclxuICAgICAgICAgIERyb3BEb3duTGluZUl0ZW1SZW5kZXJDb21wb25lbnQ9e3RoaXMuZmllbGRMaXN0SXRlbVNlbGVjdG9yKHRoaXMucHJvcHMpfVxyXG4gICAgICAgICAgRHJvcGRvd25IZWFkZXJDb21wb25lbnQ9e3RoaXMucHJvcHMuc3VnZ2VzdGVkID8gU3VnZ2VzdGVkRmllbGRIZWFkZXIgOiBudWxsfVxyXG4gICAgICAgICAgQ3VzdG9tQ2hpY2tsZXRDb21wb25lbnQ9e3RoaXMucHJvcHMuQ3VzdG9tQ2hpY2tsZXRDb21wb25lbnR9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmllbGRTZWxlY3RvcjtcclxuIl19