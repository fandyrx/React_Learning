import {createStore, applyMiddleware} from "redux"
import reducer from "./reducer.js"

// 1.引入中间件   ,发送异步请求
import  thunkMiddleware from "redux-thunk" 


//  2.中间件使用   applyMiddleware(中间件1,中间件2,....)
const storeEnhancer =   applyMiddleware(thunkMiddleware)
//  store
//第二个参数  
const store = createStore(reducer,storeEnhancer)

//3.全局index.js 引入 import { Provider } from 'react-redux',包裹子组件,利用context传递store


export default store