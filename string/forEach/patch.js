var forEach = require('./index')

Object.defineProperty(String.prototype, 'forEach', {
  value: function(func) {
    return forEach(this, func)
  },
  enumerable: false
})