"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.layerConfigChange = layerConfigChange;
exports.layerTextLabelChange = layerTextLabelChange;
exports.layerTypeChange = layerTypeChange;
exports.layerVisualChannelConfigChange = layerVisualChannelConfigChange;
exports.layerVisConfigChange = layerVisConfigChange;
exports.layerColorUIChange = layerColorUIChange;
exports.updateLayerBlending = updateLayerBlending;
exports.interactionConfigChange = interactionConfigChange;
exports.setFilter = setFilter;
exports.addFilter = addFilter;
exports.addLayer = addLayer;
exports.reorderLayer = reorderLayer;
exports.removeFilter = removeFilter;
exports.removeLayer = removeLayer;
exports.removeDataset = removeDataset;
exports.showDatasetTable = showDatasetTable;
exports.sortTableColumn = sortTableColumn;
exports.pinTableColumn = pinTableColumn;
exports.copyTableColumn = copyTableColumn;
exports.updateVisData = updateVisData;
exports.toggleFilterAnimation = toggleFilterAnimation;
exports.updateFilterAnimationSpeed = updateFilterAnimationSpeed;
exports.updateAnimationTime = updateAnimationTime;
exports.updateLayerAnimationSpeed = updateLayerAnimationSpeed;
exports.enlargeFilter = enlargeFilter;
exports.toggleFilterFeature = toggleFilterFeature;
exports.onLayerHover = onLayerHover;
exports.onLayerClick = onLayerClick;
exports.onMapClick = onMapClick;
exports.onMouseMove = onMouseMove;
exports.toggleLayerForMap = toggleLayerForMap;
exports.setFilterPlot = setFilterPlot;
exports.setMapInfo = setMapInfo;
exports.loadFiles = loadFiles;
exports.loadNextFile = loadNextFile;
exports.loadFileSuccess = loadFileSuccess;
exports.loadFilesErr = loadFilesErr;
exports.setFeatures = setFeatures;
exports.setPolygonFilterLayer = setPolygonFilterLayer;
exports.setSelectedFeature = setSelectedFeature;
exports.deleteFeature = deleteFeature;
exports.setEditorMode = setEditorMode;
exports.applyCPUFilter = applyCPUFilter;
exports.toggleEditorVisibility = toggleEditorVisibility;

var _actionTypes = _interopRequireDefault(require("../constants/action-types"));

// Copyright (c) 2020 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.
// vis-state-reducer

/**
 * Update layer base config: dataId, label, column, isVisible
 * @param oldLayer - layer to be updated
 * @param newConfig - new config to be merged with old config
 * @returns action
 * @type {typeof import('./vis-state-actions').layerConfigChange}
 * @public
 */
function layerConfigChange(oldLayer, newConfig) {
  return {
    type: _actionTypes["default"].LAYER_CONFIG_CHANGE,
    oldLayer: oldLayer,
    newConfig: newConfig
  };
}
/**
 * Update layer text label
 * @param oldLayer - layer to be updated
 * @param idx -`idx` of text label to be updated
 * @param prop - `prop` of text label, e,g, `anchor`, `alignment`, `color`, `size`, `field`
 * @param value - new value
 * @returns action
 * @type {typeof import('./vis-state-actions').layerTextLabelChange}
 * @public
 */


function layerTextLabelChange(oldLayer, idx, prop, value) {
  return {
    type: _actionTypes["default"].LAYER_TEXT_LABEL_CHANGE,
    oldLayer: oldLayer,
    idx: idx,
    prop: prop,
    value: value
  };
}
/**
 * Update layer type. Previews layer config will be copied if applicable.
 * @param oldLayer - layer to be updated
 * @param newType - new type
 * @returns action
 * @type {typeof import('./vis-state-actions').layerTypeChange}
 * @public
 */


function layerTypeChange(oldLayer, newType) {
  return {
    type: _actionTypes["default"].LAYER_TYPE_CHANGE,
    oldLayer: oldLayer,
    newType: newType
  };
}
/**
 * Update layer visual channel
 * @memberof visStateActions
 * @param oldLayer - layer to be updated
 * @param newConfig - new visual channel config
 * @param channel - channel to be updated
 * @returns action
 * @type {typeof import('./vis-state-actions').layerVisualChannelConfigChange}
 * @public
 */


function layerVisualChannelConfigChange(oldLayer, newConfig, channel) {
  return {
    type: _actionTypes["default"].LAYER_VISUAL_CHANNEL_CHANGE,
    oldLayer: oldLayer,
    newConfig: newConfig,
    channel: channel
  };
}
/**
 * Update layer `visConfig`
 * @memberof visStateActions
 * @param oldLayer - layer to be updated
 * @param newVisConfig - new visConfig as a key value map: e.g. `{opacity: 0.8}`
 * @returns action
 * @type {typeof import('./vis-state-actions').layerVisConfigChange}
 * @public
 */


function layerVisConfigChange(oldLayer, newVisConfig) {
  return {
    type: _actionTypes["default"].LAYER_VIS_CONFIG_CHANGE,
    oldLayer: oldLayer,
    newVisConfig: newVisConfig
  };
}
/**
 * Set the color palette ui for layer color
 * @memberOf visStateActions
 * @param oldLayer - layer to be updated
 * @param prop - which color prop
 * @param newConfig - to be merged
 * @returns action
 * @type {typeof import('./vis-state-actions').layerColorUIChange}
 * @public
 */


function layerColorUIChange(oldLayer, prop, newConfig) {
  return {
    type: _actionTypes["default"].LAYER_COLOR_UI_CHANGE,
    oldLayer: oldLayer,
    prop: prop,
    newConfig: newConfig
  };
}
/**
 * Update layer blending mode
 * @memberof visStateActions
 * @param mode one of `additive`, `normal` and `subtractive`
 * @returns action
 * @type {typeof import('./vis-state-actions').updateLayerBlending}
 * @public
 */


function updateLayerBlending(mode) {
  return {
    type: _actionTypes["default"].UPDATE_LAYER_BLENDING,
    mode: mode
  };
}
/**
 * Update `interactionConfig`
 * @memberof visStateActions
 * @param config - new config as key value map: `{tooltip: {enabled: true}}`
 * @returns action
 * @type {typeof import('./vis-state-actions').interactionConfigChange}
 * @public
 */


function interactionConfigChange(config) {
  return {
    type: _actionTypes["default"].INTERACTION_CONFIG_CHANGE,
    config: config
  };
}
/**
 * Update filter property
 * @memberof visStateActions
 * @param idx -`idx` of filter to be updated
 * @param prop - `prop` of filter, e,g, `dataId`, `name`, `value`
 * @param value - new value
 * @param valueIndex - dataId index
 * @returns action
 * @type {typeof import('./vis-state-actions').setFilter}
 * @public
 */


function setFilter(idx, prop, value, valueIndex) {
  return {
    type: _actionTypes["default"].SET_FILTER,
    idx: idx,
    prop: prop,
    value: value,
    valueIndex: valueIndex
  };
}
/**
 * Add a new filter
 * @memberof visStateActions
 * @param dataId - dataset `id` this new filter is associated with
 * @returns action
 * @type {typeof import('./vis-state-actions').addFilter}
 * @public
 */


function addFilter(dataId) {
  return {
    type: _actionTypes["default"].ADD_FILTER,
    dataId: dataId
  };
}
/**
 * Add a new layer
 * @memberof visStateActions
 * @param props - new layer props
 * @returns action
 * @type {typeof import('./vis-state-actions').addLayer}
 * @public
 */


function addLayer(props) {
  return {
    type: _actionTypes["default"].ADD_LAYER,
    props: props
  };
}
/**
 * Reorder layer, order is an array of layer indexes, index 0 will be the one at the bottom
 * @memberof visStateActions
 * @param order an array of layer indexes
 * @returns action
 * @type {typeof import('./vis-state-actions').reorderLayer}
 * @public
 * @example
 *
 * // bring `layers[1]` below `layers[0]`, the sequence layers will be rendered is `1`, `0`, `2`, `3`.
 * // `1` will be at the bottom, `3` will be at the top.
 * this.props.dispatch(reorderLayer([1, 0, 2, 3]));
 */


function reorderLayer(order) {
  return {
    type: _actionTypes["default"].REORDER_LAYER,
    order: order
  };
}
/**
 * Remove a filter from `visState.filters`, once a filter is removed, data will be re-filtered and layer will be updated
 * @memberof visStateActions
 * @param idx idx of filter to be removed
 * @returns action
 * @type {typeof import('./vis-state-actions').removeFilter}
 * @public
 */


function removeFilter(idx) {
  return {
    type: _actionTypes["default"].REMOVE_FILTER,
    idx: idx
  };
}
/**
 * Remove a layer
 * @memberof visStateActions
 * @param idx idx of layer to be removed
 * @returns action
 * @type {typeof import('./vis-state-actions').removeLayer}
 * @public
 */


function removeLayer(idx) {
  return {
    type: _actionTypes["default"].REMOVE_LAYER,
    idx: idx
  };
}
/**
 * Remove a dataset and all layers, filters, tooltip configs that based on it
 * @memberof visStateActions
 * @param dataId dataset id
 * @returns action
 * @type {typeof import('./vis-state-actions').removeDataset}
 * @public
 */


function removeDataset(dataId) {
  return {
    type: _actionTypes["default"].REMOVE_DATASET,
    dataId: dataId
  };
}
/**
 * Display dataset table in a modal
 * @memberof visStateActions
 * @param dataId dataset id to show in table
 * @returns action
 * @type {typeof import('./vis-state-actions').showDatasetTable}
 * @public
 */


function showDatasetTable(dataId) {
  return {
    type: _actionTypes["default"].SHOW_DATASET_TABLE,
    dataId: dataId
  };
}
/**
 * Sort dataset column, for table display
 * @memberof visStateActions
 * @param dataId
 * @param column
 * @param mode
 * @returns action
 * @type {typeof import('./vis-state-actions').sortTableColumn}
 * @public
 */


