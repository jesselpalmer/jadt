"use strict";

var _graph = _interopRequireDefault(require("./graph"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
describe('Graph tests', function () {
  describe('smoke test', function () {
    test('should create an instance', function () {
      var graph = new _graph.default();
      expect(graph).not.toBe(null);
    });
  });
  describe('contains tests', function () {
    test('should be true if graph contains vertex', function () {
      var graph = new _graph.default();
      var adjacentVertices = new Set(['OAK', 'SJC']);
      graph.add('SFO', adjacentVertices);
      graph.add('PHI');
      expect(graph.contains('SFO')).toBe(true);
    });
    test('should be false if graph does not contain vertex', function () {
      var graph = new _graph.default();
      var adjacentVertices = new Set(['OAK', 'SJC']);
      graph.add('SFO', adjacentVertices);
      graph.add('CHI');
      expect(graph.contains('DAL')).toBe(false);
    });
  });
});