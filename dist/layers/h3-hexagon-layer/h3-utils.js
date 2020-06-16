"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getVertices = getVertices;
exports.getCentroid = getCentroid;
exports.idToPolygonGeo = idToPolygonGeo;
exports.getCenterHex = getCenterHex;
exports.getH3VerticeTransform = getH3VerticeTransform;
exports.distortCylinderPositions = distortCylinderPositions;
exports.getRadius = getRadius;
exports.getAngle = getAngle;
Object.defineProperty(exports, "h3GetResolution", {
  enumerable: true,
  get: function get() {
    return _h3Js.h3GetResolution;
  }
});
Object.defineProperty(exports, "h3IsValid", {
  enumerable: true,
  get: function get() {
    return _h3Js.h3IsValid;
  }
});

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _h3Js = require("h3-js");

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
// get vertices should return [lon, lat]
function getVertices(_ref) {
  var id = _ref.id;
  // always reverse it
  return (0, _h3Js.h3ToGeoBoundary)(id, true);
} // get centroid should return [lon, lat]


function getCentroid(_ref2) {
  var id = _ref2.id;
  // always reverse it to [lng, lat]
  return (0, _h3Js.h3ToGeo)(id).reverse();
}

function idToPolygonGeo(_ref3, properties) {
  var object = _ref3.object;

  if (!object || !object.id) {
    return null;
  }

  var vertices = getVertices(object);
  return {
    geometry: {
      coordinates: vertices,
      type: 'LineString'
    },
    properties: properties
  };
}

function getCenterHex(_ref4, resolution) {
  var latitude = _ref4.latitude,
      longitude = _ref4.longitude;
  return (0, _h3Js.geoToH3)(latitude, longitude, resolution);
} // H3 hexagon are not perfect hexagon after projection, they are slightly distorted
// Here we calculate the distortion from perfect hexagon to h3 hexagon
// A mathematica proof can be found at
// https://beta.observablehq.com/@heshan0131/h3-hexagon-shape-normalize


function getH3VerticeTransform(rawVertices, centroid) {
  var vertices = revertVertices(rawVertices.map(function (vt) {
    return offset(vt, centroid);
  }));
  var radius = getRadius(vertices[0], vertices[3]);
  var angle = getAngle(vertices[0], vertices[3]); // rotate hexagon vertices, so that v0 - v3 axis parallel with xAxis
  //   2___1
  // 3 /   \ 0
  //   \___/
  //   4   5
  //

  var rotatedVertices = vertices.map(function (vt) {
    return rotate([0, 0], vt, angle);
  }); // vertices of a perfect hexagon

  var normalVertices = getHexagonVertices(radius); // calculate distortion

  return getDistortions(rotatedVertices, normalVertices);
} // Vertices index based on
// https://github.com/uber/luma.gl/blob/master/modules/core/src/geometry/truncated-cone-geometry.js


function distortCylinderPositions(positions, distortions) {
  var primitives = distortions.map(function (_ref5, i) {
    var dr = _ref5.dr,
        da = _ref5.da;
    return getPtOnCircle(dr, da + Math.PI * i / 3);
  }); // close it

  primitives.push(primitives[0]); // starting from the 8th vertice, repeat 4 times, only replace x(0), y(1)

  return positions.map(function (v, i) {
    if (i > 20 && i < 21 * 5 && i % 3 < 2) {
      var row = Math.floor(i / 3);
      var col = i % 3;
      return primitives[row % 7][col];
    }

    return v;
  });
}

function offset(_ref6, _ref7) {
  var _ref8 = (0, _slicedToArray2["default"])(_ref6, 2),
      px = _ref8[0],
      py = _ref8[1];

  var _ref9 = (0, _slicedToArray2["default"])(_ref7, 2),
      x0 = _ref9[0],
      y0 = _ref9[1];

  return [[px - x0], [py - y0]];
}

function rotate(_ref10, _ref11, radians) {
  var _ref12 = (0, _slicedToArray2["default"])(_ref10, 2),
      cx = _ref12[0],
      cy = _ref12[1];

  var _ref13 = (0, _slicedToArray2["default"])(_ref11, 2),
      x = _ref13[0],
      y = _ref13[1];

  var cos = Math.cos(radians);
  var sin = Math.sin(radians);
  var nx = cos * (x - cx) + sin * (y - cy) + cx;
  var ny = cos * (y - cy) - sin * (x - cx) + cy;
  return [nx, ny];
}

function getDistance(pt0, pt1) {
  var dx = pt0[0] - pt1[0];
  var dy = pt0[1] - pt1[1];
  var dxy = Math.sqrt(dx * dx + dy * dy);
  return dxy;
}

