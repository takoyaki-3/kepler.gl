"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getValueFunc = getValueFunc;
exports.getScaleFunctor = getScaleFunctor;
exports.getGetValue = getGetValue;
exports.getDimensionSortedBins = getDimensionSortedBins;
exports.getDimensionValueDomain = getDimensionValueDomain;
exports.getDimensionScale = getDimensionScale;
exports.getAggregatedData = getAggregatedData;
exports["default"] = exports.defaultDimensions = exports.defaultElevationDimension = exports.defaultColorDimension = exports.defaultAggregation = exports.DECK_AGGREGATION_MAP = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _aggregationLayers = require("@deck.gl/aggregation-layers");

var _window = require("global/window");

var _enhancedBinSorter = _interopRequireDefault(require("./enhanced-bin-sorter"));

var _aggregateUtils = require("../../utils/aggregate-utils");

var _defaultSettings = require("../../constants/default-settings");

var _DECK_AGGREGATION_MAP;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var DECK_AGGREGATION_MAP = (_DECK_AGGREGATION_MAP = {}, (0, _defineProperty2["default"])(_DECK_AGGREGATION_MAP, _aggregationLayers.AGGREGATION_OPERATION.SUM, _defaultSettings.AGGREGATION_TYPES.sum), (0, _defineProperty2["default"])(_DECK_AGGREGATION_MAP, _aggregationLayers.AGGREGATION_OPERATION.MEAN, _defaultSettings.AGGREGATION_TYPES.average), (0, _defineProperty2["default"])(_DECK_AGGREGATION_MAP, _aggregationLayers.AGGREGATION_OPERATION.MIN, _defaultSettings.AGGREGATION_TYPES.minimum), (0, _defineProperty2["default"])(_DECK_AGGREGATION_MAP, _aggregationLayers.AGGREGATION_OPERATION.MAX, _defaultSettings.AGGREGATION_TYPES.maximum), _DECK_AGGREGATION_MAP);
exports.DECK_AGGREGATION_MAP = DECK_AGGREGATION_MAP;

function getValueFunc(aggregation, accessor) {
  if (!aggregation || !_aggregationLayers.AGGREGATION_OPERATION[aggregation.toUpperCase()]) {
    _window.console.warn("Aggregation ".concat(aggregation, " is not supported"));
  }

  var op = _aggregationLayers.AGGREGATION_OPERATION[aggregation.toUpperCase()] || _aggregationLayers.AGGREGATION_OPERATION.SUM;

  var keplerOp = DECK_AGGREGATION_MAP[op];
  return function (pts) {
    return (0, _aggregateUtils.aggregate)(pts.map(accessor), keplerOp);
  };
}

function getScaleFunctor(scaleType) {
  if (!scaleType || !_defaultSettings.SCALE_FUNC[scaleType]) {
    _window.console.warn("Scale ".concat(scaleType, " is not supported"));
  }

  return _defaultSettings.SCALE_FUNC[scaleType] || _defaultSettings.SCALE_FUNC.quantize;
}

function nop() {}

function getGetValue(step, props, dimensionUpdater) {
  var key = dimensionUpdater.key;
  var _step$triggers = step.triggers,
      value = _step$triggers.value,
      weight = _step$triggers.weight,
      aggregation = _step$triggers.aggregation;
  var getValue = props[value.prop];

  if (getValue === null) {
    // If `getValue` is not provided from props, build it with aggregation and weight.
    getValue = getValueFunc(props[aggregation.prop], props[weight.prop]);
  }

  if (getValue) {
    this._setDimensionState(key, {
      getValue: getValue
    });
  }
}

function getDimensionSortedBins(step, props, dimensionUpdater) {
  var key = dimensionUpdater.key;
  var getValue = this.state.dimensions[key].getValue;
  var sortedBins = new _enhancedBinSorter["default"](this.state.layerData.data || [], {
    getValue: getValue,
    filterData: props._filterData
  });

  this._setDimensionState(key, {
    sortedBins: sortedBins
  });
}

function getDimensionValueDomain(step, props, dimensionUpdater) {
  var key = dimensionUpdater.key;
  var _step$triggers2 = step.triggers,
      lowerPercentile = _step$triggers2.lowerPercentile,
      upperPercentile = _step$triggers2.upperPercentile,
      scaleType = _step$triggers2.scaleType;

  if (!this.state.dimensions[key].sortedBins) {
    // the previous step should set sortedBins, if not, something went wrong
    return;
  } // for log and sqrt scale, returns linear domain by default
  // TODO: support other scale function domain in bin sorter


  var valueDomain = this.state.dimensions[key].sortedBins.getValueDomainByScale(props[scaleType.prop], [props[lowerPercentile.prop], props[upperPercentile.prop]]);

  this._setDimensionState(key, {
    valueDomain: valueDomain
  });
}

function getDimensionScale(step, props, dimensionUpdater) {
  var key = dimensionUpdater.key;
  var _step$triggers3 = step.triggers,
      domain = _step$triggers3.domain,
      range = _step$triggers3.range,
      scaleType = _step$triggers3.scaleType;
  var onSet = step.onSet;

  if (!this.state.dimensions[key].valueDomain) {
    // the previous step should set valueDomain, if not, something went wrong
    return;
  }

  var dimensionRange = props[range.prop];
  var dimensionDomain = props[domain.prop] || this.state.dimensions[key].valueDomain;
  var scaleFunctor = getScaleFunctor(scaleType && props[scaleType.prop])();
  var scaleFunc = scaleFunctor.domain(dimensionDomain).range(dimensionRange);

  if ((0, _typeof2["default"])(onSet) === 'object' && typeof props[onSet.props] === 'function') {
    props[onSet.props](scaleFunc.domain());
  }

  this._setDimensionState(key, {
    scaleFunc: scaleFunc
  });
}

function normalizeResult() {
  var result = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  // support previous hexagonAggregator API
  if (result.hexagons) {
    return Object.assign({
      data: result.hexagons
    }, result);
  } else if (result.layerData) {
    return Object.assign({
      data: result.layerData
    }, result);
  }

  return result;
}

function getAggregatedData(step, props, aggregation, aggregationParams) {
  var aggr = step.triggers.aggregator;
  var aggregator = props[aggr.prop]; // result should contain a data array and other props
  // result = {data: [], ...other props}

  var result = aggregator(props, aggregationParams);
  this.setState({
    layerData: normalizeResult(result)
  });
}

var defaultAggregation = {
  key: 'position',
  updateSteps: [{
    key: 'aggregate',
    triggers: {
      cellSize: {
        prop: 'cellSize'
      },
      position: {
        prop: 'getPosition',
        updateTrigger: 'getPosition'
      },
      aggregator: {
        prop: 'gridAggregator'
      }
    },
    updater: getAggregatedData
  }]
};
exports.defaultAggregation = defaultAggregation;

function getSubLayerAccessor(dimensionState, dimension, layerProps) {
  return function (cell) {
    var sortedBins = dimensionState.sortedBins,
        scaleFunc = dimensionState.scaleFunc;
    var bin = sortedBins.binMap[cell.index];

    if (bin && bin.counts === 0) {
      // no points left in bin after filtering
      return dimension.nullValue;
    }

    var cv = bin && bin.value;
    var domain = scaleFunc.domain();
    var isValueInDomain = cv >= domain[0] && cv <= domain[domain.length - 1]; // if cell value is outside domain, set alpha to 0

    return isValueInDomain ? scaleFunc(cv) : dimension.nullValue;
  };
}

var defaultColorDimension = {
  key: 'fillColor',
  accessor: 'getFillColor',
  getPickingInfo: function getPickingInfo(dimensionState, cell) {
    var sortedBins = dimensionState.sortedBins;
    var colorValue = sortedBins.binMap[cell.index] && sortedBins.binMap[cell.index].value;
    return {
      colorValue: colorValue
    };
  },
  nullValue: [0, 0, 0, 0],
  updateSteps: [{
    key: 'getValue',
    triggers: {
      value: {
        prop: 'getColorValue',
        updateTrigger: 'getColorValue'
      },
      weight: {
        prop: 'getColorWeight',
        updateTrigger: 'getColorWeight'
      },
      aggregation: {
        prop: 'colorAggregation'
      }
    },
    updater: getGetValue
  }, {
    key: 'getBins',
    triggers: {
      _filterData: {
        prop: '_filterData',
        updateTrigger: '_filterData'
      }
    },
    updater: getDimensionSortedBins
  }, {
    key: 'getDomain',
    triggers: {
      lowerPercentile: {
        prop: 'lowerPercentile'
      },
      upperPercentile: {
        prop: 'upperPercentile'
      },
      scaleType: {
        prop: 'colorScaleType'
      }
    },
    updater: getDimensionValueDomain
  }, {
    key: 'getScaleFunc',
    triggers: {
      domain: {
        prop: 'colorDomain'
      },
      range: {
        prop: 'colorRange'
      },
      scaleType: {
        prop: 'colorScaleType'
      }
    },
    onSet: {
      props: 'onSetColorDomain'
    },
    updater: getDimensionScale
  }],
  getSubLayerAccessor: getSubLayerAccessor
};
exports.defaultColorDimension = defaultColorDimension;
var defaultElevationDimension = {
  key: 'elevation',
  accessor: 'getElevation',
  getPickingInfo: function getPickingInfo(dimensionState, cell) {
    var sortedBins = dimensionState.sortedBins;
    var elevationValue = sortedBins.binMap[cell.index] && sortedBins.binMap[cell.index].value;
    return {
      elevationValue: elevationValue
    };
  },
  nullValue: -1,
  updateSteps: [{
    key: 'getValue',
    triggers: {
      value: {
        prop: 'getElevationValue',
        updateTrigger: 'getElevationValue'
      },
      weight: {
        prop: 'getElevationWeight',
        updateTrigger: 'getElevationWeight'
      },
      aggregation: {
        prop: 'elevationAggregation'
      }
    },
    updater: getGetValue
  }, {
    key: 'getBins',
    triggers: {
      _filterData: {
        prop: '_filterData',
        updateTrigger: '_filterData'
      }
    },
    updater: getDimensionSortedBins
  }, {
    key: 'getDomain',
    triggers: {
      lowerPercentile: {
        prop: 'elevationLowerPercentile'
      },
      upperPercentile: {
        prop: 'elevationUpperPercentile'
      },
      scaleType: {
        prop: 'elevationScaleType'
      }
    },
    updater: getDimensionValueDomain
  }, {
    key: 'getScaleFunc',
    triggers: {
      domain: {
        prop: 'elevationDomain'
      },
      range: {
        prop: 'elevationRange'
      },
      scaleType: {
        prop: 'elevationScaleType'
      }
    },
    onSet: {
      props: 'onSetElevationDomain'
    },
    updater: getDimensionScale
  }],
  getSubLayerAccessor: getSubLayerAccessor
};
exports.defaultElevationDimension = defaultElevationDimension;
var _defaultDimensions = [defaultColorDimension, defaultElevationDimension];
exports.defaultDimensions = _defaultDimensions;

