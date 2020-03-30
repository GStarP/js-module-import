
let a = require('./a.js')

// 虽然这里 a.count 改变了, 但由于这只是一个拷贝, 所以模块 a.js 中的 count 仍然是 0
a.count++
console.log('b.count.1', a.count)

// 这里对于 obj 属性的改变反映到了 a.js 模块中
console.log('b.obj.1', a.obj.name)
a.obj.name = 'zzn'

// 再次导入, 没有再次执行 a.js, 'first load' 只打印一次
let a2 = require('./a.js')
