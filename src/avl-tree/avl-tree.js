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

  _setChild(parent, whichChild, child) {
    if (whichChild !== 'left' && whichChild !== 'right') {
      return false;
    }

    if (whichChild === 'left') {
      parent.left = child;
    }

    if (whichChild === 'right') {
      parent.right = child;
    }

    if (child !== null) {
      child.parent = parent;
    }

    this._updateHeight(child);

    return true;
  }

  replaceChild(parent, currentChild, newNode) {
    if (parent.left === currentChild) {
      return this._setChild(parent, 'left', newNode);
    }

    if (parent.right === currentChild) {
      return this._setChild(parent, 'right', newNode);
    }

    return true;
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
