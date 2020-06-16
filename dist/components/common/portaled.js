"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.getChildPos = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _lodash = _interopRequireDefault(require("lodash.debounce"));

var _lodash2 = _interopRequireDefault(require("lodash.isequal"));

var _exenv = require("exenv");

var _styledComponents = require("styled-components");

var _context = require("../context");

var _reactModal = _interopRequireDefault(require("react-modal"));

var _window = _interopRequireDefault(require("global/window"));

var _base = require("../../styles/base");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var listeners = {};

var startListening = function startListening() {
  return Object.keys(listeners).forEach(function (key) {
    return listeners[key]();
  });
};

var getPageOffset = function getPageOffset() {
  return {
    x: _window["default"].pageXOffset !== undefined ? _window["default"].pageXOffset : (document.documentElement || document.body.parentNode || document.body).scrollLeft,
    y: _window["default"].pageYOffset !== undefined ? _window["default"].pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop
  };
};

var addEventListeners = function addEventListeners() {
  if (document && document.body) document.body.addEventListener('mousewheel', (0, _lodash["default"])(startListening, 100, true));

  _window["default"].addEventListener('resize', (0, _lodash["default"])(startListening, 50, true));
};

var getChildPos = function getChildPos(_ref) {
  var offsets = _ref.offsets,
      rect = _ref.rect,
      childRect = _ref.childRect,
      pageOffset = _ref.pageOffset,
      padding = _ref.padding;
  var topOffset = offsets.topOffset,
      leftOffset = offsets.leftOffset,
      rightOffset = offsets.rightOffset;
  var anchorLeft = leftOffset !== undefined;

  var pos = _objectSpread({
    top: pageOffset.y + rect.top + (topOffset || 0)
  }, anchorLeft ? {
    left: pageOffset.x + rect.left + leftOffset
  } : {
    right: _window["default"].innerWidth - rect.right - pageOffset.x + (rightOffset || 0)
  });

  var leftOrRight = anchorLeft ? 'left' : 'right';

  if (pos[leftOrRight] && pos[leftOrRight] < 0) {
    pos[leftOrRight] = padding;
  } else if (pos[leftOrRight] && pos[leftOrRight] + childRect.width > _window["default"].innerWidth) {
    pos[leftOrRight] = _window["default"].innerWidth - childRect.width - padding;
  }

  if (pos.top < 0) {
    pos.top = padding;
  } else if (pos.top + childRect.height > _window["default"].innerHeight) {
    pos.top = _window["default"].innerHeight - childRect.height - padding;
  }

  return pos;
};

exports.getChildPos = getChildPos;

if (_exenv.canUseDOM) {
  if (document.body) {
    addEventListeners();
  } else {
    document.addEventListener('DOMContentLoaded', addEventListeners);
  }
}

var listenerIdCounter = 0;

function subscribe(fn) {
  listenerIdCounter += 1;
  var id = listenerIdCounter;
  listeners[id] = fn;
  return function () {
    return delete listeners[id];
  };
}

var defaultModalStyle = {
  content: {
    top: 0,
    left: 0,
    border: 0,
    right: 'auto',
    bottom: 'auto',
    padding: '0px 0px 0px 0px'
  },
  overlay: {
    right: 'auto',
    bottom: 'auto',
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0, 0, 0, 0)'
  }
};
var WINDOW_PAD = 40;

var noop = function noop() {};

var Portaled = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(Portaled, _Component);

  var _super = _createSuper(Portaled);

  function Portaled() {
    var _this;

    (0, _classCallCheck2["default"])(this, Portaled);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      pos: null,
      isVisible: false
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "element", /*#__PURE__*/(0, _react.createRef)());
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "child", /*#__PURE__*/(0, _react.createRef)());
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleScroll", function () {
      if (_this.child.current) {
        var rect = _this.element.current.getBoundingClientRect();

        var childRect = _this.child.current && _this.child.current.getBoundingClientRect();

        var pageOffset = getPageOffset();
        var _this$props = _this.props,
            topOffset = _this$props.top,
            leftOffset = _this$props.left,
            rightOffset = _this$props.right;
        var pos = getChildPos({
          offsets: {
            topOffset: topOffset,
            leftOffset: leftOffset,
            rightOffset: rightOffset
          },
          rect: rect,
          childRect: childRect,
          pageOffset: pageOffset,
          padding: WINDOW_PAD
        });

        if (!(0, _lodash2["default"])(pos, _this.state.pos)) {
          _this.setState({
            pos: pos
          });
        }
      }
    });
    return _this;
  }

  (0, _createClass2["default"])(Portaled, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // relative
      this.unsubscribe = subscribe(this.handleScroll);
      this.handleScroll();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this2 = this;

      var didOpen = this.props.isOpened && !prevProps.isOpened;
      var didClose = !this.props.isOpened && prevProps.isOpened;

      if (didOpen || didClose) {
        _window["default"].requestAnimationFrame(function () {
          if (_this2._unmounted) return;

          _this2.setState({
            isVisible: didOpen
          });
        });
      }

      this.handleScroll();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this._unmounted = true;
      this.unsubscribe();
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props2 = this.props,
          Comp = _this$props2.component,
          overlayZIndex = _this$props2.overlayZIndex,
          isOpened = _this$props2.isOpened,
          onClose = _this$props2.onClose,
          children = _this$props2.children,
          modalProps = _this$props2.modalProps;
      var _this$state = this.state,
          isVisible = _this$state.isVisible,
          pos = _this$state.pos;

      var modalStyle = _objectSpread(_objectSpread({}, defaultModalStyle), {}, {
        overlay: _objectSpread(_objectSpread({}, defaultModalStyle.overlay), {}, {
          // needs to be on top of existing modal
          zIndex: overlayZIndex || 9999
        })
      });

      return /*#__PURE__*/_react["default"].createElement(_context.RootContext.Consumer, null, function (context) {
        return /*#__PURE__*/_react["default"].createElement(Comp, {
          ref: _this3.element
        }, isOpened ? /*#__PURE__*/_react["default"].createElement(_reactModal["default"], (0, _extends2["default"])({
          className: "modal-portal"
        }, modalProps, {
          ariaHideApp: false,
          isOpen: true,
          style: modalStyle,
          parentSelector: function parentSelector() {
            // React modal issue: https://github.com/reactjs/react-modal/issues/769
            // failed to execute removeChild on parent node when it is already unmounted
            return context && context.current || {
              removeChild: function removeChild() {},
              appendChild: function appendChild() {}
            };
          },
          onRequestClose: onClose
        }), /*#__PURE__*/_react["default"].createElement("div", {
          className: "portaled-content",
          key: "item",
          style: _objectSpread({
            position: 'fixed',
            opacity: isVisible ? 1 : 0,
            top: _this3.state.top,
            transition: _this3.props.theme.transition,
            marginTop: isVisible ? '0px' : '14px'
          }, pos)
        }, /*#__PURE__*/_react["default"].createElement("div", {
          ref: _this3.child,
          style: {
            position: 'absolute',
            zIndex: overlayZIndex ? overlayZIndex + 1 : 10000
          }
        }, children))) : null);
      });
    }
  }]);
  return Portaled;
}(_react.Component);

