var first = require('./index')

Object.defineProperty(Array.prototype, 'first', {
  value: function() {
    return first(this)
  },
  enumerable: false
})