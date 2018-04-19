module.exports = function toKebabCase(string) {
  return string
    .replace(/[\-_\s+]([a-zA-Z])/g, function(capture, char) {
      return '-' + char
    })
    .replace(/[a-z]([A-Z])/g, function(capture, char) {
      return capture[0] + '-' + char
    })
    .replace(/[A-Z]([A-Z][a-z])/g, function(capture, char) {
      return capture[0] + '-' + char
    })
    .toLowerCase()
}