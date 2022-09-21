// 引入常量名 
import { ADD_NUMBER,SUB_NUMBER} from "./constants.js"

// function addAction(num) {
//   return {
//     type:"ADD_NUMBER",
//     num
//   }
// }

// 箭头函数
// export const addAction = (num) => {
//   return {
//     type:"ADD_NUMBER",
//     num
//   }
// }

// 简写  ()代表返回的是个{}

export const addAction = num => ( {
  type:ADD_NUMBER,
  num
})
  
// //  actions
export const subAction = num => ({
  type:SUB_NUMBER,
  num
})

