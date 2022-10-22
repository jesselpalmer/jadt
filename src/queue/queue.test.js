import Queue from './queue';

describe('Queue tests', () => {
  describe('back() tests', () => {
    test('should return the last value in the queue', () => {
      const queue = new Queue();
      queue.enqueue('wheatley');
      queue.enqueue('cave johnson');
      queue.enqueue('glados');
      expect(queue.back()).toBe('glados');
    });

    test('should return null if queue is empty', () => {
      const queue = new Queue();
      expect(queue.back()).toBe(null);
    });
  });

  describe('clear() tests', () => {
    test('should remove all of the elements from the queue', () => {
      const queue = new Queue();
      queue.enqueue('wheatley');
      queue.enqueue('glados');
      queue.enqueue('cave johnson');
      queue.clear();
      expect(queue.size()).toBe(0);
    });
  });

  describe('dequeue() tests', () => {
    test('should add values to the queue', () => {
      const queue = new Queue();
      queue.enqueue('wheatley');
      queue.enqueue('glados');
      queue.enqueue('cave johnson');
      expect(queue.dequeue()).toBe('cave johnson');
      expect(queue.size()).toBe(2);
    });
  });

  describe('enqueue() tests', () => {
    test('should add values to the queue', () => {
      const queue = new Queue();
      queue.enqueue('wheatley');
      queue.enqueue('glados');
      queue.enqueue('cave johnson');
      expect(queue.size()).toBe(3);
    });
  });

  describe('isEmpty()', () => {
    test('should be true if there are no elements', () => {
      const queue = new Queue();
      expect(queue.isEmpty()).toBe(true);
    });
  });

  describe('peek()', () => {
    test('should return the first element', () => {
      const queue = new Queue();
      queue.enqueue('chell');
      expect(queue.peek()).toBe('chell');
    });

    test('should return null if queue is empty', () => {
      const queue = new Queue();
      expect(queue.peek()).toBe(null);
    });
  });

  describe('size() tests', () => {
    test('should return the correct size', () => {
      const queue = new Queue();
      queue.enqueue('wheatley');
      queue.enqueue('glados');
      expect(queue.size()).toBe(2);
    });
  });
});
