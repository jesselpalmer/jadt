import Queue from '../queue';

class WeightedVertex {
  constructor(value, weight) {
    this.value = value;
    this.weight = weight;
    this.predV = 0;
    this.distance = Infinity;
  }
}

export default class Graph {
  #edgeNum = 0;
  #vertices = new Map();

  addVertex(vertex) {
    this.#vertices.set(vertex, new Set());
  }

  addEdge(vertex1, vertex2) {
    if (!this.isVertex(vertex1)) {
      this.addVertex(vertex1);
    }

    if (!this.isVertex(vertex2)) {
      this.addVertex(vertex2);
    }

    const adjacentVertices = this.#vertices.get(vertex1);

    adjacentVertices.add(vertex2);
    this.edgeNum++;
  }

  contains(vertex) {
    return this.#vertices.has(vertex);
  }

  doesPathExist(startingVertex, targetVertex) {
    if (!this.isVertex(startingVertex, targetVertex)) return false;

    const frontierQueue = new Queue();
    const discoveredSet = new Set();

    frontierQueue.enqueue(startingVertex);
    discoveredSet.add(startingVertex);

    while (!frontierQueue.isEmpty()) {
      const currentVertex = frontierQueue.dequeue();
      const isVertexFound = currentVertex === targetVertex;

      if (isVertexFound) {
        return true;
      }

      const adjacentVertices = this.#vertices.get(currentVertex);

      adjacentVertices.forEach((adjacentVertex) => {
        const hasVertexBeenDiscovered = discoveredSet.has(adjacentVertex);

        if (!hasVertexBeenDiscovered) {
          frontierQueue.enqueue(adjacentVertex);
          discoveredSet.add(adjacentVertex);
        }
      });
    }

    return false;
  }

  edgeCount() {
    return this.#edgeNum;
  }

  findShortestPaths(startingVertex) {
    const unvistedQueue = new Queue();

    for (const vertex of this.#vertices) {
      const value = vertex[0];
      const weight = Math.floor(Math.random() * 100);
      const weightVertex = new WeightedVertex(value, weight);
      unvistedQueue.enqueue(weightVertex);
    }

    startingVertex.distance = 0;

    while (!unvistedQueue.isEmpty()) {
      const currentVertex = unvistedQueue.dequeue();
      const adjacentVertices = this.#vertices.get(currentVertex);
    }

    return null;
  }

  isAdjacent(terminatingVertex, startingVertex) {
    const startingVertexAdjacentSet = this.#vertices.get(startingVertex);

    return startingVertexAdjacentSet.has(terminatingVertex);
  }

  isEmpty() {
    return this.edgeCount() === 0 && this.vertexCount() === 0;
  }

  isVertex(...vertices) {
    return vertices.every((vertex) => this.#vertices.has(vertex));
  }

  printAdjanceyList() {
    for (const [key, value] of this.#vertices) {
      console.log(key, value);
    }
  }

  size() {
    return this.vertexCount();
  }

  vertexCount() {
    return this.#vertices.size;
  }
}
