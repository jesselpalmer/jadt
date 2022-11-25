import Graph from './graph';

describe('Graph tests', () => {
  describe('smoke test', () => {
    test('should create an instance', () => {
      const graph = new Graph();

      expect(graph).not.toBe(null);
    });
  });

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
});
