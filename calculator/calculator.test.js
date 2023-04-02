const calculator = require('./calculator')

test('add two numbers 2 and 4 to get 6', () => {
  expect(calculator.add(4, 2)).toBe(6)
})

test('subtract 13 from 30 to get 17', () => {
  expect(calculator.sub(30, 13)).toBe(17)
})