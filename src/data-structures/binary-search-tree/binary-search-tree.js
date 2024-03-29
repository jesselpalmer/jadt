export default class BinarySearchTree {
  constructor(node) {
    this.root = null;
  }

  insert(node) {
    if (!this.root) {
      this.root = node;
    } else {
      this._insert(this.root, node);
    }
  }

  _insert(node, newNode) {
    if (node.value > newNode.value) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this._insert(node.left, newNode);
      }
    }

    if (node.value < newNode.value) {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this._insert(node.right, newNode);
      }
    }
  }

  printInOrder() {
    this._printInOrder(this.root);
  }

  _printInOrder(node) {
    if (node === null) return;

    this._printInOrder(node.left);
    console.log(node.value);
    this._printInOrder(node.right);
  }

  contains(value) {
    return this._contains(this.root, value);
  }

  _contains(node, value) {
    if (node === null) return false;
    if (node.value === value) return true;

    if (node.value > value) {
      return this._contains(node.left, value);
    }

    if (node.value < value) {
      return this._contains(node.right, value);
    }
  }
}
