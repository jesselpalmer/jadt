export default class Vertex {
  constructor(value = null, adjacentVertices = new Set()) {
    this.value = value;
    this.adjacentVertices = adjacentVertices;
  }

  addEdge(vertexValue) {
    this.adjacentVertices.add(vertexValue);
  }
}
