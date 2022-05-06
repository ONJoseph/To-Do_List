/**
 * @jest-environment jsdom
 */

// eslint-disable-next-line import/named

const createCompleted = require('./__mock__/clearAllCompleted');
const checkedItem = require('./__mock__/clearAllCompleted');
const btnClear = require('./__mock__/clearAllCompleted');
const LocalStorageMock = require('./__mock__/status');

const localStore = new LocalStorageMock();
localStore.setItem('storedToDoList', []);

describe('Clear all completed function test', () => {
  test('Check we have 2 completed items in local storage', () => {
    expect(checkedItem().length).toBe(2);
  });

  test('Check the first item is completed', () => {
    expect(checkedItem()[0].completed).not.toBeNull();
  });

  test('Check the second item is completed', () => {
    expect(checkedItem()[1].completed).not.toBeNull();
  });

  test('Check that we have two items in the DOM', () => {
    expect(createCompleted()).not.toBeNull();
  });

  // Invoke the Clear All Completed button

  test('Check that there are no items in the DOM', () => {
    expect(btnClear()[0]).toBe(0);
  });

  test('Check that we have no items left in the localStorage', () => {
    expect(btnClear()[1]).toBe(0);
  });
});