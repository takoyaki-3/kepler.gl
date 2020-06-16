"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDefaultLayerGroupVisibility = getDefaultLayerGroupVisibility;
exports.isValidStyleUrl = isValidStyleUrl;
exports.getStyleDownloadUrl = getStyleDownloadUrl;
exports.getStyleImageIcon = getStyleImageIcon;
exports.scaleMapStyleByResolution = scaleMapStyleByResolution;
exports.mergeLayerGroupVisibility = mergeLayerGroupVisibility;
exports.editBottomMapStyle = exports.editTopMapStyle = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _lodash = _interopRequireDefault(require("lodash.memoize"));

var _lodash2 = _interopRequireDefault(require("lodash.clonedeep"));

var _defaultSettings = require("../../constants/default-settings");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var mapUrlRg = /^mapbox:\/\/styles\/[-a-z0-9]{2,256}\/[-a-z0-9]{2,256}/;
var httpRg = /^(?=(http:|https:))/;

function getDefaultLayerGroupVisibility(_ref) {
  var _ref$layerGroups = _ref.layerGroups,
      layerGroups = _ref$layerGroups === void 0 ? [] : _ref$layerGroups;
  return layerGroups.reduce(function (accu, layer) {
    return _objectSpread(_objectSpread({}, accu), {}, (0, _defineProperty2["default"])({}, layer.slug, layer.defaultVisibility));
  }, {});
}

var resolver = function resolver(_ref2) {
  var id = _ref2.id,
      mapStyle = _ref2.mapStyle,
      _ref2$visibleLayerGro = _ref2.visibleLayerGroups,
      visibleLayerGroups = _ref2$visibleLayerGro === void 0 ? {} : _ref2$visibleLayerGro;
  return "".concat(id, ":").concat(Object.keys(visibleLayerGroups).filter(function (d) {
    return visibleLayerGroups[d];
  }).sort().join('-'));
};
/**
 * Edit preset map style to keep only visible layers
 *
 * @param {Object} mapStyle - preset map style
 * @param {Object} visibleLayerGroups - visible layers of top map
 * @returns {Object} top map style
 */


var editTopMapStyle = (0, _lodash["default"])(function (_ref3) {
  var id = _ref3.id,
      mapStyle = _ref3.mapStyle,
      visibleLayerGroups = _ref3.visibleLayerGroups;
  var visibleFilters = (mapStyle.layerGroups || []).filter(function (lg) {
    return visibleLayerGroups[lg.slug];
  }).map(function (lg) {
    return lg.filter;
  }); // if top map
  // keep only visible layers

  var filteredLayers = mapStyle.style.layers.filter(function (layer) {
    return visibleFilters.some(function (match) {
      return match(layer);
    });
  });
  return _objectSpread(_objectSpread({}, mapStyle.style), {}, {
    layers: filteredLayers
  });
}, resolver);
/**
 * Edit preset map style to filter out invisible layers
 *
 * @param {Object} mapStyle - preset map style
 * @param {Object} visibleLayerGroups - visible layers of bottom map
 * @returns {Object} bottom map style
 */

exports.editTopMapStyle = editTopMapStyle;
var editBottomMapStyle = (0, _lodash["default"])(function (_ref4) {
  var id = _ref4.id,
      mapStyle = _ref4.mapStyle,
      visibleLayerGroups = _ref4.visibleLayerGroups;
  var invisibleFilters = (mapStyle.layerGroups || []).filter(function (lg) {
    return !visibleLayerGroups[lg.slug];
  }).map(function (lg) {
    return lg.filter;
  }); // if bottom map
  // filter out invisible layers

  var filteredLayers = mapStyle.style.layers.filter(function (layer) {
    return invisibleFilters.every(function (match) {
      return !match(layer);
    });
  });
  return _objectSpread(_objectSpread({}, mapStyle.style), {}, {
    layers: filteredLayers
  });
}, resolver); // valid style url
// mapbox://styles/uberdata/cjfyl03kp1tul2smf5v2tbdd4
// lowercase letters, numbers and dashes only.

