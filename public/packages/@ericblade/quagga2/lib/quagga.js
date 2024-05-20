(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 69);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var toPropertyKey = __webpack_require__(62);
function _defineProperty(obj, key, value) {
  key = toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
module.exports = _assertThisInitialized, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _getPrototypeOf(o);
}
module.exports = _getPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
module.exports = _classCallCheck, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var toPropertyKey = __webpack_require__(62);
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
module.exports = _createClass, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("gl-matrix");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(13)["default"];
var assertThisInitialized = __webpack_require__(1);
function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return assertThisInitialized(self);
}
module.exports = _possibleConstructorReturn, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(41);
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}
module.exports = _inherits, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// TODO(Babel 8): Remove this file.

var runtime = __webpack_require__(137)();
module.exports = runtime;

// Copied from https://github.com/facebook/regenerator/blob/main/packages/runtime/runtime.js#L736=
try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* eslint-disable no-param-reassign */

/* harmony default export */ __webpack_exports__["a"] = ({
  init: function init(arr, val) {
    arr.fill(val);
  },
  /**
   * IN-PLACE Shuffles the content of an array
   */
  shuffle: function shuffle(arr) {
    // Durstenfeld shuffle algorithm
    // https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
    for (var i = arr.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var _ref = [arr[j], arr[i]];
      arr[i] = _ref[0];
      arr[j] = _ref[1];
    }
    return arr;
  },
  toPointList: function toPointList(arr) {
    var rows = arr.reduce(function (p, n) {
      var row = "[".concat(n.join(','), "]");
      p.push(row);
      return p;
    }, []);
    return "[".concat(rows.join(',\r\n'), "]");
  },
  /**
   * returns the elements which's score is bigger than the threshold
   */
  // eslint-disable-next-line no-unused-vars
  threshold: function threshold(arr, _threshold, scoreFunc) {
    var queue = arr.reduce(function (prev, next) {
      if (scoreFunc.apply(arr, [next]) >= _threshold) {
        prev.push(next);
      }
      return prev;
    }, []);
    return queue;
  },
  maxIndex: function maxIndex(arr) {
    var max = 0;
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] > arr[max]) {
        max = i;
      }
    }
    return max;
  },
  max: function max(arr) {
    var max = 0;
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
    }
    return max;
  },
  sum: function sum(arr) {
    var length = arr.length;
    var sum = 0;
    while (length--) {
      sum += arr[length];
    }
    return sum;
  }
});

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var gl_matrix__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5);
/* harmony import */ var gl_matrix__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(gl_matrix__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _array_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9);
/* harmony import */ var _cv_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(12);







gl_matrix__WEBPACK_IMPORTED_MODULE_4__["glMatrix"].setMatrixArrayType(Array);
function assertNumberPositive(val) {
  if (val < 0) {
    throw new Error("expected positive number, received ".concat(val));
  }
}
var ImageWrapper = /*#__PURE__*/function () {
  // Represents a basic image combining the data and size. In addition, some methods for
  // manipulation are contained within.
  function ImageWrapper(size, data) {
    var ArrayType = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Uint8Array;
    var initialize = arguments.length > 3 ? arguments[3] : undefined;
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, ImageWrapper);
    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(this, "data", void 0);
    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(this, "size", void 0);
    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(this, "indexMapping", void 0);
    if (!data) {
      this.data = new ArrayType(size.x * size.y);
      if (initialize) {
        _array_helper__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].init(this.data, 0);
      }
    } else {
      this.data = data;
    }
    this.size = size;
  }

  // tests if a position is within the image, extended out by a border on each side
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(ImageWrapper, [{
    key: "inImageWithBorder",
    value: function inImageWithBorder(imgRef) {
      var border = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      assertNumberPositive(border);
      return imgRef.x >= 0 && imgRef.y >= 0 && imgRef.x < this.size.x + border * 2 && imgRef.y < this.size.y + border * 2;
    }

    // Copy from THIS ImageWrapper to the new imageWrapper parameter, starting at from, stopping at
    // end of new imageWrapper size.
  }, {
    key: "subImageAsCopy",
    value: function subImageAsCopy(imageWrapper, from) {
      assertNumberPositive(from.x);
      assertNumberPositive(from.y);
      var _imageWrapper$size = imageWrapper.size,
        sizeX = _imageWrapper$size.x,
        sizeY = _imageWrapper$size.y;
      for (var x = 0; x < sizeX; x++) {
        for (var y = 0; y < sizeY; y++) {
          // eslint-disable-next-line no-param-reassign
          imageWrapper.data[y * sizeX + x] = this.data[(from.y + y) * this.size.x + from.x + x];
        }
      }
      return imageWrapper;
      // TODO: this function really probably should call into ImageWrapper somewhere to make
      // sure that all of it's parameters are set properly, something like
      // ImageWrapper.UpdateFrom()
      // that might take a provided data and size, and make sure there's no invalid indexMapping
      // hanging around, and such.
    }

    // Retrieve a grayscale value at the given pixel position of the image
  }, {
    key: "get",
    value: function get(x, y) {
      return this.data[y * this.size.x + x];
    }

    // Retrieve a grayscale value at the given pixel position of the image (safe, whatever that
    // means)
  }, {
    key: "getSafe",
    value: function getSafe(x, y) {
      // cache indexMapping because if we're using it once, we'll probably need it a bunch more
      // too
      if (!this.indexMapping) {
        this.indexMapping = {
          x: [],
          y: []
        };
        for (var i = 0; i < this.size.x; i++) {
          this.indexMapping.x[i] = i;
          this.indexMapping.x[i + this.size.x] = i;
        }
        for (var _i = 0; _i < this.size.y; _i++) {
          this.indexMapping.y[_i] = _i;
          this.indexMapping.y[_i + this.size.y] = _i;
        }
      }
      return this.data[this.indexMapping.y[y + this.size.y] * this.size.x + this.indexMapping.x[x + this.size.x]];
    }

    // Sets a given pixel position in the image to the given grayscale value
  }, {
    key: "set",
    value: function set(x, y, value) {
      this.data[y * this.size.x + x] = value;
      delete this.indexMapping;
      return this;
    }

    // Sets the border of the image (1 pixel) to zero
  }, {
    key: "zeroBorder",
    value: function zeroBorder() {
      var _this$size = this.size,
        width = _this$size.x,
        height = _this$size.y;
      for (var i = 0; i < width; i++) {
        // eslint-disable-next-line no-multi-assign
        this.data[i] = this.data[(height - 1) * width + i] = 0;
      }
      for (var _i2 = 1; _i2 < height - 1; _i2++) {
        // eslint-disable-next-line no-multi-assign
        this.data[_i2 * width] = this.data[_i2 * width + (width - 1)] = 0;
      }
      delete this.indexMapping;
      return this;
    }

    // TODO: this function is entirely too large for me to reason out right at this moment that i'm handling
    // all the rest of it, so this is a verbatim copy of the javascript source, with only tweaks
    // necessary to get it to run, no thought put into it yet.
  }, {
    key: "moments",
    value: function moments(labelCount) {
      var data = this.data;
      var x;
      var y;
      var height = this.size.y;
      var width = this.size.x;
      var val;
      var ysq;
      var labelSum = [];
      var i;
      var label;
      var mu11;
      var mu02;
      var mu20;
      var x_;
      var y_;
      var tmp;
      var result = [];
      var PI = Math.PI;
      var PI_4 = PI / 4;
      if (labelCount <= 0) {
        return result;
      }
      for (i = 0; i < labelCount; i++) {
        labelSum[i] = {
          m00: 0,
          m01: 0,
          m10: 0,
          m11: 0,
          m02: 0,
          m20: 0,
          theta: 0,
          rad: 0
        };
      }
      for (y = 0; y < height; y++) {
        ysq = y * y;
        for (x = 0; x < width; x++) {
          val = data[y * width + x];
          if (val > 0) {
            label = labelSum[val - 1];
            label.m00 += 1;
            label.m01 += y;
            label.m10 += x;
            label.m11 += x * y;
            label.m02 += ysq;
            label.m20 += x * x;
          }
        }
      }
      for (i = 0; i < labelCount; i++) {
        label = labelSum[i];
        // eslint-disable-next-line no-restricted-globals
        if (!isNaN(label.m00) && label.m00 !== 0) {
          x_ = label.m10 / label.m00;
          y_ = label.m01 / label.m00;
          mu11 = label.m11 / label.m00 - x_ * y_;
          mu02 = label.m02 / label.m00 - y_ * y_;
          mu20 = label.m20 / label.m00 - x_ * x_;
          tmp = (mu02 - mu20) / (2 * mu11);
          tmp = 0.5 * Math.atan(tmp) + (mu11 >= 0 ? PI_4 : -PI_4) + PI;
          // eslint-disable-next-line no-mixed-operators
          label.theta = (tmp * 180 / PI + 90) % 180 - 90;
          if (label.theta < 0) {
            label.theta += 180;
          }
          label.rad = tmp > PI ? tmp - PI : tmp;
          label.vec = gl_matrix__WEBPACK_IMPORTED_MODULE_4__["vec2"].clone([Math.cos(tmp), Math.sin(tmp)]);
          result.push(label);
        }
      }
      return result;
    }

    // return a Uint8ClampedArray containing this grayscale image converted to RGBA form
  }, {
    key: "getAsRGBA",
    value: function getAsRGBA() {
      var scale = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1.0;
      var ret = new Uint8ClampedArray(4 * this.size.x * this.size.y);
      for (var y = 0; y < this.size.y; y++) {
        for (var x = 0; x < this.size.x; x++) {
          var pixel = y * this.size.x + x;
          var current = this.get(x, y) * scale;
          ret[pixel * 4 + 0] = current;
          ret[pixel * 4 + 1] = current;
          ret[pixel * 4 + 2] = current;
          ret[pixel * 4 + 3] = 255;
        }
      }
      return ret;
    }

    // Display this ImageWrapper in a given Canvas element at the specified scale
  }, {
    key: "show",
    value: function show(canvas) {
      var scale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1.0;
      console.warn('* imagewrapper show getcontext 2d');
      var ctx = canvas.getContext('2d');
      if (!ctx) {
        throw new Error('Unable to get canvas context');
      }
      var frame = ctx.getImageData(0, 0, canvas.width, canvas.height);
      var data = this.getAsRGBA(scale);
      // eslint-disable-next-line no-param-reassign
      canvas.width = this.size.x;
      // eslint-disable-next-line no-param-reassign
      canvas.height = this.size.y;
      var newFrame = new ImageData(data, frame.width, frame.height);
      ctx.putImageData(newFrame, 0, 0);
    }

    // Displays a specified SubImage area in a given canvas. This differs drastically from
    // creating a new SubImage and using it's show() method. Why? I don't have the answer to that
    // yet.  I suspect the HSV/RGB operations involved here are making it significantly different,
    // but until I can visualize these functions side by side, I'm just going to copy the existing
    // implementation.
  }, {
    key: "overlay",
    value: function overlay(canvas, inScale, from) {
      var adjustedScale = inScale < 0 || inScale > 360 ? 360 : inScale;
      var hsv = [0, 1, 1];
      var rgb = [0, 0, 0];
      var whiteRgb = [255, 255, 255];
      var blackRgb = [0, 0, 0];
      var result = [];
      console.warn('* imagewrapper overlay getcontext 2d');
      var ctx = canvas.getContext('2d');
      if (!ctx) {
        throw new Error('Unable to get canvas context');
      }
      var frame = ctx.getImageData(from.x, from.y, this.size.x, this.size.y);
      var data = frame.data;
      var length = this.data.length;
      while (length--) {
        hsv[0] = this.data[length] * adjustedScale;
        // eslint-disable-next-line no-nested-ternary
        result = hsv[0] <= 0 ? whiteRgb : hsv[0] >= 360 ? blackRgb : Object(_cv_utils__WEBPACK_IMPORTED_MODULE_6__["hsv2rgb"])(hsv, rgb);
        var pos = length * 4;
        var _result = result;
        var _result2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_result, 3);
        data[pos] = _result2[0];
        data[pos + 1] = _result2[1];
        data[pos + 2] = _result2[2];
        data[pos + 3] = 255;
      }
      ctx.putImageData(frame, from.x, from.y);
    }
  }]);
  return ImageWrapper;
}();
/* harmony default export */ __webpack_exports__["a"] = (ImageWrapper);

/***/ }),
/* 11 */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}
module.exports = _asyncToGenerator, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "imageRef", function() { return /* binding */ imageRef; });
__webpack_require__.d(__webpack_exports__, "computeIntegralImage2", function() { return /* binding */ computeIntegralImage2; });
__webpack_require__.d(__webpack_exports__, "computeIntegralImage", function() { return /* binding */ computeIntegralImage; });
__webpack_require__.d(__webpack_exports__, "thresholdImage", function() { return /* binding */ thresholdImage; });
__webpack_require__.d(__webpack_exports__, "computeHistogram", function() { return /* binding */ computeHistogram; });
__webpack_require__.d(__webpack_exports__, "sharpenLine", function() { return /* binding */ sharpenLine; });
__webpack_require__.d(__webpack_exports__, "determineOtsuThreshold", function() { return /* binding */ determineOtsuThreshold; });
__webpack_require__.d(__webpack_exports__, "otsuThreshold", function() { return /* binding */ otsuThreshold; });
__webpack_require__.d(__webpack_exports__, "computeBinaryImage", function() { return /* binding */ computeBinaryImage; });
__webpack_require__.d(__webpack_exports__, "cluster", function() { return /* binding */ cv_utils_cluster; });
__webpack_require__.d(__webpack_exports__, "Tracer", function() { return /* binding */ Tracer; });
__webpack_require__.d(__webpack_exports__, "DILATE", function() { return /* binding */ DILATE; });
__webpack_require__.d(__webpack_exports__, "ERODE", function() { return /* binding */ ERODE; });
__webpack_require__.d(__webpack_exports__, "dilate", function() { return /* binding */ dilate; });
__webpack_require__.d(__webpack_exports__, "erode", function() { return /* binding */ erode; });
__webpack_require__.d(__webpack_exports__, "subtract", function() { return /* binding */ subtract; });
__webpack_require__.d(__webpack_exports__, "bitwiseOr", function() { return /* binding */ bitwiseOr; });
__webpack_require__.d(__webpack_exports__, "countNonZero", function() { return /* binding */ countNonZero; });
__webpack_require__.d(__webpack_exports__, "topGeneric", function() { return /* binding */ topGeneric; });
__webpack_require__.d(__webpack_exports__, "grayArrayFromImage", function() { return /* binding */ grayArrayFromImage; });
__webpack_require__.d(__webpack_exports__, "grayArrayFromContext", function() { return /* binding */ grayArrayFromContext; });
__webpack_require__.d(__webpack_exports__, "grayAndHalfSampleFromCanvasData", function() { return /* binding */ grayAndHalfSampleFromCanvasData; });
__webpack_require__.d(__webpack_exports__, "computeGray", function() { return /* binding */ computeGray; });
__webpack_require__.d(__webpack_exports__, "loadImageArray", function() { return /* binding */ loadImageArray; });
__webpack_require__.d(__webpack_exports__, "halfSample", function() { return /* binding */ halfSample; });
__webpack_require__.d(__webpack_exports__, "hsv2rgb", function() { return /* binding */ hsv2rgb; });
__webpack_require__.d(__webpack_exports__, "_computeDivisors", function() { return /* binding */ _computeDivisors; });
__webpack_require__.d(__webpack_exports__, "calculatePatchSize", function() { return /* binding */ calculatePatchSize; });
__webpack_require__.d(__webpack_exports__, "_parseCSSDimensionValues", function() { return /* binding */ _parseCSSDimensionValues; });
__webpack_require__.d(__webpack_exports__, "_dimensionsConverters", function() { return /* binding */ _dimensionsConverters; });
__webpack_require__.d(__webpack_exports__, "computeImageArea", function() { return /* binding */ computeImageArea; });

// EXTERNAL MODULE: external "gl-matrix"
var external_gl_matrix_ = __webpack_require__(5);

// EXTERNAL MODULE: ./src/common/array_helper.ts
var array_helper = __webpack_require__(9);

// CONCATENATED MODULE: ./src/common/cluster.js
// TODO: cluster.js and cv_utils.js are pretty tightly intertwined, making for a complex conversion
// into typescript. be warned. :-)


external_gl_matrix_["glMatrix"].setMatrixArrayType(Array);
/**
 * Creates a cluster for grouping similar orientations of datapoints
 */
/* harmony default export */ var cluster = ({
  create: function create(point, threshold) {
    var points = [];
    var center = {
      rad: 0,
      vec: external_gl_matrix_["vec2"].clone([0, 0])
    };
    var pointMap = {};
    function _add(pointToAdd) {
      pointMap[pointToAdd.id] = pointToAdd;
      points.push(pointToAdd);
    }
    function updateCenter() {
      var i;
      var sum = 0;
      for (i = 0; i < points.length; i++) {
        sum += points[i].rad;
      }
      center.rad = sum / points.length;
      center.vec = external_gl_matrix_["vec2"].clone([Math.cos(center.rad), Math.sin(center.rad)]);
    }
    function init() {
      _add(point);
      updateCenter();
    }
    init();
    return {
      add: function add(pointToAdd) {
        if (!pointMap[pointToAdd.id]) {
          _add(pointToAdd);
          updateCenter();
        }
      },
      fits: function fits(otherPoint) {
        // check cosine similarity to center-angle
        var similarity = Math.abs(external_gl_matrix_["vec2"].dot(otherPoint.point.vec, center.vec));
        if (similarity > threshold) {
          return true;
        }
        return false;
      },
      getPoints: function getPoints() {
        return points;
      },
      getCenter: function getCenter() {
        return center;
      }
    };
  },
  createPoint: function createPoint(newPoint, id, property) {
    return {
      rad: newPoint[property],
      point: newPoint,
      id: id
    };
  }
});
// CONCATENATED MODULE: ./src/common/cv_utils.js
/* eslint-disable no-mixed-operators */
/* eslint-disable no-bitwise */



external_gl_matrix_["glMatrix"].setMatrixArrayType(Array);

/**
 * @param x x-coordinate
 * @param y y-coordinate
 * @return ImageReference {x,y} Coordinate
 */
function imageRef(x, y) {
  var that = {
    x: x,
    y: y,
    toVec2: function toVec2() {
      return external_gl_matrix_["vec2"].clone([this.x, this.y]);
    },
    toVec3: function toVec3() {
      return external_gl_matrix_["vec3"].clone([this.x, this.y, 1]);
    },
    round: function round() {
      this.x = this.x > 0.0 ? Math.floor(this.x + 0.5) : Math.floor(this.x - 0.5);
      this.y = this.y > 0.0 ? Math.floor(this.y + 0.5) : Math.floor(this.y - 0.5);
      return this;
    }
  };
  return that;
}

/**
 * Computes an integral image of a given grayscale image.
 * @param imageDataContainer {ImageDataContainer} the image to be integrated
 */
function computeIntegralImage2(imageWrapper, integralWrapper) {
  var imageData = imageWrapper.data;
  var width = imageWrapper.size.x;
  var height = imageWrapper.size.y;
  var integralImageData = integralWrapper.data;
  var sum = 0;
  var posA = 0;
  var posB = 0;
  var posC = 0;
  var posD = 0;
  var x;
  var y;

  // sum up first column
  posB = width;
  sum = 0;
  for (y = 1; y < height; y++) {
    sum += imageData[posA];
    integralImageData[posB] += sum;
    posA += width;
    posB += width;
  }
  posA = 0;
  posB = 1;
  sum = 0;
  for (x = 1; x < width; x++) {
    sum += imageData[posA];
    integralImageData[posB] += sum;
    posA++;
    posB++;
  }
  for (y = 1; y < height; y++) {
    posA = y * width + 1;
    posB = (y - 1) * width + 1;
    posC = y * width;
    posD = (y - 1) * width;
    for (x = 1; x < width; x++) {
      integralImageData[posA] += imageData[posA] + integralImageData[posB] + integralImageData[posC] - integralImageData[posD];
      posA++;
      posB++;
      posC++;
      posD++;
    }
  }
}
function computeIntegralImage(imageWrapper, integralWrapper) {
  var imageData = imageWrapper.data;
  var width = imageWrapper.size.x;
  var height = imageWrapper.size.y;
  var integralImageData = integralWrapper.data;
  var sum = 0;

  // sum up first row
  for (var i = 0; i < width; i++) {
    sum += imageData[i];
    integralImageData[i] = sum;
  }
  for (var v = 1; v < height; v++) {
    sum = 0;
    for (var u = 0; u < width; u++) {
      sum += imageData[v * width + u];
      integralImageData[v * width + u] = sum + integralImageData[(v - 1) * width + u];
    }
  }
}
function thresholdImage(imageWrapper, threshold, targetWrapper) {
  if (!targetWrapper) {
    // eslint-disable-next-line no-param-reassign
    targetWrapper = imageWrapper;
  }
  var imageData = imageWrapper.data;
  var length = imageData.length;
  var targetData = targetWrapper.data;
  while (length--) {
    targetData[length] = imageData[length] < threshold ? 1 : 0;
  }
}
function computeHistogram(imageWrapper, bitsPerPixel) {
  if (!bitsPerPixel) {
    // eslint-disable-next-line no-param-reassign
    bitsPerPixel = 8;
  }
  var imageData = imageWrapper.data;
  var length = imageData.length;
  var bitShift = 8 - bitsPerPixel;
  var bucketCnt = 1 << bitsPerPixel;
  var hist = new Int32Array(bucketCnt);
  while (length--) {
    hist[imageData[length] >> bitShift]++;
  }
  return hist;
}
function sharpenLine(line) {
  var i;
  var length = line.length;
  var left = line[0];
  var center = line[1];
  var right;
  for (i = 1; i < length - 1; i++) {
    right = line[i + 1];
    //  -1 4 -1 kernel
    // eslint-disable-next-line no-param-reassign
    line[i - 1] = center * 2 - left - right & 255;
    left = center;
    center = right;
  }
  return line;
}
function determineOtsuThreshold(imageWrapper) {
  var bitsPerPixel = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 8;
  var hist;
  var bitShift = 8 - bitsPerPixel;
  function px(init, end) {
    var sum = 0;
    for (var i = init; i <= end; i++) {
      sum += hist[i];
    }
    return sum;
  }
  function mx(init, end) {
    var sum = 0;
    for (var i = init; i <= end; i++) {
      sum += i * hist[i];
    }
    return sum;
  }
  function determineThreshold() {
    var vet = [0];
    var p1;
    var p2;
    var p12;
    var m1;
    var m2;
    var m12;
    var max = (1 << bitsPerPixel) - 1;
    hist = computeHistogram(imageWrapper, bitsPerPixel);
    for (var k = 1; k < max; k++) {
      p1 = px(0, k);
      p2 = px(k + 1, max);
      p12 = p1 * p2;
      if (p12 === 0) {
        p12 = 1;
      }
      m1 = mx(0, k) * p2;
      m2 = mx(k + 1, max) * p1;
      m12 = m1 - m2;
      vet[k] = m12 * m12 / p12;
    }
    return array_helper["a" /* default */].maxIndex(vet);
  }
  var threshold = determineThreshold();
  return threshold << bitShift;
}
function otsuThreshold(imageWrapper, targetWrapper) {
  var threshold = determineOtsuThreshold(imageWrapper);
  thresholdImage(imageWrapper, threshold, targetWrapper);
  return threshold;
}

// local thresholding
function computeBinaryImage(imageWrapper, integralWrapper, targetWrapper) {
  computeIntegralImage(imageWrapper, integralWrapper);
  if (!targetWrapper) {
    // eslint-disable-next-line no-param-reassign
    targetWrapper = imageWrapper;
  }
  var imageData = imageWrapper.data;
  var targetData = targetWrapper.data;
  var width = imageWrapper.size.x;
  var height = imageWrapper.size.y;
  var integralImageData = integralWrapper.data;
  var sum = 0;
  var v;
  var u;
  var kernel = 3;
  var A;
  var B;
  var C;
  var D;
  var avg;
  var size = (kernel * 2 + 1) * (kernel * 2 + 1);

  // clear out top & bottom-border
  for (v = 0; v <= kernel; v++) {
    for (u = 0; u < width; u++) {
      targetData[v * width + u] = 0;
      targetData[(height - 1 - v) * width + u] = 0;
    }
  }

  // clear out left & right border
  for (v = kernel; v < height - kernel; v++) {
    for (u = 0; u <= kernel; u++) {
      targetData[v * width + u] = 0;
      targetData[v * width + (width - 1 - u)] = 0;
    }
  }
  for (v = kernel + 1; v < height - kernel - 1; v++) {
    for (u = kernel + 1; u < width - kernel; u++) {
      A = integralImageData[(v - kernel - 1) * width + (u - kernel - 1)];
      B = integralImageData[(v - kernel - 1) * width + (u + kernel)];
      C = integralImageData[(v + kernel) * width + (u - kernel - 1)];
      D = integralImageData[(v + kernel) * width + (u + kernel)];
      sum = D - C - B + A;
      avg = sum / size;
      targetData[v * width + u] = imageData[v * width + u] > avg + 5 ? 0 : 1;
    }
  }
}
function cv_utils_cluster(points, threshold, property) {
  var i;
  var k;
  var thisCluster;
  var point;
  var clusters = [];
  if (!property) {
    // eslint-disable-next-line no-param-reassign
    property = 'rad';
  }
  function addToCluster(newPoint) {
    var found = false;
    for (k = 0; k < clusters.length; k++) {
      thisCluster = clusters[k];
      if (thisCluster.fits(newPoint)) {
        thisCluster.add(newPoint);
        found = true;
      }
    }
    return found;
  }

  // iterate over each cloud
  for (i = 0; i < points.length; i++) {
    point = cluster.createPoint(points[i], i, property);
    if (!addToCluster(point)) {
      clusters.push(cluster.create(point, threshold));
    }
  }
  return clusters;
}
var Tracer = {
  trace: function trace(points, vec) {
    var iteration;
    var maxIterations = 10;
    var top = [];
    var result = [];
    var centerPos = 0;
    var currentPos = 0;
    function trace(idx, forward) {
      var to;
      var toIdx;
      var predictedPos;
      var thresholdX = 1;
      var thresholdY = Math.abs(vec[1] / 10);
      var found = false;
      function match(pos, predicted) {
        if (pos.x > predicted.x - thresholdX && pos.x < predicted.x + thresholdX && pos.y > predicted.y - thresholdY && pos.y < predicted.y + thresholdY) {
          return true;
        }
        return false;
      }

      // check if the next index is within the vec specifications
      // if not, check as long as the threshold is met

      var from = points[idx];
      if (forward) {
        predictedPos = {
          x: from.x + vec[0],
          y: from.y + vec[1]
        };
      } else {
        predictedPos = {
          x: from.x - vec[0],
          y: from.y - vec[1]
        };
      }
      toIdx = forward ? idx + 1 : idx - 1;
      to = points[toIdx];
      // eslint-disable-next-line no-cond-assign
      while (to && (found = match(to, predictedPos)) !== true && Math.abs(to.y - from.y) < vec[1]) {
        toIdx = forward ? toIdx + 1 : toIdx - 1;
        to = points[toIdx];
      }
      return found ? toIdx : null;
    }
    for (iteration = 0; iteration < maxIterations; iteration++) {
      // randomly select point to start with
      centerPos = Math.floor(Math.random() * points.length);

      // trace forward
      top = [];
      currentPos = centerPos;
      top.push(points[currentPos]);
      // eslint-disable-next-line no-cond-assign
      while ((currentPos = trace(currentPos, true)) !== null) {
        top.push(points[currentPos]);
      }
      if (centerPos > 0) {
        currentPos = centerPos;
        // eslint-disable-next-line no-cond-assign
        while ((currentPos = trace(currentPos, false)) !== null) {
          top.push(points[currentPos]);
        }
      }
      if (top.length > result.length) {
        result = top;
      }
    }
    return result;
  }
};
var DILATE = 1;
var ERODE = 2;
function dilate(inImageWrapper, outImageWrapper) {
  var v;
  var u;
  var inImageData = inImageWrapper.data;
  var outImageData = outImageWrapper.data;
  var height = inImageWrapper.size.y;
  var width = inImageWrapper.size.x;
  var sum;
  var yStart1;
  var yStart2;
  var xStart1;
  var xStart2;
  for (v = 1; v < height - 1; v++) {
    for (u = 1; u < width - 1; u++) {
      yStart1 = v - 1;
      yStart2 = v + 1;
      xStart1 = u - 1;
      xStart2 = u + 1;
      sum = inImageData[yStart1 * width + xStart1] + inImageData[yStart1 * width + xStart2] + inImageData[v * width + u] + inImageData[yStart2 * width + xStart1] + inImageData[yStart2 * width + xStart2];
      outImageData[v * width + u] = sum > 0 ? 1 : 0;
    }
  }
}
function erode(inImageWrapper, outImageWrapper) {
  var v;
  var u;
  var inImageData = inImageWrapper.data;
  var outImageData = outImageWrapper.data;
  var height = inImageWrapper.size.y;
  var width = inImageWrapper.size.x;
  var sum;
  var yStart1;
  var yStart2;
  var xStart1;
  var xStart2;
  for (v = 1; v < height - 1; v++) {
    for (u = 1; u < width - 1; u++) {
      yStart1 = v - 1;
      yStart2 = v + 1;
      xStart1 = u - 1;
      xStart2 = u + 1;
      sum = inImageData[yStart1 * width + xStart1] + inImageData[yStart1 * width + xStart2] + inImageData[v * width + u] + inImageData[yStart2 * width + xStart1] + inImageData[yStart2 * width + xStart2];
      outImageData[v * width + u] = sum === 5 ? 1 : 0;
    }
  }
}
function subtract(aImageWrapper, bImageWrapper, resultImageWrapper) {
  if (!resultImageWrapper) {
    // eslint-disable-next-line no-param-reassign
    resultImageWrapper = aImageWrapper;
  }
  var length = aImageWrapper.data.length;
  var aImageData = aImageWrapper.data;
  var bImageData = bImageWrapper.data;
  var cImageData = resultImageWrapper.data;
  while (length--) {
    cImageData[length] = aImageData[length] - bImageData[length];
  }
}
function bitwiseOr(aImageWrapper, bImageWrapper, resultImageWrapper) {
  if (!resultImageWrapper) {
    // eslint-disable-next-line no-param-reassign
    resultImageWrapper = aImageWrapper;
  }
  var length = aImageWrapper.data.length;
  var aImageData = aImageWrapper.data;
  var bImageData = bImageWrapper.data;
  var cImageData = resultImageWrapper.data;
  while (length--) {
    cImageData[length] = aImageData[length] || bImageData[length];
  }
}
function countNonZero(imageWrapper) {
  var length = imageWrapper.data.length;
  var data = imageWrapper.data;
  var sum = 0;
  while (length--) {
    sum += data[length];
  }
  return sum;
}
function topGeneric(list, top, scoreFunc) {
  var i;
  var minIdx = 0;
  var min = 0;
  var queue = [];
  var score;
  var hit;
  var pos;
  for (i = 0; i < top; i++) {
    queue[i] = {
      score: 0,
      item: null
    };
  }
  for (i = 0; i < list.length; i++) {
    score = scoreFunc.apply(this, [list[i]]);
    if (score > min) {
      hit = queue[minIdx];
      hit.score = score;
      hit.item = list[i];
      min = Number.MAX_VALUE;
      for (pos = 0; pos < top; pos++) {
        if (queue[pos].score < min) {
          min = queue[pos].score;
          minIdx = pos;
        }
      }
    }
  }
  return queue;
}
function grayArrayFromImage(htmlImage, offsetX, ctx, array) {
  ctx.drawImage(htmlImage, offsetX, 0, htmlImage.width, htmlImage.height);
  var ctxData = ctx.getImageData(offsetX, 0, htmlImage.width, htmlImage.height).data;
  computeGray(ctxData, array);
}
function grayArrayFromContext(ctx, size, offset, array) {
  var ctxData = ctx.getImageData(offset.x, offset.y, size.x, size.y).data;
  computeGray(ctxData, array);
}
function grayAndHalfSampleFromCanvasData(canvasData, size, outArray) {
  var topRowIdx = 0;
  var bottomRowIdx = size.x;
  var endIdx = Math.floor(canvasData.length / 4);
  var outWidth = size.x / 2;
  var outImgIdx = 0;
  var inWidth = size.x;
  var i;
  while (bottomRowIdx < endIdx) {
    for (i = 0; i < outWidth; i++) {
      // eslint-disable-next-line no-param-reassign
      outArray[outImgIdx] = (0.299 * canvasData[topRowIdx * 4 + 0] + 0.587 * canvasData[topRowIdx * 4 + 1] + 0.114 * canvasData[topRowIdx * 4 + 2] + (0.299 * canvasData[(topRowIdx + 1) * 4 + 0] + 0.587 * canvasData[(topRowIdx + 1) * 4 + 1] + 0.114 * canvasData[(topRowIdx + 1) * 4 + 2]) + (0.299 * canvasData[bottomRowIdx * 4 + 0] + 0.587 * canvasData[bottomRowIdx * 4 + 1] + 0.114 * canvasData[bottomRowIdx * 4 + 2]) + (0.299 * canvasData[(bottomRowIdx + 1) * 4 + 0] + 0.587 * canvasData[(bottomRowIdx + 1) * 4 + 1] + 0.114 * canvasData[(bottomRowIdx + 1) * 4 + 2])) / 4;
      outImgIdx++;
      topRowIdx += 2;
      bottomRowIdx += 2;
    }
    topRowIdx += inWidth;
    bottomRowIdx += inWidth;
  }
}
function computeGray(imageData, outArray, config) {
  var l = imageData.length / 4 | 0;
  var singleChannel = config && config.singleChannel === true;
  if (singleChannel) {
    for (var i = 0; i < l; i++) {
      // eslint-disable-next-line no-param-reassign
      outArray[i] = imageData[i * 4 + 0];
    }
  } else {
    for (var _i = 0; _i < l; _i++) {
      // eslint-disable-next-line no-param-reassign
      outArray[_i] = 0.299 * imageData[_i * 4 + 0] + 0.587 * imageData[_i * 4 + 1] + 0.114 * imageData[_i * 4 + 2];
    }
  }
}
function loadImageArray(src, callback) {
  var canvas = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : document && document.createElement('canvas');
  var img = new Image();
  img.callback = callback;
  img.onload = function () {
    // eslint-disable-next-line no-param-reassign
    canvas.width = this.width;
    // eslint-disable-next-line no-param-reassign
    canvas.height = this.height;
    console.warn('* loadImageArray getContext 2d');
    var ctx = canvas.getContext('2d');
    ctx.drawImage(this, 0, 0);
    var array = new Uint8Array(this.width * this.height);
    ctx.drawImage(this, 0, 0);
    var _ctx$getImageData = ctx.getImageData(0, 0, this.width, this.height),
      data = _ctx$getImageData.data;
    computeGray(data, array);
    this.callback(array, {
      x: this.width,
      y: this.height
    }, this);
  };
  img.src = src;
}

