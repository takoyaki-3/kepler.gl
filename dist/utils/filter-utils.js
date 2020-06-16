"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDefaultFilter = getDefaultFilter;
exports.shouldApplyFilter = shouldApplyFilter;
exports.validatePolygonFilter = validatePolygonFilter;
exports.validateFilter = validateFilter;
exports.validateFilterWithData = validateFilterWithData;
exports.getFilterProps = getFilterProps;
exports.getFieldDomain = getFieldDomain;
exports.getFilterFunction = getFilterFunction;
exports.updateFilterDataId = updateFilterDataId;
exports.filterDataset = filterDataset;
exports.filterDataByFilterTypes = filterDataByFilterTypes;
exports.getFilterRecord = getFilterRecord;
exports.diffFilters = diffFilters;
exports.adjustValueToFilterDomain = adjustValueToFilterDomain;
exports.getNumericFieldDomain = getNumericFieldDomain;
exports.getNumericStepSize = getNumericStepSize;
exports.getTimestampFieldDomain = getTimestampFieldDomain;
exports.histogramConstruct = histogramConstruct;
exports.getHistogram = getHistogram;
exports.formatNumberByStep = formatNumberByStep;
exports.isInRange = isInRange;
exports.isInPolygon = isInPolygon;
exports.getTimeWidgetTitleFormatter = getTimeWidgetTitleFormatter;
exports.getTimeWidgetHintFormatter = getTimeWidgetHintFormatter;
exports.isValidFilterValue = isValidFilterValue;
exports.getFilterPlot = getFilterPlot;
exports.getDefaultFilterPlotType = getDefaultFilterPlotType;
exports.applyFiltersToDatasets = applyFiltersToDatasets;
exports.applyFilterFieldName = applyFilterFieldName;
exports.mergeFilterDomainStep = mergeFilterDomainStep;
exports.generatePolygonFilter = generatePolygonFilter;
exports.filterDatasetCPU = filterDatasetCPU;
exports.getFilterIdInFeature = exports.featureToFilterValue = exports.getPolygonFilterFunctor = exports.LAYER_FILTERS = exports.FILTER_ID_LENGTH = exports.DEFAULT_FILTER_STRUCTURE = exports.FILTER_COMPONENTS = exports.LIMITED_FILTER_EFFECT_PROPS = exports.FILTER_UPDATER_PROPS = exports.PLOT_TYPES = exports.enlargedHistogramBins = exports.histogramBins = exports.TimestampStepMap = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _d3Array = require("d3-array");

var _keymirror = _interopRequireDefault(require("keymirror"));

var _lodash = _interopRequireDefault(require("lodash.get"));

var _booleanWithin = _interopRequireDefault(require("@turf/boolean-within"));

var _helpers = require("@turf/helpers");

var _decimal = require("decimal.js");

var _defaultSettings = require("../constants/default-settings");

var _dataUtils = require("./data-utils");

var ScaleUtils = _interopRequireWildcard(require("./data-scale-utils"));

var _constants = require("../constants");

var _utils = require("./utils");

var _gpuFilterUtils = require("./gpu-filter-utils");

var _FILTER_TYPES$timeRan, _FILTER_TYPES$range, _SupportedPlotType, _FILTER_COMPONENTS;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// TYPE

/** @typedef {import('../reducers/vis-state-updaters').FilterRecord} FilterRecord */

/** @typedef {import('./filter-utils').FilterResult} FilterResult */
var TimestampStepMap = [{
  max: 1,
  step: 0.05
}, {
  max: 10,
  step: 0.1
}, {
  max: 100,
  step: 1
}, {
  max: 500,
  step: 5
}, {
  max: 1000,
  step: 10
}, {
  max: 5000,
  step: 50
}, {
  max: Number.POSITIVE_INFINITY,
  step: 1000
}];
exports.TimestampStepMap = TimestampStepMap;
var histogramBins = 30;
exports.histogramBins = histogramBins;
var enlargedHistogramBins = 100;
exports.enlargedHistogramBins = enlargedHistogramBins;
var durationSecond = 1000;
var durationMinute = durationSecond * 60;
var durationHour = durationMinute * 60;
var durationDay = durationHour * 24;
var durationWeek = durationDay * 7;
var durationYear = durationDay * 365;
var PLOT_TYPES = (0, _keymirror["default"])({
  histogram: null,
  lineChart: null
});
exports.PLOT_TYPES = PLOT_TYPES;
var FILTER_UPDATER_PROPS = (0, _keymirror["default"])({
  dataId: null,
  name: null,
  layerId: null
});
exports.FILTER_UPDATER_PROPS = FILTER_UPDATER_PROPS;
var LIMITED_FILTER_EFFECT_PROPS = (0, _keymirror["default"])((0, _defineProperty2["default"])({}, FILTER_UPDATER_PROPS.name, null));
/**
 * Max number of filter value buffers that deck.gl provides
 */

exports.LIMITED_FILTER_EFFECT_PROPS = LIMITED_FILTER_EFFECT_PROPS;
var SupportedPlotType = (_SupportedPlotType = {}, (0, _defineProperty2["default"])(_SupportedPlotType, _defaultSettings.FILTER_TYPES.timeRange, (_FILTER_TYPES$timeRan = {
  "default": 'histogram'
}, (0, _defineProperty2["default"])(_FILTER_TYPES$timeRan, _defaultSettings.ALL_FIELD_TYPES.integer, 'lineChart'), (0, _defineProperty2["default"])(_FILTER_TYPES$timeRan, _defaultSettings.ALL_FIELD_TYPES.real, 'lineChart'), _FILTER_TYPES$timeRan)), (0, _defineProperty2["default"])(_SupportedPlotType, _defaultSettings.FILTER_TYPES.range, (_FILTER_TYPES$range = {
  "default": 'histogram'
}, (0, _defineProperty2["default"])(_FILTER_TYPES$range, _defaultSettings.ALL_FIELD_TYPES.integer, 'lineChart'), (0, _defineProperty2["default"])(_FILTER_TYPES$range, _defaultSettings.ALL_FIELD_TYPES.real, 'lineChart'), _FILTER_TYPES$range)), _SupportedPlotType);
var FILTER_COMPONENTS = (_FILTER_COMPONENTS = {}, (0, _defineProperty2["default"])(_FILTER_COMPONENTS, _defaultSettings.FILTER_TYPES.select, 'SingleSelectFilter'), (0, _defineProperty2["default"])(_FILTER_COMPONENTS, _defaultSettings.FILTER_TYPES.multiSelect, 'MultiSelectFilter'), (0, _defineProperty2["default"])(_FILTER_COMPONENTS, _defaultSettings.FILTER_TYPES.timeRange, 'TimeRangeFilter'), (0, _defineProperty2["default"])(_FILTER_COMPONENTS, _defaultSettings.FILTER_TYPES.range, 'RangeFilter'), (0, _defineProperty2["default"])(_FILTER_COMPONENTS, _defaultSettings.FILTER_TYPES.polygon, 'PolygonFilter'), _FILTER_COMPONENTS);
exports.FILTER_COMPONENTS = FILTER_COMPONENTS;
var DEFAULT_FILTER_STRUCTURE = {
  dataId: [],
  // [string]
  freeze: false,
  id: null,
  // time range filter specific
  fixedDomain: false,
  enlarged: false,
  isAnimating: false,
  speed: 1,
  // field specific
  name: [],
  // string
  type: null,
  fieldIdx: [],
  // [integer]
  domain: null,
  value: null,
  // plot
  plotType: PLOT_TYPES.histogram,
  yAxis: null,
  interval: null,
  // mode
  gpu: false
};
exports.DEFAULT_FILTER_STRUCTURE = DEFAULT_FILTER_STRUCTURE;
var FILTER_ID_LENGTH = 4;
exports.FILTER_ID_LENGTH = FILTER_ID_LENGTH;
var LAYER_FILTERS = [_defaultSettings.FILTER_TYPES.polygon];
/**
 * Generates a filter with a dataset id as dataId
 * @type {typeof import('./filter-utils').getDefaultFilter}
 */

exports.LAYER_FILTERS = LAYER_FILTERS;

function getDefaultFilter(dataId) {
  return _objectSpread(_objectSpread({}, DEFAULT_FILTER_STRUCTURE), {}, {
    // store it as dataId and it could be one or many
    dataId: (0, _utils.toArray)(dataId),
    id: (0, _utils.generateHashId)(FILTER_ID_LENGTH)
  });
}
/**
 * Check if a filter is valid based on the given dataId
 * @param  filter to validate
 * @param  datasetId id to validate filter against
 * @return true if a filter is valid, false otherwise
 * @type {typeof import('./filter-utils').shouldApplyFilter}
 */


function shouldApplyFilter(filter, datasetId) {
  var dataIds = (0, _utils.toArray)(filter.dataId);
  return dataIds.includes(datasetId) && filter.value !== null;
}
/**
 * Validates and modifies polygon filter structure
 * @param dataset
 * @param filter
 * @param layers
 * @return - {filter, dataset}
 * @type {typeof import('./filter-utils').validatePolygonFilter}
 */


function validatePolygonFilter(dataset, filter, layers) {
  var failed = {
    dataset: dataset,
    filter: null
  };
  var value = filter.value,
      layerId = filter.layerId,
      type = filter.type,
      dataId = filter.dataId;

  if (!layerId || !isValidFilterValue(type, value)) {
    return failed;
  }

  var isValidDataset = dataId.includes(dataset.id);

  if (!isValidDataset) {
    return failed;
  }

  var layer = layers.find(function (l) {
    return layerId.includes(l.id);
  });

  if (!layer) {
    return failed;
  }

  return {
    filter: _objectSpread(_objectSpread({}, filter), {}, {
      freeze: true,
      fieldIdx: []
    }),
    dataset: dataset
  };
}
/**
 * Custom filter validators
 */


var filterValidators = (0, _defineProperty2["default"])({}, _defaultSettings.FILTER_TYPES.polygon, validatePolygonFilter);
/**
 * Default validate filter function
 * @param dataset
 * @param filter
 * @return - {filter, dataset}
 * @type {typeof import('./filter-utils').validateFilter}
 */

function validateFilter(dataset, filter) {
  // match filter.dataId
  var failed = {
    dataset: dataset,
    filter: null
  };
  var filterDataId = (0, _utils.toArray)(filter.dataId);
  var filterDatasetIndex = filterDataId.indexOf(dataset.id);

  if (filterDatasetIndex < 0) {
    // the current filter is not mapped against the current dataset
    return failed;
  }

  var initializeFilter = _objectSpread(_objectSpread(_objectSpread({}, getDefaultFilter(filter.dataId)), filter), {}, {
    dataId: filterDataId,
    name: (0, _utils.toArray)(filter.name)
  });

  var fieldName = initializeFilter.name[filterDatasetIndex];

  var _applyFilterFieldName = applyFilterFieldName(initializeFilter, dataset, fieldName, filterDatasetIndex, {
    mergeDomain: true
  }),
      updatedFilter = _applyFilterFieldName.filter,
      updatedDataset = _applyFilterFieldName.dataset;

  if (!updatedFilter) {
    return failed;
  }

  updatedFilter.value = adjustValueToFilterDomain(filter.value, updatedFilter);

  if (updatedFilter.value === null) {
    // cannot adjust saved value to filter
    return failed;
  }

  return {
    filter: validateFilterYAxis(updatedFilter, updatedDataset),
    dataset: updatedDataset
  };
}
/**
 * Validate saved filter config with new data,
 * calculate domain and fieldIdx based new fields and data
 *
 * @param dataset
 * @param filter - filter to be validate
 * @param layers - layers
 * @return validated filter
 * @type {typeof import('./filter-utils').validateFilterWithData}
 */


function validateFilterWithData(dataset, filter, layers) {
  // @ts-ignore
  return filterValidators.hasOwnProperty(filter.type) ? filterValidators[filter.type](dataset, filter, layers) : validateFilter(dataset, filter);
}
/**
 * Validate YAxis
 * @param filter
 * @param dataset
 * @return {*}
 */


function validateFilterYAxis(filter, dataset) {
  // TODO: validate yAxis against other datasets
  var fields = dataset.fields,
      allData = dataset.allData;
  var _filter = filter,
      yAxis = _filter.yAxis; // TODO: validate yAxis against other datasets

  if (yAxis) {
    var matchedAxis = fields.find(function (_ref) {
      var name = _ref.name,
          type = _ref.type;
      return name === yAxis.name && type === yAxis.type;
    });
    filter = matchedAxis ? _objectSpread(_objectSpread({}, filter), {}, {
      yAxis: matchedAxis
    }, getFilterPlot(_objectSpread(_objectSpread({}, filter), {}, {
      yAxis: matchedAxis
    }), allData)) : filter;
  }

  return filter;
}
/**
 * Get default filter prop based on field type
 *
 * @param allData
 * @param field
 * @returns default filter
 * @type {typeof import('./filter-utils').getFilterProps}
 */


function getFilterProps(allData, field) {
  var filterProps = _objectSpread(_objectSpread({}, getFieldDomain(allData, field)), {}, {
    fieldType: field.type
  });

  switch (field.type) {
    case _defaultSettings.ALL_FIELD_TYPES.real:
    case _defaultSettings.ALL_FIELD_TYPES.integer:
      return _objectSpread(_objectSpread({}, filterProps), {}, {
        value: filterProps.domain,
        type: _defaultSettings.FILTER_TYPES.range,
        typeOptions: [_defaultSettings.FILTER_TYPES.range],
        gpu: true
      });

    case _defaultSettings.ALL_FIELD_TYPES["boolean"]:
      return _objectSpread(_objectSpread({}, filterProps), {}, {
        type: _defaultSettings.FILTER_TYPES.select,
        value: true,
        gpu: false
      });

    case _defaultSettings.ALL_FIELD_TYPES.string:
    case _defaultSettings.ALL_FIELD_TYPES.date:
      return _objectSpread(_objectSpread({}, filterProps), {}, {
        type: _defaultSettings.FILTER_TYPES.multiSelect,
        value: [],
        gpu: false
      });

    case _defaultSettings.ALL_FIELD_TYPES.timestamp:
      return _objectSpread(_objectSpread({}, filterProps), {}, {
        type: _defaultSettings.FILTER_TYPES.timeRange,
        enlarged: true,
        fixedDomain: true,
        value: filterProps.domain,
        gpu: true
      });

    default:
      return {};
  }
}
/**
 * Calculate field domain based on field type and data
 *
 * @type {typeof import('./filter-utils').getFieldDomain}
 */


function getFieldDomain(allData, field) {
  var fieldIdx = field.tableFieldIndex - 1;
  var isTime = field.type === _defaultSettings.ALL_FIELD_TYPES.timestamp;

  var valueAccessor = _dataUtils.maybeToDate.bind(null, isTime, fieldIdx, field.format);

  var domain;

  switch (field.type) {
    case _defaultSettings.ALL_FIELD_TYPES.real:
    case _defaultSettings.ALL_FIELD_TYPES.integer:
      // calculate domain and step
      return getNumericFieldDomain(allData, valueAccessor);

    case _defaultSettings.ALL_FIELD_TYPES["boolean"]:
      return {
        domain: [true, false]
      };

    case _defaultSettings.ALL_FIELD_TYPES.string:
    case _defaultSettings.ALL_FIELD_TYPES.date:
      domain = ScaleUtils.getOrdinalDomain(allData, valueAccessor);
      return {
        domain: domain
      };

    case _defaultSettings.ALL_FIELD_TYPES.timestamp:
      return getTimestampFieldDomain(allData, valueAccessor);

    default:
      return {
        domain: ScaleUtils.getOrdinalDomain(allData, valueAccessor)
      };
  }
}

var getPolygonFilterFunctor = function getPolygonFilterFunctor(layer, filter) {
  var getPosition = layer.getPositionAccessor();

  switch (layer.type) {
    case _constants.LAYER_TYPES.point:
    case _constants.LAYER_TYPES.icon:
      return function (data) {
        var pos = getPosition({
          data: data
        });
        return pos.every(Number.isFinite) && isInPolygon(pos, filter.value);
      };

    case _constants.LAYER_TYPES.arc:
    case _constants.LAYER_TYPES.line:
      return function (data) {
        var pos = getPosition({
          data: data
        });
        return pos.every(Number.isFinite) && [[pos[0], pos[1]], [pos[3], pos[4]]].every(function (point) {
          return isInPolygon(point, filter.value);
        });
      };

    default:
      return function () {
        return true;
      };
  }
};
/**
 * @param field dataset Field
 * @param dataId Dataset id
 * @param filter Filter object
 * @param layers list of layers to filter upon
 * @return filterFunction
 * @type {typeof import('./filter-utils').getFilterFunction}
 */


exports.getPolygonFilterFunctor = getPolygonFilterFunctor;

function getFilterFunction(field, dataId, filter, layers) {
  // field could be null in polygon filter
  var valueAccessor = function valueAccessor(data) {
    return field ? data[field.tableFieldIndex - 1] : null;
  };

  var defaultFunc = function defaultFunc(d) {
    return true;
  };

  switch (filter.type) {
    case _defaultSettings.FILTER_TYPES.range:
      return function (data) {
        return isInRange(valueAccessor(data), filter.value);
      };

    case _defaultSettings.FILTER_TYPES.multiSelect:
      return function (data) {
        return filter.value.includes(valueAccessor(data));
      };

    case _defaultSettings.FILTER_TYPES.select:
      return function (data) {
        return valueAccessor(data) === filter.value;
      };

    case _defaultSettings.FILTER_TYPES.timeRange:
      if (!field) {
        return defaultFunc;
      }

      var mappedValue = (0, _lodash["default"])(field, ['filterProps', 'mappedValue']);
      var accessor = Array.isArray(mappedValue) ? function (data, index) {
        return mappedValue[index];
      } : function (data) {
        return (0, _dataUtils.timeToUnixMilli)(valueAccessor(data), field.format);
      };
      return function (data, index) {
        return isInRange(accessor(data, index), filter.value);
      };

    case _defaultSettings.FILTER_TYPES.polygon:
      if (!layers || !layers.length) {
        return defaultFunc;
      } // @ts-ignore


      var layerFilterFunctions = filter.layerId.map(function (id) {
        return layers.find(function (l) {
          return l.id === id;
        });
      }).filter(function (l) {
        return l && l.config.dataId === dataId;
      }).map(function (layer) {
        return getPolygonFilterFunctor(layer, filter);
      });
      return function (data) {
        return layerFilterFunctions.every(function (filterFunc) {
          return filterFunc(data);
        });
      };

    default:
      return defaultFunc;
  }
}

