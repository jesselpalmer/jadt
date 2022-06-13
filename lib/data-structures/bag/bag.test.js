"use strict";

var _bag = _interopRequireDefault(require("./bag"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Bag tests', function () {
  describe('add() tests', function () {
    test('should add one new element', function () {
      var bag = new _bag.default();
      bag.add(1917);
      expect(bag.size()).toBe(1);
    });
  });
  describe('count() tests', function () {
    test('should return a count of 2', function () {
      var bag = new _bag.default();
      bag.add(2022);
      bag.add(true);
      bag.add(true);
      bag.add('test');
      bag.add(2022);
      expect(bag.count(2022)).toBe(2);
    });
    test('should return 0 if nothing has been added', function () {
      var bag = new _bag.default();
      expect(bag.count()).toBe(0);
    });
  });
});