module.exports = function forEach(object, func) {
  for (var key in object) {
    func(object[key], key)
  }
  return object
}