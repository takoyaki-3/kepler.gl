"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _core = require("@deck.gl/core");

var _scatterplotIconLayer = _interopRequireDefault(require("./scatterplot-icon-layer"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

// default icon geometry is a square
var DEFAULT_ICON_GEOMETRY = [1, 1, 0, 1, -1, 0, -1, -1, 0, -1, -1, 0, -1, 1, 0, 1, 1, 0];
var defaultProps = {
  getIconGeometry: function getIconGeometry(iconId) {
    return DEFAULT_ICON_GEOMETRY;
  },
  getIcon: function getIcon(d) {
    return d.icon;
  }
};

var SvgIconLayer = /*#__PURE__*/function (_CompositeLayer) {
  (0, _inherits2["default"])(SvgIconLayer, _CompositeLayer);

  var _super = _createSuper(SvgIconLayer);

  function SvgIconLayer() {
    (0, _classCallCheck2["default"])(this, SvgIconLayer);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(SvgIconLayer, [{
    key: "initializeState",
    // Must be defined
    value: function initializeState() {
      this.state = {
        data: {}
      };
    }
  }, {
    key: "updateState",
    value: function updateState(_ref) {
      var changeFlags = _ref.changeFlags;

      if (changeFlags.dataChanged) {
        this._extractSublayers();
      }
    }
  }, {
    key: "_extractSublayers",
    value: function _extractSublayers() {
      var _this$props = this.props,
          data = _this$props.data,
          getIconGeometry = _this$props.getIconGeometry,
          getIcon = _this$props.getIcon;
      var iconLayers = {};

      for (var i = 0; i < data.length; i++) {
        var iconId = getIcon(data[i]);
        iconLayers[iconId] = iconLayers[iconId] || {
          id: iconId,
          geometry: getIconGeometry(iconId) || DEFAULT_ICON_GEOMETRY,
          data: []
        };
        iconLayers[iconId].data.push(data[i]);
      }

      this.setState({
        data: Object.values(iconLayers)
      });
    }
  }, {
    key: "renderLayers",
    value: function renderLayers() {
      var _this = this;

      var layerId = this.props.id;
      var layers = this.state.data && this.state.data.length && this.state.data.map(function (_ref2) {
        var id = _ref2.id,
            data = _ref2.data,
            geometry = _ref2.geometry;
        return new _scatterplotIconLayer["default"](_objectSpread(_objectSpread({}, _this.props), {}, {
          id: "".concat(layerId, "-").concat(id),
          data: data,
          iconGeometry: geometry
        }));
      });
      return layers && layers.length > 0 ? layers : null;
    }
  }]);
  return SvgIconLayer;
}(_core.CompositeLayer);

exports["default"] = SvgIconLayer;
SvgIconLayer.layerName = 'SvgIconLayer';
SvgIconLayer.defaultProps = defaultProps;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kZWNrZ2wtbGF5ZXJzL3N2Zy1pY29uLWxheWVyL3N2Zy1pY29uLWxheWVyLmpzIl0sIm5hbWVzIjpbIkRFRkFVTFRfSUNPTl9HRU9NRVRSWSIsImRlZmF1bHRQcm9wcyIsImdldEljb25HZW9tZXRyeSIsImljb25JZCIsImdldEljb24iLCJkIiwiaWNvbiIsIlN2Z0ljb25MYXllciIsInN0YXRlIiwiZGF0YSIsImNoYW5nZUZsYWdzIiwiZGF0YUNoYW5nZWQiLCJfZXh0cmFjdFN1YmxheWVycyIsInByb3BzIiwiaWNvbkxheWVycyIsImkiLCJsZW5ndGgiLCJpZCIsImdlb21ldHJ5IiwicHVzaCIsInNldFN0YXRlIiwiT2JqZWN0IiwidmFsdWVzIiwibGF5ZXJJZCIsImxheWVycyIsIm1hcCIsIlNjYXR0ZXJwbG90SWNvbkxheWVyIiwiaWNvbkdlb21ldHJ5IiwiQ29tcG9zaXRlTGF5ZXIiLCJsYXllck5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7Ozs7Ozs7OztBQUVBO0FBQ0EsSUFBTUEscUJBQXFCLEdBQUcsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLEVBQWEsQ0FBQyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CLENBQUMsQ0FBckIsRUFBd0IsQ0FBQyxDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUFDLENBQWhDLEVBQW1DLENBQUMsQ0FBcEMsRUFBdUMsQ0FBdkMsRUFBMEMsQ0FBQyxDQUEzQyxFQUE4QyxDQUE5QyxFQUFpRCxDQUFqRCxFQUFvRCxDQUFwRCxFQUF1RCxDQUF2RCxFQUEwRCxDQUExRCxDQUE5QjtBQUVBLElBQU1DLFlBQVksR0FBRztBQUNuQkMsRUFBQUEsZUFBZSxFQUFFLHlCQUFBQyxNQUFNO0FBQUEsV0FBSUgscUJBQUo7QUFBQSxHQURKO0FBRW5CSSxFQUFBQSxPQUFPLEVBQUUsaUJBQUFDLENBQUM7QUFBQSxXQUFJQSxDQUFDLENBQUNDLElBQU47QUFBQTtBQUZTLENBQXJCOztJQUtxQkMsWTs7Ozs7Ozs7Ozs7O0FBQ25CO3NDQUNrQjtBQUNoQixXQUFLQyxLQUFMLEdBQWE7QUFDWEMsUUFBQUEsSUFBSSxFQUFFO0FBREssT0FBYjtBQUdEOzs7c0NBRTBCO0FBQUEsVUFBZEMsV0FBYyxRQUFkQSxXQUFjOztBQUN6QixVQUFJQSxXQUFXLENBQUNDLFdBQWhCLEVBQTZCO0FBQzNCLGFBQUtDLGlCQUFMO0FBQ0Q7QUFDRjs7O3dDQUVtQjtBQUFBLHdCQUN1QixLQUFLQyxLQUQ1QjtBQUFBLFVBQ1hKLElBRFcsZUFDWEEsSUFEVztBQUFBLFVBQ0xQLGVBREssZUFDTEEsZUFESztBQUFBLFVBQ1lFLE9BRFosZUFDWUEsT0FEWjtBQUdsQixVQUFNVSxVQUFVLEdBQUcsRUFBbkI7O0FBQ0EsV0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHTixJQUFJLENBQUNPLE1BQXpCLEVBQWlDRCxDQUFDLEVBQWxDLEVBQXNDO0FBQ3BDLFlBQU1aLE1BQU0sR0FBR0MsT0FBTyxDQUFDSyxJQUFJLENBQUNNLENBQUQsQ0FBTCxDQUF0QjtBQUNBRCxRQUFBQSxVQUFVLENBQUNYLE1BQUQsQ0FBVixHQUFxQlcsVUFBVSxDQUFDWCxNQUFELENBQVYsSUFBc0I7QUFDekNjLFVBQUFBLEVBQUUsRUFBRWQsTUFEcUM7QUFFekNlLFVBQUFBLFFBQVEsRUFBRWhCLGVBQWUsQ0FBQ0MsTUFBRCxDQUFmLElBQTJCSCxxQkFGSTtBQUd6Q1MsVUFBQUEsSUFBSSxFQUFFO0FBSG1DLFNBQTNDO0FBS0FLLFFBQUFBLFVBQVUsQ0FBQ1gsTUFBRCxDQUFWLENBQW1CTSxJQUFuQixDQUF3QlUsSUFBeEIsQ0FBNkJWLElBQUksQ0FBQ00sQ0FBRCxDQUFqQztBQUNEOztBQUNELFdBQUtLLFFBQUwsQ0FBYztBQUNaWCxRQUFBQSxJQUFJLEVBQUVZLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjUixVQUFkO0FBRE0sT0FBZDtBQUdEOzs7bUNBRWM7QUFBQTs7QUFDYixVQUFNUyxPQUFPLEdBQUcsS0FBS1YsS0FBTCxDQUFXSSxFQUEzQjtBQUVBLFVBQU1PLE1BQU0sR0FDVixLQUFLaEIsS0FBTCxDQUFXQyxJQUFYLElBQ0EsS0FBS0QsS0FBTCxDQUFXQyxJQUFYLENBQWdCTyxNQURoQixJQUVBLEtBQUtSLEtBQUwsQ0FBV0MsSUFBWCxDQUFnQmdCLEdBQWhCLENBQ0U7QUFBQSxZQUFFUixFQUFGLFNBQUVBLEVBQUY7QUFBQSxZQUFNUixJQUFOLFNBQU1BLElBQU47QUFBQSxZQUFZUyxRQUFaLFNBQVlBLFFBQVo7QUFBQSxlQUNFLElBQUlRLGdDQUFKLGlDQUNLLEtBQUksQ0FBQ2IsS0FEVjtBQUVFSSxVQUFBQSxFQUFFLFlBQUtNLE9BQUwsY0FBZ0JOLEVBQWhCLENBRko7QUFHRVIsVUFBQUEsSUFBSSxFQUFKQSxJQUhGO0FBSUVrQixVQUFBQSxZQUFZLEVBQUVUO0FBSmhCLFdBREY7QUFBQSxPQURGLENBSEY7QUFhQSxhQUFPTSxNQUFNLElBQUlBLE1BQU0sQ0FBQ1IsTUFBUCxHQUFnQixDQUExQixHQUE4QlEsTUFBOUIsR0FBdUMsSUFBOUM7QUFDRDs7O0VBakR1Q0ksb0I7OztBQW9EMUNyQixZQUFZLENBQUNzQixTQUFiLEdBQXlCLGNBQXpCO0FBQ0F0QixZQUFZLENBQUNOLFlBQWIsR0FBNEJBLFlBQTVCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IHtDb21wb3NpdGVMYXllcn0gZnJvbSAnQGRlY2suZ2wvY29yZSc7XHJcbmltcG9ydCBTY2F0dGVycGxvdEljb25MYXllciBmcm9tICcuL3NjYXR0ZXJwbG90LWljb24tbGF5ZXInO1xyXG5cclxuLy8gZGVmYXVsdCBpY29uIGdlb21ldHJ5IGlzIGEgc3F1YXJlXHJcbmNvbnN0IERFRkFVTFRfSUNPTl9HRU9NRVRSWSA9IFsxLCAxLCAwLCAxLCAtMSwgMCwgLTEsIC0xLCAwLCAtMSwgLTEsIDAsIC0xLCAxLCAwLCAxLCAxLCAwXTtcclxuXHJcbmNvbnN0IGRlZmF1bHRQcm9wcyA9IHtcclxuICBnZXRJY29uR2VvbWV0cnk6IGljb25JZCA9PiBERUZBVUxUX0lDT05fR0VPTUVUUlksXHJcbiAgZ2V0SWNvbjogZCA9PiBkLmljb25cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN2Z0ljb25MYXllciBleHRlbmRzIENvbXBvc2l0ZUxheWVyIHtcclxuICAvLyBNdXN0IGJlIGRlZmluZWRcclxuICBpbml0aWFsaXplU3RhdGUoKSB7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBkYXRhOiB7fVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZVN0YXRlKHtjaGFuZ2VGbGFnc30pIHtcclxuICAgIGlmIChjaGFuZ2VGbGFncy5kYXRhQ2hhbmdlZCkge1xyXG4gICAgICB0aGlzLl9leHRyYWN0U3VibGF5ZXJzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBfZXh0cmFjdFN1YmxheWVycygpIHtcclxuICAgIGNvbnN0IHtkYXRhLCBnZXRJY29uR2VvbWV0cnksIGdldEljb259ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICBjb25zdCBpY29uTGF5ZXJzID0ge307XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3QgaWNvbklkID0gZ2V0SWNvbihkYXRhW2ldKTtcclxuICAgICAgaWNvbkxheWVyc1tpY29uSWRdID0gaWNvbkxheWVyc1tpY29uSWRdIHx8IHtcclxuICAgICAgICBpZDogaWNvbklkLFxyXG4gICAgICAgIGdlb21ldHJ5OiBnZXRJY29uR2VvbWV0cnkoaWNvbklkKSB8fCBERUZBVUxUX0lDT05fR0VPTUVUUlksXHJcbiAgICAgICAgZGF0YTogW11cclxuICAgICAgfTtcclxuICAgICAgaWNvbkxheWVyc1tpY29uSWRdLmRhdGEucHVzaChkYXRhW2ldKTtcclxuICAgIH1cclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBkYXRhOiBPYmplY3QudmFsdWVzKGljb25MYXllcnMpXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHJlbmRlckxheWVycygpIHtcclxuICAgIGNvbnN0IGxheWVySWQgPSB0aGlzLnByb3BzLmlkO1xyXG5cclxuICAgIGNvbnN0IGxheWVycyA9XHJcbiAgICAgIHRoaXMuc3RhdGUuZGF0YSAmJlxyXG4gICAgICB0aGlzLnN0YXRlLmRhdGEubGVuZ3RoICYmXHJcbiAgICAgIHRoaXMuc3RhdGUuZGF0YS5tYXAoXHJcbiAgICAgICAgKHtpZCwgZGF0YSwgZ2VvbWV0cnl9KSA9PlxyXG4gICAgICAgICAgbmV3IFNjYXR0ZXJwbG90SWNvbkxheWVyKHtcclxuICAgICAgICAgICAgLi4udGhpcy5wcm9wcyxcclxuICAgICAgICAgICAgaWQ6IGAke2xheWVySWR9LSR7aWR9YCxcclxuICAgICAgICAgICAgZGF0YSxcclxuICAgICAgICAgICAgaWNvbkdlb21ldHJ5OiBnZW9tZXRyeVxyXG4gICAgICAgICAgfSlcclxuICAgICAgKTtcclxuXHJcbiAgICByZXR1cm4gbGF5ZXJzICYmIGxheWVycy5sZW5ndGggPiAwID8gbGF5ZXJzIDogbnVsbDtcclxuICB9XHJcbn1cclxuXHJcblN2Z0ljb25MYXllci5sYXllck5hbWUgPSAnU3ZnSWNvbkxheWVyJztcclxuU3ZnSWNvbkxheWVyLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcclxuIl19