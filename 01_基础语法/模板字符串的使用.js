// 1.模板字符串
// 基础使用
const name = "名字";
const age = 18

const message = `my name is ${name},my age is ${age}`

console.log(message)

// 调用函数
function test(...args) {
  console.log(args)
}

test`my name is ${name},my age is ${age}`

test`
  font-size:15px;
  color:red;
`
// 以插入模板分界, 第一个数组存入模板 最后一个为''(最后没写东西了)
//然后一次传入模板
