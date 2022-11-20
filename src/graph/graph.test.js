import { expect } from 'chai';
import Graph from './graph';
import Vertex from './vertex';

describe('Graph tests', () => {
  describe('smoke test', () => {
    test('should create an instance', () => {
      const graph = new Graph();
      expect(graph).not.to.equal(null);
    });
  });

  describe('smoke test', () => {
    test('should add vertex', () => {
      const graph = new Graph();
      const oak = new Vertex('OAK');
      const sjc = new Vertex('SJC');
      graph.add(oak);
      graph.add(sjc);
      const sfo = new Vertex('SFO');
      sfo.addEdge(oak);
      sfo.addEdge(sjc);
      graph.add(sfo);
      expect(graph.contains(sfo)).to.equal(true);
    });
  });
});
