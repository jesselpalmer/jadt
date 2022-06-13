"use strict";

var _hashset = _interopRequireDefault(require("./hashset"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('HashSet tests', function () {
  describe('add() tests', function () {
    test('should add an element correctly', function () {
      var hashSet = new _hashset.default();
      hashSet.add(35);
      expect(hashSet.has(35)).toBe(true);
    });
  });
  describe('clear() tests', function () {
    test('should clear out all the elements', function () {
      var hashSet = new _hashset.default();
      hashSet.add(10);
      hashSet.add(11);
      hashSet.add(999);
      hashSet.clear();
      expect(hashSet.size()).toBe(0);
    });
  });
  describe('has() tests', function () {
    test('should be true if hashset contains value', function () {
      var hashSet = new _hashset.default();
      hashSet.add(5);
      expect(hashSet.has(5)).toBe(true);
    });
    test('should be false if hashset does not contain value', function () {
      var hashSet = new _hashset.default();
      expect(hashSet.has(5)).toBe(false);
    });
  });
  describe('remove() tests', function () {
    test('should return the correct number of elements', function () {
      var hashSet = new _hashset.default();
      hashSet.add(10);
      hashSet.add(11);
      expect(hashSet.has(11)).toBe(true);
      hashSet.remove(11);
      hashSet.add(999);
      expect(hashSet.has(11)).toBe(false);
    });
  });
  describe('size() tests', function () {
    test('should return the correct number of elements', function () {
      var hashSet = new _hashset.default();
      hashSet.add(10);
      hashSet.add(11);
      hashSet.add(999);
      expect(hashSet.size()).toBe(3);
    });
  });
});