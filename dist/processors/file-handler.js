"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.readFile = readFile;
exports.getFileHandler = getFileHandler;
exports.getFileType = getFileType;
exports.loadCsv = loadCsv;
exports.loadJSON = loadJSON;
exports.readJSONFile = readJSONFile;
exports.isGeoJson = isGeoJson;
exports.isFeature = isFeature;
exports.isFeatureCollection = isFeatureCollection;
exports.isRowObject = isRowObject;
exports.isKeplerGlMap = isKeplerGlMap;
exports.determineJsonProcess = determineJsonProcess;
exports.filesToDataPayload = filesToDataPayload;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _window = require("global/window");

var _console = _interopRequireDefault(require("global/console"));

var _dataProcessor = require("./data-processor");

var _utils = require("../utils/utils");

var _defaultSettings = require("../constants/default-settings");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var FILE_HANDLERS = {
  csv: loadCsv,
  json: loadJSON
};
/** @type {typeof import('./file-handler').readFile} */

function readFile(_ref) {
  var file = _ref.file,
      _ref$fileCache = _ref.fileCache,
      fileCache = _ref$fileCache === void 0 ? [] : _ref$fileCache;
  return new Promise(function (resolve, reject) {
    var _getFileHandler = getFileHandler(file),
        handler = _getFileHandler.handler,
        format = _getFileHandler.format;

    if (!handler) {
      _console["default"].warn("Canont determine file handler for file ".concat(file.name, ". It must have a valid file extension"));

      resolve(fileCache);
    }

    handler({
      file: file,
      format: format
    }).then(function (result) {
      if (!result || !result.data) {
        // return fileCache, to keep process other files
        resolve(fileCache);
      }

      resolve([].concat((0, _toConsumableArray2["default"])(fileCache), [{
        data: result.data,
        info: {
          label: file.name,
          format: result.format
        }
      }]));
    });
  });
}
/** @type {typeof import('./file-handler').getFileHandler} */


function getFileHandler(fileBlob) {
  var type = getFileType(fileBlob.name);
  return {
    handler: FILE_HANDLERS[type],
    format: type
  };
}
/** @type {typeof import('./file-handler').getFileType} */


function getFileType(filename) {
  if (filename.endsWith('csv')) {
    return 'csv';
  } else if (filename.endsWith('json') || filename.endsWith('geojson')) {
    // Read GeoJson from browser
    return 'json';
  } // Wait to add other file type handler


  return 'other';
}

function readCSVFile(fileBlob) {
  return new Promise(function (resolve, reject) {
    var fileReader = new _window.FileReader();

    fileReader.onload = function (_ref2) {
      var result = _ref2.target.result;
      resolve(result);
    };

    fileReader.readAsText(fileBlob);
  });
}

function loadCsv(_ref3) {
  var file = _ref3.file,
      format = _ref3.format,
      _ref3$processor = _ref3.processor,
      processor = _ref3$processor === void 0 ? _dataProcessor.processCsvData : _ref3$processor;
  return readCSVFile(file).then(function (rawData) {
    return rawData ? {
      data: processor(rawData),
      format: format
    } : null;
  });
}

function loadJSON(_ref4) {
  var file = _ref4.file,
      _ref4$processor = _ref4.processor,
      processor = _ref4$processor === void 0 ? _dataProcessor.processGeojson : _ref4$processor;
  return readJSONFile(file).then(function (content) {
    if (isKeplerGlMap(content)) {
      return {
        format: _defaultSettings.DATASET_FORMATS.keplergl,
        data: (0, _dataProcessor.processKeplerglJSON)(content)
      };
    } else if (isRowObject(content)) {
      return {
        format: _defaultSettings.DATASET_FORMATS.row,
        data: (0, _dataProcessor.processRowObject)(content)
      };
    } else if (isGeoJson(content)) {
      return {
        format: _defaultSettings.DATASET_FORMATS.geojson,
        data: (0, _dataProcessor.processGeojson)(content)
      };
    } // unsupported json format


    _console["default"].warn("unsupported Json format ".concat(file.name));

    return null;
  });
}

