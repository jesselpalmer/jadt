"use strict";

var _avlTree = _interopRequireDefault(require("./avl-tree"));
var _avlTreeNode = _interopRequireDefault(require("./avl-tree-node"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
describe('AVLTree tests', function () {
  describe('smoke test', function () {
    test('should successfully create instance', function () {
      var avlTree = new _avlTree.default();
      expect(avlTree).not.toBe(null);
    });
  });
  describe('contains() test', function () {
    test('should return true if tree contains value', function () {
      var avlTree = new _avlTree.default();
      var newNode1 = new _avlTreeNode.default(5);
      var newNode2 = new _avlTreeNode.default('10');
      var newNode3 = new _avlTreeNode.default(true);
      var newNode4 = new _avlTreeNode.default(false);
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