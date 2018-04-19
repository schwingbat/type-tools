var toKebabCase = require('./index')

Object.defineProperty(String.prototype, 'toKebabCase', {
  value: function() {
    return toKebabCase(this)
  },
  enumerable: false
})