function readJSONFile(fileBlob) {
  return new Promise(function (resolve, reject) {
    var fileReader = new _window.FileReader();

    fileReader.onload = function (_ref5) {
      var result = _ref5.target.result;

      try {
        var json = JSON.parse(result);
        resolve(json);
      } catch (err) {
        reject(null);
      }
    };

    fileReader.readAsText(fileBlob, 'UTF-8');
  });
}

function isGeoJson(json) {
  // json can be feature collection
  // or simgle feature
  return (0, _utils.isPlainObject)(json) && (isFeature(json) || isFeatureCollection(json));
}

function isFeature(json) {
  return json.type === 'Feature' && json.geometry;
}

function isFeatureCollection(json) {
  return json.type === 'FeatureCollection' && json.features;
}

function isRowObject(json) {
  return Array.isArray(json) && (0, _utils.isPlainObject)(json[0]);
}

function isKeplerGlMap(json) {
  return (0, _utils.isPlainObject)(json) && json.datasets && json.config && json.info && json.info.app === 'kepler.gl';
}

function determineJsonProcess(_ref6, defaultProcessor) {
  var dataset = _ref6.dataset,
      format = _ref6.format;

  if (isKeplerGlMap(dataset)) {
    return _dataProcessor.processKeplerglJSON;
  }

  return defaultProcessor;
}

