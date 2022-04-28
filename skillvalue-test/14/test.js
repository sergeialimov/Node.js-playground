var m = require('module')
var src = 'module.exports = 42'
var res = require('vm')
  .runInThisContext(m.wrap(src))
  (exports, module, __filename, __dirname)
console.log(module.exports)