/**
 * @param inImg {ImageWrapper} input image to be sampled
 * @param outImg {ImageWrapper} to be stored in
 */
function halfSample(inImgWrapper, outImgWrapper) {
  var inImg = inImgWrapper.data;
  var inWidth = inImgWrapper.size.x;
  var outImg = outImgWrapper.data;
  var topRowIdx = 0;
  var bottomRowIdx = inWidth;
  var endIdx = inImg.length;
  var outWidth = inWidth / 2;
  var outImgIdx = 0;
  while (bottomRowIdx < endIdx) {
    for (var i = 0; i < outWidth; i++) {
      outImg[outImgIdx] = Math.floor((inImg[topRowIdx] + inImg[topRowIdx + 1] + inImg[bottomRowIdx] + inImg[bottomRowIdx + 1]) / 4);
      outImgIdx++;
      topRowIdx += 2;
      bottomRowIdx += 2;
    }
    topRowIdx += inWidth;
    bottomRowIdx += inWidth;
  }
}
function hsv2rgb(hsv) {
  var rgb = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [0, 0, 0];
  var h = hsv[0];
  var s = hsv[1];
  var v = hsv[2];
  var c = v * s;
  var x = c * (1 - Math.abs(h / 60 % 2 - 1));
  var m = v - c;
  var r = 0;
  var g = 0;
  var b = 0;
  if (h < 60) {
    r = c;
    g = x;
  } else if (h < 120) {
    r = x;
    g = c;
  } else if (h < 180) {
    g = c;
    b = x;
  } else if (h < 240) {
    g = x;
    b = c;
  } else if (h < 300) {
    r = x;
    b = c;
  } else if (h < 360) {
    r = c;
    b = x;
  }
  // eslint-disable-next-line no-param-reassign
  rgb[0] = (r + m) * 255 | 0;
  // eslint-disable-next-line no-param-reassign
  rgb[1] = (g + m) * 255 | 0;
  // eslint-disable-next-line no-param-reassign
  rgb[2] = (b + m) * 255 | 0;
  return rgb;
}
function _computeDivisors(n) {
  var largeDivisors = [];
  var divisors = [];
  for (var i = 1; i < Math.sqrt(n) + 1; i++) {
    if (n % i === 0) {
      divisors.push(i);
      if (i !== n / i) {
        largeDivisors.unshift(Math.floor(n / i));
      }
    }
  }
  return divisors.concat(largeDivisors);
}
function _computeIntersection(arr1, arr2) {
  var i = 0;
  var j = 0;
  var result = [];
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] === arr2[j]) {
      result.push(arr1[i]);
      i++;
      j++;
    } else if (arr1[i] > arr2[j]) {
      j++;
    } else {
      i++;
    }
  }
  return result;
}
function calculatePatchSize(patchSize, imgSize) {
  var divisorsX = _computeDivisors(imgSize.x);
  var divisorsY = _computeDivisors(imgSize.y);
  var wideSide = Math.max(imgSize.x, imgSize.y);
  var common = _computeIntersection(divisorsX, divisorsY);
  var nrOfPatchesList = [8, 10, 15, 20, 32, 60, 80];
  var nrOfPatchesMap = {
    'x-small': 5,
    small: 4,
    medium: 3,
    large: 2,
    'x-large': 1
  };
  var nrOfPatchesIdx = nrOfPatchesMap[patchSize] || nrOfPatchesMap.medium;
  var nrOfPatches = nrOfPatchesList[nrOfPatchesIdx];
  var desiredPatchSize = Math.floor(wideSide / nrOfPatches);
  var optimalPatchSize;
  function findPatchSizeForDivisors(divisors) {
    var i = 0;
    var found = divisors[Math.floor(divisors.length / 2)];
    while (i < divisors.length - 1 && divisors[i] < desiredPatchSize) {
      i++;
    }
    if (i > 0) {
      if (Math.abs(divisors[i] - desiredPatchSize) > Math.abs(divisors[i - 1] - desiredPatchSize)) {
        found = divisors[i - 1];
      } else {
        found = divisors[i];
      }
    }
    if (desiredPatchSize / found < nrOfPatchesList[nrOfPatchesIdx + 1] / nrOfPatchesList[nrOfPatchesIdx] && desiredPatchSize / found > nrOfPatchesList[nrOfPatchesIdx - 1] / nrOfPatchesList[nrOfPatchesIdx]) {
      return {
        x: found,
        y: found
      };
    }
    return null;
  }
  optimalPatchSize = findPatchSizeForDivisors(common);
  if (!optimalPatchSize) {
    optimalPatchSize = findPatchSizeForDivisors(_computeDivisors(wideSide));
    if (!optimalPatchSize) {
      optimalPatchSize = findPatchSizeForDivisors(_computeDivisors(desiredPatchSize * nrOfPatches));
    }
  }
  return optimalPatchSize;
}
function _parseCSSDimensionValues(value) {
  var dimension = {
    value: parseFloat(value),
    unit: value.indexOf('%') === value.length - 1 ? '%' : '%'
  };
  return dimension;
}
var _dimensionsConverters = {
  top: function top(dimension, context) {
    return dimension.unit === '%' ? Math.floor(context.height * (dimension.value / 100)) : null;
  },
  right: function right(dimension, context) {
    return dimension.unit === '%' ? Math.floor(context.width - context.width * (dimension.value / 100)) : null;
  },
  bottom: function bottom(dimension, context) {
    return dimension.unit === '%' ? Math.floor(context.height - context.height * (dimension.value / 100)) : null;
  },
  left: function left(dimension, context) {
    return dimension.unit === '%' ? Math.floor(context.width * (dimension.value / 100)) : null;
  }
};
function computeImageArea(inputWidth, inputHeight, area) {
  var context = {
    width: inputWidth,
    height: inputHeight
  };
  var parsedArea = Object.keys(area).reduce(function (result, key) {
    var value = area[key];
    var parsed = _parseCSSDimensionValues(value);
    var calculated = _dimensionsConverters[key](parsed, context);

    // eslint-disable-next-line no-param-reassign
    result[key] = calculated;
    return result;
  }, {});
  return {
    sx: parsedArea.left,
    sy: parsedArea.top,
    sw: parsedArea.right - parsedArea.left,
    sh: parsedArea.bottom - parsedArea.top
  };
}

/***/ }),
/* 13 */
/***/ (function(module, exports) {

function _typeof(o) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(o);
}
module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var superPropBase = __webpack_require__(138);
function _get() {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    module.exports = _get = Reflect.get.bind(), module.exports.__esModule = true, module.exports["default"] = module.exports;
  } else {
    module.exports = _get = function _get(target, property, receiver) {
      var base = superPropBase(target, property);
      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);
      if (desc.get) {
        return desc.get.call(arguments.length < 3 ? target : receiver);
      }
      return desc.value;
    }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
  return _get.apply(this, arguments);
}
module.exports = _get, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 15 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}
module.exports = isObject;

/***/ }),
/* 16 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;
module.exports = isArray;

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// TODO: XYPosition should be an XYObject, but that breaks XYDefinition, which breaks drawPath() below.

// XYDefinition tells us which component of a given array or object is the "X" and which is the "Y".
// Usually this is 0 for X and 1 for Y, but might be used as 'x' for x and 'y' for Y.
/* harmony default export */ __webpack_exports__["a"] = ({
  drawRect: function drawRect(pos, size, ctx, style) {
    ctx.strokeStyle = style.color;
    ctx.fillStyle = style.color;
    ctx.lineWidth = style.lineWidth || 1;
    ctx.beginPath();
    ctx.strokeRect(pos.x, pos.y, size.x, size.y);
  },
  drawPath: function drawPath(path, def, ctx, style) {
    ctx.strokeStyle = style.color;
    ctx.fillStyle = style.color;
    ctx.lineWidth = style.lineWidth;
    ctx.beginPath();
    ctx.moveTo(path[0][def.x], path[0][def.y]);
    for (var j = 1; j < path.length; j++) {
      ctx.lineTo(path[j][def.x], path[j][def.y]);
    }
    ctx.closePath();
    ctx.stroke();
  },
  drawImage: function drawImage(imageData, size, ctx) {
    var canvasData = ctx.getImageData(0, 0, size.x, size.y);
    var data = canvasData.data;
    var canvasDataPos = data.length;
    var imageDataPos = imageData.length;
    if (canvasDataPos / imageDataPos !== 4) {
      return false;
    }
    while (imageDataPos--) {
      var value = imageData[imageDataPos];
      data[--canvasDataPos] = 255;
      data[--canvasDataPos] = value;
      data[--canvasDataPos] = value;
      data[--canvasDataPos] = value;
    }
    ctx.putImageData(canvasData, 0, 0);
    return true;
  }
});

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var baseMerge = __webpack_require__(70),
  createAssigner = __webpack_require__(125);

/**
 * This method is like `_.assign` except that it recursively merges own and
 * inherited enumerable string keyed properties of source objects into the
 * destination object. Source properties that resolve to `undefined` are
 * skipped if a destination value exists. Array and plain object properties
 * are merged recursively. Other objects and value types are overridden by
 * assignment. Source objects are applied from left to right. Subsequent
 * sources overwrite property assignments of previous sources.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 0.5.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var object = {
 *   'a': [{ 'b': 2 }, { 'd': 4 }]
 * };
 *
 * var other = {
 *   'a': [{ 'c': 3 }, { 'e': 5 }]
 * };
 *
 * _.merge(object, other);
 * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
 */
var merge = createAssigner(function (object, source, srcIndex) {
  baseMerge(object, source, srcIndex);
});
module.exports = merge;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(45);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();
module.exports = root;

/***/ }),
/* 20 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}
module.exports = isObjectLike;

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * http://www.codeproject.com/Tips/407172/Connected-Component-Labeling-and-Vectorization
 */
var Tracer = {
  searchDirections: [[0, 1], [1, 1], [1, 0], [1, -1], [0, -1], [-1, -1], [-1, 0], [-1, 1]],
  create: function create(imageWrapper, labelWrapper) {
    var imageData = imageWrapper.data;
    var labelData = labelWrapper.data;
    var searchDirections = this.searchDirections;
    var width = imageWrapper.size.x;
    var pos;
    function _trace(current, color, label, edgelabel) {
      var i;
      var y;
      var x;
      for (i = 0; i < searchDirections.length; i++) {
        y = current.cy + searchDirections[current.dir][0];
        x = current.cx + searchDirections[current.dir][1];
        pos = y * width + x;
        if (imageData[pos] === color && (labelData[pos] === 0 || labelData[pos] === label)) {
          labelData[pos] = label;
          current.cy = y;
          current.cx = x;
          return true;
        }
        if (labelData[pos] === 0) {
          labelData[pos] = edgelabel;
        }
        current.dir = (current.dir + 1) % 8;
      }
      return false;
    }
    function vertex2D(x, y, dir) {
      return {
        dir: dir,
        x: x,
        y: y,
        next: null,
        prev: null
      };
    }
    function _contourTracing(sy, sx, label, color, edgelabel) {
      var Fv = null;
      var Cv;
      var P;
      var ldir;
      var current = {
        cx: sx,
        cy: sy,
        dir: 0
      };
      if (_trace(current, color, label, edgelabel)) {
        Fv = vertex2D(sx, sy, current.dir);
        Cv = Fv;
        ldir = current.dir;
        P = vertex2D(current.cx, current.cy, 0);
        P.prev = Cv;
        Cv.next = P;
        P.next = null;
        Cv = P;
        var totalPixelCount = imageWrapper.size.x * imageWrapper.size.y;
        var pixelCounter = 0;
        do {
          current.dir = (current.dir + 6) % 8;
          _trace(current, color, label, edgelabel);
          if (ldir !== current.dir) {
            Cv.dir = current.dir;
            P = vertex2D(current.cx, current.cy, 0);
            P.prev = Cv;
            Cv.next = P;
            P.next = null;
            Cv = P;
          } else {
            Cv.dir = ldir;
            Cv.x = current.cx;
            Cv.y = current.cy;
          }
          ldir = current.dir;
        } while ((current.cx !== sx || current.cy !== sy) && ++pixelCounter < totalPixelCount);
        Fv.prev = Cv.prev;
        Cv.prev.next = Fv;
      }
      return Fv;
    }
    return {
      trace: function trace(current, color, label, edgelabel) {
        return _trace(current, color, label, edgelabel);
      },
      contourTracing: function contourTracing(sy, sx, label, color, edgelabel) {
        return _contourTracing(sy, sx, label, color, edgelabel);
      }
    };
  }
};
/* harmony default export */ __webpack_exports__["a"] = (Tracer);

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(27),
  getRawTag = __webpack_require__(83),
  objectToString = __webpack_require__(84);

/** `Object#toString` result references. */
var nullTag = '[object Null]',
  undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}
module.exports = baseGetTag;

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var gl_matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var gl_matrix__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(gl_matrix__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_image_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _common_cv_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12);
/* harmony import */ var _common_array_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9);
/* harmony import */ var _common_image_debug__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(17);
/* harmony import */ var _rasterizer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(67);
/* harmony import */ var _tracer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(21);
/* harmony import */ var _skeletonizer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(68);








gl_matrix__WEBPACK_IMPORTED_MODULE_0__["glMatrix"].setMatrixArrayType(Array);
var _config;
var _currentImageWrapper;
var _skelImageWrapper;
var _subImageWrapper;
var _labelImageWrapper;
var _patchGrid;
var _patchLabelGrid;
var _imageToPatchGrid;
var _binaryImageWrapper;
var _patchSize;
var _canvasContainer = {
  ctx: {
    binary: null
  },
  dom: {
    binary: null
  }
};
var _numPatches = {
  x: 0,
  y: 0
};
var _inputImageWrapper;
var _skeletonizer;
function initBuffers() {
  if (_config.halfSample) {
    _currentImageWrapper = new _common_image_wrapper__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]({
      // eslint-disable-next-line no-bitwise
      x: _inputImageWrapper.size.x / 2 | 0,
      // eslint-disable-next-line no-bitwise
      y: _inputImageWrapper.size.y / 2 | 0
    });
  } else {
    _currentImageWrapper = _inputImageWrapper;
  }
  _patchSize = Object(_common_cv_utils__WEBPACK_IMPORTED_MODULE_2__["calculatePatchSize"])(_config.patchSize, _currentImageWrapper.size);

  // eslint-disable-next-line no-bitwise
  _numPatches.x = _currentImageWrapper.size.x / _patchSize.x | 0;
  // eslint-disable-next-line no-bitwise
  _numPatches.y = _currentImageWrapper.size.y / _patchSize.y | 0;
  _binaryImageWrapper = new _common_image_wrapper__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"](_currentImageWrapper.size, undefined, Uint8Array, false);
  _labelImageWrapper = new _common_image_wrapper__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"](_patchSize, undefined, Array, true);
  var skeletonImageData = new ArrayBuffer(64 * 1024);
  _subImageWrapper = new _common_image_wrapper__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"](_patchSize, new Uint8Array(skeletonImageData, 0, _patchSize.x * _patchSize.y));
  _skelImageWrapper = new _common_image_wrapper__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"](_patchSize, new Uint8Array(skeletonImageData, _patchSize.x * _patchSize.y * 3, _patchSize.x * _patchSize.y), undefined, true);
  _skeletonizer = Object(_skeletonizer__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(typeof window !== 'undefined' ? window : typeof self !== 'undefined' ? self : global, {
    size: _patchSize.x
  }, skeletonImageData);
  _imageToPatchGrid = new _common_image_wrapper__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]({
    // eslint-disable-next-line no-bitwise
    x: _currentImageWrapper.size.x / _subImageWrapper.size.x | 0,
    // eslint-disable-next-line no-bitwise
    y: _currentImageWrapper.size.y / _subImageWrapper.size.y | 0
  }, undefined, Array, true);
  _patchGrid = new _common_image_wrapper__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"](_imageToPatchGrid.size, undefined, undefined, true);
  _patchLabelGrid = new _common_image_wrapper__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"](_imageToPatchGrid.size, undefined, Int32Array, true);
}
function initCanvas() {
  if (_config.useWorker || typeof document === 'undefined') {
    return;
  }
  _canvasContainer.dom.binary = document.createElement('canvas');
  _canvasContainer.dom.binary.className = 'binaryBuffer';
  if (false) {}
  var willReadFrequently = !!_config.willReadFrequently;
  console.warn('* initCanvas willReadFrequently', willReadFrequently, _config);
  _canvasContainer.ctx.binary = _canvasContainer.dom.binary.getContext('2d', {
    willReadFrequently: willReadFrequently
  });
  _canvasContainer.dom.binary.width = _binaryImageWrapper.size.x;
  _canvasContainer.dom.binary.height = _binaryImageWrapper.size.y;
}

/**
 * Creates a bounding box which encloses all the given patches
 * @returns {Array} The minimal bounding box
 */
function boxFromPatches(patches) {
  var overAvg;
  var i;
  var j;
  var patch;
  var transMat;
  var minx = _binaryImageWrapper.size.x;
  var miny = _binaryImageWrapper.size.y;
  var maxx = -_binaryImageWrapper.size.x;
  var maxy = -_binaryImageWrapper.size.y;
  var box;
  var scale;

  // draw all patches which are to be taken into consideration
  overAvg = 0;
  for (i = 0; i < patches.length; i++) {
    patch = patches[i];
    overAvg += patch.rad;
    if (false) {}
  }
  overAvg /= patches.length;
  overAvg = (overAvg * 180 / Math.PI + 90) % 180 - 90;
  if (overAvg < 0) {
    overAvg += 180;
  }
  overAvg = (180 - overAvg) * Math.PI / 180;
  transMat = gl_matrix__WEBPACK_IMPORTED_MODULE_0__["mat2"].copy(gl_matrix__WEBPACK_IMPORTED_MODULE_0__["mat2"].create(), [Math.cos(overAvg), Math.sin(overAvg), -Math.sin(overAvg), Math.cos(overAvg)]);

  // iterate over patches and rotate by angle
  for (i = 0; i < patches.length; i++) {
    patch = patches[i];
    for (j = 0; j < 4; j++) {
      gl_matrix__WEBPACK_IMPORTED_MODULE_0__["vec2"].transformMat2(patch.box[j], patch.box[j], transMat);
    }
    if (false) {}
  }

  // find bounding box
  for (i = 0; i < patches.length; i++) {
    patch = patches[i];
    for (j = 0; j < 4; j++) {
      if (patch.box[j][0] < minx) {
        minx = patch.box[j][0];
      }
      if (patch.box[j][0] > maxx) {
        maxx = patch.box[j][0];
      }
      if (patch.box[j][1] < miny) {
        miny = patch.box[j][1];
      }
      if (patch.box[j][1] > maxy) {
        maxy = patch.box[j][1];
      }
    }
  }
  box = [[minx, miny], [maxx, miny], [maxx, maxy], [minx, maxy]];
  if (false) {}
  scale = _config.halfSample ? 2 : 1;
  // reverse rotation;
  transMat = gl_matrix__WEBPACK_IMPORTED_MODULE_0__["mat2"].invert(transMat, transMat);
  for (j = 0; j < 4; j++) {
    gl_matrix__WEBPACK_IMPORTED_MODULE_0__["vec2"].transformMat2(box[j], box[j], transMat);
  }
  if (false) {}
  for (j = 0; j < 4; j++) {
    gl_matrix__WEBPACK_IMPORTED_MODULE_0__["vec2"].scale(box[j], box[j], scale);
  }
  return box;
}

/**
 * Creates a binary image of the current image
 */
function binarizeImage() {
  Object(_common_cv_utils__WEBPACK_IMPORTED_MODULE_2__["otsuThreshold"])(_currentImageWrapper, _binaryImageWrapper);
  _binaryImageWrapper.zeroBorder();
  if (false) {}
}

/**
 * Iterate over the entire image
 * extract patches
 */
function findPatches() {
  var i;
  var j;
  var x;
  var y;
  var moments;
  var patchesFound = [];
  var rasterizer;
  var rasterResult;
  var patch;
  for (i = 0; i < _numPatches.x; i++) {
    for (j = 0; j < _numPatches.y; j++) {
      x = _subImageWrapper.size.x * i;
      y = _subImageWrapper.size.y * j;

      // seperate parts
      skeletonize(x, y);

      // Rasterize, find individual bars
      _skelImageWrapper.zeroBorder();
      _common_array_helper__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].init(_labelImageWrapper.data, 0);
      rasterizer = _rasterizer__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].create(_skelImageWrapper, _labelImageWrapper);
      rasterResult = rasterizer.rasterize(0);
      if (false) {}

      // calculate moments from the skeletonized patch
      moments = _labelImageWrapper.moments(rasterResult.count);

      // extract eligible patches
      patchesFound = patchesFound.concat(describePatch(moments, [i, j], x, y));
    }
  }
  if (false) {}
  return patchesFound;
}

/**
 * Finds those connected areas which contain at least 6 patches
 * and returns them ordered DESC by the number of contained patches
 * @param {Number} maxLabel
 */
function findBiggestConnectedAreas(maxLabel) {
  var i;
  var sum;
  var labelHist = [];
  var topLabels = [];
  for (i = 0; i < maxLabel; i++) {
    labelHist.push(0);
  }
  sum = _patchLabelGrid.data.length;
  while (sum--) {
    if (_patchLabelGrid.data[sum] > 0) {
      labelHist[_patchLabelGrid.data[sum] - 1]++;
    }
  }
  labelHist = labelHist.map(function (val, idx) {
    return {
      val: val,
      label: idx + 1
    };
  });
  labelHist.sort(function (a, b) {
    return b.val - a.val;
  });

  // extract top areas with at least 6 patches present
  topLabels = labelHist.filter(function (el) {
    return el.val >= 5;
  });
  return topLabels;
}

/**
 *
 */
function findBoxes(topLabels, maxLabel) {
  var i;
  var j;
  var sum;
  var patches = [];
  var patch;
  var box;
  var boxes = [];
  var hsv = [0, 1, 1];
  var rgb = [0, 0, 0];
  for (i = 0; i < topLabels.length; i++) {
    sum = _patchLabelGrid.data.length;
    patches.length = 0;
    while (sum--) {
      if (_patchLabelGrid.data[sum] === topLabels[i].label) {
        patch = _imageToPatchGrid.data[sum];
        patches.push(patch);
      }
    }
    box = boxFromPatches(patches);
    if (box) {
      boxes.push(box);

      // draw patch-labels if requested
      if (false) {}
    }
  }
  return boxes;
}

/**
 * Find similar moments (via cluster)
 * @param {Object} moments
 */
function similarMoments(moments) {
  var clusters = Object(_common_cv_utils__WEBPACK_IMPORTED_MODULE_2__["cluster"])(moments, 0.90);
  var topCluster = Object(_common_cv_utils__WEBPACK_IMPORTED_MODULE_2__["topGeneric"])(clusters, 1, function (e) {
    return e.getPoints().length;
  });
  var points = [];
  var result = [];
  if (topCluster.length === 1) {
    points = topCluster[0].item.getPoints();
    for (var i = 0; i < points.length; i++) {
      result.push(points[i].point);
    }
  }
  return result;
}
function skeletonize(x, y) {
  _binaryImageWrapper.subImageAsCopy(_subImageWrapper, Object(_common_cv_utils__WEBPACK_IMPORTED_MODULE_2__["imageRef"])(x, y));
  _skeletonizer.skeletonize();

  // Show skeleton if requested
  if (false) {}
}

/**
 * Extracts and describes those patches which seem to contain a barcode pattern
 * @param {Array} moments
 * @param {Object} patchPos,
 * @param {Number} x
 * @param {Number} y
 * @returns {Array} list of patches
 */
function describePatch(moments, patchPos, x, y) {
  var k;
  var avg;
  var eligibleMoments = [];
  var matchingMoments;
  var patch;
  var patchesFound = [];
  var minComponentWeight = Math.ceil(_patchSize.x / 3);
  if (moments.length >= 2) {
    // only collect moments which's area covers at least minComponentWeight pixels.
    for (k = 0; k < moments.length; k++) {
      if (moments[k].m00 > minComponentWeight) {
        eligibleMoments.push(moments[k]);
      }
    }

    // if at least 2 moments are found which have at least minComponentWeights covered
    if (eligibleMoments.length >= 2) {
      matchingMoments = similarMoments(eligibleMoments);
      avg = 0;
      // determine the similarity of the moments
      for (k = 0; k < matchingMoments.length; k++) {
        var _matchingMoments$k$ra, _matchingMoments$k;
        avg += (_matchingMoments$k$ra = (_matchingMoments$k = matchingMoments[k]) === null || _matchingMoments$k === void 0 ? void 0 : _matchingMoments$k.rad) !== null && _matchingMoments$k$ra !== void 0 ? _matchingMoments$k$ra : 0;
      }

      // Only two of the moments are allowed not to fit into the equation
      // add the patch to the set
      if (matchingMoments.length > 1 && matchingMoments.length >= eligibleMoments.length / 4 * 3 && matchingMoments.length > moments.length / 4) {
        avg /= matchingMoments.length;
        patch = {
          index: patchPos[1] * _numPatches.x + patchPos[0],
          pos: {
            x: x,
            y: y
          },
          box: [gl_matrix__WEBPACK_IMPORTED_MODULE_0__["vec2"].clone([x, y]), gl_matrix__WEBPACK_IMPORTED_MODULE_0__["vec2"].clone([x + _subImageWrapper.size.x, y]), gl_matrix__WEBPACK_IMPORTED_MODULE_0__["vec2"].clone([x + _subImageWrapper.size.x, y + _subImageWrapper.size.y]), gl_matrix__WEBPACK_IMPORTED_MODULE_0__["vec2"].clone([x, y + _subImageWrapper.size.y])],
          moments: matchingMoments,
          rad: avg,
          vec: gl_matrix__WEBPACK_IMPORTED_MODULE_0__["vec2"].clone([Math.cos(avg), Math.sin(avg)])
        };
        patchesFound.push(patch);
      }
    }
  }
  return patchesFound;
}

/**
 * finds patches which are connected and share the same orientation
 * @param {Object} patchesFound
 */
function rasterizeAngularSimilarity(patchesFound) {
  var label = 0;
  var threshold = 0.95;
  var currIdx = 0;
  var j;
  var patch;
  var hsv = [0, 1, 1];
  var rgb = [0, 0, 0];
  function notYetProcessed() {
    var i;
    for (i = 0; i < _patchLabelGrid.data.length; i++) {
      if (_patchLabelGrid.data[i] === 0 && _patchGrid.data[i] === 1) {
        return i;
      }
    }
    return _patchLabelGrid.data.length;
  }
  function trace(currentIdx) {
    var x;
    var y;
    var currentPatch;
    var idx;
    var dir;
    var current = {
      x: currentIdx % _patchLabelGrid.size.x,
      y: currentIdx / _patchLabelGrid.size.x | 0
    };
    var similarity;
    if (currentIdx < _patchLabelGrid.data.length) {
      currentPatch = _imageToPatchGrid.data[currentIdx];
      // assign label
      _patchLabelGrid.data[currentIdx] = label;
      for (dir = 0; dir < _tracer__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].searchDirections.length; dir++) {
        y = current.y + _tracer__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].searchDirections[dir][0];
        x = current.x + _tracer__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].searchDirections[dir][1];
        idx = y * _patchLabelGrid.size.x + x;

        // continue if patch empty
        if (_patchGrid.data[idx] === 0) {
          _patchLabelGrid.data[idx] = Number.MAX_VALUE;
          // eslint-disable-next-line no-continue
          continue;
        }
        if (_patchLabelGrid.data[idx] === 0) {
          similarity = Math.abs(gl_matrix__WEBPACK_IMPORTED_MODULE_0__["vec2"].dot(_imageToPatchGrid.data[idx].vec, currentPatch.vec));
          if (similarity > threshold) {
            trace(idx);
          }
        }
      }
    }
  }

  // prepare for finding the right patches
  _common_array_helper__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].init(_patchGrid.data, 0);
  _common_array_helper__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].init(_patchLabelGrid.data, 0);
  _common_array_helper__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].init(_imageToPatchGrid.data, null);
  for (j = 0; j < patchesFound.length; j++) {
    patch = patchesFound[j];
    _imageToPatchGrid.data[patch.index] = patch;
    _patchGrid.data[patch.index] = 1;
  }

  // rasterize the patches found to determine area
  _patchGrid.zeroBorder();

  // eslint-disable-next-line no-cond-assign
  while ((currIdx = notYetProcessed()) < _patchLabelGrid.data.length) {
    label++;
    trace(currIdx);
  }

  // draw patch-labels if requested
  if (false) {}
  return label;
}
/* harmony default export */ __webpack_exports__["a"] = ({
  init: function init(inputImageWrapper, config) {
    _config = config;
    _inputImageWrapper = inputImageWrapper;
    initBuffers();
    initCanvas();
  },
  locate: function locate() {
    if (_config.halfSample) {
      Object(_common_cv_utils__WEBPACK_IMPORTED_MODULE_2__["halfSample"])(_inputImageWrapper, _currentImageWrapper);
    }
    binarizeImage();
    var patchesFound = findPatches();
    // return unless 5% or more patches are found
    if (patchesFound.length < _numPatches.x * _numPatches.y * 0.05) {
      return null;
    }

    // rasterrize area by comparing angular similarity;
    var maxLabel = rasterizeAngularSimilarity(patchesFound);
    if (maxLabel < 1) {
      return null;
    }

    // search for area with the most patches (biggest connected area)
    var topLabels = findBiggestConnectedAreas(maxLabel);
    if (topLabels.length === 0) {
      return null;
    }
    var boxes = findBoxes(topLabels, maxLabel);
    return boxes;
  },
  checkImageConstraints: function checkImageConstraints(inputStream, config) {
    var patchSize;
    var width = inputStream.getWidth();
    var height = inputStream.getHeight();
    var thisHalfSample = config.halfSample ? 0.5 : 1;
    var area;

    // calculate width and height based on area
    if (inputStream.getConfig().area) {
      area = Object(_common_cv_utils__WEBPACK_IMPORTED_MODULE_2__["computeImageArea"])(width, height, inputStream.getConfig().area);
      inputStream.setTopRight({
        x: area.sx,
        y: area.sy
      });
      inputStream.setCanvasSize({
        x: width,
        y: height
      });
      width = area.sw;
      height = area.sh;
    }
    var size = {
      x: Math.floor(width * thisHalfSample),
      y: Math.floor(height * thisHalfSample)
    };
    patchSize = Object(_common_cv_utils__WEBPACK_IMPORTED_MODULE_2__["calculatePatchSize"])(config.patchSize, size);
    if (false) {}
    inputStream.setWidth(Math.max(Math.floor(Math.floor(size.x / patchSize.x) * (1 / thisHalfSample) * patchSize.x), patchSize.x));
    inputStream.setHeight(Math.max(Math.floor(Math.floor(size.y / patchSize.y) * (1 / thisHalfSample) * patchSize.y), patchSize.y));
    if (inputStream.getWidth() % patchSize.x === 0 && inputStream.getHeight() % patchSize.y === 0) {
      return true;
    }
    throw new Error("Image dimensions do not comply with the current settings: Width (".concat(width, " )and height (").concat(height, ") must a multiple of ").concat(patchSize.x));
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(46)))

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var listCacheClear = __webpack_require__(72),
  listCacheDelete = __webpack_require__(73),
  listCacheGet = __webpack_require__(74),
  listCacheHas = __webpack_require__(75),
  listCacheSet = __webpack_require__(76);

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
    length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;
module.exports = ListCache;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(26);

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}
module.exports = assocIndexOf;

/***/ }),
/* 26 */
/***/ (function(module, exports) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || value !== value && other !== other;
}
module.exports = eq;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(19);

/** Built-in value references. */
var Symbol = root.Symbol;
module.exports = Symbol;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(35);

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');
module.exports = nativeCreate;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var isKeyable = __webpack_require__(97);

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;
}
module.exports = getMapData;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsArguments = __webpack_require__(112),
  isObjectLike = __webpack_require__(20);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function () {
  return arguments;
}()) ? baseIsArguments : function (value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
};
module.exports = isArguments;

/***/ }),
/* 31 */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length && (type == 'number' || type != 'symbol' && reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
}
module.exports = isIndex;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(16),
  isKey = __webpack_require__(145),
  stringToPath = __webpack_require__(146),
  toString = __webpack_require__(149);

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (isArray(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(toString(value));
}
module.exports = castPath;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(133);
var iterableToArrayLimit = __webpack_require__(134);
var unsupportedIterableToArray = __webpack_require__(60);
var nonIterableRest = __webpack_require__(135);
function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}
module.exports = _slicedToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(139);
var iterableToArray = __webpack_require__(140);
var unsupportedIterableToArray = __webpack_require__(60);
var nonIterableSpread = __webpack_require__(141);
function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}
module.exports = _toConsumableArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsNative = __webpack_require__(82),
  getValue = __webpack_require__(88);

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}
module.exports = getNative;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(22),
  isObject = __webpack_require__(15);

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
  funcTag = '[object Function]',
  genTag = '[object GeneratorFunction]',
  proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}
module.exports = isFunction;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(49);

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}
module.exports = baseAssignValue;

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};
    module.paths = [];
    // module.parent = undefined by default
    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function () {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function () {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }
  return module;
};

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(36),
  isLength = __webpack_require__(40);

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}
module.exports = isArrayLike;

/***/ }),
/* 40 */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}
module.exports = isLength;

/***/ }),
/* 41 */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _setPrototypeOf(o, p);
}
module.exports = _setPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(22),
  isObjectLike = __webpack_require__(20);

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' || isObjectLike(value) && baseGetTag(value) == symbolTag;
}
module.exports = isSymbol;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var isSymbol = __webpack_require__(42);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = value + '';
  return result == '0' && 1 / value == -INFINITY ? '-0' : result;
}
module.exports = toKey;

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(35),
  root = __webpack_require__(19);

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');
module.exports = Map;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;
module.exports = freeGlobal;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(46)))