function filesToDataPayload(fileCache) {
  // seperate out files which could be a single datasets. or a keplergl map json
  var collection = fileCache.reduce(function (accu, file) {
    var data = file.data,
        _file$info = file.info,
        info = _file$info === void 0 ? {} : _file$info;
    var format = info.format;

    if (format === _defaultSettings.DATASET_FORMATS.keplergl) {
      // if file contains a single kepler map dataset & config
      accu.keplerMaps.push(_objectSpread(_objectSpread({}, data), {}, {
        options: {
          centerMap: !(data.config && data.config.mapState)
        }
      }));
    } else if (_defaultSettings.DATASET_FORMATS[format]) {
      // if file contains only data
      var newDataset = {
        data: data,
        info: _objectSpread({
          id: info.id || (0, _utils.generateHashId)(4)
        }, info)
      };
      accu.datasets.push(newDataset);
    }

    return accu;
  }, {
    datasets: [],
    keplerMaps: []
  }); // add kepler map first with config
  // add datasets later in one add data call

  return collection.keplerMaps.concat({
    datasets: collection.datasets
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wcm9jZXNzb3JzL2ZpbGUtaGFuZGxlci5qcyJdLCJuYW1lcyI6WyJGSUxFX0hBTkRMRVJTIiwiY3N2IiwibG9hZENzdiIsImpzb24iLCJsb2FkSlNPTiIsInJlYWRGaWxlIiwiZmlsZSIsImZpbGVDYWNoZSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiZ2V0RmlsZUhhbmRsZXIiLCJoYW5kbGVyIiwiZm9ybWF0IiwiQ29uc29sZSIsIndhcm4iLCJuYW1lIiwidGhlbiIsInJlc3VsdCIsImRhdGEiLCJpbmZvIiwibGFiZWwiLCJmaWxlQmxvYiIsInR5cGUiLCJnZXRGaWxlVHlwZSIsImZpbGVuYW1lIiwiZW5kc1dpdGgiLCJyZWFkQ1NWRmlsZSIsImZpbGVSZWFkZXIiLCJGaWxlUmVhZGVyIiwib25sb2FkIiwidGFyZ2V0IiwicmVhZEFzVGV4dCIsInByb2Nlc3NvciIsInByb2Nlc3NDc3ZEYXRhIiwicmF3RGF0YSIsInByb2Nlc3NHZW9qc29uIiwicmVhZEpTT05GaWxlIiwiY29udGVudCIsImlzS2VwbGVyR2xNYXAiLCJEQVRBU0VUX0ZPUk1BVFMiLCJrZXBsZXJnbCIsImlzUm93T2JqZWN0Iiwicm93IiwiaXNHZW9Kc29uIiwiZ2VvanNvbiIsIkpTT04iLCJwYXJzZSIsImVyciIsImlzRmVhdHVyZSIsImlzRmVhdHVyZUNvbGxlY3Rpb24iLCJnZW9tZXRyeSIsImZlYXR1cmVzIiwiQXJyYXkiLCJpc0FycmF5IiwiZGF0YXNldHMiLCJjb25maWciLCJhcHAiLCJkZXRlcm1pbmVKc29uUHJvY2VzcyIsImRlZmF1bHRQcm9jZXNzb3IiLCJkYXRhc2V0IiwicHJvY2Vzc0tlcGxlcmdsSlNPTiIsImZpbGVzVG9EYXRhUGF5bG9hZCIsImNvbGxlY3Rpb24iLCJyZWR1Y2UiLCJhY2N1Iiwia2VwbGVyTWFwcyIsInB1c2giLCJvcHRpb25zIiwiY2VudGVyTWFwIiwibWFwU3RhdGUiLCJuZXdEYXRhc2V0IiwiaWQiLCJjb25jYXQiXSwi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TyxFQUFFO0FBQ1BDLFVBQUFBLFNBQVMsRUFBRSxFQUFFbEQsSUFBSSxDQUFDcUMsTUFBTCxJQUFlckMsSUFBSSxDQUFDcUMsTUFBTCxDQUFZYyxRQUE3QjtBQURKO0FBRlg7QUFNRCxLQVJELE1BUU8sSUFBSTlCLGlDQUFnQjNCLE1BQWhCLENBQUosRUFBNkI7QUFDbEM7QUFDQSxVQUFNMEQsVUFBVSxHQUFHO0FBQ2pCcEQsUUFBQUEsSUFBSSxFQUFKQSxJQURpQjtBQUVqQkMsUUFBQUEsSUFBSTtBQUNGb0QsVUFBQUEsRUFBRSxFQUFFcEQsSUFBSSxDQUFDb0QsRUFBTCxJQUFXLDJCQUFlLENBQWY7QUFEYixXQUVDcEQsSUFGRDtBQUZhLE9BQW5CO0FBT0E2QyxNQUFBQSxJQUFJLENBQUNWLFFBQUwsQ0FBY1ksSUFBZCxDQUFtQkksVUFBbkI7QUFDRDs7QUFDRCxXQUFPTixJQUFQO0FBQ0QsR0F4QmdCLEVBeUJqQjtBQUFDVixJQUFBQSxRQUFRLEVBQUUsRUFBWDtBQUFlVyxJQUFBQSxVQUFVLEVBQUU7QUFBM0IsR0F6QmlCLENBQW5CLENBRjRDLENBOEI1QztBQUNBOztBQUNBLFNBQU9ILFVBQVUsQ0FBQ0csVUFBWCxDQUFzQk8sTUFBdEIsQ0FBNkI7QUFBQ2xCLElBQUFBLFFBQVEsRUFBRVEsVUFBVSxDQUFDUjtBQUF0QixHQUE3QixDQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQge0ZpbGVSZWFkZXJ9IGZyb20gJ2dsb2JhbC93aW5kb3cnO1xyXG5pbXBvcnQgQ29uc29sZSBmcm9tICdnbG9iYWwvY29uc29sZSc7XHJcbmltcG9ydCB7XHJcbiAgcHJvY2Vzc0NzdkRhdGEsXHJcbiAgcHJvY2Vzc0dlb2pzb24sXHJcbiAgcHJvY2Vzc0tlcGxlcmdsSlNPTixcclxuICBwcm9jZXNzUm93T2JqZWN0XHJcbn0gZnJvbSAnLi9kYXRhLXByb2Nlc3Nvcic7XHJcbmltcG9ydCB7aXNQbGFpbk9iamVjdCwgZ2VuZXJhdGVIYXNoSWR9IGZyb20gJ3V0aWxzL3V0aWxzJztcclxuaW1wb3J0IHtEQVRBU0VUX0ZPUk1BVFN9IGZyb20gJ2NvbnN0YW50cy9kZWZhdWx0LXNldHRpbmdzJztcclxuXHJcbmNvbnN0IEZJTEVfSEFORExFUlMgPSB7XHJcbiAgY3N2OiBsb2FkQ3N2LFxyXG4gIGpzb246IGxvYWRKU09OXHJcbn07XHJcblxyXG4vKiogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vZmlsZS1oYW5kbGVyJykucmVhZEZpbGV9ICovXHJcbmV4cG9ydCBmdW5jdGlvbiByZWFkRmlsZSh7ZmlsZSwgZmlsZUNhY2hlID0gW119KSB7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIGNvbnN0IHtoYW5kbGVyLCBmb3JtYXR9ID0gZ2V0RmlsZUhhbmRsZXIoZmlsZSk7XHJcbiAgICBpZiAoIWhhbmRsZXIpIHtcclxuICAgICAgQ29uc29sZS53YXJuKFxyXG4gICAgICAgIGBDYW5vbnQgZGV0ZXJtaW5lIGZpbGUgaGFuZGxlciBmb3IgZmlsZSAke2ZpbGUubmFtZX0uIEl0IG11c3QgaGF2ZSBhIHZhbGlkIGZpbGUgZXh0ZW5zaW9uYFxyXG4gICAgICApO1xyXG4gICAgICByZXNvbHZlKGZpbGVDYWNoZSk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlcih7ZmlsZSwgZm9ybWF0fSkudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICBpZiAoIXJlc3VsdCB8fCAhcmVzdWx0LmRhdGEpIHtcclxuICAgICAgICAvLyByZXR1cm4gZmlsZUNhY2hlLCB0byBrZWVwIHByb2Nlc3Mgb3RoZXIgZmlsZXNcclxuICAgICAgICByZXNvbHZlKGZpbGVDYWNoZSk7XHJcbiAgICAgIH1cclxuICAgICAgcmVzb2x2ZShbXHJcbiAgICAgICAgLi4uZmlsZUNhY2hlLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgICAgaW5mbzoge1xyXG4gICAgICAgICAgICBsYWJlbDogZmlsZS5uYW1lLFxyXG4gICAgICAgICAgICBmb3JtYXQ6IHJlc3VsdC5mb3JtYXRcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIF0pO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbi8qKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi9maWxlLWhhbmRsZXInKS5nZXRGaWxlSGFuZGxlcn0gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEZpbGVIYW5kbGVyKGZpbGVCbG9iKSB7XHJcbiAgY29uc3QgdHlwZSA9IGdldEZpbGVUeXBlKGZpbGVCbG9iLm5hbWUpO1xyXG5cclxuICByZXR1cm4ge2hhbmRsZXI6IEZJTEVfSEFORExFUlNbdHlwZV0sIGZvcm1hdDogdHlwZX07XHJcbn1cclxuXHJcbi8qKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi9maWxlLWhhbmRsZXInKS5nZXRGaWxlVHlwZX0gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEZpbGVUeXBlKGZpbGVuYW1lKSB7XHJcbiAgaWYgKGZpbGVuYW1lLmVuZHNXaXRoKCdjc3YnKSkge1xyXG4gICAgcmV0dXJuICdjc3YnO1xyXG4gIH0gZWxzZSBpZiAoZmlsZW5hbWUuZW5kc1dpdGgoJ2pzb24nKSB8fCBmaWxlbmFtZS5lbmRzV2l0aCgnZ2VvanNvbicpKSB7XHJcbiAgICAvLyBSZWFkIEdlb0pzb24gZnJvbSBicm93c2VyXHJcbiAgICByZXR1cm4gJ2pzb24nO1xyXG4gIH1cclxuXHJcbiAgLy8gV2FpdCB0byBhZGQgb3RoZXIgZmlsZSB0eXBlIGhhbmRsZXJcclxuICByZXR1cm4gJ290aGVyJztcclxufVxyXG5cclxuZnVuY3Rpb24gcmVhZENTVkZpbGUoZmlsZUJsb2IpIHtcclxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgY29uc3QgZmlsZVJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICBmaWxlUmVhZGVyLm9ubG9hZCA9ICh7dGFyZ2V0OiB7cmVzdWx0fX0pID0+IHtcclxuICAgICAgcmVzb2x2ZShyZXN1bHQpO1xyXG4gICAgfTtcclxuXHJcbiAgICBmaWxlUmVhZGVyLnJlYWRBc1RleHQoZmlsZUJsb2IpO1xyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbG9hZENzdih7ZmlsZSwgZm9ybWF0LCBwcm9jZXNzb3IgPSBwcm9jZXNzQ3N2RGF0YX0pIHtcclxuICByZXR1cm4gcmVhZENTVkZpbGUoZmlsZSkudGhlbihyYXdEYXRhID0+IChyYXdEYXRhID8ge2RhdGE6IHByb2Nlc3NvcihyYXdEYXRhKSwgZm9ybWF0fSA6IG51bGwpKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRKU09OKHtmaWxlLCBwcm9jZXNzb3IgPSBwcm9jZXNzR2VvanNvbn0pIHtcclxuICByZXR1cm4gcmVhZEpTT05GaWxlKGZpbGUpLnRoZW4oY29udGVudCA9PiB7XHJcbiAgICBpZiAoaXNLZXBsZXJHbE1hcChjb250ZW50KSkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGZvcm1hdDogREFUQVNFVF9GT1JNQVRTLmtlcGxlcmdsLFxyXG4gICAgICAgIGRhdGE6IHByb2Nlc3NLZXBsZXJnbEpTT04oY29udGVudClcclxuICAgICAgfTtcclxuICAgIH0gZWxzZSBpZiAoaXNSb3dPYmplY3QoY29udGVudCkpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBmb3JtYXQ6IERBVEFTRVRfRk9STUFUUy5yb3csXHJcbiAgICAgICAgZGF0YTogcHJvY2Vzc1Jvd09iamVjdChjb250ZW50KVxyXG4gICAgICB9O1xyXG4gICAgfSBlbHNlIGlmIChpc0dlb0pzb24oY29udGVudCkpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBmb3JtYXQ6IERBVEFTRVRfRk9STUFUUy5nZW9qc29uLFxyXG4gICAgICAgIGRhdGE6IHByb2Nlc3NHZW9qc29uKGNvbnRlbnQpXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgICAvLyB1bnN1cHBvcnRlZCBqc29uIGZvcm1hdFxyXG4gICAgQ29uc29sZS53YXJuKGB1bnN1cHBvcnRlZCBKc29uIGZvcm1hdCAke2ZpbGUubmFtZX1gKTtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVhZEpTT05GaWxlKGZpbGVCbG9iKSB7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIGNvbnN0IGZpbGVSZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgZmlsZVJlYWRlci5vbmxvYWQgPSAoe3RhcmdldDoge3Jlc3VsdH19KSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QganNvbiA9IEpTT04ucGFyc2UocmVzdWx0KTtcclxuICAgICAgICByZXNvbHZlKGpzb24pO1xyXG4gICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICByZWplY3QobnVsbCk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgZmlsZVJlYWRlci5yZWFkQXNUZXh0KGZpbGVCbG9iLCAnVVRGLTgnKTtcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzR2VvSnNvbihqc29uKSB7XHJcbiAgLy8ganNvbiBjYW4gYmUgZmVhdHVyZSBjb2xsZWN0aW9uXHJcbiAgLy8gb3Igc2ltZ2xlIGZlYXR1cmVcclxuICByZXR1cm4gaXNQbGFpbk9iamVjdChqc29uKSAmJiAoaXNGZWF0dXJlKGpzb24pIHx8IGlzRmVhdHVyZUNvbGxlY3Rpb24oanNvbikpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNGZWF0dXJlKGpzb24pIHtcclxuICByZXR1cm4ganNvbi50eXBlID09PSAnRmVhdHVyZScgJiYganNvbi5nZW9tZXRyeTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzRmVhdHVyZUNvbGxlY3Rpb24oanNvbikge1xyXG4gIHJldHVybiBqc29uLnR5cGUgPT09ICdGZWF0dXJlQ29sbGVjdGlvbicgJiYganNvbi5mZWF0dXJlcztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzUm93T2JqZWN0KGpzb24pIHtcclxuICByZXR1cm4gQXJyYXkuaXNBcnJheShqc29uKSAmJiBpc1BsYWluT2JqZWN0KGpzb25bMF0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNLZXBsZXJHbE1hcChqc29uKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIGlzUGxhaW5PYmplY3QoanNvbikgJiZcclxuICAgIGpzb24uZGF0YXNldHMgJiZcclxuICAgIGpzb24uY29uZmlnICYmXHJcbiAgICBqc29uLmluZm8gJiZcclxuICAgIGpzb24uaW5mby5hcHAgPT09ICdrZXBsZXIuZ2wnXHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRldGVybWluZUpzb25Qcm9jZXNzKHtkYXRhc2V0LCBmb3JtYXR9LCBkZWZhdWx0UHJvY2Vzc29yKSB7XHJcbiAgaWYgKGlzS2VwbGVyR2xNYXAoZGF0YXNldCkpIHtcclxuICAgIHJldHVybiBwcm9jZXNzS2VwbGVyZ2xKU09OO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGRlZmF1bHRQcm9jZXNzb3I7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmaWxlc1RvRGF0YVBheWxvYWQoZmlsZUNhY2hlKSB7XHJcbiAgLy8gc2VwZXJhdGUgb3V0IGZpbGVzIHdoaWNoIGNvdWxkIGJlIGEgc2luZ2xlIGRhdGFzZXRzLiBvciBhIGtlcGxlcmdsIG1hcCBqc29uXHJcbiAgY29uc3QgY29sbGVjdGlvbiA9IGZpbGVDYWNoZS5yZWR1Y2UoXHJcbiAgICAoYWNjdSwgZmlsZSkgPT4ge1xyXG4gICAgICBjb25zdCB7ZGF0YSwgaW5mbyA9IHt9fSA9IGZpbGU7XHJcbiAgICAgIGNvbnN0IHtmb3JtYXR9ID0gaW5mbztcclxuICAgICAgaWYgKGZvcm1hdCA9PT0gREFUQVNFVF9GT1JNQVRTLmtlcGxlcmdsKSB7XHJcbiAgICAgICAgLy8gaWYgZmlsZSBjb250YWlucyBhIHNpbmdsZSBrZXBsZXIgbWFwIGRhdGFzZXQgJiBjb25maWdcclxuICAgICAgICBhY2N1LmtlcGxlck1hcHMucHVzaCh7XHJcbiAgICAgICAgICAuLi5kYXRhLFxyXG4gICAgICAgICAgb3B0aW9uczoge1xyXG4gICAgICAgICAgICBjZW50ZXJNYXA6ICEoZGF0YS5jb25maWcgJiYgZGF0YS5jb25maWcubWFwU3RhdGUpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSBpZiAoREFUQVNFVF9GT1JNQVRTW2Zvcm1hdF0pIHtcclxuICAgICAgICAvLyBpZiBmaWxlIGNvbnRhaW5zIG9ubHkgZGF0YVxyXG4gICAgICAgIGNvbnN0IG5ld0RhdGFzZXQgPSB7XHJcbiAgICAgICAgICBkYXRhLFxyXG4gICAgICAgICAgaW5mbzoge1xyXG4gICAgICAgICAgICBpZDogaW5mby5pZCB8fCBnZW5lcmF0ZUhhc2hJZCg0KSxcclxuICAgICAgICAgICAgLi4uaW5mb1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgYWNjdS5kYXRhc2V0cy5wdXNoKG5ld0RhdGFzZXQpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBhY2N1O1xyXG4gICAgfSxcclxuICAgIHtkYXRhc2V0czogW10sIGtlcGxlck1hcHM6IFtdfVxyXG4gICk7XHJcblxyXG4gIC8vIGFkZCBrZXBsZXIgbWFwIGZpcnN0IHdpdGggY29uZmlnXHJcbiAgLy8gYWRkIGRhdGFzZXRzIGxhdGVyIGluIG9uZSBhZGQgZGF0YSBjYWxsXHJcbiAgcmV0dXJuIGNvbGxlY3Rpb24ua2VwbGVyTWFwcy5jb25jYXQoe2RhdGFzZXRzOiBjb2xsZWN0aW9uLmRhdGFzZXRzfSk7XHJcbn1cclxuIl19