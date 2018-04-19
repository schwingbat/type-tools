Object.defineProperty(Array.prototype, 'last', {
  value: function() {
    return this[this.length - 1]
  },
  enumerable: false
})