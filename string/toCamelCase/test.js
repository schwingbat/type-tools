const toCamelCase = require('./index')
require('./patch')

describe('string/toCamelCase', () => {
  describe('standalone', () => {
    it('converts from spaces', () => {
      expect(toCamelCase('this is a very nice function')).toBe('thisIsAVeryNiceFunction')
    })

    it('converts from kebab-case', () => {
      expect(toCamelCase('this-is-a-thing')).toBe('thisIsAThing')
    })

    it('converts from snake_case', () => {
      expect(toCamelCase('this_is_snake_case')).toBe('thisIsSnakeCase')
    })
  })

  describe('patched', () => {
    it('extends the string prototype', () => {
      expect(typeof 'string'.toCamelCase).toBe('function')
    })

    it('converts from spaces', () => {
      expect('this is a very nice function'.toCamelCase()).toBe('thisIsAVeryNiceFunction')
    })

    it('converts from kebab-case', () => {
      expect('this-is-a-thing'.toCamelCase()).toBe('thisIsAThing')
    })

    it('converts from snake_case', () => {
      expect('this_is_snake_case'.toCamelCase()).toBe('thisIsSnakeCase')
    })
  })
})