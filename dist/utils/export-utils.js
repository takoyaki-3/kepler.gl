"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isMSEdge = isMSEdge;
exports.getScaleFromImageSize = getScaleFromImageSize;
exports.calculateExportImageSize = calculateExportImageSize;
exports.convertToPng = convertToPng;
exports.dataURItoBlob = dataURItoBlob;
exports.downloadFile = downloadFile;
exports.exportImage = exportImage;
exports.exportToJsonString = exportToJsonString;
exports.getMapJSON = getMapJSON;
exports.exportJson = exportJson;
exports.exportHtml = exportHtml;
exports.exportData = exportData;
exports.exportMap = exportMap;
exports["default"] = exports.DEFAULT_EXPORT_JSON_SETTINGS = exports.DEFAULT_DATA_NAME = exports.DEFAULT_JSON_NAME = exports.DEFAULT_HTML_NAME = exports.DEFAULT_IMAGE_NAME = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _domToImage = _interopRequireDefault(require("./dom-to-image"));

var _window = require("global/window");

var _defaultSettings = require("../constants/default-settings");

var _exportMapHtml = require("../templates/export-map-html");

var _dataProcessor = require("../processors/data-processor");

var _lodash = _interopRequireDefault(require("lodash.get"));

var _utils = require("./utils");

var _schemas = _interopRequireDefault(require("../schemas"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * Default file names
 */
var DEFAULT_IMAGE_NAME = 'kepler-gl.png';
exports.DEFAULT_IMAGE_NAME = DEFAULT_IMAGE_NAME;
var DEFAULT_HTML_NAME = 'kepler.gl.html';
exports.DEFAULT_HTML_NAME = DEFAULT_HTML_NAME;
var DEFAULT_JSON_NAME = 'keplergl.json';
exports.DEFAULT_JSON_NAME = DEFAULT_JSON_NAME;
var DEFAULT_DATA_NAME = 'kepler-gl';
/**
 * Default json export settings
 * @type {{hasData: boolean}}
 */

exports.DEFAULT_DATA_NAME = DEFAULT_DATA_NAME;
var DEFAULT_EXPORT_JSON_SETTINGS = {
  hasData: true
};
exports.DEFAULT_EXPORT_JSON_SETTINGS = DEFAULT_EXPORT_JSON_SETTINGS;

var defaultResolution = _defaultSettings.EXPORT_IMG_RESOLUTION_OPTIONS.find(function (op) {
  return op.id === _defaultSettings.RESOLUTIONS.ONE_X;
});

var defaultRatio = _defaultSettings.EXPORT_IMG_RATIO_OPTIONS.find(function (op) {
  return op.id === _defaultSettings.EXPORT_IMG_RATIOS.FOUR_BY_THREE;
});

function isMSEdge(window) {
  return Boolean(window.navigator && window.navigator.msSaveOrOpenBlob);
}

function getScaleFromImageSize(imageW, imageH, mapW, mapH) {
  if ([imageW, imageH, mapW, mapH].some(function (d) {
    return d <= 0;
  })) {
    return 1;
  }

  var base = imageW / imageH > 1 ? imageW : imageH;
  var mapBase = imageW / imageH > 1 ? mapW : mapH;
  var scale = base / mapBase;
  return scale;
}

function calculateExportImageSize(_ref) {
  var mapW = _ref.mapW,
      mapH = _ref.mapH,
      ratio = _ref.ratio,
      resolution = _ref.resolution;

  if (mapW <= 0 || mapH <= 0) {
    return null;
  }

  var ratioItem = _defaultSettings.EXPORT_IMG_RATIO_OPTIONS.find(function (op) {
    return op.id === ratio;
  }) || defaultRatio;
  var resolutionItem = _defaultSettings.EXPORT_IMG_RESOLUTION_OPTIONS.find(function (op) {
    return op.id === resolution;
  }) || defaultResolution;

  var _resolutionItem$getSi = resolutionItem.getSize(mapW, mapH),
      scaledWidth = _resolutionItem$getSi.width,
      scaledHeight = _resolutionItem$getSi.height;

  var _ratioItem$getSize = ratioItem.getSize(scaledWidth, scaledHeight),
      imageW = _ratioItem$getSize.width,
      imageH = _ratioItem$getSize.height;

  var _ref2 = ratioItem.id === _defaultSettings.EXPORT_IMG_RATIOS.CUSTOM ? {} : resolutionItem,
      scale = _ref2.scale;

  return {
    scale: scale,
    imageW: imageW,
    imageH: imageH
  };
}

function convertToPng(sourceElem, options) {
  return _domToImage["default"].toPng(sourceElem, options);
}

function dataURItoBlob(dataURI) {
  var binary = (0, _window.atob)(dataURI.split(',')[1]); // separate out the mime component

  var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0]; // write the bytes of the string to an ArrayBuffer

  var ab = new _window.ArrayBuffer(binary.length); // create a view into the buffer

  var ia = new _window.Uint8Array(ab);

  for (var i = 0; i < binary.length; i++) {
    ia[i] = binary.charCodeAt(i);
  }

  return new _window.Blob([ab], {
    type: mimeString
  });
}

function downloadFile(fileBlob, fileName) {
  if (isMSEdge(window)) {
    window.navigator.msSaveOrOpenBlob(fileBlob, fileName);
  } else {
    var url = _window.URL.createObjectURL(fileBlob);

    var link = _window.document.createElement('a');

    link.setAttribute('href', url);
    link.setAttribute('download', fileName);

    _window.document.body.appendChild(link);

    link.click();

    _window.document.body.removeChild(link);

    _window.URL.revokeObjectURL(url);
  }
}

function exportImage(state) {
  var imageDataUri = state.uiState.exportImage.imageDataUri;

  if (imageDataUri) {
    var file = dataURItoBlob(imageDataUri);
    downloadFile(file, DEFAULT_IMAGE_NAME);
  }
}

function exportToJsonString(data) {
  try {
    return JSON.stringify(data);
  } catch (e) {
    return e.description;
  }
}

function getMapJSON(state) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_EXPORT_JSON_SETTINGS;
  var hasData = options.hasData;

  if (!hasData) {
    return _schemas["default"].getConfigToSave(state);
  }

  var mapToSave = _schemas["default"].save(state); // add file name if title is not provided


  var title = (0, _lodash["default"])(mapToSave, ['info', 'title']);

  if (!title || !title.length) {
    mapToSave = (0, _utils.set)(['info', 'title'], "keplergl_".concat((0, _utils.generateHashId)(6)), mapToSave);
  }

  return mapToSave;
}

