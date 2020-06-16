"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _window = _interopRequireDefault(require("global/window"));

var _document = _interopRequireDefault(require("global/document"));

var _console = _interopRequireDefault(require("global/console"));

var _miniSvgDataUri = _interopRequireDefault(require("mini-svg-data-uri"));

var _userFeedbacks = require("../constants/user-feedbacks");

var _domUtils = require("./dom-utils");

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
 * This file is copied from https://github.com/tsayen/dom-to-image
 * Modified by heshan0131 to allow loading external stylesheets and inline webfonts
 */
var inliner = newInliner();
var fontFaces = newFontFaces();
var images = newImages(); // Default impl options

var defaultOptions = {
  // Default is to fail on error, no placeholder
  imagePlaceholder: undefined,
  // Default cache bust is false, it will use the cache
  cacheBust: false
};
var domtoimage = {
  toSvg: toSvg,
  toPng: toPng,
  toJpeg: toJpeg,
  toBlob: toBlob,
  toPixelData: toPixelData,
  impl: {
    fontFaces: fontFaces,
    images: images,
    inliner: inliner,
    options: {}
  }
};
/**
   * @param {Node} node - The DOM Node object to render
   * @param {Object} options - Rendering options
   * @param {Function} [options.filter] - Should return true if passed node should be included in the output
   *          (excluding node means excluding it's children as well). Not called on the root node.
   * @param {String} [options.bgcolor] - color for the background, any valid CSS color value.
   * @param {Number} [options.width] - width to be applied to node before rendering.
   * @param {Number} [options.height] - height to be applied to node before rendering.
   * @param {Object} [options.style] - an object whose properties to be copied to node's style before rendering.
   * @param {Number} [options.quality] - a Number between 0 and 1 indicating image quality (applicable to JPEG only),
              defaults to 1.0.
    * @param {String} [options.imagePlaceholder] - dataURL to use as a placeholder for failed images, default behaviour is to fail fast on images we can't fetch
    * @param {Boolean} [options.cacheBust] - set to true to cache bust by appending the time to the request url
    * @return {Promise} - A promise that is fulfilled with a SVG image data URL
    * */

function toSvg(node, options) {
  options = options || {};
  copyOptions(options);
  return Promise.resolve(node).then(function (nd) {
    return cloneNode(nd, options.filter, true);
  }).then(embedFonts).then(inlineImages).then(applyOptions).then(function (clone) {
    return makeSvgDataUri(clone, options.width || (0, _domUtils.getWidth)(node), options.height || (0, _domUtils.getHeight)(node));
  });

  function applyOptions(clone) {
    if (options.bgcolor) clone.style.backgroundColor = options.bgcolor;
    if (options.width) clone.style.width = "".concat(options.width, "px");
    if (options.height) clone.style.height = "".concat(options.height, "px");
    if (options.style) Object.keys(options.style).forEach(function (property) {
      clone.style[property] = options.style[property];
    });
    return clone;
  }
}
/**
 * @param {Node} node - The DOM Node object to render
 * @param {Object} options - Rendering options, @see {@link toSvg}
 * @return {Promise} - A promise that is fulfilled with a Uint8Array containing RGBA pixel data.
 * */


function toPixelData(node, options) {
  return draw(node, options || {}).then(function (canvas) {
    return canvas.getContext('2d').getImageData(0, 0, (0, _domUtils.getWidth)(node), (0, _domUtils.getHeight)(node)).data;
  });
}
/**
 * @param {Node} node - The DOM Node object to render
 * @param {Object} options - Rendering options, @see {@link toSvg}
 * @return {Promise} - A promise that is fulfilled with a PNG image data URL
 * */


function toPng(node, options) {
  return draw(node, options || {}).then(function (canvas) {
    return canvas.toDataURL();
  });
}
/**
 * @param {Node} node - The DOM Node object to render
 * @param {Object} options - Rendering options, @see {@link toSvg}
 * @return {Promise} - A promise that is fulfilled with a JPEG image data URL
 * */


function toJpeg(node, options) {
  options = options || {};
  return draw(node, options).then(function (canvas) {
    return canvas.toDataURL('image/jpeg', options.quality || 1.0);
  });
}
/**
 * @param {Node} node - The DOM Node object to render
 * @param {Object} options - Rendering options, @see {@link toSvg}
 * @return {Promise} - A promise that is fulfilled with a PNG image blob
 * */


function toBlob(node, options) {
  return draw(node, options || {}).then(_domUtils.canvasToBlob);
}

function copyOptions(options) {
  // Copy options to impl options for use in impl
  if (typeof options.imagePlaceholder === 'undefined') {
    domtoimage.impl.options.imagePlaceholder = defaultOptions.imagePlaceholder;
  } else {
    domtoimage.impl.options.imagePlaceholder = options.imagePlaceholder;
  }

  if (typeof options.cacheBust === 'undefined') {
    domtoimage.impl.options.cacheBust = defaultOptions.cacheBust;
  } else {
    domtoimage.impl.options.cacheBust = options.cacheBust;
  }
}

