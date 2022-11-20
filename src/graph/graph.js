export default class Graph {
  #vertices = new Map();

  add(vertex, edges = new Set()) {
    this.#vertices.set(vertex, edges);
  }

  printAdjanceyList() {
    for (const [key, value] of this.#vertices) {
      console.log(key, value);
    }
  }

  addEdge(vertex1, vertex2) {
    const adjacentVertices = this.#vertices[vertex1];
    adjacentVertices.add(vertex2);
  }

  contains(vertex) {
    return this.#vertices.has(vertex);
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
}
