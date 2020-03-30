
import { foo } from './c.js'
// 如果是 CommonJS, 这里的 foo 应该是 undefined, 后续根本无法执行
export function bar() {
  if (Math.random() > 0.5) {
    foo()
  }
}
