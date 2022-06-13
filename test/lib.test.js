var chai = require('chai');
var csjs = require('../lib');

describe('Library tests', function () {
  describe('Data Structures tests', function () {
    describe('Queue test', function () {
      it('should only contain one element', function () {
        var Queue = csjs.Queue;
        var queue = new Queue();

        queue.enqueue('mega man');

        chai.expect(queue.size()).equal(1);
      });
    });

    describe('Stack test', function () {
      it('should only contain one element', function () {
        var Stack = csjs.Stack;
        var stack = new Stack();

        stack.push('mega man');

        chai.expect(stack.size()).equal(1);
      });
    });

    describe('SinglyLinkedList test', function () {
      it('should only contain one element', function () {
        var SinglyLinkedListNode = csjs.SinglyLinkedListNode;
        var singlyLinkedListNode = new SinglyLinkedListNode({villan: 'dr. willy'});

        var SinglyLinkedList = csjs.SinglyLinkedList;
        var singlyLinkedList = new SinglyLinkedList();

        singlyLinkedList.add(singlyLinkedListNode);

        chai.expect(singlyLinkedList.size()).equal(1);
      });
    });
  });
});
