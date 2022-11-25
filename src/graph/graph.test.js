import Graph from './graph';

describe('Graph tests', () => {
  describe('addEdge tests', () => {
    test('should be true if vertex is adjacent after edge is added', () => {
      const graph = new Graph();

      graph.addVertex('IAD');
      graph.addVertex('DCA');
      graph.addVertex('PHI');
      graph.addEdge('IAD', 'PHI');
      graph.addEdge('DCA', 'PHI');

      expect(graph.isAdjacent('PHI', 'IAD')).toBe(true);
    });

    test('should be false if vertex isn`t adjacent after edge is added', () => {
      const graph = new Graph();

      graph.addVertex('IAD');
      graph.addVertex('DCA');
      graph.addVertex('PHI');
      graph.addEdge('IAD', 'PHI');
      graph.addEdge('DCA', 'PHI');

      expect(graph.isAdjacent('IAD', 'PHI')).toBe(false);
    });
  });

  describe('contains tests', () => {
    test('should be true if graph contains vertex', () => {
      const graph = new Graph();

      graph.addVertex('SFO');
      graph.addVertex('PHI');

      expect(graph.contains('SFO')).toBe(true);
    });

    test('should be false if graph does not contain vertex', () => {
      const graph = new Graph();
      const adjacentVertices = new Set(['OAK', 'SJC']);

      graph.addVertex('SFO', adjacentVertices);
      graph.addVertex('CHI');

      expect(graph.contains('DAL')).toBe(false);
    });
  });

  describe('size tests', () => {
    test('should return the correct size', () => {
      const graph = new Graph();

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
