var toTitleCase = require('./index')

Object.defineProperty(String.prototype, 'toTitleCase', {
  value: function() {
    return toTitleCase(this)
  },
  enumerable: false
})