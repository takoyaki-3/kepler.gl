"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.savePropertiesOrApplySchema = savePropertiesOrApplySchema;
exports.loadPropertiesOrApplySchema = loadPropertiesOrApplySchema;
exports.getPropertyValueFromSchema = getPropertyValueFromSchema;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

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
 * Recursively save / load value for state based on property keys,
 * if property[key] is another schema
 * Use is to get value to save
 * @param {Object} state - state to save
 * @param {Object} properties - properties schema
 * @returns {Object} - saved state
 */
function savePropertiesOrApplySchema(state, properties) {
  return getPropertyValueFromSchema('save', state, properties);
}

function loadPropertiesOrApplySchema(state, properties) {
  return getPropertyValueFromSchema('load', state, properties);
}

function getPropertyValueFromSchema(operation, state, properties) {
  return Object.keys(properties).reduce(function (accu, key) {
    return _objectSpread(_objectSpread({}, accu), key in state ? properties[key] ? // if it's another schema
    properties[key][operation] ? // call save or load
    properties[key][operation](state[key], state) : // if it's another property object
    getPropertyValueFromSchema(operation, state[key], properties[key]) : (0, _defineProperty2["default"])({}, key, state[key]) : {});
  }, {});
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY2hlbWFzL3NjaGVtYS11dGlscy5qcyJdLCJuYW1lcyI6WyJzYXZlUHJvcGVydGllc09yQXBwbHlTY2hlbWEiLCJzdGF0ZSIsInByb3BlcnRpZXMiLCJnZXRQcm9wZXJ0eVZhbHVlRnJvbVNjaGVtYSIsImxvYWRQcm9wZXJ0aWVzT3JBcHBseVNjaGVtYSIsIm9wZXJhdGlvbiIsIk9iamVjdCIsImtleXMiLCJyZWR1Y2UiLCJhY2N1Iiwia2V5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7OztBQVFPLFNBQVNBLDJCQUFULENBQXFDQyxLQUFyQyxFQUE0Q0MsVUFBNUMsRUFBd0Q7QUFDN0QsU0FBT0MsMEJBQTBCLENBQUMsTUFBRCxFQUFTRixLQUFULEVBQWdCQyxVQUFoQixDQUFqQztBQUNEOztBQUVNLFNBQVNFLDJCQUFULENBQXFDSCxLQUFyQyxFQUE0Q0MsVUFBNUMsRUFBd0Q7QUFDN0QsU0FBT0MsMEJBQTBCLENBQUMsTUFBRCxFQUFTRixLQUFULEVBQWdCQyxVQUFoQixDQUFqQztBQUNEOztBQUVNLFNBQVNDLDBCQUFULENBQW9DRSxTQUFwQyxFQUErQ0osS0FBL0MsRUFBc0RDLFVBQXRELEVBQWtFO0FBQ3ZFLFNBQU9JLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZTCxVQUFaLEVBQXdCTSxNQUF4QixDQUNMLFVBQUNDLElBQUQsRUFBT0MsR0FBUDtBQUFBLDJDQUNLRCxJQURMLEdBRU1DLEdBQUcsSUFBSVQsS0FBUCxHQUNBQyxVQUFVLENBQUNRLEdBQUQsQ0FBVixHQUNFO0FBQ0FSLElBQUFBLFVBQVUsQ0FBQ1EsR0FBRCxDQUFWLENBQWdCTCxTQUFoQixJQUNFO0FBQ0FILElBQUFBLFVBQVUsQ0FBQ1EsR0FBRCxDQUFWLENBQWdCTCxTQUFoQixFQUEyQkosS0FBSyxDQUFDUyxHQUFELENBQWhDLEVBQXVDVCxLQUF2QyxDQUZGLEdBR0U7QUFDQUUsSUFBQUEsMEJBQTBCLENBQUNFLFNBQUQsRUFBWUosS0FBSyxDQUFDUyxHQUFELENBQWpCLEVBQXdCUixVQUFVLENBQUNRLEdBQUQsQ0FBbEMsQ0FOOUIsd0NBT0lBLEdBUEosRUFPVVQsS0FBSyxDQUFDUyxHQUFELENBUGYsQ0FEQSxHQVNBLEVBWE47QUFBQSxHQURLLEVBY0wsRUFkSyxDQUFQO0FBZ0JEIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuLyoqXHJcbiAqIFJlY3Vyc2l2ZWx5IHNhdmUgLyBsb2FkIHZhbHVlIGZvciBzdGF0ZSBiYXNlZCBvbiBwcm9wZXJ0eSBrZXlzLFxyXG4gKiBpZiBwcm9wZXJ0eVtrZXldIGlzIGFub3RoZXIgc2NoZW1hXHJcbiAqIFVzZSBpcyB0byBnZXQgdmFsdWUgdG8gc2F2ZVxyXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhdGUgLSBzdGF0ZSB0byBzYXZlXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wZXJ0aWVzIC0gcHJvcGVydGllcyBzY2hlbWFcclxuICogQHJldHVybnMge09iamVjdH0gLSBzYXZlZCBzdGF0ZVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNhdmVQcm9wZXJ0aWVzT3JBcHBseVNjaGVtYShzdGF0ZSwgcHJvcGVydGllcykge1xyXG4gIHJldHVybiBnZXRQcm9wZXJ0eVZhbHVlRnJvbVNjaGVtYSgnc2F2ZScsIHN0YXRlLCBwcm9wZXJ0aWVzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRQcm9wZXJ0aWVzT3JBcHBseVNjaGVtYShzdGF0ZSwgcHJvcGVydGllcykge1xyXG4gIHJldHVybiBnZXRQcm9wZXJ0eVZhbHVlRnJvbVNjaGVtYSgnbG9hZCcsIHN0YXRlLCBwcm9wZXJ0aWVzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFByb3BlcnR5VmFsdWVGcm9tU2NoZW1hKG9wZXJhdGlvbiwgc3RhdGUsIHByb3BlcnRpZXMpIHtcclxuICByZXR1cm4gT2JqZWN0LmtleXMocHJvcGVydGllcykucmVkdWNlKFxyXG4gICAgKGFjY3UsIGtleSkgPT4gKHtcclxuICAgICAgLi4uYWNjdSxcclxuICAgICAgLi4uKGtleSBpbiBzdGF0ZVxyXG4gICAgICAgID8gcHJvcGVydGllc1trZXldXHJcbiAgICAgICAgICA/IC8vIGlmIGl0J3MgYW5vdGhlciBzY2hlbWFcclxuICAgICAgICAgICAgcHJvcGVydGllc1trZXldW29wZXJhdGlvbl1cclxuICAgICAgICAgICAgPyAvLyBjYWxsIHNhdmUgb3IgbG9hZFxyXG4gICAgICAgICAgICAgIHByb3BlcnRpZXNba2V5XVtvcGVyYXRpb25dKHN0YXRlW2tleV0sIHN0YXRlKVxyXG4gICAgICAgICAgICA6IC8vIGlmIGl0J3MgYW5vdGhlciBwcm9wZXJ0eSBvYmplY3RcclxuICAgICAgICAgICAgICBnZXRQcm9wZXJ0eVZhbHVlRnJvbVNjaGVtYShvcGVyYXRpb24sIHN0YXRlW2tleV0sIHByb3BlcnRpZXNba2V5XSlcclxuICAgICAgICAgIDoge1trZXldOiBzdGF0ZVtrZXldfVxyXG4gICAgICAgIDoge30pXHJcbiAgICB9KSxcclxuICAgIHt9XHJcbiAgKTtcclxufVxyXG4iXX0=