import {SinglyLinkedList} from '../../../lib/data-structures';

export default class Bag {
  #elements = new SinglyLinkedList();
  #counts = {};

  add(element) {
    this.#elements.add(element);

    if (this.#counts[element]) {
      this.#counts[element]++;
    } else {
      this.#counts[element] = 1;
    }
  }

  contains(element) {
    return element in this.#counts;
  }

  count(element) {
    return this.#counts[element] ?? 0;
  }

  size() {
    return this.#elements.size();
  }
}