(0, _defineProperty2["default"])(Portaled, "defaultProps", {
  component: 'div',
  onClose: noop,
  theme: _base.theme
});

var _default = (0, _styledComponents.withTheme)(Portaled);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9wb3J0YWxlZC5qcyJdLCJuYW1lcyI6WyJsaXN0ZW5lcnMiLCJzdGFydExpc3RlbmluZyIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwia2V5IiwiZ2V0UGFnZU9mZnNldCIsIngiLCJ3aW5kb3ciLCJwYWdlWE9mZnNldCIsInVuZGVmaW5lZCIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwiYm9keSIsInBhcmVudE5vZGUiLCJzY3JvbGxMZWZ0IiwieSIsInBhZ2VZT2Zmc2V0Iiwic2Nyb2xsVG9wIiwiYWRkRXZlbnRMaXN0ZW5lcnMiLCJhZGRFdmVudExpc3RlbmVyIiwiZ2V0Q2hpbGRQb3MiLCJvZmZzZXRzIiwicmVjdCIsImNoaWxkUmVjdCIsInBhZ2VPZmZzZXQiLCJwYWRkaW5nIiwidG9wT2Zmc2V0IiwibGVmdE9mZnNldCIsInJpZ2h0T2Zmc2V0IiwiYW5jaG9yTGVmdCIsInBvcyIsInRvcCIsImxlZnQiLCJyaWdodCIsImlubmVyV2lkdGgiLCJsZWZ0T3JSaWdodCIsIndpZHRoIiwiaGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJjYW5Vc2VET00iLCJsaXN0ZW5lcklkQ291bnRlciIsInN1YnNjcmliZSIsImZuIiwiaWQiLCJkZWZhdWx0TW9kYWxTdHlsZSIsImNvbnRlbnQiLCJib3JkZXIiLCJib3R0b20iLCJvdmVybGF5IiwiYmFja2dyb3VuZENvbG9yIiwiV0lORE9XX1BBRCIsIm5vb3AiLCJQb3J0YWxlZCIsImlzVmlzaWJsZSIsImNoaWxkIiwiY3VycmVudCIsImVsZW1lbnQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJwcm9wcyIsInN0YXRlIiwic2V0U3RhdGUiLCJ1bnN1YnNjcmliZSIsImhhbmRsZVNjcm9sbCIsInByZXZQcm9wcyIsImRpZE9wZW4iLCJpc09wZW5lZCIsImRpZENsb3NlIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiX3VubW91bnRlZCIsIkNvbXAiLCJjb21wb25lbnQiLCJvdmVybGF5WkluZGV4Iiwib25DbG9zZSIsImNoaWxkcmVuIiwibW9kYWxQcm9wcyIsIm1vZGFsU3R5bGUiLCJ6SW5kZXgiLCJjb250ZXh0IiwicmVtb3ZlQ2hpbGQiLCJhcHBlbmRDaGlsZCIsInBvc2l0aW9uIiwib3BhY2l0eSIsInRyYW5zaXRpb24iLCJ0aGVtZSIsIm1hcmdpblRvcCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsU0FBUyxHQUFHLEVBQWxCOztBQUVBLElBQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUI7QUFBQSxTQUFNQyxNQUFNLENBQUNDLElBQVAsQ0FBWUgsU0FBWixFQUF1QkksT0FBdkIsQ0FBK0IsVUFBQUMsR0FBRztBQUFBLFdBQUlMLFNBQVMsQ0FBQ0ssR0FBRCxDQUFULEVBQUo7QUFBQSxHQUFsQyxDQUFOO0FBQUEsQ0FBdkI7O0FBRUEsSUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQjtBQUFBLFNBQU87QUFDM0JDLElBQUFBLENBQUMsRUFDQ0MsbUJBQU9DLFdBQVAsS0FBdUJDLFNBQXZCLEdBQ0lGLG1CQUFPQyxXQURYLEdBRUksQ0FBQ0UsUUFBUSxDQUFDQyxlQUFULElBQTRCRCxRQUFRLENBQUNFLElBQVQsQ0FBY0MsVUFBMUMsSUFBd0RILFFBQVEsQ0FBQ0UsSUFBbEUsRUFBd0VFLFVBSm5EO0FBSzNCQyxJQUFBQSxDQUFDLEVBQ0NSLG1CQUFPUyxXQUFQLEtBQXVCUCxTQUF2QixHQUNJRixtQkFBT1MsV0FEWCxHQUVJLENBQUNOLFFBQVEsQ0FBQ0MsZUFBVCxJQUE0QkQsUUFBUSxDQUFDRSxJQUFULENBQWNDLFVBQTFDLElBQXdESCxRQUFRLENBQUNFLElBQWxFLEVBQXdFSztBQVJuRCxHQUFQO0FBQUEsQ0FBdEI7O0FBV0EsSUFBTUMsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixHQUFNO0FBQzlCLE1BQUlSLFFBQVEsSUFBSUEsUUFBUSxDQUFDRSxJQUF6QixFQUNFRixRQUFRLENBQUNFLElBQVQsQ0FBY08sZ0JBQWQsQ0FBK0IsWUFBL0IsRUFBNkMsd0JBQVNuQixjQUFULEVBQXlCLEdBQXpCLEVBQThCLElBQTlCLENBQTdDOztBQUNGTyxxQkFBT1ksZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0Msd0JBQVNuQixjQUFULEVBQXlCLEVBQXpCLEVBQTZCLElBQTdCLENBQWxDO0FBQ0QsQ0FKRDs7QUFNTyxJQUFNb0IsV0FBVyxHQUFHLFNBQWRBLFdBQWMsT0FBcUQ7QUFBQSxNQUFuREMsT0FBbUQsUUFBbkRBLE9BQW1EO0FBQUEsTUFBMUNDLElBQTBDLFFBQTFDQSxJQUEwQztBQUFBLE1BQXBDQyxTQUFvQyxRQUFwQ0EsU0FBb0M7QUFBQSxNQUF6QkMsVUFBeUIsUUFBekJBLFVBQXlCO0FBQUEsTUFBYkMsT0FBYSxRQUFiQSxPQUFhO0FBQUEsTUFDdkVDLFNBRHVFLEdBQ2pDTCxPQURpQyxDQUN2RUssU0FEdUU7QUFBQSxNQUM1REMsVUFENEQsR0FDakNOLE9BRGlDLENBQzVETSxVQUQ0RDtBQUFBLE1BQ2hEQyxXQURnRCxHQUNqQ1AsT0FEaUMsQ0FDaERPLFdBRGdEO0FBRzlFLE1BQU1DLFVBQVUsR0FBR0YsVUFBVSxLQUFLbEIsU0FBbEM7O0FBQ0EsTUFBTXFCLEdBQUc7QUFDUEMsSUFBQUEsR0FBRyxFQUFFUCxVQUFVLENBQUNULENBQVgsR0FBZU8sSUFBSSxDQUFDUyxHQUFwQixJQUEyQkwsU0FBUyxJQUFJLENBQXhDO0FBREUsS0FFSEcsVUFBVSxHQUNWO0FBQUNHLElBQUFBLElBQUksRUFBRVIsVUFBVSxDQUFDbEIsQ0FBWCxHQUFlZ0IsSUFBSSxDQUFDVSxJQUFwQixHQUEyQkw7QUFBbEMsR0FEVSxHQUVWO0FBQUNNLElBQUFBLEtBQUssRUFBRTFCLG1CQUFPMkIsVUFBUCxHQUFvQlosSUFBSSxDQUFDVyxLQUF6QixHQUFpQ1QsVUFBVSxDQUFDbEIsQ0FBNUMsSUFBaURzQixXQUFXLElBQUksQ0FBaEU7QUFBUixHQUpHLENBQVQ7O0FBT0EsTUFBTU8sV0FBVyxHQUFHTixVQUFVLEdBQUcsTUFBSCxHQUFZLE9BQTFDOztBQUVBLE1BQUlDLEdBQUcsQ0FBQ0ssV0FBRCxDQUFILElBQW9CTCxHQUFHLENBQUNLLFdBQUQsQ0FBSCxHQUFtQixDQUEzQyxFQUE4QztBQUM1Q0wsSUFBQUEsR0FBRyxDQUFDSyxXQUFELENBQUgsR0FBbUJWLE9BQW5CO0FBQ0QsR0FGRCxNQUVPLElBQUlLLEdBQUcsQ0FBQ0ssV0FBRCxDQUFILElBQW9CTCxHQUFHLENBQUNLLFdBQUQsQ0FBSCxHQUFtQlosU0FBUyxDQUFDYSxLQUE3QixHQUFxQzdCLG1CQUFPMkIsVUFBcEUsRUFBZ0Y7QUFDckZKLElBQUFBLEdBQUcsQ0FBQ0ssV0FBRCxDQUFILEdBQW1CNUIsbUJBQU8yQixVQUFQLEdBQW9CWCxTQUFTLENBQUNhLEtBQTlCLEdBQXNDWCxPQUF6RDtBQUNEOztBQUVELE1BQUlLLEdBQUcsQ0FBQ0MsR0FBSixHQUFVLENBQWQsRUFBaUI7QUFDZkQsSUFBQUEsR0FBRyxDQUFDQyxHQUFKLEdBQVVOLE9BQVY7QUFDRCxHQUZELE1BRU8sSUFBSUssR0FBRyxDQUFDQyxHQUFKLEdBQVVSLFNBQVMsQ0FBQ2MsTUFBcEIsR0FBNkI5QixtQkFBTytCLFdBQXhDLEVBQXFEO0FBQzFEUixJQUFBQSxHQUFHLENBQUNDLEdBQUosR0FBVXhCLG1CQUFPK0IsV0FBUCxHQUFxQmYsU0FBUyxDQUFDYyxNQUEvQixHQUF3Q1osT0FBbEQ7QUFDRDs7QUFFRCxTQUFPSyxHQUFQO0FBQ0QsQ0ExQk07Ozs7QUE0QlAsSUFBSVMsZ0JBQUosRUFBZTtBQUNiLE1BQUk3QixRQUFRLENBQUNFLElBQWIsRUFBbUI7QUFDakJNLElBQUFBLGlCQUFpQjtBQUNsQixHQUZELE1BRU87QUFDTFIsSUFBQUEsUUFBUSxDQUFDUyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOENELGlCQUE5QztBQUNEO0FBQ0Y7O0FBRUQsSUFBSXNCLGlCQUFpQixHQUFHLENBQXhCOztBQUNBLFNBQVNDLFNBQVQsQ0FBbUJDLEVBQW5CLEVBQXVCO0FBQ3JCRixFQUFBQSxpQkFBaUIsSUFBSSxDQUFyQjtBQUNBLE1BQU1HLEVBQUUsR0FBR0gsaUJBQVg7QUFDQXpDLEVBQUFBLFNBQVMsQ0FBQzRDLEVBQUQsQ0FBVCxHQUFnQkQsRUFBaEI7QUFDQSxTQUFPO0FBQUEsV0FBTSxPQUFPM0MsU0FBUyxDQUFDNEMsRUFBRCxDQUF0QjtBQUFBLEdBQVA7QUFDRDs7QUFFRCxJQUFNQyxpQkFBaUIsR0FBRztBQUN4QkMsRUFBQUEsT0FBTyxFQUFFO0FBQ1BkLElBQUFBLEdBQUcsRUFBRSxDQURFO0FBRVBDLElBQUFBLElBQUksRUFBRSxDQUZDO0FBR1BjLElBQUFBLE1BQU0sRUFBRSxDQUhEO0FBSVBiLElBQUFBLEtBQUssRUFBRSxNQUpBO0FBS1BjLElBQUFBLE1BQU0sRUFBRSxNQUxEO0FBTVB0QixJQUFBQSxPQUFPLEVBQUU7QUFORixHQURlO0FBU3hCdUIsRUFBQUEsT0FBTyxFQUFFO0FBQ1BmLElBQUFBLEtBQUssRUFBRSxNQURBO0FBRVBjLElBQUFBLE1BQU0sRUFBRSxNQUZEO0FBR1BYLElBQUFBLEtBQUssRUFBRSxPQUhBO0FBSVBDLElBQUFBLE1BQU0sRUFBRSxPQUpEO0FBS1BZLElBQUFBLGVBQWUsRUFBRTtBQUxWO0FBVGUsQ0FBMUI7QUFrQkEsSUFBTUMsVUFBVSxHQUFHLEVBQW5COztBQUVBLElBQU1DLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU0sQ0FBRSxDQUFyQjs7SUFFTUMsUTs7Ozs7Ozs7Ozs7Ozs7OzhGQU9JO0FBQ050QixNQUFBQSxHQUFHLEVBQUUsSUFEQztBQUVOdUIsTUFBQUEsU0FBUyxFQUFFO0FBRkwsSzs2R0E2QkUsdUI7MkdBQ0YsdUI7cUdBR08sWUFBTTtBQUNuQixVQUFJLE1BQUtDLEtBQUwsQ0FBV0MsT0FBZixFQUF3QjtBQUN0QixZQUFNakMsSUFBSSxHQUFHLE1BQUtrQyxPQUFMLENBQWFELE9BQWIsQ0FBcUJFLHFCQUFyQixFQUFiOztBQUNBLFlBQU1sQyxTQUFTLEdBQUcsTUFBSytCLEtBQUwsQ0FBV0MsT0FBWCxJQUFzQixNQUFLRCxLQUFMLENBQVdDLE9BQVgsQ0FBbUJFLHFCQUFuQixFQUF4Qzs7QUFDQSxZQUFNakMsVUFBVSxHQUFHbkIsYUFBYSxFQUFoQztBQUhzQiwwQkFJeUMsTUFBS3FELEtBSjlDO0FBQUEsWUFJVmhDLFNBSlUsZUFJZkssR0FKZTtBQUFBLFlBSU9KLFVBSlAsZUFJQ0ssSUFKRDtBQUFBLFlBSTBCSixXQUoxQixlQUltQkssS0FKbkI7QUFNdEIsWUFBTUgsR0FBRyxHQUFHVixXQUFXLENBQUM7QUFDdEJDLFVBQUFBLE9BQU8sRUFBRTtBQUFDSyxZQUFBQSxTQUFTLEVBQVRBLFNBQUQ7QUFBWUMsWUFBQUEsVUFBVSxFQUFWQSxVQUFaO0FBQXdCQyxZQUFBQSxXQUFXLEVBQVhBO0FBQXhCLFdBRGE7QUFFdEJOLFVBQUFBLElBQUksRUFBSkEsSUFGc0I7QUFHdEJDLFVBQUFBLFNBQVMsRUFBVEEsU0FIc0I7QUFJdEJDLFVBQUFBLFVBQVUsRUFBVkEsVUFKc0I7QUFLdEJDLFVBQUFBLE9BQU8sRUFBRXlCO0FBTGEsU0FBRCxDQUF2Qjs7QUFRQSxZQUFJLENBQUMseUJBQVFwQixHQUFSLEVBQWEsTUFBSzZCLEtBQUwsQ0FBVzdCLEdBQXhCLENBQUwsRUFBbUM7QUFDakMsZ0JBQUs4QixRQUFMLENBQWM7QUFBQzlCLFlBQUFBLEdBQUcsRUFBSEE7QUFBRCxXQUFkO0FBQ0Q7QUFDRjtBQUNGLEs7Ozs7Ozt3Q0EvQ21CO0FBQ2xCO0FBQ0EsV0FBSytCLFdBQUwsR0FBbUJwQixTQUFTLENBQUMsS0FBS3FCLFlBQU4sQ0FBNUI7QUFDQSxXQUFLQSxZQUFMO0FBQ0Q7Ozt1Q0FFa0JDLFMsRUFBVztBQUFBOztBQUM1QixVQUFNQyxPQUFPLEdBQUcsS0FBS04sS0FBTCxDQUFXTyxRQUFYLElBQXVCLENBQUNGLFNBQVMsQ0FBQ0UsUUFBbEQ7QUFDQSxVQUFNQyxRQUFRLEdBQUcsQ0FBQyxLQUFLUixLQUFMLENBQVdPLFFBQVosSUFBd0JGLFNBQVMsQ0FBQ0UsUUFBbkQ7O0FBQ0EsVUFBSUQsT0FBTyxJQUFJRSxRQUFmLEVBQXlCO0FBQ3ZCM0QsMkJBQU80RCxxQkFBUCxDQUE2QixZQUFNO0FBQ2pDLGNBQUksTUFBSSxDQUFDQyxVQUFULEVBQXFCOztBQUNyQixVQUFBLE1BQUksQ0FBQ1IsUUFBTCxDQUFjO0FBQUNQLFlBQUFBLFNBQVMsRUFBRVc7QUFBWixXQUFkO0FBQ0QsU0FIRDtBQUlEOztBQUVELFdBQUtGLFlBQUw7QUFDRDs7OzJDQUVzQjtBQUNyQixXQUFLTSxVQUFMLEdBQWtCLElBQWxCO0FBQ0EsV0FBS1AsV0FBTDtBQUNEOzs7NkJBMkJRO0FBQUE7O0FBQUEseUJBV0gsS0FBS0gsS0FYRjtBQUFBLFVBR01XLElBSE4sZ0JBR0xDLFNBSEs7QUFBQSxVQUlMQyxhQUpLLGdCQUlMQSxhQUpLO0FBQUEsVUFLTE4sUUFMSyxnQkFLTEEsUUFMSztBQUFBLFVBTUxPLE9BTkssZ0JBTUxBLE9BTks7QUFBQSxVQVNMQyxRQVRLLGdCQVNMQSxRQVRLO0FBQUEsVUFVTEMsVUFWSyxnQkFVTEEsVUFWSztBQUFBLHdCQWFrQixLQUFLZixLQWJ2QjtBQUFBLFVBYUFOLFNBYkEsZUFhQUEsU0FiQTtBQUFBLFVBYVd2QixHQWJYLGVBYVdBLEdBYlg7O0FBZVAsVUFBTTZDLFVBQVUsbUNBQ1gvQixpQkFEVztBQUVkSSxRQUFBQSxPQUFPLGtDQUNGSixpQkFBaUIsQ0FBQ0ksT0FEaEI7QUFFTDtBQUNBNEIsVUFBQUEsTUFBTSxFQUFFTCxhQUFhLElBQUk7QUFIcEI7QUFGTyxRQUFoQjs7QUFTQSwwQkFDRSxnQ0FBQyxvQkFBRCxDQUFhLFFBQWIsUUFDRyxVQUFBTSxPQUFPO0FBQUEsNEJBQ04sZ0NBQUMsSUFBRDtBQUFNLFVBQUEsR0FBRyxFQUFFLE1BQUksQ0FBQ3JCO0FBQWhCLFdBQ0dTLFFBQVEsZ0JBQ1AsZ0NBQUMsc0JBQUQ7QUFDRSxVQUFBLFNBQVMsRUFBQztBQURaLFdBRU1TLFVBRk47QUFHRSxVQUFBLFdBQVcsRUFBRSxLQUhmO0FBSUUsVUFBQSxNQUFNLE1BSlI7QUFLRSxVQUFBLEtBQUssRUFBRUMsVUFMVDtBQU1FLFVBQUEsY0FBYyxFQUFFLDBCQUFNO0FBQ3BCO0FBQ0E7QUFDQSxtQkFDR0UsT0FBTyxJQUFJQSxPQUFPLENBQUN0QixPQUFwQixJQUFnQztBQUM5QnVCLGNBQUFBLFdBQVcsRUFBRSx1QkFBTSxDQUFFLENBRFM7QUFFOUJDLGNBQUFBLFdBQVcsRUFBRSx1QkFBTSxDQUFFO0FBRlMsYUFEbEM7QUFNRCxXQWZIO0FBZ0JFLFVBQUEsY0FBYyxFQUFFUDtBQWhCbEIseUJBa0JFO0FBQ0UsVUFBQSxTQUFTLEVBQUMsa0JBRFo7QUFFRSxVQUFBLEdBQUcsRUFBQyxNQUZOO0FBR0UsVUFBQSxLQUFLO0FBQ0hRLFlBQUFBLFFBQVEsRUFBRSxPQURQO0FBRUhDLFlBQUFBLE9BQU8sRUFBRTVCLFNBQVMsR0FBRyxDQUFILEdBQU8sQ0FGdEI7QUFHSHRCLFlBQUFBLEdBQUcsRUFBRSxNQUFJLENBQUM0QixLQUFMLENBQVc1QixHQUhiO0FBSUhtRCxZQUFBQSxVQUFVLEVBQUUsTUFBSSxDQUFDeEIsS0FBTCxDQUFXeUIsS0FBWCxDQUFpQkQsVUFKMUI7QUFLSEUsWUFBQUEsU0FBUyxFQUFFL0IsU0FBUyxHQUFHLEtBQUgsR0FBVztBQUw1QixhQU1BdkIsR0FOQTtBQUhQLHdCQVlFO0FBQ0UsVUFBQSxHQUFHLEVBQUUsTUFBSSxDQUFDd0IsS0FEWjtBQUVFLFVBQUEsS0FBSyxFQUFFO0FBQ0wwQixZQUFBQSxRQUFRLEVBQUUsVUFETDtBQUVMSixZQUFBQSxNQUFNLEVBQUVMLGFBQWEsR0FBR0EsYUFBYSxHQUFHLENBQW5CLEdBQXVCO0FBRnZDO0FBRlQsV0FPR0UsUUFQSCxDQVpGLENBbEJGLENBRE8sR0EwQ0wsSUEzQ04sQ0FETTtBQUFBLE9BRFYsQ0FERjtBQW1ERDs7O0VBeElvQlksZ0I7O2lDQUFqQmpDLFEsa0JBQ2tCO0FBQ3BCa0IsRUFBQUEsU0FBUyxFQUFFLEtBRFM7QUFFcEJFLEVBQUFBLE9BQU8sRUFBRXJCLElBRlc7QUFHcEJnQyxFQUFBQSxLQUFLLEVBQUxBO0FBSG9CLEM7O2VBMElULGlDQUFVL0IsUUFBVixDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50LCBjcmVhdGVSZWZ9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGRlYm91bmNlIGZyb20gJ2xvZGFzaC5kZWJvdW5jZSc7XHJcbmltcG9ydCBpc0VxdWFsIGZyb20gJ2xvZGFzaC5pc2VxdWFsJztcclxuXHJcbmltcG9ydCB7Y2FuVXNlRE9NfSBmcm9tICdleGVudic7XHJcbmltcG9ydCB7d2l0aFRoZW1lfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7Um9vdENvbnRleHR9IGZyb20gJ2NvbXBvbmVudHMvY29udGV4dCc7XHJcbmltcG9ydCBNb2RhbCBmcm9tICdyZWFjdC1tb2RhbCc7XHJcbmltcG9ydCB3aW5kb3cgZnJvbSAnZ2xvYmFsL3dpbmRvdyc7XHJcbmltcG9ydCB7dGhlbWV9IGZyb20gJ3N0eWxlcy9iYXNlJztcclxuXHJcbmNvbnN0IGxpc3RlbmVycyA9IHt9O1xyXG5cclxuY29uc3Qgc3RhcnRMaXN0ZW5pbmcgPSAoKSA9PiBPYmplY3Qua2V5cyhsaXN0ZW5lcnMpLmZvckVhY2goa2V5ID0+IGxpc3RlbmVyc1trZXldKCkpO1xyXG5cclxuY29uc3QgZ2V0UGFnZU9mZnNldCA9ICgpID0+ICh7XHJcbiAgeDpcclxuICAgIHdpbmRvdy5wYWdlWE9mZnNldCAhPT0gdW5kZWZpbmVkXHJcbiAgICAgID8gd2luZG93LnBhZ2VYT2Zmc2V0XHJcbiAgICAgIDogKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCB8fCBkb2N1bWVudC5ib2R5LnBhcmVudE5vZGUgfHwgZG9jdW1lbnQuYm9keSkuc2Nyb2xsTGVmdCxcclxuICB5OlxyXG4gICAgd2luZG93LnBhZ2VZT2Zmc2V0ICE9PSB1bmRlZmluZWRcclxuICAgICAgPyB3aW5kb3cucGFnZVlPZmZzZXRcclxuICAgICAgOiAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50IHx8IGRvY3VtZW50LmJvZHkucGFyZW50Tm9kZSB8fCBkb2N1bWVudC5ib2R5KS5zY3JvbGxUb3BcclxufSk7XHJcblxyXG5jb25zdCBhZGRFdmVudExpc3RlbmVycyA9ICgpID0+IHtcclxuICBpZiAoZG9jdW1lbnQgJiYgZG9jdW1lbnQuYm9keSlcclxuICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V3aGVlbCcsIGRlYm91bmNlKHN0YXJ0TGlzdGVuaW5nLCAxMDAsIHRydWUpKTtcclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZGVib3VuY2Uoc3RhcnRMaXN0ZW5pbmcsIDUwLCB0cnVlKSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0Q2hpbGRQb3MgPSAoe29mZnNldHMsIHJlY3QsIGNoaWxkUmVjdCwgcGFnZU9mZnNldCwgcGFkZGluZ30pID0+IHtcclxuICBjb25zdCB7dG9wT2Zmc2V0LCBsZWZ0T2Zmc2V0LCByaWdodE9mZnNldH0gPSBvZmZzZXRzO1xyXG5cclxuICBjb25zdCBhbmNob3JMZWZ0ID0gbGVmdE9mZnNldCAhPT0gdW5kZWZpbmVkO1xyXG4gIGNvbnN0IHBvcyA9IHtcclxuICAgIHRvcDogcGFnZU9mZnNldC55ICsgcmVjdC50b3AgKyAodG9wT2Zmc2V0IHx8IDApLFxyXG4gICAgLi4uKGFuY2hvckxlZnRcclxuICAgICAgPyB7bGVmdDogcGFnZU9mZnNldC54ICsgcmVjdC5sZWZ0ICsgbGVmdE9mZnNldH1cclxuICAgICAgOiB7cmlnaHQ6IHdpbmRvdy5pbm5lcldpZHRoIC0gcmVjdC5yaWdodCAtIHBhZ2VPZmZzZXQueCArIChyaWdodE9mZnNldCB8fCAwKX0pXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgbGVmdE9yUmlnaHQgPSBhbmNob3JMZWZ0ID8gJ2xlZnQnIDogJ3JpZ2h0JztcclxuXHJcbiAgaWYgKHBvc1tsZWZ0T3JSaWdodF0gJiYgcG9zW2xlZnRPclJpZ2h0XSA8IDApIHtcclxuICAgIHBvc1tsZWZ0T3JSaWdodF0gPSBwYWRkaW5nO1xyXG4gIH0gZWxzZSBpZiAocG9zW2xlZnRPclJpZ2h0XSAmJiBwb3NbbGVmdE9yUmlnaHRdICsgY2hpbGRSZWN0LndpZHRoID4gd2luZG93LmlubmVyV2lkdGgpIHtcclxuICAgIHBvc1tsZWZ0T3JSaWdodF0gPSB3aW5kb3cuaW5uZXJXaWR0aCAtIGNoaWxkUmVjdC53aWR0aCAtIHBhZGRpbmc7XHJcbiAgfVxyXG5cclxuICBpZiAocG9zLnRvcCA8IDApIHtcclxuICAgIHBvcy50b3AgPSBwYWRkaW5nO1xyXG4gIH0gZWxzZSBpZiAocG9zLnRvcCArIGNoaWxkUmVjdC5oZWlnaHQgPiB3aW5kb3cuaW5uZXJIZWlnaHQpIHtcclxuICAgIHBvcy50b3AgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLSBjaGlsZFJlY3QuaGVpZ2h0IC0gcGFkZGluZztcclxuICB9XHJcblxyXG4gIHJldHVybiBwb3M7XHJcbn07XHJcblxyXG5pZiAoY2FuVXNlRE9NKSB7XHJcbiAgaWYgKGRvY3VtZW50LmJvZHkpIHtcclxuICAgIGFkZEV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBhZGRFdmVudExpc3RlbmVycyk7XHJcbiAgfVxyXG59XHJcblxyXG5sZXQgbGlzdGVuZXJJZENvdW50ZXIgPSAwO1xyXG5mdW5jdGlvbiBzdWJzY3JpYmUoZm4pIHtcclxuICBsaXN0ZW5lcklkQ291bnRlciArPSAxO1xyXG4gIGNvbnN0IGlkID0gbGlzdGVuZXJJZENvdW50ZXI7XHJcbiAgbGlzdGVuZXJzW2lkXSA9IGZuO1xyXG4gIHJldHVybiAoKSA9PiBkZWxldGUgbGlzdGVuZXJzW2lkXTtcclxufVxyXG5cclxuY29uc3QgZGVmYXVsdE1vZGFsU3R5bGUgPSB7XHJcbiAgY29udGVudDoge1xyXG4gICAgdG9wOiAwLFxyXG4gICAgbGVmdDogMCxcclxuICAgIGJvcmRlcjogMCxcclxuICAgIHJpZ2h0OiAnYXV0bycsXHJcbiAgICBib3R0b206ICdhdXRvJyxcclxuICAgIHBhZGRpbmc6ICcwcHggMHB4IDBweCAwcHgnXHJcbiAgfSxcclxuICBvdmVybGF5OiB7XHJcbiAgICByaWdodDogJ2F1dG8nLFxyXG4gICAgYm90dG9tOiAnYXV0bycsXHJcbiAgICB3aWR0aDogJzEwMHZ3JyxcclxuICAgIGhlaWdodDogJzEwMHZoJyxcclxuICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMCwgMCwgMCwgMCknXHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgV0lORE9XX1BBRCA9IDQwO1xyXG5cclxuY29uc3Qgbm9vcCA9ICgpID0+IHt9O1xyXG5cclxuY2xhc3MgUG9ydGFsZWQgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XHJcbiAgICBjb21wb25lbnQ6ICdkaXYnLFxyXG4gICAgb25DbG9zZTogbm9vcCxcclxuICAgIHRoZW1lXHJcbiAgfTtcclxuXHJcbiAgc3RhdGUgPSB7XHJcbiAgICBwb3M6IG51bGwsXHJcbiAgICBpc1Zpc2libGU6IGZhbHNlXHJcbiAgfTtcclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAvLyByZWxhdGl2ZVxyXG4gICAgdGhpcy51bnN1YnNjcmliZSA9IHN1YnNjcmliZSh0aGlzLmhhbmRsZVNjcm9sbCk7XHJcbiAgICB0aGlzLmhhbmRsZVNjcm9sbCgpO1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xyXG4gICAgY29uc3QgZGlkT3BlbiA9IHRoaXMucHJvcHMuaXNPcGVuZWQgJiYgIXByZXZQcm9wcy5pc09wZW5lZDtcclxuICAgIGNvbnN0IGRpZENsb3NlID0gIXRoaXMucHJvcHMuaXNPcGVuZWQgJiYgcHJldlByb3BzLmlzT3BlbmVkO1xyXG4gICAgaWYgKGRpZE9wZW4gfHwgZGlkQ2xvc2UpIHtcclxuICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3VubW91bnRlZCkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2lzVmlzaWJsZTogZGlkT3Blbn0pO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmhhbmRsZVNjcm9sbCgpO1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgICB0aGlzLl91bm1vdW50ZWQgPSB0cnVlO1xyXG4gICAgdGhpcy51bnN1YnNjcmliZSgpO1xyXG4gIH1cclxuXHJcbiAgZWxlbWVudCA9IGNyZWF0ZVJlZigpO1xyXG4gIGNoaWxkID0gY3JlYXRlUmVmKCk7XHJcblxyXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjb21wbGV4aXR5XHJcbiAgaGFuZGxlU2Nyb2xsID0gKCkgPT4ge1xyXG4gICAgaWYgKHRoaXMuY2hpbGQuY3VycmVudCkge1xyXG4gICAgICBjb25zdCByZWN0ID0gdGhpcy5lbGVtZW50LmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgIGNvbnN0IGNoaWxkUmVjdCA9IHRoaXMuY2hpbGQuY3VycmVudCAmJiB0aGlzLmNoaWxkLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgIGNvbnN0IHBhZ2VPZmZzZXQgPSBnZXRQYWdlT2Zmc2V0KCk7XHJcbiAgICAgIGNvbnN0IHt0b3A6IHRvcE9mZnNldCwgbGVmdDogbGVmdE9mZnNldCwgcmlnaHQ6IHJpZ2h0T2Zmc2V0fSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICBjb25zdCBwb3MgPSBnZXRDaGlsZFBvcyh7XHJcbiAgICAgICAgb2Zmc2V0czoge3RvcE9mZnNldCwgbGVmdE9mZnNldCwgcmlnaHRPZmZzZXR9LFxyXG4gICAgICAgIHJlY3QsXHJcbiAgICAgICAgY2hpbGRSZWN0LFxyXG4gICAgICAgIHBhZ2VPZmZzZXQsXHJcbiAgICAgICAgcGFkZGluZzogV0lORE9XX1BBRFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGlmICghaXNFcXVhbChwb3MsIHRoaXMuc3RhdGUucG9zKSkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3Bvc30pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3Qge1xyXG4gICAgICAvLyByZWxhdGl2ZVxyXG4gICAgICBjb21wb25lbnQ6IENvbXAsXHJcbiAgICAgIG92ZXJsYXlaSW5kZXgsXHJcbiAgICAgIGlzT3BlbmVkLFxyXG4gICAgICBvbkNsb3NlLFxyXG5cclxuICAgICAgLy8gTW9yZGFsXHJcbiAgICAgIGNoaWxkcmVuLFxyXG4gICAgICBtb2RhbFByb3BzXHJcbiAgICB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICBjb25zdCB7aXNWaXNpYmxlLCBwb3N9ID0gdGhpcy5zdGF0ZTtcclxuXHJcbiAgICBjb25zdCBtb2RhbFN0eWxlID0ge1xyXG4gICAgICAuLi5kZWZhdWx0TW9kYWxTdHlsZSxcclxuICAgICAgb3ZlcmxheToge1xyXG4gICAgICAgIC4uLmRlZmF1bHRNb2RhbFN0eWxlLm92ZXJsYXksXHJcbiAgICAgICAgLy8gbmVlZHMgdG8gYmUgb24gdG9wIG9mIGV4aXN0aW5nIG1vZGFsXHJcbiAgICAgICAgekluZGV4OiBvdmVybGF5WkluZGV4IHx8IDk5OTlcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8Um9vdENvbnRleHQuQ29uc3VtZXI+XHJcbiAgICAgICAge2NvbnRleHQgPT4gKFxyXG4gICAgICAgICAgPENvbXAgcmVmPXt0aGlzLmVsZW1lbnR9PlxyXG4gICAgICAgICAgICB7aXNPcGVuZWQgPyAoXHJcbiAgICAgICAgICAgICAgPE1vZGFsXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtb2RhbC1wb3J0YWxcIlxyXG4gICAgICAgICAgICAgICAgey4uLm1vZGFsUHJvcHN9XHJcbiAgICAgICAgICAgICAgICBhcmlhSGlkZUFwcD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICBpc09wZW5cclxuICAgICAgICAgICAgICAgIHN0eWxlPXttb2RhbFN0eWxlfVxyXG4gICAgICAgICAgICAgICAgcGFyZW50U2VsZWN0b3I9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgLy8gUmVhY3QgbW9kYWwgaXNzdWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9yZWFjdGpzL3JlYWN0LW1vZGFsL2lzc3Vlcy83NjlcclxuICAgICAgICAgICAgICAgICAgLy8gZmFpbGVkIHRvIGV4ZWN1dGUgcmVtb3ZlQ2hpbGQgb24gcGFyZW50IG5vZGUgd2hlbiBpdCBpcyBhbHJlYWR5IHVubW91bnRlZFxyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIChjb250ZXh0ICYmIGNvbnRleHQuY3VycmVudCkgfHwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlQ2hpbGQ6ICgpID0+IHt9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgYXBwZW5kQ2hpbGQ6ICgpID0+IHt9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIG9uUmVxdWVzdENsb3NlPXtvbkNsb3NlfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicG9ydGFsZWQtY29udGVudFwiXHJcbiAgICAgICAgICAgICAgICAgIGtleT1cIml0ZW1cIlxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxyXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IGlzVmlzaWJsZSA/IDEgOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogdGhpcy5zdGF0ZS50b3AsXHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogdGhpcy5wcm9wcy50aGVtZS50cmFuc2l0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogaXNWaXNpYmxlID8gJzBweCcgOiAnMTRweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgLi4ucG9zXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICByZWY9e3RoaXMuY2hpbGR9XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgekluZGV4OiBvdmVybGF5WkluZGV4ID8gb3ZlcmxheVpJbmRleCArIDEgOiAxMDAwMFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICA8L0NvbXA+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9Sb290Q29udGV4dC5Db25zdW1lcj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoVGhlbWUoUG9ydGFsZWQpO1xyXG4iXX0=