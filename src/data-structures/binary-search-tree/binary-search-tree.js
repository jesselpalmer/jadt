import BinarySearchTreeNode from './binary-search-tree-node';

export default class BinarySearchTree {
  constructor(value) {
    const node = new BinarySearchTreeNode(value);
    this.root = node;
  }

  insert(value) {
    const node = new BinarySearchTreeNode(value);
    this._appendNode(this.root, node);
  }

  _appendNode(node, newNode) {
    if (node.value > newNode.value) {
      if (node.left === null) {
        node.left = newNode;
      }

      this._appendNode(node.left, newNode);
    }

    if (node.value < newNode.value) {
      if (node.right === null) {
        node.right = newNode;
      }

      this._appendNode(node.right, newNode);
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
