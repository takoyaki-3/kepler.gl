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

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _imagePreview = _interopRequireDefault(require("../common/image-preview"));

var _defaultSettings = require("../../constants/default-settings");

var _styledComponents2 = require("../common/styled-components");

var _switch = _interopRequireDefault(require("../common/switch"));

var _reactIntl = require("react-intl");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  width: 250px;\n\n  .image-option-section {\n    .image-option-section-title {\n      font-weight: 500;\n      font-size: 14px;\n    }\n  }\n\n  .button-list {\n    display: flex;\n    flex-direction: row;\n    padding: 8px 0px;\n  }\n\n  input {\n    margin-right: 8px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var ImageOptionList = _styledComponents["default"].div(_templateObject());

var ExportImageModalFactory = function ExportImageModalFactory() {
  var ExportImageModal = /*#__PURE__*/function (_Component) {
    (0, _inherits2["default"])(ExportImageModal, _Component);

    var _super = _createSuper(ExportImageModal);

    function ExportImageModal() {
      (0, _classCallCheck2["default"])(this, ExportImageModal);
      return _super.apply(this, arguments);
    }

    (0, _createClass2["default"])(ExportImageModal, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this._updateMapDim();
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate() {
        this._updateMapDim();
      }
    }, {
      key: "_updateMapDim",
      value: function _updateMapDim() {
        var _this$props = this.props,
            exportImage = _this$props.exportImage,
            mapH = _this$props.mapH,
            mapW = _this$props.mapW;

        if (mapH !== exportImage.mapH || mapW !== exportImage.mapW) {
          this.props.onUpdateSetting({
            mapH: mapH,
            mapW: mapW,
            ratio: _defaultSettings.EXPORT_IMG_RATIOS.CUSTOM,
            legend: false
          });
        }
      }
    }, {
      key: "render",
      value: function render() {
        var _this$props2 = this.props,
            exportImage = _this$props2.exportImage,
            onUpdateSetting = _this$props2.onUpdateSetting,
            intl = _this$props2.intl;
        var legend = exportImage.legend,
            ratio = exportImage.ratio,
            resolution = exportImage.resolution;
        return /*#__PURE__*/_react["default"].createElement(_styledComponents2.StyledModalContent, {
          className: "export-image-modal"
        }, /*#__PURE__*/_react["default"].createElement(ImageOptionList, null, /*#__PURE__*/_react["default"].createElement("div", {
          className: "image-option-section"
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: "image-option-section-title"
        }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
          id: 'modal.exportImage.ratioTitle'
        })), /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
          id: 'modal.exportImage.ratioDescription'
        }), /*#__PURE__*/_react["default"].createElement("div", {
          className: "button-list"
        }, _defaultSettings.EXPORT_IMG_RATIO_OPTIONS.filter(function (op) {
          return !op.hidden;
        }).map(function (op) {
          return /*#__PURE__*/_react["default"].createElement(_styledComponents2.SelectionButton, {
            key: op.id,
            selected: ratio === op.id,
            onClick: function onClick() {
              return onUpdateSetting({
                ratio: op.id
              });
            }
          }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
            id: op.label
          }));
        }))), /*#__PURE__*/_react["default"].createElement("div", {
          className: "image-option-section"
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: "image-option-section-title"
        }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
          id: 'modal.exportImage.resolutionTitle'
        })), /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
          id: 'modal.exportImage.resolutionDescription'
        }), /*#__PURE__*/_react["default"].createElement("div", {
          className: "button-list"
        }, _defaultSettings.EXPORT_IMG_RESOLUTION_OPTIONS.map(function (op) {
          return /*#__PURE__*/_react["default"].createElement(_styledComponents2.SelectionButton, {
            key: op.id,
            selected: resolution === op.id,
            onClick: function onClick() {
              return op.available && onUpdateSetting({
                resolution: op.id
              });
            }
          }, op.label);
        }))), /*#__PURE__*/_react["default"].createElement("div", {
          className: "image-option-section"
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: "image-option-section-title"
        }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
          id: 'modal.exportImage.mapLegendTitle'
        })), /*#__PURE__*/_react["default"].createElement(_switch["default"], {
          type: "checkbox",
          id: "add-map-legend",
          checked: legend,
          label: intl.formatMessage({
            id: 'modal.exportImage.mapLegendAdd'
          }),
          onChange: function onChange() {
            return onUpdateSetting({
              legend: !legend
            });
          }
        }))), /*#__PURE__*/_react["default"].createElement(_imagePreview["default"], {
          exportImage: exportImage
        }));
      }
    }]);
    return ExportImageModal;
  }(_react.Component);

  (0, _defineProperty2["default"])(ExportImageModal, "propTypes", {
    mapW: _propTypes["default"].number.isRequired,
    mapH: _propTypes["default"].number.isRequired,
    exportImage: _propTypes["default"].object.isRequired,
    // callbacks
    onUpdateSetting: _propTypes["default"].func.isRequired
  });
  return (0, _reactIntl.injectIntl)(ExportImageModal);
};

