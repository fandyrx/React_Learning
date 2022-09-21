// 引入常量名 
import { INCREMENT,DECREMENT,ADD_NUMBER,SUB_NUMBER } from "./constants.js"

const defaultStare = {
  counter:0
}


//  reducer
function reducer(state = defaultStare,action) {
  switch(action.type) {
    case INCREMENT: 
    return {...state,counter:state.counter + 1}
   
    case DECREMENT: 
    return {...state,counter:state.counter - 1}
   
    case ADD_NUMBER: 
    return {...state,counter:state.counter + action.num}
   
    case SUB_NUMBER: 
    return {...state,counter:state.counter - action.num}
    // 需要默认值
    default: return state

  }
}


export default reducer