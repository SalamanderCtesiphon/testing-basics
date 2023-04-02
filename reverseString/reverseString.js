function reverseString(text) {
  const textArray = text.split('')
  const reversedArray = textArray.reverse()
  const results = reversedArray.join('')
  return results
}

module.exports = reverseString