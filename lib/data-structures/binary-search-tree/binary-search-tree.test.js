"use strict";

var _binarySearchTree = _interopRequireDefault(require("./binary-search-tree"));

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
      var binarySearchTree = new _binarySearchTree.default(1982);
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