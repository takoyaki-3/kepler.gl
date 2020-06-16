"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateHashId = generateHashId;
exports.isChrome = isChrome;
exports.isPlainObject = isPlainObject;
exports.capitalizeFirstLetter = capitalizeFirstLetter;
exports.camelToTitle = camelToTitle;
exports.getHTMLMapModeTileUrl = getHTMLMapModeTileUrl;
exports.toArray = toArray;
exports.isObject = isObject;
exports.getError = getError;
exports.set = exports.camelize = void 0;

var _toArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toArray"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _window = _interopRequireDefault(require("global/window"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * Generate a hash string based on number of character
 * @param {number} count
 * @returns {string} hash string
 */
function generateHashId() {
  var count = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 6;
  return Math.random().toString(36).substr(count);
}
/**
 * Detect chrome
 * @returns {boolean} - yes or no
 */


function isChrome() {
  // Chrome 1+
  return _window["default"].chrome && _window["default"].chrome.webstore;
}
/**
 * whether is an object
 * @returns {boolean} - yes or no
 */


function isPlainObject(obj) {
  return obj === Object(obj) && typeof obj !== 'function' && !Array.isArray(obj);
}
/**
 * Capitalize first letter of a string
 * @param {string} str
 * @returns {string}
 */


function capitalizeFirstLetter(str) {
  return typeof str === 'string' ? str.charAt(0).toUpperCase() + str.slice(1) : str;
}
/**
 * Convert camel style names to title
 * strokeColor -> Stroke Color
 * @param {string} str
 * @returns {string}
 */


function camelToTitle(str) {
  var breakWord = str.replace(/([A-Z])/g, ' $1');
  return capitalizeFirstLetter(breakWord);
}
/**
 * Convert names to camel style
 * Stroke Color -> strokeColor
 * @param {string} str
 * @returns {string}
 */


var camelize = function camelize(str) {
  return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function (match, index) {
    if (Number(match) === 0) return ''; // or if (/\s+/.test(match)) for white spaces

    return index === 0 ? match.toLowerCase() : match.toUpperCase();
  });
};
/**
 * Returns the img url for a given map export option
 * @param mode export option
 * @return {string} url
 */


exports.camelize = camelize;

function getHTMLMapModeTileUrl(mode) {
  return "https://d1a3f4spazzrp4.cloudfront.net/kepler.gl/documentation/map-".concat(mode.toLowerCase(), "-mode.png");
}
/**
 * Converts non-arrays to arrays.  Leaves arrays alone.  Converts
 * undefined values to empty arrays ([] instead of [undefined]).
 * Otherwise, just returns [item] for non-array items.
 *
 * @param {*} item
 * @returns {array} boom! much array. very indexed. so useful.
 */


function toArray(item) {
  if (Array.isArray(item)) {
    return item;
  }

  if (typeof item === 'undefined' || item === null) {
    return [];
  }

  return [item];
}
/**
 * immutably insert value to an Array or Object
 * @param {Array|Object} obj
 * @param {Number|String} key
 * @param {*} value
 * @returns {Array|Object}
 */


var insertValue = function insertValue(obj, key, value) {
  if (Array.isArray(obj) && typeof key === 'number') {
    return [].concat((0, _toConsumableArray2["default"])(obj.slice(0, key)), [value], (0, _toConsumableArray2["default"])(obj.slice(key + 1, obj.length)));
  }

  return _objectSpread(_objectSpread({}, obj), {}, (0, _defineProperty2["default"])({}, key, value));
};
/**
 * check if value is a loose object including a plain object, array, function
 * @param {*} value
 */


function isObject(value) {
  return value !== null && ((0, _typeof2["default"])(value) === 'object' || typeof value === 'function');
}

var setPath = function setPath(_ref, value, obj) {
  var _ref2 = (0, _toArray2["default"])(_ref),
      key = _ref2[0],
      next = _ref2.slice(1);

  // is Object allows js object, array and function
  if (!isObject(obj)) {
    return obj;
  }

  if (next.length === 0) {
    return insertValue(obj, key, value);
  } // @ts-ignore


  return insertValue(obj, key, setPath(next, value, obj.hasOwnProperty(key) ? obj[key] : {}));
};
/**
 * Immutable version of _.set
 * @param {Array<String|Number>} path
 * @param {*} value
 * @param {Object} obj
 * @returns {Object}
 */
