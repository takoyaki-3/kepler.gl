"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unique = unique;
exports.findMapBounds = findMapBounds;
exports.getLatLngBounds = getLatLngBounds;
exports.clamp = clamp;
exports.getSampleData = getSampleData;
exports.timeToUnixMilli = timeToUnixMilli;
exports.maybeToDate = maybeToDate;
exports.notNullorUndefined = notNullorUndefined;
exports.isPlainObject = isPlainObject;
exports.numberSort = numberSort;
exports.getSortingFunction = getSortingFunction;
exports.preciseRound = preciseRound;
exports.getRoundingDecimalFromStep = getRoundingDecimalFromStep;
exports.roundValToStep = roundValToStep;
exports.findFirstNoneEmpty = findFirstNoneEmpty;
exports.getFormatter = getFormatter;
exports.applyDefaultFormat = applyDefaultFormat;
exports.applyCustomFormat = applyCustomFormat;
exports.arrayMove = exports.parseFieldValue = exports.FIELD_DISPLAY_FORMAT = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _moment = _interopRequireDefault(require("moment"));

var _assert = _interopRequireDefault(require("assert"));

var _defaultSettings = require("../constants/default-settings");

var _tooltip = require("../constants/tooltip");

var _d3Format = require("d3-format");

var _FIELD_DISPLAY_FORMAT;

var MAX_LATITUDE = 90;
var MIN_LATITUDE = -90;
var MAX_LONGITUDE = 180;
var MIN_LONGITUDE = -180;
/**
 * simple getting unique values of an array
 *
 * @param {array} values
 * @returns {array} unique values
 */

function unique(values) {
  var results = [];
  values.forEach(function (v) {
    if (!results.includes(v) && notNullorUndefined(v)) {
      results.push(v);
    }
  });
  return results;
}
/* eslint-disable max-statements */

/**
 * return center of map from given points
 * @param {array} layers
 * @returns {object} coordinates of map center, empty if not found
 */


function findMapBounds(layers) {
  // find bounds in formatted layerData
  // take ALL layers into account when finding map bounds
  var availableLayerBounds = layers.reduce(function (res, l) {
    if (l.meta && l.meta.bounds) {
      res.push(l.meta.bounds);
    }

    return res;
  }, []); // return null if no layer is available

  if (availableLayerBounds.length === 0) {
    return null;
  } // merge bounds in each layer


  var newBounds = availableLayerBounds.reduce(function (res, b) {
    return [Math.min(res[0], b[0]), Math.min(res[1], b[1]), Math.max(res[2], b[2]), Math.max(res[3], b[3])];
  }, [MAX_LONGITUDE, MAX_LATITUDE, MIN_LONGITUDE, MIN_LATITUDE]);
  return newBounds;
}
/* eslint-enable max-statements */


function getLatLngBounds(points, idx, limit) {
  var lats = points.map(function (d) {
    return Array.isArray(d) && d[idx];
  }).filter(Number.isFinite).sort(numberSort);

  if (!lats.length) {
    return null;
  } // clamp to limit


  return [Math.max(lats[0], limit[0]), Math.min(lats[lats.length - 1], limit[1])];
}

function clamp(_ref, val) {
  var _ref2 = (0, _slicedToArray2["default"])(_ref, 2),
      min = _ref2[0],
      max = _ref2[1];

  return val <= min ? min : val >= max ? max : val;
}

function getSampleData(data) {
  var sampleSize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
  var getValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (d) {
    return d;
  };
  var sampleStep = Math.max(Math.floor(data.length / sampleSize), 1);
  var output = [];

  for (var i = 0; i < data.length; i += sampleStep) {
    output.push(getValue(data[i]));
  }

  return output;
}
/**
 * Convert different time format to unix milliseconds
 * @type {typeof import('./data-utils').timeToUnixMilli}
 */


function timeToUnixMilli(value, format) {
  if (notNullorUndefined(value)) {
    return typeof value === 'string' ? _moment["default"].utc(value, format).valueOf() : format === 'x' ? value * 1000 : value;
  }

  return null;
}
/**
 *
 * @type {typeof import('./data-utils').maybeToDate}
 */


function maybeToDate(isTime, fieldIdx, format, d) {
  if (isTime) {
    return timeToUnixMilli(d[fieldIdx], format);
  }

  return d[fieldIdx];
}
/**
 * whether null or undefined
 * @type {typeof import('./data-utils').notNullorUndefined}
 */


function notNullorUndefined(d) {
  return d !== undefined && d !== null;
}
/**
 * whether null or undefined
 */


function isPlainObject(obj) {
  return obj === Object(obj) && typeof obj !== 'function' && !Array.isArray(obj);
}
/**
 * @type {typeof import('./data-utils').numberSort}
 */


function numberSort(a, b) {
  return a - b;
}
/**
 * @type {typeof import('./data-utils').getSortingFunction}
 */


function getSortingFunction(fieldType) {
  switch (fieldType) {
    case _defaultSettings.ALL_FIELD_TYPES.real:
    case _defaultSettings.ALL_FIELD_TYPES.integer:
    case _defaultSettings.ALL_FIELD_TYPES.timestamp:
      return numberSort;

    default:
      return undefined;
  }
}
/**
 * round number with exact number of decimals
 * return as a string
 * @type {typeof import('./data-utils').preciseRound}
 */


function preciseRound(num, decimals) {
  var t = Math.pow(10, decimals);
  return (Math.round(num * t + (decimals > 0 ? 1 : 0) * (Math.sign(num) * (10 / Math.pow(100, decimals)))) / t).toFixed(decimals);
}
/**
 * get number of decimals to round to for slider from step
 * @param {number} step
 * @returns {number} - number of decimal
 */


function getRoundingDecimalFromStep(step) {
  if (isNaN(step)) {
    (0, _assert["default"])('step is not a number');
    (0, _assert["default"])(step);
  }

  var splitZero = step.toString().split('.');

  if (splitZero.length === 1) {
    return 0;
  }

  return splitZero[1].length;
}
/**
 * round the value to step for the slider
 * @param {number} minValue
 * @param {number} step
 * @param {number} val
 * @returns {number} - rounded number
 */


function roundValToStep(minValue, step, val) {
  if (isNaN(step)) {
    return val;
  }

  var decimal = getRoundingDecimalFromStep(step);
  var steps = Math.floor((val - minValue) / step);
  var remain = val - (steps * step + minValue); // has to round because javascript turns 0.1 into 0.9999999999999987

  remain = Number(preciseRound(remain, 8));
  var closest;

  if (remain === 0) {
    closest = val;
  } else if (remain < step / 2) {
    closest = steps * step + minValue;
  } else {
    closest = (steps + 1) * step + minValue;
  } // precise round return a string rounded to the defined decimal


  var rounded = preciseRound(closest, decimal);
  return Number(rounded);
}

var identity = function identity(d) {
  return d;
};

var FIELD_DISPLAY_FORMAT = (_FIELD_DISPLAY_FORMAT = {}, (0, _defineProperty2["default"])(_FIELD_DISPLAY_FORMAT, _defaultSettings.ALL_FIELD_TYPES.string, identity), (0, _defineProperty2["default"])(_FIELD_DISPLAY_FORMAT, _defaultSettings.ALL_FIELD_TYPES.timestamp, identity), (0, _defineProperty2["default"])(_FIELD_DISPLAY_FORMAT, _defaultSettings.ALL_FIELD_TYPES.integer, identity), (0, _defineProperty2["default"])(_FIELD_DISPLAY_FORMAT, _defaultSettings.ALL_FIELD_TYPES.real, identity), (0, _defineProperty2["default"])(_FIELD_DISPLAY_FORMAT, _defaultSettings.ALL_FIELD_TYPES["boolean"], function (d) {
  return String(d);
}), (0, _defineProperty2["default"])(_FIELD_DISPLAY_FORMAT, _defaultSettings.ALL_FIELD_TYPES.date, identity), (0, _defineProperty2["default"])(_FIELD_DISPLAY_FORMAT, _defaultSettings.ALL_FIELD_TYPES.geojson, function (d) {
  return typeof d === 'string' ? d : isPlainObject(d) ? JSON.stringify(d) : Array.isArray(d) ? "[".concat(String(d), "]") : '';
}), _FIELD_DISPLAY_FORMAT);
/**
 * Parse field value and type and return a string representation
 * @type {typeof import('./data-utils').parseFieldValue}
 */

exports.FIELD_DISPLAY_FORMAT = FIELD_DISPLAY_FORMAT;

var parseFieldValue = function parseFieldValue(value, type) {
  if (!notNullorUndefined(value)) {
    return '';
  }

  return FIELD_DISPLAY_FORMAT[type] ? FIELD_DISPLAY_FORMAT[type](value) : String(value);
};

exports.parseFieldValue = parseFieldValue;

var arrayMoveMutate = function arrayMoveMutate(array, from, to) {
  array.splice(to < 0 ? array.length + to : to, 0, array.splice(from, 1)[0]);
};

var arrayMove = function arrayMove(array, from, to) {
  array = array.slice();
  arrayMoveMutate(array, from, to);
  return array;
};

exports.arrayMove = arrayMove;

function findFirstNoneEmpty(data) {
  var count = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var getValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : identity;
  var c = 0;
  var found = [];

  while (c < count && c < data.length) {
    var value = getValue(data[c]);

    if (notNullorUndefined(value)) {
      found.push(value);
    }

    c++;
  }

  return found;
}

function getFormatter(format, field) {
  var defaultFormatter = function defaultFormatter(v) {
    return v;
  };

  if (!format) {
    return defaultFormatter;
  }

  var tooltipFormat = Object.values(_tooltip.TOOLTIP_FORMATS).find(function (f) {
    return f[_tooltip.TOOLTIP_KEY] === format;
  });

  if (tooltipFormat) {
    return applyDefaultFormat(tooltipFormat);
  } else if (typeof format === 'string' && field) {
    return applyCustomFormat(format, field);
  }

  return defaultFormatter;
}

