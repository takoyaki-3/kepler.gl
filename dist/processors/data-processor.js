"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.processCsvData = processCsvData;
exports.parseRowsByFields = parseRowsByFields;
exports.getSampleForTypeAnalyze = getSampleForTypeAnalyze;
exports.parseCsvRowsByFieldType = parseCsvRowsByFieldType;
exports.getFieldsFromData = getFieldsFromData;
exports.renameDuplicateFields = renameDuplicateFields;
exports.analyzerTypeToFieldType = analyzerTypeToFieldType;
exports.processRowObject = processRowObject;
exports.processGeojson = processGeojson;
exports.formatCsv = formatCsv;
exports.validateInputData = validateInputData;
exports.processKeplerglJSON = processKeplerglJSON;
exports.processKeplerglDataset = processKeplerglDataset;
exports.Processors = exports.DATASET_HANDLERS = exports.PARSE_FIELD_VALUE_FROM_STRING = exports.ACCEPTED_ANALYZER_TYPES = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _toArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _d3Dsv = require("d3-dsv");

var _d3Array = require("d3-array");

var _window = require("global/window");

var _assert = _interopRequireDefault(require("assert"));

var _typeAnalyzer = require("type-analyzer");

var _geojsonNormalize = _interopRequireDefault(require("@mapbox/geojson-normalize"));

var _defaultSettings = require("../constants/default-settings");

var _dataUtils = require("../utils/data-utils");

var _schemas = _interopRequireDefault(require("../schemas"));

var _userGuides = require("../constants/user-guides");

var _utils = require("../utils/utils");

var _PARSE_FIELD_VALUE_FR, _DATASET_HANDLERS;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var ACCEPTED_ANALYZER_TYPES = [_typeAnalyzer.DATA_TYPES.DATE, _typeAnalyzer.DATA_TYPES.TIME, _typeAnalyzer.DATA_TYPES.DATETIME, _typeAnalyzer.DATA_TYPES.NUMBER, _typeAnalyzer.DATA_TYPES.INT, _typeAnalyzer.DATA_TYPES.FLOAT, _typeAnalyzer.DATA_TYPES.BOOLEAN, _typeAnalyzer.DATA_TYPES.STRING, _typeAnalyzer.DATA_TYPES.GEOMETRY, _typeAnalyzer.DATA_TYPES.GEOMETRY_FROM_STRING, _typeAnalyzer.DATA_TYPES.PAIR_GEOMETRY_FROM_STRING, _typeAnalyzer.DATA_TYPES.ZIPCODE, _typeAnalyzer.DATA_TYPES.ARRAY, _typeAnalyzer.DATA_TYPES.OBJECT]; // if any of these value occurs in csv, parse it to null;

exports.ACCEPTED_ANALYZER_TYPES = ACCEPTED_ANALYZER_TYPES;
var CSV_NULLS = ['', 'null', 'NULL', 'Null', 'NaN', '/N'];
var IGNORE_DATA_TYPES = Object.keys(_typeAnalyzer.DATA_TYPES).filter(function (type) {
  return !ACCEPTED_ANALYZER_TYPES.includes(type);
});
var PARSE_FIELD_VALUE_FROM_STRING = (_PARSE_FIELD_VALUE_FR = {}, (0, _defineProperty2["default"])(_PARSE_FIELD_VALUE_FR, _defaultSettings.ALL_FIELD_TYPES["boolean"], {
  valid: function valid(d) {
    return typeof d === 'boolean';
  },
  parse: function parse(d) {
    return d === 'true' || d === 'True' || d === '1';
  }
}), (0, _defineProperty2["default"])(_PARSE_FIELD_VALUE_FR, _defaultSettings.ALL_FIELD_TYPES.integer, {
  valid: function valid(d) {
    return parseInt(d, 10) === d;
  },
  parse: function parse(d) {
    return parseInt(d, 10);
  }
}), (0, _defineProperty2["default"])(_PARSE_FIELD_VALUE_FR, _defaultSettings.ALL_FIELD_TYPES.timestamp, {
  valid: function valid(d, field) {
    return ['x', 'X'].includes(field.format) ? typeof d === 'number' : typeof d === 'string';
  },
  parse: function parse(d, field) {
    return ['x', 'X'].includes(field.format) ? Number(d) : d;
  }
}), (0, _defineProperty2["default"])(_PARSE_FIELD_VALUE_FR, _defaultSettings.ALL_FIELD_TYPES.real, {
  valid: function valid(d) {
    return parseFloat(d) === d;
  },
  parse: parseFloat
}), _PARSE_FIELD_VALUE_FR);
/**
 * Process csv data, output a data object with `{fields: [], rows: []}`.
 * The data object can be wrapped in a `dataset` and pass to [`addDataToMap`](../actions/actions.md#adddatatomap)
 * @param rawData raw csv string
 * @returns  data object `{fields: [], rows: []}` can be passed to addDataToMaps
 * @type {typeof import('./data-processor').processCsvData}
 * @public
 * @example
 * import {processCsvData} from 'kepler.gl/processors';
 *
 * const testData = `gps_data.utc_timestamp,gps_data.lat,gps_data.lng,gps_data.types,epoch,has_result,id,time,begintrip_ts_utc,begintrip_ts_local,date
 * 2016-09-17 00:09:55,29.9900937,31.2590542,driver_analytics,1472688000000,False,1,2016-09-23T00:00:00.000Z,2016-10-01 09:41:39+00:00,2016-10-01 09:41:39+00:00,2016-09-23
 * 2016-09-17 00:10:56,29.9927699,31.2461142,driver_analytics,1472688000000,False,2,2016-09-23T00:00:00.000Z,2016-10-01 09:46:37+00:00,2016-10-01 16:46:37+00:00,2016-09-23
 * 2016-09-17 00:11:56,29.9907261,31.2312742,driver_analytics,1472688000000,False,3,2016-09-23T00:00:00.000Z,,,2016-09-23
 * 2016-09-17 00:12:58,29.9870074,31.2175827,driver_analytics,1472688000000,False,4,2016-09-23T00:00:00.000Z,,,2016-09-23`
 *
 * const dataset = {
 *  info: {id: 'test_data', label: 'My Csv'},
 *  data: processCsvData(testData)
 * };
 *
 * dispatch(addDataToMap({
 *  datasets: [dataset],
 *  options: {centerMap: true, readOnly: true}
 * }));
 */

exports.PARSE_FIELD_VALUE_FROM_STRING = PARSE_FIELD_VALUE_FROM_STRING;

function processCsvData(rawData) {
  // here we assume the csv file that people uploaded will have first row
  // as name of the column
  // TODO: add a alert at upload csv to remind define first row
  var result = (0, _d3Dsv.csvParseRows)(rawData);

  if (!Array.isArray(result) || result.length < 2) {
    // looks like an empty file, throw error to be catch
    throw new Error('Read File Failed: CSV is empty');
  }

  var _result = (0, _toArray2["default"])(result),
      headerRow = _result[0],
      rows = _result.slice(1);

  cleanUpFalsyCsvValue(rows); // No need to run type detection on every data point
  // here we get a list of none null values to run analyze on

  var sample = getSampleForTypeAnalyze({
    fields: headerRow,
    allData: rows
  });
  var fields = getFieldsFromData(sample, headerRow);
  var parsedRows = parseRowsByFields(rows, fields);
  return {
    fields: fields,
    rows: parsedRows
  };
}
/**
 * Parse rows of csv by analyzed field types. So that `'1'` -> `1`, `'True'` -> `true`
 * @param {Array<Array>} rows
 * @param {Array<Object>} fields
 */


function parseRowsByFields(rows, fields) {
  // Edit rows in place
  var geojsonFieldIdx = fields.findIndex(function (f) {
    return f.name === '_geojson';
  });
  fields.forEach(parseCsvRowsByFieldType.bind(null, rows, geojsonFieldIdx));
  return rows;
}
/**
 * Getting sample data for analyzing field type.
 *
 * @type {typeof import('./data-processor').getSampleForTypeAnalyze}
 */


function getSampleForTypeAnalyze(_ref) {
  var fields = _ref.fields,
      allData = _ref.allData,
      _ref$sampleCount = _ref.sampleCount,
      sampleCount = _ref$sampleCount === void 0 ? 50 : _ref$sampleCount;
  var total = Math.min(sampleCount, allData.length); // const fieldOrder = fields.map(f => f.name);

  var sample = (0, _d3Array.range)(0, total, 1).map(function (d) {
    return {};
  }); // collect sample data for each field

  fields.forEach(function (field, fieldIdx) {
    // data counter
    var i = 0; // sample counter

    var j = 0;

    while (j < total) {
      if (i >= allData.length) {
        // if depleted data pool
        sample[j][field] = null;
        j++;
      } else if ((0, _dataUtils.notNullorUndefined)(allData[i][fieldIdx])) {
        sample[j][field] = allData[i][fieldIdx];
        j++;
        i++;
      } else {
        i++;
      }
    }
  });
  return sample;
}
/**
 * Convert falsy value in csv including `'', 'null', 'NULL', 'Null', 'NaN'` to `null`,
 * so that type-analyzer won't detect it as string
 *
 * @param {Array<Array>} rows
 */


function cleanUpFalsyCsvValue(rows) {
  for (var i = 0; i < rows.length; i++) {
    for (var j = 0; j < rows[i].length; j++) {
      // analyzer will set any fields to 'string' if there are empty values
      // which will be parsed as '' by d3.csv
      // here we parse empty data as null
      // TODO: create warning when deltect `CSV_NULLS` in the data
      if (!rows[i][j] || CSV_NULLS.includes(rows[i][j])) {
        rows[i][j] = null;
      }
    }
  }
}
/**
 * Process uploaded csv file to parse value by field type
 *
 * @param rows
 * @param geoFieldIdx field index
 * @param field
 * @param i
 * @type {typeof import('./data-processor').parseCsvRowsByFieldType}
 */


function parseCsvRowsByFieldType(rows, geoFieldIdx, field, i) {
  var parser = PARSE_FIELD_VALUE_FROM_STRING[field.type];

  if (parser) {
    // check first not null value of it's already parsed
    var first = rows.find(function (r) {
      return (0, _dataUtils.notNullorUndefined)(r[i]);
    });

    if (!first || parser.valid(first[i], field)) {
      return;
    }

    rows.forEach(function (row) {
      // parse string value based on field type
      if (row[i] !== null) {
        row[i] = parser.parse(row[i], field);

        if (geoFieldIdx > -1 && row[geoFieldIdx] && row[geoFieldIdx].properties) {
          row[geoFieldIdx].properties[field.name] = row[i];
        }
      }
    });
  }
}
/**
 * Analyze field types from data in `string` format, e.g. uploaded csv.
 * Assign `type`, `tableFieldIndex` and `format` (timestamp only) to each field
 *
 * @param data array of row object
 * @param fieldOrder array of field names as string
 * @returns formatted fields
 * @type {typeof import('./data-processor').getFieldsFromData}
 * @public
 * @example
 *
 * import {getFieldsFromData} from 'kepler.gl/processors';
 * const data = [{
 *   time: '2016-09-17 00:09:55',
 *   value: '4',
 *   surge: '1.2',
 *   isTrip: 'true',
 *   zeroOnes: '0'
 * }, {
 *   time: '2016-09-17 00:30:08',
 *   value: '3',
 *   surge: null,
 *   isTrip: 'false',
 *   zeroOnes: '1'
 * }, {
 *   time: null,
 *   value: '2',
 *   surge: '1.3',
 *   isTrip: null,
 *   zeroOnes: '1'
 * }];
 *
 * const fieldOrder = ['time', 'value', 'surge', 'isTrip', 'zeroOnes'];
 * const fields = getFieldsFromData(data, fieldOrder);
 * // fields = [
 * // {name: 'time', format: 'YYYY-M-D H:m:s', tableFieldIndex: 1, type: 'timestamp'},
 * // {name: 'value', format: '', tableFieldIndex: 4, type: 'integer'},
 * // {name: 'surge', format: '', tableFieldIndex: 5, type: 'real'},
 * // {name: 'isTrip', format: '', tableFieldIndex: 6, type: 'boolean'},
 * // {name: 'zeroOnes', format: '', tableFieldIndex: 7, type: 'integer'}];
 *
 */


