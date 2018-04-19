var forEach = require('./index')
require('./patch')

describe('string/forEach', () => {
  describe('standalone', () => {
    it('iterates over each character in a string', () => {
      const fn = jest.fn()
      forEach('fives', fn)
      expect(fn.mock.calls.length).toBe(5)
    })

    it('passes the character as the first parameter', () => {
      const fn = jest.fn()
      forEach('fives', fn)
      expect(fn.mock.calls[0][0]).toBe('f')
      expect(fn.mock.calls[1][0]).toBe('i')
      expect(fn.mock.calls[2][0]).toBe('v')
      expect(fn.mock.calls[3][0]).toBe('e')
      expect(fn.mock.calls[4][0]).toBe('s')
    })

    it('passes the index as the second parameter', () => {
      const fn = jest.fn()
      forEach('fives', fn)
      expect(fn.mock.calls[0][1]).toBe(0)
      expect(fn.mock.calls[1][1]).toBe(1)
      expect(fn.mock.calls[2][1]).toBe(2)
      expect(fn.mock.calls[3][1]).toBe(3)
      expect(fn.mock.calls[4][1]).toBe(4)
    })

    it('returns the string', () => {
      const test = 'test'
      expect(forEach(test, () => {})).toBe(test)
    })
  })

  describe('patched', () => {
    it('extends the string prototype', () => {
      expect(typeof 'string'.forEach).toBe('function')
    })

    it('iterates over each character in a string', () => {
      const fn = jest.fn()
      'fives'.forEach(fn)
      expect(fn.mock.calls.length).toBe(5)
    })

    it('passes the character as the first parameter', () => {
      const fn = jest.fn()
      'fives'.forEach(fn)
      expect(fn.mock.calls[0][0]).toBe('f')
      expect(fn.mock.calls[1][0]).toBe('i')
      expect(fn.mock.calls[2][0]).toBe('v')
      expect(fn.mock.calls[3][0]).toBe('e')
      expect(fn.mock.calls[4][0]).toBe('s')
    })

    it('passes the index as the second parameter', () => {
      const fn = jest.fn()
      'fives'.forEach(fn)
      expect(fn.mock.calls[0][1]).toBe(0)
      expect(fn.mock.calls[1][1]).toBe(1)
      expect(fn.mock.calls[2][1]).toBe(2)
      expect(fn.mock.calls[3][1]).toBe(3)
      expect(fn.mock.calls[4][1]).toBe(4)
    })

    it('returns itself', () => {
      const test = 'test'
      expect(test.forEach(() => true)).toBe(test)
    })
  })
})