function getRadius(pt0, pt3) {
  var dxy = getDistance(pt0, pt3);
  return dxy / 2;
}

function getAngle(pt0, pt3) {
  var dx = pt0[0] - pt3[0];
  var dy = pt0[1] - pt3[1];
  var dxy = Math.sqrt(dx * dx + dy * dy); // Calculate angle that the perpendicular hexagon vertex axis is tilted

  var angle = Math.acos(dx / dxy) * Math.sign(dy);
  return angle;
}

function getPtOnCircle(radius, angle) {
  return [radius * Math.cos(angle), radius * Math.sin(angle)];
}

function getHexagonVertices(r) {
  var ang60 = Math.PI / 3;
  var pts = [];

  for (var i = 0; i < 6; i++) {
    pts.push(getPtOnCircle(r, ang60 * i));
  }

  return pts;
}

function revertVertices(verts) {
  // reverting verts from clock (h3) to counter clock wise (luma cylinder)
  var seq = [0, 5, 4, 3, 2, 1];
  return seq.map(function (s) {
    return verts[s];
  });
}

function getDistortions(vts, origs) {
  // 0 and 3 should be the guide
  var ct = [0, 0];
  var distortions = [];

  for (var i = 0; i < 6; i++) {
    var vt = vts[i];
    var org = origs[i];
    var r = getRadius(org, ct);
    var dr = getRadius(vt, ct) / r;
    var da = Math.atan2(vt[1], vt[0]) - Math.atan2(org[1], org[0]);
    distortions.push({
      dr: dr,
      da: da
    });
  }

  return distortions;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9sYXllcnMvaDMtaGV4YWdvbi1sYXllci9oMy11dGlscy5qcyJdLCJuYW1lcyI6WyJnZXRWZXJ0aWNlcyIsImlkIiwiZ2V0Q2VudHJvaWQiLCJyZXZlcnNlIiwiaWRUb1BvbHlnb25HZW8iLCJwcm9wZXJ0aWVzIiwib2JqZWN0IiwidmVydGljZXMiLCJnZW9tZXRyeSIsImNvb3JkaW5hdGVzIiwidHlwZSIsImdldENlbnRlckhleCIsInJlc29sdXRpb24iLCJsYXRpdHVkZSIsImxvbmdpdHVkZSIsImdldEgzVmVydGljZVRyYW5zZm9ybSIsInJhd1ZlcnRpY2VzIiwiY2VudHJvaWQiLCJyZXZlcnRWZXJ0aWNlcyIsIm1hcCIsInZ0Iiwib2Zmc2V0IiwicmFkaXVzIiwiZ2V0UmFkaXVzIiwiYW5nbGUiLCJnZXRBbmdsZSIsInJvdGF0ZWRWZXJ0aWNlcyIsInJvdGF0ZSIsIm5vcm1hbFZlcnRpY2VzIiwiZ2V0SGV4YWdvblZlcnRpY2VzIiwiZ2V0RGlzdG9ydGlvbnMiLCJkaXN0b3J0Q3lsaW5kZXJQb3NpdGlvbnMiLCJwb3NpdGlvbnMiLCJkaXN0b3J0aW9ucyIsInByaW1pdGl2ZXMiLCJpIiwiZHIiLCJkYSIsImdldFB0T25DaXJjbGUiLCJNYXRoIiwiUEkiLCJwdXNoIiwidiIsInJvdyIsImZsb29yIiwiY29sIiwicHgiLCJweSIsIngwIiwieTAiLCJyYWRpYW5zIiwiY3giLCJjeSIsIngiLCJ5IiwiY29zIiwic2luIiwibngiLCJueSIsImdldERpc3RhbmNlIiwicHQwIiwicHQxIiwiZHgiLCJkeSIsImR4eSIsInNxcnQiLCJwdDMiLCJhY29zIiwic2lnbiIsInIiLCJhbmc2MCIsInB0cyIsInZlcnRzIiwic2VxIiwicyIsInZ0cyIsIm9yaWdzIiwiY3QiLCJvcmciLCJhdGFuMiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBOztBQXBCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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LENBQUosQ0FBWDtBQUNBLE1BQU01QyxXQUFXLEdBQUcsRUFBcEI7O0FBRUEsT0FBSyxJQUFJRSxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLENBQXBCLEVBQXVCQSxDQUFDLEVBQXhCLEVBQTRCO0FBQzFCLFFBQU1mLEVBQUUsR0FBR3VELEdBQUcsQ0FBQ3hDLENBQUQsQ0FBZDtBQUNBLFFBQU0yQyxHQUFHLEdBQUdGLEtBQUssQ0FBQ3pDLENBQUQsQ0FBakI7QUFFQSxRQUFNa0MsQ0FBQyxHQUFHOUMsU0FBUyxDQUFDdUQsR0FBRCxFQUFNRCxFQUFOLENBQW5CO0FBQ0EsUUFBTXpDLEVBQUUsR0FBR2IsU0FBUyxDQUFDSCxFQUFELEVBQUt5RCxFQUFMLENBQVQsR0FBb0JSLENBQS9CO0FBRUEsUUFBTWhDLEVBQUUsR0FBR0UsSUFBSSxDQUFDd0MsS0FBTCxDQUFXM0QsRUFBRSxDQUFDLENBQUQsQ0FBYixFQUFrQkEsRUFBRSxDQUFDLENBQUQsQ0FBcEIsSUFBMkJtQixJQUFJLENBQUN3QyxLQUFMLENBQVdELEdBQUcsQ0FBQyxDQUFELENBQWQsRUFBbUJBLEdBQUcsQ0FBQyxDQUFELENBQXRCLENBQXRDO0FBRUE3QyxJQUFBQSxXQUFXLENBQUNRLElBQVosQ0FBaUI7QUFBQ0wsTUFBQUEsRUFBRSxFQUFGQSxFQUFEO0FBQUtDLE1BQUFBLEVBQUUsRUFBRkE7QUFBTCxLQUFqQjtBQUNEOztBQUVELFNBQU9KLFdBQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMCBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCB7aDNHZXRSZXNvbHV0aW9uLCBoM0lzVmFsaWQsIGgzVG9HZW8sIGgzVG9HZW9Cb3VuZGFyeSwgZ2VvVG9IM30gZnJvbSAnaDMtanMnO1xyXG5leHBvcnQge2gzR2V0UmVzb2x1dGlvbiwgaDNJc1ZhbGlkfTtcclxuXHJcbi8vIGdldCB2ZXJ0aWNlcyBzaG91bGQgcmV0dXJuIFtsb24sIGxhdF1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFZlcnRpY2VzKHtpZH0pIHtcclxuICAvLyBhbHdheXMgcmV2ZXJzZSBpdFxyXG4gIHJldHVybiBoM1RvR2VvQm91bmRhcnkoaWQsIHRydWUpO1xyXG59XHJcblxyXG4vLyBnZXQgY2VudHJvaWQgc2hvdWxkIHJldHVybiBbbG9uLCBsYXRdXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDZW50cm9pZCh7aWR9KSB7XHJcbiAgLy8gYWx3YXlzIHJldmVyc2UgaXQgdG8gW2xuZywgbGF0XVxyXG4gIHJldHVybiBoM1RvR2VvKGlkKS5yZXZlcnNlKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpZFRvUG9seWdvbkdlbyh7b2JqZWN0fSwgcHJvcGVydGllcykge1xyXG4gIGlmICghb2JqZWN0IHx8ICFvYmplY3QuaWQpIHtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgdmVydGljZXMgPSBnZXRWZXJ0aWNlcyhvYmplY3QpO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgZ2VvbWV0cnk6IHtcclxuICAgICAgY29vcmRpbmF0ZXM6IHZlcnRpY2VzLFxyXG4gICAgICB0eXBlOiAnTGluZVN0cmluZydcclxuICAgIH0sXHJcbiAgICBwcm9wZXJ0aWVzXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldENlbnRlckhleCh7bGF0aXR1ZGUsIGxvbmdpdHVkZX0sIHJlc29sdXRpb24pIHtcclxuICByZXR1cm4gZ2VvVG9IMyhsYXRpdHVkZSwgbG9uZ2l0dWRlLCByZXNvbHV0aW9uKTtcclxufVxyXG5cclxuLy8gSDMgaGV4YWdvbiBhcmUgbm90IHBlcmZlY3QgaGV4YWdvbiBhZnRlciBwcm9qZWN0aW9uLCB0aGV5IGFyZSBzbGlnaHRseSBkaXN0b3J0ZWRcclxuLy8gSGVyZSB3ZSBjYWxjdWxhdGUgdGhlIGRpc3RvcnRpb24gZnJvbSBwZXJmZWN0IGhleGFnb24gdG8gaDMgaGV4YWdvblxyXG4vLyBBIG1hdGhlbWF0aWNhIHByb29mIGNhbiBiZSBmb3VuZCBhdFxyXG4vLyBodHRwczovL2JldGEub2JzZXJ2YWJsZWhxLmNvbS9AaGVzaGFuMDEzMS9oMy1oZXhhZ29uLXNoYXBlLW5vcm1hbGl6ZVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0SDNWZXJ0aWNlVHJhbnNmb3JtKHJhd1ZlcnRpY2VzLCBjZW50cm9pZCkge1xyXG4gIGNvbnN0IHZlcnRpY2VzID0gcmV2ZXJ0VmVydGljZXMocmF3VmVydGljZXMubWFwKHZ0ID0+IG9mZnNldCh2dCwgY2VudHJvaWQpKSk7XHJcbiAgY29uc3QgcmFkaXVzID0gZ2V0UmFkaXVzKHZlcnRpY2VzWzBdLCB2ZXJ0aWNlc1szXSk7XHJcblxyXG4gIGNvbnN0IGFuZ2xlID0gZ2V0QW5nbGUodmVydGljZXNbMF0sIHZlcnRpY2VzWzNdKTtcclxuXHJcbiAgLy8gcm90YXRlIGhleGFnb24gdmVydGljZXMsIHNvIHRoYXQgdjAgLSB2MyBheGlzIHBhcmFsbGVsIHdpdGggeEF4aXNcclxuICAvLyAgIDJfX18xXHJcbiAgLy8gMyAvICAgXFwgMFxyXG4gIC8vICAgXFxfX18vXHJcbiAgLy8gICA0ICAgNVxyXG4gIC8vXHJcbiAgY29uc3Qgcm90YXRlZFZlcnRpY2VzID0gdmVydGljZXMubWFwKHZ0ID0+IHJvdGF0ZShbMCwgMF0sIHZ0LCBhbmdsZSkpO1xyXG5cclxuICAvLyB2ZXJ0aWNlcyBvZiBhIHBlcmZlY3QgaGV4YWdvblxyXG4gIGNvbnN0IG5vcm1hbFZlcnRpY2VzID0gZ2V0SGV4YWdvblZlcnRpY2VzKHJhZGl1cyk7XHJcblxyXG4gIC8vIGNhbGN1bGF0ZSBkaXN0b3J0aW9uXHJcbiAgcmV0dXJuIGdldERpc3RvcnRpb25zKHJvdGF0ZWRWZXJ0aWNlcywgbm9ybWFsVmVydGljZXMpO1xyXG59XHJcblxyXG4vLyBWZXJ0aWNlcyBpbmRleCBiYXNlZCBvblxyXG4vLyBodHRwczovL2dpdGh1Yi5jb20vdWJlci9sdW1hLmdsL2Jsb2IvbWFzdGVyL21vZHVsZXMvY29yZS9zcmMvZ2VvbWV0cnkvdHJ1bmNhdGVkLWNvbmUtZ2VvbWV0cnkuanNcclxuZXhwb3J0IGZ1bmN0aW9uIGRpc3RvcnRDeWxpbmRlclBvc2l0aW9ucyhwb3NpdGlvbnMsIGRpc3RvcnRpb25zKSB7XHJcbiAgY29uc3QgcHJpbWl0aXZlcyA9IGRpc3RvcnRpb25zLm1hcCgoe2RyLCBkYX0sIGkpID0+IGdldFB0T25DaXJjbGUoZHIsIGRhICsgKE1hdGguUEkgKiBpKSAvIDMpKTtcclxuICAvLyBjbG9zZSBpdFxyXG4gIHByaW1pdGl2ZXMucHVzaChwcmltaXRpdmVzWzBdKTtcclxuXHJcbiAgLy8gc3RhcnRpbmcgZnJvbSB0aGUgOHRoIHZlcnRpY2UsIHJlcGVhdCA0IHRpbWVzLCBvbmx5IHJlcGxhY2UgeCgwKSwgeSgxKVxyXG4gIHJldHVybiBwb3NpdGlvbnMubWFwKCh2LCBpKSA9PiB7XHJcbiAgICBpZiAoaSA+IDIwICYmIGkgPCAyMSAqIDUgJiYgaSAlIDMgPCAyKSB7XHJcbiAgICAgIGNvbnN0IHJvdyA9IE1hdGguZmxvb3IoaSAvIDMpO1xyXG4gICAgICBjb25zdCBjb2wgPSBpICUgMztcclxuICAgICAgcmV0dXJuIHByaW1pdGl2ZXNbcm93ICUgN11bY29sXTtcclxuICAgIH1cclxuICAgIHJldHVybiB2O1xyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBvZmZzZXQoW3B4LCBweV0sIFt4MCwgeTBdKSB7XHJcbiAgcmV0dXJuIFtbcHggLSB4MF0sIFtweSAtIHkwXV07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJvdGF0ZShbY3gsIGN5XSwgW3gsIHldLCByYWRpYW5zKSB7XHJcbiAgY29uc3QgY29zID0gTWF0aC5jb3MocmFkaWFucyk7XHJcbiAgY29uc3Qgc2luID0gTWF0aC5zaW4ocmFkaWFucyk7XHJcbiAgY29uc3QgbnggPSBjb3MgKiAoeCAtIGN4KSArIHNpbiAqICh5IC0gY3kpICsgY3g7XHJcbiAgY29uc3QgbnkgPSBjb3MgKiAoeSAtIGN5KSAtIHNpbiAqICh4IC0gY3gpICsgY3k7XHJcblxyXG4gIHJldHVybiBbbngsIG55XTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0RGlzdGFuY2UocHQwLCBwdDEpIHtcclxuICBjb25zdCBkeCA9IHB0MFswXSAtIHB0MVswXTtcclxuICBjb25zdCBkeSA9IHB0MFsxXSAtIHB0MVsxXTtcclxuICBjb25zdCBkeHkgPSBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpO1xyXG4gIHJldHVybiBkeHk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRSYWRpdXMocHQwLCBwdDMpIHtcclxuICBjb25zdCBkeHkgPSBnZXREaXN0YW5jZShwdDAsIHB0Myk7XHJcbiAgcmV0dXJuIGR4eSAvIDI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRBbmdsZShwdDAsIHB0Mykge1xyXG4gIGNvbnN0IGR4ID0gcHQwWzBdIC0gcHQzWzBdO1xyXG4gIGNvbnN0IGR5ID0gcHQwWzFdIC0gcHQzWzFdO1xyXG4gIGNvbnN0IGR4eSA9IE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSk7XHJcblxyXG4gIC8vIENhbGN1bGF0ZSBhbmdsZSB0aGF0IHRoZSBwZXJwZW5kaWN1bGFyIGhleGFnb24gdmVydGV4IGF4aXMgaXMgdGlsdGVkXHJcbiAgY29uc3QgYW5nbGUgPSBNYXRoLmFjb3MoZHggLyBkeHkpICogTWF0aC5zaWduKGR5KTtcclxuICByZXR1cm4gYW5nbGU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFB0T25DaXJjbGUocmFkaXVzLCBhbmdsZSkge1xyXG4gIHJldHVybiBbcmFkaXVzICogTWF0aC5jb3MoYW5nbGUpLCByYWRpdXMgKiBNYXRoLnNpbihhbmdsZSldO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRIZXhhZ29uVmVydGljZXMocikge1xyXG4gIGNvbnN0IGFuZzYwID0gTWF0aC5QSSAvIDM7XHJcbiAgY29uc3QgcHRzID0gW107XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCA2OyBpKyspIHtcclxuICAgIHB0cy5wdXNoKGdldFB0T25DaXJjbGUociwgYW5nNjAgKiBpKSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gcHRzO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZXZlcnRWZXJ0aWNlcyh2ZXJ0cykge1xyXG4gIC8vIHJldmVydGluZyB2ZXJ0cyBmcm9tIGNsb2NrIChoMykgdG8gY291bnRlciBjbG9jayB3aXNlIChsdW1hIGN5bGluZGVyKVxyXG4gIGNvbnN0IHNlcSA9IFswLCA1LCA0LCAzLCAyLCAxXTtcclxuICByZXR1cm4gc2VxLm1hcChzID0+IHZlcnRzW3NdKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0RGlzdG9ydGlvbnModnRzLCBvcmlncykge1xyXG4gIC8vIDAgYW5kIDMgc2hvdWxkIGJlIHRoZSBndWlkZVxyXG4gIGNvbnN0IGN0ID0gWzAsIDBdO1xyXG4gIGNvbnN0IGRpc3RvcnRpb25zID0gW107XHJcblxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgNjsgaSsrKSB7XHJcbiAgICBjb25zdCB2dCA9IHZ0c1tpXTtcclxuICAgIGNvbnN0IG9yZyA9IG9yaWdzW2ldO1xyXG5cclxuICAgIGNvbnN0IHIgPSBnZXRSYWRpdXMob3JnLCBjdCk7XHJcbiAgICBjb25zdCBkciA9IGdldFJhZGl1cyh2dCwgY3QpIC8gcjtcclxuXHJcbiAgICBjb25zdCBkYSA9IE1hdGguYXRhbjIodnRbMV0sIHZ0WzBdKSAtIE1hdGguYXRhbjIob3JnWzFdLCBvcmdbMF0pO1xyXG5cclxuICAgIGRpc3RvcnRpb25zLnB1c2goe2RyLCBkYX0pO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGRpc3RvcnRpb25zO1xyXG59XHJcbiJdfQ==