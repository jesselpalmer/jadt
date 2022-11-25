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
  #vertices = new Map();
  #size = 0;

  addVertex(vertex) {
    this.#vertices.set(vertex, new Set());
  }

  addEdge(vertex1, vertex2) {
    if (!this.#vertices.has(vertex1)) {
      this.addVertex(vertex1);
    }

    if (!this.#vertices.has(vertex2)) {
      this.addVertex(vertex2);
    }

    const adjacentVertices = this.#vertices.get(vertex1);

    adjacentVertices.add(vertex2);
    this.#size++;
  }

  contains(vertex) {
    return this.#vertices.has(vertex);
  }

  isAdjacent(terminatingVertex, startingVertex) {
    const startingVertexAdjacentSet = this.#vertices.get(startingVertex);

    return startingVertexAdjacentSet.has(terminatingVertex);
  }

  /**
   * isAcycle
   * -------
   * todo: need to implement.
   * @returns boolean
   */
   isAcycle() {
    return null;
  }

  /**
   * isCycle
   * -------
   * todo: need to implement.
   * @returns boolean
   */
  isCycle() {
    return null;
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

  printAdjanceyList() {
    for (const [key, value] of this.#vertices) {
      console.log(key, value);
    }
  }

  isConnected(startingVertex, targetVertex) {
    const frontierQueue = [startingVertex];
    const discoveredSet = new Set();

    discoveredSet.add(startingVertex);

    while (frontierQueue) {
      const currentVertex = frontierQueue.shift();
      const isVertexFound = currentVertex.value === targetVertex.value;

      if (isVertexFound) {
        return true;
      }

      console.log(this.#vertices);
      const adjacentVertices = this.#vertices.get(startingVertex);

      adjacentVertices.forEach((adjacentVertex) => {
        const hasVertexBeenDiscovered = discoveredSet.contains(adjacentVertex);

        if (!hasVertexBeenDiscovered) {
          frontierQueue.push(adjacentVertex);
          discoveredSet.add(adjacentVertex);
        }
      });
    }

    return false;
  }

  size() {
    return this.#size;
  }
}
