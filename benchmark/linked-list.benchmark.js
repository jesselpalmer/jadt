import {performance} from 'perf_hooks';

import {SinglyLinkedList} from '../src/data-structures/index.js';

const numTestElements = 100000;

function addFrontLinkedListTest() {
  const startTime = performance.now();
  const list = new SinglyLinkedList();

  for (let i = 0; i < numTestElements; i++) {
    list.addToFront(i);
  }

  const endTime = performance.now();
  const elapsedTime = endTime - startTime;

  console.log(`    ${numTestElements} elements added to the front of the ` +
      `linkedlist using addToFront() in ${elapsedTime} ms`);
}

function pushArrayTest() {
  const startTime = performance.now();
  const array = [];

  for (let i = 0; i < numTestElements; i++) {
    array.unshift(i);
  }

  const endTime = performance.now();
  const elapsedTime = endTime - startTime;

  console.log(`    ${numTestElements} elements added to the front of the ` +
      `array using unshift() in ${elapsedTime} ms`);
}

function dequeueElementTest() {
  const list = new SinglyLinkedList();

  for (let i = 0; i < numTestElements; i++) {
    list.addToFront(i);
  }
  const startTime = performance.now();

  while (!list.isEmpty()) {
    list.removeFirst();
  }

  const endTime = performance.now();
  const elapsedTime = endTime - startTime;

  console.log(`    ${numTestElements} elements removed from the front of the ` +
    `linkedlist using removeFirst() in ${elapsedTime} ms`);
}

function removeElementArrayTest() {
  const array = [];

  for (let i = 0; i < numTestElements; i++) {
    array.push(i);
  }

  const startTime = performance.now();

  while (array.length) {
    array.shift();
  }

  const endTime = performance.now();
  const elapsedTime = endTime - startTime;

  console.log(`    ${numTestElements} elements removed from the front of the ` +
      `array using shift() in ${elapsedTime} ms`);
}

function addToFrontTests() {
  console.log('Executing benchmark tests...');
  console.log('  Add elements to the front tests: ');
  addFrontLinkedListTest();
  pushArrayTest();

  console.log('\n');
  console.log('  Removing elements from the front tests: ');
  dequeueElementTest();
  removeElementArrayTest();
}

addToFrontTests();
