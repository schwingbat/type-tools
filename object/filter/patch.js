var filter = require('./index')

Object.defineProperty(Object.prototype, 'filter', {
  value: function(func) {
    return filter(this, func)
  },
  enumerable: false
})