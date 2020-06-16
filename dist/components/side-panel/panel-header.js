"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.CloudStorageDropdownFactory = exports.SaveExportDropdownFactory = exports.PanelHeaderDropdownFactory = exports.PanelAction = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reselect = require("reselect");

var _styledComponents2 = require("../common/styled-components");

var _logo = _interopRequireDefault(require("../common/logo"));

var _icons = require("../common/icons");

var _panelDropdown = _interopRequireDefault(require("./panel-dropdown"));

var _toolbar = _interopRequireDefault(require("../common/toolbar"));

var _toolbarItem = _interopRequireDefault(require("../common/toolbar-item"));

var _reactIntl = require("react-intl");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _templateObject5() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  position: absolute;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  align-items: center;\n  border-radius: 2px;\n  color: ", ";\n  display: flex;\n  height: 26px;\n  justify-content: space-between;\n  margin-left: 4px;\n  padding: 5px;\n  font-weight: bold;\n  p {\n    display: inline-block;\n    margin-right: 6px;\n  }\n  a {\n    height: 20px;\n  }\n\n  :hover {\n    cursor: pointer;\n    color: ", ";\n\n    a {\n      color: ", ";\n    }\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 16px;\n  width: 100%;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  background-color: ", ";\n  padding: 12px 16px 0 16px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var StyledPanelHeader = _styledComponents["default"].div.attrs({
  className: 'side-side-panel__header'
})(_templateObject(), function (props) {
  return props.theme.sidePanelHeaderBg;
});

var StyledPanelHeaderTop = _styledComponents["default"].div.attrs({
  className: 'side-panel__header__top'
})(_templateObject2());

var StyledPanelTopActions = _styledComponents["default"].div.attrs({
  className: 'side-panel__top__actions'
})(_templateObject3());

var StyledPanelAction = _styledComponents["default"].div.attrs({
  className: 'side-panel__panel-header__action'
})(_templateObject4(), function (props) {
  return props.active ? props.theme.textColorHl : props.theme.subtextColor;
}, function (props) {
  return props.theme.textColorHl;
}, function (props) {
  return props.theme.textColorHl;
});

var StyledToolbar = (0, _styledComponents["default"])(_toolbar["default"])(_templateObject5());

var PanelAction = function PanelAction(_ref) {
  var item = _ref.item,
      onClick = _ref.onClick;
  return /*#__PURE__*/_react["default"].createElement(StyledPanelAction, {
    "data-tip": true,
    "data-for": "".concat(item.id, "-action"),
    onClick: onClick
  }, item.label ? /*#__PURE__*/_react["default"].createElement("p", null, item.label) : null, /*#__PURE__*/_react["default"].createElement("a", {
    target: item.blank ? '_blank' : '',
    href: item.href
  }, /*#__PURE__*/_react["default"].createElement(item.iconComponent, {
    height: "20px"
  })), item.tooltip ? /*#__PURE__*/_react["default"].createElement(_styledComponents2.Tooltip, {
    id: "".concat(item.id, "-action"),
    place: "bottom",
    delayShow: 500,
    effect: "solid"
  }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: item.tooltip
  })) : null);
};

exports.PanelAction = PanelAction;

var PanelHeaderDropdownFactory = function PanelHeaderDropdownFactory() {
  var PanelHeaderDropdown = function PanelHeaderDropdown(_ref2) {
    var items = _ref2.items,
        show = _ref2.show,
        onClose = _ref2.onClose,
        id = _ref2.id;
    return /*#__PURE__*/_react["default"].createElement(StyledToolbar, {
      show: show,
      className: "".concat(id, "-dropdown")
    }, /*#__PURE__*/_react["default"].createElement(_panelDropdown["default"], {
      className: "panel-header-dropdown__inner",
      show: show,
      onClose: onClose
    }, items.map(function (item) {
      return /*#__PURE__*/_react["default"].createElement(_toolbarItem["default"], {
        id: item.key,
        key: item.key,
        label: item.label,
        icon: item.icon,
        onClick: item.onClick,
        onClose: onClose
      });
    })));
  };

  return PanelHeaderDropdown;
};

exports.PanelHeaderDropdownFactory = PanelHeaderDropdownFactory;

var getDropdownItemsSelector = function getDropdownItemsSelector() {
  return (0, _reselect.createSelector)(function (props) {
    return props;
  }, function (props) {
    return props.items.map(function (t) {
      return _objectSpread(_objectSpread({}, t), {}, {
        onClick: t.onClick && t.onClick(props) ? t.onClick(props) : null
      });
    }).filter(function (l) {
      return l.onClick;
    });
  });
};