function getFieldsFromData(data, fieldOrder) {
  // add a check for epoch timestamp
  var metadata = _typeAnalyzer.Analyzer.computeColMeta(data, [{
    regex: /.*geojson|all_points/g,
    dataType: 'GEOMETRY'
  }], {
    ignoredDataTypes: IGNORE_DATA_TYPES
  });

  var _renameDuplicateField = renameDuplicateFields(fieldOrder),
      fieldByIndex = _renameDuplicateField.fieldByIndex;

  var result = fieldOrder.map(function (field, index) {
    var name = fieldByIndex[index];
    var fieldMeta = metadata.find(function (m) {
      return m.key === field;
    });

    var _ref2 = fieldMeta || {},
        type = _ref2.type,
        format = _ref2.format;

    return {
      name: name,
      format: format,
      tableFieldIndex: index + 1,
      type: analyzerTypeToFieldType(type),
      analyzerType: type
    };
  });
  return result;
}
/**
 * pass in an array of field names, rename duplicated one
 * and return a map from old field index to new name
 *
 * @param {Array} fieldOrder
 * @returns {Object} new field name by index
 */


function renameDuplicateFields(fieldOrder) {
  return fieldOrder.reduce(function (accu, field, i) {
    var allNames = accu.allNames;
    var fieldName = field; // add a counter to duplicated names

    if (allNames.includes(field)) {
      var counter = 0;

      while (allNames.includes("".concat(field, "-").concat(counter))) {
        counter++;
      }

      fieldName = "".concat(field, "-").concat(counter);
    }

    accu.fieldByIndex[i] = fieldName;
    accu.allNames.push(fieldName);
    return accu;
  }, {
    allNames: [],
    fieldByIndex: {}
  });
}
/**
 * Convert type-analyzer output to kepler.gl field types
 *
 * @param aType
 * @returns corresponding type in `ALL_FIELD_TYPES`
 * @type {typeof import('./data-processor').analyzerTypeToFieldType}}
 */

/* eslint-disable complexity */


function analyzerTypeToFieldType(aType) {
  var DATE = _typeAnalyzer.DATA_TYPES.DATE,
      TIME = _typeAnalyzer.DATA_TYPES.TIME,
      DATETIME = _typeAnalyzer.DATA_TYPES.DATETIME,
      NUMBER = _typeAnalyzer.DATA_TYPES.NUMBER,
      INT = _typeAnalyzer.DATA_TYPES.INT,
      FLOAT = _typeAnalyzer.DATA_TYPES.FLOAT,
      BOOLEAN = _typeAnalyzer.DATA_TYPES.BOOLEAN,
      STRING = _typeAnalyzer.DATA_TYPES.STRING,
      GEOMETRY = _typeAnalyzer.DATA_TYPES.GEOMETRY,
      GEOMETRY_FROM_STRING = _typeAnalyzer.DATA_TYPES.GEOMETRY_FROM_STRING,
      PAIR_GEOMETRY_FROM_STRING = _typeAnalyzer.DATA_TYPES.PAIR_GEOMETRY_FROM_STRING,
      ZIPCODE = _typeAnalyzer.DATA_TYPES.ZIPCODE,
      ARRAY = _typeAnalyzer.DATA_TYPES.ARRAY,
      OBJECT = _typeAnalyzer.DATA_TYPES.OBJECT; // TODO: un recognized types
  // CURRENCY PERCENT NONE

  switch (aType) {
    case DATE:
      return _defaultSettings.ALL_FIELD_TYPES.date;

    case TIME:
    case DATETIME:
      return _defaultSettings.ALL_FIELD_TYPES.timestamp;

    case FLOAT:
      return _defaultSettings.ALL_FIELD_TYPES.real;

    case INT:
      return _defaultSettings.ALL_FIELD_TYPES.integer;

    case BOOLEAN:
      return _defaultSettings.ALL_FIELD_TYPES["boolean"];

    case GEOMETRY:
    case GEOMETRY_FROM_STRING:
    case PAIR_GEOMETRY_FROM_STRING:
    case ARRAY:
    case OBJECT:
      // TODO: create a new data type for objects and arrays
      return _defaultSettings.ALL_FIELD_TYPES.geojson;

    case NUMBER:
    case STRING:
    case ZIPCODE:
      return _defaultSettings.ALL_FIELD_TYPES.string;

    default:
      _window.console.warn("Unsupported analyzer type: ".concat(aType));

      return _defaultSettings.ALL_FIELD_TYPES.string;
  }
}
/* eslint-enable complexity */

/**
 * Process data where each row is an object, output can be passed to [`addDataToMap`](../actions/actions.md#adddatatomap)
 * @param rawData an array of row object, each object should have the same number of keys
 * @returns dataset containing `fields` and `rows`
 * @type {typeof import('./data-processor').processRowObject}
 * @public
 * @example
 * import {addDataToMap} from 'kepler.gl/actions';
 * import {processRowObject} from 'kepler.gl/processors';
 *
 * const data = [
 *  {lat: 31.27, lng: 127.56, value: 3},
 *  {lat: 31.22, lng: 126.26, value: 1}
 * ];
 *
 * dispatch(addDataToMap({
 *  datasets: {
 *    info: {label: 'My Data', id: 'my_data'},
 *    data: processRowObject(data)
 *  }
 * }));
 */


function processRowObject(rawData) {
  if (!Array.isArray(rawData) || !rawData.length) {
    return null;
  }

  var keys = Object.keys(rawData[0]);
  var rows = rawData.map(function (d) {
    return keys.map(function (key) {
      return d[key];
    });
  }); // pick samples

  var sampleData = (0, _dataUtils.getSampleData)(rawData, 500);
  var fields = getFieldsFromData(sampleData, keys);
  var parsedRows = parseRowsByFields(rows, fields);
  return {
    fields: fields,
    rows: parsedRows
  };
}
/**
 * Process GeoJSON [`FeatureCollection`](http://wiki.geojson.org/GeoJSON_draft_version_6#FeatureCollection),
 * output a data object with `{fields: [], rows: []}`.
 * The data object can be wrapped in a `dataset` and pass to [`addDataToMap`](../actions/actions.md#adddatatomap)
 *
 * @param  rawData raw geojson feature collection
 * @returns  dataset containing `fields` and `rows`
 * @type {typeof import('./data-processor').processGeojson}
 * @public
 * @example
 * import {addDataToMap} from 'kepler.gl/actions';
 * import {processGeojson} from 'kepler.gl/processors';
 *
 * const geojson = {
 * 	"type" : "FeatureCollection",
 * 	"features" : [{
 * 		"type" : "Feature",
 * 		"properties" : {
 * 			"capacity" : "10",
 * 			"type" : "U-Rack"
 * 		},
 * 		"geometry" : {
 * 			"type" : "Point",
 * 			"coordinates" : [ -71.073283, 42.417500 ]
 * 		}
 * 	}]
 * };
 *
 * dispatch(addDataToMap({
 *  datasets: {
 *    info: {
 *      label: 'Sample Taxi Trips in New York City',
 *      id: 'test_trip_data'
 *    },
 *    data: processGeojson(geojson)
 *  }
 * }));
 */


function processGeojson(rawData) {
  var normalizedGeojson = (0, _geojsonNormalize["default"])(rawData);

  if (!normalizedGeojson || !Array.isArray(normalizedGeojson.features)) {
    var error = new Error("Read File Failed: File is not a valid GeoJSON. Read more about [supported file format](".concat(_userGuides.GUIDES_FILE_FORMAT_DOC, ")"));
    throw error; // fail to normalize geojson
  } // getting all feature fields


  var allDataRows = [];

  for (var i = 0; i < normalizedGeojson.features.length; i++) {
    var f = normalizedGeojson.features[i];

    if (f.geometry) {
      allDataRows.push(_objectSpread({
        // add feature to _geojson field
        _geojson: f
      }, f.properties || {}));
    }
  } // get all the field


  var fields = allDataRows.reduce(function (prev, curr) {
    Object.keys(curr).forEach(function (key) {
      if (!prev.includes(key)) {
        prev.push(key);
      }
    });
    return prev;
  }, []); // make sure each feature has exact same fields

  allDataRows.forEach(function (d) {
    fields.forEach(function (f) {
      if (!(f in d)) {
        d[f] = null;
        d._geojson.properties[f] = null;
      }
    });
  });
  return processRowObject(allDataRows);
}
/**
 * On export data to csv
 * @param {Array<Array>} data `dataset.allData` or filtered data `dataset.data`
 * @param {Array<Object>} fields `dataset.fields`
 * @returns {string} csv string
 */


function formatCsv(data, fields) {
  var columns = fields.map(function (f) {
    return f.name;
  });
  var formattedData = [columns]; // parse geojson object as string

  data.forEach(function (row) {
    formattedData.push(row.map(function (d, i) {
      return (0, _dataUtils.parseFieldValue)(d, fields[i].type);
    }));
  });
  return (0, _d3Dsv.csvFormatRows)(formattedData);
}
/**
 * Validate input data, adding missing field types, rename duplicate columns
 * @type {typeof import('./data-processor').validateInputData}
 */


function validateInputData(data) {
  if (!(0, _utils.isPlainObject)(data)) {
    (0, _assert["default"])('addDataToMap Error: dataset.data cannot be null');
    return null;
  } else if (!Array.isArray(data.fields)) {
    (0, _assert["default"])('addDataToMap Error: expect dataset.data.fields to be an array');
    return null;
  } else if (!Array.isArray(data.rows)) {
    (0, _assert["default"])('addDataToMap Error: expect dataset.data.rows to be an array');
    return null;
  }

  var fields = data.fields,
      rows = data.rows; // check if all fields has name, format and type

  var allValid = fields.every(function (f, i) {
    if (!(0, _utils.isPlainObject)(f)) {
      (0, _assert["default"])("fields needs to be an array of object, but find ".concat((0, _typeof2["default"])(f)));
      fields[i] = {};
    }

    if (!f.name) {
      (0, _assert["default"])("field.name is required but missing in ".concat(JSON.stringify(f))); // assign a name

      fields[i].name = "column_".concat(i);
    }

    if (!_defaultSettings.ALL_FIELD_TYPES[f.type]) {
      (0, _assert["default"])("unknown field type ".concat(f.type));
      return false;
    }

    if (!fields.every(function (field) {
      return field.analyzerType;
    })) {
      (0, _assert["default"])('field missing analyzerType');
      return false;
    } // check time format is correct based on first 10 not empty element


    if (f.type === _defaultSettings.ALL_FIELD_TYPES.timestamp) {
      var sample = findNonEmptyRowsAtField(rows, i, 10).map(function (r) {
        return {
          ts: r[i]
        };
      });

      var analyzedType = _typeAnalyzer.Analyzer.computeColMeta(sample)[0];

      return analyzedType.category === 'TIME' && analyzedType.format === f.format;
    }

    return true;
  });

  if (allValid) {
    return {
      rows: rows,
      fields: fields
    };
  } // if any field has missing type, recalculate it for everyone
  // because we simply lost faith in humanity


  var sampleData = getSampleForTypeAnalyze({
    fields: fields.map(function (f) {
      return f.name;
    }),
    allData: rows
  });
  var fieldOrder = fields.map(function (f) {
    return f.name;
  });
  var meta = getFieldsFromData(sampleData, fieldOrder);
  var updatedFields = fields.map(function (f, i) {
    return _objectSpread(_objectSpread({}, f), {}, {
      type: meta[i].type,
      format: meta[i].format,
      analyzerType: meta[i].analyzerType
    });
  });
  return {
    fields: updatedFields,
    rows: rows
  };
}