/***/ }),
/* 46 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = function () {
  return this;
}();
try {
  // This works if eval is allowed (see CSP)
  g = g || new Function("return this")();
} catch (e) {
  // This works if the window reference is available
  if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var mapCacheClear = __webpack_require__(89),
  mapCacheDelete = __webpack_require__(96),
  mapCacheGet = __webpack_require__(98),
  mapCacheHas = __webpack_require__(99),
  mapCacheSet = __webpack_require__(100);

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
    length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;
module.exports = MapCache;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(37),
  eq = __webpack_require__(26);

/**
 * This function is like `assignValue` except that it doesn't assign
 * `undefined` values.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignMergeValue(object, key, value) {
  if (value !== undefined && !eq(object[key], value) || value === undefined && !(key in object)) {
    baseAssignValue(object, key, value);
  }
}
module.exports = assignMergeValue;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(35);
var defineProperty = function () {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}();
module.exports = defineProperty;

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(111);

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);
module.exports = getPrototype;

/***/ }),
/* 51 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
    proto = typeof Ctor == 'function' && Ctor.prototype || objectProto;
  return value === proto;
}
module.exports = isPrototype;

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(19),
  stubFalse = __webpack_require__(114);

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;
module.exports = isBuffer;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(38)(module)))

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsTypedArray = __webpack_require__(116),
  baseUnary = __webpack_require__(117),
  nodeUtil = __webpack_require__(118);

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
module.exports = isTypedArray;

/***/ }),
/* 54 */
/***/ (function(module, exports) {

/**
 * Gets the value at `key`, unless `key` is "__proto__" or "constructor".
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function safeGet(object, key) {
  if (key === 'constructor' && typeof object[key] === 'function') {
    return;
  }
  if (key == '__proto__') {
    return;
  }
  return object[key];
}
module.exports = safeGet;

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(37),
  eq = __webpack_require__(26);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === undefined && !(key in object)) {
    baseAssignValue(object, key, value);
  }
}
module.exports = assignValue;

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(121),
  baseKeysIn = __webpack_require__(123),
  isArrayLike = __webpack_require__(39);

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}
module.exports = keysIn;

/***/ }),
/* 57 */
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}
module.exports = identity;

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var apply = __webpack_require__(127);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? func.length - 1 : start, 0);
  return function () {
    var args = arguments,
      index = -1,
      length = nativeMax(args.length - start, 0),
      array = Array(length);
    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}
module.exports = overRest;

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

var baseSetToString = __webpack_require__(128),
  shortOut = __webpack_require__(130);

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = shortOut(baseSetToString);
module.exports = setToString;

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(61);
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}
module.exports = _unsupportedIterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 61 */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
module.exports = _arrayLikeToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(13)["default"];
var toPrimitive = __webpack_require__(136);
function _toPropertyKey(arg) {
  var key = toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}
module.exports = _toPropertyKey, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

var basePick = __webpack_require__(142),
  flatRest = __webpack_require__(156);

/**
 * Creates an object composed of the picked `object` properties.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The source object.
 * @param {...(string|string[])} [paths] The property paths to pick.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.pick(object, ['a', 'c']);
 * // => { 'a': 1, 'c': 3 }
 */
var pick = flatRest(function (object, paths) {
  return object == null ? {} : basePick(object, paths);
});
module.exports = pick;

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

var getPrototypeOf = __webpack_require__(2);
var setPrototypeOf = __webpack_require__(41);
var isNativeFunction = __webpack_require__(161);
var construct = __webpack_require__(162);
function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;
  module.exports = _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !isNativeFunction(Class)) return Class;
    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }
    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);
      _cache.set(Class, Wrapper);
    }
    function Wrapper() {
      return construct(Class, arguments, getPrototypeOf(this).constructor);
    }
    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return setPrototypeOf(Wrapper, Class);
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _wrapNativeSuper(Class);
}
module.exports = _wrapNativeSuper, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

// NOTE FOR ANYONE IN HERE IN THE FUTURE: This module is used when the module is built for use in Node.
// Webpack.config.js explicitly REPLACES this module with the file called frame_grabber_browser when it is packing the Browser distribution.

var CVUtils = __webpack_require__(12);
var Ndarray = __webpack_require__(164);
var Interp2D = __webpack_require__(165).d2;
var FrameGrabber = {};
FrameGrabber.create = function (inputStream, canvas) {
  // console.warn('*** FrameGrabberNode create()');
  var _that = {};
  var _videoSize = CVUtils.imageRef(inputStream.getRealWidth(), inputStream.getRealHeight());
  var _canvasSize = inputStream.getCanvasSize();
  var _size = CVUtils.imageRef(inputStream.getWidth(), inputStream.getHeight());
  var _topRight = inputStream.getTopRight();
  var _data = new Uint8Array(_size.x * _size.y);
  var _grayData = new Uint8Array(_videoSize.x * _videoSize.y);
  var _canvasData = new Uint8Array(_canvasSize.x * _canvasSize.y);
  /* eslint-disable new-cap */
  var _grayImageArray = Ndarray(_grayData, [_videoSize.y, _videoSize.x]).transpose(1, 0);
  var _canvasImageArray = Ndarray(_canvasData, [_canvasSize.y, _canvasSize.x]).transpose(1, 0);
  var _targetImageArray = _canvasImageArray.hi(_topRight.x + _size.x, _topRight.y + _size.y).lo(_topRight.x, _topRight.y);
  var _stepSizeX = _videoSize.x / _canvasSize.x;
  var _stepSizeY = _videoSize.y / _canvasSize.y;
  if (false) {}

  /**
   * Uses the given array as frame-buffer
   */
  _that.attachData = function (data) {
    _data = data;
  };

  /**
   * Returns the used frame-buffer
   */
  _that.getData = function () {
    return _data;
  };

  /**
   * Fetches a frame from the input-stream and puts into the frame-buffer.
   * The image-data is converted to gray-scale and then half-sampled if configured.
   */
  _that.grab = function () {
    var frame = inputStream.getFrame();
    if (frame) {
      this.scaleAndCrop(frame);
      return true;
    }
    return false;
  };

  // eslint-disable-next-line
  _that.scaleAndCrop = function (frame) {
    // 1. compute full-sized gray image
    CVUtils.computeGray(frame.data, _grayData);

    // 2. interpolate
    for (var y = 0; y < _canvasSize.y; y++) {
      for (var x = 0; x < _canvasSize.x; x++) {
        // eslint-disable-next-line no-bitwise
        _canvasImageArray.set(x, y, Interp2D(_grayImageArray, x * _stepSizeX, y * _stepSizeY) | 0);
      }
    }

    // targetImageArray must be equal to targetSize
    if (_targetImageArray.shape[0] !== _size.x || _targetImageArray.shape[1] !== _size.y) {
      throw new Error('Shapes do not match!');
    }

    // 3. crop
    for (var _y = 0; _y < _size.y; _y++) {
      for (var _x = 0; _x < _size.x; _x++) {
        _data[_y * _size.x + _x] = _targetImageArray.get(_x, _y);
      }
    }
  };
  _that.getSize = function () {
    return _size;
  };
  return _that;
};
module.exports = FrameGrabber;

/***/ }),
/* 66 */
/***/ (function(module, exports) {

module.exports = require("get-pixels");

/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _tracer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21);


/**
 * http://www.codeproject.com/Tips/407172/Connected-Component-Labeling-and-Vectorization
 */
var Rasterizer = {
  createContour2D: function createContour2D() {
    return {
      dir: null,
      index: null,
      firstVertex: null,
      insideContours: null,
      nextpeer: null,
      prevpeer: null
    };
  },
  CONTOUR_DIR: {
    CW_DIR: 0,
    CCW_DIR: 1,
    UNKNOWN_DIR: 2
  },
  DIR: {
    OUTSIDE_EDGE: -32767,
    INSIDE_EDGE: -32766
  },
  create: function create(imageWrapper, labelWrapper) {
    var imageData = imageWrapper.data;
    var labelData = labelWrapper.data;
    var width = imageWrapper.size.x;
    var height = imageWrapper.size.y;
    var tracer = _tracer__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].create(imageWrapper, labelWrapper);
    return {
      rasterize: function rasterize(depthlabel) {
        var color;
        var bc;
        var lc;
        var labelindex;
        var cx;
        var cy;
        var colorMap = [];
        var vertex;
        var p;
        var cc;
        var sc;
        var pos;
        var connectedCount = 0;
        var i;
        for (i = 0; i < 400; i++) {
          colorMap[i] = 0;
        }
        colorMap[0] = imageData[0];
        cc = null;
        for (cy = 1; cy < height - 1; cy++) {
          labelindex = 0;
          bc = colorMap[0];
          for (cx = 1; cx < width - 1; cx++) {
            pos = cy * width + cx;
            if (labelData[pos] === 0) {
              color = imageData[pos];
              if (color !== bc) {
                if (labelindex === 0) {
                  lc = connectedCount + 1;
                  colorMap[lc] = color;
                  bc = color;
                  vertex = tracer.contourTracing(cy, cx, lc, color, Rasterizer.DIR.OUTSIDE_EDGE);
                  if (vertex !== null) {
                    connectedCount++;
                    labelindex = lc;
                    p = Rasterizer.createContour2D();
                    p.dir = Rasterizer.CONTOUR_DIR.CW_DIR;
                    p.index = labelindex;
                    p.firstVertex = vertex;
                    p.nextpeer = cc;
                    p.insideContours = null;
                    if (cc !== null) {
                      cc.prevpeer = p;
                    }
                    cc = p;
                  }
                } else {
                  vertex = tracer.contourTracing(cy, cx, Rasterizer.DIR.INSIDE_EDGE, color, labelindex);
                  if (vertex !== null) {
                    p = Rasterizer.createContour2D();
                    p.firstVertex = vertex;
                    p.insideContours = null;
                    if (depthlabel === 0) {
                      p.dir = Rasterizer.CONTOUR_DIR.CCW_DIR;
                    } else {
                      p.dir = Rasterizer.CONTOUR_DIR.CW_DIR;
                    }
                    p.index = depthlabel;
                    sc = cc;
                    while (sc !== null && sc.index !== labelindex) {
                      sc = sc.nextpeer;
                    }
                    if (sc !== null) {
                      p.nextpeer = sc.insideContours;
                      if (sc.insideContours !== null) {
                        sc.insideContours.prevpeer = p;
                      }
                      sc.insideContours = p;
                    }
                  }
                }
              } else {
                labelData[pos] = labelindex;
              }
            } else if (labelData[pos] === Rasterizer.DIR.OUTSIDE_EDGE || labelData[pos] === Rasterizer.DIR.INSIDE_EDGE) {
              labelindex = 0;
              if (labelData[pos] === Rasterizer.DIR.INSIDE_EDGE) {
                bc = imageData[pos];
              } else {
                bc = colorMap[0];
              }
            } else {
              labelindex = labelData[pos];
              bc = colorMap[labelindex];
            }
          }
        }
        sc = cc;
        while (sc !== null) {
          sc.index = depthlabel;
          sc = sc.nextpeer;
        }
        return {
          cc: cc,
          count: connectedCount
        };
      },
      debug: {
        drawContour: function drawContour(canvas, firstContour) {
          var ctx = canvas.getContext('2d');
          var pq = firstContour;
          var iq;
          var q;
          var p;
          ctx.strokeStyle = 'red';
          ctx.fillStyle = 'red';
          ctx.lineWidth = 1;
          if (pq !== null) {
            iq = pq.insideContours;
          } else {
            iq = null;
          }
          while (pq !== null) {
            if (iq !== null) {
              q = iq;
              iq = iq.nextpeer;
            } else {
              q = pq;
              pq = pq.nextpeer;
              if (pq !== null) {
                iq = pq.insideContours;
              } else {
                iq = null;
              }
            }
            switch (q.dir) {
              case Rasterizer.CONTOUR_DIR.CW_DIR:
                ctx.strokeStyle = 'red';
                break;
              case Rasterizer.CONTOUR_DIR.CCW_DIR:
                ctx.strokeStyle = 'blue';
                break;
              case Rasterizer.CONTOUR_DIR.UNKNOWN_DIR:
                ctx.strokeStyle = 'green';
                break;
            }
            p = q.firstVertex;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            do {
              p = p.next;
              ctx.lineTo(p.x, p.y);
            } while (p !== q.firstVertex);
            ctx.stroke();
          }
        }
      }
    };
  }
};
/* harmony default export */ __webpack_exports__["a"] = (Rasterizer);

/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* eslint-disable no-param-reassign */
/* eslint-disable no-bitwise */
/* eslint-disable eqeqeq */

/* @preserve ASM BEGIN */
function Skeletonizer(stdlib, foreign, buffer) {
  'use asm';

  var images = new stdlib.Uint8Array(buffer);
  var size = foreign.size | 0;
  var imul = stdlib.Math.imul;
  function erode(inImagePtr, outImagePtr) {
    inImagePtr |= 0;
    outImagePtr |= 0;
    var v = 0;
    var u = 0;
    var sum = 0;
    var yStart1 = 0;
    var yStart2 = 0;
    var xStart1 = 0;
    var xStart2 = 0;
    var offset = 0;
    for (v = 1; (v | 0) < (size - 1 | 0); v = v + 1 | 0) {
      offset = offset + size | 0;
      for (u = 1; (u | 0) < (size - 1 | 0); u = u + 1 | 0) {
        yStart1 = offset - size | 0;
        yStart2 = offset + size | 0;
        xStart1 = u - 1 | 0;
        xStart2 = u + 1 | 0;
        sum = (images[inImagePtr + yStart1 + xStart1 | 0] | 0) + (images[inImagePtr + yStart1 + xStart2 | 0] | 0) + (images[inImagePtr + offset + u | 0] | 0) + (images[inImagePtr + yStart2 + xStart1 | 0] | 0) + (images[inImagePtr + yStart2 + xStart2 | 0] | 0) | 0;
        if ((sum | 0) == (5 | 0)) {
          images[outImagePtr + offset + u | 0] = 1;
        } else {
          images[outImagePtr + offset + u | 0] = 0;
        }
      }
    }
  }
  function subtract(aImagePtr, bImagePtr, outImagePtr) {
    aImagePtr |= 0;
    bImagePtr |= 0;
    outImagePtr |= 0;
    var length = 0;
    length = imul(size, size) | 0;
    while ((length | 0) > 0) {
      length = length - 1 | 0;
      images[outImagePtr + length | 0] = (images[aImagePtr + length | 0] | 0) - (images[bImagePtr + length | 0] | 0) | 0;
    }
  }
  function bitwiseOr(aImagePtr, bImagePtr, outImagePtr) {
    aImagePtr |= 0;
    bImagePtr |= 0;
    outImagePtr |= 0;
    var length = 0;
    length = imul(size, size) | 0;
    while ((length | 0) > 0) {
      length = length - 1 | 0;
      images[outImagePtr + length | 0] = images[aImagePtr + length | 0] | 0 | (images[bImagePtr + length | 0] | 0) | 0;
    }
  }
  function countNonZero(imagePtr) {
    imagePtr |= 0;
    var sum = 0;
    var length = 0;
    length = imul(size, size) | 0;
    while ((length | 0) > 0) {
      length = length - 1 | 0;
      sum = (sum | 0) + (images[imagePtr + length | 0] | 0) | 0;
    }
    return sum | 0;
  }
  function init(imagePtr, value) {
    imagePtr |= 0;
    value |= 0;
    var length = 0;
    length = imul(size, size) | 0;
    while ((length | 0) > 0) {
      length = length - 1 | 0;
      images[imagePtr + length | 0] = value;
    }
  }
  function dilate(inImagePtr, outImagePtr) {
    inImagePtr |= 0;
    outImagePtr |= 0;
    var v = 0;
    var u = 0;
    var sum = 0;
    var yStart1 = 0;
    var yStart2 = 0;
    var xStart1 = 0;
    var xStart2 = 0;
    var offset = 0;
    for (v = 1; (v | 0) < (size - 1 | 0); v = v + 1 | 0) {
      offset = offset + size | 0;
      for (u = 1; (u | 0) < (size - 1 | 0); u = u + 1 | 0) {
        yStart1 = offset - size | 0;
        yStart2 = offset + size | 0;
        xStart1 = u - 1 | 0;
        xStart2 = u + 1 | 0;
        sum = (images[inImagePtr + yStart1 + xStart1 | 0] | 0) + (images[inImagePtr + yStart1 + xStart2 | 0] | 0) + (images[inImagePtr + offset + u | 0] | 0) + (images[inImagePtr + yStart2 + xStart1 | 0] | 0) + (images[inImagePtr + yStart2 + xStart2 | 0] | 0) | 0;
        if ((sum | 0) > (0 | 0)) {
          images[outImagePtr + offset + u | 0] = 1;
        } else {
          images[outImagePtr + offset + u | 0] = 0;
        }
      }
    }
  }
  function memcpy(srcImagePtr, dstImagePtr) {
    srcImagePtr |= 0;
    dstImagePtr |= 0;
    var length = 0;
    length = imul(size, size) | 0;
    while ((length | 0) > 0) {
      length = length - 1 | 0;
      images[dstImagePtr + length | 0] = images[srcImagePtr + length | 0] | 0;
    }
  }
  function zeroBorder(imagePtr) {
    imagePtr |= 0;
    var x = 0;
    var y = 0;
    for (x = 0; (x | 0) < (size - 1 | 0); x = x + 1 | 0) {
      images[imagePtr + x | 0] = 0;
      images[imagePtr + y | 0] = 0;
      y = y + size - 1 | 0;
      images[imagePtr + y | 0] = 0;
      y = y + 1 | 0;
    }
    for (x = 0; (x | 0) < (size | 0); x = x + 1 | 0) {
      images[imagePtr + y | 0] = 0;
      y = y + 1 | 0;
    }
  }
  function skeletonize() {
    var subImagePtr = 0;
    var erodedImagePtr = 0;
    var tempImagePtr = 0;
    var skelImagePtr = 0;
    var sum = 0;
    var done = 0;
    erodedImagePtr = imul(size, size) | 0;
    tempImagePtr = erodedImagePtr + erodedImagePtr | 0;
    skelImagePtr = tempImagePtr + erodedImagePtr | 0;

    // init skel-image
    init(skelImagePtr, 0);
    zeroBorder(subImagePtr);
    do {
      erode(subImagePtr, erodedImagePtr);
      dilate(erodedImagePtr, tempImagePtr);
      subtract(subImagePtr, tempImagePtr, tempImagePtr);
      bitwiseOr(skelImagePtr, tempImagePtr, skelImagePtr);
      memcpy(erodedImagePtr, subImagePtr);
      sum = countNonZero(subImagePtr) | 0;
      done = (sum | 0) == 0 | 0;
    } while (!done);
  }
  return {
    skeletonize: skeletonize
  };
}
/* @preserve ASM END */
/* harmony default export */ __webpack_exports__["a"] = (Skeletonizer);
/* eslint-enable eqeqeq */

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(166);


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(71),
  assignMergeValue = __webpack_require__(48),
  baseFor = __webpack_require__(101),
  baseMergeDeep = __webpack_require__(103),
  isObject = __webpack_require__(15),
  keysIn = __webpack_require__(56),
  safeGet = __webpack_require__(54);

/**
 * The base implementation of `_.merge` without support for multiple sources.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} [customizer] The function to customize merged values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMerge(object, source, srcIndex, customizer, stack) {
  if (object === source) {
    return;
  }
  baseFor(source, function (srcValue, key) {
    stack || (stack = new Stack());
    if (isObject(srcValue)) {
      baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
    } else {
      var newValue = customizer ? customizer(safeGet(object, key), srcValue, key + '', object, source, stack) : undefined;
      if (newValue === undefined) {
        newValue = srcValue;
      }
      assignMergeValue(object, key, newValue);
    }
  }, keysIn);
}
module.exports = baseMerge;

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(24),
  stackClear = __webpack_require__(77),
  stackDelete = __webpack_require__(78),
  stackGet = __webpack_require__(79),
  stackHas = __webpack_require__(80),
  stackSet = __webpack_require__(81);

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;
module.exports = Stack;

/***/ }),
/* 72 */
/***/ (function(module, exports) {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}
module.exports = listCacheClear;

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(25);

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
    index = assocIndexOf(data, key);
  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}
module.exports = listCacheDelete;

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(25);

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
    index = assocIndexOf(data, key);
  return index < 0 ? undefined : data[index][1];
}
module.exports = listCacheGet;

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(25);

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}
module.exports = listCacheHas;

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(25);

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
    index = assocIndexOf(data, key);
  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}
module.exports = listCacheSet;

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(24);

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache();
  this.size = 0;
}
module.exports = stackClear;

/***/ }),
/* 78 */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
    result = data['delete'](key);
  this.size = data.size;
  return result;
}
module.exports = stackDelete;

/***/ }),
/* 79 */
/***/ (function(module, exports) {

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}
module.exports = stackGet;

/***/ }),
/* 80 */
/***/ (function(module, exports) {

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}
module.exports = stackHas;

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(24),
  Map = __webpack_require__(44),
  MapCache = __webpack_require__(47);

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || pairs.length < LARGE_ARRAY_SIZE - 1) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}
module.exports = stackSet;

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(36),
  isMasked = __webpack_require__(85),
  isObject = __webpack_require__(15),
  toSource = __webpack_require__(87);

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
  objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' + funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}
module.exports = baseIsNative;

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(27);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
    tag = value[symToStringTag];
  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}
  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}
module.exports = getRawTag;

/***/ }),
/* 84 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}
module.exports = objectToString;

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

var coreJsData = __webpack_require__(86);

/** Used to detect methods masquerading as native. */
var maskSrcKey = function () {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? 'Symbol(src)_1.' + uid : '';
}();

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}
module.exports = isMasked;

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(19);

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];
module.exports = coreJsData;

/***/ }),
/* 87 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return func + '';
    } catch (e) {}
  }
  return '';
}
module.exports = toSource;

/***/ }),
/* 88 */
/***/ (function(module, exports) {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}
module.exports = getValue;

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

var Hash = __webpack_require__(90),
  ListCache = __webpack_require__(24),
  Map = __webpack_require__(44);

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash(),
    'map': new (Map || ListCache)(),
    'string': new Hash()
  };
}
module.exports = mapCacheClear;

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

var hashClear = __webpack_require__(91),
  hashDelete = __webpack_require__(92),
  hashGet = __webpack_require__(93),
  hashHas = __webpack_require__(94),
  hashSet = __webpack_require__(95);

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
    length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;
module.exports = Hash;

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(28);

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}
module.exports = hashClear;

/***/ }),
/* 92 */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}
module.exports = hashDelete;

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(28);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}
module.exports = hashGet;

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(28);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}
module.exports = hashHas;

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(28);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED : value;
  return this;
}
module.exports = hashSet;

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(29);

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}
module.exports = mapCacheDelete;

/***/ }),
/* 97 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
}
module.exports = isKeyable;

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(29);

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}
module.exports = mapCacheGet;

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(29);

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}
module.exports = mapCacheHas;

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(29);

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
    size = data.size;
  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}
module.exports = mapCacheSet;

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

var createBaseFor = __webpack_require__(102);

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();
module.exports = baseFor;

/***/ }),
/* 102 */
/***/ (function(module, exports) {

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function (object, iteratee, keysFunc) {
    var index = -1,
      iterable = Object(object),
      props = keysFunc(object),
      length = props.length;
    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}
module.exports = createBaseFor;

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

var assignMergeValue = __webpack_require__(48),
  cloneBuffer = __webpack_require__(104),
  cloneTypedArray = __webpack_require__(105),
  copyArray = __webpack_require__(108),
  initCloneObject = __webpack_require__(109),
  isArguments = __webpack_require__(30),
  isArray = __webpack_require__(16),
  isArrayLikeObject = __webpack_require__(113),
  isBuffer = __webpack_require__(52),
  isFunction = __webpack_require__(36),
  isObject = __webpack_require__(15),
  isPlainObject = __webpack_require__(115),
  isTypedArray = __webpack_require__(53),
  safeGet = __webpack_require__(54),
  toPlainObject = __webpack_require__(119);

/**
 * A specialized version of `baseMerge` for arrays and objects which performs
 * deep merges and tracks traversed objects enabling objects with circular
 * references to be merged.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {string} key The key of the value to merge.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} mergeFunc The function to merge values.
 * @param {Function} [customizer] The function to customize assigned values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
  var objValue = safeGet(object, key),
    srcValue = safeGet(source, key),
    stacked = stack.get(srcValue);
  if (stacked) {
    assignMergeValue(object, key, stacked);
    return;
  }
  var newValue = customizer ? customizer(objValue, srcValue, key + '', object, source, stack) : undefined;
  var isCommon = newValue === undefined;
  if (isCommon) {
    var isArr = isArray(srcValue),
      isBuff = !isArr && isBuffer(srcValue),
      isTyped = !isArr && !isBuff && isTypedArray(srcValue);
    newValue = srcValue;
    if (isArr || isBuff || isTyped) {
      if (isArray(objValue)) {
        newValue = objValue;
      } else if (isArrayLikeObject(objValue)) {
        newValue = copyArray(objValue);
      } else if (isBuff) {
        isCommon = false;
        newValue = cloneBuffer(srcValue, true);
      } else if (isTyped) {
        isCommon = false;
        newValue = cloneTypedArray(srcValue, true);
      } else {
        newValue = [];
      }
    } else if (isPlainObject(srcValue) || isArguments(srcValue)) {
      newValue = objValue;
      if (isArguments(objValue)) {
        newValue = toPlainObject(objValue);
      } else if (!isObject(objValue) || isFunction(objValue)) {
        newValue = initCloneObject(srcValue);
      }
    } else {
      isCommon = false;
    }
  }
  if (isCommon) {
    // Recursively merge objects and arrays (susceptible to call stack limits).
    stack.set(srcValue, newValue);
    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
    stack['delete'](srcValue);
  }
  assignMergeValue(object, key, newValue);
}
module.exports = baseMergeDeep;

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(19);

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
  allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length,
    result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
  buffer.copy(result);
  return result;
}
module.exports = cloneBuffer;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(38)(module)))

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(106);

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}
module.exports = cloneTypedArray;

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

var Uint8Array = __webpack_require__(107);

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}
module.exports = cloneArrayBuffer;

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(19);

/** Built-in value references. */
var Uint8Array = root.Uint8Array;
module.exports = Uint8Array;

/***/ }),
/* 108 */
/***/ (function(module, exports) {

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
    length = source.length;
  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}
module.exports = copyArray;

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

var baseCreate = __webpack_require__(110),
  getPrototype = __webpack_require__(50),
  isPrototype = __webpack_require__(51);

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return typeof object.constructor == 'function' && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
}
module.exports = initCloneObject;

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(15);

/** Built-in value references. */
var objectCreate = Object.create;

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = function () {
  function object() {}
  return function (proto) {
    if (!isObject(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object();
    object.prototype = undefined;
    return result;
  };
}();
module.exports = baseCreate;

/***/ }),
/* 111 */
/***/ (function(module, exports) {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function (arg) {
    return func(transform(arg));
  };
}
module.exports = overArg;

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(22),
  isObjectLike = __webpack_require__(20);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}
module.exports = baseIsArguments;

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

var isArrayLike = __webpack_require__(39),
  isObjectLike = __webpack_require__(20);

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}
module.exports = isArrayLikeObject;

/***/ }),
/* 114 */
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}
module.exports = stubFalse;

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(22),
  getPrototype = __webpack_require__(50),
  isObjectLike = __webpack_require__(20);

/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
  objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
}
module.exports = isPlainObject;

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(22),
  isLength = __webpack_require__(40),
  isObjectLike = __webpack_require__(20);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
  arrayTag = '[object Array]',
  boolTag = '[object Boolean]',
  dateTag = '[object Date]',
  errorTag = '[object Error]',
  funcTag = '[object Function]',
  mapTag = '[object Map]',
  numberTag = '[object Number]',
  objectTag = '[object Object]',
  regexpTag = '[object RegExp]',
  setTag = '[object Set]',
  stringTag = '[object String]',
  weakMapTag = '[object WeakMap]';
var arrayBufferTag = '[object ArrayBuffer]',
  dataViewTag = '[object DataView]',
  float32Tag = '[object Float32Array]',
  float64Tag = '[object Float64Array]',
  int8Tag = '[object Int8Array]',
  int16Tag = '[object Int16Array]',
  int32Tag = '[object Int32Array]',
  uint8Tag = '[object Uint8Array]',
  uint8ClampedTag = '[object Uint8ClampedArray]',
  uint16Tag = '[object Uint16Array]',
  uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}
module.exports = baseIsTypedArray;

/***/ }),
/* 117 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function (value) {
    return func(value);
  };
}
module.exports = baseUnary;

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(45);

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = function () {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;
    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}();
module.exports = nodeUtil;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(38)(module)))

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(120),
  keysIn = __webpack_require__(56);

/**
 * Converts `value` to a plain object flattening inherited enumerable string
 * keyed properties of `value` to own properties of the plain object.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {Object} Returns the converted plain object.
 * @example
 *
 * function Foo() {
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.assign({ 'a': 1 }, new Foo);
 * // => { 'a': 1, 'b': 2 }
 *
 * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
 * // => { 'a': 1, 'b': 2, 'c': 3 }
 */
function toPlainObject(value) {
  return copyObject(value, keysIn(value));
}
module.exports = toPlainObject;

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

var assignValue = __webpack_require__(55),
  baseAssignValue = __webpack_require__(37);

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});
  var index = -1,
    length = props.length;
  while (++index < length) {
    var key = props[index];
    var newValue = customizer ? customizer(object[key], source[key], key, object, source) : undefined;
    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}
module.exports = copyObject;

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

var baseTimes = __webpack_require__(122),
  isArguments = __webpack_require__(30),
  isArray = __webpack_require__(16),
  isBuffer = __webpack_require__(52),
  isIndex = __webpack_require__(31),
  isTypedArray = __webpack_require__(53);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
    isArg = !isArr && isArguments(value),
    isBuff = !isArr && !isArg && isBuffer(value),
    isType = !isArr && !isArg && !isBuff && isTypedArray(value),
    skipIndexes = isArr || isArg || isBuff || isType,
    result = skipIndexes ? baseTimes(value.length, String) : [],
    length = result.length;
  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && (
    // Safari 9 has enumerable `arguments.length` in strict mode.
    key == 'length' ||
    // Node.js 0.10 has enumerable non-index properties on buffers.
    isBuff && (key == 'offset' || key == 'parent') ||
    // PhantomJS 2 has enumerable non-index properties on typed arrays.
    isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset') ||
    // Skip index properties.
    isIndex(key, length)))) {
      result.push(key);
    }
  }
  return result;
}
module.exports = arrayLikeKeys;

/***/ }),
/* 122 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
    result = Array(n);
  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}
module.exports = baseTimes;

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(15),
  isPrototype = __webpack_require__(51),
  nativeKeysIn = __webpack_require__(124);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object),
    result = [];
  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}
module.exports = baseKeysIn;

/***/ }),
/* 124 */
/***/ (function(module, exports) {

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}
module.exports = nativeKeysIn;

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

var baseRest = __webpack_require__(126),
  isIterateeCall = __webpack_require__(131);

/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner(assigner) {
  return baseRest(function (object, sources) {
    var index = -1,
      length = sources.length,
      customizer = length > 1 ? sources[length - 1] : undefined,
      guard = length > 2 ? sources[2] : undefined;
    customizer = assigner.length > 3 && typeof customizer == 'function' ? (length--, customizer) : undefined;
    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}
module.exports = createAssigner;

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

var identity = __webpack_require__(57),
  overRest = __webpack_require__(58),
  setToString = __webpack_require__(59);

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return setToString(overRest(func, start, identity), func + '');
}
module.exports = baseRest;

/***/ }),
/* 127 */
/***/ (function(module, exports) {

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0:
      return func.call(thisArg);
    case 1:
      return func.call(thisArg, args[0]);
    case 2:
      return func.call(thisArg, args[0], args[1]);
    case 3:
      return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}
module.exports = apply;

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

var constant = __webpack_require__(129),
  defineProperty = __webpack_require__(49),
  identity = __webpack_require__(57);

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !defineProperty ? identity : function (func, string) {
  return defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(string),
    'writable': true
  });
};
module.exports = baseSetToString;

/***/ }),
/* 129 */
/***/ (function(module, exports) {

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function () {
    return value;
  };
}
module.exports = constant;

/***/ }),
/* 130 */
/***/ (function(module, exports) {

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
  HOT_SPAN = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
    lastCalled = 0;
  return function () {
    var stamp = nativeNow(),
      remaining = HOT_SPAN - (stamp - lastCalled);
    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}
module.exports = shortOut;

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(26),
  isArrayLike = __webpack_require__(39),
  isIndex = __webpack_require__(31),
  isObject = __webpack_require__(15);

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number' ? isArrayLike(object) && isIndex(index, object.length) : type == 'string' && index in object) {
    return eq(object[index], value);
  }
  return false;
}
module.exports = isIterateeCall;

/***/ }),
/* 132 */
/***/ (function(module, exports) {

/*
 * typedefs.js
 * Normalizes browser-specific prefixes and provide some basic polyfills
 */

if (typeof window !== 'undefined') {
  if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = function () {
      return window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function ( /* function FrameRequestCallback */callback) {
        window.setTimeout(callback, 1000 / 60);
      };
    }();
  }
}
if (typeof Math.imul !== 'function') {
  /* eslint-disable no-bitwise */
  Math.imul = function (a, b) {
    var ah = a >>> 16 & 0xffff;
    var al = a & 0xffff;
    var bh = b >>> 16 & 0xffff;
    var bl = b & 0xffff;
    // the shift by 0 fixes the sign on the high part
    // the final |0 converts the unsigned value into a signed value
    return al * bl + (ah * bl + al * bh << 16 >>> 0) | 0;
  };
  /* eslint-enable no-bitwise */
}

if (typeof Object.assign !== 'function') {
  Object.assign = function (target) {
    // .length of function is 2

    'use strict';

    if (target === null) {
      // TypeError if undefined or null
      throw new TypeError('Cannot convert undefined or null to object');
    }
    var to = Object(target);
    for (var index = 1; index < arguments.length; index++) {
      // eslint-disable-next-line prefer-rest-params
      var nextSource = arguments[index];
      if (nextSource !== null) {
        // Skip over if undefined or null
        // eslint-disable-next-line no-restricted-syntax
        for (var nextKey in nextSource) {
          // Avoid bugs when hasOwnProperty is shadowed
          if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
            to[nextKey] = nextSource[nextKey];
          }
        }
      }
    }
    return to;
  };
}

