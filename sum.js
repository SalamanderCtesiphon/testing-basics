

function capitalize(value) {
  const holder = value.slice(0, 1)
  const tail = value.slice(1)
  const tailLower = tail.toLowerCase()
  const secondHolder = holder.toUpperCase()
  const results = secondHolder.concat(tailLower)
  return results
}

module.exports = capitalize

