module.exports = function toSnakeCase(string) {
  return string
    .replace(/[a-z]([A-Z])/g, function(capture, char) {
      return capture[0] + '_' + char
    })
    .replace(/[aA]([A-Z][a-z])/, function(capture, chars) {
      return 'a_' + chars
    })
    .replace(/-/g, '_')
    .split(/\s+/)
    .join('_')
    .toLowerCase()
}