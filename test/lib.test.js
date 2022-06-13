var chai = require('chai');
var jadt = require('../lib');

describe('Library tests', function () {
  describe('Data Structures tests', function () {
    describe('Queue test', function () {
      it('should only contain one element', function () {
        var Queue = jadt.Queue;
        var queue = new Queue();

        queue.enqueue('mega man');

        chai.expect(queue.size()).equal(1);
      });
    });

    describe('Stack test', function () {
      it('should only contain one element', function () {
        var Stack = jadt.Stack;
        var stack = new Stack();

        stack.push('mega man');

        chai.expect(stack.size()).equal(1);
      });
    });
  });
});