function sortTableColumn(dataId, column, mode) {
  return {
    type: _actionTypes["default"].SORT_TABLE_COLUMN,
    dataId: dataId,
    column: column,
    mode: mode
  };
}
/**
 * Pin dataset column, for table display
 * @param dataId
 * @param column
 * @returns action
 * @type {typeof import('./vis-state-actions').pinTableColumn}
 * @public
 */


function pinTableColumn(dataId, column) {
  return {
    type: _actionTypes["default"].PIN_TABLE_COLUMN,
    dataId: dataId,
    column: column
  };
}
/**
 * Copy column, for table display
 * @param dataId
 * @param column
 * @returns action
 * @type {typeof import('./vis-state-actions').copyTableColumn}
 * @public
 */


function copyTableColumn(dataId, column) {
  return {
    type: _actionTypes["default"].COPY_TABLE_COLUMN,
    dataId: dataId,
    column: column
  };
} // * @param dataset.info -info of a dataset
// * @param dataset.info.id - id of this dataset. If config is defined, `id` should matches the `dataId` in config.
// * @param dataset.info.label - A display name of this dataset
// * @param dataset.data - ***required** The data object, in a tabular format with 2 properties `fields` and `rows`
// * @param dataset.data.fields - ***required** Array of fields,
// * @param dataset.data.fields.name - ***required** Name of the field,
// * @param dataset.data.rows - ***required** Array of rows, in a tabular format with `fields` and `rows`

/**
 * Add new dataset to `visState`, with option to load a map config along with the datasets
 * @memberof visStateActions
 * @param datasets - ***required** datasets can be a dataset or an array of datasets
 * Each dataset object needs to have `info` and `data` property.
 * @param {object} options
 * @param options.centerMap `default: true` if `centerMap` is set to `true` kepler.gl will
 * place the map view within the data points boundaries
 * @param options.readOnly `default: false` if `readOnly` is set to `true`
 * the left setting panel will be hidden
 * @param config this object will contain the full kepler.gl instance configuration {mapState, mapStyle, visState}
 * @returns action
 * @type {typeof import('./vis-state-actions').updateVisData}
 * @public
 */


function updateVisData(datasets, options, config) {
  return {
    type: _actionTypes["default"].UPDATE_VIS_DATA,
    datasets: datasets,
    options: options,
    config: config
  };
}
/**
 * Start and end filter animation
 * @memberof visStateActions
 * @param {Number} idx of filter
 * @type {typeof import('./vis-state-actions').toggleFilterAnimation}
 * @returns action
 * @public
 */


function toggleFilterAnimation(idx) {
  return {
    type: _actionTypes["default"].TOGGLE_FILTER_ANIMATION,
    idx: idx
  };
}
/**
 * Change filter animation speed
 * @memberof visStateActions
 * @param idx -  `idx` of filter
 * @param speed - `speed` to change it to. `speed` is a multiplier
 * @type {typeof import('./vis-state-actions').updateFilterAnimationSpeed}
 * @returns action
 * @public
 */


function updateFilterAnimationSpeed(idx, speed) {
  return {
    type: _actionTypes["default"].UPDATE_FILTER_ANIMATION_SPEED,
    idx: idx,
    speed: speed
  };
}
/**
 * Reset animation
 * @memberof visStateActions
 * @param value -  Current value of the slider
 * @type {typeof import('./vis-state-actions').updateAnimationTime}
 * @returns action
 * @public
 */


function updateAnimationTime(value) {
  return {
    type: _actionTypes["default"].UPDATE_ANIMATION_TIME,
    value: value
  };
}
/**
 * update trip layer animation speed
 * @memberof visStateActions
 * @param speed - `speed` to change it to. `speed` is a multiplier
 * @type {typeof import('./vis-state-actions').updateLayerAnimationSpeed}
 * @returns action
 * @public
 */


function updateLayerAnimationSpeed(speed) {
  return {
    type: _actionTypes["default"].UPDATE_LAYER_ANIMATION_SPEED,
    speed: speed
  };
}
/**
 * Show larger time filter at bottom for time playback (apply to time filter only)
 * @memberof visStateActions
 * @param idx - index of filter to enlarge
 * @type {typeof import('./vis-state-actions').enlargeFilter}
 * @returns action
 * @public
 */


function enlargeFilter(idx) {
  return {
    type: _actionTypes["default"].ENLARGE_FILTER,
    idx: idx
  };
}
/**
 * Show/hide filter feature on map
 * @memberof visStateActions
 * @param idx - index of filter feature to show/hide
 * @type {typeof import('./vis-state-actions').toggleFilterFeature}
 * @return action
 */


function toggleFilterFeature(idx) {
  return {
    type: _actionTypes["default"].TOGGLE_FILTER_FEATURE,
    idx: idx
  };
}
/**
 * Trigger layer hover event with hovered object
 * @memberof visStateActions
 * @param info - Object hovered, returned by deck.gl
 * @type {typeof import('./vis-state-actions').onLayerHover}
 * @returns action
 * @public
 */


function onLayerHover(info) {
  return {
    type: _actionTypes["default"].LAYER_HOVER,
    info: info
  };
}
/**
 * Trigger layer click event with clicked object
 * @memberof visStateActions
 * @param info - Object clicked, returned by deck.gl
 * @type {typeof import('./vis-state-actions').onLayerClick}
 * @returns action
 * @public
 */


function onLayerClick(info) {
  return {
    type: _actionTypes["default"].LAYER_CLICK,
    info: info
  };
}
/**
 * Trigger map click event, unselect clicked object
 * @memberof visStateActions
 * @type {typeof import('./vis-state-actions').onMapClick}
 * @returns action
 * @public
 */


function onMapClick() {
  return {
    type: _actionTypes["default"].MAP_CLICK
  };
}
/**
 * Trigger map mouse moveevent, payload would be
 * React-map-gl PointerEvent
 * https://uber.github.io/react-map-gl/#/documentation/api-reference/pointer-event
 *
 * @memberof visStateActions
 * @param evt - PointerEvent
 * @type {typeof import('./vis-state-actions').onMouseMove}
 * @returns action
 * @public
 */


function onMouseMove(evt) {
  return {
    type: _actionTypes["default"].MOUSE_MOVE,
    evt: evt
  };
}
/**
 * Toggle visibility of a layer in a split map
 * @memberof visStateActions
 * @param mapIndex - index of the split map
 * @param layerId - id of the layer
 * @type {typeof import('./vis-state-actions').toggleLayerForMap}
 * @returns action
 * @public
 */


function toggleLayerForMap(mapIndex, layerId) {
  return {
    type: _actionTypes["default"].TOGGLE_LAYER_FOR_MAP,
    mapIndex: mapIndex,
    layerId: layerId
  };
}
/**
 * Set the property of a filter plot
 * @memberof visStateActions
 * @param idx
 * @param newProp key value mapping of new prop `{yAxis: 'histogram'}`
 * @param valueIndex dataId index
 * @type {typeof import('./vis-state-actions').setFilterPlot}
 * @returns action
 * @public
 */


function setFilterPlot(idx, newProp, valueIndex) {
  return {
    type: _actionTypes["default"].SET_FILTER_PLOT,
    idx: idx,
    newProp: newProp,
    valueIndex: valueIndex
  };
}
/**
 * Set the property of a filter plot
 * @memberof visStateActions
 * @param info
 * @type {typeof import('./vis-state-actions').setMapInfo}
 * @returns action
 * @public
 */


function setMapInfo(info) {
  return {
    type: _actionTypes["default"].SET_MAP_INFO,
    info: info
  };
}
/**
 * Trigger file loading dispatch `addDataToMap` if succeed, or `loadFilesErr` if failed
 * @memberof visStateActions
 * @param files array of fileblob
 * @type {typeof import('./vis-state-actions').loadFiles}
 * @returns action
 * @public
 */


function loadFiles(files) {
  return {
    type: _actionTypes["default"].LOAD_FILES,
    files: files
  };
}
/**
 * Called with next file to load
 * @memberof visStateActions
 * @param payload
 * @type {typeof import('./vis-state-actions').loadNextFile}
 * @returns action
 * @public
 */


function loadNextFile(_ref) {
  var fileCache = _ref.fileCache,
      filesToLoad = _ref.filesToLoad,
      totalCount = _ref.totalCount,
      onFinish = _ref.onFinish;
  return {
    type: _actionTypes["default"].LOAD_NEXT_FILE,
    fileCache: fileCache,
    filesToLoad: filesToLoad,
    totalCount: totalCount,
    onFinish: onFinish
  };
}
/**
 * called when all files are processed and loaded
 * @memberof visStateActions
 * @param result
 * @type {typeof import('./vis-state-actions').loadFileSuccess}
 * @returns action
 */


function loadFileSuccess(result) {
  return {
    type: _actionTypes["default"].LOAD_FILES_SUCCESS,
    result: result
  };
}
/**
 * Trigger loading file error
 * @memberof visStateActions
 * @param  error
 * @type {typeof import('./vis-state-actions').loadFilesErr}
 * @returns action
 * @public
 */


function loadFilesErr(error) {
  return {
    type: _actionTypes["default"].LOAD_FILES_ERR,
    error: error
  };
}
/**
 * Store features to state
 * @memberof visStateActions
 * @param features
 * @type {typeof import('./vis-state-actions').setFeatures}
 * @returns action
 */


function setFeatures(features) {
  return {
    type: _actionTypes["default"].SET_FEATURES,
    features: features
  };
}
/**
 * It will apply the provide feature as filter to the given layer.
 * If the given feature is already applied as filter to the layer, it will remove the layer from the filter
 * @memberof visStateActions
 * @param layer
 * @param feature
 * @type {typeof import('./vis-state-actions').setPolygonFilterLayer}
 * @returns action
 */


