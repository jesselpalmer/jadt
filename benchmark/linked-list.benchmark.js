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

  console.log(`    ${list.size()} elements added to the front of the ` +
      `linkedlist using addToFront() in ${elapsedTime} ms`);
}

function pushArrayTest(numElements) {
  const startTime = performance.now();
  const array = [];

  for (let i = 0; i < numElements; i++) {
    array.unshift(i);
  }

  const endTime = performance.now();
  const elapsedTime = endTime - startTime;

  console.log(`    ${array.length} elements added to the front of the array ` +
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

  console.log(`    ${numElements} elements removed from the front of the ` +
      `linkedlist using removeFirst() in ${elapsedTime} ms`);
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

  console.log(`    ${numElements} elements removed from the front of the ` +
      `array using shift() in ${elapsedTime} ms`);
}

const NUM_TEST_ELEMENTS = 100000;

function addToFrontTests() {
  const numElements = NUM_TEST_ELEMENTS;

  console.log('\n');
  console.log('Executing benchmark tests...');
  console.log('  Add elements to the front tests: ');

  addFrontLinkedListTest(numElements);
  pushArrayTest(numElements);
}

function removeFromFrontTests() {
  const numElements = NUM_TEST_ELEMENTS;

  console.log('\n');
  console.log('  Removing elements from the front tests: ');

  removeFrontLinkedListTest(numElements);
  removeArrayTest(numElements);
}

addToFrontTests();
removeFromFrontTests();
