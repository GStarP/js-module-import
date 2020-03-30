
let count = 0

let obj = {
  name: 'hxw'
}

// 检验 b 是否能修改模块对象的属性
setTimeout(() => {
  console.log('a.obj.name', obj.name)
}, 1000)

// 检验模块内部的变化能够同步到 b 中
setTimeout(() => {
  count = 1
}, 1500)

export {
  count,
  obj
}
