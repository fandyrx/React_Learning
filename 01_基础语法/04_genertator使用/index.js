// 生成器函数
function * foo(){
  console.log("hello之前代码")
  yield "hello"
  console.log("world之前代码")
  yield "world"
  console.log("this之前代码")
  yield "this"
  console.log("is之前代码")
  yield "is"
  console.log("generator之前代码")
  yield "generator"
  console.log("generator之后代码")


}

let result = foo()
// iterator 迭代器
console.log(result) //Object [Generator] {}

const res1 = result.next();
const res2 = result.next();

console.log(res1)
console.log(res2)
// console.log(res3)


// 执行流程, generator函数返回一个迭代器,迭代器每次调用.next()释放一个yield结果
//1.格式: function *foo { ... } 
//2. 内部yield 后为输出 
//3. 每次next()只释放一个结果,且不执行yield后方语句



// generator/promise结合使用

function* bar() {
  console.log(111)
  const result = yield new Promise((resolve,reject)=> {
    setTimeout(() => {
      resolve("模拟网络请求")
    }, 3000);
  })
  console.log(result)
}

const iterator = bar()

iterator.next().value.then(res=>{
  iterator.next(res)
  // next()传入参数作为这次yield 的结果
})