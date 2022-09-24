import React,{useState,useEffect,useReducer }from 'react'

function reducer(state,action) {
	switch(action.type) {
		case "increment":
			return {...state , counter: state.counter + 1}
		case "decrement":
			return {...state , counter: state.counter - 1}
	}
}

export default function App() {
	// const [count,setCount] = useState(0)
	const [state,dispatch] = useReducer(reducer,{counter:1});
	// const arr = useState(0);
	// const state = arr[0];
	// const setState = arr[1];
	useEffect(()=>{
		console.log("订阅事件执行了")

		return()=>{
			console.log("-----取消事件")
		}
	},[])
	

	
	return (
		<div>
			<h2>
				当前计数:{state.counter}
				<button onClick={e =>	dispatch({type:"increment"})}>+1</button>
				<button onClick={e =>	dispatch({type:"decrement"})}>-1</button>
			</h2>
		</div>
	)
}
