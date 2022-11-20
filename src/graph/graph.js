export default class Graph {
  #vertices = new Map();

  insertVertex(vertex) {
    this.#vertices.set(vertex);
  }

  printAdjanceyList() {
    for (const [key, value] of this.#vertices) {
      console.log(key, value);
    }
  }
}
