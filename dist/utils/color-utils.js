"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hexToRgb = hexToRgb;
exports.isHexColor = isHexColor;
exports.rgbToHex = rgbToHex;
exports.getColorGroupByName = getColorGroupByName;
exports.reverseColorRange = reverseColorRange;
exports.createLinearGradient = createLinearGradient;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// Copyright (c) 2020 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

/**
 * get r g b from hex code
 *
 * @param {string} hex
 * @returns {import('reducers/types').RGBColor} array of r g bs
 */
function hexToRgb(hex) {
  var result = isHexColor(hex);

  if (!result) {
    return [0, 0, 0];
  }

  var r = parseInt(result[1], 16);
  var g = parseInt(result[2], 16);
  var b = parseInt(result[3], 16);
  return [r, g, b];
}

function isHexColor(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result;
}

function PadNum(c) {
  var hex = c.toString(16);
  return hex.length === 1 ? "0".concat(hex) : hex;
}
/**
 * get hex from r g b
 *
 * @param {array} rgb
 * @returns {string} hex string
 */


function rgbToHex(_ref) {
  var _ref2 = (0, _slicedToArray2["default"])(_ref, 3),
      r = _ref2[0],
      g = _ref2[1],
      b = _ref2[2];

  return "#".concat([r, g, b].map(function (n) {
    return PadNum(n);
  }).join('')).toUpperCase();
}
/**
 * Get color group name by parsing name, discard step in the name
 * e.g. Global Warming 6 -> Global Warming
 *
 * @param {Object} colorRange
 * @return {string | null}
 */


function getColorGroupByName(colorRange) {
  if (!colorRange || typeof colorRange.name !== 'string') {
    return null;
  }

  return colorRange.name.replace(/\b[^a-zA-Z]+$/, '');
}
/**
 * Get a reversed colorRange
 * @param {Boolean} reversed
 * @param {Object} colorRange
 */


function reverseColorRange(reversed, colorRange) {
  if (!colorRange) return null; // if (colorRange.reversed) return colorRange;

  return _objectSpread(_objectSpread({}, colorRange), {}, {
    reversed: reversed,
    colors: colorRange.colors.slice().reverse()
  });
}
/**
 * given a list of rgb arrays it will generate a linear gradient css rule
 * @param direction
 * @param {Array} colors
 * @return {string}
 */


