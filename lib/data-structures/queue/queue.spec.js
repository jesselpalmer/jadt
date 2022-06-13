"use strict";

var _queue = _interopRequireDefault(require("./queue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Queue tests', function () {
  describe('back() tests', function () {
    test('should return the last value in the queue', function () {
      var queue = new _queue.default();
      queue.enqueue('wheatley');
      queue.enqueue('cave johnson');
      queue.enqueue('glados');
      expect(queue.back()).toBe('glados');
    });
    test('should return null if queue is empty', function () {
      var queue = new _queue.default();
      expect(queue.back()).toBe(null);
    });
  });
  describe('clear() tests', function () {
    test('should remove all of the elements from the queue', function () {
      var queue = new _queue.default();
      queue.enqueue('wheatley');
      queue.enqueue('glados');
      queue.enqueue('cave johnson');
      queue.clear();
      expect(queue.size()).toBe(0);
    });
  });
  describe('dequeue() tests', function () {
    test('should add values to the queue', function () {
      var queue = new _queue.default();
      queue.enqueue('wheatley');
      queue.enqueue('glados');
      queue.enqueue('cave johnson');
      expect(queue.dequeue()).toBe('cave johnson');
      expect(queue.size()).toBe(2);
    });
  });
  describe('enqueue() tests', function () {
    test('should add values to the queue', function () {
      var queue = new _queue.default();
      queue.enqueue('wheatley');
      queue.enqueue('glados');
      queue.enqueue('cave johnson');
      expect(queue.size()).toBe(3);
    });
  });
  describe('isEmpty()', function () {
    test('should be true if there are no elements', function () {
      var queue = new _queue.default();
      expect(queue.isEmpty()).toBe(true);
    });
  });
  describe('peek()', function () {
    test('should return the first element', function () {
      var queue = new _queue.default();
      queue.enqueue('chell');
      expect(queue.peek()).toBe('chell');
    });
    test('should return null if queue is empty', function () {
      var queue = new _queue.default();
      expect(queue.peek()).toBe(null);
    });
  });
  describe('size() tests', function () {
    test('should return the correct size', function () {
      var queue = new _queue.default();
      queue.enqueue('wheatley');
      queue.enqueue('glados');
      expect(queue.size()).toBe(2);
    });
  });
});