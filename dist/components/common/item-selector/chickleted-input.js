"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ChickletTag = exports.ChickletButton = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _delete = _interopRequireDefault(require("../icons/delete"));

var _reactIntl = require("react-intl");

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  ", "\n\n  color: ", ";\n  overflow: hidden;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  margin-right: 10px;\n  text-overflow: ellipsis;\n  width: 100%;\n  overflow: hidden;\n\n  :hover {\n    overflow: visible;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  background: ", ";\n  border-radius: 1px;\n  color: ", ";\n  font-size: 11px;\n  line-height: 20px;\n  margin: 4px 10px 4px 3px;\n  padding: 2px 6px;\n  display: flex;\n  align-items: center;\n  max-width: calc(100% - 8px);\n\n  :hover {\n    color: ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var propTypes = {
  // required properties
  onClick: _propTypes["default"].func.isRequired,
  removeItem: _propTypes["default"].func.isRequired,
  // optional properties
  selectedItems: _propTypes["default"].arrayOf(_propTypes["default"].any),
  disabled: _propTypes["default"].bool,
  displayOption: _propTypes["default"].func,
  focus: _propTypes["default"].bool,
  error: _propTypes["default"].bool,
  placeholder: _propTypes["default"].string,
  inputTheme: _propTypes["default"].string
};

var ChickletButton = _styledComponents["default"].div(_templateObject(), function (props) {
  return props.theme.panelActiveBg;
}, function (props) {
  return props.theme.textColor;
}, function (props) {
  return props.theme.textColorHl;
});

exports.ChickletButton = ChickletButton;

var ChickletTag = _styledComponents["default"].span(_templateObject2());

exports.ChickletTag = ChickletTag;

var Chicklet = function Chicklet(_ref) {
  var disabled = _ref.disabled,
      name = _ref.name,
      remove = _ref.remove;
  return /*#__PURE__*/_react["default"].createElement(ChickletButton, null, /*#__PURE__*/_react["default"].createElement(ChickletTag, null, name), /*#__PURE__*/_react["default"].createElement(_delete["default"], {
    onClick: disabled ? null : remove
  }));
};

var ChickletedInputContainer = _styledComponents["default"].div(_templateObject3(), function (props) {
  return props.inputTheme === 'secondary' ? props.theme.secondaryChickletedInput : props.theme.chickletedInput;
}, function (props) {
  return props.hasPlaceholder ? props.theme.selectColorPlaceHolder : props.theme.selectColor;
});

var ChickletedInput = function ChickletedInput(_ref2) {
  var focus = _ref2.focus,
      disabled = _ref2.disabled,
      error = _ref2.error,
      onClick = _ref2.onClick,
      className = _ref2.className,
      _ref2$selectedItems = _ref2.selectedItems,
      selectedItems = _ref2$selectedItems === void 0 ? [] : _ref2$selectedItems,
      _ref2$placeholder = _ref2.placeholder,
      placeholder = _ref2$placeholder === void 0 ? '' : _ref2$placeholder,
      removeItem = _ref2.removeItem,
      _ref2$displayOption = _ref2.displayOption,
      displayOption = _ref2$displayOption === void 0 ? function (d) {
    return d;
  } : _ref2$displayOption,
      inputTheme = _ref2.inputTheme,
      CustomChickletComponent = _ref2.CustomChickletComponent;
  return /*#__PURE__*/_react["default"].createElement(ChickletedInputContainer, {
    className: "".concat(className, " chickleted-input"),
    focus: focus,
    disabled: disabled,
    error: error,
    onClick: onClick,
    inputTheme: inputTheme,
    hasPlaceholder: !selectedItems || !selectedItems.length
  }, selectedItems.length > 0 ? selectedItems.map(function (item, i) {
    return CustomChickletComponent ? /*#__PURE__*/_react["default"].createElement(CustomChickletComponent, {
      disabled: disabled,
      key: "".concat(displayOption(item), "_").concat(i),
      name: displayOption(item),
      remove: function remove(e) {
        return removeItem(item, e);
      }
    }) : /*#__PURE__*/_react["default"].createElement(Chicklet, {
      disabled: disabled,
      key: "".concat(displayOption(item), "_").concat(i),
      name: displayOption(item),
      remove: function remove(e) {
        return removeItem(item, e);
      }
    });
  }) : /*#__PURE__*/_react["default"].createElement("span", {
    className: "".concat(className, " chickleted-input__placeholder")
  }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: placeholder
  })));
};

