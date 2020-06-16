"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _window = require("global/window");

var _versions = require("./versions");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/** @type {typeof import('./schema').Schema} */
var Schema = /*#__PURE__*/function () {
  function Schema() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$version = _ref.version,
        version = _ref$version === void 0 ? _versions.CURRENT_VERSION : _ref$version,
        _ref$key = _ref.key,
        key = _ref$key === void 0 ? '' : _ref$key,
        _ref$properties = _ref.properties,
        properties = _ref$properties === void 0 ? null : _ref$properties;

    (0, _classCallCheck2["default"])(this, Schema);
    this.version = version;
    this.properties = properties;
    this.key = key;
  }

  (0, _createClass2["default"])(Schema, [{
    key: "loadPropertiesOrApplySchema",
    value: function loadPropertiesOrApplySchema(node) {
      var parents = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var accumulator = arguments.length > 2 ? arguments[2] : undefined;
      return this._getPropertyValueFromSchema('load', node, parents, accumulator);
    }
  }, {
    key: "savePropertiesOrApplySchema",
    value: function savePropertiesOrApplySchema(node) {
      var parents = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var accumulator = arguments.length > 2 ? arguments[2] : undefined;
      return this._getPropertyValueFromSchema('save', node, parents, accumulator);
    }
  }, {
    key: "_getPropertyValueFromSchema",
    value: function _getPropertyValueFromSchema(operation, node) {
      var _this = this;

      var parents = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
      var accumulator = arguments.length > 3 ? arguments[3] : undefined;
      var internal = "_".concat(operation);
      return (0, _defineProperty2["default"])({}, this.key, this.properties ? Object.keys(this.properties).reduce(function (accu, key) {
        return _objectSpread(_objectSpread({}, accu), key in node ? _this.properties[key] ? // if it's another schema
        _this.properties[key][operation] ? // call save or load
        _this.properties[key][internal](node[key], [].concat((0, _toConsumableArray2["default"])(parents), [node]), accu) : {} : (0, _defineProperty2["default"])({}, key, node[key]) : {});
      }, {}) : node);
    }
  }, {
    key: "_isCurrentVersion",
    value: function _isCurrentVersion() {
      return this.version === _versions.CURRENT_VERSION;
    }
  }, {
    key: "outdatedVersionError",
    value: function outdatedVersionError() {
      if (!this._isCurrentVersion()) {
        _window.console.error("".concat(this.key, " ").concat(this.version, " is outdated. save should not be called anymore"));
      }
    }
  }, {
    key: "_save",
    value: function _save() {
      // make sure nothing is saved to an outdated version
      this.outdatedVersionError();
      return this.save.apply(this, arguments);
    }
  }, {
    key: "save",
    value: function save(node) {
      var parents = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var accumulator = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.savePropertiesOrApplySchema(node, parents, accumulator);
    }
  }, {
    key: "_load",
    value: function _load() {
      return this.load.apply(this, arguments);
    }
  }, {
    key: "load",
    value: function load(node) {
      var parents = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var accumulator = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.loadPropertiesOrApplySchema(node, parents, accumulator);
    }
  }]);
  return Schema;
}();

