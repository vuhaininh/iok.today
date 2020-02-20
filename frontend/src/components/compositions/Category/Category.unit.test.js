import React from 'react';
import CreateCategory from './CreateCategory';
import renderer from 'react-test-renderer';

function sum(a, b) {
  return a + b;
}
test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

describe('Test Create Category Component', () => {});
