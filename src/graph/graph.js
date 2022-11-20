export default class Graph {
  #vertices = new Map();

  add(vertex) {
    this.#vertices.set(vertex);
  }

  printAdjanceyList() {
    for (const [key, value] of this.#vertices) {
      console.log(key, value);
    }
  }

  contains(vertex) {
    return this.#vertices.has(vertex);
  }
}
