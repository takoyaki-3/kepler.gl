"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DefaultColorRange = exports.COLOR_RANGES = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _colorbrewer = _interopRequireDefault(require("colorbrewer"));

var _customColorRanges = require("./custom-color-ranges");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// Add colorbrewer color schemes (Data Science requirement)
// See http://colorbrewer2.org/
var colorBrewerMap = Object.entries(_colorbrewer["default"].schemeGroups).reduce(function (accu, _ref) {
  var _ref2 = (0, _slicedToArray2["default"])(_ref, 2),
      type = _ref2[0],
      palettes = _ref2[1];

  return _objectSpread(_objectSpread({}, accu), palettes.reduce(function (group, name) {
    return _objectSpread(_objectSpread({}, group), {}, (0, _defineProperty2["default"])({}, name, type));
  }, {}));
}, {});
var colorRanges = (0, _toConsumableArray2["default"])(_customColorRanges.VizColorPalette);

for (var _i = 0, _Object$entries = Object.entries(_colorbrewer["default"]); _i < _Object$entries.length; _i++) {
  var _Object$entries$_i = (0, _slicedToArray2["default"])(_Object$entries[_i], 2),
      keyName = _Object$entries$_i[0],
      colorScheme = _Object$entries$_i[1];

  if (keyName !== 'schemeGroups') {
    for (var _i2 = 0, _Object$entries2 = Object.entries(colorScheme); _i2 < _Object$entries2.length; _i2++) {
      var _Object$entries2$_i = (0, _slicedToArray2["default"])(_Object$entries2[_i2], 2),
          lenKey = _Object$entries2$_i[0],
          colors = _Object$entries2$_i[1];

      colorRanges.push({
        name: "ColorBrewer ".concat(keyName, "-").concat(lenKey),
        type: colorBrewerMap[keyName],
        category: 'ColorBrewer',
        colors: colors
      });
    }
  }
}

