
exports.done = 'not done'
// 执行到这里, c 停止, d 执行
var d = require('./d.js')
// d 执行完后回来, 拿到 d.done = 'done'
console.log('c: d ' + d.done)

exports.done = 'done'

console.log('c done')
