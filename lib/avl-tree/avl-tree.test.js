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
      var newNode = new _avlTreeNode.default(5);
      avlTree.insert(newNode);
      expect(avlTree.contains(5)).toBe(true);
    });
  });
});