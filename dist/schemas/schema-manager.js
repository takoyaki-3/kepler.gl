"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _window = require("global/window");

var _visStateSchema = _interopRequireDefault(require("./vis-state-schema"));

var _datasetSchema = _interopRequireDefault(require("./dataset-schema"));

var _mapStyleSchema = _interopRequireDefault(require("./map-style-schema"));

var _mapStateSchema = _interopRequireDefault(require("./map-state-schema"));

var _versions = require("./versions");

var _utils = require("../utils/utils");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var REDUCER_SCHEMAS = {
  visState: _visStateSchema["default"],
  mapState: _mapStateSchema["default"],
  mapStyle: _mapStyleSchema["default"]
};
/** @type {typeof import('./schema-manager').KeplerGLSchema} */

var KeplerGLSchema = /*#__PURE__*/function () {
  function KeplerGLSchema() {
    (0, _classCallCheck2["default"])(this, KeplerGLSchema);
    this._validVersions = _versions.VERSIONS;
    this._version = _versions.CURRENT_VERSION;
    this._reducerSchemas = REDUCER_SCHEMAS;
    this._datasetSchema = _datasetSchema["default"];
    this._datasetLastSaved = null;
    this._savedDataset = null;
  }
  /**
   * stateToSave = {
   *   datasets: [
   *     {
   *       version: 'v0',
   *       data: {id, label, color, allData, fields}
   *     },
   *     {
   *       version: 'v0',
   *       data: {id, label, color, allData, fields}
   *     }
   *   ],
   *   config: {
   *     version: 'v0',
   *     config: {}
   *   },
   *   info: {
   *     app: 'kepler.gl',
   *     create_at: 'Mon May 28 2018 21:04:46 GMT-0700 (PDT)'
   *   }
   * }
   *
   * Get config and data of current map to save
   * @param state
   * @returns app state to save
   */


  (0, _createClass2["default"])(KeplerGLSchema, [{
    key: "save",
    value: function save(state) {
      return {
        datasets: this.getDatasetToSave(state),
        config: this.getConfigToSave(state),
        info: _objectSpread({
          app: 'kepler.gl',
          created_at: new Date().toString()
        }, this.getMapInfo(state))
      };
    }
  }, {
    key: "getMapInfo",
    value: function getMapInfo(state) {
      return state.visState.mapInfo;
    }
    /**
     *  Load saved map, argument can be (datasets, config) or ({datasets, config})
     * @param savedDatasets
     * @param savedConfig
     */

  }, {
    key: "load",
    value: function load(savedDatasets, savedConfig) {
      // if pass dataset and config in as a single object
      if (arguments.length === 1 && (0, _utils.isPlainObject)(arguments[0]) && (Array.isArray(arguments[0].datasets) || (0, _utils.isPlainObject)(arguments[0].config))) {
        return this.load(arguments[0].datasets, arguments[0].config);
      }

      return _objectSpread(_objectSpread({}, Array.isArray(savedDatasets) ? {
        datasets: this.parseSavedData(savedDatasets)
      } : {}), savedConfig ? {
        config: this.parseSavedConfig(savedConfig)
      } : {});
    }
    /**
     * Get data to save
     * @param state - app state
     * @returns - dataset to save
     */

  }, {
    key: "getDatasetToSave",
    value: function getDatasetToSave(state) {
      var _this = this;

      var dataChangedSinceLastSave = this.hasDataChanged(state);

      if (!dataChangedSinceLastSave) {
        return this._savedDataset;
      }

      var visState = state.visState;
      var datasets = Object.values(visState.datasets).map(function (ds) {
        return {
          version: _this._version,
          data: _this._datasetSchema[_this._version].save(ds)
        };
      }); // keep a copy of formatted datasets to save

      this._datasetLastSaved = visState.datasets;
      this._savedDataset = datasets;
      return datasets;
    }
    /**
     * Get App config to save
     * @param {Object} state - app state
     * @returns {{version: String, config: Object}} - config to save
     */

  }, {
    key: "getConfigToSave",
    value: function getConfigToSave(state) {
      var _this2 = this;

      var config = Object.keys(this._reducerSchemas).reduce(function (accu, key) {
        return _objectSpread(_objectSpread({}, accu), state[key] ? _this2._reducerSchemas[key][_this2._version].save(state[key]) : {});
      }, {});
      return {
        version: this._version,
        config: config
      };
    }
    /**
     * Parse saved data
     * @param datasets
     * @returns - dataset to pass to addDataToMap
     */

  }, {
    key: "parseSavedData",
    value: function parseSavedData(datasets) {
      var _this3 = this;

      return datasets.reduce(function (accu, ds) {
        var validVersion = _this3.validateVersion(ds.version);

        if (!validVersion) {
          return accu;
        }

        accu.push(_this3._datasetSchema[validVersion].load(ds.data));
        return accu;
      }, []);
    }
    /**
     * Parse saved App config
     */

  }, {
    key: "parseSavedConfig",
    value: function parseSavedConfig(_ref) {
      var _this4 = this;

      var version = _ref.version,
          config = _ref.config;
      var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var validVersion = this.validateVersion(version);

      if (!validVersion) {
        return null;
      }

      return Object.keys(config).reduce(function (accu, key) {
        return _objectSpread(_objectSpread({}, accu), key in _this4._reducerSchemas ? _this4._reducerSchemas[key][validVersion].load(config[key]) : {});
      }, {});
    }
    /**
     * Validate version
     * @param version
     * @returns validVersion
     */

  }, {
    key: "validateVersion",
    value: function validateVersion(version) {
      if (!version) {
        _window.console.error('There is no version number associated with this saved map');

        return null;
      }

      if (!this._validVersions[version]) {
        _window.console.error("".concat(version, " is not a valid version"));

        return null;
      }

      return version;
    }
    /**
     * Check if data has changed since last save
     * @param state
     * @returns - whether data has changed or not
     */

  }, {
    key: "hasDataChanged",
    value: function hasDataChanged(state) {
      return this._datasetLastSaved !== state.visState.datasets;
    }
  }]);
  return KeplerGLSchema;
}();

