import AVLTree from './avl-tree';
import AVLTreeNode from './avl-tree-node';

describe('AVLTree tests', () => {
  describe('smoke test', () => {
    test('should successfully create instance', () => {
      const avlTree = new AVLTree();
      expect(avlTree).not.toBe(null);
    });
  });

  describe('contains() test', () => {
    test('should return true if tree contains value', () => {
      const avlTree = new AVLTree();
      const newNode = new AVLTreeNode(5);

      avlTree.insert(newNode);

      expect(avlTree.contains(5)).toBe(true);
    });
  });
});
