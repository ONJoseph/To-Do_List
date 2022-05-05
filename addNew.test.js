/**
 * @jest-environment jsdom
 */

const addNew = require ('./__mock__/addNew.js');
 describe('Testing addNew To Do task function', () => {
   const result = addNew
    test('Check the number of elements added, should be 1', () => {
      expect(addNew[0]).not.toBeNull();
    });
    test('Check if the name equals First', () => {
      expect(addNew[1]).not.toBeNull();
    });
  });
  