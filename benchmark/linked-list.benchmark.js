import {performance} from 'perf_hooks';

import {SinglyLinkedList} from '../src/singly-linked-list/index.js';

function addFrontLinkedListTest() {
  const startTime = performance.now();
  const list = new SinglyLinkedList();

  for (let i = 0; i < 100000; i++) {
    list.addToFront(i);
  }

  const endTime = performance.now();

  const elapsedTime = endTime - startTime;

  console.log(`${list.size()} elements added to the front of the linkedlist ` +
      `using addToFront() in ${elapsedTime} milliseconds`);
}

async function pushArrayTest() {
  const startTime = performance.now();
  const array = [];

  for (let i = 0; i < 100000; i++) {
    array.unshift(i);
  }

  const endTime = performance.now();
  const elapsedTime = endTime - startTime;

  console.log(`${array.length} elements added to the front of the array ` +
      `using unshift() in ${elapsedTime} milliseconds`);
}

function addToFrontTests() {
  addFrontLinkedListTest();
  pushArrayTest();
}

addToFrontTests();
