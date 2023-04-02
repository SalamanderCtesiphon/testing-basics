const reverseString = require('./reverseString')

test('allin should equal nilla', () => {
  expect(reverseString('allin')).toBe('nilla')
})
test('works with spaces', () => {
  expect(reverseString('all lla in')).toBe('ni all lla')
})