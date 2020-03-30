
// node 本身不支持 ESModule, 所以安装了 esm 模块来解决
// node -r esm b.js
import { count, obj } from './a.js'

// 会报错 TypeError: Assignment to constant variable.
// count = 1

// 成功修改
obj.name = 'zzn'

// 检验模块中的变化能否同步
console.log(count)
setTimeout(() => {
  console.log(count)
}, 2000)
