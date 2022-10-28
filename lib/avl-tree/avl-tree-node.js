"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
var AVLTreeNode = /*#__PURE__*/_createClass(function AVLTreeNode(value) {
  var height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var parent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var left = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  var right = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
  _classCallCheck(this, AVLTreeNode);
  this.value = value;
  this.height = height;
  this.parent = parent;
  this.left = left;
  this.right = right;
});
exports.default = AVLTreeNode;