/***/ }),
/* 133 */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
module.exports = _arrayWithHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 134 */
/***/ (function(module, exports) {

function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
module.exports = _iterableToArrayLimit, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 135 */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
module.exports = _nonIterableRest, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(13)["default"];
function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
module.exports = _toPrimitive, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(13)["default"];
function _regeneratorRuntime() {
  "use strict";

  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
  module.exports = _regeneratorRuntime = function _regeneratorRuntime() {
    return e;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  var t,
    e = {},
    r = Object.prototype,
    n = r.hasOwnProperty,
    o = Object.defineProperty || function (t, e, r) {
      t[e] = r.value;
    },
    i = "function" == typeof Symbol ? Symbol : {},
    a = i.iterator || "@@iterator",
    c = i.asyncIterator || "@@asyncIterator",
    u = i.toStringTag || "@@toStringTag";
  function define(t, e, r) {
    return Object.defineProperty(t, e, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), t[e];
  }
  try {
    define({}, "");
  } catch (t) {
    define = function define(t, e, r) {
      return t[e] = r;
    };
  }
  function wrap(t, e, r, n) {
    var i = e && e.prototype instanceof Generator ? e : Generator,
      a = Object.create(i.prototype),
      c = new Context(n || []);
    return o(a, "_invoke", {
      value: makeInvokeMethod(t, r, c)
    }), a;
  }
  function tryCatch(t, e, r) {
    try {
      return {
        type: "normal",
        arg: t.call(e, r)
      };
    } catch (t) {
      return {
        type: "throw",
        arg: t
      };
    }
  }
  e.wrap = wrap;
  var h = "suspendedStart",
    l = "suspendedYield",
    f = "executing",
    s = "completed",
    y = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var p = {};
  define(p, a, function () {
    return this;
  });
  var d = Object.getPrototypeOf,
    v = d && d(d(values([])));
  v && v !== r && n.call(v, a) && (p = v);
  var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
  function defineIteratorMethods(t) {
    ["next", "throw", "return"].forEach(function (e) {
      define(t, e, function (t) {
        return this._invoke(e, t);
      });
    });
  }
  function AsyncIterator(t, e) {
    function invoke(r, o, i, a) {
      var c = tryCatch(t[r], t, o);
      if ("throw" !== c.type) {
        var u = c.arg,
          h = u.value;
        return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) {
          invoke("next", t, i, a);
        }, function (t) {
          invoke("throw", t, i, a);
        }) : e.resolve(h).then(function (t) {
          u.value = t, i(u);
        }, function (t) {
          return invoke("throw", t, i, a);
        });
      }
      a(c.arg);
    }
    var r;
    o(this, "_invoke", {
      value: function value(t, n) {
        function callInvokeWithMethodAndArg() {
          return new e(function (e, r) {
            invoke(t, n, e, r);
          });
        }
        return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(e, r, n) {
    var o = h;
    return function (i, a) {
      if (o === f) throw new Error("Generator is already running");
      if (o === s) {
        if ("throw" === i) throw a;
        return {
          value: t,
          done: !0
        };
      }
      for (n.method = i, n.arg = a;;) {
        var c = n.delegate;
        if (c) {
          var u = maybeInvokeDelegate(c, n);
          if (u) {
            if (u === y) continue;
            return u;
          }
        }
        if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
          if (o === h) throw o = s, n.arg;
          n.dispatchException(n.arg);
        } else "return" === n.method && n.abrupt("return", n.arg);
        o = f;
        var p = tryCatch(e, r, n);
        if ("normal" === p.type) {
          if (o = n.done ? s : l, p.arg === y) continue;
          return {
            value: p.arg,
            done: n.done
          };
        }
        "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
      }
    };
  }
  function maybeInvokeDelegate(e, r) {
    var n = r.method,
      o = e.iterator[n];
    if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
    var i = tryCatch(o, e.iterator, r.arg);
    if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
    var a = i.arg;
    return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
  }
  function pushTryEntry(t) {
    var e = {
      tryLoc: t[0]
    };
    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
  }
  function resetTryEntry(t) {
    var e = t.completion || {};
    e.type = "normal", delete e.arg, t.completion = e;
  }
  function Context(t) {
    this.tryEntries = [{
      tryLoc: "root"
    }], t.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(e) {
    if (e || "" === e) {
      var r = e[a];
      if (r) return r.call(e);
      if ("function" == typeof e.next) return e;
      if (!isNaN(e.length)) {
        var o = -1,
          i = function next() {
            for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next;
            return next.value = t, next.done = !0, next;
          };
        return i.next = i;
      }
    }
    throw new TypeError(_typeof(e) + " is not iterable");
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), o(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
    var e = "function" == typeof t && t.constructor;
    return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
  }, e.mark = function (t) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
  }, e.awrap = function (t) {
    return {
      __await: t
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () {
    return this;
  }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) {
    void 0 === i && (i = Promise);
    var a = new AsyncIterator(wrap(t, r, n, o), i);
    return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {
      return t.done ? t.value : a.next();
    });
  }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () {
    return this;
  }), define(g, "toString", function () {
    return "[object Generator]";
  }), e.keys = function (t) {
    var e = Object(t),
      r = [];
    for (var n in e) r.push(n);
    return r.reverse(), function next() {
      for (; r.length;) {
        var t = r.pop();
        if (t in e) return next.value = t, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, e.values = values, Context.prototype = {
    constructor: Context,
    reset: function reset(e) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
    },
    stop: function stop() {
      this.done = !0;
      var t = this.tryEntries[0].completion;
      if ("throw" === t.type) throw t.arg;
      return this.rval;
    },
    dispatchException: function dispatchException(e) {
      if (this.done) throw e;
      var r = this;
      function handle(n, o) {
        return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
      }
      for (var o = this.tryEntries.length - 1; o >= 0; --o) {
        var i = this.tryEntries[o],
          a = i.completion;
        if ("root" === i.tryLoc) return handle("end");
        if (i.tryLoc <= this.prev) {
          var c = n.call(i, "catchLoc"),
            u = n.call(i, "finallyLoc");
          if (c && u) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          } else if (c) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
          } else {
            if (!u) throw new Error("try statement without catch or finally");
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          }
        }
      }
    },
    abrupt: function abrupt(t, e) {
      for (var r = this.tryEntries.length - 1; r >= 0; --r) {
        var o = this.tryEntries[r];
        if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
          var i = o;
          break;
        }
      }
      i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
      var a = i ? i.completion : {};
      return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
    },
    complete: function complete(t, e) {
      if ("throw" === t.type) throw t.arg;
      return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
    },
    finish: function finish(t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
      }
    },
    "catch": function _catch(t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.tryLoc === t) {
          var n = r.completion;
          if ("throw" === n.type) {
            var o = n.arg;
            resetTryEntry(r);
          }
          return o;
        }
      }
      throw new Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(e, r, n) {
      return this.delegate = {
        iterator: values(e),
        resultName: r,
        nextLoc: n
      }, "next" === this.method && (this.arg = t), y;
    }
  }, e;
}
module.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

var getPrototypeOf = __webpack_require__(2);
function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = getPrototypeOf(object);
    if (object === null) break;
  }
  return object;
}
module.exports = _superPropBase, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(61);
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}
module.exports = _arrayWithoutHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 140 */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
module.exports = _iterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 141 */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
module.exports = _nonIterableSpread, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

var basePickBy = __webpack_require__(143),
  hasIn = __webpack_require__(153);

/**
 * The base implementation of `_.pick` without support for individual
 * property identifiers.
 *
 * @private
 * @param {Object} object The source object.
 * @param {string[]} paths The property paths to pick.
 * @returns {Object} Returns the new object.
 */
function basePick(object, paths) {
  return basePickBy(object, paths, function (value, path) {
    return hasIn(object, path);
  });
}
module.exports = basePick;

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(144),
  baseSet = __webpack_require__(152),
  castPath = __webpack_require__(32);

/**
 * The base implementation of  `_.pickBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The source object.
 * @param {string[]} paths The property paths to pick.
 * @param {Function} predicate The function invoked per property.
 * @returns {Object} Returns the new object.
 */
function basePickBy(object, paths, predicate) {
  var index = -1,
    length = paths.length,
    result = {};
  while (++index < length) {
    var path = paths[index],
      value = baseGet(object, path);
    if (predicate(value, path)) {
      baseSet(result, castPath(path, object), value);
    }
  }
  return result;
}
module.exports = basePickBy;

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(32),
  toKey = __webpack_require__(43);

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = castPath(path, object);
  var index = 0,
    length = path.length;
  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return index && index == length ? object : undefined;
}
module.exports = baseGet;

/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(16),
  isSymbol = __webpack_require__(42);

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
  reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' || value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
}
module.exports = isKey;

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

var memoizeCapped = __webpack_require__(147);

/** Used to match property names within property paths. */
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoizeCapped(function (string) {
  var result = [];
  if (string.charCodeAt(0) === 46 /* . */) {
    result.push('');
  }
  string.replace(rePropName, function (match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : number || match);
  });
  return result;
});
module.exports = stringToPath;

/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

var memoize = __webpack_require__(148);

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = memoize(func, function (key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });
  var cache = result.cache;
  return result;
}
module.exports = memoizeCapped;

/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(47);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || resolver != null && typeof resolver != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function () {
    var args = arguments,
      key = resolver ? resolver.apply(this, args) : args[0],
      cache = memoized.cache;
    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache)();
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = MapCache;
module.exports = memoize;

/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

var baseToString = __webpack_require__(150);

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}
module.exports = toString;

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(27),
  arrayMap = __webpack_require__(151),
  isArray = __webpack_require__(16),
  isSymbol = __webpack_require__(42);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
  symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = value + '';
  return result == '0' && 1 / value == -INFINITY ? '-0' : result;
}
module.exports = baseToString;

/***/ }),
/* 151 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
    length = array == null ? 0 : array.length,
    result = Array(length);
  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}
module.exports = arrayMap;

/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

var assignValue = __webpack_require__(55),
  castPath = __webpack_require__(32),
  isIndex = __webpack_require__(31),
  isObject = __webpack_require__(15),
  toKey = __webpack_require__(43);

/**
 * The base implementation of `_.set`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @param {Function} [customizer] The function to customize path creation.
 * @returns {Object} Returns `object`.
 */
function baseSet(object, path, value, customizer) {
  if (!isObject(object)) {
    return object;
  }
  path = castPath(path, object);
  var index = -1,
    length = path.length,
    lastIndex = length - 1,
    nested = object;
  while (nested != null && ++index < length) {
    var key = toKey(path[index]),
      newValue = value;
    if (key === '__proto__' || key === 'constructor' || key === 'prototype') {
      return object;
    }
    if (index != lastIndex) {
      var objValue = nested[key];
      newValue = customizer ? customizer(objValue, key, nested) : undefined;
      if (newValue === undefined) {
        newValue = isObject(objValue) ? objValue : isIndex(path[index + 1]) ? [] : {};
      }
    }
    assignValue(nested, key, newValue);
    nested = nested[key];
  }
  return object;
}
module.exports = baseSet;

/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

var baseHasIn = __webpack_require__(154),
  hasPath = __webpack_require__(155);

/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */
function hasIn(object, path) {
  return object != null && hasPath(object, path, baseHasIn);
}
module.exports = hasIn;

/***/ }),
/* 154 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}
module.exports = baseHasIn;

/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(32),
  isArguments = __webpack_require__(30),
  isArray = __webpack_require__(16),
  isIndex = __webpack_require__(31),
  isLength = __webpack_require__(40),
  toKey = __webpack_require__(43);

/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath(object, path, hasFunc) {
  path = castPath(path, object);
  var index = -1,
    length = path.length,
    result = false;
  while (++index < length) {
    var key = toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength(length) && isIndex(key, length) && (isArray(object) || isArguments(object));
}
module.exports = hasPath;

/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

var flatten = __webpack_require__(157),
  overRest = __webpack_require__(58),
  setToString = __webpack_require__(59);

/**
 * A specialized version of `baseRest` which flattens the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @returns {Function} Returns the new function.
 */
function flatRest(func) {
  return setToString(overRest(func, undefined, flatten), func + '');
}
module.exports = flatRest;

/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

var baseFlatten = __webpack_require__(158);

/**
 * Flattens `array` a single level deep.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to flatten.
 * @returns {Array} Returns the new flattened array.
 * @example
 *
 * _.flatten([1, [2, [3, [4]], 5]]);
 * // => [1, 2, [3, [4]], 5]
 */
function flatten(array) {
  var length = array == null ? 0 : array.length;
  return length ? baseFlatten(array, 1) : [];
}
module.exports = flatten;

/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(159),
  isFlattenable = __webpack_require__(160);

/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1,
    length = array.length;
  predicate || (predicate = isFlattenable);
  result || (result = []);
  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}
module.exports = baseFlatten;

/***/ }),
/* 159 */
/***/ (function(module, exports) {

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
    length = values.length,
    offset = array.length;
  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}
module.exports = arrayPush;

/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(27),
  isArguments = __webpack_require__(30),
  isArray = __webpack_require__(16);

/** Built-in value references. */
var spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;

/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */
function isFlattenable(value) {
  return isArray(value) || isArguments(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
}
module.exports = isFlattenable;

/***/ }),
/* 161 */
/***/ (function(module, exports) {

function _isNativeFunction(fn) {
  try {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
  } catch (e) {
    return typeof fn === "function";
  }
}
module.exports = _isNativeFunction, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(41);
var isNativeReflectConstruct = __webpack_require__(163);
function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = Reflect.construct.bind(), module.exports.__esModule = true, module.exports["default"] = module.exports;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
  return _construct.apply(null, arguments);
}
module.exports = _construct, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 163 */
/***/ (function(module, exports) {

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}
module.exports = _isNativeReflectConstruct, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 164 */
/***/ (function(module, exports) {

module.exports = require("ndarray");

/***/ }),
/* 165 */
/***/ (function(module, exports) {

module.exports = require("ndarray-linear-interpolate");

/***/ }),
/* 166 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "BarcodeDecoder", function() { return /* reexport */ barcode_decoder; });
__webpack_require__.d(__webpack_exports__, "Readers", function() { return /* reexport */ reader_namespaceObject; });
__webpack_require__.d(__webpack_exports__, "CameraAccess", function() { return /* reexport */ camera_access; });
__webpack_require__.d(__webpack_exports__, "ImageDebug", function() { return /* reexport */ image_debug["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "ImageWrapper", function() { return /* reexport */ image_wrapper["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "ResultCollector", function() { return /* reexport */ result_collector; });

// NAMESPACE OBJECT: ./src/reader/index.ts
var reader_namespaceObject = {};
__webpack_require__.r(reader_namespaceObject);
__webpack_require__.d(reader_namespaceObject, "BarcodeReader", function() { return barcode_reader; });
__webpack_require__.d(reader_namespaceObject, "TwoOfFiveReader", function() { return _2of5_reader; });
__webpack_require__.d(reader_namespaceObject, "NewCodabarReader", function() { return codabar_reader; });
__webpack_require__.d(reader_namespaceObject, "Code128Reader", function() { return code_128_reader; });
__webpack_require__.d(reader_namespaceObject, "Code32Reader", function() { return code_32_reader; });
__webpack_require__.d(reader_namespaceObject, "Code39Reader", function() { return code_39_reader; });
__webpack_require__.d(reader_namespaceObject, "Code39VINReader", function() { return code_39_vin_reader; });
__webpack_require__.d(reader_namespaceObject, "Code93Reader", function() { return code_93_reader; });
__webpack_require__.d(reader_namespaceObject, "EAN2Reader", function() { return ean_2_reader; });
__webpack_require__.d(reader_namespaceObject, "EAN5Reader", function() { return ean_5_reader; });
__webpack_require__.d(reader_namespaceObject, "EAN8Reader", function() { return ean_8_reader; });
__webpack_require__.d(reader_namespaceObject, "EANReader", function() { return ean_reader; });
__webpack_require__.d(reader_namespaceObject, "I2of5Reader", function() { return i2of5_reader; });
__webpack_require__.d(reader_namespaceObject, "UPCEReader", function() { return upc_e_reader; });
__webpack_require__.d(reader_namespaceObject, "UPCReader", function() { return upc_reader; });

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/typeof.js
var helpers_typeof = __webpack_require__(13);
var typeof_default = /*#__PURE__*/__webpack_require__.n(helpers_typeof);

// EXTERNAL MODULE: ./node_modules/lodash/merge.js
var merge = __webpack_require__(18);
var merge_default = /*#__PURE__*/__webpack_require__.n(merge);

// EXTERNAL MODULE: ./src/common/typedefs.js
var typedefs = __webpack_require__(132);

// EXTERNAL MODULE: ./src/common/image_wrapper.ts
var image_wrapper = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(11);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(8);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./src/common/image_debug.ts
var image_debug = __webpack_require__(17);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(3);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(4);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(1);
var assertThisInitialized_default = /*#__PURE__*/__webpack_require__.n(assertThisInitialized);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__(7);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(6);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(2);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(0);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: ./src/common/array_helper.ts
var array_helper = __webpack_require__(9);

// CONCATENATED MODULE: ./src/reader/barcode_reader.ts



/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
// eslint-disable-next-line import/no-cycle



// for some reason this throws a shadow error on itself?!
// eslint-disable-next-line no-shadow
var BarcodeDirection = /*#__PURE__*/function (BarcodeDirection) {
  BarcodeDirection[BarcodeDirection["Forward"] = 1] = "Forward";
  BarcodeDirection[BarcodeDirection["Reverse"] = -1] = "Reverse";
  return BarcodeDirection;
}({});
var barcode_reader_BarcodeReader = /*#__PURE__*/function () {
  function BarcodeReader(config, supplements) {
    classCallCheck_default()(this, BarcodeReader);
    defineProperty_default()(this, "_row", []);
    defineProperty_default()(this, "config", {});
    defineProperty_default()(this, "supplements", []);
    defineProperty_default()(this, "SINGLE_CODE_ERROR", 0);
    defineProperty_default()(this, "FORMAT", 'unknown');
    defineProperty_default()(this, "CONFIG_KEYS", {});
    this._row = [];
    this.config = config || {};
    if (supplements) {
      this.supplements = supplements;
    }
  }
  createClass_default()(BarcodeReader, [{
    key: "_nextUnset",
    value: function _nextUnset(line) {
      var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      for (var i = start; i < line.length; i++) {
        if (!line[i]) return i;
      }
      return line.length;
    }
  }, {
    key: "_matchPattern",
    value: function _matchPattern(counter, code) {
      var maxSingleError = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.SINGLE_CODE_ERROR || 1;
      var error = 0;
      var singleError = 0;
      var sum = 0;
      var modulo = 0;
      var barWidth = 0;
      var count = 0;
      var scaled = 0;
      for (var i = 0; i < counter.length; i++) {
        sum += counter[i];
        modulo += code[i];
      }
      if (sum < modulo) {
        return Number.MAX_VALUE;
      }
      barWidth = sum / modulo;
      // eslint-disable-next-line no-param-reassign
      maxSingleError *= barWidth;
      for (var _i = 0; _i < counter.length; _i++) {
        count = counter[_i];
        scaled = code[_i] * barWidth;
        singleError = Math.abs(count - scaled) / scaled;
        if (singleError > maxSingleError) {
          return Number.MAX_VALUE;
        }
        error += singleError;
      }
      return error / modulo;
    }
  }, {
    key: "_nextSet",
    value: function _nextSet(line) {
      var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      for (var i = offset; i < line.length; i++) {
        if (line[i]) return i;
      }
      return line.length;
    }
  }, {
    key: "_correctBars",
    value: function _correctBars(counter, correction, indices) {
      var length = indices.length;
      var tmp = 0;
      while (length--) {
        tmp = counter[indices[length]] * (1 - (1 - correction) / 2);
        if (tmp > 1) {
          // eslint-disable-next-line no-param-reassign
          counter[indices[length]] = tmp;
        }
      }
    }
  }, {
    key: "decodePattern",
    value: function decodePattern(pattern) {
      // console.warn('* decodePattern', pattern);
      this._row = pattern;
      // console.warn('* decodePattern calling decode', typeof this, this.constructor, this.FORMAT, JSON.stringify(this));
      var result = this.decode();
      // console.warn('* first result=', result);
      if (result === null) {
        this._row.reverse();
        result = this.decode();
        // console.warn('* reversed result=', result);
        if (result) {
          result.direction = BarcodeDirection.Reverse;
          result.start = this._row.length - result.start;
          result.end = this._row.length - result.end;
        }
      } else {
        result.direction = BarcodeDirection.Forward;
      }
      if (result) {
        result.format = this.FORMAT;
      }
      // console.warn('* returning', result);
      return result;
    }
  }, {
    key: "_matchRange",
    value: function _matchRange(start, end, value) {
      // eslint-disable-next-line no-param-reassign
      start = start < 0 ? 0 : start;
      var i;
      for (i = start; i < end; i++) {
        if (this._row[i] !== value) {
          return false;
        }
      }
      return true;
    }
  }, {
    key: "_fillCounters",
    value: function _fillCounters() {
      var offset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._nextUnset(this._row);
      var end = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this._row.length;
      var isWhite = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var counters = [];
      var counterPos = 0;
      counters[counterPos] = 0;
      for (var i = offset; i < end; i++) {
        // eslint-disable-next-line no-bitwise
        if (this._row[i] ^ (isWhite ? 1 : 0)) {
          counters[counterPos]++;
        } else {
          counterPos++;
          counters[counterPos] = 1;
          // eslint-disable-next-line no-param-reassign
          isWhite = !isWhite;
        }
      }
      return counters;
    }
  }, {
    key: "_toCounters",
    value: function _toCounters(start, counters) {
      var numCounters = counters.length;
      var end = this._row.length;
      var isWhite = !this._row[start];
      var counterPos = 0;
      array_helper["a" /* default */].init(counters, 0);
      for (var i = start; i < end; i++) {
        // eslint-disable-next-line no-bitwise
        if (this._row[i] ^ (isWhite ? 1 : 0)) {
          // eslint-disable-next-line no-param-reassign
          counters[counterPos]++;
        } else {
          counterPos++;
          if (counterPos === numCounters) {
            break;
          } else {
            // eslint-disable-next-line no-param-reassign
            counters[counterPos] = 1;
            isWhite = !isWhite;
          }
        }
      }
      return counters;
    }

    // override/implement this in your custom readers.
  }, {
    key: "decodeImage",
    value: function decodeImage(imageWrapper) {
      // eslint-disable-next-line no-void
      void imageWrapper;
      return null;
    }
  }], [{
    key: "Exception",
    get: function get() {
      return {
        StartNotFoundException: 'Start-Info was not found!',
        CodeNotFoundException: 'Code could not be found!',
        PatternNotFoundException: 'Pattern could not be found!'
      };
    }
  }]);
  return BarcodeReader;
}();
/* harmony default export */ var barcode_reader = (barcode_reader_BarcodeReader);
// CONCATENATED MODULE: ./src/reader/2of5_reader.ts







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var N = 1;
var W = 3;
var START_PATTERN = [W, N, W, N, N, N];
var STOP_PATTERN = [W, N, N, N, W];
var CODE_PATTERN = [[N, N, W, W, N], [W, N, N, N, W], [N, W, N, N, W], [W, W, N, N, N], [N, N, W, N, W], [W, N, W, N, N], [N, W, W, N, N], [N, N, N, W, W], [W, N, N, W, N], [N, W, N, W, N]];
var START_PATTERN_LENGTH = START_PATTERN.reduce(function (sum, val) {
  return sum + val;
}, 0);
var _2of5_reader_TwoOfFiveReader = /*#__PURE__*/function (_BarcodeReader) {
  inherits_default()(TwoOfFiveReader, _BarcodeReader);
  var _super = _createSuper(TwoOfFiveReader);
  function TwoOfFiveReader() {
    var _this;
    classCallCheck_default()(this, TwoOfFiveReader);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    defineProperty_default()(assertThisInitialized_default()(_this), "barSpaceRatio", [1, 1]);
    defineProperty_default()(assertThisInitialized_default()(_this), "FORMAT", '2of5');
    defineProperty_default()(assertThisInitialized_default()(_this), "SINGLE_CODE_ERROR", 0.78);
    defineProperty_default()(assertThisInitialized_default()(_this), "AVG_CODE_ERROR", 0.30);
    return _this;
  }
  createClass_default()(TwoOfFiveReader, [{
    key: "_findPattern",
    value: function _findPattern(pattern, offset) {
      var isWhite = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var tryHarder = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      var counter = [];
      var counterPos = 0;
      var bestMatch = {
        error: Number.MAX_VALUE,
        code: -1,
        start: 0,
        end: 0
      };
      var sum = 0;
      var error = 0;
      var epsilon = this.AVG_CODE_ERROR;
      if (!offset) {
        offset = this._nextSet(this._row);
      }
      for (var i = 0; i < pattern.length; i++) {
        counter[i] = 0;
      }
      for (var _i = offset; _i < this._row.length; _i++) {
        if (this._row[_i] ^ (isWhite ? 1 : 0)) {
          counter[counterPos]++;
        } else {
          if (counterPos === counter.length - 1) {
            sum = 0;
            for (var j = 0; j < counter.length; j++) {
              sum += counter[j];
            }
            error = this._matchPattern(counter, pattern);
            if (error < epsilon) {
              bestMatch.error = error;
              bestMatch.start = _i - sum;
              bestMatch.end = _i;
              return bestMatch;
            }
            if (tryHarder) {
              for (var _j = 0; _j < counter.length - 2; _j++) {
                counter[_j] = counter[_j + 2];
              }
              counter[counter.length - 2] = 0;
              counter[counter.length - 1] = 0;
              counterPos--;
            } else {
              return null;
            }
          } else {
            counterPos++;
          }
          counter[counterPos] = 1;
          isWhite = !isWhite;
        }
      }
      return null;
    }
  }, {
    key: "_findStart",
    value: function _findStart() {
      var startInfo = null;
      var offset = this._nextSet(this._row);
      var narrowBarWidth = 1;
      var leadingWhitespaceStart = 0;
      while (!startInfo) {
        startInfo = this._findPattern(START_PATTERN, offset, false, true);
        if (!startInfo) {
          return null;
        }
        narrowBarWidth = Math.floor((startInfo.end - startInfo.start) / START_PATTERN_LENGTH);
        leadingWhitespaceStart = startInfo.start - narrowBarWidth * 5;
        if (leadingWhitespaceStart >= 0) {
          if (this._matchRange(leadingWhitespaceStart, startInfo.start, 0)) {
            return startInfo;
          }
        }
        offset = startInfo.end;
        startInfo = null;
      }
      return startInfo;
    }
  }, {
    key: "_verifyTrailingWhitespace",
    value: function _verifyTrailingWhitespace(endInfo) {
      var trailingWhitespaceEnd = endInfo.end + (endInfo.end - endInfo.start) / 2;
      if (trailingWhitespaceEnd < this._row.length) {
        if (this._matchRange(endInfo.end, trailingWhitespaceEnd, 0)) {
          return endInfo;
        }
      }
      return null;
    }
  }, {
    key: "_findEnd",
    value: function _findEnd() {
      // TODO: reverse, followed by some calcs, followed by another reverse? really?
      this._row.reverse();
      var offset = this._nextSet(this._row);
      var endInfo = this._findPattern(STOP_PATTERN, offset, false, true);
      this._row.reverse();
      if (endInfo === null) {
        return null;
      }

      // reverse numbers
      var tmp = endInfo.start;
      endInfo.start = this._row.length - endInfo.end;
      endInfo.end = this._row.length - tmp;
      return endInfo !== null ? this._verifyTrailingWhitespace(endInfo) : null;
    }
  }, {
    key: "_verifyCounterLength",
    value: function _verifyCounterLength(counters) {
      return counters.length % 10 === 0;
    }
  }, {
    key: "_decodeCode",
    value: function _decodeCode(counter) {
      var epsilon = this.AVG_CODE_ERROR;
      var bestMatch = {
        error: Number.MAX_VALUE,
        code: -1,
        start: 0,
        end: 0
      };
      for (var code = 0; code < CODE_PATTERN.length; code++) {
        var error = this._matchPattern(counter, CODE_PATTERN[code]);
        if (error < bestMatch.error) {
          bestMatch.code = code;
          bestMatch.error = error;
        }
      }
      if (bestMatch.error < epsilon) {
        return bestMatch;
      }
      return null;
    }
  }, {
    key: "_decodePayload",
    value: function _decodePayload(counters, result, decodedCodes) {
      var pos = 0;
      var counterLength = counters.length;
      var counter = [0, 0, 0, 0, 0];
      var code = null;
      while (pos < counterLength) {
        for (var i = 0; i < 5; i++) {
          counter[i] = counters[pos] * this.barSpaceRatio[0];
          pos += 2;
        }
        code = this._decodeCode(counter);
        if (!code) {
          return null;
        }
        result.push("".concat(code.code));
        decodedCodes.push(code);
      }
      return code;
    }
  }, {
    key: "decode",
    value: function decode(row, start) {
      var startInfo = this._findStart();
      if (!startInfo) {
        return null;
      }
      var endInfo = this._findEnd();
      if (!endInfo) {
        return null;
      }
      var counters = this._fillCounters(startInfo.end, endInfo.start, false);
      if (!this._verifyCounterLength(counters)) {
        return null;
      }
      var decodedCodes = [];
      decodedCodes.push(startInfo);
      var result = [];
      var code = this._decodePayload(counters, result, decodedCodes);
      if (!code) {
        return null;
      }
      if (result.length < 5) {
        return null;
      }
      decodedCodes.push(endInfo);
      return {
        code: result.join(''),
        start: startInfo.start,
        end: endInfo.end,
        startInfo: startInfo,
        decodedCodes: decodedCodes,
        format: this.FORMAT
      };
    }
  }]);
  return TwoOfFiveReader;
}(barcode_reader);
/* harmony default export */ var _2of5_reader = (_2of5_reader_TwoOfFiveReader);
// CONCATENATED MODULE: ./src/reader/codabar_reader.ts







function codabar_reader_createSuper(Derived) { var hasNativeReflectConstruct = codabar_reader_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }
function codabar_reader_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }


// const ALPHABETH_STRING = '0123456789-$:/.+ABCD';
var ALPHABET = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 45, 36, 58, 47, 46, 43, 65, 66, 67, 68];
var CHARACTER_ENCODINGS = [0x003, 0x006, 0x009, 0x060, 0x012, 0x042, 0x021, 0x024, 0x030, 0x048, 0x00c, 0x018, 0x045, 0x051, 0x054, 0x015, 0x01A, 0x029, 0x00B, 0x00E];
var START_END = [0x01A, 0x029, 0x00B, 0x00E];
var MIN_ENCODED_CHARS = 4;
var MAX_ACCEPTABLE = 2.0;
var PADDING = 1.5;
;
;
var codabar_reader_NewCodabarReader = /*#__PURE__*/function (_BarcodeReader) {
  inherits_default()(NewCodabarReader, _BarcodeReader);
  var _super = codabar_reader_createSuper(NewCodabarReader);
  function NewCodabarReader() {
    var _this;
    classCallCheck_default()(this, NewCodabarReader);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    defineProperty_default()(assertThisInitialized_default()(_this), "_counters", []);
    defineProperty_default()(assertThisInitialized_default()(_this), "FORMAT", 'codabar');
    return _this;
  }
  createClass_default()(NewCodabarReader, [{
    key: "_computeAlternatingThreshold",
    value: function _computeAlternatingThreshold(offset, end) {
      var min = Number.MAX_VALUE;
      var max = 0;
      var counter = 0;
      for (var i = offset; i < end; i += 2) {
        counter = this._counters[i];
        if (counter > max) {
          max = counter;
        }
        if (counter < min) {
          min = counter;
        }
      }
      return (min + max) / 2.0 | 0;
    }
  }, {
    key: "_toPattern",
    value: function _toPattern(offset) {
      var numCounters = 7;
      var end = offset + numCounters;
      if (end > this._counters.length) {
        return -1;
      }
      var barThreshold = this._computeAlternatingThreshold(offset, end);
      var spaceThreshold = this._computeAlternatingThreshold(offset + 1, end);
      var bitmask = 1 << numCounters - 1;
      var threshold = 0;
      var pattern = 0;
      for (var i = 0; i < numCounters; i++) {
        threshold = (i & 1) === 0 ? barThreshold : spaceThreshold;
        if (this._counters[offset + i] > threshold) {
          pattern |= bitmask;
        }
        bitmask >>= 1;
      }
      return pattern;
    }
  }, {
    key: "_isStartEnd",
    value: function _isStartEnd(pattern) {
      for (var i = 0; i < START_END.length; i++) {
        if (START_END[i] === pattern) {
          return true;
        }
      }
      return false;
    }
  }, {
    key: "_sumCounters",
    value: function _sumCounters(start, end) {
      var sum = 0;
      for (var i = start; i < end; i++) {
        sum += this._counters[i];
      }
      return sum;
    }
  }, {
    key: "_findStart",
    value: function _findStart() {
      var start = this._nextUnset(this._row);
      var end = start;
      for (var i = 1; i < this._counters.length; i++) {
        var pattern = this._toPattern(i);
        if (pattern !== -1 && this._isStartEnd(pattern)) {
          // TODO: Look for whitespace ahead
          start += this._sumCounters(0, i);
          end = start + this._sumCounters(i, i + 8);
          return {
            start: start,
            end: end,
            startCounter: i,
            endCounter: i + 8
          };
        }
      }
      return null;
    }
  }, {
    key: "_patternToChar",
    value: function _patternToChar(pattern) {
      for (var i = 0; i < CHARACTER_ENCODINGS.length; i++) {
        if (CHARACTER_ENCODINGS[i] === pattern) {
          return String.fromCharCode(ALPHABET[i]);
        }
      }
      return null;
    }
  }, {
    key: "_calculatePatternLength",
    value: function _calculatePatternLength(offset) {
      var sum = 0;
      for (var i = offset; i < offset + 7; i++) {
        sum += this._counters[i];
      }
      return sum;
    }
  }, {
    key: "_verifyWhitespace",
    value: function _verifyWhitespace(startCounter, endCounter) {
      if (startCounter - 1 <= 0 || this._counters[startCounter - 1] >= this._calculatePatternLength(startCounter) / 2.0) {
        if (endCounter + 8 >= this._counters.length || this._counters[endCounter + 7] >= this._calculatePatternLength(endCounter) / 2.0) {
          return true;
        }
      }
      return false;
    }
  }, {
    key: "_charToPattern",
    value: function _charToPattern(_char) {
      var charCode = _char.charCodeAt(0);
      for (var i = 0; i < ALPHABET.length; i++) {
        if (ALPHABET[i] === charCode) {
          return CHARACTER_ENCODINGS[i];
        }
      }
      return 0x0;
    }
  }, {
    key: "_thresholdResultPattern",
    value: function _thresholdResultPattern(result, startCounter) {
      var categorization = {
        space: {
          narrow: {
            size: 0,
            counts: 0,
            min: 0,
            max: Number.MAX_VALUE
          },
          wide: {
            size: 0,
            counts: 0,
            min: 0,
            max: Number.MAX_VALUE
          }
        },
        bar: {
          narrow: {
            size: 0,
            counts: 0,
            min: 0,
            max: Number.MAX_VALUE
          },
          wide: {
            size: 0,
            counts: 0,
            min: 0,
            max: Number.MAX_VALUE
          }
        }
      };
      var pos = startCounter;
      var pattern;
      for (var i = 0; i < result.length; i++) {
        pattern = this._charToPattern(result[i]);
        for (var j = 6; j >= 0; j--) {
          var kind = (j & 1) === 2 ? categorization.bar : categorization.space;
          var cat = (pattern & 1) === 1 ? kind.wide : kind.narrow;
          cat.size += this._counters[pos + j];
          cat.counts++;
          pattern >>= 1;
        }
        pos += 8;
      }
      ['space', 'bar'].forEach(function (key) {
        var newkind = categorization[key];
        newkind.wide.min = Math.floor((newkind.narrow.size / newkind.narrow.counts + newkind.wide.size / newkind.wide.counts) / 2);
        newkind.narrow.max = Math.ceil(newkind.wide.min);
        newkind.wide.max = Math.ceil((newkind.wide.size * MAX_ACCEPTABLE + PADDING) / newkind.wide.counts);
      });
      return categorization;
    }
  }, {
    key: "_validateResult",
    value: function _validateResult(result, startCounter) {
      var thresholds = this._thresholdResultPattern(result, startCounter);
      var pos = startCounter;
      var pattern;
      for (var i = 0; i < result.length; i++) {
        pattern = this._charToPattern(result[i]);
        for (var j = 6; j >= 0; j--) {
          var kind = (j & 1) === 0 ? thresholds.bar : thresholds.space;
          var cat = (pattern & 1) === 1 ? kind.wide : kind.narrow;
          var size = this._counters[pos + j];
          if (size < cat.min || size > cat.max) {
            return false;
          }
          pattern >>= 1;
        }
        pos += 8;
      }
      return true;
    }
  }, {
    key: "decode",
    value: function decode(row, start) {
      this._counters = this._fillCounters();
      start = this._findStart();
      if (!start) {
        return null;
      }
      var nextStart = start.startCounter;
      var result = [];
      var pattern;
      do {
        pattern = this._toPattern(nextStart);
        if (pattern < 0) {
          return null;
        }
        var decodedChar = this._patternToChar(pattern);
        if (decodedChar === null) {
          return null;
        }
        result.push(decodedChar);
        nextStart += 8;
        if (result.length > 1 && this._isStartEnd(pattern)) {
          break;
        }
      } while (nextStart < this._counters.length);

      // verify end
      if (result.length - 2 < MIN_ENCODED_CHARS || !this._isStartEnd(pattern)) {
        return null;
      }

      // verify end white space
      if (!this._verifyWhitespace(start.startCounter, nextStart - 8)) {
        return null;
      }
      if (!this._validateResult(result, start.startCounter)) {
        return null;
      }
      nextStart = nextStart > this._counters.length ? this._counters.length : nextStart;
      var end = start.start + this._sumCounters(start.startCounter, nextStart - 8);
      return {
        code: result.join(''),
        start: start.start,
        end: end,
        startInfo: start,
        decodedCodes: result,
        format: this.FORMAT // TODO: i think it should not be required to return format from this, as barcode_reader force sets the format anyway
      };
    }
  }]);
  return NewCodabarReader;
}(barcode_reader);
/* harmony default export */ var codabar_reader = (codabar_reader_NewCodabarReader);
// CONCATENATED MODULE: ./src/reader/code_128_reader.ts







