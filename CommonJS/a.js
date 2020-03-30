
// 为了在 b.js 改变其 a.count 后展示模块内 count 的不变
let count = 0
setTimeout(() => {
  console.log('a.count.1', count)
}, 1000)

// 为了在 b.js 改变其 a.obj 后展示模块内 obj 的改变
let obj = {
  name: 'hxw'
}
setTimeout(() => {
  console.log('a.obj.1', obj.name)
}, 1000)

// 为了体现加载同一模块不会重复执行
console.log('first load')

module.exports = {
  count,
  obj
}