function updateFilterDataId(dataId) {
  return getDefaultFilter(dataId);
}
/**
 * Filter data based on an array of filters
 * @type {typeof import('./filter-utils').filterDataset}
 */


function filterDataset(dataset, filters, layers, opt) {
  var allData = dataset.allData,
      dataId = dataset.id,
      oldFilterRecord = dataset.filterRecord,
      fields = dataset.fields; // if there is no filters

  var filterRecord = getFilterRecord(dataId, filters, opt || {});
  var newDataset = (0, _utils.set)(['filterRecord'], filterRecord, dataset);

  if (!filters.length) {
    return _objectSpread(_objectSpread({}, newDataset), {}, {
      gpuFilter: (0, _gpuFilterUtils.getGpuFilterProps)(filters, dataId, fields),
      filteredIndex: dataset.allIndexes,
      filteredIndexForDomain: dataset.allIndexes
    });
  }

  var changedFilters = diffFilters(filterRecord, oldFilterRecord); // generate 2 sets of filter result
  // filteredIndex used to calculate layer data
  // filteredIndexForDomain used to calculate layer Domain

  var shouldCalDomain = Boolean(changedFilters.dynamicDomain);
  var shouldCalIndex = Boolean(changedFilters.cpu);
  var filterResult = {};

  if (shouldCalDomain || shouldCalIndex) {
    var dynamicDomainFilters = shouldCalDomain ? filterRecord.dynamicDomain : null;
    var cpuFilters = shouldCalIndex ? filterRecord.cpu : null;
    var filterFuncs = filters.reduce(function (acc, filter) {
      var fieldIndex = (0, _gpuFilterUtils.getDatasetFieldIndexForFilter)(dataset.id, filter);
      var field = fieldIndex !== -1 ? fields[fieldIndex] : null;
      return _objectSpread(_objectSpread({}, acc), {}, (0, _defineProperty2["default"])({}, filter.id, getFilterFunction(field, dataset.id, filter, layers)));
    }, {});
    filterResult = filterDataByFilterTypes({
      dynamicDomainFilters: dynamicDomainFilters,
      cpuFilters: cpuFilters,
      filterFuncs: filterFuncs
    }, allData);
  }

  return _objectSpread(_objectSpread(_objectSpread({}, newDataset), filterResult), {}, {
    gpuFilter: (0, _gpuFilterUtils.getGpuFilterProps)(filters, dataId, fields)
  });
}
/**
 * @type {typeof import('./filter-utils').filterDataByFilterTypes}
 */


function filterDataByFilterTypes(_ref2, allData) {
  var dynamicDomainFilters = _ref2.dynamicDomainFilters,
      cpuFilters = _ref2.cpuFilters,
      filterFuncs = _ref2.filterFuncs;

  var result = _objectSpread(_objectSpread({}, dynamicDomainFilters ? {
    filteredIndexForDomain: []
  } : {}), cpuFilters ? {
    filteredIndex: []
  } : {});

  var _loop = function _loop(i) {
    var d = allData[i];
    var matchForDomain = dynamicDomainFilters && dynamicDomainFilters.every(function (filter) {
      return filterFuncs[filter.id](d, i);
    });

    if (matchForDomain) {
      // @ts-ignore
      result.filteredIndexForDomain.push(i);
    }

    var matchForRender = cpuFilters && cpuFilters.every(function (filter) {
      return filterFuncs[filter.id](d, i);
    });

    if (matchForRender) {
      // @ts-ignore
      result.filteredIndex.push(i);
    }
  };

  for (var i = 0; i < allData.length; i++) {
    _loop(i);
  }

  return result;
}
/**
 * Get a record of filters based on domain type and gpu / cpu
 * @type {typeof import('./filter-utils').getFilterRecord}
 */


function getFilterRecord(dataId, filters) {
  var opt = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  /**
   * @type {FilterRecord}
   */
  var filterRecord = {
    dynamicDomain: [],
    fixedDomain: [],
    cpu: [],
    gpu: []
  };
  filters.forEach(function (f) {
    if (isValidFilterValue(f.type, f.value) && (0, _utils.toArray)(f.dataId).includes(dataId)) {
      (f.fixedDomain || opt.ignoreDomain ? filterRecord.fixedDomain : filterRecord.dynamicDomain).push(f);
      (f.gpu && !opt.cpuOnly ? filterRecord.gpu : filterRecord.cpu).push(f);
    }
  });
  return filterRecord;
}
/**
 * Compare filter records to get what has changed
 * @type {typeof import('./filter-utils').diffFilters}
 */


function diffFilters(filterRecord) {
  var oldFilterRecord = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var filterChanged = {};
  Object.entries(filterRecord).forEach(function (_ref3) {
    var _ref4 = (0, _slicedToArray2["default"])(_ref3, 2),
        record = _ref4[0],
        items = _ref4[1];

    items.forEach(function (filter) {
      var oldFilter = (oldFilterRecord[record] || []).find(function (f) {
        return f.id === filter.id;
      });

      if (!oldFilter) {
        // added
        filterChanged = (0, _utils.set)([record, filter.id], 'added', filterChanged);
      } else {
        // check  what has changed
        ['name', 'value', 'dataId'].forEach(function (prop) {
          if (filter[prop] !== oldFilter[prop]) {
            filterChanged = (0, _utils.set)([record, filter.id], "".concat(prop, "_changed"), filterChanged);
          }
        });
      }
    });
    (oldFilterRecord[record] || []).forEach(function (oldFilter) {
      // deleted
      if (!items.find(function (f) {
        return f.id === oldFilter.id;
      })) {
        filterChanged = (0, _utils.set)([record, oldFilter.id], 'deleted', filterChanged);
      }
    });

    if (!filterChanged[record]) {
      filterChanged[record] = null;
    }
  }); // @ts-ignore

  return filterChanged;
}
/**
 * Call by parsing filters from URL
 * Check if value of filter within filter domain, if not adjust it to match
 * filter domain
 *
 * @type {typeof import('./filter-utils').adjustValueToFilterDomain}
 * @returns value - adjusted value to match filter or null to remove filter
 */

/* eslint-disable complexity */


function adjustValueToFilterDomain(value, _ref5) {
  var domain = _ref5.domain,
      type = _ref5.type;

  if (!domain || !type) {
    return false;
  }

  switch (type) {
    case _defaultSettings.FILTER_TYPES.range:
    case _defaultSettings.FILTER_TYPES.timeRange:
      if (!Array.isArray(value) || value.length !== 2) {
        return domain.map(function (d) {
          return d;
        });
      }

      return value.map(function (d, i) {
        return (0, _dataUtils.notNullorUndefined)(d) && isInRange(d, domain) ? d : domain[i];
      });

    case _defaultSettings.FILTER_TYPES.multiSelect:
      if (!Array.isArray(value)) {
        return [];
      }

      var filteredValue = value.filter(function (d) {
        return domain.includes(d);
      });
      return filteredValue.length ? filteredValue : [];

    case _defaultSettings.FILTER_TYPES.select:
      return domain.includes(value) ? value : true;

    default:
      return null;
  }
}
/* eslint-enable complexity */

/**
 * Calculate numeric domain and suitable step
 *
 * @type {typeof import('./filter-utils').getNumericFieldDomain}
 */


function getNumericFieldDomain(data, valueAccessor) {
  var domain = [0, 1];
  var step = 0.1;
  var mappedValue = Array.isArray(data) ? data.map(valueAccessor) : [];

  if (Array.isArray(data) && data.length > 1) {
    domain = ScaleUtils.getLinearDomain(mappedValue);
    var diff = domain[1] - domain[0]; // in case equal domain, [96, 96], which will break quantize scale

    if (!diff) {
      domain[1] = domain[0] + 1;
    }

    step = getNumericStepSize(diff) || step;
    domain[0] = formatNumberByStep(domain[0], step, 'floor');
    domain[1] = formatNumberByStep(domain[1], step, 'ceil');
  } // @ts-ignore


  var _getHistogram = getHistogram(domain, mappedValue),
      histogram = _getHistogram.histogram,
      enlargedHistogram = _getHistogram.enlargedHistogram;

  return {
    domain: domain,
    step: step,
    histogram: histogram,
    enlargedHistogram: enlargedHistogram
  };
}
/**
 * Calculate step size for range and timerange filter
 *
 * @type {typeof import('./filter-utils').getNumericStepSize}
 */


function getNumericStepSize(diff) {
  diff = Math.abs(diff);

  if (diff > 100) {
    return 1;
  } else if (diff > 3) {
    return 0.01;
  } else if (diff > 1) {
    return 0.001;
  } // Try to get at least 1000 steps - and keep the step size below that of
  // the (diff > 1) case.


  var x = diff / 1000; // Find the exponent and truncate to 10 to the power of that exponent

  var exponentialForm = x.toExponential();
  var exponent = parseFloat(exponentialForm.split('e')[1]); // Getting ready for node 12
  // this is why we need decimal.js
  // Math.pow(10, -5) = 0.000009999999999999999
  // the above result shows in browser and node 10
  // node 12 behaves correctly

  return new _decimal.Decimal(10).pow(exponent).toNumber();
}
/**
 * Calculate timestamp domain and suitable step
 *
 * @type {typeof import('./filter-utils').getTimestampFieldDomain}
 */


function getTimestampFieldDomain(data, valueAccessor) {
  // to avoid converting string format time to epoch
  // every time we compare we store a value mapped to int in filter domain
  var mappedValue = Array.isArray(data) ? data.map(valueAccessor) : [];
  var domain = ScaleUtils.getLinearDomain(mappedValue);
  var step = 0.01;
  var diff = domain[1] - domain[0];
  var entry = TimestampStepMap.find(function (f) {
    return f.max >= diff;
  });

  if (entry) {
    step = entry.step;
  }

  var _getHistogram2 = getHistogram(domain, mappedValue),
      histogram = _getHistogram2.histogram,
      enlargedHistogram = _getHistogram2.enlargedHistogram;

  return {
    domain: domain,
    step: step,
    mappedValue: mappedValue,
    histogram: histogram,
    enlargedHistogram: enlargedHistogram
  };
}
/**
 *
 * @type {typeof import('./filter-utils').histogramConstruct}
 */


function histogramConstruct(domain, mappedValue, bins) {
  return (0, _d3Array.histogram)().thresholds((0, _d3Array.ticks)(domain[0], domain[1], bins)).domain(domain)(mappedValue).map(function (bin) {
    return {
      count: bin.length,
      x0: bin.x0,
      x1: bin.x1
    };
  });
}
/**
 * Calculate histogram from domain and array of values
 *
 * @type {typeof import('./filter-utils').getHistogram}
 */


function getHistogram(domain, mappedValue) {
  var histogram = histogramConstruct(domain, mappedValue, histogramBins);
  var enlargedHistogram = histogramConstruct(domain, mappedValue, enlargedHistogramBins);
  return {
    histogram: histogram,
    enlargedHistogram: enlargedHistogram
  };
}
/**
 * round number based on step
 *
 * @param {Number} val
 * @param {Number} step
 * @param {string} bound
 * @returns {Number} rounded number
 */


function formatNumberByStep(val, step, bound) {
  if (bound === 'floor') {
    return Math.floor(val * (1 / step)) / (1 / step);
  }

  return Math.ceil(val * (1 / step)) / (1 / step);
}
/**
 *
 * @type {typeof import('./filter-utils').isInRange}
 */


function isInRange(val, domain) {
  if (!Array.isArray(domain)) {
    return false;
  }

  return val >= domain[0] && val <= domain[1];
}
/**
 * Determines whether a point is within the provided polygon
 *
 * @param point as input search [lat, lng]
 * @param polygon Points must be within these (Multi)Polygon(s)
 * @return {boolean}
 */


function isInPolygon(point, polygon) {
  return (0, _booleanWithin["default"])((0, _helpers.point)(point), polygon);
}

function getTimeWidgetTitleFormatter(domain) {
  if (!Array.isArray(domain)) {
    return null;
  }

  var diff = domain[1] - domain[0];
  return diff > durationYear ? 'MM/DD/YY' : diff > durationDay ? 'MM/DD/YY hh:mma' : 'MM/DD/YY hh:mm:ssa';
}

function getTimeWidgetHintFormatter(domain) {
  if (!Array.isArray(domain)) {
    return null;
  }

  var diff = domain[1] - domain[0];
  return diff > durationYear ? 'MM/DD/YY' : diff > durationWeek ? 'MM/DD' : diff > durationDay ? 'MM/DD hha' : diff > durationHour ? 'hh:mma' : 'hh:mm:ssa';
}
/**
 * Sanity check on filters to prepare for save
 * @type {typeof import('./filter-utils').isValidFilterValue}
 */

/* eslint-disable complexity */


function isValidFilterValue(type, value) {
  if (!type) {
    return false;
  }

  switch (type) {
    case _defaultSettings.FILTER_TYPES.select:
      return value === true || value === false;

    case _defaultSettings.FILTER_TYPES.range:
    case _defaultSettings.FILTER_TYPES.timeRange:
      return Array.isArray(value) && value.every(function (v) {
        return v !== null && !isNaN(v);
      });

    case _defaultSettings.FILTER_TYPES.multiSelect:
      return Array.isArray(value) && Boolean(value.length);

    case _defaultSettings.FILTER_TYPES.input:
      return Boolean(value.length);

    case _defaultSettings.FILTER_TYPES.polygon:
      var coordinates = (0, _lodash["default"])(value, ['geometry', 'coordinates']);
      return Boolean(value && value.id && coordinates);

    default:
      return true;
  }
}
/**
 *
 * @type {typeof import('./filter-utils').getFilterPlot}
 */


function getFilterPlot(filter, allData) {
  if (filter.plotType === PLOT_TYPES.histogram || !filter.yAxis) {
    // histogram should be calculated when create filter
    return {};
  }

  var _filter$mappedValue = filter.mappedValue,
      mappedValue = _filter$mappedValue === void 0 ? [] : _filter$mappedValue;
  var yAxis = filter.yAxis; // return lineChart

  var series = allData.map(function (d, i) {
    return {
      x: mappedValue[i],
      y: d[yAxis.tableFieldIndex - 1]
    };
  }).filter(function (_ref6) {
    var x = _ref6.x,
        y = _ref6.y;
    return Number.isFinite(x) && Number.isFinite(y);
  }).sort(function (a, b) {
    return (0, _d3Array.ascending)(a.x, b.x);
  });
  var yDomain = (0, _d3Array.extent)(series, function (d) {
    return d.y;
  });
  var xDomain = [series[0].x, series[series.length - 1].x];
  return {
    lineChart: {
      series: series,
      yDomain: yDomain,
      xDomain: xDomain
    },
    yAxis: yAxis
  };
}

function getDefaultFilterPlotType(filter) {
  var filterPlotTypes = SupportedPlotType[filter.type];

  if (!filterPlotTypes) {
    return null;
  }

  if (!filter.yAxis) {
    return filterPlotTypes["default"];
  }

  return filterPlotTypes[filter.yAxis.type] || null;
}
/**
 *
 * @param datasetIds list of dataset ids to be filtered
 * @param datasets all datasets
 * @param filters all filters to be applied to datasets
 * @return datasets - new updated datasets
 * @type {typeof import('./filter-utils').applyFiltersToDatasets}
 */


function applyFiltersToDatasets(datasetIds, datasets, filters, layers) {
  var dataIds = (0, _utils.toArray)(datasetIds);
  return dataIds.reduce(function (acc, dataId) {
    var layersToFilter = (layers || []).filter(function (l) {
      return l.config.dataId === dataId;
    });
    var appliedFilters = filters.filter(function (d) {
      return shouldApplyFilter(d, dataId);
    });
    return _objectSpread(_objectSpread({}, acc), {}, (0, _defineProperty2["default"])({}, dataId, filterDataset(datasets[dataId], appliedFilters, layersToFilter, {})));
  }, datasets);
}
/**
 * Applies a new field name value to fielter and update both filter and dataset
 * @param filter - to be applied the new field name on
 * @param dataset - dataset the field belongs to
 * @param fieldName - field.name
 * @param filterDatasetIndex - field.name
 * @param option
 * @return - {filter, datasets}
 * @type {typeof import('./filter-utils').applyFilterFieldName}
 */


function applyFilterFieldName(filter, dataset, fieldName) {
  var filterDatasetIndex = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  var option = arguments.length > 4 ? arguments[4] : undefined;
  // using filterDatasetIndex we can filter only the specified dataset
  var mergeDomain = option && option.hasOwnProperty('mergeDomain') ? option.mergeDomain : false;
  var fields = dataset.fields,
      allData = dataset.allData;
  var fieldIndex = fields.findIndex(function (f) {
    return f.name === fieldName;
  }); // if no field with same name is found, move to the next datasets

  if (fieldIndex === -1) {
    // throw new Error(`fieldIndex not found. Dataset must contain a property with name: ${fieldName}`);
    return {
      filter: null,
      dataset: dataset
    };
  } // TODO: validate field type


  var field = fields[fieldIndex];
  var filterProps = field.hasOwnProperty('filterProps') ? field.filterProps : getFilterProps(allData, field);

  var newFilter = _objectSpread(_objectSpread({}, mergeDomain ? mergeFilterDomainStep(filter, filterProps) : _objectSpread(_objectSpread({}, filter), filterProps)), {}, {
    name: Object.assign((0, _toConsumableArray2["default"])((0, _utils.toArray)(filter.name)), (0, _defineProperty2["default"])({}, filterDatasetIndex, field.name)),
    fieldIdx: Object.assign((0, _toConsumableArray2["default"])((0, _utils.toArray)(filter.fieldIdx)), (0, _defineProperty2["default"])({}, filterDatasetIndex, field.tableFieldIndex - 1)),
    // TODO, since we allow to add multiple fields to a filter we can no longer freeze the filter
    freeze: true
  });

  var fieldWithFilterProps = _objectSpread(_objectSpread({}, field), {}, {
    filterProps: filterProps
  });

  var newFields = Object.assign((0, _toConsumableArray2["default"])(fields), (0, _defineProperty2["default"])({}, fieldIndex, fieldWithFilterProps));
  return {
    filter: newFilter,
    dataset: _objectSpread(_objectSpread({}, dataset), {}, {
      fields: newFields
    })
  };
}
/**
 * Merge one filter with other filter prop domain
 * @type {typeof import('./filter-utils').mergeFilterDomainStep}
 */

