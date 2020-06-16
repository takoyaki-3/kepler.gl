"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = GeocoderPanelFactory;
exports.GeocoderPanel = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledComponents2 = require("./common/styled-components");

var _reactIntl = require("react-intl");

var _reactMapboxGlGeocoder = _interopRequireDefault(require("react-mapbox-gl-geocoder"));

var _processors = _interopRequireDefault(require("../processors"));

var _actions = require("../actions");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  color: ", ";\n  font-size: ", ";\n\n  .react-geocoder {\n    position: relative;\n  }\n\n  .react-geocoder input {\n    ", ";\n  }\n\n  .react-geocoder-results {\n    background-color: ", ";\n    position: absolute;\n    width: 43.5em;\n  }\n\n  .react-geocoder-item {\n    ", ";\n    ", ";\n  }\n\n  .remove-layer {\n    background: transparent;\n    border: none;\n    bottom: 28px;\n    color: ", ";\n    cursor: pointer;\n    display: inline;\n    font-size: 16px;\n    padding: 2px 8px;\n    position: absolute;\n    right: 16px;\n\n    :hover,\n    :focus,\n    :active {\n      background: transparent !important;\n      border: none;\n      box-shadow: 0;\n      color: ", ";\n      opacity: 0.6;\n      outline: none;\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  background-color: ", ";\n  padding: 0.5em 1em;\n  position: absolute;\n  top: 20px;\n  left: 50%;\n  margin-left: -20em;\n  width: 40em;\n  box-sizing: border-box;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var GEOCODER_DATASET_NAME = 'geocoder_dataset';
var QUERY_PARAMS = {};
var GEO_OFFSET = 0.1;
var ICON_LAYER = {
  id: 'geocoder_layer',
  type: 'icon',
  config: {
    label: 'Geocoder Layer',
    color: [255, 0, 0],
    dataId: GEOCODER_DATASET_NAME,
    columns: {
      lat: 'lt',
      lng: 'ln',
      icon: 'icon',
      label: 'text'
    },
    isVisible: true,
    hidden: true,
    visConfig: {
      radius: 80
    }
  }
};

var GeocoderPanelContent = _styledComponents["default"].div(_templateObject(), function (props) {
  return props.theme.panelBackground;
});

var GeocoderWrapper = _styledComponents["default"].div(_templateObject2(), function (props) {
  return props.theme.textColor;
}, function (props) {
  return props.theme.fontSize;
}, function (props) {
  return props.theme.secondaryInput;
}, function (props) {
  return props.theme.panelBackground;
}, function (props) {
  return props.theme.dropdownListItem;
}, function (props) {
  return props.theme.textTruncate;
}, function (props) {
  return props.theme.textColor;
}, function (props) {
  return props.theme.textColor;
});

function generateGeocoderDataset(lat, lon, text) {
  return {
    data: _processors["default"].processRowObject([{
      lt: lat,
      ln: lon,
      icon: 'place',
      text: text
    }]),
    id: GEOCODER_DATASET_NAME,
    info: {
      hidden: true,
      id: GEOCODER_DATASET_NAME,
      label: GEOCODER_DATASET_NAME
    }
  };
}

function isValid(key) {
  return /pk\..*\..*/.test(key);
}

var GeocoderPanel = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(GeocoderPanel, _Component);

  var _super = _createSuper(GeocoderPanel);

  function GeocoderPanel() {
    var _this;

    (0, _classCallCheck2["default"])(this, GeocoderPanel);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      selectedGeoItem: null
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onSelected", function () {
      var viewport = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var geoItem = arguments.length > 1 ? arguments[1] : undefined;

      var _geoItem$center = (0, _slicedToArray2["default"])(geoItem.center, 2),
          lon = _geoItem$center[0],
          lat = _geoItem$center[1],
          text = geoItem.text,
          bbox = geoItem.bbox;

      _this.removeGeocoderDataset();

      _this.props.dispatch((0, _actions.addDataToMap)({
        datasets: [generateGeocoderDataset(lat, lon, text)],
        options: {
          keepExistingConfig: true
        },
        config: {
          version: 'v1',
          config: {
            visState: {
              layers: [ICON_LAYER]
            }
          }
        }
      }));

      _this.props.dispatch((0, _actions.fitBounds)(bbox || [lon - GEO_OFFSET, lat - GEO_OFFSET, lon + GEO_OFFSET, lat + GEO_OFFSET]));

      _this.setState({
        selectedGeoItem: geoItem
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "removeMarker", function () {
      _this.setState({
        selectedGeoItem: null
      });

      _this.removeGeocoderDataset();
    });
    return _this;
  }

  (0, _createClass2["default"])(GeocoderPanel, [{
    key: "removeGeocoderDataset",
    value: function removeGeocoderDataset() {
      this.props.dispatch((0, _actions.removeDataset)(GEOCODER_DATASET_NAME));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          isGeocoderEnabled = _this$props.isGeocoderEnabled,
          mapboxApiAccessToken = _this$props.mapboxApiAccessToken;
      return /*#__PURE__*/_react["default"].createElement(GeocoderPanelContent, {
        className: "geocoder-panel",
        style: {
          display: isGeocoderEnabled ? 'block' : 'none'
        }
      }, /*#__PURE__*/_react["default"].createElement(_styledComponents2.SidePanelSection, null, /*#__PURE__*/_react["default"].createElement(_styledComponents2.PanelLabel, null, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: 'geocoder.title'
      })), /*#__PURE__*/_react["default"].createElement(GeocoderWrapper, null, isValid(mapboxApiAccessToken) && /*#__PURE__*/_react["default"].createElement(_reactMapboxGlGeocoder["default"], {
        mapboxApiAccessToken: mapboxApiAccessToken,
        onSelected: this.onSelected,
        hideOnSelect: true,
        pointZoom: 15,
        viewport: {},
        queryParams: QUERY_PARAMS
      }), this.state.selectedGeoItem && /*#__PURE__*/_react["default"].createElement("button", {
        type: "button",
        className: "btn btn-primary remove-layer",
        onClick: this.removeMarker,
        title: "Remove marker"
      }, "\xD7"))));
    }
  }]);
  return GeocoderPanel;
}(_react.Component);

