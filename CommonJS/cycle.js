
// c 先执行
var c = require('./c.js')
var d = require('./d.js')
// c, d 全部执行完
console.log('c ' + c.done + ', ' + 'd ' + d.done)
