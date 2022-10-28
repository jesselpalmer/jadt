export default class AVLTreeNode {
  constructor(value, height = null, parent = null, left = null, right = null) {
    this.value = value;
    this.height = height;
    this.parent = parent;
    this.left = left;
    this.right = right;
  }
}