function code_128_reader_createSuper(Derived) { var hasNativeReflectConstruct = code_128_reader_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }
function code_128_reader_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var code_128_reader_Code128Reader = /*#__PURE__*/function (_BarcodeReader) {
  inherits_default()(Code128Reader, _BarcodeReader);
  var _super = code_128_reader_createSuper(Code128Reader);
  function Code128Reader() {
    var _this;
    classCallCheck_default()(this, Code128Reader);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    defineProperty_default()(assertThisInitialized_default()(_this), "CODE_SHIFT", 98);
    defineProperty_default()(assertThisInitialized_default()(_this), "CODE_C", 99);
    defineProperty_default()(assertThisInitialized_default()(_this), "CODE_B", 100);
    defineProperty_default()(assertThisInitialized_default()(_this), "CODE_A", 101);
    defineProperty_default()(assertThisInitialized_default()(_this), "START_CODE_A", 103);
    defineProperty_default()(assertThisInitialized_default()(_this), "START_CODE_B", 104);
    defineProperty_default()(assertThisInitialized_default()(_this), "START_CODE_C", 105);
    defineProperty_default()(assertThisInitialized_default()(_this), "STOP_CODE", 106);
    defineProperty_default()(assertThisInitialized_default()(_this), "CODE_PATTERN", [[2, 1, 2, 2, 2, 2], [2, 2, 2, 1, 2, 2], [2, 2, 2, 2, 2, 1], [1, 2, 1, 2, 2, 3], [1, 2, 1, 3, 2, 2], [1, 3, 1, 2, 2, 2], [1, 2, 2, 2, 1, 3], [1, 2, 2, 3, 1, 2], [1, 3, 2, 2, 1, 2], [2, 2, 1, 2, 1, 3], [2, 2, 1, 3, 1, 2], [2, 3, 1, 2, 1, 2], [1, 1, 2, 2, 3, 2], [1, 2, 2, 1, 3, 2], [1, 2, 2, 2, 3, 1], [1, 1, 3, 2, 2, 2], [1, 2, 3, 1, 2, 2], [1, 2, 3, 2, 2, 1], [2, 2, 3, 2, 1, 1], [2, 2, 1, 1, 3, 2], [2, 2, 1, 2, 3, 1], [2, 1, 3, 2, 1, 2], [2, 2, 3, 1, 1, 2], [3, 1, 2, 1, 3, 1], [3, 1, 1, 2, 2, 2], [3, 2, 1, 1, 2, 2], [3, 2, 1, 2, 2, 1], [3, 1, 2, 2, 1, 2], [3, 2, 2, 1, 1, 2], [3, 2, 2, 2, 1, 1], [2, 1, 2, 1, 2, 3], [2, 1, 2, 3, 2, 1], [2, 3, 2, 1, 2, 1], [1, 1, 1, 3, 2, 3], [1, 3, 1, 1, 2, 3], [1, 3, 1, 3, 2, 1], [1, 1, 2, 3, 1, 3], [1, 3, 2, 1, 1, 3], [1, 3, 2, 3, 1, 1], [2, 1, 1, 3, 1, 3], [2, 3, 1, 1, 1, 3], [2, 3, 1, 3, 1, 1], [1, 1, 2, 1, 3, 3], [1, 1, 2, 3, 3, 1], [1, 3, 2, 1, 3, 1], [1, 1, 3, 1, 2, 3], [1, 1, 3, 3, 2, 1], [1, 3, 3, 1, 2, 1], [3, 1, 3, 1, 2, 1], [2, 1, 1, 3, 3, 1], [2, 3, 1, 1, 3, 1], [2, 1, 3, 1, 1, 3], [2, 1, 3, 3, 1, 1], [2, 1, 3, 1, 3, 1], [3, 1, 1, 1, 2, 3], [3, 1, 1, 3, 2, 1], [3, 3, 1, 1, 2, 1], [3, 1, 2, 1, 1, 3], [3, 1, 2, 3, 1, 1], [3, 3, 2, 1, 1, 1], [3, 1, 4, 1, 1, 1], [2, 2, 1, 4, 1, 1], [4, 3, 1, 1, 1, 1], [1, 1, 1, 2, 2, 4], [1, 1, 1, 4, 2, 2], [1, 2, 1, 1, 2, 4], [1, 2, 1, 4, 2, 1], [1, 4, 1, 1, 2, 2], [1, 4, 1, 2, 2, 1], [1, 1, 2, 2, 1, 4], [1, 1, 2, 4, 1, 2], [1, 2, 2, 1, 1, 4], [1, 2, 2, 4, 1, 1], [1, 4, 2, 1, 1, 2], [1, 4, 2, 2, 1, 1], [2, 4, 1, 2, 1, 1], [2, 2, 1, 1, 1, 4], [4, 1, 3, 1, 1, 1], [2, 4, 1, 1, 1, 2], [1, 3, 4, 1, 1, 1], [1, 1, 1, 2, 4, 2], [1, 2, 1, 1, 4, 2], [1, 2, 1, 2, 4, 1], [1, 1, 4, 2, 1, 2], [1, 2, 4, 1, 1, 2], [1, 2, 4, 2, 1, 1], [4, 1, 1, 2, 1, 2], [4, 2, 1, 1, 1, 2], [4, 2, 1, 2, 1, 1], [2, 1, 2, 1, 4, 1], [2, 1, 4, 1, 2, 1], [4, 1, 2, 1, 2, 1], [1, 1, 1, 1, 4, 3], [1, 1, 1, 3, 4, 1], [1, 3, 1, 1, 4, 1], [1, 1, 4, 1, 1, 3], [1, 1, 4, 3, 1, 1], [4, 1, 1, 1, 1, 3], [4, 1, 1, 3, 1, 1], [1, 1, 3, 1, 4, 1], [1, 1, 4, 1, 3, 1], [3, 1, 1, 1, 4, 1], [4, 1, 1, 1, 3, 1], [2, 1, 1, 4, 1, 2], [2, 1, 1, 2, 1, 4], [2, 1, 1, 2, 3, 2], [2, 3, 3, 1, 1, 1, 2]]);
    defineProperty_default()(assertThisInitialized_default()(_this), "SINGLE_CODE_ERROR", 0.64);
    defineProperty_default()(assertThisInitialized_default()(_this), "AVG_CODE_ERROR", 0.30);
    defineProperty_default()(assertThisInitialized_default()(_this), "FORMAT", 'code_128');
    defineProperty_default()(assertThisInitialized_default()(_this), "MODULE_INDICES", {
      bar: [0, 2, 4],
      space: [1, 3, 5]
    });
    return _this;
  }
  createClass_default()(Code128Reader, [{
    key: "_decodeCode",
    value: function _decodeCode(start, correction) {
      var bestMatch = {
        error: Number.MAX_VALUE,
        code: -1,
        start: start,
        end: start,
        correction: {
          bar: 1,
          space: 1
        }
      };
      var counter = [0, 0, 0, 0, 0, 0];
      var offset = start;
      var isWhite = !this._row[offset];
      var counterPos = 0;
      for (var i = offset; i < this._row.length; i++) {
        if (this._row[i] ^ (isWhite ? 1 : 0)) {
          counter[counterPos]++;
        } else {
          if (counterPos === counter.length - 1) {
            if (correction) {
              this._correct(counter, correction);
            }
            for (var code = 0; code < this.CODE_PATTERN.length; code++) {
              var error = this._matchPattern(counter, this.CODE_PATTERN[code]);
              if (error < bestMatch.error) {
                bestMatch.code = code;
                bestMatch.error = error;
              }
            }
            bestMatch.end = i;
            if (bestMatch.code === -1 || bestMatch.error > this.AVG_CODE_ERROR) {
              return null;
            }
            if (this.CODE_PATTERN[bestMatch.code]) {
              bestMatch.correction.bar = this.calculateCorrection(this.CODE_PATTERN[bestMatch.code], counter, this.MODULE_INDICES.bar);
              bestMatch.correction.space = this.calculateCorrection(this.CODE_PATTERN[bestMatch.code], counter, this.MODULE_INDICES.space);
            }
            return bestMatch;
          } else {
            counterPos++;
          }
          counter[counterPos] = 1;
          isWhite = !isWhite;
        }
      }
      return null;
    }
  }, {
    key: "_correct",
    value: function _correct(counter, correction) {
      this._correctBars(counter, correction.bar, this.MODULE_INDICES.bar);
      this._correctBars(counter, correction.space, this.MODULE_INDICES.space);
    }
  }, {
    key: "_findStart",
    value:
    // TODO: _findStart and decodeCode share similar code, can we re-use some?
    function _findStart() {
      var counter = [0, 0, 0, 0, 0, 0];
      var offset = this._nextSet(this._row);
      var bestMatch = {
        error: Number.MAX_VALUE,
        code: -1,
        start: 0,
        end: 0,
        correction: {
          bar: 1,
          space: 1
        }
      };
      var isWhite = false;
      var counterPos = 0;
      for (var i = offset; i < this._row.length; i++) {
        if (this._row[i] ^ (isWhite ? 1 : 0)) {
          counter[counterPos]++;
        } else {
          if (counterPos === counter.length - 1) {
            var sum = counter.reduce(function (prev, next) {
              return prev + next;
            }, 0);
            for (var code = this.START_CODE_A; code <= this.START_CODE_C; code++) {
              var error = this._matchPattern(counter, this.CODE_PATTERN[code]);
              if (error < bestMatch.error) {
                bestMatch.code = code;
                bestMatch.error = error;
              }
            }
            if (bestMatch.error < this.AVG_CODE_ERROR) {
              bestMatch.start = i - sum;
              bestMatch.end = i;
              bestMatch.correction.bar = this.calculateCorrection(this.CODE_PATTERN[bestMatch.code], counter, this.MODULE_INDICES.bar);
              bestMatch.correction.space = this.calculateCorrection(this.CODE_PATTERN[bestMatch.code], counter, this.MODULE_INDICES.space);
              return bestMatch;
            }
            for (var j = 0; j < 4; j++) {
              counter[j] = counter[j + 2];
            }
            counter[4] = 0;
            counter[5] = 0;
            counterPos--;
          } else {
            counterPos++;
          }
          counter[counterPos] = 1;
          isWhite = !isWhite;
        }
      }
      return null;
    }
  }, {
    key: "decode",
    value: function decode(row, start) {
      var _this2 = this;
      var startInfo = this._findStart();
      if (startInfo === null) {
        return null;
      }
      // var self = this,
      //     done = false,
      //     result = [],
      //     multiplier = 0,
      //     checksum = 0,
      //     codeset,
      //     rawResult = [],
      //     decodedCodes = [],
      //     shiftNext = false,
      //     unshift,
      //     removeLastCharacter = true;

      var code = {
        code: startInfo.code,
        start: startInfo.start,
        end: startInfo.end,
        correction: {
          bar: startInfo.correction.bar,
          space: startInfo.correction.space
        }
      };
      var decodedCodes = [];
      decodedCodes.push(code);
      var checksum = code.code;
      var codeset = function (c) {
        switch (c) {
          case _this2.START_CODE_A:
            return _this2.CODE_A;
          case _this2.START_CODE_B:
            return _this2.CODE_B;
          case _this2.START_CODE_C:
            return _this2.CODE_C;
          default:
            return null;
        }
      }(code.code);
      var done = false;
      var shiftNext = false;
      var unshift = shiftNext;
      var removeLastCharacter = true;
      var multiplier = 0;
      var rawResult = [];
      var result = []; // TODO: i think this should be string only, but it creates problems if it is

      while (!done) {
        unshift = shiftNext;
        shiftNext = false;
        code = this._decodeCode(code.end, code.correction);
        if (code !== null) {
          if (code.code !== this.STOP_CODE) {
            removeLastCharacter = true;
          }
          if (code.code !== this.STOP_CODE) {
            rawResult.push(code.code);
            multiplier++;
            checksum += multiplier * code.code;
          }
          decodedCodes.push(code);
          switch (codeset) {
            case this.CODE_A:
              if (code.code < 64) {
                result.push(String.fromCharCode(32 + code.code));
              } else if (code.code < 96) {
                result.push(String.fromCharCode(code.code - 64));
              } else {
                if (code.code !== this.STOP_CODE) {
                  removeLastCharacter = false;
                }
                switch (code.code) {
                  case this.CODE_SHIFT:
                    shiftNext = true;
                    codeset = this.CODE_B;
                    break;
                  case this.CODE_B:
                    codeset = this.CODE_B;
                    break;
                  case this.CODE_C:
                    codeset = this.CODE_C;
                    break;
                  case this.STOP_CODE:
                    done = true;
                    break;
                }
              }
              break;
            case this.CODE_B:
              if (code.code < 96) {
                result.push(String.fromCharCode(32 + code.code));
              } else {
                if (code.code !== this.STOP_CODE) {
                  removeLastCharacter = false;
                }
                switch (code.code) {
                  case this.CODE_SHIFT:
                    shiftNext = true;
                    codeset = this.CODE_A;
                    break;
                  case this.CODE_A:
                    codeset = this.CODE_A;
                    break;
                  case this.CODE_C:
                    codeset = this.CODE_C;
                    break;
                  case this.STOP_CODE:
                    done = true;
                    break;
                }
              }
              break;
            case this.CODE_C:
              if (code.code < 100) {
                result.push(code.code < 10 ? '0' + code.code : code.code);
              } else {
                if (code.code !== this.STOP_CODE) {
                  removeLastCharacter = false;
                }
                switch (code.code) {
                  case this.CODE_A:
                    codeset = this.CODE_A;
                    break;
                  case this.CODE_B:
                    codeset = this.CODE_B;
                    break;
                  case this.STOP_CODE:
                    done = true;
                    break;
                }
              }
              break;
          }
        } else {
          done = true;
        }
        if (unshift) {
          codeset = codeset === this.CODE_A ? this.CODE_B : this.CODE_A;
        }
      }
      if (code === null) {
        return null;
      }
      code.end = this._nextUnset(this._row, code.end);
      if (!this._verifyTrailingWhitespace(code)) {
        return null;
      }
      checksum -= multiplier * rawResult[rawResult.length - 1];
      if (checksum % 103 !== rawResult[rawResult.length - 1]) {
        return null;
      }
      if (!result.length) {
        return null;
      }

      // remove last code from result (checksum)
      if (removeLastCharacter) {
        result.splice(result.length - 1, 1);
      }
      return {
        code: result.join(''),
        start: startInfo.start,
        end: code.end,
        codeset: codeset,
        startInfo: startInfo,
        decodedCodes: decodedCodes,
        endInfo: code,
        format: this.FORMAT
      };
    }
  }, {
    key: "_verifyTrailingWhitespace",
    value: function _verifyTrailingWhitespace(endInfo) {
      var self = this,
        trailingWhitespaceEnd;
      trailingWhitespaceEnd = endInfo.end + (endInfo.end - endInfo.start) / 2;
      if (trailingWhitespaceEnd < self._row.length) {
        if (self._matchRange(endInfo.end, trailingWhitespaceEnd, 0)) {
          return endInfo;
        }
      }
      return null;
    }
  }, {
    key: "calculateCorrection",
    value: function calculateCorrection(expected, normalized, indices) {
      var length = indices.length,
        sumNormalized = 0,
        sumExpected = 0;
      while (length--) {
        sumExpected += expected[indices[length]];
        sumNormalized += normalized[indices[length]];
      }
      return sumExpected / sumNormalized;
    }
  }]);
  return Code128Reader;
}(barcode_reader);
/* harmony default export */ var code_128_reader = (code_128_reader_Code128Reader);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/get.js
var get = __webpack_require__(14);
var get_default = /*#__PURE__*/__webpack_require__.n(get);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__(34);
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);

// CONCATENATED MODULE: ./src/reader/code_39_reader.ts








function code_39_reader_createSuper(Derived) { var hasNativeReflectConstruct = code_39_reader_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }
function code_39_reader_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
/* eslint-disable class-methods-use-this */


var ALPHABETH_STRING = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ-. *$/+%';
var code_39_reader_ALPHABET = new Uint16Array(toConsumableArray_default()(ALPHABETH_STRING).map(function (_char) {
  return _char.charCodeAt(0);
}));
var code_39_reader_CHARACTER_ENCODINGS = new Uint16Array([0x034, 0x121, 0x061, 0x160, 0x031, 0x130, 0x070, 0x025, 0x124, 0x064, 0x109, 0x049, 0x148, 0x019, 0x118, 0x058, 0x00D, 0x10C, 0x04C, 0x01C, 0x103, 0x043, 0x142, 0x013, 0x112, 0x052, 0x007, 0x106, 0x046, 0x016, 0x181, 0x0C1, 0x1C0, 0x091, 0x190, 0x0D0, 0x085, 0x184, 0x0C4, 0x094, 0x0A8, 0x0A2, 0x08A, 0x02A]);
var ASTERISK = 0x094;
var code_39_reader_Code39Reader = /*#__PURE__*/function (_BarcodeReader) {
  inherits_default()(Code39Reader, _BarcodeReader);
  var _super = code_39_reader_createSuper(Code39Reader);
  function Code39Reader() {
    var _this;
    classCallCheck_default()(this, Code39Reader);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    defineProperty_default()(assertThisInitialized_default()(_this), "FORMAT", 'code_39');
    return _this;
  }
  createClass_default()(Code39Reader, [{
    key: "_findStart",
    value: function _findStart() {
      var offset = this._nextSet(this._row);
      var patternStart = offset;
      var counter = new Uint16Array([0, 0, 0, 0, 0, 0, 0, 0, 0]);
      var counterPos = 0;
      var isWhite = false;
      for (var i = offset; i < this._row.length; i++) {
        // eslint-disable-next-line no-bitwise
        if (this._row[i] ^ (isWhite ? 1 : 0)) {
          counter[counterPos]++;
        } else {
          if (counterPos === counter.length - 1) {
            // find start pattern
            if (this._toPattern(counter) === ASTERISK) {
              var whiteSpaceMustStart = Math.floor(Math.max(0, patternStart - (i - patternStart) / 4));
              if (this._matchRange(whiteSpaceMustStart, patternStart, 0)) {
                return {
                  start: patternStart,
                  end: i
                };
              }
            }
            patternStart += counter[0] + counter[1];
            for (var j = 0; j < 7; j++) {
              counter[j] = counter[j + 2];
            }
            counter[7] = 0;
            counter[8] = 0;
            counterPos--;
          } else {
            counterPos++;
          }
          counter[counterPos] = 1;
          isWhite = !isWhite;
        }
      }
      return null;
    }
  }, {
    key: "_toPattern",
    value: function _toPattern(counters) {
      var numCounters = counters.length;
      var maxNarrowWidth = 0;
      var numWideBars = numCounters;
      var wideBarWidth = 0;
      while (numWideBars > 3) {
        maxNarrowWidth = this._findNextWidth(counters, maxNarrowWidth);
        numWideBars = 0;
        var pattern = 0;
        for (var i = 0; i < numCounters; i++) {
          if (counters[i] > maxNarrowWidth) {
            // eslint-disable-next-line no-bitwise
            pattern |= 1 << numCounters - 1 - i;
            numWideBars++;
            wideBarWidth += counters[i];
          }
        }
        if (numWideBars === 3) {
          for (var _i = 0; _i < numCounters && numWideBars > 0; _i++) {
            if (counters[_i] > maxNarrowWidth) {
              numWideBars--;
              if (counters[_i] * 2 >= wideBarWidth) {
                return -1;
              }
            }
          }
          return pattern;
        }
      }
      return -1;
    }
  }, {
    key: "_findNextWidth",
    value: function _findNextWidth(counters, current) {
      var minWidth = Number.MAX_VALUE;
      for (var i = 0; i < counters.length; i++) {
        if (counters[i] < minWidth && counters[i] > current) {
          minWidth = counters[i];
        }
      }
      return minWidth;
    }
  }, {
    key: "_patternToChar",
    value: function _patternToChar(pattern) {
      for (var i = 0; i < code_39_reader_CHARACTER_ENCODINGS.length; i++) {
        if (code_39_reader_CHARACTER_ENCODINGS[i] === pattern) {
          return String.fromCharCode(code_39_reader_ALPHABET[i]);
        }
      }
      return null;
    }
  }, {
    key: "_verifyTrailingWhitespace",
    value: function _verifyTrailingWhitespace(lastStart, nextStart, counters) {
      var patternSize = array_helper["a" /* default */].sum(counters);
      var trailingWhitespaceEnd = nextStart - lastStart - patternSize;
      if (trailingWhitespaceEnd * 3 >= patternSize) {
        return true;
      }
      return false;
    }
  }, {
    key: "decode",
    value: function decode() {
      var counters = new Uint16Array([0, 0, 0, 0, 0, 0, 0, 0, 0]);
      var result = [];
      var start = this._findStart();
      if (!start) {
        return null;
      }
      var nextStart = this._nextSet(this._row, start.end);
      var decodedChar;
      var lastStart;
      do {
        counters = this._toCounters(nextStart, counters);
        var pattern = this._toPattern(counters);
        if (pattern < 0) {
          return null;
        }
        decodedChar = this._patternToChar(pattern);
        if (decodedChar === null) {
          return null;
        }
        result.push(decodedChar);
        lastStart = nextStart;
        nextStart += array_helper["a" /* default */].sum(counters);
        nextStart = this._nextSet(this._row, nextStart);
      } while (decodedChar !== '*');
      result.pop();
      if (!result.length) {
        return null;
      }
      if (!this._verifyTrailingWhitespace(lastStart, nextStart, counters)) {
        return null;
      }
      return {
        code: result.join(''),
        start: start.start,
        end: nextStart,
        startInfo: start,
        decodedCodes: result,
        format: this.FORMAT
      };
    }
  }]);
  return Code39Reader;
}(barcode_reader);
/* harmony default export */ var code_39_reader = (code_39_reader_Code39Reader);
// CONCATENATED MODULE: ./src/reader/code_32_reader.ts








function code_32_reader_createSuper(Derived) { var hasNativeReflectConstruct = code_32_reader_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }
function code_32_reader_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var patterns = {
  AEIO: /[AEIO]/g,
  AZ09: /[A-Z0-9]/
};
var code32set = '0123456789BCDFGHJKLMNPQRSTUVWXYZ';
var code_32_reader_Code32Reader = /*#__PURE__*/function (_Code39Reader) {
  inherits_default()(Code32Reader, _Code39Reader);
  var _super = code_32_reader_createSuper(Code32Reader);
  function Code32Reader() {
    var _this;
    classCallCheck_default()(this, Code32Reader);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    defineProperty_default()(assertThisInitialized_default()(_this), "FORMAT", 'code_32_reader');
    return _this;
  }
  createClass_default()(Code32Reader, [{
    key: "_decodeCode32",
    value: function _decodeCode32(code) {
      if (/[^0-9BCDFGHJKLMNPQRSTUVWXYZ]/.test(code)) {
        return null;
      }
      var res = 0;
      for (var i = 0; i < code.length; i++) {
        res = res * 32 + code32set.indexOf(code[i]);
      }
      var code32 = "".concat(res);
      if (code32.length < 9) {
        code32 = ('000000000' + code32).slice(-9);
      }
      return 'A' + code32;
    }

    // TODO (this was todo in original repo, no text was there. sorry.)
  }, {
    key: "_checkChecksum",
    value: function _checkChecksum(code) {
      return !!code;
    }
  }, {
    key: "decode",
    value: function decode() {
      var result = get_default()(getPrototypeOf_default()(Code32Reader.prototype), "decode", this).call(this);
      if (!result) {
        return null;
      }
      var code = result.code;
      if (!code) {
        return null;
      }
      code = code.replace(patterns.AEIO, '');
      if (!this._checkChecksum(code)) {
        return null;
      }
      var code32 = this._decodeCode32(code);
      if (!code32) {
        return null;
      }
      result.code = code32;
      return result;
    }
  }]);
  return Code32Reader;
}(code_39_reader);
/* harmony default export */ var code_32_reader = (code_32_reader_Code32Reader);
// CONCATENATED MODULE: ./src/reader/code_39_vin_reader.ts








function code_39_vin_reader_createSuper(Derived) { var hasNativeReflectConstruct = code_39_vin_reader_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }
function code_39_vin_reader_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
/* eslint-disable class-methods-use-this */


var code_39_vin_reader_patterns = {
  IOQ: /[IOQ]/g,
  AZ09: /[A-Z0-9]{17}/
};
var code_39_vin_reader_Code39VINReader = /*#__PURE__*/function (_Code39Reader) {
  inherits_default()(Code39VINReader, _Code39Reader);
  var _super = code_39_vin_reader_createSuper(Code39VINReader);
  function Code39VINReader() {
    var _this;
    classCallCheck_default()(this, Code39VINReader);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    defineProperty_default()(assertThisInitialized_default()(_this), "FORMAT", 'code_39_vin');
    return _this;
  }
  createClass_default()(Code39VINReader, [{
    key: "_checkChecksum",
    value:
    // TODO (this was todo in original repo, no text was there. sorry.)
    function _checkChecksum(code) {
      return !!code;
    }

    // Cribbed from:
    // https://github.com/zxing/zxing/blob/master/core/src/main/java/com/google/zxing/client/result/VINResultParser.java
  }, {
    key: "decode",
    value: function decode() {
      var result = get_default()(getPrototypeOf_default()(Code39VINReader.prototype), "decode", this).call(this);
      if (!result) {
        return null;
      }
      var code = result.code;
      if (!code) {
        return null;
      }
      code = code.replace(code_39_vin_reader_patterns.IOQ, '');
      if (!code.match(code_39_vin_reader_patterns.AZ09)) {
        if (false) {}
        return null;
      }
      if (!this._checkChecksum(code)) {
        return null;
      }
      result.code = code;
      return result;
    }
  }]);
  return Code39VINReader;
}(code_39_reader);
/* harmony default export */ var code_39_vin_reader = (code_39_vin_reader_Code39VINReader);
// CONCATENATED MODULE: ./src/reader/code_93_reader.ts








function code_93_reader_createSuper(Derived) { var hasNativeReflectConstruct = code_93_reader_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }
function code_93_reader_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }


var code_93_reader_ALPHABETH_STRING = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ-. $/+%abcd*';
var code_93_reader_ALPHABET = new Uint16Array(toConsumableArray_default()(code_93_reader_ALPHABETH_STRING).map(function (_char) {
  return _char.charCodeAt(0);
}));
var code_93_reader_CHARACTER_ENCODINGS = new Uint16Array([0x114, 0x148, 0x144, 0x142, 0x128, 0x124, 0x122, 0x150, 0x112, 0x10A, 0x1A8, 0x1A4, 0x1A2, 0x194, 0x192, 0x18A, 0x168, 0x164, 0x162, 0x134, 0x11A, 0x158, 0x14C, 0x146, 0x12C, 0x116, 0x1B4, 0x1B2, 0x1AC, 0x1A6, 0x196, 0x19A, 0x16C, 0x166, 0x136, 0x13A, 0x12E, 0x1D4, 0x1D2, 0x1CA, 0x16E, 0x176, 0x1AE, 0x126, 0x1DA, 0x1D6, 0x132, 0x15E]);
var code_93_reader_ASTERISK = 0x15E;
var code_93_reader_Code93Reader = /*#__PURE__*/function (_BarcodeReader) {
  inherits_default()(Code93Reader, _BarcodeReader);
  var _super = code_93_reader_createSuper(Code93Reader);
  function Code93Reader() {
    var _this;
    classCallCheck_default()(this, Code93Reader);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    defineProperty_default()(assertThisInitialized_default()(_this), "FORMAT", 'code_93');
    return _this;
  }
  createClass_default()(Code93Reader, [{
    key: "_patternToChar",
    value: function _patternToChar(pattern) {
      for (var i = 0; i < code_93_reader_CHARACTER_ENCODINGS.length; i++) {
        if (code_93_reader_CHARACTER_ENCODINGS[i] === pattern) {
          return String.fromCharCode(code_93_reader_ALPHABET[i]);
        }
      }
      return null;
    }
  }, {
    key: "_toPattern",
    value: function _toPattern(counters) {
      var numCounters = counters.length;
      var sum = counters.reduce(function (prev, next) {
        return prev + next;
      }, 0);
      var pattern = 0;
      for (var i = 0; i < numCounters; i++) {
        var normalized = Math.round(counters[i] * 9 / sum);
        if (normalized < 1 || normalized > 4) {
          return -1;
        }
        if ((i & 1) === 0) {
          for (var j = 0; j < normalized; j++) {
            pattern = pattern << 1 | 1;
          }
        } else {
          pattern <<= normalized;
        }
      }
      return pattern;
    }
  }, {
    key: "_findStart",
    value: function _findStart() {
      var offset = this._nextSet(this._row);
      var patternStart = offset;
      var counter = new Uint16Array([0, 0, 0, 0, 0, 0]);
      var counterPos = 0;
      var isWhite = false;
      for (var i = offset; i < this._row.length; i++) {
        if (this._row[i] ^ (isWhite ? 1 : 0)) {
          counter[counterPos]++;
        } else {
          if (counterPos === counter.length - 1) {
            // find start pattern
            if (this._toPattern(counter) === code_93_reader_ASTERISK) {
              var whiteSpaceMustStart = Math.floor(Math.max(0, patternStart - (i - patternStart) / 4));
              if (this._matchRange(whiteSpaceMustStart, patternStart, 0)) {
                return {
                  start: patternStart,
                  end: i
                };
              }
            }
            patternStart += counter[0] + counter[1];
            for (var j = 0; j < 4; j++) {
              counter[j] = counter[j + 2];
            }
            counter[4] = 0;
            counter[5] = 0;
            counterPos--;
          } else {
            counterPos++;
          }
          counter[counterPos] = 1;
          isWhite = !isWhite;
        }
      }
      return null;
    }
  }, {
    key: "_verifyEnd",
    value: function _verifyEnd(lastStart, nextStart) {
      if (lastStart === nextStart || !this._row[nextStart]) {
        return false;
      }
      return true;
    }
  }, {
    key: "_decodeExtended",
    value: function _decodeExtended(charArray) {
      var length = charArray.length;
      var result = [];
      for (var i = 0; i < length; i++) {
        var _char2 = charArray[i];
        if (_char2 >= 'a' && _char2 <= 'd') {
          if (i > length - 2) {
            return null;
          }
          var nextChar = charArray[++i];
          var nextCharCode = nextChar.charCodeAt(0);
          var decodedChar = void 0;
          switch (_char2) {
            case 'a':
              if (nextChar >= 'A' && nextChar <= 'Z') {
                decodedChar = String.fromCharCode(nextCharCode - 64);
              } else {
                return null;
              }
              break;
            case 'b':
              if (nextChar >= 'A' && nextChar <= 'E') {
                decodedChar = String.fromCharCode(nextCharCode - 38);
              } else if (nextChar >= 'F' && nextChar <= 'J') {
                decodedChar = String.fromCharCode(nextCharCode - 11);
              } else if (nextChar >= 'K' && nextChar <= 'O') {
                decodedChar = String.fromCharCode(nextCharCode + 16);
              } else if (nextChar >= 'P' && nextChar <= 'S') {
                decodedChar = String.fromCharCode(nextCharCode + 43);
              } else if (nextChar >= 'T' && nextChar <= 'Z') {
                decodedChar = String.fromCharCode(127);
              } else {
                return null;
              }
              break;
            case 'c':
              if (nextChar >= 'A' && nextChar <= 'O') {
                decodedChar = String.fromCharCode(nextCharCode - 32);
              } else if (nextChar === 'Z') {
                decodedChar = ':';
              } else {
                return null;
              }
              break;
            case 'd':
              if (nextChar >= 'A' && nextChar <= 'Z') {
                decodedChar = String.fromCharCode(nextCharCode + 32);
              } else {
                return null;
              }
              break;
            default:
              console.warn('* code_93_reader _decodeExtended hit default case, this may be an error', decodedChar);
              return null;
          }
          result.push(decodedChar);
        } else {
          result.push(_char2);
        }
      }
      return result;
    }
  }, {
    key: "_matchCheckChar",
    value: function _matchCheckChar(charArray, index, maxWeight) {
      var arrayToCheck = charArray.slice(0, index);
      var length = arrayToCheck.length;
      var weightedSums = arrayToCheck.reduce(function (sum, _char3, i) {
        var weight = (i * -1 + (length - 1)) % maxWeight + 1;
        var value = code_93_reader_ALPHABET.indexOf(_char3.charCodeAt(0));
        return sum + weight * value;
      }, 0);
      var checkChar = code_93_reader_ALPHABET[weightedSums % 47];
      return checkChar === charArray[index].charCodeAt(0);
    }
  }, {
    key: "_verifyChecksums",
    value: function _verifyChecksums(charArray) {
      return this._matchCheckChar(charArray, charArray.length - 2, 20) && this._matchCheckChar(charArray, charArray.length - 1, 15);
    }
  }, {
    key: "decode",
    value: function decode(row, start) {
      start = this._findStart();
      if (!start) {
        return null;
      }
      var counters = new Uint16Array([0, 0, 0, 0, 0, 0]);
      var result = [];
      var nextStart = this._nextSet(this._row, start.end);
      var lastStart;
      var decodedChar;
      do {
        counters = this._toCounters(nextStart, counters);
        var pattern = this._toPattern(counters);
        if (pattern < 0) {
          return null;
        }
        decodedChar = this._patternToChar(pattern);
        if (decodedChar === null) {
          return null;
        }
        result.push(decodedChar);
        lastStart = nextStart;
        nextStart += array_helper["a" /* default */].sum(counters);
        nextStart = this._nextSet(this._row, nextStart);
      } while (decodedChar !== '*');
      result.pop();
      if (!result.length) {
        return null;
      }
      if (!this._verifyEnd(lastStart, nextStart)) {
        return null;
      }
      if (!this._verifyChecksums(result)) {
        return null;
      }
      result = result.slice(0, result.length - 2);
      // yes, this is an assign inside an if.
      if ((result = this._decodeExtended(result)) === null) {
        return null;
      }
      return {
        code: result.join(''),
        start: start.start,
        end: nextStart,
        startInfo: start,
        decodedCodes: result,
        format: this.FORMAT
      };
    }
  }]);
  return Code93Reader;
}(barcode_reader);
/* harmony default export */ var code_93_reader = (code_93_reader_Code93Reader);
// CONCATENATED MODULE: ./src/reader/ean_reader.ts







function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { defineProperty_default()(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function ean_reader_createSuper(Derived) { var hasNativeReflectConstruct = ean_reader_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }
function ean_reader_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }



// const CODE_L_START = 0;
var CODE_G_START = 10;

var ean_reader_START_PATTERN = [1, 1, 1];
var MIDDLE_PATTERN = [1, 1, 1, 1, 1];

var EXTENSION_START_PATTERN = [1, 1, 2];
var ean_reader_CODE_PATTERN = [[3, 2, 1, 1], [2, 2, 2, 1], [2, 1, 2, 2], [1, 4, 1, 1], [1, 1, 3, 2], [1, 2, 3, 1], [1, 1, 1, 4], [1, 3, 1, 2], [1, 2, 1, 3], [3, 1, 1, 2], [1, 1, 2, 3], [1, 2, 2, 2], [2, 2, 1, 2], [1, 1, 4, 1], [2, 3, 1, 1], [1, 3, 2, 1], [4, 1, 1, 1], [2, 1, 3, 1], [3, 1, 2, 1], [2, 1, 1, 3]];
var CODE_FREQUENCY = [0, 11, 13, 14, 19, 25, 28, 21, 22, 26];
// const SINGLE_CODE_ERROR = 0.70;
var AVG_CODE_ERROR = 0.48;
var ean_reader_EANReader = /*#__PURE__*/function (_BarcodeReader) {
  inherits_default()(EANReader, _BarcodeReader);
  var _super = ean_reader_createSuper(EANReader);
  // TODO: does this need to be in the class?

  function EANReader(config, supplements) {
    var _this;
    classCallCheck_default()(this, EANReader);
    _this = _super.call(this, merge_default()({
      supplements: []
    }, config), supplements);
    defineProperty_default()(assertThisInitialized_default()(_this), "FORMAT", 'ean_13');
    defineProperty_default()(assertThisInitialized_default()(_this), "SINGLE_CODE_ERROR", 0.70);
    defineProperty_default()(assertThisInitialized_default()(_this), "STOP_PATTERN", [1, 1, 1]);
    return _this;
  }
  createClass_default()(EANReader, [{
    key: "_findPattern",
    value: function _findPattern(pattern, offset, isWhite, tryHarder) {
      var counter = new Array(pattern.length).fill(0);
      var bestMatch = {
        error: Number.MAX_VALUE,
        start: 0,
        end: 0
      };
      var epsilon = AVG_CODE_ERROR;
      // console.warn('* findPattern', pattern, offset, isWhite, tryHarder, epsilon);
      var counterPos = 0;
      if (!offset) {
        offset = this._nextSet(this._row);
      }
      var found = false;
      for (var i = offset; i < this._row.length; i++) {
        // console.warn(`* loop i=${offset} len=${this._row.length} isWhite=${isWhite} counterPos=${counterPos}`);
        if (this._row[i] ^ (isWhite ? 1 : 0)) {
          counter[counterPos] += 1;
        } else {
          if (counterPos === counter.length - 1) {
            var error = this._matchPattern(counter, pattern);
            // console.warn('* matchPattern', error, counter, pattern);
            if (error < epsilon && bestMatch.error && error < bestMatch.error) {
              found = true;
              bestMatch.error = error;
              bestMatch.start = i - counter.reduce(function (sum, value) {
                return sum + value;
              }, 0);
              bestMatch.end = i;
              // console.warn('* return bestMatch', JSON.stringify(bestMatch));
              return bestMatch;
            }
            if (tryHarder) {
              for (var j = 0; j < counter.length - 2; j++) {
                counter[j] = counter[j + 2];
              }
              counter[counter.length - 2] = 0;
              counter[counter.length - 1] = 0;
              counterPos--;
            }
          } else {
            counterPos++;
          }
          counter[counterPos] = 1;
          isWhite = !isWhite;
        }
      }
      if (found) {
        // console.warn('* return bestMatch', JSON.stringify(bestMatch));
      } else {
        // console.warn('* return null');
      }
      return found ? bestMatch : null;
    }

    // TODO: findPattern and decodeCode appear to share quite similar code, can it be reduced?
  }, {
    key: "_decodeCode",
    value: function _decodeCode(start, coderange) {
      // console.warn('* decodeCode', start, coderange);
      var counter = [0, 0, 0, 0];
      var offset = start;
      var bestMatch = {
        error: Number.MAX_VALUE,
        code: -1,
        start: start,
        end: start
      };
      var epsilon = AVG_CODE_ERROR;
      var isWhite = !this._row[offset];
      var counterPos = 0;
      if (!coderange) {
        // console.warn('* decodeCode before length');
        coderange = ean_reader_CODE_PATTERN.length;
        // console.warn('* decodeCode after length');
      }

      var found = false;
      for (var i = offset; i < this._row.length; i++) {
        if (this._row[i] ^ (isWhite ? 1 : 0)) {
          counter[counterPos]++;
        } else {
          if (counterPos === counter.length - 1) {
            for (var code = 0; code < coderange; code++) {
              var error = this._matchPattern(counter, ean_reader_CODE_PATTERN[code]);
              bestMatch.end = i;
              if (error < bestMatch.error) {
                bestMatch.code = code;
                bestMatch.error = error;
              }
            }
            if (bestMatch.error > epsilon) {
              // console.warn('* return null');
              return null;
            }
            // console.warn('* return bestMatch', JSON.stringify(bestMatch));
            return bestMatch;
          } else {
            counterPos++;
          }
          counter[counterPos] = 1;
          isWhite = !isWhite;
        }
      }
      return found ? bestMatch : null;
    }
  }, {
    key: "_findStart",
    value: function _findStart() {
      // console.warn('* findStart');
      var offset = this._nextSet(this._row);
      var startInfo = null;
      while (!startInfo) {
        startInfo = this._findPattern(ean_reader_START_PATTERN, offset, false, true);
        // console.warn('* startInfo=', JSON.stringify(startInfo));
        if (!startInfo) {
          return null;
        }
        var leadingWhitespaceStart = startInfo.start - (startInfo.end - startInfo.start);
        if (leadingWhitespaceStart >= 0) {
          if (this._matchRange(leadingWhitespaceStart, startInfo.start, 0)) {
            // console.warn('* returning startInfo');
            return startInfo;
          }
        }
        offset = startInfo.end;
        startInfo = null;
      }
      // console.warn('* returning null');
      return null;
    }
  }, {
    key: "_calculateFirstDigit",
    value: function _calculateFirstDigit(codeFrequency) {
      // console.warn('* calculateFirstDigit', codeFrequency);
      for (var i = 0; i < CODE_FREQUENCY.length; i++) {
        if (codeFrequency === CODE_FREQUENCY[i]) {
          // console.warn('* returning', i);
          return i;
        }
      }
      // console.warn('* return null');
      return null;
    }
  }, {
    key: "_decodePayload",
    value: function _decodePayload(inCode, result, decodedCodes) {
      // console.warn('* decodePayload', inCode, result, decodedCodes);
      var outCode = _objectSpread({}, inCode);
      var codeFrequency = 0x0;
      for (var i = 0; i < 6; i++) {
        outCode = this._decodeCode(outCode.end);
        // console.warn('* decodeCode=', outCode);
        if (!outCode) {
          // console.warn('* return null');
          return null;
        }
        if (outCode.code >= CODE_G_START) {
          outCode.code -= CODE_G_START;
          codeFrequency |= 1 << 5 - i;
        } else {
          codeFrequency |= 0 << 5 - i;
        }
        result.push(outCode.code);
        decodedCodes.push(outCode);
      }
      var firstDigit = this._calculateFirstDigit(codeFrequency);
      // console.warn('* firstDigit=', firstDigit);
      if (firstDigit === null) {
        // console.warn('* return null');
        return null;
      }
      result.unshift(firstDigit);
      var middlePattern = this._findPattern(MIDDLE_PATTERN, outCode.end, true, false);
      // console.warn('* findPattern=', JSON.stringify(middlePattern));

      if (middlePattern === null || !middlePattern.end) {
        // console.warn('* return null');
        return null;
      }
      decodedCodes.push(middlePattern);
      for (var _i = 0; _i < 6; _i++) {
        middlePattern = this._decodeCode(middlePattern.end, CODE_G_START);
        // console.warn('* decodeCode=', JSON.stringify(middlePattern));

        if (!middlePattern) {
          // console.warn('* return null');
          return null;
        }
        decodedCodes.push(middlePattern);
        result.push(middlePattern.code);
      }

      // console.warn('* end code=', JSON.stringify(middlePattern));
      // console.warn('* end result=', JSON.stringify(result));
      // console.warn('* end decodedCodes=', decodedCodes);
      return middlePattern;
    }
  }, {
    key: "_verifyTrailingWhitespace",
    value: function _verifyTrailingWhitespace(endInfo) {
      // console.warn('* verifyTrailingWhitespace', JSON.stringify(endInfo));
      var trailingWhitespaceEnd = endInfo.end + (endInfo.end - endInfo.start);
      if (trailingWhitespaceEnd < this._row.length) {
        if (this._matchRange(endInfo.end, trailingWhitespaceEnd, 0)) {
          // console.warn('* returning', JSON.stringify(endInfo));
          return endInfo;
        }
      }
      // console.warn('* return null');
      return null;
    }
  }, {
    key: "_findEnd",
    value: function _findEnd(offset, isWhite) {
      // console.warn('* findEnd', offset, isWhite);
      var endInfo = this._findPattern(this.STOP_PATTERN, offset, isWhite, false);
      return endInfo !== null ? this._verifyTrailingWhitespace(endInfo) : null;
    }
  }, {
    key: "_checksum",
    value: function _checksum(result) {
      // console.warn('* _checksum', result);
      var sum = 0;
      for (var i = result.length - 2; i >= 0; i -= 2) {
        sum += result[i];
      }
      sum *= 3;
      for (var _i2 = result.length - 1; _i2 >= 0; _i2 -= 2) {
        sum += result[_i2];
      }

      // console.warn('* end checksum', sum % 10 === 0);
      return sum % 10 === 0;
    }
  }, {
    key: "_decodeExtensions",
    value: function _decodeExtensions(offset) {
      var start = this._nextSet(this._row, offset);
      var startInfo = this._findPattern(EXTENSION_START_PATTERN, start, false, false);
      if (startInfo === null) {
        return null;
      }

      // console.warn('* decodeExtensions', this.supplements);
      // console.warn('* there are ', this.supplements.length, ' supplements');
      for (var i = 0; i < this.supplements.length; i++) {
        // console.warn('* extensions loop', i, this.supplements[i], this.supplements[i]._decode);
        try {
          var result = this.supplements[i].decode(this._row, startInfo.end);
          // console.warn('* decode result=', result);
          if (result !== null) {
            return {
              code: result.code,
              start: start,
              startInfo: startInfo,
              end: result.end,
              decodedCodes: result.decodedCodes,
              format: this.supplements[i].FORMAT
            };
          }
        } catch (err) {
          console.error('* decodeExtensions error in ', this.supplements[i], ': ', err);
        }
      }

      // console.warn('* end decodeExtensions');
      return null;
    }
  }, {
    key: "decode",
    value: function decode(row, start) {
      // console.warn('* decode', row);
      // console.warn('* decode', start);
      var result = new Array();
      var decodedCodes = new Array();
      var resultInfo = {};
      var startInfo = this._findStart();
      if (!startInfo) {
        return null;
      }
      var code = {
        start: startInfo.start,
        end: startInfo.end
      };
      decodedCodes.push(code);
      code = this._decodePayload(code, result, decodedCodes);
      if (!code) {
        return null;
      }
      code = this._findEnd(code.end, false);
      if (!code) {
        return null;
      }
      decodedCodes.push(code);

      // Checksum
      if (!this._checksum(result)) {
        return null;
      }

      // console.warn('* this.supplements=', this.supplements);
      if (this.supplements.length > 0) {
        var supplement = this._decodeExtensions(code.end);
        // console.warn('* decodeExtensions returns', supplement);
        if (!supplement) {
          return null;
        }
        if (!supplement.decodedCodes) {
          return null;
        }
        var lastCode = supplement.decodedCodes[supplement.decodedCodes.length - 1];
        var endInfo = {
          start: lastCode.start + ((lastCode.end - lastCode.start) / 2 | 0),
          end: lastCode.end
        };
        if (!this._verifyTrailingWhitespace(endInfo)) {
          return null;
        }
        resultInfo = {
          supplement: supplement,
          code: result.join('') + supplement.code
        };
      }
      return _objectSpread(_objectSpread({
        code: result.join(''),
        start: startInfo.start,
        end: code.end,
        startInfo: startInfo,
        decodedCodes: decodedCodes
      }, resultInfo), {}, {
        format: this.FORMAT
      });
    }
  }]);
  return EANReader;
}(barcode_reader);
/* harmony default export */ var ean_reader = (ean_reader_EANReader);
// CONCATENATED MODULE: ./src/reader/ean_2_reader.ts







function ean_2_reader_createSuper(Derived) { var hasNativeReflectConstruct = ean_2_reader_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }
function ean_2_reader_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var ean_2_reader_EAN2Reader = /*#__PURE__*/function (_EANReader) {
  inherits_default()(EAN2Reader, _EANReader);
  var _super = ean_2_reader_createSuper(EAN2Reader);
  function EAN2Reader() {
    var _this;
    classCallCheck_default()(this, EAN2Reader);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    defineProperty_default()(assertThisInitialized_default()(_this), "FORMAT", 'ean_2');
    return _this;
  }
  createClass_default()(EAN2Reader, [{
    key: "decode",
    value: function decode(row, start) {
      if (row) {
        this._row = row;
      }
      var codeFrequency = 0;
      var offset = start;
      var end = this._row.length;
      var result = [];
      var decodedCodes = [];
      var code = null;
      if (offset === undefined) {
        return null;
      }
      for (var i = 0; i < 2 && offset < end; i++) {
        code = this._decodeCode(offset);
        if (!code) {
          return null;
        }
        decodedCodes.push(code);
        result.push(code.code % 10);
        if (code.code >= CODE_G_START) {
          codeFrequency |= 1 << 1 - i;
        }
        if (i !== 1) {
          offset = this._nextSet(this._row, code.end);
          offset = this._nextUnset(this._row, offset);
        }
      }
      if (result.length !== 2 || parseInt(result.join('')) % 4 !== codeFrequency) {
        return null;
      }
      var startInfo = this._findStart();
      return {
        code: result.join(''),
        decodedCodes: decodedCodes,
        end: code.end,
        format: this.FORMAT,
        startInfo: startInfo,
        start: startInfo.start
      };
    }
  }]);
  return EAN2Reader;
}(ean_reader);
;
/* harmony default export */ var ean_2_reader = (ean_2_reader_EAN2Reader);
// CONCATENATED MODULE: ./src/reader/ean_5_reader.ts







function ean_5_reader_createSuper(Derived) { var hasNativeReflectConstruct = ean_5_reader_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }
function ean_5_reader_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var CHECK_DIGIT_ENCODINGS = [24, 20, 18, 17, 12, 6, 3, 10, 9, 5];
function determineCheckDigit(codeFrequency) {
  for (var i = 0; i < 10; i++) {
    if (codeFrequency === CHECK_DIGIT_ENCODINGS[i]) {
      return i;
    }
  }
  return null;
}
function extensionChecksum(result) {
  var length = result.length;
  var sum = 0;
  for (var i = length - 2; i >= 0; i -= 2) {
    sum += result[i];
  }
  sum *= 3;
  for (var _i = length - 1; _i >= 0; _i -= 2) {
    sum += result[_i];
  }
  sum *= 3;
  return sum % 10;
}
var ean_5_reader_EAN5Reader = /*#__PURE__*/function (_EANReader) {
  inherits_default()(EAN5Reader, _EANReader);
  var _super = ean_5_reader_createSuper(EAN5Reader);
  function EAN5Reader() {
    var _this;
    classCallCheck_default()(this, EAN5Reader);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    defineProperty_default()(assertThisInitialized_default()(_this), "FORMAT", 'ean_5');
    return _this;
  }
  createClass_default()(EAN5Reader, [{
    key: "decode",
    value: function decode(row, start) {
      if (start === undefined) {
        return null;
      }
      if (row) {
        this._row = row;
      }
      var codeFrequency = 0;
      var offset = start;
      var end = this._row.length;
      var code = null;
      var result = [];
      var decodedCodes = [];
      for (var i = 0; i < 5 && offset < end; i++) {
        code = this._decodeCode(offset);
        if (!code) {
          return null;
        }
        decodedCodes.push(code);
        result.push(code.code % 10);
        if (code.code >= CODE_G_START) {
          codeFrequency |= 1 << 4 - i;
        }
        if (i !== 4) {
          offset = this._nextSet(this._row, code.end);
          offset = this._nextUnset(this._row, offset);
        }
      }
      if (result.length !== 5) {
        return null;
      }
      if (extensionChecksum(result) !== determineCheckDigit(codeFrequency)) {
        return null;
      }
      var startInfo = this._findStart();
      return {
        code: result.join(''),
        decodedCodes: decodedCodes,
        end: code.end,
        format: this.FORMAT,
        startInfo: startInfo,
        start: startInfo.start
      };
    }
  }]);
  return EAN5Reader;
}(ean_reader);
;
/* harmony default export */ var ean_5_reader = (ean_5_reader_EAN5Reader);
// CONCATENATED MODULE: ./src/reader/ean_8_reader.ts







function ean_8_reader_createSuper(Derived) { var hasNativeReflectConstruct = ean_8_reader_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }
function ean_8_reader_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var ean_8_reader_EAN8Reader = /*#__PURE__*/function (_EANReader) {
  inherits_default()(EAN8Reader, _EANReader);
  var _super = ean_8_reader_createSuper(EAN8Reader);
  function EAN8Reader() {
    var _this;
    classCallCheck_default()(this, EAN8Reader);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    defineProperty_default()(assertThisInitialized_default()(_this), "FORMAT", 'ean_8');
    return _this;
  }
  createClass_default()(EAN8Reader, [{
    key: "_decodePayload",
    value: function _decodePayload(inCode, result, decodedCodes) {
      var code = inCode;
      for (var i = 0; i < 4; i++) {
        code = this._decodeCode(code.end, CODE_G_START);
        if (!code) {
          return null;
        }
        result.push(code.code);
        decodedCodes.push(code);
      }
      code = this._findPattern(MIDDLE_PATTERN, code.end, true, false);
      if (code === null) {
        return null;
      }
      decodedCodes.push(code);
      for (var _i = 0; _i < 4; _i++) {
        code = this._decodeCode(code.end, CODE_G_START);
        if (!code) {
          return null;
        }
        decodedCodes.push(code);
        result.push(code.code);
      }
      return code;
    }
  }]);
  return EAN8Reader;
}(ean_reader);
/* harmony default export */ var ean_8_reader = (ean_8_reader_EAN8Reader);
// CONCATENATED MODULE: ./src/reader/i2of5_reader.ts








function i2of5_reader_createSuper(Derived) { var hasNativeReflectConstruct = i2of5_reader_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }
function i2of5_reader_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
// TODO: i2of5_reader and 2of5_reader share very similar code, make use of that



var i2of5_reader_N = 1;
var i2of5_reader_W = 3;
var i2of5_reader_I2of5Reader = /*#__PURE__*/function (_BarcodeReader) {
  inherits_default()(I2of5Reader, _BarcodeReader);
  var _super = i2of5_reader_createSuper(I2of5Reader);
  function I2of5Reader(opts) {
    var _this;
    classCallCheck_default()(this, I2of5Reader);
    _this = _super.call(this, merge_default()({
      normalizeBarSpaceWidth: false
    }, opts));
    defineProperty_default()(assertThisInitialized_default()(_this), "barSpaceRatio", [1, 1]);
    defineProperty_default()(assertThisInitialized_default()(_this), "SINGLE_CODE_ERROR", 0.78);
    defineProperty_default()(assertThisInitialized_default()(_this), "AVG_CODE_ERROR", 0.38);
    defineProperty_default()(assertThisInitialized_default()(_this), "START_PATTERN", [i2of5_reader_N, i2of5_reader_N, i2of5_reader_N, i2of5_reader_N]);
    defineProperty_default()(assertThisInitialized_default()(_this), "STOP_PATTERN", [i2of5_reader_N, i2of5_reader_N, i2of5_reader_W]);
    defineProperty_default()(assertThisInitialized_default()(_this), "CODE_PATTERN", [[i2of5_reader_N, i2of5_reader_N, i2of5_reader_W, i2of5_reader_W, i2of5_reader_N], [i2of5_reader_W, i2of5_reader_N, i2of5_reader_N, i2of5_reader_N, i2of5_reader_W], [i2of5_reader_N, i2of5_reader_W, i2of5_reader_N, i2of5_reader_N, i2of5_reader_W], [i2of5_reader_W, i2of5_reader_W, i2of5_reader_N, i2of5_reader_N, i2of5_reader_N], [i2of5_reader_N, i2of5_reader_N, i2of5_reader_W, i2of5_reader_N, i2of5_reader_W], [i2of5_reader_W, i2of5_reader_N, i2of5_reader_W, i2of5_reader_N, i2of5_reader_N], [i2of5_reader_N, i2of5_reader_W, i2of5_reader_W, i2of5_reader_N, i2of5_reader_N], [i2of5_reader_N, i2of5_reader_N, i2of5_reader_N, i2of5_reader_W, i2of5_reader_W], [i2of5_reader_W, i2of5_reader_N, i2of5_reader_N, i2of5_reader_W, i2of5_reader_N], [i2of5_reader_N, i2of5_reader_W, i2of5_reader_N, i2of5_reader_W, i2of5_reader_N]]);
    defineProperty_default()(assertThisInitialized_default()(_this), "MAX_CORRECTION_FACTOR", 5);
    defineProperty_default()(assertThisInitialized_default()(_this), "FORMAT", 'i2of5');
    if (opts.normalizeBarSpaceWidth) {
      _this.SINGLE_CODE_ERROR = 0.38;
      _this.AVG_CODE_ERROR = 0.09;
    }
    _this.config = opts;
    return possibleConstructorReturn_default()(_this, assertThisInitialized_default()(_this));
  }
  createClass_default()(I2of5Reader, [{
    key: "_matchPattern",
    value: function _matchPattern(counter, code) {
      if (this.config.normalizeBarSpaceWidth) {
        var counterSum = [0, 0];
        var codeSum = [0, 0];
        var correction = [0, 0];
        var correctionRatio = this.MAX_CORRECTION_FACTOR;
        var correctionRatioInverse = 1 / correctionRatio;
        for (var i = 0; i < counter.length; i++) {
          counterSum[i % 2] += counter[i];
          codeSum[i % 2] += code[i];
        }
        correction[0] = codeSum[0] / counterSum[0];
        correction[1] = codeSum[1] / counterSum[1];
        correction[0] = Math.max(Math.min(correction[0], correctionRatio), correctionRatioInverse);
        correction[1] = Math.max(Math.min(correction[1], correctionRatio), correctionRatioInverse);
        this.barSpaceRatio = correction;
        for (var _i = 0; _i < counter.length; _i++) {
          counter[_i] *= this.barSpaceRatio[_i % 2];
        }
      }
      return get_default()(getPrototypeOf_default()(I2of5Reader.prototype), "_matchPattern", this).call(this, counter, code);
    }
  }, {
    key: "_findPattern",
    value: function _findPattern(pattern, offset) {
      var isWhite = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var tryHarder = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      var counter = new Array(pattern.length).fill(0);
      var counterPos = 0;
      var bestMatch = {
        error: Number.MAX_VALUE,
        start: 0,
        end: 0
      };
      var epsilon = this.AVG_CODE_ERROR;
      isWhite = isWhite || false;
      tryHarder = tryHarder || false;
      if (!offset) {
        offset = this._nextSet(this._row);
      }
      for (var i = offset; i < this._row.length; i++) {
        if (this._row[i] ^ (isWhite ? 1 : 0)) {
          counter[counterPos]++;
        } else {
          if (counterPos === counter.length - 1) {
            var sum = counter.reduce(function (prev, next) {
              return prev + next;
            }, 0);
            var error = this._matchPattern(counter, pattern);
            if (error < epsilon) {
              bestMatch.error = error;
              bestMatch.start = i - sum;
              bestMatch.end = i;
              return bestMatch;
            }
            if (tryHarder) {
              for (var j = 0; j < counter.length - 2; j++) {
                counter[j] = counter[j + 2];
              }
              counter[counter.length - 2] = 0;
              counter[counter.length - 1] = 0;
              counterPos--;
            } else {
              return null;
            }
          } else {
            counterPos++;
          }
          counter[counterPos] = 1;
          isWhite = !isWhite;
        }
      }
      return null;
    }
  }, {
    key: "_findStart",
    value: function _findStart() {
      var leadingWhitespaceStart = 0;
      var offset = this._nextSet(this._row);
      var startInfo = null;
      var narrowBarWidth = 1;
      while (!startInfo) {
        startInfo = this._findPattern(this.START_PATTERN, offset, false, true);
        if (!startInfo) {
          return null;
        }
        narrowBarWidth = Math.floor((startInfo.end - startInfo.start) / 4);
        leadingWhitespaceStart = startInfo.start - narrowBarWidth * 10;
        if (leadingWhitespaceStart >= 0) {
          if (this._matchRange(leadingWhitespaceStart, startInfo.start, 0)) {
            return startInfo;
          }
        }
        offset = startInfo.end;
        startInfo = null;
      }
      return null;
    }
  }, {
    key: "_verifyTrailingWhitespace",
    value: function _verifyTrailingWhitespace(endInfo) {
      var trailingWhitespaceEnd = endInfo.end + (endInfo.end - endInfo.start) / 2;
      if (trailingWhitespaceEnd < this._row.length) {
        if (this._matchRange(endInfo.end, trailingWhitespaceEnd, 0)) {
          return endInfo;
        }
      }
      return null;
    }
  }, {
    key: "_findEnd",
    value: function _findEnd() {
      this._row.reverse();
      var endInfo = this._findPattern(this.STOP_PATTERN);
      this._row.reverse();
      if (endInfo === null) {
        return null;
      }

      // reverse numbers
      var tmp = endInfo.start;
      endInfo.start = this._row.length - endInfo.end;
      endInfo.end = this._row.length - tmp;
      return endInfo !== null ? this._verifyTrailingWhitespace(endInfo) : null;
    }
  }, {
    key: "_decodePair",
    value: function _decodePair(counterPair) {
      var codes = [];
      for (var i = 0; i < counterPair.length; i++) {
        var code = this._decodeCode(counterPair[i]);
        if (!code) {
          return null;
        }
        codes.push(code);
      }
      return codes;
    }
  }, {
    key: "_decodeCode",
    value: function _decodeCode(counter) {
      var epsilon = this.AVG_CODE_ERROR;
      var bestMatch = {
        error: Number.MAX_VALUE,
        code: -1,
        start: 0,
        end: 0
      };
      for (var code = 0; code < this.CODE_PATTERN.length; code++) {
        var error = this._matchPattern(counter, this.CODE_PATTERN[code]);
        if (error < bestMatch.error) {
          bestMatch.code = code;
          bestMatch.error = error;
        }
      }
      if (bestMatch.error < epsilon) {
        return bestMatch;
      }
      return null;
    }
  }, {
    key: "_decodePayload",
    value: function _decodePayload(counters, result, decodedCodes) {
      var pos = 0;
      var counterLength = counters.length;
      var counterPair = [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0]];
      var codes = null;
      while (pos < counterLength) {
        for (var i = 0; i < 5; i++) {
          counterPair[0][i] = counters[pos] * this.barSpaceRatio[0];
          counterPair[1][i] = counters[pos + 1] * this.barSpaceRatio[1];
          pos += 2;
        }
        codes = this._decodePair(counterPair);
        if (!codes) {
          return null;
        }
        for (var _i2 = 0; _i2 < codes.length; _i2++) {
          result.push(codes[_i2].code + '');
          decodedCodes.push(codes[_i2]);
        }
      }
      return codes;
    }
  }, {
    key: "_verifyCounterLength",
    value: function _verifyCounterLength(counters) {
      return counters.length % 10 === 0;
    }
  }, {
    key: "decode",
    value: function decode(row, start) {
      var result = new Array();
      var decodedCodes = new Array();
      var startInfo = this._findStart();
      if (!startInfo) {
        return null;
      }
      decodedCodes.push(startInfo);
      var endInfo = this._findEnd();
      if (!endInfo) {
        return null;
      }
      var counters = this._fillCounters(startInfo.end, endInfo.start, false);
      if (!this._verifyCounterLength(counters)) {
        return null;
      }
      var code = this._decodePayload(counters, result, decodedCodes);
      if (!code) {
        return null;
      }
      if (result.length % 2 !== 0 || result.length < 6) {
        return null;
      }
      decodedCodes.push(endInfo);
      return {
        code: result.join(''),
        start: startInfo.start,
        end: endInfo.end,
        startInfo: startInfo,
        decodedCodes: decodedCodes,
        format: this.FORMAT
      };
    }
  }]);
  return I2of5Reader;
}(barcode_reader);
/* harmony default export */ var i2of5_reader = (i2of5_reader_I2of5Reader);
// CONCATENATED MODULE: ./src/reader/upc_e_reader.ts