exports.editBottomMapStyle = editBottomMapStyle;

function isValidStyleUrl(url) {
  return typeof url === 'string' && Boolean(url.match(mapUrlRg) || url.match(httpRg));
}

function getStyleDownloadUrl(styleUrl, accessToken, mapboxApiUrl) {
  if (styleUrl.startsWith('http')) {
    return styleUrl;
  } // mapbox://styles/jckr/cjhcl0lxv13di2rpfoytdbdyj


  if (styleUrl.startsWith('mapbox://styles')) {
    var styleId = styleUrl.replace('mapbox://styles/', ''); // https://api.mapbox.com/styles/v1/heshan0131/cjg1bfumo1cwm2rlrjxkinfgw?pluginName=Keplergl&access_token=<token>

    return "".concat(mapboxApiUrl || _defaultSettings.DEFAULT_MAPBOX_API_URL, "/styles/v1/").concat(styleId, "?pluginName=Keplergl&access_token=").concat(accessToken);
  } // style url not recognized


  return null;
}
/**
 * Generate static map image from style Url to be used as icon
 * @param {Object} param
 * @param {string} param.styleUrl
 * @param {string} param.mapboxApiAccessToken
 * @param {string} param.mapboxApiUrl
 * @param {Object} param.mapState
 * @param {number} param.mapW
 * @param {number} param.mapH
 */


function getStyleImageIcon(_ref5) {
  var styleUrl = _ref5.styleUrl,
      mapboxApiAccessToken = _ref5.mapboxApiAccessToken,
      _ref5$mapboxApiUrl = _ref5.mapboxApiUrl,
      mapboxApiUrl = _ref5$mapboxApiUrl === void 0 ? _defaultSettings.DEFAULT_MAPBOX_API_URL : _ref5$mapboxApiUrl,
      _ref5$mapState = _ref5.mapState,
      mapState = _ref5$mapState === void 0 ? {
    longitude: -122.3391,
    latitude: 37.7922,
    zoom: 9
  } : _ref5$mapState,
      _ref5$mapW = _ref5.mapW,
      mapW = _ref5$mapW === void 0 ? 400 : _ref5$mapW,
      _ref5$mapH = _ref5.mapH,
      mapH = _ref5$mapH === void 0 ? 300 : _ref5$mapH;
  var styleId = styleUrl.replace('mapbox://styles/', '');
  return "".concat(mapboxApiUrl, "/styles/v1/").concat(styleId, "/static/") + "".concat(mapState.longitude, ",").concat(mapState.latitude, ",").concat(mapState.zoom, ",0,0/") + "".concat(mapW, "x").concat(mapH) + "?access_token=".concat(mapboxApiAccessToken, "&logo=false&attribution=false");
}

function scaleMapStyleByResolution(mapboxStyle, scale) {
  if (scale !== 1 && mapboxStyle) {
    var labelLayerGroup = _defaultSettings.DEFAULT_LAYER_GROUPS.find(function (lg) {
      return lg.slug === 'label';
    }); // @ts-ignore


    var labelLayerFilter = labelLayerGroup.filter;
    var zoomOffset = Math.log2(scale);
    var copyStyle = (0, _lodash2["default"])(mapboxStyle);
    (copyStyle.layers || []).forEach(function (d) {
      // edit minzoom and maxzoom
      if (d.maxzoom) {
        d.maxzoom = Math.max(d.maxzoom + zoomOffset, 1);
      }

      if (d.minzoom) {
        d.minzoom = Math.max(d.minzoom + zoomOffset, 1);
      } // edit text size


      if (labelLayerFilter(d)) {
        if (d.layout && d.layout['text-size'] && Array.isArray(d.layout['text-size'].stops)) {
          d.layout['text-size'].stops.forEach(function (stop) {
            // zoom
            stop[0] = Math.max(stop[0] + zoomOffset, 1); // size

            stop[1] *= scale;
          });
        }
      }
    });
    return copyStyle;
  }

  return mapboxStyle;
}
/**
 * When switch to a new style, try to keep current layer group visibility
 * by merging default and current
 * @param {Object} defaultLayerGroup
 * @param {Object} currentLayerGroup
 * @return {Object} mergedLayerGroups
 */


function mergeLayerGroupVisibility(defaultLayerGroup, currentLayerGroup) {
  return Object.keys(currentLayerGroup).reduce(function (accu, key) {
    return _objectSpread(_objectSpread({}, accu), defaultLayerGroup.hasOwnProperty(key) ? (0, _defineProperty2["default"])({}, key, currentLayerGroup[key]) : {});
  }, defaultLayerGroup);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91dGlscy9tYXAtc3R5bGUtdXRpbHMvbWFwYm94LWdsLXN0eWxlLWVkaXRvci5qcyJdLCJuYW1lcyI6WyJtYXBVcmxSZyIsImh0dHBSZyIsImdldERlZmF1bHRMYXllckdyb3VwVmlzaWJpbGl0eSIsImxheWVyR3JvdXBzIiwicmVkdWNlIiwiYWNjdSIsImxheWVyIiwic2x1ZyIsImRlZmF1bHRWaXNpYmlsaXR5IiwicmVzb2x2ZXIiLCJpZCIsIm1hcFN0eWxlIiwidmlzaWJsZUxheWVyR3JvdXBzIiwiT2JqZWN0Iiwia2V5cyIsImZpbHRlciIsImQiLCJzb3J0Iiwiam9pbiIsImVkaXRUb3BNYXBTdHlsZSIsInZpc2libGVGaWx0ZXJzIiwibGciLCJtYXAiLCJmaWx0ZXJlZExheWVycyIsInN0eWxlIiwibGF5ZXJzIiwic29tZSIsIm1hdGNoIiwiZWRpdEJvdHRvbU1hcFN0eWxlIiwiaW52aXNpYmxlRmlsdGVycyIsImV2ZXJ5IiwiaXNWYWxpZFN0eWxlVXJsIiwidXJsIiwiQm9vbGVhbiIsImdldFN0eWxlRG93bmxvYWRVcmwiLCJzdHlsZVVybCIsImFjY2Vzc1Rva2VuIiwibWFwYm94QXBpVXJsIiwic3RhcnRzV2l0aCIsInN0eWxlSWQiLCJyZXBsYWNlIiwiREVGQVVMVF9NQVBCT1hfQVBJX1VSTCIsImdldFN0eWxlSW1hZ2VJY29uIiwibWFwYm94QXBpQWNjZXNzVG9rZW4iLCJtYXBTdGF0ZSIsImxvbmdpdHVkZSIsImxhdGl0dWRlIiwiem9vbSIsIm1hcFciLCJtYXBIIiwic2NhbGVNYXBTdHlsZUJ5UmVzb2x1dGlvbiIsIm1hcGJveFN0eWxlIiwic2NhbGUiLCJsYWJlbExheWVyR3JvdXAiLCJERUZBVUxUX0xBWUVSX0dST1VQUyIsImZpbmQiLCJsYWJlbExheWVyRmlsdGVyIiwiem9vbU9mZnNldCIsIk1hdGgiLCJsb2cyIiwiY29weVN0eWxlIiwiZm9yRWFjaCIsIm1heHpvb20iLCJtYXgiLCJtaW56b29tIiwibGF5b3V0IiwiQXJyYXkiLCJpc0FycmF5Iiwic3RvcHMiLCJzdG9wIiwibWVyZ2VMYXllckdyb3VwVmlzaWJpbGl0eSIsImRlZmF1bHRMYXllckdyb3VwIiwiY3VycmVudExheWVyR3JvdXAiLCJrZXkiLCJoYXNPd25Qcm9wZXJ0eSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLFFBQVEsR0FBRyx3REFBakI7QUFDQSxJQUFNQyxNQUFNLEdBQUcscUJBQWY7O0FBRU8sU0FBU0MsOEJBQVQsT0FBNEQ7QUFBQSw4QkFBbkJDLFdBQW1CO0FBQUEsTUFBbkJBLFdBQW1CLGlDQUFMLEVBQUs7QUFDakUsU0FBT0EsV0FBVyxDQUFDQyxNQUFaLENBQ0wsVUFBQ0MsSUFBRCxFQUFPQyxLQUFQO0FBQUEsMkNBQ0tELElBREwsNENBRUdDLEtBQUssQ0FBQ0MsSUFGVCxFQUVnQkQsS0FBSyxDQUFDRSxpQkFGdEI7QUFBQSxHQURLLEVBS0wsRUFMSyxDQUFQO0FBT0Q7O0FBRUQsSUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVc7QUFBQSxNQUFFQyxFQUFGLFNBQUVBLEVBQUY7QUFBQSxNQUFNQyxRQUFOLFNBQU1BLFFBQU47QUFBQSxvQ0FBZ0JDLGtCQUFoQjtBQUFBLE1BQWdCQSxrQkFBaEIsc0NBQXFDLEVBQXJDO0FBQUEsbUJBQ1pGLEVBRFksY0FDTkcsTUFBTSxDQUFDQyxJQUFQLENBQVlGLGtCQUFaLEVBQ05HLE1BRE0sQ0FDQyxVQUFBQyxDQUFDO0FBQUEsV0FBSUosa0JBQWtCLENBQUNJLENBQUQsQ0FBdEI7QUFBQSxHQURGLEVBRU5DLElBRk0sR0FHTkMsSUFITSxDQUdELEdBSEMsQ0FETTtBQUFBLENBQWpCO0FBTUE7Ozs7Ozs7OztBQU9PLElBQU1DLGVBQWUsR0FBRyx3QkFBUSxpQkFBd0M7QUFBQSxNQUF0Q1QsRUFBc0MsU0FBdENBLEVBQXNDO0FBQUEsTUFBbENDLFFBQWtDLFNBQWxDQSxRQUFrQztBQUFBLE1BQXhCQyxrQkFBd0IsU0FBeEJB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U0FBT1QsV0FBUDtBQUNEO0FBRUQ7Ozs7Ozs7OztBQU9PLFNBQVNtQix5QkFBVCxDQUFtQ0MsaUJBQW5DLEVBQXNEQyxpQkFBdEQsRUFBeUU7QUFDOUUsU0FBTzNELE1BQU0sQ0FBQ0MsSUFBUCxDQUFZMEQsaUJBQVosRUFBK0JwRSxNQUEvQixDQUNMLFVBQUNDLElBQUQsRUFBT29FLEdBQVA7QUFBQSwyQ0FDS3BFLElBREwsR0FFTWtFLGlCQUFpQixDQUFDRyxjQUFsQixDQUFpQ0QsR0FBakMseUNBQTBDQSxHQUExQyxFQUFnREQsaUJBQWlCLENBQUNDLEdBQUQsQ0FBakUsSUFBMEUsRUFGaEY7QUFBQSxHQURLLEVBS0xGLGlCQUxLLENBQVA7QUFPRCIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMCBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBtZW1vaXplIGZyb20gJ2xvZGFzaC5tZW1vaXplJztcclxuaW1wb3J0IGNsb25kRGVlcCBmcm9tICdsb2Rhc2guY2xvbmVkZWVwJztcclxuaW1wb3J0IHtERUZBVUxUX0xBWUVSX0dST1VQUywgREVGQVVMVF9NQVBCT1hfQVBJX1VSTH0gZnJvbSAnY29uc3RhbnRzL2RlZmF1bHQtc2V0dGluZ3MnO1xyXG5cclxuY29uc3QgbWFwVXJsUmcgPSAvXm1hcGJveDpcXC9cXC9zdHlsZXNcXC9bLWEtejAtOV17MiwyNTZ9XFwvWy1hLXowLTldezIsMjU2fS87XHJcbmNvbnN0IGh0dHBSZyA9IC9eKD89KGh0dHA6fGh0dHBzOikpLztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXREZWZhdWx0TGF5ZXJHcm91cFZpc2liaWxpdHkoe2xheWVyR3JvdXBzID0gW119KSB7XHJcbiAgcmV0dXJuIGxheWVyR3JvdXBzLnJlZHVjZShcclxuICAgIChhY2N1LCBsYXllcikgPT4gKHtcclxuICAgICAgLi4uYWNjdSxcclxuICAgICAgW2xheWVyLnNsdWddOiBsYXllci5kZWZhdWx0VmlzaWJpbGl0eVxyXG4gICAgfSksXHJcbiAgICB7fVxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IHJlc29sdmVyID0gKHtpZCwgbWFwU3R5bGUsIHZpc2libGVMYXllckdyb3VwcyA9IHt9fSkgPT5cclxuICBgJHtpZH06JHtPYmplY3Qua2V5cyh2aXNpYmxlTGF5ZXJHcm91cHMpXHJcbiAgICAuZmlsdGVyKGQgPT4gdmlzaWJsZUxheWVyR3JvdXBzW2RdKVxyXG4gICAgLnNvcnQoKVxyXG4gICAgLmpvaW4oJy0nKX1gO1xyXG5cclxuLyoqXHJcbiAqIEVkaXQgcHJlc2V0IG1hcCBzdHlsZSB0byBrZWVwIG9ubHkgdmlzaWJsZSBsYXllcnNcclxuICpcclxuICogQHBhcmFtIHtPYmplY3R9IG1hcFN0eWxlIC0gcHJlc2V0IG1hcCBzdHlsZVxyXG4gKiBAcGFyYW0ge09iamVjdH0gdmlzaWJsZUxheWVyR3JvdXBzIC0gdmlzaWJsZSBsYXllcnMgb2YgdG9wIG1hcFxyXG4gKiBAcmV0dXJucyB7T2JqZWN0fSB0b3AgbWFwIHN0eWxlXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZWRpdFRvcE1hcFN0eWxlID0gbWVtb2l6ZSgoe2lkLCBtYXBTdHlsZSwgdmlzaWJsZUxheWVyR3JvdXBzfSkgPT4ge1xyXG4gIGNvbnN0IHZpc2libGVGaWx0ZXJzID0gKG1hcFN0eWxlLmxheWVyR3JvdXBzIHx8IFtdKVxyXG4gICAgLmZpbHRlcihsZyA9PiB2aXNpYmxlTGF5ZXJHcm91cHNbbGcuc2x1Z10pXHJcbiAgICAubWFwKGxnID0+IGxnLmZpbHRlcik7XHJcblxyXG4gIC8vIGlmIHRvcCBtYXBcclxuICAvLyBrZWVwIG9ubHkgdmlzaWJsZSBsYXllcnNcclxuICBjb25zdCBmaWx0ZXJlZExheWVycyA9IG1hcFN0eWxlLnN0eWxlLmxheWVycy5maWx0ZXIobGF5ZXIgPT5cclxuICAgIHZpc2libGVGaWx0ZXJzLnNvbWUobWF0Y2ggPT4gbWF0Y2gobGF5ZXIpKVxyXG4gICk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICAuLi5tYXBTdHlsZS5zdHlsZSxcclxuICAgIGxheWVyczogZmlsdGVyZWRMYXllcnNcclxuICB9O1xyXG59LCByZXNvbHZlcik7XHJcblxyXG4vKipcclxuICogRWRpdCBwcmVzZXQgbWFwIHN0eWxlIHRvIGZpbHRlciBvdXQgaW52aXNpYmxlIGxheWVyc1xyXG4gKlxyXG4gKiBAcGFyYW0ge09iamVjdH0gbWFwU3R5bGUgLSBwcmVzZXQgbWFwIHN0eWxlXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSB2aXNpYmxlTGF5ZXJHcm91cHMgLSB2aXNpYmxlIGxheWVycyBvZiBib3R0b20gbWFwXHJcbiAqIEByZXR1cm5zIHtPYmplY3R9IGJvdHRvbSBtYXAgc3R5bGVcclxuICovXHJcbmV4cG9ydCBjb25zdCBlZGl0Qm90dG9tTWFwU3R5bGUgPSBtZW1vaXplKCh7aWQsIG1hcFN0eWxlLCB2aXNpYmxlTGF5ZXJHcm91cHN9KSA9PiB7XHJcbiAgY29uc3QgaW52aXNpYmxlRmlsdGVycyA9IChtYXBTdHlsZS5sYXllckdyb3VwcyB8fCBbXSlcclxuICAgIC5maWx0ZXIobGcgPT4gIXZpc2libGVMYXllckdyb3Vwc1tsZy5zbHVnXSlcclxuICAgIC5tYXAobGcgPT4gbGcuZmlsdGVyKTtcclxuXHJcbiAgLy8gaWYgYm90dG9tIG1hcFxyXG4gIC8vIGZpbHRlciBvdXQgaW52aXNpYmxlIGxheWVyc1xyXG4gIGNvbnN0IGZpbHRlcmVkTGF5ZXJzID0gbWFwU3R5bGUuc3R5bGUubGF5ZXJzLmZpbHRlcihsYXllciA9PlxyXG4gICAgaW52aXNpYmxlRmlsdGVycy5ldmVyeShtYXRjaCA9PiAhbWF0Y2gobGF5ZXIpKVxyXG4gICk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICAuLi5tYXBTdHlsZS5zdHlsZSxcclxuICAgIGxheWVyczogZmlsdGVyZWRMYXllcnNcclxuICB9O1xyXG59LCByZXNvbHZlcik7XHJcblxyXG4vLyB2YWxpZCBzdHlsZSB1cmxcclxuLy8gbWFwYm94Oi8vc3R5bGVzL3ViZXJkYXRhL2NqZnlsMDNrcDF0dWwyc21mNXYydGJkZDRcclxuLy8gbG93ZXJjYXNlIGxldHRlcnMsIG51bWJlcnMgYW5kIGRhc2hlcyBvbmx5LlxyXG5leHBvcnQgZnVuY3Rpb24gaXNWYWxpZFN0eWxlVXJsKHVybCkge1xyXG4gIHJldHVybiB0eXBlb2YgdXJsID09PSAnc3RyaW5nJyAmJiBCb29sZWFuKHVybC5tYXRjaChtYXBVcmxSZykgfHwgdXJsLm1hdGNoKGh0dHBSZykpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3R5bGVEb3dubG9hZFVybChzdHlsZVVybCwgYWNjZXNzVG9rZW4sIG1hcGJveEFwaVVybCkge1xyXG4gIGlmIChzdHlsZVVybC5zdGFydHNXaXRoKCdodHRwJykpIHtcclxuICAgIHJldHVybiBzdHlsZVVybDtcclxuICB9XHJcblxyXG4gIC8vIG1hcGJveDovL3N0eWxlcy9qY2tyL2NqaGNsMGx4djEzZGkycnBmb3l0ZGJkeWpcclxuICBpZiAoc3R5bGVVcmwuc3RhcnRzV2l0aCgnbWFwYm94Oi8vc3R5bGVzJykpIHtcclxuICAgIGNvbnN0IHN0eWxlSWQgPSBzdHlsZVVybC5yZXBsYWNlKCdtYXBib3g6Ly9zdHlsZXMvJywgJycpO1xyXG5cclxuICAgIC8vIGh0dHBzOi8vYXBpLm1hcGJveC5jb20vc3R5bGVzL3YxL2hlc2hhbjAxMzEvY2pnMWJmdW1vMWN3bTJybHJqeGtpbmZndz9wbHVnaW5OYW1lPUtlcGxlcmdsJmFjY2Vzc190b2tlbj08dG9rZW4+XHJcbiAgICByZXR1cm4gYCR7bWFwYm94QXBpVXJsIHx8XHJcbiAgICAgIERFRkFVTFRfTUFQQk9YX0FQSV9VUkx9L3N0eWxlcy92MS8ke3N0eWxlSWR9P3BsdWdpbk5hbWU9S2VwbGVyZ2wmYWNjZXNzX3Rva2VuPSR7YWNjZXNzVG9rZW59YDtcclxuICB9XHJcblxyXG4gIC8vIHN0eWxlIHVybCBub3QgcmVjb2duaXplZFxyXG4gIHJldHVybiBudWxsO1xyXG59XHJcblxyXG4vKipcclxuICogR2VuZXJhdGUgc3RhdGljIG1hcCBpbWFnZSBmcm9tIHN0eWxlIFVybCB0byBiZSB1c2VkIGFzIGljb25cclxuICogQHBhcmFtIHtPYmplY3R9IHBhcmFtXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXJhbS5zdHlsZVVybFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gcGFyYW0ubWFwYm94QXBpQWNjZXNzVG9rZW5cclxuICogQHBhcmFtIHtzdHJpbmd9IHBhcmFtLm1hcGJveEFwaVVybFxyXG4gKiBAcGFyYW0ge09iamVjdH0gcGFyYW0ubWFwU3RhdGVcclxuICogQHBhcmFtIHtudW1iZXJ9IHBhcmFtLm1hcFdcclxuICogQHBhcmFtIHtudW1iZXJ9IHBhcmFtLm1hcEhcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRTdHlsZUltYWdlSWNvbih7XHJcbiAgc3R5bGVVcmwsXHJcbiAgbWFwYm94QXBpQWNjZXNzVG9rZW4sXHJcbiAgbWFwYm94QXBpVXJsID0gREVGQVVMVF9NQVBCT1hfQVBJX1VSTCxcclxuICBtYXBTdGF0ZSA9IHtcclxuICAgIGxvbmdpdHVkZTogLTEyMi4zMzkxLFxyXG4gICAgbGF0aXR1ZGU6IDM3Ljc5MjIsXHJcbiAgICB6b29tOiA5XHJcbiAgfSxcclxuICBtYXBXID0gNDAwLFxyXG4gIG1hcEggPSAzMDBcclxufSkge1xyXG4gIGNvbnN0IHN0eWxlSWQgPSBzdHlsZVVybC5yZXBsYWNlKCdtYXBib3g6Ly9zdHlsZXMvJywgJycpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgYCR7bWFwYm94QXBpVXJsfS9zdHlsZXMvdjEvJHtzdHlsZUlkfS9zdGF0aWMvYCArXHJcbiAgICBgJHttYXBTdGF0ZS5sb25naXR1ZGV9LCR7bWFwU3RhdGUubGF0aXR1ZGV9LCR7bWFwU3RhdGUuem9vbX0sMCwwL2AgK1xyXG4gICAgYCR7bWFwV314JHttYXBIfWAgK1xyXG4gICAgYD9hY2Nlc3NfdG9rZW49JHttYXBib3hBcGlBY2Nlc3NUb2tlbn0mbG9nbz1mYWxzZSZhdHRyaWJ1dGlvbj1mYWxzZWBcclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2NhbGVNYXBTdHlsZUJ5UmVzb2x1dGlvbihtYXBib3hTdHlsZSwgc2NhbGUpIHtcclxuICBpZiAoc2NhbGUgIT09IDEgJiYgbWFwYm94U3R5bGUpIHtcclxuICAgIGNvbnN0IGxhYmVsTGF5ZXJHcm91cCA9IERFRkFVTFRfTEFZRVJfR1JPVVBTLmZpbmQobGcgPT4gbGcuc2x1ZyA9PT0gJ2xhYmVsJyk7XHJcbiAgICAvLyBAdHMtaWdub3JlXHJcbiAgICBjb25zdCB7ZmlsdGVyOiBsYWJlbExheWVyRmlsdGVyfSA9IGxhYmVsTGF5ZXJHcm91cDtcclxuICAgIGNvbnN0IHpvb21PZmZzZXQgPSBNYXRoLmxvZzIoc2NhbGUpO1xyXG5cclxuICAgIGNvbnN0IGNvcHlTdHlsZSA9IGNsb25kRGVlcChtYXBib3hTdHlsZSk7XHJcbiAgICAoY29weVN0eWxlLmxheWVycyB8fCBbXSkuZm9yRWFjaChkID0+IHtcclxuICAgICAgLy8gZWRpdCBtaW56b29tIGFuZCBtYXh6b29tXHJcbiAgICAgIGlmIChkLm1heHpvb20pIHtcclxuICAgICAgICBkLm1heHpvb20gPSBNYXRoLm1heChkLm1heHpvb20gKyB6b29tT2Zmc2V0LCAxKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGQubWluem9vbSkge1xyXG4gICAgICAgIGQubWluem9vbSA9IE1hdGgubWF4KGQubWluem9vbSArIHpvb21PZmZzZXQsIDEpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBlZGl0IHRleHQgc2l6ZVxyXG4gICAgICBpZiAobGFiZWxMYXllckZpbHRlcihkKSkge1xyXG4gICAgICAgIGlmIChkLmxheW91dCAmJiBkLmxheW91dFsndGV4dC1zaXplJ10gJiYgQXJyYXkuaXNBcnJheShkLmxheW91dFsndGV4dC1zaXplJ10uc3RvcHMpKSB7XHJcbiAgICAgICAgICBkLmxheW91dFsndGV4dC1zaXplJ10uc3RvcHMuZm9yRWFjaChzdG9wID0+IHtcclxuICAgICAgICAgICAgLy8gem9vbVxyXG4gICAgICAgICAgICBzdG9wWzBdID0gTWF0aC5tYXgoc3RvcFswXSArIHpvb21PZmZzZXQsIDEpO1xyXG4gICAgICAgICAgICAvLyBzaXplXHJcbiAgICAgICAgICAgIHN0b3BbMV0gKj0gc2NhbGU7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBjb3B5U3R5bGU7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gbWFwYm94U3R5bGU7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBXaGVuIHN3aXRjaCB0byBhIG5ldyBzdHlsZSwgdHJ5IHRvIGtlZXAgY3VycmVudCBsYXllciBncm91cCB2aXNpYmlsaXR5XHJcbiAqIGJ5IG1lcmdpbmcgZGVmYXVsdCBhbmQgY3VycmVudFxyXG4gKiBAcGFyYW0ge09iamVjdH0gZGVmYXVsdExheWVyR3JvdXBcclxuICogQHBhcmFtIHtPYmplY3R9IGN1cnJlbnRMYXllckdyb3VwXHJcbiAqIEByZXR1cm4ge09iamVjdH0gbWVyZ2VkTGF5ZXJHcm91cHNcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBtZXJnZUxheWVyR3JvdXBWaXNpYmlsaXR5KGRlZmF1bHRMYXllckdyb3VwLCBjdXJyZW50TGF5ZXJHcm91cCkge1xyXG4gIHJldHVybiBPYmplY3Qua2V5cyhjdXJyZW50TGF5ZXJHcm91cCkucmVkdWNlKFxyXG4gICAgKGFjY3UsIGtleSkgPT4gKHtcclxuICAgICAgLi4uYWNjdSxcclxuICAgICAgLi4uKGRlZmF1bHRMYXllckdyb3VwLmhhc093blByb3BlcnR5KGtleSkgPyB7W2tleV06IGN1cnJlbnRMYXllckdyb3VwW2tleV19IDoge30pXHJcbiAgICB9KSxcclxuICAgIGRlZmF1bHRMYXllckdyb3VwXHJcbiAgKTtcclxufVxyXG4iXX0=