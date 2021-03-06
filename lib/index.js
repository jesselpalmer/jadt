"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Queue", {
  enumerable: true,
  get: function get() {
    return _queue.default;
  }
});
Object.defineProperty(exports, "Stack", {
  enumerable: true,
  get: function get() {
    return _stack.default;
  }
});

var _queue = _interopRequireDefault(require("./queue"));

var _stack = _interopRequireDefault(require("./stack"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }