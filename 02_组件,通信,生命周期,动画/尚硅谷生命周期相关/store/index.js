import {createStore, applyMiddleware,compose} from "redux"
import reducer from "./reducer.js"
// 1.saga 实例创建函数引入
import createSagaMiddleware from 'redux-saga'
//中间件
import  thunkMiddleware from "redux-thunk" 
//2.引入saga generator
import mySaga from '@/sagas/mySaga.js'
// create the saga middleware
const sagaMiddleware = createSagaMiddleware()


//3.合并,挂载
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const storeEnhancer =   applyMiddleware(thunkMiddleware,sagaMiddleware)


const store = createStore(reducer,composeEnhancers(storeEnhancer))

//4. then run the saga
sagaMiddleware.run(mySaga)


export default store