"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _singlyLinkedListNode = _interopRequireDefault(require("./singly-linked-list-node"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

var _size = /*#__PURE__*/new WeakMap();

var _head = /*#__PURE__*/new WeakMap();

var _tail = /*#__PURE__*/new WeakMap();

var _createNewList = /*#__PURE__*/new WeakSet();

/**
 * Singly Linked List
 * ------------------
 * Implementation of a single linked list.
 */
var SinglyLinkedList = /*#__PURE__*/function () {
  function SinglyLinkedList() {
    _classCallCheck(this, SinglyLinkedList);

    _classPrivateMethodInitSpec(this, _createNewList);

    _classPrivateFieldInitSpec(this, _size, {
      writable: true,
      value: 0
    });

    _classPrivateFieldInitSpec(this, _head, {
      writable: true,
      value: null
    });

    _classPrivateFieldInitSpec(this, _tail, {
      writable: true,
      value: null
    });
  }

  _createClass(SinglyLinkedList, [{
    key: "add",
    value:
    /**
     * add()
     * -----
     * Adds a node to the end of the singly linked list.
     *
     * Worst-case performance:        O(1)
     * Best-case performance:         O(1)
     * Average performance:           O(1)
     * Worst-case space complexity:   O(1)
     *
     * @alias (addToEnd)
     *
     * @param {value} any - any value to be appended to the end of the
     * singly linked list.
     *
     * @return none
     */
    function add(value) {
      if (this.isEmpty()) {
        _classPrivateMethodGet(this, _createNewList, _createNewList2).call(this, value);
      } else {
        this.addToEnd(value);
      }
    }
    /**
     * addToEnd()
     * ----------
     * Adds a node to the end of the singly linked list.
     *
     * Worst-case performance:        O(1)
     * Best-case performance:         O(1)
     * Average performance:           O(1)
     * Worst-case space complexity:   O(1)
     *
     *
     * @param {value} any - any value to be appended to the end of the
     * singly linked list.
     *
     * @return none
     */

  }, {
    key: "addToEnd",
    value: function addToEnd(value) {
      var node = new _singlyLinkedListNode.default(value);

      if (this.isEmpty()) {
        _classPrivateMethodGet(this, _createNewList, _createNewList2).call(this, value);
      } else {
        var _this$size3, _this$size4;

        _classPrivateFieldGet(this, _tail).next = node;

        _classPrivateFieldSet(this, _tail, node);

        _classPrivateFieldSet(this, _size, (_this$size3 = _classPrivateFieldGet(this, _size), _this$size4 = _this$size3++, _this$size3)), _this$size4;
      }
    }
  }, {
    key: "addToFront",
    value: function addToFront(value) {
      var _this$size5, _this$size6;

      var node = new _singlyLinkedListNode.default(value);
      node.next = _classPrivateFieldGet(this, _head);

      _classPrivateFieldSet(this, _head, node);

      _classPrivateFieldSet(this, _size, (_this$size5 = _classPrivateFieldGet(this, _size), _this$size6 = _this$size5++, _this$size5)), _this$size6;
    }
    /**
     * clear()
     * -------
     * Clears out the singly linked list.
     */

  }, {
    key: "clear",
    value: function clear() {
      _classPrivateFieldSet(this, _head, null);

      _classPrivateFieldSet(this, _tail, null);

      _classPrivateFieldSet(this, _size, 0);
    }
  }, {
    key: "contains",
    value: function contains(value) {
      var currentNode = _classPrivateFieldGet(this, _head);

      while (currentNode) {
        if (currentNode.value === value) return true;
        currentNode = currentNode.next;
      }

      return false;
    }
    /**
     * get()
     * -----
     * Gets a value using the passed in index. If no index is passed into as a
     * parameter the first element will be selected.
     *
     * @param {index} number - the index that will be used to select an element.
     */

  }, {
    key: "get",
    value: function get() {
      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      if (this.isEmpty()) return null;
      if (index > _classPrivateFieldGet(this, _size)) return null;

      var currentNode = _classPrivateFieldGet(this, _head);

      var currentIndex = 0;

      while (currentIndex !== index) {
        currentNode = currentNode.next;
        currentIndex++;
      }

      return currentNode.value;
    }
    /**
     * getFirst()
     * ----------
     * Gets the first value of the list.
     */

  }, {
    key: "getFirst",
    value: function getFirst() {
      var _classPrivateFieldGet2, _classPrivateFieldGet3;

      return (_classPrivateFieldGet2 = (_classPrivateFieldGet3 = _classPrivateFieldGet(this, _head)) === null || _classPrivateFieldGet3 === void 0 ? void 0 : _classPrivateFieldGet3.value) !== null && _classPrivateFieldGet2 !== void 0 ? _classPrivateFieldGet2 : null;
    }
    /**
     * getLast()
     * ---------
     * Gets the last value of the list.
     */

  }, {
    key: "getLast",
    value: function getLast() {
      var _classPrivateFieldGet4, _classPrivateFieldGet5;

      return (_classPrivateFieldGet4 = (_classPrivateFieldGet5 = _classPrivateFieldGet(this, _tail)) === null || _classPrivateFieldGet5 === void 0 ? void 0 : _classPrivateFieldGet5.value) !== null && _classPrivateFieldGet4 !== void 0 ? _classPrivateFieldGet4 : null;
    }
  }, {
    key: "indexOf",
    value: function indexOf(value) {
      var currentNode = _classPrivateFieldGet(this, _head);

      var currentIndex = 0;

      while (currentNode) {
        if (currentNode.value === value) return currentIndex;
        currentNode = currentNode.next;
        currentIndex++;
      }

      return -1;
    }
  }, {
    key: "isEmpty",
    value: function isEmpty() {
      return _classPrivateFieldGet(this, _size) === 0;
    }
  }, {
    key: "removeFirst",
    value: function removeFirst() {
      var _this$size7, _this$size8;

      var currentNode = _classPrivateFieldGet(this, _head);

      _classPrivateFieldSet(this, _head, currentNode.next);

      _classPrivateFieldSet(this, _size, (_this$size7 = _classPrivateFieldGet(this, _size), _this$size8 = _this$size7--, _this$size7)), _this$size8;
      return currentNode.value;
    }
    /**
     * size()
     * ------
     * Returns the size of the singly linked list.
     *
     * @return {number} - the size of the singly linked list.
     */

  }, {
    key: "size",
    value: function size() {
      return _classPrivateFieldGet(this, _size);
    }
    /**
     * toString()
     * ----------
     * Print out the contents of the singly linked list to the console. Good to
     * use for debugging.
     */

  }, {
    key: "toString",
    value: function toString() {
      var array = [];

      var currentNode = _classPrivateFieldGet(this, _head);

      while (currentNode !== null) {
        array.push(currentNode.value);
        currentNode = currentNode.next;
      }

      return array.toString();
    }
  }]);

  return SinglyLinkedList;
}();

exports.default = SinglyLinkedList;

function _createNewList2(value) {
  var _this$size, _this$size2;

  var node = new _singlyLinkedListNode.default(value);
  _classPrivateFieldSet(this, _size, (_this$size = _classPrivateFieldGet(this, _size), _this$size2 = _this$size++, _this$size)), _this$size2;

  _classPrivateFieldSet(this, _head, node);

  _classPrivateFieldSet(this, _tail, node);
}