import {SinglyLinkedList} from '../data-structures';

export default class Queue {
  #elements = new SinglyLinkedList();

  back() {
    return this.#elements.getLast();
  }

  clear() {
    this.#elements.clear();
  }

  dequeue() {
    return this.#elements.removeFirst();
  }

  enqueue(element) {
    this.#elements.addToEnd(element);
  }

  isEmpty() {
    return this.#elements.isEmpty();
  }

  peek() {
    return this.#elements.getFirst();
  }

  size() {
    return this.#elements.size();
  }
}