ChickletedInput.propTypes = propTypes;
var _default = ChickletedInput;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9pdGVtLXNlbGVjdG9yL2NoaWNrbGV0ZWQtaW5wdXQuanMiXSwibmFtZXMiOlsicHJvcFR5cGVzIiwib25DbGljayIsIlByb3BUeXBlcyIsImZ1bmMiLCJpc1JlcXVpcmVkIiwicmVtb3ZlSXRlbSIsInNlbGVjdGVkSXRlbXMiLCJhcnJheU9mIiwiYW55IiwiZGlzYWJsZWQiLCJib29sIiwiZGlzcGxheU9wdGlvbiIsImZvY3VzIiwiZXJyb3IiLCJwbGFjZWhvbGRlciIsInN0cmluZyIsImlucHV0VGhlbWUiLCJDaGlja2xldEJ1dHRvbiIsInN0eWxlZCIsImRpdiIsInByb3BzIiwidGhlbWUiLCJwYW5lbEFjdGl2ZUJnIiwidGV4dENvbG9yIiwidGV4dENvbG9ySGwiLCJDaGlja2xldFRhZyIsInNwYW4iLCJDaGlja2xldCIsIm5hbWUiLCJyZW1vdmUiLCJDaGlja2xldGVkSW5wdXRDb250YWluZXIiLCJzZWNvbmRhcnlDaGlja2xldGVkSW5wdXQiLCJjaGlja2xldGVkSW5wdXQiLCJoYXNQbGFjZWhvbGRlciIsInNlbGVjdENvbG9yUGxhY2VIb2xkZXIiLCJzZWxlY3RDb2xvciIsIkNoaWNrbGV0ZWRJbnB1dCIsImNsYXNzTmFtZSIsImQiLCJDdXN0b21DaGlja2xldENvbXBvbmVudCIsImxlbmd0aCIsIm1hcCIsIml0ZW0iLCJpIiwiZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsU0FBUyxHQUFHO0FBQ2hCO0FBQ0FDLEVBQUFBLE9BQU8sRUFBRUMsc0JBQVVDLElBQVYsQ0FBZUMsVUFGUjtBQUdoQkMsRUFBQUEsVUFBVSxFQUFFSCxzQkFBVUMsSUFBVixDQUFlQyxVQUhYO0FBS2hCO0FBQ0FFLEVBQUFBLGFBQWEsRUFBRUosc0JBQVVLLE9BQVYsQ0FBa0JMLHNC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QVBuRCxLQVNHbEMsYUFBYSxDQUFDa0MsTUFBZCxHQUF1QixDQUF2QixHQUNDbEMsYUFBYSxDQUFDbUMsR0FBZCxDQUFrQixVQUFDQyxJQUFELEVBQU9DLENBQVA7QUFBQSxXQUNoQkosdUJBQXVCLGdCQUNyQixnQ0FBQyx1QkFBRDtBQUNFLE1BQUEsUUFBUSxFQUFFOUIsUUFEWjtBQUVFLE1BQUEsR0FBRyxZQUFLRSxhQUFhLENBQUMrQixJQUFELENBQWxCLGNBQTRCQyxDQUE1QixDQUZMO0FBR0UsTUFBQSxJQUFJLEVBQUVoQyxhQUFhLENBQUMrQixJQUFELENBSHJCO0FBSUUsTUFBQSxNQUFNLEVBQUUsZ0JBQUFFLENBQUM7QUFBQSxlQUFJdkMsVUFBVSxDQUFDcUMsSUFBRCxFQUFPRSxDQUFQLENBQWQ7QUFBQTtBQUpYLE1BRHFCLGdCQVFyQixnQ0FBQyxRQUFEO0FBQ0UsTUFBQSxRQUFRLEVBQUVuQyxRQURaO0FBRUUsTUFBQSxHQUFHLFlBQUtFLGFBQWEsQ0FBQytCLElBQUQsQ0FBbEIsY0FBNEJDLENBQTVCLENBRkw7QUFHRSxNQUFBLElBQUksRUFBRWhDLGFBQWEsQ0FBQytCLElBQUQsQ0FIckI7QUFJRSxNQUFBLE1BQU0sRUFBRSxnQkFBQUUsQ0FBQztBQUFBLGVBQUl2QyxVQUFVLENBQUNxQyxJQUFELEVBQU9FLENBQVAsQ0FBZDtBQUFBO0FBSlgsTUFUYztBQUFBLEdBQWxCLENBREQsZ0JBbUJDO0FBQU0sSUFBQSxTQUFTLFlBQUtQLFNBQUw7QUFBZixrQkFDRSxnQ0FBQywyQkFBRDtBQUFrQixJQUFBLEVBQUUsRUFBRXZCO0FBQXRCLElBREYsQ0E1QkosQ0Fic0I7QUFBQSxDQUF4Qjs7QUFnREFzQixlQUFlLENBQUNwQyxTQUFoQixHQUE0QkEsU0FBNUI7ZUFFZW9DLGUiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBEZWxldGUgZnJvbSAnLi4vaWNvbnMvZGVsZXRlJztcclxuaW1wb3J0IHtGb3JtYXR0ZWRNZXNzYWdlfSBmcm9tICdyZWFjdC1pbnRsJztcclxuXHJcbmNvbnN0IHByb3BUeXBlcyA9IHtcclxuICAvLyByZXF1aXJlZCBwcm9wZXJ0aWVzXHJcbiAgb25DbGljazogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICByZW1vdmVJdGVtOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG5cclxuICAvLyBvcHRpb25hbCBwcm9wZXJ0aWVzXHJcbiAgc2VsZWN0ZWRJdGVtczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLmFueSksXHJcbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxyXG4gIGRpc3BsYXlPcHRpb246IFByb3BUeXBlcy5mdW5jLFxyXG4gIGZvY3VzOiBQcm9wVHlwZXMuYm9vbCxcclxuICBlcnJvcjogUHJvcFR5cGVzLmJvb2wsXHJcbiAgcGxhY2Vob2xkZXI6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgaW5wdXRUaGVtZTogUHJvcFR5cGVzLnN0cmluZ1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IENoaWNrbGV0QnV0dG9uID0gc3R5bGVkLmRpdmBcclxuICBiYWNrZ3JvdW5kOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnBhbmVsQWN0aXZlQmd9O1xyXG4gIGJvcmRlci1yYWRpdXM6IDFweDtcclxuICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50ZXh0Q29sb3J9O1xyXG4gIGZvbnQtc2l6ZTogMTFweDtcclxuICBsaW5lLWhlaWdodDogMjBweDtcclxuICBtYXJnaW46IDRweCAxMHB4IDRweCAzcHg7XHJcbiAgcGFkZGluZzogMnB4IDZweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWF4LXdpZHRoOiBjYWxjKDEwMCUgLSA4cHgpO1xyXG5cclxuICA6aG92ZXIge1xyXG4gICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudGV4dENvbG9ySGx9O1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBDaGlja2xldFRhZyA9IHN0eWxlZC5zcGFuYFxyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICB3aWR0aDogMTAwJTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICA6aG92ZXIge1xyXG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgQ2hpY2tsZXQgPSAoe2Rpc2FibGVkLCBuYW1lLCByZW1vdmV9KSA9PiAoXHJcbiAgPENoaWNrbGV0QnV0dG9uPlxyXG4gICAgPENoaWNrbGV0VGFnPntuYW1lfTwvQ2hpY2tsZXRUYWc+XHJcbiAgICA8RGVsZXRlIG9uQ2xpY2s9e2Rpc2FibGVkID8gbnVsbCA6IHJlbW92ZX0gLz5cclxuICA8L0NoaWNrbGV0QnV0dG9uPlxyXG4pO1xyXG5cclxuY29uc3QgQ2hpY2tsZXRlZElucHV0Q29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICAke3Byb3BzID0+XHJcbiAgICBwcm9wcy5pbnB1dFRoZW1lID09PSAnc2Vjb25kYXJ5J1xyXG4gICAgICA/IHByb3BzLnRoZW1lLnNlY29uZGFyeUNoaWNrbGV0ZWRJbnB1dFxyXG4gICAgICA6IHByb3BzLnRoZW1lLmNoaWNrbGV0ZWRJbnB1dH1cclxuXHJcbiAgY29sb3I6ICR7cHJvcHMgPT5cclxuICAgIHByb3BzLmhhc1BsYWNlaG9sZGVyID8gcHJvcHMudGhlbWUuc2VsZWN0Q29sb3JQbGFjZUhvbGRlciA6IHByb3BzLnRoZW1lLnNlbGVjdENvbG9yfTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG5gO1xyXG5cclxuY29uc3QgQ2hpY2tsZXRlZElucHV0ID0gKHtcclxuICBmb2N1cyxcclxuICBkaXNhYmxlZCxcclxuICBlcnJvcixcclxuICBvbkNsaWNrLFxyXG4gIGNsYXNzTmFtZSxcclxuICBzZWxlY3RlZEl0ZW1zID0gW10sXHJcbiAgcGxhY2Vob2xkZXIgPSAnJyxcclxuICByZW1vdmVJdGVtLFxyXG4gIGRpc3BsYXlPcHRpb24gPSBkID0+IGQsXHJcbiAgaW5wdXRUaGVtZSxcclxuICBDdXN0b21DaGlja2xldENvbXBvbmVudFxyXG59KSA9PiAoXHJcbiAgPENoaWNrbGV0ZWRJbnB1dENvbnRhaW5lclxyXG4gICAgY2xhc3NOYW1lPXtgJHtjbGFzc05hbWV9IGNoaWNrbGV0ZWQtaW5wdXRgfVxyXG4gICAgZm9jdXM9e2ZvY3VzfVxyXG4gICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxyXG4gICAgZXJyb3I9e2Vycm9yfVxyXG4gICAgb25DbGljaz17b25DbGlja31cclxuICAgIGlucHV0VGhlbWU9e2lucHV0VGhlbWV9XHJcbiAgICBoYXNQbGFjZWhvbGRlcj17IXNlbGVjdGVkSXRlbXMgfHwgIXNlbGVjdGVkSXRlbXMubGVuZ3RofVxyXG4gID5cclxuICAgIHtzZWxlY3RlZEl0ZW1zLmxlbmd0aCA+IDAgPyAoXHJcbiAgICAgIHNlbGVjdGVkSXRlbXMubWFwKChpdGVtLCBpKSA9PlxyXG4gICAgICAgIEN1c3RvbUNoaWNrbGV0Q29tcG9uZW50ID8gKFxyXG4gICAgICAgICAgPEN1c3RvbUNoaWNrbGV0Q29tcG9uZW50XHJcbiAgICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cclxuICAgICAgICAgICAga2V5PXtgJHtkaXNwbGF5T3B0aW9uKGl0ZW0pfV8ke2l9YH1cclxuICAgICAgICAgICAgbmFtZT17ZGlzcGxheU9wdGlvbihpdGVtKX1cclxuICAgICAgICAgICAgcmVtb3ZlPXtlID0+IHJlbW92ZUl0ZW0oaXRlbSwgZSl9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8Q2hpY2tsZXRcclxuICAgICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxyXG4gICAgICAgICAgICBrZXk9e2Ake2Rpc3BsYXlPcHRpb24oaXRlbSl9XyR7aX1gfVxyXG4gICAgICAgICAgICBuYW1lPXtkaXNwbGF5T3B0aW9uKGl0ZW0pfVxyXG4gICAgICAgICAgICByZW1vdmU9e2UgPT4gcmVtb3ZlSXRlbShpdGVtLCBlKX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKVxyXG4gICAgICApXHJcbiAgICApIDogKFxyXG4gICAgICA8c3BhbiBjbGFzc05hbWU9e2Ake2NsYXNzTmFtZX0gY2hpY2tsZXRlZC1pbnB1dF9fcGxhY2Vob2xkZXJgfT5cclxuICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZSBpZD17cGxhY2Vob2xkZXJ9IC8+XHJcbiAgICAgIDwvc3Bhbj5cclxuICAgICl9XHJcbiAgPC9DaGlja2xldGVkSW5wdXRDb250YWluZXI+XHJcbik7XHJcblxyXG5DaGlja2xldGVkSW5wdXQucHJvcFR5cGVzID0gcHJvcFR5cGVzO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2hpY2tsZXRlZElucHV0O1xyXG4iXX0=