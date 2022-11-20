"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
var Vertex = /*#__PURE__*/function () {
  function Vertex() {
    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var adjacentVertices = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Set();
    _classCallCheck(this, Vertex);
    this.value = value;
    this.adjacentVertices = adjacentVertices;
  }
  _createClass(Vertex, [{
    key: "addEdge",
    value: function addEdge(vertex) {
      this.adjacentVertices.add(vertex);
    }
  }]);
  return Vertex;
}();
exports.default = Vertex;