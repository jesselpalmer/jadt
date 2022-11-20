"use strict";

var _chai = require("chai");
var _graph = _interopRequireDefault(require("./graph"));
var _vertex = _interopRequireDefault(require("./vertex"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
describe('Graph tests', function () {
  describe('smoke test', function () {
    test('should create an instance', function () {
      var graph = new _graph.default();
      (0, _chai.expect)(graph).not.to.equal(null);
    });
  });
  describe('smoke test', function () {
    test('should add vertex', function () {
      var graph = new _graph.default();
      var oak = new _vertex.default('OAK');
      var sjc = new _vertex.default('SJC');
      graph.add(oak);
      graph.add(sjc);
      var sfo = new _vertex.default('SFO');
      sfo.addEdge(oak);
      sfo.addEdge(sjc);
      graph.add(sfo);
      (0, _chai.expect)(graph.contains(sfo)).to.equal(true);
    });
  });
});