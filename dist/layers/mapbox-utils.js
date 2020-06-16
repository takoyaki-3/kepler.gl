"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateMapboxLayers = generateMapboxLayers;
exports.updateMapboxLayers = updateMapboxLayers;
exports.geoJsonFromData = geoJsonFromData;
exports.gpuFilterToMapboxFilter = gpuFilterToMapboxFilter;
exports.prefixGpuField = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _baseLayer = require("./base-layer");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * This function will convert layers to mapbox layers
 * @param {Array<Object>} layers the layers to be converted
 * @param {Array<Object>} layerData extra layer information
 * @param {Array<Number>} layerOrder the order by which we should convert layers
 * @param {Object} layersToRender {[id]: true | false} object whether each layer should be rendered
 * @returns {Object} {[id]: layer}
 */
function generateMapboxLayers() {
  var layers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var layerData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var layerOrder = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var layersToRender = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

  if (layerData.length > 0) {
    return layerOrder.slice().reverse().filter(function (idx) {
      return layers[idx].overlayType === _baseLayer.OVERLAY_TYPE.mapboxgl && layersToRender[layers[idx].id];
    }).reduce(function (accu, index) {
      var layer = layers[index];
      return _objectSpread(_objectSpread({}, accu), {}, (0, _defineProperty2["default"])({}, layer.id, {
        id: layer.id,
        data: layerData[index].data,
        isVisible: layer.config.isVisible,
        config: layerData[index].config,
        hidden: layer.config.hidden,
        sourceId: layerData[index].config.source
      }));
    }, {});
  }

  return {};
}
/**
 * Update mapbox layers on the given map
 * @param {Object} map
 * @param {Object} newLayers Map of new mapbox layers to be displayed
 * @param {Object} oldLayers Map of the old layers to be compare with the current ones to detect deleted layers
 *                  {layerId: sourceId}
 */


function updateMapboxLayers(map) {
  var newLayers = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var oldLayers = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

  // delete no longer existed old layers
  if (oldLayers) {
    checkAndRemoveOldLayers(map, oldLayers, newLayers);
  } // insert or update new layer


  Object.values(newLayers).forEach(function (overlay) {
    var layerId = overlay.id,
        config = overlay.config,
        data = overlay.data,
        sourceId = overlay.sourceId,
        isVisible = overlay.isVisible;

    if (!data && !config) {
      return;
    }

    var _ref = oldLayers && oldLayers[layerId] || {},
        oldData = _ref.data,
        oldConfig = _ref.config;

    if (data && data !== oldData) {
      updateSourceData(map, sourceId, data);
    } // compare with previous configs


    if (oldConfig !== config) {
      updateLayerConfig(map, layerId, config, isVisible);
    }
  });
}

function checkAndRemoveOldLayers(map, oldLayers, newLayers) {
  Object.keys(oldLayers).forEach(function (layerId) {
    if (!newLayers[layerId]) {
      map.removeLayer(layerId);
    }
  });
}

function updateLayerConfig(map, layerId, config, isVisible) {
  var mapboxLayer = map.getLayer(layerId);

  if (mapboxLayer) {
    // check if layer already is set
    // remove it if exists
    map.removeLayer(layerId);
  }

  map.addLayer(config);
  map.setLayoutProperty(layerId, 'visibility', isVisible ? 'visible' : 'none');
}

function updateSourceData(map, sourceId, data) {
  var source = map.getSource(sourceId);

  if (!source) {
    map.addSource(sourceId, {
      type: 'geojson',
      data: data
    });
  } else {
    source.setData(data);
  }
}
/**
 *
 * @param points
 * @param columns {
 * lat: {fieldIdx},
 * lng: {fieldIdx},
 * alt: {fieldIdx}
 * }
 * @param properties [{label: {fieldIdx}]
 * @returns {{type: string, properties: {}, features: {type: string, properties: {}, geometry: {type: string, coordinates: *[]}}[]}}
 */


