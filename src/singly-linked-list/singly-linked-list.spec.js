/* eslint-env mocha */

import {expect} from 'chai';
import SinglyLinkedList from './singly-linked-list';

describe('Singly Linked List tests', () => {
  describe('add() tests', () => {
    it('should add new element in list', () => {
      const singlyLinkedList = new SinglyLinkedList();

      singlyLinkedList.add(1917);

      expect(singlyLinkedList.contains(1917)).to.be.equal(true);
    });
  });

  describe('addToFront() tests', () => {
    it('should add a new element to the front of the linked list', () => {
      const singlyLinkedList = new SinglyLinkedList();

      singlyLinkedList.add(1917);
      singlyLinkedList.addToFront(false);
      singlyLinkedList.addToFront(true);
      singlyLinkedList.add(1989);

      expect(singlyLinkedList.get()).to.be.equal(true);
    });
  });

  describe('clear() tests', () => {
    it('should clear the singly linked list', () => {
      const singlyLinkedList = new SinglyLinkedList();

      singlyLinkedList.add(-134);
      singlyLinkedList.add(1337.19);
      singlyLinkedList.add('andrew ryan');

      expect(singlyLinkedList.size()).to.be.equal(3);
      singlyLinkedList.clear();
      expect(singlyLinkedList.size()).to.be.equal(0);
    });
  });

  describe('contains() tests', () => {
    it('should return true if value has been added to list', () => {
      const singlyLinkedList = new SinglyLinkedList();

      expect(singlyLinkedList.contains(2000)).to.be.equal(false);

      singlyLinkedList.add(2000);

      expect(singlyLinkedList.contains(2000)).to.be.equal(true);
    });

    it('should return false if value is not in the list', () => {
      const singlyLinkedList = new SinglyLinkedList();

      singlyLinkedList.add(2000);

      expect(singlyLinkedList.contains(2020)).to.be.equal(false);
    });
  });

  describe('get() tests', () => {
    it('should get first value', () => {
      const singlyLinkedList = new SinglyLinkedList();

      singlyLinkedList.add(1999);
      singlyLinkedList.add({place: 'golden gate'});
      singlyLinkedList.add(true);

      expect(singlyLinkedList.get(0)).to.be.equal(1999);
    });

    it('should return null if index is larger than the list size', () => {
      const singlyLinkedList = new SinglyLinkedList();

      singlyLinkedList.add(1999);
      singlyLinkedList.add({place: 'mission'});
      singlyLinkedList.add(true);

      expect(singlyLinkedList.get(4)).to.be.equal(null);
    });

    it('should return the first value if no index is passed in', () => {
      const singlyLinkedList = new SinglyLinkedList();

      singlyLinkedList.add(1999);
      singlyLinkedList.add({place: 'california'});
      singlyLinkedList.add(true);

      expect(singlyLinkedList.get()).to.be.equal(1999);
    });

    it('should return null no nodes are in list', () => {
      const singlyLinkedList = new SinglyLinkedList();

      expect(singlyLinkedList.get()).to.be.equal(null);
    });
  });

  describe('getFirst() tests', () => {
    it('should get first value', () => {
      const singlyLinkedList = new SinglyLinkedList();

      singlyLinkedList.add(1999);
      singlyLinkedList.add({place: 'alameda'});
      singlyLinkedList.add(true);

      expect(singlyLinkedList.getFirst()).to.be.equal(1999);
    });

    it('should return null if there are no nodes are in list', () => {
      const singlyLinkedList = new SinglyLinkedList();

      expect(singlyLinkedList.getFirst()).to.be.equal(null);
    });
  });

  describe('getLast() tests', () => {
    it('should get last value', () => {
      const singlyLinkedList = new SinglyLinkedList();
      singlyLinkedList.add(1999);
      singlyLinkedList.add({place: 'san francisco'});
      singlyLinkedList.add(true);

      expect(singlyLinkedList.getLast()).to.be.equal(true);
    });

    it('should return null when no nodes in the singly linked list', () => {
      const singlyLinkedList = new SinglyLinkedList();

      expect(singlyLinkedList.getLast()).to.be.equal(null);
    });
  });

  describe('size() tests', () => {
    it('should return the correct size', () => {
      const singlyLinkedList = new SinglyLinkedList();

      singlyLinkedList.add(500000000);
      singlyLinkedList.add({place: 'rapture'});
      singlyLinkedList.add(false);

      expect(singlyLinkedList.size()).to.be.equal(3);
      singlyLinkedList.clear();
      expect(singlyLinkedList.size()).to.be.equal(0);
    });
  });
});
