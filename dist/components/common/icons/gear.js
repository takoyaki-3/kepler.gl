"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _base = _interopRequireDefault(require("./base"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Gear = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(Gear, _Component);

  var _super = _createSuper(Gear);

  function Gear() {
    (0, _classCallCheck2["default"])(this, Gear);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(Gear, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement(_base["default"], this.props, /*#__PURE__*/_react["default"].createElement("g", null, /*#__PURE__*/_react["default"].createElement("path", {
        d: "M39.1740741,58 L26.2185185,58 L25.9240741,52.012963 C24.9425926,51.7185185 24.0592593,51.3259259 23.1759259,50.9333333 L18.562963,54.7611111 L9.63148148,45.8296296 L13.6555556,41.2166667 C13.262963,40.3333333 12.8703704,39.45 12.5759259,38.5666667 L6.49074074,38.2722222 L6.49074074,25.3166667 L12.6740741,25.0222222 C12.9685185,24.0407407 13.3611111,23.1574074 13.7537037,22.3722222 L9.72962963,17.7592593 L18.6611111,8.82777778 L23.2740741,12.7537037 C24.0592593,12.3611111 24.9425926,11.8703704 26.0222222,11.5759259 L26.3166667,5.58888889 L39.1740741,5.58888889 L39.4685185,11.4777778 C40.45,11.7722222 41.3333333,12.1648148 42.412963,12.7537037 L46.7314815,8.92592593 L55.662963,17.8574074 L51.9333333,22.1759259 C52.4240741,23.2555556 52.8166667,24.237037 53.2092593,25.1203704 L58.9018519,25.4148148 L58.9018519,38.2722222 L53.2092593,38.5666667 C52.9148148,39.5481481 52.4240741,40.6277778 51.9333333,41.6092593 L55.5648148,45.9277778 L46.6333333,54.8592593 L42.3148148,51.0314815 C41.2351852,51.5222222 40.3518519,51.9148148 39.3703704,52.3074074 L39.1740741,58 Z M30.1444444,53.9759259 L35.3462963,53.9759259 L35.6407407,49.0685185 L37.112963,48.6759259 C38.5851852,48.2833333 40.0574074,47.6944444 41.8240741,46.712963 L43.1,46.0259259 L46.7314815,49.2648148 L50.362963,45.6333333 L47.2222222,42.0018519 L48.0074074,40.7259259 C48.7925926,39.3518519 49.4796296,37.6833333 49.8722222,36.112963 L50.2648148,34.6407407 L55.0740741,34.3462963 L55.0740741,29.1444444 L50.1666667,28.85 L49.7740741,27.3777778 C49.3814815,25.9055556 48.7925926,24.4333333 47.8111111,22.6666667 L47.1240741,21.4888889 L50.1666667,17.8574074 L46.5351852,14.2259259 L42.9037037,17.4648148 L41.7259259,16.7777778 C39.9592593,15.7962963 38.487037,15.2074074 37.0148148,14.8148148 L35.5425926,14.4222222 L35.2481481,9.51481481 L30.0462963,9.51481481 L29.7518519,14.6185185 L28.2796296,15.0111111 C26.9055556,15.4037037 25.6296296,15.8944444 23.9611111,16.8759259 L22.6851852,17.6611111 L18.7592593,14.2259259 L15.1277778,17.8574074 L18.562963,21.7833333 L17.7777778,23.0592593 C17.0907407,24.237037 16.5018519,25.7092593 16.0111111,27.4759259 L15.6185185,28.85 L10.4166667,29.1444444 L10.4166667,34.3462963 L15.6185185,34.6407407 L16.0111111,36.112963 C16.4037037,37.7814815 16.9925926,39.1555556 17.7777778,40.4314815 L18.562963,41.7074074 L15.1277778,45.6333333 L18.7592593,49.2648148 L22.6851852,46.0259259 L23.9611111,46.8111111 C25.3351852,47.5962963 26.6111111,48.1851852 28.2796296,48.5777778 L29.7518519,48.9703704 L30.1444444,53.9759259 Z"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M32.8068966,45.2275862 C25.2758621,45.2275862 19.1931034,39.2413793 19.1931034,31.9034483 C19.1931034,24.3724138 25.2758621,18.2896552 32.8068966,18.2896552 C40.337931,18.2896552 46.1310345,24.2758621 46.1310345,31.9034483 C46.2275862,39.2413793 40.1448276,45.2275862 32.8068966,45.2275862 Z M32.8068966,22.6344828 C27.6896552,22.6344828 23.537931,26.7862069 23.537931,31.9034483 C23.537931,36.9241379 27.6896552,40.9793103 32.8068966,40.9793103 C37.8275862,40.9793103 41.8827586,36.9241379 41.8827586,31.9034483 C41.8827586,26.6896552 37.9241379,22.6344828 32.8068966,22.6344828 Z"
      })));
    }
  }]);
  return Gear;
}(_react.Component);

