

const captilize = require('./sum')

test('takes a string and returns it with the first letter capitalized', () => {
  expect(captilize('tom')).toBe('Tom')
})
test('takes a string and returns it with the first letter capitalized', () => {
  expect(captilize('missiSSippi')).toBe('Mississippi')
})