// @ts-ignore


var set = function set(path, value, obj) {
  return obj === null ? obj : setPath(path, value, obj);
};
/**
 * Get error information of unknown type
 * Extracts as much human readable information as possible
 * Ensure result is an Error object suitable for throw or promise rejection
 *
 * @private
 * @param {*}  err - Unknown error
 * @return {string} - human readable error msg
 */


exports.set = set;

function getError(err) {
  if (!err) {
    return 'Something went wrong';
  }

  if (typeof err === 'string') {
    return err;
  } else if (err instanceof Error) {
    return err.message;
  } else if ((0, _typeof2["default"])(err) === 'object') {
    return err.error ? getError(err.error) : err.err ? getError(err.err) : err.message ? getError(err.message) : JSON.stringify(err);
  } // @ts-ignore


  return null;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy91dGlscy5qcyJdLCJuYW1lcyI6WyJnZW5lcmF0ZUhhc2hJZCIsImNvdW50IiwiTWF0aCIsInJhbmRvbSIsInRvU3RyaW5nIiwic3Vic3RyIiwiaXNDaHJvbWUiLCJ3aW5kb3ciLCJjaHJvbWUiLCJ3ZWJzdG9yZSIsImlzUGxhaW5PYmplY3QiLCJvYmoiLCJPYmplY3QiLCJBcnJheSIsImlzQXJyYXkiLCJjYXBpdGFsaXplRmlyc3RMZXR0ZXIiLCJzdHIiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwiY2FtZWxUb1RpdGxlIiwiYnJlYWtXb3JkIiwicmVwbGFjZSIsImNhbWVsaXplIiwibWF0Y2giLCJpbmRleCIsIk51bWJlciIsInRvTG93ZXJDYXNlIiwiZ2V0SFRNTE1hcE1vZGVUaWxlVXJsIiwibW9kZSIsInRvQXJyYXkiLCJpdGVtIiwiaW5zZXJ0VmFsdWUiLCJrZXkiLCJ2YWx1ZSIsImxlbmd0aCIsImlzT2JqZWN0Iiwic2V0UGF0aCIsIm5leHQiLCJoYXNPd25Qcm9wZXJ0eSIsInNldCIsInBhdGgiLCJnZXRFcnJvciIsImVyciIsIkVycm9yIiwibWVzc2FnZSIsImVycm9yIiwiSlNPTiIsInN0cmluZ2lmeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxQkE7Ozs7OztBQUVBOzs7OztBQUtPLFNBQVNBLGNBQVQsR0FBbUM7QUFBQSxNQUFYQyxLQUFXLHVFQUFILENBQUc7QUFDeEMsU0FBT0MsSUFBSSxDQUFDQyxNQUFMLEdBQ0pDLFFBREksQ0FDSyxFQURMLEVBRUpDLE1BRkksQ0FFR0osS0FGSCxDQUFQO0FBR0Q7QUFFRDs7Ozs7O0FBSU8sU0FBU0ssUUFBVCxHQUFvQjtBQUN6QjtBQUNBLFNBQU9DLG1CQUFPQyxNQUFQLElBQWlCRCxtQkFBT0MsTUFBUCxDQUFjQyxRQUF0QztBQUNEO0FBRUQ7Ozs7OztBQUlPLFNBQVNDLGFBQVQsQ0FBdUJDLEdBQXZCLEVBQTRCO0FBQ2pD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Q0FILFFBQVEsQ0FBQ0MsR0FBRyxDQUFDRSxPQUFMLENBRFIsR0FFQUUsSUFBSSxDQUFDQyxTQUFMLENBQWVMLEdBQWYsQ0FOSjtBQU9ELEdBakIyQixDQW1CNUI7OztBQUNBLFNBQU8sSUFBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgd2luZG93IGZyb20gJ2dsb2JhbC93aW5kb3cnO1xyXG5cclxuLyoqXHJcbiAqIEdlbmVyYXRlIGEgaGFzaCBzdHJpbmcgYmFzZWQgb24gbnVtYmVyIG9mIGNoYXJhY3RlclxyXG4gKiBAcGFyYW0ge251bWJlcn0gY291bnRcclxuICogQHJldHVybnMge3N0cmluZ30gaGFzaCBzdHJpbmdcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZUhhc2hJZChjb3VudCA9IDYpIHtcclxuICByZXR1cm4gTWF0aC5yYW5kb20oKVxyXG4gICAgLnRvU3RyaW5nKDM2KVxyXG4gICAgLnN1YnN0cihjb3VudCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBEZXRlY3QgY2hyb21lXHJcbiAqIEByZXR1cm5zIHtib29sZWFufSAtIHllcyBvciBub1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzQ2hyb21lKCkge1xyXG4gIC8vIENocm9tZSAxK1xyXG4gIHJldHVybiB3aW5kb3cuY2hyb21lICYmIHdpbmRvdy5jaHJvbWUud2Vic3RvcmU7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiB3aGV0aGVyIGlzIGFuIG9iamVjdFxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gLSB5ZXMgb3Igbm9cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1BsYWluT2JqZWN0KG9iaikge1xyXG4gIHJldHVybiBvYmogPT09IE9iamVjdChvYmopICYmIHR5cGVvZiBvYmogIT09ICdmdW5jdGlvbicgJiYgIUFycmF5LmlzQXJyYXkob2JqKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENhcGl0YWxpemUgZmlyc3QgbGV0dGVyIG9mIGEgc3RyaW5nXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcclxuICogQHJldHVybnMge3N0cmluZ31cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjYXBpdGFsaXplRmlyc3RMZXR0ZXIoc3RyKSB7XHJcbiAgcmV0dXJuIHR5cGVvZiBzdHIgPT09ICdzdHJpbmcnID8gc3RyLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyLnNsaWNlKDEpIDogc3RyO1xyXG59XHJcblxyXG4vKipcclxuICogQ29udmVydCBjYW1lbCBzdHlsZSBuYW1lcyB0byB0aXRsZVxyXG4gKiBzdHJva2VDb2xvciAtPiBTdHJva2UgQ29sb3JcclxuICogQHBhcmFtIHtzdHJpbmd9IHN0clxyXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNhbWVsVG9UaXRsZShzdHIpIHtcclxuICBjb25zdCBicmVha1dvcmQgPSBzdHIucmVwbGFjZSgvKFtBLVpdKS9nLCAnICQxJyk7XHJcbiAgcmV0dXJuIGNhcGl0YWxpemVGaXJzdExldHRlcihicmVha1dvcmQpO1xyXG59XHJcblxyXG4vKipcclxuICogQ29udmVydCBuYW1lcyB0byBjYW1lbCBzdHlsZVxyXG4gKiBTdHJva2UgQ29sb3IgLT4gc3Ryb2tlQ29sb3JcclxuICogQHBhcmFtIHtzdHJpbmd9IHN0clxyXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGNhbWVsaXplID0gc3RyID0+IHtcclxuICByZXR1cm4gc3RyLnJlcGxhY2UoLyg/Ol5cXHd8W0EtWl18XFxiXFx3fFxccyspL2csIChtYXRjaCwgaW5kZXgpID0+IHtcclxuICAgIGlmIChOdW1iZXIobWF0Y2gpID09PSAwKSByZXR1cm4gJyc7IC8vIG9yIGlmICgvXFxzKy8udGVzdChtYXRjaCkpIGZvciB3aGl0ZSBzcGFjZXNcclxuICAgIHJldHVybiBpbmRleCA9PT0gMCA/IG1hdGNoLnRvTG93ZXJDYXNlKCkgOiBtYXRjaC50b1VwcGVyQ2FzZSgpO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgdGhlIGltZyB1cmwgZm9yIGEgZ2l2ZW4gbWFwIGV4cG9ydCBvcHRpb25cclxuICogQHBhcmFtIG1vZGUgZXhwb3J0IG9wdGlvblxyXG4gKiBAcmV0dXJuIHtzdHJpbmd9IHVybFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEhUTUxNYXBNb2RlVGlsZVVybChtb2RlKSB7XHJcbiAgcmV0dXJuIGBodHRwczovL2QxYTNmNHNwYXp6cnA0LmNsb3VkZnJvbnQubmV0L2tlcGxlci5nbC9kb2N1bWVudGF0aW9uL21hcC0ke21vZGUudG9Mb3dlckNhc2UoKX0tbW9kZS5wbmdgO1xyXG59XHJcblxyXG4vKipcclxuICogQ29udmVydHMgbm9uLWFycmF5cyB0byBhcnJheXMuICBMZWF2ZXMgYXJyYXlzIGFsb25lLiAgQ29udmVydHNcclxuICogdW5kZWZpbmVkIHZhbHVlcyB0byBlbXB0eSBhcnJheXMgKFtdIGluc3RlYWQgb2YgW3VuZGVmaW5lZF0pLlxyXG4gKiBPdGhlcndpc2UsIGp1c3QgcmV0dXJucyBbaXRlbV0gZm9yIG5vbi1hcnJheSBpdGVtcy5cclxuICpcclxuICogQHBhcmFtIHsqfSBpdGVtXHJcbiAqIEByZXR1cm5zIHthcnJheX0gYm9vbSEgbXVjaCBhcnJheS4gdmVyeSBpbmRleGVkLiBzbyB1c2VmdWwuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdG9BcnJheShpdGVtKSB7XHJcbiAgaWYgKEFycmF5LmlzQXJyYXkoaXRlbSkpIHtcclxuICAgIHJldHVybiBpdGVtO1xyXG4gIH1cclxuXHJcbiAgaWYgKHR5cGVvZiBpdGVtID09PSAndW5kZWZpbmVkJyB8fCBpdGVtID09PSBudWxsKSB7XHJcbiAgICByZXR1cm4gW107XHJcbiAgfVxyXG5cclxuICByZXR1cm4gW2l0ZW1dO1xyXG59XHJcblxyXG4vKipcclxuICogaW1tdXRhYmx5IGluc2VydCB2YWx1ZSB0byBhbiBBcnJheSBvciBPYmplY3RcclxuICogQHBhcmFtIHtBcnJheXxPYmplY3R9IG9ialxyXG4gKiBAcGFyYW0ge051bWJlcnxTdHJpbmd9IGtleVxyXG4gKiBAcGFyYW0geyp9IHZhbHVlXHJcbiAqIEByZXR1cm5zIHtBcnJheXxPYmplY3R9XHJcbiAqL1xyXG5jb25zdCBpbnNlcnRWYWx1ZSA9IChvYmosIGtleSwgdmFsdWUpID0+IHtcclxuICBpZiAoQXJyYXkuaXNBcnJheShvYmopICYmIHR5cGVvZiBrZXkgPT09ICdudW1iZXInKSB7XHJcbiAgICByZXR1cm4gWy4uLm9iai5zbGljZSgwLCBrZXkpLCB2YWx1ZSwgLi4ub2JqLnNsaWNlKGtleSArIDEsIG9iai5sZW5ndGgpXTtcclxuICB9XHJcblxyXG4gIHJldHVybiB7Li4ub2JqLCBba2V5XTogdmFsdWV9O1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIGNoZWNrIGlmIHZhbHVlIGlzIGEgbG9vc2Ugb2JqZWN0IGluY2x1ZGluZyBhIHBsYWluIG9iamVjdCwgYXJyYXksIGZ1bmN0aW9uXHJcbiAqIEBwYXJhbSB7Kn0gdmFsdWVcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xyXG4gIHJldHVybiB2YWx1ZSAhPT0gbnVsbCAmJiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyB8fCB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicpO1xyXG59XHJcblxyXG5jb25zdCBzZXRQYXRoID0gKFtrZXksIC4uLm5leHRdLCB2YWx1ZSwgb2JqKSA9PiB7XHJcbiAgLy8gaXMgT2JqZWN0IGFsbG93cyBqcyBvYmplY3QsIGFycmF5IGFuZCBmdW5jdGlvblxyXG4gIGlmICghaXNPYmplY3Qob2JqKSkge1xyXG4gICAgcmV0dXJuIG9iajtcclxuICB9XHJcblxyXG4gIGlmIChuZXh0Lmxlbmd0aCA9PT0gMCkge1xyXG4gICAgcmV0dXJuIGluc2VydFZhbHVlKG9iaiwga2V5LCB2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICAvLyBAdHMtaWdub3JlXHJcbiAgcmV0dXJuIGluc2VydFZhbHVlKG9iaiwga2V5LCBzZXRQYXRoKG5leHQsIHZhbHVlLCBvYmouaGFzT3duUHJvcGVydHkoa2V5KSA/IG9ialtrZXldIDoge30pKTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBJbW11dGFibGUgdmVyc2lvbiBvZiBfLnNldFxyXG4gKiBAcGFyYW0ge0FycmF5PFN0cmluZ3xOdW1iZXI+fSBwYXRoXHJcbiAqIEBwYXJhbSB7Kn0gdmFsdWVcclxuICogQHBhcmFtIHtPYmplY3R9IG9ialxyXG4gKiBAcmV0dXJucyB7T2JqZWN0fVxyXG4gKi9cclxuLy8gQHRzLWlnbm9yZVxyXG5leHBvcnQgY29uc3Qgc2V0ID0gKHBhdGgsIHZhbHVlLCBvYmopID0+IChvYmogPT09IG51bGwgPyBvYmogOiBzZXRQYXRoKHBhdGgsIHZhbHVlLCBvYmopKTtcclxuXHJcbi8qKlxyXG4gKiBHZXQgZXJyb3IgaW5mb3JtYXRpb24gb2YgdW5rbm93biB0eXBlXHJcbiAqIEV4dHJhY3RzIGFzIG11Y2ggaHVtYW4gcmVhZGFibGUgaW5mb3JtYXRpb24gYXMgcG9zc2libGVcclxuICogRW5zdXJlIHJlc3VsdCBpcyBhbiBFcnJvciBvYmplY3Qgc3VpdGFibGUgZm9yIHRocm93IG9yIHByb21pc2UgcmVqZWN0aW9uXHJcbiAqXHJcbiAqIEBwcml2YXRlXHJcbiAqIEBwYXJhbSB7Kn0gIGVyciAtIFVua25vd24gZXJyb3JcclxuICogQHJldHVybiB7c3RyaW5nfSAtIGh1bWFuIHJlYWRhYmxlIGVycm9yIG1zZ1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEVycm9yKGVycikge1xyXG4gIGlmICghZXJyKSB7XHJcbiAgICByZXR1cm4gJ1NvbWV0aGluZyB3ZW50IHdyb25nJztcclxuICB9XHJcblxyXG4gIGlmICh0eXBlb2YgZXJyID09PSAnc3RyaW5nJykge1xyXG4gICAgcmV0dXJuIGVycjtcclxuICB9IGVsc2UgaWYgKGVyciBpbnN0YW5jZW9mIEVycm9yKSB7XHJcbiAgICByZXR1cm4gZXJyLm1lc3NhZ2U7XHJcbiAgfSBlbHNlIGlmICh0eXBlb2YgZXJyID09PSAnb2JqZWN0Jykge1xyXG4gICAgcmV0dXJuIGVyci5lcnJvclxyXG4gICAgICA/IGdldEVycm9yKGVyci5lcnJvcilcclxuICAgICAgOiBlcnIuZXJyXHJcbiAgICAgID8gZ2V0RXJyb3IoZXJyLmVycilcclxuICAgICAgOiBlcnIubWVzc2FnZVxyXG4gICAgICA/IGdldEVycm9yKGVyci5tZXNzYWdlKVxyXG4gICAgICA6IEpTT04uc3RyaW5naWZ5KGVycik7XHJcbiAgfVxyXG5cclxuICAvLyBAdHMtaWdub3JlXHJcbiAgcmV0dXJuIG51bGw7XHJcbn1cclxuIl19