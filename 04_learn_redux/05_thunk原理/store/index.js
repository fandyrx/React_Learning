import {createStore, applyMiddleware,compose} from "redux"
import reducer from "./reducer.js"

// 1.引入中间件   ,发送异步请求
import  thunkMiddleware from "redux-thunk" 
//浏览器开发者工具引入
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({trace:true}) || compose;
//  2.中间件使用   applyMiddleware(中间件1,中间件2,....)
const storeEnhancer =   applyMiddleware(thunkMiddleware)
//  store
//第二个参数  
const store = createStore(reducer,composeEnhancers(storeEnhancer))

//3.全局index.js 引入 import { Provider } from 'react-redux',包裹子组件,利用context传递store


export default store