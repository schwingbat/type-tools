const last = require('./index')
require('./patch')

describe('string/last', () => {
  describe('standalone', () => {
    it('returns the last character of a string', () => {
      expect(last('string')).toBe('g')
    })
  })

  describe('patched', () => {
    it('extends the string prototype', () => {
      expect(typeof 'string'.last).toBe('function')
    })

    it('returns the last character', () => {
      expect('string'.last()).toBe('g')
    })
  })
})