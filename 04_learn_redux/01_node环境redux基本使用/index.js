//1.导入redux (目前在node.js环境) 
//commonjs 的一种实现 =>nodejs
const redux= require("redux")



const initialState = {
  counter:0
}

//  reducer     数组的函数:Array.prototype.reduce(reducer,?initialValue)
// ['a','b'].reduce(回调函数,初始值)
// ['a', 'b'].reduce((preValue, item, index) => { do something},初始值)
function reducer(state = initialState,action) {
  switch(action.type) {
    case "INCREMENT": 
    return {...state,counter:state.counter + 1}
   
    case "DECREMENT": 
    return {...state,counter:state.counter - 1}
   
    case "ADD_NUMBER": 
    return {...state,counter:state.counter + action.num}
   
    case "SUB_NUMBER": 
    return {...state,counter:state.counter - action.num}
   

  }
}

//  store
// 不建议createStore了
const store = redux.createStore(reducer)



//  actions

const action1 = {type:"INCREMENT"}
const action2 = {type:"DECREMENT"}

const action3 = {type:"ADD_NUMBER",num:5}
const action4 = {type:"SUB_NUMBER",num:12}

// 订阅store修改 
store.subscribe(()=>{
  console.log("counter",store.getState().counter)
  // console.log("counter",store.counter)
})

//派发actions
store.dispatch(action1)
store.dispatch(action2)
store.dispatch(action3)
store.dispatch(action4)

