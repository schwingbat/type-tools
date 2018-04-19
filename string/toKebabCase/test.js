const toKebabCase = require('./index')
require('./patch')

describe('string/toKebabCase', () => {
  describe('standalone', () => {
    it('converts from spaces', () => {
      expect(toKebabCase('this is a string')).toBe('this-is-a-string')
    })

    it('converts from camelCase', () => {
      expect(toKebabCase('javascriptyCSSClassName')).toBe('javascripty-css-class-name')
      expect(toKebabCase('backgroundColor')).toBe('background-color')
    })

    it('converts from snake_case', () => {
      expect(toKebabCase('stuff_is_cool')).toBe('stuff-is-cool')
    })
  })

  describe('patched', () => {
    it('extends the string prototype', () => {
      expect(typeof 'string'.toKebabCase).toBe('function')
    })

    it('converts from spaces', () => {
      expect('this is a string'.toKebabCase()).toBe('this-is-a-string')
    })

    it('converts from camelCase', () => {
      expect('javascriptyCSSClassName'.toKebabCase()).toBe('javascripty-css-class-name')
      expect('backgroundColor'.toKebabCase()).toBe('background-color')
    })

    it('converts from snake_case', () => {
      expect('stuff_is_cool'.toKebabCase()).toBe('stuff-is-cool')
    })
  })
})