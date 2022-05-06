/**
 * @jest-environment jsdom
 */

const addNew = require('./__mock__/addNew');
const edit = require('./__mock__/edit');

describe('Testing edit function', () => {
  test('Check if the name equals First', () => {
    expect(addNew[1]).not.toBeNull();
  });

  test('Check if the name have changed. It is now 'Second'', () => {
    expect(edit[1]).not.toBe('First');
  });

  test('Check if the stored item in the localStorage has the description changed', () => {
    expect(edit()[1]).toBe('Second');
  });
});
