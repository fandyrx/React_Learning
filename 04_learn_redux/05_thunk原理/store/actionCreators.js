// 引入常量名 
import { INCREMENT,DECREMENT,ADD_NUMBER,SUB_NUMBER} from "./constants.js"

export const addAction = num => ({
  type:ADD_NUMBER,
  num
})
  
// //  actions
export const subAction = num => ({
  type:SUB_NUMBER,
  num
})

export const increment = num => ({
  type:INCREMENT,
  num
})

export const  decrement = num => ({
  type:DECREMENT,
  num
})

