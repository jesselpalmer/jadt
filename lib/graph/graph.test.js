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
  describe('addEdge tests', function () {
    test('should be true if vertex is adjacent after edge is added', function () {
      var graph = new _graph.default();
      graph.addVertex('IAD');
      graph.addVertex('DCA');
      graph.addVertex('PHI');
      graph.addEdge('IAD', 'PHI');
      graph.addEdge('DCA', 'PHI');
      expect(graph.isAdjacent('PHI', 'IAD')).toBe(true);
    });
    test('should be false if vertex isn`t adjacent after edge is added', function () {
      var graph = new _graph.default();
      graph.addVertex('IAD');
      graph.addVertex('DCA');
      graph.addVertex('PHI');
      graph.addEdge('IAD', 'PHI');
      graph.addEdge('DCA', 'PHI');
      expect(graph.isAdjacent('IAD', 'PHI')).toBe(false);
    });
  });
  describe('contains tests', function () {
    test('should be true if graph contains vertex', function () {
      var graph = new _graph.default();
      graph.addVertex('SFO');
      graph.addVertex('PHI');
      expect(graph.contains('SFO')).toBe(true);
    });
    test('should be false if graph does not contain vertex', function () {
      var graph = new _graph.default();
      var adjacentVertices = new Set(['OAK', 'SJC']);
      graph.addVertex('SFO', adjacentVertices);
      graph.addVertex('CHI');
      expect(graph.contains('DAL')).toBe(false);
    });
  });
});