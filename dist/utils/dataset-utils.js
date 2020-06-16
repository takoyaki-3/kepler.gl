"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createNewDataEntry = createNewDataEntry;
exports.removeSuffixAndDelimiters = removeSuffixAndDelimiters;
exports.findPointFieldPairs = findPointFieldPairs;
exports.sortDatasetByColumn = sortDatasetByColumn;
exports.datasetColorMaker = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _colorUtils = require("./color-utils");

var _lodash = _interopRequireDefault(require("lodash.uniq"));

var _defaultSettings = require("../constants/default-settings");

var _utils = require("./utils");

var _dataProcessor = require("../processors/data-processor");

var _gpuFilterUtils = require("./gpu-filter-utils");

var _d3Array = require("d3-array");

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var _marked = /*#__PURE__*/_regenerator["default"].mark(generateColor);

// apply a color for each dataset
// to use as label colors
var datasetColors = ['#8F2FBF', '#005CFF', '#C06C84', '#F8B195', '#547A82', '#3EACA8', '#A2D4AB'].map(_colorUtils.hexToRgb);
/**
 * Random color generator
 * @return {Generator<import('reducers/types').RGBColor>}
 */

function generateColor() {
  var index;
  return _regenerator["default"].wrap(function generateColor$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          index = 0;

        case 1:
          if (!(index < datasetColors.length + 1)) {
            _context.next = 7;
            break;
          }

          if (index === datasetColors.length) {
            index = 0;
          }

          _context.next = 5;
          return datasetColors[index++];

        case 5:
          _context.next = 1;
          break;

        case 7:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}

var datasetColorMaker = generateColor();
/** @type {typeof import('./dataset-utils').getNewDatasetColor} */

exports.datasetColorMaker = datasetColorMaker;

function getNewDatasetColor(datasets) {
  var presetColors = datasetColors.map(String);
  var usedColors = (0, _lodash["default"])(Object.values(datasets).map(function (d) {
    return String(d.color);
  })).filter(function (c) {
    return presetColors.includes(c);
  });

  if (usedColors.length === presetColors.length) {
    // if we already depleted the pool of color
    return datasetColorMaker.next().value;
  }

  var color = datasetColorMaker.next().value;

  while (usedColors.includes(String(color))) {
    color = datasetColorMaker.next().value;
  }

  return color;
}
/**
 * Take datasets payload from addDataToMap, create datasets entry save to visState
 * @type {typeof import('./dataset-utils').createNewDataEntry}
 */


function createNewDataEntry(_ref) {
  var info = _ref.info,
      data = _ref.data;
  var datasets = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var validatedData = (0, _dataProcessor.validateInputData)(data);

  if (!validatedData) {
    return {};
  }

  var allData = validatedData.rows;

  var datasetInfo = _objectSpread({
    id: (0, _utils.generateHashId)(4),
    label: 'new dataset'
  }, info || {});

  var dataId = datasetInfo.id; // add tableFieldIndex and id to fields
  // TODO: don't need id and name and tableFieldIndex anymore
  // Add value accessor instead

  var fields = validatedData.fields.map(function (f, i) {
    return _objectSpread(_objectSpread({}, f), {}, {
      id: f.name,
      tableFieldIndex: i + 1
    });
  });
  var allIndexes = allData.map(function (_, i) {
    return i;
  });
  return (0, _defineProperty2["default"])({}, dataId, _objectSpread(_objectSpread({}, datasetInfo), {}, {
    color: datasetInfo.color || getNewDatasetColor(datasets),
    id: dataId,
    allData: allData,
    allIndexes: allIndexes,
    filteredIndex: allIndexes,
    filteredIndexForDomain: allIndexes,
    fieldPairs: findPointFieldPairs(fields),
    fields: fields,
    gpuFilter: (0, _gpuFilterUtils.getGpuFilterProps)([], dataId, fields)
  }));
}

function removeSuffixAndDelimiters(layerName, suffix) {
  return layerName.replace(new RegExp(suffix, 'ig'), '').replace(/[_,.]+/g, ' ').trim();
}
/**
 * Find point fields pairs from fields
 *
 * @param fields
 * @returns found point fields
 * @type {typeof import('./dataset-utils').findPointFieldPairs}
 */


function findPointFieldPairs(fields) {
  var allNames = fields.map(function (f) {
    return f.name.toLowerCase();
  }); // get list of all fields with matching suffixes

  return allNames.reduce(function (carry, fieldName, idx) {
    // This search for pairs will early exit if found.
    var _iterator = _createForOfIteratorHelper(_defaultSettings.TRIP_POINT_FIELDS),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var suffixPair = _step.value;

        // match first suffix```
        if (fieldName.endsWith(suffixPair[0])) {
          var _ret = function () {
            // match second suffix
            var otherPattern = new RegExp("".concat(suffixPair[0], "$"));
            var partner = fieldName.replace(otherPattern, suffixPair[1]);
            var partnerIdx = allNames.findIndex(function (d) {
              return d === partner;
            });

            if (partnerIdx > -1) {
              var defaultName = removeSuffixAndDelimiters(fieldName, suffixPair[0]);
              carry.push({
                defaultName: defaultName,
                pair: {
                  lat: {
                    fieldIdx: idx,
                    value: fields[idx].name
                  },
                  lng: {
                    fieldIdx: partnerIdx,
                    value: fields[partnerIdx].name
                  }
                },
                suffix: suffixPair
              });
              return {
                v: carry
              };
            }
          }();

          if ((0, _typeof2["default"])(_ret) === "object") return _ret.v;
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    return carry;
  }, []);
}
/**
 *
 * @param dataset
 * @param column
 * @param mode
 * @type {typeof import('./dataset-utils').sortDatasetByColumn}
 */


function sortDatasetByColumn(dataset, column, mode) {
  var allIndexes = dataset.allIndexes,
      fields = dataset.fields,
      allData = dataset.allData;
  var fieldIndex = fields.findIndex(function (f) {
    return f.name === column;
  });

  if (fieldIndex < 0) {
    return dataset;
  }

  var sortBy = _defaultSettings.SORT_ORDER[mode] || _defaultSettings.SORT_ORDER.ASCENDING;

  if (sortBy === _defaultSettings.SORT_ORDER.UNSORT) {
    return _objectSpread(_objectSpread({}, dataset), {}, {
      sortColumn: {},
      sortOrder: null
    });
  }

  var sortFunction = sortBy === _defaultSettings.SORT_ORDER.ASCENDING ? _d3Array.ascending : _d3Array.descending;
  var sortOrder = allIndexes.slice().sort(function (a, b) {
    return sortFunction(allData[a][fieldIndex], allData[b][fieldIndex]);
  });
  return _objectSpread(_objectSpread({}, dataset), {}, {
    sortColumn: (0, _defineProperty2["default"])({}, column, sortBy),
    sortOrder: sortOrder
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy9kYXRhc2V0LXV0aWxzLmpzIl0sIm5hbWVzIjpbImdlbmVyYXRlQ29sb3IiLCJkYXRhc2V0Q29sb3JzIiwibWFwIiwiaGV4VG9SZ2IiLCJpbmRleCIsImxlbmd0aCIsImRhdGFzZXRDb2xvck1ha2VyIiwiZ2V0TmV3RGF0YXNldENvbG9yIiwiZGF0YXNldHMiLCJwcmVzZXRDb2xvcnMiLCJTdHJpbmciLCJ1c2VkQ29sb3JzIiwiT2JqZWN0IiwidmFsdWVzIiwiZCIsImNvbG9yIiwiZmlsdGVyIiwiYyIsImluY2x1ZGVzIiwibmV4dCIsInZhbHVlIiwiY3JlYXRlTmV3RGF0YUVudHJ5IiwiaW5mbyIsImRhdGEiLCJ2YWxpZGF0ZWREYXRhIiwiYWxsRGF0YSIsInJvd3MiLCJkYXRhc2V0SW5mbyIsImlkIiwibGFiZWwiLCJkYXRhSWQiLCJmaWVsZHMiLCJmIiwiaSIsIm5hbWUiLCJ0YWJsZUZpZWxkSW5kZXgiLCJhbGxJbmRleGVzIiwiXyIsImZpbHRlcmVkSW5kZXgiLCJmaWx0ZXJlZEluZGV4Rm9yRG9tYWluIiwiZmllbGRQYWlycyIsImZpbmRQb2ludEZpZWxkUGFpcnMiLCJncHVGaWx0ZXIiLCJyZW1vdmVTdWZmaXhBbmREZWxpbWl0ZXJzIiwibGF5ZXJOYW1lIiwic3VmZml4IiwicmVwbGFjZSIsIlJlZ0V4cCIsInRyaW0iLCJhbGxOYW1lcyIsInRvTG93ZXJDYXNlIiwicmVkdWNlIiwiY2FycnkiLCJmaWVsZE5hbWUiLCJpZHgiLCJUUklQX1BPSU5UX0ZJRUxEUyIsInN1ZmZpeFBhaXIiLCJlbmRzV2l0aCIsIm90aGVyUGF0dGVybiIsInBhcnRuZXIiLCJwYXJ0bmVySWR4IiwiZmluZEluZGV4IiwiZGVmYXVsdE5hbWUiLCJwdXNoIiwicGFpciIsImxhdCIsImZpZWxkSWR4IiwibG5nIiwic29ydERhdGFzZXRCeUNvbHVtbiIsImRhdGFzZXQiLCJjb2x1bW4iLCJtb2RlIiwiZmllbGRJbmRleCIsInNvcnRCeSIsIlNPUlRfT1JERVIiLCJBU0NFTkRJTkciLCJVTlNPUlQiLCJzb3J0Q29sdW1uIiwic29ydE9yZGVyIiwic29ydEZ1bmN0aW9uIiwiYXNjZW5kaW5nIiwiZGVzY2VuZGluZyIsInNsaWNlIiwic29ydCIsImEiLCJiIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7d0RBaUJVQSxhOztBQWhCVjtBQUNBO0FBQ0EsSUFBTUMsYUFBYSxHQUFHLENBQ3BCLFNBRG9CLEVBRXBCLFNBRm9CLEVBR3BCLFNBSG9CLEVBSXBCLFNBSm9CLEVBS3BCLFNBTG9CLEVBTXBCLFNBTm9CLEVBT3BCLFNBUG9CLEVBUXBCQyxHQVJvQixDQVFoQkMsb0JBUmdCLENBQXRCO0FBVUE7Ozs7O0FBSUEsU0FBVUgsYUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDTUksVUFBQUEsS0FETixHQUNjLENBRGQ7O0FBQUE7QUFBQSxnQkFFU0EsS0FBSyxHQUFHSCxhQUFhLENBQUNJLE1BQWQsR0FBdUIsQ0FGeEM7QUFBQTtBQUFBO0FBQUE7O0FBR0ksY0FBSUQsS0FBSyxLQUFLSCxhQUFhLENBQUNJLE1BQTVCLEVBQW9DO0FBQ2xDRCxZQUFBQSxLQUFLLEdBQUcsQ0FBUjtBQUNEOztBQUxMO0FBTUksaUJBQU1ILGFBQWEsQ0FBQ0csS0FBSyxFQUFOLENBQW5COztBQU5KO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFVTyxJQUFNRSxpQkFBaUIsR0FBR04sYUFBYSxFQUF2QztBQUVQOzs7O0FBQ0EsU0FBU08sa0JBQVQsQ0FBNEJDLFFBQTVCLEVBQXNDO0FBQ3BDLE1BQU1DLFlBQVksR0FBR1IsYUFBYSxDQUFDQyxHQUFkLENBQWtCUSxNQUFsQixDQUFyQjtBQUNBLE1BQU1DLFVBQVUsR0FBRyx3QkFBS0MsTUFBTSxDQUFDQyxNQUFQLENBQWNMLFFBQWQsRUFBd0JOLEdBQXhCLENBQTRCLFVB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RTtBQUhiO0FBS0Q7O0FBRUQsTUFBTUMsWUFBWSxHQUFHTixNQUFNLEtBQUtDLDRCQUFXQyxTQUF0QixHQUFrQ0ssa0JBQWxDLEdBQThDQyxtQkFBbkU7QUFDQSxNQUFNSCxTQUFTLEdBQUcxQyxVQUFVLENBQ3pCOEMsS0FEZSxHQUVmQyxJQUZlLENBRVYsVUFBQ0MsQ0FBRCxFQUFJQyxDQUFKO0FBQUEsV0FBVU4sWUFBWSxDQUFDdEQsT0FBTyxDQUFDMkQsQ0FBRCxDQUFQLENBQVdaLFVBQVgsQ0FBRCxFQUF5Qi9DLE9BQU8sQ0FBQzRELENBQUQsQ0FBUCxDQUFXYixVQUFYLENBQXpCLENBQXRCO0FBQUEsR0FGVSxDQUFsQjtBQUlBLHlDQUNLSCxPQURMO0FBRUVRLElBQUFBLFVBQVUsdUNBQ1BQLE1BRE8sRUFDRUcsTUFERixDQUZaO0FBS0VLLElBQUFBLFNBQVMsRUFBVEE7QUFMRjtBQU9EIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IHtoZXhUb1JnYn0gZnJvbSAnLi9jb2xvci11dGlscyc7XHJcbmltcG9ydCB1bmlxIGZyb20gJ2xvZGFzaC51bmlxJztcclxuaW1wb3J0IHtUUklQX1BPSU5UX0ZJRUxEUywgU09SVF9PUkRFUn0gZnJvbSAnY29uc3RhbnRzL2RlZmF1bHQtc2V0dGluZ3MnO1xyXG5pbXBvcnQge2dlbmVyYXRlSGFzaElkfSBmcm9tICcuL3V0aWxzJztcclxuaW1wb3J0IHt2YWxpZGF0ZUlucHV0RGF0YX0gZnJvbSAncHJvY2Vzc29ycy9kYXRhLXByb2Nlc3Nvcic7XHJcbmltcG9ydCB7Z2V0R3B1RmlsdGVyUHJvcHN9IGZyb20gJ3V0aWxzL2dwdS1maWx0ZXItdXRpbHMnO1xyXG5pbXBvcnQge2FzY2VuZGluZywgZGVzY2VuZGluZ30gZnJvbSAnZDMtYXJyYXknO1xyXG4vLyBhcHBseSBhIGNvbG9yIGZvciBlYWNoIGRhdGFzZXRcclxuLy8gdG8gdXNlIGFzIGxhYmVsIGNvbG9yc1xyXG5jb25zdCBkYXRhc2V0Q29sb3JzID0gW1xyXG4gICcjOEYyRkJGJyxcclxuICAnIzAwNUNGRicsXHJcbiAgJyNDMDZDODQnLFxyXG4gICcjRjhCMTk1JyxcclxuICAnIzU0N0E4MicsXHJcbiAgJyMzRUFDQTgnLFxyXG4gICcjQTJENEFCJ1xyXG5dLm1hcChoZXhUb1JnYik7XHJcblxyXG4vKipcclxuICogUmFuZG9tIGNvbG9yIGdlbmVyYXRvclxyXG4gKiBAcmV0dXJuIHtHZW5lcmF0b3I8aW1wb3J0KCdyZWR1Y2Vycy90eXBlcycpLlJHQkNvbG9yPn1cclxuICovXHJcbmZ1bmN0aW9uKiBnZW5lcmF0ZUNvbG9yKCkge1xyXG4gIGxldCBpbmRleCA9IDA7XHJcbiAgd2hpbGUgKGluZGV4IDwgZGF0YXNldENvbG9ycy5sZW5ndGggKyAxKSB7XHJcbiAgICBpZiAoaW5kZXggPT09IGRhdGFzZXRDb2xvcnMubGVuZ3RoKSB7XHJcbiAgICAgIGluZGV4ID0gMDtcclxuICAgIH1cclxuICAgIHlpZWxkIGRhdGFzZXRDb2xvcnNbaW5kZXgrK107XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZGF0YXNldENvbG9yTWFrZXIgPSBnZW5lcmF0ZUNvbG9yKCk7XHJcblxyXG4vKiogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vZGF0YXNldC11dGlscycpLmdldE5ld0RhdGFzZXRDb2xvcn0gKi9cclxuZnVuY3Rpb24gZ2V0TmV3RGF0YXNldENvbG9yKGRhdGFzZXRzKSB7XHJcbiAgY29uc3QgcHJlc2V0Q29sb3JzID0gZGF0YXNldENvbG9ycy5tYXAoU3RyaW5nKTtcclxuICBjb25zdCB1c2VkQ29sb3JzID0gdW5pcShPYmplY3QudmFsdWVzKGRhdGFzZXRzKS5tYXAoZCA9PiBTdHJpbmcoZC5jb2xvcikpKS5maWx0ZXIoYyA9PlxyXG4gICAgcHJlc2V0Q29sb3JzLmluY2x1ZGVzKGMpXHJcbiAgKTtcclxuXHJcbiAgaWYgKHVzZWRDb2xvcnMubGVuZ3RoID09PSBwcmVzZXRDb2xvcnMubGVuZ3RoKSB7XHJcbiAgICAvLyBpZiB3ZSBhbHJlYWR5IGRlcGxldGVkIHRoZSBwb29sIG9mIGNvbG9yXHJcbiAgICByZXR1cm4gZGF0YXNldENvbG9yTWFrZXIubmV4dCgpLnZhbHVlO1xyXG4gIH1cclxuXHJcbiAgbGV0IGNvbG9yID0gZGF0YXNldENvbG9yTWFrZXIubmV4dCgpLnZhbHVlO1xyXG4gIHdoaWxlICh1c2VkQ29sb3JzLmluY2x1ZGVzKFN0cmluZyhjb2xvcikpKSB7XHJcbiAgICBjb2xvciA9IGRhdGFzZXRDb2xvck1ha2VyLm5leHQoKS52YWx1ZTtcclxuICB9XHJcblxyXG4gIHJldHVybiBjb2xvcjtcclxufVxyXG5cclxuLyoqXHJcbiAqIFRha2UgZGF0YXNldHMgcGF5bG9hZCBmcm9tIGFkZERhdGFUb01hcCwgY3JlYXRlIGRhdGFzZXRzIGVudHJ5IHNhdmUgdG8gdmlzU3RhdGVcclxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vZGF0YXNldC11dGlscycpLmNyZWF0ZU5ld0RhdGFFbnRyeX1cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVOZXdEYXRhRW50cnkoe2luZm8sIGRhdGF9LCBkYXRhc2V0cyA9IHt9KSB7XHJcbiAgY29uc3QgdmFsaWRhdGVkRGF0YSA9IHZhbGlkYXRlSW5wdXREYXRhKGRhdGEpO1xyXG4gIGlmICghdmFsaWRhdGVkRGF0YSkge1xyXG4gICAgcmV0dXJuIHt9O1xyXG4gIH1cclxuXHJcbiAgY29uc3QgYWxsRGF0YSA9IHZhbGlkYXRlZERhdGEucm93cztcclxuICBjb25zdCBkYXRhc2V0SW5mbyA9IHtcclxuICAgIGlkOiBnZW5lcmF0ZUhhc2hJZCg0KSxcclxuICAgIGxhYmVsOiAnbmV3IGRhdGFzZXQnLFxyXG4gICAgLi4uKGluZm8gfHwge30pXHJcbiAgfTtcclxuICBjb25zdCBkYXRhSWQgPSBkYXRhc2V0SW5mby5pZDtcclxuXHJcbiAgLy8gYWRkIHRhYmxlRmllbGRJbmRleCBhbmQgaWQgdG8gZmllbGRzXHJcbiAgLy8gVE9ETzogZG9uJ3QgbmVlZCBpZCBhbmQgbmFtZSBhbmQgdGFibGVGaWVsZEluZGV4IGFueW1vcmVcclxuICAvLyBBZGQgdmFsdWUgYWNjZXNzb3IgaW5zdGVhZFxyXG4gIGNvbnN0IGZpZWxkcyA9IHZhbGlkYXRlZERhdGEuZmllbGRzLm1hcCgoZiwgaSkgPT4gKHtcclxuICAgIC4uLmYsXHJcbiAgICBpZDogZi5uYW1lLFxyXG4gICAgdGFibGVGaWVsZEluZGV4OiBpICsgMVxyXG4gIH0pKTtcclxuXHJcbiAgY29uc3QgYWxsSW5kZXhlcyA9IGFsbERhdGEubWFwKChfLCBpKSA9PiBpKTtcclxuICByZXR1cm4ge1xyXG4gICAgW2RhdGFJZF06IHtcclxuICAgICAgLi4uZGF0YXNldEluZm8sXHJcbiAgICAgIGNvbG9yOiBkYXRhc2V0SW5mby5jb2xvciB8fCBnZXROZXdEYXRhc2V0Q29sb3IoZGF0YXNldHMpLFxyXG4gICAgICBpZDogZGF0YUlkLFxyXG4gICAgICBhbGxEYXRhLFxyXG4gICAgICBhbGxJbmRleGVzLFxyXG4gICAgICBmaWx0ZXJlZEluZGV4OiBhbGxJbmRleGVzLFxyXG4gICAgICBmaWx0ZXJlZEluZGV4Rm9yRG9tYWluOiBhbGxJbmRleGVzLFxyXG4gICAgICBmaWVsZFBhaXJzOiBmaW5kUG9pbnRGaWVsZFBhaXJzKGZpZWxkcyksXHJcbiAgICAgIGZpZWxkcyxcclxuICAgICAgZ3B1RmlsdGVyOiBnZXRHcHVGaWx0ZXJQcm9wcyhbXSwgZGF0YUlkLCBmaWVsZHMpXHJcbiAgICB9XHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVN1ZmZpeEFuZERlbGltaXRlcnMobGF5ZXJOYW1lLCBzdWZmaXgpIHtcclxuICByZXR1cm4gbGF5ZXJOYW1lXHJcbiAgICAucmVwbGFjZShuZXcgUmVnRXhwKHN1ZmZpeCwgJ2lnJyksICcnKVxyXG4gICAgLnJlcGxhY2UoL1tfLC5dKy9nLCAnICcpXHJcbiAgICAudHJpbSgpO1xyXG59XHJcblxyXG4vKipcclxuICogRmluZCBwb2ludCBmaWVsZHMgcGFpcnMgZnJvbSBmaWVsZHNcclxuICpcclxuICogQHBhcmFtIGZpZWxkc1xyXG4gKiBAcmV0dXJucyBmb3VuZCBwb2ludCBmaWVsZHNcclxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vZGF0YXNldC11dGlscycpLmZpbmRQb2ludEZpZWxkUGFpcnN9XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZmluZFBvaW50RmllbGRQYWlycyhmaWVsZHMpIHtcclxuICBjb25zdCBhbGxOYW1lcyA9IGZpZWxkcy5tYXAoZiA9PiBmLm5hbWUudG9Mb3dlckNhc2UoKSk7XHJcblxyXG4gIC8vIGdldCBsaXN0IG9mIGFsbCBmaWVsZHMgd2l0aCBtYXRjaGluZyBzdWZmaXhlc1xyXG4gIHJldHVybiBhbGxOYW1lcy5yZWR1Y2UoKGNhcnJ5LCBmaWVsZE5hbWUsIGlkeCkgPT4ge1xyXG4gICAgLy8gVGhpcyBzZWFyY2ggZm9yIHBhaXJzIHdpbGwgZWFybHkgZXhpdCBpZiBmb3VuZC5cclxuICAgIGZvciAoY29uc3Qgc3VmZml4UGFpciBvZiBUUklQX1BPSU5UX0ZJRUxEUykge1xyXG4gICAgICAvLyBtYXRjaCBmaXJzdCBzdWZmaXhgYGBcclxuICAgICAgaWYgKGZpZWxkTmFtZS5lbmRzV2l0aChzdWZmaXhQYWlyWzBdKSkge1xyXG4gICAgICAgIC8vIG1hdGNoIHNlY29uZCBzdWZmaXhcclxuICAgICAgICBjb25zdCBvdGhlclBhdHRlcm4gPSBuZXcgUmVnRXhwKGAke3N1ZmZpeFBhaXJbMF19XFwkYCk7XHJcbiAgICAgICAgY29uc3QgcGFydG5lciA9IGZpZWxkTmFtZS5yZXBsYWNlKG90aGVyUGF0dGVybiwgc3VmZml4UGFpclsxXSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHBhcnRuZXJJZHggPSBhbGxOYW1lcy5maW5kSW5kZXgoZCA9PiBkID09PSBwYXJ0bmVyKTtcclxuICAgICAgICBpZiAocGFydG5lcklkeCA+IC0xKSB7XHJcbiAgICAgICAgICBjb25zdCBkZWZhdWx0TmFtZSA9IHJlbW92ZVN1ZmZpeEFuZERlbGltaXRlcnMoZmllbGROYW1lLCBzdWZmaXhQYWlyWzBdKTtcclxuXHJcbiAgICAgICAgICBjYXJyeS5wdXNoKHtcclxuICAgICAgICAgICAgZGVmYXVsdE5hbWUsXHJcbiAgICAgICAgICAgIHBhaXI6IHtcclxuICAgICAgICAgICAgICBsYXQ6IHtcclxuICAgICAgICAgICAgICAgIGZpZWxkSWR4OiBpZHgsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogZmllbGRzW2lkeF0ubmFtZVxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgbG5nOiB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZElkeDogcGFydG5lcklkeCxcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBmaWVsZHNbcGFydG5lcklkeF0ubmFtZVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc3VmZml4OiBzdWZmaXhQYWlyXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIHJldHVybiBjYXJyeTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBjYXJyeTtcclxuICB9LCBbXSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKlxyXG4gKiBAcGFyYW0gZGF0YXNldFxyXG4gKiBAcGFyYW0gY29sdW1uXHJcbiAqIEBwYXJhbSBtb2RlXHJcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL2RhdGFzZXQtdXRpbHMnKS5zb3J0RGF0YXNldEJ5Q29sdW1ufVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNvcnREYXRhc2V0QnlDb2x1bW4oZGF0YXNldCwgY29sdW1uLCBtb2RlKSB7XHJcbiAgY29uc3Qge2FsbEluZGV4ZXMsIGZpZWxkcywgYWxsRGF0YX0gPSBkYXRhc2V0O1xyXG4gIGNvbnN0IGZpZWxkSW5kZXggPSBmaWVsZHMuZmluZEluZGV4KGYgPT4gZi5uYW1lID09PSBjb2x1bW4pO1xyXG4gIGlmIChmaWVsZEluZGV4IDwgMCkge1xyXG4gICAgcmV0dXJuIGRhdGFzZXQ7XHJcbiAgfVxyXG5cclxuICBjb25zdCBzb3J0QnkgPSBTT1JUX09SREVSW21vZGVdIHx8IFNPUlRfT1JERVIuQVNDRU5ESU5HO1xyXG5cclxuICBpZiAoc29ydEJ5ID09PSBTT1JUX09SREVSLlVOU09SVCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgLi4uZGF0YXNldCxcclxuICAgICAgc29ydENvbHVtbjoge30sXHJcbiAgICAgIHNvcnRPcmRlcjogbnVsbFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHNvcnRGdW5jdGlvbiA9IHNvcnRCeSA9PT0gU09SVF9PUkRFUi5BU0NFTkRJTkcgPyBhc2NlbmRpbmcgOiBkZXNjZW5kaW5nO1xyXG4gIGNvbnN0IHNvcnRPcmRlciA9IGFsbEluZGV4ZXNcclxuICAgIC5zbGljZSgpXHJcbiAgICAuc29ydCgoYSwgYikgPT4gc29ydEZ1bmN0aW9uKGFsbERhdGFbYV1bZmllbGRJbmRleF0sIGFsbERhdGFbYl1bZmllbGRJbmRleF0pKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIC4uLmRhdGFzZXQsXHJcbiAgICBzb3J0Q29sdW1uOiB7XHJcbiAgICAgIFtjb2x1bW5dOiBzb3J0QnlcclxuICAgIH0sXHJcbiAgICBzb3J0T3JkZXJcclxuICB9O1xyXG59XHJcbiJdfQ==