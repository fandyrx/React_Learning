# 1.Redux 
- state 状态  存储state
- action 对象 修改state  (只在这里修改数据)
- reducer 纯函数  (原来的state,action)  纯函数不直接修改外部数据:固定输入,固定输出,不依赖,不直接修改外部数据

# 2.三大原则
 - 单一数据源
 - State 是只读的    保证只在action修改数据,集中化处理,不用担心race condition(竞态) 问题;
 - 使用纯函数来执行修改   

> race condition(竞态) 多个地方,修改同一数据源

# 3.基本使用
安装引入redux 
- 创建初始状态数据 'initialState'
- 纯函数 reducer (state =initialState,action){ ....... } 
- 创建store = redux.createStore(reducer)
- 创建 actions :action1 = {type:"DOSOMETHING",params}

-派发actions: store.dispatch(action1)
 //执行reducer(state,action1)

# 4.API 和 流程
创建store 实例 ,身上有几个API 方法
- 派发事件 dispatch()       传入触发哪个事件
- 获取当前状态库的数据 getState() 
- 订阅 subscribe()

```
store.subscribe(()=>{
  console.log("counter",store.getState().counter)
  // console.log("counter",store.counter)
})
```
流程:
- 组件 触发事件(dispatch),根据触发类型(action)执行各自在reducer内部定义的方法
- 更新store 存储的数据(state)
- 订阅者 store.subscribe() 接口获取到仓库目前的状态数据
- this.setState()更新该组件数据
- render()重新被触发

# Redux Toolkit 简化了编写 Redux 逻辑和设置 store 的过程。 


```
import { createSlice, configureStore } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0
  },
  reducers: {
    incremented: state => {
      // Redux Toolkit 允许在 reducers 中编写 "mutating" 逻辑。
      // 它实际上并没有改变 state，因为使用的是 Immer 库，检测到“草稿 state”的变化并产生一个全新的
      // 基于这些更改的不可变的 state。
      state.value += 1
    },
    decremented: state => {
      state.value -= 1
    }
  }
})

export const { incremented, decremented } = counterSlice.actions

const store = configureStore({
  reducer: counterSlice.reducer
})

// 可以订阅 store
store.subscribe(() => console.log(store.getState()))

// 将我们所创建的 action 对象传递给 `dispatch`
store.dispatch(incremented())
// {value: 1}
store.dispatch(incremented())
// {value: 2}
store.dispatch(decremented())
// {value: 1}
```



# 个人总结:
## 1.基本方法:
- 1.安装redux,创建store文件夹 ,分别新建index.js,常量constants,减速器reducer,事件触发actionCreators
- 2. index.js 设置
```
index.js :
<!-- 引入 -->
import {createStore} from "redux"
<!-- 引入reducer(事件处理器) -->
import reducer from "./reducer.js"

<!-- 1.创建实例,把事件处理器放入配置 -->
const store = createStore(reducer)


<!-- 2.暴露仓库 -->
export default store
```
- 3.reducer.js 配置 
```
// 引入常量名 
import { INCREMENT,ADD_NUMBER} from "./constants.js"

<!-- 1.默认(初始)状态库 -->
const defaultStare = {
  counter:0
}


<!-- 减速器 reducer(根据事件处理状态) -->
function reducer(state = defaultStare,action) {   


  switch(action.type) {   <!-- switch 循环判断触发的事件类型 -->

    case INCREMENT: 
    return {...state,counter:state.counter + 1}   //<!-- 对象的合并:仓库数据平铺,后方数据处理后覆盖前方数据 -->
   

    case ADD_NUMBER: 
    return {...state,counter:state.counter + action.num}  <!-- 第二参数:action可以获取传入参数 -->
                                
    // switch需要有默认值
    default: return state

  }
}


export default reducer
```

- 4.actionCreators
```
// 引入常量名 
  import { INCREMENT,ADD_NUMBER } from "./constants.js"

  export const addAction = num => ({
    type:ADD_NUMBER,
    num
  })
    
  
  export const subAction = num => ({
    type:SUB_NUMBER,
    num
  })

  export const increment = num => ({
    type:INCREMENT,
    num
  })


```

   5.使用的地方,引入store,actions
   - 1.利用store.dispatch()  触发对应action
   - 2. 数据依赖store.getState().xxx  //获取某个数据
   - 3. 数据订阅 store.subscribe(**回调做数据处理**)
   - 4. 数据卸载 
     > 订阅 this.unsubscribe = store.subscribe(  //*do something*//  )
     >> 卸载:this.unsubscribe() 
```

export default class home extends PureComponent {
  constructor(props){
    super(props);
    this.state = {
      counter: store.getState().counter
    }
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(()=>  {       
      this.setState({
        counter: store.getState().counter
      })
    })
  }

  componentWillUnmount() {  
    this.unsubscribe();      //数据订阅的返回值是个函数,使用变量接住,绑定到this,组件卸载时候调用即可
  }

  render() {
    return (
      <div>
          <h1>home</h1> 
        <h2>当前计数: {this.state.counter}</h2>
        <button onClick={e=> this.decrement()}> -1 </button>
      
      </div>
    )
  }

  
  increment() {
    store.dispatch(decrement())
  }

}
```


## 2.库
yarn add react-redux

