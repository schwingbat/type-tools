module.exports = function toCamelCase(string) {
  return string
    .replace(/[-_\s]([a-zA-Z])/g, function(capture, char) {
      return char.toUpperCase()
    })
}