function findNonEmptyRowsAtField(rows, fieldIdx, total) {
  var sample = [];
  var i = 0;

  while (sample.length < total && i < rows.length) {
    if ((0, _dataUtils.notNullorUndefined)(rows[i][fieldIdx])) {
      sample.push(rows[i]);
    }

    i++;
  }

  return sample;
}
/**
 * Process saved kepler.gl json to be pass to [`addDataToMap`](../actions/actions.md#adddatatomap).
 * The json object should contain `datasets` and `config`.
 * @param {Object} rawData
 * @param {Array} rawData.datasets
 * @param {Object} rawData.config
 * @returns {Object} datasets and config `{datasets: {}, config: {}}`
 * @public
 * @example
 * import {addDataToMap} from 'kepler.gl/actions';
 * import {processKeplerglJSON} from 'kepler.gl/processors';
 *
 * dispatch(addDataToMap(processKeplerglJSON(keplerGlJson)));
 */


function processKeplerglJSON(rawData) {
  return rawData ? _schemas["default"].load(rawData.datasets, rawData.config) : null;
}
/**
 * Parse a single or an array of datasets saved using kepler.gl schema
 * @param {Array | Array<Object>} rawData
 */


function processKeplerglDataset(rawData) {
  if (!rawData) {
    return null;
  }

  var results = _schemas["default"].parseSavedData((0, _utils.toArray)(rawData));

  if (!results) {
    return null;
  }

  return Array.isArray(rawData) ? results : results[0];
}

