import BinarySearchTree from './binary-search-tree';

describe('BinarySearchTree tests', () => {
  describe('smoke test', () => {
    test('should successfully create instance', () => {
      const binarySearchTree = new BinarySearchTree();
      expect(binarySearchTree).not.toBe(null);
    });
  });

  describe('contains() test', () => {
    test('should return true if tree contains value', () => {
      const binarySearchTree = new BinarySearchTree(1982);
      binarySearchTree.insert(1955);
      binarySearchTree.insert(1999);
      binarySearchTree.insert('a');
      binarySearchTree.insert(false);
      binarySearchTree.insert(-12345);
      expect(binarySearchTree.contains(1955)).toBe(true);
      expect(binarySearchTree.contains(1999)).toBe(true);
      expect(binarySearchTree.contains(-12345)).toBe(true);
    });
  });
});