function applyDefaultFormat(tooltipFormat) {
  if (!tooltipFormat || !tooltipFormat.format) {
    return function (v) {
      return v;
    };
  }

  switch (tooltipFormat.type) {
    case _tooltip.TOOLTIP_FORMAT_TYPES.DECIMAL:
      return (0, _d3Format.format)(tooltipFormat.format);

    case _tooltip.TOOLTIP_FORMAT_TYPES.DATE:
    case _tooltip.TOOLTIP_FORMAT_TYPES.DATE_TIME:
      return function (v) {
        return _moment["default"].utc(v).format(tooltipFormat.format);
      };

    case _tooltip.TOOLTIP_FORMAT_TYPES.PERCENTAGE:
      return function (v) {
        return "".concat((0, _d3Format.format)(_tooltip.TOOLTIP_FORMATS.DECIMAL_DECIMAL_FIXED_2.format)(v), "%");
      };

    default:
      return function (v) {
        return v;
      };
  }
} // Allow user to specify custom tooltip format via config


function applyCustomFormat(format, field) {
  switch (field.type) {
    case _defaultSettings.ALL_FIELD_TYPES.real:
    case _defaultSettings.ALL_FIELD_TYPES.integer:
      return (0, _d3Format.format)(format);

    case _defaultSettings.ALL_FIELD_TYPES.date:
    case _defaultSettings.ALL_FIELD_TYPES.timestamp:
      return function (v) {
        return _moment["default"].utc(v).format(format);
      };

    default:
      return function (v) {
        return v;
      };
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy9kYXRhLXV0aWxzLmpzIl0sIm5hbWVzIjpbIk1BWF9MQVRJVFVERSIsIk1JTl9MQVRJVFVERSIsIk1BWF9MT05HSVRVREUiLCJNSU5fTE9OR0lUVURFIiwidW5pcXVlIiwidmFsdWVzIiwicmVzdWx0cyIsImZvckVhY2giLCJ2IiwiaW5jbHVkZXMiLCJub3ROdWxsb3JVbmRlZmluZWQiLCJwdXNoIiwiZmluZE1hcEJvdW5kcyIsImxheWVycyIsImF2YWlsYWJsZUxheWVyQm91bmRzIiwicmVkdWNlIiwicmVzIiwibCIsIm1ldGEiLCJib3VuZHMiLCJsZW5ndGgiLCJuZXdCb3VuZHMiLCJiIiwiTWF0aCIsIm1pbiIsIm1heCIsImdldExhdExuZ0JvdW5kcyIsInBvaW50cyIsImlkeCIsImxpbWl0IiwibGF0cyIsIm1hcCIsImQiLCJBcnJheSIsImlzQXJyYXkiLCJmaWx0ZXIiLCJOdW1iZXIiLCJpc0Zpbml0ZSIsInNvcnQiLCJudW1iZXJTb3J0IiwiY2xhbXAiLCJ2YWwiLCJnZXRTYW1wbGVEYXRhIiwiZGF0YSIsInNhbXBsZVNpemUiLCJnZXRWYWx1ZSIsInNhbXBsZVN0ZXAiLCJmbG9vciIsIm91dHB1dCIsImkiLCJ0aW1lVG9Vbml4TWlsbGkiLCJ2YWx1ZSIsImZvcm1hdCIsIm1vbWVudCIsInV0YyIsInZhbHVlT2YiLCJtYXliZVRvRGF0ZSIsImlzVGltZSIsImZpZWxkSWR4IiwidW5kZWZpbmVkIiwiaXNQbGFpbk9iamVjdCIsIm9iaiIsIk9iamVjdCIsImEiLCJnZXRTb3J0aW5nRnVuY3Rpb24iLCJmaWVsZFR5cGUiLCJBTExfRklFTERfVFlQRVMiLCJyZWFsIiwiaW50ZWdlciIsInRpbWVzdGFtcCIsInByZWNpc2VSb3VuZCIsIm51bSIsImRlY2ltYWxzIiwidCIsInBvdyIsInJvdW5kIiwic2lnbiIsInRvRml4ZWQiLCJnZXRSb3VuZGluZ0RlY2ltYWxGcm9tU3RlcCIsInN0ZXAiLCJpc05hTiIsInNwbGl0WmVybyIsInRvU3RyaW5nIiwic3BsaXQiLCJyb3VuZFZhbFRvU3RlcCIsIm1pblZhbHVlIiwiZGVjaW1hbCIsInN0ZXBzIiwicmVtYWluIiwiY2xvc2VzdCIsInJvdW5kZWQiLCJpZGVudGl0eSIsIkZJRUxEX0RJU1BMQVlfRk9STUFUIiwic3RyaW5nIiwiU3RyaW5nIiwiZGF0ZSIsImdlb2pzb24iLCJKU09OIiwic3RyaW5naWZ5IiwicGFyc2VGaWVsZFZhbHVlIiwidHlwZSIsImFycmF5TW92ZU11dGF0ZSIsImFycmF5IiwiZnJvbSIsInRvIiwic3BsaWNlIiwiYXJyYXlNb3ZlIiwic2xpY2UiLCJmaW5kRmlyc3ROb25lRW1wdHkiLCJjb3VudCIsImMiLCJmb3VuZCIsImdldEZvcm1hdHRlciIsImZpZWxkIiwiZGVmYXVsdEZvcm1hdHRlciIsInRvb2x0aXBGb3JtYXQiLCJUT09MVElQX0ZPUk1BVFMiLCJmaW5kIiwiZiIsIlRPT0xUSVBfS0VZIiwiYXBwbHlEZWZhdWx0Rm9ybWF0IiwiYXBwbHlDdXN0b21Gb3JtYXQiLCJUT09MVElQX0ZPUk1BVF9UWVBFUyIsIkRFQ0lNQUwiLCJEQVRFIiwiREFURV9USU1FIiwiUEVSQ0VOVEFHRSIsIkRFQ0lNQUxfREVDSU1BTF9GSVhFRF8yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7O0FBRUEsSUFBTUEsWUFBWSxHQUFHLEVBQXJCO0FBQ0EsSUFBTUMsWUFBWSxHQUFHLENBQUMsRUFBdEI7QUFDQSxJQUFNQyxhQUFhLEdBQUcsR0FBdEI7QUFDQSxJQUFNQyxhQUFhLEdBQUcsQ0FBQyxHQUF2QjtBQUVBOzs7Ozs7O0FBTU8sU0FBU0MsTUFBVCxDQUFnQkMsTUFBaEIsRUFBd0I7QUFDN0IsTUFBTUMsT0FBTyxHQUFHLEVBQWhCO0FBQ0FELEVBQUFBLE1BQU0sQ0FBQ0UsT0FBUCxDQUFlLFVBQUFDLENBQUMsRUFBSTtBQUNsQixRQUFJLENBQUNGLE9BQU8sQ0FBQ0csUUFBUixD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VGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5pbXBvcnQgYXNzZXJ0IGZyb20gJ2Fzc2VydCc7XHJcbmltcG9ydCB7QUxMX0ZJRUxEX1RZUEVTfSBmcm9tICdjb25zdGFudHMvZGVmYXVsdC1zZXR0aW5ncyc7XHJcbmltcG9ydCB7VE9PTFRJUF9GT1JNQVRTLCBUT09MVElQX0ZPUk1BVF9UWVBFUywgVE9PTFRJUF9LRVl9IGZyb20gJ2NvbnN0YW50cy90b29sdGlwJztcclxuaW1wb3J0IHtmb3JtYXQgYXMgZDNGb3JtYXR9IGZyb20gJ2QzLWZvcm1hdCc7XHJcblxyXG5jb25zdCBNQVhfTEFUSVRVREUgPSA5MDtcclxuY29uc3QgTUlOX0xBVElUVURFID0gLTkwO1xyXG5jb25zdCBNQVhfTE9OR0lUVURFID0gMTgwO1xyXG5jb25zdCBNSU5fTE9OR0lUVURFID0gLTE4MDtcclxuXHJcbi8qKlxyXG4gKiBzaW1wbGUgZ2V0dGluZyB1bmlxdWUgdmFsdWVzIG9mIGFuIGFycmF5XHJcbiAqXHJcbiAqIEBwYXJhbSB7YXJyYXl9IHZhbHVlc1xyXG4gKiBAcmV0dXJucyB7YXJyYXl9IHVuaXF1ZSB2YWx1ZXNcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB1bmlxdWUodmFsdWVzKSB7XHJcbiAgY29uc3QgcmVzdWx0cyA9IFtdO1xyXG4gIHZhbHVlcy5mb3JFYWNoKHYgPT4ge1xyXG4gICAgaWYgKCFyZXN1bHRzLmluY2x1ZGVzKHYpICYmIG5vdE51bGxvclVuZGVmaW5lZCh2KSkge1xyXG4gICAgICByZXN1bHRzLnB1c2godik7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiByZXN1bHRzO1xyXG59XHJcblxyXG4vKiBlc2xpbnQtZGlzYWJsZSBtYXgtc3RhdGVtZW50cyAqL1xyXG4vKipcclxuICogcmV0dXJuIGNlbnRlciBvZiBtYXAgZnJvbSBnaXZlbiBwb2ludHNcclxuICogQHBhcmFtIHthcnJheX0gbGF5ZXJzXHJcbiAqIEByZXR1cm5zIHtvYmplY3R9IGNvb3JkaW5hdGVzIG9mIG1hcCBjZW50ZXIsIGVtcHR5IGlmIG5vdCBmb3VuZFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRNYXBCb3VuZHMobGF5ZXJzKSB7XHJcbiAgLy8gZmluZCBib3VuZHMgaW4gZm9ybWF0dGVkIGxheWVyRGF0YVxyXG4gIC8vIHRha2UgQUxMIGxheWVycyBpbnRvIGFjY291bnQgd2hlbiBmaW5kaW5nIG1hcCBib3VuZHNcclxuICBjb25zdCBhdmFpbGFibGVMYXllckJvdW5kcyA9IGxheWVycy5yZWR1Y2UoKHJlcywgbCkgPT4ge1xyXG4gICAgaWYgKGwubWV0YSAmJiBsLm1ldGEuYm91bmRzKSB7XHJcbiAgICAgIHJlcy5wdXNoKGwubWV0YS5ib3VuZHMpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlcztcclxuICB9LCBbXSk7XHJcbiAgLy8gcmV0dXJuIG51bGwgaWYgbm8gbGF5ZXIgaXMgYXZhaWxhYmxlXHJcbiAgaWYgKGF2YWlsYWJsZUxheWVyQm91bmRzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG4gIC8vIG1lcmdlIGJvdW5kcyBpbiBlYWNoIGxheWVyXHJcbiAgY29uc3QgbmV3Qm91bmRzID0gYXZhaWxhYmxlTGF5ZXJCb3VuZHMucmVkdWNlKFxyXG4gICAgKHJlcywgYikgPT4ge1xyXG4gICAgICByZXR1cm4gW1xyXG4gICAgICAgIE1hdGgubWluKHJlc1swXSwgYlswXSksXHJcbiAgICAgICAgTWF0aC5taW4ocmVzWzFdLCBiWzFdKSxcclxuICAgICAgICBNYXRoLm1heChyZXNbMl0sIGJbMl0pLFxyXG4gICAgICAgIE1hdGgubWF4KHJlc1szXSwgYlszXSlcclxuICAgICAgXTtcclxuICAgIH0sXHJcbiAgICBbTUFYX0xPTkdJVFVERSwgTUFYX0xBVElUVURFLCBNSU5fTE9OR0lUVURFLCBNSU5fTEFUSVRVREVdXHJcbiAgKTtcclxuICByZXR1cm4gbmV3Qm91bmRzO1xyXG59XHJcbi8qIGVzbGludC1lbmFibGUgbWF4LXN0YXRlbWVudHMgKi9cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRMYXRMbmdCb3VuZHMocG9pbnRzLCBpZHgsIGxpbWl0KSB7XHJcbiAgY29uc3QgbGF0cyA9IHBvaW50c1xyXG4gICAgLm1hcChkID0+IEFycmF5LmlzQXJyYXkoZCkgJiYgZFtpZHhdKVxyXG4gICAgLmZpbHRlcihOdW1iZXIuaXNGaW5pdGUpXHJcbiAgICAuc29ydChudW1iZXJTb3J0KTtcclxuXHJcbiAgaWYgKCFsYXRzLmxlbmd0aCkge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICAvLyBjbGFtcCB0byBsaW1pdFxyXG4gIHJldHVybiBbTWF0aC5tYXgobGF0c1swXSwgbGltaXRbMF0pLCBNYXRoLm1pbihsYXRzW2xhdHMubGVuZ3RoIC0gMV0sIGxpbWl0WzFdKV07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjbGFtcChbbWluLCBtYXhdLCB2YWwpIHtcclxuICByZXR1cm4gdmFsIDw9IG1pbiA/IG1pbiA6IHZhbCA+PSBtYXggPyBtYXggOiB2YWw7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRTYW1wbGVEYXRhKGRhdGEsIHNhbXBsZVNpemUgPSA1MDAsIGdldFZhbHVlID0gZCA9PiBkKSB7XHJcbiAgY29uc3Qgc2FtcGxlU3RlcCA9IE1hdGgubWF4KE1hdGguZmxvb3IoZGF0YS5sZW5ndGggLyBzYW1wbGVTaXplKSwgMSk7XHJcbiAgY29uc3Qgb3V0cHV0ID0gW107XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSArPSBzYW1wbGVTdGVwKSB7XHJcbiAgICBvdXRwdXQucHVzaChnZXRWYWx1ZShkYXRhW2ldKSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gb3V0cHV0O1xyXG59XHJcblxyXG4vKipcclxuICogQ29udmVydCBkaWZmZXJlbnQgdGltZSBmb3JtYXQgdG8gdW5peCBtaWxsaXNlY29uZHNcclxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vZGF0YS11dGlscycpLnRpbWVUb1VuaXhNaWxsaX1cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB0aW1lVG9Vbml4TWlsbGkodmFsdWUsIGZvcm1hdCkge1xyXG4gIGlmIChub3ROdWxsb3JVbmRlZmluZWQodmFsdWUpKSB7XHJcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJ1xyXG4gICAgICA/IG1vbWVudC51dGModmFsdWUsIGZvcm1hdCkudmFsdWVPZigpXHJcbiAgICAgIDogZm9ybWF0ID09PSAneCdcclxuICAgICAgPyB2YWx1ZSAqIDEwMDBcclxuICAgICAgOiB2YWx1ZTtcclxuICB9XHJcbiAgcmV0dXJuIG51bGw7XHJcbn1cclxuXHJcbi8qKlxyXG4gKlxyXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi9kYXRhLXV0aWxzJykubWF5YmVUb0RhdGV9XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbWF5YmVUb0RhdGUoaXNUaW1lLCBmaWVsZElkeCwgZm9ybWF0LCBkKSB7XHJcbiAgaWYgKGlzVGltZSkge1xyXG4gICAgcmV0dXJuIHRpbWVUb1VuaXhNaWxsaShkW2ZpZWxkSWR4XSwgZm9ybWF0KTtcclxuICB9XHJcblxyXG4gIHJldHVybiBkW2ZpZWxkSWR4XTtcclxufVxyXG5cclxuLyoqXHJcbiAqIHdoZXRoZXIgbnVsbCBvciB1bmRlZmluZWRcclxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vZGF0YS11dGlscycpLm5vdE51bGxvclVuZGVmaW5lZH1cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBub3ROdWxsb3JVbmRlZmluZWQoZCkge1xyXG4gIHJldHVybiBkICE9PSB1bmRlZmluZWQgJiYgZCAhPT0gbnVsbDtcclxufVxyXG5cclxuLyoqXHJcbiAqIHdoZXRoZXIgbnVsbCBvciB1bmRlZmluZWRcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1BsYWluT2JqZWN0KG9iaikge1xyXG4gIHJldHVybiBvYmogPT09IE9iamVjdChvYmopICYmIHR5cGVvZiBvYmogIT09ICdmdW5jdGlvbicgJiYgIUFycmF5LmlzQXJyYXkob2JqKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL2RhdGEtdXRpbHMnKS5udW1iZXJTb3J0fVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG51bWJlclNvcnQoYSwgYikge1xyXG4gIHJldHVybiBhIC0gYjtcclxufVxyXG5cclxuLyoqXHJcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL2RhdGEtdXRpbHMnKS5nZXRTb3J0aW5nRnVuY3Rpb259XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0U29ydGluZ0Z1bmN0aW9uKGZpZWxkVHlwZSkge1xyXG4gIHN3aXRjaCAoZmllbGRUeXBlKSB7XHJcbiAgICBjYXNlIEFMTF9GSUVMRF9UWVBFUy5yZWFsOlxyXG4gICAgY2FzZSBBTExfRklFTERfVFlQRVMuaW50ZWdlcjpcclxuICAgIGNhc2UgQUxMX0ZJRUxEX1RZUEVTLnRpbWVzdGFtcDpcclxuICAgICAgcmV0dXJuIG51bWJlclNvcnQ7XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIHJvdW5kIG51bWJlciB3aXRoIGV4YWN0IG51bWJlciBvZiBkZWNpbWFsc1xyXG4gKiByZXR1cm4gYXMgYSBzdHJpbmdcclxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vZGF0YS11dGlscycpLnByZWNpc2VSb3VuZH1cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBwcmVjaXNlUm91bmQobnVtLCBkZWNpbWFscykge1xyXG4gIGNvbnN0IHQgPSBNYXRoLnBvdygxMCwgZGVjaW1hbHMpO1xyXG4gIHJldHVybiAoXHJcbiAgICBNYXRoLnJvdW5kKFxyXG4gICAgICBudW0gKiB0ICsgKGRlY2ltYWxzID4gMCA/IDEgOiAwKSAqIChNYXRoLnNpZ24obnVtKSAqICgxMCAvIE1hdGgucG93KDEwMCwgZGVjaW1hbHMpKSlcclxuICAgICkgLyB0XHJcbiAgKS50b0ZpeGVkKGRlY2ltYWxzKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIGdldCBudW1iZXIgb2YgZGVjaW1hbHMgdG8gcm91bmQgdG8gZm9yIHNsaWRlciBmcm9tIHN0ZXBcclxuICogQHBhcmFtIHtudW1iZXJ9IHN0ZXBcclxuICogQHJldHVybnMge251bWJlcn0gLSBudW1iZXIgb2YgZGVjaW1hbFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdW5kaW5nRGVjaW1hbEZyb21TdGVwKHN0ZXApIHtcclxuICBpZiAoaXNOYU4oc3RlcCkpIHtcclxuICAgIGFzc2VydCgnc3RlcCBpcyBub3QgYSBudW1iZXInKTtcclxuICAgIGFzc2VydChzdGVwKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHNwbGl0WmVybyA9IHN0ZXAudG9TdHJpbmcoKS5zcGxpdCgnLicpO1xyXG4gIGlmIChzcGxpdFplcm8ubGVuZ3RoID09PSAxKSB7XHJcbiAgICByZXR1cm4gMDtcclxuICB9XHJcbiAgcmV0dXJuIHNwbGl0WmVyb1sxXS5sZW5ndGg7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiByb3VuZCB0aGUgdmFsdWUgdG8gc3RlcCBmb3IgdGhlIHNsaWRlclxyXG4gKiBAcGFyYW0ge251bWJlcn0gbWluVmFsdWVcclxuICogQHBhcmFtIHtudW1iZXJ9IHN0ZXBcclxuICogQHBhcmFtIHtudW1iZXJ9IHZhbFxyXG4gKiBAcmV0dXJucyB7bnVtYmVyfSAtIHJvdW5kZWQgbnVtYmVyXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcm91bmRWYWxUb1N0ZXAobWluVmFsdWUsIHN0ZXAsIHZhbCkge1xyXG4gIGlmIChpc05hTihzdGVwKSkge1xyXG4gICAgcmV0dXJuIHZhbDtcclxuICB9XHJcblxyXG4gIGNvbnN0IGRlY2ltYWwgPSBnZXRSb3VuZGluZ0RlY2ltYWxGcm9tU3RlcChzdGVwKTtcclxuICBjb25zdCBzdGVwcyA9IE1hdGguZmxvb3IoKHZhbCAtIG1pblZhbHVlKSAvIHN0ZXApO1xyXG4gIGxldCByZW1haW4gPSB2YWwgLSAoc3RlcHMgKiBzdGVwICsgbWluVmFsdWUpO1xyXG5cclxuICAvLyBoYXMgdG8gcm91bmQgYmVjYXVzZSBqYXZhc2NyaXB0IHR1cm5zIDAuMSBpbnRvIDAuOTk5OTk5OTk5OTk5OTk4N1xyXG4gIHJlbWFpbiA9IE51bWJlcihwcmVjaXNlUm91bmQocmVtYWluLCA4KSk7XHJcblxyXG4gIGxldCBjbG9zZXN0O1xyXG4gIGlmIChyZW1haW4gPT09IDApIHtcclxuICAgIGNsb3Nlc3QgPSB2YWw7XHJcbiAgfSBlbHNlIGlmIChyZW1haW4gPCBzdGVwIC8gMikge1xyXG4gICAgY2xvc2VzdCA9IHN0ZXBzICogc3RlcCArIG1pblZhbHVlO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjbG9zZXN0ID0gKHN0ZXBzICsgMSkgKiBzdGVwICsgbWluVmFsdWU7XHJcbiAgfVxyXG5cclxuICAvLyBwcmVjaXNlIHJvdW5kIHJldHVybiBhIHN0cmluZyByb3VuZGVkIHRvIHRoZSBkZWZpbmVkIGRlY2ltYWxcclxuICBjb25zdCByb3VuZGVkID0gcHJlY2lzZVJvdW5kKGNsb3Nlc3QsIGRlY2ltYWwpO1xyXG5cclxuICByZXR1cm4gTnVtYmVyKHJvdW5kZWQpO1xyXG59XHJcblxyXG5jb25zdCBpZGVudGl0eSA9IGQgPT4gZDtcclxuXHJcbmV4cG9ydCBjb25zdCBGSUVMRF9ESVNQTEFZX0ZPUk1BVCA9IHtcclxuICBbQUxMX0ZJRUxEX1RZUEVTLnN0cmluZ106IGlkZW50aXR5LFxyXG4gIFtBTExfRklFTERfVFlQRVMudGltZXN0YW1wXTogaWRlbnRpdHksXHJcbiAgW0FMTF9GSUVMRF9UWVBFUy5pbnRlZ2VyXTogaWRlbnRpdHksXHJcbiAgW0FMTF9GSUVMRF9UWVBFUy5yZWFsXTogaWRlbnRpdHksXHJcbiAgW0FMTF9GSUVMRF9UWVBFUy5ib29sZWFuXTogZCA9PiBTdHJpbmcoZCksXHJcbiAgW0FMTF9GSUVMRF9UWVBFUy5kYXRlXTogaWRlbnRpdHksXHJcbiAgW0FMTF9GSUVMRF9UWVBFUy5nZW9qc29uXTogZCA9PlxyXG4gICAgdHlwZW9mIGQgPT09ICdzdHJpbmcnXHJcbiAgICAgID8gZFxyXG4gICAgICA6IGlzUGxhaW5PYmplY3QoZClcclxuICAgICAgPyBKU09OLnN0cmluZ2lmeShkKVxyXG4gICAgICA6IEFycmF5LmlzQXJyYXkoZClcclxuICAgICAgPyBgWyR7U3RyaW5nKGQpfV1gXHJcbiAgICAgIDogJydcclxufTtcclxuXHJcbi8qKlxyXG4gKiBQYXJzZSBmaWVsZCB2YWx1ZSBhbmQgdHlwZSBhbmQgcmV0dXJuIGEgc3RyaW5nIHJlcHJlc2VudGF0aW9uXHJcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL2RhdGEtdXRpbHMnKS5wYXJzZUZpZWxkVmFsdWV9XHJcbiAqL1xyXG5leHBvcnQgY29uc3QgcGFyc2VGaWVsZFZhbHVlID0gKHZhbHVlLCB0eXBlKSA9PiB7XHJcbiAgaWYgKCFub3ROdWxsb3JVbmRlZmluZWQodmFsdWUpKSB7XHJcbiAgICByZXR1cm4gJyc7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gRklFTERfRElTUExBWV9GT1JNQVRbdHlwZV0gPyBGSUVMRF9ESVNQTEFZX0ZPUk1BVFt0eXBlXSh2YWx1ZSkgOiBTdHJpbmcodmFsdWUpO1xyXG59O1xyXG5cclxuY29uc3QgYXJyYXlNb3ZlTXV0YXRlID0gKGFycmF5LCBmcm9tLCB0bykgPT4ge1xyXG4gIGFycmF5LnNwbGljZSh0byA8IDAgPyBhcnJheS5sZW5ndGggKyB0byA6IHRvLCAwLCBhcnJheS5zcGxpY2UoZnJvbSwgMSlbMF0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGFycmF5TW92ZSA9IChhcnJheSwgZnJvbSwgdG8pID0+IHtcclxuICBhcnJheSA9IGFycmF5LnNsaWNlKCk7XHJcbiAgYXJyYXlNb3ZlTXV0YXRlKGFycmF5LCBmcm9tLCB0byk7XHJcbiAgcmV0dXJuIGFycmF5O1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRGaXJzdE5vbmVFbXB0eShkYXRhLCBjb3VudCA9IDEsIGdldFZhbHVlID0gaWRlbnRpdHkpIHtcclxuICBsZXQgYyA9IDA7XHJcbiAgY29uc3QgZm91bmQgPSBbXTtcclxuICB3aGlsZSAoYyA8IGNvdW50ICYmIGMgPCBkYXRhLmxlbmd0aCkge1xyXG4gICAgY29uc3QgdmFsdWUgPSBnZXRWYWx1ZShkYXRhW2NdKTtcclxuICAgIGlmIChub3ROdWxsb3JVbmRlZmluZWQodmFsdWUpKSB7XHJcbiAgICAgIGZvdW5kLnB1c2godmFsdWUpO1xyXG4gICAgfVxyXG4gICAgYysrO1xyXG4gIH1cclxuICByZXR1cm4gZm91bmQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRGb3JtYXR0ZXIoZm9ybWF0LCBmaWVsZCkge1xyXG4gIGNvbnN0IGRlZmF1bHRGb3JtYXR0ZXIgPSB2ID0+IHY7XHJcbiAgaWYgKCFmb3JtYXQpIHtcclxuICAgIHJldHVybiBkZWZhdWx0Rm9ybWF0dGVyO1xyXG4gIH1cclxuICBjb25zdCB0b29sdGlwRm9ybWF0ID0gT2JqZWN0LnZhbHVlcyhUT09MVElQX0ZPUk1BVFMpLmZpbmQoZiA9PiBmW1RPT0xUSVBfS0VZXSA9PT0gZm9ybWF0KTtcclxuXHJcbiAgaWYgKHRvb2x0aXBGb3JtYXQpIHtcclxuICAgIHJldHVybiBhcHBseURlZmF1bHRGb3JtYXQodG9vbHRpcEZvcm1hdCk7XHJcbiAgfSBlbHNlIGlmICh0eXBlb2YgZm9ybWF0ID09PSAnc3RyaW5nJyAmJiBmaWVsZCkge1xyXG4gICAgcmV0dXJuIGFwcGx5Q3VzdG9tRm9ybWF0KGZvcm1hdCwgZmllbGQpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGRlZmF1bHRGb3JtYXR0ZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhcHBseURlZmF1bHRGb3JtYXQodG9vbHRpcEZvcm1hdCkge1xyXG4gIGlmICghdG9vbHRpcEZvcm1hdCB8fCAhdG9vbHRpcEZvcm1hdC5mb3JtYXQpIHtcclxuICAgIHJldHVybiB2ID0+IHY7XHJcbiAgfVxyXG5cclxuICBzd2l0Y2ggKHRvb2x0aXBGb3JtYXQudHlwZSkge1xyXG4gICAgY2FzZSBUT09MVElQX0ZPUk1BVF9UWVBFUy5ERUNJTUFMOlxyXG4gICAgICByZXR1cm4gZDNGb3JtYXQodG9vbHRpcEZvcm1hdC5mb3JtYXQpO1xyXG4gICAgY2FzZSBUT09MVElQX0ZPUk1BVF9UWVBFUy5EQVRFOlxyXG4gICAgY2FzZSBUT09MVElQX0ZPUk1BVF9UWVBFUy5EQVRFX1RJTUU6XHJcbiAgICAgIHJldHVybiB2ID0+IG1vbWVudC51dGModikuZm9ybWF0KHRvb2x0aXBGb3JtYXQuZm9ybWF0KTtcclxuICAgIGNhc2UgVE9PTFRJUF9GT1JNQVRfVFlQRVMuUEVSQ0VOVEFHRTpcclxuICAgICAgcmV0dXJuIHYgPT4gYCR7ZDNGb3JtYXQoVE9PTFRJUF9GT1JNQVRTLkRFQ0lNQUxfREVDSU1BTF9GSVhFRF8yLmZvcm1hdCkodil9JWA7XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gdiA9PiB2O1xyXG4gIH1cclxufVxyXG5cclxuLy8gQWxsb3cgdXNlciB0byBzcGVjaWZ5IGN1c3RvbSB0b29sdGlwIGZvcm1hdCB2aWEgY29uZmlnXHJcbmV4cG9ydCBmdW5jdGlvbiBhcHBseUN1c3RvbUZvcm1hdChmb3JtYXQsIGZpZWxkKSB7XHJcbiAgc3dpdGNoIChmaWVsZC50eXBlKSB7XHJcbiAgICBjYXNlIEFMTF9GSUVMRF9UWVBFUy5yZWFsOlxyXG4gICAgY2FzZSBBTExfRklFTERfVFlQRVMuaW50ZWdlcjpcclxuICAgICAgcmV0dXJuIGQzRm9ybWF0KGZvcm1hdCk7XHJcbiAgICBjYXNlIEFMTF9GSUVMRF9UWVBFUy5kYXRlOlxyXG4gICAgY2FzZSBBTExfRklFTERfVFlQRVMudGltZXN0YW1wOlxyXG4gICAgICByZXR1cm4gdiA9PiBtb21lbnQudXRjKHYpLmZvcm1hdChmb3JtYXQpO1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHYgPT4gdjtcclxuICB9XHJcbn1cclxuIl19