var DATASET_HANDLERS = (_DATASET_HANDLERS = {}, (0, _defineProperty2["default"])(_DATASET_HANDLERS, _defaultSettings.DATASET_FORMATS.row, processRowObject), (0, _defineProperty2["default"])(_DATASET_HANDLERS, _defaultSettings.DATASET_FORMATS.geojson, processGeojson), (0, _defineProperty2["default"])(_DATASET_HANDLERS, _defaultSettings.DATASET_FORMATS.csv, processCsvData), (0, _defineProperty2["default"])(_DATASET_HANDLERS, _defaultSettings.DATASET_FORMATS.keplergl, processKeplerglDataset), _DATASET_HANDLERS);
exports.DATASET_HANDLERS = DATASET_HANDLERS;
var Processors = {
  processGeojson: processGeojson,
  processCsvData: processCsvData,
  processRowObject: processRowObject,
  processKeplerglJSON: processKeplerglJSON,
  processKeplerglDataset: processKeplerglDataset,
  analyzerTypeToFieldType: analyzerTypeToFieldType,
  getFieldsFromData: getFieldsFromData,
  parseCsvRowsByFieldType: parseCsvRowsByFieldType,
  formatCsv: formatCsv
};
exports.Processors = Processors;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wcm9jZXNzb3JzL2RhdGEtcHJvY2Vzc29yLmpzIl0sIm5hbWVzIjpbIkFDQ0VQVEVEX0FOQUxZWkVSX1RZUEVTIiwiQW5hbHl6ZXJEQVRBX1RZUEVTIiwiREFURSIsIlRJTUUiLCJEQVRFVElNRSIsIk5VTUJFUiIsIklOVCIsIkZMT0FUIiwiQk9PTEVBTiIsIlNUUklORyIsIkdFT01FVFJZIiwiR0VPTUVUUllfRlJPTV9TVFJJTkciLCJQQUlSX0dFT01FVFJZX0ZST01fU1RSSU5HIiwiWklQQ09ERSIsIkFSUkFZIiwiT0JKRUNUIiwiQ1NWX05VTExTIiwiSUdOT1JFX0RBVEFfVFlQRVMiLCJPYmplY3QiLCJrZXlzIiwiZmlsdGVyIiwidHlwZSIsImluY2x1ZGVzIiwiUEFSU0VfRklFTERfVkFMVUVfRlJPTV9TVFJJTkciLCJBTExfRklFTERfVFlQRVMiLCJ2YWxpZCIsImQiLCJwYXJzZSIsImludGVnZXIiLCJwYXJzZUludCIsInRpbWVzdGFtcCIsImZpZWxkIiwiZm9ybWF0IiwiTnVtYmVyIiwicmVhbCIsInBhcnNlRmxvYXQiLCJwcm9jZXNzQ3N2RGF0YSIsInJhd0RhdGEiLCJyZXN1bHQiLCJBcnJheSIsImlzQXJyYXkiLCJsZW5ndGgiLCJFcnJvciIsImhlYWRlclJvdyIsInJvd3MiLCJjbGVhblVwRmFsc3lDc3ZWYWx1ZSIsInNhbXBsZSIsImdldFNhbXBsZUZvclR5cGVBbmFseXplIiwiZmllbGRzIiwiYWxsRGF0YSIsImdldEZpZWxkc0Zyb21EYXRhIiwicGFyc2VkUm93cyIsInBhcnNlUm93c0J5RmllbGRzIiwiZ2VvanNvbkZpZWxkSWR4IiwiZmluZEluZGV4IiwiZiIsIm5hbWUiLCJmb3JFYWNoIiwicGFyc2VDc3ZSb3dzQnlGaWVsZFR5cGUiLCJiaW5kIiwic2FtcGxlQ291bnQiLCJ0b3RhbCIsIk1hdGgiLCJtaW4iLCJtYXAiLCJmaWVsZElkeCIsImkiLCJqIiwiZ2VvRmllbGRJZHgiLCJwYXJzZXIiLCJmaXJzdCIsImZpbmQiLCJyIiwicm93IiwicHJvcGVydGllcyIsImRhdGEiLCJmaWVsZE9yZGVyIiwibWV0YWRhdGEiLCJBbmFseXplciIsImNvbXB1dGVDb2xNZXRhIiwicmVnZXgiLCJkYXRhVHlwZSIsImlnbm9yZWREYXRhVHlwZXMiLCJyZW5hbWVEdXBsaWNhdGVGaWVsZHMiLCJmaWVsZEJ5SW5kZXgiLCJpbmRleCIsImZpZWxkTWV0YSIsIm0iLCJrZXkiLCJ0YWJsZUZpZWxkSW5kZXgiLCJhbmFseXplclR5cGVUb0ZpZWxkVHlwZSIsImFuYWx5emVyVHlwZSIsInJlZHVjZSIsImFjY3UiLCJhbGxOYW1lcyIsImZpZWxkTmFtZSIsImNvdW50ZXIiLCJwdXNoIiwiYVR5cGUiLCJkYXRlIiwiZ2VvanNvbiIsInN0cmluZyIsImdsb2JhbENvbnNvbGUiLCJ3YXJuIiwicHJvY2Vzc1Jvd09iamVjdCIsInNhbXBsZURhdGEiLCJwcm9jZXNzR2VvanNvbiIsIm5vcm1hbGl6ZWRHZW9qc29uIiwiZmVhdHVyZXMiLCJlcnJvciIsIkdVSURFU19GSUxFX0ZPUk1BVF9ET0MiLCJhbGxEYXRhUm93cyIsImdlb21ldHJ5IiwiX2dlb2pzb24iLCJwcmV2IiwiY3VyciIsImZvcm1hdENzdiIsImNvbHVtbnMiLCJmb3JtYXR0ZWREYXRhIiwidmFsaWRhdGVJbnB1dERhdGEiLCJhbGxWYWxpZCIsImV2ZXJ5IiwiSlNPTiIsInN0cmluZ2lmeSIsImZpbmROb25FbXB0eVJvd3NBdEZpZWxkIiwidHMiLCJhbmFseXplZFR5cGUiLCJjYXRlZ29yeSIsIm1ldGEiLCJ1cGRhdGVkRmllbGRzIiwicHJvY2Vzc0tlcGxlcmdsSlNPTiIsIktlcGxlckdsU2NoZW1hIiwibG9hZCIsImRhdGFzZXRzIiwiY29uZmlnIiwicHJvY2Vzc0tlcGxlcmdsRGF0YXNldCIsInJlc3VsdHMiLCJwYXJzZVNhdmVkRGF0YSIsIkRBVEFTRVRfSEFORExFUlMiLCJEQVRBU0VUX0ZPUk1BVFMiLCJjc3YiLCJrZXBsZXJnbCIsIlByb2Nlc3NvcnMiXSwibWFwcGluZ3Mi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QWdCRSxRQUpVLEVBSUNOLHNCQUpELHFCQUF0Qjs7QUFPQSxJQUFNTyxVQUFVLEdBQUc7QUFDeEJwQyxFQUFBQSxjQUFjLEVBQWRBLGNBRHdCO0FBRXhCdEUsRUFBQUEsY0FBYyxFQUFkQSxjQUZ3QjtBQUd4Qm9FLEVBQUFBLGdCQUFnQixFQUFoQkEsZ0JBSHdCO0FBSXhCMEIsRUFBQUEsbUJBQW1CLEVBQW5CQSxtQkFKd0I7QUFLeEJLLEVBQUFBLHNCQUFzQixFQUF0QkEsc0JBTHdCO0FBTXhCN0MsRUFBQUEsdUJBQXVCLEVBQXZCQSx1QkFOd0I7QUFPeEJ4QyxFQUFBQSxpQkFBaUIsRUFBakJBLGlCQVB3QjtBQVF4QlEsRUFBQUEsdUJBQXVCLEVBQXZCQSx1QkFSd0I7QUFTeEIwRCxFQUFBQSxTQUFTLEVBQVRBO0FBVHdCLENBQW5CIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IHtjc3ZQYXJzZVJvd3MsIGNzdkZvcm1hdFJvd3N9IGZyb20gJ2QzLWRzdic7XHJcbmltcG9ydCB7cmFuZ2V9IGZyb20gJ2QzLWFycmF5JztcclxuaW1wb3J0IHtjb25zb2xlIGFzIGdsb2JhbENvbnNvbGV9IGZyb20gJ2dsb2JhbC93aW5kb3cnO1xyXG5pbXBvcnQgYXNzZXJ0IGZyb20gJ2Fzc2VydCc7XHJcbmltcG9ydCB7QW5hbHl6ZXIsIERBVEFfVFlQRVMgYXMgQW5hbHl6ZXJEQVRBX1RZUEVTfSBmcm9tICd0eXBlLWFuYWx5emVyJztcclxuaW1wb3J0IG5vcm1hbGl6ZSBmcm9tICdAbWFwYm94L2dlb2pzb24tbm9ybWFsaXplJztcclxuaW1wb3J0IHtBTExfRklFTERfVFlQRVMsIERBVEFTRVRfRk9STUFUU30gZnJvbSAnY29uc3RhbnRzL2RlZmF1bHQtc2V0dGluZ3MnO1xyXG5pbXBvcnQge25vdE51bGxvclVuZGVmaW5lZCwgcGFyc2VGaWVsZFZhbHVlLCBnZXRTYW1wbGVEYXRhfSBmcm9tICd1dGlscy9kYXRhLXV0aWxzJztcclxuaW1wb3J0IEtlcGxlckdsU2NoZW1hIGZyb20gJ3NjaGVtYXMnO1xyXG5pbXBvcnQge0dVSURFU19GSUxFX0ZPUk1BVF9ET0N9IGZyb20gJ2NvbnN0YW50cy91c2VyLWd1aWRlcyc7XHJcbmltcG9ydCB7aXNQbGFpbk9iamVjdCwgdG9BcnJheX0gZnJvbSAndXRpbHMvdXRpbHMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFDQ0VQVEVEX0FOQUxZWkVSX1RZUEVTID0gW1xyXG4gIEFuYWx5emVyREFUQV9UWVBFUy5EQVRFLFxyXG4gIEFuYWx5emVyREFUQV9UWVBFUy5USU1FLFxyXG4gIEFuYWx5emVyREFUQV9UWVBFUy5EQVRFVElNRSxcclxuICBBbmFseXplckRBVEFfVFlQRVMuTlVNQkVSLFxyXG4gIEFuYWx5emVyREFUQV9UWVBFUy5JTlQsXHJcbiAgQW5hbHl6ZXJEQVRBX1RZUEVTLkZMT0FULFxyXG4gIEFuYWx5emVyREFUQV9UWVBFUy5CT09MRUFOLFxyXG4gIEFuYWx5emVyREFUQV9UWVBFUy5TVFJJTkcsXHJcbiAgQW5hbHl6ZXJEQVRBX1RZUEVTLkdFT01FVFJZLFxyXG4gIEFuYWx5emVyREFUQV9UWVBFUy5HRU9NRVRSWV9GUk9NX1NUUklORyxcclxuICBBbmFseXplckRBVEFfVFlQRVMuUEFJUl9HRU9NRVRSWV9GUk9NX1NUUklORyxcclxuICBBbmFseXplckRBVEFfVFlQRVMuWklQQ09ERSxcclxuICBBbmFseXplckRBVEFfVFlQRVMuQVJSQVksXHJcbiAgQW5hbHl6ZXJEQVRBX1RZUEVTLk9CSkVDVFxyXG5dO1xyXG5cclxuLy8gaWYgYW55IG9mIHRoZXNlIHZhbHVlIG9jY3VycyBpbiBjc3YsIHBhcnNlIGl0IHRvIG51bGw7XHJcbmNvbnN0IENTVl9OVUxMUyA9IFsnJywgJ251bGwnLCAnTlVMTCcsICdOdWxsJywgJ05hTicsICcvTiddO1xyXG5cclxuY29uc3QgSUdOT1JFX0RBVEFfVFlQRVMgPSBPYmplY3Qua2V5cyhBbmFseXplckRBVEFfVFlQRVMpLmZpbHRlcihcclxuICB0eXBlID0+ICFBQ0NFUFRFRF9BTkFMWVpFUl9UWVBFUy5pbmNsdWRlcyh0eXBlKVxyXG4pO1xyXG5cclxuZXhwb3J0IGNvbnN0IFBBUlNFX0ZJRUxEX1ZBTFVFX0ZST01fU1RSSU5HID0ge1xyXG4gIFtBTExfRklFTERfVFlQRVMuYm9vbGVhbl06IHtcclxuICAgIHZhbGlkOiBkID0+IHR5cGVvZiBkID09PSAnYm9vbGVhbicsXHJcbiAgICBwYXJzZTogZCA9PiBkID09PSAndHJ1ZScgfHwgZCA9PT0gJ1RydWUnIHx8IGQgPT09ICcxJ1xyXG4gIH0sXHJcbiAgW0FMTF9GSUVMRF9UWVBFUy5pbnRlZ2VyXToge1xyXG4gICAgdmFsaWQ6IGQgPT4gcGFyc2VJbnQoZCwgMTApID09PSBkLFxyXG4gICAgcGFyc2U6IGQgPT4gcGFyc2VJbnQoZCwgMTApXHJcbiAgfSxcclxuICBbQUxMX0ZJRUxEX1RZUEVTLnRpbWVzdGFtcF06IHtcclxuICAgIHZhbGlkOiAoZCwgZmllbGQpID0+XHJcbiAgICAgIFsneCcsICdYJ10uaW5jbHVkZXMoZmllbGQuZm9ybWF0KSA/IHR5cGVvZiBkID09PSAnbnVtYmVyJyA6IHR5cGVvZiBkID09PSAnc3RyaW5nJyxcclxuICAgIHBhcnNlOiAoZCwgZmllbGQpID0+IChbJ3gnLCAnWCddLmluY2x1ZGVzKGZpZWxkLmZvcm1hdCkgPyBOdW1iZXIoZCkgOiBkKVxyXG4gIH0sXHJcbiAgW0FMTF9GSUVMRF9UWVBFUy5yZWFsXToge1xyXG4gICAgdmFsaWQ6IGQgPT4gcGFyc2VGbG9hdChkKSA9PT0gZCxcclxuICAgIHBhcnNlOiBwYXJzZUZsb2F0XHJcbiAgfVxyXG59O1xyXG5cclxuLyoqXHJcbiAqIFByb2Nlc3MgY3N2IGRhdGEsIG91dHB1dCBhIGRhdGEgb2JqZWN0IHdpdGggYHtmaWVsZHM6IFtdLCByb3dzOiBbXX1gLlxyXG4gKiBUaGUgZGF0YSBvYmplY3QgY2FuIGJlIHdyYXBwZWQgaW4gYSBgZGF0YXNldGAgYW5kIHBhc3MgdG8gW2BhZGREYXRhVG9NYXBgXSguLi9hY3Rpb25zL2FjdGlvbnMubWQjYWRkZGF0YXRvbWFwKVxyXG4gKiBAcGFyYW0gcmF3RGF0YSByYXcgY3N2IHN0cmluZ1xyXG4gKiBAcmV0dXJucyAgZGF0YSBvYmplY3QgYHtmaWVsZHM6IFtdLCByb3dzOiBbXX1gIGNhbiBiZSBwYXNzZWQgdG8gYWRkRGF0YVRvTWFwc1xyXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi9kYXRhLXByb2Nlc3NvcicpLnByb2Nlc3NDc3ZEYXRhfVxyXG4gKiBAcHVibGljXHJcbiAqIEBleGFtcGxlXHJcbiAqIGltcG9ydCB7cHJvY2Vzc0NzdkRhdGF9IGZyb20gJ2tlcGxlci5nbC9wcm9jZXNzb3JzJztcclxuICpcclxuICogY29uc3QgdGVzdERhdGEgPSBgZ3BzX2RhdGEudXRjX3RpbWVzdGFtcCxncHNfZGF0YS5sYXQsZ3BzX2RhdGEubG5nLGdwc19kYXRhLnR5cGVzLGVwb2NoLGhhc19yZXN1bHQsaWQsdGltZSxiZWdpbnRyaXBfdHNfdXRjLGJlZ2ludHJpcF90c19sb2NhbCxkYXRlXHJcbiAqIDIwMTYtMDktMTcgMDA6MDk6NTUsMjkuOTkwMDkzNywzMS4yNTkwNTQyLGRyaXZlcl9hbmFseXRpY3MsMTQ3MjY4ODAwMDAwMCxGYWxzZSwxLDIwMTYtMDktMjNUMDA6MDA6MDAuMDAwWiwyMDE2LTEwLTAxIDA5OjQxOjM5KzAwOjAwLDIwMTYtMTAtMDEgMDk6NDE6MzkrMDA6MDAsMjAxNi0wOS0yM1xyXG4gKiAyMDE2LTA5LTE3IDAwOjEwOjU2LDI5Ljk5Mjc2OTksMzEuMjQ2MTE0Mixkcml2ZXJfYW5hbHl0aWNzLDE0NzI2ODgwMDAwMDAsRmFsc2UsMiwyMDE2LTA5LTIzVDAwOjAwOjAwLjAwMFosMjAxNi0xMC0wMSAwOTo0NjozNyswMDowMCwyMDE2LTEwLTAxIDE2OjQ2OjM3KzAwOjAwLDIwMTYtMDktMjNcclxuICogMjAxNi0wOS0xNyAwMDoxMTo1NiwyOS45OTA3MjYxLDMxLjIzMTI3NDIsZHJpdmVyX2FuYWx5dGljcywxNDcyNjg4MDAwMDAwLEZhbHNlLDMsMjAxNi0wOS0yM1QwMDowMDowMC4wMDBaLCwsMjAxNi0wOS0yM1xyXG4gKiAyMDE2LTA5LTE3IDAwOjEyOjU4LDI5Ljk4NzAwNzQsMzEuMjE3NTgyNyxkcml2ZXJfYW5hbHl0aWNzLDE0NzI2ODgwMDAwMDAsRmFsc2UsNCwyMDE2LTA5LTIzVDAwOjAwOjAwLjAwMFosLCwyMDE2LTA5LTIzYFxyXG4gKlxyXG4gKiBjb25zdCBkYXRhc2V0ID0ge1xyXG4gKiAgaW5mbzoge2lkOiAndGVzdF9kYXRhJywgbGFiZWw6ICdNeSBDc3YnfSxcclxuICogIGRhdGE6IHByb2Nlc3NDc3ZEYXRhKHRlc3REYXRhKVxyXG4gKiB9O1xyXG4gKlxyXG4gKiBkaXNwYXRjaChhZGREYXRhVG9NYXAoe1xyXG4gKiAgZGF0YXNldHM6IFtkYXRhc2V0XSxcclxuICogIG9wdGlvbnM6IHtjZW50ZXJNYXA6IHRydWUsIHJlYWRPbmx5OiB0cnVlfVxyXG4gKiB9KSk7XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcHJvY2Vzc0NzdkRhdGEocmF3RGF0YSkge1xyXG4gIC8vIGhlcmUgd2UgYXNzdW1lIHRoZSBjc3YgZmlsZSB0aGF0IHBlb3BsZSB1cGxvYWRlZCB3aWxsIGhhdmUgZmlyc3Qgcm93XHJcbiAgLy8gYXMgbmFtZSBvZiB0aGUgY29sdW1uXHJcbiAgLy8gVE9ETzogYWRkIGEgYWxlcnQgYXQgdXBsb2FkIGNzdiB0byByZW1pbmQgZGVmaW5lIGZpcnN0IHJvd1xyXG4gIGNvbnN0IHJlc3VsdCA9IGNzdlBhcnNlUm93cyhyYXdEYXRhKTtcclxuICBpZiAoIUFycmF5LmlzQXJyYXkocmVzdWx0KSB8fCByZXN1bHQubGVuZ3RoIDwgMikge1xyXG4gICAgLy8gbG9va3MgbGlrZSBhbiBlbXB0eSBmaWxlLCB0aHJvdyBlcnJvciB0byBiZSBjYXRjaFxyXG4gICAgdGhyb3cgbmV3IEVycm9yKCdSZWFkIEZpbGUgRmFpbGVkOiBDU1YgaXMgZW1wdHknKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IFtoZWFkZXJSb3csIC4uLnJvd3NdID0gcmVzdWx0O1xyXG5cclxuICBjbGVhblVwRmFsc3lDc3ZWYWx1ZShyb3dzKTtcclxuICAvLyBObyBuZWVkIHRvIHJ1biB0eXBlIGRldGVjdGlvbiBvbiBldmVyeSBkYXRhIHBvaW50XHJcbiAgLy8gaGVyZSB3ZSBnZXQgYSBsaXN0IG9mIG5vbmUgbnVsbCB2YWx1ZXMgdG8gcnVuIGFuYWx5emUgb25cclxuICBjb25zdCBzYW1wbGUgPSBnZXRTYW1wbGVGb3JUeXBlQW5hbHl6ZSh7ZmllbGRzOiBoZWFkZXJSb3csIGFsbERhdGE6IHJvd3N9KTtcclxuXHJcbiAgY29uc3QgZmllbGRzID0gZ2V0RmllbGRzRnJvbURhdGEoc2FtcGxlLCBoZWFkZXJSb3cpO1xyXG5cclxuICBjb25zdCBwYXJzZWRSb3dzID0gcGFyc2VSb3dzQnlGaWVsZHMocm93cywgZmllbGRzKTtcclxuXHJcbiAgcmV0dXJuIHtmaWVsZHMsIHJvd3M6IHBhcnNlZFJvd3N9O1xyXG59XHJcblxyXG4vKipcclxuICogUGFyc2Ugcm93cyBvZiBjc3YgYnkgYW5hbHl6ZWQgZmllbGQgdHlwZXMuIFNvIHRoYXQgYCcxJ2AgLT4gYDFgLCBgJ1RydWUnYCAtPiBgdHJ1ZWBcclxuICogQHBhcmFtIHtBcnJheTxBcnJheT59IHJvd3NcclxuICogQHBhcmFtIHtBcnJheTxPYmplY3Q+fSBmaWVsZHNcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVJvd3NCeUZpZWxkcyhyb3dzLCBmaWVsZHMpIHtcclxuICAvLyBFZGl0IHJvd3MgaW4gcGxhY2VcclxuICBjb25zdCBnZW9qc29uRmllbGRJZHggPSBmaWVsZHMuZmluZEluZGV4KGYgPT4gZi5uYW1lID09PSAnX2dlb2pzb24nKTtcclxuICBmaWVsZHMuZm9yRWFjaChwYXJzZUNzdlJvd3NCeUZpZWxkVHlwZS5iaW5kKG51bGwsIHJvd3MsIGdlb2pzb25GaWVsZElkeCkpO1xyXG5cclxuICByZXR1cm4gcm93cztcclxufVxyXG4vKipcclxuICogR2V0dGluZyBzYW1wbGUgZGF0YSBmb3IgYW5hbHl6aW5nIGZpZWxkIHR5cGUuXHJcbiAqXHJcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL2RhdGEtcHJvY2Vzc29yJykuZ2V0U2FtcGxlRm9yVHlwZUFuYWx5emV9XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2FtcGxlRm9yVHlwZUFuYWx5emUoe2ZpZWxkcywgYWxsRGF0YSwgc2FtcGxlQ291bnQgPSA1MH0pIHtcclxuICBjb25zdCB0b3RhbCA9IE1hdGgubWluKHNhbXBsZUNvdW50LCBhbGxEYXRhLmxlbmd0aCk7XHJcbiAgLy8gY29uc3QgZmllbGRPcmRlciA9IGZpZWxkcy5tYXAoZiA9PiBmLm5hbWUpO1xyXG4gIGNvbnN0IHNhbXBsZSA9IHJhbmdlKDAsIHRvdGFsLCAxKS5tYXAoZCA9PiAoe30pKTtcclxuXHJcbiAgLy8gY29sbGVjdCBzYW1wbGUgZGF0YSBmb3IgZWFjaCBmaWVsZFxyXG4gIGZpZWxkcy5mb3JFYWNoKChmaWVsZCwgZmllbGRJZHgpID0+IHtcclxuICAgIC8vIGRhdGEgY291bnRlclxyXG4gICAgbGV0IGkgPSAwO1xyXG4gICAgLy8gc2FtcGxlIGNvdW50ZXJcclxuICAgIGxldCBqID0gMDtcclxuXHJcbiAgICB3aGlsZSAoaiA8IHRvdGFsKSB7XHJcbiAgICAgIGlmIChpID49IGFsbERhdGEubGVuZ3RoKSB7XHJcbiAgICAgICAgLy8gaWYgZGVwbGV0ZWQgZGF0YSBwb29sXHJcbiAgICAgICAgc2FtcGxlW2pdW2ZpZWxkXSA9IG51bGw7XHJcbiAgICAgICAgaisrO1xyXG4gICAgICB9IGVsc2UgaWYgKG5vdE51bGxvclVuZGVmaW5lZChhbGxEYXRhW2ldW2ZpZWxkSWR4XSkpIHtcclxuICAgICAgICBzYW1wbGVbal1bZmllbGRdID0gYWxsRGF0YVtpXVtmaWVsZElkeF07XHJcbiAgICAgICAgaisrO1xyXG4gICAgICAgIGkrKztcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpKys7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIHNhbXBsZTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnQgZmFsc3kgdmFsdWUgaW4gY3N2IGluY2x1ZGluZyBgJycsICdudWxsJywgJ05VTEwnLCAnTnVsbCcsICdOYU4nYCB0byBgbnVsbGAsXHJcbiAqIHNvIHRoYXQgdHlwZS1hbmFseXplciB3b24ndCBkZXRlY3QgaXQgYXMgc3RyaW5nXHJcbiAqXHJcbiAqIEBwYXJhbSB7QXJyYXk8QXJyYXk+fSByb3dzXHJcbiAqL1xyXG5mdW5jdGlvbiBjbGVhblVwRmFsc3lDc3ZWYWx1ZShyb3dzKSB7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3dzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IHJvd3NbaV0ubGVuZ3RoOyBqKyspIHtcclxuICAgICAgLy8gYW5hbHl6ZXIgd2lsbCBzZXQgYW55IGZpZWxkcyB0byAnc3RyaW5nJyBpZiB0aGVyZSBhcmUgZW1wdHkgdmFsdWVzXHJcbiAgICAgIC8vIHdoaWNoIHdpbGwgYmUgcGFyc2VkIGFzICcnIGJ5IGQzLmNzdlxyXG4gICAgICAvLyBoZXJlIHdlIHBhcnNlIGVtcHR5IGRhdGEgYXMgbnVsbFxyXG4gICAgICAvLyBUT0RPOiBjcmVhdGUgd2FybmluZyB3aGVuIGRlbHRlY3QgYENTVl9OVUxMU2AgaW4gdGhlIGRhdGFcclxuICAgICAgaWYgKCFyb3dzW2ldW2pdIHx8IENTVl9OVUxMUy5pbmNsdWRlcyhyb3dzW2ldW2pdKSkge1xyXG4gICAgICAgIHJvd3NbaV1bal0gPSBudWxsO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogUHJvY2VzcyB1cGxvYWRlZCBjc3YgZmlsZSB0byBwYXJzZSB2YWx1ZSBieSBmaWVsZCB0eXBlXHJcbiAqXHJcbiAqIEBwYXJhbSByb3dzXHJcbiAqIEBwYXJhbSBnZW9GaWVsZElkeCBmaWVsZCBpbmRleFxyXG4gKiBAcGFyYW0gZmllbGRcclxuICogQHBhcmFtIGlcclxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vZGF0YS1wcm9jZXNzb3InKS5wYXJzZUNzdlJvd3NCeUZpZWxkVHlwZX1cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUNzdlJvd3NCeUZpZWxkVHlwZShyb3dzLCBnZW9GaWVsZElkeCwgZmllbGQsIGkpIHtcclxuICBjb25zdCBwYXJzZXIgPSBQQVJTRV9GSUVMRF9WQUxVRV9GUk9NX1NUUklOR1tmaWVsZC50eXBlXTtcclxuICBpZiAocGFyc2VyKSB7XHJcbiAgICAvLyBjaGVjayBmaXJzdCBub3QgbnVsbCB2YWx1ZSBvZiBpdCdzIGFscmVhZHkgcGFyc2VkXHJcbiAgICBjb25zdCBmaXJzdCA9IHJvd3MuZmluZChyID0+IG5vdE51bGxvclVuZGVmaW5lZChyW2ldKSk7XHJcbiAgICBpZiAoIWZpcnN0IHx8IHBhcnNlci52YWxpZChmaXJzdFtpXSwgZmllbGQpKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHJvd3MuZm9yRWFjaChyb3cgPT4ge1xyXG4gICAgICAvLyBwYXJzZSBzdHJpbmcgdmFsdWUgYmFzZWQgb24gZmllbGQgdHlwZVxyXG4gICAgICBpZiAocm93W2ldICE9PSBudWxsKSB7XHJcbiAgICAgICAgcm93W2ldID0gcGFyc2VyLnBhcnNlKHJvd1tpXSwgZmllbGQpO1xyXG4gICAgICAgIGlmIChnZW9GaWVsZElkeCA+IC0xICYmIHJvd1tnZW9GaWVsZElkeF0gJiYgcm93W2dlb0ZpZWxkSWR4XS5wcm9wZXJ0aWVzKSB7XHJcbiAgICAgICAgICByb3dbZ2VvRmllbGRJZHhdLnByb3BlcnRpZXNbZmllbGQubmFtZV0gPSByb3dbaV07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBbmFseXplIGZpZWxkIHR5cGVzIGZyb20gZGF0YSBpbiBgc3RyaW5nYCBmb3JtYXQsIGUuZy4gdXBsb2FkZWQgY3N2LlxyXG4gKiBBc3NpZ24gYHR5cGVgLCBgdGFibGVGaWVsZEluZGV4YCBhbmQgYGZvcm1hdGAgKHRpbWVzdGFtcCBvbmx5KSB0byBlYWNoIGZpZWxkXHJcbiAqXHJcbiAqIEBwYXJhbSBkYXRhIGFycmF5IG9mIHJvdyBvYmplY3RcclxuICogQHBhcmFtIGZpZWxkT3JkZXIgYXJyYXkgb2YgZmllbGQgbmFtZXMgYXMgc3RyaW5nXHJcbiAqIEByZXR1cm5zIGZvcm1hdHRlZCBmaWVsZHNcclxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vZGF0YS1wcm9jZXNzb3InKS5nZXRGaWVsZHNGcm9tRGF0YX1cclxuICogQHB1YmxpY1xyXG4gKiBAZXhhbXBsZVxyXG4gKlxyXG4gKiBpbXBvcnQge2dldEZpZWxkc0Zyb21EYXRhfSBmcm9tICdrZXBsZXIuZ2wvcHJvY2Vzc29ycyc7XHJcbiAqIGNvbnN0IGRhdGEgPSBbe1xyXG4gKiAgIHRpbWU6ICcyMDE2LTA5LTE3IDAwOjA5OjU1JyxcclxuICogICB2YWx1ZTogJzQnLFxyXG4gKiAgIHN1cmdlOiAnMS4yJyxcclxuICogICBpc1RyaXA6ICd0cnVlJyxcclxuICogICB6ZXJvT25lczogJzAnXHJcbiAqIH0sIHtcclxuICogICB0aW1lOiAnMjAxNi0wOS0xNyAwMDozMDowOCcsXHJcbiAqICAgdmFsdWU6ICczJyxcclxuICogICBzdXJnZTogbnVsbCxcclxuICogICBpc1RyaXA6ICdmYWxzZScsXHJcbiAqICAgemVyb09uZXM6ICcxJ1xyXG4gKiB9LCB7XHJcbiAqICAgdGltZTogbnVsbCxcclxuICogICB2YWx1ZTogJzInLFxyXG4gKiAgIHN1cmdlOiAnMS4zJyxcclxuICogICBpc1RyaXA6IG51bGwsXHJcbiAqICAgemVyb09uZXM6ICcxJ1xyXG4gKiB9XTtcclxuICpcclxuICogY29uc3QgZmllbGRPcmRlciA9IFsndGltZScsICd2YWx1ZScsICdzdXJnZScsICdpc1RyaXAnLCAnemVyb09uZXMnXTtcclxuICogY29uc3QgZmllbGRzID0gZ2V0RmllbGRzRnJvbURhdGEoZGF0YSwgZmllbGRPcmRlcik7XHJcbiAqIC8vIGZpZWxkcyA9IFtcclxuICogLy8ge25hbWU6ICd0aW1lJywgZm9ybWF0OiAnWVlZWS1NLUQgSDptOnMnLCB0YWJsZUZpZWxkSW5kZXg6IDEsIHR5cGU6ICd0aW1lc3RhbXAnfSxcclxuICogLy8ge25hbWU6ICd2YWx1ZScsIGZvcm1hdDogJycsIHRhYmxlRmllbGRJbmRleDogNCwgdHlwZTogJ2ludGVnZXInfSxcclxuICogLy8ge25hbWU6ICdzdXJnZScsIGZvcm1hdDogJycsIHRhYmxlRmllbGRJbmRleDogNSwgdHlwZTogJ3JlYWwnfSxcclxuICogLy8ge25hbWU6ICdpc1RyaXAnLCBmb3JtYXQ6ICcnLCB0YWJsZUZpZWxkSW5kZXg6IDYsIHR5cGU6ICdib29sZWFuJ30sXHJcbiAqIC8vIHtuYW1lOiAnemVyb09uZXMnLCBmb3JtYXQ6ICcnLCB0YWJsZUZpZWxkSW5kZXg6IDcsIHR5cGU6ICdpbnRlZ2VyJ31dO1xyXG4gKlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEZpZWxkc0Zyb21EYXRhKGRhdGEsIGZpZWxkT3JkZXIpIHtcclxuICAvLyBhZGQgYSBjaGVjayBmb3IgZXBvY2ggdGltZXN0YW1wXHJcbiAgY29uc3QgbWV0YWRhdGEgPSBBbmFseXplci5jb21wdXRlQ29sTWV0YShcclxuICAgIGRhdGEsXHJcbiAgICBbe3JlZ2V4OiAvLipnZW9qc29ufGFsbF9wb2ludHMvZywgZGF0YVR5cGU6ICdHRU9NRVRSWSd9XSxcclxuICAgIHtpZ25vcmVkRGF0YVR5cGVzOiBJR05PUkVfREFUQV9UWVBFU31cclxuICApO1xyXG5cclxuICBjb25zdCB7ZmllbGRCeUluZGV4fSA9IHJlbmFtZUR1cGxpY2F0ZUZpZWxkcyhmaWVsZE9yZGVyKTtcclxuXHJcbiAgY29uc3QgcmVzdWx0ID0gZmllbGRPcmRlci5tYXAoKGZpZWxkLCBpbmRleCkgPT4ge1xyXG4gICAgY29uc3QgbmFtZSA9IGZpZWxkQnlJbmRleFtpbmRleF07XHJcblxyXG4gICAgY29uc3QgZmllbGRNZXRhID0gbWV0YWRhdGEuZmluZChtID0+IG0ua2V5ID09PSBmaWVsZCk7XHJcbiAgICBjb25zdCB7dHlwZSwgZm9ybWF0fSA9IGZpZWxkTWV0YSB8fCB7fTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuYW1lLFxyXG4gICAgICBmb3JtYXQsXHJcbiAgICAgIHRhYmxlRmllbGRJbmRleDogaW5kZXggKyAxLFxyXG4gICAgICB0eXBlOiBhbmFseXplclR5cGVUb0ZpZWxkVHlwZSh0eXBlKSxcclxuICAgICAgYW5hbHl6ZXJUeXBlOiB0eXBlXHJcbiAgICB9O1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG4vKipcclxuICogcGFzcyBpbiBhbiBhcnJheSBvZiBmaWVsZCBuYW1lcywgcmVuYW1lIGR1cGxpY2F0ZWQgb25lXHJcbiAqIGFuZCByZXR1cm4gYSBtYXAgZnJvbSBvbGQgZmllbGQgaW5kZXggdG8gbmV3IG5hbWVcclxuICpcclxuICogQHBhcmFtIHtBcnJheX0gZmllbGRPcmRlclxyXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBuZXcgZmllbGQgbmFtZSBieSBpbmRleFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbmFtZUR1cGxpY2F0ZUZpZWxkcyhmaWVsZE9yZGVyKSB7XHJcbiAgcmV0dXJuIGZpZWxkT3JkZXIucmVkdWNlKFxyXG4gICAgKGFjY3UsIGZpZWxkLCBpKSA9PiB7XHJcbiAgICAgIGNvbnN0IHthbGxOYW1lc30gPSBhY2N1O1xyXG4gICAgICBsZXQgZmllbGROYW1lID0gZmllbGQ7XHJcblxyXG4gICAgICAvLyBhZGQgYSBjb3VudGVyIHRvIGR1cGxpY2F0ZWQgbmFtZXNcclxuICAgICAgaWYgKGFsbE5hbWVzLmluY2x1ZGVzKGZpZWxkKSkge1xyXG4gICAgICAgIGxldCBjb3VudGVyID0gMDtcclxuICAgICAgICB3aGlsZSAoYWxsTmFtZXMuaW5jbHVkZXMoYCR7ZmllbGR9LSR7Y291bnRlcn1gKSkge1xyXG4gICAgICAgICAgY291bnRlcisrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaWVsZE5hbWUgPSBgJHtmaWVsZH0tJHtjb3VudGVyfWA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGFjY3UuZmllbGRCeUluZGV4W2ldID0gZmllbGROYW1lO1xyXG4gICAgICBhY2N1LmFsbE5hbWVzLnB1c2goZmllbGROYW1lKTtcclxuXHJcbiAgICAgIHJldHVybiBhY2N1O1xyXG4gICAgfSxcclxuICAgIHthbGxOYW1lczogW10sIGZpZWxkQnlJbmRleDoge319XHJcbiAgKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnQgdHlwZS1hbmFseXplciBvdXRwdXQgdG8ga2VwbGVyLmdsIGZpZWxkIHR5cGVzXHJcbiAqXHJcbiAqIEBwYXJhbSBhVHlwZVxyXG4gKiBAcmV0dXJucyBjb3JyZXNwb25kaW5nIHR5cGUgaW4gYEFMTF9GSUVMRF9UWVBFU2BcclxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vZGF0YS1wcm9jZXNzb3InKS5hbmFseXplclR5cGVUb0ZpZWxkVHlwZX19XHJcbiAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBjb21wbGV4aXR5ICovXHJcbmV4cG9ydCBmdW5jdGlvbiBhbmFseXplclR5cGVUb0ZpZWxkVHlwZShhVHlwZSkge1xyXG4gIGNvbnN0IHtcclxuICAgIERBVEUsXHJcbiAgICBUSU1FLFxyXG4gICAgREFURVRJTUUsXHJcbiAgICBOVU1CRVIsXHJcbiAgICBJTlQsXHJcbiAgICBGTE9BVCxcclxuICAgIEJPT0xFQU4sXHJcbiAgICBTVFJJTkcsXHJcbiAgICBHRU9NRVRSWSxcclxuICAgIEdFT01FVFJZX0ZST01fU1RSSU5HLFxyXG4gICAgUEFJUl9HRU9NRVRSWV9GUk9NX1NUUklORyxcclxuICAgIFpJUENPREUsXHJcbiAgICBBUlJBWSxcclxuICAgIE9CSkVDVFxyXG4gIH0gPSBBbmFseXplckRBVEFfVFlQRVM7XHJcblxyXG4gIC8vIFRPRE86IHVuIHJlY29nbml6ZWQgdHlwZXNcclxuICAvLyBDVVJSRU5DWSBQRVJDRU5UIE5PTkVcclxuICBzd2l0Y2ggKGFUeXBlKSB7XHJcbiAgICBjYXNlIERBVEU6XHJcbiAgICAgIHJldHVybiBBTExfRklFTERfVFlQRVMuZGF0ZTtcclxuICAgIGNhc2UgVElNRTpcclxuICAgIGNhc2UgREFURVRJTUU6XHJcbiAgICAgIHJldHVybiBBTExfRklFTERfVFlQRVMudGltZXN0YW1wO1xyXG4gICAgY2FzZSBGTE9BVDpcclxuICAgICAgcmV0dXJuIEFMTF9GSUVMRF9UWVBFUy5yZWFsO1xyXG4gICAgY2FzZSBJTlQ6XHJcbiAgICAgIHJldHVybiBBTExfRklFTERfVFlQRVMuaW50ZWdlcjtcclxuICAgIGNhc2UgQk9PTEVBTjpcclxuICAgICAgcmV0dXJuIEFMTF9GSUVMRF9UWVBFUy5ib29sZWFuO1xyXG4gICAgY2FzZSBHRU9NRVRSWTpcclxuICAgIGNhc2UgR0VPTUVUUllfRlJPTV9TVFJJTkc6XHJcbiAgICBjYXNlIFBBSVJfR0VPTUVUUllfRlJPTV9TVFJJTkc6XHJcbiAgICBjYXNlIEFSUkFZOlxyXG4gICAgY2FzZSBPQkpFQ1Q6XHJcbiAgICAgIC8vIFRPRE86IGNyZWF0ZSBhIG5ldyBkYXRhIHR5cGUgZm9yIG9iamVjdHMgYW5kIGFycmF5c1xyXG4gICAgICByZXR1cm4gQUxMX0ZJRUxEX1RZUEVTLmdlb2pzb247XHJcbiAgICBjYXNlIE5VTUJFUjpcclxuICAgIGNhc2UgU1RSSU5HOlxyXG4gICAgY2FzZSBaSVBDT0RFOlxyXG4gICAgICByZXR1cm4gQUxMX0ZJRUxEX1RZUEVTLnN0cmluZztcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIGdsb2JhbENvbnNvbGUud2FybihgVW5zdXBwb3J0ZWQgYW5hbHl6ZXIgdHlwZTogJHthVHlwZX1gKTtcclxuICAgICAgcmV0dXJuIEFMTF9GSUVMRF9UWVBFUy5zdHJpbmc7XHJcbiAgfVxyXG59XHJcbi8qIGVzbGludC1lbmFibGUgY29tcGxleGl0eSAqL1xyXG5cclxuLyoqXHJcbiAqIFByb2Nlc3MgZGF0YSB3aGVyZSBlYWNoIHJvdyBpcyBhbiBvYmplY3QsIG91dHB1dCBjYW4gYmUgcGFzc2VkIHRvIFtgYWRkRGF0YVRvTWFwYF0oLi4vYWN0aW9ucy9hY3Rpb25zLm1kI2FkZGRhdGF0b21hcClcclxuICogQHBhcmFtIHJhd0RhdGEgYW4gYXJyYXkgb2Ygcm93IG9iamVjdCwgZWFjaCBvYmplY3Qgc2hvdWxkIGhhdmUgdGhlIHNhbWUgbnVtYmVyIG9mIGtleXNcclxuICogQHJldHVybnMgZGF0YXNldCBjb250YWluaW5nIGBmaWVsZHNgIGFuZCBgcm93c2BcclxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vZGF0YS1wcm9jZXNzb3InKS5wcm9jZXNzUm93T2JqZWN0fVxyXG4gKiBAcHVibGljXHJcbiAqIEBleGFtcGxlXHJcbiAqIGltcG9ydCB7YWRkRGF0YVRvTWFwfSBmcm9tICdrZXBsZXIuZ2wvYWN0aW9ucyc7XHJcbiAqIGltcG9ydCB7cHJvY2Vzc1Jvd09iamVjdH0gZnJvbSAna2VwbGVyLmdsL3Byb2Nlc3NvcnMnO1xyXG4gKlxyXG4gKiBjb25zdCBkYXRhID0gW1xyXG4gKiAge2xhdDogMzEuMjcsIGxuZzogMTI3LjU2LCB2YWx1ZTogM30sXHJcbiAqICB7bGF0OiAzMS4yMiwgbG5nOiAxMjYuMjYsIHZhbHVlOiAxfVxyXG4gKiBdO1xyXG4gKlxyXG4gKiBkaXNwYXRjaChhZGREYXRhVG9NYXAoe1xyXG4gKiAgZGF0YXNldHM6IHtcclxuICogICAgaW5mbzoge2xhYmVsOiAnTXkgRGF0YScsIGlkOiAnbXlfZGF0YSd9LFxyXG4gKiAgICBkYXRhOiBwcm9jZXNzUm93T2JqZWN0KGRhdGEpXHJcbiAqICB9XHJcbiAqIH0pKTtcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBwcm9jZXNzUm93T2JqZWN0KHJhd0RhdGEpIHtcclxuICBpZiAoIUFycmF5LmlzQXJyYXkocmF3RGF0YSkgfHwgIXJhd0RhdGEubGVuZ3RoKSB7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhyYXdEYXRhWzBdKTtcclxuICBjb25zdCByb3dzID0gcmF3RGF0YS5tYXAoZCA9PiBrZXlzLm1hcChrZXkgPT4gZFtrZXldKSk7XHJcblxyXG4gIC8vIHBpY2sgc2FtcGxlc1xyXG4gIGNvbnN0IHNhbXBsZURhdGEgPSBnZXRTYW1wbGVEYXRhKHJhd0RhdGEsIDUwMCk7XHJcbiAgY29uc3QgZmllbGRzID0gZ2V0RmllbGRzRnJvbURhdGEoc2FtcGxlRGF0YSwga2V5cyk7XHJcbiAgY29uc3QgcGFyc2VkUm93cyA9IHBhcnNlUm93c0J5RmllbGRzKHJvd3MsIGZpZWxkcyk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBmaWVsZHMsXHJcbiAgICByb3dzOiBwYXJzZWRSb3dzXHJcbiAgfTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFByb2Nlc3MgR2VvSlNPTiBbYEZlYXR1cmVDb2xsZWN0aW9uYF0oaHR0cDovL3dpa2kuZ2VvanNvbi5vcmcvR2VvSlNPTl9kcmFmdF92ZXJzaW9uXzYjRmVhdHVyZUNvbGxlY3Rpb24pLFxyXG4gKiBvdXRwdXQgYSBkYXRhIG9iamVjdCB3aXRoIGB7ZmllbGRzOiBbXSwgcm93czogW119YC5cclxuICogVGhlIGRhdGEgb2JqZWN0IGNhbiBiZSB3cmFwcGVkIGluIGEgYGRhdGFzZXRgIGFuZCBwYXNzIHRvIFtgYWRkRGF0YVRvTWFwYF0oLi4vYWN0aW9ucy9hY3Rpb25zLm1kI2FkZGRhdGF0b21hcClcclxuICpcclxuICogQHBhcmFtICByYXdEYXRhIHJhdyBnZW9qc29uIGZlYXR1cmUgY29sbGVjdGlvblxyXG4gKiBAcmV0dXJucyAgZGF0YXNldCBjb250YWluaW5nIGBmaWVsZHNgIGFuZCBgcm93c2BcclxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vZGF0YS1wcm9jZXNzb3InKS5wcm9jZXNzR2VvanNvbn1cclxuICogQHB1YmxpY1xyXG4gKiBAZXhhbXBsZVxyXG4gKiBpbXBvcnQge2FkZERhdGFUb01hcH0gZnJvbSAna2VwbGVyLmdsL2FjdGlvbnMnO1xyXG4gKiBpbXBvcnQge3Byb2Nlc3NHZW9qc29ufSBmcm9tICdrZXBsZXIuZ2wvcHJvY2Vzc29ycyc7XHJcbiAqXHJcbiAqIGNvbnN0IGdlb2pzb24gPSB7XHJcbiAqIFx0XCJ0eXBlXCIgOiBcIkZlYXR1cmVDb2xsZWN0aW9uXCIsXHJcbiAqIFx0XCJmZWF0dXJlc1wiIDogW3tcclxuICogXHRcdFwidHlwZVwiIDogXCJGZWF0dXJlXCIsXHJcbiAqIFx0XHRcInByb3BlcnRpZXNcIiA6IHtcclxuICogXHRcdFx0XCJjYXBhY2l0eVwiIDogXCIxMFwiLFxyXG4gKiBcdFx0XHRcInR5cGVcIiA6IFwiVS1SYWNrXCJcclxuICogXHRcdH0sXHJcbiAqIFx0XHRcImdlb21ldHJ5XCIgOiB7XHJcbiAqIFx0XHRcdFwidHlwZVwiIDogXCJQb2ludFwiLFxyXG4gKiBcdFx0XHRcImNvb3JkaW5hdGVzXCIgOiBbIC03MS4wNzMyODMsIDQyLjQxNzUwMCBdXHJcbiAqIFx0XHR9XHJcbiAqIFx0fV1cclxuICogfTtcclxuICpcclxuICogZGlzcGF0Y2goYWRkRGF0YVRvTWFwKHtcclxuICogIGRhdGFzZXRzOiB7XHJcbiAqICAgIGluZm86IHtcclxuICogICAgICBsYWJlbDogJ1NhbXBsZSBUYXhpIFRyaXBzIGluIE5ldyBZb3JrIENpdHknLFxyXG4gKiAgICAgIGlkOiAndGVzdF90cmlwX2RhdGEnXHJcbiAqICAgIH0sXHJcbiAqICAgIGRhdGE6IHByb2Nlc3NHZW9qc29uKGdlb2pzb24pXHJcbiAqICB9XHJcbiAqIH0pKTtcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBwcm9jZXNzR2VvanNvbihyYXdEYXRhKSB7XHJcbiAgY29uc3Qgbm9ybWFsaXplZEdlb2pzb24gPSBub3JtYWxpemUocmF3RGF0YSk7XHJcblxyXG4gIGlmICghbm9ybWFsaXplZEdlb2pzb24gfHwgIUFycmF5LmlzQXJyYXkobm9ybWFsaXplZEdlb2pzb24uZmVhdHVyZXMpKSB7XHJcbiAgICBjb25zdCBlcnJvciA9IG5ldyBFcnJvcihcclxuICAgICAgYFJlYWQgRmlsZSBGYWlsZWQ6IEZpbGUgaXMgbm90IGEgdmFsaWQgR2VvSlNPTi4gUmVhZCBtb3JlIGFib3V0IFtzdXBwb3J0ZWQgZmlsZSBmb3JtYXRdKCR7R1VJREVTX0ZJTEVfRk9STUFUX0RPQ30pYFxyXG4gICAgKTtcclxuICAgIHRocm93IGVycm9yO1xyXG4gICAgLy8gZmFpbCB0byBub3JtYWxpemUgZ2VvanNvblxyXG4gIH1cclxuXHJcbiAgLy8gZ2V0dGluZyBhbGwgZmVhdHVyZSBmaWVsZHNcclxuICBjb25zdCBhbGxEYXRhUm93cyA9IFtdO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbm9ybWFsaXplZEdlb2pzb24uZmVhdHVyZXMubGVuZ3RoOyBpKyspIHtcclxuICAgIGNvbnN0IGYgPSBub3JtYWxpemVkR2VvanNvbi5mZWF0dXJlc1tpXTtcclxuICAgIGlmIChmLmdlb21ldHJ5KSB7XHJcbiAgICAgIGFsbERhdGFSb3dzLnB1c2goe1xyXG4gICAgICAgIC8vIGFkZCBmZWF0dXJlIHRvIF9nZW9qc29uIGZpZWxkXHJcbiAgICAgICAgX2dlb2pzb246IGYsXHJcbiAgICAgICAgLi4uKGYucHJvcGVydGllcyB8fCB7fSlcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC8vIGdldCBhbGwgdGhlIGZpZWxkXHJcbiAgY29uc3QgZmllbGRzID0gYWxsRGF0YVJvd3MucmVkdWNlKChwcmV2LCBjdXJyKSA9PiB7XHJcbiAgICBPYmplY3Qua2V5cyhjdXJyKS5mb3JFYWNoKGtleSA9PiB7XHJcbiAgICAgIGlmICghcHJldi5pbmNsdWRlcyhrZXkpKSB7XHJcbiAgICAgICAgcHJldi5wdXNoKGtleSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHByZXY7XHJcbiAgfSwgW10pO1xyXG5cclxuICAvLyBtYWtlIHN1cmUgZWFjaCBmZWF0dXJlIGhhcyBleGFjdCBzYW1lIGZpZWxkc1xyXG4gIGFsbERhdGFSb3dzLmZvckVhY2goZCA9PiB7XHJcbiAgICBmaWVsZHMuZm9yRWFjaChmID0+IHtcclxuICAgICAgaWYgKCEoZiBpbiBkKSkge1xyXG4gICAgICAgIGRbZl0gPSBudWxsO1xyXG4gICAgICAgIGQuX2dlb2pzb24ucHJvcGVydGllc1tmXSA9IG51bGw7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gcHJvY2Vzc1Jvd09iamVjdChhbGxEYXRhUm93cyk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBPbiBleHBvcnQgZGF0YSB0byBjc3ZcclxuICogQHBhcmFtIHtBcnJheTxBcnJheT59IGRhdGEgYGRhdGFzZXQuYWxsRGF0YWAgb3IgZmlsdGVyZWQgZGF0YSBgZGF0YXNldC5kYXRhYFxyXG4gKiBAcGFyYW0ge0FycmF5PE9iamVjdD59IGZpZWxkcyBgZGF0YXNldC5maWVsZHNgXHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9IGNzdiBzdHJpbmdcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRDc3YoZGF0YSwgZmllbGRzKSB7XHJcbiAgY29uc3QgY29sdW1ucyA9IGZpZWxkcy5tYXAoZiA9PiBmLm5hbWUpO1xyXG4gIGNvbnN0IGZvcm1hdHRlZERhdGEgPSBbY29sdW1uc107XHJcblxyXG4gIC8vIHBhcnNlIGdlb2pzb24gb2JqZWN0IGFzIHN0cmluZ1xyXG4gIGRhdGEuZm9yRWFjaChyb3cgPT4ge1xyXG4gICAgZm9ybWF0dGVkRGF0YS5wdXNoKHJvdy5tYXAoKGQsIGkpID0+IHBhcnNlRmllbGRWYWx1ZShkLCBmaWVsZHNbaV0udHlwZSkpKTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIGNzdkZvcm1hdFJvd3MoZm9ybWF0dGVkRGF0YSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBWYWxpZGF0ZSBpbnB1dCBkYXRhLCBhZGRpbmcgbWlzc2luZyBmaWVsZCB0eXBlcywgcmVuYW1lIGR1cGxpY2F0ZSBjb2x1bW5zXHJcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL2RhdGEtcHJvY2Vzc29yJykudmFsaWRhdGVJbnB1dERhdGF9XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVJbnB1dERhdGEoZGF0YSkge1xyXG4gIGlmICghaXNQbGFpbk9iamVjdChkYXRhKSkge1xyXG4gICAgYXNzZXJ0KCdhZGREYXRhVG9NYXAgRXJyb3I6IGRhdGFzZXQuZGF0YSBjYW5ub3QgYmUgbnVsbCcpO1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfSBlbHNlIGlmICghQXJyYXkuaXNBcnJheShkYXRhLmZpZWxkcykpIHtcclxuICAgIGFzc2VydCgnYWRkRGF0YVRvTWFwIEVycm9yOiBleHBlY3QgZGF0YXNldC5kYXRhLmZpZWxkcyB0byBiZSBhbiBhcnJheScpO1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfSBlbHNlIGlmICghQXJyYXkuaXNBcnJheShkYXRhLnJvd3MpKSB7XHJcbiAgICBhc3NlcnQoJ2FkZERhdGFUb01hcCBFcnJvcjogZXhwZWN0IGRhdGFzZXQuZGF0YS5yb3dzIHRvIGJlIGFuIGFycmF5Jyk7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIGNvbnN0IHtmaWVsZHMsIHJvd3N9ID0gZGF0YTtcclxuXHJcbiAgLy8gY2hlY2sgaWYgYWxsIGZpZWxkcyBoYXMgbmFtZSwgZm9ybWF0IGFuZCB0eXBlXHJcbiAgY29uc3QgYWxsVmFsaWQgPSBmaWVsZHMuZXZlcnkoKGYsIGkpID0+IHtcclxuICAgIGlmICghaXNQbGFpbk9iamVjdChmKSkge1xyXG4gICAgICBhc3NlcnQoYGZpZWxkcyBuZWVkcyB0byBiZSBhbiBhcnJheSBvZiBvYmplY3QsIGJ1dCBmaW5kICR7dHlwZW9mIGZ9YCk7XHJcbiAgICAgIGZpZWxkc1tpXSA9IHt9O1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghZi5uYW1lKSB7XHJcbiAgICAgIGFzc2VydChgZmllbGQubmFtZSBpcyByZXF1aXJlZCBidXQgbWlzc2luZyBpbiAke0pTT04uc3RyaW5naWZ5KGYpfWApO1xyXG4gICAgICAvLyBhc3NpZ24gYSBuYW1lXHJcbiAgICAgIGZpZWxkc1tpXS5uYW1lID0gYGNvbHVtbl8ke2l9YDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIUFMTF9GSUVMRF9UWVBFU1tmLnR5cGVdKSB7XHJcbiAgICAgIGFzc2VydChgdW5rbm93biBmaWVsZCB0eXBlICR7Zi50eXBlfWApO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFmaWVsZHMuZXZlcnkoZmllbGQgPT4gZmllbGQuYW5hbHl6ZXJUeXBlKSkge1xyXG4gICAgICBhc3NlcnQoJ2ZpZWxkIG1pc3NpbmcgYW5hbHl6ZXJUeXBlJyk7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBjaGVjayB0aW1lIGZvcm1hdCBpcyBjb3JyZWN0IGJhc2VkIG9uIGZpcnN0IDEwIG5vdCBlbXB0eSBlbGVtZW50XHJcbiAgICBpZiAoZi50eXBlID09PSBBTExfRklFTERfVFlQRVMudGltZXN0YW1wKSB7XHJcbiAgICAgIGNvbnN0IHNhbXBsZSA9IGZpbmROb25FbXB0eVJvd3NBdEZpZWxkKHJvd3MsIGksIDEwKS5tYXAociA9PiAoe3RzOiByW2ldfSkpO1xyXG4gICAgICBjb25zdCBhbmFseXplZFR5cGUgPSBBbmFseXplci5jb21wdXRlQ29sTWV0YShzYW1wbGUpWzBdO1xyXG4gICAgICByZXR1cm4gYW5hbHl6ZWRUeXBlLmNhdGVnb3J5ID09PSAnVElNRScgJiYgYW5hbHl6ZWRUeXBlLmZvcm1hdCA9PT0gZi5mb3JtYXQ7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfSk7XHJcblxyXG4gIGlmIChhbGxWYWxpZCkge1xyXG4gICAgcmV0dXJuIHtyb3dzLCBmaWVsZHN9O1xyXG4gIH1cclxuXHJcbiAgLy8gaWYgYW55IGZpZWxkIGhhcyBtaXNzaW5nIHR5cGUsIHJlY2FsY3VsYXRlIGl0IGZvciBldmVyeW9uZVxyXG4gIC8vIGJlY2F1c2Ugd2Ugc2ltcGx5IGxvc3QgZmFpdGggaW4gaHVtYW5pdHlcclxuICBjb25zdCBzYW1wbGVEYXRhID0gZ2V0U2FtcGxlRm9yVHlwZUFuYWx5emUoe1xyXG4gICAgZmllbGRzOiBmaWVsZHMubWFwKGYgPT4gZi5uYW1lKSxcclxuICAgIGFsbERhdGE6IHJvd3NcclxuICB9KTtcclxuICBjb25zdCBmaWVsZE9yZGVyID0gZmllbGRzLm1hcChmID0+IGYubmFtZSk7XHJcbiAgY29uc3QgbWV0YSA9IGdldEZpZWxkc0Zyb21EYXRhKHNhbXBsZURhdGEsIGZpZWxkT3JkZXIpO1xyXG4gIGNvbnN0IHVwZGF0ZWRGaWVsZHMgPSBmaWVsZHMubWFwKChmLCBpKSA9PiAoe1xyXG4gICAgLi4uZixcclxuICAgIHR5cGU6IG1ldGFbaV0udHlwZSxcclxuICAgIGZvcm1hdDogbWV0YVtpXS5mb3JtYXQsXHJcbiAgICBhbmFseXplclR5cGU6IG1ldGFbaV0uYW5hbHl6ZXJUeXBlXHJcbiAgfSkpO1xyXG5cclxuICByZXR1cm4ge2ZpZWxkczogdXBkYXRlZEZpZWxkcywgcm93c307XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZpbmROb25FbXB0eVJvd3NBdEZpZWxkKHJvd3MsIGZpZWxkSWR4LCB0b3RhbCkge1xyXG4gIGNvbnN0IHNhbXBsZSA9IFtdO1xyXG4gIGxldCBpID0gMDtcclxuICB3aGlsZSAoc2FtcGxlLmxlbmd0aCA8IHRvdGFsICYmIGkgPCByb3dzLmxlbmd0aCkge1xyXG4gICAgaWYgKG5vdE51bGxvclVuZGVmaW5lZChyb3dzW2ldW2ZpZWxkSWR4XSkpIHtcclxuICAgICAgc2FtcGxlLnB1c2gocm93c1tpXSk7XHJcbiAgICB9XHJcbiAgICBpKys7XHJcbiAgfVxyXG4gIHJldHVybiBzYW1wbGU7XHJcbn1cclxuLyoqXHJcbiAqIFByb2Nlc3Mgc2F2ZWQga2VwbGVyLmdsIGpzb24gdG8gYmUgcGFzcyB0byBbYGFkZERhdGFUb01hcGBdKC4uL2FjdGlvbnMvYWN0aW9ucy5tZCNhZGRkYXRhdG9tYXApLlxyXG4gKiBUaGUganNvbiBvYmplY3Qgc2hvdWxkIGNvbnRhaW4gYGRhdGFzZXRzYCBhbmQgYGNvbmZpZ2AuXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSByYXdEYXRhXHJcbiAqIEBwYXJhbSB7QXJyYXl9IHJhd0RhdGEuZGF0YXNldHNcclxuICogQHBhcmFtIHtPYmplY3R9IHJhd0RhdGEuY29uZmlnXHJcbiAqIEByZXR1cm5zIHtPYmplY3R9IGRhdGFzZXRzIGFuZCBjb25maWcgYHtkYXRhc2V0czoge30sIGNvbmZpZzoge319YFxyXG4gKiBAcHVibGljXHJcbiAqIEBleGFtcGxlXHJcbiAqIGltcG9ydCB7YWRkRGF0YVRvTWFwfSBmcm9tICdrZXBsZXIuZ2wvYWN0aW9ucyc7XHJcbiAqIGltcG9ydCB7cHJvY2Vzc0tlcGxlcmdsSlNPTn0gZnJvbSAna2VwbGVyLmdsL3Byb2Nlc3NvcnMnO1xyXG4gKlxyXG4gKiBkaXNwYXRjaChhZGREYXRhVG9NYXAocHJvY2Vzc0tlcGxlcmdsSlNPTihrZXBsZXJHbEpzb24pKSk7XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcHJvY2Vzc0tlcGxlcmdsSlNPTihyYXdEYXRhKSB7XHJcbiAgcmV0dXJuIHJhd0RhdGEgPyBLZXBsZXJHbFNjaGVtYS5sb2FkKHJhd0RhdGEuZGF0YXNldHMsIHJhd0RhdGEuY29uZmlnKSA6IG51bGw7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBQYXJzZSBhIHNpbmdsZSBvciBhbiBhcnJheSBvZiBkYXRhc2V0cyBzYXZlZCB1c2luZyBrZXBsZXIuZ2wgc2NoZW1hXHJcbiAqIEBwYXJhbSB7QXJyYXkgfCBBcnJheTxPYmplY3Q+fSByYXdEYXRhXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcHJvY2Vzc0tlcGxlcmdsRGF0YXNldChyYXdEYXRhKSB7XHJcbiAgaWYgKCFyYXdEYXRhKSB7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIGNvbnN0IHJlc3VsdHMgPSBLZXBsZXJHbFNjaGVtYS5wYXJzZVNhdmVkRGF0YSh0b0FycmF5KHJhd0RhdGEpKTtcclxuICBpZiAoIXJlc3VsdHMpIHtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuICByZXR1cm4gQXJyYXkuaXNBcnJheShyYXdEYXRhKSA/IHJlc3VsdHMgOiByZXN1bHRzWzBdO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgREFUQVNFVF9IQU5ETEVSUyA9IHtcclxuICBbREFUQVNFVF9GT1JNQVRTLnJvd106IHByb2Nlc3NSb3dPYmplY3QsXHJcbiAgW0RBVEFTRVRfRk9STUFUUy5nZW9qc29uXTogcHJvY2Vzc0dlb2pzb24sXHJcbiAgW0RBVEFTRVRfRk9STUFUUy5jc3ZdOiBwcm9jZXNzQ3N2RGF0YSxcclxuICBbREFUQVNFVF9GT1JNQVRTLmtlcGxlcmdsXTogcHJvY2Vzc0tlcGxlcmdsRGF0YXNldFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IFByb2Nlc3NvcnMgPSB7XHJcbiAgcHJvY2Vzc0dlb2pzb24sXHJcbiAgcHJvY2Vzc0NzdkRhdGEsXHJcbiAgcHJvY2Vzc1Jvd09iamVjdCxcclxuICBwcm9jZXNzS2VwbGVyZ2xKU09OLFxyXG4gIHByb2Nlc3NLZXBsZXJnbERhdGFzZXQsXHJcbiAgYW5hbHl6ZXJUeXBlVG9GaWVsZFR5cGUsXHJcbiAgZ2V0RmllbGRzRnJvbURhdGEsXHJcbiAgcGFyc2VDc3ZSb3dzQnlGaWVsZFR5cGUsXHJcbiAgZm9ybWF0Q3N2XHJcbn07XHJcbiJdfQ==