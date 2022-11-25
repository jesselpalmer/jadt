"use strict";

var _binarySearchTree = _interopRequireDefault(require("./binary-search-tree"));
var _binarySearchTreeNode = _interopRequireDefault(require("./binary-search-tree-node"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
describe('BinarySearchTree tests', function () {
  describe('smoke test', function () {
    test('should successfully create instance', function () {
      var binarySearchTree = new _binarySearchTree.default();
      expect(binarySearchTree).not.toBe(null);
    });
  });
  describe('contains() test', function () {
    test('should return true if tree contains value', function () {
      var binarySearchTree = new _binarySearchTree.default();
      var newNode1 = new _binarySearchTreeNode.default(1955);
      var newNode2 = new _binarySearchTreeNode.default(1999);
      var newNode3 = new _binarySearchTreeNode.default('a');
      var newNode4 = new _binarySearchTreeNode.default(false);
      var newNode5 = new _binarySearchTreeNode.default(-12345);
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