/* eslint-disable complexity */


function mergeFilterDomainStep(filter, filterProps) {
  if (!filter) {
    return null;
  }

  if (!filterProps) {
    return filter;
  }

  if (filter.fieldType && filter.fieldType !== filterProps.fieldType || !filterProps.domain) {
    return filter;
  }

  var combinedDomain = !filter.domain ? filterProps.domain : [].concat((0, _toConsumableArray2["default"])(filter.domain || []), (0, _toConsumableArray2["default"])(filterProps.domain || [])).sort(function (a, b) {
    return a - b;
  });

  var newFilter = _objectSpread(_objectSpread(_objectSpread({}, filter), filterProps), {}, {
    domain: [combinedDomain[0], combinedDomain[combinedDomain.length - 1]]
  });

  switch (filterProps.fieldType) {
    case _defaultSettings.ALL_FIELD_TYPES.string:
    case _defaultSettings.ALL_FIELD_TYPES.date:
      return _objectSpread(_objectSpread({}, newFilter), {}, {
        domain: (0, _dataUtils.unique)(combinedDomain).sort()
      });

    case _defaultSettings.ALL_FIELD_TYPES.timestamp:
      // @ts-ignore
      var step = filter.step < filterProps.step ? filter.step : filterProps.step;
      return _objectSpread(_objectSpread({}, newFilter), {}, {
        step: step
      });

    case _defaultSettings.ALL_FIELD_TYPES.real:
    case _defaultSettings.ALL_FIELD_TYPES.integer:
    default:
      return newFilter;
  }
}
/* eslint-enable complexity */

/**
 * Generates polygon filter
 * @type {typeof import('./filter-utils').featureToFilterValue}
 */


var featureToFilterValue = function featureToFilterValue(feature, filterId) {
  var properties = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  return _objectSpread(_objectSpread({}, feature), {}, {
    id: feature.id,
    properties: _objectSpread(_objectSpread(_objectSpread({}, feature.properties), properties), {}, {
      filterId: filterId
    })
  });
};
/**
 * @type {typeof import('./filter-utils').getFilterIdInFeature}
 */


exports.featureToFilterValue = featureToFilterValue;

var getFilterIdInFeature = function getFilterIdInFeature(f) {
  return (0, _lodash["default"])(f, ['properties', 'filterId']);
};
/**
 * Generates polygon filter
 * @type {typeof import('./filter-utils').generatePolygonFilter}
 */


exports.getFilterIdInFeature = getFilterIdInFeature;

function generatePolygonFilter(layers, feature) {
  var dataId = layers.map(function (l) {
    return l.config.dataId;
  }).filter(function (d) {
    return d;
  });
  var layerId = layers.map(function (l) {
    return l.id;
  });
  var name = layers.map(function (l) {
    return l.config.label;
  }); // @ts-ignore

  var filter = getDefaultFilter(dataId);
  return _objectSpread(_objectSpread({}, filter), {}, {
    fixedDomain: true,
    type: _defaultSettings.FILTER_TYPES.polygon,
    name: name,
    layerId: layerId,
    value: featureToFilterValue(feature, filter.id, {
      isVisible: true
    })
  });
}
/**
 * Run filter entirely on CPU
 * @type {typeof import('./filter-utils').filterDatasetCPU}
 */


