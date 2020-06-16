"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

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

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _reactSortableHoc = require("react-sortable-hoc");

var _portaled = _interopRequireDefault(require("../../common/portaled"));

var _styledComponents2 = require("../../common/styled-components");

var _icons = require("../../common/icons");

var _colorPalette = _interopRequireDefault(require("./color-palette"));

var _customPicker = _interopRequireDefault(require("./custom-picker"));

var _dataUtils = require("../../../utils/data-utils");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _templateObject9() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  margin-left: 12px;\n  input {\n    color: ", ";\n    font-size: 10px;\n  }\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  margin-top: 11px;\n  display: flex;\n  direction: rtl;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  padding: 0 8px;\n  :hover {\n    background-color: ", ";\n    cursor: pointer;\n  }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  background-color: ", ";\n  width: 32px;\n  height: 18px;\n  display: inline-block;\n  :hover {\n    box-shadow: ", ";\n    cursor: pointer;\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  width: calc(100% - 16px);\n  height: 1px;\n  background-color: ", ";\n  margin-top: 8px;\n  margin-left: 8px;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  color: ", ";\n  svg {\n    :hover {\n      color: ", ";\n    }\n  }\n  height: 12px;\n  margin-left: auto;\n  margin-right: 12px;\n  :hover {\n    cursor: pointer;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  align-items: center;\n  opacity: 0;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  align-items: center;\n  padding-top: 6px;\n  padding-bottom: 6px;\n  z-index: ", ";\n\n  :not(.sorting) {\n    :hover {\n      background-color: ", ";\n      ", "\n    }\n  }\n\n  &.sorting-colors {\n    background-color: ", ";\n    ", "\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  .layer__drag-handle {\n    color: ", ";\n    opacity: 1;\n    cursor: move;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var dragHandleActive = (0, _styledComponents.css)(_templateObject(), function (props) {
  return props.theme.textColorHl;
});

var StyledSortableItem = _styledComponents["default"].div(_templateObject2(), function (props) {
  return props.theme.dropdownWrapperZ + 1;
}, function (props) {
  return props.theme.panelBackgroundHover;
}, dragHandleActive, function (props) {
  return props.theme.panelBackgroundHover;
}, dragHandleActive);

var StyledDragHandle = _styledComponents["default"].div(_templateObject3());

var StyledTrash = _styledComponents["default"].div(_templateObject4(), function (props) {
  return props.theme.textColor;
}, function (props) {
  return props.theme.subtextColorActive;
});

var StyledLine = _styledComponents["default"].div(_templateObject5(), function (props) {
  return props.theme.labelColor;
});

var StyledSwatch = _styledComponents["default"].div.attrs({
  className: 'custom-palette__swatch'
})(_templateObject6(), function (props) {
  return props.color;
}, function (props) {
  return props.theme.boxShadow;
});

var StyledColorRange = _styledComponents["default"].div(_templateObject7(), function (props) {
  return props.theme.panelBackgroundHover;
});

var StyledButtonContainer = _styledComponents["default"].div(_templateObject8());

var StyledInlineInput = _styledComponents["default"].div(_templateObject9(), function (props) {
  return props.theme.textColorHl;
});

var SortableItem = (0, _reactSortableHoc.sortableElement)(function (_ref) {
  var children = _ref.children,
      isSorting = _ref.isSorting;
  return /*#__PURE__*/_react["default"].createElement(StyledSortableItem, {
    className: (0, _classnames["default"])('custom-palette__sortable-items', {
      sorting: isSorting
    })
  }, children);
});
var SortableContainer = (0, _reactSortableHoc.sortableContainer)(function (_ref2) {
  var children = _ref2.children;
  return /*#__PURE__*/_react["default"].createElement("div", null, children);
});
var DragHandle = (0, _reactSortableHoc.sortableHandle)(function (_ref3) {
  var className = _ref3.className,
      children = _ref3.children;
  return /*#__PURE__*/_react["default"].createElement(StyledDragHandle, {
    className: className
  }, children);
});

var CustomPalette = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(CustomPalette, _Component);

  var _super = _createSuper(CustomPalette);

  function CustomPalette() {
    var _this;

    (0, _classCallCheck2["default"])(this, CustomPalette);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      isSorting: false
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "root", /*#__PURE__*/(0, _react.createRef)());
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onPickerUpdate", function (color) {
      var colors = _this.props.customPalette.colors;
      var newColors = (0, _toConsumableArray2["default"])(colors);
      newColors[_this.props.showSketcher] = color.hex;

      _this._setColorPaletteUI(newColors);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onColorDelete", function (index) {
      var colors = _this.props.customPalette.colors;
      var newColors = (0, _toConsumableArray2["default"])(colors);

      if (newColors.length > 1) {
        newColors.splice(index, 1);
      }

      _this._setColorPaletteUI(newColors);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onColorAdd", function () {
      var colors = _this.props.customPalette.colors; // add the last color

      var newColors = [].concat((0, _toConsumableArray2["default"])(colors), [colors[colors.length - 1]]);

      _this._setColorPaletteUI(newColors);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onSwatchClick", function (index) {
      _this.props.onToggleSketcher(index);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onSwatchClose", function () {
      _this.props.onToggleSketcher(false);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onApply", function (event) {
      event.stopPropagation();
      event.preventDefault();

      _this.props.onCancel();

      _this.props.onApply(_this.props.customPalette, event);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onSortEnd", function (_ref4) {
      var oldIndex = _ref4.oldIndex,
          newIndex = _ref4.newIndex;
      var colors = _this.props.customPalette.colors;
      var newColors = (0, _dataUtils.arrayMove)(colors, oldIndex, newIndex);

      _this._setColorPaletteUI(newColors);

      _this.setState({
        isSorting: false
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onSortStart", function () {
      _this.setState({
        isSorting: true
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_inputColorHex", function (index, _ref5) {
      var value = _ref5.target.value;
      var colors = _this.props.customPalette.colors;
      var newColors = (0, _toConsumableArray2["default"])(colors);
      newColors[index] = value.toUpperCase();

      _this._setColorPaletteUI(newColors);
    });
    return _this;
  }

  (0, _createClass2["default"])(CustomPalette, [{
    key: "_setColorPaletteUI",
    value: function _setColorPaletteUI(colors) {
      this.props.setCustomPalette({
        colors: colors
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var colors = this.props.customPalette.colors;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "custom-palette-panel",
        ref: this.root
      }, /*#__PURE__*/_react["default"].createElement(StyledColorRange, null, /*#__PURE__*/_react["default"].createElement(_colorPalette["default"], {
        colors: colors
      })), /*#__PURE__*/_react["default"].createElement(SortableContainer, {
        className: "custom-palette-container",
        onSortEnd: this._onSortEnd,
        onSortStart: this._onSortStart,
        lockAxis: "y",
        helperClass: "sorting-colors",
        useDragHandle: true
      }, colors.map(function (color, index) {
        return /*#__PURE__*/_react["default"].createElement(SortableItem, {
          key: index,
          index: index,
          isSorting: _this2.state.isSorting
        }, /*#__PURE__*/_react["default"].createElement(DragHandle, {
          className: "layer__drag-handle"
        }, /*#__PURE__*/_react["default"].createElement(_icons.VertDots, {
          height: "20px"
        })), /*#__PURE__*/_react["default"].createElement(StyledSwatch, {
          color: color,
          onClick: function onClick(e) {
            return _this2._onSwatchClick(index, e);
          }
        }), /*#__PURE__*/_react["default"].createElement(StyledInlineInput, null, /*#__PURE__*/_react["default"].createElement(_styledComponents2.InlineInput, {
          type: "text",
          className: "custom-palette-hex__input",
          value: color.toUpperCase(),
          onClick: function onClick(e) {
            e.stopPropagation();
          },
          onChange: function onChange(e) {
            return _this2._inputColorHex(index, e);
          },
          id: "input-layer-label"
        })), /*#__PURE__*/_react["default"].createElement(StyledTrash, {
          onClick: function onClick() {
            return _this2._onColorDelete(index);
          }
        }, /*#__PURE__*/_react["default"].createElement(_icons.Trash, {
          className: "trashbin"
        })));
      })), /*#__PURE__*/_react["default"].createElement(_styledComponents2.Button, {
        className: "add-step__button",
        link: true,
        onClick: this._onColorAdd
      }, "+ Add Step"), /*#__PURE__*/_react["default"].createElement(StyledLine, null), /*#__PURE__*/_react["default"].createElement(StyledButtonContainer, null, /*#__PURE__*/_react["default"].createElement(_styledComponents2.Button, {
        className: "confirm-apply__button",
        link: true,
        onClick: this._onApply
      }, "Confirm"), /*#__PURE__*/_react["default"].createElement(_styledComponents2.Button, {
        link: true,
        onClick: this.props.onCancel
      }, "Cancel")), /*#__PURE__*/_react["default"].createElement(_portaled["default"], {
        isOpened: this.props.showSketcher !== false,
        left: 280,
        top: -300
      }, /*#__PURE__*/_react["default"].createElement(_customPicker["default"], {
        color: colors[this.props.showSketcher],
        onChange: this._onPickerUpdate,
        onSwatchClose: this._onSwatchClose
      })));
    }
  }]);
  return CustomPalette;
}(_react.Component);

(0, _defineProperty2["default"])(CustomPalette, "propTypes", {
  customPalette: _propTypes["default"].shape({
    name: _propTypes["default"].string,
    type: _propTypes["default"].string,
    category: _propTypes["default"].string,
    colors: _propTypes["default"].arrayOf(_propTypes["default"].string)
  }),
  setCustomPalette: _propTypes["default"].func,
  showSketcher: _propTypes["default"].oneOfType([_propTypes["default"].bool, _propTypes["default"].number])
});
var _default = CustomPalette;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NpZGUtcGFuZWwvbGF5ZXItcGFuZWwvY3VzdG9tLXBhbGV0dGUuanMiXSwibmFtZXMiOlsiZHJhZ0hhbmRsZUFjdGl2ZSIsImNzcyIsInByb3BzIiwidGhlbWUiLCJ0ZXh0Q29sb3JIbCIsIlN0eWxlZFNvcnRhYmxlSXRlbSIsInN0eWxlZCIsImRpdiIsImRyb3Bkb3duV3JhcHBlcloiLCJwYW5lbEJhY2tncm91bmRIb3ZlciIsIlN0eWxlZERyYWdIYW5kbGUiLCJTdHlsZWRUcmFzaCIsInRleHRDb2xvciIsInN1YnRleHRDb2xvckFjdGl2ZSIsIlN0eWxlZExpbmUiLCJsYWJlbENvbG9yIiwiU3R5bGVkU3dhdGNoIiwiYXR0cnMiLCJjbGFzc05hbWUiLCJjb2xvciIsImJveFNoYWRvdyIsIlN0eWxlZENvbG9yUmFuZ2UiLCJTdHlsZWRCdXR0b25Db250YWluZXIiLCJTdHlsZWRJbmxpbmVJbnB1dCIsIlNvcnRhYmxlSXRlbSIsImNoaWxkcmVuIiwiaXNTb3J0aW5nIiwic29ydGluZyIsIlNvcnRhYmxlQ29udGFpbmVyIiwiRHJhZ0hhbmRsZSIsIkN1c3RvbVBhbGV0dGUiLCJjb2xvcnMiLCJjdXN0b21QYWxldHRlIiwibmV3Q29sb3JzIiwic2hvd1NrZXRjaGVyIiwiaGV4IiwiX3NldENvbG9yUGFsZXR0ZVVJIiwiaW5kZXgiLCJsZW5ndGgiLCJzcGxpY2UiLCJvblRvZ2dsZVNrZXRjaGVyIiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJwcmV2ZW50RGVmYXVsdCIsIm9uQ2FuY2VsIiwib25BcHBseSIsIm9sZEluZGV4IiwibmV3SW5kZXgiLCJzZXRTdGF0ZSIsInZhbHVlIiwidGFyZ2V0IiwidG9VcHBlckNhc2UiLCJzZXRDdXN0b21QYWxldHRlIiwicm9vdCIsIl9vblNvcnRFbmQiLCJfb25Tb3J0U3RhcnQiLCJtYXAiLCJzdGF0ZSIsImUiLCJfb25Td2F0Y2hDbGljayIsIl9pbnB1dENvbG9ySGV4IiwiX29uQ29sb3JEZWxldGUiLCJfb25Db2xvckFkZCIsIl9vbkFwcGx5IiwiX29uUGlja2VyVXBkYXRlIiwiX29uU3dhdGNoQ2xvc2UiLCJDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJzaGFwZSIsIm5hbWUiLCJzdHJpbmciLCJ0eXBlIiwiY2F0ZWdvcnkiLCJhcnJheU9mIiwiZnVuYyIsIm9uZU9mVHlwZSIsImJvb2wiLCJudW1iZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxnQkFBZ0IsT0FBR0MscUJBQUgscUJBRVQsVUFBQUMsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFoQjtBQUFBLENBRkksQ0FBdEI7O0FBUUEsSUFBTUMsa0JBQWtCLEdBQUdDLDZCQUFPQyxHQUFWLHFCQUtYLFVBQUFMLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUssZ0JBQVosR0FBK0IsQ0FBbkM7QUFBQSxDQUxNLEVBU0UsVUFBQU4sS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZTSxvQkFBaEI7QUFBQSxDQVRQLEVBVWhCVCxnQkFWZ0IsRUFlQSxVQUFBRSxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlNLG9CQUFoQjtBQUFBLENBZkwsRUFnQmxCVCxnQkFoQmtCLENBQXhCOztBQW9CQSxJQUFNVSxnQkFBZ0IsR0FBR0osNkJBQU9DLEdBQVYsb0JBQXRCOztBQU1BLElBQU1JLFdBQVcsR0FBR0wsNkJBQU9DLEdBQVYscUJBQ04sVUFBQUwsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FB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Q29weXJpZ2h0IChjKSAyMDIwIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50LCBjcmVhdGVSZWZ9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBzdHlsZWQsIHtjc3N9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHtzb3J0YWJsZUNvbnRhaW5lciwgc29ydGFibGVFbGVtZW50LCBzb3J0YWJsZUhhbmRsZX0gZnJvbSAncmVhY3Qtc29ydGFibGUtaG9jJztcclxuaW1wb3J0IFBvcnRhbGVkIGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL3BvcnRhbGVkJztcclxuXHJcbmltcG9ydCB7QnV0dG9uLCBJbmxpbmVJbnB1dH0gZnJvbSAnY29tcG9uZW50cy9jb21tb24vc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQge1ZlcnREb3RzLCBUcmFzaH0gZnJvbSAnY29tcG9uZW50cy9jb21tb24vaWNvbnMnO1xyXG5pbXBvcnQgQ29sb3JQYWxldHRlIGZyb20gJy4vY29sb3ItcGFsZXR0ZSc7XHJcbmltcG9ydCBDdXN0b21QaWNrZXIgZnJvbSAnLi9jdXN0b20tcGlja2VyJztcclxuaW1wb3J0IHthcnJheU1vdmV9IGZyb20gJ3V0aWxzL2RhdGEtdXRpbHMnO1xyXG5cclxuY29uc3QgZHJhZ0hhbmRsZUFjdGl2ZSA9IGNzc2BcclxuICAubGF5ZXJfX2RyYWctaGFuZGxlIHtcclxuICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRleHRDb2xvckhsfTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBjdXJzb3I6IG1vdmU7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgU3R5bGVkU29ydGFibGVJdGVtID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZy10b3A6IDZweDtcclxuICBwYWRkaW5nLWJvdHRvbTogNnB4O1xyXG4gIHotaW5kZXg6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuZHJvcGRvd25XcmFwcGVyWiArIDF9O1xyXG5cclxuICA6bm90KC5zb3J0aW5nKSB7XHJcbiAgICA6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnBhbmVsQmFja2dyb3VuZEhvdmVyfTtcclxuICAgICAgJHtkcmFnSGFuZGxlQWN0aXZlfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJi5zb3J0aW5nLWNvbG9ycyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnBhbmVsQmFja2dyb3VuZEhvdmVyfTtcclxuICAgICR7ZHJhZ0hhbmRsZUFjdGl2ZX1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBTdHlsZWREcmFnSGFuZGxlID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgb3BhY2l0eTogMDtcclxuYDtcclxuXHJcbmNvbnN0IFN0eWxlZFRyYXNoID0gc3R5bGVkLmRpdmBcclxuICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50ZXh0Q29sb3J9O1xyXG4gIHN2ZyB7XHJcbiAgICA6aG92ZXIge1xyXG4gICAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5zdWJ0ZXh0Q29sb3JBY3RpdmV9O1xyXG4gICAgfVxyXG4gIH1cclxuICBoZWlnaHQ6IDEycHg7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xyXG4gIDpob3ZlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgU3R5bGVkTGluZSA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDE2cHgpO1xyXG4gIGhlaWdodDogMXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUubGFiZWxDb2xvcn07XHJcbiAgbWFyZ2luLXRvcDogOHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbmA7XHJcblxyXG5jb25zdCBTdHlsZWRTd2F0Y2ggPSBzdHlsZWQuZGl2LmF0dHJzKHtcclxuICBjbGFzc05hbWU6ICdjdXN0b20tcGFsZXR0ZV9fc3dhdGNoJ1xyXG59KWBcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLmNvbG9yfTtcclxuICB3aWR0aDogMzJweDtcclxuICBoZWlnaHQ6IDE4cHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIDpob3ZlciB7XHJcbiAgICBib3gtc2hhZG93OiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJveFNoYWRvd307XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgU3R5bGVkQ29sb3JSYW5nZSA9IHN0eWxlZC5kaXZgXHJcbiAgcGFkZGluZzogMCA4cHg7XHJcbiAgOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUucGFuZWxCYWNrZ3JvdW5kSG92ZXJ9O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IFN0eWxlZEJ1dHRvbkNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgbWFyZ2luLXRvcDogMTFweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGRpcmVjdGlvbjogcnRsO1xyXG5gO1xyXG5cclxuY29uc3QgU3R5bGVkSW5saW5lSW5wdXQgPSBzdHlsZWQuZGl2YFxyXG4gIG1hcmdpbi1sZWZ0OiAxMnB4O1xyXG4gIGlucHV0IHtcclxuICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRleHRDb2xvckhsfTtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBTb3J0YWJsZUl0ZW0gPSBzb3J0YWJsZUVsZW1lbnQoKHtjaGlsZHJlbiwgaXNTb3J0aW5nfSkgPT4gKFxyXG4gIDxTdHlsZWRTb3J0YWJsZUl0ZW1cclxuICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcygnY3VzdG9tLXBhbGV0dGVfX3NvcnRhYmxlLWl0ZW1zJywge3NvcnRpbmc6IGlzU29ydGluZ30pfVxyXG4gID5cclxuICAgIHtjaGlsZHJlbn1cclxuICA8L1N0eWxlZFNvcnRhYmxlSXRlbT5cclxuKSk7XHJcblxyXG5jb25zdCBTb3J0YWJsZUNvbnRhaW5lciA9IHNvcnRhYmxlQ29udGFpbmVyKCh7Y2hpbGRyZW59KSA9PiA8ZGl2PntjaGlsZHJlbn08L2Rpdj4pO1xyXG5cclxuY29uc3QgRHJhZ0hhbmRsZSA9IHNvcnRhYmxlSGFuZGxlKCh7Y2xhc3NOYW1lLCBjaGlsZHJlbn0pID0+IChcclxuICA8U3R5bGVkRHJhZ0hhbmRsZSBjbGFzc05hbWU9e2NsYXNzTmFtZX0+e2NoaWxkcmVufTwvU3R5bGVkRHJhZ0hhbmRsZT5cclxuKSk7XHJcblxyXG5jbGFzcyBDdXN0b21QYWxldHRlIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xyXG4gICAgY3VzdG9tUGFsZXR0ZTogUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgICAgbmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgdHlwZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgY2F0ZWdvcnk6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgIGNvbG9yczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnN0cmluZylcclxuICAgIH0pLFxyXG4gICAgc2V0Q3VzdG9tUGFsZXR0ZTogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgICBzaG93U2tldGNoZXI6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5ib29sLCBQcm9wVHlwZXMubnVtYmVyXSlcclxuICB9O1xyXG5cclxuICBzdGF0ZSA9IHtcclxuICAgIGlzU29ydGluZzogZmFsc2VcclxuICB9O1xyXG5cclxuICByb290ID0gY3JlYXRlUmVmKCk7XHJcblxyXG4gIF9zZXRDb2xvclBhbGV0dGVVSShjb2xvcnMpIHtcclxuICAgIHRoaXMucHJvcHMuc2V0Q3VzdG9tUGFsZXR0ZSh7XHJcbiAgICAgIGNvbG9yc1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBfb25QaWNrZXJVcGRhdGUgPSBjb2xvciA9PiB7XHJcbiAgICBjb25zdCB7Y29sb3JzfSA9IHRoaXMucHJvcHMuY3VzdG9tUGFsZXR0ZTtcclxuICAgIGNvbnN0IG5ld0NvbG9ycyA9IFsuLi5jb2xvcnNdO1xyXG4gICAgbmV3Q29sb3JzW3RoaXMucHJvcHMuc2hvd1NrZXRjaGVyXSA9IGNvbG9yLmhleDtcclxuICAgIHRoaXMuX3NldENvbG9yUGFsZXR0ZVVJKG5ld0NvbG9ycyk7XHJcbiAgfTtcclxuXHJcbiAgX29uQ29sb3JEZWxldGUgPSBpbmRleCA9PiB7XHJcbiAgICBjb25zdCB7Y29sb3JzfSA9IHRoaXMucHJvcHMuY3VzdG9tUGFsZXR0ZTtcclxuICAgIGNvbnN0IG5ld0NvbG9ycyA9IFsuLi5jb2xvcnNdO1xyXG4gICAgaWYgKG5ld0NvbG9ycy5sZW5ndGggPiAxKSB7XHJcbiAgICAgIG5ld0NvbG9ycy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5fc2V0Q29sb3JQYWxldHRlVUkobmV3Q29sb3JzKTtcclxuICB9O1xyXG5cclxuICBfb25Db2xvckFkZCA9ICgpID0+IHtcclxuICAgIGNvbnN0IHtjb2xvcnN9ID0gdGhpcy5wcm9wcy5jdXN0b21QYWxldHRlO1xyXG4gICAgLy8gYWRkIHRoZSBsYXN0IGNvbG9yXHJcbiAgICBjb25zdCBuZXdDb2xvcnMgPSBbLi4uY29sb3JzLCBjb2xvcnNbY29sb3JzLmxlbmd0aCAtIDFdXTtcclxuICAgIHRoaXMuX3NldENvbG9yUGFsZXR0ZVVJKG5ld0NvbG9ycyk7XHJcbiAgfTtcclxuXHJcbiAgX29uU3dhdGNoQ2xpY2sgPSBpbmRleCA9PiB7XHJcbiAgICB0aGlzLnByb3BzLm9uVG9nZ2xlU2tldGNoZXIoaW5kZXgpO1xyXG4gIH07XHJcblxyXG4gIF9vblN3YXRjaENsb3NlID0gKCkgPT4ge1xyXG4gICAgdGhpcy5wcm9wcy5vblRvZ2dsZVNrZXRjaGVyKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICBfb25BcHBseSA9IGV2ZW50ID0+IHtcclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRoaXMucHJvcHMub25DYW5jZWwoKTtcclxuICAgIHRoaXMucHJvcHMub25BcHBseSh0aGlzLnByb3BzLmN1c3RvbVBhbGV0dGUsIGV2ZW50KTtcclxuICB9O1xyXG5cclxuICBfb25Tb3J0RW5kID0gKHtvbGRJbmRleCwgbmV3SW5kZXh9KSA9PiB7XHJcbiAgICBjb25zdCB7Y29sb3JzfSA9IHRoaXMucHJvcHMuY3VzdG9tUGFsZXR0ZTtcclxuICAgIGNvbnN0IG5ld0NvbG9ycyA9IGFycmF5TW92ZShjb2xvcnMsIG9sZEluZGV4LCBuZXdJbmRleCk7XHJcbiAgICB0aGlzLl9zZXRDb2xvclBhbGV0dGVVSShuZXdDb2xvcnMpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7aXNTb3J0aW5nOiBmYWxzZX0pO1xyXG4gIH07XHJcblxyXG4gIF9vblNvcnRTdGFydCA9ICgpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe2lzU29ydGluZzogdHJ1ZX0pO1xyXG4gIH07XHJcblxyXG4gIF9pbnB1dENvbG9ySGV4ID0gKGluZGV4LCB7dGFyZ2V0OiB7dmFsdWV9fSkgPT4ge1xyXG4gICAgY29uc3Qge2NvbG9yc30gPSB0aGlzLnByb3BzLmN1c3RvbVBhbGV0dGU7XHJcbiAgICBjb25zdCBuZXdDb2xvcnMgPSBbLi4uY29sb3JzXTtcclxuICAgIG5ld0NvbG9yc1tpbmRleF0gPSB2YWx1ZS50b1VwcGVyQ2FzZSgpO1xyXG4gICAgdGhpcy5fc2V0Q29sb3JQYWxldHRlVUkobmV3Q29sb3JzKTtcclxuICB9O1xyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7Y29sb3JzfSA9IHRoaXMucHJvcHMuY3VzdG9tUGFsZXR0ZTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImN1c3RvbS1wYWxldHRlLXBhbmVsXCIgcmVmPXt0aGlzLnJvb3R9PlxyXG4gICAgICAgIDxTdHlsZWRDb2xvclJhbmdlPlxyXG4gICAgICAgICAgPENvbG9yUGFsZXR0ZSBjb2xvcnM9e2NvbG9yc30gLz5cclxuICAgICAgICA8L1N0eWxlZENvbG9yUmFuZ2U+XHJcbiAgICAgICAgPFNvcnRhYmxlQ29udGFpbmVyXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJjdXN0b20tcGFsZXR0ZS1jb250YWluZXJcIlxyXG4gICAgICAgICAgb25Tb3J0RW5kPXt0aGlzLl9vblNvcnRFbmR9XHJcbiAgICAgICAgICBvblNvcnRTdGFydD17dGhpcy5fb25Tb3J0U3RhcnR9XHJcbiAgICAgICAgICBsb2NrQXhpcz1cInlcIlxyXG4gICAgICAgICAgaGVscGVyQ2xhc3M9XCJzb3J0aW5nLWNvbG9yc1wiXHJcbiAgICAgICAgICB1c2VEcmFnSGFuZGxlXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge2NvbG9ycy5tYXAoKGNvbG9yLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICA8U29ydGFibGVJdGVtIGtleT17aW5kZXh9IGluZGV4PXtpbmRleH0gaXNTb3J0aW5nPXt0aGlzLnN0YXRlLmlzU29ydGluZ30+XHJcbiAgICAgICAgICAgICAgPERyYWdIYW5kbGUgY2xhc3NOYW1lPVwibGF5ZXJfX2RyYWctaGFuZGxlXCI+XHJcbiAgICAgICAgICAgICAgICA8VmVydERvdHMgaGVpZ2h0PVwiMjBweFwiIC8+XHJcbiAgICAgICAgICAgICAgPC9EcmFnSGFuZGxlPlxyXG4gICAgICAgICAgICAgIDxTdHlsZWRTd2F0Y2ggY29sb3I9e2NvbG9yfSBvbkNsaWNrPXtlID0+IHRoaXMuX29uU3dhdGNoQ2xpY2soaW5kZXgsIGUpfSAvPlxyXG4gICAgICAgICAgICAgIDxTdHlsZWRJbmxpbmVJbnB1dD5cclxuICAgICAgICAgICAgICAgIDxJbmxpbmVJbnB1dFxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImN1c3RvbS1wYWxldHRlLWhleF9faW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17Y29sb3IudG9VcHBlckNhc2UoKX1cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17ZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gdGhpcy5faW5wdXRDb2xvckhleChpbmRleCwgZSl9XHJcbiAgICAgICAgICAgICAgICAgIGlkPVwiaW5wdXQtbGF5ZXItbGFiZWxcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L1N0eWxlZElubGluZUlucHV0PlxyXG4gICAgICAgICAgICAgIDxTdHlsZWRUcmFzaCBvbkNsaWNrPXsoKSA9PiB0aGlzLl9vbkNvbG9yRGVsZXRlKGluZGV4KX0+XHJcbiAgICAgICAgICAgICAgICA8VHJhc2ggY2xhc3NOYW1lPVwidHJhc2hiaW5cIiAvPlxyXG4gICAgICAgICAgICAgIDwvU3R5bGVkVHJhc2g+XHJcbiAgICAgICAgICAgIDwvU29ydGFibGVJdGVtPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9Tb3J0YWJsZUNvbnRhaW5lcj5cclxuICAgICAgICB7LyogQWRkIFN0ZXAgQnV0dG9uICovfVxyXG4gICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwiYWRkLXN0ZXBfX2J1dHRvblwiIGxpbmsgb25DbGljaz17dGhpcy5fb25Db2xvckFkZH0+XHJcbiAgICAgICAgICArIEFkZCBTdGVwXHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPFN0eWxlZExpbmUgLz5cclxuICAgICAgICB7LyogQ2FuY2VsIG9yIENvbmZpcm0gQnV0dG9ucyAqL31cclxuICAgICAgICA8U3R5bGVkQnV0dG9uQ29udGFpbmVyPlxyXG4gICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJjb25maXJtLWFwcGx5X19idXR0b25cIiBsaW5rIG9uQ2xpY2s9e3RoaXMuX29uQXBwbHl9PlxyXG4gICAgICAgICAgICBDb25maXJtXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDxCdXR0b24gbGluayBvbkNsaWNrPXt0aGlzLnByb3BzLm9uQ2FuY2VsfT5cclxuICAgICAgICAgICAgQ2FuY2VsXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L1N0eWxlZEJ1dHRvbkNvbnRhaW5lcj5cclxuXHJcbiAgICAgICAgPFBvcnRhbGVkIGlzT3BlbmVkPXt0aGlzLnByb3BzLnNob3dTa2V0Y2hlciAhPT0gZmFsc2V9IGxlZnQ9ezI4MH0gdG9wPXstMzAwfT5cclxuICAgICAgICAgIDxDdXN0b21QaWNrZXJcclxuICAgICAgICAgICAgY29sb3I9e2NvbG9yc1t0aGlzLnByb3BzLnNob3dTa2V0Y2hlcl19XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLl9vblBpY2tlclVwZGF0ZX1cclxuICAgICAgICAgICAgb25Td2F0Y2hDbG9zZT17dGhpcy5fb25Td2F0Y2hDbG9zZX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9Qb3J0YWxlZD5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ3VzdG9tUGFsZXR0ZTtcclxuIl19