function setPolygonFilterLayer(layer, feature) {
  return {
    type: _actionTypes["default"].SET_POLYGON_FILTER_LAYER,
    layer: layer,
    feature: feature
  };
}
/**
 * Set the current feature to be edited/deleted
 * @memberof visStateActions
 * @param feature
 * @type {typeof import('./vis-state-actions').setSelectedFeature}
 * @returns action
 */


function setSelectedFeature(feature) {
  return {
    type: _actionTypes["default"].SET_SELECTED_FEATURE,
    feature: feature
  };
}
/**
 * Delete the given feature
 * @memberof visStateActions
 * @param feature
 * @type {typeof import('./vis-state-actions').deleteFeature}
 * @returns action
 */


function deleteFeature(feature) {
  return {
    type: _actionTypes["default"].DELETE_FEATURE,
    feature: feature
  };
}
/** Set the map mode
 * @memberof visStateActions
 * @param mode one of EDITOR_MODES
 * @type {typeof import('./vis-state-actions').setEditorMode}
 * @returns action
 * @public
 * @example
 * import {setMapMode} from 'kepler.gl/actions';
 * import {EDITOR_MODES} from 'kepler.gl/constants';
 *
 * this.props.dispatch(setMapMode(EDITOR_MODES.DRAW_POLYGON));
 */


function setEditorMode(mode) {
  return {
    type: _actionTypes["default"].SET_EDITOR_MODE,
    mode: mode
  };
}
/**
 * Trigger CPU filter of selected dataset
 * @memberof visStateActions
 * @param dataId - single dataId or an array of dataIds
 * @type {typeof import('./vis-state-actions').applyCPUFilter}
 * @returns action
 * @public
 */


function applyCPUFilter(dataId) {
  return {
    type: _actionTypes["default"].APPLY_CPU_FILTER,
    dataId: dataId
  };
}
/**

 * Toggle editor layer visibility
 * @memberof visStateActions
 * @type {typeof import('./vis-state-actions').toggleEditorVisibility}
 * @return action
 */


function toggleEditorVisibility() {
  return {
    type: _actionTypes["default"].TOGGLE_EDITOR_VISIBILITY
  };
}
/**
 * This declaration is needed to group actions in docs
 */

/**
 * Actions handled mostly by `visState` reducer.
 * They manage how data is processed, filtered and displayed on the map by operates on layers,
 * filters and interaction settings.
 *
 * @public
 */

/* eslint-disable no-unused-vars */
// @ts-ignore


