"use strict";

var _chai = require("chai");

var _singlyLinkedList = _interopRequireDefault(require("./singly-linked-list"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env mocha */
describe('Singly Linked List tests', function () {
  describe('add() tests', function () {
    it('should add new element in list', function () {
      var singlyLinkedList = new _singlyLinkedList.default();
      singlyLinkedList.add(1917);
      (0, _chai.expect)(singlyLinkedList.contains(1917)).to.be.equal(true);
    });
  });
  describe('addToFront() tests', function () {
    it('should add a new element to the front of the linked list', function () {
      var singlyLinkedList = new _singlyLinkedList.default();
      singlyLinkedList.add(1917);
      singlyLinkedList.addToFront(false);
      singlyLinkedList.addToFront(true);
      singlyLinkedList.add(1989);
      (0, _chai.expect)(singlyLinkedList.get()).to.be.equal(true);
    });
  });
  describe('clear() tests', function () {
    it('should clear the singly linked list', function () {
      var singlyLinkedList = new _singlyLinkedList.default();
      singlyLinkedList.add(-134);
      singlyLinkedList.add(1337.19);
      singlyLinkedList.add('andrew ryan');
      (0, _chai.expect)(singlyLinkedList.size()).to.be.equal(3);
      singlyLinkedList.clear();
      (0, _chai.expect)(singlyLinkedList.size()).to.be.equal(0);
    });
  });
  describe('contains() tests', function () {
    it('should return true if value has been added to list', function () {
      var singlyLinkedList = new _singlyLinkedList.default();
      (0, _chai.expect)(singlyLinkedList.contains(2000)).to.be.equal(false);
      singlyLinkedList.add(2000);
      (0, _chai.expect)(singlyLinkedList.contains(2000)).to.be.equal(true);
    });
    it('should return false if value is not in the list', function () {
      var singlyLinkedList = new _singlyLinkedList.default();
      singlyLinkedList.add(2000);
      (0, _chai.expect)(singlyLinkedList.contains(2020)).to.be.equal(false);
    });
  });
  describe('get() tests', function () {
    it('should get first value', function () {
      var singlyLinkedList = new _singlyLinkedList.default();
      singlyLinkedList.add(1999);
      singlyLinkedList.add({
        place: 'golden gate'
      });
      singlyLinkedList.add(true);
      (0, _chai.expect)(singlyLinkedList.get(0)).to.be.equal(1999);
    });
    it('should return null if index is larger than the list size', function () {
      var singlyLinkedList = new _singlyLinkedList.default();
      singlyLinkedList.add(1999);
      singlyLinkedList.add({
        place: 'mission'
      });
      singlyLinkedList.add(true);
      (0, _chai.expect)(singlyLinkedList.get(4)).to.be.equal(null);
    });
    it('should return the first value if no index is passed in', function () {
      var singlyLinkedList = new _singlyLinkedList.default();
      singlyLinkedList.add(1999);
      singlyLinkedList.add({
        place: 'california'
      });
      singlyLinkedList.add(true);
      (0, _chai.expect)(singlyLinkedList.get()).to.be.equal(1999);
    });
    it('should return null no nodes are in list', function () {
      var singlyLinkedList = new _singlyLinkedList.default();
      (0, _chai.expect)(singlyLinkedList.get()).to.be.equal(null);
    });
  });
  describe('getFirst() tests', function () {
    it('should get first value', function () {
      var singlyLinkedList = new _singlyLinkedList.default();
      singlyLinkedList.add(1999);
      singlyLinkedList.add({
        place: 'alameda'
      });
      singlyLinkedList.add(true);
      (0, _chai.expect)(singlyLinkedList.getFirst()).to.be.equal(1999);
    });
    it('should return null if there are no nodes are in list', function () {
      var singlyLinkedList = new _singlyLinkedList.default();
      (0, _chai.expect)(singlyLinkedList.getFirst()).to.be.equal(null);
    });
  });
  describe('getLast() tests', function () {
    it('should get last value', function () {
      var singlyLinkedList = new _singlyLinkedList.default();
      singlyLinkedList.add(1999);
      singlyLinkedList.add({
        place: 'san francisco'
      });
      singlyLinkedList.add(true);
      (0, _chai.expect)(singlyLinkedList.getLast()).to.be.equal(true);
    });
    it('should return null when no nodes in the singly linked list', function () {
      var singlyLinkedList = new _singlyLinkedList.default();
      (0, _chai.expect)(singlyLinkedList.getLast()).to.be.equal(null);
    });
  });
  describe('size() tests', function () {
    it('should return the correct size', function () {
      var singlyLinkedList = new _singlyLinkedList.default();
      singlyLinkedList.add(500000000);
      singlyLinkedList.add({
        place: 'rapture'
      });
      singlyLinkedList.add(false);
      (0, _chai.expect)(singlyLinkedList.size()).to.be.equal(3);
      singlyLinkedList.clear();
      (0, _chai.expect)(singlyLinkedList.size()).to.be.equal(0);
    });
  });
});