const forEach = require('./index')
require('./patch')

describe('object/forEach', () => {
  let testObject
  let testFunc

  beforeEach(() => {
    testObject = {
      one: 1,
      two: 2,
      three: 3
    }
    testFunc = jest.fn()
  })

  describe('standalone', () => {
    it('iterates through all object properties', () => {
      forEach(testObject, testFunc)
      expect(testFunc.mock.calls.length).toBe(3)
    })

    it('passes the property value as the first parameter', () => {
      forEach(testObject, testFunc)
      expect(testFunc.mock.calls[0][0]).toBe(1)
      expect(testFunc.mock.calls[1][0]).toBe(2)
      expect(testFunc.mock.calls[2][0]).toBe(3)
    })

    it('passes the property name as the second parameter', () => {
      forEach(testObject, testFunc)
      expect(testFunc.mock.calls[0][1]).toBe('one')
      expect(testFunc.mock.calls[1][1]).toBe('two')
      expect(testFunc.mock.calls[2][1]).toBe('three')
    })

    it('returns the object', () => {
      expect(forEach(testObject, testFunc)).toBe(testObject)
    })
  })

  describe('patched', () => {
    it('extends the object prototype', () => {
      expect(typeof {}.forEach).toBe('function')
    })

    it('iterates through all object properties', () => {
      testObject.forEach(testFunc)
      expect(testFunc.mock.calls.length).toBe(3)
    })

    it('passes the property value as the first parameter', () => {
      testObject.forEach(testFunc)
      expect(testFunc.mock.calls[0][0]).toBe(1)
      expect(testFunc.mock.calls[1][0]).toBe(2)
      expect(testFunc.mock.calls[2][0]).toBe(3)
    })

    it('passes the property name as the second parameter', () => {
      testObject.forEach(testFunc)
      expect(testFunc.mock.calls[0][1]).toBe('one')
      expect(testFunc.mock.calls[1][1]).toBe('two')
      expect(testFunc.mock.calls[2][1]).toBe('three')
    })

    it('returns itself', () => {
      expect(testObject.forEach(testFunc)).toBe(testObject)
    })
  })
})