const first = require('./index')
require('./patch')

describe('array/first', () => {
  describe('standalone', () => {
    it('returns the first element of an array', () => {
      expect(first([1, 2, 3])).toBe(1)
    })
  })

  describe('patched', () => {
    it('extends the array prototype', () => {
      expect(typeof [].first).toBe('function')
    })

    it('returns the first element of the array', () => {
      expect([1, 2, 3].first()).toBe(1)
    })
  })
})