const filter = require('./index')
require('./patch')

describe('object/filter', () => {
  let testObject
  let testFunc

  beforeEach(() => {
    testObject = {
      one: 1,
      two: 2,
      three: '3'
    }
    testFunc = jest.fn().mockImplementation((value, key) => true)
  })

  describe('standalone', () => {
    it('returns a new object', () => {
      expect(filter(testObject, () => true)).not.toBe(testObject)
    })

    it('calls function once for each property', () => {
      filter(testObject, testFunc)
      expect(testFunc.mock.calls.length).toBe(3)
    })

    it('passes property value as the first argument', () => {
      filter(testObject, testFunc)
      expect(testFunc.mock.calls[0][0]).toBe(1)
      expect(testFunc.mock.calls[1][0]).toBe(2)
      expect(testFunc.mock.calls[2][0]).toBe('3')
    })

    it('passes property name as the second argument', () => {
      filter(testObject, testFunc)
      expect(testFunc.mock.calls[0][1]).toBe('one')
      expect(testFunc.mock.calls[1][1]).toBe('two')
      expect(testFunc.mock.calls[2][1]).toBe('three')
    })

    it('copies properties if function returns true', () => {
      const result = filter(testObject, () => true)
      expect(Object.keys(result)).toEqual(['one', 'two', 'three'])
    })

    it('ignores properties if function returns false', () => {
      const result = filter(testObject, () => false)
      expect(Object.keys(result)).toEqual([])
    })
  })

  describe('patched', () => {
    it('extends the object prototype', () => {
      expect(typeof {}.filter).toBe('function')
    })

    it('returns a new object', () => {
      expect(testObject.filter(() => true)).not.toBe(testObject)
    })

    it('calls function once for each property', () => {
      testObject.filter(testFunc)
      expect(testFunc.mock.calls.length).toBe(3)
    })

    it('passes property value as the first argument', () => {
      testObject.filter(testFunc)
      expect(testFunc.mock.calls[0][0]).toBe(1)
      expect(testFunc.mock.calls[1][0]).toBe(2)
      expect(testFunc.mock.calls[2][0]).toBe('3')
    })

    it('passes property name as the second argument', () => {
      testObject.filter(testFunc)
      expect(testFunc.mock.calls[0][1]).toBe('one')
      expect(testFunc.mock.calls[1][1]).toBe('two')
      expect(testFunc.mock.calls[2][1]).toBe('three')
    })

    it('copies properties if function returns true', () => {
      const result = testObject.filter(() => true)
      expect(Object.keys(result)).toEqual(['one', 'two', 'three'])
    })

    it('ignores properties if function returns false', () => {
      const result = testObject.filter(() => false)
      expect(Object.keys(result)).toEqual([])
    })
  })
})