exports.GeocoderPanel = GeocoderPanel;
(0, _defineProperty2["default"])(GeocoderPanel, "propTypes", {
  isGeocoderEnabled: _propTypes["default"].bool.isRequired,
  mapboxApiAccessToken: _propTypes["default"].string.isRequired
});

function GeocoderPanelFactory() {
  return GeocoderPanel;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL2dlb2NvZGVyLXBhbmVsLmpzIl0sIm5hbWVzIjpbIkdFT0NPREVSX0RBVEFTRVRfTkFNRSIsIlFVRVJZX1BBUkFNUyIsIkdFT19PRkZTRVQiLCJJQ09OX0xBWUVSIiwiaWQiLCJ0eXBlIiwiY29uZmlnIiwibGFiZWwiLCJjb2xvciIsImRhdGFJZCIsImNvbHVtbnMiLCJsYXQiLCJsbmciLCJpY29uIiwiaXNWaXNpYmxlIiwiaGlkZGVuIiwidmlzQ29uZmlnIiwicmFkaXVzIiwiR2VvY29kZXJQYW5lbENvbnRlbnQiLCJzdHlsZWQiLCJkaXYiLCJwcm9wcyIsInRoZW1lIiwicGFuZWxCYWNrZ3JvdW5kIiwiR2VvY29kZXJXcmFwcGVyIiwidGV4dENvbG9yIiwiZm9udFNpemUiLCJzZWNvbmRhcnlJbnB1dCIsImRyb3Bkb3duTGlzdEl0ZW0iLCJ0ZXh0VHJ1bmNhdGUiLCJnZW5lcmF0ZUdlb2NvZGVyRGF0YXNldCIsImxvbiIsInRleHQiLCJkYXRhIiwiUHJvY2Vzc29ycyIsInByb2Nlc3NSb3dPYmplY3QiLCJsdCIsImxuIiwiaW5mbyIsImlzVmFsaWQiLCJrZXkiLCJ0ZXN0IiwiR2VvY29kZXJQYW5lbCIsInNlbGVjdGVkR2VvSXRlbSIsInZpZXdwb3J0IiwiZ2VvSXRlbSIsImNlbnRlciIsImJib3giLCJyZW1vdmVHZW9jb2RlckRhdGFzZXQiLCJkaXNwYXRjaCIsImRhdGFzZXRzIiwib3B0aW9ucyIsImtlZXBFeGlzdGluZ0NvbmZpZyIsInZlcnNpb24iLCJ2aXNTdGF0ZSIsImxheWVycyIsInNldFN0YXRlIiwiaXNHZW9jb2RlckVuYWJsZWQiLCJtYXBib3hBcGlBY2Nlc3NUb2tlbiIsImRpc3BsYXkiLCJvblNlbGVjdGVkIiwic3RhdGUiLCJyZW1vdmVNYXJrZXIiLCJDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJib29sIiwiaXNSZXF1aXJlZCIsInN0cmluZyIsIkdlb2NvZGVyUGFuZWxGYWN0b3J5Il0sIm1hcHBp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QUNRO0FBQ2pCZSxFQUFBQSxpQkFBaUIsRUFBRU8sc0JBQVVDLElBQVYsQ0FBZUMsVUFEakI7QUFFakJSLEVBQUFBLG9CQUFvQixFQUFFTSxzQkFBVUcsTUFBVixDQUFpQkQ7QUFGdEIsQzs7QUEwRk4sU0FBU0Usb0JBQVQsR0FBZ0M7QUFDN0MsU0FBTzFCLGFBQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMCBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHtTaWRlUGFuZWxTZWN0aW9uLCBQYW5lbExhYmVsfSBmcm9tICcuL2NvbW1vbi9zdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7Rm9ybWF0dGVkTWVzc2FnZX0gZnJvbSAncmVhY3QtaW50bCc7XHJcbmltcG9ydCBHZW9jb2RlciBmcm9tICdyZWFjdC1tYXBib3gtZ2wtZ2VvY29kZXInO1xyXG5pbXBvcnQgUHJvY2Vzc29ycyBmcm9tICdwcm9jZXNzb3JzJztcclxuaW1wb3J0IHtmaXRCb3VuZHMsIGFkZERhdGFUb01hcCwgcmVtb3ZlRGF0YXNldH0gZnJvbSAnYWN0aW9ucyc7XHJcblxyXG5jb25zdCBHRU9DT0RFUl9EQVRBU0VUX05BTUUgPSAnZ2VvY29kZXJfZGF0YXNldCc7XHJcbmNvbnN0IFFVRVJZX1BBUkFNUyA9IHt9O1xyXG5jb25zdCBHRU9fT0ZGU0VUID0gMC4xO1xyXG5jb25zdCBJQ09OX0xBWUVSID0ge1xyXG4gIGlkOiAnZ2VvY29kZXJfbGF5ZXInLFxyXG4gIHR5cGU6ICdpY29uJyxcclxuICBjb25maWc6IHtcclxuICAgIGxhYmVsOiAnR2VvY29kZXIgTGF5ZXInLFxyXG4gICAgY29sb3I6IFsyNTUsIDAsIDBdLFxyXG4gICAgZGF0YUlkOiBHRU9DT0RFUl9EQVRBU0VUX05BTUUsXHJcbiAgICBjb2x1bW5zOiB7XHJcbiAgICAgIGxhdDogJ2x0JyxcclxuICAgICAgbG5nOiAnbG4nLFxyXG4gICAgICBpY29uOiAnaWNvbicsXHJcbiAgICAgIGxhYmVsOiAndGV4dCdcclxuICAgIH0sXHJcbiAgICBpc1Zpc2libGU6IHRydWUsXHJcbiAgICBoaWRkZW46IHRydWUsXHJcbiAgICB2aXNDb25maWc6IHtcclxuICAgICAgcmFkaXVzOiA4MFxyXG4gICAgfVxyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IEdlb2NvZGVyUGFuZWxDb250ZW50ID0gc3R5bGVkLmRpdmBcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnBhbmVsQmFja2dyb3VuZH07XHJcbiAgcGFkZGluZzogMC41ZW0gMWVtO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDIwcHg7XHJcbiAgbGVmdDogNTAlO1xyXG4gIG1hcmdpbi1sZWZ0OiAtMjBlbTtcclxuICB3aWR0aDogNDBlbTtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5gO1xyXG5cclxuY29uc3QgR2VvY29kZXJXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50ZXh0Q29sb3J9O1xyXG4gIGZvbnQtc2l6ZTogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5mb250U2l6ZX07XHJcblxyXG4gIC5yZWFjdC1nZW9jb2RlciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG5cclxuICAucmVhY3QtZ2VvY29kZXIgaW5wdXQge1xyXG4gICAgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5zZWNvbmRhcnlJbnB1dH07XHJcbiAgfVxyXG5cclxuICAucmVhY3QtZ2VvY29kZXItcmVzdWx0cyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnBhbmVsQmFja2dyb3VuZH07XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogNDMuNWVtO1xyXG4gIH1cclxuXHJcbiAgLnJlYWN0LWdlb2NvZGVyLWl0ZW0ge1xyXG4gICAgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5kcm9wZG93bkxpc3RJdGVtfTtcclxuICAgICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudGV4dFRydW5jYXRlfTtcclxuICB9XHJcblxyXG4gIC5yZW1vdmUtbGF5ZXIge1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3R0b206IDI4cHg7XHJcbiAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50ZXh0Q29sb3J9O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgcGFkZGluZzogMnB4IDhweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAxNnB4O1xyXG5cclxuICAgIDpob3ZlcixcclxuICAgIDpmb2N1cyxcclxuICAgIDphY3RpdmUge1xyXG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgIGJveC1zaGFkb3c6IDA7XHJcbiAgICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRleHRDb2xvcn07XHJcbiAgICAgIG9wYWNpdHk6IDAuNjtcclxuICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5mdW5jdGlvbiBnZW5lcmF0ZUdlb2NvZGVyRGF0YXNldChsYXQsIGxvbiwgdGV4dCkge1xyXG4gIHJldHVybiB7XHJcbiAgICBkYXRhOiBQcm9jZXNzb3JzLnByb2Nlc3NSb3dPYmplY3QoW1xyXG4gICAgICB7XHJcbiAgICAgICAgbHQ6IGxhdCxcclxuICAgICAgICBsbjogbG9uLFxyXG4gICAgICAgIGljb246ICdwbGFjZScsXHJcbiAgICAgICAgdGV4dFxyXG4gICAgICB9XHJcbiAgICBdKSxcclxuICAgIGlkOiBHRU9DT0RFUl9EQVRBU0VUX05BTUUsXHJcbiAgICBpbmZvOiB7XHJcbiAgICAgIGhpZGRlbjogdHJ1ZSxcclxuICAgICAgaWQ6IEdFT0NPREVSX0RBVEFTRVRfTkFNRSxcclxuICAgICAgbGFiZWw6IEdFT0NPREVSX0RBVEFTRVRfTkFNRVxyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzVmFsaWQoa2V5KSB7XHJcbiAgcmV0dXJuIC9wa1xcLi4qXFwuLiovLnRlc3Qoa2V5KTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEdlb2NvZGVyUGFuZWwgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XHJcbiAgICBpc0dlb2NvZGVyRW5hYmxlZDogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcclxuICAgIG1hcGJveEFwaUFjY2Vzc1Rva2VuOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWRcclxuICB9O1xyXG5cclxuICBzdGF0ZSA9IHtcclxuICAgIHNlbGVjdGVkR2VvSXRlbTogbnVsbFxyXG4gIH07XHJcblxyXG4gIHJlbW92ZUdlb2NvZGVyRGF0YXNldCgpIHtcclxuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2gocmVtb3ZlRGF0YXNldChHRU9DT0RFUl9EQVRBU0VUX05BTUUpKTtcclxuICB9XHJcblxyXG4gIG9uU2VsZWN0ZWQgPSAodmlld3BvcnQgPSBudWxsLCBnZW9JdGVtKSA9PiB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIGNlbnRlcjogW2xvbiwgbGF0XSxcclxuICAgICAgdGV4dCxcclxuICAgICAgYmJveFxyXG4gICAgfSA9IGdlb0l0ZW07XHJcbiAgICB0aGlzLnJlbW92ZUdlb2NvZGVyRGF0YXNldCgpO1xyXG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaChcclxuICAgICAgYWRkRGF0YVRvTWFwKHtcclxuICAgICAgICBkYXRhc2V0czogW2dlbmVyYXRlR2VvY29kZXJEYXRhc2V0KGxhdCwgbG9uLCB0ZXh0KV0sXHJcbiAgICAgICAgb3B0aW9uczoge1xyXG4gICAgICAgICAga2VlcEV4aXN0aW5nQ29uZmlnOiB0cnVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb25maWc6IHtcclxuICAgICAgICAgIHZlcnNpb246ICd2MScsXHJcbiAgICAgICAgICBjb25maWc6IHtcclxuICAgICAgICAgICAgdmlzU3RhdGU6IHtcclxuICAgICAgICAgICAgICBsYXllcnM6IFtJQ09OX0xBWUVSXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgKTtcclxuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goXHJcbiAgICAgIGZpdEJvdW5kcyhiYm94IHx8IFtsb24gLSBHRU9fT0ZGU0VULCBsYXQgLSBHRU9fT0ZGU0VULCBsb24gKyBHRU9fT0ZGU0VULCBsYXQgKyBHRU9fT0ZGU0VUXSlcclxuICAgICk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgc2VsZWN0ZWRHZW9JdGVtOiBnZW9JdGVtXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICByZW1vdmVNYXJrZXIgPSAoKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgc2VsZWN0ZWRHZW9JdGVtOiBudWxsXHJcbiAgICB9KTtcclxuICAgIHRoaXMucmVtb3ZlR2VvY29kZXJEYXRhc2V0KCk7XHJcbiAgfTtcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3Qge2lzR2VvY29kZXJFbmFibGVkLCBtYXBib3hBcGlBY2Nlc3NUb2tlbn0gPSB0aGlzLnByb3BzO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPEdlb2NvZGVyUGFuZWxDb250ZW50XHJcbiAgICAgICAgY2xhc3NOYW1lPVwiZ2VvY29kZXItcGFuZWxcIlxyXG4gICAgICAgIHN0eWxlPXt7ZGlzcGxheTogaXNHZW9jb2RlckVuYWJsZWQgPyAnYmxvY2snIDogJ25vbmUnfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxTaWRlUGFuZWxTZWN0aW9uPlxyXG4gICAgICAgICAgPFBhbmVsTGFiZWw+XHJcbiAgICAgICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlIGlkPXsnZ2VvY29kZXIudGl0bGUnfSAvPlxyXG4gICAgICAgICAgPC9QYW5lbExhYmVsPlxyXG4gICAgICAgICAgPEdlb2NvZGVyV3JhcHBlcj5cclxuICAgICAgICAgICAge2lzVmFsaWQobWFwYm94QXBpQWNjZXNzVG9rZW4pICYmIChcclxuICAgICAgICAgICAgICA8R2VvY29kZXJcclxuICAgICAgICAgICAgICAgIG1hcGJveEFwaUFjY2Vzc1Rva2VuPXttYXBib3hBcGlBY2Nlc3NUb2tlbn1cclxuICAgICAgICAgICAgICAgIG9uU2VsZWN0ZWQ9e3RoaXMub25TZWxlY3RlZH1cclxuICAgICAgICAgICAgICAgIGhpZGVPblNlbGVjdFxyXG4gICAgICAgICAgICAgICAgcG9pbnRab29tPXsxNX1cclxuICAgICAgICAgICAgICAgIHZpZXdwb3J0PXt7fX1cclxuICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zPXtRVUVSWV9QQVJBTVN9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAge3RoaXMuc3RhdGUuc2VsZWN0ZWRHZW9JdGVtICYmIChcclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSByZW1vdmUtbGF5ZXJcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5yZW1vdmVNYXJrZXJ9XHJcbiAgICAgICAgICAgICAgICB0aXRsZT1cIlJlbW92ZSBtYXJrZXJcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICZ0aW1lcztcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvR2VvY29kZXJXcmFwcGVyPlxyXG4gICAgICAgIDwvU2lkZVBhbmVsU2VjdGlvbj5cclxuICAgICAgPC9HZW9jb2RlclBhbmVsQ29udGVudD5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHZW9jb2RlclBhbmVsRmFjdG9yeSgpIHtcclxuICByZXR1cm4gR2VvY29kZXJQYW5lbDtcclxufVxyXG4iXX0=