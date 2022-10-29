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
      const newNode1 = new AVLTreeNode(5);
      const newNode2 = new AVLTreeNode('10');
      const newNode3 = new AVLTreeNode(true);
      const newNode4 = new AVLTreeNode(false);

      avlTree.insert(newNode1);
      avlTree.insert(newNode2);
      avlTree.insert(newNode3);
      avlTree.insert(newNode4);

      expect(avlTree.contains(5)).toBe(true);
      expect(avlTree.contains('10')).toBe(true);
      expect(avlTree.contains(true)).toBe(true);
      expect(avlTree.contains(false)).toBe(true);
    });
  });
});
