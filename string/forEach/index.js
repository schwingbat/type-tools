module.exports = function forEach(string, func) {
  for (let i = 0; i < string.length; i++) {
    func(string[i], i)
  }
  return string
}