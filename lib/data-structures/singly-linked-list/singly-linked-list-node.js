"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Singly Linked List Node
 * -----------------------
 * Node to be used with singly linked lists.
 *
 * @property {any} value - any value to be stored in the node
 * @property {SinglyLinkedListNode} next - reference to the next node
 */
var SinglyLinkedListNode = /*#__PURE__*/_createClass(function SinglyLinkedListNode() {
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

  _classCallCheck(this, SinglyLinkedListNode);

  this.value = value;
  this.next = null;
});

exports.default = SinglyLinkedListNode;