function draw(domNode, options) {
  return toSvg(domNode, options).then(_domUtils.makeImage).then((0, _domUtils.delay)(100)).then(function (image) {
    var canvas = newCanvas(domNode);
    canvas.getContext('2d').drawImage(image, 0, 0);
    return canvas;
  });

  function newCanvas(dNode) {
    var canvas = _document["default"].createElement('canvas');

    canvas.width = options.width || (0, _domUtils.getWidth)(dNode);
    canvas.height = options.height || (0, _domUtils.getHeight)(dNode);

    if (options.bgcolor) {
      var ctx = canvas.getContext('2d');
      ctx.fillStyle = options.bgcolor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    return canvas;
  }
}

function cloneNode(node, filter, root) {
  if (!root && filter && !filter(node)) {
    return Promise.resolve();
  }

  return Promise.resolve(node).then(makeNodeCopy).then(function (clone) {
    return cloneChildren(node, clone, filter);
  }).then(function (clone) {
    return (0, _domUtils.processClone)(node, clone);
  });

  function makeNodeCopy(nd) {
    if (nd instanceof _window["default"].HTMLCanvasElement) {
      return (0, _domUtils.makeImage)(nd.toDataURL());
    }

    return nd.cloneNode(false);
  }

  function cloneChildrenInOrder(parent, arrChildren, flt) {
    var done = Promise.resolve();
    arrChildren.forEach(function (child) {
      done = done.then(function () {
        return cloneNode(child, flt);
      }).then(function (childClone) {
        if (childClone) {
          parent.appendChild(childClone);
        }
      });
    });
    return done;
  }

  function cloneChildren(original, clone, flt) {
    var children = original.childNodes;

    if (children.length === 0) {
      return Promise.resolve(clone);
    }

    return cloneChildrenInOrder(clone, (0, _domUtils.asArray)(children), flt).then(function () {
      return clone;
    });
  }
}

function embedFonts(node) {
  return fontFaces.resolveAll().then(function (cssText) {
    var styleNode = _document["default"].createElement('style');

    node.appendChild(styleNode);
    styleNode.appendChild(_document["default"].createTextNode(cssText));
    return node;
  });
}

function inlineImages(node) {
  return images.inlineAll(node).then(function () {
    return node;
  });
}

function makeSvgDataUri(node, width, height) {
  return Promise.resolve(node).then(function (nd) {
    nd.setAttribute('xmlns', 'http://www.w3.org/1999/xhtml');
    var serializedString = new _window["default"].XMLSerializer().serializeToString(nd);
    var xhtml = (0, _domUtils.escapeXhtml)(serializedString);
    var foreignObject = "<foreignObject x=\"0\" y=\"0\" width=\"100%\" height=\"100%\">".concat(xhtml, "</foreignObject>");
    var svgStr = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"".concat(width, "\" height=\"").concat(height, "\">").concat(foreignObject, "</svg>"); // Optimizing SVGs in data URIs
    // see https://codepen.io/tigt/post/optimizing-svgs-in-data-uris
    // the best way of encoding SVG in a data: URI is data:image/svg+xml,[actual data].
    // We don’t need the ;charset=utf-8 parameter because the given SVG is ASCII.

    return (0, _miniSvgDataUri["default"])(svgStr);
  });
}

function newInliner() {
  var URL_REGEX = /url\(['"]?([^'"]+?)['"]?\)/g;
  return {
    inlineAll: inlineAll,
    shouldProcess: shouldProcess,
    impl: {
      readUrls: readUrls,
      inline: inline
    }
  };

  function shouldProcess(string) {
    return string.search(URL_REGEX) !== -1;
  }

  function readUrls(string) {
    var result = [];
    var match;

    while ((match = URL_REGEX.exec(string)) !== null) {
      result.push(match[1]);
    }

    return result.filter(function (url) {
      return !(0, _domUtils.isDataUrl)(url);
    });
  }

  function urlAsRegex(url0) {
    return new RegExp("(url\\(['\"]?)(".concat((0, _domUtils.escape)(url0), ")(['\"]?\\))"), 'g');
  }

  function inline(string, url, baseUrl, get) {
    return Promise.resolve(url).then(function (ul) {
      return baseUrl ? (0, _domUtils.resolveUrl)(ul, baseUrl) : ul;
    }).then(function (ul) {
      return typeof get === 'function' ? get(ul) : (0, _domUtils.getAndEncode)(ul, domtoimage.impl.options);
    }).then(function (data) {
      return (0, _domUtils.dataAsUrl)(data, (0, _domUtils.mimeType)(url));
    }).then(function (dataUrl) {
      return string.replace(urlAsRegex(url), "$1".concat(dataUrl, "$3"));
    });
  }

  function inlineAll(string, baseUrl, get) {
    if (!shouldProcess(string) || (0, _domUtils.isSrcAsDataUrl)(string)) {
      return Promise.resolve(string);
    }

    return Promise.resolve(string).then(readUrls).then(function (urls) {
      var done = Promise.resolve(string);
      urls.forEach(function (url) {
        done = done.then(function (str) {
          return inline(str, url, baseUrl, get);
        });
      });
      return done;
    });
  }
}

function newFontFaces() {
  return {
    resolveAll: resolveAll,
    impl: {
      readAll: readAll
    }
  };

  function resolveAll() {
    return readAll().then(function (webFonts) {
      return Promise.all(webFonts.map(function (webFont) {
        return webFont.resolve();
      }));
    }).then(function (cssStrings) {
      return cssStrings.join('\n');
    });
  }

  function readAll() {
    return Promise.resolve((0, _domUtils.asArray)(_document["default"].styleSheets)).then(loadExternalStyleSheets).then(getCssRules).then(selectWebFontRules).then(function (rules) {
      return rules.map(newWebFont);
    });

    function selectWebFontRules(cssRules) {
      return cssRules.filter(function (rule) {
        return rule.type === _window["default"].CSSRule.FONT_FACE_RULE;
      }).filter(function (rule) {
        return inliner.shouldProcess(rule.style.getPropertyValue('src'));
      });
    }

    function loadExternalStyleSheets(styleSheets) {
      return Promise.all(styleSheets.map(function (sheet) {
        if (sheet.href) {
          // cloudfont doesn't have allow origin header properly set
          // error response will remain in cache
          var cache = sheet.href.includes('uber-fonts') ? 'no-cache' : 'default';
          return _window["default"].fetch(sheet.href, {
            credentials: 'omit',
            cache: cache
          }).then(function (response) {
            return response.text();
          }).then(setBaseHref(sheet.href)).then(toStyleSheet)["catch"](function (err) {
            // Handle any error that occurred in any of the previous
            // promises in the chain. stylesheet failed to load should not stop
            // the process, hence result in only a warning, instead of reject
            _console["default"].warn(_userFeedbacks.IMAGE_EXPORT_ERRORS.styleSheet, sheet.href);

            _console["default"].log(err);

            return;
          });
        }

        return Promise.resolve(sheet);
      }));

      function setBaseHref(base) {
        base = base.split('/');
        base.pop();
        base = base.join('/');

        function addBaseHrefToUrl(match, p1) {
          var url = /^http/i.test(p1) ? p1 : concatAndResolveUrl(base, p1);
          return "url('".concat(url, "')");
        } // Source: http://stackoverflow.com/a/2676231/3786856


        function concatAndResolveUrl(url, concat) {
          var url1 = url.split('/');
          var url2 = concat.split('/');
          var url3 = [];

          for (var i = 0, l = url1.length; i < l; i++) {
            if (url1[i] === '..') {
              url3.pop();
            } else if (url1[i] !== '.') {
              url3.push(url1[i]);
            }
          }

          for (var _i = 0, _l = url2.length; _i < _l; _i++) {
            if (url2[_i] === '..') {
              url3.pop();
            } else if (url2[_i] !== '.') {
              url3.push(url2[_i]);
            }
          }

          return url3.join('/');
        }

        return function (text) {
          return (0, _domUtils.isSrcAsDataUrl)(text) ? text : text.replace(/url\(['"]?([^'"]+?)['"]?\)/g, addBaseHrefToUrl);
        };
      }

      function toStyleSheet(text) {
        var doc = _document["default"].implementation.createHTMLDocument('');

        var styleElement = _document["default"].createElement('style');

        styleElement.textContent = text;
        doc.body.appendChild(styleElement);
        return styleElement.sheet;
      }
    }

    function getCssRules(styleSheets) {
      var cssRules = [];
      styleSheets.forEach(function (sheet) {
        // try...catch because browser may not able to enumerate rules for cross-domain sheets
        if (!sheet) {
          return;
        }

        var rules;

        try {
          rules = sheet.rules || sheet.cssRules;
        } catch (e) {
          _console["default"].log("'Can't read the css rules of: ".concat(sheet.href), e);

          return;
        }

        if (rules && (0, _typeof2["default"])(rules) === 'object') {
          try {
            (0, _domUtils.asArray)(rules || []).forEach(cssRules.push.bind(cssRules));
          } catch (e) {
            _console["default"].log("Error while reading CSS rules from ".concat(sheet.href), e);

            return;
          }
        } else {
          _console["default"].log('getCssRules can not find cssRules');

          return;
        }
      });
      return cssRules;
    }

    function newWebFont(webFontRule) {
      return {
        resolve: function resolve() {
          var baseUrl = (webFontRule.parentStyleSheet || {}).href;
          return inliner.inlineAll(webFontRule.cssText, baseUrl);
        },
        src: function src() {
          return webFontRule.style.getPropertyValue('src');
        }
      };
    }
  }
}

function newImages() {
  return {
    inlineAll: inlineAll,
    impl: {
      newImage: newImage
    }
  };

  function newImage(element) {
    function inline(get) {
      if (element.src) {
        return Promise.resolve();
      }

      return Promise.resolve(element.src).then(function (ul) {
        return typeof get === 'function' ? get(ul) : (0, _domUtils.getAndEncode)(ul, domtoimage.impl.options);
      }).then(function (data) {
        return (0, _domUtils.dataAsUrl)(data, (0, _domUtils.mimeType)(element.src));
      }).then(function (dataUrl) {
        return new Promise(function (resolve, reject) {
          element.onload = resolve;
          element.onerror = reject;
          element.src = dataUrl;
        });
      });
    }

    return {
      inline: inline
    };
  }

  function inlineAll(node) {
    if (!(node instanceof Element)) {
      return Promise.resolve(node);
    }

    return inlineBackground(node).then(function () {
      if (node instanceof HTMLImageElement) {
        return newImage(node).inline();
      }

      return Promise.all((0, _domUtils.asArray)(node.childNodes).map(function (child) {
        return inlineAll(child);
      }));
    });

    function inlineBackground(nd) {
      var background = nd.style.getPropertyValue('background');

      if (!background) {
        return Promise.resolve(nd);
      }

      return inliner.inlineAll(background).then(function (inlined) {
        nd.style.setProperty('background', inlined, nd.style.getPropertyPriority('background'));
      }).then(function () {
        return nd;
      });
    }
  }
}

var _default = domtoimage;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy9kb20tdG8taW1hZ2UuanMiXSwibmFtZXMiOlsiaW5saW5lciIsIm5ld0lubGluZXIiLCJmb250RmFjZXMiLCJuZXdGb250RmFjZXMiLCJpbWFnZXMiLCJuZXdJbWFnZXMiLCJkZWZhdWx0T3B0aW9ucyIsImltYWdlUGxhY2Vob2xkZXIiLCJ1bmRlZmluZWQiLCJjYWNoZUJ1c3QiLCJkb210b2ltYWdlIiwidG9TdmciLCJ0b1BuZyIsInRvSnBlZyIsInRvQmxvYiIsInRvUGl4ZWxEYXRhIiwiaW1wbCIsIm9wdGlvbnMiLCJub2RlIiwiY29weU9wdGlvbnMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInRoZW4iLCJuZCIsImNsb25lTm9kZSIsImZpbHRlciIsImVtYmVkRm9udHMiLCJpbmxpbmVJbWFnZXMiLCJhcHBseU9wdGlvbnMiLCJjbG9uZSIsIm1ha2VTdmdEYXRhVXJpIiwid2lkdGgiLCJoZWlnaHQiLCJiZ2NvbG9yIiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsInByb3BlcnR5IiwiZHJhdyIsImNhbnZhcyIsImdldENvbnRleHQiLCJnZXRJbWFnZURhdGEiLCJkYXRhIiwidG9EYXRhVVJMIiwicXVhbGl0eSIsImNhbnZhc1RvQmxvYiIsImRvbU5vZGUiLCJtYWtlSW1hZ2UiLCJpbWFnZSIsIm5ld0NhbnZhcyIsImRyYXdJbWFnZSIsImROb2RlIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY3R4IiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJyb290IiwibWFrZU5vZGVDb3B5IiwiY2xvbmVDaGlsZHJlbiIsIndpbmRvdyIsIkhUTUxDYW52YXNFbGVtZW50IiwiY2xvbmVDaGlsZHJlbkluT3JkZXIiLCJwYXJlbnQiLCJhcnJDaGlsZHJlbiIsImZsdCIsImRvbmUiLCJjaGlsZCIsImNoaWxkQ2xvbmUiLCJhcHBlbmRDaGlsZCIsIm9yaWdpbmFsIiwiY2hpbGRyZW4iLCJjaGlsZE5vZGVzIiwibGVuZ3RoIiwicmVzb2x2ZUFsbCIsImNzc1RleHQiLCJzdHlsZU5vZGUiLCJjcmVhdGVUZXh0Tm9kZSIsImlubGluZUFsbCIsInNldEF0dHJpYnV0ZSIsInNlcmlhbGl6ZWRTdHJpbmciLCJYTUxTZXJpYWxpemVyIiwic2VyaWFsaXplVG9TdHJpbmciLCJ4aHRtbCIsImZvcmVpZ25PYmplY3QiLCJzdmdTdHIiLCJVUkxfUkVHRVgiLCJzaG91bGRQcm9jZXNzIiwicmVhZFVybHMiLCJpbmxpbmUiLCJzdHJpbmciLCJzZWFyY2giLCJyZXN1bHQiLCJtYXRjaCIsImV4ZWMiLCJwdXNoIiwidXJsIiwidXJsQXNSZWdleCIsInVybDAiLCJSZWdFeHAiLCJiYXNlVXJsIiwiZ2V0IiwidWwiLCJkYXRhVXJsIiwicmVwbGFjZSIsInVybHMiLCJzdHIiLCJyZWFkQWxsIiwid2ViRm9udHMiLCJhbGwiLCJtYXAiLCJ3ZWJGb250IiwiY3NzU3RyaW5ncyIsImpvaW4iLCJzdHlsZVNoZWV0cyIsImxvYWRFeHRlcm5hbFN0eWxlU2hlZXRzIiwiZ2V0Q3NzUnVsZXMiLCJzZWxlY3RXZWJGb250UnVsZXMiLCJydWxlcyIsIm5ld1dlYkZvbnQiLCJjc3NSdWxlcyIsInJ1bGUiLCJ0eXBlIiwiQ1NTUnVsZSIsIkZPTlRfRkFDRV9SVUxFIiwiZ2V0UHJvcGVydHlWYWx1ZSIsInNoZWV0IiwiaHJlZiIsImNhY2hlIiwiaW5jbHVkZXMiLCJmZXRjaCIsImNyZWRlbnRpYWxzIiwicmVzcG9uc2UiLCJ0ZXh0Iiwic2V0QmFzZUhyZWYiLCJ0b1N0eWxlU2hlZXQiLCJlcnIiLCJjb25zb2xlIiwid2FybiIsIklNQUdFX0VYUE9SVF9FUlJPUlMiLCJzdHlsZVNoZWV0IiwibG9nIiwiYmFzZSIsInNwbGl0IiwicG9wIiwiYWRkQmFzZUhyZWZUb1VybCIsInAxIiwidGVzdCIsImNvbmNhdEFuZFJlc29sdmVVcmwiLCJjb25jYXQiLCJ1cmwxIiwidXJsMiIsInVybDMiLCJpIiwibCIsImRvYyIsImltcGxlbWVudGF0aW9uIiwiY3JlYXRlSFRNTERvY3VtZW50Iiwic3R5bGVFbGVtZW50IiwidGV4dENvbnRlbnQiLCJib2R5IiwiZSIsImJpbmQiLCJ3ZWJGb250UnVsZSIsInBhcmVudFN0eWxlU2hlZXQiLCJzcmMiLCJuZXdJbWFnZSIsImVsZW1lbnQiLCJyZWplY3QiLCJvbmxvYWQiLCJvbmVycm9yIiwiRWxlbWVudCIsImlubGluZUJhY2tncm91bmQiLCJIVE1MSW1hZ2VFbGVtZW50IiwiYmFja2dyb3VuZCIsImlubGluZWQiLCJzZXRQcm9wZXJ0eSIsImdldFByb3BlcnR5UHJpb3JpdHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBeUJBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQTlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7OztBQTRCQSxJQUFNQSxPQUFPLEdBQUdDLFVBQVUsRUFBMUI7QUFDQSxJQUFNQyxTQUFTLEdBQUdDLFlBQVksRUFBOUI7QUFDQSxJQUFNQyxNQUFNLEdBQUdDLFNBQVMsRUFBeEIsQyxDQUNBOztBQUNBLElBQU1DLGNBQWMsR0FBRztBQUNyQjtBQUNBQyxFQUFBQSxnQkFBZ0IsRUFBRUMsU0FGRztBQUdyQjtBQUNBQyxFQUFBQSxTQUFTLEVBQUU7QUFKVSxDQUF2QjtBQU9BLElBQU1DLFVBQVUsR0FBRztBQUNqQkMsRUFBQUEsS0FBSyxFQUFMQSxLQURpQjtBQUVqQkMsRUFBQUEsS0FBSyxFQUFMQSxLQUZpQjtBQUdqQkMsRUFBQUEsTUFBTSxFQUFOQSxNQUhpQjtBQUlqQkMsRUFBQUEsTUFBTSxFQUFOQSxNQUppQjtBQUtqQkMsRUFBQUEsV0FBVyxFQUFYQSxXQUxpQjtBQU1qQkMsRUFBQUEsSUFBSSxFQUFFO0FBQ0pkLElBQUFBLFNBQVMsRUFBVEEsU0FESTtBQUVKRSxJQUFBQSxNQUFNLEVBQU5BLE1BRkk7QUFHSkosSUFBQUEs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ZixlQUFPNUosT0FBTyxDQUFDQyxPQUFSLENBQWdCRSxFQUFoQixDQUFQO0FBQ0Q7O0FBRUQsYUFBT3ZCLE9BQU8sQ0FDWGdGLFNBREksQ0FDTWdHLFVBRE4sRUFFSjFKLElBRkksQ0FFQyxVQUFBMkosT0FBTyxFQUFJO0FBQ2YxSixRQUFBQSxFQUFFLENBQUNXLEtBQUgsQ0FBU2dKLFdBQVQsQ0FBcUIsWUFBckIsRUFBbUNELE9BQW5DLEVBQTRDMUosRUFBRSxDQUFDVyxLQUFILENBQVNpSixtQkFBVCxDQUE2QixZQUE3QixDQUE1QztBQUNELE9BSkksRUFLSjdKLElBTEksQ0FLQztBQUFBLGVBQU1DLEVBQU47QUFBQSxPQUxELENBQVA7QUFNRDtBQUNGO0FBQ0Y7O2VBRWNiLFUiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG4vKipcclxuICogVGhpcyBmaWxlIGlzIGNvcGllZCBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS90c2F5ZW4vZG9tLXRvLWltYWdlXHJcbiAqIE1vZGlmaWVkIGJ5IGhlc2hhbjAxMzEgdG8gYWxsb3cgbG9hZGluZyBleHRlcm5hbCBzdHlsZXNoZWV0cyBhbmQgaW5saW5lIHdlYmZvbnRzXHJcbiAqL1xyXG5cclxuaW1wb3J0IHdpbmRvdyBmcm9tICdnbG9iYWwvd2luZG93JztcclxuaW1wb3J0IGRvY3VtZW50IGZyb20gJ2dsb2JhbC9kb2N1bWVudCc7XHJcbmltcG9ydCBjb25zb2xlIGZyb20gJ2dsb2JhbC9jb25zb2xlJztcclxuaW1wb3J0IHN2Z1RvTWluaURhdGFVUkkgZnJvbSAnbWluaS1zdmctZGF0YS11cmknO1xyXG5pbXBvcnQge0lNQUdFX0VYUE9SVF9FUlJPUlN9IGZyb20gJ2NvbnN0YW50cy91c2VyLWZlZWRiYWNrcyc7XHJcbmltcG9ydCB7XHJcbiAgY2FudmFzVG9CbG9iLFxyXG4gIGVzY2FwZSxcclxuICBlc2NhcGVYaHRtbCxcclxuICBkZWxheSxcclxuICBwcm9jZXNzQ2xvbmUsXHJcbiAgYXNBcnJheSxcclxuICBtYWtlSW1hZ2UsXHJcbiAgbWltZVR5cGUsXHJcbiAgZGF0YUFzVXJsLFxyXG4gIGlzRGF0YVVybCxcclxuICBpc1NyY0FzRGF0YVVybCxcclxuICByZXNvbHZlVXJsLFxyXG4gIGdldFdpZHRoLFxyXG4gIGdldEhlaWdodCxcclxuICBnZXRBbmRFbmNvZGVcclxufSBmcm9tICcuL2RvbS11dGlscyc7XHJcblxyXG5jb25zdCBpbmxpbmVyID0gbmV3SW5saW5lcigpO1xyXG5jb25zdCBmb250RmFjZXMgPSBuZXdGb250RmFjZXMoKTtcclxuY29uc3QgaW1hZ2VzID0gbmV3SW1hZ2VzKCk7XHJcbi8vIERlZmF1bHQgaW1wbCBvcHRpb25zXHJcbmNvbnN0IGRlZmF1bHRPcHRpb25zID0ge1xyXG4gIC8vIERlZmF1bHQgaXMgdG8gZmFpbCBvbiBlcnJvciwgbm8gcGxhY2Vob2xkZXJcclxuICBpbWFnZVBsYWNlaG9sZGVyOiB1bmRlZmluZWQsXHJcbiAgLy8gRGVmYXVsdCBjYWNoZSBidXN0IGlzIGZhbHNlLCBpdCB3aWxsIHVzZSB0aGUgY2FjaGVcclxuICBjYWNoZUJ1c3Q6IGZhbHNlXHJcbn07XHJcblxyXG5jb25zdCBkb210b2ltYWdlID0ge1xyXG4gIHRvU3ZnLFxyXG4gIHRvUG5nLFxyXG4gIHRvSnBlZyxcclxuICB0b0Jsb2IsXHJcbiAgdG9QaXhlbERhdGEsXHJcbiAgaW1wbDoge1xyXG4gICAgZm9udEZhY2VzLFxyXG4gICAgaW1hZ2VzLFxyXG4gICAgaW5saW5lcixcclxuICAgIG9wdGlvbnM6IHt9XHJcbiAgfVxyXG59O1xyXG5cclxuLyoqXHJcbiAgICogQHBhcmFtIHtOb2RlfSBub2RlIC0gVGhlIERPTSBOb2RlIG9iamVjdCB0byByZW5kZXJcclxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIFJlbmRlcmluZyBvcHRpb25zXHJcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gW29wdGlvbnMuZmlsdGVyXSAtIFNob3VsZCByZXR1cm4gdHJ1ZSBpZiBwYXNzZWQgbm9kZSBzaG91bGQgYmUgaW5jbHVkZWQgaW4gdGhlIG91dHB1dFxyXG4gICAqICAgICAgICAgIChleGNsdWRpbmcgbm9kZSBtZWFucyBleGNsdWRpbmcgaXQncyBjaGlsZHJlbiBhcyB3ZWxsKS4gTm90IGNhbGxlZCBvbiB0aGUgcm9vdCBub2RlLlxyXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0aW9ucy5iZ2NvbG9yXSAtIGNvbG9yIGZvciB0aGUgYmFja2dyb3VuZCwgYW55IHZhbGlkIENTUyBjb2xvciB2YWx1ZS5cclxuICAgKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMud2lkdGhdIC0gd2lkdGggdG8gYmUgYXBwbGllZCB0byBub2RlIGJlZm9yZSByZW5kZXJpbmcuXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLmhlaWdodF0gLSBoZWlnaHQgdG8gYmUgYXBwbGllZCB0byBub2RlIGJlZm9yZSByZW5kZXJpbmcuXHJcbiAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zLnN0eWxlXSAtIGFuIG9iamVjdCB3aG9zZSBwcm9wZXJ0aWVzIHRvIGJlIGNvcGllZCB0byBub2RlJ3Mgc3R5bGUgYmVmb3JlIHJlbmRlcmluZy5cclxuICAgKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMucXVhbGl0eV0gLSBhIE51bWJlciBiZXR3ZWVuIDAgYW5kIDEgaW5kaWNhdGluZyBpbWFnZSBxdWFsaXR5IChhcHBsaWNhYmxlIHRvIEpQRUcgb25seSksXHJcbiAgICAgICAgICAgICAgZGVmYXVsdHMgdG8gMS4wLlxyXG4gICAgKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMuaW1hZ2VQbGFjZWhvbGRlcl0gLSBkYXRhVVJMIHRvIHVzZSBhcyBhIHBsYWNlaG9sZGVyIGZvciBmYWlsZWQgaW1hZ2VzLCBkZWZhdWx0IGJlaGF2aW91ciBpcyB0byBmYWlsIGZhc3Qgb24gaW1hZ2VzIHdlIGNhbid0IGZldGNoXHJcbiAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMuY2FjaGVCdXN0XSAtIHNldCB0byB0cnVlIHRvIGNhY2hlIGJ1c3QgYnkgYXBwZW5kaW5nIHRoZSB0aW1lIHRvIHRoZSByZXF1ZXN0IHVybFxyXG4gICAgKiBAcmV0dXJuIHtQcm9taXNlfSAtIEEgcHJvbWlzZSB0aGF0IGlzIGZ1bGZpbGxlZCB3aXRoIGEgU1ZHIGltYWdlIGRhdGEgVVJMXHJcbiAgICAqICovXHJcbmZ1bmN0aW9uIHRvU3ZnKG5vZGUsIG9wdGlvbnMpIHtcclxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcclxuICBjb3B5T3B0aW9ucyhvcHRpb25zKTtcclxuICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG5vZGUpXHJcbiAgICAudGhlbihuZCA9PiBjbG9uZU5vZGUobmQsIG9wdGlvbnMuZmlsdGVyLCB0cnVlKSlcclxuICAgIC50aGVuKGVtYmVkRm9udHMpXHJcbiAgICAudGhlbihpbmxpbmVJbWFnZXMpXHJcbiAgICAudGhlbihhcHBseU9wdGlvbnMpXHJcbiAgICAudGhlbihjbG9uZSA9PlxyXG4gICAgICBtYWtlU3ZnRGF0YVVyaShjbG9uZSwgb3B0aW9ucy53aWR0aCB8fCBnZXRXaWR0aChub2RlKSwgb3B0aW9ucy5oZWlnaHQgfHwgZ2V0SGVpZ2h0KG5vZGUpKVxyXG4gICAgKTtcclxuXHJcbiAgZnVuY3Rpb24gYXBwbHlPcHRpb25zKGNsb25lKSB7XHJcbiAgICBpZiAob3B0aW9ucy5iZ2NvbG9yKSBjbG9uZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBvcHRpb25zLmJnY29sb3I7XHJcblxyXG4gICAgaWYgKG9wdGlvbnMud2lkdGgpIGNsb25lLnN0eWxlLndpZHRoID0gYCR7b3B0aW9ucy53aWR0aH1weGA7XHJcbiAgICBpZiAob3B0aW9ucy5oZWlnaHQpIGNsb25lLnN0eWxlLmhlaWdodCA9IGAke29wdGlvbnMuaGVpZ2h0fXB4YDtcclxuXHJcbiAgICBpZiAob3B0aW9ucy5zdHlsZSlcclxuICAgICAgT2JqZWN0LmtleXMob3B0aW9ucy5zdHlsZSkuZm9yRWFjaChwcm9wZXJ0eSA9PiB7XHJcbiAgICAgICAgY2xvbmUuc3R5bGVbcHJvcGVydHldID0gb3B0aW9ucy5zdHlsZVtwcm9wZXJ0eV07XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBjbG9uZTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0ge05vZGV9IG5vZGUgLSBUaGUgRE9NIE5vZGUgb2JqZWN0IHRvIHJlbmRlclxyXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIFJlbmRlcmluZyBvcHRpb25zLCBAc2VlIHtAbGluayB0b1N2Z31cclxuICogQHJldHVybiB7UHJvbWlzZX0gLSBBIHByb21pc2UgdGhhdCBpcyBmdWxmaWxsZWQgd2l0aCBhIFVpbnQ4QXJyYXkgY29udGFpbmluZyBSR0JBIHBpeGVsIGRhdGEuXHJcbiAqICovXHJcbmZ1bmN0aW9uIHRvUGl4ZWxEYXRhKG5vZGUsIG9wdGlvbnMpIHtcclxuICByZXR1cm4gZHJhdyhub2RlLCBvcHRpb25zIHx8IHt9KS50aGVuKFxyXG4gICAgY2FudmFzID0+IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpLmdldEltYWdlRGF0YSgwLCAwLCBnZXRXaWR0aChub2RlKSwgZ2V0SGVpZ2h0KG5vZGUpKS5kYXRhXHJcbiAgKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSB7Tm9kZX0gbm9kZSAtIFRoZSBET00gTm9kZSBvYmplY3QgdG8gcmVuZGVyXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gUmVuZGVyaW5nIG9wdGlvbnMsIEBzZWUge0BsaW5rIHRvU3ZnfVxyXG4gKiBAcmV0dXJuIHtQcm9taXNlfSAtIEEgcHJvbWlzZSB0aGF0IGlzIGZ1bGZpbGxlZCB3aXRoIGEgUE5HIGltYWdlIGRhdGEgVVJMXHJcbiAqICovXHJcbmZ1bmN0aW9uIHRvUG5nKG5vZGUsIG9wdGlvbnMpIHtcclxuICByZXR1cm4gZHJhdyhub2RlLCBvcHRpb25zIHx8IHt9KS50aGVuKGNhbnZhcyA9PiBjYW52YXMudG9EYXRhVVJMKCkpO1xyXG59XHJcblxyXG4vKipcclxuICogQHBhcmFtIHtOb2RlfSBub2RlIC0gVGhlIERPTSBOb2RlIG9iamVjdCB0byByZW5kZXJcclxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSBSZW5kZXJpbmcgb3B0aW9ucywgQHNlZSB7QGxpbmsgdG9Tdmd9XHJcbiAqIEByZXR1cm4ge1Byb21pc2V9IC0gQSBwcm9taXNlIHRoYXQgaXMgZnVsZmlsbGVkIHdpdGggYSBKUEVHIGltYWdlIGRhdGEgVVJMXHJcbiAqICovXHJcbmZ1bmN0aW9uIHRvSnBlZyhub2RlLCBvcHRpb25zKSB7XHJcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XHJcbiAgcmV0dXJuIGRyYXcobm9kZSwgb3B0aW9ucykudGhlbihjYW52YXMgPT4gY2FudmFzLnRvRGF0YVVSTCgnaW1hZ2UvanBlZycsIG9wdGlvbnMucXVhbGl0eSB8fCAxLjApKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSB7Tm9kZX0gbm9kZSAtIFRoZSBET00gTm9kZSBvYmplY3QgdG8gcmVuZGVyXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gUmVuZGVyaW5nIG9wdGlvbnMsIEBzZWUge0BsaW5rIHRvU3ZnfVxyXG4gKiBAcmV0dXJuIHtQcm9taXNlfSAtIEEgcHJvbWlzZSB0aGF0IGlzIGZ1bGZpbGxlZCB3aXRoIGEgUE5HIGltYWdlIGJsb2JcclxuICogKi9cclxuZnVuY3Rpb24gdG9CbG9iKG5vZGUsIG9wdGlvbnMpIHtcclxuICByZXR1cm4gZHJhdyhub2RlLCBvcHRpb25zIHx8IHt9KS50aGVuKGNhbnZhc1RvQmxvYik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvcHlPcHRpb25zKG9wdGlvbnMpIHtcclxuICAvLyBDb3B5IG9wdGlvbnMgdG8gaW1wbCBvcHRpb25zIGZvciB1c2UgaW4gaW1wbFxyXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbWFnZVBsYWNlaG9sZGVyID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgZG9tdG9pbWFnZS5pbXBsLm9wdGlvbnMuaW1hZ2VQbGFjZWhvbGRlciA9IGRlZmF1bHRPcHRpb25zLmltYWdlUGxhY2Vob2xkZXI7XHJcbiAgfSBlbHNlIHtcclxuICAgIGRvbXRvaW1hZ2UuaW1wbC5vcHRpb25zLmltYWdlUGxhY2Vob2xkZXIgPSBvcHRpb25zLmltYWdlUGxhY2Vob2xkZXI7XHJcbiAgfVxyXG5cclxuICBpZiAodHlwZW9mIG9wdGlvbnMuY2FjaGVCdXN0ID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgZG9tdG9pbWFnZS5pbXBsLm9wdGlvbnMuY2FjaGVCdXN0ID0gZGVmYXVsdE9wdGlvbnMuY2FjaGVCdXN0O1xyXG4gIH0gZWxzZSB7XHJcbiAgICBkb210b2ltYWdlLmltcGwub3B0aW9ucy5jYWNoZUJ1c3QgPSBvcHRpb25zLmNhY2hlQnVzdDtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRyYXcoZG9tTm9kZSwgb3B0aW9ucykge1xyXG4gIHJldHVybiB0b1N2Zyhkb21Ob2RlLCBvcHRpb25zKVxyXG4gICAgLnRoZW4obWFrZUltYWdlKVxyXG4gICAgLnRoZW4oZGVsYXkoMTAwKSlcclxuICAgIC50aGVuKGltYWdlID0+IHtcclxuICAgICAgY29uc3QgY2FudmFzID0gbmV3Q2FudmFzKGRvbU5vZGUpO1xyXG4gICAgICBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKS5kcmF3SW1hZ2UoaW1hZ2UsIDAsIDApO1xyXG4gICAgICByZXR1cm4gY2FudmFzO1xyXG4gICAgfSk7XHJcblxyXG4gIGZ1bmN0aW9uIG5ld0NhbnZhcyhkTm9kZSkge1xyXG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcbiAgICBjYW52YXMud2lkdGggPSBvcHRpb25zLndpZHRoIHx8IGdldFdpZHRoKGROb2RlKTtcclxuICAgIGNhbnZhcy5oZWlnaHQgPSBvcHRpb25zLmhlaWdodCB8fCBnZXRIZWlnaHQoZE5vZGUpO1xyXG5cclxuICAgIGlmIChvcHRpb25zLmJnY29sb3IpIHtcclxuICAgICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBvcHRpb25zLmJnY29sb3I7XHJcbiAgICAgIGN0eC5maWxsUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBjYW52YXM7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjbG9uZU5vZGUobm9kZSwgZmlsdGVyLCByb290KSB7XHJcbiAgaWYgKCFyb290ICYmIGZpbHRlciAmJiAhZmlsdGVyKG5vZGUpKSB7XHJcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG5vZGUpXHJcbiAgICAudGhlbihtYWtlTm9kZUNvcHkpXHJcbiAgICAudGhlbihjbG9uZSA9PiBjbG9uZUNoaWxkcmVuKG5vZGUsIGNsb25lLCBmaWx0ZXIpKVxyXG4gICAgLnRoZW4oY2xvbmUgPT4gcHJvY2Vzc0Nsb25lKG5vZGUsIGNsb25lKSk7XHJcblxyXG4gIGZ1bmN0aW9uIG1ha2VOb2RlQ29weShuZCkge1xyXG4gICAgaWYgKG5kIGluc3RhbmNlb2Ygd2luZG93LkhUTUxDYW52YXNFbGVtZW50KSB7XHJcbiAgICAgIHJldHVybiBtYWtlSW1hZ2UobmQudG9EYXRhVVJMKCkpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG5kLmNsb25lTm9kZShmYWxzZSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjbG9uZUNoaWxkcmVuSW5PcmRlcihwYXJlbnQsIGFyckNoaWxkcmVuLCBmbHQpIHtcclxuICAgIGxldCBkb25lID0gUHJvbWlzZS5yZXNvbHZlKCk7XHJcbiAgICBhcnJDaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IHtcclxuICAgICAgZG9uZSA9IGRvbmVcclxuICAgICAgICAudGhlbigoKSA9PiBjbG9uZU5vZGUoY2hpbGQsIGZsdCkpXHJcbiAgICAgICAgLnRoZW4oY2hpbGRDbG9uZSA9PiB7XHJcbiAgICAgICAgICBpZiAoY2hpbGRDbG9uZSkge1xyXG4gICAgICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoY2hpbGRDbG9uZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBkb25lO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gY2xvbmVDaGlsZHJlbihvcmlnaW5hbCwgY2xvbmUsIGZsdCkge1xyXG4gICAgY29uc3QgY2hpbGRyZW4gPSBvcmlnaW5hbC5jaGlsZE5vZGVzO1xyXG4gICAgaWYgKGNoaWxkcmVuLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGNsb25lKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gY2xvbmVDaGlsZHJlbkluT3JkZXIoY2xvbmUsIGFzQXJyYXkoY2hpbGRyZW4pLCBmbHQpLnRoZW4oKCkgPT4gY2xvbmUpO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZW1iZWRGb250cyhub2RlKSB7XHJcbiAgcmV0dXJuIGZvbnRGYWNlcy5yZXNvbHZlQWxsKCkudGhlbihjc3NUZXh0ID0+IHtcclxuICAgIGNvbnN0IHN0eWxlTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XHJcbiAgICBub2RlLmFwcGVuZENoaWxkKHN0eWxlTm9kZSk7XHJcbiAgICBzdHlsZU5vZGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzVGV4dCkpO1xyXG4gICAgcmV0dXJuIG5vZGU7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlubGluZUltYWdlcyhub2RlKSB7XHJcbiAgcmV0dXJuIGltYWdlcy5pbmxpbmVBbGwobm9kZSkudGhlbigoKSA9PiBub2RlKTtcclxufVxyXG5cclxuZnVuY3Rpb24gbWFrZVN2Z0RhdGFVcmkobm9kZSwgd2lkdGgsIGhlaWdodCkge1xyXG4gIHJldHVybiBQcm9taXNlLnJlc29sdmUobm9kZSkudGhlbihuZCA9PiB7XHJcbiAgICBuZC5zZXRBdHRyaWJ1dGUoJ3htbG5zJywgJ2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwnKTtcclxuICAgIGNvbnN0IHNlcmlhbGl6ZWRTdHJpbmcgPSBuZXcgd2luZG93LlhNTFNlcmlhbGl6ZXIoKS5zZXJpYWxpemVUb1N0cmluZyhuZCk7XHJcblxyXG4gICAgY29uc3QgeGh0bWwgPSBlc2NhcGVYaHRtbChzZXJpYWxpemVkU3RyaW5nKTtcclxuICAgIGNvbnN0IGZvcmVpZ25PYmplY3QgPSBgPGZvcmVpZ25PYmplY3QgeD1cIjBcIiB5PVwiMFwiIHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjEwMCVcIj4ke3hodG1sfTwvZm9yZWlnbk9iamVjdD5gO1xyXG4gICAgY29uc3Qgc3ZnU3RyID0gYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiJHt3aWR0aH1cIiBoZWlnaHQ9XCIke2hlaWdodH1cIj4ke2ZvcmVpZ25PYmplY3R9PC9zdmc+YDtcclxuXHJcbiAgICAvLyBPcHRpbWl6aW5nIFNWR3MgaW4gZGF0YSBVUklzXHJcbiAgICAvLyBzZWUgaHR0cHM6Ly9jb2RlcGVuLmlvL3RpZ3QvcG9zdC9vcHRpbWl6aW5nLXN2Z3MtaW4tZGF0YS11cmlzXHJcbiAgICAvLyB0aGUgYmVzdCB3YXkgb2YgZW5jb2RpbmcgU1ZHIGluIGEgZGF0YTogVVJJIGlzIGRhdGE6aW1hZ2Uvc3ZnK3htbCxbYWN0dWFsIGRhdGFdLlxyXG4gICAgLy8gV2UgZG9u4oCZdCBuZWVkIHRoZSA7Y2hhcnNldD11dGYtOCBwYXJhbWV0ZXIgYmVjYXVzZSB0aGUgZ2l2ZW4gU1ZHIGlzIEFTQ0lJLlxyXG4gICAgcmV0dXJuIHN2Z1RvTWluaURhdGFVUkkoc3ZnU3RyKTtcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gbmV3SW5saW5lcigpIHtcclxuICBjb25zdCBVUkxfUkVHRVggPSAvdXJsXFwoWydcIl0/KFteJ1wiXSs/KVsnXCJdP1xcKS9nO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgaW5saW5lQWxsLFxyXG4gICAgc2hvdWxkUHJvY2VzcyxcclxuICAgIGltcGw6IHtcclxuICAgICAgcmVhZFVybHMsXHJcbiAgICAgIGlubGluZVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGZ1bmN0aW9uIHNob3VsZFByb2Nlc3Moc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gc3RyaW5nLnNlYXJjaChVUkxfUkVHRVgpICE9PSAtMTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHJlYWRVcmxzKHN0cmluZykge1xyXG4gICAgY29uc3QgcmVzdWx0ID0gW107XHJcbiAgICBsZXQgbWF0Y2g7XHJcbiAgICB3aGlsZSAoKG1hdGNoID0gVVJMX1JFR0VYLmV4ZWMoc3RyaW5nKSkgIT09IG51bGwpIHtcclxuICAgICAgcmVzdWx0LnB1c2gobWF0Y2hbMV0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdC5maWx0ZXIodXJsID0+IHtcclxuICAgICAgcmV0dXJuICFpc0RhdGFVcmwodXJsKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gdXJsQXNSZWdleCh1cmwwKSB7XHJcbiAgICByZXR1cm4gbmV3IFJlZ0V4cChgKHVybFxcXFwoW1xcJ1wiXT8pKCR7ZXNjYXBlKHVybDApfSkoW1xcJ1wiXT9cXFxcKSlgLCAnZycpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaW5saW5lKHN0cmluZywgdXJsLCBiYXNlVXJsLCBnZXQpIHtcclxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodXJsKVxyXG4gICAgICAudGhlbih1bCA9PiAoYmFzZVVybCA/IHJlc29sdmVVcmwodWwsIGJhc2VVcmwpIDogdWwpKVxyXG4gICAgICAudGhlbih1bCA9PiAodHlwZW9mIGdldCA9PT0gJ2Z1bmN0aW9uJyA/IGdldCh1bCkgOiBnZXRBbmRFbmNvZGUodWwsIGRvbXRvaW1hZ2UuaW1wbC5vcHRpb25zKSkpXHJcbiAgICAgIC50aGVuKGRhdGEgPT4gZGF0YUFzVXJsKGRhdGEsIG1pbWVUeXBlKHVybCkpKVxyXG4gICAgICAudGhlbihkYXRhVXJsID0+IHN0cmluZy5yZXBsYWNlKHVybEFzUmVnZXgodXJsKSwgYCQxJHtkYXRhVXJsfSQzYCkpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaW5saW5lQWxsKHN0cmluZywgYmFzZVVybCwgZ2V0KSB7XHJcbiAgICBpZiAoIXNob3VsZFByb2Nlc3Moc3RyaW5nKSB8fCBpc1NyY0FzRGF0YVVybChzdHJpbmcpKSB7XHJcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoc3RyaW5nKTtcclxuICAgIH1cclxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoc3RyaW5nKVxyXG4gICAgICAudGhlbihyZWFkVXJscylcclxuICAgICAgLnRoZW4odXJscyA9PiB7XHJcbiAgICAgICAgbGV0IGRvbmUgPSBQcm9taXNlLnJlc29sdmUoc3RyaW5nKTtcclxuICAgICAgICB1cmxzLmZvckVhY2godXJsID0+IHtcclxuICAgICAgICAgIGRvbmUgPSBkb25lLnRoZW4oc3RyID0+IGlubGluZShzdHIsIHVybCwgYmFzZVVybCwgZ2V0KSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIGRvbmU7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbmV3Rm9udEZhY2VzKCkge1xyXG4gIHJldHVybiB7XHJcbiAgICByZXNvbHZlQWxsLFxyXG4gICAgaW1wbDoge3JlYWRBbGx9XHJcbiAgfTtcclxuXHJcbiAgZnVuY3Rpb24gcmVzb2x2ZUFsbCgpIHtcclxuICAgIHJldHVybiByZWFkQWxsKClcclxuICAgICAgLnRoZW4od2ViRm9udHMgPT4ge1xyXG4gICAgICAgIHJldHVybiBQcm9taXNlLmFsbCh3ZWJGb250cy5tYXAod2ViRm9udCA9PiB3ZWJGb250LnJlc29sdmUoKSkpO1xyXG4gICAgICB9KVxyXG4gICAgICAudGhlbihjc3NTdHJpbmdzID0+IGNzc1N0cmluZ3Muam9pbignXFxuJykpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcmVhZEFsbCgpIHtcclxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoYXNBcnJheShkb2N1bWVudC5zdHlsZVNoZWV0cykpXHJcbiAgICAgIC50aGVuKGxvYWRFeHRlcm5hbFN0eWxlU2hlZXRzKVxyXG4gICAgICAudGhlbihnZXRDc3NSdWxlcylcclxuICAgICAgLnRoZW4oc2VsZWN0V2ViRm9udFJ1bGVzKVxyXG4gICAgICAudGhlbihydWxlcyA9PiBydWxlcy5tYXAobmV3V2ViRm9udCkpO1xyXG5cclxuICAgIGZ1bmN0aW9uIHNlbGVjdFdlYkZvbnRSdWxlcyhjc3NSdWxlcykge1xyXG4gICAgICByZXR1cm4gY3NzUnVsZXNcclxuICAgICAgICAuZmlsdGVyKHJ1bGUgPT4gcnVsZS50eXBlID09PSB3aW5kb3cuQ1NTUnVsZS5GT05UX0ZBQ0VfUlVMRSlcclxuICAgICAgICAuZmlsdGVyKHJ1bGUgPT4gaW5saW5lci5zaG91bGRQcm9jZXNzKHJ1bGUuc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgnc3JjJykpKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBsb2FkRXh0ZXJuYWxTdHlsZVNoZWV0cyhzdHlsZVNoZWV0cykge1xyXG4gICAgICByZXR1cm4gUHJvbWlzZS5hbGwoXHJcbiAgICAgICAgc3R5bGVTaGVldHMubWFwKHNoZWV0ID0+IHtcclxuICAgICAgICAgIGlmIChzaGVldC5ocmVmKSB7XHJcbiAgICAgICAgICAgIC8vIGNsb3VkZm9udCBkb2Vzbid0IGhhdmUgYWxsb3cgb3JpZ2luIGhlYWRlciBwcm9wZXJseSBzZXRcclxuICAgICAgICAgICAgLy8gZXJyb3IgcmVzcG9uc2Ugd2lsbCByZW1haW4gaW4gY2FjaGVcclxuICAgICAgICAgICAgY29uc3QgY2FjaGUgPSBzaGVldC5ocmVmLmluY2x1ZGVzKCd1YmVyLWZvbnRzJykgPyAnbm8tY2FjaGUnIDogJ2RlZmF1bHQnO1xyXG4gICAgICAgICAgICByZXR1cm4gd2luZG93XHJcbiAgICAgICAgICAgICAgLmZldGNoKHNoZWV0LmhyZWYsIHtjcmVkZW50aWFsczogJ29taXQnLCBjYWNoZX0pXHJcbiAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UudGV4dCgpKVxyXG4gICAgICAgICAgICAgIC50aGVuKHNldEJhc2VIcmVmKHNoZWV0LmhyZWYpKVxyXG4gICAgICAgICAgICAgIC50aGVuKHRvU3R5bGVTaGVldClcclxuICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIEhhbmRsZSBhbnkgZXJyb3IgdGhhdCBvY2N1cnJlZCBpbiBhbnkgb2YgdGhlIHByZXZpb3VzXHJcbiAgICAgICAgICAgICAgICAvLyBwcm9taXNlcyBpbiB0aGUgY2hhaW4uIHN0eWxlc2hlZXQgZmFpbGVkIHRvIGxvYWQgc2hvdWxkIG5vdCBzdG9wXHJcbiAgICAgICAgICAgICAgICAvLyB0aGUgcHJvY2VzcywgaGVuY2UgcmVzdWx0IGluIG9ubHkgYSB3YXJuaW5nLCBpbnN0ZWFkIG9mIHJlamVjdFxyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKElNQUdFX0VYUE9SVF9FUlJPUlMuc3R5bGVTaGVldCwgc2hlZXQuaHJlZik7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShzaGVldCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgKTtcclxuXHJcbiAgICAgIGZ1bmN0aW9uIHNldEJhc2VIcmVmKGJhc2UpIHtcclxuICAgICAgICBiYXNlID0gYmFzZS5zcGxpdCgnLycpO1xyXG4gICAgICAgIGJhc2UucG9wKCk7XHJcbiAgICAgICAgYmFzZSA9IGJhc2Uuam9pbignLycpO1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBhZGRCYXNlSHJlZlRvVXJsKG1hdGNoLCBwMSkge1xyXG4gICAgICAgICAgY29uc3QgdXJsID0gL15odHRwL2kudGVzdChwMSkgPyBwMSA6IGNvbmNhdEFuZFJlc29sdmVVcmwoYmFzZSwgcDEpO1xyXG4gICAgICAgICAgcmV0dXJuIGB1cmwoJyR7dXJsfScpYDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFNvdXJjZTogaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY3NjIzMS8zNzg2ODU2XHJcbiAgICAgICAgZnVuY3Rpb24gY29uY2F0QW5kUmVzb2x2ZVVybCh1cmwsIGNvbmNhdCkge1xyXG4gICAgICAgICAgY29uc3QgdXJsMSA9IHVybC5zcGxpdCgnLycpO1xyXG4gICAgICAgICAgY29uc3QgdXJsMiA9IGNvbmNhdC5zcGxpdCgnLycpO1xyXG4gICAgICAgICAgY29uc3QgdXJsMyA9IFtdO1xyXG4gICAgICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSB1cmwxLmxlbmd0aDsgaSA8IGw7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAodXJsMVtpXSA9PT0gJy4uJykge1xyXG4gICAgICAgICAgICAgIHVybDMucG9wKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodXJsMVtpXSAhPT0gJy4nKSB7XHJcbiAgICAgICAgICAgICAgdXJsMy5wdXNoKHVybDFbaV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBmb3IgKGxldCBpID0gMCwgbCA9IHVybDIubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh1cmwyW2ldID09PSAnLi4nKSB7XHJcbiAgICAgICAgICAgICAgdXJsMy5wb3AoKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh1cmwyW2ldICE9PSAnLicpIHtcclxuICAgICAgICAgICAgICB1cmwzLnB1c2godXJsMltpXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldHVybiB1cmwzLmpvaW4oJy8nKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0ZXh0ID0+IHtcclxuICAgICAgICAgIHJldHVybiBpc1NyY0FzRGF0YVVybCh0ZXh0KVxyXG4gICAgICAgICAgICA/IHRleHRcclxuICAgICAgICAgICAgOiB0ZXh0LnJlcGxhY2UoL3VybFxcKFsnXCJdPyhbXidcIl0rPylbJ1wiXT9cXCkvZywgYWRkQmFzZUhyZWZUb1VybCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG5cclxuICAgICAgZnVuY3Rpb24gdG9TdHlsZVNoZWV0KHRleHQpIHtcclxuICAgICAgICBjb25zdCBkb2MgPSBkb2N1bWVudC5pbXBsZW1lbnRhdGlvbi5jcmVhdGVIVE1MRG9jdW1lbnQoJycpO1xyXG4gICAgICAgIGNvbnN0IHN0eWxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XHJcblxyXG4gICAgICAgIHN0eWxlRWxlbWVudC50ZXh0Q29udGVudCA9IHRleHQ7XHJcbiAgICAgICAgZG9jLmJvZHkuYXBwZW5kQ2hpbGQoc3R5bGVFbGVtZW50KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHN0eWxlRWxlbWVudC5zaGVldDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldENzc1J1bGVzKHN0eWxlU2hlZXRzKSB7XHJcbiAgICAgIGNvbnN0IGNzc1J1bGVzID0gW107XHJcbiAgICAgIHN0eWxlU2hlZXRzLmZvckVhY2goc2hlZXQgPT4ge1xyXG4gICAgICAgIC8vIHRyeS4uLmNhdGNoIGJlY2F1c2UgYnJvd3NlciBtYXkgbm90IGFibGUgdG8gZW51bWVyYXRlIHJ1bGVzIGZvciBjcm9zcy1kb21haW4gc2hlZXRzXHJcbiAgICAgICAgaWYgKCFzaGVldCkge1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgcnVsZXM7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIHJ1bGVzID0gc2hlZXQucnVsZXMgfHwgc2hlZXQuY3NzUnVsZXM7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coYCdDYW4ndCByZWFkIHRoZSBjc3MgcnVsZXMgb2Y6ICR7c2hlZXQuaHJlZn1gLCBlKTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChydWxlcyAmJiB0eXBlb2YgcnVsZXMgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBhc0FycmF5KHJ1bGVzIHx8IFtdKS5mb3JFYWNoKGNzc1J1bGVzLnB1c2guYmluZChjc3NSdWxlcykpO1xyXG4gICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgRXJyb3Igd2hpbGUgcmVhZGluZyBDU1MgcnVsZXMgZnJvbSAke3NoZWV0LmhyZWZ9YCwgZSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJ2dldENzc1J1bGVzIGNhbiBub3QgZmluZCBjc3NSdWxlcycpO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICByZXR1cm4gY3NzUnVsZXM7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gbmV3V2ViRm9udCh3ZWJGb250UnVsZSkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHJlc29sdmU6ICgpID0+IHtcclxuICAgICAgICAgIGNvbnN0IGJhc2VVcmwgPSAod2ViRm9udFJ1bGUucGFyZW50U3R5bGVTaGVldCB8fCB7fSkuaHJlZjtcclxuICAgICAgICAgIHJldHVybiBpbmxpbmVyLmlubGluZUFsbCh3ZWJGb250UnVsZS5jc3NUZXh0LCBiYXNlVXJsKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNyYzogKCkgPT4gd2ViRm9udFJ1bGUuc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgnc3JjJylcclxuICAgICAgfTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG5ld0ltYWdlcygpIHtcclxuICByZXR1cm4ge1xyXG4gICAgaW5saW5lQWxsLFxyXG4gICAgaW1wbDoge1xyXG4gICAgICBuZXdJbWFnZVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGZ1bmN0aW9uIG5ld0ltYWdlKGVsZW1lbnQpIHtcclxuICAgIGZ1bmN0aW9uIGlubGluZShnZXQpIHtcclxuICAgICAgaWYgKGVsZW1lbnQuc3JjKSB7XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZWxlbWVudC5zcmMpXHJcbiAgICAgICAgLnRoZW4odWwgPT5cclxuICAgICAgICAgIHR5cGVvZiBnZXQgPT09ICdmdW5jdGlvbicgPyBnZXQodWwpIDogZ2V0QW5kRW5jb2RlKHVsLCBkb210b2ltYWdlLmltcGwub3B0aW9ucylcclxuICAgICAgICApXHJcbiAgICAgICAgLnRoZW4oZGF0YSA9PiBkYXRhQXNVcmwoZGF0YSwgbWltZVR5cGUoZWxlbWVudC5zcmMpKSlcclxuICAgICAgICAudGhlbihcclxuICAgICAgICAgIGRhdGFVcmwgPT5cclxuICAgICAgICAgICAgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgIGVsZW1lbnQub25sb2FkID0gcmVzb2x2ZTtcclxuICAgICAgICAgICAgICBlbGVtZW50Lm9uZXJyb3IgPSByZWplY3Q7XHJcbiAgICAgICAgICAgICAgZWxlbWVudC5zcmMgPSBkYXRhVXJsO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgaW5saW5lXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaW5saW5lQWxsKG5vZGUpIHtcclxuICAgIGlmICghKG5vZGUgaW5zdGFuY2VvZiBFbGVtZW50KSkge1xyXG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG5vZGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBpbmxpbmVCYWNrZ3JvdW5kKG5vZGUpLnRoZW4oKCkgPT4ge1xyXG4gICAgICBpZiAobm9kZSBpbnN0YW5jZW9mIEhUTUxJbWFnZUVsZW1lbnQpIHtcclxuICAgICAgICByZXR1cm4gbmV3SW1hZ2Uobm9kZSkuaW5saW5lKCk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIFByb21pc2UuYWxsKGFzQXJyYXkobm9kZS5jaGlsZE5vZGVzKS5tYXAoY2hpbGQgPT4gaW5saW5lQWxsKGNoaWxkKSkpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZnVuY3Rpb24gaW5saW5lQmFja2dyb3VuZChuZCkge1xyXG4gICAgICBjb25zdCBiYWNrZ3JvdW5kID0gbmQuc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgnYmFja2dyb3VuZCcpO1xyXG5cclxuICAgICAgaWYgKCFiYWNrZ3JvdW5kKSB7XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShuZCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBpbmxpbmVyXHJcbiAgICAgICAgLmlubGluZUFsbChiYWNrZ3JvdW5kKVxyXG4gICAgICAgIC50aGVuKGlubGluZWQgPT4ge1xyXG4gICAgICAgICAgbmQuc3R5bGUuc2V0UHJvcGVydHkoJ2JhY2tncm91bmQnLCBpbmxpbmVkLCBuZC5zdHlsZS5nZXRQcm9wZXJ0eVByaW9yaXR5KCdiYWNrZ3JvdW5kJykpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oKCkgPT4gbmQpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZG9tdG9pbWFnZTtcclxuIl19