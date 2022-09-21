import store from './store/index.js'

import {
  addAction,
  subAction
} from  './store/actionCreators.js'

// 订阅store修改 
store.subscribe(()=>{
  console.log("counter",store.getState().counter)
  // console.log("counter",store.counter)
})

//派发actions

store.dispatch(addAction(10))
store.dispatch(subAction(5))
