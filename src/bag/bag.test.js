import Bag from './bag';

describe('Bag tests', () => {
  describe('add() tests', () => {
    test('should add one new element', () => {
      const bag = new Bag();

      bag.add(1917);

      expect(bag.size()).toBe(1);
    });
  });

  describe('count() tests', () => {
    test('should return a count of 2', () => {
      const bag = new Bag();

      bag.add(2022);
      bag.add(true);
      bag.add(true);
      bag.add('test');
      bag.add(2022);

      expect(bag.count(2022)).toBe(2);
    });

    test('should return 0 if nothing has been added', () => {
      const bag = new Bag();

      expect(bag.count()).toBe(0);
    });
  });
});
