"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _document = _interopRequireDefault(require("global/document"));

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
function nope() {}

var MouseEventHandler = /*#__PURE__*/function () {
  function MouseEventHandler(_ref) {
    var _this = this;

    var _ref$vertical = _ref.vertical,
        vertical = _ref$vertical === void 0 ? false : _ref$vertical,
        _ref$valueListener = _ref.valueListener,
        valueListener = _ref$valueListener === void 0 ? nope : _ref$valueListener,
        _ref$toggleMouseOver = _ref.toggleMouseOver,
        toggleMouseOver = _ref$toggleMouseOver === void 0 ? nope : _ref$toggleMouseOver;
    (0, _classCallCheck2["default"])(this, MouseEventHandler);
    (0, _defineProperty2["default"])(this, "handleMouseDown", function (e) {
      _document["default"].addEventListener('mouseup', _this._mouseup);

      _document["default"].addEventListener('mousemove', _this._mousemove);

      _this._prev = _this._getMousePos(e);

      _this._toggleMouseOver();
    });
    (0, _defineProperty2["default"])(this, "_mouseup", function () {
      _document["default"].removeEventListener('mouseup', _this._mouseup);

      _document["default"].removeEventListener('mousemove', _this._mousemove);

      _this._toggleMouseOver();
    });
    (0, _defineProperty2["default"])(this, "_mousemove", function (e) {
      e.preventDefault();

      var delta = _this._getMouseDelta(e);

      _this._prev = _this._getMousePos(e);

      _this._valueListener(delta);
    });
    (0, _defineProperty2["default"])(this, "handleTouchStart", function (e) {
      _document["default"].addEventListener('touchend', _this._touchend);

      _document["default"].addEventListener('touchmove', _this._touchmove);

      _this._prev = _this._getTouchPosition(e);

      _this._toggleMouseOver();
    });
    (0, _defineProperty2["default"])(this, "_touchmove", function (e) {
      var delta = _this._getTouchPosition(e) - _this._prev;

      _this._prev = _this._getTouchPosition(e);

      _this.props._valueListener(delta);
    });
    (0, _defineProperty2["default"])(this, "_touchend", function () {
      _document["default"].removeEventListener('touchend', _this._touchend);

      _document["default"].removeEventListener('touchmove', _this._touchmove);

      _this._toggleMouseOver();
    });
    this._vertical = vertical;
    this._valueListener = valueListener;
    this._toggleMouseOver = toggleMouseOver;
    this._prev = 0;
  }

  (0, _createClass2["default"])(MouseEventHandler, [{
    key: "_getMousePos",
    value: function _getMousePos(e) {
      return this._vertical ? e.clientY : e.pageX;
    }
  }, {
    key: "_getTouchPosition",
    value: function _getTouchPosition(e) {
      return this._vertical ? e.touches[0].clientY : e.touches[0].pageX;
    }
  }, {
    key: "_getMouseDelta",
    value: function _getMouseDelta(e) {
      // movementX might not be supported in some browser
      // https://stackoverflow.com/questions/41774726/mouseevent-movementx-property-apparently-not-supported-in-internet-explorer
      var mouseCoord = this._vertical ? e.movementY : e.movementX;

      var clientCoord = this._getMousePos(e);

      var delta = mouseCoord === 0 ? clientCoord - this._prev : mouseCoord;
      return delta;
    }
  }]);
  return MouseEventHandler;
}();

