import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeAsync, setName } from './store';


export default function App() {
	const dispatch =useDispatch();
	const {name} = useSelector(state => state.student)
	


	return (
		<div>
			<h2>stu切片的名字:{ name }</h2>
			<button onClick={e=> dispatch(changeAsync())}>设置 name</button>	
		</div>
	)
}