function exportJson(state) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var map = getMapJSON(state, options);
  var fileBlob = new _window.Blob([exportToJsonString(map)], {
    type: 'application/json'
  });
  downloadFile(fileBlob, DEFAULT_JSON_NAME);
}

function exportHtml(state, options) {
  var userMapboxToken = options.userMapboxToken,
      exportMapboxAccessToken = options.exportMapboxAccessToken,
      mode = options.mode;

  var data = _objectSpread(_objectSpread({}, getMapJSON(state)), {}, {
    mapboxApiAccessToken: (userMapboxToken || '') !== '' ? userMapboxToken : exportMapboxAccessToken,
    mode: mode
  });

  var fileBlob = new _window.Blob([(0, _exportMapHtml.exportMapToHTML)(data)], {
    type: 'text/html'
  });
  downloadFile(fileBlob, DEFAULT_HTML_NAME);
}

function exportData(state, option) {
  var visState = state.visState;
  var datasets = visState.datasets;
  var selectedDataset = option.selectedDataset,
      dataType = option.dataType,
      filtered = option.filtered; // get the selected data

  var filename = DEFAULT_DATA_NAME;
  var selectedDatasets = datasets[selectedDataset] ? [datasets[selectedDataset]] : Object.values(datasets);

  if (!selectedDatasets.length) {
    // error: selected dataset not found.
    return;
  }

  selectedDatasets.forEach(function (selectedData) {
    var allData = selectedData.allData,
        fields = selectedData.fields,
        label = selectedData.label,
        _selectedData$filtere = selectedData.filteredIdxCPU,
        filteredIdxCPU = _selectedData$filtere === void 0 ? [] : _selectedData$filtere;
    var toExport = filtered ? filteredIdxCPU.map(function (i) {
      return allData[i];
    }) : allData; // start to export data according to selected data type

    switch (dataType) {
      case _defaultSettings.EXPORT_DATA_TYPE.CSV:
        {
          var csv = (0, _dataProcessor.formatCsv)(toExport, fields);
          var fileBlob = new _window.Blob([csv], {
            type: 'text/csv'
          });
          downloadFile(fileBlob, "".concat(filename, "_").concat(label, ".csv"));
          break;
        }
      // TODO: support more file types.

      default:
        break;
    }
  });
}

