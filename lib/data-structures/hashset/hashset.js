"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var HashSet = /*#__PURE__*/function () {
  function HashSet() {
    _classCallCheck(this, HashSet);

    this.values = {};
  }

  _createClass(HashSet, [{
    key: "add",
    value: function add(val) {
      this.values[val] = true;
    }
  }, {
    key: "clear",
    value: function clear() {
      this.values = {};
    }
  }, {
    key: "has",
    value: function has(val) {
      return this.values[val] === true;
    }
  }, {
    key: "getValues",
    value: function getValues() {
      return Object.keys(this.values);
    }
  }, {
    key: "remove",
    value: function remove(val) {
      delete this.values[val];
    }
  }, {
    key: "size",
    value: function size() {
      return this.getValues().length;
    }
  }]);

  return HashSet;
}();

exports.default = HashSet;