function createLinearGradient(direction, colors) {
  var step = parseFloat((100.0 / colors.length).toFixed(2));
  var bands = colors.map(function (rgb, index) {
    return "rgba(".concat(rgb.join(','), ", 1) ").concat(step * index, "%, rgba(").concat(rgb.join(','), ", 1) ").concat(step * (index + 1), "%");
  });
  return "linear-gradient(to ".concat(direction, ", ").concat(bands.join(','), ")");
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy9jb2xvci11dGlscy5qcyJdLCJuYW1lcyI6WyJoZXhUb1JnYiIsImhleCIsInJlc3VsdCIsImlzSGV4Q29sb3IiLCJyIiwicGFyc2VJbnQiLCJnIiwiYiIsImV4ZWMiLCJQYWROdW0iLCJjIiwidG9TdHJpbmciLCJsZW5ndGgiLCJyZ2JUb0hleCIsIm1hcCIsIm4iLCJqb2luIiwidG9VcHBlckNhc2UiLCJnZXRDb2xvckdyb3VwQnlOYW1lIiwiY29sb3JSYW5nZSIsIm5hbWUiLCJyZXBsYWNlIiwicmV2ZXJzZUNvbG9yUmFuZ2UiLCJyZXZlcnNlZCIsImNvbG9ycyIsInNsaWNlIiwicmV2ZXJzZSIsImNyZWF0ZUxpbmVhckdyYWRpZW50IiwiZGlyZWN0aW9uIiwic3RlcCIsInBhcnNlRmxvYXQiLCJ0b0ZpeGVkIiwiYmFuZHMiLCJyZ2IiLCJpbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7QUFNTyxTQUFTQSxRQUFULENBQWtCQyxHQUFsQixFQUF1QjtBQUM1QixNQUFNQyxNQUFNLEdBQUdDLFVBQVUsQ0FBQ0YsR0FBRCxDQUF6Qjs7QUFFQSxNQUFJLENBQUNDLE1BQUwsRUFBYTtBQUNYLFdBQU8sQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FBUDtBQUNEOztBQUVELE1BQU1FLENBQUMsR0FBR0MsUUFBUSxDQUFDSCxNQUFNLENBQUMsQ0FBRCxDQUFQLEVBQVksRUFBWixDQUFsQjtBQUNBLE1BQU1JLENBQUMsR0FBR0QsUUFBUSxDQUFDSCxNQUFNLENBQUMsQ0FBRCxDQUFQLEVBQVksRUFBWixDQUFsQjtBQUNBLE1BQU1LLENBQUMsR0FBR0YsUUFBUSxDQUFDSCxNQUFNLENBQUMsQ0FBRCxDQUFQLEVBQVksRUFBWixDQUFsQjtBQUVBLFNBQU8sQ0FBQ0UsQ0FBRCxFQUFJRSxDQUFKLEVBQU9DLENBQVAsQ0FBUDtBQUNEOztBQUVNLFNBQVNKLFVBQVQsQ0FBb0JGLEdBQXBCLEVBQXlCO0FBQzlCLE1BQU1DLE1BQU0sR0FBRyw0Q0FBNENNLElBQTVDLENBQWlEUCxHQUFqRCxDQUFmO0FBRUEsU0FBT0MsTUFBUDtBQUNEOztBQUVELFNBQVNPLE1BQVQsQ0FBZ0JDLENBQWhCLEVBQW1CO0FBQ2pCLE1BQU1ULEdBQUcsR0FBR1MsQ0FBQyxDQUFDQyxRQUFGLENBQVcsRUFBWCxDQUFaO0FBQ0EsU0FBT1YsR0FBRyxDQUFDVyxNQUFKLEtBQWUsQ0FBZixjQUF1QlgsR0FBdkIsSUFBK0JBLEdBQXRDO0FBQ0Q7QUFFRDs7Ozs7Ozs7QUFNTyxTQUFTWSxRQUFULE9BQTZCO0FBQUE7QUFBQSxNQUFWVCxDQUFVO0FBQUEsTUFBUEUsQ0FBTztBQUFBLE1BQUpDLENBQUk7O0FBQ2xDLFNBQU8sV0FBSSxDQUFDSCxDQUFELEVBQUlFLENBQUosRUFBT0MsQ0FBUCxFQUFVTyxHQUFWLENBQWMsVUFBQUMsQ0FBQztBQUFBLFdBQUlOLE1BQU0sQ0FBQ00sQ0FBRCxDQUFWO0FBQUEsR0FBZixFQUE4QkMsSUFBOUIsQ0FBbUMsRUFBbkMsQ0FBSixFQUE2Q0MsV0FBN0MsRUFBUDtBQUNEO0FBRUQ7Ozs7Ozs7OztBQU9PLFNBQVNDLG1CQUFULENBQTZCQyxVQUE3QixFQUF5QztBQUM5QyxNQUFJLENBQUNBLFVBQUQsSUFBZSxPQUFPQSxVQUFVLENBQUNDLElBQWxCLEtBQTJCLFFBQTlDLEVBQXdEO0FBQ3RELFdBQU8sSUFBUDtBQUNEOztBQUVELFNBQU9ELFVBQVUsQ0FBQ0MsSUFBWCxDQUFnQkMsT0FBaEIsQ0FBd0IsZUFBeEIsRUFBeUMsRUFBekMsQ0FBUDtBQUNEO0FBRUQ7Ozs7Ozs7QUFLTyxTQUFTQyxpQkFBVCxDQUEyQkMsUUFBM0IsRUFBcUNKLFVBQXJDLEVBQWlEO0FBQ3RELE1BQUksQ0FBQ0EsVUFBTCxFQUFpQixPQUFPLElBQVAsQ0FEcUMsQ0FFdEQ7O0FBQ0EseUNBQ0tBLFVBREw7QUFFRUksSUFBQUEsUUFBUSxFQUFSQSxRQUZGO0FBR0VDLElBQUFBLE1BQU0sRUFBRUwsVUFBVSxDQUFDSyxNQUFYLENBQWtCQyxLQUFsQixHQUEwQkMsT0FBMUI7QUFIVjtBQUtEO0FBRUQ7Ozs7Ozs7O0FBTU8sU0FBU0Msb0JBQVQsQ0FBOEJDLFNBQTlCLEVBQXlDSixNQUF6QyxFQUFpRDtBQUN0RCxNQUFNSyxJQUFJLEdBQUdDLFVBQVUsQ0FBQyxDQUFDLFFBQVFOLE1BQU0sQ0FBQ1osTUFBaEIsRUFBd0JtQixPQUF4QixDQUFnQyxDQUFoQyxDQUFELENBQXZCO0FBQ0EsTUFBTUMsS0FBSyxHQUFHUixNQUFNLENBQUNWLEdBQVAsQ0FBVyxVQUFDbUIsR0FBRCxFQUFNQyxLQUFOLEVBQWdCO0FBQ3ZDLDBCQUFlRCxHQUFHLENBQUNqQixJQUFKLENBQVMsR0FBVCxDQUFmLGtCQUFvQ2EsSUFBSSxHQUFHSyxLQUEzQyxxQkFBMkRELEdBQUcsQ0FBQ2pCLElBQUosQ0FBUyxHQUFULENBQTNELGtCQUFnRmEsSUFBSSxJQUNqRkssS0FBSyxHQUFHLENBRHlFLENBQXBGO0FBRUQsR0FIYSxDQUFkO0FBS0Esc0NBQTZCTixTQUE3QixlQUEyQ0ksS0FBSyxDQUFDaEIsSUFBTixDQUFXLEdBQVgsQ0FBM0M7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMCBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbi8qKlxyXG4gKiBnZXQgciBnIGIgZnJvbSBoZXggY29kZVxyXG4gKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gaGV4XHJcbiAqIEByZXR1cm5zIHtpbXBvcnQoJ3JlZHVjZXJzL3R5cGVzJykuUkdCQ29sb3J9IGFycmF5IG9mIHIgZyBic1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGhleFRvUmdiKGhleCkge1xyXG4gIGNvbnN0IHJlc3VsdCA9IGlzSGV4Q29sb3IoaGV4KTtcclxuXHJcbiAgaWYgKCFyZXN1bHQpIHtcclxuICAgIHJldHVybiBbMCwgMCwgMF07XHJcbiAgfVxyXG5cclxuICBjb25zdCByID0gcGFyc2VJbnQocmVzdWx0WzFdLCAxNik7XHJcbiAgY29uc3QgZyA9IHBhcnNlSW50KHJlc3VsdFsyXSwgMTYpO1xyXG4gIGNvbnN0IGIgPSBwYXJzZUludChyZXN1bHRbM10sIDE2KTtcclxuXHJcbiAgcmV0dXJuIFtyLCBnLCBiXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzSGV4Q29sb3IoaGV4KSB7XHJcbiAgY29uc3QgcmVzdWx0ID0gL14jPyhbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KSQvaS5leGVjKGhleCk7XHJcblxyXG4gIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFBhZE51bShjKSB7XHJcbiAgY29uc3QgaGV4ID0gYy50b1N0cmluZygxNik7XHJcbiAgcmV0dXJuIGhleC5sZW5ndGggPT09IDEgPyBgMCR7aGV4fWAgOiBoZXg7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBnZXQgaGV4IGZyb20gciBnIGJcclxuICpcclxuICogQHBhcmFtIHthcnJheX0gcmdiXHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9IGhleCBzdHJpbmdcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiByZ2JUb0hleChbciwgZywgYl0pIHtcclxuICByZXR1cm4gYCMke1tyLCBnLCBiXS5tYXAobiA9PiBQYWROdW0obikpLmpvaW4oJycpfWAudG9VcHBlckNhc2UoKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEdldCBjb2xvciBncm91cCBuYW1lIGJ5IHBhcnNpbmcgbmFtZSwgZGlzY2FyZCBzdGVwIGluIHRoZSBuYW1lXHJcbiAqIGUuZy4gR2xvYmFsIFdhcm1pbmcgNiAtPiBHbG9iYWwgV2FybWluZ1xyXG4gKlxyXG4gKiBAcGFyYW0ge09iamVjdH0gY29sb3JSYW5nZVxyXG4gKiBAcmV0dXJuIHtzdHJpbmcgfCBudWxsfVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldENvbG9yR3JvdXBCeU5hbWUoY29sb3JSYW5nZSkge1xyXG4gIGlmICghY29sb3JSYW5nZSB8fCB0eXBlb2YgY29sb3JSYW5nZS5uYW1lICE9PSAnc3RyaW5nJykge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gY29sb3JSYW5nZS5uYW1lLnJlcGxhY2UoL1xcYlteYS16QS1aXSskLywgJycpO1xyXG59XHJcblxyXG4vKipcclxuICogR2V0IGEgcmV2ZXJzZWQgY29sb3JSYW5nZVxyXG4gKiBAcGFyYW0ge0Jvb2xlYW59IHJldmVyc2VkXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb2xvclJhbmdlXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcmV2ZXJzZUNvbG9yUmFuZ2UocmV2ZXJzZWQsIGNvbG9yUmFuZ2UpIHtcclxuICBpZiAoIWNvbG9yUmFuZ2UpIHJldHVybiBudWxsO1xyXG4gIC8vIGlmIChjb2xvclJhbmdlLnJldmVyc2VkKSByZXR1cm4gY29sb3JSYW5nZTtcclxuICByZXR1cm4ge1xyXG4gICAgLi4uY29sb3JSYW5nZSxcclxuICAgIHJldmVyc2VkLFxyXG4gICAgY29sb3JzOiBjb2xvclJhbmdlLmNvbG9ycy5zbGljZSgpLnJldmVyc2UoKVxyXG4gIH07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBnaXZlbiBhIGxpc3Qgb2YgcmdiIGFycmF5cyBpdCB3aWxsIGdlbmVyYXRlIGEgbGluZWFyIGdyYWRpZW50IGNzcyBydWxlXHJcbiAqIEBwYXJhbSBkaXJlY3Rpb25cclxuICogQHBhcmFtIHtBcnJheX0gY29sb3JzXHJcbiAqIEByZXR1cm4ge3N0cmluZ31cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVMaW5lYXJHcmFkaWVudChkaXJlY3Rpb24sIGNvbG9ycykge1xyXG4gIGNvbnN0IHN0ZXAgPSBwYXJzZUZsb2F0KCgxMDAuMCAvIGNvbG9ycy5sZW5ndGgpLnRvRml4ZWQoMikpO1xyXG4gIGNvbnN0IGJhbmRzID0gY29sb3JzLm1hcCgocmdiLCBpbmRleCkgPT4ge1xyXG4gICAgcmV0dXJuIGByZ2JhKCR7cmdiLmpvaW4oJywnKX0sIDEpICR7c3RlcCAqIGluZGV4fSUsIHJnYmEoJHtyZ2Iuam9pbignLCcpfSwgMSkgJHtzdGVwICpcclxuICAgICAgKGluZGV4ICsgMSl9JWA7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBgbGluZWFyLWdyYWRpZW50KHRvICR7ZGlyZWN0aW9ufSwgJHtiYW5kcy5qb2luKCcsJyl9KWA7XHJcbn1cclxuIl19