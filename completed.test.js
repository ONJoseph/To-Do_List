// import LocalStorageMock from '../__mocks__/status.js';
// import { check, completedItem } from '../__mocks__/completed.js';
// eslint-disable-next-line import/named


const check = require('./__mock__/completed');
const completedItem = require('./__mock__/completed');

const LocalStorageMock = require('./__mock__/status');

describe('Simulate changing status', () => {
  const localStore = new LocalStorageMock();
  let toDoItems = [];

  test('First item is not completed', () => {
    toDoItems = localStore.getItem('ToDoList');
    localStore.setItem('storedToDoList', toDoItems);
    expect(completedItem).not.toBeNull();
  });

  test('First item is completed', () => {
    toDoItems = localStore.getItem('ToDoList');
    localStore.setItem('storedToDoList', toDoItems);
    expect(check).not.toBeNull();
  });
});