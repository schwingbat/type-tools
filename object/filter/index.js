module.exports = function filter(object, func) {
  var filtered = {}

  for (var key in object) {
    if (func(object[key], key)) {
      filtered[key] = object[key]
    }
  }

  return filtered
}