"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _dataStructures = require("../../../lib/data-structures");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }

var _elements = /*#__PURE__*/new WeakMap();

var Stack = /*#__PURE__*/function () {
  function Stack() {
    _classCallCheck(this, Stack);

    _classPrivateFieldInitSpec(this, _elements, {
      writable: true,
      value: new _dataStructures.SinglyLinkedList()
    });
  }

  _createClass(Stack, [{
    key: "clear",
    value: function clear() {
      _classPrivateFieldSet(this, _elements, new _dataStructures.SinglyLinkedList());
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
    key: "pop",
    value: function pop() {
      return _classPrivateFieldGet(this, _elements).removeFirst();
    }
  }, {
    key: "push",
    value: function push(element) {
      _classPrivateFieldGet(this, _elements).addToFront(element);
    }
  }, {
    key: "search",
    value: function search(element) {
      return _classPrivateFieldGet(this, _elements).indexOf(element);
    }
  }, {
    key: "size",
    value: function size() {
      return _classPrivateFieldGet(this, _elements).size();
    }
  }, {
    key: "toString",
    value: function toString() {
      return _classPrivateFieldGet(this, _elements).toString();
    }
  }]);

  return Stack;
}();

exports.default = Stack;