var COLOR_RANGES = colorRanges;
exports.COLOR_RANGES = COLOR_RANGES;
var DefaultColorRange = colorRanges.find(function (_ref3) {
  var name = _ref3.name;
  return name === 'Global Warming';
}) || {
  name: 'Global Warming',
  type: 'SEQ',
  category: 'Uber',
  colors: ['#5A1846', '#900C3F', '#C70039', '#E3611C', '#F1920E', '#FFC300']
};
exports.DefaultColorRange = DefaultColorRange;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb25zdGFudHMvY29sb3ItcmFuZ2VzLmpzIl0sIm5hbWVzIjpbImNvbG9yQnJld2VyTWFwIiwiT2JqZWN0IiwiZW50cmllcyIsImNvbG9yYnJld2VyIiwic2NoZW1lR3JvdXBzIiwicmVkdWNlIiwiYWNjdSIsInR5cGUiLCJwYWxldHRlcyIsImdyb3VwIiwibmFtZSIsImNvbG9yUmFuZ2VzIiwiVml6Q29sb3JQYWxldHRlIiwia2V5TmFtZSIsImNvbG9yU2NoZW1lIiwibGVuS2V5IiwiY29sb3JzIiwicHVzaCIsImNhdGVnb3J5IiwiQ09MT1JfUkFOR0VTIiwiRGVmYXVsdENvbG9yUmFuZ2UiLCJmaW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7Ozs7OztBQUVBO0FBQ0E7QUFFQSxJQUFNQSxjQUFjLEdBQUdDLE1BQU0sQ0FBQ0MsT0FBUCxDQUFlQyx3QkFBWUMsWUFBM0IsRUFBeUNDLE1BQXpDLENBQ3JCLFVBQUNDLElBQUQ7QUFBQTtBQUFBLE1BQVFDLElBQVI7QUFBQSxNQUFjQyxRQUFkOztBQUFBLHlDQUNLRixJQURMLEdBRUtFLFFBQVEsQ0FBQ0gsTUFBVCxDQUNELFVBQUNJLEtBQUQsRUFBUUMsSUFBUjtBQUFBLDJDQUNLRCxLQURMLDRDQUVHQyxJQUZILEVBRVVILElBRlY7QUFBQSxHQURDLEVBS0QsRUFMQyxDQUZMO0FBQUEsQ0FEcUIsRUFXckIsRUFYcUIsQ0FBdkI7QUFjQSxJQUFNSSxXQUFXLHVDQUFPQyxrQ0FBUCxDQUFqQjs7QUFFQSxtQ0FBcUNYLE1BQU0sQ0FBQ0MsT0FBUCxDQUFlQyx1QkFBZixDQUFyQyxxQ0FBa0U7QUFBQTtBQUFBLE1BQXREVSxPQUFzRDtBQUFBLE1BQTdDQyxXQUE2Qzs7QUFDaEUsTUFBSUQsT0FBTyxLQUFLLGNBQWhCLEVBQWdDO0FBQzlCLHlDQUErQlosTUFBTSxDQUFDQyxPQUFQLENBQWVZLFdBQWYsQ0FBL0Isd0NBQTREO0FBQUE7QUFBQSxVQUFoREMsTUFBZ0Q7QUFBQSxVQUF4Q0MsTUFBd0M7O0FBQzFETCxNQUFBQSxXQUFXLENBQUNNLElBQVosQ0FBaUI7QUFDZlAsUUFBQUEsSUFBSSx3QkFBaUJHLE9BQWpCLGNBQTRCRSxNQUE1QixDQURXO0FBRWZSLFFBQUFBLElBQUksRUFBRVAsY0FBYyxDQUFDYSxPQUFELENBRkw7QUFHZkssUUFBQUEsUUFBUSxFQUFFLGFBSEs7QUFJZkYsUUFBQUEsTUFBTSxFQUFOQTtBQUplLE9BQWpCO0FBTUQ7QUFDRjtBQUNGOztBQUVNLElBQU1HLFlBQVksR0FBR1IsV0FBckI7O0FBRUEsSUFBTVMsaUJBQWlCLEdBQUdULFdBQVcsQ0FBQ1UsSUFBWixDQUFpQjtBQUFBLE1BQUVYLElBQUYsU0FBRUEsSUFBRjtBQUFBLFNBQVlBLElBQUksS0FBSyxnQkFBckI7QUFBQSxDQUFqQixLQUEyRDtBQUMxRkEsRUFBQUEsSUFBSSxFQUFFLGdCQURvRjtBQUUxRkgsRUFBQUEsSUFBSSxFQUFFLEtBRm9GO0FBRzFGVyxFQUFBQSxRQUFRLEVBQUUsTUFIZ0Y7QUFJMUZGLEVBQUFBLE1BQU0sRUFBRSxDQUFDLFNBQUQsRUFBWSxTQUFaLEVBQXVCLFNBQXZCLEVBQWtDLFNBQWxDLEVBQTZDLFNBQTdDLEVBQXdELFNBQXhEO0FBSmtGLENBQXJGIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IGNvbG9yYnJld2VyIGZyb20gJ2NvbG9yYnJld2VyJztcclxuaW1wb3J0IHtWaXpDb2xvclBhbGV0dGV9IGZyb20gJy4vY3VzdG9tLWNvbG9yLXJhbmdlcyc7XHJcblxyXG4vLyBBZGQgY29sb3JicmV3ZXIgY29sb3Igc2NoZW1lcyAoRGF0YSBTY2llbmNlIHJlcXVpcmVtZW50KVxyXG4vLyBTZWUgaHR0cDovL2NvbG9yYnJld2VyMi5vcmcvXHJcblxyXG5jb25zdCBjb2xvckJyZXdlck1hcCA9IE9iamVjdC5lbnRyaWVzKGNvbG9yYnJld2VyLnNjaGVtZUdyb3VwcykucmVkdWNlKFxyXG4gIChhY2N1LCBbdHlwZSwgcGFsZXR0ZXNdKSA9PiAoe1xyXG4gICAgLi4uYWNjdSxcclxuICAgIC4uLnBhbGV0dGVzLnJlZHVjZShcclxuICAgICAgKGdyb3VwLCBuYW1lKSA9PiAoe1xyXG4gICAgICAgIC4uLmdyb3VwLFxyXG4gICAgICAgIFtuYW1lXTogdHlwZVxyXG4gICAgICB9KSxcclxuICAgICAge31cclxuICAgIClcclxuICB9KSxcclxuICB7fVxyXG4pO1xyXG5cclxuY29uc3QgY29sb3JSYW5nZXMgPSBbLi4uVml6Q29sb3JQYWxldHRlXTtcclxuXHJcbmZvciAoY29uc3QgW2tleU5hbWUsIGNvbG9yU2NoZW1lXSBvZiBPYmplY3QuZW50cmllcyhjb2xvcmJyZXdlcikpIHtcclxuICBpZiAoa2V5TmFtZSAhPT0gJ3NjaGVtZUdyb3VwcycpIHtcclxuICAgIGZvciAoY29uc3QgW2xlbktleSwgY29sb3JzXSBvZiBPYmplY3QuZW50cmllcyhjb2xvclNjaGVtZSkpIHtcclxuICAgICAgY29sb3JSYW5nZXMucHVzaCh7XHJcbiAgICAgICAgbmFtZTogYENvbG9yQnJld2VyICR7a2V5TmFtZX0tJHtsZW5LZXl9YCxcclxuICAgICAgICB0eXBlOiBjb2xvckJyZXdlck1hcFtrZXlOYW1lXSxcclxuICAgICAgICBjYXRlZ29yeTogJ0NvbG9yQnJld2VyJyxcclxuICAgICAgICBjb2xvcnNcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQ09MT1JfUkFOR0VTID0gY29sb3JSYW5nZXM7XHJcblxyXG5leHBvcnQgY29uc3QgRGVmYXVsdENvbG9yUmFuZ2UgPSBjb2xvclJhbmdlcy5maW5kKCh7bmFtZX0pID0+IG5hbWUgPT09ICdHbG9iYWwgV2FybWluZycpIHx8IHtcclxuICBuYW1lOiAnR2xvYmFsIFdhcm1pbmcnLFxyXG4gIHR5cGU6ICdTRVEnLFxyXG4gIGNhdGVnb3J5OiAnVWJlcicsXHJcbiAgY29sb3JzOiBbJyM1QTE4NDYnLCAnIzkwMEMzRicsICcjQzcwMDM5JywgJyNFMzYxMUMnLCAnI0YxOTIwRScsICcjRkZDMzAwJ11cclxufTtcclxuIl19