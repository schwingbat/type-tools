const first = require('./index')
require('./patch')

describe('string/first', () => {
  describe('standalone', () => {
    it('returns the first element of a string', () => {
      expect(first('string')).toBe('s')
    })
  })

  describe('patched', () => {
    it('extends the string prototype', () => {
      expect(typeof 'string'.first).toBe('function')
    })

    it('returns the first character', () => {
      expect('string'.first()).toBe('s')
    })
  })
})