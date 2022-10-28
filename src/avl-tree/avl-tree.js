import BinarySearchTree from '../binary-search-tree';

export default class AVLTree extends BinarySearchTree {
  constructor() {
    super();
  }

  _getBalanceFactor(node) {
    let leftHeight = -1;

    if (node.left !== null) {
      leftHeight = node.left.height;
    }

    let rightHeight = -1;

    if (node.right !== null) {
      rightHeight = node.right.height;
    }
    return leftHeight - rightHeight;
  }

  _updateHeight(node) {
    let leftHeight = -1;

    if (node.left !== null) {
      leftHeight = node.left.height;
    }

    let rightHeight = -1;

    if (node.right !== null) {
      rightHeight = node.right.height;
    }

    node.height = Math.max(leftHeight, rightHeight);
  }
}
