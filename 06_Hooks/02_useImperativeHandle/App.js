import React ,{useEffect,useRef,useImperativeHandle , forwardRef}from 'react'
// 子组件内部控制DOM,避免父元素过多牵涉,
//拦截ref 只能调用子元素提供的方法(第二个函数返回一个对象,内含方法属性)

const MyInput = forwardRef((props,ref)=>{
	const inputRef = useRef();

	useImperativeHandle(
		ref,

		() => ({
			focus: ()=> {
				inputRef.current.focus()
			}
		}),

		[inputRef.current]
	)

	return <input ref={inputRef} type="text"></input>
	
})



export default function App() {
		const inputRef = useRef();

	return (
		<div>
			<MyInput  ref={inputRef} />
			<button onClick={e=> inputRef.current.focus()}>文本框聚焦</button>
		</div>
	)
}