var CPUAggregator = /*#__PURE__*/function () {
  function CPUAggregator() {
    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    (0, _classCallCheck2["default"])(this, CPUAggregator);
    this.state = _objectSpread({
      layerData: {},
      dimensions: {// color: {
        //   getValue: null,
        //   domain: null,
        //   sortedBins: null,
        //   scaleFunc: nop
        // },
        // elevation: {
        //   getValue: null,
        //   domain: null,
        //   sortedBins: null,
        //   scaleFunc: nop
        // }
      }
    }, opts.initialState);
    this.dimensionUpdaters = {};
    this.aggregationUpdater = {};

    this._addDimension(opts.dimensions || _defaultDimensions);

    this._addAggregation(opts.aggregation || defaultAggregation);
  }

  (0, _createClass2["default"])(CPUAggregator, [{
    key: "updateAllDimensions",
    value: function updateAllDimensions(props) {
      var dimensionChanges = []; // update all dimensions

      for (var dim in this.dimensionUpdaters) {
        var updaters = this._accumulateUpdaters(0, props, this.dimensionUpdaters[dim]);

        dimensionChanges = dimensionChanges.concat(updaters);
      }

      dimensionChanges.forEach(function (f) {
        return typeof f === 'function' && f();
      });
    }
  }, {
    key: "updateAggregation",
    value: function updateAggregation(props, aggregationParams) {
      var updaters = this._accumulateUpdaters(0, props, this.aggregationUpdater);

      updaters.forEach(function (f) {
        return typeof f === 'function' && f(aggregationParams);
      });
    }
  }, {
    key: "updateState",
    value: function updateState(opts, aggregationParams) {
      var oldProps = opts.oldProps,
          props = opts.props,
          changeFlags = opts.changeFlags;
      var dimensionChanges = [];

      if (changeFlags.dataChanged) {
        // if data changed update everything
        this.updateAggregation(props, aggregationParams);
        this.updateAllDimensions(props);
        return this.state;
      }

      var aggregationChanges = this._getAggregationChanges(oldProps, props, changeFlags);

      if (aggregationChanges && aggregationChanges.length) {
        // get aggregatedData
        aggregationChanges.forEach(function (f) {
          return typeof f === 'function' && f(aggregationParams);
        });
        this.updateAllDimensions(props);
      } else {
        // only update dimensions
        dimensionChanges = this._getDimensionChanges(oldProps, props, changeFlags) || [];
        dimensionChanges.forEach(function (f) {
          return typeof f === 'function' && f();
        });
      }

      return this.state;
    } // Update private state

  }, {
    key: "setState",
    value: function setState(updateObject) {
      this.state = Object.assign({}, this.state, updateObject);
    } // Update private state.dimensions

  }, {
    key: "_setDimensionState",
    value: function _setDimensionState(key, updateObject) {
      this.setState({
        dimensions: Object.assign({}, this.state.dimensions, (0, _defineProperty2["default"])({}, key, Object.assign({}, this.state.dimensions[key], updateObject)))
      });
    }
  }, {
    key: "_addAggregation",
    value: function _addAggregation(aggregation) {
      this.aggregationUpdater = aggregation;
    }
  }, {
    key: "_addDimension",
    value: function _addDimension() {
      var _this = this;

      var dimensions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      dimensions.forEach(function (dimension) {
        var key = dimension.key;
        _this.dimensionUpdaters[key] = dimension;
      });
    }
  }, {
    key: "_needUpdateStep",
    value: function _needUpdateStep(dimensionStep, oldProps, props, changeFlags) {
      // whether need to update current dimension step
      // dimension step is the value, domain, scaleFunction of each dimension
      // each step is an object with properties links to layer prop and whether the prop is
      // controlled by updateTriggers
      return Object.values(dimensionStep.triggers).some(function (item) {
        if (item.updateTrigger) {
          // check based on updateTriggers change first
          return changeFlags.updateTriggersChanged && (changeFlags.updateTriggersChanged.all || changeFlags.updateTriggersChanged[item.updateTrigger]);
        } // fallback to direct comparison


        return oldProps[item.prop] !== props[item.prop];
      });
    }
  }, {
    key: "_accumulateUpdaters",
    value: function _accumulateUpdaters(step, props, dimension) {
      var updaters = [];

      for (var i = step; i < dimension.updateSteps.length; i++) {
        if (typeof dimension.updateSteps[i].updater === 'function') {
          updaters.push(dimension.updateSteps[i].updater.bind(this, dimension.updateSteps[i], props, dimension));
        }
      }

      return updaters;
    }
  }, {
    key: "_getAllUpdaters",
    value: function _getAllUpdaters(dimension, oldProps, props, changeFlags) {
      var _this2 = this;

      var updaters = [];
      var needUpdateStep = dimension.updateSteps.findIndex(function (step) {
        return _this2._needUpdateStep(step, oldProps, props, changeFlags);
      });

      if (needUpdateStep > -1) {
        updaters = updaters.concat(this._accumulateUpdaters(needUpdateStep, props, dimension));
      }

      return updaters;
    }
  }, {
    key: "_getAggregationChanges",
    value: function _getAggregationChanges(oldProps, props, changeFlags) {
      var updaters = this._getAllUpdaters(this.aggregationUpdater, oldProps, props, changeFlags);

      return updaters.length ? updaters : null;
    }
  }, {
    key: "_getDimensionChanges",
    value: function _getDimensionChanges(oldProps, props, changeFlags) {
      var updaters = []; // get dimension to be updated

      for (var key in this.dimensionUpdaters) {
        // return the first triggered updater for each dimension
        var dimension = this.dimensionUpdaters[key];

        var dimensionUpdaters = this._getAllUpdaters(dimension, oldProps, props, changeFlags);

        updaters = updaters.concat(dimensionUpdaters);
      }

      return updaters.length ? updaters : null;
    }
  }, {
    key: "getUpdateTriggers",
    value: function getUpdateTriggers(props) {
      var _this3 = this;

      var _updateTriggers = props.updateTriggers || {};

      var updateTriggers = {};

      var _loop = function _loop(key) {
        var _this3$dimensionUpdat = _this3.dimensionUpdaters[key],
            accessor = _this3$dimensionUpdat.accessor,
            updateSteps = _this3$dimensionUpdat.updateSteps; // fold dimension triggers into each accessor

        updateTriggers[accessor] = {};
        updateSteps.forEach(function (step) {
          Object.values(step.triggers || []).forEach(function (_ref) {
            var prop = _ref.prop,
                updateTrigger = _ref.updateTrigger;

            if (updateTrigger) {
              // if prop is based on updateTrigger e.g. getColorValue, getColorWeight
              // and updateTriggers is passed in from layer prop
              // fold the updateTriggers into accessor
              var fromProp = _updateTriggers[updateTrigger];

              if ((0, _typeof2["default"])(fromProp) === 'object' && !Array.isArray(fromProp)) {
                // if updateTrigger is an object spread it
                Object.assign(updateTriggers[accessor], fromProp);
              } else if (fromProp !== undefined) {
                updateTriggers[accessor][prop] = fromProp;
              }
            } else {
              // if prop is not based on updateTrigger
              updateTriggers[accessor][prop] = props[prop];
            }
          });
        });
      };

      for (var key in this.dimensionUpdaters) {
        _loop(key);
      }

      return updateTriggers;
    }
  }, {
    key: "getPickingInfo",
    value: function getPickingInfo(_ref2, layerProps) {
      var info = _ref2.info;
      var isPicked = info.picked && info.index > -1;
      var object = null;

      if (isPicked) {
        var cell = this.state.layerData.data[info.index];
        var binInfo = {};

        for (var key in this.dimensionUpdaters) {
          var getPickingInfo = this.dimensionUpdaters[key].getPickingInfo;

          if (typeof getPickingInfo === 'function') {
            binInfo = Object.assign({}, binInfo, getPickingInfo(this.state.dimensions[key], cell, layerProps));
          }
        }

        object = Object.assign(binInfo, cell, {
          points: cell.filteredPoints || cell.points
        });
      } // add bin  and  to info


      return Object.assign(info, {
        picked: Boolean(object),
        // override object with picked cell
        object: object
      });
    }
  }, {
    key: "getAccessor",
    value: function getAccessor(dimensionKey, layerProps) {
      if (!this.dimensionUpdaters.hasOwnProperty(dimensionKey)) {
        return nop;
      }

      return this.dimensionUpdaters[dimensionKey].getSubLayerAccessor(this.state.dimensions[dimensionKey], this.dimensionUpdaters[dimensionKey], layerProps);
    }
  }], [{
    key: "defaultDimensions",
    value: function defaultDimensions() {
      return _defaultDimensions;
    }
  }]);
  return CPUAggregator;
}();

