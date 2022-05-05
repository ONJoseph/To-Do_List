/**
 * @jest-environment jsdom
 */

 import addNew from '../addNew.js';

 jest.mock('../addNew.js'); 
 describe('Testing addNew To Do task function', () => {
    test('Check the number of elements added, should be 1', () => {
      expect(addNew()[0]).toBe(1);
    });
  });