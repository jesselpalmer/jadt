import HashSet from './hashset';

describe('HashSet tests', () => {
  describe('add() tests', () => {
    test('should add an element correctly', () => {
      const hashSet = new HashSet();
      hashSet.add(35);
      expect(hashSet.has(35)).toBe(true);
    });
  });

  describe('clear() tests', () => {
    test('should clear out all the elements', () => {
      const hashSet = new HashSet();
      hashSet.add(10);
      hashSet.add(11);
      hashSet.add(999);
      hashSet.clear();
      expect(hashSet.size()).toBe(0);
    });
  });

  describe('has() tests', () => {
    test('should be true if hashset contains value', () => {
      const hashSet = new HashSet();
      hashSet.add(5);
      expect(hashSet.has(5)).toBe(true);
    });

    test('should be false if hashset does not contain value', () => {
      const hashSet = new HashSet();
      expect(hashSet.has(5)).toBe(false);
    });
  });

  describe('remove() tests', () => {
    test('should return the correct number of elements', () => {
      const hashSet = new HashSet();
      hashSet.add(10);
      hashSet.add(11);
      expect(hashSet.has(11)).toBe(true);
      hashSet.remove(11);
      hashSet.add(999);
      expect(hashSet.has(11)).toBe(false);
    });
  });

  describe('size() tests', () => {
    test('should return the correct number of elements', () => {
      const hashSet = new HashSet();
      hashSet.add(10);
      hashSet.add(11);
      hashSet.add(999);
      expect(hashSet.size()).toBe(3);
    });
  });
});
