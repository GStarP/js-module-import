
exports.done = 'not done'
// 执行到这里, 去加载 c, 但是 c 只加载了 done = 'not done', 所以只拿到这个
var c = require('./c.js')
// 拿到 c.done 后, 执行至结束
console.log('d: c ' + c.done)

exports.done = 'done'

console.log('d done')
