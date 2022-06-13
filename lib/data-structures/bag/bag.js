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

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

var _elements = /*#__PURE__*/new WeakMap();

var _counts = /*#__PURE__*/new WeakMap();

var Bag = /*#__PURE__*/function () {
  function Bag() {
    _classCallCheck(this, Bag);

    _classPrivateFieldInitSpec(this, _elements, {
      writable: true,
      value: new _dataStructures.SinglyLinkedList()
    });

    _classPrivateFieldInitSpec(this, _counts, {
      writable: true,
      value: {}
    });
  }

  _createClass(Bag, [{
    key: "add",
    value: function add(element) {
      _classPrivateFieldGet(this, _elements).add(element);

      if (_classPrivateFieldGet(this, _counts)[element]) {
        _classPrivateFieldGet(this, _counts)[element]++;
      } else {
        _classPrivateFieldGet(this, _counts)[element] = 1;
      }
    }
  }, {
    key: "contains",
    value: function contains(element) {
      return element in _classPrivateFieldGet(this, _counts);
    }
  }, {
    key: "count",
    value: function count(element) {
      var _classPrivateFieldGet2;

      return (_classPrivateFieldGet2 = _classPrivateFieldGet(this, _counts)[element]) !== null && _classPrivateFieldGet2 !== void 0 ? _classPrivateFieldGet2 : 0;
    }
  }, {
    key: "size",
    value: function size() {
      return _classPrivateFieldGet(this, _elements).size();
    }
  }]);

  return Bag;
}();

exports.default = Bag;