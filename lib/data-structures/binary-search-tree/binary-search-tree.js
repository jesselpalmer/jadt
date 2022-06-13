"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _binarySearchTreeNode = _interopRequireDefault(require("./binary-search-tree-node"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var BinarySearchTree = /*#__PURE__*/function () {
  function BinarySearchTree(value) {
    _classCallCheck(this, BinarySearchTree);

    var node = new _binarySearchTreeNode.default(value);
    this.root = node;
  }

  _createClass(BinarySearchTree, [{
    key: "insert",
    value: function insert(value) {
      var node = new _binarySearchTreeNode.default(value);

      this._appendNode(this.root, node);
    }
  }, {
    key: "_appendNode",
    value: function _appendNode(node, newNode) {
      if (node.value > newNode.value) {
        if (node.left === null) {
          node.left = newNode;
        }

        this._appendNode(node.left, newNode);
      }

      if (node.value < newNode.value) {
        if (node.right === null) {
          node.right = newNode;
        }

        this._appendNode(node.right, newNode);
      }
    }
  }, {
    key: "printInOrder",
    value: function printInOrder() {
      this._printInOrder(this.root);
    }
  }, {
    key: "_printInOrder",
    value: function _printInOrder(node) {
      if (node === null) return;

      this._printInOrder(node.left);

      console.log(node.value);

      this._printInOrder(node.right);
    }
  }, {
    key: "contains",
    value: function contains(value) {
      return this._contains(this.root, value);
    }
  }, {
    key: "_contains",
    value: function _contains(node, value) {
      if (node === null) return false;
      if (node.value === value) return true;

      if (node.value > value) {
        return this._contains(node.left, value);
      }

      if (node.value < value) {
        return this._contains(node.right, value);
      }
    }
  }]);

  return BinarySearchTree;
}();

exports.default = BinarySearchTree;