function geoJsonFromData() {
  var allData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var filteredIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var getGeometry = arguments.length > 2 ? arguments[2] : undefined;
  var getProperties = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function (d, i) {};
  var geojson = {
    type: 'FeatureCollection',
    features: []
  };

  for (var i = 0; i < filteredIndex.length; i++) {
    var index = filteredIndex[i];
    var point = allData[index];
    var geometry = getGeometry(point);

    if (geometry) {
      geojson.features.push({
        type: 'Feature',
        properties: _objectSpread({
          index: index
        }, getProperties(point, index)),
        geometry: geometry
      });
    }
  }

  return geojson;
}

var prefixGpuField = function prefixGpuField(name) {
  return "gpu:".concat(name);
};

exports.prefixGpuField = prefixGpuField;

function gpuFilterToMapboxFilter(gpuFilter) {
  var filterRange = gpuFilter.filterRange,
      filterValueUpdateTriggers = gpuFilter.filterValueUpdateTriggers;
  var hasFilter = Object.values(filterValueUpdateTriggers).filter(function (d) {
    return d;
  });

  if (!hasFilter.length) {
    return null;
  }

  var condition = ['all']; // [">=", key, value]
  // ["<=", key, value]

  var expressions = Object.values(filterValueUpdateTriggers).reduce(function (accu, name, i) {
    return name ? [].concat((0, _toConsumableArray2["default"])(accu), [['>=', prefixGpuField(name), filterRange[i][0]], ['<=', prefixGpuField(name), filterRange[i][1]]]) : accu;
  }, condition);
  return expressions;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sYXllcnMvbWFwYm94LXV0aWxzLmpzIl0sIm5hbWVzIjpbImdlbmVyYXRlTWFwYm94TGF5ZXJzIiwibGF5ZXJzIiwibGF5ZXJEYXRhIiwibGF5ZXJPcmRlciIsImxheWVyc1RvUmVuZGVyIiwibGVuZ3RoIiwic2xpY2UiLCJyZXZlcnNlIiwiZmlsdGVyIiwiaWR4Iiwib3ZlcmxheVR5cGUiLCJPVkVSTEFZX1RZUEUiLCJtYXBib3hnbCIsImlkIiwicmVkdWNlIiwiYWNjdSIsImluZGV4IiwibGF5ZXIiLCJkYXRhIiwiaXNWaXNpYmxlIiwiY29uZmlnIiwiaGlkZGVuIiwic291cmNlSWQiLCJzb3VyY2UiLCJ1cGRhdGVNYXBib3hMYXllcnMiLCJtYXAiLCJuZXdMYXllcnMiLCJvbGRMYXllcnMiLCJjaGVja0FuZFJlbW92ZU9sZExheWVycyIsIk9iamVjdCIsInZhbHVlcyIsImZvckVhY2giLCJvdmVybGF5IiwibGF5ZXJJZCIsIm9sZERhdGEiLCJvbGRDb25maWciLCJ1cGRhdGVTb3VyY2VEYXRhIiwidXBkYXRlTGF5ZXJDb25maWciLCJrZXlzIiwicmVtb3ZlTGF5ZXIiLCJtYXBib3hMYXllciIsImdldExheWVyIiwiYWRkTGF5ZXIiLCJzZXRMYXlvdXRQcm9wZXJ0eSIsImdldFNvdXJjZSIsImFkZFNvdXJjZSIsInR5cGUiLCJzZXREYXRhIiwiZ2VvSnNvbkZyb21EYXRhIiwiYWxsRGF0YSIsImZpbHRlcmVkSW5kZXgiLCJnZXRHZW9tZXRyeSIsImdldFByb3BlcnRpZXMiLCJkIiwiaSIsImdlb2pzb24iLCJmZWF0dXJlcyIsInBvaW50IiwiZ2VvbWV0cnkiLCJwdXNoIiwicHJvcGVydGllcyIsInByZWZpeEdwdUZpZWxkIiwibmFtZSIsImdwdUZpbHRlclRvTWFwYm94RmlsdGVyIiwiZ3B1RmlsdGVyIiwiZmlsdGVyUmFuZ2UiLCJmaWx0ZXJWYWx1ZVVwZGF0ZVRyaWdnZXJzIiwiaGFzRmlsdGVyIiwiY29uZGl0aW9uIiwiZXhwcmVz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QUFBQSxDQUEzQjs7OztBQUVBLFNBQVNDLHVCQUFULENBQWlDQyxTQUFqQyxFQUE0QztBQUFBLE1BQzFDQyxXQUQwQyxHQUNBRCxTQURBLENBQzFDQyxXQUQwQztBQUFBLE1BQzdCQyx5QkFENkIsR0FDQUYsU0FEQSxDQUM3QkUseUJBRDZCO0FBR2pELE1BQU1DLFNBQVMsR0FBR3RDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjb0MseUJBQWQsRUFBeUMxRCxNQUF6QyxDQUFnRCxVQUFBNkMsQ0FBQztBQUFBLFdBQUlBLENBQUo7QUFBQSxHQUFqRCxDQUFsQjs7QUFFQSxNQUFJLENBQUNjLFNBQVMsQ0FBQzlELE1BQWYsRUFBdUI7QUFDckIsV0FBTyxJQUFQO0FBQ0Q7O0FBRUQsTUFBTStELFNBQVMsR0FBRyxDQUFDLEtBQUQsQ0FBbEIsQ0FUaUQsQ0FXakQ7QUFDQTs7QUFDQSxNQUFNQyxXQUFXLEdBQUd4QyxNQUFNLENBQUNDLE1BQVAsQ0FBY29DLHlCQUFkLEVBQXlDcEQsTUFBekMsQ0FDbEIsVUFBQ0MsSUFBRCxFQUFPK0MsSUFBUCxFQUFhUixDQUFiO0FBQUEsV0FDRVEsSUFBSSxpREFFSy9DLElBRkwsSUFHRSxDQUFDLElBQUQsRUFBTzhDLGNBQWMsQ0FBQ0MsSUFBRCxDQUFyQixFQUE2QkcsV0FBVyxDQUFDWCxDQUFELENBQVgsQ0FBZSxDQUFmLENBQTdCLENBSEYsRUFJRSxDQUFDLElBQUQsRUFBT08sY0FBYyxDQUFDQyxJQUFELENBQXJCLEVBQTZCRyxXQUFXLENBQUNYLENBQUQsQ0FBWCxDQUFlLENBQWYsQ0FBN0IsQ0FKRixLQU1BdkMsSUFQTjtBQUFBLEdBRGtCLEVBU2xCcUQsU0FUa0IsQ0FBcEI7QUFZQSxTQUFPQyxXQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQge09WRVJMQVlfVFlQRX0gZnJvbSAnLi9iYXNlLWxheWVyJztcclxuXHJcbi8qKlxyXG4gKiBUaGlzIGZ1bmN0aW9uIHdpbGwgY29udmVydCBsYXllcnMgdG8gbWFwYm94IGxheWVyc1xyXG4gKiBAcGFyYW0ge0FycmF5PE9iamVjdD59IGxheWVycyB0aGUgbGF5ZXJzIHRvIGJlIGNvbnZlcnRlZFxyXG4gKiBAcGFyYW0ge0FycmF5PE9iamVjdD59IGxheWVyRGF0YSBleHRyYSBsYXllciBpbmZvcm1hdGlvblxyXG4gKiBAcGFyYW0ge0FycmF5PE51bWJlcj59IGxheWVyT3JkZXIgdGhlIG9yZGVyIGJ5IHdoaWNoIHdlIHNob3VsZCBjb252ZXJ0IGxheWVyc1xyXG4gKiBAcGFyYW0ge09iamVjdH0gbGF5ZXJzVG9SZW5kZXIge1tpZF06IHRydWUgfCBmYWxzZX0gb2JqZWN0IHdoZXRoZXIgZWFjaCBsYXllciBzaG91bGQgYmUgcmVuZGVyZWRcclxuICogQHJldHVybnMge09iamVjdH0ge1tpZF06IGxheWVyfVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlTWFwYm94TGF5ZXJzKFxyXG4gIGxheWVycyA9IFtdLFxyXG4gIGxheWVyRGF0YSA9IFtdLFxyXG4gIGxheWVyT3JkZXIgPSBbXSxcclxuICBsYXllcnNUb1JlbmRlciA9IHt9XHJcbikge1xyXG4gIGlmIChsYXllckRhdGEubGVuZ3RoID4gMCkge1xyXG4gICAgcmV0dXJuIGxheWVyT3JkZXJcclxuICAgICAgLnNsaWNlKClcclxuICAgICAgLnJldmVyc2UoKVxyXG4gICAgICAuZmlsdGVyKFxyXG4gICAgICAgIGlkeCA9PiBsYXllcnNbaWR4XS5vdmVybGF5VHlwZSA9PT0gT1ZFUkxBWV9UWVBFLm1hcGJveGdsICYmIGxheWVyc1RvUmVuZGVyW2xheWVyc1tpZHhdLmlkXVxyXG4gICAgICApXHJcbiAgICAgIC5yZWR1Y2UoKGFjY3UsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgY29uc3QgbGF5ZXIgPSBsYXllcnNbaW5kZXhdO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAuLi5hY2N1LFxyXG4gICAgICAgICAgW2xheWVyLmlkXToge1xyXG4gICAgICAgICAgICBpZDogbGF5ZXIuaWQsXHJcbiAgICAgICAgICAgIGRhdGE6IGxheWVyRGF0YVtpbmRleF0uZGF0YSxcclxuICAgICAgICAgICAgaXNWaXNpYmxlOiBsYXllci5jb25maWcuaXNWaXNpYmxlLFxyXG4gICAgICAgICAgICBjb25maWc6IGxheWVyRGF0YVtpbmRleF0uY29uZmlnLFxyXG4gICAgICAgICAgICBoaWRkZW46IGxheWVyLmNvbmZpZy5oaWRkZW4sXHJcbiAgICAgICAgICAgIHNvdXJjZUlkOiBsYXllckRhdGFbaW5kZXhdLmNvbmZpZy5zb3VyY2VcclxuICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICB9LCB7fSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge307XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBVcGRhdGUgbWFwYm94IGxheWVycyBvbiB0aGUgZ2l2ZW4gbWFwXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBtYXBcclxuICogQHBhcmFtIHtPYmplY3R9IG5ld0xheWVycyBNYXAgb2YgbmV3IG1hcGJveCBsYXllcnMgdG8gYmUgZGlzcGxheWVkXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBvbGRMYXllcnMgTWFwIG9mIHRoZSBvbGQgbGF5ZXJzIHRvIGJlIGNvbXBhcmUgd2l0aCB0aGUgY3VycmVudCBvbmVzIHRvIGRldGVjdCBkZWxldGVkIGxheWVyc1xyXG4gKiAgICAgICAgICAgICAgICAgIHtsYXllcklkOiBzb3VyY2VJZH1cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVNYXBib3hMYXllcnMobWFwLCBuZXdMYXllcnMgPSB7fSwgb2xkTGF5ZXJzID0gbnVsbCkge1xyXG4gIC8vIGRlbGV0ZSBubyBsb25nZXIgZXhpc3RlZCBvbGQgbGF5ZXJzXHJcbiAgaWYgKG9sZExheWVycykge1xyXG4gICAgY2hlY2tBbmRSZW1vdmVPbGRMYXllcnMobWFwLCBvbGRMYXllcnMsIG5ld0xheWVycyk7XHJcbiAgfVxyXG5cclxuICAvLyBpbnNlcnQgb3IgdXBkYXRlIG5ldyBsYXllclxyXG4gIE9iamVjdC52YWx1ZXMobmV3TGF5ZXJzKS5mb3JFYWNoKG92ZXJsYXkgPT4ge1xyXG4gICAgY29uc3Qge2lkOiBsYXllcklkLCBjb25maWcsIGRhdGEsIHNvdXJjZUlkLCBpc1Zpc2libGV9ID0gb3ZlcmxheTtcclxuICAgIGlmICghZGF0YSAmJiAhY29uZmlnKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB7ZGF0YTogb2xkRGF0YSwgY29uZmlnOiBvbGRDb25maWd9ID0gKG9sZExheWVycyAmJiBvbGRMYXllcnNbbGF5ZXJJZF0pIHx8IHt9O1xyXG5cclxuICAgIGlmIChkYXRhICYmIGRhdGEgIT09IG9sZERhdGEpIHtcclxuICAgICAgdXBkYXRlU291cmNlRGF0YShtYXAsIHNvdXJjZUlkLCBkYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBjb21wYXJlIHdpdGggcHJldmlvdXMgY29uZmlnc1xyXG4gICAgaWYgKG9sZENvbmZpZyAhPT0gY29uZmlnKSB7XHJcbiAgICAgIHVwZGF0ZUxheWVyQ29uZmlnKG1hcCwgbGF5ZXJJZCwgY29uZmlnLCBpc1Zpc2libGUpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjaGVja0FuZFJlbW92ZU9sZExheWVycyhtYXAsIG9sZExheWVycywgbmV3TGF5ZXJzKSB7XHJcbiAgT2JqZWN0LmtleXMob2xkTGF5ZXJzKS5mb3JFYWNoKGxheWVySWQgPT4ge1xyXG4gICAgaWYgKCFuZXdMYXllcnNbbGF5ZXJJZF0pIHtcclxuICAgICAgbWFwLnJlbW92ZUxheWVyKGxheWVySWQpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVMYXllckNvbmZpZyhtYXAsIGxheWVySWQsIGNvbmZpZywgaXNWaXNpYmxlKSB7XHJcbiAgY29uc3QgbWFwYm94TGF5ZXIgPSBtYXAuZ2V0TGF5ZXIobGF5ZXJJZCk7XHJcblxyXG4gIGlmIChtYXBib3hMYXllcikge1xyXG4gICAgLy8gY2hlY2sgaWYgbGF5ZXIgYWxyZWFkeSBpcyBzZXRcclxuICAgIC8vIHJlbW92ZSBpdCBpZiBleGlzdHNcclxuICAgIG1hcC5yZW1vdmVMYXllcihsYXllcklkKTtcclxuICB9XHJcblxyXG4gIG1hcC5hZGRMYXllcihjb25maWcpO1xyXG4gIG1hcC5zZXRMYXlvdXRQcm9wZXJ0eShsYXllcklkLCAndmlzaWJpbGl0eScsIGlzVmlzaWJsZSA/ICd2aXNpYmxlJyA6ICdub25lJyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZVNvdXJjZURhdGEobWFwLCBzb3VyY2VJZCwgZGF0YSkge1xyXG4gIGNvbnN0IHNvdXJjZSA9IG1hcC5nZXRTb3VyY2Uoc291cmNlSWQpO1xyXG5cclxuICBpZiAoIXNvdXJjZSkge1xyXG4gICAgbWFwLmFkZFNvdXJjZShzb3VyY2VJZCwge1xyXG4gICAgICB0eXBlOiAnZ2VvanNvbicsXHJcbiAgICAgIGRhdGFcclxuICAgIH0pO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBzb3VyY2Uuc2V0RGF0YShkYXRhKTtcclxuICB9XHJcbn1cclxuLyoqXHJcbiAqXHJcbiAqIEBwYXJhbSBwb2ludHNcclxuICogQHBhcmFtIGNvbHVtbnMge1xyXG4gKiBsYXQ6IHtmaWVsZElkeH0sXHJcbiAqIGxuZzoge2ZpZWxkSWR4fSxcclxuICogYWx0OiB7ZmllbGRJZHh9XHJcbiAqIH1cclxuICogQHBhcmFtIHByb3BlcnRpZXMgW3tsYWJlbDoge2ZpZWxkSWR4fV1cclxuICogQHJldHVybnMge3t0eXBlOiBzdHJpbmcsIHByb3BlcnRpZXM6IHt9LCBmZWF0dXJlczoge3R5cGU6IHN0cmluZywgcHJvcGVydGllczoge30sIGdlb21ldHJ5OiB7dHlwZTogc3RyaW5nLCBjb29yZGluYXRlczogKltdfX1bXX19XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2VvSnNvbkZyb21EYXRhKFxyXG4gIGFsbERhdGEgPSBbXSxcclxuICBmaWx0ZXJlZEluZGV4ID0gW10sXHJcbiAgZ2V0R2VvbWV0cnksXHJcbiAgZ2V0UHJvcGVydGllcyA9IChkLCBpKSA9PiB7fVxyXG4pIHtcclxuICBjb25zdCBnZW9qc29uID0ge1xyXG4gICAgdHlwZTogJ0ZlYXR1cmVDb2xsZWN0aW9uJyxcclxuICAgIGZlYXR1cmVzOiBbXVxyXG4gIH07XHJcblxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZmlsdGVyZWRJbmRleC5sZW5ndGg7IGkrKykge1xyXG4gICAgY29uc3QgaW5kZXggPSBmaWx0ZXJlZEluZGV4W2ldO1xyXG4gICAgY29uc3QgcG9pbnQgPSBhbGxEYXRhW2luZGV4XTtcclxuICAgIGNvbnN0IGdlb21ldHJ5ID0gZ2V0R2VvbWV0cnkocG9pbnQpO1xyXG5cclxuICAgIGlmIChnZW9tZXRyeSkge1xyXG4gICAgICBnZW9qc29uLmZlYXR1cmVzLnB1c2goe1xyXG4gICAgICAgIHR5cGU6ICdGZWF0dXJlJyxcclxuICAgICAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgICBpbmRleCxcclxuICAgICAgICAgIC4uLmdldFByb3BlcnRpZXMocG9pbnQsIGluZGV4KVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2VvbWV0cnlcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gZ2VvanNvbjtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHByZWZpeEdwdUZpZWxkID0gbmFtZSA9PiBgZ3B1OiR7bmFtZX1gO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdwdUZpbHRlclRvTWFwYm94RmlsdGVyKGdwdUZpbHRlcikge1xyXG4gIGNvbnN0IHtmaWx0ZXJSYW5nZSwgZmlsdGVyVmFsdWVVcGRhdGVUcmlnZ2Vyc30gPSBncHVGaWx0ZXI7XHJcblxyXG4gIGNvbnN0IGhhc0ZpbHRlciA9IE9iamVjdC52YWx1ZXMoZmlsdGVyVmFsdWVVcGRhdGVUcmlnZ2VycykuZmlsdGVyKGQgPT4gZCk7XHJcblxyXG4gIGlmICghaGFzRmlsdGVyLmxlbmd0aCkge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICBjb25zdCBjb25kaXRpb24gPSBbJ2FsbCddO1xyXG5cclxuICAvLyBbXCI+PVwiLCBrZXksIHZhbHVlXVxyXG4gIC8vIFtcIjw9XCIsIGtleSwgdmFsdWVdXHJcbiAgY29uc3QgZXhwcmVzc2lvbnMgPSBPYmplY3QudmFsdWVzKGZpbHRlclZhbHVlVXBkYXRlVHJpZ2dlcnMpLnJlZHVjZShcclxuICAgIChhY2N1LCBuYW1lLCBpKSA9PlxyXG4gICAgICBuYW1lXHJcbiAgICAgICAgPyBbXHJcbiAgICAgICAgICAgIC4uLmFjY3UsXHJcbiAgICAgICAgICAgIFsnPj0nLCBwcmVmaXhHcHVGaWVsZChuYW1lKSwgZmlsdGVyUmFuZ2VbaV1bMF1dLFxyXG4gICAgICAgICAgICBbJzw9JywgcHJlZml4R3B1RmllbGQobmFtZSksIGZpbHRlclJhbmdlW2ldWzFdXVxyXG4gICAgICAgICAgXVxyXG4gICAgICAgIDogYWNjdSxcclxuICAgIGNvbmRpdGlvblxyXG4gICk7XHJcblxyXG4gIHJldHVybiBleHByZXNzaW9ucztcclxufVxyXG4iXX0=