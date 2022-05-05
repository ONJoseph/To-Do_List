/**
 * @jest-environment jsdom
 */

 import removeItem from '../removeItems.js';

 jest.mock('../removeItem');
 describe('Remove element from the DOM', () => {
   test('From 2 elements, after removal we should have only one', () => {
     expect(removeItem()).toBe(1);
   });
 });