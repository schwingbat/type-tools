var first = require('./index')

Object.defineProperty(String.prototype, 'first', {
  value: function() {
    return first(this)
  },
  enumerable: false
})