function upc_e_reader_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function upc_e_reader_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? upc_e_reader_ownKeys(Object(t), !0).forEach(function (r) { defineProperty_default()(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : upc_e_reader_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function upc_e_reader_createSuper(Derived) { var hasNativeReflectConstruct = upc_e_reader_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }
function upc_e_reader_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var upc_e_reader_UPCEReader = /*#__PURE__*/function (_EANReader) {
  inherits_default()(UPCEReader, _EANReader);
  var _super = upc_e_reader_createSuper(UPCEReader);
  function UPCEReader() {
    var _this;
    classCallCheck_default()(this, UPCEReader);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    defineProperty_default()(assertThisInitialized_default()(_this), "CODE_FREQUENCY", [[56, 52, 50, 49, 44, 38, 35, 42, 41, 37], [7, 11, 13, 14, 19, 25, 28, 21, 22, 26]]);
    defineProperty_default()(assertThisInitialized_default()(_this), "STOP_PATTERN", [1 / 6 * 7, 1 / 6 * 7, 1 / 6 * 7, 1 / 6 * 7, 1 / 6 * 7, 1 / 6 * 7]);
    defineProperty_default()(assertThisInitialized_default()(_this), "FORMAT", 'upc_e');
    return _this;
  }
  createClass_default()(UPCEReader, [{
    key: "_decodePayload",
    value: function _decodePayload(inCode, result, decodedCodes) {
      var outCode = upc_e_reader_objectSpread({}, inCode);
      var codeFrequency = 0x0;
      for (var i = 0; i < 6; i++) {
        outCode = this._decodeCode(outCode.end);
        if (!outCode) {
          return null;
        }
        if (outCode.code >= CODE_G_START) {
          outCode.code = outCode.code - CODE_G_START;
          codeFrequency |= 1 << 5 - i;
        }
        result.push(outCode.code);
        decodedCodes.push(outCode);
      }
      if (!this._determineParity(codeFrequency, result)) {
        return null;
      }
      return outCode;
    }
  }, {
    key: "_determineParity",
    value: function _determineParity(codeFrequency, result) {
      for (var nrSystem = 0; nrSystem < this.CODE_FREQUENCY.length; nrSystem++) {
        for (var i = 0; i < this.CODE_FREQUENCY[nrSystem].length; i++) {
          if (codeFrequency === this.CODE_FREQUENCY[nrSystem][i]) {
            result.unshift(nrSystem);
            result.push(i);
            return true;
          }
        }
      }
      return false;
    }
  }, {
    key: "_convertToUPCA",
    value: function _convertToUPCA(result) {
      var upca = [result[0]];
      var lastDigit = result[result.length - 2];
      if (lastDigit <= 2) {
        upca = upca.concat(result.slice(1, 3)).concat([lastDigit, 0, 0, 0, 0]).concat(result.slice(3, 6));
      } else if (lastDigit === 3) {
        upca = upca.concat(result.slice(1, 4)).concat([0, 0, 0, 0, 0]).concat(result.slice(4, 6));
      } else if (lastDigit === 4) {
        upca = upca.concat(result.slice(1, 5)).concat([0, 0, 0, 0, 0, result[5]]);
      } else {
        upca = upca.concat(result.slice(1, 6)).concat([0, 0, 0, 0, lastDigit]);
      }
      upca.push(result[result.length - 1]);
      return upca;
    }
  }, {
    key: "_checksum",
    value: function _checksum(result) {
      return get_default()(getPrototypeOf_default()(UPCEReader.prototype), "_checksum", this).call(this, this._convertToUPCA(result));
    }
  }, {
    key: "_findEnd",
    value: function _findEnd(offset, isWhite) {
      return get_default()(getPrototypeOf_default()(UPCEReader.prototype), "_findEnd", this).call(this, offset, true);
    }
  }, {
    key: "_verifyTrailingWhitespace",
    value: function _verifyTrailingWhitespace(endInfo) {
      var trailingWhitespaceEnd = endInfo.end + (endInfo.end - endInfo.start) / 2;
      if (trailingWhitespaceEnd < this._row.length) {
        if (this._matchRange(endInfo.end, trailingWhitespaceEnd, 0)) {
          return endInfo;
        }
      }
      return null;
    }
  }]);
  return UPCEReader;
}(ean_reader);
/* harmony default export */ var upc_e_reader = (upc_e_reader_UPCEReader);
// CONCATENATED MODULE: ./src/reader/upc_reader.ts







function upc_reader_createSuper(Derived) { var hasNativeReflectConstruct = upc_reader_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }
function upc_reader_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var upc_reader_UPCReader = /*#__PURE__*/function (_EANReader) {
  inherits_default()(UPCReader, _EANReader);
  var _super = upc_reader_createSuper(UPCReader);
  function UPCReader() {
    var _this;
    classCallCheck_default()(this, UPCReader);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    defineProperty_default()(assertThisInitialized_default()(_this), "FORMAT", 'upc_a');
    return _this;
  }
  createClass_default()(UPCReader, [{
    key: "decode",
    value: function decode(row, start) {
      var result = ean_reader.prototype.decode.call(this);
      if (result && result.code && result.code.length === 13 && result.code.charAt(0) === '0') {
        result.code = result.code.substring(1);
        return result;
      }
      return null;
    }
  }]);
  return UPCReader;
}(ean_reader);
/* harmony default export */ var upc_reader = (upc_reader_UPCReader);
// CONCATENATED MODULE: ./src/decoder/bresenham.js
var Bresenham = {};
var Slope = {
  DIR: {
    UP: 1,
    DOWN: -1
  }
};
/**
 * Scans a line of the given image from point p1 to p2 and returns a result object containing
 * gray-scale values (0-255) of the underlying pixels in addition to the min
 * and max values.
 * @param {Object} imageWrapper
 * @param {Object} p1 The start point {x,y}
 * @param {Object} p2 The end point {x,y}
 * @returns {line, min, max}
 */
Bresenham.getBarcodeLine = function (imageWrapper, p1, p2) {
  /* eslint-disable no-bitwise */
  var x0 = p1.x | 0;
  var y0 = p1.y | 0;
  var x1 = p2.x | 0;
  var y1 = p2.y | 0;
  /* eslint-disable no-bitwise */
  var steep = Math.abs(y1 - y0) > Math.abs(x1 - x0);
  var error;
  var y;
  var tmp;
  var x;
  var line = [];
  var imageData = imageWrapper.data;
  var width = imageWrapper.size.x;
  var val;
  var min = 255;
  var max = 0;
  function read(a, b) {
    val = imageData[b * width + a];
    min = val < min ? val : min;
    max = val > max ? val : max;
    line.push(val);
  }
  if (steep) {
    tmp = x0;
    x0 = y0;
    y0 = tmp;
    tmp = x1;
    x1 = y1;
    y1 = tmp;
  }
  if (x0 > x1) {
    tmp = x0;
    x0 = x1;
    x1 = tmp;
    tmp = y0;
    y0 = y1;
    y1 = tmp;
  }
  var deltaX = x1 - x0;
  var deltaY = Math.abs(y1 - y0);
  error = deltaX / 2 | 0;
  y = y0;
  var yStep = y0 < y1 ? 1 : -1;
  for (x = x0; x < x1; x++) {
    if (steep) {
      read(y, x);
    } else {
      read(x, y);
    }
    error -= deltaY;
    if (error < 0) {
      y += yStep;
      error += deltaX;
    }
  }
  return {
    line: line,
    min: min,
    max: max
  };
};

/**
 * Converts the result from getBarcodeLine into a binary representation
 * also considering the frequency and slope of the signal for more robust results
 * @param {Object} result {line, min, max}
 */
Bresenham.toBinaryLine = function (result) {
  var min = result.min;
  var max = result.max;
  var line = result.line;
  var slope;
  var slope2;
  var center = min + (max - min) / 2;
  var extrema = [];
  var currentDir;
  var dir;
  var threshold = (max - min) / 12;
  var rThreshold = -threshold;
  var i;
  var j;

  // 1. find extrema
  currentDir = line[0] > center ? Slope.DIR.UP : Slope.DIR.DOWN;
  extrema.push({
    pos: 0,
    val: line[0]
  });
  for (i = 0; i < line.length - 2; i++) {
    slope = line[i + 1] - line[i];
    slope2 = line[i + 2] - line[i + 1];
    if (slope + slope2 < rThreshold && line[i + 1] < center * 1.5) {
      dir = Slope.DIR.DOWN;
    } else if (slope + slope2 > threshold && line[i + 1] > center * 0.5) {
      dir = Slope.DIR.UP;
    } else {
      dir = currentDir;
    }
    if (currentDir !== dir) {
      extrema.push({
        pos: i,
        val: line[i]
      });
      currentDir = dir;
    }
  }
  extrema.push({
    pos: line.length,
    val: line[line.length - 1]
  });
  for (j = extrema[0].pos; j < extrema[1].pos; j++) {
    line[j] = line[j] > center ? 0 : 1;
  }

  // iterate over extrema and convert to binary based on avg between minmax
  for (i = 1; i < extrema.length - 1; i++) {
    if (extrema[i + 1].val > extrema[i].val) {
      threshold = extrema[i].val + (extrema[i + 1].val - extrema[i].val) / 3 * 2 | 0;
    } else {
      threshold = extrema[i + 1].val + (extrema[i].val - extrema[i + 1].val) / 3 | 0;
    }
    for (j = extrema[i].pos; j < extrema[i + 1].pos; j++) {
      line[j] = line[j] > threshold ? 0 : 1;
    }
  }
  return {
    line: line,
    threshold: threshold
  };
};

/**
 * Used for development only
 */
Bresenham.debug = {
  printFrequency: function printFrequency(line, canvas) {
    var i;
    var ctx = canvas.getContext('2d');
    // eslint-disable-next-line no-param-reassign
    canvas.width = line.length;
    // eslint-disable-next-line no-param-reassign
    canvas.height = 256;
    ctx.beginPath();
    ctx.strokeStyle = 'blue';
    for (i = 0; i < line.length; i++) {
      ctx.moveTo(i, 255);
      ctx.lineTo(i, 255 - line[i]);
    }
    ctx.stroke();
    ctx.closePath();
  },
  printPattern: function printPattern(line, canvas) {
    var ctx = canvas.getContext('2d');
    var i;

    // eslint-disable-next-line no-param-reassign
    canvas.width = line.length;
    ctx.fillColor = 'black';
    for (i = 0; i < line.length; i++) {
      if (line[i] === 1) {
        ctx.fillRect(i, 0, 1, 100);
      }
    }
  }
};
/* harmony default export */ var bresenham = (Bresenham);
// CONCATENATED MODULE: ./src/decoder/barcode_decoder.js


function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

/* eslint-disable import/no-cycle */

















var READERS = {
  code_128_reader: code_128_reader,
  ean_reader: ean_reader,
  ean_5_reader: ean_5_reader,
  ean_2_reader: ean_2_reader,
  ean_8_reader: ean_8_reader,
  code_39_reader: code_39_reader,
  code_39_vin_reader: code_39_vin_reader,
  codabar_reader: codabar_reader,
  upc_reader: upc_reader,
  upc_e_reader: upc_e_reader,
  i2of5_reader: i2of5_reader,
  '2of5_reader': _2of5_reader,
  code_93_reader: code_93_reader,
  code_32_reader: code_32_reader
};
/* harmony default export */ var barcode_decoder = ({
  registerReader: function registerReader(name, reader) {
    READERS[name] = reader;
  },
  create: function create(config, inputImageWrapper) {
    var _canvas = {
      ctx: {
        frequency: null,
        pattern: null,
        overlay: null
      },
      dom: {
        frequency: null,
        pattern: null,
        overlay: null
      }
    };
    var _barcodeReaders = [];
    initCanvas();
    initReaders();
    initConfig();
    function initCanvas() {
      if (false) { var $debug; }
    }
    function initReaders() {
      config.readers.forEach(function (readerConfig) {
        var reader;
        var configuration = {};
        var supplements = [];
        if (typeof_default()(readerConfig) === 'object') {
          reader = readerConfig.format;
          configuration = readerConfig.config;
        } else if (typeof readerConfig === 'string') {
          reader = readerConfig;
        }
        if (false) {}
        if (configuration.supplements) {
          supplements = configuration.supplements.map(function (supplement) {
            return new READERS[supplement]();
          });
        }
        try {
          var readerObj = new READERS[reader](configuration, supplements);
          _barcodeReaders.push(readerObj);
        } catch (err) {
          console.error('* Error constructing reader ', reader, err);
          throw err;
        }
      });
      if (false) {}
    }
    function initConfig() {
      if (false) { var vis, i; }
    }

    /**
     * extend the line on both ends
     * @param {Array} line
     * @param {Number} angle
     */
    function getExtendedLine(line, angle, ext) {
      function extendLine(amount) {
        var extension = {
          y: amount * Math.sin(angle),
          x: amount * Math.cos(angle)
        };
        /* eslint-disable no-param-reassign */
        line[0].y -= extension.y;
        line[0].x -= extension.x;
        line[1].y += extension.y;
        line[1].x += extension.x;
        /* eslint-enable no-param-reassign */
      }

      // check if inside image
      extendLine(ext);
      while (ext > 1 && (!inputImageWrapper.inImageWithBorder(line[0]) || !inputImageWrapper.inImageWithBorder(line[1]))) {
        // eslint-disable-next-line no-param-reassign
        ext -= Math.ceil(ext / 2);
        extendLine(-ext);
      }
      return line;
    }
    function getLine(box) {
      return [{
        x: (box[1][0] - box[0][0]) / 2 + box[0][0],
        y: (box[1][1] - box[0][1]) / 2 + box[0][1]
      }, {
        x: (box[3][0] - box[2][0]) / 2 + box[2][0],
        y: (box[3][1] - box[2][1]) / 2 + box[2][1]
      }];
    }
    function tryDecode(line) {
      var result = null;
      var i;
      var barcodeLine = bresenham.getBarcodeLine(inputImageWrapper, line[0], line[1]);
      if (false) {}
      bresenham.toBinaryLine(barcodeLine);
      if (false) {}
      for (i = 0; i < _barcodeReaders.length && result === null; i++) {
        result = _barcodeReaders[i].decodePattern(barcodeLine.line);
      }
      if (result === null) {
        return null;
      }
      return {
        codeResult: result,
        barcodeLine: barcodeLine
      };
    }

    /**
     * This method slices the given area apart and tries to detect a barcode-pattern
     * for each slice. It returns the decoded barcode, or null if nothing was found
     * @param {Array} box
     * @param {Array} line
     * @param {Number} lineAngle
     */
    function tryDecodeBruteForce(box, line, lineAngle) {
      var sideLength = Math.sqrt(Math.pow(box[1][0] - box[0][0], 2) + Math.pow(box[1][1] - box[0][1], 2));
      var i;
      var slices = 16;
      var result = null;
      var dir;
      var extension;
      var xdir = Math.sin(lineAngle);
      var ydir = Math.cos(lineAngle);
      for (i = 1; i < slices && result === null; i++) {
        // move line perpendicular to angle
        // eslint-disable-next-line no-mixed-operators
        dir = sideLength / slices * i * (i % 2 === 0 ? -1 : 1);
        extension = {
          y: dir * xdir,
          x: dir * ydir
        };
        /* eslint-disable no-param-reassign */
        line[0].y += extension.x;
        line[0].x -= extension.y;
        line[1].y += extension.x;
        line[1].x -= extension.y;
        /* eslint-enable no-param-reassign */

        result = tryDecode(line);
      }
      return result;
    }
    function getLineLength(line) {
      return Math.sqrt(Math.pow(Math.abs(line[1].y - line[0].y), 2) + Math.pow(Math.abs(line[1].x - line[0].x), 2));
    }
    function _decodeFromImage2(_x) {
      return _decodeFromImage.apply(this, arguments);
    }
    /**
     * With the help of the configured readers (Code128 or EAN) this function tries to detect a
     * valid barcode pattern within the given area.
     * @param {Object} box The area to search in
     * @returns {Object} the result {codeResult, line, angle, pattern, threshold}
     */
    function _decodeFromImage() {
      _decodeFromImage = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee2(imageWrapper) {
        var result, _iterator, _step, reader;
        return regenerator_default.a.wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              result = null;
              _iterator = _createForOfIteratorHelper(_barcodeReaders);
              _context2.prev = 2;
              _iterator.s();
            case 4:
              if ((_step = _iterator.n()).done) {
                _context2.next = 14;
                break;
              }
              reader = _step.value;
              if (!reader.decodeImage) {
                _context2.next = 12;
                break;
              }
              _context2.next = 9;
              return reader.decodeImage(imageWrapper);
            case 9:
              result = _context2.sent;
              if (!result) {
                _context2.next = 12;
                break;
              }
              return _context2.abrupt("break", 14);
            case 12:
              _context2.next = 4;
              break;
            case 14:
              _context2.next = 19;
              break;
            case 16:
              _context2.prev = 16;
              _context2.t0 = _context2["catch"](2);
              _iterator.e(_context2.t0);
            case 19:
              _context2.prev = 19;
              _iterator.f();
              return _context2.finish(19);
            case 22:
              return _context2.abrupt("return", result);
            case 23:
            case "end":
              return _context2.stop();
          }
        }, _callee2, null, [[2, 16, 19, 22]]);
      }));
      return _decodeFromImage.apply(this, arguments);
    }
    function _decodeFromBoundingBox(box) {
      var line;
      var ctx = _canvas.ctx.overlay;
      var result;
      if (false) {}
      line = getLine(box);
      var lineLength = getLineLength(line);
      var lineAngle = Math.atan2(line[1].y - line[0].y, line[1].x - line[0].x);
      line = getExtendedLine(line, lineAngle, Math.floor(lineLength * 0.1));
      if (line === null) {
        return null;
      }
      result = tryDecode(line);
      if (result === null) {
        result = tryDecodeBruteForce(box, line, lineAngle);
      }
      if (result === null) {
        return null;
      }
      if (false) {}
      return {
        codeResult: result.codeResult,
        line: line,
        angle: lineAngle,
        pattern: result.barcodeLine.line,
        threshold: result.barcodeLine.threshold
      };
    }
    return {
      decodeFromBoundingBox: function decodeFromBoundingBox(box) {
        return _decodeFromBoundingBox(box);
      },
      decodeFromBoundingBoxes: function decodeFromBoundingBoxes(boxes) {
        var i;
        var result;
        var barcodes = [];
        var multiple = config.multiple;
        for (i = 0; i < boxes.length; i++) {
          var box = boxes[i];
          result = _decodeFromBoundingBox(box) || {};
          result.box = box;
          if (multiple) {
            barcodes.push(result);
          } else if (result.codeResult) {
            return result;
          }
        }
        return {
          barcodes: barcodes
        };
      },
      decodeFromImage: function decodeFromImage(imageWrapperIn) {
        return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
          var result;
          return regenerator_default.a.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _decodeFromImage2(imageWrapperIn);
              case 2:
                result = _context.sent;
                return _context.abrupt("return", result);
              case 4:
              case "end":
                return _context.stop();
            }
          }, _callee);
        }))();
      },
      registerReader: function registerReader(name, reader) {
        if (READERS[name]) {
          throw new Error('cannot register existing reader', name);
        }
        READERS[name] = reader;
      },
      setReaders: function setReaders(readers) {
        // eslint-disable-next-line no-param-reassign
        config.readers = readers;
        _barcodeReaders.length = 0;
        initReaders();
      }
    };
  }
});
// CONCATENATED MODULE: ./src/reader/index.ts
















// CONCATENATED MODULE: ./src/common/events.ts
/* harmony default export */ var events = ((function EventInterface() {
  var events = {};
  function getEvent(eventName) {
    if (!events[eventName]) {
      events[eventName] = {
        subscribers: []
      };
    }
    return events[eventName];
  }
  function clearEvents() {
    events = {};
  }
  function publishSubscription(subscription, data) {
    if (subscription.async) {
      setTimeout(function () {
        subscription.callback(data);
      }, 4);
    } else {
      subscription.callback(data);
    }
  }
  function _subscribe(event, callback, async) {
    var subscription;
    if (typeof callback === 'function') {
      subscription = {
        callback: callback,
        async: async
      };
    } else {
      subscription = callback;
      if (!subscription.callback) {
        throw new Error('Callback was not specified on options');
      }
    }
    getEvent(event).subscribers.push(subscription);
  }
  return {
    subscribe: function subscribe(event, callback, async) {
      return _subscribe(event, callback, async);
    },
    publish: function publish(eventName, data) {
      var event = getEvent(eventName);
      var subscribers = event.subscribers;

      // Publish one-time subscriptions
      subscribers.filter(function (subscriber) {
        return !!subscriber.once;
      }).forEach(function (subscriber) {
        publishSubscription(subscriber, data);
      });

      // remove them from the subscriber
      event.subscribers = subscribers.filter(function (subscriber) {
        return !subscriber.once;
      });

      // publish the rest
      event.subscribers.forEach(function (subscriber) {
        publishSubscription(subscriber, data);
      });
    },
    once: function once(event, callback) {
      var async = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      _subscribe(event, {
        callback: callback,
        async: async,
        once: true
      });
    },
    unsubscribe: function unsubscribe(eventName, callback) {
      if (eventName) {
        var _event = getEvent(eventName);
        if (_event && callback) {
          _event.subscribers = _event.subscribers.filter(function (subscriber) {
            return subscriber.callback !== callback;
          });
        } else {
          _event.subscribers = [];
        }
      } else {
        clearEvents();
      }
    }
  };
})());
// EXTERNAL MODULE: ./node_modules/lodash/pick.js
var pick = __webpack_require__(63);
var pick_default = /*#__PURE__*/__webpack_require__.n(pick);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/wrapNativeSuper.js
var wrapNativeSuper = __webpack_require__(64);
var wrapNativeSuper_default = /*#__PURE__*/__webpack_require__.n(wrapNativeSuper);

// CONCATENATED MODULE: ./src/quagga/Exception.ts








function Exception_createSuper(Derived) { var hasNativeReflectConstruct = Exception_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }
function Exception_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var Exception_Exception = /*#__PURE__*/function (_Error) {
  inherits_default()(Exception, _Error);
  var _super = Exception_createSuper(Exception);
  function Exception(m, code) {
    var _this;
    classCallCheck_default()(this, Exception);
    _this = _super.call(this, m);
    defineProperty_default()(assertThisInitialized_default()(_this), "code", void 0);
    _this.code = code;
    Object.setPrototypeOf(assertThisInitialized_default()(_this), Exception.prototype);
    return _this;
  }
  return createClass_default()(Exception);
}( /*#__PURE__*/wrapNativeSuper_default()(Error));

// CONCATENATED MODULE: ./src/common/mediaDevices.ts

var ERROR_DESC = 'This may mean that the user has declined camera access, or the browser does not support media APIs. If you are running in iOS, you must use Safari.';
function enumerateDevices() {
  try {
    return navigator.mediaDevices.enumerateDevices();
  } catch (err) {
    var error = new Exception_Exception("enumerateDevices is not defined. ".concat(ERROR_DESC), -1);
    return Promise.reject(error);
  }
}
function getUserMedia(constraints) {
  try {
    return navigator.mediaDevices.getUserMedia(constraints);
  } catch (err) {
    var error = new Exception_Exception("getUserMedia is not defined. ".concat(ERROR_DESC), -1);
    return Promise.reject(error);
  }
}
// CONCATENATED MODULE: ./src/input/camera_access.ts


// TODO: when this file was written years ago, HTMLMediaElement.play() did not return a useful value
// to let us know when the video started playing.  Now, it does.  So, we shouldn't need to run this
// odd waitForVideo() function that polls to see if the video has started.



var streamRef;
function waitForVideo(video) {
  return new Promise(function (resolve, reject) {
    var attempts = 10;
    function checkVideo() {
      if (attempts > 0) {
        if (video.videoWidth > 10 && video.videoHeight > 10) {
          if (false) {}
          resolve();
        } else {
          window.setTimeout(checkVideo, 500);
        }
      } else {
        reject(new Exception_Exception('Unable to play video stream. Is webcam working?', -1)); // TODO: add error code
      }

      attempts--;
    }
    checkVideo();
  });
}

/**
 * Tries to attach the camera-stream to a given video-element
 * and calls the callback function when the content is ready
 * @param {Object} constraints
 * @param {Object} video
 */
function initCamera(_x, _x2) {
  return _initCamera.apply(this, arguments);
}
function _initCamera() {
  _initCamera = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee4(video, constraints) {
    var stream;
    return regenerator_default.a.wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return getUserMedia(constraints);
        case 2:
          stream = _context4.sent;
          streamRef = stream;
          if (!video) {
            _context4.next = 11;
            break;
          }
          video.setAttribute('autoplay', 'true');
          video.setAttribute('muted', 'true');
          video.setAttribute('playsinline', 'true'); // not listed on MDN...
          // eslint-disable-next-line no-param-reassign
          video.srcObject = stream;
          video.addEventListener('loadedmetadata', function () {
            video.play()["catch"](function (err) {
              console.warn('* Error while trying to play video stream:', err);
            });
          });
          return _context4.abrupt("return", waitForVideo(video));
        case 11:
          return _context4.abrupt("return", Promise.resolve());
        case 12:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return _initCamera.apply(this, arguments);
}
function deprecatedConstraints(videoConstraints) {
  var normalized = pick_default()(videoConstraints, ['width', 'height', 'facingMode', 'aspectRatio', 'deviceId']);
  if (typeof videoConstraints.minAspectRatio !== 'undefined' && videoConstraints.minAspectRatio > 0) {
    normalized.aspectRatio = videoConstraints.minAspectRatio;
    console.log('WARNING: Constraint \'minAspectRatio\' is deprecated; Use \'aspectRatio\' instead');
  }
  if (typeof videoConstraints.facing !== 'undefined') {
    normalized.facingMode = videoConstraints.facing;
    console.log('WARNING: Constraint \'facing\' is deprecated. Use \'facingMode\' instead\'');
  }
  return normalized;
}

// TODO: #192 I don't think there's any good reason pickConstraints should return a Promise,
// I think it was just that way so it could be chained to other functions that did return a Promise.
// That's not necessary with async functions being a thing, so that should be fixed.
function pickConstraints() {
  var videoConstraints = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var video = deprecatedConstraints(videoConstraints);
  if (video && video.deviceId && video.facingMode) {
    delete video.facingMode;
  }
  return Promise.resolve({
    audio: false,
    video: video
  });
}
function enumerateVideoDevices() {
  return _enumerateVideoDevices.apply(this, arguments);
}
function _enumerateVideoDevices() {
  _enumerateVideoDevices = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee5() {
    var devices;
    return regenerator_default.a.wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return enumerateDevices();
        case 2:
          devices = _context5.sent;
          return _context5.abrupt("return", devices.filter(function (device) {
            return device.kind === 'videoinput';
          }));
        case 4:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return _enumerateVideoDevices.apply(this, arguments);
}
function getActiveTrack() {
  if (!streamRef) {
    return null;
  }
  var tracks = streamRef.getVideoTracks();
  return tracks && tracks !== null && tracks !== void 0 && tracks.length ? tracks[0] : null;
}

/**
 * Used for accessing information about the active stream track and available video devices.
 */
var QuaggaJSCameraAccess = {
  requestedVideoElement: null,
  request: function request(video, videoConstraints) {
    return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
      var newConstraints;
      return regenerator_default.a.wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            QuaggaJSCameraAccess.requestedVideoElement = video;
            _context.next = 3;
            return pickConstraints(videoConstraints);
          case 3:
            newConstraints = _context.sent;
            return _context.abrupt("return", initCamera(video, newConstraints));
          case 5:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  },
  release: function release() {
    var tracks = streamRef && streamRef.getVideoTracks();
    if (QuaggaJSCameraAccess.requestedVideoElement !== null) {
      QuaggaJSCameraAccess.requestedVideoElement.pause();
    }
    return new Promise(function (resolve) {
      setTimeout(function () {
        if (tracks && tracks.length) {
          tracks.forEach(function (track) {
            return track.stop();
          });
        }
        streamRef = null;
        QuaggaJSCameraAccess.requestedVideoElement = null;
        resolve();
      }, 0);
    });
  },
  enumerateVideoDevices: enumerateVideoDevices,
  getActiveStreamLabel: function getActiveStreamLabel() {
    var track = getActiveTrack();
    return track ? track.label : '';
  },
  getActiveTrack: getActiveTrack,
  disableTorch: function disableTorch() {
    return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee2() {
      var track;
      return regenerator_default.a.wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            track = getActiveTrack(); // TODO: should we acquire camera access even if there's no current camera open?
            // TODO: what happens on iOS or another device where torch isn't supported at all? Should we throw an error?
            if (!track) {
              _context2.next = 11;
              break;
            }
            _context2.prev = 2;
            _context2.next = 5;
            return track.applyConstraints({
              advanced: [{
                torch: false
              }]
            });
          case 5:
            _context2.next = 11;
            break;
          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](2);
            if (_context2.t0 instanceof OverconstrainedError) {
              console.warn('quagga2/CameraAccess: Torch not supported on this device');
            }
            throw _context2.t0;
          case 11:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[2, 7]]);
    }))();
  },
  enableTorch: function enableTorch() {
    return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee3() {
      var track;
      return regenerator_default.a.wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            track = getActiveTrack(); // TODO: should we acquire camera access even if there's no current camera open?
            // TODO: what happens on iOS or another device where torch isn't supported at all? Should we throw an error?
            if (!track) {
              _context3.next = 11;
              break;
            }
            _context3.prev = 2;
            _context3.next = 5;
            return track.applyConstraints({
              advanced: [{
                torch: true
              }]
            });
          case 5:
            _context3.next = 11;
            break;
          case 7:
            _context3.prev = 7;
            _context3.t0 = _context3["catch"](2);
            if (_context3.t0 instanceof OverconstrainedError) {
              console.warn('quagga2/CameraAccess: Torch not supported on this device');
            }
            throw _context3.t0;
          case 11:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[2, 7]]);
    }))();
  }
};
/* harmony default export */ var camera_access = (QuaggaJSCameraAccess);
// CONCATENATED MODULE: ./src/analytics/result_collector.ts

function contains(codeResult, list) {
  return list && list.some(function (item) {
    var keys = Object.keys(item);
    return keys.every(function (key) {
      return item[key] === codeResult[key];
    });
  });
}
function passesFilter(codeResult, filter) {
  return typeof filter === 'function' ? filter(codeResult) : true;
}
/* harmony default export */ var result_collector = ({
  create: function create(config) {
    var _config$capacity;
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d', {
      willReadFrequently: !!config.willReadFrequently
    });
    var results = [];
    var capacity = (_config$capacity = config.capacity) !== null && _config$capacity !== void 0 ? _config$capacity : 20;
    var capture = config.capture === true;
    function matchesConstraints(codeResult) {
      return !!capacity && codeResult && !contains(codeResult, config.blacklist) && passesFilter(codeResult, config.filter);
    }
    return {
      addResult: function addResult(data, imageSize, codeResult) {
        var result = {}; // this is 'any' to avoid having to construct a whole QuaggaJSCodeResult :|
        if (matchesConstraints(codeResult)) {
          capacity--;
          result.codeResult = codeResult;
          if (capture) {
            canvas.width = imageSize.x;
            canvas.height = imageSize.y;
            image_debug["a" /* default */].drawImage(data, imageSize, ctx);
            result.frame = canvas.toDataURL();
          }
          results.push(result);
        }
      },
      getResults: function getResults() {
        return results;
      }
    };
  }
});
// CONCATENATED MODULE: ./src/config/config.dev.ts
var DevConfig = {
  inputStream: {
    name: 'Live',
    type: 'LiveStream',
    constraints: {
      width: 640,
      height: 480,
      // aspectRatio: 640/480, // optional
      facingMode: 'environment' // or user
      // deviceId: "38745983457387598375983759834"
    },

    area: {
      top: '0%',
      right: '0%',
      left: '0%',
      bottom: '0%'
    },
    singleChannel: false // true: only the red color-channel is read
  },

  locate: true,
  numOfWorkers: 0,
  decoder: {
    readers: ['code_128_reader'],
    debug: {
      drawBoundingBox: false,
      showFrequency: false,
      drawScanline: false,
      showPattern: false
    }
  },
  locator: {
    halfSample: true,
    patchSize: 'medium',
    // x-small, small, medium, large, x-large
    debug: {
      showCanvas: false,
      showPatches: false,
      showFoundPatches: false,
      showSkeleton: false,
      showLabels: false,
      showPatchLabels: false,
      showRemainingPatchLabels: false,
      boxFromPatches: {
        showTransformed: false,
        showTransformedBox: false,
        showBB: false
      }
    }
  }
};
/* harmony default export */ var config_dev = (DevConfig);
// CONCATENATED MODULE: ./src/config/config.node.ts
var NodeConfig = {
  inputStream: {
    type: 'ImageStream',
    sequence: false,
    size: 800,
    area: {
      top: '0%',
      right: '0%',
      left: '0%',
      bottom: '0%'
    },
    singleChannel: false // true: only the red color-channel is read
  },

  locate: true,
  numOfWorkers: 0,
  decoder: {
    readers: ['code_128_reader']
  },
  locator: {
    halfSample: true,
    patchSize: 'medium' // x-small, small, medium, large, x-large
  }
};

/* harmony default export */ var config_node = (NodeConfig);
// CONCATENATED MODULE: ./src/config/config.prod.ts
var ProdConfig = {
  inputStream: {
    name: 'Live',
    type: 'LiveStream',
    constraints: {
      width: 640,
      height: 480,
      // aspectRatio: 640/480, // optional
      facingMode: 'environment' // or user
      // deviceId: "38745983457387598375983759834"
    },

    area: {
      top: '0%',
      right: '0%',
      left: '0%',
      bottom: '0%'
    },
    singleChannel: false // true: only the red color-channel is read
  },

  locate: true,
  numOfWorkers: 4,
  decoder: {
    readers: ['code_128_reader']
  },
  locator: {
    halfSample: true,
    patchSize: 'medium' // x-small, small, medium, large, x-large
  }
};

/* harmony default export */ var config_prod = (ProdConfig);
// CONCATENATED MODULE: ./src/config/config.ts



var ExportConfig = function () {
  var QuaggaConfig;
  if (false) {} else if (true) {
    QuaggaConfig = config_node;
  } else {}
  return QuaggaConfig;
}();
/* harmony default export */ var config_config = (ExportConfig);
// EXTERNAL MODULE: external "gl-matrix"
var external_gl_matrix_ = __webpack_require__(5);

// EXTERNAL MODULE: ./src/input/frame_grabber.js
var frame_grabber = __webpack_require__(65);
var frame_grabber_default = /*#__PURE__*/__webpack_require__.n(frame_grabber);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(33);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);

// EXTERNAL MODULE: external "get-pixels"
var external_get_pixels_ = __webpack_require__(66);
var external_get_pixels_default = /*#__PURE__*/__webpack_require__.n(external_get_pixels_);

// CONCATENATED MODULE: ./src/input/input_stream/input_stream.ts

// TODO: It's pretty likely that this shares code with the browser version, investigate that
// FOR ANYONE IN HERE IN THE FUTURE: This is the default input_stream module used for the Node bundle.
// webpack.config.js *replaces* this with input_stream_browser.ts when the bundle is being built for browser.


