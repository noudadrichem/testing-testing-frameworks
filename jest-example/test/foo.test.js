'use strict';

const Lib = require('../../toTest');

// beforeAll(() => console.log('before all...'));
// afterAll(() => console.log('after all...'));
// beforeEach(() => console.log('before each...'));
// afterEach(() => console.log('after each...'));

test('adds 1 + 2 to equal 3', () => {
  expect(Lib.sum(1,2)).toBe(3);
  expect(Lib.sum(1,2)).not.toBe(5);
});

//* Handles promises as any other*/ 
test('Should resolve promise', async () => {
  const promiseResult = await Lib.shouldResolve();
  expect(promiseResult).toBe('good.')
})

describe('This is a description for nested tests.', () => {
  test('This is a nested test', () => {
    expect('a').toBe('a');
  })
})

test.todo('Add should be associative');