exports["default"] = CPUAggregator;
CPUAggregator.getDimensionScale = getDimensionScale;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kZWNrZ2wtbGF5ZXJzL2xheWVyLXV0aWxzL2NwdS1hZ2dyZWdhdG9yLmpzIl0sIm5hbWVzIjpbIkRFQ0tfQUdHUkVHQVRJT05fTUFQIiwiQUdHUkVHQVRJT05fT1BFUkFUSU9OIiwiU1VNIiwiQUdHUkVHQVRJT05fVFlQRVMiLCJzdW0iLCJNRUFOIiwiYXZlcmFnZSIsIk1JTiIsIm1pbmltdW0iLCJNQVgiLCJtYXhpbXVtIiwiZ2V0VmFsdWVGdW5jIiwiYWdncmVnYXRpb24iLCJhY2Nlc3NvciIsInRvVXBwZXJDYXNlIiwiQ29uc29sZSIsIndhcm4iLCJvcCIsImtlcGxlck9wIiwicHRzIiwibWFwIiwiZ2V0U2NhbGVGdW5jdG9yIiwic2NhbGVUeXBlIiwiU0NBTEVfRlVOQyIsInF1YW50aXplIiwibm9wIiwiZ2V0R2V0VmFsdWUiLCJzdGVwIiwicHJvcHMiLCJkaW1lbnNpb25VcGRhdGVyIiwia2V5IiwidHJpZ2dlcnMiLCJ2YWx1ZSIsIndlaWdodCIsImdldFZhbHVlIiwicHJvcCIsIl9zZXREaW1lbnNpb25TdGF0ZSIsImdldERpbWVuc2lvblNvcnRlZEJpbnMiLCJzdGF0ZSIsImRpbWVuc2lvbnMiLCJzb3J0ZWRCaW5zIiwiRW5oYW5jZWRCaW5Tb3J0ZXIiLCJsYXllckRhdGEiLCJkYXRhIiwiZmlsdGVyRGF0YSIsIl9maWx0ZXJEYXRhIiwiZ2V0RGltZW5zaW9uVmFsdWVEb21haW4iLCJsb3dlclBlcmNlbnRpbGUiLCJ1cHBlclBlcmNlbnRpbGUiLCJ2YWx1ZURvbWFpbiIsImdldFZhbHVlRG9tYWluQnlTY2FsZSIsImdldERpbWVuc2lvblNjYWxlIiwiZG9tYWluIiwicmFuZ2UiLCJvblNldCIsImRpbWVuc2lvblJhbmdlIiwiZGltZW5zaW9uRG9tYWluIiwic2NhbGVGdW5jdG9yIiwic2NhbGVGdW5jIiwibm9ybWFsaXplUmVzdWx0IiwicmVzdWx0IiwiaGV4YWdvbnMiLCJPYmplY3QiLCJhc3NpZ24iLCJnZXRBZ2dyZWdhdGVkRGF0YSIsImFnZ3JlZ2F0aW9uUGFyYW1zIiwiYWdnciIsImFnZ3JlZ2F0b3IiLCJzZXRTdGF0ZSIsImRlZmF1bHRBZ2dyZWdhdGlvbiIsInVwZGF0ZVN0ZXBzIiwiY2VsbFNpemUiLCJwb3NpdGlvbiIsInVwZGF0ZVRyaWdnZXIiLCJ1cGRhdGVyIiwiZ2V0U3ViTGF5ZXJBY2Nlc3NvciIsImRpbWVuc2lvblN0YXRlIiwiZGltZW5zaW9uIiwibGF5ZXJQcm9wcyIsImNlbGwiLCJiaW4iLCJiaW5NYXAiLCJpbmRleCIsImNvdW50cyIsIm51bGxWYWx1ZSIsImN2IiwiaXNWYWx1ZUluRG9tYWluIiwibGVuZ3RoIiwiZGVmYXVsdENvbG9yRGltZW5zaW9uIiwiZ2V0UGlja2luZ0luZm8iLCJjb2xvclZhbHVlIiwiZGVmYXVsdEVsZXZhdGlvbkRpbWVuc2lvbiIsImVsZXZhdGlvblZhbHVlIiwiZGVmYXVsdERpbWVuc2lvbnMiLCJDUFVBZ2dyZWdhdG9yIiwib3B0cyIsImluaXRpYWxTdGF0ZSIsImRpbWVuc2lvblVwZGF0ZXJzIiwiYWdncmVnYXRpb25VcGRhdGVyIiwiX2FkZERpbWVuc2lvbiIsIl9hZGRBZ2dyZWdhdGlvbiIsImRpbWVuc2lvbkNoYW5nZXMiLCJkaW0iLCJ1cGRhdGVycyIsIl9hY2N1bXVsYXRlVXBkYXRlcnMiLCJjb25jYXQiLCJmb3JFYWNoIiwiZiIsIm9sZFByb3BzIiwiY2hhbmdlRmxhZ3MiLCJkYXRhQ2hhbmdlZCIsInVwZGF0ZUFnZ3JlZ2F0aW9uIiwidXBkYXRlQWxsRGltZW5zaW9ucyIsImFnZ3JlZ2F0aW9uQ2hhbmdlcyIsIl9nZXRBZ2dyZWdhdGlvbkNoYW5nZXMiLCJfZ2V0RGltZW5zaW9uQ2hhbmdlcyIsInVwZGF0ZU9iamVjdCIsImRpbWVuc2lvblN0ZXAiLCJ2YWx1ZXMiLCJzb21lIiwiaXRlbSIsInVwZGF0ZVRyaWdnZXJzQ2hhbmdlZCIsImFsbCIsImkiLCJwdXNoIiwiYmluZCIsIm5lZWRVcGRhdGVTdGVwIiwiZmluZEluZGV4IiwiX25lZWRVcGRhdGVTdGVwIiwiX2dldEFsbFVwZGF0ZXJzIiwiX3VwZGF0ZVRyaWdnZXJzIiwidXBkYXRlVHJpZ2dlcnMiLCJmcm9tUHJvcCIsIkFycmF5IiwiaXNBcnJheSIsInVuZGVmaW5lZCIsImluZm8iLCJpc1BpY2tlZCIsInBpY2tlZCIsIm9iamVjdCIsImJpbkluZm8iLCJwb2ludHMiLCJmaWx0ZXJlZFBvaW50cyIsIkJvb2xlYW4iLCJkaW1lbnNpb25LZXkiLCJoYXNPd25Qcm9wZXJ0eSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcUJBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOzs7Ozs7OztBQUVPLElBQU1BLG9CQUFvQix3RkFDOUJDLHlDQUFzQkMsR0FEUSxFQUNGQyxtQ0FBa0JDLEdBRGhCLDJEQUU5QkgseUNBQXNCSSxJQUZRLEVBRURGLG1DQUFrQkcsT0FGakIsMkRBRzlCTCx5Q0FBc0JNLEdBSFEsRUFHRkosbUNBQWtCSyxPQUhoQiwyREFJOUJQLHlDQUFzQlEsR0FKUSxFQUlGTixtQ0FBa0JPLE9BSmhCLHlCQUExQjs7O0FBT0EsU0FBU0MsWUFBVCxDQUFzQkMsV0FBdEIsRUFBbUNDLFFBQW5DLEVBQTZDO0FBQ2xELE1BQUksQ0FBQ0QsV0FBRCxJQUFnQixDQUFDWCx5Q0FBc0JXLFdBQVcsQ0FBQ0UsV0FBWixFQUF0QixDQUFyQixFQUF1RTtBQUNyRUMsb0JBQVFDLElBQVIsdUJBQTRCSixXQUE1QjtBQUNEOztBQUVELE1BQU1LLEVBQUUsR0FBR2hCLHlDQUFzQlcsV0FBVyxDQUFDRSxXQUFaLEVBQXRCLEtBQW9EYix5Q0FBc0JDLEdBQXJGOztBQUNBLE1BQU1nQixRQUFRLEdBQUdsQixvQkFBb0IsQ0FBQ2lCLEVBQUQsQ0FBckM7QUFFQSxTQUFPLFVBQUFFLEdBQUc7QUFBQSxXQUFJLCtCQUFVQSxHQUFHLENBQUNDLEdBQUosQ0FBUVAsUUFBUixDQUFWLEVBQTZCSyxRQUE3QixDQUFKO0FBQUEsR0FBVjtBQUNEOztBQUVNLFNBQVNHLGVBQVQsQ0FBeUJDLFNBQXpCLEVBQW9D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YUFBTyxLQUFLd0UsaUJBQUwsQ0FBdUIrQyxZQUF2QixFQUFxQ3JFLG1CQUFyQyxDQUNMLEtBQUtyQyxLQUFMLENBQVdDLFVBQVgsQ0FBc0J5RyxZQUF0QixDQURLLEVBRUwsS0FBSy9DLGlCQUFMLENBQXVCK0MsWUFBdkIsQ0FGSyxFQUdMbEUsVUFISyxDQUFQO0FBS0Q7Ozt3Q0FsTjBCO0FBQ3pCLGFBQU9lLGtCQUFQO0FBQ0Q7Ozs7OztBQW1OSEMsYUFBYSxDQUFDM0MsaUJBQWQsR0FBa0NBLGlCQUFsQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMCBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbi8qIGVzbGludC1kaXNhYmxlIGd1YXJkLWZvci1pbiAqL1xyXG5pbXBvcnQge0FHR1JFR0FUSU9OX09QRVJBVElPTn0gZnJvbSAnQGRlY2suZ2wvYWdncmVnYXRpb24tbGF5ZXJzJztcclxuaW1wb3J0IHtjb25zb2xlIGFzIENvbnNvbGV9IGZyb20gJ2dsb2JhbC93aW5kb3cnO1xyXG5cclxuaW1wb3J0IEVuaGFuY2VkQmluU29ydGVyIGZyb20gJy4vZW5oYW5jZWQtYmluLXNvcnRlcic7XHJcbmltcG9ydCB7YWdncmVnYXRlfSBmcm9tICd1dGlscy9hZ2dyZWdhdGUtdXRpbHMnO1xyXG5pbXBvcnQge0FHR1JFR0FUSU9OX1RZUEVTLCBTQ0FMRV9GVU5DfSBmcm9tICdjb25zdGFudHMvZGVmYXVsdC1zZXR0aW5ncyc7XHJcblxyXG5leHBvcnQgY29uc3QgREVDS19BR0dSRUdBVElPTl9NQVAgPSB7XHJcbiAgW0FHR1JFR0FUSU9OX09QRVJBVElPTi5TVU1dOiBBR0dSRUdBVElPTl9UWVBFUy5zdW0sXHJcbiAgW0FHR1JFR0FUSU9OX09QRVJBVElPTi5NRUFOXTogQUdHUkVHQVRJT05fVFlQRVMuYXZlcmFnZSxcclxuICBbQUdHUkVHQVRJT05fT1BFUkFUSU9OLk1JTl06IEFHR1JFR0FUSU9OX1RZUEVTLm1pbmltdW0sXHJcbiAgW0FHR1JFR0FUSU9OX09QRVJBVElPTi5NQVhdOiBBR0dSRUdBVElPTl9UWVBFUy5tYXhpbXVtXHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0VmFsdWVGdW5jKGFnZ3JlZ2F0aW9uLCBhY2Nlc3Nvcikge1xyXG4gIGlmICghYWdncmVnYXRpb24gfHwgIUFHR1JFR0FUSU9OX09QRVJBVElPTlthZ2dyZWdhdGlvbi50b1VwcGVyQ2FzZSgpXSkge1xyXG4gICAgQ29uc29sZS53YXJuKGBBZ2dyZWdhdGlvbiAke2FnZ3JlZ2F0aW9ufSBpcyBub3Qgc3VwcG9ydGVkYCk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBvcCA9IEFHR1JFR0FUSU9OX09QRVJBVElPTlthZ2dyZWdhdGlvbi50b1VwcGVyQ2FzZSgpXSB8fCBBR0dSRUdBVElPTl9PUEVSQVRJT04uU1VNO1xyXG4gIGNvbnN0IGtlcGxlck9wID0gREVDS19BR0dSRUdBVElPTl9NQVBbb3BdO1xyXG5cclxuICByZXR1cm4gcHRzID0+IGFnZ3JlZ2F0ZShwdHMubWFwKGFjY2Vzc29yKSwga2VwbGVyT3ApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NhbGVGdW5jdG9yKHNjYWxlVHlwZSkge1xyXG4gIGlmICghc2NhbGVUeXBlIHx8ICFTQ0FMRV9GVU5DW3NjYWxlVHlwZV0pIHtcclxuICAgIENvbnNvbGUud2FybihgU2NhbGUgJHtzY2FsZVR5cGV9IGlzIG5vdCBzdXBwb3J0ZWRgKTtcclxuICB9XHJcbiAgcmV0dXJuIFNDQUxFX0ZVTkNbc2NhbGVUeXBlXSB8fCBTQ0FMRV9GVU5DLnF1YW50aXplO1xyXG59XHJcblxyXG5mdW5jdGlvbiBub3AoKSB7fVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEdldFZhbHVlKHN0ZXAsIHByb3BzLCBkaW1lbnNpb25VcGRhdGVyKSB7XHJcbiAgY29uc3Qge2tleX0gPSBkaW1lbnNpb25VcGRhdGVyO1xyXG4gIGNvbnN0IHt2YWx1ZSwgd2VpZ2h0LCBhZ2dyZWdhdGlvbn0gPSBzdGVwLnRyaWdnZXJzO1xyXG5cclxuICBsZXQgZ2V0VmFsdWUgPSBwcm9wc1t2YWx1ZS5wcm9wXTtcclxuXHJcbiAgaWYgKGdldFZhbHVlID09PSBudWxsKSB7XHJcbiAgICAvLyBJZiBgZ2V0VmFsdWVgIGlzIG5vdCBwcm92aWRlZCBmcm9tIHByb3BzLCBidWlsZCBpdCB3aXRoIGFnZ3JlZ2F0aW9uIGFuZCB3ZWlnaHQuXHJcbiAgICBnZXRWYWx1ZSA9IGdldFZhbHVlRnVuYyhwcm9wc1thZ2dyZWdhdGlvbi5wcm9wXSwgcHJvcHNbd2VpZ2h0LnByb3BdKTtcclxuICB9XHJcblxyXG4gIGlmIChnZXRWYWx1ZSkge1xyXG4gICAgdGhpcy5fc2V0RGltZW5zaW9uU3RhdGUoa2V5LCB7Z2V0VmFsdWV9KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXREaW1lbnNpb25Tb3J0ZWRCaW5zKHN0ZXAsIHByb3BzLCBkaW1lbnNpb25VcGRhdGVyKSB7XHJcbiAgY29uc3Qge2tleX0gPSBkaW1lbnNpb25VcGRhdGVyO1xyXG4gIGNvbnN0IHtnZXRWYWx1ZX0gPSB0aGlzLnN0YXRlLmRpbWVuc2lvbnNba2V5XTtcclxuXHJcbiAgY29uc3Qgc29ydGVkQmlucyA9IG5ldyBFbmhhbmNlZEJpblNvcnRlcih0aGlzLnN0YXRlLmxheWVyRGF0YS5kYXRhIHx8IFtdLCB7XHJcbiAgICBnZXRWYWx1ZSxcclxuICAgIGZpbHRlckRhdGE6IHByb3BzLl9maWx0ZXJEYXRhXHJcbiAgfSk7XHJcbiAgdGhpcy5fc2V0RGltZW5zaW9uU3RhdGUoa2V5LCB7c29ydGVkQmluc30pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGltZW5zaW9uVmFsdWVEb21haW4oc3RlcCwgcHJvcHMsIGRpbWVuc2lvblVwZGF0ZXIpIHtcclxuICBjb25zdCB7a2V5fSA9IGRpbWVuc2lvblVwZGF0ZXI7XHJcbiAgY29uc3Qge1xyXG4gICAgdHJpZ2dlcnM6IHtsb3dlclBlcmNlbnRpbGUsIHVwcGVyUGVyY2VudGlsZSwgc2NhbGVUeXBlfVxyXG4gIH0gPSBzdGVwO1xyXG5cclxuICBpZiAoIXRoaXMuc3RhdGUuZGltZW5zaW9uc1trZXldLnNvcnRlZEJpbnMpIHtcclxuICAgIC8vIHRoZSBwcmV2aW91cyBzdGVwIHNob3VsZCBzZXQgc29ydGVkQmlucywgaWYgbm90LCBzb21ldGhpbmcgd2VudCB3cm9uZ1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLy8gZm9yIGxvZyBhbmQgc3FydCBzY2FsZSwgcmV0dXJucyBsaW5lYXIgZG9tYWluIGJ5IGRlZmF1bHRcclxuICAvLyBUT0RPOiBzdXBwb3J0IG90aGVyIHNjYWxlIGZ1bmN0aW9uIGRvbWFpbiBpbiBiaW4gc29ydGVyXHJcbiAgY29uc3QgdmFsdWVEb21haW4gPSB0aGlzLnN0YXRlLmRpbWVuc2lvbnNba2V5XS5zb3J0ZWRCaW5zLmdldFZhbHVlRG9tYWluQnlTY2FsZShcclxuICAgIHByb3BzW3NjYWxlVHlwZS5wcm9wXSxcclxuICAgIFtwcm9wc1tsb3dlclBlcmNlbnRpbGUucHJvcF0sIHByb3BzW3VwcGVyUGVyY2VudGlsZS5wcm9wXV1cclxuICApO1xyXG5cclxuICB0aGlzLl9zZXREaW1lbnNpb25TdGF0ZShrZXksIHt2YWx1ZURvbWFpbn0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGltZW5zaW9uU2NhbGUoc3RlcCwgcHJvcHMsIGRpbWVuc2lvblVwZGF0ZXIpIHtcclxuICBjb25zdCB7a2V5fSA9IGRpbWVuc2lvblVwZGF0ZXI7XHJcbiAgY29uc3Qge2RvbWFpbiwgcmFuZ2UsIHNjYWxlVHlwZX0gPSBzdGVwLnRyaWdnZXJzO1xyXG4gIGNvbnN0IHtvblNldH0gPSBzdGVwO1xyXG4gIGlmICghdGhpcy5zdGF0ZS5kaW1lbnNpb25zW2tleV0udmFsdWVEb21haW4pIHtcclxuICAgIC8vIHRoZSBwcmV2aW91cyBzdGVwIHNob3VsZCBzZXQgdmFsdWVEb21haW4sIGlmIG5vdCwgc29tZXRoaW5nIHdlbnQgd3JvbmdcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIGNvbnN0IGRpbWVuc2lvblJhbmdlID0gcHJvcHNbcmFuZ2UucHJvcF07XHJcbiAgY29uc3QgZGltZW5zaW9uRG9tYWluID0gcHJvcHNbZG9tYWluLnByb3BdIHx8IHRoaXMuc3RhdGUuZGltZW5zaW9uc1trZXldLnZhbHVlRG9tYWluO1xyXG5cclxuICBjb25zdCBzY2FsZUZ1bmN0b3IgPSBnZXRTY2FsZUZ1bmN0b3Ioc2NhbGVUeXBlICYmIHByb3BzW3NjYWxlVHlwZS5wcm9wXSkoKTtcclxuXHJcbiAgY29uc3Qgc2NhbGVGdW5jID0gc2NhbGVGdW5jdG9yLmRvbWFpbihkaW1lbnNpb25Eb21haW4pLnJhbmdlKGRpbWVuc2lvblJhbmdlKTtcclxuXHJcbiAgaWYgKHR5cGVvZiBvblNldCA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIHByb3BzW29uU2V0LnByb3BzXSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgcHJvcHNbb25TZXQucHJvcHNdKHNjYWxlRnVuYy5kb21haW4oKSk7XHJcbiAgfVxyXG4gIHRoaXMuX3NldERpbWVuc2lvblN0YXRlKGtleSwge3NjYWxlRnVuY30pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBub3JtYWxpemVSZXN1bHQocmVzdWx0ID0ge30pIHtcclxuICAvLyBzdXBwb3J0IHByZXZpb3VzIGhleGFnb25BZ2dyZWdhdG9yIEFQSVxyXG4gIGlmIChyZXN1bHQuaGV4YWdvbnMpIHtcclxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHtkYXRhOiByZXN1bHQuaGV4YWdvbnN9LCByZXN1bHQpO1xyXG4gIH0gZWxzZSBpZiAocmVzdWx0LmxheWVyRGF0YSkge1xyXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe2RhdGE6IHJlc3VsdC5sYXllckRhdGF9LCByZXN1bHQpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEFnZ3JlZ2F0ZWREYXRhKHN0ZXAsIHByb3BzLCBhZ2dyZWdhdGlvbiwgYWdncmVnYXRpb25QYXJhbXMpIHtcclxuICBjb25zdCB7XHJcbiAgICB0cmlnZ2Vyczoge2FnZ3JlZ2F0b3I6IGFnZ3J9XHJcbiAgfSA9IHN0ZXA7XHJcbiAgY29uc3QgYWdncmVnYXRvciA9IHByb3BzW2FnZ3IucHJvcF07XHJcblxyXG4gIC8vIHJlc3VsdCBzaG91bGQgY29udGFpbiBhIGRhdGEgYXJyYXkgYW5kIG90aGVyIHByb3BzXHJcbiAgLy8gcmVzdWx0ID0ge2RhdGE6IFtdLCAuLi5vdGhlciBwcm9wc31cclxuICBjb25zdCByZXN1bHQgPSBhZ2dyZWdhdG9yKHByb3BzLCBhZ2dyZWdhdGlvblBhcmFtcyk7XHJcbiAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICBsYXllckRhdGE6IG5vcm1hbGl6ZVJlc3VsdChyZXN1bHQpXHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBkZWZhdWx0QWdncmVnYXRpb24gPSB7XHJcbiAga2V5OiAncG9zaXRpb24nLFxyXG4gIHVwZGF0ZVN0ZXBzOiBbXHJcbiAgICB7XHJcbiAgICAgIGtleTogJ2FnZ3JlZ2F0ZScsXHJcbiAgICAgIHRyaWdnZXJzOiB7XHJcbiAgICAgICAgY2VsbFNpemU6IHtcclxuICAgICAgICAgIHByb3A6ICdjZWxsU2l6ZSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHBvc2l0aW9uOiB7XHJcbiAgICAgICAgICBwcm9wOiAnZ2V0UG9zaXRpb24nLFxyXG4gICAgICAgICAgdXBkYXRlVHJpZ2dlcjogJ2dldFBvc2l0aW9uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYWdncmVnYXRvcjoge1xyXG4gICAgICAgICAgcHJvcDogJ2dyaWRBZ2dyZWdhdG9yJ1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgdXBkYXRlcjogZ2V0QWdncmVnYXRlZERhdGFcclxuICAgIH1cclxuICBdXHJcbn07XHJcblxyXG5mdW5jdGlvbiBnZXRTdWJMYXllckFjY2Vzc29yKGRpbWVuc2lvblN0YXRlLCBkaW1lbnNpb24sIGxheWVyUHJvcHMpIHtcclxuICByZXR1cm4gY2VsbCA9PiB7XHJcbiAgICBjb25zdCB7c29ydGVkQmlucywgc2NhbGVGdW5jfSA9IGRpbWVuc2lvblN0YXRlO1xyXG4gICAgY29uc3QgYmluID0gc29ydGVkQmlucy5iaW5NYXBbY2VsbC5pbmRleF07XHJcblxyXG4gICAgaWYgKGJpbiAmJiBiaW4uY291bnRzID09PSAwKSB7XHJcbiAgICAgIC8vIG5vIHBvaW50cyBsZWZ0IGluIGJpbiBhZnRlciBmaWx0ZXJpbmdcclxuICAgICAgcmV0dXJuIGRpbWVuc2lvbi5udWxsVmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY3YgPSBiaW4gJiYgYmluLnZhbHVlO1xyXG4gICAgY29uc3QgZG9tYWluID0gc2NhbGVGdW5jLmRvbWFpbigpO1xyXG5cclxuICAgIGNvbnN0IGlzVmFsdWVJbkRvbWFpbiA9IGN2ID49IGRvbWFpblswXSAmJiBjdiA8PSBkb21haW5bZG9tYWluLmxlbmd0aCAtIDFdO1xyXG5cclxuICAgIC8vIGlmIGNlbGwgdmFsdWUgaXMgb3V0c2lkZSBkb21haW4sIHNldCBhbHBoYSB0byAwXHJcbiAgICByZXR1cm4gaXNWYWx1ZUluRG9tYWluID8gc2NhbGVGdW5jKGN2KSA6IGRpbWVuc2lvbi5udWxsVmFsdWU7XHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGRlZmF1bHRDb2xvckRpbWVuc2lvbiA9IHtcclxuICBrZXk6ICdmaWxsQ29sb3InLFxyXG4gIGFjY2Vzc29yOiAnZ2V0RmlsbENvbG9yJyxcclxuICBnZXRQaWNraW5nSW5mbzogKGRpbWVuc2lvblN0YXRlLCBjZWxsKSA9PiB7XHJcbiAgICBjb25zdCB7c29ydGVkQmluc30gPSBkaW1lbnNpb25TdGF0ZTtcclxuICAgIGNvbnN0IGNvbG9yVmFsdWUgPSBzb3J0ZWRCaW5zLmJpbk1hcFtjZWxsLmluZGV4XSAmJiBzb3J0ZWRCaW5zLmJpbk1hcFtjZWxsLmluZGV4XS52YWx1ZTtcclxuICAgIHJldHVybiB7Y29sb3JWYWx1ZX07XHJcbiAgfSxcclxuICBudWxsVmFsdWU6IFswLCAwLCAwLCAwXSxcclxuICB1cGRhdGVTdGVwczogW1xyXG4gICAge1xyXG4gICAgICBrZXk6ICdnZXRWYWx1ZScsXHJcbiAgICAgIHRyaWdnZXJzOiB7XHJcbiAgICAgICAgdmFsdWU6IHtcclxuICAgICAgICAgIHByb3A6ICdnZXRDb2xvclZhbHVlJyxcclxuICAgICAgICAgIHVwZGF0ZVRyaWdnZXI6ICdnZXRDb2xvclZhbHVlJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgd2VpZ2h0OiB7XHJcbiAgICAgICAgICBwcm9wOiAnZ2V0Q29sb3JXZWlnaHQnLFxyXG4gICAgICAgICAgdXBkYXRlVHJpZ2dlcjogJ2dldENvbG9yV2VpZ2h0J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYWdncmVnYXRpb246IHtcclxuICAgICAgICAgIHByb3A6ICdjb2xvckFnZ3JlZ2F0aW9uJ1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgdXBkYXRlcjogZ2V0R2V0VmFsdWVcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGtleTogJ2dldEJpbnMnLFxyXG4gICAgICB0cmlnZ2Vyczoge1xyXG4gICAgICAgIF9maWx0ZXJEYXRhOiB7XHJcbiAgICAgICAgICBwcm9wOiAnX2ZpbHRlckRhdGEnLFxyXG4gICAgICAgICAgdXBkYXRlVHJpZ2dlcjogJ19maWx0ZXJEYXRhJ1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgdXBkYXRlcjogZ2V0RGltZW5zaW9uU29ydGVkQmluc1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAga2V5OiAnZ2V0RG9tYWluJyxcclxuICAgICAgdHJpZ2dlcnM6IHtcclxuICAgICAgICBsb3dlclBlcmNlbnRpbGU6IHtcclxuICAgICAgICAgIHByb3A6ICdsb3dlclBlcmNlbnRpbGUnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB1cHBlclBlcmNlbnRpbGU6IHtcclxuICAgICAgICAgIHByb3A6ICd1cHBlclBlcmNlbnRpbGUnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzY2FsZVR5cGU6IHtwcm9wOiAnY29sb3JTY2FsZVR5cGUnfVxyXG4gICAgICB9LFxyXG4gICAgICB1cGRhdGVyOiBnZXREaW1lbnNpb25WYWx1ZURvbWFpblxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAga2V5OiAnZ2V0U2NhbGVGdW5jJyxcclxuICAgICAgdHJpZ2dlcnM6IHtcclxuICAgICAgICBkb21haW46IHtwcm9wOiAnY29sb3JEb21haW4nfSxcclxuICAgICAgICByYW5nZToge3Byb3A6ICdjb2xvclJhbmdlJ30sXHJcbiAgICAgICAgc2NhbGVUeXBlOiB7cHJvcDogJ2NvbG9yU2NhbGVUeXBlJ31cclxuICAgICAgfSxcclxuICAgICAgb25TZXQ6IHtcclxuICAgICAgICBwcm9wczogJ29uU2V0Q29sb3JEb21haW4nXHJcbiAgICAgIH0sXHJcbiAgICAgIHVwZGF0ZXI6IGdldERpbWVuc2lvblNjYWxlXHJcbiAgICB9XHJcbiAgXSxcclxuICBnZXRTdWJMYXllckFjY2Vzc29yXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZGVmYXVsdEVsZXZhdGlvbkRpbWVuc2lvbiA9IHtcclxuICBrZXk6ICdlbGV2YXRpb24nLFxyXG4gIGFjY2Vzc29yOiAnZ2V0RWxldmF0aW9uJyxcclxuICBnZXRQaWNraW5nSW5mbzogKGRpbWVuc2lvblN0YXRlLCBjZWxsKSA9PiB7XHJcbiAgICBjb25zdCB7c29ydGVkQmluc30gPSBkaW1lbnNpb25TdGF0ZTtcclxuICAgIGNvbnN0IGVsZXZhdGlvblZhbHVlID0gc29ydGVkQmlucy5iaW5NYXBbY2VsbC5pbmRleF0gJiYgc29ydGVkQmlucy5iaW5NYXBbY2VsbC5pbmRleF0udmFsdWU7XHJcbiAgICByZXR1cm4ge2VsZXZhdGlvblZhbHVlfTtcclxuICB9LFxyXG4gIG51bGxWYWx1ZTogLTEsXHJcbiAgdXBkYXRlU3RlcHM6IFtcclxuICAgIHtcclxuICAgICAga2V5OiAnZ2V0VmFsdWUnLFxyXG4gICAgICB0cmlnZ2Vyczoge1xyXG4gICAgICAgIHZhbHVlOiB7XHJcbiAgICAgICAgICBwcm9wOiAnZ2V0RWxldmF0aW9uVmFsdWUnLFxyXG4gICAgICAgICAgdXBkYXRlVHJpZ2dlcjogJ2dldEVsZXZhdGlvblZhbHVlJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgd2VpZ2h0OiB7XHJcbiAgICAgICAgICBwcm9wOiAnZ2V0RWxldmF0aW9uV2VpZ2h0JyxcclxuICAgICAgICAgIHVwZGF0ZVRyaWdnZXI6ICdnZXRFbGV2YXRpb25XZWlnaHQnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBhZ2dyZWdhdGlvbjoge1xyXG4gICAgICAgICAgcHJvcDogJ2VsZXZhdGlvbkFnZ3JlZ2F0aW9uJ1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgdXBkYXRlcjogZ2V0R2V0VmFsdWVcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGtleTogJ2dldEJpbnMnLFxyXG4gICAgICB0cmlnZ2Vyczoge1xyXG4gICAgICAgIF9maWx0ZXJEYXRhOiB7XHJcbiAgICAgICAgICBwcm9wOiAnX2ZpbHRlckRhdGEnLFxyXG4gICAgICAgICAgdXBkYXRlVHJpZ2dlcjogJ19maWx0ZXJEYXRhJ1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgdXBkYXRlcjogZ2V0RGltZW5zaW9uU29ydGVkQmluc1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAga2V5OiAnZ2V0RG9tYWluJyxcclxuICAgICAgdHJpZ2dlcnM6IHtcclxuICAgICAgICBsb3dlclBlcmNlbnRpbGU6IHtcclxuICAgICAgICAgIHByb3A6ICdlbGV2YXRpb25Mb3dlclBlcmNlbnRpbGUnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB1cHBlclBlcmNlbnRpbGU6IHtcclxuICAgICAgICAgIHByb3A6ICdlbGV2YXRpb25VcHBlclBlcmNlbnRpbGUnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzY2FsZVR5cGU6IHtwcm9wOiAnZWxldmF0aW9uU2NhbGVUeXBlJ31cclxuICAgICAgfSxcclxuICAgICAgdXBkYXRlcjogZ2V0RGltZW5zaW9uVmFsdWVEb21haW5cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGtleTogJ2dldFNjYWxlRnVuYycsXHJcbiAgICAgIHRyaWdnZXJzOiB7XHJcbiAgICAgICAgZG9tYWluOiB7cHJvcDogJ2VsZXZhdGlvbkRvbWFpbid9LFxyXG4gICAgICAgIHJhbmdlOiB7cHJvcDogJ2VsZXZhdGlvblJhbmdlJ30sXHJcbiAgICAgICAgc2NhbGVUeXBlOiB7cHJvcDogJ2VsZXZhdGlvblNjYWxlVHlwZSd9XHJcbiAgICAgIH0sXHJcbiAgICAgIG9uU2V0OiB7XHJcbiAgICAgICAgcHJvcHM6ICdvblNldEVsZXZhdGlvbkRvbWFpbidcclxuICAgICAgfSxcclxuICAgICAgdXBkYXRlcjogZ2V0RGltZW5zaW9uU2NhbGVcclxuICAgIH1cclxuICBdLFxyXG4gIGdldFN1YkxheWVyQWNjZXNzb3JcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBkZWZhdWx0RGltZW5zaW9ucyA9IFtkZWZhdWx0Q29sb3JEaW1lbnNpb24sIGRlZmF1bHRFbGV2YXRpb25EaW1lbnNpb25dO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ1BVQWdncmVnYXRvciB7XHJcbiAgY29uc3RydWN0b3Iob3B0cyA9IHt9KSB7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBsYXllckRhdGE6IHt9LFxyXG4gICAgICBkaW1lbnNpb25zOiB7XHJcbiAgICAgICAgLy8gY29sb3I6IHtcclxuICAgICAgICAvLyAgIGdldFZhbHVlOiBudWxsLFxyXG4gICAgICAgIC8vICAgZG9tYWluOiBudWxsLFxyXG4gICAgICAgIC8vICAgc29ydGVkQmluczogbnVsbCxcclxuICAgICAgICAvLyAgIHNjYWxlRnVuYzogbm9wXHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgICAvLyBlbGV2YXRpb246IHtcclxuICAgICAgICAvLyAgIGdldFZhbHVlOiBudWxsLFxyXG4gICAgICAgIC8vICAgZG9tYWluOiBudWxsLFxyXG4gICAgICAgIC8vICAgc29ydGVkQmluczogbnVsbCxcclxuICAgICAgICAvLyAgIHNjYWxlRnVuYzogbm9wXHJcbiAgICAgICAgLy8gfVxyXG4gICAgICB9LFxyXG4gICAgICAuLi5vcHRzLmluaXRpYWxTdGF0ZVxyXG4gICAgfTtcclxuICAgIHRoaXMuZGltZW5zaW9uVXBkYXRlcnMgPSB7fTtcclxuICAgIHRoaXMuYWdncmVnYXRpb25VcGRhdGVyID0ge307XHJcblxyXG4gICAgdGhpcy5fYWRkRGltZW5zaW9uKG9wdHMuZGltZW5zaW9ucyB8fCBkZWZhdWx0RGltZW5zaW9ucyk7XHJcbiAgICB0aGlzLl9hZGRBZ2dyZWdhdGlvbihvcHRzLmFnZ3JlZ2F0aW9uIHx8IGRlZmF1bHRBZ2dyZWdhdGlvbik7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZGVmYXVsdERpbWVuc2lvbnMoKSB7XHJcbiAgICByZXR1cm4gZGVmYXVsdERpbWVuc2lvbnM7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVBbGxEaW1lbnNpb25zKHByb3BzKSB7XHJcbiAgICBsZXQgZGltZW5zaW9uQ2hhbmdlcyA9IFtdO1xyXG4gICAgLy8gdXBkYXRlIGFsbCBkaW1lbnNpb25zXHJcbiAgICBmb3IgKGNvbnN0IGRpbSBpbiB0aGlzLmRpbWVuc2lvblVwZGF0ZXJzKSB7XHJcbiAgICAgIGNvbnN0IHVwZGF0ZXJzID0gdGhpcy5fYWNjdW11bGF0ZVVwZGF0ZXJzKDAsIHByb3BzLCB0aGlzLmRpbWVuc2lvblVwZGF0ZXJzW2RpbV0pO1xyXG4gICAgICBkaW1lbnNpb25DaGFuZ2VzID0gZGltZW5zaW9uQ2hhbmdlcy5jb25jYXQodXBkYXRlcnMpO1xyXG4gICAgfVxyXG5cclxuICAgIGRpbWVuc2lvbkNoYW5nZXMuZm9yRWFjaChmID0+IHR5cGVvZiBmID09PSAnZnVuY3Rpb24nICYmIGYoKSk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVBZ2dyZWdhdGlvbihwcm9wcywgYWdncmVnYXRpb25QYXJhbXMpIHtcclxuICAgIGNvbnN0IHVwZGF0ZXJzID0gdGhpcy5fYWNjdW11bGF0ZVVwZGF0ZXJzKDAsIHByb3BzLCB0aGlzLmFnZ3JlZ2F0aW9uVXBkYXRlcik7XHJcbiAgICB1cGRhdGVycy5mb3JFYWNoKGYgPT4gdHlwZW9mIGYgPT09ICdmdW5jdGlvbicgJiYgZihhZ2dyZWdhdGlvblBhcmFtcykpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlU3RhdGUob3B0cywgYWdncmVnYXRpb25QYXJhbXMpIHtcclxuICAgIGNvbnN0IHtvbGRQcm9wcywgcHJvcHMsIGNoYW5nZUZsYWdzfSA9IG9wdHM7XHJcbiAgICBsZXQgZGltZW5zaW9uQ2hhbmdlcyA9IFtdO1xyXG5cclxuICAgIGlmIChjaGFuZ2VGbGFncy5kYXRhQ2hhbmdlZCkge1xyXG4gICAgICAvLyBpZiBkYXRhIGNoYW5nZWQgdXBkYXRlIGV2ZXJ5dGhpbmdcclxuICAgICAgdGhpcy51cGRhdGVBZ2dyZWdhdGlvbihwcm9wcywgYWdncmVnYXRpb25QYXJhbXMpO1xyXG4gICAgICB0aGlzLnVwZGF0ZUFsbERpbWVuc2lvbnMocHJvcHMpO1xyXG5cclxuICAgICAgcmV0dXJuIHRoaXMuc3RhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYWdncmVnYXRpb25DaGFuZ2VzID0gdGhpcy5fZ2V0QWdncmVnYXRpb25DaGFuZ2VzKG9sZFByb3BzLCBwcm9wcywgY2hhbmdlRmxhZ3MpO1xyXG5cclxuICAgIGlmIChhZ2dyZWdhdGlvbkNoYW5nZXMgJiYgYWdncmVnYXRpb25DaGFuZ2VzLmxlbmd0aCkge1xyXG4gICAgICAvLyBnZXQgYWdncmVnYXRlZERhdGFcclxuICAgICAgYWdncmVnYXRpb25DaGFuZ2VzLmZvckVhY2goZiA9PiB0eXBlb2YgZiA9PT0gJ2Z1bmN0aW9uJyAmJiBmKGFnZ3JlZ2F0aW9uUGFyYW1zKSk7XHJcbiAgICAgIHRoaXMudXBkYXRlQWxsRGltZW5zaW9ucyhwcm9wcyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBvbmx5IHVwZGF0ZSBkaW1lbnNpb25zXHJcbiAgICAgIGRpbWVuc2lvbkNoYW5nZXMgPSB0aGlzLl9nZXREaW1lbnNpb25DaGFuZ2VzKG9sZFByb3BzLCBwcm9wcywgY2hhbmdlRmxhZ3MpIHx8IFtdO1xyXG4gICAgICBkaW1lbnNpb25DaGFuZ2VzLmZvckVhY2goZiA9PiB0eXBlb2YgZiA9PT0gJ2Z1bmN0aW9uJyAmJiBmKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzLnN0YXRlO1xyXG4gIH1cclxuXHJcbiAgLy8gVXBkYXRlIHByaXZhdGUgc3RhdGVcclxuICBzZXRTdGF0ZSh1cGRhdGVPYmplY3QpIHtcclxuICAgIHRoaXMuc3RhdGUgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXRlLCB1cGRhdGVPYmplY3QpO1xyXG4gIH1cclxuXHJcbiAgLy8gVXBkYXRlIHByaXZhdGUgc3RhdGUuZGltZW5zaW9uc1xyXG4gIF9zZXREaW1lbnNpb25TdGF0ZShrZXksIHVwZGF0ZU9iamVjdCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGRpbWVuc2lvbnM6IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc3RhdGUuZGltZW5zaW9ucywge1xyXG4gICAgICAgIFtrZXldOiBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXRlLmRpbWVuc2lvbnNba2V5XSwgdXBkYXRlT2JqZWN0KVxyXG4gICAgICB9KVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBfYWRkQWdncmVnYXRpb24oYWdncmVnYXRpb24pIHtcclxuICAgIHRoaXMuYWdncmVnYXRpb25VcGRhdGVyID0gYWdncmVnYXRpb247XHJcbiAgfVxyXG5cclxuICBfYWRkRGltZW5zaW9uKGRpbWVuc2lvbnMgPSBbXSkge1xyXG4gICAgZGltZW5zaW9ucy5mb3JFYWNoKGRpbWVuc2lvbiA9PiB7XHJcbiAgICAgIGNvbnN0IHtrZXl9ID0gZGltZW5zaW9uO1xyXG4gICAgICB0aGlzLmRpbWVuc2lvblVwZGF0ZXJzW2tleV0gPSBkaW1lbnNpb247XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIF9uZWVkVXBkYXRlU3RlcChkaW1lbnNpb25TdGVwLCBvbGRQcm9wcywgcHJvcHMsIGNoYW5nZUZsYWdzKSB7XHJcbiAgICAvLyB3aGV0aGVyIG5lZWQgdG8gdXBkYXRlIGN1cnJlbnQgZGltZW5zaW9uIHN0ZXBcclxuICAgIC8vIGRpbWVuc2lvbiBzdGVwIGlzIHRoZSB2YWx1ZSwgZG9tYWluLCBzY2FsZUZ1bmN0aW9uIG9mIGVhY2ggZGltZW5zaW9uXHJcbiAgICAvLyBlYWNoIHN0ZXAgaXMgYW4gb2JqZWN0IHdpdGggcHJvcGVydGllcyBsaW5rcyB0byBsYXllciBwcm9wIGFuZCB3aGV0aGVyIHRoZSBwcm9wIGlzXHJcbiAgICAvLyBjb250cm9sbGVkIGJ5IHVwZGF0ZVRyaWdnZXJzXHJcbiAgICByZXR1cm4gT2JqZWN0LnZhbHVlcyhkaW1lbnNpb25TdGVwLnRyaWdnZXJzKS5zb21lKGl0ZW0gPT4ge1xyXG4gICAgICBpZiAoaXRlbS51cGRhdGVUcmlnZ2VyKSB7XHJcbiAgICAgICAgLy8gY2hlY2sgYmFzZWQgb24gdXBkYXRlVHJpZ2dlcnMgY2hhbmdlIGZpcnN0XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIGNoYW5nZUZsYWdzLnVwZGF0ZVRyaWdnZXJzQ2hhbmdlZCAmJlxyXG4gICAgICAgICAgKGNoYW5nZUZsYWdzLnVwZGF0ZVRyaWdnZXJzQ2hhbmdlZC5hbGwgfHxcclxuICAgICAgICAgICAgY2hhbmdlRmxhZ3MudXBkYXRlVHJpZ2dlcnNDaGFuZ2VkW2l0ZW0udXBkYXRlVHJpZ2dlcl0pXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgICAvLyBmYWxsYmFjayB0byBkaXJlY3QgY29tcGFyaXNvblxyXG4gICAgICByZXR1cm4gb2xkUHJvcHNbaXRlbS5wcm9wXSAhPT0gcHJvcHNbaXRlbS5wcm9wXTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgX2FjY3VtdWxhdGVVcGRhdGVycyhzdGVwLCBwcm9wcywgZGltZW5zaW9uKSB7XHJcbiAgICBjb25zdCB1cGRhdGVycyA9IFtdO1xyXG4gICAgZm9yIChsZXQgaSA9IHN0ZXA7IGkgPCBkaW1lbnNpb24udXBkYXRlU3RlcHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKHR5cGVvZiBkaW1lbnNpb24udXBkYXRlU3RlcHNbaV0udXBkYXRlciA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgIHVwZGF0ZXJzLnB1c2goXHJcbiAgICAgICAgICBkaW1lbnNpb24udXBkYXRlU3RlcHNbaV0udXBkYXRlci5iaW5kKHRoaXMsIGRpbWVuc2lvbi51cGRhdGVTdGVwc1tpXSwgcHJvcHMsIGRpbWVuc2lvbilcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHVwZGF0ZXJzO1xyXG4gIH1cclxuXHJcbiAgX2dldEFsbFVwZGF0ZXJzKGRpbWVuc2lvbiwgb2xkUHJvcHMsIHByb3BzLCBjaGFuZ2VGbGFncykge1xyXG4gICAgbGV0IHVwZGF0ZXJzID0gW107XHJcbiAgICBjb25zdCBuZWVkVXBkYXRlU3RlcCA9IGRpbWVuc2lvbi51cGRhdGVTdGVwcy5maW5kSW5kZXgoc3RlcCA9PlxyXG4gICAgICB0aGlzLl9uZWVkVXBkYXRlU3RlcChzdGVwLCBvbGRQcm9wcywgcHJvcHMsIGNoYW5nZUZsYWdzKVxyXG4gICAgKTtcclxuXHJcbiAgICBpZiAobmVlZFVwZGF0ZVN0ZXAgPiAtMSkge1xyXG4gICAgICB1cGRhdGVycyA9IHVwZGF0ZXJzLmNvbmNhdCh0aGlzLl9hY2N1bXVsYXRlVXBkYXRlcnMobmVlZFVwZGF0ZVN0ZXAsIHByb3BzLCBkaW1lbnNpb24pKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdXBkYXRlcnM7XHJcbiAgfVxyXG5cclxuICBfZ2V0QWdncmVnYXRpb25DaGFuZ2VzKG9sZFByb3BzLCBwcm9wcywgY2hhbmdlRmxhZ3MpIHtcclxuICAgIGNvbnN0IHVwZGF0ZXJzID0gdGhpcy5fZ2V0QWxsVXBkYXRlcnModGhpcy5hZ2dyZWdhdGlvblVwZGF0ZXIsIG9sZFByb3BzLCBwcm9wcywgY2hhbmdlRmxhZ3MpO1xyXG4gICAgcmV0dXJuIHVwZGF0ZXJzLmxlbmd0aCA/IHVwZGF0ZXJzIDogbnVsbDtcclxuICB9XHJcblxyXG4gIF9nZXREaW1lbnNpb25DaGFuZ2VzKG9sZFByb3BzLCBwcm9wcywgY2hhbmdlRmxhZ3MpIHtcclxuICAgIGxldCB1cGRhdGVycyA9IFtdO1xyXG5cclxuICAgIC8vIGdldCBkaW1lbnNpb24gdG8gYmUgdXBkYXRlZFxyXG4gICAgZm9yIChjb25zdCBrZXkgaW4gdGhpcy5kaW1lbnNpb25VcGRhdGVycykge1xyXG4gICAgICAvLyByZXR1cm4gdGhlIGZpcnN0IHRyaWdnZXJlZCB1cGRhdGVyIGZvciBlYWNoIGRpbWVuc2lvblxyXG4gICAgICBjb25zdCBkaW1lbnNpb24gPSB0aGlzLmRpbWVuc2lvblVwZGF0ZXJzW2tleV07XHJcbiAgICAgIGNvbnN0IGRpbWVuc2lvblVwZGF0ZXJzID0gdGhpcy5fZ2V0QWxsVXBkYXRlcnMoZGltZW5zaW9uLCBvbGRQcm9wcywgcHJvcHMsIGNoYW5nZUZsYWdzKTtcclxuICAgICAgdXBkYXRlcnMgPSB1cGRhdGVycy5jb25jYXQoZGltZW5zaW9uVXBkYXRlcnMpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB1cGRhdGVycy5sZW5ndGggPyB1cGRhdGVycyA6IG51bGw7XHJcbiAgfVxyXG5cclxuICBnZXRVcGRhdGVUcmlnZ2Vycyhwcm9wcykge1xyXG4gICAgY29uc3QgX3VwZGF0ZVRyaWdnZXJzID0gcHJvcHMudXBkYXRlVHJpZ2dlcnMgfHwge307XHJcbiAgICBjb25zdCB1cGRhdGVUcmlnZ2VycyA9IHt9O1xyXG5cclxuICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMuZGltZW5zaW9uVXBkYXRlcnMpIHtcclxuICAgICAgY29uc3Qge2FjY2Vzc29yLCB1cGRhdGVTdGVwc30gPSB0aGlzLmRpbWVuc2lvblVwZGF0ZXJzW2tleV07XHJcbiAgICAgIC8vIGZvbGQgZGltZW5zaW9uIHRyaWdnZXJzIGludG8gZWFjaCBhY2Nlc3NvclxyXG4gICAgICB1cGRhdGVUcmlnZ2Vyc1thY2Nlc3Nvcl0gPSB7fTtcclxuXHJcbiAgICAgIHVwZGF0ZVN0ZXBzLmZvckVhY2goc3RlcCA9PiB7XHJcbiAgICAgICAgT2JqZWN0LnZhbHVlcyhzdGVwLnRyaWdnZXJzIHx8IFtdKS5mb3JFYWNoKCh7cHJvcCwgdXBkYXRlVHJpZ2dlcn0pID0+IHtcclxuICAgICAgICAgIGlmICh1cGRhdGVUcmlnZ2VyKSB7XHJcbiAgICAgICAgICAgIC8vIGlmIHByb3AgaXMgYmFzZWQgb24gdXBkYXRlVHJpZ2dlciBlLmcuIGdldENvbG9yVmFsdWUsIGdldENvbG9yV2VpZ2h0XHJcbiAgICAgICAgICAgIC8vIGFuZCB1cGRhdGVUcmlnZ2VycyBpcyBwYXNzZWQgaW4gZnJvbSBsYXllciBwcm9wXHJcbiAgICAgICAgICAgIC8vIGZvbGQgdGhlIHVwZGF0ZVRyaWdnZXJzIGludG8gYWNjZXNzb3JcclxuICAgICAgICAgICAgY29uc3QgZnJvbVByb3AgPSBfdXBkYXRlVHJpZ2dlcnNbdXBkYXRlVHJpZ2dlcl07XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZnJvbVByb3AgPT09ICdvYmplY3QnICYmICFBcnJheS5pc0FycmF5KGZyb21Qcm9wKSkge1xyXG4gICAgICAgICAgICAgIC8vIGlmIHVwZGF0ZVRyaWdnZXIgaXMgYW4gb2JqZWN0IHNwcmVhZCBpdFxyXG4gICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odXBkYXRlVHJpZ2dlcnNbYWNjZXNzb3JdLCBmcm9tUHJvcCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZnJvbVByb3AgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgIHVwZGF0ZVRyaWdnZXJzW2FjY2Vzc29yXVtwcm9wXSA9IGZyb21Qcm9wO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBpZiBwcm9wIGlzIG5vdCBiYXNlZCBvbiB1cGRhdGVUcmlnZ2VyXHJcbiAgICAgICAgICAgIHVwZGF0ZVRyaWdnZXJzW2FjY2Vzc29yXVtwcm9wXSA9IHByb3BzW3Byb3BdO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdXBkYXRlVHJpZ2dlcnM7XHJcbiAgfVxyXG5cclxuICBnZXRQaWNraW5nSW5mbyh7aW5mb30sIGxheWVyUHJvcHMpIHtcclxuICAgIGNvbnN0IGlzUGlja2VkID0gaW5mby5waWNrZWQgJiYgaW5mby5pbmRleCA+IC0xO1xyXG4gICAgbGV0IG9iamVjdCA9IG51bGw7XHJcblxyXG4gICAgaWYgKGlzUGlja2VkKSB7XHJcbiAgICAgIGNvbnN0IGNlbGwgPSB0aGlzLnN0YXRlLmxheWVyRGF0YS5kYXRhW2luZm8uaW5kZXhdO1xyXG5cclxuICAgICAgbGV0IGJpbkluZm8gPSB7fTtcclxuICAgICAgZm9yIChjb25zdCBrZXkgaW4gdGhpcy5kaW1lbnNpb25VcGRhdGVycykge1xyXG4gICAgICAgIGNvbnN0IHtnZXRQaWNraW5nSW5mb30gPSB0aGlzLmRpbWVuc2lvblVwZGF0ZXJzW2tleV07XHJcbiAgICAgICAgaWYgKHR5cGVvZiBnZXRQaWNraW5nSW5mbyA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgYmluSW5mbyA9IE9iamVjdC5hc3NpZ24oXHJcbiAgICAgICAgICAgIHt9LFxyXG4gICAgICAgICAgICBiaW5JbmZvLFxyXG4gICAgICAgICAgICBnZXRQaWNraW5nSW5mbyh0aGlzLnN0YXRlLmRpbWVuc2lvbnNba2V5XSwgY2VsbCwgbGF5ZXJQcm9wcylcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBvYmplY3QgPSBPYmplY3QuYXNzaWduKGJpbkluZm8sIGNlbGwsIHtcclxuICAgICAgICBwb2ludHM6IGNlbGwuZmlsdGVyZWRQb2ludHMgfHwgY2VsbC5wb2ludHNcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gYWRkIGJpbiAgYW5kICB0byBpbmZvXHJcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihpbmZvLCB7XHJcbiAgICAgIHBpY2tlZDogQm9vbGVhbihvYmplY3QpLFxyXG4gICAgICAvLyBvdmVycmlkZSBvYmplY3Qgd2l0aCBwaWNrZWQgY2VsbFxyXG4gICAgICBvYmplY3RcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0QWNjZXNzb3IoZGltZW5zaW9uS2V5LCBsYXllclByb3BzKSB7XHJcbiAgICBpZiAoIXRoaXMuZGltZW5zaW9uVXBkYXRlcnMuaGFzT3duUHJvcGVydHkoZGltZW5zaW9uS2V5KSkge1xyXG4gICAgICByZXR1cm4gbm9wO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuZGltZW5zaW9uVXBkYXRlcnNbZGltZW5zaW9uS2V5XS5nZXRTdWJMYXllckFjY2Vzc29yKFxyXG4gICAgICB0aGlzLnN0YXRlLmRpbWVuc2lvbnNbZGltZW5zaW9uS2V5XSxcclxuICAgICAgdGhpcy5kaW1lbnNpb25VcGRhdGVyc1tkaW1lbnNpb25LZXldLFxyXG4gICAgICBsYXllclByb3BzXHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuQ1BVQWdncmVnYXRvci5nZXREaW1lbnNpb25TY2FsZSA9IGdldERpbWVuc2lvblNjYWxlO1xyXG4iXX0=