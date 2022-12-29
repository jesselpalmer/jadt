"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _dataStructures = require("../data-structures");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }
function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }
function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }
var _elements = /*#__PURE__*/new WeakMap();
var Queue = /*#__PURE__*/function () {
  function Queue() {
    _classCallCheck(this, Queue);
    _classPrivateFieldInitSpec(this, _elements, {
      writable: true,
      value: new _dataStructures.SinglyLinkedList()
    });
  }
  _createClass(Queue, [{
    key: "back",
    value: function back() {
      return _classPrivateFieldGet(this, _elements).getLast();
    }
  }, {
    key: "clear",
    value: function clear() {
      _classPrivateFieldGet(this, _elements).clear();
    }
  }, {
    key: "dequeue",
    value: function dequeue() {
      return _classPrivateFieldGet(this, _elements).removeFirst();
    }
  }, {
    key: "enqueue",
    value: function enqueue(element) {
      _classPrivateFieldGet(this, _elements).addToEnd(element);
    }
  }, {
    key: "isEmpty",
    value: function isEmpty() {
      return _classPrivateFieldGet(this, _elements).isEmpty();
    }
  }, {
    key: "peek",
    value: function peek() {
      return _classPrivateFieldGet(this, _elements).getFirst();
    }
  }, {
    key: "size",
    value: function size() {
      return _classPrivateFieldGet(this, _elements).size();
    }
  }]);
  return Queue;
}();
exports.default = Queue;