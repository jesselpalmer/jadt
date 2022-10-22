import Stack from './stack';

describe('Stack tests', () => {
  describe('clear() tests', () => {
    test('should clear an array with elements', () => {
      const stack = new Stack();
      stack.push('stanford');
      stack.push('cmu');
      stack.push('berkeley');
      stack.push('mit');
      stack.clear();
      expect(stack.size()).toBe(0);
    });
  });

  describe('isEmpty() tests', () => {
    test('should return true if empty', () => {
      const stack = new Stack();
      expect(stack.isEmpty()).toBe(true);
    });

    test('should return false if not empty', () => {
      const stack = new Stack();
      stack.push(1);
      stack.push(2);
      stack.push(3);
      expect(stack.isEmpty()).toBe(false);
    });

    test('should return true if empty array is passed to it', () => {
      const stack = new Stack();
      expect(stack.isEmpty()).toBe(true);
    });
  });

  describe('peek() tests', () => {
    test('should return the only element', () => {
      const stack = new Stack();
      stack.push('hopper');
      expect(stack.peek()).toBe('hopper');
    });

    test('should return the first element', () => {
      const stack = new Stack();
      stack.push('babbage');
      stack.push('hopper');
      stack.push('knuth');
      expect(stack.peek()).toBe('knuth');
    });
  });

  describe('pop() tests', () => {
    test('should return the first element', () => {
      const stack = new Stack();
      stack.push('babbage');
      stack.push('hopper');
      stack.push('knuth');
      expect(stack.pop()).toBe('knuth');
    });

    test('should remove first element', () => {
      const stack = new Stack();
      stack.push('babbage');
      stack.push('hopper');
      stack.pop();
      stack.push('knuth');
      expect(stack.peek()).toBe('knuth');
    });

    test('should had the correct size', () => {
      const stack = new Stack();
      stack.push('babbage');
      stack.push('hopper');
      stack.pop();
      stack.push('knuth');
      expect(stack.size()).toBe(2);
    });
  });

  describe('size() tests', () => {
    test('should return the correct size', () => {
      const stack = new Stack();
      stack.push(4);
      expect(stack.size()).toBe(1);
    });
  });

  describe('search() tests', () => {
    test('should return index an element if the element exists', () => {
      const stack = new Stack();
      stack.push(1906);
      stack.push(1815);
      expect(stack.search(1906)).toBe(1);
    });

    test('should return -1 if an index can not be found', () => {
      const stack = new Stack();
      stack.push(1906);
      stack.push(1815);
      expect(stack.search(1938)).toBe(-1);
    });
  });

  describe('toString() tests', () => {
    test('should return \'\' when stack is empty', () => {
      const stack = new Stack();
      expect(stack.toString()).toBe('');
    });

    test('should return correct string when there one element', () => {
      const stack = new Stack();
      stack.push(1);
      expect(stack.toString()).toBe('1');
    });

    test('should return correct string with multiple elements', () => {
      const stack = new Stack();
      stack.push(1);
      stack.push(2);
      stack.push(3);
      expect(stack.toString()).toBe('3,2,1');
    });
  });
});
