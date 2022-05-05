/**
 * @jest-environment jsdom
 */
const removeItem = require('./__mock__/removeItems');
jest.mock('./__mock__/removeItems');
describe('Remove element from the DOM', () => {
  test('From 2 elements, after removal we should have only one', () => {
    expect(removeItem).not.toBeNull();
  });
});
