# **useState** react 暴露的一个函数
- const arr  = useState(可以传入默认参数)  返回一个数组
- const state = arr[0];     // 当前state 数据
- const setState = arr[1];  //操作数据的函数


	解构简写方式**const [count,setCount] = useState(0)**
```
import React,{useState}from 'react'

export default function App() {

	const arr = useState(0);
	const state = arr[0];
	const setState = arr[1];
	
	return (
		<div>
			<h2>
				当前计数:{state}
				<button onClick={e=>setState(state + 1)}>+1</button>
			</h2>
		</div>
	)
}

```


# 模拟声明周期 **useEffect()**  两个参数(回调,依赖的数据[])  
```
//1.数据更新都会执行一次
useEffect(()=>{
		console.log("执行了")
	})
//2.依赖的数据无,只执行一次
useEffect(()=>{
		console.log("订阅事件")
	},[])
//3.依赖数据count,数据count 变化才会执行

useEffect(()=>{
		console.log("网络请求")
	},[count])

```
## 生命周期componentDidMount componentWillUnmount 函数式组件模拟
```
<!-- 第一个参数,返回另一个函数,每次组件卸载,数据更新都会执行 -->
	useEffect(()=>{
		console.log("订阅事件执行了")

		return()=>{
			console.log("-----取消事件")
		}
	},[])

  <!-- 依赖[],便 两个周期只在,更新和卸载执行一次 -->
```
# **useContext()** 
- 1.const myContext = createContext()
- 2.利用Provider 包裹子组件,传入props
```
  <myContext.provider value={{name:"名字"}}>
    < 需要传递信息的 组件 />
  </myContext.provider>
```
- 3.const user = **useContext(myContext)**   可以直接获取props  ,不需要用Consumer组件去包裹传递  

# **useReducer(reducer,state,第三个参数)**
- 1.当useState() 处理逻辑比较繁杂的时候,用这个钩子替代  **不是redux,数据无法共享**

`  const [state,dispatch] = useReducer(reducer,{counter:1});`

```
jsx部分: 
return (
		<div>
			<h2>
				当前计数:{state.counter}
				<button onClick={e =>	dispatch({type:"increment"})}>+1</button>
				<button onClick={e =>	dispatch({type:"decrement"})}>-1</button>
			</h2>
		</div>
	)
```

# **useCallback(回调,依赖)**
- 1. 返回一个 memoized 回调函数 
- 2.场景:将一个组件中的函数,传递给子元素进行回调使用时,使用useCallback对函数进行处理
- 3. 性能优化:
  
  - 函数式组件内部定义的函数,如果提供给子组件,当函数式组件再次渲染,所有子组件都会渲染
  -  useCallback() 使这个函数是个固定值,(当闭包理解?)不会引起组件重新渲染,除非依赖值改变

# **useMemo(返回值,依赖)**
- 1.对返回值 memoized ,可以函数,可以对象....

# **useRef()**
- 1. 标记作用
- 2. 传入一个数据,页面刷新仍旧保持之前状态
```
const numRef = useRef(count)
useEffect(()=>{
		numRef.current = count;
})
```
- numRef.current 保持了之前状态的值
- count 随页面数据更新而更新


# **useImperaticeHandle()**   结合forwardRef使用,子组件接受ref ,并拦截
----
```
forwardRef((props,ref)=>{
  return <div ref={ref} >通过这个api函数式组件传递ref </div>
})
```
----
- 1. 子组件内部控制DOM,避免父元素过多牵涉,
- 2. 拦截ref 只能调用子元素提供的方法(第二个函数返回一个对象,内含方法属性)
- 3.参数(父组件传入ref,回调函数(返回一个对象,内含自定义方法属性),[依赖数据])

# **useLayoutEffect**
- 1.useEffect类似,**useEffect不会阻塞DOM渲染,DOM渲染完毕再执行内部定义的函数**
- 2.useLayoutEffect会等数据完全更新再渲染DOM

# **自定义HOOK**
函数前加use 
- 1. 以use开头定义的函数,内部可以使用useEffect(),useState等函数
- 2. 只是一些逻辑的抽取,普通函数内部不能用hook,所以加个use开头,变成自定义hook