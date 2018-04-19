var forEach = require('./index')

Object.defineProperty(Object.prototype, 'forEach', {
  value: function(func) {
    return forEach(this, func)
  },
  enumerable: false
})