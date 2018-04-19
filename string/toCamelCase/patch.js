var toCamelCase = require('./index')

Object.defineProperty(String.prototype, 'toCamelCase', {
  value: function() {
    return toCamelCase(this)
  },
  enumerable: false
})