var SaveExportDropdownFactory = function SaveExportDropdownFactory(PanelHeaderDropdown) {
  var dropdownItemsSelector = getDropdownItemsSelector();

  var SaveExportDropdown = function SaveExportDropdown(props) {
    return /*#__PURE__*/_react["default"].createElement(PanelHeaderDropdown, {
      items: dropdownItemsSelector(props),
      show: props.show,
      onClose: props.onClose,
      id: "save-export"
    });
  };

  SaveExportDropdown.defaultProps = {
    items: [{
      label: 'toolbar.exportImage',
      icon: _icons.Picture,
      key: 'image',
      onClick: function onClick(props) {
        return props.onExportImage;
      }
    }, {
      label: 'toolbar.exportData',
      icon: _icons.DataTable,
      key: 'data',
      onClick: function onClick(props) {
        return props.onExportData;
      }
    }, {
      label: 'toolbar.exportMap',
      icon: _icons.Map,
      key: 'map',
      onClick: function onClick(props) {
        return props.onExportMap;
      }
    }, {
      label: 'toolbar.saveMap',
      icon: _icons.Save2,
      key: 'save',
      onClick: function onClick(props) {
        return props.onSaveMap;
      }
    }, {
      label: 'toolbar.shareMapURL',
      icon: _icons.Share,
      key: 'share',
      onClick: function onClick(props) {
        return props.onShareMap;
      }
    }]
  };
  return SaveExportDropdown;
};

exports.SaveExportDropdownFactory = SaveExportDropdownFactory;
SaveExportDropdownFactory.deps = [PanelHeaderDropdownFactory];

var CloudStorageDropdownFactory = function CloudStorageDropdownFactory(PanelHeaderDropdown) {
  var dropdownItemsSelector = getDropdownItemsSelector();

  var CloudStorageDropdown = function CloudStorageDropdown(props) {
    return /*#__PURE__*/_react["default"].createElement(PanelHeaderDropdown, {
      items: dropdownItemsSelector(props),
      show: props.show,
      onClose: props.onClose,
      id: "cloud-storage"
    });
  };

  CloudStorageDropdown.defaultProps = {
    items: [{
      label: 'Save',
      icon: _icons.Save2,
      key: 'save',
      onClick: function onClick(props) {
        return props.onSaveToStorage;
      }
    }, {
      label: 'Save As',
      icon: _icons.Save2,
      key: 'saveAs',
      onClick: function onClick(props) {
        return props.onSaveAsToStorage;
      }
    }]
  };
  return CloudStorageDropdown;
};

exports.CloudStorageDropdownFactory = CloudStorageDropdownFactory;
CloudStorageDropdownFactory.deps = [PanelHeaderDropdownFactory];
PanelHeaderFactory.deps = [SaveExportDropdownFactory, CloudStorageDropdownFactory];

function PanelHeaderFactory(SaveExportDropdown, CloudStorageDropdown) {
  var _class, _temp;

  return _temp = _class = /*#__PURE__*/function (_Component) {
    (0, _inherits2["default"])(PanelHeader, _Component);

    var _super = _createSuper(PanelHeader);

    function PanelHeader() {
      (0, _classCallCheck2["default"])(this, PanelHeader);
      return _super.apply(this, arguments);
    }

    (0, _createClass2["default"])(PanelHeader, [{
      key: "render",
      value: function render() {
        var _this$props = this.props,
            appName = _this$props.appName,
            appWebsite = _this$props.appWebsite,
            version = _this$props.version,
            actionItems = _this$props.actionItems,
            visibleDropdown = _this$props.visibleDropdown,
            showExportDropdown = _this$props.showExportDropdown,
            hideExportDropdown = _this$props.hideExportDropdown,
            dropdownCallbacks = (0, _objectWithoutProperties2["default"])(_this$props, ["appName", "appWebsite", "version", "actionItems", "visibleDropdown", "showExportDropdown", "hideExportDropdown"]);
        var items = actionItems || []; // don't render cloud storage icon if onSaveToStorage is not provided

        if (typeof this.props.onSaveToStorage !== 'function') {
          items = actionItems.filter(function (ai) {
            return ai.id !== 'storage';
          });
        }

        return /*#__PURE__*/_react["default"].createElement(StyledPanelHeader, {
          className: "side-panel__panel-header"
        }, /*#__PURE__*/_react["default"].createElement(StyledPanelHeaderTop, {
          className: "side-panel__panel-header__top"
        }, /*#__PURE__*/_react["default"].createElement(this.props.logoComponent, {
          appName: appName,
          version: version,
          appWebsite: appWebsite
        }), /*#__PURE__*/_react["default"].createElement(StyledPanelTopActions, null, items.map(function (item) {
          return /*#__PURE__*/_react["default"].createElement("div", {
            className: "side-panel__panel-header__right",
            key: item.id,
            style: {
              position: 'relative'
            }
          }, /*#__PURE__*/_react["default"].createElement(PanelAction, {
            item: item,
            onClick: function onClick() {
              if (item.dropdownComponent) {
                showExportDropdown(item.id);
              }

              item.onClick();
            }
          }), item.dropdownComponent ? /*#__PURE__*/_react["default"].createElement(item.dropdownComponent, (0, _extends2["default"])({
            onClose: hideExportDropdown,
            show: visibleDropdown === item.id
          }, dropdownCallbacks)) : null);
        }))));
      }
    }]);
    return PanelHeader;
  }(_react.Component), (0, _defineProperty2["default"])(_class, "propTypes", {
    appName: _propTypes["default"].string,
    appWebsite: _propTypes["default"].string,
    version: _propTypes["default"].string,
    visibleDropdown: _propTypes["default"].string,
    logoComponent: _propTypes["default"].oneOfType([_propTypes["default"].element, _propTypes["default"].func]),
    actionItems: _propTypes["default"].arrayOf(_propTypes["default"].any),
    onExportImage: _propTypes["default"].func,
    onExportData: _propTypes["default"].func,
    onExportConfig: _propTypes["default"].func,
    onExportMap: _propTypes["default"].func,
    onSaveToStorage: _propTypes["default"].func,
    onSaveAsToStorage: _propTypes["default"].func,
    onSaveMap: _propTypes["default"].func,
    onShareMap: _propTypes["default"].func
  }), (0, _defineProperty2["default"])(_class, "defaultProps", {
    logoComponent: _logo["default"],
    actionItems: [{
      id: 'storage',
      iconComponent: _icons.Db,
      tooltip: 'tooltip.cloudStorage',
      onClick: function onClick() {},
      dropdownComponent: CloudStorageDropdown
    }, {
      id: 'save',
      iconComponent: _icons.Save,
      onClick: function onClick() {},
      label: 'Share',
      dropdownComponent: SaveExportDropdown
    }]
  }), _temp;
}

