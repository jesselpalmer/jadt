/**
 * Singly Linked List Node
 * -----------------------
 * Node to be used with singly linked lists.
 *
 * @property {any} value - any value to be stored in the node
 * @property {SinglyLinkedListNode} next - reference to the next node
 */
export default class SinglyLinkedListNode {
  constructor(value = null) {
    this.value = value;
    this.next = null;
  }
}
