module.exports = function toTitleCase(string) {
  var lowercased = ['a', 'an', 'the', 'and', 'but', 'or', 'of', 'on', 'upon', 'in', 'with']
  var words = string
    .split(' ')
    .map(function(word) {
      if (lowercased.indexOf(word.trim().toLowerCase()) === -1) {
        // Word is not in lowercased list
        return word[0].toUpperCase() + word.slice(1).toLowerCase()
      } else {
        return word.toLowerCase()
      }
    })
  var joined = words.join(' ')
  return joined[0].toUpperCase() + joined.slice(1)
}