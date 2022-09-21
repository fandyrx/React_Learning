import redux from "redux"
import reducer from "./reducer.js"


//  store
// 不建议createStore了 
//Redux Toolkit 简化了编写 Redux 逻辑和设置 store 的过程。 
const store = redux.createStore(reducer)





export default store