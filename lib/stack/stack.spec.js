"use strict";

var _stack = _interopRequireDefault(require("./stack"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Stack tests', function () {
  describe('clear() tests', function () {
    test('should clear an array with elements', function () {
      var stack = new _stack.default();
      stack.push('stanford');
      stack.push('cmu');
      stack.push('berkeley');
      stack.push('mit');
      stack.clear();
      expect(stack.size()).toBe(0);
    });
  });
  describe('isEmpty() tests', function () {
    test('should return true if empty', function () {
      var stack = new _stack.default();
      expect(stack.isEmpty()).toBe(true);
    });
    test('should return false if not empty', function () {
      var stack = new _stack.default();
      stack.push(1);
      stack.push(2);
      stack.push(3);
      expect(stack.isEmpty()).toBe(false);
    });
    test('should return true if empty array is passed to it', function () {
      var stack = new _stack.default();
      expect(stack.isEmpty()).toBe(true);
    });
  });
  describe('peek() tests', function () {
    test('should return the only element', function () {
      var stack = new _stack.default();
      stack.push('hopper');
      expect(stack.peek()).toBe('hopper');
    });
    test('should return the first element', function () {
      var stack = new _stack.default();
      stack.push('babbage');
      stack.push('hopper');
      stack.push('knuth');
      expect(stack.peek()).toBe('knuth');
    });
  });
  describe('pop() tests', function () {
    test('should return the first element', function () {
      var stack = new _stack.default();
      stack.push('babbage');
      stack.push('hopper');
      stack.push('knuth');
      expect(stack.pop()).toBe('knuth');
    });
    test('should remove first element', function () {
      var stack = new _stack.default();
      stack.push('babbage');
      stack.push('hopper');
      stack.pop();
      stack.push('knuth');
      expect(stack.peek()).toBe('knuth');
    });
    test('should had the correct size', function () {
      var stack = new _stack.default();
      stack.push('babbage');
      stack.push('hopper');
      stack.pop();
      stack.push('knuth');
      expect(stack.size()).toBe(2);
    });
  });
  describe('size() tests', function () {
    test('should return the correct size', function () {
      var stack = new _stack.default();
      stack.push(4);
      expect(stack.size()).toBe(1);
    });
  });
  describe('search() tests', function () {
    test('should return index an element if the element exists', function () {
      var stack = new _stack.default();
      stack.push(1906);
      stack.push(1815);
      expect(stack.search(1906)).toBe(1);
    });
    test('should return -1 if an index can not be found', function () {
      var stack = new _stack.default();
      stack.push(1906);
      stack.push(1815);
      expect(stack.search(1938)).toBe(-1);
    });
  });
  describe('toString() tests', function () {
    test('should return \'\' when stack is empty', function () {
      var stack = new _stack.default();
      expect(stack.toString()).toBe('');
    });
    test('should return correct string when there one element', function () {
      var stack = new _stack.default();
      stack.push(1);
      expect(stack.toString()).toBe('1');
    });
    test('should return correct string with multiple elements', function () {
      var stack = new _stack.default();
      stack.push(1);
      stack.push(2);
      stack.push(3);
      expect(stack.toString()).toBe('3,2,1');
    });
  });
});