function filterDatasetCPU(state, dataId) {
  var datasetFilters = state.filters.filter(function (f) {
    return f.dataId.includes(dataId);
  });
  var selectedDataset = state.datasets[dataId];

  if (!selectedDataset) {
    return state;
  }

  var opt = {
    cpuOnly: true,
    ignoreDomain: true
  };

  if (!datasetFilters.length) {
    // no filter
    var _filtered = _objectSpread(_objectSpread({}, selectedDataset), {}, {
      filteredIdxCPU: selectedDataset.allIndexes,
      filterRecordCPU: getFilterRecord(dataId, state.filters, opt)
    });

    return (0, _utils.set)(['datasets', dataId], _filtered, state);
  } // no gpu filter


  if (!datasetFilters.find(function (f) {
    return f.gpu;
  })) {
    var _filtered2 = _objectSpread(_objectSpread({}, selectedDataset), {}, {
      filteredIdxCPU: selectedDataset.filteredIndex,
      filterRecordCPU: getFilterRecord(dataId, state.filters, opt)
    });

    return (0, _utils.set)(['datasets', dataId], _filtered2, state);
  } // make a copy for cpu filtering


  var copied = _objectSpread(_objectSpread({}, selectedDataset), {}, {
    filterRecord: selectedDataset.filterRecordCPU,
    filteredIndex: selectedDataset.filteredIdxCPU || []
  });

  var filtered = filterDataset(copied, state.filters, state.layers, opt);

  var cpuFilteredDataset = _objectSpread(_objectSpread({}, selectedDataset), {}, {
    filteredIdxCPU: filtered.filteredIndex,
    filterRecordCPU: filtered.filterRecord
  });

  return (0, _utils.set)(['datasets', dataId], cpuFilteredDataset, state);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy9maWx0ZXItdXRpbHMuanMiXSwibmFtZXMiOlsiVGltZXN0YW1wU3RlcE1hcCIsIm1heCIsInN0ZXAiLCJOdW1iZXIiLCJQT1NJVElWRV9JTkZJTklUWSIsImhpc3RvZ3JhbUJpbnMiLCJlbmxhcmdlZEhpc3RvZ3JhbUJpbnMiLCJkdXJhdGlvblNlY29uZCIsImR1cmF0aW9uTWludXRlIiwiZHVyYXRpb25Ib3VyIiwiZHVyYXRpb25EYXkiLCJkdXJhdGlvbldlZWsiLCJkdXJhdGlvblllYXIiLCJQTE9UX1RZUEVTIiwiaGlzdG9ncmFtIiwibGluZUNoYXJ0IiwiRklMVEVSX1VQREFURVJfUFJPUFMiLCJkYXRhSWQiLCJuYW1lIiwibGF5ZXJJZCIsIkxJTUlURURfRklMVEVSX0VGRkVDVF9QUk9QUyIsIlN1cHBvcnRlZFBsb3RUeXBlIiwiRklMVEVSX1RZUEVTIiwidGltZVJhbmdlIiwiQUxMX0ZJRUxEX1RZUEVTIiwiaW50ZWdlciIsInJlYWwiLCJyYW5nZSIsIkZJTFRFUl9DT01QT05FTlRTIiwic2VsZWN0IiwibXVsdGlTZWxlY3QiLCJwb2x5Z29uIiwiREVGQVVMVF9GSUxURVJfU1RSVUNUVVJFIiwiZnJlZXplIiwiaWQiLCJmaXhlZERvbWFpbiIsImVubGFyZ2VkIiwiaXNBbmltYXRpbmciLCJzcGVlZCIsInR5cGUiLCJmaWVsZElkeCIsImRvbWFpbiIsInZhbHVlIiwicGxvdFR5cGUiLCJ5QXhpcyIsImludGVydmFsIiwiZ3B1IiwiRklMVEVSX0lEX0xFTkdUSCIsIkxBWUVSX0ZJTFRFUlMiLCJnZXREZWZhdWx0RmlsdGVyIiwic2hvdWxkQXBwbHlGaWx0ZXIiLCJmaWx0ZXIiLCJkYXRhc2V0SWQiLCJkYXRhSWRzIiwiaW5jbHVkZXMiLCJ2YWxpZGF0ZVBvbHlnb25GaWx0ZXIiLCJkYXRhc2V0IiwibGF5ZXJzIiwiZmFpbGVkIiwiaXNWYWxpZEZpbHRlclZhbHVlIiwiaXNWYWxpZERhdGFzZXQiLCJsYXllciIsImZpbmQiLCJsIiwiZmlsdGVyVmFsaWRhdG9ycyIsInZhbGlkYXRlRmlsdGVyIiwiZmlsdGVyRGF0YUlkIiwiZmlsdGVyRGF0YXNldEluZGV4IiwiaW5kZXhPZiIsImluaXRpYWxpemVGaWx0ZXIiLCJmaWVsZE5hbWUiLCJhcHBseUZpbHRlckZpZWxkTmFtZSIsIm1lcmdlRG9tYWluIiwidXBkYXRlZEZpbHRlciIsInVwZGF0ZWREYXRhc2V0IiwiYWRqdXN0VmFsdWVUb0ZpbHRlckRvbWFpbiIsInZhbGlkYXRlRmlsdGVyWUF4aXMiLCJ2YWxpZGF0ZUZpbHRlcldpdGhEYXRhIiwiaGFzT3duUHJvcGVydHkiLCJmaWVsZHMiLCJhbGxEYXRhIiwibWF0Y2hlZEF4aXMiLCJnZXRGaWx0ZXJQbG90IiwiZ2V0RmlsdGVyUHJvcHMiLCJmaWVsZCIsImZpbHRlclByb3BzIiwiZ2V0RmllbGREb21haW4iLCJmaWVsZFR5cGUiLCJ0eXBlT3B0aW9ucyIsInN0cmluZyIsImRhdGUiLCJ0aW1lc3RhbXAiLCJ0YWJsZUZpZWxkSW5kZXgiLCJpc1RpbWUiLCJ2YWx1ZUFjY2Vzc29yIiwibWF5YmVUb0RhdGUiLCJiaW5kIiwiZm9ybWF0IiwiZ2V0TnVtZXJpY0ZpZWxkRG9tYWluIiwiU2NhbGVVdGlscyIsImdldE9yZGluYWxEb21haW4iLCJnZXRUaW1lc3RhbXBGaWVsZERvbWFpbiIsImdldFBvbHlnb25GaWx0ZXJGdW5jdG9yIiwiZ2V0UG9zaXRpb24iLCJnZXRQb3NpdGlvbkFjY2Vzc29yIiwiTEFZRVJfVFlQRVMiLCJwb2ludCIsImljb24iLCJkYXRhIiwicG9zIiwiZXZlcnkiLCJpc0Zpbml0ZSIsImlzSW5Qb2x5Z29uIiwiYXJjIiwibGluZSIsImdldEZpbHRlckZ1bmN0aW9uIiwiZGVmYXVsdEZ1bmMiLCJkIiwiaXNJblJhbmdlIiwibWFwcGVkVmFsdWUiLCJhY2Nlc3NvciIsIkFycmF5IiwiaXNBcnJheSIsImluZGV4IiwibGVuZ3RoIiwibGF5ZXJGaWx0ZXJGdW5jdGlvbnMiLCJtYXAiLCJjb25maWciLCJmaWx0ZXJGdW5jIiwidXBkYXRlRmlsdGVyRGF0YUlkIiwiZmlsdGVyRGF0YXNldCIsImZpbHRlcnMiLCJvcHQiLCJvbGRGaWx0ZXJSZWNvcmQiLCJmaWx0ZXJSZWNvcmQiLCJnZXRGaWx0ZXJSZWNvcmQiLCJuZXdEYXRhc2V0IiwiZ3B1RmlsdGVyIiwiZmlsdGVyZWRJbmRleCIsImFsbEluZGV4ZXMiLCJmaWx0ZXJlZEluZGV4Rm9yRG9tYWluIiwiY2hhbmdlZEZpbHRlcnMiLCJkaWZmRmlsdGVycyIsInNob3VsZENhbERvbWFpbiIsIkJvb2xlYW4iLCJkeW5hbWljRG9tYWluIiwic2hvdWxkQ2FsSW5kZXgiLCJjcHUiLCJmaWx0ZXJSZXN1bHQiLCJkeW5hbWljRG9tYWluRmlsdGVycyIsImNwdUZpbHRlcnMiLCJmaWx0ZXJGdW5jcyIsInJlZHVjZSIsImFjYyIsImZpZWxkSW5kZXgiLCJmaWx0ZXJEYXRhQnlGaWx0ZXJUeXBlcyIsInJlc3VsdCIsImkiLCJtYXRjaEZvckRvbWFpbiIsInB1c2giLCJtYXRjaEZvclJlbmRlciIsImZvckVhY2giLCJmIiwiaWdub3JlRG9tYWluIiwiY3B1T25seSIsImZpbHRlckNoYW5nZWQiLCJPYmplY3QiLCJlbnRyaWVzIiwicmVjb3JkIiwiaXRlbXMiLCJvbGRGaWx0ZXIiLCJwcm9wIiwiZmlsdGVyZWRWYWx1ZSIsImdldExpbmVhckRvbWFpbiIsImRpZmYiLCJnZXROdW1lcmljU3RlcFNpemUiLCJmb3JtYXROdW1iZXJCeVN0ZXAiLCJnZXRIaXN0b2dyYW0iLCJlbmxhcmdlZEhpc3RvZ3JhbSIsIk1hdGgiLCJhYnMiLCJ4IiwiZXhwb25lbnRpYWxGb3JtIiwidG9FeHBvbmVudGlhbCIsImV4cG9uZW50IiwicGFyc2VGbG9hdCIsInNwbGl0IiwiRGVjaW1hbCIsInBvdyIsInRvTnVtYmVyIiwiZW50cnkiLCJoaXN0b2dyYW1Db25zdHJ1Y3QiLCJiaW5zIiwidGhyZXNob2xkcyIsImJpbiIsImNvdW50IiwieDAiLCJ4MSIsInZhbCIsImJvdW5kIiwiZmxvb3IiLCJjZWlsIiwiZ2V0VGltZVdpZGdldFRpdGxlRm9ybWF0dGVyIiwiZ2V0VGltZVdpZGdldEhpbnRGb3JtYXR0ZXIiLCJ2IiwiaXNOYU4iLCJpbnB1dCIsImNvb3JkaW5hdGVzIiwic2VyaWVzIiwieSIsInNvcnQiLCJhIiwiYiIsInlEb21haW4iLCJ4RG9tYWluIiwiZ2V0RGVmYXVsdEZpbHRlclBsb3RUeXBlIiwiZmlsdGVyUGxvdFR5cGVzIiwiYXBwbHlGaWx0ZXJzVG9EYXRhc2V0cyIsImRhdGFzZXRJZHMiLCJkYXRhc2V0cyIsImxheWVyc1RvRmlsdGVyIiwiYXBwbGllZEZpbHRlcnMiLCJvcHRpb24iLCJmaW5kSW5kZXgiLCJuZXdGaWx0ZXIiLCJtZXJnZUZpbHRlckRvbWFpblN0ZXAiLCJhc3NpZ24iLCJmaWVsZFdpdGhGaWx0ZXJQcm9wcyIsIm5ld0ZpZWxkcyIsImNvbWJpbmVkRG9tYWluIiwiZmVhdHVyZVRvRmlsdGVyVmFsdWUiLCJmZWF0dXJlIiwiZmlsdGVySWQiLCJwcm9wZXJ0aWVzIiwiZ2V0RmlsdGVySWRJbkZlYXR1cmUiLCJnZW5lcmF0ZVBvbHlnb25GaWx0ZXIiLCJsYWJlbCIsImlzVmlzaWJsZSIsImZpbHRlckRhdGFzZXRDUFUiLCJzdGF0ZSIsImRhdGFzZXRGaWx0ZXJzIiwic2VsZWN0ZWREYXRhc2V0IiwiZmlsdGVyZWQiLCJmaWx0ZXJlZElkeENQVSIsImZpbHRlclJlY29yZENQVSIsImNvcGllZCIsImNwdUZpbHRlcmVkRGF0YXNldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7QUFFQTs7QUFDQTs7QUFDQTtBQUVPLElBQU1BLGdCQUFnQixHQUFHLENBQzlCO0FBQUNDLEVBQUFBLEdBQUcsRUFBRSxDQUFOO0FBQVNDLEVBQUFBLElBQUksRUFBRTtBQUFmLENBRDhCLEVBRTlC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QUosRUFBMEJpTyxVQUExQixFQUFvQ0gsS0FBcEMsQ0FBUDtBQUNELEdBaEM2QyxDQWtDOUM7OztBQUNBLE1BQU1NLE1BQU0sbUNBQ1BKLGVBRE87QUFFVjNHLElBQUFBLFlBQVksRUFBRTJHLGVBQWUsQ0FBQ0csZUFGcEI7QUFHVjFHLElBQUFBLGFBQWEsRUFBRXVHLGVBQWUsQ0FBQ0UsY0FBaEIsSUFBa0M7QUFIdkMsSUFBWjs7QUFNQSxNQUFNRCxRQUFRLEdBQUdoSCxhQUFhLENBQUNtSCxNQUFELEVBQVNOLEtBQUssQ0FBQzVHLE9BQWYsRUFBd0I0RyxLQUFLLENBQUN0TCxNQUE5QixFQUFzQzJFLEdBQXRDLENBQTlCOztBQUVBLE1BQU1rSCxrQkFBa0IsbUNBQ25CTCxlQURtQjtBQUV0QkUsSUFBQUEsY0FBYyxFQUFFRCxRQUFRLENBQUN4RyxhQUZIO0FBR3RCMEcsSUFBQUEsZUFBZSxFQUFFRixRQUFRLENBQUM1RztBQUhKLElBQXhCOztBQU1BLFNBQU8sZ0JBQUksQ0FBQyxVQUFELEVBQWFySCxNQUFiLENBQUosRUFBMEJxTyxrQkFBMUIsRUFBOENQLEtBQTlDLENBQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMCBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCB7YXNjZW5kaW5nLCBleHRlbnQsIGhpc3RvZ3JhbSBhcyBkM0hpc3RvZ3JhbSwgdGlja3N9IGZyb20gJ2QzLWFycmF5JztcclxuaW1wb3J0IGtleU1pcnJvciBmcm9tICdrZXltaXJyb3InO1xyXG5pbXBvcnQgZ2V0IGZyb20gJ2xvZGFzaC5nZXQnO1xyXG5pbXBvcnQgYm9vbGVhbldpdGhpbiBmcm9tICdAdHVyZi9ib29sZWFuLXdpdGhpbic7XHJcbmltcG9ydCB7cG9pbnQgYXMgdHVyZlBvaW50fSBmcm9tICdAdHVyZi9oZWxwZXJzJztcclxuaW1wb3J0IHtEZWNpbWFsfSBmcm9tICdkZWNpbWFsLmpzJztcclxuaW1wb3J0IHtBTExfRklFTERfVFlQRVMsIEZJTFRFUl9UWVBFU30gZnJvbSAnY29uc3RhbnRzL2RlZmF1bHQtc2V0dGluZ3MnO1xyXG5pbXBvcnQge21heWJlVG9EYXRlLCBub3ROdWxsb3JVbmRlZmluZWQsIHVuaXF1ZSwgdGltZVRvVW5peE1pbGxpfSBmcm9tICcuL2RhdGEtdXRpbHMnO1xyXG5pbXBvcnQgKiBhcyBTY2FsZVV0aWxzIGZyb20gJy4vZGF0YS1zY2FsZS11dGlscyc7XHJcbmltcG9ydCB7TEFZRVJfVFlQRVN9IGZyb20gJy4uL2NvbnN0YW50cyc7XHJcbmltcG9ydCB7Z2VuZXJhdGVIYXNoSWQsIHNldCwgdG9BcnJheX0gZnJvbSAnLi91dGlscyc7XHJcbmltcG9ydCB7Z2V0R3B1RmlsdGVyUHJvcHMsIGdldERhdGFzZXRGaWVsZEluZGV4Rm9yRmlsdGVyfSBmcm9tICcuL2dwdS1maWx0ZXItdXRpbHMnO1xyXG5cclxuLy8gVFlQRVxyXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi4vcmVkdWNlcnMvdmlzLXN0YXRlLXVwZGF0ZXJzJykuRmlsdGVyUmVjb3JkfSBGaWx0ZXJSZWNvcmQgKi9cclxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4vZmlsdGVyLXV0aWxzJykuRmlsdGVyUmVzdWx0fSBGaWx0ZXJSZXN1bHQgKi9cclxuXHJcbmV4cG9ydCBjb25zdCBUaW1lc3RhbXBTdGVwTWFwID0gW1xyXG4gIHttYXg6IDEsIHN0ZXA6IDAuMDV9LFxyXG4gIHttYXg6IDEwLCBzdGVwOiAwLjF9LFxyXG4gIHttYXg6IDEwMCwgc3RlcDogMX0sXHJcbiAge21heDogNTAwLCBzdGVwOiA1fSxcclxuICB7bWF4OiAxMDAwLCBzdGVwOiAxMH0sXHJcbiAge21heDogNTAwMCwgc3RlcDogNTB9LFxyXG4gIHttYXg6IE51bWJlci5QT1NJVElWRV9JTkZJTklUWSwgc3RlcDogMTAwMH1cclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBoaXN0b2dyYW1CaW5zID0gMzA7XHJcbmV4cG9ydCBjb25zdCBlbmxhcmdlZEhpc3RvZ3JhbUJpbnMgPSAxMDA7XHJcblxyXG5jb25zdCBkdXJhdGlvblNlY29uZCA9IDEwMDA7XHJcbmNvbnN0IGR1cmF0aW9uTWludXRlID0gZHVyYXRpb25TZWNvbmQgKiA2MDtcclxuY29uc3QgZHVyYXRpb25Ib3VyID0gZHVyYXRpb25NaW51dGUgKiA2MDtcclxuY29uc3QgZHVyYXRpb25EYXkgPSBkdXJhdGlvbkhvdXIgKiAyNDtcclxuY29uc3QgZHVyYXRpb25XZWVrID0gZHVyYXRpb25EYXkgKiA3O1xyXG5jb25zdCBkdXJhdGlvblllYXIgPSBkdXJhdGlvbkRheSAqIDM2NTtcclxuXHJcbmV4cG9ydCBjb25zdCBQTE9UX1RZUEVTID0ga2V5TWlycm9yKHtcclxuICBoaXN0b2dyYW06IG51bGwsXHJcbiAgbGluZUNoYXJ0OiBudWxsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IEZJTFRFUl9VUERBVEVSX1BST1BTID0ga2V5TWlycm9yKHtcclxuICBkYXRhSWQ6IG51bGwsXHJcbiAgbmFtZTogbnVsbCxcclxuICBsYXllcklkOiBudWxsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IExJTUlURURfRklMVEVSX0VGRkVDVF9QUk9QUyA9IGtleU1pcnJvcih7XHJcbiAgW0ZJTFRFUl9VUERBVEVSX1BST1BTLm5hbWVdOiBudWxsXHJcbn0pO1xyXG4vKipcclxuICogTWF4IG51bWJlciBvZiBmaWx0ZXIgdmFsdWUgYnVmZmVycyB0aGF0IGRlY2suZ2wgcHJvdmlkZXNcclxuICovXHJcblxyXG5jb25zdCBTdXBwb3J0ZWRQbG90VHlwZSA9IHtcclxuICBbRklMVEVSX1RZUEVTLnRpbWVSYW5nZV06IHtcclxuICAgIGRlZmF1bHQ6ICdoaXN0b2dyYW0nLFxyXG4gICAgW0FMTF9GSUVMRF9UWVBFUy5pbnRlZ2VyXTogJ2xpbmVDaGFydCcsXHJcbiAgICBbQUxMX0ZJRUxEX1RZUEVTLnJlYWxdOiAnbGluZUNoYXJ0J1xyXG4gIH0sXHJcbiAgW0ZJTFRFUl9UWVBFUy5yYW5nZV06IHtcclxuICAgIGRlZmF1bHQ6ICdoaXN0b2dyYW0nLFxyXG4gICAgW0FMTF9GSUVMRF9UWVBFUy5pbnRlZ2VyXTogJ2xpbmVDaGFydCcsXHJcbiAgICBbQUxMX0ZJRUxEX1RZUEVTLnJlYWxdOiAnbGluZUNoYXJ0J1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBGSUxURVJfQ09NUE9ORU5UUyA9IHtcclxuICBbRklMVEVSX1RZUEVTLnNlbGVjdF06ICdTaW5nbGVTZWxlY3RGaWx0ZXInLFxyXG4gIFtGSUxURVJfVFlQRVMubXVsdGlTZWxlY3RdOiAnTXVsdGlTZWxlY3RGaWx0ZXInLFxyXG4gIFtGSUxURVJfVFlQRVMudGltZVJhbmdlXTogJ1RpbWVSYW5nZUZpbHRlcicsXHJcbiAgW0ZJTFRFUl9UWVBFUy5yYW5nZV06ICdSYW5nZUZpbHRlcicsXHJcbiAgW0ZJTFRFUl9UWVBFUy5wb2x5Z29uXTogJ1BvbHlnb25GaWx0ZXInXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgREVGQVVMVF9GSUxURVJfU1RSVUNUVVJFID0ge1xyXG4gIGRhdGFJZDogW10sIC8vIFtzdHJpbmddXHJcbiAgZnJlZXplOiBmYWxzZSxcclxuICBpZDogbnVsbCxcclxuXHJcbiAgLy8gdGltZSByYW5nZSBmaWx0ZXIgc3BlY2lmaWNcclxuICBmaXhlZERvbWFpbjogZmFsc2UsXHJcbiAgZW5sYXJnZWQ6IGZhbHNlLFxyXG4gIGlzQW5pbWF0aW5nOiBmYWxzZSxcclxuICBzcGVlZDogMSxcclxuXHJcbiAgLy8gZmllbGQgc3BlY2lmaWNcclxuICBuYW1lOiBbXSwgLy8gc3RyaW5nXHJcbiAgdHlwZTogbnVsbCxcclxuICBmaWVsZElkeDogW10sIC8vIFtpbnRlZ2VyXVxyXG4gIGRvbWFpbjogbnVsbCxcclxuICB2YWx1ZTogbnVsbCxcclxuXHJcbiAgLy8gcGxvdFxyXG4gIHBsb3RUeXBlOiBQTE9UX1RZUEVTLmhpc3RvZ3JhbSxcclxuICB5QXhpczogbnVsbCxcclxuICBpbnRlcnZhbDogbnVsbCxcclxuXHJcbiAgLy8gbW9kZVxyXG4gIGdwdTogZmFsc2VcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBGSUxURVJfSURfTEVOR1RIID0gNDtcclxuXHJcbmV4cG9ydCBjb25zdCBMQVlFUl9GSUxURVJTID0gW0ZJTFRFUl9UWVBFUy5wb2x5Z29uXTtcclxuXHJcbi8qKlxyXG4gKiBHZW5lcmF0ZXMgYSBmaWx0ZXIgd2l0aCBhIGRhdGFzZXQgaWQgYXMgZGF0YUlkXHJcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL2ZpbHRlci11dGlscycpLmdldERlZmF1bHRGaWx0ZXJ9XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGVmYXVsdEZpbHRlcihkYXRhSWQpIHtcclxuICByZXR1cm4ge1xyXG4gICAgLi4uREVGQVVMVF9GSUxURVJfU1RSVUNUVVJFLFxyXG4gICAgLy8gc3RvcmUgaXQgYXMgZGF0YUlkIGFuZCBpdCBjb3VsZCBiZSBvbmUgb3IgbWFueVxyXG4gICAgZGF0YUlkOiB0b0FycmF5KGRhdGFJZCksXHJcbiAgICBpZDogZ2VuZXJhdGVIYXNoSWQoRklMVEVSX0lEX0xFTkdUSClcclxuICB9O1xyXG59XHJcblxyXG4vKipcclxuICogQ2hlY2sgaWYgYSBmaWx0ZXIgaXMgdmFsaWQgYmFzZWQgb24gdGhlIGdpdmVuIGRhdGFJZFxyXG4gKiBAcGFyYW0gIGZpbHRlciB0byB2YWxpZGF0ZVxyXG4gKiBAcGFyYW0gIGRhdGFzZXRJZCBpZCB0byB2YWxpZGF0ZSBmaWx0ZXIgYWdhaW5zdFxyXG4gKiBAcmV0dXJuIHRydWUgaWYgYSBmaWx0ZXIgaXMgdmFsaWQsIGZhbHNlIG90aGVyd2lzZVxyXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi9maWx0ZXItdXRpbHMnKS5zaG91bGRBcHBseUZpbHRlcn1cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzaG91bGRBcHBseUZpbHRlcihmaWx0ZXIsIGRhdGFzZXRJZCkge1xyXG4gIGNvbnN0IGRhdGFJZHMgPSB0b0FycmF5KGZpbHRlci5kYXRhSWQpO1xyXG4gIHJldHVybiBkYXRhSWRzLmluY2x1ZGVzKGRhdGFzZXRJZCkgJiYgZmlsdGVyLnZhbHVlICE9PSBudWxsO1xyXG59XHJcblxyXG4vKipcclxuICogVmFsaWRhdGVzIGFuZCBtb2RpZmllcyBwb2x5Z29uIGZpbHRlciBzdHJ1Y3R1cmVcclxuICogQHBhcmFtIGRhdGFzZXRcclxuICogQHBhcmFtIGZpbHRlclxyXG4gKiBAcGFyYW0gbGF5ZXJzXHJcbiAqIEByZXR1cm4gLSB7ZmlsdGVyLCBkYXRhc2V0fVxyXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi9maWx0ZXItdXRpbHMnKS52YWxpZGF0ZVBvbHlnb25GaWx0ZXJ9XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVQb2x5Z29uRmlsdGVyKGRhdGFzZXQsIGZpbHRlciwgbGF5ZXJzKSB7XHJcbiAgY29uc3QgZmFpbGVkID0ge2RhdGFzZXQsIGZpbHRlcjogbnVsbH07XHJcbiAgY29uc3Qge3ZhbHVlLCBsYXllcklkLCB0eXBlLCBkYXRhSWR9ID0gZmlsdGVyO1xyXG5cclxuICBpZiAoIWxheWVySWQgfHwgIWlzVmFsaWRGaWx0ZXJWYWx1ZSh0eXBlLCB2YWx1ZSkpIHtcclxuICAgIHJldHVybiBmYWlsZWQ7XHJcbiAgfVxyXG5cclxuICBjb25zdCBpc1ZhbGlkRGF0YXNldCA9IGRhdGFJZC5pbmNsdWRlcyhkYXRhc2V0LmlkKTtcclxuXHJcbiAgaWYgKCFpc1ZhbGlkRGF0YXNldCkge1xyXG4gICAgcmV0dXJuIGZhaWxlZDtcclxuICB9XHJcblxyXG4gIGNvbnN0IGxheWVyID0gbGF5ZXJzLmZpbmQobCA9PiBsYXllcklkLmluY2x1ZGVzKGwuaWQpKTtcclxuXHJcbiAgaWYgKCFsYXllcikge1xyXG4gICAgcmV0dXJuIGZhaWxlZDtcclxuICB9XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBmaWx0ZXI6IHtcclxuICAgICAgLi4uZmlsdGVyLFxyXG4gICAgICBmcmVlemU6IHRydWUsXHJcbiAgICAgIGZpZWxkSWR4OiBbXVxyXG4gICAgfSxcclxuICAgIGRhdGFzZXRcclxuICB9O1xyXG59XHJcblxyXG4vKipcclxuICogQ3VzdG9tIGZpbHRlciB2YWxpZGF0b3JzXHJcbiAqL1xyXG5jb25zdCBmaWx0ZXJWYWxpZGF0b3JzID0ge1xyXG4gIFtGSUxURVJfVFlQRVMucG9seWdvbl06IHZhbGlkYXRlUG9seWdvbkZpbHRlclxyXG59O1xyXG5cclxuLyoqXHJcbiAqIERlZmF1bHQgdmFsaWRhdGUgZmlsdGVyIGZ1bmN0aW9uXHJcbiAqIEBwYXJhbSBkYXRhc2V0XHJcbiAqIEBwYXJhbSBmaWx0ZXJcclxuICogQHJldHVybiAtIHtmaWx0ZXIsIGRhdGFzZXR9XHJcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL2ZpbHRlci11dGlscycpLnZhbGlkYXRlRmlsdGVyfVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlRmlsdGVyKGRhdGFzZXQsIGZpbHRlcikge1xyXG4gIC8vIG1hdGNoIGZpbHRlci5kYXRhSWRcclxuICBjb25zdCBmYWlsZWQgPSB7ZGF0YXNldCwgZmlsdGVyOiBudWxsfTtcclxuICBjb25zdCBmaWx0ZXJEYXRhSWQgPSB0b0FycmF5KGZpbHRlci5kYXRhSWQpO1xyXG5cclxuICBjb25zdCBmaWx0ZXJEYXRhc2V0SW5kZXggPSBmaWx0ZXJEYXRhSWQuaW5kZXhPZihkYXRhc2V0LmlkKTtcclxuICBpZiAoZmlsdGVyRGF0YXNldEluZGV4IDwgMCkge1xyXG4gICAgLy8gdGhlIGN1cnJlbnQgZmlsdGVyIGlzIG5vdCBtYXBwZWQgYWdhaW5zdCB0aGUgY3VycmVudCBkYXRhc2V0XHJcbiAgICByZXR1cm4gZmFpbGVkO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgaW5pdGlhbGl6ZUZpbHRlciA9IHtcclxuICAgIC4uLmdldERlZmF1bHRGaWx0ZXIoZmlsdGVyLmRhdGFJZCksXHJcbiAgICAuLi5maWx0ZXIsXHJcbiAgICBkYXRhSWQ6IGZpbHRlckRhdGFJZCxcclxuICAgIG5hbWU6IHRvQXJyYXkoZmlsdGVyLm5hbWUpXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZmllbGROYW1lID0gaW5pdGlhbGl6ZUZpbHRlci5uYW1lW2ZpbHRlckRhdGFzZXRJbmRleF07XHJcbiAgY29uc3Qge2ZpbHRlcjogdXBkYXRlZEZpbHRlciwgZGF0YXNldDogdXBkYXRlZERhdGFzZXR9ID0gYXBwbHlGaWx0ZXJGaWVsZE5hbWUoXHJcbiAgICBpbml0aWFsaXplRmlsdGVyLFxyXG4gICAgZGF0YXNldCxcclxuICAgIGZpZWxkTmFtZSxcclxuICAgIGZpbHRlckRhdGFzZXRJbmRleCxcclxuICAgIHttZXJnZURvbWFpbjogdHJ1ZX1cclxuICApO1xyXG5cclxuICBpZiAoIXVwZGF0ZWRGaWx0ZXIpIHtcclxuICAgIHJldHVybiBmYWlsZWQ7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVkRmlsdGVyLnZhbHVlID0gYWRqdXN0VmFsdWVUb0ZpbHRlckRvbWFpbihmaWx0ZXIudmFsdWUsIHVwZGF0ZWRGaWx0ZXIpO1xyXG4gIGlmICh1cGRhdGVkRmlsdGVyLnZhbHVlID09PSBudWxsKSB7XHJcbiAgICAvLyBjYW5ub3QgYWRqdXN0IHNhdmVkIHZhbHVlIHRvIGZpbHRlclxyXG4gICAgcmV0dXJuIGZhaWxlZDtcclxuICB9XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBmaWx0ZXI6IHZhbGlkYXRlRmlsdGVyWUF4aXModXBkYXRlZEZpbHRlciwgdXBkYXRlZERhdGFzZXQpLFxyXG4gICAgZGF0YXNldDogdXBkYXRlZERhdGFzZXRcclxuICB9O1xyXG59XHJcblxyXG4vKipcclxuICogVmFsaWRhdGUgc2F2ZWQgZmlsdGVyIGNvbmZpZyB3aXRoIG5ldyBkYXRhLFxyXG4gKiBjYWxjdWxhdGUgZG9tYWluIGFuZCBmaWVsZElkeCBiYXNlZCBuZXcgZmllbGRzIGFuZCBkYXRhXHJcbiAqXHJcbiAqIEBwYXJhbSBkYXRhc2V0XHJcbiAqIEBwYXJhbSBmaWx0ZXIgLSBmaWx0ZXIgdG8gYmUgdmFsaWRhdGVcclxuICogQHBhcmFtIGxheWVycyAtIGxheWVyc1xyXG4gKiBAcmV0dXJuIHZhbGlkYXRlZCBmaWx0ZXJcclxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vZmlsdGVyLXV0aWxzJykudmFsaWRhdGVGaWx0ZXJXaXRoRGF0YX1cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZUZpbHRlcldpdGhEYXRhKGRhdGFzZXQsIGZpbHRlciwgbGF5ZXJzKSB7XHJcbiAgLy8gQHRzLWlnbm9yZVxyXG4gIHJldHVybiBmaWx0ZXJWYWxpZGF0b3JzLmhhc093blByb3BlcnR5KGZpbHRlci50eXBlKVxyXG4gICAgPyBmaWx0ZXJWYWxpZGF0b3JzW2ZpbHRlci50eXBlXShkYXRhc2V0LCBmaWx0ZXIsIGxheWVycylcclxuICAgIDogdmFsaWRhdGVGaWx0ZXIoZGF0YXNldCwgZmlsdGVyKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFZhbGlkYXRlIFlBeGlzXHJcbiAqIEBwYXJhbSBmaWx0ZXJcclxuICogQHBhcmFtIGRhdGFzZXRcclxuICogQHJldHVybiB7Kn1cclxuICovXHJcbmZ1bmN0aW9uIHZhbGlkYXRlRmlsdGVyWUF4aXMoZmlsdGVyLCBkYXRhc2V0KSB7XHJcbiAgLy8gVE9ETzogdmFsaWRhdGUgeUF4aXMgYWdhaW5zdCBvdGhlciBkYXRhc2V0c1xyXG5cclxuICBjb25zdCB7ZmllbGRzLCBhbGxEYXRhfSA9IGRhdGFzZXQ7XHJcbiAgY29uc3Qge3lBeGlzfSA9IGZpbHRlcjtcclxuICAvLyBUT0RPOiB2YWxpZGF0ZSB5QXhpcyBhZ2FpbnN0IG90aGVyIGRhdGFzZXRzXHJcbiAgaWYgKHlBeGlzKSB7XHJcbiAgICBjb25zdCBtYXRjaGVkQXhpcyA9IGZpZWxkcy5maW5kKCh7bmFtZSwgdHlwZX0pID0+IG5hbWUgPT09IHlBeGlzLm5hbWUgJiYgdHlwZSA9PT0geUF4aXMudHlwZSk7XHJcblxyXG4gICAgZmlsdGVyID0gbWF0Y2hlZEF4aXNcclxuICAgICAgPyB7XHJcbiAgICAgICAgICAuLi5maWx0ZXIsXHJcbiAgICAgICAgICB5QXhpczogbWF0Y2hlZEF4aXMsXHJcbiAgICAgICAgICAuLi5nZXRGaWx0ZXJQbG90KHsuLi5maWx0ZXIsIHlBeGlzOiBtYXRjaGVkQXhpc30sIGFsbERhdGEpXHJcbiAgICAgICAgfVxyXG4gICAgICA6IGZpbHRlcjtcclxuICB9XHJcblxyXG4gIHJldHVybiBmaWx0ZXI7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBHZXQgZGVmYXVsdCBmaWx0ZXIgcHJvcCBiYXNlZCBvbiBmaWVsZCB0eXBlXHJcbiAqXHJcbiAqIEBwYXJhbSBhbGxEYXRhXHJcbiAqIEBwYXJhbSBmaWVsZFxyXG4gKiBAcmV0dXJucyBkZWZhdWx0IGZpbHRlclxyXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi9maWx0ZXItdXRpbHMnKS5nZXRGaWx0ZXJQcm9wc31cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRGaWx0ZXJQcm9wcyhhbGxEYXRhLCBmaWVsZCkge1xyXG4gIGNvbnN0IGZpbHRlclByb3BzID0ge1xyXG4gICAgLi4uZ2V0RmllbGREb21haW4oYWxsRGF0YSwgZmllbGQpLFxyXG4gICAgZmllbGRUeXBlOiBmaWVsZC50eXBlXHJcbiAgfTtcclxuXHJcbiAgc3dpdGNoIChmaWVsZC50eXBlKSB7XHJcbiAgICBjYXNlIEFMTF9GSUVMRF9UWVBFUy5yZWFsOlxyXG4gICAgY2FzZSBBTExfRklFTERfVFlQRVMuaW50ZWdlcjpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5maWx0ZXJQcm9wcyxcclxuICAgICAgICB2YWx1ZTogZmlsdGVyUHJvcHMuZG9tYWluLFxyXG4gICAgICAgIHR5cGU6IEZJTFRFUl9UWVBFUy5yYW5nZSxcclxuICAgICAgICB0eXBlT3B0aW9uczogW0ZJTFRFUl9UWVBFUy5yYW5nZV0sXHJcbiAgICAgICAgZ3B1OiB0cnVlXHJcbiAgICAgIH07XHJcblxyXG4gICAgY2FzZSBBTExfRklFTERfVFlQRVMuYm9vbGVhbjpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5maWx0ZXJQcm9wcyxcclxuICAgICAgICB0eXBlOiBGSUxURVJfVFlQRVMuc2VsZWN0LFxyXG4gICAgICAgIHZhbHVlOiB0cnVlLFxyXG4gICAgICAgIGdwdTogZmFsc2VcclxuICAgICAgfTtcclxuXHJcbiAgICBjYXNlIEFMTF9GSUVMRF9UWVBFUy5zdHJpbmc6XHJcbiAgICBjYXNlIEFMTF9GSUVMRF9UWVBFUy5kYXRlOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLmZpbHRlclByb3BzLFxyXG4gICAgICAgIHR5cGU6IEZJTFRFUl9UWVBFUy5tdWx0aVNlbGVjdCxcclxuICAgICAgICB2YWx1ZTogW10sXHJcbiAgICAgICAgZ3B1OiBmYWxzZVxyXG4gICAgICB9O1xyXG5cclxuICAgIGNhc2UgQUxMX0ZJRUxEX1RZUEVTLnRpbWVzdGFtcDpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5maWx0ZXJQcm9wcyxcclxuICAgICAgICB0eXBlOiBGSUxURVJfVFlQRVMudGltZVJhbmdlLFxyXG4gICAgICAgIGVubGFyZ2VkOiB0cnVlLFxyXG4gICAgICAgIGZpeGVkRG9tYWluOiB0cnVlLFxyXG4gICAgICAgIHZhbHVlOiBmaWx0ZXJQcm9wcy5kb21haW4sXHJcbiAgICAgICAgZ3B1OiB0cnVlXHJcbiAgICAgIH07XHJcblxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHt9O1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIENhbGN1bGF0ZSBmaWVsZCBkb21haW4gYmFzZWQgb24gZmllbGQgdHlwZSBhbmQgZGF0YVxyXG4gKlxyXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi9maWx0ZXItdXRpbHMnKS5nZXRGaWVsZERvbWFpbn1cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRGaWVsZERvbWFpbihhbGxEYXRhLCBmaWVsZCkge1xyXG4gIGNvbnN0IGZpZWxkSWR4ID0gZmllbGQudGFibGVGaWVsZEluZGV4IC0gMTtcclxuICBjb25zdCBpc1RpbWUgPSBmaWVsZC50eXBlID09PSBBTExfRklFTERfVFlQRVMudGltZXN0YW1wO1xyXG4gIGNvbnN0IHZhbHVlQWNjZXNzb3IgPSBtYXliZVRvRGF0ZS5iaW5kKG51bGwsIGlzVGltZSwgZmllbGRJZHgsIGZpZWxkLmZvcm1hdCk7XHJcbiAgbGV0IGRvbWFpbjtcclxuXHJcbiAgc3dpdGNoIChmaWVsZC50eXBlKSB7XHJcbiAgICBjYXNlIEFMTF9GSUVMRF9UWVBFUy5yZWFsOlxyXG4gICAgY2FzZSBBTExfRklFTERfVFlQRVMuaW50ZWdlcjpcclxuICAgICAgLy8gY2FsY3VsYXRlIGRvbWFpbiBhbmQgc3RlcFxyXG4gICAgICByZXR1cm4gZ2V0TnVtZXJpY0ZpZWxkRG9tYWluKGFsbERhdGEsIHZhbHVlQWNjZXNzb3IpO1xyXG5cclxuICAgIGNhc2UgQUxMX0ZJRUxEX1RZUEVTLmJvb2xlYW46XHJcbiAgICAgIHJldHVybiB7ZG9tYWluOiBbdHJ1ZSwgZmFsc2VdfTtcclxuXHJcbiAgICBjYXNlIEFMTF9GSUVMRF9UWVBFUy5zdHJpbmc6XHJcbiAgICBjYXNlIEFMTF9GSUVMRF9UWVBFUy5kYXRlOlxyXG4gICAgICBkb21haW4gPSBTY2FsZVV0aWxzLmdldE9yZGluYWxEb21haW4oYWxsRGF0YSwgdmFsdWVBY2Nlc3Nvcik7XHJcbiAgICAgIHJldHVybiB7ZG9tYWlufTtcclxuXHJcbiAgICBjYXNlIEFMTF9GSUVMRF9UWVBFUy50aW1lc3RhbXA6XHJcbiAgICAgIHJldHVybiBnZXRUaW1lc3RhbXBGaWVsZERvbWFpbihhbGxEYXRhLCB2YWx1ZUFjY2Vzc29yKTtcclxuXHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4ge2RvbWFpbjogU2NhbGVVdGlscy5nZXRPcmRpbmFsRG9tYWluKGFsbERhdGEsIHZhbHVlQWNjZXNzb3IpfTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRQb2x5Z29uRmlsdGVyRnVuY3RvciA9IChsYXllciwgZmlsdGVyKSA9PiB7XHJcbiAgY29uc3QgZ2V0UG9zaXRpb24gPSBsYXllci5nZXRQb3NpdGlvbkFjY2Vzc29yKCk7XHJcblxyXG4gIHN3aXRjaCAobGF5ZXIudHlwZSkge1xyXG4gICAgY2FzZSBMQVlFUl9UWVBFUy5wb2ludDpcclxuICAgIGNhc2UgTEFZRVJfVFlQRVMuaWNvbjpcclxuICAgICAgcmV0dXJuIGRhdGEgPT4ge1xyXG4gICAgICAgIGNvbnN0IHBvcyA9IGdldFBvc2l0aW9uKHtkYXRhfSk7XHJcbiAgICAgICAgcmV0dXJuIHBvcy5ldmVyeShOdW1iZXIuaXNGaW5pdGUpICYmIGlzSW5Qb2x5Z29uKHBvcywgZmlsdGVyLnZhbHVlKTtcclxuICAgICAgfTtcclxuICAgIGNhc2UgTEFZRVJfVFlQRVMuYXJjOlxyXG4gICAgY2FzZSBMQVlFUl9UWVBFUy5saW5lOlxyXG4gICAgICByZXR1cm4gZGF0YSA9PiB7XHJcbiAgICAgICAgY29uc3QgcG9zID0gZ2V0UG9zaXRpb24oe2RhdGF9KTtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgcG9zLmV2ZXJ5KE51bWJlci5pc0Zpbml0ZSkgJiZcclxuICAgICAgICAgIFtcclxuICAgICAgICAgICAgW3Bvc1swXSwgcG9zWzFdXSxcclxuICAgICAgICAgICAgW3Bvc1szXSwgcG9zWzRdXVxyXG4gICAgICAgICAgXS5ldmVyeShwb2ludCA9PiBpc0luUG9seWdvbihwb2ludCwgZmlsdGVyLnZhbHVlKSlcclxuICAgICAgICApO1xyXG4gICAgICB9O1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuICgpID0+IHRydWU7XHJcbiAgfVxyXG59O1xyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSBmaWVsZCBkYXRhc2V0IEZpZWxkXHJcbiAqIEBwYXJhbSBkYXRhSWQgRGF0YXNldCBpZFxyXG4gKiBAcGFyYW0gZmlsdGVyIEZpbHRlciBvYmplY3RcclxuICogQHBhcmFtIGxheWVycyBsaXN0IG9mIGxheWVycyB0byBmaWx0ZXIgdXBvblxyXG4gKiBAcmV0dXJuIGZpbHRlckZ1bmN0aW9uXHJcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL2ZpbHRlci11dGlscycpLmdldEZpbHRlckZ1bmN0aW9ufVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEZpbHRlckZ1bmN0aW9uKGZpZWxkLCBkYXRhSWQsIGZpbHRlciwgbGF5ZXJzKSB7XHJcbiAgLy8gZmllbGQgY291bGQgYmUgbnVsbCBpbiBwb2x5Z29uIGZpbHRlclxyXG4gIGNvbnN0IHZhbHVlQWNjZXNzb3IgPSBkYXRhID0+IChmaWVsZCA/IGRhdGFbZmllbGQudGFibGVGaWVsZEluZGV4IC0gMV0gOiBudWxsKTtcclxuICBjb25zdCBkZWZhdWx0RnVuYyA9IGQgPT4gdHJ1ZTtcclxuXHJcbiAgc3dpdGNoIChmaWx0ZXIudHlwZSkge1xyXG4gICAgY2FzZSBGSUxURVJfVFlQRVMucmFuZ2U6XHJcbiAgICAgIHJldHVybiBkYXRhID0+IGlzSW5SYW5nZSh2YWx1ZUFjY2Vzc29yKGRhdGEpLCBmaWx0ZXIudmFsdWUpO1xyXG4gICAgY2FzZSBGSUxURVJfVFlQRVMubXVsdGlTZWxlY3Q6XHJcbiAgICAgIHJldHVybiBkYXRhID0+IGZpbHRlci52YWx1ZS5pbmNsdWRlcyh2YWx1ZUFjY2Vzc29yKGRhdGEpKTtcclxuICAgIGNhc2UgRklMVEVSX1RZUEVTLnNlbGVjdDpcclxuICAgICAgcmV0dXJuIGRhdGEgPT4gdmFsdWVBY2Nlc3NvcihkYXRhKSA9PT0gZmlsdGVyLnZhbHVlO1xyXG4gICAgY2FzZSBGSUxURVJfVFlQRVMudGltZVJhbmdlOlxyXG4gICAgICBpZiAoIWZpZWxkKSB7XHJcbiAgICAgICAgcmV0dXJuIGRlZmF1bHRGdW5jO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IG1hcHBlZFZhbHVlID0gZ2V0KGZpZWxkLCBbJ2ZpbHRlclByb3BzJywgJ21hcHBlZFZhbHVlJ10pO1xyXG4gICAgICBjb25zdCBhY2Nlc3NvciA9IEFycmF5LmlzQXJyYXkobWFwcGVkVmFsdWUpXHJcbiAgICAgICAgPyAoZGF0YSwgaW5kZXgpID0+IG1hcHBlZFZhbHVlW2luZGV4XVxyXG4gICAgICAgIDogZGF0YSA9PiB0aW1lVG9Vbml4TWlsbGkodmFsdWVBY2Nlc3NvcihkYXRhKSwgZmllbGQuZm9ybWF0KTtcclxuICAgICAgcmV0dXJuIChkYXRhLCBpbmRleCkgPT4gaXNJblJhbmdlKGFjY2Vzc29yKGRhdGEsIGluZGV4KSwgZmlsdGVyLnZhbHVlKTtcclxuICAgIGNhc2UgRklMVEVSX1RZUEVTLnBvbHlnb246XHJcbiAgICAgIGlmICghbGF5ZXJzIHx8ICFsYXllcnMubGVuZ3RoKSB7XHJcbiAgICAgICAgcmV0dXJuIGRlZmF1bHRGdW5jO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgY29uc3QgbGF5ZXJGaWx0ZXJGdW5jdGlvbnMgPSBmaWx0ZXIubGF5ZXJJZFxyXG4gICAgICAgIC5tYXAoaWQgPT4gbGF5ZXJzLmZpbmQobCA9PiBsLmlkID09PSBpZCkpXHJcbiAgICAgICAgLmZpbHRlcihsID0+IGwgJiYgbC5jb25maWcuZGF0YUlkID09PSBkYXRhSWQpXHJcbiAgICAgICAgLm1hcChsYXllciA9PiBnZXRQb2x5Z29uRmlsdGVyRnVuY3RvcihsYXllciwgZmlsdGVyKSk7XHJcblxyXG4gICAgICByZXR1cm4gZGF0YSA9PiBsYXllckZpbHRlckZ1bmN0aW9ucy5ldmVyeShmaWx0ZXJGdW5jID0+IGZpbHRlckZ1bmMoZGF0YSkpO1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIGRlZmF1bHRGdW5jO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUZpbHRlckRhdGFJZChkYXRhSWQpIHtcclxuICByZXR1cm4gZ2V0RGVmYXVsdEZpbHRlcihkYXRhSWQpO1xyXG59XHJcblxyXG4vKipcclxuICogRmlsdGVyIGRhdGEgYmFzZWQgb24gYW4gYXJyYXkgb2YgZmlsdGVyc1xyXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi9maWx0ZXItdXRpbHMnKS5maWx0ZXJEYXRhc2V0fVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGZpbHRlckRhdGFzZXQoZGF0YXNldCwgZmlsdGVycywgbGF5ZXJzLCBvcHQpIHtcclxuICBjb25zdCB7YWxsRGF0YSwgaWQ6IGRhdGFJZCwgZmlsdGVyUmVjb3JkOiBvbGRGaWx0ZXJSZWNvcmQsIGZpZWxkc30gPSBkYXRhc2V0O1xyXG5cclxuICAvLyBpZiB0aGVyZSBpcyBubyBmaWx0ZXJzXHJcbiAgY29uc3QgZmlsdGVyUmVjb3JkID0gZ2V0RmlsdGVyUmVjb3JkKGRhdGFJZCwgZmlsdGVycywgb3B0IHx8IHt9KTtcclxuXHJcbiAgY29uc3QgbmV3RGF0YXNldCA9IHNldChbJ2ZpbHRlclJlY29yZCddLCBmaWx0ZXJSZWNvcmQsIGRhdGFzZXQpO1xyXG5cclxuICBpZiAoIWZpbHRlcnMubGVuZ3RoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAuLi5uZXdEYXRhc2V0LFxyXG4gICAgICBncHVGaWx0ZXI6IGdldEdwdUZpbHRlclByb3BzKGZpbHRlcnMsIGRhdGFJZCwgZmllbGRzKSxcclxuICAgICAgZmlsdGVyZWRJbmRleDogZGF0YXNldC5hbGxJbmRleGVzLFxyXG4gICAgICBmaWx0ZXJlZEluZGV4Rm9yRG9tYWluOiBkYXRhc2V0LmFsbEluZGV4ZXNcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBjb25zdCBjaGFuZ2VkRmlsdGVycyA9IGRpZmZGaWx0ZXJzKGZpbHRlclJlY29yZCwgb2xkRmlsdGVyUmVjb3JkKTtcclxuXHJcbiAgLy8gZ2VuZXJhdGUgMiBzZXRzIG9mIGZpbHRlciByZXN1bHRcclxuICAvLyBmaWx0ZXJlZEluZGV4IHVzZWQgdG8gY2FsY3VsYXRlIGxheWVyIGRhdGFcclxuICAvLyBmaWx0ZXJlZEluZGV4Rm9yRG9tYWluIHVzZWQgdG8gY2FsY3VsYXRlIGxheWVyIERvbWFpblxyXG4gIGNvbnN0IHNob3VsZENhbERvbWFpbiA9IEJvb2xlYW4oY2hhbmdlZEZpbHRlcnMuZHluYW1pY0RvbWFpbik7XHJcbiAgY29uc3Qgc2hvdWxkQ2FsSW5kZXggPSBCb29sZWFuKGNoYW5nZWRGaWx0ZXJzLmNwdSk7XHJcblxyXG4gIGxldCBmaWx0ZXJSZXN1bHQgPSB7fTtcclxuICBpZiAoc2hvdWxkQ2FsRG9tYWluIHx8IHNob3VsZENhbEluZGV4KSB7XHJcbiAgICBjb25zdCBkeW5hbWljRG9tYWluRmlsdGVycyA9IHNob3VsZENhbERvbWFpbiA/IGZpbHRlclJlY29yZC5keW5hbWljRG9tYWluIDogbnVsbDtcclxuICAgIGNvbnN0IGNwdUZpbHRlcnMgPSBzaG91bGRDYWxJbmRleCA/IGZpbHRlclJlY29yZC5jcHUgOiBudWxsO1xyXG5cclxuICAgIGNvbnN0IGZpbHRlckZ1bmNzID0gZmlsdGVycy5yZWR1Y2UoKGFjYywgZmlsdGVyKSA9PiB7XHJcbiAgICAgIGNvbnN0IGZpZWxkSW5kZXggPSBnZXREYXRhc2V0RmllbGRJbmRleEZvckZpbHRlcihkYXRhc2V0LmlkLCBmaWx0ZXIpO1xyXG4gICAgICBjb25zdCBmaWVsZCA9IGZpZWxkSW5kZXggIT09IC0xID8gZmllbGRzW2ZpZWxkSW5kZXhdIDogbnVsbDtcclxuXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uYWNjLFxyXG4gICAgICAgIFtmaWx0ZXIuaWRdOiBnZXRGaWx0ZXJGdW5jdGlvbihmaWVsZCwgZGF0YXNldC5pZCwgZmlsdGVyLCBsYXllcnMpXHJcbiAgICAgIH07XHJcbiAgICB9LCB7fSk7XHJcblxyXG4gICAgZmlsdGVyUmVzdWx0ID0gZmlsdGVyRGF0YUJ5RmlsdGVyVHlwZXMoXHJcbiAgICAgIHtkeW5hbWljRG9tYWluRmlsdGVycywgY3B1RmlsdGVycywgZmlsdGVyRnVuY3N9LFxyXG4gICAgICBhbGxEYXRhXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIC4uLm5ld0RhdGFzZXQsXHJcbiAgICAuLi5maWx0ZXJSZXN1bHQsXHJcbiAgICBncHVGaWx0ZXI6IGdldEdwdUZpbHRlclByb3BzKGZpbHRlcnMsIGRhdGFJZCwgZmllbGRzKVxyXG4gIH07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi9maWx0ZXItdXRpbHMnKS5maWx0ZXJEYXRhQnlGaWx0ZXJUeXBlc31cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBmaWx0ZXJEYXRhQnlGaWx0ZXJUeXBlcyh7ZHluYW1pY0RvbWFpbkZpbHRlcnMsIGNwdUZpbHRlcnMsIGZpbHRlckZ1bmNzfSwgYWxsRGF0YSkge1xyXG4gIGNvbnN0IHJlc3VsdCA9IHtcclxuICAgIC4uLihkeW5hbWljRG9tYWluRmlsdGVycyA/IHtmaWx0ZXJlZEluZGV4Rm9yRG9tYWluOiBbXX0gOiB7fSksXHJcbiAgICAuLi4oY3B1RmlsdGVycyA/IHtmaWx0ZXJlZEluZGV4OiBbXX0gOiB7fSlcclxuICB9O1xyXG5cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbERhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgIGNvbnN0IGQgPSBhbGxEYXRhW2ldO1xyXG5cclxuICAgIGNvbnN0IG1hdGNoRm9yRG9tYWluID1cclxuICAgICAgZHluYW1pY0RvbWFpbkZpbHRlcnMgJiYgZHluYW1pY0RvbWFpbkZpbHRlcnMuZXZlcnkoZmlsdGVyID0+IGZpbHRlckZ1bmNzW2ZpbHRlci5pZF0oZCwgaSkpO1xyXG5cclxuICAgIGlmIChtYXRjaEZvckRvbWFpbikge1xyXG4gICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgIHJlc3VsdC5maWx0ZXJlZEluZGV4Rm9yRG9tYWluLnB1c2goaSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbWF0Y2hGb3JSZW5kZXIgPSBjcHVGaWx0ZXJzICYmIGNwdUZpbHRlcnMuZXZlcnkoZmlsdGVyID0+IGZpbHRlckZ1bmNzW2ZpbHRlci5pZF0oZCwgaSkpO1xyXG5cclxuICAgIGlmIChtYXRjaEZvclJlbmRlcikge1xyXG4gICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgIHJlc3VsdC5maWx0ZXJlZEluZGV4LnB1c2goaSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG4vKipcclxuICogR2V0IGEgcmVjb3JkIG9mIGZpbHRlcnMgYmFzZWQgb24gZG9tYWluIHR5cGUgYW5kIGdwdSAvIGNwdVxyXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi9maWx0ZXItdXRpbHMnKS5nZXRGaWx0ZXJSZWNvcmR9XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0RmlsdGVyUmVjb3JkKGRhdGFJZCwgZmlsdGVycywgb3B0ID0ge30pIHtcclxuICAvKipcclxuICAgKiBAdHlwZSB7RmlsdGVyUmVjb3JkfVxyXG4gICAqL1xyXG4gIGNvbnN0IGZpbHRlclJlY29yZCA9IHtcclxuICAgIGR5bmFtaWNEb21haW46IFtdLFxyXG4gICAgZml4ZWREb21haW46IFtdLFxyXG4gICAgY3B1OiBbXSxcclxuICAgIGdwdTogW11cclxuICB9O1xyXG5cclxuICBmaWx0ZXJzLmZvckVhY2goZiA9PiB7XHJcbiAgICBpZiAoaXNWYWxpZEZpbHRlclZhbHVlKGYudHlwZSwgZi52YWx1ZSkgJiYgdG9BcnJheShmLmRhdGFJZCkuaW5jbHVkZXMoZGF0YUlkKSkge1xyXG4gICAgICAoZi5maXhlZERvbWFpbiB8fCBvcHQuaWdub3JlRG9tYWluXHJcbiAgICAgICAgPyBmaWx0ZXJSZWNvcmQuZml4ZWREb21haW5cclxuICAgICAgICA6IGZpbHRlclJlY29yZC5keW5hbWljRG9tYWluXHJcbiAgICAgICkucHVzaChmKTtcclxuXHJcbiAgICAgIChmLmdwdSAmJiAhb3B0LmNwdU9ubHkgPyBmaWx0ZXJSZWNvcmQuZ3B1IDogZmlsdGVyUmVjb3JkLmNwdSkucHVzaChmKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIGZpbHRlclJlY29yZDtcclxufVxyXG5cclxuLyoqXHJcbiAqIENvbXBhcmUgZmlsdGVyIHJlY29yZHMgdG8gZ2V0IHdoYXQgaGFzIGNoYW5nZWRcclxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vZmlsdGVyLXV0aWxzJykuZGlmZkZpbHRlcnN9XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZGlmZkZpbHRlcnMoZmlsdGVyUmVjb3JkLCBvbGRGaWx0ZXJSZWNvcmQgPSB7fSkge1xyXG4gIGxldCBmaWx0ZXJDaGFuZ2VkID0ge307XHJcblxyXG4gIE9iamVjdC5lbnRyaWVzKGZpbHRlclJlY29yZCkuZm9yRWFjaCgoW3JlY29yZCwgaXRlbXNdKSA9PiB7XHJcbiAgICBpdGVtcy5mb3JFYWNoKGZpbHRlciA9PiB7XHJcbiAgICAgIGNvbnN0IG9sZEZpbHRlciA9IChvbGRGaWx0ZXJSZWNvcmRbcmVjb3JkXSB8fCBbXSkuZmluZChmID0+IGYuaWQgPT09IGZpbHRlci5pZCk7XHJcblxyXG4gICAgICBpZiAoIW9sZEZpbHRlcikge1xyXG4gICAgICAgIC8vIGFkZGVkXHJcbiAgICAgICAgZmlsdGVyQ2hhbmdlZCA9IHNldChbcmVjb3JkLCBmaWx0ZXIuaWRdLCAnYWRkZWQnLCBmaWx0ZXJDaGFuZ2VkKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBjaGVjayAgd2hhdCBoYXMgY2hhbmdlZFxyXG4gICAgICAgIFsnbmFtZScsICd2YWx1ZScsICdkYXRhSWQnXS5mb3JFYWNoKHByb3AgPT4ge1xyXG4gICAgICAgICAgaWYgKGZpbHRlcltwcm9wXSAhPT0gb2xkRmlsdGVyW3Byb3BdKSB7XHJcbiAgICAgICAgICAgIGZpbHRlckNoYW5nZWQgPSBzZXQoW3JlY29yZCwgZmlsdGVyLmlkXSwgYCR7cHJvcH1fY2hhbmdlZGAsIGZpbHRlckNoYW5nZWQpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAob2xkRmlsdGVyUmVjb3JkW3JlY29yZF0gfHwgW10pLmZvckVhY2gob2xkRmlsdGVyID0+IHtcclxuICAgICAgLy8gZGVsZXRlZFxyXG4gICAgICBpZiAoIWl0ZW1zLmZpbmQoZiA9PiBmLmlkID09PSBvbGRGaWx0ZXIuaWQpKSB7XHJcbiAgICAgICAgZmlsdGVyQ2hhbmdlZCA9IHNldChbcmVjb3JkLCBvbGRGaWx0ZXIuaWRdLCAnZGVsZXRlZCcsIGZpbHRlckNoYW5nZWQpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoIWZpbHRlckNoYW5nZWRbcmVjb3JkXSkge1xyXG4gICAgICBmaWx0ZXJDaGFuZ2VkW3JlY29yZF0gPSBudWxsO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICAvLyBAdHMtaWdub3JlXHJcbiAgcmV0dXJuIGZpbHRlckNoYW5nZWQ7XHJcbn1cclxuLyoqXHJcbiAqIENhbGwgYnkgcGFyc2luZyBmaWx0ZXJzIGZyb20gVVJMXHJcbiAqIENoZWNrIGlmIHZhbHVlIG9mIGZpbHRlciB3aXRoaW4gZmlsdGVyIGRvbWFpbiwgaWYgbm90IGFkanVzdCBpdCB0byBtYXRjaFxyXG4gKiBmaWx0ZXIgZG9tYWluXHJcbiAqXHJcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL2ZpbHRlci11dGlscycpLmFkanVzdFZhbHVlVG9GaWx0ZXJEb21haW59XHJcbiAqIEByZXR1cm5zIHZhbHVlIC0gYWRqdXN0ZWQgdmFsdWUgdG8gbWF0Y2ggZmlsdGVyIG9yIG51bGwgdG8gcmVtb3ZlIGZpbHRlclxyXG4gKi9cclxuLyogZXNsaW50LWRpc2FibGUgY29tcGxleGl0eSAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYWRqdXN0VmFsdWVUb0ZpbHRlckRvbWFpbih2YWx1ZSwge2RvbWFpbiwgdHlwZX0pIHtcclxuICBpZiAoIWRvbWFpbiB8fCAhdHlwZSkge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICBjYXNlIEZJTFRFUl9UWVBFUy5yYW5nZTpcclxuICAgIGNhc2UgRklMVEVSX1RZUEVTLnRpbWVSYW5nZTpcclxuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHZhbHVlKSB8fCB2YWx1ZS5sZW5ndGggIT09IDIpIHtcclxuICAgICAgICByZXR1cm4gZG9tYWluLm1hcChkID0+IGQpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gdmFsdWUubWFwKChkLCBpKSA9PiAobm90TnVsbG9yVW5kZWZpbmVkKGQpICYmIGlzSW5SYW5nZShkLCBkb21haW4pID8gZCA6IGRvbWFpbltpXSkpO1xyXG5cclxuICAgIGNhc2UgRklMVEVSX1RZUEVTLm11bHRpU2VsZWN0OlxyXG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkodmFsdWUpKSB7XHJcbiAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IGZpbHRlcmVkVmFsdWUgPSB2YWx1ZS5maWx0ZXIoZCA9PiBkb21haW4uaW5jbHVkZXMoZCkpO1xyXG4gICAgICByZXR1cm4gZmlsdGVyZWRWYWx1ZS5sZW5ndGggPyBmaWx0ZXJlZFZhbHVlIDogW107XHJcblxyXG4gICAgY2FzZSBGSUxURVJfVFlQRVMuc2VsZWN0OlxyXG4gICAgICByZXR1cm4gZG9tYWluLmluY2x1ZGVzKHZhbHVlKSA/IHZhbHVlIDogdHJ1ZTtcclxuXHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbn1cclxuLyogZXNsaW50LWVuYWJsZSBjb21wbGV4aXR5ICovXHJcblxyXG4vKipcclxuICogQ2FsY3VsYXRlIG51bWVyaWMgZG9tYWluIGFuZCBzdWl0YWJsZSBzdGVwXHJcbiAqXHJcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL2ZpbHRlci11dGlscycpLmdldE51bWVyaWNGaWVsZERvbWFpbn1cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXROdW1lcmljRmllbGREb21haW4oZGF0YSwgdmFsdWVBY2Nlc3Nvcikge1xyXG4gIGxldCBkb21haW4gPSBbMCwgMV07XHJcbiAgbGV0IHN0ZXAgPSAwLjE7XHJcblxyXG4gIGNvbnN0IG1hcHBlZFZhbHVlID0gQXJyYXkuaXNBcnJheShkYXRhKSA/IGRhdGEubWFwKHZhbHVlQWNjZXNzb3IpIDogW107XHJcblxyXG4gIGlmIChBcnJheS5pc0FycmF5KGRhdGEpICYmIGRhdGEubGVuZ3RoID4gMSkge1xyXG4gICAgZG9tYWluID0gU2NhbGVVdGlscy5nZXRMaW5lYXJEb21haW4obWFwcGVkVmFsdWUpO1xyXG4gICAgY29uc3QgZGlmZiA9IGRvbWFpblsxXSAtIGRvbWFpblswXTtcclxuXHJcbiAgICAvLyBpbiBjYXNlIGVxdWFsIGRvbWFpbiwgWzk2LCA5Nl0sIHdoaWNoIHdpbGwgYnJlYWsgcXVhbnRpemUgc2NhbGVcclxuICAgIGlmICghZGlmZikge1xyXG4gICAgICBkb21haW5bMV0gPSBkb21haW5bMF0gKyAxO1xyXG4gICAgfVxyXG5cclxuICAgIHN0ZXAgPSBnZXROdW1lcmljU3RlcFNpemUoZGlmZikgfHwgc3RlcDtcclxuICAgIGRvbWFpblswXSA9IGZvcm1hdE51bWJlckJ5U3RlcChkb21haW5bMF0sIHN0ZXAsICdmbG9vcicpO1xyXG4gICAgZG9tYWluWzFdID0gZm9ybWF0TnVtYmVyQnlTdGVwKGRvbWFpblsxXSwgc3RlcCwgJ2NlaWwnKTtcclxuICB9XHJcblxyXG4gIC8vIEB0cy1pZ25vcmVcclxuICBjb25zdCB7aGlzdG9ncmFtLCBlbmxhcmdlZEhpc3RvZ3JhbX0gPSBnZXRIaXN0b2dyYW0oZG9tYWluLCBtYXBwZWRWYWx1ZSk7XHJcblxyXG4gIHJldHVybiB7ZG9tYWluLCBzdGVwLCBoaXN0b2dyYW0sIGVubGFyZ2VkSGlzdG9ncmFtfTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENhbGN1bGF0ZSBzdGVwIHNpemUgZm9yIHJhbmdlIGFuZCB0aW1lcmFuZ2UgZmlsdGVyXHJcbiAqXHJcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL2ZpbHRlci11dGlscycpLmdldE51bWVyaWNTdGVwU2l6ZX1cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXROdW1lcmljU3RlcFNpemUoZGlmZikge1xyXG4gIGRpZmYgPSBNYXRoLmFicyhkaWZmKTtcclxuXHJcbiAgaWYgKGRpZmYgPiAxMDApIHtcclxuICAgIHJldHVybiAxO1xyXG4gIH0gZWxzZSBpZiAoZGlmZiA+IDMpIHtcclxuICAgIHJldHVybiAwLjAxO1xyXG4gIH0gZWxzZSBpZiAoZGlmZiA+IDEpIHtcclxuICAgIHJldHVybiAwLjAwMTtcclxuICB9XHJcbiAgLy8gVHJ5IHRvIGdldCBhdCBsZWFzdCAxMDAwIHN0ZXBzIC0gYW5kIGtlZXAgdGhlIHN0ZXAgc2l6ZSBiZWxvdyB0aGF0IG9mXHJcbiAgLy8gdGhlIChkaWZmID4gMSkgY2FzZS5cclxuICBjb25zdCB4ID0gZGlmZiAvIDEwMDA7XHJcbiAgLy8gRmluZCB0aGUgZXhwb25lbnQgYW5kIHRydW5jYXRlIHRvIDEwIHRvIHRoZSBwb3dlciBvZiB0aGF0IGV4cG9uZW50XHJcblxyXG4gIGNvbnN0IGV4cG9uZW50aWFsRm9ybSA9IHgudG9FeHBvbmVudGlhbCgpO1xyXG4gIGNvbnN0IGV4cG9uZW50ID0gcGFyc2VGbG9hdChleHBvbmVudGlhbEZvcm0uc3BsaXQoJ2UnKVsxXSk7XHJcblxyXG4gIC8vIEdldHRpbmcgcmVhZHkgZm9yIG5vZGUgMTJcclxuICAvLyB0aGlzIGlzIHdoeSB3ZSBuZWVkIGRlY2ltYWwuanNcclxuICAvLyBNYXRoLnBvdygxMCwgLTUpID0gMC4wMDAwMDk5OTk5OTk5OTk5OTk5OTlcclxuICAvLyB0aGUgYWJvdmUgcmVzdWx0IHNob3dzIGluIGJyb3dzZXIgYW5kIG5vZGUgMTBcclxuICAvLyBub2RlIDEyIGJlaGF2ZXMgY29ycmVjdGx5XHJcbiAgcmV0dXJuIG5ldyBEZWNpbWFsKDEwKS5wb3coZXhwb25lbnQpLnRvTnVtYmVyKCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDYWxjdWxhdGUgdGltZXN0YW1wIGRvbWFpbiBhbmQgc3VpdGFibGUgc3RlcFxyXG4gKlxyXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi9maWx0ZXItdXRpbHMnKS5nZXRUaW1lc3RhbXBGaWVsZERvbWFpbn1cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRUaW1lc3RhbXBGaWVsZERvbWFpbihkYXRhLCB2YWx1ZUFjY2Vzc29yKSB7XHJcbiAgLy8gdG8gYXZvaWQgY29udmVydGluZyBzdHJpbmcgZm9ybWF0IHRpbWUgdG8gZXBvY2hcclxuICAvLyBldmVyeSB0aW1lIHdlIGNvbXBhcmUgd2Ugc3RvcmUgYSB2YWx1ZSBtYXBwZWQgdG8gaW50IGluIGZpbHRlciBkb21haW5cclxuXHJcbiAgY29uc3QgbWFwcGVkVmFsdWUgPSBBcnJheS5pc0FycmF5KGRhdGEpID8gZGF0YS5tYXAodmFsdWVBY2Nlc3NvcikgOiBbXTtcclxuICBjb25zdCBkb21haW4gPSBTY2FsZVV0aWxzLmdldExpbmVhckRvbWFpbihtYXBwZWRWYWx1ZSk7XHJcbiAgbGV0IHN0ZXAgPSAwLjAxO1xyXG5cclxuICBjb25zdCBkaWZmID0gZG9tYWluWzFdIC0gZG9tYWluWzBdO1xyXG4gIGNvbnN0IGVudHJ5ID0gVGltZXN0YW1wU3RlcE1hcC5maW5kKGYgPT4gZi5tYXggPj0gZGlmZik7XHJcbiAgaWYgKGVudHJ5KSB7XHJcbiAgICBzdGVwID0gZW50cnkuc3RlcDtcclxuICB9XHJcblxyXG4gIGNvbnN0IHtoaXN0b2dyYW0sIGVubGFyZ2VkSGlzdG9ncmFtfSA9IGdldEhpc3RvZ3JhbShkb21haW4sIG1hcHBlZFZhbHVlKTtcclxuXHJcbiAgcmV0dXJuIHtkb21haW4sIHN0ZXAsIG1hcHBlZFZhbHVlLCBoaXN0b2dyYW0sIGVubGFyZ2VkSGlzdG9ncmFtfTtcclxufVxyXG5cclxuLyoqXHJcbiAqXHJcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL2ZpbHRlci11dGlscycpLmhpc3RvZ3JhbUNvbnN0cnVjdH1cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBoaXN0b2dyYW1Db25zdHJ1Y3QoZG9tYWluLCBtYXBwZWRWYWx1ZSwgYmlucykge1xyXG4gIHJldHVybiBkM0hpc3RvZ3JhbSgpXHJcbiAgICAudGhyZXNob2xkcyh0aWNrcyhkb21haW5bMF0sIGRvbWFpblsxXSwgYmlucykpXHJcbiAgICAuZG9tYWluKGRvbWFpbikobWFwcGVkVmFsdWUpXHJcbiAgICAubWFwKGJpbiA9PiAoe1xyXG4gICAgICBjb3VudDogYmluLmxlbmd0aCxcclxuICAgICAgeDA6IGJpbi54MCxcclxuICAgICAgeDE6IGJpbi54MVxyXG4gICAgfSkpO1xyXG59XHJcbi8qKlxyXG4gKiBDYWxjdWxhdGUgaGlzdG9ncmFtIGZyb20gZG9tYWluIGFuZCBhcnJheSBvZiB2YWx1ZXNcclxuICpcclxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vZmlsdGVyLXV0aWxzJykuZ2V0SGlzdG9ncmFtfVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEhpc3RvZ3JhbShkb21haW4sIG1hcHBlZFZhbHVlKSB7XHJcbiAgY29uc3QgaGlzdG9ncmFtID0gaGlzdG9ncmFtQ29uc3RydWN0KGRvbWFpbiwgbWFwcGVkVmFsdWUsIGhpc3RvZ3JhbUJpbnMpO1xyXG4gIGNvbnN0IGVubGFyZ2VkSGlzdG9ncmFtID0gaGlzdG9ncmFtQ29uc3RydWN0KGRvbWFpbiwgbWFwcGVkVmFsdWUsIGVubGFyZ2VkSGlzdG9ncmFtQmlucyk7XHJcblxyXG4gIHJldHVybiB7aGlzdG9ncmFtLCBlbmxhcmdlZEhpc3RvZ3JhbX07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiByb3VuZCBudW1iZXIgYmFzZWQgb24gc3RlcFxyXG4gKlxyXG4gKiBAcGFyYW0ge051bWJlcn0gdmFsXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBzdGVwXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBib3VuZFxyXG4gKiBAcmV0dXJucyB7TnVtYmVyfSByb3VuZGVkIG51bWJlclxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdE51bWJlckJ5U3RlcCh2YWwsIHN0ZXAsIGJvdW5kKSB7XHJcbiAgaWYgKGJvdW5kID09PSAnZmxvb3InKSB7XHJcbiAgICByZXR1cm4gTWF0aC5mbG9vcih2YWwgKiAoMSAvIHN0ZXApKSAvICgxIC8gc3RlcCk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gTWF0aC5jZWlsKHZhbCAqICgxIC8gc3RlcCkpIC8gKDEgLyBzdGVwKTtcclxufVxyXG5cclxuLyoqXHJcbiAqXHJcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL2ZpbHRlci11dGlscycpLmlzSW5SYW5nZX1cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0luUmFuZ2UodmFsLCBkb21haW4pIHtcclxuICBpZiAoIUFycmF5LmlzQXJyYXkoZG9tYWluKSkge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHZhbCA+PSBkb21haW5bMF0gJiYgdmFsIDw9IGRvbWFpblsxXTtcclxufVxyXG5cclxuLyoqXHJcbiAqIERldGVybWluZXMgd2hldGhlciBhIHBvaW50IGlzIHdpdGhpbiB0aGUgcHJvdmlkZWQgcG9seWdvblxyXG4gKlxyXG4gKiBAcGFyYW0gcG9pbnQgYXMgaW5wdXQgc2VhcmNoIFtsYXQsIGxuZ11cclxuICogQHBhcmFtIHBvbHlnb24gUG9pbnRzIG11c3QgYmUgd2l0aGluIHRoZXNlIChNdWx0aSlQb2x5Z29uKHMpXHJcbiAqIEByZXR1cm4ge2Jvb2xlYW59XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaXNJblBvbHlnb24ocG9pbnQsIHBvbHlnb24pIHtcclxuICByZXR1cm4gYm9vbGVhbldpdGhpbih0dXJmUG9pbnQocG9pbnQpLCBwb2x5Z29uKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFRpbWVXaWRnZXRUaXRsZUZvcm1hdHRlcihkb21haW4pIHtcclxuICBpZiAoIUFycmF5LmlzQXJyYXkoZG9tYWluKSkge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICBjb25zdCBkaWZmID0gZG9tYWluWzFdIC0gZG9tYWluWzBdO1xyXG4gIHJldHVybiBkaWZmID4gZHVyYXRpb25ZZWFyXHJcbiAgICA/ICdNTS9ERC9ZWSdcclxuICAgIDogZGlmZiA+IGR1cmF0aW9uRGF5XHJcbiAgICA/ICdNTS9ERC9ZWSBoaDptbWEnXHJcbiAgICA6ICdNTS9ERC9ZWSBoaDptbTpzc2EnO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGltZVdpZGdldEhpbnRGb3JtYXR0ZXIoZG9tYWluKSB7XHJcbiAgaWYgKCFBcnJheS5pc0FycmF5KGRvbWFpbikpIHtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgZGlmZiA9IGRvbWFpblsxXSAtIGRvbWFpblswXTtcclxuICByZXR1cm4gZGlmZiA+IGR1cmF0aW9uWWVhclxyXG4gICAgPyAnTU0vREQvWVknXHJcbiAgICA6IGRpZmYgPiBkdXJhdGlvbldlZWtcclxuICAgID8gJ01NL0REJ1xyXG4gICAgOiBkaWZmID4gZHVyYXRpb25EYXlcclxuICAgID8gJ01NL0REIGhoYSdcclxuICAgIDogZGlmZiA+IGR1cmF0aW9uSG91clxyXG4gICAgPyAnaGg6bW1hJ1xyXG4gICAgOiAnaGg6bW06c3NhJztcclxufVxyXG5cclxuLyoqXHJcbiAqIFNhbml0eSBjaGVjayBvbiBmaWx0ZXJzIHRvIHByZXBhcmUgZm9yIHNhdmVcclxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vZmlsdGVyLXV0aWxzJykuaXNWYWxpZEZpbHRlclZhbHVlfVxyXG4gKi9cclxuLyogZXNsaW50LWRpc2FibGUgY29tcGxleGl0eSAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaXNWYWxpZEZpbHRlclZhbHVlKHR5cGUsIHZhbHVlKSB7XHJcbiAgaWYgKCF0eXBlKSB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG4gIHN3aXRjaCAodHlwZSkge1xyXG4gICAgY2FzZSBGSUxURVJfVFlQRVMuc2VsZWN0OlxyXG4gICAgICByZXR1cm4gdmFsdWUgPT09IHRydWUgfHwgdmFsdWUgPT09IGZhbHNlO1xyXG5cclxuICAgIGNhc2UgRklMVEVSX1RZUEVTLnJhbmdlOlxyXG4gICAgY2FzZSBGSUxURVJfVFlQRVMudGltZVJhbmdlOlxyXG4gICAgICByZXR1cm4gQXJyYXkuaXNBcnJheSh2YWx1ZSkgJiYgdmFsdWUuZXZlcnkodiA9PiB2ICE9PSBudWxsICYmICFpc05hTih2KSk7XHJcblxyXG4gICAgY2FzZSBGSUxURVJfVFlQRVMubXVsdGlTZWxlY3Q6XHJcbiAgICAgIHJldHVybiBBcnJheS5pc0FycmF5KHZhbHVlKSAmJiBCb29sZWFuKHZhbHVlLmxlbmd0aCk7XHJcblxyXG4gICAgY2FzZSBGSUxURVJfVFlQRVMuaW5wdXQ6XHJcbiAgICAgIHJldHVybiBCb29sZWFuKHZhbHVlLmxlbmd0aCk7XHJcblxyXG4gICAgY2FzZSBGSUxURVJfVFlQRVMucG9seWdvbjpcclxuICAgICAgY29uc3QgY29vcmRpbmF0ZXMgPSBnZXQodmFsdWUsIFsnZ2VvbWV0cnknLCAnY29vcmRpbmF0ZXMnXSk7XHJcbiAgICAgIHJldHVybiBCb29sZWFuKHZhbHVlICYmIHZhbHVlLmlkICYmIGNvb3JkaW5hdGVzKTtcclxuXHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKlxyXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi9maWx0ZXItdXRpbHMnKS5nZXRGaWx0ZXJQbG90fVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEZpbHRlclBsb3QoZmlsdGVyLCBhbGxEYXRhKSB7XHJcbiAgaWYgKGZpbHRlci5wbG90VHlwZSA9PT0gUExPVF9UWVBFUy5oaXN0b2dyYW0gfHwgIWZpbHRlci55QXhpcykge1xyXG4gICAgLy8gaGlzdG9ncmFtIHNob3VsZCBiZSBjYWxjdWxhdGVkIHdoZW4gY3JlYXRlIGZpbHRlclxyXG4gICAgcmV0dXJuIHt9O1xyXG4gIH1cclxuXHJcbiAgY29uc3Qge21hcHBlZFZhbHVlID0gW119ID0gZmlsdGVyO1xyXG4gIGNvbnN0IHt5QXhpc30gPSBmaWx0ZXI7XHJcblxyXG4gIC8vIHJldHVybiBsaW5lQ2hhcnRcclxuICBjb25zdCBzZXJpZXMgPSBhbGxEYXRhXHJcbiAgICAubWFwKChkLCBpKSA9PiAoe1xyXG4gICAgICB4OiBtYXBwZWRWYWx1ZVtpXSxcclxuICAgICAgeTogZFt5QXhpcy50YWJsZUZpZWxkSW5kZXggLSAxXVxyXG4gICAgfSkpXHJcbiAgICAuZmlsdGVyKCh7eCwgeX0pID0+IE51bWJlci5pc0Zpbml0ZSh4KSAmJiBOdW1iZXIuaXNGaW5pdGUoeSkpXHJcbiAgICAuc29ydCgoYSwgYikgPT4gYXNjZW5kaW5nKGEueCwgYi54KSk7XHJcblxyXG4gIGNvbnN0IHlEb21haW4gPSBleHRlbnQoc2VyaWVzLCBkID0+IGQueSk7XHJcbiAgY29uc3QgeERvbWFpbiA9IFtzZXJpZXNbMF0ueCwgc2VyaWVzW3Nlcmllcy5sZW5ndGggLSAxXS54XTtcclxuXHJcbiAgcmV0dXJuIHtsaW5lQ2hhcnQ6IHtzZXJpZXMsIHlEb21haW4sIHhEb21haW59LCB5QXhpc307XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXREZWZhdWx0RmlsdGVyUGxvdFR5cGUoZmlsdGVyKSB7XHJcbiAgY29uc3QgZmlsdGVyUGxvdFR5cGVzID0gU3VwcG9ydGVkUGxvdFR5cGVbZmlsdGVyLnR5cGVdO1xyXG4gIGlmICghZmlsdGVyUGxvdFR5cGVzKSB7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIGlmICghZmlsdGVyLnlBeGlzKSB7XHJcbiAgICByZXR1cm4gZmlsdGVyUGxvdFR5cGVzLmRlZmF1bHQ7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gZmlsdGVyUGxvdFR5cGVzW2ZpbHRlci55QXhpcy50eXBlXSB8fCBudWxsO1xyXG59XHJcblxyXG4vKipcclxuICpcclxuICogQHBhcmFtIGRhdGFzZXRJZHMgbGlzdCBvZiBkYXRhc2V0IGlkcyB0byBiZSBmaWx0ZXJlZFxyXG4gKiBAcGFyYW0gZGF0YXNldHMgYWxsIGRhdGFzZXRzXHJcbiAqIEBwYXJhbSBmaWx0ZXJzIGFsbCBmaWx0ZXJzIHRvIGJlIGFwcGxpZWQgdG8gZGF0YXNldHNcclxuICogQHJldHVybiBkYXRhc2V0cyAtIG5ldyB1cGRhdGVkIGRhdGFzZXRzXHJcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL2ZpbHRlci11dGlscycpLmFwcGx5RmlsdGVyc1RvRGF0YXNldHN9XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYXBwbHlGaWx0ZXJzVG9EYXRhc2V0cyhkYXRhc2V0SWRzLCBkYXRhc2V0cywgZmlsdGVycywgbGF5ZXJzKSB7XHJcbiAgY29uc3QgZGF0YUlkcyA9IHRvQXJyYXkoZGF0YXNldElkcyk7XHJcbiAgcmV0dXJuIGRhdGFJZHMucmVkdWNlKChhY2MsIGRhdGFJZCkgPT4ge1xyXG4gICAgY29uc3QgbGF5ZXJzVG9GaWx0ZXIgPSAobGF5ZXJzIHx8IFtdKS5maWx0ZXIobCA9PiBsLmNvbmZpZy5kYXRhSWQgPT09IGRhdGFJZCk7XHJcbiAgICBjb25zdCBhcHBsaWVkRmlsdGVycyA9IGZpbHRlcnMuZmlsdGVyKGQgPT4gc2hvdWxkQXBwbHlGaWx0ZXIoZCwgZGF0YUlkKSk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgLi4uYWNjLFxyXG4gICAgICBbZGF0YUlkXTogZmlsdGVyRGF0YXNldChkYXRhc2V0c1tkYXRhSWRdLCBhcHBsaWVkRmlsdGVycywgbGF5ZXJzVG9GaWx0ZXIsIHt9KVxyXG4gICAgfTtcclxuICB9LCBkYXRhc2V0cyk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBcHBsaWVzIGEgbmV3IGZpZWxkIG5hbWUgdmFsdWUgdG8gZmllbHRlciBhbmQgdXBkYXRlIGJvdGggZmlsdGVyIGFuZCBkYXRhc2V0XHJcbiAqIEBwYXJhbSBmaWx0ZXIgLSB0byBiZSBhcHBsaWVkIHRoZSBuZXcgZmllbGQgbmFtZSBvblxyXG4gKiBAcGFyYW0gZGF0YXNldCAtIGRhdGFzZXQgdGhlIGZpZWxkIGJlbG9uZ3MgdG9cclxuICogQHBhcmFtIGZpZWxkTmFtZSAtIGZpZWxkLm5hbWVcclxuICogQHBhcmFtIGZpbHRlckRhdGFzZXRJbmRleCAtIGZpZWxkLm5hbWVcclxuICogQHBhcmFtIG9wdGlvblxyXG4gKiBAcmV0dXJuIC0ge2ZpbHRlciwgZGF0YXNldHN9XHJcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL2ZpbHRlci11dGlscycpLmFwcGx5RmlsdGVyRmllbGROYW1lfVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5RmlsdGVyRmllbGROYW1lKGZpbHRlciwgZGF0YXNldCwgZmllbGROYW1lLCBmaWx0ZXJEYXRhc2V0SW5kZXggPSAwLCBvcHRpb24pIHtcclxuICAvLyB1c2luZyBmaWx0ZXJEYXRhc2V0SW5kZXggd2UgY2FuIGZpbHRlciBvbmx5IHRoZSBzcGVjaWZpZWQgZGF0YXNldFxyXG4gIGNvbnN0IG1lcmdlRG9tYWluID0gb3B0aW9uICYmIG9wdGlvbi5oYXNPd25Qcm9wZXJ0eSgnbWVyZ2VEb21haW4nKSA/IG9wdGlvbi5tZXJnZURvbWFpbiA6IGZhbHNlO1xyXG4gIGNvbnN0IHtmaWVsZHMsIGFsbERhdGF9ID0gZGF0YXNldDtcclxuXHJcbiAgY29uc3QgZmllbGRJbmRleCA9IGZpZWxkcy5maW5kSW5kZXgoZiA9PiBmLm5hbWUgPT09IGZpZWxkTmFtZSk7XHJcbiAgLy8gaWYgbm8gZmllbGQgd2l0aCBzYW1lIG5hbWUgaXMgZm91bmQsIG1vdmUgdG8gdGhlIG5leHQgZGF0YXNldHNcclxuICBpZiAoZmllbGRJbmRleCA9PT0gLTEpIHtcclxuICAgIC8vIHRocm93IG5ldyBFcnJvcihgZmllbGRJbmRleCBub3QgZm91bmQuIERhdGFzZXQgbXVzdCBjb250YWluIGEgcHJvcGVydHkgd2l0aCBuYW1lOiAke2ZpZWxkTmFtZX1gKTtcclxuICAgIHJldHVybiB7ZmlsdGVyOiBudWxsLCBkYXRhc2V0fTtcclxuICB9XHJcblxyXG4gIC8vIFRPRE86IHZhbGlkYXRlIGZpZWxkIHR5cGVcclxuICBjb25zdCBmaWVsZCA9IGZpZWxkc1tmaWVsZEluZGV4XTtcclxuICBjb25zdCBmaWx0ZXJQcm9wcyA9IGZpZWxkLmhhc093blByb3BlcnR5KCdmaWx0ZXJQcm9wcycpXHJcbiAgICA/IGZpZWxkLmZpbHRlclByb3BzXHJcbiAgICA6IGdldEZpbHRlclByb3BzKGFsbERhdGEsIGZpZWxkKTtcclxuXHJcbiAgY29uc3QgbmV3RmlsdGVyID0ge1xyXG4gICAgLi4uKG1lcmdlRG9tYWluID8gbWVyZ2VGaWx0ZXJEb21haW5TdGVwKGZpbHRlciwgZmlsdGVyUHJvcHMpIDogey4uLmZpbHRlciwgLi4uZmlsdGVyUHJvcHN9KSxcclxuICAgIG5hbWU6IE9iamVjdC5hc3NpZ24oWy4uLnRvQXJyYXkoZmlsdGVyLm5hbWUpXSwge1tmaWx0ZXJEYXRhc2V0SW5kZXhdOiBmaWVsZC5uYW1lfSksXHJcbiAgICBmaWVsZElkeDogT2JqZWN0LmFzc2lnbihbLi4udG9BcnJheShmaWx0ZXIuZmllbGRJZHgpXSwge1xyXG4gICAgICBbZmlsdGVyRGF0YXNldEluZGV4XTogZmllbGQudGFibGVGaWVsZEluZGV4IC0gMVxyXG4gICAgfSksXHJcbiAgICAvLyBUT0RPLCBzaW5jZSB3ZSBhbGxvdyB0byBhZGQgbXVsdGlwbGUgZmllbGRzIHRvIGEgZmlsdGVyIHdlIGNhbiBubyBsb25nZXIgZnJlZXplIHRoZSBmaWx0ZXJcclxuICAgIGZyZWV6ZTogdHJ1ZVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGZpZWxkV2l0aEZpbHRlclByb3BzID0ge1xyXG4gICAgLi4uZmllbGQsXHJcbiAgICBmaWx0ZXJQcm9wc1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG5ld0ZpZWxkcyA9IE9iamVjdC5hc3NpZ24oWy4uLmZpZWxkc10sIHtbZmllbGRJbmRleF06IGZpZWxkV2l0aEZpbHRlclByb3BzfSk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBmaWx0ZXI6IG5ld0ZpbHRlcixcclxuICAgIGRhdGFzZXQ6IHtcclxuICAgICAgLi4uZGF0YXNldCxcclxuICAgICAgZmllbGRzOiBuZXdGaWVsZHNcclxuICAgIH1cclxuICB9O1xyXG59XHJcblxyXG4vKipcclxuICogTWVyZ2Ugb25lIGZpbHRlciB3aXRoIG90aGVyIGZpbHRlciBwcm9wIGRvbWFpblxyXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi9maWx0ZXItdXRpbHMnKS5tZXJnZUZpbHRlckRvbWFpblN0ZXB9XHJcbiAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBjb21wbGV4aXR5ICovXHJcbmV4cG9ydCBmdW5jdGlvbiBtZXJnZUZpbHRlckRvbWFpblN0ZXAoZmlsdGVyLCBmaWx0ZXJQcm9wcykge1xyXG4gIGlmICghZmlsdGVyKSB7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIGlmICghZmlsdGVyUHJvcHMpIHtcclxuICAgIHJldHVybiBmaWx0ZXI7XHJcbiAgfVxyXG5cclxuICBpZiAoKGZpbHRlci5maWVsZFR5cGUgJiYgZmlsdGVyLmZpZWxkVHlwZSAhPT0gZmlsdGVyUHJvcHMuZmllbGRUeXBlKSB8fCAhZmlsdGVyUHJvcHMuZG9tYWluKSB7XHJcbiAgICByZXR1cm4gZmlsdGVyO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgY29tYmluZWREb21haW4gPSAhZmlsdGVyLmRvbWFpblxyXG4gICAgPyBmaWx0ZXJQcm9wcy5kb21haW5cclxuICAgIDogWy4uLihmaWx0ZXIuZG9tYWluIHx8IFtdKSwgLi4uKGZpbHRlclByb3BzLmRvbWFpbiB8fCBbXSldLnNvcnQoKGEsIGIpID0+IGEgLSBiKTtcclxuXHJcbiAgY29uc3QgbmV3RmlsdGVyID0ge1xyXG4gICAgLi4uZmlsdGVyLFxyXG4gICAgLi4uZmlsdGVyUHJvcHMsXHJcbiAgICBkb21haW46IFtjb21iaW5lZERvbWFpblswXSwgY29tYmluZWREb21haW5bY29tYmluZWREb21haW4ubGVuZ3RoIC0gMV1dXHJcbiAgfTtcclxuXHJcbiAgc3dpdGNoIChmaWx0ZXJQcm9wcy5maWVsZFR5cGUpIHtcclxuICAgIGNhc2UgQUxMX0ZJRUxEX1RZUEVTLnN0cmluZzpcclxuICAgIGNhc2UgQUxMX0ZJRUxEX1RZUEVTLmRhdGU6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4ubmV3RmlsdGVyLFxyXG4gICAgICAgIGRvbWFpbjogdW5pcXVlKGNvbWJpbmVkRG9tYWluKS5zb3J0KClcclxuICAgICAgfTtcclxuXHJcbiAgICBjYXNlIEFMTF9GSUVMRF9UWVBFUy50aW1lc3RhbXA6XHJcbiAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgY29uc3Qgc3RlcCA9IGZpbHRlci5zdGVwIDwgZmlsdGVyUHJvcHMuc3RlcCA/IGZpbHRlci5zdGVwIDogZmlsdGVyUHJvcHMuc3RlcDtcclxuXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4ubmV3RmlsdGVyLFxyXG4gICAgICAgIHN0ZXBcclxuICAgICAgfTtcclxuICAgIGNhc2UgQUxMX0ZJRUxEX1RZUEVTLnJlYWw6XHJcbiAgICBjYXNlIEFMTF9GSUVMRF9UWVBFUy5pbnRlZ2VyOlxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIG5ld0ZpbHRlcjtcclxuICB9XHJcbn1cclxuLyogZXNsaW50LWVuYWJsZSBjb21wbGV4aXR5ICovXHJcblxyXG4vKipcclxuICogR2VuZXJhdGVzIHBvbHlnb24gZmlsdGVyXHJcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL2ZpbHRlci11dGlscycpLmZlYXR1cmVUb0ZpbHRlclZhbHVlfVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGZlYXR1cmVUb0ZpbHRlclZhbHVlID0gKGZlYXR1cmUsIGZpbHRlcklkLCBwcm9wZXJ0aWVzID0ge30pID0+ICh7XHJcbiAgLi4uZmVhdHVyZSxcclxuICBpZDogZmVhdHVyZS5pZCxcclxuICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAuLi5mZWF0dXJlLnByb3BlcnRpZXMsXHJcbiAgICAuLi5wcm9wZXJ0aWVzLFxyXG4gICAgZmlsdGVySWRcclxuICB9XHJcbn0pO1xyXG5cclxuLyoqXHJcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL2ZpbHRlci11dGlscycpLmdldEZpbHRlcklkSW5GZWF0dXJlfVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGdldEZpbHRlcklkSW5GZWF0dXJlID0gZiA9PiBnZXQoZiwgWydwcm9wZXJ0aWVzJywgJ2ZpbHRlcklkJ10pO1xyXG5cclxuLyoqXHJcbiAqIEdlbmVyYXRlcyBwb2x5Z29uIGZpbHRlclxyXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi9maWx0ZXItdXRpbHMnKS5nZW5lcmF0ZVBvbHlnb25GaWx0ZXJ9XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVQb2x5Z29uRmlsdGVyKGxheWVycywgZmVhdHVyZSkge1xyXG4gIGNvbnN0IGRhdGFJZCA9IGxheWVycy5tYXAobCA9PiBsLmNvbmZpZy5kYXRhSWQpLmZpbHRlcihkID0+IGQpO1xyXG4gIGNvbnN0IGxheWVySWQgPSBsYXllcnMubWFwKGwgPT4gbC5pZCk7XHJcbiAgY29uc3QgbmFtZSA9IGxheWVycy5tYXAobCA9PiBsLmNvbmZpZy5sYWJlbCk7XHJcbiAgLy8gQHRzLWlnbm9yZVxyXG4gIGNvbnN0IGZpbHRlciA9IGdldERlZmF1bHRGaWx0ZXIoZGF0YUlkKTtcclxuICByZXR1cm4ge1xyXG4gICAgLi4uZmlsdGVyLFxyXG4gICAgZml4ZWREb21haW46IHRydWUsXHJcbiAgICB0eXBlOiBGSUxURVJfVFlQRVMucG9seWdvbixcclxuICAgIG5hbWUsXHJcbiAgICBsYXllcklkLFxyXG4gICAgdmFsdWU6IGZlYXR1cmVUb0ZpbHRlclZhbHVlKGZlYXR1cmUsIGZpbHRlci5pZCwge2lzVmlzaWJsZTogdHJ1ZX0pXHJcbiAgfTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFJ1biBmaWx0ZXIgZW50aXJlbHkgb24gQ1BVXHJcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL2ZpbHRlci11dGlscycpLmZpbHRlckRhdGFzZXRDUFV9XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZmlsdGVyRGF0YXNldENQVShzdGF0ZSwgZGF0YUlkKSB7XHJcbiAgY29uc3QgZGF0YXNldEZpbHRlcnMgPSBzdGF0ZS5maWx0ZXJzLmZpbHRlcihmID0+IGYuZGF0YUlkLmluY2x1ZGVzKGRhdGFJZCkpO1xyXG4gIGNvbnN0IHNlbGVjdGVkRGF0YXNldCA9IHN0YXRlLmRhdGFzZXRzW2RhdGFJZF07XHJcblxyXG4gIGlmICghc2VsZWN0ZWREYXRhc2V0KSB7XHJcbiAgICByZXR1cm4gc3RhdGU7XHJcbiAgfVxyXG5cclxuICBjb25zdCBvcHQgPSB7XHJcbiAgICBjcHVPbmx5OiB0cnVlLFxyXG4gICAgaWdub3JlRG9tYWluOiB0cnVlXHJcbiAgfTtcclxuXHJcbiAgaWYgKCFkYXRhc2V0RmlsdGVycy5sZW5ndGgpIHtcclxuICAgIC8vIG5vIGZpbHRlclxyXG4gICAgY29uc3QgZmlsdGVyZWQgPSB7XHJcbiAgICAgIC4uLnNlbGVjdGVkRGF0YXNldCxcclxuICAgICAgZmlsdGVyZWRJZHhDUFU6IHNlbGVjdGVkRGF0YXNldC5hbGxJbmRleGVzLFxyXG4gICAgICBmaWx0ZXJSZWNvcmRDUFU6IGdldEZpbHRlclJlY29yZChkYXRhSWQsIHN0YXRlLmZpbHRlcnMsIG9wdClcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIHNldChbJ2RhdGFzZXRzJywgZGF0YUlkXSwgZmlsdGVyZWQsIHN0YXRlKTtcclxuICB9XHJcblxyXG4gIC8vIG5vIGdwdSBmaWx0ZXJcclxuICBpZiAoIWRhdGFzZXRGaWx0ZXJzLmZpbmQoZiA9PiBmLmdwdSkpIHtcclxuICAgIGNvbnN0IGZpbHRlcmVkID0ge1xyXG4gICAgICAuLi5zZWxlY3RlZERhdGFzZXQsXHJcbiAgICAgIGZpbHRlcmVkSWR4Q1BVOiBzZWxlY3RlZERhdGFzZXQuZmlsdGVyZWRJbmRleCxcclxuICAgICAgZmlsdGVyUmVjb3JkQ1BVOiBnZXRGaWx0ZXJSZWNvcmQoZGF0YUlkLCBzdGF0ZS5maWx0ZXJzLCBvcHQpXHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIHNldChbJ2RhdGFzZXRzJywgZGF0YUlkXSwgZmlsdGVyZWQsIHN0YXRlKTtcclxuICB9XHJcblxyXG4gIC8vIG1ha2UgYSBjb3B5IGZvciBjcHUgZmlsdGVyaW5nXHJcbiAgY29uc3QgY29waWVkID0ge1xyXG4gICAgLi4uc2VsZWN0ZWREYXRhc2V0LFxyXG4gICAgZmlsdGVyUmVjb3JkOiBzZWxlY3RlZERhdGFzZXQuZmlsdGVyUmVjb3JkQ1BVLFxyXG4gICAgZmlsdGVyZWRJbmRleDogc2VsZWN0ZWREYXRhc2V0LmZpbHRlcmVkSWR4Q1BVIHx8IFtdXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZmlsdGVyZWQgPSBmaWx0ZXJEYXRhc2V0KGNvcGllZCwgc3RhdGUuZmlsdGVycywgc3RhdGUubGF5ZXJzLCBvcHQpO1xyXG5cclxuICBjb25zdCBjcHVGaWx0ZXJlZERhdGFzZXQgPSB7XHJcbiAgICAuLi5zZWxlY3RlZERhdGFzZXQsXHJcbiAgICBmaWx0ZXJlZElkeENQVTogZmlsdGVyZWQuZmlsdGVyZWRJbmRleCxcclxuICAgIGZpbHRlclJlY29yZENQVTogZmlsdGVyZWQuZmlsdGVyUmVjb3JkXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIHNldChbJ2RhdGFzZXRzJywgZGF0YUlkXSwgY3B1RmlsdGVyZWREYXRhc2V0LCBzdGF0ZSk7XHJcbn1cclxuIl19