var inputStreamFactory = {
  createVideoStream: function createVideoStream() {
    throw new Error('createVideoStream not available');
  },
  createLiveStream: function createLiveStream() {
    throw new Error('createLiveStream not available');
  },
  createImageStream: function createImageStream() {
    // console.warn('* InputStreamNode createImageStream');
    var _config = null;
    var width = 0;
    var height = 0;
    var loaded = false;
    // TODO: frame should be a type NdArray, but NdArray doesn't have ts definitions
    // TODO: there is a ts-ndarray that might work, though
    var frame = null;
    var baseUrl;
    var _ended = false;
    var calculatedWidth;
    var calculatedHeight;
    var _eventNames = ['canrecord', 'ended'];
    var _eventHandlers = {};
    var _topRight = {
      x: 0,
      y: 0,
      type: 'Point'
    };
    var _canvasSize = {
      x: 0,
      y: 0,
      type: 'XYSize'
    };
    /* eslint-disable no-unused-vars */ // false eslint errors? weird.
    // @ts-ignore
    var size = 0;
    // @ts-ignore
    var frameIdx = 0;
    // @ts-ignore
    var paused = false;
    /* eslint-enable no-unused-vars */

    function loadImages() {
      var _config2;
      loaded = false;
      /* eslint-disable new-cap */
      external_get_pixels_default()(baseUrl, (_config2 = _config) === null || _config2 === void 0 ? void 0 : _config2.mime, function (err, pixels) {
        var _config3, _config4;
        if (err) {
          console.error('**** quagga loadImages error:', err);
          throw new Error('error decoding pixels in loadImages');
        }
        loaded = true;
        if (false) {}
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        frame = pixels;
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-member-access
        // eslint-disable-next-line no-nested-ternary
        var _pixels$shape = slicedToArray_default()(pixels.shape, 2);
        width = _pixels$shape[0];
        height = _pixels$shape[1];
        calculatedWidth = (_config3 = _config) !== null && _config3 !== void 0 && _config3.size ? width / height > 1 ? _config.size : Math.floor(width / height * _config.size) : width;
        // eslint-disable-next-line no-nested-ternary
        calculatedHeight = (_config4 = _config) !== null && _config4 !== void 0 && _config4.size ? width / height > 1 ? Math.floor(height / width * _config.size) : _config.size : height;
        _canvasSize.x = calculatedWidth;
        _canvasSize.y = calculatedHeight;
        setTimeout(function () {
          // eslint-disable-next-line @typescript-eslint/no-use-before-define
          publishEvent('canrecord', []);
        }, 0);
      });
    }
    function publishEvent(eventName, args) {
      var handlers = _eventHandlers[eventName];
      if (handlers && handlers.length > 0) {
        for (var j = 0; j < handlers.length; j++) {
          // eslint-disable-next-line @typescript-eslint/no-use-before-define
          handlers[j].apply(inputStream, args);
        }
      }
    }

    // eslint-disable-next-line no-var,vars-on-top
    var inputStream = {
      trigger: publishEvent,
      getWidth: function getWidth() {
        return calculatedWidth;
      },
      getHeight: function getHeight() {
        return calculatedHeight;
      },
      setWidth: function setWidth(w) {
        calculatedWidth = w;
      },
      setHeight: function setHeight(h) {
        calculatedHeight = h;
      },
      getRealWidth: function getRealWidth() {
        return width;
      },
      getRealHeight: function getRealHeight() {
        return height;
      },
      setInputStream: function setInputStream(stream) {
        var _config5;
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        _config = stream;
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-member-access
        baseUrl = (_config5 = _config) === null || _config5 === void 0 ? void 0 : _config5.src;
        size = 1;
        loadImages();
      },
      ended: function ended() {
        return _ended;
      },
      setAttribute: function setAttribute() {},
      getConfig: function getConfig() {
        return _config;
      },
      pause: function pause() {
        paused = true;
      },
      play: function play() {
        paused = false;
      },
      setCurrentTime: function setCurrentTime(time) {
        frameIdx = time;
      },
      addEventListener: function addEventListener(event, f) {
        if (_eventNames.indexOf(event) !== -1) {
          if (!_eventHandlers[event]) {
            _eventHandlers[event] = [];
          }
          _eventHandlers[event].push(f);
        }
      },
      clearEventHandlers: function clearEventHandlers() {
        Object.keys(_eventHandlers).forEach(function (ind) {
          return delete _eventHandlers[ind];
        });
      },
      setTopRight: function setTopRight(topRight) {
        _topRight.x = topRight.x;
        _topRight.y = topRight.y;
      },
      getTopRight: function getTopRight() {
        return _topRight;
      },
      setCanvasSize: function setCanvasSize(sz) {
        _canvasSize.x = sz.x;
        _canvasSize.y = sz.y;
      },
      getCanvasSize: function getCanvasSize() {
        return _canvasSize;
      },
      getFrame: function getFrame() {
        if (!loaded) {
          return null;
        }
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return frame;
      }
    };
    return inputStream;
  }
};
/* harmony default export */ var input_stream = (inputStreamFactory);
// EXTERNAL MODULE: ./src/locator/barcode_locator.js
var barcode_locator = __webpack_require__(23);

// CONCATENATED MODULE: ./src/QuaggaContext.ts



var QuaggaContext_QuaggaContext = /*#__PURE__*/createClass_default()(function QuaggaContext() {
  classCallCheck_default()(this, QuaggaContext);
  defineProperty_default()(this, "config", void 0);
  defineProperty_default()(this, "inputStream", void 0);
  defineProperty_default()(this, "framegrabber", void 0);
  defineProperty_default()(this, "inputImageWrapper", void 0);
  defineProperty_default()(this, "stopped", false);
  defineProperty_default()(this, "boxSize", void 0);
  defineProperty_default()(this, "resultCollector", void 0);
  defineProperty_default()(this, "decoder", void 0);
  defineProperty_default()(this, "workerPool", []);
  defineProperty_default()(this, "onUIThread", true);
  defineProperty_default()(this, "canvasContainer", new QuaggaContext_CanvasContainer());
});
var QuaggaContext_CanvasInfo = /*#__PURE__*/createClass_default()(function CanvasInfo() {
  classCallCheck_default()(this, CanvasInfo);
  defineProperty_default()(this, "image", void 0);
  defineProperty_default()(this, "overlay", void 0);
});
var QuaggaContext_CanvasContainer = /*#__PURE__*/createClass_default()(function CanvasContainer() {
  classCallCheck_default()(this, CanvasContainer);
  defineProperty_default()(this, "ctx", void 0);
  defineProperty_default()(this, "dom", void 0);
  this.ctx = new QuaggaContext_CanvasInfo();
  this.dom = new QuaggaContext_CanvasInfo();
});
// CONCATENATED MODULE: ./src/quagga/getViewPort.ts
function getViewPort_getViewPort(target) {
  if (typeof document === 'undefined') {
    return null;
  }

  // Check if target is already a DOM element
  if (target instanceof HTMLElement && target.nodeName && target.nodeType === 1) {
    return target;
  }
  // Use '#interactive.viewport' as a fallback selector (backwards compatibility)
  var selector = typeof target === 'string' ? target : '#interactive.viewport';
  return document.querySelector(selector);
}
// CONCATENATED MODULE: ./src/quagga/initBuffers.ts



external_gl_matrix_["glMatrix"].setMatrixArrayType(Array);

// TODO: need typescript def for BarcodeLocator
function initBuffers_initBuffers(inputStream, imageWrapper, locator) {
  var inputImageWrapper = imageWrapper || new image_wrapper["a" /* default */]({
    x: inputStream.getWidth(),
    y: inputStream.getHeight(),
    type: 'XYSize'
  });
  if (false) {}
  var boxSize = [external_gl_matrix_["vec2"].clone([0, 0]), external_gl_matrix_["vec2"].clone([0, inputImageWrapper.size.y]), external_gl_matrix_["vec2"].clone([inputImageWrapper.size.x, inputImageWrapper.size.y]), external_gl_matrix_["vec2"].clone([inputImageWrapper.size.x, 0])];
  barcode_locator["a" /* default */].init(inputImageWrapper, locator);
  return {
    inputImageWrapper: inputImageWrapper,
    boxSize: boxSize
  };
}
// CONCATENATED MODULE: ./src/quagga/initCanvas.ts

function findOrCreateCanvas(selector, className) {
  var canvas = document.querySelector(selector);
  if (!canvas) {
    canvas = document.createElement('canvas');
    canvas.className = className;
  }
  return canvas;
}
function getCanvasAndContext(selector, className, options) {
  var canvas = findOrCreateCanvas(selector, className);
  console.warn('* initCanvas getCanvasAndContext');
  var context = canvas.getContext('2d', {
    willReadFrequently: options.willReadFrequently
  });
  return {
    canvas: canvas,
    context: context
  };
}
function initCanvases(canvasSize, _ref) {
  var willReadFrequently = _ref.willReadFrequently;
  if (typeof document !== 'undefined') {
    var image = getCanvasAndContext('canvas.imgBuffer', 'imgBuffer', {
      willReadFrequently: willReadFrequently
    });
    var overlay = getCanvasAndContext('canvas.drawingBuffer', 'drawingBuffer', {
      willReadFrequently: willReadFrequently
    });

    // eslint-disable-next-line no-multi-assign
    image.canvas.width = overlay.canvas.width = canvasSize.x;
    // eslint-disable-next-line no-multi-assign
    image.canvas.height = overlay.canvas.height = canvasSize.y;
    return {
      dom: {
        image: image.canvas,
        overlay: overlay.canvas
      },
      ctx: {
        image: image.context,
        overlay: overlay.context
      }
    };
  }
  return null;
}
function initCanvas_initCanvas(context) {
  var _context$config, _context$config$input, _context$config2, _context$config2$inpu, _context$config3, _context$config3$inpu;
  var viewport = getViewPort_getViewPort(context === null || context === void 0 ? void 0 : (_context$config = context.config) === null || _context$config === void 0 ? void 0 : (_context$config$input = _context$config.inputStream) === null || _context$config$input === void 0 ? void 0 : _context$config$input.target);
  var type = context === null || context === void 0 ? void 0 : (_context$config2 = context.config) === null || _context$config2 === void 0 ? void 0 : (_context$config2$inpu = _context$config2.inputStream) === null || _context$config2$inpu === void 0 ? void 0 : _context$config2$inpu.type;
  if (!type) return null;
  var container = initCanvases(context.inputStream.getCanvasSize(), {
    willReadFrequently: !!(context !== null && context !== void 0 && (_context$config3 = context.config) !== null && _context$config3 !== void 0 && (_context$config3$inpu = _context$config3.inputStream) !== null && _context$config3$inpu !== void 0 && _context$config3$inpu.willReadFrequently)
  });
  if (!container) return {
    dom: {
      image: null,
      overlay: null
    },
    ctx: {
      image: null,
      overlay: null
    }
  };
  var dom = container.dom;
  if (typeof document !== 'undefined') {
    if (viewport) {
      if (type === 'ImageStream' && !viewport.contains(dom.image)) {
        viewport.appendChild(dom.image);
      }
      if (!viewport.contains(dom.overlay)) {
        viewport.appendChild(dom.overlay);
      }
    }
  }
  return container;
}
// CONCATENATED MODULE: ./src/quagga/qworker.ts

function qworker_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function qworker_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? qworker_ownKeys(Object(t), !0).forEach(function (r) { defineProperty_default()(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : qworker_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
/* Worker functions. These are straight from the original quagga.js file.
 * Not presently used, as worker support is non-functional.  Keeping them around temporarily
 * to refer to until it is re-implemented. We may be able to fix/use some of this.
 */

// TODO: need a typescript interface for FrameGrabber

var workerPool = [];
function updateWorkers(frameGrabber) {
  var availableWorker;
  if (workerPool.length) {
    availableWorker = workerPool.filter(function (workerThread) {
      return !workerThread.busy;
    })[0];
    if (availableWorker) {
      frameGrabber.attachData(availableWorker.imageData);
      if (frameGrabber.grab()) {
        availableWorker.busy = true;
        availableWorker.worker.postMessage({
          cmd: 'process',
          imageData: availableWorker.imageData
        }, [availableWorker.imageData.buffer]);
      }
      return true;
    } else {
      return false;
    }
  }
  return null;
}
function configForWorker(config) {
  return qworker_objectSpread(qworker_objectSpread({}, config), {}, {
    inputStream: qworker_objectSpread(qworker_objectSpread({}, config.inputStream), {}, {
      target: null
    })
  });
}

// @ts-ignore
function workerInterface(factory) {
  if (factory) {
    var Quagga = factory()["default"];
    if (!Quagga) {
      // @ts-ignore
      self.postMessage({
        'event': 'error',
        message: 'Quagga could not be created'
      });
      return;
    }
  }
  // @ts-ignore
  var imageWrapper;

  // @ts-ignore
  function onProcessed(result) {
    self.postMessage({
      'event': 'processed',
      // @ts-ignore
      imageData: imageWrapper.data,
      result: result
      // @ts-ignore
    }, [imageWrapper.data.buffer]);
  }
  function workerInterfaceReady() {
    self.postMessage({
      'event': 'initialized',
      // @ts-ignore
      imageData: imageWrapper.data
      // @ts-ignore
    }, [imageWrapper.data.buffer]);
  }

  // @ts-ignore
  self.onmessage = function (e) {
    if (e.data.cmd === 'init') {
      var config = e.data.config;
      config.numOfWorkers = 0;
      imageWrapper = new Quagga.ImageWrapper({
        x: e.data.size.x,
        y: e.data.size.y
      }, new Uint8Array(e.data.imageData));
      Quagga.init(config, workerInterfaceReady, imageWrapper);
      Quagga.onProcessed(onProcessed);
    } else if (e.data.cmd === 'process') {
      // @ts-ignore
      imageWrapper.data = new Uint8Array(e.data.imageData);
      Quagga.start();
    } else if (e.data.cmd === 'setReaders') {
      Quagga.setReaders(e.data.readers);
    } else if (e.data.cmd === 'registerReader') {
      Quagga.registerReader(e.data.name, e.data.reader);
    }
  };
}
function generateWorkerBlob() {
  var blob, factorySource;

  /* jshint ignore:start */
  // @ts-ignore
  if (typeof __factorySource__ !== 'undefined') {
    // @ts-ignore
    factorySource = __factorySource__; // eslint-disable-line no-undef
  }
  /* jshint ignore:end */

  blob = new Blob(['(' + workerInterface.toString() + ')(' + factorySource + ');'], {
    type: 'text/javascript'
  });
  return window.URL.createObjectURL(blob);
}
function initWorker(config, inputStream, cb) {
  var blobURL = generateWorkerBlob();
  var worker = new Worker(blobURL);
  var workerThread = {
    worker: worker,
    imageData: new Uint8Array(inputStream.getWidth() * inputStream.getHeight()),
    busy: true
  };
  workerThread.worker.onmessage = function (e) {
    if (e.data.event === 'initialized') {
      URL.revokeObjectURL(blobURL);
      workerThread.busy = false;
      workerThread.imageData = new Uint8Array(e.data.imageData);
      if (false) {}
      cb(workerThread);
    } else if (e.data.event === 'processed') {
      workerThread.imageData = new Uint8Array(e.data.imageData);
      workerThread.busy = false;
      // TODO: how to thread publishResult into here? TypeScript says it's not here. https://github.com/ericblade/quagga2/issues/466#issuecomment-1724248080 says it's necessary?
      // @ts-ignore
      if (typeof publishResult !== 'undefined') {
        // @ts-ignore
        publishResult(e.data.result, workerThread.imageData);
      }
    } else if (e.data.event === 'error') {
      if (false) {}
    }
  };
  workerThread.worker.postMessage({
    cmd: 'init',
    size: {
      x: inputStream.getWidth(),
      y: inputStream.getHeight()
    },
    imageData: workerThread.imageData,
    config: configForWorker(config)
  }, [workerThread.imageData.buffer]);
}
function adjustWorkerPool(capacity, config, inputStream, cb) {
  var increaseBy = capacity - workerPool.length;
  if (increaseBy === 0 && cb) {
    cb();
  } else if (increaseBy < 0) {
    var workersToTerminate = workerPool.slice(increaseBy);
    workersToTerminate.forEach(function (workerThread) {
      workerThread.worker.terminate();
      if (false) {}
    });
    workerPool = workerPool.slice(0, increaseBy);
    if (cb) {
      cb();
    }
  } else {
    var workerInitialized = function workerInitialized(workerThread) {
      workerPool.push(workerThread);
      if (workerPool.length >= capacity && cb) {
        cb();
      }
    };
    if (config) {
      for (var i = 0; i < increaseBy; i++) {
        initWorker(config, inputStream, workerInitialized);
      }
    }
  }
}
function qworker_setReaders(readers) {
  workerPool.forEach(function (workerThread) {
    return workerThread.worker.postMessage({
      cmd: 'setReaders',
      readers: readers
    });
  });
}
function qworker_registerReader(name, reader) {
  workerPool.forEach(function (workerThread) {
    return workerThread.worker.postMessage({
      cmd: 'registerReader',
      name: name,
      reader: reader
    });
  });
}
// CONCATENATED MODULE: ./src/quagga/setupInputStream.ts
// TODO: need to create an InputStream typescript interface, so we don't have an "any" in the next line
function setupInputStream() {
  var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'LiveStream';
  var viewport = arguments.length > 1 ? arguments[1] : undefined;
  var inputStreamFactory = arguments.length > 2 ? arguments[2] : undefined;
  switch (type) {
    case 'VideoStream':
      {
        var video = document.createElement('video');
        return {
          video: video,
          inputStream: inputStreamFactory.createVideoStream(video)
        };
      }
    case 'ImageStream':
      return {
        inputStream: inputStreamFactory.createImageStream()
      };
    case 'LiveStream':
      {
        var _video = null;
        if (viewport) {
          _video = viewport.querySelector('video');
          if (!_video) {
            _video = document.createElement('video');
            viewport.appendChild(_video);
          }
        }
        return {
          video: _video,
          inputStream: inputStreamFactory.createLiveStream(_video)
        };
      }
    default:
      console.error("* setupInputStream invalid type ".concat(type));
      return {
        video: null,
        inputStream: null
      };
  }
}
// CONCATENATED MODULE: ./src/quagga/transform.ts
/* eslint-disable no-param-reassign */

function moveBox(box, xOffset, yOffset) {
  var corner = box.length;
  while (corner--) {
    box[corner][0] += xOffset;
    box[corner][1] += yOffset;
  }
}
function moveLine(line, xOffset, yOffset) {
  line[0].x += xOffset;
  line[0].y += yOffset;
  line[1].x += xOffset;
  line[1].y += yOffset;
}
// CONCATENATED MODULE: ./src/quagga/quagga.ts



















external_gl_matrix_["glMatrix"].setMatrixArrayType(Array);
var quagga_Quagga = /*#__PURE__*/function () {
  function Quagga() {
    var _this = this;
    classCallCheck_default()(this, Quagga);
    defineProperty_default()(this, "context", new QuaggaContext_QuaggaContext());
    defineProperty_default()(this, "canRecord", function (callback) {
      var _this$context$config;
      if (!_this.context.config) {
        return;
      }
      barcode_locator["a" /* default */].checkImageConstraints(_this.context.inputStream, (_this$context$config = _this.context.config) === null || _this$context$config === void 0 ? void 0 : _this$context$config.locator);
      _this.initCanvas();
      _this.context.framegrabber = frame_grabber_default.a.create(_this.context.inputStream, _this.context.canvasContainer.dom.image);
      if (_this.context.config.numOfWorkers === undefined) {
        _this.context.config.numOfWorkers = 0;
      }
      adjustWorkerPool(_this.context.config.numOfWorkers, _this.context.config, _this.context.inputStream, function () {
        var _this$context$config2;
        if (((_this$context$config2 = _this.context.config) === null || _this$context$config2 === void 0 ? void 0 : _this$context$config2.numOfWorkers) === 0) {
          _this.initializeData();
        }
        _this.ready(callback);
      });
    });
    defineProperty_default()(this, "update", function () {
      if (_this.context.onUIThread) {
        var workersUpdated = updateWorkers(_this.context.framegrabber);
        if (!workersUpdated) {
          var _this$context$inputIm;
          _this.context.framegrabber.attachData((_this$context$inputIm = _this.context.inputImageWrapper) === null || _this$context$inputIm === void 0 ? void 0 : _this$context$inputIm.data);
          if (_this.context.framegrabber.grab()) {
            if (!workersUpdated) {
              _this.locateAndDecode();
            }
          }
        }
      } else {
        var _this$context$inputIm2;
        _this.context.framegrabber.attachData((_this$context$inputIm2 = _this.context.inputImageWrapper) === null || _this$context$inputIm2 === void 0 ? void 0 : _this$context$inputIm2.data);
        _this.context.framegrabber.grab();
        _this.locateAndDecode();
      }
    });
  }
  createClass_default()(Quagga, [{
    key: "initBuffers",
    value: function initBuffers(imageWrapper) {
      if (!this.context.config) {
        return;
      }
      var _initBuffers2 = initBuffers_initBuffers(this.context.inputStream, imageWrapper, this.context.config.locator),
        inputImageWrapper = _initBuffers2.inputImageWrapper,
        boxSize = _initBuffers2.boxSize;
      this.context.inputImageWrapper = inputImageWrapper;
      this.context.boxSize = boxSize;
    }
  }, {
    key: "initializeData",
    value: function initializeData(imageWrapper) {
      if (!this.context.config) {
        return;
      }
      this.initBuffers(imageWrapper);
      this.context.decoder = barcode_decoder.create(this.context.config.decoder, this.context.inputImageWrapper);
    }
  }, {
    key: "getViewPort",
    value: function getViewPort() {
      if (!this.context.config || !this.context.config.inputStream) {
        return null;
      }
      var target = this.context.config.inputStream.target;
      return getViewPort_getViewPort(target);
    }
  }, {
    key: "ready",
    value: function ready(callback) {
      this.context.inputStream.play();
      callback();
    }
  }, {
    key: "initCanvas",
    value: function initCanvas() {
      var container = initCanvas_initCanvas(this.context);
      if (!container) {
        return;
      }
      var ctx = container.ctx,
        dom = container.dom;
      this.context.canvasContainer.dom.image = dom.image;
      this.context.canvasContainer.dom.overlay = dom.overlay;
      this.context.canvasContainer.ctx.image = ctx.image;
      this.context.canvasContainer.ctx.overlay = ctx.overlay;
    }
  }, {
    key: "initInputStream",
    value: function initInputStream(callback) {
      if (!this.context.config || !this.context.config.inputStream) {
        return;
      }
      var _this$context$config$ = this.context.config.inputStream,
        inputType = _this$context$config$.type,
        constraints = _this$context$config$.constraints;
      var _setupInputStream = setupInputStream(inputType, this.getViewPort(), input_stream),
        video = _setupInputStream.video,
        inputStream = _setupInputStream.inputStream;
      if (inputType === 'LiveStream' && video) {
        camera_access.request(video, constraints).then(function () {
          return inputStream.trigger('canrecord');
        })["catch"](function (err) {
          return callback(err);
        });
      }
      if (inputStream) {
        inputStream.setAttribute('preload', 'auto');
        inputStream.setInputStream(this.context.config.inputStream);
        inputStream.addEventListener('canrecord', this.canRecord.bind(undefined, callback));
      }
      this.context.inputStream = inputStream;
    }
  }, {
    key: "getBoundingBoxes",
    value: function getBoundingBoxes() {
      var _this$context$config3;
      return (_this$context$config3 = this.context.config) !== null && _this$context$config3 !== void 0 && _this$context$config3.locate ? barcode_locator["a" /* default */].locate() : [[external_gl_matrix_["vec2"].clone(this.context.boxSize[0]), external_gl_matrix_["vec2"].clone(this.context.boxSize[1]), external_gl_matrix_["vec2"].clone(this.context.boxSize[2]), external_gl_matrix_["vec2"].clone(this.context.boxSize[3])]];
    }

    // TODO: need a typescript type for result here.
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  }, {
    key: "transformResult",
    value: function transformResult(result) {
      var _this2 = this;
      var topRight = this.context.inputStream.getTopRight();
      var xOffset = topRight.x;
      var yOffset = topRight.y;
      if (xOffset === 0 && yOffset === 0) {
        return;
      }
      if (result.barcodes) {
        // TODO: BarcodeInfo may not be the right type here.
        result.barcodes.forEach(function (barcode) {
          return _this2.transformResult(barcode);
        });
      }
      if (result.line && result.line.length === 2) {
        moveLine(result.line, xOffset, yOffset);
      }
      if (result.box) {
        moveBox(result.box, xOffset, yOffset);
      }
      if (result.boxes && result.boxes.length > 0) {
        for (var i = 0; i < result.boxes.length; i++) {
          moveBox(result.boxes[i], xOffset, yOffset);
        }
      }
    }
  }, {
    key: "addResult",
    value: function addResult(result, imageData) {
      var _this3 = this;
      if (!imageData || !this.context.resultCollector) {
        return;
      }

      // TODO: Figure out what data structure holds a "barcodes" result, if any...
      if (result.barcodes) {
        result.barcodes.filter(function (barcode) {
          return barcode.codeResult;
        }).forEach(function (barcode) {
          return _this3.addResult(barcode, imageData);
        });
      } else if (result.codeResult) {
        this.context.resultCollector.addResult(imageData, this.context.inputStream.getCanvasSize(), result.codeResult);
      }
    }

    // eslint-disable-next-line class-methods-use-this
  }, {
    key: "hasCodeResult",
    value: function hasCodeResult(result) {
      return !!(result && (result.barcodes ? result.barcodes.some(function (barcode) {
        return barcode.codeResult;
      }) : result.codeResult));
    }

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  }, {
    key: "publishResult",
    value: function publishResult() {
      var result = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var imageData = arguments.length > 1 ? arguments[1] : undefined;
      var resultToPublish = result;
      if (result && this.context.onUIThread) {
        var _result$barcodes;
        this.transformResult(result);
        this.addResult(result, imageData);
        // @ts-ignore
        resultToPublish = (result === null || result === void 0 ? void 0 : (_result$barcodes = result.barcodes) === null || _result$barcodes === void 0 ? void 0 : _result$barcodes.length) > 0 ? result.barcodes : result;
      }
      events.publish('processed', resultToPublish);
      if (this.hasCodeResult(result)) {
        events.publish('detected', resultToPublish);
      }
    }
  }, {
    key: "locateAndDecode",
    value: function () {
      var _locateAndDecode = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
        var boxes, _this$context$inputIm3, decodeResult, imageResult, _this$context$inputIm4;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              boxes = this.getBoundingBoxes();
              if (!boxes) {
                _context.next = 12;
                break;
              }
              _context.next = 4;
              return this.context.decoder.decodeFromBoundingBoxes(boxes);
            case 4:
              _context.t0 = _context.sent;
              if (_context.t0) {
                _context.next = 7;
                break;
              }
              _context.t0 = {};
            case 7:
              decodeResult = _context.t0;
              decodeResult.boxes = boxes;
              this.publishResult(decodeResult, (_this$context$inputIm3 = this.context.inputImageWrapper) === null || _this$context$inputIm3 === void 0 ? void 0 : _this$context$inputIm3.data);
              _context.next = 16;
              break;
            case 12:
              _context.next = 14;
              return this.context.decoder.decodeFromImage(this.context.inputImageWrapper);
            case 14:
              imageResult = _context.sent;
              if (imageResult) {
                this.publishResult(imageResult, (_this$context$inputIm4 = this.context.inputImageWrapper) === null || _this$context$inputIm4 === void 0 ? void 0 : _this$context$inputIm4.data);
              } else {
                this.publishResult();
              }
            case 16:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function locateAndDecode() {
        return _locateAndDecode.apply(this, arguments);
      }
      return locateAndDecode;
    }()
  }, {
    key: "startContinuousUpdate",
    value: function startContinuousUpdate() {
      var _this$context$config4,
        _this4 = this;
      var next = null;
      var delay = 1000 / (((_this$context$config4 = this.context.config) === null || _this$context$config4 === void 0 ? void 0 : _this$context$config4.frequency) || 60);
      this.context.stopped = false;
      var context = this.context;
      var newFrame = function newFrame(timestamp) {
        next = next || timestamp;
        if (!context.stopped) {
          if (timestamp >= next) {
            next += delay;
            _this4.update();
          }
          window.requestAnimationFrame(newFrame);
        }
      };
      newFrame(performance.now());
    }
  }, {
    key: "start",
    value: function start() {
      var _this$context$config5, _this$context$config6;
      if (this.context.onUIThread && ((_this$context$config5 = this.context.config) === null || _this$context$config5 === void 0 ? void 0 : (_this$context$config6 = _this$context$config5.inputStream) === null || _this$context$config6 === void 0 ? void 0 : _this$context$config6.type) === 'LiveStream') {
        this.startContinuousUpdate();
      } else {
        this.update();
      }
    }
  }, {
    key: "stop",
    value: function () {
      var _stop = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee2() {
        var _this$context$config7;
        return regenerator_default.a.wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              this.context.stopped = true;
              adjustWorkerPool(0);
              if (!((_this$context$config7 = this.context.config) !== null && _this$context$config7 !== void 0 && _this$context$config7.inputStream && this.context.config.inputStream.type === 'LiveStream')) {
                _context2.next = 6;
                break;
              }
              _context2.next = 5;
              return camera_access.release();
            case 5:
              this.context.inputStream.clearEventHandlers();
            case 6:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function stop() {
        return _stop.apply(this, arguments);
      }
      return stop;
    }()
  }, {
    key: "setReaders",
    value: function setReaders(readers) {
      if (this.context.decoder) {
        this.context.decoder.setReaders(readers);
      }
      qworker_setReaders(readers);
    }
  }, {
    key: "registerReader",
    value: function registerReader(name, reader) {
      barcode_decoder.registerReader(name, reader);
      if (this.context.decoder) {
        this.context.decoder.registerReader(name, reader);
      }
      qworker_registerReader(name, reader);
    }
  }]);
  return Quagga;
}();

// CONCATENATED MODULE: ./src/quagga.js


 // eslint-disable-line no-unused-vars









var instance = new quagga_Quagga();
var _context = instance.context;
var QuaggaJSStaticInterface = {
  init: function init(config, cb, imageWrapper) {
    var quaggaInstance = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : instance;
    var promise;
    if (!cb) {
      promise = new Promise(function (resolve, reject) {
        cb = function cb(err) {
          err ? reject(err) : resolve();
        };
      });
    }
    quaggaInstance.context.config = merge_default()({}, config_config, config);
    // TODO #179: pending restructure in Issue #179, we are temp disabling workers
    if (quaggaInstance.context.config.numOfWorkers > 0) {
      quaggaInstance.context.config.numOfWorkers = 0;
    }
    if (imageWrapper) {
      quaggaInstance.context.onUIThread = false;
      quaggaInstance.initializeData(imageWrapper);
      if (cb) {
        cb();
      }
    } else {
      quaggaInstance.initInputStream(cb);
    }
    return promise;
  },
  start: function start() {
    return instance.start();
  },
  stop: function stop() {
    return instance.stop();
  },
  pause: function pause() {
    _context.stopped = true;
  },
  onDetected: function onDetected(callback) {
    if (!callback || typeof callback !== 'function' && (typeof_default()(callback) !== 'object' || !callback.callback)) {
      console.trace('* warning: Quagga.onDetected called with invalid callback, ignoring');
      return;
    }
    events.subscribe('detected', callback);
  },
  offDetected: function offDetected(callback) {
    events.unsubscribe('detected', callback);
  },
  onProcessed: function onProcessed(callback) {
    if (!callback || typeof callback !== 'function' && (typeof_default()(callback) !== 'object' || !callback.callback)) {
      console.trace('* warning: Quagga.onProcessed called with invalid callback, ignoring');
      return;
    }
    events.subscribe('processed', callback);
  },
  offProcessed: function offProcessed(callback) {
    events.unsubscribe('processed', callback);
  },
  setReaders: function setReaders(readers) {
    if (!readers) {
      console.trace('* warning: Quagga.setReaders called with no readers, ignoring');
      return;
    }
    instance.setReaders(readers);
  },
  registerReader: function registerReader(name, reader) {
    if (!name) {
      console.trace('* warning: Quagga.registerReader called with no name, ignoring');
      return;
    }
    if (!reader) {
      console.trace('* warning: Quagga.registerReader called with no reader, ignoring');
      return;
    }
    instance.registerReader(name, reader);
  },
  registerResultCollector: function registerResultCollector(resultCollector) {
    if (resultCollector && typeof resultCollector.addResult === 'function') {
      _context.resultCollector = resultCollector;
    }
  },
  get canvas() {
    return _context.canvasContainer;
  },
  decodeSingle: function decodeSingle(config, resultCallback) {
    var _this = this;
    var quaggaInstance = new quagga_Quagga();
    config = merge_default()({
      inputStream: {
        type: 'ImageStream',
        sequence: false,
        size: 800,
        src: config.src
      },
      numOfWorkers:  false ? undefined : 1,
      locator: {
        halfSample: false
      }
    }, config);
    // TODO #175: restructure worker support so that it will work with typescript using worker-loader
    // https://webpack.js.org/loaders/worker-loader/
    if (config.numOfWorkers > 0) {
      config.numOfWorkers = 0;
    }
    // workers require Worker and Blob support presently, so if no Blob or Worker then set
    // workers to 0.
    if (config.numOfWorkers > 0 && (typeof Blob === 'undefined' || typeof Worker === 'undefined')) {
      console.warn('* no Worker and/or Blob support - forcing numOfWorkers to 0');
      config.numOfWorkers = 0;
    }
    return new Promise(function (resolve, reject) {
      try {
        _this.init(config, function () {
          events.once('processed', function (result) {
            quaggaInstance.stop();
            if (resultCallback) {
              resultCallback.call(null, result);
            }
            resolve(result);
          }, true);
          quaggaInstance.start();
        }, null, quaggaInstance);
      } catch (err) {
        reject(err);
      }
    });
  },
  // add the usually expected "default" for use with require, build step won't allow us to
  // write to module.exports so do it here.
  get default() {
    return QuaggaJSStaticInterface;
  },
  Readers: reader_namespaceObject,
  CameraAccess: camera_access,
  ImageDebug: image_debug["a" /* default */],
  ImageWrapper: image_wrapper["a" /* default */],
  ResultCollector: result_collector
};
/* harmony default export */ var quagga = __webpack_exports__["default"] = (QuaggaJSStaticInterface);
// export BarcodeReader and other utilities for external plugins


/***/ })
/******/ ])["default"]));