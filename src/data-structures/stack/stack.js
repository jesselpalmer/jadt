import {SinglyLinkedList} from '../../../lib/data-structures';

export default class Stack {
  #elements = new SinglyLinkedList();

  clear() {
    this.#elements = new SinglyLinkedList();
  }

  isEmpty() {
    return this.#elements.isEmpty();
  }

  peek() {
    return this.#elements.getFirst();
  }

  pop() {
    return this.#elements.removeFirst();
  }

  push(element) {
    this.#elements.addToFront(element);
  }

  search(element) {
    return this.#elements.indexOf(element);
  }

  size() {
    return this.#elements.size();
  }

  toString() {
    return this.#elements.toString();
  }
}
