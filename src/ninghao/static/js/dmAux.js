Array.prototype.forEachSync = async function(fn) {
  for (let i = 0; i < this.length; i++) {
    await fn(this[i], i, this)
  }
}

Array.prototype.mapSync = async function(fn) {
  const result = []

  for (let i = 0; i < this.length; i++) {
    result.push(await fn(this[i], i, this))
  }

  return result
}
