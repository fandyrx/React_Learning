import React, { useEffect, useState } from 'react'
import useLocalStorage from "./hooks/local-store-hook"

export default function App() {
	const [name,setName] =  useLocalStorage("name")
	


	return (
		<div>
			<h2>CustomDataStore:{name}</h2>
			<button onClick={e=> setName("kobe")}>设置 name</button>	
		</div>
	)
}
