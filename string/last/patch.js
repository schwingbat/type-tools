var last = require('./index')

Object.defineProperty(String.prototype, 'last', {
  value: function() {
    return last(this)
  },
  enumerable: false
})