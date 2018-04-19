const last = require('./index')
require('./patch')

describe('Array.prototype.last', () => {
  describe('standalone', () => {
    it('returns the last element of an array', () => {
      expect(last([1, 2, 3])).toBe(3)
    })
  })

  describe('patched', () => {
    it('extends the array prototype', () => {
      expect(typeof [].last).toBe('function')
    })

    it('returns the last element of an array', () => {
      expect([1, 2, 3].last()).toBe(3)
    })
  })
})