var _default = PanelHeaderFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NpZGUtcGFuZWwvcGFuZWwtaGVhZGVyLmpzIl0sIm5hbWVzIjpbIlN0eWxlZFBhbmVsSGVhZGVyIiwic3R5bGVkIiwiZGl2IiwiYXR0cnMiLCJjbGFzc05hbWUiLCJwcm9wcyIsInRoZW1lIiwic2lkZVBhbmVsSGVhZGVyQmciLCJTdHlsZWRQYW5lbEhlYWRlclRvcCIsIlN0eWxlZFBhbmVsVG9wQWN0aW9ucyIsIlN0eWxlZFBhbmVsQWN0aW9uIiwiYWN0aXZlIiwidGV4dENvbG9ySGwiLCJzdWJ0ZXh0Q29sb3IiLCJTdHlsZWRUb29sYmFyIiwiVG9vbGJhciIsIlBhbmVsQWN0aW9uIiwiaXRlbSIsIm9uQ2xpY2siLCJpZCIsImxhYmVsIiwiYmxhbmsiLCJocmVmIiwidG9vbHRpcCIsIlBhbmVsSGVhZGVyRHJvcGRvd25GYWN0b3J5IiwiUGFuZWxIZWFkZXJEcm9wZG93biIsIml0ZW1zIiwic2hvdyIsIm9uQ2xvc2UiLCJtYXAiLCJrZXkiLCJpY29uIiwiZ2V0RHJvcGRvd25JdGVtc1NlbGVjdG9yIiwidCIsImZpbHRlciIsImwiLCJTYXZlRXhwb3J0RHJvcGRvd25GYWN0b3J5IiwiZHJvcGRvd25JdGVtc1NlbGVjdG9yIiwiU2F2ZUV4cG9ydERyb3Bkb3duIiwiZGVmYXVsdFByb3BzIiwiUGljdHVyZSIsIm9uRXhwb3J0SW1hZ2UiLCJEYXRhVGFibGUiLCJvbkV4cG9ydERhdGEiLCJNYXBJY29uIiwib25FeHBvcnRNYXAiLCJTYXZlMiIsIm9uU2F2ZU1hcCIsIlNoYXJlIiwib25TaGFyZU1hcCIsImRlcHMiLCJDbG91ZFN0b3JhZ2VEcm9wZG93bkZhY3RvcnkiLCJDbG91ZFN0b3JhZ2VEcm9wZG93biIsIm9uU2F2ZVRvU3RvcmFnZSIsIm9uU2F2ZUFzVG9TdG9yYWdlIiwiUGFuZWxIZWFkZXJGYWN0b3J5IiwiYXBwTmFtZSIsImFwcFdlYnNpdGUiLCJ2ZXJzaW9uIiwiYWN0aW9uSXRlbXMiLCJ2aXNpYmxlRHJvcGRvd24iLCJzaG93RXhwb3J0RHJvcGRvd24iLCJoaWRlRXhwb3J0RHJvcGRvd24iLCJkcm9wZG93bkNhbGxiYWNrcyIsImFpIiwicG9zaXRpb24iLCJkcm9wZG93bkNvbXBvbmVudCIsIkNvbXBvbmVudCIsIlByb3BUeXBlcyIsInN0cmluZyIsImxvZ29Db21wb25lbnQiLCJvbmVPZlR5cGUiLCJlbGVtZW50IiwiZnVuYyIsImFycmF5T2YiLCJhbnkiLCJvbkV4cG9ydENvbmZpZyIsIktlcGxlckdsTG9nbyIsImljb25Db21wb25lbnQiLCJEYiIsIlNhdmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxpQkFBaUIsR0FBR0MsNkJBQU9DLEdBQVAsQ0FBV0MsS0FBWCxDQUFpQjtBQUN6Q0MsRUFBQUEsU0FBUyxFQUFFO0FBRDhCLENBQWpCLENBQUgsb0JBR0QsVUFBQUMsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxpQkFBaEI7QUFBQSxDQUhKLENBQXZCOztBQU9BLElBQU1DLG9CQUFvQixHQUFHUCw2QkFBT0MsR0FBUCxDQUFXQyxLQUFYLENBQWlCO0FBQzVDQyxFQUFBQSxTQUFTLEVBQUU7QUFEaUMsQ0FBakIsQ0FBSCxvQkFBMUI7O0FBU0EsSUFBTUsscUJBQXFCLEdBQUdSLDZCQUFPQyxHQUFQLENBQVdDLEtBQVgsQ0FBaUI7QUFDN0NDLEVBQUFBLFNBQVMsRUFBRTtBQURrQyxDQUFqQixDQUFILG9CQUEzQjs7QUFNQSxJQUFNTSxpQkFBaUIsR0FBR1QsNkJBQU9DLEdBQVAsQ0FBV0MsS0FBWCxDQUFpQjtBQUN6Q0MsRUFBQUEsU0FBUyxFQUFFO0FBRDhCLENBQWpCLENBQUgscUJBS1osVUFBQUMs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WjtBQWFqQjFCLElBQUFBLFNBQVMsRUFBRXFCLHNCQUFVSyxJQWJKO0FBY2pCeEIsSUFBQUEsVUFBVSxFQUFFbUIsc0JBQVVLO0FBZEwsR0FEckIsNERBa0J3QjtBQUNwQkgsSUFBQUEsYUFBYSxFQUFFTyxnQkFESztBQUVwQmxCLElBQUFBLFdBQVcsRUFBRSxDQUNYO0FBQ0V4QyxNQUFBQSxFQUFFLEVBQUUsU0FETjtBQUVFMkQsTUFBQUEsYUFBYSxFQUFFQyxTQUZqQjtBQUdFeEQsTUFBQUEsT0FBTyxFQUFFLHNCQUhYO0FBSUVMLE1BQUFBLE9BQU8sRUFBRSxtQkFBTSxDQUFFLENBSm5CO0FBS0VnRCxNQUFBQSxpQkFBaUIsRUFBRWQ7QUFMckIsS0FEVyxFQVFYO0FBQ0VqQyxNQUFBQSxFQUFFLEVBQUUsTUFETjtBQUVFMkQsTUFBQUEsYUFBYSxFQUFFRSxXQUZqQjtBQUdFOUQsTUFBQUEsT0FBTyxFQUFFLG1CQUFNLENBQUUsQ0FIbkI7QUFJRUUsTUFBQUEsS0FBSyxFQUFFLE9BSlQ7QUFLRThDLE1BQUFBLGlCQUFpQixFQUFFNUI7QUFMckIsS0FSVztBQUZPLEdBbEJ4QjtBQTJGRDs7ZUFFY2lCLGtCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQge2NyZWF0ZVNlbGVjdG9yfSBmcm9tICdyZXNlbGVjdCc7XHJcbmltcG9ydCB7VG9vbHRpcH0gZnJvbSAnY29tcG9uZW50cy9jb21tb24vc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgS2VwbGVyR2xMb2dvIGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL2xvZ28nO1xyXG5pbXBvcnQge1NhdmUsIERhdGFUYWJsZSwgU2F2ZTIsIFBpY3R1cmUsIERiLCBNYXAgYXMgTWFwSWNvbiwgU2hhcmV9IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL2ljb25zJztcclxuaW1wb3J0IENsaWNrT3V0c2lkZUNsb3NlRHJvcGRvd24gZnJvbSAnY29tcG9uZW50cy9zaWRlLXBhbmVsL3BhbmVsLWRyb3Bkb3duJztcclxuaW1wb3J0IFRvb2xiYXIgZnJvbSAnY29tcG9uZW50cy9jb21tb24vdG9vbGJhcic7XHJcbmltcG9ydCBUb29sYmFySXRlbSBmcm9tICdjb21wb25lbnRzL2NvbW1vbi90b29sYmFyLWl0ZW0nO1xyXG5pbXBvcnQge0Zvcm1hdHRlZE1lc3NhZ2V9IGZyb20gJ3JlYWN0LWludGwnO1xyXG5cclxuY29uc3QgU3R5bGVkUGFuZWxIZWFkZXIgPSBzdHlsZWQuZGl2LmF0dHJzKHtcclxuICBjbGFzc05hbWU6ICdzaWRlLXNpZGUtcGFuZWxfX2hlYWRlcidcclxufSlgXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5zaWRlUGFuZWxIZWFkZXJCZ307XHJcbiAgcGFkZGluZzogMTJweCAxNnB4IDAgMTZweDtcclxuYDtcclxuXHJcbmNvbnN0IFN0eWxlZFBhbmVsSGVhZGVyVG9wID0gc3R5bGVkLmRpdi5hdHRycyh7XHJcbiAgY2xhc3NOYW1lOiAnc2lkZS1wYW5lbF9faGVhZGVyX190b3AnXHJcbn0pYFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbmA7XHJcblxyXG5jb25zdCBTdHlsZWRQYW5lbFRvcEFjdGlvbnMgPSBzdHlsZWQuZGl2LmF0dHJzKHtcclxuICBjbGFzc05hbWU6ICdzaWRlLXBhbmVsX190b3BfX2FjdGlvbnMnXHJcbn0pYFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbmA7XHJcblxyXG5jb25zdCBTdHlsZWRQYW5lbEFjdGlvbiA9IHN0eWxlZC5kaXYuYXR0cnMoe1xyXG4gIGNsYXNzTmFtZTogJ3NpZGUtcGFuZWxfX3BhbmVsLWhlYWRlcl9fYWN0aW9uJ1xyXG59KWBcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICBjb2xvcjogJHtwcm9wcyA9PiAocHJvcHMuYWN0aXZlID8gcHJvcHMudGhlbWUudGV4dENvbG9ySGwgOiBwcm9wcy50aGVtZS5zdWJ0ZXh0Q29sb3IpfTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGhlaWdodDogMjZweDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgbWFyZ2luLWxlZnQ6IDRweDtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgcCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDZweDtcclxuICB9XHJcbiAgYSB7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgfVxyXG5cclxuICA6aG92ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudGV4dENvbG9ySGx9O1xyXG5cclxuICAgIGEge1xyXG4gICAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50ZXh0Q29sb3JIbH07XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgU3R5bGVkVG9vbGJhciA9IHN0eWxlZChUb29sYmFyKWBcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgUGFuZWxBY3Rpb24gPSAoe2l0ZW0sIG9uQ2xpY2t9KSA9PiAoXHJcbiAgPFN0eWxlZFBhbmVsQWN0aW9uIGRhdGEtdGlwIGRhdGEtZm9yPXtgJHtpdGVtLmlkfS1hY3Rpb25gfSBvbkNsaWNrPXtvbkNsaWNrfT5cclxuICAgIHtpdGVtLmxhYmVsID8gPHA+e2l0ZW0ubGFiZWx9PC9wPiA6IG51bGx9XHJcbiAgICA8YSB0YXJnZXQ9e2l0ZW0uYmxhbmsgPyAnX2JsYW5rJyA6ICcnfSBocmVmPXtpdGVtLmhyZWZ9PlxyXG4gICAgICA8aXRlbS5pY29uQ29tcG9uZW50IGhlaWdodD1cIjIwcHhcIiAvPlxyXG4gICAgPC9hPlxyXG4gICAge2l0ZW0udG9vbHRpcCA/IChcclxuICAgICAgPFRvb2x0aXAgaWQ9e2Ake2l0ZW0uaWR9LWFjdGlvbmB9IHBsYWNlPVwiYm90dG9tXCIgZGVsYXlTaG93PXs1MDB9IGVmZmVjdD1cInNvbGlkXCI+XHJcbiAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2UgaWQ9e2l0ZW0udG9vbHRpcH0gLz5cclxuICAgICAgPC9Ub29sdGlwPlxyXG4gICAgKSA6IG51bGx9XHJcbiAgPC9TdHlsZWRQYW5lbEFjdGlvbj5cclxuKTtcclxuXHJcbmV4cG9ydCBjb25zdCBQYW5lbEhlYWRlckRyb3Bkb3duRmFjdG9yeSA9ICgpID0+IHtcclxuICBjb25zdCBQYW5lbEhlYWRlckRyb3Bkb3duID0gKHtpdGVtcywgc2hvdywgb25DbG9zZSwgaWR9KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8U3R5bGVkVG9vbGJhciBzaG93PXtzaG93fSBjbGFzc05hbWU9e2Ake2lkfS1kcm9wZG93bmB9PlxyXG4gICAgICAgIDxDbGlja091dHNpZGVDbG9zZURyb3Bkb3duXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJwYW5lbC1oZWFkZXItZHJvcGRvd25fX2lubmVyXCJcclxuICAgICAgICAgIHNob3c9e3Nob3d9XHJcbiAgICAgICAgICBvbkNsb3NlPXtvbkNsb3NlfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtpdGVtcy5tYXAoaXRlbSA9PiAoXHJcbiAgICAgICAgICAgIDxUb29sYmFySXRlbVxyXG4gICAgICAgICAgICAgIGlkPXtpdGVtLmtleX1cclxuICAgICAgICAgICAgICBrZXk9e2l0ZW0ua2V5fVxyXG4gICAgICAgICAgICAgIGxhYmVsPXtpdGVtLmxhYmVsfVxyXG4gICAgICAgICAgICAgIGljb249e2l0ZW0uaWNvbn1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXtpdGVtLm9uQ2xpY2t9XHJcbiAgICAgICAgICAgICAgb25DbG9zZT17b25DbG9zZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvQ2xpY2tPdXRzaWRlQ2xvc2VEcm9wZG93bj5cclxuICAgICAgPC9TdHlsZWRUb29sYmFyPlxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gUGFuZWxIZWFkZXJEcm9wZG93bjtcclxufTtcclxuXHJcbmNvbnN0IGdldERyb3Bkb3duSXRlbXNTZWxlY3RvciA9ICgpID0+XHJcbiAgY3JlYXRlU2VsZWN0b3IoXHJcbiAgICBwcm9wcyA9PiBwcm9wcyxcclxuICAgIHByb3BzID0+XHJcbiAgICAgIHByb3BzLml0ZW1zXHJcbiAgICAgICAgLm1hcCh0ID0+ICh7XHJcbiAgICAgICAgICAuLi50LFxyXG4gICAgICAgICAgb25DbGljazogdC5vbkNsaWNrICYmIHQub25DbGljayhwcm9wcykgPyB0Lm9uQ2xpY2socHJvcHMpIDogbnVsbFxyXG4gICAgICAgIH0pKVxyXG4gICAgICAgIC5maWx0ZXIobCA9PiBsLm9uQ2xpY2spXHJcbiAgKTtcclxuXHJcbmV4cG9ydCBjb25zdCBTYXZlRXhwb3J0RHJvcGRvd25GYWN0b3J5ID0gUGFuZWxIZWFkZXJEcm9wZG93biA9PiB7XHJcbiAgY29uc3QgZHJvcGRvd25JdGVtc1NlbGVjdG9yID0gZ2V0RHJvcGRvd25JdGVtc1NlbGVjdG9yKCk7XHJcblxyXG4gIGNvbnN0IFNhdmVFeHBvcnREcm9wZG93biA9IHByb3BzID0+IChcclxuICAgIDxQYW5lbEhlYWRlckRyb3Bkb3duXHJcbiAgICAgIGl0ZW1zPXtkcm9wZG93bkl0ZW1zU2VsZWN0b3IocHJvcHMpfVxyXG4gICAgICBzaG93PXtwcm9wcy5zaG93fVxyXG4gICAgICBvbkNsb3NlPXtwcm9wcy5vbkNsb3NlfVxyXG4gICAgICBpZD1cInNhdmUtZXhwb3J0XCJcclxuICAgIC8+XHJcbiAgKTtcclxuXHJcbiAgU2F2ZUV4cG9ydERyb3Bkb3duLmRlZmF1bHRQcm9wcyA9IHtcclxuICAgIGl0ZW1zOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBsYWJlbDogJ3Rvb2xiYXIuZXhwb3J0SW1hZ2UnLFxyXG4gICAgICAgIGljb246IFBpY3R1cmUsXHJcbiAgICAgICAga2V5OiAnaW1hZ2UnLFxyXG4gICAgICAgIG9uQ2xpY2s6IHByb3BzID0+IHByb3BzLm9uRXhwb3J0SW1hZ2VcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGxhYmVsOiAndG9vbGJhci5leHBvcnREYXRhJyxcclxuICAgICAgICBpY29uOiBEYXRhVGFibGUsXHJcbiAgICAgICAga2V5OiAnZGF0YScsXHJcbiAgICAgICAgb25DbGljazogcHJvcHMgPT4gcHJvcHMub25FeHBvcnREYXRhXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBsYWJlbDogJ3Rvb2xiYXIuZXhwb3J0TWFwJyxcclxuICAgICAgICBpY29uOiBNYXBJY29uLFxyXG4gICAgICAgIGtleTogJ21hcCcsXHJcbiAgICAgICAgb25DbGljazogcHJvcHMgPT4gcHJvcHMub25FeHBvcnRNYXBcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGxhYmVsOiAndG9vbGJhci5zYXZlTWFwJyxcclxuICAgICAgICBpY29uOiBTYXZlMixcclxuICAgICAgICBrZXk6ICdzYXZlJyxcclxuICAgICAgICBvbkNsaWNrOiBwcm9wcyA9PiBwcm9wcy5vblNhdmVNYXBcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGxhYmVsOiAndG9vbGJhci5zaGFyZU1hcFVSTCcsXHJcbiAgICAgICAgaWNvbjogU2hhcmUsXHJcbiAgICAgICAga2V5OiAnc2hhcmUnLFxyXG4gICAgICAgIG9uQ2xpY2s6IHByb3BzID0+IHByb3BzLm9uU2hhcmVNYXBcclxuICAgICAgfVxyXG4gICAgXVxyXG4gIH07XHJcblxyXG4gIHJldHVybiBTYXZlRXhwb3J0RHJvcGRvd247XHJcbn07XHJcblNhdmVFeHBvcnREcm9wZG93bkZhY3RvcnkuZGVwcyA9IFtQYW5lbEhlYWRlckRyb3Bkb3duRmFjdG9yeV07XHJcblxyXG5leHBvcnQgY29uc3QgQ2xvdWRTdG9yYWdlRHJvcGRvd25GYWN0b3J5ID0gUGFuZWxIZWFkZXJEcm9wZG93biA9PiB7XHJcbiAgY29uc3QgZHJvcGRvd25JdGVtc1NlbGVjdG9yID0gZ2V0RHJvcGRvd25JdGVtc1NlbGVjdG9yKCk7XHJcblxyXG4gIGNvbnN0IENsb3VkU3RvcmFnZURyb3Bkb3duID0gcHJvcHMgPT4gKFxyXG4gICAgPFBhbmVsSGVhZGVyRHJvcGRvd25cclxuICAgICAgaXRlbXM9e2Ryb3Bkb3duSXRlbXNTZWxlY3Rvcihwcm9wcyl9XHJcbiAgICAgIHNob3c9e3Byb3BzLnNob3d9XHJcbiAgICAgIG9uQ2xvc2U9e3Byb3BzLm9uQ2xvc2V9XHJcbiAgICAgIGlkPVwiY2xvdWQtc3RvcmFnZVwiXHJcbiAgICAvPlxyXG4gICk7XHJcbiAgQ2xvdWRTdG9yYWdlRHJvcGRvd24uZGVmYXVsdFByb3BzID0ge1xyXG4gICAgaXRlbXM6IFtcclxuICAgICAge1xyXG4gICAgICAgIGxhYmVsOiAnU2F2ZScsXHJcbiAgICAgICAgaWNvbjogU2F2ZTIsXHJcbiAgICAgICAga2V5OiAnc2F2ZScsXHJcbiAgICAgICAgb25DbGljazogcHJvcHMgPT4gcHJvcHMub25TYXZlVG9TdG9yYWdlXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBsYWJlbDogJ1NhdmUgQXMnLFxyXG4gICAgICAgIGljb246IFNhdmUyLFxyXG4gICAgICAgIGtleTogJ3NhdmVBcycsXHJcbiAgICAgICAgb25DbGljazogcHJvcHMgPT4gcHJvcHMub25TYXZlQXNUb1N0b3JhZ2VcclxuICAgICAgfVxyXG4gICAgXVxyXG4gIH07XHJcbiAgcmV0dXJuIENsb3VkU3RvcmFnZURyb3Bkb3duO1xyXG59O1xyXG5DbG91ZFN0b3JhZ2VEcm9wZG93bkZhY3RvcnkuZGVwcyA9IFtQYW5lbEhlYWRlckRyb3Bkb3duRmFjdG9yeV07XHJcblxyXG5QYW5lbEhlYWRlckZhY3RvcnkuZGVwcyA9IFtTYXZlRXhwb3J0RHJvcGRvd25GYWN0b3J5LCBDbG91ZFN0b3JhZ2VEcm9wZG93bkZhY3RvcnldO1xyXG5cclxuZnVuY3Rpb24gUGFuZWxIZWFkZXJGYWN0b3J5KFNhdmVFeHBvcnREcm9wZG93biwgQ2xvdWRTdG9yYWdlRHJvcGRvd24pIHtcclxuICByZXR1cm4gY2xhc3MgUGFuZWxIZWFkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcclxuICAgICAgYXBwTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgYXBwV2Vic2l0ZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgdmVyc2lvbjogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgdmlzaWJsZURyb3Bkb3duOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICBsb2dvQ29tcG9uZW50OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZWxlbWVudCwgUHJvcFR5cGVzLmZ1bmNdKSxcclxuICAgICAgYWN0aW9uSXRlbXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5hbnkpLFxyXG4gICAgICBvbkV4cG9ydEltYWdlOiBQcm9wVHlwZXMuZnVuYyxcclxuICAgICAgb25FeHBvcnREYXRhOiBQcm9wVHlwZXMuZnVuYyxcclxuICAgICAgb25FeHBvcnRDb25maWc6IFByb3BUeXBlcy5mdW5jLFxyXG4gICAgICBvbkV4cG9ydE1hcDogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgICAgIG9uU2F2ZVRvU3RvcmFnZTogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgICAgIG9uU2F2ZUFzVG9TdG9yYWdlOiBQcm9wVHlwZXMuZnVuYyxcclxuICAgICAgb25TYXZlTWFwOiBQcm9wVHlwZXMuZnVuYyxcclxuICAgICAgb25TaGFyZU1hcDogUHJvcFR5cGVzLmZ1bmNcclxuICAgIH07XHJcblxyXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcclxuICAgICAgbG9nb0NvbXBvbmVudDogS2VwbGVyR2xMb2dvLFxyXG4gICAgICBhY3Rpb25JdGVtczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGlkOiAnc3RvcmFnZScsXHJcbiAgICAgICAgICBpY29uQ29tcG9uZW50OiBEYixcclxuICAgICAgICAgIHRvb2x0aXA6ICd0b29sdGlwLmNsb3VkU3RvcmFnZScsXHJcbiAgICAgICAgICBvbkNsaWNrOiAoKSA9PiB7fSxcclxuICAgICAgICAgIGRyb3Bkb3duQ29tcG9uZW50OiBDbG91ZFN0b3JhZ2VEcm9wZG93blxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaWQ6ICdzYXZlJyxcclxuICAgICAgICAgIGljb25Db21wb25lbnQ6IFNhdmUsXHJcbiAgICAgICAgICBvbkNsaWNrOiAoKSA9PiB7fSxcclxuICAgICAgICAgIGxhYmVsOiAnU2hhcmUnLFxyXG4gICAgICAgICAgZHJvcGRvd25Db21wb25lbnQ6IFNhdmVFeHBvcnREcm9wZG93blxyXG4gICAgICAgIH1cclxuICAgICAgXVxyXG4gICAgfTtcclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgIGNvbnN0IHtcclxuICAgICAgICBhcHBOYW1lLFxyXG4gICAgICAgIGFwcFdlYnNpdGUsXHJcbiAgICAgICAgdmVyc2lvbixcclxuICAgICAgICBhY3Rpb25JdGVtcyxcclxuICAgICAgICB2aXNpYmxlRHJvcGRvd24sXHJcbiAgICAgICAgc2hvd0V4cG9ydERyb3Bkb3duLFxyXG4gICAgICAgIGhpZGVFeHBvcnREcm9wZG93bixcclxuICAgICAgICAuLi5kcm9wZG93bkNhbGxiYWNrc1xyXG4gICAgICB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgbGV0IGl0ZW1zID0gYWN0aW9uSXRlbXMgfHwgW107XHJcblxyXG4gICAgICAvLyBkb24ndCByZW5kZXIgY2xvdWQgc3RvcmFnZSBpY29uIGlmIG9uU2F2ZVRvU3RvcmFnZSBpcyBub3QgcHJvdmlkZWRcclxuICAgICAgaWYgKHR5cGVvZiB0aGlzLnByb3BzLm9uU2F2ZVRvU3RvcmFnZSAhPT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgIGl0ZW1zID0gYWN0aW9uSXRlbXMuZmlsdGVyKGFpID0+IGFpLmlkICE9PSAnc3RvcmFnZScpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxTdHlsZWRQYW5lbEhlYWRlciBjbGFzc05hbWU9XCJzaWRlLXBhbmVsX19wYW5lbC1oZWFkZXJcIj5cclxuICAgICAgICAgIDxTdHlsZWRQYW5lbEhlYWRlclRvcCBjbGFzc05hbWU9XCJzaWRlLXBhbmVsX19wYW5lbC1oZWFkZXJfX3RvcFwiPlxyXG4gICAgICAgICAgICA8dGhpcy5wcm9wcy5sb2dvQ29tcG9uZW50IGFwcE5hbWU9e2FwcE5hbWV9IHZlcnNpb249e3ZlcnNpb259IGFwcFdlYnNpdGU9e2FwcFdlYnNpdGV9IC8+XHJcbiAgICAgICAgICAgIDxTdHlsZWRQYW5lbFRvcEFjdGlvbnM+XHJcbiAgICAgICAgICAgICAge2l0ZW1zLm1hcChpdGVtID0+IChcclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2lkZS1wYW5lbF9fcGFuZWwtaGVhZGVyX19yaWdodFwiXHJcbiAgICAgICAgICAgICAgICAgIGtleT17aXRlbS5pZH1cclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3twb3NpdGlvbjogJ3JlbGF0aXZlJ319XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxQYW5lbEFjdGlvblxyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW09e2l0ZW19XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0uZHJvcGRvd25Db21wb25lbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0V4cG9ydERyb3Bkb3duKGl0ZW0uaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgaXRlbS5vbkNsaWNrKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAge2l0ZW0uZHJvcGRvd25Db21wb25lbnQgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGl0ZW0uZHJvcGRvd25Db21wb25lbnRcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xvc2U9e2hpZGVFeHBvcnREcm9wZG93bn1cclxuICAgICAgICAgICAgICAgICAgICAgIHNob3c9e3Zpc2libGVEcm9wZG93biA9PT0gaXRlbS5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgIHsuLi5kcm9wZG93bkNhbGxiYWNrc31cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L1N0eWxlZFBhbmVsVG9wQWN0aW9ucz5cclxuICAgICAgICAgIDwvU3R5bGVkUGFuZWxIZWFkZXJUb3A+XHJcbiAgICAgICAgPC9TdHlsZWRQYW5lbEhlYWRlcj5cclxuICAgICAgKTtcclxuICAgIH1cclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYW5lbEhlYWRlckZhY3Rvcnk7XHJcbiJdfQ==