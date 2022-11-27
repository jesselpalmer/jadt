"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _queue = _interopRequireDefault(require("../queue"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }
function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }
function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }
function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }
function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
var WeightedVertex = /*#__PURE__*/_createClass(function WeightedVertex(value, weight) {
  _classCallCheck(this, WeightedVertex);
  this.value = value;
  this.weight = weight;
  this.predV = 0;
  this.distance = Infinity;
});
var _size = /*#__PURE__*/new WeakMap();
var _vertices = /*#__PURE__*/new WeakMap();
var Graph = /*#__PURE__*/function () {
  function Graph() {
    _classCallCheck(this, Graph);
    _classPrivateFieldInitSpec(this, _size, {
      writable: true,
      value: 0
    });
    _classPrivateFieldInitSpec(this, _vertices, {
      writable: true,
      value: new Map()
    });
  }
  _createClass(Graph, [{
    key: "addVertex",
    value: function addVertex(vertex) {
      _classPrivateFieldGet(this, _vertices).set(vertex, new Set());
    }
  }, {
    key: "addEdge",
    value: function addEdge(vertex1, vertex2) {
      var _this$size, _this$size2;
      if (!this.isVertex(vertex1)) {
        this.addVertex(vertex1);
      }
      if (!this.isVertex(vertex2)) {
        this.addVertex(vertex2);
      }
      var adjacentVertices = _classPrivateFieldGet(this, _vertices).get(vertex1);
      adjacentVertices.add(vertex2);
      _classPrivateFieldSet(this, _size, (_this$size = _classPrivateFieldGet(this, _size), _this$size2 = _this$size++, _this$size)), _this$size2;
    }
  }, {
    key: "contains",
    value: function contains(vertex) {
      return _classPrivateFieldGet(this, _vertices).has(vertex);
    }
  }, {
    key: "doesPathExist",
    value: function doesPathExist(startingVertex, targetVertex) {
      if (!this.isVertex(startingVertex, targetVertex)) return false;
      var frontierQueue = new _queue.default();
      var discoveredSet = new Set();
      frontierQueue.enqueue(startingVertex);
      discoveredSet.add(startingVertex);
      while (!frontierQueue.isEmpty()) {
        var currentVertex = frontierQueue.dequeue();
        var isVertexFound = currentVertex === targetVertex;
        if (isVertexFound) {
          return true;
        }
        var adjacentVertices = _classPrivateFieldGet(this, _vertices).get(currentVertex);
        adjacentVertices.forEach(function (adjacentVertex) {
          var hasVertexBeenDiscovered = discoveredSet.has(adjacentVertex);
          if (!hasVertexBeenDiscovered) {
            frontierQueue.enqueue(adjacentVertex);
            discoveredSet.add(adjacentVertex);
          }
        });
      }
      return false;
    }
  }, {
    key: "findShortestPaths",
    value: function findShortestPaths(startingVertex) {
      var unvistedQueue = new _queue.default();
      var _iterator = _createForOfIteratorHelper(_classPrivateFieldGet(this, _vertices)),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var vertex = _step.value;
          var value = vertex[0];
          var weight = Math.floor(Math.random() * 100);
          var weightVertex = new WeightedVertex(value, weight);
          unvistedQueue.enqueue(weightVertex);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      startingVertex.distance = 0;
      while (!unvistedQueue.isEmpty()) {
        var currentVertex = unvistedQueue.dequeue();
        var adjacentVertices = _classPrivateFieldGet(this, _vertices).get(currentVertex);
      }
      return null;
    }
  }, {
    key: "isAdjacent",
    value: function isAdjacent(terminatingVertex, startingVertex) {
      var startingVertexAdjacentSet = _classPrivateFieldGet(this, _vertices).get(startingVertex);
      return startingVertexAdjacentSet.has(terminatingVertex);
    }
  }, {
    key: "isVertex",
    value: function isVertex() {
      var _this = this;
      for (var _len = arguments.length, vertices = new Array(_len), _key = 0; _key < _len; _key++) {
        vertices[_key] = arguments[_key];
      }
      return vertices.every(function (vertex) {
        return _classPrivateFieldGet(_this, _vertices).has(vertex);
      });
    }
  }, {
    key: "printAdjanceyList",
    value: function printAdjanceyList() {
      var _iterator2 = _createForOfIteratorHelper(_classPrivateFieldGet(this, _vertices)),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var _step2$value = _slicedToArray(_step2.value, 2),
            key = _step2$value[0],
            value = _step2$value[1];
          console.log(key, value);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
  }, {
    key: "size",
    value: function size() {
      return _classPrivateFieldGet(this, _size);
    }
  }]);
  return Graph;
}();
exports.default = Graph;