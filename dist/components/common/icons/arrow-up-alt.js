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

var ArrowUpAlt = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(ArrowUpAlt, _Component);

  var _super = _createSuper(ArrowUpAlt);

  function ArrowUpAlt() {
    (0, _classCallCheck2["default"])(this, ArrowUpAlt);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(ArrowUpAlt, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement(_base["default"], this.props, /*#__PURE__*/_react["default"].createElement("path", {
        d: "M35.1724294,23.4869823 C33.9007391,22.4077948 32.0407391,22.5802323 30.9874294,23.8822323 L21.4022168,35.7397323 L21.4022168,3.80585729 C21.4022168,2.11829479 20.0731075,0.750419792 18.4333707,0.750419792 C16.7936338,0.750419792 15.4645245,2.11829479 15.4645245,3.80585729 L15.4645245,35.7397323 L5.87742937,23.8822323 C4.82882614,22.5802323 2.95282411,22.4077948 1.69713585,23.4869823 C0.433917229,24.5661698 0.26260144,26.4920448 1.31308727,27.789201 L16.1516703,46.1479823 C16.7155063,46.846451 17.552318,47.2504198 18.4333707,47.2504198 C19.3144233,47.2504198 20.151235,46.846451 20.7150711,46.1479823 L35.556478,27.789201 C36.6041399,26.4920448 36.4309415,24.5661698 35.1724294,23.4869823",
        transform: "rotate(-180.000000)"
      }));
    }
  }]);
  return ArrowUpAlt;
}(_react.Component);

exports["default"] = ArrowUpAlt;
(0, _defineProperty2["default"])(ArrowUpAlt, "propTypes", {
  /** Set the height of the icon, ex. '16px' */
  height: _propTypes["default"].string
});
(0, _defineProperty2["default"])(ArrowUpAlt, "defaultProps", {
  height: '16px',
  predefinedClassName: 'data-ex-icons-arrow_up_alt'
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9pY29ucy9hcnJvdy11cC1hbHQuanMiXSwibmFtZXMiOlsiQXJyb3dVcEFsdCIsInByb3BzIiwiQ29tcG9uZW50IiwiaGVpZ2h0IiwiUHJvcFR5cGVzIiwic3RyaW5nIiwicHJlZGVmaW5lZENsYXNzTmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7Ozs7OztJQUVxQkEsVTs7Ozs7Ozs7Ozs7OzZCQVdWO0FBQ1AsMEJBQ0UsZ0NBQUMsZ0JBQUQsRUFBVSxLQUFLQyxLQUFmLGVBQ0U7QUFDRSxRQUFBLENBQUMsRUFBQyx1ckJBREo7QUFFRSxRQUFBLFNBQVMsRUFBQztBQUZaLFFBREYsQ0FERjtBQVFEOzs7RUFwQnFDQyxnQjs7O2lDQUFuQkYsVSxlQUNBO0FBQ2pCO0FBQ0FHLEVBQUFBLE1BQU0sRUFBRUMsc0JBQVVDO0FBRkQsQztpQ0FEQUwsVSxrQkFNRztBQUNwQkcsRUFBQUEsTUFBTSxFQUFFLE1BRFk7QUFFcEJHLEVBQUFBLG1CQUFtQixFQUFFO0FBRkQsQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMCBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgQmFzZSBmcm9tICcuL2Jhc2UnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXJyb3dVcEFsdCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcclxuICAgIC8qKiBTZXQgdGhlIGhlaWdodCBvZiB0aGUgaWNvbiwgZXguICcxNnB4JyAqL1xyXG4gICAgaGVpZ2h0OiBQcm9wVHlwZXMuc3RyaW5nXHJcbiAgfTtcclxuXHJcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcclxuICAgIGhlaWdodDogJzE2cHgnLFxyXG4gICAgcHJlZGVmaW5lZENsYXNzTmFtZTogJ2RhdGEtZXgtaWNvbnMtYXJyb3dfdXBfYWx0J1xyXG4gIH07XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxCYXNlIHsuLi50aGlzLnByb3BzfT5cclxuICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgZD1cIk0zNS4xNzI0Mjk0LDIzLjQ4Njk4MjMgQzMzLjkwMDczOTEsMjIuNDA3Nzk0OCAzMi4wNDA3MzkxLDIyLjU4MDIzMjMgMzAuOTg3NDI5NCwyMy44ODIyMzIzIEwyMS40MDIyMTY4LDM1LjczOTczMjMgTDIxLjQwMjIxNjgsMy44MDU4NTcyOSBDMjEuNDAyMjE2OCwyLjExODI5NDc5IDIwLjA3MzEwNzUsMC43NTA0MTk3OTIgMTguNDMzMzcwNywwLjc1MDQxOTc5MiBDMTYuNzkzNjMzOCwwLjc1MDQxOTc5MiAxNS40NjQ1MjQ1LDIuMTE4Mjk0NzkgMTUuNDY0NTI0NSwzLjgwNTg1NzI5IEwxNS40NjQ1MjQ1LDM1LjczOTczMjMgTDUuODc3NDI5MzcsMjMuODgyMjMyMyBDNC44Mjg4MjYxNCwyMi41ODAyMzIzIDIuOTUyODI0MTEsMjIuNDA3Nzk0OCAxLjY5NzEzNTg1LDIzLjQ4Njk4MjMgQzAuNDMzOTE3MjI5LDI0LjU2NjE2OTggMC4yNjI2MDE0NCwyNi40OTIwNDQ4IDEuMzEzMDg3MjcsMjcuNzg5MjAxIEwxNi4xNTE2NzAzLDQ2LjE0Nzk4MjMgQzE2LjcxNTUwNjMsNDYuODQ2NDUxIDE3LjU1MjMxOCw0Ny4yNTA0MTk4IDE4LjQzMzM3MDcsNDcuMjUwNDE5OCBDMTkuMzE0NDIzMyw0Ny4yNTA0MTk4IDIwLjE1MTIzNSw0Ni44NDY0NTEgMjAuNzE1MDcxMSw0Ni4xNDc5ODIzIEwzNS41NTY0NzgsMjcuNzg5MjAxIEMzNi42MDQxMzk5LDI2LjQ5MjA0NDggMzYuNDMwOTQxNSwyNC41NjYxNjk4IDM1LjE3MjQyOTQsMjMuNDg2OTgyM1wiXHJcbiAgICAgICAgICB0cmFuc2Zvcm09XCJyb3RhdGUoLTE4MC4wMDAwMDApXCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L0Jhc2U+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iXX0=