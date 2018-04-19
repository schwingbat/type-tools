const toTitleCase = require('./index')
require('./patch')

describe('string/toTitleCase', () => {
  describe('standalone', () => {
    it('capitalizes each word in a sentence', () => {
      expect(toTitleCase('this purple wingwong')).toBe('This Purple Wingwong')
      expect(toTitleCase('a nearly good function')).toBe('A Nearly Good Function')
    })

    it('ignores articles, conjunctions and prepositions', () => {
      expect(toTitleCase('prepositions in the middle')).toBe('Prepositions in the Middle')
      expect(toTitleCase('the computer and calculator or the book but not the fish')).toBe('The Computer and Calculator or the Book but Not the Fish')
    })

    it('fixes case when letter cases are all over the place', () => {
      expect(toTitleCase('ThE AdVeNTurEs oF BOrK')).toBe('The Adventures of Bork')
      expect(toTitleCase('THE ADVENTURES OF BORK')).toBe('The Adventures of Bork')
    })
  })

  describe('patched', () => {
    it('extends the string prototype', () => {
      expect(typeof 'this'.toTitleCase).toBe('function')
    })

    it('capitalizes each word in a sentence', () => {
      expect('this purple wingwong'.toTitleCase()).toBe('This Purple Wingwong')
      expect('a nearly good function'.toTitleCase()).toBe('A Nearly Good Function')
    })

    it('ignores articles, conjunctions and prepositions', () => {
      expect('prepositions in the middle'.toTitleCase()).toBe('Prepositions in the Middle')
      expect('the computer and calculator or the book but not the fish'.toTitleCase()).toBe('The Computer and Calculator or the Book but Not the Fish')
    })

    it('fixes case when letter cases are all over the place', () => {
      expect('ThE AdVeNTurEs oF BOrK'.toTitleCase()).toBe('The Adventures of Bork')
      expect('THE ADVENTURES OF BORK'.toTitleCase()).toBe('The Adventures of Bork')
    })
  })
})