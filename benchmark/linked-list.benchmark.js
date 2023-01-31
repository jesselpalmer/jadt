import {performance} from 'perf_hooks';

import {SinglyLinkedList} from '../src/data-structures/index.js';

function addFrontLinkedListTest(numElements) {
  const startTime = performance.now();
  const list = new SinglyLinkedList();

  for (let i = 0; i < numElements; i++) {
    list.addToFront(i);
  }

  const endTime = performance.now();
  const elapsedTime = endTime - startTime;

  console.log(`${list.size()} elements added to the front of the linkedlist ` +
      `using addToFront() in ${elapsedTime} ms`);
}

function pushArrayTest(numElements) {
  const startTime = performance.now();
  const array = [];

  for (let i = 0; i < numElements; i++) {
    array.unshift(i);
  }

  const endTime = performance.now();
  const elapsedTime = endTime - startTime;

  console.log(`${array.length} elements added to the front of the array ` +
      `using unshift() in ${elapsedTime} ms`);
}

function removeFrontLinkedListTest(numElements) {
  const list = new SinglyLinkedList();

  for (let i = 0; i < numElements; i++) {
    list.addToFront(i);
  }

  const startTime = performance.now();

  while (!list.isEmpty()) {
    list.removeFirst();
  }

  const endTime = performance.now();
  const elapsedTime = endTime - startTime;

  console.log(`${numElements} elements removed from the front of the` +
      ` linkedlist using removeFirst() in ${elapsedTime} ms`);
}

function removeArrayTest(numElements) {
  const array = [];

  for (let i = 0; i < numElements; i++) {
    array.push(i);
  }

  const startTime = performance.now();

  for (let i = 0; i < numElements; i++) {
    array.shift(i);
  }

  const endTime = performance.now();
  const elapsedTime = endTime - startTime;

  console.log(`${numElements} elements removed from the front of the array ` +
      `using shift() in ${elapsedTime} ms`);
}

function addToFrontTests() {
  const numElements = 50000;

  addFrontLinkedListTest(numElements);
  pushArrayTest(numElements);
}

function removeFromFrontTests() {
  const numElements = 50000;

  removeFrontLinkedListTest(numElements);
  removeArrayTest(numElements);
}

addToFrontTests();
removeFromFrontTests();
