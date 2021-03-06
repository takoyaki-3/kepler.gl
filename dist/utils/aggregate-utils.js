"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.aggregate = aggregate;
exports.getMode = exports.getFrequency = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _d3Array = require("d3-array");

var _defaultSettings = require("../constants/default-settings");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var getFrequency = function getFrequency(data) {
  return data.reduce(function (uniques, val) {
    return _objectSpread(_objectSpread({}, uniques), {}, (0, _defineProperty2["default"])({}, val, (uniques[val] || 0) + 1));
  }, {});
};

exports.getFrequency = getFrequency;

var getMode = function getMode(data) {
  var occur = getFrequency(data);
  return Object.keys(occur).reduce(function (prev, key) {
    return occur[prev] >= occur[key] ? prev : key;
  }, Object.keys(occur)[0]);
};

exports.getMode = getMode;

function aggregate(data, technique) {
  switch (technique) {
    case _defaultSettings.AGGREGATION_TYPES.average:
      return (0, _d3Array.mean)(data);

    case _defaultSettings.AGGREGATION_TYPES.countUnique:
      return Object.keys(data.reduce(function (uniques, val) {
        uniques[val] = uniques[val] || 0;
        uniques[val] += 1;
        return uniques;
      }, {})).length;

    case _defaultSettings.AGGREGATION_TYPES.mode:
      return getMode(data);

    case _defaultSettings.AGGREGATION_TYPES.maximum:
      return (0, _d3Array.max)(data);

    case _defaultSettings.AGGREGATION_TYPES.minimum:
      return (0, _d3Array.min)(data);

    case _defaultSettings.AGGREGATION_TYPES.median:
      return (0, _d3Array.median)(data);

    case _defaultSettings.AGGREGATION_TYPES.stdev:
      return (0, _d3Array.deviation)(data);

    case _defaultSettings.AGGREGATION_TYPES.sum:
      return (0, _d3Array.sum)(data);

    case _defaultSettings.AGGREGATION_TYPES.variance:
      return (0, _d3Array.variance)(data);

    default:
      return data.length;
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy9hZ2dyZWdhdGUtdXRpbHMuanMiXSwibmFtZXMiOlsiZ2V0RnJlcXVlbmN5IiwiZGF0YSIsInJlZHVjZSIsInVuaXF1ZXMiLCJ2YWwiLCJnZXRNb2RlIiwib2NjdXIiLCJPYmplY3QiLCJrZXlzIiwicHJldiIsImtleSIsImFnZ3JlZ2F0ZSIsInRlY2huaXF1ZSIsIkFHR1JFR0FUSU9OX1RZUEVTIiwiYXZlcmFnZSIsImNvdW50VW5pcXVlIiwibGVuZ3RoIiwibW9kZSIsIm1heGltdW0iLCJtaW5pbXVtIiwibWVkaWFuIiwic3RkZXYiLCJzdW0iLCJ2YXJpYW5jZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOzs7Ozs7QUFFTyxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFBQyxJQUFJO0FBQUEsU0FDOUJBLElBQUksQ0FBQ0MsTUFBTCxDQUNFLFVBQUNDLE9BQUQsRUFBVUMsR0FBVjtBQUFBLDJDQUNLRCxPQURMLDRDQUVHQyxHQUZILEVBRVMsQ0FBQ0QsT0FBTyxDQUFDQyxHQUFELENBQVAsSUFBZ0IsQ0FBakIsSUFBc0IsQ0FGL0I7QUFBQSxHQURGLEVBS0UsRUFMRixDQUQ4QjtBQUFBLENBQXpCOzs7O0FBU0EsSUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQUosSUFBSSxFQUFJO0FBQzdCLE1BQU1LLEtBQUssR0FBR04sWUFBWSxDQUFDQyxJQUFELENBQTFCO0FBQ0EsU0FBT00sTUFBTSxDQUFDQyxJQUFQLENBQVlGLEtBQVosRUFBbUJKLE1BQW5CLENBQ0wsVUFBQ08sSUFBRCxFQUFPQyxHQUFQO0FBQUEsV0FBZ0JKLEtBQUssQ0FBQ0csSUFBRCxDQUFMLElBQWVILEtBQUssQ0FBQ0ksR0FBRCxDQUFwQixHQUE0QkQsSUFBNUIsR0FBbUNDLEdBQW5EO0FBQUEsR0FESyxFQUVMSCxNQUFNLENBQUNDLElBQVAsQ0FBWUYsS0FBWixFQUFtQixDQUFuQixDQUZLLENBQVA7QUFJRCxDQU5NOzs7O0FBUUEsU0FBU0ssU0FBVCxDQUFtQlYsSUFBbkIsRUFBeUJXLFNBQXpCLEVBQW9DO0FBQ3pDLFVBQVFBLFNBQVI7QUFDRSxTQUFLQyxtQ0FBa0JDLE9BQXZCO0FBQ0UsYUFBTyxtQkFBS2IsSUFBTCxDQUFQOztBQUNGLFNBQUtZLG1DQUFrQkUsV0FBdkI7QUFDRSxhQUFPUixNQUFNLENBQUNDLElBQVAsQ0FDTFAsSUFBSSxDQUFDQyxNQUFMLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxHQUFWLEVBQWtCO0FBQzVCRCxRQUFBQSxPQUFPLENBQUNDLEdBQUQsQ0FBUCxHQUFlRCxPQUFPLENBQUNDLEdBQUQsQ0FBUCxJQUFnQixDQUEvQjtBQUNBRCxRQUFBQSxPQUFPLENBQUNDLEdBQUQsQ0FBUCxJQUFnQixDQUFoQjtBQUNBLGVBQU9ELE9BQVA7QUFDRCxPQUpELEVBSUcsRUFKSCxDQURLLEVBTUxhLE1BTkY7O0FBT0YsU0FBS0gsbUNBQWtCSSxJQUF2QjtBQUNFLGFBQU9aLE9BQU8sQ0FBQ0osSUFBRCxDQUFkOztBQUVGLFNBQUtZLG1DQUFrQkssT0FBdkI7QUFDRSxhQUFPLGtCQUFJakIsSUFBSixDQUFQOztBQUNGLFNBQUtZLG1DQUFrQk0sT0FBdkI7QUFDRSxhQUFPLGtCQUFJbEIsSUFBSixDQUFQOztBQUNGLFNBQUtZLG1DQUFrQk8sTUFBdkI7QUFDRSxhQUFPLHFCQUFPbkIsSUFBUCxDQUFQOztBQUNGLFNBQUtZLG1DQUFrQlEsS0FBdkI7QUFDRSxhQUFPLHdCQUFVcEIsSUFBVixDQUFQOztBQUNGLFNBQUtZLG1DQUFrQlMsR0FBdkI7QUFDRSxhQUFPLGtCQUFJckIsSUFBSixDQUFQOztBQUNGLFNBQUtZLG1DQUFrQlUsUUFBdkI7QUFDRSxhQUFPLHVCQUFTdEIsSUFBVCxDQUFQOztBQUNGO0FBQ0UsYUFBT0EsSUFBSSxDQUFDZSxNQUFaO0FBM0JKO0FBNkJEIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IHtkZXZpYXRpb24sIG1pbiwgbWF4LCBtZWFuLCBtZWRpYW4sIHN1bSwgdmFyaWFuY2V9IGZyb20gJ2QzLWFycmF5JztcclxuaW1wb3J0IHtBR0dSRUdBVElPTl9UWVBFU30gZnJvbSAnY29uc3RhbnRzL2RlZmF1bHQtc2V0dGluZ3MnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldEZyZXF1ZW5jeSA9IGRhdGEgPT5cclxuICBkYXRhLnJlZHVjZShcclxuICAgICh1bmlxdWVzLCB2YWwpID0+ICh7XHJcbiAgICAgIC4uLnVuaXF1ZXMsXHJcbiAgICAgIFt2YWxdOiAodW5pcXVlc1t2YWxdIHx8IDApICsgMVxyXG4gICAgfSksXHJcbiAgICB7fVxyXG4gICk7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0TW9kZSA9IGRhdGEgPT4ge1xyXG4gIGNvbnN0IG9jY3VyID0gZ2V0RnJlcXVlbmN5KGRhdGEpO1xyXG4gIHJldHVybiBPYmplY3Qua2V5cyhvY2N1cikucmVkdWNlKFxyXG4gICAgKHByZXYsIGtleSkgPT4gKG9jY3VyW3ByZXZdID49IG9jY3VyW2tleV0gPyBwcmV2IDoga2V5KSxcclxuICAgIE9iamVjdC5rZXlzKG9jY3VyKVswXVxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWdncmVnYXRlKGRhdGEsIHRlY2huaXF1ZSkge1xyXG4gIHN3aXRjaCAodGVjaG5pcXVlKSB7XHJcbiAgICBjYXNlIEFHR1JFR0FUSU9OX1RZUEVTLmF2ZXJhZ2U6XHJcbiAgICAgIHJldHVybiBtZWFuKGRhdGEpO1xyXG4gICAgY2FzZSBBR0dSRUdBVElPTl9UWVBFUy5jb3VudFVuaXF1ZTpcclxuICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKFxyXG4gICAgICAgIGRhdGEucmVkdWNlKCh1bmlxdWVzLCB2YWwpID0+IHtcclxuICAgICAgICAgIHVuaXF1ZXNbdmFsXSA9IHVuaXF1ZXNbdmFsXSB8fCAwO1xyXG4gICAgICAgICAgdW5pcXVlc1t2YWxdICs9IDE7XHJcbiAgICAgICAgICByZXR1cm4gdW5pcXVlcztcclxuICAgICAgICB9LCB7fSlcclxuICAgICAgKS5sZW5ndGg7XHJcbiAgICBjYXNlIEFHR1JFR0FUSU9OX1RZUEVTLm1vZGU6XHJcbiAgICAgIHJldHVybiBnZXRNb2RlKGRhdGEpO1xyXG5cclxuICAgIGNhc2UgQUdHUkVHQVRJT05fVFlQRVMubWF4aW11bTpcclxuICAgICAgcmV0dXJuIG1heChkYXRhKTtcclxuICAgIGNhc2UgQUdHUkVHQVRJT05fVFlQRVMubWluaW11bTpcclxuICAgICAgcmV0dXJuIG1pbihkYXRhKTtcclxuICAgIGNhc2UgQUdHUkVHQVRJT05fVFlQRVMubWVkaWFuOlxyXG4gICAgICByZXR1cm4gbWVkaWFuKGRhdGEpO1xyXG4gICAgY2FzZSBBR0dSRUdBVElPTl9UWVBFUy5zdGRldjpcclxuICAgICAgcmV0dXJuIGRldmlhdGlvbihkYXRhKTtcclxuICAgIGNhc2UgQUdHUkVHQVRJT05fVFlQRVMuc3VtOlxyXG4gICAgICByZXR1cm4gc3VtKGRhdGEpO1xyXG4gICAgY2FzZSBBR0dSRUdBVElPTl9UWVBFUy52YXJpYW5jZTpcclxuICAgICAgcmV0dXJuIHZhcmlhbmNlKGRhdGEpO1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIGRhdGEubGVuZ3RoO1xyXG4gIH1cclxufVxyXG4iXX0=