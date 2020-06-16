"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeFilters = mergeFilters;
exports.mergeLayers = mergeLayers;
exports.mergeInteractions = mergeInteractions;
exports.mergeSplitMaps = mergeSplitMaps;
exports.mergeInteractionTooltipConfig = mergeInteractionTooltipConfig;
exports.mergeLayerBlending = mergeLayerBlending;
exports.mergeAnimationConfig = mergeAnimationConfig;
exports.validateSavedLayerColumns = validateSavedLayerColumns;
exports.validateSavedTextLabel = validateSavedTextLabel;
exports.validateSavedVisualChannels = validateSavedVisualChannels;
exports.validateLayerWithData = validateLayerWithData;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _lodash = _interopRequireDefault(require("lodash.uniq"));

var _lodash2 = _interopRequireDefault(require("lodash.pick"));

var _lodash3 = _interopRequireDefault(require("lodash.isequal"));

var _lodash4 = _interopRequireDefault(require("lodash.flattendeep"));

var _utils = require("../utils/utils");

var _filterUtils = require("../utils/filter-utils");

var _splitMapUtils = require("../utils/split-map-utils");

var _gpuFilterUtils = require("../utils/gpu-filter-utils");

var _defaultSettings = require("../constants/default-settings");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * Merge loaded filters with current state, if no fields or data are loaded
 * save it for later
 *
 * @type {typeof import('./vis-state-merger').mergeFilters}
 */
function mergeFilters(state, filtersToMerge) {
  var merged = [];
  var unmerged = [];
  var datasets = state.datasets;
  var updatedDatasets = datasets;

  if (!Array.isArray(filtersToMerge) || !filtersToMerge.length) {
    return state;
  } // merge filters


  filtersToMerge.forEach(function (filter) {
    // we can only look for datasets define in the filter dataId
    var datasetIds = (0, _utils.toArray)(filter.dataId); // we can merge a filter only if all datasets in filter.dataId are loaded

    if (datasetIds.every(function (d) {
      return datasets[d];
    })) {
      // all datasetIds in filter must be present the state datasets
      var _datasetIds$reduce = datasetIds.reduce(function (acc, datasetId) {
        var dataset = updatedDatasets[datasetId];
        var layers = state.layers.filter(function (l) {
          return l.config.dataId === dataset.id;
        });

        var _validateFilterWithDa = (0, _filterUtils.validateFilterWithData)(acc.augmentedDatasets[datasetId] || dataset, filter, layers),
            updatedFilter = _validateFilterWithDa.filter,
            updatedDataset = _validateFilterWithDa.dataset;

        if (updatedFilter) {
          return _objectSpread(_objectSpread({}, acc), {}, {
            // merge filter props
            filter: acc.filter ? _objectSpread(_objectSpread({}, acc.filter), (0, _filterUtils.mergeFilterDomainStep)(acc, updatedFilter)) : updatedFilter,
            applyToDatasets: [].concat((0, _toConsumableArray2["default"])(acc.applyToDatasets), [datasetId]),
            augmentedDatasets: _objectSpread(_objectSpread({}, acc.augmentedDatasets), {}, (0, _defineProperty2["default"])({}, datasetId, updatedDataset))
          });
        }

        return acc;
      }, {
        filter: null,
        applyToDatasets: [],
        augmentedDatasets: {}
      }),
          validatedFilter = _datasetIds$reduce.filter,
          applyToDatasets = _datasetIds$reduce.applyToDatasets,
          augmentedDatasets = _datasetIds$reduce.augmentedDatasets;

      if (validatedFilter && (0, _lodash3["default"])(datasetIds, applyToDatasets)) {
        merged.push(validatedFilter);
        updatedDatasets = _objectSpread(_objectSpread({}, updatedDatasets), augmentedDatasets);
      }
    } else {
      unmerged.push(filter);
    }
  }); // merge filter with existing

  var updatedFilters = [].concat((0, _toConsumableArray2["default"])(state.filters || []), merged);
  updatedFilters = (0, _gpuFilterUtils.resetFilterGpuMode)(updatedFilters);
  updatedFilters = (0, _gpuFilterUtils.assignGpuChannels)(updatedFilters); // filter data

  var datasetsToFilter = (0, _lodash["default"])((0, _lodash4["default"])(merged.map(function (f) {
    return f.dataId;
  })));
  var filtered = (0, _filterUtils.applyFiltersToDatasets)(datasetsToFilter, updatedDatasets, updatedFilters, state.layers);
  return _objectSpread(_objectSpread({}, state), {}, {
    filters: updatedFilters,
    datasets: filtered,
    filterToBeMerged: unmerged
  });
}
/**
 * Merge layers from de-serialized state, if no fields or data are loaded
 * save it for later
 *
 * @type {typeof import('./vis-state-merger').mergeLayers}
 */


function mergeLayers(state, layersToMerge) {
  var mergedLayer = [];
  var unmerged = [];
  var datasets = state.datasets;

  if (!Array.isArray(layersToMerge) || !layersToMerge.length) {
    return state;
  }

  layersToMerge.forEach(function (layer) {
    if (datasets[layer.config.dataId]) {
      // datasets are already loaded
      var validateLayer = validateLayerWithData(datasets[layer.config.dataId], layer, state.layerClasses);

      if (validateLayer) {
        mergedLayer.push(validateLayer);
      }
    } else {
      // datasets not yet loaded
      unmerged.push(layer);
    }
  });
  var layers = [].concat((0, _toConsumableArray2["default"])(state.layers), mergedLayer);
  var newLayerOrder = mergedLayer.map(function (_, i) {
    return state.layers.length + i;
  }); // put new layers in front of current layers

  var layerOrder = [].concat((0, _toConsumableArray2["default"])(newLayerOrder), (0, _toConsumableArray2["default"])(state.layerOrder));
  return _objectSpread(_objectSpread({}, state), {}, {
    layers: layers,
    layerOrder: layerOrder,
    layerToBeMerged: unmerged
  });
}
/**
 * Merge interactions with saved config
 *
 * @type {typeof import('./vis-state-merger').mergeInteractions}
 */


function mergeInteractions(state, interactionToBeMerged) {
  var merged = {};
  var unmerged = {};

  if (interactionToBeMerged) {
    Object.keys(interactionToBeMerged).forEach(function (key) {
      if (!state.interactionConfig[key]) {
        return;
      }

      var currentConfig = state.interactionConfig[key].config;

      var _ref = interactionToBeMerged[key] || {},
          enabled = _ref.enabled,
          configSaved = (0, _objectWithoutProperties2["default"])(_ref, ["enabled"]);

      var configToMerge = configSaved;

      if (key === 'tooltip') {
        var _mergeInteractionTool = mergeInteractionTooltipConfig(state, configSaved),
            mergedTooltip = _mergeInteractionTool.mergedTooltip,
            unmergedTooltip = _mergeInteractionTool.unmergedTooltip; // merge new dataset tooltips with original dataset tooltips


        configToMerge = {
          fieldsToShow: _objectSpread(_objectSpread({}, currentConfig.fieldsToShow), mergedTooltip)
        };

        if (Object.keys(unmergedTooltip).length) {
          unmerged.tooltip = {
            fieldsToShow: unmergedTooltip,
            enabled: enabled
          };
        }
      }

      merged[key] = _objectSpread(_objectSpread({}, state.interactionConfig[key]), {}, {
        enabled: enabled
      }, currentConfig ? {
        config: (0, _lodash2["default"])(_objectSpread(_objectSpread({}, currentConfig), configToMerge), Object.keys(currentConfig))
      } : {});
    });
  }

  return _objectSpread(_objectSpread({}, state), {}, {
    interactionConfig: _objectSpread(_objectSpread({}, state.interactionConfig), merged),
    interactionToBeMerged: unmerged
  });
}
/**
 * Merge splitMaps config with current visStete.
 * 1. if current map is split, but splitMap DOESNOT contain maps
 *    : don't merge anything
 * 2. if current map is NOT split, but splitMaps contain maps
 *    : add to splitMaps, and add current layers to splitMaps
 * @type {typeof import('./vis-state-merger').mergeInteractions}
 */


function mergeSplitMaps(state) {
  var splitMaps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var merged = (0, _toConsumableArray2["default"])(state.splitMaps);
  var unmerged = [];
  splitMaps.forEach(function (sm, i) {
    Object.entries(sm.layers).forEach(function (_ref2) {
      var _ref3 = (0, _slicedToArray2["default"])(_ref2, 2),
          id = _ref3[0],
          value = _ref3[1];

      // check if layer exists
      var pushTo = state.layers.find(function (l) {
        return l.id === id;
      }) ? merged : unmerged; // create map panel if current map is not split

      pushTo[i] = pushTo[i] || {
        layers: pushTo === merged ? (0, _splitMapUtils.getInitialMapLayersForSplitMap)(state.layers) : []
      };
      pushTo[i].layers = _objectSpread(_objectSpread({}, pushTo[i].layers), {}, (0, _defineProperty2["default"])({}, id, value));
    });
  });
  return _objectSpread(_objectSpread({}, state), {}, {
    splitMaps: merged,
    splitMapsToBeMerged: unmerged
  });
}
/**
 * Merge interactionConfig.tooltip with saved config,
 * validate fieldsToShow
 *
 * @param {object} state
 * @param {object} tooltipConfig
 * @return {object} - {mergedTooltip: {}, unmergedTooltip: {}}
 */


function mergeInteractionTooltipConfig(state) {
  var tooltipConfig = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var unmergedTooltip = {};
  var mergedTooltip = {};

  if (!tooltipConfig.fieldsToShow || !Object.keys(tooltipConfig.fieldsToShow).length) {
    return {
      mergedTooltip: mergedTooltip,
      unmergedTooltip: unmergedTooltip
    };
  }

  for (var dataId in tooltipConfig.fieldsToShow) {
    if (!state.datasets[dataId]) {
      // is not yet loaded
      unmergedTooltip[dataId] = tooltipConfig.fieldsToShow[dataId];
    } else {
      (function () {
        // if dataset is loaded
        var allFields = state.datasets[dataId].fields.map(function (d) {
          return d.name;
        });
        var foundFieldsToShow = tooltipConfig.fieldsToShow[dataId].filter(function (field) {
          return allFields.includes(field.name);
        });
        mergedTooltip[dataId] = foundFieldsToShow;
      })();
    }
  }

  return {
    mergedTooltip: mergedTooltip,
    unmergedTooltip: unmergedTooltip
  };
}
/**
 * Merge layerBlending with saved
 *
 * @type {typeof import('./vis-state-merger').mergeLayerBlending}
 */


function mergeLayerBlending(state, layerBlending) {
  if (layerBlending && _defaultSettings.LAYER_BLENDINGS[layerBlending]) {
    return _objectSpread(_objectSpread({}, state), {}, {
      layerBlending: layerBlending
    });
  }

  return state;
}
/**
 * Merge animation config
 * @type {typeof import('./vis-state-merger').mergeAnimationConfig}
 */


function mergeAnimationConfig(state, animation) {
  if (animation && animation.currentTime) {
    return _objectSpread(_objectSpread({}, state), {}, {
      animationConfig: _objectSpread(_objectSpread(_objectSpread({}, state.animationConfig), animation), {}, {
        domain: null
      })
    });
  }

  return state;
}
/**
 * Validate saved layer columns with new data,
 * update fieldIdx based on new fields
 *
 * @param {Array<Object>} fields
 * @param {Object} savedCols
 * @param {Object} emptyCols
 * @return {null | Object} - validated columns or null
 */


function validateSavedLayerColumns(fields, savedCols, emptyCols) {
  var colFound = {}; // find actual column fieldIdx, in case it has changed

  var allColFound = Object.keys(emptyCols).every(function (key) {
    var saved = savedCols[key];
    colFound[key] = _objectSpread({}, emptyCols[key]); // TODO: replace with new approach

    var fieldIdx = fields.findIndex(function (_ref4) {
      var name = _ref4.name;
      return name === saved;
    });

    if (fieldIdx > -1) {
      // update found columns
      colFound[key].fieldIdx = fieldIdx;
      colFound[key].value = saved;
      return true;
    } // if col is optional, allow null value


    return emptyCols[key].optional || false;
  });
  return allColFound && colFound;
}
/**
 * Validate saved text label config with new data
 * refer to vis-state-schema.js TextLabelSchemaV1
 *
 * @param {Array<Object>} fields
 * @param {Object} savedTextLabel
 * @return {Object} - validated textlabel
 */


function validateSavedTextLabel(fields, _ref5, savedTextLabel) {
  var _ref6 = (0, _slicedToArray2["default"])(_ref5, 1),
      layerTextLabel = _ref6[0];

  var savedTextLabels = Array.isArray(savedTextLabel) ? savedTextLabel : [savedTextLabel]; // validate field

  return savedTextLabels.map(function (textLabel) {
    var field = textLabel.field ? fields.find(function (fd) {
      return Object.keys(textLabel.field).every(function (key) {
        return textLabel.field[key] === fd[key];
      });
    }) : null;
    return Object.keys(layerTextLabel).reduce(function (accu, key) {
      return _objectSpread(_objectSpread({}, accu), {}, (0, _defineProperty2["default"])({}, key, key === 'field' ? field : textLabel[key] || layerTextLabel[key]));
    }, {});
  });
}
/**
 * Validate saved visual channels config with new data,
 * refer to vis-state-schema.js VisualChannelSchemaV1
 *
 * @param {Array<Object>} fields
 * @param {Object} newLayer
 * @param {Object} savedLayer
 * @return {Object} - newLayer
 */


function validateSavedVisualChannels(fields, newLayer, savedLayer) {
  Object.values(newLayer.visualChannels).forEach(function (_ref7) {
    var field = _ref7.field,
        scale = _ref7.scale,
        key = _ref7.key;
    var foundField;

    if (savedLayer.config[field]) {
      foundField = fields.find(function (fd) {
        return Object.keys(savedLayer.config[field]).every(function (prop) {
          return savedLayer.config[field][prop] === fd[prop];
        });
      });
    }

    var foundChannel = _objectSpread(_objectSpread({}, foundField ? (0, _defineProperty2["default"])({}, field, foundField) : {}), savedLayer.config[scale] ? (0, _defineProperty2["default"])({}, scale, savedLayer.config[scale]) : {});

    if (Object.keys(foundChannel).length) {
      newLayer.updateLayerConfig(foundChannel);
      newLayer.validateVisualChannel(key);
    }
  });
  return newLayer;
}
/**
 * Validate saved layer config with new data,
 * update fieldIdx based on new fields
 * @param {object} dataset
 * @param {Array<Object>} dataset.fields
 * @param {string} dataset.id
 * @param {Object} savedLayer
 * @param {Object} layerClasses
 * @return {null | Object} - validated layer or null
 */


function validateLayerWithData(_ref10, savedLayer, layerClasses) {
  var fields = _ref10.fields,
      dataId = _ref10.id;
  var type = savedLayer.type; // layer doesnt have a valid type

  if (!layerClasses.hasOwnProperty(type) || !savedLayer.config || !savedLayer.config.columns) {
    return null;
  }

  var newLayer = new layerClasses[type]({
    id: savedLayer.id,
    dataId: dataId,
    label: savedLayer.config.label,
    color: savedLayer.config.color,
    isVisible: savedLayer.config.isVisible,
    hidden: savedLayer.config.hidden
  }); // find column fieldIdx

  var columns = validateSavedLayerColumns(fields, savedLayer.config.columns, newLayer.getLayerColumns());

  if (!columns) {
    return null;
  } // visual channel field is saved to be {name, type}
  // find visual channel field by matching both name and type
  // refer to vis-state-schema.js VisualChannelSchemaV1


  newLayer = validateSavedVisualChannels(fields, newLayer, savedLayer);
  var textLabel = savedLayer.config.textLabel && newLayer.config.textLabel ? validateSavedTextLabel(fields, newLayer.config.textLabel, savedLayer.config.textLabel) : newLayer.config.textLabel; // copy visConfig over to emptyLayer to make sure it has all the props

  var visConfig = newLayer.copyLayerConfig(newLayer.config.visConfig, savedLayer.config.visConfig || {}, {
    shallowCopy: ['colorRange', 'strokeColorRange']
  });
  newLayer.updateLayerConfig({
    columns: columns,
    visConfig: visConfig,
    textLabel: textLabel
  });
  return newLayer;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWR1Y2Vycy92aXMtc3RhdGUtbWVyZ2VyLmpzIl0sIm5hbWVzIjpbIm1lcmdlRmlsdGVycyIsInN0YXRlIiwiZmlsdGVyc1RvTWVyZ2UiLCJtZXJnZWQiLCJ1bm1lcmdlZCIsImRhdGFzZXRzIiwidXBkYXRlZERhdGFzZXRzIiwiQXJyYXkiLCJpc0FycmF5IiwibGVuZ3RoIiwiZm9yRWFjaCIsImZpbHRlciIsImRhdGFzZXRJZHMiLCJkYXRhSWQiLCJldmVyeSIsImQiLCJyZWR1Y2UiLCJhY2MiLCJkYXRhc2V0SWQiLCJkYXRhc2V0IiwibGF5ZXJzIiwibCIsImNvbmZpZyIsImlkIiwiYXVnbWVudGVkRGF0YXNldHMiLCJ1cGRhdGVkRmlsdGVyIiwidXBkYXRlZERhdGFzZXQiLCJhcHBseVRvRGF0YXNldHMiLCJ2YWxpZGF0ZWRGaWx0ZXIiLCJwdXNoIiwidXBkYXRlZEZpbHRlcnMiLCJmaWx0ZXJzIiwiZGF0YXNldHNUb0ZpbHRlciIsIm1hcCIsImYiLCJmaWx0ZXJlZCIsImZpbHRlclRvQmVNZXJnZWQiLCJtZXJnZUxheWVycyIsImxheWVyc1RvTWVyZ2UiLCJtZXJnZWRMYXllciIsImxheWVyIiwidmFsaWRhdGVMYXllciIsInZhbGlkYXRlTGF5ZXJXaXRoRGF0YSIsImxheWVyQ2xhc3NlcyIsIm5ld0xheWVyT3JkZXIiLCJfIiwiaSIsImxheWVyT3JkZXIiLCJsYXllclRvQmVNZXJnZWQiLCJtZXJnZUludGVyYWN0aW9ucyIsImludGVyYWN0aW9uVG9CZU1lcmdlZCIsIk9iamVjdCIsImtleXMiLCJrZXkiLCJpbnRlcmFjdGlvbkNvbmZpZyIsImN1cnJlbnRDb25maWciLCJlbmFibGVkIiwiY29uZmlnU2F2ZWQiLCJjb25maWdUb01lcmdlIiwibWVyZ2VJbnRlcmFjdGlvblRvb2x0aXBDb25maWciLCJtZXJnZWRUb29sdGlwIiwidW5tZXJnZWRUb29sdGlwIiwiZmllbGRzVG9TaG93IiwidG9vbHRpcCIsIm1lcmdlU3BsaXRNYXBzIiwic3BsaXRNYXBzIiwic20iLCJlbnRyaWVzIiwidmFsdWUiLCJwdXNoVG8iLCJmaW5kIiwic3BsaXRNYXBzVG9CZU1lcmdlZCIsInRvb2x0aXBDb25maWciLCJhbGxGaWVsZHMiLCJmaWVsZHMiLCJuYW1lIiwiZm91bmRGaWVsZHNUb1Nob3ciLCJmaWVsZCIsImluY2x1ZGVzIiwibWVyZ2VMYXllckJsZW5kaW5nIiwibGF5ZXJCbGVuZGluZyIsIkxBWUVSX0JMRU5ESU5HUyIsIm1lcmdlQW5pbWF0aW9uQ29uZmlnIiwiYW5pbWF0aW9uIiwiY3VycmVudFRpbWUiLCJhbmltYXRpb25Db25maWciLCJkb21haW4iLCJ2YWxpZGF0ZVNhdmVkTGF5ZXJDb2x1bW5zIiwic2F2ZWRDb2xzIiwiZW1wdHlDb2xzIiwiY29sRm91bmQiLCJhbGxDb2xGb3VuZCIsInNhdmVkIiwiZmllbGRJZHgiLCJmaW5kSW5kZXgiLCJvcHRpb25hbCIsInZhbGlkYXRlU2F2ZWRUZXh0TGFiZWwiLCJzYXZlZFRleHRMYWJlbCIsImxheWVyVGV4dExhYmVsIiwic2F2ZWRUZXh0TGFiZWxzIiwidGV4dExhYmVsIiwiZmQiLCJhY2N1IiwidmFsaWRhdGVTYXZlZFZpc3VhbENoYW5uZWxzIiwibmV3TGF5ZXIiLCJzYXZlZExheWVyIiwidmFsdWVzIiwidmlzdWFsQ2hhbm5lbHMiLCJzY2FsZSIsImZvdW5kRmllbGQiLCJwcm9wIiwiZm91bmRDaGFubmVsIiwidXBkYXRlTGF5ZXJDb25maWciLCJ2YWxpZGF0ZVZpc3VhbENoYW5uZWwiLCJ0eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjb2x1bW5zIiwibGFiZWwiLCJjb2xvciIsImlzVmlzaWJsZSIsImhpZGRlbiIsImdldExheWVyQ29sdW1ucyIsInZpc0NvbmZpZyIsImNvcHlMYXllckNvbmZpZyIsInNoYWxsb3dDb3B5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBTUE7O0FBQ0E7O0FB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QUFDUSxpQkFBVCxDQUEyQjtBQUN6QkksSUFBQUEsT0FBTyxFQUFQQSxPQUR5QjtBQUV6Qk0sSUFBQUEsU0FBUyxFQUFUQSxTQUZ5QjtBQUd6QnRCLElBQUFBLFNBQVMsRUFBVEE7QUFIeUIsR0FBM0I7QUFNQSxTQUFPSSxRQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgdW5pcSBmcm9tICdsb2Rhc2gudW5pcSc7XHJcbmltcG9ydCBwaWNrIGZyb20gJ2xvZGFzaC5waWNrJztcclxuaW1wb3J0IGlzRXF1YWwgZnJvbSAnbG9kYXNoLmlzZXF1YWwnO1xyXG5pbXBvcnQgZmxhdHRlbkRlZXAgZnJvbSAnbG9kYXNoLmZsYXR0ZW5kZWVwJztcclxuaW1wb3J0IHt0b0FycmF5fSBmcm9tICd1dGlscy91dGlscyc7XHJcblxyXG5pbXBvcnQge1xyXG4gIGFwcGx5RmlsdGVyc1RvRGF0YXNldHMsXHJcbiAgbWVyZ2VGaWx0ZXJEb21haW5TdGVwLFxyXG4gIHZhbGlkYXRlRmlsdGVyV2l0aERhdGFcclxufSBmcm9tICd1dGlscy9maWx0ZXItdXRpbHMnO1xyXG5cclxuaW1wb3J0IHtnZXRJbml0aWFsTWFwTGF5ZXJzRm9yU3BsaXRNYXB9IGZyb20gJ3V0aWxzL3NwbGl0LW1hcC11dGlscyc7XHJcbmltcG9ydCB7cmVzZXRGaWx0ZXJHcHVNb2RlLCBhc3NpZ25HcHVDaGFubmVsc30gZnJvbSAndXRpbHMvZ3B1LWZpbHRlci11dGlscyc7XHJcblxyXG5pbXBvcnQge0xBWUVSX0JMRU5ESU5HU30gZnJvbSAnY29uc3RhbnRzL2RlZmF1bHQtc2V0dGluZ3MnO1xyXG5cclxuLyoqXHJcbiAqIE1lcmdlIGxvYWRlZCBmaWx0ZXJzIHdpdGggY3VycmVudCBzdGF0ZSwgaWYgbm8gZmllbGRzIG9yIGRhdGEgYXJlIGxvYWRlZFxyXG4gKiBzYXZlIGl0IGZvciBsYXRlclxyXG4gKlxyXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi92aXMtc3RhdGUtbWVyZ2VyJykubWVyZ2VGaWx0ZXJzfVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlRmlsdGVycyhzdGF0ZSwgZmlsdGVyc1RvTWVyZ2UpIHtcclxuICBjb25zdCBtZXJnZWQgPSBbXTtcclxuICBjb25zdCB1bm1lcmdlZCA9IFtdO1xyXG4gIGNvbnN0IHtkYXRhc2V0c30gPSBzdGF0ZTtcclxuICBsZXQgdXBkYXRlZERhdGFzZXRzID0gZGF0YXNldHM7XHJcblxyXG4gIGlmICghQXJyYXkuaXNBcnJheShmaWx0ZXJzVG9NZXJnZSkgfHwgIWZpbHRlcnNUb01lcmdlLmxlbmd0aCkge1xyXG4gICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxuXHJcbiAgLy8gbWVyZ2UgZmlsdGVyc1xyXG4gIGZpbHRlcnNUb01lcmdlLmZvckVhY2goZmlsdGVyID0+IHtcclxuICAgIC8vIHdlIGNhbiBvbmx5IGxvb2sgZm9yIGRhdGFzZXRzIGRlZmluZSBpbiB0aGUgZmlsdGVyIGRhdGFJZFxyXG4gICAgY29uc3QgZGF0YXNldElkcyA9IHRvQXJyYXkoZmlsdGVyLmRhdGFJZCk7XHJcblxyXG4gICAgLy8gd2UgY2FuIG1lcmdlIGEgZmlsdGVyIG9ubHkgaWYgYWxsIGRhdGFzZXRzIGluIGZpbHRlci5kYXRhSWQgYXJlIGxvYWRlZFxyXG4gICAgaWYgKGRhdGFzZXRJZHMuZXZlcnkoZCA9PiBkYXRhc2V0c1tkXSkpIHtcclxuICAgICAgLy8gYWxsIGRhdGFzZXRJZHMgaW4gZmlsdGVyIG11c3QgYmUgcHJlc2VudCB0aGUgc3RhdGUgZGF0YXNldHNcclxuICAgICAgY29uc3Qge2ZpbHRlcjogdmFsaWRhdGVkRmlsdGVyLCBhcHBseVRvRGF0YXNldHMsIGF1Z21lbnRlZERhdGFzZXRzfSA9IGRhdGFzZXRJZHMucmVkdWNlKFxyXG4gICAgICAgIChhY2MsIGRhdGFzZXRJZCkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgZGF0YXNldCA9IHVwZGF0ZWREYXRhc2V0c1tkYXRhc2V0SWRdO1xyXG4gICAgICAgICAgY29uc3QgbGF5ZXJzID0gc3RhdGUubGF5ZXJzLmZpbHRlcihsID0+IGwuY29uZmlnLmRhdGFJZCA9PT0gZGF0YXNldC5pZCk7XHJcbiAgICAgICAgICBjb25zdCB7ZmlsdGVyOiB1cGRhdGVkRmlsdGVyLCBkYXRhc2V0OiB1cGRhdGVkRGF0YXNldH0gPSB2YWxpZGF0ZUZpbHRlcldpdGhEYXRhKFxyXG4gICAgICAgICAgICBhY2MuYXVnbWVudGVkRGF0YXNldHNbZGF0YXNldElkXSB8fCBkYXRhc2V0LFxyXG4gICAgICAgICAgICBmaWx0ZXIsXHJcbiAgICAgICAgICAgIGxheWVyc1xyXG4gICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICBpZiAodXBkYXRlZEZpbHRlcikge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgIC4uLmFjYyxcclxuICAgICAgICAgICAgICAvLyBtZXJnZSBmaWx0ZXIgcHJvcHNcclxuICAgICAgICAgICAgICBmaWx0ZXI6IGFjYy5maWx0ZXJcclxuICAgICAgICAgICAgICAgID8ge1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLmFjYy5maWx0ZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgLi4ubWVyZ2VGaWx0ZXJEb21haW5TdGVwKGFjYywgdXBkYXRlZEZpbHRlcilcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgOiB1cGRhdGVkRmlsdGVyLFxyXG5cclxuICAgICAgICAgICAgICBhcHBseVRvRGF0YXNldHM6IFsuLi5hY2MuYXBwbHlUb0RhdGFzZXRzLCBkYXRhc2V0SWRdLFxyXG5cclxuICAgICAgICAgICAgICBhdWdtZW50ZWREYXRhc2V0czoge1xyXG4gICAgICAgICAgICAgICAgLi4uYWNjLmF1Z21lbnRlZERhdGFzZXRzLFxyXG4gICAgICAgICAgICAgICAgW2RhdGFzZXRJZF06IHVwZGF0ZWREYXRhc2V0XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHJldHVybiBhY2M7XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBmaWx0ZXI6IG51bGwsXHJcbiAgICAgICAgICBhcHBseVRvRGF0YXNldHM6IFtdLFxyXG4gICAgICAgICAgYXVnbWVudGVkRGF0YXNldHM6IHt9XHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG5cclxuICAgICAgaWYgKHZhbGlkYXRlZEZpbHRlciAmJiBpc0VxdWFsKGRhdGFzZXRJZHMsIGFwcGx5VG9EYXRhc2V0cykpIHtcclxuICAgICAgICBtZXJnZWQucHVzaCh2YWxpZGF0ZWRGaWx0ZXIpO1xyXG4gICAgICAgIHVwZGF0ZWREYXRhc2V0cyA9IHtcclxuICAgICAgICAgIC4uLnVwZGF0ZWREYXRhc2V0cyxcclxuICAgICAgICAgIC4uLmF1Z21lbnRlZERhdGFzZXRzXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdW5tZXJnZWQucHVzaChmaWx0ZXIpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICAvLyBtZXJnZSBmaWx0ZXIgd2l0aCBleGlzdGluZ1xyXG4gIGxldCB1cGRhdGVkRmlsdGVycyA9IFsuLi4oc3RhdGUuZmlsdGVycyB8fCBbXSksIC4uLm1lcmdlZF07XHJcbiAgdXBkYXRlZEZpbHRlcnMgPSByZXNldEZpbHRlckdwdU1vZGUodXBkYXRlZEZpbHRlcnMpO1xyXG4gIHVwZGF0ZWRGaWx0ZXJzID0gYXNzaWduR3B1Q2hhbm5lbHModXBkYXRlZEZpbHRlcnMpO1xyXG4gIC8vIGZpbHRlciBkYXRhXHJcbiAgY29uc3QgZGF0YXNldHNUb0ZpbHRlciA9IHVuaXEoZmxhdHRlbkRlZXAobWVyZ2VkLm1hcChmID0+IGYuZGF0YUlkKSkpO1xyXG5cclxuICBjb25zdCBmaWx0ZXJlZCA9IGFwcGx5RmlsdGVyc1RvRGF0YXNldHMoXHJcbiAgICBkYXRhc2V0c1RvRmlsdGVyLFxyXG4gICAgdXBkYXRlZERhdGFzZXRzLFxyXG4gICAgdXBkYXRlZEZpbHRlcnMsXHJcbiAgICBzdGF0ZS5sYXllcnNcclxuICApO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgLi4uc3RhdGUsXHJcbiAgICBmaWx0ZXJzOiB1cGRhdGVkRmlsdGVycyxcclxuICAgIGRhdGFzZXRzOiBmaWx0ZXJlZCxcclxuICAgIGZpbHRlclRvQmVNZXJnZWQ6IHVubWVyZ2VkXHJcbiAgfTtcclxufVxyXG5cclxuLyoqXHJcbiAqIE1lcmdlIGxheWVycyBmcm9tIGRlLXNlcmlhbGl6ZWQgc3RhdGUsIGlmIG5vIGZpZWxkcyBvciBkYXRhIGFyZSBsb2FkZWRcclxuICogc2F2ZSBpdCBmb3IgbGF0ZXJcclxuICpcclxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdmlzLXN0YXRlLW1lcmdlcicpLm1lcmdlTGF5ZXJzfVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlTGF5ZXJzKHN0YXRlLCBsYXllcnNUb01lcmdlKSB7XHJcbiAgY29uc3QgbWVyZ2VkTGF5ZXIgPSBbXTtcclxuICBjb25zdCB1bm1lcmdlZCA9IFtdO1xyXG5cclxuICBjb25zdCB7ZGF0YXNldHN9ID0gc3RhdGU7XHJcblxyXG4gIGlmICghQXJyYXkuaXNBcnJheShsYXllcnNUb01lcmdlKSB8fCAhbGF5ZXJzVG9NZXJnZS5sZW5ndGgpIHtcclxuICAgIHJldHVybiBzdGF0ZTtcclxuICB9XHJcblxyXG4gIGxheWVyc1RvTWVyZ2UuZm9yRWFjaChsYXllciA9PiB7XHJcbiAgICBpZiAoZGF0YXNldHNbbGF5ZXIuY29uZmlnLmRhdGFJZF0pIHtcclxuICAgICAgLy8gZGF0YXNldHMgYXJlIGFscmVhZHkgbG9hZGVkXHJcbiAgICAgIGNvbnN0IHZhbGlkYXRlTGF5ZXIgPSB2YWxpZGF0ZUxheWVyV2l0aERhdGEoXHJcbiAgICAgICAgZGF0YXNldHNbbGF5ZXIuY29uZmlnLmRhdGFJZF0sXHJcbiAgICAgICAgbGF5ZXIsXHJcbiAgICAgICAgc3RhdGUubGF5ZXJDbGFzc2VzXHJcbiAgICAgICk7XHJcblxyXG4gICAgICBpZiAodmFsaWRhdGVMYXllcikge1xyXG4gICAgICAgIG1lcmdlZExheWVyLnB1c2godmFsaWRhdGVMYXllcik7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIGRhdGFzZXRzIG5vdCB5ZXQgbG9hZGVkXHJcbiAgICAgIHVubWVyZ2VkLnB1c2gobGF5ZXIpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBsYXllcnMgPSBbLi4uc3RhdGUubGF5ZXJzLCAuLi5tZXJnZWRMYXllcl07XHJcbiAgY29uc3QgbmV3TGF5ZXJPcmRlciA9IG1lcmdlZExheWVyLm1hcCgoXywgaSkgPT4gc3RhdGUubGF5ZXJzLmxlbmd0aCArIGkpO1xyXG5cclxuICAvLyBwdXQgbmV3IGxheWVycyBpbiBmcm9udCBvZiBjdXJyZW50IGxheWVyc1xyXG4gIGNvbnN0IGxheWVyT3JkZXIgPSBbLi4ubmV3TGF5ZXJPcmRlciwgLi4uc3RhdGUubGF5ZXJPcmRlcl07XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICAuLi5zdGF0ZSxcclxuICAgIGxheWVycyxcclxuICAgIGxheWVyT3JkZXIsXHJcbiAgICBsYXllclRvQmVNZXJnZWQ6IHVubWVyZ2VkXHJcbiAgfTtcclxufVxyXG5cclxuLyoqXHJcbiAqIE1lcmdlIGludGVyYWN0aW9ucyB3aXRoIHNhdmVkIGNvbmZpZ1xyXG4gKlxyXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi92aXMtc3RhdGUtbWVyZ2VyJykubWVyZ2VJbnRlcmFjdGlvbnN9XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VJbnRlcmFjdGlvbnMoc3RhdGUsIGludGVyYWN0aW9uVG9CZU1lcmdlZCkge1xyXG4gIGNvbnN0IG1lcmdlZCA9IHt9O1xyXG4gIGNvbnN0IHVubWVyZ2VkID0ge307XHJcblxyXG4gIGlmIChpbnRlcmFjdGlvblRvQmVNZXJnZWQpIHtcclxuICAgIE9iamVjdC5rZXlzKGludGVyYWN0aW9uVG9CZU1lcmdlZCkuZm9yRWFjaChrZXkgPT4ge1xyXG4gICAgICBpZiAoIXN0YXRlLmludGVyYWN0aW9uQ29uZmlnW2tleV0pIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IGN1cnJlbnRDb25maWcgPSBzdGF0ZS5pbnRlcmFjdGlvbkNvbmZpZ1trZXldLmNvbmZpZztcclxuXHJcbiAgICAgIGNvbnN0IHtlbmFibGVkLCAuLi5jb25maWdTYXZlZH0gPSBpbnRlcmFjdGlvblRvQmVNZXJnZWRba2V5XSB8fCB7fTtcclxuICAgICAgbGV0IGNvbmZpZ1RvTWVyZ2UgPSBjb25maWdTYXZlZDtcclxuXHJcbiAgICAgIGlmIChrZXkgPT09ICd0b29sdGlwJykge1xyXG4gICAgICAgIGNvbnN0IHttZXJnZWRUb29sdGlwLCB1bm1lcmdlZFRvb2x0aXB9ID0gbWVyZ2VJbnRlcmFjdGlvblRvb2x0aXBDb25maWcoc3RhdGUsIGNvbmZpZ1NhdmVkKTtcclxuXHJcbiAgICAgICAgLy8gbWVyZ2UgbmV3IGRhdGFzZXQgdG9vbHRpcHMgd2l0aCBvcmlnaW5hbCBkYXRhc2V0IHRvb2x0aXBzXHJcbiAgICAgICAgY29uZmlnVG9NZXJnZSA9IHtcclxuICAgICAgICAgIGZpZWxkc1RvU2hvdzoge1xyXG4gICAgICAgICAgICAuLi5jdXJyZW50Q29uZmlnLmZpZWxkc1RvU2hvdyxcclxuICAgICAgICAgICAgLi4ubWVyZ2VkVG9vbHRpcFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGlmIChPYmplY3Qua2V5cyh1bm1lcmdlZFRvb2x0aXApLmxlbmd0aCkge1xyXG4gICAgICAgICAgdW5tZXJnZWQudG9vbHRpcCA9IHtmaWVsZHNUb1Nob3c6IHVubWVyZ2VkVG9vbHRpcCwgZW5hYmxlZH07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBtZXJnZWRba2V5XSA9IHtcclxuICAgICAgICAuLi5zdGF0ZS5pbnRlcmFjdGlvbkNvbmZpZ1trZXldLFxyXG4gICAgICAgIGVuYWJsZWQsXHJcbiAgICAgICAgLi4uKGN1cnJlbnRDb25maWdcclxuICAgICAgICAgID8ge1xyXG4gICAgICAgICAgICAgIGNvbmZpZzogcGljayhcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgLi4uY3VycmVudENvbmZpZyxcclxuICAgICAgICAgICAgICAgICAgLi4uY29uZmlnVG9NZXJnZVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKGN1cnJlbnRDb25maWcpXHJcbiAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICA6IHt9KVxyXG4gICAgICB9O1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgLi4uc3RhdGUsXHJcbiAgICBpbnRlcmFjdGlvbkNvbmZpZzoge1xyXG4gICAgICAuLi5zdGF0ZS5pbnRlcmFjdGlvbkNvbmZpZyxcclxuICAgICAgLi4ubWVyZ2VkXHJcbiAgICB9LFxyXG4gICAgaW50ZXJhY3Rpb25Ub0JlTWVyZ2VkOiB1bm1lcmdlZFxyXG4gIH07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBNZXJnZSBzcGxpdE1hcHMgY29uZmlnIHdpdGggY3VycmVudCB2aXNTdGV0ZS5cclxuICogMS4gaWYgY3VycmVudCBtYXAgaXMgc3BsaXQsIGJ1dCBzcGxpdE1hcCBET0VTTk9UIGNvbnRhaW4gbWFwc1xyXG4gKiAgICA6IGRvbid0IG1lcmdlIGFueXRoaW5nXHJcbiAqIDIuIGlmIGN1cnJlbnQgbWFwIGlzIE5PVCBzcGxpdCwgYnV0IHNwbGl0TWFwcyBjb250YWluIG1hcHNcclxuICogICAgOiBhZGQgdG8gc3BsaXRNYXBzLCBhbmQgYWRkIGN1cnJlbnQgbGF5ZXJzIHRvIHNwbGl0TWFwc1xyXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi92aXMtc3RhdGUtbWVyZ2VyJykubWVyZ2VJbnRlcmFjdGlvbnN9XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VTcGxpdE1hcHMoc3RhdGUsIHNwbGl0TWFwcyA9IFtdKSB7XHJcbiAgY29uc3QgbWVyZ2VkID0gWy4uLnN0YXRlLnNwbGl0TWFwc107XHJcbiAgY29uc3QgdW5tZXJnZWQgPSBbXTtcclxuICBzcGxpdE1hcHMuZm9yRWFjaCgoc20sIGkpID0+IHtcclxuICAgIE9iamVjdC5lbnRyaWVzKHNtLmxheWVycykuZm9yRWFjaCgoW2lkLCB2YWx1ZV0pID0+IHtcclxuICAgICAgLy8gY2hlY2sgaWYgbGF5ZXIgZXhpc3RzXHJcbiAgICAgIGNvbnN0IHB1c2hUbyA9IHN0YXRlLmxheWVycy5maW5kKGwgPT4gbC5pZCA9PT0gaWQpID8gbWVyZ2VkIDogdW5tZXJnZWQ7XHJcblxyXG4gICAgICAvLyBjcmVhdGUgbWFwIHBhbmVsIGlmIGN1cnJlbnQgbWFwIGlzIG5vdCBzcGxpdFxyXG4gICAgICBwdXNoVG9baV0gPSBwdXNoVG9baV0gfHwge1xyXG4gICAgICAgIGxheWVyczogcHVzaFRvID09PSBtZXJnZWQgPyBnZXRJbml0aWFsTWFwTGF5ZXJzRm9yU3BsaXRNYXAoc3RhdGUubGF5ZXJzKSA6IFtdXHJcbiAgICAgIH07XHJcbiAgICAgIHB1c2hUb1tpXS5sYXllcnMgPSB7XHJcbiAgICAgICAgLi4ucHVzaFRvW2ldLmxheWVycyxcclxuICAgICAgICBbaWRdOiB2YWx1ZVxyXG4gICAgICB9O1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICAuLi5zdGF0ZSxcclxuICAgIHNwbGl0TWFwczogbWVyZ2VkLFxyXG4gICAgc3BsaXRNYXBzVG9CZU1lcmdlZDogdW5tZXJnZWRcclxuICB9O1xyXG59XHJcblxyXG4vKipcclxuICogTWVyZ2UgaW50ZXJhY3Rpb25Db25maWcudG9vbHRpcCB3aXRoIHNhdmVkIGNvbmZpZyxcclxuICogdmFsaWRhdGUgZmllbGRzVG9TaG93XHJcbiAqXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBzdGF0ZVxyXG4gKiBAcGFyYW0ge29iamVjdH0gdG9vbHRpcENvbmZpZ1xyXG4gKiBAcmV0dXJuIHtvYmplY3R9IC0ge21lcmdlZFRvb2x0aXA6IHt9LCB1bm1lcmdlZFRvb2x0aXA6IHt9fVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlSW50ZXJhY3Rpb25Ub29sdGlwQ29uZmlnKHN0YXRlLCB0b29sdGlwQ29uZmlnID0ge30pIHtcclxuICBjb25zdCB1bm1lcmdlZFRvb2x0aXAgPSB7fTtcclxuICBjb25zdCBtZXJnZWRUb29sdGlwID0ge307XHJcblxyXG4gIGlmICghdG9vbHRpcENvbmZpZy5maWVsZHNUb1Nob3cgfHwgIU9iamVjdC5rZXlzKHRvb2x0aXBDb25maWcuZmllbGRzVG9TaG93KS5sZW5ndGgpIHtcclxuICAgIHJldHVybiB7bWVyZ2VkVG9vbHRpcCwgdW5tZXJnZWRUb29sdGlwfTtcclxuICB9XHJcblxyXG4gIGZvciAoY29uc3QgZGF0YUlkIGluIHRvb2x0aXBDb25maWcuZmllbGRzVG9TaG93KSB7XHJcbiAgICBpZiAoIXN0YXRlLmRhdGFzZXRzW2RhdGFJZF0pIHtcclxuICAgICAgLy8gaXMgbm90IHlldCBsb2FkZWRcclxuICAgICAgdW5tZXJnZWRUb29sdGlwW2RhdGFJZF0gPSB0b29sdGlwQ29uZmlnLmZpZWxkc1RvU2hvd1tkYXRhSWRdO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gaWYgZGF0YXNldCBpcyBsb2FkZWRcclxuICAgICAgY29uc3QgYWxsRmllbGRzID0gc3RhdGUuZGF0YXNldHNbZGF0YUlkXS5maWVsZHMubWFwKGQgPT4gZC5uYW1lKTtcclxuICAgICAgY29uc3QgZm91bmRGaWVsZHNUb1Nob3cgPSB0b29sdGlwQ29uZmlnLmZpZWxkc1RvU2hvd1tkYXRhSWRdLmZpbHRlcihmaWVsZCA9PlxyXG4gICAgICAgIGFsbEZpZWxkcy5pbmNsdWRlcyhmaWVsZC5uYW1lKVxyXG4gICAgICApO1xyXG5cclxuICAgICAgbWVyZ2VkVG9vbHRpcFtkYXRhSWRdID0gZm91bmRGaWVsZHNUb1Nob3c7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge21lcmdlZFRvb2x0aXAsIHVubWVyZ2VkVG9vbHRpcH07XHJcbn1cclxuLyoqXHJcbiAqIE1lcmdlIGxheWVyQmxlbmRpbmcgd2l0aCBzYXZlZFxyXG4gKlxyXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi92aXMtc3RhdGUtbWVyZ2VyJykubWVyZ2VMYXllckJsZW5kaW5nfVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlTGF5ZXJCbGVuZGluZyhzdGF0ZSwgbGF5ZXJCbGVuZGluZykge1xyXG4gIGlmIChsYXllckJsZW5kaW5nICYmIExBWUVSX0JMRU5ESU5HU1tsYXllckJsZW5kaW5nXSkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgLi4uc3RhdGUsXHJcbiAgICAgIGxheWVyQmxlbmRpbmdcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICByZXR1cm4gc3RhdGU7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBNZXJnZSBhbmltYXRpb24gY29uZmlnXHJcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL3Zpcy1zdGF0ZS1tZXJnZXInKS5tZXJnZUFuaW1hdGlvbkNvbmZpZ31cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBtZXJnZUFuaW1hdGlvbkNvbmZpZyhzdGF0ZSwgYW5pbWF0aW9uKSB7XHJcbiAgaWYgKGFuaW1hdGlvbiAmJiBhbmltYXRpb24uY3VycmVudFRpbWUpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIC4uLnN0YXRlLFxyXG4gICAgICBhbmltYXRpb25Db25maWc6IHtcclxuICAgICAgICAuLi5zdGF0ZS5hbmltYXRpb25Db25maWcsXHJcbiAgICAgICAgLi4uYW5pbWF0aW9uLFxyXG4gICAgICAgIGRvbWFpbjogbnVsbFxyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHN0YXRlO1xyXG59XHJcblxyXG4vKipcclxuICogVmFsaWRhdGUgc2F2ZWQgbGF5ZXIgY29sdW1ucyB3aXRoIG5ldyBkYXRhLFxyXG4gKiB1cGRhdGUgZmllbGRJZHggYmFzZWQgb24gbmV3IGZpZWxkc1xyXG4gKlxyXG4gKiBAcGFyYW0ge0FycmF5PE9iamVjdD59IGZpZWxkc1xyXG4gKiBAcGFyYW0ge09iamVjdH0gc2F2ZWRDb2xzXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBlbXB0eUNvbHNcclxuICogQHJldHVybiB7bnVsbCB8IE9iamVjdH0gLSB2YWxpZGF0ZWQgY29sdW1ucyBvciBudWxsXHJcbiAqL1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlU2F2ZWRMYXllckNvbHVtbnMoZmllbGRzLCBzYXZlZENvbHMsIGVtcHR5Q29scykge1xyXG4gIGNvbnN0IGNvbEZvdW5kID0ge307XHJcbiAgLy8gZmluZCBhY3R1YWwgY29sdW1uIGZpZWxkSWR4LCBpbiBjYXNlIGl0IGhhcyBjaGFuZ2VkXHJcbiAgY29uc3QgYWxsQ29sRm91bmQgPSBPYmplY3Qua2V5cyhlbXB0eUNvbHMpLmV2ZXJ5KGtleSA9PiB7XHJcbiAgICBjb25zdCBzYXZlZCA9IHNhdmVkQ29sc1trZXldO1xyXG4gICAgY29sRm91bmRba2V5XSA9IHsuLi5lbXB0eUNvbHNba2V5XX07XHJcblxyXG4gICAgLy8gVE9ETzogcmVwbGFjZSB3aXRoIG5ldyBhcHByb2FjaFxyXG4gICAgY29uc3QgZmllbGRJZHggPSBmaWVsZHMuZmluZEluZGV4KCh7bmFtZX0pID0+IG5hbWUgPT09IHNhdmVkKTtcclxuXHJcbiAgICBpZiAoZmllbGRJZHggPiAtMSkge1xyXG4gICAgICAvLyB1cGRhdGUgZm91bmQgY29sdW1uc1xyXG4gICAgICBjb2xGb3VuZFtrZXldLmZpZWxkSWR4ID0gZmllbGRJZHg7XHJcbiAgICAgIGNvbEZvdW5kW2tleV0udmFsdWUgPSBzYXZlZDtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gaWYgY29sIGlzIG9wdGlvbmFsLCBhbGxvdyBudWxsIHZhbHVlXHJcbiAgICByZXR1cm4gZW1wdHlDb2xzW2tleV0ub3B0aW9uYWwgfHwgZmFsc2U7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBhbGxDb2xGb3VuZCAmJiBjb2xGb3VuZDtcclxufVxyXG5cclxuLyoqXHJcbiAqIFZhbGlkYXRlIHNhdmVkIHRleHQgbGFiZWwgY29uZmlnIHdpdGggbmV3IGRhdGFcclxuICogcmVmZXIgdG8gdmlzLXN0YXRlLXNjaGVtYS5qcyBUZXh0TGFiZWxTY2hlbWFWMVxyXG4gKlxyXG4gKiBAcGFyYW0ge0FycmF5PE9iamVjdD59IGZpZWxkc1xyXG4gKiBAcGFyYW0ge09iamVjdH0gc2F2ZWRUZXh0TGFiZWxcclxuICogQHJldHVybiB7T2JqZWN0fSAtIHZhbGlkYXRlZCB0ZXh0bGFiZWxcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZVNhdmVkVGV4dExhYmVsKGZpZWxkcywgW2xheWVyVGV4dExhYmVsXSwgc2F2ZWRUZXh0TGFiZWwpIHtcclxuICBjb25zdCBzYXZlZFRleHRMYWJlbHMgPSBBcnJheS5pc0FycmF5KHNhdmVkVGV4dExhYmVsKSA/IHNhdmVkVGV4dExhYmVsIDogW3NhdmVkVGV4dExhYmVsXTtcclxuXHJcbiAgLy8gdmFsaWRhdGUgZmllbGRcclxuICByZXR1cm4gc2F2ZWRUZXh0TGFiZWxzLm1hcCh0ZXh0TGFiZWwgPT4ge1xyXG4gICAgY29uc3QgZmllbGQgPSB0ZXh0TGFiZWwuZmllbGRcclxuICAgICAgPyBmaWVsZHMuZmluZChmZCA9PlxyXG4gICAgICAgICAgT2JqZWN0LmtleXModGV4dExhYmVsLmZpZWxkKS5ldmVyeShrZXkgPT4gdGV4dExhYmVsLmZpZWxkW2tleV0gPT09IGZkW2tleV0pXHJcbiAgICAgICAgKVxyXG4gICAgICA6IG51bGw7XHJcblxyXG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKGxheWVyVGV4dExhYmVsKS5yZWR1Y2UoXHJcbiAgICAgIChhY2N1LCBrZXkpID0+ICh7XHJcbiAgICAgICAgLi4uYWNjdSxcclxuICAgICAgICBba2V5XToga2V5ID09PSAnZmllbGQnID8gZmllbGQgOiB0ZXh0TGFiZWxba2V5XSB8fCBsYXllclRleHRMYWJlbFtrZXldXHJcbiAgICAgIH0pLFxyXG4gICAgICB7fVxyXG4gICAgKTtcclxuICB9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFZhbGlkYXRlIHNhdmVkIHZpc3VhbCBjaGFubmVscyBjb25maWcgd2l0aCBuZXcgZGF0YSxcclxuICogcmVmZXIgdG8gdmlzLXN0YXRlLXNjaGVtYS5qcyBWaXN1YWxDaGFubmVsU2NoZW1hVjFcclxuICpcclxuICogQHBhcmFtIHtBcnJheTxPYmplY3Q+fSBmaWVsZHNcclxuICogQHBhcmFtIHtPYmplY3R9IG5ld0xheWVyXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBzYXZlZExheWVyXHJcbiAqIEByZXR1cm4ge09iamVjdH0gLSBuZXdMYXllclxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlU2F2ZWRWaXN1YWxDaGFubmVscyhmaWVsZHMsIG5ld0xheWVyLCBzYXZlZExheWVyKSB7XHJcbiAgT2JqZWN0LnZhbHVlcyhuZXdMYXllci52aXN1YWxDaGFubmVscykuZm9yRWFjaCgoe2ZpZWxkLCBzY2FsZSwga2V5fSkgPT4ge1xyXG4gICAgbGV0IGZvdW5kRmllbGQ7XHJcbiAgICBpZiAoc2F2ZWRMYXllci5jb25maWdbZmllbGRdKSB7XHJcbiAgICAgIGZvdW5kRmllbGQgPSBmaWVsZHMuZmluZChmZCA9PlxyXG4gICAgICAgIE9iamVjdC5rZXlzKHNhdmVkTGF5ZXIuY29uZmlnW2ZpZWxkXSkuZXZlcnkoXHJcbiAgICAgICAgICBwcm9wID0+IHNhdmVkTGF5ZXIuY29uZmlnW2ZpZWxkXVtwcm9wXSA9PT0gZmRbcHJvcF1cclxuICAgICAgICApXHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZm91bmRDaGFubmVsID0ge1xyXG4gICAgICAuLi4oZm91bmRGaWVsZCA/IHtbZmllbGRdOiBmb3VuZEZpZWxkfSA6IHt9KSxcclxuICAgICAgLi4uKHNhdmVkTGF5ZXIuY29uZmlnW3NjYWxlXSA/IHtbc2NhbGVdOiBzYXZlZExheWVyLmNvbmZpZ1tzY2FsZV19IDoge30pXHJcbiAgICB9O1xyXG4gICAgaWYgKE9iamVjdC5rZXlzKGZvdW5kQ2hhbm5lbCkubGVuZ3RoKSB7XHJcbiAgICAgIG5ld0xheWVyLnVwZGF0ZUxheWVyQ29uZmlnKGZvdW5kQ2hhbm5lbCk7XHJcbiAgICAgIG5ld0xheWVyLnZhbGlkYXRlVmlzdWFsQ2hhbm5lbChrZXkpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIHJldHVybiBuZXdMYXllcjtcclxufVxyXG5cclxuLyoqXHJcbiAqIFZhbGlkYXRlIHNhdmVkIGxheWVyIGNvbmZpZyB3aXRoIG5ldyBkYXRhLFxyXG4gKiB1cGRhdGUgZmllbGRJZHggYmFzZWQgb24gbmV3IGZpZWxkc1xyXG4gKiBAcGFyYW0ge29iamVjdH0gZGF0YXNldFxyXG4gKiBAcGFyYW0ge0FycmF5PE9iamVjdD59IGRhdGFzZXQuZmllbGRzXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBkYXRhc2V0LmlkXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBzYXZlZExheWVyXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBsYXllckNsYXNzZXNcclxuICogQHJldHVybiB7bnVsbCB8IE9iamVjdH0gLSB2YWxpZGF0ZWQgbGF5ZXIgb3IgbnVsbFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlTGF5ZXJXaXRoRGF0YSh7ZmllbGRzLCBpZDogZGF0YUlkfSwgc2F2ZWRMYXllciwgbGF5ZXJDbGFzc2VzKSB7XHJcbiAgY29uc3Qge3R5cGV9ID0gc2F2ZWRMYXllcjtcclxuICAvLyBsYXllciBkb2VzbnQgaGF2ZSBhIHZhbGlkIHR5cGVcclxuICBpZiAoIWxheWVyQ2xhc3Nlcy5oYXNPd25Qcm9wZXJ0eSh0eXBlKSB8fCAhc2F2ZWRMYXllci5jb25maWcgfHwgIXNhdmVkTGF5ZXIuY29uZmlnLmNvbHVtbnMpIHtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgbGV0IG5ld0xheWVyID0gbmV3IGxheWVyQ2xhc3Nlc1t0eXBlXSh7XHJcbiAgICBpZDogc2F2ZWRMYXllci5pZCxcclxuICAgIGRhdGFJZCxcclxuICAgIGxhYmVsOiBzYXZlZExheWVyLmNvbmZpZy5sYWJlbCxcclxuICAgIGNvbG9yOiBzYXZlZExheWVyLmNvbmZpZy5jb2xvcixcclxuICAgIGlzVmlzaWJsZTogc2F2ZWRMYXllci5jb25maWcuaXNWaXNpYmxlLFxyXG4gICAgaGlkZGVuOiBzYXZlZExheWVyLmNvbmZpZy5oaWRkZW5cclxuICB9KTtcclxuXHJcbiAgLy8gZmluZCBjb2x1bW4gZmllbGRJZHhcclxuICBjb25zdCBjb2x1bW5zID0gdmFsaWRhdGVTYXZlZExheWVyQ29sdW1ucyhcclxuICAgIGZpZWxkcyxcclxuICAgIHNhdmVkTGF5ZXIuY29uZmlnLmNvbHVtbnMsXHJcbiAgICBuZXdMYXllci5nZXRMYXllckNvbHVtbnMoKVxyXG4gICk7XHJcblxyXG4gIGlmICghY29sdW1ucykge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICAvLyB2aXN1YWwgY2hhbm5lbCBmaWVsZCBpcyBzYXZlZCB0byBiZSB7bmFtZSwgdHlwZX1cclxuICAvLyBmaW5kIHZpc3VhbCBjaGFubmVsIGZpZWxkIGJ5IG1hdGNoaW5nIGJvdGggbmFtZSBhbmQgdHlwZVxyXG4gIC8vIHJlZmVyIHRvIHZpcy1zdGF0ZS1zY2hlbWEuanMgVmlzdWFsQ2hhbm5lbFNjaGVtYVYxXHJcbiAgbmV3TGF5ZXIgPSB2YWxpZGF0ZVNhdmVkVmlzdWFsQ2hhbm5lbHMoZmllbGRzLCBuZXdMYXllciwgc2F2ZWRMYXllcik7XHJcblxyXG4gIGNvbnN0IHRleHRMYWJlbCA9XHJcbiAgICBzYXZlZExheWVyLmNvbmZpZy50ZXh0TGFiZWwgJiYgbmV3TGF5ZXIuY29uZmlnLnRleHRMYWJlbFxyXG4gICAgICA/IHZhbGlkYXRlU2F2ZWRUZXh0TGFiZWwoZmllbGRzLCBuZXdMYXllci5jb25maWcudGV4dExhYmVsLCBzYXZlZExheWVyLmNvbmZpZy50ZXh0TGFiZWwpXHJcbiAgICAgIDogbmV3TGF5ZXIuY29uZmlnLnRleHRMYWJlbDtcclxuXHJcbiAgLy8gY29weSB2aXNDb25maWcgb3ZlciB0byBlbXB0eUxheWVyIHRvIG1ha2Ugc3VyZSBpdCBoYXMgYWxsIHRoZSBwcm9wc1xyXG4gIGNvbnN0IHZpc0NvbmZpZyA9IG5ld0xheWVyLmNvcHlMYXllckNvbmZpZyhcclxuICAgIG5ld0xheWVyLmNvbmZpZy52aXNDb25maWcsXHJcbiAgICBzYXZlZExheWVyLmNvbmZpZy52aXNDb25maWcgfHwge30sXHJcbiAgICB7c2hhbGxvd0NvcHk6IFsnY29sb3JSYW5nZScsICdzdHJva2VDb2xvclJhbmdlJ119XHJcbiAgKTtcclxuXHJcbiAgbmV3TGF5ZXIudXBkYXRlTGF5ZXJDb25maWcoe1xyXG4gICAgY29sdW1ucyxcclxuICAgIHZpc0NvbmZpZyxcclxuICAgIHRleHRMYWJlbFxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gbmV3TGF5ZXI7XHJcbn1cclxuIl19