var KeplerGLSchemaManager = new KeplerGLSchema();
var _default = KeplerGLSchemaManager;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY2hlbWFzL3NjaGVtYS1tYW5hZ2VyLmpzIl0sIm5hbWVzIjpbIlJFRFVDRVJfU0NIRU1BUyIsInZpc1N0YXRlIiwidmlzU3RhdGVTY2hlbWEiLCJtYXBTdGF0ZSIsIm1hcFN0YXRlU2NoZW1hIiwibWFwU3R5bGUiLCJtYXBTdHlsZVNjaGVtYSIsIktlcGxlckdMU2NoZW1hIiwiX3ZhbGlkVmVyc2lvbnMiLCJWRVJTSU9OUyIsIl92ZXJzaW9uIiwiQ1VSUkVOVF9WRVJTSU9OIiwiX3JlZHVjZXJTY2hlbWFzIiwiX2RhdGFzZXRTY2hlbWEiLCJkYXRhc2V0U2NoZW1hIiwiX2RhdGFzZXRMYXN0U2F2ZWQiLCJfc2F2ZWREYXRhc2V0Iiwic3RhdGUiLCJkYXRhc2V0cyIsImdldERhdGFzZXRUb1NhdmUiLCJjb25maWciLCJnZXRDb25maWdUb1NhdmUiLCJpbmZvIiwiYXBwIiwiY3JlYXRlZF9hdCIsIkRhdGUiLCJ0b1N0cmluZyIsImdldE1hcEluZm8iLCJtYXBJbmZvIiwic2F2ZWREYXRhc2V0cyIsInNhdmVkQ29uZmlnIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiQXJyYXkiLCJpc0FycmF5IiwibG9hZCIsInBhcnNlU2F2ZWREYXRhIiwicGFyc2VTYXZlZENvbmZpZyIsImRhdGFDaGFuZ2VkU2luY2VMYXN0U2F2ZSIsImhhc0RhdGFDaGFuZ2VkIiwiT2JqZWN0IiwidmFsdWVzIiwibWFwIiwiZHMiLCJ2ZXJzaW9uIiwiZGF0YSIsInNhdmUiLCJrZXlzIiwicmVkdWNlIiwiYWNjdSIsImtleSIsInZhbGlkVmVyc2lvbiIsInZhbGlkYXRlVmVyc2lvbiIsInB1c2giLCJDb25zb2xlIiwiZXJyb3IiLCJLZXBsZXJHTFNjaGVtYU1hbmFnZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsZUFBZSxHQUFHO0FBQ3RCQyxFQUFBQSxRQUFR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QUFyQixDQUFyQjs7QUFDQSxVQUFJLENBQUNPLFlBQUwsRUFBbUI7QUFDakIsZUFBTyxJQUFQO0FBQ0Q7O0FBRUQsYUFBT1gsTUFBTSxDQUFDTyxJQUFQLENBQVkzQixNQUFaLEVBQW9CNEIsTUFBcEIsQ0FDTCxVQUFDQyxJQUFELEVBQU9DLEdBQVA7QUFBQSwrQ0FDS0QsSUFETCxHQUVNQyxHQUFHLElBQUksTUFBSSxDQUFDdEMsZUFBWixHQUNBLE1BQUksQ0FBQ0EsZUFBTCxDQUFxQnNDLEdBQXJCLEVBQTBCQyxZQUExQixFQUF3Q2hCLElBQXhDLENBQTZDZixNQUFNLENBQUM4QixHQUFELENBQW5ELENBREEsR0FFQSxFQUpOO0FBQUEsT0FESyxFQU9MLEVBUEssQ0FBUDtBQVNEO0FBRUQ7Ozs7Ozs7O29DQUtnQk4sTyxFQUFTO0FBQ3ZCLFVBQUksQ0FBQ0EsT0FBTCxFQUFjO0FBQ1pVLHdCQUFRQyxLQUFSLENBQWMsMkRBQWQ7O0FBQ0EsZUFBTyxJQUFQO0FBQ0Q7O0FBRUQsVUFBSSxDQUFDLEtBQUsvQyxjQUFMLENBQW9Cb0MsT0FBcEIsQ0FBTCxFQUFtQztBQUNqQ1Usd0JBQVFDLEtBQVIsV0FBaUJYLE9BQWpCOztBQUNBLGVBQU8sSUFBUDtBQUNEOztBQUVELGFBQU9BLE9BQVA7QUFDRDtBQUVEOzs7Ozs7OzttQ0FLZTNCLEssRUFBTztBQUNwQixhQUFPLEtBQUtGLGlCQUFMLEtBQTJCRSxLQUFLLENBQUNoQixRQUFOLENBQWVpQixRQUFqRDtBQUNEOzs7OztBQUdILElBQU1zQyxxQkFBcUIsR0FBRyxJQUFJakQsY0FBSixFQUE5QjtlQUVlaUQscUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQge2NvbnNvbGUgYXMgQ29uc29sZX0gZnJvbSAnZ2xvYmFsL3dpbmRvdyc7XHJcblxyXG5pbXBvcnQgdmlzU3RhdGVTY2hlbWEgZnJvbSAnLi92aXMtc3RhdGUtc2NoZW1hJztcclxuaW1wb3J0IGRhdGFzZXRTY2hlbWEgZnJvbSAnLi9kYXRhc2V0LXNjaGVtYSc7XHJcbmltcG9ydCBtYXBTdHlsZVNjaGVtYSBmcm9tICcuL21hcC1zdHlsZS1zY2hlbWEnO1xyXG5pbXBvcnQgbWFwU3RhdGVTY2hlbWEgZnJvbSAnLi9tYXAtc3RhdGUtc2NoZW1hJztcclxuXHJcbmltcG9ydCB7Q1VSUkVOVF9WRVJTSU9OLCBWRVJTSU9OU30gZnJvbSAnLi92ZXJzaW9ucyc7XHJcbmltcG9ydCB7aXNQbGFpbk9iamVjdH0gZnJvbSAndXRpbHMvdXRpbHMnO1xyXG5cclxuY29uc3QgUkVEVUNFUl9TQ0hFTUFTID0ge1xyXG4gIHZpc1N0YXRlOiB2aXNTdGF0ZVNjaGVtYSxcclxuICBtYXBTdGF0ZTogbWFwU3RhdGVTY2hlbWEsXHJcbiAgbWFwU3R5bGU6IG1hcFN0eWxlU2NoZW1hXHJcbn07XHJcblxyXG4vKiogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vc2NoZW1hLW1hbmFnZXInKS5LZXBsZXJHTFNjaGVtYX0gKi9cclxuY2xhc3MgS2VwbGVyR0xTY2hlbWEge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5fdmFsaWRWZXJzaW9ucyA9IFZFUlNJT05TO1xyXG4gICAgdGhpcy5fdmVyc2lvbiA9IENVUlJFTlRfVkVSU0lPTjtcclxuICAgIHRoaXMuX3JlZHVjZXJTY2hlbWFzID0gUkVEVUNFUl9TQ0hFTUFTO1xyXG4gICAgdGhpcy5fZGF0YXNldFNjaGVtYSA9IGRhdGFzZXRTY2hlbWE7XHJcblxyXG4gICAgdGhpcy5fZGF0YXNldExhc3RTYXZlZCA9IG51bGw7XHJcbiAgICB0aGlzLl9zYXZlZERhdGFzZXQgPSBudWxsO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogc3RhdGVUb1NhdmUgPSB7XHJcbiAgICogICBkYXRhc2V0czogW1xyXG4gICAqICAgICB7XHJcbiAgICogICAgICAgdmVyc2lvbjogJ3YwJyxcclxuICAgKiAgICAgICBkYXRhOiB7aWQsIGxhYmVsLCBjb2xvciwgYWxsRGF0YSwgZmllbGRzfVxyXG4gICAqICAgICB9LFxyXG4gICAqICAgICB7XHJcbiAgICogICAgICAgdmVyc2lvbjogJ3YwJyxcclxuICAgKiAgICAgICBkYXRhOiB7aWQsIGxhYmVsLCBjb2xvciwgYWxsRGF0YSwgZmllbGRzfVxyXG4gICAqICAgICB9XHJcbiAgICogICBdLFxyXG4gICAqICAgY29uZmlnOiB7XHJcbiAgICogICAgIHZlcnNpb246ICd2MCcsXHJcbiAgICogICAgIGNvbmZpZzoge31cclxuICAgKiAgIH0sXHJcbiAgICogICBpbmZvOiB7XHJcbiAgICogICAgIGFwcDogJ2tlcGxlci5nbCcsXHJcbiAgICogICAgIGNyZWF0ZV9hdDogJ01vbiBNYXkgMjggMjAxOCAyMTowNDo0NiBHTVQtMDcwMCAoUERUKSdcclxuICAgKiAgIH1cclxuICAgKiB9XHJcbiAgICpcclxuICAgKiBHZXQgY29uZmlnIGFuZCBkYXRhIG9mIGN1cnJlbnQgbWFwIHRvIHNhdmVcclxuICAgKiBAcGFyYW0gc3RhdGVcclxuICAgKiBAcmV0dXJucyBhcHAgc3RhdGUgdG8gc2F2ZVxyXG4gICAqL1xyXG4gIHNhdmUoc3RhdGUpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGRhdGFzZXRzOiB0aGlzLmdldERhdGFzZXRUb1NhdmUoc3RhdGUpLFxyXG4gICAgICBjb25maWc6IHRoaXMuZ2V0Q29uZmlnVG9TYXZlKHN0YXRlKSxcclxuICAgICAgaW5mbzoge1xyXG4gICAgICAgIGFwcDogJ2tlcGxlci5nbCcsXHJcbiAgICAgICAgY3JlYXRlZF9hdDogbmV3IERhdGUoKS50b1N0cmluZygpLFxyXG4gICAgICAgIC4uLnRoaXMuZ2V0TWFwSW5mbyhzdGF0ZSlcclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGdldE1hcEluZm8oc3RhdGUpIHtcclxuICAgIHJldHVybiBzdGF0ZS52aXNTdGF0ZS5tYXBJbmZvO1xyXG4gIH1cclxuICAvKipcclxuICAgKiAgTG9hZCBzYXZlZCBtYXAsIGFyZ3VtZW50IGNhbiBiZSAoZGF0YXNldHMsIGNvbmZpZykgb3IgKHtkYXRhc2V0cywgY29uZmlnfSlcclxuICAgKiBAcGFyYW0gc2F2ZWREYXRhc2V0c1xyXG4gICAqIEBwYXJhbSBzYXZlZENvbmZpZ1xyXG4gICAqL1xyXG4gIGxvYWQoc2F2ZWREYXRhc2V0cywgc2F2ZWRDb25maWcpIHtcclxuICAgIC8vIGlmIHBhc3MgZGF0YXNldCBhbmQgY29uZmlnIGluIGFzIGEgc2luZ2xlIG9iamVjdFxyXG4gICAgaWYgKFxyXG4gICAgICBhcmd1bWVudHMubGVuZ3RoID09PSAxICYmXHJcbiAgICAgIGlzUGxhaW5PYmplY3QoYXJndW1lbnRzWzBdKSAmJlxyXG4gICAgICAoQXJyYXkuaXNBcnJheShhcmd1bWVudHNbMF0uZGF0YXNldHMpIHx8IGlzUGxhaW5PYmplY3QoYXJndW1lbnRzWzBdLmNvbmZpZykpXHJcbiAgICApIHtcclxuICAgICAgcmV0dXJuIHRoaXMubG9hZChhcmd1bWVudHNbMF0uZGF0YXNldHMsIGFyZ3VtZW50c1swXS5jb25maWcpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIC4uLihBcnJheS5pc0FycmF5KHNhdmVkRGF0YXNldHMpID8ge2RhdGFzZXRzOiB0aGlzLnBhcnNlU2F2ZWREYXRhKHNhdmVkRGF0YXNldHMpfSA6IHt9KSxcclxuICAgICAgLi4uKHNhdmVkQ29uZmlnID8ge2NvbmZpZzogdGhpcy5wYXJzZVNhdmVkQ29uZmlnKHNhdmVkQ29uZmlnKX0gOiB7fSlcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZXQgZGF0YSB0byBzYXZlXHJcbiAgICogQHBhcmFtIHN0YXRlIC0gYXBwIHN0YXRlXHJcbiAgICogQHJldHVybnMgLSBkYXRhc2V0IHRvIHNhdmVcclxuICAgKi9cclxuICBnZXREYXRhc2V0VG9TYXZlKHN0YXRlKSB7XHJcbiAgICBjb25zdCBkYXRhQ2hhbmdlZFNpbmNlTGFzdFNhdmUgPSB0aGlzLmhhc0RhdGFDaGFuZ2VkKHN0YXRlKTtcclxuICAgIGlmICghZGF0YUNoYW5nZWRTaW5jZUxhc3RTYXZlKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLl9zYXZlZERhdGFzZXQ7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qge3Zpc1N0YXRlfSA9IHN0YXRlO1xyXG5cclxuICAgIGNvbnN0IGRhdGFzZXRzID0gT2JqZWN0LnZhbHVlcyh2aXNTdGF0ZS5kYXRhc2V0cykubWFwKGRzID0+ICh7XHJcbiAgICAgIHZlcnNpb246IHRoaXMuX3ZlcnNpb24sXHJcbiAgICAgIGRhdGE6IHRoaXMuX2RhdGFzZXRTY2hlbWFbdGhpcy5fdmVyc2lvbl0uc2F2ZShkcylcclxuICAgIH0pKTtcclxuXHJcbiAgICAvLyBrZWVwIGEgY29weSBvZiBmb3JtYXR0ZWQgZGF0YXNldHMgdG8gc2F2ZVxyXG4gICAgdGhpcy5fZGF0YXNldExhc3RTYXZlZCA9IHZpc1N0YXRlLmRhdGFzZXRzO1xyXG4gICAgdGhpcy5fc2F2ZWREYXRhc2V0ID0gZGF0YXNldHM7XHJcblxyXG4gICAgcmV0dXJuIGRhdGFzZXRzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2V0IEFwcCBjb25maWcgdG8gc2F2ZVxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBzdGF0ZSAtIGFwcCBzdGF0ZVxyXG4gICAqIEByZXR1cm5zIHt7dmVyc2lvbjogU3RyaW5nLCBjb25maWc6IE9iamVjdH19IC0gY29uZmlnIHRvIHNhdmVcclxuICAgKi9cclxuICBnZXRDb25maWdUb1NhdmUoc3RhdGUpIHtcclxuICAgIGNvbnN0IGNvbmZpZyA9IE9iamVjdC5rZXlzKHRoaXMuX3JlZHVjZXJTY2hlbWFzKS5yZWR1Y2UoXHJcbiAgICAgIChhY2N1LCBrZXkpID0+ICh7XHJcbiAgICAgICAgLi4uYWNjdSxcclxuICAgICAgICAuLi4oc3RhdGVba2V5XSA/IHRoaXMuX3JlZHVjZXJTY2hlbWFzW2tleV1bdGhpcy5fdmVyc2lvbl0uc2F2ZShzdGF0ZVtrZXldKSA6IHt9KVxyXG4gICAgICB9KSxcclxuICAgICAge31cclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdmVyc2lvbjogdGhpcy5fdmVyc2lvbixcclxuICAgICAgY29uZmlnXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUGFyc2Ugc2F2ZWQgZGF0YVxyXG4gICAqIEBwYXJhbSBkYXRhc2V0c1xyXG4gICAqIEByZXR1cm5zIC0gZGF0YXNldCB0byBwYXNzIHRvIGFkZERhdGFUb01hcFxyXG4gICAqL1xyXG4gIHBhcnNlU2F2ZWREYXRhKGRhdGFzZXRzKSB7XHJcbiAgICByZXR1cm4gZGF0YXNldHMucmVkdWNlKChhY2N1LCBkcykgPT4ge1xyXG4gICAgICBjb25zdCB2YWxpZFZlcnNpb24gPSB0aGlzLnZhbGlkYXRlVmVyc2lvbihkcy52ZXJzaW9uKTtcclxuICAgICAgaWYgKCF2YWxpZFZlcnNpb24pIHtcclxuICAgICAgICByZXR1cm4gYWNjdTtcclxuICAgICAgfVxyXG4gICAgICBhY2N1LnB1c2godGhpcy5fZGF0YXNldFNjaGVtYVt2YWxpZFZlcnNpb25dLmxvYWQoZHMuZGF0YSkpO1xyXG4gICAgICByZXR1cm4gYWNjdTtcclxuICAgIH0sIFtdKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFBhcnNlIHNhdmVkIEFwcCBjb25maWdcclxuICAgKi9cclxuICBwYXJzZVNhdmVkQ29uZmlnKHt2ZXJzaW9uLCBjb25maWd9LCBzdGF0ZSA9IHt9KSB7XHJcbiAgICBjb25zdCB2YWxpZFZlcnNpb24gPSB0aGlzLnZhbGlkYXRlVmVyc2lvbih2ZXJzaW9uKTtcclxuICAgIGlmICghdmFsaWRWZXJzaW9uKSB7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBPYmplY3Qua2V5cyhjb25maWcpLnJlZHVjZShcclxuICAgICAgKGFjY3UsIGtleSkgPT4gKHtcclxuICAgICAgICAuLi5hY2N1LFxyXG4gICAgICAgIC4uLihrZXkgaW4gdGhpcy5fcmVkdWNlclNjaGVtYXNcclxuICAgICAgICAgID8gdGhpcy5fcmVkdWNlclNjaGVtYXNba2V5XVt2YWxpZFZlcnNpb25dLmxvYWQoY29uZmlnW2tleV0pXHJcbiAgICAgICAgICA6IHt9KVxyXG4gICAgICB9KSxcclxuICAgICAge31cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBWYWxpZGF0ZSB2ZXJzaW9uXHJcbiAgICogQHBhcmFtIHZlcnNpb25cclxuICAgKiBAcmV0dXJucyB2YWxpZFZlcnNpb25cclxuICAgKi9cclxuICB2YWxpZGF0ZVZlcnNpb24odmVyc2lvbikge1xyXG4gICAgaWYgKCF2ZXJzaW9uKSB7XHJcbiAgICAgIENvbnNvbGUuZXJyb3IoJ1RoZXJlIGlzIG5vIHZlcnNpb24gbnVtYmVyIGFzc29jaWF0ZWQgd2l0aCB0aGlzIHNhdmVkIG1hcCcpO1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXRoaXMuX3ZhbGlkVmVyc2lvbnNbdmVyc2lvbl0pIHtcclxuICAgICAgQ29uc29sZS5lcnJvcihgJHt2ZXJzaW9ufSBpcyBub3QgYSB2YWxpZCB2ZXJzaW9uYCk7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB2ZXJzaW9uO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2hlY2sgaWYgZGF0YSBoYXMgY2hhbmdlZCBzaW5jZSBsYXN0IHNhdmVcclxuICAgKiBAcGFyYW0gc3RhdGVcclxuICAgKiBAcmV0dXJucyAtIHdoZXRoZXIgZGF0YSBoYXMgY2hhbmdlZCBvciBub3RcclxuICAgKi9cclxuICBoYXNEYXRhQ2hhbmdlZChzdGF0ZSkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2RhdGFzZXRMYXN0U2F2ZWQgIT09IHN0YXRlLnZpc1N0YXRlLmRhdGFzZXRzO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgS2VwbGVyR0xTY2hlbWFNYW5hZ2VyID0gbmV3IEtlcGxlckdMU2NoZW1hKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBLZXBsZXJHTFNjaGVtYU1hbmFnZXI7XHJcbiJdfQ==