exports["default"] = Schema;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY2hlbWFzL3NjaGVtYS5qcyJdLCJuYW1lcyI6WyJTY2hlbWEiLCJ2ZXJzaW9uIiwiQ1VSUkVOVF9WRVJTSU9OIiwia2V5IiwicHJvcGVydGllcyIsIm5vZGUiLCJwYXJlbnRzIiwiYWNjdW11bGF0b3IiLCJfZ2V0UHJvcGVydHlWYWx1ZUZyb21TY2hlbWEiLCJvcGVyYXRpb24iLCJpbnRlcm5hbCIsIk9iamVjdCIsImtleXMiLCJyZWR1Y2UiLCJhY2N1IiwiX2lzQ3VycmVudFZlcnNpb24iLCJDb25zb2xlIiwiZXJyb3IiLCJvdXRkYXRlZFZlcnNpb25FcnJvciIsInNhdmUiLCJzYXZlUHJvcGVydGllc09yQXBwbHlTY2hlbWEiLCJsb2FkIiwibG9hZFByb3BlcnRpZXNPckFwcGx5U2NoZW1hIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFFQTs7Ozs7O0FBRUE7SUFDcUJBLE07QUFDbkIsb0JBQTJFO0FBQUEsbUZBQUosRUFBSTtBQUFBLDRCQUE5REMsT0FBOEQ7QUFBQSxRQUE5REEsT0FBOEQsNkJBQXBEQyx5QkFBb0Q7QUFBQSx3QkFBbkNDLEdBQW1DO0FBQUEsUUFBbkNBLEdBQW1DLHlCQUE3QixFQUE2QjtBQUFBLCtCQUF6QkMsVUFBeUI7QUFBQSxRQUF6QkEsVUFBeUIsZ0NBQVosSUFBWTs7QUFBQTtBQUN6RSxTQUFLSCxPQUFMLEdBQWVBLE9BQWY7QUFDQSxTQUFLRyxVQUFMLEdBQWtCQSxVQUFsQjtBQUNBLFNBQUtELEdBQUwsR0FBV0EsR0FBWDtBQUNEOzs7O2dEQUUyQkUsSSxFQUFpQztBQUFBLFVBQTNCQyxPQUEyQix1RUFBakIsRUFBaUI7QUFBQSxVQUFiQyxXQUFhO0FBQzNELGFBQU8sS0FBS0MsMkJBQUwsQ0FBaUMsTUFBakMsRUFBeUNILElBQXpDLEVBQStDQyxPQUEvQyxFQUF3REMsV0FBeEQsQ0FBUDtBQUNEOzs7Z0RBRTJCRixJLEVBQWlDO0FBQUEsVUFBM0JDLE9BQTJCLHVFQUFqQixFQUFpQjtBQUFBLFVBQWJDLFdBQWE7QUFDM0QsYUFBTyxLQUFLQywyQkFBTCxDQUFpQyxNQUFqQyxFQUF5Q0gsSUFBekMsRUFBK0NDLE9BQS9DLEVBQXdEQyxXQUF4RCxDQUFQO0FBQ0Q7OztnREFFMkJFLFMsRUFBV0osSSxFQUFpQztBQUFBOztBQUFBLFVBQTNCQyxPQUEyQix1RUFBakIsRUFBaUI7QUFBQSxVQUFiQyxXQUFhO0FBQ3RFLFVBQU1HLFFBQVEsY0FBT0QsU0FBUCxDQUFkO0FBQ0Esa0RBQ0csS0FBS04sR0FEUixFQUNjLEtBQUtDLFVBQUwsR0FDUk8sTUFBTSxDQUFDQyxJQUFQLENBQVksS0FBS1IsVUFBakIsRUFBNkJTLE1BQTdCLENBQW9DLFVBQUNDLElBQUQsRUFBT1gsR0FBUCxFQUFlO0FBQ2pELCtDQUNLVyxJQURMLEdBRU1YLEdBQUcsSUFBSUUsSUFBUCxHQUNBLEtBQUksQ0FBQ0QsVUFBTCxDQUFnQkQsR0FBaEIsSUFDRTtBQUNBLFFBQUEsS0FBSSxDQUFDQyxVQUFMLENBQWdCRCxHQUFoQixFQUFxQk0sU0FBckIsSUFDRTtBQUNBLFFBQUEsS0FBSSxDQUFDTCxVQUFMLENBQWdCRCxHQUFoQixFQUFxQk8sUUFBckIsRUFBK0JMLElBQUksQ0FBQ0YsR0FBRCxDQUFuQyxnREFBOENHLE9BQTlDLElBQXVERCxJQUF2RCxJQUE4RFMsSUFBOUQsQ0FGRixHQUdFLEVBTEosd0NBTUlYLEdBTkosRUFNVUUsSUFBSSxDQUFDRixHQUFELENBTmQsQ0FEQSxHQVFBLEVBVk47QUFZRCxPQWJELEVBYUcsRUFiSCxDQURRLEdBZVJFLElBaEJOO0FBa0JEOzs7d0NBRW1CO0FBQ2xCLGFBQU8sS0FBS0osT0FBTCxLQUFpQkMseUJBQXhCO0FBQ0Q7OzsyQ0FFc0I7QUFDckIsVUFBSSxDQUFDLEtBQUthLGlCQUFMLEVBQUwsRUFBK0I7QUFDN0JDLHdCQUFRQyxLQUFSLFdBQWlCLEtBQUtkLEdBQXRCLGNBQTZCLEtBQUtGLE9BQWxDO0FBQ0Q7QUFDRjs7OzRCQUVjO0FBQ2I7QUFDQSxXQUFLaUIsb0JBQUw7QUFDQSxhQUFPLEtBQUtDLElBQUwsdUJBQVA7QUFDRDs7O3lCQUVJZCxJLEVBQXNDO0FBQUEsVUFBaENDLE9BQWdDLHVFQUF0QixFQUFzQjtBQUFBLFVBQWxCQyxXQUFrQix1RUFBSixFQUFJO0FBQ3pDLGFBQU8sS0FBS2EsMkJBQUwsQ0FBaUNmLElBQWpDLEVBQXVDQyxPQUF2QyxFQUFnREMsV0FBaEQsQ0FBUDtBQUNEOzs7NEJBRWM7QUFDYixhQUFPLEtBQUtjLElBQUwsdUJBQVA7QUFDRDs7O3lCQUVJaEIsSSxFQUFzQztBQUFBLFVBQWhDQyxPQUFnQyx1RUFBdEIsRUFBc0I7QUFBQSxVQUFsQkMsV0FBa0IsdUVBQUosRUFBSTtBQUN6QyxhQUFPLEtBQUtlLDJCQUFMLENBQWlDakIsSUFBakMsRUFBdUNDLE9BQXZDLEVBQWdEQyxXQUFoRCxDQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQge2NvbnNvbGUgYXMgQ29uc29sZX0gZnJvbSAnZ2xvYmFsL3dpbmRvdyc7XHJcblxyXG5pbXBvcnQge0NVUlJFTlRfVkVSU0lPTn0gZnJvbSAnLi92ZXJzaW9ucyc7XHJcblxyXG4vKiogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vc2NoZW1hJykuU2NoZW1hfSAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY2hlbWEge1xyXG4gIGNvbnN0cnVjdG9yKHt2ZXJzaW9uID0gQ1VSUkVOVF9WRVJTSU9OLCBrZXkgPSAnJywgcHJvcGVydGllcyA9IG51bGx9ID0ge30pIHtcclxuICAgIHRoaXMudmVyc2lvbiA9IHZlcnNpb247XHJcbiAgICB0aGlzLnByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzO1xyXG4gICAgdGhpcy5rZXkgPSBrZXk7XHJcbiAgfVxyXG5cclxuICBsb2FkUHJvcGVydGllc09yQXBwbHlTY2hlbWEobm9kZSwgcGFyZW50cyA9IFtdLCBhY2N1bXVsYXRvcikge1xyXG4gICAgcmV0dXJuIHRoaXMuX2dldFByb3BlcnR5VmFsdWVGcm9tU2NoZW1hKCdsb2FkJywgbm9kZSwgcGFyZW50cywgYWNjdW11bGF0b3IpO1xyXG4gIH1cclxuXHJcbiAgc2F2ZVByb3BlcnRpZXNPckFwcGx5U2NoZW1hKG5vZGUsIHBhcmVudHMgPSBbXSwgYWNjdW11bGF0b3IpIHtcclxuICAgIHJldHVybiB0aGlzLl9nZXRQcm9wZXJ0eVZhbHVlRnJvbVNjaGVtYSgnc2F2ZScsIG5vZGUsIHBhcmVudHMsIGFjY3VtdWxhdG9yKTtcclxuICB9XHJcblxyXG4gIF9nZXRQcm9wZXJ0eVZhbHVlRnJvbVNjaGVtYShvcGVyYXRpb24sIG5vZGUsIHBhcmVudHMgPSBbXSwgYWNjdW11bGF0b3IpIHtcclxuICAgIGNvbnN0IGludGVybmFsID0gYF8ke29wZXJhdGlvbn1gO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgW3RoaXMua2V5XTogdGhpcy5wcm9wZXJ0aWVzXHJcbiAgICAgICAgPyBPYmplY3Qua2V5cyh0aGlzLnByb3BlcnRpZXMpLnJlZHVjZSgoYWNjdSwga2V5KSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgLi4uYWNjdSxcclxuICAgICAgICAgICAgICAuLi4oa2V5IGluIG5vZGVcclxuICAgICAgICAgICAgICAgID8gdGhpcy5wcm9wZXJ0aWVzW2tleV1cclxuICAgICAgICAgICAgICAgICAgPyAvLyBpZiBpdCdzIGFub3RoZXIgc2NoZW1hXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wZXJ0aWVzW2tleV1bb3BlcmF0aW9uXVxyXG4gICAgICAgICAgICAgICAgICAgID8gLy8gY2FsbCBzYXZlIG9yIGxvYWRcclxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcGVydGllc1trZXldW2ludGVybmFsXShub2RlW2tleV0sIFsuLi5wYXJlbnRzLCBub2RlXSwgYWNjdSlcclxuICAgICAgICAgICAgICAgICAgICA6IHt9XHJcbiAgICAgICAgICAgICAgICAgIDoge1trZXldOiBub2RlW2tleV19XHJcbiAgICAgICAgICAgICAgICA6IHt9KVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgfSwge30pXHJcbiAgICAgICAgOiBub2RlXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgX2lzQ3VycmVudFZlcnNpb24oKSB7XHJcbiAgICByZXR1cm4gdGhpcy52ZXJzaW9uID09PSBDVVJSRU5UX1ZFUlNJT047XHJcbiAgfVxyXG5cclxuICBvdXRkYXRlZFZlcnNpb25FcnJvcigpIHtcclxuICAgIGlmICghdGhpcy5faXNDdXJyZW50VmVyc2lvbigpKSB7XHJcbiAgICAgIENvbnNvbGUuZXJyb3IoYCR7dGhpcy5rZXl9ICR7dGhpcy52ZXJzaW9ufSBpcyBvdXRkYXRlZC4gc2F2ZSBzaG91bGQgbm90IGJlIGNhbGxlZCBhbnltb3JlYCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBfc2F2ZSguLi5hcmdzKSB7XHJcbiAgICAvLyBtYWtlIHN1cmUgbm90aGluZyBpcyBzYXZlZCB0byBhbiBvdXRkYXRlZCB2ZXJzaW9uXHJcbiAgICB0aGlzLm91dGRhdGVkVmVyc2lvbkVycm9yKCk7XHJcbiAgICByZXR1cm4gdGhpcy5zYXZlKC4uLmFyZ3MpO1xyXG4gIH1cclxuXHJcbiAgc2F2ZShub2RlLCBwYXJlbnRzID0gW10sIGFjY3VtdWxhdG9yID0ge30pIHtcclxuICAgIHJldHVybiB0aGlzLnNhdmVQcm9wZXJ0aWVzT3JBcHBseVNjaGVtYShub2RlLCBwYXJlbnRzLCBhY2N1bXVsYXRvcik7XHJcbiAgfVxyXG5cclxuICBfbG9hZCguLi5hcmdzKSB7XHJcbiAgICByZXR1cm4gdGhpcy5sb2FkKC4uLmFyZ3MpO1xyXG4gIH1cclxuXHJcbiAgbG9hZChub2RlLCBwYXJlbnRzID0gW10sIGFjY3VtdWxhdG9yID0ge30pIHtcclxuICAgIHJldHVybiB0aGlzLmxvYWRQcm9wZXJ0aWVzT3JBcHBseVNjaGVtYShub2RlLCBwYXJlbnRzLCBhY2N1bXVsYXRvcik7XHJcbiAgfVxyXG59XHJcbiJdfQ==