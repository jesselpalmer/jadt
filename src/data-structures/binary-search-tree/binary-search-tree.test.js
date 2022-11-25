import BinarySearchTree from './binary-search-tree';
import BinarySearchTreeNode from './binary-search-tree-node';


describe('BinarySearchTree tests', () => {
  describe('smoke test', () => {
    test('should successfully create instance', () => {
      const binarySearchTree = new BinarySearchTree();
      expect(binarySearchTree).not.toBe(null);
    });
  });

  describe('contains() test', () => {
    test('should return true if tree contains value', () => {
      const binarySearchTree = new BinarySearchTree();
      const newNode1 = new BinarySearchTreeNode(1955);
      const newNode2 = new BinarySearchTreeNode(1999);
      const newNode3 = new BinarySearchTreeNode('a');
      const newNode4 = new BinarySearchTreeNode(false);
      const newNode5 = new BinarySearchTreeNode(-12345);

      binarySearchTree.insert(newNode1);
      binarySearchTree.insert(newNode2);
      binarySearchTree.insert(newNode3);
      binarySearchTree.insert(newNode4);
      binarySearchTree.insert(newNode5);

      expect(binarySearchTree.contains(1955)).toBe(true);
      expect(binarySearchTree.contains(1999)).toBe(true);
      expect(binarySearchTree.contains(-12345)).toBe(true);
    });
  });
});
