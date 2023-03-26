import {SinglyLinkedList} from '../data-structures';

/**
 * Represents a Bag data structure which allows storing multiple occurrences
 * of the same element.
 */
export default class Bag {
  /**
   * A SinglyLinkedList to store the elements.
   * @type {SinglyLinkedList}
   * @private
   */
  #elements = new SinglyLinkedList();

  /**
   * An object to store the count of each element in the bag.
   * @type {Object}
   * @private
   */
  #counts = {};

  /**
   * Adds an element to the bag.
   * @param {*} element - The element to add to the bag.
   */
  add(element) {
    this.#elements.add(element);

    if (this.#counts[element]) {
      this.#counts[element]++;
    } else {
      this.#counts[element] = 1;
    }
  }

  /**
   * Checks if the bag contains the given element.
   * @param {*} element - The element to check for.
   * @return {boolean} - True if the element is in the bag, false otherwise.
   */
  contains(element) {
    return element in this.#counts;
  }

  /**
   * Gets the count of a specific element in the bag.
   * @param {*} element - The element to get the count for.
   * @return {number} - The count of the element in the bag.
   */
  count(element) {
    return this.#counts[element] ?? 0;
  }

  /**
   * Gets the size of the bag.
   * @return {number} - The total number of elements in the bag.
   */
  size() {
    return this.#elements.size();
  }
}
