// ES5 类
// function Person(name,age) {
//   this.name = name 
//   this.age = age
// }
// Person.prototype.running = function() {
//   console.log(this.name,this.age);
// }
// var p  = new Person('名字',18)

// es6
class Person {
  constructor(name,age){
    this.name = name 
    this.age = age
  }
}

const p = new Person("mingzi",18);


// 逻辑与(假优先) 逻辑或(真优先)  代表打印优先,其他按语义

console.log(1 && 2);     //条件成立,执行2
console.log(false && 2);     //其中一个条件不成立,所有不执行
console.log(1 && false);     //优先找假, 没有则执行后方语句
console.log("----");
console.log(false || 2);  //优先找真  执行真的语句
console.log(2 || false);  //找真
console.log(false || false);  //找真
console.log(1 || 2);  //
console.log("-----")
// 常用 数组处理 map,forEach,join 
 const arr = [1,2,3]  //数组转字符串
 console.log(arr.join(" "))