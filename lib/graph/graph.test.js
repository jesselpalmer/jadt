"use strict";

var _graph = _interopRequireDefault(require("./graph"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
describe('Graph tests', function () {
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
  describe('doesPathExist tests', function () {
    test('should be true if a path exists between two vertices', function () {
      var graph = new _graph.default();
      graph.addVertex('SFO');
      graph.addVertex('SEA');
      graph.addVertex('OAK');
      graph.addVertex('SJC');
      graph.addVertex('LAX');
      graph.addVertex('KOA');
      graph.addEdge('SFO', 'LAX');
      graph.addEdge('SJC', 'LAX');
      graph.addEdge('OAK', 'LAX');
      graph.addEdge('SEA', 'LAX');
      graph.addEdge('SFO', 'SEA');
      graph.addEdge('LAX', 'KOA');
      graph.addEdge('LAX', 'SFO');
      graph.addEdge('LAX', 'SJC');
      graph.addEdge('LAX', 'SEA');
      graph.addEdge('KOA', 'LAX');
      expect(graph.doesPathExist('SFO', 'KOA')).toBe(true);
    });
    test('should be false if graph does not exist between two vertices', function () {
      var graph = new _graph.default();
      var adjacentVertices = new Set(['OAK', 'SJC']);
      graph.addVertex('SFO', adjacentVertices);
      graph.addVertex('CHI');
      expect(graph.doesPathExist('DAL', 'CHI')).toBe(false);
    });
  });
  describe('isEmpty tests', function () {
    test('should be true after graph is created', function () {
      var graph = new _graph.default();
      expect(graph.isEmpty()).toBe(true);
    });
    test('should be false if graph has vertices', function () {
      var graph = new _graph.default();
      graph.addVertex('John');
      graph.addVertex('Betty');
      graph.addVertex('Paul');
      expect(graph.isEmpty()).toBe(false);
    });
    test('should be false if graph has edges', function () {
      var graph = new _graph.default();
      graph.addEdge('Will', 'Betty');
      graph.addEdge('Cindy', 'Betty');
      graph.addEdge('Paul', 'Betty');
      graph.addEdge('Will', 'Paul');
      graph.addEdge('John', 'Paul');
      expect(graph.isEmpty()).toBe(false);
    });
    test('should be false if graph has edges and edges', function () {
      var graph = new _graph.default();
      graph.addVertex('John');
      graph.addVertex('Betty');
      graph.addVertex('Paul');
      graph.addEdge('Will', 'Betty');
      graph.addEdge('Cindy', 'Betty');
      graph.addEdge('Paul', 'Betty');
      graph.addEdge('Will', 'Paul');
      graph.addEdge('John', 'Paul');
      expect(graph.isEmpty()).toBe(false);
    });
  });
  describe('size tests', function () {
    test('should return the correct size', function () {
      var graph = new _graph.default();
      graph.addVertex('John');
      graph.addVertex('Betty');
      graph.addVertex('Paul');
      graph.addEdge('Will', 'Betty');
      graph.addEdge('Cindy', 'Betty');
      graph.addEdge('Paul', 'Betty');
      graph.addEdge('Will', 'Paul');
      graph.addEdge('John', 'Paul');
      expect(graph.size()).toBe(5);
    });
  });
});