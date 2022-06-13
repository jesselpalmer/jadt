"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Queue = /*#__PURE__*/function () {
  function Queue() {
    var elements = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    _classCallCheck(this, Queue);

    this._elements = elements;
  }

  _createClass(Queue, [{
    key: "back",
    value: function back() {
      if (this.isEmpty()) return null;
      var lastElementIndex = this._elements.length - 1;
      return this._elements[lastElementIndex];
    }
  }, {
    key: "clear",
    value: function clear() {
      this._elements = [];
    }
  }, {
    key: "dequeue",
    value: function dequeue() {
      return this._elements.pop();
    }
  }, {
    key: "enqueue",
    value: function enqueue(element) {
      this._elements.push(element);
    }
  }, {
    key: "isEmpty",
    value: function isEmpty() {
      return this._elements.length === 0;
    }
  }, {
    key: "peek",
    value: function peek() {
      if (this.isEmpty()) return null;
      return this._elements[0];
    }
  }, {
    key: "size",
    value: function size() {
      return this._elements.length;
    }
  }]);

  return Queue;
}();

exports.default = Queue;