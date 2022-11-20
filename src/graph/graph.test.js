import Graph from './graph';

describe('Graph tests', () => {
  describe('smoke test', () => {
    test('should create an instance', () => {
      const graph = new Graph();
      expect(graph).not.toBe(null);
    });
  });
});