function exportMap(state, option) {
  var imageDataUri = state.uiState.exportImage.imageDataUri;
  var thumbnail = imageDataUri ? dataURItoBlob(imageDataUri) : null;
  var mapToSave = getMapJSON(state, option);
  return {
    map: mapToSave,
    thumbnail: thumbnail
  };
}

var exporters = {
  exportImage: exportImage,
  exportJson: exportJson,
  exportHtml: exportHtml,
  exportData: exportData
};
var _default = exporters;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy9leHBvcnQtdXRpbHMuanMiXSwibmFtZXMiOlsiREVGQVVMVF9JTUFHRV9OQU1FIiwiREVGQVVMVF9IVE1MX05BTUUiLCJERUZBVUxUX0pTT05fTkFNRSIsIkRFRkFVTFRfREFUQV9OQU1FIiwiREVGQVVMVF9FWFBPUlRfSlNPTl9TRVRUSU5HUyIsImhhc0RhdGEiLCJkZWZhdWx0UmVzb2x1dGlvbiIsIkVYUE9SVF9JTUdfUkVTT0xVVElPTl9PUFRJT05TIiwiZmluZCIsIm9wIiwiaWQiLCJSRVNPTFVUSU9OUyIsIk9ORV9YIiwiZGVmYXVsdFJhdGlvIiwiRVhQT1JUX0lNR19SQVRJT19PUFRJT05TIiwiRVhQT1JUX0lNR19SQVRJT1MiLCJGT1VSX0JZX1RIUkVFIiwiaXNNU0VkZ2UiLCJ3aW5kb3ciLCJCb29sZWFuIiwibmF2aWdhdG9yIiwibXNTYXZlT3JPcGVuQmxvYiIsImdldFNjYWxlRnJvbUltYWdlU2l6ZSIsImltYWdlVyIsImltYWdlSCIsIm1hcFciLCJtYXBIIiwic29tZSIsImQiLCJiYXNlIiwibWFwQmFzZSIsInNjYWxlIiwiY2FsY3VsYXRlRXhwb3J0SW1hZ2VTaXplIiwicmF0aW8iLCJyZXNvbHV0aW9uIiwicmF0aW9JdGVtIiwicmVzb2x1dGlvbkl0ZW0iLCJnZXRTaXplIiwic2NhbGVkV2lkdGgiLCJ3aWR0aCIsInNjYWxlZEhlaWdodCIsImhlaWdodCIsIkNVU1RPTSIsImNvbnZlcnRUb1BuZyIsInNvdXJjZUVsZW0iLCJvcHRpb25zIiwiZG9tdG9pbWFnZSIsInRvUG5nIiwiZGF0YVVSSXRvQmxvYiIsImRhdGFVUkkiLCJiaW5hcnkiLCJzcGxpdCIsIm1pbWVTdHJpbmciLCJhYiIsIkFycmF5QnVmZmVyIiwibGVuZ3RoIiwiaWEiLCJVaW50OEFycmF5IiwiaSIsImNoYXJDb2RlQXQiLCJCbG9iIiwidHlwZSIsImRvd25sb2FkRmlsZSIsImZpbGVCbG9iIiwiZmlsZU5hbWUiLCJ1cmwiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJsaW5rIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiYm9keSIsImFwcGVuZENoaWxkIiwiY2xpY2siLCJyZW1vdmVDaGlsZCIsInJldm9rZU9iamVjdFVSTCIsImV4cG9ydEltYWdlIiwic3RhdGUiLCJpbWFnZURhdGFVcmkiLCJ1aVN0YXRlIiwiZmlsZSIsImV4cG9ydFRvSnNvblN0cmluZyIsImRhdGEiLCJKU09OIiwic3RyaW5naWZ5IiwiZSIsImRlc2NyaXB0aW9uIiwiZ2V0TWFwSlNPTiIsIktlcGxlckdsU2NoZW1hIiwiZ2V0Q29uZmlnVG9TYXZlIiwibWFwVG9TYXZlIiwic2F2ZSIsInRpdGxlIiwiZXhwb3J0SnNvbiIsIm1hcCIsImV4cG9ydEh0bWwiLCJ1c2VyTWFwYm94VG9rZW4iLCJleHBvcnRNYXBib3hBY2Nlc3NUb2tlbiIsIm1vZGUiLCJtYXBib3hBcGlBY2Nlc3NUb2tlbiIsImV4cG9ydERhdGEiLCJvcHRpb24iLCJ2aXNTdGF0ZSIsImRhdGFzZXRzIiwic2VsZWN0ZWREYXRhc2V0IiwiZGF0YVR5cGUiLCJmaWx0ZXJlZCIsImZpbGVuYW1lIiwic2VsZWN0ZWREYXRhc2V0cyIsIk9iamVjdCIsInZhbHVlcyIsImZvckVhY2giLCJzZWxlY3RlZERhdGEiLCJhbGxEYXRhIiwiZmllbGRzIiwibGFiZWwiLCJmaWx0ZXJlZElkeENQVSIsInRvRXhwb3J0IiwiRVhQT1JUX0RBVEFfVFlQRSIsIkNTViIsImNzdiIsImV4cG9ydE1hcCIsInRodW1ibmFpbCIsImV4cG9ydGVycyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcUJBOztBQUNBOztBQUNBOztBQU9BOztBQUNBOztBQUNBOztBQUNBOztBQUVBOzs7Ozs7QUFFQTs7O0FBR08sSUFBTUEsa0JBQWtCLEdBQUcsZUFBM0I7O0FBQ0EsSUFBTUMsaUJBQWlCLEdBQUcsZ0JBQTFCOztBQUNBLElBQU1DLGlCQUFpQixHQUFHLGVBQTFCOztBQUNBLElBQU1D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RUxnQyxJQUFBQSxTQUFTLEVBQVRBO0FBRkssR0FBUDtBQUlEOztBQUVELElBQU1DLFNBQVMsR0FBRztBQUNoQi9DLEVBQUFBLFdBQVcsRUFBWEEsV0FEZ0I7QUFFaEJpQixFQUFBQSxVQUFVLEVBQVZBLFVBRmdCO0FBR2hCRSxFQUFBQSxVQUFVLEVBQVZBLFVBSGdCO0FBSWhCSyxFQUFBQSxVQUFVLEVBQVZBO0FBSmdCLENBQWxCO2VBT2V1QixTIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuLy8gQHRzLW5vY2hlY2tcclxuaW1wb3J0IGRvbXRvaW1hZ2UgZnJvbSAndXRpbHMvZG9tLXRvLWltYWdlJztcclxuaW1wb3J0IHtCbG9iLCBVUkwsIGF0b2IsIFVpbnQ4QXJyYXksIEFycmF5QnVmZmVyLCBkb2N1bWVudH0gZnJvbSAnZ2xvYmFsL3dpbmRvdyc7XHJcbmltcG9ydCB7XHJcbiAgRVhQT1JUX0lNR19SRVNPTFVUSU9OX09QVElPTlMsXHJcbiAgRVhQT1JUX0lNR19SQVRJT19PUFRJT05TLFxyXG4gIFJFU09MVVRJT05TLFxyXG4gIEVYUE9SVF9JTUdfUkFUSU9TLFxyXG4gIEVYUE9SVF9EQVRBX1RZUEVcclxufSBmcm9tICdjb25zdGFudHMvZGVmYXVsdC1zZXR0aW5ncyc7XHJcbmltcG9ydCB7ZXhwb3J0TWFwVG9IVE1MfSBmcm9tICd0ZW1wbGF0ZXMvZXhwb3J0LW1hcC1odG1sJztcclxuaW1wb3J0IHtmb3JtYXRDc3Z9IGZyb20gJ3Byb2Nlc3NvcnMvZGF0YS1wcm9jZXNzb3InO1xyXG5pbXBvcnQgZ2V0IGZyb20gJ2xvZGFzaC5nZXQnO1xyXG5pbXBvcnQge3NldCwgZ2VuZXJhdGVIYXNoSWR9IGZyb20gJ3V0aWxzL3V0aWxzJztcclxuXHJcbmltcG9ydCBLZXBsZXJHbFNjaGVtYSBmcm9tICdzY2hlbWFzJztcclxuXHJcbi8qKlxyXG4gKiBEZWZhdWx0IGZpbGUgbmFtZXNcclxuICovXHJcbmV4cG9ydCBjb25zdCBERUZBVUxUX0lNQUdFX05BTUUgPSAna2VwbGVyLWdsLnBuZyc7XHJcbmV4cG9ydCBjb25zdCBERUZBVUxUX0hUTUxfTkFNRSA9ICdrZXBsZXIuZ2wuaHRtbCc7XHJcbmV4cG9ydCBjb25zdCBERUZBVUxUX0pTT05fTkFNRSA9ICdrZXBsZXJnbC5qc29uJztcclxuZXhwb3J0IGNvbnN0IERFRkFVTFRfREFUQV9OQU1FID0gJ2tlcGxlci1nbCc7XHJcblxyXG4vKipcclxuICogRGVmYXVsdCBqc29uIGV4cG9ydCBzZXR0aW5nc1xyXG4gKiBAdHlwZSB7e2hhc0RhdGE6IGJvb2xlYW59fVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IERFRkFVTFRfRVhQT1JUX0pTT05fU0VUVElOR1MgPSB7XHJcbiAgaGFzRGF0YTogdHJ1ZVxyXG59O1xyXG5cclxuY29uc3QgZGVmYXVsdFJlc29sdXRpb24gPSBFWFBPUlRfSU1HX1JFU09MVVRJT05fT1BUSU9OUy5maW5kKG9wID0+IG9wLmlkID09PSBSRVNPTFVUSU9OUy5PTkVfWCk7XHJcblxyXG5jb25zdCBkZWZhdWx0UmF0aW8gPSBFWFBPUlRfSU1HX1JBVElPX09QVElPTlMuZmluZChvcCA9PiBvcC5pZCA9PT0gRVhQT1JUX0lNR19SQVRJT1MuRk9VUl9CWV9USFJFRSk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNNU0VkZ2Uod2luZG93KSB7XHJcbiAgcmV0dXJuIEJvb2xlYW4od2luZG93Lm5hdmlnYXRvciAmJiB3aW5kb3cubmF2aWdhdG9yLm1zU2F2ZU9yT3BlbkJsb2IpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NhbGVGcm9tSW1hZ2VTaXplKGltYWdlVywgaW1hZ2VILCBtYXBXLCBtYXBIKSB7XHJcbiAgaWYgKFtpbWFnZVcsIGltYWdlSCwgbWFwVywgbWFwSF0uc29tZShkID0+IGQgPD0gMCkpIHtcclxuICAgIHJldHVybiAxO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgYmFzZSA9IGltYWdlVyAvIGltYWdlSCA+IDEgPyBpbWFnZVcgOiBpbWFnZUg7XHJcbiAgY29uc3QgbWFwQmFzZSA9IGltYWdlVyAvIGltYWdlSCA+IDEgPyBtYXBXIDogbWFwSDtcclxuICBjb25zdCBzY2FsZSA9IGJhc2UgLyBtYXBCYXNlO1xyXG5cclxuICByZXR1cm4gc2NhbGU7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjYWxjdWxhdGVFeHBvcnRJbWFnZVNpemUoe21hcFcsIG1hcEgsIHJhdGlvLCByZXNvbHV0aW9ufSkge1xyXG4gIGlmIChtYXBXIDw9IDAgfHwgbWFwSCA8PSAwKSB7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIGNvbnN0IHJhdGlvSXRlbSA9IEVYUE9SVF9JTUdfUkFUSU9fT1BUSU9OUy5maW5kKG9wID0+IG9wLmlkID09PSByYXRpbykgfHwgZGVmYXVsdFJhdGlvO1xyXG5cclxuICBjb25zdCByZXNvbHV0aW9uSXRlbSA9XHJcbiAgICBFWFBPUlRfSU1HX1JFU09MVVRJT05fT1BUSU9OUy5maW5kKG9wID0+IG9wLmlkID09PSByZXNvbHV0aW9uKSB8fCBkZWZhdWx0UmVzb2x1dGlvbjtcclxuXHJcbiAgY29uc3Qge3dpZHRoOiBzY2FsZWRXaWR0aCwgaGVpZ2h0OiBzY2FsZWRIZWlnaHR9ID0gcmVzb2x1dGlvbkl0ZW0uZ2V0U2l6ZShtYXBXLCBtYXBIKTtcclxuXHJcbiAgY29uc3Qge3dpZHRoOiBpbWFnZVcsIGhlaWdodDogaW1hZ2VIfSA9IHJhdGlvSXRlbS5nZXRTaXplKHNjYWxlZFdpZHRoLCBzY2FsZWRIZWlnaHQpO1xyXG5cclxuICBjb25zdCB7c2NhbGV9ID0gcmF0aW9JdGVtLmlkID09PSBFWFBPUlRfSU1HX1JBVElPUy5DVVNUT00gPyB7fSA6IHJlc29sdXRpb25JdGVtO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgc2NhbGUsXHJcbiAgICBpbWFnZVcsXHJcbiAgICBpbWFnZUhcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY29udmVydFRvUG5nKHNvdXJjZUVsZW0sIG9wdGlvbnMpIHtcclxuICByZXR1cm4gZG9tdG9pbWFnZS50b1BuZyhzb3VyY2VFbGVtLCBvcHRpb25zKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFVUkl0b0Jsb2IoZGF0YVVSSSkge1xyXG4gIGNvbnN0IGJpbmFyeSA9IGF0b2IoZGF0YVVSSS5zcGxpdCgnLCcpWzFdKTtcclxuXHJcbiAgLy8gc2VwYXJhdGUgb3V0IHRoZSBtaW1lIGNvbXBvbmVudFxyXG4gIGNvbnN0IG1pbWVTdHJpbmcgPSBkYXRhVVJJXHJcbiAgICAuc3BsaXQoJywnKVswXVxyXG4gICAgLnNwbGl0KCc6JylbMV1cclxuICAgIC5zcGxpdCgnOycpWzBdO1xyXG5cclxuICAvLyB3cml0ZSB0aGUgYnl0ZXMgb2YgdGhlIHN0cmluZyB0byBhbiBBcnJheUJ1ZmZlclxyXG4gIGNvbnN0IGFiID0gbmV3IEFycmF5QnVmZmVyKGJpbmFyeS5sZW5ndGgpO1xyXG5cclxuICAvLyBjcmVhdGUgYSB2aWV3IGludG8gdGhlIGJ1ZmZlclxyXG4gIGNvbnN0IGlhID0gbmV3IFVpbnQ4QXJyYXkoYWIpO1xyXG5cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGJpbmFyeS5sZW5ndGg7IGkrKykge1xyXG4gICAgaWFbaV0gPSBiaW5hcnkuY2hhckNvZGVBdChpKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBuZXcgQmxvYihbYWJdLCB7dHlwZTogbWltZVN0cmluZ30pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZG93bmxvYWRGaWxlKGZpbGVCbG9iLCBmaWxlTmFtZSkge1xyXG4gIGlmIChpc01TRWRnZSh3aW5kb3cpKSB7XHJcbiAgICB3aW5kb3cubmF2aWdhdG9yLm1zU2F2ZU9yT3BlbkJsb2IoZmlsZUJsb2IsIGZpbGVOYW1lKTtcclxuICB9IGVsc2Uge1xyXG4gICAgY29uc3QgdXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlQmxvYik7XHJcblxyXG4gICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICAgIGxpbmsuc2V0QXR0cmlidXRlKCdocmVmJywgdXJsKTtcclxuICAgIGxpbmsuc2V0QXR0cmlidXRlKCdkb3dubG9hZCcsIGZpbGVOYW1lKTtcclxuXHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGxpbmspO1xyXG4gICAgbGluay5jbGljaygpO1xyXG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChsaW5rKTtcclxuICAgIFVSTC5yZXZva2VPYmplY3RVUkwodXJsKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBleHBvcnRJbWFnZShzdGF0ZSkge1xyXG4gIGNvbnN0IHtpbWFnZURhdGFVcml9ID0gc3RhdGUudWlTdGF0ZS5leHBvcnRJbWFnZTtcclxuICBpZiAoaW1hZ2VEYXRhVXJpKSB7XHJcbiAgICBjb25zdCBmaWxlID0gZGF0YVVSSXRvQmxvYihpbWFnZURhdGFVcmkpO1xyXG4gICAgZG93bmxvYWRGaWxlKGZpbGUsIERFRkFVTFRfSU1BR0VfTkFNRSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZXhwb3J0VG9Kc29uU3RyaW5nKGRhdGEpIHtcclxuICB0cnkge1xyXG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGRhdGEpO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIHJldHVybiBlLmRlc2NyaXB0aW9uO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldE1hcEpTT04oc3RhdGUsIG9wdGlvbnMgPSBERUZBVUxUX0VYUE9SVF9KU09OX1NFVFRJTkdTKSB7XHJcbiAgY29uc3Qge2hhc0RhdGF9ID0gb3B0aW9ucztcclxuXHJcbiAgaWYgKCFoYXNEYXRhKSB7XHJcbiAgICByZXR1cm4gS2VwbGVyR2xTY2hlbWEuZ2V0Q29uZmlnVG9TYXZlKHN0YXRlKTtcclxuICB9XHJcblxyXG4gIGxldCBtYXBUb1NhdmUgPSBLZXBsZXJHbFNjaGVtYS5zYXZlKHN0YXRlKTtcclxuICAvLyBhZGQgZmlsZSBuYW1lIGlmIHRpdGxlIGlzIG5vdCBwcm92aWRlZFxyXG4gIGNvbnN0IHRpdGxlID0gZ2V0KG1hcFRvU2F2ZSwgWydpbmZvJywgJ3RpdGxlJ10pO1xyXG4gIGlmICghdGl0bGUgfHwgIXRpdGxlLmxlbmd0aCkge1xyXG4gICAgbWFwVG9TYXZlID0gc2V0KFsnaW5mbycsICd0aXRsZSddLCBga2VwbGVyZ2xfJHtnZW5lcmF0ZUhhc2hJZCg2KX1gLCBtYXBUb1NhdmUpO1xyXG4gIH1cclxuICByZXR1cm4gbWFwVG9TYXZlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZXhwb3J0SnNvbihzdGF0ZSwgb3B0aW9ucyA9IHt9KSB7XHJcbiAgY29uc3QgbWFwID0gZ2V0TWFwSlNPTihzdGF0ZSwgb3B0aW9ucyk7XHJcblxyXG4gIGNvbnN0IGZpbGVCbG9iID0gbmV3IEJsb2IoW2V4cG9ydFRvSnNvblN0cmluZyhtYXApXSwge3R5cGU6ICdhcHBsaWNhdGlvbi9qc29uJ30pO1xyXG4gIGRvd25sb2FkRmlsZShmaWxlQmxvYiwgREVGQVVMVF9KU09OX05BTUUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZXhwb3J0SHRtbChzdGF0ZSwgb3B0aW9ucykge1xyXG4gIGNvbnN0IHt1c2VyTWFwYm94VG9rZW4sIGV4cG9ydE1hcGJveEFjY2Vzc1Rva2VuLCBtb2RlfSA9IG9wdGlvbnM7XHJcblxyXG4gIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAuLi5nZXRNYXBKU09OKHN0YXRlKSxcclxuICAgIG1hcGJveEFwaUFjY2Vzc1Rva2VuOlxyXG4gICAgICAodXNlck1hcGJveFRva2VuIHx8ICcnKSAhPT0gJycgPyB1c2VyTWFwYm94VG9rZW4gOiBleHBvcnRNYXBib3hBY2Nlc3NUb2tlbixcclxuICAgIG1vZGVcclxuICB9O1xyXG5cclxuICBjb25zdCBmaWxlQmxvYiA9IG5ldyBCbG9iKFtleHBvcnRNYXBUb0hUTUwoZGF0YSldLCB7dHlwZTogJ3RleHQvaHRtbCd9KTtcclxuICBkb3dubG9hZEZpbGUoZmlsZUJsb2IsIERFRkFVTFRfSFRNTF9OQU1FKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGV4cG9ydERhdGEoc3RhdGUsIG9wdGlvbikge1xyXG4gIGNvbnN0IHt2aXNTdGF0ZX0gPSBzdGF0ZTtcclxuICBjb25zdCB7ZGF0YXNldHN9ID0gdmlzU3RhdGU7XHJcbiAgY29uc3Qge3NlbGVjdGVkRGF0YXNldCwgZGF0YVR5cGUsIGZpbHRlcmVkfSA9IG9wdGlvbjtcclxuICAvLyBnZXQgdGhlIHNlbGVjdGVkIGRhdGFcclxuICBjb25zdCBmaWxlbmFtZSA9IERFRkFVTFRfREFUQV9OQU1FO1xyXG4gIGNvbnN0IHNlbGVjdGVkRGF0YXNldHMgPSBkYXRhc2V0c1tzZWxlY3RlZERhdGFzZXRdXHJcbiAgICA/IFtkYXRhc2V0c1tzZWxlY3RlZERhdGFzZXRdXVxyXG4gICAgOiBPYmplY3QudmFsdWVzKGRhdGFzZXRzKTtcclxuICBpZiAoIXNlbGVjdGVkRGF0YXNldHMubGVuZ3RoKSB7XHJcbiAgICAvLyBlcnJvcjogc2VsZWN0ZWQgZGF0YXNldCBub3QgZm91bmQuXHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBzZWxlY3RlZERhdGFzZXRzLmZvckVhY2goc2VsZWN0ZWREYXRhID0+IHtcclxuICAgIGNvbnN0IHthbGxEYXRhLCBmaWVsZHMsIGxhYmVsLCBmaWx0ZXJlZElkeENQVSA9IFtdfSA9IHNlbGVjdGVkRGF0YTtcclxuICAgIGNvbnN0IHRvRXhwb3J0ID0gZmlsdGVyZWQgPyBmaWx0ZXJlZElkeENQVS5tYXAoaSA9PiBhbGxEYXRhW2ldKSA6IGFsbERhdGE7XHJcbiAgICAvLyBzdGFydCB0byBleHBvcnQgZGF0YSBhY2NvcmRpbmcgdG8gc2VsZWN0ZWQgZGF0YSB0eXBlXHJcbiAgICBzd2l0Y2ggKGRhdGFUeXBlKSB7XHJcbiAgICAgIGNhc2UgRVhQT1JUX0RBVEFfVFlQRS5DU1Y6IHtcclxuICAgICAgICBjb25zdCBjc3YgPSBmb3JtYXRDc3YodG9FeHBvcnQsIGZpZWxkcyk7XHJcblxyXG4gICAgICAgIGNvbnN0IGZpbGVCbG9iID0gbmV3IEJsb2IoW2Nzdl0sIHt0eXBlOiAndGV4dC9jc3YnfSk7XHJcbiAgICAgICAgZG93bmxvYWRGaWxlKGZpbGVCbG9iLCBgJHtmaWxlbmFtZX1fJHtsYWJlbH0uY3N2YCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgLy8gVE9ETzogc3VwcG9ydCBtb3JlIGZpbGUgdHlwZXMuXHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBleHBvcnRNYXAoc3RhdGUsIG9wdGlvbikge1xyXG4gIGNvbnN0IHtpbWFnZURhdGFVcml9ID0gc3RhdGUudWlTdGF0ZS5leHBvcnRJbWFnZTtcclxuICBjb25zdCB0aHVtYm5haWwgPSBpbWFnZURhdGFVcmkgPyBkYXRhVVJJdG9CbG9iKGltYWdlRGF0YVVyaSkgOiBudWxsO1xyXG4gIGNvbnN0IG1hcFRvU2F2ZSA9IGdldE1hcEpTT04oc3RhdGUsIG9wdGlvbik7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBtYXA6IG1hcFRvU2F2ZSxcclxuICAgIHRodW1ibmFpbFxyXG4gIH07XHJcbn1cclxuXHJcbmNvbnN0IGV4cG9ydGVycyA9IHtcclxuICBleHBvcnRJbWFnZSxcclxuICBleHBvcnRKc29uLFxyXG4gIGV4cG9ydEh0bWwsXHJcbiAgZXhwb3J0RGF0YVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZXhwb3J0ZXJzO1xyXG4iXX0=