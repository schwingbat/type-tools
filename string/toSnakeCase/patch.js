var toSnakeCase = require('./index')

Object.defineProperty(String.prototype, 'toSnakeCase', {
  value: function() {
    return toSnakeCase(this)
  },
  enumerable: false
})