exports["default"] = MouseEventHandler;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9zbGlkZXIvbW91c2UtZXZlbnQuanMiXSwibmFtZXMiOlsibm9wZSIsIk1vdXNlRXZlbnRIYW5kbGVyIiwidmVydGljYWwiLCJ2YWx1ZUxpc3RlbmVyIiwidG9nZ2xlTW91c2VPdmVyIiwiZSIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsIl9tb3VzZXVwIiwiX21vdXNlbW92ZSIsIl9wcmV2IiwiX2dldE1vdXNlUG9zIiwiX3RvZ2dsZU1vdXNlT3ZlciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJwcmV2ZW50RGVmYXVsdCIsImRlbHRhIiwiX2dldE1vdXNlRGVsdGEiLCJfdmFsdWVMaXN0ZW5lciIsIl90b3VjaGVuZCIsIl90b3VjaG1vdmUiLCJfZ2V0VG91Y2hQb3NpdGlvbiIsInByb3BzIiwiX3ZlcnRpY2FsIiwiY2xpZW50WSIsInBhZ2VYIiwidG91Y2hlcyIsIm1vdXNlQ29vcmQiLCJtb3ZlbWVudFkiLCJtb3ZlbWVudFgiLCJjbGllbnRDb29yZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBOztBQXBCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBLFNBQVNBLElBQVQsR0FBZ0IsQ0FBRTs7SUFFR0MsaUI7QUFDbkIsbUNBQThFO0FBQUE7O0FBQUEsNkJBQWpFQyxRQUFpRTtBQUFBLFFBQWpFQSxRQUFpRSw4QkFBdEQsS0FBc0Q7QUFBQSxrQ0FBL0NDLGFBQStDO0FBQUEsUUFBL0NBLGFBQStDLG1DQUEvQkgsSUFBK0I7QUFBQSxvQ0FBekJJLGVBQXlCO0FBQUEsUUFBekJBLGVBQXlCLHFDQUFQSixJQUFPO0FBQUE7QUFBQSw4REFRNUQsVUFBQUssQ0FBQyxFQUFJO0FBQ3JCQywyQkFBU0MsZ0JBQVQsQ0FBMEIsU0FBMUIsRUFBcUMsS0FB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S0FBS25CLEtBQXRDLEdBQThDZ0IsVUFBNUQ7QUFFQSxhQUFPWCxLQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgZG9jdW1lbnQgZnJvbSAnZ2xvYmFsL2RvY3VtZW50JztcclxuXHJcbmZ1bmN0aW9uIG5vcGUoKSB7fVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW91c2VFdmVudEhhbmRsZXIge1xyXG4gIGNvbnN0cnVjdG9yKHt2ZXJ0aWNhbCA9IGZhbHNlLCB2YWx1ZUxpc3RlbmVyID0gbm9wZSwgdG9nZ2xlTW91c2VPdmVyID0gbm9wZX0pIHtcclxuICAgIHRoaXMuX3ZlcnRpY2FsID0gdmVydGljYWw7XHJcbiAgICB0aGlzLl92YWx1ZUxpc3RlbmVyID0gdmFsdWVMaXN0ZW5lcjtcclxuICAgIHRoaXMuX3RvZ2dsZU1vdXNlT3ZlciA9IHRvZ2dsZU1vdXNlT3ZlcjtcclxuXHJcbiAgICB0aGlzLl9wcmV2ID0gMDtcclxuICB9XHJcblxyXG4gIGhhbmRsZU1vdXNlRG93biA9IGUgPT4ge1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMuX21vdXNldXApO1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5fbW91c2Vtb3ZlKTtcclxuICAgIHRoaXMuX3ByZXYgPSB0aGlzLl9nZXRNb3VzZVBvcyhlKTtcclxuICAgIHRoaXMuX3RvZ2dsZU1vdXNlT3ZlcigpO1xyXG4gIH07XHJcblxyXG4gIF9nZXRNb3VzZVBvcyhlKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fdmVydGljYWwgPyBlLmNsaWVudFkgOiBlLnBhZ2VYO1xyXG4gIH1cclxuICBfZ2V0VG91Y2hQb3NpdGlvbihlKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fdmVydGljYWwgPyBlLnRvdWNoZXNbMF0uY2xpZW50WSA6IGUudG91Y2hlc1swXS5wYWdlWDtcclxuICB9XHJcblxyXG4gIF9nZXRNb3VzZURlbHRhKGUpIHtcclxuICAgIC8vIG1vdmVtZW50WCBtaWdodCBub3QgYmUgc3VwcG9ydGVkIGluIHNvbWUgYnJvd3NlclxyXG4gICAgLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNDE3NzQ3MjYvbW91c2VldmVudC1tb3ZlbWVudHgtcHJvcGVydHktYXBwYXJlbnRseS1ub3Qtc3VwcG9ydGVkLWluLWludGVybmV0LWV4cGxvcmVyXHJcbiAgICBjb25zdCBtb3VzZUNvb3JkID0gdGhpcy5fdmVydGljYWwgPyBlLm1vdmVtZW50WSA6IGUubW92ZW1lbnRYO1xyXG4gICAgY29uc3QgY2xpZW50Q29vcmQgPSB0aGlzLl9nZXRNb3VzZVBvcyhlKTtcclxuXHJcbiAgICBjb25zdCBkZWx0YSA9IG1vdXNlQ29vcmQgPT09IDAgPyBjbGllbnRDb29yZCAtIHRoaXMuX3ByZXYgOiBtb3VzZUNvb3JkO1xyXG5cclxuICAgIHJldHVybiBkZWx0YTtcclxuICB9XHJcblxyXG4gIF9tb3VzZXVwID0gKCkgPT4ge1xyXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMuX21vdXNldXApO1xyXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5fbW91c2Vtb3ZlKTtcclxuICAgIHRoaXMuX3RvZ2dsZU1vdXNlT3ZlcigpO1xyXG4gIH07XHJcblxyXG4gIF9tb3VzZW1vdmUgPSBlID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBjb25zdCBkZWx0YSA9IHRoaXMuX2dldE1vdXNlRGVsdGEoZSk7XHJcbiAgICB0aGlzLl9wcmV2ID0gdGhpcy5fZ2V0TW91c2VQb3MoZSk7XHJcblxyXG4gICAgdGhpcy5fdmFsdWVMaXN0ZW5lcihkZWx0YSk7XHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlVG91Y2hTdGFydCA9IGUgPT4ge1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0aGlzLl90b3VjaGVuZCk7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0aGlzLl90b3VjaG1vdmUpO1xyXG4gICAgdGhpcy5fcHJldiA9IHRoaXMuX2dldFRvdWNoUG9zaXRpb24oZSk7XHJcbiAgICB0aGlzLl90b2dnbGVNb3VzZU92ZXIoKTtcclxuICB9O1xyXG5cclxuICBfdG91Y2htb3ZlID0gZSA9PiB7XHJcbiAgICBjb25zdCBkZWx0YSA9IHRoaXMuX2dldFRvdWNoUG9zaXRpb24oZSkgLSB0aGlzLl9wcmV2O1xyXG4gICAgdGhpcy5fcHJldiA9IHRoaXMuX2dldFRvdWNoUG9zaXRpb24oZSk7XHJcbiAgICB0aGlzLnByb3BzLl92YWx1ZUxpc3RlbmVyKGRlbHRhKTtcclxuICB9O1xyXG5cclxuICBfdG91Y2hlbmQgPSAoKSA9PiB7XHJcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRoaXMuX3RvdWNoZW5kKTtcclxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRoaXMuX3RvdWNobW92ZSk7XHJcbiAgICB0aGlzLl90b2dnbGVNb3VzZU92ZXIoKTtcclxuICB9O1xyXG59XHJcbiJdfQ==