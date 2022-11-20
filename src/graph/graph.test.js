import Graph from './graph';

describe('Graph tests', () => {
  describe('smoke test', () => {
    test('should create an instance', () => {
      const graph = new Graph();

      expect(graph).not.toBe(null);
    });
  });

  describe('contains tests', () => {
    test('should be true if graph contains vertex', () => {
      const graph = new Graph();
      const adjacentVertices = new Set(['OAK', 'SJC']);

      graph.add('SFO', adjacentVertices);
      graph.add('PHI');

      expect(graph.contains('SFO')).toBe(true);
    });

    test('should be false if graph does not contain vertex', () => {
      const graph = new Graph();
      const adjacentVertices = new Set(['OAK', 'SJC']);

      graph.add('SFO', adjacentVertices);
      graph.add('CHI');

      expect(graph.contains('DAL')).toBe(false);
    });
  });

  describe('isAdjacent tests', () => {
    const graph = new Graph();
    const adjacentVertices = new Set(['OAK', 'SJC']);

    graph.add('SFO', adjacentVertices);

    expect(graph.isAdjacent('OAK', 'SFO')).toBe(true);
  });
});
