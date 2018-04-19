const toSnakeCase = require('./index')
require('./patch')

describe('string/toSnakeCase', () => {
  describe('standalone', () => {
    it('replaces spaces with underscores', () => {
      expect(toSnakeCase('this is a string')).toBe('this_is_a_string')
    })

    it('handles a lowercase letter followed by an uppercase letter', () => {
      expect(toSnakeCase('camelCaseToSnakeCase')).toBe('camel_case_to_snake_case')
      expect(toSnakeCase('thisIsTheCamelCaseString')).toBe('this_is_the_camel_case_string')
    })

    it('properly separates A in a camelCase sentence', () => {
      expect(toSnakeCase('conversionIsACrapshoot')).toBe('conversion_is_a_crapshoot')
    })

    it('handles an A at the start of a word in camelCase', () => {
      expect(toSnakeCase('AFluffyBunny')).toBe('a_fluffy_bunny')
    })

    it('replaces dashes between letters with underscores', () => {
      expect(toSnakeCase('this-is-a-string')).toBe('this_is_a_string')
    })

    it('handles acronyms', () => {
      expect(toSnakeCase('thisIsHTML')).toBe('this_is_html')
      expect(toSnakeCase('thisIsHAML')).toBe('this_is_haml') // With A in acronym
      expect(toSnakeCase('thisIsAARF')).toBe('this_is_aarf') // Starting with A
    })
  })

  describe('patched', () => {
    it('extends the string prototype', () => {
      expect(typeof 'string'.toSnakeCase).toBe('function')
    })

    it('replaces spaces with underscores', () => {
      expect('this is a string'.toSnakeCase()).toBe('this_is_a_string')
    })

    it('handles a lowercase letter followed by an uppercase letter', () => {
      expect('camelCaseToSnakeCase'.toSnakeCase()).toBe('camel_case_to_snake_case')
      expect('thisIsTheCamelCaseString'.toSnakeCase()).toBe('this_is_the_camel_case_string')
    })

    it('properly separates A in a sentence', () => {
      expect('conversionIsACrapshoot'.toSnakeCase()).toBe('conversion_is_a_crapshoot')
    })

    it('handles an A at the start of a word', () => {
      expect('AFluffyBunny'.toSnakeCase()).toBe('a_fluffy_bunny')
    })

    it('replaces dashes between letters with underscores', () => {
      expect('this-is-a-string'.toSnakeCase()).toBe('this_is_a_string')
    })

    it('handles acronyms', () => {
      expect('thisIsHTML'.toSnakeCase()).toBe('this_is_html')
      expect('thisIsHAML'.toSnakeCase()).toBe('this_is_haml') // With A in acronym
      expect('thisIsAARF'.toSnakeCase()).toBe('this_is_aarf') // Starting with A
    })
  })
})