var _default = ExportImageModalFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL21vZGFscy9leHBvcnQtaW1hZ2UtbW9kYWwuanMiXSwibmFtZXMiOlsiSW1hZ2VPcHRpb25MaXN0Iiwic3R5bGVkIiwiZGl2IiwiRXhwb3J0SW1hZ2VNb2RhbEZhY3RvcnkiLCJFeHBvcnRJbWFnZU1vZGFsIiwiX3VwZGF0ZU1hcERpbSIsInByb3BzIiwiZXhwb3J0SW1hZ2UiLCJtYXBIIiwibWFwVyIsIm9uVXBkYXRlU2V0dGluZyIsInJhdGlvIiwiRVhQT1JUX0lNR19SQVRJT1MiLCJDVVNUT00iLCJsZWdlbmQiLCJpbnRsIiwicmVzb2x1dGlvbiIsIkVYUE9SVF9JTUdfUkFUSU9fT1BUSU9OUyIsImZpbHRlciIsIm9wIiwiaGlkZGVuIiwibWFwIiwiaWQiLCJsYWJlbCIsIkVYUE9SVF9JTUdfUkVTT0xVVElPTl9PUFRJT05TIiwiYXZhaWxhYmxlIiwiZm9ybWF0TWVzc2FnZSIsIkNvbXBvbmVudCIsIlByb3BUeXBlcyIsIm51bWJlciIsImlzUmVxdWlyZWQiLCJvYmplY3QiLCJmdW5jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQU1BOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsZUFBZSxHQUFHQyw2QkFBT0MsR0FBVixtQkFBckI7O0FBd0JBLElBQU1DLHVCQUF1QixHQUFHLFNBQTFCQSx1QkFBMEIsR0FBTTtBQUFBLE1BQzlCQyxnQkFEOEI7QUFBQTs7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsMENBVWQ7QUFDbEIsYUFBS0MsYUFBTDtBQUNEO0FBWmlDO0FBQUE7QUFBQSwyQ0FjYjtBQUNuQixhQUFLQSxhQUFMO0FBQ0Q7QUFoQmlDO0FBQUE7QUFBQSxzQ0FrQmxCO0FBQUEsMEJBQ29CLEtBQUtDLEtBRHpCO0FBQUEsWUFDUEMsV0FETyxlQUNQQSxXQURPO0FBQUEs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d0JBQ0U7QUFBSyxVQUFBLFNBQVMsRUFBQztBQUFmLHdCQUNFLGdDQUFDLDJCQUFEO0FBQWtCLFVBQUEsRUFBRSxFQUFFO0FBQXRCLFVBREYsQ0FERixlQUlFLGdDQUFDLGtCQUFEO0FBQ0UsVUFBQSxJQUFJLEVBQUMsVUFEUDtBQUVFLFVBQUEsRUFBRSxFQUFDLGdCQUZMO0FBR0UsVUFBQSxPQUFPLEVBQUVULE1BSFg7QUFJRSxVQUFBLEtBQUssRUFBRUMsSUFBSSxDQUFDVyxhQUFMLENBQW1CO0FBQUNKLFlBQUFBLEVBQUUsRUFBRTtBQUFMLFdBQW5CLENBSlQ7QUFLRSxVQUFBLFFBQVEsRUFBRTtBQUFBLG1CQUFNWixlQUFlLENBQUM7QUFBQ0ksY0FBQUEsTUFBTSxFQUFFLENBQUNBO0FBQVYsYUFBRCxDQUFyQjtBQUFBO0FBTFosVUFKRixDQW5DRixDQURGLGVBaURFLGdDQUFDLHdCQUFEO0FBQWMsVUFBQSxXQUFXLEVBQUVQO0FBQTNCLFVBakRGLENBREY7QUFxREQ7QUF2RmlDO0FBQUE7QUFBQSxJQUNMb0IsZ0JBREs7O0FBQUEsbUNBQzlCdkIsZ0JBRDhCLGVBRWY7QUFDakJLLElBQUFBLElBQUksRUFBRW1CLHNCQUFVQyxNQUFWLENBQWlCQyxVQUROO0FBRWpCdEIsSUFBQUEsSUFBSSxFQUFFb0Isc0JBQVVDLE1BQVYsQ0FBaUJDLFVBRk47QUFHakJ2QixJQUFBQSxXQUFXLEVBQUVxQixzQkFBVUcsTUFBVixDQUFpQkQsVUFIYjtBQUlqQjtBQUNBcEIsSUFBQUEsZUFBZSxFQUFFa0Isc0JBQVVJLElBQVYsQ0FBZUY7QUFMZixHQUZlO0FBMEZwQyxTQUFPLDJCQUFXMUIsZ0JBQVgsQ0FBUDtBQUNELENBM0ZEOztlQTZGZUQsdUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBJbWFnZVByZXZpZXcgZnJvbSAnY29tcG9uZW50cy9jb21tb24vaW1hZ2UtcHJldmlldyc7XHJcblxyXG5pbXBvcnQge1xyXG4gIEVYUE9SVF9JTUdfUkFUSU9fT1BUSU9OUyxcclxuICBFWFBPUlRfSU1HX1JFU09MVVRJT05fT1BUSU9OUyxcclxuICBFWFBPUlRfSU1HX1JBVElPU1xyXG59IGZyb20gJ2NvbnN0YW50cy9kZWZhdWx0LXNldHRpbmdzJztcclxuXHJcbmltcG9ydCB7U3R5bGVkTW9kYWxDb250ZW50LCBTZWxlY3Rpb25CdXR0b259IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IFN3aXRjaCBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9zd2l0Y2gnO1xyXG5pbXBvcnQge0Zvcm1hdHRlZE1lc3NhZ2UsIGluamVjdEludGx9IGZyb20gJ3JlYWN0LWludGwnO1xyXG5cclxuY29uc3QgSW1hZ2VPcHRpb25MaXN0ID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgd2lkdGg6IDI1MHB4O1xyXG5cclxuICAuaW1hZ2Utb3B0aW9uLXNlY3Rpb24ge1xyXG4gICAgLmltYWdlLW9wdGlvbi1zZWN0aW9uLXRpdGxlIHtcclxuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmJ1dHRvbi1saXN0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgcGFkZGluZzogOHB4IDBweDtcclxuICB9XHJcblxyXG4gIGlucHV0IHtcclxuICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IEV4cG9ydEltYWdlTW9kYWxGYWN0b3J5ID0gKCkgPT4ge1xyXG4gIGNsYXNzIEV4cG9ydEltYWdlTW9kYWwgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcclxuICAgICAgbWFwVzogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxyXG4gICAgICBtYXBIOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXHJcbiAgICAgIGV4cG9ydEltYWdlOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXHJcbiAgICAgIC8vIGNhbGxiYWNrc1xyXG4gICAgICBvblVwZGF0ZVNldHRpbmc6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcclxuICAgIH07XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgIHRoaXMuX3VwZGF0ZU1hcERpbSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcclxuICAgICAgdGhpcy5fdXBkYXRlTWFwRGltKCk7XHJcbiAgICB9XHJcblxyXG4gICAgX3VwZGF0ZU1hcERpbSgpIHtcclxuICAgICAgY29uc3Qge2V4cG9ydEltYWdlLCBtYXBILCBtYXBXfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgIGlmIChtYXBIICE9PSBleHBvcnRJbWFnZS5tYXBIIHx8IG1hcFcgIT09IGV4cG9ydEltYWdlLm1hcFcpIHtcclxuICAgICAgICB0aGlzLnByb3BzLm9uVXBkYXRlU2V0dGluZyh7XHJcbiAgICAgICAgICBtYXBILFxyXG4gICAgICAgICAgbWFwVyxcclxuICAgICAgICAgIHJhdGlvOiBFWFBPUlRfSU1HX1JBVElPUy5DVVNUT00sXHJcbiAgICAgICAgICBsZWdlbmQ6IGZhbHNlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgIGNvbnN0IHtleHBvcnRJbWFnZSwgb25VcGRhdGVTZXR0aW5nLCBpbnRsfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgIGNvbnN0IHtsZWdlbmQsIHJhdGlvLCByZXNvbHV0aW9ufSA9IGV4cG9ydEltYWdlO1xyXG5cclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8U3R5bGVkTW9kYWxDb250ZW50IGNsYXNzTmFtZT1cImV4cG9ydC1pbWFnZS1tb2RhbFwiPlxyXG4gICAgICAgICAgPEltYWdlT3B0aW9uTGlzdD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZS1vcHRpb24tc2VjdGlvblwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2Utb3B0aW9uLXNlY3Rpb24tdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlIGlkPXsnbW9kYWwuZXhwb3J0SW1hZ2UucmF0aW9UaXRsZSd9IC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2UgaWQ9eydtb2RhbC5leHBvcnRJbWFnZS5yYXRpb0Rlc2NyaXB0aW9uJ30gLz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbi1saXN0XCI+XHJcbiAgICAgICAgICAgICAgICB7RVhQT1JUX0lNR19SQVRJT19PUFRJT05TLmZpbHRlcihvcCA9PiAhb3AuaGlkZGVuKS5tYXAob3AgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8U2VsZWN0aW9uQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAga2V5PXtvcC5pZH1cclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZD17cmF0aW8gPT09IG9wLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uVXBkYXRlU2V0dGluZyh7cmF0aW86IG9wLmlkfSl9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZSBpZD17b3AubGFiZWx9IC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvU2VsZWN0aW9uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlLW9wdGlvbi1zZWN0aW9uXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZS1vcHRpb24tc2VjdGlvbi10aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2UgaWQ9eydtb2RhbC5leHBvcnRJbWFnZS5yZXNvbHV0aW9uVGl0bGUnfSAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlIGlkPXsnbW9kYWwuZXhwb3J0SW1hZ2UucmVzb2x1dGlvbkRlc2NyaXB0aW9uJ30gLz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbi1saXN0XCI+XHJcbiAgICAgICAgICAgICAgICB7RVhQT1JUX0lNR19SRVNPTFVUSU9OX09QVElPTlMubWFwKG9wID0+IChcclxuICAgICAgICAgICAgICAgICAgPFNlbGVjdGlvbkJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIGtleT17b3AuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ9e3Jlc29sdXRpb24gPT09IG9wLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9wLmF2YWlsYWJsZSAmJiBvblVwZGF0ZVNldHRpbmcoe3Jlc29sdXRpb246IG9wLmlkfSl9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7b3AubGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgIDwvU2VsZWN0aW9uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlLW9wdGlvbi1zZWN0aW9uXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZS1vcHRpb24tc2VjdGlvbi10aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2UgaWQ9eydtb2RhbC5leHBvcnRJbWFnZS5tYXBMZWdlbmRUaXRsZSd9IC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPFN3aXRjaFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcclxuICAgICAgICAgICAgICAgIGlkPVwiYWRkLW1hcC1sZWdlbmRcIlxyXG4gICAgICAgICAgICAgICAgY2hlY2tlZD17bGVnZW5kfVxyXG4gICAgICAgICAgICAgICAgbGFiZWw9e2ludGwuZm9ybWF0TWVzc2FnZSh7aWQ6ICdtb2RhbC5leHBvcnRJbWFnZS5tYXBMZWdlbmRBZGQnfSl9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gb25VcGRhdGVTZXR0aW5nKHtsZWdlbmQ6ICFsZWdlbmR9KX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvSW1hZ2VPcHRpb25MaXN0PlxyXG4gICAgICAgICAgPEltYWdlUHJldmlldyBleHBvcnRJbWFnZT17ZXhwb3J0SW1hZ2V9IC8+XHJcbiAgICAgICAgPC9TdHlsZWRNb2RhbENvbnRlbnQ+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gaW5qZWN0SW50bChFeHBvcnRJbWFnZU1vZGFsKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEV4cG9ydEltYWdlTW9kYWxGYWN0b3J5O1xyXG4iXX0=