var visStateActions = null;
/* eslint-enable no-unused-vars */
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb25zL3Zpcy1zdGF0ZS1hY3Rpb25zLmpzIl0sIm5hbWVzIjpbImxheWVyQ29uZmlnQ2hhbmdlIiwib2xkTGF5ZXIiLCJuZXdDb25maWciLCJ0eXBlIiwiQWN0aW9uVHlwZXMiLCJMQVlFUl9DT05GSUdfQ0hBTkdFIiwibGF5ZXJUZXh0TGFiZWxDaGFuZ2UiLCJpZHgiLCJwcm9wIiwidmFsdWUiLCJMQVlFUl9URVhUX0xBQkVMX0NIQU5HRSIsImxheWVyVHlwZUNoYW5nZSIsIm5ld1R5cGUiLCJMQVlFUl9UWVBFX0NIQU5HRSIsImxheWVyVmlzdWFsQ2hhbm5lbENvbmZpZ0NoYW5nZSIsImNoYW5uZWwiLCJMQVlFUl9WSVNVQUxfQ0hBTk5FTF9DSEFOR0UiLCJsYXllclZpc0NvbmZpZ0NoYW5nZSIsIm5ld1Zpc0NvbmZpZyIsIkxBWUVSX1ZJU19DT05GSUdfQ0hBTkdFIiwibGF5ZXJDb2xvclVJQ2hhbmdlIiwiTEFZRVJfQ09MT1JfVUlfQ0hBTkdFIiwidXBkYXRlTGF5ZXJCbGVuZGluZyIsIm1vZGUiLCJVUERBVEVfTEFZRVJfQkxFTkRJTkciLCJpbnRlcmFjdGlvbkNvbmZpZ0NoYW5nZSIsImNvbmZpZyIsIklOVEVSQUNUSU9OX0NPTkZJR19DSEFOR0UiLCJzZXRGaWx0ZXIiLCJ2YWx1ZUluZGV4IiwiU0VUX0ZJTFRFUiIsImFkZEZpbHRlciIsImRhdGFJZCIsIkFERF9GSUxURVIiLCJhZGRMYXllciIsInByb3BzIiwiQUREX0xBWUVSIiwicmVvcmRlckxheWVyIiwib3JkZXIiLCJSRU9SREVSX0xBWUVSIiwicmVtb3ZlRmlsdGVyIiwiUkVNT1ZFX0ZJTFRFUiIsInJlbW92ZUxheWVyIiwiUkVNT1ZFX0xBWUVSIiwicmVtb3ZlRGF0YXNldCIsIlJFTU9WRV9EQVRBU0VUIiwic2hvd0RhdGFzZXRUYWJsZSIsIlNIT1dfREFUQVNFVF9UQUJMRSIsInNvcnRUYWJsZUNvbHVtbiIsImNvbHVtbiIsIlNPUlRfVEFCTEVfQ09MVU1OIiwicGluVGFibGVDb2x1bW4iLCJQSU5fVEFCTEVfQ09MVU1OIiwiY29weVRhYmxlQ29sdW1uIiwiQ09QWV9UQUJMRV9DT0xVTU4iLCJ1cGRhdGVWaXNEYXRhIiwiZGF0YXNldHMiLCJvcHRpb25zIiwiVVBEQVRFX1ZJU19EQVRBIiwidG9nZ2xlRmlsdGVyQW5pbWF0aW9uIiwiVE9HR0xFX0ZJTFRFUl9BTklNQVRJT04iLCJ1cGRhdGVGaWx0ZXJBbmltYXRpb25TcGVlZCIsInNwZWVkIiwiVVBEQVRFX0ZJTFRFUl9BTklNQVRJT05fU1BFRUQiLCJ1cGRhdGVBbmltYXRpb25UaW1lIiwiVVBEQVRFX0FOSU1BVElPTl9USU1FIiwidXBkYXRlTGF5ZXJBbmltYXRpb25TcGVlZCIsIlVQREFURV9MQVlFUl9BTklNQVRJT05fU1BFRUQiLCJlbmxhcmdlRmlsdGVyIiwiRU5MQVJHRV9GSUxURVIiLCJ0b2dnbGVGaWx0ZXJGZWF0dXJlIiwiVE9HR0xFX0ZJTFRFUl9GRUFUVVJFIiwib25MYXllckhvdmVyIiwiaW5mbyIsIkxBWUVSX0hPVkVSIiwib25MYXllckNsaWNrIiwiTEFZRVJfQ0xJQ0siLCJvbk1hcENsaWNrIiwiTUFQX0NMSUNLIiwib25Nb3VzZU1vdmUiLCJldnQiLCJNT1VTRV9NT1ZFIiwidG9nZ2xlTGF5ZXJGb3JNYXAiLCJtYXBJbmRleCIsImxheWVySWQiLCJUT0dHTEVfTEFZRVJfRk9SX01BUCIsInNldEZpbHRlclBsb3QiLCJuZXdQcm9wIiwiU0VUX0ZJTFRFUl9QTE9UIiwic2V0TWFwSW5mbyIsIlNFVF9NQVBfSU5GTyIsImxvYWRGaWxlcyIsImZpbGVzIiwiTE9BRF9GSUxFUyIsImxvYWROZXh0RmlsZSIsImZpbGVDYWNoZSIsImZpbGVzVG9Mb2FkIiwidG90YWxDb3VudCIsIm9uRmluaXNoIiwiTE9BRF9ORVhUX0ZJTEUiLCJsb2FkRmlsZVN1Y2Nlc3MiLCJyZXN1bHQiLCJMT0FEX0ZJTEVTX1NVQ0NFU1MiLCJsb2FkRmlsZXNFcnIiLCJlcnJvciIsIkxPQURfRklMRVNfRVJSIiwic2V0RmVhdHVyZXMiLCJmZWF0dXJlcyIsIlNFVF9GRUFUVVJFUyIsInNldFBvbHlnb25GaWx0ZXJMYXllciIsImxheWVyIiwiZmVhdHVyZSIsIlNFVF9QT0xZR09OX0ZJTFRFUl9MQVlFUiIsInNldFNlbGVjdGVkRmVhdHVyZSIsIlNFVF9TRUxFQ1RFRF9GRUFUVVJFIiwiZGVsZXRlRmVhdHVyZSIsIkRFTEVURV9GRUFUVVJFIiwic2V0RWRpdG9yTW9kZSIsIlNFVF9FRElUT1JfTU9ERSIsImFwcGx5Q1BVRmlsdGVyIiwiQVBQTFlfQ1BVX0ZJTFRFUiIsInRvZ2dsZUVkaXRvclZpc2liaWxpdHkiLCJUT0dHTEVfRURJVE9SX1ZJU0lCSUxJVFkiLCJ2aXNTdGF0ZUFjdGlvbnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxQkE7O0FBckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBR0E7Ozs7Ozs7O0FBUU8sU0FBU0EsaUJBQVQsQ0FBMkJDLFFBQTNCLEVBQXFDQyxTQUFyQyxFQUFnRDtBQUNyRCxTQUFPO0FBQ0xDLElBQUFBLElBQUksRUFBRUMsd0JBQVlDLG1CQURiO0FBRUxKLElBQUFBLFFBQVEsRUFBUkEsUUFGSztBQUdMQyxJQUFBQSxTQUFTLEVBQVRBO0FBSEssR0FBUDtBQUtEO0FBRUQ7Ozs7Ozs7Ozs7OztBQVVPLFNBQVNJLG9CQUFULENBQThCTCxRQUE5QixFQUF3Q00sR0FBeEMsRUFBNkNDLElBQTdDLEVBQW1EQyxLQUFuRCxFQUEwRDtBQUMvRCxTQUFPO0FBQ0xOLElBQUFBLElBQUksRUFBRUMsd0JBQVlNLHVCQURiO0FBRUxULElBQUFBLFFBQVEsRUFBUkEsUUFGSztBQUdMTSxJQUFBQSxHQUFHLEVBQUhBLEdBSEs7QUFJTEMsSUFBQUEsSUFBSSxFQUFKQSxJQUpLO0FBS0xDLElBQUFB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LENBQXVCSixPQUF2QixFQUFnQztBQUNyQyxTQUFPO0FBQ0w1RyxJQUFBQSxJQUFJLEVBQUVDLHdCQUFZZ0gsY0FEYjtBQUVMTCxJQUFBQSxPQUFPLEVBQVBBO0FBRkssR0FBUDtBQUlEO0FBRUQ7Ozs7Ozs7Ozs7Ozs7O0FBWU8sU0FBU00sYUFBVCxDQUF1QjlGLElBQXZCLEVBQTZCO0FBQ2xDLFNBQU87QUFDTHBCLElBQUFBLElBQUksRUFBRUMsd0JBQVlrSCxlQURiO0FBRUwvRixJQUFBQSxJQUFJLEVBQUpBO0FBRkssR0FBUDtBQUlEO0FBRUQ7Ozs7Ozs7Ozs7QUFRTyxTQUFTZ0csY0FBVCxDQUF3QnZGLE1BQXhCLEVBQWdDO0FBQ3JDLFNBQU87QUFDTDdCLElBQUFBLElBQUksRUFBRUMsd0JBQVlvSCxnQkFEYjtBQUVMeEYsSUFBQUEsTUFBTSxFQUFOQTtBQUZLLEdBQVA7QUFJRDtBQUVEOzs7Ozs7Ozs7QUFPTyxTQUFTeUYsc0JBQVQsR0FBa0M7QUFDdkMsU0FBTztBQUNMdEgsSUFBQUEsSUFBSSxFQUFFQyx3QkFBWXNIO0FBRGIsR0FBUDtBQUdEO0FBRUQ7Ozs7QUFHQTs7Ozs7Ozs7QUFPQTtBQUNBOzs7QUFDQSxJQUFNQyxlQUFlLEdBQUcsSUFBeEI7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMCBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbi8vIHZpcy1zdGF0ZS1yZWR1Y2VyXHJcbmltcG9ydCBBY3Rpb25UeXBlcyBmcm9tICdjb25zdGFudHMvYWN0aW9uLXR5cGVzJztcclxuXHJcbi8qKlxyXG4gKiBVcGRhdGUgbGF5ZXIgYmFzZSBjb25maWc6IGRhdGFJZCwgbGFiZWwsIGNvbHVtbiwgaXNWaXNpYmxlXHJcbiAqIEBwYXJhbSBvbGRMYXllciAtIGxheWVyIHRvIGJlIHVwZGF0ZWRcclxuICogQHBhcmFtIG5ld0NvbmZpZyAtIG5ldyBjb25maWcgdG8gYmUgbWVyZ2VkIHdpdGggb2xkIGNvbmZpZ1xyXG4gKiBAcmV0dXJucyBhY3Rpb25cclxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdmlzLXN0YXRlLWFjdGlvbnMnKS5sYXllckNvbmZpZ0NoYW5nZX1cclxuICogQHB1YmxpY1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGxheWVyQ29uZmlnQ2hhbmdlKG9sZExheWVyLCBuZXdDb25maWcpIHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogQWN0aW9uVHlwZXMuTEFZRVJfQ09ORklHX0NIQU5HRSxcclxuICAgIG9sZExheWVyLFxyXG4gICAgbmV3Q29uZmlnXHJcbiAgfTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFVwZGF0ZSBsYXllciB0ZXh0IGxhYmVsXHJcbiAqIEBwYXJhbSBvbGRMYXllciAtIGxheWVyIHRvIGJlIHVwZGF0ZWRcclxuICogQHBhcmFtIGlkeCAtYGlkeGAgb2YgdGV4dCBsYWJlbCB0byBiZSB1cGRhdGVkXHJcbiAqIEBwYXJhbSBwcm9wIC0gYHByb3BgIG9mIHRleHQgbGFiZWwsIGUsZywgYGFuY2hvcmAsIGBhbGlnbm1lbnRgLCBgY29sb3JgLCBgc2l6ZWAsIGBmaWVsZGBcclxuICogQHBhcmFtIHZhbHVlIC0gbmV3IHZhbHVlXHJcbiAqIEByZXR1cm5zIGFjdGlvblxyXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi92aXMtc3RhdGUtYWN0aW9ucycpLmxheWVyVGV4dExhYmVsQ2hhbmdlfVxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbGF5ZXJUZXh0TGFiZWxDaGFuZ2Uob2xkTGF5ZXIsIGlkeCwgcHJvcCwgdmFsdWUpIHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogQWN0aW9uVHlwZXMuTEFZRVJfVEVYVF9MQUJFTF9DSEFOR0UsXHJcbiAgICBvbGRMYXllcixcclxuICAgIGlkeCxcclxuICAgIHByb3AsXHJcbiAgICB2YWx1ZVxyXG4gIH07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBVcGRhdGUgbGF5ZXIgdHlwZS4gUHJldmlld3MgbGF5ZXIgY29uZmlnIHdpbGwgYmUgY29waWVkIGlmIGFwcGxpY2FibGUuXHJcbiAqIEBwYXJhbSBvbGRMYXllciAtIGxheWVyIHRvIGJlIHVwZGF0ZWRcclxuICogQHBhcmFtIG5ld1R5cGUgLSBuZXcgdHlwZVxyXG4gKiBAcmV0dXJucyBhY3Rpb25cclxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdmlzLXN0YXRlLWFjdGlvbnMnKS5sYXllclR5cGVDaGFuZ2V9XHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBsYXllclR5cGVDaGFuZ2Uob2xkTGF5ZXIsIG5ld1R5cGUpIHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogQWN0aW9uVHlwZXMuTEFZRVJfVFlQRV9DSEFOR0UsXHJcbiAgICBvbGRMYXllcixcclxuICAgIG5ld1R5cGVcclxuICB9O1xyXG59XHJcblxyXG4vKipcclxuICogVXBkYXRlIGxheWVyIHZpc3VhbCBjaGFubmVsXHJcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZUFjdGlvbnNcclxuICogQHBhcmFtIG9sZExheWVyIC0gbGF5ZXIgdG8gYmUgdXBkYXRlZFxyXG4gKiBAcGFyYW0gbmV3Q29uZmlnIC0gbmV3IHZpc3VhbCBjaGFubmVsIGNvbmZpZ1xyXG4gKiBAcGFyYW0gY2hhbm5lbCAtIGNoYW5uZWwgdG8gYmUgdXBkYXRlZFxyXG4gKiBAcmV0dXJucyBhY3Rpb25cclxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdmlzLXN0YXRlLWFjdGlvbnMnKS5sYXllclZpc3VhbENoYW5uZWxDb25maWdDaGFuZ2V9XHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBsYXllclZpc3VhbENoYW5uZWxDb25maWdDaGFuZ2Uob2xkTGF5ZXIsIG5ld0NvbmZpZywgY2hhbm5lbCkge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBBY3Rpb25UeXBlcy5MQVlFUl9WSVNVQUxfQ0hBTk5FTF9DSEFOR0UsXHJcbiAgICBvbGRMYXllcixcclxuICAgIG5ld0NvbmZpZyxcclxuICAgIGNoYW5uZWxcclxuICB9O1xyXG59XHJcblxyXG4vKipcclxuICogVXBkYXRlIGxheWVyIGB2aXNDb25maWdgXHJcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZUFjdGlvbnNcclxuICogQHBhcmFtIG9sZExheWVyIC0gbGF5ZXIgdG8gYmUgdXBkYXRlZFxyXG4gKiBAcGFyYW0gbmV3VmlzQ29uZmlnIC0gbmV3IHZpc0NvbmZpZyBhcyBhIGtleSB2YWx1ZSBtYXA6IGUuZy4gYHtvcGFjaXR5OiAwLjh9YFxyXG4gKiBAcmV0dXJucyBhY3Rpb25cclxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdmlzLXN0YXRlLWFjdGlvbnMnKS5sYXllclZpc0NvbmZpZ0NoYW5nZX1cclxuICogQHB1YmxpY1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGxheWVyVmlzQ29uZmlnQ2hhbmdlKG9sZExheWVyLCBuZXdWaXNDb25maWcpIHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogQWN0aW9uVHlwZXMuTEFZRVJfVklTX0NPTkZJR19DSEFOR0UsXHJcbiAgICBvbGRMYXllcixcclxuICAgIG5ld1Zpc0NvbmZpZ1xyXG4gIH07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBTZXQgdGhlIGNvbG9yIHBhbGV0dGUgdWkgZm9yIGxheWVyIGNvbG9yXHJcbiAqIEBtZW1iZXJPZiB2aXNTdGF0ZUFjdGlvbnNcclxuICogQHBhcmFtIG9sZExheWVyIC0gbGF5ZXIgdG8gYmUgdXBkYXRlZFxyXG4gKiBAcGFyYW0gcHJvcCAtIHdoaWNoIGNvbG9yIHByb3BcclxuICogQHBhcmFtIG5ld0NvbmZpZyAtIHRvIGJlIG1lcmdlZFxyXG4gKiBAcmV0dXJucyBhY3Rpb25cclxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdmlzLXN0YXRlLWFjdGlvbnMnKS5sYXllckNvbG9yVUlDaGFuZ2V9XHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBsYXllckNvbG9yVUlDaGFuZ2Uob2xkTGF5ZXIsIHByb3AsIG5ld0NvbmZpZykge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBBY3Rpb25UeXBlcy5MQVlFUl9DT0xPUl9VSV9DSEFOR0UsXHJcbiAgICBvbGRMYXllcixcclxuICAgIHByb3AsXHJcbiAgICBuZXdDb25maWdcclxuICB9O1xyXG59XHJcblxyXG4vKipcclxuICogVXBkYXRlIGxheWVyIGJsZW5kaW5nIG1vZGVcclxuICogQG1lbWJlcm9mIHZpc1N0YXRlQWN0aW9uc1xyXG4gKiBAcGFyYW0gbW9kZSBvbmUgb2YgYGFkZGl0aXZlYCwgYG5vcm1hbGAgYW5kIGBzdWJ0cmFjdGl2ZWBcclxuICogQHJldHVybnMgYWN0aW9uXHJcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL3Zpcy1zdGF0ZS1hY3Rpb25zJykudXBkYXRlTGF5ZXJCbGVuZGluZ31cclxuICogQHB1YmxpY1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUxheWVyQmxlbmRpbmcobW9kZSkge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBBY3Rpb25UeXBlcy5VUERBVEVfTEFZRVJfQkxFTkRJTkcsXHJcbiAgICBtb2RlXHJcbiAgfTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFVwZGF0ZSBgaW50ZXJhY3Rpb25Db25maWdgXHJcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZUFjdGlvbnNcclxuICogQHBhcmFtIGNvbmZpZyAtIG5ldyBjb25maWcgYXMga2V5IHZhbHVlIG1hcDogYHt0b29sdGlwOiB7ZW5hYmxlZDogdHJ1ZX19YFxyXG4gKiBAcmV0dXJucyBhY3Rpb25cclxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdmlzLXN0YXRlLWFjdGlvbnMnKS5pbnRlcmFjdGlvbkNvbmZpZ0NoYW5nZX1cclxuICogQHB1YmxpY1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGludGVyYWN0aW9uQ29uZmlnQ2hhbmdlKGNvbmZpZykge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBBY3Rpb25UeXBlcy5JTlRFUkFDVElPTl9DT05GSUdfQ0hBTkdFLFxyXG4gICAgY29uZmlnXHJcbiAgfTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFVwZGF0ZSBmaWx0ZXIgcHJvcGVydHlcclxuICogQG1lbWJlcm9mIHZpc1N0YXRlQWN0aW9uc1xyXG4gKiBAcGFyYW0gaWR4IC1gaWR4YCBvZiBmaWx0ZXIgdG8gYmUgdXBkYXRlZFxyXG4gKiBAcGFyYW0gcHJvcCAtIGBwcm9wYCBvZiBmaWx0ZXIsIGUsZywgYGRhdGFJZGAsIGBuYW1lYCwgYHZhbHVlYFxyXG4gKiBAcGFyYW0gdmFsdWUgLSBuZXcgdmFsdWVcclxuICogQHBhcmFtIHZhbHVlSW5kZXggLSBkYXRhSWQgaW5kZXhcclxuICogQHJldHVybnMgYWN0aW9uXHJcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL3Zpcy1zdGF0ZS1hY3Rpb25zJykuc2V0RmlsdGVyfVxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2V0RmlsdGVyKGlkeCwgcHJvcCwgdmFsdWUsIHZhbHVlSW5kZXgpIHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogQWN0aW9uVHlwZXMuU0VUX0ZJTFRFUixcclxuICAgIGlkeCxcclxuICAgIHByb3AsXHJcbiAgICB2YWx1ZSxcclxuICAgIHZhbHVlSW5kZXhcclxuICB9O1xyXG59XHJcblxyXG4vKipcclxuICogQWRkIGEgbmV3IGZpbHRlclxyXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVBY3Rpb25zXHJcbiAqIEBwYXJhbSBkYXRhSWQgLSBkYXRhc2V0IGBpZGAgdGhpcyBuZXcgZmlsdGVyIGlzIGFzc29jaWF0ZWQgd2l0aFxyXG4gKiBAcmV0dXJucyBhY3Rpb25cclxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdmlzLXN0YXRlLWFjdGlvbnMnKS5hZGRGaWx0ZXJ9XHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRGaWx0ZXIoZGF0YUlkKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IEFjdGlvblR5cGVzLkFERF9GSUxURVIsXHJcbiAgICBkYXRhSWRcclxuICB9O1xyXG59XHJcblxyXG4vKipcclxuICogQWRkIGEgbmV3IGxheWVyXHJcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZUFjdGlvbnNcclxuICogQHBhcmFtIHByb3BzIC0gbmV3IGxheWVyIHByb3BzXHJcbiAqIEByZXR1cm5zIGFjdGlvblxyXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi92aXMtc3RhdGUtYWN0aW9ucycpLmFkZExheWVyfVxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYWRkTGF5ZXIocHJvcHMpIHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogQWN0aW9uVHlwZXMuQUREX0xBWUVSLFxyXG4gICAgcHJvcHNcclxuICB9O1xyXG59XHJcblxyXG4vKipcclxuICogUmVvcmRlciBsYXllciwgb3JkZXIgaXMgYW4gYXJyYXkgb2YgbGF5ZXIgaW5kZXhlcywgaW5kZXggMCB3aWxsIGJlIHRoZSBvbmUgYXQgdGhlIGJvdHRvbVxyXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVBY3Rpb25zXHJcbiAqIEBwYXJhbSBvcmRlciBhbiBhcnJheSBvZiBsYXllciBpbmRleGVzXHJcbiAqIEByZXR1cm5zIGFjdGlvblxyXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi92aXMtc3RhdGUtYWN0aW9ucycpLnJlb3JkZXJMYXllcn1cclxuICogQHB1YmxpY1xyXG4gKiBAZXhhbXBsZVxyXG4gKlxyXG4gKiAvLyBicmluZyBgbGF5ZXJzWzFdYCBiZWxvdyBgbGF5ZXJzWzBdYCwgdGhlIHNlcXVlbmNlIGxheWVycyB3aWxsIGJlIHJlbmRlcmVkIGlzIGAxYCwgYDBgLCBgMmAsIGAzYC5cclxuICogLy8gYDFgIHdpbGwgYmUgYXQgdGhlIGJvdHRvbSwgYDNgIHdpbGwgYmUgYXQgdGhlIHRvcC5cclxuICogdGhpcy5wcm9wcy5kaXNwYXRjaChyZW9yZGVyTGF5ZXIoWzEsIDAsIDIsIDNdKSk7XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcmVvcmRlckxheWVyKG9yZGVyKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IEFjdGlvblR5cGVzLlJFT1JERVJfTEFZRVIsXHJcbiAgICBvcmRlclxyXG4gIH07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBSZW1vdmUgYSBmaWx0ZXIgZnJvbSBgdmlzU3RhdGUuZmlsdGVyc2AsIG9uY2UgYSBmaWx0ZXIgaXMgcmVtb3ZlZCwgZGF0YSB3aWxsIGJlIHJlLWZpbHRlcmVkIGFuZCBsYXllciB3aWxsIGJlIHVwZGF0ZWRcclxuICogQG1lbWJlcm9mIHZpc1N0YXRlQWN0aW9uc1xyXG4gKiBAcGFyYW0gaWR4IGlkeCBvZiBmaWx0ZXIgdG8gYmUgcmVtb3ZlZFxyXG4gKiBAcmV0dXJucyBhY3Rpb25cclxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdmlzLXN0YXRlLWFjdGlvbnMnKS5yZW1vdmVGaWx0ZXJ9XHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVGaWx0ZXIoaWR4KSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IEFjdGlvblR5cGVzLlJFTU9WRV9GSUxURVIsXHJcbiAgICBpZHhcclxuICB9O1xyXG59XHJcblxyXG4vKipcclxuICogUmVtb3ZlIGEgbGF5ZXJcclxuICogQG1lbWJlcm9mIHZpc1N0YXRlQWN0aW9uc1xyXG4gKiBAcGFyYW0gaWR4IGlkeCBvZiBsYXllciB0byBiZSByZW1vdmVkXHJcbiAqIEByZXR1cm5zIGFjdGlvblxyXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi92aXMtc3RhdGUtYWN0aW9ucycpLnJlbW92ZUxheWVyfVxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlTGF5ZXIoaWR4KSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IEFjdGlvblR5cGVzLlJFTU9WRV9MQVlFUixcclxuICAgIGlkeFxyXG4gIH07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBSZW1vdmUgYSBkYXRhc2V0IGFuZCBhbGwgbGF5ZXJzLCBmaWx0ZXJzLCB0b29sdGlwIGNvbmZpZ3MgdGhhdCBiYXNlZCBvbiBpdFxyXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVBY3Rpb25zXHJcbiAqIEBwYXJhbSBkYXRhSWQgZGF0YXNldCBpZFxyXG4gKiBAcmV0dXJucyBhY3Rpb25cclxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdmlzLXN0YXRlLWFjdGlvbnMnKS5yZW1vdmVEYXRhc2V0fVxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlRGF0YXNldChkYXRhSWQpIHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogQWN0aW9uVHlwZXMuUkVNT1ZFX0RBVEFTRVQsXHJcbiAgICBkYXRhSWRcclxuICB9O1xyXG59XHJcblxyXG4vKipcclxuICogRGlzcGxheSBkYXRhc2V0IHRhYmxlIGluIGEgbW9kYWxcclxuICogQG1lbWJlcm9mIHZpc1N0YXRlQWN0aW9uc1xyXG4gKiBAcGFyYW0gZGF0YUlkIGRhdGFzZXQgaWQgdG8gc2hvdyBpbiB0YWJsZVxyXG4gKiBAcmV0dXJucyBhY3Rpb25cclxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdmlzLXN0YXRlLWFjdGlvbnMnKS5zaG93RGF0YXNldFRhYmxlfVxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2hvd0RhdGFzZXRUYWJsZShkYXRhSWQpIHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogQWN0aW9uVHlwZXMuU0hPV19EQVRBU0VUX1RBQkxFLFxyXG4gICAgZGF0YUlkXHJcbiAgfTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFNvcnQgZGF0YXNldCBjb2x1bW4sIGZvciB0YWJsZSBkaXNwbGF5XHJcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZUFjdGlvbnNcclxuICogQHBhcmFtIGRhdGFJZFxyXG4gKiBAcGFyYW0gY29sdW1uXHJcbiAqIEBwYXJhbSBtb2RlXHJcbiAqIEByZXR1cm5zIGFjdGlvblxyXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi92aXMtc3RhdGUtYWN0aW9ucycpLnNvcnRUYWJsZUNvbHVtbn1cclxuICogQHB1YmxpY1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNvcnRUYWJsZUNvbHVtbihkYXRhSWQsIGNvbHVtbiwgbW9kZSkge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBBY3Rpb25UeXBlcy5TT1JUX1RBQkxFX0NPTFVNTixcclxuICAgIGRhdGFJZCxcclxuICAgIGNvbHVtbixcclxuICAgIG1vZGVcclxuICB9O1xyXG59XHJcblxyXG4vKipcclxuICogUGluIGRhdGFzZXQgY29sdW1uLCBmb3IgdGFibGUgZGlzcGxheVxyXG4gKiBAcGFyYW0gZGF0YUlkXHJcbiAqIEBwYXJhbSBjb2x1bW5cclxuICogQHJldHVybnMgYWN0aW9uXHJcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL3Zpcy1zdGF0ZS1hY3Rpb25zJykucGluVGFibGVDb2x1bW59XHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBwaW5UYWJsZUNvbHVtbihkYXRhSWQsIGNvbHVtbikge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBBY3Rpb25UeXBlcy5QSU5fVEFCTEVfQ09MVU1OLFxyXG4gICAgZGF0YUlkLFxyXG4gICAgY29sdW1uXHJcbiAgfTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENvcHkgY29sdW1uLCBmb3IgdGFibGUgZGlzcGxheVxyXG4gKiBAcGFyYW0gZGF0YUlkXHJcbiAqIEBwYXJhbSBjb2x1bW5cclxuICogQHJldHVybnMgYWN0aW9uXHJcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL3Zpcy1zdGF0ZS1hY3Rpb25zJykuY29weVRhYmxlQ29sdW1ufVxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY29weVRhYmxlQ29sdW1uKGRhdGFJZCwgY29sdW1uKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IEFjdGlvblR5cGVzLkNPUFlfVEFCTEVfQ09MVU1OLFxyXG4gICAgZGF0YUlkLFxyXG4gICAgY29sdW1uXHJcbiAgfTtcclxufVxyXG5cclxuLy8gKiBAcGFyYW0gZGF0YXNldC5pbmZvIC1pbmZvIG9mIGEgZGF0YXNldFxyXG4vLyAqIEBwYXJhbSBkYXRhc2V0LmluZm8uaWQgLSBpZCBvZiB0aGlzIGRhdGFzZXQuIElmIGNvbmZpZyBpcyBkZWZpbmVkLCBgaWRgIHNob3VsZCBtYXRjaGVzIHRoZSBgZGF0YUlkYCBpbiBjb25maWcuXHJcbi8vICogQHBhcmFtIGRhdGFzZXQuaW5mby5sYWJlbCAtIEEgZGlzcGxheSBuYW1lIG9mIHRoaXMgZGF0YXNldFxyXG4vLyAqIEBwYXJhbSBkYXRhc2V0LmRhdGEgLSAqKipyZXF1aXJlZCoqIFRoZSBkYXRhIG9iamVjdCwgaW4gYSB0YWJ1bGFyIGZvcm1hdCB3aXRoIDIgcHJvcGVydGllcyBgZmllbGRzYCBhbmQgYHJvd3NgXHJcbi8vICogQHBhcmFtIGRhdGFzZXQuZGF0YS5maWVsZHMgLSAqKipyZXF1aXJlZCoqIEFycmF5IG9mIGZpZWxkcyxcclxuLy8gKiBAcGFyYW0gZGF0YXNldC5kYXRhLmZpZWxkcy5uYW1lIC0gKioqcmVxdWlyZWQqKiBOYW1lIG9mIHRoZSBmaWVsZCxcclxuLy8gKiBAcGFyYW0gZGF0YXNldC5kYXRhLnJvd3MgLSAqKipyZXF1aXJlZCoqIEFycmF5IG9mIHJvd3MsIGluIGEgdGFidWxhciBmb3JtYXQgd2l0aCBgZmllbGRzYCBhbmQgYHJvd3NgXHJcbi8qKlxyXG4gKiBBZGQgbmV3IGRhdGFzZXQgdG8gYHZpc1N0YXRlYCwgd2l0aCBvcHRpb24gdG8gbG9hZCBhIG1hcCBjb25maWcgYWxvbmcgd2l0aCB0aGUgZGF0YXNldHNcclxuICogQG1lbWJlcm9mIHZpc1N0YXRlQWN0aW9uc1xyXG4gKiBAcGFyYW0gZGF0YXNldHMgLSAqKipyZXF1aXJlZCoqIGRhdGFzZXRzIGNhbiBiZSBhIGRhdGFzZXQgb3IgYW4gYXJyYXkgb2YgZGF0YXNldHNcclxuICogRWFjaCBkYXRhc2V0IG9iamVjdCBuZWVkcyB0byBoYXZlIGBpbmZvYCBhbmQgYGRhdGFgIHByb3BlcnR5LlxyXG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xyXG4gKiBAcGFyYW0gb3B0aW9ucy5jZW50ZXJNYXAgYGRlZmF1bHQ6IHRydWVgIGlmIGBjZW50ZXJNYXBgIGlzIHNldCB0byBgdHJ1ZWAga2VwbGVyLmdsIHdpbGxcclxuICogcGxhY2UgdGhlIG1hcCB2aWV3IHdpdGhpbiB0aGUgZGF0YSBwb2ludHMgYm91bmRhcmllc1xyXG4gKiBAcGFyYW0gb3B0aW9ucy5yZWFkT25seSBgZGVmYXVsdDogZmFsc2VgIGlmIGByZWFkT25seWAgaXMgc2V0IHRvIGB0cnVlYFxyXG4gKiB0aGUgbGVmdCBzZXR0aW5nIHBhbmVsIHdpbGwgYmUgaGlkZGVuXHJcbiAqIEBwYXJhbSBjb25maWcgdGhpcyBvYmplY3Qgd2lsbCBjb250YWluIHRoZSBmdWxsIGtlcGxlci5nbCBpbnN0YW5jZSBjb25maWd1cmF0aW9uIHttYXBTdGF0ZSwgbWFwU3R5bGUsIHZpc1N0YXRlfVxyXG4gKiBAcmV0dXJucyBhY3Rpb25cclxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdmlzLXN0YXRlLWFjdGlvbnMnKS51cGRhdGVWaXNEYXRhfVxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlVmlzRGF0YShkYXRhc2V0cywgb3B0aW9ucywgY29uZmlnKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IEFjdGlvblR5cGVzLlVQREFURV9WSVNfREFUQSxcclxuICAgIGRhdGFzZXRzLFxyXG4gICAgb3B0aW9ucyxcclxuICAgIGNvbmZpZ1xyXG4gIH07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBTdGFydCBhbmQgZW5kIGZpbHRlciBhbmltYXRpb25cclxuICogQG1lbWJlcm9mIHZpc1N0YXRlQWN0aW9uc1xyXG4gKiBAcGFyYW0ge051bWJlcn0gaWR4IG9mIGZpbHRlclxyXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi92aXMtc3RhdGUtYWN0aW9ucycpLnRvZ2dsZUZpbHRlckFuaW1hdGlvbn1cclxuICogQHJldHVybnMgYWN0aW9uXHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB0b2dnbGVGaWx0ZXJBbmltYXRpb24oaWR4KSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IEFjdGlvblR5cGVzLlRPR0dMRV9GSUxURVJfQU5JTUFUSU9OLFxyXG4gICAgaWR4XHJcbiAgfTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENoYW5nZSBmaWx0ZXIgYW5pbWF0aW9uIHNwZWVkXHJcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZUFjdGlvbnNcclxuICogQHBhcmFtIGlkeCAtICBgaWR4YCBvZiBmaWx0ZXJcclxuICogQHBhcmFtIHNwZWVkIC0gYHNwZWVkYCB0byBjaGFuZ2UgaXQgdG8uIGBzcGVlZGAgaXMgYSBtdWx0aXBsaWVyXHJcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL3Zpcy1zdGF0ZS1hY3Rpb25zJykudXBkYXRlRmlsdGVyQW5pbWF0aW9uU3BlZWR9XHJcbiAqIEByZXR1cm5zIGFjdGlvblxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlRmlsdGVyQW5pbWF0aW9uU3BlZWQoaWR4LCBzcGVlZCkge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBBY3Rpb25UeXBlcy5VUERBVEVfRklMVEVSX0FOSU1BVElPTl9TUEVFRCxcclxuICAgIGlkeCxcclxuICAgIHNwZWVkXHJcbiAgfTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFJlc2V0IGFuaW1hdGlvblxyXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVBY3Rpb25zXHJcbiAqIEBwYXJhbSB2YWx1ZSAtICBDdXJyZW50IHZhbHVlIG9mIHRoZSBzbGlkZXJcclxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdmlzLXN0YXRlLWFjdGlvbnMnKS51cGRhdGVBbmltYXRpb25UaW1lfVxyXG4gKiBAcmV0dXJucyBhY3Rpb25cclxuICogQHB1YmxpY1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUFuaW1hdGlvblRpbWUodmFsdWUpIHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogQWN0aW9uVHlwZXMuVVBEQVRFX0FOSU1BVElPTl9USU1FLFxyXG4gICAgdmFsdWVcclxuICB9O1xyXG59XHJcblxyXG4vKipcclxuICogdXBkYXRlIHRyaXAgbGF5ZXIgYW5pbWF0aW9uIHNwZWVkXHJcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZUFjdGlvbnNcclxuICogQHBhcmFtIHNwZWVkIC0gYHNwZWVkYCB0byBjaGFuZ2UgaXQgdG8uIGBzcGVlZGAgaXMgYSBtdWx0aXBsaWVyXHJcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL3Zpcy1zdGF0ZS1hY3Rpb25zJykudXBkYXRlTGF5ZXJBbmltYXRpb25TcGVlZH1cclxuICogQHJldHVybnMgYWN0aW9uXHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVMYXllckFuaW1hdGlvblNwZWVkKHNwZWVkKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IEFjdGlvblR5cGVzLlVQREFURV9MQVlFUl9BTklNQVRJT05fU1BFRUQsXHJcbiAgICBzcGVlZFxyXG4gIH07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBTaG93IGxhcmdlciB0aW1lIGZpbHRlciBhdCBib3R0b20gZm9yIHRpbWUgcGxheWJhY2sgKGFwcGx5IHRvIHRpbWUgZmlsdGVyIG9ubHkpXHJcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZUFjdGlvbnNcclxuICogQHBhcmFtIGlkeCAtIGluZGV4IG9mIGZpbHRlciB0byBlbmxhcmdlXHJcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL3Zpcy1zdGF0ZS1hY3Rpb25zJykuZW5sYXJnZUZpbHRlcn1cclxuICogQHJldHVybnMgYWN0aW9uXHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBlbmxhcmdlRmlsdGVyKGlkeCkge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBBY3Rpb25UeXBlcy5FTkxBUkdFX0ZJTFRFUixcclxuICAgIGlkeFxyXG4gIH07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBTaG93L2hpZGUgZmlsdGVyIGZlYXR1cmUgb24gbWFwXHJcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZUFjdGlvbnNcclxuICogQHBhcmFtIGlkeCAtIGluZGV4IG9mIGZpbHRlciBmZWF0dXJlIHRvIHNob3cvaGlkZVxyXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi92aXMtc3RhdGUtYWN0aW9ucycpLnRvZ2dsZUZpbHRlckZlYXR1cmV9XHJcbiAqIEByZXR1cm4gYWN0aW9uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdG9nZ2xlRmlsdGVyRmVhdHVyZShpZHgpIHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogQWN0aW9uVHlwZXMuVE9HR0xFX0ZJTFRFUl9GRUFUVVJFLFxyXG4gICAgaWR4XHJcbiAgfTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFRyaWdnZXIgbGF5ZXIgaG92ZXIgZXZlbnQgd2l0aCBob3ZlcmVkIG9iamVjdFxyXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVBY3Rpb25zXHJcbiAqIEBwYXJhbSBpbmZvIC0gT2JqZWN0IGhvdmVyZWQsIHJldHVybmVkIGJ5IGRlY2suZ2xcclxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdmlzLXN0YXRlLWFjdGlvbnMnKS5vbkxheWVySG92ZXJ9XHJcbiAqIEByZXR1cm5zIGFjdGlvblxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gb25MYXllckhvdmVyKGluZm8pIHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogQWN0aW9uVHlwZXMuTEFZRVJfSE9WRVIsXHJcbiAgICBpbmZvXHJcbiAgfTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFRyaWdnZXIgbGF5ZXIgY2xpY2sgZXZlbnQgd2l0aCBjbGlja2VkIG9iamVjdFxyXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVBY3Rpb25zXHJcbiAqIEBwYXJhbSBpbmZvIC0gT2JqZWN0IGNsaWNrZWQsIHJldHVybmVkIGJ5IGRlY2suZ2xcclxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdmlzLXN0YXRlLWFjdGlvbnMnKS5vbkxheWVyQ2xpY2t9XHJcbiAqIEByZXR1cm5zIGFjdGlvblxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gb25MYXllckNsaWNrKGluZm8pIHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogQWN0aW9uVHlwZXMuTEFZRVJfQ0xJQ0ssXHJcbiAgICBpbmZvXHJcbiAgfTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFRyaWdnZXIgbWFwIGNsaWNrIGV2ZW50LCB1bnNlbGVjdCBjbGlja2VkIG9iamVjdFxyXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVBY3Rpb25zXHJcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL3Zpcy1zdGF0ZS1hY3Rpb25zJykub25NYXBDbGlja31cclxuICogQHJldHVybnMgYWN0aW9uXHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBvbk1hcENsaWNrKCkge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBBY3Rpb25UeXBlcy5NQVBfQ0xJQ0tcclxuICB9O1xyXG59XHJcblxyXG4vKipcclxuICogVHJpZ2dlciBtYXAgbW91c2UgbW92ZWV2ZW50LCBwYXlsb2FkIHdvdWxkIGJlXHJcbiAqIFJlYWN0LW1hcC1nbCBQb2ludGVyRXZlbnRcclxuICogaHR0cHM6Ly91YmVyLmdpdGh1Yi5pby9yZWFjdC1tYXAtZ2wvIy9kb2N1bWVudGF0aW9uL2FwaS1yZWZlcmVuY2UvcG9pbnRlci1ldmVudFxyXG4gKlxyXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVBY3Rpb25zXHJcbiAqIEBwYXJhbSBldnQgLSBQb2ludGVyRXZlbnRcclxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdmlzLXN0YXRlLWFjdGlvbnMnKS5vbk1vdXNlTW92ZX1cclxuICogQHJldHVybnMgYWN0aW9uXHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBvbk1vdXNlTW92ZShldnQpIHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogQWN0aW9uVHlwZXMuTU9VU0VfTU9WRSxcclxuICAgIGV2dFxyXG4gIH07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUb2dnbGUgdmlzaWJpbGl0eSBvZiBhIGxheWVyIGluIGEgc3BsaXQgbWFwXHJcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZUFjdGlvbnNcclxuICogQHBhcmFtIG1hcEluZGV4IC0gaW5kZXggb2YgdGhlIHNwbGl0IG1hcFxyXG4gKiBAcGFyYW0gbGF5ZXJJZCAtIGlkIG9mIHRoZSBsYXllclxyXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi92aXMtc3RhdGUtYWN0aW9ucycpLnRvZ2dsZUxheWVyRm9yTWFwfVxyXG4gKiBAcmV0dXJucyBhY3Rpb25cclxuICogQHB1YmxpY1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZUxheWVyRm9yTWFwKG1hcEluZGV4LCBsYXllcklkKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IEFjdGlvblR5cGVzLlRPR0dMRV9MQVlFUl9GT1JfTUFQLFxyXG4gICAgbWFwSW5kZXgsXHJcbiAgICBsYXllcklkXHJcbiAgfTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFNldCB0aGUgcHJvcGVydHkgb2YgYSBmaWx0ZXIgcGxvdFxyXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVBY3Rpb25zXHJcbiAqIEBwYXJhbSBpZHhcclxuICogQHBhcmFtIG5ld1Byb3Aga2V5IHZhbHVlIG1hcHBpbmcgb2YgbmV3IHByb3AgYHt5QXhpczogJ2hpc3RvZ3JhbSd9YFxyXG4gKiBAcGFyYW0gdmFsdWVJbmRleCBkYXRhSWQgaW5kZXhcclxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdmlzLXN0YXRlLWFjdGlvbnMnKS5zZXRGaWx0ZXJQbG90fVxyXG4gKiBAcmV0dXJucyBhY3Rpb25cclxuICogQHB1YmxpY1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNldEZpbHRlclBsb3QoaWR4LCBuZXdQcm9wLCB2YWx1ZUluZGV4KSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IEFjdGlvblR5cGVzLlNFVF9GSUxURVJfUExPVCxcclxuICAgIGlkeCxcclxuICAgIG5ld1Byb3AsXHJcbiAgICB2YWx1ZUluZGV4XHJcbiAgfTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFNldCB0aGUgcHJvcGVydHkgb2YgYSBmaWx0ZXIgcGxvdFxyXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVBY3Rpb25zXHJcbiAqIEBwYXJhbSBpbmZvXHJcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL3Zpcy1zdGF0ZS1hY3Rpb25zJykuc2V0TWFwSW5mb31cclxuICogQHJldHVybnMgYWN0aW9uXHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRNYXBJbmZvKGluZm8pIHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogQWN0aW9uVHlwZXMuU0VUX01BUF9JTkZPLFxyXG4gICAgaW5mb1xyXG4gIH07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUcmlnZ2VyIGZpbGUgbG9hZGluZyBkaXNwYXRjaCBgYWRkRGF0YVRvTWFwYCBpZiBzdWNjZWVkLCBvciBgbG9hZEZpbGVzRXJyYCBpZiBmYWlsZWRcclxuICogQG1lbWJlcm9mIHZpc1N0YXRlQWN0aW9uc1xyXG4gKiBAcGFyYW0gZmlsZXMgYXJyYXkgb2YgZmlsZWJsb2JcclxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdmlzLXN0YXRlLWFjdGlvbnMnKS5sb2FkRmlsZXN9XHJcbiAqIEByZXR1cm5zIGFjdGlvblxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbG9hZEZpbGVzKGZpbGVzKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IEFjdGlvblR5cGVzLkxPQURfRklMRVMsXHJcbiAgICBmaWxlc1xyXG4gIH07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDYWxsZWQgd2l0aCBuZXh0IGZpbGUgdG8gbG9hZFxyXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVBY3Rpb25zXHJcbiAqIEBwYXJhbSBwYXlsb2FkXHJcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL3Zpcy1zdGF0ZS1hY3Rpb25zJykubG9hZE5leHRGaWxlfVxyXG4gKiBAcmV0dXJucyBhY3Rpb25cclxuICogQHB1YmxpY1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGxvYWROZXh0RmlsZSh7ZmlsZUNhY2hlLCBmaWxlc1RvTG9hZCwgdG90YWxDb3VudCwgb25GaW5pc2h9KSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IEFjdGlvblR5cGVzLkxPQURfTkVYVF9GSUxFLFxyXG4gICAgZmlsZUNhY2hlLFxyXG4gICAgZmlsZXNUb0xvYWQsXHJcbiAgICB0b3RhbENvdW50LFxyXG4gICAgb25GaW5pc2hcclxuICB9O1xyXG59XHJcblxyXG4vKipcclxuICogY2FsbGVkIHdoZW4gYWxsIGZpbGVzIGFyZSBwcm9jZXNzZWQgYW5kIGxvYWRlZFxyXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVBY3Rpb25zXHJcbiAqIEBwYXJhbSByZXN1bHRcclxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdmlzLXN0YXRlLWFjdGlvbnMnKS5sb2FkRmlsZVN1Y2Nlc3N9XHJcbiAqIEByZXR1cm5zIGFjdGlvblxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRGaWxlU3VjY2VzcyhyZXN1bHQpIHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogQWN0aW9uVHlwZXMuTE9BRF9GSUxFU19TVUNDRVNTLFxyXG4gICAgcmVzdWx0XHJcbiAgfTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFRyaWdnZXIgbG9hZGluZyBmaWxlIGVycm9yXHJcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZUFjdGlvbnNcclxuICogQHBhcmFtICBlcnJvclxyXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi92aXMtc3RhdGUtYWN0aW9ucycpLmxvYWRGaWxlc0Vycn1cclxuICogQHJldHVybnMgYWN0aW9uXHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBsb2FkRmlsZXNFcnIoZXJyb3IpIHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogQWN0aW9uVHlwZXMuTE9BRF9GSUxFU19FUlIsXHJcbiAgICBlcnJvclxyXG4gIH07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBTdG9yZSBmZWF0dXJlcyB0byBzdGF0ZVxyXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVBY3Rpb25zXHJcbiAqIEBwYXJhbSBmZWF0dXJlc1xyXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi92aXMtc3RhdGUtYWN0aW9ucycpLnNldEZlYXR1cmVzfVxyXG4gKiBAcmV0dXJucyBhY3Rpb25cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRGZWF0dXJlcyhmZWF0dXJlcykge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBBY3Rpb25UeXBlcy5TRVRfRkVBVFVSRVMsXHJcbiAgICBmZWF0dXJlc1xyXG4gIH07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBJdCB3aWxsIGFwcGx5IHRoZSBwcm92aWRlIGZlYXR1cmUgYXMgZmlsdGVyIHRvIHRoZSBnaXZlbiBsYXllci5cclxuICogSWYgdGhlIGdpdmVuIGZlYXR1cmUgaXMgYWxyZWFkeSBhcHBsaWVkIGFzIGZpbHRlciB0byB0aGUgbGF5ZXIsIGl0IHdpbGwgcmVtb3ZlIHRoZSBsYXllciBmcm9tIHRoZSBmaWx0ZXJcclxuICogQG1lbWJlcm9mIHZpc1N0YXRlQWN0aW9uc1xyXG4gKiBAcGFyYW0gbGF5ZXJcclxuICogQHBhcmFtIGZlYXR1cmVcclxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdmlzLXN0YXRlLWFjdGlvbnMnKS5zZXRQb2x5Z29uRmlsdGVyTGF5ZXJ9XHJcbiAqIEByZXR1cm5zIGFjdGlvblxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNldFBvbHlnb25GaWx0ZXJMYXllcihsYXllciwgZmVhdHVyZSkge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBBY3Rpb25UeXBlcy5TRVRfUE9MWUdPTl9GSUxURVJfTEFZRVIsXHJcbiAgICBsYXllcixcclxuICAgIGZlYXR1cmVcclxuICB9O1xyXG59XHJcblxyXG4vKipcclxuICogU2V0IHRoZSBjdXJyZW50IGZlYXR1cmUgdG8gYmUgZWRpdGVkL2RlbGV0ZWRcclxuICogQG1lbWJlcm9mIHZpc1N0YXRlQWN0aW9uc1xyXG4gKiBAcGFyYW0gZmVhdHVyZVxyXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi92aXMtc3RhdGUtYWN0aW9ucycpLnNldFNlbGVjdGVkRmVhdHVyZX1cclxuICogQHJldHVybnMgYWN0aW9uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2V0U2VsZWN0ZWRGZWF0dXJlKGZlYXR1cmUpIHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogQWN0aW9uVHlwZXMuU0VUX1NFTEVDVEVEX0ZFQVRVUkUsXHJcbiAgICBmZWF0dXJlXHJcbiAgfTtcclxufVxyXG5cclxuLyoqXHJcbiAqIERlbGV0ZSB0aGUgZ2l2ZW4gZmVhdHVyZVxyXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVBY3Rpb25zXHJcbiAqIEBwYXJhbSBmZWF0dXJlXHJcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL3Zpcy1zdGF0ZS1hY3Rpb25zJykuZGVsZXRlRmVhdHVyZX1cclxuICogQHJldHVybnMgYWN0aW9uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlRmVhdHVyZShmZWF0dXJlKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IEFjdGlvblR5cGVzLkRFTEVURV9GRUFUVVJFLFxyXG4gICAgZmVhdHVyZVxyXG4gIH07XHJcbn1cclxuXHJcbi8qKiBTZXQgdGhlIG1hcCBtb2RlXHJcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZUFjdGlvbnNcclxuICogQHBhcmFtIG1vZGUgb25lIG9mIEVESVRPUl9NT0RFU1xyXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi92aXMtc3RhdGUtYWN0aW9ucycpLnNldEVkaXRvck1vZGV9XHJcbiAqIEByZXR1cm5zIGFjdGlvblxyXG4gKiBAcHVibGljXHJcbiAqIEBleGFtcGxlXHJcbiAqIGltcG9ydCB7c2V0TWFwTW9kZX0gZnJvbSAna2VwbGVyLmdsL2FjdGlvbnMnO1xyXG4gKiBpbXBvcnQge0VESVRPUl9NT0RFU30gZnJvbSAna2VwbGVyLmdsL2NvbnN0YW50cyc7XHJcbiAqXHJcbiAqIHRoaXMucHJvcHMuZGlzcGF0Y2goc2V0TWFwTW9kZShFRElUT1JfTU9ERVMuRFJBV19QT0xZR09OKSk7XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2V0RWRpdG9yTW9kZShtb2RlKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IEFjdGlvblR5cGVzLlNFVF9FRElUT1JfTU9ERSxcclxuICAgIG1vZGVcclxuICB9O1xyXG59XHJcblxyXG4vKipcclxuICogVHJpZ2dlciBDUFUgZmlsdGVyIG9mIHNlbGVjdGVkIGRhdGFzZXRcclxuICogQG1lbWJlcm9mIHZpc1N0YXRlQWN0aW9uc1xyXG4gKiBAcGFyYW0gZGF0YUlkIC0gc2luZ2xlIGRhdGFJZCBvciBhbiBhcnJheSBvZiBkYXRhSWRzXHJcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL3Zpcy1zdGF0ZS1hY3Rpb25zJykuYXBwbHlDUFVGaWx0ZXJ9XHJcbiAqIEByZXR1cm5zIGFjdGlvblxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYXBwbHlDUFVGaWx0ZXIoZGF0YUlkKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IEFjdGlvblR5cGVzLkFQUExZX0NQVV9GSUxURVIsXHJcbiAgICBkYXRhSWRcclxuICB9O1xyXG59XHJcblxyXG4vKipcclxuXHJcbiAqIFRvZ2dsZSBlZGl0b3IgbGF5ZXIgdmlzaWJpbGl0eVxyXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVBY3Rpb25zXHJcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL3Zpcy1zdGF0ZS1hY3Rpb25zJykudG9nZ2xlRWRpdG9yVmlzaWJpbGl0eX1cclxuICogQHJldHVybiBhY3Rpb25cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB0b2dnbGVFZGl0b3JWaXNpYmlsaXR5KCkge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBBY3Rpb25UeXBlcy5UT0dHTEVfRURJVE9SX1ZJU0lCSUxJVFlcclxuICB9O1xyXG59XHJcblxyXG4vKipcclxuICogVGhpcyBkZWNsYXJhdGlvbiBpcyBuZWVkZWQgdG8gZ3JvdXAgYWN0aW9ucyBpbiBkb2NzXHJcbiAqL1xyXG4vKipcclxuICogQWN0aW9ucyBoYW5kbGVkIG1vc3RseSBieSBgdmlzU3RhdGVgIHJlZHVjZXIuXHJcbiAqIFRoZXkgbWFuYWdlIGhvdyBkYXRhIGlzIHByb2Nlc3NlZCwgZmlsdGVyZWQgYW5kIGRpc3BsYXllZCBvbiB0aGUgbWFwIGJ5IG9wZXJhdGVzIG9uIGxheWVycyxcclxuICogZmlsdGVycyBhbmQgaW50ZXJhY3Rpb24gc2V0dGluZ3MuXHJcbiAqXHJcbiAqIEBwdWJsaWNcclxuICovXHJcbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXHJcbi8vIEB0cy1pZ25vcmVcclxuY29uc3QgdmlzU3RhdGVBY3Rpb25zID0gbnVsbDtcclxuLyogZXNsaW50LWVuYWJsZSBuby11bnVzZWQtdmFycyAqL1xyXG4iXX0=