exports["default"] = Gear;
(0, _defineProperty2["default"])(Gear, "propTypes", {
  /** Set the height of the icon, ex. '16px' */
  height: _propTypes["default"].string
});
(0, _defineProperty2["default"])(Gear, "defaultProps", {
  height: '16px',
  predefinedClassName: 'data-ex-icons-gear'
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9pY29ucy9nZWFyLmpzIl0sIm5hbWVzIjpbIkdlYXIiLCJwcm9wcyIsIkNvbXBvbmVudCIsImhlaWdodCIsIlByb3BUeXBlcyIsInN0cmluZyIsInByZWRlZmluZWRDbGFzc05hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUNBOzs7Ozs7SUFFcUJBLEk7Ozs7Ozs7Ozs7Ozs2QkFVVjtBQUNQLDBCQUNFLGdDQUFDLGdCQUFELEVBQVUsS0FBS0MsS0FBZixlQUNFLHdEQUNFO0FBQU0sUUFBQSxDQUFDLEVBQUM7QUFBUixRQURGLGVBRUU7QUFBTSxRQUFBLENBQUMsRUFBQztBQUFSLFFBRkYsQ0FERixDQURGO0FBUUQ7OztFQW5CK0JDLGdCOzs7aUNBQWJGLEksZUFDQTtBQUNqQjtBQUNBRyxFQUFBQSxNQUFNLEVBQUVDLHNCQUFVQztBQUZELEM7aUNBREFMLEksa0JBS0c7QUFDcEJHLEVBQUFBLE1BQU0sRUFBRSxNQURZO0FBRXBCRyxFQUFBQSxtQkFBbUIsRUFBRTtBQUZELEMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IEJhc2UgZnJvbSAnLi9iYXNlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdlYXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XHJcbiAgICAvKiogU2V0IHRoZSBoZWlnaHQgb2YgdGhlIGljb24sIGV4LiAnMTZweCcgKi9cclxuICAgIGhlaWdodDogUHJvcFR5cGVzLnN0cmluZ1xyXG4gIH07XHJcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcclxuICAgIGhlaWdodDogJzE2cHgnLFxyXG4gICAgcHJlZGVmaW5lZENsYXNzTmFtZTogJ2RhdGEtZXgtaWNvbnMtZ2VhcidcclxuICB9O1xyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8QmFzZSB7Li4udGhpcy5wcm9wc30+XHJcbiAgICAgICAgPGc+XHJcbiAgICAgICAgICA8cGF0aCBkPVwiTTM5LjE3NDA3NDEsNTggTDI2LjIxODUxODUsNTggTDI1LjkyNDA3NDEsNTIuMDEyOTYzIEMyNC45NDI1OTI2LDUxLjcxODUxODUgMjQuMDU5MjU5Myw1MS4zMjU5MjU5IDIzLjE3NTkyNTksNTAuOTMzMzMzMyBMMTguNTYyOTYzLDU0Ljc2MTExMTEgTDkuNjMxNDgxNDgsNDUuODI5NjI5NiBMMTMuNjU1NTU1Niw0MS4yMTY2NjY3IEMxMy4yNjI5NjMsNDAuMzMzMzMzMyAxMi44NzAzNzA0LDM5LjQ1IDEyLjU3NTkyNTksMzguNTY2NjY2NyBMNi40OTA3NDA3NCwzOC4yNzIyMjIyIEw2LjQ5MDc0MDc0LDI1LjMxNjY2NjcgTDEyLjY3NDA3NDEsMjUuMDIyMjIyMiBDMTIuOTY4NTE4NSwyNC4wNDA3NDA3IDEzLjM2MTExMTEsMjMuMTU3NDA3NCAxMy43NTM3MDM3LDIyLjM3MjIyMjIgTDkuNzI5NjI5NjMsMTcuNzU5MjU5MyBMMTguNjYxMTExMSw4LjgyNzc3Nzc4IEwyMy4yNzQwNzQxLDEyLjc1MzcwMzcgQzI0LjA1OTI1OTMsMTIuMzYxMTExMSAyNC45NDI1OTI2LDExLjg3MDM3MDQgMjYuMDIyMjIyMiwxMS41NzU5MjU5IEwyNi4zMTY2NjY3LDUuNTg4ODg4ODkgTDM5LjE3NDA3NDEsNS41ODg4ODg4OSBMMzkuNDY4NTE4NSwxMS40Nzc3Nzc4IEM0MC40NSwxMS43NzIyMjIyIDQxLjMzMzMzMzMsMTIuMTY0ODE0OCA0Mi40MTI5NjMsMTIuNzUzNzAzNyBMNDYuNzMxNDgxNSw4LjkyNTkyNTkzIEw1NS42NjI5NjMsMTcuODU3NDA3NCBMNTEuOTMzMzMzMywyMi4xNzU5MjU5IEM1Mi40MjQwNzQxLDIzLjI1NTU1NTYgNTIuODE2NjY2NywyNC4yMzcwMzcgNTMuMjA5MjU5MywyNS4xMjAzNzA0IEw1OC45MDE4NTE5LDI1LjQxNDgxNDggTDU4LjkwMTg1MTksMzguMjcyMjIyMiBMNTMuMjA5MjU5MywzOC41NjY2NjY3IEM1Mi45MTQ4MTQ4LDM5LjU0ODE0ODEgNTIuNDI0MDc0MSw0MC42Mjc3Nzc4IDUxLjkzMzMzMzMsNDEuNjA5MjU5MyBMNTUuNTY0ODE0OCw0NS45Mjc3Nzc4IEw0Ni42MzMzMzMzLDU0Ljg1OTI1OTMgTDQyLjMxNDgxNDgsNTEuMDMxNDgxNSBDNDEuMjM1MTg1Miw1MS41MjIyMjIyIDQwLjM1MTg1MTksNTEuOTE0ODE0OCAzOS4zNzAzNzA0LDUyLjMwNzQwNzQgTDM5LjE3NDA3NDEsNTggWiBNMzAuMTQ0NDQ0NCw1My45NzU5MjU5IEwzNS4zNDYyOTYzLDUzLjk3NTkyNTkgTDM1LjY0MDc0MDcsNDkuMDY4NTE4NSBMMzcuMTEyOTYzLDQ4LjY3NTkyNTkgQzM4LjU4NTE4NTIsNDguMjgzMzMzMyA0MC4wNTc0MDc0LDQ3LjY5NDQ0NDQgNDEuODI0MDc0MSw0Ni43MTI5NjMgTDQzLjEsNDYuMDI1OTI1OSBMNDYuNzMxNDgxNSw0OS4yNjQ4MTQ4IEw1MC4zNjI5NjMsNDUuNjMzMzMzMyBMNDcuMjIyMjIyMiw0Mi4wMDE4NTE5IEw0OC4wMDc0MDc0LDQwLjcyNTkyNTkgQzQ4Ljc5MjU5MjYsMzkuMzUxODUxOSA0OS40Nzk2Mjk2LDM3LjY4MzMzMzMgNDkuODcyMjIyMiwzNi4xMTI5NjMgTDUwLjI2NDgxNDgsMzQuNjQwNzQwNyBMNTUuMDc0MDc0MSwzNC4zNDYyOTYzIEw1NS4wNzQwNzQxLDI5LjE0NDQ0NDQgTDUwLjE2NjY2NjcsMjguODUgTDQ5Ljc3NDA3NDEsMjcuMzc3Nzc3OCBDNDkuMzgxNDgxNSwyNS45MDU1NTU2IDQ4Ljc5MjU5MjYsMjQuNDMzMzMzMyA0Ny44MTExMTExLDIyLjY2NjY2NjcgTDQ3LjEyNDA3NDEsMjEuNDg4ODg4OSBMNTAuMTY2NjY2NywxNy44NTc0MDc0IEw0Ni41MzUxODUyLDE0LjIyNTkyNTkgTDQyLjkwMzcwMzcsMTcuNDY0ODE0OCBMNDEuNzI1OTI1OSwxNi43Nzc3Nzc4IEMzOS45NTkyNTkzLDE1Ljc5NjI5NjMgMzguNDg3MDM3LDE1LjIwNzQwNzQgMzcuMDE0ODE0OCwxNC44MTQ4MTQ4IEwzNS41NDI1OTI2LDE0LjQyMjIyMjIgTDM1LjI0ODE0ODEsOS41MTQ4MTQ4MSBMMzAuMDQ2Mjk2Myw5LjUxNDgxNDgxIEwyOS43NTE4NTE5LDE0LjYxODUxODUgTDI4LjI3OTYyOTYsMTUuMDExMTExMSBDMjYuOTA1NTU1NiwxNS40MDM3MDM3IDI1LjYyOTYyOTYsMTUuODk0NDQ0NCAyMy45NjExMTExLDE2Ljg3NTkyNTkgTDIyLjY4NTE4NTIsMTcuNjYxMTExMSBMMTguNzU5MjU5MywxNC4yMjU5MjU5IEwxNS4xMjc3Nzc4LDE3Ljg1NzQwNzQgTDE4LjU2Mjk2MywyMS43ODMzMzMzIEwxNy43Nzc3Nzc4LDIzLjA1OTI1OTMgQzE3LjA5MDc0MDcsMjQuMjM3MDM3IDE2LjUwMTg1MTksMjUuNzA5MjU5MyAxNi4wMTExMTExLDI3LjQ3NTkyNTkgTDE1LjYxODUxODUsMjguODUgTDEwLjQxNjY2NjcsMjkuMTQ0NDQ0NCBMMTAuNDE2NjY2NywzNC4zNDYyOTYzIEwxNS42MTg1MTg1LDM0LjY0MDc0MDcgTDE2LjAxMTExMTEsMzYuMTEyOTYzIEMxNi40MDM3MDM3LDM3Ljc4MTQ4MTUgMTYuOTkyNTkyNiwzOS4xNTU1NTU2IDE3Ljc3Nzc3NzgsNDAuNDMxNDgxNSBMMTguNTYyOTYzLDQxLjcwNzQwNzQgTDE1LjEyNzc3NzgsNDUuNjMzMzMzMyBMMTguNzU5MjU5Myw0OS4yNjQ4MTQ4IEwyMi42ODUxODUyLDQ2LjAyNTkyNTkgTDIzLjk2MTExMTEsNDYuODExMTExMSBDMjUuMzM1MTg1Miw0Ny41OTYyOTYzIDI2LjYxMTExMTEsNDguMTg1MTg1MiAyOC4yNzk2Mjk2LDQ4LjU3Nzc3NzggTDI5Ljc1MTg1MTksNDguOTcwMzcwNCBMMzAuMTQ0NDQ0NCw1My45NzU5MjU5IFpcIiAvPlxyXG4gICAgICAgICAgPHBhdGggZD1cIk0zMi44MDY4OTY2LDQ1LjIyNzU4NjIgQzI1LjI3NTg2MjEsNDUuMjI3NTg2MiAxOS4xOTMxMDM0LDM5LjI0MTM3OTMgMTkuMTkzMTAzNCwzMS45MDM0NDgzIEMxOS4xOTMxMDM0LDI0LjM3MjQxMzggMjUuMjc1ODYyMSwxOC4yODk2NTUyIDMyLjgwNjg5NjYsMTguMjg5NjU1MiBDNDAuMzM3OTMxLDE4LjI4OTY1NTIgNDYuMTMxMDM0NSwyNC4yNzU4NjIxIDQ2LjEzMTAzNDUsMzEuOTAzNDQ4MyBDNDYuMjI3NTg2MiwzOS4yNDEzNzkzIDQwLjE0NDgyNzYsNDUuMjI3NTg2MiAzMi44MDY4OTY2LDQ1LjIyNzU4NjIgWiBNMzIuODA2ODk2NiwyMi42MzQ0ODI4IEMyNy42ODk2NTUyLDIyLjYzNDQ4MjggMjMuNTM3OTMxLDI2Ljc4NjIwNjkgMjMuNTM3OTMxLDMxLjkwMzQ0ODMgQzIzLjUzNzkzMSwzNi45MjQxMzc5IDI3LjY4OTY1NTIsNDAuOTc5MzEwMyAzMi44MDY4OTY2LDQwLjk3OTMxMDMgQzM3LjgyNzU4NjIsNDAuOTc5MzEwMyA0MS44ODI3NTg2LDM2LjkyNDEzNzkgNDEuODgyNzU4NiwzMS45MDM0NDgzIEM0MS44ODI3NTg2LDI2LjY4OTY1NTIgMzcuOTI0MTM3OSwyMi42MzQ0ODI4IDMyLjgwNjg5NjYsMjIuNjM0NDgyOCBaXCIgLz5cclxuICAgICAgICA8L2c+XHJcbiAgICAgIDwvQmFzZT5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiJdfQ==