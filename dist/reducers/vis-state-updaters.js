"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateStateOnLayerVisibilityChange = updateStateOnLayerVisibilityChange;
exports.layerConfigChangeUpdater = layerConfigChangeUpdater;
exports.layerTextLabelChangeUpdater = layerTextLabelChangeUpdater;
exports.layerTypeChangeUpdater = layerTypeChangeUpdater;
exports.layerVisualChannelChangeUpdater = layerVisualChannelChangeUpdater;
exports.layerVisConfigChangeUpdater = layerVisConfigChangeUpdater;
exports.setFilterUpdater = setFilterUpdater;
exports.interactionConfigChangeUpdater = interactionConfigChangeUpdater;
exports.loadNextFileUpdater = loadNextFileUpdater;
exports.makeLoadFileTask = makeLoadFileTask;
exports.addDefaultLayers = addDefaultLayers;
exports.addDefaultTooltips = addDefaultTooltips;
exports.updateAllLayerDomainData = updateAllLayerDomainData;
exports.updateAnimationDomain = updateAnimationDomain;
exports.setFeaturesUpdater = setFeaturesUpdater;
exports.deleteFeatureUpdater = deleteFeatureUpdater;
exports.setPolygonFilterLayerUpdater = setPolygonFilterLayerUpdater;
exports.sortTableColumnUpdater = sortTableColumnUpdater;
exports.pinTableColumnUpdater = pinTableColumnUpdater;
exports.copyTableColumnUpdater = copyTableColumnUpdater;
exports.toggleEditorVisibilityUpdater = toggleEditorVisibilityUpdater;
exports.setSelectedFeatureUpdater = exports.setEditorModeUpdater = exports.setMapInfoUpdater = exports.applyCPUFilterUpdater = exports.loadFilesErrUpdater = exports.loadFilesUpdater = exports.updateVisDataUpdater = exports.toggleLayerForMapUpdater = exports.toggleSplitMapUpdater = exports.mouseMoveUpdater = exports.mapClickUpdater = exports.layerClickUpdater = exports.layerHoverUpdater = exports.receiveMapConfigUpdater = exports.resetMapConfigUpdater = exports.showDatasetTableUpdater = exports.updateLayerBlendingUpdater = exports.removeDatasetUpdater = exports.reorderLayerUpdater = exports.removeLayerUpdater = exports.addLayerUpdater = exports.removeFilterUpdater = exports.toggleFilterFeatureUpdater = exports.enlargeFilterUpdater = exports.updateLayerAnimationSpeedUpdater = exports.updateAnimationTimeUpdater = exports.updateFilterAnimationSpeedUpdater = exports.toggleFilterAnimationUpdater = exports.layerColorUIChangeUpdater = exports.addFilterUpdater = exports.setFilterPlotUpdater = exports.INITIAL_VIS_STATE = exports.DEFAULT_EDITOR = exports.DEFAULT_ANIMATION_CONFIG = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _toArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _window = require("global/window");

var _tasks = require("react-palm/tasks");

var _lodash = _interopRequireDefault(require("lodash.clonedeep"));

var _lodash2 = _interopRequireDefault(require("lodash.uniq"));

var _lodash3 = _interopRequireDefault(require("lodash.get"));

var _lodash4 = _interopRequireDefault(require("lodash.xor"));

var _copyToClipboard = _interopRequireDefault(require("copy-to-clipboard"));

var _dataUtils = require("../utils/data-utils");

var _tasks2 = require("../tasks/tasks");

var _visStateActions = require("../actions/vis-state-actions");

var _interactionUtils = require("../utils/interaction-utils");

var _filterUtils = require("../utils/filter-utils");

var _gpuFilterUtils = require("../utils/gpu-filter-utils");

var _datasetUtils = require("../utils/dataset-utils");

var _utils = require("../utils/utils");

var _layerUtils = require("../utils/layer-utils/layer-utils");

var _visStateMerger = require("./vis-state-merger");

var _splitMapUtils = require("../utils/split-map-utils");

var _layers = require("../layers");

var _layerFactory = require("../layers/layer-factory");

var _defaultSettings = require("../constants/default-settings");

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return (0, _typeof2["default"])(key) === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if ((0, _typeof2["default"])(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if ((0, _typeof2["default"])(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// type imports

/** @typedef {import('./vis-state-updaters').Field} Field */

/** @typedef {import('./vis-state-updaters').Filter} Filter */

/** @typedef {import('./vis-state-updaters').Dataset} Dataset */

/** @typedef {import('./vis-state-updaters').VisState} VisState */

/** @typedef {import('./vis-state-updaters').Datasets} Datasets */

/** @typedef {import('./vis-state-updaters').AnimationConfig} AnimationConfig */

/** @typedef {import('./vis-state-updaters').Editor} Editor */
// react-palm
// disable capture exception for react-palm call to withTask
(0, _tasks.disableStackCapturing)();
/**
 * Updaters for `visState` reducer. Can be used in your root reducer to directly modify kepler.gl's state.
 * Read more about [Using updaters](../advanced-usage/using-updaters.md)
 *
 * @public
 * @example
 *
 * import keplerGlReducer, {visStateUpdaters} from 'kepler.gl/reducers';
 * // Root Reducer
 * const reducers = combineReducers({
 *  keplerGl: keplerGlReducer,
 *  app: appReducer
 * });
 *
 * const composedReducer = (state, action) => {
 *  switch (action.type) {
 *    case 'CLICK_BUTTON':
 *      return {
 *        ...state,
 *        keplerGl: {
 *          ...state.keplerGl,
 *          foo: {
 *             ...state.keplerGl.foo,
 *             visState: visStateUpdaters.enlargeFilterUpdater(
 *               state.keplerGl.foo.visState,
 *               {idx: 0}
 *             )
 *          }
 *        }
 *      };
 *  }
 *  return reducers(state, action);
 * };
 *
 * export default composedReducer;
 */

/* eslint-disable no-unused-vars */
// @ts-ignore

var visStateUpdaters = null;
/* eslint-enable no-unused-vars */

/** @type {AnimationConfig} */

var DEFAULT_ANIMATION_CONFIG = {
  domain: null,
  currentTime: null,
  speed: 1
};
/** @type {Editor} */

exports.DEFAULT_ANIMATION_CONFIG = DEFAULT_ANIMATION_CONFIG;
var DEFAULT_EDITOR = {
  mode: _defaultSettings.EDITOR_MODES.DRAW_POLYGON,
  features: [],
  selectedFeature: null,
  visible: true
};
/**
 * Default initial `visState`
 * @memberof visStateUpdaters
 * @constant
 * @type {VisState}
 * @public
 */

exports.DEFAULT_EDITOR = DEFAULT_EDITOR;
var INITIAL_VIS_STATE = {
  // map info
  mapInfo: {
    title: '',
    description: ''
  },
  // layers
  layers: [],
  layerData: [],
  layerToBeMerged: [],
  layerOrder: [],
  // filters
  filters: [],
  filterToBeMerged: [],
  // a collection of multiple dataset
  datasets: {},
  editingDataset: undefined,
  interactionConfig: (0, _interactionUtils.getDefaultInteraction)(),
  interactionToBeMerged: undefined,
  layerBlending: 'normal',
  hoverInfo: undefined,
  clicked: undefined,
  mousePos: {},
  // this is used when user split maps
  splitMaps: [// this will contain a list of objects to
    // describe the state of layer availability and visibility for each map
    // [
    //   {
    //      layers: {layer_id: true | false}
    //   }
    // ]
  ],
  //
  // defaults layer classes
  layerClasses: _layers.LayerClasses,
  // default animation
  // time in unix timestamp (milliseconds) (the number of seconds since the Unix Epoch)
  animationConfig: DEFAULT_ANIMATION_CONFIG,
  editor: DEFAULT_EDITOR
};
/**
 * Update state with updated layer and layerData
 * @type {typeof import('./vis-state-updaters').updateStateWithLayerAndData}
 *
 */

exports.INITIAL_VIS_STATE = INITIAL_VIS_STATE;

function updateStateWithLayerAndData(state, _ref) {
  var layerData = _ref.layerData,
      layer = _ref.layer,
      idx = _ref.idx;
  return _objectSpread(_objectSpread({}, state), {}, {
    layers: state.layers.map(function (lyr, i) {
      return i === idx ? layer : lyr;
    }),
    layerData: layerData ? state.layerData.map(function (d, i) {
      return i === idx ? layerData : d;
    }) : state.layerData
  });
}

function updateStateOnLayerVisibilityChange(state, layer) {
  var newState = state;

  if (state.splitMaps.length) {
    newState = _objectSpread(_objectSpread({}, state), {}, {
      splitMaps: layer.config.isVisible ? (0, _splitMapUtils.addNewLayersToSplitMap)(state.splitMaps, layer) : (0, _splitMapUtils.removeLayerFromSplitMaps)(state.splitMaps, layer)
    });
  }

  if (layer.config.animation.enabled) {
    newState = updateAnimationDomain(state);
  }

  return newState;
}
/**
 * Update layer base config: dataId, label, column, isVisible
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').layerConfigChangeUpdater}
 * @returns nextState
 */


function layerConfigChangeUpdater(state, action) {
  var oldLayer = action.oldLayer;
  var idx = state.layers.findIndex(function (l) {
    return l.id === oldLayer.id;
  });
  var props = Object.keys(action.newConfig);
  var newLayer = oldLayer.updateLayerConfig(action.newConfig);
  var layerData; // let newLayer;

  if (newLayer.shouldCalculateLayerData(props)) {
    var oldLayerData = state.layerData[idx];
    var updateLayerDataResult = (0, _layerUtils.calculateLayerData)(newLayer, state, oldLayerData);
    layerData = updateLayerDataResult.layerData;
    newLayer = updateLayerDataResult.layer;
  }

  var newState = state;

  if ('isVisible' in action.newConfig) {
    newState = updateStateOnLayerVisibilityChange(state, newLayer);
  }

  return updateStateWithLayerAndData(newState, {
    layer: newLayer,
    layerData: layerData,
    idx: idx
  });
}

function addOrRemoveTextLabels(newFields, textLabel) {
  var newTextLabel = textLabel.slice();
  var currentFields = textLabel.map(function (tl) {
    return tl.field && tl.field.name;
  }).filter(function (d) {
    return d;
  });
  var addFields = newFields.filter(function (f) {
    return !currentFields.includes(f.name);
  });
  var deleteFields = currentFields.filter(function (f) {
    return !newFields.find(function (fd) {
      return fd.name === f;
    });
  }); // delete

  newTextLabel = newTextLabel.filter(function (tl) {
    return tl.field && !deleteFields.includes(tl.field.name);
  });
  newTextLabel = !newTextLabel.length ? [_layerFactory.DEFAULT_TEXT_LABEL] : newTextLabel; // add

  newTextLabel = [].concat((0, _toConsumableArray2["default"])(newTextLabel.filter(function (tl) {
    return tl.field;
  })), (0, _toConsumableArray2["default"])(addFields.map(function (af) {
    return _objectSpread(_objectSpread({}, _layerFactory.DEFAULT_TEXT_LABEL), {}, {
      field: af
    });
  })));
  return newTextLabel;
}

function updateTextLabelPropAndValue(idx, prop, value, textLabel) {
  if (!textLabel[idx].hasOwnProperty(prop)) {
    return textLabel;
  }

  var newTextLabel = textLabel.slice();

  if (prop && (value || textLabel.length === 1)) {
    newTextLabel = textLabel.map(function (tl, i) {
      return i === idx ? _objectSpread(_objectSpread({}, tl), {}, (0, _defineProperty2["default"])({}, prop, value)) : tl;
    });
  } else if (prop === 'field' && value === null && textLabel.length > 1) {
    // remove label when field value is set to null
    newTextLabel.splice(idx, 1);
  }

  return newTextLabel;
}
/**
 * Update layer base config: dataId, label, column, isVisible
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').layerTextLabelChangeUpdater}
 * @returns nextState
 */


function layerTextLabelChangeUpdater(state, action) {
  var oldLayer = action.oldLayer,
      idx = action.idx,
      prop = action.prop,
      value = action.value;
  var textLabel = oldLayer.config.textLabel;
  var newTextLabel = textLabel.slice();

  if (!textLabel[idx] && idx === textLabel.length) {
    // if idx is set to length, add empty text label
    newTextLabel = [].concat((0, _toConsumableArray2["default"])(textLabel), [_layerFactory.DEFAULT_TEXT_LABEL]);
  }

  if (idx === 'all' && prop === 'fields') {
    newTextLabel = addOrRemoveTextLabels(value, textLabel);
  } else {
    newTextLabel = updateTextLabelPropAndValue(idx, prop, value, newTextLabel);
  } // update text label prop and value


  return layerConfigChangeUpdater(state, {
    oldLayer: oldLayer,
    newConfig: {
      textLabel: newTextLabel
    }
  });
}
/**
 * Update layer type. Previews layer config will be copied if applicable.
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').layerTypeChangeUpdater}
 * @public
 */


function layerTypeChangeUpdater(state, action) {
  var oldLayer = action.oldLayer,
      newType = action.newType;

  if (!oldLayer) {
    return state;
  }

  var oldId = oldLayer.id;
  var idx = state.layers.findIndex(function (l) {
    return l.id === oldId;
  });

  if (!state.layerClasses[newType]) {
    _window.console.error("".concat(newType, " is not a valid layer type"));

    return state;
  } // get a mint layer, with new id and type
  // because deck.gl uses id to match between new and old layer.
  // If type has changed but id is the same, it will break


  var newLayer = new state.layerClasses[newType]();
  newLayer.assignConfigToLayer(oldLayer.config, oldLayer.visConfigSettings); // if (newLayer.config.dataId) {
  //   const dataset = state.datasets[newLayer.config.dataId];
  //   newLayer.updateLayerDomain(dataset);
  // }

  newLayer.updateLayerDomain(state.datasets);

  var _calculateLayerData = (0, _layerUtils.calculateLayerData)(newLayer, state),
      layerData = _calculateLayerData.layerData,
      layer = _calculateLayerData.layer;

  var newState = updateStateWithLayerAndData(state, {
    layerData: layerData,
    layer: layer,
    idx: idx
  });

  if (layer.config.animation.enabled || oldLayer.config.animation.enabled) {
    newState = updateAnimationDomain(newState);
  } // update splitMap layer id


  if (state.splitMaps.length) {
    newState = _objectSpread(_objectSpread({}, newState), {}, {
      splitMaps: newState.splitMaps.map(function (settings) {
        var _settings$layers = settings.layers,
            oldLayerMap = _settings$layers[oldId],
            otherLayers = (0, _objectWithoutProperties2["default"])(_settings$layers, [oldId].map(_toPropertyKey));
        return oldId in settings.layers ? _objectSpread(_objectSpread({}, settings), {}, {
          layers: _objectSpread(_objectSpread({}, otherLayers), {}, (0, _defineProperty2["default"])({}, layer.id, oldLayerMap))
        }) : settings;
      })
    });
  }

  return newState;
}
/**
 * Update layer visual channel
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').layerVisualChannelChangeUpdater}
 * @returns {Object} nextState
 * @public
 */


function layerVisualChannelChangeUpdater(state, action) {
  var oldLayer = action.oldLayer,
      newConfig = action.newConfig,
      channel = action.channel;

  if (!oldLayer.config.dataId) {
    return state;
  }

  var dataset = state.datasets[oldLayer.config.dataId];
  var idx = state.layers.findIndex(function (l) {
    return l.id === oldLayer.id;
  });
  var newLayer = oldLayer.updateLayerConfig(newConfig);
  newLayer.updateLayerVisualChannel(dataset, channel);
  var oldLayerData = state.layerData[idx];

  var _calculateLayerData2 = (0, _layerUtils.calculateLayerData)(newLayer, state, oldLayerData),
      layerData = _calculateLayerData2.layerData,
      layer = _calculateLayerData2.layer;

  return updateStateWithLayerAndData(state, {
    layerData: layerData,
    layer: layer,
    idx: idx
  });
}
/**
 * Update layer `visConfig`
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').layerVisConfigChangeUpdater}
 * @public
 */


function layerVisConfigChangeUpdater(state, action) {
  var oldLayer = action.oldLayer;
  var idx = state.layers.findIndex(function (l) {
    return l.id === oldLayer.id;
  });
  var props = Object.keys(action.newVisConfig);

  var newVisConfig = _objectSpread(_objectSpread({}, oldLayer.config.visConfig), action.newVisConfig);

  var newLayer = oldLayer.updateLayerConfig({
    visConfig: newVisConfig
  });

  if (newLayer.shouldCalculateLayerData(props)) {
    var oldLayerData = state.layerData[idx];

    var _calculateLayerData3 = (0, _layerUtils.calculateLayerData)(newLayer, state, oldLayerData),
        layerData = _calculateLayerData3.layerData,
        layer = _calculateLayerData3.layer;

    return updateStateWithLayerAndData(state, {
      layerData: layerData,
      layer: layer,
      idx: idx
    });
  }

  return updateStateWithLayerAndData(state, {
    layer: newLayer,
    idx: idx
  });
}
/**
 * Update filter property
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').setFilterUpdater}
 * @public
 */


function setFilterUpdater(state, action) {
  var idx = action.idx,
      prop = action.prop,
      value = action.value,
      _action$valueIndex = action.valueIndex,
      valueIndex = _action$valueIndex === void 0 ? 0 : _action$valueIndex;
  var oldFilter = state.filters[idx];
  var newFilter = (0, _utils.set)([prop], value, oldFilter);
  var newState = state;
  var _newFilter = newFilter,
      dataId = _newFilter.dataId; // Ensuring backward compatibility

  var datasetIds = (0, _utils.toArray)(dataId);

  switch (prop) {
    // TODO: Next PR for UI if we update dataId, we need to consider two cases:
    // 1. dataId is empty: create a default filter
    // 2. Add a new dataset id
    case _filterUtils.FILTER_UPDATER_PROPS.dataId:
      // if trying to update filter dataId. create an empty new filter
      newFilter = (0, _filterUtils.updateFilterDataId)(dataId);
      break;

    case _filterUtils.FILTER_UPDATER_PROPS.name:
      // we are supporting the current functionality
      // TODO: Next PR for UI filter name will only update filter name but it won't have side effects
      // we are gonna use pair of datasets and fieldIdx to update the filter
      var datasetId = newFilter.dataId[valueIndex];

      var _applyFilterFieldName = (0, _filterUtils.applyFilterFieldName)(newFilter, state.datasets[datasetId], value, valueIndex, {
        mergeDomain: false
      }),
          updatedFilter = _applyFilterFieldName.filter,
          newDataset = _applyFilterFieldName.dataset;

      if (!updatedFilter) {
        return state;
      }

      newFilter = updatedFilter;

      if (newFilter.gpu) {
        newFilter = (0, _gpuFilterUtils.setFilterGpuMode)(newFilter, state.filters);
        newFilter = (0, _gpuFilterUtils.assignGpuChannel)(newFilter, state.filters);
      }

      newState = (0, _utils.set)(['datasets', datasetId], newDataset, state); // only filter the current dataset

      break;

    case _filterUtils.FILTER_UPDATER_PROPS.layerId:
      // We need to update only datasetId/s if we have added/removed layers
      // - check for layerId changes (XOR works because of string values)
      // if no differences between layerIds, don't do any filtering
      // @ts-ignore
      var layerIdDifference = (0, _lodash4["default"])(newFilter.layerId, oldFilter.layerId);
      var layerDataIds = (0, _lodash2["default"])(layerIdDifference.map(function (lid) {
        return (0, _lodash3["default"])(state.layers.find(function (l) {
          return l.id === lid;
        }), ['config', 'dataId']);
      }).filter(function (d) {
        return d;
      })); // only filter datasetsIds

      datasetIds = layerDataIds; // Update newFilter dataIds

      var newDataIds = (0, _lodash2["default"])(newFilter.layerId.map(function (lid) {
        return (0, _lodash3["default"])(state.layers.find(function (l) {
          return l.id === lid;
        }), ['config', 'dataId']);
      }).filter(function (d) {
        return d;
      }));
      newFilter = _objectSpread(_objectSpread({}, newFilter), {}, {
        dataId: newDataIds
      });
      break;

    default:
      break;
  }

  var enlargedFilter = state.filters.find(function (f) {
    return f.enlarged;
  });

  if (enlargedFilter && enlargedFilter.id !== newFilter.id) {
    // there should be only one enlarged filter
    newFilter.enlarged = false;
  } // save new filters to newState


  newState = (0, _utils.set)(['filters', idx], newFilter, newState); // if we are currently setting a prop that only requires to filter the current
  // dataset we will pass only the current dataset to applyFiltersToDatasets and
  // updateAllLayerDomainData otherwise we pass the all list of datasets as defined in dataId

  var datasetIdsToFilter = _filterUtils.LIMITED_FILTER_EFFECT_PROPS[prop] ? [datasetIds[valueIndex]] : datasetIds; // filter data

  var filteredDatasets = (0, _filterUtils.applyFiltersToDatasets)(datasetIdsToFilter, newState.datasets, newState.filters, newState.layers);
  newState = (0, _utils.set)(['datasets'], filteredDatasets, newState); // dataId is an array
  // pass only the dataset we need to update

  newState = updateAllLayerDomainData(newState, datasetIdsToFilter, newFilter);
  return newState;
}
/**
 * Set the property of a filter plot
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').setFilterPlotUpdater}
 * @public
 */


var setFilterPlotUpdater = function setFilterPlotUpdater(state, _ref2) {
  var idx = _ref2.idx,
      newProp = _ref2.newProp,
      _ref2$valueIndex = _ref2.valueIndex,
      valueIndex = _ref2$valueIndex === void 0 ? 0 : _ref2$valueIndex;

  var newFilter = _objectSpread(_objectSpread({}, state.filters[idx]), newProp);

  var prop = Object.keys(newProp)[0];

  if (prop === 'yAxis') {
    var plotType = (0, _filterUtils.getDefaultFilterPlotType)(newFilter); // TODO: plot is not supported in multi dataset filter for now

    if (plotType) {
      newFilter = _objectSpread(_objectSpread(_objectSpread({}, newFilter), (0, _filterUtils.getFilterPlot)(_objectSpread(_objectSpread({}, newFilter), {}, {
        plotType: plotType
      }), state.datasets[newFilter.dataId[valueIndex]].allData)), {}, {
        plotType: plotType
      });
    }
  }

  return _objectSpread(_objectSpread({}, state), {}, {
    filters: state.filters.map(function (f, i) {
      return i === idx ? newFilter : f;
    })
  });
};
/**
 * Add a new filter
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').addFilterUpdater}
 * @public
 */


exports.setFilterPlotUpdater = setFilterPlotUpdater;

var addFilterUpdater = function addFilterUpdater(state, action) {
  return !action.dataId ? state : _objectSpread(_objectSpread({}, state), {}, {
    filters: [].concat((0, _toConsumableArray2["default"])(state.filters), [(0, _filterUtils.getDefaultFilter)(action.dataId)])
  });
};
/**
 * Set layer color palette ui state
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').layerColorUIChangeUpdater}
 */


exports.addFilterUpdater = addFilterUpdater;

var layerColorUIChangeUpdater = function layerColorUIChangeUpdater(state, _ref3) {
  var oldLayer = _ref3.oldLayer,
      prop = _ref3.prop,
      newConfig = _ref3.newConfig;
  var newLayer = oldLayer.updateLayerColorUI(prop, newConfig);
  return _objectSpread(_objectSpread({}, state), {}, {
    layers: state.layers.map(function (l) {
      return l.id === oldLayer.id ? newLayer : l;
    })
  });
};
/**
 * Start and end filter animation
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').toggleFilterAnimationUpdater}
 * @public
 */


exports.layerColorUIChangeUpdater = layerColorUIChangeUpdater;

var toggleFilterAnimationUpdater = function toggleFilterAnimationUpdater(state, action) {
  return _objectSpread(_objectSpread({}, state), {}, {
    filters: state.filters.map(function (f, i) {
      return i === action.idx ? _objectSpread(_objectSpread({}, f), {}, {
        isAnimating: !f.isAnimating
      }) : f;
    })
  });
};
/**
 * Change filter animation speed
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').updateFilterAnimationSpeedUpdater}
 * @public
 */


exports.toggleFilterAnimationUpdater = toggleFilterAnimationUpdater;

var updateFilterAnimationSpeedUpdater = function updateFilterAnimationSpeedUpdater(state, action) {
  return _objectSpread(_objectSpread({}, state), {}, {
    filters: state.filters.map(function (f, i) {
      return i === action.idx ? _objectSpread(_objectSpread({}, f), {}, {
        speed: action.speed
      }) : f;
    })
  });
};
/**
 * Reset animation config current time to a specified value
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').updateAnimationTimeUpdater}
 * @public
 *
 */


exports.updateFilterAnimationSpeedUpdater = updateFilterAnimationSpeedUpdater;

var updateAnimationTimeUpdater = function updateAnimationTimeUpdater(state, _ref4) {
  var value = _ref4.value;
  return _objectSpread(_objectSpread({}, state), {}, {
    animationConfig: _objectSpread(_objectSpread({}, state.animationConfig), {}, {
      currentTime: value
    })
  });
};
/**
 * Update animation speed with the vertical speed slider
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').updateLayerAnimationSpeedUpdater}
 * @public
 *
 */


exports.updateAnimationTimeUpdater = updateAnimationTimeUpdater;

var updateLayerAnimationSpeedUpdater = function updateLayerAnimationSpeedUpdater(state, _ref5) {
  var speed = _ref5.speed;
  return _objectSpread(_objectSpread({}, state), {}, {
    animationConfig: _objectSpread(_objectSpread({}, state.animationConfig), {}, {
      speed: speed
    })
  });
};
/**
 * Show larger time filter at bottom for time playback (apply to time filter only)
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').enlargeFilterUpdater}
 * @public
 */


exports.updateLayerAnimationSpeedUpdater = updateLayerAnimationSpeedUpdater;

var enlargeFilterUpdater = function enlargeFilterUpdater(state, action) {
  var isEnlarged = state.filters[action.idx].enlarged;
  return _objectSpread(_objectSpread({}, state), {}, {
    filters: state.filters.map(function (f, i) {
      f.enlarged = !isEnlarged && i === action.idx;
      return f;
    })
  });
};
/**
 * Toggles filter feature visibility
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').toggleFilterFeatureUpdater}
 */


exports.enlargeFilterUpdater = enlargeFilterUpdater;

var toggleFilterFeatureUpdater = function toggleFilterFeatureUpdater(state, action) {
  var filter = state.filters[action.idx];
  var isVisible = (0, _lodash3["default"])(filter, ['value', 'properties', 'isVisible']);

  var newFilter = _objectSpread(_objectSpread({}, filter), {}, {
    value: (0, _filterUtils.featureToFilterValue)(filter.value, filter.id, {
      isVisible: !isVisible
    })
  });

  return _objectSpread(_objectSpread({}, state), {}, {
    filters: Object.assign((0, _toConsumableArray2["default"])(state.filters), (0, _defineProperty2["default"])({}, action.idx, newFilter))
  });
};
/**
 * Remove a filter
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').removeFilterUpdater}
 * @public
 */


exports.toggleFilterFeatureUpdater = toggleFilterFeatureUpdater;

var removeFilterUpdater = function removeFilterUpdater(state, action) {
  var idx = action.idx;
  var _state$filters$idx = state.filters[idx],
      dataId = _state$filters$idx.dataId,
      id = _state$filters$idx.id;
  var newFilters = [].concat((0, _toConsumableArray2["default"])(state.filters.slice(0, idx)), (0, _toConsumableArray2["default"])(state.filters.slice(idx + 1, state.filters.length)));
  var filteredDatasets = (0, _filterUtils.applyFiltersToDatasets)(dataId, state.datasets, newFilters, state.layers);
  var newEditor = (0, _filterUtils.getFilterIdInFeature)(state.editor.selectedFeature) === id ? _objectSpread(_objectSpread({}, state.editor), {}, {
    selectedFeature: null
  }) : state.editor;
  var newState = (0, _utils.set)(['filters'], newFilters, state);
  newState = (0, _utils.set)(['datasets'], filteredDatasets, newState);
  newState = (0, _utils.set)(['editor'], newEditor, newState);
  return updateAllLayerDomainData(newState, dataId, undefined);
};
/**
 * Add a new layer
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').addLayerUpdater}
 * @public
 */


exports.removeFilterUpdater = removeFilterUpdater;

var addLayerUpdater = function addLayerUpdater(state, action) {
  var defaultDataset = Object.keys(state.datasets)[0];
  var newLayer = new _layers.Layer(_objectSpread({
    isVisible: true,
    isConfigActive: true,
    dataId: defaultDataset
  }, action.props));
  return _objectSpread(_objectSpread({}, state), {}, {
    layers: [].concat((0, _toConsumableArray2["default"])(state.layers), [newLayer]),
    layerData: [].concat((0, _toConsumableArray2["default"])(state.layerData), [{}]),
    layerOrder: [].concat((0, _toConsumableArray2["default"])(state.layerOrder), [state.layerOrder.length]),
    splitMaps: (0, _splitMapUtils.addNewLayersToSplitMap)(state.splitMaps, newLayer)
  });
};
/**
 * remove layer
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').removeLayerUpdater}
 * @public
 */


exports.addLayerUpdater = addLayerUpdater;

var removeLayerUpdater = function removeLayerUpdater(state, _ref6) {
  var idx = _ref6.idx;
  var layers = state.layers,
      layerData = state.layerData,
      clicked = state.clicked,
      hoverInfo = state.hoverInfo;
  var layerToRemove = state.layers[idx];
  var newMaps = (0, _splitMapUtils.removeLayerFromSplitMaps)(state.splitMaps, layerToRemove);

  var newState = _objectSpread(_objectSpread({}, state), {}, {
    layers: [].concat((0, _toConsumableArray2["default"])(layers.slice(0, idx)), (0, _toConsumableArray2["default"])(layers.slice(idx + 1, layers.length))),
    layerData: [].concat((0, _toConsumableArray2["default"])(layerData.slice(0, idx)), (0, _toConsumableArray2["default"])(layerData.slice(idx + 1, layerData.length))),
    layerOrder: state.layerOrder.filter(function (i) {
      return i !== idx;
    }).map(function (pid) {
      return pid > idx ? pid - 1 : pid;
    }),
    clicked: layerToRemove.isLayerHovered(clicked) ? undefined : clicked,
    hoverInfo: layerToRemove.isLayerHovered(hoverInfo) ? undefined : hoverInfo,
    splitMaps: newMaps // TODO: update filters, create helper to remove layer form filter (remove layerid and dataid) if mapped

  });

  return updateAnimationDomain(newState);
};
/**
 * Reorder layer
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').reorderLayerUpdater}
 * @public
 */


exports.removeLayerUpdater = removeLayerUpdater;

var reorderLayerUpdater = function reorderLayerUpdater(state, _ref7) {
  var order = _ref7.order;
  return _objectSpread(_objectSpread({}, state), {}, {
    layerOrder: order
  });
};
/**
 * Remove a dataset and all layers, filters, tooltip configs that based on it
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').removeDatasetUpdater}
 * @public
 */


exports.reorderLayerUpdater = reorderLayerUpdater;

var removeDatasetUpdater = function removeDatasetUpdater(state, action) {
  // extract dataset key
  var datasetKey = action.dataId;
  var datasets = state.datasets; // check if dataset is present

  if (!datasets[datasetKey]) {
    return state;
  }
  /* eslint-disable no-unused-vars */


  var layers = state.layers,
      _state$datasets = state.datasets,
      dataset = _state$datasets[datasetKey],
      newDatasets = (0, _objectWithoutProperties2["default"])(_state$datasets, [datasetKey].map(_toPropertyKey));
  /* eslint-enable no-unused-vars */

  var indexes = layers.reduce(function (listOfIndexes, layer, index) {
    if (layer.config.dataId === datasetKey) {
      listOfIndexes.push(index);
    }

    return listOfIndexes;
  }, []); // remove layers and datasets

  var _indexes$reduce = indexes.reduce(function (_ref8, idx) {
    var currentState = _ref8.newState,
        indexCounter = _ref8.indexCounter;
    var currentIndex = idx - indexCounter;
    currentState = removeLayerUpdater(currentState, {
      idx: currentIndex
    });
    indexCounter++;
    return {
      newState: currentState,
      indexCounter: indexCounter
    };
  }, {
    newState: _objectSpread(_objectSpread({}, state), {}, {
      datasets: newDatasets
    }),
    indexCounter: 0
  }),
      newState = _indexes$reduce.newState; // remove filters


  var filters = state.filters.filter(function (filter) {
    return !filter.dataId.includes(datasetKey);
  }); // update interactionConfig

  var interactionConfig = state.interactionConfig;
  var _interactionConfig = interactionConfig,
      tooltip = _interactionConfig.tooltip;

  if (tooltip) {
    var config = tooltip.config;
    /* eslint-disable no-unused-vars */

    var _config$fieldsToShow = config.fieldsToShow,
        fields = _config$fieldsToShow[datasetKey],
        fieldsToShow = (0, _objectWithoutProperties2["default"])(_config$fieldsToShow, [datasetKey].map(_toPropertyKey));
    /* eslint-enable no-unused-vars */

    interactionConfig = _objectSpread(_objectSpread({}, interactionConfig), {}, {
      tooltip: _objectSpread(_objectSpread({}, tooltip), {}, {
        config: _objectSpread(_objectSpread({}, config), {}, {
          fieldsToShow: fieldsToShow
        })
      })
    });
  }

  return _objectSpread(_objectSpread({}, newState), {}, {
    filters: filters,
    interactionConfig: interactionConfig
  });
};
/**
 * update layer blending mode
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').updateLayerBlendingUpdater}
 * @public
 */


exports.removeDatasetUpdater = removeDatasetUpdater;

var updateLayerBlendingUpdater = function updateLayerBlendingUpdater(state, action) {
  return _objectSpread(_objectSpread({}, state), {}, {
    layerBlending: action.mode
  });
};
/**
 * Display dataset table in a modal
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').showDatasetTableUpdater}
 * @public
 */


exports.updateLayerBlendingUpdater = updateLayerBlendingUpdater;

var showDatasetTableUpdater = function showDatasetTableUpdater(state, action) {
  return _objectSpread(_objectSpread({}, state), {}, {
    editingDataset: action.dataId
  });
};
/**
 * reset visState to initial State
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').resetMapConfigUpdater}
 * @public
 */


exports.showDatasetTableUpdater = showDatasetTableUpdater;

var resetMapConfigUpdater = function resetMapConfigUpdater(state) {
  return _objectSpread(_objectSpread(_objectSpread({}, INITIAL_VIS_STATE), state.initialState), {}, {
    initialState: state.initialState
  });
};
/**
 * Propagate `visState` reducer with a new configuration. Current config will be override.
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').receiveMapConfigUpdater}
 * @public
 */


exports.resetMapConfigUpdater = resetMapConfigUpdater;

var receiveMapConfigUpdater = function receiveMapConfigUpdater(state, _ref9) {
  var _ref9$payload = _ref9.payload,
      _ref9$payload$config = _ref9$payload.config,
      config = _ref9$payload$config === void 0 ? {} : _ref9$payload$config,
      _ref9$payload$options = _ref9$payload.options,
      options = _ref9$payload$options === void 0 ? {} : _ref9$payload$options;

  if (!config.visState) {
    return state;
  }

  var _config$visState = config.visState,
      filters = _config$visState.filters,
      layers = _config$visState.layers,
      interactionConfig = _config$visState.interactionConfig,
      layerBlending = _config$visState.layerBlending,
      splitMaps = _config$visState.splitMaps,
      animationConfig = _config$visState.animationConfig;
  var keepExistingConfig = options.keepExistingConfig; // reset config if keepExistingConfig is falsy

  var mergedState = !keepExistingConfig ? resetMapConfigUpdater(state) : state;
  mergedState = (0, _visStateMerger.mergeLayers)(mergedState, layers);
  mergedState = (0, _visStateMerger.mergeFilters)(mergedState, filters);
  mergedState = (0, _visStateMerger.mergeInteractions)(mergedState, interactionConfig);
  mergedState = (0, _visStateMerger.mergeLayerBlending)(mergedState, layerBlending);
  mergedState = (0, _visStateMerger.mergeSplitMaps)(mergedState, splitMaps);
  mergedState = (0, _visStateMerger.mergeAnimationConfig)(mergedState, animationConfig);
  return mergedState;
};
/**
 * Trigger layer hover event with hovered object
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').layerHoverUpdater}
 * @public
 */


exports.receiveMapConfigUpdater = receiveMapConfigUpdater;

var layerHoverUpdater = function layerHoverUpdater(state, action) {
  return _objectSpread(_objectSpread({}, state), {}, {
    hoverInfo: action.info
  });
};
/* eslint-enable max-statements */

/**
 * Update `interactionConfig`
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').interactionConfigChangeUpdater}
 * @public
 */


exports.layerHoverUpdater = layerHoverUpdater;

function interactionConfigChangeUpdater(state, action) {
  var config = action.config;

  var interactionConfig = _objectSpread(_objectSpread({}, state.interactionConfig), (0, _defineProperty2["default"])({}, config.id, config)); // Don't enable tooltip and brush at the same time
  // but coordinates can be shown at all time


  var contradict = ['brush', 'tooltip'];

  if (contradict.includes(config.id) && config.enabled && !state.interactionConfig[config.id].enabled) {
    // only enable one interaction at a time
    contradict.forEach(function (k) {
      if (k !== config.id) {
        interactionConfig[k] = _objectSpread(_objectSpread({}, interactionConfig[k]), {}, {
          enabled: false
        });
      }
    });
  }

  var newState = _objectSpread(_objectSpread({}, state), {}, {
    interactionConfig: interactionConfig
  });

  if (config.id === 'geocoder' && !config.enabled) {
    return removeDatasetUpdater(newState, {
      dataId: 'geocoder_dataset'
    });
  }

  return newState;
}
/**
 * Trigger layer click event with clicked object
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').layerClickUpdater}
 * @public
 */


var layerClickUpdater = function layerClickUpdater(state, action) {
  return _objectSpread(_objectSpread({}, state), {}, {
    mousePos: state.interactionConfig.coordinate.enabled ? _objectSpread(_objectSpread({}, state.mousePos), {}, {
      pinned: state.mousePos.pinned ? null : (0, _lodash["default"])(state.mousePos)
    }) : state.mousePos,
    clicked: action.info && action.info.picked ? action.info : null
  });
};
/**
 * Trigger map click event, unselect clicked object
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').mapClickUpdater}
 * @public
 */


exports.layerClickUpdater = layerClickUpdater;

var mapClickUpdater = function mapClickUpdater(state) {
  return _objectSpread(_objectSpread({}, state), {}, {
    clicked: null
  });
};
/**
 * Trigger map move event
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').mouseMoveUpdater}
 * @public
 */


exports.mapClickUpdater = mapClickUpdater;

var mouseMoveUpdater = function mouseMoveUpdater(state, _ref10) {
  var evt = _ref10.evt;

  if (Object.values(state.interactionConfig).some(function (config) {
    return config.enabled;
  })) {
    return _objectSpread(_objectSpread({}, state), {}, {
      mousePos: _objectSpread(_objectSpread({}, state.mousePos), {}, {
        mousePosition: (0, _toConsumableArray2["default"])(evt.point),
        coordinate: (0, _toConsumableArray2["default"])(evt.lngLat)
      })
    });
  }

  return state;
};
/**
 * Toggle visibility of a layer for a split map
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').toggleSplitMapUpdater}
 * @public
 */


exports.mouseMoveUpdater = mouseMoveUpdater;

var toggleSplitMapUpdater = function toggleSplitMapUpdater(state, action) {
  return state.splitMaps && state.splitMaps.length === 0 ? _objectSpread(_objectSpread({}, state), {}, {
    // maybe we should use an array to store state for a single map as well
    // if current maps length is equal to 0 it means that we are about to split the view
    splitMaps: (0, _splitMapUtils.computeSplitMapLayers)(state.layers)
  }) : closeSpecificMapAtIndex(state, action);
};
/**
 * Toggle visibility of a layer in a split map
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').toggleLayerForMapUpdater}
 * @public
 */


exports.toggleSplitMapUpdater = toggleSplitMapUpdater;

var toggleLayerForMapUpdater = function toggleLayerForMapUpdater(state, _ref11) {
  var mapIndex = _ref11.mapIndex,
      layerId = _ref11.layerId;
  var splitMaps = state.splitMaps;
  return _objectSpread(_objectSpread({}, state), {}, {
    splitMaps: splitMaps.map(function (sm, i) {
      return i === mapIndex ? _objectSpread(_objectSpread({}, splitMaps[i]), {}, {
        layers: _objectSpread(_objectSpread({}, splitMaps[i].layers), {}, (0, _defineProperty2["default"])({}, layerId, !splitMaps[i].layers[layerId]))
      }) : sm;
    })
  });
};
/**
 * Add new dataset to `visState`, with option to load a map config along with the datasets
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').updateVisDataUpdater}
 * @public
 */

/* eslint-disable max-statements */


exports.toggleLayerForMapUpdater = toggleLayerForMapUpdater;

var updateVisDataUpdater = function updateVisDataUpdater(state, action) {
  // datasets can be a single data entries or an array of multiple data entries
  var config = action.config,
      options = action.options;
  var datasets = (0, _utils.toArray)(action.datasets);
  var newDataEntries = datasets.reduce(function (accu, _ref12) {
    var _ref12$info = _ref12.info,
        info = _ref12$info === void 0 ? {} : _ref12$info,
        data = _ref12.data;
    return _objectSpread(_objectSpread({}, accu), (0, _datasetUtils.createNewDataEntry)({
      info: info,
      data: data
    }, state.datasets) || {});
  }, {});

  if (!Object.keys(newDataEntries).length) {
    return state;
  } // apply config if passed from action


  var previousState = config ? receiveMapConfigUpdater(state, {
    payload: {
      config: config,
      options: options
    }
  }) : state;

  var stateWithNewData = _objectSpread(_objectSpread({}, previousState), {}, {
    datasets: _objectSpread(_objectSpread({}, previousState.datasets), newDataEntries)
  }); // previously saved config before data loaded


  var _stateWithNewData$fil = stateWithNewData.filterToBeMerged,
      filterToBeMerged = _stateWithNewData$fil === void 0 ? [] : _stateWithNewData$fil,
      _stateWithNewData$lay = stateWithNewData.layerToBeMerged,
      layerToBeMerged = _stateWithNewData$lay === void 0 ? [] : _stateWithNewData$lay,
      _stateWithNewData$int = stateWithNewData.interactionToBeMerged,
      interactionToBeMerged = _stateWithNewData$int === void 0 ? {} : _stateWithNewData$int,
      _stateWithNewData$spl = stateWithNewData.splitMapsToBeMerged,
      splitMapsToBeMerged = _stateWithNewData$spl === void 0 ? [] : _stateWithNewData$spl; // We need to merge layers before filters because polygon filters requires layers to be loaded

  var mergedState = (0, _visStateMerger.mergeLayers)(stateWithNewData, layerToBeMerged);
  mergedState = (0, _visStateMerger.mergeFilters)(mergedState, filterToBeMerged); // merge state with saved splitMaps

  mergedState = (0, _visStateMerger.mergeSplitMaps)(mergedState, splitMapsToBeMerged);
  var newLayers = mergedState.layers.filter(function (l) {
    return l.config.dataId in newDataEntries;
  });

  if (!newLayers.length) {
    // no layer merged, find defaults
    var result = addDefaultLayers(mergedState, newDataEntries);
    mergedState = result.state;
    newLayers = result.newLayers;
  }

  if (mergedState.splitMaps.length) {
    // if map is split, add new layers to splitMaps
    newLayers = mergedState.layers.filter(function (l) {
      return l.config.dataId in newDataEntries;
    });
    mergedState = _objectSpread(_objectSpread({}, mergedState), {}, {
      splitMaps: (0, _splitMapUtils.addNewLayersToSplitMap)(mergedState.splitMaps, newLayers)
    });
  } // merge state with saved interactions


  mergedState = (0, _visStateMerger.mergeInteractions)(mergedState, interactionToBeMerged); // if no tooltips merged add default tooltips

  Object.keys(newDataEntries).forEach(function (dataId) {
    var tooltipFields = mergedState.interactionConfig.tooltip.config.fieldsToShow[dataId];

    if (!Array.isArray(tooltipFields) || !tooltipFields.length) {
      mergedState = addDefaultTooltips(mergedState, newDataEntries[dataId]);
    }
  });
  var updatedState = updateAllLayerDomainData(mergedState, Object.keys(newDataEntries), undefined); // register layer animation domain,
  // need to be called after layer data is calculated

  updatedState = updateAnimationDomain(updatedState);
  return updatedState;
};
/* eslint-enable max-statements */

/**
 * When a user clicks on the specific map closing icon
 * the application will close the selected map
 * and will merge the remaining one with the global state
 * TODO: i think in the future this action should be called merge map layers with global settings
 * @param {Object} state `visState`
 * @param {Object} action action
 * @returns {Object} nextState
 */


exports.updateVisDataUpdater = updateVisDataUpdater;

function closeSpecificMapAtIndex(state, action) {
  // retrieve layers meta data from the remaining map that we need to keep
  var indexToRetrieve = 1 - action.payload;
  var mapLayers = state.splitMaps[indexToRetrieve].layers;
  var layers = state.layers; // update layer visibility

  var newLayers = layers.map(function (layer) {
    return !mapLayers[layer.id] && layer.config.isVisible ? layer.updateLayerConfig({
      // if layer.id is not in mapLayers, it should be inVisible
      isVisible: false
    }) : layer;
  }); // delete map

  return _objectSpread(_objectSpread({}, state), {}, {
    layers: newLayers,
    splitMaps: []
  });
}
/**
 * Trigger file loading dispatch `addDataToMap` if succeed, or `loadFilesErr` if failed
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').loadFilesUpdater}
 * @public
 */


var loadFilesUpdater = function loadFilesUpdater(state, action) {
  var files = action.files,
      _action$onFinish = action.onFinish,
      onFinish = _action$onFinish === void 0 ? _visStateActions.loadFileSuccess : _action$onFinish;

  if (!files.length) {
    return state;
  }

  var fileCache = [];
  return (0, _tasks.withTask)(_objectSpread(_objectSpread({}, state), {}, {
    fileLoading: true,
    fileLoadingProgress: 0
  }), makeLoadFileTask(files.length, files, fileCache, onFinish));
};

exports.loadFilesUpdater = loadFilesUpdater;

function loadNextFileUpdater(state, action) {
  var fileCache = action.fileCache,
      filesToLoad = action.filesToLoad,
      totalCount = action.totalCount,
      onFinish = action.onFinish;
  var fileLoadingProgress = (totalCount - filesToLoad.length) / totalCount * 100;
  return (0, _tasks.withTask)(_objectSpread(_objectSpread({}, state), {}, {
    fileLoadingProgress: fileLoadingProgress
  }), makeLoadFileTask(totalCount, filesToLoad, fileCache, onFinish));
}

function makeLoadFileTask(totalCount, filesToLoad, fileCache, onFinish) {
  var _filesToLoad = (0, _toArray2["default"])(filesToLoad),
      file = _filesToLoad[0],
      remainingFilesToLoad = _filesToLoad.slice(1);

  return (0, _tasks2.LOAD_FILE_TASK)({
    file: file,
    fileCache: fileCache
  }).bimap( // success
  function (result) {
    return remainingFilesToLoad.length ? (0, _visStateActions.loadNextFile)({
      fileCache: result,
      filesToLoad: remainingFilesToLoad,
      totalCount: totalCount,
      onFinish: onFinish
    }) : onFinish(result);
  }, // error
  _visStateActions.loadFilesErr);
}
/**
 * Trigger loading file error
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').loadFilesErrUpdater}
 * @public
 */


var loadFilesErrUpdater = function loadFilesErrUpdater(state, _ref13) {
  var error = _ref13.error;
  return _objectSpread(_objectSpread({}, state), {}, {
    fileLoading: false,
    fileLoadingErr: error
  });
};
/**
 * When select dataset for export, apply cpu filter to selected dataset
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').applyCPUFilterUpdater}
 * @public
 */


exports.loadFilesErrUpdater = loadFilesErrUpdater;

var applyCPUFilterUpdater = function applyCPUFilterUpdater(state, _ref14) {
  var dataId = _ref14.dataId;
  // apply cpuFilter
  var dataIds = (0, _utils.toArray)(dataId);
  return dataIds.reduce(function (accu, id) {
    return (0, _filterUtils.filterDatasetCPU)(accu, id);
  }, state);
};
/**
 * User input to update the info of the map
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').setMapInfoUpdater}
 * @public
 */


exports.applyCPUFilterUpdater = applyCPUFilterUpdater;

var setMapInfoUpdater = function setMapInfoUpdater(state, action) {
  return _objectSpread(_objectSpread({}, state), {}, {
    mapInfo: _objectSpread(_objectSpread({}, state.mapInfo), action.info)
  });
};
/**
 * Helper function to update All layer domain and layer data of state
 * @type {typeof import('./vis-state-updaters').addDefaultLayers}
 */


exports.setMapInfoUpdater = setMapInfoUpdater;

function addDefaultLayers(state, datasets) {
  var defaultLayers = Object.values(datasets).reduce( // @ts-ignore
  function (accu, dataset) {
    return [].concat((0, _toConsumableArray2["default"])(accu), (0, _toConsumableArray2["default"])((0, _layerUtils.findDefaultLayer)(dataset, state.layerClasses) || []));
  }, []);
  return {
    state: _objectSpread(_objectSpread({}, state), {}, {
      layers: [].concat((0, _toConsumableArray2["default"])(state.layers), (0, _toConsumableArray2["default"])(defaultLayers)),
      layerOrder: [].concat((0, _toConsumableArray2["default"])(defaultLayers.map(function (_, i) {
        return state.layers.length + i;
      })), (0, _toConsumableArray2["default"])(state.layerOrder))
    }),
    newLayers: defaultLayers
  };
}
/**
 * helper function to find default tooltips
 * @param {Object} state
 * @param {Object} dataset
 * @returns {Object} nextState
 */


function addDefaultTooltips(state, dataset) {
  var tooltipFields = (0, _interactionUtils.findFieldsToShow)(dataset);

  var merged = _objectSpread(_objectSpread({}, state.interactionConfig.tooltip.config.fieldsToShow), tooltipFields);

  return (0, _utils.set)(['interactionConfig', 'tooltip', 'config', 'fieldsToShow'], merged, state);
}
/**
 * Helper function to update layer domains for an array of datasets
 * @type {typeof import('./vis-state-updaters').updateAllLayerDomainData}
 */


function updateAllLayerDomainData(state, dataId, updatedFilter) {
  var dataIds = typeof dataId === 'string' ? [dataId] : dataId;
  var newLayers = [];
  var newLayerData = [];
  state.layers.forEach(function (oldLayer, i) {
    if (oldLayer.config.dataId && dataIds.includes(oldLayer.config.dataId)) {
      // No need to recalculate layer domain if filter has fixed domain
      var newLayer = updatedFilter && updatedFilter.fixedDomain ? oldLayer : oldLayer.updateLayerDomain(state.datasets, updatedFilter);

      var _calculateLayerData4 = (0, _layerUtils.calculateLayerData)(newLayer, state, state.layerData[i]),
          layerData = _calculateLayerData4.layerData,
          layer = _calculateLayerData4.layer;

      newLayers.push(layer);
      newLayerData.push(layerData);
    } else {
      newLayers.push(oldLayer);
      newLayerData.push(state.layerData[i]);
    }
  });

  var newState = _objectSpread(_objectSpread({}, state), {}, {
    layers: newLayers,
    layerData: newLayerData
  });

  return newState;
}

function updateAnimationDomain(state) {
  // merge all animatable layer domain and update global config
  var animatableLayers = state.layers.filter(function (l) {
    return l.config.isVisible && l.config.animation && l.config.animation.enabled && Array.isArray(l.animationDomain);
  });

  if (!animatableLayers.length) {
    return _objectSpread(_objectSpread({}, state), {}, {
      animationConfig: DEFAULT_ANIMATION_CONFIG
    });
  }

  var mergedDomain = animatableLayers.reduce(function (accu, layer) {
    return [Math.min(accu[0], layer.animationDomain[0]), Math.max(accu[1], layer.animationDomain[1])];
  }, [Number(Infinity), -Infinity]);
  return _objectSpread(_objectSpread({}, state), {}, {
    animationConfig: _objectSpread(_objectSpread({}, state.animationConfig), {}, {
      currentTime: (0, _filterUtils.isInRange)(state.animationConfig.currentTime, mergedDomain) ? state.animationConfig.currentTime : mergedDomain[0],
      domain: mergedDomain
    })
  });
}
/**
 * Update the status of the editor
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').setEditorModeUpdater}
 */


var setEditorModeUpdater = function setEditorModeUpdater(state, _ref15) {
  var mode = _ref15.mode;
  return _objectSpread(_objectSpread({}, state), {}, {
    editor: _objectSpread(_objectSpread({}, state.editor), {}, {
      mode: mode,
      selectedFeature: null
    })
  });
}; // const featureToFilterValue = (feature) => ({...feature, id: feature.id});

/**
 * Update editor features
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').setFeaturesUpdater}
 */


exports.setEditorModeUpdater = setEditorModeUpdater;

function setFeaturesUpdater(state, _ref16) {
  var _ref16$features = _ref16.features,
      features = _ref16$features === void 0 ? [] : _ref16$features;
  var lastFeature = features.length && features[features.length - 1];

  var newState = _objectSpread(_objectSpread({}, state), {}, {
    editor: _objectSpread(_objectSpread({}, state.editor), {}, {
      // only save none filter features to editor
      features: features.filter(function (f) {
        return !(0, _filterUtils.getFilterIdInFeature)(f);
      }),
      mode: lastFeature && lastFeature.properties.isClosed ? _defaultSettings.EDITOR_MODES.EDIT : state.editor.mode
    })
  }); // Retrieve existing feature


  var selectedFeature = state.editor.selectedFeature; // If no feature is selected we can simply return since no operations

  if (!selectedFeature) {
    return newState;
  } // TODO: check if the feature has changed


  var feature = features.find(function (f) {
    return f.id === selectedFeature.id;
  }); // if feature is part of a filter

  var filterId = feature && (0, _filterUtils.getFilterIdInFeature)(feature);

  if (filterId && feature) {
    var featureValue = (0, _filterUtils.featureToFilterValue)(feature, filterId);
    var filterIdx = state.filters.findIndex(function (fil) {
      return fil.id === filterId;
    });
    return setFilterUpdater(newState, {
      idx: filterIdx,
      prop: 'value',
      value: featureValue
    });
  }

  return newState;
}
/**
 * Set the current selected feature
 * @memberof uiStateUpdaters
 * @type {typeof import('./vis-state-updaters').setSelectedFeatureUpdater}
 */


var setSelectedFeatureUpdater = function setSelectedFeatureUpdater(state, _ref17) {
  var feature = _ref17.feature;
  return _objectSpread(_objectSpread({}, state), {}, {
    editor: _objectSpread(_objectSpread({}, state.editor), {}, {
      selectedFeature: feature
    })
  });
};
/**
 * Delete existing feature from filters
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').deleteFeatureUpdater}
 */


exports.setSelectedFeatureUpdater = setSelectedFeatureUpdater;

function deleteFeatureUpdater(state, _ref18) {
  var feature = _ref18.feature;

  if (!feature) {
    return state;
  }

  var newState = _objectSpread(_objectSpread({}, state), {}, {
    editor: _objectSpread(_objectSpread({}, state.editor), {}, {
      selectedFeature: null
    })
  });

  if ((0, _filterUtils.getFilterIdInFeature)(feature)) {
    var filterIdx = newState.filters.findIndex(function (f) {
      return f.id === (0, _filterUtils.getFilterIdInFeature)(feature);
    });
    return filterIdx > -1 ? removeFilterUpdater(newState, {
      idx: filterIdx
    }) : newState;
  } // modify editor object


  var newEditor = _objectSpread(_objectSpread({}, state.editor), {}, {
    features: state.editor.features.filter(function (f) {
      return f.id !== feature.id;
    }),
    selectedFeature: null
  });

  return _objectSpread(_objectSpread({}, state), {}, {
    editor: newEditor
  });
}
/**
 * Toggle feature as layer filter
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').setPolygonFilterLayerUpdater}
 */


function setPolygonFilterLayerUpdater(state, payload) {
  var layer = payload.layer,
      feature = payload.feature;
  var filterId = (0, _filterUtils.getFilterIdInFeature)(feature); // let newFilter = null;

  var filterIdx;
  var newLayerId = [layer.id];
  var newState = state; // If polygon filter already exists, we need to find out if the current layer is already included

  if (filterId) {
    filterIdx = state.filters.findIndex(function (f) {
      return f.id === filterId;
    });

    if (!state.filters[filterIdx]) {
      // what if filter doesn't exist?... not possible.
      // because features in the editor is passed in from filters and editors.
      // but we will move this feature back to editor just in case
      var noneFilterFeature = _objectSpread(_objectSpread({}, feature), {}, {
        properties: _objectSpread(_objectSpread({}, feature.properties), {}, {
          filterId: null
        })
      });

      return _objectSpread(_objectSpread({}, state), {}, {
        editor: _objectSpread(_objectSpread({}, state.editor), {}, {
          features: [].concat((0, _toConsumableArray2["default"])(state.editor.features), [noneFilterFeature]),
          selectedFeature: noneFilterFeature
        })
      });
    }

    var filter = state.filters[filterIdx];
    var _filter$layerId = filter.layerId,
        layerId = _filter$layerId === void 0 ? [] : _filter$layerId;
    var isLayerIncluded = layerId.includes(layer.id);
    newLayerId = isLayerIncluded ? // if layer is included, remove it
    layerId.filter(function (l) {
      return l !== layer.id;
    }) : [].concat((0, _toConsumableArray2["default"])(layerId), [layer.id]);
  } else {
    // if we haven't create the polygon filter, create it
    var newFilter = (0, _filterUtils.generatePolygonFilter)([], feature);
    filterIdx = state.filters.length; // add feature, remove feature from eidtor

    newState = _objectSpread(_objectSpread({}, state), {}, {
      filters: [].concat((0, _toConsumableArray2["default"])(state.filters), [newFilter]),
      editor: _objectSpread(_objectSpread({}, state.editor), {}, {
        features: state.editor.features.filter(function (f) {
          return f.id !== feature.id;
        }),
        selectedFeature: newFilter.value
      })
    });
  }

  return setFilterUpdater(newState, {
    idx: filterIdx,
    prop: 'layerId',
    value: newLayerId
  });
}
/**
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').sortTableColumnUpdater}
 * @public
 */


function sortTableColumnUpdater(state, _ref19) {
  var dataId = _ref19.dataId,
      column = _ref19.column,
      mode = _ref19.mode;
  var dataset = state.datasets[dataId];

  if (!dataset) {
    return state;
  }

  if (!mode) {
    var currentMode = (0, _lodash3["default"])(dataset, ['sortColumn', column]);
    mode = currentMode ? Object.keys(_defaultSettings.SORT_ORDER).find(function (m) {
      return m !== currentMode;
    }) : _defaultSettings.SORT_ORDER.ASCENDING;
  }

  var sorted = (0, _datasetUtils.sortDatasetByColumn)(dataset, column, mode);
  return (0, _utils.set)(['datasets', dataId], sorted, state);
}
/**
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').pinTableColumnUpdater}
 * @public
 */


function pinTableColumnUpdater(state, _ref20) {
  var dataId = _ref20.dataId,
      column = _ref20.column;
  var dataset = state.datasets[dataId];

  if (!dataset) {
    return state;
  }

  var field = dataset.fields.find(function (f) {
    return f.name === column;
  });

  if (!field) {
    return state;
  }

  var pinnedColumns;

  if (Array.isArray(dataset.pinnedColumns) && dataset.pinnedColumns.includes(field.name)) {
    // unpin it
    pinnedColumns = dataset.pinnedColumns.filter(function (co) {
      return co !== field.name;
    });
  } else {
    pinnedColumns = (dataset.pinnedColumns || []).concat(field.name);
  }

  return (0, _utils.set)(['datasets', dataId, 'pinnedColumns'], pinnedColumns, state);
}
/**
 * Copy column content as strings
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').copyTableColumnUpdater}
 * @public
 */


function copyTableColumnUpdater(state, _ref21) {
  var dataId = _ref21.dataId,
      column = _ref21.column;
  var dataset = state.datasets[dataId];

  if (!dataset) {
    return state;
  }

  var fieldIdx = dataset.fields.findIndex(function (f) {
    return f.name === column;
  });

  if (fieldIdx < 0) {
    return state;
  }

  var type = dataset.fields[fieldIdx].type;
  var text = dataset.allData.map(function (d) {
    return (0, _dataUtils.parseFieldValue)(d[fieldIdx], type);
  }).join('\n');
  (0, _copyToClipboard["default"])(text);
  return state;
}
/**
 * Update editor
 * @type {typeof import('./vis-state-updaters').toggleEditorVisibilityUpdater}
 */


function toggleEditorVisibilityUpdater(state) {
  return _objectSpread(_objectSpread({}, state), {}, {
    editor: _objectSpread(_objectSpread({}, state.editor), {}, {
      visible: !state.editor.visible
    })
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWR1Y2Vycy92aXMtc3RhdGUtdXBkYXRlcnMuanMiXSwibmFtZXMiOlsidmlzU3RhdGVVcGRhdGVycyIsIkRFRkFVTFRfQU5JTUFUSU9OX0NPTkZJRyIsImRvbWFpbiIsImN1cnJlbnRUaW1lIiwic3BlZWQiLCJERUZBVUxUX0VESVRPUiIsIm1vZGUiLCJFRElUT1JfTU9ERVMiLCJEUkFXX1BPTFlHT04iLCJmZWF0dXJlcyIsInNlbGVjdGVkRmVhdHVyZSIsInZpc2libGUiLCJJTklUSUFMX1ZJU19TVEFURSIsIm1hcEluZm8iLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwibGF5ZXJzIiwibGF5ZXJEYXRhIiwibGF5ZXJUb0JlTWVyZ2VkIiwibGF5ZXJPcmRlciIsImZpbHRlcnMiLCJmaWx0ZXJUb0JlTWVyZ2VkIiwiZGF0YXNldHMiLCJlZGl0aW5nRGF0YXNldCIsInVuZGVmaW5lZCIsImludGVyYWN0aW9uQ29uZmlnIiwiaW50ZXJhY3Rpb25Ub0JlTWVyZ2VkIiwibGF5ZXJCbGVuZGluZyIsImhvdmVySW5mbyIsImNsaWNrZWQiLCJtb3VzZVBvcyIsInNwbGl0TWFwcyIsImxheWVyQ2xhc3NlcyIsIkxheWVyQ2xhc3NlcyIsImFuaW1hdGlvbkNvbmZpZyIsImVkaXRvciIsInVwZGF0ZVN0YXRlV2l0aExheWVyQW5kRGF0YSIsInN0YXRlIiwibGF5ZXIiLCJpZHgiLCJtYXAiLCJseXIiLCJpIiwiZCIsInVwZGF0ZVN0YXRlT25MYXllclZpc2liaWxpdHlDaGFuZ2UiLCJuZXdTdGF0ZSIsImxlbmd0aCIsImNvbmZpZyIsImlzVmlzaWJsZSIsImFuaW1hdGlvbiIsImVuYWJsZWQiLCJ1cGRhdGVBbmltYXRpb25Eb21haW4iLCJsYXllckNvbmZpZ0NoYW5nZVVwZGF0ZXIiLCJhY3Rpb24iLCJvbGRMYXllciIsImZpbmRJbmRleCIsImwiLCJpZCIsInByb3BzIiwiT2JqZWN0Iiwia2V5cyIsIm5ld0NvbmZpZyIsIm5ld0xheWVyIiwidXBkYXRlTGF5ZXJDb25maWciLCJzaG91bGRDYWxjdWxhdGVMYXllckRhdGEiLCJvbGRMYXllckRhdGEiLCJ1cGRhdGVMYXllckRhdGFSZXN1bHQiLCJhZGRPclJlbW92ZVRleHRMYWJlbHMiLCJuZXdGaWVsZHMiLCJ0ZXh0TGFiZWwiLCJuZXdUZXh0TGFiZWwiLCJzbGljZSIsImN1cnJlbnRGaWVsZHMiLCJ0bCIsImZpZWxkIiwibmFtZSIsImZpbHRlciIsImFkZEZpZWxkcyIsImYiLCJpbmNsdWRlcyIsImRlbGV0ZUZpZWxkcyIsImZpbmQiLCJmZCIsIkRFRkFVTFRfVEVYVF9MQUJFTCIsImFmIiwidXBkYXRlVGV4dExhYmVsUHJvcEFuZFZhbHVlIiwicHJvcCIsInZhbHVlIiwiaGFzT3duUHJvcGVydHkiLCJzcGxpY2UiLCJsYXllclRleHRMYWJlbENoYW5nZVVwZGF0ZXIiLCJsYXllclR5cGVDaGFuZ2VVcGRhdGVyIiwibmV3VHlwZSIsIm9sZElkIiwiQ29uc29sZSIsImVycm9yIiwiYXNzaWduQ29uZmlnVG9MYXllciIsInZpc0NvbmZpZ1NldHRpbmdzIiwidXBkYXRlTGF5ZXJEb21haW4iLCJzZXR0aW5ncyIsIm9sZExheWVyTWFwIiwib3RoZXJMYXllcnMiLCJsYXllclZpc3VhbENoYW5uZWxDaGFuZ2VVcGRhdGVyIiwiY2hhbm5lbCIsImRhdGFJZCIsImRhdGFzZXQiLCJ1cGRhdGVMYXllclZpc3VhbENoYW5uZWwiLCJsYXllclZpc0NvbmZpZ0NoYW5nZVVwZGF0ZXIiLCJuZXdWaXNDb25maWciLCJ2aXNDb25maWciLCJzZXRGaWx0ZXJVcGRhdGVyIiwidmFsdWVJbmRleCIsIm9sZEZpbHRlciIsIm5ld0ZpbHRlciIsImRhdGFzZXRJZHMiLCJGSUxURVJfVVBEQVRFUl9QUk9QUyIsImRhdGFzZXRJZCIsIm1lcmdlRG9tYWluIiwidXBkYXRlZEZpbHRlciIsIm5ld0RhdGFzZXQiLCJncHUiLCJsYXllcklkIiwibGF5ZXJJZERpZmZlcmVuY2UiLCJsYXllckRhdGFJZHMiLCJsaWQiLCJuZXdEYXRhSWRzIiwiZW5sYXJnZWRGaWx0ZXIiLCJlbmxhcmdlZCIsImRhdGFzZXRJZHNUb0ZpbHRlciIsIkxJTUlURURfRklMVEVSX0VGRkVDVF9QUk9QUyIsImZpbHRlcmVkRGF0YXNldHMiLCJ1cGRhdGVBbGxMYXllckRvbWFpbkRhdGEiLCJzZXRGaWx0ZXJQbG90VXBkYXRlciIsIm5ld1Byb3AiLCJwbG90VHlwZSIsImFsbERhdGEiLCJhZGRGaWx0ZXJVcGRhdGVyIiwibGF5ZXJDb2xvclVJQ2hhbmdlVXBkYXRlciIsInVwZGF0ZUxheWVyQ29sb3JVSSIsInRvZ2dsZUZpbHRlckFuaW1hdGlvblVwZGF0ZXIiLCJpc0FuaW1hdGluZyIsInVwZGF0ZUZpbHRlckFuaW1hdGlvblNwZWVkVXBkYXRlciIsInVwZGF0ZUFuaW1hdGlvblRpbWVVcGRhdGVyIiwidXBkYXRlTGF5ZXJBbmltYXRpb25TcGVlZFVwZGF0ZXIiLCJlbmxhcmdlRmlsdGVyVXBkYXRlciIsImlzRW5sYXJnZWQiLCJ0b2dnbGVGaWx0ZXJGZWF0dXJlVXBkYXRlciIsImFzc2lnbiIsInJlbW92ZUZpbHRlclVwZGF0ZXIiLCJuZXdGaWx0ZXJzIiwibmV3RWRpdG9yIiwiYWRkTGF5ZXJVcGRhdGVyIiwiZGVmYXVsdERhdGFzZXQiLCJMYXllciIsImlzQ29uZmlnQWN0aXZlIiwicmVtb3ZlTGF5ZXJVcGRhdGVyIiwibGF5ZXJUb1JlbW92ZSIsIm5ld01hcHMiLCJwaWQiLCJpc0xheWVySG92ZXJlZCIsInJlb3JkZXJMYXllclVwZGF0ZXIiLCJvcmRlciIsInJlbW92ZURhdGFzZXRVcGRhdGVyIiwiZGF0YXNldEtleSIsIm5ld0RhdGFzZXRzIiwiaW5kZXhlcyIsInJlZHVjZSIsImxpc3RPZkluZGV4ZXMiLCJpbmRleCIsInB1c2giLCJjdXJyZW50U3RhdGUiLCJpbmRleENvdW50ZXIiLCJjdXJyZW50SW5kZXgiLCJ0b29sdGlwIiwiZmllbGRzVG9TaG93IiwiZmllbGRzIiwidXBkYXRlTGF5ZXJCbGVuZGluZ1VwZGF0ZXIiLCJzaG93RGF0YXNldFRhYmxlVXBkYXRlciIsInJlc2V0TWFwQ29uZmlnVXBkYXRlciIsImluaXRpYWxTdGF0ZSIsInJlY2VpdmVNYXBDb25maWdVcGRhdGVyIiwicGF5bG9hZCIsIm9wdGlvbnMiLCJ2aXNTdGF0ZSIsImtlZXBFeGlzdGluZ0NvbmZpZyIsIm1lcmdlZFN0YXRlIiwibGF5ZXJIb3ZlclVwZGF0ZXIiLCJpbmZvIiwiaW50ZXJhY3Rpb25Db25maWdDaGFuZ2VVcGRhdGVyIiwiY29udHJhZGljdCIsImZvckVhY2giLCJrIiwibGF5ZXJDbGlja1VwZGF0ZXIiLCJjb29yZGluYXRlIiwicGlubmVkIiwicGlja2VkIiwibWFwQ2xpY2tVcGRhdGVyIiwibW91c2VNb3ZlVXBkYXRlciIsImV2dCIsInZhbHVlcyIsInNvbWUiLCJtb3VzZVBvc2l0aW9uIiwicG9pbnQiLCJsbmdMYXQiLCJ0b2dnbGVTcGxpdE1hcFVwZGF0ZXIiLCJjbG9zZVNwZWNpZmljTWFwQXRJbmRleCIsInRvZ2dsZUxheWVyRm9yTWFwVXBkYXRlciIsIm1hcEluZGV4Iiwic20iLCJ1cGRhdGVWaXNEYXRhVXBkYXRlciIsIm5ld0RhdGFFbnRyaWVzIiwiYWNjdSIsImRhdGEiLCJwcmV2aW91c1N0YXRlIiwic3RhdGVXaXRoTmV3RGF0YSIsInNwbGl0TWFwc1RvQmVNZXJnZWQiLCJuZXdMYXllcnMiLCJyZXN1bHQiLCJhZGREZWZhdWx0TGF5ZXJzIiwidG9vbHRpcEZpZWxkcyIsIkFycmF5IiwiaXNBcnJheSIsImFkZERlZmF1bHRUb29sdGlwcyIsInVwZGF0ZWRTdGF0ZSIsImluZGV4VG9SZXRyaWV2ZSIsIm1hcExheWVycyIsImxvYWRGaWxlc1VwZGF0ZXIiLCJmaWxlcyIsIm9uRmluaXNoIiwibG9hZEZpbGVTdWNjZXNzIiwiZmlsZUNhY2hlIiwiZmlsZUxvYWRpbmciLCJmaWxlTG9hZGluZ1Byb2dyZXNzIiwibWFrZUxvYWRGaWxlVGFzayIsImxvYWROZXh0RmlsZVVwZGF0ZXIiLCJmaWxlc1RvTG9hZCIsInRvdGFsQ291bnQiLCJmaWxlIiwicmVtYWluaW5nRmlsZXNUb0xvYWQiLCJiaW1hcCIsImxvYWRGaWxlc0VyciIsImxvYWRGaWxlc0VyclVwZGF0ZXIiLCJmaWxlTG9hZGluZ0VyciIsImFwcGx5Q1BVRmlsdGVyVXBkYXRlciIsImRhdGFJZHMiLCJzZXRNYXBJbmZvVXBkYXRlciIsImRlZmF1bHRMYXllcnMiLCJfIiwibWVyZ2VkIiwibmV3TGF5ZXJEYXRhIiwiZml4ZWREb21haW4iLCJhbmltYXRhYmxlTGF5ZXJzIiwiYW5pbWF0aW9uRG9tYWluIiwibWVyZ2VkRG9tYWluIiwiTWF0aCIsIm1pbiIsIm1heCIsIk51bWJlciIsIkluZmluaXR5Iiwic2V0RWRpdG9yTW9kZVVwZGF0ZXIiLCJzZXRGZWF0dXJlc1VwZGF0ZXIiLCJsYXN0RmVhdHVyZSIsInByb3BlcnRpZXMiLCJpc0Nsb3NlZCIsIkVESVQiLCJmZWF0dXJlIiwiZmlsdGVySWQiLCJmZWF0dXJlVmFsdWUiLCJmaWx0ZXJJZHgiLCJmaWwiLCJzZXRTZWxlY3RlZEZlYXR1cmVVcGRhdGVyIiwiZGVsZXRlRmVhdHVyZVVwZGF0ZXIiLCJzZXRQb2x5Z29uRmlsdGVyTGF5ZXJVcGRhdGVyIiwibmV3TGF5ZXJJZCIsIm5vbmVGaWx0ZXJGZWF0dXJlIiwiaXNMYXllckluY2x1ZGVkIiwic29ydFRhYmxlQ29sdW1uVXBkYXRlciIsImNvbHVtbiIsImN1cnJlbnRNb2RlIiwiU09SVF9PUkRFUiIsIm0iLCJBU0NFTkRJTkciLCJzb3J0ZWQiLCJwaW5UYWJsZUNvbHVtblVwZGF0ZXIiLCJwaW5uZWRDb2x1bW5zIiwiY28iLCJjb25jYXQiLCJjb3B5VGFibGVDb2x1bW5VcGRhdGVyIiwiZmllbGRJZHgiLCJ0eXBlIiwidGV4dCIsImpvaW4iLCJ0b2dnbGVFZGl0b3JWaXNpYmlsaXR5VXBkYXRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFDQTs7QUFlQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFFQTs7QUFTQTs7QUFNQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7OztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQ0E7QUFDQTs7QUFDQSxJQUFNQSxnQkFBZ0IsR0FBRyxJQUF6QjtBQUNBOztBQUVBOztBQUNPLElBQU1DLHdCQUF3QixHQUFHO0FBQ3RDQyxFQUFBQSxNQUFNLEVBQUUsSUFEOEI7QUFFdENDLEVBQUFBLFdBQVcsRUFBRSxJQUZ5QjtBQUd0Q0MsRUFBQUEsS0FBSyxFQUFFO0FBSCtCLENBQWpDO0FBTVA7OztBQUNPLElBQU1DLGNBQWMsR0FBRztBQUM1QkMsRUFBQUEsSUFBSSxFQUFFQyw4QkFBYUMsWUFEUztBQUU1QkMsRUFBQUEsUUFBUSxFQUFFLEVBRmtCO0FBRzVCQyxFQUFBQSxlQUFlLEVBQUUsSUFIVztBQUk1QkMsRUFBQUEsT0FBTyxFQUFFO0FBSm1CLENBQXZCO0FBT1A7Ozs7Ozs7OztBQU9PLElBQU1DLGlCQUFpQixHQUFHO0FBQy9CO0FBQ0FDLEVBQUFBLE9BQU8sRUFBRTtBQUNQQyxJQUFBQSxLQUFLLEVBQUUsRUFEQTtBQUVQQyxJQUFBQSxXQUFXLEVBQUU7QUFGTixHQUZzQjtBQU0vQjtBQUNBQyxFQUFBQSxNQUFNLEVBQUUsRUFQdUI7QUFRL0JDLEVBQUFBLFNBQVMsRUFBRSxFQVJvQjtBQVMvQkMsRUFBQUEsZUFBZSxFQUFFLEVBVGM7QUFVL0JDLEVBQUFBLFVBQVUsRUFBRSxFQVZtQjtBQVkvQjtBQUNBQyxFQUFBQSxPQUFPLEVBQUUsRUFic0I7QUFjL0JDLEVBQUFBLGdCQUFnQixFQUFFLEVBZGE7QUFnQi9CO0FBQ0FDLEVBQUFBLFFBQVEsRUFBRSxFQWpCcUI7QUFrQi9CQyxFQUFBQSxjQUFjLEVBQUVDLFNBbEJlO0FBb0IvQkMsRUFBQUEsaUJBQWlCLEVBQUUsOENBcEJZO0FBcUIvQkMsRUFBQUEscUJBQXFCLEVBQUVGLFNBckJRO0FBdUIvQkcsRUFBQUEsYUFBYSxFQUFFLFFBdkJnQjtBQXdCL0JDLEVBQUFBLFNBQVMsRUFBRUosU0F4Qm9CO0FBeUIvQkssRUFBQUEsT0FBTyxFQUFFTCxTQXpCc0I7QUEwQi9CTSxFQUFBQSxRQUFRLEVBQUUsRUExQnFCO0FBNEIvQjtBQUNBQyxFQUFBQSxTQUFTLEVBQUUsQ0FDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBTLEdBN0JvQjtBQXNDL0I7QUFDQTtBQUNBQyxFQUFBQSxZQUFZLEVBQUVDLG9CQXhDaUI7QUEwQy9CO0FBQ0E7QUFDQUMsRUFBQUEsZUFBZSxFQUFFakMsd0JBNUNjO0FBOEMvQmtDLEVBQUFBLE1BQU0sRUFBRTlCO0FBOUN1QixDQUExQjtBQWlEUDs7Ozs7Ozs7QUFLQSxTQUFTK0IsMkJBQVQsQ0FBcUNDLEtBQXJDLFFBQXFFO0FBQUEsTUFBeEJwQixTQUF3QixRQUF4QkEsU0FBd0I7QUFBQSxNQUFicUIsS0FBYSxRQUFiQSxLQUFhO0FBQUEsTUFBTkMsR0FBTSxRQUFOQSxHQUFNO0FBQ25FLHlDQUNLRixLQURMO0FBRUVyQixJQUFBQSxNQUFNLEVBQUVxQixLQUFLLENBQUNyQixNQUFOLENBQWF3QixHQUFiLENBQWlCLFVBQUNDLEdBQUQsRUFBTUMsQ0FBTjtBQUFBLGFBQWFBLENBQUMsS0FBS0gsR0FBTixHQUFZRCxLQUFaLEdBQW9CRyxHQUFqQztBQUFBLEtBQWpCLENBRlY7QUFHRXhCLElBQUFBLFNBQVMsRUFBRUEsU0FBUyxHQUNoQm9CLEtBQUssQ0FBQ3BCLFNBQU4sQ0FBZ0J1QixHQUFoQixDQUFvQixVQUFDRyxDQUFELEVBQUlELENBQUo7QUFBQSxhQUFXQSxDQUFDLEtBQUtILEdBQU4sR0FBWXRCLFNBQVosR0FBd0IwQixDQUFuQztBQUFBLEtBQXBCLENBRGdCLEdBRWhCTixLQUFLLENBQUNwQjtBQUxaO0FBT0Q7O0FBRU0sU0FBUzJCLGtDQUFULENBQTRDUCxLQUE1QyxFQUFtREMsS0FBbkQsRUFBMEQ7QUFDL0QsTUFBSU8sUUFBUSxHQUFHUixLQUFmOztBQUNBLE1BQUlBLEtBQUssQ0FBQ04sU0FBTixDQUFnQmUsTUFBcEIsRUFBNEI7QUFDMUJELElBQUFBLFFBQVEsbUNBQ0hSLEtBREc7QUFFTk4sTUFBQUEsU0FBUyxFQUFFTyxLQUFLLENBQUNTLE1BQU4sQ0FBYUMsU0FBYixHQUNQLDJDQUF1QlgsS0FBSyxDQUFDTixTQUE3QixFQUF3Q08sS0FBeEMsQ0FETyxHQUVQLDZDQUF5QkQsS0FBSyxDQUFDTixTQUEvQixFQUEwQ08sS0FBMUM7QUFKRSxNQUFSO0FBTUQ7O0FBRUQsTUFBSUEsS0FBSyxDQUFDUyxNQUFOLENBQWFFLFNBQWIsQ0FBdUJDLE9BQTNCLEVBQW9DO0FBQ2xDTCxJQUFBQSxRQUFRLEdBQUdNLHFCQUFxQixDQUFDZCxLQUFELENBQWhDO0FBQ0Q7O0FBRUQsU0FBT1EsUUFBUDtBQUNEO0FBRUQ7Ozs7Ozs7O0FBTU8sU0FBU08sd0JBQVQsQ0FBa0NmLEtBQWxDLEVBQXlDZ0IsTUFBekMsRUFBaUQ7QUFBQSxNQUMvQ0MsUUFEK0MsR0FDbkNELE1BRG1DLENBQy9DQyxRQUQrQztBQUV0RCxNQUFNZixHQUFHLEdBQUdGLEtBQUssQ0FBQ3JCLE1BQU4sQ0FBYXVDLFNBQWIsQ0FBdUIsVUFBQUMsQ0FBQztBQUFBLFdBQUlBLENBQUMsQ0FBQ0MsRUFBRixLQUFTSCxRQUFRLENBQUNHLEVBQXRCO0FBQUEsR0FBeEIsQ0FBWjtBQUNBLE1BQU1DLEtBQUssR0FBR0MsTUFBTSxDQUFDQyxJQUFQLENBQVlQLE1BQU0sQ0FBQ1EsU0FBbkIsQ0FBZDtBQUNBLE1BQUlDLFFBQVEsR0FBR1IsUUFBUSxDQUFDUyxpQkFBVCxDQUEyQlYsTUFBTSxDQUFDUSxTQUFsQyxDQUFmO0FBRUEsTUFBSTVDLFNBQUosQ0FOc0QsQ0FRdEQ7O0FBQ0EsTUFBSTZDLFFBQVEsQ0FBQ0Usd0JBQVQsQ0FBa0NOLEtBQWxDLENBQUosRUFBOEM7QUFDNUMsUUFBTU8sWUFBWSxHQUFHNUIsS0FBSyxDQUFDcEIsU0FBTixDQUFnQnNCLEdBQWhCLENBQXJCO0FBQ0EsUUFBTTJCLHFCQUFxQixHQUFHLG9DQUFtQkosUUFBbkIsRUFBNkJ6QixLQUE3QixFQUFvQzRCLFlBQXBDLENBQTlCO0FBRUFoRCxJQUFBQSxTQUFTLEdBQUdpRCxxQkFBcUIsQ0FBQ2pELFNBQWxDO0FBQ0E2QyxJQUFBQSxRQUFRLEdBQUdJLHFCQUFxQixDQUFDNUIsS0FBakM7QUFDRDs7QUFFRCxNQUFJTyxRQUFRLEdBQUdSLEtBQWY7O0FBQ0EsTUFBSSxlQUFlZ0IsTUFBTSxDQUFDUSxTQUExQixFQUFxQztBQUNuQ2hCLElBQUFBLFFBQVEsR0FBR0Qsa0NBQWtDLENBQUNQLEtBQUQsRUFBUXlCLFFBQVIsQ0FBN0M7QUFDRDs7QUFFRCxTQUFPMUIsMkJBQTJCLENBQUNTLFFBQUQsRUFBVztBQUMzQ1AsSUFBQUEsS0FBSyxFQUFFd0IsUUFEb0M7QUFFM0M3QyxJQUFBQSxTQUFTLEVBQVRBLFNBRjJDO0FBRzNDc0IsSUFBQUEsR0FBRyxFQUFIQTtBQUgyQyxHQUFYLENBQWxDO0FBS0Q7O0FBRUQsU0FBUzRCLHFCQUFULENBQStCQyxTQUEvQixFQUEwQ0MsU0FBMUMsRUFBcUQ7QUFDbkQsTUFBSUMsWUFBWSxHQUFHRCxTQUFTLENBQUNFLEtBQVYsRUFBbkI7QUFFQSxNQUFNQyxhQUFhLEdBQUdILFNBQVMsQ0FBQzdCLEdBQVYsQ0FBYyxVQUFBaUMsRUFBRTtBQUFBLFdBQUlBLEVBQUUsQ0FBQ0MsS0FBSCxJQUFZRCxFQUFFLENBQUNDLEtBQUgsQ0FBU0MsSUFBekI7QUFBQSxHQUFoQixFQUErQ0MsTUFBL0MsQ0FBc0QsVUFBQWpDLENBQUM7QUFBQSxXQUFJQSxDQUFKO0FBQUEsR0FBdkQsQ0FBdEI7QUFFQSxNQUFNa0MsU0FBUyxHQUFHVCxTQUFTLENBQUNRLE1BQVYsQ0FBaUIsVUFBQUUsQ0FBQztBQUFBLFdBQUksQ0FBQ04sYUFBYSxDQUFDTyxRQUFkLENBQXVCRCxDQUFDLENBQUNILElBQXpCLENBQUw7QUFBQSxHQUFsQixDQUFsQjtBQUNBLE1BQU1LLFlBQVksR0FBR1IsYUFBYSxDQUFDSSxNQUFkLENBQXFCLFVBQUFFLENBQUM7QUFBQSxXQUFJLENBQUNWLFNBQVMsQ0FBQ2EsSUFBVixDQUFlLFVBQUFDLEVBQUU7QUFBQSxhQUFJQSxFQUFFLENBQUNQLElBQUgsS0FBWUcsQ0FBaEI7QUFBQSxLQUFqQixDQUFMO0FBQUEsR0FBdEIsQ0FBckIsQ0FObUQsQ0FRbkQ7O0FBQ0FSLEVBQUFBLFlBQVksR0FBR0EsWUFBWSxDQUFDTSxNQUFiLENBQW9CLFVBQUFILEVBQUU7QUFBQSxXQUFJQSxFQUFFLENBQUNDLEtBQUgsSUFBWSxDQUFDTSxZQUFZLENBQUNELFFBQWIsQ0FBc0JOLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTQyxJQUEvQixDQUFqQjtBQUFBLEdBQXRCLENBQWY7QUFDQUwsRUFBQUEsWUFBWSxHQUFHLENBQUNBLFlBQVksQ0FBQ3hCLE1BQWQsR0FBdUIsQ0FBQ3FDLGdDQUFELENBQXZCLEdBQThDYixZQUE3RCxDQVZtRCxDQVluRDs7QUFDQUEsRUFBQUEsWUFBWSxpREFDUEEsWUFBWSxDQUFDTSxNQUFiLENBQW9CLFVBQUFILEVBQUU7QUFBQSxXQUFJQSxFQUFFLENBQUNDLEtBQVA7QUFBQSxHQUF0QixDQURPLHVDQUVQRyxTQUFTLENBQUNyQyxHQUFWLENBQWMsVUFBQTRDLEVBQUU7QUFBQSwyQ0FDZEQsZ0NBRGM7QUFFakJULE1BQUFBLEtBQUssRUFBRVU7QUFGVTtBQUFBLEdBQWhCLENBRk8sRUFBWjtBQVFBLFNBQU9kLFlBQVA7QUFDRDs7QUFFRCxTQUFTZSwyQkFBVCxDQUFxQzlDLEdBQXJDLEVBQTBDK0MsSUFBMUMsRUFBZ0RDLEtBQWhELEVBQXVEbEIsU0FBdkQsRUFBa0U7QUFDaEUsTUFBSSxDQUFDQSxTQUFTLENBQUM5QixHQUFELENBQVQsQ0FBZWlELGNBQWYsQ0FBOEJGLElBQTlCLENBQUwsRUFBMEM7QUFDeEMsV0FBT2pCLFNBQVA7QUFDRDs7QUFFRCxNQUFJQyxZQUFZLEdBQUdELFNBQVMsQ0FBQ0UsS0FBVixFQUFuQjs7QUFFQSxNQUFJZSxJQUFJLEtBQUtDLEtBQUssSUFBSWxCLFNBQVMsQ0FBQ3ZCLE1BQVYsS0FBcUIsQ0FBbkMsQ0FBUixFQUErQztBQUM3Q3dCLElBQUFBLFlBQVksR0FBR0QsU0FBUyxDQUFDN0IsR0FBVixDQUFjLFVBQUNpQyxFQUFELEVBQUsvQixDQUFMO0FBQUEsYUFBWUEsQ0FBQyxLQUFLSCxHQUFOLG1DQUFnQmtDLEVBQWhCLDRDQUFxQmEsSUFBckIsRUFBNEJDLEtBQTVCLEtBQXFDZCxFQUFqRDtBQUFBLEtBQWQsQ0FBZjtBQUNELEdBRkQsTUFFTyxJQUFJYSxJQUFJLEtBQUssT0FBVCxJQUFvQkMsS0FBSyxLQUFLLElBQTlCLElBQXNDbEIsU0FBUyxDQUFDdkIsTUFBVixHQUFtQixDQUE3RCxFQUFnRTtBQUNyRTtBQUNBd0IsSUFBQUEsWUFBWSxDQUFDbUIsTUFBYixDQUFvQmxELEdBQXBCLEVBQXlCLENBQXpCO0FBQ0Q7O0FBRUQsU0FBTytCLFlBQVA7QUFDRDtBQUVEOzs7Ozs7OztBQU1PLFNBQVNvQiwyQkFBVCxDQUFxQ3JELEtBQXJDLEVBQTRDZ0IsTUFBNUMsRUFBb0Q7QUFBQSxNQUNsREMsUUFEa0QsR0FDcEJELE1BRG9CLENBQ2xEQyxRQURrRDtBQUFBLE1BQ3hDZixHQUR3QyxHQUNwQmMsTUFEb0IsQ0FDeENkLEdBRHdDO0FBQUEsTUFDbkMrQyxJQURtQyxHQUNwQmpDLE1BRG9CLENBQ25DaUMsSUFEbUM7QUFBQSxNQUM3QkMsS0FENkIsR0FDcEJsQyxNQURvQixDQUM3QmtDLEtBRDZCO0FBQUEsTUFFbERsQixTQUZrRCxHQUVyQ2YsUUFBUSxDQUFDUCxNQUY0QixDQUVsRHNCLFNBRmtEO0FBSXpELE1BQUlDLFlBQVksR0FBR0QsU0FBUyxDQUFDRSxLQUFWLEVBQW5COztBQUNBLE1BQUksQ0FBQ0YsU0FBUyxDQUFDOUIsR0FBRCxDQUFWLElBQW1CQSxHQUFHLEtBQUs4QixTQUFTLENBQUN2QixNQUF6QyxFQUFpRDtBQUMvQztBQUNBd0IsSUFBQUEsWUFBWSxpREFBT0QsU0FBUCxJQUFrQmMsZ0NBQWxCLEVBQVo7QUFDRDs7QUFFRCxNQUFJNUMsR0FBRyxLQUFLLEtBQVIsSUFBaUIrQyxJQUFJLEtBQUssUUFBOUIsRUFBd0M7QUFDdENoQixJQUFBQSxZQUFZLEdBQUdILHFCQUFxQixDQUFDb0IsS0FBRCxFQUFRbEIsU0FBUixDQUFwQztBQUNELEdBRkQsTUFFTztBQUNMQyxJQUFBQSxZQUFZLEdBQUdlLDJCQUEyQixDQUFDOUMsR0FBRCxFQUFNK0MsSUFBTixFQUFZQyxLQUFaLEVBQW1CakIsWUFBbkIsQ0FBMUM7QUFDRCxHQWR3RCxDQWdCekQ7OztBQUNBLFNBQU9sQix3QkFBd0IsQ0FBQ2YsS0FBRCxFQUFRO0FBQ3JDaUIsSUFBQUEsUUFBUSxFQUFSQSxRQURxQztBQUVyQ08sSUFBQUEsU0FBUyxFQUFFO0FBQUNRLE1BQUFBLFNBQVMsRUFBRUM7QUFBWjtBQUYwQixHQUFSLENBQS9CO0FBSUQ7QUFFRDs7Ozs7Ozs7QUFNTyxTQUFTcUIsc0JBQVQsQ0FBZ0N0RCxLQUFoQyxFQUF1Q2dCLE1BQXZDLEVBQStDO0FBQUEsTUFDN0NDLFFBRDZDLEdBQ3hCRCxNQUR3QixDQUM3Q0MsUUFENkM7QUFBQSxNQUNuQ3NDLE9BRG1DLEdBQ3hCdkMsTUFEd0IsQ0FDbkN1QyxPQURtQzs7QUFFcEQsTUFBSSxDQUFDdEMsUUFBTCxFQUFlO0FBQ2IsV0FBT2pCLEtBQVA7QUFDRDs7QUFDRCxNQUFNd0QsS0FBSyxHQUFHdkMsUUFBUSxDQUFDRyxFQUF2QjtBQUNBLE1BQU1sQixHQUFHLEdBQUdGLEtBQUssQ0FBQ3JCLE1BQU4sQ0FBYXVDLFNBQWIsQ0FBdUIsVUFBQUMsQ0FBQztBQUFBLFdBQUlBLENBQUMsQ0FBQ0MsRUFBRixLQUFTb0MsS0FBYjtBQUFBLEdBQXhCLENBQVo7O0FBRUEsTUFBSSxDQUFDeEQsS0FBSyxDQUFDTCxZQUFOLENBQW1CNEQsT0FBbkIsQ0FBTCxFQUFrQztBQUNoQ0Usb0JBQVFDLEtBQVIsV0FBaUJILE9BQWpCOztBQUNBLFdBQU92RCxLQUFQO0FBQ0QsR0FYbUQsQ0FhcEQ7QUFDQTtBQUNBOzs7QUFDQSxNQUFNeUIsUUFBUSxHQUFHLElBQUl6QixLQUFLLENBQUNMLFlBQU4sQ0FBbUI0RCxPQUFuQixDQUFKLEVBQWpCO0FBRUE5QixFQUFBQSxRQUFRLENBQUNrQyxtQkFBVCxDQUE2QjFDLFFBQVEsQ0FBQ1AsTUFBdEMsRUFBOENPLFFBQVEsQ0FBQzJDLGlCQUF2RCxFQWxCb0QsQ0FvQnBEO0FBQ0E7QUFDQTtBQUNBOztBQUNBbkMsRUFBQUEsUUFBUSxDQUFDb0MsaUJBQVQsQ0FBMkI3RCxLQUFLLENBQUNmLFFBQWpDOztBQXhCb0QsNEJBeUJ6QixvQ0FBbUJ3QyxRQUFuQixFQUE2QnpCLEtBQTdCLENBekJ5QjtBQUFBLE1BeUI3Q3BCLFNBekI2Qyx1QkF5QjdDQSxTQXpCNkM7QUFBQSxNQXlCbENxQixLQXpCa0MsdUJBeUJsQ0EsS0F6QmtDOztBQTBCcEQsTUFBSU8sUUFBUSxHQUFHVCwyQkFBMkIsQ0FBQ0MsS0FBRCxFQUFRO0FBQUNwQixJQUFBQSxTQUFTLEVBQVRBLFNBQUQ7QUFBWXFCLElBQUFBLEtBQUssRUFBTEEsS0FBWjtBQUFtQkMsSUFBQUEsR0FBRyxFQUFIQTtBQUFuQixHQUFSLENBQTFDOztBQUVBLE1BQUlELEtBQUssQ0FBQ1MsTUFBTixDQUFhRSxTQUFiLENBQXVCQyxPQUF2QixJQUFrQ0ksUUFBUSxDQUFDUCxNQUFULENBQWdCRSxTQUFoQixDQUEwQkMsT0FBaEUsRUFBeUU7QUFDdkVMLElBQUFBLFFBQVEsR0FBR00scUJBQXFCLENBQUNOLFFBQUQsQ0FBaEM7QUFDRCxHQTlCbUQsQ0FnQ3BEOzs7QUFDQSxNQUFJUixLQUFLLENBQUNOLFNBQU4sQ0FBZ0JlLE1BQXBCLEVBQTRCO0FBQzFCRCxJQUFBQSxRQUFRLG1DQUNIQSxRQURHO0FBRU5kLE1BQUFBLFNBQVMsRUFBRWMsUUFBUSxDQUFDZCxTQUFULENBQW1CUyxHQUFuQixDQUF1QixVQUFBMkQsUUFBUSxFQUFJO0FBQUEsK0JBQ0dBLFFBQVEsQ0FBQ25GLE1BRFo7QUFBQSxZQUM1Qm9GLFdBRDRCLG9CQUNwQ1AsS0FEb0M7QUFBQSxZQUNaUSxXQURZLGdFQUNwQ1IsS0FEb0M7QUFFNUMsZUFBT0EsS0FBSyxJQUFJTSxRQUFRLENBQUNuRixNQUFsQixtQ0FFRW1GLFFBRkY7QUFHRG5GLFVBQUFBLE1BQU0sa0NBQ0RxRixXQURDLDRDQUVIL0QsS0FBSyxDQUFDbUIsRUFGSCxFQUVRMkMsV0FGUjtBQUhMLGFBUUhELFFBUko7QUFTRCxPQVhVO0FBRkwsTUFBUjtBQWVEOztBQUVELFNBQU90RCxRQUFQO0FBQ0Q7QUFFRDs7Ozs7Ozs7O0FBT08sU0FBU3lELCtCQUFULENBQXlDakUsS0FBekMsRUFBZ0RnQixNQUFoRCxFQUF3RDtBQUFBLE1BQ3REQyxRQURzRCxHQUN0QkQsTUFEc0IsQ0FDdERDLFFBRHNEO0FBQUEsTUFDNUNPLFNBRDRDLEdBQ3RCUixNQURzQixDQUM1Q1EsU0FENEM7QUFBQSxNQUNqQzBDLE9BRGlDLEdBQ3RCbEQsTUFEc0IsQ0FDakNrRCxPQURpQzs7QUFFN0QsTUFBSSxDQUFDakQsUUFBUSxDQUFDUCxNQUFULENBQWdCeUQsTUFBckIsRUFBNkI7QUFDM0IsV0FBT25FLEtBQVA7QUFDRDs7QUFDRCxNQUFNb0UsT0FBTyxHQUFHcEUsS0FBSyxDQUFDZixRQUFOLENBQWVnQyxRQUFRLENBQUNQLE1BQVQsQ0FBZ0J5RCxNQUEvQixDQUFoQjtBQUVBLE1BQU1qRSxHQUFHLEdBQUdGLEtBQUssQ0FBQ3JCLE1BQU4sQ0FBYXVDLFNBQWIsQ0FBdUIsVUFBQUMsQ0FBQztBQUFBLFdBQUlBLENBQUMsQ0FBQ0MsRUFBRixLQUFTSCxRQUFRLENBQUNHLEVBQXRCO0FBQUEsR0FBeEIsQ0FBWjtBQUNBLE1BQU1LLFFBQVEsR0FBR1IsUUFBUSxDQUFDUyxpQkFBVCxDQUEyQkYsU0FBM0IsQ0FBakI7QUFFQUMsRUFBQUEsUUFBUSxDQUFDNEMsd0JBQVQsQ0FBa0NELE9BQWxDLEVBQTJDRixPQUEzQztBQUVBLE1BQU10QyxZQUFZLEdBQUc1QixLQUFLLENBQUNwQixTQUFOLENBQWdCc0IsR0FBaEIsQ0FBckI7O0FBWjZELDZCQWFsQyxvQ0FBbUJ1QixRQUFuQixFQUE2QnpCLEtBQTdCLEVBQW9DNEIsWUFBcEMsQ0Fia0M7QUFBQSxNQWF0RGhELFNBYnNELHdCQWF0REEsU0Fic0Q7QUFBQSxNQWEzQ3FCLEtBYjJDLHdCQWEzQ0EsS0FiMkM7O0FBZTdELFNBQU9GLDJCQUEyQixDQUFDQyxLQUFELEVBQVE7QUFBQ3BCLElBQUFBLFNBQVMsRUFBVEEsU0FBRDtBQUFZcUIsSUFBQUEsS0FBSyxFQUFMQSxLQUFaO0FBQW1CQyxJQUFBQSxHQUFHLEVBQUhBO0FBQW5CLEdBQVIsQ0FBbEM7QUFDRDtBQUVEOzs7Ozs7OztBQU1PLFNBQVNvRSwyQkFBVCxDQUFxQ3RFLEtBQXJDLEVBQTRDZ0IsTUFBNUMsRUFBb0Q7QUFBQSxNQUNsREMsUUFEa0QsR0FDdENELE1BRHNDLENBQ2xEQyxRQURrRDtBQUV6RCxNQUFNZixHQUFHLEdBQUdGLEtBQUssQ0FBQ3JCLE1BQU4sQ0FBYXVDLFNBQWIsQ0FBdUIsVUFBQUMsQ0FBQztBQUFBLFdBQUlBLENBQUMsQ0FBQ0MsRUFBRixLQUFTSCxRQUFRLENBQUNHLEVBQXRCO0FBQUEsR0FBeEIsQ0FBWjtBQUNBLE1BQU1DLEtBQUssR0FBR0MsTUFBTSxDQUFDQyxJQUFQLENBQVlQLE1BQU0sQ0FBQ3VELFlBQW5CLENBQWQ7O0FBQ0EsTUFBTUEsWUFBWSxtQ0FDYnRELFFBQVEsQ0FBQ1AsTUFBVCxDQUFnQjhELFNBREgsR0FFYnhELE1BQU0sQ0FBQ3VELFlBRk0sQ0FBbEI7O0FBS0EsTUFBTTlDLFFBQVEsR0FBR1IsUUFBUSxDQUFDUyxpQkFBVCxDQUEyQjtBQUFDOEMsSUFBQUEsU0FBUyxFQUFFRDtBQUFaLEdBQTNCLENBQWpCOztBQUVBLE1BQUk5QyxRQUFRLENBQUNFLHdCQUFULENBQWtDTixLQUFsQyxDQUFKLEVBQThDO0FBQzVDLFFBQU1PLFlBQVksR0FBRzVCLEtBQUssQ0FBQ3BCLFNBQU4sQ0FBZ0JzQixHQUFoQixDQUFyQjs7QUFENEMsK0JBRWpCLG9DQUFtQnVCLFFBQW5CLEVBQTZCekIsS0FBN0IsRUFBb0M0QixZQUFwQyxDQUZpQjtBQUFBLFFBRXJDaEQsU0FGcUMsd0JBRXJDQSxTQUZxQztBQUFBLFFBRTFCcUIsS0FGMEIsd0JBRTFCQSxLQUYwQjs7QUFHNUMsV0FBT0YsMkJBQTJCLENBQUNDLEtBQUQsRUFBUTtBQUFDcEIsTUFBQUEsU0FBUyxFQUFUQSxTQUFEO0FBQVlxQixNQUFBQSxLQUFLLEVBQUxBLEtBQVo7QUFBbUJDLE1BQUFBLEdBQUcsRUFBSEE7QUFBbkIsS0FBUixDQUFsQztBQUNEOztBQUVELFNBQU9ILDJCQUEyQixDQUFDQyxLQUFELEVBQVE7QUFBQ0MsSUFBQUEsS0FBSyxFQUFFd0IsUUFBUjtBQUFrQnZCLElBQUFBLEdBQUcsRUFBSEE7QUFBbEIsR0FBUixDQUFsQztBQUNEO0FBRUQ7Ozs7Ozs7O0FBTU8sU0FBU3VFLGdCQUFULENBQTBCekUsS0FBMUIsRUFBaUNnQixNQUFqQyxFQUF5QztBQUFBLE1BQ3ZDZCxHQUR1QyxHQUNIYyxNQURHLENBQ3ZDZCxHQUR1QztBQUFBLE1BQ2xDK0MsSUFEa0MsR0FDSGpDLE1BREcsQ0FDbENpQyxJQURrQztBQUFBLE1BQzVCQyxLQUQ0QixHQUNIbEMsTUFERyxDQUM1QmtDLEtBRDRCO0FBQUEsMkJBQ0hsQyxNQURHLENBQ3JCMEQsVUFEcUI7QUFBQSxNQUNyQkEsVUFEcUIsbUNBQ1IsQ0FEUTtBQUc5QyxNQUFNQyxTQUFTLEdBQUczRSxLQUFLLENBQUNqQixPQUFOLENBQWNtQixHQUFkLENBQWxCO0FBQ0EsTUFBSTBFLFNBQVMsR0FBRyxnQkFBSSxDQUFDM0IsSUFBRCxDQUFKLEVBQVlDLEtBQVosRUFBbUJ5QixTQUFuQixDQUFoQjtBQUNBLE1BQUluRSxRQUFRLEdBQUdSLEtBQWY7QUFMOEMsbUJBTzdCNEUsU0FQNkI7QUFBQSxNQU92Q1QsTUFQdUMsY0FPdkNBLE1BUHVDLEVBUzlDOztBQUNBLE1BQUlVLFVBQVUsR0FBRyxvQkFBUVYsTUFBUixDQUFqQjs7QUFFQSxVQUFRbEIsSUFBUjtBQUNFO0FBQ0E7QUFDQTtBQUNBLFNBQUs2QixrQ0FBcUJYLE1BQTFCO0FBQ0U7QUFDQVMsTUFBQUEsU0FBUyxHQUFHLHFDQUFtQlQsTUFBbkIsQ0FBWjtBQUNBOztBQUVGLFNBQUtXLGtDQUFxQnhDLElBQTFCO0FBQ0U7QUFDQTtBQUNBO0FBQ0EsVUFBTXlDLFNBQVMsR0FBR0gsU0FBUyxDQUFDVCxNQUFWLENBQWlCTyxVQUFqQixDQUFsQjs7QUFKRixrQ0FLdUQsdUNBQ25ERSxTQURtRCxFQUVuRDVFLEtBQUssQ0FBQ2YsUUFBTixDQUFlOEYsU0FBZixDQUZtRCxFQUduRDdCLEtBSG1ELEVBSW5Ed0IsVUFKbUQsRUFLbkQ7QUFBQ00sUUFBQUEsV0FBVyxFQUFFO0FBQWQsT0FMbUQsQ0FMdkQ7QUFBQSxVQUtpQkMsYUFMakIseUJBS1MxQyxNQUxUO0FBQUEsVUFLeUMyQyxVQUx6Qyx5QkFLZ0NkLE9BTGhDOztBQVlFLFVBQUksQ0FBQ2EsYUFBTCxFQUFvQjtBQUNsQixlQUFPakYsS0FBUDtBQUNEOztBQUVENEUsTUFBQUEsU0FBUyxHQUFHSyxhQUFaOztBQUVBLFVBQUlMLFNBQVMsQ0FBQ08sR0FBZCxFQUFtQjtBQUNqQlAsUUFBQUEsU0FBUyxHQUFHLHNDQUFpQkEsU0FBakIsRUFBNEI1RSxLQUFLLENBQUNqQixPQUFsQyxDQUFaO0FBQ0E2RixRQUFBQSxTQUFTLEdBQUcsc0NBQWlCQSxTQUFqQixFQUE0QjVFLEtBQUssQ0FBQ2pCLE9BQWxDLENBQVo7QUFDRDs7QUFFRHlCLE1BQUFBLFFBQVEsR0FBRyxnQkFBSSxDQUFDLFVBQUQsRUFBYXVFLFNBQWIsQ0FBSixFQUE2QkcsVUFBN0IsRUFBeUNsRixLQUF6QyxDQUFYLENBdkJGLENBeUJFOztBQUNBOztBQUNGLFNBQUs4RSxrQ0FBcUJNLE9BQTFCO0FBQ0U7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFNQyxpQkFBaUIsR0FBRyx5QkFBSVQsU0FBUyxDQUFDUSxPQUFkLEVBQXVCVCxTQUFTLENBQUNTLE9BQWpDLENBQTFCO0FBRUEsVUFBTUUsWUFBWSxHQUFHLHlCQUNuQkQsaUJBQWlCLENBQ2RsRixHQURILENBQ08sVUFBQW9GLEdBQUc7QUFBQSxlQUNOLHlCQUNFdkYsS0FBSyxDQUFDckIsTUFBTixDQUFhaUUsSUFBYixDQUFrQixVQUFBekIsQ0FBQztBQUFBLGlCQUFJQSxDQUFDLENBQUNDLEVBQUYsS0FBU21FLEdBQWI7QUFBQSxTQUFuQixDQURGLEVBRUUsQ0FBQyxRQUFELEVBQVcsUUFBWCxDQUZGLENBRE07QUFBQSxPQURWLEVBT0doRCxNQVBILENBT1UsVUFBQWpDLENBQUM7QUFBQSxlQUFJQSxDQUFKO0FBQUEsT0FQWCxDQURtQixDQUFyQixDQVBGLENBa0JFOztBQUNBdUUsTUFBQUEsVUFBVSxHQUFHUyxZQUFiLENBbkJGLENBcUJFOztBQUNBLFVBQU1FLFVBQVUsR0FBRyx5QkFDakJaLFNBQVMsQ0FBQ1EsT0FBVixDQUNHakYsR0FESCxDQUNPLFVBQUFvRixHQUFHO0FBQUEsZUFDTix5QkFDRXZGLEtBQUssQ0FBQ3JCLE1BQU4sQ0FBYWlFLElBQWIsQ0FBa0IsVUFBQXpCLENBQUM7QUFBQSxpQkFBSUEsQ0FBQyxDQUFDQyxFQUFGLEtBQVNtRSxHQUFiO0FBQUEsU0FBbkIsQ0FERixFQUVFLENBQUMsUUFBRCxFQUFXLFFBQVgsQ0FGRixDQURNO0FBQUEsT0FEVixFQU9HaEQsTUFQSCxDQU9VLFVBQUFqQyxDQUFDO0FBQUEsZUFBSUEsQ0FBSjtBQUFBLE9BUFgsQ0FEaUIsQ0FBbkI7QUFXQXNFLE1BQUFBLFNBQVMsbUNBQ0pBLFNBREk7QUFFUFQsUUFBQUEsTUFBTSxFQUFFcUI7QUFGRCxRQUFUO0FBS0E7O0FBQ0Y7QUFDRTtBQTVFSjs7QUErRUEsTUFBTUMsY0FBYyxHQUFHekYsS0FBSyxDQUFDakIsT0FBTixDQUFjNkQsSUFBZCxDQUFtQixVQUFBSCxDQUFDO0FBQUEsV0FBSUEsQ0FBQyxDQUFDaUQsUUFBTjtBQUFBLEdBQXBCLENBQXZCOztBQUVBLE1BQUlELGNBQWMsSUFBSUEsY0FBYyxDQUFDckUsRUFBZixLQUFzQndELFNBQVMsQ0FBQ3hELEVBQXRELEVBQTBEO0FBQ3hEO0FBQ0F3RCxJQUFBQSxTQUFTLENBQUNjLFFBQVYsR0FBcUIsS0FBckI7QUFDRCxHQWhHNkMsQ0FrRzlDOzs7QUFDQWxGLEVBQUFBLFFBQVEsR0FBRyxnQkFBSSxDQUFDLFNBQUQsRUFBWU4sR0FBWixDQUFKLEVBQXNCMEUsU0FBdEIsRUFBaUNwRSxRQUFqQyxDQUFYLENBbkc4QyxDQXFHOUM7QUFDQTtBQUNBOztBQUNBLE1BQU1tRixrQkFBa0IsR0FBR0MseUNBQTRCM0MsSUFBNUIsSUFDdkIsQ0FBQzRCLFVBQVUsQ0FBQ0gsVUFBRCxDQUFYLENBRHVCLEdBRXZCRyxVQUZKLENBeEc4QyxDQTRHOUM7O0FBQ0EsTUFBTWdCLGdCQUFnQixHQUFHLHlDQUN2QkYsa0JBRHVCLEVBRXZCbkYsUUFBUSxDQUFDdkIsUUFGYyxFQUd2QnVCLFFBQVEsQ0FBQ3pCLE9BSGMsRUFJdkJ5QixRQUFRLENBQUM3QixNQUpjLENBQXpCO0FBT0E2QixFQUFBQSxRQUFRLEdBQUcsZ0JBQUksQ0FBQyxVQUFELENBQUosRUFBa0JxRixnQkFBbEIsRUFBb0NyRixRQUFwQyxDQUFYLENBcEg4QyxDQXFIOUM7QUFDQTs7QUFDQUEsRUFBQUEsUUFBUSxHQUFHc0Ysd0JBQXdCLENBQUN0RixRQUFELEVBQVdtRixrQkFBWCxFQUErQmYsU0FBL0IsQ0FBbkM7QUFFQSxTQUFPcEUsUUFBUDtBQUNEO0FBRUQ7Ozs7Ozs7O0FBTU8sSUFBTXVGLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBdUIsQ0FBQy9GLEtBQUQsU0FBMkM7QUFBQSxNQUFsQ0UsR0FBa0MsU0FBbENBLEdBQWtDO0FBQUEsTUFBN0I4RixPQUE2QixTQUE3QkEsT0FBNkI7QUFBQSwrQkFBcEJ0QixVQUFvQjtBQUFBLE1BQXBCQSxVQUFvQixpQ0FBUCxDQUFPOztBQUM3RSxNQUFJRSxTQUFTLG1DQUFPNUUsS0FBSyxDQUFDakIsT0FBTixDQUFjbUIsR0FBZCxDQUFQLEdBQThCOEYsT0FBOUIsQ0FBYjs7QUFDQSxNQUFNL0MsSUFBSSxHQUFHM0IsTUFBTSxDQUFDQyxJQUFQLENBQVl5RSxPQUFaLEVBQXFCLENBQXJCLENBQWI7O0FBQ0EsTUFBSS9DLElBQUksS0FBSyxPQUFiLEVBQXNCO0FBQ3BCLFFBQU1nRCxRQUFRLEdBQUcsMkNBQXlCckIsU0FBekIsQ0FBakIsQ0FEb0IsQ0FFcEI7O0FBQ0EsUUFBSXFCLFFBQUosRUFBYztBQUNackIsTUFBQUEsU0FBUyxpREFDSkEsU0FESSxHQUVKLGdFQUNHQSxTQURIO0FBQ2NxQixRQUFBQSxRQUFRLEVBQVJBO0FBRGQsVUFFRGpHLEtBQUssQ0FBQ2YsUUFBTixDQUFlMkYsU0FBUyxDQUFDVCxNQUFWLENBQWlCTyxVQUFqQixDQUFmLEVBQTZDd0IsT0FGNUMsQ0FGSTtBQU1QRCxRQUFBQSxRQUFRLEVBQVJBO0FBTk8sUUFBVDtBQVFEO0FBQ0Y7O0FBRUQseUNBQ0tqRyxLQURMO0FBRUVqQixJQUFBQSxPQUFPLEVBQUVpQixLQUFLLENBQUNqQixPQUFOLENBQWNvQixHQUFkLENBQWtCLFVBQUNzQyxDQUFELEVBQUlwQyxDQUFKO0FBQUEsYUFBV0EsQ0FBQyxLQUFLSCxHQUFOLEdBQVkwRSxTQUFaLEdBQXdCbkMsQ0FBbkM7QUFBQSxLQUFsQjtBQUZYO0FBSUQsQ0F0Qk07QUF3QlA7Ozs7Ozs7Ozs7QUFNTyxJQUFNMEQsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFDbkcsS0FBRCxFQUFRZ0IsTUFBUjtBQUFBLFNBQzlCLENBQUNBLE1BQU0sQ0FBQ21ELE1BQVIsR0FDSW5FLEtBREosbUNBR1NBLEtBSFQ7QUFJTWpCLElBQUFBLE9BQU8sZ0RBQU1pQixLQUFLLENBQUNqQixPQUFaLElBQXFCLG1DQUFpQmlDLE1BQU0sQ0FBQ21ELE1BQXhCLENBQXJCO0FBSmIsSUFEOEI7QUFBQSxDQUF6QjtBQVFQOzs7Ozs7Ozs7QUFLTyxJQUFNaUMseUJBQXlCLEdBQUcsU0FBNUJBLHlCQUE0QixDQUFDcEcsS0FBRCxTQUF3QztBQUFBLE1BQS9CaUIsUUFBK0IsU0FBL0JBLFFBQStCO0FBQUEsTUFBckJnQyxJQUFxQixTQUFyQkEsSUFBcUI7QUFBQSxNQUFmekIsU0FBZSxTQUFmQSxTQUFlO0FBQy9FLE1BQU1DLFFBQVEsR0FBR1IsUUFBUSxDQUFDb0Ysa0JBQVQsQ0FBNEJwRCxJQUE1QixFQUFrQ3pCLFNBQWxDLENBQWpCO0FBQ0EseUNBQ0t4QixLQURMO0FBRUVyQixJQUFBQSxNQUFNLEVBQUVxQixLQUFLLENBQUNyQixNQUFOLENBQWF3QixHQUFiLENBQWlCLFVBQUFnQixDQUFDO0FBQUEsYUFBS0EsQ0FBQyxDQUFDQyxFQUFGLEtBQVNILFFBQVEsQ0FBQ0csRUFBbEIsR0FBdUJLLFFBQXZCLEdBQWtDTixDQUF2QztBQUFBLEtBQWxCO0FBRlY7QUFJRCxDQU5NO0FBUVA7Ozs7Ozs7Ozs7QUFNTyxJQUFNbUYsNEJBQTRCLEdBQUcsU0FBL0JBLDRCQUErQixDQUFDdEcsS0FBRCxFQUFRZ0IsTUFBUjtBQUFBLHlDQUN2Q2hCLEtBRHVDO0FBRTFDakIsSUFBQUEsT0FBTyxFQUFFaUIsS0FBSyxDQUFDakIsT0FBTixDQUFjb0IsR0FBZCxDQUFrQixVQUFDc0MsQ0FBRCxFQUFJcEMsQ0FBSjtBQUFBLGFBQVdBLENBQUMsS0FBS1csTUFBTSxDQUFDZCxHQUFiLG1DQUF1QnVDLENBQXZCO0FBQTBCOEQsUUFBQUEsV0FBVyxFQUFFLENBQUM5RCxDQUFDLENBQUM4RDtBQUExQyxXQUF5RDlELENBQXBFO0FBQUEsS0FBbEI7QUFGaUM7QUFBQSxDQUFyQztBQUtQOzs7Ozs7Ozs7O0FBTU8sSUFBTStELGlDQUFpQyxHQUFHLFNBQXBDQSxpQ0FBb0MsQ0FBQ3hHLEtBQUQsRUFBUWdCLE1BQVI7QUFBQSx5Q0FDNUNoQixLQUQ0QztBQUUvQ2pCLElBQUFBLE9BQU8sRUFBRWlCLEtBQUssQ0FBQ2pCLE9BQU4sQ0FBY29CLEdBQWQsQ0FBa0IsVUFBQ3NDLENBQUQsRUFBSXBDLENBQUo7QUFBQSxhQUFXQSxDQUFDLEtBQUtXLE1BQU0sQ0FBQ2QsR0FBYixtQ0FBdUJ1QyxDQUF2QjtBQUEwQjFFLFFBQUFBLEtBQUssRUFBRWlELE1BQU0sQ0FBQ2pEO0FBQXhDLFdBQWlEMEUsQ0FBNUQ7QUFBQSxLQUFsQjtBQUZzQztBQUFBLENBQTFDO0FBS1A7Ozs7Ozs7Ozs7O0FBT08sSUFBTWdFLDBCQUEwQixHQUFHLFNBQTdCQSwwQkFBNkIsQ0FBQ3pHLEtBQUQ7QUFBQSxNQUFTa0QsS0FBVCxTQUFTQSxLQUFUO0FBQUEseUNBQ3JDbEQsS0FEcUM7QUFFeENILElBQUFBLGVBQWUsa0NBQ1ZHLEtBQUssQ0FBQ0gsZUFESTtBQUViL0IsTUFBQUEsV0FBVyxFQUFFb0Y7QUFGQTtBQUZ5QjtBQUFBLENBQW5DO0FBUVA7Ozs7Ozs7Ozs7O0FBT08sSUFBTXdELGdDQUFnQyxHQUFHLFNBQW5DQSxnQ0FBbUMsQ0FBQzFHLEtBQUQsU0FBb0I7QUFBQSxNQUFYakMsS0FBVyxTQUFYQSxLQUFXO0FBQ2xFLHlDQUNLaUMsS0FETDtBQUVFSCxJQUFBQSxlQUFlLGtDQUNWRyxLQUFLLENBQUNILGVBREk7QUFFYjlCLE1BQUFBLEtBQUssRUFBTEE7QUFGYTtBQUZqQjtBQU9ELENBUk07QUFVUDs7Ozs7Ozs7OztBQU1PLElBQU00SSxvQkFBb0IsR0FBRyxTQUF2QkEsb0JBQXVCLENBQUMzRyxLQUFELEVBQVFnQixNQUFSLEVBQW1CO0FBQ3JELE1BQU00RixVQUFVLEdBQUc1RyxLQUFLLENBQUNqQixPQUFOLENBQWNpQyxNQUFNLENBQUNkLEdBQXJCLEVBQTBCd0YsUUFBN0M7QUFFQSx5Q0FDSzFGLEtBREw7QUFFRWpCLElBQUFBLE9BQU8sRUFBRWlCLEtBQUssQ0FBQ2pCLE9BQU4sQ0FBY29CLEdBQWQsQ0FBa0IsVUFBQ3NDLENBQUQsRUFBSXBDLENBQUosRUFBVTtBQUNuQ29DLE1BQUFBLENBQUMsQ0FBQ2lELFFBQUYsR0FBYSxDQUFDa0IsVUFBRCxJQUFldkcsQ0FBQyxLQUFLVyxNQUFNLENBQUNkLEdBQXpDO0FBQ0EsYUFBT3VDLENBQVA7QUFDRCxLQUhRO0FBRlg7QUFPRCxDQVZNO0FBWVA7Ozs7Ozs7OztBQUtPLElBQU1vRSwwQkFBMEIsR0FBRyxTQUE3QkEsMEJBQTZCLENBQUM3RyxLQUFELEVBQVFnQixNQUFSLEVBQW1CO0FBQzNELE1BQU11QixNQUFNLEdBQUd2QyxLQUFLLENBQUNqQixPQUFOLENBQWNpQyxNQUFNLENBQUNkLEdBQXJCLENBQWY7QUFDQSxNQUFNUyxTQUFTLEdBQUcseUJBQUk0QixNQUFKLEVBQVksQ0FBQyxPQUFELEVBQVUsWUFBVixFQUF3QixXQUF4QixDQUFaLENBQWxCOztBQUNBLE1BQU1xQyxTQUFTLG1DQUNWckMsTUFEVTtBQUViVyxJQUFBQSxLQUFLLEVBQUUsdUNBQXFCWCxNQUFNLENBQUNXLEtBQTVCLEVBQW1DWCxNQUFNLENBQUNuQixFQUExQyxFQUE4QztBQUNuRFQsTUFBQUEsU0FBUyxFQUFFLENBQUNBO0FBRHVDLEtBQTlDO0FBRk0sSUFBZjs7QUFPQSx5Q0FDS1gsS0FETDtBQUVFakIsSUFBQUEsT0FBTyxFQUFFdUMsTUFBTSxDQUFDd0YsTUFBUCxxQ0FBa0I5RyxLQUFLLENBQUNqQixPQUF4Qix3Q0FBb0NpQyxNQUFNLENBQUNkLEdBQTNDLEVBQWlEMEUsU0FBakQ7QUFGWDtBQUlELENBZE07QUFnQlA7Ozs7Ozs7Ozs7QUFNTyxJQUFNbUMsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixDQUFDL0csS0FBRCxFQUFRZ0IsTUFBUixFQUFtQjtBQUFBLE1BQzdDZCxHQUQ2QyxHQUN0Q2MsTUFEc0MsQ0FDN0NkLEdBRDZDO0FBQUEsMkJBRS9CRixLQUFLLENBQUNqQixPQUFOLENBQWNtQixHQUFkLENBRitCO0FBQUEsTUFFN0NpRSxNQUY2QyxzQkFFN0NBLE1BRjZDO0FBQUEsTUFFckMvQyxFQUZxQyxzQkFFckNBLEVBRnFDO0FBSXBELE1BQU00RixVQUFVLGlEQUNYaEgsS0FBSyxDQUFDakIsT0FBTixDQUFjbUQsS0FBZCxDQUFvQixDQUFwQixFQUF1QmhDLEdBQXZCLENBRFcsdUNBRVhGLEtBQUssQ0FBQ2pCLE9BQU4sQ0FBY21ELEtBQWQsQ0FBb0JoQyxHQUFHLEdBQUcsQ0FBMUIsRUFBNkJGLEtBQUssQ0FBQ2pCLE9BQU4sQ0FBYzBCLE1BQTNDLENBRlcsRUFBaEI7QUFLQSxNQUFNb0YsZ0JBQWdCLEdBQUcseUNBQXVCMUIsTUFBdkIsRUFBK0JuRSxLQUFLLENBQUNmLFFBQXJDLEVBQStDK0gsVUFBL0MsRUFBMkRoSCxLQUFLLENBQUNyQixNQUFqRSxDQUF6QjtBQUNBLE1BQU1zSSxTQUFTLEdBQ2IsdUNBQXFCakgsS0FBSyxDQUFDRixNQUFOLENBQWF6QixlQUFsQyxNQUF1RCtDLEVBQXZELG1DQUVTcEIsS0FBSyxDQUFDRixNQUZmO0FBR016QixJQUFBQSxlQUFlLEVBQUU7QUFIdkIsT0FLSTJCLEtBQUssQ0FBQ0YsTUFOWjtBQVFBLE1BQUlVLFFBQVEsR0FBRyxnQkFBSSxDQUFDLFNBQUQsQ0FBSixFQUFpQndHLFVBQWpCLEVBQTZCaEgsS0FBN0IsQ0FBZjtBQUNBUSxFQUFBQSxRQUFRLEdBQUcsZ0JBQUksQ0FBQyxVQUFELENBQUosRUFBa0JxRixnQkFBbEIsRUFBb0NyRixRQUFwQyxDQUFYO0FBQ0FBLEVBQUFBLFFBQVEsR0FBRyxnQkFBSSxDQUFDLFFBQUQsQ0FBSixFQUFnQnlHLFNBQWhCLEVBQTJCekcsUUFBM0IsQ0FBWDtBQUVBLFNBQU9zRix3QkFBd0IsQ0FBQ3RGLFFBQUQsRUFBVzJELE1BQVgsRUFBbUJoRixTQUFuQixDQUEvQjtBQUNELENBdkJNO0FBeUJQOzs7Ozs7Ozs7O0FBTU8sSUFBTStILGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ2xILEtBQUQsRUFBUWdCLE1BQVIsRUFBbUI7QUFDaEQsTUFBTW1HLGNBQWMsR0FBRzdGLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZdkIsS0FBSyxDQUFDZixRQUFsQixFQUE0QixDQUE1QixDQUF2QjtBQUNBLE1BQU13QyxRQUFRLEdBQUcsSUFBSTJGLGFBQUo7QUFDZnpHLElBQUFBLFNBQVMsRUFBRSxJQURJO0FBRWYwRyxJQUFBQSxjQUFjLEVBQUUsSUFGRDtBQUdmbEQsSUFBQUEsTUFBTSxFQUFFZ0Q7QUFITyxLQUlabkcsTUFBTSxDQUFDSyxLQUpLLEVBQWpCO0FBT0EseUNBQ0tyQixLQURMO0FBRUVyQixJQUFBQSxNQUFNLGdEQUFNcUIsS0FBSyxDQUFDckIsTUFBWixJQUFvQjhDLFFBQXBCLEVBRlI7QUFHRTdDLElBQUFBLFNBQVMsZ0RBQU1vQixLQUFLLENBQUNwQixTQUFaLElBQXVCLEVBQXZCLEVBSFg7QUFJRUUsSUFBQUEsVUFBVSxnREFBTWtCLEtBQUssQ0FBQ2xCLFVBQVosSUFBd0JrQixLQUFLLENBQUNsQixVQUFOLENBQWlCMkIsTUFBekMsRUFKWjtBQUtFZixJQUFBQSxTQUFTLEVBQUUsMkNBQXVCTSxLQUFLLENBQUNOLFNBQTdCLEVBQXdDK0IsUUFBeEM7QUFMYjtBQU9ELENBaEJNO0FBa0JQOzs7Ozs7Ozs7O0FBTU8sSUFBTTZGLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsQ0FBQ3RILEtBQUQsU0FBa0I7QUFBQSxNQUFURSxHQUFTLFNBQVRBLEdBQVM7QUFBQSxNQUMzQ3ZCLE1BRDJDLEdBQ0ZxQixLQURFLENBQzNDckIsTUFEMkM7QUFBQSxNQUNuQ0MsU0FEbUMsR0FDRm9CLEtBREUsQ0FDbkNwQixTQURtQztBQUFBLE1BQ3hCWSxPQUR3QixHQUNGUSxLQURFLENBQ3hCUixPQUR3QjtBQUFBLE1BQ2ZELFNBRGUsR0FDRlMsS0FERSxDQUNmVCxTQURlO0FBRWxELE1BQU1nSSxhQUFhLEdBQUd2SCxLQUFLLENBQUNyQixNQUFOLENBQWF1QixHQUFiLENBQXRCO0FBQ0EsTUFBTXNILE9BQU8sR0FBRyw2Q0FBeUJ4SCxLQUFLLENBQUNOLFNBQS9CLEVBQTBDNkgsYUFBMUMsQ0FBaEI7O0FBRUEsTUFBTS9HLFFBQVEsbUNBQ1RSLEtBRFM7QUFFWnJCLElBQUFBLE1BQU0sZ0RBQU1BLE1BQU0sQ0FBQ3VELEtBQVAsQ0FBYSxDQUFiLEVBQWdCaEMsR0FBaEIsQ0FBTix1Q0FBK0J2QixNQUFNLENBQUN1RCxLQUFQLENBQWFoQyxHQUFHLEdBQUcsQ0FBbkIsRUFBc0J2QixNQUFNLENBQUM4QixNQUE3QixDQUEvQixFQUZNO0FBR1o3QixJQUFBQSxTQUFTLGdEQUFNQSxTQUFTLENBQUNzRCxLQUFWLENBQWdCLENBQWhCLEVBQW1CaEMsR0FBbkIsQ0FBTix1Q0FBa0N0QixTQUFTLENBQUNzRCxLQUFWLENBQWdCaEMsR0FBRyxHQUFHLENBQXRCLEVBQXlCdEIsU0FBUyxDQUFDNkIsTUFBbkMsQ0FBbEMsRUFIRztBQUlaM0IsSUFBQUEsVUFBVSxFQUFFa0IsS0FBSyxDQUFDbEIsVUFBTixDQUFpQnlELE1BQWpCLENBQXdCLFVBQUFsQyxDQUFDO0FBQUEsYUFBSUEsQ0FBQyxLQUFLSCxHQUFWO0FBQUEsS0FBekIsRUFBd0NDLEdBQXhDLENBQTRDLFVBQUFzSCxHQUFHO0FBQUEsYUFBS0EsR0FBRyxHQUFHdkgsR0FBTixHQUFZdUgsR0FBRyxHQUFHLENBQWxCLEdBQXNCQSxHQUEzQjtBQUFBLEtBQS9DLENBSkE7QUFLWmpJLElBQUFBLE9BQU8sRUFBRStILGFBQWEsQ0FBQ0csY0FBZCxDQUE2QmxJLE9BQTdCLElBQXdDTCxTQUF4QyxHQUFvREssT0FMakQ7QUFNWkQsSUFBQUEsU0FBUyxFQUFFZ0ksYUFBYSxDQUFDRyxjQUFkLENBQTZCbkksU0FBN0IsSUFBMENKLFNBQTFDLEdBQXNESSxTQU5yRDtBQU9aRyxJQUFBQSxTQUFTLEVBQUU4SCxPQVBDLENBUVo7O0FBUlksSUFBZDs7QUFXQSxTQUFPMUcscUJBQXFCLENBQUNOLFFBQUQsQ0FBNUI7QUFDRCxDQWpCTTtBQW1CUDs7Ozs7Ozs7OztBQU1PLElBQU1tSCxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLENBQUMzSCxLQUFEO0FBQUEsTUFBUzRILEtBQVQsU0FBU0EsS0FBVDtBQUFBLHlDQUM5QjVILEtBRDhCO0FBRWpDbEIsSUFBQUEsVUFBVSxFQUFFOEk7QUFGcUI7QUFBQSxDQUE1QjtBQUtQOzs7Ozs7Ozs7O0FBTU8sSUFBTUMsb0JBQW9CLEdBQUcsU0FBdkJBLG9CQUF1QixDQUFDN0gsS0FBRCxFQUFRZ0IsTUFBUixFQUFtQjtBQUNyRDtBQURxRCxNQUV0QzhHLFVBRnNDLEdBRXhCOUcsTUFGd0IsQ0FFOUNtRCxNQUY4QztBQUFBLE1BRzlDbEYsUUFIOEMsR0FHbENlLEtBSGtDLENBRzlDZixRQUg4QyxFQUtyRDs7QUFDQSxNQUFJLENBQUNBLFFBQVEsQ0FBQzZJLFVBQUQsQ0FBYixFQUEyQjtBQUN6QixXQUFPOUgsS0FBUDtBQUNEO0FBRUQ7OztBQVZxRCxNQVluRHJCLE1BWm1ELEdBY2pEcUIsS0FkaUQsQ0FZbkRyQixNQVptRDtBQUFBLHdCQWNqRHFCLEtBZGlELENBYW5EZixRQWJtRDtBQUFBLE1BYTFCbUYsT0FiMEIsbUJBYXZDMEQsVUFidUM7QUFBQSxNQWFkQyxXQWJjLCtEQWF2Q0QsVUFidUM7QUFlckQ7O0FBRUEsTUFBTUUsT0FBTyxHQUFHckosTUFBTSxDQUFDc0osTUFBUCxDQUFjLFVBQUNDLGFBQUQsRUFBZ0JqSSxLQUFoQixFQUF1QmtJLEtBQXZCLEVBQWlDO0FBQzdELFFBQUlsSSxLQUFLLENBQUNTLE1BQU4sQ0FBYXlELE1BQWIsS0FBd0IyRCxVQUE1QixFQUF3QztBQUN0Q0ksTUFBQUEsYUFBYSxDQUFDRSxJQUFkLENBQW1CRCxLQUFuQjtBQUNEOztBQUNELFdBQU9ELGFBQVA7QUFDRCxHQUxlLEVBS2IsRUFMYSxDQUFoQixDQWpCcUQsQ0F3QnJEOztBQXhCcUQsd0JBeUJsQ0YsT0FBTyxDQUFDQyxNQUFSLENBQ2pCLGlCQUF5Qy9ILEdBQXpDLEVBQWlEO0FBQUEsUUFBckNtSSxZQUFxQyxTQUEvQzdILFFBQStDO0FBQUEsUUFBdkI4SCxZQUF1QixTQUF2QkEsWUFBdUI7QUFDL0MsUUFBTUMsWUFBWSxHQUFHckksR0FBRyxHQUFHb0ksWUFBM0I7QUFDQUQsSUFBQUEsWUFBWSxHQUFHZixrQkFBa0IsQ0FBQ2UsWUFBRCxFQUFlO0FBQUNuSSxNQUFBQSxHQUFHLEVBQUVxSTtBQUFOLEtBQWYsQ0FBakM7QUFDQUQsSUFBQUEsWUFBWTtBQUNaLFdBQU87QUFBQzlILE1BQUFBLFFBQVEsRUFBRTZILFlBQVg7QUFBeUJDLE1BQUFBLFlBQVksRUFBWkE7QUFBekIsS0FBUDtBQUNELEdBTmdCLEVBT2pCO0FBQUM5SCxJQUFBQSxRQUFRLGtDQUFNUixLQUFOO0FBQWFmLE1BQUFBLFFBQVEsRUFBRThJO0FBQXZCLE1BQVQ7QUFBOENPLElBQUFBLFlBQVksRUFBRTtBQUE1RCxHQVBpQixDQXpCa0M7QUFBQSxNQXlCOUM5SCxRQXpCOEMsbUJBeUI5Q0EsUUF6QjhDLEVBbUNyRDs7O0FBQ0EsTUFBTXpCLE9BQU8sR0FBR2lCLEtBQUssQ0FBQ2pCLE9BQU4sQ0FBY3dELE1BQWQsQ0FBcUIsVUFBQUEsTUFBTTtBQUFBLFdBQUksQ0FBQ0EsTUFBTSxDQUFDNEIsTUFBUCxDQUFjekIsUUFBZCxDQUF1Qm9GLFVBQXZCLENBQUw7QUFBQSxHQUEzQixDQUFoQixDQXBDcUQsQ0FzQ3JEOztBQXRDcUQsTUF1Q2hEMUksaUJBdkNnRCxHQXVDM0JZLEtBdkMyQixDQXVDaERaLGlCQXZDZ0Q7QUFBQSwyQkF3Q25DQSxpQkF4Q21DO0FBQUEsTUF3QzlDb0osT0F4QzhDLHNCQXdDOUNBLE9BeEM4Qzs7QUF5Q3JELE1BQUlBLE9BQUosRUFBYTtBQUFBLFFBQ0o5SCxNQURJLEdBQ004SCxPQUROLENBQ0o5SCxNQURJO0FBRVg7O0FBRlcsK0JBR3FDQSxNQUFNLENBQUMrSCxZQUg1QztBQUFBLFFBR1VDLE1BSFYsd0JBR0haLFVBSEc7QUFBQSxRQUdxQlcsWUFIckIsb0VBR0hYLFVBSEc7QUFJWDs7QUFDQTFJLElBQUFBLGlCQUFpQixtQ0FDWkEsaUJBRFk7QUFFZm9KLE1BQUFBLE9BQU8sa0NBQU1BLE9BQU47QUFBZTlILFFBQUFBLE1BQU0sa0NBQU1BLE1BQU47QUFBYytILFVBQUFBLFlBQVksRUFBWkE7QUFBZDtBQUFyQjtBQUZRLE1BQWpCO0FBSUQ7O0FBRUQseUNBQVdqSSxRQUFYO0FBQXFCekIsSUFBQUEsT0FBTyxFQUFQQSxPQUFyQjtBQUE4QkssSUFBQUEsaUJBQWlCLEVBQWpCQTtBQUE5QjtBQUNELENBckRNO0FBdURQOzs7Ozs7Ozs7O0FBTU8sSUFBTXVKLDBCQUEwQixHQUFHLFNBQTdCQSwwQkFBNkIsQ0FBQzNJLEtBQUQsRUFBUWdCLE1BQVI7QUFBQSx5Q0FDckNoQixLQURxQztBQUV4Q1YsSUFBQUEsYUFBYSxFQUFFMEIsTUFBTSxDQUFDL0M7QUFGa0I7QUFBQSxDQUFuQztBQUtQOzs7Ozs7Ozs7O0FBTU8sSUFBTTJLLHVCQUF1QixHQUFHLFNBQTFCQSx1QkFBMEIsQ0FBQzVJLEtBQUQsRUFBUWdCLE1BQVIsRUFBbUI7QUFDeEQseUNBQ0toQixLQURMO0FBRUVkLElBQUFBLGNBQWMsRUFBRThCLE1BQU0sQ0FBQ21EO0FBRnpCO0FBSUQsQ0FMTTtBQU9QOzs7Ozs7Ozs7O0FBTU8sSUFBTTBFLHFCQUFxQixHQUFHLFNBQXhCQSxxQkFBd0IsQ0FBQTdJLEtBQUs7QUFBQSx1REFDckN6QixpQkFEcUMsR0FFckN5QixLQUFLLENBQUM4SSxZQUYrQjtBQUd4Q0EsSUFBQUEsWUFBWSxFQUFFOUksS0FBSyxDQUFDOEk7QUFIb0I7QUFBQSxDQUFuQztBQU1QOzs7Ozs7Ozs7O0FBTU8sSUFBTUMsdUJBQXVCLEdBQUcsU0FBMUJBLHVCQUEwQixDQUFDL0ksS0FBRCxTQUFtRDtBQUFBLDRCQUExQ2dKLE9BQTBDO0FBQUEsMkNBQWhDdEksTUFBZ0M7QUFBQSxNQUFoQ0EsTUFBZ0MscUNBQXZCLEVBQXVCO0FBQUEsNENBQW5CdUksT0FBbUI7QUFBQSxNQUFuQkEsT0FBbUIsc0NBQVQsRUFBUzs7QUFDeEYsTUFBSSxDQUFDdkksTUFBTSxDQUFDd0ksUUFBWixFQUFzQjtBQUNwQixXQUFPbEosS0FBUDtBQUNEOztBQUh1Rix5QkFZcEZVLE1BQU0sQ0FBQ3dJLFFBWjZFO0FBQUEsTUFNdEZuSyxPQU5zRixvQkFNdEZBLE9BTnNGO0FBQUEsTUFPdEZKLE1BUHNGLG9CQU90RkEsTUFQc0Y7QUFBQSxNQVF0RlMsaUJBUnNGLG9CQVF0RkEsaUJBUnNGO0FBQUEsTUFTdEZFLGFBVHNGLG9CQVN0RkEsYUFUc0Y7QUFBQSxNQVV0RkksU0FWc0Ysb0JBVXRGQSxTQVZzRjtBQUFBLE1BV3RGRyxlQVhzRixvQkFXdEZBLGVBWHNGO0FBQUEsTUFjakZzSixrQkFkaUYsR0FjM0RGLE9BZDJELENBY2pGRSxrQkFkaUYsRUFnQnhGOztBQUNBLE1BQUlDLFdBQVcsR0FBRyxDQUFDRCxrQkFBRCxHQUFzQk4scUJBQXFCLENBQUM3SSxLQUFELENBQTNDLEdBQXFEQSxLQUF2RTtBQUNBb0osRUFBQUEsV0FBVyxHQUFHLGlDQUFZQSxXQUFaLEVBQXlCekssTUFBekIsQ0FBZDtBQUNBeUssRUFBQUEsV0FBVyxHQUFHLGtDQUFhQSxXQUFiLEVBQTBCckssT0FBMUIsQ0FBZDtBQUNBcUssRUFBQUEsV0FBVyxHQUFHLHVDQUFrQkEsV0FBbEIsRUFBK0JoSyxpQkFBL0IsQ0FBZDtBQUNBZ0ssRUFBQUEsV0FBVyxHQUFHLHdDQUFtQkEsV0FBbkIsRUFBZ0M5SixhQUFoQyxDQUFkO0FBQ0E4SixFQUFBQSxXQUFXLEdBQUcsb0NBQWVBLFdBQWYsRUFBNEIxSixTQUE1QixDQUFkO0FBQ0EwSixFQUFBQSxXQUFXLEdBQUcsMENBQXFCQSxXQUFyQixFQUFrQ3ZKLGVBQWxDLENBQWQ7QUFFQSxTQUFPdUosV0FBUDtBQUNELENBMUJNO0FBNEJQOzs7Ozs7Ozs7O0FBTU8sSUFBTUMsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixDQUFDckosS0FBRCxFQUFRZ0IsTUFBUjtBQUFBLHlDQUM1QmhCLEtBRDRCO0FBRS9CVCxJQUFBQSxTQUFTLEVBQUV5QixNQUFNLENBQUNzSTtBQUZhO0FBQUEsQ0FBMUI7QUFLUDs7QUFFQTs7Ozs7Ozs7OztBQU1PLFNBQVNDLDhCQUFULENBQXdDdkosS0FBeEMsRUFBK0NnQixNQUEvQyxFQUF1RDtBQUFBLE1BQ3JETixNQURxRCxHQUMzQ00sTUFEMkMsQ0FDckROLE1BRHFEOztBQUc1RCxNQUFNdEIsaUJBQWlCLG1DQUNsQlksS0FBSyxDQUFDWixpQkFEWSx3Q0FFaEJzQixNQUFNLENBQUNVLEVBRlMsRUFFSlYsTUFGSSxFQUF2QixDQUg0RCxDQVE1RDtBQUNBOzs7QUFDQSxNQUFNOEksVUFBVSxHQUFHLENBQUMsT0FBRCxFQUFVLFNBQVYsQ0FBbkI7O0FBRUEsTUFDRUEsVUFBVSxDQUFDOUcsUUFBWCxDQUFvQmhDLE1BQU0sQ0FBQ1UsRUFBM0IsS0FDQVYsTUFBTSxDQUFDRyxPQURQLElBRUEsQ0FBQ2IsS0FBSyxDQUFDWixpQkFBTixDQUF3QnNCLE1BQU0sQ0FBQ1UsRUFBL0IsRUFBbUNQLE9BSHRDLEVBSUU7QUFDQTtBQUNBMkksSUFBQUEsVUFBVSxDQUFDQyxPQUFYLENBQW1CLFVBQUFDLENBQUMsRUFBSTtBQUN0QixVQUFJQSxDQUFDLEtBQUtoSixNQUFNLENBQUNVLEVBQWpCLEVBQXFCO0FBQ25CaEMsUUFBQUEsaUJBQWlCLENBQUNzSyxDQUFELENBQWpCLG1DQUEyQnRLLGlCQUFpQixDQUFDc0ssQ0FBRCxDQUE1QztBQUFpRDdJLFVBQUFBLE9BQU8sRUFBRTtBQUExRDtBQUNEO0FBQ0YsS0FKRDtBQUtEOztBQUVELE1BQU1MLFFBQVEsbUNBQ1RSLEtBRFM7QUFFWlosSUFBQUEsaUJBQWlCLEVBQWpCQTtBQUZZLElBQWQ7O0FBS0EsTUFBSXNCLE1BQU0sQ0FBQ1UsRUFBUCxLQUFjLFVBQWQsSUFBNEIsQ0FBQ1YsTUFBTSxDQUFDRyxPQUF4QyxFQUFpRDtBQUMvQyxXQUFPZ0gsb0JBQW9CLENBQUNySCxRQUFELEVBQVc7QUFBQzJELE1BQUFBLE1BQU0sRUFBRTtBQUFULEtBQVgsQ0FBM0I7QUFDRDs7QUFFRCxTQUFPM0QsUUFBUDtBQUNEO0FBRUQ7Ozs7Ozs7O0FBTU8sSUFBTW1KLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsQ0FBQzNKLEtBQUQsRUFBUWdCLE1BQVI7QUFBQSx5Q0FDNUJoQixLQUQ0QjtBQUUvQlAsSUFBQUEsUUFBUSxFQUFFTyxLQUFLLENBQUNaLGlCQUFOLENBQXdCd0ssVUFBeEIsQ0FBbUMvSSxPQUFuQyxtQ0FFRGIsS0FBSyxDQUFDUCxRQUZMO0FBR0pvSyxNQUFBQSxNQUFNLEVBQUU3SixLQUFLLENBQUNQLFFBQU4sQ0FBZW9LLE1BQWYsR0FBd0IsSUFBeEIsR0FBK0Isd0JBQVU3SixLQUFLLENBQUNQLFFBQWhCO0FBSG5DLFNBS05PLEtBQUssQ0FBQ1AsUUFQcUI7QUFRL0JELElBQUFBLE9BQU8sRUFBRXdCLE1BQU0sQ0FBQ3NJLElBQVAsSUFBZXRJLE1BQU0sQ0FBQ3NJLElBQVAsQ0FBWVEsTUFBM0IsR0FBb0M5SSxNQUFNLENBQUNzSSxJQUEzQyxHQUFrRDtBQVI1QjtBQUFBLENBQTFCO0FBV1A7Ozs7Ozs7Ozs7QUFNTyxJQUFNUyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUEvSixLQUFLLEVBQUk7QUFDdEMseUNBQ0tBLEtBREw7QUFFRVIsSUFBQUEsT0FBTyxFQUFFO0FBRlg7QUFJRCxDQUxNO0FBT1A7Ozs7Ozs7Ozs7QUFNTyxJQUFNd0ssZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFDaEssS0FBRCxVQUFrQjtBQUFBLE1BQVRpSyxHQUFTLFVBQVRBLEdBQVM7O0FBQ2hELE1BQUkzSSxNQUFNLENBQUM0SSxNQUFQLENBQWNsSyxLQUFLLENBQUNaLGlCQUFwQixFQUF1QytLLElBQXZDLENBQTRDLFVBQUF6SixNQUFNO0FBQUEsV0FBSUEsTUFBTSxDQUFDRyxPQUFYO0FBQUEsR0FBbEQsQ0FBSixFQUEyRTtBQUN6RSwyQ0FDS2IsS0FETDtBQUVFUCxNQUFBQSxRQUFRLGtDQUNITyxLQUFLLENBQUNQLFFBREg7QUFFTjJLLFFBQUFBLGFBQWEsc0NBQU1ILEdBQUcsQ0FBQ0ksS0FBVixDQUZQO0FBR05ULFFBQUFBLFVBQVUsc0NBQU1LLEdBQUcsQ0FBQ0ssTUFBVjtBQUhKO0FBRlY7QUFRRDs7QUFFRCxTQUFPdEssS0FBUDtBQUNELENBYk07QUFjUDs7Ozs7Ozs7OztBQU1PLElBQU11SyxxQkFBcUIsR0FBRyxTQUF4QkEscUJBQXdCLENBQUN2SyxLQUFELEVBQVFnQixNQUFSO0FBQUEsU0FDbkNoQixLQUFLLENBQUNOLFNBQU4sSUFBbUJNLEtBQUssQ0FBQ04sU0FBTixDQUFnQmUsTUFBaEIsS0FBMkIsQ0FBOUMsbUNBRVNULEtBRlQ7QUFHTTtBQUNBO0FBQ0FOLElBQUFBLFNBQVMsRUFBRSwwQ0FBc0JNLEtBQUssQ0FBQ3JCLE1BQTVCO0FBTGpCLE9BT0k2TCx1QkFBdUIsQ0FBQ3hLLEtBQUQsRUFBUWdCLE1BQVIsQ0FSUTtBQUFBLENBQTlCO0FBVVA7Ozs7Ozs7Ozs7QUFNTyxJQUFNeUosd0JBQXdCLEdBQUcsU0FBM0JBLHdCQUEyQixDQUFDekssS0FBRCxVQUFnQztBQUFBLE1BQXZCMEssUUFBdUIsVUFBdkJBLFFBQXVCO0FBQUEsTUFBYnRGLE9BQWEsVUFBYkEsT0FBYTtBQUFBLE1BQy9EMUYsU0FEK0QsR0FDbERNLEtBRGtELENBQy9ETixTQUQrRDtBQUd0RSx5Q0FDS00sS0FETDtBQUVFTixJQUFBQSxTQUFTLEVBQUVBLFNBQVMsQ0FBQ1MsR0FBVixDQUFjLFVBQUN3SyxFQUFELEVBQUt0SyxDQUFMO0FBQUEsYUFDdkJBLENBQUMsS0FBS3FLLFFBQU4sbUNBRVNoTCxTQUFTLENBQUNXLENBQUQsQ0FGbEI7QUFHTTFCLFFBQUFBLE1BQU0sa0NBQ0RlLFNBQVMsQ0FBQ1csQ0FBRCxDQUFULENBQWExQixNQURaLDRDQUdIeUcsT0FIRyxFQUdPLENBQUMxRixTQUFTLENBQUNXLENBQUQsQ0FBVCxDQUFhMUIsTUFBYixDQUFvQnlHLE9BQXBCLENBSFI7QUFIWixXQVNJdUYsRUFWbUI7QUFBQSxLQUFkO0FBRmI7QUFlRCxDQWxCTTtBQW9CUDs7Ozs7OztBQU1BOzs7OztBQUNPLElBQU1DLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBdUIsQ0FBQzVLLEtBQUQsRUFBUWdCLE1BQVIsRUFBbUI7QUFDckQ7QUFEcUQsTUFFOUNOLE1BRjhDLEdBRTNCTSxNQUYyQixDQUU5Q04sTUFGOEM7QUFBQSxNQUV0Q3VJLE9BRnNDLEdBRTNCakksTUFGMkIsQ0FFdENpSSxPQUZzQztBQUlyRCxNQUFNaEssUUFBUSxHQUFHLG9CQUFRK0IsTUFBTSxDQUFDL0IsUUFBZixDQUFqQjtBQUVBLE1BQU00TCxjQUFjLEdBQUc1TCxRQUFRLENBQUNnSixNQUFULENBQ3JCLFVBQUM2QyxJQUFEO0FBQUEsNkJBQVF4QixJQUFSO0FBQUEsUUFBUUEsSUFBUiw0QkFBZSxFQUFmO0FBQUEsUUFBbUJ5QixJQUFuQixVQUFtQkEsSUFBbkI7QUFBQSwyQ0FDS0QsSUFETCxHQUVNLHNDQUFtQjtBQUFDeEIsTUFBQUEsSUFBSSxFQUFKQSxJQUFEO0FBQU95QixNQUFBQSxJQUFJLEVBQUpBO0FBQVAsS0FBbkIsRUFBaUMvSyxLQUFLLENBQUNmLFFBQXZDLEtBQW9ELEVBRjFEO0FBQUEsR0FEcUIsRUFLckIsRUFMcUIsQ0FBdkI7O0FBUUEsTUFBSSxDQUFDcUMsTUFBTSxDQUFDQyxJQUFQLENBQVlzSixjQUFaLEVBQTRCcEssTUFBakMsRUFBeUM7QUFDdkMsV0FBT1QsS0FBUDtBQUNELEdBaEJvRCxDQWtCckQ7OztBQUNBLE1BQU1nTCxhQUFhLEdBQUd0SyxNQUFNLEdBQ3hCcUksdUJBQXVCLENBQUMvSSxLQUFELEVBQVE7QUFDN0JnSixJQUFBQSxPQUFPLEVBQUU7QUFBQ3RJLE1BQUFBLE1BQU0sRUFBTkEsTUFBRDtBQUFTdUksTUFBQUEsT0FBTyxFQUFQQTtBQUFUO0FBRG9CLEdBQVIsQ0FEQyxHQUl4QmpKLEtBSko7O0FBTUEsTUFBTWlMLGdCQUFnQixtQ0FDakJELGFBRGlCO0FBRXBCL0wsSUFBQUEsUUFBUSxrQ0FDSCtMLGFBQWEsQ0FBQy9MLFFBRFgsR0FFSDRMLGNBRkc7QUFGWSxJQUF0QixDQXpCcUQsQ0FpQ3JEOzs7QUFqQ3FELDhCQXVDakRJLGdCQXZDaUQsQ0FtQ25Eak0sZ0JBbkNtRDtBQUFBLE1BbUNuREEsZ0JBbkNtRCxzQ0FtQ2hDLEVBbkNnQztBQUFBLDhCQXVDakRpTSxnQkF2Q2lELENBb0NuRHBNLGVBcENtRDtBQUFBLE1Bb0NuREEsZUFwQ21ELHNDQW9DakMsRUFwQ2lDO0FBQUEsOEJBdUNqRG9NLGdCQXZDaUQsQ0FxQ25ENUwscUJBckNtRDtBQUFBLE1BcUNuREEscUJBckNtRCxzQ0FxQzNCLEVBckMyQjtBQUFBLDhCQXVDakQ0TCxnQkF2Q2lELENBc0NuREMsbUJBdENtRDtBQUFBLE1Bc0NuREEsbUJBdENtRCxzQ0FzQzdCLEVBdEM2QiwwQkF5Q3JEOztBQUNBLE1BQUk5QixXQUFXLEdBQUcsaUNBQVk2QixnQkFBWixFQUE4QnBNLGVBQTlCLENBQWxCO0FBRUF1SyxFQUFBQSxXQUFXLEdBQUcsa0NBQWFBLFdBQWIsRUFBMEJwSyxnQkFBMUIsQ0FBZCxDQTVDcUQsQ0E4Q3JEOztBQUNBb0ssRUFBQUEsV0FBVyxHQUFHLG9DQUFlQSxXQUFmLEVBQTRCOEIsbUJBQTVCLENBQWQ7QUFFQSxNQUFJQyxTQUFTLEdBQUcvQixXQUFXLENBQUN6SyxNQUFaLENBQW1CNEQsTUFBbkIsQ0FBMEIsVUFBQXBCLENBQUM7QUFBQSxXQUFJQSxDQUFDLENBQUNULE1BQUYsQ0FBU3lELE1BQVQsSUFBbUIwRyxjQUF2QjtBQUFBLEdBQTNCLENBQWhCOztBQUVBLE1BQUksQ0FBQ00sU0FBUyxDQUFDMUssTUFBZixFQUF1QjtBQUNyQjtBQUNBLFFBQU0ySyxNQUFNLEdBQUdDLGdCQUFnQixDQUFDakMsV0FBRCxFQUFjeUIsY0FBZCxDQUEvQjtBQUNBekIsSUFBQUEsV0FBVyxHQUFHZ0MsTUFBTSxDQUFDcEwsS0FBckI7QUFDQW1MLElBQUFBLFNBQVMsR0FBR0MsTUFBTSxDQUFDRCxTQUFuQjtBQUNEOztBQUVELE1BQUkvQixXQUFXLENBQUMxSixTQUFaLENBQXNCZSxNQUExQixFQUFrQztBQUNoQztBQUNBMEssSUFBQUEsU0FBUyxHQUFHL0IsV0FBVyxDQUFDekssTUFBWixDQUFtQjRELE1BQW5CLENBQTBCLFVBQUFwQixDQUFDO0FBQUEsYUFBSUEsQ0FBQyxDQUFDVCxNQUFGLENBQVN5RCxNQUFULElBQW1CMEcsY0FBdkI7QUFBQSxLQUEzQixDQUFaO0FBQ0F6QixJQUFBQSxXQUFXLG1DQUNOQSxXQURNO0FBRVQxSixNQUFBQSxTQUFTLEVBQUUsMkNBQXVCMEosV0FBVyxDQUFDMUosU0FBbkMsRUFBOEN5TCxTQUE5QztBQUZGLE1BQVg7QUFJRCxHQWpFb0QsQ0FtRXJEOzs7QUFDQS9CLEVBQUFBLFdBQVcsR0FBRyx1Q0FBa0JBLFdBQWxCLEVBQStCL0oscUJBQS9CLENBQWQsQ0FwRXFELENBc0VyRDs7QUFDQWlDLEVBQUFBLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZc0osY0FBWixFQUE0QnBCLE9BQTVCLENBQW9DLFVBQUF0RixNQUFNLEVBQUk7QUFDNUMsUUFBTW1ILGFBQWEsR0FBR2xDLFdBQVcsQ0FBQ2hLLGlCQUFaLENBQThCb0osT0FBOUIsQ0FBc0M5SCxNQUF0QyxDQUE2QytILFlBQTdDLENBQTBEdEUsTUFBMUQsQ0FBdEI7O0FBQ0EsUUFBSSxDQUFDb0gsS0FBSyxDQUFDQyxPQUFOLENBQWNGLGFBQWQsQ0FBRCxJQUFpQyxDQUFDQSxhQUFhLENBQUM3SyxNQUFwRCxFQUE0RDtBQUMxRDJJLE1BQUFBLFdBQVcsR0FBR3FDLGtCQUFrQixDQUFDckMsV0FBRCxFQUFjeUIsY0FBYyxDQUFDMUcsTUFBRCxDQUE1QixDQUFoQztBQUNEO0FBQ0YsR0FMRDtBQU9BLE1BQUl1SCxZQUFZLEdBQUc1Rix3QkFBd0IsQ0FBQ3NELFdBQUQsRUFBYzlILE1BQU0sQ0FBQ0MsSUFBUCxDQUFZc0osY0FBWixDQUFkLEVBQTJDMUwsU0FBM0MsQ0FBM0MsQ0E5RXFELENBZ0ZyRDtBQUNBOztBQUNBdU0sRUFBQUEsWUFBWSxHQUFHNUsscUJBQXFCLENBQUM0SyxZQUFELENBQXBDO0FBRUEsU0FBT0EsWUFBUDtBQUNELENBckZNO0FBc0ZQOztBQUVBOzs7Ozs7Ozs7Ozs7O0FBU0EsU0FBU2xCLHVCQUFULENBQWlDeEssS0FBakMsRUFBd0NnQixNQUF4QyxFQUFnRDtBQUM5QztBQUNBLE1BQU0ySyxlQUFlLEdBQUcsSUFBSTNLLE1BQU0sQ0FBQ2dJLE9BQW5DO0FBQ0EsTUFBTTRDLFNBQVMsR0FBRzVMLEtBQUssQ0FBQ04sU0FBTixDQUFnQmlNLGVBQWhCLEVBQWlDaE4sTUFBbkQ7QUFIOEMsTUFJdkNBLE1BSnVDLEdBSTdCcUIsS0FKNkIsQ0FJdkNyQixNQUp1QyxFQU05Qzs7QUFDQSxNQUFNd00sU0FBUyxHQUFHeE0sTUFBTSxDQUFDd0IsR0FBUCxDQUFXLFVBQUFGLEtBQUs7QUFBQSxXQUNoQyxDQUFDMkwsU0FBUyxDQUFDM0wsS0FBSyxDQUFDbUIsRUFBUCxDQUFWLElBQXdCbkIsS0FBSyxDQUFDUyxNQUFOLENBQWFDLFNBQXJDLEdBQ0lWLEtBQUssQ0FBQ3lCLGlCQUFOLENBQXdCO0FBQ3RCO0FBQ0FmLE1BQUFBLFNBQVMsRUFBRTtBQUZXLEtBQXhCLENBREosR0FLSVYsS0FONEI7QUFBQSxHQUFoQixDQUFsQixDQVA4QyxDQWdCOUM7O0FBQ0EseUNBQ0tELEtBREw7QUFFRXJCLElBQUFBLE1BQU0sRUFBRXdNLFNBRlY7QUFHRXpMLElBQUFBLFNBQVMsRUFBRTtBQUhiO0FBS0Q7QUFFRDs7Ozs7Ozs7QUFNTyxJQUFNbU0sZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFDN0wsS0FBRCxFQUFRZ0IsTUFBUixFQUFtQjtBQUFBLE1BQzFDOEssS0FEMEMsR0FDTDlLLE1BREssQ0FDMUM4SyxLQUQwQztBQUFBLHlCQUNMOUssTUFESyxDQUNuQytLLFFBRG1DO0FBQUEsTUFDbkNBLFFBRG1DLGlDQUN4QkMsZ0NBRHdCOztBQUVqRCxNQUFJLENBQUNGLEtBQUssQ0FBQ3JMLE1BQVgsRUFBbUI7QUFDakIsV0FBT1QsS0FBUDtBQUNEOztBQUVELE1BQU1pTSxTQUFTLEdBQUcsRUFBbEI7QUFDQSxTQUFPLHFEQUVBak0sS0FGQTtBQUdIa00sSUFBQUEsV0FBVyxFQUFFLElBSFY7QUFJSEMsSUFBQUEsbUJBQW1CLEVBQUU7QUFKbEIsTUFNTEMsZ0JBQWdCLENBQUNOLEtBQUssQ0FBQ3JMLE1BQVAsRUFBZXFMLEtBQWYsRUFBc0JHLFNBQXRCLEVBQWlDRixRQUFqQyxDQU5YLENBQVA7QUFRRCxDQWZNOzs7O0FBaUJBLFNBQVNNLG1CQUFULENBQTZCck0sS0FBN0IsRUFBb0NnQixNQUFwQyxFQUE0QztBQUFBLE1BQzFDaUwsU0FEMEMsR0FDTWpMLE1BRE4sQ0FDMUNpTCxTQUQwQztBQUFBLE1BQy9CSyxXQUQrQixHQUNNdEwsTUFETixDQUMvQnNMLFdBRCtCO0FBQUEsTUFDbEJDLFVBRGtCLEdBQ012TCxNQUROLENBQ2xCdUwsVUFEa0I7QUFBQSxNQUNOUixRQURNLEdBQ00vSyxNQUROLENBQ04rSyxRQURNO0FBRWpELE1BQU1JLG1CQUFtQixHQUFJLENBQUNJLFVBQVUsR0FBR0QsV0FBVyxDQUFDN0wsTUFBMUIsSUFBb0M4TCxVQUFyQyxHQUFtRCxHQUEvRTtBQUVBLFNBQU8scURBRUF2TSxLQUZBO0FBR0htTSxJQUFBQSxtQkFBbUIsRUFBbkJBO0FBSEcsTUFLTEMsZ0JBQWdCLENBQUNHLFVBQUQsRUFBYUQsV0FBYixFQUEwQkwsU0FBMUIsRUFBcUNGLFFBQXJDLENBTFgsQ0FBUDtBQU9EOztBQUVNLFNBQVNLLGdCQUFULENBQTBCRyxVQUExQixFQUFzQ0QsV0FBdEMsRUFBbURMLFNBQW5ELEVBQThERixRQUE5RCxFQUF3RTtBQUFBLCtDQUNyQ08sV0FEcUM7QUFBQSxNQUN0RUUsSUFEc0U7QUFBQSxNQUM3REMsb0JBRDZEOztBQUc3RSxTQUFPLDRCQUFlO0FBQUNELElBQUFBLElBQUksRUFBSkEsSUFBRDtBQUFPUCxJQUFBQSxTQUFTLEVBQVRBO0FBQVAsR0FBZixFQUFrQ1MsS0FBbEMsRUFDTDtBQUNBLFlBQUF0QixNQUFNO0FBQUEsV0FDSnFCLG9CQUFvQixDQUFDaE0sTUFBckIsR0FDSSxtQ0FBYTtBQUNYd0wsTUFBQUEsU0FBUyxFQUFFYixNQURBO0FBRVhrQixNQUFBQSxXQUFXLEVBQUVHLG9CQUZGO0FBR1hGLE1BQUFBLFVBQVUsRUFBVkEsVUFIVztBQUlYUixNQUFBQSxRQUFRLEVBQVJBO0FBSlcsS0FBYixDQURKLEdBT0lBLFFBQVEsQ0FBQ1gsTUFBRCxDQVJSO0FBQUEsR0FGRCxFQVdMO0FBQ0F1QiwrQkFaSyxDQUFQO0FBY0Q7QUFFRDs7Ozs7Ozs7QUFNTyxJQUFNQyxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLENBQUM1TSxLQUFEO0FBQUEsTUFBUzBELEtBQVQsVUFBU0EsS0FBVDtBQUFBLHlDQUM5QjFELEtBRDhCO0FBRWpDa00sSUFBQUEsV0FBVyxFQUFFLEtBRm9CO0FBR2pDVyxJQUFBQSxjQUFjLEVBQUVuSjtBQUhpQjtBQUFBLENBQTVCO0FBTVA7Ozs7Ozs7Ozs7QUFNTyxJQUFNb0oscUJBQXFCLEdBQUcsU0FBeEJBLHFCQUF3QixDQUFDOU0sS0FBRCxVQUFxQjtBQUFBLE1BQVptRSxNQUFZLFVBQVpBLE1BQVk7QUFDeEQ7QUFDQSxNQUFNNEksT0FBTyxHQUFHLG9CQUFRNUksTUFBUixDQUFoQjtBQUVBLFNBQU80SSxPQUFPLENBQUM5RSxNQUFSLENBQWUsVUFBQzZDLElBQUQsRUFBTzFKLEVBQVA7QUFBQSxXQUFjLG1DQUFpQjBKLElBQWpCLEVBQXVCMUosRUFBdkIsQ0FBZDtBQUFBLEdBQWYsRUFBeURwQixLQUF6RCxDQUFQO0FBQ0QsQ0FMTTtBQU9QOzs7Ozs7Ozs7O0FBTU8sSUFBTWdOLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsQ0FBQ2hOLEtBQUQsRUFBUWdCLE1BQVI7QUFBQSx5Q0FDNUJoQixLQUQ0QjtBQUUvQnhCLElBQUFBLE9BQU8sa0NBQ0Z3QixLQUFLLENBQUN4QixPQURKLEdBRUZ3QyxNQUFNLENBQUNzSSxJQUZMO0FBRndCO0FBQUEsQ0FBMUI7QUFPUDs7Ozs7Ozs7QUFJTyxTQUFTK0IsZ0JBQVQsQ0FBMEJyTCxLQUExQixFQUFpQ2YsUUFBakMsRUFBMkM7QUFDaEQsTUFBTWdPLGFBQWEsR0FBRzNMLE1BQU0sQ0FBQzRJLE1BQVAsQ0FBY2pMLFFBQWQsRUFBd0JnSixNQUF4QixFQUNwQjtBQUNBLFlBQUM2QyxJQUFELEVBQU8xRyxPQUFQO0FBQUEseURBQXVCMEcsSUFBdkIsdUNBQWlDLGtDQUFpQjFHLE9BQWpCLEVBQTBCcEUsS0FBSyxDQUFDTCxZQUFoQyxLQUFpRCxFQUFsRjtBQUFBLEdBRm9CLEVBR3BCLEVBSG9CLENBQXRCO0FBTUEsU0FBTztBQUNMSyxJQUFBQSxLQUFLLGtDQUNBQSxLQURBO0FBRUhyQixNQUFBQSxNQUFNLGdEQUFNcUIsS0FBSyxDQUFDckIsTUFBWix1Q0FBdUJzTyxhQUF2QixFQUZIO0FBR0huTyxNQUFBQSxVQUFVLGdEQUVMbU8sYUFBYSxDQUFDOU0sR0FBZCxDQUFrQixVQUFDK00sQ0FBRCxFQUFJN00sQ0FBSjtBQUFBLGVBQVVMLEtBQUssQ0FBQ3JCLE1BQU4sQ0FBYThCLE1BQWIsR0FBc0JKLENBQWhDO0FBQUEsT0FBbEIsQ0FGSyx1Q0FHTEwsS0FBSyxDQUFDbEIsVUFIRDtBQUhQLE1BREE7QUFVTHFNLElBQUFBLFNBQVMsRUFBRThCO0FBVk4sR0FBUDtBQVlEO0FBRUQ7Ozs7Ozs7O0FBTU8sU0FBU3hCLGtCQUFULENBQTRCekwsS0FBNUIsRUFBbUNvRSxPQUFuQyxFQUE0QztBQUNqRCxNQUFNa0gsYUFBYSxHQUFHLHdDQUFpQmxILE9BQWpCLENBQXRCOztBQUNBLE1BQU0rSSxNQUFNLG1DQUNQbk4sS0FBSyxDQUFDWixpQkFBTixDQUF3Qm9KLE9BQXhCLENBQWdDOUgsTUFBaEMsQ0FBdUMrSCxZQURoQyxHQUVQNkMsYUFGTyxDQUFaOztBQUtBLFNBQU8sZ0JBQUksQ0FBQyxtQkFBRCxFQUFzQixTQUF0QixFQUFpQyxRQUFqQyxFQUEyQyxjQUEzQyxDQUFKLEVBQWdFNkIsTUFBaEUsRUFBd0VuTixLQUF4RSxDQUFQO0FBQ0Q7QUFFRDs7Ozs7O0FBSU8sU0FBUzhGLHdCQUFULENBQWtDOUYsS0FBbEMsRUFBeUNtRSxNQUF6QyxFQUFpRGMsYUFBakQsRUFBZ0U7QUFDckUsTUFBTThILE9BQU8sR0FBRyxPQUFPNUksTUFBUCxLQUFrQixRQUFsQixHQUE2QixDQUFDQSxNQUFELENBQTdCLEdBQXdDQSxNQUF4RDtBQUNBLE1BQU1nSCxTQUFTLEdBQUcsRUFBbEI7QUFDQSxNQUFNaUMsWUFBWSxHQUFHLEVBQXJCO0FBRUFwTixFQUFBQSxLQUFLLENBQUNyQixNQUFOLENBQWE4SyxPQUFiLENBQXFCLFVBQUN4SSxRQUFELEVBQVdaLENBQVgsRUFBaUI7QUFDcEMsUUFBSVksUUFBUSxDQUFDUCxNQUFULENBQWdCeUQsTUFBaEIsSUFBMEI0SSxPQUFPLENBQUNySyxRQUFSLENBQWlCekIsUUFBUSxDQUFDUCxNQUFULENBQWdCeUQsTUFBakMsQ0FBOUIsRUFBd0U7QUFDdEU7QUFDQSxVQUFNMUMsUUFBUSxHQUNad0QsYUFBYSxJQUFJQSxhQUFhLENBQUNvSSxXQUEvQixHQUNJcE0sUUFESixHQUVJQSxRQUFRLENBQUM0QyxpQkFBVCxDQUEyQjdELEtBQUssQ0FBQ2YsUUFBakMsRUFBMkNnRyxhQUEzQyxDQUhOOztBQUZzRSxpQ0FPM0Msb0NBQW1CeEQsUUFBbkIsRUFBNkJ6QixLQUE3QixFQUFvQ0EsS0FBSyxDQUFDcEIsU0FBTixDQUFnQnlCLENBQWhCLENBQXBDLENBUDJDO0FBQUEsVUFPL0R6QixTQVArRCx3QkFPL0RBLFNBUCtEO0FBQUEsVUFPcERxQixLQVBvRCx3QkFPcERBLEtBUG9EOztBQVN0RWtMLE1BQUFBLFNBQVMsQ0FBQy9DLElBQVYsQ0FBZW5JLEtBQWY7QUFDQW1OLE1BQUFBLFlBQVksQ0FBQ2hGLElBQWIsQ0FBa0J4SixTQUFsQjtBQUNELEtBWEQsTUFXTztBQUNMdU0sTUFBQUEsU0FBUyxDQUFDL0MsSUFBVixDQUFlbkgsUUFBZjtBQUNBbU0sTUFBQUEsWUFBWSxDQUFDaEYsSUFBYixDQUFrQnBJLEtBQUssQ0FBQ3BCLFNBQU4sQ0FBZ0J5QixDQUFoQixDQUFsQjtBQUNEO0FBQ0YsR0FoQkQ7O0FBa0JBLE1BQU1HLFFBQVEsbUNBQ1RSLEtBRFM7QUFFWnJCLElBQUFBLE1BQU0sRUFBRXdNLFNBRkk7QUFHWnZNLElBQUFBLFNBQVMsRUFBRXdPO0FBSEMsSUFBZDs7QUFNQSxTQUFPNU0sUUFBUDtBQUNEOztBQUVNLFNBQVNNLHFCQUFULENBQStCZCxLQUEvQixFQUFzQztBQUMzQztBQUNBLE1BQU1zTixnQkFBZ0IsR0FBR3ROLEtBQUssQ0FBQ3JCLE1BQU4sQ0FBYTRELE1BQWIsQ0FDdkIsVUFBQXBCLENBQUM7QUFBQSxXQUNDQSxDQUFDLENBQUNULE1BQUYsQ0FBU0MsU0FBVCxJQUNBUSxDQUFDLENBQUNULE1BQUYsQ0FBU0UsU0FEVCxJQUVBTyxDQUFDLENBQUNULE1BQUYsQ0FBU0UsU0FBVCxDQUFtQkMsT0FGbkIsSUFHQTBLLEtBQUssQ0FBQ0MsT0FBTixDQUFjckssQ0FBQyxDQUFDb00sZUFBaEIsQ0FKRDtBQUFBLEdBRHNCLENBQXpCOztBQVFBLE1BQUksQ0FBQ0QsZ0JBQWdCLENBQUM3TSxNQUF0QixFQUE4QjtBQUM1QiwyQ0FDS1QsS0FETDtBQUVFSCxNQUFBQSxlQUFlLEVBQUVqQztBQUZuQjtBQUlEOztBQUVELE1BQU00UCxZQUFZLEdBQUdGLGdCQUFnQixDQUFDckYsTUFBakIsQ0FDbkIsVUFBQzZDLElBQUQsRUFBTzdLLEtBQVA7QUFBQSxXQUFpQixDQUNmd04sSUFBSSxDQUFDQyxHQUFMLENBQVM1QyxJQUFJLENBQUMsQ0FBRCxDQUFiLEVBQWtCN0ssS0FBSyxDQUFDc04sZUFBTixDQUFzQixDQUF0QixDQUFsQixDQURlLEVBRWZFLElBQUksQ0FBQ0UsR0FBTCxDQUFTN0MsSUFBSSxDQUFDLENBQUQsQ0FBYixFQUFrQjdLLEtBQUssQ0FBQ3NOLGVBQU4sQ0FBc0IsQ0FBdEIsQ0FBbEIsQ0FGZSxDQUFqQjtBQUFBLEdBRG1CLEVBS25CLENBQUNLLE1BQU0sQ0FBQ0MsUUFBRCxDQUFQLEVBQW1CLENBQUNBLFFBQXBCLENBTG1CLENBQXJCO0FBUUEseUNBQ0s3TixLQURMO0FBRUVILElBQUFBLGVBQWUsa0NBQ1ZHLEtBQUssQ0FBQ0gsZUFESTtBQUViL0IsTUFBQUEsV0FBVyxFQUFFLDRCQUFVa0MsS0FBSyxDQUFDSCxlQUFOLENBQXNCL0IsV0FBaEMsRUFBNkMwUCxZQUE3QyxJQUNUeE4sS0FBSyxDQUFDSCxlQUFOLENBQXNCL0IsV0FEYixHQUVUMFAsWUFBWSxDQUFDLENBQUQsQ0FKSDtBQUtiM1AsTUFBQUEsTUFBTSxFQUFFMlA7QUFMSztBQUZqQjtBQVVEO0FBRUQ7Ozs7Ozs7QUFLTyxJQUFNTSxvQkFBb0IsR0FBRyxTQUF2QkEsb0JBQXVCLENBQUM5TixLQUFEO0FBQUEsTUFBUy9CLElBQVQsVUFBU0EsSUFBVDtBQUFBLHlDQUMvQitCLEtBRCtCO0FBRWxDRixJQUFBQSxNQUFNLGtDQUNERSxLQUFLLENBQUNGLE1BREw7QUFFSjdCLE1BQUFBLElBQUksRUFBSkEsSUFGSTtBQUdKSSxNQUFBQSxlQUFlLEVBQUU7QUFIYjtBQUY0QjtBQUFBLENBQTdCLEMsQ0FTUDs7QUFDQTs7Ozs7Ozs7O0FBS08sU0FBUzBQLGtCQUFULENBQTRCL04sS0FBNUIsVUFBb0Q7QUFBQSwrQkFBaEI1QixRQUFnQjtBQUFBLE1BQWhCQSxRQUFnQixnQ0FBTCxFQUFLO0FBQ3pELE1BQU00UCxXQUFXLEdBQUc1UCxRQUFRLENBQUNxQyxNQUFULElBQW1CckMsUUFBUSxDQUFDQSxRQUFRLENBQUNxQyxNQUFULEdBQWtCLENBQW5CLENBQS9DOztBQUVBLE1BQU1ELFFBQVEsbUNBQ1RSLEtBRFM7QUFFWkYsSUFBQUEsTUFBTSxrQ0FDREUsS0FBSyxDQUFDRixNQURMO0FBRUo7QUFDQTFCLE1BQUFBLFFBQVEsRUFBRUEsUUFBUSxDQUFDbUUsTUFBVCxDQUFnQixVQUFBRSxDQUFDO0FBQUEsZUFBSSxDQUFDLHVDQUFxQkEsQ0FBckIsQ0FBTDtBQUFBLE9BQWpCLENBSE47QUFJSnhFLE1BQUFBLElBQUksRUFBRStQLFdBQVcsSUFBSUEsV0FBVyxDQUFDQyxVQUFaLENBQXVCQyxRQUF0QyxHQUFpRGhRLDhCQUFhaVEsSUFBOUQsR0FBcUVuTyxLQUFLLENBQUNGLE1BQU4sQ0FBYTdCO0FBSnBGO0FBRk0sSUFBZCxDQUh5RCxDQWF6RDs7O0FBYnlELE1BY2xESSxlQWRrRCxHQWMvQjJCLEtBQUssQ0FBQ0YsTUFkeUIsQ0FjbER6QixlQWRrRCxFQWdCekQ7O0FBQ0EsTUFBSSxDQUFDQSxlQUFMLEVBQXNCO0FBQ3BCLFdBQU9tQyxRQUFQO0FBQ0QsR0FuQndELENBcUJ6RDs7O0FBQ0EsTUFBTTROLE9BQU8sR0FBR2hRLFFBQVEsQ0FBQ3dFLElBQVQsQ0FBYyxVQUFBSCxDQUFDO0FBQUEsV0FBSUEsQ0FBQyxDQUFDckIsRUFBRixLQUFTL0MsZUFBZSxDQUFDK0MsRUFBN0I7QUFBQSxHQUFmLENBQWhCLENBdEJ5RCxDQXdCekQ7O0FBQ0EsTUFBTWlOLFFBQVEsR0FBR0QsT0FBTyxJQUFJLHVDQUFxQkEsT0FBckIsQ0FBNUI7O0FBQ0EsTUFBSUMsUUFBUSxJQUFJRCxPQUFoQixFQUF5QjtBQUN2QixRQUFNRSxZQUFZLEdBQUcsdUNBQXFCRixPQUFyQixFQUE4QkMsUUFBOUIsQ0FBckI7QUFDQSxRQUFNRSxTQUFTLEdBQUd2TyxLQUFLLENBQUNqQixPQUFOLENBQWNtQyxTQUFkLENBQXdCLFVBQUFzTixHQUFHO0FBQUEsYUFBSUEsR0FBRyxDQUFDcE4sRUFBSixLQUFXaU4sUUFBZjtBQUFBLEtBQTNCLENBQWxCO0FBQ0EsV0FBTzVKLGdCQUFnQixDQUFDakUsUUFBRCxFQUFXO0FBQ2hDTixNQUFBQSxHQUFHLEVBQUVxTyxTQUQyQjtBQUVoQ3RMLE1BQUFBLElBQUksRUFBRSxPQUYwQjtBQUdoQ0MsTUFBQUEsS0FBSyxFQUFFb0w7QUFIeUIsS0FBWCxDQUF2QjtBQUtEOztBQUVELFNBQU85TixRQUFQO0FBQ0Q7QUFFRDs7Ozs7OztBQUtPLElBQU1pTyx5QkFBeUIsR0FBRyxTQUE1QkEseUJBQTRCLENBQUN6TyxLQUFEO0FBQUEsTUFBU29PLE9BQVQsVUFBU0EsT0FBVDtBQUFBLHlDQUNwQ3BPLEtBRG9DO0FBRXZDRixJQUFBQSxNQUFNLGtDQUNERSxLQUFLLENBQUNGLE1BREw7QUFFSnpCLE1BQUFBLGVBQWUsRUFBRStQO0FBRmI7QUFGaUM7QUFBQSxDQUFsQztBQVFQOzs7Ozs7Ozs7QUFLTyxTQUFTTSxvQkFBVCxDQUE4QjFPLEtBQTlCLFVBQWdEO0FBQUEsTUFBVm9PLE9BQVUsVUFBVkEsT0FBVTs7QUFDckQsTUFBSSxDQUFDQSxPQUFMLEVBQWM7QUFDWixXQUFPcE8sS0FBUDtBQUNEOztBQUVELE1BQU1RLFFBQVEsbUNBQ1RSLEtBRFM7QUFFWkYsSUFBQUEsTUFBTSxrQ0FDREUsS0FBSyxDQUFDRixNQURMO0FBRUp6QixNQUFBQSxlQUFlLEVBQUU7QUFGYjtBQUZNLElBQWQ7O0FBUUEsTUFBSSx1Q0FBcUIrUCxPQUFyQixDQUFKLEVBQW1DO0FBQ2pDLFFBQU1HLFNBQVMsR0FBRy9OLFFBQVEsQ0FBQ3pCLE9BQVQsQ0FBaUJtQyxTQUFqQixDQUEyQixVQUFBdUIsQ0FBQztBQUFBLGFBQUlBLENBQUMsQ0FBQ3JCLEVBQUYsS0FBUyx1Q0FBcUJnTixPQUFyQixDQUFiO0FBQUEsS0FBNUIsQ0FBbEI7QUFFQSxXQUFPRyxTQUFTLEdBQUcsQ0FBQyxDQUFiLEdBQWlCeEgsbUJBQW1CLENBQUN2RyxRQUFELEVBQVc7QUFBQ04sTUFBQUEsR0FBRyxFQUFFcU87QUFBTixLQUFYLENBQXBDLEdBQW1FL04sUUFBMUU7QUFDRCxHQWpCb0QsQ0FtQnJEOzs7QUFDQSxNQUFNeUcsU0FBUyxtQ0FDVmpILEtBQUssQ0FBQ0YsTUFESTtBQUViMUIsSUFBQUEsUUFBUSxFQUFFNEIsS0FBSyxDQUFDRixNQUFOLENBQWExQixRQUFiLENBQXNCbUUsTUFBdEIsQ0FBNkIsVUFBQUUsQ0FBQztBQUFBLGFBQUlBLENBQUMsQ0FBQ3JCLEVBQUYsS0FBU2dOLE9BQU8sQ0FBQ2hOLEVBQXJCO0FBQUEsS0FBOUIsQ0FGRztBQUdiL0MsSUFBQUEsZUFBZSxFQUFFO0FBSEosSUFBZjs7QUFNQSx5Q0FDSzJCLEtBREw7QUFFRUYsSUFBQUEsTUFBTSxFQUFFbUg7QUFGVjtBQUlEO0FBRUQ7Ozs7Ozs7QUFLTyxTQUFTMEgsNEJBQVQsQ0FBc0MzTyxLQUF0QyxFQUE2Q2dKLE9BQTdDLEVBQXNEO0FBQUEsTUFDcEQvSSxLQURvRCxHQUNsQytJLE9BRGtDLENBQ3BEL0ksS0FEb0Q7QUFBQSxNQUM3Q21PLE9BRDZDLEdBQ2xDcEYsT0FEa0MsQ0FDN0NvRixPQUQ2QztBQUUzRCxNQUFNQyxRQUFRLEdBQUcsdUNBQXFCRCxPQUFyQixDQUFqQixDQUYyRCxDQUkzRDs7QUFDQSxNQUFJRyxTQUFKO0FBQ0EsTUFBSUssVUFBVSxHQUFHLENBQUMzTyxLQUFLLENBQUNtQixFQUFQLENBQWpCO0FBQ0EsTUFBSVosUUFBUSxHQUFHUixLQUFmLENBUDJELENBUTNEOztBQUNBLE1BQUlxTyxRQUFKLEVBQWM7QUFDWkUsSUFBQUEsU0FBUyxHQUFHdk8sS0FBSyxDQUFDakIsT0FBTixDQUFjbUMsU0FBZCxDQUF3QixVQUFBdUIsQ0FBQztBQUFBLGFBQUlBLENBQUMsQ0FBQ3JCLEVBQUYsS0FBU2lOLFFBQWI7QUFBQSxLQUF6QixDQUFaOztBQUVBLFFBQUksQ0FBQ3JPLEtBQUssQ0FBQ2pCLE9BQU4sQ0FBY3dQLFNBQWQsQ0FBTCxFQUErQjtBQUM3QjtBQUNBO0FBQ0E7QUFDQSxVQUFNTSxpQkFBaUIsbUNBQ2xCVCxPQURrQjtBQUVyQkgsUUFBQUEsVUFBVSxrQ0FDTEcsT0FBTyxDQUFDSCxVQURIO0FBRVJJLFVBQUFBLFFBQVEsRUFBRTtBQUZGO0FBRlcsUUFBdkI7O0FBUUEsNkNBQ0tyTyxLQURMO0FBRUVGLFFBQUFBLE1BQU0sa0NBQ0RFLEtBQUssQ0FBQ0YsTUFETDtBQUVKMUIsVUFBQUEsUUFBUSxnREFBTTRCLEtBQUssQ0FBQ0YsTUFBTixDQUFhMUIsUUFBbkIsSUFBNkJ5USxpQkFBN0IsRUFGSjtBQUdKeFEsVUFBQUEsZUFBZSxFQUFFd1E7QUFIYjtBQUZSO0FBUUQ7O0FBQ0QsUUFBTXRNLE1BQU0sR0FBR3ZDLEtBQUssQ0FBQ2pCLE9BQU4sQ0FBY3dQLFNBQWQsQ0FBZjtBQXhCWSwwQkF5QldoTSxNQXpCWCxDQXlCTDZDLE9BekJLO0FBQUEsUUF5QkxBLE9BekJLLGdDQXlCSyxFQXpCTDtBQTBCWixRQUFNMEosZUFBZSxHQUFHMUosT0FBTyxDQUFDMUMsUUFBUixDQUFpQnpDLEtBQUssQ0FBQ21CLEVBQXZCLENBQXhCO0FBRUF3TixJQUFBQSxVQUFVLEdBQUdFLGVBQWUsR0FDeEI7QUFDQTFKLElBQUFBLE9BQU8sQ0FBQzdDLE1BQVIsQ0FBZSxVQUFBcEIsQ0FBQztBQUFBLGFBQUlBLENBQUMsS0FBS2xCLEtBQUssQ0FBQ21CLEVBQWhCO0FBQUEsS0FBaEIsQ0FGd0IsaURBR3BCZ0UsT0FIb0IsSUFHWG5GLEtBQUssQ0FBQ21CLEVBSEssRUFBNUI7QUFJRCxHQWhDRCxNQWdDTztBQUNMO0FBQ0EsUUFBTXdELFNBQVMsR0FBRyx3Q0FBc0IsRUFBdEIsRUFBMEJ3SixPQUExQixDQUFsQjtBQUNBRyxJQUFBQSxTQUFTLEdBQUd2TyxLQUFLLENBQUNqQixPQUFOLENBQWMwQixNQUExQixDQUhLLENBS0w7O0FBQ0FELElBQUFBLFFBQVEsbUNBQ0hSLEtBREc7QUFFTmpCLE1BQUFBLE9BQU8sZ0RBQU1pQixLQUFLLENBQUNqQixPQUFaLElBQXFCNkYsU0FBckIsRUFGRDtBQUdOOUUsTUFBQUEsTUFBTSxrQ0FDREUsS0FBSyxDQUFDRixNQURMO0FBRUoxQixRQUFBQSxRQUFRLEVBQUU0QixLQUFLLENBQUNGLE1BQU4sQ0FBYTFCLFFBQWIsQ0FBc0JtRSxNQUF0QixDQUE2QixVQUFBRSxDQUFDO0FBQUEsaUJBQUlBLENBQUMsQ0FBQ3JCLEVBQUYsS0FBU2dOLE9BQU8sQ0FBQ2hOLEVBQXJCO0FBQUEsU0FBOUIsQ0FGTjtBQUdKL0MsUUFBQUEsZUFBZSxFQUFFdUcsU0FBUyxDQUFDMUI7QUFIdkI7QUFIQSxNQUFSO0FBU0Q7O0FBRUQsU0FBT3VCLGdCQUFnQixDQUFDakUsUUFBRCxFQUFXO0FBQ2hDTixJQUFBQSxHQUFHLEVBQUVxTyxTQUQyQjtBQUVoQ3RMLElBQUFBLElBQUksRUFBRSxTQUYwQjtBQUdoQ0MsSUFBQUEsS0FBSyxFQUFFMEw7QUFIeUIsR0FBWCxDQUF2QjtBQUtEO0FBRUQ7Ozs7Ozs7QUFLTyxTQUFTRyxzQkFBVCxDQUFnQy9PLEtBQWhDLFVBQStEO0FBQUEsTUFBdkJtRSxNQUF1QixVQUF2QkEsTUFBdUI7QUFBQSxNQUFmNkssTUFBZSxVQUFmQSxNQUFlO0FBQUEsTUFBUC9RLElBQU8sVUFBUEEsSUFBTztBQUNwRSxNQUFNbUcsT0FBTyxHQUFHcEUsS0FBSyxDQUFDZixRQUFOLENBQWVrRixNQUFmLENBQWhCOztBQUNBLE1BQUksQ0FBQ0MsT0FBTCxFQUFjO0FBQ1osV0FBT3BFLEtBQVA7QUFDRDs7QUFDRCxNQUFJLENBQUMvQixJQUFMLEVBQVc7QUFDVCxRQUFNZ1IsV0FBVyxHQUFHLHlCQUFJN0ssT0FBSixFQUFhLENBQUMsWUFBRCxFQUFlNEssTUFBZixDQUFiLENBQXBCO0FBQ0EvUSxJQUFBQSxJQUFJLEdBQUdnUixXQUFXLEdBQ2QzTixNQUFNLENBQUNDLElBQVAsQ0FBWTJOLDJCQUFaLEVBQXdCdE0sSUFBeEIsQ0FBNkIsVUFBQXVNLENBQUM7QUFBQSxhQUFJQSxDQUFDLEtBQUtGLFdBQVY7QUFBQSxLQUE5QixDQURjLEdBRWRDLDRCQUFXRSxTQUZmO0FBR0Q7O0FBRUQsTUFBTUMsTUFBTSxHQUFHLHVDQUFvQmpMLE9BQXBCLEVBQTZCNEssTUFBN0IsRUFBcUMvUSxJQUFyQyxDQUFmO0FBQ0EsU0FBTyxnQkFBSSxDQUFDLFVBQUQsRUFBYWtHLE1BQWIsQ0FBSixFQUEwQmtMLE1BQTFCLEVBQWtDclAsS0FBbEMsQ0FBUDtBQUNEO0FBRUQ7Ozs7Ozs7QUFLTyxTQUFTc1AscUJBQVQsQ0FBK0J0UCxLQUEvQixVQUF3RDtBQUFBLE1BQWpCbUUsTUFBaUIsVUFBakJBLE1BQWlCO0FBQUEsTUFBVDZLLE1BQVMsVUFBVEEsTUFBUztBQUM3RCxNQUFNNUssT0FBTyxHQUFHcEUsS0FBSyxDQUFDZixRQUFOLENBQWVrRixNQUFmLENBQWhCOztBQUNBLE1BQUksQ0FBQ0MsT0FBTCxFQUFjO0FBQ1osV0FBT3BFLEtBQVA7QUFDRDs7QUFDRCxNQUFNcUMsS0FBSyxHQUFHK0IsT0FBTyxDQUFDc0UsTUFBUixDQUFlOUYsSUFBZixDQUFvQixVQUFBSCxDQUFDO0FBQUEsV0FBSUEsQ0FBQyxDQUFDSCxJQUFGLEtBQVcwTSxNQUFmO0FBQUEsR0FBckIsQ0FBZDs7QUFDQSxNQUFJLENBQUMzTSxLQUFMLEVBQVk7QUFDVixXQUFPckMsS0FBUDtBQUNEOztBQUVELE1BQUl1UCxhQUFKOztBQUNBLE1BQUloRSxLQUFLLENBQUNDLE9BQU4sQ0FBY3BILE9BQU8sQ0FBQ21MLGFBQXRCLEtBQXdDbkwsT0FBTyxDQUFDbUwsYUFBUixDQUFzQjdNLFFBQXRCLENBQStCTCxLQUFLLENBQUNDLElBQXJDLENBQTVDLEVBQXdGO0FBQ3RGO0FBQ0FpTixJQUFBQSxhQUFhLEdBQUduTCxPQUFPLENBQUNtTCxhQUFSLENBQXNCaE4sTUFBdEIsQ0FBNkIsVUFBQWlOLEVBQUU7QUFBQSxhQUFJQSxFQUFFLEtBQUtuTixLQUFLLENBQUNDLElBQWpCO0FBQUEsS0FBL0IsQ0FBaEI7QUFDRCxHQUhELE1BR087QUFDTGlOLElBQUFBLGFBQWEsR0FBRyxDQUFDbkwsT0FBTyxDQUFDbUwsYUFBUixJQUF5QixFQUExQixFQUE4QkUsTUFBOUIsQ0FBcUNwTixLQUFLLENBQUNDLElBQTNDLENBQWhCO0FBQ0Q7O0FBRUQsU0FBTyxnQkFBSSxDQUFDLFVBQUQsRUFBYTZCLE1BQWIsRUFBcUIsZUFBckIsQ0FBSixFQUEyQ29MLGFBQTNDLEVBQTBEdlAsS0FBMUQsQ0FBUDtBQUNEO0FBRUQ7Ozs7Ozs7O0FBTU8sU0FBUzBQLHNCQUFULENBQWdDMVAsS0FBaEMsVUFBeUQ7QUFBQSxNQUFqQm1FLE1BQWlCLFVBQWpCQSxNQUFpQjtBQUFBLE1BQVQ2SyxNQUFTLFVBQVRBLE1BQVM7QUFDOUQsTUFBTTVLLE9BQU8sR0FBR3BFLEtBQUssQ0FBQ2YsUUFBTixDQUFla0YsTUFBZixDQUFoQjs7QUFDQSxNQUFJLENBQUNDLE9BQUwsRUFBYztBQUNaLFdBQU9wRSxLQUFQO0FBQ0Q7O0FBQ0QsTUFBTTJQLFFBQVEsR0FBR3ZMLE9BQU8sQ0FBQ3NFLE1BQVIsQ0FBZXhILFNBQWYsQ0FBeUIsVUFBQXVCLENBQUM7QUFBQSxXQUFJQSxDQUFDLENBQUNILElBQUYsS0FBVzBNLE1BQWY7QUFBQSxHQUExQixDQUFqQjs7QUFDQSxNQUFJVyxRQUFRLEdBQUcsQ0FBZixFQUFrQjtBQUNoQixXQUFPM1AsS0FBUDtBQUNEOztBQVI2RCxNQVN2RDRQLElBVHVELEdBUy9DeEwsT0FBTyxDQUFDc0UsTUFBUixDQUFlaUgsUUFBZixDQVQrQyxDQVN2REMsSUFUdUQ7QUFVOUQsTUFBTUMsSUFBSSxHQUFHekwsT0FBTyxDQUFDOEIsT0FBUixDQUFnQi9GLEdBQWhCLENBQW9CLFVBQUFHLENBQUM7QUFBQSxXQUFJLGdDQUFnQkEsQ0FBQyxDQUFDcVAsUUFBRCxDQUFqQixFQUE2QkMsSUFBN0IsQ0FBSjtBQUFBLEdBQXJCLEVBQTZERSxJQUE3RCxDQUFrRSxJQUFsRSxDQUFiO0FBRUEsbUNBQUtELElBQUw7QUFFQSxTQUFPN1AsS0FBUDtBQUNEO0FBRUQ7Ozs7OztBQUlPLFNBQVMrUCw2QkFBVCxDQUF1Qy9QLEtBQXZDLEVBQThDO0FBQ25ELHlDQUNLQSxLQURMO0FBRUVGLElBQUFBLE1BQU0sa0NBQ0RFLEtBQUssQ0FBQ0YsTUFETDtBQUVKeEIsTUFBQUEsT0FBTyxFQUFFLENBQUMwQixLQUFLLENBQUNGLE1BQU4sQ0FBYXhCO0FBRm5CO0FBRlI7QUFPRCIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMCBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCB7Y29uc29sZSBhcyBDb25zb2xlfSBmcm9tICdnbG9iYWwvd2luZG93JztcclxuaW1wb3J0IHtkaXNhYmxlU3RhY2tDYXB0dXJpbmcsIHdpdGhUYXNrfSBmcm9tICdyZWFjdC1wYWxtL3Rhc2tzJztcclxuaW1wb3J0IGNsb25lRGVlcCBmcm9tICdsb2Rhc2guY2xvbmVkZWVwJztcclxuaW1wb3J0IHVuaXEgZnJvbSAnbG9kYXNoLnVuaXEnO1xyXG5pbXBvcnQgZ2V0IGZyb20gJ2xvZGFzaC5nZXQnO1xyXG5pbXBvcnQgeG9yIGZyb20gJ2xvZGFzaC54b3InO1xyXG5pbXBvcnQgY29weSBmcm9tICdjb3B5LXRvLWNsaXBib2FyZCc7XHJcbmltcG9ydCB7cGFyc2VGaWVsZFZhbHVlfSBmcm9tICd1dGlscy9kYXRhLXV0aWxzJztcclxuLy8gVGFza3NcclxuaW1wb3J0IHtMT0FEX0ZJTEVfVEFTS30gZnJvbSAndGFza3MvdGFza3MnO1xyXG4vLyBBY3Rpb25zXHJcbmltcG9ydCB7bG9hZEZpbGVzRXJyLCBsb2FkRmlsZVN1Y2Nlc3MsIGxvYWROZXh0RmlsZX0gZnJvbSAnYWN0aW9ucy92aXMtc3RhdGUtYWN0aW9ucyc7XHJcbi8vIFV0aWxzXHJcbmltcG9ydCB7ZmluZEZpZWxkc1RvU2hvdywgZ2V0RGVmYXVsdEludGVyYWN0aW9ufSBmcm9tICd1dGlscy9pbnRlcmFjdGlvbi11dGlscyc7XHJcbmltcG9ydCB7XHJcbiAgYXBwbHlGaWx0ZXJGaWVsZE5hbWUsXHJcbiAgYXBwbHlGaWx0ZXJzVG9EYXRhc2V0cyxcclxuICBmZWF0dXJlVG9GaWx0ZXJWYWx1ZSxcclxuICBGSUxURVJfVVBEQVRFUl9QUk9QUyxcclxuICBmaWx0ZXJEYXRhc2V0Q1BVLFxyXG4gIGdlbmVyYXRlUG9seWdvbkZpbHRlcixcclxuICBnZXREZWZhdWx0RmlsdGVyLFxyXG4gIGdldERlZmF1bHRGaWx0ZXJQbG90VHlwZSxcclxuICBnZXRGaWx0ZXJJZEluRmVhdHVyZSxcclxuICBnZXRGaWx0ZXJQbG90LFxyXG4gIGlzSW5SYW5nZSxcclxuICBMSU1JVEVEX0ZJTFRFUl9FRkZFQ1RfUFJPUFMsXHJcbiAgdXBkYXRlRmlsdGVyRGF0YUlkXHJcbn0gZnJvbSAndXRpbHMvZmlsdGVyLXV0aWxzJztcclxuaW1wb3J0IHthc3NpZ25HcHVDaGFubmVsLCBzZXRGaWx0ZXJHcHVNb2RlfSBmcm9tICd1dGlscy9ncHUtZmlsdGVyLXV0aWxzJztcclxuaW1wb3J0IHtjcmVhdGVOZXdEYXRhRW50cnksIHNvcnREYXRhc2V0QnlDb2x1bW59IGZyb20gJ3V0aWxzL2RhdGFzZXQtdXRpbHMnO1xyXG5pbXBvcnQge3NldCwgdG9BcnJheX0gZnJvbSAndXRpbHMvdXRpbHMnO1xyXG5cclxuaW1wb3J0IHtjYWxjdWxhdGVMYXllckRhdGEsIGZpbmREZWZhdWx0TGF5ZXJ9IGZyb20gJ3V0aWxzL2xheWVyLXV0aWxzL2xheWVyLXV0aWxzJztcclxuXHJcbmltcG9ydCB7XHJcbiAgbWVyZ2VBbmltYXRpb25Db25maWcsXHJcbiAgbWVyZ2VGaWx0ZXJzLFxyXG4gIG1lcmdlSW50ZXJhY3Rpb25zLFxyXG4gIG1lcmdlTGF5ZXJCbGVuZGluZyxcclxuICBtZXJnZUxheWVycyxcclxuICBtZXJnZVNwbGl0TWFwc1xyXG59IGZyb20gJy4vdmlzLXN0YXRlLW1lcmdlcic7XHJcblxyXG5pbXBvcnQge1xyXG4gIGFkZE5ld0xheWVyc1RvU3BsaXRNYXAsXHJcbiAgY29tcHV0ZVNwbGl0TWFwTGF5ZXJzLFxyXG4gIHJlbW92ZUxheWVyRnJvbVNwbGl0TWFwc1xyXG59IGZyb20gJ3V0aWxzL3NwbGl0LW1hcC11dGlscyc7XHJcblxyXG5pbXBvcnQge0xheWVyLCBMYXllckNsYXNzZXN9IGZyb20gJ2xheWVycyc7XHJcbmltcG9ydCB7REVGQVVMVF9URVhUX0xBQkVMfSBmcm9tICdsYXllcnMvbGF5ZXItZmFjdG9yeSc7XHJcbmltcG9ydCB7RURJVE9SX01PREVTLCBTT1JUX09SREVSfSBmcm9tICdjb25zdGFudHMvZGVmYXVsdC1zZXR0aW5ncyc7XHJcblxyXG4vLyB0eXBlIGltcG9ydHNcclxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4vdmlzLXN0YXRlLXVwZGF0ZXJzJykuRmllbGR9IEZpZWxkICovXHJcbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuL3Zpcy1zdGF0ZS11cGRhdGVycycpLkZpbHRlcn0gRmlsdGVyICovXHJcbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuL3Zpcy1zdGF0ZS11cGRhdGVycycpLkRhdGFzZXR9IERhdGFzZXQgKi9cclxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4vdmlzLXN0YXRlLXVwZGF0ZXJzJykuVmlzU3RhdGV9IFZpc1N0YXRlICovXHJcbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuL3Zpcy1zdGF0ZS11cGRhdGVycycpLkRhdGFzZXRzfSBEYXRhc2V0cyAqL1xyXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi92aXMtc3RhdGUtdXBkYXRlcnMnKS5BbmltYXRpb25Db25maWd9IEFuaW1hdGlvbkNvbmZpZyAqL1xyXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi92aXMtc3RhdGUtdXBkYXRlcnMnKS5FZGl0b3J9IEVkaXRvciAqL1xyXG5cclxuLy8gcmVhY3QtcGFsbVxyXG4vLyBkaXNhYmxlIGNhcHR1cmUgZXhjZXB0aW9uIGZvciByZWFjdC1wYWxtIGNhbGwgdG8gd2l0aFRhc2tcclxuZGlzYWJsZVN0YWNrQ2FwdHVyaW5nKCk7XHJcblxyXG4vKipcclxuICogVXBkYXRlcnMgZm9yIGB2aXNTdGF0ZWAgcmVkdWNlci4gQ2FuIGJlIHVzZWQgaW4geW91ciByb290IHJlZHVjZXIgdG8gZGlyZWN0bHkgbW9kaWZ5IGtlcGxlci5nbCdzIHN0YXRlLlxyXG4gKiBSZWFkIG1vcmUgYWJvdXQgW1VzaW5nIHVwZGF0ZXJzXSguLi9hZHZhbmNlZC11c2FnZS91c2luZy11cGRhdGVycy5tZClcclxuICpcclxuICogQHB1YmxpY1xyXG4gKiBAZXhhbXBsZVxyXG4gKlxyXG4gKiBpbXBvcnQga2VwbGVyR2xSZWR1Y2VyLCB7dmlzU3RhdGVVcGRhdGVyc30gZnJvbSAna2VwbGVyLmdsL3JlZHVjZXJzJztcclxuICogLy8gUm9vdCBSZWR1Y2VyXHJcbiAqIGNvbnN0IHJlZHVjZXJzID0gY29tYmluZVJlZHVjZXJzKHtcclxuICogIGtlcGxlckdsOiBrZXBsZXJHbFJlZHVjZXIsXHJcbiAqICBhcHA6IGFwcFJlZHVjZXJcclxuICogfSk7XHJcbiAqXHJcbiAqIGNvbnN0IGNvbXBvc2VkUmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAqICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAqICAgIGNhc2UgJ0NMSUNLX0JVVFRPTic6XHJcbiAqICAgICAgcmV0dXJuIHtcclxuICogICAgICAgIC4uLnN0YXRlLFxyXG4gKiAgICAgICAga2VwbGVyR2w6IHtcclxuICogICAgICAgICAgLi4uc3RhdGUua2VwbGVyR2wsXHJcbiAqICAgICAgICAgIGZvbzoge1xyXG4gKiAgICAgICAgICAgICAuLi5zdGF0ZS5rZXBsZXJHbC5mb28sXHJcbiAqICAgICAgICAgICAgIHZpc1N0YXRlOiB2aXNTdGF0ZVVwZGF0ZXJzLmVubGFyZ2VGaWx0ZXJVcGRhdGVyKFxyXG4gKiAgICAgICAgICAgICAgIHN0YXRlLmtlcGxlckdsLmZvby52aXNTdGF0ZSxcclxuICogICAgICAgICAgICAgICB7aWR4OiAwfVxyXG4gKiAgICAgICAgICAgICApXHJcbiAqICAgICAgICAgIH1cclxuICogICAgICAgIH1cclxuICogICAgICB9O1xyXG4gKiAgfVxyXG4gKiAgcmV0dXJuIHJlZHVjZXJzKHN0YXRlLCBhY3Rpb24pO1xyXG4gKiB9O1xyXG4gKlxyXG4gKiBleHBvcnQgZGVmYXVsdCBjb21wb3NlZFJlZHVjZXI7XHJcbiAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xyXG4vLyBAdHMtaWdub3JlXHJcbmNvbnN0IHZpc1N0YXRlVXBkYXRlcnMgPSBudWxsO1xyXG4vKiBlc2xpbnQtZW5hYmxlIG5vLXVudXNlZC12YXJzICovXHJcblxyXG4vKiogQHR5cGUge0FuaW1hdGlvbkNvbmZpZ30gKi9cclxuZXhwb3J0IGNvbnN0IERFRkFVTFRfQU5JTUFUSU9OX0NPTkZJRyA9IHtcclxuICBkb21haW46IG51bGwsXHJcbiAgY3VycmVudFRpbWU6IG51bGwsXHJcbiAgc3BlZWQ6IDFcclxufTtcclxuXHJcbi8qKiBAdHlwZSB7RWRpdG9yfSAqL1xyXG5leHBvcnQgY29uc3QgREVGQVVMVF9FRElUT1IgPSB7XHJcbiAgbW9kZTogRURJVE9SX01PREVTLkRSQVdfUE9MWUdPTixcclxuICBmZWF0dXJlczogW10sXHJcbiAgc2VsZWN0ZWRGZWF0dXJlOiBudWxsLFxyXG4gIHZpc2libGU6IHRydWVcclxufTtcclxuXHJcbi8qKlxyXG4gKiBEZWZhdWx0IGluaXRpYWwgYHZpc1N0YXRlYFxyXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVVcGRhdGVyc1xyXG4gKiBAY29uc3RhbnRcclxuICogQHR5cGUge1Zpc1N0YXRlfVxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgSU5JVElBTF9WSVNfU1RBVEUgPSB7XHJcbiAgLy8gbWFwIGluZm9cclxuICBtYXBJbmZvOiB7XHJcbiAgICB0aXRsZTogJycsXHJcbiAgICBkZXNjcmlwdGlvbjogJydcclxuICB9LFxyXG4gIC8vIGxheWVyc1xyXG4gIGxheWVyczogW10sXHJcbiAgbGF5ZXJEYXRhOiBbXSxcclxuICBsYXllclRvQmVNZXJnZWQ6IFtdLFxyXG4gIGxheWVyT3JkZXI6IFtdLFxyXG5cclxuICAvLyBmaWx0ZXJzXHJcbiAgZmlsdGVyczogW10sXHJcbiAgZmlsdGVyVG9CZU1lcmdlZDogW10sXHJcblxyXG4gIC8vIGEgY29sbGVjdGlvbiBvZiBtdWx0aXBsZSBkYXRhc2V0XHJcbiAgZGF0YXNldHM6IHt9LFxyXG4gIGVkaXRpbmdEYXRhc2V0OiB1bmRlZmluZWQsXHJcblxyXG4gIGludGVyYWN0aW9uQ29uZmlnOiBnZXREZWZhdWx0SW50ZXJhY3Rpb24oKSxcclxuICBpbnRlcmFjdGlvblRvQmVNZXJnZWQ6IHVuZGVmaW5lZCxcclxuXHJcbiAgbGF5ZXJCbGVuZGluZzogJ25vcm1hbCcsXHJcbiAgaG92ZXJJbmZvOiB1bmRlZmluZWQsXHJcbiAgY2xpY2tlZDogdW5kZWZpbmVkLFxyXG4gIG1vdXNlUG9zOiB7fSxcclxuXHJcbiAgLy8gdGhpcyBpcyB1c2VkIHdoZW4gdXNlciBzcGxpdCBtYXBzXHJcbiAgc3BsaXRNYXBzOiBbXHJcbiAgICAvLyB0aGlzIHdpbGwgY29udGFpbiBhIGxpc3Qgb2Ygb2JqZWN0cyB0b1xyXG4gICAgLy8gZGVzY3JpYmUgdGhlIHN0YXRlIG9mIGxheWVyIGF2YWlsYWJpbGl0eSBhbmQgdmlzaWJpbGl0eSBmb3IgZWFjaCBtYXBcclxuICAgIC8vIFtcclxuICAgIC8vICAge1xyXG4gICAgLy8gICAgICBsYXllcnM6IHtsYXllcl9pZDogdHJ1ZSB8IGZhbHNlfVxyXG4gICAgLy8gICB9XHJcbiAgICAvLyBdXHJcbiAgXSxcclxuICAvL1xyXG4gIC8vIGRlZmF1bHRzIGxheWVyIGNsYXNzZXNcclxuICBsYXllckNsYXNzZXM6IExheWVyQ2xhc3NlcyxcclxuXHJcbiAgLy8gZGVmYXVsdCBhbmltYXRpb25cclxuICAvLyB0aW1lIGluIHVuaXggdGltZXN0YW1wIChtaWxsaXNlY29uZHMpICh0aGUgbnVtYmVyIG9mIHNlY29uZHMgc2luY2UgdGhlIFVuaXggRXBvY2gpXHJcbiAgYW5pbWF0aW9uQ29uZmlnOiBERUZBVUxUX0FOSU1BVElPTl9DT05GSUcsXHJcblxyXG4gIGVkaXRvcjogREVGQVVMVF9FRElUT1JcclxufTtcclxuXHJcbi8qKlxyXG4gKiBVcGRhdGUgc3RhdGUgd2l0aCB1cGRhdGVkIGxheWVyIGFuZCBsYXllckRhdGFcclxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdmlzLXN0YXRlLXVwZGF0ZXJzJykudXBkYXRlU3RhdGVXaXRoTGF5ZXJBbmREYXRhfVxyXG4gKlxyXG4gKi9cclxuZnVuY3Rpb24gdXBkYXRlU3RhdGVXaXRoTGF5ZXJBbmREYXRhKHN0YXRlLCB7bGF5ZXJEYXRhLCBsYXllciwgaWR4fSkge1xyXG4gIHJldHVybiB7XHJcbiAgICAuLi5zdGF0ZSxcclxuICAgIGxheWVyczogc3RhdGUubGF5ZXJzLm1hcCgobHlyLCBpKSA9PiAoaSA9PT0gaWR4ID8gbGF5ZXIgOiBseXIpKSxcclxuICAgIGxheWVyRGF0YTogbGF5ZXJEYXRhXHJcbiAgICAgID8gc3RhdGUubGF5ZXJEYXRhLm1hcCgoZCwgaSkgPT4gKGkgPT09IGlkeCA/IGxheWVyRGF0YSA6IGQpKVxyXG4gICAgICA6IHN0YXRlLmxheWVyRGF0YVxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVTdGF0ZU9uTGF5ZXJWaXNpYmlsaXR5Q2hhbmdlKHN0YXRlLCBsYXllcikge1xyXG4gIGxldCBuZXdTdGF0ZSA9IHN0YXRlO1xyXG4gIGlmIChzdGF0ZS5zcGxpdE1hcHMubGVuZ3RoKSB7XHJcbiAgICBuZXdTdGF0ZSA9IHtcclxuICAgICAgLi4uc3RhdGUsXHJcbiAgICAgIHNwbGl0TWFwczogbGF5ZXIuY29uZmlnLmlzVmlzaWJsZVxyXG4gICAgICAgID8gYWRkTmV3TGF5ZXJzVG9TcGxpdE1hcChzdGF0ZS5zcGxpdE1hcHMsIGxheWVyKVxyXG4gICAgICAgIDogcmVtb3ZlTGF5ZXJGcm9tU3BsaXRNYXBzKHN0YXRlLnNwbGl0TWFwcywgbGF5ZXIpXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgaWYgKGxheWVyLmNvbmZpZy5hbmltYXRpb24uZW5hYmxlZCkge1xyXG4gICAgbmV3U3RhdGUgPSB1cGRhdGVBbmltYXRpb25Eb21haW4oc3RhdGUpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIG5ld1N0YXRlO1xyXG59XHJcblxyXG4vKipcclxuICogVXBkYXRlIGxheWVyIGJhc2UgY29uZmlnOiBkYXRhSWQsIGxhYmVsLCBjb2x1bW4sIGlzVmlzaWJsZVxyXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVVcGRhdGVyc1xyXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi92aXMtc3RhdGUtdXBkYXRlcnMnKS5sYXllckNvbmZpZ0NoYW5nZVVwZGF0ZXJ9XHJcbiAqIEByZXR1cm5zIG5leHRTdGF0ZVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGxheWVyQ29uZmlnQ2hhbmdlVXBkYXRlcihzdGF0ZSwgYWN0aW9uKSB7XHJcbiAgY29uc3Qge29sZExheWVyfSA9IGFjdGlvbjtcclxuICBjb25zdCBpZHggPSBzdGF0ZS5sYXllcnMuZmluZEluZGV4KGwgPT4gbC5pZCA9PT0gb2xkTGF5ZXIuaWQpO1xyXG4gIGNvbnN0IHByb3BzID0gT2JqZWN0LmtleXMoYWN0aW9uLm5ld0NvbmZpZyk7XHJcbiAgbGV0IG5ld0xheWVyID0gb2xkTGF5ZXIudXBkYXRlTGF5ZXJDb25maWcoYWN0aW9uLm5ld0NvbmZpZyk7XHJcblxyXG4gIGxldCBsYXllckRhdGE7XHJcblxyXG4gIC8vIGxldCBuZXdMYXllcjtcclxuICBpZiAobmV3TGF5ZXIuc2hvdWxkQ2FsY3VsYXRlTGF5ZXJEYXRhKHByb3BzKSkge1xyXG4gICAgY29uc3Qgb2xkTGF5ZXJEYXRhID0gc3RhdGUubGF5ZXJEYXRhW2lkeF07XHJcbiAgICBjb25zdCB1cGRhdGVMYXllckRhdGFSZXN1bHQgPSBjYWxjdWxhdGVMYXllckRhdGEobmV3TGF5ZXIsIHN0YXRlLCBvbGRMYXllckRhdGEpO1xyXG5cclxuICAgIGxheWVyRGF0YSA9IHVwZGF0ZUxheWVyRGF0YVJlc3VsdC5sYXllckRhdGE7XHJcbiAgICBuZXdMYXllciA9IHVwZGF0ZUxheWVyRGF0YVJlc3VsdC5sYXllcjtcclxuICB9XHJcblxyXG4gIGxldCBuZXdTdGF0ZSA9IHN0YXRlO1xyXG4gIGlmICgnaXNWaXNpYmxlJyBpbiBhY3Rpb24ubmV3Q29uZmlnKSB7XHJcbiAgICBuZXdTdGF0ZSA9IHVwZGF0ZVN0YXRlT25MYXllclZpc2liaWxpdHlDaGFuZ2Uoc3RhdGUsIG5ld0xheWVyKTtcclxuICB9XHJcblxyXG4gIHJldHVybiB1cGRhdGVTdGF0ZVdpdGhMYXllckFuZERhdGEobmV3U3RhdGUsIHtcclxuICAgIGxheWVyOiBuZXdMYXllcixcclxuICAgIGxheWVyRGF0YSxcclxuICAgIGlkeFxyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRPclJlbW92ZVRleHRMYWJlbHMobmV3RmllbGRzLCB0ZXh0TGFiZWwpIHtcclxuICBsZXQgbmV3VGV4dExhYmVsID0gdGV4dExhYmVsLnNsaWNlKCk7XHJcblxyXG4gIGNvbnN0IGN1cnJlbnRGaWVsZHMgPSB0ZXh0TGFiZWwubWFwKHRsID0+IHRsLmZpZWxkICYmIHRsLmZpZWxkLm5hbWUpLmZpbHRlcihkID0+IGQpO1xyXG5cclxuICBjb25zdCBhZGRGaWVsZHMgPSBuZXdGaWVsZHMuZmlsdGVyKGYgPT4gIWN1cnJlbnRGaWVsZHMuaW5jbHVkZXMoZi5uYW1lKSk7XHJcbiAgY29uc3QgZGVsZXRlRmllbGRzID0gY3VycmVudEZpZWxkcy5maWx0ZXIoZiA9PiAhbmV3RmllbGRzLmZpbmQoZmQgPT4gZmQubmFtZSA9PT0gZikpO1xyXG5cclxuICAvLyBkZWxldGVcclxuICBuZXdUZXh0TGFiZWwgPSBuZXdUZXh0TGFiZWwuZmlsdGVyKHRsID0+IHRsLmZpZWxkICYmICFkZWxldGVGaWVsZHMuaW5jbHVkZXModGwuZmllbGQubmFtZSkpO1xyXG4gIG5ld1RleHRMYWJlbCA9ICFuZXdUZXh0TGFiZWwubGVuZ3RoID8gW0RFRkFVTFRfVEVYVF9MQUJFTF0gOiBuZXdUZXh0TGFiZWw7XHJcblxyXG4gIC8vIGFkZFxyXG4gIG5ld1RleHRMYWJlbCA9IFtcclxuICAgIC4uLm5ld1RleHRMYWJlbC5maWx0ZXIodGwgPT4gdGwuZmllbGQpLFxyXG4gICAgLi4uYWRkRmllbGRzLm1hcChhZiA9PiAoe1xyXG4gICAgICAuLi5ERUZBVUxUX1RFWFRfTEFCRUwsXHJcbiAgICAgIGZpZWxkOiBhZlxyXG4gICAgfSkpXHJcbiAgXTtcclxuXHJcbiAgcmV0dXJuIG5ld1RleHRMYWJlbDtcclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlVGV4dExhYmVsUHJvcEFuZFZhbHVlKGlkeCwgcHJvcCwgdmFsdWUsIHRleHRMYWJlbCkge1xyXG4gIGlmICghdGV4dExhYmVsW2lkeF0uaGFzT3duUHJvcGVydHkocHJvcCkpIHtcclxuICAgIHJldHVybiB0ZXh0TGFiZWw7XHJcbiAgfVxyXG5cclxuICBsZXQgbmV3VGV4dExhYmVsID0gdGV4dExhYmVsLnNsaWNlKCk7XHJcblxyXG4gIGlmIChwcm9wICYmICh2YWx1ZSB8fCB0ZXh0TGFiZWwubGVuZ3RoID09PSAxKSkge1xyXG4gICAgbmV3VGV4dExhYmVsID0gdGV4dExhYmVsLm1hcCgodGwsIGkpID0+IChpID09PSBpZHggPyB7Li4udGwsIFtwcm9wXTogdmFsdWV9IDogdGwpKTtcclxuICB9IGVsc2UgaWYgKHByb3AgPT09ICdmaWVsZCcgJiYgdmFsdWUgPT09IG51bGwgJiYgdGV4dExhYmVsLmxlbmd0aCA+IDEpIHtcclxuICAgIC8vIHJlbW92ZSBsYWJlbCB3aGVuIGZpZWxkIHZhbHVlIGlzIHNldCB0byBudWxsXHJcbiAgICBuZXdUZXh0TGFiZWwuc3BsaWNlKGlkeCwgMSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gbmV3VGV4dExhYmVsO1xyXG59XHJcblxyXG4vKipcclxuICogVXBkYXRlIGxheWVyIGJhc2UgY29uZmlnOiBkYXRhSWQsIGxhYmVsLCBjb2x1bW4sIGlzVmlzaWJsZVxyXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVVcGRhdGVyc1xyXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi92aXMtc3RhdGUtdXBkYXRlcnMnKS5sYXllclRleHRMYWJlbENoYW5nZVVwZGF0ZXJ9XHJcbiAqIEByZXR1cm5zIG5leHRTdGF0ZVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGxheWVyVGV4dExhYmVsQ2hhbmdlVXBkYXRlcihzdGF0ZSwgYWN0aW9uKSB7XHJcbiAgY29uc3Qge29sZExheWVyLCBpZHgsIHByb3AsIHZhbHVlfSA9IGFjdGlvbjtcclxuICBjb25zdCB7dGV4dExhYmVsfSA9IG9sZExheWVyLmNvbmZpZztcclxuXHJcbiAgbGV0IG5ld1RleHRMYWJlbCA9IHRleHRMYWJlbC5zbGljZSgpO1xyXG4gIGlmICghdGV4dExhYmVsW2lkeF0gJiYgaWR4ID09PSB0ZXh0TGFiZWwubGVuZ3RoKSB7XHJcbiAgICAvLyBpZiBpZHggaXMgc2V0IHRvIGxlbmd0aCwgYWRkIGVtcHR5IHRleHQgbGFiZWxcclxuICAgIG5ld1RleHRMYWJlbCA9IFsuLi50ZXh0TGFiZWwsIERFRkFVTFRfVEVYVF9MQUJFTF07XHJcbiAgfVxyXG5cclxuICBpZiAoaWR4ID09PSAnYWxsJyAmJiBwcm9wID09PSAnZmllbGRzJykge1xyXG4gICAgbmV3VGV4dExhYmVsID0gYWRkT3JSZW1vdmVUZXh0TGFiZWxzKHZhbHVlLCB0ZXh0TGFiZWwpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBuZXdUZXh0TGFiZWwgPSB1cGRhdGVUZXh0TGFiZWxQcm9wQW5kVmFsdWUoaWR4LCBwcm9wLCB2YWx1ZSwgbmV3VGV4dExhYmVsKTtcclxuICB9XHJcblxyXG4gIC8vIHVwZGF0ZSB0ZXh0IGxhYmVsIHByb3AgYW5kIHZhbHVlXHJcbiAgcmV0dXJuIGxheWVyQ29uZmlnQ2hhbmdlVXBkYXRlcihzdGF0ZSwge1xyXG4gICAgb2xkTGF5ZXIsXHJcbiAgICBuZXdDb25maWc6IHt0ZXh0TGFiZWw6IG5ld1RleHRMYWJlbH1cclxuICB9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFVwZGF0ZSBsYXllciB0eXBlLiBQcmV2aWV3cyBsYXllciBjb25maWcgd2lsbCBiZSBjb3BpZWQgaWYgYXBwbGljYWJsZS5cclxuICogQG1lbWJlcm9mIHZpc1N0YXRlVXBkYXRlcnNcclxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdmlzLXN0YXRlLXVwZGF0ZXJzJykubGF5ZXJUeXBlQ2hhbmdlVXBkYXRlcn1cclxuICogQHB1YmxpY1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGxheWVyVHlwZUNoYW5nZVVwZGF0ZXIoc3RhdGUsIGFjdGlvbikge1xyXG4gIGNvbnN0IHtvbGRMYXllciwgbmV3VHlwZX0gPSBhY3Rpb247XHJcbiAgaWYgKCFvbGRMYXllcikge1xyXG4gICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxuICBjb25zdCBvbGRJZCA9IG9sZExheWVyLmlkO1xyXG4gIGNvbnN0IGlkeCA9IHN0YXRlLmxheWVycy5maW5kSW5kZXgobCA9PiBsLmlkID09PSBvbGRJZCk7XHJcblxyXG4gIGlmICghc3RhdGUubGF5ZXJDbGFzc2VzW25ld1R5cGVdKSB7XHJcbiAgICBDb25zb2xlLmVycm9yKGAke25ld1R5cGV9IGlzIG5vdCBhIHZhbGlkIGxheWVyIHR5cGVgKTtcclxuICAgIHJldHVybiBzdGF0ZTtcclxuICB9XHJcblxyXG4gIC8vIGdldCBhIG1pbnQgbGF5ZXIsIHdpdGggbmV3IGlkIGFuZCB0eXBlXHJcbiAgLy8gYmVjYXVzZSBkZWNrLmdsIHVzZXMgaWQgdG8gbWF0Y2ggYmV0d2VlbiBuZXcgYW5kIG9sZCBsYXllci5cclxuICAvLyBJZiB0eXBlIGhhcyBjaGFuZ2VkIGJ1dCBpZCBpcyB0aGUgc2FtZSwgaXQgd2lsbCBicmVha1xyXG4gIGNvbnN0IG5ld0xheWVyID0gbmV3IHN0YXRlLmxheWVyQ2xhc3Nlc1tuZXdUeXBlXSgpO1xyXG5cclxuICBuZXdMYXllci5hc3NpZ25Db25maWdUb0xheWVyKG9sZExheWVyLmNvbmZpZywgb2xkTGF5ZXIudmlzQ29uZmlnU2V0dGluZ3MpO1xyXG5cclxuICAvLyBpZiAobmV3TGF5ZXIuY29uZmlnLmRhdGFJZCkge1xyXG4gIC8vICAgY29uc3QgZGF0YXNldCA9IHN0YXRlLmRhdGFzZXRzW25ld0xheWVyLmNvbmZpZy5kYXRhSWRdO1xyXG4gIC8vICAgbmV3TGF5ZXIudXBkYXRlTGF5ZXJEb21haW4oZGF0YXNldCk7XHJcbiAgLy8gfVxyXG4gIG5ld0xheWVyLnVwZGF0ZUxheWVyRG9tYWluKHN0YXRlLmRhdGFzZXRzKTtcclxuICBjb25zdCB7bGF5ZXJEYXRhLCBsYXllcn0gPSBjYWxjdWxhdGVMYXllckRhdGEobmV3TGF5ZXIsIHN0YXRlKTtcclxuICBsZXQgbmV3U3RhdGUgPSB1cGRhdGVTdGF0ZVdpdGhMYXllckFuZERhdGEoc3RhdGUsIHtsYXllckRhdGEsIGxheWVyLCBpZHh9KTtcclxuXHJcbiAgaWYgKGxheWVyLmNvbmZpZy5hbmltYXRpb24uZW5hYmxlZCB8fCBvbGRMYXllci5jb25maWcuYW5pbWF0aW9uLmVuYWJsZWQpIHtcclxuICAgIG5ld1N0YXRlID0gdXBkYXRlQW5pbWF0aW9uRG9tYWluKG5ld1N0YXRlKTtcclxuICB9XHJcblxyXG4gIC8vIHVwZGF0ZSBzcGxpdE1hcCBsYXllciBpZFxyXG4gIGlmIChzdGF0ZS5zcGxpdE1hcHMubGVuZ3RoKSB7XHJcbiAgICBuZXdTdGF0ZSA9IHtcclxuICAgICAgLi4ubmV3U3RhdGUsXHJcbiAgICAgIHNwbGl0TWFwczogbmV3U3RhdGUuc3BsaXRNYXBzLm1hcChzZXR0aW5ncyA9PiB7XHJcbiAgICAgICAgY29uc3Qge1tvbGRJZF06IG9sZExheWVyTWFwLCAuLi5vdGhlckxheWVyc30gPSBzZXR0aW5ncy5sYXllcnM7XHJcbiAgICAgICAgcmV0dXJuIG9sZElkIGluIHNldHRpbmdzLmxheWVyc1xyXG4gICAgICAgICAgPyB7XHJcbiAgICAgICAgICAgICAgLi4uc2V0dGluZ3MsXHJcbiAgICAgICAgICAgICAgbGF5ZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAuLi5vdGhlckxheWVycyxcclxuICAgICAgICAgICAgICAgIFtsYXllci5pZF06IG9sZExheWVyTWFwXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICA6IHNldHRpbmdzO1xyXG4gICAgICB9KVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHJldHVybiBuZXdTdGF0ZTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFVwZGF0ZSBsYXllciB2aXN1YWwgY2hhbm5lbFxyXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVVcGRhdGVyc1xyXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi92aXMtc3RhdGUtdXBkYXRlcnMnKS5sYXllclZpc3VhbENoYW5uZWxDaGFuZ2VVcGRhdGVyfVxyXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBuZXh0U3RhdGVcclxuICogQHB1YmxpY1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGxheWVyVmlzdWFsQ2hhbm5lbENoYW5nZVVwZGF0ZXIoc3RhdGUsIGFjdGlvbikge1xyXG4gIGNvbnN0IHtvbGRMYXllciwgbmV3Q29uZmlnLCBjaGFubmVsfSA9IGFjdGlvbjtcclxuICBpZiAoIW9sZExheWVyLmNvbmZpZy5kYXRhSWQpIHtcclxuICAgIHJldHVybiBzdGF0ZTtcclxuICB9XHJcbiAgY29uc3QgZGF0YXNldCA9IHN0YXRlLmRhdGFzZXRzW29sZExheWVyLmNvbmZpZy5kYXRhSWRdO1xyXG5cclxuICBjb25zdCBpZHggPSBzdGF0ZS5sYXllcnMuZmluZEluZGV4KGwgPT4gbC5pZCA9PT0gb2xkTGF5ZXIuaWQpO1xyXG4gIGNvbnN0IG5ld0xheWVyID0gb2xkTGF5ZXIudXBkYXRlTGF5ZXJDb25maWcobmV3Q29uZmlnKTtcclxuXHJcbiAgbmV3TGF5ZXIudXBkYXRlTGF5ZXJWaXN1YWxDaGFubmVsKGRhdGFzZXQsIGNoYW5uZWwpO1xyXG5cclxuICBjb25zdCBvbGRMYXllckRhdGEgPSBzdGF0ZS5sYXllckRhdGFbaWR4XTtcclxuICBjb25zdCB7bGF5ZXJEYXRhLCBsYXllcn0gPSBjYWxjdWxhdGVMYXllckRhdGEobmV3TGF5ZXIsIHN0YXRlLCBvbGRMYXllckRhdGEpO1xyXG5cclxuICByZXR1cm4gdXBkYXRlU3RhdGVXaXRoTGF5ZXJBbmREYXRhKHN0YXRlLCB7bGF5ZXJEYXRhLCBsYXllciwgaWR4fSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBVcGRhdGUgbGF5ZXIgYHZpc0NvbmZpZ2BcclxuICogQG1lbWJlcm9mIHZpc1N0YXRlVXBkYXRlcnNcclxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdmlzLXN0YXRlLXVwZGF0ZXJzJykubGF5ZXJWaXNDb25maWdDaGFuZ2VVcGRhdGVyfVxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbGF5ZXJWaXNDb25maWdDaGFuZ2VVcGRhdGVyKHN0YXRlLCBhY3Rpb24pIHtcclxuICBjb25zdCB7b2xkTGF5ZXJ9ID0gYWN0aW9uO1xyXG4gIGNvbnN0IGlkeCA9IHN0YXRlLmxheWVycy5maW5kSW5kZXgobCA9PiBsLmlkID09PSBvbGRMYXllci5pZCk7XHJcbiAgY29uc3QgcHJvcHMgPSBPYmplY3Qua2V5cyhhY3Rpb24ubmV3VmlzQ29uZmlnKTtcclxuICBjb25zdCBuZXdWaXNDb25maWcgPSB7XHJcbiAgICAuLi5vbGRMYXllci5jb25maWcudmlzQ29uZmlnLFxyXG4gICAgLi4uYWN0aW9uLm5ld1Zpc0NvbmZpZ1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG5ld0xheWVyID0gb2xkTGF5ZXIudXBkYXRlTGF5ZXJDb25maWcoe3Zpc0NvbmZpZzogbmV3VmlzQ29uZmlnfSk7XHJcblxyXG4gIGlmIChuZXdMYXllci5zaG91bGRDYWxjdWxhdGVMYXllckRhdGEocHJvcHMpKSB7XHJcbiAgICBjb25zdCBvbGRMYXllckRhdGEgPSBzdGF0ZS5sYXllckRhdGFbaWR4XTtcclxuICAgIGNvbnN0IHtsYXllckRhdGEsIGxheWVyfSA9IGNhbGN1bGF0ZUxheWVyRGF0YShuZXdMYXllciwgc3RhdGUsIG9sZExheWVyRGF0YSk7XHJcbiAgICByZXR1cm4gdXBkYXRlU3RhdGVXaXRoTGF5ZXJBbmREYXRhKHN0YXRlLCB7bGF5ZXJEYXRhLCBsYXllciwgaWR4fSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gdXBkYXRlU3RhdGVXaXRoTGF5ZXJBbmREYXRhKHN0YXRlLCB7bGF5ZXI6IG5ld0xheWVyLCBpZHh9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFVwZGF0ZSBmaWx0ZXIgcHJvcGVydHlcclxuICogQG1lbWJlcm9mIHZpc1N0YXRlVXBkYXRlcnNcclxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdmlzLXN0YXRlLXVwZGF0ZXJzJykuc2V0RmlsdGVyVXBkYXRlcn1cclxuICogQHB1YmxpY1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNldEZpbHRlclVwZGF0ZXIoc3RhdGUsIGFjdGlvbikge1xyXG4gIGNvbnN0IHtpZHgsIHByb3AsIHZhbHVlLCB2YWx1ZUluZGV4ID0gMH0gPSBhY3Rpb247XHJcblxyXG4gIGNvbnN0IG9sZEZpbHRlciA9IHN0YXRlLmZpbHRlcnNbaWR4XTtcclxuICBsZXQgbmV3RmlsdGVyID0gc2V0KFtwcm9wXSwgdmFsdWUsIG9sZEZpbHRlcik7XHJcbiAgbGV0IG5ld1N0YXRlID0gc3RhdGU7XHJcblxyXG4gIGNvbnN0IHtkYXRhSWR9ID0gbmV3RmlsdGVyO1xyXG5cclxuICAvLyBFbnN1cmluZyBiYWNrd2FyZCBjb21wYXRpYmlsaXR5XHJcbiAgbGV0IGRhdGFzZXRJZHMgPSB0b0FycmF5KGRhdGFJZCk7XHJcblxyXG4gIHN3aXRjaCAocHJvcCkge1xyXG4gICAgLy8gVE9ETzogTmV4dCBQUiBmb3IgVUkgaWYgd2UgdXBkYXRlIGRhdGFJZCwgd2UgbmVlZCB0byBjb25zaWRlciB0d28gY2FzZXM6XHJcbiAgICAvLyAxLiBkYXRhSWQgaXMgZW1wdHk6IGNyZWF0ZSBhIGRlZmF1bHQgZmlsdGVyXHJcbiAgICAvLyAyLiBBZGQgYSBuZXcgZGF0YXNldCBpZFxyXG4gICAgY2FzZSBGSUxURVJfVVBEQVRFUl9QUk9QUy5kYXRhSWQ6XHJcbiAgICAgIC8vIGlmIHRyeWluZyB0byB1cGRhdGUgZmlsdGVyIGRhdGFJZC4gY3JlYXRlIGFuIGVtcHR5IG5ldyBmaWx0ZXJcclxuICAgICAgbmV3RmlsdGVyID0gdXBkYXRlRmlsdGVyRGF0YUlkKGRhdGFJZCk7XHJcbiAgICAgIGJyZWFrO1xyXG5cclxuICAgIGNhc2UgRklMVEVSX1VQREFURVJfUFJPUFMubmFtZTpcclxuICAgICAgLy8gd2UgYXJlIHN1cHBvcnRpbmcgdGhlIGN1cnJlbnQgZnVuY3Rpb25hbGl0eVxyXG4gICAgICAvLyBUT0RPOiBOZXh0IFBSIGZvciBVSSBmaWx0ZXIgbmFtZSB3aWxsIG9ubHkgdXBkYXRlIGZpbHRlciBuYW1lIGJ1dCBpdCB3b24ndCBoYXZlIHNpZGUgZWZmZWN0c1xyXG4gICAgICAvLyB3ZSBhcmUgZ29ubmEgdXNlIHBhaXIgb2YgZGF0YXNldHMgYW5kIGZpZWxkSWR4IHRvIHVwZGF0ZSB0aGUgZmlsdGVyXHJcbiAgICAgIGNvbnN0IGRhdGFzZXRJZCA9IG5ld0ZpbHRlci5kYXRhSWRbdmFsdWVJbmRleF07XHJcbiAgICAgIGNvbnN0IHtmaWx0ZXI6IHVwZGF0ZWRGaWx0ZXIsIGRhdGFzZXQ6IG5ld0RhdGFzZXR9ID0gYXBwbHlGaWx0ZXJGaWVsZE5hbWUoXHJcbiAgICAgICAgbmV3RmlsdGVyLFxyXG4gICAgICAgIHN0YXRlLmRhdGFzZXRzW2RhdGFzZXRJZF0sXHJcbiAgICAgICAgdmFsdWUsXHJcbiAgICAgICAgdmFsdWVJbmRleCxcclxuICAgICAgICB7bWVyZ2VEb21haW46IGZhbHNlfVxyXG4gICAgICApO1xyXG4gICAgICBpZiAoIXVwZGF0ZWRGaWx0ZXIpIHtcclxuICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIG5ld0ZpbHRlciA9IHVwZGF0ZWRGaWx0ZXI7XHJcblxyXG4gICAgICBpZiAobmV3RmlsdGVyLmdwdSkge1xyXG4gICAgICAgIG5ld0ZpbHRlciA9IHNldEZpbHRlckdwdU1vZGUobmV3RmlsdGVyLCBzdGF0ZS5maWx0ZXJzKTtcclxuICAgICAgICBuZXdGaWx0ZXIgPSBhc3NpZ25HcHVDaGFubmVsKG5ld0ZpbHRlciwgc3RhdGUuZmlsdGVycyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIG5ld1N0YXRlID0gc2V0KFsnZGF0YXNldHMnLCBkYXRhc2V0SWRdLCBuZXdEYXRhc2V0LCBzdGF0ZSk7XHJcblxyXG4gICAgICAvLyBvbmx5IGZpbHRlciB0aGUgY3VycmVudCBkYXRhc2V0XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBGSUxURVJfVVBEQVRFUl9QUk9QUy5sYXllcklkOlxyXG4gICAgICAvLyBXZSBuZWVkIHRvIHVwZGF0ZSBvbmx5IGRhdGFzZXRJZC9zIGlmIHdlIGhhdmUgYWRkZWQvcmVtb3ZlZCBsYXllcnNcclxuICAgICAgLy8gLSBjaGVjayBmb3IgbGF5ZXJJZCBjaGFuZ2VzIChYT1Igd29ya3MgYmVjYXVzZSBvZiBzdHJpbmcgdmFsdWVzKVxyXG4gICAgICAvLyBpZiBubyBkaWZmZXJlbmNlcyBiZXR3ZWVuIGxheWVySWRzLCBkb24ndCBkbyBhbnkgZmlsdGVyaW5nXHJcbiAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgY29uc3QgbGF5ZXJJZERpZmZlcmVuY2UgPSB4b3IobmV3RmlsdGVyLmxheWVySWQsIG9sZEZpbHRlci5sYXllcklkKTtcclxuXHJcbiAgICAgIGNvbnN0IGxheWVyRGF0YUlkcyA9IHVuaXEoXHJcbiAgICAgICAgbGF5ZXJJZERpZmZlcmVuY2VcclxuICAgICAgICAgIC5tYXAobGlkID0+XHJcbiAgICAgICAgICAgIGdldChcclxuICAgICAgICAgICAgICBzdGF0ZS5sYXllcnMuZmluZChsID0+IGwuaWQgPT09IGxpZCksXHJcbiAgICAgICAgICAgICAgWydjb25maWcnLCAnZGF0YUlkJ11cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgKVxyXG4gICAgICAgICAgLmZpbHRlcihkID0+IGQpXHJcbiAgICAgICk7XHJcblxyXG4gICAgICAvLyBvbmx5IGZpbHRlciBkYXRhc2V0c0lkc1xyXG4gICAgICBkYXRhc2V0SWRzID0gbGF5ZXJEYXRhSWRzO1xyXG5cclxuICAgICAgLy8gVXBkYXRlIG5ld0ZpbHRlciBkYXRhSWRzXHJcbiAgICAgIGNvbnN0IG5ld0RhdGFJZHMgPSB1bmlxKFxyXG4gICAgICAgIG5ld0ZpbHRlci5sYXllcklkXHJcbiAgICAgICAgICAubWFwKGxpZCA9PlxyXG4gICAgICAgICAgICBnZXQoXHJcbiAgICAgICAgICAgICAgc3RhdGUubGF5ZXJzLmZpbmQobCA9PiBsLmlkID09PSBsaWQpLFxyXG4gICAgICAgICAgICAgIFsnY29uZmlnJywgJ2RhdGFJZCddXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgIClcclxuICAgICAgICAgIC5maWx0ZXIoZCA9PiBkKVxyXG4gICAgICApO1xyXG5cclxuICAgICAgbmV3RmlsdGVyID0ge1xyXG4gICAgICAgIC4uLm5ld0ZpbHRlcixcclxuICAgICAgICBkYXRhSWQ6IG5ld0RhdGFJZHNcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGJyZWFrO1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgYnJlYWs7XHJcbiAgfVxyXG5cclxuICBjb25zdCBlbmxhcmdlZEZpbHRlciA9IHN0YXRlLmZpbHRlcnMuZmluZChmID0+IGYuZW5sYXJnZWQpO1xyXG5cclxuICBpZiAoZW5sYXJnZWRGaWx0ZXIgJiYgZW5sYXJnZWRGaWx0ZXIuaWQgIT09IG5ld0ZpbHRlci5pZCkge1xyXG4gICAgLy8gdGhlcmUgc2hvdWxkIGJlIG9ubHkgb25lIGVubGFyZ2VkIGZpbHRlclxyXG4gICAgbmV3RmlsdGVyLmVubGFyZ2VkID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICAvLyBzYXZlIG5ldyBmaWx0ZXJzIHRvIG5ld1N0YXRlXHJcbiAgbmV3U3RhdGUgPSBzZXQoWydmaWx0ZXJzJywgaWR4XSwgbmV3RmlsdGVyLCBuZXdTdGF0ZSk7XHJcblxyXG4gIC8vIGlmIHdlIGFyZSBjdXJyZW50bHkgc2V0dGluZyBhIHByb3AgdGhhdCBvbmx5IHJlcXVpcmVzIHRvIGZpbHRlciB0aGUgY3VycmVudFxyXG4gIC8vIGRhdGFzZXQgd2Ugd2lsbCBwYXNzIG9ubHkgdGhlIGN1cnJlbnQgZGF0YXNldCB0byBhcHBseUZpbHRlcnNUb0RhdGFzZXRzIGFuZFxyXG4gIC8vIHVwZGF0ZUFsbExheWVyRG9tYWluRGF0YSBvdGhlcndpc2Ugd2UgcGFzcyB0aGUgYWxsIGxpc3Qgb2YgZGF0YXNldHMgYXMgZGVmaW5lZCBpbiBkYXRhSWRcclxuICBjb25zdCBkYXRhc2V0SWRzVG9GaWx0ZXIgPSBMSU1JVEVEX0ZJTFRFUl9FRkZFQ1RfUFJPUFNbcHJvcF1cclxuICAgID8gW2RhdGFzZXRJZHNbdmFsdWVJbmRleF1dXHJcbiAgICA6IGRhdGFzZXRJZHM7XHJcblxyXG4gIC8vIGZpbHRlciBkYXRhXHJcbiAgY29uc3QgZmlsdGVyZWREYXRhc2V0cyA9IGFwcGx5RmlsdGVyc1RvRGF0YXNldHMoXHJcbiAgICBkYXRhc2V0SWRzVG9GaWx0ZXIsXHJcbiAgICBuZXdTdGF0ZS5kYXRhc2V0cyxcclxuICAgIG5ld1N0YXRlLmZpbHRlcnMsXHJcbiAgICBuZXdTdGF0ZS5sYXllcnNcclxuICApO1xyXG5cclxuICBuZXdTdGF0ZSA9IHNldChbJ2RhdGFzZXRzJ10sIGZpbHRlcmVkRGF0YXNldHMsIG5ld1N0YXRlKTtcclxuICAvLyBkYXRhSWQgaXMgYW4gYXJyYXlcclxuICAvLyBwYXNzIG9ubHkgdGhlIGRhdGFzZXQgd2UgbmVlZCB0byB1cGRhdGVcclxuICBuZXdTdGF0ZSA9IHVwZGF0ZUFsbExheWVyRG9tYWluRGF0YShuZXdTdGF0ZSwgZGF0YXNldElkc1RvRmlsdGVyLCBuZXdGaWx0ZXIpO1xyXG5cclxuICByZXR1cm4gbmV3U3RhdGU7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBTZXQgdGhlIHByb3BlcnR5IG9mIGEgZmlsdGVyIHBsb3RcclxuICogQG1lbWJlcm9mIHZpc1N0YXRlVXBkYXRlcnNcclxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdmlzLXN0YXRlLXVwZGF0ZXJzJykuc2V0RmlsdGVyUGxvdFVwZGF0ZXJ9XHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmV4cG9ydCBjb25zdCBzZXRGaWx0ZXJQbG90VXBkYXRlciA9IChzdGF0ZSwge2lkeCwgbmV3UHJvcCwgdmFsdWVJbmRleCA9IDB9KSA9PiB7XHJcbiAgbGV0IG5ld0ZpbHRlciA9IHsuLi5zdGF0ZS5maWx0ZXJzW2lkeF0sIC4uLm5ld1Byb3B9O1xyXG4gIGNvbnN0IHByb3AgPSBPYmplY3Qua2V5cyhuZXdQcm9wKVswXTtcclxuICBpZiAocHJvcCA9PT0gJ3lBeGlzJykge1xyXG4gICAgY29uc3QgcGxvdFR5cGUgPSBnZXREZWZhdWx0RmlsdGVyUGxvdFR5cGUobmV3RmlsdGVyKTtcclxuICAgIC8vIFRPRE86IHBsb3QgaXMgbm90IHN1cHBvcnRlZCBpbiBtdWx0aSBkYXRhc2V0IGZpbHRlciBmb3Igbm93XHJcbiAgICBpZiAocGxvdFR5cGUpIHtcclxuICAgICAgbmV3RmlsdGVyID0ge1xyXG4gICAgICAgIC4uLm5ld0ZpbHRlcixcclxuICAgICAgICAuLi5nZXRGaWx0ZXJQbG90KFxyXG4gICAgICAgICAgey4uLm5ld0ZpbHRlciwgcGxvdFR5cGV9LFxyXG4gICAgICAgICAgc3RhdGUuZGF0YXNldHNbbmV3RmlsdGVyLmRhdGFJZFt2YWx1ZUluZGV4XV0uYWxsRGF0YVxyXG4gICAgICAgICksXHJcbiAgICAgICAgcGxvdFR5cGVcclxuICAgICAgfTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICAuLi5zdGF0ZSxcclxuICAgIGZpbHRlcnM6IHN0YXRlLmZpbHRlcnMubWFwKChmLCBpKSA9PiAoaSA9PT0gaWR4ID8gbmV3RmlsdGVyIDogZikpXHJcbiAgfTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBBZGQgYSBuZXcgZmlsdGVyXHJcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZVVwZGF0ZXJzXHJcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL3Zpcy1zdGF0ZS11cGRhdGVycycpLmFkZEZpbHRlclVwZGF0ZXJ9XHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmV4cG9ydCBjb25zdCBhZGRGaWx0ZXJVcGRhdGVyID0gKHN0YXRlLCBhY3Rpb24pID0+XHJcbiAgIWFjdGlvbi5kYXRhSWRcclxuICAgID8gc3RhdGVcclxuICAgIDoge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGZpbHRlcnM6IFsuLi5zdGF0ZS5maWx0ZXJzLCBnZXREZWZhdWx0RmlsdGVyKGFjdGlvbi5kYXRhSWQpXVxyXG4gICAgICB9O1xyXG5cclxuLyoqXHJcbiAqIFNldCBsYXllciBjb2xvciBwYWxldHRlIHVpIHN0YXRlXHJcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZVVwZGF0ZXJzXHJcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL3Zpcy1zdGF0ZS11cGRhdGVycycpLmxheWVyQ29sb3JVSUNoYW5nZVVwZGF0ZXJ9XHJcbiAqL1xyXG5leHBvcnQgY29uc3QgbGF5ZXJDb2xvclVJQ2hhbmdlVXBkYXRlciA9IChzdGF0ZSwge29sZExheWVyLCBwcm9wLCBuZXdDb25maWd9KSA9PiB7XHJcbiAgY29uc3QgbmV3TGF5ZXIgPSBvbGRMYXllci51cGRhdGVMYXllckNvbG9yVUkocHJvcCwgbmV3Q29uZmlnKTtcclxuICByZXR1cm4ge1xyXG4gICAgLi4uc3RhdGUsXHJcbiAgICBsYXllcnM6IHN0YXRlLmxheWVycy5tYXAobCA9PiAobC5pZCA9PT0gb2xkTGF5ZXIuaWQgPyBuZXdMYXllciA6IGwpKVxyXG4gIH07XHJcbn07XHJcblxyXG4vKipcclxuICogU3RhcnQgYW5kIGVuZCBmaWx0ZXIgYW5pbWF0aW9uXHJcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZVVwZGF0ZXJzXHJcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL3Zpcy1zdGF0ZS11cGRhdGVycycpLnRvZ2dsZUZpbHRlckFuaW1hdGlvblVwZGF0ZXJ9XHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmV4cG9ydCBjb25zdCB0b2dnbGVGaWx0ZXJBbmltYXRpb25VcGRhdGVyID0gKHN0YXRlLCBhY3Rpb24pID0+ICh7XHJcbiAgLi4uc3RhdGUsXHJcbiAgZmlsdGVyczogc3RhdGUuZmlsdGVycy5tYXAoKGYsIGkpID0+IChpID09PSBhY3Rpb24uaWR4ID8gey4uLmYsIGlzQW5pbWF0aW5nOiAhZi5pc0FuaW1hdGluZ30gOiBmKSlcclxufSk7XHJcblxyXG4vKipcclxuICogQ2hhbmdlIGZpbHRlciBhbmltYXRpb24gc3BlZWRcclxuICogQG1lbWJlcm9mIHZpc1N0YXRlVXBkYXRlcnNcclxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdmlzLXN0YXRlLXVwZGF0ZXJzJykudXBkYXRlRmlsdGVyQW5pbWF0aW9uU3BlZWRVcGRhdGVyfVxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgdXBkYXRlRmlsdGVyQW5pbWF0aW9uU3BlZWRVcGRhdGVyID0gKHN0YXRlLCBhY3Rpb24pID0+ICh7XHJcbiAgLi4uc3RhdGUsXHJcbiAgZmlsdGVyczogc3RhdGUuZmlsdGVycy5tYXAoKGYsIGkpID0+IChpID09PSBhY3Rpb24uaWR4ID8gey4uLmYsIHNwZWVkOiBhY3Rpb24uc3BlZWR9IDogZikpXHJcbn0pO1xyXG5cclxuLyoqXHJcbiAqIFJlc2V0IGFuaW1hdGlvbiBjb25maWcgY3VycmVudCB0aW1lIHRvIGEgc3BlY2lmaWVkIHZhbHVlXHJcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZVVwZGF0ZXJzXHJcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL3Zpcy1zdGF0ZS11cGRhdGVycycpLnVwZGF0ZUFuaW1hdGlvblRpbWVVcGRhdGVyfVxyXG4gKiBAcHVibGljXHJcbiAqXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgdXBkYXRlQW5pbWF0aW9uVGltZVVwZGF0ZXIgPSAoc3RhdGUsIHt2YWx1ZX0pID0+ICh7XHJcbiAgLi4uc3RhdGUsXHJcbiAgYW5pbWF0aW9uQ29uZmlnOiB7XHJcbiAgICAuLi5zdGF0ZS5hbmltYXRpb25Db25maWcsXHJcbiAgICBjdXJyZW50VGltZTogdmFsdWVcclxuICB9XHJcbn0pO1xyXG5cclxuLyoqXHJcbiAqIFVwZGF0ZSBhbmltYXRpb24gc3BlZWQgd2l0aCB0aGUgdmVydGljYWwgc3BlZWQgc2xpZGVyXHJcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZVVwZGF0ZXJzXHJcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL3Zpcy1zdGF0ZS11cGRhdGVycycpLnVwZGF0ZUxheWVyQW5pbWF0aW9uU3BlZWRVcGRhdGVyfVxyXG4gKiBAcHVibGljXHJcbiAqXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgdXBkYXRlTGF5ZXJBbmltYXRpb25TcGVlZFVwZGF0ZXIgPSAoc3RhdGUsIHtzcGVlZH0pID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgLi4uc3RhdGUsXHJcbiAgICBhbmltYXRpb25Db25maWc6IHtcclxuICAgICAgLi4uc3RhdGUuYW5pbWF0aW9uQ29uZmlnLFxyXG4gICAgICBzcGVlZFxyXG4gICAgfVxyXG4gIH07XHJcbn07XHJcblxyXG4vKipcclxuICogU2hvdyBsYXJnZXIgdGltZSBmaWx0ZXIgYXQgYm90dG9tIGZvciB0aW1lIHBsYXliYWNrIChhcHBseSB0byB0aW1lIGZpbHRlciBvbmx5KVxyXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVVcGRhdGVyc1xyXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi92aXMtc3RhdGUtdXBkYXRlcnMnKS5lbmxhcmdlRmlsdGVyVXBkYXRlcn1cclxuICogQHB1YmxpY1xyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGVubGFyZ2VGaWx0ZXJVcGRhdGVyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBjb25zdCBpc0VubGFyZ2VkID0gc3RhdGUuZmlsdGVyc1thY3Rpb24uaWR4XS5lbmxhcmdlZDtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIC4uLnN0YXRlLFxyXG4gICAgZmlsdGVyczogc3RhdGUuZmlsdGVycy5tYXAoKGYsIGkpID0+IHtcclxuICAgICAgZi5lbmxhcmdlZCA9ICFpc0VubGFyZ2VkICYmIGkgPT09IGFjdGlvbi5pZHg7XHJcbiAgICAgIHJldHVybiBmO1xyXG4gICAgfSlcclxuICB9O1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIFRvZ2dsZXMgZmlsdGVyIGZlYXR1cmUgdmlzaWJpbGl0eVxyXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVVcGRhdGVyc1xyXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi92aXMtc3RhdGUtdXBkYXRlcnMnKS50b2dnbGVGaWx0ZXJGZWF0dXJlVXBkYXRlcn1cclxuICovXHJcbmV4cG9ydCBjb25zdCB0b2dnbGVGaWx0ZXJGZWF0dXJlVXBkYXRlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgY29uc3QgZmlsdGVyID0gc3RhdGUuZmlsdGVyc1thY3Rpb24uaWR4XTtcclxuICBjb25zdCBpc1Zpc2libGUgPSBnZXQoZmlsdGVyLCBbJ3ZhbHVlJywgJ3Byb3BlcnRpZXMnLCAnaXNWaXNpYmxlJ10pO1xyXG4gIGNvbnN0IG5ld0ZpbHRlciA9IHtcclxuICAgIC4uLmZpbHRlcixcclxuICAgIHZhbHVlOiBmZWF0dXJlVG9GaWx0ZXJWYWx1ZShmaWx0ZXIudmFsdWUsIGZpbHRlci5pZCwge1xyXG4gICAgICBpc1Zpc2libGU6ICFpc1Zpc2libGVcclxuICAgIH0pXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIC4uLnN0YXRlLFxyXG4gICAgZmlsdGVyczogT2JqZWN0LmFzc2lnbihbLi4uc3RhdGUuZmlsdGVyc10sIHtbYWN0aW9uLmlkeF06IG5ld0ZpbHRlcn0pXHJcbiAgfTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBSZW1vdmUgYSBmaWx0ZXJcclxuICogQG1lbWJlcm9mIHZpc1N0YXRlVXBkYXRlcnNcclxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdmlzLXN0YXRlLXVwZGF0ZXJzJykucmVtb3ZlRmlsdGVyVXBkYXRlcn1cclxuICogQHB1YmxpY1xyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHJlbW92ZUZpbHRlclVwZGF0ZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIGNvbnN0IHtpZHh9ID0gYWN0aW9uO1xyXG4gIGNvbnN0IHtkYXRhSWQsIGlkfSA9IHN0YXRlLmZpbHRlcnNbaWR4XTtcclxuXHJcbiAgY29uc3QgbmV3RmlsdGVycyA9IFtcclxuICAgIC4uLnN0YXRlLmZpbHRlcnMuc2xpY2UoMCwgaWR4KSxcclxuICAgIC4uLnN0YXRlLmZpbHRlcnMuc2xpY2UoaWR4ICsgMSwgc3RhdGUuZmlsdGVycy5sZW5ndGgpXHJcbiAgXTtcclxuXHJcbiAgY29uc3QgZmlsdGVyZWREYXRhc2V0cyA9IGFwcGx5RmlsdGVyc1RvRGF0YXNldHMoZGF0YUlkLCBzdGF0ZS5kYXRhc2V0cywgbmV3RmlsdGVycywgc3RhdGUubGF5ZXJzKTtcclxuICBjb25zdCBuZXdFZGl0b3IgPVxyXG4gICAgZ2V0RmlsdGVySWRJbkZlYXR1cmUoc3RhdGUuZWRpdG9yLnNlbGVjdGVkRmVhdHVyZSkgPT09IGlkXHJcbiAgICAgID8ge1xyXG4gICAgICAgICAgLi4uc3RhdGUuZWRpdG9yLFxyXG4gICAgICAgICAgc2VsZWN0ZWRGZWF0dXJlOiBudWxsXHJcbiAgICAgICAgfVxyXG4gICAgICA6IHN0YXRlLmVkaXRvcjtcclxuXHJcbiAgbGV0IG5ld1N0YXRlID0gc2V0KFsnZmlsdGVycyddLCBuZXdGaWx0ZXJzLCBzdGF0ZSk7XHJcbiAgbmV3U3RhdGUgPSBzZXQoWydkYXRhc2V0cyddLCBmaWx0ZXJlZERhdGFzZXRzLCBuZXdTdGF0ZSk7XHJcbiAgbmV3U3RhdGUgPSBzZXQoWydlZGl0b3InXSwgbmV3RWRpdG9yLCBuZXdTdGF0ZSk7XHJcblxyXG4gIHJldHVybiB1cGRhdGVBbGxMYXllckRvbWFpbkRhdGEobmV3U3RhdGUsIGRhdGFJZCwgdW5kZWZpbmVkKTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBBZGQgYSBuZXcgbGF5ZXJcclxuICogQG1lbWJlcm9mIHZpc1N0YXRlVXBkYXRlcnNcclxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdmlzLXN0YXRlLXVwZGF0ZXJzJykuYWRkTGF5ZXJVcGRhdGVyfVxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgYWRkTGF5ZXJVcGRhdGVyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBjb25zdCBkZWZhdWx0RGF0YXNldCA9IE9iamVjdC5rZXlzKHN0YXRlLmRhdGFzZXRzKVswXTtcclxuICBjb25zdCBuZXdMYXllciA9IG5ldyBMYXllcih7XHJcbiAgICBpc1Zpc2libGU6IHRydWUsXHJcbiAgICBpc0NvbmZpZ0FjdGl2ZTogdHJ1ZSxcclxuICAgIGRhdGFJZDogZGVmYXVsdERhdGFzZXQsXHJcbiAgICAuLi5hY3Rpb24ucHJvcHNcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIC4uLnN0YXRlLFxyXG4gICAgbGF5ZXJzOiBbLi4uc3RhdGUubGF5ZXJzLCBuZXdMYXllcl0sXHJcbiAgICBsYXllckRhdGE6IFsuLi5zdGF0ZS5sYXllckRhdGEsIHt9XSxcclxuICAgIGxheWVyT3JkZXI6IFsuLi5zdGF0ZS5sYXllck9yZGVyLCBzdGF0ZS5sYXllck9yZGVyLmxlbmd0aF0sXHJcbiAgICBzcGxpdE1hcHM6IGFkZE5ld0xheWVyc1RvU3BsaXRNYXAoc3RhdGUuc3BsaXRNYXBzLCBuZXdMYXllcilcclxuICB9O1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIHJlbW92ZSBsYXllclxyXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVVcGRhdGVyc1xyXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi92aXMtc3RhdGUtdXBkYXRlcnMnKS5yZW1vdmVMYXllclVwZGF0ZXJ9XHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmV4cG9ydCBjb25zdCByZW1vdmVMYXllclVwZGF0ZXIgPSAoc3RhdGUsIHtpZHh9KSA9PiB7XHJcbiAgY29uc3Qge2xheWVycywgbGF5ZXJEYXRhLCBjbGlja2VkLCBob3ZlckluZm99ID0gc3RhdGU7XHJcbiAgY29uc3QgbGF5ZXJUb1JlbW92ZSA9IHN0YXRlLmxheWVyc1tpZHhdO1xyXG4gIGNvbnN0IG5ld01hcHMgPSByZW1vdmVMYXllckZyb21TcGxpdE1hcHMoc3RhdGUuc3BsaXRNYXBzLCBsYXllclRvUmVtb3ZlKTtcclxuXHJcbiAgY29uc3QgbmV3U3RhdGUgPSB7XHJcbiAgICAuLi5zdGF0ZSxcclxuICAgIGxheWVyczogWy4uLmxheWVycy5zbGljZSgwLCBpZHgpLCAuLi5sYXllcnMuc2xpY2UoaWR4ICsgMSwgbGF5ZXJzLmxlbmd0aCldLFxyXG4gICAgbGF5ZXJEYXRhOiBbLi4ubGF5ZXJEYXRhLnNsaWNlKDAsIGlkeCksIC4uLmxheWVyRGF0YS5zbGljZShpZHggKyAxLCBsYXllckRhdGEubGVuZ3RoKV0sXHJcbiAgICBsYXllck9yZGVyOiBzdGF0ZS5sYXllck9yZGVyLmZpbHRlcihpID0+IGkgIT09IGlkeCkubWFwKHBpZCA9PiAocGlkID4gaWR4ID8gcGlkIC0gMSA6IHBpZCkpLFxyXG4gICAgY2xpY2tlZDogbGF5ZXJUb1JlbW92ZS5pc0xheWVySG92ZXJlZChjbGlja2VkKSA/IHVuZGVmaW5lZCA6IGNsaWNrZWQsXHJcbiAgICBob3ZlckluZm86IGxheWVyVG9SZW1vdmUuaXNMYXllckhvdmVyZWQoaG92ZXJJbmZvKSA/IHVuZGVmaW5lZCA6IGhvdmVySW5mbyxcclxuICAgIHNwbGl0TWFwczogbmV3TWFwc1xyXG4gICAgLy8gVE9ETzogdXBkYXRlIGZpbHRlcnMsIGNyZWF0ZSBoZWxwZXIgdG8gcmVtb3ZlIGxheWVyIGZvcm0gZmlsdGVyIChyZW1vdmUgbGF5ZXJpZCBhbmQgZGF0YWlkKSBpZiBtYXBwZWRcclxuICB9O1xyXG5cclxuICByZXR1cm4gdXBkYXRlQW5pbWF0aW9uRG9tYWluKG5ld1N0YXRlKTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBSZW9yZGVyIGxheWVyXHJcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZVVwZGF0ZXJzXHJcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL3Zpcy1zdGF0ZS11cGRhdGVycycpLnJlb3JkZXJMYXllclVwZGF0ZXJ9XHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmV4cG9ydCBjb25zdCByZW9yZGVyTGF5ZXJVcGRhdGVyID0gKHN0YXRlLCB7b3JkZXJ9KSA9PiAoe1xyXG4gIC4uLnN0YXRlLFxyXG4gIGxheWVyT3JkZXI6IG9yZGVyXHJcbn0pO1xyXG5cclxuLyoqXHJcbiAqIFJlbW92ZSBhIGRhdGFzZXQgYW5kIGFsbCBsYXllcnMsIGZpbHRlcnMsIHRvb2x0aXAgY29uZmlncyB0aGF0IGJhc2VkIG9uIGl0XHJcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZVVwZGF0ZXJzXHJcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL3Zpcy1zdGF0ZS11cGRhdGVycycpLnJlbW92ZURhdGFzZXRVcGRhdGVyfVxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgcmVtb3ZlRGF0YXNldFVwZGF0ZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIC8vIGV4dHJhY3QgZGF0YXNldCBrZXlcclxuICBjb25zdCB7ZGF0YUlkOiBkYXRhc2V0S2V5fSA9IGFjdGlvbjtcclxuICBjb25zdCB7ZGF0YXNldHN9ID0gc3RhdGU7XHJcblxyXG4gIC8vIGNoZWNrIGlmIGRhdGFzZXQgaXMgcHJlc2VudFxyXG4gIGlmICghZGF0YXNldHNbZGF0YXNldEtleV0pIHtcclxuICAgIHJldHVybiBzdGF0ZTtcclxuICB9XHJcblxyXG4gIC8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXHJcbiAgY29uc3Qge1xyXG4gICAgbGF5ZXJzLFxyXG4gICAgZGF0YXNldHM6IHtbZGF0YXNldEtleV06IGRhdGFzZXQsIC4uLm5ld0RhdGFzZXRzfVxyXG4gIH0gPSBzdGF0ZTtcclxuICAvKiBlc2xpbnQtZW5hYmxlIG5vLXVudXNlZC12YXJzICovXHJcblxyXG4gIGNvbnN0IGluZGV4ZXMgPSBsYXllcnMucmVkdWNlKChsaXN0T2ZJbmRleGVzLCBsYXllciwgaW5kZXgpID0+IHtcclxuICAgIGlmIChsYXllci5jb25maWcuZGF0YUlkID09PSBkYXRhc2V0S2V5KSB7XHJcbiAgICAgIGxpc3RPZkluZGV4ZXMucHVzaChpbmRleCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbGlzdE9mSW5kZXhlcztcclxuICB9LCBbXSk7XHJcblxyXG4gIC8vIHJlbW92ZSBsYXllcnMgYW5kIGRhdGFzZXRzXHJcbiAgY29uc3Qge25ld1N0YXRlfSA9IGluZGV4ZXMucmVkdWNlKFxyXG4gICAgKHtuZXdTdGF0ZTogY3VycmVudFN0YXRlLCBpbmRleENvdW50ZXJ9LCBpZHgpID0+IHtcclxuICAgICAgY29uc3QgY3VycmVudEluZGV4ID0gaWR4IC0gaW5kZXhDb3VudGVyO1xyXG4gICAgICBjdXJyZW50U3RhdGUgPSByZW1vdmVMYXllclVwZGF0ZXIoY3VycmVudFN0YXRlLCB7aWR4OiBjdXJyZW50SW5kZXh9KTtcclxuICAgICAgaW5kZXhDb3VudGVyKys7XHJcbiAgICAgIHJldHVybiB7bmV3U3RhdGU6IGN1cnJlbnRTdGF0ZSwgaW5kZXhDb3VudGVyfTtcclxuICAgIH0sXHJcbiAgICB7bmV3U3RhdGU6IHsuLi5zdGF0ZSwgZGF0YXNldHM6IG5ld0RhdGFzZXRzfSwgaW5kZXhDb3VudGVyOiAwfVxyXG4gICk7XHJcblxyXG4gIC8vIHJlbW92ZSBmaWx0ZXJzXHJcbiAgY29uc3QgZmlsdGVycyA9IHN0YXRlLmZpbHRlcnMuZmlsdGVyKGZpbHRlciA9PiAhZmlsdGVyLmRhdGFJZC5pbmNsdWRlcyhkYXRhc2V0S2V5KSk7XHJcblxyXG4gIC8vIHVwZGF0ZSBpbnRlcmFjdGlvbkNvbmZpZ1xyXG4gIGxldCB7aW50ZXJhY3Rpb25Db25maWd9ID0gc3RhdGU7XHJcbiAgY29uc3Qge3Rvb2x0aXB9ID0gaW50ZXJhY3Rpb25Db25maWc7XHJcbiAgaWYgKHRvb2x0aXApIHtcclxuICAgIGNvbnN0IHtjb25maWd9ID0gdG9vbHRpcDtcclxuICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXHJcbiAgICBjb25zdCB7W2RhdGFzZXRLZXldOiBmaWVsZHMsIC4uLmZpZWxkc1RvU2hvd30gPSBjb25maWcuZmllbGRzVG9TaG93O1xyXG4gICAgLyogZXNsaW50LWVuYWJsZSBuby11bnVzZWQtdmFycyAqL1xyXG4gICAgaW50ZXJhY3Rpb25Db25maWcgPSB7XHJcbiAgICAgIC4uLmludGVyYWN0aW9uQ29uZmlnLFxyXG4gICAgICB0b29sdGlwOiB7Li4udG9vbHRpcCwgY29uZmlnOiB7Li4uY29uZmlnLCBmaWVsZHNUb1Nob3d9fVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHJldHVybiB7Li4ubmV3U3RhdGUsIGZpbHRlcnMsIGludGVyYWN0aW9uQ29uZmlnfTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiB1cGRhdGUgbGF5ZXIgYmxlbmRpbmcgbW9kZVxyXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVVcGRhdGVyc1xyXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi92aXMtc3RhdGUtdXBkYXRlcnMnKS51cGRhdGVMYXllckJsZW5kaW5nVXBkYXRlcn1cclxuICogQHB1YmxpY1xyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHVwZGF0ZUxheWVyQmxlbmRpbmdVcGRhdGVyID0gKHN0YXRlLCBhY3Rpb24pID0+ICh7XHJcbiAgLi4uc3RhdGUsXHJcbiAgbGF5ZXJCbGVuZGluZzogYWN0aW9uLm1vZGVcclxufSk7XHJcblxyXG4vKipcclxuICogRGlzcGxheSBkYXRhc2V0IHRhYmxlIGluIGEgbW9kYWxcclxuICogQG1lbWJlcm9mIHZpc1N0YXRlVXBkYXRlcnNcclxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdmlzLXN0YXRlLXVwZGF0ZXJzJykuc2hvd0RhdGFzZXRUYWJsZVVwZGF0ZXJ9XHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmV4cG9ydCBjb25zdCBzaG93RGF0YXNldFRhYmxlVXBkYXRlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIC4uLnN0YXRlLFxyXG4gICAgZWRpdGluZ0RhdGFzZXQ6IGFjdGlvbi5kYXRhSWRcclxuICB9O1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIHJlc2V0IHZpc1N0YXRlIHRvIGluaXRpYWwgU3RhdGVcclxuICogQG1lbWJlcm9mIHZpc1N0YXRlVXBkYXRlcnNcclxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdmlzLXN0YXRlLXVwZGF0ZXJzJykucmVzZXRNYXBDb25maWdVcGRhdGVyfVxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgcmVzZXRNYXBDb25maWdVcGRhdGVyID0gc3RhdGUgPT4gKHtcclxuICAuLi5JTklUSUFMX1ZJU19TVEFURSxcclxuICAuLi5zdGF0ZS5pbml0aWFsU3RhdGUsXHJcbiAgaW5pdGlhbFN0YXRlOiBzdGF0ZS5pbml0aWFsU3RhdGVcclxufSk7XHJcblxyXG4vKipcclxuICogUHJvcGFnYXRlIGB2aXNTdGF0ZWAgcmVkdWNlciB3aXRoIGEgbmV3IGNvbmZpZ3VyYXRpb24uIEN1cnJlbnQgY29uZmlnIHdpbGwgYmUgb3ZlcnJpZGUuXHJcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZVVwZGF0ZXJzXHJcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL3Zpcy1zdGF0ZS11cGRhdGVycycpLnJlY2VpdmVNYXBDb25maWdVcGRhdGVyfVxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgcmVjZWl2ZU1hcENvbmZpZ1VwZGF0ZXIgPSAoc3RhdGUsIHtwYXlsb2FkOiB7Y29uZmlnID0ge30sIG9wdGlvbnMgPSB7fX19KSA9PiB7XHJcbiAgaWYgKCFjb25maWcudmlzU3RhdGUpIHtcclxuICAgIHJldHVybiBzdGF0ZTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHtcclxuICAgIGZpbHRlcnMsXHJcbiAgICBsYXllcnMsXHJcbiAgICBpbnRlcmFjdGlvbkNvbmZpZyxcclxuICAgIGxheWVyQmxlbmRpbmcsXHJcbiAgICBzcGxpdE1hcHMsXHJcbiAgICBhbmltYXRpb25Db25maWdcclxuICB9ID0gY29uZmlnLnZpc1N0YXRlO1xyXG5cclxuICBjb25zdCB7a2VlcEV4aXN0aW5nQ29uZmlnfSA9IG9wdGlvbnM7XHJcblxyXG4gIC8vIHJlc2V0IGNvbmZpZyBpZiBrZWVwRXhpc3RpbmdDb25maWcgaXMgZmFsc3lcclxuICBsZXQgbWVyZ2VkU3RhdGUgPSAha2VlcEV4aXN0aW5nQ29uZmlnID8gcmVzZXRNYXBDb25maWdVcGRhdGVyKHN0YXRlKSA6IHN0YXRlO1xyXG4gIG1lcmdlZFN0YXRlID0gbWVyZ2VMYXllcnMobWVyZ2VkU3RhdGUsIGxheWVycyk7XHJcbiAgbWVyZ2VkU3RhdGUgPSBtZXJnZUZpbHRlcnMobWVyZ2VkU3RhdGUsIGZpbHRlcnMpO1xyXG4gIG1lcmdlZFN0YXRlID0gbWVyZ2VJbnRlcmFjdGlvbnMobWVyZ2VkU3RhdGUsIGludGVyYWN0aW9uQ29uZmlnKTtcclxuICBtZXJnZWRTdGF0ZSA9IG1lcmdlTGF5ZXJCbGVuZGluZyhtZXJnZWRTdGF0ZSwgbGF5ZXJCbGVuZGluZyk7XHJcbiAgbWVyZ2VkU3RhdGUgPSBtZXJnZVNwbGl0TWFwcyhtZXJnZWRTdGF0ZSwgc3BsaXRNYXBzKTtcclxuICBtZXJnZWRTdGF0ZSA9IG1lcmdlQW5pbWF0aW9uQ29uZmlnKG1lcmdlZFN0YXRlLCBhbmltYXRpb25Db25maWcpO1xyXG5cclxuICByZXR1cm4gbWVyZ2VkU3RhdGU7XHJcbn07XHJcblxyXG4vKipcclxuICogVHJpZ2dlciBsYXllciBob3ZlciBldmVudCB3aXRoIGhvdmVyZWQgb2JqZWN0XHJcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZVVwZGF0ZXJzXHJcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL3Zpcy1zdGF0ZS11cGRhdGVycycpLmxheWVySG92ZXJVcGRhdGVyfVxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgbGF5ZXJIb3ZlclVwZGF0ZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4gKHtcclxuICAuLi5zdGF0ZSxcclxuICBob3ZlckluZm86IGFjdGlvbi5pbmZvXHJcbn0pO1xyXG5cclxuLyogZXNsaW50LWVuYWJsZSBtYXgtc3RhdGVtZW50cyAqL1xyXG5cclxuLyoqXHJcbiAqIFVwZGF0ZSBgaW50ZXJhY3Rpb25Db25maWdgXHJcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZVVwZGF0ZXJzXHJcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL3Zpcy1zdGF0ZS11cGRhdGVycycpLmludGVyYWN0aW9uQ29uZmlnQ2hhbmdlVXBkYXRlcn1cclxuICogQHB1YmxpY1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGludGVyYWN0aW9uQ29uZmlnQ2hhbmdlVXBkYXRlcihzdGF0ZSwgYWN0aW9uKSB7XHJcbiAgY29uc3Qge2NvbmZpZ30gPSBhY3Rpb247XHJcblxyXG4gIGNvbnN0IGludGVyYWN0aW9uQ29uZmlnID0ge1xyXG4gICAgLi4uc3RhdGUuaW50ZXJhY3Rpb25Db25maWcsXHJcbiAgICAuLi57W2NvbmZpZy5pZF06IGNvbmZpZ31cclxuICB9O1xyXG5cclxuICAvLyBEb24ndCBlbmFibGUgdG9vbHRpcCBhbmQgYnJ1c2ggYXQgdGhlIHNhbWUgdGltZVxyXG4gIC8vIGJ1dCBjb29yZGluYXRlcyBjYW4gYmUgc2hvd24gYXQgYWxsIHRpbWVcclxuICBjb25zdCBjb250cmFkaWN0ID0gWydicnVzaCcsICd0b29sdGlwJ107XHJcblxyXG4gIGlmIChcclxuICAgIGNvbnRyYWRpY3QuaW5jbHVkZXMoY29uZmlnLmlkKSAmJlxyXG4gICAgY29uZmlnLmVuYWJsZWQgJiZcclxuICAgICFzdGF0ZS5pbnRlcmFjdGlvbkNvbmZpZ1tjb25maWcuaWRdLmVuYWJsZWRcclxuICApIHtcclxuICAgIC8vIG9ubHkgZW5hYmxlIG9uZSBpbnRlcmFjdGlvbiBhdCBhIHRpbWVcclxuICAgIGNvbnRyYWRpY3QuZm9yRWFjaChrID0+IHtcclxuICAgICAgaWYgKGsgIT09IGNvbmZpZy5pZCkge1xyXG4gICAgICAgIGludGVyYWN0aW9uQ29uZmlnW2tdID0gey4uLmludGVyYWN0aW9uQ29uZmlnW2tdLCBlbmFibGVkOiBmYWxzZX07XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgbmV3U3RhdGUgPSB7XHJcbiAgICAuLi5zdGF0ZSxcclxuICAgIGludGVyYWN0aW9uQ29uZmlnXHJcbiAgfTtcclxuXHJcbiAgaWYgKGNvbmZpZy5pZCA9PT0gJ2dlb2NvZGVyJyAmJiAhY29uZmlnLmVuYWJsZWQpIHtcclxuICAgIHJldHVybiByZW1vdmVEYXRhc2V0VXBkYXRlcihuZXdTdGF0ZSwge2RhdGFJZDogJ2dlb2NvZGVyX2RhdGFzZXQnfSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gbmV3U3RhdGU7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUcmlnZ2VyIGxheWVyIGNsaWNrIGV2ZW50IHdpdGggY2xpY2tlZCBvYmplY3RcclxuICogQG1lbWJlcm9mIHZpc1N0YXRlVXBkYXRlcnNcclxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdmlzLXN0YXRlLXVwZGF0ZXJzJykubGF5ZXJDbGlja1VwZGF0ZXJ9XHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmV4cG9ydCBjb25zdCBsYXllckNsaWNrVXBkYXRlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiAoe1xyXG4gIC4uLnN0YXRlLFxyXG4gIG1vdXNlUG9zOiBzdGF0ZS5pbnRlcmFjdGlvbkNvbmZpZy5jb29yZGluYXRlLmVuYWJsZWRcclxuICAgID8ge1xyXG4gICAgICAgIC4uLnN0YXRlLm1vdXNlUG9zLFxyXG4gICAgICAgIHBpbm5lZDogc3RhdGUubW91c2VQb3MucGlubmVkID8gbnVsbCA6IGNsb25lRGVlcChzdGF0ZS5tb3VzZVBvcylcclxuICAgICAgfVxyXG4gICAgOiBzdGF0ZS5tb3VzZVBvcyxcclxuICBjbGlja2VkOiBhY3Rpb24uaW5mbyAmJiBhY3Rpb24uaW5mby5waWNrZWQgPyBhY3Rpb24uaW5mbyA6IG51bGxcclxufSk7XHJcblxyXG4vKipcclxuICogVHJpZ2dlciBtYXAgY2xpY2sgZXZlbnQsIHVuc2VsZWN0IGNsaWNrZWQgb2JqZWN0XHJcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZVVwZGF0ZXJzXHJcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL3Zpcy1zdGF0ZS11cGRhdGVycycpLm1hcENsaWNrVXBkYXRlcn1cclxuICogQHB1YmxpY1xyXG4gKi9cclxuZXhwb3J0IGNvbnN0IG1hcENsaWNrVXBkYXRlciA9IHN0YXRlID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgLi4uc3RhdGUsXHJcbiAgICBjbGlja2VkOiBudWxsXHJcbiAgfTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBUcmlnZ2VyIG1hcCBtb3ZlIGV2ZW50XHJcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZVVwZGF0ZXJzXHJcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL3Zpcy1zdGF0ZS11cGRhdGVycycpLm1vdXNlTW92ZVVwZGF0ZXJ9XHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmV4cG9ydCBjb25zdCBtb3VzZU1vdmVVcGRhdGVyID0gKHN0YXRlLCB7ZXZ0fSkgPT4ge1xyXG4gIGlmIChPYmplY3QudmFsdWVzKHN0YXRlLmludGVyYWN0aW9uQ29uZmlnKS5zb21lKGNvbmZpZyA9PiBjb25maWcuZW5hYmxlZCkpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIC4uLnN0YXRlLFxyXG4gICAgICBtb3VzZVBvczoge1xyXG4gICAgICAgIC4uLnN0YXRlLm1vdXNlUG9zLFxyXG4gICAgICAgIG1vdXNlUG9zaXRpb246IFsuLi5ldnQucG9pbnRdLFxyXG4gICAgICAgIGNvb3JkaW5hdGU6IFsuLi5ldnQubG5nTGF0XVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHN0YXRlO1xyXG59O1xyXG4vKipcclxuICogVG9nZ2xlIHZpc2liaWxpdHkgb2YgYSBsYXllciBmb3IgYSBzcGxpdCBtYXBcclxuICogQG1lbWJlcm9mIHZpc1N0YXRlVXBkYXRlcnNcclxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdmlzLXN0YXRlLXVwZGF0ZXJzJykudG9nZ2xlU3BsaXRNYXBVcGRhdGVyfVxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgdG9nZ2xlU3BsaXRNYXBVcGRhdGVyID0gKHN0YXRlLCBhY3Rpb24pID0+XHJcbiAgc3RhdGUuc3BsaXRNYXBzICYmIHN0YXRlLnNwbGl0TWFwcy5sZW5ndGggPT09IDBcclxuICAgID8ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIC8vIG1heWJlIHdlIHNob3VsZCB1c2UgYW4gYXJyYXkgdG8gc3RvcmUgc3RhdGUgZm9yIGEgc2luZ2xlIG1hcCBhcyB3ZWxsXHJcbiAgICAgICAgLy8gaWYgY3VycmVudCBtYXBzIGxlbmd0aCBpcyBlcXVhbCB0byAwIGl0IG1lYW5zIHRoYXQgd2UgYXJlIGFib3V0IHRvIHNwbGl0IHRoZSB2aWV3XHJcbiAgICAgICAgc3BsaXRNYXBzOiBjb21wdXRlU3BsaXRNYXBMYXllcnMoc3RhdGUubGF5ZXJzKVxyXG4gICAgICB9XHJcbiAgICA6IGNsb3NlU3BlY2lmaWNNYXBBdEluZGV4KHN0YXRlLCBhY3Rpb24pO1xyXG5cclxuLyoqXHJcbiAqIFRvZ2dsZSB2aXNpYmlsaXR5IG9mIGEgbGF5ZXIgaW4gYSBzcGxpdCBtYXBcclxuICogQG1lbWJlcm9mIHZpc1N0YXRlVXBkYXRlcnNcclxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdmlzLXN0YXRlLXVwZGF0ZXJzJykudG9nZ2xlTGF5ZXJGb3JNYXBVcGRhdGVyfVxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgdG9nZ2xlTGF5ZXJGb3JNYXBVcGRhdGVyID0gKHN0YXRlLCB7bWFwSW5kZXgsIGxheWVySWR9KSA9PiB7XHJcbiAgY29uc3Qge3NwbGl0TWFwc30gPSBzdGF0ZTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIC4uLnN0YXRlLFxyXG4gICAgc3BsaXRNYXBzOiBzcGxpdE1hcHMubWFwKChzbSwgaSkgPT5cclxuICAgICAgaSA9PT0gbWFwSW5kZXhcclxuICAgICAgICA/IHtcclxuICAgICAgICAgICAgLi4uc3BsaXRNYXBzW2ldLFxyXG4gICAgICAgICAgICBsYXllcnM6IHtcclxuICAgICAgICAgICAgICAuLi5zcGxpdE1hcHNbaV0ubGF5ZXJzLFxyXG4gICAgICAgICAgICAgIC8vIGlmIGxheWVySWQgbm90IGluIGxheWVycywgc2V0IGl0IHRvIHZpc2libGVcclxuICAgICAgICAgICAgICBbbGF5ZXJJZF06ICFzcGxpdE1hcHNbaV0ubGF5ZXJzW2xheWVySWRdXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICA6IHNtXHJcbiAgICApXHJcbiAgfTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBBZGQgbmV3IGRhdGFzZXQgdG8gYHZpc1N0YXRlYCwgd2l0aCBvcHRpb24gdG8gbG9hZCBhIG1hcCBjb25maWcgYWxvbmcgd2l0aCB0aGUgZGF0YXNldHNcclxuICogQG1lbWJlcm9mIHZpc1N0YXRlVXBkYXRlcnNcclxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdmlzLXN0YXRlLXVwZGF0ZXJzJykudXBkYXRlVmlzRGF0YVVwZGF0ZXJ9XHJcbiAqIEBwdWJsaWNcclxuICovXHJcbi8qIGVzbGludC1kaXNhYmxlIG1heC1zdGF0ZW1lbnRzICovXHJcbmV4cG9ydCBjb25zdCB1cGRhdGVWaXNEYXRhVXBkYXRlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgLy8gZGF0YXNldHMgY2FuIGJlIGEgc2luZ2xlIGRhdGEgZW50cmllcyBvciBhbiBhcnJheSBvZiBtdWx0aXBsZSBkYXRhIGVudHJpZXNcclxuICBjb25zdCB7Y29uZmlnLCBvcHRpb25zfSA9IGFjdGlvbjtcclxuXHJcbiAgY29uc3QgZGF0YXNldHMgPSB0b0FycmF5KGFjdGlvbi5kYXRhc2V0cyk7XHJcblxyXG4gIGNvbnN0IG5ld0RhdGFFbnRyaWVzID0gZGF0YXNldHMucmVkdWNlKFxyXG4gICAgKGFjY3UsIHtpbmZvID0ge30sIGRhdGF9KSA9PiAoe1xyXG4gICAgICAuLi5hY2N1LFxyXG4gICAgICAuLi4oY3JlYXRlTmV3RGF0YUVudHJ5KHtpbmZvLCBkYXRhfSwgc3RhdGUuZGF0YXNldHMpIHx8IHt9KVxyXG4gICAgfSksXHJcbiAgICB7fVxyXG4gICk7XHJcblxyXG4gIGlmICghT2JqZWN0LmtleXMobmV3RGF0YUVudHJpZXMpLmxlbmd0aCkge1xyXG4gICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxuXHJcbiAgLy8gYXBwbHkgY29uZmlnIGlmIHBhc3NlZCBmcm9tIGFjdGlvblxyXG4gIGNvbnN0IHByZXZpb3VzU3RhdGUgPSBjb25maWdcclxuICAgID8gcmVjZWl2ZU1hcENvbmZpZ1VwZGF0ZXIoc3RhdGUsIHtcclxuICAgICAgICBwYXlsb2FkOiB7Y29uZmlnLCBvcHRpb25zfVxyXG4gICAgICB9KVxyXG4gICAgOiBzdGF0ZTtcclxuXHJcbiAgY29uc3Qgc3RhdGVXaXRoTmV3RGF0YSA9IHtcclxuICAgIC4uLnByZXZpb3VzU3RhdGUsXHJcbiAgICBkYXRhc2V0czoge1xyXG4gICAgICAuLi5wcmV2aW91c1N0YXRlLmRhdGFzZXRzLFxyXG4gICAgICAuLi5uZXdEYXRhRW50cmllc1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIC8vIHByZXZpb3VzbHkgc2F2ZWQgY29uZmlnIGJlZm9yZSBkYXRhIGxvYWRlZFxyXG4gIGNvbnN0IHtcclxuICAgIGZpbHRlclRvQmVNZXJnZWQgPSBbXSxcclxuICAgIGxheWVyVG9CZU1lcmdlZCA9IFtdLFxyXG4gICAgaW50ZXJhY3Rpb25Ub0JlTWVyZ2VkID0ge30sXHJcbiAgICBzcGxpdE1hcHNUb0JlTWVyZ2VkID0gW11cclxuICB9ID0gc3RhdGVXaXRoTmV3RGF0YTtcclxuXHJcbiAgLy8gV2UgbmVlZCB0byBtZXJnZSBsYXllcnMgYmVmb3JlIGZpbHRlcnMgYmVjYXVzZSBwb2x5Z29uIGZpbHRlcnMgcmVxdWlyZXMgbGF5ZXJzIHRvIGJlIGxvYWRlZFxyXG4gIGxldCBtZXJnZWRTdGF0ZSA9IG1lcmdlTGF5ZXJzKHN0YXRlV2l0aE5ld0RhdGEsIGxheWVyVG9CZU1lcmdlZCk7XHJcblxyXG4gIG1lcmdlZFN0YXRlID0gbWVyZ2VGaWx0ZXJzKG1lcmdlZFN0YXRlLCBmaWx0ZXJUb0JlTWVyZ2VkKTtcclxuXHJcbiAgLy8gbWVyZ2Ugc3RhdGUgd2l0aCBzYXZlZCBzcGxpdE1hcHNcclxuICBtZXJnZWRTdGF0ZSA9IG1lcmdlU3BsaXRNYXBzKG1lcmdlZFN0YXRlLCBzcGxpdE1hcHNUb0JlTWVyZ2VkKTtcclxuXHJcbiAgbGV0IG5ld0xheWVycyA9IG1lcmdlZFN0YXRlLmxheWVycy5maWx0ZXIobCA9PiBsLmNvbmZpZy5kYXRhSWQgaW4gbmV3RGF0YUVudHJpZXMpO1xyXG5cclxuICBpZiAoIW5ld0xheWVycy5sZW5ndGgpIHtcclxuICAgIC8vIG5vIGxheWVyIG1lcmdlZCwgZmluZCBkZWZhdWx0c1xyXG4gICAgY29uc3QgcmVzdWx0ID0gYWRkRGVmYXVsdExheWVycyhtZXJnZWRTdGF0ZSwgbmV3RGF0YUVudHJpZXMpO1xyXG4gICAgbWVyZ2VkU3RhdGUgPSByZXN1bHQuc3RhdGU7XHJcbiAgICBuZXdMYXllcnMgPSByZXN1bHQubmV3TGF5ZXJzO1xyXG4gIH1cclxuXHJcbiAgaWYgKG1lcmdlZFN0YXRlLnNwbGl0TWFwcy5sZW5ndGgpIHtcclxuICAgIC8vIGlmIG1hcCBpcyBzcGxpdCwgYWRkIG5ldyBsYXllcnMgdG8gc3BsaXRNYXBzXHJcbiAgICBuZXdMYXllcnMgPSBtZXJnZWRTdGF0ZS5sYXllcnMuZmlsdGVyKGwgPT4gbC5jb25maWcuZGF0YUlkIGluIG5ld0RhdGFFbnRyaWVzKTtcclxuICAgIG1lcmdlZFN0YXRlID0ge1xyXG4gICAgICAuLi5tZXJnZWRTdGF0ZSxcclxuICAgICAgc3BsaXRNYXBzOiBhZGROZXdMYXllcnNUb1NwbGl0TWFwKG1lcmdlZFN0YXRlLnNwbGl0TWFwcywgbmV3TGF5ZXJzKVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIC8vIG1lcmdlIHN0YXRlIHdpdGggc2F2ZWQgaW50ZXJhY3Rpb25zXHJcbiAgbWVyZ2VkU3RhdGUgPSBtZXJnZUludGVyYWN0aW9ucyhtZXJnZWRTdGF0ZSwgaW50ZXJhY3Rpb25Ub0JlTWVyZ2VkKTtcclxuXHJcbiAgLy8gaWYgbm8gdG9vbHRpcHMgbWVyZ2VkIGFkZCBkZWZhdWx0IHRvb2x0aXBzXHJcbiAgT2JqZWN0LmtleXMobmV3RGF0YUVudHJpZXMpLmZvckVhY2goZGF0YUlkID0+IHtcclxuICAgIGNvbnN0IHRvb2x0aXBGaWVsZHMgPSBtZXJnZWRTdGF0ZS5pbnRlcmFjdGlvbkNvbmZpZy50b29sdGlwLmNvbmZpZy5maWVsZHNUb1Nob3dbZGF0YUlkXTtcclxuICAgIGlmICghQXJyYXkuaXNBcnJheSh0b29sdGlwRmllbGRzKSB8fCAhdG9vbHRpcEZpZWxkcy5sZW5ndGgpIHtcclxuICAgICAgbWVyZ2VkU3RhdGUgPSBhZGREZWZhdWx0VG9vbHRpcHMobWVyZ2VkU3RhdGUsIG5ld0RhdGFFbnRyaWVzW2RhdGFJZF0pO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBsZXQgdXBkYXRlZFN0YXRlID0gdXBkYXRlQWxsTGF5ZXJEb21haW5EYXRhKG1lcmdlZFN0YXRlLCBPYmplY3Qua2V5cyhuZXdEYXRhRW50cmllcyksIHVuZGVmaW5lZCk7XHJcblxyXG4gIC8vIHJlZ2lzdGVyIGxheWVyIGFuaW1hdGlvbiBkb21haW4sXHJcbiAgLy8gbmVlZCB0byBiZSBjYWxsZWQgYWZ0ZXIgbGF5ZXIgZGF0YSBpcyBjYWxjdWxhdGVkXHJcbiAgdXBkYXRlZFN0YXRlID0gdXBkYXRlQW5pbWF0aW9uRG9tYWluKHVwZGF0ZWRTdGF0ZSk7XHJcblxyXG4gIHJldHVybiB1cGRhdGVkU3RhdGU7XHJcbn07XHJcbi8qIGVzbGludC1lbmFibGUgbWF4LXN0YXRlbWVudHMgKi9cclxuXHJcbi8qKlxyXG4gKiBXaGVuIGEgdXNlciBjbGlja3Mgb24gdGhlIHNwZWNpZmljIG1hcCBjbG9zaW5nIGljb25cclxuICogdGhlIGFwcGxpY2F0aW9uIHdpbGwgY2xvc2UgdGhlIHNlbGVjdGVkIG1hcFxyXG4gKiBhbmQgd2lsbCBtZXJnZSB0aGUgcmVtYWluaW5nIG9uZSB3aXRoIHRoZSBnbG9iYWwgc3RhdGVcclxuICogVE9ETzogaSB0aGluayBpbiB0aGUgZnV0dXJlIHRoaXMgYWN0aW9uIHNob3VsZCBiZSBjYWxsZWQgbWVyZ2UgbWFwIGxheWVycyB3aXRoIGdsb2JhbCBzZXR0aW5nc1xyXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhdGUgYHZpc1N0YXRlYFxyXG4gKiBAcGFyYW0ge09iamVjdH0gYWN0aW9uIGFjdGlvblxyXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBuZXh0U3RhdGVcclxuICovXHJcbmZ1bmN0aW9uIGNsb3NlU3BlY2lmaWNNYXBBdEluZGV4KHN0YXRlLCBhY3Rpb24pIHtcclxuICAvLyByZXRyaWV2ZSBsYXllcnMgbWV0YSBkYXRhIGZyb20gdGhlIHJlbWFpbmluZyBtYXAgdGhhdCB3ZSBuZWVkIHRvIGtlZXBcclxuICBjb25zdCBpbmRleFRvUmV0cmlldmUgPSAxIC0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgY29uc3QgbWFwTGF5ZXJzID0gc3RhdGUuc3BsaXRNYXBzW2luZGV4VG9SZXRyaWV2ZV0ubGF5ZXJzO1xyXG4gIGNvbnN0IHtsYXllcnN9ID0gc3RhdGU7XHJcblxyXG4gIC8vIHVwZGF0ZSBsYXllciB2aXNpYmlsaXR5XHJcbiAgY29uc3QgbmV3TGF5ZXJzID0gbGF5ZXJzLm1hcChsYXllciA9PlxyXG4gICAgIW1hcExheWVyc1tsYXllci5pZF0gJiYgbGF5ZXIuY29uZmlnLmlzVmlzaWJsZVxyXG4gICAgICA/IGxheWVyLnVwZGF0ZUxheWVyQ29uZmlnKHtcclxuICAgICAgICAgIC8vIGlmIGxheWVyLmlkIGlzIG5vdCBpbiBtYXBMYXllcnMsIGl0IHNob3VsZCBiZSBpblZpc2libGVcclxuICAgICAgICAgIGlzVmlzaWJsZTogZmFsc2VcclxuICAgICAgICB9KVxyXG4gICAgICA6IGxheWVyXHJcbiAgKTtcclxuXHJcbiAgLy8gZGVsZXRlIG1hcFxyXG4gIHJldHVybiB7XHJcbiAgICAuLi5zdGF0ZSxcclxuICAgIGxheWVyczogbmV3TGF5ZXJzLFxyXG4gICAgc3BsaXRNYXBzOiBbXVxyXG4gIH07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUcmlnZ2VyIGZpbGUgbG9hZGluZyBkaXNwYXRjaCBgYWRkRGF0YVRvTWFwYCBpZiBzdWNjZWVkLCBvciBgbG9hZEZpbGVzRXJyYCBpZiBmYWlsZWRcclxuICogQG1lbWJlcm9mIHZpc1N0YXRlVXBkYXRlcnNcclxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdmlzLXN0YXRlLXVwZGF0ZXJzJykubG9hZEZpbGVzVXBkYXRlcn1cclxuICogQHB1YmxpY1xyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGxvYWRGaWxlc1VwZGF0ZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIGNvbnN0IHtmaWxlcywgb25GaW5pc2ggPSBsb2FkRmlsZVN1Y2Nlc3N9ID0gYWN0aW9uO1xyXG4gIGlmICghZmlsZXMubGVuZ3RoKSB7XHJcbiAgICByZXR1cm4gc3RhdGU7XHJcbiAgfVxyXG5cclxuICBjb25zdCBmaWxlQ2FjaGUgPSBbXTtcclxuICByZXR1cm4gd2l0aFRhc2soXHJcbiAgICB7XHJcbiAgICAgIC4uLnN0YXRlLFxyXG4gICAgICBmaWxlTG9hZGluZzogdHJ1ZSxcclxuICAgICAgZmlsZUxvYWRpbmdQcm9ncmVzczogMFxyXG4gICAgfSxcclxuICAgIG1ha2VMb2FkRmlsZVRhc2soZmlsZXMubGVuZ3RoLCBmaWxlcywgZmlsZUNhY2hlLCBvbkZpbmlzaClcclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxvYWROZXh0RmlsZVVwZGF0ZXIoc3RhdGUsIGFjdGlvbikge1xyXG4gIGNvbnN0IHtmaWxlQ2FjaGUsIGZpbGVzVG9Mb2FkLCB0b3RhbENvdW50LCBvbkZpbmlzaH0gPSBhY3Rpb247XHJcbiAgY29uc3QgZmlsZUxvYWRpbmdQcm9ncmVzcyA9ICgodG90YWxDb3VudCAtIGZpbGVzVG9Mb2FkLmxlbmd0aCkgLyB0b3RhbENvdW50KSAqIDEwMDtcclxuXHJcbiAgcmV0dXJuIHdpdGhUYXNrKFxyXG4gICAge1xyXG4gICAgICAuLi5zdGF0ZSxcclxuICAgICAgZmlsZUxvYWRpbmdQcm9ncmVzc1xyXG4gICAgfSxcclxuICAgIG1ha2VMb2FkRmlsZVRhc2sodG90YWxDb3VudCwgZmlsZXNUb0xvYWQsIGZpbGVDYWNoZSwgb25GaW5pc2gpXHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VMb2FkRmlsZVRhc2sodG90YWxDb3VudCwgZmlsZXNUb0xvYWQsIGZpbGVDYWNoZSwgb25GaW5pc2gpIHtcclxuICBjb25zdCBbZmlsZSwgLi4ucmVtYWluaW5nRmlsZXNUb0xvYWRdID0gZmlsZXNUb0xvYWQ7XHJcblxyXG4gIHJldHVybiBMT0FEX0ZJTEVfVEFTSyh7ZmlsZSwgZmlsZUNhY2hlfSkuYmltYXAoXHJcbiAgICAvLyBzdWNjZXNzXHJcbiAgICByZXN1bHQgPT5cclxuICAgICAgcmVtYWluaW5nRmlsZXNUb0xvYWQubGVuZ3RoXHJcbiAgICAgICAgPyBsb2FkTmV4dEZpbGUoe1xyXG4gICAgICAgICAgICBmaWxlQ2FjaGU6IHJlc3VsdCxcclxuICAgICAgICAgICAgZmlsZXNUb0xvYWQ6IHJlbWFpbmluZ0ZpbGVzVG9Mb2FkLFxyXG4gICAgICAgICAgICB0b3RhbENvdW50LFxyXG4gICAgICAgICAgICBvbkZpbmlzaFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICA6IG9uRmluaXNoKHJlc3VsdCksXHJcbiAgICAvLyBlcnJvclxyXG4gICAgbG9hZEZpbGVzRXJyXHJcbiAgKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFRyaWdnZXIgbG9hZGluZyBmaWxlIGVycm9yXHJcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZVVwZGF0ZXJzXHJcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL3Zpcy1zdGF0ZS11cGRhdGVycycpLmxvYWRGaWxlc0VyclVwZGF0ZXJ9XHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmV4cG9ydCBjb25zdCBsb2FkRmlsZXNFcnJVcGRhdGVyID0gKHN0YXRlLCB7ZXJyb3J9KSA9PiAoe1xyXG4gIC4uLnN0YXRlLFxyXG4gIGZpbGVMb2FkaW5nOiBmYWxzZSxcclxuICBmaWxlTG9hZGluZ0VycjogZXJyb3JcclxufSk7XHJcblxyXG4vKipcclxuICogV2hlbiBzZWxlY3QgZGF0YXNldCBmb3IgZXhwb3J0LCBhcHBseSBjcHUgZmlsdGVyIHRvIHNlbGVjdGVkIGRhdGFzZXRcclxuICogQG1lbWJlcm9mIHZpc1N0YXRlVXBkYXRlcnNcclxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdmlzLXN0YXRlLXVwZGF0ZXJzJykuYXBwbHlDUFVGaWx0ZXJVcGRhdGVyfVxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgYXBwbHlDUFVGaWx0ZXJVcGRhdGVyID0gKHN0YXRlLCB7ZGF0YUlkfSkgPT4ge1xyXG4gIC8vIGFwcGx5IGNwdUZpbHRlclxyXG4gIGNvbnN0IGRhdGFJZHMgPSB0b0FycmF5KGRhdGFJZCk7XHJcblxyXG4gIHJldHVybiBkYXRhSWRzLnJlZHVjZSgoYWNjdSwgaWQpID0+IGZpbHRlckRhdGFzZXRDUFUoYWNjdSwgaWQpLCBzdGF0ZSk7XHJcbn07XHJcblxyXG4vKipcclxuICogVXNlciBpbnB1dCB0byB1cGRhdGUgdGhlIGluZm8gb2YgdGhlIG1hcFxyXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVVcGRhdGVyc1xyXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi92aXMtc3RhdGUtdXBkYXRlcnMnKS5zZXRNYXBJbmZvVXBkYXRlcn1cclxuICogQHB1YmxpY1xyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHNldE1hcEluZm9VcGRhdGVyID0gKHN0YXRlLCBhY3Rpb24pID0+ICh7XHJcbiAgLi4uc3RhdGUsXHJcbiAgbWFwSW5mbzoge1xyXG4gICAgLi4uc3RhdGUubWFwSW5mbyxcclxuICAgIC4uLmFjdGlvbi5pbmZvXHJcbiAgfVxyXG59KTtcclxuLyoqXHJcbiAqIEhlbHBlciBmdW5jdGlvbiB0byB1cGRhdGUgQWxsIGxheWVyIGRvbWFpbiBhbmQgbGF5ZXIgZGF0YSBvZiBzdGF0ZVxyXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi92aXMtc3RhdGUtdXBkYXRlcnMnKS5hZGREZWZhdWx0TGF5ZXJzfVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZERlZmF1bHRMYXllcnMoc3RhdGUsIGRhdGFzZXRzKSB7XHJcbiAgY29uc3QgZGVmYXVsdExheWVycyA9IE9iamVjdC52YWx1ZXMoZGF0YXNldHMpLnJlZHVjZShcclxuICAgIC8vIEB0cy1pZ25vcmVcclxuICAgIChhY2N1LCBkYXRhc2V0KSA9PiBbLi4uYWNjdSwgLi4uKGZpbmREZWZhdWx0TGF5ZXIoZGF0YXNldCwgc3RhdGUubGF5ZXJDbGFzc2VzKSB8fCBbXSldLFxyXG4gICAgW11cclxuICApO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgc3RhdGU6IHtcclxuICAgICAgLi4uc3RhdGUsXHJcbiAgICAgIGxheWVyczogWy4uLnN0YXRlLmxheWVycywgLi4uZGVmYXVsdExheWVyc10sXHJcbiAgICAgIGxheWVyT3JkZXI6IFtcclxuICAgICAgICAvLyBwdXQgbmV3IGxheWVycyBvbiB0b3Agb2Ygb2xkIG9uZXNcclxuICAgICAgICAuLi5kZWZhdWx0TGF5ZXJzLm1hcCgoXywgaSkgPT4gc3RhdGUubGF5ZXJzLmxlbmd0aCArIGkpLFxyXG4gICAgICAgIC4uLnN0YXRlLmxheWVyT3JkZXJcclxuICAgICAgXVxyXG4gICAgfSxcclxuICAgIG5ld0xheWVyczogZGVmYXVsdExheWVyc1xyXG4gIH07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBoZWxwZXIgZnVuY3Rpb24gdG8gZmluZCBkZWZhdWx0IHRvb2x0aXBzXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGF0ZVxyXG4gKiBAcGFyYW0ge09iamVjdH0gZGF0YXNldFxyXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBuZXh0U3RhdGVcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGREZWZhdWx0VG9vbHRpcHMoc3RhdGUsIGRhdGFzZXQpIHtcclxuICBjb25zdCB0b29sdGlwRmllbGRzID0gZmluZEZpZWxkc1RvU2hvdyhkYXRhc2V0KTtcclxuICBjb25zdCBtZXJnZWQgPSB7XHJcbiAgICAuLi5zdGF0ZS5pbnRlcmFjdGlvbkNvbmZpZy50b29sdGlwLmNvbmZpZy5maWVsZHNUb1Nob3csXHJcbiAgICAuLi50b29sdGlwRmllbGRzXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIHNldChbJ2ludGVyYWN0aW9uQ29uZmlnJywgJ3Rvb2x0aXAnLCAnY29uZmlnJywgJ2ZpZWxkc1RvU2hvdyddLCBtZXJnZWQsIHN0YXRlKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEhlbHBlciBmdW5jdGlvbiB0byB1cGRhdGUgbGF5ZXIgZG9tYWlucyBmb3IgYW4gYXJyYXkgb2YgZGF0YXNldHNcclxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdmlzLXN0YXRlLXVwZGF0ZXJzJykudXBkYXRlQWxsTGF5ZXJEb21haW5EYXRhfVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUFsbExheWVyRG9tYWluRGF0YShzdGF0ZSwgZGF0YUlkLCB1cGRhdGVkRmlsdGVyKSB7XHJcbiAgY29uc3QgZGF0YUlkcyA9IHR5cGVvZiBkYXRhSWQgPT09ICdzdHJpbmcnID8gW2RhdGFJZF0gOiBkYXRhSWQ7XHJcbiAgY29uc3QgbmV3TGF5ZXJzID0gW107XHJcbiAgY29uc3QgbmV3TGF5ZXJEYXRhID0gW107XHJcblxyXG4gIHN0YXRlLmxheWVycy5mb3JFYWNoKChvbGRMYXllciwgaSkgPT4ge1xyXG4gICAgaWYgKG9sZExheWVyLmNvbmZpZy5kYXRhSWQgJiYgZGF0YUlkcy5pbmNsdWRlcyhvbGRMYXllci5jb25maWcuZGF0YUlkKSkge1xyXG4gICAgICAvLyBObyBuZWVkIHRvIHJlY2FsY3VsYXRlIGxheWVyIGRvbWFpbiBpZiBmaWx0ZXIgaGFzIGZpeGVkIGRvbWFpblxyXG4gICAgICBjb25zdCBuZXdMYXllciA9XHJcbiAgICAgICAgdXBkYXRlZEZpbHRlciAmJiB1cGRhdGVkRmlsdGVyLmZpeGVkRG9tYWluXHJcbiAgICAgICAgICA/IG9sZExheWVyXHJcbiAgICAgICAgICA6IG9sZExheWVyLnVwZGF0ZUxheWVyRG9tYWluKHN0YXRlLmRhdGFzZXRzLCB1cGRhdGVkRmlsdGVyKTtcclxuXHJcbiAgICAgIGNvbnN0IHtsYXllckRhdGEsIGxheWVyfSA9IGNhbGN1bGF0ZUxheWVyRGF0YShuZXdMYXllciwgc3RhdGUsIHN0YXRlLmxheWVyRGF0YVtpXSk7XHJcblxyXG4gICAgICBuZXdMYXllcnMucHVzaChsYXllcik7XHJcbiAgICAgIG5ld0xheWVyRGF0YS5wdXNoKGxheWVyRGF0YSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBuZXdMYXllcnMucHVzaChvbGRMYXllcik7XHJcbiAgICAgIG5ld0xheWVyRGF0YS5wdXNoKHN0YXRlLmxheWVyRGF0YVtpXSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IG5ld1N0YXRlID0ge1xyXG4gICAgLi4uc3RhdGUsXHJcbiAgICBsYXllcnM6IG5ld0xheWVycyxcclxuICAgIGxheWVyRGF0YTogbmV3TGF5ZXJEYXRhXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIG5ld1N0YXRlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlQW5pbWF0aW9uRG9tYWluKHN0YXRlKSB7XHJcbiAgLy8gbWVyZ2UgYWxsIGFuaW1hdGFibGUgbGF5ZXIgZG9tYWluIGFuZCB1cGRhdGUgZ2xvYmFsIGNvbmZpZ1xyXG4gIGNvbnN0IGFuaW1hdGFibGVMYXllcnMgPSBzdGF0ZS5sYXllcnMuZmlsdGVyKFxyXG4gICAgbCA9PlxyXG4gICAgICBsLmNvbmZpZy5pc1Zpc2libGUgJiZcclxuICAgICAgbC5jb25maWcuYW5pbWF0aW9uICYmXHJcbiAgICAgIGwuY29uZmlnLmFuaW1hdGlvbi5lbmFibGVkICYmXHJcbiAgICAgIEFycmF5LmlzQXJyYXkobC5hbmltYXRpb25Eb21haW4pXHJcbiAgKTtcclxuXHJcbiAgaWYgKCFhbmltYXRhYmxlTGF5ZXJzLmxlbmd0aCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgLi4uc3RhdGUsXHJcbiAgICAgIGFuaW1hdGlvbkNvbmZpZzogREVGQVVMVF9BTklNQVRJT05fQ09ORklHXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgY29uc3QgbWVyZ2VkRG9tYWluID0gYW5pbWF0YWJsZUxheWVycy5yZWR1Y2UoXHJcbiAgICAoYWNjdSwgbGF5ZXIpID0+IFtcclxuICAgICAgTWF0aC5taW4oYWNjdVswXSwgbGF5ZXIuYW5pbWF0aW9uRG9tYWluWzBdKSxcclxuICAgICAgTWF0aC5tYXgoYWNjdVsxXSwgbGF5ZXIuYW5pbWF0aW9uRG9tYWluWzFdKVxyXG4gICAgXSxcclxuICAgIFtOdW1iZXIoSW5maW5pdHkpLCAtSW5maW5pdHldXHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIC4uLnN0YXRlLFxyXG4gICAgYW5pbWF0aW9uQ29uZmlnOiB7XHJcbiAgICAgIC4uLnN0YXRlLmFuaW1hdGlvbkNvbmZpZyxcclxuICAgICAgY3VycmVudFRpbWU6IGlzSW5SYW5nZShzdGF0ZS5hbmltYXRpb25Db25maWcuY3VycmVudFRpbWUsIG1lcmdlZERvbWFpbilcclxuICAgICAgICA/IHN0YXRlLmFuaW1hdGlvbkNvbmZpZy5jdXJyZW50VGltZVxyXG4gICAgICAgIDogbWVyZ2VkRG9tYWluWzBdLFxyXG4gICAgICBkb21haW46IG1lcmdlZERvbWFpblxyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBVcGRhdGUgdGhlIHN0YXR1cyBvZiB0aGUgZWRpdG9yXHJcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZVVwZGF0ZXJzXHJcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL3Zpcy1zdGF0ZS11cGRhdGVycycpLnNldEVkaXRvck1vZGVVcGRhdGVyfVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHNldEVkaXRvck1vZGVVcGRhdGVyID0gKHN0YXRlLCB7bW9kZX0pID0+ICh7XHJcbiAgLi4uc3RhdGUsXHJcbiAgZWRpdG9yOiB7XHJcbiAgICAuLi5zdGF0ZS5lZGl0b3IsXHJcbiAgICBtb2RlLFxyXG4gICAgc2VsZWN0ZWRGZWF0dXJlOiBudWxsXHJcbiAgfVxyXG59KTtcclxuXHJcbi8vIGNvbnN0IGZlYXR1cmVUb0ZpbHRlclZhbHVlID0gKGZlYXR1cmUpID0+ICh7Li4uZmVhdHVyZSwgaWQ6IGZlYXR1cmUuaWR9KTtcclxuLyoqXHJcbiAqIFVwZGF0ZSBlZGl0b3IgZmVhdHVyZXNcclxuICogQG1lbWJlcm9mIHZpc1N0YXRlVXBkYXRlcnNcclxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdmlzLXN0YXRlLXVwZGF0ZXJzJykuc2V0RmVhdHVyZXNVcGRhdGVyfVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNldEZlYXR1cmVzVXBkYXRlcihzdGF0ZSwge2ZlYXR1cmVzID0gW119KSB7XHJcbiAgY29uc3QgbGFzdEZlYXR1cmUgPSBmZWF0dXJlcy5sZW5ndGggJiYgZmVhdHVyZXNbZmVhdHVyZXMubGVuZ3RoIC0gMV07XHJcblxyXG4gIGNvbnN0IG5ld1N0YXRlID0ge1xyXG4gICAgLi4uc3RhdGUsXHJcbiAgICBlZGl0b3I6IHtcclxuICAgICAgLi4uc3RhdGUuZWRpdG9yLFxyXG4gICAgICAvLyBvbmx5IHNhdmUgbm9uZSBmaWx0ZXIgZmVhdHVyZXMgdG8gZWRpdG9yXHJcbiAgICAgIGZlYXR1cmVzOiBmZWF0dXJlcy5maWx0ZXIoZiA9PiAhZ2V0RmlsdGVySWRJbkZlYXR1cmUoZikpLFxyXG4gICAgICBtb2RlOiBsYXN0RmVhdHVyZSAmJiBsYXN0RmVhdHVyZS5wcm9wZXJ0aWVzLmlzQ2xvc2VkID8gRURJVE9SX01PREVTLkVESVQgOiBzdGF0ZS5lZGl0b3IubW9kZVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIC8vIFJldHJpZXZlIGV4aXN0aW5nIGZlYXR1cmVcclxuICBjb25zdCB7c2VsZWN0ZWRGZWF0dXJlfSA9IHN0YXRlLmVkaXRvcjtcclxuXHJcbiAgLy8gSWYgbm8gZmVhdHVyZSBpcyBzZWxlY3RlZCB3ZSBjYW4gc2ltcGx5IHJldHVybiBzaW5jZSBubyBvcGVyYXRpb25zXHJcbiAgaWYgKCFzZWxlY3RlZEZlYXR1cmUpIHtcclxuICAgIHJldHVybiBuZXdTdGF0ZTtcclxuICB9XHJcblxyXG4gIC8vIFRPRE86IGNoZWNrIGlmIHRoZSBmZWF0dXJlIGhhcyBjaGFuZ2VkXHJcbiAgY29uc3QgZmVhdHVyZSA9IGZlYXR1cmVzLmZpbmQoZiA9PiBmLmlkID09PSBzZWxlY3RlZEZlYXR1cmUuaWQpO1xyXG5cclxuICAvLyBpZiBmZWF0dXJlIGlzIHBhcnQgb2YgYSBmaWx0ZXJcclxuICBjb25zdCBmaWx0ZXJJZCA9IGZlYXR1cmUgJiYgZ2V0RmlsdGVySWRJbkZlYXR1cmUoZmVhdHVyZSk7XHJcbiAgaWYgKGZpbHRlcklkICYmIGZlYXR1cmUpIHtcclxuICAgIGNvbnN0IGZlYXR1cmVWYWx1ZSA9IGZlYXR1cmVUb0ZpbHRlclZhbHVlKGZlYXR1cmUsIGZpbHRlcklkKTtcclxuICAgIGNvbnN0IGZpbHRlcklkeCA9IHN0YXRlLmZpbHRlcnMuZmluZEluZGV4KGZpbCA9PiBmaWwuaWQgPT09IGZpbHRlcklkKTtcclxuICAgIHJldHVybiBzZXRGaWx0ZXJVcGRhdGVyKG5ld1N0YXRlLCB7XHJcbiAgICAgIGlkeDogZmlsdGVySWR4LFxyXG4gICAgICBwcm9wOiAndmFsdWUnLFxyXG4gICAgICB2YWx1ZTogZmVhdHVyZVZhbHVlXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHJldHVybiBuZXdTdGF0ZTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFNldCB0aGUgY3VycmVudCBzZWxlY3RlZCBmZWF0dXJlXHJcbiAqIEBtZW1iZXJvZiB1aVN0YXRlVXBkYXRlcnNcclxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdmlzLXN0YXRlLXVwZGF0ZXJzJykuc2V0U2VsZWN0ZWRGZWF0dXJlVXBkYXRlcn1cclxuICovXHJcbmV4cG9ydCBjb25zdCBzZXRTZWxlY3RlZEZlYXR1cmVVcGRhdGVyID0gKHN0YXRlLCB7ZmVhdHVyZX0pID0+ICh7XHJcbiAgLi4uc3RhdGUsXHJcbiAgZWRpdG9yOiB7XHJcbiAgICAuLi5zdGF0ZS5lZGl0b3IsXHJcbiAgICBzZWxlY3RlZEZlYXR1cmU6IGZlYXR1cmVcclxuICB9XHJcbn0pO1xyXG5cclxuLyoqXHJcbiAqIERlbGV0ZSBleGlzdGluZyBmZWF0dXJlIGZyb20gZmlsdGVyc1xyXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVVcGRhdGVyc1xyXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi92aXMtc3RhdGUtdXBkYXRlcnMnKS5kZWxldGVGZWF0dXJlVXBkYXRlcn1cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVGZWF0dXJlVXBkYXRlcihzdGF0ZSwge2ZlYXR1cmV9KSB7XHJcbiAgaWYgKCFmZWF0dXJlKSB7XHJcbiAgICByZXR1cm4gc3RhdGU7XHJcbiAgfVxyXG5cclxuICBjb25zdCBuZXdTdGF0ZSA9IHtcclxuICAgIC4uLnN0YXRlLFxyXG4gICAgZWRpdG9yOiB7XHJcbiAgICAgIC4uLnN0YXRlLmVkaXRvcixcclxuICAgICAgc2VsZWN0ZWRGZWF0dXJlOiBudWxsXHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgaWYgKGdldEZpbHRlcklkSW5GZWF0dXJlKGZlYXR1cmUpKSB7XHJcbiAgICBjb25zdCBmaWx0ZXJJZHggPSBuZXdTdGF0ZS5maWx0ZXJzLmZpbmRJbmRleChmID0+IGYuaWQgPT09IGdldEZpbHRlcklkSW5GZWF0dXJlKGZlYXR1cmUpKTtcclxuXHJcbiAgICByZXR1cm4gZmlsdGVySWR4ID4gLTEgPyByZW1vdmVGaWx0ZXJVcGRhdGVyKG5ld1N0YXRlLCB7aWR4OiBmaWx0ZXJJZHh9KSA6IG5ld1N0YXRlO1xyXG4gIH1cclxuXHJcbiAgLy8gbW9kaWZ5IGVkaXRvciBvYmplY3RcclxuICBjb25zdCBuZXdFZGl0b3IgPSB7XHJcbiAgICAuLi5zdGF0ZS5lZGl0b3IsXHJcbiAgICBmZWF0dXJlczogc3RhdGUuZWRpdG9yLmZlYXR1cmVzLmZpbHRlcihmID0+IGYuaWQgIT09IGZlYXR1cmUuaWQpLFxyXG4gICAgc2VsZWN0ZWRGZWF0dXJlOiBudWxsXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIC4uLnN0YXRlLFxyXG4gICAgZWRpdG9yOiBuZXdFZGl0b3JcclxuICB9O1xyXG59XHJcblxyXG4vKipcclxuICogVG9nZ2xlIGZlYXR1cmUgYXMgbGF5ZXIgZmlsdGVyXHJcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZVVwZGF0ZXJzXHJcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL3Zpcy1zdGF0ZS11cGRhdGVycycpLnNldFBvbHlnb25GaWx0ZXJMYXllclVwZGF0ZXJ9XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2V0UG9seWdvbkZpbHRlckxheWVyVXBkYXRlcihzdGF0ZSwgcGF5bG9hZCkge1xyXG4gIGNvbnN0IHtsYXllciwgZmVhdHVyZX0gPSBwYXlsb2FkO1xyXG4gIGNvbnN0IGZpbHRlcklkID0gZ2V0RmlsdGVySWRJbkZlYXR1cmUoZmVhdHVyZSk7XHJcblxyXG4gIC8vIGxldCBuZXdGaWx0ZXIgPSBudWxsO1xyXG4gIGxldCBmaWx0ZXJJZHg7XHJcbiAgbGV0IG5ld0xheWVySWQgPSBbbGF5ZXIuaWRdO1xyXG4gIGxldCBuZXdTdGF0ZSA9IHN0YXRlO1xyXG4gIC8vIElmIHBvbHlnb24gZmlsdGVyIGFscmVhZHkgZXhpc3RzLCB3ZSBuZWVkIHRvIGZpbmQgb3V0IGlmIHRoZSBjdXJyZW50IGxheWVyIGlzIGFscmVhZHkgaW5jbHVkZWRcclxuICBpZiAoZmlsdGVySWQpIHtcclxuICAgIGZpbHRlcklkeCA9IHN0YXRlLmZpbHRlcnMuZmluZEluZGV4KGYgPT4gZi5pZCA9PT0gZmlsdGVySWQpO1xyXG5cclxuICAgIGlmICghc3RhdGUuZmlsdGVyc1tmaWx0ZXJJZHhdKSB7XHJcbiAgICAgIC8vIHdoYXQgaWYgZmlsdGVyIGRvZXNuJ3QgZXhpc3Q/Li4uIG5vdCBwb3NzaWJsZS5cclxuICAgICAgLy8gYmVjYXVzZSBmZWF0dXJlcyBpbiB0aGUgZWRpdG9yIGlzIHBhc3NlZCBpbiBmcm9tIGZpbHRlcnMgYW5kIGVkaXRvcnMuXHJcbiAgICAgIC8vIGJ1dCB3ZSB3aWxsIG1vdmUgdGhpcyBmZWF0dXJlIGJhY2sgdG8gZWRpdG9yIGp1c3QgaW4gY2FzZVxyXG4gICAgICBjb25zdCBub25lRmlsdGVyRmVhdHVyZSA9IHtcclxuICAgICAgICAuLi5mZWF0dXJlLFxyXG4gICAgICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAgIC4uLmZlYXR1cmUucHJvcGVydGllcyxcclxuICAgICAgICAgIGZpbHRlcklkOiBudWxsXHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG5cclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBlZGl0b3I6IHtcclxuICAgICAgICAgIC4uLnN0YXRlLmVkaXRvcixcclxuICAgICAgICAgIGZlYXR1cmVzOiBbLi4uc3RhdGUuZWRpdG9yLmZlYXR1cmVzLCBub25lRmlsdGVyRmVhdHVyZV0sXHJcbiAgICAgICAgICBzZWxlY3RlZEZlYXR1cmU6IG5vbmVGaWx0ZXJGZWF0dXJlXHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gICAgY29uc3QgZmlsdGVyID0gc3RhdGUuZmlsdGVyc1tmaWx0ZXJJZHhdO1xyXG4gICAgY29uc3Qge2xheWVySWQgPSBbXX0gPSBmaWx0ZXI7XHJcbiAgICBjb25zdCBpc0xheWVySW5jbHVkZWQgPSBsYXllcklkLmluY2x1ZGVzKGxheWVyLmlkKTtcclxuXHJcbiAgICBuZXdMYXllcklkID0gaXNMYXllckluY2x1ZGVkXHJcbiAgICAgID8gLy8gaWYgbGF5ZXIgaXMgaW5jbHVkZWQsIHJlbW92ZSBpdFxyXG4gICAgICAgIGxheWVySWQuZmlsdGVyKGwgPT4gbCAhPT0gbGF5ZXIuaWQpXHJcbiAgICAgIDogWy4uLmxheWVySWQsIGxheWVyLmlkXTtcclxuICB9IGVsc2Uge1xyXG4gICAgLy8gaWYgd2UgaGF2ZW4ndCBjcmVhdGUgdGhlIHBvbHlnb24gZmlsdGVyLCBjcmVhdGUgaXRcclxuICAgIGNvbnN0IG5ld0ZpbHRlciA9IGdlbmVyYXRlUG9seWdvbkZpbHRlcihbXSwgZmVhdHVyZSk7XHJcbiAgICBmaWx0ZXJJZHggPSBzdGF0ZS5maWx0ZXJzLmxlbmd0aDtcclxuXHJcbiAgICAvLyBhZGQgZmVhdHVyZSwgcmVtb3ZlIGZlYXR1cmUgZnJvbSBlaWR0b3JcclxuICAgIG5ld1N0YXRlID0ge1xyXG4gICAgICAuLi5zdGF0ZSxcclxuICAgICAgZmlsdGVyczogWy4uLnN0YXRlLmZpbHRlcnMsIG5ld0ZpbHRlcl0sXHJcbiAgICAgIGVkaXRvcjoge1xyXG4gICAgICAgIC4uLnN0YXRlLmVkaXRvcixcclxuICAgICAgICBmZWF0dXJlczogc3RhdGUuZWRpdG9yLmZlYXR1cmVzLmZpbHRlcihmID0+IGYuaWQgIT09IGZlYXR1cmUuaWQpLFxyXG4gICAgICAgIHNlbGVjdGVkRmVhdHVyZTogbmV3RmlsdGVyLnZhbHVlXHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgfVxyXG5cclxuICByZXR1cm4gc2V0RmlsdGVyVXBkYXRlcihuZXdTdGF0ZSwge1xyXG4gICAgaWR4OiBmaWx0ZXJJZHgsXHJcbiAgICBwcm9wOiAnbGF5ZXJJZCcsXHJcbiAgICB2YWx1ZTogbmV3TGF5ZXJJZFxyXG4gIH0pO1xyXG59XHJcblxyXG4vKipcclxuICogQG1lbWJlcm9mIHZpc1N0YXRlVXBkYXRlcnNcclxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdmlzLXN0YXRlLXVwZGF0ZXJzJykuc29ydFRhYmxlQ29sdW1uVXBkYXRlcn1cclxuICogQHB1YmxpY1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNvcnRUYWJsZUNvbHVtblVwZGF0ZXIoc3RhdGUsIHtkYXRhSWQsIGNvbHVtbiwgbW9kZX0pIHtcclxuICBjb25zdCBkYXRhc2V0ID0gc3RhdGUuZGF0YXNldHNbZGF0YUlkXTtcclxuICBpZiAoIWRhdGFzZXQpIHtcclxuICAgIHJldHVybiBzdGF0ZTtcclxuICB9XHJcbiAgaWYgKCFtb2RlKSB7XHJcbiAgICBjb25zdCBjdXJyZW50TW9kZSA9IGdldChkYXRhc2V0LCBbJ3NvcnRDb2x1bW4nLCBjb2x1bW5dKTtcclxuICAgIG1vZGUgPSBjdXJyZW50TW9kZVxyXG4gICAgICA/IE9iamVjdC5rZXlzKFNPUlRfT1JERVIpLmZpbmQobSA9PiBtICE9PSBjdXJyZW50TW9kZSlcclxuICAgICAgOiBTT1JUX09SREVSLkFTQ0VORElORztcclxuICB9XHJcblxyXG4gIGNvbnN0IHNvcnRlZCA9IHNvcnREYXRhc2V0QnlDb2x1bW4oZGF0YXNldCwgY29sdW1uLCBtb2RlKTtcclxuICByZXR1cm4gc2V0KFsnZGF0YXNldHMnLCBkYXRhSWRdLCBzb3J0ZWQsIHN0YXRlKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZVVwZGF0ZXJzXHJcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL3Zpcy1zdGF0ZS11cGRhdGVycycpLnBpblRhYmxlQ29sdW1uVXBkYXRlcn1cclxuICogQHB1YmxpY1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHBpblRhYmxlQ29sdW1uVXBkYXRlcihzdGF0ZSwge2RhdGFJZCwgY29sdW1ufSkge1xyXG4gIGNvbnN0IGRhdGFzZXQgPSBzdGF0ZS5kYXRhc2V0c1tkYXRhSWRdO1xyXG4gIGlmICghZGF0YXNldCkge1xyXG4gICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxuICBjb25zdCBmaWVsZCA9IGRhdGFzZXQuZmllbGRzLmZpbmQoZiA9PiBmLm5hbWUgPT09IGNvbHVtbik7XHJcbiAgaWYgKCFmaWVsZCkge1xyXG4gICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxuXHJcbiAgbGV0IHBpbm5lZENvbHVtbnM7XHJcbiAgaWYgKEFycmF5LmlzQXJyYXkoZGF0YXNldC5waW5uZWRDb2x1bW5zKSAmJiBkYXRhc2V0LnBpbm5lZENvbHVtbnMuaW5jbHVkZXMoZmllbGQubmFtZSkpIHtcclxuICAgIC8vIHVucGluIGl0XHJcbiAgICBwaW5uZWRDb2x1bW5zID0gZGF0YXNldC5waW5uZWRDb2x1bW5zLmZpbHRlcihjbyA9PiBjbyAhPT0gZmllbGQubmFtZSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHBpbm5lZENvbHVtbnMgPSAoZGF0YXNldC5waW5uZWRDb2x1bW5zIHx8IFtdKS5jb25jYXQoZmllbGQubmFtZSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gc2V0KFsnZGF0YXNldHMnLCBkYXRhSWQsICdwaW5uZWRDb2x1bW5zJ10sIHBpbm5lZENvbHVtbnMsIHN0YXRlKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENvcHkgY29sdW1uIGNvbnRlbnQgYXMgc3RyaW5nc1xyXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVVcGRhdGVyc1xyXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi92aXMtc3RhdGUtdXBkYXRlcnMnKS5jb3B5VGFibGVDb2x1bW5VcGRhdGVyfVxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY29weVRhYmxlQ29sdW1uVXBkYXRlcihzdGF0ZSwge2RhdGFJZCwgY29sdW1ufSkge1xyXG4gIGNvbnN0IGRhdGFzZXQgPSBzdGF0ZS5kYXRhc2V0c1tkYXRhSWRdO1xyXG4gIGlmICghZGF0YXNldCkge1xyXG4gICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxuICBjb25zdCBmaWVsZElkeCA9IGRhdGFzZXQuZmllbGRzLmZpbmRJbmRleChmID0+IGYubmFtZSA9PT0gY29sdW1uKTtcclxuICBpZiAoZmllbGRJZHggPCAwKSB7XHJcbiAgICByZXR1cm4gc3RhdGU7XHJcbiAgfVxyXG4gIGNvbnN0IHt0eXBlfSA9IGRhdGFzZXQuZmllbGRzW2ZpZWxkSWR4XTtcclxuICBjb25zdCB0ZXh0ID0gZGF0YXNldC5hbGxEYXRhLm1hcChkID0+IHBhcnNlRmllbGRWYWx1ZShkW2ZpZWxkSWR4XSwgdHlwZSkpLmpvaW4oJ1xcbicpO1xyXG5cclxuICBjb3B5KHRleHQpO1xyXG5cclxuICByZXR1cm4gc3RhdGU7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBVcGRhdGUgZWRpdG9yXHJcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL3Zpcy1zdGF0ZS11cGRhdGVycycpLnRvZ2dsZUVkaXRvclZpc2liaWxpdHlVcGRhdGVyfVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZUVkaXRvclZpc2liaWxpdHlVcGRhdGVyKHN0YXRlKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIC4uLnN0YXRlLFxyXG4gICAgZWRpdG9yOiB7XHJcbiAgICAgIC4uLnN0YXRlLmVkaXRvcixcclxuICAgICAgdmlzaWJsZTogIXN0YXRlLmVkaXRvci52aXNpYmxlXHJcbiAgICB9XHJcbiAgfTtcclxufVxyXG4iXX0=